(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7290],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => i });
            let i = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => m });
            var i = n(32290),
                a = n(63618),
                o = n(96103),
                r = n(39407),
                l = n(63423),
                s = n(82586),
                c = n(46049),
                N = n(71926),
                b = n(55178),
                _ = n(16172),
                d = n(52068),
                u = n(62376),
                x = n(27576),
                S = n(83920),
                W = n(20472),
                T = n(84062),
                I = n(27120),
                A = n(12894),
                C = n(57594),
                E = n(55365),
                v = n.n(E);
            let m = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: E = 'musicLogo', iconClassName: m, iconSize: L } = e,
                    { contentRef: p, setContentScrollRef: g } = (0, S.g)(),
                    R = (0, T.Z)(W.Z.main.href);
                !(function () {
                    let e = (0, d.st)(),
                        { hash: t } = (0, d.gf)(),
                        n = (0, u.U)(),
                        i = (0, b.useRef)(void 0);
                    (0, b.useEffect)(() => {
                        if (!e || !t) return;
                        i.current = (0, x.A)();
                        let a = (0, _.Fx)({
                            params: {
                                hash: t,
                                pageId: _.QT.PageNotFoundScreen,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                                viewUuid: i.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, _.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, _.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: _.QT.PageNotFoundScreen,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                        viewUuid: i.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, _.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, d.st)(),
                        { hash: n } = (0, d.gf)(),
                        i = (0, u.U)();
                    return {
                        handleNavigateToMain: (0, b.useCallback)(() => {
                            if (!t || !n) return;
                            let a = (0, _.Fx)({
                                params: {
                                    hash: n,
                                    pageId: _.QT.PageNotFoundScreen,
                                    pageStyle: _.QL.Fullscreen,
                                    pagePlacement: _.c4.Fullscreen,
                                    mainObjectType: _.ky.NonApplicable,
                                    mainObjectId: _.ky.NonApplicable,
                                    from: _.QT.PageNotFoundScreen,
                                    to: _.QT.MainScreen,
                                    entityType: _.LA.Error,
                                    entityId: _.LA.Error,
                                },
                                logger: i,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            a && (0, _.Mu)(t.evgenInstance, a), e();
                        }, [t, n, i, e]),
                    };
                })(R);
                return (
                    (0, I.N)(!0),
                    !(function () {
                        let { location: e } = (0, C.g)();
                        (0, b.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)(c.N, {
                        className: (0, a.$)(v().root, { [v().root_desktop]: !p }, t),
                        containerClassName: v().container,
                        ref: g,
                        children: [
                            (0, i.jsx)(A.L, { withBackwardFallback: '/', className: v().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: v().content,
                                children: [
                                    (0, i.jsx)(s.I, { className: (0, a.$)(v().icon, m), variant: E, size: L }),
                                    (0, i.jsx)(N.DZ, {
                                        className: (0, a.$)(v().title, v().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, i.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(N.HL, {
                                        className: (0, a.$)(v().text, v().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, i.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(l.$, {
                                        onClick: O,
                                        className: v().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(N.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        8868: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => N });
            var i = n(55178),
                a = n(16172),
                o = n(52068),
                r = n(91027),
                l = n(62376),
                s = n(79374),
                c = n(37240);
            let N = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, o.st)(),
                    N = (0, l.U)(),
                    { hash: b } = (0, o.gf)(),
                    { pageId: _ } = (0, c.$)(),
                    d = (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !_ ||
                            !b ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = s.W[_];
                        if (!t) return;
                        let i = {
                                hash: b,
                                pageId: a.QT.Link,
                                entityType: a.LA.Deeplink,
                                entityId: a.LA.Deeplink,
                                from: a.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            o = (0, a.Fx)({ params: i, logger: N, context: 'useSendDeeplinkNavigationEvent' });
                        o && (0, a.ID)(n.evgenInstance, o);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && d();
                    }, [t, d]),
                    (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || d({ deepLink: e });
                    })
                );
            };
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => x });
            var i = n(32290),
                a = n(63618),
                o = n(96103),
                r = n(55178),
                l = n(60900),
                s = n(21732),
                c = n(91027),
                N = n(63423),
                b = n(82586),
                _ = n(21935),
                d = n(78842),
                u = n.n(d);
            let x = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: d,
                        withBackwardFallback: x,
                        buttonSize: S = 'xxs',
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { canBack: T, canForward: I, moveBack: A, moveForward: C } = (0, _.J)(x),
                    E = (0, r.useRef)(null),
                    v = (0, c.c)((e) => {
                        e.stopPropagation(), A();
                    }),
                    m = (0, c.c)((e) => {
                        e.stopPropagation(), C();
                    });
                return (
                    (0, r.useEffect)(() => {
                        o && E.current && T && E.current.focus();
                    }, [T]),
                    (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, d),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(N.$, {
                                    ref: E,
                                    'aria-label': W({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !T,
                                    size: S,
                                    icon: (0, i.jsx)(b.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: v,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, i.jsx)(N.$, {
                                    'aria-label': W({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !I,
                                    size: S,
                                    icon: (0, i.jsx)(b.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: m,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var i = n(36477);
            let a = {
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
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            var i = n(62060),
                a = n(55178),
                o = n(83808);
            let r = (e) => {
                let t = (0, o.W)(),
                    n = (0, a.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    r = (0, a.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: r };
            };
        },
        22714: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
            var i = n(32290),
                a = n(55178),
                o = n(1176);
            let r = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: r, pageStyle: l, pagePlacement: s, children: c } = e,
                    N = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: r, pageStyle: l, pagePlacement: s }), [t, n, r, l, s]);
                return (0, i.jsx)(o.r.Provider, { value: N, children: c });
            };
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var i = n(55178),
                a = n(53022);
            let o = (e) => {
                let t = (0, i.useRef)(!1),
                    n = (0, a.z)();
                (0, i.useEffect)(() => {
                    e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => i });
            let i = (0, n(55178).createContext)(null);
        },
        37240: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => o });
            var i = n(55178),
                a = n(1176);
            function o() {
                return (0, i.useContext)(a.r);
            }
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var i = n(30782),
                a = n(55178),
                o = n(36260),
                r = n(60900);
            function l(e) {
                var t = (0, r.A)(),
                    n = t.formatMessage,
                    i = t.textComponent,
                    o = void 0 === i ? a.Fragment : i,
                    l = e.id,
                    s = e.description,
                    c = e.defaultMessage,
                    N = e.values,
                    b = e.children,
                    _ = e.tagName,
                    d = void 0 === _ ? o : _,
                    u = n({ id: l, description: s, defaultMessage: c }, N, { ignoreTag: e.ignoreTag });
                return 'function' == typeof b ? b(Array.isArray(u) ? u : [u]) : d ? a.createElement(d, null, u) : a.createElement(a.Fragment, null, u);
            }
            l.displayName = 'FormattedMessage';
            var s = a.memo(l, function (e, t) {
                var n = e.values,
                    a = (0, i.__rest)(e, ['values']),
                    r = t.values,
                    l = (0, i.__rest)(t, ['values']);
                return (0, o.bN)(r, n) && (0, o.bN)(a, l);
            });
            s.displayName = 'MemoizedFormattedMessage';
            let c = s;
        },
        48922: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => i, fD: () => o, qG: () => r, xK: () => a });
            var i = (function (e) {
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
                    (e.MULTIVIBE_ACCEPTING_INVITATION_SCREEN = 'multivibe_accepting_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_ALONE_SCREEN = 'multivibe_alone_screen'),
                    (e.MULTIVIBE_INVALID_INVITATION_SCREEN = 'multivibe_invalid_invitation_screen'),
                    (e.MULTIVIBE_PENDING_INVITATION_SCREEN = 'multivibe_pending_invitation_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_ALREADY_EXIST_SCREEN = 'multivibe_already_exist_screen'),
                    e
                );
            })({});
            let a = [
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
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
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
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                r = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => d, st: () => o, gf: () => l });
            var i = n(55178);
            let a = (0, i.createContext)(null);
            function o() {
                return (0, i.useContext)(a);
            }
            let r = (0, i.createContext)({ hash: void 0 });
            function l() {
                return (0, i.useContext)(r);
            }
            var s = n(32290),
                c = n(27576);
            let N = (e) => {
                let { children: t } = e,
                    n = (0, i.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, s.jsx)(r.Provider, { value: n, children: t });
            };
            var b = n(16172);
            let _ = null,
                d = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: r, metrika: l } = e,
                        c = (0, i.useMemo)(() => {
                            if (_) return _;
                            let e = (0, b.vD)((e) => l.count(e, o), r, t),
                                n = (0, b.xU)(),
                                i = (0, b.$N)();
                            return (_ = new b.gK(e, n, i));
                        }, [r, l]);
                    return (0, s.jsx)(a.Provider, { value: c, children: (0, s.jsx)(N, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var i = n(55178),
                a = n(29098);
            let o = () => (0, i.useContext)(a.P);
        },
        55365: (e) => {
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
        77276: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 95054));
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79374: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => o });
            var i = n(16172),
                a = n(48922);
            let o = {
                [a._Q.ALBUM]: i.QT.AlbumScreen,
                [a._Q.PLAYLIST]: i.QT.PlaylistScreen,
                [a._Q.HOME]: i.QT.MainScreen,
                [a._Q.ARTIST]: i.QT.ArtistScreen,
                [a._Q.ARTIST_TRACKS]: i.QT.ArtistScreen,
                [a._Q.ARTIST_SIMILAR]: i.QT.ArtistScreen,
                [a._Q.ARTIST_ALBUMS]: i.QT.ArtistScreen,
                [a._Q.ARTIST_DISCOGRAPHY]: i.QT.ArtistScreen,
                [a._Q.ARTIST_COMPILATIONS]: i.QT.ArtistScreen,
                [a._Q.ARTIST_CONCERTS]: i.QT.ArtistScreen,
                [a._Q.SEARCH]: i.QT.SearchScreen,
                [a._Q.OWN_COLLECTION]: i.QT.CollectionLandingScreen,
                [a._Q.LANDING]: i.QT.DynamicScreen,
                [a._Q.HISTORY]: i.QT.MusicHistoryScreen,
                [a._Q.NON_MUSIC]: i.QT.NonmusicLandingScreen,
                [a._Q.CHART]: i.QT.PlaylistListScreen,
                [a._Q.PODCAST]: i.QT.AlbumScreen,
                [a._Q.AUDIOBOOK]: i.QT.AlbumScreen,
                [a._Q.OWN_ALBUMS]: i.QT.CollectionAlbumsScreen,
                [a._Q.OWN_DISLIKES]: i.QT.CollectionTrackListScreen,
                [a._Q.OWN_ARTISTS]: i.QT.CollectionArtistsScreen,
                [a._Q.OWN_PLAYLISTS]: i.QT.CollectionPlaylistsScreen,
                [a._Q.FAMILIAR_YOU]: i.QT.TrackListScreen,
                [a._Q.ENTITIES]: i.QT.ObjectsGridScreen,
                [a._Q.TRAILER]: i.QT.TrailerScreen,
                [a._Q.PLAYER]: i.QT.ExpandedPlayerScreen,
                [a._Q.VIDEO_PLAYER]: i.QT.VideoScreen,
                [a._Q.TRACK_SCREEN]: i.QT.TrackScreen,
                [a._Q.PAYWALL]: i.QT.PaywallScreen,
                [a._Q.CONCERTS]: i.QT.ConcertsLandingScreen,
                [a._Q.CONCERT]: i.QT.ConcertScreen,
                [a._Q.CONCERT_LOCATION_SELECTOR]: i.QT.ConcertLocationSelector,
                [a._Q.PAGE_NOT_FOUND_SCREEN]: i.QT.PageNotFoundScreen,
                [a._Q.SLIDES_SCREEN]: i.QT.SlidesScreen,
                [a._Q.PROMOLANDING_ALBUM]: i.QT.PromolandingAlbumScreen,
                [a._Q.WAVE_LANDING_SCREEN]: i.QT.WaveLandingScreen,
                [a._Q.FACT_SCREEN]: i.QT.FactScreen,
                [a._Q.LUMEN_AWAKENING_SCREEN]: i.QT.LumenAwakeningScreen,
                [a._Q.COLLECTION_VIBE_ROOMS]: i.QT.MultivibeScreen,
                [a._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: i.QT.MultivibeSendingInvitationScreen,
                [a._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: i.QT.MultivibeAcceptingInvitationScreen,
                [a._Q.MULTIVIBE_ACTION_SCREEN]: i.QT.MultivibeActionScreen,
                [a._Q.MULTIVIBE_ALONE_SCREEN]: i.QT.MultivibeAloneScreen,
                [a._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: i.QT.MultivibeInvalidInvitationScreen,
                [a._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: i.QT.MultivibePendingInvitationScreen,
                [a._Q.MULTIVIBE_LIMIT_SCREEN]: i.QT.MultivibeLimitScreen,
                [a._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: i.QT.MultivibeAlreadyExistScreen,
            };
        },
        79406: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => i });
            var i = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayAudioHeartBeat = 'WebNextPlayAudioHeartBeat'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextUseWaveQueue = 'WebNextUseWaveQueue'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
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
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextResetWaveSeeds = 'WebNextResetWaveSeeds'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextFlushDeferredFeedbacksOnContextSwitch = 'WebNextFlushDeferredFeedbacksOnContextSwitch'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextRealTimeWheelFeedbacks = 'WebNextRealTimeWheelFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextQ2VContextColor = 'WebNextQ2VContextColor'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    e
                );
            })({});
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => a, W: () => o });
            var i = n(55178);
            let a = (0, i.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function o() {
                return (0, i.useContext)(a);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => a, g: () => o });
            var i = n(55178);
            let a = (0, i.createContext)({
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
                o = () => (0, i.useContext)(a);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r });
            var i = n(21916),
                a = n(91027),
                o = n(36477);
            let r = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: r } = (0, o.u)(e);
                return (0, a.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === r
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
        87633: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        95054: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => W });
            var i = n(32290),
                a = n(96103),
                o = n(55178),
                r = n(60900),
                l = n(7748),
                s = n(48922),
                c = n(8868),
                N = n(22714),
                b = n(57594),
                _ = n(79406),
                d = n(87633),
                u = n.n(d);
            let x = (0, a.PA)(() => {
                    let { experiments: e, concert: t } = (0, b.g)(),
                        { formatMessage: n } = (0, r.A)(),
                        a = e.checkExperiment(_.z.WebNextConcertPage, 'on');
                    if (
                        ((0, c.A)(),
                        (0, o.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !a)
                    )
                        return (0, i.jsx)(l.NotFound, {});
                    let s = n({ id: 'page-error.concert-page-does-not-exist' }),
                        N = n({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, i.jsx)(l.NotFound, { title: s, description: N, iconVariant: 'attention', iconSize: 'xxl', iconClassName: u().icon });
                }),
                S = (0, a.PA)(() => (0, i.jsx)(N.n, { pageId: s._Q.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(x, {}) })),
                W = () => (0, i.jsx)(S, {});
        },
    },
    (e) => {
        e.O(0, [7034, 6706, 8892, 2536, 66, 5835, 2812, 6477, 7275, 2586, 8347, 4522, 4220, 9562, 7358], () => e((e.s = 77276))), (_N_E = e.O());
    },
]);
