(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9385],
    {
        421: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { o: () => i }),
                (function (e) {
                    (e.ARTIST = 'artist'), (e.COMPOSER = 'composer');
                })(i || (i = {}));
        },
        1053: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { $: () => i }),
                (function (e) {
                    (e.TOP = 'top'),
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
                        (e.CONCERT = 'concert');
                })(i || (i = {}));
        },
        1714: (e, t, a) => {
            'use strict';
            a.d(t, { EK: () => d, GF: () => s, Tu: () => n, VI: () => o, bF: () => g, bg: () => c, e0: () => m, fZ: () => r, g2: () => i, ur: () => u, wO: () => l });
            let i = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                r = 0.5,
                s = 1.5,
                n = 1,
                o = 1920,
                d = 20,
                g = 1.7,
                u = 16,
                c = '.swiper-pagination,[data-screenshot-hidden]',
                m = 600;
        },
        2047: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { L: () => i }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(i || (i = {}));
        },
        2937: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => r });
            var i = a(60754),
                l = a(4550);
            let r = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(l.R)),
            });
        },
        3623: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { R: () => i }),
                (function (e) {
                    (e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio');
                })(i || (i = {}));
        },
        3961: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { z: () => i }),
                (function (e) {
                    (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'), (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'), (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED');
                })(i || (i = {}));
        },
        4359: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(37215);
            let l = (e) => !!e && (e === i.g.RATING || e === i.g.YEAR);
        },
        4408: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        4550: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { R: () => i }),
                (function (e) {
                    (e.RADIAL = 'RADIAL'), (e.STACK = 'STACK');
                })(i || (i = {}));
        },
        4932: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(60754);
            let l = i.gK.model('BaseModal', { isOpened: i.gK.optional(i.gK.boolean, !1) }).actions((e) => ({
                onOpenChange(t) {
                    e.isOpened = t;
                },
                open() {
                    e.isOpened = !0;
                },
                close() {
                    e.isOpened = !1;
                },
            }));
        },
        6074: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return (e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e;
            })({});
        },
        6791: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { z: () => i }),
                (function (e) {
                    (e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
                })(i || (i = {}));
        },
        8246: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { x: () => i }),
                (function (e) {
                    (e.ASC = 'asc'), (e.DESC = 'desc');
                })(i || (i = {}));
        },
        8322: (e, t, a) => {
            'use strict';
            a.d(t, { M1: () => i, UM: () => l, yx: () => r });
            let i = 'user:onyourwave',
                l = ['activity'],
                r = 'diversity:reshuffle';
        },
        9105: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            var i = (function (e) {
                return (e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e;
            })({});
        },
        9634: (e, t, a) => {
            'use strict';
            a.d(t, { MainSuspenseLoader: () => n });
            var i = a(32290),
                l = a(82586),
                r = a(82542),
                s = a.n(r);
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
                    children: (0, i.jsx)(l.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        9970: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l, d: () => i });
            let i = (e) => String(e).split(':'),
                l = (e, t) => (t ? [e, t].join(':') : e);
        },
        12583: (e, t, a) => {
            'use strict';
            a.d(t, { W4: () => r, qV: () => i, yc: () => l });
            let i = Symbol(),
                l = Symbol(),
                r = Symbol();
        },
        13616: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(60754);
            let l = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        14971: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        15774: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return (e.TRACK = 'track'), (e.TEXT = 'text'), e;
            })({});
        },
        19053: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = '{tld}';
        },
        19158: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        19381: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(60754),
                l = a(36125),
                r = a(69538),
                s = a(82757);
            let n = (e, t) => {
                var a, n, o, d;
                let { uri: g, color: u } = e.cover || {};
                return (0, i.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, r.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: g, color: u },
                    rank: e.rank,
                    cashbackTitle: null == (a = e.cashback) ? void 0 : a.title,
                    cashbackValuePercent: null == (n = e.cashback) ? void 0 : n.valuePercent,
                    price: (0, s.J)(t),
                    eventKind: null != (d = null == (o = e.eventInfo) ? void 0 : o.type) ? d : l.Z.UNSPECIFIED,
                });
            };
        },
        20168: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        20472: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => l });
            var i = a(36477);
            let l = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        20979: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return (e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e;
            })({});
        },
        21263: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => String([...e].sort());
        },
        21994: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.DISCOGRAPHY = 'discography'), (e.ALBUMS = 'albums'), (e.COMPILATIONS = 'compilations'), e;
            })({});
        },
        22266: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
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
        23200: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(60754),
                l = a(85796),
                r = a(32012);
            let s = (e, t) => (0, i.wg)({ ...(0, r.v)(e), chart: t && (0, l.w)(t) });
        },
        23248: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            var i = (function (e) {
                return (e.VIDEO = 'video'), (e.AUDIO = 'audio'), e;
            })({});
        },
        24991: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING');
                })(i || (i = {}));
        },
        25079: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var i = a(58741),
                l = a(95415);
            function r() {
                let e = '';
                switch ((0, l.u)()) {
                    case i.O.WINDOWS:
                        e = 'kzqU4XhfCaY6B6JTHODeq5';
                        break;
                    case i.O.MACOS:
                        e = 'uz0zSpaYCLmgk6C7YLdo5F';
                        break;
                    case i.O.LINUX:
                        e = 'uVNvVMAvdrvjtwN0VlhEt2';
                }
                return e;
            }
        },
        25266: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { a: () => i }),
                (function (e) {
                    (e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral');
                })(i || (i = {}));
        },
        26749: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return (e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e;
            })({});
        },
        27246: (e, t, a) => {
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
        27515: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        28598: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            var i = (function (e) {
                return (e.IntroPlan = 'IntroPlan'), (e.IntroUntilPlan = 'IntroUntilPlan'), (e.TrialPlan = 'TrialPlan'), (e.TrialUntilPlan = 'TrialUntilPlan'), e;
            })({});
        },
        30294: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = 20;
        },
        31209: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(96194);
            let l = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => l.includes(e.type);
        },
        32919: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => g });
            var i = a(60754),
                l = a(87953),
                r = a(96194),
                s = a(2937),
                n = a(49399),
                o = a(73715),
                d = a(53801);
            let g = i.gK
                .compose(i.gK.model('Mixes', { items: i.gK.array(s.f), errorStatusCode: i.gK.maybeNull(i.gK.number) }), o.X)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === n.G.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === l.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, i.L3)(function* (t) {
                        let { landingResource: a, modelActionsLogger: s } = (0, i._$)(e);
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let l = yield a.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: r.t.MIXES });
                                (e.items = { items: (0, i.wg)(l.items.map((e) => (0, d.J)(e.data))) }.items), (e.loadingState = n.G.RESOLVE);
                            } catch (t) {
                                s.error(t),
                                    t instanceof l.GX && (t.statusCode === l.X1.NOT_FOUND || t.statusCode === l.X1.BAD_REQUEST) && (e.errorStatusCode = l.X1.NOT_FOUND),
                                    e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT);
                            }
                    }),
                }));
        },
        33229: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var i = a(60754),
                l = a(93159),
                r = a(26544);
            let s = (e) => {
                var t, a, s, n, o;
                e = e || {};
                let d = (0, r.m)(e.trailer);
                return (0, i.wg)({
                    isAvailable: null == (n = e.available) || n,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (s = e.cover) || null == (a = s.itemsUri) ? void 0 : a[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, l.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: d,
                });
            };
        },
        36125: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { Z: () => i }),
                (function (e) {
                    (e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified');
                })(i || (i = {}));
        },
        36516: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { m: () => i }),
                (function (e) {
                    (e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE');
                })(i || (i = {}));
        },
        36751: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { b: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.OTHER = 'OTHER');
                })(i || (i = {}));
        },
        36885: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(19381);
            let l = (e) => (0, i.h)(e.data.concert, e.data.minPrice);
        },
        37184: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { l: () => i }),
                (function (e) {
                    (e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab');
                })(i || (i = {}));
        },
        37215: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { g: () => i }),
                (function (e) {
                    (e.RATING = 'rating'), (e.YEAR = 'year');
                })(i || (i = {}));
        },
        38769: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => i });
            var i = (function (e) {
                return (e[(e.CREATED = 0)] = 'CREATED'), (e[(e.LIKED = 1)] = 'LIKED'), e;
            })({});
        },
        39645: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        39670: (e, t, a) => {
            'use strict';
            a.d(t, { ContainerProvider: () => c });
            var i = a(32290),
                l = a(55178),
                r = a(70204),
                s = a(34186);
            let n = (0, l.cache)(async (e, t, i, l, r, s, n, o, d, g, u, c, m, p, y, E) => {
                {
                    let { createDesktopContainer: i } = await Promise.all([a.e(2732), a.e(3227), a.e(6966), a.e(2288), a.e(5055), a.e(5121)]).then(a.bind(a, 47502));
                    return i({ tld: e, env: t });
                }
            });
            var o = a(9634);
            let d = null,
                g = async (e) => {
                    var t;
                    let { baseSetup: a } = e,
                        i = await n(
                            ...(function (e) {
                                let {
                                        backendHostTld: t,
                                        env: a,
                                        forwardedForY: i,
                                        tracestate: l,
                                        traceparent: r,
                                        icookie: s,
                                        serverDetectedLocale: n,
                                        changeLanguageToken: o,
                                        userAgent: d,
                                        incomingRequestId: g,
                                        browserInfo: u,
                                        customApiPrefixUrl: c,
                                        customApiToken: m,
                                        requestUrl: p,
                                    } = e,
                                    { rawCookieString: y } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return [t, a, i, l, r, s, n, o, d, g, y, u.name, u.version, c, m, p];
                            })(a),
                        );
                    return await i.get(r.Xc).loadDictionary(), await (null == (t = await i.get(r.RG)) ? void 0 : t()), i;
                },
                u = (e) => {
                    let { children: t, containerLoader: a } = e;
                    return d || (d = (0, l.use)(a)), (0, i.jsx)(s.B.Provider, { value: d, children: t });
                },
                c = (e) => {
                    let { children: t, baseSetup: a } = e,
                        r = g({ baseSetup: a });
                    return (0, i.jsx)(l.Suspense, { fallback: (0, i.jsx)(o.MainSuspenseLoader, {}), children: (0, i.jsx)(u, { containerLoader: r, children: t }) });
                };
        },
        41190: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(72676);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        41670: (e, t, a) => {
            'use strict';
            a.d(t, { O9: () => u, rl: () => l, mz: () => o, zE: () => i });
            var i,
                l,
                r = a(91945),
                s = a(29222);
            !(function (e) {
                (e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE');
            })(i || (i = {}));
            class n {
                attachSkeleton(e) {
                    this.skeleton = e;
                }
                observe(e) {
                    let { element: t, id: a } = e;
                    t && (this.targetsToIdMap.set(t, a), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                disconnect() {
                    this.detector.disconnect(), this.targetsToIdMap.clear();
                }
                onVisibilityChange(e) {
                    if (this.skeleton)
                        for (let t of e) {
                            let e = this.targetsToIdMap.get(t.target);
                            if (!e) continue;
                            let a = this.skeleton.getNodeById(e);
                            a && (t.isIntersecting ? (a.state.visibilityStatus.value = i.VISIBLE) : (a.state.visibilityStatus.value = i.HIDDEN));
                        }
                }
                constructor(e) {
                    (0, r._)(this, 'detector', void 0),
                        (0, r._)(this, 'skeleton', void 0),
                        (0, r._)(this, 'targetsToIdMap', new Map()),
                        (this.detector = e.create({ onVisibilityChange: this.onVisibilityChange.bind(this) }));
                }
            }
            class o {
                async createSkeleton(e) {
                    let { data: t, loadSkeletonMeta: a = !0, preloadedBlocksMeta: i } = e,
                        l = this.skeletonFactory.create({ data: t });
                    this.visibilityController && this.visibilityController.attachSkeleton(l), await l.createTree(a, i), l.onNodesVisibilityChange(), (this.skeleton = l);
                }
                createVisibilityController(e) {
                    (this.visibilityController = new n(e)), this.skeleton && this.visibilityController.attachSkeleton(this.skeleton);
                }
                observe(e) {
                    let { target: t, loadIfNoElement: a = !1 } = e,
                        { element: i, id: l } = t;
                    if (!i && a) {
                        var r;
                        let e = null == (r = this.skeleton) ? void 0 : r.getNodeById(l);
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
                destroy() {
                    var e;
                    if (!this.visibilityController) throw new s.t('VisibilityController has not been created');
                    this.visibilityController.disconnect(), null == (e = this.skeleton) || e.destroy();
                }
                constructor({ skeletonFactory: e }) {
                    (0, r._)(this, 'skeletonFactory', void 0),
                        (0, r._)(this, 'visibilityController', void 0),
                        (0, r._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e);
                }
            }
            class d {
                observe(e) {
                    this.observer.observe(e);
                }
                unobserve(e) {
                    this.observer.unobserve(e);
                }
                disconnect() {
                    this.observer.disconnect();
                }
                constructor({ onVisibilityChange: e }) {
                    (0, r._)(this, 'observer', void 0),
                        (this.observer = new IntersectionObserver((t) => {
                            e(t);
                        }));
                }
            }
            class g {
                observe(e) {}
                unobserve(e) {}
                disconnect() {}
            }
            class u {
                create(e) {
                    return 'undefined' == typeof IntersectionObserver ? new g() : new d(e);
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT');
            })(l || (l = {}));
        },
        43922: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => s, ew: () => r });
            let i = 220,
                l = 88,
                r = 'px',
                s = '{lang}';
        },
        44240: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }),
                (function (e) {
                    (e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE');
                })(i || (i = {}));
        },
        44265: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
            })({});
        },
        44944: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { x: () => i }),
                (function (e) {
                    (e.TEXT = 'TEXT'),
                        (e.TEXT_FACT = 'TEXT_FACT'),
                        (e.STATS = 'STATS'),
                        (e.CHART = 'CHART'),
                        (e.CHART_FAVORITES = 'CHART_FAVORITES'),
                        (e.SINGLE_ENTITY = 'SINGLE_ENTITY'),
                        (e.ARTISTS = 'ARTISTS'),
                        (e.CHART_ARTIST = 'CHART_ARTIST'),
                        (e.TEXT_EXTENDED = 'TEXT_EXTENDED'),
                        (e.THEN_NOW_COMPARISON = 'THEN_NOW_COMPARISON'),
                        (e.PAY_CARD = 'PAY_CARD'),
                        (e.CAROUSEL = 'CAROUSEL'),
                        (e.COLLAGE = 'COLLAGE'),
                        (e.LINEUP = 'LINEUP'),
                        (e.LUMEN = 'LUMEN');
                })(i || (i = {}));
        },
        45447: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => l });
            var i = a(72676);
            let l = (e, t) => ({ type: i.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        51496: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { U: () => i }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female');
                })(i || (i = {}));
        },
        51675: (e, t, a) => {
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
        53453: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var i = (function (e) {
                return (e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e;
            })({});
        },
        53801: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => l });
            var i = a(60754);
            let l = (e) => {
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
        55516: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(60754),
                l = a(33229);
            let r = (e) =>
                (0, i.wg)({
                    ...(0, l.j)(e),
                    owner: e.owner ? ((e) => ({ uid: e.uid, login: e.login, name: e.name, sex: e.sex, verified: e.verified }))(e.owner) : void 0,
                    description: e.description,
                    tags: e.tags,
                    modified: e.modified,
                    madeFor: e.madeFor
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
                              }))(e.madeFor)
                        : null,
                });
        },
        55573: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => o });
            var i = a(60754),
                l = a(15567),
                r = a(79406),
                s = a(99703);
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
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(r.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(r.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        57941: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { r: () => i }),
                (function (e) {
                    (e.TRACK = 'best_result_track'),
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
                        (e.BOOK_CHAPTER = 'best_result_book_chapter');
                })(i || (i = {}));
        },
        58008: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            var i = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), e;
            })({});
        },
        59170: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return (e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e;
            })({});
        },
        59407: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => d });
            var i = a(60754),
                l = a(3623),
                r = a(32012),
                s = a(99212),
                n = a(49399),
                o = a(73715);
            let d = i.gK
                .compose(i.gK.model('DownloadedTracks', { items: i.gK.maybeNull(i.gK.array(s.v)), tracks: i.gK.maybeNull(i.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: l.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t, a) {
                        let { modelActionsLogger: l } = (0, i._$)(e);
                        if (e.loadingState !== n.G.PENDING)
                            try {
                                e.loadingState = n.G.PENDING;
                                let l = yield t.getTracks(a);
                                (e.tracks = l), (e.items = (0, i.wg)(l.map((e) => (0, r.v)(e)))), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.RESOLVE);
                            } catch (t) {
                                l.error(t), e.loadingState !== n.G.IDLE && (e.loadingState = n.G.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = n.G.IDLE);
                    },
                }));
        },
        60277: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        61341: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return (e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e;
            })({});
        },
        63380: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { f: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        64605: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { _: () => i }),
                (function (e) {
                    (e.UNKNOWN = 'unknown'),
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
                        (e.NOISE = 'noise');
                })(i || (i = {}));
        },
        69319: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { n: () => i }),
                (function (e) {
                    (e.ALL = 'all'),
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
                        (e.CONCERT = 'concert');
                })(i || (i = {}));
        },
        69538: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            let i = /[+-]\d{2}:?\d{2}/,
                l = (e) => (null == e ? void 0 : e.replace(i, ''));
        },
        70208: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return (e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e;
            })({});
        },
        71062: (e, t, a) => {
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
        71983: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return (e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e;
            })({});
        },
        72428: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(60754),
                l = a(69757),
                r = a(84060);
            let s = (e) => {
                let t = e.artists.map((e) => (0, r.d)(e));
                return (0, i.wg)({ ...(0, l.e)(e), artists: t });
            };
        },
        73474: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { p: () => i }),
                (function (e) {
                    (e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page');
                })(i || (i = {}));
        },
        75170: (e, t, a) => {
            'use strict';
            a.d(t, { StoreProvider: () => uj });
            var i,
                l,
                r,
                s,
                n,
                o,
                d,
                g,
                u,
                c,
                m,
                p,
                y,
                E,
                S,
                K,
                b,
                v = a(32290),
                I = a(96103),
                L = a(21916),
                T = a(80451),
                N = a(96218),
                A = a(5245),
                h = a(57594),
                C = a(31726),
                f = a(60754),
                R = a(15567),
                k = a(79406),
                D = a(93841);
            let _ = f.gK.model('Cpa', { clid: f.gK.string, artistId: f.gK.number }),
                P = f.gK
                    .compose(f.gK.model('AlbumCpa', { albumId: f.gK.maybeNull(f.gK.number), cpa: f.gK.maybeNull(_) }), D.p)
                    .views((e) => ({
                        isPlusCPAEnabled(t) {
                            let { pageAlbumId: a, albumId: i, isNonMusic: l } = t,
                                {
                                    experiments: r,
                                    user: { isAuthorized: s },
                                } = (0, R.M)(e);
                            return !1;
                        },
                        isPlusCPAPlayerBarEnabled(t, a) {
                            let {
                                experiments: i,
                                user: { hasPlus: l },
                            } = (0, R.M)(e);
                            return !1;
                        },
                        isPlusCPABannerEnabled(t) {
                            var a;
                            let { pageAlbumId: i, albumId: l, isNonMusic: r } = t,
                                {
                                    experiments: s,
                                    settings: n,
                                    user: { hasPlus: o },
                                } = (0, R.M)(e);
                            return null == (a = n.browserInfo) || a.isTouch, !1;
                        },
                        isHidePlusModalEnabled(t, a) {
                            var i;
                            let {
                                settings: l,
                                user: { hasPlus: r },
                            } = (0, R.M)(e);
                            return null == (i = l.browserInfo) || i.isTouch, !1;
                        },
                    }))
                    .actions((e) => ({
                        getCpa: (0, f.L3)(function* (t) {
                            let { albumId: a, preloadedCpa: i } = t,
                                { experiments: l, user: r } = (0, R.M)(e);
                        }),
                        reset() {
                            (e.albumId = null), e.destroyItems([e.cpa]);
                        },
                    }));
            var O = a(87953),
                w = a(92013);
            ((i || (i = {})).RECENT_ALBUMS = 'recent-albums'),
                (function (e) {
                    (e[(e.DAY = 1)] = 'DAY'), (e[(e.WEEK = 7)] = 'WEEK'), (e[(e.MONTH = 30)] = 'MONTH');
                })(l || (l = {}));
            var G = a(44547),
                M = a(96333),
                U = a(99212),
                B = a(15774),
                V = a(73715);
            let F = f.gK
                    .compose(
                        f.gK.model('VolumeItemTrack', {
                            type: f.gK.maybe(f.gK.enumeration(Object.values(M.S))),
                            id: f.gK.union(f.gK.string, f.gK.number),
                            data: f.gK.maybeNull(U.v),
                            position: f.gK.maybe(f.gK.number),
                            positionInContext: f.gK.number,
                            isBest: f.gK.maybe(f.gK.boolean),
                            hasEverFinished: f.gK.maybe(f.gK.boolean),
                        }),
                        V.X,
                    )
                    .actions((e) => ({
                        updateEverFinished: (t) => {
                            e.hasEverFinished = t;
                        },
                    }))
                    .named('VolumeItemTrack'),
                x = f.gK.compose(f.gK.model('VolumeItemText', { type: f.gK.literal(B.r.TEXT), data: f.gK.maybeNull(f.gK.number) }), V.X),
                j = f.gK.union(x, F);
            var W = a(90404),
                X = a(23361);
            let Y = (e, t, a, i) => ({ type: W._.ALBUM_ITEM, data: (0, X.s)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var $ = a(74417);
            let H = (e, t) => ({ type: W._.ARTIST_ITEM, data: (0, $.a)({ artist: e, trailer: t }) });
            var J = a(39031);
            let q = (e) => {
                let { playlist: t, likesCount: a, trailer: i, tracksCount: l } = e;
                return { type: W._.LIKED_PLAYLIST_ITEM, data: (0, J.b)({ playlist: t, likesCount: a, trailer: i, tracksCount: l }) };
            };
            var z = a(91221);
            let Q = (e) => (0, f.wg)({ type: W._.WAVE_AGENT_ITEM, data: (0, z.l)(e.data.wave, e.data.agent) }),
                Z = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).items)
                            ? void 0
                            : t.map((e) => {
                                  switch (e.type) {
                                      case W._.LIKED_PLAYLIST_ITEM:
                                          return q({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                                      case W._.ALBUM_ITEM:
                                          return Y(e.data.album, e.data.artists, e.data.trailer, e.data.releaseDate);
                                      case W._.ARTIST_ITEM:
                                          return H(e.data.artist, e.data.trailer);
                                      case W._.WAVE_AGENT_ITEM:
                                          return Q(e);
                                  }
                              });
                    return (0, f.wg)({ items: a });
                };
            var ee = (function (e) {
                    return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e;
                })({}),
                et = a(96194),
                ea = a(99424);
            let ei = (e) => {
                let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: l, isRejected: r, isNotEmpty: s, isOutdated: n, isNeededToHide: o } = e;
                if (o) return !1;
                switch (t) {
                    case ea.E.SHOW_AND_LOAD:
                        if (i || r || a) return !0;
                        return s;
                    case ea.E.LOAD_AND_SHOW:
                        return (l && s) || !!n;
                    default:
                        return !0;
                }
            };
            var el = a(12388);
            let er = f.gK.model('LandingAlbumItem', { type: f.gK.literal(W._.ALBUM_ITEM), data: el.J });
            var es = a(57367);
            let en = f.gK.model('LandingArtistItem', { type: f.gK.literal(W._.ARTIST_ITEM), data: es.P });
            var eo = a(5482);
            let ed = f.gK.model('LandingLikedPlaylistItem', { type: f.gK.literal(W._.LIKED_PLAYLIST_ITEM), data: eo.I });
            var eg = a(1052);
            let eu = f.gK.model('LandingVibeAgentItem', { type: f.gK.union(f.gK.literal(W._.WAVE_AGENT_ITEM), f.gK.literal(W._.QUERY_TO_VIBE_ITEM)), data: eg.G }),
                ec = f.gK
                    .model('LandingBaseBlock', {
                        loadingState: f.gK.enumeration(Object.values(ee)),
                        id: f.gK.string,
                        isNotFound: f.gK.boolean,
                        hasSentAnalyticsOnLoaded: f.gK.boolean,
                        meta: f.gK.maybe(f.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === ee.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === ee.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === ee.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === ee.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === ee.OUTDATED;
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
                            e.loadingState = ee.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = ee.IDLE;
                        },
                    })),
                em = f.gK.model('LandingBlockFetchableMetaSource', { uri: f.gK.string, countWeb: f.gK.maybe(f.gK.number), count: f.gK.maybe(f.gK.number) }),
                ep = f.gK.model('LandingBlockFetchableMeta', {
                    title: f.gK.maybe(f.gK.string),
                    description: f.gK.maybe(f.gK.string),
                    viewAllActionLink: f.gK.maybeNull(f.gK.string),
                    source: f.gK.maybe(em),
                    showPolicy: f.gK.maybe(f.gK.string),
                    coverStyle: f.gK.maybe(f.gK.string),
                }),
                ey = f.gK.union(ed, er, en, eu),
                eE = f.gK.model('EntitiesCarouselData', { items: f.gK.array(ey) }),
                eS = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.NEW_PLAYLISTS),
                            f.gK.literal(et.t.EDITORIAL_COMPILATION),
                            f.gK.literal(et.t.RECOMMENDED_PLAYLISTS),
                            f.gK.literal(et.t.META_TAG_POPULAR_PLAYLISTS),
                            f.gK.literal(et.t.META_TAG_NEW_ALBUMS),
                            f.gK.literal(et.t.META_TAG_PLAYLISTS),
                            f.gK.literal(et.t.MICRO_GENRE_ALBUMS),
                            f.gK.literal(et.t.META_TAG_ALBUMS),
                            f.gK.literal(et.t.ARTIST_PLAYLISTS),
                            f.gK.literal(et.t.ARTIST_ALBUMS),
                            f.gK.literal(et.t.ARTIST_COMPILATIONS),
                            f.gK.literal(et.t.ARTIST_STUDIO_ALBUMS),
                            f.gK.literal(et.t.ARTIST_SIMILAR_ENTITIES),
                            f.gK.literal(et.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: f.gK.maybe(eE),
                        meta: ep,
                    })
                    .named('EntitiesCarousel')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
            var eK = a(72428);
            let eb = (e) => {
                let { url: t, artist: a, goal: i } = e;
                return (0, f.wg)({ url: t, goal: i, artist: (0, $.a)({ artist: a }) });
            };
            var ev = a(49399),
                eI = a(36477),
                eL = a(52947),
                eT = a(45447);
            let eN = (e, t, a) => {
                    let i = e.get(t);
                    if (i) return void i.push(a);
                    e.set(t, [a]);
                },
                eA = (e) => (0, f.wg)({ type: B.r.TEXT, data: null != e ? e : null, loadingState: ev.G.RESOLVE }),
                eh = (e) => {
                    var t;
                    let { data: a, ...i } = e;
                    return (0, f.wg)({ type: null != (t = null == a ? void 0 : a.type) ? t : M.S.TRACK, data: null != a ? a : null, ...i });
                },
                eC = (e) => ''.concat(e, '-text'),
                ef = (e) => String(e);
            var eR = a(32012);
            let ek = (e) => !!(e && 'position' in e),
                eD = (e) => (0, f.wg)({ id: e.id, type: e.type, title: e.title, albums: e.albums.map(eK.p) }),
                e_ = f.gK.model('Donation', { url: f.gK.string, artist: es.P, goal: f.gK.maybe(f.gK.string) }),
                eP = f.gK.compose(f.gK.model('AlbumDonations', { items: f.gK.maybeNull(f.gK.array(e_)) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                    },
                })),
                eO = f.gK.model('LabelItem', { id: f.gK.number, name: f.gK.string }),
                ew = f.gK.compose(f.gK.model('RelatedAlbumsPage', { items: f.gK.array(el.J) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                    },
                })),
                eG = f.gK.model('RelatedContentItem', { id: f.gK.string, type: f.gK.string, title: f.gK.string, albums: f.gK.array(el.J) }),
                eM = f.gK.compose(f.gK.model('RelatedContent', { items: f.gK.maybeNull(f.gK.array(eG)) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                    },
                })),
                eU = f.gK
                    .compose(
                        f.gK.model('AlbumPage', {
                            id: f.gK.maybeNull(f.gK.number),
                            meta: f.gK.maybeNull(el.J),
                            items: f.gK.array(j),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            deprecationTargetAlbumId: f.gK.maybeNull(f.gK.number),
                            latestGenreAlbums: f.gK.maybe(ew),
                            otherArtistAlbums: f.gK.maybe(ew),
                            otherAlbumVersions: f.gK.maybe(f.gK.array(el.J)),
                            labels: f.gK.maybeNull(f.gK.array(eO)),
                            description: f.gK.maybe(f.gK.string),
                            donations: f.gK.maybe(eP),
                            relatedContent: f.gK.maybe(eM),
                            allTracksUnfinished: f.gK.boolean,
                            similarEntities: eS,
                        }),
                        eL.E,
                        D.p,
                        V.X,
                    )
                    .volatile(() => ({ indexItems: new Map() }))
                    .views((e) => {
                        let t = {
                            get isOtherArtistAlbumsAvailable() {
                                var a, i, l, r, s;
                                return !!(
                                    !(null == (a = e.meta) ? void 0 : a.isNonMusic) &&
                                    (null == (l = e.meta) || null == (i = l.artists) ? void 0 : i.length) === 1 &&
                                    !(null == (s = e.meta) || null == (r = s.artists[0]) ? void 0 : r.various)
                                );
                            },
                            get isLatestGenreAlbumsAvailable() {
                                var n, o;
                                return !!(!(null == (n = e.meta) ? void 0 : n.isNonMusic) && (null == (o = e.meta) ? void 0 : o.genre));
                            },
                            get isNotFound() {
                                return e.isRejected && (e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST);
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get isCacheNotFound() {
                                return e.isRejected && e.errorStatusCode === G.FX;
                            },
                            get hasDonations() {
                                var d;
                                return !!((null == (d = e.donations) ? void 0 : d.isResolved) && e.donations && e.donations.items && e.donations.items.length > 0);
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
                                return !!(e.isNeededToLoad || e.loadingState === ev.G.PENDING || (e.otherAlbumVersions && e.otherAlbumVersions.length > 0));
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
                                var m, p;
                                let a = e.otherArtistAlbums && e.otherArtistAlbums.items && e.otherArtistAlbums.items.length > 0;
                                return !!(
                                    t.isOtherArtistAlbumsAvailable &&
                                    ((null == (m = e.otherArtistAlbums) ? void 0 : m.isNeededToLoad) || (null == (p = e.otherArtistAlbums) ? void 0 : p.isLoading) || a)
                                );
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isLatestGenreAlbumsLoading() {
                                var y, E;
                                return !!((null == (y = e.latestGenreAlbums) ? void 0 : y.isNeededToLoad) || (null == (E = e.latestGenreAlbums) ? void 0 : E.isLoading));
                            },
                            get isOtherArtistAlbumsLoading() {
                                var S, K;
                                return !!((null == (S = e.otherArtistAlbums) ? void 0 : S.isNeededToLoad) || (null == (K = e.otherArtistAlbums) ? void 0 : K.isLoading));
                            },
                            get isRelatedContentLoading() {
                                var b, v;
                                return !!((null == (b = e.relatedContent) ? void 0 : b.isNeededToLoad) || (null == (v = e.relatedContent) ? void 0 : v.isLoading));
                            },
                            get contextMeta() {
                                var I, L, T, N, A, h, C, f, D;
                                return {
                                    id: e.meta.id,
                                    title: null == (I = e.meta) ? void 0 : I.title,
                                    coverUri: null == (L = e.meta) ? void 0 : L.coverUri,
                                    type: null == (T = e.meta) ? void 0 : T.type,
                                    year: null == (N = e.meta) ? void 0 : N.year,
                                    version: null == (A = e.meta) ? void 0 : A.version,
                                    genre: null == (h = e.meta) ? void 0 : h.genre,
                                    likesCount: null == (C = e.meta) ? void 0 : C.likesCount,
                                    averageColor: null == (f = e.meta) ? void 0 : f.averageColor,
                                    available: null == (D = e.meta) ? void 0 : D.isAvailable,
                                };
                            },
                            get tracks() {
                                return e.items.filter((e) => e.type !== B.r.TEXT);
                            },
                            get lastEpisodes() {
                                return t.tracks.slice(0, 5);
                            },
                            get lastEpisodesTrackIds() {
                                return t.lastEpisodes.map((e) => e.id);
                            },
                            get hasLabel() {
                                return !!(e.labels && e.labels.length);
                            },
                            labelUrl(e) {
                                let { href: t } = (0, eI.u)('/label/:labelId', { params: { labelId: e } });
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
                                                if (ek(i)) {
                                                    eN(t, ef(i.id), a);
                                                    continue;
                                                }
                                                if (i.type === B.r.TEXT)
                                                    for (let i = a + 1; i < e.length; i++) {
                                                        let l = e[i];
                                                        if (l) {
                                                            if (ek(l)) {
                                                                eN(t, eC(l.id), a);
                                                                break;
                                                            }
                                                            if (l.type === B.r.TEXT) break;
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
                                        let { album: t, initialTracksCountToFetch: a, countVolumesWithoutText: i } = e,
                                            l = t.volumes.length,
                                            r = [],
                                            s = new Map(),
                                            n = [],
                                            o = [],
                                            d = 0;
                                        for (let e of t.volumes)
                                            for (let t of (l > i && e[0] && (r.push(eA()), s.set(eC(e[0].id), [r.length - 1])), e))
                                                o.push((0, eT.l)(t.id)),
                                                    r.push(eh({ id: t.id, loadingState: ev.G.IDLE, positionInContext: d })),
                                                    r.length <= a && n.push(String(t.id)),
                                                    eN(s, ef(t.id), r.length - 1),
                                                    d++;
                                        return { items: r, indexItems: s, initialTrackIds: n, unloadedEntitiesData: o };
                                    })({ album: t, initialTracksCountToFetch: 10, countVolumesWithoutText: 1 });
                                    return (
                                        (e.items = (0, f.wg)(a.items)),
                                        (e.indexItems = a.indexItems),
                                        { initialTrackIds: a.initialTrackIds, unloadedEntitiesData: a.unloadedEntitiesData }
                                    );
                                },
                                updateVolumeItemsState: (a, i) => {
                                    t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, trackIds: i, loadingState: l } = e;
                                            for (let e of i) {
                                                let i = a.get(String(e));
                                                if (i)
                                                    for (let a of i) {
                                                        let i = t[a];
                                                        ek(i) &&
                                                            ((i.id = e),
                                                            (i.type = M.S.TRACK),
                                                            (i.data = null),
                                                            (i.position = void 0),
                                                            (i.isBest = void 0),
                                                            (i.loadingState = l));
                                                    }
                                            }
                                        })({ items: e.items, indexItems: e.indexItems, trackIds: a, loadingState: i });
                                },
                                insertDataToVolumeItems: (a) => {
                                    var i;
                                    return (
                                        t(),
                                        ((e) => {
                                            let { items: t, indexItems: a, data: i, bestAlbumTracks: l } = e,
                                                r = t[0],
                                                s = ek(r) ? r.id : null,
                                                n = l ? new Set(l.map(Number)) : void 0,
                                                o = [];
                                            for (let e = 0; e < i.length; e++) {
                                                var d, g, u, c, m, p, y, E;
                                                let l = i[e];
                                                if (!l) continue;
                                                let r = a.get(ef(l.id)),
                                                    S = !1;
                                                if (r)
                                                    for (let a of r) {
                                                        let i = t[a],
                                                            r = t[a - 1];
                                                        if (!ek(i)) continue;
                                                        let m =
                                                                s === i.id
                                                                    ? 1
                                                                    : null == (u = l.albums) || null == (g = u[0]) || null == (d = g.trackPosition)
                                                                      ? void 0
                                                                      : d.index,
                                                            p = null == i ? void 0 : i.positionInContext,
                                                            y = ek(r) && (null == r ? void 0 : r.position) ? r.position + 1 : m,
                                                            E = (0, eR.v)(l, { hasEverFinished: null == i ? void 0 : i.hasEverFinished });
                                                        if (E.isRemoved) {
                                                            (i.id = l.id),
                                                                (i.type = M.S.TRACK),
                                                                (i.data = null),
                                                                (i.isBest = void 0),
                                                                (i.hasEverFinished = void 0),
                                                                (i.loadingState = ev.G.REJECT),
                                                                (i.positionInContext = p),
                                                                (i.position = ek(r) ? r.position : e);
                                                            continue;
                                                        }
                                                        (i.id = l.id),
                                                            (i.type = null != (c = E.type) ? c : M.S.TRACK),
                                                            (i.data = (0, f.wg)(E)),
                                                            (i.position = (null == r ? void 0 : r.type) === B.r.TEXT ? 1 : y),
                                                            (i.positionInContext = p),
                                                            (i.isBest = null == n ? void 0 : n.has(Number(l.id))),
                                                            (i.loadingState = ev.G.RESOLVE),
                                                            S || (o.push(a), (S = !0));
                                                    }
                                                let K = a.get(eC(l.id));
                                                if (K)
                                                    for (let e of K) {
                                                        let a = t[e];
                                                        (null == a ? void 0 : a.type) === B.r.TEXT &&
                                                            (a.data =
                                                                null !=
                                                                (E = null == (y = l.albums) || null == (p = y[0]) || null == (m = p.trackPosition) ? void 0 : m.volume)
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
                                    a.markUnfinished({ albumId: e.id || 0 }), null == (t = e.meta) || t.updateFinished(!1);
                                },
                                setAllTracksUnfinished: (t) => {
                                    e.allTracksUnfinished = t;
                                },
                                checkAllAlbumTrackFinished: () => {
                                    var t, i;
                                    e.items
                                        .filter((e) => {
                                            let { type: t, data: a } = e;
                                            return a && t !== B.r.TEXT;
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
                                        if (e.type === B.r.TEXT) return;
                                        let { data: t } = e;
                                        if (!(t && a.includes(t.id)))
                                            if (t) {
                                                var i;
                                                null == (i = t.streamProgress) || i.updateEverFinished(!0);
                                            } else e.updateEverFinished(!0);
                                    });
                                },
                                markFinished: (0, f.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                    try {
                                        return yield a.markAlbumFinished(t);
                                    } catch (e) {
                                        return i.error(e), w.T.ERROR;
                                    }
                                }),
                                markUnfinished: (0, f.L3)(function* (t) {
                                    let { streamsResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                    try {
                                        return yield a.markAlbumUnfinished(t);
                                    } catch (e) {
                                        return i.error(e), w.T.ERROR;
                                    }
                                }),
                                setListeningFinishedStatus: (0, f.L3)(function* () {
                                    var t;
                                    return (null == (t = e.meta) ? void 0 : t.listeningFinished)
                                        ? (a.setAllTracksUnfinished(!0), yield a.markUnfinished({ albumId: Number(e.id) }))
                                        : yield a.markFinished({ albumId: Number(e.id) });
                                }),
                                getLatestGenreAlbums: (0, f.L3)(function* (t) {
                                    let { topResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                    if (e.latestGenreAlbums && !e.latestGenreAlbums.isLoading)
                                        try {
                                            e.latestGenreAlbums.loadingState = ev.G.PENDING;
                                            let i = yield a.getTopByGenre(t);
                                            (e.latestGenreAlbums.items = (0, f.wg)(i.albums.map(eK.p))), (e.latestGenreAlbums.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            i.error(t), (e.latestGenreAlbums.loadingState = ev.G.REJECT);
                                        }
                                }),
                                getSimilarEntities: (0, f.L3)(function* (t) {
                                    let { albumResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                    if (!e.similarEntities.isLoading)
                                        try {
                                            e.similarEntities.loadingState = ee.PENDING;
                                            let i = yield a.getSimilarEntities(t);
                                            (e.similarEntities.data = Z(i)), (e.similarEntities.loadingState = ee.RESOLVE);
                                        } catch (t) {
                                            i.error(t), (e.similarEntities.loadingState = ee.REJECT);
                                        }
                                }),
                                getOtherArtistAlbums: (0, f.L3)(function* (t, a) {
                                    let { artistsResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                    if (e.otherArtistAlbums && !e.otherArtistAlbums.isLoading)
                                        try {
                                            if (!t.artistId) {
                                                e.otherArtistAlbums.loadingState = ev.G.REJECT;
                                                return;
                                            }
                                            e.otherArtistAlbums.loadingState = ev.G.PENDING;
                                            let l = yield i.getSafeDirectAlbums({ ...t, artistId: t.artistId });
                                            (e.otherArtistAlbums.items = (0, f.wg)(l.albums.filter((e) => String(e.id) !== String(a)).map(eK.p))),
                                                (e.otherArtistAlbums.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            l.error(t), (e.otherArtistAlbums.loadingState = ev.G.REJECT);
                                        }
                                }),
                                getTracks: (0, f.L3)(function* (t) {
                                    let { trackIds: i } = t,
                                        { tracksResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                    try {
                                        var s, n;
                                        let t;
                                        if (!(null == (s = e.meta) ? void 0 : s.id)) return;
                                        a.updateVolumeItemsState(i, ev.G.PENDING);
                                        let r = yield l.getTracksMeta({ trackIds: ((t = e.meta.id), i.map((e) => ''.concat(e, ':').concat(t))), withProgress: !0 });
                                        for (let t of a.insertDataToVolumeItems(r)) {
                                            let a = e.items[t];
                                            ek(a) && (null == (n = a.data) ? void 0 : n.resolveAllDisclaimers) && a.data.resolveAllDisclaimers();
                                        }
                                    } catch (e) {
                                        r.error(e), a.updateVolumeItemsState(i, ev.G.REJECT);
                                    }
                                }),
                                getDonations: (0, f.L3)(function* (t) {
                                    let { albumId: a } = t,
                                        { experiments: i } = (0, R.M)(e),
                                        { donationResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                    if (i.checkExperiment(k.z.WebNextAlbumDonationButton, 'on') && e.donations && !e.donations.isLoading)
                                        try {
                                            e.donations.loadingState = ev.G.PENDING;
                                            let { donations: t } = yield l.getAlbumDonations({ albumId: a });
                                            t &&
                                                (e.donations.items = (0, f.wg)(
                                                    t.map((e) => {
                                                        var t;
                                                        let { data: a } = e;
                                                        return eb({ url: a.tipUrl, goal: null == (t = a.goal) ? void 0 : t.title, artist: a.artist });
                                                    }),
                                                )),
                                                (e.donations.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            r.error(t), (e.donations.loadingState = ev.G.REJECT);
                                        }
                                }),
                                getData: (0, f.L3)(function* (t) {
                                    let {
                                            albumId: r,
                                            resumeStream: s,
                                            preloadedAlbum: n,
                                            withLatestGenreAlbumsRequest: o = !0,
                                            withOtherArtistAlbumsRequest: d = !0,
                                            sonataState: g,
                                        } = t,
                                        { albumResource: u, modelActionsLogger: c } = (0, f._$)(e);
                                    if (((e.id = r), e.loadingState !== ev.G.PENDING))
                                        try {
                                            var m, p, y, E, S;
                                            let t, c;
                                            e.loadingState = ev.G.PENDING;
                                            let K = n;
                                            if (
                                                (K || (K = yield u.getAlbumWithTracksIds({ albumId: r, resumeStream: s })),
                                                (null == K ? void 0 : K.error) === 'not-found')
                                            ) {
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                                    (e.loadingState = ev.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = ev.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = ev.G.REJECT);
                                                return;
                                            }
                                            if (null == (m = K.deprecation) ? void 0 : m.targetAlbumId) {
                                                (e.deprecationTargetAlbumId = K.deprecation.targetAlbumId), (e.loadingState = ev.G.RESOLVE);
                                                return;
                                            }
                                            (e.meta = (0, eK.p)(K)),
                                                (e.labels = (0, f.wg)(K.labels)),
                                                (e.contentWarning = (0, f.wg)(K.contentWarning)),
                                                (e.description = (0, f.wg)(K.description)),
                                                K.duplicates &&
                                                    K.duplicates.length > 0 &&
                                                    (e.otherAlbumVersions = (0, f.wg)(null == (E = K.duplicates) ? void 0 : E.map(eK.p)));
                                            let { initialTrackIds: b, unloadedEntitiesData: v } = a.makeFlatVolumeItems(K);
                                            g.setUnloadedEntitiesData(v);
                                            let I = null == (y = e.meta) || null == (p = y.resolveAllDisclaimers) ? void 0 : p.call(y),
                                                L = a.getTracks({ trackIds: b });
                                            e.isLatestGenreAlbumsAvailable &&
                                                o &&
                                                (t = a.getLatestGenreAlbums({ category: i.RECENT_ALBUMS, period: l.WEEK, pageSize: 8, genre: K.genre })),
                                                e.isOtherArtistAlbumsAvailable &&
                                                    d &&
                                                    (c = a.getOtherArtistAlbums({ artistId: String(null == (S = K.artists[0]) ? void 0 : S.id), limit: 8 }, r)),
                                                yield Promise.allSettled([I, L, t, c]),
                                                e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            c.error(t),
                                                t instanceof O.GX && (e.errorStatusCode = t.statusCode),
                                                e.loadingState !== ev.G.IDLE &&
                                                    ((e.loadingState = ev.G.REJECT),
                                                    e.otherArtistAlbums && (e.otherArtistAlbums.loadingState = ev.G.REJECT),
                                                    e.latestGenreAlbums && (e.latestGenreAlbums.loadingState = ev.G.REJECT));
                                        }
                                }),
                                loadLastEpisodes() {
                                    a.getTracks({ trackIds: e.lastEpisodesTrackIds });
                                },
                                getRelatedContent: (0, f.L3)(function* () {
                                    let { albumResource: t, modelActionsLogger: a } = (0, f._$)(e);
                                    if (e.relatedContent && !e.relatedContent.isLoading)
                                        try {
                                            var i, l;
                                            if (!(null == (i = e.meta) ? void 0 : i.id)) return;
                                            e.relatedContent.loadingState = ev.G.PENDING;
                                            let a = yield t.getRelatedContent({ albumId: e.meta.id });
                                            (e.relatedContent.items = (0, f.wg)(null == (l = a.blocks) ? void 0 : l.map(eD))),
                                                (e.relatedContent.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            a.error(t), (e.relatedContent.loadingState = ev.G.REJECT);
                                        }
                                }),
                                reset(t) {
                                    var a, i, l, r;
                                    let { albumCPA: s } = (0, R.M)(e);
                                    s.reset(),
                                        t.resetUnloadedEntitiesData(),
                                        (e.id = null),
                                        (e.errorStatusCode = null),
                                        (e.deprecationTargetAlbumId = null),
                                        e.indexItems.clear(),
                                        (e.loadingState = ev.G.IDLE),
                                        (e.description = ''),
                                        (e.allTracksUnfinished = !1),
                                        null == (a = e.latestGenreAlbums) || a.reset(),
                                        null == (i = e.otherArtistAlbums) || i.reset(),
                                        null == (l = e.relatedContent) || l.reset(),
                                        null == (r = e.donations) || r.reset(),
                                        (e.similarEntities.data = void 0),
                                        (e.similarEntities.loadingState = ee.IDLE),
                                        e.destroyItems([e.meta, e.items, e.otherAlbumVersions, e.labels]);
                                },
                            };
                        return a;
                    }),
                eB = [et.t.COLLECTION_FAVOURITE_PLAYLIST],
                eV = (e) => eB.includes(e);
            var eF = a(31209);
            let ex = [et.t.COLLECTION_DOWNLOADED_TRACKS],
                ej = (e) =>
                    (0, f.wg)({
                        reporting: ((e) => {
                            if (e) return { adImpressions: e.adImpressions, blockImpression: e.blockImpression, blockRender: e.blockRender };
                        })(e.reporting),
                        items: e.albumBanners.map((e) => ({
                            album: (0, X.s)({ album: e.album, artists: e.artists }),
                            artists: e.artists.map((e) => (0, $.a)({ artist: e })),
                            cover: e.cover,
                            coverContentMode: e.coverContentMode,
                            clickUrl: e.reporting.clickUrl,
                            yclid: e.playbackParams.yclid,
                            utm: e.playbackParams.utm,
                        })),
                    });
            var eW = a(19381),
                eX = a(51322),
                eY = a(23200);
            let e$ = (e) => {
                    var t, a;
                    let i =
                        null == (a = (e || {}).chart) || null == (t = a.tracks)
                            ? void 0
                            : t.map((e) => {
                                  let { track: t, chart: a } = e;
                                  return { type: W._.TRACK_ITEM, data: (0, eY.b)(t, a) };
                              });
                    return (0, f.wg)({ items: i, playlist: (0, J.b)({ playlist: null == e ? void 0 : e.chart }) });
                },
                eH = (e) => {
                    var t, a;
                    let { clip: i, artists: l } = e,
                        { available: r, disclaimers: s } = (0, eX.f)(i);
                    return (0, f.wg)({
                        clipId: i.id,
                        title: i.title,
                        thumbnail: null == (t = i.cover) ? void 0 : t.uri,
                        previewUrl: null == (a = i.cover) ? void 0 : a.videoUrl,
                        duration: i.duration,
                        artists: null == l ? void 0 : l.map((e) => (0, $.a)({ artist: e })),
                        isAvailable: r,
                        disclaimers: s,
                    });
                },
                eJ = (e) => ({ type: e.type, data: eH({ clip: e.data.clip, artists: e.data.artists }) }),
                eq = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, $.a)({ artist: e }));
                    return (0, f.wg)({
                        ...((e) => {
                            let t = !1;
                            e.presaveDate ? (t = !0) : e.presaved && (t = e.presaved);
                            let { disclaimers: a } = (0, eX.f)(e);
                            return (0, f.wg)({ id: e.id, disclaimers: a, isPresave: t, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                        })(e),
                        artists: a,
                    });
                },
                ez = (e) => {
                    switch (e.type) {
                        case W._.ALBUM_ITEM:
                            return Y(e.data.album, e.data.artists, e.data.trailer);
                        case W._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: l, millisecondsUntilRelease: r, presaveDate: s } = e.data || {};
                                return {
                                    type: W._.PRESAVED_ALBUM_ITEM,
                                    data: eq({
                                        ...a,
                                        artists: i,
                                        releaseDate: l,
                                        millisecondsUntilRelease: r,
                                        presaveDate: s,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                };
            var eQ = a(55985);
            let eZ = (e) =>
                    (0, f.wg)({
                        type: W._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, eQ.p)(e.data.cover) : void 0 },
                    }),
                e0 = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: l } = e;
                    return { type: W._.NON_MUSIC_ALBUM_ITEM, data: (0, X.s)({ album: t, likesCount: i, bookmateOptionRequired: l, artists: a }) };
                },
                e1 = (e) => ({ type: W._.TRACK_ITEM, data: (0, eR.v)(e.data.track) });
            var e3 = a(33229);
            let e2 = (e) => {
                var t, a, i;
                let l = e || {};
                return (0, f.wg)({
                    items: null != (i = null == (t = l.tracks) ? void 0 : t.map((e) => (0, eR.v)(e))) ? i : [],
                    playlist: (0, e3.j)(l.playlist),
                    totalItemsCount: null == (a = l.summary) ? void 0 : a.count,
                    canShowEmptyBlock: !0,
                });
            };
            var e6 = a(85796);
            let e4 = (e) => (0, f.wg)({ uid: e.uid, name: e.name, cover: (0, eQ.p)(e.cover), status: e.status }),
                e5 = (e) =>
                    (0, f.wg)({
                        id: e.id,
                        name: e.name,
                        owner: e4(e.owner),
                        members: e.members.filter((t) => t.uid !== e.owner.uid).map(e4),
                        wave: e.wave ? (0, z.l)(e.wave) : void 0,
                        status: e.status,
                    }),
                e9 = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === et.t.TABS,
                e7 = (e) => Object.values(et.t).includes(e),
                e8 = f.gK.model('ArtistPopularTracksData', { items: f.gK.array(U.v) }),
                te = ec
                    .props({ type: f.gK.literal(et.t.ARTIST_POPULAR_TRACKS), data: f.gK.maybe(e8), meta: ep })
                    .named('ArtistPopularTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                tt = f.gK.model('ArtistReleaseData', { album: el.J, releaseDate: f.gK.maybe(f.gK.string) }),
                ta = ec
                    .props({ type: f.gK.literal(et.t.ARTIST_RELEASE), data: f.gK.maybe(tt), meta: ep })
                    .named('ArtistRelease')
                    .views((e) => ({
                        get isVisible() {
                            return ei({
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
            var ti = a(64605),
                tl = a(90346);
            let tr = f.gK
                    .compose(
                        f.gK.model('BaseUpcomingAlbum', {
                            id: f.gK.number,
                            isPresave: f.gK.boolean,
                            title: f.gK.maybe(f.gK.string),
                            type: f.gK.maybe(f.gK.enumeration(Object.values(ti._))),
                            coverUri: f.gK.maybe(f.gK.string),
                            releaseDate: f.gK.maybe(f.gK.string),
                        }),
                        eL.E,
                    )
                    .actions((e) => {
                        let t = {
                            presaveAlbum: (0, f.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                try {
                                    e.isPresave = !0;
                                    let i = yield a.presaveAlbum(t);
                                    return i === tl.J.ERROR && (e.isPresave = !1), i;
                                } catch (t) {
                                    return (e.isPresave = !1), i.error(t), tl.J.ERROR;
                                }
                            }),
                            removePresaveAlbum: (0, f.L3)(function* (t) {
                                let { usersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                try {
                                    e.isPresave = !1;
                                    let i = yield a.removePresaveAlbum(t);
                                    return i === tl.J.ERROR && (e.isPresave = !0), i;
                                } catch (t) {
                                    return (e.isPresave = !0), i.error(t), tl.J.ERROR;
                                }
                            }),
                            toggleLike: (0, f.L3)(function* () {
                                let a;
                                if (!(0, f._n)(e)) return;
                                let { user: i } = (0, R.M)(e);
                                if (i.account.data.uid)
                                    return (
                                        (a = e.isPresave
                                            ? yield t.removePresaveAlbum({ albumId: e.id, userId: i.account.data.uid })
                                            : yield t.presaveAlbum({ albumId: e.id, userId: i.account.data.uid, likeAfterRelease: !0 })),
                                        !(0, f._n)(e),
                                        a
                                    );
                            }),
                            getKey: (t) => ''.concat(t, '_').concat(e.id),
                        };
                        return t;
                    })
                    .props({ artists: f.gK.maybe(f.gK.array(es.P)) })
                    .views((e) => ({
                        get artistNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                    })),
                ts = f.gK.model('ArtistUpcomingReleaseData', { album: tr }),
                tn = ec
                    .props({ type: f.gK.literal(et.t.ARTIST_UPCOMING_RELEASE), data: f.gK.maybe(ts), meta: ep })
                    .named('ArtistUpcomingRelease')
                    .views((e) => ({
                        get isVisible() {
                            return ei({
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
            var to = a(84468);
            let td = (e) => (0, f.wg)(e),
                tg = (e) => ({
                    loadingState: ee.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, to.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, f.wg)({
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
                                    return (0, f.wg)({ ...e, coverUri: null == (t = e.cover) ? void 0 : t.uri });
                                })(e)
                              : ((e) => !!(e && 'object' == typeof e && ('message' in e || 'title' in e || 'expandable' in e || 'visibleLines' in e)))(e)
                                ? ((e) => {
                                      var t;
                                      return (0, f.wg)({ ...td(e), showPolicy: e.showPolicy, viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink });
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
            var tu = a(74885);
            let tc = f.gK.model('ArtistPickData', { playlist: tu.$, artists: f.gK.array(es.P) }),
                tm = ec
                    .props({ type: f.gK.literal(et.t.ARTIST_PICK), data: f.gK.maybe(tc), meta: ep })
                    .named('ArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isRejected || (e.isLoaded && !e.data)) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    }));
            var tp = a(86246);
            let ty = f.gK
                    .model('FamiliarYouData', {
                        vibeTrackCount: f.gK.optional(f.gK.number, 0),
                        collectionTrackCount: f.gK.optional(f.gK.number, 0),
                        collectionAlbumCount: f.gK.optional(f.gK.number, 0),
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
                                    let { href: t } = (0, eI.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tp.J.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, eI.u)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: tp.J.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, eI.u)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                tE = ec
                    .props({ type: f.gK.literal(et.t.FAMILIAR_YOU), data: f.gK.maybe(ty), meta: ep })
                    .named('FamiliarYou')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isRejected || (e.isLoaded && !(null == (t = e.data) ? void 0 : t.hasFamiliarInfo))) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                tS = (e) => {
                    let t = tg(e);
                    if ((0, eF.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case et.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tg(t);
                                                  return (te.is(a) || ta.is(a) || tn.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, f.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case et.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = tg(t);
                                                  return (tE.is(a) || tm.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, f.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                tK = (e) => (0, f.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => e7(e.type)).map(tS) }),
                tb = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) e9(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: ev.G.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: ev.G.IDLE, data: t.tabs.map(tK) })),
                            a && (i.upperBlocks = a.filter((e) => e7(e.type)).map(tS)),
                            (0, f.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                },
                tv = (e) => ({ title: e.title, lineColor: e['line-color'] }),
                tI = (e) => {
                    var t;
                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, eW.h)(e));
                    return (0, f.wg)({ items: a });
                },
                tL = (e) => ({ uri: e.uri, color: e.color }),
                tT = (e) => {
                    var t;
                    let { data: a } = e;
                    return (0, f.wg)({ type: W._.DONATION_ITEM, data: eb({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
                },
                tN = (e) => {
                    var t;
                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(tT);
                    return (0, f.wg)({ items: a });
                },
                tA = (e) => {
                    var t;
                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, $.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                    return (0, f.wg)({ items: a });
                };
            var th = a(95732);
            let tC = (e) => {
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
                                                    return (0, X.s)({ album: t, artists: a, trailer: i });
                                                }),
                                      l = ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) || [];
                                  return { tab: { id: t, title: e.title, covers: (0, f.wg)(l) }, data: (0, f.wg)(i) };
                              });
                    return (0, f.wg)({ items: a });
                },
                tf = (e) => {
                    let { favorites: t, history: a } = e,
                        i = (0, eQ.p)(t.cover),
                        l = t.trackCovers.map(eQ.p),
                        r = (0, f.wg)({ title: t.title, cover: i, playlistUuid: t.playlistUuid || void 0, count: t.count, trackCovers: l }),
                        s = a.trackCovers.map(eQ.p),
                        n = (0, f.wg)({ title: a.title, trackCovers: s, artists: a.subtitleElements });
                    return (0, f.wg)({ favorites: r, history: n });
                },
                tR = (e) => (0, f.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(eQ.p) }),
                tk = (e) => ({ items: (0, f.wg)(e.items.map((e) => tR(e.data))) });
            var tD = a(53801);
            let t_ = (e) =>
                    (0, f.wg)({
                        items: e.items.map((e) =>
                            ((e) => {
                                var t, a;
                                return (0, f.wg)({
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
                tP = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).newReleases)
                            ? void 0
                            : t.map((e) => {
                                  let { album: t, artists: a, releaseDate: i, cover: l, trailer: r } = e;
                                  return {
                                      album: (0, X.s)({ album: t, artists: a, trailer: r }),
                                      releaseDate: i,
                                      coverUri: null == l ? void 0 : l.uri,
                                      coverColor: null == l ? void 0 : l.color,
                                  };
                              });
                    return (0, f.wg)({ items: a });
                },
                tO = (e) => {
                    let t = e.items.map((e) =>
                        e.type === W._.NON_MUSIC_ALBUM_ITEM
                            ? e0({ album: e.data.album, artists: e.data.artists, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired })
                            : q({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                    );
                    return (0, f.wg)({ items: t });
                },
                tw = (e, t) => {
                    var a;
                    return (0, f.wg)({
                        items: e.tracks.map((e) => (0, eR.v)(e)),
                        playlist: (0, e3.j)(e.playlist),
                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                        withRewindTrailerButton: 'rewind2024' === t,
                    });
                },
                tG = (e) => ({
                    type: W._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, J.b)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                tM = (e) => {
                    if (!e || !Array.isArray(e.items)) return (0, f.wg)({});
                    let t = e.items.map(tG);
                    return (0, f.wg)({ items: t });
                },
                tU = (e, t) => ({ type: W._.PLAYLIST_ITEM, data: (0, J.b)({ playlist: e, trailer: t }) }),
                tB = (e) =>
                    (0, f.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                tV = (e) => {
                    var t, a;
                    return (0, f.wg)({
                        title: null == e ? void 0 : e.title,
                        subtitle: null == e ? void 0 : e.subtitle,
                        buttonTitle: null == e ? void 0 : e.buttonTitle,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        align: null == e ? void 0 : e.align,
                        weblink: null == e || null == (t = e.action) ? void 0 : t.weblink,
                        lightTheme: tB(null == e ? void 0 : e.lightTheme),
                        darkTheme: tB(null == e ? void 0 : e.darkTheme),
                        advDisclaimer: null != (a = null == e ? void 0 : e.advDisclaimer) ? a : null,
                    });
                },
                tF = (e) => {
                    var t;
                    return null == (t = (e || {}).tabs) ? void 0 : t.map((e) => (0, f.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }));
                },
                tx = (e) => {
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
                                                    return (0, z.l)(t, a);
                                                })) || [],
                                  };
                              });
                    return (0, f.wg)({ items: a });
                },
                tj = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).waves)
                            ? void 0
                            : t.map((e, t) => ({ tab: { id: t, title: null == e ? void 0 : e.title }, data: null == e ? void 0 : e.items.map(th.e) }));
                    return (0, f.wg)({ items: a });
                },
                tW = (e) => {
                    var t;
                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, $.a)({ artist: e }));
                    return (0, f.wg)({ title: e.title, description: e.description, artists: a });
                },
                tX = new Set([et.t.CONCERTS_PERSONAL, et.t.ARTIST_CONCERTS, et.t.VIEWED_CONCERTS]);
            var tY = a(99703);
            let t$ = f.gK
                    .model('AlbumPromoDataItem', {
                        album: el.J,
                        artists: f.gK.array(es.P),
                        cover: tY.$,
                        coverContentMode: f.gK.maybe(f.gK.string),
                        clickUrl: f.gK.string,
                        yclid: f.gK.string,
                        utm: f.gK.frozen(),
                        hasClicked: f.gK.optional(f.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get reportingProperties() {
                                return { ...e.utm, yclid: e.yclid };
                            },
                            get albumUrl() {
                                let { href: a } = (0, eI.u)(e.album.url, { query: t.reportingProperties });
                                return a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setClicked: (0, f.L3)(function* () {
                            if (!(0, f._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.hasClicked)
                                try {
                                    (e.hasClicked = !0), yield t.reportForAlbumPromo(e.clickUrl);
                                } catch (e) {
                                    a.error(e);
                                }
                        }),
                    })),
                tH = f.gK.model('AlbumPromoDataReportingOptions', { url: f.gK.string, timeMs: f.gK.number }),
                tJ = f.gK.model('AlbumPromoDataReporting', { blockRender: tH, blockImpression: tH, adImpressions: tH }),
                tq = f.gK.model('AlbumPromoData', { items: f.gK.array(t$), reporting: f.gK.maybe(tJ) }).actions((e) => ({
                    report: (0, f.L3)(function* (t) {
                        if (!(0, f._n)(e)) return;
                        let { prefixlessResource: a, modelActionsLogger: i } = (0, f._$)(e);
                        try {
                            yield a.reportForAlbumPromo(t);
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                })),
                tz = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.ALBUM_PROMO), f.gK.literal(et.t.SIMPLE_ALBUM_PROMO)), data: f.gK.maybe(tq), meta: ep })
                    .named('AlbumPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
            var tQ = a(55573);
            let tZ = f.gK.model('ArtistConcertsData', { items: f.gK.array(tQ.a) }),
                t0 = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.ARTIST_CONCERTS)), data: f.gK.maybe(tZ), meta: ep })
                    .named('ArtistConcerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                t1 = f.gK.model('ArtistPopularTracksAndReleasesData', { blocks: f.gK.array(f.gK.union(te, ta, tn)) }).views((e) => ({
                    get popularTracks() {
                        return e.blocks.find((e) => te.is(e));
                    },
                    get upcomingRelese() {
                        return e.blocks.find((e) => tn.is(e));
                    },
                    get release() {
                        return e.blocks.find((e) => ta.is(e));
                    },
                })),
                t3 = ec
                    .props({ type: f.gK.literal(et.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: f.gK.maybe(t1) })
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
                t2 = f.gK.model('ChartTracksItem', { type: f.gK.literal(W._.TRACK_ITEM), data: U.v }),
                t6 = f.gK.model('ChartTracksData', { items: f.gK.array(t2), playlist: tu.$ }),
                t4 = ec
                    .props({ type: f.gK.literal(et.t.CHART_TRACKS), data: f.gK.maybe(t6), meta: ep })
                    .named('ChartTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    }));
            var t5 = a(20472),
                t9 = a(85017);
            let t7 = f.gK
                    .compose(
                        f.gK.model('BaseClip', {
                            clipId: f.gK.number,
                            title: f.gK.maybe(f.gK.string),
                            thumbnail: f.gK.maybe(f.gK.string),
                            previewUrl: f.gK.maybe(f.gK.string),
                            duration: f.gK.maybe(f.gK.number),
                            isAvailable: f.gK.boolean,
                            version: f.gK.maybe(f.gK.string),
                        }),
                        eL.E,
                    )
                    .views((e) => ({
                        get url() {
                            let { href: t } = (0, eI.u)(t5.Z.video.href, { query: { ids: String(e.clipId) } });
                            return t;
                        },
                        get isLiked() {
                            if (!(0, f._n)(e)) return !1;
                            let { library: t } = (0, R.M)(e);
                            return t.isClipLiked(e.clipId);
                        },
                        get isLegalRejected() {
                            return e.getIsLegalRejected(e.isAvailable);
                        },
                        get isUnsafeLegal() {
                            return e.getIsUnsafeLegal(e.isAvailable);
                        },
                        getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : t9.n.CLIP, entityId: e.clipId }),
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.clipId),
                        toggleLike() {
                            if (!(0, f._n)(e)) return;
                            let { library: t, user: a } = (0, R.M)(e);
                            if (a.isAuthorized) return t.toggleClipLike({ entityId: e.clipId, userId: a.account.data.uid });
                        },
                    })),
                t8 = t7.props({ artists: f.gK.array(es.P) }).views((e) => ({
                    get hasArtists() {
                        return e.artists.length > 0;
                    },
                })),
                ae = f.gK.model('LandingClipItem', { type: f.gK.union(f.gK.literal(W._.CLIP), f.gK.literal(W._.CLIP_ITEM)), data: t8 }),
                at = f.gK.model('ClipsData', { items: f.gK.array(ae), canShowEmptyBlock: f.gK.optional(f.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aa = ec
                    .props({
                        type: f.gK.union(f.gK.literal(et.t.CLIPS), f.gK.literal(et.t.ARTIST_CLIPS), f.gK.literal(et.t.COLLECTION_CLIPS)),
                        data: f.gK.maybe(at),
                        meta: ep,
                    })
                    .named('Clips')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, R.M)(e);
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ei({
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
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                ai = f.gK.model('CollectionAlbumsData', { items: f.gK.array(el.J), canShowEmptyBlock: f.gK.optional(f.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                al = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_ALBUMS), data: f.gK.maybe(ai), meta: ep })
                    .named('CollectionAlbums')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if ((null == (t = e.data) ? void 0 : t.canShowEmptyBlock) || e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (i = e.data) || null == (a = i.items) ? void 0 : a.length) !== 0;
                        },
                        get objectsCount() {
                            var l, r;
                            return null != (r = null == (l = e.data) ? void 0 : l.items.length) ? r : 0;
                        },
                    }));
            var ar = a(91118);
            let as = f.gK.model('LandingUpcomingAlbumItem', { type: f.gK.literal(W._.PRESAVED_ALBUM_ITEM), data: tr }),
                an = f.gK.union(er, as),
                ao = f.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: f.gK.string,
                        title: f.gK.string,
                        type: f.gK.enumeration(Object.values(ar.n)),
                        items: f.gK.array(an),
                        canShowEmptyBlock: f.gK.optional(f.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                ad = f.gK.model('CollectionAlbumsPresavesTabs', { tabs: f.gK.array(ao) }).views((e) => ({
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
                ag = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_ALBUMS_PRESAVES), data: f.gK.maybe(ad), meta: ep })
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
                au = f.gK
                    .model('LandingMenuItem', {
                        type: f.gK.literal(W._.MENU_ITEM),
                        data: f.gK.model({ title: f.gK.string, viewAllActionLink: f.gK.maybe(f.gK.maybeNull(f.gK.string)), cover: f.gK.maybe(tY.$) }),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.data.title, '_').concat(e.data.viewAllActionLink);
                        },
                    })),
                ac = f.gK.union(au, eu),
                am = f.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: es.P, items: f.gK.array(ac) }),
                ap = f.gK.model('CollectionArtistsAndTopWithItemsData', { artists: f.gK.array(am) }),
                ay = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: f.gK.maybe(ap), meta: ep })
                    .named('CollectionArtistsAndTopWithItems')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                aE = f.gK.model('CollectionArtistData', { items: f.gK.array(es.P), canShowEmptyBlock: f.gK.optional(f.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                aS = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.COLLECTION_ARTISTS),
                            f.gK.literal(et.t.COLLECTION_ARTISTS_AND_TOP),
                            f.gK.literal(et.t.PERSONAL_ARTISTS),
                            f.gK.literal(et.t.NEW_STARS_ARTISTS),
                            f.gK.literal(et.t.EDITORIAL_ARTISTS),
                            f.gK.literal(et.t.META_TAG_POPULAR_ARTISTS),
                            f.gK.literal(et.t.MICRO_GENRE_TOP_ARTISTS),
                            f.gK.literal(et.t.MICRO_GENRE_ARTISTS),
                            f.gK.literal(et.t.META_TAG_ARTISTS),
                            f.gK.literal(et.t.SIMILAR_ARTISTS),
                        ),
                        data: f.gK.maybe(aE),
                        meta: ep,
                    })
                    .named('CollectionArtist')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                aK = f.gK.model('CollectionPlaylistsData', { items: f.gK.array(eo.I) }),
                ab = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_PLAYLISTS_CREATED), data: f.gK.maybe(aK), meta: ep })
                    .named('CollectionCreatedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var av = a(3623);
            let aI = f.gK.model('CollectionDownloadedTracksData', { items: f.gK.array(U.v), rawTracks: f.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: av.R.DownloadedMusic, meta: e }));
                    },
                })),
                aL = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_DOWNLOADED_TRACKS), data: f.gK.maybe(aI), meta: ep })
                    .named('CollectionDownloadedTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                aT = f.gK.model('LandingNonMusicAlbumItem', { type: f.gK.literal(W._.NON_MUSIC_ALBUM_ITEM), data: el.J }),
                aN = f.gK.model('LandingTrackItem', { type: f.gK.literal(W._.TRACK_ITEM), data: U.v }),
                aA = f.gK.union(ed, aT, aN),
                ah = f.gK.model('CollectionKidsData', { items: f.gK.array(aA) }),
                aC = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_KIDS), data: f.gK.maybe(ah), meta: ep })
                    .named('CollectionKids')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                af = f.gK.model('CollectionLikedPlaylistsData', { items: f.gK.array(eo.I) }),
                aR = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_PLAYLISTS_LIKED), data: f.gK.maybe(af), meta: ep })
                    .named('CollectionLikedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var ak = a(37184);
            let aD = f.gK
                    .model('CollectionPlaylistsTab', {
                        id: f.gK.string,
                        title: f.gK.string,
                        type: f.gK.enumeration(Object.values(ak.l)),
                        items: f.gK.array(eo.I),
                        canShowEmptyBlock: f.gK.optional(f.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                a_ = f.gK.model('CollectionPlaylistsTabs', { tabs: f.gK.array(aD) }).views((e) => ({
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
                aP = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: f.gK.maybe(a_), meta: ep })
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
            var aO = a(44032);
            let aw = f.gK
                    .model('ArtistTop', { artist: es.P, listenTimeSeconds: f.gK.number, top: f.gK.maybe(aO.I) })
                    .views((e) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === e.artist.counts) return !0;
                            return e.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.artist.id) })),
                aG = f.gK.model('CollectionTopArtistsData', { items: f.gK.array(aw) }),
                aM = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_TOP_ARTISTS), data: f.gK.maybe(aG), meta: ep })
                    .named('CollectionTopArtists')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                aU = f.gK.model('CollectionVibeAgentDataModel', { vibe: eg.G }),
                aB = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_WAVE_AGENT), data: f.gK.maybe(aU), meta: ep })
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
                (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'), (e.DRAFT = 'DRAFT');
            })(r || (r = {}));
            var aV = a(58008);
            !(function (e) {
                (e.ACTIVE = 'ACTIVE'), (e.INACTIVE_EXIT = 'INACTIVE_EXIT'), (e.INACTIVE_SUBSCRIPTION = 'INACTIVE_SUBSCRIPTION');
            })(s || (s = {}));
            let aF = f.gK.model('VibeRoomMember', { uid: f.gK.maybe(f.gK.number), name: f.gK.string, cover: tY.$, status: f.gK.maybe(f.gK.string) }).views((e) => ({
                    get isActive() {
                        return e.status === s.ACTIVE;
                    },
                })),
                ax = f.gK
                    .model('VibeRoom', {
                        id: f.gK.string,
                        name: f.gK.maybe(f.gK.string),
                        owner: aF,
                        members: f.gK.array(aF),
                        wave: f.gK.maybe(eg.G),
                        status: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            return e.status === r.DISABLED;
                        },
                        get isDraft() {
                            return e.status === r.DRAFT;
                        },
                        get isEnabled() {
                            return e.status === r.ENABLED;
                        },
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                        editRoom: (0, f.L3)(function* (t) {
                            var a;
                            let { roomId: i, name: l } = t,
                                r = l.trim();
                            if ((null == (a = e.name) ? void 0 : a.trim()) === r) return aV.F.OK;
                            let { waveResource: s, modelActionsLogger: n } = (0, f._$)(e);
                            try {
                                return yield s.editRoom({ roomId: i, name: r }), (e.name = r), aV.F.OK;
                            } catch (e) {
                                return n.error(e), aV.F.ERROR;
                            }
                        }),
                        exitRoom: (0, f.L3)(function* (t) {
                            let { roomId: a } = t,
                                { waveResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            try {
                                return yield i.exitRoom({ roomId: a }), aV.F.OK;
                            } catch (e) {
                                return l.error(e), aV.F.ERROR;
                            }
                        }),
                    })),
                aj = f.gK.model('CollectionVibeRoomsData', { items: f.gK.array(ax) }),
                aW = ec
                    .props({ type: f.gK.literal(et.t.COLLECTION_WAVE_ROOMS), data: f.gK.maybe(aj), meta: ep })
                    .named('CollectionVibeRooms')
                    .views((e) => ({
                        get isVisible() {
                            let {
                                collection: { vibeRooms: t },
                            } = (0, R.M)(e);
                            if (!t.isEnabled) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                aX = f.gK.model('MapUrl', { imageUrl: f.gK.string, url: f.gK.string }),
                aY = f.gK.model('MetroStation', { title: f.gK.string, lineColor: f.gK.string }),
                a$ = f.gK
                    .model('BaseMap', {
                        place: f.gK.string,
                        city: f.gK.string,
                        address: f.gK.string,
                        metroStations: f.gK.maybeNull(f.gK.array(aY)),
                        map: f.gK.maybeNull(aX),
                    })
                    .views((e) => ({
                        get groupedMetroStations() {
                            if (!e.metroStations) return [];
                            let t = new Map();
                            return (
                                e.metroStations.forEach((e) => {
                                    let a = t.get(e.title);
                                    a || ((a = new Set()), t.set(e.title, a)), a.add(e.lineColor);
                                }),
                                Array.from(t.entries()).map((e) => {
                                    let [t, a] = e;
                                    return { title: t, colors: Array.from(a) };
                                })
                            );
                        },
                    })),
                aH = ec
                    .props({ type: f.gK.literal(et.t.CONCERT_PLACE), data: f.gK.maybe(a$), meta: ep })
                    .named('ConcertPlace')
                    .views((e) => ({
                        get isVisible() {
                            return ei({
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
                aJ = f.gK.model('ConcertsData', { items: f.gK.array(tQ.a) }),
                aq = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.CONCERTS_TOP),
                            f.gK.literal(et.t.CONCERTS_PERSONAL),
                            f.gK.literal(et.t.EDITORIAL_CONCERTS),
                            f.gK.literal(et.t.VIEWED_CONCERTS),
                        ),
                        data: f.gK.maybe(aJ),
                        meta: ep,
                    })
                    .named('Concerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
            var az = a(9970),
                aQ = a(87411);
            let aZ = f.gK
                    .model('ContinueListenTrackData', {
                        album: f.gK.maybe(aQ.G),
                        playlist: f.gK.maybe(tu.$),
                        track: U.v,
                        trackLoadingState: f.gK.optional(f.gK.enumeration(Object.values(ev.G)), ev.G.IDLE),
                        playlistLoadingState: f.gK.optional(f.gK.enumeration(Object.values(ev.G)), ev.G.IDLE),
                        albumDuration: f.gK.maybe(f.gK.number),
                        albumDurationLeft: f.gK.maybe(f.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === ev.G.IDLE;
                        },
                        get isLoading() {
                            return e.trackLoadingState === ev.G.PENDING || e.playlistLoadingState === ev.G.PENDING;
                        },
                        get isRejected() {
                            return e.trackLoadingState === ev.G.REJECT || e.playlistLoadingState === ev.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, f.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                { continueListen: i } = (0, R.M)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = ev.G.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = ev.G.PENDING;
                            try {
                                var l;
                                let a = (0, az.V)(e.track.id, null == (l = e.album) ? void 0 : l.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = ev.G.RESOLVE), i)) return (0, eR.v)(i);
                            } catch (t) {
                                a.error(t), (e.trackLoadingState = ev.G.REJECT);
                            }
                        }),
                        getPlaylistMeta: (0, f.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                { continueListen: i } = (0, R.M)(e);
                            if ((i.track && 'number' == typeof i.trackIndex) || !e.playlist) {
                                e.playlistLoadingState = ev.G.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = ev.G.PENDING;
                            try {
                                let { tracks: a } = yield t.getPlaylistWithTracksIds({ userId: String(e.playlist.uid), playlistKind: e.playlist.kind, resumeStream: !1 }),
                                    i = a.findIndex((t) => String(t.id) === e.track.id);
                                if (((e.playlistLoadingState = ev.G.RESOLVE), e.track.durationMs && -1 !== i)) return i;
                            } catch (t) {
                                a.error(t), (e.playlistLoadingState = ev.G.REJECT);
                            }
                        }),
                    })),
                a0 = f.gK.model('ContinueListenTrack', { type: f.gK.string, data: aZ }),
                a1 = f.gK.model('ContinueListenBaseItem', { uri: f.gK.string, color: f.gK.maybe(f.gK.string) }),
                a3 = f.gK.model('ContinueListenBaseItem', {
                    title: f.gK.string,
                    covers: f.gK.array(a1),
                    bookCount: f.gK.maybe(f.gK.number),
                    podcastCount: f.gK.maybe(f.gK.number),
                    trackCount: f.gK.maybe(f.gK.number),
                }),
                a2 = f.gK.model('ContinueListenData', { lastPlayed: f.gK.maybe(a0), bookshelf: a3, newEpisodes: a3 }),
                a6 = ec
                    .props({ type: f.gK.literal(et.t.CONTINUE_LISTEN), data: f.gK.maybe(a2), meta: ep })
                    .named('ContinueListen')
                    .views((e) => ({
                        get isVisible() {
                            return ei({
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
                a4 = f.gK.model('BaseOverview', {
                    title: f.gK.maybe(f.gK.string),
                    message: f.gK.maybe(f.gK.string),
                    isExpandable: f.gK.optional(f.gK.boolean, !0),
                    visibleLinesCount: f.gK.optional(f.gK.number, 3),
                }),
                a5 = a4.named('LandingBlockOverviewMeta').props({ showPolicy: f.gK.maybe(f.gK.string), viewAllActionLink: f.gK.maybeNull(f.gK.string) }),
                a9 = ec
                    .props({ type: f.gK.literal(et.t.DISLIKES), data: f.gK.undefined, meta: a5 })
                    .named('Dislikes')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                a7 = f.gK.model('LandingDonationItem', { type: f.gK.literal(W._.DONATION_ITEM), data: e_ }),
                a8 = f.gK.model('DonationsData', { items: f.gK.array(a7) }),
                ie = ec
                    .props({ type: f.gK.literal(et.t.DONATIONS), data: f.gK.maybe(a8), meta: ep })
                    .named('Donations')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                it = f.gK.model('EditorialVibesDataModel', { items: f.gK.array(eg.G) }),
                ia = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.EDITORIAL_WAVES),
                            f.gK.literal(et.t.META_TAG_WAVE),
                            f.gK.literal(et.t.MICRO_GENRE_WAVE),
                            f.gK.literal(et.t.MICRO_GENRE_SIMILAR_WAVE),
                            f.gK.literal(et.t.META_TAG_SIMILAR_WAVE),
                            f.gK.literal(et.t.EDITORIAL_WAVES_AGENT),
                            f.gK.literal(et.t.META_TAG_WAVE_AGENT),
                            f.gK.literal(et.t.MICRO_GENRE_WAVE_AGENT),
                            f.gK.literal(et.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            f.gK.literal(et.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: f.gK.maybe(it),
                        meta: ep,
                    })
                    .named('EditorialVibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                ii = f.gK.model('FamiliarYouAndArtistPickData', { blocks: f.gK.array(f.gK.union(tE, tm)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => tE.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => tm.is(e));
                    },
                })),
                il = ec
                    .props({ type: f.gK.literal(et.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: f.gK.maybe(ii) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, r, s;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (l = e.data) || null == (i = l.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (s = e.data) || null == (r = s.artistPick) ? void 0 : r.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var n, o;
                            return null != (o = null == (n = e.data) ? void 0 : n.blocks.length) ? o : 0;
                        },
                    })),
                ir = f.gK.model('InStyleDataItemTab', { id: f.gK.number, title: f.gK.string, covers: f.gK.array(f.gK.string) }),
                is = f.gK.model('InStyleDataItem', { tab: ir, data: f.gK.array(el.J) }),
                io = f.gK.model('InStyleData', { items: f.gK.array(is) }),
                id = ec
                    .props({ type: f.gK.literal(et.t.IN_STYLE), data: f.gK.maybe(io), meta: ep })
                    .named('InStyle')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                r = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !r,
                            });
                        },
                        get objectsCount() {
                            var l, r;
                            return null != (r = null == (l = e.data) ? void 0 : l.items.length) ? r : 0;
                        },
                    })),
                ig = f.gK.model('ItemListData', { items: f.gK.array(au) }),
                iu = ec
                    .props({ type: f.gK.literal(et.t.ITEM_LIST), data: f.gK.maybe(ig), meta: ep })
                    .named('ItemList')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                ic = f.gK
                    .model('LikesData', { title: f.gK.string, cover: tY.$, playlistUuid: f.gK.maybe(f.gK.string), trackCovers: f.gK.array(tY.$), count: f.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, eI.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                im = f.gK.model('HistoryData', { title: f.gK.string, trackCovers: f.gK.array(tY.$), artists: f.gK.array(f.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, eI.u)('/music-history');
                        return e;
                    },
                })),
                ip = f.gK.model('LikesAndHistoryData', { favorites: ic, history: im }),
                iy = ec
                    .props({ type: f.gK.literal(et.t.LIKES_AND_HISTORY), data: f.gK.maybe(ip), meta: ep })
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
                iE = f.gK.model('MixesGridMixCardItem', {
                    id: f.gK.string,
                    title: f.gK.string,
                    weblink: f.gK.maybeNull(f.gK.string),
                    covers: f.gK.maybeNull(f.gK.array(tY.$)),
                }),
                iS = f.gK.model('MixesGridData', { items: f.gK.array(iE) }),
                iK = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.MIXES_GRID), f.gK.literal(et.t.MIXES_MUSIC)), data: f.gK.maybe(iS), meta: ep })
                    .named('MixesGrid')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNotEmpty: (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0,
                                isLoaded: e.isLoaded,
                                isLoading: e.isLoading,
                                isRejected: e.isRejected,
                                isNeededToLoad: e.isNeededToLoad,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var ib = a(2937);
            let iv = f.gK.model('MixesData', { items: f.gK.array(ib.f) }),
                iI = ec
                    .props({ type: f.gK.literal(et.t.MIXES), data: f.gK.maybe(iv), meta: ep })
                    .named('Mixes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iL = f.gK.model('NeuromusicItem', {
                    title: f.gK.string,
                    stationId: f.gK.string,
                    imageUrl: f.gK.maybe(f.gK.string),
                    style: f.gK.maybe(f.gK.model({ backgroundColor: f.gK.maybe(f.gK.string), titleColor: f.gK.maybe(f.gK.string) })),
                }),
                iT = f.gK.model('NeuromusicData', { items: f.gK.array(iL) }),
                iN = ec
                    .props({ type: f.gK.literal(et.t.NEUROMUSIC), data: f.gK.maybe(iT), meta: ep })
                    .named('Neuromusic')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var iA = a(14257);
            let ih = [
                    'avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%',
                    'avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%',
                ],
                iC = [
                    'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%',
                    'avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%',
                ],
                iR = f.gK
                    .model('NewReleasesDataItem', {
                        album: el.J,
                        releaseDate: f.gK.maybe(f.gK.string),
                        coverUri: f.gK.maybe(f.gK.string),
                        coverColor: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (!(null == t ? void 0 : t.includes('2419084/img.6568f242071da73cabc5846c'))) return t;
                                let l = (Number(a) || 0) % 3;
                                return i === iA.S.Light ? ih[l] : iC[l];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                ik = f.gK.model('NewReleasesData', { items: f.gK.array(iR) }),
                iD = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.NEW_RELEASES), f.gK.literal(et.t.EDITORIAL_NEW_RELEASES)), data: f.gK.maybe(ik), meta: ep })
                    .named('NewReleases')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return ei({
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
                i_ = f.gK.model('NonMusicChartAlbumData', { items: f.gK.array(el.J) }),
                iP = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.CHART_ALBUMS), f.gK.literal(et.t.PODCASTS_CHART_ALBUMS)), data: f.gK.maybe(i_), meta: ep })
                    .named('NonMusicChartAlbum')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iO = f.gK.model('NonMusicEditorialCompilationData', { items: f.gK.array(f.gK.union(aT, ed)) }),
                iw = ec
                    .props({
                        type: f.gK.union(f.gK.literal(et.t.NON_MUSIC_EDITORIAL_COMPILATION), f.gK.literal(et.t.NON_MUSIC_CATEGORY)),
                        data: f.gK.maybe(iO),
                        meta: ep,
                    })
                    .named('NonMusicEditorialCompilation')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                iG = ec
                    .props({ type: f.gK.literal(et.t.OVERVIEW), data: f.gK.undefined, meta: a5 })
                    .named('Overview')
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                iM = f.gK.model('LandingPersonalPlaylistItem', { playlist: eo.I, playlistType: f.gK.string, description: f.gK.maybe(f.gK.string) }),
                iU = f.gK.model('LandingPersonalPlaylistItem', { type: f.gK.literal(W._.PERSONAL_PLAYLIST_ITEM), data: iM }),
                iB = f.gK.model('PersonalPlaylistsData', { items: f.gK.array(iU) }),
                iV = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.PERSONAL_PLAYLISTS), f.gK.literal(et.t.REWIND_PLAYLISTS)), data: f.gK.maybe(iB), meta: ep })
                    .named('PersonalPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var iF = a(86168),
                ix = a(44265);
            let ij = (e) => {
                    var t;
                    let a = (null == (t = e.tracks) ? void 0 : t.length) ? e.tracks.map((e) => ({ id: e })) : [];
                    return { id: e.id, name: e.name, tracks: (0, f.wg)(a) };
                },
                iW = f.gK.model('PlaylistFiltersTrack', { id: f.gK.union(f.gK.string, f.gK.number) }),
                iX = f.gK.model('PlaylistFiltersItem', { id: f.gK.string, name: f.gK.string, tracks: f.gK.array(iW) }),
                iY = f.gK.model('LandingBlockClientMeta', {
                    title: f.gK.maybe(f.gK.string),
                    description: f.gK.maybe(f.gK.string),
                    viewAllActionLink: f.gK.maybeNull(f.gK.string),
                    showPolicy: f.gK.maybe(f.gK.string),
                    coverUri: f.gK.maybe(f.gK.string),
                });
            var i$ = a(6791);
            let iH = f.gK
                    .model('PlaylistWithTracksDataBase', {
                        totalItemsCount: f.gK.maybe(f.gK.number),
                        items: f.gK.array(U.v),
                        playlist: tu.$,
                        coverUri: f.gK.maybe(f.gK.string),
                        canShowEmptyBlock: f.gK.maybe(f.gK.boolean),
                        withRewindTrailerButton: f.gK.maybe(f.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case i$.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case i$.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri) ? a : e.playlist.coverUri;
                            }
                        },
                    })),
                iJ = f.gK
                    .compose(
                        f.gK.model('PlaylistWithTracksAndFiltersFilters', { items: f.gK.maybeNull(f.gK.array(iX)), activeFilter: f.gK.maybe(f.gK.string) }),
                        V.X,
                        D.p,
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
                            t !== iF.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                        },
                    })),
                iq = f.gK
                    .compose(
                        iH.props({
                            likedTrackIds: f.gK.optional(f.gK.array(f.gK.string), () => []),
                            trackDetailsMap: f.gK.optional(f.gK.map(U.v), {}),
                            tracksLoading: f.gK.optional(V.X, () => ({ loadingState: ev.G.IDLE })),
                            playlistLoading: f.gK.optional(V.X, () => ({ loadingState: ev.G.IDLE })),
                            filters: f.gK.optional(iJ, () => ({ loadingState: ev.G.IDLE })),
                        }),
                        D.p,
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
                            getPlaylist: (0, f.L3)(function* () {
                                let { modelActionsLogger: a, usersResource: i, playlistResource: l } = (0, f._$)(e),
                                    { user: r } = (0, R.M)(e),
                                    s = r.account.data.uid;
                                if ((0, f._n)(e) && s) {
                                    e.playlistLoading.loadingState = ev.G.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(s),
                                                playlistKind: ix.j.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            r = yield l.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        (e.likedTrackIds = (0, f.wg)(r.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, e3.j)(r)),
                                            (e.playlistLoading.loadingState = ev.G.RESOLVE),
                                            yield Promise.allSettled([t.getTracksMeta(), t.getFilters()]);
                                    } catch (t) {
                                        a.error(t), (e.playlistLoading.loadingState = ev.G.REJECT);
                                    }
                                }
                            }),
                            updateItemsFromCache() {
                                let a = [];
                                e.visibleTrackIds.forEach((t) => {
                                    let i = e.trackDetailsMap.get(t);
                                    i && a.push(i);
                                }),
                                    t.setItems(a);
                            },
                            getTracksMeta: (0, f.L3)(function* () {
                                if (!(0, f._n)(e)) return;
                                let { tracksResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                e.tracksLoading.loadingState = ev.G.PENDING;
                                let l = e.visibleTrackIds.filter((t) => !e.trackDetailsMap.has(t));
                                if (!l.length) {
                                    t.updateItemsFromCache(), (e.tracksLoading.loadingState = ev.G.RESOLVE);
                                    return;
                                }
                                try {
                                    (yield a.getTracksMeta({ trackIds: l })).forEach((t) => {
                                        let a = (0, eR.v)(t);
                                        e.trackDetailsMap.set(String(t.id), a);
                                    }),
                                        t.updateItemsFromCache(),
                                        (e.tracksLoading.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.tracksLoading.loadingState = ev.G.REJECT);
                                }
                            }),
                            getFilters: (0, f.L3)(function* () {
                                if (!(0, f._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, f._$)(e);
                                try {
                                    e.filters.loadingState = ev.G.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(ij);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === iF.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    (e.filters.items = (0, f.wg)(i)), (e.filters.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.filters.loadingState = ev.G.REJECT);
                                }
                            }),
                            setItems(t) {
                                e.items.forEach((e) => {
                                    (0, f.Yo)(e);
                                });
                                let a = t.map((e) => (0, f.dV)(e));
                                e.items.replace(a);
                            },
                            handleFilterClick: (0, f.L3)(function* (a) {
                                e.filters.setActiveFilter(a.id), yield t.getTracksMeta();
                            }),
                        };
                        return t;
                    }),
                iz = ec
                    .props({
                        type: f.gK.literal(et.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: f.gK.optional(iq, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: ix.j.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: iY,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, r, s, n, o, d, g, u;
                            if ((e.isLoaded && 0 === e.data.items.length) || (null == (t = e.data) ? void 0 : t.canShowEmptyBlock)) return !0;
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: !!(
                                    e.isNeededToLoad ||
                                    (null == (a = e.data) ? void 0 : a.playlistLoading.isNeededToLoad) ||
                                    (null == (i = e.data) ? void 0 : i.tracksLoading.isNeededToLoad)
                                ),
                                isLoading: !!(
                                    e.isLoading ||
                                    (null == (l = e.data) ? void 0 : l.playlistLoading.isLoading) ||
                                    (null == (r = e.data) ? void 0 : r.tracksLoading.isLoading)
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
                iQ = iH.named('PlaylistWithTracksData'),
                iZ = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.OPEN_PLAYLIST),
                            f.gK.literal(et.t.SMART_OPEN_PLAYLIST),
                            f.gK.literal(et.t.NON_MUSIC_OPEN_PLAYLIST),
                            f.gK.literal(et.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: f.gK.maybe(iQ),
                        meta: ep,
                    })
                    .named('PlaylistWithTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                i0 = f.gK.model('PromotionsDataItem', {
                    featureId: f.gK.string,
                    title: f.gK.string,
                    subtitle: f.gK.string,
                    weblink: f.gK.string,
                    imageUrl: f.gK.string,
                    advDisclaimer: f.gK.maybeNull(f.gK.string),
                }),
                i1 = f.gK.model('PromotionsData', { items: f.gK.array(i0) }),
                i3 = ec
                    .props({
                        type: f.gK.union(f.gK.literal(et.t.PROMOTIONS), f.gK.literal(et.t.EDITORIAL_PROMOTIONS), f.gK.literal(et.t.NON_MUSIC_PROMOTIONS)),
                        data: f.gK.maybe(i1),
                        meta: ep,
                    })
                    .named('Promotions')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                i2 = f.gK.model('LandingPlaylistItem', { type: f.gK.literal(W._.PLAYLIST_ITEM), data: eo.I }),
                i6 = f.gK.union(er, i2, en),
                i4 = f.gK.model('RecentlyPlayedData', { items: f.gK.array(i6) }),
                i5 = ec
                    .props({ type: f.gK.literal(et.t.RECENTLY_PLAYED), data: f.gK.maybe(i4), meta: ep })
                    .named('RecentlyPlayed')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                i9 = f.gK.model('LandingVibeItemData', { vibe: eg.G, cover: f.gK.maybeNull(tY.$) }),
                i7 = f.gK.model('LandingVibeItem', { type: f.gK.literal(W._.WAVE_ITEM), data: i9 }),
                i8 = f.gK.union(en, ed, er, aT, aN, i7, eu, ae),
                le = f.gK.model('SearchHistoryData', { items: f.gK.array(i8) }),
                lt = ec
                    .props({ type: f.gK.union(f.gK.literal(et.t.HISTORY), f.gK.literal(et.t.SEARCH_HISTORY)), data: f.gK.maybe(le), meta: ep })
                    .named('SearchHistory')
                    .views((e) => ({
                        get isVisible() {
                            return ei({
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
                la = f.gK.model('SpecialThemeSettings', {
                    buttonColor: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                    bgImageUrl: f.gK.maybeNull(f.gK.string),
                    imageUrl: f.gK.maybeNull(f.gK.string),
                    buttonTextColor: f.gK.maybeNull(f.gK.string),
                }),
                li = f.gK.model('SpecialData', {
                    title: f.gK.maybe(f.gK.string),
                    subtitle: f.gK.maybe(f.gK.string),
                    buttonTitle: f.gK.maybe(f.gK.string),
                    imageUrl: f.gK.maybe(f.gK.string),
                    align: f.gK.maybeNull(f.gK.string),
                    weblink: f.gK.maybeNull(f.gK.string),
                    lightTheme: f.gK.maybeNull(la),
                    darkTheme: f.gK.maybeNull(la),
                    advDisclaimer: f.gK.maybeNull(f.gK.string),
                }),
                ll = ec
                    .props({ type: f.gK.literal(et.t.SPECIAL), data: f.gK.maybe(li), meta: ep })
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
                lr = f.gK.model('VibesDataItemTab', { id: f.gK.number, title: f.gK.string }),
                ls = f.gK.model('VibesDataItem', { tab: lr, data: f.gK.array(eg.G) }),
                ln = f.gK.model('VibesData', { items: f.gK.array(ls) }),
                lo = ec
                    .props({
                        type: f.gK.union(
                            f.gK.literal(et.t.WAVES),
                            f.gK.literal(et.t.SETS_BY_WAVES),
                            f.gK.literal(et.t.WAVES_AGENT),
                            f.gK.literal(et.t.SETS_BY_WAVES_AGENT),
                        ),
                        data: f.gK.maybe(ln),
                        meta: ep,
                    })
                    .named('Vibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                r = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return ei({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !r,
                            });
                        },
                        get objectsCount() {
                            var l, r, s;
                            return null != (s = null == (r = e.data) || null == (l = r.items[0]) ? void 0 : l.data.length) ? s : 0;
                        },
                    })),
                ld = f.gK.model('WizardData', { title: f.gK.string, description: f.gK.maybe(f.gK.string), artists: f.gK.array(es.P) }),
                lg = ec
                    .props({ type: f.gK.literal(et.t.WIZARD), data: f.gK.maybe(ld), meta: ep })
                    .named('Wizard')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                lu = f.gK.union(
                    t4,
                    al,
                    aS,
                    aM,
                    aR,
                    ab,
                    iZ,
                    iz,
                    iD,
                    eS,
                    i3,
                    i5,
                    id,
                    iV,
                    ll,
                    lg,
                    lo,
                    iI,
                    iN,
                    iy,
                    iw,
                    iP,
                    ag,
                    aq,
                    aP,
                    ia,
                    iu,
                    iG,
                    aL,
                    ie,
                    aa,
                    tz,
                    a6,
                    a9,
                    lt,
                    iK,
                    aC,
                    aW,
                    t0,
                    te,
                    ta,
                    tE,
                    tm,
                    tn,
                    t3,
                    il,
                    aH,
                    aB,
                    ay,
                ),
                lc = f.gK.model('TabData', { id: f.gK.string, title: f.gK.string, subtitle: f.gK.maybe(f.gK.string), covers: f.gK.maybe(f.gK.array(f.gK.string)) }),
                lm = f.gK
                    .model('Tab', {
                        meta: f.gK.model({ id: f.gK.string, title: f.gK.string }),
                        data: f.gK.maybe(lc),
                        blocks: f.gK.array(lu),
                        shouldReloadNotification: f.gK.boolean,
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
                lp = f.gK.compose(f.gK.model('TabsData', { data: f.gK.maybeNull(f.gK.array(lm)) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.data]);
                    },
                })),
                ly = f.gK
                    .compose(
                        f.gK.model('Tabs', {
                            meta: f.gK.maybeNull(f.gK.model({ selectedTabIndex: f.gK.number, source: f.gK.maybe(em) })),
                            upperBlocks: f.gK.maybeNull(f.gK.array(lu)),
                            tabs: lp,
                        }),
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a, i;
                                return !(null == (a = e.tabs.data) ? void 0 : a.length) && !(null == (i = e.upperBlocks) ? void 0 : i.length);
                            },
                            get isLoadedAndEmpty() {
                                return [ev.G.RESOLVE, ev.G.REJECT].includes(e.loadingState) && t.isEmpty;
                            },
                            get hasUpperBlocks() {
                                var l;
                                return !!(null == (l = e.upperBlocks) ? void 0 : l.length);
                            },
                        };
                        return t;
                    }),
                lE = ly
                    .props({ id: f.gK.optional(f.gK.string, ''), title: f.gK.optional(f.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === ev.G.RESOLVE || e.loadingState === ev.G.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, f.L3)(function* (a) {
                                var i, l, r, s, n, o, d;
                                let g;
                                if (!a || (!('source' in a.meta) && ((g = a.type), !ex.includes(g)) && !eV(a.type))) return;
                                if ((0, eF.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: u, modelActionsLogger: c } = (0, f._$)(e);
                                try {
                                    if (((a.loadingState = ee.PENDING), eV(a.type))) {
                                        a.loadingState = ee.RESOLVE;
                                        return;
                                    }
                                    let { concerts: t } = (0, R.M)(e),
                                        i = yield u.getBlock({
                                            source:
                                                ((l = 'source' in a.meta ? a.meta.source : void 0),
                                                (r = a.type),
                                                (s = t.concertsLocationForRequest),
                                                l && tX.has(r) && (null == s ? void 0 : s.length) ? { ...l, locations: s } : l),
                                            type: a.type,
                                        });
                                    if (!(0, f._n)(a)) return;
                                    switch (((a.loadingState = ee.REJECT), a.type)) {
                                        case et.t.CLIPS:
                                        case et.t.ARTIST_CLIPS:
                                        case et.t.COLLECTION_CLIPS:
                                            let g, c;
                                            'object' == typeof i &&
                                                null !== i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (!i.items.length ||
                                                    ((g = i.items[0]),
                                                    'object' == typeof g && null !== g && 'type' in g && (g.type === W._.CLIP || g.type === W._.CLIP_ITEM))) &&
                                                ((c = a.type), (a.data = (0, f.wg)({ items: i.items.map(eJ), canShowEmptyBlock: c === et.t.COLLECTION_CLIPS })));
                                            break;
                                        case et.t.WIZARD:
                                            'object' == typeof i && null !== i && 'title' in i && (a.data = tW(i));
                                            break;
                                        case et.t.CHART_TRACKS:
                                            'chart' in i && (a.data = e$(i));
                                            break;
                                        case et.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case et.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = tO(i));
                                            break;
                                        case et.t.CHART_ALBUMS:
                                        case et.t.PODCASTS_CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return !a.length || !!((t = a[0]) && 'object' == typeof t && 'type' in t && t.type === W._.CHART_ALBUM_ITEM);
                                            })(i) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        ((e) => {
                                                            let { album: t, artists: a, likesCount: i, chart: l } = e;
                                                            return (0, f.wg)({ ...(0, X.s)({ album: t, artists: a, likesCount: i }), chart: l && (0, e6.w)(l) });
                                                        })({ album: e.data.album, likesCount: e.data.likesCount, chart: e.data.chart }),
                                                    );
                                                    return (0, f.wg)({ items: t });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_ALBUMS:
                                            'likedAlbums' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedAlbums)
                                                            ? void 0
                                                            : t.map((e) => (0, X.s)({ album: e.data.album, artists: e.data.artists, trailer: e.data.trailer }));
                                                    return (0, f.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_ARTISTS:
                                            'likedArtists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedArtists)
                                                            ? void 0
                                                            : t.map((e) => (0, $.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, f.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_ARTISTS_AND_TOP:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, $.a)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, f.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_TOP_ARTISTS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                Array.isArray(i.artists) &&
                                                (a.data = (0, f.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, $.a)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, e6.w)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, f.wg)({ items: t });
                                                    })(i),
                                                ));
                                            break;
                                        case et.t.PERSONAL_ARTISTS:
                                        case et.t.NEW_STARS_ARTISTS:
                                        case et.t.EDITORIAL_ARTISTS:
                                        case et.t.META_TAG_POPULAR_ARTISTS:
                                        case et.t.MICRO_GENRE_ARTISTS:
                                        case et.t.MICRO_GENRE_TOP_ARTISTS:
                                        case et.t.META_TAG_ARTISTS:
                                        case et.t.SIMILAR_ARTISTS:
                                            'items' in i && (a.data = tA(i));
                                            break;
                                        case et.t.COLLECTION_PLAYLISTS_CREATED:
                                            'createdPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, J.b)({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                              );
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_PLAYLISTS_LIKED:
                                            'likedPlaylists' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, J.b)({
                                                                      playlist: e.data.playlist,
                                                                      generatedPlaylistType: e.data.generatedPlaylistType,
                                                                      likesCount: e.data.likesCount,
                                                                      trailer: e.data.trailer,
                                                                  }),
                                                              );
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.OPEN_PLAYLIST:
                                        case et.t.SMART_OPEN_PLAYLIST:
                                        case et.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in i && (a.data = tw(i, a.id));
                                            break;
                                        case et.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in i && (a.data = e2(i));
                                            break;
                                        case et.t.NEW_RELEASES:
                                        case et.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in i && (a.data = tP(i));
                                            break;
                                        case et.t.NEW_PLAYLISTS:
                                        case et.t.EDITORIAL_COMPILATION:
                                        case et.t.RECOMMENDED_PLAYLISTS:
                                        case et.t.META_TAG_POPULAR_PLAYLISTS:
                                        case et.t.META_TAG_NEW_ALBUMS:
                                        case et.t.META_TAG_PLAYLISTS:
                                        case et.t.MICRO_GENRE_ALBUMS:
                                        case et.t.META_TAG_ALBUMS:
                                        case et.t.ARTIST_PLAYLISTS:
                                        case et.t.ARTIST_COMPILATIONS:
                                        case et.t.ARTIST_ALBUMS:
                                        case et.t.ARTIST_STUDIO_ALBUMS:
                                        case et.t.ARTIST_SIMILAR_ENTITIES:
                                        case et.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in i && (a.data = Z(i));
                                            break;
                                        case et.t.RECENTLY_PLAYED:
                                            'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (e.type) {
                                                                      case W._.PLAYLIST_ITEM:
                                                                          return tU(e.data.playlist, e.data.trailer);
                                                                      case W._.ALBUM_ITEM:
                                                                          return Y(e.data.album, e.data.artists, e.data.trailer);
                                                                      case W._.ARTIST_ITEM:
                                                                          return H(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.IN_STYLE:
                                            'inStyleTabs' in i && (a.data = tC(i));
                                            break;
                                        case et.t.PROMOTIONS:
                                        case et.t.EDITORIAL_PROMOTIONS:
                                        case et.t.NON_MUSIC_PROMOTIONS:
                                            'promotions' in i &&
                                                (a.data = ((e) => {
                                                    if (!Array.isArray(null == e ? void 0 : e.promotions)) return (0, f.wg)({});
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
                                                    return (0, f.wg)({ items: t });
                                                })(i));
                                            break;
                                        case et.t.REWIND_PLAYLISTS:
                                        case et.t.PERSONAL_PLAYLISTS:
                                            'items' in i && (a.data = tM(i));
                                            break;
                                        case et.t.SPECIAL:
                                            'title' in i && (a.data = tV(i));
                                            break;
                                        case et.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== i.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(ez);
                                                                  return (0, f.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, f.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case et.t.WAVES:
                                        case et.t.SETS_BY_WAVES:
                                            'waves' in i && (a.data = tj(i));
                                            break;
                                        case et.t.WAVES_AGENT:
                                        case et.t.SETS_BY_WAVES_AGENT:
                                            i && 'object' == typeof i && 'waves' in i && (a.data = tx(i));
                                            break;
                                        case et.t.MIXES_GRID:
                                        case et.t.MIXES_MUSIC:
                                            'object' == typeof i && null !== i && 'items' in i && (a.data = tk(i));
                                            break;
                                        case et.t.MIXES:
                                            'items' in i && (a.data = { items: (0, f.wg)(i.items.map((e) => (0, tD.J)(e.data))) });
                                            break;
                                        case et.t.NEUROMUSIC:
                                            'items' in i && (a.data = t_(i));
                                            break;
                                        case et.t.LIKES_AND_HISTORY:
                                            'favorites' in i && (a.data = tf(i));
                                            break;
                                        case et.t.CONCERTS_TOP:
                                        case et.t.CONCERTS_PERSONAL:
                                        case et.t.EDITORIAL_CONCERTS:
                                        case et.t.VIEWED_CONCERTS:
                                            void 0 !== i.concerts && (a.data = tI(i));
                                            break;
                                        case et.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
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
                                                                                (0, J.b)({
                                                                                    playlist: e.data.playlist,
                                                                                    generatedPlaylistType: e.data.generatedPlaylistType,
                                                                                    likesCount: e.data.likesCount,
                                                                                    trailer: e.data.trailer,
                                                                                }),
                                                                            );
                                                                  return (0, f.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, f.wg)({ tabs: a });
                                                })(i));
                                            break;
                                        case et.t.EDITORIAL_WAVES:
                                        case et.t.META_TAG_WAVE:
                                        case et.t.MICRO_GENRE_WAVE:
                                        case et.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case et.t.META_TAG_SIMILAR_WAVE:
                                            'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(th.e);
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.EDITORIAL_WAVES_AGENT:
                                        case et.t.META_TAG_WAVE_AGENT:
                                        case et.t.MICRO_GENRE_WAVE_AGENT:
                                        case et.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case et.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, z.l)(e.wave, e.agent));
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.ITEM_LIST:
                                            'items' in i &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(eZ);
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.DONATIONS:
                                            void 0 !== i.donations && (a.data = tN(i));
                                            break;
                                        case et.t.CONTINUE_LISTEN:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'bookshelf' in i &&
                                                (a.data = ((e) => {
                                                    let { bookshelf: t, newEpisodes: a, lastPlayed: i } = e;
                                                    return (0, f.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (t.covers || []).map(tL),
                                                            bookCount: t.bookCount,
                                                            podcastCount: t.podcastCount,
                                                        },
                                                        newEpisodes: { title: a.title, covers: (a.covers || []).map(tL), trackCount: a.trackCount },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: { track: a, album: i, playlist: l, durationTotal: r, durationLeft: s },
                                                                } = e;
                                                                return (0, f.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === ti._.ALBUM && i ? (0, X.s)({ album: i }) : void 0,
                                                                        playlist: t !== ti._.ALBUM && l ? (0, J.b)({ playlist: l }) : void 0,
                                                                        track: (0, eR.v)(a),
                                                                        albumDuration: r,
                                                                        albumDurationLeft: s,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(i));
                                            break;
                                        case et.t.SIMPLE_ALBUM_PROMO:
                                        case et.t.ALBUM_PROMO:
                                            i && 'object' == typeof i && 'albumBanners' in i && (a.data = ej(i));
                                            break;
                                        case et.t.COLLECTION_DOWNLOADED_TRACKS:
                                            i &&
                                                'object' == typeof i &&
                                                'tracks' in i &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, eR.v)(e));
                                                    return (0, f.wg)({ items: a, rawTracks: t });
                                                })(i));
                                            break;
                                        case et.t.HISTORY:
                                        case et.t.SEARCH_HISTORY:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case W._.ALBUM_ITEM:
                                                                    return Y(e.data.album, e.data.artists, e.data.trailer);
                                                                case W._.ARTIST_ITEM:
                                                                    return H(e.data.artist, e.data.trailer);
                                                                case W._.TRACK_ITEM:
                                                                    return e1(e);
                                                                case W._.LIKED_PLAYLIST_ITEM:
                                                                    return q({
                                                                        playlist: e.data.playlist,
                                                                        likesCount: e.data.likesCount,
                                                                        trailer: e.data.trailer,
                                                                        tracksCount: e.data.trackCount,
                                                                    });
                                                                case W._.WAVE_ITEM:
                                                                    let t;
                                                                    return (
                                                                        (t = e),
                                                                        (0, f.wg)({
                                                                            type: W._.WAVE_ITEM,
                                                                            data: {
                                                                                cover: t.data.cover ? (0, eQ.p)(t.data.cover) : void 0,
                                                                                vibe: (0, th.e)(t.data.wave),
                                                                            },
                                                                        })
                                                                    );
                                                                case W._.WAVE_AGENT_ITEM:
                                                                    return Q(e);
                                                                case W._.NON_MUSIC_ALBUM_ITEM:
                                                                    return e0({
                                                                        album: e.data.album,
                                                                        likesCount: e.data.likesCount,
                                                                        bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                    });
                                                                case W._.CLIP_ITEM:
                                                                case W._.CLIP:
                                                                    return { type: e.type, data: eH({ clip: e.data.clip, artists: e.data.artists }) };
                                                                case W._.QUERY_TO_VIBE_ITEM:
                                                                    let a;
                                                                    return (
                                                                        (a = e), (0, f.wg)({ type: W._.QUERY_TO_VIBE_ITEM, data: (0, z.l)(a.data.wave, a.data.agent) })
                                                                    );
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, f.wg)({ items: t });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_KIDS:
                                            i &&
                                                'object' == typeof i &&
                                                'items' in i &&
                                                Array.isArray(i.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case W._.TRACK_ITEM:
                                                                return e1(e);
                                                            case W._.LIKED_PLAYLIST_ITEM:
                                                                return q({
                                                                    playlist: e.data.playlist,
                                                                    likesCount: e.data.likesCount,
                                                                    trailer: e.data.trailer,
                                                                    tracksCount: e.data.trackCount,
                                                                });
                                                            case W._.NON_MUSIC_ALBUM_ITEM:
                                                                return e0({
                                                                    album: e.data.album,
                                                                    likesCount: e.data.likesCount,
                                                                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, f.wg)({ items: t });
                                                })(i));
                                            break;
                                        case et.t.ARTIST_CONCERTS:
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
                                                                  return { ...(0, eW.h)(t, a) };
                                                              });
                                                    return (0, f.wg)({ items: a });
                                                })(i));
                                            break;
                                        case et.t.ARTIST_POPULAR_TRACKS:
                                            i && 'object' == typeof i && 'tracks' in i && i.tracks && (a.data = (0, f.wg)({ items: i.tracks.map((e) => (0, eR.v)(e)) }));
                                            break;
                                        case et.t.ARTIST_RELEASE:
                                            i &&
                                                'object' == typeof i &&
                                                'release' in i &&
                                                i.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: l } = e.release;
                                                    return { album: (0, X.s)({ album: t, artists: a, trailer: l, releaseDate: i }), releaseDate: i };
                                                })(i));
                                            break;
                                        case et.t.FAMILIAR_YOU:
                                            i &&
                                                'object' == typeof i &&
                                                (a.data = (0, f.wg)({
                                                    vibeTrackCount: null == (n = i.wave) ? void 0 : n.trackCount,
                                                    collectionTrackCount: null == (o = i.collection) ? void 0 : o.trackCount,
                                                    collectionAlbumCount: null == (d = i.collection) ? void 0 : d.albumCount,
                                                }));
                                            break;
                                        case et.t.ARTIST_PICK:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                i.artists &&
                                                'playlist' in i &&
                                                i.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => (0, $.a)({ artist: e }));
                                                    return (0, f.wg)({ playlist: (0, J.b)({ playlist: e.playlist }), artists: t });
                                                })(i));
                                            break;
                                        case et.t.ARTIST_UPCOMING_RELEASE:
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
                                                            let { album: a, artists: i, releaseDate: l, isPresave: r } = e,
                                                                { disclaimers: s } = (0, eX.f)(a);
                                                            return (0, f.wg)({
                                                                id: a.id,
                                                                title: a.title,
                                                                type: a.albumType,
                                                                coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                                                isPresave: r,
                                                                releaseDate: l,
                                                                disclaimers: s,
                                                                artists: null == i ? void 0 : i.map((e) => (0, $.a)({ artist: e })),
                                                            });
                                                        })({ album: t, artists: a, releaseDate: i, isPresave: e.presaved }),
                                                    };
                                                })(i));
                                            break;
                                        case et.t.CONCERT_PLACE:
                                            'object' == typeof i &&
                                                null !== i &&
                                                'map' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(tv) : null;
                                                    return (0, f.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(i));
                                            break;
                                        case et.t.COLLECTION_WAVE_AGENT:
                                            i && 'object' == typeof i && 'wave' in i && 'agent' in i && (a.data = (0, f.wg)({ vibe: (0, z.l)(i.wave, i.agent) }));
                                            break;
                                        case et.t.COLLECTION_WAVE_ROOMS:
                                            i && Array.isArray(i) && (a.data = (0, f.wg)({ items: i.map(e5) }));
                                            break;
                                        case et.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
                                            i &&
                                                'object' == typeof i &&
                                                'artists' in i &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => {
                                                        let t = e.items
                                                            .map((e) => {
                                                                switch (e.type) {
                                                                    case W._.MENU_ITEM:
                                                                        return eZ(e);
                                                                    case W._.WAVE_AGENT_ITEM:
                                                                        return Q(e);
                                                                    default:
                                                                        return;
                                                                }
                                                            })
                                                            .filter((e) => void 0 !== e);
                                                        return { artist: (0, $.a)({ artist: e.artist }), items: t };
                                                    });
                                                    return (0, f.wg)({ artists: t });
                                                })(i));
                                    }
                                    a.loadingState = ee.RESOLVE;
                                } catch (e) {
                                    c.error(e),
                                        (0, f._n)(a) &&
                                            ((a.loadingState = ee.REJECT),
                                            e instanceof O.GX && (e.statusCode === O.X1.NOT_FOUND || e.statusCode === O.X1.BAD_REQUEST) && (a.isNotFound = !0));
                                }
                            }),
                            getTabData: (0, f.L3)(function* (t) {
                                let { landingResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                try {
                                    var l;
                                    e.tabs.loadingState = ev.G.PENDING;
                                    let i = yield a.getBlock({ source: t }),
                                        r = tF(i) || [];
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e, t) => {
                                            let a = r.find((t) => t.title === e.meta.title);
                                            e.data = a || r[t];
                                        }),
                                        (e.tabs.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = ev.G.REJECT);
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, l, r;
                                let s = null != a ? a : 0,
                                    n = [];
                                (null == (i = e.meta) ? void 0 : i.source) && n.push(t.getTabData(e.meta.source)),
                                    null == (l = e.upperBlocks) ||
                                        l.forEach((e) => {
                                            s > 0 && ((0, to.v)(e.meta) || eV(e.type)) && (s--, n.push(t.getBlock(e)));
                                        }),
                                    null == (r = e.tabs.data) ||
                                        r.forEach((e) => {
                                            e.blocks.slice(0, s).forEach((e) => {
                                                ((0, to.v)(e.meta) || eV(e.type)) && n.push(t.getBlock(e));
                                            });
                                        }),
                                    n.length > 0 && (await Promise.allSettled(n));
                            },
                            getSkeleton: (0, f.L3)(function* (a, i) {
                                let { landingResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tb(null == r ? void 0 : r.blocks);
                                        s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, f.wg)(s.meta)),
                                            (e.upperBlocks = (0, f.wg)(s.upperBlocks)),
                                            (e.tabs.data = (0, f.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        r.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            getArtistSkeleton: (0, f.L3)(function* (a, i) {
                                let { artistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tb(null == r ? void 0 : r.blocks);
                                        s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, f.wg)(s.meta)),
                                            (e.upperBlocks = (0, f.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, f.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        r.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            getConcertSkeleton: (0, f.L3)(function* (a, i) {
                                let { concertsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let r = yield l.getSkeleton(a),
                                            s = tb(null == r ? void 0 : r.blocks);
                                        s &&
                                            ((e.id = r.id),
                                            (e.title = r.title),
                                            (e.meta = (0, f.wg)(s.meta)),
                                            (e.upperBlocks = (0, f.wg)(s.upperBlocks)),
                                            void 0 !== s.tabs && (e.tabs.data = (0, f.wg)(s.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        r.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = ev.G.IDLE), (e.meta = null), e.tabs.reset(), (e.upperBlocks = null);
                            },
                        };
                        return t;
                    }),
                lS = f.gK.model('ArtistBrandedButton', { title: f.gK.maybeNull(f.gK.string), url: f.gK.maybeNull(f.gK.string) }),
                lK = f.gK
                    .model('ArtistMeta', {
                        artist: es.P,
                        donationUrl: f.gK.maybe(f.gK.string),
                        lastMonthListeners: f.gK.maybe(f.gK.number),
                        brandedButton: f.gK.maybe(lS),
                        covers: f.gK.maybeNull(f.gK.array(f.gK.string)),
                    })
                    .views((e) => ({
                        get hasCovers() {
                            var t;
                            return !!(null == (t = e.covers) ? void 0 : t.length);
                        },
                    }));
            var lb = a(421);
            let lv = /^https:\/\/tips\.yandex\.ru\//,
                lI = (e) => lv.test(null != e ? e : '');
            var lL = a(86634),
                lT = a(21994);
            let lN = f.gK
                    .compose(
                        f.gK.model('ArtistAlbumsPage', {
                            pagesLoader: (0, lL.I)(el.J),
                            variant: f.gK.maybeNull(f.gK.enumeration(Object.values(lT.h))),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                        }),
                        D.p,
                    )
                    .views((e) => ({
                        get isNotFound() {
                            var t, a;
                            let i = e.pagesLoader.isSomePageResolved && (null != (a = null == (t = e.pagesLoader.items) ? void 0 : t.length) ? a : 0) === 0,
                                l = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.pagesLoader.isInitialRequestRejected && l) || i;
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
                        getData: (0, f.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: l = 20, sort: r, preloadedAlbums: s } = t,
                                { artistsResource: n, modelActionsLogger: o } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = { artistId: a, page: i, pageSize: l, sort: { sortBy: null == r ? void 0 : r.sortBy } },
                                        o = s;
                                    if (!o)
                                        switch (e.variant) {
                                            case lT.h.COMPILATIONS:
                                                o = yield n.getAlsoAlbums(t);
                                                break;
                                            case lT.h.DISCOGRAPHY:
                                                o = yield n.getDiscographyAlbums(t);
                                                break;
                                            default:
                                                o = yield n.getDirectAlbums(t);
                                        }
                                    let d = o.albums.map(eK.p);
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: l, total: o.pager.total } });
                                } catch (t) {
                                    o.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            (e.variant = null), (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    })),
                lA = f.gK
                    .model('ArtistClipsPage', { pagesLoader: (0, lL.I)(t8), errorStatusCode: f.gK.maybeNull(f.gK.number) })
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
                            return this.isRejected && e.errorStatusCode === O.X1.NOT_FOUND;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { artistId: a, page: i = 0, pageSize: l = 20, preloadedClips: r } = t,
                                { artistsResource: s, modelActionsLogger: n } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = r;
                                    t || (t = yield s.getClips({ artistId: a, page: i, pageSize: l }));
                                    let n = t.items.map((e) => eH({ clip: e.data.clip, artists: e.data.artists }));
                                    e.pagesLoader.setItems(n, { page: i, pager: t.pager });
                                } catch (t) {
                                    n.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i }),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null);
                        },
                    }));
            var lh = a(36125),
                lC = a(69538),
                lf = a(82757);
            let lR = (e) => {
                    var t, a, i, l, r;
                    return (0, f.wg)({
                        id: e.id,
                        dataSessionId: null != (l = e['data-session-id']) ? l : '',
                        datetime: e.datetime && (0, lC.A)(e.datetime),
                        city: e.city,
                        place: e.place,
                        contentRating: e.contentRating,
                        price: (0, lf.J)(e.minPrice),
                        cashbackTitle: null == (t = e.cashback) ? void 0 : t.title,
                        cashbackValuePercent: null == (a = e.cashback) ? void 0 : a.valuePercent,
                        title: e.concertTitle,
                        eventKind: null != (r = null == (i = e.eventInfo) ? void 0 : i.type) ? r : lh.Z.UNSPECIFIED,
                    });
                },
                lk = f.gK
                    .compose(
                        f.gK.model('ArtistConcertsPage', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            concerts: f.gK.maybeNull(f.gK.array(tQ.a)),
                            artistTitle: f.gK.maybeNull(f.gK.string),
                        }),
                        D.p,
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.concerts) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { artistId: a, preloadedConcerts: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let t = null == i ? void 0 : i.concerts,
                                        r = null == i ? void 0 : i.artistTitle;
                                    if (!t) {
                                        let i = (0, R.M)(e).concerts.concertsLocationForRequest,
                                            s = yield l.getConcerts({ artistId: a, locations: i });
                                        (t = s.concerts), (r = s.artistTitle);
                                    }
                                    (e.concerts = (0, f.wg)(t.map(lR))), (e.artistTitle = null != r ? r : null), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    r.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.errorStatusCode = null), (e.artistTitle = null), e.destroyItems([e.concerts]);
                        },
                    }));
            var lD = a(41190);
            let l_ = (e) => (0, f.wg)({ ...(0, X.s)({ album: e, artists: e.artists }), version: e.version }),
                lP = f.gK
                    .compose(
                        f.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            vibeTracks: f.gK.maybeNull(f.gK.array(U.v)),
                            collectionTracks: f.gK.maybeNull(f.gK.array(U.v)),
                            collectionAlbums: f.gK.maybeNull(f.gK.array(el.J)),
                        }),
                        D.p,
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
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
                                var l, r;
                                if (t.isLoading) return !0;
                                return (
                                    Number(null == (l = e.collectionTracks) ? void 0 : l.length) > 0 && Number(null == (r = e.collectionAlbums) ? void 0 : r.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var s;
                                return Number(null == (s = e.vibeTracks) ? void 0 : s.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var n, o;
                                return null != (o = null == (n = e.collectionTracks) ? void 0 : n.map(lD.$)) ? o : [];
                            },
                            get vibeEntitiesData() {
                                var d, g;
                                return null != (g = null == (d = e.vibeTracks) ? void 0 : d.map(lD.$)) ? g : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { artistId: a, preloadedFamiliar: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var s, n, o, d, g, u;
                                    e.loadingState = ev.G.PENDING;
                                    let t = i;
                                    t || (t = yield l.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (e.vibeTracks = (0, f.wg)(null == (n = t.wave) || null == (s = n.tracks) ? void 0 : s.map((e) => (0, eR.v)(e)))),
                                        (e.collectionTracks = (0, f.wg)(null == (d = t.collection) || null == (o = d.tracks) ? void 0 : o.map((e) => (0, eR.v)(e)))),
                                        (e.collectionAlbums = (0, f.wg)(null == (u = t.collection) || null == (g = u.albums) ? void 0 : g.map(l_))),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    r.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.vibeTracks, e.collectionTracks]);
                        },
                    }));
            var lO = a(84060);
            let lw = f.gK
                    .compose(
                        f.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: f.gK.maybeNull(f.gK.number), similarArtists: f.gK.maybeNull(f.gK.array(es.P)) }),
                        D.p,
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.similarArtists) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { artistId: a, preloadedSimilarArtists: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            try {
                                e.loadingState = ev.G.PENDING;
                                let t = i;
                                t || (t = yield l.getSimilarArtists({ artistId: a })),
                                    (e.similarArtists = (0, f.wg)(t.similarArtists.map(lO.d))),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                r.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.errorStatusCode = null), e.destroyItems([e.similarArtists]);
                        },
                    })),
                lG = f.gK.model('CommonSubPage', { artistName: f.gK.maybeNull(f.gK.string) }),
                lM = f.gK
                    .compose(
                        f.gK.model('FullTracksList', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            ids: f.gK.maybeNull(f.gK.array(f.gK.string)),
                            tracks: f.gK.optional(f.gK.map(U.v), {}),
                        }),
                        D.p,
                        V.X,
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
                                i = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                            return (e.isRejected && i) || a;
                        },
                    }))
                    .actions((e) => ({
                        getTracksIds: (0, f.L3)(function* (t) {
                            let { artistId: a } = t,
                                { artistsResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            try {
                                e.loadingState = ev.G.PENDING;
                                let t = yield i.getArtistTrackIds({ artistId: a }),
                                    { sonataState: l } = (0, R.M)(e);
                                l.setUnloadedEntitiesData(t.map((e) => (0, eT.l)(e))),
                                    (e.ids = (0, f.wg)(t)),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            }
                        }),
                        getTracks: (0, f.L3)(function* (t) {
                            let { trackIds: a } = t,
                                { tracksResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            try {
                                let t = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
                                e.tracks.merge(t.reduce((e, t) => ((e[t.id] = (0, eR.v)(t)), e), {}));
                            } catch (e) {
                                l.error(e);
                            }
                        }),
                        reset() {
                            let { sonataState: t } = (0, R.M)(e);
                            t.resetUnloadedEntitiesData(), (e.loadingState = ev.G.IDLE), e.destroyItems([e.tracks, e.ids]);
                        },
                    }));
            var lU = a(59407);
            let lB = f.gK.compose(f.gK.model('OfflineArtistTrackIds', { ids: f.gK.maybeNull(f.gK.array(f.gK.string)) }), V.X, D.p).actions((e) => ({
                    getIds: (0, f.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, f._$)(e);
                        if (e.loadingState !== ev.G.PENDING)
                            try {
                                e.loadingState = ev.G.PENDING;
                                let i = yield a.getArtistTrackIdsByUser(t);
                                (e.ids = (0, f.wg)(i)), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                i.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.ids]);
                    },
                })),
                lV = f.gK
                    .compose(f.gK.model('OfflineArtist', { id: f.gK.maybeNull(f.gK.string), meta: f.gK.maybeNull(lK), trackIds: lB, downloadedTracks: lU.b }), V.X, D.p)
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
                        getArtist: (0, f.L3)(function* (t, a) {
                            let { modelActionsLogger: i } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING) {
                                e.id = t;
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let i = yield a.getArtist(t);
                                    i && (e.meta = (0, f.wg)({ artist: (0, lO.d)(i) })), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                            }
                        }),
                        reset() {
                            (e.id = null), (e.loadingState = ev.G.IDLE), e.trackIds.reset(), e.downloadedTracks.reset(), e.destroyItems([e.meta]);
                        },
                    })),
                lF = f.gK
                    .compose(
                        f.gK.model('ArtistPage', {
                            id: f.gK.maybeNull(f.gK.string),
                            meta: f.gK.maybeNull(lK),
                            landing: lE,
                            deprecationTargetArtistId: f.gK.maybeNull(f.gK.number),
                            albumsSubpage: lN,
                            fullTracksListSubpage: lM,
                            concertsSubpage: lk,
                            similarArtistsSubPage: lw,
                            clipsSubpage: lA,
                            familiarSubpage: lP,
                            commonSubPage: lG,
                            offlineArtist: lV,
                            infoLoadingState: V.X,
                            infoErrorStatusCode: f.gK.maybeNull(f.gK.number),
                        }),
                        D.p,
                    )
                    .views((e) => {
                        let t = {
                            get isInfoNotFound() {
                                return e.infoLoadingState.isRejected && (e.infoErrorStatusCode === O.X1.NOT_FOUND || e.infoErrorStatusCode === O.X1.BAD_REQUEST);
                            },
                            get isInfoSomethingWentWrong() {
                                return e.infoLoadingState.isRejected && !t.isInfoNotFound;
                            },
                            get selfLink() {
                                if (!e.id) return '';
                                let { href: t } = (0, eI.u)('/artist/:artistId', { params: { artistId: e.id } });
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getInfo: (0, f.L3)(function* (t) {
                            let { artistId: a, preloadedArtist: i } = t,
                                { artistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (((e.id = a), e.infoLoadingState.loadingState !== ev.G.PENDING))
                                try {
                                    var s, n, o, d, g, u, c;
                                    let t;
                                    e.infoLoadingState.loadingState = ev.G.PENDING;
                                    let r = i;
                                    r || (r = yield l.getInfo({ artistId: a }));
                                    let { artist: m, deprecation: p } = r;
                                    if (null == p ? void 0 : p.targetArtistId) {
                                        e.deprecationTargetArtistId = p.targetArtistId;
                                        return;
                                    }
                                    (e.commonSubPage.artistName = m.name),
                                        (e.meta = (0, f.wg)(
                                            ((o = r),
                                            (0, f.wg)({
                                                artist: (0, $.a)({ artist: o.artist, trailer: o.trailer, isComposer: o.artistType === lb.o.COMPOSER }),
                                                donationUrl: lI(null == (d = o.donation) ? void 0 : d.tipUrl) ? (null == (g = o.donation) ? void 0 : g.tipUrl) : void 0,
                                                lastMonthListeners: null == (u = o.stats) ? void 0 : u.lastMonthListeners,
                                                brandedButton: o.brandedButton ? ((t = o.brandedButton), (0, f.wg)({ title: t.title, url: t.action.weblink })) : void 0,
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
                                        e.infoLoadingState.loadingState !== ev.G.IDLE && (e.infoLoadingState.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    r.error(t),
                                        t instanceof O.GX && (e.infoErrorStatusCode = t.statusCode),
                                        e.infoLoadingState.loadingState !== ev.G.IDLE && (e.infoLoadingState.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.infoLoadingState.loadingState = ev.G.IDLE),
                                e.landing.reset(),
                                (e.id = null),
                                (e.deprecationTargetArtistId = null),
                                e.destroyItems([e.meta]);
                        },
                    }));
            var lx = a(4359),
                lj = a(8246);
            let lW = (e) => !!e && (e === lj.x.ASC || e === lj.x.DESC);
            var lX = a(89418);
            let lY = f.gK.compose(f.gK.model('UpcomingAlbums', { items: f.gK.maybeNull(f.gK.array(tr)) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                    },
                })),
                l$ = f.gK
                    .compose(f.gK.model('CollectionAlbumsPage', { sort: f.gK.maybeNull(lX.w), pagesLoader: (0, lL.I)(el.J), upcomingAlbums: lY }), D.p)
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
                        getData: (0, f.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s, metaType: n } = t,
                                { usersResource: o, modelActionsLogger: d } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, lx.W)(r) && lW(s) && (e.sort = (0, f.wg)({ sortBy: r, sortOrder: s }));
                                try {
                                    var g, u;
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield o.getLikedAlbums({ userId: a, page: i, pageSize: l, sortBy: r, sortOrder: s, metaType: n }),
                                        d =
                                            null !=
                                            (u =
                                                null == (g = t.albums)
                                                    ? void 0
                                                    : g.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, eK.p)(t);
                                                      }))
                                                ? u
                                                : [];
                                    e.pagesLoader.setItems(d, { page: i, pager: { page: i, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    d.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                            }
                        }),
                        getPresaves: (0, f.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var r;
                                    e.upcomingAlbums.loadingState = ev.G.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    (e.upcomingAlbums.items = (0, f.wg)(null == (r = t.upcomingAlbums) ? void 0 : r.map(eq))),
                                        e.upcomingAlbumsLoadingState !== ev.G.IDLE && (e.upcomingAlbums.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]);
                        },
                    })),
                lH = f.gK.compose(f.gK.model('TopArtists', { items: f.gK.array(aw) }), D.p, V.X).actions((e) => ({
                    reset() {
                        (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                    },
                })),
                lJ = f.gK
                    .compose(f.gK.model('CollectionArtistsPage', { sort: f.gK.maybeNull(lX.w), pagesLoader: (0, lL.I)(es.P), topArtists: lH }), D.p)
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
                        getDataTopArtists: (0, f.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            try {
                                var i, l;
                                e.topArtists.loadingState = ev.G.PENDING;
                                let a = yield t.getTopArtists();
                                (e.topArtists.items = (0, f.wg)(
                                    null !=
                                        (l =
                                            null == (i = a.artists)
                                                ? void 0
                                                : i.map((e) =>
                                                      ((e) => {
                                                          let t = (0, $.a)({ artist: e.artist }),
                                                              a = (0, e6.w)(e.top);
                                                          return (0, f.wg)({ artist: t, listenTimeSeconds: e.listenTimeSeconds, top: a });
                                                      })(e),
                                                  ))
                                        ? l
                                        : [],
                                )),
                                    (e.topArtists.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.topArtists.loadingState = ev.G.REJECT);
                            }
                        }),
                        getData: (0, f.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s } = t,
                                { usersResource: n, modelActionsLogger: o } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, lx.W)(r) && lW(s) && (e.sort = (0, f.wg)({ sortBy: r, sortOrder: s }));
                                try {
                                    var d, g;
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield n.getLikedArtists({ userId: a, page: i, pageSize: l, sortBy: r, sortOrder: s }),
                                        o = null != (g = null == (d = t.artists) ? void 0 : d.map(lO.d)) ? g : [];
                                    e.pagesLoader.setItems(o, { page: i, pager: { page: i, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    o.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                            }
                        }),
                        reset() {
                            e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null);
                        },
                    })),
                lq = (e) => {
                    var t;
                    let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, $.a)({ artist: e }));
                    return (0, f.wg)({
                        ...((e) => {
                            let { available: t, disclaimers: a } = (0, eX.f)(e);
                            return (0, f.wg)({
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
            var lz = a(89009),
                lQ = a(93043);
            let lZ = f.gK
                    .compose(f.gK.model('CollectionClipsPageWillLike', { clips: f.gK.maybeNull(f.gK.array(t8)) }), V.X, D.p)
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
                        getData: (0, f.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            try {
                                e.loadingState = ev.G.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                a.clips && (e.clips = (0, f.wg)(a.clips.map(lq))), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), e.destroyItems([e.clips]);
                        },
                    })),
                l0 = f.gK
                    .compose(
                        f.gK.model('CollectionClipsPage', {
                            items: f.gK.array(f.gK.maybeNull(t8)),
                            pager: f.gK.maybeNull(lQ.j),
                            alreadyRequestedPages: f.gK.map(f.gK.number),
                            pendingPages: f.gK.map(f.gK.number),
                            clipsWillLike: lZ,
                        }),
                        V.X,
                        D.p,
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
                            e.items = (0, f.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, f.L3)(function* (t) {
                            var a;
                            let { userId: i, page: l = 0, pageSize: r = 20 } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, f._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === ev.G.PENDING && e.pendingPages.has(l.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(l.toString())
                            ) {
                                'number' == typeof l && e.alreadyRequestedPages.set(l.toString(), l);
                                try {
                                    (e.loadingState = ev.G.PENDING), e.pendingPages.set(l.toString(), l);
                                    let t = yield s.getLikedClips({ userId: i, page: l, pageSize: r }),
                                        a = { page: l, perPage: r, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(lq);
                                        (0, lz.I)({ items: e.items, mappedRawItems: i, page: l, pageSize: r }), (e.items = (0, f.wg)(e.items.slice(0, a.total)));
                                    }
                                    (e.pager = (0, f.wg)(a)), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = ev.G.REJECT);
                                } finally {
                                    e.pendingPages.delete(l.toString());
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset();
                        },
                    })),
                l1 = f.gK
                    .compose(
                        f.gK.model('CollectionNonMusicPage', {
                            items: f.gK.array(f.gK.maybeNull(el.J)),
                            pager: f.gK.maybeNull(lQ.j),
                            alreadyRequestedPages: f.gK.map(f.gK.number),
                            pendingPages: f.gK.map(f.gK.number),
                            requestsCount: f.gK.maybeNull(f.gK.number),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === ev.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, metaType: r } = t,
                                { usersResource: s, modelActionsLogger: n } = (0, f._$)(e);
                            if (!(e.loadingState === ev.G.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var o, d, g;
                                    (e.loadingState = ev.G.PENDING), e.pendingPages.set(''.concat(i), i);
                                    let t = yield s.getLikedAlbums({ userId: a, page: i, pageSize: l, metaType: r }),
                                        n = { page: i, perPage: l, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, f.wg)(Array.from({ length: n.total }, () => null)));
                                    let u =
                                        null !=
                                        (d =
                                            null == (o = t.albums)
                                                ? void 0
                                                : o.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, eK.p)(t);
                                                  }))
                                            ? d
                                            : [];
                                    (0, lz.I)({ items: e.items, mappedRawItems: u, page: i, pageSize: l }),
                                        (e.pager = (0, f.wg)(n)),
                                        (e.requestsCount = (null != (g = e.requestsCount) ? g : 0) + 1),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    n.error(t), (e.loadingState = ev.G.REJECT);
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE),
                                (e.items = (0, f.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0);
                        },
                    }));
            var l3 = a(38769);
            let l2 = (e) => ({ id: e.id, albumId: e.albumId, timestamp: e.timestamp }),
                l6 = (e) => {
                    var t, a;
                    return (0, f.wg)({ ...(0, e3.j)(e), tracks: null != (a = null == e || null == (t = e.tracks) ? void 0 : t.map(l2)) ? a : [] });
                };
            var l4 = a(38396);
            let l5 = f.gK
                    .model('CollectionPlaylistsCreatedPage', { sort: f.gK.maybeNull(lX.w), pagesLoader: (0, lL.I)(l4.Z), kinds: f.gK.array(f.gK.number) })
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
                    .actions((e) => {
                        let t = {
                            getKinds: (0, f.L3)(function* (t) {
                                let a = [],
                                    { usersResource: i } = (0, f._$)(e);
                                (a = yield i.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 })), (e.kinds = (0, f.wg)(a));
                            }),
                            getData: (0, f.L3)(function* (a) {
                                let { userId: i, page: l = 0, pageSize: r = 20, withLikesCount: s } = a,
                                    { usersResource: n, modelActionsLogger: o } = (0, f._$)(e);
                                if (e.pagesLoader.isPageNeedToLoad(l))
                                    try {
                                        e.pagesLoader.setPageState(l, ev.G.PENDING), 0 === e.kinds.length && (yield t.getKinds(i));
                                        let a = l * r,
                                            o = e.kinds.slice(a, a + r),
                                            d = (yield n.getPlaylistsByKinds({ userId: i, kinds: o, withLikesCount: s, withTracks: !0 })).map(l6);
                                        e.pagesLoader.setItems(d, { page: l, pager: { page: l, perPage: r, total: e.kinds.length } });
                                    } catch (t) {
                                        o.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: l });
                                    }
                            }),
                            reset() {
                                (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, f.wg)([]));
                            },
                        };
                        return t;
                    }),
                l9 = f.gK
                    .model('CollectionPlaylistsLikedPage', { sort: f.gK.maybeNull(lX.w), pagesLoader: (0, lL.I)(tu.$) })
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
                        getData: (0, f.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: l = 20, sortBy: r, sortOrder: s, playlistMetaType: n, withTracks: o } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: d, modelActionsLogger: g } = (0, f._$)(e);
                            (e.sort = null), (0, lx.W)(r) && lW(s) && (e.sort = (0, f.wg)({ sortBy: r, sortOrder: s }));
                            try {
                                e.pagesLoader.setPageState(i, ev.G.PENDING);
                                let { likedPlaylists: t, pager: g } = yield d.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: l,
                                        sortBy: r,
                                        sortOrder: s,
                                        playlistMetaType: n,
                                        withTracks: o,
                                    }),
                                    u = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, e3.j)(t);
                                    });
                                e.pagesLoader.setItems(u, { page: i, pager: g });
                            } catch (t) {
                                g.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                            }
                        }),
                        reset() {
                            (e.sort = null), e.pagesLoader.reset();
                        },
                    })),
                l7 = f.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: l9,
                        playlistsCreated: l5,
                        activeTabIndex: f.gK.number,
                        tabs: f.gK.array(f.gK.number),
                        tabIndexElement: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === l3.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === l3.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case l3.a.CREATED:
                                    return e.playlistsCreated;
                                case l3.a.LIKED:
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
                            e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = l3.a.CREATED);
                        },
                    })),
                l8 = (e) => (0, f.wg)({ type: e.type, track: (0, eR.v)(e.track), album: e.album && (0, eK.p)(e.album) }),
                re = f.gK.model('ShelfLikedItem', { type: f.gK.string, track: U.v, album: f.gK.maybe(el.J) }),
                rt = f.gK
                    .compose(
                        f.gK.model('CollectionShelfLiked', {
                            title: f.gK.maybeNull(f.gK.string),
                            typeForFrom: f.gK.maybeNull(f.gK.string),
                            entities: f.gK.maybeNull(f.gK.array(re)),
                            pager: f.gK.maybeNull(lQ.j),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield t.getShelfLiked();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, f.wg)(a.pager)),
                                        (e.entities = (0, f.wg)(a.entities ? a.entities.map(l8) : [])),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = ev.G.IDLE);
                        },
                    }));
            var ra = a(55516),
                ri = a(60277);
            let rl = f.gK.model('CaseForms', {
                    nominative: f.gK.optional(f.gK.string, ''),
                    genitive: f.gK.optional(f.gK.string, ''),
                    dative: f.gK.optional(f.gK.string, ''),
                    accusative: f.gK.optional(f.gK.string, ''),
                    instrumental: f.gK.optional(f.gK.string, ''),
                    prepositional: f.gK.optional(f.gK.string, ''),
                }),
                rr = f.gK.model('PlaylistOwner', { caseForms: f.gK.maybeNull(rl) });
            var rs = a(51496);
            let rn = f.gK.model('PlaylistOwner', {
                    uid: f.gK.number,
                    login: f.gK.string,
                    name: f.gK.string,
                    sex: f.gK.enumeration(Object.values(rs.U)),
                    verified: f.gK.boolean,
                }),
                ro = f.gK.model('PlaylistTag', { id: f.gK.string, value: f.gK.string }),
                rd = tu.$.props({
                    owner: f.gK.maybe(rn),
                    modified: f.gK.string,
                    description: f.gK.maybe(f.gK.string),
                    tags: f.gK.maybeNull(f.gK.array(ro)),
                    madeFor: f.gK.maybeNull(rr),
                })
                    .views((e) => ({
                        get seeds() {
                            var t;
                            return ['playlist:'.concat(null == (t = e.owner) ? void 0 : t.login, '_').concat(e.kind)];
                        },
                        get tagsString() {
                            let { experiments: t } = (0, R.M)(e);
                            if (!t.checkExperiment(k.z.WebEditorsFeatures, 'on') || !Array.isArray(e.tags) || !e.tags.length) return null;
                            return e.tags.map((e) => e.value).join(', ');
                        },
                    }))
                    .actions((e) => ({
                        changeDescription: (0, f.L3)(function* (t) {
                            if (!(0, f._n)(e)) return aV.F.ERROR;
                            if (e.description === t) return aV.F.OK;
                            if (t.length > ri.i) return aV.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (e.canUserChange) {
                                let l = e.description;
                                e.description = t;
                                try {
                                    let i = yield a.changePlaylistDescription({ description: t, userId: e.uid, playlistKind: e.kind });
                                    return (e.description = i.description), aV.F.OK;
                                } catch (t) {
                                    (e.description = l), i.error(t);
                                }
                            }
                            return aV.F.ERROR;
                        }),
                        changePlaylistCover: (0, f.L3)(function* (t) {
                            if (!(0, f._n)(e)) return aV.F.ERROR;
                            let { usersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            try {
                                let i = yield a.uploadPlaylistCover({ userId: e.uid, formData: t, playlistKind: e.kind });
                                return (e.coverUri = i.cover.uri), aV.F.OK;
                            } catch (e) {
                                i.error(e);
                            }
                            return aV.F.ERROR;
                        }),
                    }))
                    .named('PlaylistMeta'),
                rg = f.gK
                    .compose(
                        f.gK.model('CollectionShelfNewEpisodes', {
                            title: f.gK.maybeNull(f.gK.string),
                            typeForFrom: f.gK.maybeNull(f.gK.string),
                            playlist: f.gK.maybeNull(rd),
                            tracks: f.gK.maybeNull(f.gK.array(U.v)),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let l = a.blocks[0];
                                    (null == l ? void 0 : l.typeForFrom) && (e.typeForFrom = l.typeForFrom),
                                        (null == l || null == (i = l.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, ra.Z)(l.entities[0].playlist)),
                                        (null == l ? void 0 : l.entities) && (e.tracks = (0, f.wg)(l.entities.filter((e) => e.track).map((e) => (0, eR.v)(e.track)))),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = ev.G.IDLE);
                        },
                    })),
                ru = (e) => (0, f.wg)({ type: e.type, album: e.album && (0, eK.p)(e.album), playlist: e.playlist && (0, ra.Z)(e.playlist), track: (0, eR.v)(e.track) }),
                rc = f.gK.model('ShelfRecentlyPlayedItem', { type: f.gK.string, album: f.gK.maybe(el.J), playlist: f.gK.maybe(eo.I), track: U.v }),
                rm = f.gK
                    .compose(
                        f.gK.model('CollectionShelfRecentlyPlayed', {
                            title: f.gK.maybeNull(f.gK.string),
                            typeForFrom: f.gK.maybeNull(f.gK.string),
                            entities: f.gK.maybeNull(f.gK.array(rc)),
                            pager: f.gK.maybeNull(lQ.j),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var i;
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = (0, f.wg)(a.pager)),
                                        (e.entities = (0, f.wg)(a.entities.map(ru))),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = ev.G.IDLE);
                        },
                    })),
                rp = f.gK
                    .model('CollectionShelfPage', { recentlyPlayed: rm, newEpisodes: rg, liked: rt })
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
                            return e.recentlyPlayed.loadingState === ev.G.IDLE && e.liked.loadingState === ev.G.IDLE;
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
                            e.recentlyPlayed.reset(), e.liked.reset();
                        },
                    })),
                ry = f.gK
                    .compose(f.gK.model('CollectionVibeRoomsPage', { items: f.gK.array(f.gK.maybeNull(ax)) }), V.X, D.p)
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwo, 'on') || t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === ev.G.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !(null == (t = e.items) ? void 0 : t.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { modelActionsLogger: t, waveResource: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let t = yield a.getRooms();
                                    (e.items = (0, f.wg)(t.map(e5))), (e.loadingState = ev.G.RESOLVE);
                                } catch (a) {
                                    t.error(a), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        deleteRoomFromItems(t) {
                            var a;
                            e.items = (0, f.wg)(null == (a = e.items) ? void 0 : a.filter((e) => (null == e ? void 0 : e.id) !== t));
                        },
                        reset() {
                            (e.loadingState = ev.G.IDLE), e.destroyItems([e.items]);
                        },
                    })),
                rE = f.gK
                    .compose(f.gK.model('CollectionDislikesPageArtists', { items: f.gK.maybeNull(f.gK.array(es.P)) }), V.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!(0, f._n)(e)) return null;
                            let { user: i } = (0, R.M)(e);
                            if (e.loadingState === ev.G.PENDING) return null;
                            if (((e.loadingState = ev.G.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return (e.items = (0, f.wg)((a || []).map(lO.d))), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE), a;
                                } catch (t) {
                                    a.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                            return (e.loadingState = ev.G.REJECT), null;
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.items = null);
                        },
                    })),
                rS = f.gK.model('CollectionDislikesPageTracksItem', { id: f.gK.string, loadingState: f.gK.enumeration(Object.values(ev.G)), data: f.gK.maybeNull(U.v) }),
                rK = f.gK
                    .compose(f.gK.model('CollectionDislikesPageTracks', { items: f.gK.maybeNull(f.gK.array(rS)) }), V.X)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, l;
                                return null != (l = null == (i = e.items) ? void 0 : i.map((e) => (0, eT.l)(e.id))) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                { user: i } = (0, R.M)(e);
                            if (i.account.data.uid && e.loadingState !== ev.G.PENDING) {
                                e.loadingState = ev.G.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        l = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, az.V)(t, a)), loadingState: ev.G.IDLE };
                                        });
                                    (e.items = (0, f.wg)(l)), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                            }
                        }),
                        getTracksByRange: (0, f.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
                            let s = ((e, t, a) => {
                                let i = [];
                                for (let s = t; s <= a; s++) {
                                    var l, r;
                                    ((null == (l = e[s]) ? void 0 : l.loadingState) === ev.G.IDLE || (null == (r = e[s]) ? void 0 : r.loadingState) === ev.G.REJECT) &&
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
                                    i && (i.loadingState = ev.G.PENDING);
                                });
                                let i = yield l.getTracksMeta({ trackIds: a, withProgress: !0 });
                                s.forEach((t, a) => {
                                    var l;
                                    let r = null == i ? void 0 : i[a];
                                    (null == (l = e.items) ? void 0 : l[t]) && r && (e.items[t] = { id: String(r.id), data: (0, eR.v)(r), loadingState: ev.G.RESOLVE });
                                });
                            } catch (t) {
                                r.error(t),
                                    s.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = ev.G.REJECT);
                                    });
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.items = null);
                        },
                    })),
                rb = f.gK
                    .model('CollectionDislikesPage', { artists: rE, tracks: rK })
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
                            e.artists.reset(), e.tracks.reset();
                        },
                    }));
            var rv = a(30294);
            let rI = f.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, lL.I)(el.J) })
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
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { pageSize: a = rv.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield l.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => e0(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rL = f.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, lL.I)(eo.I) })
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
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { pageSize: a = rv.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield l.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        r = t.items.map((e) => q(e.data).data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rT = f.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, lL.I)(U.v) })
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
                                var i, l;
                                return null != (l = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? l : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(lD.$);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { pageSize: a = rv.c, page: i = 0 } = t,
                                { landingBlocksResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield l.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        r = t.items.map(e1).map((e) => e.data);
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager });
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rN = f.gK
                    .model('CollectionKidsPage', { albums: rI, playlists: rL, tracks: rT })
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
                            e.albums.reset(), e.playlists.reset(), e.tracks.reset();
                        },
                    })),
                rA = f.gK
                    .compose(f.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, lL.I)(re), typeForFrom: f.gK.maybeNull(f.gK.string) }), D.p)
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
                        getData: (0, f.L3)(function* (t) {
                            let { pageSize: a = rv.c, page: i = 0 } = t,
                                { nonMusicResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield l.getShelfLiked({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(l8)) || [];
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null);
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                rh = f.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, lL.I)(rc), typeForFrom: f.gK.maybeNull(f.gK.string) })
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
                        getData: (0, f.L3)(function* (t) {
                            let { pageSize: a = rv.c, page: i = 0 } = t,
                                { nonMusicResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var s, n;
                                    e.pagesLoader.setPageState(i, ev.G.PENDING);
                                    let t = yield l.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        r = (null == (s = t.entities) ? void 0 : s.map(ru)) || [];
                                    e.pagesLoader.setItems(r, { page: i, pager: t.pager }), (e.typeForFrom = null != (n = t.typeForFrom) ? n : null);
                                } catch (t) {
                                    r.error(t), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.typeForFrom = null);
                        },
                    })),
                rC = f.gK.model('CollectionPage', {
                    landing: lE,
                    albums: l$,
                    playlists: l7,
                    artists: lJ,
                    shelf: rp,
                    shelfRecentlyPlayed: rh,
                    shelfLiked: rA,
                    nonMusicLiked: l1,
                    dislikes: rb,
                    kids: rN,
                    clips: l0,
                    vibeRooms: ry,
                }),
                rf = f.gK.model('ConcertDescription', { text: f.gK.string, genre: f.gK.maybe(f.gK.string), source: f.gK.maybe(f.gK.string) }),
                rR = f.gK
                    .compose(
                        f.gK.model('ConcertPage', {
                            meta: f.gK.maybeNull(tQ.a),
                            covers: f.gK.maybeNull(f.gK.array(tY.$)),
                            description: f.gK.maybeNull(rf),
                            leadArtistId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            artists: f.gK.maybeNull(f.gK.array(es.P)),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            landing: lE,
                        }),
                        V.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get isNotFound() {
                            return e.isRejected && (e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST);
                        },
                        get coversUri() {
                            var t, a;
                            return null != (a = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? a : [];
                        },
                    }))
                    .actions((e) => ({
                        getInfo: (0, f.L3)(function* (t) {
                            let { concertId: a } = t,
                                { concertsResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let { concert: t, minPrice: l, covers: r, description: s, leadArtistId: n, artists: o } = yield i.getInfo({ concertId: a });
                                    (e.meta = (0, eW.h)(t, l)),
                                        (e.covers = (0, f.wg)(null == r ? void 0 : r.map((e) => (0, eQ.p)(e)))),
                                        (e.description = s ? (0, f.wg)(s) : null),
                                        (e.leadArtistId = n ? (0, f.wg)(n) : null),
                                        (e.artists = (0, f.wg)(null == o ? void 0 : o.map((e) => (0, lO.d)(e)))),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]);
                        },
                    }));
            var rk = a(36885),
                rD = a(19379);
            let r_ = (e, t, a) => (-1 === a ? e.slice(t) : e.slice(t, t + a)),
                rP = (e) => (0, f.wg)({ id: e.id, name: e.name }),
                rO = f.gK.model('ConcertLocation', { id: f.gK.number, name: f.gK.string });
            var rw = a(4932);
            let rG = f.gK
                    .compose(
                        f.gK.model({
                            selectedLocationId: f.gK.maybeNull(f.gK.number),
                            locations: f.gK.maybeNull(f.gK.array(rO)),
                            isInitialized: f.gK.optional(f.gK.boolean, !1),
                            modal: rw.q,
                            searchText: f.gK.optional(f.gK.string, ''),
                        }),
                        V.X,
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
                            let { containerStorage: t } = (0, f._$)(e),
                                a = t.get(rD.c.ConcertLocation);
                            'number' == typeof a && (e.selectedLocationId = a), (e.isInitialized = !0);
                        },
                        getLocations: (0, f.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield t.getLocations({});
                                    (e.locations = (0, f.wg)(a.locations.map(rP))), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        setSelectedLocation(t) {
                            let { containerStorage: a } = (0, f._$)(e);
                            (e.selectedLocationId = t),
                                null === t ? a.remove(rD.c.ConcertLocation) : a.set(rD.c.ConcertLocation, t, { expires: 365 }),
                                (0, R.M)(e).concerts.reloadData();
                        },
                        setSearchText(t) {
                            e.searchText = t;
                        },
                        resetSearchText() {
                            e.searchText = '';
                        },
                        reset() {
                            (e.selectedLocationId = null),
                                (e.locations = null),
                                (e.loadingState = ev.G.IDLE),
                                (e.isInitialized = !1),
                                (e.searchText = ''),
                                e.modal.close();
                        },
                    })),
                rM = f.gK
                    .compose(
                        f.gK.model('ConcertsPageConfig', {
                            topOffset: f.gK.optional(f.gK.number, 0),
                            topLimit: f.gK.optional(f.gK.number, 3),
                            feedOffset: f.gK.optional(f.gK.number, 3),
                            feedLimit: f.gK.optional(f.gK.number, -1),
                        }),
                        V.X,
                    )
                    .actions((e) => ({
                        getData: (0, f.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let {
                                        config: { feed: a, top: i },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = a.limit), (e.feedOffset = a.offset), (e.topLimit = i.limit), (e.topOffset = i.offset), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0);
                        },
                    })),
                rU = f.gK
                    .compose(
                        f.gK.model('ConcertsPage', {
                            config: rM,
                            landing: lE,
                            locationSelection: rG,
                            topConcerts: f.gK.maybeNull(f.gK.array(tQ.a)),
                            feedConcerts: f.gK.maybeNull(f.gK.array(tQ.a)),
                        }),
                        V.X,
                        D.p,
                    )
                    .views((e) => {
                        let t = () => {
                            var t;
                            let { containerStorage: a } = (0, f._$)(e),
                                i = a.get(rD.c.ConcertLocation);
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
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextConcertsLocation, 'on');
                            },
                            get concertsLocationForRequest() {
                                let { experiments: a } = (0, R.M)(e),
                                    i = a.checkExperiment(k.z.WebNextConcertsLocationAll, 'on'),
                                    l = t();
                                if (i && null !== l) return [l];
                                return;
                            },
                            get concertsLocationForFeedRequest() {
                                let { experiments: a } = (0, R.M)(e),
                                    i = a.checkExperiment(k.z.WebNextConcertsLocation, 'on'),
                                    l = t();
                                if (i && null !== l) return [l];
                                return;
                            },
                        };
                    })
                    .actions((e) => {
                        let t = (0, f.L3)(function* () {
                                let { concertsResource: t } = (0, f._$)(e),
                                    a = {},
                                    i = e.concertsLocationForFeedRequest;
                                (null == i ? void 0 : i.length) && (a.locations = i);
                                let { items: l } = yield t.getFeed(a),
                                    { feedConcerts: r, topConcerts: s } = ((e, t) => {
                                        let { topLimit: a, topOffset: i, feedLimit: l, feedOffset: r } = e;
                                        return { topConcerts: r_(t, i, a), feedConcerts: r_(t, r, l) };
                                    })(
                                        e.config,
                                        l.map((e) => (0, rk.H)(e)),
                                    );
                                (e.feedConcerts = (0, f.wg)(r)), (e.topConcerts = (0, f.wg)(s));
                            }),
                            a = {
                                resetPageData() {
                                    e.config.reset(), e.landing.reset(), (e.loadingState = ev.G.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]);
                                },
                                getData: (0, f.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, f._$)(e);
                                    if (!e.config.isLoading && !e.isLoading)
                                        try {
                                            (e.loadingState = ev.G.PENDING),
                                                e.isLocationSelectionExperimentEnabled && e.locationSelection.init(),
                                                yield e.config.getData(),
                                                yield t(),
                                                (e.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            a.error(t), (e.loadingState = ev.G.REJECT);
                                        }
                                }),
                                reloadData: (0, f.L3)(function* () {
                                    let { modelActionsLogger: a } = (0, f._$)(e);
                                    try {
                                        (e.loadingState = ev.G.PENDING), yield t(), (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        a.error(t), (e.loadingState = ev.G.REJECT);
                                    }
                                }),
                                reset() {
                                    a.resetPageData(), e.locationSelection.reset();
                                },
                            };
                        return a;
                    });
            var rB = a(69757);
            let rV = f.gK
                    .compose(
                        f.gK.model('KidsEditorialAlbumPage', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            title: f.gK.maybeNull(f.gK.string),
                            albumsData: f.gK.array(f.gK.model({ id: f.gK.number })),
                            pagesLoader: (0, lL.I)(aQ.G),
                        }),
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
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
                            getAlbums: (0, f.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { albumResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState === ev.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, ev.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.albumsData.slice(t, t + i).map((e) => e.id),
                                            s = yield l.getAlbums({ albumIds: r }),
                                            n = { page: a, perPage: i, total: e.albumsData.length },
                                            o = s.map(rB.e);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                                }
                            }),
                            getData: (0, f.L3)(function* (a) {
                                let { id: i, page: l = 0, pageSize: r = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = ev.G.PENDING;
                                        let a = yield s.getEditorialAlbum({ id: i });
                                        (e.title = a.title),
                                            (e.albumsData = (0, f.wg)((null != (o = a.entities) ? o : []).map((e) => ({ id: e })))),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE),
                                            yield t.getAlbums({ page: l, pageSize: r });
                                    } catch (t) {
                                        n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = ev.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, f.wg)([])), (e.errorStatusCode = null);
                            },
                        };
                        return t;
                    }),
                rF = f.gK
                    .compose(
                        f.gK.model('KidsEditorialPlaylistPage', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            title: f.gK.maybeNull(f.gK.string),
                            playlistsData: f.gK.array(f.gK.model({ uid: f.gK.number, kind: f.gK.number })),
                            pagesLoader: (0, lL.I)(tu.$),
                        }),
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
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
                            getPlaylists: (0, f.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState === ev.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, ev.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.playlistsData.slice(t, t + i),
                                            s = yield l.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(e3.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                                }
                            }),
                            getData: (0, f.L3)(function* (a) {
                                let { id: i, page: l = 0, pageSize: r = 20 } = a,
                                    { childrenLandingResource: s, modelActionsLogger: n } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = ev.G.PENDING;
                                        let a = yield s.getEditorialPlaylist({ id: i });
                                        (e.title = a.title),
                                            (e.playlistsData = (0, f.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE),
                                            yield t.getPlaylists({ page: l, pageSize: r });
                                    } catch (t) {
                                        n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = ev.G.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, f.wg)([])), (e.errorStatusCode = null);
                            },
                        };
                        return t;
                    }),
                rx = f.gK.model('KidsPage', { landing: lE, kidsEditorialPlaylistSubpage: rF, kidsEditorialAlbumSubpage: rV }),
                rj = f.gK.model('SpecialHeaderThemeOptions', { backgroundColor: f.gK.maybe(f.gK.string), textColor: f.gK.maybe(f.gK.string) }),
                rW = f.gK.model('SpecialHeader', { title: f.gK.string, url: f.gK.string, lightTheme: rj, darkTheme: rj }),
                rX = f.gK
                    .model('MainPage', { landing: lE, specialHeaderLoadingState: f.gK.enumeration(Object.values(ev.G)), specialHeader: f.gK.maybe(rW) })
                    .actions((e) => ({
                        getSpecialHeader: (0, f.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.specialHeaderLoadingState !== ev.G.PENDING)
                                try {
                                    e.specialHeaderLoadingState = ev.G.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    (e.specialHeader = (0, f.wg)(
                                        ((e) => {
                                            var t, a, i, l, r, s;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (l = e.lightTheme) ? void 0 : l.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (r = e.darkTheme) ? void 0 : r.buttonColor,
                                                        textColor: null == (s = e.darkTheme) ? void 0 : s.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.specialHeaderLoadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.specialHeaderLoadingState = ev.G.IDLE), (e.specialHeader = void 0);
                        },
                    })),
                rY = f.gK.model('NonMusicAlbumsPageItem', { id: f.gK.number, data: f.gK.maybeNull(el.J) }),
                r$ = f.gK
                    .compose(
                        f.gK.model('NonMusicAlbumsPage', {
                            errorStatusCode: f.gK.maybe(f.gK.number),
                            title: f.gK.maybeNull(f.gK.string),
                            albums: f.gK.maybeNull(f.gK.array(rY)),
                            requestsCount: f.gK.maybe(f.gK.number),
                        }),
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST;
                                return e.loadingState === ev.G.REJECT && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getEditorialAlbums: (0, f.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var r;
                                    e.loadingState = ev.G.PENDING;
                                    let t = yield i.getEditorialAlbums({ id: a });
                                    (e.title = t.title),
                                        (null == (r = t.entities) ? void 0 : r.length) && (e.albums = (0, f.wg)(t.entities.map((e) => ({ id: e })))),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        getCategoryAlbums: (0, f.L3)(function* (t) {
                            let { id: a } = t,
                                { nonMusicResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var r;
                                    e.loadingState = ev.G.PENDING;
                                    let t = yield i.getCategoryAlbums({ id: a });
                                    (e.title = t.title),
                                        (null == (r = t.albums) ? void 0 : r.length) && (e.albums = (0, f.wg)(t.albums.map((e) => ({ id: e })))),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        getAlbumsByRange: (0, f.L3)(function* (t, a) {
                            var i, l, r;
                            let { albumResource: s, modelActionsLogger: n } = (0, f._$)(e);
                            if (!(null == (i = e.albums) ? void 0 : i.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.albums.length));
                            let o = [];
                            for (let i = t; i <= a; i++)
                                (null == (l = e.albums[i]) ? void 0 : l.id) && !(null == (r = e.albums[i]) ? void 0 : r.data) && o.push(e.albums[i].id);
                            if (!o.length) return null;
                            try {
                                let t = yield s.getAlbums({ albumIds: o });
                                null == t ||
                                    t.forEach((t) => {
                                        var a;
                                        null == (a = e.albums) ||
                                            a.forEach((a, i) => {
                                                var l;
                                                a.id === t.id && (null == (l = e.albums) ? void 0 : l[i]) && (e.albums[i].data = (0, eK.p)(t));
                                            });
                                    }),
                                    e.requestsCount ? (e.requestsCount = e.requestsCount + 1) : (e.requestsCount = 1);
                            } catch (e) {
                                n.error(e);
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.title = null), (e.albums = null), (e.requestsCount = 0);
                        },
                    })),
                rH = f.gK
                    .compose(
                        f.gK.model('NonMusicCategoryPlaylistsPage', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            title: f.gK.maybeNull(f.gK.string),
                            playlistsData: f.gK.array(f.gK.model({ uid: f.gK.number, kind: f.gK.number })),
                            pagesLoader: (0, lL.I)(tu.$),
                        }),
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === O.X1.NOT_FOUND || e.errorStatusCode === O.X1.BAD_REQUEST,
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
                            getPlaylists: (0, f.L3)(function* (t) {
                                let { page: a = 0, pageSize: i = 20 } = t,
                                    { playlistsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState === ev.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                    e.pagesLoader.setPageState(a, ev.G.PENDING);
                                    try {
                                        let t = a * i,
                                            r = e.playlistsData.slice(t, t + i),
                                            s = yield l.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            n = { page: a, perPage: i, total: e.playlistsData.length },
                                            o = s.playlists.map(e3.j);
                                        e.pagesLoader.setItems(o, { page: a, pager: n });
                                    } catch (t) {
                                        r.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: a }),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                                }
                            }),
                            getData: (0, f.L3)(function* (a) {
                                let { categoryId: i, page: l = 0, pageSize: r = 20 } = a,
                                    { nonMusicResource: s, modelActionsLogger: n } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        var o;
                                        e.loadingState = ev.G.PENDING;
                                        let a = yield s.getPlaylists({ categoryId: i });
                                        (e.title = a.title),
                                            (e.playlistsData = (0, f.wg)((null != (o = a.entities) ? o : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE),
                                            yield t.getPlaylists({ page: l, pageSize: r });
                                    } catch (t) {
                                        n.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            reset() {
                                e.pagesLoader.reset(), (e.loadingState = ev.G.IDLE), (e.title = null), (e.playlistsData = (0, f.wg)([])), (e.errorStatusCode = null);
                            },
                        };
                        return t;
                    }),
                rJ = f.gK.model('NonMusicPage', { landing: lE, albums: r$, categoryPlaylistsSubpage: rH });
            var rq = a(92708);
            let rz = (e) => {
                    var t, a;
                    return (0, f.wg)({ ...(0, e3.j)(e), artists: null != (a = null == e || null == (t = e.substituted?.artists ?? e.artists) ? void 0 : t.map(lO.d)) ? a : [] });
                },
                rQ = (e) => e.map((e) => (0, eT.l)(e.id, e.albumId || void 0));
            var rZ = (function (e) {
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
                r0 = (function (e) {
                    return (e.MAJOR = 'major'), (e.NAME = 'name'), (e.ARTISCS = 'artists'), (e.LINK = 'link'), (e.ALBUM_ID = 'albumId'), (e.TRACK_ID = 'trackId'), e;
                })({});
            let r1 = f.gK
                    .model('EditorFeature', {
                        shouldShowMajor: f.gK.boolean,
                        shouldShowGenre: f.gK.boolean,
                        shouldShowDuplicate: f.gK.boolean,
                        colorMajorMap: f.gK.map(f.gK.string),
                        duplicate: f.gK.map(f.gK.number),
                    })
                    .views((e) => {
                        let t = {
                            getNumberGroupTrackDuplicated(t) {
                                let { experiments: a } = (0, R.M)(e);
                                if (t && a.checkExperiment(k.z.WebEditorsFeatures, 'on')) return e.duplicate.get(String(t.id));
                            },
                            shouldHighlightDublicatedTrack: (a) => !!(e.shouldShowDuplicate && t.getNumberGroupTrackDuplicated(a)),
                            get sheetDataPlaylist() {
                                var a, i;
                                let { location: t, playlist: l } = (0, R.M)(e),
                                    r = 'https://'.concat(t.host, '.').concat(t.tld),
                                    s = {
                                        sheet: 'Playlist',
                                        columns: [
                                            { label: rZ.MAJOR, value: r0.MAJOR },
                                            { label: rZ.NAME, value: r0.NAME },
                                            { label: rZ.ARTISCS, value: r0.ARTISCS },
                                            { label: rZ.LINK, value: r0.LINK },
                                            { label: rZ.ALBUM_ID, value: r0.ALBUM_ID },
                                            { label: rZ.TRACK_ID, value: r0.TRACK_ID },
                                        ],
                                        content: l.items
                                            .filter((e) => e.data)
                                            .map((e) => {
                                                var t, a, i, l, s, n, o, d, g, u, c, m, p;
                                                let { href: y } = (0, T.getLinkAttributesBase)(null != (d = null == (t = e.data) ? void 0 : t.url) ? d : '', {
                                                        options: { host: r },
                                                    }),
                                                    E = (null == (a = e.data) ? void 0 : a.url) ? y : '';
                                                return {
                                                    major: null != (g = null == (l = e.data) || null == (i = l.major) ? void 0 : i.name) ? g : '',
                                                    name: null != (u = null == (s = e.data) ? void 0 : s.title) ? u : '',
                                                    artists: null != (c = null == (n = e.data) ? void 0 : n.artists.map((e) => e.name).join(', ')) ? c : '',
                                                    link: E,
                                                    albumId: null != (m = e.albumId) ? m : '',
                                                    trackId: null != (p = null == (o = e.data) ? void 0 : o.id) ? p : '',
                                                };
                                            }),
                                    };
                                return {
                                    data: s,
                                    settings: {
                                        fileName:
                                            (null == (a = l.meta) ? void 0 : a.uid) && (null == (i = l.meta) ? void 0 : i.kind)
                                                ? '%'.concat(l.meta.uid, '%_%').concat(l.meta.kind, '%_to_text')
                                                : 'to_text',
                                    },
                                };
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        exportToExcel: (0, f.L3)(function* () {
                            let { modelActionsLogger: t } = (0, f._$)(e);
                            try {
                                let t = yield Promise.all([a.e(714), a.e(8473), a.e(5434)]).then(a.t.bind(a, 33806, 23)),
                                    { data: i, settings: l } = e.sheetDataPlaylist;
                                if (0 === i.content.length) return aV.F.ERROR;
                                return (
                                    yield new Promise((e) => {
                                        t.default([i], l, () => e());
                                    }),
                                    aV.F.OK
                                );
                            } catch (e) {
                                return t.error(e), aV.F.ERROR;
                            }
                        }),
                        getAllPlaylistItems: (0, f.L3)(function* (t) {
                            let { batchSize: a } = t,
                                { playlist: i } = (0, R.M)(e),
                                l = i.items.length - 1;
                            for (let e = 0; e < l; e += a) yield i.getTracksByRange({ startIndex: e, endIndex: Math.min(e + a, l) });
                        }),
                        getColorForMajor(t) {
                            let a = e.colorMajorMap.get(t);
                            if (a) return a;
                            let i = (function (e) {
                                    let t = 0;
                                    for (let a = 0; a < e.length; a++) t = e.charCodeAt(a) + ((t << 2) - t);
                                    return Math.abs(t % 360);
                                })(t),
                                l = 'hsl('.concat(i, ', 50%, 50%)');
                            return e.colorMajorMap.set(t, l), l;
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
                            (e.shouldShowDuplicate = !1),
                                (e.shouldShowGenre = !1),
                                (e.shouldShowMajor = !1),
                                (e.colorMajorMap = (0, f.wg)({})),
                                (e.duplicate = (0, f.wg)({}));
                        },
                    })),
                r3 = f.gK.model('PlaylistItem', {
                    id: f.gK.union(f.gK.string, f.gK.number),
                    albumId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                    key: f.gK.string,
                    data: f.gK.maybeNull(U.v),
                    loadingState: f.gK.enumeration(Object.values(ev.G)),
                }),
                r2 = (e) => {
                    var t, a;
                    let i = (null == (t = e.tracks) ? void 0 : t.length)
                        ? null == (a = e.tracks)
                            ? void 0
                            : a.map((e, t) =>
                                  ((e, t) => {
                                      let [a, i] = e.split(':');
                                      return (0, f.wg)({ id: a || '', albumId: i || '', key: ''.concat(a, '-').concat(t), data: null, loadingState: ev.G.IDLE });
                                  })(e, t),
                              )
                        : [];
                    return { id: e.id, name: e.name, tracks: (0, f.wg)(i) };
                },
                r6 = f.gK.model('PlaylistFiltersItem', { id: f.gK.string, name: f.gK.string, tracks: f.gK.array(r3) }),
                r4 = f.gK
                    .compose(
                        f.gK.model('PlaylistPageFilters', {
                            items: f.gK.maybeNull(f.gK.array(r6)),
                            activeFilter: f.gK.maybe(f.gK.string),
                            activeFilterName: f.gK.maybeNull(f.gK.string),
                        }),
                        V.X,
                        D.p,
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
                            getFilters: (0, f.L3)(function* () {
                                var a, i;
                                let { filtersResource: l, modelActionsLogger: r } = (0, f._$)(e),
                                    { sonataState: s, playlist: n } = (0, R.M)(e);
                                if (e.isLoading || !(null == (a = n.items) ? void 0 : a.length)) return;
                                let o = n.items.map((e) => String((0, az.V)(e.id, e.albumId))) || [];
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield l.getTracksFilters({ trackIds: o });
                                    (e.items = (0, f.wg)(
                                        ((e) => {
                                            let t = e.filters.map(r2);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === iF.Q.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a].concat(i.slice(0, 7));
                                        })(a),
                                    )),
                                        t.setActiveFilter(s.playlistFilter),
                                        t.getFilterName(s.playlistFilter || iF.Q.ALL);
                                    let r = null == (i = e.items) ? void 0 : i.find((t) => t.id === e.activeFilter);
                                    r && (n.setItems(r.tracks), s.setUnloadedEntitiesData(rQ(n.items))), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    r.error(t), (e.loadingState = ev.G.REJECT);
                                }
                            }),
                            getFilterName: (0, f.L3)(function* (t) {
                                let { filtersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                try {
                                    e.activeFilterName = (yield a.getFilterName({ filterId: t })).name;
                                } catch (e) {
                                    i.error(e);
                                }
                            }),
                            handleFilterClick(a) {
                                if (!(0, f._n)(e)) return;
                                let { sonataState: i, playlist: l } = (0, R.M)(e);
                                t.setActiveFilter(a.id),
                                    t.getFilterName(a.id),
                                    l.setItems(e.activeFilter ? a.tracks : l.initialItems),
                                    i.setUnloadedEntitiesData(rQ(l.items));
                            },
                            setActiveFilter(t) {
                                t !== iF.Q.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                            },
                            reset() {
                                e.destroyItems([e.items]), (e.loadingState = ev.G.IDLE), (e.activeFilter = void 0), (e.activeFilterName = null);
                            },
                        };
                        return t;
                    }),
                r5 = f.gK
                    .compose(
                        f.gK.model('PlaylistPageSearch', {
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            text: f.gK.string,
                            playlistTrackIds: f.gK.maybeNull(f.gK.array(f.gK.string)),
                            suggestedTrackIds: f.gK.maybeNull(f.gK.array(f.gK.string)),
                            additionTrackInProggress: f.gK.maybeNull(f.gK.string),
                            tracks: f.gK.maybeNull(f.gK.array(U.v)),
                            isFocused: f.gK.optional(f.gK.boolean, !1),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
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
                            getTracksMeta: (0, f.L3)(function* () {
                                let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                    i = [...(e.playlistTrackIds || [])].concat(e.suggestedTrackIds || []);
                                try {
                                    let a = yield t.getTracksMeta({ trackIds: i, removeDuplicates: !0, withProgress: !0 });
                                    (e.tracks = (0, f.wg)(null == a ? void 0 : a.map((e) => (0, eR.v)(e)))),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (e) {
                                    a.error(e);
                                }
                                return null;
                            }),
                            getTracks: (0, f.L3)(function* (a) {
                                let { uid: i, kind: l } = a,
                                    { searchPlaylistResource: r, modelActionsLogger: s } = (0, f._$)(e);
                                if (e.loadingState === ev.G.PENDING || !e.hasText || !(0, f._n)(e)) return;
                                let { playlist: n } = (0, R.M)(e);
                                try {
                                    var o, d;
                                    let a;
                                    e.loadingState = ev.G.PENDING;
                                    let { playlistTrackIds: s = [], suggestedTrackIds: g = [] } = yield r.getTrackIds({ uid: i, kind: l, part: e.text }),
                                        u =
                                            ((a = n.items),
                                            s.map((e) => {
                                                let t = a.find((t) => String(t.id) === e);
                                                return (null == t ? void 0 : t.albumId) ? ''.concat(e, ':').concat(t.albumId) : e;
                                            }));
                                    (e.playlistTrackIds = (0, f.wg)(u)),
                                        (e.suggestedTrackIds = (0, f.wg)(g)),
                                        ((null == (o = e.playlistTrackIds) ? void 0 : o.length) || 0) + ((null == (d = e.suggestedTrackIds) ? void 0 : d.length) || 0) > 0
                                            ? t.getTracksMeta()
                                            : (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    s.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                            }),
                            setText(t) {
                                e.text = t;
                            },
                            setIdleState() {
                                e.loadingState = ev.G.IDLE;
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
                                    null == (t = e.playlistTrackIds) || t.unshift(e.additionTrackInProggress),
                                        (e.suggestedTrackIds = (0, f.wg)(null == (a = e.suggestedTrackIds) ? void 0 : a.filter((t) => t !== e.additionTrackInProggress))),
                                        (e.additionTrackInProggress = null);
                                }
                            },
                            resetAdditionTrackAnimation() {
                                e.additionTrackInProggress = null;
                            },
                            reset() {
                                (e.playlistTrackIds = null),
                                    (e.suggestedTrackIds = null),
                                    (e.additionTrackInProggress = null),
                                    (e.tracks = null),
                                    (e.loadingState = ev.G.IDLE),
                                    (e.isFocused = !1);
                            },
                        };
                        return t;
                    }),
                r9 = f.gK
                    .compose(
                        f.gK.model('PlaylistPage', {
                            uuid: f.gK.maybeNull(f.gK.string),
                            meta: f.gK.maybeNull(rd),
                            items: f.gK.array(r3),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            similarPlaylists: f.gK.array(eo.I),
                            initialItems: f.gK.array(r3),
                            shouldShowTrailerOnboarding: f.gK.maybeNull(f.gK.boolean),
                            editorFeature: r1,
                            search: r5,
                            filters: r4,
                            similarEntities: eS,
                        }),
                        D.p,
                        V.X,
                    )
                    .views((e) => {
                        let t = {
                            getUrl(t) {
                                if (!e.uuid) return '';
                                let { href: a } = (0, eI.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid }, query: t });
                                return a;
                            },
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isDisabled() {
                                var a;
                                return e.isResolved && (0 === e.items.length || !(null == (a = e.meta) ? void 0 : a.isAvailable));
                            },
                            get isNotFound() {
                                return e.isRejected && e.errorStatusCode === O.X1.NOT_FOUND;
                            },
                            get hasSimilarPlaylists() {
                                return t.isLoading || e.similarPlaylists.length > 0;
                            },
                            get isEmptyPlaylist() {
                                return e.isResolved && 0 === e.items.length;
                            },
                            get isSimilarEntitiesEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get hasSimilarEntities() {
                                var i;
                                return !!(
                                    t.isSimilarEntitiesEnabled &&
                                    e.similarEntities.isLoaded &&
                                    (null == (i = e.similarEntities.data) ? void 0 : i.items) &&
                                    e.similarEntities.data.items.length > 0
                                );
                            },
                            get contextMeta() {
                                var l, r, s, n, o, d, g, u, c, m;
                                return {
                                    isAvailable: null == (l = e.meta) ? void 0 : l.isAvailable,
                                    id: e.meta.id,
                                    uid: null == (r = e.meta) ? void 0 : r.uid,
                                    uuid: e.meta.uuid,
                                    kind: null == (s = e.meta) ? void 0 : s.kind,
                                    title: null == (n = e.meta) ? void 0 : n.title,
                                    coverUri: null == (o = e.meta) ? void 0 : o.coverUri,
                                    likesCount: null == (d = e.meta) ? void 0 : d.likesCount,
                                    averageColor: null == (g = e.meta) ? void 0 : g.averageColor,
                                    owner: null == (u = e.meta) ? void 0 : u.owner,
                                    description: null == (c = e.meta) ? void 0 : c.description,
                                    modified: null == (m = e.meta) ? void 0 : m.modified,
                                };
                            },
                            get isDragAndDropEnabled() {
                                var p;
                                if (!(0, f._n)(e)) return !1;
                                let { ugcUploadCenter: t } = (0, R.M)(e);
                                return !!(
                                    (null == (p = e.meta) ? void 0 : p.canUserChange) &&
                                    (e.items.length > 1 || t.getUploadingTracksByPlaylistKind(e.meta.kind).length > 0)
                                );
                            },
                            get itemsKeys() {
                                return e.items.map((e) => e.key);
                            },
                            get isFavouritePlaylist() {
                                var y;
                                return (null == (y = e.meta) ? void 0 : y.kind) === ix.j.LIKE;
                            },
                            get enableVariousAutoFlow() {
                                return !!e.filters.activeFilter;
                            },
                            get trackIds() {
                                return e.initialItems.map((e) => String((0, az.V)(e.id, e.albumId)));
                            },
                            get isRewind2024Playlist() {
                                var E;
                                return (null == (E = e.meta) ? void 0 : E.generatedPlaylistType) === 'rewind2024';
                            },
                            get areAllTracksUploaded() {
                                return e.items.every((e) => e.loadingState === ev.G.RESOLVE);
                            },
                            get shouldShowEmptyBlock() {
                                var S, K;
                                if (!(0, f._n)(e)) return !1;
                                let { ugcUploadCenter: a } = (0, R.M)(e),
                                    i = !!(null == (S = e.meta) ? void 0 : S.isOwnPlaylist),
                                    l = !!((null == (K = e.meta) ? void 0 : K.kind) && a.getUploadingTracksByPlaylistKind(e.meta.kind).length),
                                    r = !!e.search.hasText;
                                return t.isEmptyPlaylist && i && !l && !r;
                            },
                            get virtualListItemsCount() {
                                var b, v;
                                if (e.search.hasText) return 0;
                                return null != (v = null == (b = e.items) ? void 0 : b.length) ? v : 0;
                            },
                            get isFiltersAvailable() {
                                var I;
                                return !!(t.isFavouritePlaylist && (null == (I = e.meta) ? void 0 : I.isOwnPlaylist));
                            },
                            get itemsForCopy() {
                                var L;
                                return null == (L = e.items) ? void 0 : L.map((e) => ({ id: String(e.id), albumId: e.albumId ? Number(e.albumId) : void 0 }));
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getTracksByRange: (0, f.L3)(function* (t) {
                                var a, i;
                                let { startIndex: l, endIndex: r } = t,
                                    { tracksResource: s, modelActionsLogger: n } = (0, f._$)(e);
                                if (!(null == (a = e.meta) ? void 0 : a.uid) || !(null == (i = e.meta) ? void 0 : i.kind)) return null;
                                (l = Math.max(0, l)), (r = Math.min(r, e.items.length));
                                let o = ((e, t) => {
                                    let { startIndex: a, endIndex: i } = t,
                                        l = [];
                                    for (let t = a; t <= i; t++) {
                                        var r, s;
                                        ((null == (r = e[t]) ? void 0 : r.loadingState) === ev.G.IDLE ||
                                            (null == (s = e[t]) ? void 0 : s.loadingState) === ev.G.REJECT) &&
                                            l.push(t);
                                    }
                                    return l;
                                })(e.items, { startIndex: l, endIndex: r });
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
                                        a && (a.loadingState = ev.G.PENDING);
                                    });
                                    let i = yield s.getTracksMeta({ trackIds: a, withProgress: !0 });
                                    o.forEach((t, a) => {
                                        let l = null == i ? void 0 : i[a];
                                        if (e.items[t] && l) {
                                            var r, s;
                                            e.items[t] = {
                                                id: l.id,
                                                albumId: (null == (s = l.albums) || null == (r = s[0]) ? void 0 : r.id) || null,
                                                key: ''.concat(l.id, '-').concat(t),
                                                data: (0, eR.v)(l),
                                                loadingState: ev.G.RESOLVE,
                                            };
                                        }
                                    });
                                } catch (t) {
                                    n.error(t),
                                        o.forEach((t) => {
                                            let a = e.items[t];
                                            a && (a.loadingState = ev.G.REJECT);
                                        });
                                }
                                return null;
                            }),
                            updateData: (0, f.L3)(function* (a) {
                                var i, l;
                                if ((null == a ? void 0 : a.error) === 'not-found') return (e.errorStatusCode = O.X1.NOT_FOUND), (e.loadingState = ev.G.REJECT), null;
                                let { sonataState: r, playlist: s, experiments: n, user: o } = (0, R.M)(e);
                                return (
                                    (e.similarPlaylists = (0, f.wg)(null == (i = a.similarPlaylists) ? void 0 : i.map(rz))),
                                    (e.meta = (0, ra.Z)(a)),
                                    (null == (l = e.meta) ? void 0 : l.isOwnFavouritePlaylist) && (e.meta.visibility = o.settings.userMusicVisibility),
                                    (e.items = (0, f.wg)(
                                        a.tracks.map((e, t) => ({
                                            id: String(e.id),
                                            albumId: e.albumId || null,
                                            key: ''.concat(e.id, '-').concat(t),
                                            loadingState: ev.G.IDLE,
                                        })),
                                    )),
                                    (e.initialItems = (0, rq.HO)(e.items)),
                                    r.setUnloadedEntitiesData(rQ(e.items)),
                                    (null == n ? void 0 : n.checkExperiment(k.z.WebEditorsFeatures, 'on')) && s.editorFeature.getDuplicates(e.items),
                                    yield t.getTracksByRange({ startIndex: 0, endIndex: 10 })
                                );
                            }),
                            getPlaylistByUserIdAndKind: (0, f.L3)(function* (a) {
                                let { userId: i, playlistKind: l, resumeStream: r = !1, trackMetaType: s, preloadedPlaylist: n } = a,
                                    { usersResource: o, modelActionsLogger: d } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let a = n;
                                        if (
                                            (a || (a = yield o.getPlaylistWithTracksIds({ userId: i, playlistKind: l, resumeStream: r, trackMetaType: s })),
                                            (e.uuid = null == a ? void 0 : a.playlistUuid),
                                            'string' != typeof a.playlistUuid)
                                        ) {
                                            (e.errorStatusCode = O.X1.NOT_FOUND), (e.loadingState = ev.G.REJECT);
                                            return;
                                        }
                                        yield t.updateData(a), (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        d.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            getPlaylistByUuid: (0, f.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: l = !1, resumeStream: r = !1, preloadedPlaylist: s } = a,
                                    { playlistResource: n, modelActionsLogger: o } = (0, f._$)(e);
                                if (((e.uuid = i), e.loadingState !== ev.G.PENDING))
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let a = s;
                                        a || (a = yield n.getPlaylist({ playlistUuid: i, resumeStream: r, richTracks: l })),
                                            yield t.updateData(a),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        o.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            getSimilarEntities: (0, f.L3)(function* (t) {
                                let { playlistResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (!e.similarEntities.isLoading)
                                    try {
                                        e.similarEntities.loadingState = ee.PENDING;
                                        let i = yield a.getSimilarEntities(t);
                                        (e.similarEntities.data = Z(i)), (e.similarEntities.loadingState = ee.RESOLVE);
                                    } catch (t) {
                                        i.error(t), (e.similarEntities.loadingState = ee.REJECT);
                                    }
                            }),
                            updatePlaylistTrackByUuid: (0, f.L3)(function* (a) {
                                let { playlistUuid: i, richTracks: l = !1, resumeStream: r = !1 } = a,
                                    { playlistResource: s, modelActionsLogger: n } = (0, f._$)(e);
                                e.uuid = i;
                                try {
                                    let a = yield s.getPlaylist({ playlistUuid: i, resumeStream: r, richTracks: l }),
                                        n = [];
                                    if (
                                        ((e.items = (0, f.wg)(
                                            a.tracks.map((t, a) => {
                                                var i, l;
                                                let r = String(t.id),
                                                    s = t.albumId || null;
                                                return r === (null == (i = e.items[a]) ? void 0 : i.id) && s === (null == (l = e.items[a]) ? void 0 : l.albumId)
                                                    ? e.items[a]
                                                    : (n.push(a),
                                                      { id: String(t.id), albumId: t.albumId || null, key: ''.concat(t.id, '-').concat(a), loadingState: ev.G.IDLE });
                                            }),
                                        )),
                                        e.meta && ((e.meta.modified = a.modified), (e.meta.revision = a.revision), n.length))
                                    ) {
                                        let e = Math.min(...n),
                                            a = Math.max(...n);
                                        t.getTracksByRange({ startIndex: e, endIndex: a });
                                    }
                                    if ((e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE), (0, f._n)(e))) {
                                        let { sonataState: t } = (0, R.M)(e);
                                        t.setUnloadedEntitiesData(rQ(e.items));
                                    }
                                } catch (t) {
                                    n.error(t),
                                        t instanceof O.GX &&
                                            (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = O.X1.NOT_FOUND),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                            }),
                            moveTrack(t, a) {
                                let i = (0, rq.HO)(e.items[t]);
                                if (
                                    !(t < 0) &&
                                    !(a < 0) &&
                                    !(t >= e.items.length) &&
                                    !(a >= e.items.length) &&
                                    i &&
                                    (e.items.splice(t, 1), e.items.splice(a, 0, i), (0, f._n)(e))
                                ) {
                                    let { sonataState: t } = (0, R.M)(e);
                                    t.setUnloadedEntitiesData(rQ(e.items));
                                }
                            },
                            removeTracksFromItems(t, a) {
                                if ((e.items.splice(t, a), (0, f._n)(e))) {
                                    let { sonataState: t } = (0, R.M)(e);
                                    t.setUnloadedEntitiesData(rQ(e.items));
                                }
                            },
                            setItems(t) {
                                e.items = (0, f.wg)((0, rq.HO)(t));
                            },
                            setShouldShowTrailerOnboarding(t) {
                                e.shouldShowTrailerOnboarding = t;
                            },
                            reset() {
                                let { sonataState: t } = (0, R.M)(e);
                                t.resetUnloadedEntitiesData(),
                                    (e.uuid = null),
                                    (e.loadingState = ev.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.shouldShowTrailerOnboarding = null),
                                    (e.similarEntities.data = void 0),
                                    (e.similarEntities.loadingState = ee.IDLE),
                                    e.search.setText(''),
                                    e.search.reset(),
                                    e.filters.reset(),
                                    e.destroyItems([e.meta, e.items, e.initialItems, e.similarPlaylists]);
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
            var r7 = a(1053),
                r8 = a(32919),
                se = a(80846);
            let st = f.gK.model('SearchFilter', { id: f.gK.string, displayName: f.gK.string });
            var sa = a(69319),
                si = a(57941);
            let sl = f.gK.model('Ugc'),
                sr = f.gK.compose(U.v, sl).named('UgcTrack'),
                ss = f.gK.model('SearchAlbum', { type: f.gK.literal(sa.n.ALBUM), data: el.J }),
                sn = f.gK.model('SearchPlaylist', { type: f.gK.literal(sa.n.PLAYLIST), data: eo.I }),
                so = f.gK.model('SearchArtist', { type: f.gK.literal(sa.n.ARTIST), data: es.P }),
                sd = f.gK.model('SearchUgcTrack', { type: f.gK.literal(sa.n.UGC_TRACK), data: sr }),
                sg = f.gK.model('SearchTrack', { type: f.gK.literal(sa.n.TRACK), data: U.v }),
                su = f.gK.model('SearchVibe', { type: f.gK.literal(sa.n.WAVE), data: eg.G }),
                sc = f.gK.model('SearchPodcast', { type: f.gK.literal(sa.n.PODCAST), data: el.J }),
                sm = f.gK.model('SearchPodcastEpisode', { type: f.gK.literal(sa.n.PODCAST_EPISODE), data: U.v }),
                sp = f.gK.model('SearchClip', { type: f.gK.literal(sa.n.CLIP), data: t8 }),
                sy = f.gK.model('SearchConcert', { type: f.gK.literal(sa.n.CONCERT), data: tQ.a }),
                sE = f.gK.union(ss, sn, so, sg, sd, su, sc, sm, sp, sy),
                sS = f.gK.model('SearchBestVibe', { type: f.gK.literal(si.r.WAVE), data: eg.G }),
                sK = f.gK.model('SearchBestPlaylist', { type: f.gK.literal(si.r.PLAYLIST), data: eo.I }),
                sb = f.gK.model('SearchBestArtist', { type: f.gK.literal(si.r.ARTIST), data: es.P }),
                sv = f.gK.model('SearchBestPresave', { type: f.gK.literal(si.r.UPCOMING), data: tr }),
                sI = f.gK.model('SearchBestAlbum', { type: f.gK.literal(si.r.ALBUM), data: el.J }),
                sL = f.gK.model('SearchBestRecentRelease', { type: f.gK.literal(si.r.RECENT_RELEASE), data: el.J }),
                sT = f.gK.model('SearchBestConcert', { type: f.gK.literal(si.r.CONCERT), data: tQ.a }),
                sN = f.gK.model('SearchBestTrack', { type: f.gK.literal(si.r.TRACK), data: U.v }),
                sA = f.gK.model('SearchBestPodcast', { type: f.gK.literal(si.r.PODCAST), data: el.J }),
                sh = f.gK.model('SearchBestPodcastEpisode', { type: f.gK.literal(si.r.PODCAST_EPISODE), data: U.v }),
                sC = f.gK.model('SearchBestOverview', { type: f.gK.literal(si.r.OVERVIEW), data: a4 }),
                sf = f.gK.model('SearchBestNonMusic', { type: f.gK.literal(si.r.NON_MUSIC), data: el.J }),
                sR = f.gK.model('SearchBestClip', { type: f.gK.literal(si.r.CLIP), data: t8 }),
                sk = f.gK.model('SearchBestBookChapter', { type: f.gK.literal(si.r.BOOK_CHAPTER), data: U.v }),
                sD = f.gK.union(sI, sL, sS, sb, sT, sN, sA, sh, sC, sf, sv, sK, sR, sk),
                s_ = [sa.n.ARTIST, sa.n.ALBUM, sa.n.TRACK, sa.n.PLAYLIST, sa.n.WAVE, sa.n.PODCAST, sa.n.PODCAST_EPISODE],
                sP = [sa.n.ALBUM, sa.n.ARTIST, sa.n.PLAYLIST, sa.n.TRACK, sa.n.UGC_TRACK, sa.n.WAVE, sa.n.PODCAST, sa.n.PODCAST_EPISODE, sa.n.CLIP, sa.n.CONCERT],
                sO = (e) => {
                    var t, a;
                    return (0, f.wg)({ ...(0, eR.v)(e), artists: null != (a = null == e || null == (t = e.substituted?.artists ?? e.artists) ? void 0 : t.map(lO.d)) ? a : [] });
                };
            var sw = a(20982);
            let sG = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, f.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, sw.K)(a.agent),
                    });
                },
                sM = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case sa.n.UGC_TRACK:
                            return { type: t, data: sO(e.track) };
                        case sa.n.TRACK:
                            return { type: t, data: (0, eR.v)(e.track) };
                        case sa.n.ARTIST:
                            return { type: t, data: (0, lO.d)(e.artist) };
                        case sa.n.PLAYLIST:
                            return { type: t, data: rz({ ...e.playlist, artists: [] }) };
                        case sa.n.ALBUM:
                            return { type: t, data: (0, eK.p)(e.album) };
                        case sa.n.WAVE:
                            return { type: t, data: sG(e) };
                        case sa.n.PODCAST:
                            return { type: t, data: (0, eK.p)(e.podcast) };
                        case sa.n.PODCAST_EPISODE:
                            return { type: t, data: (0, eR.v)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            (n || (n = {})).QUERY_TO_VIBE = 'q2v_wave';
            let sU = f.gK.compose(f.gK.model('SearchHistoryPage', { items: f.gK.array(sE) }), D.p, V.X).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                sB = f.gK
                    .model('SearchHistory', { loadingState: f.gK.enumeration(Object.values(ev.G)), shouldUpdateHistory: f.gK.optional(f.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === ev.G.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, f.L3)(function* () {
                            if (!(0, f._n)(e)) return;
                            let { user: t } = (0, R.M)(e),
                                { usersResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING && t.account.data.uid)
                                try {
                                    (e.loadingState = ev.G.PENDING), yield a.clearSearchHistory({ userId: t.account.data.uid }), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            e.loadingState = ev.G.IDLE;
                        },
                    })),
                sV = f.gK
                    .compose(
                        f.gK.model('SearchPage', {
                            searchCorrectedText: f.gK.maybeNull(f.gK.string),
                            searchRequestId: f.gK.optional(f.gK.string, ''),
                            bestResults: f.gK.array(sD),
                            historyPage: sU,
                            mixes: r8.Y,
                            landing: lE,
                            history: sB,
                            filters: f.gK.maybeNull(f.gK.array(st)),
                            pagesLoader: (0, lL.I)(sE, { useAppendMode: !0 }),
                            q2vResults: f.gK.array(eg.G),
                        }),
                        D.p,
                        V.X,
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
                    .actions((e) => ({
                        getSearchResults: (0, f.L3)(function* (t) {
                            let { text: a, filter: i, page: l = 0 } = t;
                            if (l > 0 && !e.pagesLoader.isPageNeedToLoad(l)) return;
                            let { searchResource: r } = (0, f._$)(e),
                                {
                                    settings: { isMobile: s },
                                    experiments: o,
                                    concerts: d,
                                } = (0, R.M)(e),
                                g = o.checkExperiment(k.z.WebNextSearchConcerts, 'on'),
                                u = i === r7.$.TOP,
                                c = d.concertsLocationForRequest;
                            try {
                                var m, p;
                                (e.loadingState = ev.G.PENDING), e.pagesLoader.setPageState(l, ev.G.PENDING);
                                let t = yield r.getInstantMixedSearch({
                                    text: a,
                                    type: ((e, t) => {
                                        let { withClips: a, withConcerts: i } = t,
                                            l = [...sP];
                                        return (
                                            e === r7.$.TOP && (l = l.filter((e) => e !== sa.n.UGC_TRACK)),
                                            a || (l = l.filter((e) => e !== sa.n.CLIP)),
                                            i || (l = l.filter((e) => e !== sa.n.CONCERT)),
                                            l
                                        );
                                    })(i, { withClips: !s, withConcerts: g }),
                                    filter: u ? void 0 : i,
                                    withLikesCount: !0,
                                    page: l,
                                    pageSize: se.k,
                                    withBestResults: u,
                                    locations: c,
                                });
                                t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                let o = [];
                                t.results &&
                                    t.results.length > 0 &&
                                    ((o = t.results.map((e) => {
                                        switch (e.type) {
                                            case sa.n.ALBUM:
                                                return { type: sa.n.ALBUM, data: (0, eK.p)(e.album) };
                                            case sa.n.ARTIST:
                                                return { type: sa.n.ARTIST, data: (0, lO.d)(e.artist) };
                                            case sa.n.PLAYLIST:
                                                return { type: sa.n.PLAYLIST, data: rz({ ...e.playlist, artists: [] }) };
                                            case sa.n.UGC_TRACK:
                                                return { type: sa.n.UGC_TRACK, data: sO(e.track) };
                                            case sa.n.TRACK:
                                                return { type: sa.n.TRACK, data: (0, eR.v)(e.track) };
                                            case sa.n.WAVE:
                                                return { type: sa.n.WAVE, data: sG(e) };
                                            case sa.n.PODCAST:
                                                return { type: sa.n.PODCAST, data: (0, eK.p)(e.podcast) };
                                            case sa.n.CLIP:
                                                return { type: sa.n.CLIP, data: lq(e.clip) };
                                            case sa.n.PODCAST_EPISODE:
                                                return { type: sa.n.PODCAST_EPISODE, data: (0, eR.v)(e.podcast_episode) };
                                            case sa.n.CONCERT:
                                                return { type: sa.n.CONCERT, data: (0, eW.h)(e.concert.concert, e.concert.minPrice) };
                                        }
                                    })),
                                    (e.searchRequestId = t.searchRequestId)),
                                    t.bestResults &&
                                        t.bestResults.length > 0 &&
                                        (e.bestResults = (0, f.wg)(
                                            t.bestResults
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case si.r.ALBUM:
                                                            return {
                                                                type: si.r.ALBUM,
                                                                data: (0, X.s)({
                                                                    album: e.best_result_album.album,
                                                                    artists: e.best_result_album.artists,
                                                                    trailer: e.best_result_album.trailer,
                                                                }),
                                                            };
                                                        case si.r.PLAYLIST:
                                                            return {
                                                                type: si.r.PLAYLIST,
                                                                data: (0, J.b)({
                                                                    playlist: e.best_result_playlist.playlist,
                                                                    likesCount: e.best_result_playlist.likesCount,
                                                                    tracksCount: e.best_result_playlist.trackCount,
                                                                    trailer: e.best_result_playlist.trailer,
                                                                }),
                                                            };
                                                        case si.r.RECENT_RELEASE:
                                                            return {
                                                                type: si.r.RECENT_RELEASE,
                                                                data: (0, X.s)({
                                                                    album: e.best_result_recent_release.album,
                                                                    artists: e.best_result_recent_release.artists,
                                                                    trailer: e.best_result_recent_release.trailer,
                                                                }),
                                                            };
                                                        case si.r.WAVE:
                                                            return { type: si.r.WAVE, data: (0, th.e)(e.best_result_wave) };
                                                        case si.r.ARTIST:
                                                            return {
                                                                type: si.r.ARTIST,
                                                                data: (0, $.a)({
                                                                    artist: e.best_result_artist.artist,
                                                                    trailer: e.best_result_artist.trailer,
                                                                    likesCount: e.best_result_artist.likesCount,
                                                                }),
                                                            };
                                                        case si.r.UPCOMING:
                                                            return { type: si.r.UPCOMING, data: eq(e.best_result_upcoming) };
                                                        case si.r.CONCERT:
                                                            return { type: si.r.CONCERT, data: lR(e.best_result_concert) };
                                                        case si.r.PODCAST:
                                                            return {
                                                                type: si.r.PODCAST,
                                                                data: (0, X.s)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                            };
                                                        case si.r.PODCAST_EPISODE:
                                                            return { type: si.r.PODCAST_EPISODE, data: (0, eR.v)(e.best_result_podcast_episode) };
                                                        case si.r.OVERVIEW:
                                                            return { type: si.r.OVERVIEW, data: td(e.best_result_overview) };
                                                        case si.r.NON_MUSIC:
                                                            return {
                                                                type: si.r.NON_MUSIC,
                                                                data: (0, X.s)({
                                                                    album: e.best_result_non_music.album,
                                                                    artists: e.best_result_non_music.artists,
                                                                    releaseYear: e.best_result_non_music.releaseYear,
                                                                }),
                                                            };
                                                        case si.r.TRACK:
                                                            return { type: si.r.TRACK, data: (0, eR.v)(e.best_result_track) };
                                                        case si.r.CLIP:
                                                            return { type: si.r.CLIP, data: lq(e.best_result_clip) };
                                                        case si.r.BOOK_CHAPTER:
                                                            return { type: si.r.BOOK_CHAPTER, data: (0, eR.v)(e.best_result_book_chapter) };
                                                    }
                                                })
                                                .filter((e) => e),
                                        )),
                                    (e.q2vResults = (0, f.wg)(
                                        (null != (m = t.q2vResults) ? m : []).map((e) => {
                                            let { wave: t, agent: a } = e[n.QUERY_TO_VIBE];
                                            return (0, z.l)(t, a);
                                        }),
                                    )),
                                    t.filters && t.filters.length > 0 && (e.filters = (0, f.wg)(t.filters)),
                                    e.pagesLoader.setItems(o, {
                                        page: l,
                                        pager: { page: l, perPage: null != (p = t.perPage) ? p : se.k, total: 0, lastPage: !!u || t.lastPage },
                                    }),
                                    (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                (e.loadingState = ev.G.REJECT), e.pagesLoader.setItems(null, { responseStatus: aV.F.ERROR, page: l });
                            }
                        }),
                        getHistory: (0, f.L3)(function* (t) {
                            let { userId: a } = t;
                            if (e.historyPage.loadingState === ev.G.PENDING) return;
                            let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            try {
                                e.historyPage.loadingState = ev.G.PENDING;
                                let t = yield i.getSearchHistory({ userId: a, supportedTypes: s_ });
                                (e.historyPage.items = (0, f.wg)(t.map(sM).filter((e) => e))), (e.historyPage.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                l.error(t), (e.historyPage.loadingState = ev.G.REJECT);
                            }
                        }),
                        clearHistory: (0, f.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    (e.loadingState = ev.G.PENDING), yield i.clearSearchHistory({ userId: a }), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        resetHistoryItems() {
                            e.historyPage.reset();
                        },
                        resetHistoryStateRequest() {
                            (e.historyPage.loadingState = ev.G.IDLE), e.historyPage.reset();
                        },
                        resetResults() {
                            e.destroyItems([e.bestResults, e.q2vResults]), e.pagesLoader.reset();
                        },
                        resetSearchCorrectedText() {
                            e.searchCorrectedText = null;
                        },
                        reset() {
                            (e.searchCorrectedText = null),
                                (e.loadingState = ev.G.IDLE),
                                (e.filters = null),
                                e.destroyItems([e.bestResults, e.q2vResults]),
                                e.pagesLoader.reset();
                        },
                        sendFeedback: (0, f.L3)(function* (t) {
                            let { searchResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            try {
                                yield a.sendFeedback(t);
                            } catch (e) {
                                i.error(e);
                            }
                        }),
                    })),
                sF = f.gK
                    .compose(
                        f.gK.model({
                            meta: f.gK.maybeNull(U.v),
                            similarTracks: f.gK.maybeNull(f.gK.array(U.v)),
                            prevEntityId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            trackId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            albumId: f.gK.maybeNull(f.gK.number),
                            isTrackPage: f.gK.optional(f.gK.boolean, !1),
                            withAnimation: f.gK.boolean,
                            shouldSendEventOnPlusButtonShowed: f.gK.boolean,
                        }),
                        rw.q,
                        V.X,
                    )
                    .volatile(() => ({ lastTrackInfoTrack: void 0, lastTrackInfoSimilarTracks: void 0 }))
                    .views((e) => ({
                        get shouldReloadMeta() {
                            var t;
                            let a = e.trackId && e.albumId && (0, az.V)(e.trackId, e.albumId);
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
                                (0, f._n)(e) &&
                                    ((e.lastTrackInfoTrack === t.track && e.lastTrackInfoSimilarTracks === t.similarTracks && e.isResolved) ||
                                        ((e.meta = (0, eR.v)(t.track)),
                                        (e.similarTracks = (0, f.wg)(null == (a = t.similarTracks) ? void 0 : a.map((e) => (0, eR.v)(e)))),
                                        (e.loadingState = ev.G.RESOLVE),
                                        (e.lastTrackInfoTrack = t.track),
                                        (e.lastTrackInfoSimilarTracks = t.similarTracks)));
                            },
                            setIsTrackPage(t) {
                                e.isTrackPage = !!t;
                            },
                            setAnimationState(t) {
                                e.withAnimation = t;
                            },
                            getData: (0, f.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (!e.trackId || e.loadingState === ev.G.PENDING || e.shouldReloadMeta) return null;
                                try {
                                    var l;
                                    (e.loadingState = ev.G.PENDING), (e.meta = null);
                                    let i = yield a.getFullInfoTrack({ trackId: e.trackId, albumId: e.albumId });
                                    if (!i) return (e.loadingState = ev.G.REJECT), null;
                                    (e.meta = (0, eR.v)(i.track)),
                                        (e.similarTracks = (0, f.wg)(i.similarTracks.map((e) => (0, eR.v)(e)))),
                                        (e.prevEntityId = i.track.id),
                                        t.setShouldSendEventOnPlusButtonShowed(!0),
                                        (null == (l = e.meta) ? void 0 : l.resolveAllDisclaimers) && (yield e.meta.resolveAllDisclaimers()),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = ev.G.REJECT);
                                }
                                return null;
                            }),
                            open(t) {
                                let { trackId: a, albumId: i } = t;
                                a && i && ((e.trackId === a && e.albumId === i && e.isOpened) || ((e.trackId = a), (e.albumId = i), (e.isOpened = !0)));
                            },
                            reset() {
                                (e.loadingState = ev.G.IDLE), (e.shouldSendEventOnPlusButtonShowed = !0);
                            },
                        };
                        return t;
                    })
                    .named('TrackPage');
            var sx = a(26749),
                sj = a(22266);
            let sW = f.gK
                    .model('BaseAdvertBanner', { type: f.gK.enumeration(Object.values(sx.h)), noAds: f.gK.boolean, hasError: f.gK.boolean, isShowBanner: f.gK.boolean })
                    .views((e) => ({
                        get isBaseVisible() {
                            if (e.noAds || e.hasError || !e.isShowBanner) return !1;
                            let { advertBanners: t } = (0, R.M)(e);
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
                            (e.type = sx.h.EMPTY), (e.noAds = !1), (e.isShowBanner = !0), (e.hasError = !1);
                        },
                    })),
                sX = sW
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, experiments: a } = (0, R.M)(e);
                                return a.checkExperiment(k.z.WebNextBrandedPlaylistsAxe, 'on'), !1;
                            },
                        },
                    }))
                    .named('BrandedEntityAxeBanner'),
                sY = sW
                    .extend((e) => ({
                        views: {
                            get isVisible() {
                                let { advert: t, settings: a, user: i } = (0, R.M)(e);
                                if (!e.noAds && !e.hasError && e.type === sx.h.BRANDING) return !a.isMobile;
                                if (e.noAds || e.hasError || e.type !== sx.h.BRANDING || t.isAdvertDisabled(sj.f.PLAYLIST_BRANDING)) return !1;
                                return !i.hasPlus && !a.isMobile;
                            },
                        },
                    }))
                    .named('BrandedPlaylistBanner');
            var s$ = a(13616);
            let sH = f.gK.model('BrandedPlayerModal', {
                imageUri: f.gK.maybeNull(f.gK.string),
                content: f.gK.string,
                primaryHref: f.gK.string,
                shouldShowSecondaryButton: f.gK.boolean,
                secondaryText: f.gK.maybeNull(f.gK.string),
            });
            var sJ = a(70208);
            let sq = f.gK
                    .compose(f.gK.model('BrandedPlayerBanner', { payload: f.gK.maybeNull(f.gK.model({ thumb: s$.K, modal: f.gK.maybeNull(sH) })), modal: rw.q }), sW)
                    .views((e) => ({
                        get isVisible() {
                            let { advert: t, settings: a, user: i } = (0, R.M)(e);
                            if (e.noAds || e.hasError || t.isAdvertDisabled(sj.f.PLAYER_BRANDING)) return !1;
                            return !i.hasPlus && !a.isMobile;
                        },
                    }))
                    .actions((e) => ({
                        setPayload: (t) => {
                            let { settings: a } = (0, R.M)(e);
                            a.setCustomPlayerThumb(sJ.T.BRANDED), (e.payload = (0, f.wg)(t));
                        },
                    })),
                sz = sW
                    .views((e) => ({
                        get isVisible() {
                            if (!e.isBaseVisible) return !1;
                            let {
                                    advert: t,
                                    advertBanners: {
                                        banners: { brandedPlaylistBanner: a, brandedEntityAxeBanner: i },
                                    },
                                } = (0, R.M)(e),
                                l = t.isAdvertDisabled(sj.f.SIDE_BANNER);
                            return !a.isVisible && !i.isVisible && !l;
                        },
                    }))
                    .named('SideAdvertBanner'),
                sQ = sW
                    .views((e) => {
                        let t = {
                            get isTouchTopAdvertEnabled() {
                                let { advert: t, settings: a } = (0, R.M)(e),
                                    i = t.isAdvertDisabled(sj.f.TOUCH_BANNER);
                                return a.isMobile && !i;
                            },
                            get isVisible() {
                                var a;
                                if (!e.isBaseVisible) return !1;
                                let {
                                        advert: i,
                                        settings: l,
                                        advertBanners: {
                                            banners: { brandedPlaylistBanner: r, brandedEntityAxeBanner: s },
                                        },
                                    } = (0, R.M)(e),
                                    n = i.isAdvertDisabled(sj.f.TOP_BANNER),
                                    o = r.isVisible || s.isVisible;
                                return !(null == (a = l.browserInfo) ? void 0 : a.isTouch) && !t.isTouchTopAdvertEnabled && !o && !n;
                            },
                        };
                        return t;
                    })
                    .named('TopAdvertBanner'),
                sZ = f.gK
                    .model('AdvertBanners', {
                        banners: f.gK.model({
                            topAdvertBanner: sQ,
                            sideAdvertBanner: sz,
                            brandedPlaylistBanner: sY,
                            brandedPlayerBanner: sq,
                            brandedEntityAxeBanner: sX,
                        }),
                    })
                    .views((e) => {
                        let t = {
                            get values() {
                                return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                            },
                            get hasBranding() {
                                return t.values.some((e) => e.type === sx.h.BRANDING);
                            },
                            isVisible(a) {
                                let { experiments: i } = (0, R.M)(e);
                                if (i.checkExperiment(k.z.WebNextDisableAds, 'on')) return !1;
                                if (a === sx.h.EMPTY) return !0;
                                let l = t.values.filter((e) => e.type !== sx.h.EMPTY);
                                return a === sx.h.DIRECT ? l.every((e) => e.type === sx.h.DIRECT) : a !== sx.h.CREATIVE || l.every((e) => e.type !== sx.h.BRANDING);
                            },
                        };
                        return t;
                    });
            !(function (e) {
                (e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen');
            })(o || (o = {})),
                (function (e) {
                    (e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen');
                })(d || (d = {}));
            let getCommunicationTriggersMode = () => {
                    try {
                        let e = window.nativeSettings?.get?.('modSettings.communicationTriggers.mode');
                        return ['all', 'barBelow', 'fullscreen', 'disabled'].includes(e) ? e : 'disabled';
                    } catch (e) {
                        return 'disabled';
                    }
                },
                isCommunicationTriggerAllowed = (e) => {
                    let t = getCommunicationTriggersMode();
                    return t === 'all' || (t === 'barBelow' && e === d.BAR_BELOW) || (t === 'fullscreen' && e === d.FULLSCREEN);
                },
                s0 = (e) => {
                    let { text: t, textColor: a, color: i, action: l } = e;
                    return (0, f.wg)({
                        text: t || null,
                        textColor: a || null,
                        color: i || null,
                        action:
                            l &&
                            ((e) => {
                                let { id: t, type: a, value: i, communicationId: l } = e;
                                return (0, f.wg)({ id: t || null, type: a || null, value: i || null, communicationId: l || null });
                            })(l),
                    });
                },
                s1 = (e) => {
                    let { bgUrl: t, bgColor: a, title: i, text: l, titleColor: r, textColor: s, imageUrl: n, buttons: o, advDisclaimer: d } = e;
                    return (0, f.wg)({
                        bgUrl: t || null,
                        bgColor: a || null,
                        title: i || null,
                        text: l || null,
                        titleColor: r || null,
                        textColor: s || null,
                        imageUrl: n || null,
                        buttons: o.filter((e) => e.text).map(s0),
                        advDisclaimer: d || null,
                    });
                },
                s3 = (e) => {
                    let {
                        isModal: t,
                        withShadow: a,
                        closeActionId: i,
                        bgUrl: l,
                        bgUrlLarge: r,
                        bgColor: s,
                        logoUrl: n,
                        title: o,
                        text: d,
                        titleColor: g,
                        textColor: u,
                        buttons: c,
                        disclaimer: m,
                        disclaimerColor: p,
                        advDisclaimer: y,
                    } = e;
                    return (0, f.wg)({
                        isModal: (0, T.toBoolean)(t),
                        withShadow: (0, T.toBoolean)(a),
                        closeActionId: i || null,
                        bgUrl: l || null,
                        bgUrlLarge: r || null,
                        bgColor: s || null,
                        logoUrl: n || null,
                        title: o || null,
                        text: d || null,
                        titleColor: g || null,
                        textColor: u || null,
                        buttons: c.filter((e) => e.text).map(s0),
                        disclaimer: m || null,
                        disclaimerColor: p || null,
                        advDisclaimer: y || null,
                    });
                };
            !(function (e) {
                (e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus');
            })(g || (g = {}));
            var s2 = a(96764);
            let s6 = f.gK.model('CommunicationButtonAction', {
                    id: f.gK.maybeNull(f.gK.string),
                    type: f.gK.maybeNull(f.gK.enumeration(Object.values(s2.T))),
                    value: f.gK.maybeNull(f.gK.string),
                    communicationId: f.gK.maybeNull(f.gK.string),
                }),
                s4 = f.gK.model('CommunicationButton', {
                    text: f.gK.maybeNull(f.gK.string),
                    color: f.gK.maybeNull(f.gK.enumeration(Object.values(g))),
                    action: f.gK.maybeNull(s6),
                    textColor: f.gK.maybeNull(f.gK.string),
                }),
                s5 = f.gK.model('BarBelowContent', {
                    bgUrl: f.gK.maybeNull(f.gK.string),
                    bgColor: f.gK.maybeNull(f.gK.string),
                    imageUrl: f.gK.maybeNull(f.gK.string),
                    title: f.gK.maybeNull(f.gK.string),
                    titleColor: f.gK.maybeNull(f.gK.string),
                    text: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                    buttons: f.gK.array(s4),
                    advDisclaimer: f.gK.maybeNull(f.gK.string),
                }),
                s9 = f.gK.model('BarBelow', {
                    anchorId: f.gK.enumeration(Object.values(o)),
                    screenId: f.gK.string,
                    content: s5,
                    feedbackToken: f.gK.maybeNull(f.gK.string),
                }),
                s7 = f.gK
                    .model('BarBelowMain', {
                        anchorId: f.gK.maybe(f.gK.string),
                        isVisible: f.gK.maybe(f.gK.boolean),
                        hasAnimationAlreadyBeenShown: f.gK.maybe(f.gK.boolean),
                        hasAnimationAlreadyBeenHidden: f.gK.maybe(f.gK.boolean),
                        hasAnimationAlreadyBeenStarted: f.gK.maybe(f.gK.boolean),
                        list: f.gK.array(s9),
                    })
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
                            e.isVisible = !0;
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
                    })),
                s8 = f.gK.model('CommunicationModalContentModel', {
                    isModal: f.gK.boolean,
                    withShadow: f.gK.boolean,
                    closeActionId: f.gK.maybeNull(f.gK.string),
                    bgUrl: f.gK.maybeNull(f.gK.string),
                    bgUrlLarge: f.gK.maybeNull(f.gK.string),
                    bgColor: f.gK.maybeNull(f.gK.string),
                    logoUrl: f.gK.maybeNull(f.gK.string),
                    title: f.gK.maybeNull(f.gK.string),
                    titleColor: f.gK.maybeNull(f.gK.string),
                    text: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                    buttons: f.gK.array(s4),
                    disclaimer: f.gK.maybeNull(f.gK.string),
                    disclaimerColor: f.gK.maybeNull(f.gK.string),
                    advDisclaimer: f.gK.maybeNull(f.gK.string),
                }),
                ne = f.gK.model('CommunicationModal', {
                    anchorId: f.gK.enumeration(Object.values(o)),
                    screenId: f.gK.string,
                    content: s8,
                    feedbackToken: f.gK.maybeNull(f.gK.string),
                }),
                nt = rw.q
                    .props({ anchorId: f.gK.maybe(f.gK.enumeration(Object.values(o))), list: f.gK.array(ne) })
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
                na = f.gK.model('CommunicationList', { barBelow: s7, modal: nt }),
                ni = f.gK
                    .model('Communication', { loadingState: f.gK.enumeration(Object.values(ev.G)), list: f.gK.maybe(na), errorStatusCode: f.gK.maybeNull(f.gK.number) })
                    .actions((e) => {
                        let t = {
                            getData: (0, f.L3)(function* () {
                                let { dynamicPagesResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (getCommunicationTriggersMode() === 'disabled') return (e.loadingState = ev.G.RESOLVE);
                                if (e.loadingState !== ev.G.PENDING && e.loadingState !== ev.G.RESOLVE)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let i = yield a.getTriggersV2({ anchorIds: Object.values(o) });
                                        if (
                                            (i &&
                                                i.triggers &&
                                                Array.isArray(i.triggers) &&
                                                i.triggers.every(
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
                                                                case d.BAR_BELOW:
                                                                    return void (
                                                                        isCommunicationTriggerAllowed(d.BAR_BELOW) &&
                                                                        e.triggers.forEach((e) => {
                                                                            t.push(
                                                                                ((e) => {
                                                                                    let t = 'data' in e ? s1(e.data) : s1(e.div),
                                                                                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                        i = 'anchorId' in e ? e.anchorId : o.ON_START_BAR_BELOW;
                                                                                    return (0, f.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                                })(e),
                                                                            );
                                                                        })
                                                                    );
                                                                case d.FULLSCREEN:
                                                                    return void (
                                                                        isCommunicationTriggerAllowed(d.FULLSCREEN) &&
                                                                        e.triggers.forEach((e) => {
                                                                            a.push(
                                                                                ((e) => {
                                                                                    let t = 'data' in e ? s3(e.data) : s3(e.div),
                                                                                        a = 'feedbackToken' in e ? e.feedbackToken : null,
                                                                                        i = 'anchorId' in e ? e.anchorId : o.ON_START_FULLSCREEN;
                                                                                    return (0, f.wg)({ anchorId: i, screenId: e.screenId, content: t, feedbackToken: a });
                                                                                })(e),
                                                                            );
                                                                        })
                                                                    );
                                                            }
                                                        }),
                                                        (0, f.wg)({ barBelow: { list: t }, modal: { list: a } })
                                                    );
                                                })(i)),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE),
                                            !e.list)
                                        )
                                            return;
                                        let { barBelow: l, modal: r } = e.list;
                                        l.setAnchorId(o.ON_START_BAR_BELOW),
                                            l.barBelowItem && (l.show(), t.shown(l.barBelowItem.anchorId, l.barBelowItem.screenId, l.barBelowItem.feedbackToken)),
                                            r.setAnchorId(o.ON_START_FULLSCREEN),
                                            r.modalItem && (r.open(), t.shown(r.modalItem.anchorId, r.modalItem.screenId, r.modalItem.feedbackToken));
                                    } catch (t) {
                                        i.error(t),
                                            t instanceof O.GX &&
                                                (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = O.X1.NOT_FOUND),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            shown: (0, f.L3)(function* (t, a, i) {
                                let { dynamicPagesResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                try {
                                    i && (yield l.shownV2({ anchorIds: [t], feedbackToken: i }));
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            action: (0, f.L3)(function* (t, a, i, l) {
                                let { dynamicPagesResource: r, modelActionsLogger: s } = (0, f._$)(e);
                                try {
                                    l && (yield r.actionV2({ anchorIds: [t], actionId: i, feedbackToken: l }));
                                } catch (e) {
                                    s.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var nl = a(71483),
                nr = a(56e3);
            let ns = f.gK
                    .model('ContinueListen', {
                        track: f.gK.maybe(U.v),
                        trackIndex: f.gK.maybe(f.gK.number),
                        contextType: f.gK.maybeNull(f.gK.enumeration(Object.values(nl.K))),
                        contextId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                        albumDuration: f.gK.maybe(f.gK.number),
                        albumStreamProgress: f.gK.optional(nr.B, { endPositionSec: 0 }),
                        trackTempStreamProgress: f.gK.optional(nr.B, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: i, track: l, isDefaultTrack: r } = t;
                            (r && e.track) || ((e.contextType = a), (e.contextId = i), (e.track = (0, f.wg)((0, rq.HO)(l))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                nn = f.gK
                    .model({ modal: rw.q })
                    .views((e) => ({
                        shouldShow() {
                            var t;
                            let { user: a, settings: i } = (0, R.M)(e),
                                { sessionStorage: l } = (0, f._$)(e);
                            if (!a.hasPlus || !(null == (t = i.browserInfo) ? void 0 : t.isMobile)) return !1;
                            let r = l.get(rD.c.DownloadMobileApp);
                            return null == r || !r.shown;
                        },
                    }))
                    .actions((e) => ({
                        openModal() {
                            var t;
                            let { localStorage: a, sessionStorage: i } = (0, f._$)(e);
                            if (!(null == (t = a.get(rD.c.DownloadMobileApp)) ? void 0 : t.shown)) {
                                e.modal.open(), a.set(rD.c.DownloadMobileApp, { shown: !0 }), i.set(rD.c.DownloadMobileApp, { shown: !0 });
                                return;
                            }
                            setTimeout(() => {
                                e.modal.open();
                            }, 5e3),
                                i.set(rD.c.DownloadMobileApp, { shown: !0 });
                        },
                    }));
            var no = a(19158),
                nd = a(6074);
            let ng = f.gK.model('FamilyInviteInfoModel', { name: f.gK.string, avatarUrl: f.gK.string }),
                nu = f.gK
                    .model('FamilyInviteModel', {
                        info: f.gK.model({ loadingState: f.gK.enumeration(Object.values(ev.G)), data: f.gK.maybeNull(ng) }),
                        acceptanceLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        isSuccess: f.gK.maybe(f.gK.boolean),
                        modal: rw.q,
                        step: f.gK.enumeration('Step', Object.values(nd._)),
                        inviteId: f.gK.maybeNull(f.gK.string),
                        error: f.gK.maybeNull(f.gK.enumeration(Object.values(no.C))),
                    })
                    .views((e) => ({
                        get hasError() {
                            return !!e.error;
                        },
                        get isInfoShimmerVisible() {
                            return e.info.loadingState === ev.G.IDLE || e.info.loadingState === ev.G.PENDING;
                        },
                        get isInfoShimmerActive() {
                            return e.info.loadingState === ev.G.PENDING;
                        },
                        get isAcceptanceActive() {
                            return e.acceptanceLoadingState === ev.G.PENDING;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            start(a) {
                                t.setInviteId(a), e.modal.open(), t.getInviteInfo();
                            },
                            retry: (0, f.L3)(function* () {
                                t.setError(null), t.toggleStepInfo(), e.info.loadingState !== ev.G.RESOLVE && (yield t.getInviteInfo());
                            }),
                            getInviteInfo: (0, f.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (e.inviteId && e.info.loadingState !== ev.G.PENDING)
                                    try {
                                        e.info.loadingState = ev.G.PENDING;
                                        let i = { inviteId: e.inviteId },
                                            l = yield a.getInviteInfo(i);
                                        if (!l.hasPlus) {
                                            t.setError(no.C.SUBSCRIPTION_IS_NOT_AVAILABLE), (e.info.loadingState = ev.G.RESOLVE);
                                            return;
                                        }
                                        (e.info.data = ((e) => {
                                            let { name: t, avatarUrl: a } = e;
                                            return (0, f.wg)({ name: t, avatarUrl: a });
                                        })(l)),
                                            (e.info.loadingState = ev.G.RESOLVE);
                                    } catch (a) {
                                        if (((e.info.loadingState = ev.G.REJECT), i.error(a), a instanceof O.GX && a.statusCode === O.X1.BAD_REQUEST))
                                            return void t.setError(no.C.INVITATION_IS_INVALID);
                                        t.setError(no.C.UNKNOWN);
                                    }
                            }),
                            acceptInvite: (0, f.L3)(function* () {
                                let { familyResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (e.inviteId && e.acceptanceLoadingState !== ev.G.PENDING)
                                    try {
                                        e.acceptanceLoadingState = ev.G.PENDING;
                                        let i = { inviteId: e.inviteId };
                                        yield a.acceptInvite(i), (e.acceptanceLoadingState = ev.G.RESOLVE), t.toggleStateSuccessTrue();
                                    } catch (a) {
                                        if (((e.acceptanceLoadingState = ev.G.REJECT), i.error(a), a instanceof O.GX && a.statusCode === O.X1.BAD_REQUEST))
                                            return void t.setError(no.C.INVITATION_IS_INVALID);
                                        t.setError(no.C.UNKNOWN);
                                    }
                            }),
                            toggleStepInfo() {
                                e.step = nd._.INFO;
                            },
                            toggleStepSuccess() {
                                e.step = nd._.SUCCESS;
                            },
                            setError(t) {
                                e.error = t;
                            },
                            setInviteId(t) {
                                e.inviteId = t;
                            },
                            toggleStateSuccessTrue() {
                                t.toggleStepSuccess(), (e.isSuccess = !0);
                            },
                            reset() {
                                (e.acceptanceLoadingState = ev.G.IDLE),
                                    (e.error = null),
                                    (e.info.loadingState = ev.G.IDLE),
                                    (e.info.data = null),
                                    (e.inviteId = null),
                                    (e.step = nd._.INFO),
                                    (e.isSuccess = !1);
                            },
                        };
                        return t;
                    }),
                nc = (e) => {
                    switch (e.type) {
                        case W._.MIX_CARD_ITEM:
                            return (0, f.wg)({ type: W._.MIX_CARD_ITEM, data: tR(e.data) });
                        case W._.NON_MUSIC_ALBUM_ITEM:
                            return e0({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case W._.ALBUM_ITEM:
                            return Y(e.data.album, e.data.artists, e.data.trailer);
                        case W._.CHART_ALBUM_ITEM:
                            let t, a, i, l;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (l = e.data.trailer),
                                { type: W._.CHART_ALBUM_ITEM, data: (0, X.s)({ album: t, chart: a, likesCount: i, trailer: l }) }
                            );
                        case W._.ARTIST_ITEM:
                            return H(e.data.artist, e.data.trailer);
                        case W._.PLAYLIST_ITEM:
                            return tU(e.data.playlist, e.data.trailer);
                        case W._.PERSONAL_PLAYLIST_ITEM:
                            return tG(e);
                        case W._.LIKED_PLAYLIST_ITEM:
                            return q({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                nm = f.gK.model('LandingChartAlbumItem', { type: f.gK.literal(W._.CHART_ALBUM_ITEM), data: el.J }),
                np = f.gK.model('LandingMixCardItemModel', { type: f.gK.literal(W._.MIX_CARD_ITEM), data: iE }),
                ny = f.gK.union(er, en, i2, iU, ed, nm, aT, np),
                nE = f.gK
                    .compose(f.gK.model('LandingBlockEntities', { title: f.gK.maybeNull(f.gK.string), items: f.gK.array(ny) }), V.X)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    (e.title = t.title), (e.items = (0, f.wg)(t.items.map(nc))), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    l.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE), (e.items = (0, f.wg)([])), (e.title = null);
                        },
                    }));
            var nS = a(41670);
            let nK = ly
                    .props({
                        id: f.gK.optional(f.gK.string, ''),
                        title: f.gK.optional(f.gK.string, ''),
                        skeletonMeta: f.gK.maybe(f.gK.frozen()),
                        preloadedBlocksMeta: f.gK.maybe(f.gK.frozen()),
                    })
                    .views((e) => {
                        let t = {
                            get isLoaded() {
                                return e.loadingState === ev.G.RESOLVE || e.loadingState === ev.G.REJECT;
                            },
                            get isSkeletonCreated() {
                                let { landingSdk: t } = (0, f._$)(e);
                                return !!t.skeleton;
                            },
                            get isNeededToInit() {
                                let { loadingState: a } = e;
                                return a === ev.G.IDLE || (a === ev.G.RESOLVE && !!e.skeletonMeta && !t.isSkeletonCreated);
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let { landingSdk: t, modelActionsLogger: a } = (0, f._$)(e),
                            i = {
                                initSkeleton: (0, f.L3)(function* (i) {
                                    let { preloadBlocksCount: l, skeletonData: r } = i;
                                    if (e.loadingState !== ev.G.PENDING) {
                                        e.loadingState = ev.G.PENDING;
                                        try {
                                            var s;
                                            if (e.skeletonMeta) {
                                                yield t.createSkeleton({
                                                    data: { ...r, meta: e.skeletonMeta },
                                                    loadSkeletonMeta: !1,
                                                    preloadedBlocksMeta: e.preloadedBlocksMeta,
                                                }),
                                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                                return;
                                            }
                                            if ((yield t.createSkeleton({ data: r }), null == (s = t.skeleton) ? void 0 : s.data.meta)) {
                                                let { blocks: a, id: i, title: l } = t.skeleton.data.meta,
                                                    r = tb(a);
                                                (e.id = i),
                                                    (e.title = l),
                                                    (e.meta = (0, f.wg)(r.meta)),
                                                    (e.upperBlocks = (0, f.wg)(r.upperBlocks)),
                                                    (e.tabs.data = (0, f.wg)(r.tabs.data)),
                                                    (e.skeletonMeta = t.skeleton.data.meta);
                                            }
                                            t.skeleton, e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                        } catch (t) {
                                            a.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                        }
                                    }
                                }),
                                syncLoadedSdkBlocks() {
                                    var a, l, r, s;
                                    let n = (e) => {
                                        var a, l;
                                        if ((0, eF.Q)(e)) {
                                            null == (l = e.data) || l.blocks.forEach(n);
                                            return;
                                        }
                                        let r = null == (a = t.skeleton) ? void 0 : a.getNodeById(e.id);
                                        r && i.handleSdkBlockUpdate(e, r, r.state.loadingStatus.value);
                                    };
                                    null == (a = e.upperBlocks) || a.forEach(n), null == (l = e.tabs.data) || l.forEach((e) => e.blocks.forEach(n));
                                    let o = null == (s = t.skeleton) || null == (r = s.root) ? void 0 : r.getTabsBlock();
                                    o && i.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                },
                                handleSdkBlockUpdate(e, t, a) {
                                    switch (a) {
                                        case nS.rl.IDLE:
                                            e.loadingState = ee.IDLE;
                                            break;
                                        case nS.rl.PENDING:
                                            e.loadingState = ee.PENDING;
                                            break;
                                        case nS.rl.REJECT:
                                            e.loadingState = ee.REJECT;
                                            break;
                                        case nS.rl.RESOLVE:
                                            (e.loadingState = ee.RESOLVE),
                                                (e.data = ((e, t) => {
                                                    if (t.data.meta)
                                                        switch (t.data.type) {
                                                            case et.t.LIKES_AND_HISTORY:
                                                                return tf(t.data.meta);
                                                            case et.t.CHART_TRACKS:
                                                                return e$(t.data.meta);
                                                            case et.t.NEW_RELEASES:
                                                            case et.t.EDITORIAL_NEW_RELEASES:
                                                                return tP(t.data.meta);
                                                            case et.t.NEW_PLAYLISTS:
                                                            case et.t.EDITORIAL_COMPILATION:
                                                            case et.t.RECOMMENDED_PLAYLISTS:
                                                            case et.t.META_TAG_POPULAR_PLAYLISTS:
                                                            case et.t.META_TAG_NEW_ALBUMS:
                                                            case et.t.META_TAG_PLAYLISTS:
                                                            case et.t.MICRO_GENRE_ALBUMS:
                                                            case et.t.META_TAG_ALBUMS:
                                                            case et.t.ARTIST_PLAYLISTS:
                                                            case et.t.ARTIST_ALBUMS:
                                                            case et.t.ARTIST_COMPILATIONS:
                                                            case et.t.ARTIST_STUDIO_ALBUMS:
                                                            case et.t.ARTIST_SIMILAR_ENTITIES:
                                                            case et.t.COLLECTION_SIMILAR_ENTITIES:
                                                                return Z(t.data.meta);
                                                            case et.t.WAVES:
                                                            case et.t.SETS_BY_WAVES:
                                                                return tj(t.data.meta);
                                                            case et.t.WAVES_AGENT:
                                                            case et.t.SETS_BY_WAVES_AGENT:
                                                                return tx(t.data.meta);
                                                            case et.t.MIXES_GRID:
                                                            case et.t.MIXES_MUSIC:
                                                                return tk(t.data.meta);
                                                            case et.t.NEUROMUSIC:
                                                                return t_(t.data.meta);
                                                            case et.t.CONCERTS_TOP:
                                                            case et.t.CONCERTS_PERSONAL:
                                                            case et.t.EDITORIAL_CONCERTS:
                                                            case et.t.VIEWED_CONCERTS:
                                                                return tI(t.data.meta);
                                                            case et.t.OPEN_PLAYLIST:
                                                            case et.t.SMART_OPEN_PLAYLIST:
                                                            case et.t.NON_MUSIC_OPEN_PLAYLIST:
                                                                return tw(t.data.meta, e.id);
                                                            case et.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                                                return e2(t.data.meta);
                                                            case et.t.DONATIONS:
                                                                return tN(t.data.meta);
                                                            case et.t.PERSONAL_PLAYLISTS:
                                                            case et.t.REWIND_PLAYLISTS:
                                                                return tM(t.data.meta);
                                                            case et.t.PERSONAL_ARTISTS:
                                                            case et.t.NEW_STARS_ARTISTS:
                                                            case et.t.EDITORIAL_ARTISTS:
                                                            case et.t.META_TAG_POPULAR_ARTISTS:
                                                            case et.t.MICRO_GENRE_ARTISTS:
                                                            case et.t.MICRO_GENRE_TOP_ARTISTS:
                                                            case et.t.META_TAG_ARTISTS:
                                                            case et.t.SIMILAR_ARTISTS:
                                                                return tA(t.data.meta);
                                                            case et.t.IN_STYLE:
                                                                return tC(t.data.meta);
                                                            case et.t.WIZARD:
                                                                return tW(t.data.meta);
                                                            case et.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                                            case et.t.NON_MUSIC_CATEGORY:
                                                                return tO(t.data.meta);
                                                            case et.t.SPECIAL:
                                                                return tV(t.data.meta);
                                                            case et.t.ALBUM_PROMO:
                                                            case et.t.SIMPLE_ALBUM_PROMO:
                                                                return ej(t.data.meta);
                                                            default:
                                                                return;
                                                        }
                                                })(e, t));
                                    }
                                },
                                handleSdkTabsBlockUpdate(t, a) {
                                    switch (a) {
                                        case nS.rl.IDLE:
                                            e.tabs.loadingState = ev.G.IDLE;
                                            break;
                                        case nS.rl.PENDING:
                                            e.tabs.loadingState = ev.G.PENDING;
                                            break;
                                        case nS.rl.REJECT:
                                            e.tabs.loadingState = ev.G.REJECT;
                                            break;
                                        case nS.rl.RESOLVE: {
                                            var i;
                                            if (!t.data.meta) break;
                                            let a = tF(t.data.meta) || [];
                                            null == (i = e.tabs.data) ||
                                                i.forEach((e, t) => {
                                                    let i = a.find((t) => {
                                                        var a;
                                                        return t.id === (null == (a = e.data) ? void 0 : a.id);
                                                    });
                                                    e.data = i || a[t];
                                                }),
                                                (e.tabs.loadingState = ev.G.RESOLVE);
                                        }
                                    }
                                },
                                reset() {
                                    (e.loadingState = ev.G.IDLE),
                                        (e.meta = null),
                                        (e.skeletonMeta = void 0),
                                        (e.preloadedBlocksMeta = void 0),
                                        e.tabs.reset(),
                                        (e.upperBlocks = null),
                                        t.destroy();
                                },
                            };
                        return i;
                    }),
                nb = (e) => ({ imgUrl: e.imgUrl, title: e.title, url: e.url }),
                nv = f.gK.model('ArtistLink', { imgUrl: f.gK.maybeNull(f.gK.string), title: f.gK.maybeNull(f.gK.string), url: f.gK.maybeNull(f.gK.string) }),
                nI = f.gK
                    .compose(
                        f.gK.model('ArtistAboutModal', {
                            modal: rw.q,
                            artist: f.gK.maybeNull(es.P),
                            artistType: f.gK.maybeNull(f.gK.enumeration(Object.values(lb.o))),
                            description: f.gK.maybeNull(f.gK.string),
                            lastMonthListeners: f.gK.maybeNull(f.gK.number),
                            lastMonthListenersDelta: f.gK.optional(f.gK.number, 0),
                            covers: f.gK.maybeNull(f.gK.array(f.gK.string)),
                            links: f.gK.maybeNull(f.gK.array(nv)),
                        }),
                        V.X,
                        D.p,
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
                            getData: (0, f.L3)(function* (t) {
                                let { artistsResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (!e.isLoading)
                                    try {
                                        var l, r, s, n, o;
                                        e.loadingState = ev.G.PENDING;
                                        let i = yield a.getAboutArtist({ artistId: t });
                                        (e.artist = (0, $.a)({ artist: i.artist })),
                                            (e.description = null != (o = i.description) ? o : null),
                                            (e.artistType = i.artistType === lb.o.COMPOSER ? lb.o.COMPOSER : lb.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(null == (l = i.stats) ? void 0 : l.lastMonthListeners) &&
                                                (e.lastMonthListeners = i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(null == (r = i.stats) ? void 0 : r.lastMonthListenersDelta) &&
                                                (e.lastMonthListenersDelta = i.stats.lastMonthListenersDelta);
                                        let d = null == (s = i.covers) ? void 0 : s.map((e) => e.uri).filter((e) => !!e);
                                        d && (e.covers = (0, f.wg)(d)),
                                            (e.links = (0, f.wg)(null == (n = i.links) ? void 0 : n.map(nb))),
                                            e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            close() {
                                e.modal.close(), t.reset();
                            },
                            onOpenChange(a) {
                                e.modal.onOpenChange(a), a || t.reset();
                            },
                            reset() {
                                (e.loadingState = ev.G.IDLE),
                                    (e.description = null),
                                    (e.lastMonthListeners = null),
                                    (e.lastMonthListenersDelta = 0),
                                    (e.artistType = null),
                                    e.destroyItems([e.artist, e.covers, e.links]);
                            },
                        };
                        return t;
                    }),
                nL = f.gK
                    .model('ImageSliderModal', {
                        modal: rw.q,
                        images: f.gK.maybeNull(f.gK.array(f.gK.string)),
                        initialSlideIndex: f.gK.optional(f.gK.number, 0),
                        loadedImages: f.gK.maybeNull(f.gK.array(f.gK.string)),
                        sizeImage: f.gK.optional(f.gK.number, 1e3),
                        withAspectRatio: f.gK.optional(f.gK.boolean, !0),
                    })
                    .views((e) => ({ isImageLoaded: (t) => !!t && !!e.loadedImages && e.loadedImages.includes(t) }))
                    .actions((e) => ({
                        openImages(t) {
                            let { images: a, initialSlideIndex: i, sizeImage: l, withAspectRatio: r } = t;
                            (e.images = (0, f.wg)((0, rq.HO)(a))),
                                (e.sizeImage = null != l ? l : 1e3),
                                (e.withAspectRatio = null == r || r),
                                i && (e.initialSlideIndex = i),
                                e.modal.open();
                        },
                        setImageIsLoaded(t) {
                            var a, i;
                            e.loadedImages || (e.loadedImages = (0, f.wg)([])),
                                !t || (null == (a = e.loadedImages) ? void 0 : a.includes(t)) || null == (i = e.loadedImages) || i.push(t);
                        },
                        close() {
                            (e.images = null), (e.initialSlideIndex = 0), (e.loadedImages = null), e.modal.close();
                        },
                    })),
                nT = f.gK
                    .model('UgcTrackEditModal', { modal: rw.q })
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
                                (e.track = t), e.modal.open();
                            },
                            close() {
                                e.modal.close(), t.reset();
                            },
                            reset() {
                                e.track = null;
                            },
                        };
                        return t;
                    }),
                nN = f.gK.model('ModalsModel', {
                    disclaimerModal: rw.q,
                    shortcutsModal: rw.q,
                    aboutAppModal: rw.q,
                    overviewModal: rw.q,
                    ugcTrackEditModal: nT,
                    popoverOverPlayer: rw.q,
                    crackdownModal: rw.q,
                    overwrittenExperimentsModal: rw.q,
                    buySubscriptionModal: rw.q,
                    clearMemoryModal: rw.q,
                    windowSettingsModal: rw.q,
                    playerSettingsModal: rw.q,
                    audioSettingsModal: rw.q,
                    myVibeAnimationPerformanceSettingsModal: rw.q,
                    myVibeAnimationAppearanceSettingsModal: rw.q,
                    appUpdatesSettingsModal: rw.q,
                    scrobblersSettingsModal: rw.q,
                    downloaderSettingsModal: rw.q,
                    systemSettingsModal: rw.q,
                    globalShortcutsSettingsModal: rw.q,
                    myVibeParamsSettingsModal: rw.q,
                    miniPlayerSettingsModal: rw.q,
                    ynisonSettingsModal: rw.q,
                    lrclibSettingsModal: rw.q,
                    discordRpcSettingsModal: rw.q,
                    imageSliderModal: nL,
                    promoLandingBuySubscriptionModal: rw.q,
                    artistAboutModal: nI,
                    bestRecommedationModal: rw.q,
                }),
                nA = (e) => 'object' == typeof e && e && 'type' in e,
                nh = (e) => {
                    switch (e.type) {
                        case W._.WAVE_ITEM:
                            return (0, f.wg)({ type: W._.WAVE_ITEM, data: (0, th.e)(e.data) });
                        case W._.PLAYLIST_ITEM:
                            return (0, f.wg)({ type: W._.PLAYLIST_ITEM, data: (0, J.b)({ playlist: e.data }) });
                        case W._.ARTIST_ITEM:
                            return (0, f.wg)({ type: W._.ARTIST_ITEM, data: (0, $.a)({ artist: e.data }) });
                        case W._.ALBUM_ITEM:
                            return (0, f.wg)({ type: W._.ALBUM_ITEM, data: (0, X.s)({ album: e.data }) });
                    }
                },
                nC = f.gK.model('PinAlbumItemModel', { type: f.gK.literal(W._.ALBUM_ITEM), data: aQ.G }),
                nf = f.gK.model('PinArtistItemModel', { type: f.gK.literal(W._.ARTIST_ITEM), data: es.P }),
                nR = f.gK.model('PinPlaylistItemModel', { type: f.gK.literal(W._.PLAYLIST_ITEM), data: tu.$ }),
                nk = f.gK.model('PinVibeItemModel', { type: f.gK.literal(W._.WAVE_ITEM), data: eg.G }),
                nD = f.gK.union(nC, nf, nR, nk),
                n_ = f.gK
                    .model('Pins', { loadingState: f.gK.enumeration(Object.values(ev.G)), items: f.gK.maybeNull(f.gK.array(nD)), index: f.gK.map(f.gK.boolean) })
                    .views((e) => ({
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
                                (e.items = (0, f.wg)(null == (a = e.items) ? void 0 : a.filter((e) => e.data.pinId !== t))), e.index.delete(t);
                            },
                            addPin(t) {
                                var a, i, l, r;
                                if ((null == (a = e.items) ? void 0 : a.length) === 30) {
                                    let t = null == (r = e.items) ? void 0 : r.pop();
                                    void 0 !== t && e.index.delete(t.data.pinId);
                                }
                                null == (i = e.items) || i.unshift(nh(t));
                                let s = null == (l = e.items) ? void 0 : l.at(0);
                                s && e.index.set(s.data.pinId, !0);
                            },
                            getData: (0, f.L3)(function* () {
                                let { pinsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        var i;
                                        e.loadingState = ev.G.PENDING;
                                        let a = yield t.getPins();
                                        (e.items = (0, f.wg)(a.pins.map(nh))),
                                            null == (i = e.items) ||
                                                i.forEach((t) => {
                                                    e.index.set(t.data.pinId, !0);
                                                }),
                                            (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        (e.loadingState = ev.G.REJECT), a.error(t);
                                    }
                            }),
                            toggleAlbumPin: (0, f.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield l.unpinAlbum(a)), t.deletePin(i), r;
                                        return (r = yield l.pinAlbum(a)), nA(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleArtistPin: (0, f.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield l.unpinArtist(a)), t.deletePin(i), r;
                                        return (r = yield l.pinArtist(a)), nA(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            togglePlaylistPin: (0, f.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield l.unpinPlaylist(a)), t.deletePin(i), r;
                                        return (r = yield l.pinPlaylist(a)), nA(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                            toggleVibePin: (0, f.L3)(function* (a, i) {
                                let { pinResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        let r;
                                        if (e.isPinned(i)) return (r = yield l.unpinWave(a)), t.deletePin(i), r;
                                        return (r = yield l.pinWave(a)), nA(r) && t.addPin(r), r;
                                    } catch (e) {
                                        r.error(e);
                                        return;
                                    }
                            }),
                        };
                        return t;
                    }),
                nP = f.gK.model({ modal: rw.q, freemiumCollectionBarrier: f.gK.optional(f.gK.boolean, !1) }).actions((e) => ({
                    openModal() {
                        e.modal.open();
                    },
                    openFreemiumCollectionPaywall() {
                        (e.freemiumCollectionBarrier = !0), e.modal.open();
                    },
                    clearFreemiumCollectionBarrier() {
                        e.freemiumCollectionBarrier && ((e.freemiumCollectionBarrier = !1), e.modal.close());
                    },
                    closeModal() {
                        if (e.freemiumCollectionBarrier) return;
                        let { desktopPaywall: t } = (0, R.M)(e);
                        t.startCrackdownTimeout(), e.modal.close();
                    },
                    onOpenChange(t) {
                        if (t || !e.freemiumCollectionBarrier) {
                            if (!t) {
                                let { desktopPaywall: t } = (0, R.M)(e);
                                t.startCrackdownTimeout();
                            }
                            e.modal.onOpenChange(t);
                        }
                    },
                })),
                nO = f.gK.model('AdContainer', {
                    adTitle: f.gK.maybe(f.gK.string),
                    iconSrc: f.gK.maybe(f.gK.string),
                    clickThroughUrl: f.gK.maybe(f.gK.string),
                    src: f.gK.maybe(f.gK.string),
                    clientLegalInfo: f.gK.maybe(f.gK.string),
                    advertiserInfoUrl: f.gK.maybe(f.gK.string),
                });
            var nw = a(23248);
            let nG = f.gK
                .model('Advert', {
                    data: f.gK.maybeNull(nO),
                    isAdvertShown: f.gK.maybe(f.gK.boolean),
                    isAdvertPlaying: f.gK.maybe(f.gK.boolean),
                    isAdvertPlaybackCreated: f.gK.boolean,
                    type: f.gK.maybeNull(f.gK.enumeration(Object.values(nw.I))),
                })
                .views((e) => ({
                    get isAudioAdvert() {
                        return e.type === nw.I.AUDIO;
                    },
                    get isVideoAdvert() {
                        return e.type === nw.I.VIDEO;
                    },
                }))
                .actions((e) => ({
                    setData: (t) => {
                        e.data = (0, f.wg)({
                            adTitle: null == t ? void 0 : t.adTitle,
                            iconSrc: null == t ? void 0 : t.iconSrc,
                            clickThroughUrl: null == t ? void 0 : t.clickThroughUrl,
                            clientLegalInfo: null == t ? void 0 : t.clientLegalInfo,
                            advertiserInfoUrl: null == t ? void 0 : t.advertiserInfoUrl,
                        });
                    },
                    setType(t) {
                        e.type = t;
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
                        let { experiments: l } = (0, R.M)(e);
                        if (!l.checkExperiment(k.z.WebNextDisableAds, 'on')) return !1;
                        let r = null == (i = l.getExperiment(k.z.WebNextDisableAds)) || null == (a = i.value) ? void 0 : a.values;
                        return Array.isArray(r) && r.includes(t);
                    },
                    reset: () => {
                        (e.data = null), (e.isAdvertPlaying = !0), (e.isAdvertShown = !1), (e.type = null);
                    },
                }));
            var nM = a(20979),
                nU = a(72676),
                nB = a(75819),
                nV = a(93159);
            let nF = (e) => {
                    var t, a, i;
                    switch (e.data.type) {
                        case av.R.Generative: {
                            let a = e.data.meta,
                                i = (0, nV.Q)(null == a ? void 0 : a.derivedColors);
                            return (0, f.wg)({
                                id: String(a.id),
                                coverUri: a.imageUrl,
                                title: null != (t = a.title) ? t : '',
                                isAvailable: !0,
                                isRemoved: !1,
                                averageColor: i,
                            });
                        }
                        case av.R.Clip:
                        case nU.z4.Unloaded:
                        case av.R.Radio:
                            return null;
                        default: {
                            let t = e.data.meta,
                                l = null == (a = t.substituted?.artists ?? t.artists) ? void 0 : a.map(lO.d),
                                r = null == (i = t.albums) ? void 0 : i.map(rB.e);
                            return (0, f.wg)({ ...(0, nB.g)(t), artists: l, albums: r, isHiddenFromSonataQueue: e.hidden });
                        }
                    }
                },
                nx = a(38777)
                    .O.props({ artists: f.gK.array(es.P), albums: f.gK.array(aQ.G), chart: f.gK.maybe(aO.I), isHiddenFromSonataQueue: f.gK.maybe(f.gK.boolean) })
                    .views((e) => ({
                        get idWithContext() {
                            return e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : e.id;
                        },
                        get artistsNames() {
                            var t;
                            return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                        },
                        get mainArtist() {
                            var a, i;
                            return null != (i = null == (a = e.artists) ? void 0 : a[0]) ? i : null;
                        },
                        get mainAlbum() {
                            var l, r;
                            return null != (r = null == (l = e.albums) ? void 0 : l[0]) ? r : null;
                        },
                        get index() {
                            var s, n, o;
                            return null != (o = null == (n = e.albums[0]) || null == (s = n.trackPosition) ? void 0 : s.index) ? o : null;
                        },
                        get isPodcast() {
                            var d;
                            return e.isTrackPodcast || (null == (d = this.mainAlbum) ? void 0 : d.isPodcast);
                        },
                        get isAudiobook() {
                            return e.type === M.S.AUDIOBOOK;
                        },
                        get isFairyTale() {
                            return e.type === M.S.FAIRY_TALE;
                        },
                        get isNonMusic() {
                            return this.isPodcast || this.isAudiobook || this.isFairyTale;
                        },
                        get isAvailableOnlyForPlus() {
                            var g;
                            return !!(null == (g = this.mainAlbum) ? void 0 : g.isAvailableOnlyForPlus);
                        },
                    }))
                    .actions((e) => ({
                        changeTrackInfo: (0, f.L3)(function* (t, a) {
                            let { ugcResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            if (e.artists.map((e) => e.name).join(', ') === a && t === e.title) return aV.F.OK;
                            try {
                                var r;
                                yield i.changeTrack({ trackId: e.id, title: t, artist: a }), (e.title = t);
                                let l = (null == (r = e.artists[0]) ? void 0 : r.id) || '0';
                                if (((e.artists = (0, f.wg)([])), a)) {
                                    let t = es.P.create({ id: l, name: a, isAvailable: !0 });
                                    e.artists = (0, f.wg)([t]);
                                }
                                return aV.F.OK;
                            } catch (e) {
                                return l.error(e), aV.F.ERROR;
                            }
                        }),
                    })),
                nj = f.gK
                    .compose(
                        f.gK.model('PlayQueue', {
                            isVisible: f.gK.optional(f.gK.boolean, !1),
                            beforeTracksIds: f.gK.maybeNull(f.gK.array(f.gK.number)),
                            afterTracksIds: f.gK.optional(f.gK.frozen(), []),
                            hiddenTrackIds: f.gK.array(f.gK.number),
                            currentIndex: f.gK.optional(f.gK.number, 0),
                            trackMap: f.gK.optional(f.gK.map(nx), {}),
                        }),
                        D.p,
                    )
                    .views((e) => ({
                        get isVibeBlockShowed() {
                            let {
                                sonataState: { isVibeContext: t },
                            } = (0, R.M)(e);
                            return !t && 0 === e.afterTracksIds.length;
                        },
                        get itemsKeys() {
                            var t, a;
                            return null != (a = null == (t = e.beforeTracksIds) ? void 0 : t.concat(e.afterTracksIds).map(String)) ? a : [];
                        },
                        get isDragAndDropEnabled() {
                            let {
                                experiments: t,
                                sonataState: { isVibeContext: a },
                            } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextPlayQueueDnD, 'on') && !a;
                        },
                    }))
                    .actions((e) => {
                        let t = (t, a) => {
                                let i = t[a];
                                if (!i || (0, nU.Re)(i)) return null;
                                let { entity: l } = i,
                                    r = nF(l);
                                return !r || r.isHiddenFromSonataQueue ? null : (e.trackMap.has(r.id) || e.trackMap.set(r.id, (0, f.wg)(r)), a);
                            },
                            a = {
                                setVisible() {
                                    e.isVisible = !0;
                                },
                                setInvisible() {
                                    e.isVisible = !1;
                                },
                                updateTracks(e, t, i, l) {
                                    a.setCurrentTrackId(e, t), a.setBeforeTracksIds(e, i), a.setAfterTracksIds(e, i, l), a.setHiddenTrackIds(e);
                                },
                                setCurrentTrackId(a, i) {
                                    (e.currentIndex = i), t(a, i);
                                },
                                setBeforeTracksIds(a, i) {
                                    let l = Math.max(0, e.currentIndex - 125) - 1,
                                        r = [];
                                    for (let s = e.currentIndex - 1; s > l; s--) {
                                        let e = i[s];
                                        if ('number' != typeof e) break;
                                        let l = t(a, e);
                                        null !== l && r.unshift(l);
                                    }
                                    e.beforeTracksIds = (0, f.wg)(r);
                                },
                                setAfterTracksIds(a, i, l) {
                                    let r = l === nl.K.Vibe ? 1 : 125,
                                        s = [];
                                    for (let l = e.currentIndex + 1; l < i.length && s.length < r; l++) {
                                        let e = i[l];
                                        if ('number' != typeof e) break;
                                        let r = t(a, e);
                                        null !== r && s.push(r);
                                    }
                                    e.afterTracksIds = s;
                                },
                                setHiddenTrackIds(t) {
                                    let a = [];
                                    for (let e = 0; e < t.length; e++) {
                                        let i = t[e];
                                        i && i.entity.hidden && a.push(e);
                                    }
                                    e.hiddenTrackIds = (0, f.wg)(a);
                                },
                                reset() {
                                    e.destroyItems([e.beforeTracksIds, e.hiddenTrackIds]), (e.afterTracksIds = []), e.trackMap.clear();
                                },
                            };
                        return a;
                    });
            var nW = a(27576);
            !(function (e) {
                (e.TEXT = 'TEXT'), (e.LRC = 'LRC'), (e.RICH_JSON = 'RICH_JSON');
            })(u || (u = {}));
            var nX = a(24266),
                nY = a(25079);
            let n$ = (e, t) => {
                    let a = Math.floor(Date.now() / 1e3),
                        i = ''.concat(e).concat(a);
                    return {
                        sign: (0, nX.createHmac)('sha256', (0, nY.E)())
                            .update(i)
                            .digest('base64'),
                        timeStamp: a,
                        trackId: e,
                        format: t,
                    };
                },
                nH = (e) => (0, f.wg)({ id: e.id, name: e.name, prettyName: e.prettyName }),
                nJ = f.gK.model('MajorModel', { id: f.gK.number, name: f.gK.string, prettyName: f.gK.maybeNull(f.gK.string) }),
                nq = (e) => {
                    if (!e) return;
                    let t = e.split(':'),
                        a = parseInt(t[0] || '0', 10),
                        i = parseFloat(t[1] || '0');
                    return a > 0 ? parseFloat((60 * a + i).toFixed(2)) : i;
                },
                pulseSyncLrclib = (() => {
                    const GET_API_URL = 'https://lrclib.net/api/get';
                    const SEARCH_API_URL = 'https://lrclib.net/api/search';
                    const REQUEST_INTERVAL_MS = 350;
                    const REQUEST_TIMEOUT_MS = 10_000;
                    const RESULT_TTL_MS = 60 * 60 * 1000;
                    const NO_RESULT_TTL_MS = 30 * 60 * 1000;
                    const CACHE_LIMIT = 500;
                    const PROVIDER = Object.freeze({ id: 1337, name: 'LRCLIB', prettyName: 'LRCLIB' });
                    const signatureResults = new Map();
                    const signatureMisses = new Map();
                    const signaturesInFlight = new Map();
                    const syncedByTrackId = new Map();
                    const syncedMissesByTrackId = new Map();
                    const syncedInFlightByTrackId = new Map();
                    const requestControllers = new Set();
                    let requestChain = Promise.resolve();
                    let lastRequestAt = 0;
                    let queueGeneration = 0;
                    let prefetchRetryTimer = null;
                    let prefetchSequence = 0;

                    const debug = (message, details) => {
                        try {
                            if (details === undefined) console.debug(`[LRCLib] ${message}`);
                            else console.debug(`[LRCLib] ${message}`, details);
                        } catch (_error) {}
                    };
                    const logSyncPrefetch = (event, details) => debug(`sync prefetch ${event}`, details);

                    const getSetting = (name, fallback) => {
                        try {
                            const value = window.nativeSettings?.get(`modSettings.lrclib.${name}`);
                            return typeof value === 'boolean' ? value : fallback;
                        } catch (_error) {
                            return fallback;
                        }
                    };
                    const getStringSetting = (name, fallback) => {
                        try {
                            const value = window.nativeSettings?.get(`modSettings.lrclib.${name}`);
                            return typeof value === 'string' ? value : fallback;
                        } catch (_error) {
                            return fallback;
                        }
                    };

                    const isEnabled = () => getSetting('useText', true);
                    const getLookupMode = () => (getStringSetting('lookupMode', 'get') === 'search' ? 'search' : 'get');
                    const normalizeSignaturePart = (value) =>
                        typeof value === 'string'
                            ? value
                                  .trim()
                                  .toLowerCase()
                                  .replace(/[^\p{L}\p{N}]+/gu, '')
                            : '';
                    const splitTrackTitle = (value) => {
                        if (typeof value !== 'string') return null;
                        for (const separator of [' - ', ' — ', ' – ']) {
                            if (!value.includes(separator)) continue;
                            const parts = value.split(separator);
                            const left = parts[0]?.trim() || '';
                            const right = parts.slice(1).join(separator).trim();
                            if (left && right) return { left, right };
                        }
                        return null;
                    };
                    const getTitleVariants = (value) => {
                        if (typeof value !== 'string') return [];
                        const title = value.trim();
                        if (!title) return [];
                        const variants = [title];
                        const split = splitTrackTitle(title);
                        if (split?.left) variants.push(split.left);
                        if (split?.right) variants.push(split.right);
                        return variants;
                    };

                    const readCache = (cache, key) => {
                        const entry = cache.get(key);
                        if (!entry) return null;
                        if (entry.expiresAt <= Date.now()) {
                            cache.delete(key);
                            return null;
                        }
                        cache.delete(key);
                        cache.set(key, entry);
                        return entry.value;
                    };

                    const writeCache = (cache, key, value, ttl) => {
                        cache.delete(key);
                        cache.set(key, { value, expiresAt: Date.now() + ttl });
                        while (cache.size > CACHE_LIMIT) {
                            const oldest = cache.keys().next();
                            if (oldest.done) break;
                            cache.delete(oldest.value);
                        }
                    };

                    const unwrapTrackMeta = (source) => {
                        if (!source || typeof source !== 'object') return null;
                        return (
                            [
                                source,
                                source.meta,
                                source.data,
                                source.data?.meta,
                                source.entity,
                                source.entity?.data,
                                source.entity?.data?.meta,
                                source.track,
                                source.mediaSourceData?.data,
                            ].find((candidate) => candidate && (candidate.id != null || candidate.title || candidate.name)) || null
                        );
                    };

                    const buildTrackLookup = (source) => {
                        const track = unwrapTrackMeta(source);
                        if (!track) return null;
                        let trackName = track.title || track.name;
                        const artists = Array.isArray(track.artists) ? track.artists.map((artist) => artist?.name).filter(Boolean) : [];
                        const artistName = artists[0] || track.ugcArtistName || null;
                        const album = track.mainAlbum || (Array.isArray(track.albums) ? track.albums[0] : null) || track.album;
                        const albumName = track.albumName || track.albumTitle || album?.title || album?.name || null;
                        const durationValue = track.durationMs ? track.durationMs / 1000 : Number(track.duration);
                        const duration = Number.isFinite(durationValue) && durationValue > 0 ? Math.round(durationValue) : null;
                        if (
                            trackName &&
                            getSetting('useTrackVersion', true) &&
                            typeof track.version === 'string' &&
                            track.version &&
                            track.trackSource !== 'UGC' &&
                            !/^https?:\/\//.test(track.version)
                        ) {
                            trackName = `${trackName} ${track.version}`;
                        }
                        return trackName
                            ? { trackId: track.id == null ? null : String(track.id), trackName, artistName, albumName, artists, duration, track }
                            : null;
                    };

                    const parseLrc = (lyrics) => {
                        try {
                            if (typeof lyrics !== 'string') throw new TypeError('Expected lyrics to be a string');
                            const rows = lyrics.split('\n');
                            const timestampPattern = /\[(\d*:\d*\.?\d*)\]/;
                            const linePattern = new RegExp(`${timestampPattern.source}(.+)`);
                            const offsetMatch = /\[offset\s*:\s*([+-]?\d+(?:\.\d+)?)\]/i.exec(lyrics);
                            const offsetSeconds = offsetMatch ? Number.parseFloat(offsetMatch[1]) / 1000 : 0;
                            const timedRows = rows.filter((row) => row && new RegExp(`${linePattern.source}|${timestampPattern.source}`).test(row));
                            const lines = [];
                            for (let index = 0; index < timedRows.length; index += 1) {
                                const current = linePattern.exec(timedRows[index]);
                                if (!current) continue;
                                const next = index + 1 < timedRows.length ? timestampPattern.exec(timedRows[index + 1]) : null;
                                const fromSec = nq(current[1]);
                                const toSec = nq(next?.[1]);
                                if (typeof fromSec !== 'number' || Number.isNaN(fromSec)) continue;
                                lines.push({
                                    text: (current[2] || '').trim(),
                                    fromSec: Math.max(0, fromSec + offsetSeconds),
                                    toSec: typeof toSec === 'number' && !Number.isNaN(toSec) ? Math.max(0, toSec + offsetSeconds) : undefined,
                                });
                            }
                            return lines;
                        } catch (_error) {
                            return [];
                        }
                    };

                    const normalizePlaceholderText = (value) => (typeof value === 'string' ? value.trim().replace(/\s+/g, '') : '');
                    const isPlaceholderText = (value) => {
                        const normalized = normalizePlaceholderText(value);
                        return Boolean(normalized && !normalized.replace(/[.\-–—]/g, ''));
                    };
                    const isPlaceholderSynced = (lines) =>
                        Array.isArray(lines) && lines.length > 0 && lines.every((line) => !normalizePlaceholderText(line?.text).replace(/[.\-–—]/g, ''));

                    const plainFromSynced = (lyrics) => {
                        if (typeof lyrics !== 'string' || !lyrics) return null;
                        const lines = lyrics
                            .split('\n')
                            .map((line) => line.replace(/\[[^\]]*]/g, '').trim())
                            .filter(Boolean);
                        return lines.length ? lines.join('\n') : null;
                    };

                    const normalizeSyncedTiming = (lines, duration) => {
                        if (!Array.isArray(lines) || !lines.length || typeof duration !== 'number' || duration <= 0) return lines;
                        const last = lines.at(-1);
                        const lastTime = typeof last?.toSec === 'number' ? last.toSec : last?.fromSec;
                        if (typeof lastTime !== 'number' || lastTime <= duration + 1) return lines;
                        const shift = duration - lastTime;
                        return lines.map((line) => ({
                            text: line.text,
                            fromSec: typeof line.fromSec === 'number' ? Math.max(0, line.fromSec + shift) : line.fromSec,
                            toSec: typeof line.toSec === 'number' ? Math.max(0, line.toSec + shift) : line.toSec,
                        }));
                    };

                    const enqueueRequest = (request) => {
                        const generation = queueGeneration;
                        const queued = requestChain.then(async () => {
                            if (generation !== queueGeneration) return null;
                            const waitMs = REQUEST_INTERVAL_MS - (Date.now() - lastRequestAt);
                            if (waitMs > 0) await new Promise((resolve) => setTimeout(resolve, waitMs));
                            if (generation !== queueGeneration) return null;
                            lastRequestAt = Date.now();
                            return request();
                        });
                        requestChain = queued.catch(() => null);
                        return queued;
                    };

                    const fetchExactLyrics = (lookup, isSyncedRequest) =>
                        enqueueRequest(async () => {
                            const query = new URLSearchParams({
                                track_name: lookup.trackName,
                                artist_name: lookup.artistName,
                                album_name: lookup.albumName,
                                duration: String(lookup.duration),
                            });
                            const controller = new AbortController();
                            const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
                            requestControllers.add(controller);
                            try {
                                const response = await fetch(`${GET_API_URL}?${query.toString()}`, { signal: controller.signal });
                                if (!response.ok) return { item: null, aborted: false };
                                const payload = await response.json();
                                debug(isSyncedRequest ? 'sync response' : 'response', {
                                    count: payload && typeof payload === 'object' && !Array.isArray(payload) ? 1 : 0,
                                });
                                return {
                                    item: payload && typeof payload === 'object' && !Array.isArray(payload) ? payload : null,
                                    aborted: false,
                                };
                            } catch (error) {
                                const aborted = error?.name === 'AbortError';
                                debug(
                                    isSyncedRequest
                                        ? aborted
                                            ? 'sync request aborted'
                                            : 'sync request failed'
                                        : aborted
                                          ? 'request aborted'
                                          : 'request failed',
                                    aborted ? undefined : error,
                                );
                                return { item: null, aborted };
                            } finally {
                                requestControllers.delete(controller);
                                clearTimeout(timeout);
                            }
                        });

                    const fetchSearchResults = (trackName, artistName, isSyncedRequest) =>
                        enqueueRequest(async () => {
                            const query = new URLSearchParams({ track_name: trackName });
                            if (artistName) query.set('artist_name', artistName);
                            const controller = new AbortController();
                            const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
                            requestControllers.add(controller);
                            try {
                                const response = await fetch(`${SEARCH_API_URL}?${query.toString()}`, { signal: controller.signal });
                                if (!response.ok) return { items: null, aborted: false };
                                const payload = await response.json();
                                debug(isSyncedRequest ? 'sync response' : 'response', {
                                    count: Array.isArray(payload) ? payload.length : 0,
                                });
                                return { items: Array.isArray(payload) && payload.length ? payload : null, aborted: false };
                            } catch (error) {
                                const aborted = error?.name === 'AbortError';
                                debug(
                                    isSyncedRequest
                                        ? aborted
                                            ? 'sync request aborted'
                                            : 'sync request failed'
                                        : aborted
                                          ? 'request aborted'
                                          : 'request failed',
                                    aborted ? undefined : error,
                                );
                                return { items: null, aborted };
                            } finally {
                                requestControllers.delete(controller);
                                clearTimeout(timeout);
                            }
                        });

                    const retryAborted = async (request, generation) => {
                        let response = await request();
                        if (response?.aborted && generation === queueGeneration) response = (await request()) || response;
                        return response;
                    };

                    const searchPlainLyricsBySignature = async (lookup) => {
                        const generation = queueGeneration;
                        const isStale = () => generation !== queueGeneration;
                        const request = (trackName, artistName) => retryAborted(() => fetchSearchResults(trackName, artistName, false), generation);
                        const allowTitleOnlyFallback = getSetting('useTitleOnlyFallback', true);
                        const normalizedTitles = allowTitleOnlyFallback
                            ? getTitleVariants(lookup.trackName).map(normalizeSignaturePart).filter(Boolean)
                            : [];
                        let artistAttempt = lookup.trackName && lookup.artistName ? await request(lookup.trackName, lookup.artistName) : null;
                        if (isStale()) return null;
                        let resultsWithArtist = artistAttempt?.items || null;
                        let usedLooseQuery = false;
                        let fallbackAttempt =
                            resultsWithArtist || !lookup.trackName || !allowTitleOnlyFallback ? null : await request(lookup.trackName, null);
                        if (isStale()) return null;
                        let results = resultsWithArtist || fallbackAttempt?.items || null;
                        if (!resultsWithArtist && fallbackAttempt?.items) usedLooseQuery = true;

                        if (!results && lookup.trackName) {
                            const split = splitTrackTitle(lookup.trackName);
                            if (split) {
                                if (!results && split.right && split.left) {
                                    const attempt = await request(split.right, split.left);
                                    if (isStale()) return null;
                                    results = attempt?.items || null;
                                }
                                if (!results && split.right && allowTitleOnlyFallback) {
                                    const attempt = await request(split.right, null);
                                    if (isStale()) return null;
                                    results = attempt?.items || null;
                                    if (results) usedLooseQuery = true;
                                }
                                if (!results && split.left && split.right) {
                                    const attempt = await request(split.left, split.right);
                                    if (isStale()) return null;
                                    results = attempt?.items || null;
                                }
                                if (!results && split.left && allowTitleOnlyFallback) {
                                    const attempt = await request(split.left, null);
                                    if (isStale()) return null;
                                    results = attempt?.items || null;
                                    if (results) usedLooseQuery = true;
                                }
                            }
                        }

                        if (!results) return null;
                        if (usedLooseQuery && normalizedTitles.length)
                            results = results.filter((item) =>
                                normalizedTitles.includes(normalizeSignaturePart(item.trackName || item.track_name || item.title || item.name)),
                            );
                        debug('filtered', { count: results.length, usedArtist: !usedLooseQuery });
                        results = results.filter((item) => !item.instrumental && (item.plainLyrics || item.syncedLyrics));
                        if (!results.length) return null;

                        if (lookup.duration && lookup.duration > 0) {
                            const withDuration = results.filter((item) => typeof item.duration === 'number');
                            if (withDuration.length) {
                                const closeMatches = withDuration.filter((item) => Math.abs(item.duration - lookup.duration) <= 10);
                                if (!closeMatches.length) return null;
                                results = closeMatches;
                            }
                        }

                        let selected = results[0];
                        if (lookup.duration && lookup.duration > 0) {
                            selected =
                                results
                                    .map((item) => ({ item, delta: Math.abs(item.duration - lookup.duration) }))
                                    .sort((left, right) => left.delta - right.delta)[0]?.item || selected;
                        }
                        debug('selected', {
                            id: selected?.id,
                            duration: selected?.duration,
                            hasPlain: Boolean(selected?.plainLyrics),
                            hasSynced: Boolean(selected?.syncedLyrics),
                        });
                        return selected;
                    };

                    const searchSyncedLyricsBySignature = async (lookup) => {
                        const generation = queueGeneration;
                        const isStale = () => generation !== queueGeneration;
                        const request = (trackName, artistName) => retryAborted(() => fetchSearchResults(trackName, artistName, true), generation);
                        const allowTitleOnlyFallback = getSetting('useTitleOnlyFallback', true);
                        const variants = [...new Set(getTitleVariants(lookup.trackName).filter(Boolean))];
                        let results = null;

                        for (const variant of variants) {
                            const attempt = await request(variant, lookup.artistName);
                            if (isStale()) return null;
                            if (attempt?.items) {
                                results = attempt.items;
                                break;
                            }
                        }
                        if (!results && allowTitleOnlyFallback) {
                            for (const variant of variants) {
                                const attempt = await request(variant, null);
                                if (isStale()) return null;
                                if (attempt?.items) {
                                    results = attempt.items;
                                    break;
                                }
                            }
                        }
                        if (!results) return null;

                        results = results.filter((item) => item && !item.instrumental && item.syncedLyrics);
                        if (!results.length) return null;
                        if (lookup.artistName) {
                            const wantedArtist = normalizeSignaturePart(lookup.artistName);
                            const closeMatches = results.filter((item) => {
                                const artist = normalizeSignaturePart(item.artistName);
                                return artist === wantedArtist || artist.includes(wantedArtist);
                            });
                            if (!closeMatches.length && !allowTitleOnlyFallback) return null;
                            if (closeMatches.length) results = closeMatches;
                        }
                        if (lookup.duration && lookup.duration > 0) {
                            const withDuration = results.filter((item) => typeof item.duration === 'number');
                            if (withDuration.length) {
                                const closeMatches = withDuration.filter((item) => Math.abs(item.duration - lookup.duration) <= 10);
                                if (!closeMatches.length) return null;
                                results = closeMatches;
                            }
                        }
                        let selected = results[0];
                        if (lookup.duration && lookup.duration > 0) {
                            selected =
                                results
                                    .map((item) => ({ item, delta: Math.abs(item.duration - lookup.duration) }))
                                    .sort((left, right) => left.delta - right.delta)[0]?.item || selected;
                        }
                        return selected;
                    };

                    const searchLyricsBySignature = (lookup, isSyncedRequest) =>
                        isSyncedRequest ? searchSyncedLyricsBySignature(lookup) : searchPlainLyricsBySignature(lookup);

                    const fetchLookup = async (lookup, lookupMode, isSyncedRequest) => {
                        if (lookupMode === 'search') return { item: await searchLyricsBySignature(lookup, isSyncedRequest), aborted: false };
                        return retryAborted(() => fetchExactLyrics(lookup, isSyncedRequest), queueGeneration);
                    };

                    const getLyricsBySignature = async (source, requestKind) => {
                        const isSyncedRequest = requestKind === 'sync';
                        if (!isEnabled()) return null;
                        const lookup = source?.trackName ? source : buildTrackLookup(source);
                        const lookupMode = getLookupMode();
                        const missingRequiredFields =
                            !lookup?.trackName ||
                            (lookupMode === 'get' && (!lookup.artistName || !lookup.albumName || !lookup.duration));
                        if (missingRequiredFields) {
                            if (!isSyncedRequest)
                                debug('skip empty cache key', {
                                    trackName: lookup?.trackName,
                                    artistName: lookup?.artistName,
                                    duration: lookup?.duration,
                                });
                            return null;
                        }
                        const cacheKey = [
                            lookupMode,
                            lookupMode === 'search' ? requestKind : 'shared',
                            lookup.trackName,
                            lookup.artistName,
                            lookupMode === 'get' ? lookup.albumName : null,
                        ]
                            .map(normalizeSignaturePart)
                            .concat(String(lookup.duration))
                            .join('|');
                        const cached = readCache(signatureResults, cacheKey);
                        if (cached) {
                            if (!isSyncedRequest) debug('cache hit', { key: cacheKey });
                            return cached;
                        }
                        if (readCache(signatureMisses, cacheKey)) {
                            if (!isSyncedRequest) debug('cache no-result hit', { key: cacheKey });
                            return null;
                        }
                        if (signaturesInFlight.has(cacheKey)) return signaturesInFlight.get(cacheKey);
                        if (!isSyncedRequest)
                            debug('search', {
                                trackName: lookup.trackName,
                                artistName: lookup.artistName,
                                duration: lookup.duration,
                            });
                        const requestGeneration = queueGeneration;
                        const promise = (async () => {
                            try {
                                const response = await fetchLookup(lookup, lookupMode, isSyncedRequest);
                                if (requestGeneration !== queueGeneration) return null;
                                const item = response?.item;
                                if (lookupMode === 'get' && !isSyncedRequest)
                                    debug('filtered', { count: item && !item.instrumental ? 1 : 0, usedArtist: true });
                                if (item && !item.instrumental) {
                                    signatureMisses.delete(cacheKey);
                                    writeCache(signatureResults, cacheKey, item, RESULT_TTL_MS);
                                    if (lookupMode === 'get' && !isSyncedRequest)
                                        debug('selected', {
                                            id: item.id,
                                            duration: item.duration,
                                            hasPlain: Boolean(item.plainLyrics),
                                            hasSynced: Boolean(item.syncedLyrics),
                                        });
                                    return item;
                                }
                                writeCache(signatureMisses, cacheKey, true, NO_RESULT_TTL_MS);
                                return null;
                            } catch (error) {
                                debug(isSyncedRequest ? 'sync search failed' : 'search failed', error);
                                return null;
                            }
                        })();
                        signaturesInFlight.set(cacheKey, promise);
                        promise.finally(() => {
                            if (signaturesInFlight.get(cacheKey) === promise) signaturesInFlight.delete(cacheKey);
                        });
                        return promise;
                    };

                    const providerResult = (item, lookup, data) => ({
                        provider: PROVIDER,
                        externalLyricId: item?.id == null ? null : String(item.id),
                        writers: lookup.artists,
                        ...data,
                    });

                    const resolvePlain = async (source) => {
                        const lookup = buildTrackLookup(source);
                        if (!lookup) return null;
                        const item = await getLyricsBySignature(lookup, 'plain');
                        const lyrics = item?.plainLyrics || plainFromSynced(item?.syncedLyrics);
                        return lyrics && !isPlaceholderText(lyrics) ? providerResult(item, lookup, { lyrics }) : null;
                    };

                    const resolveSynced = async (source) => {
                        const lookup = buildTrackLookup(source);
                        if (!lookup) return null;
                        const trackId = lookup.trackId;
                        if (trackId) {
                            const cached = readCache(syncedByTrackId, trackId);
                            if (cached) return cached;
                            if (readCache(syncedMissesByTrackId, trackId)) return null;
                            if (syncedInFlightByTrackId.has(trackId)) return syncedInFlightByTrackId.get(trackId);
                        }
                        const requestGeneration = queueGeneration;
                        const promise = (async () => {
                            const item = await getLyricsBySignature(lookup, 'sync');
                            if (requestGeneration !== queueGeneration) return null;
                            const lines = normalizeSyncedTiming(parseLrc(item?.syncedLyrics), lookup.duration);
                            const result = lines.length && !isPlaceholderSynced(lines) ? providerResult(item, lookup, { lines }) : null;
                            if (trackId) {
                                if (result) {
                                    syncedMissesByTrackId.delete(trackId);
                                    writeCache(syncedByTrackId, trackId, result, RESULT_TTL_MS);
                                } else writeCache(syncedMissesByTrackId, trackId, true, NO_RESULT_TTL_MS);
                            }
                            return result;
                        })();
                        if (trackId) {
                            syncedInFlightByTrackId.set(trackId, promise);
                            promise.finally(() => {
                                if (syncedInFlightByTrackId.get(trackId) === promise) syncedInFlightByTrackId.delete(trackId);
                            });
                        }
                        return promise;
                    };

                    const getNextQueueTrackMeta = (sonataRuntime) => {
                        try {
                            if (!sonataRuntime?.state) {
                                logSyncPrefetch('next-miss', { reason: 'sonata-state' });
                                return null;
                            }
                            const queue = sonataRuntime?.state?.queueState;
                            const currentIndex = queue?.index?.value;
                            const order = queue?.order?.value;
                            const entities = queue?.entityList?.value;
                            if (!Array.isArray(entities)) {
                                logSyncPrefetch('next-miss', { reason: 'entityList' });
                                return null;
                            }
                            const nextIndex = Array.isArray(order) && typeof currentIndex === 'number' ? order[currentIndex + 1] : null;
                            if (Array.isArray(order) && typeof currentIndex === 'number')
                                logSyncPrefetch('next-from-order', { queueIndex: currentIndex, nextIndex });
                            if (typeof nextIndex !== 'number') {
                                logSyncPrefetch('next-miss', { reason: 'nextIndex' });
                                return null;
                            }
                            const queueItem = entities[nextIndex];
                            if (!queueItem || (0, nU.Re)(queueItem) || !queueItem.entity) {
                                logSyncPrefetch('next-miss', { reason: 'entityAtIndex', nextIndex });
                                return null;
                            }
                            const track = nF(queueItem.entity);
                            logSyncPrefetch('next-hit', { nextIndex, trackId: track?.id });
                            return track;
                        } catch (error) {
                            logSyncPrefetch('next-error', { error: error?.message });
                            return null;
                        }
                    };

                    const prefetchSynced = async (source, currentTrackId, retry = 0, existingPrefetchId = null) => {
                        const prefetchId = existingPrefetchId ?? ++prefetchSequence;
                        const track = unwrapTrackMeta(source);
                        logSyncPrefetch('start', { prefetchId, retry, explicitTrackId: track?.id });
                        const trackId = track?.id == null ? null : String(track.id);
                        if (!trackId) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'track-id' });
                            return null;
                        }
                        if (track.hasSyncLyrics || track.isSyncLyricsAvailable || track.isSyncLyricsAvailableWithOfflineFeature) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'native-sync-available', trackId });
                            return null;
                        }
                        const cached = readCache(syncedByTrackId, trackId);
                        if (cached) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'cached', trackId });
                            return cached;
                        }
                        const noResultEntry = syncedMissesByTrackId.get(trackId);
                        if (readCache(syncedMissesByTrackId, trackId)) {
                            logSyncPrefetch('skip', {
                                prefetchId,
                                reason: 'no-result-cached',
                                trackId,
                                ageMs: noResultEntry ? Math.max(0, NO_RESULT_TTL_MS - (noResultEntry.expiresAt - Date.now())) : undefined,
                            });
                            return null;
                        }
                        if (syncedInFlightByTrackId.has(trackId)) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'inflight', trackId });
                            return syncedInFlightByTrackId.get(trackId);
                        }
                        if (currentTrackId != null && trackId === String(currentTrackId)) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'current-track', trackId });
                            return null;
                        }
                        const lookup = buildTrackLookup(track);
                        if (!lookup?.trackName) {
                            logSyncPrefetch('skip', { prefetchId, reason: 'lookup-missing', trackId });
                            return null;
                        }
                        try {
                            const result = await resolveSynced(track);
                            logSyncPrefetch('fetch-done', {
                                prefetchId,
                                trackId,
                                hasResult: Boolean(result),
                                hasSynced: Boolean(result?.lines?.length),
                            });
                            return result;
                        } catch (error) {
                            logSyncPrefetch('fetch-error', { prefetchId, trackId, error: error?.message });
                            return null;
                        }
                    };

                    const prefetchNext = (sonataRuntime, currentTrackId, retry = 0) => {
                        const track = getNextQueueTrackMeta(sonataRuntime);
                        const prefetchId = ++prefetchSequence;
                        if (track) return prefetchSynced(track, currentTrackId, retry, prefetchId);
                        logSyncPrefetch('start', { prefetchId, retry, explicitTrackId: undefined });
                        if (retry >= 6) {
                            logSyncPrefetch('stop-no-next', { prefetchId, retry });
                            return Promise.resolve(null);
                        }
                        if (prefetchRetryTimer) clearTimeout(prefetchRetryTimer);
                        logSyncPrefetch('retry-scheduled', { prefetchId, retry: retry + 1 });
                        return new Promise((resolve) => {
                            prefetchRetryTimer = setTimeout(() => {
                                prefetchRetryTimer = null;
                                resolve(prefetchNext(sonataRuntime, currentTrackId, retry + 1));
                            }, 250 * (retry + 1));
                        });
                    };

                    const reset = () => {
                        queueGeneration += 1;
                        debug('reset queue', { token: queueGeneration });
                        requestChain = Promise.resolve();
                        lastRequestAt = 0;
                        requestControllers.forEach((controller) => controller.abort());
                        requestControllers.clear();
                        signatureResults.clear();
                        signatureMisses.clear();
                        signaturesInFlight.clear();
                        syncedByTrackId.clear();
                        syncedMissesByTrackId.clear();
                        syncedInFlightByTrackId.clear();
                        if (prefetchRetryTimer) clearTimeout(prefetchRetryTimer);
                        prefetchRetryTimer = null;
                    };

                    window.desktopEvents?.on?.('NATIVE_STORE_UPDATE', (_event, key) => {
                        if (typeof key === 'string' && key.startsWith('modSettings.lrclib.')) reset();
                    });

                    return {
                        provider: PROVIDER,
                        isEnabled,
                        buildTrackLookup,
                        parseLrc,
                        isPlaceholderText,
                        isPlaceholderSynced,
                        resolvePlain,
                        resolveSynced,
                        prefetchSynced,
                        prefetchNext,
                        getNextQueueTrackMeta,
                        logSyncPrefetch,
                        hasSyncedLyrics: (trackId) => Boolean(trackId != null && readCache(syncedByTrackId, String(trackId))),
                        hasSyncedNoResult: (trackId) => Boolean(trackId != null && readCache(syncedMissesByTrackId, String(trackId))),
                        isSyncedLoading: (trackId) => Boolean(trackId != null && syncedInFlightByTrackId.has(String(trackId))),
                        reset,
                    };
                })(),
                nz = f.gK.model('SyncLyricsLine', { text: f.gK.string, fromSec: f.gK.number, toSec: f.gK.maybe(f.gK.number) }).views((e) => ({
                    get key() {
                        return ''.concat(e.fromSec, ':').concat(e.toSec);
                    },
                })),
                nQ = f.gK
                    .compose(
                        f.gK.model('SyncLyrics', {
                            isVisible: f.gK.optional(f.gK.boolean, !1),
                            lines: f.gK.maybeNull(f.gK.array(nz)),
                            major: f.gK.maybeNull(nJ),
                            writers: f.gK.maybeNull(f.gK.array(f.gK.string)),
                            lyricId: f.gK.maybeNull(f.gK.number),
                            externalLyricId: f.gK.maybeNull(f.gK.string),
                            currentTrackId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            hasLyricsViewed: f.gK.optional(f.gK.boolean, !1),
                        }),
                        V.X,
                    )
                    .volatile(() => ({ requestToken: 0 }))
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
                            var l;
                            return !!(e.isResolved && (null == (l = e.lines) ? void 0 : l.length) === 0);
                        },
                        hasLyricsForTrack(trackId) {
                            const requestedTrackId = trackId == null ? null : String(trackId);
                            const currentTrackId = e.currentTrackId == null ? null : String(e.currentTrackId);
                            return Boolean(
                                requestedTrackId &&
                                    ((currentTrackId === requestedTrackId && e.isResolved && Array.isArray(e.lines) && e.lines.length > 0) ||
                                        pulseSyncLrclib.hasSyncedLyrics(requestedTrackId)),
                            );
                        },
                        isLoadingForTrack(trackId) {
                            const requestedTrackId = trackId == null ? null : String(trackId);
                            const currentTrackId = e.currentTrackId == null ? null : String(e.currentTrackId);
                            return Boolean(
                                requestedTrackId &&
                                    ((currentTrackId === requestedTrackId && e.isLoading) || pulseSyncLrclib.isSyncedLoading(requestedTrackId)),
                            );
                        },
                    }))
                    .actions((e) => {
                        const isStaleRequest = (requestToken, trackId) =>
                            requestToken !== e.requestToken || String(e.currentTrackId) !== String(trackId);
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
                            prefetchTrack: (0, f.L3)(function* (trackMeta) {
                                if (!trackMeta) return null;
                                return yield pulseSyncLrclib.prefetchSynced(trackMeta, e.currentTrackId);
                            }),
                            prefetchNextTrack: (0, f.L3)(function* (sonataRuntime) {
                                return yield pulseSyncLrclib.prefetchNext(sonataRuntime, e.currentTrackId);
                            }),
                            getData: (0, f.L3)(function* (a) {
                                let { tracksResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                if (!a || (e.isLoading && String(e.currentTrackId) === String(a))) return;
                                const requestToken = ++e.requestToken;
                                let nativeError = new Error('Sync lyrics are not available');
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    e.currentTrackId = a;
                                    e.hasLyricsViewed = !1;
                                    e.lines = null;
                                    e.major = null;
                                    e.externalLyricId = null;
                                    e.lyricId = null;
                                    e.writers = (0, f.wg)([]);
                                    const { sonataState } = (0, R.M)(e);
                                    const trackMeta = sonataState?.entityMeta;
                                    if (trackMeta?.hasSyncLyrics) {
                                        const nativeLyrics = yield i.getLyrics(n$(a, u.LRC));
                                        if (isStaleRequest(requestToken, a)) return;
                                        if (!nativeLyrics?.downloadUrl) throw nativeError;
                                        const lines = yield t.downloadSyncLyrics(nativeLyrics.downloadUrl, requestToken, a);
                                        if (isStaleRequest(requestToken, a)) return;
                                        if (!lines?.length || pulseSyncLrclib.isPlaceholderSynced(lines)) throw nativeError;
                                        e.major = nH(nativeLyrics.major);
                                        e.externalLyricId = nativeLyrics.externalLyricId;
                                        e.lyricId = nativeLyrics.lyricId;
                                        e.writers = (0, f.wg)(nativeLyrics.writers || []);
                                        e.lines = (0, f.wg)(lines);
                                        pulseSyncLrclib.logSyncPrefetch('trigger-from-getData', { reason: 'resolved-native', trackId: a });
                                        e.loadingState = ev.G.RESOLVE;
                                        return;
                                    }
                                    throw nativeError;
                                } catch (error) {
                                    nativeError = error;
                                }
                                const { sonataState } = (0, R.M)(e);
                                const trackMeta = sonataState?.entityMeta;
                                if (pulseSyncLrclib.hasSyncedNoResult(a))
                                    pulseSyncLrclib.logSyncPrefetch('fallback-skip', { reason: 'no-result-cached', trackId: String(a) });
                                const fallback = yield pulseSyncLrclib.resolveSynced(trackMeta);
                                if (isStaleRequest(requestToken, a)) return;
                                if (fallback?.lines?.length) {
                                    e.major = nH(fallback.provider);
                                    e.externalLyricId = fallback.externalLyricId;
                                    e.lyricId = null;
                                    e.writers = (0, f.wg)(fallback.writers || []);
                                    e.hasLyricsViewed = !0;
                                    e.lines = (0, f.wg)(fallback.lines);
                                    pulseSyncLrclib.logSyncPrefetch('trigger-from-getData', { reason: 'resolved-lrclib', trackId: a });
                                    e.loadingState = ev.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = ev.G.REJECT;
                                pulseSyncLrclib.logSyncPrefetch('trigger-from-getData', { reason: 'reject-no-fallback', trackId: a });
                                l.error(nativeError);
                            }),
                            downloadSyncLyrics: (0, f.L3)(function* (t, requestToken, trackId) {
                                let { prefixlessResource: a } = (0, f._$)(e),
                                    i = yield a.getLyricsText(t);
                                if (trackId != null && String(e.currentTrackId) !== String(trackId)) return null;
                                if (typeof requestToken === 'number' && requestToken !== e.requestToken) return null;
                                return pulseSyncLrclib.parseLrc(i);
                            }),
                            sendViews: (0, f.L3)(function* (t) {
                                let { contextId: a, contextType: i } = t,
                                    { lyricViewsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState === ev.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield l.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, nW.A)(),
                                                    trackId: e.currentTrackId,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: u.LRC,
                                                    albumId: i === nl.K.Album && a ? a : void 0,
                                                    playlistId: i === nl.K.Playlist && a ? a : void 0,
                                                },
                                            ],
                                        }),
                                            (e.hasLyricsViewed = !0);
                                    } catch (e) {
                                        r.error(e);
                                    }
                            }),
                        };
                        return t;
                    }),
                nZ = f.gK
                    .model('FullscreenPlayer', {
                        mode: f.gK.maybeNull(f.gK.enumeration(Object.values(nM.u))),
                        shouldRestoreSyncLyrics: f.gK.optional(f.gK.boolean, !1),
                        lastAutoHiddenSyncTrackId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                        syncLyrics: nQ,
                        playQueue: nj,
                        modal: rw.q,
                    })
                    .views((e) => ({
                        get isSplitMode() {
                            return this.isPlayQueueMode || this.isSyncLyricsMode;
                        },
                        get isSyncLyricsMode() {
                            var t;
                            let { sonataState: a } = (0, R.M)(e);
                            const track = null == a ? void 0 : a.entityMeta;
                            const trackId = track?.id;
                            return (
                                e.mode === nM.u.SYNC_LYRICS &&
                                Boolean(
                                    track?.isSyncLyricsAvailable ||
                                        track?.isSyncLyricsAvailableWithOfflineFeature ||
                                        track?.hasSyncLyrics ||
                                        (trackId && e.syncLyrics.hasLyricsForTrack(trackId)),
                                )
                            );
                        },
                        get isPlayQueueMode() {
                            return e.mode === nM.u.PLAY_QUEUE;
                        },
                    }))
                    .actions((e) => ({
                        setMode(t) {
                            e.mode = t;
                            if (t !== nM.u.SYNC_LYRICS) {
                                e.shouldRestoreSyncLyrics = !1;
                                e.lastAutoHiddenSyncTrackId = null;
                            }
                        },
                        showFullscreenPlayerModal() {
                            e.syncLyrics.setInvisible(), e.modal.open();
                        },
                        showSyncLyrics() {
                            e.shouldRestoreSyncLyrics = !1;
                            e.lastAutoHiddenSyncTrackId = null;
                            e.mode = nM.u.SYNC_LYRICS;
                            const { sonataState } = (0, R.M)(e);
                            const trackId = sonataState?.entityMeta?.id;
                            e.syncLyrics.setVisible();
                            if (trackId && !e.syncLyrics.hasLyricsForTrack(trackId) && !e.syncLyrics.isLoadingForTrack(trackId)) e.syncLyrics.getData(trackId);
                            e.modal.isOpened || e.modal.open();
                        },
                        hideSyncLyrics() {
                            e.shouldRestoreSyncLyrics = !1;
                            e.lastAutoHiddenSyncTrackId = null;
                            e.mode = null;
                            e.syncLyrics.setInvisible();
                        },
                        autoHideSyncLyrics(trackId) {
                            if (e.mode === nM.u.SYNC_LYRICS) {
                                e.shouldRestoreSyncLyrics = !0;
                                e.lastAutoHiddenSyncTrackId = trackId == null ? null : String(trackId);
                            }
                            e.mode = null;
                            e.syncLyrics.setInvisible();
                        },
                        restoreSyncLyricsForTrack(trackId) {
                            const currentTrackId = trackId == null ? null : String(trackId);
                            const hiddenTrackId = e.lastAutoHiddenSyncTrackId == null ? null : String(e.lastAutoHiddenSyncTrackId);
                            if (!e.shouldRestoreSyncLyrics || !currentTrackId || currentTrackId === hiddenTrackId) return;
                            if (!e.modal.isOpened || !e.syncLyrics.hasLyricsForTrack(currentTrackId)) {
                                if (!e.modal.isOpened) {
                                    e.shouldRestoreSyncLyrics = !1;
                                    e.lastAutoHiddenSyncTrackId = null;
                                }
                                return;
                            }
                            e.shouldRestoreSyncLyrics = !1;
                            e.lastAutoHiddenSyncTrackId = null;
                            e.mode = nM.u.SYNC_LYRICS;
                            e.syncLyrics.setVisible();
                        },
                        showPlayQueue() {
                            e.shouldRestoreSyncLyrics = !1;
                            e.lastAutoHiddenSyncTrackId = null;
                            (e.mode = nM.u.PLAY_QUEUE), e.playQueue.setVisible(), e.modal.isOpened || e.modal.open();
                        },
                        hidePlayQueue() {
                            (e.mode = null), e.playQueue.setInvisible();
                        },
                        isModeActive: (t) => e.mode === t,
                        reset() {
                            e.mode = null;
                            e.shouldRestoreSyncLyrics = !1;
                            e.lastAutoHiddenSyncTrackId = null;
                        },
                    })),
                n0 = f.gK.model('QualitySettings', { modal: rw.q });
            var n1 = a(86882);
            let n3 = f.gK.model('UtmLink', {
                    utmSource: f.gK.maybe(f.gK.string),
                    utmCampaign: f.gK.maybe(f.gK.string),
                    utmMedium: f.gK.maybe(f.gK.string),
                    utmTerm: f.gK.maybe(f.gK.string),
                    yclid: f.gK.maybe(f.gK.string),
                }),
                n2 = (e, t) => {
                    let a = (0, eR.v)(e, t);
                    if (null == t ? void 0 : t.albumId) {
                        var i, l;
                        let e = a.albums.find((e) => String(e.id) === String(t.albumId));
                        return {
                            ...a,
                            isBest: null == e || null == (i = e.bestAlbumTracks) ? void 0 : i.includes(Number(a.id)),
                            positionInAlbum: null == e || null == (l = e.trackPosition) ? void 0 : l.index,
                        };
                    }
                    return (0, f.wg)({ ...a });
                };
            var n6 = a(59170);
            let n4 = f.gK
                    .model('TrailerMeta', {
                        id: f.gK.string,
                        url: f.gK.string,
                        title: f.gK.maybe(f.gK.string),
                        uuid: f.gK.maybe(f.gK.string),
                        coverUri: f.gK.maybe(f.gK.string),
                        averageColor: f.gK.maybe(f.gK.string),
                        albumArtists: f.gK.maybe(f.gK.array(es.P)),
                        albumType: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        getSharingProps(t) {
                            switch (t) {
                                case n6.H.ALBUM:
                                    return { pattern: '/album/:albumId', params: { albumId: e.id } };
                                case n6.H.ARTIST:
                                    return { pattern: '/artist/:artistId', params: { artistId: e.id } };
                                case n6.H.PLAYLIST:
                                    return { pattern: '/playlists/:playlistUuid', params: { playlistUuid: e.uuid } };
                                case n6.H.TRACK:
                                    return { pattern: '/track/:trackId', params: { trackId: e.id } };
                                default:
                                    return { pattern: t5.Z.main.href, params: {} };
                            }
                        },
                    })),
                n5 = f.gK
                    .model('TrailerState', {
                        contextType: f.gK.maybeNull(f.gK.enumeration(Object.values(nl.K))),
                        contextId: f.gK.maybeNull(f.gK.string),
                        entityMeta: f.gK.maybeNull(nx),
                        status: f.gK.enumeration(Object.values(nU.MT)),
                    })
                    .actions((e) => ({
                        setContextId: (t) => {
                            e.contextId = String(t);
                        },
                        setContextType: (t) => {
                            e.contextType = t;
                        },
                        setEntityMeta: (t) => {
                            t && t.data.meta && (e.entityMeta = nF(t));
                        },
                        setStatus: (t) => {
                            e.status = t;
                        },
                    })),
                n9 = U.v.props({ isBest: f.gK.maybe(f.gK.boolean), positionInAlbum: f.gK.maybe(f.gK.number) }).named('TrailerTrack'),
                n7 = f.gK
                    .compose(
                        f.gK.model('Trailer', {
                            id: f.gK.maybeNull(f.gK.string),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            modal: rw.q,
                            variant: f.gK.maybeNull(f.gK.enumeration(Object.values(n6.H))),
                            tracks: f.gK.maybeNull(f.gK.array(n9)),
                            meta: f.gK.maybeNull(n4),
                            state: n5,
                            withAnimation: f.gK.boolean,
                            shouldAutoStartPlaying: f.gK.boolean,
                            shouldSendEventOnTracksShowed: f.gK.boolean,
                            sonataStatusBeforeTrailerStart: f.gK.enumeration(Object.values(nU.MT)),
                            isManuallyPaused: f.gK.boolean,
                            utmLinkModel: f.gK.maybe(n3),
                            title: f.gK.maybeNull(f.gK.string),
                            shareable: f.gK.maybeNull(f.gK.boolean),
                            personalColor: f.gK.maybeNull(f.gK.number),
                        }),
                        V.X,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.loadingState === ev.G.RESOLVE && (null == (t = e.tracks) ? void 0 : t.length) === 0,
                                i = e.errorStatusCode === O.X1.NOT_FOUND;
                            return a || i;
                        },
                        get objectId() {
                            return ''.concat(e.variant, ':').concat(e.id);
                        },
                        get utmLink() {
                            return e.utmLinkModel && (0, rq.HO)(e.utmLinkModel);
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            setUtmLink(t) {
                                t && (e.utmLinkModel = (0, f.wg)(t));
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
                            setShouldSendEventOnTracksShowed(t) {
                                e.shouldSendEventOnTracksShowed = t;
                            },
                            setIsManuallyPaused(t) {
                                e.isManuallyPaused = t;
                            },
                            isTrailerActive: (t, a) => !!e.modal.isOpened && e.variant === t && e.id === a,
                            openArtistTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(n6.H.ARTIST, a) ||
                                    (t.reset(),
                                    (e.variant = n6.H.ARTIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getArtistTrailer(a));
                            },
                            openAlbumTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(n6.H.ALBUM, String(a)) ||
                                    (t.reset(),
                                    (e.variant = n6.H.ALBUM),
                                    (e.id = String(a)),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getAlbumTrailer(a));
                            },
                            openPlaylistTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(n6.H.PLAYLIST, a) ||
                                    (t.reset(),
                                    (e.variant = n6.H.PLAYLIST),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getPlaylistTrailer(a));
                            },
                            openTrackTrailer(a) {
                                let { sonataState: i } = (0, R.M)(e);
                                t.isTrailerActive(n6.H.TRACK, a) ||
                                    (t.reset(),
                                    (e.variant = n6.H.TRACK),
                                    (e.id = a),
                                    (e.sonataStatusBeforeTrailerStart = i.status),
                                    e.modal.open(),
                                    t.getTrackTrailer(a));
                            },
                            getArtistTrailer: (0, f.L3)(function* (a) {
                                let { artistsResource: i } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let { artist: t, trailer: l } = yield i.getTrailer({ artistId: a });
                                        l.tracks && (e.tracks = (0, f.wg)(l.tracks.map((e) => n2(e, { isSmartPreview: !0 })))),
                                            l.title && (e.title = l.title),
                                            t &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, eI.u)('/artist/:artistId', { params: { artistId: e.id } });
                                                    return (0, f.wg)({
                                                        id: String(e.id),
                                                        url: i,
                                                        title: e.name,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(t)),
                                            (e.loadingState = ev.G.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getAlbumTrailer: (0, f.L3)(function* (a) {
                                let { albumResource: i } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let { album: t, artists: l, trailer: r } = yield i.getTrailer({ albumId: a });
                                        r.tracks && (e.tracks = (0, f.wg)(r.tracks.map((e) => n2(e, { isSmartPreview: !0, albumId: t.id })))),
                                            r.title && (e.title = r.title),
                                            t &&
                                                (e.meta = ((e, t) => {
                                                    var a, i;
                                                    let l = null == t ? void 0 : t.map((e) => (0, $.a)({ artist: e })),
                                                        { href: r } = (0, eI.u)('/album/:albumId', { params: { albumId: e.id } });
                                                    return (0, f.wg)({
                                                        id: String(e.id),
                                                        url: r,
                                                        title: e.title,
                                                        coverUri: null == (a = e.cover) ? void 0 : a.uri,
                                                        averageColor: null == (i = e.cover) ? void 0 : i.color,
                                                        albumArtists: l,
                                                        albumType: e.albumType,
                                                    });
                                                })(t, l)),
                                            (e.loadingState = ev.G.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getPlaylistTrailer: (0, f.L3)(function* (a) {
                                let { usersResource: i } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let { uid: t, kind: l } = (0, n1.I)(a);
                                        if (!t || !l) {
                                            e.loadingState = ev.G.REJECT;
                                            return;
                                        }
                                        let {
                                            playlist: r,
                                            trailer: s,
                                            shareable: n,
                                            personalColor: o,
                                        } = yield i.getPlaylistTrailer({ userId: t, playlistKind: Number(l) });
                                        s.tracks && (e.tracks = (0, f.wg)(s.tracks.map((e) => n2(e, { isSmartPreview: !0 })))),
                                            s.title && (e.title = s.title),
                                            n && (e.shareable = n),
                                            o && (e.personalColor = o),
                                            r &&
                                                (e.meta = ((e) => {
                                                    var t, a;
                                                    let { href: i } = (0, eI.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                                                    return (0, f.wg)({
                                                        id: ''.concat(e.uid, ':').concat(e.kind),
                                                        url: i,
                                                        uuid: e.playlistUuid,
                                                        title: e.title,
                                                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                                                        averageColor: null == (a = e.cover) ? void 0 : a.color,
                                                    });
                                                })(r)),
                                            (e.loadingState = ev.G.RESOLVE);
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            getTrackTrailer: (0, f.L3)(function* (a) {
                                let { tracksResource: i } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let { track: t, title: n } = yield i.getTrailer({ trackId: a });
                                        if ((n && (e.title = n), t)) {
                                            var l, r, s;
                                            (e.tracks = (0, f.wg)([n2(t, { isSmartPreview: !0 })])),
                                                (e.meta = (0, f.wg)({
                                                    id: String(t.id),
                                                    url: ((e, t) => {
                                                        if (!t) {
                                                            let { href: t } = (0, eI.u)('/track/:trackId', { params: { trackId: e } });
                                                            return t;
                                                        }
                                                        let { href: a } = (0, eI.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: e } });
                                                        return a;
                                                    })(t.id, null == (r = t.albums) || null == (l = r[0]) ? void 0 : l.id),
                                                    title: t.title,
                                                    coverUri: t.coverUri,
                                                    averageColor: null == (s = t.derivedColors) ? void 0 : s.average,
                                                }));
                                        }
                                        e.loadingState = ev.G.RESOLVE;
                                    } catch (e) {
                                        t.handleError(e);
                                    }
                            }),
                            handleError(t) {
                                let { modelActionsLogger: a } = (0, f._$)(e);
                                a.error(t),
                                    t instanceof O.GX && (t.statusCode === O.X1.NOT_FOUND || t.statusCode === O.X1.BAD_REQUEST) && (e.errorStatusCode = O.X1.NOT_FOUND),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            },
                            reset() {
                                (e.loadingState = ev.G.IDLE),
                                    (e.errorStatusCode = null),
                                    (e.variant = null),
                                    (e.id = null),
                                    (e.tracks = null),
                                    (e.meta = null),
                                    (e.withAnimation = !0),
                                    (e.shouldAutoStartPlaying = !0),
                                    (e.shouldSendEventOnTracksShowed = !0),
                                    (e.sonataStatusBeforeTrailerStart = nU.MT.IDLE),
                                    (e.isManuallyPaused = !0),
                                    (e.title = null),
                                    (e.shareable = null),
                                    (e.personalColor = null);
                            },
                        };
                        return t;
                    });
            (c || (c = {})).OK = 'ok';
            var n8 = a(8322);
            let oe = f.gK
                .compose(
                    f.gK.model('VibeActions', {
                        meta: f.gK.maybeNull(eg.G),
                        applyingSetting: f.gK.maybeNull(f.gK.string),
                        isApplying: f.gK.boolean,
                        vibeResetLoadingState: f.gK.enumeration(Object.values(ev.G)),
                    }),
                    V.X,
                )
                .views((e) => ({
                    get isMyVibe() {
                        return e.meta && 1 === e.meta.seeds.length && e.meta.seeds[0] === n8.M1;
                    },
                    get isShuffleVibe() {
                        var t;
                        return e.meta && 1 === e.meta.seeds.length && (null == (t = e.meta.seeds[0]) ? void 0 : t.includes(n8.yx));
                    },
                }))
                .actions((e) => ({
                    getLastVibe: (0, f.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, f._$)(e);
                        if (e.loadingState !== ev.G.PENDING)
                            try {
                                e.loadingState = ev.G.PENDING;
                                let a = yield t.waveLast();
                                (e.meta = (0, z.l)(a)), (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.loadingState = ev.G.REJECT);
                            }
                    }),
                    vibeReset: (0, f.L3)(function* () {
                        let { rotorResource: t, modelActionsLogger: a } = (0, f._$)(e);
                        if (e.vibeResetLoadingState !== ev.G.PENDING)
                            try {
                                (e.vibeResetLoadingState = ev.G.PENDING),
                                    (yield t.waveLastReset()) === c.OK && (e.meta = (0, z.l)({ name: '', seeds: [n8.M1] })),
                                    (e.vibeResetLoadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.vibeResetLoadingState = ev.G.REJECT);
                            }
                    }),
                    setApplyingSetting(t) {
                        t ? (e.applyingSetting = (0, f.wg)(t)) : (e.applyingSetting = null);
                    },
                    setIsApplying(t) {
                        e.isApplying = t;
                    },
                    setVibe(t) {
                        e.meta = (0, z.l)(t);
                    },
                    reset() {
                        (e.meta = null), (e.vibeResetLoadingState = ev.G.IDLE), (e.loadingState = ev.G.IDLE);
                    },
                }));
            var ot = a(27515);
            let oa = t7.props({ artists: f.gK.array(es.P), isHiddenFromSonataQueue: f.gK.maybe(f.gK.boolean) }).views((e) => ({
                    get idWithContext() {
                        return String(e.clipId);
                    },
                })),
                oi = f.gK
                    .model('VideoPlayerState', {
                        contextType: f.gK.maybeNull(f.gK.enumeration(Object.values(nl.K))),
                        contextId: f.gK.maybeNull(f.gK.string),
                        entityMeta: f.gK.maybeNull(oa),
                        status: f.gK.enumeration(Object.values(nU.MT)),
                        canMoveForward: f.gK.boolean,
                        canMoveBackward: f.gK.boolean,
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
                                    if (e.data.type !== av.R.Clip) return null;
                                    {
                                        var t;
                                        let a = e.data.meta;
                                        if (!a.clipId) return null;
                                        let i = null == (t = a.artists) ? void 0 : t.map((e) => (0, $.a)({ artist: e })),
                                            { available: l, disclaimers: r } = (0, eX.f)(a);
                                        return (0, f.wg)({
                                            clipId: a.clipId,
                                            title: a.title,
                                            thumbnail: a.thumbnail,
                                            duration: a.duration,
                                            previewUrl: a.previewUrl,
                                            isAvailable: l,
                                            disclaimers: r,
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
                ol = f.gK
                    .compose(
                        f.gK.model('FullscreenVideoPlayer', {
                            modal: rw.q,
                            ids: f.gK.array(f.gK.number),
                            activeIndex: f.gK.maybeNull(f.gK.number),
                            clips: f.gK.array(t8),
                            errorStatusCode: f.gK.maybeNull(f.gK.number),
                            state: oi,
                            sonataStatusBeforeClipStart: f.gK.enumeration(Object.values(nU.MT)),
                            isOpenedFromMain: f.gK.maybeNull(f.gK.boolean),
                            withAnimation: f.gK.boolean,
                        }),
                        V.X,
                        D.p,
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
                                return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.isResolved && 0 === e.clips.length;
                                return e.errorStatusCode === O.X1.NOT_FOUND || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get entitiesData() {
                                return e.ids.map((e) => ({ type: av.R.Clip, meta: { id: e }, loadEntityMeta: !0 }));
                            },
                            get isPlayingSonataStatusBeforeClipStart() {
                                return e.sonataStatusBeforeClipStart === nU.MT.PLAYING;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setIds(t) {
                            e.ids = (0, f.wg)(t);
                        },
                        setClipIndex() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            e.activeIndex = t;
                        },
                        setOpenedFromMain() {
                            (e.isOpenedFromMain = !0), (e.withAnimation = !1);
                        },
                        setAnimationState(t) {
                            e.withAnimation = t;
                        },
                        setSonataStatusBeforeClipStart() {
                            let { sonataState: t } = (0, R.M)(e);
                            e.sonataStatusBeforeClipStart = t.status;
                        },
                        getClips: (0, f.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let a = yield t.getClip({ clipIds: e.ids });
                                    (e.ids = (0, f.wg)(a.map((e) => e.clipId))),
                                        (e.clips = (0, f.wg)(a.map(lq))),
                                        (e.activeIndex = (0, ot.z)(e.ids, e.activeIndex)),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), t instanceof O.GX && (e.errorStatusCode = t.statusCode), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE),
                                (e.activeIndex = null),
                                (e.errorStatusCode = null),
                                (e.isOpenedFromMain = null),
                                (e.withAnimation = !0),
                                (e.sonataStatusBeforeClipStart = nU.MT.IDLE),
                                e.destroyItems([e.ids, e.clips]);
                        },
                    }));
            var or = a(36751),
                os = a(24991),
                on = a(14971),
                oo = a(44240);
            let pulseSyncVibeSettingItem = {
                    id: 'setting',
                    type: os.D.SETTING,
                    style: oo.y.CONTROL,
                    data: {
                        title: 'Настроить Мою волну',
                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/30221/img.6a02b79f69c75168250b2889/%%' },
                    },
                },
                od = (e) => {
                    let t = e.items;
                    if (window.nativeSettings?.get?.('modSettings.vibeAnimationEnhancement.forceOldSettingsInWheel') ?? !1) {
                        t = t.filter((e) => e.type !== os.D.SETTING);
                        let a = t.shift();
                        t = a ? [a, pulseSyncVibeSettingItem, ...t] : [pulseSyncVibeSettingItem];
                    }
                    return t
                    .map((e, t) => {
                        var a, i, l, r;
                        switch (e.type) {
                            case os.D.WAVE:
                                return (0, f.wg)({
                                    id: e.id,
                                    index: t,
                                    type: os.D.WAVE,
                                    style: null != (a = e.style) ? a : oo.y.DEFAULT,
                                    description: e.description,
                                    data: (0, z.l)(e.data.wave, e.data.agent),
                                });
                            case os.D.ALBUM:
                                return (0, f.wg)({
                                    id: e.id,
                                    index: t,
                                    type: os.D.ALBUM,
                                    style: null != (i = e.style) ? i : oo.y.DEFAULT,
                                    description: e.description,
                                    data: (0, X.s)({ album: e.data.album, artists: e.data.artists }),
                                });
                            case os.D.PROMO_LINK:
                                return (0, f.wg)({
                                    id: e.id,
                                    index: t,
                                    type: os.D.PROMO_LINK,
                                    style: null != (l = e.style) ? l : oo.y.DEFAULT,
                                    description: e.description,
                                    data: ((e) =>
                                        (0, f.wg)({ id: e.id, title: e.title, description: e.description, url: e.action.weblink, cover: e.cover, color: e.color }))(
                                        e.data,
                                    ),
                                });
                            case os.D.SETTING:
                                return (0, f.wg)({
                                    id: e.id,
                                    index: t,
                                    type: os.D.SETTING,
                                    style: null != (r = e.style) ? r : oo.y.DEFAULT,
                                    description: e.description,
                                    data: { title: e.data.title, cover: e.data.cover },
                                });
                            default:
                                return null;
                        }
                    })
                    .filter((e) => null !== e);
                };
            !(function (e) {
                (e.CLICK = 'CLICK'), (e.VIEW = 'VIEW');
            })(m || (m = {}));
            let og = f.gK
                    .model('BaseWheelItem', {
                        id: f.gK.string,
                        index: f.gK.number,
                        type: f.gK.enumeration(Object.values(os.D)),
                        style: f.gK.maybe(f.gK.string),
                        description: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        get isPlayable() {
                            if (!(0, f._n)(e)) return !1;
                            switch (e.type) {
                                case os.D.WAVE:
                                case os.D.ALBUM:
                                    return !0;
                                case os.D.PROMO_LINK:
                                case os.D.SETTING:
                                    return !1;
                            }
                        },
                    }))
                    .actions((e) => ({
                        handleFeedbackView() {
                            if (!(0, f._n)(e)) return;
                            let { wheel: t } = (0, R.M)(e);
                            t && t.addFeedback(m.VIEW, e.type, e.id, e.index);
                        },
                        handleFeedbackClick() {
                            if (!(0, f._n)(e)) return;
                            let { wheel: t } = (0, R.M)(e);
                            if (!t) return;
                            let a = t.addFeedback(m.CLICK, e.type, e.id, e.index);
                            e.isPlayable ||
                                a.then(() => {
                                    (0, f._n)(t) && t.sendFeedbacks();
                                });
                        },
                    })),
                ou = og.props({ type: f.gK.literal(os.D.ALBUM), data: el.J }),
                oc = f.gK
                    .model('PromoLink', {
                        id: f.gK.string,
                        title: f.gK.string,
                        description: f.gK.maybe(f.gK.string),
                        url: f.gK.maybeNull(f.gK.string),
                        cover: tY.$,
                        color: f.gK.string,
                    })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) })),
                om = og.props({ type: f.gK.literal(os.D.PROMO_LINK), data: oc }),
                op = f.gK.model('Setting', { title: f.gK.string, cover: tY.$ }).actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.title) })),
                oy = og.props({ type: f.gK.literal(os.D.SETTING), data: op }),
                oE = og.props({ type: f.gK.literal(os.D.WAVE), data: eg.G }),
                oS = f.gK.union(oE, ou, om, oy),
                oK = f.gK
                    .compose(
                        f.gK.model('Wheel', {
                            wheelId: f.gK.optional(f.gK.string, ''),
                            items: f.gK.array(oS),
                            activeIndex: f.gK.optional(f.gK.number, 1),
                            lastRequestId: f.gK.optional(f.gK.string, ''),
                        }),
                        V.X,
                        D.p,
                    )
                    .volatile(() => ({ feedbacksStore: void 0 }))
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading;
                            },
                            get isEmpty() {
                                return 0 === e.items.length;
                            },
                            get isRealTimeFeedbacksEnabled() {
                                let { experiments: t } = (0, R.M)(e);
                                return t.checkExperiment(k.z.WebNextRealTimeWheelFeedbacks, 'on');
                            },
                            get isPersistentFeedbacksAvailable() {
                                var a;
                                return t.isRealTimeFeedbacksEnabled && !!(null == (a = e.feedbacksStore) ? void 0 : a.isAvailable());
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = new Map(),
                            a = Promise.resolve(),
                            i = async () => {
                                if ((await a, !e.feedbacksStore)) return { feedbacks: [], persistentFeedbackKeys: [] };
                                let t = await e.feedbacksStore.getFeedbacks();
                                return { feedbacks: t.map((e) => e.feedback), persistentFeedbackKeys: t.map((e) => e.feedbackKey) };
                            },
                            l = async () =>
                                e.isPersistentFeedbacksAvailable ? i() : { feedbacks: 0 === t.size ? [] : Array.from(t.values()), persistentFeedbackKeys: [] },
                            r = (a) => {
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
                            async addFeedback(i, l, r, s) {
                                let n = { wheelId: e.wheelId, timestamp: Date.now(), eventType: i, item: { type: l, id: r }, position: s };
                                if (e.isPersistentFeedbacksAvailable)
                                    return e.feedbacksStore
                                        ? (a = a
                                              .then(() => {
                                                  let t = e.feedbacksStore;
                                                  return t ? t.addFeedback(n) : Promise.resolve();
                                              })
                                              .catch(() => void 0))
                                        : Promise.resolve();
                                let o = (0, on.q)(n);
                                t.has(o) || t.set(o, n);
                            },
                            sendFeedbacks: (0, f.L3)(function* () {
                                if (!e.isRealTimeFeedbacksEnabled) return;
                                let { wheelResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                    i = yield l();
                                if (0 !== i.feedbacks.length)
                                    try {
                                        yield t.feedbacks({ feedbacks: i.feedbacks }), r(i);
                                    } catch (e) {
                                        a.error('[Wheel] Feedbacks send error', { error: e });
                                    }
                            }),
                            getData: (0, f.L3)(function* (t, a) {
                                let { context: i, forceFetch: s } = t,
                                    n = ((e) => {
                                        switch (e.type) {
                                            case or.b.ALBUM:
                                            case or.b.ARTIST:
                                                return ''.concat(e.type, ':').concat(e.data.id);
                                            case or.b.PLAYLIST:
                                                return ''.concat(e.type, ':').concat(e.data.playlistUuid);
                                            case or.b.WAVE:
                                                return ''.concat(e.type, ':').concat(e.data.seeds.join(','));
                                            case or.b.GENERATIVE:
                                            case or.b.CLIP:
                                                return e.type;
                                            case or.b.OTHER:
                                                var t, a;
                                                return ''.concat(e.type, ':').concat(null != (a = null == (t = e.data) ? void 0 : t.id) ? a : '');
                                        }
                                    })(i);
                                if (!s && n === e.lastRequestId) return;
                                let { wheelResource: o, modelActionsLogger: d } = (0, f._$)(e);
                                e.loadingState = ev.G.PENDING;
                                let g = yield l();
                                try {
                                    let t = yield o.wheelNew({ context: i, feedbacks: g.feedbacks });
                                    if ((r(g), (e.wheelId = t.wheelId), (e.items = (0, f.wg)(od(t))), (e.activeIndex = 1), (e.lastRequestId = n), 0 === e.items.length))
                                        throw Error('Empty response');
                                    e.loadingState = ev.G.RESOLVE;
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                                        type: os.D.WAVE,
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
                                        (e.wheelId = i.wheelId), (e.items = (0, f.wg)(od(i))), (e.activeIndex = 1);
                                    } else d.error('[Wheel] Load error', { error: t });
                                    e.loadingState = ev.G.REJECT;
                                }
                            }),
                        };
                    }),
                ob = f.gK.model('WizardGenre', { id: f.gK.string, title: f.gK.string }),
                ov = f.gK
                    .model('Wizard', {
                        loadingState: f.gK.enumeration(Object.values(ev.G)),
                        modal: rw.q,
                        introModal: rw.q,
                        genres: f.gK.array(ob),
                        artistsByGenres: f.gK.maybe(f.gK.frozen()),
                        savedLikedArtists: f.gK.array(f.gK.string),
                        likedArtists: f.gK.array(f.gK.string),
                        unlikedArtists: f.gK.array(f.gK.string),
                        filter: f.gK.maybe(f.gK.string),
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
                        isArtistLiked: (t) => !e.unlikedArtists.includes(t) && (e.likedArtists.includes(t) || e.savedLikedArtists.includes(t)),
                    }))
                    .actions((e) => ({
                        likeArtist: (t) => {
                            let { likedArtists: a, unlikedArtists: i, savedLikedArtists: l } = e,
                                r = ((e) => {
                                    let { id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: l } = e,
                                        r = {};
                                    if (a.includes(t)) return (r.likedArtists = a.filter((e) => e !== t)), r;
                                    let s = l.includes(t),
                                        n = i.includes(t);
                                    return ((r.unlikedArtists = i.filter((e) => e !== t)), s && !n) ? r.unlikedArtists.push(t) : (r.likedArtists = [...a, t]), r;
                                })({ id: t, likedArtists: a, unlikedArtists: i, savedLikedArtists: l });
                            r.likedArtists && (e.likedArtists = (0, f.wg)(r.likedArtists)), r.unlikedArtists && (e.unlikedArtists = (0, f.wg)(r.unlikedArtists));
                        },
                        setFilter: (t) => {
                            e.filter = t;
                        },
                        getGenres: (0, f.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING && e.loadingState !== ev.G.RESOLVE)
                                try {
                                    var i;
                                    e.loadingState = ev.G.PENDING;
                                    let { genres: a } = yield t.getWizardGenres();
                                    if (((e.genres = (0, f.wg)(a.map((e) => ({ id: e.id, title: e.title })))), !a.length))
                                        throw Error("The wizard's genre array is empty");
                                    (e.filter = null == (i = a[0]) ? void 0 : i.id),
                                        (e.artistsByGenres = (0, f.wg)(
                                            ((e) => {
                                                let t = new Map();
                                                return (
                                                    e.map((e) => {
                                                        t.set(e.id, { loadingState: ev.G.IDLE, artists: [], showedArtists: [] });
                                                    }),
                                                    rq.sH.map(t)
                                                );
                                            })(a),
                                        )),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        getArtists: (0, f.L3)(function* (t) {
                            let { feedResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.RESOLVE || !e.filter) return;
                            let l = e.artistsByGenres.get(e.filter);
                            if (l.loadingState !== ev.G.PENDING)
                                try {
                                    l.loadingState = ev.G.PENDING;
                                    let { artists: i = [], likedArtists: r = [] } = yield a.getWizardArtistsByGenre({
                                            genre: e.filter,
                                            showedArtists: l.showedArtists,
                                            likedArtists: e.likedArtists,
                                            unlikedArtists: e.unlikedArtists,
                                            countOfNewArtists: t,
                                        }),
                                        s = i.map((e) => (0, $.a)({ artist: e })),
                                        n = i.map((e) => e.id);
                                    e.artistsByGenres.set(e.filter, {
                                        artists: [...l.artists, ...s],
                                        showedArtists: [...l.showedArtists, ...n],
                                        loadingState: ev.G.RESOLVE,
                                    }),
                                        (e.savedLikedArtists = (0, f.wg)(r.map((e) => String(e)))),
                                        (e.likedArtists = (0, f.wg)([])),
                                        (e.unlikedArtists = (0, f.wg)([]));
                                } catch (e) {
                                    i.error(e), (l.loadingState = ev.G.REJECT);
                                }
                        }),
                        finish: (0, f.L3)(function* () {
                            let { feedResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.filter) return aV.F.ERROR;
                            try {
                                return yield t.finishWizard({ genre: e.filter, likedArtists: e.likedArtists, unlikedArtists: e.unlikedArtists }), aV.F.OK;
                            } catch (e) {
                                return a.error(e), aV.F.ERROR;
                            }
                        }),
                    })),
                oI = f.gK.model('Credit', { title: f.gK.string, value: f.gK.string }),
                oL = f.gK
                    .model('CurrentClipInfo', {
                        id: f.gK.maybeNull(f.gK.number),
                        clip: f.gK.maybeNull(t8),
                        clipLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        creditsLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        credits: f.gK.maybeNull(f.gK.array(oI)),
                        modal: rw.q,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === ev.G.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === ev.G.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === ev.G.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === ev.G.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === ev.G.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === ev.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === ev.G.REJECT && e.clipLoadingState === ev.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, f.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.id && e.clipLoadingState !== ev.G.PENDING)
                                try {
                                    e.clipLoadingState = ev.G.PENDING;
                                    let [a] = yield t.getClip({ clipIds: [e.id] });
                                    if (!a) return;
                                    (e.clip = lq(a)), (e.clipLoadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.clipLoadingState = ev.G.REJECT);
                                }
                        }),
                        getCreditsInfo: (0, f.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.id || e.creditsLoadingState === ev.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = ev.G.PENDING;
                                let a = yield t.getCredits({ clipId: e.id });
                                (e.credits = (0, f.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.creditsLoadingState = ev.G.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null), (e.clip = null), (e.clipLoadingState = ev.G.IDLE), (e.creditsLoadingState = ev.G.IDLE), (e.credits = null);
                        },
                    })),
                oT = f.gK.model('TranslationsModel', { data: f.gK.frozen() }),
                oN = f.gK
                    .model('ReleaseNotes', { modal: rw.q, translations: f.gK.maybeNull(oT), sortedDescReleaseNotesKeys: f.gK.maybeNull(f.gK.array(f.gK.string)) })
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
                            e.sortedDescReleaseNotesKeys = (0, f.wg)(t);
                        },
                        setTranslationsReleaseNotes: (t) => {
                            t && (e.translations = oT.create({ data: t }));
                        },
                    }));
            var oA = a(3961);
            let oh = (e) => 'object' == typeof e && null !== e && 'id' in e && 'owner' in e && 'members' in e && 'status' in e;
            var oC = a(39645);
            let of = (e) => 'object' == typeof e && null !== e,
                oR = (e) => 'object' == typeof e && null !== e && 'errorName' in e,
                ok = async (e) => {
                    if (!(e instanceof O.GX) || e.statusCode !== O.X1.BAD_REQUEST || !(0, oC.N)(e.cause) || !e.cause.response) return null;
                    try {
                        let t = await e.cause.response.json();
                        if (!of(t)) return null;
                        let a = {};
                        'string' == typeof t.name && (a.errorName = t.name);
                        let i = t.details;
                        return of(i) && 'string' == typeof i.correctRoomId && (a.correctRoomId = i.correctRoomId), a;
                    } catch (e) {
                        return null;
                    }
                },
                oD = f.gK
                    .compose(
                        f.gK.model('Multivibe', {
                            invitationRoom: f.gK.maybeNull(ax),
                            createdRoomId: f.gK.maybeNull(f.gK.string),
                            duplicateRoomId: f.gK.maybeNull(f.gK.string),
                            promoModal: rw.q,
                            inviteModal: rw.q,
                            disabledRoomInfoModal: rw.q,
                            disabledRoomId: f.gK.maybeNull(f.gK.string),
                            errorName: f.gK.maybeNull(f.gK.string),
                        }),
                        V.X,
                        D.p,
                    )
                    .views((e) => ({
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwo, 'on') || t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isNDAEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextWaveForTwoTest, 'on');
                        },
                        get isGetRoomByIdLoading() {
                            return e.isNeededToLoad || e.loadingState === ev.G.PENDING;
                        },
                        get isGetRoomByIdRejected() {
                            return e.loadingState === ev.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getRoomById: (0, f.L3)(function* (t) {
                            let { roomId: a } = t;
                            if (e.loadingState === ev.G.PENDING) return;
                            let { waveResource: i, modelActionsLogger: l } = (0, f._$)(e);
                            (e.invitationRoom = null), (e.errorName = null);
                            try {
                                e.loadingState = ev.G.PENDING;
                                let t = yield i.getRoomById({ roomId: a });
                                (e.invitationRoom = (0, f.wg)(e5(t))), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof O.GX && t.statusCode === O.X1.NOT_FOUND && (e.errorName = oA.z.ROOM_NOT_FOUND),
                                    e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                            }
                        }),
                        createRoom: (0, f.L3)(function* () {
                            let { waveResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            e.errorName = null;
                            try {
                                let a = yield t.createRoom();
                                if (!oh(a)) return aV.F.ERROR;
                                let i = e5(a);
                                return (e.createdRoomId = null == i ? void 0 : i.id), aV.F.OK;
                            } catch (i) {
                                a.error(i);
                                let t = yield ok(i);
                                return oR(t) && t.errorName === oA.z.ROOM_LIMIT_EXCEEDED && (e.errorName = oA.z.ROOM_LIMIT_EXCEEDED), aV.F.ERROR;
                            }
                        }),
                        enterRoom: (0, f.L3)(function* (t) {
                            let { waveResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            (e.errorName = null), (e.duplicateRoomId = null);
                            try {
                                let i = yield a.enterRoom(t);
                                if (!oh(i)) return aV.F.ERROR;
                                return (e.invitationRoom = (0, f.wg)(e5(i))), aV.F.OK;
                            } catch (a) {
                                i.error(a);
                                let t = yield ok(a);
                                return (
                                    oR(t) &&
                                        t.errorName === oA.z.ROOM_DUPLICATION &&
                                        t.correctRoomId &&
                                        ((e.errorName = oA.z.ROOM_DUPLICATION), (e.duplicateRoomId = t.correctRoomId)),
                                    aV.F.ERROR
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
                            (e.loadingState = ev.G.IDLE), (e.duplicateRoomId = null), (e.disabledRoomId = null), (e.errorName = null), e.destroyItems([e.invitationRoom]);
                        },
                    }));
            var o_ = a(29222),
                oP = a(51675);
            let oO = { width: '614', height: '556' },
                ow = { width: '100%', height: '240' },
                oG = (e) => ({ width: e ? ow.width : oO.width, height: e ? ow.height : oO.height }),
                oM = { width: '614', height: '244' },
                oU = { width: '100%', height: '240' };
            var oB = a(19053),
                oV = a(43922),
                oF = a(4408);
            let ox = (e) => e.replace(oV.ew, ''),
                oj = (e) => (oF.s.test(e) ? e : ''.concat(e).concat(oV.ew)),
                oW = (e) => {
                    let { width: t, height: a, iframeUri: i, listenMessage: l } = e,
                        r = ox(t),
                        s = ox(a),
                        n = oj(t),
                        o = oj(a);
                    return '<iframe frameborder="0" allow="clipboard-write" style="border:none;width:'
                        .concat(n, ';height:')
                        .concat(o, ';" width="')
                        .concat(r, '" height="')
                        .concat(s, '" src="')
                        .concat(i, '">')
                        .concat(l, '</iframe>');
                },
                oX = f.gK.model({ width: f.gK.string, height: f.gK.string }),
                oY = oX
                    .props({
                        id: f.gK.number,
                        type: f.gK.literal(oP.Y.ALBUM),
                        title: f.gK.string,
                        path: f.gK.string,
                        artistName: f.gK.maybeNull(f.gK.string),
                        artistId: f.gK.maybeNull(f.gK.string),
                        listenMessage: f.gK.maybeNull(f.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/album/').concat(a);
                                })({ tld: t.tld, id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, f._$)(e);
                                return ''.concat((0, T.getTldHost)(a.iframe.entityBaseUrl, t.tld, oB.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, f._$)(e);
                                return ''.concat((0, T.getTldHost)(a.iframe.entityBaseUrl, t.tld, oB.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var a;
                                return oW({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (a = e.listenMessage) ? a : '' });
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
                            var a, i, l, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (l = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === l
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                o$ = oX
                    .props({
                        id: f.gK.string,
                        type: f.gK.literal(oP.Y.PLAYLIST),
                        title: f.gK.maybeNull(f.gK.string),
                        path: f.gK.string,
                        ownerLogin: f.gK.maybeNull(f.gK.string),
                        ownerName: f.gK.maybeNull(f.gK.string),
                        listenMessage: f.gK.maybeNull(f.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, ownerLogin: a, id: i } = e;
                                    return 'https://music.yandex.'.concat(t, '/iframe/playlist/').concat(a, '/').concat(i);
                                })({ tld: t.tld, ownerLogin: null != (a = e.ownerLogin) ? a : '', id: e.id });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, f._$)(e);
                                return ''.concat((0, T.getTldHost)(a.iframe.entityBaseUrl, t.tld, oB.B)).concat(e.path);
                            },
                            get iframeCode() {
                                var i;
                                return oW({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
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
                            let a, i, l, r, s, n;
                            if (null === e.title || null === e.ownerName || null === e.ownerLogin) {
                                e.listenMessage = t('');
                                return;
                            }
                            let { location: o } = (0, R.M)(e);
                            e.listenMessage = t(
                                ((l = e.entityUri),
                                (r = e.title),
                                (s = e.ownerName),
                                (a = o.tld),
                                (i = e.ownerLogin),
                                (n = 'https://music.yandex.'.concat(a, '/users/').concat(i)),
                                '<a href="'.concat(l, '">').concat(r, '</a> — <a href="').concat(n, '">').concat(s, '</a>')),
                            );
                        },
                    })),
                oH = oX
                    .props({
                        id: f.gK.string,
                        albumId: f.gK.maybeNull(f.gK.number),
                        type: f.gK.literal(oP.Y.TRACK),
                        title: f.gK.string,
                        path: f.gK.string,
                        artistName: f.gK.maybeNull(f.gK.string),
                        artistId: f.gK.maybeNull(f.gK.string),
                        listenMessage: f.gK.maybeNull(f.gK.string),
                    })
                    .views((e) => {
                        let t = {
                            get iframeUri() {
                                var a;
                                let { location: t } = (0, R.M)(e);
                                return ((e) => {
                                    let { tld: t, id: a, albumId: i } = e;
                                    return void 0 !== i
                                        ? 'https://music.yandex.'.concat(t, '/iframe/album/').concat(i, '/track/').concat(a)
                                        : 'https://music.yandex.'.concat(t, '/iframe/track/').concat(a);
                                })({ tld: t.tld, id: e.id, albumId: null != (a = e.albumId) ? a : void 0 });
                            },
                            get entityUri() {
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, f._$)(e);
                                return ''.concat((0, T.getTldHost)(a.iframe.entityBaseUrl, t.tld, oB.B)).concat(e.path);
                            },
                            get artistUri() {
                                if (null === e.artistId) return null;
                                let { location: t } = (0, R.M)(e),
                                    { config: a } = (0, f._$)(e);
                                return ''.concat((0, T.getTldHost)(a.iframe.entityBaseUrl, t.tld, oB.B), '/artist/').concat(e.artistId);
                            },
                            get iframeCode() {
                                var i;
                                return oW({ width: e.width, height: e.height, iframeUri: t.iframeUri, listenMessage: null != (i = e.listenMessage) ? i : '' });
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
                            var a, i, l, r;
                            e.listenMessage = t(
                                ((a = e.entityUri),
                                (i = e.title),
                                (l = e.artistUri),
                                null === (r = e.artistName)
                                    ? '<a href="'.concat(a, '">').concat(i, '</a>')
                                    : null === l
                                      ? '<a href="'.concat(a, '">').concat(i, '</a> — ').concat(r)
                                      : '<a href="'.concat(a, '">').concat(i, '</a> — <a href="').concat(l, '">').concat(r, '</a>')),
                            );
                        },
                    })),
                oJ = f.gK.union(oH, oY, o$),
                oq = f.gK.model({ entity: f.gK.maybeNull(oJ), modal: rw.q }).actions((e) => ({
                    openModal(t) {
                        let { settings: a } = (0, R.M)(e);
                        (e.entity = ((e, t) => {
                            if (e.variant === oP.Y.TRACK)
                                return ((e) => {
                                    let t,
                                        { variant: a, id: i, title: l, path: r, trackArtistName: s, trackArtistId: n, trackAlbumId: o, isMobile: d } = e;
                                    return (0, f.wg)({
                                        id: i,
                                        type: a,
                                        albumId: o,
                                        title: l,
                                        path: r,
                                        artistName: null != s ? s : null,
                                        artistId: null != n ? n : null,
                                        ...{ width: (t = d) ? oU.width : oM.width, height: t ? oU.height : oM.height },
                                    });
                                })({ ...e, isMobile: t });
                            if (e.variant === oP.Y.ALBUM) {
                                let a = e.id;
                                if (void 0 === a) throw new o_.t('Missing album ID');
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: l, albumArtistName: r, albumArtistId: s, isMobile: n } = e;
                                    return (0, f.wg)({ id: a, type: t, title: i, path: l, artistName: null != r ? r : null, artistId: null != s ? s : null, ...oG(n) });
                                })({ ...e, id: a, isMobile: t });
                            }
                            if (e.variant === oP.Y.PLAYLIST)
                                return ((e) => {
                                    let { variant: t, id: a, title: i, path: l, playlistOwnerName: r, playlistOwnerLogin: s, isMobile: n } = e;
                                    return (0, f.wg)({
                                        id: String(a),
                                        type: t,
                                        title: null != i ? i : null,
                                        path: null != l ? l : null,
                                        ownerName: r,
                                        ownerLogin: s,
                                        ...oG(n),
                                    });
                                })({ ...e, isMobile: t });
                            throw new o_.t('Unknown variant');
                        })({ ...t, title: (0, T.sanitizeDOM)(t.title || '', { whiteList: {} }) }, a.isMobile)),
                            e.modal.open();
                    },
                    closeModal() {
                        e.modal.close(), (e.entity = null);
                    },
                })),
                oz = f.gK.model('Network', { isOffline: f.gK.optional(f.gK.boolean, !1) }),
                oQ = f.gK.model('Entity', { progress: f.gK.maybe(f.gK.number), loadingState: f.gK.enumeration(Object.values(G.DT)) }),
                oZ = f.gK
                    .model('Slam', { networkStatus: oz, offlineMode: f.gK.maybe(f.gK.boolean), tracks: f.gK.map(oQ) })
                    .views((e) => {
                        let t = {
                            isTrackDownloaded: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === G.DT.DOWNLOADED;
                            },
                            isTrackDownloading: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === G.DT.DOWNLOADING;
                            },
                            getTrackDownloadingProgress: (t) => {
                                var a, i;
                                return null != (i = null == (a = e.tracks.get(t)) ? void 0 : a.progress) ? i : 0;
                            },
                            isPlaylistDownloaded: (e) =>
                                e.every((e) => {
                                    let [a] = (0, az.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, az.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [i] = (0, az.d)(a);
                                        return i && t.isTrackDownloaded(i) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, f._n)(e)) return !1;
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
                            e.tracks = (0, f.wg)(t);
                        },
                        setOfflineMode: (t) => {
                            let { localStorage: a } = (0, f._$)(e);
                            (e.offlineMode = t), a.set(rD.c.OfflineMode, t);
                        },
                    }));
            var o0 = a(2774),
                o1 = a(76232),
                o3 = a(6612);
            let o2 = [nU.MT.PLAYING, nU.MT.LOADING_MEDIA_SOURCE, nU.MT.BUFFERING],
                o6 = f.gK.model('UnloadedEntityMeta', { id: f.gK.union(f.gK.number, f.gK.string), albumId: f.gK.maybe(f.gK.union(f.gK.number, f.gK.string)) }),
                o4 = f.gK.model('UnloadedEntityData', { meta: o6, type: f.gK.literal(nU.z4.Unloaded) }),
                o5 = f.gK
                    .model('BaseSonataState', {
                        contextType: f.gK.maybeNull(f.gK.enumeration(Object.values(nl.K))),
                        contextId: f.gK.maybeNull(f.gK.string),
                        entityMeta: f.gK.maybeNull(nx),
                        status: f.gK.enumeration(Object.values(nU.MT)),
                        canMoveForward: f.gK.boolean,
                        canMoveBackward: f.gK.boolean,
                        canSpeed: f.gK.boolean,
                        repeatMode: f.gK.enumeration(Object.values(o3.pM)),
                        canChangeRepeatMode: f.gK.boolean,
                        volume: f.gK.maybe(f.gK.number),
                        speed: f.gK.maybe(f.gK.number),
                        position: f.gK.maybeNull(f.gK.number),
                        duration: f.gK.maybeNull(f.gK.number),
                        canShuffle: f.gK.boolean,
                        shuffle: f.gK.boolean,
                        quality: f.gK.enumeration(Object.values(o1.e)),
                        unloadedEntitiesData: f.gK.maybe(f.gK.array(o4)),
                    })
                    .volatile(() => ({ volatileUnloadedEntitiesData: void 0 }))
                    .views((e) => ({
                        get unloadedEntitiesDataFromModels() {
                            var t;
                            return null != (t = e.volatileUnloadedEntitiesData) ? t : (0, rq.HO)(e.unloadedEntitiesData);
                        },
                        get isVibeContext() {
                            return e.contextType === nl.K.Vibe;
                        },
                        get isGenerativeContext() {
                            return e.contextType === nl.K.Generative;
                        },
                        get isPaused() {
                            return e.status === nU.MT.PAUSED;
                        },
                        get isPlaying() {
                            return o2.includes(e.status);
                        },
                        get isContextRepeatMode() {
                            return e.repeatMode === o3.pM.CONTEXT;
                        },
                        get isOneRepeatMode() {
                            return e.repeatMode === o3.pM.ONE;
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
                            t && t.data.meta && (e.entityMeta && (0, f.Yo)(e.entityMeta), (e.entityMeta = nF(t)));
                        },
                        setUnloadedEntitiesData: (t) => {
                            t && ((e.volatileUnloadedEntitiesData = (0, o0.A)(t)), (e.unloadedEntitiesData = (0, f.wg)(t)));
                        },
                        resetUnloadedEntitiesData: () => {
                            (e.volatileUnloadedEntitiesData = void 0), (e.unloadedEntitiesData = void 0);
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
                        playlistFilter: f.gK.maybe(f.gK.string),
                        areCoresRegistered: f.gK.boolean,
                        isVHCoreRegistered: f.gK.boolean,
                        shouldApplyYnisonState: f.gK.optional(f.gK.boolean, !0),
                        isCrossFadeEnabled: f.gK.boolean,
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
                            let { containerStorage: a } = (0, f._$)(e);
                            a.set(rD.c.CrossFadeMode, t, { expires: 365 }), (e.isCrossFadeEnabled = t);
                        },
                    }))
                    .named('SonataState'),
                o9 = f.gK.model('Credit', { title: f.gK.string, value: f.gK.string }),
                o7 = f.gK
                    .model('CurrentTrackInfo', {
                        id: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                        albumId: f.gK.maybeNull(f.gK.number),
                        isUGC: f.gK.maybeNull(f.gK.boolean),
                        trackLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        fullTrack: f.gK.maybeNull(U.v),
                        creditsLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        credits: f.gK.maybeNull(f.gK.array(o9)),
                        modal: rw.q,
                        fullDescription: f.gK.maybeNull(f.gK.string),
                        descriptionLoadingState: f.gK.enumeration(Object.values(ev.G)),
                    })
                    .views((e) => ({
                        get isTrackIdle() {
                            return e.trackLoadingState === ev.G.IDLE;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === ev.G.IDLE;
                        },
                        get isTrackLoading() {
                            return e.trackLoadingState === ev.G.PENDING || e.trackLoadingState === ev.G.IDLE;
                        },
                        get isTrackRejected() {
                            return e.trackLoadingState === ev.G.REJECT;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === ev.G.PENDING || e.creditsLoadingState === ev.G.IDLE;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === ev.G.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === ev.G.REJECT && e.trackLoadingState === ev.G.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setTrack(t) {
                            let { id: a, albumId: i, isUGC: l } = t;
                            (e.id = a), (e.albumId = i), (e.isUGC = l);
                        },
                        getFullTrack: (0, f.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.id || e.trackLoadingState === ev.G.PENDING) return null;
                            try {
                                e.trackLoadingState = ev.G.PENDING;
                                let a = yield t.getFullInfoTrack({ trackId: e.id, albumId: e.albumId });
                                if (!a) return null;
                                (e.fullTrack = (0, f.wg)((0, eR.v)(a.track))), (e.trackLoadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.trackLoadingState = ev.G.REJECT);
                            }
                            return null;
                        }),
                        getFullDescription: (0, f.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.id || e.descriptionLoadingState === ev.G.PENDING) return null;
                            try {
                                e.descriptionLoadingState = ev.G.PENDING;
                                let a = yield t.getFullDescriptionTrack({ trackId: e.id });
                                if (!a) return null;
                                (e.fullDescription = a.description), (e.descriptionLoadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.descriptionLoadingState = ev.G.REJECT);
                            }
                            return null;
                        }),
                        getTrackMeta: (0, f.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.id || e.trackLoadingState === ev.G.PENDING) return null;
                            try {
                                e.trackLoadingState = ev.G.PENDING;
                                let a = yield t.getTracksMeta({ trackIds: [e.id], removeDuplicates: !0 });
                                if (!a || !a.length) return null;
                                a[0] && ((e.fullTrack = (0, f.wg)((0, eR.v)(a[0]))), (e.trackLoadingState = ev.G.RESOLVE));
                            } catch (t) {
                                a.error(t), (e.trackLoadingState = ev.G.REJECT);
                            }
                            return null;
                        }),
                        getCreditsInfo: (0, f.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (!e.id || e.creditsLoadingState === ev.G.PENDING) return null;
                            try {
                                e.creditsLoadingState = ev.G.PENDING;
                                let a = yield t.getCredits({ trackId: e.id });
                                (e.credits = (0, f.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = ev.G.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.creditsLoadingState = ev.G.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null),
                                (e.albumId = null),
                                (e.isUGC = null),
                                (e.trackLoadingState = ev.G.IDLE),
                                (e.descriptionLoadingState = ev.G.IDLE),
                                (e.creditsLoadingState = ev.G.IDLE),
                                (e.fullTrack = null),
                                (e.credits = null);
                        },
                    })),
                o8 = f.gK
                    .compose(
                        f.gK.model('TrackLyrics', {
                            lyrics: f.gK.maybeNull(f.gK.string),
                            major: f.gK.maybeNull(nJ),
                            lyricId: f.gK.maybeNull(f.gK.number),
                            writers: f.gK.array(f.gK.string),
                            externalLyricId: f.gK.maybeNull(f.gK.string),
                            modal: rw.q,
                            track: f.gK.maybeNull(U.v),
                            trackId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            currentTrackId: f.gK.maybeNull(f.gK.union(f.gK.string, f.gK.number)),
                            hasError: f.gK.optional(f.gK.boolean, !1),
                        }),
                        V.X,
                    )
                    .volatile(() => ({ requestToken: 0 }))
                    .views((e) => ({
                        get writersNames() {
                            return e.writers.join(', ');
                        },
                        get hasWriters() {
                            return 0 !== e.writers.length;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || (e.isRejected && e.hasError);
                        },
                        get shouldShowErrorNotification() {
                            return e.isRejected && e.hasError;
                        },
                    }))
                    .actions((e) => {
                        const isStaleRequest = (requestToken, trackId) =>
                            requestToken !== e.requestToken || String(e.currentTrackId) !== String(trackId);
                        const isTrackForId = (track, trackId, sourceTrackId) =>
                            Boolean(
                                track &&
                                    trackId != null &&
                                    ((track.id != null && String(track.id) === String(trackId)) ||
                                        (sourceTrackId != null && String(sourceTrackId) === String(trackId))),
                            );
                        const isLyricsUnavailableError = (error) => error?.message === 'Lyrics are not available';
                        let t = {
                            setTrack(t) {
                                const nextTrackId = t?.id;
                                const changed =
                                    (nextTrackId != null && String(nextTrackId) !== String(e.track?.id)) ||
                                    (nextTrackId != null && e.currentTrackId != null && String(nextTrackId) !== String(e.currentTrackId));
                                if (changed) {
                                    e.requestToken += 1;
                                    e.currentTrackId = null;
                                    e.lyrics = null;
                                    e.major = null;
                                    e.externalLyricId = null;
                                    e.lyricId = null;
                                    e.hasError = !1;
                                    e.writers = (0, f.wg)([]);
                                    e.loadingState = ev.G.IDLE;
                                }
                                e.trackId = nextTrackId;
                                e.track = (0, f.wg)({ ...(0, rq.HO)(t) });
                            },
                            resetShouldShowError() {
                                e.hasError = !1;
                            },
                            getLyrics: (0, f.L3)(function* (a) {
                                let { tracksResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                const sameTrack = e.currentTrackId != null && String(e.currentTrackId) === String(a);
                                if (!a || (sameTrack && (e.isLoading || e.isResolved))) return;
                                const requestToken = ++e.requestToken;
                                let nativeLyricsFound = !1;
                                let nativeError = new Error('Lyrics are not available');
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    e.currentTrackId = a;
                                    e.lyrics = null;
                                    e.major = null;
                                    e.externalLyricId = null;
                                    e.lyricId = null;
                                    e.hasError = !1;
                                    e.writers = (0, f.wg)([]);
                                    const { sonataState } = (0, R.M)(e);
                                    const entityTrack = sonataState?.entityMeta;
                                    const track = isTrackForId(e.track, a, e.trackId) ? e.track : isTrackForId(entityTrack, a) ? entityTrack : null;
                                    if (track?.isLyricsAvailable === !1 || track?.hasLyrics === !1) throw nativeError;
                                    const nativeLyrics = yield i.getLyrics(n$(a, u.TEXT));
                                    if (isStaleRequest(requestToken, a)) return;
                                    if (!nativeLyrics?.downloadUrl) throw nativeError;
                                    nativeLyricsFound = !0;
                                    const lyrics = yield t.downloadLyrics(nativeLyrics.downloadUrl, requestToken, a);
                                    if (isStaleRequest(requestToken, a)) return;
                                    if (!lyrics || pulseSyncLrclib.isPlaceholderText(lyrics)) throw nativeError;
                                    e.major = nH(nativeLyrics.major);
                                    e.externalLyricId = nativeLyrics.externalLyricId;
                                    e.lyricId = nativeLyrics.lyricId;
                                    e.writers = (0, f.wg)(nativeLyrics.writers || []);
                                    e.lyrics = lyrics;
                                    e.loadingState = ev.G.RESOLVE;
                                    return;
                                } catch (error) {
                                    nativeError = error;
                                }
                                if (isStaleRequest(requestToken, a)) return;
                                if (nativeLyricsFound) {
                                    e.loadingState = ev.G.REJECT;
                                    e.hasError = !1;
                                    e.modal.isOpened && e.modal.close();
                                    l.error(nativeError);
                                    return;
                                }
                                const { sonataState } = (0, R.M)(e);
                                const entityTrack = sonataState?.entityMeta;
                                const track = isTrackForId(e.track, a, e.trackId) ? e.track : isTrackForId(entityTrack, a) ? entityTrack : null;
                                const fallback = yield pulseSyncLrclib.resolvePlain(track);
                                if (isStaleRequest(requestToken, a)) return;
                                if (fallback?.lyrics) {
                                    e.major = nH(fallback.provider);
                                    e.externalLyricId = fallback.externalLyricId;
                                    e.lyricId = null;
                                    e.writers = (0, f.wg)(fallback.writers || []);
                                    e.lyrics = fallback.lyrics;
                                    e.hasError = !1;
                                    e.loadingState = ev.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = ev.G.REJECT;
                                e.hasError = !isLyricsUnavailableError(nativeError);
                                e.modal.isOpened && e.modal.close();
                                if (e.hasError) l.error(nativeError);
                            }),
                            downloadLyrics: (0, f.L3)(function* (t, requestToken, trackId) {
                                let { prefixlessResource: a } = (0, f._$)(e);
                                let lyrics;
                                try {
                                    lyrics = yield a.getLyricsText(t);
                                } catch (error) {
                                    if (typeof fetch === 'undefined') throw error;
                                    const response = yield fetch(t, { credentials: 'omit' });
                                    if (!response.ok) throw error;
                                    lyrics = yield response.text();
                                }
                                if (trackId != null && String(e.currentTrackId) !== String(trackId)) return null;
                                if (typeof requestToken === 'number' && requestToken !== e.requestToken) return null;
                                return lyrics;
                            }),
                            sendViews: (0, f.L3)(function* (t) {
                                let { trackId: a, albumId: i } = t,
                                    { lyricViewsResource: l, modelActionsLogger: r } = (0, f._$)(e);
                                if (e.loadingState === ev.G.RESOLVE)
                                    try {
                                        if (!e.major || !e.lyricId || !e.externalLyricId || !e.currentTrackId) return;
                                        yield l.sendViews({
                                            lyricViews: [
                                                {
                                                    id: (0, nW.A)(),
                                                    trackId: a,
                                                    majorId: e.major.id,
                                                    lyricId: e.lyricId,
                                                    externalLyricId: e.externalLyricId,
                                                    lyricFormat: u.TEXT,
                                                    albumId: void 0 !== i ? String(i) : void 0,
                                                },
                                            ],
                                        });
                                    } catch (e) {
                                        r.error(e);
                                    }
                            }),
                        };
                        return t;
                    });
            var de = a(23622),
                dt = a(67893);
            !(function (e) {
                (e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable');
            })(p || (p = {}));
            var da = (function (e) {
                    return (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), e;
                })({}),
                di = a(71062);
            (y || (y = {})).TOO_MANY_FILES = 'TOO_MANY_FILES';
            let reportPulseSyncUploadState = (e, t, a = {}) => {
                    let i = null == e ? void 0 : e.pulseSyncImportToken;
                    i && window.playlistLinkImporter?.reportUploadState?.({ trackToken: i, status: t, ...a });
                },
                rememberPulseSyncUploadError = (e, t) => {
                    let a = (null == t ? void 0 : t.message) || String(t || 'UNKNOWN_ERROR');
                    return e && Object.defineProperty(e, 'pulseSyncUploadError', { value: a, configurable: !0, writable: !0 }), a;
                },
                getPulseSyncUploadTimeout = (e) => Math.min(12e4, Math.max(15e3, Math.ceil(((null == e ? void 0 : e.size) || 0) / 262144) * 1e3 + 5e3)),
                waitForPulseSyncUploadRetry = (e) => new Promise((t) => setTimeout(t, e));
            let dl = f.gK
                .model('TrackUgcUploadModel', {
                    loadingState: f.gK.enumeration(Object.values(di.p)),
                    errorReason: f.gK.maybeNull(f.gK.enumeration(Object.values(da))),
                    playlistKind: f.gK.number,
                    trackId: f.gK.maybeNull(f.gK.string),
                    uploadUrl: f.gK.maybeNull(f.gK.string),
                })
                .volatile(() => ({ file: null, abortController: null }))
                .actions((e) => {
                    let t = {
                        setFile(t) {
                            e.file = t;
                        },
                        getUploadUrl: (0, f.L3)(function* (uploadAttempt = 1) {
                            if (!(0, f._n)(e)) return;
                            let { loaderResource: t, modelActionsLogger: a } = (0, f._$)(e),
                                { user: i } = (0, R.M)(e);
                            if (![di.p.IDLE, di.p.REJECT].includes(e.loadingState)) return;
                            e.loadingState = di.p.PREPARE;
                            let l = i.account.data.uid;
                            if (l)
                                try {
                                    var r;
                                    let a = null == (r = e.file) ? void 0 : r.name,
                                        i = yield t.getUploadUrl({ playlistId: ''.concat(l, ':').concat(e.playlistKind), uid: l, path: a });
                                    if (i && 'result' in i && i.result === y.TOO_MANY_FILES) {
                                        (e.loadingState = di.p.REJECT), (e.errorReason = da.TOO_MANY_FILES);
                                        return;
                                    }
                                    if (i && 'post-target' in i && 'ugc-track-id' in i) {
                                        (e.uploadUrl = i['post-target']), (e.trackId = i['ugc-track-id']);
                                        return;
                                    }
                                    let uploadUrlError = rememberPulseSyncUploadError(e.file, new Error('Upload URL response is missing required fields'));
                                    reportPulseSyncUploadState(e.file, 'attempt-failed', { attempt: uploadAttempt, stage: 'get-upload-url', error: uploadUrlError }),
                                    (e.errorReason = da.UNKNOWN_ERROR), (e.loadingState = di.p.REJECT);
                                    return;
                                } catch (t) {
                                    let i = rememberPulseSyncUploadError(e.file, t);
                                    reportPulseSyncUploadState(e.file, 'attempt-failed', { attempt: uploadAttempt, stage: 'get-upload-url', error: i }),
                                        (e.loadingState = di.p.REJECT),
                                        a.error(t);
                                    return;
                                }
                        }),
                        uploadFile: (0, f.L3)(function* (uploadAttempt = 1) {
                            if (!(0, f._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.loadingState === di.p.PREPARE && e.uploadUrl && e.file) {
                                let i = getPulseSyncUploadTimeout(e.file),
                                    l = !1;
                                (e.loadingState = di.p.UPLOADING),
                                    reportPulseSyncUploadState(e.file, 'uploading', {
                                        attempt: uploadAttempt,
                                        stage: 'upload-file',
                                        fileSize: e.file.size,
                                        timeoutMs: i,
                                    });
                                try {
                                    let a = new FormData();
                                    a.append('file', e.file);
                                    let r = new AbortController(),
                                        s = r.signal,
                                        o = setTimeout(() => {
                                            (l = !0), r.abort();
                                        }, i);
                                    try {
                                        (e.abortController = r), yield t.uploadFile({ url: e.uploadUrl, formData: a }, { signal: s }), (e.loadingState = di.p.PROCESSING);
                                    } finally {
                                        clearTimeout(o);
                                    }
                                    return;
                                } catch (t) {
                                    if (e.loadingState === di.p.CANCELLED) return;
                                    let r = rememberPulseSyncUploadError(e.file, l ? new Error(`Upload timed out after ${i} ms`) : t);
                                    reportPulseSyncUploadState(e.file, 'attempt-failed', {
                                        attempt: uploadAttempt,
                                        stage: 'upload-file',
                                        fileSize: e.file.size,
                                        timeoutMs: i,
                                        error: r,
                                    }),
                                        (e.errorReason = da.UNKNOWN_ERROR),
                                        (e.loadingState = di.p.REJECT),
                                        a.error(t);
                                    return;
                                }
                            }
                        }),
                        runUpload: (0, f.L3)(function* () {
                            if (!(0, f._n)(e)) return;
                            let a = 1;
                            for (let i = 1; i <= 3; i++) {
                                if (((a = i), i > 1 && (yield waitForPulseSyncUploadRetry(500 * 2 ** (i - 2))), e.loadingState === di.p.CANCELLED)) return;
                                (e.loadingState = di.p.IDLE), (e.uploadUrl = null), (e.errorReason = null), yield t.getUploadUrl(i);
                                if (e.errorReason === da.TOO_MANY_FILES) break;
                                if ((e.loadingState !== di.p.REJECT && (yield t.uploadFile(i)), e.loadingState === di.p.PROCESSING)) {
                                    reportPulseSyncUploadState(e.file, 'uploaded', { attempt: i });
                                    return;
                                }
                            }
                            reportPulseSyncUploadState(e.file, 'failed', {
                                error: e.file?.pulseSyncUploadError || e.errorReason || da.UNKNOWN_ERROR,
                                attempt: a,
                            });
                        }),
                        retryUpload() {
                            if ((this.reset(), !(0, f._n)(e))) return;
                            let { ugcUploadCenter: t } = (0, R.M)(e);
                            t.runUploadTracksQueue();
                        },
                        abortUpload() {
                            var t;
                            if (
                                ((e.loadingState = di.p.CANCELLED),
                                reportPulseSyncUploadState(e.file, 'cancelled'),
                                null == (t = e.abortController) || t.abort(),
                                !(0, f._n)(e))
                            )
                                return;
                            let { ugcUploadCenter: a } = (0, R.M)(e);
                            a.clearCancelledUploads();
                        },
                        reset() {
                            (e.loadingState = di.p.IDLE), (e.trackId = null), (e.uploadUrl = null), (e.abortController = null);
                        },
                    };
                    return t;
                });
            var dr = a(71983);
            let ds = f.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: tu.$, type: f.gK.enumeration(Object.values(dr.u)) }),
                dn = f.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: f.gK.array(ds) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, rq.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, i) {
                                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
                            },
                            showAllNotifications() {
                                let t = (0, rq.HO)(e.pairs);
                                return (e.pairs = (0, f.wg)([])), t;
                            },
                        };
                        return t;
                    }),
                dd = f.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: tu.$, file: dl }),
                dg = f.gK
                    .model('UgcUploadCenterModel', { tracks: f.gK.array(dd), notifications: dn, checkProcessingTracksAttempts: f.gK.number })
                    .views((e) => ({
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(di.p.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(di.p.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(di.p.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(di.p.PROCESSING);
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
                                    (t.forEach((t) => {
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, dr.u.FILE_TOO_LARGE);
                                        let i = dl.create({ loadingState: di.p.IDLE, playlistKind: a.kind });
                                        i.setFile(t);
                                        let l = dd.create({ file: i, playlist: (0, rq.HO)(a) });
                                        e.tracks.unshift(l);
                                    }),
                                    !(0, f._n)(e))
                                )
                                    return;
                                let { playlist: i } = (0, R.M)(e);
                                i.search.setText(''), i.search.reset(), this.runUploadTracksQueue();
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let i = a[a.length - 1];
                                    i &&
                                        (await i.runUpload(),
                                        i.loadingState === di.p.REJECT &&
                                            i.errorReason === da.TOO_MANY_FILES &&
                                            ((e.tracks = (0, f.wg)([])), t.addNotificationForPlaylistKind(i.playlistKind, dr.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue();
                                }
                            },
                            checkProcessingTracks: (0, f.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, f._$)(e),
                                    l = [];
                                if (e.checkProcessingTracksAttempts >= 25) return null;
                                t.setCheckProcessingTracksAttempts(e.checkProcessingTracksAttempts + 1);
                                try {
                                    let t = e.processingTracks.map((e) => e.trackId).filter((e) => !!e);
                                    if (!t.length) return null;
                                    let i = yield a.getTracksMeta({ trackIds: t, withProgress: !0 });
                                    null == i ||
                                        i.forEach((t) => {
                                            let a = e.tracks.find((e) => e.file.trackId === t.id && t.state === p.PLAYABLE);
                                            a && ((a.file.loadingState = di.p.RESOLVE), a.file.trackId && l.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    i.error(e);
                                }
                                return t.checkNotifications(l), t.moveTracksFromUploadCenterToPlaylist(), null;
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, f._n)(e)) return;
                                let { playlist: a } = (0, R.M)(e);
                                (null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === di.p.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, f.wg)(e.tracks.filter((e) => e.file.loadingState !== di.p.RESOLVE)));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, f.wg)(e.tracks.filter((e) => e.file.loadingState !== di.p.CANCELLED));
                            },
                            checkNotifications(a) {
                                let i = new Set();
                                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                                    i.forEach((i) => {
                                        let l = e.getUploadingTracksByPlaylistKind(i);
                                        if (!(!l.length || l.some((e) => e.loadingState !== di.p.RESOLVE && e.loadingState !== di.p.REJECT)))
                                            if (l.some((e) => e.loadingState === di.p.REJECT)) {
                                                let r = !0;
                                                if (a && a.length) {
                                                    let t = l.map((e) => e.trackId).filter((e) => e),
                                                        i = (0, de.A)(t, a, dt.A);
                                                    i.length &&
                                                        (r = i
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === di.p.REJECT));
                                                }
                                                r && t.addNotificationForPlaylistKind(i, dr.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(i, dr.u.SUCCESS);
                                    });
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let i = e.getPlaylistByKind(t);
                                i && e.notifications.addNonexistentNotification(i, a);
                            },
                        };
                        return t;
                    }),
                du = (e) => {
                    let { type: t, tag: a } = e.id;
                    return { title: e.name, seed: ''.concat(t, ':').concat(a), specialContext: e.specialContext, specialContextImage: e.specialContextImage };
                },
                dc = (e, t) => {
                    let a = [];
                    return (
                        t.possibleValues.forEach((e) => {
                            e.unspecified || a.push(((e) => ({ value: e.value, title: e.name, seed: e.serializedSeed, imageUrl: e.imageUrl }))(e));
                        }),
                        { type: e, title: t.name, values: (0, f.wg)(a) }
                    );
                };
            var dm = a(97323);
            let dp = f.gK.model('ContextItem', {
                    title: f.gK.string,
                    seed: f.gK.string,
                    specialContext: f.gK.boolean,
                    specialContextImage: f.gK.optional(f.gK.string, ''),
                }),
                dy = f.gK.model('RestrictonValue', { value: f.gK.string, title: f.gK.string, seed: f.gK.string, imageUrl: f.gK.maybe(f.gK.string) }),
                dE = f.gK.model('Restricton', { type: f.gK.enumeration(Object.values(dm.s)), title: f.gK.string, values: f.gK.array(dy) }),
                dS = f.gK
                    .compose(
                        f.gK.model('VibeSettings', {
                            contextItems: f.gK.array(dp),
                            diversity: f.gK.maybeNull(dE),
                            moodEnergy: f.gK.maybeNull(dE),
                            language: f.gK.maybeNull(dE),
                            modal: rw.q,
                        }),
                        V.X,
                    )
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { rotorResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    var l, r, s, n;
                                    e.loadingState = ev.G.PENDING;
                                    let i = yield a.waveSettings(t);
                                    (null == i || null == (l = i.settingRestrictions) ? void 0 : l.diversity) &&
                                        (e.diversity = dc(dm.s.DIVERSITY, i.settingRestrictions.diversity)),
                                        (null == i || null == (r = i.settingRestrictions) ? void 0 : r.moodEnergy) &&
                                            (e.moodEnergy = dc(dm.s.MOOD_ENERGY, i.settingRestrictions.moodEnergy)),
                                        (null == i || null == (s = i.settingRestrictions) ? void 0 : s.language) &&
                                            (e.language = dc(dm.s.LANGUAGE, i.settingRestrictions.language));
                                    let o =
                                        Array.isArray(null == i ? void 0 : i.blocks) &&
                                        (null == i || null == (n = i.blocks) ? void 0 : n.find((e) => (null == e ? void 0 : e.type) === 'contexts'));
                                    o && Array.isArray(o.items) && (e.contextItems = (0, f.wg)(o.items.map(du))),
                                        e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), e.loadingState !== ev.G.IDLE && (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = ev.G.IDLE),
                                (e.contextItems = (0, f.wg)([])),
                                (e.diversity = null),
                                (e.moodEnergy = null),
                                (e.language = null),
                                e.modal.close();
                        },
                    }));
            !(function (e) {
                (e.DONATION = 'DONATION'), (e.CONCERT = 'CONCERT'), (e.FACT = 'FACT');
            })(E || (E = {}));
            let dK = (e) => {
                var t;
                return { title: e.title, url: e.url, faviconUrl: null != (t = e.faviconUrl) ? t : null };
            };
            var db = a(25266);
            let dv = f.gK.model('WordsCardAction', { title: f.gK.string, url: f.gK.string }),
                dI = f.gK.model('WordsCardSource', { title: f.gK.string, url: f.gK.string, faviconUrl: f.gK.maybeNull(f.gK.string) }),
                dL = f.gK
                    .model('WordsCard', {
                        id: f.gK.string,
                        text: f.gK.string,
                        tags: f.gK.maybe(f.gK.array(f.gK.string)),
                        action: f.gK.maybe(dv),
                        sources: f.gK.maybe(f.gK.array(dI)),
                        bigCardIds: f.gK.maybe(f.gK.array(f.gK.string)),
                        feedbackState: f.gK.maybe(f.gK.string),
                        analyticObjectType: f.gK.maybe(f.gK.string),
                        analyticObjectId: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        get isFact() {
                            var t;
                            if (!(0, f._n)(e)) return !1;
                            return null == (t = e.tags) ? void 0 : t.includes(E.FACT);
                        },
                        get isInformer() {
                            var a, i;
                            if (!(0, f._n)(e)) return !1;
                            return !(null == (a = e.tags) ? void 0 : a.includes(E.FACT)) && !!(null == (i = e.action) ? void 0 : i.url);
                        },
                        get bigCardId() {
                            var l;
                            return null == (l = e.bigCardIds) ? void 0 : l[0];
                        },
                        get hasBigCard() {
                            var r;
                            return !!(null == (r = e.bigCardIds) ? void 0 : r[0]);
                        },
                        get isLiked() {
                            return e.feedbackState === db.a.LIKE;
                        },
                        get isDisliked() {
                            return e.feedbackState === db.a.DISLIKE;
                        },
                    }))
                    .actions((e) => ({
                        sendFeedback: (0, f.L3)(function* (t) {
                            if (!(0, f._n)(e)) return;
                            let { wordsResource: a } = (0, f._$)(e);
                            yield a.cardsFeedback({ feedback: [{ id: e.id, feedbackState: t }] }), (0, f._n)(e) && (e.feedbackState = t);
                        }),
                    })),
                dT = f.gK
                    .model('Words', {
                        cards: f.gK.map(dL),
                        activeBigCard: f.gK.maybe(f.gK.frozen()),
                        loadingState: f.gK.enumeration(Object.values(ev.G)),
                        bigCardLoadingState: V.X,
                        loadingTrackIds: f.gK.map(f.gK.boolean),
                        modal: rw.q,
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
                            e.viewedCardIds.add(t), null == (a = e.viewedStore) || a.addViewedIds([t]);
                        },
                        markBigCardViewed(t, a) {
                            var i, l;
                            let r = null != (l = e.viewedBigCardIdsByCardId.get(t)) ? l : new Set();
                            r.add(a), e.viewedBigCardIdsByCardId.set(t, r), null == (i = e.viewedStore) || i.addViewedBigCards([{ cardId: t, bigCardIds: [a] }]);
                        },
                        evict(t) {
                            Array.from(e.cards.keys()).forEach((a) => {
                                if (!t.has(a)) {
                                    let t = e.cards.get(a);
                                    t && e.viewedBigCardIdsByCardId.delete(t.id),
                                        e.cards.delete(a),
                                        e.requestedTrackIds.delete(a),
                                        e.loadingTrackIds.delete(a),
                                        e.resolvedEmptyTrackIds.delete(a);
                                }
                            });
                        },
                        loadCards: (0, f.L3)(function* (t) {
                            let { wordsResource: a, modelActionsLogger: i } = (0, f._$)(e),
                                l = t.filter((t) => !e.requestedTrackIds.has(t));
                            if (0 !== l.length) {
                                l.forEach((t) => {
                                    e.requestedTrackIds.add(t), e.loadingTrackIds.set(t, !0);
                                });
                                try {
                                    var r, s, n, o, d, g;
                                    e.loadingState = ev.G.PENDING;
                                    let t = yield null != (n = null == (r = e.viewedStore) ? void 0 : r.getViewedIds()) ? n : Promise.resolve([]),
                                        i = Array.from(new Set([...e.viewedCardIds, ...t])),
                                        u = yield null != (o = null == (s = e.viewedStore) ? void 0 : s.getViewedBigCards()) ? o : Promise.resolve([]),
                                        c = new Map();
                                    u.forEach((e) => {
                                        c.set(e.cardId, new Set(e.bigCardIds));
                                    }),
                                        e.viewedBigCardIdsByCardId.forEach((e, t) => {
                                            var a;
                                            let i = null != (a = c.get(t)) ? a : new Set();
                                            e.forEach((e) => i.add(e)), c.set(t, i);
                                        });
                                    let m = Array.from(c.entries()).map((e) => {
                                            let [t, a] = e;
                                            return { cardId: t, bigCardIds: Array.from(a) };
                                        }),
                                        { concerts: p } = (0, R.M)(e),
                                        y = p.concertsLocationForRequest,
                                        S = yield a.cards({ trackIds: l, viewedCards: i, viewedBigCards: m, locations: y });
                                    e.viewedCardIds.clear(),
                                        e.viewedBigCardIdsByCardId.clear(),
                                        i.length > 0 && (null == (d = e.viewedStore) || d.clearSentIds(i)),
                                        m.length > 0 && (null == (g = e.viewedStore) || g.clearSentBigCards(m)),
                                        S.forEach((t) => {
                                            let a = t.cards[0];
                                            a &&
                                                e.cards.set(
                                                    t.id,
                                                    ((e) => {
                                                        var t, a, i, l, r, s;
                                                        let { card: n, feedbackState: o } = e,
                                                            d = n.action
                                                                ? ((l = n.action),
                                                                  (null == (t = n.tags) ? void 0 : t.includes(E.DONATION))
                                                                      ? lI(l.link)
                                                                          ? { title: l.title, url: l.link }
                                                                          : void 0
                                                                      : { title: l.title, url: null != (s = null != (r = l.weblink) ? r : l.link) ? s : '' })
                                                                : void 0,
                                                            g = Array.isArray(n.tags) ? n.tags.filter((e) => 'string' == typeof e) : void 0,
                                                            u = Array.isArray(n.sources) ? n.sources.map(dK) : void 0,
                                                            c = Array.isArray(n.bigCardIds) ? n.bigCardIds.filter((e) => 'string' == typeof e) : void 0,
                                                            m = null == (a = n.analyticPayload) ? void 0 : a.objectType,
                                                            p = null == (i = n.analyticPayload) ? void 0 : i.objectId;
                                                        return (0, f.wg)({
                                                            id: n.id,
                                                            text: n.text,
                                                            tags: g,
                                                            action: d,
                                                            sources: u,
                                                            bigCardIds: c,
                                                            feedbackState: o,
                                                            analyticObjectId: p,
                                                            analyticObjectType: m,
                                                        });
                                                    })(a),
                                                );
                                        }),
                                        l.forEach((t) => {
                                            e.cards.has(t) ? e.resolvedEmptyTrackIds.delete(t) : e.resolvedEmptyTrackIds.add(t);
                                        }),
                                        l.forEach((t) => e.loadingTrackIds.delete(t)),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    (e.loadingState = ev.G.REJECT),
                                        l.forEach((t) => {
                                            e.requestedTrackIds.delete(t), e.loadingTrackIds.delete(t), e.resolvedEmptyTrackIds.delete(t);
                                        }),
                                        i.error(t);
                                }
                            }
                        }),
                        loadBigCard: (0, f.L3)(function* (t) {
                            var a;
                            let { wordsResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                r = e.activeBigCardId === t;
                            if (((e.activeBigCardId = t), (null == (a = e.activeBigCard) ? void 0 : a.id) === t)) {
                                e.bigCardLoadingState.loadingState = ev.G.RESOLVE;
                                return;
                            }
                            if (!r || !e.bigCardLoadingState.isLoading) {
                                (e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = ev.G.PENDING);
                                try {
                                    let a = yield i.bigCards({ bigCardIds: [t] });
                                    if (e.activeBigCardId !== t) return;
                                    let l = a.find((e) => e.id === t);
                                    if (l) {
                                        (e.activeBigCard = l), (e.bigCardLoadingState.loadingState = ev.G.RESOLVE);
                                        return;
                                    }
                                    e.bigCardLoadingState.loadingState = ev.G.REJECT;
                                } catch (a) {
                                    e.activeBigCardId === t && ((e.activeBigCard = void 0), (e.bigCardLoadingState.loadingState = ev.G.REJECT)), l.error(a);
                                }
                            }
                        }),
                    }));
            !(function (e) {
                (e.AWAKENED = 'awakened'), (e.UNAWAKENED = 'unawakened');
            })(S || (S = {}));
            let dN = [
                    {
                        [iA.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ef3dacc851cba63a44/%%',
                        [iA.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa855b357516550b967b1/%%',
                    },
                    {
                        [iA.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69dcb1f03dacc851cba63a45/%%',
                        [iA.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa856b357516550b967b2/%%',
                    },
                    {
                        [iA.S.Dark]: 'avatars.mds.yandex.net/get-music-misc/28592/img.69dcb1ee3dacc851cba63a43/%%',
                        [iA.S.Light]: 'avatars.mds.yandex.net/get-music-misc/34161/img.69daa854b357516550b967b0/%%',
                    },
                ],
                dA = (e) => {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = (Math.imul(t, 31) + e.charCodeAt(a)) >>> 0;
                    return t;
                },
                dh = f.gK.model('LumenThemes', { light: tY.$, dark: tY.$ }),
                dC = f.gK
                    .compose(f.gK.model('Lumen', { status: f.gK.maybeNull(f.gK.enumeration(Object.values(S))), themes: f.gK.maybeNull(dh) }), V.X)
                    .views((e) => ({
                        get isAwakened() {
                            return e.status === S.AWAKENED;
                        },
                        get isEnabled() {
                            let { experiments: t } = (0, R.M)(e);
                            return t.checkExperiment(k.z.WebNextQueryToVibeXLumen, 'on');
                        },
                        get isTriedToLoadData() {
                            return !e.isNeededToLoad && !e.isLoading;
                        },
                        get playButtonShowDelay() {
                            var t;
                            let { experiments: a } = (0, R.M)(e),
                                i = null == (t = a.getExperiment(k.z.WebNextQueryToVibeXLumen)) ? void 0 : t.value.playButtonShowDelay;
                            return 'number' != typeof i || Number.isNaN(i) ? 0 : Number(i);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { lumenResource: a, modelActionsLogger: i } = (0, f._$)(e),
                                { user: l } = (0, R.M)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    e.loadingState = ev.G.PENDING;
                                    let i = dA(String(l.puid)),
                                        { status: r, themes: s } = yield a.getLumen({ hash: i }, { cacheControl: t ? 'no-cache' : void 0 });
                                    (e.status = r), (e.themes = { light: (0, eQ.p)(s.light.cover), dark: (0, eQ.p)(s.dark.cover) }), (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = ev.G.REJECT);
                                }
                        }),
                        getFallbackImage: function () {
                            var e;
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            return null != (e = dN[dA(t) % dN.length]) ? e : dN[0];
                        },
                    }));
            var df = a(61341);
            let dR = f.gK
                    .model({
                        modal: rw.q,
                        target: f.gK.string,
                        isSilent: f.gK.boolean,
                        tariffOfferName: f.gK.string,
                        offersBatchId: f.gK.string,
                        offersPositionIds: f.gK.string,
                        serviceSessionId: f.gK.string,
                        status: f.gK.enumeration(Object.values(df.c)),
                    })
                    .views((e) => ({
                        get isSuccess() {
                            return e.status === df.c.SUCCESS;
                        },
                        get isError() {
                            return e.status === df.c.ERROR;
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
                            e.status = t;
                        },
                        reset() {
                            (e.target = ''),
                                (e.tariffOfferName = ''),
                                (e.offersBatchId = ''),
                                (e.offersPositionIds = ''),
                                (e.serviceSessionId = ''),
                                (e.status = df.c.IDLE);
                        },
                        onModalOpenChange(t) {
                            e.modal.onOpenChange(t), e.status === df.c.SUCCESS && window.location.reload();
                        },
                    })),
                dk = f.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get isPaywallOpen() {
                                let { paywall: t } = (0, R.M)(e);
                                return t.modal.isOpened;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, R.M)(e),
                                    i = null == (a = t.getExperiment(k.z.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if ('number' != typeof i || Number.isNaN(i)) return 2592e5;
                                return i;
                            },
                            get intervalMsCrackdown() {
                                var i;
                                let { experiments: t } = (0, R.M)(e),
                                    a = null == (i = t.getExperiment(k.z.WebNextPaywallCrackdownInterval)) ? void 0 : i.value.interval;
                                if ('number' != typeof a || Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var l, r;
                                let { settings: a } = (0, R.M)(e);
                                if (null == (l = a.browserInfo) ? void 0 : l.isMobile) return !1;
                                let { localStorage: i } = (0, f._$)(e),
                                    s = null == (r = i.get(rD.c.DesktopPaywall)) ? void 0 : r.lastOnLoadShowDate;
                                if (void 0 === s) return !0;
                                return new Date(s).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, R.M)(e);
                                if (t.modal.isOpened || a.isOpened) return !1;
                                return !0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        showPaywall() {
                            let { paywall: t, settings: a } = (0, R.M)(e),
                                { localStorage: i } = (0, f._$)(e);
                            a.isMobile;
                        },
                        clearCrackdownTimeout() {
                            null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                        },
                        startCrackdownTimeout() {
                            let { paywall: t, settings: a, experiments: i } = (0, R.M)(e);
                            a.isMobile;
                        },
                    })),
                dD = f.gK.model('CreatePlaylist', { meta: f.gK.maybeNull(tu.$) }).actions((e) => ({
                    create: (0, f.L3)(function* (t) {
                        if (!(0, f._n)(e)) return null;
                        let { usersResource: a, modelActionsLogger: i } = (0, f._$)(e),
                            { user: l } = (0, R.M)(e);
                        if (!l.isAuthorized) return null;
                        let r = l.account.data.uid;
                        try {
                            let i = yield a.createPlaylist({ userId: String(r), ...t });
                            return (e.meta = (0, e3.j)(i)), e.meta.uuid;
                        } catch (e) {
                            return i.error(e), null;
                        }
                    }),
                    reset() {
                        e.meta = null;
                    },
                }));
            var d_ = a(54667);
            let dP = f.gK.model({ text: f.gK.string, buttonText: f.gK.string, href: f.gK.string }),
                dO = f.gK
                    .compose(f.gK.model('RedAlert', { data: f.gK.maybeNull(dP) }), V.X)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, R.M)(e);
                            return t.layout !== d_.u.Mobile && !!e.data;
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
                        getData: (0, f.L3)(function* () {
                            if (e.loadingState === ev.G.PENDING) return;
                            let { user: t } = (0, R.M)(e),
                                { redAlertResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (!t.isAuthorized) {
                                e.loadingState = ev.G.IDLE;
                                return;
                            }
                            e.loadingState = ev.G.PENDING;
                            try {
                                let t = yield a.getRedAlerts({ service: 'music', client: 'music-web', platform: 'web' });
                                (e.data = ((e) => {
                                    let t = e.alerts.find((e) => {
                                        let { id: t } = e;
                                        return 'music-grace' === t;
                                    });
                                    return void 0 === t ? null : (0, f.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = ev.G.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.loadingState = ev.G.REJECT);
                            }
                        }),
                    }));
            var dw = a(44944),
                dG = a(36516),
                dM = a(1714);
            let dU = (e) => (0, f.wg)({ uri: null == e ? void 0 : e.uri, color: null == e ? void 0 : e.color, videoUrl: null == e ? void 0 : e.videoUrl }),
                dB = (e) => (0, f.wg)({ value: e.value, title: e.title, titleType: e.titleType, subtitle: e.subtitle, cover: e.cover, coverType: e.coverType });
            !(function (e) {
                (e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE');
            })(K || (K = {}));
            let dV = (e) => {
                    let t = ((e) =>
                        (0, f.wg)({
                            contentBackground: e.contentBackground ? dU(e.contentBackground) : void 0,
                            shareBackground: e.shareBackground ? dU(e.shareBackground) : void 0,
                            contentLogo: e.contentLogo ? dU(e.contentLogo) : void 0,
                            metaLabel: e.metaLabel,
                            artists: e.artists,
                            artistTextColor: e.artistTextColor,
                            contentDescription: e.contentDescription,
                        }))(e.data);
                    switch (e.type) {
                        case K.LINEUP:
                            return (0, f.wg)({ type: e.type, data: { ...t, eventTagLabel: e.data.eventTagLabel } });
                        case K.LINEUP_WITH_FESTIVAL:
                            return (0, f.wg)({ type: e.type, data: { ...t, contentImage: dU(e.data.contentImage) } });
                        case K.LINEUP_WITH_FESTIVAL_IMAGE:
                            return (0, f.wg)({
                                type: e.type,
                                data: { ...t, contentImage: dU(e.data.contentImage), festivalTitle: e.data.festivalTitle, festivalTextColor: e.data.festivalTextColor },
                            });
                    }
                },
                dF = (e) => (0, f.wg)({ value: e.value, valueDescription: e.valueDescription, valueSuffix: e.valueSuffix, footer: e.footer }),
                dx = (e) => {
                    var t, a, i, l, r, s, n;
                    return {
                        label: null != (i = e.label) ? i : null,
                        description: null != (l = e.description) ? l : null,
                        track: {
                            title: null != (r = e.track.title) ? r : null,
                            coverUri: null != (s = null == (t = e.track.cover) ? void 0 : t.uri) ? s : null,
                            artistsName: null != (n = null == (a = e.track.artists) ? void 0 : a.map((e) => e.name).join(', ')) ? n : null,
                        },
                    };
                },
                dj = (e, t) => {
                    var a, i, l, r, s, n, o, d, g, u, c, m, p, y, E, S;
                    let K, b, v;
                    if (null == (a = e.button) ? void 0 : a.type)
                        switch (e.button.type) {
                            case dG.m.ACTION:
                                K = ((e) => {
                                    var t;
                                    return (0, f.wg)({
                                        type: dG.m.ACTION,
                                        data: { title: e.data.title, imageUrl: e.data.imageUrl, url: null == (t = e.data.action) ? void 0 : t.weblink },
                                    });
                                })(e.button);
                                break;
                            case dG.m.SIMPLE:
                                K = ((e) =>
                                    (0, f.wg)({
                                        type: dG.m.SIMPLE,
                                        data: { title: e.data.title, buttonColor: e.data.buttonColor, textColor: e.data.textColor, url: e.data.action.weblink },
                                    }))(e.button);
                                break;
                            case dG.m.SHARE:
                                K = ((e) => {
                                    let { data: t } = e;
                                    return (0, f.wg)({ type: dG.m.SHARE, data: { title: t.title, buttonColor: t.bgColor, textColor: t.titleColor } });
                                })(e.button);
                                break;
                            case dG.m.LIKE:
                                K = ((e) => {
                                    var t, a, i, l;
                                    let { data: r } = e;
                                    return (0, f.wg)({
                                        type: dG.m.LIKE,
                                        data: {
                                            entityId: r.entityId,
                                            entityType: r.entityType,
                                            unliked: {
                                                title: r.unliked.title,
                                                buttonColor: null != (t = r.unliked.buttonColor) ? t : null,
                                                textColor: null != (a = r.unliked.textColor) ? a : null,
                                                enabled: r.unliked.enabled,
                                            },
                                            liked: {
                                                title: r.liked.title,
                                                buttonColor: null != (i = r.liked.buttonColor) ? i : null,
                                                textColor: null != (l = r.liked.textColor) ? l : null,
                                                enabled: r.liked.enabled,
                                            },
                                        },
                                    });
                                })(e.button);
                        }
                    let I = null != (n = e.background.videoUrl) ? n : '';
                    if (null == (i = e.content) ? void 0 : i.type)
                        switch (null == (o = e.content) ? void 0 : o.type) {
                            case dw.x.CHART:
                                b = ((e) =>
                                    (0, f.wg)({
                                        type: e.type,
                                        data: { description: e.data.description, isOrderVisible: !!e.data.isOrderVisible, items: e.data.items.map(dB) },
                                    }))(e.content);
                                break;
                            case dw.x.CHART_FAVORITES:
                                b = ((e) =>
                                    (0, f.wg)({
                                        type: e.type,
                                        data: {
                                            value: e.data.value,
                                            valueDescription: e.data.valueDescription,
                                            valueSuffix: e.data.valueSuffix,
                                            footer: e.data.footer,
                                            description: e.data.description,
                                            isOrderVisible: !!e.data.isOrderVisible,
                                            items: e.data.items.map(dB),
                                        },
                                    }))(e.content);
                                break;
                            case dw.x.SINGLE_ENTITY:
                                b = ((e) =>
                                    (0, f.wg)({
                                        type: e.type,
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            entityType: e.data.entityType,
                                            cover: dU(e.data.cover),
                                            align: e.data.align,
                                            smallRoundCover: e.data.smallRoundCover ? dU(e.data.smallRoundCover) : void 0,
                                            ...((e) => {
                                                let { coverMask: t, coverBackground: a } = e;
                                                return (t && a) || ((t = dM.g2), (a = dM.wO)), { coverMask: t, coverBackground: a };
                                            })(e.data),
                                        },
                                    }))(e.content);
                                break;
                            case dw.x.STATS:
                                b = ((e) => {
                                    var t;
                                    return (0, f.wg)({
                                        type: e.type,
                                        data: {
                                            header: e.data.header,
                                            footer: null != (t = e.data.footer) ? t : void 0,
                                            align: e.data.align,
                                            stats: e.data.stats.map(dF),
                                        },
                                    });
                                })(e.content);
                                break;
                            case dw.x.TEXT:
                                b = ((e) =>
                                    (0, f.wg)({
                                        type: e.type,
                                        data: { title: e.data.title, subtitle: e.data.subtitle, align: e.data.align, titleSize: e.data.titleSize },
                                        disclaimer: null == e ? void 0 : e.disclaimer,
                                    }))(e.content);
                                break;
                            case dw.x.TEXT_FACT:
                                b = ((e) => {
                                    var t, a, i;
                                    return (0, f.wg)({
                                        type: e.type,
                                        data: {
                                            ...dF(e.data),
                                            coverType: null != (t = e.data.coverType) ? t : null,
                                            coverTitle: null != (a = e.data.coverTitle) ? a : null,
                                            smallCover: null != (i = e.data.smallCover) ? i : null,
                                        },
                                    });
                                })(e.content);
                                break;
                            case dw.x.CHART_ARTIST:
                                b = ((e) => {
                                    let t = e.data.cover ? dU(e.data.cover) : null;
                                    return (0, f.wg)({ type: e.type, data: { title: e.data.title, cover: t, items: e.data.items.map(dB) } });
                                })(e.content);
                                break;
                            case dw.x.ARTISTS:
                                b = ((e) => {
                                    let t = e.data.covers ? e.data.covers.slice(0, 3).map(dU) : [];
                                    return (0, f.wg)({
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
                            case dw.x.TEXT_EXTENDED:
                                b = ((e) => {
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
                            case dw.x.THEN_NOW_COMPARISON:
                                b = ((e) => {
                                    var t, a;
                                    return {
                                        type: e.type,
                                        data: {
                                            title: null != (t = e.data.title) ? t : null,
                                            subtitle: null != (a = e.data.subtitle) ? a : null,
                                            firstItem: e.data.firstItem ? dx(e.data.firstItem) : null,
                                            secondItem: e.data.secondItem ? dx(e.data.secondItem) : null,
                                        },
                                    };
                                })(e.content);
                                break;
                            case dw.x.PAY_CARD:
                                b = ((e) => {
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
                            case dw.x.CAROUSEL:
                                (b = ((e) => {
                                    let t = e.data.items.map((e) => ({
                                        data: {
                                            title: e.data.title,
                                            subtitle: e.data.subtitle,
                                            description: e.data.description,
                                            cover: dU(e.data.cover),
                                            coverPlaceholder: e.data.coverPlaceholder,
                                            coverMask: e.data.coverMask,
                                            coverBackground: e.data.coverBackground,
                                        },
                                    }));
                                    return (0, f.wg)({ type: e.type, data: { savedChoiceKey: e.data.savedChoiceKey, items: t } });
                                })(e.content)),
                                    (v = null == (g = e.content) || null == (d = g.data) ? void 0 : d.savedChoiceKey);
                                break;
                            case dw.x.COLLAGE:
                                (b = ((e) => {
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
                                    return (0, f.wg)({ type: a, data: { items: i } });
                                })(e.content)),
                                    (I = '');
                                break;
                            case dw.x.LINEUP:
                                (b = ((e) => {
                                    let t = e.data.items.map(dV);
                                    return (0, f.wg)({ type: e.type, data: { items: t } });
                                })(e.content)),
                                    (I = '');
                                break;
                            case dw.x.LUMEN:
                                b = ((e) => {
                                    var t, a, i;
                                    return (0, f.wg)({
                                        type: e.type,
                                        data: {
                                            query: { image: dU(e.data.query.image), text: e.data.query.text, textColor: null != (t = e.data.query.textColor) ? t : null },
                                            title: null != (a = e.data.title) ? a : null,
                                            subtitle: null != (i = e.data.subtitle) ? i : null,
                                        },
                                    });
                                })(e.content);
                        }
                    let L = null != (u = null == (l = e.trailer) ? void 0 : l.tracks) ? u : [],
                        T = null != (c = null == (r = e.meta) ? void 0 : r.animationDelay) ? c : dM.fZ;
                    return (0, f.wg)({
                        id: e.id,
                        background: {
                            animationDelay: T,
                            bgImageUrl: null != (m = e.background.bgImageUrl) ? m : '',
                            videoUrl: I,
                            withSound: !!e.background.withSound,
                            firstFrameVideoUrl: null != (p = e.background.firstFrameVideoUrl) ? p : '',
                            lastFrameVideoUrl: null != (y = e.background.lastFrameVideoUrl) ? y : '',
                            withPersonalColor: !!e.background.withPersonalColor,
                            videoLoopEnabled: !!e.background.videoLoopEnabled,
                        },
                        slideColor: null == (s = e.meta) ? void 0 : s.color,
                        button: K,
                        content: b,
                        trailerRawTracks: L,
                        logo: null != (E = null == t ? void 0 : t.logo) ? E : null,
                        promoLogo: null != (S = e.promoLogo) ? S : null,
                        savedChoiceKey: v,
                    });
                },
                dW = f.gK.model('SlideButtonActionData', { title: f.gK.maybeNull(f.gK.string), imageUrl: f.gK.maybeNull(f.gK.string), url: f.gK.maybeNull(f.gK.string) }),
                dX = f.gK.model('SlideButtonAction', { type: f.gK.literal(dG.m.ACTION), data: dW }),
                dY = f.gK.model('SlideButtonLikeState', {
                    title: f.gK.string,
                    buttonColor: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                    enabled: f.gK.boolean,
                }),
                d$ = f.gK.model('SlideButtonLikeData', { entityId: f.gK.string, entityType: f.gK.string, unliked: dY, liked: dY }),
                dH = f.gK.model('SlideButtonLike', { type: f.gK.literal(dG.m.LIKE), data: d$ }),
                dJ = f.gK.model('SlideButtonSimpleData', {
                    title: f.gK.maybeNull(f.gK.string),
                    buttonColor: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                }),
                dq = f.gK.model('SlideButtonShare', { type: f.gK.literal(dG.m.SHARE), data: dJ }),
                dz = f.gK.model('SlideButtonSimpleData', {
                    title: f.gK.maybeNull(f.gK.string),
                    buttonColor: f.gK.maybeNull(f.gK.string),
                    textColor: f.gK.maybeNull(f.gK.string),
                    url: f.gK.maybeNull(f.gK.string),
                }),
                dQ = f.gK.model('SlideButtonSimple', { type: f.gK.literal(dG.m.SIMPLE), data: dz }),
                dZ = f.gK.model('SlideContentCover', { uri: f.gK.maybeNull(f.gK.string), color: f.gK.maybeNull(f.gK.string), videoUrl: f.gK.maybeNull(f.gK.string) }),
                d0 = f.gK.model('SlideContentStat', {
                    value: f.gK.maybeNull(f.gK.number),
                    valueDescription: f.gK.maybeNull(f.gK.string),
                    valueSuffix: f.gK.maybeNull(f.gK.string),
                    footer: f.gK.maybeNull(f.gK.string),
                }),
                d1 = f.gK.compose(f.gK.model('SlideContentArtistsModelData', { covers: f.gK.array(dZ) }), d0),
                d3 = f.gK.model('SlideContentArtistsModel', { type: f.gK.literal(dw.x.ARTISTS), data: f.gK.maybe(d1) }),
                d2 = f.gK.model('SlideContentCarouselItemData', {
                    title: f.gK.maybe(f.gK.string),
                    subtitle: f.gK.maybe(f.gK.string),
                    description: f.gK.maybe(f.gK.string),
                    cover: dZ,
                    coverMask: f.gK.maybe(f.gK.string),
                    coverBackground: f.gK.maybe(f.gK.string),
                    coverPlaceholder: f.gK.maybe(f.gK.string),
                }),
                d6 = f.gK.model('SlideContentCarouselItem', { data: d2 }),
                d4 = f.gK.model('SlideContentCarouselData', { savedChoiceKey: f.gK.maybe(f.gK.string), items: f.gK.array(d6) }),
                d5 = f.gK.model('SlideContentCarousel', { type: f.gK.literal(dw.x.CAROUSEL), data: f.gK.maybe(d4) }),
                d9 = f.gK.model('SlideContentItem', {
                    value: f.gK.maybeNull(f.gK.number),
                    title: f.gK.maybeNull(f.gK.string),
                    titleType: f.gK.maybeNull(f.gK.string),
                    subtitle: f.gK.maybeNull(f.gK.string),
                    cover: f.gK.maybeNull(dZ),
                    coverType: f.gK.maybeNull(f.gK.string),
                }),
                d7 = f.gK.model('SlideContentChartArtistData', { title: f.gK.maybeNull(f.gK.string), cover: f.gK.maybeNull(dZ), items: f.gK.array(d9) }),
                d8 = f.gK.model('SlideContentChartArtist', { type: f.gK.literal(dw.x.CHART_ARTIST), data: f.gK.maybe(d7) }),
                ge = f.gK.compose(
                    f.gK.model('SlideContentChartFavoritesData', { description: f.gK.maybeNull(f.gK.string), isOrderVisible: f.gK.boolean, items: f.gK.array(d9) }),
                    d0,
                ),
                gt = f.gK.model('SlideContentChartFavorites', { type: f.gK.literal(dw.x.CHART_FAVORITES), data: f.gK.maybe(ge) }),
                ga = f.gK.model('SlideContentChartData', { description: f.gK.maybeNull(f.gK.string), isOrderVisible: f.gK.boolean, items: f.gK.array(d9) }),
                gi = f.gK.model('SlideContentChart', { type: f.gK.literal(dw.x.CHART), data: f.gK.maybe(ga) }),
                gl = f.gK.model('SlideContentCollageRectangle', { x: f.gK.number, y: f.gK.number, z: f.gK.number, width: f.gK.number, height: f.gK.number }),
                gr = f.gK.model('SlideContentCollageBottomBlockItemData', {
                    key: f.gK.maybe(f.gK.string),
                    title: f.gK.maybe(f.gK.string),
                    subtitle: f.gK.maybe(f.gK.string),
                }),
                gs = f.gK.model('SlideContentCollageBottomBlockItem', { type: f.gK.string, data: gr }),
                gn = f.gK.model('SlideContentCollageBottomBlockData', { items: f.gK.array(gs) }),
                go = f.gK.model('SlideContentCollageTopBlockItemData', { key: f.gK.maybe(f.gK.string), uri: f.gK.maybe(f.gK.string), rectangle: gl }),
                gd = f.gK.model('SlideContentCollageTopBlockItem', { type: f.gK.string, data: go }),
                gg = f.gK.model('SlideContentCollageTopBlockData', {
                    background: f.gK.model('SlideContentCollageTopBlockBackground', { uri: f.gK.maybe(f.gK.string) }),
                    items: f.gK.array(gd),
                }),
                gu = f.gK.model('SlideContentCollageItem', {
                    contentBackground: f.gK.model('SlideContentCollageContentBackground', { uri: f.gK.maybe(f.gK.string) }),
                    bottomBlock: f.gK.model('SlideContentCollageBottomBlock', { type: f.gK.string, data: gn }),
                    topBlock: f.gK.model('SlideContentCollageTopBlock', { type: f.gK.string, data: gg }),
                }),
                gc = f.gK.model('SlideContentCollageData', { items: f.gK.array(gu) }),
                gm = f.gK.model('SlideContentCollage', { type: f.gK.literal(dw.x.COLLAGE), data: gc }),
                gp = f.gK.model('SlideContentLineupItemData', {
                    contentBackground: f.gK.maybe(dZ),
                    shareBackground: f.gK.maybe(dZ),
                    contentLogo: f.gK.maybe(dZ),
                    metaLabel: f.gK.maybe(f.gK.string),
                    artists: f.gK.array(f.gK.string),
                    artistTextColor: f.gK.maybe(f.gK.string),
                    contentDescription: f.gK.maybe(f.gK.string),
                    eventTagLabel: f.gK.maybe(f.gK.string),
                    contentImage: f.gK.maybe(dZ),
                    festivalTitle: f.gK.maybe(f.gK.string),
                    festivalTextColor: f.gK.maybe(f.gK.string),
                }),
                gy = f.gK.model('SlideContentLineupItem', { type: f.gK.string, data: gp }),
                gE = f.gK.model('SlideContentLineupData', { items: f.gK.array(gy) }),
                gS = f.gK.model('SlideContentLineup', { type: f.gK.literal(dw.x.LINEUP), data: gE }),
                gK = f.gK.model('SlideContentLumenQuery', { image: dZ, text: f.gK.string, textColor: f.gK.maybeNull(f.gK.string) }),
                gb = f.gK.model('SlideContentLumenData', { query: gK, title: f.gK.maybeNull(f.gK.string), subtitle: f.gK.maybeNull(f.gK.string) }),
                gv = f.gK.model('SlideContentLumen', { type: f.gK.literal(dw.x.LUMEN), data: gb }),
                gI = f.gK.model('SlideContentPayCardData', {
                    title: f.gK.maybeNull(f.gK.string),
                    description: f.gK.maybeNull(f.gK.string),
                    artwork: f.gK.maybeNull(f.gK.string),
                }),
                gL = f.gK.model('SlideContentPayCard', { type: f.gK.literal(dw.x.PAY_CARD), data: f.gK.maybe(gI) }),
                gT = f.gK.model('SlideContentSingleEntityData', {
                    title: f.gK.maybeNull(f.gK.string),
                    subtitle: f.gK.maybeNull(f.gK.string),
                    description: f.gK.maybeNull(f.gK.string),
                    entityType: f.gK.maybeNull(f.gK.string),
                    cover: dZ,
                    coverMask: f.gK.string,
                    coverBackground: f.gK.string,
                    align: f.gK.maybe(f.gK.string),
                    smallRoundCover: f.gK.maybeNull(dZ),
                }),
                gN = f.gK.model('SlideContentSingleEntity', { type: f.gK.literal(dw.x.SINGLE_ENTITY), data: f.gK.maybe(gT) }),
                gA = f.gK.model('SlideContentStatsData', {
                    header: f.gK.maybeNull(f.gK.string),
                    footer: f.gK.maybeNull(f.gK.string),
                    align: f.gK.maybeNull(f.gK.string),
                    stats: f.gK.array(d0),
                }),
                gh = f.gK.model('SlideContentStats', { type: f.gK.literal(dw.x.STATS), data: f.gK.maybe(gA) }),
                gC = f.gK.model('SlideContentTextExtendedData', {
                    title: f.gK.maybeNull(f.gK.string),
                    subtitle: f.gK.maybeNull(f.gK.string),
                    description: f.gK.maybeNull(f.gK.string),
                }),
                gf = f.gK.model('SlideContentTextExtended', { type: f.gK.literal(dw.x.TEXT_EXTENDED), data: f.gK.maybe(gC) }),
                gR = f.gK.compose(
                    f.gK.model('SlideContentTextFactDataModel', {
                        coverType: f.gK.maybeNull(f.gK.string),
                        coverTitle: f.gK.maybeNull(f.gK.string),
                        smallCover: f.gK.maybeNull(f.gK.string),
                    }),
                    d0,
                ),
                gk = f.gK.model('SlideContentTextFact', { type: f.gK.literal(dw.x.TEXT_FACT), data: f.gK.maybe(gR) }),
                gD = f.gK.model('SlideContentTextData', {
                    title: f.gK.maybeNull(f.gK.string),
                    subtitle: f.gK.maybeNull(f.gK.string),
                    align: f.gK.maybeNull(f.gK.string),
                    titleSize: f.gK.maybeNull(f.gK.string),
                }),
                g_ = f.gK.model('SlideContentTextDisclaimer', { text: f.gK.maybeNull(f.gK.string), textColor: f.gK.maybeNull(f.gK.string) }),
                gP = f.gK.model('SlideContentText', { type: f.gK.literal(dw.x.TEXT), data: f.gK.maybe(gD), disclaimer: f.gK.maybe(g_) }),
                gO = f.gK.model('SlideContentThenNowComparisonItemTrack', {
                    title: f.gK.maybeNull(f.gK.string),
                    coverUri: f.gK.maybeNull(f.gK.string),
                    artistsName: f.gK.maybeNull(f.gK.string),
                }),
                gw = f.gK.model('SlideContentThenNowComparisonItem', {
                    label: f.gK.maybeNull(f.gK.string),
                    description: f.gK.maybeNull(f.gK.string),
                    track: f.gK.maybeNull(gO),
                }),
                gG = f.gK.model('SlideContentThenNowComparisonData', {
                    title: f.gK.maybeNull(f.gK.string),
                    subtitle: f.gK.maybeNull(f.gK.string),
                    firstItem: f.gK.maybeNull(gw),
                    secondItem: f.gK.maybeNull(gw),
                }),
                gM = f.gK.model('SlideContentThenNowComparison', { type: f.gK.literal(dw.x.THEN_NOW_COMPARISON), data: f.gK.maybe(gG) }),
                gU = f.gK.model('SlideBackground', {
                    animationDelay: f.gK.number,
                    bgImageUrl: f.gK.string,
                    videoUrl: f.gK.string,
                    withSound: f.gK.boolean,
                    firstFrameVideoUrl: f.gK.string,
                    lastFrameVideoUrl: f.gK.string,
                    withPersonalColor: f.gK.boolean,
                    videoLoopEnabled: f.gK.boolean,
                }),
                gB = f.gK
                    .model('Slide', {
                        id: f.gK.string,
                        background: gU,
                        button: f.gK.maybe(f.gK.union(dX, dq, dQ, dH)),
                        slideColor: f.gK.maybeNull(f.gK.string),
                        content: f.gK.maybe(f.gK.union(gi, gt, gN, gP, gh, gk, d8, d3, gf, gM, gL, d5, gm, gS, gv)),
                        trailerRawTracks: f.gK.maybeNull(f.gK.frozen()),
                        logo: f.gK.maybeNull(f.gK.string),
                        promoLogo: f.gK.maybeNull(f.gK.string),
                        savedChoiceKey: f.gK.maybe(f.gK.string),
                        carouselIndex: f.gK.maybe(f.gK.number),
                    })
                    .views((e) => ({
                        get hasTrailer() {
                            var t;
                            return !!(null == (t = e.trailerRawTracks) ? void 0 : t.length);
                        },
                        get entitiesData() {
                            if (!e.trailerRawTracks) return [];
                            return e.trailerRawTracks.map((e) => ({ type: av.R.SmartPreview, meta: e }));
                        },
                    }))
                    .actions((e) => ({
                        setCarouselIndex(t) {
                            e.carouselIndex = t;
                        },
                    }));
            var gV = a(9105);
            let gF = f.gK.model('SavedChoiceData', {
                    text: f.gK.maybe(f.gK.string),
                    uri: f.gK.maybe(f.gK.string),
                    coverMask: f.gK.maybe(f.gK.string),
                    coverBackground: f.gK.maybe(f.gK.string),
                }),
                gx = f.gK.model('SavedChoice', { index: f.gK.number, isSaved: f.gK.boolean, data: gF }),
                gj = f.gK
                    .model('Slides', {
                        userSlidesLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        artistSlidesLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        podcastSlidesLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        specialSlidesLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        kidsSlidesLoadingState: f.gK.enumeration(Object.values(ev.G)),
                        consumer: f.gK.maybe(f.gK.enumeration(Object.values(gV.z))),
                        artistId: f.gK.maybe(f.gK.string),
                        podcastId: f.gK.maybe(f.gK.number),
                        campaignId: f.gK.maybe(f.gK.string),
                        activeSlide: f.gK.optional(f.gK.number, 0),
                        userItems: f.gK.array(gB),
                        artistItems: f.gK.array(gB),
                        podcastItems: f.gK.array(gB),
                        specialItems: f.gK.array(gB),
                        kidsItems: f.gK.array(gB),
                        isMuted: f.gK.boolean,
                        savedChoices: f.gK.map(gx),
                        mainObjectId: f.gK.optional(f.gK.string, ''),
                    })
                    .views((e) => ({
                        get isLoaded() {
                            return (
                                e.userSlidesLoadingState === ev.G.RESOLVE ||
                                e.artistSlidesLoadingState === ev.G.RESOLVE ||
                                e.podcastSlidesLoadingState === ev.G.RESOLVE ||
                                e.specialSlidesLoadingState === ev.G.RESOLVE ||
                                e.kidsSlidesLoadingState === ev.G.RESOLVE
                            );
                        },
                        get savedChoice() {
                            var t, a;
                            if (e.consumer !== gV.z.USER) return;
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
                            getUserSlides: (0, f.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (e.userSlidesLoadingState !== ev.G.PENDING)
                                    try {
                                        e.userSlidesLoadingState = ev.G.PENDING;
                                        let i = yield a.getUserSlides();
                                        e.userSlidesLoadingState !== ev.G.IDLE && (e.userSlidesLoadingState = ev.G.RESOLVE),
                                            i.slides && ((e.consumer = gV.z.USER), (e.mainObjectId = e.consumer), (e.userItems = (0, f.wg)(t.processSlidesResponse(i)))),
                                            (e.userSlidesLoadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), e.userSlidesLoadingState !== ev.G.IDLE && ((e.userSlidesLoadingState = ev.G.REJECT), (e.userItems = (0, f.wg)([])));
                                    }
                            }),
                            getArtistSlides: (0, f.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                if (e.artistSlidesLoadingState !== ev.G.PENDING) {
                                    e.artistId = a.artistId;
                                    try {
                                        e.artistSlidesLoadingState = ev.G.PENDING;
                                        let l = yield i.getArtistSlides(a);
                                        e.artistSlidesLoadingState !== ev.G.IDLE && (e.artistSlidesLoadingState = ev.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = gV.z.ARTIST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.artistId)),
                                                (e.artistItems = (0, f.wg)(t.processSlidesResponse(l)))),
                                            (e.artistSlidesLoadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        l.error(t),
                                            e.artistSlidesLoadingState !== ev.G.IDLE && ((e.artistSlidesLoadingState = ev.G.REJECT), (e.artistItems = (0, f.wg)([])));
                                    }
                                }
                            }),
                            getPodcastSlides: (0, f.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                if (e.podcastSlidesLoadingState !== ev.G.PENDING) {
                                    e.podcastId = a.podcastId;
                                    try {
                                        e.podcastSlidesLoadingState = ev.G.PENDING;
                                        let l = yield i.getPodcastSlides(a);
                                        e.podcastSlidesLoadingState !== ev.G.IDLE && (e.podcastSlidesLoadingState = ev.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = gV.z.PODCAST),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.podcastId)),
                                                (e.podcastItems = (0, f.wg)(t.processSlidesResponse(l)))),
                                            (e.podcastSlidesLoadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        l.error(t),
                                            e.podcastSlidesLoadingState !== ev.G.IDLE && ((e.podcastSlidesLoadingState = ev.G.REJECT), (e.podcastItems = (0, f.wg)([])));
                                    }
                                }
                            }),
                            getSpecialSlides: (0, f.L3)(function* (a) {
                                let { slidesResource: i, modelActionsLogger: l } = (0, f._$)(e);
                                if (e.specialSlidesLoadingState !== ev.G.PENDING) {
                                    e.campaignId = a.campaignId;
                                    try {
                                        e.specialSlidesLoadingState = ev.G.PENDING;
                                        let l = yield i.getSpecialSlides(a);
                                        e.specialSlidesLoadingState !== ev.G.IDLE && (e.specialSlidesLoadingState = ev.G.RESOLVE),
                                            l.slides &&
                                                ((e.consumer = gV.z.SPECIAL),
                                                (e.mainObjectId = ''.concat(e.consumer, ':').concat(e.campaignId)),
                                                (e.specialItems = (0, f.wg)(t.processSlidesResponse(l)))),
                                            (e.specialSlidesLoadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        l.error(t),
                                            e.specialSlidesLoadingState !== ev.G.IDLE && ((e.specialSlidesLoadingState = ev.G.REJECT), (e.specialItems = (0, f.wg)([])));
                                    }
                                }
                            }),
                            getKidsSlides: (0, f.L3)(function* () {
                                let { slidesResource: a, modelActionsLogger: i } = (0, f._$)(e);
                                if (e.kidsSlidesLoadingState !== ev.G.PENDING)
                                    try {
                                        e.kidsSlidesLoadingState = ev.G.PENDING;
                                        let i = yield a.getKidsSlides();
                                        e.kidsSlidesLoadingState !== ev.G.IDLE && (e.kidsSlidesLoadingState = ev.G.RESOLVE),
                                            i.slides && ((e.consumer = gV.z.KIDS), (e.mainObjectId = e.consumer), (e.kidsItems = (0, f.wg)(t.processSlidesResponse(i)))),
                                            (e.kidsSlidesLoadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), e.kidsSlidesLoadingState !== ev.G.IDLE && ((e.kidsSlidesLoadingState = ev.G.REJECT), (e.kidsItems = (0, f.wg)([])));
                                    }
                            }),
                            setActiveSlide(t) {
                                e.activeSlide = t;
                            },
                            resetUser() {
                                (e.userSlidesLoadingState = ev.G.IDLE), (e.userItems = (0, f.wg)([]));
                            },
                            resetArtist() {
                                (e.artistSlidesLoadingState = ev.G.IDLE), (e.artistItems = (0, f.wg)([]));
                            },
                            resetPodcast() {
                                (e.podcastSlidesLoadingState = ev.G.IDLE), (e.podcastItems = (0, f.wg)([]));
                            },
                            resetKids() {
                                (e.kidsSlidesLoadingState = ev.G.IDLE), (e.kidsItems = (0, f.wg)([]));
                            },
                            resetSpecial() {
                                (e.specialSlidesLoadingState = ev.G.IDLE), (e.specialItems = (0, f.wg)([]));
                            },
                            saveChoice(t, a) {
                                e.savedChoices.set(t, a);
                            },
                            processSlidesResponse(e) {
                                let a = [];
                                for (let d of e.slides) {
                                    var i, l, r, s, n, o;
                                    let g = dj(d, { logo: e.logo });
                                    if ((a.push(g), g.savedChoiceKey && (null == (i = g.content) ? void 0 : i.type) === dw.x.CAROUSEL)) {
                                        let e = null == (s = g.content) || null == (r = s.data) || null == (l = r.items[0]) ? void 0 : l.data;
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
                (e.ALICE_PRO = 'alice-pro'), (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate'), (e.LUMEN = 'lumen');
            })(b || (b = {}));
            var gW = (function (e) {
                    return (e[(e.PLUS = 1)] = 'PLUS'), (e[(e.NON_PLUS = 0)] = 'NON_PLUS'), (e[(e.UNAUTHORIZED = 2)] = 'UNAUTHORIZED'), e;
                })({}),
                gX = a(2047);
            let gY = (e) => {
                    var t, a;
                    return (0, f.wg)({
                        loadingState: ev.G.RESOLVE,
                        showWizard: !e.wizardIsPassed,
                        userCollectionHue: e.userCollectionHue,
                        isChildModeEnabled: !!e.childModEnabled,
                        userMusicVisibility: null != (a = null == (t = e.userMusicVisibility) ? void 0 : t.toLowerCase()) ? a : gX.L.PUBLIC,
                    });
                },
                g$ = f.gK.model({
                    uid: f.gK.maybe(f.gK.number),
                    hasPlus: f.gK.maybe(f.gK.boolean),
                    login: f.gK.maybe(f.gK.string),
                    avatarId: f.gK.maybe(f.gK.string),
                    isChild: f.gK.maybe(f.gK.boolean),
                    publicId: f.gK.maybe(f.gK.string),
                    publicName: f.gK.maybe(f.gK.string),
                    userSessionRegionIso: f.gK.maybe(f.gK.string),
                    geoRegionIso: f.gK.maybe(f.gK.string),
                    serviceAvailable: f.gK.maybe(f.gK.boolean),
                    options: f.gK.maybe(f.gK.array(f.gK.string)),
                }),
                gH = f.gK.compose(f.gK.model('Account', { data: g$ }), V.X),
                gJ = f.gK.compose(
                    f.gK.model('Settings', {
                        showWizard: f.gK.optional(f.gK.boolean, !0),
                        userCollectionHue: f.gK.maybe(f.gK.number),
                        isChildModeEnabled: f.gK.optional(f.gK.boolean, !1),
                        userMusicVisibility: f.gK.optional(f.gK.string, gX.L.PUBLIC),
                    }),
                    V.X,
                ),
                gq = f.gK
                    .model('User', { account: gH, settings: gJ, userCollectionHue: f.gK.maybe(f.gK.number) })
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
                            return null == (a = e.account.data.options) ? void 0 : a.includes(b.ALICE_PRO);
                        },
                        get isLumenAvailable() {
                            var i;
                            return null == (i = e.account.data.options) ? void 0 : i.includes(b.LUMEN);
                        },
                        get advertRole() {
                            if (!this.isAuthorized) return gW.UNAUTHORIZED;
                            if (this.hasPlus) return gW.PLUS;
                            return gW.NON_PLUS;
                        },
                    }))
                    .actions((e) => ({
                        getAbout: (0, f.L3)(function* (t) {
                            let { accountResource: a, modelActionsLogger: i, containerStorage: l } = (0, f._$)(e);
                            if (!e.account.isLoading)
                                try {
                                    e.account.loadingState = ev.G.PENDING;
                                    let i = t;
                                    i || (i = yield a.about()),
                                        l.set(rD.c.YmUid, i.uid),
                                        (e.account.data = ((e) => {
                                            let t = e.options ? e.options.filter((e) => 'string' == typeof e) : void 0;
                                            return (0, f.wg)({
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
                                        (e.account.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.account.loadingState = ev.G.REJECT);
                                }
                        }),
                        getSettings: (0, f.L3)(function* () {
                            let { accountResource: t, modelActionsLogger: a } = (0, f._$)(e);
                            if (e.settings.loadingState !== ev.G.PENDING)
                                try {
                                    e.settings.loadingState = ev.G.PENDING;
                                    let a = yield t.settings();
                                    e.settings = gY(a);
                                } catch (t) {
                                    a.error(t), (e.settings.showWizard = !1), (e.settings.loadingState = ev.G.REJECT);
                                }
                        }),
                        setSettings: (0, f.L3)(function* (t) {
                            let { isChildModeEnabled: a, userMusicVisibility: i } = t,
                                { accountResource: l, modelActionsLogger: r } = (0, f._$)(e);
                            try {
                                let t = {};
                                'boolean' == typeof a && ((t.childModEnabled = a), (e.settings.isChildModeEnabled = a)),
                                    i && ((t.userMusicVisibility = i), (e.settings.userMusicVisibility = i));
                                let r = yield l.settings(t);
                                if (((e.settings = gY(r)), r.childModEnabled !== a)) return aV.F.ERROR;
                                return aV.F.OK;
                            } catch (e) {
                                return r.error(e), aV.F.ERROR;
                            }
                        }),
                        setUnauthorized: () => {
                            e.account.loadingState = ev.G.RESOLVE;
                        },
                        setUserCollectionHue: (t) => {
                            e.userCollectionHue = t;
                        },
                    })),
                gz = f.gK.model('EntityRef', { entityType: f.gK.enumeration(Object.values(t9.n)), entityId: f.gK.union(f.gK.string, f.gK.number) }),
                gQ = f.gK
                    .compose(
                        f.gK.model('DisclaimerModalState', {
                            currentEntityRef: f.gK.maybeNull(gz),
                            type: f.gK.maybeNull(f.gK.enumeration(Object.values(t9.Z))),
                            id: f.gK.maybeNull(f.gK.string),
                            isUnsafeDisclaimerConfirmed: f.gK.optional(f.gK.boolean, !1),
                            shouldHistoryBack: f.gK.optional(f.gK.boolean, !1),
                            shouldCloseModalOnOutsidePress: f.gK.optional(f.gK.boolean, !0),
                            shouldCloseModalOnEscape: f.gK.optional(f.gK.boolean, !0),
                            entityKey: f.gK.maybeNull(f.gK.string),
                            modalData: f.gK.maybeNull(f.gK.frozen()),
                        }),
                        V.X,
                    )
                    .volatile(() => ({ onDisclaimerConfirmHandler: null, onDisclaimerRejectHandler: null }))
                    .views((e) => ({
                        get entityType() {
                            var t, a;
                            return null != (a = null == (t = e.currentEntityRef) ? void 0 : t.entityType) ? a : null;
                        },
                        get entityId() {
                            var i, l;
                            return null != (l = null == (i = e.currentEntityRef) ? void 0 : i.entityId) ? l : null;
                        },
                        get isNeededToLoad() {
                            return e.loadingState === ev.G.IDLE;
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
                            (e.currentEntityRef = null),
                                (e.id = null),
                                (e.type = null),
                                (e.isUnsafeDisclaimerConfirmed = !1),
                                (e.shouldHistoryBack = !1),
                                (e.shouldCloseModalOnOutsidePress = !0),
                                (e.shouldCloseModalOnEscape = !0),
                                (e.loadingState = ev.G.IDLE),
                                (e.entityKey = null),
                                (e.modalData = null),
                                (e.onDisclaimerConfirmHandler = null),
                                (e.onDisclaimerRejectHandler = null);
                        },
                    })),
                gZ = V.X.named('DisclaimersDictionary').actions((e) => {
                    let t,
                        a,
                        i,
                        { disclaimerDictionary: l, modelActionsLogger: r } = (0, f._$)(e),
                        s = {
                            syncLoadingState() {
                                if (l.isLoading.value) {
                                    e.loadingState = ev.G.PENDING;
                                    return;
                                }
                                if (l.error.value) {
                                    e.loadingState = ev.G.REJECT;
                                    return;
                                }
                                if (l.items.value) {
                                    e.loadingState = ev.G.RESOLVE;
                                    return;
                                }
                                e.loadingState = ev.G.IDLE;
                            },
                            afterCreate() {
                                (t = l.items.onChange(() => {
                                    s.syncLoadingState();
                                })),
                                    (a = l.isLoading.onChange(() => {
                                        s.syncLoadingState();
                                    })),
                                    (i = l.error.onChange(() => {
                                        s.syncLoadingState();
                                    }));
                            },
                            beforeDestroy() {
                                null == t || t(), null == a || a(), null == i || i();
                            },
                            getDisclaimers: (0, f.L3)(function* () {
                                try {
                                    yield l.load();
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            getDisclaimerById: (0, f.L3)(function* (e) {
                                try {
                                    return yield l.getById(e);
                                } catch (e) {
                                    r.error(e);
                                    return;
                                }
                            }),
                        };
                    return s;
                });
            var g0 = a(80725),
                g1 = a(12583);
            let g3 = (e, t) => (t ? e.get(rD.c.OverwrittenExperiments) : null),
                g2 = new Set(Object.values(k.z)),
                g6 = f.gK
                    .model('Experiments', {
                        loadingState: f.gK.enumeration(Object.values(ev.G)),
                        experiments: f.gK.optional(f.gK.frozen(), {}),
                        overwrittenExperiments: f.gK.optional(f.gK.frozen(), {}),
                    })
                    .views((e) => {
                        let t = {
                            getOverwrittenExperiments() {
                                let { containerStorage: t, clientSafeConfig: a } = (0, f._$)(e);
                                return g3(t, a.get(g1.yc));
                            },
                            getExperiment(a) {
                                var i;
                                let l = e.experiments[a],
                                    r = t.getOverwrittenExperiments(),
                                    s = e.overwrittenExperiments;
                                return (null == s ? void 0 : s[a]) ?? (null == r ? void 0 : r[a]) ?? window?.DEFAULT_MUSIC_EXPERIMENT_OVERRIDES?.()?.[a] ?? l;
                            },
                            isExperimentActive(e) {
                                var a, i;
                                let l = t.getExperiment(e),
                                    r = null != (i = null == l ? void 0 : l.group) ? i : null == l || null == (a = l.value) ? void 0 : a.title;
                                return !!r && 'default' !== r;
                            },
                            isExperimentEnabled(e) {
                                let a = t.getExperiment(e);
                                return (0, g0.A)(null == a ? void 0 : a.value.enabled)
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
                                let i = e.experiments[t],
                                    { containerStorage: l, clientSafeConfig: r } = (0, f._$)(e);

                                return ((e, t) => {
                                    let { containerStorage: i, name: l, value: r, experimentDetail: s } = e,
                                        n = g3(i, t),
                                        o = typeof window !== 'undefined' ? window.DEFAULT_MUSIC_EXPERIMENT_OVERRIDES?.() : void 0;

                                    if (!n && !o) return (null == s ? void 0 : s.group) === r;

                                    let c = n?.[l]?.group;
                                    return (c ?? o?.[l] ?? (null == s ? void 0 : s.group)) === r;
                                })({ containerStorage: l, name: t, value: a, experimentDetail: i }, r.get(g1.yc));
                            },
                            isRejected: () => e.loadingState === ev.G.REJECT,
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, f.L3)(function* (t) {
                            let { accountResource: a, modelActionsLogger: i } = (0, f._$)(e);
                            if (e.loadingState !== ev.G.PENDING)
                                try {
                                    let i;
                                    e.loadingState = ev.G.PENDING;
                                    let l = t;
                                    l || (l = yield a.experimentsDetails()),
                                        (i = l),
                                        (e.experiments = Object.fromEntries(
                                            Object.entries(i).filter((e) => {
                                                let [t] = e;
                                                return g2.has(t);
                                            }),
                                        )),
                                        (e.loadingState = ev.G.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = ev.G.REJECT);
                                } finally {
                                    var l;
                                    let t = null != (l = e.getOverwrittenExperiments()) ? l : {};
                                    e.overwrittenExperiments = { ...e.overwrittenExperiments, ...t };
                                }
                        }),
                        updateOverwrittenExperiments(t, a) {
                            let { clientSafeConfig: i } = (0, f._$)(e);
                            i.get(g1.yc) && (e.overwrittenExperiments = { ...e.overwrittenExperiments, [t]: a });
                        },
                        deleteOverwrittenExperiments(t) {
                            let { clientSafeConfig: a } = (0, f._$)(e);
                            if (!a.get(g1.yc)) return;
                            let { [t]: i, ...l } = e.overwrittenExperiments;
                            e.overwrittenExperiments = l;
                        },
                    }));
            var g4 = a(63380);
            let g5 = (e) => (e ? { revision: e } : { allValuesRequired: !0 });
            var g9 = (function (e) {
                    return (
                        (e.LIKED_ALBUMS = 'LIKED_ALBUMS'),
                        (e.LIKED_ARTISTS = 'LIKED_ARTISTS'),
                        (e.LIKED_TRACKS = 'LIKED_TRACKS'),
                        (e.LIKED_PLAYLISTS = 'LIKED_PLAYLISTS'),
                        (e.LIKED_CLIPS = 'LIKED_CLIPS'),
                        e
                    );
                })({}),
                g7 = (function (e) {
                    return (e.LIKED = '1'), (e.DISLIKED = '0'), e;
                })({});
            let g8 = [g9.LIKED_ALBUMS, g9.LIKED_ARTISTS, g9.LIKED_PLAYLISTS, g9.LIKED_TRACKS, g9.LIKED_CLIPS],
                ue = f.gK.optional(f.gK.map(f.gK.enumeration(Object.values(g7))), {}),
                ut = f.gK.model('LibraryRecord', { revision: f.gK.maybeNull(f.gK.number), items: ue }),
                ua = f.gK
                    .compose(f.gK.model('Library', { tracks: ut, albums: ut, artists: ut, playlists: ut, clips: ut }), V.X)
                    .views((e) => ({
                        isTrackLiked: (t) => e.tracks.items.get(String(t)) === g7.LIKED,
                        isTrackDisliked: (t) => e.tracks.items.get(String(t)) === g7.DISLIKED,
                        isArtistLiked: (t) => e.artists.items.get(String(t)) === g7.LIKED,
                        isArtistDisliked: (t) => e.artists.items.get(String(t)) === g7.DISLIKED,
                        isAlbumLiked: (t) => e.albums.items.get(String(t)) === g7.LIKED,
                        isPlaylistLiked: (t) => e.playlists.items.get(String(t)) === g7.LIKED,
                        isClipLiked: (t) => e.clips.items.get(String(t)) === g7.LIKED,
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, f.L3)(function* () {
                                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g8,
                                    { modelActionsLogger: i, collectionResource: l } = (0, f._$)(e);
                                if (e.loadingState !== ev.G.PENDING)
                                    try {
                                        e.loadingState = ev.G.PENDING;
                                        let i = {};
                                        a.includes(g9.LIKED_ALBUMS) && (i.likedAlbums = g5(e.albums.revision)),
                                            a.includes(g9.LIKED_ARTISTS) && (i.likedArtists = g5(e.artists.revision)),
                                            a.includes(g9.LIKED_TRACKS) && (i.likedTracks = g5(e.tracks.revision)),
                                            a.includes(g9.LIKED_CLIPS) && (i.likedClips = g5(e.clips.revision)),
                                            a.includes(g9.LIKED_PLAYLISTS) && (i.likedPlaylists = {});
                                        let r = yield l.sync(i);
                                        t.setAlbums(r.values.likedAlbums),
                                            t.setArtists(r.values.likedArtists),
                                            t.setPlaylists(r.values.likedPlaylists),
                                            t.setTracks(r.values.likedTracks),
                                            t.setClips(r.values.likedClips),
                                            (e.loadingState = ev.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), (e.loadingState = ev.G.REJECT);
                                    }
                            }),
                            setArtists: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.artists.revision !== a.info.revision &&
                                    (t.clearArtists(),
                                    (e.artists.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), g7.LIKED);
                                    }),
                                    a.values.disliked.map((t) => {
                                        e.artists.items.set(t.artistId.toString(), g7.DISLIKED);
                                    }));
                            },
                            setAlbums: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.albums.revision !== a.info.revision &&
                                    (t.clearAlbums(),
                                    (e.albums.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.albums.items.set(t.albumId.toString(), g7.LIKED);
                                    }));
                            },
                            setPlaylists: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    (t.clearPlaylists(),
                                    a.values.liked.map((t) => {
                                        e.playlists.items.set(''.concat(t.compositeData.uid, ':').concat(t.compositeData.kind), g7.LIKED);
                                    }));
                            },
                            setTracks: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.tracks.revision !== a.info.revision &&
                                    (t.clearTracks(),
                                    (e.tracks.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.tracks.items.set(t.trackId, g7.LIKED);
                                    }),
                                    a.values.disliked.map((t) => {
                                        e.tracks.items.set(t.trackId, g7.DISLIKED);
                                    }));
                            },
                            setClips: (a) => {
                                (null == a ? void 0 : a.values) &&
                                    e.clips.revision !== a.info.revision &&
                                    (t.clearClips(),
                                    (e.clips.revision = a.info.revision),
                                    a.values.liked.map((t) => {
                                        e.clips.items.set(t.clipId.toString(), g7.LIKED);
                                    }));
                            },
                            clearArtists: () => {
                                (e.artists.revision = null), e.artists.items.clear();
                            },
                            clearAlbums: () => {
                                (e.albums.revision = null), e.albums.items.clear();
                            },
                            clearPlaylists: () => {
                                (e.playlists.revision = null), e.playlists.items.clear();
                            },
                            clearTracks: () => {
                                (e.tracks.revision = null), e.tracks.items.clear();
                            },
                            clearClips: () => {
                                (e.clips.revision = null), e.clips.items.clear();
                            },
                            toggleTrackLike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.tracks.items.get(r);
                                try {
                                    let l,
                                        s = { entityId: a.albumId ? ''.concat(a.entityId, ':').concat(a.albumId) : a.entityId, userId: a.userId };
                                    return (
                                        e.tracks.items.get(r) === g7.LIKED
                                            ? (e.tracks.items.delete(r), (l = yield i.unlikeTrack(s)))
                                            : (e.tracks.items.set(r, g7.LIKED), (l = yield i.likeTrack(s))),
                                        t.getData([g9.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.tracks.items.set(r, s) : e.tracks.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            toggleTrackDislike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.tracks.items.get(r);
                                try {
                                    let l,
                                        s = { entityId: a.albumId ? ''.concat(a.entityId, ':').concat(a.albumId) : a.entityId, userId: a.userId };
                                    return (
                                        e.tracks.items.get(r) === g7.DISLIKED
                                            ? (e.tracks.items.delete(r), (l = yield i.undislikeTrack(s)))
                                            : (e.tracks.items.set(r, g7.DISLIKED), (l = yield i.dislikeTrack(s))),
                                        t.getData([g9.LIKED_TRACKS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.tracks.items.set(r, s) : e.tracks.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            toggleArtistLike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.artists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(r) === g7.LIKED
                                            ? (e.artists.items.delete(r), (l = yield i.unlikeArtist(a)))
                                            : (e.artists.items.set(r, g7.LIKED), (l = yield i.likeArtist(a))),
                                        t.getData([g9.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.artists.items.set(r, s) : e.artists.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            toggleArtistDislike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.artists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.artists.items.get(r) === g7.DISLIKED
                                            ? (e.artists.items.delete(r), (l = yield i.undislikeArtist(a)))
                                            : (e.artists.items.set(r, g7.DISLIKED), (l = yield i.dislikeArtist(a))),
                                        t.getData([g9.LIKED_ARTISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.artists.items.set(r, s) : e.artists.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            toggleAlbumLike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.albums.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.albums.items.get(r) === g7.LIKED
                                            ? (e.albums.items.delete(r), (l = yield i.unlikeAlbum(a)))
                                            : (e.albums.items.set(r, g7.LIKED), (l = yield i.likeAlbum(a))),
                                        t.getData([g9.LIKED_ALBUMS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.albums.items.set(r, s) : e.albums.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            togglePlaylistLike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.playlists.items.get(r);
                                try {
                                    let l;
                                    return (
                                        e.playlists.items.get(r) === g7.LIKED
                                            ? (e.playlists.items.delete(r), (l = yield i.unlikePlaylist(a)))
                                            : (e.playlists.items.set(r, g7.LIKED), (l = yield i.likePlaylist(a))),
                                        t.getData([g9.LIKED_PLAYLISTS]),
                                        l
                                    );
                                } catch (t) {
                                    return s ? e.playlists.items.set(r, s) : e.playlists.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                            toggleClipLike: (0, f.L3)(function* (a) {
                                let { usersResource: i, modelActionsLogger: l } = (0, f._$)(e),
                                    r = String(a.entityId),
                                    s = e.clips.items.get(r);
                                try {
                                    return (
                                        e.clips.items.get(r) === g7.LIKED
                                            ? (e.clips.items.delete(r), yield i.unlikeClip(a))
                                            : (e.clips.items.set(r, g7.LIKED), yield i.likeClip(a)),
                                        t.getData([g9.LIKED_CLIPS]),
                                        g4.f.OK
                                    );
                                } catch (t) {
                                    return s ? e.clips.items.set(r, s) : e.clips.items.delete(r), l.error(t), g4.f.ERROR;
                                }
                            }),
                        };
                        return t;
                    }),
                ui = f.gK
                    .model('Location', {
                        pathname: f.gK.optional(f.gK.string, ''),
                        searchParams: f.gK.optional(f.gK.string, ''),
                        host: f.gK.optional(f.gK.string, ''),
                        tld: f.gK.optional(f.gK.string, ''),
                        origin: f.gK.optional(f.gK.string, ''),
                        href: f.gK.optional(f.gK.string, ''),
                        isNotFound: f.gK.optional(f.gK.boolean, !1),
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
            var ul = a(27246),
                ur = a(28598);
            let us = { INTRO_PLAN: ur.N.IntroPlan, INTRO_UNTIL_PLAN: ur.N.IntroUntilPlan, TRIAL_PLAN: ur.N.TrialPlan, TRIAL_UNTIL_PLAN: ur.N.TrialUntilPlan },
                un = (e) => {
                    let { repetitionCount: t, typename: a, ...i } = e;
                    return { ...(Number.isFinite(t) ? { repeatCount: t } : {}), ...i, typename: us[a] || a };
                };
            var uo = a(16323);
            let ud = (e) => (0, f.wg)(e),
                ug = (e) => {
                    let { plans: t, ...a } = e;
                    return (0, f.wg)({ ...a, plans: t.map(ud) });
                },
                uu = (e) => {
                    let { option: t, ...a } = e;
                    return (0, f.wg)({ ...ug(a), option: t });
                },
                uc = (e) =>
                    (0, f.wg)({
                        acqOffer: ((e) => {
                            let {
                                analyticData: t,
                                catalogCompositeOffer: a,
                                offerTexts: i,
                                target: l,
                                requestedFeatures: r,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            } = e;
                            return (0, f.wg)({
                                analyticData: t,
                                catalogCompositeOffer: ((e) => {
                                    let { positionId: t, silentInvoiceAvailable: a, structureType: i, tariffOffer: l, optionOffers: r } = e;
                                    return (0, f.wg)({
                                        positionId: t,
                                        silentInvoiceAvailable: a,
                                        structureType: i,
                                        tariffOffer: ((e) => {
                                            if (!e) return null;
                                            let { tariff: t, ...a } = e;
                                            return (0, f.wg)({ ...ug(a), tariff: t });
                                        })(l),
                                        optionsOffers: r.map(uu),
                                    });
                                })(
                                    ((e) => {
                                        var t;
                                        let { tariffOffer: a, optionOffers: i } = e;
                                        return {
                                            ...e,
                                            silentInvoiceAvailable: !!e.silentInvoiceAvailable,
                                            structureType: e.structureType,
                                            tariffOffer: a ? { ...a, offerVendorType: a.offerVendorType, plans: null == (t = a.plans) ? void 0 : t.map(un) } : void 0,
                                            optionOffers: null == i ? void 0 : i.map((e) => ({ ...e, plans: (e.plans || []).map(un) })),
                                        };
                                    })(a),
                                ),
                                offerTexts: ((e) => {
                                    let { customTexts: t = {}, ...a } = e;
                                    return {
                                        ...a,
                                        customTexts: Object.entries(t).reduce((e, t) => {
                                            let [a, i] = t;
                                            return (e[(0, uo.A)(a)] = i), e;
                                        }, {}),
                                    };
                                })(i),
                                target: l,
                                requestedFeatures: r,
                                position: s,
                                oneClickAvailable: n,
                                place: o,
                                purchaseToken: d,
                            });
                        })(e),
                    }),
                um = f.gK.model({ batchId: f.gK.string, positionId: f.gK.string, placeId: f.gK.maybe(f.gK.string) }),
                up = f.gK.model({
                    buttonText: f.gK.maybe(f.gK.string),
                    buttonAdditionalText: f.gK.maybe(f.gK.string),
                    buttonTextA11y: f.gK.maybe(f.gK.string),
                    oneClickDisclaimerText: f.gK.maybe(f.gK.string),
                    oneClickDisclaimerTextA11y: f.gK.maybe(f.gK.string),
                }),
                uy = f.gK.model({
                    subscriptionName: f.gK.string,
                    buttonText: f.gK.string,
                    buttonTextWithDetails: f.gK.string,
                    combinedIntroductoryText: f.gK.string,
                    combinedPriceText: f.gK.string,
                    combinedFullOfferText: f.gK.string,
                    priceInMonth: f.gK.string,
                    customTexts: up,
                });
            var uE = (function (e) {
                return (e.COMPOSITE = 'COMPOSITE'), (e.OPTION = 'OPTION'), (e.TARIFF = 'TARIFF'), e;
            })({});
            let uS = f.gK.model({ amount: f.gK.number, currency: f.gK.string }),
                uK = f.gK.model({ typename: f.gK.literal(ur.N.IntroPlan), period: f.gK.string, price: uS, repeatCount: f.gK.maybe(f.gK.number) }),
                ub = f.gK.model({ typename: f.gK.literal(ur.N.IntroUntilPlan), price: uS, until: f.gK.string }),
                uv = f.gK.model({ typename: f.gK.literal(ur.N.TrialPlan), period: f.gK.string }),
                uI = f.gK.model({ typename: f.gK.literal(ur.N.TrialUntilPlan), until: f.gK.string }),
                uL = f.gK.union(uK, ub, uv, uI),
                uT = f.gK.model({ name: f.gK.string }),
                uN = f.gK.model({
                    additionText: f.gK.string,
                    description: f.gK.string,
                    name: f.gK.string,
                    text: f.gK.string,
                    title: f.gK.string,
                    plans: f.gK.array(uL),
                    commonPeriod: f.gK.string,
                    commonPrice: uS,
                }),
                uA = uN.props({ option: uT }),
                uh = uN.props({ tariff: uT }),
                uC = f.gK.model({
                    positionId: f.gK.string,
                    silentInvoiceAvailable: f.gK.boolean,
                    structureType: f.gK.enumeration(Object.values(uE)),
                    tariffOffer: f.gK.maybeNull(uh),
                    optionsOffers: f.gK.array(uA),
                }),
                uf = f.gK.model({
                    analyticData: um,
                    catalogCompositeOffer: uC,
                    offerTexts: uy,
                    target: f.gK.string,
                    requestedFeatures: f.gK.maybe(f.gK.array(f.gK.string)),
                    position: f.gK.number,
                    oneClickAvailable: f.gK.maybe(f.gK.boolean),
                    place: f.gK.maybe(f.gK.string),
                    purchaseToken: f.gK.maybe(f.gK.string),
                }),
                uR = f.gK.model({ offer: f.gK.maybeNull(uC), acqOffer: f.gK.maybeNull(uf) }).views((e) => {
                    let t = {
                        get target() {
                            var a;
                            return (null == (a = e.acqOffer) ? void 0 : a.target) || 'music';
                        },
                        get offerPosition() {
                            var i, l;
                            return null != (l = null == (i = e.acqOffer) ? void 0 : i.position) ? l : 0;
                        },
                        get place() {
                            var r;
                            return null == (r = e.acqOffer) ? void 0 : r.place;
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
                            var p;
                            return null == (p = t.customTexts) ? void 0 : p.oneClickDisclaimerText;
                        },
                        get oneClickDisclaimerTextA11y() {
                            var y;
                            return null == (y = t.customTexts) ? void 0 : y.oneClickDisclaimerTextA11y;
                        },
                        get mainText() {
                            var E, S;
                            return (null == (E = t.customTexts) ? void 0 : E.buttonText) || (null == (S = t.tariffOffer) ? void 0 : S.text);
                        },
                        get mainTextA11y() {
                            var K;
                            return null == (K = t.customTexts) ? void 0 : K.buttonTextA11y;
                        },
                        get additionText() {
                            var b, v;
                            return (null == (b = t.customTexts) ? void 0 : b.buttonAdditionalText) || (null == (v = t.tariffOffer) ? void 0 : v.additionText);
                        },
                        get offersBatchId() {
                            var I, L;
                            return (null == (I = e.acqOffer) ? void 0 : I.analyticData.batchId) || (null == (L = e.offer) ? void 0 : L.positionId) || '';
                        },
                        get subscriptionName() {
                            var T, N;
                            return null == (N = e.acqOffer) || null == (T = N.offerTexts) ? void 0 : T.subscriptionName;
                        },
                        get offerText() {
                            var A, h;
                            return null == (h = e.acqOffer) || null == (A = h.offerTexts) ? void 0 : A.buttonTextWithDetails;
                        },
                        get buttonText() {
                            var C, f;
                            return null == (f = e.acqOffer) || null == (C = f.offerTexts) ? void 0 : C.buttonText;
                        },
                    };
                    return t;
                }),
                uk = f.gK.model({
                    sessionId: f.gK.maybeNull(f.gK.string),
                    page: f.gK.maybeNull(f.gK.string),
                    offers: f.gK.array(uR),
                    mlRequestId: f.gK.maybeNull(f.gK.string),
                    offerConfigId: f.gK.maybeNull(f.gK.number),
                    language: f.gK.maybeNull(f.gK.string),
                }),
                uD = f.gK.compose(uk, V.X, f.gK.model({ isLoadOffersResultSent: f.gK.boolean })),
                u_ = f.gK
                    .compose(f.gK.model({ isLoadOffersResultSent: f.gK.maybe(f.gK.boolean), acqData: f.gK.map(uD) }), V.X)
                    .volatile(() => ({ sessionId: (0, nW.A)(), isFrontSessionStartSent: !1 }))
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
                                var a, i, l;
                                return (
                                    (t && (null == (l = e.acqData) || null == (i = l.get(t)) || null == (a = i.offers) ? void 0 : a.map((e) => e.offersPositionId))) || []
                                );
                            },
                            getOffer(t, a) {
                                var i;
                                let l = null == (i = e.acqData) ? void 0 : i.get(t);
                                if (l) return a ? l.offers.find((e) => e.place === a) : l.offers[0];
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
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ul.l.NO_VALUE;
                                t.setAcqData(e, { isLoadOffersResultSent: !0 });
                            },
                            setLoadingState(a) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ul.l.NO_VALUE;
                                t.setAcqData(i, { ...e.acqData.get(i), loadingState: a });
                            },
                            setAcqData(t, a) {
                                var i;
                                e.acqData.set(t, { loadingState: ev.G.IDLE, isLoadOffersResultSent: !1, ...(null != (i = e.acqData.get(t)) ? i : {}), ...a });
                            },
                            getData: (0, f.L3)(function* (a) {
                                let { page: i, places: l, communicationId: r, campaignId: s, widgetServiceName: n } = a,
                                    { acqOffers: o, modelActionsLogger: d } = (0, f._$)(e),
                                    { experiments: g } = (0, R.M)(e),
                                    u = g.getEnabledFlags(),
                                    c = i || ul.l.NO_VALUE;
                                if (e.getLoadingState(i) !== ev.G.PENDING) {
                                    e.isLoadOffersResultSent = !1;
                                    try {
                                        t.setLoadingState(ev.G.PENDING, c);
                                        let a = {};
                                        r && (a.communication_id = r), s && (a.campaign_id = s);
                                        let i = yield o.getOffers(c, l, { expFlags: u, eventSessionId: e.sessionId, customProperties: a, widgetServiceName: n });
                                        t.setAcqData(c, {
                                            ...((e) => {
                                                let { sessionId: t, result: a, offerConfigId: i, mlRequestId: l, page: r, language: s } = e;
                                                return (0, f.wg)({ sessionId: t, page: r, offers: a.map(uc), mlRequestId: l, offerConfigId: i, language: s });
                                            })(i),
                                            loadingState: ev.G.RESOLVE,
                                            isLoadOffersResultSent: !1,
                                        }),
                                            t.setLoadingState(ev.G.RESOLVE, c);
                                    } catch (e) {
                                        t.setLoadingState(ev.G.REJECT, c), d.error(e);
                                    }
                                }
                            }),
                        };
                        return t;
                    })
                    .named('MusicOffers'),
                uP = f.gK.model('Offers', { music: u_ });
            var uO = a(53453),
                uw = a(58741);
            let uG = f.gK
                    .model('BrowserInfo', {
                        hasHuaweiAppGallery: f.gK.boolean,
                        inAppBrowser: f.gK.boolean,
                        isBrowser: f.gK.boolean,
                        isMobile: f.gK.boolean,
                        isTablet: f.gK.boolean,
                        isTouch: f.gK.boolean,
                        name: f.gK.maybe(f.gK.string),
                        version: f.gK.maybe(f.gK.string),
                        OSFamily: f.gK.maybe(f.gK.string),
                    })
                    .views((e) => ({
                        get isSafari() {
                            var t;
                            return null == (t = e.name) ? void 0 : t.toLowerCase().includes('safari');
                        },
                    })),
                uM = f.gK
                    .model('Settings', {
                        layout: f.gK.maybeNull(f.gK.enumeration(Object.keys(d_.u))),
                        isLandscape: f.gK.boolean,
                        isMobileLandscapeHeight: f.gK.boolean,
                        platform: f.gK.maybe(f.gK.enumeration(Object.values(uw.O))),
                        browserInfo: uG,
                        liteVersionMode: f.gK.maybe(f.gK.enumeration(Object.values(uO.w))),
                        selectedThumbId: f.gK.enumeration(Object.values(sJ.T)),
                    })
                    .views((e) => {
                        let t = {
                            get isMobile() {
                                return e.layout === d_.u.Mobile;
                            },
                            get isWindowsApplication() {
                                return e.platform === uw.O.WINDOWS;
                            },
                            get isMacOSApplication() {
                                return e.platform === uw.O.MACOS;
                            },
                            get isLinuxApplication() {
                                return e.platform === uw.O.LINUX;
                            },
                            get isLiteVersionModeEnabled() {
                                return e.liteVersionMode === uO.w.ENABLED;
                            },
                            get isLiteVersionModeDisabled() {
                                return e.liteVersionMode === uO.w.DISABLED;
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
                                e.browserInfo = (0, f.wg)({ ...t, version: a });
                            },
                            initializeLiteVersionMode() {
                                if (!(0, f._n)(e)) return;
                                let { containerStorage: a } = (0, f._$)(e),
                                    i = a.get(rD.c.LiteVersionMode);
                                if (i) {
                                    if ('2' !== i.version) return void a.remove(rD.c.LiteVersionMode);
                                    t.setLiteVersionMode(i.mode, !1);
                                }
                            },
                            setLiteVersionMode(t, a) {
                                let { containerStorage: i } = (0, f._$)(e);
                                (e.liteVersionMode = t), a && i.set(rD.c.LiteVersionMode, { version: '2', mode: t });
                            },
                            setCustomPlayerThumb(t) {
                                let { localStorage: a } = (0, f._$)(e),
                                    i = t;
                                Object.values(sJ.T).includes(t) || (i = sJ.T.DEFAULT), (e.selectedThumbId = i);
                                let l = a.get(rD.c.CustomPlayerThumbConfig);
                                a.set(rD.c.CustomPlayerThumbConfig, { ...l, selectedThumbId: i, version: '1' });
                            },
                            initializeCustomPlayerThumb() {
                                if (!(0, f._n)(e)) return;
                                let { user: a } = (0, R.M)(e),
                                    { localStorage: i } = (0, f._$)(e),
                                    l = i.get(rD.c.CustomPlayerThumbConfig);
                                if (l) {
                                    if ('1' !== l.version || !a.hasPlus) {
                                        (e.selectedThumbId = sJ.T.DEFAULT), i.remove(rD.c.CustomPlayerThumbConfig);
                                        return;
                                    }
                                    if (l.selectedThumbId === sJ.T.BRANDED && a.hasPlus) return void t.setCustomPlayerThumb(sJ.T.DEFAULT);
                                    t.setCustomPlayerThumb(l.selectedThumbId);
                                }
                            },
                        };
                        return t;
                    }),
                uU = f.gK.model('Root', {
                    isRootModel: f.gK.optional(f.gK.literal(!0), !0),
                    experiments: g6,
                    user: gq,
                    wizard: ov,
                    collection: rC,
                    disclaimersDictionary: gZ,
                    main: rX,
                    settings: uM,
                    currentClipInfo: oL,
                    currentTrackInfo: o7,
                    album: eU,
                    artist: lF,
                    library: ua,
                    sonataState: o5,
                    playlist: r9,
                    albumCPA: P,
                    slides: gj,
                    vibe: oe,
                    multivibe: oD,
                    search: sV,
                    vibeSettings: dS,
                    pinsCollection: n_,
                    landingBlockEntities: nE,
                    contextMenuPlaylists: l5,
                    createPlaylist: dD,
                    location: ui,
                    nonMusic: rJ,
                    disclaimerModalState: gQ,
                    communication: ni,
                    trailer: n7,
                    modals: nN,
                    landing: lE,
                    landingSdkModel: nK,
                    fullscreenPlayer: nZ,
                    fullscreenVideoPlayer: ol,
                    releaseNotes: oN,
                    trackLyrics: o8,
                    ugcUploadCenter: dg,
                    paymentWidgetModal: dR,
                    offers: uP,
                    quality: n0,
                    kids: rx,
                    slam: oZ,
                    advert: nG,
                    track: sF,
                    continueListen: ns,
                    familyInvite: nu,
                    redAlert: dO,
                    shareIframe: oq,
                    paywall: nP,
                    downloadMobileApp: nn,
                    advertBanners: sZ,
                    desktopPaywall: dk,
                    concerts: rU,
                    concert: rR,
                    wheel: oK,
                    words: dT,
                    lumen: dC,
                }),
                uB = {
                    experiments: { loadingState: ev.G.IDLE, experiments: {}, overwrittenExperiments: {} },
                    disclaimersDictionary: { loadingState: ev.G.IDLE },
                    user: { account: { loadingState: ev.G.IDLE, data: {} }, settings: { loadingState: ev.G.IDLE } },
                    wizard: { loadingState: ev.G.IDLE, modal: {}, introModal: {}, savedLikedArtists: [], likedArtists: [], unlikedArtists: [] },
                    collection: {
                        albums: { pagesLoader: {}, upcomingAlbums: { loadingState: ev.G.IDLE } },
                        playlists: {
                            playlistsLiked: { pagesLoader: {} },
                            playlistsCreated: { pagesLoader: {} },
                            activeTabIndex: l3.a.CREATED,
                            tabs: [l3.a.CREATED, l3.a.LIKED],
                        },
                        artists: { pagesLoader: {}, topArtists: { loadingState: ev.G.IDLE, items: [] } },
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        shelf: { recentlyPlayed: { loadingState: ev.G.IDLE }, newEpisodes: { loadingState: ev.G.IDLE }, liked: { loadingState: ev.G.IDLE } },
                        nonMusicLiked: { loadingState: ev.G.IDLE, items: [] },
                        dislikes: { artists: { loadingState: ev.G.IDLE }, tracks: { loadingState: ev.G.IDLE } },
                        kids: { albums: { pagesLoader: {} }, playlists: { pagesLoader: {} }, tracks: { pagesLoader: {} } },
                        shelfRecentlyPlayed: { pagesLoader: {} },
                        shelfLiked: { pagesLoader: {} },
                        clips: { loadingState: ev.G.IDLE, clipsWillLike: { loadingState: ev.G.IDLE } },
                        vibeRooms: { loadingState: ev.G.IDLE },
                    },
                    main: { specialHeaderLoadingState: ev.G.IDLE, landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } } },
                    nonMusic: {
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        albums: { loadingState: ev.G.IDLE },
                        categoryPlaylistsSubpage: { loadingState: ev.G.IDLE, pagesLoader: {} },
                    },
                    kids: {
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        kidsEditorialPlaylistSubpage: { loadingState: ev.G.IDLE, pagesLoader: {} },
                        kidsEditorialAlbumSubpage: { loadingState: ev.G.IDLE, pagesLoader: {} },
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
                            inAppBrowser: !1,
                            hasHuaweiAppGallery: !1,
                        },
                        selectedThumbId: sJ.T.DEFAULT,
                    },
                    currentClipInfo: { clipLoadingState: ev.G.IDLE, creditsLoadingState: ev.G.IDLE, id: null, clip: null, credits: null, modal: {} },
                    currentTrackInfo: {
                        trackLoadingState: ev.G.IDLE,
                        creditsLoadingState: ev.G.IDLE,
                        descriptionLoadingState: ev.G.IDLE,
                        id: null,
                        albumId: null,
                        isUGC: null,
                        fullTrack: null,
                        credits: null,
                        modal: {},
                    },
                    trackLyrics: { loadingState: ev.G.IDLE, lyrics: null, lyricId: null, externalLyricId: null, track: null, modal: {} },
                    album: {
                        loadingState: ev.G.IDLE,
                        items: [],
                        meta: null,
                        otherAlbumVersions: [],
                        allTracksUnfinished: !1,
                        donations: { loadingState: ev.G.IDLE, items: [] },
                        latestGenreAlbums: { loadingState: ev.G.IDLE, items: [] },
                        otherArtistAlbums: { loadingState: ev.G.IDLE, items: [] },
                        relatedContent: { loadingState: ev.G.IDLE, items: [] },
                        similarEntities: {
                            id: 'similar-entities',
                            type: et.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: ee.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                    },
                    albumCPA: {},
                    artist: {
                        meta: null,
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        fullTracksListSubpage: { loadingState: ev.G.IDLE },
                        albumsSubpage: { pagesLoader: {} },
                        concertsSubpage: { loadingState: ev.G.IDLE },
                        similarArtistsSubPage: { loadingState: ev.G.IDLE },
                        familiarSubpage: { loadingState: ev.G.IDLE },
                        clipsSubpage: { pagesLoader: {} },
                        commonSubPage: {},
                        offlineArtist: { loadingState: ev.G.IDLE, trackIds: { loadingState: ev.G.IDLE }, downloadedTracks: { loadingState: ev.G.IDLE } },
                        infoLoadingState: { loadingState: ev.G.IDLE },
                    },
                    library: { loadingState: ev.G.IDLE, tracks: {}, artists: {}, playlists: {}, albums: {}, clips: {} },
                    sonataState: {
                        contextId: null,
                        contextType: null,
                        entityMeta: null,
                        status: nU.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: o3.pM.NONE,
                        quality: o1.e.BALANCED,
                        canShuffle: !0,
                        shuffle: !1,
                        areCoresRegistered: !1,
                        isVHCoreRegistered: !1,
                        isCrossFadeEnabled: !0,
                    },
                    playlist: {
                        loadingState: ev.G.IDLE,
                        meta: null,
                        items: [],
                        initialItems: [],
                        similarPlaylists: [],
                        filters: { loadingState: ev.G.IDLE },
                        editorFeature: { shouldShowDuplicate: !1, shouldShowGenre: !1, shouldShowMajor: !1, colorMajorMap: {}, duplicate: {} },
                        search: { loadingState: ev.G.IDLE, text: '' },
                        similarEntities: {
                            id: 'similar-entities',
                            type: et.t.COLLECTION_SIMILAR_ENTITIES,
                            loadingState: ee.IDLE,
                            isNotFound: !1,
                            hasSentAnalyticsOnLoaded: !1,
                            meta: {},
                        },
                    },
                    slides: {
                        userSlidesLoadingState: ev.G.IDLE,
                        artistSlidesLoadingState: ev.G.IDLE,
                        podcastSlidesLoadingState: ev.G.IDLE,
                        specialSlidesLoadingState: ev.G.IDLE,
                        kidsSlidesLoadingState: ev.G.IDLE,
                        userItems: [],
                        artistItems: [],
                        podcastItems: [],
                        specialItems: [],
                        kidsItems: [],
                        isMuted: !1,
                    },
                    vibe: { loadingState: ev.G.IDLE, vibeResetLoadingState: ev.G.IDLE, isApplying: !1 },
                    multivibe: {
                        invitationRoom: null,
                        duplicateRoomId: null,
                        createdRoomId: null,
                        errorName: null,
                        promoModal: {},
                        inviteModal: {},
                        disabledRoomInfoModal: {},
                        disabledRoomId: null,
                        loadingState: ev.G.IDLE,
                    },
                    search: {
                        searchCorrectedText: null,
                        loadingState: ev.G.IDLE,
                        historyPage: { loadingState: ev.G.IDLE, items: [] },
                        mixes: { loadingState: ev.G.IDLE, items: [] },
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        history: { loadingState: ev.G.IDLE },
                        pagesLoader: {},
                    },
                    vibeSettings: { loadingState: ev.G.IDLE, modal: {} },
                    pinsCollection: { loadingState: ev.G.IDLE, index: {} },
                    landingBlockEntities: { loadingState: ev.G.IDLE },
                    contextMenuPlaylists: { pagesLoader: {} },
                    createPlaylist: {},
                    location: {},
                    disclaimerModalState: { loadingState: ev.G.IDLE },
                    trailer: {
                        loadingState: ev.G.IDLE,
                        withAnimation: !0,
                        shouldAutoStartPlaying: !0,
                        shouldSendEventOnTracksShowed: !0,
                        modal: {},
                        sonataStatusBeforeTrailerStart: nU.MT.IDLE,
                        isManuallyPaused: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: nU.MT.IDLE },
                    },
                    communication: { loadingState: ev.G.IDLE },
                    modals: {
                        disclaimerModal: {},
                        shortcutsModal: {},
                        aboutAppModal: {},
                        overviewModal: {},
                        ugcTrackEditModal: { modal: {} },
                        popoverOverPlayer: {},
                        crackdownModal: {},
                        overwrittenExperimentsModal: {},
                        buySubscriptionModal: { isOpened: !0 },
                        promoLandingBuySubscriptionModal: {},
                        clearMemoryModal: {},
                        windowSettingsModal: {},
                        playerSettingsModal: {},
                        audioSettingsModal: {},
                        myVibeAnimationPerformanceSettingsModal: {},
                        myVibeAnimationAppearanceSettingsModal: {},
                        appUpdatesSettingsModal: {},
                        scrobblersSettingsModal: {},
                        downloaderSettingsModal: {},
                        systemSettingsModal: {},
                        globalShortcutsSettingsModal: {},
                        myVibeParamsSettingsModal: {},
                        miniPlayerSettingsModal: {},
                        ynisonSettingsModal: {},
                        lrclibSettingsModal: {},
                        discordRpcSettingsModal: {},
                        imageSliderModal: { modal: {} },
                        artistAboutModal: { loadingState: ev.G.IDLE, modal: {} },
                        bestRecommedationModal: {},
                    },
                    landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                    landingSdkModel: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                    fullscreenPlayer: { modal: {}, syncLyrics: { loadingState: ev.G.IDLE }, playQueue: {} },
                    fullscreenVideoPlayer: {
                        modal: {},
                        ids: [],
                        loadingState: ev.G.IDLE,
                        sonataStatusBeforeClipStart: nU.MT.IDLE,
                        withAnimation: !0,
                        state: { contextId: null, contextType: null, entityMeta: null, status: nU.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
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
                        status: df.c.IDLE,
                    },
                    offers: { music: { loadingState: ev.G.IDLE } },
                    quality: { modal: {} },
                    releaseNotes: { modal: {} },
                    slam: { networkStatus: {} },
                    track: { loadingState: ev.G.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                    familyInvite: { info: { loadingState: ev.G.IDLE }, acceptanceLoadingState: ev.G.IDLE, modal: {}, step: nd._.INFO },
                    continueListen: {},
                    redAlert: { loadingState: ev.G.IDLE },
                    shareIframe: { modal: {} },
                    paywall: { modal: {}, freemiumCollectionBarrier: !1 },
                    downloadMobileApp: { modal: {} },
                    advertBanners: {
                        banners: {
                            topAdvertBanner: { type: sx.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            sideAdvertBanner: { type: sx.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlaylistBanner: { type: sx.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                            brandedPlayerBanner: { type: sx.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                            brandedEntityAxeBanner: { type: sx.h.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        },
                    },
                    desktopPaywall: {},
                    concerts: {
                        loadingState: ev.G.IDLE,
                        config: { loadingState: ev.G.IDLE },
                        landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } },
                        locationSelection: { loadingState: ev.G.IDLE, modal: {} },
                    },
                    concert: { loadingState: ev.G.IDLE, landing: { loadingState: ev.G.IDLE, tabs: { loadingState: ev.G.IDLE } } },
                    wheel: { loadingState: ev.G.IDLE, items: [] },
                    words: { loadingState: ev.G.IDLE, bigCardLoadingState: { loadingState: ev.G.IDLE }, modal: {} },
                    lumen: { loadingState: ev.G.IDLE, status: null, themes: null },
                },
                uV = new Set([
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
            let uF = (e) => {
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
                                        return uV.has(a);
                                    })(e.path),
                            );
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, v.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: '(window.__STATE_PATCHES__ = window.__STATE_PATCHES__ || []).push('
                                              .concat((0, T.stringifyJSONSafely)(e), "); window.dispatchEvent(new Event('")
                                              .concat(N.s, "'));"),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                ux = () => {
                    var e;
                    let t = null != (e = window.__STATE_PATCHES__) ? e : [];
                    return delete window.__STATE_PATCHES__, t;
                },
                uj = (e) => {
                    let { children: t, nonce: a } = e,
                        i = (0, C.Y)(),
                        { store: l, patchesRef: r } = (0, A.m)({ createStore: () => uU.create(uB, i), getPendingPatchBatches: ux, patchesUpdatedEventName: N.s });
                    return (0, v.jsxs)(v.Fragment, { children: [(0, v.jsx)(uF, { nonce: a, patchesRef: r }), (0, v.jsx)(h.P.Provider, { value: l, children: t })] });
                };
        },
        80846: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 36;
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        82757: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            let i = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        84468: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        85017: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i, n: () => l });
            var i = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                l = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        85796: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => l });
            var i = a(60754);
            let l = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
        },
        86168: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return (e.ALL = 'all'), e;
            })({});
        },
        86246: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return (e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e;
            })({});
        },
        86634: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => d });
            var i = a(60754),
                l = a(58008),
                r = a(49399),
                s = a(89009),
                n = a(93841),
                o = a(93043);
            function d(e, t) {
                let { useAppendMode: a = !1 } = null != t ? t : {};
                return i.gK
                    .compose(
                        i.gK.model('PageLoader', {
                            items: i.gK.maybeNull(i.gK.array(i.gK.maybeNull(e))),
                            requestsCount: i.gK.optional(i.gK.number, 0),
                            initialRequestLoadingState: i.gK.optional(i.gK.enumeration(Object.values(r.G)), r.G.IDLE),
                            lastRejectedPagesList: i.gK.optional(i.gK.array(i.gK.number), []),
                            pager: i.gK.maybeNull(o.j),
                            pageStates: i.gK.maybeNull(i.gK.array(i.gK.enumeration(Object.values(r.G)))),
                        }),
                        n.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var a;
                                return null == (a = e.pageStates) || !a[t] || e.pageStates[t] === r.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var i;
                                return !!((null == (i = e.pageStates) ? void 0 : i.length) && e.pageStates.some((e) => e === r.G.RESOLVE));
                            },
                            get isEmpty() {
                                var l;
                                return t.isSomePageResolved && !(null == (l = e.items) ? void 0 : l.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === r.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === r.G.REJECT;
                            },
                            get hasMorePages() {
                                var s;
                                return !!a && !(null == (s = e.pager) ? void 0 : s.lastPage);
                            },
                            get rejectedPagesCount() {
                                var n;
                                if (t.isInitialRequestRejected || !(null == (n = e.pageStates) ? void 0 : n.length)) return 0;
                                return e.pageStates.filter((e) => e === r.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (i, l) => {
                                let s;
                                if (([r.G.IDLE, r.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = l), a)) s = i + 1;
                                else {
                                    var n, o, d, g;
                                    s = Math.ceil(
                                        (null != (d = null == (n = e.pager) ? void 0 : n.total) ? d : 0) /
                                            (null != (g = null == (o = e.pager) ? void 0 : o.perPage) ? g : 1),
                                    );
                                }
                                let u = Math.max(i + 1, s);
                                t.ensurePageStatesInitialized(u), e.pageStates && (e.pageStates[i] = l), l === r.G.REJECT && t.addLastRejectedPageToList(i);
                            },
                            setItems: (n, o) => {
                                var d;
                                let { page: g, pager: u, responseStatus: c } = o;
                                if (((e.requestsCount = (null != (d = e.requestsCount) ? d : 0) + 1), c === l.F.ERROR || !n || !u))
                                    return void t.setPageState(g, r.G.REJECT);
                                e.pager
                                    ? a && ((e.pager.lastPage = u.lastPage), (e.pager.perPage = u.perPage))
                                    : (e.pager = { page: u.page, perPage: u.perPage, total: u.total, lastPage: u.lastPage }),
                                    t.setPageState(g, r.G.RESOLVE),
                                    (e.pager.page = g),
                                    a
                                        ? (e.items || (e.items = (0, i.wg)([])), e.items && e.items.push(...n))
                                        : (e.items || (e.items = (0, i.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, s.I)({ items: e.items, mappedRawItems: n, page: g, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, a, i;
                                for (let l = 0; l < (null != (a = null == (t = e.pageStates) ? void 0 : t.length) ? a : 0); l++)
                                    (null == (i = e.pageStates) ? void 0 : i[l]) === r.G.REJECT && (e.pageStates[l] = r.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var a, i, l;
                                for (e.lastRejectedPagesList.push(t); (null != (i = null == (a = e.lastRejectedPagesList) ? void 0 : a.length) ? i : 0) > 5; )
                                    null == (l = e.lastRejectedPagesList) || l.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let a = Array.from({ length: t }, () => r.G.IDLE);
                                    e.pageStates = (0, i.wg)(a);
                                    return;
                                }
                                let a = e.pageStates.length;
                                if (t > a) {
                                    let i = Array.from({ length: t - a }, () => r.G.IDLE);
                                    e.pageStates.push(...i);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = r.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, i.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
        },
        86882: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => i });
            let i = (e) => {
                let [t, a] = e.split(':');
                return { uid: String(t), kind: Number(a) };
            };
        },
        89009: (e, t, a) => {
            'use strict';
            function i(e) {
                let { items: t, mappedRawItems: a, page: i, pageSize: l } = e,
                    r = i * l,
                    s = 0;
                for (let e = r; e < r + l; e++) a[s] && (t[e] = a[s]), s++;
            }
            a.d(t, { I: () => i });
        },
        89418: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(60754),
                l = a(37215),
                r = a(8246);
            let s = i.gK
                .model('Sort', { sortBy: i.gK.maybe(i.gK.enumeration(Object.values(l.g))), sortOrder: i.gK.maybe(i.gK.enumeration(Object.values(r.x))) })
                .actions((e) => ({
                    setSortBy(t) {
                        e.sortBy = t;
                    },
                    setSortOrder(t) {
                        e.sortOrder = t;
                    },
                }));
        },
        90346: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { J: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        91118: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { n: () => i }),
                (function (e) {
                    (e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab');
                })(i || (i = {}));
        },
        93043: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var i = a(60754);
            let l = i.gK.model('Pager', { page: i.gK.number, perPage: i.gK.number, total: i.gK.number, lastPage: i.gK.maybe(i.gK.boolean) });
        },
        93841: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(60754);
            let l = i.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    e.forEach((e) => {
                        e && (0, i.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, i.zr)(e);
                            });
                        });
                },
            }));
        },
        95415: (e, t, a) => {
            'use strict';
            function i() {
                return window.PLATFORM;
            }
            a.d(t, { u: () => i });
        },
        96333: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { S: () => i }),
                (function (e) {
                    (e.TRACK = 'track'),
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
                        (e.POETRY = 'poetry');
                })(i || (i = {}));
        },
        96764: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { T: () => i }),
                (function (e) {
                    (e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall');
                })(i || (i = {}));
        },
        99424: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { E: () => i }),
                (function (e) {
                    (e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW');
                })(i || (i = {}));
        },
    },
]);
