(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9334],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => c });
            var r = n(67174);
            let c = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        12816: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => r, fD: () => a, qG: () => l, xK: () => c });
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
            let c = [
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
                a = [
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
        14518: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(53548),
                c = n(90334);
            function a() {
                return (0, r.useContext)(c.r);
            }
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => i });
            var r = n(35412),
                c = n(28166),
                a = n(97261);
            let l = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, c.Lz],
                i = (e, t, n) => {
                    let i;
                    try {
                        i = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let s = (0, r.Rj)(e, { allowedProtocols: new Set([...l, i.protocol]), baseUrl: i.href });
                    return s.isAllowed
                        ? s.url.protocol === c.Lz
                            ? { type: a.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(s.url, i)
                              ? { type: a.I.INTERNAL, href: e }
                              : { type: a.I.EXTERNAL, href: e }
                        : null;
                };
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        27054: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => p });
            var r = n(53548),
                c = n(78793),
                a = n(92716),
                l = n(99984),
                i = n(90780),
                s = n(29993),
                o = n(65523),
                u = n(37436),
                _ = n(14518);
            let p = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, i.st)(),
                    p = (0, o.U)(),
                    { hash: d } = (0, i.gf)(),
                    { pageId: S } = (0, _.$)(),
                    A = (0, s.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !S ||
                            !d ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = u.W[S];
                        if (!t) return;
                        let r = {
                                hash: d,
                                pageId: a.AppScreen.Link,
                                entityType: a.EntityTypes.Deeplink,
                                entityId: a.EntityTypes.Deeplink,
                                from: a.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            i = (0, c.F)({ params: r, logger: p, context: 'useSendDeeplinkNavigationEvent' });
                        i && (0, l.ID)(n.evgenInstance, i);
                    });
                return (
                    (0, r.useEffect)(() => {
                        t && A();
                    }, [t, A]),
                    (0, s.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || A({ deepLink: e });
                    })
                );
            };
        },
        28102: (e, t, n) => {
            'use strict';
            n.d(t, { PlaylistNotFoundPage: () => p });
            var r = n(88800),
                c = n(84961),
                a = n(53548),
                l = n(78805),
                i = n(12816),
                s = n(27054),
                o = n(59844),
                u = n(72288);
            let _ = (0, c.PA)(() => {
                    let { playlist: e } = (0, u.g)();
                    return (
                        (0, s.A)(),
                        (0, a.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, r.jsx)(l.NotFound, {})
                    );
                }),
                p = (0, c.PA)(() => (0, r.jsx)(o.n, { pageId: i._Q.PAGE_NOT_FOUND_SCREEN, children: (0, r.jsx)(_, {}) }));
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => c });
            let r = ''.concat('yandexmusic', ':'),
                c = ''.concat(r, '//');
        },
        37436: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var r = n(92716),
                c = n(12816);
            let a = {
                [c._Q.ALBUM]: r.AppScreen.AlbumScreen,
                [c._Q.PLAYLIST]: r.AppScreen.PlaylistScreen,
                [c._Q.HOME]: r.AppScreen.MainScreen,
                [c._Q.ARTIST]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_TRACKS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_SIMILAR]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_ALBUMS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_DISCOGRAPHY]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_COMPILATIONS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_CONCERTS]: r.AppScreen.ArtistScreen,
                [c._Q.SEARCH]: r.AppScreen.SearchScreen,
                [c._Q.OWN_COLLECTION]: r.AppScreen.CollectionLandingScreen,
                [c._Q.LANDING]: r.AppScreen.DynamicScreen,
                [c._Q.HISTORY]: r.AppScreen.MusicHistoryScreen,
                [c._Q.NON_MUSIC]: r.AppScreen.NonmusicLandingScreen,
                [c._Q.CHART]: r.AppScreen.PlaylistListScreen,
                [c._Q.PODCAST]: r.AppScreen.AlbumScreen,
                [c._Q.AUDIOBOOK]: r.AppScreen.AlbumScreen,
                [c._Q.OWN_ALBUMS]: r.AppScreen.CollectionAlbumsScreen,
                [c._Q.OWN_DISLIKES]: r.AppScreen.CollectionTrackListScreen,
                [c._Q.OWN_ARTISTS]: r.AppScreen.CollectionArtistsScreen,
                [c._Q.OWN_PLAYLISTS]: r.AppScreen.CollectionPlaylistsScreen,
                [c._Q.FAMILIAR_YOU]: r.AppScreen.TrackListScreen,
                [c._Q.ENTITIES]: r.AppScreen.ObjectsGridScreen,
                [c._Q.TRAILER]: r.AppScreen.TrailerScreen,
                [c._Q.PLAYER]: r.AppScreen.ExpandedPlayerScreen,
                [c._Q.VIDEO_PLAYER]: r.AppScreen.VideoScreen,
                [c._Q.TRACK_SCREEN]: r.AppScreen.TrackScreen,
                [c._Q.PAYWALL]: r.AppScreen.PaywallScreen,
                [c._Q.CONCERTS]: r.AppScreen.ConcertsLandingScreen,
                [c._Q.CONCERT]: r.AppScreen.ConcertScreen,
                [c._Q.CONCERT_LOCATION_SELECTOR]: r.AppScreen.ConcertLocationSelector,
                [c._Q.PAGE_NOT_FOUND_SCREEN]: r.AppScreen.PageNotFoundScreen,
                [c._Q.SLIDES_SCREEN]: r.AppScreen.SlidesScreen,
                [c._Q.PROMOLANDING_ALBUM]: r.AppScreen.PromolandingAlbumScreen,
                [c._Q.WAVE_LANDING_SCREEN]: r.AppScreen.WaveLandingScreen,
                [c._Q.FACT_SCREEN]: r.AppScreen.FactScreen,
                [c._Q.LUMEN_FACT_SCREEN]: r.AppScreen.LumenFactScreen,
                [c._Q.LUMEN_AWAKENING_SCREEN]: r.AppScreen.LumenAwakeningScreen,
                [c._Q.COLLECTION_VIBE_ROOMS]: r.AppScreen.MultivibeScreen,
                [c._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.AppScreen.MultivibeSendingInvitationScreen,
                [c._Q.MULTIVIBE_ACTION_SCREEN]: r.AppScreen.MultivibeActionScreen,
                [c._Q.MULTIVIBE_LIMIT_SCREEN]: r.AppScreen.MultivibeLimitScreen,
                [c._Q.MULTIVIBE_UNIFIED_SCREEN]: r.AppScreen.MultivibeUnifiedScreen,
            };
        },
        38860: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => a });
            var r = n(53548),
                c = n(41168);
            let a = () => (0, r.useContext)(c.P);
        },
        41168: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(53548).createContext)(null);
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, g: () => a });
            var r = n(53548);
            let c = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                a = () => (0, r.useContext)(c);
        },
        46422: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => c, W: () => a });
            var r = n(53548);
            let c = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function a() {
                return (0, r.useContext)(c);
            }
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => l });
            var r = n(55482),
                c = n(53548),
                a = n(46422);
            let l = (e) => {
                let t = (0, a.W)(),
                    n = (0, c.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    l = (0, c.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: l };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => A });
            var r = n(88800),
                c = n(65724),
                a = n(84961),
                l = n(53548),
                i = n(2058),
                s = n(17392),
                o = n(29993),
                u = n(96817),
                _ = n(52300),
                p = n(46777),
                d = n(50320),
                S = n.n(d);
            let A = (0, a.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: a = !0,
                        className: d,
                        withBackwardFallback: A,
                        buttonSize: m = 'xxs',
                        onBackwardClick: N,
                    } = e,
                    { formatMessage: E } = (0, i.A)(),
                    { canBack: T, canForward: I, moveBack: v, moveForward: g } = (0, p.J)(A),
                    O = (0, l.useRef)(null),
                    L = (0, o.c)((e) => {
                        if ((e.stopPropagation(), N)) return void N();
                        v();
                    }),
                    R = (0, o.c)((e) => {
                        (e.stopPropagation(), g());
                    });
                return (
                    (0, l.useEffect)(() => {
                        a && O.current && T && O.current.focus();
                    }, [T]),
                    (0, r.jsxs)('div', {
                        className: (0, c.$)(S().root, d),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: O,
                                    'aria-label': E({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !T,
                                    size: m,
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: L,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': E({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !I,
                                    size: m,
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: R,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        59844: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => l });
            var r = n(88800),
                c = n(53548),
                a = n(90334);
            let l = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: l, pageStyle: i, pagePlacement: s, children: o } = e,
                    u = (0, c.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: l, pageStyle: i, pagePlacement: s }), [t, n, l, i, s]);
                return (0, r.jsx)(a.r.Provider, { value: u, children: o });
            };
        },
        78793: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    c = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return c.length > 0 ? (n.error('Evgen parameters are not met', { parameters: c.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        78805: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => C }));
            var r = n(88800),
                c = n(65724),
                a = n(84961),
                l = n(88969);
            n(30282);
            var i = n(17392),
                s = n(96817),
                o = n(52300),
                u = n(66719),
                _ = n(29504),
                p = n(53548),
                d = n(78793),
                S = n(92716),
                A = n(99984),
                m = n(90780),
                N = n(65523),
                E = n(54020),
                T = n(44230),
                I = n(4370),
                v = n(78940),
                g = n(95210),
                O = n(56248),
                L = n(72288),
                R = n(26827),
                f = n.n(R);
            let C = (0, a.PA)((e) => {
                let { className: t, title: n, description: a, iconVariant: R = 'musicLogo', iconClassName: C, iconSize: y } = e,
                    { contentRef: P, setContentScrollRef: b } = (0, T.g)(),
                    k = (0, v.Z)(I.Z.main.href);
                !(function () {
                    let e = (0, m.st)(),
                        { hash: t } = (0, m.gf)(),
                        n = (0, N.U)(),
                        r = (0, p.useRef)(void 0);
                    (0, p.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, E.A)();
                        let c = (0, d.F)({
                            params: {
                                hash: t,
                                pageId: S.AppScreen.PageNotFoundScreen,
                                pageStyle: S.PageStyles.Fullscreen,
                                pagePlacement: S.PagePlacements.Fullscreen,
                                mainObjectType: S.DomainObjectType.NonApplicable,
                                mainObjectId: S.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            c && (0, A.w5)(e.evgenInstance, c),
                            () => {
                                let c = (0, d.F)({
                                    params: {
                                        hash: t,
                                        pageId: S.AppScreen.PageNotFoundScreen,
                                        pageStyle: S.PageStyles.Fullscreen,
                                        pagePlacement: S.PagePlacements.Fullscreen,
                                        mainObjectType: S.DomainObjectType.NonApplicable,
                                        mainObjectId: S.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                c && (0, A.XB)(e.evgenInstance, c);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: h } = (function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        r = (0, N.U)();
                    return {
                        handleNavigateToMain: (0, p.useCallback)(() => {
                            if (!t || !n) return;
                            let c = (0, d.F)({
                                params: {
                                    hash: n,
                                    pageId: S.AppScreen.PageNotFoundScreen,
                                    pageStyle: S.PageStyles.Fullscreen,
                                    pagePlacement: S.PagePlacements.Fullscreen,
                                    mainObjectType: S.DomainObjectType.NonApplicable,
                                    mainObjectId: S.DomainObjectType.NonApplicable,
                                    from: S.AppScreen.PageNotFoundScreen,
                                    to: S.AppScreen.MainScreen,
                                    entityType: S.EntityTypes.Error,
                                    entityId: S.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (c && (0, A.Mu)(t.evgenInstance, c), e());
                        }, [t, n, r, e]),
                    };
                })(k);
                return (
                    (0, g.N)(!0),
                    !(function () {
                        let { location: e } = (0, L.g)();
                        (0, p.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(u.N, {
                        className: (0, c.$)(f().root, { [f().root_desktop]: !P }, t),
                        containerClassName: f().container,
                        ref: b,
                        'data-test-id': i.e8.notFound.NOT_FOUND,
                        children: [
                            (0, r.jsx)(O.L, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: f().content,
                                children: [
                                    (0, r.jsx)(o.I, { className: (0, c.$)(f().icon, C), variant: R, size: y }),
                                    (0, r.jsx)(_.DZ, {
                                        className: (0, c.$)(f().title, f().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        'data-test-id': i.e8.notFound.NOT_FOUND_TITLE,
                                        children: n || (0, r.jsx)(l.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(_.HL, {
                                        className: (0, c.$)(f().text, f().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: a || (0, r.jsx)(l.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(s.$, {
                                        onClick: h,
                                        className: f().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(_.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(l.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => s }), n(30282));
            var r = n(58390),
                c = n(29993),
                a = n(67174),
                l = n(15947),
                i = n(97261);
            let s = (e) => {
                let t = (0, r.useRouter)(),
                    { href: n, target: s } = (0, a.u)(e);
                return (0, c.c)((e) => {
                    let r = (0, l.U)(n, window.location.href, s);
                    if (!r) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (r.type === i.I.EXTERNAL || r.type === i.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, a.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(r.href)
                            : t.push(r.href));
                });
            };
        },
        88969: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => o });
            var r = n(88092),
                c = n(53548),
                a = n(84014),
                l = n(2058);
            function i(e) {
                var t = (0, l.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    a = void 0 === r ? c.Fragment : r,
                    i = e.id,
                    s = e.description,
                    o = e.defaultMessage,
                    u = e.values,
                    _ = e.children,
                    p = e.tagName,
                    d = void 0 === p ? a : p,
                    S = n({ id: i, description: s, defaultMessage: o }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof _ ? _(Array.isArray(S) ? S : [S]) : d ? c.createElement(d, null, S) : c.createElement(c.Fragment, null, S);
            }
            i.displayName = 'FormattedMessage';
            var s = c.memo(i, function (e, t) {
                var n = e.values,
                    c = (0, r.__rest)(e, ['values']),
                    l = t.values,
                    i = (0, r.__rest)(t, ['values']);
                return (0, a.bN)(l, n) && (0, a.bN)(c, i);
            });
            s.displayName = 'MemoizedFormattedMessage';
            let o = s;
        },
        89334: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 28102));
        },
        90334: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => m, st: () => a, gf: () => i });
            var r = n(53548);
            let c = (0, r.createContext)(null);
            function a() {
                return (0, r.useContext)(c);
            }
            let l = (0, r.createContext)({ hash: void 0 });
            function i() {
                return (0, r.useContext)(l);
            }
            var s = n(88800),
                o = n(54020);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, o.A)() }), []);
                return (0, s.jsx)(l.Provider, { value: n, children: t });
            };
            class _ {
                makeParams() {
                    return {};
                }
            }
            class p {
                makeParams() {
                    return {};
                }
            }
            var d = n(9519);
            class S {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, d._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, c) => {
                                let a = { ...c, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, a);
                            },
                        }));
                }
            }
            let A = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: a, logger: l, metrika: i } = e,
                        o = (0, r.useMemo)(() => {
                            if (A) return A;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        c = [];
                                    return (
                                        !(function e() {
                                            (c.length > 0 && t(c.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                c.push(e);
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
                                    trackEvent(e, c) {
                                        (n && t.log(e, c), r.add({ [e]: c }));
                                    },
                                };
                            })((e) => i.count(e, a), l, t);
                            return (A = new S(
                                e,
                                (function () {
                                    let e = new _();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new p();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [l, i]);
                    return (0, s.jsx)(c.Provider, { value: o, children: (0, s.jsx)(u, { children: n }) });
                };
        },
        92948: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (r, c) => {
                            let a = { ...c, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(r, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        95210: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var r = n(53548),
                c = n(38860);
            let a = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, c.z)();
                (0, r.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            var r = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        99984: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: a = c.DomainObjectType.NonApplicable,
                        mainObjectId: l = '',
                        tabId: i = '',
                        tabPos: s = 0,
                        isTabSelectedByDefault: o = !1,
                        viewUuid: u = '',
                    } = t,
                    _ = (0, r.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: l, tabId: i, tabPos: s, isTabSelectedByDefault: o, viewUuid: u, _meta: _ };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: a = c.PagePlacements.Fullscreen,
                            skeletonId: l = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: o = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            viewUuid: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(3),
                        S = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: l,
                            mainObjectType: i,
                            mainObjectId: s,
                            tabId: o,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            viewUuid: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Opened', S);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = c.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: i = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: o = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: l, tabId: i, tabPos: s, isTabSelectedByDefault: o, _meta: u };
                    e.trackEvent('Screen.Closed', _);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: a = c.PagePlacements.Fullscreen,
                            skeletonId: l = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: o = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                        } = t,
                        p = (0, r.makeMetaParams)(3),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: l,
                            mainObjectType: i,
                            mainObjectId: s,
                            tabId: o,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: a = c.PagePlacements.Fullscreen,
                            skeletonId: l = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: o = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            viewUuid: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        S = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: l,
                            mainObjectType: i,
                            mainObjectId: s,
                            tabId: o,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            viewUuid: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Closed', S);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = c.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: i = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: o = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: l, tabId: i, tabPos: s, isTabSelectedByDefault: o, _meta: u };
                    e.trackEvent('Screen.Started', _);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = c.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: i = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: o = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: l, tabId: i, tabPos: s, isTabSelectedByDefault: o, _meta: u };
                    e.trackEvent('Screen.Navigated', _);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: a = c.PagePlacements.Fullscreen,
                            skeletonId: l = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: o = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            deepLink: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        S = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: l,
                            mainObjectType: i,
                            mainObjectId: s,
                            tabId: o,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            deepLink: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Navigated', S);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = c.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: i = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: o = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: l, tabId: i, tabPos: s, isTabSelectedByDefault: o, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', _);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: a = c.PagePlacements.Fullscreen,
                            skeletonId: l = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                        } = t,
                        o = (0, r.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: a, skeletonId: l, mainObjectType: i, mainObjectId: s, _meta: o };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let r = n(92948),
                c = n(92716);
        },
    },
]);
