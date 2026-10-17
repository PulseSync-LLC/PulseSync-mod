'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7856],
    {
        10764: (e, t, n) => {
            n.d(t, { b: () => c });
            var r = n(74631),
                i = n(97904);
            function c() {
                return (0, r.useContext)(i.D);
            }
        },
        14482: (e, t, n) => {
            n.d(t, { p: () => r });
            let r = (0, n(74631).createContext)({
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
        20258: (e, t, n) => {
            n.d(t, { _Q: () => r, fD: () => c, qG: () => l, xK: () => i });
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
                c = [
                    'home',
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
        25195: (e, t, n) => {
            n.d(t, { u: () => c });
            var r = n(74631),
                i = n(57487);
            function c() {
                return (0, r.useContext)(i.E);
            }
        },
        25488: (e, t, n) => {
            n.d(t, { J: () => c });
            var r = n(74631),
                i = n(66192);
            function c() {
                return (0, r.useContext)(i.l);
            }
        },
        26742: (e, t, n) => {
            n.d(t, { N: () => c });
            var r = n(74631),
                i = n(14482);
            function c() {
                return (0, r.useContext)(i.p);
            }
        },
        29481: (e, t, n) => {
            n.d(t, { N: () => N });
            var r = n(74631),
                i = n(67379),
                c = n(44031),
                l = n(20934),
                a = n(59450),
                o = n(49656),
                s = n(84e3),
                _ = n(58069),
                S = n(79670),
                u = n(20258),
                I = n(26742),
                d = n(25195),
                A = n(37314),
                E = n(25488),
                L = n(97952),
                T = n(10764),
                p = n(72594);
            let N = () => {
                let e = (0, a.st)(),
                    t = (0, s.U)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: N, displayReasonId: C, pagePlacement: O, pageStyle: R } = (0, L.$)(),
                    { tabId: v, tabPos: g, isTabSelectedByDefault: m } = (0, p.R)(),
                    { offsetBlockPosY: b } = (0, d.u)(),
                    { blockId: P, blockType: y, blockPosX: f, blockPosY: D, mainObjectId: M, mainObjectType: Q, displayReasonId: B } = (0, I.N)(),
                    { filterKey: k, filterValue: U, filterPos: h } = (0, A.G)(),
                    { objectId: w, objectPosX: x, objectPosY: K, objectType: G, objectsCount: j } = (0, E.J)(),
                    { skeleton: V } = (0, T.b)(),
                    Y = null != B ? B : C,
                    F = (0, o.L)(() => (void 0 !== b && void 0 !== D ? b + D : D));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: a, objectId: o, objectType: s, deepLink: I, objectPosY: d } = r;
                        if (!e || !N || !u.xK.includes(N) || !u.fD.includes(N)) return;
                        let A = _.F[N];
                        if (!A) return;
                        let E = {
                            hash: n,
                            pageId: A,
                            pagePlacement: null != O ? O : c.PagePlacements.Fullscreen,
                            pageStyle: null != R ? R : c.PageStyles.Fullscreen,
                            entityType: y,
                            entityId: P,
                            entityPosX: f,
                            entityPosY: F,
                            objectId: null != o ? o : w,
                            objectType: null != s ? s : G,
                            objectPosX: x,
                            objectPosY: null != d ? d : K,
                            objectsCount: j,
                            from: S.W[N],
                            to: a,
                        };
                        (void 0 !== k && ((E.filterKey = k), (E.filterValue = U), (E.filterPos = h)),
                            u.qG.includes(N) && ((E.tabId = v), (E.tabPos = g), (E.isTabSelectedByDefault = m)),
                            V && (E.skeletonId = V),
                            I && (E.deepLink = I),
                            M && Q && ((E.mainObjectType = Q), (E.mainObjectId = M)),
                            Y && (E.displayReasonId = Y));
                        let L = (0, i.F)({ params: E, logger: t, context: 'useSendEventOnBlockNavigated' });
                        L && (0, l.QS)(e.evgenInstance, L);
                    },
                    [w, G, e, N, n, O, R, y, P, f, F, k, U, h, x, K, j, V, M, Q, Y, t, v, g, m],
                );
            };
        },
        30290: (e, t, n) => {
            n.d(t, { f: () => u });
            var r = n(74631);
            n(93588);
            var i = n(26742),
                c = n(97952),
                l = n(84059),
                a = n(40110),
                o = n(22939),
                s = n(20258),
                _ = n(98074);
            let S = [a.U.TRAILER],
                u = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                n = null == e ? void 0 : e.blockId,
                                l = null == e ? void 0 : e.pageEntityId,
                                { pageId: a, pageEntityId: o } = (0, c.$)(),
                                { blockId: s } = (0, i.N)();
                            return (0, r.useMemo)(() => ({ pageId: null != t ? t : a, blockId: null != n ? n : s, pageEntityId: null != l ? l : o }), [n, s, t, l, a, o]);
                        })(e),
                        n = ((e) => {
                            let { pageId: t, blockId: n } = e;
                            return (0, r.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), n && e.push(n.toLowerCase()), e.push('default'), e.join('-'));
                            }, [n, t]);
                        })(t),
                        a = ((e) => {
                            let { pageId: t, blockId: n, pageEntityId: i, contextType: c, contextId: a, utmForPageIds: u } = e,
                                I = (0, l.useSearchParams)();
                            return (0, r.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: n, pageEntityId: r, utmForPageIds: i, contextId: c, contextType: l, blockId: a } = e,
                                            u = t && Object.fromEntries(t),
                                            I = ((e) => {
                                                switch (e) {
                                                    case s._Q.ALBUM:
                                                    case s._Q.PROMOLANDING_ALBUM:
                                                    case s._Q.AUDIOBOOK:
                                                    case s._Q.PODCAST:
                                                        return o.K.Album;
                                                    case s._Q.ARTIST:
                                                    case s._Q.ARTIST_TRACKS:
                                                    case s._Q.ARTIST_ALBUMS:
                                                    case s._Q.ARTIST_DISCOGRAPHY:
                                                        return o.K.Artist;
                                                    case s._Q.PLAYLIST:
                                                        return o.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(n);
                                        return !I || !u || !r || S.includes(a)
                                            ? null
                                            : (Array.isArray(i) ? i.map((e) => String(e)).includes(String(r)) : !!c && I === l && String(c) === String(r)) && u
                                              ? (0, _.Z)(u)
                                              : null;
                                    })({ searchParams: I, pageId: t, pageEntityId: i, utmForPageIds: u, contextId: a, contextType: c, blockId: n }),
                                [I, t, i, a, c, n, u],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, r.useMemo)(() => ({ from: n, utmLink: a || void 0 }), [n, a]);
                };
        },
        30296: (e, t, n) => {
            n.d(t, { G: () => i, e: () => c });
            var r = n(74631);
            let i = (0, r.createContext)(null);
            function c() {
                return (0, r.useContext)(i);
            }
        },
        37314: (e, t, n) => {
            n.d(t, { G: () => c });
            var r = n(74631),
                i = n(39752);
            function c() {
                return (0, r.useContext)(i.S);
            }
        },
        39752: (e, t, n) => {
            n.d(t, { S: () => r });
            let r = (0, n(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        40110: (e, t, n) => {
            n.d(t, { U: () => r });
            var r = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        47009: (e, t, n) => {
            n.d(t, { b: () => T });
            var r = n(74631),
                i = n(67379),
                c = n(20934),
                l = n(59450),
                a = n(49656),
                o = n(84e3),
                s = n(58069),
                _ = n(20258),
                S = n(26742),
                u = n(25195),
                I = n(25488),
                d = n(97952),
                A = n(10764),
                E = n(72594);
            let L = [
                    _._Q.HOME,
                    _._Q.LANDING,
                    _._Q.NON_MUSIC,
                    _._Q.OWN_COLLECTION,
                    _._Q.SEARCH,
                    _._Q.CONCERTS,
                    _._Q.ALBUM,
                    _._Q.PLAYLIST,
                    _._Q.SLIDES_SCREEN,
                    _._Q.PROMOLANDING_ALBUM,
                    _._Q.WAVE_LANDING_SCREEN,
                    _._Q.COLLECTION_VIBE_ROOMS,
                    _._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    _._Q.MULTIVIBE_ACTION_SCREEN,
                    _._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                T = () => {
                    let e = (0, l.st)(),
                        t = (0, o.U)(),
                        { hash: n } = (0, l.gf)(),
                        { pageId: T } = (0, d.$)(),
                        { tabId: p, tabPos: N, isTabSelectedByDefault: C } = (0, E.R)(),
                        { offsetBlockPosY: O } = (0, u.u)(),
                        { blockId: R, blockType: v, blockPosX: g, blockPosY: m, mainObjectId: b, mainObjectType: P } = (0, S.N)(),
                        { objectId: y, objectPosX: f, objectPosY: D, objectType: M, objectsCount: Q } = (0, I.J)(),
                        { skeleton: B } = (0, A.b)(),
                        k = (0, a.L)(() => (void 0 !== O && void 0 !== m ? O + m : m));
                    return (0, r.useCallback)(
                        (r, l) => {
                            if (!e || !T || !_.xK.includes(T) || !r || !L.includes(T)) return;
                            let a = s.F[T];
                            if (!a) return;
                            let o = {
                                hash: n,
                                pageId: a,
                                entityType: v,
                                entityId: R,
                                entityPosX: g,
                                entityPosY: k,
                                objectId: null != l ? l : y,
                                objectType: M,
                                objectPosX: f,
                                objectPosY: D,
                                objectsCount: Q,
                            };
                            (_.qG.includes(T) && ((o.tabId = p), (o.tabPos = N), (o.isTabSelectedByDefault = C)),
                                B && (o.skeletonId = B),
                                b && P && ((o.mainObjectType = P), (o.mainObjectId = b)));
                            let S = (0, i.F)({ params: o, logger: t, context: 'useSendEventOnBlockStarted' });
                            S && (0, c.er)(e.evgenInstance, S);
                        },
                        [e, T, n, v, R, g, k, y, M, f, D, Q, B, b, P, t, p, N, C],
                    );
                };
        },
        49656: (e, t, n) => {
            n.d(t, { L: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var i = r.useReturnValue;
        },
        53424: (e, t, n) => {
            n.d(t, { F: () => r });
            let r = (0, n(74631).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        57487: (e, t, n) => {
            n.d(t, { E: () => r });
            let r = (0, n(74631).createContext)({ offsetBlockPosY: void 0 });
        },
        58069: (e, t, n) => {
            n.d(t, { F: () => c });
            var r = n(44031),
                i = n(20258);
            let c = {
                [i._Q.HOME]: r.LandingBlockPageID.MainScreen,
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
        59450: (e, t, n) => {
            n.d(t, { vZ: () => E, st: () => c, gf: () => a });
            var r = n(74631);
            let i = (0, r.createContext)(null);
            function c() {
                return (0, r.useContext)(i);
            }
            let l = (0, r.createContext)({ hash: void 0 });
            function a() {
                return (0, r.useContext)(l);
            }
            var o = n(25839),
                s = n(59342);
            let _ = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, s.A)() }), []);
                return (0, o.jsx)(l.Provider, { value: n, children: t });
            };
            class S {
                makeParams() {
                    return {};
                }
            }
            class u {
                makeParams() {
                    return {};
                }
            }
            var I = n(58025);
            class d {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, I._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, i) => {
                                let c = { ...i, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, c);
                            },
                        }));
                }
            }
            let A = null,
                E = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: c, logger: l, metrika: a } = e,
                        s = (0, r.useMemo)(() => {
                            if (A) return A;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && t(i.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (n && t.log(e, i), r.add({ [e]: i }));
                                    },
                                };
                            })((e) => a.count(e, c), l, t);
                            return (A = new d(
                                e,
                                (function () {
                                    let e = new S();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new u();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [l, a]);
                    return (0, o.jsx)(i.Provider, { value: s, children: (0, o.jsx)(_, { children: n }) });
                };
        },
        64261: (e, t, n) => {
            n.d(t, { j: () => r });
            let r = (0, n(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        66192: (e, t, n) => {
            n.d(t, { l: () => r });
            let r = (0, n(74631).createContext)({
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
        67379: (e, t, n) => {
            n.d(t, { F: () => r });
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return i.length > 0 ? (n.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: t, context: r }), null) : t;
            }
        },
        71872: (e, t, n) => {
            n.d(t, { Lz: () => r, ov: () => i });
            let r = ''.concat('yandexmusic', ':'),
                i = ''.concat(r, '//');
        },
        72594: (e, t, n) => {
            n.d(t, { R: () => c });
            var r = n(74631),
                i = n(53424);
            function c() {
                return (0, r.useContext)(i.F);
            }
        },
        79670: (e, t, n) => {
            n.d(t, { W: () => c });
            var r = n(44031),
                i = n(20258);
            let c = {
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
        82064: (e, t, n) => {
            n.d(t, { r: () => r });
            let r = (0, n(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        85686: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(84059);
            n(93588);
            var i = n(71035),
                c = n(25895),
                l = n(89288),
                a = n(71872),
                o = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let s = [l.cy.HTTP, l.cy.HTTPS, l.cy.MAILTO, l.cy.TEL, a.Lz],
                _ = (e) => {
                    let t = (0, r.useRouter)(),
                        { href: n, target: _ } = (0, c.u)(e);
                    return (0, i.c)((e) => {
                        let r = ((e, t, n) => {
                            let r;
                            try {
                                r = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let i = (0, l.Rj)(e, { allowedProtocols: new Set([...s, r.protocol]), baseUrl: r.href });
                            return i.isAllowed
                                ? i.url.protocol === a.Lz
                                    ? { type: o.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(i.url, r)
                                      ? { type: o.INTERNAL, href: e }
                                      : { type: o.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, _);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === o.EXTERNAL || r.type === o.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, c.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(r.href)
                                : t.push(r.href));
                    });
                };
        },
        91886: (e, t, n) => {
            n.d(t, { BL: () => _, Gv: () => o, L5: () => s });
            var r,
                i = n(74631),
                c = {
                    597: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let r = n(810),
                            { innerWidth: i = 0, innerHeight: c = 0 } = window;
                        function l(e) {
                            let { top: t, right: n, bottom: r, left: l } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= c) || (r >= 0 && r <= c)) && ((l >= 0 && l <= i) || (n >= 0 && n <= i));
                        }
                        function a(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function o(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = l),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, n, i) {
                                let [{ freezeOnceVisible: c, preflightCheck: s, ..._ }, S = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, i],
                                    [u, I] = (0, r.useState)({}),
                                    d = (0, r.useRef)(new Set()),
                                    A = (0, r.useMemo)(
                                        () =>
                                            S
                                                ? null
                                                : o((e) => {
                                                      let t = a(e.target);
                                                      if (t && A) {
                                                          if (d.current.has(t)) return;
                                                          (I((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              c && e.isIntersecting && (d.current.add(t), A.unobserve(e.target)));
                                                      }
                                                  }, _),
                                        [S],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            A &&
                                                !S &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (s && (t = l(e.current))) {
                                                            let t = a(e.current);
                                                            I((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || A.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                A && A.disconnect();
                                            }
                                        ),
                                        [S, A, e.length],
                                    ),
                                    u
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                l = {},
                a = (function e(t) {
                    var n = l[t];
                    if (void 0 !== n) return n.exports;
                    var r = (l[t] = { exports: {} });
                    return (c[t](r, r.exports, e), r.exports);
                })(597);
            a.__esModule;
            var o = a.createIntersectionObserver;
            a.defaultOptions;
            var s = a.getElementNameByDataAttribute;
            a.isInViewportNow;
            var _ = a.useIntersectionObserver;
        },
        97522: (e, t, n) => {
            n.d(t, { N: () => I });
            var r = n(25839),
                i = n(58038),
                c = n.n(i),
                l = n(74631),
                a = n(71035),
                o = n(9079),
                s = n(64261),
                _ = n(25895);
            let S = (e) => {
                    let [t, n] = (0, l.useState)(!1),
                        i = (0, a.c)(() => {
                            n(!0);
                        });
                    return (0, r.jsx)(c(), { prefetch: t, ...e, onMouseEnter: i });
                },
                u = (e) => {
                    let { forwardedRef: t, href: n, component: i, ...a } = e,
                        { isPrefetchDisabled: u, isPrefetchOnHover: I } = (0, l.useContext)(s.j),
                        { href: d, target: A, rel: E } = (0, _.u)(null != n ? n : ''),
                        L = (0, l.isValidElement)(i)
                            ? i
                            : (function (e, t, n) {
                                  return e ? (t ? (0, r.jsx)(c(), { prefetch: !1 }) : n ? (0, r.jsx)(S, { href: e }) : (0, r.jsx)(c(), {})) : (0, r.jsx)('a', {});
                              })(n, u, I);
                    return (0, r.jsx)(o.N, { ref: t, component: L, href: n ? d : void 0, target: A, rel: E, ...a });
                },
                I = (0, l.forwardRef)((e, t) => (0, r.jsx)(u, { ...e, forwardedRef: t }));
        },
        97904: (e, t, n) => {
            n.d(t, { D: () => r });
            let r = (0, n(74631).createContext)({ skeleton: void 0 });
        },
        97952: (e, t, n) => {
            n.d(t, { $: () => c });
            var r = n(74631),
                i = n(82064);
            function c() {
                return (0, r.useContext)(i.r);
            }
        },
        98074: (e, t, n) => {
            n.d(t, { Z: () => i });
            let r = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                i = (e) =>
                    r.reduce((t, n) => {
                        let { queryKey: r, resultKey: i } = n;
                        return ('string' == typeof e[r] && (t[i] = e[r]), t);
                    }, {});
        },
    },
]);
