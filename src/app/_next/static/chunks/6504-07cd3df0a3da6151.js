'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6504],
    {
        9079: (e, n, t) => {
            t.d(n, { N: () => s });
            var r,
                i = t(74631),
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
                            c = t(5881),
                            l = r(t(7354)),
                            a = (e) => {
                                let {
                                        component: n = (0, i.jsx)('a', {}),
                                        block: t,
                                        target: r,
                                        rel: a,
                                        href: s,
                                        forwardRef: _,
                                        iconPosition: u = 'left',
                                        flexIcon: S,
                                        icon: d,
                                        className: I,
                                        children: p,
                                        textClassName: A = '',
                                        containerClassName: E,
                                        ...L
                                    } = e,
                                    T = (0, o.useId)(),
                                    v = !o.Children.count(p),
                                    N = 'left' === u,
                                    f = null;
                                if (void 0 !== d) {
                                    var C;
                                    f = (0, o.cloneElement)(d, {
                                        className: (0, c.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !v && u },
                                            null == (C = d.props) ? void 0 : C.className,
                                        ),
                                        key: T,
                                    });
                                }
                                let O = (0, o.useMemo)(
                                    () =>
                                        d
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, c.clsx)(l.default.iconContainer, E),
                                                  children: [N && f, !v && (0, i.jsx)('span', { className: A, children: p }), !N && f],
                                              })
                                            : p,
                                    [p, E, d, N, v, f, A],
                                );
                                return (0, o.cloneElement)(
                                    n,
                                    {
                                        ref: _,
                                        target: r,
                                        rel: '_blank' === r && void 0 === a ? 'noopener noreferrer' : a,
                                        href: s,
                                        className: (0, c.clsx)(l.default.root, { [l.default.block]: t, [l.default.flexIcon]: d && S, [l.default.iconOnly]: d && v }, I),
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
                c = {};
            function l(e) {
                var n = c[e];
                if (void 0 !== n) return n.exports;
                var t = (c[e] = { exports: {} });
                return (o[e].call(t.exports, t, t.exports, l), t.exports);
            }
            ((l.d = (e, n) => {
                for (var t in n) l.o(n, t) && !l.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
            }),
                (l.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.r = void 0));
                var e = l(3616);
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
        10764: (e, n, t) => {
            t.d(n, { b: () => o });
            var r = t(74631),
                i = t(97904);
            function o() {
                return (0, r.useContext)(i.D);
            }
        },
        14482: (e, n, t) => {
            t.d(n, { p: () => r });
            let r = (0, t(74631).createContext)({
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
        20258: (e, n, t) => {
            t.d(n, { _Q: () => r, fD: () => o, qG: () => c, xK: () => i });
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
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                o = [
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
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                c = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        25195: (e, n, t) => {
            t.d(n, { u: () => o });
            var r = t(74631),
                i = t(57487);
            function o() {
                return (0, r.useContext)(i.E);
            }
        },
        25488: (e, n, t) => {
            t.d(n, { J: () => o });
            var r = t(74631),
                i = t(66192);
            function o() {
                return (0, r.useContext)(i.l);
            }
        },
        26742: (e, n, t) => {
            t.d(n, { N: () => o });
            var r = t(74631),
                i = t(14482);
            function o() {
                return (0, r.useContext)(i.p);
            }
        },
        29481: (e, n, t) => {
            t.d(n, { N: () => v });
            var r = t(74631),
                i = t(67379),
                o = t(36619),
                c = t(17850),
                l = t(59450),
                a = t(49656),
                s = t(84e3),
                _ = t(58069),
                u = t(79670),
                S = t(20258),
                d = t(26742),
                I = t(25195),
                p = t(37314),
                A = t(25488),
                E = t(97952),
                L = t(10764),
                T = t(72594);
            let v = () => {
                let e = (0, l.st)(),
                    n = (0, s.U)(),
                    { hash: t } = (0, l.gf)(),
                    { pageId: v, displayReasonId: N, pagePlacement: f, pageStyle: C } = (0, E.$)(),
                    { tabId: O, tabPos: g, isTabSelectedByDefault: R } = (0, T.R)(),
                    { offsetBlockPosY: b } = (0, I.u)(),
                    { blockId: m, blockType: P, blockPosX: y, blockPosY: D, mainObjectId: k, mainObjectType: M, displayReasonId: h } = (0, d.N)(),
                    { filterKey: Q, filterValue: B, filterPos: x } = (0, p.G)(),
                    { objectId: w, objectPosX: j, objectPosY: U, objectType: G, objectsCount: V } = (0, A.J)(),
                    { skeleton: K } = (0, L.b)(),
                    Y = null != h ? h : N,
                    W = (0, a.L)(() => (void 0 !== b && void 0 !== D ? b + D : D));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: l, objectId: a, objectType: s, deepLink: d, objectPosY: I } = r;
                        if (!e || !v || !S.xK.includes(v) || !S.fD.includes(v)) return;
                        let p = _.F[v];
                        if (!p) return;
                        let A = {
                            hash: t,
                            pageId: p,
                            pagePlacement: null != f ? f : o.PagePlacements.Fullscreen,
                            pageStyle: null != C ? C : o.PageStyles.Fullscreen,
                            entityType: P,
                            entityId: m,
                            entityPosX: y,
                            entityPosY: W,
                            objectId: null != a ? a : w,
                            objectType: null != s ? s : G,
                            objectPosX: j,
                            objectPosY: null != I ? I : U,
                            objectsCount: V,
                            from: u.W[v],
                            to: l,
                        };
                        (void 0 !== Q && ((A.filterKey = Q), (A.filterValue = B), (A.filterPos = x)),
                            S.qG.includes(v) && ((A.tabId = O), (A.tabPos = g), (A.isTabSelectedByDefault = R)),
                            K && (A.skeletonId = K),
                            d && (A.deepLink = d),
                            k && M && ((A.mainObjectType = M), (A.mainObjectId = k)),
                            Y && (A.displayReasonId = Y));
                        let E = (0, i.F)({ params: A, logger: n, context: 'useSendEventOnBlockNavigated' });
                        E && (0, c.QS)(e.evgenInstance, E);
                    },
                    [w, G, e, v, t, f, C, P, m, y, W, Q, B, x, j, U, V, K, k, M, Y, n, O, g, R],
                );
            };
        },
        37314: (e, n, t) => {
            t.d(n, { G: () => o });
            var r = t(74631),
                i = t(39752);
            function o() {
                return (0, r.useContext)(i.S);
            }
        },
        39752: (e, n, t) => {
            t.d(n, { S: () => r });
            let r = (0, t(74631).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        49656: (e, n, t) => {
            t.d(n, { L: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var i = r.useReturnValue;
        },
        53424: (e, n, t) => {
            t.d(n, { F: () => r });
            let r = (0, t(74631).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        57487: (e, n, t) => {
            t.d(n, { E: () => r });
            let r = (0, t(74631).createContext)({ offsetBlockPosY: void 0 });
        },
        58069: (e, n, t) => {
            t.d(n, { F: () => o });
            var r = t(36619),
                i = t(20258);
            let o = {
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
                [i._Q.COLLECTION_VIBE_ROOMS]: r.LandingBlockPageID.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.LandingBlockPageID.MultivibeActionScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.LandingBlockPageID.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_UNIFIED_SCREEN]: r.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        59450: (e, n, t) => {
            t.d(n, { vZ: () => A, st: () => o, gf: () => l });
            var r = t(74631);
            let i = (0, r.createContext)(null);
            function o() {
                return (0, r.useContext)(i);
            }
            let c = (0, r.createContext)({ hash: void 0 });
            function l() {
                return (0, r.useContext)(c);
            }
            var a = t(25839),
                s = t(59342);
            let _ = (e) => {
                let { children: n } = e,
                    t = (0, r.useMemo)(() => ({ hash: (0, s.A)() }), []);
                return (0, a.jsx)(c.Provider, { value: t, children: n });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class S {
                makeParams() {
                    return {};
                }
            }
            var d = t(58025);
            class I {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, n) {
                    this.evgen.trackEvent(e, n);
                }
                constructor(e, n, t) {
                    ((0, d._)(this, 'evgen', void 0),
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
                    let { allowAnalyticsLogs: n, children: t, evgenUserParam: o, logger: c, metrika: l } = e,
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
                            })((e) => l.count(e, o), c, n);
                            return (p = new I(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new S();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [c, l]);
                    return (0, a.jsx)(i.Provider, { value: s, children: (0, a.jsx)(_, { children: t }) });
                };
        },
        64261: (e, n, t) => {
            t.d(n, { j: () => r });
            let r = (0, t(74631).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        66192: (e, n, t) => {
            t.d(n, { l: () => r });
            let r = (0, t(74631).createContext)({
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
        67379: (e, n, t) => {
            t.d(n, { F: () => r });
            function r(e) {
                let { params: n, logger: t, context: r } = e,
                    i = Object.getOwnPropertyNames(n).filter((e) => void 0 === n[e]);
                return i.length > 0 ? (t.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: n, context: r }), null) : n;
            }
        },
        71872: (e, n, t) => {
            t.d(n, { Lz: () => r, ov: () => i });
            let r = ''.concat('yandexmusic', ':'),
                i = ''.concat(r, '//');
        },
        72594: (e, n, t) => {
            t.d(n, { R: () => o });
            var r = t(74631),
                i = t(53424);
            function o() {
                return (0, r.useContext)(i.F);
            }
        },
        79670: (e, n, t) => {
            t.d(n, { W: () => o });
            var r = t(36619),
                i = t(20258);
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
                [i._Q.LUMEN_AWAKENING_SCREEN]: r.AppScreen.LumenAwakeningScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.AppScreen.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.AppScreen.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.AppScreen.MultivibeActionScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.AppScreen.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_UNIFIED_SCREEN]: r.AppScreen.MultivibeUnifiedScreen,
            };
        },
        82064: (e, n, t) => {
            t.d(n, { r: () => r });
            let r = (0, t(74631).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        85686: (e, n, t) => {
            t.d(n, { Z: () => _ });
            var r = t(84059);
            t(93588);
            var i = t(71035),
                o = t(25895),
                c = t(89288),
                l = t(71872),
                a = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let s = [c.cy.HTTP, c.cy.HTTPS, c.cy.MAILTO, c.cy.TEL, l.Lz],
                _ = (e) => {
                    let n = (0, r.useRouter)(),
                        { href: t, target: _ } = (0, o.u)(e);
                    return (0, i.c)((e) => {
                        let r = ((e, n, t) => {
                            let r;
                            try {
                                r = new URL(n);
                            } catch (e) {
                                return null;
                            }
                            let i = (0, c.Rj)(e, { allowedProtocols: new Set([...s, r.protocol]), baseUrl: r.href });
                            return i.isAllowed
                                ? i.url.protocol === l.Lz
                                    ? { type: a.DEEPLINK, href: e }
                                    : '_blank' !== t && ((e, n) => e.protocol === n.protocol && e.hostname === n.hostname && e.port === n.port)(i.url, r)
                                      ? { type: a.INTERNAL, href: e }
                                      : { type: a.EXTERNAL, href: e }
                                : null;
                        })(t, window.location.href, _);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === a.EXTERNAL || r.type === a.DEEPLINK
                                ? ((e) => {
                                      let { target: n, rel: t } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, n, t);
                                  })(r.href)
                                : n.push(r.href));
                    });
                };
        },
        91886: (e, n, t) => {
            t.d(n, { BL: () => _, Gv: () => a, L5: () => s });
            var r,
                i = t(74631),
                o = {
                    597: (e, n, t) => {
                        (Object.defineProperty(n, '__esModule', { value: !0 }),
                            (n.useIntersectionObserver = n.createIntersectionObserver = n.getElementNameByDataAttribute = n.isInViewportNow = n.defaultOptions = void 0));
                        let r = t(810),
                            { innerWidth: i = 0, innerHeight: o = 0 } = window;
                        function c(e) {
                            let { top: n, right: t, bottom: r, left: c } = e.getBoundingClientRect();
                            return ((n >= 0 && n <= o) || (r >= 0 && r <= o)) && ((c >= 0 && c <= i) || (t >= 0 && t <= i));
                        }
                        function l(e) {
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
                            (n.isInViewportNow = c),
                            (n.getElementNameByDataAttribute = l),
                            (n.createIntersectionObserver = a),
                            (n.useIntersectionObserver = function (e, t, i) {
                                let [{ freezeOnceVisible: o, preflightCheck: s, ..._ }, u = !1] =
                                        'boolean' == typeof t || void 0 === t ? [n.defaultOptions, t] : [{ ...n.defaultOptions, ...t }, i],
                                    [S, d] = (0, r.useState)({}),
                                    I = (0, r.useRef)(new Set()),
                                    p = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : a((e) => {
                                                      let n = l(e.target);
                                                      if (n && p) {
                                                          if (I.current.has(n)) return;
                                                          (d((t) => ({ ...t, [n]: { isIntersecting: e.isIntersecting } })),
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
                                                        if (s && (n = c(e.current))) {
                                                            let n = l(e.current);
                                                            d((e) => ({ ...e, [n]: { isIntersecting: !0 } }));
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
                                    S
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = t.t(i, 2));
                    },
                },
                c = {},
                l = (function e(n) {
                    var t = c[n];
                    if (void 0 !== t) return t.exports;
                    var r = (c[n] = { exports: {} });
                    return (o[n](r, r.exports, e), r.exports);
                })(597);
            l.__esModule;
            var a = l.createIntersectionObserver;
            l.defaultOptions;
            var s = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var _ = l.useIntersectionObserver;
        },
        97522: (e, n, t) => {
            t.d(n, { N: () => d });
            var r = t(25839),
                i = t(58038),
                o = t.n(i),
                c = t(74631),
                l = t(71035),
                a = t(9079),
                s = t(64261),
                _ = t(25895);
            let u = (e) => {
                    let [n, t] = (0, c.useState)(!1),
                        i = (0, l.c)(() => {
                            t(!0);
                        });
                    return (0, r.jsx)(o(), { prefetch: n, ...e, onMouseEnter: i });
                },
                S = (e) => {
                    let { forwardedRef: n, href: t, component: i, ...l } = e,
                        { isPrefetchDisabled: S, isPrefetchOnHover: d } = (0, c.useContext)(s.j),
                        { href: I, target: p, rel: A } = (0, _.u)(null != t ? t : ''),
                        E = (0, c.isValidElement)(i)
                            ? i
                            : (function (e, n, t) {
                                  return e ? (n ? (0, r.jsx)(o(), { prefetch: !1 }) : t ? (0, r.jsx)(u, { href: e }) : (0, r.jsx)(o(), {})) : (0, r.jsx)('a', {});
                              })(t, S, d);
                    return (0, r.jsx)(a.N, { ref: n, component: E, href: t ? I : void 0, target: p, rel: A, ...l });
                },
                d = (0, c.forwardRef)((e, n) => (0, r.jsx)(S, { ...e, forwardedRef: n }));
        },
        97904: (e, n, t) => {
            t.d(n, { D: () => r });
            let r = (0, t(74631).createContext)({ skeleton: void 0 });
        },
        97952: (e, n, t) => {
            t.d(n, { $: () => o });
            var r = t(74631),
                i = t(82064);
            function o() {
                return (0, r.useContext)(i.r);
            }
        },
    },
]);
