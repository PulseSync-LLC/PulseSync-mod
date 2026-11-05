(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6808],
    {
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var s = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        12670: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            let s = {
                PlayerAuthorization: 'player-authorization',
                PlayerSubscription: 'player-subscription',
                FullscreenUnauthorized: 'fullscreen-unauthorized',
                FullscreenSubscription: 'fullscreen-subscription',
            };
        },
        16473: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { e: () => s }),
                (function (e) {
                    ((e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview'));
                })(s || (s = {})));
        },
        30123: (e, t, i) => {
            'use strict';
            i.d(t, { k7: () => s, nl: () => l });
            let s = 1e3,
                l = 'https://';
        },
        37173: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => s });
            let s = { Playing: 'playing', Interrupted: 'interrupted' };
        },
        50348: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s, j: () => l });
            let s = {
                    exactPaths: [
                        '/',
                        '/404',
                        '/album/[albumId]',
                        '/album/[albumId]/track/[trackId]',
                        '/artist/[artistId]',
                        '/artist/[artistId]/albums',
                        '/artist/[artistId]/compilations',
                        '/artist/[artistId]/concerts',
                        '/artist/[artistId]/discography',
                        '/artist/[artistId]/familiar',
                        '/artist/[artistId]/similar',
                        '/artist/[artistId]/tracks',
                        '/artist/[artistId]/videos',
                        '/chart',
                        '/chart/podcasts',
                        '/chart/podcasts/category/[categoryId]',
                        '/collection',
                        '/collection/albums',
                        '/collection/artists',
                        '/collection/clips',
                        '/collection/dislikes',
                        '/collection/kids',
                        '/collection/kids/albums',
                        '/collection/kids/playlists',
                        '/collection/kids/tracks',
                        '/collection/multivibes',
                        '/collection/non-music',
                        '/collection/non-music/liked',
                        '/collection/playlists',
                        '/collection/playlists/created',
                        '/collection/playlists/liked',
                        '/collection/shelf',
                        '/collection/shelf/liked',
                        '/collection/shelf/new-episodes',
                        '/collection/shelf/recently-played',
                        '/concert/[concertId]',
                        '/concerts',
                        '/concerts/details/[type]/[id]',
                        '/entities/[blockType]/[blockId]',
                        '/genre/[metatagId]',
                        '/genre/[metatagId]/albums',
                        '/genre/[metatagId]/artists',
                        '/genre/[metatagId]/playlists',
                        '/kids',
                        '/kids/category/[categoryId]',
                        '/kids/editorial/album/[id]',
                        '/kids/editorial/playlist/[id]',
                        '/label/[labelId]',
                        '/label/[labelId]/albums',
                        '/label/[labelId]/artists',
                        '/landing-promo-preview',
                        '/landing/[skeleton]',
                        '/login-status',
                        '/mixes',
                        '/mixes/[navigationId]',
                        '/multivibe',
                        '/multivibe/[roomId]',
                        '/music-history',
                        '/muzmarket',
                        '/mymusic/favorite_tracks',
                        '/myvibe/[shareId]',
                        '/non-music',
                        '/non-music/category/[id]',
                        '/non-music/category/[id]/albums',
                        '/non-music/editorial/album/[id]',
                        '/non-music/editorial/playlist/[categoryId]',
                        '/oauth',
                        '/pay',
                        '/playlist/[playlistId]',
                        '/playlists/[playlistUuid]',
                        '/plus',
                        '/post/[promoId]',
                        '/promolanding/album/[albumId]',
                        '/search',
                        '/search/history',
                        '/seo/album/[albumId]/track/[trackId]',
                        '/seo/track/[trackId]',
                        '/settings',
                        '/slides/artist/[artistId]',
                        '/slides/kids',
                        '/slides/podcast/[podcastId]',
                        '/slides/special/[campaignId]',
                        '/slides/user',
                        '/tag/[tagId]',
                        '/track/[trackId]',
                        '/users',
                        '/users/[userId]/playlists/[kind]',
                        '/video',
                        '/webview',
                    ],
                    regexPatterns: [
                        '^/$',
                        '^/404$',
                        '^/album/([^/]+)$',
                        '^/album/([^/]+)/track/([^/]+)$',
                        '^/artist/([^/]+)$',
                        '^/artist/([^/]+)/albums$',
                        '^/artist/([^/]+)/compilations$',
                        '^/artist/([^/]+)/concerts$',
                        '^/artist/([^/]+)/discography$',
                        '^/artist/([^/]+)/familiar$',
                        '^/artist/([^/]+)/similar$',
                        '^/artist/([^/]+)/tracks$',
                        '^/artist/([^/]+)/videos$',
                        '^/chart$',
                        '^/chart/podcasts$',
                        '^/chart/podcasts/category/([^/]+)$',
                        '^/collection$',
                        '^/collection/albums$',
                        '^/collection/artists$',
                        '^/collection/clips$',
                        '^/collection/dislikes$',
                        '^/collection/kids$',
                        '^/collection/kids/albums$',
                        '^/collection/kids/playlists$',
                        '^/collection/kids/tracks$',
                        '^/collection/multivibes$',
                        '^/collection/non-music$',
                        '^/collection/non-music/liked$',
                        '^/collection/playlists$',
                        '^/collection/playlists/created$',
                        '^/collection/playlists/liked$',
                        '^/collection/shelf$',
                        '^/collection/shelf/liked$',
                        '^/collection/shelf/new-episodes$',
                        '^/collection/shelf/recently-played$',
                        '^/concert/([^/]+)$',
                        '^/concerts$',
                        '^/concerts/details/([^/]+)/([^/]+)$',
                        '^/entities/([^/]+)/([^/]+)$',
                        '^/genre/([^/]+)$',
                        '^/genre/([^/]+)/albums$',
                        '^/genre/([^/]+)/artists$',
                        '^/genre/([^/]+)/playlists$',
                        '^/kids$',
                        '^/kids/category/([^/]+)$',
                        '^/kids/editorial/album/([^/]+)$',
                        '^/kids/editorial/playlist/([^/]+)$',
                        '^/label/([^/]+)$',
                        '^/label/([^/]+)/albums$',
                        '^/label/([^/]+)/artists$',
                        '^/landing-promo-preview$',
                        '^/landing/([^/]+)$',
                        '^/login-status$',
                        '^/mixes$',
                        '^/mixes/([^/]+)$',
                        '^/multivibe$',
                        '^/multivibe/([^/]+)$',
                        '^/music-history$',
                        '^/muzmarket$',
                        '^/mymusic/favorite_tracks$',
                        '^/myvibe/([^/]+)$',
                        '^/non-music$',
                        '^/non-music/category/([^/]+)$',
                        '^/non-music/category/([^/]+)/albums$',
                        '^/non-music/editorial/album/([^/]+)$',
                        '^/non-music/editorial/playlist/([^/]+)$',
                        '^/oauth$',
                        '^/pay$',
                        '^/playlist/([^/]+)$',
                        '^/playlists/([^/]+)$',
                        '^/plus$',
                        '^/post/([^/]+)$',
                        '^/promolanding/album/([^/]+)$',
                        '^/search$',
                        '^/search/history$',
                        '^/seo/album/([^/]+)/track/([^/]+)$',
                        '^/seo/track/([^/]+)$',
                        '^/settings$',
                        '^/slides/artist/([^/]+)$',
                        '^/slides/kids$',
                        '^/slides/podcast/([^/]+)$',
                        '^/slides/special/([^/]+)$',
                        '^/slides/user$',
                        '^/tag/([^/]+)$',
                        '^/track/([^/]+)$',
                        '^/users$',
                        '^/users/([^/]+)/playlists/([^/]+)$',
                        '^/video$',
                        '^/webview$',
                    ],
                },
                l = {
                    '/': '',
                    '/404': '',
                    '/album/:albumId': '',
                    '/album/:albumId/track/:trackId': '',
                    '/artist/:artistId': '',
                    '/artist/:artistId/albums': '',
                    '/artist/:artistId/compilations': '',
                    '/artist/:artistId/concerts': '',
                    '/artist/:artistId/discography': '',
                    '/artist/:artistId/familiar': '',
                    '/artist/:artistId/similar': '',
                    '/artist/:artistId/tracks': '',
                    '/artist/:artistId/videos': '',
                    '/chart': '',
                    '/chart/podcasts': '',
                    '/chart/podcasts/category/:categoryId': '',
                    '/collection': '',
                    '/collection/albums': '',
                    '/collection/artists': '',
                    '/collection/clips': '',
                    '/collection/dislikes': '',
                    '/collection/kids': '',
                    '/collection/kids/albums': '',
                    '/collection/kids/playlists': '',
                    '/collection/kids/tracks': '',
                    '/collection/multivibes': '',
                    '/collection/non-music': '',
                    '/collection/non-music/liked': '',
                    '/collection/playlists': '',
                    '/collection/playlists/created': '',
                    '/collection/playlists/liked': '',
                    '/collection/shelf': '',
                    '/collection/shelf/liked': '',
                    '/collection/shelf/new-episodes': '',
                    '/collection/shelf/recently-played': '',
                    '/concert/:concertId': '',
                    '/concerts': '',
                    '/concerts/details/:type/:id': '',
                    '/entities/:blockType/:blockId': '',
                    '/genre/:metatagId': '',
                    '/genre/:metatagId/albums': '',
                    '/genre/:metatagId/artists': '',
                    '/genre/:metatagId/playlists': '',
                    '/kids': '',
                    '/kids/category/:categoryId': '',
                    '/kids/editorial/album/:id': '',
                    '/kids/editorial/playlist/:id': '',
                    '/label/:labelId': '',
                    '/label/:labelId/albums': '',
                    '/label/:labelId/artists': '',
                    '/landing-promo-preview': '',
                    '/landing/:skeleton': '',
                    '/login-status': '',
                    '/mixes': '',
                    '/mixes/:navigationId': '',
                    '/multivibe': '',
                    '/multivibe/:roomId': '',
                    '/music-history': '',
                    '/muzmarket': '',
                    '/mymusic/favorite_tracks': '',
                    '/myvibe/:shareId': '',
                    '/non-music': '',
                    '/non-music/category/:id': '',
                    '/non-music/category/:id/albums': '',
                    '/non-music/editorial/album/:id': '',
                    '/non-music/editorial/playlist/:categoryId': '',
                    '/oauth': '',
                    '/pay': '',
                    '/playlist/:playlistId': '',
                    '/playlists/:playlistUuid': '',
                    '/plus': '',
                    '/post/:promoId': '',
                    '/promolanding/album/:albumId': '',
                    '/search': '',
                    '/search/history': '',
                    '/seo/album/:albumId/track/:trackId': '',
                    '/seo/track/:trackId': '',
                    '/settings': '',
                    '/slides/artist/:artistId': '',
                    '/slides/kids': '',
                    '/slides/podcast/:podcastId': '',
                    '/slides/special/:campaignId': '',
                    '/slides/user': '',
                    '/tag/:tagId': '',
                    '/track/:trackId': '',
                    '/users': '',
                    '/users/:userId/playlists/:kind': '',
                    '/video': '',
                    '/webview': '',
                };
        },
        50355: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return ((e.USER = 'user'), (e.ARTIST = 'artist'), (e.PODCAST = 'podcast'), (e.SPECIAL = 'special'), (e.KIDS = 'kids'), e);
            })({});
        },
        60333: (e, t, i) => {
            'use strict';
            i.d(t, { UrlInitializer: () => r });
            var s = i(84961);
            i(30282);
            var l = i(58390),
                a = i(88349),
                o = i(72288),
                n = i(91241);
            let r = (0, s.PA)((e) => {
                let { host: t } = e,
                    { location: i } = (0, o.g)(),
                    s = (0, l.usePathname)(),
                    r = (0, l.useSearchParams)().toString(),
                    c = window.location.host,
                    b = t || c,
                    N = 'https://'.concat(b),
                    I = 'https://'
                        .concat(b)
                        .concat(s)
                        .concat(r ? '?' : '')
                        .concat(r);
                ((N = b),
                    (I = ''
                        .concat(b)
                        .concat(s)
                        .concat(r ? '?' : '')
                        .concat(r)),
                    i.setPathname(s),
                    i.setSearchParams(r),
                    i.setHost(b),
                    i.setTld((0, a.f)(b) || n.l),
                    i.setOrigin(N),
                    i.setHref(I));
            });
        },
        64150: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { x: () => s }),
                (function (e) {
                    ((e.TEXT = 'TEXT'),
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
                        (e.LUMEN = 'LUMEN'));
                })(s || (s = {})));
        },
        65622: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 60333)),
                Promise.resolve().then(i.bind(i, 70047)),
                Promise.resolve().then(i.bind(i, 70394)),
                Promise.resolve().then(i.bind(i, 87396)));
        },
        67174: (e, t, i) => {
            'use strict';
            (i.d(t, { u: () => c }), i(30282));
            var s = i(35412),
                l = i(50348),
                a = i(30123);
            let o = (e) => {
                    var t;
                    if (!e) return e;
                    let i = (null != (t = e.split('?')[0]) ? t : '').split('/').filter(Boolean);
                    for (let e of Object.keys(l.j)) {
                        let t = e.split('/').filter(Boolean);
                        if (i.length !== t.length) continue;
                        let s = !0;
                        for (let e = 0; e < t.length; e++) {
                            let l = t[e],
                                a = i[e];
                            if (l && !l.startsWith(':') && l !== a) {
                                s = !1;
                                break;
                            }
                        }
                        if (s) return e;
                    }
                    return e;
                },
                n = (e) => {
                    let t = [],
                        i = e.split('/').filter(Boolean),
                        s = [];
                    for (let e of i) e.startsWith(':') ? t.push(e.substring(1)) : s.push(e);
                    let l = '/'.concat(s.join('/'));
                    if (0 === t.length) return e;
                    let a = t.map((e) => ''.concat(e, '=:').concat(e)).join('&');
                    return ''.concat(l, '?').concat(a);
                },
                r = (e) =>
                    e
                        .split('/')
                        .filter(Boolean)
                        .filter((e) => e.startsWith(':'))
                        .map((e) => e.substring(1)),
                c = function (e) {
                    for (var t, i = arguments.length, c = Array(i > 1 ? i - 1 : 0), b = 1; b < i; b++) c[b - 1] = arguments[b];
                    let [N] = c,
                        I = e.includes(':'),
                        T = e.includes('?'),
                        d = 'string' == typeof e ? e : String(e);
                    if (
                        (d.includes(a.nl) && (N = { ...N, options: { ...(null == N ? void 0 : N.options), isExternalLink: !0 } }),
                        T &&
                            ((e) => {
                                let [t, i] = e.split('?'),
                                    s = new URLSearchParams(i);
                                return Object.keys(l.j).some((e) => {
                                    let i = r(e);
                                    return 0 !== i.length && n(e).split('?')[0] === t && i.every((e) => s.has(e));
                                });
                            })(d))
                    )
                        return (0, s.no)(d, N);
                    if (T && !I) {
                        let e = o(d),
                            i = r(e);
                        if (i.length > 0) {
                            let l = ((e, t) => {
                                    var i;
                                    let s = (null != (i = e.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return t
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((e, t, i) => {
                                            let l = s[i];
                                            return (t.startsWith(':') && l && (e[t.substring(1)] = l), e);
                                        }, {});
                                })(d, e),
                                a = {
                                    ...((e, t) => {
                                        let i = e.split('?')[1];
                                        if (!i) return {};
                                        let s = new Set(t),
                                            l = {};
                                        return (
                                            new URLSearchParams(i).forEach((e, t) => {
                                                s.has(t) || (l[t] = e);
                                            }),
                                            l
                                        );
                                    })(d, i),
                                    ...(null != (t = null == N ? void 0 : N.query) ? t : {}),
                                },
                                o = n(e);
                            return (0, s.no)(o, { ...N, params: l, query: a });
                        }
                    }
                    if (I || T) {
                        let e = n(d);
                        return (0, s.no)(e, N);
                    }
                    let S = o(d),
                        A = (function (e, t) {
                            let [i, s] = e.split('?'),
                                l = null == i ? void 0 : i.split('/').filter(Boolean),
                                a = {},
                                o = t.split('/').filter(Boolean);
                            if ((null == l ? void 0 : l.length) !== o.length || (o[0] && !e.startsWith('/'.concat(o[0])))) return a;
                            for (let e = 0; e < o.length; e++) {
                                let t = o[e],
                                    i = l && l[e];
                                (null == t ? void 0 : t.startsWith(':')) && i && (a[t.substring(1)] = i);
                            }
                            return (
                                s &&
                                    s.split('&').map((e) => {
                                        let [t, i] = e.split('=');
                                        t && void 0 !== i && (a[t] = i);
                                    }),
                                a
                            );
                        })(d, S),
                        E = n(S);
                    return (0, s.no)(E, { ...N, params: A });
                };
        },
        67990: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        75914: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { m: () => s }),
                (function (e) {
                    ((e.WAVE = 'WAVE'), (e.ACTION = 'ACTION'), (e.SHARE = 'SHARE'), (e.SIMPLE = 'SIMPLE'), (e.LIKE = 'LIKE'));
                })(s || (s = {})));
        },
        79390: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { f: () => s }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(s || (s = {})));
        },
        80693: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            var s = (function (e) {
                return ((e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e);
            })({});
        },
        82212: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { t: () => s }),
                (function (e) {
                    ((e.ALBUM_PROMO = 'ALBUM_PROMO'),
                        (e.ARTIST_RECOMMENDATIONS_PROMO = 'ARTIST_RECOMMENDATIONS_PROMO'),
                        (e.SIMPLE_ARTIST_RECOMMENDATIONS_PROMO = 'SIMPLE_ARTIST_RECOMMENDATIONS_PROMO'),
                        (e.ARTIST_PICK = 'ARTIST_PICK'),
                        (e.ARTIST_CONCERTS = 'ARTIST_CONCERTS'),
                        (e.ARTIST_PLAYLISTS = 'ARTIST_PLAYLISTS'),
                        (e.ARTIST_POPULAR_TRACKS_AND_RELEASES = 'ARTIST_POPULAR_TRACKS_AND_RELEASES'),
                        (e.ARTIST_POPULAR_TRACKS = 'ARTIST_POPULAR_TRACKS'),
                        (e.ARTIST_RELEASE = 'ARTIST_RELEASE'),
                        (e.ARTIST_UPCOMING_RELEASE = 'ARTIST_UPCOMING_RELEASE'),
                        (e.ARTIST_ALBUMS = 'ARTIST_ALBUMS'),
                        (e.ARTIST_COMPILATIONS = 'ARTIST_COMPILATIONS'),
                        (e.ARTIST_CLIPS = 'ARTIST_CLIPS'),
                        (e.ARTIST_STUDIO_ALBUMS = 'ARTIST_STUDIO_ALBUMS'),
                        (e.ARTIST_SIMILAR_ENTITIES = 'ARTIST_SIMILAR_ENTITIES'),
                        (e.FAMILIAR_YOU_AND_ARTIST_PICK = 'FAMILIAR_YOU_AND_ARTIST_PICK'),
                        (e.SIMPLE_ALBUM_PROMO = 'SIMPLE_ALBUM_PROMO'),
                        (e.CHART_ALBUMS = 'CHART_ALBUMS'),
                        (e.CHART_TRACKS = 'CHART_TRACKS'),
                        (e.COLLECTION_ALBUMS = 'COLLECTION_ALBUMS'),
                        (e.COLLECTION_ALBUMS_PRESAVES = 'COLLECTION_ALBUMS_PRESAVES'),
                        (e.COLLECTION_ARTISTS = 'COLLECTION_ARTISTS'),
                        (e.COLLECTION_ARTISTS_AND_TOP = 'COLLECTION_ARTISTS_AND_TOP'),
                        (e.COLLECTION_TOP_ARTISTS = 'COLLECTION_TOP_ARTISTS'),
                        (e.COLLECTION_CLIPS = 'COLLECTION_CLIPS'),
                        (e.COLLECTION_FAVOURITE_PLAYLIST = 'COLLECTION_FAVOURITE_PLAYLIST'),
                        (e.COLLECTION_PLAYLISTS_CREATED = 'COLLECTION_PLAYLISTS_CREATED'),
                        (e.COLLECTION_PLAYLISTS_LIKED = 'COLLECTION_PLAYLISTS_LIKED'),
                        (e.COLLECTION_PLAYLISTS_LIKED_AND_CREATED = 'COLLECTION_PLAYLISTS_LIKED_AND_CREATED'),
                        (e.COLLECTION_PLAYLIST_WITH_LIKES = 'COLLECTION_PLAYLIST_WITH_LIKES'),
                        (e.COLLECTION_KIDS = 'COLLECTION_KIDS'),
                        (e.COLLECTION_WAVE_ROOMS = 'COLLECTION_WAVE_ROOMS'),
                        (e.COLLECTION_SIMILAR_ENTITIES = 'COLLECTION_SIMILAR_ENTITIES'),
                        (e.COLLECTION_WAVE_AGENT = 'COLLECTION_WAVE_AGENT'),
                        (e.CONCERTS_PERSONAL = 'CONCERTS_PERSONAL'),
                        (e.COLLECTION_DOWNLOADED_TRACKS = 'COLLECTION_DOWNLOADED_TRACKS'),
                        (e.CONCERTS_TOP = 'CONCERTS_TOP'),
                        (e.VIEWED_CONCERTS = 'VIEWED_CONCERTS'),
                        (e.EDITORIAL_ARTISTS = 'EDITORIAL_ARTISTS'),
                        (e.EDITORIAL_CONCERTS = 'EDITORIAL_CONCERTS'),
                        (e.EDITORIAL_COMPILATION = 'EDITORIAL_COMPILATION'),
                        (e.EDITORIAL_NEW_RELEASES = 'EDITORIAL_NEW_RELEASES'),
                        (e.EDITORIAL_PROMOTIONS = 'EDITORIAL_PROMOTIONS'),
                        (e.EDITORIAL_WAVES = 'EDITORIAL_WAVES'),
                        (e.EDITORIAL_WAVES_AGENT = 'EDITORIAL_WAVES_AGENT'),
                        (e.META_TAG_WAVE_AGENT = 'META_TAG_WAVE_AGENT'),
                        (e.MICRO_GENRE_WAVE_AGENT = 'MICRO_GENRE_WAVE_AGENT'),
                        (e.MICRO_GENRE_SIMILAR_WAVE_AGENT = 'MICRO_GENRE_SIMILAR_WAVE_AGENT'),
                        (e.META_TAG_SIMILAR_WAVE_AGENT = 'META_TAG_SIMILAR_WAVE_AGENT'),
                        (e.IN_STYLE = 'IN_STYLE'),
                        (e.ITEM_LIST = 'ITEM_LIST'),
                        (e.LIKES_AND_HISTORY = 'LIKES_AND_HISTORY'),
                        (e.META_TAG_ALBUMS = 'META_TAG_ALBUMS'),
                        (e.META_TAG_ARTISTS = 'META_TAG_ARTISTS'),
                        (e.META_TAG_NEW_ALBUMS = 'META_TAG_NEW_ALBUMS'),
                        (e.META_TAG_PLAYLISTS = 'META_TAG_PLAYLISTS'),
                        (e.META_TAG_POPULAR_ARTISTS = 'META_TAG_POPULAR_ARTISTS'),
                        (e.META_TAG_POPULAR_PLAYLISTS = 'META_TAG_POPULAR_PLAYLISTS'),
                        (e.META_TAG_SIMILAR_WAVE = 'META_TAG_SIMILAR_WAVE'),
                        (e.META_TAG_WAVE = 'META_TAG_WAVE'),
                        (e.MICRO_GENRE_ALBUMS = 'MICRO_GENRE_ALBUMS'),
                        (e.MICRO_GENRE_ARTISTS = 'MICRO_GENRE_ARTISTS'),
                        (e.MICRO_GENRE_SIMILAR_WAVE = 'MICRO_GENRE_SIMILAR_WAVE'),
                        (e.MICRO_GENRE_TOP_ARTISTS = 'MICRO_GENRE_TOP_ARTISTS'),
                        (e.MICRO_GENRE_WAVE = 'MICRO_GENRE_WAVE'),
                        (e.MIXES = 'MIXES'),
                        (e.MIXES_GRID = 'MIXES_GRID'),
                        (e.MIXES_MUSIC = 'MIXES_MUSIC'),
                        (e.NEUROMUSIC = 'NEUROMUSIC'),
                        (e.NEW_PLAYLISTS = 'NEW_PLAYLISTS'),
                        (e.NEW_RELEASES = 'NEW_RELEASES'),
                        (e.NEW_STARS_ARTISTS = 'NEW_STARS_ARTISTS'),
                        (e.NON_MUSIC_EDITORIAL_COMPILATION = 'NON_MUSIC_EDITORIAL_COMPILATION'),
                        (e.NON_MUSIC_OPEN_PLAYLIST = 'NON_MUSIC_OPEN_PLAYLIST'),
                        (e.NON_MUSIC_PROMOTIONS = 'NON_MUSIC_PROMOTIONS'),
                        (e.OPEN_PLAYLIST = 'OPEN_PLAYLIST'),
                        (e.OVERVIEW = 'OVERVIEW'),
                        (e.PERSONAL_ARTISTS = 'PERSONAL_ARTISTS'),
                        (e.PERSONAL_PLAYLISTS = 'PERSONAL_PLAYLISTS'),
                        (e.PROMOTIONS = 'PROMOTIONS'),
                        (e.Q2V_SUGGESTIONS = 'Q2V_SUGGESTIONS'),
                        (e.RECENTLY_PLAYED = 'RECENTLY_PLAYED'),
                        (e.RECOMMENDED_PLAYLISTS = 'RECOMMENDED_PLAYLISTS'),
                        (e.REWIND_PLAYLISTS = 'REWIND_PLAYLISTS'),
                        (e.SMART_OPEN_PLAYLIST = 'SMART_OPEN_PLAYLIST'),
                        (e.SPECIAL = 'SPECIAL'),
                        (e.SIMILAR_ARTISTS = 'SIMILAR_ARTISTS'),
                        (e.TABS = 'TABS'),
                        (e.WAVES = 'WAVES'),
                        (e.WAVES_AGENT = 'WAVES_AGENT'),
                        (e.SETS_BY_WAVES_AGENT = 'SETS_BY_WAVES_AGENT'),
                        (e.SETS_BY_WAVES = 'SETS_BY_WAVES'),
                        (e.WIZARD = 'WIZARD'),
                        (e.DONATIONS = 'DONATIONS'),
                        (e.CLIPS = 'CLIPS'),
                        (e.CONTINUE_LISTEN = 'CONTINUE_LISTEN'),
                        (e.DISLIKES = 'DISLIKES'),
                        (e.HISTORY = 'HISTORY'),
                        (e.SEARCH_HISTORY = 'SEARCH_HISTORY'),
                        (e.FAMILIAR_YOU = 'FAMILIAR_YOU'),
                        (e.CONCERT_PLACE = 'CONCERT_PLACE'),
                        (e.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS = 'COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS'),
                        (e.NON_MUSIC_CATEGORY = 'NON_MUSIC_CATEGORY'),
                        (e.PODCASTS_CHART_ALBUMS = 'PODCASTS_CHART_ALBUMS'));
                })(s || (s = {})));
        },
        86165: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { y: () => s }),
                (function (e) {
                    ((e.LINEUP = 'LINEUP'), (e.LINEUP_WITH_FESTIVAL = 'LINEUP_WITH_FESTIVAL'), (e.LINEUP_WITH_FESTIVAL_IMAGE = 'LINEUP_WITH_FESTIVAL_IMAGE'));
                })(s || (s = {})));
        },
        89988: (e, t, i) => {
            'use strict';
            i.d(t, {
                $$: () => d,
                EK: () => c,
                GF: () => o,
                Tu: () => n,
                VI: () => r,
                bF: () => b,
                bg: () => I,
                e0: () => T,
                fZ: () => a,
                g2: () => s,
                ur: () => N,
                wO: () => l,
            });
            let s = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebe12749d24738fe2018e/%%',
                l = 'avatars.mds.yandex.net/get-music-misc/28592/img.68eebdb294053d016bcd7bf0/%%',
                a = 0.5,
                o = 1.5,
                n = 1,
                r = 1920,
                c = 20,
                b = 1.7,
                N = 16,
                I = '.swiper-pagination,[data-screenshot-hidden]',
                T = 600,
                d = '  •  ';
        },
        91241: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            let s = 'ru';
        },
        93887: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => s });
            var s = (function (e) {
                return ((e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e);
            })({});
        },
        97956: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextTagSandbox = 'WebNextTagSandbox'),
                    (e.WebNextServiceWorkerCache = 'WebNextServiceWorkerCache'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextAlbumImpulseBanner = 'WebNextAlbumImpulseBanner'),
                    (e.WebNextPlaylistImpulseBanner = 'WebNextPlaylistImpulseBanner'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextWavePauseState = 'WebNextWavePauseState'),
                    (e.WebNextNewWaveEntryPoint = 'WebNextNewWaveEntryPoint'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextPlayerTimecodeTooltip = 'WebNextPlayerTimecodeTooltip'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion15267 = 'WebNextYaspVersion15267'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    (e.WebNextLumenCollectionEntryPoint = 'WebNextLumenCollectionEntryPoint'),
                    (e.WebNextWebView = 'WebNextWebView'),
                    e
                );
            })({});
        },
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => a, UC: () => o, dM: () => n, uV: () => r });
            var s = i(89916),
                l = i(67990);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof s.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                r = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(0, [4814, 6706, 1311, 3075, 8832, 6904, 4495, 3578, 1223, 9907, 1423, 2824, 3082, 4732, 9091, 6820, 389, 2992, 763, 2670, 7358], () => e((e.s = 65622))),
            (_N_E = e.O()));
    },
]);
