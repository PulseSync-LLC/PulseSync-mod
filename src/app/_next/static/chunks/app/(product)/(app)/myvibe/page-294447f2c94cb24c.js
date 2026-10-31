(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1677],
    {
        4370: (t, l, i) => {
            'use strict';
            i.d(l, { Z: () => s });
            var e = i(67174);
            let s = {
                main: (0, e.u)('/'),
                chart: (0, e.u)('/chart'),
                chartPodcasts: (0, e.u)('/chart/podcasts'),
                collection: (0, e.u)('/collection'),
                collectionAlbums: (0, e.u)('/collection/albums'),
                collectionArtists: (0, e.u)('/collection/artists'),
                collectionClips: (0, e.u)('/collection/clips'),
                collectionDislikes: (0, e.u)('/collection/dislikes'),
                collectionKids: (0, e.u)('/collection/kids'),
                collectionKidsAlbums: (0, e.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, e.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, e.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, e.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, e.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, e.u)('/collection/multivibes'),
                collectionPlaylists: (0, e.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, e.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, e.u)('/collection/playlists/liked'),
                collectionShelf: (0, e.u)('/collection/shelf'),
                collectionShelfLiked: (0, e.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, e.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, e.u)('/collection/shelf/recently-played'),
                concerts: (0, e.u)('/concerts'),
                kids: (0, e.u)('/kids'),
                mixes: (0, e.u)('/mixes'),
                musicHistory: (0, e.u)('/music-history'),
                muzmarket: (0, e.u)('/muzmarket'),
                mymusic: (0, e.u)('/mymusic'),
                mymusicDownloadsTracks: (0, e.u)('/mymusic/downloads/tracks'),
                multivibe: (0, e.u)('/multivibe'),
                nonMusic: (0, e.u)('/non-music'),
                pay: (0, e.u)('/pay'),
                userSlides: (0, e.u)('/slides/user'),
                search: (0, e.u)('/search'),
                searchHistory: (0, e.u)('/search/history'),
                settings: (0, e.u)('/settings'),
                video: (0, e.u)('/video'),
            };
        },
        10749: (t, l, i) => {
            Promise.resolve().then(i.bind(i, 33438));
        },
        30123: (t, l, i) => {
            'use strict';
            i.d(l, { k7: () => e, nl: () => s });
            let e = 1e3,
                s = 'https://';
        },
        33438: (t, l, i) => {
            'use strict';
            (i.r(l), i.d(l, { default: () => u }));
            var e = i(88800),
                s = i(58390),
                a = i(84961),
                o = i(53548),
                c = i(4370),
                r = i(72288),
                n = i(87396);
            let d = (0, a.PA)((t) => {
                    let { shareId: l, preloadedSharedVibe: i } = t,
                        { sharedVibe: a } = (0, r.g)(),
                        d = (0, s.useRouter)();
                    return (
                        (0, o.useEffect)(() => {
                            let t = !0;
                            return (
                                (async () => {
                                    (await a.getData(l, i), t && a.shareId === l && a.isResolved && (a.modal.open(), d.replace(c.Z.main.href)));
                                })(),
                                () => {
                                    ((t = !1), a.modal.isOpened || a.reset());
                                }
                            );
                        }, [i, d, l, a]),
                        (0, e.jsx)(n.MainSuspenseLoader, {})
                    );
                }),
                u = () => {
                    let t = (0, s.useSearchParams)().get('shareId');
                    return (t || (0, s.notFound)(), (0, e.jsx)(d, { shareId: t }));
                };
        },
        50348: (t, l, i) => {
            'use strict';
            i.d(l, { b: () => e, j: () => s });
            let e = {
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
                s = {
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
        60932: (t) => {
            t.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67174: (t, l, i) => {
            'use strict';
            (i.d(l, { u: () => n }), i(30282));
            var e = i(35412),
                s = i(50348),
                a = i(30123);
            let o = (t) => {
                    var l;
                    if (!t) return t;
                    let i = (null != (l = t.split('?')[0]) ? l : '').split('/').filter(Boolean);
                    for (let t of Object.keys(s.j)) {
                        let l = t.split('/').filter(Boolean);
                        if (i.length !== l.length) continue;
                        let e = !0;
                        for (let t = 0; t < l.length; t++) {
                            let s = l[t],
                                a = i[t];
                            if (s && !s.startsWith(':') && s !== a) {
                                e = !1;
                                break;
                            }
                        }
                        if (e) return t;
                    }
                    return t;
                },
                c = (t) => {
                    let l = [],
                        i = t.split('/').filter(Boolean),
                        e = [];
                    for (let t of i) t.startsWith(':') ? l.push(t.substring(1)) : e.push(t);
                    let s = '/'.concat(e.join('/'));
                    if (0 === l.length) return t;
                    let a = l.map((t) => ''.concat(t, '=:').concat(t)).join('&');
                    return ''.concat(s, '?').concat(a);
                },
                r = (t) =>
                    t
                        .split('/')
                        .filter(Boolean)
                        .filter((t) => t.startsWith(':'))
                        .map((t) => t.substring(1)),
                n = function (t) {
                    for (var l, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++) n[d - 1] = arguments[d];
                    let [u] = n,
                        m = t.includes(':'),
                        p = t.includes('?'),
                        y = 'string' == typeof t ? t : String(t);
                    if (
                        (y.includes(a.nl) && (u = { ...u, options: { ...(null == u ? void 0 : u.options), isExternalLink: !0 } }),
                        p &&
                            ((t) => {
                                let [l, i] = t.split('?'),
                                    e = new URLSearchParams(i);
                                return Object.keys(s.j).some((t) => {
                                    let i = r(t);
                                    return 0 !== i.length && c(t).split('?')[0] === l && i.every((t) => e.has(t));
                                });
                            })(y))
                    )
                        return (0, e.no)(y, u);
                    if (p && !m) {
                        let t = o(y),
                            i = r(t);
                        if (i.length > 0) {
                            let s = ((t, l) => {
                                    var i;
                                    let e = (null != (i = t.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return l
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, l, i) => {
                                            let s = e[i];
                                            return (l.startsWith(':') && s && (t[l.substring(1)] = s), t);
                                        }, {});
                                })(y, t),
                                a = {
                                    ...((t, l) => {
                                        let i = t.split('?')[1];
                                        if (!i) return {};
                                        let e = new Set(l),
                                            s = {};
                                        return (
                                            new URLSearchParams(i).forEach((t, l) => {
                                                e.has(l) || (s[l] = t);
                                            }),
                                            s
                                        );
                                    })(y, i),
                                    ...(null != (l = null == u ? void 0 : u.query) ? l : {}),
                                },
                                o = c(t);
                            return (0, e.no)(o, { ...u, params: s, query: a });
                        }
                    }
                    if (m || p) {
                        let t = c(y);
                        return (0, e.no)(t, u);
                    }
                    let k = o(y),
                        b = (function (t, l) {
                            let [i, e] = t.split('?'),
                                s = null == i ? void 0 : i.split('/').filter(Boolean),
                                a = {},
                                o = l.split('/').filter(Boolean);
                            if ((null == s ? void 0 : s.length) !== o.length || (o[0] && !t.startsWith('/'.concat(o[0])))) return a;
                            for (let t = 0; t < o.length; t++) {
                                let l = o[t],
                                    i = s && s[t];
                                (null == l ? void 0 : l.startsWith(':')) && i && (a[l.substring(1)] = i);
                            }
                            return (
                                e &&
                                    e.split('&').map((t) => {
                                        let [l, i] = t.split('=');
                                        l && void 0 !== i && (a[l] = i);
                                    }),
                                a
                            );
                        })(y, k),
                        h = c(k);
                    return (0, e.no)(h, { ...u, params: b });
                };
        },
        87396: (t, l, i) => {
            'use strict';
            i.d(l, { MainSuspenseLoader: () => c });
            var e = i(88800),
                s = i(52300),
                a = i(60932),
                o = i.n(a);
            let c = (t) => {
                let { style: l } = t,
                    i = {
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
                        ...l,
                    };
                return (0, e.jsx)('div', {
                    style: i,
                    children: (0, e.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: o().icon,
                    }),
                });
            };
        },
    },
    (t) => {
        (t.O(0, [7435, 6706, 8832, 7342, 4732, 763, 2670, 7358], () => t((t.s = 10749))), (_N_E = t.O()));
    },
]);
