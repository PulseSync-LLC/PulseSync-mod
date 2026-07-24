(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4664],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => i });
            let i = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => p });
            var i = n(32290),
                l = n(63618),
                s = n(96103),
                o = n(39407),
                r = n(63423),
                c = n(82586),
                a = n(46049),
                _ = n(71926),
                u = n(55178),
                d = n(16172),
                T = n(52068),
                S = n(62376),
                I = n(27576),
                N = n(83920),
                A = n(20472),
                E = n(84062),
                m = n(27120),
                L = n(12894),
                v = n(57594),
                C = n(55365),
                R = n.n(C);
            let p = (0, s.PA)((e) => {
                let { className: t, title: n, description: s, iconVariant: C = 'musicLogo', iconClassName: p, iconSize: O } = e,
                    { contentRef: g, setContentScrollRef: Q } = (0, N.g)(),
                    b = (0, E.Z)(A.Z.main.href);
                !(function () {
                    let e = (0, T.st)(),
                        { hash: t } = (0, T.gf)(),
                        n = (0, S.U)(),
                        i = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        i.current = (0, I.A)();
                        let l = (0, d.Fx)({
                            params: {
                                hash: t,
                                pageId: d.QT.PageNotFoundScreen,
                                pageStyle: d.QL.Fullscreen,
                                pagePlacement: d.c4.Fullscreen,
                                mainObjectType: d.ky.NonApplicable,
                                mainObjectId: d.ky.NonApplicable,
                                viewUuid: i.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, d.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, d.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: d.QT.PageNotFoundScreen,
                                        pageStyle: d.QL.Fullscreen,
                                        pagePlacement: d.c4.Fullscreen,
                                        mainObjectType: d.ky.NonApplicable,
                                        mainObjectId: d.ky.NonApplicable,
                                        viewUuid: i.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, d.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: y } = (function (e) {
                    let t = (0, T.st)(),
                        { hash: n } = (0, T.gf)(),
                        i = (0, S.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, d.Fx)({
                                params: {
                                    hash: n,
                                    pageId: d.QT.PageNotFoundScreen,
                                    pageStyle: d.QL.Fullscreen,
                                    pagePlacement: d.c4.Fullscreen,
                                    mainObjectType: d.ky.NonApplicable,
                                    mainObjectId: d.ky.NonApplicable,
                                    from: d.QT.PageNotFoundScreen,
                                    to: d.QT.MainScreen,
                                    entityType: d.LA.Error,
                                    entityId: d.LA.Error,
                                },
                                logger: i,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            l && (0, d.Mu)(t.evgenInstance, l), e();
                        }, [t, n, i, e]),
                    };
                })(b);
                return (
                    (0, m.N)(!0),
                    !(function () {
                        let { location: e } = (0, v.g)();
                        (0, u.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, i.jsxs)(a.N, {
                        className: (0, l.$)(R().root, { [R().root_desktop]: !g }, t),
                        containerClassName: R().container,
                        ref: Q,
                        children: [
                            (0, i.jsx)(L.L, { withBackwardFallback: '/', className: R().navigation, withForwardControl: !1 }),
                            (0, i.jsxs)('div', {
                                className: R().content,
                                children: [
                                    (0, i.jsx)(c.I, { className: (0, l.$)(R().icon, p), variant: C, size: O }),
                                    (0, i.jsx)(_.DZ, {
                                        className: (0, l.$)(R().title, R().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, i.jsx)(_.HL, {
                                        className: (0, l.$)(R().text, R().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, i.jsx)(o.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, i.jsx)(r.$, {
                                        onClick: y,
                                        className: R().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(_.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, i.jsx)(o.A, { id: 'navigation.page-main' }),
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
            n.d(t, { A: () => _ });
            var i = n(55178),
                l = n(16172),
                s = n(52068),
                o = n(91027),
                r = n(62376),
                c = n(79374),
                a = n(37240);
            let _ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, s.st)(),
                    _ = (0, r.U)(),
                    { hash: u } = (0, s.gf)(),
                    { pageId: d } = (0, a.$)(),
                    T = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !d ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[d];
                        if (!t) return;
                        let i = {
                                hash: u,
                                pageId: l.QT.Link,
                                entityType: l.LA.Deeplink,
                                entityId: l.LA.Deeplink,
                                from: l.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, l.Fx)({ params: i, logger: _, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, l.ID)(n.evgenInstance, s);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && T();
                    }, [t, T]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || T({ deepLink: e });
                    })
                );
            };
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => I });
            var i = n(32290),
                l = n(63618),
                s = n(96103),
                o = n(55178),
                r = n(60900),
                c = n(21732),
                a = n(91027),
                _ = n(63423),
                u = n(82586),
                d = n(21935),
                T = n(78842),
                S = n.n(T);
            let I = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: s = !0,
                        className: T,
                        withBackwardFallback: I,
                        buttonSize: N = 'xxs',
                    } = e,
                    { formatMessage: A } = (0, r.A)(),
                    { canBack: E, canForward: m, moveBack: L, moveForward: v } = (0, d.J)(I),
                    C = (0, o.useRef)(null),
                    R = (0, a.c)((e) => {
                        e.stopPropagation(), L();
                    }),
                    p = (0, a.c)((e) => {
                        e.stopPropagation(), v();
                    });
                return (
                    (0, o.useEffect)(() => {
                        s && C.current && E && C.current.focus();
                    }, [E]),
                    (0, i.jsxs)('div', {
                        className: (0, l.$)(S().root, T),
                        'data-test-id': c.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(_.$, {
                                    ref: C,
                                    'aria-label': A({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !E,
                                    size: N,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: R,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, i.jsx)(_.$, {
                                    'aria-label': A({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !m,
                                    size: N,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: p,
                                    'data-test-id': c.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var i = n(36477);
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
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => o });
            var i = n(62060),
                l = n(55178),
                s = n(83808);
            let o = (e) => {
                let t = (0, s.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: o };
            };
        },
        22714: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => o });
            var i = n(32290),
                l = n(55178),
                s = n(1176);
            let o = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: o, pageStyle: r, pagePlacement: c, children: a } = e,
                    _ = (0, l.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: o, pageStyle: r, pagePlacement: c }), [t, n, o, r, c]);
                return (0, i.jsx)(s.r.Provider, { value: _, children: a });
            };
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => s });
            var i = n(55178),
                l = n(53022);
            let s = (e) => {
                let t = (0, i.useRef)(!1),
                    n = (0, l.z)();
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
            n.d(t, { $: () => s });
            var i = n(55178),
                l = n(1176);
            function s() {
                return (0, i.useContext)(l.r);
            }
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => a });
            var i = n(30782),
                l = n(55178),
                s = n(36260),
                o = n(60900);
            function r(e) {
                var t = (0, o.A)(),
                    n = t.formatMessage,
                    i = t.textComponent,
                    s = void 0 === i ? l.Fragment : i,
                    r = e.id,
                    c = e.description,
                    a = e.defaultMessage,
                    _ = e.values,
                    u = e.children,
                    d = e.tagName,
                    T = void 0 === d ? s : d,
                    S = n({ id: r, description: c, defaultMessage: a }, _, { ignoreTag: e.ignoreTag });
                return 'function' == typeof u ? u(Array.isArray(S) ? S : [S]) : T ? l.createElement(T, null, S) : l.createElement(l.Fragment, null, S);
            }
            r.displayName = 'FormattedMessage';
            var c = l.memo(r, function (e, t) {
                var n = e.values,
                    l = (0, i.__rest)(e, ['values']),
                    o = t.values,
                    r = (0, i.__rest)(t, ['values']);
                return (0, s.bN)(o, n) && (0, s.bN)(l, r);
            });
            c.displayName = 'MemoizedFormattedMessage';
            let a = c;
        },
        45009: (e, t, n) => {
            'use strict';
            n.d(t, { AlbumNotFoundPage: () => d });
            var i = n(32290),
                l = n(96103),
                s = n(55178),
                o = n(7748),
                r = n(48922),
                c = n(8868),
                a = n(22714),
                _ = n(57594);
            let u = (0, l.PA)(() => {
                    let { album: e, sonataState: t } = (0, _.g)();
                    return (
                        (0, c.A)(),
                        (0, s.useEffect)(() => {
                            e.reset(t);
                        }, []),
                        (0, i.jsx)(o.NotFound, {})
                    );
                }),
                d = (0, l.PA)(() => (0, i.jsx)(a.n, { pageId: r._Q.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(u, {}) }));
        },
        48922: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => i, fD: () => s, qG: () => o, xK: () => l });
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
            let l = [
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
                s = [
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
                o = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => T, st: () => s, gf: () => r });
            var i = n(55178);
            let l = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(l);
            }
            let o = (0, i.createContext)({ hash: void 0 });
            function r() {
                return (0, i.useContext)(o);
            }
            var c = n(32290),
                a = n(27576);
            let _ = (e) => {
                let { children: t } = e,
                    n = (0, i.useMemo)(() => ({ hash: (0, a.A)() }), []);
                return (0, c.jsx)(o.Provider, { value: n, children: t });
            };
            var u = n(16172);
            let d = null,
                T = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: s, logger: o, metrika: r } = e,
                        a = (0, i.useMemo)(() => {
                            if (d) return d;
                            let e = (0, u.vD)((e) => r.count(e, s), o, t),
                                n = (0, u.xU)(),
                                i = (0, u.$N)();
                            return (d = new u.gK(e, n, i));
                        }, [o, r]);
                    return (0, c.jsx)(l.Provider, { value: a, children: (0, c.jsx)(_, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => s });
            var i = n(55178),
                l = n(29098);
            let s = () => (0, i.useContext)(l.P);
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
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79374: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => s });
            var i = n(16172),
                l = n(48922);
            let s = {
                [l._Q.ALBUM]: i.QT.AlbumScreen,
                [l._Q.PLAYLIST]: i.QT.PlaylistScreen,
                [l._Q.HOME]: i.QT.MainScreen,
                [l._Q.ARTIST]: i.QT.ArtistScreen,
                [l._Q.ARTIST_TRACKS]: i.QT.ArtistScreen,
                [l._Q.ARTIST_SIMILAR]: i.QT.ArtistScreen,
                [l._Q.ARTIST_ALBUMS]: i.QT.ArtistScreen,
                [l._Q.ARTIST_DISCOGRAPHY]: i.QT.ArtistScreen,
                [l._Q.ARTIST_COMPILATIONS]: i.QT.ArtistScreen,
                [l._Q.ARTIST_CONCERTS]: i.QT.ArtistScreen,
                [l._Q.SEARCH]: i.QT.SearchScreen,
                [l._Q.OWN_COLLECTION]: i.QT.CollectionLandingScreen,
                [l._Q.LANDING]: i.QT.DynamicScreen,
                [l._Q.HISTORY]: i.QT.MusicHistoryScreen,
                [l._Q.NON_MUSIC]: i.QT.NonmusicLandingScreen,
                [l._Q.CHART]: i.QT.PlaylistListScreen,
                [l._Q.PODCAST]: i.QT.AlbumScreen,
                [l._Q.AUDIOBOOK]: i.QT.AlbumScreen,
                [l._Q.OWN_ALBUMS]: i.QT.CollectionAlbumsScreen,
                [l._Q.OWN_DISLIKES]: i.QT.CollectionTrackListScreen,
                [l._Q.OWN_ARTISTS]: i.QT.CollectionArtistsScreen,
                [l._Q.OWN_PLAYLISTS]: i.QT.CollectionPlaylistsScreen,
                [l._Q.FAMILIAR_YOU]: i.QT.TrackListScreen,
                [l._Q.ENTITIES]: i.QT.ObjectsGridScreen,
                [l._Q.TRAILER]: i.QT.TrailerScreen,
                [l._Q.PLAYER]: i.QT.ExpandedPlayerScreen,
                [l._Q.VIDEO_PLAYER]: i.QT.VideoScreen,
                [l._Q.TRACK_SCREEN]: i.QT.TrackScreen,
                [l._Q.PAYWALL]: i.QT.PaywallScreen,
                [l._Q.CONCERTS]: i.QT.ConcertsLandingScreen,
                [l._Q.CONCERT]: i.QT.ConcertScreen,
                [l._Q.CONCERT_LOCATION_SELECTOR]: i.QT.ConcertLocationSelector,
                [l._Q.PAGE_NOT_FOUND_SCREEN]: i.QT.PageNotFoundScreen,
                [l._Q.SLIDES_SCREEN]: i.QT.SlidesScreen,
                [l._Q.PROMOLANDING_ALBUM]: i.QT.PromolandingAlbumScreen,
                [l._Q.WAVE_LANDING_SCREEN]: i.QT.WaveLandingScreen,
                [l._Q.FACT_SCREEN]: i.QT.FactScreen,
                [l._Q.LUMEN_AWAKENING_SCREEN]: i.QT.LumenAwakeningScreen,
                [l._Q.COLLECTION_VIBE_ROOMS]: i.QT.MultivibeScreen,
                [l._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: i.QT.MultivibeSendingInvitationScreen,
                [l._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: i.QT.MultivibeAcceptingInvitationScreen,
                [l._Q.MULTIVIBE_ACTION_SCREEN]: i.QT.MultivibeActionScreen,
                [l._Q.MULTIVIBE_ALONE_SCREEN]: i.QT.MultivibeAloneScreen,
                [l._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: i.QT.MultivibeInvalidInvitationScreen,
                [l._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: i.QT.MultivibePendingInvitationScreen,
                [l._Q.MULTIVIBE_LIMIT_SCREEN]: i.QT.MultivibeLimitScreen,
                [l._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: i.QT.MultivibeAlreadyExistScreen,
            };
        },
        82283: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 45009));
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => s });
            var i = n(55178);
            let l = (0, i.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function s() {
                return (0, i.useContext)(l);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => s });
            var i = n(55178);
            let l = (0, i.createContext)({
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
                s = () => (0, i.useContext)(l);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => o });
            var i = n(21916),
                l = n(91027),
                s = n(36477);
            let o = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: o } = (0, s.u)(e);
                return (0, l.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === o
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
    },
]);
