(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4347],
    {
        25895: (t, e, s) => {
            'use strict';
            (s.d(e, { u: () => n }), s(93588));
            var i = s(89288),
                l = s(74310),
                a = s(38097);
            let o = (t) => {
                    var e;
                    if (!t) return t;
                    let s = (null != (e = t.split('?')[0]) ? e : '').split('/').filter(Boolean);
                    for (let t of Object.keys(l.j)) {
                        let e = t.split('/').filter(Boolean);
                        if (s.length !== e.length) continue;
                        let i = !0;
                        for (let t = 0; t < e.length; t++) {
                            let l = e[t],
                                a = s[t];
                            if (l && !l.startsWith(':') && l !== a) {
                                i = !1;
                                break;
                            }
                        }
                        if (i) return t;
                    }
                    return t;
                },
                r = (t) => {
                    let e = [],
                        s = t.split('/').filter(Boolean),
                        i = [];
                    for (let t of s) t.startsWith(':') ? e.push(t.substring(1)) : i.push(t);
                    let l = '/'.concat(i.join('/'));
                    if (0 === e.length) return t;
                    let a = e.map((t) => ''.concat(t, '=:').concat(t)).join('&');
                    return ''.concat(l, '?').concat(a);
                },
                c = (t) =>
                    t
                        .split('/')
                        .filter(Boolean)
                        .filter((t) => t.startsWith(':'))
                        .map((t) => t.substring(1)),
                n = function (t) {
                    for (var e, s = arguments.length, n = Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++) n[d - 1] = arguments[d];
                    let [u] = n,
                        m = t.includes(':'),
                        p = t.includes('?'),
                        y = 'string' == typeof t ? t : String(t);
                    if (
                        (y.includes(a.nl) && (u = { ...u, options: { ...(null == u ? void 0 : u.options), isExternalLink: !0 } }),
                        p &&
                            ((t) => {
                                let [e, s] = t.split('?'),
                                    i = new URLSearchParams(s);
                                return Object.keys(l.j).some((t) => {
                                    let s = c(t);
                                    return 0 !== s.length && r(t).split('?')[0] === e && s.every((t) => i.has(t));
                                });
                            })(y))
                    )
                        return (0, i.no)(y, u);
                    if (p && !m) {
                        let t = o(y),
                            s = c(t);
                        if (s.length > 0) {
                            let l = ((t, e) => {
                                    var s;
                                    let i = (null != (s = t.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return e
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, e, s) => {
                                            let l = i[s];
                                            return (e.startsWith(':') && l && (t[e.substring(1)] = l), t);
                                        }, {});
                                })(y, t),
                                a = {
                                    ...((t, e) => {
                                        let s = t.split('?')[1];
                                        if (!s) return {};
                                        let i = new Set(e),
                                            l = {};
                                        return (
                                            new URLSearchParams(s).forEach((t, e) => {
                                                i.has(e) || (l[e] = t);
                                            }),
                                            l
                                        );
                                    })(y, s),
                                    ...(null != (e = null == u ? void 0 : u.query) ? e : {}),
                                },
                                o = r(t);
                            return (0, i.no)(o, { ...u, params: l, query: a });
                        }
                    }
                    if (m || p) {
                        let t = r(y);
                        return (0, i.no)(t, u);
                    }
                    let k = o(y),
                        b = (function (t, e) {
                            let [s, i] = t.split('?'),
                                l = null == s ? void 0 : s.split('/').filter(Boolean),
                                a = {},
                                o = e.split('/').filter(Boolean);
                            if ((null == l ? void 0 : l.length) !== o.length || (o[0] && !t.startsWith('/'.concat(o[0])))) return a;
                            for (let t = 0; t < o.length; t++) {
                                let e = o[t],
                                    s = l && l[t];
                                (null == e ? void 0 : e.startsWith(':')) && s && (a[e.substring(1)] = s);
                            }
                            return (
                                i &&
                                    i.split('&').map((t) => {
                                        let [e, s] = t.split('=');
                                        e && void 0 !== s && (a[e] = s);
                                    }),
                                a
                            );
                        })(y, k),
                        g = r(k);
                    return (0, i.no)(g, { ...u, params: b });
                };
        },
        27912: (t, e, s) => {
            'use strict';
            s.d(e, { t: () => i });
            let i = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 2,
            };
        },
        38097: (t, e, s) => {
            'use strict';
            s.d(e, { k7: () => i, nl: () => l });
            let i = 1e3,
                l = 'https://';
        },
        53457: (t, e, s) => {
            'use strict';
            (s.r(e), s.d(e, { default: () => r }));
            var i = s(25839),
                l = s(84059),
                a = s(25895);
            let o = (t) => {
                    let { categoryId: e } = t,
                        { href: s } = (0, a.u)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(e) } });
                    (0, l.redirect)(s);
                },
                r = () => {
                    let t = (0, l.useSearchParams)().get('categoryId');
                    return (t || (0, l.notFound)(), (0, i.jsx)(o, { categoryId: t }));
                };
        },
        74310: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => i, j: () => l });
            let i = {
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
                };
        },
        93588: (t, e, s) => {
            'use strict';
            s.d(e, { sK: () => $, NN: () => l, $3: () => i, CP: () => d, tE: () => u, Ef: () => m, $5: () => y, IU: () => I, tk: () => k.t, u0: () => f });
            let i = !1,
                l = !0;
            var a = s(58025),
                o = s(36432);
            class r extends o.t {
                constructor(t = 'Internal error', { code: e = 'E_CONFIG', ...s } = {}) {
                    (super(t, { code: e, ...s }), (0, a._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, r.prototype));
                }
            }
            class c extends r {
                constructor(t) {
                    (super('The configuration file for environment "'.concat(t, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, a._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            let n = (function (t) {
                    let { manifest: e, getConfig: s } = t,
                        i = new Map();
                    return (t) => {
                        let l = i.get(t);
                        if (l) return l;
                        if (!Object.hasOwn(e, t)) return Promise.reject(new c(t));
                        let a = e[t]().then(s);
                        return (i.set(t, a), a);
                    };
                })({
                    manifest: {
                        development: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(6214)]).then(s.bind(s, 66214)),
                        qa: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(7216)]).then(s.bind(s, 7216)),
                        stress: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(2967)]).then(s.bind(s, 5348)),
                        production: () => Promise.all([s.e(546), s.e(260), s.e(2917), s.e(4903), s.e(1198), s.e(4069)]).then(s.bind(s, 74069)),
                    },
                    getConfig: (t) => {
                        let { config: e } = t;
                        return e;
                    },
                }),
                d = (t, e) => ''.concat(t, '/').concat(e || '1.0.0'),
                u = (t, e) => (e ? t.afisha.clientId[e] : t.afisha.clientId.web);
            function m(t, e) {
                return e ? t.player.secretKey[e] : '';
            }
            var p = s(49124);
            let y = () => {
                let t = 'window.location.pathname',
                    e = p.env.APP_VERSION || '',
                    s = 'production';
                return {
                    rumSettings: {
                        rumId: 'ru.music.frontend.desktop',
                        project: 'music.frontend.desktop',
                        service: 'frontend-desktop',
                        platform: 'desktop',
                        page: t,
                        heroElement: 'body',
                        version: e,
                        environment: s,
                    },
                    errorBooster: {
                        project: 'music.frontend.desktop',
                        platform: 'desktop',
                        page: t,
                        version: e,
                        environment: s,
                        unhandledRejection: !0,
                        uncaughtException: !0,
                        resourceFails: !0,
                    },
                };
            };
            var k = s(27912),
                b = s(90887),
                g = s(52830);
            let f = (t, e, s) => {
                let { allowCustomPrefixUrl: i, prefixUrl: l } = t.resources.musicExternalApi,
                    a = i && 'string' == typeof s && s.length > 0 ? s : l;
                return (0, b.r)(a, e, g.B);
            };
            var $ = (function (t) {
                return ((t.WEB = 'YandexMusicWebNext'), (t.DESKTOP = 'YandexMusicDesktopApp'), t);
            })({});
            let I = async (t) => ({ env: t, publicConfig: await n(t) });
        },
        97732: (t, e, s) => {
            Promise.resolve().then(s.bind(s, 53457));
        },
    },
    (t) => {
        (t.O(0, [8398, 4475, 5056, 7358], () => t((t.s = 97732))), (_N_E = t.O()));
    },
]);
