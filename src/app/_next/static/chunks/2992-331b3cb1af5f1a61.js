(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2992],
    {
        223: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => {
                let { uid: t, kind: a } = e;
                return ''.concat(t, ':').concat(a);
            };
        },
        2215: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => i });
            var i = (function (e) {
                return ((e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e);
            })({});
        },
        2258: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { v: () => i }),
                (function (e) {
                    ((e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen'));
                })(i || (i = {})));
        },
        3409: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { _: () => n });
            var i,
                r = a(5120);
            !(function (e) {
                ((e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus'));
            })(i || (i = {}));
            var l = a(7802);
            let s = r.gK.model('CommunicationButtonAction', {
                    id: r.gK.maybeNull(r.gK.string),
                    type: r.gK.maybeNull(r.gK.enumeration(Object.values(l.T))),
                    value: r.gK.maybeNull(r.gK.string),
                    communicationId: r.gK.maybeNull(r.gK.string),
                }),
                n = r.gK.model('CommunicationButton', {
                    text: r.gK.maybeNull(r.gK.string),
                    color: r.gK.maybeNull(r.gK.enumeration(Object.values(i))),
                    action: r.gK.maybeNull(s),
                    textColor: r.gK.maybeNull(r.gK.string),
                });
        },
        3629: (e, t, a) => {
            'use strict';
            a.d(t, { W4: () => l, qV: () => i, yc: () => r });
            let i = Symbol(),
                r = Symbol(),
                l = Symbol();
        },
        4765: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            var i = (function (e) {
                return ((e.LIKED = '1'), (e.DISLIKED = '0'), e);
            })({});
        },
        5503: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var i = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        6648: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => Array.from(new Set(e)).sort();
        },
        7227: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => l });
            var i = a(5120),
                r = a(93512);
            let l = (e, t) => {
                var a;
                return (0, i.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (a = e.type) ? a : void 0, agent: (0, r.K)(t) });
            };
        },
        7364: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(5120),
                r = a(63565),
                l = a(15656);
            let s = i.gK
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
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        10363: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var i = a(19207);
            let r = (e) => (0, i.h)(e.data.concert, e.data.minPrice);
        },
        11028: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        11899: (e, t, a) => {
            'use strict';
            a.d(t, { DQ: () => l, em: () => i, l8: () => r });
            let i = 'WCvtCKnr84oYEPnRuvUo',
                r = 'PAYMENT_COMPLETED',
                l = 500;
        },
        12149: (e, t, a) => {
            'use strict';
            function i() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.platform;
            }
            a.d(t, { u: () => i });
        },
        12622: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(5120),
                r = a(93512);
            let l = (e) => {
                var t, a, l, s;
                return (0, i.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (l = null == (t = e.colors) ? void 0 : t.average) ? l : '',
                        waveText: null != (s = null == (a = e.colors) ? void 0 : a.waveText) ? s : '',
                    },
                    agent: (0, r.K)(e.agent),
                    type: e.type,
                });
            };
        },
        12739: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(82212);
            let r = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                l = (e) => r.includes(e.type);
        },
        12906: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => l });
            var i = a(5120),
                r = a(57285);
            let l = (e) => {
                let t = (0, r.n)(e);
                return (0, i.wg)(t);
            };
        },
        12946: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { l: () => i }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(i || (i = {})));
        },
        13607: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        14283: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => n });
            var i = a(5120),
                r = a(51724),
                l = a(12906),
                s = a(53399);
            let n = (e) => {
                var t, a;
                let { artist: n, trailer: o, isComposer: d, likesCount: g } = e,
                    u = (0, s.m)(n.decomposed),
                    { available: c, disclaimers: m } = (0, r.f)(n);
                return (0, i.wg)({
                    id: String(n.id),
                    name: n.name,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    various: n.various,
                    decomposed: u,
                    isAvailable: c,
                    disclaimers: m,
                    isComposer: d,
                    averageColor: null == (a = n.cover) ? void 0 : a.color,
                    trailer: (0, l.m)(o),
                    likesCount: g,
                });
            };
        },
        14661: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        15253: (e, t, a) => {
            'use strict';
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
            'use strict';
            var i;
            (a.d(t, { x: () => i }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(i || (i = {})));
        },
        17342: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        18143: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18243: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            var i = a(42078);
            let r = (e) => {
                let { uid: t, kind: a } = e;
                return ''.concat(i._.PLAYLIST_ITEM).concat(t, '_').concat(a);
            };
        },
        18344: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { R: () => i }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(i || (i = {})));
        },
        19207: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(5120),
                r = a(19815),
                l = a(58400),
                s = a(47255);
            let n = (e, t) => {
                var a, n, o, d;
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
                    cashbackValuePercent: null == (n = e.cashback) ? void 0 : n.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (d = null == (o = e.eventInfo) ? void 0 : o.type) ? d : r.Z.UNSPECIFIED,
                });
            };
        },
        19815: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Z: () => i }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(i || (i = {})));
        },
        20012: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        21127: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { IR: () => r, JQ: () => i, bL: () => s, ew: () => l });
            let i = 220,
                r = 88,
                l = 'px',
                s = '{lang}';
        },
        22786: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        22983: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.MIX = 'MIX'), (e.Q2V = 'Q2V'));
                })(i || (i = {})));
        },
        23341: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var i = a(5120);
            let r = i.gK.model('Pager', { page: i.gK.number, perPage: i.gK.number, total: i.gK.number, lastPage: i.gK.maybe(i.gK.boolean) });
        },
        26e3: (e, t, a) => {
            'use strict';
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
            'use strict';
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
            'use strict';
            a.d(t, { Rk: () => n, VN: () => l, nd: () => s, vY: () => r });
            var i = a(70025);
            let r = 10,
                l = 1,
                s = [i.O.ABOUT, i.O.TRACKS],
                n = 5;
        },
        27506: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27984: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        28870: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var i = a(5120);
            let r = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        30064: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => o });
            var i = a(5120),
                r = a(50633),
                l = a(97956),
                s = a(63425);
            let n = i.gK.model('Price', { value: i.gK.number, currency: i.gK.string }),
                o = i.gK
                    .model('Concert', {
                        id: i.gK.string,
                        dataSessionId: i.gK.maybe(i.gK.string),
                        datetime: i.gK.maybe(i.gK.string),
                        city: i.gK.maybe(i.gK.string),
                        place: i.gK.maybe(i.gK.string),
                        contentRating: i.gK.maybe(i.gK.string),
                        price: i.gK.maybe(n),
                        cashbackTitle: i.gK.maybe(i.gK.string),
                        cashbackValuePercent: i.gK.maybe(i.gK.number),
                        title: i.gK.maybe(i.gK.string),
                        cover: i.gK.maybe(s.$),
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
        30283: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => o });
            var i = a(5120),
                r = a(2258),
                l = a(3474);
            let s = i.gK.model('BarBelowContent', {
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
                n = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(r.v)),
                    screenId: i.gK.string,
                    content: s,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                o = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(n),
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
            'use strict';
            a.d(t, { N: () => i });
            var i = (function (e) {
                return ((e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e);
            })({});
        },
        31510: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        31661: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => r });
            var i = a(63565);
            let r = (e) => !!e && (e === i.g.RATING || e === i.g.YEAR);
        },
        31893: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { z: () => i }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(i || (i = {})));
        },
        31946: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        32298: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { P: () => i, u: () => r });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                r = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32932: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { k: () => i });
            let i = 100;
        },
        35994: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37862: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        38147: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        38514: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            var i = a(67174);
            let r = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        39339: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => E });
            var i = a(5120),
                r = a(89916),
                l = a(60385),
                s = a(79390),
                n = a(50633),
                o = a(27506),
                d = a(67174),
                g = a(23744),
                u = a(97335),
                c = a(67318),
                m = a(34407),
                y = a(554),
                p = a(18243),
                b = a(99007);
            let E = i.gK
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
                        return e.kind === b.j.LIKE || e.kind === b.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === b.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === l.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, i._n)(e)) return !1;
                        let { library: t } = (0, n.M)(e);
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
                        let { pinsCollection: t } = (0, n.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, n.M)(e);
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
                        let { library: t, user: a } = (0, n.M)(e);
                        if (a.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: a.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, i._n)(e) && r === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, i.L3)(function* () {
                        if (!(0, i._n)(e)) return;
                        let { pinsCollection: t, user: a } = (0, n.M)(e);
                        if (a.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e)) return c.Y.ERROR;
                        let { usersResource: a, modelActionsLogger: l } = (0, i._$)(e);
                        try {
                            var s, n;
                            let i = yield a.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (s = e.revision) ? s : 0, playlistKind: e.kind });
                            return ((e.revision = i.revision), (e.isAvailable = null == (n = i.available) || n), c.Y.OK);
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
                        let { pinsCollection: t } = (0, n.M)(e),
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
                            { user: s } = (0, n.M)(e),
                            d = e.visibility,
                            g = e.isPublic ? l.L.PRIVATE : l.L.PUBLIC;
                        t && (g = t);
                        try {
                            return (
                                (e.visibility = g),
                                e.isOwnFavouritePlaylist
                                    ? yield s.setSettings({ userMusicVisibility: g })
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
            'use strict';
            a.d(t, { $: () => r });
            var i = a(7123);
            let r = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        41427: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { G: () => u });
            var i = a(5120),
                r = a(80989),
                l = a(22983),
                s = a(50633),
                n = a(97956),
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
                                let { pinsCollection: t } = (0, s.M)(e);
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
                                let { library: t } = (0, s.M)(e);
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
                                let { experiments: t } = (0, s.M)(e);
                                return t.checkExperiment(n.z.WebNextWaveAgentExperiment, 'on');
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
                            let { pinsCollection: t, user: a } = (0, s.M)(e);
                            if (a.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e) || !e.isLikeEnabled) return;
                            let { library: t, user: a } = (0, s.M)(e);
                            if (a.isAuthorized) return yield t.toggleVibeLike({ seeds: [...e.seeds] });
                        }),
                        getDescription() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, i._n)(e)) return t;
                            let { experiments: a } = (0, s.M)(e);
                            return a.checkExperiment(n.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                        },
                    }));
        },
        42078: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        44349: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { R: () => i }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(i || (i = {})));
        },
        45923: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { J: () => i });
            let i = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        48404: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { a: () => i }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(i || (i = {})));
        },
        50672: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { p: () => l });
            var i = a(5120),
                r = a(31510);
            let l = (e) => {
                let t = (0, r.e)(e);
                return (0, i.wg)(t);
            };
        },
        51611: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => s });
            var i = a(53548),
                r = a(4086),
                l = a(41928);
            let s = () => {
                let e = (0, l.N)().get(r.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    s = e.getDictionary(),
                    n = e.getAvailableLanguages(),
                    o = (0, i.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, i.useMemo)(() => ({ dictionary: s, language: t, defaultLanguage: a, availableLanguages: n, setLanguage: o }), [t, o]);
            };
        },
        51724: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => {
                var t, a, i, r, l, s;
                let n = null == (t = e.available) || t,
                    o = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((n = null == (l = null == (i = e.contentRestrictions) ? void 0 : i.available) || l),
                        (o = null != (s = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? s : [])),
                    { available: n, disclaimers: o }
                );
            };
        },
        52440: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => d });
            var i = a(5120),
                r = a(27506),
                l = a(74773),
                s = a(66911),
                n = a(67311),
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
                        n.p,
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
                                var s;
                                return !!a && !(null == (s = e.pager) ? void 0 : s.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === l.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, r) => {
                                let s;
                                if (([l.G.IDLE, l.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = r), a)) s = i + 1;
                                else {
                                    var n, o, d, g;
                                    s = Math.ceil(
                                        (null != (d = null == (n = e.pager) ? void 0 : n.total) ? d : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let u = Math.max(i + 1, s);
                                (t.ensurePageStatesInitialized(u), e.pageStates && (e.pageStates[i] = r), r === l.G.REJECT && t.addLastRejectedPageToList(i));
                            },
                            setItems: (n, o) => {
                                var d;
                                let { page: g, pager: u, responseStatus: c } = o;
                                if (((e.requestsCount = (null != (d = e.requestsCount) ? d : 0) + 1), c === r.F.ERROR || !n || !u))
                                    return void t.setPageState(g, l.G.REJECT);
                                (e.pager
                                    ? a && ((e.pager.lastPage = u.lastPage), (e.pager.perPage = u.perPage))
                                    : (e.pager = { page: u.page, perPage: u.perPage, total: u.total, lastPage: u.lastPage }),
                                    t.setPageState(g, l.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, i.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, i.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, s.I)({ items: e.items, mappedRawItems: n, page: g, pageSize: e.pager.perPage })));
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
            'use strict';
            a.d(t, { s: () => n });
            var i = a(5120),
                r = a(14283),
                l = a(51724),
                s = a(12906);
            let n = (e) => {
                var t, a;
                let { album: n, artists: o, bookmateOptionRequired: d, chart: g, likesCount: u, trailer: c, releaseYear: m, releaseDate: y } = e,
                    { available: p, disclaimers: b } = (0, l.f)(n);
                return (0, i.wg)({
                    id: n.id,
                    title: n.title,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    type: n.albumType,
                    disclaimers: b,
                    artists: null == o ? void 0 : o.map((e) => (0, r.a)({ artist: e })),
                    averageColor: null == (a = n.cover) ? void 0 : a.color,
                    isAvailable: p,
                    likesCount: u,
                    bookmateOptionRequired: d,
                    chart: g,
                    trailer: (0, s.m)(c),
                    year: m ? Number(m) : void 0,
                    releaseDate: y,
                });
            };
        },
        54667: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { b: () => d });
            var i = a(5120),
                r = a(44349),
                l = a(76626),
                s = a(96826),
                n = a(74773),
                o = a(59497);
            let d = i.gK
                .compose(i.gK.model('DownloadedTracks', { items: i.gK.maybeNull(i.gK.array(s.v)), tracks: i.gK.maybeNull(i.gK.frozen()) }), o.X)
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
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let r = yield t.getTracks(a);
                                ((e.tracks = r), (e.items = (0, i.wg)(r.map((e) => (0, l.v)(e)))), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.RESOLVE));
                            } catch (t) {
                                (r.error(t), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = n.G.IDLE));
                    },
                }));
        },
        56146: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => r });
            var i = a(5120);
            let r = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
        },
        56846: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { E: () => i }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(i || (i = {})));
        },
        57448: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(4086),
                r = a(41928);
            let l = () => {
                let e = (0, r.N)(),
                    t = e.get(i.$I),
                    a = e.get(i.EN),
                    l = e.get(i.N1),
                    s = e.get(i._1),
                    n = e.get(i.V3),
                    o = e.get(i.Lb),
                    d = e.get(i.wK),
                    g = e.get(i.tz),
                    u = e.get(i.$8),
                    c = e.get(i.Oo),
                    m = e.get(i.X4),
                    y = e.get(i.O9),
                    p = e.get(i.E),
                    b = e.get(i.wH),
                    E = e.get(i.ok),
                    v = e.get(i.X8),
                    S = e.get(i.yq),
                    K = e.get(i.NN),
                    I = e.get(i.qN),
                    L = e.get(i.ro),
                    T = e.get(i.nM),
                    h = e.get(i.Ut),
                    N = e.get(i.K1),
                    A = e.get(i.eu),
                    f = e.get(i.SD),
                    C = e.get(i.aE),
                    R = e.get(i.ki),
                    k = e.get(i.c9),
                    P = e.get(i.en),
                    D = e.get(i.jQ),
                    _ = e.get(i.cZ),
                    O = e.get(i.Zl),
                    w = e.get(i.CN),
                    G = e.get(i.P1),
                    M = e.get(i.zj),
                    U = e.get(i.re),
                    B = e.get(i.JM),
                    V = e.get(i.Lk),
                    F = e.get(i.$$),
                    x = e.get(i.sv),
                    j = e.get(i.gd),
                    W = e.get(i.Ez),
                    X = e.get(i.u2),
                    $ = e.get(i.TD),
                    Y = e.get(i.dh),
                    J = e.get(i.LC),
                    q = e.get(i.PL),
                    H = e.get(i.DT);
                return {
                    accountResource: t,
                    afterTrackResource: a,
                    disclaimersResource: l,
                    usersResource: s,
                    landingResource: n,
                    landing3Resource: o,
                    landingBlocksResource: d,
                    albumResource: g,
                    libraryResource: u,
                    tracksResource: c,
                    topResource: m,
                    artistsResource: y,
                    slidesResource: p,
                    redAlertResource: b,
                    rotorResource: E,
                    waveResource: v,
                    searchResource: S,
                    searchPlaylistResource: K,
                    playlistResource: I,
                    playlistsResource: L,
                    pinResource: T,
                    metatagsResource: h,
                    tagResource: N,
                    feedResource: A,
                    wizard3Resource: f,
                    pinsResource: C,
                    musicHistoryResource: R,
                    dynamicPagesResource: k,
                    chartResource: P,
                    clipsResource: D,
                    lyricViewsResource: _,
                    nonMusicResource: O,
                    donationResource: w,
                    loaderResource: G,
                    lumenResource: M,
                    prefixlessResource: U,
                    streamsResource: B,
                    filtersResource: V,
                    ugcResource: F,
                    collectionResource: x,
                    adsResource: j,
                    personalResource: W,
                    familyResource: X,
                    childrenLandingResource: $,
                    promoResource: Y,
                    telemetryResource: J,
                    labelsResource: q,
                    concertsResource: H,
                    wordsResource: e.get(i.dA),
                    wheelResource: e.get(i.$Y),
                };
            };
        },
        58400: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => r });
            let i = /[+-]\d{2}:?\d{2}/,
                r = (e) => (null == e ? void 0 : e.replace(i, ''));
        },
        58870: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(5120),
                r = a(56146),
                l = a(76626);
            let s = (e, t) => (0, i.wg)({ ...(0, l.v)(e), chart: t && (0, r.w)(t) });
        },
        60385: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { L: () => i }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(i || (i = {})));
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        61691: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        63500: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { n: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(i || (i = {})));
        },
        63565: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { g: () => i }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(i || (i = {})));
        },
        63698: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var i = a(67174);
            let r = (e, t, a) =>
                (0, i.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: a });
        },
        64184: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        65208: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => g });
            var i = a(5120),
                r = a(89916),
                l = a(82212),
                s = a(21127),
                n = a(74773),
                o = a(59497),
                d = a(99159);
            let g = i.gK
                .compose(i.gK.model('Mixes', { items: i.gK.array(s.f), errorStatusCode: i.gK.maybeNull(i.gK.number) }), o.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === n.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: a, modelActionsLogger: s } = (0, i._$)(e);
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let r = yield a.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: l.t.MIXES });
                                ((e.items = { items: (0, i.wg)(r.items.map((e) => (0, d.J)(e.data))) }.items), (e.loadingState = n.G.RESOLVE));
                            } catch (t) {
                                (s.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT));
                            }
                    }),
                }));
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => n });
            var i = a(4086),
                r = a(41928),
                l = a(44084);
            let s = new WeakMap(),
                n = () =>
                    ((e) => {
                        if (e instanceof l.r) return e;
                        let t = s.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (s.set(e, a), a);
                    })((0, r.N)().get(i.Zf));
        },
        66564: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 36;
        },
        66911: (e, t, a) => {
            'use strict';
            function i(e) {
                let { items: t, mappedRawItems: a, page: i, pageSize: r } = e,
                    l = i * r,
                    s = 0;
                for (let e = l; e < l + r; e++) (a[s] && (t[e] = a[s]), s++);
            }
            a.d(t, { I: () => i });
        },
        67311: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        67879: (e, t, a) => {
            'use strict';
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
        67960: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        70025: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        70030: (e, t, a) => {
            'use strict';
            a.d(t, { u2: () => d, rl: () => i, mz: () => o, yq: () => u, zE: () => r });
            var i,
                r,
                l = a(9519),
                s = a(39499);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(i || (i = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(r || (r = {})));
            class n {
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
                        ((this.visibilityController = new n(e)),
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
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
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
                    let { container: t, scrollElement: a, items: i, gap: r, overscan: l = 2, onVisibilityChange: s } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = a),
                        (this.items = i),
                        (this.gap = r),
                        (this.overscan = Number.isFinite(l) ? Math.max(0, l) : 2),
                        (this.onVisibilityChange = s),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !g(a))
                    ) {
                        var n;
                        this.stopObservingResize = null == (n = this.resizeObserverAdapter) ? void 0 : n.observe(a, this.scheduleRefresh);
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
                                        s = e[l];
                                    if (!s) break;
                                    s.end >= t ? ((r = l), (i = l - 1)) : (a = l + 1);
                                }
                                return r;
                            })(t, a),
                            s = ((e, t) => {
                                let a = 0,
                                    i = e.length - 1,
                                    r = -1;
                                for (; a <= i;) {
                                    let l = Math.floor((a + i) / 2),
                                        s = e[l];
                                    if (!s) break;
                                    s.start <= t ? ((r = l), (a = l + 1)) : (i = l - 1);
                                }
                                return r;
                            })(t, i);
                        if (-1 === l || -1 === s || l > s) return [];
                        let n = Math.max(0, l - r),
                            o = Math.min(t.length - 1, s + r);
                        return t.slice(n, o + 1);
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
                                        let s = e.estimatedSize + a;
                                        (i.push({ id: e.id, index: t, start: r, end: r + s, size: s }), (r += s), (l = !0));
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
            'use strict';
            a.d(t, { ContainerProvider: () => m });
            var i = a(88800),
                r = a(53548),
                l = a(30282),
                s = a(4086),
                n = a(41928);
            let o = (0, r.cache)(async (e, t, i, r, s, n, o, d, g, u, c, m, y, p, b, E) => {
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
                                            icookie: s,
                                            serverDetectedLocale: n,
                                            changeLanguageToken: o,
                                            userAgent: d,
                                            incomingRequestId: g,
                                            browserInfo: u,
                                            customApiPrefixUrl: c,
                                            customApiToken: m,
                                            requestUrl: y,
                                        } = e,
                                        { rawCookieString: p } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return [t, a, i, r, l, s, n, o, d, g, p, u.name, u.version, c, m, y];
                                })(a),
                            )),
                        d);
                    return (await i.get(s.Xc).loadDictionary(), await (null == (t = await i.get(s.RG)) ? void 0 : t()), i);
                },
                c = (e) => {
                    let { children: t, containerLoader: a } = e,
                        l = (0, r.use)(a);
                    return (0, i.jsxs)(n.B.Provider, { value: l, children: [!1, t] });
                },
                m = (e) => {
                    let { children: t, baseSetup: a } = e,
                        l = u({ baseSetup: a });
                    return (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)(g.AppSuspenseLoader, {}), children: (0, i.jsx)(c, { containerLoader: l, children: t }) });
                };
        },
        70394: (e, t, a) => {
            'use strict';
            a.d(t, { StoreProvider: () => c_ });
            var i,
                r,
                l,
                s,
                n,
                o,
                d,
                g,
                u,
                c,
                m,
                y,
                p,
                b,
                E,
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
                D = a(5120),
                _ = a(50633),
                O = a(97956),
                w = a(67311);
            let G = D.gK.model('Cpa', { clid: D.gK.string, artistId: D.gK.number }),
                M = D.gK
                    .compose(D.gK.model('AlbumCpa', { albumId: D.gK.maybeNull(D.gK.number), cpa: D.gK.maybeNull(G) }), w.p)
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let { pageAlbumId: a, albumId: i, isNonMusic: r } = t,
                                {
                                    experiments: l,
                                    user: { isAuthorized: s },
                                } = (0, _.M)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, a) {
                            let {
                                    experiments: i,
                                    user: { hasPlus: r },
                                } = (0, _.M)(e),
                                l = i.checkExperiment(O.z.WebNextPlusCPA, 'on');
                            return ((e) => {
                                let {
                                    isCpaFeatureEnabled: t,
                                    isDesktop: a,
                                    hasPlus: i,
                                    albumId: r,
                                    isNonMusic: l,
                                    cpaAlbumId: s,
                                    hasCpa: n,
                                    isPlusCPAExperimentEnabled: o,
                                } = e;
                                return !!t && !a && !i && !!r && !l && (!!o || (r === s && n));
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
                                    experiments: s,
                                    settings: n,
                                    user: { hasPlus: o },
                                } = (0, _.M)(e);
                            return (null == (a = n.browserInfo) || a.isTouch, !1);
                        },
                        isHidePlusModalEnabled(t, a) {
                            var i;
                            let {
                                settings: r,
                                user: { hasPlus: l },
                            } = (0, _.M)(e);
                            return (null == (i = r.browserInfo) || i.isTouch, !1);
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, D.L3)(function* (t) {
                            let { albumId: a, preloadedCpa: i } = t,
                                { experiments: r, user: l } = (0, _.M)(e);
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
            let et = D.gK
                    .compose(
                        D.gK.model('VolumeItemTrack', {
                            type: D.gK.maybe(D.gK.enumeration(Object.values($.S))),
                            id: D.gK.union(D.gK.string, D.gK.number),
                            data: D.gK.maybeNull(Z.v),
                            position: D.gK.maybe(D.gK.number),
                            positionInContext: D.gK.number,
                            isBest: D.gK.maybe(D.gK.boolean),
                            hasEverFinished: D.gK.maybe(D.gK.boolean),
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                ea = D.gK.compose(D.gK.model('VolumeItemText', { type: D.gK.literal(W.r.TEXT), data: D.gK.maybeNull(D.gK.number) }), ee.X),
                ei = D.gK.union(ea, et),
                er = (e, t) => {
                    var a, i;
                    if (!e.checkExperiment(t, 'on')) return;
                    let r = null == (i = e.getExperiment(t)) || null == (a = i.value) ? void 0 : a.imp_id;
                    if ('string' != typeof r || !r.trim()) return;
                    let l = Number(r);
                    if (Number.isFinite(l)) return l;
                };
            var el = a(42078),
                es = a(52643);
            let en = (e, t, a, i) => ({ type: el._.ALBUM_ITEM, data: (0, es.s)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var eo = a(14283);
            let ed = (e, t) => ({ type: el._.ARTIST_ITEM, data: (0, eo.a)({ artist: e, trailer: t }) });
            var eg = a(73245);
            let eu = (e) => {
                    let { playlist: t, likesCount: a, trailer: i, tracksCount: r } = e;
                    return { type: el._.LIKED_PLAYLIST_ITEM, data: (0, eg.b)({ playlist: t, likesCount: a, trailer: i, tracksCount: r }) };
                },
                ec = (e, t) => ({ type: el._.PLAYLIST_ITEM, data: (0, eg.b)({ playlist: e, trailer: t }) });
            var em = a(7227);
            let ey = (e) => (0, D.wg)({ type: el._.WAVE_AGENT_ITEM, data: (0, em.l)(e.data.wave, e.data.agent) }),
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
                                          return en(e.data.album, e.data.artists, e.data.trailer, e.data.releaseDate);
                                      case el._.ARTIST_ITEM:
                                          return ed(e.data.artist, e.data.trailer);
                                      case el._.WAVE_AGENT_ITEM:
                                          return ey(e);
                                      case el._.PLAYLIST_ITEM:
                                          return ec(e.data.playlist, e.data.trailer);
                                  }
                              });
                    return (0, D.wg)({ items: a });
                };
            var eb = (function (e) {
                    return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e);
                })({}),
                eE = a(82212),
                ev = a(56846);
            function eS(e) {
                return {
                    id: e,
                    type: eE.t.ARTIST_RECOMMENDATIONS_PROMO,
                    loadingState: eb.IDLE,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    meta: { showPolicy: ev.E.LOAD_AND_SHOW },
                };
            }
            let eK = (e) =>
                    (0, D.wg)({
                        album: (0, es.s)({ album: e.album, artists: e.artists }),
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
                    return (0, D.wg)({ reporting: t, items: a });
                },
                eh = (e) => {
                    let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: r, isRejected: l, isNotEmpty: s, isOutdated: n, isNeededToHide: o } = e;
                    if (o) return !1;
                    switch (t) {
                        case ev.E.SHOW_AND_LOAD:
                            if (i || l || a) return !0;
                            return s;
                        case ev.E.LOAD_AND_SHOW:
                            return (r && s) || !!n;
                        default:
                            return !0;
                    }
                },
                eN = D.gK
                    .model('LandingBaseBlock', {
                        loadingState: D.gK.enumeration(Object.values(eb)),
                        id: D.gK.string,
                        isNotFound: D.gK.boolean,
                        hasSentAnalyticsOnLoaded: D.gK.boolean,
                        meta: D.gK.maybe(D.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === eb.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === eb.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === eb.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === eb.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === eb.OUTDATED;
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
                            e.loadingState = eb.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = eb.IDLE;
                        },
                    })),
                eA = D.gK.model('LandingBlockFetchableMetaSource', { uri: D.gK.string, countWeb: D.gK.maybe(D.gK.number), count: D.gK.maybe(D.gK.number) }),
                ef = D.gK.model('LandingBlockFetchableMeta', {
                    title: D.gK.maybe(D.gK.string),
                    description: D.gK.maybe(D.gK.string),
                    viewAllActionLink: D.gK.maybeNull(D.gK.string),
                    source: D.gK.maybe(eA),
                    showPolicy: D.gK.maybe(D.gK.string),
                    coverStyle: D.gK.maybe(D.gK.string),
                });
            var eC = a(49573),
                eR = a(90544),
                ek = a(67174),
                eP = a(63425);
            let eD = D.gK
                    .model('PromoDataItem', {
                        album: eC.J,
                        artists: D.gK.array(eR.P),
                        cover: eP.$,
                        coverContentMode: D.gK.maybe(D.gK.string),
                        clickUrl: D.gK.string,
                        yclid: D.gK.string,
                        utm: D.gK.frozen(),
                        hasClicked: D.gK.optional(D.gK.boolean, !1),
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
                        setClicked: (0, D.L3)(function* () {
                            if (!(0, D._n)(e) || e.hasClicked) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            try {
                                ((e.hasClicked = !0), yield t.reportForPromo(e.clickUrl));
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                e_ = D.gK.model('PromoDataReportingOptions', { url: D.gK.string, timeMs: D.gK.number }),
                eO = D.gK.model('PromoDataReporting', { blockRender: e_, blockImpression: e_, adImpressions: e_ }),
                ew = D.gK.model('Promo', { reporting: D.gK.maybe(eO), items: D.gK.array(eD) }).actions((e) => ({
                    report: (0, D.L3)(function* (t) {
                        if (!(0, D._n)(e)) return;
                        let { prefixlessResource: a, modelActionsLogger: i } = (0, D._$)(e);
                        try {
                            yield a.reportForPromo(t);
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                })),
                eG = eD
                    .props({ adImpressions: e_ })
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
                        reportImpression: (0, D.L3)(function* () {
                            if (!(0, D._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            try {
                                yield t.reportForPromo(e.adImpressions.url);
                            } catch (e) {
                                a.error(e);
                            }
                        }),
                    })),
                eM = ew.props({ items: D.gK.array(eG) }).named('ArtistRecommendationsPromoData'),
                eU = eN
                    .props({
                        type: D.gK.union(D.gK.literal(eE.t.ARTIST_RECOMMENDATIONS_PROMO), D.gK.literal(eE.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO)),
                        data: D.gK.maybe(eM),
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
                eB = D.gK.compose(D.gK.model('ArtistRecommendationsPromoPage', { artistRecommendationsPromo: D.gK.maybe(eU) }), w.p).actions((e) => ({
                    getArtistRecommendationsPromo: (0, D.L3)(function* (t) {
                        let { promoResource: a, modelActionsLogger: i } = (0, D._$)(e),
                            r = e.artistRecommendationsPromo;
                        if (r && !r.isLoading)
                            try {
                                r.loadingState = eb.PENDING;
                                let e = yield a.getBlockBanners(t);
                                if (!(0, D._n)(r)) return;
                                ((r.data = eT(e)), (r.loadingState = eb.RESOLVE));
                            } catch (e) {
                                if ((i.error(e), !(0, D._n)(r))) return;
                                r.loadingState = eb.REJECT;
                            }
                    }),
                    resetArtistRecommendationsPromo() {
                        let t = e.artistRecommendationsPromo;
                        if (!t) return;
                        let { id: a } = t;
                        (e.destroyItems([t]), (e.artistRecommendationsPromo = (0, D.wg)(eS(a))));
                    },
                })),
                eV = D.gK.model('LandingAlbumItem', { type: D.gK.literal(el._.ALBUM_ITEM), data: eC.J }),
                eF = D.gK.model('LandingArtistItem', { type: D.gK.literal(el._.ARTIST_ITEM), data: eR.P });
            var ex = a(78460);
            let ej = D.gK.model('LandingLikedPlaylistItem', { type: D.gK.literal(el._.LIKED_PLAYLIST_ITEM), data: ex.I }),
                eW = D.gK.model('LandingPlaylistItem', { type: D.gK.literal(el._.PLAYLIST_ITEM), data: ex.I });
            var eX = a(41814);
            let e$ = D.gK.model('LandingVibeAgentItem', { type: D.gK.union(D.gK.literal(el._.WAVE_AGENT_ITEM), D.gK.literal(el._.QUERY_TO_VIBE_ITEM)), data: eX.G }),
                eY = D.gK.union(ej, eV, eF, e$, eW),
                eJ = D.gK.model('EntitiesCarouselData', { items: D.gK.array(eY) }),
                eq = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.NEW_PLAYLISTS),
                            D.gK.literal(eE.t.EDITORIAL_COMPILATION),
                            D.gK.literal(eE.t.RECOMMENDED_PLAYLISTS),
                            D.gK.literal(eE.t.META_TAG_POPULAR_PLAYLISTS),
                            D.gK.literal(eE.t.META_TAG_NEW_ALBUMS),
                            D.gK.literal(eE.t.META_TAG_PLAYLISTS),
                            D.gK.literal(eE.t.MICRO_GENRE_ALBUMS),
                            D.gK.literal(eE.t.META_TAG_ALBUMS),
                            D.gK.literal(eE.t.ARTIST_PLAYLISTS),
                            D.gK.literal(eE.t.ARTIST_ALBUMS),
                            D.gK.literal(eE.t.ARTIST_COMPILATIONS),
                            D.gK.literal(eE.t.ARTIST_STUDIO_ALBUMS),
                            D.gK.literal(eE.t.ARTIST_SIMILAR_ENTITIES),
                            D.gK.literal(eE.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: D.gK.maybe(eJ),
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
                    return (0, D.wg)({ url: t, goal: i, artist: (0, eo.a)({ artist: a }) });
                };
            var ez = a(82457),
                eQ = a(83890),
                eZ = a(31946),
                e0 = a(77560),
                e1 = a(62697);
            let e3 = (e) => (0, D.wg)({ id: e.id, type: e.type, title: e.title, albums: e.albums.map(eQ.p) }),
                e2 = D.gK.model('Donation', { url: D.gK.string, artist: eR.P, goal: D.gK.maybe(D.gK.string) }),
                e5 = D.gK.compose(D.gK.model('AlbumDonations', { items: D.gK.maybeNull(D.gK.array(e2)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e8 = D.gK.model('LabelItem', { id: D.gK.number, name: D.gK.string }),
                e6 = D.gK.compose(D.gK.model('RelatedAlbumsPage', { items: D.gK.array(eC.J) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e4 = D.gK.model('RelatedContentItem', { id: D.gK.string, type: D.gK.string, title: D.gK.string, albums: D.gK.array(eC.J) }),
                e9 = D.gK.compose(D.gK.model('RelatedContent', { items: D.gK.maybeNull(D.gK.array(e4)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                e7 = D.gK
                    .compose(
                        D.gK.model('AlbumPage', {
                            id: D.gK.maybeNull(D.gK.number),
                            meta: D.gK.maybeNull(eC.J),
                            items: D.gK.array(ei),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            deprecationTargetAlbumId: D.gK.maybeNull(D.gK.number),
                            latestGenreAlbums: D.gK.maybe(e6),
                            otherArtistAlbums: D.gK.maybe(e6),
                            otherAlbumVersions: D.gK.maybe(D.gK.array(eC.J)),
                            labels: D.gK.maybeNull(D.gK.array(e8)),
                            description: D.gK.maybe(D.gK.string),
                            donations: D.gK.maybe(e5),
                            relatedContent: D.gK.maybe(e9),
                            allTracksUnfinished: D.gK.boolean,
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
                                var a, i, r, l, s;
                                return !!(
                                    !(null == (a = e.meta) ? void 0 : a.isNonMusic) &&
                                    (null == (r = e.meta) || null == (i = r.artists) ? void 0 : i.length) === 1 &&
                                    !(null == (s = e.meta) || null == (l = s.artists[0]) ? void 0 : l.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var n, o;
                                let { experiments: t } = (0, _.M)(e);
                                return !!(
                                    !t.checkExperiment(O.z.WebNextLatestGenreAlbumsDegradation, 'on') &&
                                    !(null == (n = e.meta) ? void 0 : n.isNonMusic) &&
                                    (null == (o = e.meta) ? void 0 : o.genre)
                                );
                            },
                            get isNotFound() {
                                return e.isRejected && (e.errorStatusCode === U.X1.NOT_FOUND || e.errorStatusCode === U.X1.BAD_REQUEST);
                            },
                            get artistRecommendationsPromoImpId() {
                                let { experiments: t } = (0, _.M)(e);
                                return er(t, O.z.WebNextAlbumImpulseBanner);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, _.M)(e);
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
                                var p, b;
                                return !!((null == (p = e.latestGenreAlbums) ? void 0 : p.isNeededToLoad) || (null == (b = e.latestGenreAlbums) ? void 0 : b.isLoading));
                            },
                            get isOtherArtistAlbumsLoading() {
                                var E, v;
                                return !!((null == (E = e.otherArtistAlbums) ? void 0 : E.isNeededToLoad) || (null == (v = e.otherArtistAlbums) ? void 0 : v.isLoading));
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
                                            s = [],
                                            n = 0;
                                        for (let e of t)
                                            for (let t of (a > j.VN && e[0] && (i.push(X()), r.set(J(e[0].id), [i.length - 1])), e))
                                                (s.push(t.id),
                                                    i.push(Y({ id: t.id, loadingState: F.G.IDLE, positionInContext: n })),
                                                    i.length <= j.vY && l.push(String(t.id)),
                                                    x(r, q(t.id), i.length - 1),
                                                    n++);
                                        return { items: i, indexItems: r, initialTrackIds: l, trackIds: s };
                                    })({ volumes: t.volumes });
                                    return ((e.items = (0, D.wg)(a.items)), (e.indexItems = a.indexItems), a);
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
                                                s = Q(l) ? l.id : null,
                                                n = r ? new Set(r.map(Number)) : void 0,
                                                o = [];
                                            for (let e = 0; e < i.length; e++) {
                                                var d, g, u, c, m, y, p, b;
                                                let r = i[e];
                                                if (!r) continue;
                                                let l = a.get(q(r.id)),
                                                    E = !1;
                                                if (l)
                                                    for (let a of l) {
                                                        let i = t[a],
                                                            l = t[a - 1];
                                                        if (!Q(i)) continue;
                                                        let m =
                                                                s === i.id
                                                                    ? 1
                                                                    : null == (u = r.albums) || null == (g = u[0]) || null == (d = g.trackPosition)
                                                                      ? void 0
                                                                      : d.index,
                                                            y = null == i ? void 0 : i.positionInContext,
                                                            p = Q(l) && (null == l ? void 0 : l.position) ? l.position + 1 : m,
                                                            b = (0, z.K)(r, { hasEverFinished: null == i ? void 0 : i.hasEverFinished });
                                                        if (b.isRemoved) {
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
                                                            (i.type = null != (c = b.type) ? c : $.S.TRACK),
                                                            (i.data = b),
                                                            (i.position = (null == l ? void 0 : l.type) === W.r.TEXT ? 1 : p),
                                                            (i.positionInContext = y),
                                                            (i.isBest = null == n ? void 0 : n.has(Number(r.id))),
                                                            (i.loadingState = F.G.RESOLVE),
                                                            E || (o.push(a), (E = !0)));
                                                    }
                                                let v = a.get(J(r.id));
                                                if (v)
                                                    for (let e of v) {
                                                        let a = t[e];
                                                        (null == a ? void 0 : a.type) === W.r.TEXT &&
                                                            (a.data =
                                                                null !=
                                                                (b = null == (p = r.albums) || null == (y = p[0]) || null == (m = y.trackPosition) ? void 0 : m.volume)
                                                                    ? b
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
                                markFinished: (0, D.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                    try {
                                        return yield a.markAlbumFinished(t);
                                    } catch (e) {
                                        return (i.error(e), B.T.ERROR);
                                    }
                                }),
                                markUnfinished: (0, D.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                    try {
                                        return yield a.markAlbumUnfinished(t);
                                    } catch (e) {
                                        return (i.error(e), B.T.ERROR);
                                    }
                                }),
                                setListeningFinishedStatus: (0, D.L3)(function* () {
                                    var t;
                                    return (null == (t = e.meta) ? void 0 : t.listeningFinished)
                                        ? (a.setAllTracksUnfinished(!0), yield a.markUnfinished({ albumId: Number(e.id) }))
                                        : yield a.markFinished({ albumId: Number(e.id) });
                                }),
                                getLatestGenreAlbums: (0, D.L3)(function* (t) {
                                    let { topResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                    if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                                        try {
                                            e.latestGenreAlbums.loadingState = F.G.PENDING;
                                            let i = yield a.getTopByGenre(t);
                                            ((e.latestGenreAlbums.items = (0, D.wg)(i.albums.map(eQ.p))), (e.latestGenreAlbums.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.latestGenreAlbums.loadingState = F.G.REJECT));
                                        }
                                }),
                                getSimilarEntities: (0, D.L3)(function* (t) {
                                    let { albumResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                    if (!e.similarEntities.isLoading)
                                        try {
                                            e.similarEntities.loadingState = eb.PENDING;
                                            let i = yield a.getSimilarEntities(t);
                                            ((e.similarEntities.data = ep(i)), (e.similarEntities.loadingState = eb.RESOLVE));
                                        } catch (t) {
                                            (i.error(t), (e.similarEntities.loadingState = eb.REJECT));
                                        }
                                }),
                                getOtherArtistAlbums: (0, D.L3)(function* (t, a) {
                                    let { artistsResource: i, modelActionsLogger: r } = (0, D._$)(e);
                                    if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                                        try {
                                            if (!t.artistId) {
                                                e.otherArtistAlbums.loadingState = F.G.REJECT;
                                                return;
                                            }
                                            e.otherArtistAlbums.loadingState = F.G.PENDING;
                                            let r = yield i.getSafeDirectAlbums({ ...t, artistId: t.artistId });
                                            ((e.otherArtistAlbums.items = (0, D.wg)(r.albums.filter((e) => String(e.id) !== String(a)).map(eQ.p))),
                                                (e.otherArtistAlbums.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (r.error(t), (e.otherArtistAlbums.loadingState = F.G.REJECT));
                                        }
                                }),
                                getTracks: (0, D.L3)(function* (t) {
                                    let { trackIds: i } = t,
                                        { tracksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                    try {
                                        var s, n;
                                        if (!(null == (s = e.meta) ? void 0 : s.id)) return;
                                        a.updateVolumeItemsState(i, F.G.PENDING);
                                        let t = yield ((e) => {
                                            let { albumId: t, trackIds: a, getTracksMeta: i } = e;
                                            return i({ trackIds: a.map((e) => ''.concat(e, ':').concat(t)), withProgress: !0 });
                                        })({ albumId: e.meta.id, trackIds: i, getTracksMeta: (e) => r.getTracksMeta(e) });
                                        for (let i of a.insertDataToVolumeItems(t)) {
                                            let t = e.items[i];
                                            Q(t) && (null == (n = t.data) ? void 0 : n.resolveAllDisclaimers) && t.data.resolveAllDisclaimers();
                                        }
                                    } catch (e) {
                                        (l.error(e), a.updateVolumeItemsState(i, F.G.REJECT));
                                    }
                                }),
                                getDonations: (0, D.L3)(function* (t) {
                                    let { albumId: a } = t,
                                        { experiments: i } = (0, _.M)(e),
                                        { donationResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                    if (i.checkExperiment(O.z.WebNextAlbumDonationButton, 'on') && e.donations && !e.donations.isLoading)
                                        try {
                                            e.donations.loadingState = F.G.PENDING;
                                            let { donations: t } = yield r.getAlbumDonations({ albumId: a });
                                            (t &&
                                                (e.donations.items = (0, D.wg)(
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
                                getData: (0, D.L3)(function* (t) {
                                    let {
                                            albumId: l,
                                            resumeStream: s,
                                            preloadedAlbum: n,
                                            withLatestGenreAlbumsRequest: o = !0,
                                            withOtherArtistAlbumsRequest: d = !0,
                                            sonataState: g,
                                        } = t,
                                        { albumResource: u, modelActionsLogger: c } = (0, D._$)(e);
                                    if (((e.id = l), e.loadingState !== F.G.PENDING))
                                        try {
                                            var m, y, p, b, E, v;
                                            let t, c;
                                            e.loadingState = F.G.PENDING;
                                            let S = n;
                                            S || (S = yield u.getAlbumWithTracksIds({ albumId: l, resumeStream: s }));
                                            let K =
                                                ((E = S),
                                                'not-found' === E.error
                                                    ? { status: 'not-found' }
                                                    : (null == (v = E.deprecation) ? void 0 : v.targetAlbumId)
                                                      ? { status: 'deprecated', targetAlbumId: E.deprecation.targetAlbumId }
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
                                                (e.labels = (0, D.wg)(S.labels)),
                                                (e.contentWarning = (0, D.wg)(S.contentWarning)),
                                                (e.description = (0, D.wg)(S.description)),
                                                S.duplicates &&
                                                    S.duplicates.length > 0 &&
                                                    (e.otherAlbumVersions = (0, D.wg)(null == (p = S.duplicates) ? void 0 : p.map(eQ.p))));
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
                                                    (c = a.getOtherArtistAlbums({ artistId: String(null == (b = S.artists[0]) ? void 0 : b.id), limit: 8 }, l)),
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
                                getRelatedContent: (0, D.L3)(function* () {
                                    let { albumResource: t, modelActionsLogger: a } = (0, D._$)(e);
                                    if (e.relatedContent && !e.relatedContent.isLoading)
                                        try {
                                            var i, r;
                                            if (!(null == (i = e.meta) ? void 0 : i.id)) return;
                                            e.relatedContent.loadingState = F.G.PENDING;
                                            let a = yield t.getRelatedContent({ albumId: e.meta.id });
                                            ((e.relatedContent.items = (0, D.wg)(null == (r = a.blocks) ? void 0 : r.map(e3))),
                                                (e.relatedContent.loadingState = F.G.RESOLVE));
                                        } catch (t) {
                                            (a.error(t), (e.relatedContent.loadingState = F.G.REJECT));
                                        }
                                }),
                                reset(t) {
                                    var a, i, r, l;
                                    let { albumCPA: s } = (0, _.M)(e);
                                    (s.reset(),
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
                                        (e.similarEntities.loadingState = eb.IDLE),
                                        e.resetArtistRecommendationsPromo(),
                                        e.destroyItems([e.meta, e.items, e.otherAlbumVersions, e.labels]));
                                },
                            };
                        return a;
                    }),
                te = [eE.t.COLLECTION_FAVOURITE_PLAYLIST],
                tt = (e) => te.includes(e);
            var ta = a(12739);
            let ti = [eE.t.COLLECTION_DOWNLOADED_TRACKS];
            var tr = a(19207),
                tl = a(76626),
                ts = a(51724),
                tn = a(58870);
            let to = (e) => {
                    var t, a;
                    let i =
                        null == (a = (e || {}).chart) || null == (t = a.tracks)
                            ? void 0
                            : t.map((e) => {
                                  let { track: t, chart: a } = e;
                                  return { type: el._.TRACK_ITEM, data: (0, tn.b)(t, a) };
                              });
                    return (0, D.wg)({ items: i, playlist: (0, eg.b)({ playlist: null == e ? void 0 : e.chart }) });
                },
                td = (e) => {
                    var t, a;
                    let { clip: i, artists: r } = e,
                        { available: l, disclaimers: s } = (0, ts.f)(i);
                    return (0, D.wg)({
                        clipId: i.id,
                        title: i.title,
                        thumbnail: null == (t = i.cover) ? void 0 : t.uri,
                        previewUrl: null == (a = i.cover) ? void 0 : a.videoUrl,
                        duration: i.duration,
                        artists: null == r ? void 0 : r.map((e) => (0, eo.a)({ artist: e })),
                        isAvailable: l,
                        disclaimers: s,
                    });
                },
                tg = (e) => ({ type: e.type, data: td({ clip: e.data.clip, artists: e.data.artists }) }),
                tu = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, D.wg)({
                        ...((e) => {
                            let t = !1;
                            e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
                            let { disclaimers: a } = (0, ts.f)(e);
                            return (0, D.wg)({ id: e.id, disclaimers: a, isPresave: t, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                        })(e),
                        artists: a,
                    });
                },
                tc = (e) => {
                    switch (e.type) {
                        case el._.ALBUM_ITEM:
                            return en(e.data.album, e.data.artists, e.data.trailer);
                        case el._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: r, millisecondsUntilRelease: l, presaveDate: s } = e.data || {};
                                return {
                                    type: el._.PRESAVED_ALBUM_ITEM,
                                    data: tu({
                                        ...a,
                                        artists: i,
                                        releaseDate: r,
                                        millisecondsUntilRelease: l,
                                        presaveDate: s,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                };
            var tm = a(51231);
            let ty = (e) =>
                    (0, D.wg)({
                        type: el._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, tm.p)(e.data.cover) : void 0 },
                    }),
                tp = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: r } = e;
                    return { type: el._.NON_MUSIC_ALBUM_ITEM, data: (0, es.s)({ album: t, likesCount: i, bookmateOptionRequired: r, artists: a }) };
                },
                tb = (e) => ({ type: el._.TRACK_ITEM, data: (0, tl.v)(e.data.track) });
            var tE = a(99211);
            let tv = (e) => {
                var t, a, i;
                let r = e || {};
                return (0, D.wg)({
                    items: null != (i = null == (t = r.tracks) ? void 0 : t.map((e) => (0, tl.v)(e))) ? i : [],
                    playlist: (0, tE.j)(r.playlist),
                    totalItemsCount: null == (a = r.summary) ? void 0 : a.count,
                    canShowEmptyBlock: !0,
                });
            };
            var tS = a(56146);
            let tK = (e) => (0, D.wg)({ uid: e.uid, name: e.name, cover: (0, tm.p)(e.cover), status: e.status }),
                tI = (e) =>
                    (0, D.wg)({
                        id: e.id,
                        name: e.name,
                        owner: tK(e.owner),
                        members: e.members.filter((t) => t.uid !== e.owner.uid).map(tK),
                        wave: e.wave ? (0, em.l)(e.wave) : void 0,
                        status: e.status,
                    }),
                tL = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === eE.t.TABS,
                tT = (e) => Object.values(eE.t).includes(e),
                th = D.gK.model('ArtistPopularTracksData', { items: D.gK.array(Z.v) }),
                tN = eN
                    .props({ type: D.gK.literal(eE.t.ARTIST_POPULAR_TRACKS), data: D.gK.maybe(th), meta: ef })
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
                tA = D.gK.model('ArtistReleaseData', { album: eC.J, releaseDate: D.gK.maybe(D.gK.string) }),
                tf = eN
                    .props({ type: D.gK.literal(eE.t.ARTIST_RELEASE), data: D.gK.maybe(tA), meta: ef })
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
            var tC = a(61691),
                tR = a(97804);
            let tk = D.gK
                    .compose(
                        D.gK.model('BaseUpcomingAlbum', {
                            id: D.gK.number,
                            isPresave: D.gK.boolean,
                            title: D.gK.maybe(D.gK.string),
                            type: D.gK.maybe(D.gK.enumeration(Object.values(tC._))),
                            coverUri: D.gK.maybe(D.gK.string),
                            releaseDate: D.gK.maybe(D.gK.string),
                        }),
                        e1.E,
                    )
                    .actions((e) => {
                        let t = {
                            presaveAlbum: (0, D.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                try {
                                    e.isPresave = !0;
                                    let i = yield a.presaveAlbum(t);
                                    return (i === tR.J.ERROR && (e.isPresave = !1), i);
                                } catch (t) {
                                    return ((e.isPresave = !1), i.error(t), tR.J.ERROR);
                                }
                            }),
                            removePresaveAlbum: (0, D.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                try {
                                    e.isPresave = !1;
                                    let i = yield a.removePresaveAlbum(t);
                                    return (i === tR.J.ERROR && (e.isPresave = !0), i);
                                } catch (t) {
                                    return ((e.isPresave = !0), i.error(t), tR.J.ERROR);
                                }
                            }),
                            toggleLike: (0, D.L3)(function* () {
                                let a;
                                if (!(0, D._n)(e)) return;
                                let { user: i } = (0, _.M)(e);
                                if (i.account.data.uid)
                                    return (
                                        (a = e.isPresave
                                            ? yield t.removePresaveAlbum({ albumId: e.id, userId: i.account.data.uid })
                                            : yield t.presaveAlbum({ albumId: e.id, userId: i.account.data.uid, likeAfterRelease: !0 })),
                                        !(0, D._n)(e),
                                        a
                                    );
                            }),
                            getKey: (t) => ''.concat(t, '_').concat(e.id),
                        };
                        return t;
                    })
                    .props({ artists: D.gK.maybe(D.gK.array(eR.P)) })
                    .views((e) => ({
                        get artistNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                    })),
                tP = D.gK.model('ArtistUpcomingReleaseData', { album: tk }),
                tD = eN
                    .props({ type: D.gK.literal(eE.t.ARTIST_UPCOMING_RELEASE), data: D.gK.maybe(tP), meta: ef })
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
            var t_ = a(17342);
            let tO = (e) => (0, D.wg)(e),
                tw = (e) => ({
                    loadingState: eb.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, t_.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, D.wg)({
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
                                    return (0, D.wg)({ ...e, coverUri: null == (t = e.cover) ? void 0 : t.uri });
                                })(e)
                              : ((e) => !!(e && 'object' == typeof e && ('message' in e || 'title' in e || 'expandable' in e || 'visibleLines' in e)))(e)
                                ? ((e) => {
                                      var t;
                                      return (0, D.wg)({ ...tO(e), showPolicy: e.showPolicy, viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink });
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
            var tG = a(39339);
            let tM = D.gK.model('ArtistPickData', { playlist: tG.$, artists: D.gK.array(eR.P) }),
                tU = eN
                    .props({ type: D.gK.literal(eE.t.ARTIST_PICK), data: D.gK.maybe(tM), meta: ef })
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
            var tB = a(78180);
            let tV = D.gK
                    .model('FamiliarYouData', {
                        vibeTrackCount: D.gK.optional(D.gK.number, 0),
                        collectionTrackCount: D.gK.optional(D.gK.number, 0),
                        collectionAlbumCount: D.gK.optional(D.gK.number, 0),
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
                                    let { href: t } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tB.J.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tB.J.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, ek.u)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                tF = eN
                    .props({ type: D.gK.literal(eE.t.FAMILIAR_YOU), data: D.gK.maybe(tV), meta: ef })
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
                tx = (e) => {
                    let t = tw(e);
                    if ((0, ta.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case eE.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tw(t);
                                                  return ((tN.is(a) || tf.is(a) || tD.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, D.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case eE.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tw(t);
                                                  return ((tF.is(a) || tU.is(a)) && e.push(a), e);
                                              }, []);
                                    return (0, D.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                tj = (e) => (0, D.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => tT(e.type)).map(tx) }),
                tW = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) tL(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: F.G.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: F.G.IDLE, data: t.tabs.map(tj) })),
                            a && (i.upperBlocks = a.filter((e) => tT(e.type)).map(tx)),
                            (0, D.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                },
                tX = (e) => ({ title: e.title, lineColor: e['line-color'] }),
                t$ = (e) => {
                    var t;
                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, tr.h)(e));
                    return (0, D.wg)({ items: a });
                },
                tY = (e) => ({ uri: e.uri, color: e.color }),
                tJ = (e) => {
                    var t;
                    let { data: a } = e;
                    return (0, D.wg)({ type: el._.DONATION_ITEM, data: eH({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
                },
                tq = (e) => {
                    var t;
                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(tJ);
                    return (0, D.wg)({ items: a });
                },
                tH = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                    return (0, D.wg)({ items: a });
                },
                tz = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, em.l)(e.wave, e.agent));
                    return (0, D.wg)({ items: a });
                };
            var tQ = a(12622);
            let tZ = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(tQ.e);
                    return (0, D.wg)({ items: a });
                },
                t0 = (e) => {
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
                                                    return (0, es.s)({ album: t, artists: a, trailer: i });
                                                }),
                                      r = ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) || [];
                                  return { tab: { id: t, title: e.title, covers: (0, D.wg)(r) }, data: (0, D.wg)(i) };
                              });
                    return (0, D.wg)({ items: a });
                },
                t1 = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map(ty);
                    return (0, D.wg)({ items: a });
                },
                t3 = (e) => {
                    let { favorites: t, history: a } = e,
                        i = (0, tm.p)(t.cover),
                        r = t.trackCovers.map(tm.p),
                        l = (0, D.wg)({ title: t.title, cover: i, playlistUuid: t.playlistUuid || void 0, count: t.count, trackCovers: r }),
                        s = a.trackCovers.map(tm.p),
                        n = (0, D.wg)({ title: a.title, trackCovers: s, artists: a.subtitleElements });
                    return (0, D.wg)({ favorites: l, history: n });
                },
                t2 = (e) => (0, D.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(tm.p) }),
                t5 = (e) => ({ items: (0, D.wg)(e.items.map((e) => t2(e.data))) });
            var t8 = a(99159);
            let t6 = (e) =>
                    (0, D.wg)({
                        items: e.items.map((e) =>
                            ((e) => {
                                var t, a;
                                return (0, D.wg)({
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
                t4 = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).newReleases)
                            ? void 0
                            : t.map((e) => {
                                  let { album: t, artists: a, releaseDate: i, cover: r, trailer: l } = e;
                                  return {
                                      album: (0, es.s)({ album: t, artists: a, trailer: l }),
                                      releaseDate: i,
                                      coverUri: null == r ? void 0 : r.uri,
                                      coverColor: null == r ? void 0 : r.color,
                                  };
                              });
                    return (0, D.wg)({ items: a });
                },
                t9 = (e) => {
                    let t = e.items.map((e) =>
                        e.type === el._.NON_MUSIC_ALBUM_ITEM
                            ? tp({ album: e.data.album, artists: e.data.artists, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired })
                            : eu({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                    );
                    return (0, D.wg)({ items: t });
                },
                t7 = (e, t) => {
                    var a;
                    return (0, D.wg)({
                        items: e.tracks.map((e) => (0, tl.v)(e)),
                        playlist: (0, tE.j)(e.playlist),
                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                        withRewindTrailerButton: 'rewind2024' === t,
                    });
                },
                ae = (e) => ({
                    type: el._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, eg.b)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                at = (e) => {
                    if (!e || !Array.isArray(e.items)) return (0, D.wg)({});
                    let t = e.items.map(ae);
                    return (0, D.wg)({ items: t });
                },
                aa = (e) => (0, D.wg)({ reporting: eL(e.reporting), items: e.albumBanners.map((e) => eK(e)) }),
                ai = (e) => (0, D.wg)({ suggestionsRequestId: e.suggestionsRequestId, items: e.items.map((e) => ({ query: e.query })) }),
                ar = (e) =>
                    (0, D.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                al = (e) => {
                    var t, a;
                    return (0, D.wg)({
                        title: null == e ? void 0 : e.title,
                        subtitle: null == e ? void 0 : e.subtitle,
                        buttonTitle: null == e ? void 0 : e.buttonTitle,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        align: null == e ? void 0 : e.align,
                        weblink: null == e || null == (t = e.action) ? void 0 : t.weblink,
                        lightTheme: ar(null == e ? void 0 : e.lightTheme),
                        darkTheme: ar(null == e ? void 0 : e.darkTheme),
                        advDisclaimer: null != (a = null == e ? void 0 : e.advDisclaimer) ? a : null,
                    });
                },
                as = (e) => {
                    var t;
                    return null == (t = (e || {}).tabs) ? void 0 : t.map((e) => (0, D.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }));
                },
                an = (e) => {
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
                    return (0, D.wg)({ items: a });
                },
                ao = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => ({ tab: { id: t, title: null == e ? void 0 : e.title }, data: null == e ? void 0 : e.items.map(tQ.e) }));
                    return (0, D.wg)({ items: a });
                },
                ad = (e) => {
                    var t;
                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, D.wg)({ title: e.title, description: e.description, artists: a });
                },
                ag = new Set([eE.t.CONCERTS_PERSONAL, eE.t.ARTIST_CONCERTS, eE.t.VIEWED_CONCERTS]),
                au = ew.named('AlbumPromoData'),
                ac = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.ALBUM_PROMO), D.gK.literal(eE.t.SIMPLE_ALBUM_PROMO)), data: D.gK.maybe(au), meta: ef })
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
            var am = a(30064);
            let ay = D.gK.model('ArtistConcertsData', { items: D.gK.array(am.a) }),
                ap = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.ARTIST_CONCERTS)), data: D.gK.maybe(ay), meta: ef })
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
                ab = D.gK.model('ArtistPopularTracksAndReleasesData', { blocks: D.gK.array(D.gK.union(tN, tf, tD)) }).views((e) => ({
                    get popularTracks() {
                        return e.blocks.find((e) => tN.is(e));
                    },
                    get upcomingRelese() {
                        return e.blocks.find((e) => tD.is(e));
                    },
                    get release() {
                        return e.blocks.find((e) => tf.is(e));
                    },
                })),
                aE = eN
                    .props({ type: D.gK.literal(eE.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: D.gK.maybe(ab) })
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
                av = D.gK.model('ChartTracksItem', { type: D.gK.literal(el._.TRACK_ITEM), data: Z.v }),
                aS = D.gK.model('ChartTracksData', { items: D.gK.array(av), playlist: tG.$ }),
                aK = eN
                    .props({ type: D.gK.literal(eE.t.CHART_TRACKS), data: D.gK.maybe(aS), meta: ef })
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
            var aI = a(4370),
                aL = a(85587);
            let aT = D.gK
                    .compose(
                        D.gK.model('BaseClip', {
                            clipId: D.gK.number,
                            title: D.gK.maybe(D.gK.string),
                            thumbnail: D.gK.maybe(D.gK.string),
                            previewUrl: D.gK.maybe(D.gK.string),
                            duration: D.gK.maybe(D.gK.number),
                            isAvailable: D.gK.boolean,
                            version: D.gK.maybe(D.gK.string),
                        }),
                        e1.E,
                    )
                    .views((e) => ({
                        get url() {
                            let { href: t } = (0, ek.u)(aI.Z.video.href, { query: { ids: String(e.clipId) } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, D._n)(e)) return !1;
                            let { library: t } = (0, _.M)(e);
                            return t.isClipLiked(e.clipId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : aL.n.CLIP, entityId: e.clipId }),
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                        toggleLike() {
                            if (!(0, D._n)(e)) return;
                            let { library: t, user: a } = (0, _.M)(e);
                            if (a.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: a.account.data.uid });
                        },
                    })),
                ah = aT.props({ artists: D.gK.array(eR.P) }).views((e) => ({
                    get hasArtists() {
                        return e.artists.length > 0;
                    },
                })),
                aN = D.gK.model('LandingClipItem', { type: D.gK.union(D.gK.literal(el._.CLIP), D.gK.literal(el._.CLIP_ITEM)), data: ah }),
                aA = D.gK.model('ClipsData', { items: D.gK.array(aN), canShowEmptyBlock: D.gK.optional(D.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                af = eN
                    .props({
                        type: D.gK.union(D.gK.literal(eE.t.CLIPS), D.gK.literal(eE.t.ARTIST_CLIPS), D.gK.literal(eE.t.COLLECTION_CLIPS)),
                        data: D.gK.maybe(aA),
                        meta: ef,
                    })
                    .named('Clips')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, _.M)(e);
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
                aC = D.gK.model('CollectionAlbumsData', { items: D.gK.array(eC.J), canShowEmptyBlock: D.gK.optional(D.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aR = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_ALBUMS), data: D.gK.maybe(aC), meta: ef })
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
            var ak = a(63500);
            let aP = D.gK.model('LandingUpcomingAlbumItem', { type: D.gK.literal(el._.PRESAVED_ALBUM_ITEM), data: tk }),
                aD = D.gK.union(eV, aP),
                a_ = D.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: D.gK.string,
                        title: D.gK.string,
                        type: D.gK.enumeration(Object.values(ak.n)),
                        items: D.gK.array(aD),
                        canShowEmptyBlock: D.gK.optional(D.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                aO = D.gK.model('CollectionAlbumsPresavesTabs', { tabs: D.gK.array(a_) }).views((e) => ({
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
                aw = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_ALBUMS_PRESAVES), data: D.gK.maybe(aO), meta: ef })
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
                aG = D.gK
                    .model('LandingMenuItem', {
                        type: D.gK.literal(el._.MENU_ITEM),
                        data: D.gK.model({ title: D.gK.string, viewAllActionLink: D.gK.maybe(D.gK.maybeNull(D.gK.string)), cover: D.gK.maybe(eP.$) }),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.data.title, '_').concat(e.data.viewAllActionLink);
                        },
                    })),
                aM = D.gK.union(aG, e$),
                aU = D.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: eR.P, items: D.gK.array(aM) }),
                aB = D.gK.model('CollectionArtistsAndTopWithItemsData', { artists: D.gK.array(aU) }),
                aV = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: D.gK.maybe(aB), meta: ef })
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
                aF = D.gK.model('CollectionArtistData', { items: D.gK.array(eR.P), canShowEmptyBlock: D.gK.optional(D.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                ax = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.COLLECTION_ARTISTS),
                            D.gK.literal(eE.t.COLLECTION_ARTISTS_AND_TOP),
                            D.gK.literal(eE.t.PERSONAL_ARTISTS),
                            D.gK.literal(eE.t.NEW_STARS_ARTISTS),
                            D.gK.literal(eE.t.EDITORIAL_ARTISTS),
                            D.gK.literal(eE.t.META_TAG_POPULAR_ARTISTS),
                            D.gK.literal(eE.t.MICRO_GENRE_TOP_ARTISTS),
                            D.gK.literal(eE.t.MICRO_GENRE_ARTISTS),
                            D.gK.literal(eE.t.META_TAG_ARTISTS),
                            D.gK.literal(eE.t.SIMILAR_ARTISTS),
                        ),
                        data: D.gK.maybe(aF),
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
                aj = D.gK.model('CollectionPlaylistsData', { items: D.gK.array(ex.I) }),
                aW = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_PLAYLISTS_CREATED), data: D.gK.maybe(aj), meta: ef })
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
            var aX = a(44349);
            let a$ = D.gK.model('CollectionDownloadedTracksData', { items: D.gK.array(Z.v), rawTracks: D.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: aX.R.DownloadedMusic, meta: e }));
                    },
                })),
                aY = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_DOWNLOADED_TRACKS), data: D.gK.maybe(a$), meta: ef })
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
                aJ = D.gK.model('LandingNonMusicAlbumItem', { type: D.gK.literal(el._.NON_MUSIC_ALBUM_ITEM), data: eC.J }),
                aq = D.gK.model('LandingTrackItem', { type: D.gK.literal(el._.TRACK_ITEM), data: Z.v }),
                aH = D.gK.union(ej, aJ, aq),
                az = D.gK.model('CollectionKidsData', { items: D.gK.array(aH) }),
                aQ = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_KIDS), data: D.gK.maybe(az), meta: ef })
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
                aZ = D.gK.model('CollectionLikedPlaylistsData', { items: D.gK.array(ex.I) }),
                a0 = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_PLAYLISTS_LIKED), data: D.gK.maybe(aZ), meta: ef })
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
            var a1 = a(12946);
            let a3 = D.gK
                    .model('CollectionPlaylistsTab', {
                        id: D.gK.string,
                        title: D.gK.string,
                        type: D.gK.enumeration(Object.values(a1.l)),
                        items: D.gK.array(ex.I),
                        canShowEmptyBlock: D.gK.optional(D.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                a2 = D.gK.model('CollectionPlaylistsTabs', { tabs: D.gK.array(a3) }).views((e) => ({
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
                a5 = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: D.gK.maybe(a2), meta: ef })
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
            var a8 = a(62390);
            let a6 = D.gK
                    .model('ArtistTop', { artist: eR.P, listenTimeSeconds: D.gK.number, top: D.gK.maybe(a8.I) })
                    .views((e) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === e.artist.counts) return !0;
                            return e.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.artist.id) })),
                a4 = D.gK.model('CollectionTopArtistsData', { items: D.gK.array(a6) }),
                a9 = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_TOP_ARTISTS), data: D.gK.maybe(a4), meta: ef })
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
                a7 = D.gK.model('CollectionVibeAgentDataModel', { vibe: eX.G }),
                ie = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_WAVE_AGENT), data: D.gK.maybe(a7), meta: ef })
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
            var it = a(27506);
            !(function (e) {
                ((e.ACTIVE = 'ACTIVE'), (e.INACTIVE_EXIT = 'INACTIVE_EXIT'), (e.INACTIVE_SUBSCRIPTION = 'INACTIVE_SUBSCRIPTION'));
            })(s || (s = {}));
            let ia = D.gK.model('VibeRoomMember', { uid: D.gK.maybe(D.gK.number), name: D.gK.string, cover: eP.$, status: D.gK.maybe(D.gK.string) }).views((e) => ({
                    get isActive() {
                        return e.status === s.ACTIVE;
                    },
                })),
                ii = D.gK
                    .model('VibeRoom', {
                        id: D.gK.string,
                        name: D.gK.maybe(D.gK.string),
                        owner: ia,
                        members: D.gK.array(ia),
                        wave: D.gK.maybe(eX.G),
                        status: D.gK.maybe(D.gK.string),
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
                        editRoom: (0, D.L3)(function* (t) {
                            var a;
                            let { roomId: i, name: r } = t,
                                l = r.trim();
                            if ((null == (a = e.name) ? void 0 : a.trim()) === l) return it.F.OK;
                            let { waveResource: s, modelActionsLogger: n } = (0, D._$)(e);
                            try {
                                return (yield s.editRoom({ roomId: i, name: l }), (e.name = l), it.F.OK);
                            } catch (e) {
                                return (n.error(e), it.F.ERROR);
                            }
                        }),
                        exitRoom: (0, D.L3)(function* (t) {
                            let { roomId: a } = t,
                                { waveResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            try {
                                return (yield i.exitRoom({ roomId: a }), it.F.OK);
                            } catch (e) {
                                return (r.error(e), it.F.ERROR);
                            }
                        }),
                    })),
                ir = D.gK.model('CollectionVibeRoomsData', { items: D.gK.array(ii) }),
                il = eN
                    .props({ type: D.gK.literal(eE.t.COLLECTION_WAVE_ROOMS), data: D.gK.maybe(ir), meta: ef })
                    .named('CollectionVibeRooms')
                    .views((e) => ({
                        get isVisible() {
                            let {
                                collection: { vibeRooms: t },
                            } = (0, _.M)(e);
                            if (!t.isEnabled) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                is = D.gK.model('MapUrl', { imageUrl: D.gK.string, url: D.gK.string }),
                io = D.gK.model('MetroStation', { title: D.gK.string, lineColor: D.gK.string }),
                id = D.gK
                    .model('BaseMap', {
                        place: D.gK.string,
                        city: D.gK.string,
                        address: D.gK.string,
                        metroStations: D.gK.maybeNull(D.gK.array(io)),
                        map: D.gK.maybeNull(is),
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
                ig = eN
                    .props({ type: D.gK.literal(eE.t.CONCERT_PLACE), data: D.gK.maybe(id), meta: ef })
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
                iu = D.gK.model('ConcertsData', { items: D.gK.array(am.a) }),
                ic = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.CONCERTS_TOP),
                            D.gK.literal(eE.t.CONCERTS_PERSONAL),
                            D.gK.literal(eE.t.EDITORIAL_CONCERTS),
                            D.gK.literal(eE.t.VIEWED_CONCERTS),
                        ),
                        data: D.gK.maybe(iu),
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
            var im = a(51888);
            let iy = D.gK
                    .model('ContinueListenTrackData', {
                        album: D.gK.maybe(eC.J),
                        playlist: D.gK.maybe(tG.$),
                        track: Z.v,
                        trackLoadingState: D.gK.optional(D.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        playlistLoadingState: D.gK.optional(D.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        albumDuration: D.gK.maybe(D.gK.number),
                        albumDurationLeft: D.gK.maybe(D.gK.number),
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
                        getTrackMeta: (0, D.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                { continueListen: i } = (0, _.M)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = F.G.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = F.G.PENDING;
                            try {
                                var r;
                                let a = (0, im.V)(e.track.id, null == (r = e.album) ? void 0 : r.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = F.G.RESOLVE), i)) return (0, tl.v)(i);
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                        }),
                        getPlaylistMeta: (0, D.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                { continueListen: i } = (0, _.M)(e);
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
                ip = D.gK.model('ContinueListenTrack', { type: D.gK.string, data: iy }),
                ib = D.gK.model('ContinueListenBaseItem', { uri: D.gK.string, color: D.gK.maybe(D.gK.string) }),
                iE = D.gK.model('ContinueListenBaseItem', {
                    title: D.gK.string,
                    covers: D.gK.array(ib),
                    bookCount: D.gK.maybe(D.gK.number),
                    podcastCount: D.gK.maybe(D.gK.number),
                    trackCount: D.gK.maybe(D.gK.number),
                }),
                iv = D.gK.model('ContinueListenData', { lastPlayed: D.gK.maybe(ip), bookshelf: iE, newEpisodes: iE }),
                iS = eN
                    .props({ type: D.gK.literal(eE.t.CONTINUE_LISTEN), data: D.gK.maybe(iv), meta: ef })
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
                iK = D.gK.model('BaseOverview', {
                    title: D.gK.maybe(D.gK.string),
                    message: D.gK.maybe(D.gK.string),
                    isExpandable: D.gK.optional(D.gK.boolean, !0),
                    visibleLinesCount: D.gK.optional(D.gK.number, 3),
                }),
                iI = iK.named('LandingBlockOverviewMeta').props({ showPolicy: D.gK.maybe(D.gK.string), viewAllActionLink: D.gK.maybeNull(D.gK.string) }),
                iL = eN
                    .props({ type: D.gK.literal(eE.t.DISLIKES), data: D.gK.undefined, meta: iI })
                    .named('Dislikes')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                iT = D.gK.model('LandingDonationItem', { type: D.gK.literal(el._.DONATION_ITEM), data: e2 }),
                ih = D.gK.model('DonationsData', { items: D.gK.array(iT) }),
                iN = eN
                    .props({ type: D.gK.literal(eE.t.DONATIONS), data: D.gK.maybe(ih), meta: ef })
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
                iA = D.gK.model('EditorialVibesDataModel', { items: D.gK.array(eX.G) }),
                iC = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.EDITORIAL_WAVES),
                            D.gK.literal(eE.t.META_TAG_WAVE),
                            D.gK.literal(eE.t.MICRO_GENRE_WAVE),
                            D.gK.literal(eE.t.MICRO_GENRE_SIMILAR_WAVE),
                            D.gK.literal(eE.t.META_TAG_SIMILAR_WAVE),
                            D.gK.literal(eE.t.EDITORIAL_WAVES_AGENT),
                            D.gK.literal(eE.t.META_TAG_WAVE_AGENT),
                            D.gK.literal(eE.t.MICRO_GENRE_WAVE_AGENT),
                            D.gK.literal(eE.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            D.gK.literal(eE.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: D.gK.maybe(iA),
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
                iR = D.gK.model('FamiliarYouAndArtistPickData', { blocks: D.gK.array(D.gK.union(tF, tU)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => tF.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => tU.is(e));
                    },
                })),
                ik = eN
                    .props({ type: D.gK.literal(eE.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: D.gK.maybe(iR) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, r, l, s;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (r = e.data) || null == (i = r.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (s = e.data) || null == (l = s.artistPick) ? void 0 : l.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var n, o;
                            return null != (o = null == (n = e.data) ? void 0 : n.blocks.length) ? o : 0;
                        },
                    })),
                iP = D.gK.model('InStyleDataItemTab', { id: D.gK.number, title: D.gK.string, covers: D.gK.array(D.gK.string) }),
                iD = D.gK.model('InStyleDataItem', { tab: iP, data: D.gK.array(eC.J) }),
                i_ = D.gK.model('InStyleData', { items: D.gK.array(iD) }),
                iO = eN
                    .props({ type: D.gK.literal(eE.t.IN_STYLE), data: D.gK.maybe(i_), meta: ef })
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
                iw = D.gK.model('ItemListData', { items: D.gK.array(aG) }),
                iG = eN
                    .props({ type: D.gK.literal(eE.t.ITEM_LIST), data: D.gK.maybe(iw), meta: ef })
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
                iM = D.gK
                    .model('LikesData', { title: D.gK.string, cover: eP.$, playlistUuid: D.gK.maybe(D.gK.string), trackCovers: D.gK.array(eP.$), count: D.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, ek.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                iU = D.gK.model('HistoryData', { title: D.gK.string, trackCovers: D.gK.array(eP.$), artists: D.gK.array(D.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, ek.u)('/music-history');
                        return e;
                    },
                })),
                iB = D.gK.model('LikesAndHistoryData', { favorites: iM, history: iU }),
                iV = eN
                    .props({ type: D.gK.literal(eE.t.LIKES_AND_HISTORY), data: D.gK.maybe(iB), meta: ef })
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
                iF = D.gK.model('MixesGridMixCardItem', {
                    id: D.gK.string,
                    title: D.gK.string,
                    weblink: D.gK.maybeNull(D.gK.string),
                    covers: D.gK.maybeNull(D.gK.array(eP.$)),
                }),
                ix = D.gK.model('MixesGridData', { items: D.gK.array(iF) }),
                ij = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.MIXES_GRID), D.gK.literal(eE.t.MIXES_MUSIC)), data: D.gK.maybe(ix), meta: ef })
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
            var iW = a(21127);
            let iX = D.gK.model('MixesData', { items: D.gK.array(iW.f) }),
                i$ = eN
                    .props({ type: D.gK.literal(eE.t.MIXES), data: D.gK.maybe(iX), meta: ef })
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
                iY = D.gK.model('NeuromusicItem', {
                    title: D.gK.string,
                    stationId: D.gK.string,
                    imageUrl: D.gK.maybe(D.gK.string),
                    style: D.gK.maybe(D.gK.model({ backgroundColor: D.gK.maybe(D.gK.string), titleColor: D.gK.maybe(D.gK.string) })),
                }),
                iJ = D.gK.model('NeuromusicData', { items: D.gK.array(iY) }),
                iq = eN
                    .props({ type: D.gK.literal(eE.t.NEUROMUSIC), data: D.gK.maybe(iJ), meta: ef })
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
            var iH = a(8655);
            let iz = [
                    'avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%',
                    'avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%',
                ],
                iQ = [
                    'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%',
                    'avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%',
                ],
                iZ = D.gK
                    .model('NewReleasesDataItem', {
                        album: eC.J,
                        releaseDate: D.gK.maybe(D.gK.string),
                        coverUri: D.gK.maybe(D.gK.string),
                        coverColor: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (!(null == t ? void 0 : t.includes('2419084/img.6568f242071da73cabc5846c'))) return t;
                                let r = (Number(a) || 0) % 3;
                                return i === iH.S.Light ? iz[r] : iQ[r];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                i0 = D.gK.model('NewReleasesData', { items: D.gK.array(iZ) }),
                i1 = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.NEW_RELEASES), D.gK.literal(eE.t.EDITORIAL_NEW_RELEASES)), data: D.gK.maybe(i0), meta: ef })
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
                i3 = D.gK.model('NonMusicChartAlbumData', { items: D.gK.array(eC.J) }),
                i2 = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.CHART_ALBUMS), D.gK.literal(eE.t.PODCASTS_CHART_ALBUMS)), data: D.gK.maybe(i3), meta: ef })
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
                i5 = D.gK.model('NonMusicEditorialCompilationData', { items: D.gK.array(D.gK.union(aJ, ej)) }),
                i8 = eN
                    .props({
                        type: D.gK.union(D.gK.literal(eE.t.NON_MUSIC_EDITORIAL_COMPILATION), D.gK.literal(eE.t.NON_MUSIC_CATEGORY)),
                        data: D.gK.maybe(i5),
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
                i6 = eN
                    .props({ type: D.gK.literal(eE.t.OVERVIEW), data: D.gK.undefined, meta: iI })
                    .named('Overview')
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                i4 = D.gK.model('LandingPersonalPlaylistItem', { playlist: ex.I, playlistType: D.gK.string, description: D.gK.maybe(D.gK.string) }),
                i9 = D.gK.model('LandingPersonalPlaylistItem', { type: D.gK.literal(el._.PERSONAL_PLAYLIST_ITEM), data: i4 }),
                i7 = D.gK.model('PersonalPlaylistsData', { items: D.gK.array(i9) }),
                re = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.PERSONAL_PLAYLISTS), D.gK.literal(eE.t.REWIND_PLAYLISTS)), data: D.gK.maybe(i7), meta: ef })
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
            var rt = a(37862),
                ra = a(99007);
            let ri = (e) => {
                    var t;
                    let a = (null == (t = e.tracks) ? void 0 : t.length) ? e.tracks.map((e) => ({ id: e })) : [];
                    return { id: e.id, name: e.name, tracks: (0, D.wg)(a) };
                },
                rr = D.gK.model('PlaylistFiltersTrack', { id: D.gK.union(D.gK.string, D.gK.number) }),
                rl = D.gK.model('PlaylistFiltersItem', { id: D.gK.string, name: D.gK.string, tracks: D.gK.array(rr) }),
                rs = D.gK.model('LandingBlockClientMeta', {
                    title: D.gK.maybe(D.gK.string),
                    description: D.gK.maybe(D.gK.string),
                    viewAllActionLink: D.gK.maybeNull(D.gK.string),
                    showPolicy: D.gK.maybe(D.gK.string),
                    coverUri: D.gK.maybe(D.gK.string),
                });
            var rn = a(31893);
            let ro = D.gK
                    .model('PlaylistWithTracksDataBase', {
                        totalItemsCount: D.gK.maybe(D.gK.number),
                        items: D.gK.array(Z.v),
                        playlist: tG.$,
                        coverUri: D.gK.maybe(D.gK.string),
                        canShowEmptyBlock: D.gK.maybe(D.gK.boolean),
                        withRewindTrailerButton: D.gK.maybe(D.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case rn.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case rn.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri) ? a : e.playlist.coverUri;
                            }
                        },
                    })),
                rd = D.gK
                    .compose(
                        D.gK.model('PlaylistWithTracksAndFiltersFilters', { items: D.gK.maybeNull(D.gK.array(rl)), activeFilter: D.gK.maybe(D.gK.string) }),
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
                            t !== rt.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                        },
                    })),
                rg = D.gK
                    .compose(
                        ro.props({
                            likedTrackIds: D.gK.optional(D.gK.array(D.gK.string), () => []),
                            trackDetailsMap: D.gK.optional(D.gK.map(Z.v), {}),
                            tracksLoading: D.gK.optional(ee.X, () => ({ loadingState: F.G.IDLE })),
                            playlistLoading: D.gK.optional(ee.X, () => ({ loadingState: F.G.IDLE })),
                            filters: D.gK.optional(rd, () => ({ loadingState: F.G.IDLE })),
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
                            getPlaylist: (0, D.L3)(function* () {
                                let { modelActionsLogger: a, usersResource: i, playlistResource: r } = (0, D._$)(e),
                                    { user: l } = (0, _.M)(e),
                                    s = l.account.data.uid;
                                if ((0, D._n)(e) && s) {
                                    e.playlistLoading.loadingState = F.G.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(s),
                                                playlistKind: ra.j.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            l = yield r.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        ((e.likedTrackIds = (0, D.wg)(l.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, tE.j)(l)),
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
                            getTracksMeta: (0, D.L3)(function* () {
                                if (!(0, D._n)(e)) return;
                                let { tracksResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                            getFilters: (0, D.L3)(function* () {
                                if (!(0, D._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, D._$)(e);
                                try {
                                    e.filters.loadingState = F.G.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(ri);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === rt.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    ((e.filters.items = (0, D.wg)(i)), (e.filters.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.filters.loadingState = F.G.REJECT));
                                }
                            }),
                            setItems(t) {
                                e.items.forEach((e) => {
                                    (0, D.Yo)(e);
                                });
                                let a = t.map((e) => (0, D.dV)(e));
                                e.items.replace(a);
                            },
                            handleFilterClick: (0, D.L3)(function* (a) {
                                (e.filters.setActiveFilter(a.id), yield t.getTracksMeta());
                            }),
                        };
                        return t;
                    }),
                ru = eN
                    .props({
                        type: D.gK.literal(eE.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: D.gK.optional(rg, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: ra.j.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: rs,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, r, l, s, n, o, d, g, u;
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
                                    (null == (s = e.data) ? void 0 : s.playlistLoading.isResolved) &&
                                    (null == (n = e.data) ? void 0 : n.tracksLoading.isResolved)
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
                rc = ro.named('PlaylistWithTracksData'),
                rm = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.OPEN_PLAYLIST),
                            D.gK.literal(eE.t.SMART_OPEN_PLAYLIST),
                            D.gK.literal(eE.t.NON_MUSIC_OPEN_PLAYLIST),
                            D.gK.literal(eE.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: D.gK.maybe(rc),
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
                ry = D.gK.model('PromotionsDataItem', {
                    featureId: D.gK.string,
                    title: D.gK.string,
                    subtitle: D.gK.string,
                    weblink: D.gK.string,
                    imageUrl: D.gK.string,
                    advDisclaimer: D.gK.maybeNull(D.gK.string),
                }),
                rp = D.gK.model('PromotionsData', { items: D.gK.array(ry) }),
                rb = eN
                    .props({
                        type: D.gK.union(D.gK.literal(eE.t.PROMOTIONS), D.gK.literal(eE.t.EDITORIAL_PROMOTIONS), D.gK.literal(eE.t.NON_MUSIC_PROMOTIONS)),
                        data: D.gK.maybe(rp),
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
                rE = D.gK.model('Q2vSuggestion', { query: D.gK.string }),
                rv = D.gK.model('Q2vSuggestionsData', { suggestionsRequestId: D.gK.string, items: D.gK.array(rE) }),
                rS = eN
                    .props({ type: D.gK.literal(eE.t.Q2V_SUGGESTIONS), data: D.gK.maybe(rv), meta: ef })
                    .named('Q2vSuggestions')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let {
                                    experiments: a,
                                    user: { hasPlus: i, isLumenAvailable: r },
                                } = (0, _.M)(e),
                                l = !!(null == (t = e.data) ? void 0 : t.items.length),
                                s = a.checkExperiment(O.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                            if (!i || !a.checkExperiment(O.z.WebNextQueryToVibe, 'on') || (s && !r)) return !1;
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
                rK = D.gK.union(eV, eW, eF),
                rI = D.gK.model('RecentlyPlayedData', { items: D.gK.array(rK) }),
                rL = eN
                    .props({ type: D.gK.literal(eE.t.RECENTLY_PLAYED), data: D.gK.maybe(rI), meta: ef })
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
                rT = D.gK.model('LandingVibeItemData', { vibe: eX.G, cover: D.gK.maybeNull(eP.$) }),
                rh = D.gK.model('LandingVibeItem', { type: D.gK.literal(el._.WAVE_ITEM), data: rT }),
                rN = D.gK.union(eF, ej, eV, aJ, aq, rh, e$, aN),
                rA = D.gK.model('SearchHistoryData', { items: D.gK.array(rN) }),
                rf = eN
                    .props({ type: D.gK.union(D.gK.literal(eE.t.HISTORY), D.gK.literal(eE.t.SEARCH_HISTORY)), data: D.gK.maybe(rA), meta: ef })
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
                rC = D.gK.model('SpecialThemeSettings', {
                    buttonColor: D.gK.maybeNull(D.gK.string),
                    textColor: D.gK.maybeNull(D.gK.string),
                    bgImageUrl: D.gK.maybeNull(D.gK.string),
                    imageUrl: D.gK.maybeNull(D.gK.string),
                    buttonTextColor: D.gK.maybeNull(D.gK.string),
                }),
                rR = D.gK.model('SpecialData', {
                    title: D.gK.maybe(D.gK.string),
                    subtitle: D.gK.maybe(D.gK.string),
                    buttonTitle: D.gK.maybe(D.gK.string),
                    imageUrl: D.gK.maybe(D.gK.string),
                    align: D.gK.maybeNull(D.gK.string),
                    weblink: D.gK.maybeNull(D.gK.string),
                    lightTheme: D.gK.maybeNull(rC),
                    darkTheme: D.gK.maybeNull(rC),
                    advDisclaimer: D.gK.maybeNull(D.gK.string),
                }),
                rk = eN
                    .props({ type: D.gK.literal(eE.t.SPECIAL), data: D.gK.maybe(rR), meta: ef })
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
                rP = D.gK.model('VibesDataItemTab', { id: D.gK.number, title: D.gK.string }),
                rD = D.gK.model('VibesDataItem', { tab: rP, data: D.gK.array(eX.G) }),
                r_ = D.gK.model('VibesData', { items: D.gK.array(rD) }),
                rO = eN
                    .props({
                        type: D.gK.union(
                            D.gK.literal(eE.t.WAVES),
                            D.gK.literal(eE.t.SETS_BY_WAVES),
                            D.gK.literal(eE.t.WAVES_AGENT),
                            D.gK.literal(eE.t.SETS_BY_WAVES_AGENT),
                        ),
                        data: D.gK.maybe(r_),
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
                            var r, l, s;
                            return null != (s = null == (l = e.data) || null == (r = l.items[0]) ? void 0 : r.data.length) ? s : 0;
                        },
                    })),
                rw = D.gK.model('WizardData', { title: D.gK.string, description: D.gK.maybe(D.gK.string), artists: D.gK.array(eR.P) }),
                rG = eN
                    .props({ type: D.gK.literal(eE.t.WIZARD), data: D.gK.maybe(rw), meta: ef })
                    .named('Wizard')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                rM = D.gK.union(
                    aK,
                    aR,
                    ax,
                    a9,
                    a0,
                    aW,
                    rm,
                    ru,
                    i1,
                    eq,
                    rb,
                    rS,
                    rL,
                    iO,
                    re,
                    rk,
                    rG,
                    rO,
                    i$,
                    iq,
                    iV,
                    i8,
                    i2,
                    aw,
                    ic,
                    a5,
                    iC,
                    iG,
                    i6,
                    aY,
                    iN,
                    af,
                    ac,
                    eU,
                    iS,
                    iL,
                    rf,
                    ij,
                    aQ,
                    il,
                    ap,
                    tN,
                    tf,
                    tF,
                    tU,
                    tD,
                    aE,
                    ik,
                    ig,
                    ie,
                    aV,
                ),
                rU = D.gK.model('TabData', { id: D.gK.string, title: D.gK.string, subtitle: D.gK.maybe(D.gK.string), covers: D.gK.maybe(D.gK.array(D.gK.string)) }),
                rB = D.gK
                    .model('Tab', {
                        meta: D.gK.model({ id: D.gK.string, title: D.gK.string }),
                        data: D.gK.maybe(rU),
                        blocks: D.gK.array(rM),
                        shouldReloadNotification: D.gK.boolean,
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
                rV = D.gK.compose(D.gK.model('TabsData', { data: D.gK.maybeNull(D.gK.array(rB)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.data]));
                    },
                })),
                rF = D.gK
                    .compose(
                        D.gK.model('Tabs', {
                            meta: D.gK.maybeNull(D.gK.model({ selectedTabIndex: D.gK.number, source: D.gK.maybe(eA) })),
                            upperBlocks: D.gK.maybeNull(D.gK.array(rM)),
                            tabs: rV,
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
                rx = rF
                    .props({ id: D.gK.optional(D.gK.string, ''), title: D.gK.optional(D.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === F.G.RESOLVE || e.loadingState === F.G.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, D.L3)(function* (a) {
                                var i, r, l, s, n, o, d;
                                let g;
                                if (!a || (!('source' in a.meta) && ((g = a.type), !ti.includes(g)) && !tt(a.type))) return;
                                if ((0, ta.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: u, modelActionsLogger: c } = (0, D._$)(e);
                                try {
                                    if (((a.loadingState = eb.PENDING), tt(a.type))) {
                                        a.loadingState = eb.RESOLVE;
                                        return;
                                    }
                                    let { concerts: t } = (0, _.M)(e),
                                        i = yield u.getBlock({
                                            source:
                                                ((r = 'source' in a.meta ? a.meta.source : void 0),
                                                (l = a.type),
                                                (s = t.concertsLocationForRequest),
                                                r && ag.has(l) && (null == s ? void 0 : s.length) ? { ...r, locations: s } : r),
                                            type: a.type,
                                        });
                                    if (!(0, D._n)(a)) return;
                                    switch (((a.loadingState = eb.REJECT), a.type)) {
                                        case eE.t.CLIPS:
                                        case eE.t.ARTIST_CLIPS:
                                        case eE.t.COLLECTION_CLIPS:
                                            let g, c;
                                            'object' == typeof i &&
                                                null !== i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (!i.items.length ||
                                                    ((g = i.items[0]),
                                                    'object' == typeof g && null !== g && 'type' in g && (g.type === el._.CLIP || g.type === el._.CLIP_ITEM))) &&
                                                ((c = a.type), (a.data = (0, D.wg)({ items: i.items.map(tg), canShowEmptyBlock: c === eE.t.COLLECTION_CLIPS })));
                                            break;
                                        case eE.t.WIZARD:
                                            'object' == typeof i && null !== i && 'title' in i && (a.data = ad(i));
                                            break;
                                        case eE.t.CHART_TRACKS:
                                            'chart' in i && (a.data = to(i));
                                            break;
                                        case eE.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case eE.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = t9(i));
                                            break;
                                        case eE.t.CHART_ALBUMS:
                                        case eE.t.PODCASTS_CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return !a.length || !!((t = a[0]) && 'object' == typeof t && 'type' in t && t.type === el._.CHART_ALBUM_ITEM);
                                            })(i) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        ((e) => {
                                                            let { album: t, artists: a, likesCount: i, chart: r } = e;
                                                            return (0, D.wg)({ ...(0, es.s)({ album: t, artists: a, likesCount: i }), chart: r && (0, tS.w)(r) });
                                                        })({ album: e.data.album, likesCount: e.data.likesCount, chart: e.data.chart }),
                                                    );
                                                    return (0, D.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_ALBUMS:
                                            'likedAlbums' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedAlbums)
                                                            ? void 0
                                                            : t.map((e) => (0, es.s)({ album: e.data.album, artists: e.data.artists, trailer: e.data.trailer }));
                                                    return (0, D.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_ARTISTS:
                                            'likedArtists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedArtists)
                                                            ? void 0
                                                            : t.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, D.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_ARTISTS_AND_TOP:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, eo.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, D.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_TOP_ARTISTS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                Array.isArray(i.artists) &&
                                                (a.data = (0, D.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, eo.a)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, tS.w)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, D.wg)({ items: t });
                                                    })(i),
                                                ));
                                            break;
                                        case eE.t.PERSONAL_ARTISTS:
                                        case eE.t.NEW_STARS_ARTISTS:
                                        case eE.t.EDITORIAL_ARTISTS:
                                        case eE.t.META_TAG_POPULAR_ARTISTS:
                                        case eE.t.MICRO_GENRE_ARTISTS:
                                        case eE.t.MICRO_GENRE_TOP_ARTISTS:
                                        case eE.t.META_TAG_ARTISTS:
                                        case eE.t.SIMILAR_ARTISTS:
                                            'items' in i && (a.data = tH(i));
                                            break;
                                        case eE.t.COLLECTION_PLAYLISTS_CREATED:
                                            'createdPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, eg.b)({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                              );
                                                    return (0, D.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_PLAYLISTS_LIKED:
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
                                                    return (0, D.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eE.t.OPEN_PLAYLIST:
                                        case eE.t.SMART_OPEN_PLAYLIST:
                                        case eE.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in i && (a.data = t7(i, a.id));
                                            break;
                                        case eE.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in i && (a.data = tv(i));
                                            break;
                                        case eE.t.NEW_RELEASES:
                                        case eE.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in i && (a.data = t4(i));
                                            break;
                                        case eE.t.NEW_PLAYLISTS:
                                        case eE.t.EDITORIAL_COMPILATION:
                                        case eE.t.RECOMMENDED_PLAYLISTS:
                                        case eE.t.META_TAG_POPULAR_PLAYLISTS:
                                        case eE.t.META_TAG_NEW_ALBUMS:
                                        case eE.t.META_TAG_PLAYLISTS:
                                        case eE.t.MICRO_GENRE_ALBUMS:
                                        case eE.t.META_TAG_ALBUMS:
                                        case eE.t.ARTIST_PLAYLISTS:
                                        case eE.t.ARTIST_COMPILATIONS:
                                        case eE.t.ARTIST_ALBUMS:
                                        case eE.t.ARTIST_STUDIO_ALBUMS:
                                        case eE.t.ARTIST_SIMILAR_ENTITIES:
                                        case eE.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in i && (a.data = ep(i));
                                            break;
                                        case eE.t.RECENTLY_PLAYED:
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
                                                                          return en(e.data.album, e.data.artists, e.data.trailer);
                                                                      case el._.ARTIST_ITEM:
                                                                          return ed(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, D.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eE.t.IN_STYLE:
                                            'inStyleTabs' in i && (a.data = t0(i));
                                            break;
                                        case eE.t.PROMOTIONS:
                                        case eE.t.EDITORIAL_PROMOTIONS:
                                        case eE.t.NON_MUSIC_PROMOTIONS:
                                            'promotions' in i &&
                                                (a.data = ((e) => {
                                                    if (!Array.isArray(null == e ? void 0 : e.promotions)) return (0, D.wg)({});
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
                                                    return (0, D.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eE.t.REWIND_PLAYLISTS:
                                        case eE.t.PERSONAL_PLAYLISTS:
                                            'items' in i && (a.data = at(i));
                                            break;
                                        case eE.t.SPECIAL:
                                            'title' in i && (a.data = al(i));
                                            break;
                                        case eE.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== i.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(tc);
                                                                  return (0, D.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, D.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case eE.t.WAVES:
                                        case eE.t.SETS_BY_WAVES:
                                            'waves' in i && (a.data = ao(i));
                                            break;
                                        case eE.t.WAVES_AGENT:
                                        case eE.t.SETS_BY_WAVES_AGENT:
                                            i && 'object' == typeof i && 'waves' in i && (a.data = an(i));
                                            break;
                                        case eE.t.MIXES_GRID:
                                        case eE.t.MIXES_MUSIC:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = t5(i));
                                            break;
                                        case eE.t.MIXES:
                                            'items' in i && (a.data = { items: (0, D.wg)(i.items.map((e) => (0, t8.J)(e.data))) });
                                            break;
                                        case eE.t.NEUROMUSIC:
                                            'items' in i && (a.data = t6(i));
                                            break;
                                        case eE.t.LIKES_AND_HISTORY:
                                            'favorites' in i && (a.data = t3(i));
                                            break;
                                        case eE.t.CONCERTS_TOP:
                                        case eE.t.CONCERTS_PERSONAL:
                                        case eE.t.EDITORIAL_CONCERTS:
                                        case eE.t.VIEWED_CONCERTS:
                                            void 0 !== i.concerts && (a.data = t$(i));
                                            break;
                                        case eE.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
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
                                                                  return (0, D.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, D.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case eE.t.EDITORIAL_WAVES:
                                        case eE.t.META_TAG_WAVE:
                                        case eE.t.MICRO_GENRE_WAVE:
                                        case eE.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case eE.t.META_TAG_SIMILAR_WAVE:
                                            'items' in i && (a.data = tZ(i));
                                            break;
                                        case eE.t.EDITORIAL_WAVES_AGENT:
                                        case eE.t.META_TAG_WAVE_AGENT:
                                        case eE.t.MICRO_GENRE_WAVE_AGENT:
                                        case eE.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case eE.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            i && 'object' == typeof i && 'items' in i && (a.data = tz(i));
                                            break;
                                        case eE.t.ITEM_LIST:
                                            'items' in i && (a.data = t1(i));
                                            break;
                                        case eE.t.DONATIONS:
                                            void 0 !== i.donations && (a.data = tq(i));
                                            break;
                                        case eE.t.CONTINUE_LISTEN:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'bookshelf' in i &&
                                                (a.data = ((e) => {
                                                    let { bookshelf: t, newEpisodes: a, lastPlayed: i } = e;
                                                    return (0, D.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (t.covers || []).map(tY),
                                                            bookCount: t.bookCount,
                                                            podcastCount: t.podcastCount,
                                                        },
                                                        newEpisodes: { title: a.title, covers: (a.covers || []).map(tY), trackCount: a.trackCount },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: { track: a, album: i, playlist: r, durationTotal: l, durationLeft: s },
                                                                } = e;
                                                                return (0, D.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === tC._.ALBUM && i ? (0, es.s)({ album: i }) : void 0,
                                                                        playlist: t !== tC._.ALBUM && r ? (0, eg.b)({ playlist: r }) : void 0,
                                                                        track: (0, tl.v)(a),
                                                                        albumDuration: l,
                                                                        albumDurationLeft: s,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(i));
                                            break;
                                        case eE.t.SIMPLE_ALBUM_PROMO:
                                        case eE.t.ALBUM_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = aa(i));
                                            break;
                                        case eE.t.ARTIST_RECOMMENDATIONS_PROMO:
                                        case eE.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = eT(i));
                                            break;
                                        case eE.t.COLLECTION_DOWNLOADED_TRACKS:
                                            i &&
                                                'object' == typeof i &&
                                                'tracks' in i &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, tl.v)(e));
                                                    return (0, D.wg)({ items: a, rawTracks: t });
                                                })(i));
                                            break;
                                        case eE.t.HISTORY:
                                        case eE.t.SEARCH_HISTORY:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case el._.ALBUM_ITEM:
                                                                    return en(e.data.album, e.data.artists, e.data.trailer);
                                                                case el._.ARTIST_ITEM:
                                                                    return ed(e.data.artist, e.data.trailer);
                                                                case el._.TRACK_ITEM:
                                                                    return tb(e);
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
                                                                        (0, D.wg)({
                                                                            type: el._.WAVE_ITEM,
                                                                            data: {
                                                                                cover: t.data.cover ? (0, tm.p)(t.data.cover) : void 0,
                                                                                vibe: (0, tQ.e)(t.data.wave),
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
                                                                        (a = e), (0, D.wg)({ type: el._.QUERY_TO_VIBE_ITEM, data: (0, em.l)(a.data.wave, a.data.agent) })
                                                                    );
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, D.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eE.t.Q2V_SUGGESTIONS:
                                            i &&
                                                'object' == typeof i &&
                                                'suggestionsRequestId' in i &&
                                                'string' == typeof i.suggestionsRequestId &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                i.items.every((e) => !!(e && 'object' == typeof e && 'query' in e && 'string' == typeof e.query)) &&
                                                (a.data = ai(i));
                                            break;
                                        case eE.t.COLLECTION_KIDS:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case el._.TRACK_ITEM:
                                                                return tb(e);
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
                                                    return (0, D.wg)({ items: t });
                                                })(i));
                                            break;
                                        case eE.t.ARTIST_CONCERTS:
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
                                                    return (0, D.wg)({ items: a });
                                                })(i));
                                            break;
                                        case eE.t.ARTIST_POPULAR_TRACKS:
                                            i && 'object' == typeof i && 'tracks' in i && i.tracks && (a.data = (0, D.wg)({ items: i.tracks.map((e) => (0, tl.v)(e)) }));
                                            break;
                                        case eE.t.ARTIST_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: r } = e.release;
                                                    return { album: (0, es.s)({ album: t, artists: a, trailer: r, releaseDate: i }), releaseDate: i };
                                                })(i));
                                            break;
                                        case eE.t.FAMILIAR_YOU:
                                            i &&
                                                'object' == typeof i &&
                                                (a.data = (0, D.wg)({
                                                    vibeTrackCount: null == (n = i.wave) ? void 0 : n.trackCount,
                                                    collectionTrackCount: null == (o = i.collection) ? void 0 : o.trackCount,
                                                    collectionAlbumCount: null == (d = i.collection) ? void 0 : d.albumCount,
                                                }));
                                            break;
                                        case eE.t.ARTIST_PICK:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                i.artists &&
                                                'playlist' in i &&
                                                i.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => (0, eo.a)({ artist: e }));
                                                    return (0, D.wg)({ playlist: (0, eg.b)({ playlist: e.playlist }), artists: t });
                                                })(i));
                                            break;
                                        case eE.t.ARTIST_UPCOMING_RELEASE:
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
                                                                { disclaimers: s } = (0, ts.f)(a);
                                                            return (0, D.wg)({
                                                                id: a.id,
                                                                title: a.title,
                                                                type: a.albumType,
                                                                coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                                                isPresave: l,
                                                                releaseDate: r,
                                                                disclaimers: s,
                                                                artists: null == i ? void 0 : i.map((e) => (0, eo.a)({ artist: e })),
                                                            });
                                                        })({ album: t, artists: a, releaseDate: i, isPresave: e.presaved }),
                                                    };
                                                })(i));
                                            break;
                                        case eE.t.CONCERT_PLACE:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'map' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(tX) : null;
                                                    return (0, D.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(i));
                                            break;
                                        case eE.t.COLLECTION_WAVE_AGENT:
                                            i && 'object' == typeof i && 'wave' in i && 'agent' in i && (a.data = (0, D.wg)({ vibe: (0, em.l)(i.wave, i.agent) }));
                                            break;
                                        case eE.t.COLLECTION_WAVE_ROOMS:
                                            i && Array.isArray(i) && (a.data = (0, D.wg)({ items: i.map(tI) }));
                                            break;
                                        case eE.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
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
                                                    return (0, D.wg)({ artists: t });
                                                })(i));
                                    }
                                    a.loadingState = eb.RESOLVE;
                                } catch (e) {
                                    (c.error(e),
                                        (0, D._n)(a) &&
                                            ((a.loadingState = eb.REJECT),
                                            e instanceof U.GX && (e.statusCode === U.X1.NOT_FOUND || e.statusCode === U.X1.BAD_REQUEST) && (a.isNotFound = !0)));
                                }
                            }),
                            getTabData: (0, D.L3)(function* (t) {
                                let { landingResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                                let s = null != a ? a : 0,
                                    n = [];
                                ((null == (i = e.meta) ? void 0 : i.source) && n.push(t.getTabData(e.meta.source)),
                                    null == (r = e.upperBlocks) ||
                                        r.forEach((e) => {
                                            s > 0 && ((0, t_.v)(e.meta) || tt(e.type)) && (s--, n.push(t.getBlock(e)));
                                        }),
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e) => {
                                            e.blocks.slice(0, s).forEach((e) => {
                                                ((0, t_.v)(e.meta) || tt(e.type)) && n.push(t.getBlock(e));
                                            });
                                        }),
                                    n.length > 0 && (await Promise.allSettled(n)));
                            },
                            getSkeleton: (0, D.L3)(function* (a, i) {
                                let { landingResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            s = tW(null == l ? void 0 : l.blocks);
                                        (s &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, D.wg)(s.meta)),
                                            (e.upperBlocks = (0, D.wg)(s.upperBlocks)),
                                            (e.tabs.data = (0, D.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getArtistSkeleton: (0, D.L3)(function* (a, i) {
                                let { artistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            s = tW(null == l ? void 0 : l.blocks);
                                        (s &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, D.wg)(s.meta)),
                                            (e.upperBlocks = (0, D.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, D.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (l.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            getConcertSkeleton: (0, D.L3)(function* (a, i) {
                                let { concertsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let l = yield r.getSkeleton(a),
                                            s = tW(null == l ? void 0 : l.blocks);
                                        (s &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, D.wg)(s.meta)),
                                            (e.upperBlocks = (0, D.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, D.wg)(s.tabs.data)),
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
                rj = D.gK.model('ArtistBrandedButton', { title: D.gK.maybeNull(D.gK.string), url: D.gK.maybeNull(D.gK.string) }),
                rW = D.gK
                    .model('ArtistMeta', {
                        artist: eR.P,
                        donationUrl: D.gK.maybe(D.gK.string),
                        lastMonthListeners: D.gK.maybe(D.gK.number),
                        brandedButton: D.gK.maybe(rj),
                        covers: D.gK.maybeNull(D.gK.array(D.gK.string)),
                    })
                    .views((e) => ({
                        get hasCovers() {
                            var t;
                            return !!(null == (t = e.covers) ? void 0 : t.length);
                        },
                    }));
            var rX = a(84403);
            let r$ = /^https:\/\/tips\.yandex\.ru\//,
                rY = (e) => r$.test(null != e ? e : '');
            var rJ = a(52440),
                rq = a(87128);
            let rH = D.gK
                    .compose(
                        D.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, rJ.I)(eC.J),
                            variant: D.gK.maybeNull(D.gK.enumeration(Object.values(rq.h))),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
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
                        getData: (0, D.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: r = 20, sort: l, preloadedAlbums: s } = t,
                                { artistsResource: n, modelActionsLogger: o } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = { artistId: a, page: i, pageSize: r, sort: { sortBy: null == l ? void 0 : l.sortBy } },
                                        o = s;
                                    if (!o)
                                        switch (e.variant) {
                                            case rq.h.COMPILATIONS:
                                                o = yield n.getAlsoAlbums(t);
                                                break;
                                            case rq.h.DISCOGRAPHY:
                                                o = yield n.getDiscographyAlbums(t);
                                                break;
                                            default:
                                                o = yield n.getDirectAlbums(t);
                                        }
                                    let d = o.albums.map(eQ.p);
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: r, total: o.pager.total } });
                                } catch (t) {
                                    (o.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            ((e.variant = null), (e.errorStatusCode = null), e.pagesLoader.reset());
                        },
                    })),
                rz = D.gK
                    .model('ArtistClipsPage', { pagesLoader: (0, rJ.I)(ah), errorStatusCode: D.gK.maybeNull(D.gK.number) })
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
                        getData: (0, D.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: r = 20, preloadedClips: l } = t,
                                { artistsResource: s, modelActionsLogger: n } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = l;
                                    t || (t = yield s.getClips({ artistId: a, page: i, pageSize: r }));
                                    let n = t.items.map((e) => td({ clip: e.data.clip, artists: e.data.artists }));
                                    e.pagesLoader.setItems(n, { page: i, pager: t.pager });
                                } catch (t) {
                                    (n.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.errorStatusCode = null));
                        },
                    }));
            var rQ = a(19815),
                rZ = a(58400),
                r0 = a(47255);
            let r1 = (e) => {
                    var t, a, i, r, l;
                    return (0, D.wg)({
                        id: e.id,
                        dataSessionId: null != (r = e['data-session-id']) ? r : '',
                        datetime: e.datetime && (0, rZ.A)(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: (0, r0.J)(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        cashbackValuePercent: null == (a = e.cashback) ? void 0 : a.valuePercent,
                        title: e.concertTitle,
                        eventKind: null != (l = null == (i = e.eventInfo) ? void 0 : i.type) ? l : rQ.Z.UNSPECIFIED,
                    });
                },
                r3 = D.gK
                    .compose(
                        D.gK.model('ArtistConcertsPage', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            concerts: D.gK.maybeNull(D.gK.array(am.a)),
                            artistTitle: D.gK.maybeNull(D.gK.string),
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
                        getData: (0, D.L3)(function* (t) {
                            let { artistId: a, preloadedConcerts: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = null == i ? void 0 : i.concerts,
                                        l = null == i ? void 0 : i.artistTitle;
                                    if (!t) {
                                        let i = (0, _.M)(e).concerts.concertsLocationForRequest,
                                            s = yield r.getConcerts({ artistId: a, locations: i });
                                        ((t = s.concerts), (l = s.artistTitle));
                                    }
                                    ((e.concerts = (0, D.wg)(t.map(r1))), (e.artistTitle = null != l ? l : null), (e.loadingState = F.G.RESOLVE));
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
            var r2 = a(40512);
            let r5 = (e) => (0, D.wg)({ ...(0, es.s)({ album: e, artists: e.artists }), version: e.version }),
                r8 = D.gK
                    .compose(
                        D.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            vibeTracks: D.gK.maybeNull(D.gK.array(Z.v)),
                            collectionTracks: D.gK.maybeNull(D.gK.array(Z.v)),
                            collectionAlbums: D.gK.maybeNull(D.gK.array(eC.J)),
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
                                var s;
                                return Number(null == (s = e.vibeTracks) ? void 0 : s.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var n, o;
                                return null != (o = null == (n = e.collectionTracks) ? void 0 : n.map(r2.$)) ? o : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null != (g = null == (d = e.vibeTracks) ? void 0 : d.map(r2.$)) ? g : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, D.L3)(function* (t) {
                            let { artistId: a, preloadedFamiliar: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var s, n, o, d, g, u;
                                    e.loadingState = F.G.PENDING;
                                    let t = i;
                                    (t || (t = yield r.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (e.vibeTracks = (0, D.wg)(null == (n = t.wave) || null == (s = n.tracks) ? void 0 : s.map((e) => (0, tl.v)(e)))),
                                        (e.collectionTracks = (0, D.wg)(null == (d = t.collection) || null == (o = d.tracks) ? void 0 : o.map((e) => (0, tl.v)(e)))),
                                        (e.collectionAlbums = (0, D.wg)(null == (u = t.collection) || null == (g = u.albums) ? void 0 : g.map(r5))),
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
            var r6 = a(98138);
            let r4 = D.gK
                    .compose(
                        D.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: D.gK.maybeNull(D.gK.number), similarArtists: D.gK.maybeNull(D.gK.array(eR.P)) }),
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
                        getData: (0, D.L3)(function* (t) {
                            let { artistId: a, preloadedSimilarArtists: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = i;
                                (t || (t = yield r.getSimilarArtists({ artistId: a })),
                                    (e.similarArtists = (0, D.wg)(t.similarArtists.map(r6.d))),
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
                r9 = D.gK.model('CommonSubPage', { artistName: D.gK.maybeNull(D.gK.string) }),
                r7 = D.gK
                    .compose(
                        D.gK.model('FullTracksList', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            ids: D.gK.maybeNull(D.gK.array(D.gK.string)),
                            tracks: D.gK.optional(D.gK.map(Z.v), {}),
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
                        getTracksIds: (0, D.L3)(function* (t) {
                            let { artistId: a } = t,
                                { artistsResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = yield i.getArtistTrackIds({ artistId: a }),
                                    { sonataState: r } = (0, _.M)(e);
                                (r.setUnloadedEntitiesData(t.map((e) => (0, ez.l)(e))),
                                    (e.ids = (0, D.wg)(t)),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof U.GX && (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) && (e.errorStatusCode = U.X1.NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        getTracks: (0, D.L3)(function* (t) {
                            let { trackIds: a } = t,
                                { tracksResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            try {
                                let t = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
                                e.tracks.merge(t.reduce((e, t) => ((e[t.id] = (0, tl.v)(t)), e), {}));
                            } catch (e) {
                                r.error(e);
                            }
                        }),
                        reset() {
                            let { sonataState: t } = (0, _.M)(e);
                            (t.resetUnloadedEntitiesData(), (e.loadingState = F.G.IDLE), e.destroyItems([e.tracks, e.ids]));
                        },
                    }));
            var le = a(55025);
            let lt = D.gK.compose(D.gK.model('OfflineArtistTrackIds', { ids: D.gK.maybeNull(D.gK.array(D.gK.string)) }), ee.X, w.p).actions((e) => ({
                    getIds: (0, D.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, D._$)(e);
                        if (e.loadingState !== F.G.PENDING)
                            try {
                                e.loadingState = F.G.PENDING;
                                let i = yield a.getArtistTrackIdsByUser(t);
                                ((e.ids = (0, D.wg)(i)), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.ids]));
                    },
                })),
                la = D.gK
                    .compose(D.gK.model('OfflineArtist', { id: D.gK.maybeNull(D.gK.string), meta: D.gK.maybeNull(rW), trackIds: lt, downloadedTracks: le.b }), ee.X, w.p)
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
                        getArtist: (0, D.L3)(function* (t, a) {
                            let { modelActionsLogger: i } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING) {
                                e.id = t;
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let i = yield a.getArtist(t);
                                    (i && (e.meta = (0, D.wg)({ artist: (0, r6.d)(i) })), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }
                        }),
                        reset() {
                            ((e.id = null), (e.loadingState = F.G.IDLE), e.trackIds.reset(), e.downloadedTracks.reset(), e.destroyItems([e.meta]));
                        },
                    })),
                li = D.gK
                    .compose(
                        D.gK.model('ArtistPage', {
                            id: D.gK.maybeNull(D.gK.string),
                            meta: D.gK.maybeNull(rW),
                            landing: rx,
                            deprecationTargetArtistId: D.gK.maybeNull(D.gK.number),
                            albumsSubpage: rH,
                            fullTracksListSubpage: r7,
                            concertsSubpage: r3,
                            similarArtistsSubPage: r4,
                            clipsSubpage: rz,
                            familiarSubpage: r8,
                            commonSubPage: r9,
                            offlineArtist: la,
                            infoLoadingState: ee.X,
                            infoErrorStatusCode: D.gK.maybeNull(D.gK.number),
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
                        getInfo: (0, D.L3)(function* (t) {
                            let { artistId: a, preloadedArtist: i } = t,
                                { artistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (((e.id = a), e.infoLoadingState.loadingState !== F.G.PENDING))
                                try {
                                    var s, n, o, d, g, u, c;
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
                                        (e.meta = (0, D.wg)(
                                            ((o = l),
                                            (0, D.wg)({
                                                artist: (0, eo.a)({ artist: o.artist, trailer: o.trailer, isComposer: o.artistType === rX.o.COMPOSER }),
                                                donationUrl: rY(null == (d = o.donation) ? void 0 : d.tipUrl) ? (null == (g = o.donation) ? void 0 : g.tipUrl) : void 0,
                                                lastMonthListeners: null == (u = o.stats) ? void 0 : u.lastMonthListeners,
                                                brandedButton: o.brandedButton ? ((t = o.brandedButton), (0, D.wg)({ title: t.title, url: t.action.weblink })) : void 0,
                                                covers:
                                                    null == (c = o.covers)
                                                        ? void 0
                                                        : c.map((e) => {
                                                              var t;
                                                              return null != (t = e.uri) ? t : '';
                                                          }),
                                            })),
                                        )),
                                        (null == (n = e.meta) || null == (s = n.artist) ? void 0 : s.resolveAllDisclaimers) &&
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
            var lr = a(31661),
                ll = a(15656);
            let ls = (e) => !!e && (e === ll.x.ASC || e === ll.x.DESC);
            var ln = a(7364);
            let lo = D.gK.compose(D.gK.model('UpcomingAlbums', { items: D.gK.maybeNull(D.gK.array(tk)) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                ld = D.gK
                    .compose(D.gK.model('CollectionAlbumsPage', { sort: D.gK.maybeNull(ln.w), pagesLoader: (0, rJ.I)(eC.J), upcomingAlbums: lo }), w.p)
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
                        getData: (0, D.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: s, metaType: n } = t,
                                { usersResource: o, modelActionsLogger: d } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, lr.W)(l) && ls(s) && (e.sort = (0, D.wg)({ sortBy: l, sortOrder: s })));
                                try {
                                    var g, u;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: r, sortBy: l, sortOrder: s, metaType: n }),
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
                                    (d.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                            }
                        }),
                        getPresaves: (0, D.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var l;
                                    e.upcomingAlbums.loadingState = F.G.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    ((e.upcomingAlbums.items = (0, D.wg)(null == (l = t.upcomingAlbums) ? void 0 : l.map(tu))),
                                        e.upcomingAlbumsLoadingState !== F.G.IDLE && (e.upcomingAlbums.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]));
                        },
                    })),
                lg = D.gK.compose(D.gK.model('TopArtists', { items: D.gK.array(a6) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                    },
                })),
                lu = D.gK
                    .compose(D.gK.model('CollectionArtistsPage', { sort: D.gK.maybeNull(ln.w), pagesLoader: (0, rJ.I)(eR.P), topArtists: lg }), w.p)
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
                        getDataTopArtists: (0, D.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            try {
                                var i, r;
                                e.topArtists.loadingState = F.G.PENDING;
                                let a = yield t.getTopArtists();
                                ((e.topArtists.items = (0, D.wg)(
                                    null !=
                                        (r =
                                            null == (i = a.artists)
                                                ? void 0
                                                : i.map((e) =>
                                                      ((e) => {
                                                          let t = (0, eo.a)({ artist: e.artist }),
                                                              a = (0, tS.w)(e.top);
                                                          return (0, D.wg)({ artist: t, listenTimeSeconds: e.listenTimeSeconds, top: a });
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
                        getData: (0, D.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: s } = t,
                                { usersResource: n, modelActionsLogger: o } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                ((e.sort = null), (0, lr.W)(l) && ls(s) && (e.sort = (0, D.wg)({ sortBy: l, sortOrder: s })));
                                try {
                                    var d, g;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield n.getLikedArtists({ userId: a, page: i, pageSize: r, sortBy: l, sortOrder: s }),
                                        o = null != (g = null == (d = t.artists) ? void 0 : d.map(r6.d)) ? g : [];
                                    e.pagesLoader.setItems(o, { page: i, pager: { page: i, perPage: r, total: t.pager.total } });
                                } catch (t) {
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                            }
                        }),
                        reset() {
                            (e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null));
                        },
                    })),
                lc = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e }));
                    return (0, D.wg)({
                        ...((e) => {
                            let { available: t, disclaimers: a } = (0, ts.f)(e);
                            return (0, D.wg)({
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
            var lm = a(66911),
                ly = a(23341);
            let lp = D.gK
                    .compose(D.gK.model('CollectionClipsPageWillLike', { clips: D.gK.maybeNull(D.gK.array(ah)) }), ee.X, w.p)
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
                        getData: (0, D.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            try {
                                e.loadingState = F.G.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                (a.clips && (e.clips = (0, D.wg)(a.clips.map(lc))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), e.destroyItems([e.clips]));
                        },
                    })),
                lb = D.gK
                    .compose(
                        D.gK.model('CollectionClipsPage', {
                            items: D.gK.array(D.gK.maybeNull(ah)),
                            pager: D.gK.maybeNull(ly.j),
                            alreadyRequestedPages: D.gK.map(D.gK.number),
                            pendingPages: D.gK.map(D.gK.number),
                            clipsWillLike: lp,
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
                            e.items = (0, D.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, D.L3)(function* (t) {
                            var a;
                            let { userId: i, page: r = 0, pageSize: l = 20 } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, D._$)(e);
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
                                    let t = yield s.getLikedClips({ userId: i, page: r, pageSize: l }),
                                        a = { page: r, perPage: l, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(lc);
                                        ((0, lm.I)({ items: e.items, mappedRawItems: i, page: r, pageSize: l }), (e.items = (0, D.wg)(e.items.slice(0, a.total))));
                                    }
                                    ((e.pager = (0, D.wg)(a)), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t), (e.loadingState = F.G.REJECT));
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
                lE = D.gK
                    .compose(
                        D.gK.model('CollectionNonMusicPage', {
                            items: D.gK.array(D.gK.maybeNull(eC.J)),
                            pager: D.gK.maybeNull(ly.j),
                            alreadyRequestedPages: D.gK.map(D.gK.number),
                            pendingPages: D.gK.map(D.gK.number),
                            requestsCount: D.gK.maybeNull(D.gK.number),
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
                        getData: (0, D.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, metaType: l } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, D._$)(e);
                            if (!(e.loadingState === F.G.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var o, d, g;
                                    ((e.loadingState = F.G.PENDING), e.pendingPages.set(''.concat(i), i));
                                    let t = yield s.getLikedAlbums({ userId: a, page: i, pageSize: r, metaType: l }),
                                        n = { page: i, perPage: r, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, D.wg)(Array.from({ length: n.total }, () => null)));
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
                                    ((0, lm.I)({ items: e.items, mappedRawItems: u, page: i, pageSize: r }),
                                        (e.pager = (0, D.wg)(n)),
                                        (e.requestsCount = (null != (g = e.requestsCount) ? g : 0) + 1),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t), (e.loadingState = F.G.REJECT));
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.items = (0, D.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0));
                        },
                    }));
            var lv = a(2215);
            let lS = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp }),
                lK = (e) => {
                    var t, a;
                    return (0, D.wg)({ ...(0, tE.j)(e), tracks: null != (a = null == e || null == (t = e.tracks) ? void 0 : t.map(lS)) ? a : [] });
                };
            var lI = a(83176),
                lL = a(81423);
            let lT = (e, t, a, i) => {
                    if (a === i) return;
                    let r = e.findIndex((e) => (null == e ? void 0 : e.key) === a),
                        l = e.findIndex((e) => (null == e ? void 0 : e.key) === i);
                    if (r < 0 || l < 0 || r >= t.length || l >= t.length) return;
                    let s = e[r],
                        n = e[l];
                    if (s && n && !s.isFavouritePlaylist && !n.isFavouritePlaylist && !s.generatedPlaylistType && !n.generatedPlaylistType) return { from: r, to: l };
                },
                lh = (e, t) => e.length === t.length && e.every((e, a) => e === t[a]),
                lN = D.gK
                    .model('CollectionPlaylistsCreatedPage', {
                        sort: D.gK.maybeNull(ln.w),
                        pagesLoader: (0, rJ.I)(lI.Z),
                        kinds: D.gK.array(D.gK.number),
                        isPlaylistMovePending: D.gK.optional(D.gK.boolean, !1),
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
                            let { experiments: t } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextCollectionPlaylistsDnD, 'on');
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => {
                        let t = (0, D.L3)(function* (t, a) {
                                let { userId: i, page: r = 0, pageSize: l = lL.d, withLikesCount: s } = t,
                                    { usersResource: n, modelActionsLogger: o } = (0, D._$)(e);
                                try {
                                    if ((e.pagesLoader.setPageState(r, F.G.PENDING), 0 === e.kinds.length)) {
                                        let t = yield* (0, D.HN)(n.getPlaylistsKinds({ userId: i, addPlaylistWithLikes: !0 }));
                                        if (a !== e.loadGeneration) return;
                                        e.kinds = (0, D.wg)(t);
                                    }
                                    let t = r * l,
                                        o = e.kinds.slice(t, t + l),
                                        d = yield* (0, D.HN)(n.getPlaylistsByKinds({ userId: i, kinds: o, withLikesCount: s, withTracks: !0 }));
                                    if (a !== e.loadGeneration) return;
                                    let g = d.map(lK);
                                    e.pagesLoader.setItems(g, { page: r, pager: { page: r, perPage: l, total: e.kinds.length } });
                                } catch (t) {
                                    if (a !== e.loadGeneration) return;
                                    (o.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: r }));
                                }
                            }),
                            a = (a) => {
                                let { page: i = 0, pageSize: r = lL.d, ...l } = a,
                                    s = e.pageRequests.get(i);
                                if (s) return s;
                                if (!e.pagesLoader.isPageNeedToLoad(i) || (e.isPlaylistMovePending && 0 === e.kinds.length)) return Promise.resolve();
                                let n = t({ ...l, page: i, pageSize: r }, e.loadGeneration);
                                e.pageRequests.set(i, n);
                                let o = () => {
                                    e.pageRequests.get(i) === n && e.pageRequests.delete(i);
                                };
                                return (n.then(o, o), n);
                            },
                            i = (t, a) => {
                                if (!e.pagesLoader.items) return [];
                                let i = new Set(),
                                    r = Math.min(t, a),
                                    l = Math.max(t, a);
                                for (let t = r; t <= l; t++) e.pagesLoader.items[t] || i.add(Math.floor(t / lL.d));
                                return Array.from(i);
                            },
                            r = (0, D.L3)(function* (t, i, r) {
                                for (let s = 0; s < i.length; s += 2) {
                                    let n = i.slice(s, s + 2);
                                    for (let t of n) {
                                        var l;
                                        (null == (l = e.pagesLoader.pageStates) ? void 0 : l[t]) === F.G.REJECT && e.pagesLoader.setPageState(t, F.G.IDLE);
                                    }
                                    if ((yield Promise.all(n.map((e) => a({ userId: t, page: e, pageSize: lL.d }))), r !== e.loadGeneration || !e.isDragAndDropEnabled))
                                        return;
                                }
                                return !0;
                            }),
                            l = () => {
                                ((e.loadGeneration += 1), e.pageRequests.clear(), (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, D.wg)([])));
                            },
                            s = (0, D.L3)(function* (t, a, i, r, s, n) {
                                let { usersResource: o, modelActionsLogger: d } = (0, D._$)(e);
                                try {
                                    let d = yield* (0, D.HN)(o.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 }));
                                    if (n !== e.loadGeneration) return;
                                    if (!e.isDragAndDropEnabled) return void l();
                                    let g = ((e) => {
                                        let { currentKinds: t, optimisticKinds: a, originalKinds: i, serverKinds: r } = e,
                                            l = lh(t, a);
                                        return l && lh(r, a) ? 'keep-optimistic' : l && lh(r, i) ? 'rollback' : 'reset';
                                    })({ currentKinds: e.kinds, optimisticKinds: s, originalKinds: r, serverKinds: d });
                                    if ('keep-optimistic' === g) return it.F.OK;
                                    if (
                                        'rollback' === g &&
                                        ((t, a, i) => {
                                            if (!e.pagesLoader.items) return !1;
                                            let r = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === t),
                                                l = e.pagesLoader.items[r],
                                                s = e.kinds[r];
                                            if (r < 0 || !l || 'number' != typeof s || i[a] !== s) return !1;
                                            let n = (0, D.Yo)(l);
                                            return (
                                                e.pagesLoader.items.splice(a, 0, n),
                                                e.kinds.splice(r, 1),
                                                e.kinds.splice(a, 0, s),
                                                e.kinds.length === i.length && e.kinds.every((e, t) => e === i[t])
                                            );
                                        })(a, i, r)
                                    )
                                        return it.F.ERROR;
                                } catch (t) {
                                    if (n !== e.loadGeneration) return;
                                    d.error(t);
                                }
                                return (l(), it.F.ERROR);
                            }),
                            n = (0, D.L3)(function* (t, a) {
                                if (!e.isDragAndDropEnabled || e.isPlaylistMovePending || !e.pagesLoader.items) return;
                                let n = lT(e.pagesLoader.items, e.kinds, t, a);
                                if (!n) return;
                                let o = e.pagesLoader.items[n.from];
                                if (!o) return;
                                e.isPlaylistMovePending = !0;
                                let { usersResource: d, modelActionsLogger: g } = (0, D._$)(e),
                                    u = e.loadGeneration;
                                try {
                                    let c = i(n.from, n.to);
                                    if (c.length > 0) {
                                        let t;
                                        try {
                                            t = yield* (0, D.HN)(r(o.uid, c, u));
                                        } catch (t) {
                                            if (u !== e.loadGeneration) return;
                                            return (g.error(t), it.F.ERROR);
                                        }
                                        if (void 0 === t) return;
                                    }
                                    if (u !== e.loadGeneration || !e.isDragAndDropEnabled) return;
                                    let m = e.pagesLoader.items.findIndex((e) => (null == e ? void 0 : e.key) === a),
                                        y = e.pagesLoader.items[m],
                                        p = y
                                            ? ((e, t, a, i) => {
                                                  let r = lT(e, t, a, i);
                                                  if (!r) return;
                                                  let { from: l, to: s } = r,
                                                      n = Math.min(l, s),
                                                      o = Math.max(l, s);
                                                  if (e.slice(n, o + 1).every((e) => !!e && !e.isFavouritePlaylist && !e.generatedPlaylistType))
                                                      return { from: l, to: s };
                                              })(e.pagesLoader.items, e.kinds, t, y.key)
                                            : void 0;
                                    if (!p) return i(n.from, n.to).length > 0 ? it.F.ERROR : void 0;
                                    let { from: b, to: E } = p,
                                        v = e.pagesLoader.items[b],
                                        S = e.kinds[b];
                                    if (!v || 'number' != typeof S) return;
                                    let K = v.uid,
                                        I = e.kinds.slice(),
                                        L = (0, D.Yo)(v);
                                    (e.pagesLoader.items.splice(E, 0, L), e.kinds.splice(b, 1), e.kinds.splice(E, 0, S));
                                    let T = e.kinds.slice();
                                    if (!e.isDragAndDropEnabled) return void l();
                                    try {
                                        let e = yield* (0, D.HN)(d.changePlaylistPosition({ userId: K, playlistKind: S, from: b, to: E }));
                                        if ('ok' !== e) throw Error('Не удалось изменить позицию плейлиста');
                                        return it.F.OK;
                                    } catch (a) {
                                        if ((g.error(a), u !== e.loadGeneration)) return;
                                        if (!e.isDragAndDropEnabled) return void l();
                                        return yield* (0, D.HN)(s(K, t, b, I, T, u));
                                    }
                                } catch (e) {
                                    return (g.error(e), l(), it.F.ERROR);
                                } finally {
                                    e.isPlaylistMovePending = !1;
                                }
                            });
                        return { getData: a, movePlaylist: n, reset: l };
                    }),
                lA = D.gK
                    .model('CollectionPlaylistsLikedPage', { sort: D.gK.maybeNull(ln.w), pagesLoader: (0, rJ.I)(tG.$) })
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
                        getData: (0, D.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: l, sortOrder: s, playlistMetaType: n, withTracks: o } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: d, modelActionsLogger: g } = (0, D._$)(e);
                            ((e.sort = null), (0, lr.W)(l) && ls(s) && (e.sort = (0, D.wg)({ sortBy: l, sortOrder: s })));
                            try {
                                e.pagesLoader.setPageState(i, F.G.PENDING);
                                let { likedPlaylists: t, pager: g } = yield d.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: r,
                                        sortBy: l,
                                        sortOrder: s,
                                        playlistMetaType: n,
                                        withTracks: o,
                                    }),
                                    u = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, tE.j)(t);
                                    });
                                e.pagesLoader.setItems(u, { page: i, pager: g });
                            } catch (t) {
                                (g.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                            }
                        }),
                        reset() {
                            ((e.sort = null), e.pagesLoader.reset());
                        },
                    })),
                lf = D.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: lA,
                        playlistsCreated: lN,
                        activeTabIndex: D.gK.number,
                        tabs: D.gK.array(D.gK.number),
                        tabIndexElement: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === lv.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === lv.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case lv.a.CREATED:
                                    return e.playlistsCreated;
                                case lv.a.LIKED:
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
                            (e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = lv.a.CREATED));
                        },
                    })),
                lC = (e) => (0, D.wg)({ type: e.type, track: (0, tl.v)(e.track), album: e.album && (0, eQ.p)(e.album) }),
                lR = D.gK.model('ShelfLikedItem', { type: D.gK.string, track: Z.v, album: D.gK.maybe(eC.J) }),
                lk = D.gK
                    .compose(
                        D.gK.model('CollectionShelfLiked', {
                            title: D.gK.maybeNull(D.gK.string),
                            typeForFrom: D.gK.maybeNull(D.gK.string),
                            entities: D.gK.maybeNull(D.gK.array(lR)),
                            pager: D.gK.maybeNull(ly.j),
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
                        getData: (0, D.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getShelfLiked();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, D.wg)(a.pager)),
                                        (e.entities = (0, D.wg)(a.entities ? a.entities.map(lC) : [])),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = F.G.IDLE));
                        },
                    }));
            var lP = a(50672),
                lD = a(62115);
            let l_ = D.gK.model('CaseForms', {
                    nominative: D.gK.optional(D.gK.string, ''),
                    genitive: D.gK.optional(D.gK.string, ''),
                    dative: D.gK.optional(D.gK.string, ''),
                    accusative: D.gK.optional(D.gK.string, ''),
                    instrumental: D.gK.optional(D.gK.string, ''),
                    prepositional: D.gK.optional(D.gK.string, ''),
                }),
                lO = D.gK.model('PlaylistMadeForUser', { caseForms: D.gK.maybeNull(l_) });
            var lw = a(79993);
            let lG = D.gK.model('PlaylistOwner', {
                    uid: D.gK.number,
                    login: D.gK.string,
                    name: D.gK.string,
                    sex: D.gK.enumeration(Object.values(lw.U)),
                    verified: D.gK.boolean,
                }),
                lM = D.gK.model('PlaylistTag', { id: D.gK.string, value: D.gK.string }),
                lU = tG.$.props({
                    owner: D.gK.maybe(lG),
                    modified: D.gK.string,
                    description: D.gK.maybe(D.gK.string),
                    tags: D.gK.maybeNull(D.gK.array(lM)),
                    madeForUser: D.gK.maybeNull(lO),
                })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return ['playlist:'.concat(null == (t = e.owner) ? void 0 : t.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, _.M)(e);
                            if (!t.checkExperiment(O.z.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, D.L3)(function* (t) {
                            if (!(0, D._n)(e)) return it.F.ERROR;
                            if (e.description === t) return it.F.OK;
                            if (t.length > lD.i) return it.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
                            if (e.canUserChange) {
                                let r = e.description;
                                e.description = t;
                                try {
                                    let i = yield a.changePlaylistDescription({ description: t, userId: e.uid, playlistKind: e.kind });
                                    return ((e.description = i.description), it.F.OK);
                                } catch (t) {
                                    ((e.description = r), i.error(t));
                                }
                            }
                            return it.F.ERROR;
                        }),
                        changePlaylistCover: (0, D.L3)(function* (t) {
                            if (!(0, D._n)(e)) return it.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
                            try {
                                let i = yield a.uploadPlaylistCover({ userId: e.uid, formData: t, playlistKind: e.kind });
                                return ((e.coverUri = i.cover.uri), it.F.OK);
                            } catch (e) {
                                i.error(e);
                            }
                            return it.F.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                lB = D.gK
                    .compose(
                        D.gK.model('CollectionShelfNewEpisodes', {
                            title: D.gK.maybeNull(D.gK.string),
                            typeForFrom: D.gK.maybeNull(D.gK.string),
                            playlist: D.gK.maybeNull(lU),
                            tracks: D.gK.maybeNull(D.gK.array(Z.v)),
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
                        getData: (0, D.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let r = a.blocks[0];
                                    ((null == r ? void 0 : r.typeForFrom) && (e.typeForFrom = r.typeForFrom),
                                        (null == r || null == (i = r.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, lP.Z)(r.entities[0].playlist)),
                                        (null == r ? void 0 : r.entities) && (e.tracks = (0, D.wg)(r.entities.filter((e) => e.track).map((e) => (0, tl.v)(e.track)))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = F.G.IDLE));
                        },
                    })),
                lV = (e) => (0, D.wg)({ type: e.type, album: e.album && (0, eQ.p)(e.album), playlist: e.playlist && (0, lP.Z)(e.playlist), track: (0, tl.v)(e.track) }),
                lF = D.gK.model('ShelfRecentlyPlayedItem', { type: D.gK.string, album: D.gK.maybe(eC.J), playlist: D.gK.maybe(ex.I), track: Z.v }),
                lx = D.gK
                    .compose(
                        D.gK.model('CollectionShelfRecentlyPlayed', {
                            title: D.gK.maybeNull(D.gK.string),
                            typeForFrom: D.gK.maybeNull(D.gK.string),
                            entities: D.gK.maybeNull(D.gK.array(lF)),
                            pager: D.gK.maybeNull(ly.j),
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
                        getData: (0, D.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    ((e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, D.wg)(a.pager)),
                                        (e.entities = (0, D.wg)(a.entities.map(lV))),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = F.G.IDLE));
                        },
                    })),
                lj = D.gK
                    .model('CollectionShelfPage', { recentlyPlayed: lx, newEpisodes: lB, liked: lk })
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
                lW = D.gK
                    .compose(D.gK.model('CollectionVibeRoomsPage', { items: D.gK.array(D.gK.maybeNull(ii)) }), ee.X, w.p)
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, _.M)(e);
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
                        getData: (0, D.L3)(function* () {
                            let { modelActionsLogger: t, waveResource: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = yield a.getRooms();
                                    ((e.items = (0, D.wg)(t.map(tI))), (e.loadingState = F.G.RESOLVE));
                                } catch (a) {
                                    (t.error(a), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        deleteRoomFromItems(t) {
                            var a;
                            e.items = (0, D.wg)(null == (a = e.items) ? void 0 : a.filter((e) => (null == e ? void 0 : e.id) !== t));
                        },
                        reset() {
                            ((e.loadingState = F.G.IDLE), e.destroyItems([e.items]));
                        },
                    })),
                lX = D.gK
                    .compose(D.gK.model('CollectionDislikesPageArtists', { items: D.gK.maybeNull(D.gK.array(eR.P)) }), ee.X)
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
                        getData: (0, D.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!(0, D._n)(e)) return null;
                            let { user: i } = (0, _.M)(e);
                            if (e.loadingState === F.G.PENDING) return null;
                            if (((e.loadingState = F.G.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return ((e.items = (0, D.wg)((a || []).map(r6.d))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE), a);
                                } catch (t) {
                                    (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            return ((e.loadingState = F.G.REJECT), null);
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.items = null));
                        },
                    })),
                l$ = D.gK.model('CollectionDislikesPageTracksItem', { id: D.gK.string, loadingState: D.gK.enumeration(Object.values(F.G)), data: D.gK.maybeNull(Z.v) }),
                lY = D.gK
                    .compose(D.gK.model('CollectionDislikesPageTracks', { items: D.gK.maybeNull(D.gK.array(l$)) }), ee.X)
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
                        getData: (0, D.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                { user: i } = (0, _.M)(e);
                            if (i.account.data.uid && e.loadingState !== F.G.PENDING) {
                                e.loadingState = F.G.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        r = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, im.V)(t, a)), loadingState: F.G.IDLE };
                                        });
                                    ((e.items = (0, D.wg)(r)), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }
                        }),
                        getTracksByRange: (0, D.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.items.length)));
                            let s = ((e, t, a) => {
                                let i = [];
                                for (let s = t; s <= a; s++) {
                                    var r, l;
                                    ((null == (r = e[s]) ? void 0 : r.loadingState) === F.G.IDLE || (null == (l = e[s]) ? void 0 : l.loadingState) === F.G.REJECT) &&
                                        i.push(s);
                                }
                                return i;
                            })(e.items, t, a);
                            try {
                                let t,
                                    a =
                                        ((t = e.items),
                                        s.map((e) => {
                                            let a = t[e];
                                            return String(null == a ? void 0 : a.id);
                                        }));
                                if (!a.length) return null;
                                s.forEach((t) => {
                                    var a;
                                    let i = null == (a = e.items) ? void 0 : a[t];
                                    i && (i.loadingState = F.G.PENDING);
                                });
                                let i = yield r.getTracksMeta({ trackIds: a, withProgress: !0 });
                                s.forEach((t, a) => {
                                    var r;
                                    let l = null == i ? void 0 : i[a];
                                    (null == (r = e.items) ? void 0 : r[t]) && l && (e.items[t] = { id: String(l.id), data: (0, tl.v)(l), loadingState: F.G.RESOLVE });
                                });
                            } catch (t) {
                                (l.error(t),
                                    s.forEach((t) => {
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
                lJ = D.gK
                    .model('CollectionDislikesPage', { artists: lX, tracks: lY })
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
            var lq = a(71104);
            let lH = D.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, rJ.I)(eC.J) })
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
                        getData: (0, D.L3)(function* (t) {
                            let { pageSize: a = lq.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => tp(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                lz = D.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, rJ.I)(ex.I) })
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
                        getData: (0, D.L3)(function* (t) {
                            let { pageSize: a = lq.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        l = t.items.map((e) => eu(e.data).data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                lQ = D.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, rJ.I)(Z.v) })
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
                                return t.loadedItems.map(r2.$);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, D.L3)(function* (t) {
                            let { pageSize: a = lq.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        l = t.items.map(tb).map((e) => e.data);
                                    e.pagesLoader.setItems(l, { page: i, pager: t.pager });
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                lZ = D.gK
                    .model('CollectionKidsPage', { albums: lH, playlists: lz, tracks: lQ })
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
                l0 = D.gK
                    .compose(D.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, rJ.I)(lR), typeForFrom: D.gK.maybeNull(D.gK.string) }), w.p)
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
                        getData: (0, D.L3)(function* (t) {
                            let { pageSize: a = lq.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getShelfLiked({ page: i, pageSize: a }),
                                        l = (null == (s = t.entities) ? void 0 : s.map(lC)) || [];
                                    (e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null));
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                l1 = D.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, rJ.I)(lF), typeForFrom: D.gK.maybeNull(D.gK.string) })
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
                        getData: (0, D.L3)(function* (t) {
                            let { pageSize: a = lq.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: l } = (0, D._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, F.G.PENDING);
                                    let t = yield r.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        l = (null == (s = t.entities) ? void 0 : s.map(lV)) || [];
                                    (e.pagesLoader.setItems(l, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null));
                                } catch (t) {
                                    (l.error(t), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: i }));
                                }
                        }),
                        reset() {
                            (e.pagesLoader.reset(), (e.typeForFrom = null));
                        },
                    })),
                l3 = D.gK.model('CollectionPage', {
                    landing: rx,
                    albums: ld,
                    playlists: lf,
                    artists: lu,
                    shelf: lj,
                    shelfRecentlyPlayed: l1,
                    shelfLiked: l0,
                    nonMusicLiked: lE,
                    dislikes: lJ,
                    kids: lZ,
                    clips: lb,
                    vibeRooms: lW,
                }),
                l2 = D.gK.model('ConcertDescription', { text: D.gK.string, genre: D.gK.maybe(D.gK.string), source: D.gK.maybe(D.gK.string) }),
                l5 = D.gK
                    .compose(
                        D.gK.model('ConcertPage', {
                            meta: D.gK.maybeNull(am.a),
                            covers: D.gK.maybeNull(D.gK.array(eP.$)),
                            description: D.gK.maybeNull(l2),
                            leadArtistId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            artists: D.gK.maybeNull(D.gK.array(eR.P)),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            landing: rx,
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
                        getInfo: (0, D.L3)(function* (t) {
                            let { concertId: a } = t,
                                { concertsResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let { concert: t, minPrice: r, covers: l, description: s, leadArtistId: n, artists: o } = yield i.getInfo({ concertId: a });
                                    ((e.meta = (0, tr.h)(t, r)),
                                        (e.covers = (0, D.wg)(null == l ? void 0 : l.map((e) => (0, tm.p)(e)))),
                                        (e.description = s ? (0, D.wg)(s) : null),
                                        (e.leadArtistId = n ? (0, D.wg)(n) : null),
                                        (e.artists = (0, D.wg)(null == o ? void 0 : o.map((e) => (0, r6.d)(e)))),
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
            var l8 = a(10363),
                l6 = a(15253);
            let l4 = (e, t, a) => (-1 === a ? e.slice(t) : e.slice(t, t + a)),
                l9 = (e) => (0, D.wg)({ id: e.id, name: e.name }),
                l7 = D.gK.model('ConcertLocation', { id: D.gK.number, name: D.gK.string });
            var se = a(32298);
            let st = D.gK
                    .compose(
                        D.gK.model({
                            selectedLocationId: D.gK.maybeNull(D.gK.number),
                            locations: D.gK.maybeNull(D.gK.array(l7)),
                            isInitialized: D.gK.optional(D.gK.boolean, !1),
                            modal: se.q,
                            searchText: D.gK.optional(D.gK.string, ''),
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
                            let { containerStorage: t } = (0, D._$)(e),
                                a = t.get(l6.c.ConcertLocation);
                            ('number' == typeof a && (e.selectedLocationId = a), (e.isInitialized = !0));
                        },
                        getLocations: (0, D.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getLocations({});
                                    ((e.locations = (0, D.wg)(a.locations.map(l9))), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: a } = (0, D._$)(e);
                            ((e.selectedLocationId = t),
                                null === t ? a.remove(l6.c.ConcertLocation) : a.set(l6.c.ConcertLocation, t, { expires: 365 }),
                                (0, _.M)(e).concerts.reloadData());
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
                sa = D.gK
                    .compose(
                        D.gK.model('ConcertsPageConfig', {
                            topOffset: D.gK.optional(D.gK.number, 0),
                            topLimit: D.gK.optional(D.gK.number, 3),
                            feedOffset: D.gK.optional(D.gK.number, 3),
                            feedLimit: D.gK.optional(D.gK.number, -1),
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        getData: (0, D.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, D._$)(e);
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
                si = D.gK
                    .compose(
                        D.gK.model('ConcertsPage', {
                            config: sa,
                            landing: rx,
                            locationSelection: st,
                            topConcerts: D.gK.maybeNull(D.gK.array(am.a)),
                            feedConcerts: D.gK.maybeNull(D.gK.array(am.a)),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => {
                        let t = () => {
                            var t;
                            let { containerStorage: a } = (0, D._$)(e),
                                i = a.get(l6.c.ConcertLocation);
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
                                let { experiments: t } = (0, _.M)(e);
                                return t.checkExperiment(O.z.WebNextConcertsLocation, 'on');
                            },
                            get concertsLocationForRequest() {
                                let { experiments: a } = (0, _.M)(e),
                                    i = a.checkExperiment(O.z.WebNextConcertsLocationAll, 'on'),
                                    r = t();
                                if (i && null !== r) return [r];
                                return;
                            },
                            get concertsLocationForFeedRequest() {
                                let { experiments: a } = (0, _.M)(e),
                                    i = a.checkExperiment(O.z.WebNextConcertsLocation, 'on'),
                                    r = t();
                                if (i && null !== r) return [r];
                                return;
                            },
                        };
                    })
                    .actions((e) => {
                        let t = (0, D.L3)(function* () {
                                let { concertsResource: t } = (0, D._$)(e),
                                    a = {},
                                    i = e.concertsLocationForFeedRequest;
                                (null == i ? void 0 : i.length) && (a.locations = i);
                                let { items: r } = yield t.getFeed(a),
                                    { feedConcerts: l, topConcerts: s } = ((e, t) => {
                                        let { topLimit: a, topOffset: i, feedLimit: r, feedOffset: l } = e;
                                        return { topConcerts: l4(t, i, a), feedConcerts: l4(t, l, r) };
                                    })(
                                        e.config,
                                        r.map((e) => (0, l8.H)(e)),
                                    );
                                ((e.feedConcerts = (0, D.wg)(l)), (e.topConcerts = (0, D.wg)(s)));
                            }),
                            a = {
                                resetPageData() {
                                    (e.config.reset(), e.landing.reset(), (e.loadingState = F.G.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]));
                                },
                                getData: (0, D.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, D._$)(e);
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
                                reloadData: (0, D.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, D._$)(e);
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
                sr = D.gK
                    .compose(
                        D.gK.model('KidsEditorialAlbumPage', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            title: D.gK.maybeNull(D.gK.string),
                            albumsData: D.gK.array(D.gK.model({ id: D.gK.number })),
                            pagesLoader: (0, rJ.I)(eC.J),
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
                            getAlbums: (0, D.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { albumResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.albumsData.slice(t, t + i).map((e) => e.id),
                                            s = yield r.getAlbums({ albumIds: l }),
                                            n = { page: a, perPage: i, total: e.albumsData.length },
                                            o = s.map(eQ.p);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, D.L3)(function* (a) {
                                let { id: i, page: r = 0, pageSize: l = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield s.getEditorialAlbum({ id: i });
                                        ((e.title = a.title),
                                            (e.albumsData = (0, D.wg)((null != (o = a.entities) ? o : []).map((e) => ({ id: e })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getAlbums({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, D.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                sl = D.gK
                    .compose(
                        D.gK.model('KidsEditorialPlaylistPage', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            title: D.gK.maybeNull(D.gK.string),
                            playlistsData: D.gK.array(D.gK.model({ uid: D.gK.number, kind: D.gK.number })),
                            pagesLoader: (0, rJ.I)(tG.$),
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
                            getPlaylists: (0, D.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.playlistsData.slice(t, t + i),
                                            s = yield r.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(tE.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, D.L3)(function* (a) {
                                let { id: i, page: r = 0, pageSize: l = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield s.getEditorialPlaylist({ id: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, D.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getPlaylists({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                ((e.loadingState = F.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, D.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                ss = D.gK.model('KidsPage', { landing: rx, kidsEditorialPlaylistSubpage: sl, kidsEditorialAlbumSubpage: sr }),
                sn = D.gK
                    .model('MainPageEntryPoint', { loadingState: D.gK.enumeration(Object.values(F.G)), content: D.gK.maybeNull(D.gK.frozen()) })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === F.G.IDLE;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, _.M)(e);
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
                                let { sessionStorage: r } = (0, D._$)(e);
                                return null != (i = null == (a = r.get(l6.c.MainPageEntryPointPlayedAnimations)) ? void 0 : a.includes(t)) && i;
                            },
                            markAnimationPlayed(t) {
                                var a;
                                let { sessionStorage: i } = (0, D._$)(e),
                                    r = null != (a = i.get(l6.c.MainPageEntryPointPlayedAnimations)) ? a : [];
                                r.includes(t) || i.set(l6.c.MainPageEntryPointPlayedAnimations, [...r, t]);
                            },
                            getData: (0, D.L3)(function* () {
                                if (e.loadingState === F.G.PENDING) return;
                                let a = ++t,
                                    { dynamicPagesResource: i, modelActionsLogger: r } = (0, D._$)(e);
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
                so = D.gK.model('SpecialHeaderThemeOptions', { backgroundColor: D.gK.maybe(D.gK.string), textColor: D.gK.maybe(D.gK.string) }),
                sd = D.gK.model('SpecialHeader', { title: D.gK.string, url: D.gK.string, lightTheme: so, darkTheme: so }),
                sg = D.gK
                    .model('MainPage', { landing: rx, entryPoint: sn, specialHeaderLoadingState: D.gK.enumeration(Object.values(F.G)), specialHeader: D.gK.maybe(sd) })
                    .views((e) => ({
                        get isNewWaveTabEnabled() {
                            let { experiments: t } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextNewWaveTab, 'on') || t.checkExperiment(O.z.WebNextNewWaveTab, 'on1');
                        },
                        get withEntryPointButton() {
                            let { experiments: t } = (0, _.M)(e);
                            return e.entryPoint.withEntryPointContent || (!e.entryPoint.isEnabled && t.checkExperiment(O.z.WebNextNewWaveTabFeedbackForm, 'on'));
                        },
                    }))
                    .actions((e) => ({
                        getSpecialHeader: (0, D.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.specialHeaderLoadingState !== F.G.PENDING)
                                try {
                                    e.specialHeaderLoadingState = F.G.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    ((e.specialHeader = (0, D.wg)(
                                        ((e) => {
                                            var t, a, i, r, l, s;
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
                                                        textColor: null == (s = e.darkTheme) ? void 0 : s.buttonTitleColor,
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
                su = D.gK.model('NonMusicAlbumsPageItem', { id: D.gK.number, data: D.gK.maybeNull(eC.J) }),
                sc = D.gK
                    .compose(
                        D.gK.model('NonMusicAlbumsPage', {
                            errorStatusCode: D.gK.maybe(D.gK.number),
                            title: D.gK.maybeNull(D.gK.string),
                            albums: D.gK.maybeNull(D.gK.array(su)),
                            requestsCount: D.gK.maybe(D.gK.number),
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
                        getEditorialAlbums: (0, D.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var l;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getEditorialAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (l = t.entities) ? void 0 : l.length) && (e.albums = (0, D.wg)(t.entities.map((e) => ({ id: e })))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getCategoryAlbums: (0, D.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var l;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getCategoryAlbums({ id: a });
                                    ((e.title = t.title),
                                        (null == (l = t.albums) ? void 0 : l.length) && (e.albums = (0, D.wg)(t.albums.map((e) => ({ id: e })))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getAlbumsByRange: (0, D.L3)(function* (t, a) {
                            var i, r, l;
                            let { albumResource: s, modelActionsLogger: n } = (0, D._$)(e);
                            if (!(null == (i = e.albums) ? void 0 : i.length)) return null;
                            ((t = Math.max(0, t)), (a = Math.min(a, e.albums.length)));
                            let o = [];
                            for (let i = t; i <= a; i++)
                                (null == (r = e.albums[i]) ? void 0 : r.id) && !(null == (l = e.albums[i]) ? void 0 : l.data) && o.push(e.albums[i].id);
                            if (!o.length) return null;
                            try {
                                let t = yield s.getAlbums({ albumIds: o });
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
                                n.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.title = null), (e.albums = null), (e.requestsCount = 0));
                        },
                    })),
                sm = D.gK
                    .compose(
                        D.gK.model('NonMusicCategoryPlaylistsPage', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            title: D.gK.maybeNull(D.gK.string),
                            playlistsData: D.gK.array(D.gK.model({ uid: D.gK.number, kind: D.gK.number })),
                            pagesLoader: (0, rJ.I)(tG.$),
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
                            getPlaylists: (0, D.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState === F.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, F.G.PENDING);
                                    try {
                                        let t = a * i,
                                            l = e.playlistsData.slice(t, t + i),
                                            s = yield r.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(tE.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: a }),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                                }
                            }),
                            getData: (0, D.L3)(function* (a) {
                                let { categoryId: i, page: r = 0, pageSize: l = 20 } = a,
                                    { nonMusicResource: s, modelActionsLogger: n } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield s.getPlaylists({ categoryId: i });
                                        ((e.title = a.title),
                                            (e.playlistsData = (0, D.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            yield t.getPlaylists({ page: r, pageSize: l }));
                                    } catch (t) {
                                        (n.error(t),
                                            t instanceof U.GX &&
                                                (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = U.X1.NOT_FOUND),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(), (e.loadingState = F.G.IDLE), (e.title = null), (e.playlistsData = (0, D.wg)([])), (e.errorStatusCode = null));
                            },
                        };
                        return t;
                    }),
                sy = D.gK.model('NonMusicPage', { landing: rx, albums: sc, categoryPlaylistsSubpage: sm });
            var sp = a(96706);
            let sb = (e) => {
                    var t, a;
                    return (0, D.wg)({ ...(0, tE.j)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(r6.d)) ? a : [] });
                },
                sE = (e) => e.map((e) => (0, ez.l)(e.id, e.albumId || void 0));
            var sv = (function (e) {
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
                sS = (function (e) {
                    return ((e.MAJOR = 'major'), (e.NAME = 'name'), (e.ARTISCS = 'artists'), (e.LINK = 'link'), (e.ALBUM_ID = 'albumId'), (e.TRACK_ID = 'trackId'), e);
                })({});
            let sK = D.gK
                    .model('EditorFeature', {
                        shouldShowMajor: D.gK.boolean,
                        shouldShowGenre: D.gK.boolean,
                        shouldShowDuplicate: D.gK.boolean,
                        colorMajorMap: D.gK.map(D.gK.string),
                        duplicate: D.gK.map(D.gK.number),
                    })
                    .views((e) => {
                        let t = {
                            getNumberGroupTrackDuplicated(t) {
                                let { experiments: a } = (0, _.M)(e);
                                if (t && a.checkExperiment(O.z.WebEditorsFeatures, 'on')) return e.duplicate.get(String(t.id));
                            },
                            shouldHighlightDublicatedTrack: (a) => !!(e.shouldShowDuplicate && t.getNumberGroupTrackDuplicated(a)),
                            get sheetDataPlaylist() {
                                var a, i;
                                let { location: t, playlist: r } = (0, _.M)(e),
                                    l = 'https://'.concat(t.host, '.').concat(t.tld),
                                    s = {
                                        sheet: 'Playlist',
                                        columns: [
                                            { label: sv.MAJOR, value: sS.MAJOR },
                                            { label: sv.NAME, value: sS.NAME },
                                            { label: sv.ARTISCS, value: sS.ARTISCS },
                                            { label: sv.LINK, value: sS.LINK },
                                            { label: sv.ALBUM_ID, value: sS.ALBUM_ID },
                                            { label: sv.TRACK_ID, value: sS.TRACK_ID },
                                        ],
                                        content: r.items
                                            .filter((e) => e.data)
                                            .map((e) => {
                                                var t, a, i, r, s, n, o, d, g, u, c, m, y;
                                                let { href: p } = (0, h.no)(null != (d = null == (t = e.data) ? void 0 : t.url) ? d : '', { options: { host: l } }),
                                                    b = (null == (a = e.data) ? void 0 : a.url) ? p : '';
                                                return {
                                                    major: null != (g = null == (r = e.data) || null == (i = r.major) ? void 0 : i.name) ? g : '',
                                                    name: null != (u = null == (s = e.data) ? void 0 : s.title) ? u : '',
                                                    artists: null != (c = null == (n = e.data) ? void 0 : n.artists.map((e) => e.name).join(', ')) ? c : '',
                                                    link: b,
                                                    albumId: null != (m = e.albumId) ? m : '',
                                                    trackId: null != (y = null == (o = e.data) ? void 0 : o.id) ? y : '',
                                                };
                                            }),
                                    };
                                return {
                                    data: s,
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
                        exportToExcel: (0, D.L3)(function* () {
                            let { modelActionsLogger: t } = (0, D._$)(e);
                            try {
                                let t = yield Promise.all([a.e(714), a.e(8473), a.e(7748)]).then(a.t.bind(a, 37032, 23)),
                                    { data: i, settings: r } = e.sheetDataPlaylist;
                                if (0 === i.content.length) return it.F.ERROR;
                                return (
                                    yield new Promise((e) => {
                                        t.default([i], r, () => e());
                                    }),
                                    it.F.OK
                                );
                            } catch (e) {
                                return (t.error(e), it.F.ERROR);
                            }
                        }),
                        getAllPlaylistItems: (0, D.L3)(function* (t) {
                            let { batchSize: a } = t,
                                { playlist: i } = (0, _.M)(e),
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
                                (e.colorMajorMap = (0, D.wg)({})),
                                (e.duplicate = (0, D.wg)({})));
                        },
                    })),
                sI = D.gK.model('PlaylistItem', {
                    id: D.gK.union(D.gK.string, D.gK.number),
                    albumId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                    key: D.gK.string,
                    data: D.gK.maybeNull(Z.v),
                    loadingState: D.gK.enumeration(Object.values(F.G)),
                }),
                sL = (e) => {
                    var t, a;
                    let i = (null == (t = e.tracks) ? void 0 : t.length)
                        ? null == (a = e.tracks)
                            ? void 0
                            : a.map((e, t) =>
                                  ((e, t) => {
                                      let [a, i] = e.split(':');
                                      return (0, D.wg)({ id: a || '', albumId: i || '', key: ''.concat(a, '-').concat(t), data: null, loadingState: F.G.IDLE });
                                  })(e, t),
                              )
                        : [];
                    return { id: e.id, name: e.name, tracks: (0, D.wg)(i) };
                },
                sT = D.gK.model('PlaylistFiltersItem', { id: D.gK.string, name: D.gK.string, tracks: D.gK.array(sI) }),
                sh = D.gK
                    .compose(
                        D.gK.model('PlaylistPageFilters', {
                            items: D.gK.maybeNull(D.gK.array(sT)),
                            activeFilter: D.gK.maybe(D.gK.string),
                            activeFilterName: D.gK.maybeNull(D.gK.string),
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
                            getFilters: (0, D.L3)(function* () {
                                var a, i;
                                let { filtersResource: r, modelActionsLogger: l } = (0, D._$)(e),
                                    { sonataState: s, playlist: n } = (0, _.M)(e);
                                if (e.isLoading || !(null == (a = n.items) ? void 0 : a.length) || !n.isFiltersAvailable) return;
                                let o = n.items.map((e) => String((0, im.V)(e.id, e.albumId))) || [];
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield r.getTracksFilters({ trackIds: o });
                                    ((e.items = (0, D.wg)(
                                        ((e) => {
                                            let t = e.filters.map(sL);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === rt.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
                                        })(a),
                                    )),
                                        t.setActiveFilter(s.playlistFilter),
                                        t.getFilterName(s.playlistFilter || rt.Q.ALL));
                                    let l = null == (i = e.items) ? void 0 : i.find((t) => t.id === e.activeFilter);
                                    (l && (n.setItems(l.tracks), s.setUnloadedEntitiesData(sE(n.items))), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (l.error(t), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            getFilterName: (0, D.L3)(function* (t) {
                                let { filtersResource: a, modelActionsLogger: i } = (0, D._$)(e),
                                    { playlist: r } = (0, _.M)(e);
                                if (r.isFiltersAvailable)
                                    try {
                                        e.activeFilterName = (yield a.getFilterName({ filterId: t })).name;
                                    } catch (e) {
                                        i.error(e);
                                    }
                            }),
                            handleFilterClick(a) {
                                if (!(0, D._n)(e)) return;
                                let { sonataState: i, playlist: r } = (0, _.M)(e);
                                (t.setActiveFilter(a.id),
                                    t.getFilterName(a.id),
                                    r.setItems(e.activeFilter ? a.tracks : r.initialItems),
                                    i.setUnloadedEntitiesData(sE(r.items)));
                            },
                            setActiveFilter(t) {
                                t !== rt.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                            },
                            resetFilter() {
                                let { sonataState: a, playlist: i } = (0, _.M)(e);
                                (e.activeFilter && (i.setItems(i.initialItems), a.setUnloadedEntitiesData(sE(i.items))), t.reset());
                            },
                            reset() {
                                (e.destroyItems([e.items]), (e.loadingState = F.G.IDLE), (e.activeFilter = void 0), (e.activeFilterName = null));
                            },
                        };
                        return t;
                    }),
                sN = D.gK
                    .compose(
                        D.gK.model('PlaylistPageSearch', {
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            text: D.gK.string,
                            playlistTrackIds: D.gK.maybeNull(D.gK.array(D.gK.string)),
                            suggestedTrackIds: D.gK.maybeNull(D.gK.array(D.gK.string)),
                            additionTrackInProggress: D.gK.maybeNull(D.gK.string),
                            tracks: D.gK.maybeNull(D.gK.array(Z.v)),
                            isFocused: D.gK.optional(D.gK.boolean, !1),
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
                            getTracksMeta: (0, D.L3)(function* () {
                                let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                    i = [...(e.playlistTrackIds || [])].concat(e.suggestedTrackIds || []);
                                try {
                                    let a = yield t.getTracksMeta({ trackIds: i, removeDuplicates: !0, withProgress: !0 });
                                    ((e.tracks = (0, D.wg)(null == a ? void 0 : a.map((e) => (0, tl.v)(e)))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (e) {
                                    a.error(e);
                                }
                                return null;
                            }),
                            getTracks: (0, D.L3)(function* (a) {
                                let { uid: i, kind: r } = a,
                                    { searchPlaylistResource: l, modelActionsLogger: s } = (0, D._$)(e);
                                if (e.loadingState === F.G.PENDING || !e.hasText || !(0, D._n)(e)) return;
                                let { playlist: n } = (0, _.M)(e);
                                try {
                                    var o, d;
                                    let a;
                                    e.loadingState = F.G.PENDING;
                                    let { playlistTrackIds: s = [], suggestedTrackIds: g = [] } = yield l.getTrackIds({ uid: i, kind: r, part: e.text }),
                                        u =
                                            ((a = n.items),
                                            s.map((e) => {
                                                let t = a.find((t) => String(t.id) === e);
                                                return (null == t ? void 0 : t.albumId) ? ''.concat(e, ':').concat(t.albumId) : e;
                                            }));
                                    ((e.playlistTrackIds = (0, D.wg)(u)),
                                        (e.suggestedTrackIds = (0, D.wg)(g)),
                                        ((null == (o = e.playlistTrackIds) ? void 0 : o.length) || 0) + ((null == (d = e.suggestedTrackIds) ? void 0 : d.length) || 0) > 0
                                            ? t.getTracksMeta()
                                            : (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t),
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
                                        (e.suggestedTrackIds = (0, D.wg)(null == (a = e.suggestedTrackIds) ? void 0 : a.filter((t) => t !== e.additionTrackInProggress))),
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
                sA = D.gK
                    .compose(
                        D.gK.model('PlaylistPage', {
                            uuid: D.gK.maybeNull(D.gK.string),
                            meta: D.gK.maybeNull(lU),
                            items: D.gK.array(sI),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            similarPlaylists: D.gK.array(ex.I),
                            initialItems: D.gK.array(sI),
                            shouldShowTrailerOnboarding: D.gK.maybeNull(D.gK.boolean),
                            editorFeature: sK,
                            search: sN,
                            filters: sh,
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
                                return sE(e.items);
                            },
                            get artistRecommendationsPromoImpId() {
                                let { experiments: t } = (0, _.M)(e);
                                return er(t, O.z.WebNextPlaylistImpulseBanner);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, _.M)(e);
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
                                var l, s, n, o, d, g, u, c, m, y;
                                return {
                                    isAvailable: null == (l = e.meta) ? void 0 : l.isAvailable,
                                    id: e.meta.id,
                                    uid: null == (s = e.meta) ? void 0 : s.uid,
                                    uuid: e.meta.uuid,
                                    kind: null == (n = e.meta) ? void 0 : n.kind,
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
                                if (!(0, D._n)(e)) return !1;
                                let { ugcUploadCenter: t } = (0, _.M)(e);
                                return !!(
                                    (null == (p = e.meta) ? void 0 : p.canUserChange) &&
                                    (e.items.length > 1 || t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return e.items.map((e) => e.key);
                            },
                            get isFavouritePlaylist() {
                                var b;
                                return (null == (b = e.meta) ? void 0 : b.kind) === ra.j.LIKE;
                            },
                            get enableVariousAutoFlow() {
                                return !!e.filters.activeFilter;
                            },
                            get trackIds() {
                                return e.initialItems.map((e) => String((0, im.V)(e.id, e.albumId)));
                            },
                            get isRewind2024Playlist() {
                                var E;
                                return (null == (E = e.meta) ? void 0 : E.generatedPlaylistType) === 'rewind2024';
                            },
                            get areAllTracksUploaded() {
                                return e.items.every((e) => e.loadingState === F.G.RESOLVE);
                            },
                            get shouldShowEmptyBlock() {
                                var v, S;
                                if (!(0, D._n)(e)) return !1;
                                let { ugcUploadCenter: a } = (0, _.M)(e),
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
                                let { experiments: a } = (0, _.M)(e);
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
                                (0, D.LF)(
                                    e,
                                    (0, sp.mJ)(
                                        () => e.isFiltersAvailable,
                                        (t) => {
                                            t || e.filters.resetFilter();
                                        },
                                    ),
                                );
                            },
                            getTracksByRange: (0, D.L3)(function* (t) {
                                var a, i;
                                let { startIndex: r, endIndex: l } = t,
                                    { tracksResource: s, modelActionsLogger: n } = (0, D._$)(e);
                                if (!(null == (a = e.meta) ? void 0 : a.uid) || !(null == (i = e.meta) ? void 0 : i.kind)) return null;
                                ((r = Math.max(0, r)), (l = Math.min(l, e.items.length)));
                                let o = ((e, t) => {
                                    let { startIndex: a, endIndex: i } = t,
                                        r = [];
                                    for (let t = a; t <= i; t++) {
                                        var l, s;
                                        ((null == (l = e[t]) ? void 0 : l.loadingState) === F.G.IDLE || (null == (s = e[t]) ? void 0 : s.loadingState) === F.G.REJECT) &&
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
                                    let i = yield s.getTracksMeta({ trackIds: a, withProgress: !0 });
                                    o.forEach((t, a) => {
                                        let r = null == i ? void 0 : i[a];
                                        if (e.items[t] && r) {
                                            var l, s;
                                            e.items[t] = {
                                                id: r.id,
                                                albumId: (null == (s = r.albums) || null == (l = s[0]) ? void 0 : l.id) || null,
                                                key: ''.concat(r.id, '-').concat(t),
                                                data: (0, tl.v)(r),
                                                loadingState: F.G.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (t) {
                                    (n.error(t),
                                        o.forEach((t) => {
                                            let a = e.items[t];
                                            a && (a.loadingState = F.G.REJECT);
                                        }));
                                }
                                return null;
                            }),
                            updateData: (0, D.L3)(function* (a) {
                                var i, r;
                                if ((null == a ? void 0 : a.error) === 'not-found') return ((e.errorStatusCode = U.X1.NOT_FOUND), (e.loadingState = F.G.REJECT), null);
                                let { sonataState: l, playlist: s, experiments: n, user: o } = (0, _.M)(e);
                                return (
                                    (e.similarPlaylists = (0, D.wg)(null == (i = a.similarPlaylists) ? void 0 : i.map(sb))),
                                    (e.meta = (0, lP.Z)(a)),
                                    (null == (r = e.meta) ? void 0 : r.isOwnFavouritePlaylist) && (e.meta.visibility = o.settings.userMusicVisibility),
                                    (e.items = (0, D.wg)(
                                        a.tracks.map((e, t) => ({
                                            id: String(e.id),
                                            albumId: e.albumId || null,
                                            key: ''.concat(e.id, '-').concat(t),
                                            loadingState: F.G.IDLE,
                                        })),
                                    )),
                                    (e.initialItems = (0, sp.HO)(e.items)),
                                    l.setUnloadedEntitiesData(sE(e.items)),
                                    (null == n ? void 0 : n.checkExperiment(O.z.WebEditorsFeatures, 'on')) && s.editorFeature.getDuplicates(e.items),
                                    yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, D.L3)(function* (a) {
                                let { userId: i, playlistKind: r, resumeStream: l = !1, trackMetaType: s, preloadedPlaylist: n } = a,
                                    { usersResource: o, modelActionsLogger: d } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = n;
                                        if (
                                            (a || (a = yield o.getPlaylistWithTracksIds({ userId: i, playlistKind: r, resumeStream: l, trackMetaType: s })),
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
                            getPlaylistByUuid: (0, D.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: r = !1, resumeStream: l = !1, preloadedPlaylist: s } = a,
                                    { playlistResource: n, modelActionsLogger: o } = (0, D._$)(e);
                                if (((e.uuid = i), e.loadingState !== F.G.PENDING))
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = s;
                                        (a || (a = yield n.getPlaylist({ playlistUuid: i, resumeStream: l, richTracks: r })),
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
                            getSimilarEntities: (0, D.L3)(function* (t) {
                                let { playlistResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (!e.similarEntities.isLoading)
                                    try {
                                        e.similarEntities.loadingState = eb.PENDING;
                                        let i = yield a.getSimilarEntities(t);
                                        ((e.similarEntities.data = ep(i)), (e.similarEntities.loadingState = eb.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.similarEntities.loadingState = eb.REJECT));
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, D.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: r = !1, resumeStream: l = !1 } = a,
                                    { playlistResource: s, modelActionsLogger: n } = (0, D._$)(e);
                                e.uuid = i;
                                try {
                                    let a = yield s.getPlaylist({ playlistUuid: i, resumeStream: l, richTracks: r }),
                                        n = [];
                                    if (
                                        ((e.items = (0, D.wg)(
                                            a.tracks.map((t, a) => {
                                                var i, r;
                                                let l = String(t.id),
                                                    s = t.albumId || null;
                                                return l === (null == (i = e.items[a]) ? void 0 : i.id) && s === (null == (r = e.items[a]) ? void 0 : r.albumId)
                                                    ? e.items[a]
                                                    : (n.push(a),
                                                      { id: String(t.id), albumId: t.albumId || null, key: ''.concat(t.id, '-').concat(a), loadingState: F.G.IDLE });
                                            }),
                                        )),
                                        e.meta && ((e.meta.modified = a.modified), (e.meta.revision = a.revision), n.length))
                                    ) {
                                        let e = Math.min(...n),
                                            a = Math.max(...n);
                                        t.getTracksByRange({ startIndex: e, endIndex: a });
                                    }
                                    if ((e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE), (0, D._n)(e))) {
                                        let { sonataState: t } = (0, _.M)(e);
                                        t.setUnloadedEntitiesData(sE(e.items));
                                    }
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof U.GX &&
                                            (t.statusCode === U.X1.NOT_FOUND || t.statusCode === U.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = U.X1.NOT_FOUND),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                            }),
                            moveTrack(t, a) {
                                let i = (0, sp.HO)(e.items[t]);
                                if (
                                    !(t < 0) &&
                                    !(a < 0) &&
                                    !(t >= e.items.length) &&
                                    !(a >= e.items.length) &&
                                    i &&
                                    (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, D._n)(e))
                                ) {
                                    let { sonataState: t } = (0, _.M)(e);
                                    t.setUnloadedEntitiesData(sE(e.items));
                                }
                            },
                            removeTracksFromItems(t, a) {
                                if ((e.items.splice(t, a), (0, D._n)(e))) {
                                    let { sonataState: t } = (0, _.M)(e);
                                    t.setUnloadedEntitiesData(sE(e.items));
                                }
                            },
                            setItems(t) {
                                e.items = (0, D.wg)((0, sp.HO)(t));
                            },
                            setShouldShowTrailerOnboarding(t) {
                                e.shouldShowTrailerOnboarding = t;
                            },
                            reset() {
                                let { sonataState: t } = (0, _.M)(e);
                                (t.resetUnloadedEntitiesData(),
                                    (e.uuid = null),
                                    (e.loadingState = F.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.shouldShowTrailerOnboarding = null),
                                    (e.similarEntities.data = void 0),
                                    (e.similarEntities.loadingState = eb.IDLE),
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
            var sf = a(41427),
                sC = a(65208),
                sR = a(66564);
            let sk = D.gK.model('SearchFilter', { id: D.gK.string, displayName: D.gK.string });
            var sP = a(14661),
                sD = a(45923);
            let s_ = D.gK.model('Ugc'),
                sO = D.gK.compose(Z.v, s_).named('UgcTrack'),
                sw = D.gK.model('SearchAlbum', { type: D.gK.literal(sP.n.ALBUM), data: eC.J }),
                sG = D.gK.model('SearchPlaylist', { type: D.gK.literal(sP.n.PLAYLIST), data: ex.I }),
                sM = D.gK.model('SearchArtist', { type: D.gK.literal(sP.n.ARTIST), data: eR.P }),
                sU = D.gK.model('SearchUgcTrack', { type: D.gK.literal(sP.n.UGC_TRACK), data: sO }),
                sB = D.gK.model('SearchTrack', { type: D.gK.literal(sP.n.TRACK), data: Z.v }),
                sV = D.gK.model('SearchVibe', { type: D.gK.literal(sP.n.WAVE), data: eX.G }),
                sF = D.gK.model('SearchPodcast', { type: D.gK.literal(sP.n.PODCAST), data: eC.J }),
                sx = D.gK.model('SearchPodcastEpisode', { type: D.gK.literal(sP.n.PODCAST_EPISODE), data: Z.v }),
                sj = D.gK.model('SearchClip', { type: D.gK.literal(sP.n.CLIP), data: ah }),
                sW = D.gK.model('SearchConcert', { type: D.gK.literal(sP.n.CONCERT), data: am.a }),
                sX = D.gK.union(sw, sG, sM, sB, sU, sV, sF, sx, sj, sW),
                s$ = D.gK.model('SearchBestVibe', { type: D.gK.literal(sD.r.WAVE), data: eX.G }),
                sY = D.gK.model('SearchBestPlaylist', { type: D.gK.literal(sD.r.PLAYLIST), data: ex.I }),
                sJ = D.gK.model('SearchBestArtist', { type: D.gK.literal(sD.r.ARTIST), data: eR.P }),
                sq = D.gK.model('SearchBestPresave', { type: D.gK.literal(sD.r.UPCOMING), data: tk }),
                sH = D.gK.model('SearchBestAlbum', { type: D.gK.literal(sD.r.ALBUM), data: eC.J }),
                sz = D.gK.model('SearchBestRecentRelease', { type: D.gK.literal(sD.r.RECENT_RELEASE), data: eC.J }),
                sQ = D.gK.model('SearchBestConcert', { type: D.gK.literal(sD.r.CONCERT), data: am.a }),
                sZ = D.gK.model('SearchBestTrack', { type: D.gK.literal(sD.r.TRACK), data: Z.v }),
                s0 = D.gK.model('SearchBestPodcast', { type: D.gK.literal(sD.r.PODCAST), data: eC.J }),
                s1 = D.gK.model('SearchBestPodcastEpisode', { type: D.gK.literal(sD.r.PODCAST_EPISODE), data: Z.v }),
                s3 = D.gK.model('SearchBestOverview', { type: D.gK.literal(sD.r.OVERVIEW), data: iK }),
                s2 = D.gK.model('SearchBestNonMusic', { type: D.gK.literal(sD.r.NON_MUSIC), data: eC.J }),
                s5 = D.gK.model('SearchBestClip', { type: D.gK.literal(sD.r.CLIP), data: ah }),
                s8 = D.gK.model('SearchBestBookChapter', { type: D.gK.literal(sD.r.BOOK_CHAPTER), data: Z.v }),
                s6 = D.gK.union(sH, sz, s$, sJ, sQ, sZ, s0, s1, s3, s2, sq, sY, s5, s8),
                s4 = [sP.n.ARTIST, sP.n.ALBUM, sP.n.TRACK, sP.n.PLAYLIST, sP.n.WAVE, sP.n.PODCAST, sP.n.PODCAST_EPISODE],
                s9 = [sP.n.ALBUM, sP.n.ARTIST, sP.n.PLAYLIST, sP.n.TRACK, sP.n.UGC_TRACK, sP.n.WAVE, sP.n.PODCAST, sP.n.PODCAST_EPISODE, sP.n.CLIP, sP.n.CONCERT],
                s7 = (e) => {
                    var t, a;
                    return (0, D.wg)({ ...(0, tl.v)(e), artists: null != (a = null == e || null == (t = e.artists) ? void 0 : t.map(r6.d)) ? a : [] });
                };
            var ne = a(93512);
            let nt = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, D.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, ne.K)(a.agent),
                    });
                },
                na = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case sP.n.UGC_TRACK:
                            return { type: t, data: s7(e.track) };
                        case sP.n.TRACK:
                            return { type: t, data: (0, tl.v)(e.track) };
                        case sP.n.ARTIST:
                            return { type: t, data: (0, r6.d)(e.artist) };
                        case sP.n.PLAYLIST:
                            return { type: t, data: sb({ ...e.playlist, artists: [] }) };
                        case sP.n.ALBUM:
                            return { type: t, data: (0, eQ.p)(e.album) };
                        case sP.n.WAVE:
                            return { type: t, data: nt(e) };
                        case sP.n.PODCAST:
                            return { type: t, data: (0, eQ.p)(e.podcast) };
                        case sP.n.PODCAST_EPISODE:
                            return { type: t, data: (0, tl.v)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            (n || (n = {})).QUERY_TO_VIBE = 'q2v_wave';
            let ni = D.gK.compose(D.gK.model('SearchHistoryPage', { items: D.gK.array(sX) }), w.p, ee.X).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                nr = D.gK
                    .model('SearchHistory', { loadingState: D.gK.enumeration(Object.values(F.G)), shouldUpdateHistory: D.gK.optional(D.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === F.G.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, D.L3)(function* () {
                            if (!(0, D._n)(e)) return;
                            let { user: t } = (0, _.M)(e),
                                { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                nl = D.gK
                    .compose(
                        D.gK.model('SearchPage', {
                            searchCorrectedText: D.gK.maybeNull(D.gK.string),
                            searchRequestId: D.gK.optional(D.gK.string, ''),
                            bestResults: D.gK.array(s6),
                            historyPage: ni,
                            mixes: sC.Y,
                            landing: rx,
                            history: nr,
                            filters: D.gK.maybeNull(D.gK.array(sk)),
                            pagesLoader: (0, rJ.I)(sX, { useAppendMode: !0 }),
                            q2vResults: D.gK.array(eX.G),
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
                            getSearchResults: (0, D.L3)(function* (t) {
                                let { text: a, filter: i, page: r = 0 } = t;
                                if (r > 0 && !e.pagesLoader.isPageNeedToLoad(r)) return;
                                let { searchResource: l } = (0, D._$)(e),
                                    {
                                        settings: { isMobile: s },
                                        experiments: o,
                                        concerts: d,
                                    } = (0, _.M)(e),
                                    g = !o.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on'),
                                    u = o.checkExperiment(O.z.WebNextSearchConcerts, 'on'),
                                    c = i === sf.$.TOP,
                                    m = d.concertsLocationForRequest;
                                try {
                                    var y, p;
                                    ((e.loadingState = F.G.PENDING), e.pagesLoader.setPageState(r, F.G.PENDING));
                                    let t = yield l.getInstantMixedSearch({
                                        text: a,
                                        type: ((e, t) => {
                                            let { withClips: a, withConcerts: i, withWaves: r } = t,
                                                l = [...s9];
                                            return (
                                                e === sf.$.TOP && (l = l.filter((e) => e !== sP.n.UGC_TRACK)),
                                                a || (l = l.filter((e) => e !== sP.n.CLIP)),
                                                i || (l = l.filter((e) => e !== sP.n.CONCERT)),
                                                r || (l = l.filter((e) => e !== sP.n.WAVE)),
                                                l
                                            );
                                        })(i, { withClips: !s, withConcerts: u, withWaves: g }),
                                        filter: c ? void 0 : i,
                                        withLikesCount: !0,
                                        page: r,
                                        pageSize: sR.k,
                                        withBestResults: c,
                                        locations: m,
                                    });
                                    t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                    let o = [];
                                    (t.results &&
                                        t.results.length > 0 &&
                                        (o = t.results.map((e) => {
                                            switch (e.type) {
                                                case sP.n.ALBUM:
                                                    return { type: sP.n.ALBUM, data: (0, eQ.p)(e.album) };
                                                case sP.n.ARTIST:
                                                    return { type: sP.n.ARTIST, data: (0, r6.d)(e.artist) };
                                                case sP.n.PLAYLIST:
                                                    return { type: sP.n.PLAYLIST, data: sb({ ...e.playlist, artists: [] }) };
                                                case sP.n.UGC_TRACK:
                                                    return { type: sP.n.UGC_TRACK, data: s7(e.track) };
                                                case sP.n.TRACK:
                                                    return { type: sP.n.TRACK, data: (0, tl.v)(e.track) };
                                                case sP.n.WAVE:
                                                    return { type: sP.n.WAVE, data: nt(e) };
                                                case sP.n.PODCAST:
                                                    return { type: sP.n.PODCAST, data: (0, eQ.p)(e.podcast) };
                                                case sP.n.CLIP:
                                                    return { type: sP.n.CLIP, data: lc(e.clip) };
                                                case sP.n.PODCAST_EPISODE:
                                                    return { type: sP.n.PODCAST_EPISODE, data: (0, tl.v)(e.podcast_episode) };
                                                case sP.n.CONCERT:
                                                    return { type: sP.n.CONCERT, data: (0, tr.h)(e.concert.concert, e.concert.minPrice) };
                                            }
                                        })),
                                        (e.searchRequestId = t.searchRequestId),
                                        t.bestResults &&
                                            t.bestResults.length > 0 &&
                                            (e.bestResults = (0, D.wg)(
                                                t.bestResults
                                                    .map((e) => {
                                                        switch (e.type) {
                                                            case sD.r.ALBUM:
                                                                return {
                                                                    type: sD.r.ALBUM,
                                                                    data: (0, es.s)({
                                                                        album: e.best_result_album.album,
                                                                        artists: e.best_result_album.artists,
                                                                        trailer: e.best_result_album.trailer,
                                                                    }),
                                                                };
                                                            case sD.r.PLAYLIST:
                                                                return {
                                                                    type: sD.r.PLAYLIST,
                                                                    data: (0, eg.b)({
                                                                        playlist: e.best_result_playlist.playlist,
                                                                        likesCount: e.best_result_playlist.likesCount,
                                                                        tracksCount: e.best_result_playlist.trackCount,
                                                                        trailer: e.best_result_playlist.trailer,
                                                                    }),
                                                                };
                                                            case sD.r.RECENT_RELEASE:
                                                                return {
                                                                    type: sD.r.RECENT_RELEASE,
                                                                    data: (0, es.s)({
                                                                        album: e.best_result_recent_release.album,
                                                                        artists: e.best_result_recent_release.artists,
                                                                        trailer: e.best_result_recent_release.trailer,
                                                                    }),
                                                                };
                                                            case sD.r.WAVE:
                                                                return { type: sD.r.WAVE, data: (0, tQ.e)(e.best_result_wave) };
                                                            case sD.r.ARTIST:
                                                                return {
                                                                    type: sD.r.ARTIST,
                                                                    data: (0, eo.a)({
                                                                        artist: e.best_result_artist.artist,
                                                                        trailer: e.best_result_artist.trailer,
                                                                        likesCount: e.best_result_artist.likesCount,
                                                                    }),
                                                                };
                                                            case sD.r.UPCOMING:
                                                                return { type: sD.r.UPCOMING, data: tu(e.best_result_upcoming) };
                                                            case sD.r.CONCERT:
                                                                return { type: sD.r.CONCERT, data: r1(e.best_result_concert) };
                                                            case sD.r.PODCAST:
                                                                return {
                                                                    type: sD.r.PODCAST,
                                                                    data: (0, es.s)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                                };
                                                            case sD.r.PODCAST_EPISODE:
                                                                return { type: sD.r.PODCAST_EPISODE, data: (0, tl.v)(e.best_result_podcast_episode) };
                                                            case sD.r.OVERVIEW:
                                                                return { type: sD.r.OVERVIEW, data: tO(e.best_result_overview) };
                                                            case sD.r.NON_MUSIC:
                                                                return {
                                                                    type: sD.r.NON_MUSIC,
                                                                    data: (0, es.s)({
                                                                        album: e.best_result_non_music.album,
                                                                        artists: e.best_result_non_music.artists,
                                                                        releaseYear: e.best_result_non_music.releaseYear,
                                                                    }),
                                                                };
                                                            case sD.r.TRACK:
                                                                return { type: sD.r.TRACK, data: (0, tl.v)(e.best_result_track) };
                                                            case sD.r.CLIP:
                                                                return { type: sD.r.CLIP, data: lc(e.best_result_clip) };
                                                            case sD.r.BOOK_CHAPTER:
                                                                return { type: sD.r.BOOK_CHAPTER, data: (0, tl.v)(e.best_result_book_chapter) };
                                                        }
                                                    })
                                                    .filter((e) => e),
                                            )),
                                        (e.q2vResults = (0, D.wg)(
                                            (null != (y = t.q2vResults) ? y : []).map((e) => {
                                                let { wave: t, agent: a } = e[n.QUERY_TO_VIBE];
                                                return (0, em.l)(t, a);
                                            }),
                                        )),
                                        t.filters && t.filters.length > 0 && (e.filters = (0, D.wg)(t.filters)),
                                        e.pagesLoader.setItems(o, {
                                            page: r,
                                            pager: { page: r, perPage: null != (p = t.perPage) ? p : sR.k, total: 0, lastPage: !!c || t.lastPage },
                                        }),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    ((e.loadingState = F.G.REJECT), e.pagesLoader.setItems(null, { responseStatus: it.F.ERROR, page: r }));
                                }
                            }),
                            getHistory: (0, D.L3)(function* (t) {
                                let { userId: a } = t;
                                if (e.historyPage.loadingState === F.G.PENDING) return;
                                let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e);
                                try {
                                    e.historyPage.loadingState = F.G.PENDING;
                                    let t = yield i.getSearchHistory({ userId: a, supportedTypes: s4 });
                                    ((e.historyPage.items = (0, D.wg)(t.map(na).filter((e) => e))), (e.historyPage.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), (e.historyPage.loadingState = F.G.REJECT));
                                }
                            }),
                            clearHistory: (0, D.L3)(function* (t) {
                                let { userId: a } = t,
                                    { usersResource: i, modelActionsLogger: r } = (0, D._$)(e);
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
                            sendFeedback: (0, D.L3)(function* (t) {
                                let { searchResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                            sendQ2vSuggestionFeedbacks: (0, D.L3)(function* () {
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
                                let { searchResource: l, modelActionsLogger: s } = (0, D._$)(e);
                                try {
                                    (yield l.sendQ2vSuggestionsFeedback({
                                        events: r.map((e) => {
                                            let { feedback: t } = e;
                                            return t;
                                        }),
                                    }),
                                        i(r, !0));
                                } catch (e) {
                                    (i(r, !1), s.error('[Search] Q2V suggestions feedback send error', { error: e }));
                                }
                            }),
                        };
                    }),
                ns = D.gK
                    .compose(
                        D.gK.model({
                            meta: D.gK.maybeNull(Z.v),
                            similarTracks: D.gK.maybeNull(D.gK.array(Z.v)),
                            prevEntityId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            trackId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            albumId: D.gK.maybeNull(D.gK.number),
                            isTrackPage: D.gK.optional(D.gK.boolean, !1),
                            withAnimation: D.gK.boolean,
                            shouldSendEventOnPlusButtonShowed: D.gK.boolean,
                        }),
                        se.q,
                        ee.X,
                    )
                    .volatile(() => ({ lastTrackInfoTrack: void 0, lastTrackInfoSimilarTracks: void 0 }))
                    .views((e) => ({
                        get shouldReloadMeta() {
                            var t;
                            let a = e.trackId && e.albumId && (0, im.V)(e.trackId, e.albumId);
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
                                (0, D._n)(e) &&
                                    ((e.lastTrackInfoTrack === t.track && e.lastTrackInfoSimilarTracks === t.similarTracks && e.isResolved) ||
                                        ((e.meta = (0, tl.v)(t.track)),
                                        (e.similarTracks = (0, D.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, tl.v)(e)))),
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
                            getData: (0, D.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (!e.trackId || e.loadingState === F.G.PENDING || e.shouldReloadMeta) return null;
                                try {
                                    var r;
                                    ((e.loadingState = F.G.PENDING), (e.meta = null));
                                    let i = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                    if (!i) return ((e.loadingState = F.G.REJECT), null);
                                    ((e.meta = (0, tl.v)(i.track)),
                                        (e.similarTracks = (0, D.wg)(i.similarTracks.map((e) => (0, tl.v)(e)))),
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
            var nn = a(38147),
                no = a(26208);
            let nd = D.gK
                    .model('BaseAdvertBanner', { type: D.gK.enumeration(Object.values(nn.h)), noAds: D.gK.boolean, hasError: D.gK.boolean, isShowBanner: D.gK.boolean })
                    .views((e) => ({
                        get isBaseVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, _.M)(e);
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
                            ((e.type = nn.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1));
                        },
                    })),
                ng = nd
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, experiments: a } = (0, _.M)(e);
                                if (
                                    !a.checkExperiment(O.z.WebNextBrandedPlaylistsAxe, 'on') ||
                                    T.NN ||
                                    e.noAds ||
                                    e.hasError ||
                                    !e.isShowBanner ||
                                    (e.type !== nn.h.EMPTY && e.type !== nn.h.BRANDING) ||
                                    t.isAdvertDisabled(no.f.AXE_ENTITY_BRANDING)
                                )
                                    return !1;
                                return !0;
                            },
                        },
                    }))
                    .named('BrandedEntityAxeBanner'),
                nu = nd
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, settings: a, user: i } = (0, _.M)(e);
                                if (!e.noAds && !e.hasError && e.type === nn.h.BRANDING) return !a.isMobile;
                                if (e.noAds || e.hasError || e.type !== nn.h.BRANDING || t.isAdvertDisabled(no.f.PLAYLIST_BRANDING)) return !1;
                                return !i.hasPlus && !a.isMobile;
                            },
                        },
                    }))
                    .named('BrandedPlaylistBanner');
            var nc = a(28870);
            let nm = D.gK.model('BrandedPlayerDisclaimer', { advertiser: D.gK.string, token: D.gK.string }),
                ny = D.gK.model('BrandedPlayerModal', {
                    imageUri: D.gK.maybeNull(D.gK.string),
                    content: D.gK.string,
                    primaryHref: D.gK.string,
                    shouldShowSecondaryButton: D.gK.boolean,
                    secondaryText: D.gK.maybeNull(D.gK.string),
                });
            var np = a(71774);
            let nb = D.gK
                    .compose(
                        D.gK.model('BrandedPlayerBanner', {
                            payload: D.gK.maybeNull(D.gK.model({ thumb: nc.K, modal: D.gK.maybeNull(ny), disclaimer: D.gK.maybeNull(nm) })),
                            modal: se.q,
                        }),
                        nd,
                    )
                    .views((e) => ({
                        get isVisible() {
                            let { advert: t, settings: a, user: i } = (0, _.M)(e);
                            if (e.noAds || e.hasError || t.isAdvertDisabled(no.f.PLAYER_BRANDING)) return !1;
                            return !i.hasPlus && !a.isMobile;
                        },
                    }))
                    .actions((e) => ({
                        setPayload: (t) => {
                            let { settings: a } = (0, _.M)(e);
                            (a.setCustomPlayerThumb(np.T.BRANDED), (e.payload = (0, D.wg)(t)));
                        },
                    })),
                nE = nd
                    .views((e) => ({
                        get isVisible() {
                            if (!e.isBaseVisible) return !1;
                            let {
                                    advert: t,
                                    advertBanners: {
                                        banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: i },
                                    },
                                } = (0, _.M)(e),
                                r = t.isAdvertDisabled(no.f.SIDE_BANNER);
                            return !a.isVisible && !i.isVisible && !r;
                        },
                    }))
                    .named('SideAdvertBanner'),
                nv = nd
                    .views((e) => {
                        let t = {
                            get isTouchTopAdvertEnabled() {
                                let { advert: t, settings: a } = (0, _.M)(e),
                                    i = t.isAdvertDisabled(no.f.TOUCH_BANNER);
                                return a.isMobile && !i;
                            },
                            get isVisible() {
                                var a;
                                if (!e.isBaseVisible) return !1;
                                let {
                                        advert: i,
                                        settings: r,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: l, brandedEntityAxeBanner: s },
                                        },
                                    } = (0, _.M)(e),
                                    n = i.isAdvertDisabled(no.f.TOP_BANNER),
                                    o = l.isVisible || s.isVisible;
                                return !(null == (a = r.browserInfo) ? void 0 : a.isTouch) && !t.isTouchTopAdvertEnabled && !o && !n;
                            },
                        };
                        return t;
                    })
                    .named('TopAdvertBanner'),
                nS = D.gK
                    .model('AdvertBanners', {
                        banners: D.gK.model({
                            topAdvertBanner: nv,
                            sideAdvertBanner: nE,
                            brandedPlaylistBanner: nu,
                            brandedPlayerBanner: nb,
                            brandedEntityAxeBanner: ng,
                        }),
                    })
                    .views((e) => {
                        let t = {
                            get values() {
                                return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                            },
                            get hasBranding() {
                                return t.values.some((e) => e.type === nn.h.BRANDING);
                            },
                            isVisible(e) {
                                if (e === nn.h.EMPTY) return !0;
                                let a = t.values.filter((e) => e.type !== nn.h.EMPTY);
                                return e === nn.h.DIRECT ? a.every((e) => e.type === nn.h.DIRECT) : e !== nn.h.CREATIVE || a.every((e) => e.type !== nn.h.BRANDING);
                            },
                        };
                        return t;
                    });
            var nK = a(2258);
            !(function (e) {
                ((e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen'));
            })(o || (o = {}));
            let nI = (e) => {
                    let { text: t, textColor: a, color: i, action: r } = e;
                    return (0, D.wg)({
                        text: t || null,
                        textColor: a || null,
                        color: i || null,
                        action:
                            r &&
                            ((e) => {
                                let { id: t, type: a, value: i, communicationId: r } = e;
                                return (0, D.wg)({ id: t || null, type: a || null, value: i || null, communicationId: r || null });
                            })(r),
                    });
                },
                nL = (e) => {
                    let { bgUrl: t, bgColor: a, title: i, text: r, titleColor: l, textColor: s, imageUrl: n, buttons: o, advDisclaimer: d } = e;
                    return (0, D.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: i || null,
                        text: r || null,
                        titleColor: l || null,
                        textColor: s || null,
                        imageUrl: n || null,
                        buttons: o.filter((e) => e.text).map(nI),
                        advDisclaimer: d || null,
                    });
                },
                nT = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: i,
                        bgUrl: r,
                        bgUrlLarge: l,
                        bgColor: s,
                        logoUrl: n,
                        title: o,
                        text: d,
                        titleColor: g,
                        textColor: u,
                        buttons: c,
                        disclaimer: m,
                        disclaimerColor: y,
                        advDisclaimer: p,
                    } = e;
                    return (0, D.wg)({
                        isModal: (0, h.G4)(t),
                        withShadow: (0, h.G4)(a),
                        closeActionId: i || null,
                        bgUrl: r || null,
                        bgUrlLarge: l || null,
                        bgColor: s || null,
                        logoUrl: n || null,
                        title: o || null,
                        text: d || null,
                        titleColor: g || null,
                        textColor: u || null,
                        buttons: c.filter((e) => e.text).map(nI),
                        disclaimer: m || null,
                        disclaimerColor: y || null,
                        advDisclaimer: p || null,
                    });
                };
            var nh = a(30283),
                nN = a(3474);
            let nA = D.gK.model('CommunicationModalContentModel', {
                    isModal: D.gK.boolean,
                    withShadow: D.gK.boolean,
                    closeActionId: D.gK.maybeNull(D.gK.string),
                    bgUrl: D.gK.maybeNull(D.gK.string),
                    bgUrlLarge: D.gK.maybeNull(D.gK.string),
                    bgColor: D.gK.maybeNull(D.gK.string),
                    logoUrl: D.gK.maybeNull(D.gK.string),
                    title: D.gK.maybeNull(D.gK.string),
                    titleColor: D.gK.maybeNull(D.gK.string),
                    text: D.gK.maybeNull(D.gK.string),
                    textColor: D.gK.maybeNull(D.gK.string),
                    buttons: D.gK.array(nN._),
                    disclaimer: D.gK.maybeNull(D.gK.string),
                    disclaimerColor: D.gK.maybeNull(D.gK.string),
                    advDisclaimer: D.gK.maybeNull(D.gK.string),
                }),
                nf = D.gK.model('CommunicationModal', {
                    anchorId: D.gK.enumeration(Object.values(nK.v)),
                    screenId: D.gK.string,
                    content: nA,
                    feedbackToken: D.gK.maybeNull(D.gK.string),
                }),
                nC = se.q
                    .props({ anchorId: D.gK.maybe(D.gK.enumeration(Object.values(nK.v))), list: D.gK.array(nf) })
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
                nR = D.gK.model('CommunicationList', { barBelow: nh.t, modal: nC }),
                nk = D.gK
                    .model('Communication', { loadingState: D.gK.enumeration(Object.values(F.G)), list: D.gK.maybe(nR), errorStatusCode: D.gK.maybeNull(D.gK.number) })
                    .volatile(() => ({ isRecommendationsNotificationDismissed: !1 }))
                    .views((e) => ({
                        get isReadyToShowModal() {
                            var t;
                            let { paywall: a } = (0, _.M)(e),
                                i = null == (t = e.list) ? void 0 : t.modal;
                            return !!((null == i ? void 0 : i.modalItem) && !i.wasOpened && a.isPassed);
                        },
                        get isReadyToShowBarBelow() {
                            var a;
                            let { paywall: t } = (0, _.M)(e),
                                i = null == (a = e.list) ? void 0 : a.barBelow;
                            return !!((null == i ? void 0 : i.barBelowItem) && !i.wasShown && t.isPassed);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            dismissRecommendationsNotification() {
                                e.isRecommendationsNotificationDismissed = !0;
                            },
                            getData: (0, D.L3)(function* () {
                                let { dynamicPagesResource: t, modelActionsLogger: a } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING && e.loadingState !== F.G.RESOLVE)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let a = yield t.getTriggersV2({ anchorIds: Object.values(nK.v) });
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
                                                                                let t = 'data' in e ? nL(e.data) : nL(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : nK.v.ON_START_BAR_BELOW;
                                                                                return (0, D.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                                case o.FULLSCREEN:
                                                                    return void e.triggers.forEach((e) => {
                                                                        a.push(
                                                                            ((e) => {
                                                                                let t = 'data' in e ? nT(e.data) : nT(e.div),
                                                                                    a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                    i = 'anchorId' in e ? e.anchorId : nK.v.ON_START_FULLSCREEN;
                                                                                return (0, D.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                            })(e),
                                                                        );
                                                                    });
                                                            }
                                                        }),
                                                        (0, D.wg)({ barBelow: { list: t }, modal: { list: a } })
                                                    );
                                                })(a)),
                                            e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE),
                                            !e.list)
                                        )
                                            return;
                                        let { barBelow: i, modal: r } = e.list;
                                        (i.setAnchorId(nK.v.ON_START_BAR_BELOW), r.setAnchorId(nK.v.ON_START_FULLSCREEN));
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
                            shown: (0, D.L3)(function* (t, a, i) {
                                let { dynamicPagesResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                try {
                                    i && (yield r.shownV2({ anchorIds: [t], feedbackToken: i }));
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                            action: (0, D.L3)(function* (t, a, i, r) {
                                let { dynamicPagesResource: l, modelActionsLogger: s } = (0, D._$)(e);
                                try {
                                    r && (yield l.actionV2({ anchorIds: [t], actionId: i, feedbackToken: r }));
                                } catch (e) {
                                    s.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var nP = a(18593),
                nD = a(25918);
            let n_ = D.gK
                    .model('ContinueListen', {
                        track: D.gK.maybe(Z.v),
                        trackIndex: D.gK.maybe(D.gK.number),
                        contextType: D.gK.maybeNull(D.gK.enumeration(Object.values(nP.K))),
                        contextId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                        albumDuration: D.gK.maybe(D.gK.number),
                        albumStreamProgress: D.gK.optional(nD.B, { endPositionSec: 0 }),
                        trackTempStreamProgress: D.gK.optional(nD.B, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: i, track: r, isDefaultTrack: l } = t;
                            (l && e.track) || ((e.contextType = a), (e.contextId = i), (e.track = (0, D.wg)((0, sp.HO)(r))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                nO = D.gK
                    .model({ modal: se.q })
                    .views((e) => ({
                        shouldShow() {
                            var t;
                            let { user: a, settings: i } = (0, _.M)(e),
                                { sessionStorage: r } = (0, D._$)(e);
                            if (!a.hasPlus || !(null == (t = i.browserInfo) ? void 0 : t.isMobile)) return !1;
                            let l = r.get(l6.c.DownloadMobileApp);
                            return null == l || !l.shown;
                        },
                    }))
                    .actions((e) => ({
                        openModal() {
                            var t;
                            let { localStorage: a, sessionStorage: i } = (0, D._$)(e);
                            if (!(null == (t = a.get(l6.c.DownloadMobileApp)) ? void 0 : t.shown)) {
                                (e.modal.open(), a.set(l6.c.DownloadMobileApp, { shown: !0 }), i.set(l6.c.DownloadMobileApp, { shown: !0 }));
                                return;
                            }
                            (setTimeout(() => {
                                e.modal.open();
                            }, 5e3),
                                i.set(l6.c.DownloadMobileApp, { shown: !0 }));
                        },
                    }));
            var nw = a(11028),
                nG = a(64184);
            let nM = D.gK.model('FamilyInviteInfoModel', { name: D.gK.string, avatarUrl: D.gK.string }),
                nU = D.gK
                    .model('FamilyInviteModel', {
                        info: D.gK.model({ loadingState: D.gK.enumeration(Object.values(F.G)), data: D.gK.maybeNull(nM) }),
                        acceptanceLoadingState: D.gK.enumeration(Object.values(F.G)),
                        isSuccess: D.gK.maybe(D.gK.boolean),
                        modal: se.q,
                        step: D.gK.enumeration('Step', Object.values(nG._)),
                        inviteId: D.gK.maybeNull(D.gK.string),
                        error: D.gK.maybeNull(D.gK.enumeration(Object.values(nw.C))),
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
                            retry: (0, D.L3)(function* () {
                                (t.setError(null), t.toggleStepInfo(), e.info.loadingState !== F.G.RESOLVE && (yield t.getInviteInfo()));
                            }),
                            getInviteInfo: (0, D.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (e.inviteId && e.info.loadingState !== F.G.PENDING)
                                    try {
                                        e.info.loadingState = F.G.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            r = yield a.getInviteInfo(i);
                                        if (!r.hasPlus) {
                                            (t.setError(nw.C.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = F.G.RESOLVE));
                                            return;
                                        }
                                        ((e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, D.wg)({ name: t, avatarUrl: a });
                                        })(r)),
                                            (e.info.loadingState = F.G.RESOLVE));
                                    } catch (a) {
                                        if (((e.info.loadingState = F.G.REJECT), i.error(a), a instanceof U.GX && a.statusCode === U.X1.BAD_REQUEST))
                                            return void t.setError(nw.C.INVITATION_IS_INVALID);
                                        t.setError(nw.C.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, D.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== F.G.PENDING)
                                    try {
                                        e.acceptanceLoadingState = F.G.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        (yield a.acceptInvite(i), (e.acceptanceLoadingState = F.G.RESOLVE), t.toggleStateSuccessTrue());
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = F.G.REJECT), i.error(a), a instanceof U.GX && a.statusCode === U.X1.BAD_REQUEST))
                                            return void t.setError(nw.C.INVITATION_IS_INVALID);
                                        t.setError(nw.C.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = nG._.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = nG._.SUCCESS;
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
                                    (e.step = nG._.INFO),
                                    (e.isSuccess = !1));
                            },
                        };
                        return t;
                    }),
                nB = (e) => {
                    switch (e.type) {
                        case el._.MIX_CARD_ITEM:
                            return (0, D.wg)({ type: el._.MIX_CARD_ITEM, data: t2(e.data) });
                        case el._.NON_MUSIC_ALBUM_ITEM:
                            return tp({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case el._.ALBUM_ITEM:
                            return en(e.data.album, e.data.artists, e.data.trailer);
                        case el._.CHART_ALBUM_ITEM:
                            let t, a, i, r;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (r = e.data.trailer),
                                { type: el._.CHART_ALBUM_ITEM, data: (0, es.s)({ album: t, chart: a, likesCount: i, trailer: r }) }
                            );
                        case el._.ARTIST_ITEM:
                            return ed(e.data.artist, e.data.trailer);
                        case el._.PLAYLIST_ITEM:
                            return ec(e.data.playlist, e.data.trailer);
                        case el._.PERSONAL_PLAYLIST_ITEM:
                            return ae(e);
                        case el._.LIKED_PLAYLIST_ITEM:
                            return eu({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                nV = D.gK.model('LandingChartAlbumItem', { type: D.gK.literal(el._.CHART_ALBUM_ITEM), data: eC.J }),
                nF = D.gK.model('LandingMixCardItemModel', { type: D.gK.literal(el._.MIX_CARD_ITEM), data: iF }),
                nx = D.gK.union(eV, eF, eW, i9, ej, nV, aJ, nF),
                nj = D.gK
                    .compose(D.gK.model('LandingBlockEntities', { title: D.gK.maybeNull(D.gK.string), items: D.gK.array(nx) }), ee.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === F.G.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, D.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    ((e.title = t.title), (e.items = (0, D.wg)(t.items.map(nB))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (r.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE), (e.items = (0, D.wg)([])), (e.title = null));
                        },
                    }));
            var nW = a(70030);
            let nX = rF
                    .props({
                        id: D.gK.optional(D.gK.string, ''),
                        title: D.gK.optional(D.gK.string, ''),
                        skeletonMeta: D.gK.maybe(D.gK.frozen()),
                        preloadedBlocksMeta: D.gK.maybe(D.gK.frozen()),
                    })
                    .views((e) => {
                        let t = {
                            get isLoaded() {
                                return e.loadingState === F.G.RESOLVE || e.loadingState === F.G.REJECT;
                            },
                            get isSkeletonCreated() {
                                let { landingSdk: t } = (0, D._$)(e);
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
                        let { landingSdk: t, modelActionsLogger: a } = (0, D._$)(e),
                            i = {
                                loadAndCreateSkeleton: (0, D.L3)(function* (i) {
                                    let { preloadBlocksCount: r, skeletonData: l } = i;
                                    if (e.loadingState !== F.G.PENDING) {
                                        e.loadingState = F.G.PENDING;
                                        try {
                                            var s;
                                            if ((yield t.loadAndCreateSkeleton({ data: l }), null == (s = t.skeleton) ? void 0 : s.data.meta)) {
                                                let { blocks: a, id: i, title: r } = t.skeleton.data.meta,
                                                    l = tW(a);
                                                ((e.id = i),
                                                    (e.title = r),
                                                    (e.meta = (0, D.wg)(l.meta)),
                                                    (e.upperBlocks = (0, D.wg)(l.upperBlocks)),
                                                    (e.tabs.data = (0, D.wg)(l.tabs.data)),
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
                                    var a, r, l, s;
                                    let n = (e) => {
                                        var a, r;
                                        if ((0, ta.Q)(e)) {
                                            null == (r = e.data) || r.blocks.forEach(n);
                                            return;
                                        }
                                        let l = null == (a = t.skeleton) ? void 0 : a.getNodeById(e.id);
                                        l && i.handleSdkBlockUpdate(e, l, l.state.loadingStatus.value);
                                    };
                                    (null == (a = e.upperBlocks) || a.forEach(n), null == (r = e.tabs.data) || r.forEach((e) => e.blocks.forEach(n)));
                                    let o = null == (s = t.skeleton) || null == (l = s.root) ? void 0 : l.getTabsBlock();
                                    o && i.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                },
                                handleSdkBlockUpdate(e, t, a) {
                                    switch (a) {
                                        case nW.rl.IDLE:
                                            e.loadingState = eb.IDLE;
                                            break;
                                        case nW.rl.PENDING:
                                            e.loadingState = eb.PENDING;
                                            break;
                                        case nW.rl.REJECT:
                                            e.loadingState = eb.REJECT;
                                            break;
                                        case nW.rl.RESOLVE:
                                            ((e.loadingState = eb.RESOLVE),
                                                (e.data = ((e, t) => {
                                                    if (t.data.meta)
                                                        switch (t.data.type) {
                                                            case eE.t.LIKES_AND_HISTORY:
                                                                return t3(t.data.meta);
                                                            case eE.t.CHART_TRACKS:
                                                                return to(t.data.meta);
                                                            case eE.t.NEW_RELEASES:
                                                            case eE.t.EDITORIAL_NEW_RELEASES:
                                                                return t4(t.data.meta);
                                                            case eE.t.NEW_PLAYLISTS:
                                                            case eE.t.EDITORIAL_COMPILATION:
                                                            case eE.t.RECOMMENDED_PLAYLISTS:
                                                            case eE.t.META_TAG_POPULAR_PLAYLISTS:
                                                            case eE.t.META_TAG_NEW_ALBUMS:
                                                            case eE.t.META_TAG_PLAYLISTS:
                                                            case eE.t.MICRO_GENRE_ALBUMS:
                                                            case eE.t.META_TAG_ALBUMS:
                                                            case eE.t.ARTIST_PLAYLISTS:
                                                            case eE.t.ARTIST_ALBUMS:
                                                            case eE.t.ARTIST_COMPILATIONS:
                                                            case eE.t.ARTIST_STUDIO_ALBUMS:
                                                            case eE.t.ARTIST_SIMILAR_ENTITIES:
                                                            case eE.t.COLLECTION_SIMILAR_ENTITIES:
                                                                return ep(t.data.meta);
                                                            case eE.t.WAVES:
                                                            case eE.t.SETS_BY_WAVES:
                                                                return ao(t.data.meta);
                                                            case eE.t.WAVES_AGENT:
                                                            case eE.t.SETS_BY_WAVES_AGENT:
                                                                return an(t.data.meta);
                                                            case eE.t.EDITORIAL_WAVES:
                                                            case eE.t.META_TAG_WAVE:
                                                            case eE.t.MICRO_GENRE_WAVE:
                                                            case eE.t.MICRO_GENRE_SIMILAR_WAVE:
                                                            case eE.t.META_TAG_SIMILAR_WAVE:
                                                                return tZ(t.data.meta);
                                                            case eE.t.EDITORIAL_WAVES_AGENT:
                                                            case eE.t.META_TAG_WAVE_AGENT:
                                                            case eE.t.MICRO_GENRE_WAVE_AGENT:
                                                            case eE.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                                            case eE.t.META_TAG_SIMILAR_WAVE_AGENT:
                                                                return tz(t.data.meta);
                                                            case eE.t.ITEM_LIST:
                                                                return t1(t.data.meta);
                                                            case eE.t.MIXES_GRID:
                                                            case eE.t.MIXES_MUSIC:
                                                                return t5(t.data.meta);
                                                            case eE.t.NEUROMUSIC:
                                                                return t6(t.data.meta);
                                                            case eE.t.CONCERTS_TOP:
                                                            case eE.t.CONCERTS_PERSONAL:
                                                            case eE.t.EDITORIAL_CONCERTS:
                                                            case eE.t.VIEWED_CONCERTS:
                                                                return t$(t.data.meta);
                                                            case eE.t.OPEN_PLAYLIST:
                                                            case eE.t.SMART_OPEN_PLAYLIST:
                                                            case eE.t.NON_MUSIC_OPEN_PLAYLIST:
                                                                return t7(t.data.meta, e.id);
                                                            case eE.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                                                return tv(t.data.meta);
                                                            case eE.t.DONATIONS:
                                                                return tq(t.data.meta);
                                                            case eE.t.PERSONAL_PLAYLISTS:
                                                            case eE.t.REWIND_PLAYLISTS:
                                                                return at(t.data.meta);
                                                            case eE.t.Q2V_SUGGESTIONS:
                                                                return ai(t.data.meta);
                                                            case eE.t.PERSONAL_ARTISTS:
                                                            case eE.t.NEW_STARS_ARTISTS:
                                                            case eE.t.EDITORIAL_ARTISTS:
                                                            case eE.t.META_TAG_POPULAR_ARTISTS:
                                                            case eE.t.MICRO_GENRE_ARTISTS:
                                                            case eE.t.MICRO_GENRE_TOP_ARTISTS:
                                                            case eE.t.META_TAG_ARTISTS:
                                                            case eE.t.SIMILAR_ARTISTS:
                                                                return tH(t.data.meta);
                                                            case eE.t.IN_STYLE:
                                                                return t0(t.data.meta);
                                                            case eE.t.WIZARD:
                                                                return ad(t.data.meta);
                                                            case eE.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                                            case eE.t.NON_MUSIC_CATEGORY:
                                                                return t9(t.data.meta);
                                                            case eE.t.SPECIAL:
                                                                return al(t.data.meta);
                                                            case eE.t.ALBUM_PROMO:
                                                            case eE.t.SIMPLE_ALBUM_PROMO:
                                                                return aa(t.data.meta);
                                                            case eE.t.ARTIST_RECOMMENDATIONS_PROMO:
                                                            case eE.t.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO:
                                                                return eT(t.data.meta);
                                                            default:
                                                                return;
                                                        }
                                                })(e, t)));
                                    }
                                },
                                handleSdkTabsBlockUpdate(t, a) {
                                    switch (a) {
                                        case nW.rl.IDLE:
                                            e.tabs.loadingState = F.G.IDLE;
                                            break;
                                        case nW.rl.PENDING:
                                            e.tabs.loadingState = F.G.PENDING;
                                            break;
                                        case nW.rl.REJECT:
                                            e.tabs.loadingState = F.G.REJECT;
                                            break;
                                        case nW.rl.RESOLVE: {
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
                n$ = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url }),
                nY = D.gK.model('ArtistLink', { imgUrl: D.gK.maybeNull(D.gK.string), title: D.gK.maybeNull(D.gK.string), url: D.gK.maybeNull(D.gK.string) }),
                nJ = D.gK
                    .compose(
                        D.gK.model('ArtistAboutModal', {
                            modal: se.q,
                            artist: D.gK.maybeNull(eR.P),
                            artistType: D.gK.maybeNull(D.gK.enumeration(Object.values(rX.o))),
                            description: D.gK.maybeNull(D.gK.string),
                            lastMonthListeners: D.gK.maybeNull(D.gK.number),
                            lastMonthListenersDelta: D.gK.optional(D.gK.number, 0),
                            covers: D.gK.maybeNull(D.gK.array(D.gK.string)),
                            links: D.gK.maybeNull(D.gK.array(nY)),
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
                            getData: (0, D.L3)(function* (t) {
                                let { artistsResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (!e.isLoading)
                                    try {
                                        var r, l, s, n, o;
                                        e.loadingState = F.G.PENDING;
                                        let i = yield a.getAboutArtist({ artistId: t });
                                        ((e.artist = (0, eo.a)({ artist: i.artist })),
                                            (e.description = null != (o = i.description) ? o : null),
                                            (e.artistType = i.artistType === rX.o.COMPOSER ? rX.o.COMPOSER : rX.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(null == (r = i.stats) ? void 0 : r.lastMonthListeners) &&
                                                (e.lastMonthListeners = i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(null == (l = i.stats) ? void 0 : l.lastMonthListenersDelta) &&
                                                (e.lastMonthListenersDelta = i.stats.lastMonthListenersDelta));
                                        let d = null == (s = i.covers) ? void 0 : s.map((e) => e.uri).filter((e) => !!e);
                                        (d && (e.covers = (0, D.wg)(d)),
                                            (e.links = (0, D.wg)(null == (n = i.links) ? void 0 : n.map(n$))),
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
                nq = D.gK
                    .model('ImageSliderModal', {
                        modal: se.q,
                        images: D.gK.maybeNull(D.gK.array(D.gK.string)),
                        initialSlideIndex: D.gK.optional(D.gK.number, 0),
                        loadedImages: D.gK.maybeNull(D.gK.array(D.gK.string)),
                        sizeImage: D.gK.optional(D.gK.number, 1e3),
                        withAspectRatio: D.gK.optional(D.gK.boolean, !0),
                    })
                    .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                    .actions((e) => ({
                        openImages(t) {
                            let { images: a, initialSlideIndex: i, sizeImage: r, withAspectRatio: l } = t;
                            ((e.images = (0, D.wg)((0, sp.HO)(a))),
                                (e.sizeImage = null != r ? r : 1e3),
                                (e.withAspectRatio = null == l || l),
                                i && (e.initialSlideIndex = i),
                                e.modal.open());
                        },
                        setImageIsLoaded(t) {
                            var a, i;
                            (e.loadedImages || (e.loadedImages = (0, D.wg)([])),
                                !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t));
                        },
                        close() {
                            ((e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close());
                        },
                    })),
                nH = D.gK
                    .model('UgcTrackEditModal', { modal: se.q })
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
                nz = D.gK.model('ModalsModel', {
                    disclaimerModal: se.q,
                    shortcutsModal: se.q,
                    aboutAppModal: se.q,
                    overviewModal: se.q,
                    ugcTrackEditModal: nH,
                    crackdownModal: se.q,
                    overwrittenExperimentsModal: se.q,
                    overwrittenMocksModal: se.q,
                    buySubscriptionModal: se.q,
                    clearMemoryModal: se.q,
                    imageSliderModal: nq,
                    promoLandingBuySubscriptionModal: se.q,
                    artistAboutModal: nJ,
                    bestRecommedationModal: se.q,
                }),
                nQ = (e) => 'object' == typeof e && e && 'type' in e,
                nZ = (e) => {
                    switch (e.type) {
                        case el._.WAVE_ITEM:
                            return (0, D.wg)({ type: el._.WAVE_ITEM, data: (0, tQ.e)(e.data) });
                        case el._.PLAYLIST_ITEM:
                            return (0, D.wg)({ type: el._.PLAYLIST_ITEM, data: (0, eg.b)({ playlist: e.data }) });
                        case el._.ARTIST_ITEM:
                            return (0, D.wg)({ type: el._.ARTIST_ITEM, data: (0, eo.a)({ artist: e.data }) });
                        case el._.ALBUM_ITEM:
                            return (0, D.wg)({ type: el._.ALBUM_ITEM, data: (0, es.s)({ album: e.data }) });
                    }
                },
                n0 = D.gK.model('PinAlbumItemModel', { type: D.gK.literal(el._.ALBUM_ITEM), data: eC.J }),
                n1 = D.gK.model('PinArtistItemModel', { type: D.gK.literal(el._.ARTIST_ITEM), data: eR.P }),
                n3 = D.gK.model('PinPlaylistItemModel', { type: D.gK.literal(el._.PLAYLIST_ITEM), data: tG.$ }),
                n2 = D.gK.model('PinVibeItemModel', { type: D.gK.literal(el._.WAVE_ITEM), data: eX.G }),
                n5 = D.gK.union(n0, n1, n3, n2),
                n8 = D.gK
                    .model('Pins', { loadingState: D.gK.enumeration(Object.values(F.G)), items: D.gK.maybeNull(D.gK.array(n5)), index: D.gK.map(D.gK.boolean) })
                    .views((e) => ({
                        get filteredItems() {
                            let { experiments: t } = (0, _.M)(e),
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
                                ((e.items = (0, D.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t));
                            },
                            addPin(t) {
                                var a, i, r, l;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (l = e.items) ? void 0 : l.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(nZ(t));
                                let s = null == (r = e.items) ? void 0 : r.at(0);
                                s && e.index.set(s.data.pinId, !0);
                            },
                            getData: (0, D.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = F.G.PENDING;
                                        let a = yield t.getPins();
                                        ((e.items = (0, D.wg)(a.pins.map(nZ))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), a.error(t));
                                    }
                            }),
                            toggleAlbumPin: (0, D.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinAlbum(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinAlbum(a)), nQ(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, D.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinArtist(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinArtist(a)), nQ(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, D.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinPlaylist(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinPlaylist(a)), nQ(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, D.L3)(function* (a, i) {
                                let { pinResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        let l;
                                        if (e.isPinned(i)) return ((l = yield r.unpinWave(a)), t.deletePin(i), l);
                                        return ((l = yield r.pinWave(a)), nQ(l) && t.addPin(l), l);
                                    } catch (e) {
                                        l.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    }),
                n6 = D.gK
                    .model({ modal: se.q, freemiumCollectionBarrier: D.gK.optional(D.gK.boolean, !1) })
                    .views((e) => {
                        let t = {
                            get shouldShowMobilePaywall() {
                                var a;
                                let { settings: t, user: i, freeAccess: r } = (0, _.M)(e);
                                return !!((null == (a = t.browserInfo) ? void 0 : a.isTouch) && (!i.isAuthorized || r.isFreeWebUser));
                            },
                            get isPassed() {
                                let { desktopPaywall: a } = (0, _.M)(e);
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
                            let { desktopPaywall: t } = (0, _.M)(e);
                            (t.startCrackdownTimeout(), e.modal.close());
                        },
                        onOpenChange(t) {
                            if (t || !e.freemiumCollectionBarrier) {
                                if (!t) {
                                    let { desktopPaywall: t } = (0, _.M)(e);
                                    t.startCrackdownTimeout();
                                }
                                e.modal.onOpenChange(t);
                            }
                        },
                    })),
                n4 = D.gK.model('AdContainer', {
                    adTitle: D.gK.maybe(D.gK.string),
                    iconSrc: D.gK.maybe(D.gK.string),
                    clickThroughUrl: D.gK.maybe(D.gK.string),
                    src: D.gK.maybe(D.gK.string),
                    clientLegalInfo: D.gK.maybe(D.gK.string),
                    advertiserInfoUrl: D.gK.maybe(D.gK.string),
                }),
                n9 = D.gK
                    .model('Advert', {
                        data: D.gK.maybeNull(n4),
                        isAdvertShown: D.gK.maybe(D.gK.boolean),
                        isAdvertPlaying: D.gK.maybe(D.gK.boolean),
                        isAdvertPlaybackCreated: D.gK.boolean,
                    })
                    .actions((e) => ({
                        setData: (t) => {
                            e.data = (0, D.wg)({
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
                            let { experiments: r } = (0, _.M)(e),
                                l = null == (i = r.getExperiment(O.z.WebNextDisableAds)) || null == (a = i.value) ? void 0 : a.values;
                            return Array.isArray(l) && l.includes(t);
                        },
                        reset: () => {
                            ((e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1));
                        },
                    }));
            var n7 = a(12670),
                oe = a(37173);
            let ot = D.gK
                .model('FreePlayerAccess', { restrictionModal: D.gK.maybe(D.gK.frozen()) })
                .views((e) => ({
                    get shownRestrictionModal() {
                        var t;
                        return null != (t = e.restrictionModal) ? t : null;
                    },
                }))
                .actions((e) => ({
                    showRestrictionModal(t) {
                        let { user: a, freeAccess: i, fullscreenPlayer: r, sonataState: l } = (0, _.M)(e);
                        if (t === oe.W.Playing && l.isGenerativeContext) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        if (!a.isAuthorized) {
                            e.restrictionModal = r.modal.isOpened ? n7.h.FullscreenUnauthorized : n7.h.PlayerAuthorization;
                            return;
                        }
                        if (!(t === oe.W.Playing ? i.isFreeDesktopUser || i.limitedFreePlayback : i.isFreeWebUser)) {
                            e.restrictionModal = void 0;
                            return;
                        }
                        e.restrictionModal = r.modal.isOpened ? n7.h.FullscreenSubscription : n7.h.PlayerSubscription;
                    },
                    hideRestrictionModal() {
                        e.restrictionModal = void 0;
                    },
                }));
            var oa = a(85585),
                oi = a(7123),
                or = a(48109);
            let ol = (e) => {
                    switch (e.data.type) {
                        case aX.R.Generative: {
                            var t;
                            let a = e.data.meta,
                                i = (0, or.Q)(null == a ? void 0 : a.derivedColors);
                            return (0, D.wg)({
                                id: String(a.id),
                                coverUri: a.imageUrl,
                                title: null != (t = a.title) ? t : '',
                                isAvailable: !0,
                                isRemoved: !1,
                                averageColor: i,
                            });
                        }
                        case aX.R.Clip:
                        case oi.z4.Unloaded:
                        case aX.R.Radio:
                            return null;
                        default: {
                            let t = e.data.meta;
                            return (0, D.wg)({ ...(0, z.K)(t), isHiddenFromSonataQueue: e.hidden });
                        }
                    }
                },
                os = Z.v.props({ isHiddenFromSonataQueue: D.gK.maybe(D.gK.boolean) }).views((e) => ({
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
                on = D.gK
                    .compose(
                        D.gK.model('PlayQueue', {
                            isVisible: D.gK.optional(D.gK.boolean, !1),
                            beforeTracksIds: D.gK.maybeNull(D.gK.array(D.gK.number)),
                            afterTracksIds: D.gK.optional(D.gK.frozen(), []),
                            hiddenTrackIds: D.gK.array(D.gK.number),
                            currentIndex: D.gK.optional(D.gK.number, 0),
                            trackMap: D.gK.optional(D.gK.map(os), {}),
                        }),
                        w.p,
                    )
                    .views((e) => ({
                        get isVibeBlockShowed() {
                            let {
                                experiments: t,
                                slam: a,
                                sonataState: { isVibeContext: i, isContextRepeatMode: r },
                            } = (0, _.M)(e);
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
                            } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextPlayQueueDnD, 'on') && !a;
                        },
                    }))
                    .actions((e) => {
                        let t = (t, a) => {
                                let i = t[a];
                                if (!i || (0, oi.Re)(i)) return null;
                                let { entity: r } = i,
                                    l = ol(r);
                                return !l || l.isHiddenFromSonataQueue ? null : (e.trackMap.has(l.id) || e.trackMap.set(l.id, (0, D.wg)(l)), a);
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
                                    for (let s = e.currentIndex - 1; s > r; s--) {
                                        let e = i[s];
                                        if ('number' != typeof e) break;
                                        let r = t(a, e);
                                        null !== r && l.unshift(r);
                                    }
                                    e.beforeTracksIds = (0, D.wg)(l);
                                },
                                setAfterTracksIds(a, i, r) {
                                    let l = r === nP.K.Vibe ? 1 : 125,
                                        s = [];
                                    for (let r = e.currentIndex + 1; r < i.length && s.length < l; r++) {
                                        let e = i[r];
                                        if ('number' != typeof e) break;
                                        let l = t(a, e);
                                        null !== l && s.push(l);
                                    }
                                    e.afterTracksIds = s;
                                },
                                setHiddenTrackIds(t) {
                                    let a = [];
                                    for (let e = 0; e < t.length; e++) {
                                        let i = t[e];
                                        i && i.entity.hidden && a.push(e);
                                    }
                                    e.hiddenTrackIds = (0, D.wg)(a);
                                },
                                reset() {
                                    (e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear());
                                },
                            };
                        return a;
                    });
            var oo = a(54020);
            !(function (e) {
                ((e.TEXT = 'TEXT'), (e.LRC = 'LRC'), (e.RICH_JSON = 'RICH_JSON'));
            })(d || (d = {}));
            var od = a(14984),
                og = a(12149);
            let ou = (e, t, a) => {
                    let i = Math.floor(Date.now() / 1e3),
                        r = ''.concat(t).concat(i);
                    return {
                        sign: (0, od.createHmac)('sha256', (0, T.Ef)(e, (0, og.u)()))
                            .update(r)
                            .digest('base64'),
                        timeStamp: i,
                        trackId: t,
                        format: a,
                    };
                },
                oc = (e) => (0, D.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                om = D.gK.model('MajorModel', { id: D.gK.number, name: D.gK.string, prettyName: D.gK.maybeNull(D.gK.string) }),
                oy = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                op = D.gK.model('SyncLyricsLine', { text: D.gK.string, fromSec: D.gK.number, toSec: D.gK.maybe(D.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                ob = D.gK
                    .compose(
                        D.gK.model('SyncLyrics', {
                            isVisible: D.gK.optional(D.gK.boolean, !1),
                            lines: D.gK.maybeNull(D.gK.array(op)),
                            major: D.gK.maybeNull(om),
                            writers: D.gK.maybeNull(D.gK.array(D.gK.string)),
                            lyricId: D.gK.maybeNull(D.gK.number),
                            externalLyricId: D.gK.maybeNull(D.gK.string),
                            currentTrackId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            hasLyricsViewed: D.gK.optional(D.gK.boolean, !1),
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
                            getData: (0, D.L3)(function* (a) {
                                let { config: i, tracksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (a)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { downloadUrl: l, major: s, externalLyricId: n, lyricId: o, writers: g } = yield r.getLyrics(ou(i, a, d.LRC));
                                        ((e.major = oc(s)),
                                            (e.externalLyricId = n),
                                            (e.lyricId = o),
                                            (e.writers = (0, D.wg)(g)),
                                            (e.currentTrackId = a),
                                            (e.hasLyricsViewed = !1),
                                            yield t.downloadSyncLyrics(l),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), l.error(t));
                                    }
                            }),
                            downloadSyncLyrics: (0, D.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, D._$)(e),
                                    i = yield a.getLyricsText(t);
                                e.lines = (0, D.wg)(
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
                                                        s = { scripts: [] };
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
                                                    }, s),
                                                        t.splice(0, r.length));
                                                    let n = new RegExp(''.concat(i.source, '|').concat(a.source));
                                                    t = t.filter((e) => e && n.test(e));
                                                    for (let e = 0, r = t.length; e < r; e++) {
                                                        let s = t[e],
                                                            n = e + 1 < r ? t[e + 1] : null;
                                                        if (s) {
                                                            let e = i.exec(s),
                                                                t = n ? a.exec(n) : null;
                                                            if (e) {
                                                                let [, a, i] = e,
                                                                    r = null == t ? void 0 : t[1];
                                                                a && l.push({ start: oy(a), text: i || '', end: oy(r) });
                                                            }
                                                        }
                                                    }
                                                    return ((s.scripts = l), s);
                                                })(e).scripts || []
                                            ).map((e) => {
                                                let { start: t, end: a, text: i } = e;
                                                return (0, D.wg)({ text: i.trim(), fromSec: t, toSec: a });
                                            });
                                        } catch (e) {
                                            return [];
                                        }
                                    })(i),
                                );
                            }),
                            sendViews: (0, D.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState === F.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        (yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, oo.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: d.LRC,
                                                    albumId: i === nP.K.Album && a ? a : void 0,
                                                    playlistId: i === nP.K.Playlist && a ? a : void 0,
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
                oE = D.gK
                    .model('FullscreenPlayer', { mode: D.gK.maybeNull(D.gK.enumeration(Object.values(oa.u))), syncLyrics: ob, playQueue: on, modal: se.q })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, _.M)(e);
                            return e.mode === oa.u.SYNC_LYRICS && !!(null == a || null == (t = a.entityMeta) ? void 0 : t.isSyncLyricsAvailable);
                        },
                        get isPlayQueueMode() {
                            return e.mode === oa.u.PLAY_QUEUE;
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
                            ((e.mode = oa.u.SYNC_LYRICS), e.syncLyrics.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hideSyncLyrics() {
                            ((e.mode = null), e.syncLyrics.setInvisible());
                        },
                        showPlayQueue() {
                            ((e.mode = oa.u.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open());
                        },
                        hidePlayQueue() {
                            ((e.mode = null), e.playQueue.setInvisible());
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                        },
                    })),
                ov = D.gK.model('QualitySettings', { modal: se.q });
            var oS = a(67960);
            let oK = D.gK.model('UtmLink', {
                    utmSource: D.gK.maybe(D.gK.string),
                    utmCampaign: D.gK.maybe(D.gK.string),
                    utmMedium: D.gK.maybe(D.gK.string),
                    utmTerm: D.gK.maybe(D.gK.string),
                    yclid: D.gK.maybe(D.gK.string),
                }),
                oI = (e, t) => {
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
                    return (0, D.wg)({ ...a });
                };
            var oL = a(27984);
            let oT = D.gK
                    .model('TrailerMeta', {
                        id: D.gK.string,
                        url: D.gK.string,
                        title: D.gK.maybe(D.gK.string),
                        uuid: D.gK.maybe(D.gK.string),
                        coverUri: D.gK.maybe(D.gK.string),
                        averageColor: D.gK.maybe(D.gK.string),
                        albumArtists: D.gK.maybe(D.gK.array(eR.P)),
                        albumType: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => ({
                        getSharingProps(t) {
                            switch (t) {
                                case oL.H.ALBUM:
                                    return { pattern: '/album/:albumId', params: { albumId: e.id } };
                                case oL.H.ARTIST:
                                    return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                                case oL.H.PLAYLIST:
                                    return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                                case oL.H.TRACK:
                                    return { pattern: '/track/:trackId', params: { trackId: e.id } };
                                default:
                                    return { pattern: aI.Z.main.href, params: {} };
                            }
                        },
                    })),
                oh = D.gK
                    .model('TrailerState', {
                        contextType: D.gK.maybeNull(D.gK.enumeration(Object.values(nP.K))),
                        contextId: D.gK.maybeNull(D.gK.string),
                        entityMeta: D.gK.maybeNull(os),
                        status: D.gK.enumeration(Object.values(oi.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = ol(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                oN = Z.v.props({ isBest: D.gK.maybe(D.gK.boolean), positionInAlbum: D.gK.maybe(D.gK.number) }).named('TrailerTrack'),
                oA = D.gK
                    .compose(
                        D.gK.model('Trailer', {
                            id: D.gK.maybeNull(D.gK.string),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            modal: se.q,
                            variant: D.gK.maybeNull(D.gK.enumeration(Object.values(oL.H))),
                            tracks: D.gK.maybeNull(D.gK.array(oN)),
                            meta: D.gK.maybeNull(oT),
                            state: oh,
                            withAnimation: D.gK.boolean,
                            shouldAutoStartPlaying: D.gK.boolean,
                            sonataStatusBeforeTrailerStart: D.gK.enumeration(Object.values(oi.MT)),
                            isManuallyPaused: D.gK.boolean,
                            utmLinkModel: D.gK.maybe(oK),
                            title: D.gK.maybeNull(D.gK.string),
                            shareable: D.gK.maybeNull(D.gK.boolean),
                            personalColor: D.gK.maybeNull(D.gK.number),
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
                            return e.utmLinkModel && (0, sp.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, D.wg)(t));
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
                                let { sonataState: i } = (0, _.M)(e);
                                t.isTrailerActive(oL.H.ARTIST, a) ||
                                    (t.reset(),
                                    (e.variant = oL.H.ARTIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, _.M)(e);
                                t.isTrailerActive(oL.H.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = oL.H.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, _.M)(e);
                                t.isTrailerActive(oL.H.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = oL.H.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, _.M)(e);
                                t.isTrailerActive(oL.H.TRACK, a) ||
                                    (t.reset(),
                                    (e.variant = oL.H.TRACK),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, D.L3)(function* (a) {
                                let { artistsResource: i } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { artist: t, trailer: r } = yield i.getTrailer({ artistId: a });
                                        (r.tracks && (e.tracks = (0, D.wg)(r.tracks.map((e) => oI(e, { isSmartPreview: !0 })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, ek.u)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, D.wg)({
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
                            getAlbumTrailer: (0, D.L3)(function* (a) {
                                let { albumResource: i } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { album: t, artists: r, trailer: l } = yield i.getTrailer({ albumId: a });
                                        (l.tracks && (e.tracks = (0, D.wg)(l.tracks.map((e) => oI(e, { isSmartPreview: !0, albumId: t.id })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let r = null == t ? void 0 : t.map((e) => (0, eo.a)({ artist: e })),
                                                        { href: l } = (0, ek.u)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, D.wg)({
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
                            getPlaylistTrailer: (0, D.L3)(function* (a) {
                                let { usersResource: i } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { uid: t, kind: r } = (0, oS.I)(a);
                                        if (!t || !r) {
                                            e.loadingState = F.G.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: l,
                                            trailer: s,
                                            shareable: n,
                                            personalColor: o,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(r) });
                                        (s.tracks && (e.tracks = (0, D.wg)(s.tracks.map((e) => oI(e, { isSmartPreview: !0 })))),
                                            s.title && (e.title = s.title),
                                            n && (e.shareable = n),
                                            o && (e.personalColor = o),
                                            l &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, ek.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, D.wg)({
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
                            getTrackTrailer: (0, D.L3)(function* (a) {
                                let { tracksResource: i } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING)
                                    try {
                                        e.loadingState = F.G.PENDING;
                                        let { track: t, title: n } = yield i.getTrailer({ trackId: a });
                                        if ((n && (e.title = n), t)) {
                                            var r, l, s;
                                            ((e.tracks = (0, D.wg)([oI(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, D.wg)({
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
                                                    averageColor: null == (s = t.derivedColors) ? void 0 : s.average,
                                                })));
                                        }
                                        e.loadingState = F.G.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, D._$)(e);
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
                                    (e.sonataStatusBeforeTrailerStart = oi.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null));
                            },
                        };
                        return t;
                    });
            (g || (g = {})).OK = 'ok';
            var of = a(90420);
            let oC = D.gK
                .compose(
                    D.gK.model('VibeActions', {
                        meta: D.gK.maybeNull(eX.G),
                        applyingSetting: D.gK.maybeNull(D.gK.string),
                        isApplying: D.gK.boolean,
                        vibeResetLoadingState: D.gK.enumeration(Object.values(F.G)),
                    }),
                    ee.X,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === of.M1;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(of.yx));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, D.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, D._$)(e);
                        if (e.loadingState !== F.G.PENDING)
                            try {
                                e.loadingState = F.G.PENDING;
                                let a = yield t.waveLast();
                                ((e.meta = (0, em.l)(a)), (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.loadingState = F.G.REJECT));
                            }
                    }),
                    vibeReset: (0, D.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, D._$)(e);
                        if (e.vibeResetLoadingState !== F.G.PENDING)
                            try {
                                ((e.vibeResetLoadingState = F.G.PENDING),
                                    (yield t.waveLastReset()) === g.OK && (e.meta = (0, em.l)({ name: '', seeds: [of.M1] })),
                                    (e.vibeResetLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.vibeResetLoadingState = F.G.REJECT));
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, D.wg)(t)) : (e.applyingSetting = null);
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
            var oR = a(42205);
            let ok = aT.props({ artists: D.gK.array(eR.P), isHiddenFromSonataQueue: D.gK.maybe(D.gK.boolean) }).views((e) => ({
                    get idWithContext() {
                        return String(e.clipId);
                    },
                })),
                oP = D.gK
                    .model('VideoPlayerState', {
                        contextType: D.gK.maybeNull(D.gK.enumeration(Object.values(nP.K))),
                        contextId: D.gK.maybeNull(D.gK.string),
                        entityMeta: D.gK.maybeNull(ok),
                        status: D.gK.enumeration(Object.values(oi.MT)),
                        canMoveForward: D.gK.boolean,
                        canMoveBackward: D.gK.boolean,
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
                                    if (e.data.type !== aX.R.Clip) return null;
                                    {
                                        var t;
                                        let a = e.data.meta;
                                        if (!a.clipId) return null;
                                        let i = null == (t = a.artists) ? void 0 : t.map((e) => (0, eo.a)({ artist: e })),
                                            { available: r, disclaimers: l } = (0, ts.f)(a);
                                        return (0, D.wg)({
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
                oD = D.gK
                    .compose(
                        D.gK.model('FullscreenVideoPlayer', {
                            modal: se.q,
                            ids: D.gK.array(D.gK.number),
                            activeIndex: D.gK.maybeNull(D.gK.number),
                            clips: D.gK.array(ah),
                            errorStatusCode: D.gK.maybeNull(D.gK.number),
                            state: oP,
                            sonataStatusBeforeClipStart: D.gK.enumeration(Object.values(oi.MT)),
                            isOpenedFromMain: D.gK.maybeNull(D.gK.boolean),
                            withAnimation: D.gK.boolean,
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
                                return e.ids.map((e) => ({ type: aX.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === oi.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, D.wg)(t);
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
                            let { sonataState: t } = (0, _.M)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, D.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    ((e.ids = (0, D.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, D.wg)(a.map(lc))),
                                        (e.activeIndex = (0, oR.z)(e.ids, e.activeIndex)),
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
                                (e.sonataStatusBeforeClipStart = oi.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]));
                        },
                    }));
            var o_ = a(3409),
                oO = a(75177),
                ow = a(14841),
                oG = a(22786);
            !(function (e) {
                ((e.CLICK = 'CLICK'), (e.VIEW = 'VIEW'));
            })(u || (u = {}));
            let oM = D.gK
                    .model('BaseWheelItem', {
                        id: D.gK.string,
                        index: D.gK.number,
                        type: D.gK.enumeration(Object.values(oO.D)),
                        style: D.gK.maybe(D.gK.string),
                        description: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            let { experiments: t } = (0, _.M)(e);
                            return [oO.D.WAVE, oO.D.SETTING].includes(e.type) && t.checkExperiment(O.z.WebNextProductWithoutRecommendation, 'on');
                        },
                        get isPlayable() {
                            if (!(0, D._n)(e)) return !1;
                            switch (e.type) {
                                case oO.D.WAVE:
                                case oO.D.ALBUM:
                                case oO.D.NON_MUSIC:
                                    return !0;
                                case oO.D.PROMO_LINK:
                                case oO.D.SETTING:
                                    return !1;
                            }
                        },
                    }))
                    .actions((e) => ({
                        handleFeedbackView() {
                            if (!(0, D._n)(e)) return;
                            let { wheel: t } = (0, _.M)(e);
                            t && t.addFeedback(u.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            if (!(0, D._n)(e)) return;
                            let { wheel: t } = (0, _.M)(e);
                            if (!t) return;
                            let a = t.addFeedback(u.CLICK, e.type, e.id, e.index);
                            e.isPlayable ||
                                a.then(() => {
                                    (0, D._n)(t) && t.sendFeedbacks();
                                });
                        },
                    })),
                oU = oM.props({ type: D.gK.literal(oO.D.ALBUM), data: eC.J }),
                oB = D.gK
                    .model('NonMusic', { album: eC.J, resumeFrom: D.gK.model({ trackId: D.gK.string, startPositionSec: D.gK.number }) })
                    .actions((e) => ({ getKey: (t) => e.album.getKey(t) })),
                oV = oM.props({ type: D.gK.literal(oO.D.NON_MUSIC), data: oB }),
                oF = D.gK
                    .model('PromoLink', {
                        id: D.gK.string,
                        title: D.gK.string,
                        description: D.gK.maybe(D.gK.string),
                        url: D.gK.maybeNull(D.gK.string),
                        cover: eP.$,
                        color: D.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                ox = oM.props({ type: D.gK.literal(oO.D.PROMO_LINK), data: oF }),
                oj = D.gK.model('Setting', { title: D.gK.string, cover: eP.$ }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                oW = oM.props({ type: D.gK.literal(oO.D.SETTING), data: oj }),
                oX = oM.props({ type: D.gK.literal(oO.D.WAVE), data: eX.G }),
                o$ = (e, t) =>
                    e.items
                        .map((e, a) => {
                            try {
                                var i, r, l, s, n;
                                switch (e.type) {
                                    case oO.D.WAVE:
                                        return oX.create({
                                            id: e.id,
                                            index: a,
                                            type: oO.D.WAVE,
                                            style: null != (i = e.style) ? i : oG.y.DEFAULT,
                                            description: e.description,
                                            data: (0, em.l)(e.data.wave, e.data.agent),
                                        });
                                    case oO.D.ALBUM:
                                        return oU.create({
                                            id: e.id,
                                            index: a,
                                            type: oO.D.ALBUM,
                                            style: null != (r = e.style) ? r : oG.y.DEFAULT,
                                            description: e.description,
                                            data: (0, es.s)({ album: e.data.album, artists: e.data.artists }),
                                        });
                                    case oO.D.NON_MUSIC:
                                        return oV.create({
                                            id: e.id,
                                            index: a,
                                            type: oO.D.NON_MUSIC,
                                            style: null != (l = e.style) ? l : oG.y.DEFAULT,
                                            description: e.description,
                                            data: { album: (0, es.s)({ album: e.data.album }), resumeFrom: e.data.resumeFrom },
                                        });
                                    case oO.D.PROMO_LINK:
                                        return ox.create({
                                            id: e.id,
                                            index: a,
                                            type: oO.D.PROMO_LINK,
                                            style: null != (s = e.style) ? s : oG.y.DEFAULT,
                                            description: e.description,
                                            data: ((e) =>
                                                (0, D.wg)({
                                                    id: e.id,
                                                    title: e.title,
                                                    description: e.description,
                                                    url: e.action.weblink,
                                                    cover: e.cover,
                                                    color: e.color,
                                                }))(e.data),
                                        });
                                    case oO.D.SETTING:
                                        return oW.create({
                                            id: e.id,
                                            index: a,
                                            type: oO.D.SETTING,
                                            style: null != (n = e.style) ? n : oG.y.DEFAULT,
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
                oY = D.gK.union(oX, oU, oV, ox, oW),
                oJ = D.gK
                    .compose(
                        D.gK.model('Wheel', {
                            wheelId: D.gK.optional(D.gK.string, ''),
                            items: D.gK.array(oY),
                            activeIndex: D.gK.optional(D.gK.number, 1),
                            lastRequestId: D.gK.optional(D.gK.string, ''),
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
                            async addFeedback(i, r, l, s) {
                                let n = { wheelId: e.wheelId, timestamp: Date.now(), eventType: i, item: { type: r, id: l }, position: s };
                                if (e.isPersistentFeedbacksAvailable)
                                    return e.feedbacksStore
                                        ? (a = a
                                              .then(() => {
                                                  let t = e.feedbacksStore;
                                                  return t ? t.addFeedback(n) : Promise.resolve();
                                              })
                                              .catch(() => void 0))
                                        : Promise.resolve();
                                let o = (0, ow.q)(n);
                                t.has(o) || t.set(o, n);
                            },
                            sendFeedbacks: (0, D.L3)(function* () {
                                let { wheelResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                    i = yield r();
                                if (0 !== i.feedbacks.length)
                                    try {
                                        (yield t.feedbacks({ feedbacks: i.feedbacks }), l(i));
                                    } catch (e) {
                                        a.error('[Wheel] Feedbacks send error', { error: e });
                                    }
                            }),
                            getData: (0, D.L3)(function* (t, a) {
                                let { context: i, forceFetch: s } = t,
                                    n = ((e) => {
                                        switch (e.type) {
                                            case o_.b.ALBUM:
                                            case o_.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case o_.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case o_.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case o_.b.EMPTY:
                                            case o_.b.GENERATIVE:
                                            case o_.b.CLIP:
                                                return e.type;
                                            case o_.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(i);
                                if (!s && n === e.lastRequestId) return;
                                let { wheelResource: o, modelActionsLogger: d } = (0, D._$)(e);
                                e.loadingState = F.G.PENDING;
                                let g = yield r();
                                try {
                                    let t = yield o.wheelNew({ context: i, feedbacks: g.feedbacks });
                                    if (
                                        (l(g), (e.wheelId = t.wheelId), (e.items = (0, D.wg)(o$(t, d))), (e.activeIndex = 1), (e.lastRequestId = n), 0 === e.items.length)
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                                        type: oO.D.WAVE,
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
                                        ((e.wheelId = i.wheelId), (e.items = (0, D.wg)(o$(i, d))), (e.activeIndex = 1));
                                    } else d.error('[Wheel] Load error', { error: t });
                                    e.loadingState = F.G.REJECT;
                                }
                            }),
                        };
                    }),
                oq = (e) => e.map((e) => ({ id: e.id, title: e.title })),
                oH = D.gK.model('WizardGenre', { id: D.gK.string, title: D.gK.string }),
                oz = D.gK
                    .model('Wizard2Session', {
                        loadingState: D.gK.enumeration(Object.values(F.G)),
                        genres: D.gK.array(oH),
                        artistsByGenres: D.gK.maybe(D.gK.frozen()),
                        savedLikedArtists: D.gK.array(D.gK.string),
                        likedArtists: D.gK.array(D.gK.string),
                        unlikedArtists: D.gK.array(D.gK.string),
                        filter: D.gK.maybe(D.gK.string),
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
                        get canFinish() {
                            return this.selectedArtistsCounter >= 3;
                        },
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => ({
                        toggleArtistLike: (t) => {
                            let { likedArtists: a, unlikedArtists: i, savedLikedArtists: r } = e,
                                l = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: r } = e,
                                        l = {};
                                    if (a.includes(t)) return ((l.likedArtists = a.filter((e) => e !== t)), l);
                                    let s = r.includes(t),
                                        n = i.includes(t);
                                    return (((l.unlikedArtists = i.filter((e) => e !== t)), s && !n) ? l.unlikedArtists.push(t) : (l.likedArtists = [...a, t]), l);
                                })({ id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: r });
                            (l.likedArtists && (e.likedArtists = (0, D.wg)(l.likedArtists)), l.unlikedArtists && (e.unlikedArtists = (0, D.wg)(l.unlikedArtists)));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        loadGenres: (0, D.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING && e.loadingState !== F.G.RESOLVE)
                                try {
                                    var i;
                                    e.loadingState = F.G.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, D.wg)(oq(a))), !a.length)) throw Error("The wizard's genre array is empty");
                                    ((e.filter = null == (i = a[0]) ? void 0 : i.id),
                                        (e.artistsByGenres = (0, D.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: F.G.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    sp.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        loadArtists: (0, D.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                                        s = i.map((e) => (0, eo.a)({ artist: e })),
                                        n = i.map((e) => e.id);
                                    (e.artistsByGenres.set(e.filter, {
                                        artists: [...r.artists, ...s],
                                        showedArtists: [...r.showedArtists, ...n],
                                        loadingState: F.G.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, D.wg)(l.map((e) => String(e)))),
                                        (e.likedArtists = (0, D.wg)([])),
                                        (e.unlikedArtists = (0, D.wg)([])));
                                } catch (e) {
                                    (i.error(e), (r.loadingState = F.G.REJECT));
                                }
                        }),
                        finish: (0, D.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.canFinish || !e.filter) return it.F.ERROR;
                            try {
                                return (yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), it.F.OK);
                            } catch (e) {
                                return (a.error(e), it.F.ERROR);
                            }
                        }),
                    }));
            !(function (e) {
                ((e.VERTICAL = 'VERTICAL'), (e.BOTH_DIMENSIONS = 'BOTH_DIMENSIONS'));
            })(c || (c = {}));
            let oQ = (e) =>
                    e.map((e) => {
                        var t;
                        return { id: e.id, name: e.name, coverUri: null == (t = e.cover) ? void 0 : t.uri, coordinate: e.coordinate };
                    }),
                oZ = D.gK.model('Wizard3Artist', {
                    id: D.gK.string,
                    name: D.gK.string,
                    coverUri: D.gK.maybe(D.gK.string),
                    coordinate: D.gK.model('Wizard3Coordinate', { x: D.gK.number, y: D.gK.number }),
                }),
                o0 = D.gK.model('Wizard3GenreArtists', {
                    loadingState: D.gK.optional(D.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                    hasMoreArtists: D.gK.optional(D.gK.boolean, !0),
                    artists: D.gK.array(oZ),
                });
            !(function (e) {
                ((e.COUNTER = 'COUNTER'), (e.ARTISTS = 'ARTISTS'));
            })(m || (m = {}));
            let o1 = D.gK.model('Wizard3Progress', {
                    text: D.gK.string,
                    minArtistsForPassedWizard: D.gK.number,
                    countOfLikedArtists: D.gK.number,
                    upperBoundOfLikes: D.gK.number,
                    passBoundOfLikes: D.gK.number,
                    wizardFinished: D.gK.boolean,
                    type: D.gK.enumeration(Object.values(m)),
                }),
                o3 = D.gK
                    .model('Wizard3Session', {
                        loadingState: D.gK.optional(D.gK.enumeration(Object.values(F.G)), F.G.IDLE),
                        genres: D.gK.array(oH),
                        artistsByGenres: D.gK.map(o0),
                        likedArtists: D.gK.array(D.gK.string),
                        progress: D.gK.maybe(o1),
                        filter: D.gK.maybe(D.gK.string),
                    })
                    .volatile(() => ({ likesRevision: 0, isLikeRequestPending: !1 }))
                    .views((e) => ({
                        get artistsByGenre() {
                            var t, a;
                            return e.filter && null != (a = null == (t = e.artistsByGenres.get(e.filter)) ? void 0 : t.artists.slice()) ? a : [];
                        },
                        get selectedArtistsCounter() {
                            return e.likedArtists.length;
                        },
                        get canFinish() {
                            return !1;
                        },
                        isArtistLiked: (t) => e.likedArtists.includes(t),
                    }))
                    .actions((e) => {
                        let t = (0, D.L3)(function* (t) {
                                let { wizard3Resource: a } = (0, D._$)(e),
                                    i = e.likesRevision,
                                    r = !e.isLikeRequestPending;
                                e.artistsByGenres.set(t, { loadingState: F.G.PENDING });
                                let {
                                    artists: l = [],
                                    likedArtists: s = [],
                                    progress: n,
                                } = yield a.getInitialArtists({ genre: t, matrixHeight: 9, matrixWidth: 9, wizardType: c.VERTICAL });
                                (e.artistsByGenres.set(t, { loadingState: F.G.RESOLVE, hasMoreArtists: l.length > 0, artists: oQ(l) }),
                                    r && i === e.likesRevision && ((e.likedArtists = (0, D.wg)(s.map(String))), (e.progress = (0, D.wg)(n))));
                            }),
                            a = (0, D.L3)(function* (t, a, i) {
                                let { wizard3Resource: r } = (0, D._$)(e),
                                    l = e.likesRevision,
                                    s = !e.isLikeRequestPending;
                                a.loadingState = F.G.PENDING;
                                let { artists: n = [], likedArtists: o = [] } = yield r.getSimilarArtists({
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
                                (a.artists.push(...oQ(n)),
                                    (a.hasMoreArtists = n.length > 0),
                                    s && l === e.likesRevision && (e.likedArtists = (0, D.wg)(o.map(String))),
                                    (a.loadingState = F.G.RESOLVE));
                            });
                        return {
                            setFilter: (t) => {
                                e.filter = t;
                            },
                            toggleArtistLike: (0, D.L3)(function* (t) {
                                if (e.loadingState !== F.G.RESOLVE) return;
                                let { wizard3Resource: a, modelActionsLogger: i } = (0, D._$)(e),
                                    r = e.isArtistLiked(t),
                                    l = ++e.likesRevision;
                                ((e.isLikeRequestPending = !0), r ? e.likedArtists.remove(t) : e.likedArtists.push(t));
                                try {
                                    let i = { selectedArtist: Number(t) },
                                        { likedArtists: s = [], progress: n } = yield r ? a.unlikeArtist(i) : a.likeArtist(i);
                                    l === e.likesRevision && ((e.likedArtists = (0, D.wg)(s.map(String))), (e.progress = (0, D.wg)(n)));
                                } catch (e) {
                                    i.error(e);
                                } finally {
                                    l === e.likesRevision && (e.isLikeRequestPending = !1);
                                }
                            }),
                            finish: () => Promise.resolve(it.F.ERROR),
                            loadGenres: (0, D.L3)(function* () {
                                if (e.loadingState === F.G.PENDING || e.loadingState === F.G.RESOLVE) return;
                                let { wizard3Resource: t, modelActionsLogger: a } = (0, D._$)(e);
                                try {
                                    var i, r;
                                    e.loadingState = F.G.PENDING;
                                    let {
                                        genres: a = [],
                                        artists: l = [],
                                        likedArtists: s = [],
                                        progress: n,
                                    } = yield t.getInitialArtists({ genre: 'all', matrixHeight: 9, matrixWidth: 9, wizardType: c.VERTICAL });
                                    ((e.genres = (0, D.wg)(oq(a))),
                                        (e.filter = null != (r = null == (i = a[0]) ? void 0 : i.id) ? r : 'all'),
                                        e.artistsByGenres.set('all', { loadingState: F.G.RESOLVE, hasMoreArtists: l.length > 0, artists: oQ(l) }),
                                        (e.likedArtists = (0, D.wg)(s.map(String))),
                                        (e.progress = (0, D.wg)(n)),
                                        (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.loadingState = F.G.REJECT));
                                }
                            }),
                            loadArtists: (0, D.L3)(function* () {
                                let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    r = e.filter;
                                if (e.loadingState !== F.G.RESOLVE || !r || i <= 0) return;
                                let l = e.artistsByGenres.get(r);
                                if ((null == l ? void 0 : l.loadingState) === F.G.PENDING || (null == l ? void 0 : l.hasMoreArtists) === !1) return;
                                let { modelActionsLogger: s } = (0, D._$)(e);
                                try {
                                    (null == l ? void 0 : l.artists.length) ? yield a(r, l, i) : yield t(r);
                                } catch (t) {
                                    if ((s.error(t), null == l ? void 0 : l.artists.length)) {
                                        l.loadingState = F.G.REJECT;
                                        return;
                                    }
                                    e.artistsByGenres.set(r, { loadingState: F.G.REJECT });
                                }
                            }),
                        };
                    }),
                o2 = D.gK
                    .model('Wizard', { modal: se.q, introModal: se.q, sessionV2: oz, sessionV3: o3 })
                    .views((e) => {
                        let t = {
                            get isAvailable() {
                                let { experiments: t } = (0, _.M)(e);
                                return !t.isExperimentActive(O.z.WebNextProductWithoutRecommendation);
                            },
                            get activeSession() {
                                let { experiments: t } = (0, _.M)(e);
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
                        finish: (0, D.L3)(function* () {
                            let t = yield e.activeSession.finish();
                            if (t !== it.F.OK) return t;
                            let { experiments: a } = (0, _.M)(e);
                            if (a.isExperimentActive(O.z.WebNextTagSandbox)) {
                                let { tagSandbox: t } = (0, D._$)(e);
                                t.send('preferences_wizard_finished', {});
                            }
                            return t;
                        }),
                    })),
                o5 = D.gK.model('Credit', { title: D.gK.string, value: D.gK.string }),
                o8 = D.gK
                    .model('CurrentClipInfo', {
                        id: D.gK.maybeNull(D.gK.number),
                        clip: D.gK.maybeNull(ah),
                        clipLoadingState: D.gK.enumeration(Object.values(F.G)),
                        creditsLoadingState: D.gK.enumeration(Object.values(F.G)),
                        credits: D.gK.maybeNull(D.gK.array(o5)),
                        modal: se.q,
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
                        getClip: (0, D.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.id && e.clipLoadingState !== F.G.PENDING)
                                try {
                                    e.clipLoadingState = F.G.PENDING;
                                    let [a] = yield t.getClip({ clipIds: [e.id] });
                                    if (!a) return;
                                    ((e.clip = lc(a)), (e.clipLoadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (a.error(t), (e.clipLoadingState = F.G.REJECT));
                                }
                        }),
                        getCreditsInfo: (0, D.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.id || e.creditsLoadingState === F.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = F.G.PENDING;
                                let a = yield t.getCredits({ clipId: e.id });
                                ((e.credits = (0, D.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.creditsLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        reset() {
                            ((e.id = null), (e.clip = null), (e.clipLoadingState = F.G.IDLE), (e.creditsLoadingState = F.G.IDLE), (e.credits = null));
                        },
                    })),
                o6 = D.gK.model('TranslationsModel', { data: D.gK.frozen() }),
                o4 = D.gK
                    .model('ReleaseNotes', { modal: se.q, translations: D.gK.maybeNull(o6), sortedDescReleaseNotesKeys: D.gK.maybeNull(D.gK.array(D.gK.string)) })
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
                            e.sortedDescReleaseNotesKeys = (0, D.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = o6.create({ data: t }));
                        },
                    })),
                o9 = D.gK
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
                            let { authorization: t, containerStorage: a } = (0, D._$)(e);
                            null === a.get(l6.c.ForcedLoginAttempt, !1) &&
                                t.authorizationUrl &&
                                (a.set(l6.c.ForcedLoginAttempt, '1', { expires: 1, path: '/' }),
                                '1' === a.get(l6.c.ForcedLoginAttempt) && ((e.hasAttempted = !0), t.redirectToAuthorizationUrl()));
                        },
                    }));
            var o7 = a(67879);
            let de = (e) => 'object' == typeof e && null !== e && 'id' in e && 'owner' in e && 'members' in e && 'status' in e;
            var dt = a(67990);
            let da = (e) => 'object' == typeof e && null !== e && 'errorName' in e,
                di = async (e) => {
                    if (!(e instanceof U.GX) || e.statusCode !== U.X1.BAD_REQUEST || !(0, dt.N)(e.cause) || !e.cause.response) return null;
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
                dr = D.gK
                    .compose(
                        D.gK.model('Multivibe', {
                            invitationRoom: D.gK.maybeNull(ii),
                            createdRoomId: D.gK.maybeNull(D.gK.string),
                            duplicateRoomId: D.gK.maybeNull(D.gK.string),
                            promoModal: se.q,
                            inviteModal: se.q,
                            disabledRoomInfoModal: se.q,
                            disabledRoomId: D.gK.maybeNull(D.gK.string),
                            errorName: D.gK.maybeNull(D.gK.string),
                        }),
                        ee.X,
                        w.p,
                    )
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveForTwo, 'on');
                        },
                        get isOnboardingEnabled() {
                            let { experiments: t } = (0, _.M)(e);
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
                        getRoomById: (0, D.L3)(function* (t) {
                            let { roomId: a } = t;
                            if (e.loadingState === F.G.PENDING) return;
                            let { waveResource: i, modelActionsLogger: r } = (0, D._$)(e);
                            ((e.invitationRoom = null), (e.errorName = null));
                            try {
                                e.loadingState = F.G.PENDING;
                                let t = yield i.getRoomById({ roomId: a });
                                ((e.invitationRoom = (0, D.wg)(tI(t))), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (r.error(t),
                                    t instanceof U.GX && t.statusCode === U.X1.NOT_FOUND && (e.errorName = o7.z.ROOM_NOT_FOUND),
                                    e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                            }
                        }),
                        createRoom: (0, D.L3)(function* () {
                            let { waveResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            e.errorName = null;
                            try {
                                let a = yield t.createRoom();
                                if (!de(a)) return it.F.ERROR;
                                let i = tI(a);
                                return ((e.createdRoomId = null == i ? void 0 : i.id), it.F.OK);
                            } catch (i) {
                                a.error(i);
                                let t = yield di(i);
                                return (da(t) && t.errorName === o7.z.ROOM_LIMIT_EXCEEDED && (e.errorName = o7.z.ROOM_LIMIT_EXCEEDED), it.F.ERROR);
                            }
                        }),
                        enterRoom: (0, D.L3)(function* (t) {
                            let { waveResource: a, modelActionsLogger: i } = (0, D._$)(e);
                            ((e.errorName = null), (e.duplicateRoomId = null));
                            try {
                                let i = yield a.enterRoom(t);
                                if (!de(i)) return it.F.ERROR;
                                return ((e.invitationRoom = (0, D.wg)(tI(i))), it.F.OK);
                            } catch (a) {
                                i.error(a);
                                let t = yield di(a);
                                return (
                                    da(t) &&
                                        t.errorName === o7.z.ROOM_DUPLICATION &&
                                        t.correctRoomId &&
                                        ((e.errorName = o7.z.ROOM_DUPLICATION), (e.duplicateRoomId = t.correctRoomId)),
                                    it.F.ERROR
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
                dl = D.gK
                    .model('ContextMenuAddTracksToPlaylist', { playlistsWithoutTracks: D.gK.array(tG.$), playlistsLoadingState: ee.X, tracksLoadingState: ee.X })
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
                        loadPlaylistsWithoutTracks: (0, D.L3)(function* () {
                            let { modelActionsLogger: t, usersResource: a } = (0, D._$)(e),
                                { user: i } = (0, _.M)(e),
                                r = i.account.data.uid;
                            if (r && !e.playlistsLoadingState.isLoading)
                                try {
                                    ((e.playlistsWithoutTracks = (0, D.wg)([])), (e.playlistsLoadingState.loadingState = F.G.PENDING));
                                    let t = yield a.getCreatedPlaylists({ userId: r, page: 0, pageSize: 1500 });
                                    ((e.playlistsWithoutTracks = (0, D.wg)(t.map(tE.j))), (e.playlistsLoadingState.loadingState = F.G.RESOLVE));
                                } catch (a) {
                                    ((e.playlistsLoadingState.loadingState = F.G.REJECT), t.error(a));
                                }
                        }),
                        fetchPlaylistTrackIds: (0, D.L3)(function* (t) {
                            let { user: a } = (0, _.M)(e),
                                i = a.account.data.uid;
                            if (!i || e.tracksLoadingState.isLoading) return null;
                            let { usersResource: r, modelActionsLogger: l } = (0, D._$)(e);
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
            var ds = a(39499),
                dn = a(98953);
            let dd = { width: '614', height: '556' },
                dg = { width: '100%', height: '240' },
                du = (e) => ({ width: e ? dg.width : dd.width, height: e ? dg.height : dd.height }),
                dc = { width: '614', height: '244' },
                dm = { width: '100%', height: '240' };
            var dy = a(10285),
                dp = a(42668),
                db = a(21944),
                dE = a(71594);
            let dv = (e) => e.replace(db.ew, ''),
                dS = (e) => (dE.s.test(e) ? e : ''.concat(e).concat(db.ew)),
                dK = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: r } = e,
                        l = dv(t),
                        s = dv(a),
                        n = dS(t),
                        o = dS(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(n, ';height:')
                        .concat(o, ';" width="')
                        .concat(l, '" height="')
                        .concat(s, '" src="')
                        .concat(i, '">')
                        .concat(r, '</iframe>');
                },
                dI = D.gK.model({ width: D.gK.string, height: D.gK.string }),
                dL = dI
                    .props({
                        id: D.gK.number,
                        type: D.gK.literal(dn.Y.ALBUM),
                        title: D.gK.string,
                        path: D.gK.string,
                        artistName: D.gK.maybeNull(D.gK.string),
                        artistId: D.gK.maybeNull(D.gK.string),
                        listenMessage: D.gK.maybeNull(D.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, _.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/album/').concat(a);
                                })({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, _.M)(e),
                                    { config: a } = (0, D._$)(e);
                                return ''.concat((0, dy.r)(a.iframe.entityBaseUrl, t.tld, dp.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, _.M)(e),
                                    { config: a } = (0, D._$)(e);
                                return ''.concat((0, dy.r)(a.iframe.entityBaseUrl, t.tld, dp.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return dK({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
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
                dT = dI
                    .props({
                        id: D.gK.string,
                        type: D.gK.literal(dn.Y.PLAYLIST),
                        title: D.gK.maybeNull(D.gK.string),
                        path: D.gK.string,
                        ownerLogin: D.gK.maybeNull(D.gK.string),
                        ownerName: D.gK.maybeNull(D.gK.string),
                        listenMessage: D.gK.maybeNull(D.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, _.M)(e);
                                return ((e) => {
                                    let { tld: t, ownerLogin: a, id: i } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/playlist/').concat(a, '/').concat(i);
                                })({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, _.M)(e),
                                    { config: a } = (0, D._$)(e);
                                return ''.concat((0, dy.r)(a.iframe.entityBaseUrl, t.tld, dp.B)).concat(e.path);
                            },
                            get iframeCode() {
                                var i;
                                return dK({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
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
                            let a, i, r, l, s, n;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, _.M)(e);
                            e.listenMessage = t(
                                ((r = e.entityUri),
                                (l = e.title),
                                (s = e.ownerName),
                                (a = o.tld),
                                (i = e.ownerLogin),
                                (n = 'https://music.yandex.'.concat(a, '/users/').concat(i)),
                                '<a href="'.concat(r, '">').concat(l, '</a> — <a href="').concat(n, '">').concat(s, '</a>')),
                            );
                        },
                    })),
                dh = dI
                    .props({
                        id: D.gK.string,
                        albumId: D.gK.maybeNull(D.gK.number),
                        type: D.gK.literal(dn.Y.TRACK),
                        title: D.gK.string,
                        path: D.gK.string,
                        artistName: D.gK.maybeNull(D.gK.string),
                        artistId: D.gK.maybeNull(D.gK.string),
                        listenMessage: D.gK.maybeNull(D.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, _.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a, albumId: i } = e;
                                    return void 0 !== i
                                        ? 'https://music.yandex.'.concat(t, '/iframe/album/').concat(i, '/track/').concat(a)
                                        : 'https://music.yandex.'.concat(t, '/iframe/track/').concat(a);
                                })({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, _.M)(e),
                                    { config: a } = (0, D._$)(e);
                                return ''.concat((0, dy.r)(a.iframe.entityBaseUrl, t.tld, dp.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, _.M)(e),
                                    { config: a } = (0, D._$)(e);
                                return ''.concat((0, dy.r)(a.iframe.entityBaseUrl, t.tld, dp.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var i;
                                return dK({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
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
                dN = D.gK.union(dh, dL, dT),
                dA = D.gK.model({ entity: D.gK.maybeNull(dN), modal: se.q }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, _.M)(e);
                        ((e.entity = ((e, t) => {
                            if (e.variant === dn.Y.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: i, title: r, path: l, trackArtistName: s, trackArtistId: n, trackAlbumId: o, isMobile: d } = e;
                                    return (0, D.wg)({
                                        id: i,
                                        type: a,
                                        albumId: o,
                                        title: r,
                                        path: l,
                                        artistName: null != s ? s : null,
                                        artistId: null != n ? n : null,
                                        ...{ width: (t = d) ? dm.width : dc.width, height: t ? dm.height : dc.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === dn.Y.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new ds.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: r, albumArtistName: l, albumArtistId: s, isMobile: n } = e;
                                    return (0, D.wg)({ id: a, type: t, title: i, path: r, artistName: null != l ? l : null, artistId: null != s ? s : null, ...du(n) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === dn.Y.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: r, playlistOwnerName: l, playlistOwnerLogin: s, isMobile: n } = e;
                                    return (0, D.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != i ? i : null,
                                        path: null != r ? r : null,
                                        ownerName: l,
                                        ownerLogin: s,
                                        ...du(n),
                                    });
                                })({ ...e, isMobile: t });
                            throw new ds.t('Unknown variant');
                        })({ ...t, title: (0, h.ky)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open());
                    },
                    closeModal() {
                        (e.modal.close(), (e.entity = null));
                    },
                })),
                df = D.gK
                    .compose(
                        D.gK.model('SharedVibe', {
                            shareId: D.gK.maybeNull(D.gK.string),
                            vibe: D.gK.maybeNull(eX.G),
                            modal: D.gK.optional(se.q, {}),
                            unavailableModal: D.gK.optional(se.q, {}),
                        }),
                        ee.X,
                        w.p,
                    )
                    .actions((e) => {
                        let t = {
                            getData: (0, D.L3)(function* (a, i) {
                                if (e.isLoading) return;
                                let { waveResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                (t.reset(), (e.shareId = a));
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let t = i;
                                    if ((t || (t = (yield r.getShare({ shareId: a })).data), e.shareId !== a || e.isNeededToLoad || e.isResolved)) return;
                                    ((e.vibe = (0, D.wg)((0, em.l)(t.wave, t.agent))), (e.loadingState = F.G.RESOLVE));
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
                dC = D.gK.model('Network', { isOffline: D.gK.optional(D.gK.boolean, !1) }),
                dR = D.gK.model('Entity', { progress: D.gK.maybe(D.gK.number), loadingState: D.gK.enumeration(Object.values(V.DT)) }),
                dk = D.gK
                    .model('Slam', { networkStatus: dC, offlineMode: D.gK.maybe(D.gK.boolean), tracks: D.gK.map(dR) })
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
                                    let [a] = (0, im.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, im.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [i] = (0, im.d)(a);
                                        return i && t.isTrackDownloaded(i) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, D._n)(e)) return !1;
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
                            e.tracks = (0, D.wg)(t);
                        },
                        setOfflineMode: function (t) {
                            let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                { localStorage: i } = (0, D._$)(e);
                            ((e.offlineMode = t), a && i.set(l6.c.OfflineMode, t));
                        },
                    }));
            var dP = a(33396),
                dD = a(16473),
                d_ = a(28692);
            let dO = [oi.MT.PLAYING, oi.MT.LOADING_MEDIA_SOURCE, oi.MT.BUFFERING],
                dw = D.gK.model('UnloadedEntityMeta', { id: D.gK.union(D.gK.number, D.gK.string), albumId: D.gK.maybe(D.gK.union(D.gK.number, D.gK.string)) }),
                dG = D.gK.model('UnloadedEntityData', { meta: dw, type: D.gK.literal(oi.z4.Unloaded) }),
                dM = D.gK
                    .model('BaseSonataState', {
                        contextType: D.gK.maybeNull(D.gK.enumeration(Object.values(nP.K))),
                        contextId: D.gK.maybeNull(D.gK.string),
                        entityMeta: D.gK.maybeNull(os),
                        status: D.gK.enumeration(Object.values(oi.MT)),
                        canMoveForward: D.gK.boolean,
                        canMoveBackward: D.gK.boolean,
                        canSpeed: D.gK.boolean,
                        repeatMode: D.gK.enumeration(Object.values(d_.pM)),
                        canChangeRepeatMode: D.gK.boolean,
                        volume: D.gK.maybe(D.gK.number),
                        speed: D.gK.maybe(D.gK.number),
                        position: D.gK.maybeNull(D.gK.number),
                        duration: D.gK.maybeNull(D.gK.number),
                        canShuffle: D.gK.boolean,
                        shuffle: D.gK.boolean,
                        quality: D.gK.enumeration(Object.values(dD.e)),
                        unloadedEntitiesData: D.gK.maybe(D.gK.array(dG)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, sp.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === nP.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === nP.K.Generative;
                        },
                        get isPaused() {
                            return e.status === oi.MT.PAUSED;
                        },
                        get isPlaying() {
                            return dO.includes(e.status);
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === d_.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === d_.pM.ONE;
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
                            t && t.data.meta && (e.entityMeta && (0, D.Yo)(e.entityMeta), (e.entityMeta = ol(t)));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, dP.A)(t)), (e.unloadedEntitiesData = (0, D.wg)(t)));
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
                        playlistFilter: D.gK.maybe(D.gK.string),
                        areCoresRegistered: D.gK.boolean,
                        isVHCoreRegistered: D.gK.boolean,
                        shouldApplyYnisonState: D.gK.optional(D.gK.boolean, !0),
                        isCrossFadeEnabled: D.gK.boolean,
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
                            let { containerStorage: a } = (0, D._$)(e);
                            (a.set(l6.c.CrossFadeMode, t, { expires: 365 }), (e.isCrossFadeEnabled = t));
                        },
                    }))
                    .named('SonataState'),
                dU = lI.Z.props({ tracksLoadingState: D.gK.optional(ee.X, { loadingState: F.G.IDLE }) }),
                dB = D.gK
                    .model('ContextMenuTrackPlaylists', { playlists: D.gK.array(dU), playlistsLoadingState: D.gK.optional(ee.X, { loadingState: F.G.IDLE }) })
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
                            (0, D.Nh)(e, {});
                        },
                        loadPlaylistsWithoutTracks: (0, D.L3)(function* () {
                            let t = (0, _.M)(e).user.account.data.uid;
                            if (!t || !e.playlistsLoadingState.isNeededToLoad) return;
                            let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e);
                            e.playlistsLoadingState.loadingState = F.G.PENDING;
                            try {
                                let i = yield a.getCreatedPlaylists({ userId: t });
                                ((e.playlists = (0, D.wg)(i.map(tE.j))), (e.playlistsLoadingState.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                ((e.playlistsLoadingState.loadingState = F.G.REJECT), i.error(t));
                            }
                        }),
                        fetchPlaylistTracks: (0, D.L3)(function* (t, a) {
                            let i = e
                                    .getFilteredPlaylists(a)
                                    .slice(t, t + 20)
                                    .filter((e) => e.tracksLoadingState.isNeededToLoad),
                                r = (0, _.M)(e).user.account.data.uid;
                            if (!r || !i.length) return it.F.OK;
                            let { usersResource: l, modelActionsLogger: s } = (0, D._$)(e);
                            i.forEach((e) => {
                                e.tracksLoadingState.loadingState = F.G.PENDING;
                            });
                            try {
                                let e = yield l.getPlaylistsByKinds({ userId: r, kinds: i.map((e) => e.kind), withTracks: !0 });
                                for (let t of i.filter(D._n)) {
                                    let a = e.find((e) => e.kind === t.kind);
                                    (a ? ((t.tracks = (0, D.wg)(a.tracks.map(lS))), (t.revision = a.revision)) : (t.isAvailable = !1),
                                        (t.tracksLoadingState.loadingState = F.G.RESOLVE));
                                }
                                return it.F.OK;
                            } catch (e) {
                                return (
                                    i.filter(D._n).forEach((e) => {
                                        e.tracksLoadingState.loadingState = F.G.REJECT;
                                    }),
                                    s.error(e),
                                    it.F.ERROR
                                );
                            }
                        }),
                    })),
                dV = D.gK.model('Credit', { title: D.gK.string, value: D.gK.string }),
                dF = D.gK
                    .model('CurrentTrackInfo', {
                        id: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                        albumId: D.gK.maybeNull(D.gK.number),
                        isUGC: D.gK.maybeNull(D.gK.boolean),
                        trackLoadingState: D.gK.enumeration(Object.values(F.G)),
                        fullTrack: D.gK.maybeNull(Z.v),
                        creditsLoadingState: D.gK.enumeration(Object.values(F.G)),
                        credits: D.gK.maybeNull(D.gK.array(dV)),
                        modal: se.q,
                        fullDescription: D.gK.maybeNull(D.gK.string),
                        descriptionLoadingState: D.gK.enumeration(Object.values(F.G)),
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
                        getFullTrack: (0, D.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.id || e.trackLoadingState === F.G.PENDING) return null;
                            try {
                                e.trackLoadingState = F.G.PENDING;
                                let a = yield t.getFullInfoTrack({ trackId: e.id, albumId: e.albumId });
                                if (!a) return null;
                                ((e.fullTrack = (0, D.wg)((0, tl.v)(a.track))), (e.trackLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        getFullDescription: (0, D.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e);
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
                        getTrackMeta: (0, D.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.id || e.trackLoadingState === F.G.PENDING) return null;
                            try {
                                e.trackLoadingState = F.G.PENDING;
                                let a = yield t.getTracksMeta({ trackIds: [e.id], removeDuplicates: !0 });
                                if (!a || !a.length) return null;
                                a[0] && ((e.fullTrack = (0, D.wg)((0, tl.v)(a[0]))), (e.trackLoadingState = F.G.RESOLVE));
                            } catch (t) {
                                (a.error(t), (e.trackLoadingState = F.G.REJECT));
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, D.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (!e.id || e.creditsLoadingState === F.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = F.G.PENDING;
                                let a = yield t.getCredits({ trackId: e.id });
                                ((e.credits = (0, D.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = F.G.RESOLVE));
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
                dx = D.gK.model('TrackComplaint', { trackId: D.gK.maybeNull(D.gK.string), modal: se.q }).actions((e) => ({
                    setTrackId(t) {
                        e.trackId = t;
                    },
                    reset() {
                        e.trackId = null;
                    },
                })),
                dj = D.gK
                    .compose(
                        D.gK.model('TrackLyrics', {
                            lyrics: D.gK.maybeNull(D.gK.string),
                            major: D.gK.maybeNull(om),
                            lyricId: D.gK.maybeNull(D.gK.number),
                            writers: D.gK.array(D.gK.string),
                            externalLyricId: D.gK.maybeNull(D.gK.string),
                            modal: se.q,
                            track: D.gK.maybeNull(Z.v),
                            trackId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            currentTrackId: D.gK.maybeNull(D.gK.union(D.gK.string, D.gK.number)),
                            hasError: D.gK.optional(D.gK.boolean, !1),
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
                                e.track = (0, D.wg)({ ...(0, sp.HO)(t) });
                            },
                            resetShouldShowError() {
                                e.hasError = !1;
                            },
                            getLyrics: (0, D.L3)(function* (a) {
                                let { config: i, tracksResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState !== F.G.PENDING && e.currentTrackId !== a)
                                    try {
                                        ((e.loadingState = F.G.PENDING), (e.currentTrackId = a));
                                        let { downloadUrl: l, major: s, externalLyricId: n, lyricId: o, writers: g } = yield r.getLyrics(ou(i, a, d.TEXT));
                                        ((e.major = oc(s)),
                                            (e.externalLyricId = n),
                                            (e.lyricId = o),
                                            (e.writers = (0, D.wg)(g || [])),
                                            yield t.downloadLyrics(l),
                                            (e.loadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        ((e.loadingState = F.G.REJECT), (e.currentTrackId = null), (e.hasError = !0), e.modal.isOpened && e.modal.close(), l.error(t));
                                    }
                            }),
                            downloadLyrics: (0, D.L3)(function* (t) {
                                let { prefixlessResource: a } = (0, D._$)(e);
                                e.lyrics = yield a.getLyricsText(t);
                            }),
                            sendViews: (0, D.L3)(function* (t) {
                                let { trackId: a, albumId: i } = t,
                                    { lyricViewsResource: r, modelActionsLogger: l } = (0, D._$)(e);
                                if (e.loadingState === F.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield r.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, oo.A)(),
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
            var dW = a(68376),
                dX = a(51235);
            !(function (e) {
                ((e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable'));
            })(y || (y = {}));
            var d$ = (function (e) {
                    return ((e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e);
                })({}),
                dY = a(32932);
            (p || (p = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let dJ = D.gK
                .model('TrackUgcUploadModel', {
                    loadingState: D.gK.enumeration(Object.values(dY.p)),
                    errorReason: D.gK.maybeNull(D.gK.enumeration(Object.values(d$))),
                    playlistKind: D.gK.number,
                    trackId: D.gK.maybeNull(D.gK.string),
                    uploadUrl: D.gK.maybeNull(D.gK.string),
                })
                .volatile(() => ({ file: null, abortController: null }))
                .actions((e) => {
                    let t = {
                        setFile(t) {
                            e.file = t;
                        },
                        getUploadUrl: (0, D.L3)(function* () {
                            if (!(0, D._n)(e)) return;
                            let { loaderResource: t, modelActionsLogger: a } = (0, D._$)(e),
                                { user: i } = (0, _.M)(e);
                            if (![dY.p.IDLE, dY.p.REJECT].includes(e.loadingState)) return;
                            e.loadingState = dY.p.PREPARE;
                            let r = i.account.data.uid;
                            if (r)
                                try {
                                    var l;
                                    let a = null == (l = e.file) ? void 0 : l.name,
                                        i = yield t.getUploadUrl({ playlistId: ''.concat(r, ':').concat(e.playlistKind), uid: r, path: a });
                                    if (i && 'result' in i && i.result === p.TOO_MANY_FILES) {
                                        ((e.loadingState = dY.p.REJECT), (e.errorReason = d$.TOO_MANY_FILES));
                                        return;
                                    }
                                    if (i && 'post-target' in i && 'ugc-track-id' in i) {
                                        ((e.uploadUrl = i['post-target']), (e.trackId = i['ugc-track-id']));
                                        return;
                                    }
                                    ((e.errorReason = d$.UNKNOWN_ERROR), (e.loadingState = dY.p.REJECT));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = dY.p.REJECT), a.error(t));
                                    return;
                                }
                        }),
                        uploadFile: (0, D.L3)(function* () {
                            if (!(0, D._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, D._$)(e);
                            if (e.loadingState === dY.p.PREPARE && e.uploadUrl && e.file) {
                                e.loadingState = dY.p.UPLOADING;
                                try {
                                    let a = new FormData();
                                    a.append('file', e.file);
                                    let i = new AbortController(),
                                        r = i.signal;
                                    ((e.abortController = i), yield t.uploadFile({ url: e.uploadUrl, formData: a }, { signal: r }), (e.loadingState = dY.p.PROCESSING));
                                    return;
                                } catch (t) {
                                    ((e.loadingState = dY.p.REJECT), a.error(t));
                                    return;
                                }
                            }
                        }),
                        runUpload: (0, D.L3)(function* () {
                            (0, D._n)(e) && (yield t.getUploadUrl(), e.loadingState !== dY.p.REJECT && (yield t.uploadFile()));
                        }),
                        retryUpload() {
                            if ((this.reset(), !(0, D._n)(e))) return;
                            let { ugcUploadCenter: t } = (0, _.M)(e);
                            t.runUploadTracksQueue();
                        },
                        abortUpload() {
                            var t;
                            if (((e.loadingState = dY.p.CANCELLED), null == (t = e.abortController) || t.abort(), !(0, D._n)(e))) return;
                            let { ugcUploadCenter: a } = (0, _.M)(e);
                            a.clearCancelledUploads();
                        },
                        reset() {
                            ((e.loadingState = dY.p.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null));
                        },
                    };
                    return t;
                });
            var dq = a(84985);
            let dH = D.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: tG.$, type: D.gK.enumeration(Object.values(dq.u)) }),
                dz = D.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: D.gK.array(dH) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, sp.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, i) {
                                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
                            },
                            showAllNotifications() {
                                let t = (0, sp.HO)(e.pairs);
                                return ((e.pairs = (0, D.wg)([])), t);
                            },
                        };
                        return t;
                    }),
                dQ = D.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: tG.$, file: dJ }),
                dZ = D.gK
                    .model('UgcUploadCenterModel', { tracks: D.gK.array(dQ), notifications: dz, checkProcessingTracksAttempts: D.gK.number })
                    .views((e) => ({
                        get isAvailable() {
                            let { experiments: t } = (0, _.M)(e);
                            return !t.checkExperiment(O.z.WebNextUgcUploadDegradation, 'on');
                        },
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(dY.p.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(dY.p.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(dY.p.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(dY.p.PROCESSING);
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
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, dq.u.FILE_TOO_LARGE);
                                        let i = dJ.create({ loadingState: dY.p.IDLE, playlistKind: a.kind });
                                        i.setFile(t);
                                        let r = dQ.create({ file: i, playlist: (0, sp.HO)(a) });
                                        e.tracks.unshift(r);
                                    }),
                                    !(0, D._n)(e))
                                )
                                    return;
                                let { playlist: i } = (0, _.M)(e);
                                (i.search.setText(''), i.search.reset(), this.runUploadTracksQueue());
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let i = a[a.length - 1];
                                    (i &&
                                        (await i.runUpload(),
                                        i.loadingState === dY.p.REJECT &&
                                            i.errorReason === d$.TOO_MANY_FILES &&
                                            ((e.tracks = (0, D.wg)([])), t.addNotificationForPlaylistKind(i.playlistKind, dq.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue());
                                }
                            },
                            checkProcessingTracks: (0, D.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, D._$)(e),
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
                                            a && ((a.file.loadingState = dY.p.RESOLVE), a.file.trackId && r.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    i.error(e);
                                }
                                return (t.checkNotifications(r), t.moveTracksFromUploadCenterToPlaylist(), null);
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, D._n)(e)) return;
                                let { playlist: a } = (0, _.M)(e);
                                ((null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === dY.p.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, D.wg)(e.tracks.filter((e) => e.file.loadingState !== dY.p.RESOLVE))));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, D.wg)(e.tracks.filter((e) => e.file.loadingState !== dY.p.CANCELLED));
                            },
                            checkNotifications(a) {
                                let i = new Set();
                                (e.tracks.forEach((e) => i.add(e.playlist.kind)),
                                    i.forEach((i) => {
                                        let r = e.getUploadingTracksByPlaylistKind(i);
                                        if (!(!r.length || r.some((e) => e.loadingState !== dY.p.RESOLVE && e.loadingState !== dY.p.REJECT)))
                                            if (r.some((e) => e.loadingState === dY.p.REJECT)) {
                                                let l = !0;
                                                if (a && a.length) {
                                                    let t = r.map((e) => e.trackId).filter((e) => e),
                                                        i = (0, dW.A)(t, a, dX.A);
                                                    i.length &&
                                                        (l = i
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === dY.p.REJECT));
                                                }
                                                l && t.addNotificationForPlaylistKind(i, dq.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(i, dq.u.SUCCESS);
                                    }));
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let i = e.getPlaylistByKind(t);
                                i && e.notifications.addNonexistentNotification(i, a);
                            },
                        };
                        return t;
                    }),
                d0 = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                d1 = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, D.wg)(a) }
                    );
                };
            var d3 = a(80693);
            let d2 = D.gK.model('ContextItem', {
                    title: D.gK.string,
                    seed: D.gK.string,
                    specialContext: D.gK.boolean,
                    specialContextImage: D.gK.optional(D.gK.string, ''),
                }),
                d5 = D.gK.model('RestrictonValue', { value: D.gK.string, title: D.gK.string, seed: D.gK.string, imageUrl: D.gK.maybe(D.gK.string) }),
                d8 = D.gK.model('Restricton', { type: D.gK.enumeration(Object.values(d3.s)), title: D.gK.string, values: D.gK.array(d5) }),
                d6 = D.gK
                    .compose(
                        D.gK.model('VibeSettings', {
                            contextItems: D.gK.array(d2),
                            diversity: D.gK.maybeNull(d8),
                            moodEnergy: D.gK.maybeNull(d8),
                            language: D.gK.maybeNull(d8),
                            modal: se.q,
                        }),
                        ee.X,
                    )
                    .actions((e) => ({
                        getData: (0, D.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: i } = (0, D._$)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    var r, l, s, n;
                                    e.loadingState = F.G.PENDING;
                                    let i = yield a.waveSettings(t);
                                    ((null == i || null == (r = i.settingRestrictions) ? void 0 : r.diversity) &&
                                        (e.diversity = d1(d3.s.DIVERSITY, i.settingRestrictions.diversity)),
                                        (null == i || null == (l = i.settingRestrictions) ? void 0 : l.moodEnergy) &&
                                            (e.moodEnergy = d1(d3.s.MOOD_ENERGY, i.settingRestrictions.moodEnergy)),
                                        (null == i || null == (s = i.settingRestrictions) ? void 0 : s.language) &&
                                            (e.language = d1(d3.s.LANGUAGE, i.settingRestrictions.language)));
                                    let o =
                                        Array.isArray(null == i ? void 0 : i.blocks) &&
                                        (null == i || null == (n = i.blocks) ? void 0 : n.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    (o && Array.isArray(o.items) && (e.contextItems = (0, D.wg)(o.items.map(d0))),
                                        e.loadingState !== F.G.IDLE && (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), e.loadingState !== F.G.IDLE && (e.loadingState = F.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = F.G.IDLE),
                                (e.contextItems = (0, D.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close());
                        },
                    }));
            (!(function (e) {
                ((e.ALICE = 'alice'), (e.LUMEN = 'lumen'));
            })(b || (b = {})),
                (function (e) {
                    ((e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT'), (e.LUMEN = 'LUMEN'), (e.PERSONAL = 'PERSONAL'));
                })(E || (E = {})));
            let d4 = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            var d9 = a(87999),
                d7 = a(48404);
            let ge = D.gK
                    .model('WordsBigCardPanel', {
                        isOpened: D.gK.optional(D.gK.boolean, !1),
                        trackId: D.gK.maybe(D.gK.string),
                        cardId: D.gK.maybe(D.gK.string),
                        submittedFeedback: D.gK.maybeNull(D.gK.enumeration(Object.values(d7.a))),
                        isFeedbackMessageVisible: D.gK.optional(D.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get card() {
                                return (0, _.M)(e).words.getCardForTrack(e.trackId);
                            },
                            get bigCard() {
                                var a;
                                let { activeBigCard: i } = (0, _.M)(e).words;
                                return (null == i ? void 0 : i.id) === (null == (a = t.card) ? void 0 : a.bigCardId) ? i : void 0;
                            },
                            get text() {
                                var i, r, l;
                                return null != (l = null == (i = t.bigCard) ? void 0 : i.text) ? l : null == (r = t.card) ? void 0 : r.text;
                            },
                            get mainObjectType() {
                                var s;
                                return (null == (s = t.card) ? void 0 : s.isPersonal) ? d9.DomainObjectType.PersonalFact : d9.DomainObjectType.Fact;
                            },
                            get objectType() {
                                var n, o, d;
                                if (t.bigCard) return (null == (o = t.card) ? void 0 : o.isPersonal) ? d9.DomainObjectType.PersonalBigFact : d9.DomainObjectType.BigFact;
                                return null != (d = null == (n = t.card) ? void 0 : n.domainObjectType) ? d : t.mainObjectType;
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
                                let { words: a } = (0, _.M)(e),
                                    i = t.card;
                                return void 0 !== i && (!i.hasBigCard || void 0 !== t.bigCard || a.bigCardLoadingState.isRejected);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        open(t) {
                            let { words: a } = (0, _.M)(e),
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
                gt = new Set(Object.values(d9.DomainObjectType)),
                ga = D.gK.model('WordsCardAction', { title: D.gK.string, url: D.gK.string }),
                gi = D.gK.model('WordsCardSource', { title: D.gK.string, url: D.gK.string, faviconUrl: D.gK.maybeNull(D.gK.string) }),
                gr = D.gK
                    .model('WordsCard', {
                        id: D.gK.string,
                        text: D.gK.string,
                        tags: D.gK.maybe(D.gK.array(D.gK.string)),
                        action: D.gK.maybe(ga),
                        actions: D.gK.maybe(D.gK.array(gi)),
                        bigCardIds: D.gK.maybe(D.gK.array(D.gK.string)),
                        feedbackState: D.gK.maybe(D.gK.string),
                        feedbackLoadingState: D.gK.enumeration(Object.values(F.G)),
                        analyticObjectType: D.gK.maybe(D.gK.string),
                        analyticObjectId: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get isFact() {
                                var a;
                                if (!(0, D._n)(e)) return !1;
                                return null == (a = e.tags) ? void 0 : a.includes(E.FACT);
                            },
                            get isLumen() {
                                var i;
                                if (!(0, D._n)(e)) return !1;
                                return !!(t.isFact || (null == (i = e.tags) ? void 0 : i.includes(E.LUMEN)));
                            },
                            get isPersonal() {
                                var r;
                                if (!(0, D._n)(e)) return !1;
                                return t.withBigCardPanel && (null == (r = e.tags) ? void 0 : r.includes(E.PERSONAL));
                            },
                            get isInformer() {
                                var l, s;
                                if (!(0, D._n)(e)) return !1;
                                return !(null == (l = e.tags) ? void 0 : l.includes(E.FACT)) && !!(null == (s = e.action) ? void 0 : s.url);
                            },
                            get bigCardId() {
                                var n;
                                return null == (n = e.bigCardIds) ? void 0 : n[0];
                            },
                            get hasBigCard() {
                                var o;
                                return !!(null == (o = e.bigCardIds) ? void 0 : o[0]);
                            },
                            get isLiked() {
                                return e.feedbackState === d7.a.LIKE;
                            },
                            get isDisliked() {
                                return e.feedbackState === d7.a.DISLIKE;
                            },
                            get isFeedbackPending() {
                                return e.feedbackLoadingState === F.G.PENDING;
                            },
                            get withDirectLinkNavigation() {
                                if (!(0, D._n)(e)) return !1;
                                let { experiments: a } = (0, _.M)(e);
                                return a.checkExperiment(O.z.WebNextWaveScreenWordsInWaveDirectLinks, 'on') && !!t.isInformer;
                            },
                            get withBigCardPanel() {
                                if (!(0, D._n)(e)) return !1;
                                let { words: t } = (0, _.M)(e);
                                return t.isBigCardPanelEnabled;
                            },
                            get isBigCardFullscreenEnabled() {
                                if (!(0, D._n)(e)) return !1;
                                let { experiments: a } = (0, _.M)(e);
                                return !t.withBigCardPanel && t.hasBigCard && a.checkExperiment(O.z.WebNextWaveScreenWordsInWaveBigReplica, 'on');
                            },
                            get domainObjectType() {
                                return ((e) => 'string' == typeof e && gt.has(e))(e.analyticObjectType) ? e.analyticObjectType : void 0;
                            },
                            get isLumenFaceAvatarEnabled() {
                                return !!(t.withBigCardPanel && t.isLumen && e.text);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        sendFeedback: (0, D.L3)(function* (t) {
                            let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(0, D._n)(e) || e.isFeedbackPending) return;
                            let { wordsResource: i } = (0, D._$)(e),
                                r = e.feedbackState;
                            ((e.feedbackLoadingState = F.G.PENDING), a && (e.feedbackState = t));
                            try {
                                (yield i.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }),
                                    (0, D._n)(e) && ((e.feedbackState = t), (e.feedbackLoadingState = F.G.RESOLVE)));
                            } catch (t) {
                                throw ((0, D._n)(e) && (a && (e.feedbackState = r), (e.feedbackLoadingState = F.G.REJECT)), t);
                            }
                        }),
                    })),
                gl = D.gK
                    .model('Words', {
                        cards: D.gK.map(gr),
                        activeBigCard: D.gK.maybe(D.gK.frozen()),
                        loadingState: D.gK.enumeration(Object.values(F.G)),
                        bigCardLoadingState: ee.X,
                        loadingTrackIds: D.gK.map(D.gK.boolean),
                        bigCardFullscreen: se.q,
                        bigCardPanel: D.gK.optional(ge, {}),
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
                            let { experiments: t } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextWaveScreenWordsInWave, 'on');
                        },
                        get isBigCardPanelEnabled() {
                            let { experiments: t, lumen: a, user: i } = (0, _.M)(e),
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
                        loadCards: (0, D.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: i } = (0, D._$)(e),
                                r = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== r.length) {
                                r.forEach((t) => {
                                    (e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0));
                                });
                                try {
                                    var l, s, n, o, d, g;
                                    e.loadingState = F.G.PENDING;
                                    let t = yield null != (n = null == (l = e.viewedStore) ? void 0 : l.getViewedIds()) ? n : Promise.resolve([]),
                                        i = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        u = yield null != (o = null == (s = e.viewedStore) ? void 0 : s.getViewedBigCards()) ? o : Promise.resolve([]),
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
                                        { concerts: y } = (0, _.M)(e),
                                        p = y.concertsLocationForRequest,
                                        v = yield a.cards({
                                            trackIds: r,
                                            viewedCards: i,
                                            viewedBigCards: m,
                                            locations: p,
                                            actionProvider: e.isBigCardPanelEnabled ? b.LUMEN : b.ALICE,
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
                                                        var t, a, i, r, l, s;
                                                        let { card: n, feedbackState: o } = e,
                                                            d = n.action
                                                                ? ((r = n.action),
                                                                  (null == (t = n.tags) ? void 0 : t.includes(E.DONATION))
                                                                      ? rY(r.link)
                                                                          ? { title: r.title, url: r.link }
                                                                          : void 0
                                                                      : { title: r.title, url: null != (s = null != (l = r.weblink) ? l : r.link) ? s : '' })
                                                                : void 0,
                                                            g = Array.isArray(n.tags) ? n.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            u = Array.isArray(n.actions) ? n.actions.map(d4) : void 0,
                                                            c = Array.isArray(n.bigCardIds) ? n.bigCardIds.filter((e) => 'string' == typeof e) : void 0,
                                                            m = null == (a = n.analyticPayload) ? void 0 : a.objectType,
                                                            y = null == (i = n.analyticPayload) ? void 0 : i.objectId;
                                                        return (0, D.wg)({
                                                            id: n.id,
                                                            text: n.text,
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
                        loadBigCard: (0, D.L3)(function* (t, a, i) {
                            var r;
                            let { wordsResource: l, modelActionsLogger: s } = (0, D._$)(e),
                                n = e.activeBigCardId === t;
                            if (((e.activeBigCardId = t), (null == (r = e.activeBigCard) ? void 0 : r.id) === t)) {
                                e.bigCardLoadingState.loadingState = F.G.RESOLVE;
                                return;
                            }
                            if (!n || !e.bigCardLoadingState.isLoading) {
                                ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = F.G.PENDING));
                                try {
                                    let r = yield l.bigCards({
                                        bigCardIds: [t],
                                        bigCardContexts: [{ bigCardId: t, trackId: a, cardId: i }],
                                        actionProvider: e.isBigCardPanelEnabled ? b.LUMEN : b.ALICE,
                                    });
                                    if (e.activeBigCardId !== t) return;
                                    let s = r.find((e) => e.id === t);
                                    if (s) {
                                        ((e.activeBigCard = s), (e.bigCardLoadingState.loadingState = F.G.RESOLVE));
                                        return;
                                    }
                                    e.bigCardLoadingState.loadingState = F.G.REJECT;
                                } catch (a) {
                                    (e.activeBigCardId === t && ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = F.G.REJECT)), s.error(a));
                                }
                            }
                        }),
                    })),
                gs = D.gK.model('FreeAccess').views((e) => {
                    let t = {
                        get isFreeDesktopUser() {
                            let { user: t } = (0, _.M)(e);
                            return !t.hasPlus && T.NN;
                        },
                        get isFreeWebUser() {
                            let { user: t } = (0, _.M)(e);
                            return !t.hasPlus && T.$3;
                        },
                        get isFreeUser() {
                            return t.isFreeDesktopUser || t.isFreeWebUser;
                        },
                        get isFreePlaybackDisabled() {
                            var a, i, r;
                            let { user: t, settings: l, experiments: s } = (0, _.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (i = s.getExperiment(O.z.WebNextDesktopWebFreemium)) || null == (a = i.value) ? void 0 : a.closeListening) === 'on' &&
                                !(null == (r = l.browserInfo) ? void 0 : r.isTouch) &&
                                t.isAuthorized
                            );
                        },
                        get limitedFreePlayback() {
                            var l, s, n;
                            let { user: t, settings: a, experiments: i } = (0, _.M)(e);
                            return (
                                !t.hasPlus &&
                                (null == (s = i.getExperiment(O.z.WebNextDesktopWebFreemium)) || null == (l = s.value) ? void 0 : l.limitListening) === 'on' &&
                                !(null == (n = a.browserInfo) ? void 0 : n.isTouch) &&
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
            let gn = [
                    {
                        [iH.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [iH.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [iH.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [iH.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [iH.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [iH.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                go = (e) => {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                    return t;
                },
                gd = (e) =>
                    (0, D.wg)({
                        cover: (0, tm.p)(e.cover),
                        fullCover: e.fullCover ? (0, tm.p)(e.fullCover) : void 0,
                        faceCover: e.faceCover ? (0, tm.p)(e.faceCover) : void 0,
                        solidColor: e.solidColor,
                    }),
                gg = D.gK.model('LumenTheme', { cover: eP.$, fullCover: D.gK.maybe(eP.$), faceCover: D.gK.maybe(eP.$), solidColor: D.gK.maybe(D.gK.string) }),
                gu = D.gK.model('LumenThemes', { light: gg, dark: gg }),
                gc = D.gK
                    .compose(D.gK.model('Lumen', { status: D.gK.maybeNull(D.gK.enumeration(Object.values(v))), themes: D.gK.maybeNull(gu) }), ee.X)
                    .views((e) => ({
                        get isAwakened() {
                            return e.status === v.AWAKENED;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, _.M)(e);
                            return t.checkExperiment(O.z.WebNextQueryToVibeXLumen, 'on');
                        },
                        get isTriedToLoadData() {
                            return !e.isNeededToLoad && !e.isLoading;
                        },
                        get playButtonShowDelay() {
                            var t;
                            let { experiments: a } = (0, _.M)(e),
                                i = null == (t = a.getExperiment(O.z.WebNextQueryToVibeXLumen)) ? void 0 : t.value.playButtonShowDelay;
                            return 'number' != typeof i || Number.isNaN(i) ? 0 : Number(i);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, D.L3)(function* (t) {
                            let { lumenResource: a, modelActionsLogger: i } = (0, D._$)(e),
                                { user: r } = (0, _.M)(e);
                            if (e.loadingState !== F.G.PENDING)
                                try {
                                    e.loadingState = F.G.PENDING;
                                    let i = go(String(r.puid)),
                                        { status: l, themes: s } = yield a.getLumen({ hash: i }, { cacheControl: t ? 'no-cache' : void 0 });
                                    ((e.status = l), (e.themes = { light: gd(s.light), dark: gd(s.dark) }), (e.loadingState = F.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t), (e.loadingState = F.G.REJECT));
                                }
                        }),
                        getFallbackImage: function () {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            return null != (e = gn[go(t) % gn.length]) ? e : gn[0];
                        },
                    }));
            var gm = a(11899),
                gy = a(74591);
            let gp = D.gK
                    .model({
                        modal: se.q,
                        target: D.gK.string,
                        isSilent: D.gK.boolean,
                        tariffOfferName: D.gK.string,
                        offersBatchId: D.gK.string,
                        offersPositionIds: D.gK.string,
                        serviceSessionId: D.gK.string,
                        status: D.gK.enumeration(Object.values(gy.c)),
                    })
                    .views((e) => ({
                        get isSuccess() {
                            return e.status === gy.c.SUCCESS;
                        },
                        get isError() {
                            return e.status === gy.c.ERROR;
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
                            if (((e.status = t), t !== gy.c.SUCCESS)) return;
                            let { experiments: a } = (0, _.M)(e);
                            if (a.isExperimentActive(O.z.WebNextTagSandbox)) {
                                let { tagSandbox: t } = (0, D._$)(e);
                                t.send('plus_subscription_purchased', {});
                            }
                        },
                        reset() {
                            ((e.target = ''),
                                (e.tariffOfferName = ''),
                                (e.offersBatchId = ''),
                                (e.offersPositionIds = ''),
                                (e.serviceSessionId = ''),
                                (e.status = gy.c.IDLE));
                        },
                        onModalOpenChange(t) {
                            (e.modal.onOpenChange(t),
                                !t &&
                                    e.isSuccess &&
                                    window.setTimeout(() => {
                                        window.location.reload();
                                    }, gm.DQ));
                        },
                    })),
                gb = D.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get shouldUserHavePaywall() {
                                let { freeAccess: t, settings: a, user: i } = (0, _.M)(e);
                                return !a.isMobile && T.$3 && 0;
                            },
                            get isPaywallOpen() {
                                let { paywall: t } = (0, _.M)(e);
                                return t.modal.isOpened;
                            },
                            get isPassed() {
                                let { paywall: a, user: i } = (0, _.M)(e);
                                if (!i.account.isResolved || a.modal.isOpened) return !1;
                                return !t.shouldUserHavePaywall || !t.shouldShowOnEnter || a.modal.wasClosed;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, _.M)(e),
                                    i = null == (a = t.getExperiment(O.z.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if ('number' != typeof i || Number.isNaN(i)) return 2592e5;
                                return i;
                            },
                            get intervalMsCrackdown() {
                                var i;
                                let { experiments: t } = (0, _.M)(e),
                                    a = null == (i = t.getExperiment(O.z.WebNextPaywallCrackdownInterval)) ? void 0 : i.value.interval;
                                if ('number' != typeof a || Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var r, l;
                                let { settings: a } = (0, _.M)(e);
                                if (null == (r = a.browserInfo) ? void 0 : r.isMobile) return !1;
                                let { localStorage: i } = (0, D._$)(e),
                                    s = null == (l = i.get(l6.c.DesktopPaywall)) ? void 0 : l.lastOnLoadShowDate;
                                if (void 0 === s) return !0;
                                return new Date(s).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, _.M)(e);
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
                                let { paywall: t } = (0, _.M)(e),
                                    { localStorage: a } = (0, D._$)(e);
                                (t.openModal(), a.set(l6.c.DesktopPaywall, { lastOnLoadShowDate: new Date() }));
                            },
                            clearCrackdownTimeout() {
                                null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                            },
                            startCrackdownTimeout() {
                                let { paywall: a, settings: i, experiments: r } = (0, _.M)(e);
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
                gE = D.gK.model('CreatePlaylist', { meta: D.gK.maybeNull(tG.$) }).actions((e) => ({
                    create: (0, D.L3)(function* (t) {
                        if (!(0, D._n)(e)) return null;
                        let { usersResource: a, modelActionsLogger: i } = (0, D._$)(e),
                            { user: r } = (0, _.M)(e);
                        if (!r.isAuthorized) return null;
                        let l = r.account.data.uid;
                        try {
                            let i = yield a.createPlaylist({ userId: String(l), ...t });
                            return ((e.meta = (0, tE.j)(i)), e.meta.uuid);
                        } catch (e) {
                            return (i.error(e), null);
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                }));
            var gv = a(32353);
            let gS = D.gK.model({ text: D.gK.string, buttonText: D.gK.string, href: D.gK.string }),
                gK = D.gK
                    .compose(D.gK.model('RedAlert', { data: D.gK.maybeNull(gS) }), ee.X)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, _.M)(e);
                            return t.layout !== gv.u.Mobile && !!e.data;
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
                        getData: (0, D.L3)(function* () {
                            if (e.loadingState === F.G.PENDING) return;
                            let { user: t } = (0, _.M)(e),
                                { redAlertResource: a, modelActionsLogger: i } = (0, D._$)(e);
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
                                    return void 0 === t ? null : (0, D.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = F.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), (e.loadingState = F.G.REJECT));
                            }
                        }),
                    }));
            var gI = a(64150),
                gL = a(75914),
                gT = a(89988);
            let gh = (e) => (0, D.wg)({ uri: null == e ? void 0 : e.uri, color: null == e ? void 0 : e.color, videoUrl: null == e ? void 0 : e.videoUrl }),
                gN = (e) => (0, D.wg)({ value: e.value, title: e.title, titleType: e.titleType, subtitle: e.subtitle, cover: e.cover, coverType: e.coverType });
            var gA = a(86165);
            let gf = (e) => {
                    let t = ((e) =>
                        (0, D.wg)({
                            contentBackground: e.contentBackground ? gh(e.contentBackground) : void 0,
                            shareBackground: e.shareBackground ? gh(e.shareBackground) : void 0,
                            slideBackground: e.slideBackground ? gh(e.slideBackground) : void 0,
                            contentLogo: e.contentLogo ? gh(e.contentLogo) : void 0,
                            metaLabel: e.metaLabel,
                            metaLabelTextColor: e.metaLabelTextColor,
                            artists: e.artists,
                            artistTextColor: e.artistTextColor,
                            contentDescription: e.contentDescription,
                        }))(e.data);
                    switch (e.type) {
                        case gA.y.LINEUP:
                            return (0, D.wg)({
                                type: e.type,
                                data: { ...t, eventTagLabel: e.data.eventTagLabel, eventTagLabelTextColor: e.data.eventTagLabelTextColor },
                            });
                        case gA.y.LINEUP_WITH_FESTIVAL:
                            return (0, D.wg)({ type: e.type, data: { ...t, contentImage: gh(e.data.contentImage) } });
                        case gA.y.LINEUP_WITH_FESTIVAL_IMAGE:
                            return (0, D.wg)({
                                type: e.type,
                                data: { ...t, contentImage: gh(e.data.contentImage), festivalTitle: e.data.festivalTitle, festivalTextColor: e.data.festivalTextColor },
                            });
                    }
                },
                gC = (e) => (0, D.wg)({ value: e.value, valueDescription: e.valueDescription, valueSuffix: e.valueSuffix, footer: e.footer, align: e.align }),
                gR = (e) => {
                    var t, a, i, r, l, s, n;
                    return {
                        label: null != (i = e.label) ? i : null,
                        description: null != (r = e.description) ? r : null,
                        track: {
                            title: null != (l = e.track.title) ? l : null,
                            coverUri: null != (s = null == (t = e.track.cover) ? void 0 : t.uri) ? s : null,
                            artistsName: null != (n = null == (a = e.track.artists) ? void 0 : a.map((e) => e.name).join(', ')) ? n : null,
                        },
                    };
                },
                gk = (e, t) => {
                    var a, i, r, l, s, n, o, d, g, u, c, m, y, p, b, E;
                    let v, S, K;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case gL.m.ACTION:
                                v = ((e) => {
                                    var t;
                                    return (0, D.wg)({
                                        type: gL.m.ACTION,
                                        data: { title: e.data.title, imageUrl: e.data.imageUrl, url: null == (t = e.data.action) ? void 0 : t.weblink },
                                    });
                                })(e.button);
                                break;
                            case gL.m.SIMPLE:
                                v = ((e) =>
                                    (0, D.wg)({
                                        type: gL.m.SIMPLE,
                                        data: { title: e.data.title, buttonColor: e.data.buttonColor, textColor: e.data.textColor, url: e.data.action.weblink },
                                    }))(e.button);
                                break;
                            case gL.m.SHARE:
                                v = ((e) => {
                                    let { data: t } = e;
                                    return (0, D.wg)({ type: gL.m.SHARE, data: { title: t.title, buttonColor: t.bgColor, textColor: t.titleColor } });
                                })(e.button);
                                break;
                            case gL.m.LIKE:
                                v = ((e) => {
                                    var t, a, i, r;
                                    let { data: l } = e;
                                    return (0, D.wg)({
                                        type: gL.m.LIKE,
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
                    let I = null != (n = e.background.videoUrl) ? n : '';
                    if (null == (i = e.content) ? void 0 : i.type)
                        switch (null == (o = e.content) ? void 0 : o.type) {
                            case gI.x.CHART:
                                S = ((e) =>
                                    (0, D.wg)({
                                        type: e.type,
                                        data: { description: e.data.description, isOrderVisible: !!e.data.isOrderVisible, items: e.data.items.map(gN) },
                                    }))(e.content);
                                break;
                            case gI.x.CHART_FAVORITES:
                                S = ((e) =>
                                    (0, D.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible: !!e.data.isOrderVisible,
                                            items: e.data.items.map(gN),
                                        },
                                    }))(e.content);
                                break;
                            case gI.x.SINGLE_ENTITY:
                                S = ((e) =>
                                    (0, D.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            entityType: e.data.entityType,
                                            cover: gh(e.data.cover),
                                            align: e.data.align,
                                            smallRoundCover: e.data.smallRoundCover ? gh(e.data.smallRoundCover) : void 0,
                                            ...((e) => {
                                                let { coverMask: t, coverBackground: a } = e;
                                                return ((t && a) || ((t = gT.g2), (a = gT.wO)), { coverMask: t, coverBackground: a });
                                            })(e.data),
                                        },
                                    }))(e.content);
                                break;
                            case gI.x.STATS:
                                S = ((e) => {
                                    var t;
                                    return (0, D.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer: null != (t = e.data.footer) ? t : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(gC),
                                        },
                                    });
                                })(e.content);
                                break;
                            case gI.x.TEXT:
                                S = ((e) =>
                                    (0, D.wg)({
                                        type: e.type,
                                        data: { title: e.data.title, subtitle: e.data.subtitle, align: e.data.align, titleSize: e.data.titleSize },
                                        disclaimer: null == e ? void 0 : e.disclaimer,
                                    }))(e.content);
                                break;
                            case gI.x.TEXT_FACT:
                                S = ((e) => {
                                    var t, a, i;
                                    return (0, D.wg)({
                                        type: e.type,
                                        data: {
                                            ...gC(e.data),
                                            coverType: null != (t = e.data.coverType) ? t : null,
                                            coverTitle: null != (a = e.data.coverTitle) ? a : null,
                                            smallCover: null != (i = e.data.smallCover) ? i : null,
                                        },
                                    });
                                })(e.content);
                                break;
                            case gI.x.CHART_ARTIST:
                                S = ((e) => {
                                    let t = e.data.cover ? gh(e.data.cover) : null;
                                    return (0, D.wg)({ type: e.type, data: { title: e.data.title, cover: t, items: e.data.items.map(gN) } });
                                })(e.content);
                                break;
                            case gI.x.ARTISTS:
                                S = ((e) => {
                                    let t = e.data.covers ? e.data.covers.slice(0, 3).map(gh) : [];
                                    return (0, D.wg)({
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
                            case gI.x.TEXT_EXTENDED:
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
                            case gI.x.THEN_NOW_COMPARISON:
                                S = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            firstItem: e.data.firstItem ? gR(e.data.firstItem) : null,
                                            secondItem: e.data.secondItem ? gR(e.data.secondItem) : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case gI.x.PAY_CARD:
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
                            case gI.x.CAROUSEL:
                                ((S = ((e) => {
                                    let t = e.data.items.map((e) => ({
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            cover: gh(e.data.cover),
                                            coverPlaceholder: e.data.coverPlaceholder,
                                            coverMask: e.data.coverMask,
                                            coverBackground: e.data.coverBackground,
                                        },
                                    }));
                                    return (0, D.wg)({ type: e.type, data: { savedChoiceKey: e.data.savedChoiceKey, items: t } });
                                })(e.content)),
                                    (K = null == (g = e.content) || null == (d = g.data) ? void 0 : d.savedChoiceKey));
                                break;
                            case gI.x.COLLAGE:
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
                                    return (0, D.wg)({ type: a, data: { items: i } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case gI.x.LINEUP:
                                ((S = ((e) => {
                                    let t = e.data.items.map(gf);
                                    return (0, D.wg)({ type: e.type, data: { items: t } });
                                })(e.content)),
                                    (I = ''));
                                break;
                            case gI.x.LUMEN:
                                S = ((e) => {
                                    var t, a, i, r;
                                    return (0, D.wg)({
                                        type: e.type,
                                        data: {
                                            query: e.data.query
                                                ? {
                                                      image: e.data.query.image ? gh(e.data.query.image) : null,
                                                      text: null != (t = e.data.query.text) ? t : null,
                                                      textColor: null != (a = e.data.query.textColor) ? a : null,
                                                  }
                                                : null,
                                            unawakenedLumenImage: e.data.unawakenedLumenImage ? gh(e.data.unawakenedLumenImage) : null,
                                            title: null != (i = e.data.title) ? i : null,
                                            subtitle: null != (r = e.data.subtitle) ? r : null,
                                        },
                                    });
                                })(e.content);
                        }
                    let L = null != (u = null == (r = e.trailer) ? void 0 : r.tracks) ? u : [],
                        T = null != (c = null == (l = e.meta) ? void 0 : l.animationDelay) ? c : gT.fZ;
                    return (0, D.wg)({
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
                        slideColor: null == (s = e.meta) ? void 0 : s.color,
                        button: v,
                        content: S,
                        trailerRawTracks: L,
                        logo: null != (b = null == t ? void 0 : t.logo) ? b : null,
                        promoLogo: null != (E = e.promoLogo) ? E : null,
                        savedChoiceKey: K,
                    });
                },
                gP = D.gK.model('SlideButtonActionData', { title: D.gK.maybeNull(D.gK.string), imageUrl: D.gK.maybeNull(D.gK.string), url: D.gK.maybeNull(D.gK.string) }),
                gD = D.gK.model('SlideButtonAction', { type: D.gK.literal(gL.m.ACTION), data: gP }),
                g_ = D.gK.model('SlideButtonLikeState', {
                    title: D.gK.string,
                    buttonColor: D.gK.maybeNull(D.gK.string),
                    textColor: D.gK.maybeNull(D.gK.string),
                    enabled: D.gK.boolean,
                }),
                gO = D.gK.model('SlideButtonLikeData', { entityId: D.gK.string, entityType: D.gK.string, unliked: g_, liked: g_ }),
                gw = D.gK.model('SlideButtonLike', { type: D.gK.literal(gL.m.LIKE), data: gO }),
                gG = D.gK.model('SlideButtonSimpleData', {
                    title: D.gK.maybeNull(D.gK.string),
                    buttonColor: D.gK.maybeNull(D.gK.string),
                    textColor: D.gK.maybeNull(D.gK.string),
                }),
                gM = D.gK.model('SlideButtonShare', { type: D.gK.literal(gL.m.SHARE), data: gG }),
                gU = D.gK.model('SlideButtonSimpleData', {
                    title: D.gK.maybeNull(D.gK.string),
                    buttonColor: D.gK.maybeNull(D.gK.string),
                    textColor: D.gK.maybeNull(D.gK.string),
                    url: D.gK.maybeNull(D.gK.string),
                }),
                gB = D.gK.model('SlideButtonSimple', { type: D.gK.literal(gL.m.SIMPLE), data: gU }),
                gV = D.gK.model('SlideContentCover', { uri: D.gK.maybeNull(D.gK.string), color: D.gK.maybeNull(D.gK.string), videoUrl: D.gK.maybeNull(D.gK.string) }),
                gF = D.gK.model('SlideContentStat', {
                    value: D.gK.maybeNull(D.gK.number),
                    valueDescription: D.gK.maybeNull(D.gK.string),
                    valueSuffix: D.gK.maybeNull(D.gK.string),
                    footer: D.gK.maybeNull(D.gK.string),
                    align: D.gK.maybeNull(D.gK.string),
                }),
                gx = D.gK.compose(D.gK.model('SlideContentArtistsModelData', { covers: D.gK.array(gV) }), gF),
                gj = D.gK.model('SlideContentArtistsModel', { type: D.gK.literal(gI.x.ARTISTS), data: D.gK.maybe(gx) }),
                gW = D.gK.model('SlideContentCarouselItemData', {
                    title: D.gK.maybe(D.gK.string),
                    subtitle: D.gK.maybe(D.gK.string),
                    description: D.gK.maybe(D.gK.string),
                    cover: gV,
                    coverMask: D.gK.maybe(D.gK.string),
                    coverBackground: D.gK.maybe(D.gK.string),
                    coverPlaceholder: D.gK.maybe(D.gK.string),
                }),
                gX = D.gK.model('SlideContentCarouselItem', { data: gW }),
                g$ = D.gK.model('SlideContentCarouselData', { savedChoiceKey: D.gK.maybe(D.gK.string), items: D.gK.array(gX) }),
                gY = D.gK.model('SlideContentCarousel', { type: D.gK.literal(gI.x.CAROUSEL), data: D.gK.maybe(g$) }),
                gJ = D.gK.model('SlideContentItem', {
                    value: D.gK.maybeNull(D.gK.number),
                    title: D.gK.maybeNull(D.gK.string),
                    titleType: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                    cover: D.gK.maybeNull(gV),
                    coverType: D.gK.maybeNull(D.gK.string),
                }),
                gq = D.gK.model('SlideContentChartArtistData', { title: D.gK.maybeNull(D.gK.string), cover: D.gK.maybeNull(gV), items: D.gK.array(gJ) }),
                gH = D.gK.model('SlideContentChartArtist', { type: D.gK.literal(gI.x.CHART_ARTIST), data: D.gK.maybe(gq) }),
                gz = D.gK.compose(
                    D.gK.model('SlideContentChartFavoritesData', { description: D.gK.maybeNull(D.gK.string), isOrderVisible: D.gK.boolean, items: D.gK.array(gJ) }),
                    gF,
                ),
                gQ = D.gK.model('SlideContentChartFavorites', { type: D.gK.literal(gI.x.CHART_FAVORITES), data: D.gK.maybe(gz) }),
                gZ = D.gK.model('SlideContentChartData', { description: D.gK.maybeNull(D.gK.string), isOrderVisible: D.gK.boolean, items: D.gK.array(gJ) }),
                g0 = D.gK.model('SlideContentChart', { type: D.gK.literal(gI.x.CHART), data: D.gK.maybe(gZ) }),
                g1 = D.gK.model('SlideContentCollageRectangle', { x: D.gK.number, y: D.gK.number, z: D.gK.number, width: D.gK.number, height: D.gK.number }),
                g3 = D.gK.model('SlideContentCollageBottomBlockItemData', {
                    key: D.gK.maybe(D.gK.string),
                    title: D.gK.maybe(D.gK.string),
                    subtitle: D.gK.maybe(D.gK.string),
                }),
                g2 = D.gK.model('SlideContentCollageBottomBlockItem', { type: D.gK.string, data: g3 }),
                g5 = D.gK.model('SlideContentCollageBottomBlockData', { items: D.gK.array(g2) }),
                g8 = D.gK.model('SlideContentCollageTopBlockItemData', { key: D.gK.maybe(D.gK.string), uri: D.gK.maybe(D.gK.string), rectangle: g1 }),
                g6 = D.gK.model('SlideContentCollageTopBlockItem', { type: D.gK.string, data: g8 }),
                g4 = D.gK.model('SlideContentCollageTopBlockData', {
                    background: D.gK.model('SlideContentCollageTopBlockBackground', { uri: D.gK.maybe(D.gK.string) }),
                    items: D.gK.array(g6),
                }),
                g9 = D.gK.model('SlideContentCollageItem', {
                    contentBackground: D.gK.model('SlideContentCollageContentBackground', { uri: D.gK.maybe(D.gK.string) }),
                    bottomBlock: D.gK.model('SlideContentCollageBottomBlock', { type: D.gK.string, data: g5 }),
                    topBlock: D.gK.model('SlideContentCollageTopBlock', { type: D.gK.string, data: g4 }),
                }),
                g7 = D.gK.model('SlideContentCollageData', { items: D.gK.array(g9) }),
                ue = D.gK.model('SlideContentCollage', { type: D.gK.literal(gI.x.COLLAGE), data: g7 }),
                ut = D.gK.model('SlideContentLineupItemData', {
                    contentBackground: D.gK.maybe(gV),
                    shareBackground: D.gK.maybe(gV),
                    slideBackground: D.gK.maybe(gV),
                    contentLogo: D.gK.maybe(gV),
                    metaLabel: D.gK.maybe(D.gK.string),
                    metaLabelTextColor: D.gK.maybe(D.gK.string),
                    artists: D.gK.array(D.gK.string),
                    artistTextColor: D.gK.maybe(D.gK.string),
                    contentDescription: D.gK.maybe(D.gK.string),
                    eventTagLabel: D.gK.maybe(D.gK.string),
                    eventTagLabelTextColor: D.gK.maybe(D.gK.string),
                    contentImage: D.gK.maybe(gV),
                    festivalTitle: D.gK.maybe(D.gK.string),
                    festivalTextColor: D.gK.maybe(D.gK.string),
                }),
                ua = D.gK.model('SlideContentLineupItem', { type: D.gK.string, data: ut }),
                ui = D.gK.model('SlideContentLineupData', { items: D.gK.array(ua) }),
                ur = D.gK.model('SlideContentLineup', { type: D.gK.literal(gI.x.LINEUP), data: ui }),
                ul = D.gK.model('SlideContentLumenQuery', { image: D.gK.maybeNull(gV), text: D.gK.maybeNull(D.gK.string), textColor: D.gK.maybeNull(D.gK.string) }),
                us = D.gK.model('SlideContentLumenData', {
                    query: D.gK.maybeNull(ul),
                    unawakenedLumenImage: D.gK.maybeNull(gV),
                    title: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                }),
                un = D.gK.model('SlideContentLumen', { type: D.gK.literal(gI.x.LUMEN), data: us }),
                uo = D.gK.model('SlideContentPayCardData', {
                    title: D.gK.maybeNull(D.gK.string),
                    description: D.gK.maybeNull(D.gK.string),
                    artwork: D.gK.maybeNull(D.gK.string),
                }),
                ud = D.gK.model('SlideContentPayCard', { type: D.gK.literal(gI.x.PAY_CARD), data: D.gK.maybe(uo) }),
                ug = D.gK.model('SlideContentSingleEntityData', {
                    title: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                    description: D.gK.maybeNull(D.gK.string),
                    entityType: D.gK.maybeNull(D.gK.string),
                    cover: gV,
                    coverMask: D.gK.string,
                    coverBackground: D.gK.string,
                    align: D.gK.maybe(D.gK.string),
                    smallRoundCover: D.gK.maybeNull(gV),
                }),
                uu = D.gK.model('SlideContentSingleEntity', { type: D.gK.literal(gI.x.SINGLE_ENTITY), data: D.gK.maybe(ug) }),
                uc = D.gK.model('SlideContentStatsData', {
                    header: D.gK.maybeNull(D.gK.string),
                    footer: D.gK.maybeNull(D.gK.string),
                    align: D.gK.maybeNull(D.gK.string),
                    stats: D.gK.array(gF),
                }),
                um = D.gK.model('SlideContentStats', { type: D.gK.literal(gI.x.STATS), data: D.gK.maybe(uc) }),
                uy = D.gK.model('SlideContentTextExtendedData', {
                    title: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                    description: D.gK.maybeNull(D.gK.string),
                }),
                up = D.gK.model('SlideContentTextExtended', { type: D.gK.literal(gI.x.TEXT_EXTENDED), data: D.gK.maybe(uy) }),
                ub = D.gK.compose(
                    D.gK.model('SlideContentTextFactDataModel', {
                        coverType: D.gK.maybeNull(D.gK.string),
                        coverTitle: D.gK.maybeNull(D.gK.string),
                        smallCover: D.gK.maybeNull(D.gK.string),
                    }),
                    gF,
                ),
                uE = D.gK.model('SlideContentTextFact', { type: D.gK.literal(gI.x.TEXT_FACT), data: D.gK.maybe(ub) }),
                uv = D.gK.model('SlideContentTextData', {
                    title: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                    align: D.gK.maybeNull(D.gK.string),
                    titleSize: D.gK.maybeNull(D.gK.string),
                }),
                uS = D.gK.model('SlideContentTextDisclaimer', { text: D.gK.maybeNull(D.gK.string), textColor: D.gK.maybeNull(D.gK.string) }),
                uK = D.gK.model('SlideContentText', { type: D.gK.literal(gI.x.TEXT), data: D.gK.maybe(uv), disclaimer: D.gK.maybe(uS) }),
                uI = D.gK.model('SlideContentThenNowComparisonItemTrack', {
                    title: D.gK.maybeNull(D.gK.string),
                    coverUri: D.gK.maybeNull(D.gK.string),
                    artistsName: D.gK.maybeNull(D.gK.string),
                }),
                uL = D.gK.model('SlideContentThenNowComparisonItem', {
                    label: D.gK.maybeNull(D.gK.string),
                    description: D.gK.maybeNull(D.gK.string),
                    track: D.gK.maybeNull(uI),
                }),
                uT = D.gK.model('SlideContentThenNowComparisonData', {
                    title: D.gK.maybeNull(D.gK.string),
                    subtitle: D.gK.maybeNull(D.gK.string),
                    firstItem: D.gK.maybeNull(uL),
                    secondItem: D.gK.maybeNull(uL),
                }),
                uh = D.gK.model('SlideContentThenNowComparison', { type: D.gK.literal(gI.x.THEN_NOW_COMPARISON), data: D.gK.maybe(uT) }),
                uN = D.gK.model('SlideBackground', {
                    animationDelay: D.gK.number,
                    bgImageUrl: D.gK.string,
                    videoUrl: D.gK.string,
                    withSound: D.gK.boolean,
                    firstFrameVideoUrl: D.gK.string,
                    lastFrameVideoUrl: D.gK.string,
                    withPersonalColor: D.gK.boolean,
                    videoLoopEnabled: D.gK.boolean,
                }),
                uA = D.gK
                    .model('Slide', {
                        id: D.gK.string,
                        background: uN,
                        button: D.gK.maybe(D.gK.union(gD, gM, gB, gw)),
                        slideColor: D.gK.maybeNull(D.gK.string),
                        content: D.gK.maybe(D.gK.union(g0, gQ, uu, uK, um, uE, gH, gj, up, uh, ud, gY, ue, ur, un)),
                        trailerRawTracks: D.gK.maybeNull(D.gK.frozen()),
                        logo: D.gK.maybeNull(D.gK.string),
                        promoLogo: D.gK.maybeNull(D.gK.string),
                        savedChoiceKey: D.gK.maybe(D.gK.string),
                        carouselIndex: D.gK.maybe(D.gK.number),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks) ? void 0 : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({ type: aX.R.SmartPreview, meta: e }));
                        },
                    }))
                    .actions((e) => ({
                        setCarouselIndex(t) {
                            e.carouselIndex = t;
                        },
                    }));
            var uf = a(50355);
            let uC = D.gK.model('SavedChoiceData', {
                    text: D.gK.maybe(D.gK.string),
                    uri: D.gK.maybe(D.gK.string),
                    coverMask: D.gK.maybe(D.gK.string),
                    coverBackground: D.gK.maybe(D.gK.string),
                }),
                uR = D.gK.model('SavedChoice', { index: D.gK.number, isSaved: D.gK.boolean, data: uC }),
                uk = D.gK
                    .model('Slides', {
                        userSlidesLoadingState: D.gK.enumeration(Object.values(F.G)),
                        artistSlidesLoadingState: D.gK.enumeration(Object.values(F.G)),
                        podcastSlidesLoadingState: D.gK.enumeration(Object.values(F.G)),
                        specialSlidesLoadingState: D.gK.enumeration(Object.values(F.G)),
                        kidsSlidesLoadingState: D.gK.enumeration(Object.values(F.G)),
                        consumer: D.gK.maybe(D.gK.enumeration(Object.values(uf.z))),
                        artistId: D.gK.maybe(D.gK.string),
                        podcastId: D.gK.maybe(D.gK.number),
                        campaignId: D.gK.maybe(D.gK.string),
                        activeSlide: D.gK.optional(D.gK.number, 0),
                        userItems: D.gK.array(uA),
                        artistItems: D.gK.array(uA),
                        podcastItems: D.gK.array(uA),
                        specialItems: D.gK.array(uA),
                        kidsItems: D.gK.array(uA),
                        isMuted: D.gK.boolean,
                        savedChoices: D.gK.map(uR),
                        mainObjectId: D.gK.optional(D.gK.string, ''),
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
                            if (e.consumer !== uf.z.USER) return;
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
                            getUserSlides: (0, D.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (e.userSlidesLoadingState !== F.G.PENDING)
                                    try {
                                        e.userSlidesLoadingState = F.G.PENDING;
                                        let i = yield a.getUserSlides();
                                        (e.userSlidesLoadingState !== F.G.IDLE && (e.userSlidesLoadingState = F.G.RESOLVE),
                                            i.slides && ((e.consumer = uf.z.USER), (e.mainObjectId = e.consumer), (e.userItems = (0, D.wg)(t.processSlidesResponse(i)))),
                                            (e.userSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.userSlidesLoadingState !== F.G.IDLE && ((e.userSlidesLoadingState = F.G.REJECT), (e.userItems = (0, D.wg)([]))));
                                    }
                            }),
                            getArtistSlides: (0, D.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, D._$)(e);
                                if (e.artistSlidesLoadingState !== F.G.PENDING) {
                                    e.artistId = a.artistId;
                                    try {
                                        e.artistSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getArtistSlides(a);
                                        (e.artistSlidesLoadingState !== F.G.IDLE && (e.artistSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uf.z.ARTIST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.artistId)),
                                                (e.artistItems = (0, D.wg)(t.processSlidesResponse(r)))),
                                            (e.artistSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.artistSlidesLoadingState !== F.G.IDLE && ((e.artistSlidesLoadingState = F.G.REJECT), (e.artistItems = (0, D.wg)([]))));
                                    }
                                }
                            }),
                            getPodcastSlides: (0, D.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, D._$)(e);
                                if (e.podcastSlidesLoadingState !== F.G.PENDING) {
                                    e.podcastId = a.podcastId;
                                    try {
                                        e.podcastSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getPodcastSlides(a);
                                        (e.podcastSlidesLoadingState !== F.G.IDLE && (e.podcastSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uf.z.PODCAST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.podcastId)),
                                                (e.podcastItems = (0, D.wg)(t.processSlidesResponse(r)))),
                                            (e.podcastSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.podcastSlidesLoadingState !== F.G.IDLE && ((e.podcastSlidesLoadingState = F.G.REJECT), (e.podcastItems = (0, D.wg)([]))));
                                    }
                                }
                            }),
                            getSpecialSlides: (0, D.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: r } = (0, D._$)(e);
                                if (e.specialSlidesLoadingState !== F.G.PENDING) {
                                    e.campaignId = a.campaignId;
                                    try {
                                        e.specialSlidesLoadingState = F.G.PENDING;
                                        let r = yield i.getSpecialSlides(a);
                                        (e.specialSlidesLoadingState !== F.G.IDLE && (e.specialSlidesLoadingState = F.G.RESOLVE),
                                            r.slides &&
                                                ((e.consumer = uf.z.SPECIAL),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.campaignId)),
                                                (e.specialItems = (0, D.wg)(t.processSlidesResponse(r)))),
                                            (e.specialSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (r.error(t),
                                            e.specialSlidesLoadingState !== F.G.IDLE && ((e.specialSlidesLoadingState = F.G.REJECT), (e.specialItems = (0, D.wg)([]))));
                                    }
                                }
                            }),
                            getKidsSlides: (0, D.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (e.kidsSlidesLoadingState !== F.G.PENDING)
                                    try {
                                        e.kidsSlidesLoadingState = F.G.PENDING;
                                        let i = yield a.getKidsSlides();
                                        (e.kidsSlidesLoadingState !== F.G.IDLE && (e.kidsSlidesLoadingState = F.G.RESOLVE),
                                            i.slides && ((e.consumer = uf.z.KIDS), (e.mainObjectId = e.consumer), (e.kidsItems = (0, D.wg)(t.processSlidesResponse(i)))),
                                            (e.kidsSlidesLoadingState = F.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), e.kidsSlidesLoadingState !== F.G.IDLE && ((e.kidsSlidesLoadingState = F.G.REJECT), (e.kidsItems = (0, D.wg)([]))));
                                    }
                            }),
                            setActiveSlide(t) {
                                e.activeSlide = t;
                            },
                            resetUser() {
                                ((e.userSlidesLoadingState = F.G.IDLE), (e.userItems = (0, D.wg)([])));
                            },
                            resetArtist() {
                                ((e.artistSlidesLoadingState = F.G.IDLE), (e.artistItems = (0, D.wg)([])));
                            },
                            resetPodcast() {
                                ((e.podcastSlidesLoadingState = F.G.IDLE), (e.podcastItems = (0, D.wg)([])));
                            },
                            resetKids() {
                                ((e.kidsSlidesLoadingState = F.G.IDLE), (e.kidsItems = (0, D.wg)([])));
                            },
                            resetSpecial() {
                                ((e.specialSlidesLoadingState = F.G.IDLE), (e.specialItems = (0, D.wg)([])));
                            },
                            saveChoice(t, a) {
                                e.savedChoices.set(t, a);
                            },
                            processSlidesResponse(e) {
                                let a = [];
                                for (let d of e.slides) {
                                    var i, r, l, s, n, o;
                                    let g = gk(d, { logo: e.logo });
                                    if ((a.push(g), g.savedChoiceKey && (null == (i = g.content) ? void 0 : i.type) === gI.x.CAROUSEL)) {
                                        let e = null == (s = g.content) || null == (l = s.data) || null == (r = l.items[0]) ? void 0 : r.data;
                                        if (!e) continue;
                                        t.saveChoice(g.savedChoiceKey, {
                                            index: 0,
                                            isSaved: !1,
                                            data: {
                                                coverBackground: e.coverBackground,
                                                coverMask: e.coverMask,
                                                text: e.title,
                                                uri: null != (o = null == (n = e.cover) ? void 0 : n.uri) ? o : void 0,
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
            var uP = (function (e) {
                    return ((e[(e.PLUS = 1)] = 'PLUS'), (e[(e.NON_PLUS = 0)] = 'NON_PLUS'), (e[(e.UNAUTHORIZED = 2)] = 'UNAUTHORIZED'), e);
                })({}),
                uD = a(99890),
                u_ = a(60385);
            let uO = D.gK.model({
                    uid: D.gK.maybe(D.gK.number),
                    hasPlus: D.gK.maybe(D.gK.boolean),
                    login: D.gK.maybe(D.gK.string),
                    avatarId: D.gK.maybe(D.gK.string),
                    isChild: D.gK.maybe(D.gK.boolean),
                    publicId: D.gK.maybe(D.gK.string),
                    publicName: D.gK.maybe(D.gK.string),
                    userSessionRegionIso: D.gK.maybe(D.gK.string),
                    geoRegionIso: D.gK.maybe(D.gK.string),
                    serviceAvailable: D.gK.maybe(D.gK.boolean),
                    options: D.gK.maybe(D.gK.array(D.gK.string)),
                }),
                uw = D.gK.compose(D.gK.model('Account', { data: uO }), ee.X),
                uG = D.gK.compose(
                    D.gK.model('Settings', {
                        showWizard: D.gK.optional(D.gK.boolean, !0),
                        userCollectionHue: D.gK.maybe(D.gK.number),
                        isChildModeEnabled: D.gK.optional(D.gK.boolean, !1),
                        userMusicVisibility: D.gK.optional(D.gK.string, u_.L.PUBLIC),
                        aiContentReductionEnabled: D.gK.optional(D.gK.boolean, !1),
                    }),
                    ee.X,
                ),
                uM = D.gK
                    .model('User', { account: uw, settings: uG, userCollectionHue: D.gK.maybe(D.gK.number) })
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
                            if (!this.isAuthorized) return uP.UNAUTHORIZED;
                            if (this.hasPlus) return uP.PLUS;
                            return uP.NON_PLUS;
                        },
                    }))
                    .actions((e) => {
                        let t = (t) => {
                            let { wizard: a } = (0, _.M)(e);
                            ((e.settings = ((e) => {
                                var t, a;
                                return (0, D.wg)({
                                    loadingState: F.G.RESOLVE,
                                    showWizard: !e.wizardIsPassed,
                                    userCollectionHue: e.userCollectionHue,
                                    isChildModeEnabled: !!e.childModEnabled,
                                    userMusicVisibility: null != (a = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? a : u_.L.PUBLIC,
                                    aiContentReductionEnabled: !!e.aiContentReductionEnabled,
                                });
                            })(t)),
                                a.isAvailable || (e.settings.showWizard = !1));
                        };
                        return {
                            getAbout: (0, D.L3)(function* (t) {
                                let { accountResource: a, modelActionsLogger: i, containerStorage: r } = (0, D._$)(e);
                                if (!e.account.isLoading)
                                    try {
                                        e.account.loadingState = F.G.PENDING;
                                        let i = t;
                                        (i || (i = yield a.about()),
                                            r.set(l6.c.YmUid, i.uid),
                                            (e.account.data = ((e) => {
                                                let t = e.options ? e.options.filter((e) => 'string' == typeof e) : void 0;
                                                return (0, D.wg)({
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
                                            (0, uD.uV)({ stage: 'account-about', result: (0, uD.UC)(i) }));
                                    } catch (t) {
                                        ((0, uD.uV)({ stage: 'account-about', result: (0, uD.dM)(t) }), i.error(t), (e.account.loadingState = F.G.REJECT));
                                    }
                            }),
                            getSettings: (0, D.L3)(function* () {
                                let { accountResource: a, modelActionsLogger: i } = (0, D._$)(e);
                                if (e.settings.loadingState !== F.G.PENDING)
                                    try {
                                        e.settings.loadingState = F.G.PENDING;
                                        let i = yield a.settings();
                                        t(i);
                                    } catch (t) {
                                        (i.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = F.G.REJECT));
                                    }
                            }),
                            setSettings: (0, D.L3)(function* (a) {
                                let { isChildModeEnabled: i, userMusicVisibility: r, aiContentReductionEnabled: l } = a,
                                    { accountResource: s, modelActionsLogger: n } = (0, D._$)(e),
                                    o = e.settings.aiContentReductionEnabled;
                                try {
                                    let a = {};
                                    ('boolean' == typeof i && ((a.childModEnabled = i), (e.settings.isChildModeEnabled = i)),
                                        r && ((a.userMusicVisibility = r), (e.settings.userMusicVisibility = r)),
                                        'boolean' == typeof l && ((a.aiContentReductionEnabled = l), (e.settings.aiContentReductionEnabled = l)));
                                    let n = yield s.settings(a);
                                    if ((t(n), ('boolean' == typeof i && n.childModEnabled !== i) || ('boolean' == typeof l && n.aiContentReductionEnabled !== l)))
                                        return it.F.ERROR;
                                    return it.F.OK;
                                } catch (t) {
                                    return ('boolean' == typeof l && (e.settings.aiContentReductionEnabled = o), n.error(t), it.F.ERROR);
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
                uU = D.gK.model('EntityRef', { entityType: D.gK.enumeration(Object.values(aL.n)), entityId: D.gK.union(D.gK.string, D.gK.number) }),
                uB = D.gK
                    .compose(
                        D.gK.model('DisclaimerModalState', {
                            currentEntityRef: D.gK.maybeNull(uU),
                            type: D.gK.maybeNull(D.gK.enumeration(Object.values(aL.Z))),
                            id: D.gK.maybeNull(D.gK.string),
                            isUnsafeDisclaimerConfirmed: D.gK.optional(D.gK.boolean, !1),
                            shouldHistoryBack: D.gK.optional(D.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: D.gK.optional(D.gK.boolean, !0),
                            shouldCloseModalOnEscape: D.gK.optional(D.gK.boolean, !0),
                            entityKey: D.gK.maybeNull(D.gK.string),
                            modalData: D.gK.maybeNull(D.gK.frozen()),
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
                uV = ee.X.named('DisclaimersDictionary').actions((e) => {
                    let t,
                        a,
                        i,
                        { disclaimerDictionary: r, modelActionsLogger: l } = (0, D._$)(e),
                        s = {
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
                                    s.syncLoadingState();
                                })),
                                    (a = r.isLoading.onChange(() => {
                                        s.syncLoadingState();
                                    })),
                                    (i = r.error.onChange(() => {
                                        s.syncLoadingState();
                                    })));
                            },
                            beforeDestroy() {
                                (null == t || t(), null == a || a(), null == i || i());
                            },
                            getDisclaimers: (0, D.L3)(function* () {
                                try {
                                    yield r.load();
                                } catch (e) {
                                    l.error(e);
                                }
                            }),
                            getDisclaimerById: (0, D.L3)(function* (e) {
                                try {
                                    return yield r.getById(e);
                                } catch (e) {
                                    l.error(e);
                                    return;
                                }
                            }),
                        };
                    return s;
                });
            var uF = a(36219),
                ux = a(3629);
            let uj = (e, t) => (t ? e.get(l6.c.OverwrittenExperiments) : null),
                uW = new Set(Object.values(O.z)),
                uX = D.gK
                    .model('Experiments', {
                        loadingState: D.gK.enumeration(Object.values(F.G)),
                        experiments: D.gK.optional(D.gK.frozen(), {}),
                        overwrittenExperiments: D.gK.optional(D.gK.frozen(), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: a } = (0, D._$)(e);
                                return uj(t, a.get(ux.yc));
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
                                return (0, uF.A)(null == a ? void 0 : a.value.enabled)
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
                                    { containerStorage: r, clientSafeConfig: l } = (0, D._$)(e);
                                return ((e, t) => {
                                    let { containerStorage: a, experiments: i } = e;
                                    return (e, r) => {
                                        var l;
                                        let s = null == i ? void 0 : i[e],
                                            n = uj(a, t);
                                        if (!n) return (null == s ? void 0 : s.group) === r;
                                        let o = null == (l = n[e]) ? void 0 : l.group;
                                        return o ? o === r : (null == s ? void 0 : s.group) === r;
                                    };
                                })({ containerStorage: r, experiments: i }, l.get(ux.yc))(t, a);
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
                            getData: (0, D.L3)(function* (a) {
                                let { accountResource: i, modelActionsLogger: r } = (0, D._$)(e);
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
                                                    return uW.has(t);
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
                                let { clientSafeConfig: i } = (0, D._$)(e);
                                i.get(ux.yc) && (e.overwrittenExperiments = { ...e.overwrittenExperiments, [t]: a });
                            },
                            deleteOverwrittenExperiments(t) {
                                let { clientSafeConfig: a } = (0, D._$)(e);
                                if (!a.get(ux.yc)) return;
                                let { [t]: i, ...r } = e.overwrittenExperiments;
                                e.overwrittenExperiments = r;
                            },
                        };
                    });
            var u$ = a(79390);
            let uY = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var uJ = (function (e) {
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
                uq = a(4765),
                uH = a(6648);
            let uz = [uJ.LIKED_ALBUMS, uJ.LIKED_ARTISTS, uJ.LIKED_PLAYLISTS, uJ.LIKED_TRACKS, uJ.LIKED_CLIPS, uJ.LIKED_VIBES],
                uQ = D.gK.optional(D.gK.map(D.gK.enumeration(Object.values(uq.O))), {}),
                uZ = D.gK.model('LibraryRecord', { revision: D.gK.maybeNull(D.gK.number), items: uQ }),
                u0 = D.gK.model('LibraryVibe', { seeds: D.gK.array(D.gK.string), timestamp: D.gK.string }),
                u1 = D.gK.model('LibraryVibesRecord', { revision: D.gK.maybeNull(D.gK.number), items: D.gK.optional(D.gK.map(u0), {}) }),
                u3 = D.gK
                    .compose(D.gK.model('Library', { tracks: uZ, albums: uZ, artists: uZ, playlists: uZ, clips: uZ, vibes: D.gK.optional(u1, {}) }), ee.X)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === uq.O.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === uq.O.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === uq.O.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === uq.O.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === uq.O.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === uq.O.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === uq.O.LIKED,
                        isVibeLiked: (t) => e.vibes.items.has((0, uH.q)(t).join()),
                        get likedVibes() {
                            return Array.from(e.vibes.items.values()).sort((e, t) => Date.parse(t.timestamp) - Date.parse(e.timestamp));
                        },
                    }))
                    .actions((e) => {
                        let t = !1,
                            a = {
                                getData: (0, D.L3)(function* () {
                                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uz,
                                        { modelActionsLogger: r, collectionResource: l } = (0, D._$)(e);
                                    if (e.loadingState !== F.G.PENDING)
                                        try {
                                            e.loadingState = F.G.PENDING;
                                            let t = {};
                                            (i.includes(uJ.LIKED_ALBUMS) && (t.likedAlbums = uY(e.albums.revision)),
                                                i.includes(uJ.LIKED_ARTISTS) && (t.likedArtists = uY(e.artists.revision)),
                                                i.includes(uJ.LIKED_TRACKS) && (t.likedTracks = uY(e.tracks.revision)),
                                                i.includes(uJ.LIKED_CLIPS) && (t.likedClips = uY(e.clips.revision)),
                                                i.includes(uJ.LIKED_VIBES) && (t.likedWaves = uY(e.vibes.revision)),
                                                i.includes(uJ.LIKED_PLAYLISTS) && (t.likedPlaylists = {}));
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
                                                let r = e.loadingState === F.G.REJECT && i.some((e) => e !== uJ.LIKED_VIBES);
                                                ((t = !1), yield a.getData([uJ.LIKED_VIBES]), r && (e.loadingState = F.G.REJECT));
                                            }
                                        }
                                }),
                                setArtists: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.artists.revision !== t.info.revision &&
                                        (a.clearArtists(),
                                        (e.artists.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.artists.items.set(t.artistId.toString(), uq.O.LIKED);
                                        }),
                                        t.values.disliked.map((t) => {
                                            e.artists.items.set(t.artistId.toString(), uq.O.DISLIKED);
                                        }));
                                },
                                setAlbums: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.albums.revision !== t.info.revision &&
                                        (a.clearAlbums(),
                                        (e.albums.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.albums.items.set(t.albumId.toString(), uq.O.LIKED);
                                        }));
                                },
                                setPlaylists: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        (a.clearPlaylists(),
                                        t.values.liked.map((t) => {
                                            e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), uq.O.LIKED);
                                        }));
                                },
                                setTracks: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.tracks.revision !== t.info.revision &&
                                        (a.clearTracks(),
                                        (e.tracks.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.tracks.items.set(t.trackId, uq.O.LIKED);
                                        }),
                                        t.values.disliked.map((t) => {
                                            e.tracks.items.set(t.trackId, uq.O.DISLIKED);
                                        }));
                                },
                                setClips: (t) => {
                                    (null == t ? void 0 : t.values) &&
                                        e.clips.revision !== t.info.revision &&
                                        (a.clearClips(),
                                        (e.clips.revision = t.info.revision),
                                        t.values.liked.map((t) => {
                                            e.clips.items.set(t.clipId.toString(), uq.O.LIKED);
                                        }));
                                },
                                setVibes: (t) => {
                                    var i;
                                    (null == t || null == (i = t.values) ? void 0 : i.liked) &&
                                        e.vibes.revision !== t.info.revision &&
                                        (a.clearVibes(),
                                        (e.vibes.revision = t.info.revision),
                                        t.values.liked.forEach((t) => {
                                            let a = (0, uH.q)(t.seeds);
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
                                toggleTrackLike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.tracks.items.get(l);
                                    try {
                                        let r,
                                            s = { entityId: t.albumId ? ''.concat(t.entityId, ':').concat(t.albumId) : t.entityId, userId: t.userId };
                                        return (
                                            e.tracks.items.get(l) === uq.O.LIKED
                                                ? (e.tracks.items.delete(l), (r = yield i.unlikeTrack(s)))
                                                : (e.tracks.items.set(l, uq.O.LIKED), (r = yield i.likeTrack(s))),
                                            a.getData([uJ.LIKED_TRACKS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.tracks.items.set(l, s) : e.tracks.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleTrackDislike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.tracks.items.get(l);
                                    try {
                                        let r,
                                            s = { entityId: t.albumId ? ''.concat(t.entityId, ':').concat(t.albumId) : t.entityId, userId: t.userId };
                                        return (
                                            e.tracks.items.get(l) === uq.O.DISLIKED
                                                ? (e.tracks.items.delete(l), (r = yield i.undislikeTrack(s)))
                                                : (e.tracks.items.set(l, uq.O.DISLIKED), (r = yield i.dislikeTrack(s))),
                                            a.getData([uJ.LIKED_TRACKS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.tracks.items.set(l, s) : e.tracks.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleArtistLike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.artists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.artists.items.get(l) === uq.O.LIKED
                                                ? (e.artists.items.delete(l), (r = yield i.unlikeArtist(t)))
                                                : (e.artists.items.set(l, uq.O.LIKED), (r = yield i.likeArtist(t))),
                                            a.getData([uJ.LIKED_ARTISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.artists.items.set(l, s) : e.artists.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleArtistDislike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.artists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.artists.items.get(l) === uq.O.DISLIKED
                                                ? (e.artists.items.delete(l), (r = yield i.undislikeArtist(t)))
                                                : (e.artists.items.set(l, uq.O.DISLIKED), (r = yield i.dislikeArtist(t))),
                                            a.getData([uJ.LIKED_ARTISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.artists.items.set(l, s) : e.artists.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleAlbumLike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.albums.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.albums.items.get(l) === uq.O.LIKED
                                                ? (e.albums.items.delete(l), (r = yield i.unlikeAlbum(t)))
                                                : (e.albums.items.set(l, uq.O.LIKED), (r = yield i.likeAlbum(t))),
                                            a.getData([uJ.LIKED_ALBUMS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.albums.items.set(l, s) : e.albums.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                togglePlaylistLike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.playlists.items.get(l);
                                    try {
                                        let r;
                                        return (
                                            e.playlists.items.get(l) === uq.O.LIKED
                                                ? (e.playlists.items.delete(l), (r = yield i.unlikePlaylist(t)))
                                                : (e.playlists.items.set(l, uq.O.LIKED), (r = yield i.likePlaylist(t))),
                                            a.getData([uJ.LIKED_PLAYLISTS]),
                                            r
                                        );
                                    } catch (t) {
                                        return (s ? e.playlists.items.set(l, s) : e.playlists.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleClipLike: (0, D.L3)(function* (t) {
                                    let { usersResource: i, modelActionsLogger: r } = (0, D._$)(e),
                                        l = String(t.entityId),
                                        s = e.clips.items.get(l);
                                    try {
                                        return (
                                            e.clips.items.get(l) === uq.O.LIKED
                                                ? (e.clips.items.delete(l), yield i.unlikeClip(t))
                                                : (e.clips.items.set(l, uq.O.LIKED), yield i.likeClip(t)),
                                            a.getData([uJ.LIKED_CLIPS]),
                                            u$.f.OK
                                        );
                                    } catch (t) {
                                        return (s ? e.clips.items.set(l, s) : e.clips.items.delete(l), r.error(t), u$.f.ERROR);
                                    }
                                }),
                                toggleVibeLike: (0, D.L3)(function* (i) {
                                    let { collectionResource: r, modelActionsLogger: l } = (0, D._$)(e),
                                        s = (0, uH.q)(i.seeds),
                                        n = s.join(),
                                        o = e.vibes.items.get(n),
                                        d = o ? (0, D.dV)(o) : void 0,
                                        g = { waves: [{ seeds: s }] };
                                    try {
                                        return (
                                            d
                                                ? (e.vibes.items.delete(n), yield r.unlikeWaves(g))
                                                : (e.vibes.items.set(n, { seeds: s, timestamp: new Date().toISOString() }), yield r.likeWaves(g)),
                                            e.loadingState === F.G.PENDING ? (t = !0) : a.getData([uJ.LIKED_VIBES]),
                                            u$.f.OK
                                        );
                                    } catch (t) {
                                        return (d ? e.vibes.items.set(n, d) : e.vibes.items.delete(n), l.error(t), u$.f.ERROR);
                                    }
                                }),
                            };
                        return a;
                    }),
                u2 = D.gK
                    .model('Location', {
                        pathname: D.gK.optional(D.gK.string, ''),
                        searchParams: D.gK.optional(D.gK.string, ''),
                        host: D.gK.optional(D.gK.string, ''),
                        tld: D.gK.optional(D.gK.string, ''),
                        origin: D.gK.optional(D.gK.string, ''),
                        href: D.gK.optional(D.gK.string, ''),
                        isNotFound: D.gK.optional(D.gK.boolean, !1),
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
            var u5 = a(26e3),
                u8 = a(31320);
            let u6 = { INTRO_PLAN: u8.N.IntroPlan, INTRO_UNTIL_PLAN: u8.N.IntroUntilPlan, TRIAL_PLAN: u8.N.TrialPlan, TRIAL_UNTIL_PLAN: u8.N.TrialUntilPlan },
                u4 = (e) => {
                    let { repetitionCount: t, typename: a, ...i } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...i, typename: u6[a] || a };
                };
            var u9 = a(82057);
            let u7 = (e) => (0, D.wg)(e),
                ce = (e) => {
                    let { plans: t, ...a } = e;
                    return (0, D.wg)({ ...a, plans: t.map(u7) });
                },
                ct = (e) => {
                    let { option: t, ...a } = e;
                    return (0, D.wg)({ ...ce(a), option: t });
                },
                ca = (e) =>
                    (0, D.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: a,
                                offerTexts: i,
                                target: r,
                                requestedFeatures: l,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            } = e;
                            return (0, D.wg)({
                                analyticData: t,
                                catalogCompositeOffer: ((e) => {
                                    let { positionId: t, silentInvoiceAvailable: a, structureType: i, tariffOffer: r, optionOffers: l } = e;
                                    return (0, D.wg)({
                                        positionId: t,
                                        silentInvoiceAvailable: a,
                                        structureType: i,
                                        tariffOffer: ((e) => {
                                            if (!e) return null;
                                            let { tariff: t, ...a } = e;
                                            return (0, D.wg)({ ...ce(a), tariff: t });
                                        })(r),
                                        optionsOffers: l.map(ct),
                                    });
                                })(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: a, optionOffers: i } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: a ? { ...a, offerVendorType: a.offerVendorType, plans: null == (t = a.plans) ? void 0 : t.map(u4) } : void 0,
                                            optionOffers: null == i ? void 0 : i.map((e) => ({ ...e, plans: (e.plans || []).map(u4) })),
                                        };
                                    })(a),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...a } = e;
                                    return {
                                        ...a,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [a, i] = t;
                                            return ((e[(0, u9.A)(a)] = i), e);
                                        }, {}),
                                    };
                                })(i),
                                target: r,
                                requestedFeatures: l,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            });
                        })(e),
                    }),
                ci = D.gK.model({ batchId: D.gK.string, positionId: D.gK.string, placeId: D.gK.maybe(D.gK.string) }),
                cr = D.gK.model({
                    buttonText: D.gK.maybe(D.gK.string),
                    buttonAdditionalText: D.gK.maybe(D.gK.string),
                    buttonTextA11y: D.gK.maybe(D.gK.string),
                    disclaimerText: D.gK.maybe(D.gK.string),
                    disclaimerTextA11y: D.gK.maybe(D.gK.string),
                    oneClickDisclaimerText: D.gK.maybe(D.gK.string),
                    oneClickDisclaimerTextA11y: D.gK.maybe(D.gK.string),
                }),
                cl = D.gK.model({
                    subscriptionName: D.gK.string,
                    buttonText: D.gK.string,
                    buttonTextWithDetails: D.gK.string,
                    combinedIntroductoryText: D.gK.string,
                    combinedPriceText: D.gK.string,
                    combinedFullOfferText: D.gK.string,
                    priceInMonth: D.gK.string,
                    customTexts: cr,
                });
            var cs = (function (e) {
                return ((e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF'), e);
            })({});
            let cn = D.gK.model({ amount: D.gK.number, currency: D.gK.string }),
                co = D.gK.model({ typename: D.gK.literal(u8.N.IntroPlan), period: D.gK.string, price: cn, repeatCount: D.gK.maybe(D.gK.number) }),
                cd = D.gK.model({ typename: D.gK.literal(u8.N.IntroUntilPlan), price: cn, until: D.gK.string }),
                cg = D.gK.model({ typename: D.gK.literal(u8.N.TrialPlan), period: D.gK.string }),
                cu = D.gK.model({ typename: D.gK.literal(u8.N.TrialUntilPlan), until: D.gK.string }),
                cc = D.gK.union(co, cd, cg, cu),
                cm = D.gK.model({ name: D.gK.string }),
                cy = D.gK.model({
                    additionText: D.gK.string,
                    description: D.gK.string,
                    name: D.gK.string,
                    text: D.gK.string,
                    title: D.gK.string,
                    plans: D.gK.array(cc),
                    commonPeriod: D.gK.string,
                    commonPrice: cn,
                }),
                cp = cy.props({ option: cm }),
                cb = cy.props({ tariff: cm }),
                cE = D.gK.model({
                    positionId: D.gK.string,
                    silentInvoiceAvailable: D.gK.boolean,
                    structureType: D.gK.enumeration(Object.values(cs)),
                    tariffOffer: D.gK.maybeNull(cb),
                    optionsOffers: D.gK.array(cp),
                }),
                cv = D.gK.model({
                    analyticData: ci,
                    catalogCompositeOffer: cE,
                    offerTexts: cl,
                    target: D.gK.string,
                    requestedFeatures: D.gK.maybe(D.gK.array(D.gK.string)),
                    position: D.gK.number,
                    oneClickAvailable: D.gK.maybe(D.gK.boolean),
                    place: D.gK.maybe(D.gK.string),
                    purchaseToken: D.gK.maybe(D.gK.string),
                }),
                cS = D.gK.model({ offer: D.gK.maybeNull(cE), acqOffer: D.gK.maybeNull(cv) }).views((e) => {
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
                            var s;
                            return (null == (s = e.acqOffer) ? void 0 : s.catalogCompositeOffer) || e.offer;
                        },
                        get offersPositionId() {
                            var n, o;
                            return (
                                (null == (n = e.acqOffer) ? void 0 : n.analyticData.positionId) || (null == (o = t.catalogCompositeOffer) ? void 0 : o.positionId) || ''
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
                            var b;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerText;
                            let { experiments: a } = (0, _.M)(e);
                            return a.checkExperiment(O.z.WebNextPaywallDisclaimer, 'regular') ? (null == (b = t.customTexts) ? void 0 : b.disclaimerText) : void 0;
                        },
                        get disclaimerTextA11y() {
                            var E;
                            if (t.oneClickAvailable) return t.oneClickDisclaimerTextA11y;
                            let { experiments: a } = (0, _.M)(e);
                            return a.checkExperiment(O.z.WebNextPaywallDisclaimer, 'regular') ? (null == (E = t.customTexts) ? void 0 : E.disclaimerTextA11y) : void 0;
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
                cK = D.gK.model({
                    sessionId: D.gK.maybeNull(D.gK.string),
                    page: D.gK.maybeNull(D.gK.string),
                    offers: D.gK.array(cS),
                    mlRequestId: D.gK.maybeNull(D.gK.string),
                    offerConfigId: D.gK.maybeNull(D.gK.number),
                    language: D.gK.maybeNull(D.gK.string),
                }),
                cI = D.gK.compose(cK, ee.X, D.gK.model({ isLoadOffersResultSent: D.gK.boolean })),
                cL = D.gK
                    .compose(D.gK.model({ isLoadOffersResultSent: D.gK.maybe(D.gK.boolean), acqData: D.gK.map(cI) }), ee.X)
                    .volatile(() => ({ sessionId: (0, oo.A)(), isFrontSessionStartSent: !1 }))
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
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u5.l.NO_VALUE;
                                t.setAcqData(e, { isLoadOffersResultSent: !0 });
                            },
                            setLoadingState(a) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u5.l.NO_VALUE;
                                t.setAcqData(i, { ...e.acqData.get(i), loadingState: a });
                            },
                            setAcqData(t, a) {
                                var i;
                                e.acqData.set(t, { loadingState: F.G.IDLE, isLoadOffersResultSent: !1, ...(null != (i = e.acqData.get(t)) ? i : {}), ...a });
                            },
                            getData: (0, D.L3)(function* (a) {
                                let { page: i, places: r, communicationId: l, campaignId: s, widgetServiceName: n } = a,
                                    { acqOffers: o, modelActionsLogger: d } = (0, D._$)(e),
                                    { experiments: g } = (0, _.M)(e),
                                    u = g.getEnabledFlags(),
                                    c = i || u5.l.NO_VALUE;
                                if (e.getLoadingState(i) !== F.G.PENDING) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        t.setLoadingState(F.G.PENDING, c);
                                        let a = {};
                                        (l && (a.communication_id = l), s && (a.campaign_id = s));
                                        let i = yield o.getOffers(c, r, { expFlags: u, eventSessionId: e.sessionId, customProperties: a, widgetServiceName: n });
                                        (t.setAcqData(c, {
                                            ...((e) => {
                                                let { sessionId: t, result: a, offerConfigId: i, mlRequestId: r, page: l, language: s } = e;
                                                return (0, D.wg)({ sessionId: t, page: l, offers: a.map(ca), mlRequestId: r, offerConfigId: i, language: s });
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
                cT = D.gK.model('Offers', { music: cL });
            var ch = a(5503),
                cN = a(93887);
            let cA = D.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: D.gK.boolean,
                        inAppBrowser: D.gK.boolean,
                        isBrowser: D.gK.boolean,
                        isCrawler: D.gK.maybeNull(D.gK.boolean),
                        isMobile: D.gK.boolean,
                        isTablet: D.gK.boolean,
                        isTouch: D.gK.boolean,
                        name: D.gK.maybe(D.gK.string),
                        version: D.gK.maybe(D.gK.string),
                        OSFamily: D.gK.maybe(D.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                cf = D.gK
                    .model('Settings', {
                        layout: D.gK.maybeNull(D.gK.enumeration(Object.keys(gv.u))),
                        isLandscape: D.gK.boolean,
                        isMobileLandscapeHeight: D.gK.boolean,
                        platform: D.gK.maybe(D.gK.enumeration(Object.values(cN.O))),
                        browserInfo: cA,
                        liteVersionMode: D.gK.maybe(D.gK.enumeration(Object.values(ch.w))),
                        selectedThumbId: D.gK.enumeration(Object.values(np.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === gv.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === cN.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === cN.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === cN.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === ch.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === ch.w.DISABLED;
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
                                e.browserInfo = (0, D.wg)({ ...t, version: a });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, D._n)(e)) return;
                                let { containerStorage: a } = (0, D._$)(e),
                                    i = a.get(l6.c.LiteVersionMode);
                                if (i) {
                                    if ('2' !== i.version) return void a.remove(l6.c.LiteVersionMode);
                                    t.setLiteVersionMode(i.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, a) {
                                let { containerStorage: i } = (0, D._$)(e);
                                ((e.liteVersionMode = t), a && i.set(l6.c.LiteVersionMode, { version: '2', mode: t }));
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: a } = (0, D._$)(e),
                                    i = t;
                                (Object.values(np.T).includes(t) || (i = np.T.DEFAULT), (e.selectedThumbId = i));
                                let r = a.get(l6.c.CustomPlayerThumbConfig);
                                a.set(l6.c.CustomPlayerThumbConfig, { ...r, selectedThumbId: i, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, D._n)(e)) return;
                                let { user: a } = (0, _.M)(e),
                                    { localStorage: i } = (0, D._$)(e),
                                    r = i.get(l6.c.CustomPlayerThumbConfig);
                                if (r) {
                                    if ('1' !== r.version || !a.hasPlus) {
                                        ((e.selectedThumbId = np.T.DEFAULT), i.remove(l6.c.CustomPlayerThumbConfig));
                                        return;
                                    }
                                    if (r.selectedThumbId === np.T.BRANDED && a.hasPlus) return void t.setCustomPlayerThumb(np.T.DEFAULT);
                                    t.setCustomPlayerThumb(r.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                cC = D.gK.model('Root', {
                    isRootModel: D.gK.optional(D.gK.literal(!0), !0),
                    experiments: uX,
                    user: uM,
                    forcedLogin: o9,
                    freeAccess: gs,
                    wizard: o2,
                    collection: l3,
                    disclaimersDictionary: uV,
                    main: sg,
                    settings: cf,
                    currentClipInfo: o8,
                    currentTrackInfo: dF,
                    album: e7,
                    artist: li,
                    library: u3,
                    sonataState: dM,
                    playlist: sA,
                    albumCPA: M,
                    slides: uk,
                    vibe: oC,
                    multivibe: dr,
                    sharedVibe: df,
                    search: nl,
                    vibeSettings: d6,
                    pinsCollection: n8,
                    landingBlockEntities: nj,
                    contextMenuTrackPlaylists: dB,
                    contextMenuAddTracksToPlaylist: dl,
                    createPlaylist: gE,
                    location: u2,
                    nonMusic: sy,
                    disclaimerModalState: uB,
                    communication: nk,
                    trailer: oA,
                    modals: nz,
                    landing: rx,
                    landingSdkModel: nX,
                    fullscreenPlayer: oE,
                    freePlayerAccess: ot,
                    fullscreenVideoPlayer: oD,
                    releaseNotes: o4,
                    trackComplaint: dx,
                    trackLyrics: dj,
                    ugcUploadCenter: dZ,
                    paymentWidgetModal: gp,
                    offers: cT,
                    quality: ov,
                    kids: ss,
                    slam: dk,
                    advert: n9,
                    track: ns,
                    continueListen: n_,
                    familyInvite: nU,
                    redAlert: gK,
                    shareIframe: dA,
                    paywall: n6,
                    downloadMobileApp: nO,
                    advertBanners: nS,
                    desktopPaywall: gb,
                    concerts: si,
                    concert: l5,
                    wheel: oJ,
                    words: gl,
                    lumen: gc,
                }),
                cR = {
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
                            activeTabIndex: lv.a.CREATED,
                            tabs: [lv.a.CREATED, lv.a.LIKED],
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
                        selectedThumbId: np.T.DEFAULT,
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
                            type: eE.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eb.IDLE,
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
                        status: oi.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: d_.pM.NONE,
                        quality: dD.e.BALANCED,
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
                            type: eE.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: eb.IDLE,
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
                        sonataStatusBeforeTrailerStart: oi.MT.IDLE,
                        isManuallyPaused: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: oi.MT.IDLE },
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
                        sonataStatusBeforeClipStart: oi.MT.IDLE,
                        withAnimation: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: oi.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
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
                        status: gy.c.IDLE,
                    },
                    offers: { music: { loadingState: F.G.IDLE } },
                    quality: { modal: {} },
                    releaseNotes: { modal: {} },
                    slam: { networkStatus: {} },
                    track: { loadingState: F.G.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                    familyInvite: { info: { loadingState: F.G.IDLE }, acceptanceLoadingState: F.G.IDLE, modal: {}, step: nG._.INFO },
                    continueListen: {},
                    redAlert: { loadingState: F.G.IDLE },
                    shareIframe: { modal: {} },
                    paywall: { modal: {}, freemiumCollectionBarrier: !1 },
                    downloadMobileApp: { modal: {} },
                    advertBanners: {
                        banners: {
                            topAdvertBanner: { type: nn.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            sideAdvertBanner: { type: nn.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlaylistBanner: { type: nn.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlayerBanner: { type: nn.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                            brandedEntityAxeBanner: { type: nn.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
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
                ck = new Set([
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
            let cP = (e) => {
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
                                        return ck.has(a);
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
                cD = () => {
                    var e;
                    let t = null != (e = window.__STATE_PATCHES__) ? e : [];
                    return (delete window.__STATE_PATCHES__, t);
                },
                c_ = (e) => {
                    let { children: t, nonce: a } = e,
                        i = (0, P.Y)(),
                        r = (0, A.N)(),
                        { store: l, patchesRef: s } = (0, R.m)({ createStore: () => cC.create(cR, i), getPendingPatchBatches: cD, patchesUpdatedEventName: C.s });
                    return (
                        (0, f.d)(r.get(N.y$), () => l.slam.offlineMode),
                        (0, K.jsxs)(K.Fragment, { children: [(0, K.jsx)(cP, { nonce: a, patchesRef: s }), (0, K.jsx)(k.P.Provider, { value: l, children: t })] })
                    );
                };
        },
        70565: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { c: () => i });
            let i = 20;
        },
        71594: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        71774: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        73245: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => l });
            var i = a(5120),
                r = a(12906);
            let l = (e) => {
                var t, a;
                let { playlist: l, generatedPlaylistType: s, likesCount: n, trailer: o, tracksCount: d } = e;
                return (0, i.wg)({
                    isAvailable: null == (a = l.available) || a,
                    uuid: l.playlistUuid,
                    title: l.title,
                    uid: l.uid,
                    kind: l.kind,
                    coverUri: null == (t = l.cover) ? void 0 : t.uri,
                    generatedPlaylistType: s,
                    likesCount: n,
                    tracksCount: d,
                    trailer: (0, r.m)(o),
                });
            };
        },
        73596: (e, t, a) => {
            'use strict';
            a.d(t, { AppSuspenseLoader: () => n });
            var i = a(88800),
                r = a(53548),
                l = a(87396);
            let s = (0, r.createContext)(null),
                n = () => {
                    let e = (0, r.useContext)(s);
                    return ((0, r.useLayoutEffect)(() => (null == e ? void 0 : e()), [e]), e ? null : (0, i.jsx)(l.MainSuspenseLoader, {}));
                };
        },
        74591: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        75177: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'), (e.NON_MUSIC = 'NON_MUSIC'));
                })(i || (i = {})));
        },
        76794: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(i || (i = {})));
        },
        77560: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        78460: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => l });
            var i = a(5120),
                r = a(90544);
            let l = a(83176).Z.props({ artists: i.gK.maybe(i.gK.array(r.P)) });
        },
        78686: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => r });
            var i = a(70565);
            let r = (e, t) => {
                let { isMobile: a, isOfflineModeEnabled: r } = t,
                    { isNonUserGenerated: l } = (0, i.I)(e.trackSource);
                return e.isAvailable && l && !a && !r;
            };
        },
        79993: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
        80989: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => String([...e].sort());
        },
        81423: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => r, d: () => i });
            let i = 20,
                r = 1;
        },
        82457: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var i = a(7123);
            let r = (e, t) => ({ type: i.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        83176: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            var i = a(5120);
            let r = i.gK.model('TrackIdModel', { id: i.gK.union(i.gK.string, i.gK.number), albumId: i.gK.maybe(i.gK.number), timestamp: i.gK.maybe(i.gK.string) }),
                l = a(39339)
                    .$.props({ tracks: i.gK.maybe(i.gK.array(r)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        83890: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(5120),
                r = a(41917);
            let l = (e) => {
                let t = (0, r.m)(e);
                return (0, i.wg)(t);
            };
        },
        84403: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        84985: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        85585: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        85587: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i, n: () => r });
            var i = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        87128: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e);
            })({});
        },
        87396: (e, t, a) => {
            'use strict';
            a.d(t, { MainSuspenseLoader: () => n });
            var i = a(88800),
                r = a(52300),
                l = a(60932),
                s = a.n(l);
            let n = (e) => {
                let { style: t } = e,
                    a = {
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
                return (0, i.jsx)('div', {
                    style: a,
                    children: (0, i.jsx)(r.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        90420: (e, t, a) => {
            'use strict';
            a.d(t, { M1: () => i, N7: () => n, UM: () => r, q7: () => s, yx: () => l });
            let i = 'user:onyourwave',
                r = ['activity'],
                l = 'diversity:reshuffle',
                s = 'multivibe',
                n = 'user';
        },
        93512: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => r });
            var i = a(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        97804: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { J: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        98138: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => l });
            var i = a(5120),
                r = a(89625);
            let l = (e) => {
                let t = (0, r.G)(e);
                return (0, i.wg)(t);
            };
        },
        98953: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99159: (e, t, a) => {
            'use strict';
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
            'use strict';
            a.d(t, { j: () => s });
            var i = a(5120),
                r = a(48109),
                l = a(12906);
            let s = (e) => {
                var t, a, s, n, o;
                e = e || {};
                let d = (0, l.m)(e.trailer);
                return (0, i.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (a = s.itemsUri) ? void 0 : a[0]),
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
