(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        1045: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        2047: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { L: () => r }),
                (function (e) {
                    (e.PUBLIC = 'public'), (e.PRIVATE = 'private');
                })(r || (r = {}));
        },
        5245: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var r = i(60754),
                a = i(55178);
            let n = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: n } = e,
                    l = (0, a.useRef)([]),
                    [s] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, r.X6)(s, e);
                        };
                        return e(), window.addEventListener(n, e), () => window.removeEventListener(n, e);
                    }, [i, n, s]),
                    { store: s, patchesRef: l }
                );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        10421: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 53126));
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => n });
            var r = i(91945),
                a = i(50891);
            class n extends a.m {
                constructor(e, t) {
                    super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, n.prototype);
                }
            }
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var r = i(32290),
                a = i(55178),
                n = i(91027),
                l = i(71730),
                s = i(45477),
                o = i(75582),
                c = i(49399);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, a.useRef)(void 0),
                    g = (0, n.c)(() => {
                        var i;
                        u({ notificationId: d.current }), (d.current = 0);
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            });
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, r.jsx)(l.L, { reloadBlocks: g }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [u, g, i, e.rejectedPagesCount]);
            };
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(55178),
                a = i(60900);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => l });
            var r = i(60900),
                a = i(57594),
                n = i(79406);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: i, experiments: l } = (0, a.g)(),
                    s = 'ru' === i.account.data.userSessionRegionIso && l.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return s ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        15567: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a });
            var r = i(60754);
            let a = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, r._$)(e);
                return i || t;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20168: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return (e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e;
            })({});
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var r = i(36477);
            let a = {
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
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        26544: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ available: !!(null == e ? void 0 : e.available) });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                a = i(55178),
                n = i(60900),
                l = i(21732),
                s = i(63423),
                o = i(82586),
                c = i(59576);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: g,
                            onClick: _,
                            iconClassName: m,
                            className: p,
                            forwardRef: h,
                            style: v,
                            children: y,
                        } = e,
                        { formatMessage: E } = (0, n.A)(),
                        f = E({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: _,
                        ref: h,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: d, className: m }),
                        disabled: g,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => n });
            var r = i(55178);
            let a = (0, r.createContext)(null),
                n = () => (0, r.useContext)(a);
        },
        31726: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => s });
            var r = i(54280),
                a = i(70204),
                n = i(34186),
                l = i(62376);
            let s = () => {
                let e = (0, n.N)(),
                    t = e.get(a.oo),
                    i = e.get(a.uM),
                    s = e.get(a.ff),
                    o = e.get(a.tw),
                    c = e.get(a.P0),
                    u = (() => {
                        let e = (0, n.N)(),
                            t = e.get(a.$I),
                            i = e.get(a.EN),
                            r = e.get(a.N1),
                            l = e.get(a._1),
                            s = e.get(a.V3),
                            o = e.get(a.Lb),
                            c = e.get(a.wK),
                            u = e.get(a.tz),
                            d = e.get(a.$8),
                            g = e.get(a.Oo),
                            _ = e.get(a.X4),
                            m = e.get(a.O9),
                            p = e.get(a.E),
                            h = e.get(a.wH),
                            v = e.get(a.ok),
                            y = e.get(a.X8),
                            E = e.get(a.yq),
                            f = e.get(a.NN),
                            S = e.get(a.qN),
                            C = e.get(a.ro),
                            L = e.get(a.nM),
                            x = e.get(a.Ut),
                            T = e.get(a.K1),
                            P = e.get(a.eu),
                            A = e.get(a.aE),
                            R = e.get(a.ki),
                            N = e.get(a.c9),
                            k = e.get(a.en),
                            I = e.get(a.jQ),
                            O = e.get(a.cZ),
                            b = e.get(a.Zl),
                            j = e.get(a.CN),
                            w = e.get(a.P1),
                            M = e.get(a.zj),
                            K = e.get(a.re),
                            D = e.get(a.JM),
                            F = e.get(a.Lk),
                            U = e.get(a.$$),
                            G = e.get(a.sv),
                            H = e.get(a.gd),
                            B = e.get(a.Ez),
                            z = e.get(a.u2),
                            W = e.get(a.TD),
                            Y = e.get(a.dh),
                            X = e.get(a.LC),
                            V = e.get(a.PL),
                            $ = e.get(a.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: i,
                            disclaimersResource: r,
                            usersResource: l,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: _,
                            artistsResource: m,
                            slidesResource: p,
                            redAlertResource: h,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: E,
                            searchPlaylistResource: f,
                            playlistResource: S,
                            playlistsResource: C,
                            pinResource: L,
                            metatagsResource: x,
                            tagResource: T,
                            feedResource: P,
                            pinsResource: A,
                            musicHistoryResource: R,
                            dynamicPagesResource: N,
                            chartResource: k,
                            clipsResource: I,
                            lyricViewsResource: O,
                            nonMusicResource: b,
                            donationResource: j,
                            loaderResource: w,
                            lumenResource: M,
                            prefixlessResource: K,
                            streamsResource: D,
                            filtersResource: F,
                            ugcResource: U,
                            collectionResource: G,
                            adsResource: H,
                            personalResource: B,
                            familyResource: z,
                            childrenLandingResource: W,
                            promoResource: Y,
                            telemetryResource: X,
                            labelsResource: V,
                            concertsResource: $,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    d = (0, l.U)(),
                    g = (0, n.N)().get(a.TK),
                    _ = e.get(a.ni),
                    m = new r.si(),
                    p = new r.fW();
                return {
                    ...u,
                    acqOffers: i,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: m,
                    sessionStorage: p,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: _,
                };
            };
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var r = i(32290),
                a = i(77088),
                n = i.n(a);
            let l = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        33229: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var r = i(60754),
                a = i(93159),
                n = i(26544);
            let l = (e) => {
                var t, i, l, s, o;
                e = e || {};
                let c = (0, n.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (s = e.available) || s,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (l = e.cover) || null == (i = l.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, a.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { Z: () => r }),
                (function (e) {
                    (e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED');
                })(r || (r = {}));
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            var r = i(32290),
                a = i(60900),
                n = i(70280);
            let l = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(n.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        35597: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => a });
            var r = i(60754);
            let a = r.gK
                .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                l = i(55178),
                s = i(70280),
                o = i(57594),
                c = i(53514),
                u = i(40484),
                d = i.n(u),
                g = i(60900),
                _ = i(16172),
                m = i(21732),
                p = i(91027),
                h = i(71926),
                v = i(47745),
                y = i(84062),
                E = i(28999),
                f = i(61258),
                S = i(19383);
            let C = (0, n.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: l = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: u,
                            hoverSettings: d,
                        } = e,
                        { formatMessage: C } = (0, g.A)(),
                        {
                            track: L,
                            settings: { isMobile: x },
                        } = (0, o.g)(),
                        T = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: P } = (0, E.z)(),
                        A = (0, v.N)(),
                        R = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, o.g)(),
                                { modal: l } = r;
                            return (0, S.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), l.isOpened && (r.reset(), l.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    n.modal.isOpened && (n.modal.close(), n.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                x && L.isOpened && L.close(), T(e);
                            }),
                        }),
                        N = (0, p.c)((e) => {
                            A({ to: _.QT.ArtistScreen }), null == P || P(), R(e);
                        });
                    return i && !t.various
                        ? (0, r.jsx)(f.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: N,
                              title: u ? void 0 : c || t.name,
                              'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(s.m_, {
                                  enabled: !c && u,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: n, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(s.m_, {
                              enabled: !c && u,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: d,
                              children: (0, r.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: n,
                                  title: u ? void 0 : c || t.name,
                                  'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                L = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: s,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: u,
                            shouldUseSeparator: d = !0,
                        } = e,
                        g = (0, l.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              d ? t.separator : '',
                                              (0, r.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: n,
                                                      captionSize: s,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: u,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, d, i, a, n, s, o, c, u]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(C, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: u,
                            }),
                            g,
                        ],
                    });
                };
            var x = i(39407),
                T = i(63887);
            let P = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(T.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(d().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': m.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(x.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var A = i(8055),
                R = i(6752),
                N = i(78035),
                k = i(78176),
                I = i(83598),
                O = i.n(I);
            let b = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(s.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(s.ZI, { className: O().tooltipContent, children: i.map((e) => (0, r.jsx)(k.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                j = (0, l.forwardRef)((e, t) => (0, r.jsx)(b, { forwardRef: t, ...e }));
            var w = i(19740),
                M = i(52598),
                K = i.n(M);
            let D = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, g.A)();
                    return (0, r.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, a.$)(K().root, K().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(k.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [n, s] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        u = (0, p.c)(() => {
                            let e = a.current;
                            e && s(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        d = (0, R.L)(() =>
                            (0, A.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', d),
                                u(),
                                () => {
                                    window.removeEventListener('resize', d);
                                }
                            ),
                            [d, u],
                        ),
                        (0, l.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(D, { artists: t, label: i }) : (0, r.jsx)(j, { artists: t, label: i })) : i;
                }),
                U = (0, n.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: n = ', ',
                            lineClamp: u,
                            visibleArtistsCount: g,
                            withLink: _ = !0,
                            spoilerClassName: m,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: v,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: E = !0,
                            withComposer: f = !0,
                            spoilerComponent: S,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: x,
                            withContextMenu: T,
                        } = e,
                        A = (0, l.useRef)(null),
                        [R, N] = (0, l.useState)(!1),
                        k = E
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(n)
                            : '',
                        {
                            settings: { isMobile: I },
                        } = (0, o.g)(),
                        O = 1 === i.length,
                        b = (0, l.useCallback)((e) => {
                            N(!0), e.preventDefault();
                        }, []),
                        j = (0, l.useMemo)(() => {
                            let e = i;
                            return (
                                g && !R && (e = i.slice(0, g)),
                                e.reduce((e, t) => {
                                    if (!f && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        L,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: h,
                                            withLink: _ && t.id !== x && (((!I || O) && T) || !T),
                                            captionSize: v,
                                            allArtistsTitle: k,
                                            withCustomTooltip: C,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!n,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([n, i]) : [i];
                                }, [])
                            );
                        }, [i, g, R, f, I, O, T, p, h, _, x, v, k, C, n]),
                        w = (0, l.useMemo)(() => {
                            if (!R && g && g < i.length) {
                                let e = i.length - g;
                                return (0, l.isValidElement)(S) ? S : (0, r.jsx)(P, { spoilerClassName: m, spoilerArtistsCount: e, handleOnSpoilerClick: b });
                            }
                        }, [i.length, b, R, m, S, g]),
                        M = (0, l.useMemo)(() => {
                            if (u) return { WebkitLineClamp: u };
                        }, [u]),
                        K = (0, r.jsx)(s.m_, {
                            referenceRef: A,
                            enabled: !!(E && k) && C && !T && !I,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: M,
                                className: (0, a.$)(d().root, d()['root_variant_'.concat(y)], { [d().root_clamp]: u && u > 0 }, { [d().ellipsis]: !u }, t),
                                title: E && k && !C && !T ? k : void 0,
                                children: [j, w],
                            }),
                        });
                    return T ? (0, r.jsx)(F, { labelRef: A, artists: i, label: K }) : K;
                });
        },
        44265: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return (e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e;
            })({});
        },
        45066: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(32290),
                a = i(63618),
                n = i(8055),
                l = i(55178);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: a, ...n } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': l, style: { ...t }, ref: i, ...n });
                },
                o = (0, l.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(39684),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: l, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: n, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var _ = i(62060),
                m = i(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            ...u
                        } = e,
                        [d, g] = (0, l.useState)(null),
                        p = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && g(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, n),
                            [n, a, t, i, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && d && p(d);
                    }, o);
                    let h = (0, l.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(m.sN, { rangeChanged: p, totalCount: s, endReached: h, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: m,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: f,
                            initialItemCount: S,
                            minInitialItemCount: C = 20,
                            handleRef: L,
                            alwaysShowScrollbar: x = !1,
                            testId: T,
                            isMobileLayout: P = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...R
                        } = e,
                        [N, k] = (0, l.useState)(!1),
                        I = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        O = (0, l.useMemo)(() => {
                            var e, t;
                            return P
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, E, P]),
                        b = S ? Math.min(S, C) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: N || x, [u().root_notScrolling]: !N && !x }, t),
                        'data-test-id': T,
                        children: [
                            P && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(p, {
                                overscan: h,
                                components: O,
                                listClassName: m,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: _,
                                scrollerRef: L,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: A,
                                ...R,
                            }),
                            P && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        45346: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => s });
            var r = i(60754),
                a = i(15567);
            let n = ['Safari', 'MobileSafari'],
                l = ['iOS', 'MacOS'],
                s = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, a.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && n.includes(e.name) && e.OSFamily && l.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        49259: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => v });
            var r = i(32290),
                a = i(29222),
                n = i(96103),
                l = i(21916),
                s = i(55178),
                o = i(80451),
                c = i(96218),
                u = i(5245),
                d = i(57594),
                g = i(31726);
            (0, n.eO)(!1);
            let _ = (0, s.createContext)(null),
                m = (e) => {
                    let { children: t, store: i, storeKey: a } = e,
                        n = (0, s.useMemo)(() => ({ store: i, storeKey: a }), [i, a]);
                    return (0, r.jsx)(_.Provider, { value: n, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: a } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        a = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: l } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: _, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: l, patchKey: i, patchesRef: h }), (0, r.jsx)(m, { store: _, storeKey: i, children: n })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, s.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var r = i(91945),
                a = i(29222);
            class n extends a.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    super(e, { code: t, ...i }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, n.prototype);
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { X: () => r }),
                (function (e) {
                    (e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT');
                })(r || (r = {}));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53126: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => H });
            var r = i(32290),
                a = i(21916),
                n = i(55178),
                l = i(49259),
                s = i(45066),
                o = i(60754),
                c = i(87953),
                u = i(33229),
                d = i(74885),
                g = i(58008),
                _ = i(49399),
                m = i(86634);
            let p = o.gK
                    .model('TagPage', {
                        title: o.gK.maybe(o.gK.string),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        tagLoadingState: o.gK.enumeration(Object.values(_.G)),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, m.I)(d.$),
                    })
                    .views((e) => {
                        let t = {
                            get isNeededToLoad() {
                                return e.tagLoadingState === _.G.IDLE;
                            },
                            get isResolved() {
                                return e.tagLoadingState === _.G.RESOLVE;
                            },
                            get isNotFound() {
                                let t = e.pagesLoader.isEmpty;
                                return (e.tagLoadingState === _.G.REJECT && (e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST)) || t;
                            },
                            get isSomethingWrong() {
                                return e.tagLoadingState === _.G.REJECT && !t.isNotFound;
                            },
                            get playlists() {
                                var i;
                                return null != (i = e.pagesLoader.items) ? i : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, o.L3)(function* (t) {
                                let { page: i = 0, pageSize: r = 20 } = t,
                                    { playlistsResource: a, modelActionsLogger: n } = (0, o._$)(e);
                                if (e.tagLoadingState === _.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(i))
                                    try {
                                        e.pagesLoader.setPageState(i, _.G.PENDING);
                                        let t = i * r,
                                            n = e.playlistsData.slice(t, t + r),
                                            l = yield a.getPlaylists({ playlistIds: n.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            s = { page: i, perPage: r, total: e.playlistsData.length },
                                            o = l.playlists.map(u.j);
                                        e.pagesLoader.setItems(o, { page: i, pager: s });
                                    } catch (t) {
                                        n.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: g.F.ERROR, page: i }),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND);
                                    }
                            }),
                            reset() {
                                e.pagesLoader.reset(), (e.tagLoadingState = _.G.IDLE), (e.title = void 0), (e.playlistsData = (0, o.wg)([])), (e.errorStatusCode = null);
                            },
                            getTag: (0, o.L3)(function* (i) {
                                let { id: r, page: a = 0, pageSize: n = 20 } = i,
                                    { tagResource: l, modelActionsLogger: s } = (0, o._$)(e);
                                if (e.tagLoadingState !== _.G.PENDING)
                                    try {
                                        var u;
                                        e.tagLoadingState = _.G.PENDING;
                                        let i = yield l.getPlaylistIds({ id: r });
                                        (e.title = null == (u = i.tag) ? void 0 : u.name),
                                            (e.playlistsData = (0, o.wg)(i.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.RESOLVE),
                                            yield t.getPlaylists({ page: a, pageSize: n });
                                    } catch (t) {
                                        s.error(t),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.REJECT);
                                    }
                            }),
                        };
                        return t;
                    }),
                h = { tagLoadingState: _.G.IDLE, playlistsData: [], pagesLoader: {} },
                { pageStoreProvider: v } = (0, l.W)({ createStore: (e) => p.create(h, e), patchKey: s.n.TAG });
            var y = i(63618),
                E = i(96103),
                f = i(60900),
                S = i(71926),
                C = i(64170),
                L = i(7999),
                x = i(83460),
                T = i(48922),
                P = i(22714),
                A = i(83808),
                R = i(83920),
                N = i(3796),
                k = i(57594),
                I = i(11262),
                O = i(58054),
                b = i(32468),
                j = i(74694),
                w = i(89020),
                M = i(45257),
                K = i(66652),
                D = i.n(K);
            let F = (0, E.PA)((e) => {
                var t, i, o;
                let { tagId: c } = e,
                    u = (0, l.s)(s.n.TAG),
                    {
                        settings: { isMobile: d },
                    } = (0, k.g)(),
                    { formatMessage: g } = (0, f.A)(),
                    { contentScrollRef: _, setContentScrollRef: m } = (0, R.g)(),
                    p = (0, A.W)();
                c || (0, a.notFound)();
                let h = (0, n.useCallback)(
                    (e) => {
                        u.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [u],
                );
                u.isNotFound && (0, a.notFound)();
                let v = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(b.A, { children: (0, r.jsx)(O.w, { className: D().footer }) }) }), []);
                return ((0, N.J)(u.isResolved),
                (0, I.X)(u.pagesLoader, h),
                u.isNeededToLoad && (0, n.use)(u.getTag({ id: c, page: 0, pageSize: 20 })),
                u.isSomethingWrong)
                    ? (0, r.jsx)(C.SomethingWentWrong, {})
                    : (0, r.jsx)(P.n, {
                          pageId: T._Q.TAG,
                          children: (0, r.jsx)(L.h, {
                              scrollElement: _,
                              outerTitle: u.title,
                              children: (0, r.jsxs)('div', {
                                  className: D().root,
                                  children: [
                                      (0, r.jsx)(j.Y, {
                                          variant: j.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: p.canBack,
                                          children: (0, r.jsx)(S.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: u.title }),
                                      }),
                                      (0, r.jsx)(M.$, {
                                          className: (0, y.$)(D().scrollContainer, D().important),
                                          customComponents: v,
                                          itemContentCallback: (e) => {
                                              let t = u.playlists[e],
                                                  i = g({ id: 'loading-messages.entity-is-loading' }, { entityName: g({ id: 'entity-names.playlist' }) });
                                              return t ? (0, r.jsx)(x.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(w.V, { 'aria-label': i });
                                          },
                                          totalCount: null != (i = null == u || null == (t = u.pagesLoader.pager) ? void 0 : t.total) ? i : 0,
                                          onGetDataByPage: h,
                                          pageSize: 20,
                                          totalRequests: null != (o = null == u ? void 0 : u.pagesLoader.requestsCount) ? o : 0,
                                          listClassName: D().content,
                                          itemClassName: D().item,
                                          handleRef: m,
                                          context: { listAriaLabel: g({ id: 'mixes.albums-list' }, { genreName: u.title || '' }) },
                                          isMobileLayout: d,
                                          useWindowScroll: d,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var U = i(79856);
            let G = () => {
                    let e = (0, A.W)(),
                        { formatMessage: t } = (0, f.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) }),
                        a = Array.from({ length: 20 }, (e, t) => {
                            let a = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, r.jsx)('div', { className: D().item, children: (0, r.jsx)(w.V, { isActive: !0, 'aria-label': i }) }, a);
                        });
                    return (0, r.jsx)(L.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: D().root,
                            children: [
                                (0, r.jsx)(j.Y, {
                                    variant: j.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(U.W, { className: D().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', { className: D().content, children: a }),
                            ],
                        }),
                    });
                },
                H = () => {
                    let e = (0, a.useSearchParams)().get('tagId');
                    return (
                        e || (0, a.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(n.Suspense, { fallback: (0, r.jsx)(G, {}), children: (0, r.jsx)(F, { tagId: e }) }) })
                    );
                };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        54280: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => n, si: () => s, fW: () => g, MJ: () => d, jU: () => m, Bx: () => _ });
            var r = i(78061);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class n {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, r.Jt)(e);
                        if (t) {
                            var i, n;
                            return null != (n = null == (i = a(l)) ? void 0 : i.value) ? n : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let n = a ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, n, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function l(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = l('localStorage');
                    if (!i) return null;
                    try {
                        var r;
                        let n = i.getItem(e) || void 0;
                        if (!t) return n;
                        let l = a(n);
                        if (!l) return null;
                        let s = null != (r = null == l ? void 0 : l.value) ? r : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return this.remove(e), null;
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e);
                    }
                    let r = l('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = i(91945),
                c = i(29222);
            class u extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...r } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype);
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    (0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class g {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, r, n;
                        let l = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (n = null == (i = a(l)) ? void 0 : i.value) ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = l('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(i);
                        null != a && e.set(i, a, r);
                    });
            }
            function m(e) {
                let { name: t, group: i, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: i, value: { ...r, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: r } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => n, g: () => l });
            var r = i(29222),
                a = i(55178);
            let n = (0, a.createContext)(null);
            function l() {
                let e = (0, a.useContext)(n);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => S });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                l = i(60900),
                s = i(39407),
                o = i(21732),
                c = i(71926),
                u = i(14858),
                d = i(8626),
                g = i(31010),
                _ = i(61945),
                m = i(57594),
                p = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let h = (e, t, i) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var v = i(61258),
                y = i(77088),
                E = i.n(y);
            let f = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, m.g)(),
                        { formatDate: n } = (0, l.A)(),
                        { language: u } = (0, _.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(E().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, d.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(v.N, {
                                        target: '_blank',
                                        href: h(p.YANDEX, i.tld, u),
                                        className: (0, a.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(s.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(v.N, {
                                target: '_blank',
                                href: h(p.YANDEX_PROJECTS, i.tld, u),
                                className: E().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(s.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                S = (0, n.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: n, location: l } = (0, m.g)(),
                        { isEnabled: d } = null != (t = (0, g.P)()) ? t : {},
                        { language: y } = (0, _.h)(),
                        S = (0, u.w)(!0),
                        C = ((e) => {
                            let { platform: t, tld: i, language: a, userRegion: n } = e,
                                l = { title: (0, r.jsx)(s.A, { id: 'footer.links-copyright-holders' }), url: h(p.COPYRIGHT_HOLDER, i, a) },
                                o = { title: (0, r.jsx)(s.A, { id: 'footer.links-privacy-policy' }), url: h(p.PRIVACY_POLICY, i, a) },
                                c = { title: (0, r.jsx)(s.A, { id: 'footer.links-terms' }), url: h(p.AGREEMENT, i, a) },
                                u = { title: (0, r.jsx)(s.A, { id: 'footer.links-recommendation-rules' }), url: h(p.RECOMMENDATION_RULES, i, a) },
                                d = { title: (0, r.jsx)(s.A, { id: 'footer.links-help' }), url: h(p.HELP, i, a) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [l, c, u];
                                    return 'ru' === n && e.push(o), e.push(d), e;
                                }
                                case 'desktop':
                                    return [l, c, u, d];
                            }
                        })({ platform: 'desktop', tld: l.tld, language: y, userRegion: n.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(E().root, E().important, { [E().root_withOffsetForDeeplink]: d }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: E().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: E().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: C.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: E().item,
                                                    children: (0, r.jsx)(v.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: E().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: E().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: S },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(f, {}),
                        ],
                    });
                });
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => g });
            var r = i(32290),
                a = i(63618),
                n = i(60900),
                l = i(21732),
                s = i(63423),
                o = i(82586),
                c = i(71926),
                u = i(22492),
                d = i.n(u);
            let g = (e) => {
                let { className: t, isLiked: i, likesCount: u, handleLikeClick: g, ariaLabel: _ } = e,
                    { formatNumber: m } = (0, n.A)();
                return (0, r.jsx)(s.$, {
                    className: (0, a.$)(d().root, t),
                    onClick: g,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': _,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: m(u) }),
                });
            };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => S });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                l = i(55178),
                s = i(60900),
                o = i(39407),
                c = i(63423),
                u = i(82586),
                d = i(71926),
                g = i(16172),
                _ = i(52068),
                m = i(62376),
                p = i(37240),
                h = i(83920),
                v = i(20472),
                y = i(12894),
                E = i(30310),
                f = i.n(E);
            let S = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, s.A)(),
                    E = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: r } = (0, p.$)(),
                        a = (0, m.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let n = (0, g.Fx)({
                            params: {
                                entityType: g.LA.Error,
                                entityId: g.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: g.QL.Fullscreen,
                                pagePlacement: g.c4.Fullscreen,
                                mainObjectType: g.ky.NonApplicable,
                                mainObjectId: g.ky.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, g.z5)(t.evgenInstance, n);
                    }, [t, e, i, r, a]);
                })(E);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, p.$)(),
                            r = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, g.Fx)({
                                    params: {
                                        actionType: g.X2.Refresh,
                                        userInteractionType: g.gi.Tap,
                                        entityType: g.LA.Error,
                                        entityId: g.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: g.QL.Fullscreen,
                                        pagePlacement: g.c4.Fullscreen,
                                        mainObjectType: g.ky.NonApplicable,
                                        mainObjectId: g.ky.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, g.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    C = (0, l.useCallback)(() => {
                        S(), (window.location.href = v.Z.main.href);
                    }, [S]),
                    { contentRef: L } = (0, h.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(y.L, { withBackwardFallback: '/', className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !L }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(u.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(d.DZ, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: E }),
                                (0, r.jsxs)(d.HL, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: C,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        66652: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                shimmerTitle: 'TagPage_shimmerTitle__ge9m_',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => m });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                l = i(60900),
                s = i(39407),
                o = i(63423),
                c = i(82586),
                u = i(71926),
                d = i(58534),
                g = i(70718),
                _ = i.n(g);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    g = (0, n.useRef)(null),
                    { formatMessage: m } = (0, l.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let p = (0, n.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(u.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: g,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, r.jsx)(d.$, { className: (0, a.$)(_().root, _().important), message: p, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                l = i(60900),
                s = i(63380),
                o = i(45477),
                c = i(75582),
                u = i(57594),
                d = i(90357),
                g = i(97647),
                _ = i(97755);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        entityVariant: g.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: i } = (0, c.l)(),
                        [g, _] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (g) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let l = await e.toggleLike();
                        _(!1),
                            l === s.f.OK
                                ? i((0, r.jsx)(m, { playlist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, g, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                l = i(60900),
                s = i(45477),
                o = i(75582),
                c = i(57594),
                u = i(90357),
                d = i(97647),
                g = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(g.k, {
                        closeToast: i,
                        entityVariant: d.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                m = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: d } = (0, l.A)(),
                        [g, m] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                        if (g) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let l = await e.togglePin();
                        m(!1),
                            l
                                ? i((0, r.jsx)(_, { playlist: n }), { containerId: s.u.INFO })
                                : i((0, r.jsx)(u.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR });
                    }, [t.isAuthorized, g, e, i, d]);
                };
        },
        74885: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(60754),
                a = i(87953),
                n = i(2047),
                l = i(90404),
                s = i(63380),
                o = i(15567),
                c = i(58008),
                u = i(36477),
                d = i(45346),
                g = i(35597),
                _ = i(20168),
                m = i(1045),
                p = i(44265);
            let h = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(d.a),
                    }),
                    g.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === p.j.LIKE || e.kind === p.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === p.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === n.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, o.M)(e);
                        return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(l._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) {
                            let a = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return (0, r._n)(e) && a === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), a;
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return _.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            var l, s;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (l = e.revision) ? l : 0, playlistKind: e.kind });
                            return (e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), _.Y.OK;
                        } catch (e) {
                            if ((n.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === a.X1.PRECONDITION_FAILED)) return _.Y.RELOAD;
                            return _.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return c.F.ERROR;
                        if (e.title === t) return c.F.OK;
                        let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return c.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let a = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == a ? void 0 : a.title)) return (e.title = r), c.F.ERROR;
                                return (e.title = a.title), c.F.OK;
                            } catch (t) {
                                (e.title = r), a.error(t);
                            }
                        }
                        return c.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return c.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: i, modelActionsLogger: a } = (0, r._$)(e);
                        try {
                            return yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), c.F.OK;
                        } catch (e) {
                            a.error(e);
                        }
                        return c.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return c.F.ERROR;
                        let { usersResource: i, modelActionsLogger: a } = (0, r._$)(e),
                            { user: l } = (0, o.M)(e),
                            s = e.visibility,
                            u = e.isPublic ? n.L.PRIVATE : n.L.PUBLIC;
                        t && (u = t);
                        try {
                            return (
                                (e.visibility = u),
                                e.isOwnFavouritePlaylist
                                    ? yield l.setSettings({ userMusicVisibility: u })
                                    : yield i.togglePlaylistVisibility({ visibility: u, userId: e.uid, playlistKind: e.kind }),
                                c.F.OK
                            );
                        } catch (e) {
                            a.error(e);
                        }
                        return (e.visibility = s), c.F.ERROR;
                    }),
                    downloadToFile: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { usersResource: t, modelActionsLogger: i } = (0, r._$)(e);
                        try {
                            let { tracks: r = [] } = yield t.getPlaylistWithTracksIds({ userId: String(e.uid), playlistKind: e.kind, resumeStream: !1 }),
                                a = r.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            a.length && window.desktopEvents?.send?.('DOWNLOAD_TRACKS', a, 'playlist', e.title || '');
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        77088: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => n, TF: () => s, hZ: () => l });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            n = a.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var n;
                document.cookie =
                    ((n = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t);
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function s(e, t) {
                l(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => E });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                l = i(55178),
                s = i(16172),
                o = i(21732),
                c = i(91027),
                u = i(50162),
                d = i(19740),
                g = i(86269),
                _ = i(71926),
                m = i(47745),
                p = i(84062),
                h = i(57594),
                v = i(16510),
                y = i.n(v);
            let E = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, h.g)(),
                    v = (0, p.Z)(t.url),
                    f = (0, m.N)(),
                    S = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(E, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        n.modal.isOpened && n.modal.close(), f({ to: s.QT.ArtistScreen }), v(e);
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, a.$)(y().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(g.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        S,
                    ],
                });
            });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Z });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                l = i(55178),
                s = i(60900),
                o = i(16172),
                c = i(21732),
                u = i(71483),
                d = i(91027),
                g = i(6752),
                _ = i(14934),
                m = i(82586),
                // for PulseSync WebHost
                pulseSyncPlaylistDownloadIcons = i(82586),
                p = i(86269),
                h = i(71926),
                v = i(41677),
                y = i(73141),
                E = i(73192),
                f = i(71735),
                S = i(47745),
                C = i(2969),
                L = i(54391),
                x = i(23352),
                T = i(72396),
                P = i(5537),
                A = i(84062),
                R = i(28999),
                N = i(90169),
                k = i(57594),
                I = i(61376),
                O = i(11323),
                b = i(92744),
                j = i(61258),
                w = i(10180),
                M = i(90326),
                K = i(29268),
                D = i(34925),
                F = i(13931),
                U = i(19740),
                G = i(9017),
                H = i(65477),
                B = i(46200),
                z = i(27120),
                W = i(95134),
                Y = i(79406),
                X = i(58237),
                V = i(56367),
                $ = i(83755);
            let q = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...l } = e,
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: g } = (0, B.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: m },
                        trailer: p,
                        user: h,
                    } = (0, k.g)(),
                    v = (0, y.K)(i),
                    S = (0, E.A)(i),
                    C = (0, L.F)(),
                    { formatMessage: x } = (0, s.A)(),
                    T = (0, f.P)(),
                    P = _.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    A = (0, G.A)({ entityVariant: W.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, z.N)(n);
                let R = (0, d.c)(() => {
                    if (u) return void g();
                    T() || (p.openPlaylistTrailer(i.id), C(o.ky.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: x({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...l,
                    // for PulseSync WebHost
                    children: ((items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                            eventDetail: {
                                id: String(i.kind ?? i.id),
                                uuid: String(i.uuid ?? ''),
                                url: String(i.url ?? ''),
                                ...(i.title ? { title: String(i.title) } : {}),
                            },
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, r.jsx)(
                                    U.Dr,
                                    {
                                        icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: icon, size: 'xxs' }),
                                        onClick: () => {
                                            activate(), a?.(!1);
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items)([
                        P && (0, r.jsx)(H.d, { entityVariant: W.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !m && (0, r.jsx)(V.L, { onClick: S, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(X.T, { onClick: v, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(U.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: R, disabled: !i.isAvailable }),
                    ]),
                });
            });
            var J = i(11675),
                Q = i.n(J);
            let Z = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: U, customDescription: G } = e,
                    { ref: H, intersectionPropertyId: B } = (0, x.n)(),
                    {
                        trailer: z,
                        user: W,
                        paywall: { modal: Y },
                    } = (0, k.g)(),
                    { from: X, utmLink: V } = (0, T.f)({ contextId: i.uuid, contextType: u.K.Playlist }),
                    { formatMessage: $ } = (0, s.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: ee } = (0, R.z)(),
                    [et, ei] = (0, l.useState)(!1),
                    [er, ea] = (0, l.useState)(!1),
                    [en, el] = (0, l.useState)(!1),
                    es = (0, F.r)(i),
                    eo = (0, y.K)(i),
                    ec = (0, E.A)(i),
                    eu = (0, S.N)(),
                    ed = (0, C.b)(),
                    eg = (0, A.Z)(i.url),
                    e_ = (0, L.F)(),
                    em = (0, f.P)(),
                    ep = (0, d.c)((e) => {
                        if ((e.stopPropagation(), em())) return void e.preventDefault();
                        z.setUtmLink(V), z.openPlaylistTrailer(i.id), e_(o.ky.Playlist, i.id);
                    }),
                    [eh, ev] = (0, l.useState)(!1),
                    { isPlaying: ey, togglePlay: eE } = (0, N.D)({
                        playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: V }, loadContextMeta: !0 },
                    }),
                    ef = (0, d.c)(() => {
                        eu({ to: o.QT.PlaylistScreen }), null == Z || Z();
                    }),
                    eS = (0, d.c)((e) => {
                        ef(), eg(e);
                    }),
                    eC = (0, P.N)(),
                    eL = (0, d.c)(() => {
                        if (!em()) {
                            if (eC) return void Y.open();
                            et || ey || (ei(!0), null == ee || ee()), eE(), ed(!ey);
                        }
                    }),
                    ex = (0, d.c)(() => {
                        er || i.isLiked || (ea(!0), null == J || J()), eo();
                    }),
                    eT = (0, d.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eP = (0, d.c)((e) => {
                        el(e), ev(e);
                    }),
                    eA = (0, l.useMemo)(() => {
                        var e;
                        return G
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: G }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [G, i]),
                    eR = (0, g.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                b.c,
                                {
                                    className: (0, a.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ex,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eN = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        K.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    ek = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eI = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eS,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: es,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: en || eh,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                M.D,
                                                {
                                                    className: (0, a.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eL,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eR,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eP,
                                                    open: en,
                                                    onClick: eT,
                                                    className: (0, a.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ek,
                                            trailerControl: eN,
                                        }),
                                    ],
                                }),
                            }),
                        [eS, i, es, en, eh, eL, ey, eR, eP, eT, ek, eN],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: H,
                    'aria-label': es,
                    className: (0, a.$)(Q().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(j.N, { className: Q().titleLink, href: i.url, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(j.N, { href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': B,
                    contentLinesCount: U,
                    view: eI,
                    description: eA,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(I.x, {
                                ariaLabel: $({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        n,
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        86634: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => c });
            var r = i(60754),
                a = i(58008),
                n = i(49399),
                l = i(89009),
                s = i(93841),
                o = i(93043);
            function c(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(n.G)), n.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(n.G)))),
                        }),
                        s.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === n.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === n.G.RESOLVE));
                            },
                            get isEmpty() {
                                var a;
                                return t.isSomePageResolved && !(null == (a = e.items) ? void 0 : a.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === n.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === n.G.REJECT;
                            },
                            get hasMorePages() {
                                var l;
                                return !!i && !(null == (l = e.pager) ? void 0 : l.lastPage);
                            },
                            get rejectedPagesCount() {
                                var s;
                                if (t.isInitialRequestRejected || !(null == (s = e.pageStates) ? void 0 : s.length)) return 0;
                                return e.pageStates.filter((e) => e === n.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, a) => {
                                let l;
                                if (([n.G.IDLE, n.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = a), i)) l = r + 1;
                                else {
                                    var s, o, c, u;
                                    l = Math.ceil(
                                        (null != (c = null == (s = e.pager) ? void 0 : s.total) ? c : 0) /
                                            (null != (u = null == (o = e.pager) ? void 0 : o.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(r + 1, l);
                                t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = a), a === n.G.REJECT && t.addLastRejectedPageToList(r);
                            },
                            setItems: (s, o) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = o;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === a.F.ERROR || !s || !d))
                                    return void t.setPageState(u, n.G.REJECT);
                                e.pager
                                    ? i && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, n.G.RESOLVE),
                                    (e.pager.page = u),
                                    i
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, l.I)({ items: e.items, mappedRawItems: s, page: u, pageSize: e.pager.perPage }));
                            },
                            resetRejectedPagesState() {
                                var t, i, r;
                                for (let a = 0; a < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); a++)
                                    (null == (r = e.pageStates) ? void 0 : r[a]) === n.G.REJECT && (e.pageStates[a] = n.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, r, a;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? r : 0) > 5; )
                                    null == (a = e.lastRejectedPagesList) || a.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => n.G.IDLE);
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let r = Array.from({ length: t - i }, () => n.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                (e.initialRequestLoadingState = n.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]);
                            },
                        };
                        return t;
                    });
            }
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => r.X, m5: () => a.m });
            var r = i(50961),
                a = i(50891),
                n = i(10733);
            i(33898);
        },
        89009: (e, t, i) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: i, page: r, pageSize: a } = e,
                    n = r * a,
                    l = 0;
                for (let e = n; e < n + a; e++) i[l] && (t[e] = i[l]), l++;
            }
            i.d(t, { I: () => r });
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var r = i(32290),
                a = i(63618),
                n = i(79856),
                l = i(80556),
                s = i.n(l);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: o,
                    'aria-label': c,
                    centered: u,
                    withInfo: d = !0,
                    linesCount: g = 3,
                    withSubcover: _,
                    radius: m = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(s().root, i),
                    children: [
                        _ && (0, r.jsx)(n.W, { isActive: t, className: s().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(s().cover, l, { [s().cover_round]: o, [s().cover_withSubcover]: _ }), radius: m }),
                        d &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(s().infoContainer, s()['content_linesCount_'.concat(g)], { [s().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(s().title, { [s().title_withSubcover]: _ }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        90404: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
        },
        93043: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var r = i(60754);
            let a = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        93159: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            let r = (e) => {
                var t, i;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (i = e.average)
                          ? void 0
                          : i.color
                      : '';
            };
        },
        93841: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754);
            let a = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        });
                },
            }));
        },
        96218: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => a, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 6347, 3183, 9763, 6639, 7258, 3803, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6477, 7275, 2586, 8347, 7702,
                6874, 861, 782, 4668, 9740, 1175, 14, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 10421)),
        ),
            (_N_E = e.O());
    },
]);
