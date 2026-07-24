(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062],
    {
        3377: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => E });
            var r = n(32290),
                o = n(96103),
                l = n(21916),
                s = n(63618),
                i = n(39407),
                a = n(71926),
                c = n(94218),
                u = n(55556),
                d = n.n(u);
            let g = (0, o.PA)(() =>
                (0, r.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, r.jsx)(a.DZ, {
                            className: (0, s.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(a.HL, {
                            className: (0, s.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var p = n(20472),
                _ = n(57594);
            let E = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: o } = (0, _.g)();
                return o.isAuthorized ? t : (n && (0, l.redirect)(p.Z.main.href), (0, r.jsx)(g, {}));
            });
        },
        5245: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => l });
            var r = n(60754),
                o = n(55178);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: l } = e,
                    s = (0, o.useRef)([]),
                    [i] = (0, o.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, o.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(i, e);
                        };
                        return e(), window.addEventListener(l, e), () => window.removeEventListener(l, e);
                    }, [n, l, i]),
                    { store: i, patchesRef: s }
                );
            };
        },
        7748: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { NotFound: () => x });
            var r = n(32290),
                o = n(63618),
                l = n(96103),
                s = n(39407),
                i = n(63423),
                a = n(82586),
                c = n(46049),
                u = n(71926),
                d = n(55178),
                g = n(16172),
                p = n(52068),
                _ = n(62376),
                E = n(27576),
                m = n(83920),
                v = n(20472),
                h = n(84062),
                f = n(27120),
                y = n(12894),
                N = n(57594),
                S = n(55365),
                T = n.n(S);
            let x = (0, l.PA)((e) => {
                let { className: t, title: n, description: l, iconVariant: S = 'musicLogo', iconClassName: x, iconSize: A } = e,
                    { contentRef: O, setContentScrollRef: P } = (0, m.g)(),
                    R = (0, h.Z)(v.Z.main.href);
                !(function () {
                    let e = (0, p.st)(),
                        { hash: t } = (0, p.gf)(),
                        n = (0, _.U)(),
                        r = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, E.A)();
                        let o = (0, g.Fx)({
                            params: {
                                hash: t,
                                pageId: g.QT.PageNotFoundScreen,
                                pageStyle: g.QL.Fullscreen,
                                pagePlacement: g.c4.Fullscreen,
                                mainObjectType: g.ky.NonApplicable,
                                mainObjectId: g.ky.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            o && (0, g.w5)(e.evgenInstance, o),
                            () => {
                                let o = (0, g.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: g.QT.PageNotFoundScreen,
                                        pageStyle: g.QL.Fullscreen,
                                        pagePlacement: g.c4.Fullscreen,
                                        mainObjectType: g.ky.NonApplicable,
                                        mainObjectId: g.ky.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                o && (0, g.XB)(e.evgenInstance, o);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: I } = (function (e) {
                    let t = (0, p.st)(),
                        { hash: n } = (0, p.gf)(),
                        r = (0, _.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let o = (0, g.Fx)({
                                params: {
                                    hash: n,
                                    pageId: g.QT.PageNotFoundScreen,
                                    pageStyle: g.QL.Fullscreen,
                                    pagePlacement: g.c4.Fullscreen,
                                    mainObjectType: g.ky.NonApplicable,
                                    mainObjectId: g.ky.NonApplicable,
                                    from: g.QT.PageNotFoundScreen,
                                    to: g.QT.MainScreen,
                                    entityType: g.LA.Error,
                                    entityId: g.LA.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            o && (0, g.Mu)(t.evgenInstance, o), e();
                        }, [t, n, r, e]),
                    };
                })(R);
                return (
                    (0, f.N)(!0),
                    !(function () {
                        let { location: e } = (0, N.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(c.N, {
                        className: (0, o.$)(T().root, { [T().root_desktop]: !O }, t),
                        containerClassName: T().container,
                        ref: P,
                        children: [
                            (0, r.jsx)(y.L, { withBackwardFallback: '/', className: T().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: T().content,
                                children: [
                                    (0, r.jsx)(a.I, { className: (0, o.$)(T().icon, x), variant: S, size: A }),
                                    (0, r.jsx)(u.DZ, {
                                        className: (0, o.$)(T().title, T().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(u.HL, {
                                        className: (0, o.$)(T().text, T().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: l || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(i.$, {
                                        onClick: I,
                                        className: T().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        9634: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => i });
            var r = n(32290),
                o = n(82586),
                l = n(82542),
                s = n.n(l);
            let i = (e) => {
                let { style: t } = e,
                    n = {
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
                        ...t,
                    };
                return (0, r.jsx)('div', {
                    style: n,
                    children: (0, r.jsx)(o.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        10733: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => l });
            var r = n(91945),
                o = n(50891);
            class l extends o.m {
                constructor(e, t) {
                    super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => E });
            var r = n(32290),
                o = n(63618),
                l = n(96103),
                s = n(55178),
                i = n(60900),
                a = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(82586),
                g = n(21935),
                p = n(78842),
                _ = n.n(p);
            let E = (0, l.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: l = !0,
                        className: p,
                        withBackwardFallback: E,
                        buttonSize: m = 'xxs',
                    } = e,
                    { formatMessage: v } = (0, i.A)(),
                    { canBack: h, canForward: f, moveBack: y, moveForward: N } = (0, g.J)(E),
                    S = (0, s.useRef)(null),
                    T = (0, c.c)((e) => {
                        e.stopPropagation(), y();
                    }),
                    x = (0, c.c)((e) => {
                        e.stopPropagation(), N();
                    });
                return (
                    (0, s.useEffect)(() => {
                        l && S.current && h && S.current.focus();
                    }, [h]),
                    (0, r.jsxs)('div', {
                        className: (0, o.$)(_().root, p),
                        'data-test-id': a.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: S,
                                    'aria-label': v({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !h,
                                    size: m,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: T,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': v({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: m,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: x,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => o });
            var r = n(36477);
            let o = {
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
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var r = n(62060),
                o = n(55178),
                l = n(83808);
            let s = (e) => {
                let t = (0, l.W)(),
                    n = (0, o.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, o.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: s };
            };
        },
        27032: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPageStoreProvider: () => _ });
            var r = n(49259),
                o = n(45066),
                l = n(60754),
                s = n(87953),
                i = n(96194),
                a = n(49399),
                c = n(36477),
                u = n(73715);
            let d = l.gK
                    .compose(l.gK.model('FavoriteTracksPage', { playlistUuid: l.gK.maybeNull(l.gK.string), errorStatusCode: l.gK.maybeNull(l.gK.number) }), u.X)
                    .views((e) => ({
                        get playlistUrl() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistUrl: (0, l.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: n } = (0, l._$)(e);
                            if (e.loadingState !== a.G.PENDING)
                                try {
                                    (e.loadingState = a.G.PENDING),
                                        (e.playlistUuid = (yield t.getBlock({
                                            source: { uri: '/landing/block/collection/playlist-with-likes', countWeb: 8 },
                                            type: i.t.COLLECTION_PLAYLIST_WITH_LIKES,
                                        })).playlist.playlistUuid),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.RESOLVE);
                                } catch (t) {
                                    n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = a.G.IDLE), (e.playlistUuid = null);
                        },
                    })),
                g = { loadingState: a.G.IDLE },
                { pageStoreProvider: p } = (0, r.W)({ createStore: (e) => d.create(g, e), patchKey: o.n.FAVORITE_TRACKS }),
                _ = p;
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => l });
            var r = n(55178),
                o = n(53022);
            let l = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, o.z)();
                (0, r.useEffect)(() => {
                    e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(55178).createContext)(null);
        },
        31726: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => i });
            var r = n(54280),
                o = n(70204),
                l = n(34186),
                s = n(62376);
            let i = () => {
                let e = (0, l.N)(),
                    t = e.get(o.oo),
                    n = e.get(o.uM),
                    i = e.get(o.ff),
                    a = e.get(o.tw),
                    c = e.get(o.P0),
                    u = (() => {
                        let e = (0, l.N)(),
                            t = e.get(o.$I),
                            n = e.get(o.EN),
                            r = e.get(o.N1),
                            s = e.get(o._1),
                            i = e.get(o.V3),
                            a = e.get(o.Lb),
                            c = e.get(o.wK),
                            u = e.get(o.tz),
                            d = e.get(o.$8),
                            g = e.get(o.Oo),
                            p = e.get(o.X4),
                            _ = e.get(o.O9),
                            E = e.get(o.E),
                            m = e.get(o.wH),
                            v = e.get(o.ok),
                            h = e.get(o.X8),
                            f = e.get(o.yq),
                            y = e.get(o.NN),
                            N = e.get(o.qN),
                            S = e.get(o.ro),
                            T = e.get(o.nM),
                            x = e.get(o.Ut),
                            A = e.get(o.K1),
                            O = e.get(o.eu),
                            P = e.get(o.aE),
                            R = e.get(o.ki),
                            I = e.get(o.c9),
                            C = e.get(o.en),
                            w = e.get(o.jQ),
                            L = e.get(o.cZ),
                            k = e.get(o.Zl),
                            b = e.get(o.CN),
                            F = e.get(o.P1),
                            j = e.get(o.zj),
                            D = e.get(o.re),
                            U = e.get(o.JM),
                            M = e.get(o.Lk),
                            G = e.get(o.$$),
                            H = e.get(o.sv),
                            B = e.get(o.gd),
                            K = e.get(o.Ez),
                            z = e.get(o.u2),
                            X = e.get(o.TD),
                            Q = e.get(o.dh),
                            Z = e.get(o.LC),
                            V = e.get(o.PL),
                            $ = e.get(o.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: s,
                            landingResource: i,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: p,
                            artistsResource: _,
                            slidesResource: E,
                            redAlertResource: m,
                            rotorResource: v,
                            waveResource: h,
                            searchResource: f,
                            searchPlaylistResource: y,
                            playlistResource: N,
                            playlistsResource: S,
                            pinResource: T,
                            metatagsResource: x,
                            tagResource: A,
                            feedResource: O,
                            pinsResource: P,
                            musicHistoryResource: R,
                            dynamicPagesResource: I,
                            chartResource: C,
                            clipsResource: w,
                            lyricViewsResource: L,
                            nonMusicResource: k,
                            donationResource: b,
                            loaderResource: F,
                            lumenResource: j,
                            prefixlessResource: D,
                            streamsResource: U,
                            filtersResource: M,
                            ugcResource: G,
                            collectionResource: H,
                            adsResource: B,
                            personalResource: K,
                            familyResource: z,
                            childrenLandingResource: X,
                            promoResource: Q,
                            telemetryResource: Z,
                            labelsResource: V,
                            concertsResource: $,
                            wordsResource: e.get(o.dA),
                            wheelResource: e.get(o.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    g = (0, l.N)().get(o.TK),
                    p = e.get(o.ni),
                    _ = new r.si(),
                    E = new r.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: i,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: _,
                    sessionStorage: E,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: p,
                };
            };
        },
        33898: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { Z: () => r }),
                (function (e) {
                    (e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED');
                })(r || (r = {}));
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var r = n(30782),
                o = n(55178),
                l = n(36260),
                s = n(60900);
            function i(e) {
                var t = (0, s.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    l = void 0 === r ? o.Fragment : r,
                    i = e.id,
                    a = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    g = e.tagName,
                    p = void 0 === g ? l : g,
                    _ = n({ id: i, description: a, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(_) ? _ : [_]) : p ? o.createElement(p, null, _) : o.createElement(o.Fragment, null, _);
            }
            i.displayName = 'FormattedMessage';
            var a = o.memo(i, function (e, t) {
                var n = e.values,
                    o = (0, r.__rest)(e, ['values']),
                    s = t.values,
                    i = (0, r.__rest)(t, ['values']);
                return (0, l.bN)(s, n) && (0, l.bN)(o, i);
            });
            a.displayName = 'MemoizedFormattedMessage';
            let c = a;
        },
        45066: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
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
        49259: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => m, s: () => v });
            var r = n(32290),
                o = n(29222),
                l = n(96103),
                s = n(21916),
                i = n(55178),
                a = n(80451),
                c = n(96218),
                u = n(5245),
                d = n(57594),
                g = n(31726);
            (0, l.eO)(!1);
            let p = (0, i.createContext)(null),
                _ = (e) => {
                    let { children: t, store: n, storeKey: o } = e,
                        l = (0, i.useMemo)(() => ({ store: n, storeKey: o }), [n, o]);
                    return (0, r.jsx)(p.Provider, { value: l, children: t });
                },
                E = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: o } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = o.current;
                            return ((o.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, a.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        o = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: s } = e,
                                i = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: p, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: o,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(E, { nonce: s, patchKey: n, patchesRef: m }), (0, r.jsx)(_, { store: p, storeKey: n, children: l })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        49399: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => r });
            var r = (function (e) {
                return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e;
            })({});
        },
        50891: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => l });
            var r = n(91945),
                o = n(29222);
            class l extends o.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    super(e, { code: t, ...n }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        50961: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { X: () => r }),
                (function (e) {
                    (e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT');
                })(r || (r = {}));
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => p, st: () => l, gf: () => i });
            var r = n(55178);
            let o = (0, r.createContext)(null);
            function l() {
                return (0, r.useContext)(o);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function i() {
                return (0, r.useContext)(s);
            }
            var a = n(32290),
                c = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, a.jsx)(s.Provider, { value: n, children: t });
            };
            var d = n(16172);
            let g = null,
                p = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: l, logger: s, metrika: i } = e,
                        c = (0, r.useMemo)(() => {
                            if (g) return g;
                            let e = (0, d.vD)((e) => i.count(e, l), s, t),
                                n = (0, d.xU)(),
                                r = (0, d.$N)();
                            return (g = new d.gK(e, n, r));
                        }, [s, i]);
                    return (0, a.jsx)(o.Provider, { value: c, children: (0, a.jsx)(u, { children: n }) });
                };
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => l });
            var r = n(55178),
                o = n(29098);
            let l = () => (0, r.useContext)(o.P);
        },
        54280: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => l, si: () => i, fW: () => g, MJ: () => d, jU: () => _, Bx: () => p });
            var r = n(78061);
            function o(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return console.error(e), null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, l;
                            return null != (l = null == (n = o(s)) ? void 0 : n.value) ? l : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = o ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, l, n);
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
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let l = n.getItem(e) || void 0;
                        if (!t) return l;
                        let s = o(l);
                        if (!s) return null;
                        let i = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return this.remove(e), null;
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e);
                    }
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = n(91945),
                c = n(29222);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype);
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    (0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t);
                }
            }
            class g {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, l;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (l = null == (n = o(s)) ? void 0 : n.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            o = e.get(n);
                        null != o && e.set(n, o, r);
                    });
            }
            function _(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
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
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        67925: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 3377)),
                Promise.resolve().then(n.bind(n, 27032)),
                Promise.resolve().then(n.bind(n, 95324)),
                Promise.resolve().then(n.bind(n, 9634));
        },
        73715: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => l });
            var r = n(60754),
                o = n(49399);
            let l = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(o.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === o.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === o.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === o.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === o.G.REJECT;
                },
            }));
        },
        78061: (e, t, n) => {
            'use strict';
            n.d(t, { Jt: () => l, TF: () => i, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var o = n[r].split('='),
                            l = o.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, n) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, n)),
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
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function i(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => o, W: () => l });
            var r = n(55178);
            let o = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function l() {
                return (0, r.useContext)(o);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => o, g: () => l });
            var r = n(55178);
            let o = (0, r.createContext)({
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
                l = () => (0, r.useContext)(o);
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var r = n(21916),
                o = n(91027),
                l = n(36477);
            let s = (e) => {
                let t = (0, r.useRouter)(),
                    { href: n, target: s } = (0, l.u)(e);
                return (0, o.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === s
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, l.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
        87953: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => l.G, X1: () => r.X, m5: () => o.m });
            var r = n(50961),
                o = n(50891),
                l = n(10733);
            n(33898);
        },
        94218: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => g });
            var r = n(32290),
                o = n(21916),
                l = n(39407),
                s = n(21732),
                i = n(91027),
                a = n(63423),
                c = n(71926),
                u = n(70204),
                d = n(34186);
            let g = (e) => {
                let { size: t = 'm', variant: n = 'default', withRipple: g = !0, buttonText: p, isBlock: _, key: E, className: m } = e,
                    v = (0, o.useRouter)(),
                    h = (0, d.N)().get(u.QG),
                    f = (0, i.c)(() => {
                        h.authorizationUrl && v.push(h.authorizationUrl);
                    });
                return (0, r.jsx)(
                    a.$,
                    {
                        onClick: f,
                        className: m,
                        isBlock: _,
                        color: 'primary',
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: g,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
            };
        },
        95324: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPage: () => d });
            var r = n(32290),
                o = n(96103),
                l = n(55178),
                s = n(84062),
                i = n(49259),
                a = n(45066),
                c = n(7748);
            let u = (0, o.PA)(() => (0, r.jsx)(c.NotFound, {})),
                d = (0, o.PA)(() => {
                    let e = (0, i.s)(a.n.FAVORITE_TRACKS),
                        t = (0, s.Z)(e.playlistUrl);
                    if (
                        ((0, l.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, l.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, l.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, r.jsx)(u, {});
                });
        },
        96218: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => o, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                o = 'yMusicPageStatePatchesUpdated';
        },
    },
    (e) => {
        e.O(0, [5718, 7034, 6639, 6706, 1311, 8892, 2536, 66, 5835, 2812, 6477, 7275, 2586, 8347, 4522, 4220, 9562, 7358], () => e((e.s = 67925))), (_N_E = e.O());
    },
]);
