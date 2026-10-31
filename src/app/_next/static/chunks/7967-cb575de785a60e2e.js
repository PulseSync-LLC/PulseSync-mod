'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7967],
    {
        86: (e, n, t) => {
            t.d(n, { D: () => r });
            let r = (0, t(53548).createContext)({ skeleton: void 0 });
        },
        8840: (e, n, t) => {
            t.d(n, { BL: () => _, Gv: () => a, L5: () => s });
            var r,
                i = t(53548),
                o = {
                    597: (e, n, t) => {
                        (Object.defineProperty(n, '__esModule', { value: !0 }),
                            (n.useIntersectionObserver = n.createIntersectionObserver = n.getElementNameByDataAttribute = n.isInViewportNow = n.defaultOptions = void 0));
                        let r = t(810),
                            { innerWidth: i = 0, innerHeight: o = 0 } = window;
                        function l(e) {
                            let { top: n, right: t, bottom: r, left: l } = e.getBoundingClientRect();
                            return ((n >= 0 && n <= o) || (r >= 0 && r <= o)) && ((l >= 0 && l <= i) || (t >= 0 && t <= i));
                        }
                        function c(e) {
                            var n, t;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (t = null == e || null == (n = e.getAttribute) ? void 0 : n.call(e, r)) ? t : e.attributes[0];
                        }
                        function a(e, n) {
                            let t = new IntersectionObserver((n) => {
                                n.forEach((n) => {
                                    e(n, t);
                                });
                            }, n);
                            return t;
                        }
                        ((n.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (n.isInViewportNow = l),
                            (n.getElementNameByDataAttribute = c),
                            (n.createIntersectionObserver = a),
                            (n.useIntersectionObserver = function (e, t, i) {
                                let [{ freezeOnceVisible: o, preflightCheck: s, ..._ }, u = !1] =
                                        'boolean' == typeof t || void 0 === t ? [n.defaultOptions, t] : [{ ...n.defaultOptions, ...t }, i],
                                    [d, S] = (0, r.useState)({}),
                                    I = (0, r.useRef)(new Set()),
                                    p = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : a((e) => {
                                                      let n = c(e.target);
                                                      if (n && p) {
                                                          if (I.current.has(n)) return;
                                                          (S((t) => ({ ...t, [n]: { isIntersecting: e.isIntersecting } })),
                                                              o && e.isIntersecting && (I.current.add(n), p.unobserve(e.target)));
                                                      }
                                                  }, _),
                                        [u],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let n = !1;
                                                        if (s && (n = l(e.current))) {
                                                            let n = c(e.current);
                                                            S((e) => ({ ...e, [n]: { isIntersecting: !0 } }));
                                                        }
                                                        n || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    d
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = t.t(i, 2));
                    },
                },
                l = {},
                c = (function e(n) {
                    var t = l[n];
                    if (void 0 !== t) return t.exports;
                    var r = (l[n] = { exports: {} });
                    return (o[n](r, r.exports, e), r.exports);
                })(597);
            c.__esModule;
            var a = c.createIntersectionObserver;
            c.defaultOptions;
            var s = c.getElementNameByDataAttribute;
            c.isInViewportNow;
            var _ = c.useIntersectionObserver;
        },
        12816: (e, n, t) => {
            t.d(n, { _Q: () => r, fD: () => o, qG: () => l, xK: () => i });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'sidebar',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                o = [
                    'home',
                    'sidebar',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                l = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        14518: (e, n, t) => {
            t.d(n, { $: () => o });
            var r = t(53548),
                i = t(90334);
            function o() {
                return (0, r.useContext)(i.r);
            }
        },
        15947: (e, n, t) => {
            t.d(n, { U: () => c });
            var r = t(35412),
                i = t(28166),
                o = t(97261);
            let l = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, i.Lz],
                c = (e, n, t) => {
                    let c;
                    try {
                        c = new URL(n);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, r.Rj)(e, { allowedProtocols: new Set([...l, c.protocol]), baseUrl: c.href });
                    return a.isAllowed
                        ? a.url.protocol === i.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== t && ((e, n) => e.protocol === n.protocol && e.hostname === n.hostname && e.port === n.port)(a.url, c)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        28166: (e, n, t) => {
            t.d(n, { Lz: () => r, ov: () => i });
            let r = ''.concat('yandexmusic', ':'),
                i = ''.concat(r, '//');
        },
        28830: (e, n, t) => {
            t.d(n, { n: () => l });
            var r = t(53548),
                i = t(38003),
                o = t(80566);
            let l = function () {
                let { callback: e, singleEvent: n, withViewUuid: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    l = (0, r.useRef)(null),
                    c = (0, i.D)(),
                    a = (0, r.useId)(),
                    s = (0, r.useContext)(o.B),
                    _ = (0, r.useCallback)(
                        (r, i) => {
                            (e ? e(r, t ? i : void 0) : c(r, i), n && s.unobserveElement(a));
                        },
                        [e, s, a, c, n, t],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            s.observeElement({ elementRef: l, elementId: a, callback: _ }),
                            () => {
                                s.unobserveElement(a);
                            }
                        ),
                        [e, s, _, a, c],
                    ),
                    { ref: l, intersectionPropertyId: a }
                );
            };
        },
        34500: (e, n, t) => {
            t.d(n, { N: () => o });
            var r = t(53548),
                i = t(43620);
            function o() {
                return (0, r.useContext)(i.p);
            }
        },
        37436: (e, n, t) => {
            t.d(n, { W: () => o });
            var r = t(92716),
                i = t(12816);
            let o = {
                [i._Q.ALBUM]: r.AppScreen.AlbumScreen,
                [i._Q.PLAYLIST]: r.AppScreen.PlaylistScreen,
                [i._Q.HOME]: r.AppScreen.MainScreen,
                [i._Q.ARTIST]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_TRACKS]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_SIMILAR]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_ALBUMS]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_DISCOGRAPHY]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_COMPILATIONS]: r.AppScreen.ArtistScreen,
                [i._Q.ARTIST_CONCERTS]: r.AppScreen.ArtistScreen,
                [i._Q.SEARCH]: r.AppScreen.SearchScreen,
                [i._Q.OWN_COLLECTION]: r.AppScreen.CollectionLandingScreen,
                [i._Q.LANDING]: r.AppScreen.DynamicScreen,
                [i._Q.HISTORY]: r.AppScreen.MusicHistoryScreen,
                [i._Q.NON_MUSIC]: r.AppScreen.NonmusicLandingScreen,
                [i._Q.CHART]: r.AppScreen.PlaylistListScreen,
                [i._Q.PODCAST]: r.AppScreen.AlbumScreen,
                [i._Q.AUDIOBOOK]: r.AppScreen.AlbumScreen,
                [i._Q.OWN_ALBUMS]: r.AppScreen.CollectionAlbumsScreen,
                [i._Q.OWN_DISLIKES]: r.AppScreen.CollectionTrackListScreen,
                [i._Q.OWN_ARTISTS]: r.AppScreen.CollectionArtistsScreen,
                [i._Q.OWN_PLAYLISTS]: r.AppScreen.CollectionPlaylistsScreen,
                [i._Q.FAMILIAR_YOU]: r.AppScreen.TrackListScreen,
                [i._Q.ENTITIES]: r.AppScreen.ObjectsGridScreen,
                [i._Q.TRAILER]: r.AppScreen.TrailerScreen,
                [i._Q.PLAYER]: r.AppScreen.ExpandedPlayerScreen,
                [i._Q.VIDEO_PLAYER]: r.AppScreen.VideoScreen,
                [i._Q.TRACK_SCREEN]: r.AppScreen.TrackScreen,
                [i._Q.PAYWALL]: r.AppScreen.PaywallScreen,
                [i._Q.CONCERTS]: r.AppScreen.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.AppScreen.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.AppScreen.ConcertLocationSelector,
                [i._Q.PAGE_NOT_FOUND_SCREEN]: r.AppScreen.PageNotFoundScreen,
                [i._Q.SLIDES_SCREEN]: r.AppScreen.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.AppScreen.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.AppScreen.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.AppScreen.FactScreen,
                [i._Q.LUMEN_FACT_SCREEN]: r.AppScreen.LumenFactScreen,
                [i._Q.LUMEN_AWAKENING_SCREEN]: r.AppScreen.LumenAwakeningScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.AppScreen.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.AppScreen.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.AppScreen.MultivibeActionScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.AppScreen.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_UNIFIED_SCREEN]: r.AppScreen.MultivibeUnifiedScreen,
            };
        },
        38003: (e, n, t) => {
            t.d(n, { D: () => L });
            var r = t(53548),
                i = t(78793),
                o = t(54577),
                l = t(90780),
                c = t(79070),
                a = t(65523),
                s = t(42139),
                _ = t(12816),
                u = t(34500),
                d = t(57649),
                S = t(60840),
                I = t(46166),
                p = t(14518),
                A = t(73442),
                E = t(91248);
            let L = () => {
                let e = (0, a.U)(),
                    n = (0, l.st)(),
                    { hash: t } = (0, l.gf)(),
                    { pageId: L, displayReasonId: v } = (0, p.$)(),
                    { tabId: T, tabPos: f, isTabSelectedByDefault: N } = (0, E.R)(),
                    { offsetBlockPosY: C } = (0, d.u)(),
                    { blockType: O, blockId: b, blockPosX: g, blockPosY: R, mainObjectId: m, mainObjectType: P, displayReasonId: y } = (0, u.N)(),
                    { filterKey: D, filterValue: k, filterPos: M } = (0, S.G)(),
                    { objectType: B, objectsCount: h, objectId: Q, objectPosX: x, objectPosY: w } = (0, I.J)(),
                    { skeleton: U } = (0, A.b)(),
                    j = null != y ? y : v,
                    G = (0, c.L)(() => (void 0 !== C && void 0 !== R ? C + R : R));
                return (0, r.useCallback)(
                    (r, l) => {
                        if (!n || !L || !_.xK.includes(L) || !_.fD.includes(L)) return;
                        let c = s.F[L];
                        if (!c) return;
                        let a = {
                            hash: t,
                            pageId: c,
                            entityType: O,
                            entityId: b,
                            entityPosX: g,
                            entityPosY: G,
                            objectsCount: h,
                            viewUuid: l,
                            objectType: B,
                            objectId: Q,
                            objectPosX: x,
                            objectPosY: w,
                        };
                        (void 0 !== D && ((a.filterKey = D), (a.filterValue = k), (a.filterPos = M)),
                            _.qG.includes(L) && ((a.tabId = T), (a.tabPos = f), (a.isTabSelectedByDefault = N)),
                            U && (a.skeletonId = U),
                            'string' == typeof m && 'string' == typeof P && ((a.mainObjectType = P), (a.mainObjectId = m)),
                            j && (a.displayReasonId = j));
                        let u = (0, i.F)({ params: a, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, o.Pf)(n.evgenInstance, u) : (0, o.nv)(n.evgenInstance, u));
                    },
                    [n, j, b, g, G, O, D, M, k, t, N, e, m, P, Q, x, w, B, h, L, U, T, f],
                );
            };
        },
        41617: (e, n, t) => {
            t.d(n, { E: () => r });
            let r = (0, t(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        42139: (e, n, t) => {
            t.d(n, { F: () => o });
            var r = t(92716),
                i = t(12816);
            let o = {
                [i._Q.HOME]: r.LandingBlockPageID.MainScreen,
                [i._Q.SIDEBAR]: r.LandingBlockPageID.Sidebar,
                [i._Q.NON_MUSIC]: r.LandingBlockPageID.NonmusicLandingScreen,
                [i._Q.OWN_COLLECTION]: r.LandingBlockPageID.CollectionLandingScreen,
                [i._Q.LANDING]: r.LandingBlockPageID.DynamicScreen,
                [i._Q.OWN_ARTISTS]: r.LandingBlockPageID.CollectionArtistsScreen,
                [i._Q.SEARCH]: r.LandingBlockPageID.SearchScreen,
                [i._Q.ARTIST]: r.LandingBlockPageID.ArtistScreen,
                [i._Q.CONCERTS]: r.LandingBlockPageID.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.LandingBlockPageID.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.LandingBlockPageID.ConcertLocationSelector,
                [i._Q.ALBUM]: r.LandingBlockPageID.AlbumScreen,
                [i._Q.PLAYLIST]: r.LandingBlockPageID.PlaylistScreen,
                [i._Q.SLIDES_SCREEN]: r.LandingBlockPageID.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.LandingBlockPageID.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.LandingBlockPageID.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.LandingBlockPageID.FactScreen,
                [i._Q.LUMEN_FACT_SCREEN]: r.LandingBlockPageID.LumenFactScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.LandingBlockPageID.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.LandingBlockPageID.MultivibeActionScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.LandingBlockPageID.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_UNIFIED_SCREEN]: r.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        43620: (e, n, t) => {
            t.d(n, { p: () => r });
            let r = (0, t(53548).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        46079: (e, n, t) => {
            t.d(n, { j: () => r });
            let r = (0, t(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46166: (e, n, t) => {
            t.d(n, { J: () => o });
            var r = t(53548),
                i = t(90134);
            function o() {
                return (0, r.useContext)(i.l);
            }
        },
        57649: (e, n, t) => {
            t.d(n, { u: () => o });
            var r = t(53548),
                i = t(41617);
            function o() {
                return (0, r.useContext)(i.E);
            }
        },
        60840: (e, n, t) => {
            t.d(n, { G: () => o });
            var r = t(53548),
                i = t(86726);
            function o() {
                return (0, r.useContext)(i.S);
            }
        },
        65453: (e, n, t) => {
            t.d(n, { N: () => s });
            var r,
                i = t(53548),
                o = {
                    5881: (e, n, t) => {
                        function r() {
                            for (var e, n, t = 0, r = ''; t < arguments.length;)
                                (e = arguments[t++]) &&
                                    (n = (function e(n) {
                                        var t,
                                            r,
                                            i = '';
                                        if ('string' == typeof n || 'number' == typeof n) i += n;
                                        else if ('object' == typeof n)
                                            if (Array.isArray(n)) for (t = 0; t < n.length; t++) n[t] && (r = e(n[t])) && (i && (i += ' '), (i += r));
                                            else for (t in n) n[t] && (i && (i += ' '), (i += t));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += n));
                            return r;
                        }
                        (t.r(n), t.d(n, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    7354: (e, n, t) => {
                        (t.r(n), t.d(n, { default: () => r }));
                        let r = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, n) => {
                        var t = Symbol.for('react.transitional.element');
                        function r(e, n, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== n.key && (i = '' + n.key), 'key' in n))
                                for (var o in ((r = {}), n)) 'key' !== o && (r[o] = n[o]);
                            else r = n;
                            return { $$typeof: t, type: e, key: i, ref: void 0 !== (n = r.ref) ? n : null, props: r };
                        }
                        ((n.Fragment = Symbol.for('react.fragment')), (n.jsx = r), (n.jsxs = r));
                    },
                    4377: (e, n, t) => {
                        e.exports = t(9097);
                    },
                    3616: function (e, n, t) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(n, '__esModule', { value: !0 }), (n.Link = void 0));
                        let i = t(4377),
                            o = t(810),
                            l = t(5881),
                            c = r(t(7354)),
                            a = (e) => {
                                let {
                                        component: n = (0, i.jsx)('a', {}),
                                        block: t,
                                        target: r,
                                        rel: a,
                                        href: s,
                                        forwardRef: _,
                                        iconPosition: u = 'left',
                                        flexIcon: d,
                                        icon: S,
                                        className: I,
                                        children: p,
                                        textClassName: A = '',
                                        containerClassName: E,
                                        ...L
                                    } = e,
                                    v = (0, o.useId)(),
                                    T = !o.Children.count(p),
                                    f = 'left' === u,
                                    N = null;
                                if (void 0 !== S) {
                                    var C;
                                    N = (0, o.cloneElement)(S, {
                                        className: (0, l.clsx)(
                                            c.default.icon,
                                            { [c.default['icon_position_'.concat(u)]]: !T && u },
                                            null == (C = S.props) ? void 0 : C.className,
                                        ),
                                        key: v,
                                    });
                                }
                                let O = (0, o.useMemo)(
                                    () =>
                                        S
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, l.clsx)(c.default.iconContainer, E),
                                                  children: [f && N, !T && (0, i.jsx)('span', { className: A, children: p }), !f && N],
                                              })
                                            : p,
                                    [p, E, S, f, T, N, A],
                                );
                                return (0, o.cloneElement)(
                                    n,
                                    {
                                        ref: _,
                                        target: r,
                                        rel: '_blank' === r && void 0 === a ? 'noopener noreferrer' : a,
                                        href: s,
                                        className: (0, l.clsx)(c.default.root, { [c.default.block]: t, [c.default.flexIcon]: S && d, [c.default.iconOnly]: S && T }, I),
                                        ...L,
                                        ...n.props,
                                    },
                                    O,
                                );
                            };
                        n.Link = (0, o.forwardRef)((e, n) => (0, i.jsx)(a, { forwardRef: n, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = t.t(i, 2));
                    },
                },
                l = {};
            function c(e) {
                var n = l[e];
                if (void 0 !== n) return n.exports;
                var t = (l[e] = { exports: {} });
                return (o[e].call(t.exports, t, t.exports, c), t.exports);
            }
            ((c.d = (e, n) => {
                for (var t in n) c.o(n, t) && !c.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
            }),
                (c.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
                (c.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0));
                var e = c(3616);
                Object.defineProperty(a, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var s = a.r;
            a.X;
        },
        67046: (e, n, t) => {
            t.d(n, { F: () => r });
            let r = (0, t(53548).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        73442: (e, n, t) => {
            t.d(n, { b: () => o });
            var r = t(53548),
                i = t(86);
            function o() {
                return (0, r.useContext)(i.D);
            }
        },
        78793: (e, n, t) => {
            t.d(n, { F: () => r });
            function r(e) {
                let { params: n, logger: t, context: r } = e,
                    i = Object.getOwnPropertyNames(n).filter((e) => void 0 === n[e]);
                return i.length > 0 ? (t.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: n, context: r }), null) : n;
            }
        },
        78940: (e, n, t) => {
            (t.d(n, { Z: () => a }), t(30282));
            var r = t(58390),
                i = t(29993),
                o = t(67174),
                l = t(15947),
                c = t(97261);
            let a = (e) => {
                let n = (0, r.useRouter)(),
                    { href: t, target: a } = (0, o.u)(e);
                return (0, i.c)((e) => {
                    let r = (0, l.U)(t, window.location.href, a);
                    if (!r) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (r.type === c.I.EXTERNAL || r.type === c.I.DEEPLINK
                            ? ((e) => {
                                  let { target: n, rel: t } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, n, t);
                              })(r.href)
                            : n.push(r.href));
                });
            };
        },
        79070: (e, n, t) => {
            t.d(n, { L: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var i = r.useReturnValue;
        },
        80566: (e, n, t) => {
            t.d(n, { B: () => r });
            let r = (0, t(53548).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        86726: (e, n, t) => {
            t.d(n, { S: () => r });
            let r = (0, t(53548).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        90134: (e, n, t) => {
            t.d(n, { l: () => r });
            let r = (0, t(53548).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        90334: (e, n, t) => {
            t.d(n, { r: () => r });
            let r = (0, t(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, n, t) => {
            t.d(n, { vZ: () => A, st: () => o, gf: () => c });
            var r = t(53548);
            let i = (0, r.createContext)(null);
            function o() {
                return (0, r.useContext)(i);
            }
            let l = (0, r.createContext)({ hash: void 0 });
            function c() {
                return (0, r.useContext)(l);
            }
            var a = t(88800),
                s = t(54020);
            let _ = (e) => {
                let { children: n } = e,
                    t = (0, r.useMemo)(() => ({ hash: (0, s.A)() }), []);
                return (0, a.jsx)(l.Provider, { value: t, children: n });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class d {
                makeParams() {
                    return {};
                }
            }
            var S = t(9519);
            class I {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, n) {
                    this.evgen.trackEvent(e, n);
                }
                constructor(e, n, t) {
                    ((0, S._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, i) => {
                                let o = { ...i, ...n.getGlobalParams(), ...t.getPlatformParams() };
                                e.trackEvent(r, o);
                            },
                        }));
                }
            }
            let p = null,
                A = (e) => {
                    let { allowAnalyticsLogs: n, children: t, evgenUserParam: o, logger: l, metrika: c } = e,
                        s = (0, r.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, n, t) {
                                let r = (function (e) {
                                    let { callback: n, maxSendingItemsPerRequest: t, requestsSendingDelay: r } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && n(i.splice(0, t)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (n) => {
                                        e(n);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (t && n.log(e, i), r.add({ [e]: i }));
                                    },
                                };
                            })((e) => c.count(e, o), l, n);
                            return (p = new I(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new d();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [l, c]);
                    return (0, a.jsx)(i.Provider, { value: s, children: (0, a.jsx)(_, { children: t }) });
                };
        },
        91248: (e, n, t) => {
            t.d(n, { R: () => o });
            var r = t(53548),
                i = t(67046);
            function o() {
                return (0, r.useContext)(i.F);
            }
        },
        91292: (e, n, t) => {
            t.d(n, { N: () => S });
            var r = t(88800),
                i = t(53548),
                o = t(12389),
                l = t.n(o),
                c = t(29993),
                a = t(65453),
                s = t(46079),
                _ = t(67174);
            let u = (e) => {
                    let [n, t] = (0, i.useState)(!1),
                        o = (0, c.c)(() => {
                            t(!0);
                        });
                    return (0, r.jsx)(l(), { prefetch: n, ...e, onMouseEnter: o });
                },
                d = (e) => {
                    let { forwardedRef: n, href: t, component: o, ...c } = e,
                        { isPrefetchDisabled: d, isPrefetchOnHover: S } = (0, i.useContext)(s.j),
                        { href: I, target: p, rel: A } = (0, _.u)(null != t ? t : ''),
                        E = (0, i.isValidElement)(o)
                            ? o
                            : (function (e, n, t) {
                                  return e ? (n ? (0, r.jsx)(l(), { prefetch: !1 }) : t ? (0, r.jsx)(u, { href: e }) : (0, r.jsx)(l(), {})) : (0, r.jsx)('a', {});
                              })(t, d, S);
                    return (0, r.jsx)(a.N, { ref: n, component: E, href: t ? I : void 0, target: p, rel: A, ...c });
                },
                S = (0, i.forwardRef)((e, n) => (0, r.jsx)(d, { ...e, forwardedRef: n }));
        },
        96527: (e, n, t) => {
            t.d(n, { N: () => T });
            var r = t(53548),
                i = t(78793),
                o = t(92716),
                l = t(54577),
                c = t(90780),
                a = t(79070),
                s = t(65523),
                _ = t(42139),
                u = t(37436),
                d = t(12816),
                S = t(34500),
                I = t(57649),
                p = t(60840),
                A = t(46166),
                E = t(14518),
                L = t(73442),
                v = t(91248);
            let T = () => {
                let e = (0, c.st)(),
                    n = (0, s.U)(),
                    { hash: t } = (0, c.gf)(),
                    { pageId: T, displayReasonId: f, pagePlacement: N, pageStyle: C } = (0, E.$)(),
                    { tabId: O, tabPos: b, isTabSelectedByDefault: g } = (0, v.R)(),
                    { offsetBlockPosY: R } = (0, I.u)(),
                    { blockId: m, blockType: P, blockPosX: y, blockPosY: D, mainObjectId: k, mainObjectType: M, displayReasonId: B } = (0, S.N)(),
                    { filterKey: h, filterValue: Q, filterPos: x } = (0, p.G)(),
                    { objectId: w, objectPosX: U, objectPosY: j, objectType: G, objectsCount: K } = (0, A.J)(),
                    { skeleton: V } = (0, L.b)(),
                    F = null != B ? B : f,
                    Y = (0, a.L)(() => (void 0 !== R && void 0 !== D ? R + D : D));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: c, objectId: a, objectType: s, deepLink: S, objectPosY: I } = r;
                        if (!e || !T || !d.xK.includes(T) || !d.fD.includes(T)) return;
                        let p = _.F[T];
                        if (!p) return;
                        let A = {
                            hash: t,
                            pageId: p,
                            pagePlacement: null != N ? N : o.PagePlacements.Fullscreen,
                            pageStyle: null != C ? C : o.PageStyles.Fullscreen,
                            entityType: P,
                            entityId: m,
                            entityPosX: y,
                            entityPosY: Y,
                            objectId: null != a ? a : w,
                            objectType: null != s ? s : G,
                            objectPosX: U,
                            objectPosY: null != I ? I : j,
                            objectsCount: K,
                            from: u.W[T],
                            to: c,
                        };
                        (void 0 !== h && ((A.filterKey = h), (A.filterValue = Q), (A.filterPos = x)),
                            d.qG.includes(T) && ((A.tabId = O), (A.tabPos = b), (A.isTabSelectedByDefault = g)),
                            V && (A.skeletonId = V),
                            S && (A.deepLink = S),
                            k && M && ((A.mainObjectType = M), (A.mainObjectId = k)),
                            F && (A.displayReasonId = F));
                        let E = (0, i.F)({ params: A, logger: n, context: 'useSendEventOnBlockNavigated' });
                        E && (0, l.QS)(e.evgenInstance, E);
                    },
                    [w, G, e, T, t, N, C, P, m, y, Y, h, Q, x, U, j, K, V, k, M, F, n, O, b, g],
                );
            };
        },
        97261: (e, n, t) => {
            t.d(n, { I: () => r });
            var r = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
    },
]);
