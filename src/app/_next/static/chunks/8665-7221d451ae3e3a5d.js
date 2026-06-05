(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6961, 8665],
    {
        730: (e, t, a) => {
            'use strict';
            a.d(t, { uN: () => d.GenresPage, Zt: () => l });
            var r = a(60754),
                i = a(87953),
                s = a(91676),
                n = a(49574),
                o = a(95428);
            let l = r.gK
                .compose(
                    r.gK.model('GenresPageModel', { title: r.gK.maybeNull(r.gK.string), items: r.gK.array(s.Gc), errorStatusCode: r.gK.maybeNull(r.gK.number) }),
                    o.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === n.GuX.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === i.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { landing3Resource: a, modelActionsLogger: o } = (0, r._$)(e);
                        if (e.loadingState !== n.GuX.PENDING)
                            try {
                                e.loadingState = n.GuX.PENDING;
                                let o = (yield a.getMetatags({})).trees.find((e) => e.navigationId === t);
                                if (!o) {
                                    e.errorStatusCode = i.X1.NOT_FOUND;
                                    return;
                                }
                                (e.title = o.title), (e.items = (0, r.wg)(o.leaves.map(s.kc))), e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.RESOLVE);
                            } catch (t) {
                                o.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = n.GuX.IDLE), (e.title = null), (e.items = (0, r.wg)([])), (e.errorStatusCode = null);
                    },
                }));
            a(25438);
            var d = a(4324);
        },
        1340: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => o });
            var r = a(55178),
                i = a(91027),
                s = a(72676),
                n = a(49574);
            let o = (e) => {
                let { isEnabled: t, intervalMs: a, modal: o, playbackId: l, sonataState: d, isPaywallOpen: u } = e,
                    c = (0, r.useRef)(new Date()),
                    h = (0, n.eGp)(),
                    g = (0, i.c)(() => {
                        c.current = new Date();
                    }),
                    m = (0, i.c)(() => {
                        c.current.getTime() < Date.now() - (null != a ? a : 18e5) && !u && (o.open(), g());
                    });
                (0, r.useEffect)(() => {
                    if (!t) return;
                    let e =
                        null == h
                            ? void 0
                            : h.getState(l).playerState.status.onChange((e) => {
                                  e === s.MT.ENDED && m();
                              });
                    return () => {
                        null == e || e();
                    };
                }, [t, h, m, l]),
                    (0, r.useEffect)(() => {
                        t && o.isOpened && (null == h || h.pause(l));
                    }, [t, o.isOpened, h, d.status, l]),
                    (0, r.useEffect)(() => {
                        if (!t) return;
                        let e = new AbortController();
                        return (
                            window.addEventListener('mousemove', g, { signal: e.signal }),
                            window.addEventListener('keydown', g, { signal: e.signal }),
                            window.addEventListener('touchstart', g, { signal: e.signal }),
                            () => {
                                e.abort();
                            }
                        );
                    }, [t, g]);
            };
        },
        1918: (e) => {
            e.exports = {
                root: 'UgcUploadCenterNotification_root__K_U0z',
                title: 'UgcUploadCenterNotification_title__s3yTL',
                link: 'UgcUploadCenterNotification_link__NPz6r',
            };
        },
        3069: (e, t, a) => {
            'use strict';
            a.d(t, { GenreArtistsPage: () => _ });
            var r = a(32290),
                i = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(60900),
                l = a(59824),
                d = a(91027),
                u = a(46049),
                c = a(71926),
                h = a(32381),
                g = a(58634),
                m = a(75645),
                y = a(20194),
                p = a(49574),
                v = a(44574),
                S = a(95393),
                E = a(20843),
                f = a(33797),
                b = a(57401),
                P = a.n(b);
            let _ = (0, i.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { artistsSubpage: i },
                    } = (0, p.Pjs)(),
                    { formatMessage: b } = (0, o.A)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    C = (0, p.W6M)(),
                    k = (0, d.c)(() => 315),
                    T = (0, d.c)(() => {
                        var e;
                        return !i.isShimmerVisible && (null == (e = i.pagesLoader.pager) ? void 0 : e.total) ? i.pagesLoader.pager.total : 30;
                    }),
                    A = (0, n.useCallback)(
                        (e) => {
                            t && i.getData({ metatagId: t, page: e, pageSize: S.c });
                        },
                        [i, t],
                    ),
                    D = (0, p.ws4)({ pageSize: S.c, callback: A });
                (0, p.XcE)(i.pagesLoader, A);
                let N = (0, d.c)((e) => {
                    let t = i.items[e],
                        a = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.artist' }) });
                    return t ? (0, r.jsx)(g.ao, { artist: t, contentLinesCount: 3 }, t.id) : (0, r.jsx)(v.Vt, { 'aria-label': a, round: !0, centered: !0 });
                });
                return ((0, n.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                ),
                i.isNotFound && (0, s.notFound)(),
                (0, p.Jzs)(i.isResolved),
                ((e) => {
                    (0, n.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => {
                            var t, a, r;
                            return {
                                id: '',
                                title: { title: '', fullTitle: e.fullTitle || '' },
                                artists: e.items.map((e) => ({ artist: (0, f.NE)(e), popularTracks: [] })),
                                pager: {
                                    page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                    perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                    total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                },
                            };
                        })(e);
                        (0, E.i)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, p.jxB)(e);
                        });
                    }, [e]);
                })(i),
                t && i.isNeededToLoad && (0, n.use)(i.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: S.c })),
                i.isSomethingWrong)
                    ? (0, r.jsx)(h.w, {})
                    : (0, r.jsx)(p.nVz, {
                          pageId: p._Q$.GENRE_ARTISTS,
                          children: (0, r.jsx)(m.hO, {
                              scrollElement: _,
                              outerTitle: i.fullTitle,
                              children: (0, r.jsxs)('div', {
                                  className: P().root,
                                  ...(0, l.Am)(l.Xk.genre.GENRE_ARTISTS_PAGE),
                                  children: [
                                      (0, r.jsx)(v.Y9, {
                                          variant: v.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: C.canBack,
                                          children: (0, r.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.fullTitle }),
                                      }),
                                      (0, r.jsxs)(u.N, {
                                          ref: I,
                                          className: P().root,
                                          containerClassName: P().container,
                                          children: [
                                              (0, r.jsx)(y.Q$, {
                                                  maxColumnCount: 7,
                                                  count: T(),
                                                  rowGap: 16,
                                                  columnGap: 16,
                                                  getEstimateRowSize: k,
                                                  minColumnWidth: 170,
                                                  maxColumnWidth: 270,
                                                  onChangeRange: D,
                                                  renderItemByIndex: N,
                                              }),
                                              (0, r.jsx)(v.A, { children: (0, r.jsx)(v.wi, { className: P().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        3092: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        4324: (e, t, a) => {
            'use strict';
            a.d(t, { GenresPage: () => p });
            var r = a(32290),
                i = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(46049),
                l = a(71926),
                d = a(32381),
                u = a(75645),
                c = a(91676),
                h = a(49574),
                g = a(44574),
                m = a(86568),
                y = a.n(m);
            let p = (0, i.PA)((e) => {
                let { navigationId: t } = e,
                    { genres: a } = (0, h.Pjs)(),
                    { contentScrollRef: i, setContentScrollRef: m } = (0, h.gKY)(),
                    p = (0, h.W6M)();
                return ((0, n.useEffect)(
                    () => () => {
                        a.reset();
                    },
                    [a, t],
                ),
                a.isNotFound && (0, s.notFound)(),
                (0, h.Jzs)(a.isResolved),
                t && a.isNeededToLoad && (0, n.use)(a.getData(t)),
                a.isRejected)
                    ? (0, r.jsx)(d.w, {})
                    : (0, r.jsxs)(u.hO, {
                          scrollElement: i,
                          outerTitle: a.title,
                          children: [
                              (0, r.jsx)(g.Y9, {
                                  variant: g.Vw.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: p.canBack,
                                  children: (0, r.jsx)(l.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: a.title }),
                              }),
                              (0, r.jsx)(o.N, {
                                  className: y().root,
                                  containerClassName: y().content,
                                  ref: m,
                                  children: (0, r.jsx)('div', {
                                      className: y().list,
                                      children: a.items.map((e) => (0, r.jsx)(c.G4, { tag: e.tag, title: e.title, subGenres: e.subGenres }, e.tag)),
                                  }),
                              }),
                          ],
                      });
            });
        },
        7027: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { PrefetchDataProvider: () => l });
            var r = a(96103),
                i = a(55178),
                s = a(49574),
                n = a(80880);
            let o = async (e) => {
                    let { experimentsData: t, userAccountData: a, userId: r, store: i, withPins: s = !0 } = e,
                        { user: n, experiments: o, pinsCollection: l, disclaimersDictionary: d } = i;
                    if ((await n.getAbout(a), n.puid && r.setPassportUid(n.puid), await Promise.allSettled([o.getData(t), d.getDisclaimers()]), n.isAuthorized)) {
                        let e = [n.getSettings(), i.library.getData()];
                        s && e.push(l.getData()), await Promise.allSettled(e);
                    }
                },
                l = (0, r.PA)((e) => {
                    let { children: t, ...a } = e,
                        r = (0, s.Pjs)(),
                        l = (0, s.NFA)().get(s.WA$);
                    return (
                        (0, n.setClientSideLayout)(r.settings),
                        r.user.puid && l.setPassportUid(r.user.puid),
                        r.user.account.loadingState === s.GuX.IDLE && (0, i.use)(o({ store: r, userId: l, ...a })),
                        t
                    );
                });
        },
        8960: (e) => {
            e.exports = { root: 'BrowserUpdateNotification_root__IN495', important: 'BrowserUpdateNotification_important__6k4Gb' };
        },
        9905: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        11563: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialPlaylistsPage: () => f });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(59824),
                u = a(91027),
                c = a(6752),
                h = a(71926),
                g = a(32381),
                m = a(75645),
                y = a(50510),
                p = a(49574),
                v = a(44574),
                S = a(78635),
                E = a.n(S);
            let f = (0, s.PA)((e) => {
                var t, a, s;
                let { id: S } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: f },
                        settings: { isMobile: b },
                    } = (0, p.Pjs)(),
                    P = (0, p.W6M)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    { formatMessage: C } = (0, l.A)(),
                    k = (0, u.c)((e) => {
                        f.getPlaylists({ page: e, pageSize: 20 });
                    });
                f.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f],
                    );
                let T = (0, c.L)(() => ({ Footer: () => (0, r.jsx)(v.A, { children: (0, r.jsx)(v.wi, { className: E().footer }) }) }));
                if (
                    ((0, p.Jzs)(f.isResolved),
                    (0, p.XcE)(f.pagesLoader, k),
                    f.isNeededToLoad && (0, o.use)(f.getData({ id: S, page: 0, pageSize: 20 })),
                    f.isSomethingWrong)
                )
                    return (0, r.jsx)(g.w, {});
                let A = f.isLoading ? 20 : null != (a = null == (t = f.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                return (0, r.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, r.jsx)(m.hO, {
                        scrollElement: _,
                        outerTitle: f.title,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, r.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: P.canBack,
                                    children: (0, r.jsx)(h.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: f.title }),
                                }),
                                (0, r.jsx)(v.$$, {
                                    context: { listAriaLabel: C({ id: 'mixes.playlists-list' }, { genreName: f.title || '' }) },
                                    className: (0, i.$)(E().scrollContainer, E().important),
                                    customComponents: T,
                                    itemContentCallback: (e) => {
                                        let t = f.playlists[e],
                                            a = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.playlist' }) });
                                        return t ? (0, r.jsx)(y.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(v.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: A,
                                    onGetDataByPage: k,
                                    pageSize: 20,
                                    totalRequests: null != (s = f.pagesLoader.requestsCount) ? s : 0,
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    handleRef: I,
                                    isMobileLayout: b,
                                    useWindowScroll: b,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        15112: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePlaylistsPage: () => b });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(59824),
                u = a(71926),
                c = a(32381),
                h = a(75645),
                g = a(50510),
                m = a(49574),
                y = a(44574),
                p = a(95393),
                v = a(36023),
                S = a(55550),
                E = a(95787),
                f = a.n(E);
            let b = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { playlistsSubpage: s },
                        settings: { isMobile: E },
                    } = (0, m.Pjs)(),
                    { formatMessage: b } = (0, l.A)(),
                    { contentScrollRef: P, setContentScrollRef: _ } = (0, m.gKY)(),
                    I = (0, m.W6M)(),
                    C = (0, o.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: p.c });
                        },
                        [s, t],
                    );
                (0, m.XcE)(s.pagesLoader, C),
                    (0, o.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, m.Jzs)(s.isResolved),
                    ((e) => {
                        (0, o.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, r;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    playlists: e.items.map(S.Ji),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                    },
                                };
                            })(e);
                            (0, v.H)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, m.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let k = (0, o.useMemo)(() => ({ Footer: () => (0, r.jsx)(y.A, { children: (0, r.jsx)(y.wi, { className: f().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, o.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: p.c })), s.isSomethingWrong))
                    return (0, r.jsx)(c.w, {});
                let T = s.isShimmerVisible ? 20 : s.items.length;
                return (0, r.jsx)(m.nVz, {
                    pageId: m._Q$.GENRE_PLAYLISTS,
                    children: (0, r.jsx)(h.hO, {
                        scrollElement: P,
                        outerTitle: s.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: f().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_PLAYLISTS_PAGE),
                            children: [
                                (0, r.jsx)(y.Y9, {
                                    variant: y.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: I.canBack,
                                    children: (0, r.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, r.jsx)(y.$$, {
                                    className: (0, i.$)(f().scrollContainer, f().important),
                                    customComponents: k,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = b({ id: 'loading-messages.entity-is-loading' }, { entityName: b({ id: 'entity-names.playlist' }) });
                                        return t ? (0, r.jsx)(g.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(y.Vt, { 'aria-label': a });
                                    },
                                    totalCount: T,
                                    onGetDataByPage: C,
                                    pageSize: p.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: f().content,
                                    itemClassName: f().item,
                                    handleRef: _,
                                    context: { listAriaLabel: b({ id: 'mixes.playlists-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: E,
                                    useWindowScroll: E,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        15910: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        16834: (e, t, a) => {
            'use strict';
            a.d(t, { KidsCategoryPage: () => P });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(59824),
                d = a(46049),
                u = a(71926),
                c = a(43557),
                h = a(32381),
                g = a(75645),
                m = a(49574),
                y = a(44574),
                p = a(75763),
                v = a.n(p),
                S = a(6752),
                E = a(35188),
                f = a.n(E);
            let b = (0, s.PA)(() => {
                    let { experiments: e } = (0, m.Pjs)(),
                        t = e.checkExperiment(m.zal.WebNextWaveAgentExperiment, 'on'),
                        a = (0, S.L)(() =>
                            t ? (0, r.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0, isShimmerCentered: !0 }) : (0, r.jsx)(c.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, r.jsxs)('div', {
                        className: f().root,
                        children: [
                            (0, r.jsx)('div', { children: a }),
                            (0, r.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                            (0, r.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                        ],
                    });
                }),
                P = (0, s.PA)((e) => {
                    let { categoryId: t } = e,
                        { kids: a, experiments: s } = (0, m.Pjs)(),
                        { contentScrollRef: p, setContentScrollRef: S } = (0, m.gKY)(),
                        E = (0, m.W6M)(),
                        f = s.checkExperiment(m.zal.WebNextNewNestedNonMusicLandings, 'on');
                    if (((0, o.useEffect)(() => () => a.landing.reset(), [a.landing]), (0, m.Jzs)(a.landing.isResolved), f)) {
                        let { href: e } = (0, m.uvd)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(t) } });
                        (0, n.redirect)(e);
                    }
                    a.landing.isLoadedAndEmpty && (0, n.notFound)();
                    let P = (0, c._9)(a.landing),
                        _ = (0, o.useMemo)(
                            () =>
                                a.landing.isLoading || a.landing.isNeededToLoad
                                    ? (0, r.jsx)(b, {})
                                    : (0, r.jsx)(c.EA, { landing: a.landing, errorComponent: (0, r.jsx)(h.w, { className: v().error, withBackwardControl: !1 }) }),
                            [a.landing.loadingState, a.landing],
                        );
                    return (
                        a.landing.isNeededToLoad && (0, o.use)(a.landing.getChildrenSkeleton({ categoryId: t })),
                        (0, r.jsx)(m.nVz, {
                            pageId: m._Q$.KIDS_CATEGORY,
                            children: (0, r.jsxs)(g.hO, {
                                scrollElement: p,
                                outerTitle: a.landing.title,
                                children: [
                                    (0, r.jsx)(y.Y9, {
                                        variant: y.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: E.canBack,
                                        children: (0, r.jsx)('div', {
                                            className: v().header,
                                            children: (0, r.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', children: a.landing.title }),
                                        }),
                                    }),
                                    (0, r.jsxs)(d.N, {
                                        className: v().root,
                                        containerClassName: v().content,
                                        ref: S,
                                        ...(0, l.Am)(l.Xk.kids.KIDS_CATEGORY_PAGE),
                                        children: [
                                            (0, r.jsx)('div', { className: (0, i.$)(v().landing, { [v().landing_onlyWizard]: P }), children: _ }),
                                            (0, r.jsx)(y.A, { children: (0, r.jsx)(y.wi, { className: v().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        17631: (e, t, a) => {
            'use strict';
            a.d(t, { oN: () => d.TagPage, vV: () => l });
            var r = a(60754),
                i = a(87953),
                s = a(55550),
                n = a(49574),
                o = a(95428);
            let l = r.gK
                .model('TagPage', {
                    title: r.gK.maybe(r.gK.string),
                    errorStatusCode: r.gK.maybeNull(r.gK.number),
                    tagLoadingState: r.gK.enumeration(Object.values(n.GuX)),
                    playlistsData: r.gK.array(r.gK.model({ uid: r.gK.number, kind: r.gK.number })),
                    pagesLoader: (0, o.Ij)(s.$o),
                })
                .views((e) => {
                    let t = {
                        get isNeededToLoad() {
                            return e.tagLoadingState === n.GuX.IDLE;
                        },
                        get isResolved() {
                            return e.tagLoadingState === n.GuX.RESOLVE;
                        },
                        get isNotFound() {
                            let t = e.pagesLoader.isEmpty;
                            return (e.tagLoadingState === n.GuX.REJECT && (e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST)) || t;
                        },
                        get isSomethingWrong() {
                            return e.tagLoadingState === n.GuX.REJECT && !t.isNotFound;
                        },
                        get playlists() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, r.L3)(function* (t) {
                            let { page: a = 0, pageSize: o = 20 } = t,
                                { playlistsResource: l, modelActionsLogger: d } = (0, r._$)(e);
                            if (e.tagLoadingState === n.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a))
                                try {
                                    e.pagesLoader.setPageState(a, n.GuX.PENDING);
                                    let t = a * o,
                                        r = e.playlistsData.slice(t, t + o),
                                        i = yield l.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        d = { page: a, perPage: o, total: e.playlistsData.length },
                                        u = i.playlists.map(s.jX);
                                    e.pagesLoader.setItems(u, { page: a, pager: d });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: n.FlZ.ERROR, page: a }),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.tagLoadingState = n.GuX.IDLE), (e.title = void 0), (e.playlistsData = (0, r.wg)([])), (e.errorStatusCode = null);
                        },
                        getTag: (0, r.L3)(function* (a) {
                            let { id: s, page: o = 0, pageSize: l = 20 } = a,
                                { tagResource: d, modelActionsLogger: u } = (0, r._$)(e);
                            if (e.tagLoadingState !== n.GuX.PENDING)
                                try {
                                    var c;
                                    e.tagLoadingState = n.GuX.PENDING;
                                    let a = yield d.getPlaylistIds({ id: s });
                                    (e.title = null == (c = a.tag) ? void 0 : c.name),
                                        (e.playlistsData = (0, r.wg)(a.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.tagLoadingState !== n.GuX.IDLE && (e.tagLoadingState = n.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: o, pageSize: l });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.tagLoadingState !== n.GuX.IDLE && (e.tagLoadingState = n.GuX.REJECT);
                                }
                        }),
                    };
                    return t;
                });
            a(81358);
            var d = a(21826);
        },
        17852: (e) => {
            e.exports = {
                root: 'ConcertPage_root__pqTvU',
                averageColorBackground: 'ConcertPage_averageColorBackground__wj67a',
                header: 'ConcertPage_header__FxHk1',
                container: 'ConcertPage_container__ca9h4',
                footer: 'ConcertPage_footer____Dnb',
                skeleton: 'ConcertPage_skeleton__8aWkf',
                error: 'ConcertPage_error__gcEp_',
            };
        },
        18889: (e, t, a) => {
            'use strict';
            var r;
            a.d(t, { Q: () => r }),
                (function (e) {
                    (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists');
                })(r || (r = {}));
        },
        19182: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        19341: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ContainerProvider: () => u });
            var r = a(32290),
                i = a(55178),
                s = a(49574),
                n = a(44574);
            let o = null,
                l = async (e) => {
                    var t;
                    let {
                            userAgent: a,
                            hostTld: r,
                            forwardedForY: i,
                            changeLanguageToken: n,
                            tracestate: o,
                            traceparent: l,
                            icookie: d,
                            serverDetectedLocale: u,
                            env: c,
                            browserName: h,
                            browserVersion: g,
                            executionContextStore: m,
                            customApiPrefixUrl: y,
                            customApiToken: p,
                        } = e,
                        v = await (0, s.MyF)({
                            userAgent: a,
                            tld: r,
                            forwardedForY: i,
                            changeLanguageToken: n,
                            tracestate: o,
                            traceparent: l,
                            icookie: d,
                            serverDetectedLocale: u,
                            env: c,
                            browserName: h,
                            browserVersion: g,
                            executionContextStore: m,
                            customApiPrefixUrl: y,
                            customApiToken: p,
                        });
                    return await v.get(s.Xc9).loadDictionary(), await (null == (t = await v.get(s.RGd)) ? void 0 : t()), v;
                },
                d = (e) => {
                    let { children: t, containerLoader: a } = e;
                    return o || (o = (0, i.use)(a)), (0, r.jsx)(s.Bz0.Provider, { value: o, children: t });
                },
                u = (e) => {
                    let {
                            children: t,
                            hostTld: a,
                            env: s,
                            forwardedForY: o,
                            tracestate: u,
                            traceparent: c,
                            icookie: h,
                            changeLanguageToken: g,
                            serverDetectedLocale: m,
                            userAgent: y,
                            browserName: p,
                            browserVersion: v,
                            executionContextStore: S,
                            customApiPrefixUrl: E,
                            customApiToken: f,
                        } = e,
                        b = l({
                            userAgent: y,
                            hostTld: a,
                            forwardedForY: o,
                            changeLanguageToken: g,
                            tracestate: u,
                            traceparent: c,
                            icookie: h,
                            serverDetectedLocale: m,
                            env: s,
                            browserName: p,
                            browserVersion: v,
                            executionContextStore: S,
                            customApiPrefixUrl: E,
                            customApiToken: f,
                        });
                    return (0, r.jsx)(i.Suspense, { fallback: (0, r.jsx)(n.JR, {}), children: (0, r.jsx)(d, { containerLoader: b, children: t }) });
                };
        },
        20843: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(49574),
                i = a(43993),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: o, tld: l, host: d } = t,
                    u = await (0, r.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = 'artists' in e ? e.artists : void 0,
                    m = (0, i.f)({ genreTitle: c, artists: g, messageFormatter: u }),
                    y = s.env.ASSET_PREFIX || '',
                    p = ''.concat(d).concat(y, '/meta/og-image.png');
                return {
                    title: h,
                    description: m,
                    openGraph: (0, r.i$E)({
                        ogTitle: (0, r.NsT)(c),
                        ogDescription: m,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: p,
                    }),
                    twitter: (0, r.HRN)({ cardType: r.WfF.APP, title: h, url: null != o ? o : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X5i)({
                        additional: { tld: l, url: null != o ? o : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, r.SEs)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        20852: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopPaywallInitializer: () => o });
            var r = a(96103),
                i = a(55178),
                s = a(70524),
                n = a(49574);
            let o = (0, r.PA)(() => {
                let { desktopPaywall: e, user: t } = (0, n.Pjs)(),
                    { isFreemium: a } = (0, n.XCI)(),
                    { shouldShowFamilyInvite: r } = (0, s.hj)();
                (0, i.useEffect)(() => {
                    if (t.account.isResolved && (!t.isAuthorized || a) && !r)
                        return (
                            e.shouldShowOnEnter && e.showPaywall(),
                            e.startCrackdownTimeout(),
                            () => {
                                e.clearCrackdownTimeout();
                            }
                        );
                }, [e, a, r, t.account.isResolved, t.isAuthorized]);
            });
        },
        21826: (e, t, a) => {
            'use strict';
            a.d(t, { TagPage: () => v });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(71926),
                u = a(32381),
                c = a(75645),
                h = a(50510),
                g = a(49574),
                m = a(44574),
                y = a(66652),
                p = a.n(y);
            let v = (0, s.PA)((e) => {
                var t, a, s;
                let { tagId: y } = e,
                    {
                        tag: v,
                        settings: { isMobile: S },
                    } = (0, g.Pjs)(),
                    { formatMessage: E } = (0, l.A)(),
                    { contentScrollRef: f, setContentScrollRef: b } = (0, g.gKY)(),
                    P = (0, g.W6M)();
                y || (0, n.notFound)();
                let _ = (0, o.useCallback)(
                    (e) => {
                        v.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [v],
                );
                v.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            v.reset();
                        },
                        [v],
                    );
                let I = (0, o.useMemo)(() => ({ Footer: () => (0, r.jsx)(m.A, { children: (0, r.jsx)(m.wi, { className: p().footer }) }) }), []);
                return ((0, g.Jzs)(v.isResolved),
                (0, g.XcE)(v.pagesLoader, _),
                v.isNeededToLoad && (0, o.use)(v.getTag({ id: y, page: 0, pageSize: 20 })),
                v.isSomethingWrong)
                    ? (0, r.jsx)(u.w, {})
                    : (0, r.jsx)(g.nVz, {
                          pageId: g._Q$.TAG,
                          children: (0, r.jsx)(c.hO, {
                              scrollElement: f,
                              outerTitle: v.title,
                              children: (0, r.jsxs)('div', {
                                  className: p().root,
                                  children: [
                                      (0, r.jsx)(m.Y9, {
                                          variant: m.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: P.canBack,
                                          children: (0, r.jsx)(d.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: v.title }),
                                      }),
                                      (0, r.jsx)(m.$$, {
                                          className: (0, i.$)(p().scrollContainer, p().important),
                                          customComponents: I,
                                          itemContentCallback: (e) => {
                                              let t = v.playlists[e],
                                                  a = E({ id: 'loading-messages.entity-is-loading' }, { entityName: E({ id: 'entity-names.playlist' }) });
                                              return t ? (0, r.jsx)(h.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(m.Vt, { 'aria-label': a });
                                          },
                                          totalCount: null != (a = null == v || null == (t = v.pagesLoader.pager) ? void 0 : t.total) ? a : 0,
                                          onGetDataByPage: _,
                                          pageSize: 20,
                                          totalRequests: null != (s = null == v ? void 0 : v.pagesLoader.requestsCount) ? s : 0,
                                          listClassName: p().content,
                                          itemClassName: p().item,
                                          handleRef: b,
                                          context: { listAriaLabel: E({ id: 'mixes.albums-list' }, { genreName: v.title || '' }) },
                                          isMobileLayout: S,
                                          useWindowScroll: S,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        25438: (e, t, a) => {
            'use strict';
            a.d(t, { GenresNotFoundPage: () => s });
            var r = a(32290),
                i = a(80719);
            let s = () => (0, r.jsx)(i.M, {});
        },
        25500: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var r = a(95415),
                i = a(87748),
                s = (function (e) {
                    return (e.WEB = 'YandexMusicWebNext'), (e.DESKTOP = 'YandexMusicDesktopApp'), e;
                })({});
            let n = () => ''.concat(s.DESKTOP).concat((0, i.t)((0, r.u)()));
        },
        28821: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialAlbumsPage: () => f });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(59824),
                u = a(91027),
                c = a(6752),
                h = a(71926),
                g = a(32381),
                m = a(16486),
                y = a(75645),
                p = a(49574),
                v = a(44574),
                S = a(72461),
                E = a.n(S);
            let f = (0, s.PA)((e) => {
                var t, a, s, S;
                let { id: f } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: b },
                        settings: { isMobile: P },
                    } = (0, p.Pjs)(),
                    _ = (0, p.W6M)(),
                    { contentScrollRef: I, setContentScrollRef: C } = (0, p.gKY)(),
                    { formatMessage: k } = (0, l.A)(),
                    T = (0, u.c)((e) => {
                        b.getAlbums({ page: e, pageSize: 20 });
                    });
                b.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            b.reset();
                        },
                        [b],
                    );
                let A = (0, c.L)(() => ({ Footer: () => (0, r.jsx)(v.A, { children: (0, r.jsx)(v.wi, { className: E().footer }) }) }));
                if (
                    ((0, p.Jzs)(b.isResolved),
                    (0, p.XcE)(b.pagesLoader, T),
                    b.isNeededToLoad && (0, o.use)(b.getData({ id: f, page: 0, pageSize: 20 })),
                    b.isSomethingWrong)
                )
                    return (0, r.jsx)(g.w, {});
                let D = b.isLoading ? 20 : null != (s = null == (a = b.pagesLoader) || null == (t = a.pager) ? void 0 : t.total) ? s : 0;
                return (0, r.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, r.jsx)(y.hO, {
                        scrollElement: I,
                        outerTitle: b.title,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, r.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: _.canBack,
                                    children: (0, r.jsx)(h.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: b.title }),
                                }),
                                (0, r.jsx)(v.$$, {
                                    context: { listAriaLabel: k({ id: 'mixes.albums-list' }, { genreName: b.title || '' }) },
                                    className: (0, i.$)(E().scrollContainer, E().important),
                                    customComponents: A,
                                    itemContentCallback: (e) => {
                                        let t = b.albums[e],
                                            a = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, r.jsx)(m.aX, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                            : (0, r.jsx)(v.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: D,
                                    onGetDataByPage: T,
                                    pageSize: 20,
                                    totalRequests: null != (S = b.pagesLoader.requestsCount) ? S : 0,
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    handleRef: C,
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        29408: (e, t, a) => {
            'use strict';
            a.d(t, { mK: () => c, mW: () => h });
            var r = a(55178),
                i = a(49574),
                s = a(36795),
                n = a(92708),
                o = a(60754),
                l = a(71483),
                d = a(80864),
                u = a(93510);
            let c = o.gK
                    .model('ContinueListen', {
                        track: o.gK.maybe(d.vj),
                        trackIndex: o.gK.maybe(o.gK.number),
                        contextType: o.gK.maybeNull(o.gK.enumeration(Object.values(l.K))),
                        contextId: o.gK.maybeNull(o.gK.union(o.gK.string, o.gK.number)),
                        albumDuration: o.gK.maybe(o.gK.number),
                        albumStreamProgress: o.gK.optional(u.B9, { endPositionSec: 0 }),
                        trackTempStreamProgress: o.gK.optional(u.B9, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: r, track: i, isDefaultTrack: s } = t;
                            (s && e.track) || ((e.contextType = a), (e.contextId = r), (e.track = (0, o.wg)((0, n.HO)(i))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                h = (0, a(96103).PA)(() => {
                    ((e) => {
                        var t;
                        let { sonataState: a, continueListen: n } = (0, i.Pjs)();
                        (0, r.useEffect)(() => {
                            var t, r, i, o, l, d, u, c;
                            if (!e || (!(null == (t = a.entityMeta) ? void 0 : t.isPodcast) && !(null == (r = a.entityMeta) ? void 0 : r.isAudiobook))) return;
                            let h = e.state.queueState.index.value;
                            e.state.queueState.order.value.length > 0 && 'number' == typeof h && n.saveTrackIndex(h);
                            let g = null == (i = e.state.currentContext.value) ? void 0 : i.data.meta;
                            if (
                                g &&
                                a.contextType &&
                                a.contextId &&
                                (n.saveTrack({ contextType: a.contextType, contextId: a.contextId, track: a.entityMeta }), a.entityMeta.isAudiobook)
                            ) {
                                if ('volumes' in g && g.volumes) {
                                    let e,
                                        t = ((e, t) => {
                                            let a = !0;
                                            return (0, s.A)(e).reduce((e, r) => {
                                                if (!r.durationMs) return e;
                                                if (r.id === t) {
                                                    var i;
                                                    return (a = !1), e + ((null == (i = r.streamProgress) ? void 0 : i.endPositionSec) || 0);
                                                }
                                                return a ? e + r.durationMs / 1e3 : e;
                                            }, 0);
                                        })(g.volumes, a.entityMeta.id);
                                    'durationSec' in g && (e = g.durationSec),
                                        n.saveAlbumDuration(e),
                                        null == (d = n.trackTempStreamProgress) ||
                                            d.updateEndPositionSec((null == (l = n.track) || null == (o = l.streamProgress) ? void 0 : o.endPositionSec) || 0),
                                        null == (u = n.albumStreamProgress) || u.updateEndPositionSec(t);
                                }
                                'listeningFinished' in g && (null == (c = n.albumStreamProgress) || c.updateEverFinished(g.listeningFinished || !1));
                            }
                        }, [null == (t = a.entityMeta) ? void 0 : t.id, a.entityMeta, a.contextType, a.contextId, e, n]);
                    })((0, i.eGp)());
                });
        },
        32629: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var r = a(39472),
                i = a(25500);
            let s = () => {
                let e,
                    t = (0, r.H)() || '1.0.0';
                return (e = (0, i.y)()), ''.concat(e, '/').concat(t);
            };
        },
        32924: (e, t, a) => {
            'use strict';
            a.d(t, { PostNotFoundPage: () => n });
            var r = a(32290),
                i = a(96103),
                s = a(80719);
            let n = (0, i.PA)(() => (0, r.jsx)(s.M, {}));
        },
        34627: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        35188: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        36023: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n });
            var r = a(49574),
                i = a(43993),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: o, tld: l, host: d } = t,
                    u = await (0, r.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = (0, i.f)({ genreTitle: c, messageFormatter: u }),
                    m = s.env.ASSET_PREFIX || '',
                    y = ''.concat(d).concat(m, '/meta/og-image.png');
                return {
                    title: h,
                    description: g,
                    openGraph: (0, r.i$E)({
                        ogTitle: (0, r.NsT)(c),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: y,
                    }),
                    twitter: (0, r.HRN)({ cardType: r.WfF.APP, title: h, url: null != o ? o : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X5i)({
                        additional: { tld: l, url: null != o ? o : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, r.SEs)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        36131: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        37786: (e, t, a) => {
            'use strict';
            a.d(t, {
                rJ: () => D.ArtistAlbumsPage,
                GH: () => N.ArtistClipsPage,
                cC: () => R.ArtistConcertsPage,
                Sd: () => x.ArtistFamiliarPage,
                ZQ: () => L.ArtistPage,
                E: () => A,
                Wy: () => w.ArtistSimilarPage,
                fD: () => O.ArtistTracksPage,
            }),
                a(57707),
                a(43144),
                a(66491),
                a(35420),
                a(33354),
                a(98736),
                a(70743),
                a(62978),
                a(94331);
            var r = a(60754),
                i = a(87953),
                s = a(43557),
                n = a(58634),
                o = a(49574),
                l = a(95428),
                d = a(421),
                u = a(33797),
                c = a(16486),
                h = a(21994);
            let g = r.gK
                .compose(
                    r.gK.model('ArtistAlbumsPage', {
                        pagesLoader: (0, l.Ij)(c.JC),
                        variant: r.gK.maybeNull(r.gK.enumeration(Object.values(h.h))),
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                    }),
                    l.pl,
                )
                .views((e) => ({
                    get isNotFound() {
                        var t, a;
                        let r = e.pagesLoader.isSomePageResolved && (null != (a = null == (t = e.pagesLoader.items) ? void 0 : t.length) ? a : 0) === 0,
                            s = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                        return (e.pagesLoader.isInitialRequestRejected && s) || r;
                    },
                    get isShimmerVisible() {
                        return !e.pagesLoader.isSomePageResolved;
                    },
                    get isNeededToLoad() {
                        return e.pagesLoader.isNeedToMakeInitialRequest;
                    },
                    get isRejected() {
                        return e.pagesLoader.isInitialRequestRejected;
                    },
                    get isResolved() {
                        return e.pagesLoader.isSomePageResolved;
                    },
                    get requestsCount() {
                        return e.pagesLoader.requestsCount;
                    },
                    get items() {
                        var r;
                        return null != (r = e.pagesLoader.items) ? r : [];
                    },
                }))
                .actions((e) => ({
                    setVariant: (t) => {
                        e.variant = t;
                    },
                    getData: (0, r.L3)(function* (t) {
                        let { artistId: a, page: s = 0, pageSize: n = 20, sort: l, preloadedAlbums: d } = t,
                            { artistsResource: u, modelActionsLogger: g } = (0, r._$)(e);
                        if (e.pagesLoader.isPageNeedToLoad(s))
                            try {
                                e.pagesLoader.setPageState(s, o.GuX.PENDING);
                                let t = { artistId: a, page: s, pageSize: n, sort: { sortBy: null == l ? void 0 : l.sortBy } },
                                    r = d;
                                if (!r)
                                    switch (e.variant) {
                                        case h.h.COMPILATIONS:
                                            r = yield u.getAlsoAlbums(t);
                                            break;
                                        case h.h.DISCOGRAPHY:
                                            r = yield u.getDiscographyAlbums(t);
                                            break;
                                        default:
                                            r = yield u.getDirectAlbums(t);
                                    }
                                let i = r.albums.map(c.pp);
                                e.pagesLoader.setItems(i, { page: s, pager: { page: s, perPage: n, total: r.pager.total } });
                            } catch (t) {
                                g.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.pagesLoader.setItems(null, { responseStatus: o.FlZ.ERROR, page: s });
                            }
                    }),
                    reset() {
                        (e.variant = null), (e.errorStatusCode = null), e.pagesLoader.reset();
                    },
                }));
            var m = a(11135);
            let y = r.gK
                .model('ArtistClipsPage', { pagesLoader: (0, l.Ij)(m.kv), errorStatusCode: r.gK.maybeNull(r.gK.number) })
                .views((e) => ({
                    get isShimmerVisible() {
                        return !e.pagesLoader.isSomePageResolved;
                    },
                    get isNeededToLoad() {
                        return e.pagesLoader.isNeedToMakeInitialRequest;
                    },
                    get isRejected() {
                        return e.pagesLoader.isInitialRequestRejected;
                    },
                    get isEmpty() {
                        return e.pagesLoader.isEmpty;
                    },
                    get isResolved() {
                        return e.pagesLoader.isSomePageResolved;
                    },
                    get requestsCount() {
                        return e.pagesLoader.requestsCount;
                    },
                    get items() {
                        var t;
                        return null != (t = e.pagesLoader.items) ? t : [];
                    },
                    get isNotFound() {
                        return this.isRejected && e.errorStatusCode === i.X1.NOT_FOUND;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { artistId: a, page: s = 0, pageSize: n = 20, preloadedClips: l } = t,
                            { artistsResource: d, modelActionsLogger: u } = (0, r._$)(e);
                        if (e.pagesLoader.isPageNeedToLoad(s))
                            try {
                                e.pagesLoader.setPageState(s, o.GuX.PENDING);
                                let t = l;
                                t || (t = yield d.getClips({ artistId: a, page: s, pageSize: n }));
                                let r = t.items.map((e) => (0, m.SZ)({ clip: e.data.clip, artists: e.data.artists }));
                                e.pagesLoader.setItems(r, { page: s, pager: t.pager });
                            } catch (t) {
                                u.error(t),
                                    e.pagesLoader.setItems(null, { responseStatus: o.FlZ.ERROR, page: s }),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND);
                            }
                    }),
                    reset() {
                        e.pagesLoader.reset(), (e.errorStatusCode = null);
                    },
                }));
            var p = a(73298);
            let v = r.gK
                .compose(
                    r.gK.model('ArtistConcertsPage', {
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        concerts: r.gK.maybeNull(r.gK.array(p.aR)),
                        artistTitle: r.gK.maybeNull(r.gK.string),
                    }),
                    l.pl,
                    l.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                    },
                    get isNotFound() {
                        var t;
                        let a = e.isResolved && (null == (t = e.concerts) ? void 0 : t.length) === 0,
                            r = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                        return (e.isRejected && r) || a;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { artistId: a, preloadedConcerts: s } = t,
                            { artistsResource: n, modelActionsLogger: l } = (0, r._$)(e);
                        if (e.loadingState !== o.GuX.PENDING)
                            try {
                                e.loadingState = o.GuX.PENDING;
                                let t = null == s ? void 0 : s.concerts,
                                    i = null == s ? void 0 : s.artistTitle;
                                if (!t) {
                                    let s = (0, r.Zn)(e).concerts.concertsLocationForRequest,
                                        o = yield n.getConcerts({ artistId: a, locations: s });
                                    (t = o.concerts), (i = o.artistTitle);
                                }
                                (e.concerts = (0, r.wg)(t.map(p.oP))), (e.artistTitle = null != i ? i : null), (e.loadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = o.GuX.IDLE), (e.errorStatusCode = null), (e.artistTitle = null), e.destroyItems([e.concerts]);
                    },
                }));
            var S = a(80864);
            let E = (e) => (0, r.wg)({ ...(0, c.sK)({ album: e, artists: e.artists }), version: e.version }),
                f = r.gK
                    .compose(
                        r.gK.model('ArtistFamiliarPage', {
                            errorStatusCode: r.gK.maybeNull(r.gK.number),
                            vibeTracks: r.gK.maybeNull(r.gK.array(S.vj)),
                            collectionTracks: r.gK.maybeNull(r.gK.array(S.vj)),
                            collectionAlbums: r.gK.maybeNull(r.gK.array(c.JC)),
                        }),
                        l.pl,
                        l.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get hasCollectionEntities() {
                                var a, r;
                                return (
                                    (e.isResolved && Number(null == (a = e.collectionTracks) ? void 0 : a.length) > 0) ||
                                    Number(null == (r = e.collectionAlbums) ? void 0 : r.length) > 0
                                );
                            },
                            get shouldShowTitleBlocks() {
                                var s, n;
                                if (t.isLoading) return !0;
                                return (
                                    Number(null == (s = e.collectionTracks) ? void 0 : s.length) > 0 && Number(null == (n = e.collectionAlbums) ? void 0 : n.length) > 0
                                );
                            },
                            get hasVibeTracks() {
                                var l;
                                return Number(null == (l = e.vibeTracks) ? void 0 : l.length) > 0;
                            },
                            get collectionEntitiesData() {
                                var d, u;
                                return null != (u = null == (d = e.collectionTracks) ? void 0 : d.map(S.$b)) ? u : [];
                            },
                            get vibeEntitiesData() {
                                var c, h;
                                return null != (h = null == (c = e.vibeTracks) ? void 0 : c.map(S.$b)) ? h : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { artistId: a, preloadedFamiliar: s } = t,
                                { artistsResource: n, modelActionsLogger: l } = (0, r._$)(e);
                            if (e.loadingState !== o.GuX.PENDING)
                                try {
                                    var d, u, c, h, g, m;
                                    e.loadingState = o.GuX.PENDING;
                                    let t = s;
                                    t || (t = yield n.getFamiliarYou({ artistId: a, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 })),
                                        (e.vibeTracks = (0, r.wg)(null == (u = t.wave) || null == (d = u.tracks) ? void 0 : d.map((e) => (0, S.vU)(e)))),
                                        (e.collectionTracks = (0, r.wg)(null == (h = t.collection) || null == (c = h.tracks) ? void 0 : c.map((e) => (0, S.vU)(e)))),
                                        (e.collectionAlbums = (0, r.wg)(null == (m = t.collection) || null == (g = m.albums) ? void 0 : g.map(E))),
                                        (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = o.GuX.IDLE), (e.errorStatusCode = null), e.destroyItems([e.vibeTracks, e.collectionTracks]);
                        },
                    })),
                b = r.gK
                    .compose(
                        r.gK.model('ArtistSimilarArtistsPage', { errorStatusCode: r.gK.maybeNull(r.gK.number), similarArtists: r.gK.maybeNull(r.gK.array(u.PK)) }),
                        l.pl,
                        l.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                        },
                        get isNotFound() {
                            var t;
                            let a = e.isResolved && (null == (t = e.similarArtists) ? void 0 : t.length) === 0,
                                r = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                            return (e.isRejected && r) || a;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { artistId: a, preloadedSimilarArtists: s } = t,
                                { artistsResource: n, modelActionsLogger: l } = (0, r._$)(e);
                            try {
                                e.loadingState = o.GuX.PENDING;
                                let t = s;
                                t || (t = yield n.getSimilarArtists({ artistId: a })),
                                    (e.similarArtists = (0, r.wg)(t.similarArtists.map(u.dM))),
                                    e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = o.GuX.IDLE), (e.errorStatusCode = null), e.destroyItems([e.similarArtists]);
                        },
                    })),
                P = r.gK.model('CommonSubPage', { artistName: r.gK.maybeNull(r.gK.string) });
            var _ = a(1131);
            let I = r.gK
                .compose(
                    r.gK.model('FullTracksList', {
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        ids: r.gK.maybeNull(r.gK.array(r.gK.string)),
                        tracks: r.gK.optional(r.gK.map(S.vj), {}),
                    }),
                    l.pl,
                    l.XT,
                )
                .views((e) => ({
                    getTrackByIndex(t) {
                        if (!e.ids || !e.ids.length) return null;
                        let a = e.ids[t];
                        return (a && e.tracks.get(a)) || null;
                    },
                    get isNotFound() {
                        var t;
                        let a = e.isResolved && (null == (t = e.ids) ? void 0 : t.length) === 0,
                            r = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                        return (e.isRejected && r) || a;
                    },
                }))
                .actions((e) => ({
                    getTracksIds: (0, r.L3)(function* (t) {
                        let { artistId: a } = t,
                            { artistsResource: s, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            e.loadingState = o.GuX.PENDING;
                            let t = yield s.getArtistTrackIds({ artistId: a }),
                                { sonataState: i } = (0, r.Zn)(e);
                            i.setUnloadedEntitiesData(t.map((e) => (0, _.li)(e))),
                                (e.ids = (0, r.wg)(t)),
                                e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.RESOLVE);
                        } catch (t) {
                            n.error(t),
                                t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                        }
                    }),
                    getTracks: (0, r.L3)(function* (t) {
                        let { trackIds: a } = t,
                            { tracksResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        try {
                            let t = yield i.getTracksMeta({ trackIds: a, withProgress: !0 });
                            e.tracks.merge(t.reduce((e, t) => ((e[t.id] = (0, S.vU)(t)), e), {}));
                        } catch (e) {
                            s.error(e);
                        }
                    }),
                    reset() {
                        let { sonataState: t } = (0, r.Zn)(e);
                        t.resetUnloadedEntitiesData(), (e.loadingState = o.GuX.IDLE), e.destroyItems([e.tracks, e.ids]);
                    },
                }));
            var C = a(29474);
            let k = r.gK.compose(r.gK.model('OfflineArtistTrackIds', { ids: r.gK.maybeNull(r.gK.array(r.gK.string)) }), l.XT, l.pl).actions((e) => ({
                    getIds: (0, r.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, r._$)(e);
                        if (e.loadingState !== o.GuX.PENDING)
                            try {
                                e.loadingState = o.GuX.PENDING;
                                let i = yield a.getArtistTrackIdsByUser(t);
                                (e.ids = (0, r.wg)(i)), e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = o.GuX.IDLE), e.destroyItems([e.ids]);
                    },
                })),
                T = r.gK
                    .compose(r.gK.model('OfflineArtist', { id: r.gK.maybeNull(r.gK.string), meta: r.gK.maybeNull(n.G4), trackIds: k, downloadedTracks: C.b }), l.XT, l.pl)
                    .views((e) => ({
                        get isNotFound() {
                            return e.isResolved && !e.meta;
                        },
                    }))
                    .actions((e) => ({
                        setTracksCount: (t) => {
                            var a;
                            (null == (a = e.meta) ? void 0 : a.artist.counts) && (e.meta.artist.counts.tracks = t);
                        },
                        getArtist: (0, r.L3)(function* (t, a) {
                            let { modelActionsLogger: i } = (0, r._$)(e);
                            if (e.loadingState !== o.GuX.PENDING) {
                                e.id = t;
                                try {
                                    e.loadingState = o.GuX.PENDING;
                                    let i = yield a.getArtist(t);
                                    i && (e.meta = (0, r.wg)({ artist: (0, u.dM)(i) })), e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                                }
                            }
                        }),
                        reset() {
                            (e.id = null), (e.loadingState = o.GuX.IDLE), e.trackIds.reset(), e.downloadedTracks.reset(), e.destroyItems([e.meta]);
                        },
                    })),
                A = r.gK
                    .compose(
                        r.gK.model('ArtistPage', {
                            id: r.gK.maybeNull(r.gK.string),
                            meta: r.gK.maybeNull(n.G4),
                            landing: s.Ju,
                            deprecationTargetArtistId: r.gK.maybeNull(r.gK.number),
                            albumsSubpage: g,
                            fullTracksListSubpage: I,
                            concertsSubpage: v,
                            similarArtistsSubPage: b,
                            clipsSubpage: y,
                            familiarSubpage: f,
                            commonSubPage: P,
                            offlineArtist: T,
                            infoLoadingState: l.XT,
                            infoErrorStatusCode: r.gK.maybeNull(r.gK.number),
                        }),
                        l.pl,
                    )
                    .views((e) => {
                        let t = {
                            get isInfoNotFound() {
                                return e.infoLoadingState.isRejected && (e.infoErrorStatusCode === i.X1.NOT_FOUND || e.infoErrorStatusCode === i.X1.BAD_REQUEST);
                            },
                            get isInfoSomethingWentWrong() {
                                return e.infoLoadingState.isRejected && !t.isInfoNotFound;
                            },
                            get selfLink() {
                                if (!e.id) return '';
                                let { href: t } = (0, o.uvd)('/artist/:artistId', { params: { artistId: e.id } });
                                return t;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getInfo: (0, r.L3)(function* (t) {
                            let { artistId: a, preloadedArtist: s } = t,
                                { artistsResource: l, modelActionsLogger: c } = (0, r._$)(e);
                            if (((e.id = a), e.infoLoadingState.loadingState !== o.GuX.PENDING))
                                try {
                                    var h, g, m, y, p, v, S;
                                    e.infoLoadingState.loadingState = o.GuX.PENDING;
                                    let t = s;
                                    t || (t = yield l.getInfo({ artistId: a }));
                                    let { artist: i, deprecation: c } = t;
                                    if (null == c ? void 0 : c.targetArtistId) {
                                        e.deprecationTargetArtistId = c.targetArtistId;
                                        return;
                                    }
                                    (e.commonSubPage.artistName = i.name),
                                        (e.meta = (0, r.wg)(
                                            ((m = t),
                                            (0, r.wg)({
                                                artist: (0, u.as)({ artist: m.artist, trailer: m.trailer, isComposer: m.artistType === d.o.COMPOSER }),
                                                donationUrl: (0, o.Kgy)(null == (y = m.donation) ? void 0 : y.tipUrl)
                                                    ? null == (p = m.donation)
                                                        ? void 0
                                                        : p.tipUrl
                                                    : void 0,
                                                lastMonthListeners: null == (v = m.stats) ? void 0 : v.lastMonthListeners,
                                                brandedButton: m.brandedButton ? (0, n.LH)(m.brandedButton) : void 0,
                                                covers:
                                                    null == (S = m.covers)
                                                        ? void 0
                                                        : S.map((e) => {
                                                              var t;
                                                              return null != (t = e.uri) ? t : '';
                                                          }),
                                            })),
                                        )),
                                        (null == (g = e.meta) || null == (h = g.artist) ? void 0 : h.resolveAllDisclaimers) &&
                                            (yield e.meta.artist.resolveAllDisclaimers()),
                                        e.infoLoadingState.loadingState !== o.GuX.IDLE && (e.infoLoadingState.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    c.error(t),
                                        t instanceof i.GX && (e.infoErrorStatusCode = t.statusCode),
                                        e.infoLoadingState.loadingState !== o.GuX.IDLE && (e.infoLoadingState.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.infoLoadingState.loadingState = o.GuX.IDLE),
                                e.landing.reset(),
                                (e.id = null),
                                (e.deprecationTargetArtistId = null),
                                e.destroyItems([e.meta]);
                        },
                    }));
            var D = a(34581),
                N = a(22252),
                R = a(35128),
                x = a(15839);
            a(48559);
            var L = a(70165),
                w = a(69148),
                O = a(31854);
        },
        38167: (e, t, a) => {
            'use strict';
            a.d(t, { FamilyInviteInitializer: () => o });
            var r = a(96103),
                i = a(55178),
                s = a(70524),
                n = a(49574);
            let o = (0, r.PA)(() => {
                let e = (0, s.hj)(),
                    {
                        user: t,
                        familyInvite: { start: a },
                    } = (0, n.Pjs)();
                (0, i.useEffect)(() => {
                    e.shouldShowFamilyInvite && e.inviteId && (t.isAuthorized && e.clear(), a(e.inviteId));
                }, [t.isAuthorized, e, a]);
            });
        },
        39088: (e, t, a) => {
            'use strict';
            a.d(t, { AdvertProvider: () => u });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(72676),
                o = a(50444),
                l = a(49574);
            let d = null,
                u = (0, i.PA)((e) => {
                    var t, a;
                    let { children: i } = e,
                        { advert: u, experiments: c, user: h, location: g, sonataState: m } = (0, l.Pjs)(),
                        y = (0, l.UlF)();
                    return (!d &&
                        h.isAuthorized &&
                        c.checkExperiment(l.zal.WebNextAudioVideoAdvert, 'on') &&
                        ((d = new l.vaf({ logger: y, videoSlotId: o.so.SLOT, videoElementId: o.so.VIDEO })).setVideoContentUrl(
                            (null == (a = m.entityMeta) ? void 0 : a.url) || null,
                        ),
                        d.setVideoContentDuration(m.duration)),
                    (0, s.useEffect)(() => {
                        null == d || d.init(g.tld);
                    }, [g.tld]),
                    (0, s.useEffect)(() => {
                        var e;
                        null == d || d.setVideoContentUrl((null == (e = m.entityMeta) ? void 0 : e.url) || null), null == d || d.setVideoContentDuration(m.duration);
                    }, [null == (t = m.entityMeta) ? void 0 : t.url, m.duration]),
                    (0, s.useEffect)(() => {
                        if (!c.checkExperiment(l.zal.WebNextAudioVideoAdvert, 'on') || !h.isAuthorized) return;
                        let e =
                            null == d
                                ? void 0
                                : d.state.isAdvertPlaying.onChange((e) => {
                                      if ((u.setAdvertShown(e), e)) {
                                          var t, a;
                                          u.setType((null == d || null == (t = d.state.advertData) ? void 0 : t.type) || null),
                                              u.setData((null == d || null == (a = d.state.advertData) ? void 0 : a.data) || null);
                                      } else u.reset();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [u, c, h.isAuthorized]),
                    (0, s.useEffect)(() => {
                        let e;
                        if (u.isAdvertPlaybackCreated) {
                            var t;
                            e =
                                null == d || null == (t = d.audioAdvertPlayback)
                                    ? void 0
                                    : t.state.playerState.event.onChange((e) => {
                                          if (u.isAdvertShown) {
                                              if ((e === n.Iu.END && (u.setAdvertShown(!1), null == d || d.state.setDefaultState()), e === n.Iu.PLAYING))
                                                  return void u.setAdvertPlaying(!0);
                                              if (e === n.Iu.END || e === n.Iu.PAUSED) return void u.setAdvertPlaying(!1);
                                          }
                                      });
                        }
                        return () => {
                            null == e || e();
                        };
                    }, [u, u.isAdvertPlaybackCreated]),
                    (0, s.useEffect)(() => {
                        u.isAdvertShown && d && void 0 !== m.volume && d.audioAdvertPlayback.setExponentVolume(m.volume || 0);
                    }, [u.isAdvertShown, m.volume]),
                    (0, s.useEffect)(
                        () => () => {
                            u.reset();
                        },
                        [u],
                    ),
                    c.checkExperiment(l.zal.WebNextAudioVideoAdvert, 'on') && h.isAuthorized)
                        ? (0, r.jsx)(l.p8J.Provider, { value: d, children: i })
                        : i;
                });
        },
        39386: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { DesktopInitializer: () => o });
            var r = a(32290),
                i = a(55178),
                s = a(15881),
                n = a(49574);
            let o = () => {
                let { language: e } = (0, n.h6b)();
                {
                    let { theme: t } = (0, n.DPo)(),
                        a = (0, n.NFA)().get(n.vgk);
                    (0, s.sq)(),
                        (0, s.P4)(),
                        (0, s.bk)(),
                        (0, s.LD)(),
                        (0, s.t4)(),
                        (0, s.Fn)(),
                        (0, s.eP)(),
                        (0, s.sb)(),
                        (0, i.useEffect)(() => {
                            (0, s.M4)(e), (0, s.CA)();
                        }, [e]),
                        (0, i.useEffect)(() => {
                            let e = (0, n.HFS)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, i.useEffect)(() => {
                            t && ((0, s._E)(t), a.count(t, 'appTheme'));
                        }, [t]);
                }
                return (0, r.jsx)(s.qw, {});
            };
        },
        41676: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { StoreProvider: () => te });
            var r,
                i,
                s,
                n = a(32290),
                o = a(96103),
                l = a(60754),
                d = a(21916),
                u = a(55178);
            a(82736);
            var c = a(49574),
                h = a(76232),
                g = a(6612),
                m = a(96194),
                y = a(72676),
                p = a(51516),
                v = a(70524),
                S = a(43557),
                E = a(43224);
            let f = {
                experiments: { loadingState: c.GuX.IDLE, experiments: {}, overwrittenExperiments: {} },
                disclaimersDictionary: { loadingState: c.GuX.IDLE },
                user: { account: { loadingState: c.GuX.IDLE, data: {} }, settings: { loadingState: c.GuX.IDLE } },
                wizard: { loadingState: c.GuX.IDLE, modal: {}, introModal: {}, savedLikedArtists: [], likedArtists: [], unlikedArtists: [] },
                collection: {
                    albums: { pagesLoader: {}, upcomingAlbums: { loadingState: c.GuX.IDLE } },
                    playlists: {
                        playlistsLiked: { pagesLoader: {} },
                        playlistsCreated: { pagesLoader: {} },
                        activeTabIndex: p.ac.CREATED,
                        tabs: [p.ac.CREATED, p.ac.LIKED],
                    },
                    artists: { pagesLoader: {}, topArtists: { loadingState: c.GuX.IDLE, items: [] } },
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    shelf: { recentlyPlayed: { loadingState: c.GuX.IDLE }, newEpisodes: { loadingState: c.GuX.IDLE }, liked: { loadingState: c.GuX.IDLE } },
                    nonMusicLiked: { loadingState: c.GuX.IDLE, items: [] },
                    dislikes: { artists: { loadingState: c.GuX.IDLE }, tracks: { loadingState: c.GuX.IDLE } },
                    kids: { albums: { pagesLoader: {} }, playlists: { pagesLoader: {} }, tracks: { pagesLoader: {} } },
                    shelfRecentlyPlayed: { pagesLoader: {} },
                    shelfLiked: { pagesLoader: {} },
                    clips: { loadingState: c.GuX.IDLE, clipsWillLike: { loadingState: c.GuX.IDLE } },
                },
                main: { specialHeaderLoadingState: c.GuX.IDLE, landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } } },
                nonMusic: {
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    albums: { loadingState: c.GuX.IDLE },
                    categorySubpage: { loadingState: c.GuX.IDLE },
                    categoryPlaylistsSubpage: { loadingState: c.GuX.IDLE, pagesLoader: {} },
                },
                kids: {
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    kidsEditorialPlaylistSubpage: { loadingState: c.GuX.IDLE, pagesLoader: {} },
                    kidsEditorialAlbumSubpage: { loadingState: c.GuX.IDLE, pagesLoader: {} },
                },
                settings: {
                    layout: null,
                    isLandscape: !1,
                    isMobileLandscapeHeight: !1,
                    browserInfo: {
                        name: void 0,
                        version: void 0,
                        OSFamily: void 0,
                        isMobile: !1,
                        isTablet: !1,
                        isTouch: !1,
                        isBrowser: !1,
                        inAppBrowser: !1,
                        hasHuaweiAppGallery: !1,
                    },
                    selectedThumbId: c.TZj.DEFAULT,
                },
                currentClipInfo: { clipLoadingState: c.GuX.IDLE, creditsLoadingState: c.GuX.IDLE, id: null, clip: null, credits: null, modal: {} },
                currentTrackInfo: {
                    trackLoadingState: c.GuX.IDLE,
                    creditsLoadingState: c.GuX.IDLE,
                    descriptionLoadingState: c.GuX.IDLE,
                    id: null,
                    albumId: null,
                    isUGC: null,
                    fullTrack: null,
                    credits: null,
                    modal: {},
                },
                trackLyrics: { loadingState: c.GuX.IDLE, lyrics: null, lyricId: null, externalLyricId: null, track: null, modal: {} },
                album: {
                    loadingState: c.GuX.IDLE,
                    items: [],
                    meta: null,
                    otherAlbumVersions: [],
                    allTracksUnfinished: !1,
                    donations: { loadingState: c.GuX.IDLE, items: [] },
                    latestGenreAlbums: { loadingState: c.GuX.IDLE, items: [] },
                    otherArtistAlbums: { loadingState: c.GuX.IDLE, items: [] },
                    relatedContent: { loadingState: c.GuX.IDLE, items: [] },
                    similarEntities: {
                        id: 'similar-entities',
                        type: m.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: S.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                promolanding: {
                    loadingState: c.GuX.IDLE,
                    items: [],
                    meta: null,
                    allTracksUnfinished: !1,
                    promoCampaign: { loadingState: c.GuX.IDLE, isActive: !1 },
                    state: {
                        contextId: null,
                        contextType: null,
                        entityMeta: null,
                        status: y.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: g.pM.NONE,
                        quality: h.e.BALANCED,
                        canShuffle: !0,
                        shuffle: !1,
                    },
                    similarEntities: {
                        id: 'similar-entities',
                        type: m.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: S.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                albumCPA: {},
                artist: {
                    meta: null,
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    fullTracksListSubpage: { loadingState: c.GuX.IDLE },
                    albumsSubpage: { pagesLoader: {} },
                    concertsSubpage: { loadingState: c.GuX.IDLE },
                    similarArtistsSubPage: { loadingState: c.GuX.IDLE },
                    familiarSubpage: { loadingState: c.GuX.IDLE },
                    clipsSubpage: { pagesLoader: {} },
                    commonSubPage: {},
                    offlineArtist: { loadingState: c.GuX.IDLE, trackIds: { loadingState: c.GuX.IDLE }, downloadedTracks: { loadingState: c.GuX.IDLE } },
                    infoLoadingState: { loadingState: c.GuX.IDLE },
                },
                library: { loadingState: c.GuX.IDLE, tracks: {}, artists: {}, playlists: {}, albums: {}, clips: {} },
                sonataState: {
                    contextId: null,
                    contextType: null,
                    entityMeta: null,
                    status: y.MT.IDLE,
                    canMoveBackward: !1,
                    canMoveForward: !1,
                    canSpeed: !1,
                    canChangeRepeatMode: !0,
                    repeatMode: g.pM.NONE,
                    quality: h.e.BALANCED,
                    canShuffle: !0,
                    shuffle: !1,
                    areCoresRegistered: !1,
                    isVHCoreRegistered: !1,
                    isCrossFadeEnabled: !0,
                },
                playlist: {
                    loadingState: c.GuX.IDLE,
                    meta: null,
                    items: [],
                    initialItems: [],
                    similarPlaylists: [],
                    filters: { loadingState: c.GuX.IDLE },
                    editorFeature: { shouldShowDuplicate: !1, shouldShowGenre: !1, shouldShowMajor: !1, colorMajorMap: {}, duplicate: {} },
                    search: { loadingState: c.GuX.IDLE, text: '' },
                    similarEntities: {
                        id: 'similar-entities',
                        type: m.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: S.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                slides: {
                    userSlidesLoadingState: c.GuX.IDLE,
                    artistSlidesLoadingState: c.GuX.IDLE,
                    podcastSlidesLoadingState: c.GuX.IDLE,
                    specialSlidesLoadingState: c.GuX.IDLE,
                    kidsSlidesLoadingState: c.GuX.IDLE,
                    userItems: [],
                    artistItems: [],
                    podcastItems: [],
                    specialItems: [],
                    kidsItems: [],
                    isMuted: !1,
                },
                vibe: { loadingState: c.GuX.IDLE, vibeResetLoadingState: c.GuX.IDLE, isApplying: !1 },
                search: {
                    searchCorrectedText: null,
                    loadingState: c.GuX.IDLE,
                    historyPage: { loadingState: c.GuX.IDLE, items: [] },
                    mixes: { loadingState: c.GuX.IDLE, items: [] },
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    history: { loadingState: c.GuX.IDLE },
                    pagesLoader: {},
                },
                vibeSettings: { loadingState: c.GuX.IDLE, modal: {} },
                pinsCollection: { loadingState: c.GuX.IDLE, index: {} },
                genre: {
                    loadingState: c.GuX.IDLE,
                    albumsSubpage: { pagesLoader: {} },
                    artistsSubpage: { loadingState: c.GuX.IDLE, pagesLoader: {} },
                    playlistsSubpage: { pagesLoader: {} },
                },
                genres: { title: null, loadingState: c.GuX.IDLE, items: [] },
                mixes: { loadingState: c.GuX.IDLE, items: [] },
                tag: { tagLoadingState: c.GuX.IDLE, playlistsData: [], pagesLoader: {} },
                chart: { tracksSubPage: { loadingState: c.GuX.IDLE, items: [] }, podcastsSubPage: { loadingState: c.GuX.IDLE, items: [] } },
                post: { loadingState: c.GuX.IDLE },
                landingBlockEntities: { loadingState: c.GuX.IDLE },
                contextMenuPlaylists: { pagesLoader: {} },
                musicHistory: { loadingState: c.GuX.IDLE, tabs: null },
                createPlaylist: {},
                location: {},
                disclaimerModalState: { loadingState: c.GuX.IDLE },
                myMusic: { downloadedTracks: { loadingState: c.GuX.IDLE } },
                trailer: {
                    loadingState: c.GuX.IDLE,
                    withAnimation: !0,
                    shouldAutoStartPlaying: !0,
                    shouldSendEventOnTracksShowed: !0,
                    modal: {},
                    sonataStatusBeforeTrailerStart: y.MT.IDLE,
                    isManuallyPaused: !0,
                    state: { contextId: null, contextType: null, entityMeta: null, status: y.MT.IDLE },
                },
                communication: { loadingState: c.GuX.IDLE },
                modals: {
                    disclaimerModal: {},
                    shortcutsModal: {},
                    aboutAppModal: {},
                    overviewModal: {},
                    ugcTrackEditModal: { modal: {} },
                    popoverOverPlayer: {},
                    crackdownModal: {},
                    overwrittenExperimentsModal: {},
                    buySubscriptionModal: { isOpened: !0 },
                    promoLandingBuySubscriptionModal: {},
                    clearMemoryModal: {},
                    windowSettingsModal: {},
                    playerSettingsModal: {},
                    audioSettingsModal: {},
                    myVibeAnimationPerformanceSettingsModal: {},
                    myVibeAnimationAppearanceSettingsModal: {},
                    appUpdatesSettingsModal: {},
                    scrobblersSettingsModal: {},
                    downloaderSettingsModal: {},
                    systemSettingsModal: {},
                    globalShortcutsSettingsModal: {},
                    myVibeParamsSettingsModal: {},
                    miniPlayerSettingsModal: {},
                    ynisonSettingsModal: {},
                    lrclibSettingsModal: {},
                    discordRpcSettingsModal: {},
                    imageSliderModal: { modal: {} },
                    artistAboutModal: { loadingState: c.GuX.IDLE, modal: {} },
                    bestRecommedationModal: {},
                },
                landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                fullscreenPlayer: { modal: {}, syncLyrics: { loadingState: c.GuX.IDLE }, playQueue: {} },
                fullscreenVideoPlayer: {
                    modal: {},
                    ids: [],
                    loadingState: c.GuX.IDLE,
                    sonataStatusBeforeClipStart: y.MT.IDLE,
                    withAnimation: !0,
                    state: { contextId: null, contextType: null, entityMeta: null, status: y.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
                },
                advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1, isAdvertPlaybackCreated: !1 },
                ugcUploadCenter: { checkProcessingTracksAttempts: 0, notifications: {} },
                paymentWidgetModal: {
                    modal: {},
                    target: '',
                    serviceSessionId: '',
                    tariffOfferName: '',
                    offersBatchId: '',
                    offersPositionIds: '',
                    isSilent: !1,
                    status: E.cF.IDLE,
                },
                offers: { music: { loadingState: c.GuX.IDLE } },
                quality: { modal: {} },
                releaseNotes: { modal: {} },
                slam: { networkStatus: {} },
                favoriteTracks: { loadingState: c.GuX.IDLE },
                track: { loadingState: c.GuX.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                familyInvite: { info: { loadingState: c.GuX.IDLE }, acceptanceLoadingState: c.GuX.IDLE, modal: {}, step: v._n.INFO },
                continueListen: {},
                playlistPersonal: { loadingState: c.GuX.IDLE },
                redAlert: { loadingState: c.GuX.IDLE },
                shareIframe: { modal: {} },
                paywall: { modal: {}, freemiumCollectionBarrier: !1 },
                downloadMobileApp: { modal: {} },
                advertBanners: {
                    banners: {
                        topAdvertBanner: { type: c.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        sideAdvertBanner: { type: c.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        brandedPlaylistBanner: { type: c.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        brandedPlayerBanner: { type: c.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                        brandedEntityAxeBanner: { type: c.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                    },
                },
                label: { loadingState: c.GuX.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                desktopPaywall: {},
                concerts: {
                    loadingState: c.GuX.IDLE,
                    config: { loadingState: c.GuX.IDLE },
                    landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } },
                    locationSelection: { loadingState: c.GuX.IDLE, modal: {} },
                },
                concertsDetails: { loadingState: c.GuX.IDLE },
                concert: { loadingState: c.GuX.IDLE, landing: { loadingState: c.GuX.IDLE, tabs: { loadingState: c.GuX.IDLE } } },
                wheel: { loadingState: c.GuX.IDLE, items: [] },
                words: { loadingState: c.GuX.IDLE },
                lumen: { loadingState: c.GuX.IDLE, status: null, themes: null },
            };
            var b = a(11402),
                P = a(37786),
                _ = a(81300),
                I = a(48383),
                C = a(62812),
                k = a(67985),
                T = a(87953),
                A = a(95428);
            let D = l.gK
                .compose(l.gK.model('FavoriteTracksPage', { playlistUuid: l.gK.maybeNull(l.gK.string), errorStatusCode: l.gK.maybeNull(l.gK.number) }), A.XT)
                .views((e) => ({
                    get playlistUrl() {
                        if (!e.playlistUuid) return '';
                        let { href: t } = (0, c.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                        return t;
                    },
                }))
                .actions((e) => ({
                    getPlaylistUrl: (0, l.L3)(function* () {
                        let { landingResource: t, modelActionsLogger: a } = (0, l._$)(e);
                        if (e.loadingState !== c.GuX.PENDING)
                            try {
                                (e.loadingState = c.GuX.PENDING),
                                    (e.playlistUuid = (yield t.getBlock({
                                        source: { uri: '/landing/block/collection/playlist-with-likes', countWeb: 8 },
                                        type: m.t.COLLECTION_PLAYLIST_WITH_LIKES,
                                    })).playlist.playlistUuid),
                                    e.loadingState !== c.GuX.IDLE && (e.loadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t),
                                    t instanceof T.GX && (t.statusCode === T.X1.NOT_FOUND || t.statusCode === T.X1.BAD_REQUEST) && (e.errorStatusCode = T.X1.NOT_FOUND),
                                    e.loadingState !== c.GuX.IDLE && (e.loadingState = c.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = c.GuX.IDLE), (e.playlistUuid = null);
                    },
                }));
            a(95324);
            var N = a(50562),
                R = a(730),
                x = a(49584),
                L = a(72e3),
                w = a(60711),
                O = a(7189),
                M = a(29277),
                F = a(16486),
                G = a(50510),
                K = a(80864),
                U = a(33797),
                j = a(57318);
            let X = l.gK
                .compose(
                    l.gK.model('MusicHistoryPage', {
                        indexesMap: l.gK.map(l.gK.number),
                        items: l.gK.maybeNull(l.gK.array(M.UN)),
                        datesMap: l.gK.map(l.gK.boolean),
                        tabs: l.gK.maybeNull(l.gK.array(M.WW)),
                    }),
                    A.XT,
                )
                .views((e) => {
                    let t = {
                        get isEmpty() {
                            var a;
                            return (e.isResolved || e.isRejected) && (null == (a = e.tabs) ? void 0 : a.length) === 0;
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        getStartAndEndIndexes(t) {
                            var a, r;
                            let i = t,
                                s = t + 1;
                            return (
                                (null == (a = e.items) ? void 0 : a.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (i = t - 25 + 1),
                                (null == (r = e.items) ? void 0 : r.slice(t, t + 25).some((e) => !e.isResolved)) && (s = t + 25),
                                [i, s]
                            );
                        },
                        getItemsToLoad(a) {
                            var r, i;
                            let [s, n] = t.getStartAndEndIndexes(a);
                            return null != (i = null == (r = e.items) ? void 0 : r.slice(s, n).filter((e) => !e.isResolved)) ? i : [];
                        },
                        isInObservationRange(t) {
                            var a;
                            return (0 !== t && t % 25 == 0) || (e.items && t === (null == (a = e.items) ? void 0 : a.length) - 1);
                        },
                        get dates() {
                            var r, i;
                            return null != (i = null == (r = e.tabs) ? void 0 : r.map((e) => e.date)) ? i : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        fillItemsAndIndexes() {
                            var t;
                            let a = 0;
                            (e.items = (0, l.wg)([])),
                                null == (t = e.tabs) ||
                                    t.forEach((t, r) => {
                                        var i;
                                        e.datesMap.set(t.date, !1),
                                            null == (i = t.blocks) ||
                                                i.forEach((t, i) => {
                                                    var s;
                                                    let n = t.id;
                                                    e.indexesMap.set(''.concat(r, '_').concat(i, '_').concat(n), a),
                                                        null == (s = e.items) ||
                                                            s.push({
                                                                id: n,
                                                                type: t.type,
                                                                tabIndex: r,
                                                                blockIndex: i,
                                                                trackIndex: null,
                                                                loadingState: a < 25 ? c.GuX.RESOLVE : c.GuX.IDLE,
                                                            }),
                                                        ++a,
                                                        t.tracks.forEach((t, s) => {
                                                            var n;
                                                            e.indexesMap.set(''.concat(r, '_').concat(i, '_').concat(s, '_').concat(t.id), a),
                                                                null == (n = e.items) ||
                                                                    n.push({
                                                                        id: t.id,
                                                                        type: t.type,
                                                                        tabIndex: r,
                                                                        blockIndex: i,
                                                                        trackIndex: s,
                                                                        loadingState: a < 25 ? c.GuX.RESOLVE : c.GuX.IDLE,
                                                                    }),
                                                                ++a;
                                                        });
                                                });
                                    });
                        },
                        setTrack(t, a) {
                            var r, i, s, n;
                            let { tabIndex: o, blockIndex: l, trackIndex: d } = t,
                                { fullModel: u } = a.data;
                            if (null === d) return;
                            let h = null == (n = e.tabs) || null == (s = n[o]) || null == (i = s.blocks) || null == (r = i[l]) ? void 0 : r.tracks[d];
                            h && ((h.data = (0, K.vU)(u)), (h.loadingState = c.GuX.RESOLVE));
                        },
                        setAlbum(t, a) {
                            var r, i, s;
                            let { tabIndex: n, blockIndex: o } = t,
                                { fullModel: l } = a.data,
                                d = null == (s = e.tabs) || null == (i = s[n]) || null == (r = i.blocks) ? void 0 : r[o];
                            (0, M.z)(d) && ((d.meta = (0, F.sK)({ album: l.album, artists: l.artists })), (d.loadingState = c.GuX.RESOLVE));
                        },
                        setArtist(t, a) {
                            var r, i, s;
                            let { tabIndex: n, blockIndex: o } = t,
                                { fullModel: l } = a.data,
                                d = null == (s = e.tabs) || null == (i = s[n]) || null == (r = i.blocks) ? void 0 : r[o];
                            (0, M.bg)(d) && ((d.meta = (0, U.as)({ artist: l.artist })), (d.loadingState = c.GuX.RESOLVE));
                        },
                        setPlaylist(t, a) {
                            var r, i, s;
                            let { tabIndex: n, blockIndex: o } = t,
                                { fullModel: l } = a.data,
                                d = null == (s = e.tabs) || null == (i = s[n]) || null == (r = i.blocks) ? void 0 : r[o];
                            (0, M.kU)(d) && ((d.meta = { ...(0, G.bk)({ playlist: l.playlist }), tracksCount: l.tracksCount }), (d.loadingState = c.GuX.RESOLVE));
                        },
                        setVibe(t, a) {
                            var r, i, s;
                            let { tabIndex: n, blockIndex: o } = t,
                                { fullModel: l } = a.data,
                                d = null == (s = e.tabs) || null == (i = s[n]) || null == (r = i.blocks) ? void 0 : r[o];
                            (0, M.sr)(d) &&
                                ((d.meta = { ...(0, j.er)(l.wave), imageUrl: l.simpleWaveForegroundImageUrl, backgroundColor: l.simpleWaveBackgroundColor }),
                                (d.loadingState = c.GuX.RESOLVE));
                        },
                        getMusicHistory: (0, l.L3)(function* () {
                            let { musicHistoryResource: a, modelActionsLogger: r } = (0, l._$)(e);
                            if (e.loadingState !== c.GuX.PENDING)
                                try {
                                    e.loadingState = c.GuX.PENDING;
                                    let r = yield a.getMusicHistory({ fullModelsCount: 25 }),
                                        i = ((e) => {
                                            let t = { historyTabs: [] },
                                                a = 0;
                                            for (let s of e.historyTabs) {
                                                var r, i;
                                                if (a > 1e3) break;
                                                let e = { ...s, items: [] };
                                                for (let t of null != (r = s.items) ? r : []) {
                                                    if (a > 1e3) break;
                                                    let r = { ...t, tracks: [] };
                                                    for (let e of t.tracks) {
                                                        if (a > 1e3) break;
                                                        r.tracks.push(e), ++a;
                                                    }
                                                    null == (i = e.items) || i.push(r);
                                                }
                                                e.items && e.items.length > 0 && t.historyTabs.push(e);
                                            }
                                            return t;
                                        })(r);
                                    (e.tabs = (0, l.wg)(i.historyTabs.map(M.Sv))), t.fillItemsAndIndexes(), (e.loadingState = c.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), (e.loadingState = c.GuX.REJECT);
                                }
                        }),
                        getItems: (0, l.L3)(function* (a) {
                            let { musicHistoryResource: r, modelActionsLogger: i } = (0, l._$)(e);
                            try {
                                let i = e.getItemsToLoad(a);
                                i.forEach((e) => {
                                    e.loadingState = c.GuX.RESOLVE;
                                });
                                let s = yield r.getMusicHistoryItems({
                                        items: i
                                            .map((e) => {
                                                switch (e.type) {
                                                    case O.D.ARTIST:
                                                    case O.D.ALBUM:
                                                        return { type: e.type, data: { itemId: { id: e.id } } };
                                                    case O.D.PLAYLIST: {
                                                        let [t, a] = e.id.split(':');
                                                        return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(a) } } };
                                                    }
                                                    case O.D.WAVE:
                                                        return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                    case O.D.TRACK: {
                                                        let [t, a] = e.id.split(':');
                                                        return { type: e.type, data: { itemId: { trackId: String(t), albumId: a } } };
                                                    }
                                                    default:
                                                        return null;
                                                }
                                            })
                                            .filter((e) => e),
                                    }),
                                    n = i.reduce((e, t) => {
                                        let a = ''.concat(t.type, '_').concat(t.id);
                                        if (a in e) {
                                            var r;
                                            null == (r = e[a]) || r.push(t);
                                        } else e[a] = [t];
                                        return e;
                                    }, {});
                                s.items.forEach((e) => {
                                    var a;
                                    null ==
                                        (a =
                                            n[
                                                ((e) => {
                                                    switch (e.type) {
                                                        case O.D.ALBUM:
                                                            return ''.concat(e.type, '_').concat((0, M.tM)(e));
                                                        case O.D.TRACK:
                                                            return ''.concat(e.type, '_').concat((0, M.QF)(e));
                                                        case O.D.WAVE:
                                                            return ''.concat(e.type, '_').concat((0, M.u)(e));
                                                        case O.D.PLAYLIST:
                                                            return ''.concat(e.type, '_').concat((0, M.uZ)(e));
                                                        case O.D.ARTIST:
                                                            return ''.concat(e.type, '_').concat((0, M.Hp)(e));
                                                        case O.D.QUERY_TO_VIBE:
                                                            return ''.concat(e.type, '_').concat((0, M.bC)(e));
                                                    }
                                                })(e)
                                            ]) ||
                                        a.forEach((a) => {
                                            switch (e.type) {
                                                case O.D.ALBUM:
                                                    t.setAlbum(a, e);
                                                    break;
                                                case O.D.TRACK:
                                                    t.setTrack(a, e);
                                                    break;
                                                case O.D.WAVE:
                                                    t.setVibe(a, e);
                                                    break;
                                                case O.D.PLAYLIST:
                                                    t.setPlaylist(a, e);
                                                    break;
                                                case O.D.ARTIST:
                                                    t.setArtist(a, e);
                                            }
                                            a.loadingState = c.GuX.RESOLVE;
                                        });
                                });
                            } catch (e) {
                                i.error(e);
                            }
                        }),
                        setDatesMap(t, a) {
                            e.datesMap.set(t, a);
                        },
                        reset() {
                            (e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = c.GuX.IDLE);
                        },
                    };
                    return t;
                });
            a(80719), a(91931);
            var B = a(29474);
            let V = l.gK.model('MyMusicPage', { downloadedTracks: B.b });
            a(92498);
            var W = a(75542),
                Y = a(54068),
                q = a(94204),
                z = a(64423),
                H = a(1053),
                Q = a(99926),
                $ = a(29676),
                Z = a(69319);
            let J = [Z.n.ARTIST, Z.n.ALBUM, Z.n.TRACK, Z.n.PLAYLIST, Z.n.WAVE, Z.n.PODCAST, Z.n.PODCAST_EPISODE],
                ee = [Z.n.ALBUM, Z.n.ARTIST, Z.n.PLAYLIST, Z.n.TRACK, Z.n.UGC_TRACK, Z.n.WAVE, Z.n.PODCAST, Z.n.PODCAST_EPISODE, Z.n.CLIP, Z.n.CONCERT],
                et = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, l.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, j.KU)(a.agent),
                    });
                },
                ea = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case Z.n.UGC_TRACK:
                            return { type: t, data: (0, K.or)(e.track) };
                        case Z.n.TRACK:
                            return { type: t, data: (0, K.vU)(e.track) };
                        case Z.n.ARTIST:
                            return { type: t, data: (0, U.dM)(e.artist) };
                        case Z.n.PLAYLIST:
                            return { type: t, data: (0, G.Ew)({ ...e.playlist, artists: [] }) };
                        case Z.n.ALBUM:
                            return { type: t, data: (0, F.pp)(e.album) };
                        case Z.n.WAVE:
                            return { type: t, data: et(e) };
                        case Z.n.PODCAST:
                            return { type: t, data: (0, F.pp)(e.podcast) };
                        case Z.n.PODCAST_EPISODE:
                            return { type: t, data: (0, K.vU)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            var er = a(57941),
                ei = a(11135),
                es = a(62360),
                en = a(73298);
            (r || (r = {})).QUERY_TO_VIBE = 'q2v_wave';
            let eo = l.gK.compose(l.gK.model('SearchHistoryPage', { items: l.gK.array($.jU) }), A.pl, A.XT).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                el = l.gK
                    .model('SearchHistory', { loadingState: l.gK.enumeration(Object.values(c.GuX)), shouldUpdateHistory: l.gK.optional(l.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === c.GuX.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { user: t } = (0, l.Zn)(e),
                                { usersResource: a, modelActionsLogger: r } = (0, l._$)(e);
                            if (e.loadingState !== c.GuX.PENDING && t.account.data.uid)
                                try {
                                    (e.loadingState = c.GuX.PENDING), yield a.clearSearchHistory({ userId: t.account.data.uid }), (e.loadingState = c.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), (e.loadingState = c.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.loadingState = c.GuX.IDLE;
                        },
                    })),
                ed = l.gK
                    .compose(
                        l.gK.model('SearchPage', {
                            searchCorrectedText: l.gK.maybeNull(l.gK.string),
                            searchRequestId: l.gK.optional(l.gK.string, ''),
                            bestResults: l.gK.array($.xo),
                            historyPage: eo,
                            mixes: Q.YM,
                            landing: S.Ju,
                            history: el,
                            filters: l.gK.maybeNull(l.gK.array($.k1)),
                            pagesLoader: (0, A.Ij)($.jU, { useAppendMode: !0 }),
                            q2vResults: l.gK.array(j.Gh),
                        }),
                        A.pl,
                        A.XT,
                    )
                    .views((e) => ({
                        get isHistoryShimmerVisible() {
                            return e.historyPage.isLoading || e.historyPage.isRejected;
                        },
                        get isHistoryLoading() {
                            return e.historyPage.isLoading;
                        },
                        get isHistoryReady() {
                            return e.historyPage.isNeededToLoad;
                        },
                        get isEmptyHistory() {
                            return !e.historyPage.items.length && e.historyPage.isResolved;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isSomePageResolved && e.pagesLoader.isEmpty && 0 === e.bestResults.length && 0 === e.q2vResults.length;
                        },
                        filterPosition(t) {
                            var a, r;
                            return (null != (r = null == (a = e.filters) ? void 0 : a.findIndex((e) => e.id === t)) ? r : 0) + 1;
                        },
                        get totalCount() {
                            var t, a;
                            return null != (a = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                        },
                    }))
                    .actions((e) => ({
                        getSearchResults: (0, l.L3)(function* (t) {
                            let { text: a, filter: i, page: s = 0 } = t;
                            if (s > 0 && !e.pagesLoader.isPageNeedToLoad(s)) return;
                            let { searchResource: n } = (0, l._$)(e),
                                {
                                    settings: { isMobile: o },
                                    experiments: d,
                                    concerts: u,
                                } = (0, l.Zn)(e),
                                h = d.checkExperiment(c.zal.WebNextSearchConcerts, 'on'),
                                g = i === H.$.TOP,
                                m = u.concertsLocationForRequest;
                            try {
                                var y, p;
                                (e.loadingState = c.GuX.PENDING), e.pagesLoader.setPageState(s, c.GuX.PENDING);
                                let t = yield n.getInstantMixedSearch({
                                    text: a,
                                    type: ((e, t) => {
                                        let { withClips: a, withConcerts: r } = t,
                                            i = [...ee];
                                        return (
                                            e === H.$.TOP && (i = i.filter((e) => e !== Z.n.UGC_TRACK)),
                                            a || (i = i.filter((e) => e !== Z.n.CLIP)),
                                            r || (i = i.filter((e) => e !== Z.n.CONCERT)),
                                            i
                                        );
                                    })(i, { withClips: !o, withConcerts: h }),
                                    filter: g ? void 0 : i,
                                    withLikesCount: !0,
                                    page: s,
                                    pageSize: $.T_,
                                    withBestResults: g,
                                    locations: m,
                                });
                                t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                let d = [];
                                t.results &&
                                    t.results.length > 0 &&
                                    ((d = t.results.map((e) => {
                                        switch (e.type) {
                                            case Z.n.ALBUM:
                                                return { type: Z.n.ALBUM, data: (0, F.pp)(e.album) };
                                            case Z.n.ARTIST:
                                                return { type: Z.n.ARTIST, data: (0, U.dM)(e.artist) };
                                            case Z.n.PLAYLIST:
                                                return { type: Z.n.PLAYLIST, data: (0, G.Ew)({ ...e.playlist, artists: [] }) };
                                            case Z.n.UGC_TRACK:
                                                return { type: Z.n.UGC_TRACK, data: (0, K.or)(e.track) };
                                            case Z.n.TRACK:
                                                return { type: Z.n.TRACK, data: (0, K.vU)(e.track) };
                                            case Z.n.WAVE:
                                                return { type: Z.n.WAVE, data: et(e) };
                                            case Z.n.PODCAST:
                                                return { type: Z.n.PODCAST, data: (0, F.pp)(e.podcast) };
                                            case Z.n.CLIP:
                                                return { type: Z.n.CLIP, data: (0, ei.i$)(e.clip) };
                                            case Z.n.PODCAST_EPISODE:
                                                return { type: Z.n.PODCAST_EPISODE, data: (0, K.vU)(e.podcast_episode) };
                                            case Z.n.CONCERT:
                                                return { type: Z.n.CONCERT, data: (0, en.ho)(e.concert.concert, e.concert.minPrice) };
                                        }
                                    })),
                                    (e.searchRequestId = t.searchRequestId)),
                                    t.bestResults &&
                                        t.bestResults.length > 0 &&
                                        (e.bestResults = (0, l.wg)(
                                            t.bestResults
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case er.r.ALBUM:
                                                            return {
                                                                type: er.r.ALBUM,
                                                                data: (0, F.sK)({
                                                                    album: e.best_result_album.album,
                                                                    artists: e.best_result_album.artists,
                                                                    trailer: e.best_result_album.trailer,
                                                                }),
                                                            };
                                                        case er.r.PLAYLIST:
                                                            return {
                                                                type: er.r.PLAYLIST,
                                                                data: (0, G.bk)({
                                                                    playlist: e.best_result_playlist.playlist,
                                                                    likesCount: e.best_result_playlist.likesCount,
                                                                    tracksCount: e.best_result_playlist.trackCount,
                                                                    trailer: e.best_result_playlist.trailer,
                                                                }),
                                                            };
                                                        case er.r.RECENT_RELEASE:
                                                            return {
                                                                type: er.r.RECENT_RELEASE,
                                                                data: (0, F.sK)({
                                                                    album: e.best_result_recent_release.album,
                                                                    artists: e.best_result_recent_release.artists,
                                                                    trailer: e.best_result_recent_release.trailer,
                                                                }),
                                                            };
                                                        case er.r.WAVE:
                                                            return { type: er.r.WAVE, data: (0, j.er)(e.best_result_wave) };
                                                        case er.r.ARTIST:
                                                            return {
                                                                type: er.r.ARTIST,
                                                                data: (0, U.as)({
                                                                    artist: e.best_result_artist.artist,
                                                                    trailer: e.best_result_artist.trailer,
                                                                    likesCount: e.best_result_artist.likesCount,
                                                                }),
                                                            };
                                                        case er.r.UPCOMING:
                                                            return { type: er.r.UPCOMING, data: (0, F.lO)(e.best_result_upcoming) };
                                                        case er.r.CONCERT:
                                                            return { type: er.r.CONCERT, data: (0, en.oP)(e.best_result_concert) };
                                                        case er.r.PODCAST:
                                                            return {
                                                                type: er.r.PODCAST,
                                                                data: (0, F.sK)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                            };
                                                        case er.r.PODCAST_EPISODE:
                                                            return { type: er.r.PODCAST_EPISODE, data: (0, K.vU)(e.best_result_podcast_episode) };
                                                        case er.r.OVERVIEW:
                                                            return { type: er.r.OVERVIEW, data: (0, es.tm)(e.best_result_overview) };
                                                        case er.r.NON_MUSIC:
                                                            return {
                                                                type: er.r.NON_MUSIC,
                                                                data: (0, F.sK)({
                                                                    album: e.best_result_non_music.album,
                                                                    artists: e.best_result_non_music.artists,
                                                                    releaseYear: e.best_result_non_music.releaseYear,
                                                                }),
                                                            };
                                                        case er.r.TRACK:
                                                            return { type: er.r.TRACK, data: (0, K.vU)(e.best_result_track) };
                                                        case er.r.CLIP:
                                                            return { type: er.r.CLIP, data: (0, ei.i$)(e.best_result_clip) };
                                                        case er.r.BOOK_CHAPTER:
                                                            return { type: er.r.BOOK_CHAPTER, data: (0, K.vU)(e.best_result_book_chapter) };
                                                    }
                                                })
                                                .filter((e) => e),
                                        )),
                                    (e.q2vResults = (0, l.wg)(
                                        (null != (y = t.q2vResults) ? y : []).map((e) => {
                                            let { wave: t, agent: a } = e[r.QUERY_TO_VIBE];
                                            return (0, j.lb)(t, a);
                                        }),
                                    )),
                                    t.filters && t.filters.length > 0 && (e.filters = (0, l.wg)(t.filters)),
                                    e.pagesLoader.setItems(d, {
                                        page: s,
                                        pager: { page: s, perPage: null != (p = t.perPage) ? p : $.T_, total: g ? $.T_ : Math.min(t.total, $.T) },
                                    }),
                                    (e.loadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                (e.loadingState = c.GuX.REJECT), e.pagesLoader.setItems(null, { responseStatus: c.FlZ.ERROR, page: s });
                            }
                        }),
                        getHistory: (0, l.L3)(function* (t) {
                            let { userId: a } = t;
                            if (e.historyPage.loadingState === c.GuX.PENDING) return;
                            let { usersResource: r, modelActionsLogger: i } = (0, l._$)(e);
                            try {
                                e.historyPage.loadingState = c.GuX.PENDING;
                                let t = yield r.getSearchHistory({ userId: a, supportedTypes: J });
                                (e.historyPage.items = (0, l.wg)(t.map(ea).filter((e) => e))), (e.historyPage.loadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.historyPage.loadingState = c.GuX.REJECT);
                            }
                        }),
                        clearHistory: (0, l.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: r, modelActionsLogger: i } = (0, l._$)(e);
                            if (e.loadingState !== c.GuX.PENDING)
                                try {
                                    (e.loadingState = c.GuX.PENDING), yield r.clearSearchHistory({ userId: a }), (e.loadingState = c.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = c.GuX.REJECT);
                                }
                        }),
                        resetHistoryItems() {
                            e.historyPage.reset();
                        },
                        resetHistoryStateRequest() {
                            (e.historyPage.loadingState = c.GuX.IDLE), e.historyPage.reset();
                        },
                        resetResults() {
                            e.destroyItems([e.bestResults, e.q2vResults]), e.pagesLoader.reset();
                        },
                        resetSearchCorrectedText() {
                            e.searchCorrectedText = null;
                        },
                        reset() {
                            (e.searchCorrectedText = null),
                                (e.loadingState = c.GuX.IDLE),
                                (e.filters = null),
                                e.destroyItems([e.bestResults, e.q2vResults]),
                                e.pagesLoader.reset();
                        },
                        sendFeedback: (0, l.L3)(function* (t) {
                            let { searchResource: a, modelActionsLogger: r } = (0, l._$)(e);
                            try {
                                yield a.sendFeedback(t);
                            } catch (e) {
                                r.error(e);
                            }
                        }),
                    }));
            a(87745), a(99800), a(8187), a(55272);
            var eu = a(17631),
                ec = a(45294),
                eh = a(4393),
                eg = a(2930);
            let em = l.gK
                .model('AdvertBanners', {
                    banners: l.gK.model({
                        topAdvertBanner: A.Hp,
                        sideAdvertBanner: A.vE,
                        brandedPlaylistBanner: eh.Ab,
                        brandedPlayerBanner: eg.v,
                        brandedEntityAxeBanner: eh.vK,
                    }),
                })
                .views((e) => {
                    let t = {
                        get values() {
                            return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                        },
                        get hasBranding() {
                            return t.values.some((e) => e.type === c.h8o.BRANDING);
                        },
                        isVisible(a) {
                            let { experiments: r } = (0, l.Zn)(e);
                            if (r.checkExperiment(c.zal.WebNextDisableAds, 'on')) return !1;
                            if (a === c.h8o.EMPTY) return !0;
                            let i = t.values.filter((e) => e.type !== c.h8o.EMPTY);
                            return a === c.h8o.DIRECT ? i.every((e) => e.type === c.h8o.DIRECT) : a !== c.h8o.CREATIVE || i.every((e) => e.type !== c.h8o.BRANDING);
                        },
                    };
                    return t;
                });
            var ey = a(28315);
            !(function (e) {
                (e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen');
            })(i || (i = {}));
            var ep = a(17866),
                ev = a(65969);
            let eS = l.gK.model('CommunicationList', { barBelow: ep.t5, modal: ev.k8 }),
                eE = l.gK
                    .model('Communication', { loadingState: l.gK.enumeration(Object.values(c.GuX)), list: l.gK.maybe(eS), errorStatusCode: l.gK.maybeNull(l.gK.number) })
                    .views((e) => ({
                        get withTriggersV2() {
                            let { experiments: t } = (0, l.Zn)(e);
                            return t.checkExperiment(c.zal.WebNextTriggersV2, 'on');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, l.L3)(function* () {
                                let { dynamicPagesResource: a, modelActionsLogger: r } = (0, l._$)(e);
                                return (e.loadingState = c.GuX.RESOLVE);
                                // if (e.loadingState !== c.GuX.PENDING && e.loadingState !== c.GuX.RESOLVE)
                                //     try {
                                //         var s;
                                //         let r;
                                //         if (
                                //             (((e.loadingState = c.GuX.PENDING),
                                //             (s = r =
                                //                 e.withTriggersV2
                                //                     ? yield a.getTriggersV2({ anchorIds: Object.values(ey.v) })
                                //                     : yield a.getTriggers({ anchorIds: Object.values(ey.v) })) &&
                                //                 s.triggers &&
                                //                 Array.isArray(s.triggers) &&
                                //                 s.triggers.every(
                                //                     (e) =>
                                //                         !!(
                                //                             e &&
                                //                             'object' == typeof e &&
                                //                             'anchorId' in e &&
                                //                             'triggers' in e &&
                                //                             Array.isArray(e.triggers) &&
                                //                             e.triggers.every(
                                //                                 (e) =>
                                //                                     !!(
                                //                                         e &&
                                //                                         'object' == typeof e &&
                                //                                         'screenId' in e &&
                                //                                         'feedbackToken' in e &&
                                //                                         'data' in e &&
                                //                                         'meta' in e
                                //                                     ),
                                //                             )
                                //                         ),
                                //                 ))
                                //                 ? (e.list = ((e) => {
                                //                       let t = [],
                                //                           a = [];
                                //                       return (
                                //                           e.triggers.forEach((e) => {
                                //                               var r;
                                //                               switch (null == (r = e.triggers[0]) ? void 0 : r.meta.notificationId) {
                                //                                   case i.BAR_BELOW:
                                //                                       return void e.triggers.forEach((e) => {
                                //                                           t.push((0, ep.S3)(e));
                                //                                       });
                                //                                   case i.FULLSCREEN:
                                //                                       return void e.triggers.forEach((e) => {
                                //                                           a.push((0, ev.fZ)(e));
                                //                                       });
                                //                               }
                                //                           }),
                                //                           (0, l.wg)({ barBelow: { list: t }, modal: { list: a } })
                                //                       );
                                //                   })(r))
                                //                 : r &&
                                //                   r.triggers &&
                                //                   Array.isArray(r.triggers) &&
                                //                   r.triggers.every(
                                //                       (e) =>
                                //                           !!(
                                //                               e &&
                                //                               'object' == typeof e &&
                                //                               'anchorId' in e &&
                                //                               'screenId' in e &&
                                //                               'div' in e &&
                                //                               'meta' in e &&
                                //                               !('triggers' in e)
                                //                           ),
                                //                   ) &&
                                //                   (e.list = ((e) => {
                                //                       let t = [],
                                //                           a = [];
                                //                       return (
                                //                           e.triggers.forEach((e) => {
                                //                               switch (e.meta.notificationId) {
                                //                                   case i.BAR_BELOW:
                                //                                       t.push((0, ep.S3)(e));
                                //                                       return;
                                //                                   case i.FULLSCREEN:
                                //                                       a.push((0, ev.fZ)(e));
                                //                                       return;
                                //                               }
                                //                           }),
                                //                           (0, l.wg)({ barBelow: { list: t }, modal: { list: a } })
                                //                       );
                                //                   })(r)),
                                //             e.loadingState !== c.GuX.IDLE && (e.loadingState = c.GuX.RESOLVE),
                                //             !e.list)
                                //         )
                                //             return;
                                //         let { barBelow: n, modal: o } = e.list;
                                //         n.setAnchorId(ey.v.ON_START_BAR_BELOW),
                                //             n.barBelowItem && (n.show(), t.shown(n.barBelowItem.anchorId, n.barBelowItem.screenId, n.barBelowItem.feedbackToken)),
                                //             o.setAnchorId(ey.v.ON_START_FULLSCREEN),
                                //             o.modalItem && (o.open(), t.shown(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.feedbackToken));
                                //     } catch (t) {
                                //         r.error(t),
                                //             t instanceof T.GX &&
                                //                 (t.statusCode === T.X1.NOT_FOUND || t.statusCode === T.X1.BAD_REQUEST) &&
                                //                 (e.errorStatusCode = T.X1.NOT_FOUND),
                                //             e.loadingState !== c.GuX.IDLE && (e.loadingState = c.GuX.REJECT);
                                //     }
                            }),
                            shown: (0, l.L3)(function* (t, a, r) {
                                let { dynamicPagesResource: i, modelActionsLogger: s } = (0, l._$)(e);
                                try {
                                    e.withTriggersV2 && r ? yield i.shownV2({ anchorIds: [t], feedbackToken: r }) : yield i.shown({ anchorIds: [t], screenId: a });
                                } catch (e) {
                                    s.error(e);
                                }
                            }),
                            action: (0, l.L3)(function* (t, a, r, i) {
                                let { dynamicPagesResource: s, modelActionsLogger: n } = (0, l._$)(e);
                                try {
                                    e.withTriggersV2 && i
                                        ? yield s.actionV2({ anchorIds: [t], actionId: r, feedbackToken: i })
                                        : yield s.action({ anchorIds: [t], screenId: a, actionId: r });
                                } catch (e) {
                                    n.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var ef = a(29408),
                eb = a(94136),
                eP = a(58634),
                e_ = a(64581);
            let eI = l.gK.model('ModalsModel', {
                disclaimerModal: A.qt,
                shortcutsModal: A.qt,
                aboutAppModal: A.qt,
                overviewModal: A.qt,
                ugcTrackEditModal: K.n_,
                popoverOverPlayer: A.qt,
                crackdownModal: A.qt,
                overwrittenExperimentsModal: A.qt,
                buySubscriptionModal: A.qt,
                clearMemoryModal: A.qt,
                windowSettingsModal: A.qt,
                playerSettingsModal: A.qt,
                audioSettingsModal: A.qt,
                myVibeAnimationPerformanceSettingsModal: A.qt,
                myVibeAnimationAppearanceSettingsModal: A.qt,
                appUpdatesSettingsModal: A.qt,
                scrobblersSettingsModal: A.qt,
                downloaderSettingsModal: A.qt,
                systemSettingsModal: A.qt,
                globalShortcutsSettingsModal: A.qt,
                myVibeParamsSettingsModal: A.qt,
                miniPlayerSettingsModal: A.qt,
                ynisonSettingsModal: A.qt,
                lrclibSettingsModal: A.qt,
                discordRpcSettingsModal: A.qt,
                imageSliderModal: e_.J,
                promoLandingBuySubscriptionModal: A.qt,
                artistAboutModal: eP.Xj,
                bestRecommedationModal: A.qt,
            });
            var eC = a(3299),
                ek = a(6687),
                eT = a(50444),
                eA = a(16192),
                eD = a(81020),
                eN = a(90879),
                eR = a(64696),
                ex = a(51947),
                eL = a(15881),
                ew = a(57503),
                eO = a(9970),
                eM = a(44547);
            let eF = l.gK.model('Network', { isOffline: l.gK.optional(l.gK.boolean, !1) }),
                eG = l.gK.model('Entity', { progress: l.gK.maybe(l.gK.number), loadingState: l.gK.enumeration(Object.values(eM.DT)) }),
                eK = l.gK
                    .model('Slam', { networkStatus: eF, offlineMode: l.gK.maybe(l.gK.boolean), tracks: l.gK.map(eG) })
                    .views((e) => {
                        let t = {
                            isTrackDownloaded: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === eM.DT.DOWNLOADED;
                            },
                            isTrackDownloading: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === eM.DT.DOWNLOADING;
                            },
                            getTrackDownloadingProgress: (t) => {
                                var a, r;
                                return null != (r = null == (a = e.tracks.get(t)) ? void 0 : a.progress) ? r : 0;
                            },
                            isPlaylistDownloaded: (e) =>
                                e.every((e) => {
                                    let [a] = (0, eO.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, eO.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [r] = (0, eO.d)(a);
                                        return r && t.isTrackDownloaded(r) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, l._n)(e)) return !1;
                                return e.offlineMode;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setNetworkStatus: (t) => {
                            e.networkStatus = t;
                        },
                        setTrack: (t, a) => {
                            e.tracks.set(t, a);
                        },
                        setTracks: (t) => {
                            e.tracks = (0, l.wg)(t);
                        },
                        setOfflineMode: (t) => {
                            let { localStorage: a } = (0, l._$)(e);
                            (e.offlineMode = t), a.set(c.cYZ.OfflineMode, t);
                        },
                    }));
            var eU = a(1131),
                ej = a(23622),
                eX = a(67893),
                eB = a(92708);
            !(function (e) {
                (e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable');
            })(s || (s = {}));
            var eV = a(55550),
                eW = a(93510),
                eY = a(71983);
            let eq = l.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: eV.$o, type: l.gK.enumeration(Object.values(eY.u)) }),
                ez = l.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: l.gK.array(eq) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, eB.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, r) {
                                e.isNotificationExists(a.kind, r) || t.addNotification(a, r);
                            },
                            showAllNotifications() {
                                let t = (0, eB.HO)(e.pairs);
                                return (e.pairs = (0, l.wg)([])), t;
                            },
                        };
                        return t;
                    }),
                eH = l.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: eV.$o, file: eW.vz }),
                eQ = l.gK
                    .model('UgcUploadCenterModel', { tracks: l.gK.array(eH), notifications: ez, checkProcessingTracksAttempts: l.gK.number })
                    .views((e) => ({
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(eW.pK.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(eW.pK.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(eW.pK.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(eW.pK.PROCESSING);
                        },
                        get hasTracksInUploadingState() {
                            return this.preparingTracks.length + this.uploadingTracks.length > 0;
                        },
                        get shouldCheckProcessingTracks() {
                            return e.checkProcessingTracksAttempts < 25 && this.processingTracks.length > 0;
                        },
                        getPlaylistByKind(t) {
                            var a;
                            return null == (a = e.tracks.find((e) => e.playlist.kind === t)) ? void 0 : a.playlist;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            appendFiles(t, a) {
                                if (
                                    (t.forEach((t) => {
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, eY.u.FILE_TOO_LARGE);
                                        let r = eW.vz.create({ loadingState: eW.pK.IDLE, playlistKind: a.kind });
                                        r.setFile(t);
                                        let i = eH.create({ file: r, playlist: (0, eB.HO)(a) });
                                        e.tracks.unshift(i);
                                    }),
                                    !(0, l._n)(e))
                                )
                                    return;
                                let { playlist: r } = (0, l.Zn)(e);
                                r.search.setText(''), r.search.reset(), this.runUploadTracksQueue();
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let r = a[a.length - 1];
                                    r &&
                                        (await r.runUpload(),
                                        r.loadingState === eW.pK.REJECT &&
                                            r.errorReason === eW.oQ.TOO_MANY_FILES &&
                                            ((e.tracks = (0, l.wg)([])), t.addNotificationForPlaylistKind(r.playlistKind, eY.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue();
                                }
                            },
                            checkProcessingTracks: (0, l.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: r } = (0, l._$)(e),
                                    i = [];
                                if (e.checkProcessingTracksAttempts >= 25) return null;
                                t.setCheckProcessingTracksAttempts(e.checkProcessingTracksAttempts + 1);
                                try {
                                    let t = e.processingTracks.map((e) => e.trackId).filter((e) => !!e);
                                    if (!t.length) return null;
                                    let r = yield a.getTracksMeta({ trackIds: t, withProgress: !0 });
                                    null == r ||
                                        r.forEach((t) => {
                                            let a = e.tracks.find((e) => e.file.trackId === t.id && t.state === s.PLAYABLE);
                                            a && ((a.file.loadingState = eW.pK.RESOLVE), a.file.trackId && i.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    r.error(e);
                                }
                                return t.checkNotifications(i), t.moveTracksFromUploadCenterToPlaylist(), null;
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, l._n)(e)) return;
                                let { playlist: a } = (0, l.Zn)(e);
                                (null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === eW.pK.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, l.wg)(e.tracks.filter((e) => e.file.loadingState !== eW.pK.RESOLVE)));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, l.wg)(e.tracks.filter((e) => e.file.loadingState !== eW.pK.CANCELLED));
                            },
                            checkNotifications(a) {
                                let r = new Set();
                                e.tracks.forEach((e) => r.add(e.playlist.kind)),
                                    r.forEach((r) => {
                                        let i = e.getUploadingTracksByPlaylistKind(r);
                                        if (!(!i.length || i.some((e) => e.loadingState !== eW.pK.RESOLVE && e.loadingState !== eW.pK.REJECT)))
                                            if (i.some((e) => e.loadingState === eW.pK.REJECT)) {
                                                let s = !0;
                                                if (a && a.length) {
                                                    let t = i.map((e) => e.trackId).filter((e) => e),
                                                        r = (0, ej.A)(t, a, eX.A);
                                                    r.length &&
                                                        (s = r
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === eW.pK.REJECT));
                                                }
                                                s && t.addNotificationForPlaylistKind(r, eY.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(r, eY.u.SUCCESS);
                                    });
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let r = e.getPlaylistByKind(t);
                                r && e.notifications.addNonexistentNotification(r, a);
                            },
                        };
                        return t;
                    });
            a(62797);
            var e$ = a(76464),
                eZ = a(85303),
                eJ = a(67404);
            let e0 = l.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get isPaywallOpen() {
                                let { paywall: t } = (0, l.Zn)(e);
                                return t.modal.isOpened;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, l.Zn)(e),
                                    r = null == (a = t.getExperiment(c.zal.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if ('number' != typeof r || Number.isNaN(r)) return 2592e5;
                                return r;
                            },
                            get intervalMsCrackdown() {
                                var r;
                                let { experiments: t } = (0, l.Zn)(e),
                                    a = null == (r = t.getExperiment(c.zal.WebNextPaywallCrackdownInterval)) ? void 0 : r.value.interval;
                                if ('number' != typeof a || Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var i, s;
                                let { settings: a } = (0, l.Zn)(e);
                                if (null == (i = a.browserInfo) ? void 0 : i.isMobile) return !1;
                                let { localStorage: r } = (0, l._$)(e),
                                    n = null == (s = r.get(c.cYZ.DesktopPaywall)) ? void 0 : s.lastOnLoadShowDate;
                                if (void 0 === n) return !0;
                                return new Date(n).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, l.Zn)(e);
                                if (t.modal.isOpened || a.isOpened) return !1;
                                return !0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        showPaywall() {
                            let { paywall: t, settings: a } = (0, l.Zn)(e),
                                { localStorage: r } = (0, l._$)(e);
                            a.isMobile;
                        },
                        clearCrackdownTimeout() {
                            null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                        },
                        startCrackdownTimeout() {
                            let { paywall: t, settings: a, experiments: r } = (0, l.Zn)(e);
                            a.isMobile;
                        },
                    })),
                e1 = l.gK.model({ text: l.gK.string, buttonText: l.gK.string, href: l.gK.string }),
                e5 = l.gK
                    .compose(l.gK.model('RedAlert', { data: l.gK.maybeNull(e1) }), A.XT)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, l.Zn)(e);
                            return t.layout !== c.u40.Mobile && !!e.data;
                        },
                        get text() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.text;
                        },
                        get buttonText() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.buttonText;
                        },
                        get href() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.href;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            if (e.loadingState === c.GuX.PENDING) return;
                            let { user: t } = (0, l.Zn)(e),
                                { redAlertResource: a, modelActionsLogger: r } = (0, l._$)(e);
                            if (!t.isAuthorized) {
                                e.loadingState = c.GuX.IDLE;
                                return;
                            }
                            e.loadingState = c.GuX.PENDING;
                            try {
                                let t = yield a.getRedAlerts({ service: 'music', client: 'music-web', platform: 'web' });
                                (e.data = ((e) => {
                                    let t = e.alerts.find((e) => {
                                        let { id: t } = e;
                                        return 'music-grace' === t;
                                    });
                                    return void 0 === t ? null : (0, l.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = c.GuX.RESOLVE);
                            } catch (t) {
                                r.error(t), (e.loadingState = c.GuX.REJECT);
                            }
                        }),
                    }));
            var e4 = a(25870),
                e9 = a(22127);
            let e3 = l.gK.model('Root', {
                    experiments: A.YL,
                    user: e9.Fv,
                    wizard: ex.Ho,
                    collection: p.VT,
                    disclaimersDictionary: A.CA,
                    main: w.qi,
                    settings: A.dA,
                    currentClipInfo: ei.$d,
                    currentTrackInfo: K.UU,
                    album: b.MH,
                    promolanding: b.Wh,
                    artist: P.E,
                    library: A.br,
                    sonataState: eU.bG,
                    playlist: Y.Pn,
                    albumCPA: b.dx,
                    slides: e4.M1,
                    vibe: eD.D7,
                    search: ed,
                    vibeSettings: e$.LL,
                    pinsCollection: eC._1,
                    genre: N.G8,
                    genres: R.Zt,
                    mixes: Q.YM,
                    myMusic: V,
                    tag: eu.vV,
                    chart: _.vB,
                    post: z.VQ,
                    landingBlockEntities: S.hn,
                    contextMenuPlaylists: p.um,
                    musicHistory: X,
                    createPlaylist: eV.Co,
                    location: A.FN,
                    nonMusic: W.rN,
                    disclaimerModalState: A.xE,
                    communication: eE,
                    trailer: eA.v,
                    modals: eI,
                    landing: S.Ju,
                    fullscreenPlayer: eT.uZ,
                    fullscreenVideoPlayer: eN.bg,
                    releaseNotes: eL._o,
                    trackLyrics: K.DP,
                    ugcUploadCenter: eQ,
                    paymentWidgetModal: E.bo,
                    offers: A.Fr,
                    quality: eT.OK,
                    kids: x.GY,
                    slam: eK,
                    favoriteTracks: D,
                    advert: eT.kn,
                    track: ec.qQ,
                    continueListen: ef.mK,
                    playlistPersonal: q.Hj,
                    familyInvite: v.J4,
                    redAlert: e5,
                    shareIframe: ew.D,
                    paywall: ek.Sz,
                    downloadMobileApp: eb.A,
                    advertBanners: em,
                    label: L.X,
                    desktopPaywall: e0,
                    concerts: C.cw,
                    concertsDetails: k._,
                    concert: I.Bd,
                    wheel: eR.T,
                    words: eZ.LO,
                    lumen: eJ.$4,
                }),
                e2 = (e, t) => e3.create(e, t);
            var e7 = a(2774);
            let e6 = [
                'settings',
                'lumen',
                'sonataState',
                'offers',
                'modals',
                'shareIframe',
                'paywall',
                'downloadMobileApp',
                'disclaimerModalState',
                'fullscreenPlayer',
                'fullscreenVideoPlayer',
                'advertBanners',
                'redAlert',
                'communication',
                'desktopPaywall',
            ];
            (0, o.eO)(!1);
            let e8 = (e) => {
                    let { nonce: t, snapshotsRef: a } = e;
                    (0, u.useContext)(d.ServerInsertedHTMLContext);
                },
                te = (e) => {
                    let { children: t, nonce: a } = e,
                        r = (0, u.useRef)([]),
                        i = (0, c.Yx9)(),
                        [s] = (0, u.useState)(() => {
                            var e;
                            return (null == (e = window.__STATE_SNAPSHOT__) ? void 0 : e.length)
                                ? e2(window.__STATE_SNAPSHOT__[window.__STATE_SNAPSHOT__.length - 1], i)
                                : e2(f, i);
                        });
                    return (
                        (0, u.useLayoutEffect)(() => {
                            function e() {
                                var e;
                                let t = null == (e = window.__STATE_SNAPSHOT__) ? void 0 : e[window.__STATE_SNAPSHOT__.length - 1];
                                t &&
                                    (0, l.Nh)(
                                        s,
                                        e6.reduce((e, t) => ((e[t] = s[t]), e), (0, e7.A)(t)),
                                    ),
                                    delete window.__STATE_SNAPSHOT__;
                            }
                            return e(), window.addEventListener('yMusicStateSnapshotUpdated', e), () => window.removeEventListener('yMusicStateSnapshotUpdated', e);
                        }, [s]),
                        (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(e8, { nonce: a, snapshotsRef: r }), (0, n.jsx)(c.PdQ.Provider, { value: s, children: t })] })
                    );
                };
        },
        43993: (e, t, a) => {
            'use strict';
            function r(e) {
                let { genreTitle: t, artists: a, messageFormatter: r } = e,
                    i = null;
                return (
                    Array.isArray(a) &&
                        (i = a
                            .slice(0, 3)
                            .map((e) => ('artist' in e ? e.artist.name : e.name))
                            .join(', ')),
                    i ? r({ id: 'metadata.genre-description' }, { genreTitle: t, artistsList: i }) : r({ id: 'metadata.genre-description-short' }, { genreTitle: t })
                );
            }
            a.d(t, { f: () => r });
        },
        45514: (e, t, a) => {
            'use strict';
            a.d(t, { GenreAlbumsPage: () => f });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(59824),
                u = a(71926),
                c = a(32381),
                h = a(16486),
                g = a(75645),
                m = a(49574),
                y = a(44574),
                p = a(95393),
                v = a(63518),
                S = a(73215),
                E = a.n(S);
            let f = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { albumsSubpage: s },
                        settings: { isMobile: S },
                    } = (0, m.Pjs)(),
                    { formatMessage: f } = (0, l.A)(),
                    { contentScrollRef: b, setContentScrollRef: P } = (0, m.gKY)(),
                    _ = (0, m.W6M)(),
                    I = (0, o.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: p.c });
                        },
                        [s, t],
                    );
                (0, m.XcE)(s.pagesLoader, I),
                    (0, o.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, m.Jzs)(s.isResolved),
                    ((e) => {
                        (0, o.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, r;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    albums: e.items.map(h.fO),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                    },
                                };
                            })(e);
                            (0, v.g)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, m.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let C = (0, o.useMemo)(() => ({ Footer: () => (0, r.jsx)(y.A, { children: (0, r.jsx)(y.wi, { className: E().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, o.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: p.c })), s.isSomethingWrong))
                    return (0, r.jsx)(c.w, {});
                let k = s.isShimmerVisible ? 20 : s.items.length;
                return (0, r.jsx)(m.nVz, {
                    pageId: m._Q$.GENRE_ALBUMS,
                    children: (0, r.jsx)(g.hO, {
                        scrollElement: b,
                        outerTitle: s.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_ALBUMS_PAGE),
                            children: [
                                (0, r.jsx)(y.Y9, {
                                    variant: y.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: _.canBack,
                                    children: (0, r.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, r.jsx)(y.$$, {
                                    className: (0, i.$)(E().scrollContainer, E().important),
                                    customComponents: C,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = f({ id: 'loading-messages.entity-is-loading' }, { entityName: f({ id: 'entity-names.album' }) });
                                        return t ? (0, r.jsx)(h.aX, { album: t, contentLinesCount: 4 }, t.id) : (0, r.jsx)(y.Vt, { 'aria-label': a, linesCount: 4 });
                                    },
                                    totalCount: k,
                                    onGetDataByPage: I,
                                    pageSize: p.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    handleRef: P,
                                    context: { listAriaLabel: f({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: S,
                                    useWindowScroll: S,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        45531: (e, t, a) => {
            'use strict';
            a.d(t, { CommunicationsInitializer: () => n });
            var r = a(96103),
                i = a(55178),
                s = a(49574);
            let n = (0, r.PA)(() => {
                let { user: e, redAlert: t, communication: a } = (0, s.Pjs)();
                (0, i.useEffect)(() => {
                    e.isAuthorized && Promise.allSettled([a.getData(), t.getData()]);
                }, [t, a, e.isAuthorized]);
            });
        },
        45941: (e, t, a) => {
            'use strict';
            a.d(t, { KidsNotFoundPage: () => l });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(80719),
                o = a(49574);
            let l = (0, i.PA)(() => {
                let { kids: e } = (0, o.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, r.jsx)(n.M, {})
                );
            });
        },
        46030: (e, t, a) => {
            'use strict';
            a.d(t, { ChartPodcastsNotFoundPage: () => l });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(80719),
                o = a(49574);
            let l = (0, i.PA)(() => {
                let {
                    chart: { podcastsSubPage: e },
                } = (0, o.Pjs)();
                return (
                    (0, s.useEffect)(() => {
                        e.reset();
                    }, []),
                    (0, r.jsx)(n.M, {})
                );
            });
        },
        47209: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SonataProvider: () => iO });
            var r,
                i,
                s,
                n,
                o,
                l,
                d,
                u,
                c,
                h,
                g,
                m,
                y,
                p,
                v,
                S,
                E,
                f,
                b,
                P,
                _,
                I,
                C,
                k,
                T,
                A,
                D,
                N,
                R,
                x,
                L,
                w,
                O,
                M,
                F,
                G,
                K,
                U,
                j = a(32290),
                X = a(63283),
                B = a(96103),
                V = a(55178),
                W = a(82736),
                Y = a(91945),
                q = a(72676),
                z = a(96333),
                H = a(3623),
                Q = a(63849),
                $ = a(25718);
            !(function (e) {
                (e.PLAYING = 'playing'), (e.NOT_PLAYING = 'not-playing');
            })(r || (r = {}));
            let Z = (e) =>
                !!(
                    'object' == typeof e &&
                    e &&
                    'streamProgress' in e &&
                    'object' == typeof e.streamProgress &&
                    e.streamProgress &&
                    'endPositionSec' in e.streamProgress &&
                    'number' == typeof e.streamProgress.endPositionSec
                );
            class J {
                set playId(e) {
                    this.entityPlayId = e;
                }
                get playId() {
                    return this.entityPlayId;
                }
                set addTracksToPlayerTime(e) {
                    this.entityAddTracksToPlayerTime = e;
                }
                get addTracksToPlayerTime() {
                    return this.entityAddTracksToPlayerTime;
                }
                get totalPlayedSeconds() {
                    return (function (e) {
                        let t,
                            a,
                            i = 0,
                            s = [];
                        if (0 !== e.length) {
                            for (let i of (function (e) {
                                let t = [];
                                for (; 0 !== e.length; ) {
                                    let a = e.shift();
                                    if (a && a.stage === r.PLAYING) {
                                        let e = t[t.length - 1];
                                        (e && e.stage !== r.NOT_PLAYING) || t.push(a);
                                    } else if (a && a.stage === r.NOT_PLAYING) {
                                        let e = t[t.length - 1];
                                        e && e.stage === r.PLAYING && t.push(a);
                                    }
                                }
                                let a = t[t.length - 1];
                                return a && a.stage === r.PLAYING && t.push({ stage: r.NOT_PLAYING, perfNow: performance.now(), ts: Date.now() }), t;
                            })(e))
                                i.stage === r.PLAYING ? (t = i.perfNow) : (a = i.perfNow), t && a && (s.push(a - t), (t = void 0), (a = void 0));
                            for (let e of s) i += e;
                            return Math.round((i / 1e3 + Number.EPSILON) * 1e3) / 1e3;
                        }
                        return i;
                    })([...this.entityTimeStagesOfPlayback]);
                }
                get timeStagesOfPlayback() {
                    return this.entityTimeStagesOfPlayback;
                }
                saveTimeStageOfPlayback(e) {
                    let t = { stage: e.stage, perfNow: performance.now(), ts: Date.now() };
                    e.reason && (t.reason = e.reason), this.entityTimeStagesOfPlayback.push(t);
                }
                clearTimeStagesOfPlayback() {
                    this.entityTimeStagesOfPlayback = [];
                }
                get data() {
                    return this.entityData;
                }
                get isAvailable() {
                    return !!('available' in this.entityData.meta && this.entityData.meta.available);
                }
                get isDisliked() {
                    return void 0 !== this.likeStore && this.likeStore.isTrackDisliked(this.entityData.meta.id);
                }
                get isExplicit() {
                    return 'contentWarning' in this.entityData.meta && this.entityData.meta.contentWarning === Q.K.EXPLICIT;
                }
                get everFinished() {
                    return Z(this.entityData.meta) ? this.entityData.meta.streamProgress.everFinished : null;
                }
                set everFinished(e) {
                    Z(this.entityData.meta) && null !== e && (this.entityData.meta.streamProgress.everFinished = e);
                }
                hasPlayId() {
                    return '' !== this.playId;
                }
                constructor(e) {
                    (0, Y._)(this, 'entityData', void 0),
                        (0, Y._)(this, 'likeStore', void 0),
                        (0, Y._)(this, 'entityPlayId', ''),
                        (0, Y._)(this, 'entityAddTracksToPlayerTime', ''),
                        (0, Y._)(this, 'entityTimeStagesOfPlayback', []),
                        (0, Y._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, Y._)(this, 'mediaSourceData', null),
                        (0, Y._)(this, 'expectedQuality', null),
                        (0, Y._)(this, 'startPosition', null),
                        (0, Y._)(this, 'contentType', $.e.AUDIO),
                        (0, Y._)(this, 'hidden', !1),
                        (this.entityData = e.data),
                        (this.likeStore = e.likeStore);
                }
            }
            class ee extends J {}
            class et extends J {
                constructor(...e) {
                    super(...e), (0, Y._)(this, 'contentType', $.e.DOWNLOADED_AUDIO);
                }
            }
            class ea extends J {}
            class er extends J {
                get isAvailable() {
                    return !1;
                }
                get isDisliked() {
                    return !1;
                }
            }
            var ei = a(29222);
            class es extends ei.t {
                constructor(e, { code: t = 'E_ENTITY_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'EntityFactoryException'), Object.setPrototypeOf(this, es.prototype);
                }
            }
            class en extends J {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, Y._)(this, 'contentType', $.e.HLS);
                }
            }
            class eo extends J {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
            }
            class el extends J {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, Y._)(this, 'contentType', $.e.CLIP);
                }
            }
            class ed extends J {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, Y._)(this, 'contentType', $.e.HLS);
                }
            }
            class eu {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
                    try {
                        switch (a.type) {
                            case H.R.Music:
                                t = new ee({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.DownloadedMusic:
                                t = new et({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.VibeTrack:
                                t = new ea({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.Generative:
                                t = new en({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.SmartPreview:
                                t = new eo({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.Clip:
                                t = new el({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.Radio:
                                t = new ed({ data: a, likeStore: this.likeStore });
                                break;
                            case H.R.Unknown:
                                a.meta.type, z.S.MUSIC, (t = new ee({ data: { ...a, type: H.R.Music }, likeStore: this.likeStore }));
                                break;
                            case q.z4.Unloaded:
                                t = new er({ data: a, likeStore: this.likeStore });
                        }
                    } catch (e) {
                        throw new es('Error while creating entity', { cause: e, data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new es('Cannot create entities with nonexistent type', { code: 'E_NONEXISTENT_ENTITY_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, Y._)(this, 'likeStore', void 0), (this.likeStore = e.likeStore);
                }
            }
            var ec = a(71483);
            function eh(e, t) {
                let a = [];
                for (let r of e) for (let e of r) a.push({ type: q.z4.Unloaded, meta: e, additional: t });
                return a;
            }
            var eg = a(46862);
            class em extends ei.t {
                constructor(e, { code: t = 'E_CONTEXT', name: a, ...r } = {}) {
                    super(e, { code: t, ...r }),
                        (0, Y._)(this, 'name', void 0),
                        (this.name = null != a ? a : 'ContextException'),
                        Object.setPrototypeOf(this, em.prototype);
                }
            }
            class ey extends q.EX {
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                get availableActions() {
                    return this.actions;
                }
                logError(e) {
                    let t,
                        { name: a, message: r = 'Error in YaMusicContext', data: i, cause: s, originalError: n } = e;
                    (t = n instanceof ei.t ? n : new em(r, { name: a, cause: (0, W.createObjectFromError)(s), data: i })),
                        this.logger.error(t, { ...t.data, code: t.code, cause: t.cause, stack: t.stack, message: t.message });
                }
                constructor({ logger: e }) {
                    super(),
                        (0, Y._)(this, 'isCurrent', !1),
                        (0, Y._)(this, 'actions', {
                            moveBackward: new eg.cJ(!1),
                            moveForward: new eg.cJ(!0),
                            repeat: new eg.cJ(null),
                            shuffle: new eg.cJ(null),
                            speed: new eg.cJ(null),
                        }),
                        (0, Y._)(this, 'from', ''),
                        (0, Y._)(this, 'utmLink', void 0),
                        (0, Y._)(this, 'logger', void 0),
                        (this.logger = e);
                }
            }
            function ep(e, t) {
                return e.map((e) => ({ type: H.R.SmartPreview, meta: e, additional: t }));
            }
            class ev extends ey {
                loadTrailer() {
                    return this.albumsResource
                        .getTrailer({ albumId: Number(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new em('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_TRAILER',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return this.albumsResource
                        .getAlbumWithRichTracks({ albumId: Number(this.contextData.meta.id), resumeStream: !0 })
                        .then((e) => ((this.contextData.meta = e), e))
                        .catch((e) => {
                            throw new em('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_CONTEXT_META',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => ep(t.trailer.tracks, e))
                        : this.contextData.meta.volumes
                          ? Promise.resolve(eh(this.contextData.meta.volumes, e))
                          : this.loadContextMeta().then((t) => Promise.resolve(eh(t.volumes, e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                get resumeFromIndex() {
                    var e;
                    if ((null == (e = this.contextData.meta.resumeFrom) ? void 0 : e.trackId) && Array.isArray(this.contextData.meta.volumes)) {
                        let e = [].concat(...this.contextData.meta.volumes).findIndex((e) => {
                            var t;
                            return String(e.id) === String(null == (t = this.contextData.meta.resumeFrom) ? void 0 : t.trackId);
                        });
                        if (e >= 0) return e;
                    }
                    return null;
                }
                constructor(e) {
                    super(e), (0, Y._)(this, 'contextData', void 0), (0, Y._)(this, 'albumsResource', void 0), (0, Y._)(this, 'variables', void 0);
                    let { data: t, albumsResource: a, variables: r } = e;
                    (this.albumsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            var eS = a(86882);
            class eE extends ey {
                loadTrailer() {
                    let { uid: e, kind: t } = (0, eS.I)(this.contextData.meta.id);
                    return this.usersResource
                        .getPlaylistTrailer({ userId: e, playlistKind: t })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new em('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_TRAILER',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.contextData.meta.uuid,
                        { uid: t, kind: a } = (0, eS.I)(this.contextData.meta.id),
                        r = 3 === a;
                    return (
                        r && void 0 !== e
                            ? this.playlistResource.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 })
                            : this.usersResource.getPlaylistWithTracksIds({ userId: t, playlistKind: a, resumeStream: !1, trackMetaType: r ? 'music' : void 0 })
                    )
                        .then((e) => {
                            let t,
                                a,
                                r = { ...e, id: ((t = e.uid), (a = e.kind), ''.concat(t, ':').concat(a)) };
                            return (this.contextData.meta = r), r;
                        })
                        .catch((e) => {
                            throw new em('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_CONTEXT_META',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => ep(t.trailer.tracks, e));
                    if (this.contextData.meta.tracks) {
                        let t = [];
                        for (let a of this.contextData.meta.tracks) t.push({ type: q.z4.Unloaded, meta: a, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        for (let r of t.tracks) a.push({ type: q.z4.Unloaded, meta: r, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, Y._)(this, 'contextData', void 0),
                        (0, Y._)(this, 'usersResource', void 0),
                        (0, Y._)(this, 'playlistResource', void 0),
                        (0, Y._)(this, 'variables', void 0);
                    let { data: t, playlistResource: a, usersResource: r, variables: i } = e;
                    (this.usersResource = r), (this.playlistResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = i);
                }
            }
            class ef extends ey {
                loadTrailer() {
                    return this.artistsResource
                        .getTrailer({ artistId: String(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new em('Error in ArtistContext', {
                                code: 'E_ARTIST_LOAD_TRAILER',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return (
                        this.artistsResource
                            .getInfo({ artistId: String(this.contextData.meta.id) })
                            .then((e) => {
                                Object.assign(this.contextData.meta, e);
                            })
                            .catch((e) => {
                                throw new em('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, W.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            }),
                        this.artistsResource
                            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
                            .then((e) => ((this.contextData.meta.trackIds = e), this.contextData.meta))
                            .catch((e) => {
                                throw new em('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, W.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            })
                    );
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => ep(t.trailer.tracks, e));
                    if (this.contextData.meta.trackIds) {
                        let t = [];
                        for (let a of this.contextData.meta.trackIds) t.push({ type: q.z4.Unloaded, meta: { id: a }, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        if (t.trackIds) for (let r of t.trackIds) a.push({ type: q.z4.Unloaded, meta: { id: r }, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, Y._)(this, 'contextData', void 0), (0, Y._)(this, 'artistsResource', void 0), (0, Y._)(this, 'variables', void 0);
                    let { data: t, artistsResource: a, variables: r } = e;
                    (this.artistsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            var eb = a(65163);
            function eP(e) {
                return (null == e ? void 0 : e.data.type) === H.R.VibeTrack;
            }
            let e_ = 'user:onyourwave';
            function eI(e) {
                var t;
                let a;
                if (!(a = e.data.type === q.z4.Unloaded ? e.data.meta.id : 'realId' in e.data.meta ? e.data.meta.realId : e.data.meta.id))
                    throw new ei.t('Can not create trackId for entity.');
                let r = 'albums' in e.data.meta ? e.data.meta.albums : [];
                return r && (null == (t = r[0]) ? void 0 : t.id) ? ''.concat(a, ':').concat(r[0].id) : String(a);
            }
            function eC() {
                return new Date().toISOString();
            }
            function ek(e) {
                let t,
                    a,
                    r,
                    { entity: i, type: s, from: n } = e;
                'batchId' in i.data && void 0 !== i.data.batchId && (t = i.data.batchId);
                try {
                    switch (s) {
                        case eb.O.RADIO_STARTED:
                            r = { event: { type: s, timestamp: eC(), from: n }, from: n };
                            break;
                        case eb.O.TRACK_STARTED:
                        case eb.O.LIKE:
                        case eb.O.UNLIKE:
                        case eb.O.UNDISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: eC(), trackId: eI(i) }, from: n };
                            break;
                        case eb.O.TRACK_FINISHED:
                            if (eP(i) && i.data.meta.durationMs) {
                                let e = i.data.meta.durationMs / 1e3;
                                a = e % 1 == 0 ? e : Number(e.toFixed(3));
                            }
                            r = {
                                batchId: t,
                                event: { type: s, timestamp: eC(), trackId: eI(i), totalPlayedSeconds: i.totalPlayedSeconds, trackLengthSeconds: a },
                                from: n,
                            };
                            break;
                        case eb.O.SKIP:
                        case eb.O.DISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: eC(), trackId: eI(i), totalPlayedSeconds: i.totalPlayedSeconds }, from: n };
                    }
                    return { feedback: r };
                } catch (e) {
                    return { feedback: void 0, error: e };
                }
            }
            function eT(e, t) {
                return e.some(
                    (e) =>
                        (function (e, t) {
                            if (e === t) return !0;
                            let a = [eb.O.SKIP, eb.O.TRACK_FINISHED];
                            return a.includes(e) && a.includes(t);
                        })(t.event.type, e.event.type) &&
                        'trackId' in t.event &&
                        'trackId' in e.event &&
                        t.event.trackId === e.event.trackId,
                );
            }
            var eA = a(68100);
            let eD = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                eN = (e) => eD.test(String(e)),
                eR = (e) => {
                    let { meta: t } = e.data,
                        a = 'trackSource' in t ? t.trackSource : void 0;
                    return void 0 !== a ? a === eA.J.UGC || a === eA.J.OWN_REPLACED_TO_UGC : eN(t.id);
                };
            var ex = a(75369);
            function eL(e) {
                if (eP(e) || (0, ex.b)(e)) return e.data.radioSessionId;
            }
            class ew {
                set afterErrorHook(e) {
                    this.afterError = e;
                }
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeFeedbacksForWasPlayedTracks(e, t) {
                    for (let i of e)
                        if (eP(i.entity) && i.entity.data.wasPlayed) {
                            var a, r;
                            let { feedback: e, error: s } = ek({ entity: i.entity, type: eb.O.TRACK_STARTED, from: t }),
                                { feedback: n, error: o } = ek({ entity: i.entity, type: eb.O.TRACK_FINISHED, from: t }),
                                l = eL(i.entity);
                            e || null == (a = this.afterError) || a.promise(new ei.t('[VibeContext] Can not create feedback for history vibe track', { cause: s })),
                                n || null == (r = this.afterError) || r.promise(new ei.t('[VibeContext] Can not create feedback for history vibe track', { cause: o })),
                                e && n && this.sessionStore.storeSessionFeedbacksInHistory([e, n], l);
                        }
                }
                storeDeferredSkip(e) {
                    var t, a, r;
                    let { entity: i, from: s } = e;
                    if (!this.multipleSessions) return !1;
                    let n = eL(i);
                    if (!n) return !1;
                    let { feedback: o, error: l } = ek({ entity: i, type: eb.O.SKIP, from: s });
                    if (!o) return null == (t = this.afterError) || t.promise(new ei.t('[VibeContext] Cannot create deferred SKIP feedback', { cause: l })), !1;
                    if ('trackId' in o.event && eR(i)) return !1;
                    let d = this.sessionStore.store.get(n);
                    return (
                        !(eT(null != (a = null == d ? void 0 : d.historyFeedbacks) ? a : [], o) || eT(null != (r = null == d ? void 0 : d.feedbacks) ? r : [], o)) &&
                        (this.validateFeedback(o), this.sessionStore.storeSessionFeedbacksWithMultipleSessions(o, n), !0)
                    );
                }
                sendFeedback(e) {
                    let { entity: t, type: a, from: r, session: i, sendWithSessionTracks: s = !1, saveFeedbackToHistory: n = !1 } = e;
                    if (this.multipleSessions) return this.sendFeedbackWithMultipleSessions(e);
                    let { radioSessionId: o } = i,
                        { feedback: l, error: d } = ek({ entity: t, type: a, from: r });
                    return l
                        ? ('trackId' in l.event && eR(t)) || eT(this.sessionStore.feedbacksHistory, l) || eT(this.sessionStore.feedbacksForSending, l)
                            ? Promise.resolve()
                            : (this.validateFeedback(l), s)
                              ? (this.sessionStore.storeSessionFeedbacks(l, i.radioSessionId), Promise.resolve())
                              : this.rotorResource
                                    .sessionFeedback({ radioSessionId: o, feedback: l })
                                    .then(() => (n && this.sessionStore.storeSessionFeedbacksInHistory([l], i.radioSessionId), Promise.resolve()))
                        : Promise.reject(new ei.t('Cannot create feedback', { data: { type: a }, cause: d }));
                }
                sendFeedbacksForInactiveSessions() {
                    if (!this.multipleSessions) return Promise.resolve();
                    let e = [];
                    for (let r of this.sessionStore.store.values())
                        if (r.feedbacks.length && !r.active) {
                            var t, a;
                            e.push({ radioSessionId: r.radioSessionId, feedbacks: r.feedbacks, seeds: null != (a = null == (t = r.wave) ? void 0 : t.seeds) ? a : [] });
                        }
                    return e.length
                        ? this.rotorResource.sessionsFeedbacks({ sessions: e }).then(() => {
                              for (let t of e) {
                                  let e = this.sessionStore.store.get(t.radioSessionId);
                                  e && (e.historyFeedbacks.push(...e.feedbacks), (e.feedbacks = []));
                              }
                          })
                        : Promise.resolve();
                }
                sendDeferredFeedbacks(e) {
                    let { radioSessionId: t, entity: a, from: r, seeds: i } = e,
                        { feedback: s, error: n } = ek({ entity: a, type: eb.O.SKIP, from: r });
                    if (!s) return Promise.reject(new ei.t('Cannot create deferred skip feedback', { cause: n }));
                    let o = this.sessionStore.getSessionsFeedbacks(),
                        l = o ? [...o] : [];
                    if ('trackId' in s.event && eR(a)) return l.length ? this.rotorResource.sessionsFeedbacks({ sessions: l }).then(() => void 0) : Promise.resolve();
                    this.validateFeedback(s);
                    let d = l.find((e) => e.radioSessionId === t);
                    return (
                        d ? d.feedbacks.push(s) : l.push({ radioSessionId: t, seeds: i, feedbacks: [s] }),
                        this.rotorResource.sessionsFeedbacks({ sessions: l }).then(() => void 0)
                    );
                }
                sendFeedbackWithMultipleSessions(e) {
                    var t, a;
                    let { entity: r, type: i, from: s, session: n, sendWithSessionTracks: o = !1, saveFeedbackToHistory: l = !1 } = e,
                        d = eL(r);
                    if ((i === eb.O.RADIO_STARTED && (d = n.radioSessionId), !d)) return Promise.reject(new ei.t('Cannot create feedback. No radioSessionId.'));
                    let { feedback: u, error: c } = ek({ entity: r, type: i, from: s });
                    if (!u) return Promise.reject(new ei.t('Cannot create feedback', { data: { type: i }, cause: c }));
                    if ('trackId' in u.event && eR(r)) return Promise.resolve();
                    let h = this.sessionStore.store.get(d);
                    return eT(null != (t = null == h ? void 0 : h.historyFeedbacks) ? t : [], u) || eT(null != (a = null == h ? void 0 : h.feedbacks) ? a : [], u)
                        ? Promise.resolve()
                        : (this.validateFeedback(u), o)
                          ? (this.sessionStore.storeSessionFeedbacksWithMultipleSessions(u, d), Promise.resolve())
                          : this.rotorResource
                                .sessionFeedback({ radioSessionId: d, feedback: u })
                                .then(() => (l && this.sessionStore.storeSessionFeedbacksInHistoryWithMultipleSessions([u], d), Promise.resolve()));
                }
                validateFeedback(e) {
                    let t = [eb.O.TRACK_STARTED, eb.O.TRACK_FINISHED, eb.O.SKIP, eb.O.LIKE, eb.O.UNLIKE, eb.O.DISLIKE, eb.O.UNDISLIKE];
                    if (!e.batchId && t.includes(e.event.type)) {
                        var a;
                        null == (a = this.afterError) || a.promise(new ei.t('[VibeContext] No batchId in feedback', { data: { feedback: e } }));
                    }
                }
                constructor({ rotorResource: e, variables: t, sessionStore: a }) {
                    (0, Y._)(this, 'rotorResource', void 0),
                        (0, Y._)(this, 'sessionStore', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'afterError', void 0),
                        (this.rotorResource = e),
                        (this.sessionStore = a),
                        (this.variables = t);
                }
            }
            function eO(e) {
                let { targetEntityWasPlayed: t, hasSourceContext: a, targetEntityIndex: r, livePlayableIndex: i, targetEntityIsLastEntity: s, useWaveQueue: n } = e;
                return !1 === n ? !s && t : !s && (t || a || r <= i);
            }
            function eM(e) {
                return e.filter((e) => {
                    if ('string' == typeof e) {
                        let [t] = e.split(':');
                        return !eN(null != t ? t : '');
                    }
                    return !e.ugc;
                });
            }
            class eF {
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeSessionFeedbacksInHistory(e, t) {
                    if (this.multipleSessions && t) return void this.storeSessionFeedbacksInHistoryWithMultipleSessions(e, t);
                    for (let t of e) this.feedbacksHistory.push(t);
                }
                storeSessionFeedbacks(e, t) {
                    if (this.multipleSessions) return void this.storeSessionFeedbacksWithMultipleSessions(e, t);
                    let a = Array.isArray(e) ? e : [e];
                    this.feedbacksForSending.push(...a);
                }
                storeSessionFeedbacksInHistoryWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        let t = Array.isArray(e) ? e : [e];
                        a.historyFeedbacks.push(...t);
                    } else throw new ei.t('Can not store history feedback. No session was created in map.');
                }
                storeSessionFeedbacksWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        let t = Array.isArray(e) ? e : [e];
                        a.feedbacks.push(...t);
                    } else throw new ei.t('Can not store feedbacks for sending. No session was created in map.');
                }
                getSessionFeedbacksWithMultipleSessions(e) {
                    let t = this.store.get(e);
                    if (t) {
                        let e = t.feedbacks;
                        return (t.feedbacks = []), e;
                    }
                }
                getSessionsFeedbacks() {
                    let e = [];
                    for (let [r, i] of this.store.entries()) {
                        if (i.feedbacks.length) {
                            var t, a;
                            e.push({ radioSessionId: r, feedbacks: i.feedbacks, seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [] }),
                                (i.feedbacks = []);
                        }
                        i.feedbacks = [];
                    }
                    return 0 !== e.length ? e : void 0;
                }
                getSessionFeedbacks(e) {
                    if (this.multipleSessions) return this.getSessionFeedbacksWithMultipleSessions(e);
                    let t = this.feedbacksForSending;
                    return (this.feedbacksForSending = []), t;
                }
                clearStoredFeedbacks() {
                    (this.feedbacksHistory = []), (this.feedbacksForSending = []), this.store.clear();
                }
                addActiveSession(e) {
                    let { session: t, feedbacks: a = [] } = e;
                    this.store.forEach((e) => {
                        e.active = !1;
                    });
                    let { radioSessionId: r, wave: i, acceptedSeeds: s, pumpkin: n, batchId: o, descriptionSeed: l } = t,
                        d = { radioSessionId: r, wave: i, acceptedSeeds: s, pumpkin: n, descriptionSeed: l, batchId: o, feedbacks: a, historyFeedbacks: [], active: !0 };
                    this.store.set(r, d), (this.observableActiveSession.value = d);
                }
                addClonedSession(e) {
                    let { radioSessionId: t, feedbacks: a = [] } = e;
                    this.store.set(t, { radioSessionId: t, feedbacks: a, historyFeedbacks: [], active: !1 });
                }
                constructor({ variables: e }) {
                    (0, Y._)(this, 'store', new Map()),
                        (0, Y._)(this, 'feedbacksHistory', []),
                        (0, Y._)(this, 'feedbacksForSending', []),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'observableActiveSession', new eg.cJ(void 0)),
                        (this.variables = e);
                }
            }
            !(function (e) {
                (e.CLONED = 'cloned'), (e.RESTORED_TO_DEFAULT_SEED = 'restoredToDefaultSeed');
            })(i || (i = {}));
            var eG = a(21263);
            function eK(e) {
                let { sequence: t, batchId: a, radioSessionId: r, additional: i } = e,
                    s = [];
                for (let e of t)
                    s.push({
                        type: H.R.VibeTrack,
                        additional: i,
                        batchId: a,
                        radioSessionId: r,
                        meta: { ...e.track, liked: e.liked, trackParameters: e.trackParameters },
                        fromCurrentContext: !0,
                        wasPlayed: !1,
                    });
                return s;
            }
            class eU {
                applyNewSession(e) {
                    return (
                        (this.contextData.meta.session = e), (this.contextData.meta.id = (0, eG.f)(e.wave.seeds)), this.sessionStore.addActiveSession({ session: e }), e
                    );
                }
                get shouldResetSeedToDefault() {
                    var e;
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        { multipleSessions: a } = null != (e = this.variables) ? e : {},
                        { enabled: r, sessionLifeTimeMin: i } = null != a ? a : {};
                    return (
                        !(!r || void 0 === i || ((null == t ? void 0 : t.wave.seeds) && 1 === t.wave.seeds.length && t.wave.seeds.includes(e_))) &&
                        Date.now() - this.timeOfLastInteractionWithVibe >= 60 * i * 1e3
                    );
                }
                sessionClone() {
                    let { cloneSessionId: e, queue: t, trackToStartFrom: a, includeTracksInResponse: r, allowExplicit: i, interactive: s } = this.contextData;
                    return e
                        ? this.rotorResource
                              .sessionClone({
                                  includeWaveModel: !0,
                                  radioSessionId: e,
                                  trackToStartFrom: a,
                                  queue: t,
                                  allowExplicit: i,
                                  includeTracksInResponse: r,
                                  interactive: s,
                              })
                              .then((e) => this.applyNewSession(e))
                              .catch((e) => {
                                  throw new ei.t('Error in clone vibe session', { cause: e });
                              })
                        : Promise.reject(new ei.t('Error in clone vibe session. No cloneSessionId'));
                }
                sessionNew() {
                    let { seeds: e, queue: t, trackToStartFrom: a, includeTracksInResponse: r, allowExplicit: i, interactive: s } = this.contextData;
                    return this.rotorResource
                        .sessionNew({ seeds: e, includeWaveModel: !0, trackToStartFrom: a, queue: t, allowExplicit: i, includeTracksInResponse: r, interactive: s })
                        .then((e) => this.applyNewSession(e))
                        .catch((e) => {
                            throw new ei.t('Error in create new vibe session', { cause: e });
                        });
                }
                createSessionWithSettings(e) {
                    let { sessionsFeedbacks: t, seeds: a, rotorQueueParam: r, allowExplicit: i, interactive: s, from: n } = e,
                        { trackToStartFrom: o, includeTracksInResponse: l } = this.contextData;
                    return this.rotorResource
                        .sessionNew({
                            sessions: t,
                            includeTracksInResponse: l,
                            trackToStartFrom: o,
                            seeds: a,
                            queue: r,
                            allowExplicit: i,
                            includeWaveModel: !0,
                            interactive: s,
                        })
                        .then((e) => ((this.contextData.meta.allowExplicit = i), n && (this.contextData.from = n), this.applyNewSession(e)))
                        .catch((e) => {
                            throw new ei.t('Error in create new vibe session with settings', { cause: e });
                        });
                }
                defaultSessionNew(e) {
                    let { includeTracksInResponse: t, allowExplicit: a, queue: r } = this.contextData,
                        i = this.sessionStore.getSessionsFeedbacks();
                    return this.rotorResource
                        .sessionNew({
                            sessions: i,
                            seeds: [e_],
                            queue: null != e ? e : r,
                            includeWaveModel: !0,
                            allowExplicit: a,
                            includeTracksInResponse: t,
                            interactive: !0,
                        })
                        .then((e) => {
                            if (i) for (let e of i) this.sessionStore.storeSessionFeedbacksInHistory(e.feedbacks, e.radioSessionId);
                            return this.applyNewSession(e);
                        })
                        .catch((e) => {
                            if (i) for (let e of i) this.sessionStore.storeSessionFeedbacks(e.feedbacks, e.radioSessionId);
                            throw new ei.t('Error in create new vibe session', { cause: e });
                        });
                }
                getLoadContextMetaRequest() {
                    let { cloneSessionId: e } = this.contextData;
                    return this.shouldResetSeedToDefault
                        ? ((this.restoreMethod = i.RESTORED_TO_DEFAULT_SEED), this.defaultSessionNew())
                        : e
                          ? ((this.restoreMethod = i.CLONED), this.sessionClone())
                          : this.sessionNew();
                }
                getEntitiesFromDefaultSessionNew(e) {
                    let t = { from: this.contextData.from, utmLink: this.contextData.utmLink };
                    return this.defaultSessionNew(e).then((e) => {
                        let { batchId: a, sequence: r, radioSessionId: i } = e;
                        return eK({ batchId: a, sequence: r, radioSessionId: i, additional: t });
                    });
                }
                getEntitiesFromCurrentSession(e) {
                    if (!this.contextData.meta.session) return Promise.reject(new ei.t('Cannot get next vibe tracks. No session'));
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        a = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        r = this.sessionStore.getSessionFeedbacks(t.radioSessionId),
                        { radioSessionId: i } = t;
                    return this.rotorResource
                        .sessionTracks({ radioSessionId: i, queue: e, feedbacks: r })
                        .then((e) => {
                            r && this.sessionStore.storeSessionFeedbacksInHistory(r, i);
                            let { batchId: t, sequence: s } = e,
                                n = eK({ batchId: t, sequence: s, radioSessionId: i, additional: a });
                            return (this.contextData.meta.sessionTracks = e), (this.contextData.meta.sessionTracks.sequence = []), n;
                        })
                        .catch(
                            (e) => (
                                r && this.sessionStore.storeSessionFeedbacks(r, t.radioSessionId),
                                Promise.reject(new ei.t('Error in getting next vibe tracks from current session', { cause: e }))
                            ),
                        );
                }
                getEntitiesFromNextSequence(e) {
                    Promise.resolve([]);
                    return (this.shouldResetSeedToDefault ? this.getEntitiesFromDefaultSessionNew(e) : this.getEntitiesFromCurrentSession(e)).then((e) => e);
                }
                getEntitiesFromInitialSequence() {
                    if (!this.contextData.meta.session) return [];
                    let e = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        { batchId: t, sequence: a, radioSessionId: r } = this.contextData.meta.session,
                        i = eK({ batchId: t, sequence: a, radioSessionId: r, additional: e });
                    return (this.contextData.meta.session.sequence = []), i;
                }
                constructor({ contextData: e, rotorResource: t, sessionStore: a, variables: r }) {
                    (0, Y._)(this, 'contextData', void 0),
                        (0, Y._)(this, 'rotorResource', void 0),
                        (0, Y._)(this, 'sessionStore', void 0),
                        (0, Y._)(this, 'timeOfLastInteractionWithVibe', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'restoreMethod', void 0),
                        (this.contextData = e),
                        (this.rotorResource = t),
                        (this.sessionStore = a),
                        (this.variables = r),
                        (this.timeOfLastInteractionWithVibe = e.timeOfLastInteractionWithVibe ? e.timeOfLastInteractionWithVibe : Date.now());
                }
            }
            function ej(e, t, a) {
                let r = void 0 !== a ? a : t;
                return eM(e.slice(r, r + 2));
            }
            function eX(e, t) {
                let a = null,
                    r = null;
                for (let i = e.length - 1; i >= 0; i--) {
                    let s = e[i];
                    if (!s || !eP(s.entity)) continue;
                    let { entity: n, sourceContext: o } = s;
                    if (!o) {
                        if (n.data.wasPlayed || t === i) break;
                        (a = s), (r = i);
                    }
                }
                let i = null !== r ? r + 1 : e.length;
                return { vibeHistory: e.slice(0, i), firstNotPlayedVibeEntity: a, firstNotPlayedVibeEntityIndex: r };
            }
            function eB(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { entityList: a, livePlayableIndex: r, index: i } = e;
                return t
                    ? ej(
                          a.value.map((e) => eI(e.entity)),
                          i.value,
                          r.value,
                      )
                    : eM(
                          (function (e, t) {
                              let { vibeHistory: a } = eX(e, t);
                              return a.filter((e) => !eR(e.entity)).map((e) => eI(e.entity));
                          })(a.value, i.value),
                      ).slice(-100);
            }
            class eV extends ey {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (this.afterErrorHook = t.afterError),
                        (this.feedbacksController.afterErrorHook = t.afterError),
                        t.beforeContextSet.tap('VibeContext', () => {
                            var e;
                            if (!this.isCurrentContext) return;
                            let t = a.state.queueState.currentEntity.value;
                            if (!t) return;
                            if (!(null == (e = this.variables) ? void 0 : e.flushDeferredFeedbacksOnContextSwitch)) {
                                this.sendFeedback({ entity: t.entity, type: eb.O.SKIP }), this.sessionStore.clearStoredFeedbacks();
                                return;
                            }
                            let r = this.contextData.meta.session;
                            if (!r) {
                                this.logVibeError({ message: 'Cannot send feedbacks on context switch. No session' }), this.sessionStore.clearStoredFeedbacks();
                                return;
                            }
                            let i = this.feedbacksController.sendDeferredFeedbacks({
                                radioSessionId: r.radioSessionId,
                                entity: t.entity,
                                from: this.contextData.from,
                                seeds: r.wave.seeds,
                            });
                            this.sessionStore.clearStoredFeedbacks(),
                                i.catch((e) => {
                                    this.logVibeError({ message: 'Error while sending vibe feedbacks on context switch', cause: e });
                                });
                        }),
                        t.afterSetupQueue.tap('VibeContext', () => {
                            if (!this.isCurrentContext || !this.sessionController.restoreMethod) return;
                            let { value: e } = a.state.queueState.entityList;
                            if ((this.feedbacksController.storeFeedbacksForWasPlayedTracks(e.slice(0, -1), this.from), this.contextData.meta.session)) {
                                let e = this.sessionController.getEntitiesFromInitialSequence();
                                a.injectLast({ entitiesData: e });
                            }
                            this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                        }),
                        t.afterMediaStartPlaying.tapPromise('VibeContext', () =>
                            this.isCurrentContext && this.contextData.meta.session
                                ? new Promise((e) => {
                                      let t = a.state.queueState.currentEntity.value;
                                      if (!t) return void e();
                                      let { entity: r } = t;
                                      this.isVibeStarted
                                          ? this.sendFeedback({ type: eb.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 })
                                          : (this.sendFeedback({ type: eb.O.RADIO_STARTED, entity: r }).then(() => {
                                                this.sendFeedback({ type: eb.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 });
                                            }),
                                            (this.isVibeStarted = !0)),
                                          e();
                                  })
                                : Promise.resolve(),
                        ),
                        t.beforeFindPlayableEntityIndex.tapPromise('VibeContext', (e) => {
                            if (!this.isCurrentContext) return Promise.resolve();
                            let t = Promise.resolve();
                            switch (e.method) {
                                case q.So.AUTO_MOVE_FORWARD:
                                case q.So.ERROR_MOVE_FORWARD:
                                    t = this.onAutoMoveForward(a);
                                    break;
                                case q.So.MOVE_FORWARD:
                                    t = this.onMoveForward(a);
                                    break;
                                case q.So.MOVE_BACKWARD:
                                    t = this.onMoveBackward(a);
                                    break;
                                case q.So.SET_INDEX:
                                    t = this.onSetIndex(a, e.indexToChangeOn);
                            }
                            return t.finally(() => {
                                this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                            });
                        }),
                        t.beforeInject.tap('VibeContext', (e) => {
                            var t;
                            if (!this.isCurrentContext || !e.sourceContext) return e;
                            let a = (function (e) {
                                let { position: t, livePlayableIndex: a, entityList: r, useWaveQueue: i } = e;
                                if ('number' != typeof a || !i) return t;
                                let s = (function (e, t) {
                                        if (void 0 === e) return 0;
                                        let a = 0;
                                        for (let i = t + 1; i < e.length; i++) {
                                            var r;
                                            (null == (r = e[i]) ? void 0 : r.sourceContext) && (a += 1);
                                        }
                                        return a;
                                    })(r, a),
                                    n = a + 1 + s;
                                return t > n ? n : t;
                            })({
                                position: e.position,
                                livePlayableIndex: e.livePlayableIndex,
                                entityList: e.entityList,
                                useWaveQueue: null == (t = this.variables) ? void 0 : t.useWaveQueue,
                            });
                            return (this.sessionController.timeOfLastInteractionWithVibe = Date.now()), { ...e, calibratedPosition: a };
                        }),
                        t.afterInject.tap('VibeContext', (e) => {
                            if (!this.isCurrentContext) return e;
                            let { contextEntityPairs: t } = e;
                            for (let e of t)
                                if ((eP(e.entity) || (0, ex.b)(e.entity)) && !e.entity.data.fromCurrentContext) {
                                    var r, i;
                                    (e.entity.data.batchId = ((i = e.entity), 'user-queue-'.concat(i.data.meta.id, '-').concat(Date.now()))),
                                        (e.entity.data.radioSessionId = null == (r = this.contextData.meta.session) ? void 0 : r.radioSessionId);
                                } else a.hooks.afterError.promise(new ei.t('Can not manualy set batchId/radioSessionId for '.concat(e.entity.data.type, ' entity.')));
                            return { contextEntityPairs: t };
                        });
                }
                get observableActiveSession() {
                    return this.sessionStore.observableActiveSession;
                }
                loadContextMeta() {
                    let {
                        meta: { id: e },
                        cloneSessionId: t,
                    } = this.contextData;
                    return (
                        (this.contextData.queue = this.contextData.queue ? eM(this.contextData.queue) : void 0),
                        t && this.sessionStore.addClonedSession({ radioSessionId: t }),
                        this.sessionController.getLoadContextMetaRequest().then((t) => ((this.contextData.trackToStartFrom = void 0), { id: e, session: t }))
                    );
                }
                get shouldRemoveNotPlayedVibeTracksByTtl() {
                    return Date.now() - this.sessionController.timeOfLastInteractionWithVibe >= 18e5;
                }
                setSettings(e) {
                    var t, a, r;
                    let i,
                        { seeds: s, queueState: n, allowExplicit: o, interactive: l, from: d } = e;
                    this.contextData.interactive = l;
                    let u = eB(n, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam),
                        c = n.currentEntity.value,
                        h = null != o ? o : n.filterParams.value.allowExplicit;
                    if (null != (r = null == (a = this.variables) ? void 0 : a.batchFeedbacksOnVibeSettingsChange) && r)
                        c && eP(c.entity) && this.feedbacksController.storeDeferredSkip({ entity: c.entity, from: this.contextData.from }),
                            (i = this.sessionController.createSessionWithSettings({
                                sessionsFeedbacks: this.sessionStore.getSessionsFeedbacks(),
                                seeds: s,
                                rotorQueueParam: u,
                                allowExplicit: h,
                                interactive: l,
                                from: d,
                            }));
                    else {
                        let e = Promise.resolve();
                        c && eP(c.entity) && (e = this.sendFeedback({ entity: c.entity, type: eb.O.SKIP }));
                        let t = this.sessionStore.getSessionsFeedbacks();
                        i = e.then(() =>
                            this.sessionController.createSessionWithSettings({
                                sessionsFeedbacks: t,
                                seeds: s,
                                rotorQueueParam: u,
                                allowExplicit: h,
                                interactive: l,
                                from: d,
                            }),
                        );
                    }
                    return i
                        .then(() => {
                            var e;
                            (null == (e = this.variables) ? void 0 : e.sendRadioStartedOnVibeSettingsChange) && (this.isVibeStarted = !1), d && (this.from = d);
                        })
                        .catch((e) => {
                            this.logVibeError({ message: 'Error while setting new vibe settings', cause: e });
                        });
                }
                getContextEntitiesData() {
                    let {
                        meta: { session: e },
                    } = this.contextData;
                    return e
                        ? Promise.resolve(this.sessionController.getEntitiesFromInitialSequence())
                        : this.loadContextMeta().then(() => this.sessionController.getEntitiesFromInitialSequence());
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                logVibeError(e) {
                    var t, a, r;
                    let { message: i, cause: s } = e;
                    null == (a = this.afterErrorHook) ||
                        a.promise(
                            new ei.t('[VibeContext] '.concat(i || 'Error in VibeContext'), {
                                cause: s,
                                data: {
                                    contextId: this.contextData.meta.id,
                                    sessionId: null != (r = null == (t = this.contextData.meta.session) ? void 0 : t.radioSessionId) ? r : '',
                                },
                            }),
                        );
                }
                onAutoMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: eb.O.TRACK_FINISHED,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        let { index: t, entityList: r } = e.state.queueState,
                            i = t.value === r.value.length - 2,
                            s = t.value === r.value.length - 1;
                        if (!i && !s) return Promise.resolve();
                        let n = this.getNextTracks(a).then((t) => {
                            e.injectLast({ entitiesData: t }), (this.availableActions.moveForward.value = !0);
                        });
                        return s ? n : (i && n.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: eb.O.SKIP,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var t;
                        let { index: r, entityList: i, livePlayableIndex: s } = e.state.queueState,
                            n = r.value === i.value.length - 1,
                            o = r.value + 1,
                            l = e.getEntityByIndex({ index: o }),
                            d = o === i.value.length - 1;
                        if (
                            eO({
                                targetEntityWasPlayed: !!(l && eP(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: o,
                                livePlayableIndex: s.value,
                                targetEntityIsLastEntity: d,
                                useWaveQueue: !!(null == (t = this.variables) ? void 0 : t.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let u = this.getNextTracks(a).then((t) => e.injectLast({ entitiesData: t }));
                        return n ? u : (u.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveBackward(e) {
                    this.removeNotPlayedVibeTracksByTtl(e);
                    let t = e.state.queueState.currentEntity.value;
                    if (!t) return Promise.resolve();
                    let { entity: a } = t;
                    return this.sendFeedback({ entity: a, type: eb.O.SKIP, saveFeedbackToHistory: !0 }), Promise.resolve();
                }
                onSetIndex(e, t) {
                    var a;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let r = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: eb.O.SKIP,
                        entity: null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var a;
                        let { index: i, entityList: s, livePlayableIndex: n } = e.state.queueState,
                            o = i.value === s.value.length - 1,
                            l = e.getEntityByIndex({ index: t });
                        if (
                            eO({
                                targetEntityWasPlayed: !!(l && eP(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: t,
                                livePlayableIndex: n.value,
                                targetEntityIsLastEntity: t === s.value.length - 1,
                                useWaveQueue: !!(null == (a = this.variables) ? void 0 : a.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let d = this.getNextTracks(r)
                            .then((t) => e.injectLast({ entitiesData: t }))
                            .catch((e) => this.logVibeError({ cause: e }));
                        return o ? d : Promise.resolve();
                    });
                }
                getNextTracks(e) {
                    return (
                        (this.sessionTracksPromise = this.sendFeedbacksForInactiveSessions()
                            .then(() => this.sessionController.getEntitiesFromNextSequence(e))
                            .finally(() => {
                                (this.sessionTracksPromise = null), (this.availableActions.moveForward.value = !0);
                            })),
                        (this.availableActions.moveForward.value = !1),
                        this.sessionTracksPromise
                    );
                }
                sendFeedbacksForInactiveSessions() {
                    return this.feedbacksController
                        .sendFeedbacksForInactiveSessions()
                        .catch((e) => (this.logVibeError({ message: 'Error while sending feedback for inactive sessions', cause: e }), Promise.resolve()));
                }
                sendFeedback(e) {
                    let { entity: t, type: a, sendWithSessionTracks: r = !1, saveFeedbackToHistory: i = !1 } = e;
                    if (!t) return this.logVibeError({ message: 'Cannot send feedback. No entity' }), Promise.resolve();
                    let { session: s } = this.contextData.meta;
                    return s
                        ? this.feedbacksController
                              .sendFeedback({ entity: t, type: a, session: s, from: this.contextData.from, sendWithSessionTracks: r, saveFeedbackToHistory: i })
                              .catch((e) => (this.logVibeError({ message: 'Error while sending feedback', cause: e }), Promise.resolve()))
                        : (this.logVibeError({ message: 'Cannot send feedback. No session' }), Promise.resolve());
                }
                calculateLivePlayableIndex(e) {
                    return e.state.queueState.livePlayableIndex.value;
                }
                removeNotPlayedVibeTracksByTtl(e) {
                    let { index: t, entityList: a } = e.state.queueState;
                    if (this.shouldRemoveNotPlayedVibeTracksByTtl) {
                        let r = [];
                        for (let e = t.value + 1; e < a.value.length; e++) {
                            let t = a.value[e];
                            t && eP(t.entity) && !t.entity.data.wasPlayed && r.push(e);
                        }
                        this.remove(e, r);
                    }
                }
                removeVibeTracksBeforeMoveForward(e) {
                    var t, a;
                    let { index: r, entityList: i, livePlayableIndex: s } = e.state.queueState;
                    if (!(null != (a = null == (t = this.variables) ? void 0 : t.useWaveQueue) && a)) {
                        let t = this.getPositionsFromStartToEnd(r.value + 2, i.value.length);
                        this.remove(e, t);
                        return;
                    }
                    let n = this.findNextPlayablePosition(i.value, r.value);
                    if (null === n) return;
                    let o = this.getPositionsToRemoveForWaveQueue(i.value, n + 1, s.value);
                    this.remove(e, o);
                }
                findNextPlayablePosition(e, t) {
                    for (let r = t + 1; r < e.length; r++) {
                        var a;
                        if ((null == (a = e[r]) ? void 0 : a.entity.hidden) !== !0) return r;
                    }
                    return null;
                }
                getPositionsToRemoveForWaveQueue(e, t, a) {
                    let r = [];
                    for (let i = t; i < e.length; i++) {
                        let t = e[i],
                            s = i <= a,
                            n = !!(null == t ? void 0 : t.sourceContext);
                        s || n || r.push(i);
                    }
                    return r;
                }
                getPositionsFromStartToEnd(e, t) {
                    let a = [];
                    for (let r = e; r < t; r++) a.push(r);
                    return a;
                }
                onQueueNavigationCommon(e) {
                    var t;
                    let a = eB(e.state.queueState, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam);
                    return this.removeNotPlayedVibeTracksByTtl(e), a;
                }
                remove(e, t) {
                    (this.handleAfterEntityRemoveHook = !1), e.remove(t, !0);
                }
                constructor(e) {
                    super(e),
                        (0, Y._)(this, 'contextData', void 0),
                        (0, Y._)(this, 'isVibeStarted', !1),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'sessionTracksPromise', null),
                        (0, Y._)(this, 'feedbacksController', void 0),
                        (0, Y._)(this, 'sessionStore', void 0),
                        (0, Y._)(this, 'sessionController', void 0),
                        (0, Y._)(this, 'afterErrorHook', void 0),
                        (0, Y._)(this, 'handleAfterEntityRemoveHook', !0);
                    let { data: t, rotorResource: a, variables: r } = e;
                    (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = r),
                        (this.sessionStore = new eF({ variables: r })),
                        (this.feedbacksController = new ew({ rotorResource: a, sessionStore: this.sessionStore, variables: r })),
                        (this.sessionController = new eU({
                            variables: this.variables,
                            contextData: this.contextData,
                            rotorResource: a,
                            sessionStore: this.sessionStore,
                        }));
                }
            }
            class eW extends ey {
                getContextId() {
                    var e, t;
                    let a = null == (t = this.contextData.meta.albums) || null == (e = t[0]) ? void 0 : e.id;
                    return a ? ''.concat(this.contextData.meta.id, ':').concat(a) : String(this.contextData.meta.id);
                }
                loadTrailer() {
                    return this.tracksResource
                        .getTrailer({ trackId: this.getContextId() })
                        .then((e) => ((this.contextData.meta = e.track), e))
                        .catch((e) => {
                            throw new em('Error in PlaylistContext', { code: 'E_PLAYLIST_LOAD_TRAILER', cause: e, data: { contextId: this.contextData.meta.id } });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.getContextId();
                    return this.tracksResource
                        .getTracksMeta({ trackIds: [e], withProgress: !0 })
                        .then((t) => {
                            let a = t[0];
                            if (a) return (this.contextData.meta = a), a;
                            throw new em('Error in VariousContext. Track not found', { code: 'E_VARIOUS_LOAD_CONTEXT_META', data: { contextId: e } });
                        })
                        .catch((t) => {
                            throw new em('Error in VariousContext', { code: 'E_VARIOUS_LOAD_CONTEXT_META', cause: t, data: { contextId: e } });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => [{ meta: t.track, type: H.R.SmartPreview, additional: e }])
                        : this.contextData.meta
                          ? Promise.resolve([{ meta: this.contextData.meta, type: H.R.Unknown, additional: e }])
                          : this.loadContextMeta().then((t) => [{ meta: t, type: H.R.Unknown, additional: e }]);
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, Y._)(this, 'contextData', void 0), (0, Y._)(this, 'tracksResource', void 0), (0, Y._)(this, 'variables', void 0);
                    let { data: t, tracksResource: a, variables: r } = e;
                    (this.tracksResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            class eY extends ei.t {
                constructor(e, { code: t = 'E_CONTEXT_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'ContextFactoryException'), Object.setPrototypeOf(this, eY.prototype);
                }
            }
            var eq = a(11051);
            let ez = (e) => [{ type: H.R.Generative, meta: e }],
                eH = 'E_GENERATIVE_RESTART_LIMIT',
                eQ = 'E_GENERATIVE_RESTART_FAILED',
                e$ = new Set([q.QC.PLAY, q.QC.RESUME, q.QC.MEDIA_ELEMENT_ERROR, q.QC.PRE_FETCH]);
            class eZ extends ey {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.playerState.status.onChange((e) => {
                        this.isCurrentContext &&
                            e &&
                            (e === q.MT.PLAYING
                                ? (this.isPaused && this.sendFeedback(eq.Q.StreamPlay, a), (this.isPaused = !1))
                                : e === q.MT.PAUSED && (this.sendFeedback(eq.Q.StreamPause, a), (this.isPaused = !0)));
                    }),
                        t.afterError.tap('GenerativeContext', (e) => {
                            let t = e && e instanceof em && e.code === eH,
                                r = e && e instanceof em && e.code === eQ,
                                i = e instanceof q.LI && e$.has(e.code);
                            !t && !r && this.isCurrentContext && i && (this.restartsCount >= 5 || this.restart(a));
                        });
                }
                loadContextMeta() {
                    return this.rotorResource
                        .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), stream: e.stream, ...e.data };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new em('Error GenerativeContext', {
                                code: 'E_GENERATIVE_LOAD_CONTEXT_META',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta.stream) ? void 0 : e.id)
                        ? Promise.resolve(ez(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(ez(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                sendFeedback(e, t) {
                    var a;
                    return this.rotorResource
                        .stationFeedback({
                            type: e,
                            stationId: String(this.contextData.meta.id),
                            streamId: String(null == (a = this.contextData.meta.stream) ? void 0 : a.id),
                            timestamp: eC(),
                        })
                        .then((a) => {
                            if (a.reload_stream) {
                                let a = e === eq.Q.TimestampDislike;
                                this.restart(t, a);
                            }
                        });
                }
                restart(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.restartsCount >= 5) {
                        let t = new em('Error GenerativeContext', { code: eH, data: { contextId: this.contextData.meta.id } });
                        return e.hooks.afterError.promise(t), Promise.reject(t);
                    }
                    return (
                        this.restartsCount++,
                        this.loadContextMeta()
                            .then(() => {
                                let a = t || !this.isPaused;
                                return t && this.isPaused && (this.isPaused = !1), e.restartContext({ playAfterRestart: a, entitiesData: ez(this.contextData.meta) });
                            })
                            .catch((t) => {
                                let a = new em('Error GenerativeContext restart', {
                                    code: eQ,
                                    cause: (0, W.createObjectFromError)(t),
                                    data: { contextId: this.contextData.meta.id, restartsCount: this.restartsCount },
                                });
                                throw (e.hooks.afterError.promise(a), a);
                            })
                    );
                }
                constructor(e) {
                    super(e),
                        (0, Y._)(this, 'contextData', void 0),
                        (0, Y._)(this, 'rotorResource', void 0),
                        (0, Y._)(this, 'isPaused', !1),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'restartsCount', 0);
                    let { data: t, variables: a, rotorResource: r } = e;
                    (this.rotorResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let eJ = (e) => [{ type: H.R.Radio, meta: e }];
            class e0 extends ey {
                apply(e) {}
                loadContextMeta() {
                    return Promise.all([
                        this.radioStationsResource.getStreamBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                        this.radioStationsResource.getStreamUrlBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                    ])
                        .then((e) => {
                            let [t, { url: a, episodeId: r }] = e,
                                i = {
                                    id: this.contextData.meta.id,
                                    stationSlug: String(this.contextData.meta.stationSlug),
                                    streamSlug: String(this.contextData.meta.streamSlug),
                                    stream: t,
                                    streamUrl: a,
                                    streamEpisodeId: r,
                                };
                            return (this.contextData.meta = i), i;
                        })
                        .catch((e) => {
                            throw new em('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e, t;
                    return (null == (t = this.contextData.meta) || null == (e = t.stream) ? void 0 : e.slug)
                        ? Promise.resolve(eJ(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eJ(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, Y._)(this, 'contextData', void 0), (0, Y._)(this, 'radioStationsResource', void 0), (0, Y._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStationsResource: r } = e;
                    (this.radioStationsResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let e1 = (e) => [{ type: H.R.Radio, meta: e }];
            class e5 extends ey {
                apply(e) {}
                loadContextMeta() {
                    return this.radioStreamResource
                        .getByRadioId({ radioId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), ...e };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new em('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, W.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta) ? void 0 : e.uuid)
                        ? Promise.resolve(e1(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(e1(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, Y._)(this, 'contextData', void 0),
                        (0, Y._)(this, 'radioStreamResource', void 0),
                        (0, Y._)(this, 'isPaused', !1),
                        (0, Y._)(this, 'restartsCount', 0),
                        (0, Y._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStreamResource: r } = e;
                    (this.radioStreamResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            class e4 {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    try {
                        var r, i, s, n, o, l, d, u;
                        switch (a.type) {
                            case ec.K.Album:
                                if (!this.albumsResource)
                                    throw new eY('Albums resource is not provided', { code: 'E_ALBUMS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ev({
                                    data: a,
                                    albumsResource: this.albumsResource,
                                    logger: this.logger,
                                    variables: null == (r = this.variables) ? void 0 : r[ec.K.Album],
                                });
                                break;
                            case ec.K.Playlist:
                                if (!this.usersResource || !this.playlistResource)
                                    throw new eY('Users and playlist resources are not provided', {
                                        code: 'E_USERS_AND_PLAYLIST_RESOURCES_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eE({
                                    data: a,
                                    usersResource: this.usersResource,
                                    playlistResource: this.playlistResource,
                                    logger: this.logger,
                                    variables: null == (i = this.variables) ? void 0 : i[ec.K.Playlist],
                                });
                                break;
                            case ec.K.Artist:
                                if (!this.artistsResource)
                                    throw new eY('Artists resource is not provided', { code: 'E_ARTISTS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ef({
                                    data: a,
                                    artistsResource: this.artistsResource,
                                    logger: this.logger,
                                    variables: null == (s = this.variables) ? void 0 : s[ec.K.Artist],
                                });
                                break;
                            case ec.K.Vibe:
                                if (!this.rotorResource)
                                    throw new eY('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eV({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (n = this.variables) ? void 0 : n[ec.K.Vibe],
                                });
                                break;
                            case ec.K.Various:
                                if (!this.tracksResource)
                                    throw new eY('Tracks resource is not provided', { code: 'E_TRACKS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eW({
                                    data: a,
                                    tracksResource: this.tracksResource,
                                    logger: this.logger,
                                    variables: null == (o = this.variables) ? void 0 : o[ec.K.Various],
                                });
                                break;
                            case ec.K.Generative:
                                if (!this.rotorResource)
                                    throw new eY('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eZ({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (l = this.variables) ? void 0 : l[ec.K.Generative],
                                });
                                break;
                            case ec.K.Radio:
                                if (!this.radioStationsResource)
                                    throw new eY('Radio stations resource is not provided', {
                                        code: 'E_RADIO_STATIONS_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new e0({
                                    data: a,
                                    radioStationsResource: this.radioStationsResource,
                                    logger: this.logger,
                                    variables: null == (d = this.variables) ? void 0 : d[ec.K.Radio],
                                });
                                break;
                            case ec.K.LegacyRadio:
                                if (!this.radioStreamResource)
                                    throw new eY('Radio stream resource is not provided', {
                                        code: 'E_RADIO_STREAM_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new e5({
                                    data: a,
                                    radioStreamResource: this.radioStreamResource,
                                    logger: this.logger,
                                    variables: null == (u = this.variables) ? void 0 : u[ec.K.LegacyRadio],
                                });
                        }
                    } catch (e) {
                        throw new eY('Error while creating context', { cause: (0, W.createObjectFromError)(e), data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new eY('Cannot create context with nonexistent type', { code: 'E_NONEXISTENT_CONTEXT_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, Y._)(this, 'logger', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'albumsResource', void 0),
                        (0, Y._)(this, 'usersResource', void 0),
                        (0, Y._)(this, 'artistsResource', void 0),
                        (0, Y._)(this, 'rotorResource', void 0),
                        (0, Y._)(this, 'tracksResource', void 0),
                        (0, Y._)(this, 'playlistResource', void 0),
                        (0, Y._)(this, 'radioStationsResource', void 0),
                        (0, Y._)(this, 'radioStreamResource', void 0);
                    let {
                        variables: t,
                        logger: a,
                        rotorResource: r,
                        usersResource: i,
                        playlistResource: s,
                        tracksResource: n,
                        albumsResource: o,
                        artistsResource: l,
                        radioStreamResource: d,
                        radioStationsResource: u,
                    } = e;
                    (this.albumsResource = null != o ? o : null),
                        (this.artistsResource = null != l ? l : null),
                        (this.rotorResource = null != r ? r : null),
                        (this.usersResource = null != i ? i : null),
                        (this.tracksResource = null != n ? n : null),
                        (this.playlistResource = null != s ? s : null),
                        (this.radioStationsResource = null != u ? u : null),
                        (this.radioStreamResource = null != d ? d : null),
                        (this.variables = t),
                        (this.logger = a);
                }
            }
            var e9 = a(62386),
                e3 = a(80785);
            function e2(e) {
                return !!(0, e9.i)(e) && !!e.data.meta.session && e.data.meta.session.wave.type === e3.y.MIX;
            }
            var e7 = a(86771);
            class e6 {
                set positionSec(e) {
                    this.internalPositionSec = e;
                }
                get positionSec() {
                    return void 0 !== this.internalPositionSec
                        ? this.internalPositionSec
                        : e2(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                          ? this.entity.data.meta.mixFade.inStart
                          : void 0;
                }
                get canBePlayedOnlyWithCrossing() {
                    return e2(this.context);
                }
                canBePlayed(e) {
                    let t = 'playDisliked' in this.context.data && void 0 !== this.context.data.playDisliked && this.context.data.playDisliked,
                        { entityChangeMethod: a, index: r } = e,
                        i = t || a === q.So.SET_INDEX || (a === q.So.PLAY_CONTEXT && void 0 !== r),
                        s = a === q.So.SET_INDEX,
                        n = !i && this.entity.isDisliked,
                        o = !s && this.entity.hidden,
                        l = (0, e9.i)(this.context) || !this.entity.isExplicit || !1 !== e.filterParams.allowExplicit;
                    return !!(this.entity.isAvailable && l) && (n ? !!(0, e9.i)(this.context) : !o);
                }
                getCrossParams() {
                    return e2(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? this.entity.data.meta.mixFade
                        : 'fade' in this.entity.data.meta && void 0 !== this.entity.data.meta.fade
                          ? this.entity.data.meta.fade
                          : null;
                }
                canBeCrossedWith(e) {
                    return (
                        !(
                            !('type' in this.entity.data.meta) ||
                            !('type' in e.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            !('fade' in e.entity.data.meta) ||
                            (0, e7.F)(this.context)
                        ) &&
                        this.entity.data.meta.type === z.S.MUSIC &&
                        e.entity.data.meta.type === z.S.MUSIC &&
                        void 0 !== this.entity.data.meta.fade &&
                        void 0 !== e.entity.data.meta.fade
                    );
                }
                getFadeMode() {
                    return e2(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? q.OQ.MIX
                        : !('type' in this.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            (0, e7.F)(this.context) ||
                            this.entity.data.meta.type !== z.S.MUSIC ||
                            void 0 === this.entity.data.meta.fade
                          ? q.OQ.NONE
                          : q.OQ.CROSSFADE;
                }
                constructor(e, t, a) {
                    (0, Y._)(this, 'context', void 0),
                        (0, Y._)(this, 'entity', void 0),
                        (0, Y._)(this, 'lastChangeMethod', null),
                        (0, Y._)(this, 'lastSeekPosition', void 0),
                        (0, Y._)(this, 'internalPositionSec', void 0),
                        (0, Y._)(this, 'sourceContext', void 0),
                        (this.context = e),
                        (this.entity = t),
                        (this.sourceContext = a);
                }
            }
            class e8 {
                createContext(e) {
                    return this.contextFactory.create(e);
                }
                createEntity(e) {
                    return this.entityFactory.create(e);
                }
                createContextEntityPair(e, t, a) {
                    return new e6(e, t, a);
                }
                constructor(e) {
                    (0, Y._)(this, 'entityFactory', void 0),
                        (0, Y._)(this, 'contextFactory', void 0),
                        (this.entityFactory = new eu(e.entityFactoryParams)),
                        (this.contextFactory = new e4(e.contextFactoryParams));
                }
            }
            let te = a(90369),
                eZStorage = a(49574);
            class tt {
                getAverageFrequencies(e) {
                    if (null === this.currentGraph) return [];
                    let { analyserNode: t, spectrum: a, bufferLength: r, context: i } = this.currentGraph;
                    if (!t) throw new ei.t('No analyser node has been created');
                    t.getByteFrequencyData(a);
                    let s = i.sampleRate / r,
                        n = 0,
                        o = e.map((e) => {
                            let { low: t, high: a } = e,
                                r = Math.floor(t / s),
                                i = Math.floor(a / s);
                            return (n = Math.max(n, i)), { startIndex: r, endIndex: i };
                        }),
                        l = Array(n + 2).fill(0);
                    for (let e = 0; e < n + 1; e++) {
                        var d, u;
                        let t = (null != (d = a[e]) ? d : 0) / 256;
                        l[e + 1] = (null != (u = l[e]) ? u : 0) + t;
                    }
                    return o.map((e) => {
                        let { startIndex: t, endIndex: a } = e,
                            r = l[t],
                            i = l[a + 1];
                        return void 0 === r || void 0 === i ? 0 : (i - r) / (a - t + 1);
                    });
                }
                getExponentialVolume = (e) => {
                    let t = Math.pow(0.01, 1 - e);
                    return t > 0.01 ? t : 0;
                };
                getRMS() {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.fftSize,
                        i = new Uint8Array(a);
                    t.getByteTimeDomainData(i);
                    let r = 0,
                        s = JSON.parse(window.localStorage.getItem(eZStorage.cYZ.YmPlayerVolume)),
                        n = this.getExponentialVolume(s?.value ?? 1);
                    for (let e = 0; e < a; e++) {
                        let t = 0 !== n ? (i[e] - 128) / 128 / n : 0;
                        r += t * t;
                    }
                    let l = 2 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICENT?.() ?? 0.2;
                        return (this._prevRms = void 0 !== this._prevRms ? this._prevRms * (1 - e) + l * e : l), this._prevRms;
                    }
                    return l;
                }
                getRMSAlt() {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.frequencyBinCount,
                        i = new Float32Array(a);
                    t.getFloatFrequencyData(i);
                    let r = 0,
                        s = JSON.parse(window.localStorage.getItem(eZStorage.cYZ.YmPlayerVolume)),
                        n = this.getExponentialVolume(s?.value ?? 1);
                    for (let e = 0; e < a; e++) {
                        let t = i[e];
                        if (t === -1 / 0) continue;
                        let s = 0 !== n ? Math.pow(10, t / 20) / n : 0;
                        r += s * s;
                    }
                    let l = 120 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICENT?.() ?? 0.2;
                        return (this._prevRms = void 0 !== this._prevRms ? this._prevRms * (1 - e) + l * e : l), this._prevRms;
                    }
                    return l;
                }
                constructor({ currentAudioElement: e, graphs: t }) {
                    (0, Y._)(this, 'currentGraph', null),
                        (0, Y._)(this, 'graphs', void 0),
                        (this.graphs = t),
                        e.onChange((e) => {
                            let t = this.graphs.find((t) => t.audioElement === e);
                            t && (this.currentGraph = t);
                        });
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(s || (s = {}));
            class ta {
                enable() {
                    this.state !== s.ENABLED &&
                        (this.graphs.forEach((e) => {
                            e.connectEqualizer();
                        }),
                        (this.state = s.ENABLED));
                }
                disable() {
                    this.state !== s.DISABLED &&
                        (this.graphs.forEach((e) => {
                            e.disconnectEqualizer();
                        }),
                        (this.state = s.DISABLED));
                }
                applyPreset(e) {
                    this.graphs.forEach((t) => {
                        t.setPreamp(e.preamp), t.setBands(e.frequencies);
                    });
                }
                constructor({ preset: e, graphs: t }) {
                    (0, Y._)(this, 'graphs', void 0), (0, Y._)(this, 'state', s.DISABLED), (this.graphs = t), e && this.applyPreset(e);
                }
            }
            var tr = (function (e, t, a) {
                var r;
                return function (t) {
                    var a, i, s;
                    return new Worker(
                        (r =
                            r ||
                            ((i = (a = atob(e)).indexOf('\n', 10) + 1),
                            (s = new Blob([a.substring(i) + ''], { type: 'application/javascript' })),
                            URL.createObjectURL(s))),
                        t,
                    );
                };
            })(
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIGxldCB0aW1lciA9IG51bGw7CiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkgewogICAgICAgIHN3aXRjaCAoZS5kYXRhLmNvbW1hbmQpIHsKICAgICAgICAgICAgY2FzZSAnc3RhcnQnOgogICAgICAgICAgICAgICAgc3RhcnQoZS5kYXRhLmludGVydmFsKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlICdzdG9wJzoKICAgICAgICAgICAgICAgIHN0b3AoKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHN0YXJ0KGludGVydmFsKSB7CiAgICAgICAgc3RvcCgpOwogICAgICAgIHRpbWVyID0gc2VsZi5zZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICAgICAgICBtZXNzYWdlOiAndGljaycKICAgICAgICAgICAgfTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShkYXRhKTsKICAgICAgICB9LCBpbnRlcnZhbCk7CiAgICB9CiAgICBmdW5jdGlvbiBzdG9wKCkgewogICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkgewogICAgICAgICAgICBzZWxmLmNsZWFySW50ZXJ2YWwodGltZXIpOwogICAgICAgIH0KICAgICAgICB0aW1lciA9IG51bGw7CiAgICB9CiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpOwoKfSkoKTsK',
            );
            class ti {
                init() {
                    try {
                        return (this.worker = new tr()), this.worker.addEventListener('message', this.onMessage.bind(this)), Promise.resolve();
                    } catch (e) {
                        return this.destroy(), Promise.reject(e);
                    }
                }
                get isIntervalRunning() {
                    return this.isTrackingInWorker;
                }
                setInterval(e, t) {
                    this.worker && ((this.callback = e), (this.isTrackingInWorker = !0), this.worker.postMessage({ command: 'start', interval: t }));
                }
                clearInterval() {
                    this.worker && ((this.isTrackingInWorker = !1), this.worker.postMessage({ command: 'stop' }));
                }
                onError(e) {
                    this.worker && (this.errorListeners.push(e), this.worker.addEventListener('error', e), this.worker.addEventListener('messageerror', e));
                }
                destroy() {
                    var e;
                    this.clearInterval(),
                        this.errorListeners.forEach((e) => {
                            var t, a;
                            null == (t = this.worker) || t.removeEventListener('error', e), null == (a = this.worker) || a.removeEventListener('messageerror', e);
                        }),
                        null == (e = this.worker) || e.terminate(),
                        (this.worker = null);
                }
                onMessage(e) {
                    'tick' === e.data.message && this.callback && this.callback();
                }
                constructor() {
                    (0, Y._)(this, 'worker', null), (0, Y._)(this, 'callback', null), (0, Y._)(this, 'isTrackingInWorker', !1), (0, Y._)(this, 'errorListeners', []);
                }
            }
            class ts {
                get isIntervalRunning() {
                    return !!this.intervalId;
                }
                init() {
                    return Promise.resolve();
                }
                onError() {}
                setInterval(e, t) {
                    this.intervalId = setInterval(e, t);
                }
                clearInterval() {
                    null !== this.intervalId && clearInterval(this.intervalId), (this.intervalId = null);
                }
                destroy() {
                    this.clearInterval();
                }
                constructor() {
                    (0, Y._)(this, 'intervalId', null);
                }
            }
            class tn {
                get isIntervalRunning() {
                    return !!this.ticker.isIntervalRunning;
                }
                init() {
                    return this.ticker.init().catch((e) => {
                        throw ((this.ticker = new ts()), Error('Error in creating WorkerTicker. Fallback to IntervalTicker', { cause: e }));
                    });
                }
                onError(e) {
                    return this.ticker.onError(e);
                }
                setInterval(e, t) {
                    return this.ticker.setInterval(e, t);
                }
                clearInterval() {
                    return this.ticker.clearInterval();
                }
                destroy() {
                    this.ticker.destroy();
                }
                constructor() {
                    (0, Y._)(this, 'ticker', new ti());
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(n || (n = {}));
            let to = 1e3 / 60,
                tl = 1 / 60;
            class td {
                updateGain() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = e >= this.outStart && e <= this.outStop;
                    if (t) {
                        let t = this.getFadeInVolume(e);
                        this.volumeAtTime = t;
                    }
                    if (a) {
                        let e = this.getFadeOutVolume();
                        this.volumeAtTime = e;
                    }
                    e > this.inStop && e < this.outStart && (this.volumeAtTime = this.maxVolume), e > this.outStop && (this.volumeAtTime = 0);
                }
                enable() {
                    (this.volume = 0), (this.state = n.ENABLED), this.ticker.isIntervalRunning || this.ticker.setInterval(this.updateGain.bind(this), to);
                }
                enableFadeIn() {
                    (this.audioElementVolumeBeforeFadeIn = this.graph.audioElement.volume),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeIn.bind(this), to);
                }
                fadeIn() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = this.getFadeInVolume(e);
                    t && (this.volumeAtTime = a), e > this.inStop && e < this.outStart && ((this.volumeAtTime = this.maxVolume), this.disable());
                }
                enableFadeOut() {
                    (this.state = n.ENABLED), this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeOut.bind(this), to);
                }
                fadeOut() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.outStart && e <= this.outStop,
                        a = this.getFadeOutVolume();
                    t && (this.volumeAtTime = a), e > this.outStop && (this.volumeAtTime = 0);
                }
                getFadeInVolume(e) {
                    let t = this.inStop - this.inStart,
                        a = this.maxVolume;
                    return 0 === e ? 0 : Math.min(this.volume + 1 / (t / tl), a);
                }
                getFadeOutVolume() {
                    let e = this.outStop - this.outStart;
                    return Math.max(this.volume - 1 / (e / tl), 0);
                }
                disable() {
                    (this.state = n.DISABLED), this.ticker.clearInterval(), (this.volume = this.maxVolume);
                }
                setFadeParams(e) {
                    let { inStart: t, inStop: a, outStart: r, outStop: i } = e;
                    (this.inStart = t), (this.inStop = a), (this.outStart = r), (this.outStop = i);
                }
                set volumeAtTime(e) {
                    this.config.useVolumeForAudioEffect
                        ? (this.graph.audioElement.volume = e)
                        : this.graph.gainNode.gain.setValueAtTime(e, this.graph.context.currentTime);
                }
                set volume(e) {
                    this.config.useVolumeForAudioEffect ? (this.graph.audioElement.volume = e) : (this.graph.gainNode.gain.value = e);
                }
                get volume() {
                    return this.config.useVolumeForAudioEffect ? this.graph.audioElement.volume : this.graph.gainNode.gain.value;
                }
                get maxVolume() {
                    if (this.config.useVolumeForAudioEffect) {
                        var e;
                        return null != (e = this.audioElementVolumeBeforeFadeIn) ? e : 1;
                    }
                    return 1;
                }
                handleTickerError(e) {
                    this.disable();
                    let t = new ei.t('FadeEffect. Error in ticker runtime.', { cause: (0, W.createObjectFromError)(e) });
                    this.hooks.afterError.promise(t);
                }
                constructor({ graph: e, hooks: t, config: a }) {
                    var r, i;
                    (0, Y._)(this, 'state', n.IDLE),
                        (0, Y._)(this, 'inStart', 0),
                        (0, Y._)(this, 'inStop', 0),
                        (0, Y._)(this, 'outStart', 0),
                        (0, Y._)(this, 'outStop', 0),
                        (0, Y._)(this, 'ticker', void 0),
                        (0, Y._)(this, 'graph', void 0),
                        (0, Y._)(this, 'hooks', void 0),
                        (0, Y._)(this, 'config', void 0),
                        (0, Y._)(this, 'audioElementVolumeBeforeFadeIn', null),
                        (this.graph = e),
                        (this.hooks = t),
                        (this.config = { useVolumeForAudioEffect: null != (r = a.useVolumeForAudioEffect) && r, useWorker: null == (i = a.useWorker) || i }),
                        this.config.useWorker ? (this.ticker = new tn()) : (this.ticker = new ts()),
                        this.ticker
                            .init()
                            .then(() => {
                                this.ticker.onError(this.handleTickerError.bind(this));
                            })
                            .catch((e) => {
                                let t = new ei.t('FadeEffect. Error in ticker init().', { cause: (0, W.createObjectFromError)(e) });
                                this.hooks.afterError.promise(t);
                            });
                }
            }
            class tu {
                enable() {
                    this.currentFadeEffect && this.currentFadeEffect.enable();
                }
                disable() {
                    this.currentFadeEffect && this.currentFadeEffect.disable();
                }
                apply(e) {
                    if (this.currentFadeEffect) {
                        if (!e) return void this.currentFadeEffect.disable();
                        this.currentFadeEffect.setFadeParams(e), this.currentFadeEffect.enable();
                    }
                }
                constructor({ currentAudioElement: e, graphs: t, playback: a }) {
                    (0, Y._)(this, 'fadeEffects', []),
                        (0, Y._)(this, 'currentFadeEffect', null),
                        t.forEach((e) => {
                            this.fadeEffects.push(new td({ graph: e, hooks: a.hooks, config: { useVolumeForAudioEffect: !1, useWorker: !1 } }));
                        }),
                        e.onChange((e) => {
                            let t = this.fadeEffects.find((t) => t.graph.audioElement === e);
                            t && (this.currentFadeEffect = t);
                        });
                }
            }
            class tc {
                enableCrossfade() {
                    let { currentEntity: e, nextEntity: t } = this.playback.state.queueState,
                        a = this.playback.state.mediaPlayersStore.value[$.e.AUDIO];
                    if (!e.value || !t.value || !a || !(0, q.uo)(a)) return;
                    let r = e.value.getCrossParams(),
                        i = t.value.getCrossParams();
                    if (!r || !i) return;
                    let s = this.fadeEffects.find((e) => !!a.crossOutMediaPlayer && e.graph.audioElement === a.crossOutMediaPlayer.currentAudioElement.value),
                        n = this.fadeEffects.find((e) => !!a.crossInMediaPlayer && e.graph.audioElement === a.crossInMediaPlayer.currentAudioElement.value);
                    s && n && (s.setFadeParams(r), n.setFadeParams(i), s.enableFadeOut(), n.enableFadeIn());
                }
                enableFastFade() {
                    let { currentEntity: e } = this.playback.state.queueState,
                        t = this.playback.state.mediaPlayersStore.value[$.e.AUDIO];
                    if (!e.value || !t || !(0, q.uo)(t)) return;
                    let a = e.value.getCrossParams(),
                        r = this.fadeEffects.find((e) => e.graph.audioElement === t.currentAudioElement.value);
                    if (!a || !r) return;
                    let i = a.inStop - a.inStart,
                        s = { ...a, inStop: a.inStart + i / 4 };
                    r.setFadeParams(s), r.enableFadeIn();
                }
                disableFade() {
                    this.fadeEffects.forEach((e) => {
                        e.disable();
                    });
                }
                canEnableFastFade(e) {
                    let { currentEntity: t } = this.playback.state.queueState;
                    return !!(t.value && !e && e2(t.value.context));
                }
                constructor({ graphs: e, playback: t, config: a = {} }) {
                    (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'fadeEffects', []),
                        (this.playback = t),
                        e.forEach((e) => {
                            this.fadeEffects.push(
                                new td({ graph: e, hooks: t.hooks, config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker } }),
                            );
                        });
                    let r = t.state.mediaPlayersStore.value[$.e.AUDIO];
                    r &&
                        (0, q.uo)(r) &&
                        (r.isReadyForAudioEffect.onChange(
                            (e) => {
                                e ? this.enableCrossfade() : this.disableFade();
                            },
                            { skipFirstChange: !0 },
                        ),
                        r.isReadyForAudioEffectInStart.onChange(
                            (e) => {
                                e && this.canEnableFastFade(r.isReadyForAudioEffect.value) && this.enableFastFade(), e || this.disableFade();
                            },
                            { skipFirstChange: !0 },
                        ));
                }
            }
            class th {
                apply(e) {
                    this.durationMs = e;
                }
                constructor({ playback: e }) {
                    (0, Y._)(this, 'playback', null),
                        (0, Y._)(this, 'durationMs', void 0),
                        (this.playback = e),
                        this.playback.state.playerState.progress.onChange((e) => {
                            var t, a;
                            let r = (null != (t = this.durationMs) ? t : 0) / 1e3,
                                i = e && Math.abs(e.duration - r) > 1;
                            e && e.position > r && i && (null == (a = this.playback) || a.moveForward());
                        });
                }
            }
            !(function (e) {
                (e.HIGHSHELF = 'highshelf'), (e.PEAKING = 'peaking'), (e.LOWSHELF = 'lowshelf');
            })(o || (o = {})),
                (function (e) {
                    (e.SUSPENDED = 'suspended'), (e.RUNNING = 'running'), (e.CLOSED = 'closed');
                })(l || (l = {}));
            let tR128NormalizationEnabled = !0;
            null == window ||
                null == window.nativeSettings ||
                window.nativeSettings
                    .getAsync('modSettings.r128Normalization')
                    .then((e) => {
                        tR128NormalizationEnabled = e ?? !0;
                    })
                    .catch(() => {});
            class tg {
                connectNodes() {
                    let { useAnalyser: e, useGain: t } = this.config;
                    this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination);
                }
                connectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(this.preamp),
                        a.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                disconnectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        a.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                setR128Gain(e, t) {
                    let a = -23,
                        r = null != e ? e : this.lastR128,
                        s = Number(null == r ? void 0 : r.i),
                        l = 'boolean' == typeof t ? t : tR128NormalizationEnabled;
                    'boolean' == typeof t && (tR128NormalizationEnabled = t);
                    null != e && (this.lastR128 = e);
                    if (!1 === l) return void this.r128GainNode.gain.setValueAtTime(1, this.context.currentTime);
                    if (!Number.isFinite(s)) return void this.r128GainNode.gain.setValueAtTime(1, this.context.currentTime);
                    let n = Number(null == r ? void 0 : r.tp),
                        d = a - s;
                    Number.isFinite(n) && (d = Math.min(d, -n));
                    let c = Math.pow(10, d / 20);
                    (Number.isFinite(c) && c > 0) || (c = 1), this.r128GainNode.gain.setValueAtTime(c, this.context.currentTime);
                }
                setBands(e) {
                    0 === this.bands.length ? (this.bands = this.connectBandsBetween(this.createBandsByFrequencies(e))) : this.updateBands(e);
                }
                setPreamp(e) {
                    this.preamp.gain.linearRampToValueAtTime(e, this.context.currentTime + 0.3);
                }
                createBandsByFrequencies(e) {
                    return e.map((t, a) => {
                        let { key: r, value: i } = t;
                        return this.createBand(this.getBiquadFilterType(a, e.length), r, i);
                    });
                }
                createBand(e, t, a) {
                    let r = this.context.createBiquadFilter();
                    return (r.type = e), (r.frequency.value = t), (r.Q.value = 1), a && r.gain.setValueAtTime(a, this.context.currentTime + 0.3), r;
                }
                getBiquadFilterType(e, t) {
                    return 0 === e ? o.LOWSHELF : e === t - 1 ? o.HIGHSHELF : o.PEAKING;
                }
                connectBandsBetween(e) {
                    let t = this.preamp;
                    return (
                        e.forEach((e) => {
                            t.connect(e), (t = e);
                        }),
                        e
                    );
                }
                updateBands(e) {
                    this.bands.forEach((t, a) => {
                        let r = e[a];
                        r && t.gain.setValueAtTime(r.value, this.context.currentTime + 0.3);
                    });
                }
                createAnalyzerNode(e) {
                    let t = e.createAnalyser();
                    return (t.fftSize = 1024), (t.smoothingTimeConstant = 0.4), t;
                }
                checkAndResumeAudioContext(e) {
                    let t = () => {
                        e.resume().then(() => {
                            document.body.removeEventListener('touchend', t, !0),
                                document.body.removeEventListener('click', t, !0),
                                document.body.removeEventListener('keydown', t, !0);
                        });
                    };
                    e.state === l.SUSPENDED &&
                        (document.body.addEventListener('touchend', t, !0),
                        document.body.addEventListener('click', t, !0),
                        document.body.addEventListener('keydown', t, !0));
                }
                constructor(e, t) {
                    (0, Y._)(this, 'audioElement', void 0),
                        (0, Y._)(this, 'context', void 0),
                        (0, Y._)(this, 'sourceNode', void 0),
                        (0, Y._)(this, 'preamp', void 0),
                        (0, Y._)(this, 'bands', []),
                        (0, Y._)(this, 'analyserNode', void 0),
                        (0, Y._)(this, 'bufferLength', 0),
                        (0, Y._)(this, 'spectrum', new Uint8Array()),
                        (0, Y._)(this, 'gainNode', void 0),
                        (0, Y._)(this, 'r128GainNode', void 0),
                        (0, Y._)(this, 'lastR128', null),
                        (0, Y._)(this, 'config', void 0),
                        (this.audioElement = e),
                        (this.context = new AudioContext()),
                        this.checkAndResumeAudioContext(this.context),
                        (this.sourceNode = this.context.createMediaElementSource(this.audioElement)),
                        (this.analyserNode = this.createAnalyzerNode(this.context)),
                        (this.bufferLength = this.analyserNode.frequencyBinCount),
                        (this.spectrum = new Uint8Array(this.bufferLength)),
                        (this.gainNode = this.context.createGain()),
                        (this.r128GainNode = this.context.createGain()),
                        (this.preamp = this.context.createGain()),
                        (this.config = t),
                        this.connectNodes();
                }
            }
            class tm {
                get isAudioContextRequired() {
                    return !!this.options.useEqualizer || !!this.options.useAnalyser || !!this.options.useFade || !!this.options.useCrossFade;
                }
                createGraphs(e) {
                    let t = !!this.options.useFade || !!this.options.useCrossFade;
                    if ((0, q.s4)(e)) return [new tg(e.currentAudioElement.value, { useAnalyser: this.options.useAnalyser, useGain: t })];
                    if ((0, q.uo)(e)) return e.audioElementsStore.map((e) => new tg(e, { useAnalyser: this.options.useAnalyser, useGain: t }));
                    throw new ei.t('Can not create audio graph for this type of media player');
                }
                initializeContext(e, t) {
                    if (this.isAudioContextRequired) {
                        if (
                            ((this.graphs = this.createGraphs(e)),
                            this.options.useAnalyser && (this.analyser = new tt({ currentAudioElement: e.currentAudioElement, graphs: this.graphs })),
                            this.options.useEqualizer)
                        ) {
                            let e = 'object' == typeof this.options.useEqualizer ? this.options.useEqualizer : void 0;
                            this.equalizer.value = new ta({ graphs: this.graphs, preset: null == e ? void 0 : e.preset });
                        }
                        this.options.useFade && (this.fade = new tu({ currentAudioElement: e.currentAudioElement, graphs: this.graphs, playback: t })),
                            this.options.useCrossFade && (this.crossfade = new tc({ playback: t, graphs: this.graphs, config: this.options.crossFadeConfig }));
                    }
                    this.options.useSmartPreview && (this.smartPreview = new th({ playback: t }));
                }
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.mediaPlayersStore.onChange((e) => {
                        if (void 0 === e) return;
                        let t = e[$.e.AUDIO];
                        void 0 !== t && ((0, q.s4)(t) || (0, q.uo)(t)) && this.initializeContext(t, a);
                    }),
                        a.state.playerState.event.onChange(() => {
                            if (this.fade)
                                switch (a.state.playerState.event.value) {
                                    case q.Iu.PLAYING:
                                        this.fade.enable();
                                        break;
                                    case q.Iu.PAUSED:
                                    case q.Iu.STOP:
                                        this.fade.disable();
                                }
                        }),
                        t.beforeMediaStartPlaying.tapPromise('WebAudioPlugin', () => {
                            var e, t, r;
                            let i,
                                s,
                                { currentEntity: n } = a.state.queueState,
                                o = null == (e = n.value) ? void 0 : e.entity;
                            return (
                                (0, te.l)(o) &&
                                    ((i = null == (t = o.data.meta.smartPreviewParams) ? void 0 : t.fade),
                                    (s = null == (r = o.data.meta.smartPreviewParams) ? void 0 : r.durationMs)),
                                (0, ex.b)(o) && ((i = o.data.meta.fade), (s = o.data.meta.durationMs)),
                                this.graphs.forEach((e) => {
                                    var t;
                                    let i = null == (t = a.state.mediaPlayersStore.value[$.e.AUDIO]) ? void 0 : t.currentAudioElement.value,
                                        r = null == o ? void 0 : o.data.meta.r128,
                                        n = !r && eI(o) ? { i: 0, tp: 0 } : r;
                                    (!i || e.audioElement === i) && e.setR128Gain(n);
                                }),
                                this.fade && this.fade.apply(i),
                                this.smartPreview && this.smartPreview.apply(s),
                                Promise.resolve()
                            );
                        });
                }
                constructor(e) {
                    (0, Y._)(this, 'options', void 0),
                        (0, Y._)(this, 'graphs', []),
                        (0, Y._)(this, 'analyser', void 0),
                        (0, Y._)(this, 'equalizer', new eg.cJ(null)),
                        (0, Y._)(this, 'fade', void 0),
                        (0, Y._)(this, 'smartPreview', void 0),
                        (0, Y._)(this, 'crossfade', void 0),
                        (this.options = e);
                }
            }
            function ty(e) {
                return (null == e ? void 0 : e.data.type) === H.R.Clip;
            }
            !(function (e) {
                (e.AD = 'ad'), (e.SHOT = 'shot');
            })(d || (d = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(u || (u = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(c || (c = {})),
                (function (e) {
                    (e.VIDEO = 'video'), (e.AUDIO = 'audio');
                })(h || (h = {}));
            class tp {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.beforeEntityChange.tapPromise(
                        'AdvertPlugin',
                        () =>
                            new Promise((e) => {
                                if (!this.variables.enabled) return void e();
                                let {
                                    state: {
                                        currentContext: a,
                                        queueState: {
                                            index: { value: r },
                                            order: { value: i },
                                            entityList: { value: s },
                                            currentEntity: { value: n },
                                        },
                                    },
                                } = t;
                                if (void 0 !== a.value) {
                                    let o = i[r + 1],
                                        l = void 0 !== o ? s[o] : void 0,
                                        g = l ? String(l.entity.data.meta.id) : void 0,
                                        m = i[r - 1],
                                        y = void 0 !== m ? s[m] : void 0,
                                        p = y ? String(y.entity.data.meta.id) : void 0,
                                        v =
                                            ((null == n ? void 0 : n.entity.totalPlayedSeconds) || 0) /
                                            ((((null == n ? void 0 : n.entity.data.meta) && 'durationMs' in n.entity.data.meta && n.entity.data.meta.durationMs) || 1) /
                                                1e3);
                                    (this.currentTrackId = String(null == n ? void 0 : n.entity.data.meta.id)),
                                        (this.from = a.value.from),
                                        this.afterTrackResource
                                            .getAfterTrack({ contextItem: String(a.value.data.meta.id), from: a.value.from, types: d.AD, nextTrackId: g, prevTrackId: p })
                                            .then((a) => {
                                                var r, i, s;
                                                let n =
                                                    (v >= 0.5 && (null == (r = a.ad) ? void 0 : r.afterPlay) === u.AD) ||
                                                    (v < 0.5 && (null == (i = a.ad) ? void 0 : i.afterSkip) === c.AD);
                                                if ('ad' in a && this.advertModule && n) {
                                                    let r = ty(null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity) ? h.VIDEO : void 0;
                                                    t.pause(), this.advertModule.playAdvert({ afterTrackResponse: a, advertType: r }).finally(e);
                                                } else e();
                                            });
                                } else e();
                            }),
                    );
                }
                advertFeedbackCallback() {
                    this.adsResource.saveAds({ from: this.from, trackId: this.currentTrackId, type: 'ad' });
                }
                constructor(e) {
                    var t;
                    (0, Y._)(this, 'advertModule', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'afterTrackResource', void 0),
                        (0, Y._)(this, 'adsResource', void 0),
                        (0, Y._)(this, 'currentTrackId', ''),
                        (0, Y._)(this, 'from', '');
                    let { afterTrackResource: a, advertModule: r, adsResource: i, variables: s } = e;
                    (this.afterTrackResource = a),
                        (this.adsResource = i),
                        (this.variables = s),
                        (this.advertModule = r),
                        null == (t = this.advertModule) || t.setAdvertFeedbackCallback(this.advertFeedbackCallback.bind(this));
                }
            }
            var tv = a(8342),
                tS = a(82411),
                tE = a(52469),
                tf = a(27158);
            function tb(e) {
                let t = tv.FM.r.PAUSE;
                switch (e.status.value) {
                    case q.MT.BUFFERING:
                        t = tv.FM.r.BUFFERING;
                        break;
                    case q.MT.ENDED:
                    case q.MT.STOPPED:
                        t = tv.FM.r.END;
                        break;
                    case q.MT.PLAYING:
                        t = tv.FM.r.PLAY;
                        break;
                    case q.MT.PAUSED:
                    case q.MT.IDLE:
                    case q.MT.LOADING_MEDIA_SOURCE:
                        t = tv.FM.r.PAUSE;
                }
                return t;
            }
            class tP {
                createTelemetry(e) {
                    (this.vsid = (0, W.createVsid)(e.playbackInitializationTime, this.playerTypeForVsid)),
                        (this.telemetry = new tv.YT({
                            getState: () => {
                                var t;
                                let {
                                    progress: {
                                        value: { duration: a, position: r, remainingBufferedTime: i },
                                    },
                                    volume: s,
                                } = e.state.playerState;
                                return (
                                    (null == (t = e.state.currentContext.value) ? void 0 : t.data.type) === ec.K.Radio &&
                                    e.state.currentContext.value.data.meta.streamEpisodeId
                                        ? this.setStaticParams({ videoContentId: e.state.currentContext.value.data.meta.streamEpisodeId })
                                        : this.setStaticParams({ videoContentId: void 0 }),
                                    {
                                        duration: (0, tf.fP)(a),
                                        currentTime: (0, tf.fP)(r),
                                        utcStartTime: void 0,
                                        videoType: 'VOD',
                                        isFullscreen: !1,
                                        volume: s.value,
                                        muted: 0 === s.value,
                                        remainingBufferedTime: { total: (0, tf.fP)(null != i ? i : 0) },
                                        playingState: tb(e.state.playerState),
                                        videoSize: void 0,
                                        liveLatency: void 0,
                                        videoTracks: [],
                                        audioTrack: void 0,
                                        isVisible: !1,
                                    }
                                );
                            },
                            sendLog: (e, t) => {
                                this.telemetryResource.log({ payload: e, urlParams: t });
                            },
                            playerInfo: { service: this.service, version: '1.0.0', vsid: this.vsid, isVideoADB: !1 },
                        })),
                        this.telemetry.setStaticParams({ labels: { from: this.from } }),
                        (this.resourceTimingsMonitor = new tv.yv({
                            sendLog: (e, t) => {
                                this.telemetryResource.perfLog({ payload: e, urlParams: t });
                            },
                        })),
                        this.resourceTimingsMonitor.attach(window);
                }
                logEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent(e, t);
                }
                logError(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logError(e, t);
                }
                setPlayingState(e) {
                    var t;
                    let a = tb(e);
                    null == (t = this.telemetry) || t.setPlayingState(a);
                }
                setStaticParams(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.setStaticParams(e, t);
                }
                onBeforeSetSource() {
                    var e;
                    return null == (e = this.telemetry) ? void 0 : e.onBeforeSetSource();
                }
                onSetSource(e) {
                    var t;
                    null == (t = this.telemetry) || t.onSetSource(e, { streams: [], params: {} });
                }
                onCreatePlayer(e) {
                    var t;
                    let { location: a, referrer: r } = (0, tE.V)(window.document);
                    null == (t = this.telemetry) ||
                        t.onCreatePlayer(e, { location: (0, tS.K)(window), topLocation: a, referrer: window.document.referrer, topReferrer: r });
                }
                onSeek(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.onSeek({ oldPosition: e, newPosition: t });
                }
                logYaspEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent({ name: e, data: t });
                }
                logYaspError(e) {
                    var t;
                    null == (t = this.telemetry) || t.logError({ error: e.detail });
                }
                constructor({ telemetryResource: e, service: t, from: a, playerTypeForVsid: r }) {
                    (0, Y._)(this, 'telemetry', void 0),
                        (0, Y._)(this, 'resourceTimingsMonitor', void 0),
                        (0, Y._)(this, 'telemetryResource', void 0),
                        (0, Y._)(this, 'from', void 0),
                        (0, Y._)(this, 'service', void 0),
                        (0, Y._)(this, 'playerTypeForVsid', void 0),
                        (0, Y._)(this, 'vsid', void 0),
                        (this.telemetryResource = e),
                        (this.service = t),
                        (this.from = a),
                        (this.playerTypeForVsid = r);
                }
            }
            class t_ {
                send(e) {
                    return this.transport.send(e, { topLevelParameter: 'player-metrics' });
                }
                constructor(e) {
                    (0, Y._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            class tI {
                send(e) {
                    return this.transport.send(e, { service: 'Player' });
                }
                constructor(e) {
                    (0, Y._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            var tC = a(79490);
            let tk = [];
            function tT(e, t) {
                let a,
                    r,
                    i = e.state.queueState.order.value,
                    s = e.state.queueState.index.value,
                    n = e.state.currentContext.value,
                    o = e.state.queueState.entityList.value,
                    l = e.state.queueState.repeat.value === q.pM.CONTEXT;
                tk.forEach((e) => e());
                for (let t = s - 1; t >= 0; t--) {
                    let r = i[t];
                    if ('number' != typeof r) break;
                    let s = o[r],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: q.So.MOVE_BACKWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        a = s.entity;
                        break;
                    }
                }
                let d = !!a || l;
                for (let t = s + 1; t < i.length; t++) {
                    let a = i[t];
                    if ('number' != typeof a) break;
                    let s = o[a],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: q.So.MOVE_FORWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        r = s.entity;
                        break;
                    }
                }
                let u = !!r || (l && !!a) || (!l && t);
                if (
                    (n &&
                        ((n.availableActions.moveBackward.value = d),
                        (n.availableActions.moveForward.value = u && !(0, tC.S)(n)),
                        (0, e9.i)(n) && !n.data.meta.session && (n.availableActions.moveForward.value = !1),
                        a || r || !l || ((n.availableActions.moveBackward.value = !1), (n.availableActions.moveForward.value = !1))),
                    (0, tC.S)(n))
                )
                    return;
                if (!a) {
                    let t = e.state.playerState.progress.onChange((t) => {
                        n &&
                            t &&
                            (((l = e.state.queueState.repeat.value === q.pM.CONTEXT) && !a && !r) || !l) &&
                            (n.availableActions.moveBackward.value = t.position > q.DS);
                    });
                    tk.push(t);
                }
                let c = e.state.queueState.repeat.onChange((e) => {
                    if (n) {
                        if ((0, e9.i)(n) && !n.data.meta.session) {
                            n.availableActions.moveForward.value = !1;
                            return;
                        }
                        if (e === q.pM.CONTEXT) {
                            (n.availableActions.moveBackward.value = !!a || (0 === s && !!r)), (n.availableActions.moveForward.value = !!r || !!a);
                            return;
                        }
                        (n.availableActions.moveBackward.value = !!a), (n.availableActions.moveForward.value = !!r || t);
                    }
                });
                tk.push(c);
            }
            let tA = [z.S.AUDIOBOOK, z.S.FAIRY_TALE, z.S.PODCAST, z.S.COMMENT];
            var tD = a(64605);
            let tN = (e) => {
                let { meta: t } = e.data,
                    a = 'albums' in t && t.albums && t.albums.length > 0 && t.albums[0] && t.albums[0].type === tD._.PODCAST;
                return !!(('type' in t && t.type && tA.includes(t.type)) || a);
            };
            class tR {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = () => {
                            !(function (e) {
                                let { playback: t, isVibeRepeatEnabled: a } = e,
                                    { value: r } = t.state.currentContext,
                                    { value: i } = t.state.queueState.currentEntity;
                                if (!r || !i) return;
                                let { meta: s } = i.entity.data,
                                    n = (0, e9.i)(r),
                                    o = (0, tC.S)(r),
                                    l = 'type' in s && s.type && tA.includes(s.type),
                                    d = !n && !o && !l,
                                    u = (!n || a) && !o && !l;
                                (r.availableActions.shuffle.value = d),
                                    (r.availableActions.repeat.value = u),
                                    !d && t.state.queueState.shuffle.value && t.toggleShuffle();
                                let c = t.state.queueState.repeat.value,
                                    h = !u && c !== q.pM.NONE,
                                    g = u && n && c === q.pM.CONTEXT;
                                (h || g) && t.setRepeatMode(q.pM.NONE);
                            })({ playback: a, isVibeRepeatEnabled: this.variables.isVibeRepeatEnabled });
                            let { value: e } = a.state.currentContext,
                                { value: t } = a.state.queueState.currentEntity,
                                r = void 0 !== t;
                            if (void 0 !== e && r) {
                                let a = tN(t.entity);
                                e.availableActions.speed.value = !!a;
                            }
                        };
                    t.afterContextSet.tap('AvailableActionsPlugin', r),
                        t.beforeMediaStartPlaying.tap('AvailableActionsPlugin', r),
                        a.state.queueState.entityList.onChange(() => {
                            r(), tT(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.filterParams.onChange(() => {
                            r(), tT(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.index.onChange(() => {
                            tT(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.repeat.onChange((e) => {
                            let { value: t } = a.state.currentContext;
                            (0, e9.i)(t) && this.variables.isVibeRepeatEnabled && e === q.pM.CONTEXT && a.setRepeatMode(q.pM.ONE);
                        });
                }
                constructor({ variables: e }) {
                    (0, Y._)(this, 'variables', void 0), (this.variables = e);
                }
            }
            class tx {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterContextSet.tap('ApplyContextPlugin', () => {
                        let e = a.state.currentContext.value;
                        e && e instanceof q.EX && e.apply({ hooks: t, playback: a });
                    });
                }
            }
            class tL {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    t.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = t.state.queueState;
                        if (e.value)
                            switch (t.state.playerState.event.value) {
                                case q.Iu.PAUSED:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(q.Iu.PAUSED) });
                                    break;
                                case q.Iu.WAITING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(q.Iu.WAITING) });
                                    break;
                                case q.Iu.PLAYING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'event-'.concat(q.Iu.PLAYING) });
                                    break;
                                case q.Iu.MEDIA_ELEMENT_ERROR:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(q.Iu.MEDIA_ELEMENT_ERROR) });
                            }
                    }),
                        a.beforeEntityPlayingProcessStart.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.clearTimeStagesOfPlayback(), Promise.resolve();
                        }),
                        a.afterMediaStartPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'hook-afterMediaStartPlaying' }), Promise.resolve();
                        }),
                        a.afterMediaEndPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-afterMediaEndPlaying' }), Promise.resolve();
                        }),
                        a.beforeEntityChange.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeEntityChange' }), Promise.resolve();
                        }),
                        a.beforeContextSet.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeContextSet' }), Promise.resolve();
                        });
                }
            }
            var tw = a(31322),
                tO = a(79722);
            class tM extends tw.X {
                async sendPlays(e, t) {
                    return (
                        await this.httpClient.post(
                            'plays',
                            this.createHttpOptions({
                                timeoutKey: 'sendPlays',
                                params: e,
                                searchParams: (0, tO.P)({ clientNow: e.clientNow }),
                                json: { plays: e.plays },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, Y._)(this, 'httpClient', void 0), (0, Y._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
            var tF = a(87953);
            !(function (e) {
                (e.START = 'start'), (e.END = 'end'), (e.PLAYING = 'playing'), (e.PAUSE = 'pause');
            })(g || (g = {}));
            var tG = a(82299),
                tK = a(44179),
                tU = a(92478),
                tj = a(94527),
                tX = a(36795);
            let tB = (e) => !!(e && 'object' == typeof e && 'playId' in e && 'totalPlayedSeconds' in e),
                tV = (e) => {
                    let t = [e.find((e) => 0 === e.totalPlayedSeconds), (0, tU.A)(e, 'totalPlayedSeconds')];
                    return (0, tj.A)(t.filter(tB), 'totalPlayedSeconds');
                };
            class tW {
                use(e) {
                    return this.middlewares.push(e), this;
                }
                run(e) {
                    let t = (a) => (a >= this.middlewares.length ? Promise.resolve() : (0, this.middlewares[a])(e, () => t(a + 1)));
                    return t(0);
                }
                constructor() {
                    (0, Y._)(this, 'middlewares', []);
                }
            }
            class tY {
                getResult() {
                    return this.playData;
                }
                constructor(e) {
                    (0, Y._)(this, 'contextEntityPair', void 0),
                        (0, Y._)(this, 'playType', void 0),
                        (0, Y._)(this, 'totalPlayedSeconds', void 0),
                        (0, Y._)(this, 'endPositionSeconds', void 0),
                        (0, Y._)(this, 'dynamicData', void 0),
                        (0, Y._)(this, 'hooks', void 0),
                        (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'operation', void 0),
                        (0, Y._)(this, 'clock', void 0),
                        (0, Y._)(this, 'isCrossfadeEnabled', void 0),
                        (0, Y._)(this, 'playData', {}),
                        (this.contextEntityPair = e.contextEntityPair),
                        (this.playType = e.playType),
                        (this.totalPlayedSeconds = e.totalPlayedSeconds),
                        (this.endPositionSeconds = e.endPositionSeconds),
                        (this.dynamicData = e.dynamicData),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.operation = e.operation),
                        (this.clock = e.clock),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled);
                }
            }
            class tq extends ei.t {
                constructor(e, { code: t = 'E_PLAYS', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'PlaysException'), Object.setPrototypeOf(this, tq.prototype);
                }
            }
            let tz = (e, t) => {
                var a, r, i;
                let { entity: s, context: n } = e.contextEntityPair;
                if (!s.playId) {
                    let t = {};
                    (t.contextId = n.data.meta.id), (t.entityId = s.data.meta.id);
                    let a = new tq('Trying to '.concat(e.operation, ' without playId'), { data: t });
                    throw (null == (r = e.hooks) || r.afterError.promise(a), a);
                }
                let o = (null == (a = s.data.additional) ? void 0 : a.from) || n.from;
                if (!o) {
                    let t = new tq('from field is required for '.concat(e.operation, ', but was not found in plays data'));
                    throw (null == (i = e.hooks) || i.afterError.promise(t), t);
                }
                return (e.playData.playId = s.playId), (e.playData.from = o), t();
            };
            function tH(e) {
                return (null == e ? void 0 : e.data.type) === ec.K.Radio;
            }
            function tQ(e) {
                if ((0, te.l)(e)) {
                    var t;
                    if ('smartPreviewParams' in e.data.meta && (null == (t = e.data.meta.smartPreviewParams) ? void 0 : t.durationMs))
                        return e.data.meta.smartPreviewParams.durationMs / 1e3;
                } else if ('durationMs' in e.data.meta && e.data.meta.durationMs) return e.data.meta.durationMs / 1e3;
                return 0;
            }
            let t$ = (e, t) => {
                    let { entity: a, context: r } = e.contextEntityPair,
                        i = tQ(a),
                        s = e.totalPlayedSeconds,
                        n = e.endPositionSeconds;
                    return (
                        0.5 > Math.abs(i - e.totalPlayedSeconds) && (s = i),
                        0.5 > Math.abs(i - e.endPositionSeconds) && (n = i),
                        tH(r) && (n = s),
                        (e.playData.totalPlayedSeconds = s),
                        (e.playData.endPositionSeconds = n),
                        (e.playData.trackLengthSeconds = i),
                        t()
                    );
                },
                tZ = (e) => {
                    if (e.mediaSourceData && 'urls' in e.mediaSourceData.data) {
                        let t = e.mediaSourceData.data.urls[0];
                        if (t && t.startsWith('blob:')) return !0;
                    }
                    return !1;
                };
            function tJ(e) {
                return (null != e ? e : new Date()).toISOString();
            }
            let t0 = (e, t) => {
                    var a;
                    let { entity: r, context: i } = e.contextEntityPair;
                    (e.playData.timestamp = tJ(e.clock())),
                        (e.playData.albumId = (function (e) {
                            let t;
                            if ('albums' in e.data.meta) {
                                let {
                                    data: {
                                        meta: { albums: a },
                                    },
                                } = e;
                                if (a) {
                                    let e = a[0];
                                    e && (t = String(e.id));
                                }
                            }
                            return t;
                        })(r)),
                        (e.playData.context = i.data.type),
                        (e.playData.contextItem = String(i.data.meta.id)),
                        (e.playData.addTracksToPlayerTime = r.addTracksToPlayerTime),
                        (e.playData.fromCache = tZ(r)),
                        (e.playData.isRestored = !!r.data.isRestored);
                    let s = (null == (a = r.data.additional) ? void 0 : a.utmLink) || i.utmLink || {};
                    return (e.playData = { ...e.playData, ...s }), t();
                },
                t1 = (e, t) => ((e.playData.audioAuto = 'none'), (e.playData.audioOutputName = 'Динамик'), (e.playData.audioOutputType = 'Speaker'), t()),
                t5 = (e, t) => {
                    let a,
                        { entity: r, context: i } = e.contextEntityPair,
                        s = String(r.data.meta.id);
                    if ((0, tC.S)(i)) {
                        var n;
                        a = { generativeStreamId: (null == (n = i.data.meta.stream) ? void 0 : n.id) ? String(i.data.meta.stream.id) : void 0 };
                    } else a = { trackId: s };
                    return (e.playData = { ...e.playData, ...a }), t();
                },
                t4 = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, e9.i)(a) && a.data.meta.session) {
                        var r, i, s;
                        let { dynamicData: t } = e,
                            n = eP(e.contextEntityPair.entity) || (0, ex.b)(e.contextEntityPair.entity) ? e.contextEntityPair.entity.data.batchId : void 0,
                            {
                                wave: { seeds: o, stationId: l },
                            } = a.data.meta.session;
                        (e.playData.radioSessionId = null != (r = t.radioSessionId) ? r : a.data.meta.session.radioSessionId),
                            (e.playData.batchId = null != (i = null != n ? n : t.radioBatchId) ? i : a.data.meta.session.batchId),
                            (e.playData.isFromAutoflow = t.isFromAutoflow),
                            (e.playData.isFromPumpkin = t.isFromPumpkin),
                            (e.playData.context = 'radio'),
                            (e.playData.contextItem = null != (s = t.contextItem) ? s : o.join() || l);
                    }
                    return t();
                };
            var t9 = a(92382);
            let t3 = (e, t) => {
                let { context: a } = e.contextEntityPair;
                return (
                    (0, t9.K)(a) &&
                        ((e.playData.playlistId = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind)),
                        (e.playData.contextItem = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind))),
                    t()
                );
            };
            var t2 = a(65068),
                t7 = a(44884);
            let t6 = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, t2.p)(a)) {
                        var r;
                        let t = [t7.b.Search, t7.b.Other],
                            i = null != (r = a.data.overrideContextType) ? r : t7.b.Other;
                        (e.playData.context = i), t.includes(i) && (e.playData.contextItem = null);
                    }
                    return t();
                },
                t8 = (e, t) => {
                    let { entity: a } = e.contextEntityPair;
                    return (0, te.l)(a) && (e.playData.smartPreview = !0), t();
                };
            !(function (e) {
                (e.AFTER_MEDIA_END_PLAYING = 'AFTER_MEDIA_END_PLAYING'),
                    (e.BEFORE_CONTEXT_SET = 'BEFORE_CONTEXT_SET'),
                    (e.BEFORE_ENTITY_CHANGE = 'BEFORE_ENTITY_CHANGE'),
                    (e.AFTER_CONTEXT_END = 'AFTER_CONTEXT_END');
            })(m || (m = {}));
            let ae = (e, t) => {
                var a, r;
                let { dynamicData: i, playType: s } = e;
                return (
                    (e.playData.seek = null != (a = i.seek) && a),
                    (e.playData.pause = null != (r = i.pause) && r),
                    (e.playData.startTimestamp = i.startTimestamp),
                    s !== g.START && (e.playData.maxPlayerStage = i.maxPlayerStage),
                    (e.playData.isRepeated = i.hookSource === m.AFTER_MEDIA_END_PLAYING && i.repeatMode === q.pM.ONE),
                    t()
                );
            };
            !(function (e) {
                (e.FINISH = 'finish'),
                    (e.SKIP = 'skip'),
                    (e.DISLIKE = 'dislike'),
                    (e.BACK_SKIP = 'back_skip'),
                    (e.OTHER_TRACK = 'other_track'),
                    (e.IN_PROGRESS = 'in_progress');
            })(y || (y = {}));
            let at = (e, t) => {
                let a,
                    { dynamicData: r, playType: i } = e;
                if (void 0 !== r.changeReason) return (e.playData.changeReason = r.changeReason), t();
                if (!r.hookSource) return i === g.PLAYING && (e.playData.changeReason = y.IN_PROGRESS), t();
                switch (r.hookSource) {
                    case m.AFTER_MEDIA_END_PLAYING:
                        a = y.FINISH;
                        break;
                    case m.BEFORE_CONTEXT_SET:
                        a = y.OTHER_TRACK;
                        break;
                    case m.BEFORE_ENTITY_CHANGE:
                    case m.AFTER_CONTEXT_END:
                        a = (function (e, t) {
                            if (!e) return y.OTHER_TRACK;
                            switch (e) {
                                case q.So.AUTO_MOVE_FORWARD:
                                    return y.FINISH;
                                case q.So.ERROR_MOVE_FORWARD:
                                case q.So.MOVE_FORWARD:
                                    return t ? y.DISLIKE : y.SKIP;
                                case q.So.MOVE_BACKWARD:
                                    return y.BACK_SKIP;
                                default:
                                    return y.OTHER_TRACK;
                            }
                        })(r.entityChangeMethod, r.wasDislikedOnChange);
                }
                return (e.playData.changeReason = a), t();
            };
            function aa(e) {
                let t = e.state.mediaPlayersStore.value[$.e.AUDIO];
                return !!t && !!(0, q.uo)(t) && t.isReadyForAudioEffect.value;
            }
            let ar = (e, t) => {
                    if ((0, tC.S)(e.contextEntityPair.context)) return t();
                    let a = aa(e.playback),
                        r = e.contextEntityPair.getCrossParams(),
                        i = e.contextEntityPair.getFadeMode();
                    if (
                        ((e.playData.fadeMode = a && r ? i : q.OQ.NONE),
                        !(function (e) {
                            let t = e.contextEntityPair.getCrossParams(),
                                a = e2(e.contextEntityPair.context),
                                r = !!e.isCrossfadeEnabled && e.isCrossfadeEnabled.value,
                                i = a || (r && e.contextEntityPair.getFadeMode() !== q.OQ.NONE);
                            if (!t || !i) {
                                e.playData.expectedTrackLengthSeconds = tQ(e.contextEntityPair.entity);
                                return;
                            }
                            e.playData.expectedTrackLengthSeconds = t.outStart - t.inStart;
                        })(e),
                        e.dynamicData.startedWithCrossfade && r)
                    )
                        e.playData.startPositionSeconds = r.inStart;
                    else {
                        var s;
                        e.playData.startPositionSeconds = null != (s = e.contextEntityPair.positionSec) ? s : 0;
                    }
                    return t();
                },
                ai = (e, t) => {
                    let { context: a } = e.contextEntityPair,
                        { livePlayableIndex: r, index: i } = e.playback.state.queueState,
                        s = i.value === r.value;
                    return (0, tC.S)(a) || ((0, e9.i)(a) ? (e.playData.isLivePlayableIndex = s) : (e.playData.isLivePlayableIndex = !1)), t();
                };
            class as {
                buildPlayDataPipeline() {
                    let e = new tW().use(tz).use(t$).use(t0).use(t1).use(t5).use(t4).use(t3).use(t6).use(t8).use(ae).use(at).use(ai);
                    return this.toggles.enableSendFadeFieldsInPlays && e.use(ar), e;
                }
                createPlay(e) {
                    let t = new tY({ ...e, hooks: this.hooks, playback: this.playback, clock: this.clock, isCrossfadeEnabled: this.isCrossfadeEnabled });
                    return this.playDataPipeline
                        .run(t)
                        .then(() => t.getResult())
                        .catch((e) => (console.error('Critical error in play data pipeline:', e), null));
                }
                createStartPlay(e) {
                    e.entity.addTracksToPlayerTime = ''.concat(Math.random().toString().slice(2), '-').concat(Math.ceil(Number(this.clock()) / 1e3));
                    let t = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: g.START,
                        totalPlayedSeconds: 0,
                        endPositionSeconds: 0,
                        dynamicData: t,
                        operation: 'send start entity play',
                    });
                }
                createProgressPlay(e, t, a, r) {
                    let i = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({ contextEntityPair: e, playType: g.PLAYING, totalPlayedSeconds: t, endPositionSeconds: a, dynamicData: i, operation: r });
                }
                createEndPlay(e, t, a) {
                    let r = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: g.END,
                        totalPlayedSeconds: t,
                        endPositionSeconds: a,
                        dynamicData: r,
                        operation: 'send end entity play',
                    });
                }
                sendStartEntityPlay(e) {
                    if (!e) return Promise.resolve();
                    try {
                        return this.createStartPlay(e).then((t) => {
                            if (t && !this.toggles.disableSendPlaysOnTrackStart)
                                return this.sendPlay(t).catch((t) => {
                                    this.handleSendingError(t, 'Error while sending plays', e);
                                });
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendPartialPlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.hasSentPartialPlayReportId(t),
                            i = this.toggles.enablePartialPlayReporting && !r && a >= 30.1,
                            s = this.toggles.enablePeriodicSendPlays && this.nextPeriodicSendTotalPlayedSeconds < a;
                        if (!(0, tC.S)(e.context) && (i || s))
                            return this.createProgressPlay(e, a, this.playback.state.playerState.progress.value.position, 'send partial play report').then((t) =>
                                t
                                    ? this.sendPlay(t)
                                          .then(() => {
                                              i && this.addSentPartialPlayReportId(t.playId),
                                                  s && (this.nextPeriodicSendTotalPlayedSeconds += this.periodicSendIntervalSeconds);
                                          })
                                          .catch((t) => {
                                              this.handleSendingError(t, 'Error while sending plays', e);
                                          })
                                    : Promise.resolve(),
                            );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays partial play report', e);
                    }
                    return Promise.resolve();
                }
                sendPausePlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.dynamicDataManager.getDynamicDataByPlayId(t);
                        return this.createPlay({
                            contextEntityPair: e,
                            playType: g.PAUSE,
                            totalPlayedSeconds: a,
                            endPositionSeconds: this.playback.state.playerState.progress.value.position,
                            dynamicData: { ...r, changeReason: void 0 },
                            operation: 'send pause play report',
                        }).then((t) =>
                            t
                                ? this.sendPlay(t).catch((t) => {
                                      this.handleSendingError(t, 'Error while sending plays', e);
                                  })
                                : Promise.resolve(),
                        );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays pause play report', e);
                    }
                    return Promise.resolve();
                }
                sendEndEntityPlay(e) {
                    if (!e || (this.toggles.enableRemoveDuplicatePlays && this.hasSentPlayId(e.entity.playId))) return Promise.resolve();
                    this.toggles.enableRemoveDuplicatePlays && this.addSentPlayId(e.entity.playId);
                    try {
                        return this.createEndPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position).then((t) => {
                            if (t)
                                return (
                                    this.clearDynamicData(t.playId),
                                    this.toggles.enablePartialPlayReporting && this.clearSentPartialPlayReportId(t.playId),
                                    this.sendPlay(t)
                                        .catch((t) => {
                                            this.handleSendingError(t, 'Error while sending plays', e);
                                        })
                                        .finally(() => {
                                            this.resetIsRestoredFlag(e.entity);
                                        })
                                );
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendStoredPlaysData() {
                    this.isSendingPlays.value = !0;
                    let e = this.toggles.limitOfSendingPlaysData || 25;
                    return this.isStorageEnabled()
                        ? this.store
                              .getStoredPlaysData(e)
                              .then((e) => {
                                  let t = this.filterPlaysForSending(e);
                                  if (!t.length) {
                                      this.isSendingPlays.value = !1;
                                      return;
                                  }
                                  this.playsResourceSend(t)
                                      .then(() => {
                                          this.deletePlaysData(t).then(() => {
                                              this.sendStoredPlaysData();
                                          });
                                      })
                                      .catch((e) => {
                                          var a;
                                          (this.isSendingPlays.value = !1),
                                              e instanceof tF.GX && e.statusCode === tF.X1.BAD_REQUEST && this.deletePlaysData(t),
                                              null == (a = this.hooks) || a.afterError.promise(new tq('Error while sending plays', { cause: e }));
                                      });
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                sendPlay(e) {
                    this.isSendingPlays.value = !0;
                    let t = [e];
                    return this.playsResourceSend(t)
                        .then(() => {
                            this.isStorageEnabled() && this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
                        })
                        .catch((a) => {
                            throw (a instanceof tF.GX && a.statusCode === tF.X1.BAD_REQUEST ? this.deletePlaysData(t) : this.storeAndReplace(e), a);
                        })
                        .finally(() => {
                            if (!this.isStorageEnabled()) {
                                this.isSendingPlays.value = !1;
                                return;
                            }
                            this.sendStoredPlaysData();
                        });
                }
                clearSentPlayIds() {
                    this.sentPlayIds.clear();
                }
                clearPeriodicSendInterval() {
                    this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds;
                }
                hasSentPlayId(e) {
                    return this.sentPlayIds.has(e);
                }
                addSentPlayId(e) {
                    this.sentPlayIds.add(e);
                }
                addSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.add(e);
                }
                hasSentPartialPlayReportId(e) {
                    return this.sentPartialPlayReportIds.has(e);
                }
                clearSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.delete(e);
                }
                isSendingPlaysValue() {
                    return this.isSendingPlays.value;
                }
                onSendingPlaysStateChange(e) {
                    return this.isSendingPlays.onChange(e);
                }
                resetIsRestoredFlag(e) {
                    e.data.isRestored && (e.data.isRestored = !1);
                }
                handleSendingError(e, t, a) {
                    var r;
                    let i = '',
                        s = '';
                    a && ((i = a.context.data.meta.id), (s = a.entity.data.meta.id)),
                        null == (r = this.hooks) || r.afterError.promise(new tq(t, { cause: e, data: { contextId: i, entityId: s } }));
                }
                clearDynamicData(e) {
                    this.dynamicDataManager.clearDynamicData(e);
                }
                setPlaysDataForSending(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.add(t);
                    });
                }
                clearSendedPlaysData(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.has(t) && this.sendingInProgressForPlayId.delete(t);
                    });
                }
                filterPlaysForSending(e) {
                    var t = e.filter((e) => {
                        let { playId: t } = e;
                        return !this.sendingInProgressForPlayId.has(t);
                    });
                    let a = (0, tK.A)((0, tG.A)(t, 'playId'), tV);
                    return (0, tX.A)(a);
                }
                playsResourceSend(e) {
                    return (
                        this.setPlaysDataForSending(e),
                        this.gateway.sendPlays(e).finally(() => {
                            this.clearSendedPlaysData(e);
                        })
                    );
                }
                deletePlaysData(e, t, a) {
                    return this.isStorageEnabled()
                        ? this.store
                              .deleteAllByPlayId(e, t)
                              .then(() => {
                                  if (a) return a();
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                storeAndReplace(e) {
                    if (!this.isStorageEnabled()) return Promise.resolve();
                    let t = () => {
                        var t;
                        return null == (t = this.store) ? void 0 : t.storePlaysData(e);
                    };
                    return this.deletePlaysData([e], (e) => e.totalPlayedSeconds > 0, t);
                }
                isStorageEnabled() {
                    return !!this.toggles.enableLocalStoredPlaysData && this.store.isAvailable();
                }
                storePlay(e) {
                    return this.storeAndReplace(e);
                }
                sendCurrentEntityEndPlay() {
                    let e = this.playback.state.queueState.currentEntity.value;
                    if (e && this.playback.state.currentContext.value) {
                        if ((0, e9.i)(this.playback.state.currentContext.value)) return this.sendEndEntityPlay(e);
                        this.sendEndEntityPlay(e);
                    }
                    return Promise.resolve();
                }
                constructor(e) {
                    (0, Y._)(this, 'store', void 0),
                        (0, Y._)(this, 'gateway', void 0),
                        (0, Y._)(this, 'dynamicDataManager', void 0),
                        (0, Y._)(this, 'clock', void 0),
                        (0, Y._)(this, 'toggles', void 0),
                        (0, Y._)(this, 'hooks', void 0),
                        (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'isCrossfadeEnabled', void 0),
                        (0, Y._)(this, 'sentPlayIds', new Set()),
                        (0, Y._)(this, 'sentPartialPlayReportIds', new Set()),
                        (0, Y._)(this, 'sendingInProgressForPlayId', new Set()),
                        (0, Y._)(this, 'nextPeriodicSendTotalPlayedSeconds', 0),
                        (0, Y._)(this, 'isSendingPlays', void 0),
                        (0, Y._)(this, 'periodicSendIntervalSeconds', void 0),
                        (0, Y._)(this, 'playDataPipeline', void 0),
                        (this.store = e.store),
                        (this.gateway = e.gateway),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.clock = e.clock),
                        (this.toggles = e.toggles),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled),
                        (this.periodicSendIntervalSeconds = e.periodicSendIntervalSeconds),
                        (this.isSendingPlays = new eg.cJ(!1)),
                        (this.playDataPipeline = this.buildPlayDataPipeline());
                }
            }
            !(function (e) {
                (e.PREPARE = 'prepare'), (e.PLAY = 'play');
            })(p || (p = {}));
            class an {
                getDynamicDataByPlayId(e) {
                    var t, a, r;
                    let i = this.dynamicDataByPlayId.get(e);
                    return {
                        seek: null != (t = null == i ? void 0 : i.seek) && t,
                        pause: null != (a = null == i ? void 0 : i.pause) && a,
                        maxPlayerStage: null != (r = null == i ? void 0 : i.maxPlayerStage) ? r : p.PREPARE,
                        startTimestamp: null == i ? void 0 : i.startTimestamp,
                        radioSessionId: null == i ? void 0 : i.radioSessionId,
                        radioBatchId: null == i ? void 0 : i.radioBatchId,
                        contextItem: null == i ? void 0 : i.contextItem,
                        isFromAutoflow: null == i ? void 0 : i.isFromAutoflow,
                        isFromPumpkin: null == i ? void 0 : i.isFromPumpkin,
                        changeReason: null == i ? void 0 : i.changeReason,
                        hookSource: null == i ? void 0 : i.hookSource,
                        repeatMode: null == i ? void 0 : i.repeatMode,
                        entityChangeMethod: null == i ? void 0 : i.entityChangeMethod,
                        wasDislikedOnChange: null == i ? void 0 : i.wasDislikedOnChange,
                        wasAlreadyDisliked: null == i ? void 0 : i.wasAlreadyDisliked,
                        startedWithCrossfade: null == i ? void 0 : i.startedWithCrossfade,
                    };
                }
                updateDynamicData(e, t) {
                    var a;
                    let r = null != (a = this.dynamicDataByPlayId.get(e)) ? a : {};
                    this.dynamicDataByPlayId.set(e, { ...r, ...t });
                }
                clearDynamicData(e) {
                    this.dynamicDataByPlayId.delete(e);
                }
                hasDynamicData(e) {
                    return this.dynamicDataByPlayId.has(e);
                }
                markAsAlreadyDisliked(e) {
                    this.updateDynamicData(e, { wasAlreadyDisliked: !0 });
                }
                isAlreadyDisliked(e) {
                    var t;
                    return null != (t = this.getDynamicDataByPlayId(e).wasAlreadyDisliked) && t;
                }
                constructor() {
                    (0, Y._)(this, 'dynamicDataByPlayId', new Map());
                }
            }
            var ao = a(8055);
            function al(e, t) {
                if (!(0, e9.i)(null == e ? void 0 : e.context) || !e) return;
                let {
                        meta: { session: a, sessionTracks: r },
                        parentContext: i,
                    } = e.context.data,
                    s = null == a ? void 0 : a.radioSessionId,
                    n = eP(e.entity) || (0, ex.b)(e.entity) ? e.entity.data.batchId : void 0,
                    o = null != n ? n : r ? r.batchId : null == a ? void 0 : a.batchId,
                    l = t.getDynamicDataByPlayId(e.entity.playId).contextItem,
                    d = a ? a.wave.seeds.join() || a.wave.stationId : void 0,
                    u = r ? r.pumpkin : null == a ? void 0 : a.pumpkin;
                t.updateDynamicData(e.entity.playId, { radioSessionId: s, radioBatchId: o, contextItem: null != l ? l : d, isFromPumpkin: u, isFromAutoflow: !!i });
            }
            class ad {
                attachSubscriptions() {
                    this.attachPlayerStateEventSubscription(), this.attachProgressSubscriptions();
                }
                attachPlayerStateEventSubscription() {
                    this.playback.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = this.playback.state.queueState;
                        if (!e.value) return;
                        let t = e.value.entity.playId;
                        switch (this.playback.state.playerState.event.value) {
                            case q.Iu.PLAYING:
                                this.handlePlayingEvent(e.value, t);
                                break;
                            case q.Iu.PAUSED:
                                this.handlePausedEvent(e.value, t);
                                break;
                            case q.Iu.SET_PROGRESS:
                                this.handleSetProgressEvent(e.value, t);
                        }
                    });
                }
                handlePlayingEvent(e, t) {
                    al(e, this.dynamicDataManager), this.dynamicDataManager.updateDynamicData(t, { maxPlayerStage: p.PLAY });
                }
                handlePausedEvent(e, t) {
                    let a = this.playback.state.playerState.progress.value;
                    Math.abs(a.position - a.duration) > 0.2 && this.dynamicDataManager.updateDynamicData(t, { pause: !0 }),
                        tH(e.context) && this.service.sendPausePlayReport(e);
                }
                handleSetProgressEvent(e, t) {
                    (0, tC.S)(e.context) || tH(e.context) || this.dynamicDataManager.updateDynamicData(t, { seek: !0 });
                }
                attachProgressSubscriptions() {
                    this.toggles.enableLocalStoredPlaysData && this.attachStorePlayOnProgress(),
                        (this.toggles.enablePartialPlayReporting || this.toggles.enablePeriodicSendPlays) && this.attachPartialPlayReporting();
                }
                attachStorePlayOnProgress() {
                    let e = (0, ao.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            !e ||
                                (0, tC.S)(e.context) ||
                                this.service
                                    .createProgressPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position, 'store play on progress')
                                    .then((e) => {
                                        e && e.playId && e.totalPlayedSeconds > 0 && this.service.storePlay(e);
                                    });
                        },
                        this.storePlaysProgressIntervalMs,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                attachPartialPlayReporting() {
                    let e = (0, ao.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            e && this.service.sendPartialPlayReport(e);
                        },
                        2e3,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                constructor(e) {
                    (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'service', void 0),
                        (0, Y._)(this, 'dynamicDataManager', void 0),
                        (0, Y._)(this, 'toggles', void 0),
                        (0, Y._)(this, 'storePlaysProgressIntervalMs', void 0),
                        (this.playback = e.playback),
                        (this.service = e.service),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.toggles = e.toggles),
                        (this.storePlaysProgressIntervalMs = e.storePlaysProgressIntervalMs);
                }
            }
            class au extends ei.t {
                constructor(e, { code: t = 'E_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'MediaProviderException'), Object.setPrototypeOf(this, au.prototype);
                }
            }
            class ac extends au {
                constructor(e, { code: t = 'E_GET_FILE_INFO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'GetFileInfoMediaProviderException'), Object.setPrototypeOf(this, ac.prototype);
                }
            }
            class ah {
                sendPlays(e) {
                    return this.playsResource.sendPlays({ clientNow: tJ(), plays: e });
                }
                constructor(e) {
                    (0, Y._)(this, 'playsResource', void 0), (this.playsResource = e);
                }
            }
            class ag {
                storePlaysData(e) {
                    return Promise.resolve();
                }
                getStoredPlaysData(e) {
                    return Promise.resolve([]);
                }
                deleteAllByPlayId(e, t) {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger(e) {}
            }
            class am {
                apply(e) {
                    var t, a;
                    let { hooks: r, playback: i } = e,
                        s = this.params.store || new ag(),
                        n = new ah(new tM(this.params.httpClient, this.params.playsResourceConfig));
                    (this.dynamicDataManager = new an()),
                        (this.service = new as({
                            store: s,
                            gateway: n,
                            dynamicDataManager: this.dynamicDataManager,
                            clock: () => new Date(),
                            toggles: this.toggles,
                            hooks: r,
                            playback: i,
                            isCrossfadeEnabled: this.params.isCrossfadeEnabled,
                            periodicSendIntervalSeconds: null != (t = this.params.periodicSendIntervalSeconds) ? t : 30,
                        })),
                        (this.playerStateSubscriptions = new ad({
                            playback: i,
                            hooks: r,
                            service: this.service,
                            dynamicDataManager: this.dynamicDataManager,
                            toggles: this.toggles,
                            storePlaysProgressIntervalMs: null != (a = this.params.storePlaysProgressIntervalMs) ? a : 1e4,
                        })),
                        this.playerStateSubscriptions.attachSubscriptions();
                    let {
                        playback: o,
                        hooks: l,
                        service: d,
                        dynamicDataManager: u,
                        toggles: c,
                        clock: h,
                    } = { playback: i, hooks: r, service: this.service, dynamicDataManager: this.dynamicDataManager, toggles: this.toggles, clock: () => new Date() };
                    l.beforeEntityPlayingProcessStart.tapPromise('PlaysPlugin', () => {
                        c.enableRemoveDuplicatePlays && d.clearSentPlayIds();
                        let { queueState: e } = o.state,
                            t = e.currentEntity.value;
                        if ((al(t, u), t)) {
                            let e = aa(o),
                                a = t.entity.playId;
                            u.updateDynamicData(a, { startedWithCrossfade: e });
                        }
                        return d.sendStartEntityPlay(t), d.clearPeriodicSendInterval(), Promise.resolve();
                    }),
                        l.beforeMediaStartPlaying.tapPromise('PlaysPlugin', () => {
                            let { currentEntity: e } = o.state.queueState;
                            if (e.value) {
                                let t = e.value.entity.playId;
                                e.value.entity.isDisliked && u.markAsAlreadyDisliked(t),
                                    u.getDynamicDataByPlayId(t).startTimestamp || u.updateDynamicData(t, { startTimestamp: tJ(h()) });
                            }
                            return Promise.resolve();
                        }),
                        l.afterMediaEndPlaying.tapPromise('PlaysPlugin', () => {
                            let {
                                    order: { value: e },
                                    repeat: { value: t },
                                } = o.state.queueState,
                                a = o.state.queueState.currentEntity.value,
                                r = null == a ? void 0 : a.entity.playId,
                                i = t === q.pM.CONTEXT && 1 === e.length,
                                s = t === q.pM.ONE || i,
                                n = (null == a ? void 0 : a.entity.isDisliked) && r && !u.isAlreadyDisliked(r);
                            return (
                                s && a && r && !0 !== n && (u.updateDynamicData(r, { hookSource: m.AFTER_MEDIA_END_PLAYING, repeatMode: t }), d.sendEndEntityPlay(a)),
                                Promise.resolve()
                            );
                        }),
                        l.afterError.tapPromise('PlaysPlugin', (e) => {
                            if (e instanceof ac || e instanceof q.LI) {
                                let e = o.state.queueState.currentEntity.value;
                                d.sendEndEntityPlay(e);
                            }
                            return Promise.resolve();
                        }),
                        l.beforeContextSet.tapPromise('PlaysPlugin', () => {
                            let e = o.state.queueState.currentEntity.value;
                            return e && u.updateDynamicData(e.entity.playId, { hookSource: m.BEFORE_CONTEXT_SET }), d.sendCurrentEntityEndPlay();
                        }),
                        l.afterContextEnd.tapPromise('PlaysPlugin', (e) => {
                            let t = o.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId;
                            return (
                                t &&
                                    a &&
                                    (u.updateDynamicData(a, {
                                        hookSource: m.AFTER_CONTEXT_END,
                                        entityChangeMethod: e,
                                        wasDislikedOnChange: t.entity.isDisliked && !u.isAlreadyDisliked(a),
                                    }),
                                    d.sendEndEntityPlay(t)),
                                Promise.resolve()
                            );
                        }),
                        l.afterSetupQueue.tap('PlaysPlugin', () => {
                            let { queueState: e } = o.state;
                            al(e.currentEntity.value, u);
                        }),
                        l.beforeEntityChange.tapPromise('PlaysPlugin', (e) => {
                            var t;
                            let { currentEntity: a } = o.state.queueState,
                                { method: r } = e,
                                i = null == (t = a.value) ? void 0 : t.entity.playId;
                            return a.value && i
                                ? (u.updateDynamicData(i, {
                                      hookSource: m.BEFORE_ENTITY_CHANGE,
                                      entityChangeMethod: r,
                                      wasDislikedOnChange: a.value.entity.isDisliked && !u.isAlreadyDisliked(i),
                                  }),
                                  d.sendCurrentEntityEndPlay())
                                : Promise.resolve();
                        }),
                        l.beforeDestroy.tap(
                            'PlaysPlugin',
                            () =>
                                new Promise((e) => {
                                    if (!d.isSendingPlaysValue()) return void e();
                                    let t = d.onSendingPlaysStateChange((a) => {
                                        a || (t(), e());
                                    });
                                }),
                        ),
                        this.toggles.enableLocalStoredPlaysData &&
                            s.setErrorLogger((e) => {
                                r.afterError.promise(e);
                            }),
                        this.toggles.shouldDeletePlaysObjectStore && s.deleteDatabase(),
                        this.toggles.enableLocalStoredPlaysData &&
                            !this.toggles.shouldDeletePlaysObjectStore &&
                            s.openDatabase().then(() => {
                                var e;
                                null == (e = this.service) || e.sendStoredPlaysData();
                            });
                }
                constructor(e) {
                    var t, a, r, i, s, n, o, l, d, u, c, h, g, m, y, p;
                    (0, Y._)(this, 'service', void 0),
                        (0, Y._)(this, 'dynamicDataManager', void 0),
                        (0, Y._)(this, 'playerStateSubscriptions', void 0),
                        (0, Y._)(this, 'toggles', void 0),
                        (0, Y._)(this, 'params', void 0),
                        (this.params = e),
                        (this.toggles = {
                            disableSendPlaysOnTrackStart: null != (d = null == (t = e.variables) ? void 0 : t.disableSendPlaysOnTrackStart) && d,
                            enableLocalStoredPlaysData: null != (u = null == (a = e.variables) ? void 0 : a.enableLocalStoredPlaysData) && u,
                            limitOfSendingPlaysData: null != (c = null == (r = e.variables) ? void 0 : r.limitOfSendingPlaysData) ? c : 25,
                            shouldDeletePlaysObjectStore: null != (h = null == (i = e.variables) ? void 0 : i.shouldDeletePlaysObjectStore) && h,
                            enableRemoveDuplicatePlays: null != (g = null == (s = e.variables) ? void 0 : s.enableRemoveDuplicatePlays) && g,
                            enablePartialPlayReporting: null != (m = null == (n = e.variables) ? void 0 : n.enablePartialPlayReporting) && m,
                            enablePeriodicSendPlays: null != (y = null == (o = e.variables) ? void 0 : o.enablePeriodicSendPlays) && y,
                            enableSendFadeFieldsInPlays: null != (p = null == (l = e.variables) ? void 0 : l.enableSendFadeFieldsInPlays) && p,
                        });
                }
            }
            var ay = a(16839),
                ap = a(14600);
            let av = 'playsHeartBeats';
            class aS extends ei.t {
                constructor(e, { code: t = 'E_PLAYS_IDB_STORE', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'PlaysStoreException'), Object.setPrototypeOf(this, aS.prototype);
                }
            }
            class aE {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new ap.h(this.idbName).deleteDB({ onBlocked: ay.A }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storePlaysData(e) {
                    return this.executeTransaction((t) => t.put(av, e).then(() => t.count(av)))
                        .then((e) => ('number' == typeof e && e > this.storedPlaysLimit ? this.deleteOverLimitPlays(this.storedPlaysLimit) : Promise.resolve()))
                        .catch((e) => {
                            throw this.generateError('Saving Play Error', e);
                        });
                }
                getStoredPlaysData(e) {
                    return this.executeTransaction((t) => t.getAll(av, null, e), { defaultValue: [] }).catch((e) => {
                        throw this.generateError('Error getting Plays', e);
                    });
                }
                deleteAllByPlayId(e, t) {
                    return Promise.all(
                        e.map((e) => {
                            let { playId: a } = e;
                            return this.iterateByCursor('playId', a, 'readwrite', (e) => (!t || t(e.value) ? e.delete() : Promise.resolve()));
                        }),
                    )
                        .then(ay.A)
                        .catch((e) => {
                            throw this.generateError('Error deleting Plays', e);
                        });
                }
                deleteOverLimitPlays(e) {
                    return this.iterateByCursor(null, null, 'readwrite', (t, a) => (a <= e ? Promise.resolve() : t.delete())).catch((e) => {
                        throw this.generateError('Error deleting overlimit Plays', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = 0,
                        s = (e) =>
                            e
                                ? r(e, ++i)
                                      .then(() => e.continue())
                                      .then(s)
                                : Promise.resolve();
                    return this.getCursor(e, t, a).then(s);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                openIdb(e) {
                    return new ap.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, r) => {
                                var i;
                                this.logError('Connection has been blocked'), null == e || null == (i = e.onBlocked) || i.call(e, t, a, r);
                            },
                            onTerminated: () => {
                                var t;
                                this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(av, { keyPath: 'id', autoIncrement: !0 });
                                t.createIndex('playId', 'playId', { unique: !1 }), t.createIndex('trackId', 'trackId', { unique: !1 });
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            (this.idbIsAvailable = !1), this.logError('Open storage error', e);
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.executeTransaction(
                        (r) => {
                            let i = r.transaction([av], a).objectStore(av);
                            return e ? i.index(e).openCursor(t, 'prev') : i.openCursor(t, 'prev');
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, r);
                }
                generateError(e, t) {
                    var a;
                    let r = '[IndexedDB]['.concat(this.idbName, '.').concat(av, ']: ').concat(e),
                        i = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new aS(r, { data: { originalError: i, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                constructor(e = 100) {
                    (0, Y._)(this, 'storedPlaysLimit', void 0),
                        (0, Y._)(this, 'idb', void 0),
                        (0, Y._)(this, 'errorLogger', void 0),
                        (0, Y._)(this, 'idbIsAvailable', !1),
                        (0, Y._)(this, 'idbName', void 0),
                        (0, Y._)(this, 'storageEstimate', void 0),
                        (this.storedPlaysLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_plays', '_').concat('1.0.0'));
                }
            }
            function af(e) {
                return (null == e ? void 0 : e.data.type) === H.R.Generative;
            }
            !(function (e) {
                (e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.NEXT = 'nexttrack'), (e.PREV = 'previoustrack'), (e.SEEK = 'seekto'), (e.STOP = 'stop');
            })(v || (v = {}));
            let ab = [40, 50, 80, 100, 200, 300, 400],
                aP = [v.PLAY, v.PAUSE, v.STOP, v.SEEK];
            class a_ {
                isSupported() {
                    return 'mediaSession' in window.navigator && 'MediaMetadata' in window;
                }
                handleMediaActionEvents(e, t) {
                    let { action: a } = e;
                    switch (a) {
                        case v.PLAY:
                            t.resume();
                            break;
                        case v.PAUSE:
                        case v.STOP:
                            t.pause();
                            break;
                        case v.NEXT:
                            t.moveForward();
                            break;
                        case v.PREV:
                            t.moveBackward();
                            break;
                        case v.SEEK: {
                            var r;
                            if (af(null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.entity)) return;
                            let { seekTime: a } = e;
                            a && t.setProgress(a);
                        }
                    }
                }
                prepareMetadata(e) {
                    let t,
                        a,
                        r = { title: e.title };
                    if (('artists' in e && (r.artist = (e.artists || []).map((e) => e.name).join(', ')), 'albums' in e)) {
                        var i, s;
                        r.album = null == (s = e.albums) || null == (i = s[0]) ? void 0 : i.title;
                    }
                    return (
                        'coverUri' in e && (t = e.coverUri),
                        'imageUrl' in e && (t = e.imageUrl),
                        t &&
                            (a = ab.map((e) => {
                                let a = ''.concat(e, 'x').concat(e);
                                'Safari' === this.browserName && (a = ''.concat(2 * e, 'x').concat(2 * e));
                                let r = '';
                                return (
                                    'string' == typeof t && (r = t.startsWith('blob:') ? t : 'https://'.concat(t.replace('%%', a))),
                                    { sizes: a, src: r, type: 'image/jpg' }
                                );
                            })),
                        (r.artwork = a),
                        r
                    );
                }
                updateMetadata(e) {
                    if (!e) {
                        window.navigator.mediaSession.metadata = null;
                        return;
                    }
                    let t = this.prepareMetadata(e);
                    return (window.navigator.mediaSession.metadata = null), (window.navigator.mediaSession.metadata = new MediaMetadata(t)), t;
                }
                subscribeToCrossfadeEnd(e) {
                    var t;
                    let a = null == (t = e.state.mediaPlayersStore.value) ? void 0 : t[$.e.AUDIO];
                    a &&
                        (0, q.uo)(a) &&
                        a.isCrossing.onChange(
                            (t) => {
                                !1 === t && (this.updateCurrentEntityMetadata(e), this.updatePositionState(e));
                            },
                            { skipFirstChange: !0 },
                        );
                }
                updateMediaSessionPlaybackState(e) {
                    if (e === q.MT.PAUSED || e === q.MT.STOPPED || e === q.MT.ENDED || e === q.MT.IDLE) {
                        window.navigator.mediaSession.playbackState = 'paused';
                        return;
                    }
                    (e === q.MT.PLAYING || e === q.MT.BUFFERING || e === q.MT.LOADING_MEDIA_SOURCE) && (window.navigator.mediaSession.playbackState = 'playing');
                }
                updateCurrentEntityMetadata(e) {
                    var t;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    this.updateMetadata(a);
                }
                updatePositionState(e) {
                    var t, a, r;
                    if (af(null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity)) return void navigator.mediaSession.setPositionState();
                    let i = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta,
                        s = e.state.playerState.progress.value,
                        n = 'number' == typeof (null == s ? void 0 : s.duration) && Number.isFinite(s.duration) ? s.duration : null,
                        o = i && 'durationMs' in i && 'number' == typeof i.durationMs && Number.isFinite(i.durationMs) ? i.durationMs / 1e3 : null,
                        l = null != (r = null != n ? n : o) ? r : 0,
                        d = 'number' == typeof (null == s ? void 0 : s.position) && Number.isFinite(s.position) ? s.position : 0;
                    l > 0 && navigator.mediaSession.setPositionState({ duration: l, position: Math.min(d, l) });
                }
                handlePlayerEvents(e) {
                    let t, a;
                    e.state.currentMediaPlayer?.onChange((currentPlayer) => {
                        currentPlayer?.isCrossing.onChange((isCrossing) => {
                            if (!isCrossing) {
                                this.updateMetadata();
                                this.updateMetadata(e.state.queueState.currentEntity.value?.entity.data.meta);
                            }
                        });
                    });
                    e.state.queueState.currentEntity.onChange(() => {
                        this.updateCurrentEntityMetadata(e), this.updatePositionState(e);
                    }),
                        e.state.playerState.status.onChange((e) => {
                            this.updateMediaSessionPlaybackState(e);
                        }),
                        this.subscribeToCrossfadeEnd(e),
                        e.state.playerState.event.onChange(() => {
                            e.state.playerState.event.value === q.Iu.UPDATING_PROGRESS &&
                                !e.state.currentMediaPlayer?.value.isCrossing?.value &&
                                (this.updateCurrentEntityMetadata(e),
                                this.updatePositionState(e),
                                aP.forEach((t) => {
                                    try {
                                        window.navigator.mediaSession.setActionHandler(t, (t) => this.handleMediaActionEvents(t, e));
                                    } catch (e) {
                                        console.log('The media session action "'.concat(t, '" is not supported yet.'));
                                    }
                                }));
                        }),
                        e.state.currentContext.onChange(() => {
                            var r, i;
                            null == t || t(),
                                null == a || a(),
                                (t =
                                    null == (r = e.state.currentContext.value)
                                        ? void 0
                                        : r.availableActions.moveBackward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveBackward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(v.PREV, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          })),
                                (a =
                                    null == (i = e.state.currentContext.value)
                                        ? void 0
                                        : i.availableActions.moveForward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveForward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(v.NEXT, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          }));
                        });
                }
                apply(e) {
                    let { playback: t } = e;
                    this.isSupported() && this.handlePlayerEvents(t);
                }
                constructor({ browserName: e, browserVersion: t }) {
                    (0, Y._)(this, 'browserName', void 0), (0, Y._)(this, 'browserVersion', void 0), (this.browserName = e), (this.browserVersion = t);
                }
            }
            class aI {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterError.tapPromise('LoggerPlugin', (e) => {
                        let t,
                            r = a.state.queueState.currentEntity.value ? a.state.queueState.currentEntity.value.entity.mediaSourceData : null;
                        (t = e instanceof ei.t ? e : new ei.t('Error in Sonata player', { code: 'E_SONATA', cause: e })).name = '[Sonata] '.concat(t.name);
                        let i = t.cause ? (0, W.createObjectFromError)(t.cause) : void 0;
                        return this.logger.error(t, { ...t.data, ...(r || {}), code: t.code, cause: i, stack: t.stack, message: t.message }), Promise.resolve();
                    });
                }
                constructor(e) {
                    (0, Y._)(this, 'logger', void 0);
                    let { logger: t } = e;
                    this.logger = t;
                }
            }
            (S || (S = {})).QUALITY_CHANGE = 'QUALITY_CHANGE';
            class aC {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.quality.onChange(() => {
                        t.state.playerState.status.value !== q.MT.IDLE &&
                            t.reloadEntity(S.QUALITY_CHANGE).catch((e) => {
                                a.afterError.promise(e);
                            });
                    });
                }
                constructor(e) {
                    (0, Y._)(this, 'quality', void 0), (this.quality = e);
                }
            }
            var ak = a(51770);
            let aT = (e) => 'object' == typeof e && e && 'rememberPosition' in e && 'boolean' == typeof e.rememberPosition;
            class aA {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.beforeEntityChange.tapPromise('ContinuePlayingPlugin', () => {
                        let { position: e, duration: t } = this.getTimingsFromPlayback(a);
                        return new Promise((r) => {
                            e !== t && this.checkBeforeProgressSync(a), r();
                        });
                    }),
                        a.state.playerState.status.onChange((e) => {
                            (e === q.MT.PAUSED || e === q.MT.STOPPED) && (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                                e === q.MT.PLAYING && this.shouldSendProgressSync(a) && this.setTimeout(a);
                        }),
                        a.state.playerState.event.onChange(() => {
                            if (a.state.playerState.event.value === q.Iu.SET_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value,
                                    t = a.state.playerState.progress.value.position;
                                if (!e) return;
                                let { entity: r } = e;
                                aT(r.data.meta) && r.data.meta.rememberPosition && (e.lastSeekPosition = t);
                            }
                        }),
                        a.state.queueState.currentEntity.onChange(() => {
                            let e = a.state.queueState.currentEntity.value;
                            if (!e) return;
                            let { entity: t } = e;
                            if (aT(t.data.meta) && t.data.meta.rememberPosition && Z(t.data.meta)) {
                                let { endPositionSec: a } = t.data.meta.streamProgress;
                                t.everFinished ? (e.positionSec = a) : (e.positionSec = void 0 !== e.lastSeekPosition ? e.lastSeekPosition : a);
                            }
                        });
                }
                checkBeforeProgressSync(e) {
                    var t;
                    if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
                    let { position: a, duration: r } = this.getTimingsFromPlayback(e),
                        i = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta.id;
                    Number.isFinite(r) &&
                        Number.isFinite(a) &&
                        r &&
                        a &&
                        i &&
                        (this.sendProgressSync({ duration: r, position: a, trackId: i }), e.state.playerState.status.value === q.MT.PLAYING && this.setTimeout(e));
                }
                sendProgressSync(e) {
                    let t = new Date().toISOString(),
                        { duration: a, position: r, trackId: i } = e;
                    this.streamsResource.progressSync({
                        lastSyncTimestamp: t,
                        trackStreams: [{ trackId: i, positionSec: r, trackLengthSec: a, finished: r === a, timestamp: t }],
                    });
                }
                shouldSendProgressSync(e) {
                    var t;
                    if (!this.variables.isEnabled) return !1;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    return !!(a && 'rememberPosition' in a && a.rememberPosition);
                }
                setTimeout(e) {
                    this.clearTimeout(),
                        (this.timeoutId = window.setTimeout(() => {
                            this.checkBeforeProgressSync(e);
                        }, 3e4));
                }
                clearTimeout() {
                    window.clearTimeout(this.timeoutId);
                }
                getTimingsFromPlayback(e) {
                    return { duration: Math.floor(e.state.playerState.progress.value.duration), position: Math.floor(e.state.playerState.progress.value.position) };
                }
                constructor(e) {
                    (0, Y._)(this, 'streamsResource', void 0), (0, Y._)(this, 'variables', void 0), (0, Y._)(this, 'timeoutId', 0);
                    let { httpClient: t, streamsResourceConfig: a, variables: r } = e;
                    (this.streamsResource = new ak.c(t, a)), (this.variables = r);
                }
            }
            function aD(e) {
                if (e instanceof Error) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return aD(e.cause);
                }
                if ('object' == typeof e && null !== e) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return aD(e.cause);
                }
            }
            let aN = [401, 429],
                aR = new Set([ec.K.Generative]);
            class ax {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterErrorProcessed.tapPromise('ErrorAutoSkipPlugin', (e) => {
                        var r;
                        if (!this.variables.enabled || this.isSkipping) return Promise.resolve();
                        let i = null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.context.data.type;
                        return (i && aR.has(i)) ||
                            !(function (e) {
                                if (!(e instanceof ac)) return !1;
                                let t = aD(e);
                                return void 0 !== t && t >= 400 && t < 500 && !aN.includes(t);
                            })(e) ||
                            this.consecutiveSkipCount >= this.consecutiveSkipLimit
                            ? Promise.resolve()
                            : ((this.consecutiveSkipCount += 1),
                              (this.isSkipping = !0),
                              t
                                  .moveForward(q.So.ERROR_MOVE_FORWARD)
                                  .catch((e) => a.afterError.promise(e).catch(() => void 0))
                                  .finally(() => {
                                      this.isSkipping = !1;
                                  }));
                    }),
                        a.afterMediaStartPlaying.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        }),
                        a.afterContextSet.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        });
                }
                constructor({ variables: e, consecutiveSkipLimit: t }) {
                    (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'consecutiveSkipLimit', void 0),
                        (0, Y._)(this, 'consecutiveSkipCount', 0),
                        (0, Y._)(this, 'isSkipping', !1),
                        (this.variables = e),
                        (this.consecutiveSkipLimit = null != t ? t : 10);
                }
            }
            var aL = a(94299),
                aw = a(65808);
            let aO = { [aw.N.AACMP4]: 'mp4a.40.2', [aw.N.HEAACMP4]: 'mp4a.40.5', [aw.N.FLACMP4]: 'flac' };
            class aM {
                get src() {
                    var e, t;
                    if ('error' in this.data) throw new ei.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (!this.data.urls[0]) throw new ei.t('No urls in DownloadInfoSource');
                    let a = this.getQueryParamsString();
                    return a
                        ? ''
                              .concat(this.data.urls[0])
                              .concat(a, '#t=')
                              .concat(null != (e = this.positionSec) ? e : 0)
                        : ''.concat(this.data.urls[0], '#t=').concat(null != (t = this.positionSec) ? t : 0);
                }
                get mirrorUrls() {
                    if ('error' in this.data) throw new ei.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = this.getQueryParamsString(),
                        t = this.data.urls.slice(1);
                    return e ? t.map((t) => ''.concat(t).concat(e)) : t;
                }
                get key() {
                    if ('error' in this.data) throw new ei.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (this.data.transport === aL.o.ENCRAW) return this.data.key;
                }
                get canBePreloaded() {
                    if ('error' in this.data) throw new ei.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    return [aw.N.FLACMP4, aw.N.AACMP4, aw.N.HEAACMP4].includes(this.data.codec);
                }
                getQueryParamsString() {
                    if ('error' in this.data) throw new ei.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = aO[this.data.codec],
                        t = e ? 'mp4' : void 0,
                        a = void 0 === this.sourceIndex ? void 0 : String(this.sourceIndex),
                        r = new URLSearchParams();
                    t && r.append('container', t), e && r.append('codec', e), this.vsid && r.append('vsid', this.vsid), a && r.append('source_index', a);
                    let i = r.toString();
                    return i ? '?'.concat(i) : void 0;
                }
                constructor(e) {
                    (0, Y._)(this, 'type', 'downloadInfoSource'),
                        (0, Y._)(this, 'data', void 0),
                        (0, Y._)(this, 'vsid', void 0),
                        (0, Y._)(this, 'sourceIndex', void 0),
                        (0, Y._)(this, 'loadingTime', void 0),
                        (0, Y._)(this, 'getFileInfoResponseTime', void 0),
                        (0, Y._)(this, 'url', void 0),
                        (0, Y._)(this, 'positionSec', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.loadingTime = e.loadingTime),
                        (this.getFileInfoResponseTime = e.getFileInfoResponseTime),
                        (this.url = e.url),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            !(function (e) {
                (e.TRACK = 'track'), (e.STREAM = 'stream');
            })(E || (E = {}));
            var aF = a(51607),
                aG = a(76232);
            function aK(e) {
                switch (e) {
                    case aF.e.LOSSLESS:
                    case aG.e.HIGH_QUALITY:
                        return f.LOSSLESS;
                    case aF.e.NQ:
                    case aG.e.BALANCED:
                        return f.NQ;
                    case aF.e.LQ:
                    case aG.e.EFFICIENT:
                        return f.LQ;
                    case aF.e.PREVIEW:
                    case aG.e.PREVIEW:
                        return f.PREVIEW;
                    case aF.e.SMART_PREVIEW:
                        return f.SMART_PREVIEW;
                    default:
                        return;
                }
            }
            function aU(e, t, a) {
                a &&
                    (e
                        ? (console.group(''.concat(null != t ? t : 'Untitled Log Metrics Event Info')),
                          console.table(e.data),
                          console.group('Raw event'),
                          console.dir(e),
                          console.groupEnd(),
                          console.groupEnd())
                        : console.error('Event in logEvent method not provided'));
            }
            function aj(e, t, a) {
                t.forEach((t) => {
                    Promise.resolve()
                        .then(() => {
                            let a = t.send(e);
                            return a instanceof Promise ? a : Promise.resolve();
                        })
                        .catch((e) => {
                            null == a || a(new ei.t('Failed to send metrics', { code: 'E_METRICS_SEND', cause: (0, W.createObjectFromError)(e) }));
                        });
                });
            }
            !(function (e) {
                (e.LOSSLESS = 'Lossless'), (e.NQ = 'NQ'), (e.LQ = 'LQ'), (e.PREVIEW = 'Preview'), (e.SMART_PREVIEW = 'SmartPreview');
            })(f || (f = {}));
            class aX {
                buildWantPlayCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e, expectedQuality: this.mediaConfigController ? aK(this.mediaConfigController.quality.value) : void 0 };
                }
                buildPlayingCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e };
                }
                setOnSendError(e) {
                    this.onSendError = e;
                }
                handleWantPlay(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        { event: a, payload: r } = this.builder.buildWantPlayEvent(e, this.buildWantPlayCtx(t));
                    return this.wantPlayEvents.size > 0 && this.handlePlayingMissed(), this.wantPlayEvents.set(e.entity.playId, r), this.logEvent(a), this.send(a), a;
                }
                handlePlayingMissed() {
                    let e = Array.from(this.wantPlayEvents.entries())[0];
                    if (!e) return null;
                    let [t, a] = e,
                        r = this.builder.buildPlayingMissedEvent(t, a);
                    return this.wantPlayEvents.delete(t), this.send(r), this.logEvent(r), r;
                }
                handlePlaying(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.trunc(performance.now()),
                        r = this.wantPlayEvents.get(e.entity.playId),
                        i = r ? this.builder.buildPlayingEvent(e, r, t, this.buildPlayingCtx(a)) : null;
                    return i && (this.wantPlayEvents.delete(e.entity.playId), this.send(i)), this.logEvent(i), i;
                }
                handleBuffering(e) {
                    let t = this.builder.buildBufferingEvent(e);
                    return t ? (this.send(t), this.logEvent(t), t) : null;
                }
                handleError(e, t) {
                    let a = this.builder.buildErrorEvent(e, t);
                    return this.maybeCleanupWantPlayOnError(e, t, a), a && this.send(a), this.logEvent(a), a;
                }
                hasWantPlay(e) {
                    return this.wantPlayEvents.has(e);
                }
                maybeCleanupWantPlayOnError(e, t, a) {
                    if (!(e instanceof q.LI) || !this.wantPlayEvents.has(t.entity.playId)) return;
                    let r = null == a ? void 0 : a.data;
                    20 !== (r && 'causeCode' in r ? r.causeCode : void 0) && this.wantPlayEvents.delete(t.entity.playId);
                }
                send(e) {
                    aj(e, this.transports, this.onSendError);
                }
                logEvent(e) {
                    aU(e, null == e ? void 0 : e.name, this.enableDebugMode);
                }
                constructor(e) {
                    (0, Y._)(this, 'builder', void 0),
                        (0, Y._)(this, 'transports', void 0),
                        (0, Y._)(this, 'mediaConfigController', void 0),
                        (0, Y._)(this, 'enableDebugMode', void 0),
                        (0, Y._)(this, 'onSendError', void 0),
                        (0, Y._)(this, 'wantPlayEvents', new Map()),
                        (this.builder = e.builder),
                        (this.transports = e.transports),
                        (this.mediaConfigController = e.mediaConfigController),
                        (this.enableDebugMode = e.enableDebugMode);
                }
            }
            function aB(e) {
                let t, a, r;
                return (
                    !e.mediaSourceData ||
                        'error' in e.mediaSourceData.data ||
                        'downloadInfoSource' !== e.mediaSourceData.type ||
                        ((t = e.mediaSourceData.data.codec), (a = e.mediaSourceData.data.bitrate)),
                    e.expectedQuality && (r = aK(e.expectedQuality)),
                    { codec: t, bitrate: a, expectedQuality: r }
                );
            }
            !(function (e) {
                (e.GET_FILE_INFO = 'GetFileInfo'), (e.SOURCE = 'Source');
            })(b || (b = {})),
                !(function (e) {
                    (e.E_GET_MEDIA_SRC = 'E_GET_MEDIA_SRC'), (e.E_CREATE_SIGN = 'E_CREATE_SIGN'), (e.E_UNSUITABLE_ENTITY_TYPE = 'E_UNSUITABLE_ENTITY_TYPE');
                })(P || (P = {})),
                (function (e) {
                    (e.NETWORK = 'NETWORK'), (e.OTHER = 'OTHER');
                })(_ || (_ = {})),
                (function (e) {
                    (e.RESPONSE_CODE = 'ResponseCode'), (e.OTHER = 'OTHER');
                })(I || (I = {}));
            let aV = new Set(Object.values(P));
            function aW(e) {
                return e instanceof au || ('object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code && aV.has(e.code));
            }
            !(function (e) {
                (e.TRACK = 'track'), (e.SET = 'set'), (e.TRAILER = 'trailer'), (e.NON_MUSIC = 'non_music');
            })(C || (C = {}));
            let aY = (e) => {
                let { entity: t } = e;
                return e.getFadeMode() === q.OQ.MIX ? C.SET : (0, te.l)(t) ? C.TRAILER : tN(t) || af(t) ? C.NON_MUSIC : C.TRACK;
            };
            class aq {
                buildWantPlayEvent(e, t) {
                    let { entity: a } = e,
                        r = this.profile.getIdentity(a),
                        i = aY(e);
                    return {
                        event: { name: this.profile.eventNames.wantPlay, data: { ...r, uuid: a.playId, expectedQuality: t.expectedQuality, contentType: i } },
                        payload: { ...r, time: t.now, contentType: i },
                    };
                }
                buildPlayingEvent(e, t, a, r) {
                    var i, s, n;
                    let { entity: o } = e,
                        l = this.profile.getIdentity(o),
                        { codec: d, bitrate: u, expectedQuality: c } = aB(o),
                        h = aY(e);
                    return {
                        name: this.profile.eventNames.isPlaying,
                        data: {
                            ...l,
                            time: r.now - t.time,
                            uuid: o.playId,
                            codec: d,
                            bitrate: u,
                            expectedQuality: c,
                            extraTrackType: this.profile.getExtraTrackType(a),
                            ...(null != (n = null == (i = (s = this.profile).buildExtraPlayingData) ? void 0 : i.call(s, a)) ? n : {}),
                            contentType: h,
                        },
                    };
                }
                buildPlayingMissedEvent(e, t) {
                    let { time: a, ...r } = t;
                    return { name: this.profile.eventNames.isPlayingMissed, data: { ...r, uuid: e } };
                }
                buildBufferingEvent(e) {
                    let { entity: t } = e;
                    if (0 === t.totalPlayedSeconds) return null;
                    let a = this.profile.getIdentity(t),
                        { codec: r, bitrate: i } = aB(t),
                        s = aY(e);
                    return { name: this.profile.eventNames.isBuffering, data: { ...a, uuid: t.playId, codec: r, bitrate: i, contentType: s } };
                }
                buildErrorEvent(e, t) {
                    var a, r, i;
                    let { entity: s } = t,
                        n = this.profile.getIdentity(s),
                        o = aB(s),
                        l = aY(t),
                        d = (function (e) {
                            let t = (function e(t) {
                                    return aW(t)
                                        ? t.code
                                        : (t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                            ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)
                                          ? e(t.cause)
                                          : void 0;
                                })(e),
                                a = aD(e),
                                r = t === P.E_GET_MEDIA_SRC || 'number' == typeof a,
                                i = r ? _.NETWORK : _.OTHER,
                                s = r && 'number' == typeof a ? I.RESPONSE_CODE : I.OTHER,
                                n = 'object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code ? e.code : 'E_UNKNOWN',
                                o = r && 'number' == typeof a ? String(a) : n;
                            return { type: i, subType: s, responseCode: a, code: o };
                        })(e);
                    return e instanceof au
                        ? {
                              name: this.profile.eventNames.errorPrepare,
                              data: {
                                  ...n,
                                  uuid: s.playId,
                                  type: d.type,
                                  subType: d.subType,
                                  name: e.name,
                                  code: d.code,
                                  bitrate: o.bitrate,
                                  codec: o.codec,
                                  expectedQuality: o.expectedQuality,
                                  contentType: l,
                                  place: b.GET_FILE_INFO,
                              },
                          }
                        : e instanceof q.LI && e.code === q.QC.PLAY
                          ? {
                                name: this.profile.eventNames.errorInitialBuffering,
                                data: {
                                    ...n,
                                    uuid: s.playId,
                                    type: d.type,
                                    subType: d.subType,
                                    name: e.name,
                                    code: d.code,
                                    bitrate: o.bitrate,
                                    codec: o.codec,
                                    expectedQuality: o.expectedQuality,
                                    contentType: l,
                                    place: b.SOURCE,
                                    ...(e.cause instanceof DOMException
                                        ? { causeCode: e.cause.code, causeMessage: e.cause.message, causeName: e.cause.name }
                                        : { causeCode: -1, causeMessage: 'Unknown error message', causeName: 'Unknown error name' }),
                                },
                            }
                          : e instanceof q.LI && e.code === q.QC.MEDIA_ELEMENT_ERROR
                            ? {
                                  name: this.profile.eventNames.errorPlaying,
                                  data: {
                                      ...n,
                                      uuid: s.playId,
                                      type: d.type,
                                      subType: d.subType,
                                      name: e.name,
                                      code: d.code,
                                      bitrate: o.bitrate,
                                      codec: o.codec,
                                      expectedQuality: o.expectedQuality,
                                      contentType: l,
                                      place: b.SOURCE,
                                      ...(e.cause instanceof MediaError
                                          ? { causeCode: e.cause.code, causeMessage: e.cause.message }
                                          : { causeCode: -1, causeMessage: 'Unknown cause' }),
                                  },
                              }
                            : null !=
                                (i =
                                    null == (a = (r = this.profile).buildExtraErrorEvent)
                                        ? void 0
                                        : a.call(r, { error: e, pair: t, identity: n, quality: o, contentType: l, errorTypeInfo: d }))
                              ? i
                              : null;
                }
                constructor(e) {
                    (0, Y._)(this, 'profile', void 0), (this.profile = e);
                }
            }
            !(function (e) {
                (e.SKIPPED = 'SKIPPED'), (e.NEXT = 'NEXT'), (e.FROM_QUEUE = 'FROM_QUEUE'), (e.OTHER = 'OTHER');
            })(k || (k = {})),
                (function (e) {
                    (e.WANT_PLAY_TRACK = 'WANT_PLAY_TRACK'),
                        (e.TRACK_IS_BUFFERING = 'TRACK_IS_BUFFERING'),
                        (e.TRACK_IS_PLAYING = 'TRACK_IS_PLAYING'),
                        (e.TRACK_IS_PLAYING_MISSED = 'TRACK_IS_PLAYING_MISSED'),
                        (e.TRACK_ERROR_PREPARE = 'TRACK_ERROR_PREPARE'),
                        (e.TRACK_ERROR_INITIAL_BUFFERING = 'TRACK_ERROR_INITIAL_BUFFERING'),
                        (e.TRACK_ERROR_PLAYING = 'TRACK_ERROR_PLAYING'),
                        (e.REQUEST_TIME = 'REQUEST_TIME'),
                        (e.TRACK_ERROR_PRE_FETCH = 'TRACK_ERROR_PRE_FETCH'),
                        (e.WANT_PLAY_STREAM = 'WANT_PLAY_STREAM'),
                        (e.STREAM_IS_PLAYING = 'STREAM_IS_PLAYING'),
                        (e.STREAM_IS_PLAYING_MISSED = 'STREAM_IS_PLAYING_MISSED'),
                        (e.STREAM_ERROR_PLAYING = 'STREAM_ERROR_PLAYING'),
                        (e.STREAM_ERROR_INITIAL_BUFFERING = 'STREAM_ERROR_INITIAL_BUFFERING'),
                        (e.STREAM_ERROR_PREPARE = 'STREAM_ERROR_PREPARE'),
                        (e.STREAM_IS_BUFFERING = 'STREAM_IS_BUFFERING');
                })(T || (T = {}));
            let az = {
                eventNames: {
                    wantPlay: T.WANT_PLAY_STREAM,
                    isPlaying: T.STREAM_IS_PLAYING,
                    isPlayingMissed: T.STREAM_IS_PLAYING_MISSED,
                    isBuffering: T.STREAM_IS_BUFFERING,
                    errorPrepare: T.STREAM_ERROR_PREPARE,
                    errorInitialBuffering: T.STREAM_ERROR_INITIAL_BUFFERING,
                    errorPlaying: T.STREAM_ERROR_PLAYING,
                },
                getIdentity: (e) => ({ radioStreamSlug: String(e.data.meta.id) }),
                getExtraTrackType: () => k.OTHER,
            };
            class aH {
                setHooks(e) {
                    this.runner.setOnSendError((t) => e.afterError.promise(t));
                }
                onWantPlay(e) {
                    return this.runner.handleWantPlay(e);
                }
                onError(e, t) {
                    return this.runner.handleError(e, t);
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onPlaying(e) {
                    return this.runner.handlePlaying(e);
                }
                onEntityChange() {}
                onBeforeMediaStartPlaying() {}
                constructor(e) {
                    var t;
                    (0, Y._)(this, 'runner', void 0),
                        (this.runner = new aX({
                            builder: new aq(az),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        }));
                }
            }
            (A || (A = {})).GET_FILE_INFO = 'get_file_info';
            let aQ = {
                eventNames: {
                    wantPlay: T.WANT_PLAY_TRACK,
                    isPlaying: T.TRACK_IS_PLAYING,
                    isPlayingMissed: T.TRACK_IS_PLAYING_MISSED,
                    isBuffering: T.TRACK_IS_BUFFERING,
                    errorPrepare: T.TRACK_ERROR_PREPARE,
                    errorInitialBuffering: T.TRACK_ERROR_INITIAL_BUFFERING,
                    errorPlaying: T.TRACK_ERROR_PLAYING,
                },
                getIdentity: (e) => ({ trackId: String(e.data.meta.id) }),
                getExtraTrackType: (e) => e.extraTrackType,
                buildExtraPlayingData: (e) => {
                    let t = {};
                    return (
                        'number' == typeof e.trackUrlReceivedTime && (t.trackUrlReceivedTime = e.trackUrlReceivedTime),
                        'number' == typeof e.firstDataReceivedTime && (t.firstDataReceivedTime = e.firstDataReceivedTime),
                        'number' == typeof e.initialDataEnqueuedTime && (t.initialDataEnqueuedTime = e.initialDataEnqueuedTime),
                        t
                    );
                },
                buildExtraErrorEvent: (e) => {
                    let { error: t, pair: a, identity: r, quality: i, contentType: s, errorTypeInfo: n } = e;
                    return t instanceof q.LI && t.code === q.QC.PRE_FETCH
                        ? {
                              name: T.TRACK_ERROR_PRE_FETCH,
                              data: {
                                  ...r,
                                  uuid: a.entity.playId,
                                  type: n.type,
                                  subType: n.subType,
                                  name: t.name,
                                  code: n.code,
                                  bitrate: i.bitrate,
                                  codec: i.codec,
                                  expectedQuality: i.expectedQuality,
                                  contentType: s,
                                  place: !(function e(t) {
                                      return (
                                          !!aW(t) ||
                                          (((t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                              ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)) &&
                                              e(t.cause))
                                      );
                                  })(t.cause)
                                      ? b.SOURCE
                                      : b.GET_FILE_INFO,
                              },
                          }
                        : null;
                },
            };
            class a$ {
                setHooks(e) {
                    let t = (t) => {
                        e.afterError.promise(t);
                    };
                    (this.onSendError = t), this.runner.setOnSendError(t);
                }
                onBeforeMediaStartPlaying(e) {
                    var t, a;
                    if (!(e.mediaSourceData instanceof aM)) return null;
                    let r = String(e.data.meta.id),
                        i = null == (t = e.mediaSourceData) ? void 0 : t.getFileInfoResponseTime,
                        s = null == (a = e.mediaSourceData) ? void 0 : a.url,
                        n = null;
                    if ('number' == typeof i) {
                        let t = this.startupStageInfoByPlayId.get(e.playId);
                        this.startupStageInfoByPlayId.set(e.playId, { ...t, trackUrlReceivedTime: i });
                    }
                    return (
                        'number' == typeof i && s && (n = { name: T.REQUEST_TIME, data: { trackId: r, urlType: A.GET_FILE_INFO, url: s, time: i } }),
                        aU(n, null == n ? void 0 : n.name, this.enableDebugMode),
                        n && aj(n, this.transports, this.onSendError),
                        n
                    );
                }
                onWantPlay(e) {
                    let t = Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.entity.playId);
                    return (
                        this.startupStageInfoByPlayId.clear(),
                        this.startupStageInfoByPlayId.set(e.entity.playId, { ...a, wantPlayStartedAt: t }),
                        this.runner.handleWantPlay(e, t)
                    );
                }
                onError(e, t) {
                    let a = this.runner.hasWantPlay(t.entity.playId),
                        r = this.runner.handleError(e, t);
                    return a && !this.runner.hasWantPlay(t.entity.playId) && this.startupStageInfoByPlayId.delete(t.entity.playId), r;
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onPlaying(e) {
                    var t;
                    let a = Math.trunc(performance.now()),
                        r = (function (e) {
                            switch (e) {
                                case q.So.SET_INDEX:
                                case q.So.MOVE_BACKWARD:
                                    return k.FROM_QUEUE;
                                case q.So.AUTO_MOVE_FORWARD:
                                    return k.NEXT;
                                case q.So.ERROR_MOVE_FORWARD:
                                case q.So.MOVE_FORWARD:
                                    return k.SKIPPED;
                                default:
                                    return k.OTHER;
                            }
                        })(null == (t = this.addtionalInfoByPlayId.get(this.lastAdditionalInfoKey)) ? void 0 : t.entityChangeMethod),
                        i = this.runner.handlePlaying(e, this.buildTrackPlayingContext(e.entity.playId, r, a), a);
                    return (
                        i &&
                            (this.addtionalInfoByPlayId.delete(this.lastAdditionalInfoKey),
                            this.startupStageInfoByPlayId.delete(e.entity.playId),
                            (this.lastAdditionalInfoKey = null)),
                        i
                    );
                }
                onEntityChange(e, t) {
                    let { method: a } = t;
                    this.addtionalInfoByPlayId.size && this.addtionalInfoByPlayId.clear(),
                        (this.lastAdditionalInfoKey = e.playId),
                        this.addtionalInfoByPlayId.set(e.playId, { entityChangeMethod: a });
                }
                onFirstDataReceived(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.playId);
                    (null != a && a.firstDataReceivedAt) || this.startupStageInfoByPlayId.set(e.playId, { ...a, firstDataReceivedAt: t });
                }
                buildTrackPlayingContext(e, t, a) {
                    let r = this.startupStageInfoByPlayId.get(e),
                        i = { extraTrackType: t, trackUrlReceivedTime: null == r ? void 0 : r.trackUrlReceivedTime };
                    if ('number' != typeof (null == r ? void 0 : r.wantPlayStartedAt) || 'number' != typeof r.firstDataReceivedAt) return i;
                    if ('number' == typeof r.trackUrlReceivedTime) {
                        let e = r.firstDataReceivedAt - r.wantPlayStartedAt - r.trackUrlReceivedTime;
                        e >= 0 && (i.firstDataReceivedTime = e);
                    }
                    let s = a - r.firstDataReceivedAt;
                    return s >= 0 && (i.initialDataEnqueuedTime = s), i;
                }
                constructor(e) {
                    var t, a;
                    (0, Y._)(this, 'runner', void 0),
                        (0, Y._)(this, 'addtionalInfoByPlayId', new Map()),
                        (0, Y._)(this, 'startupStageInfoByPlayId', new Map()),
                        (0, Y._)(this, 'lastAdditionalInfoKey', null),
                        (0, Y._)(this, 'enableDebugMode', void 0),
                        (0, Y._)(this, 'transports', void 0),
                        (0, Y._)(this, 'onSendError', void 0),
                        (this.runner = new aX({
                            builder: new aq(aQ),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        })),
                        (this.enableDebugMode = null == (a = e.variables) ? void 0 : a.enableDebugMode),
                        (this.transports = e.transports);
                }
            }
            class aZ {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    this.metricsStore.setHooks(t),
                        this.subscribeOnBufferedInfoChanged(a),
                        a.state.playerState.event.onChange(() => {
                            let e = a.state.playerState.event.value;
                            if (e === q.Iu.WAITING && this.recentMediaPlayerEventType !== q.Iu.SETTING_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value;
                                e && this.metricsStore.onBuffering(e);
                            }
                            this.recentMediaPlayerEventType = e;
                        }),
                        t.beforeEntityChange.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value;
                            return t && this.metricsStore.onEntityChange(t.entity, e), Promise.resolve();
                        }),
                        t.beforeEntityPlayingProcessStart.tapPromise('MetricsPlugin', () => {
                            this.subscribeOnBufferedInfoChanged(a);
                            let e = a.state.queueState.currentEntity.value;
                            return e && ((this.firstDataReceivedPlayId = null), this.metricsStore.onWantPlay(e)), Promise.resolve();
                        }),
                        t.afterError.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value;
                            return t && this.metricsStore.onError(e, t), Promise.resolve();
                        }),
                        t.afterMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsStore.onPlaying(e), Promise.resolve();
                        }),
                        t.beforeMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsStore.onBeforeMediaStartPlaying(e.entity), Promise.resolve();
                        }),
                        t.beforeDestroy.tapPromise('MetricsPlugin', () => (this.unsubscribeFromBufferedInfoChanged(), Promise.resolve()));
                }
                subscribeOnBufferedInfoChanged(e) {
                    var t, a;
                    let r = null == (a = window.Ya) || null == (t = a.YaspAudioElement) ? void 0 : t.messenger;
                    r &&
                        ((this.bufferedInfoChangedMessenger === r && this.bufferedInfoChangedHandler) ||
                            (this.unsubscribeFromBufferedInfoChanged(),
                            (this.bufferedInfoChangedHandler = (t) => {
                                var a, r;
                                let { source: i, bufferedInfo: s } = t,
                                    n = e.state.queueState.currentEntity.value;
                                n &&
                                    0 !== s.audio.length &&
                                    this.firstDataReceivedPlayId !== n.entity.playId &&
                                    this.isCurrentSource(n.entity, i) &&
                                    ((this.firstDataReceivedPlayId = n.entity.playId),
                                    null == (a = (r = this.metricsStore).onFirstDataReceived) || a.call(r, n.entity, Math.trunc(performance.now())));
                            }),
                            r.on('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                            (this.bufferedInfoChangedMessenger = r)));
                }
                unsubscribeFromBufferedInfoChanged() {
                    this.bufferedInfoChangedMessenger &&
                        this.bufferedInfoChangedHandler &&
                        (this.bufferedInfoChangedMessenger.off('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                        (this.bufferedInfoChangedMessenger = void 0),
                        (this.bufferedInfoChangedHandler = void 0));
                }
                isCurrentSource(e, t) {
                    if (!(e.mediaSourceData instanceof aM)) return !1;
                    try {
                        let a = this.normalizeSource(e.mediaSourceData.src),
                            r = this.normalizeSource(t);
                        return null !== a && a === r;
                    } catch (e) {
                        return !1;
                    }
                }
                normalizeSource(e) {
                    try {
                        let t = new URL(e);
                        return ''.concat(t.origin).concat(t.pathname).concat(t.search);
                    } catch (e) {
                        return null;
                    }
                }
                constructor(e) {
                    var t, a;
                    (0, Y._)(this, 'metricsStore', void 0),
                        (0, Y._)(this, 'recentMediaPlayerEventType', null),
                        (0, Y._)(this, 'bufferedInfoChangedMessenger', void 0),
                        (0, Y._)(this, 'bufferedInfoChangedHandler', void 0),
                        (0, Y._)(this, 'firstDataReceivedPlayId', null);
                    let r = null != (a = null == (t = e.variables) ? void 0 : t.profile) ? a : E.TRACK;
                    this.metricsStore = (function (e, t) {
                        switch (e) {
                            case E.STREAM:
                                return new aH(t);
                            case E.TRACK:
                            default:
                                return new a$(t);
                        }
                    })(r, e);
                }
            }
            var aJ = a(62060);
            function a0(e, t, a) {
                return (
                    !(e instanceof er) &&
                    !!e.isAvailable &&
                    (null === e.mediaSourceData ||
                        (!('downloadInfoSource' !== e.mediaSourceData.type || 'error' in e.mediaSourceData.data || tZ(e)) &&
                            (!!(performance.now() - e.mediaSourceData.loadingTime > t) ||
                                (function (e) {
                                    switch (e) {
                                        case aF.e.LOSSLESS:
                                        case aF.e.HQ:
                                            return aG.e.HIGH_QUALITY;
                                        case aF.e.NQ:
                                            return aG.e.BALANCED;
                                        case aF.e.LQ:
                                    }
                                    return aG.e.EFFICIENT;
                                })(e.mediaSourceData.data.quality) !== a.quality.value)))
                );
            }
            class a1 {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = (0, aJ.A)(
                            () => {
                                this.releaseAllPreloadedSrc(a), this.preload(a, t);
                            },
                            1e3,
                            { trailing: !0 },
                        );
                    this.variables.isMediaSourcePreloadEnabled &&
                        (a.state.queueState.nextEntity.onChange(r),
                        this.mediaConfigController.quality.onChange(() => {
                            this.releaseAllPreloadedSrc(a), this.preload(a, t);
                        }));
                }
                preloadStrmUrls(e) {
                    let {
                        queueState: { order: t, entityList: a, nextIndex: r },
                    } = e.state;
                    if (null !== r.value) {
                        let e = (function (e) {
                                let { preloadCount: t, contextEntityPairs: a, index: r, order: i } = e,
                                    s = 0,
                                    n = r,
                                    o = [];
                                for (; s < t && !(n >= i.length); ) {
                                    let e = i[n];
                                    void 0 !== e && o.push(e), (n += 1), (s += 1);
                                }
                                return o.map((e) => a[e]);
                            })({ contextEntityPairs: a.value, index: r.value, order: t.value, preloadCount: this.config.entitiesToPreloadStrmUrlsCount }),
                            i = (function (e) {
                                let { contextEntityPairs: t, mediaSourceTtlMs: a, mediaConfigController: r } = e;
                                return t.filter((e) => a0(e.entity, a, r));
                            })({ contextEntityPairs: e, mediaSourceTtlMs: this.config.strmUrlsTtlMs, mediaConfigController: this.mediaConfigController }).map(
                                (e) => e.entity,
                            );
                        return 0 === i.length ? Promise.resolve([]) : this.mediaProvider.getMediaSourceBatch({ entities: i }).then(() => e);
                    }
                    return Promise.resolve([]);
                }
                preloadSources(e, t, a) {
                    return 0 === a.length
                        ? Promise.resolve()
                        : Promise.allSettled(
                              a.slice(0, this.config.entitiesToPreloadSourceCount).map((a) =>
                                  e
                                      .preloadSrc({ entity: a.entity, bufferGoal: this.config.bufferGoal, positionSec: a.positionSec })
                                      .then(() => {
                                          this.preloadedSrcArray.push(structuredClone(a.entity.mediaSourceData));
                                      })
                                      .catch((e) => t.afterError.promise(e)),
                              ),
                          ).then(() => Promise.resolve());
                }
                preload(e, t) {
                    this.preloadStrmUrls(e)
                        .then((a) => {
                            this.preloadSources(e, t, a).catch((e) => t.afterError.promise(e));
                        })
                        .catch((e) => {
                            t.afterError.promise(new q.LI('Preload strm urls error', { code: q.QC.PRE_FETCH, cause: e }));
                        });
                }
                releaseRedundantPreloadedSrc(e, t) {
                    if (!(this.preloadedSrcArray.length + t <= this.config.preloadedSourcesMaxCount))
                        for (; this.preloadedSrcArray.length + t !== this.config.preloadedSourcesMaxCount; ) {
                            let t = this.preloadedSrcArray.shift();
                            t && e.releaseSrc(t);
                        }
                }
                releaseAllPreloadedSrc(e) {
                    for (; this.preloadedSrcArray.length; ) {
                        let t = this.preloadedSrcArray.shift();
                        t && e.releaseSrc(t);
                    }
                }
                constructor({ mediaProvider: e, config: t, mediaConfigController: a, variables: r }) {
                    var i;
                    (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'mediaProvider', void 0),
                        (0, Y._)(this, 'config', void 0),
                        (0, Y._)(this, 'mediaConfigController', void 0),
                        (0, Y._)(this, 'preloadedSrcArray', []),
                        (this.variables = { isMediaSourcePreloadEnabled: null != (i = null == r ? void 0 : r.isMediaSourcePreloadEnabled) && i }),
                        (this.mediaProvider = e),
                        (this.mediaConfigController = a),
                        (this.config = t);
                }
            }
            class a5 {
                apply() {
                    this.trailerPlayback.hooks.afterContextEnd.tapPromise(
                        'TrailerPlugin',
                        () => (this.trailerPlayback.restartContext({ playAfterRestart: !1 }), Promise.resolve()),
                    ),
                        this.trailerPlayback.hooks.afterMediaPause.tapPromise('TrailerPlugin', () => (this.onTrailerPaused(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaResume.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve()));
                }
                constructor({ onTrailerPaused: e, onTrailerPlaying: t, playbackController: a, trailerPlaybackParams: r }) {
                    if (
                        ((0, Y._)(this, 'onTrailerPaused', void 0),
                        (0, Y._)(this, 'onTrailerPlaying', void 0),
                        (0, Y._)(this, 'trailerPlayback', void 0),
                        (this.onTrailerPaused = e),
                        (this.onTrailerPlaying = t),
                        a.createPlayback(r.id, {
                            factory: r.factory,
                            entityProvider: r.entityProvider,
                            playbackConfig: r.playbackConfig,
                            mediaPlayerParams: r.mediaPlayerParams,
                            syncVolumeWithMainPlayback: !0,
                        }),
                        (this.trailerPlayback = a.getPlayback(r.id)),
                        r.plugins)
                    )
                        for (let e of r.plugins) e.apply({ playback: this.trailerPlayback, hooks: this.trailerPlayback.hooks });
                }
            }
            var a4 = a(27576);
            (D || (D = {})).START = 'start';
            class a9 {
                apply(e) {
                    let { playback: t } = e;
                    this.channel &&
                        ((this.channel.onmessage = (e) => {
                            let { type: a, id: r } = e.data;
                            t.state.playerState.status.value === q.MT.PLAYING && a === D.START && r !== this.activeStreamId && t.pause();
                        }),
                        t.state.playerState.status.onChange((e) => {
                            if (e === q.MT.PLAYING) {
                                var t;
                                null == (t = this.channel) || t.postMessage({ type: D.START, id: this.activeStreamId });
                            }
                        }));
                }
                constructor() {
                    (0, Y._)(this, 'channel', void 0),
                        (0, Y._)(this, 'activeStreamId', void 0),
                        (this.activeStreamId = (0, a4.A)()),
                        (this.channel = new BroadcastChannel('ya_music_playback'));
                }
            }
            !(function (e) {
                (e.UNSPECIFIED = 'UNSPECIFIED'),
                    (e.WEB = 'WEB'),
                    (e.ANDROID = 'ANDROID'),
                    (e.IOS = 'IOS'),
                    (e.SMART_SPEAKER = 'SMART_SPEAKER'),
                    (e.WEB_TV = 'WEB_TV'),
                    (e.ANDROID_TV = 'ANDROID_TV'),
                    (e.APPLE_TV = 'APPLE_TV'),
                    (e.ANDROID_WEAR = 'ANDROID_WEAR'),
                    (e.WEB_DESKTOP = 'WEB_DESKTOP'),
                    (e.UNRECOGNIZED = 'UNRECOGNIZED');
            })(N || (N = {})),
                (function (e) {
                    (e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.TRACK = 'TRACK'),
                        (e.LOCAL_TRACK = 'LOCAL_TRACK'),
                        (e.INFINITE = 'INFINITE'),
                        (e.VIDEO_CLIP = 'VIDEO_CLIP'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(R || (R = {})),
                (function (e) {
                    (e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.RECOMMENDED = 'RECOMMENDED'),
                        (e.ON_DEMAND = 'ON_DEMAND'),
                        (e.SEARCH = 'SEARCH'),
                        (e.ARTIST = 'ARTIST'),
                        (e.OWN = 'OWN'),
                        (e.EDITORIAL_CHOICE = 'EDITORIAL_CHOICE'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(x || (x = {})),
                (function (e) {
                    (e.UNSPECIFIED = 'UNSPECIFIED'), (e.ALICE_SHOT = 'ALICE_SHOT'), (e.AD = 'AD'), (e.PREROLL = 'PREROLL'), (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(L || (L = {})),
                (function (e) {
                    (e.UNSPECIFIED = 'UNSPECIFIED'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.ALBUM = 'ALBUM'),
                        (e.RADIO = 'RADIO'),
                        (e.VARIOUS = 'VARIOUS'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.FM_RADIO = 'FM_RADIO'),
                        (e.VIDEO_WAVE = 'VIDEO_WAVE'),
                        (e.LOCAL_TRACKS = 'LOCAL_TRACKS'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(w || (w = {})),
                (function (e) {
                    (e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(O || (O = {})),
                (function (e) {
                    (e.ONLINE_BY_DEFAULT = 'ONLINE_BY_DEFAULT'), (e.OFFLINE = 'OFFLINE'), (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(M || (M = {})),
                (function (e) {
                    (e.UNSPECIFIED = 'UNSPECIFIED'), (e.NONE = 'NONE'), (e.ONE = 'ONE'), (e.ALL = 'ALL'), (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(F || (F = {})),
                (function (e) {
                    (e.UNSPECIFIED_TYPE = 'UNSPECIFIED_TYPE'),
                        (e.STANDARD = 'STANDARD'),
                        (e.PRIVATE_GROUP = 'PRIVATE_GROUP'),
                        (e.SPECTATOR = 'SPECTATOR'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(G || (G = {})),
                (function (e) {
                    (e.DO_NOT_INTERCEPT_BY_DEFAULT = 'DO_NOT_INTERCEPT_BY_DEFAULT'),
                        (e.INTERCEPT_IF_NO_ONE_ACTIVE = 'INTERCEPT_IF_NO_ONE_ACTIVE'),
                        (e.INTERCEPT_EAGER = 'INTERCEPT_EAGER'),
                        (e.UNRECOGNIZED = 'UNRECOGNIZED');
                })(K || (K = {}));
            var a3 = function (e, t) {
                var a = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
                if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                        0 > t.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (a[r[i]] = e[r[i]]);
                return a;
            };
            function a2(e) {
                return e.UNRECOGNIZED, a3(e, ['UNRECOGNIZED']);
            }
            var a7 = a2(R);
            a2(R), a2(x), a2(x);
            var a6 = a2(O);
            a2(O);
            var a8 = a2(w);
            a2(w);
            var re = a2(F);
            a2(F), a2(L), a2(L), a2(K), a2(K), a2(M);
            class rt {
                push(e) {
                    this.callbacks.push(e);
                }
                exec() {
                    let e = [];
                    for (let t of this.callbacks)
                        if (0 === e.length) e.push(t());
                        else {
                            let a = e[e.length - 1].then(t);
                            e.push(a);
                        }
                    return Promise.allSettled(e).then(() => Promise.resolve());
                }
                constructor() {
                    (0, Y._)(this, 'callbacks', []);
                }
            }
            let ra = {
                ynisonToPlayback: (e) => {
                    switch (e) {
                        case re.ONE:
                            return q.pM.ONE;
                        case re.ALL:
                            return q.pM.CONTEXT;
                        default:
                            return q.pM.NONE;
                    }
                },
            };
            class rr extends ei.t {
                constructor(e, { code: t = 'E_YNISON', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'YnisonException'), Object.setPrototypeOf(this, rr.prototype);
                }
            }
            let ri = (e, t) => new rr('[YnisonException] '.concat(e), { cause: (0, W.createObjectFromError)(t) }),
                rs = (e, t) => {
                    var a;
                    let r = null == (a = e.player_state) ? void 0 : a.player_queue,
                        i = (null == r ? void 0 : r.current_playable_index) || 0,
                        s = ((null == r ? void 0 : r.playable_list) || [])[i],
                        n = null == r ? void 0 : r.entity_type;
                    return !s || t.includes(n) ? { index: 0 } : { entityId: s.playable_id, index: i };
                },
                rn = (e) => {
                    let { playableList: t, radioSessionId: a, getEntityData: r, restoredParams: { currentPlayableIndex: i } = {} } = e,
                        s = t
                            .filter((e) => {
                                let { playable_type: t, playable_id: a } = e;
                                return t === a7.TRACK && a;
                            })
                            .map((e, t) => r({ playable: e, wasPlayed: 'number' == typeof i && i >= t, radioSessionId: a })),
                        n = 'number' == typeof i && s[i];
                    return n && (n.isRestored = !0), s;
                };
            function ro(e) {
                let { playable: t, wasPlayed: a } = e;
                return { type: q.z4.Unloaded, meta: { id: t.playable_id, albumId: t.album_id_optional }, wasPlayed: a };
            }
            function rl(e) {
                var t, a;
                let { playable: r, radioSessionId: i } = e;
                return {
                    type: H.R.VibeTrack,
                    meta: { id: r.playable_id, albumId: r.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: !0,
                    batchId: null != (a = null == (t = r.track_info) ? void 0 : t.batch_id_optional) ? a : void 0,
                    radioSessionId: i,
                };
            }
            let rd = (e) => !isNaN(Number(e)) && Number(e) > 0,
                ru = (e) => {
                    var t, a;
                    let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                        i = (null == r ? void 0 : r.playable_list) || [];
                    return r.from_optional || (null == (a = i[0]) ? void 0 : a.from) || 'embedded-radio';
                },
                rc = (e) => {
                    var t, a, r, i;
                    let s = null == (t = e.player_state) ? void 0 : t.player_queue,
                        n = (null == s ? void 0 : s.playable_list) || [],
                        o = null == (i = n[null == (r = e.player_state) || null == (a = r.player_queue) ? void 0 : a.current_playable_index]) ? void 0 : i.playable_id;
                    return o && n.length ? { type: ec.K.Various, from: ru(e), meta: { id: o } } : null;
                },
                rh = (e) => {
                    var t, a, r, i, s;
                    let n = null != (s = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.current_playable_index) ? s : 0;
                    return ((null == (i = e.player_state) || null == (r = i.player_queue) ? void 0 : r.playable_list) || []).slice(0, n + 1);
                };
            function rg(e, t, a) {
                return !(function (e, t, a) {
                    let r = e.length - 1;
                    return t !== r && a <= r;
                })(e, t, a)
                    ? e
                    : e.slice(0, -1);
            }
            let rm = (e) => (e.album_id_optional ? ''.concat(e.playable_id, ':').concat(e.album_id_optional) : e.playable_id),
                ry = function (e) {
                    var t, a, r, i, s, n, o, l;
                    let d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        u = null == (t = e.player_state) ? void 0 : t.player_queue,
                        c = u.version.timestamp_ms,
                        h = null == u ? void 0 : u.entity_id,
                        g =
                            null == (s = u.queue) || null == (i = s.wave_queue) || null == (r = i.entity_options) || null == (a = r.wave_entity_optional)
                                ? void 0
                                : a.session_id,
                        m = null != (l = null == (o = e.player_state.player_queue.queue) || null == (n = o.wave_queue) ? void 0 : n.live_playable_index) ? l : 0,
                        y = e.player_state.player_queue.current_playable_index,
                        p = u.playable_list,
                        v = [];
                    return ((v = d ? ej(rg(p, y, m).map(rm), y, m) : rh(e).map(rm).slice(-100)), 'string' == typeof h || g)
                        ? {
                              type: ec.K.Vibe,
                              from: ru(e),
                              seeds: [],
                              includeTracksInResponse: !0,
                              cloneSessionId: g,
                              meta: { id: h },
                              queue: v,
                              interactive: !1,
                              timeOfLastInteractionWithVibe: c,
                          }
                        : rc(e);
                },
                rp = 'user:onyourwave',
                rv = (e, t, a) => {
                    var r;
                    let i = null == (r = e.player_state) ? void 0 : r.player_queue,
                        s = null == i ? void 0 : i.entity_type;
                    if (!s) return null;
                    if (t.includes(s)) return { type: ec.K.Vibe, from: ru(e), seeds: [rp], includeTracksInResponse: !0, meta: { id: rp } };
                    switch (s) {
                        case a8.ALBUM:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return rd(r) ? { type: ec.K.Album, from: ru(e), meta: { id: r } } : rc(e);
                            })(e);
                        case a8.ARTIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return rd(r) ? { type: ec.K.Artist, from: ru(e), meta: { id: r } } : rc(e);
                            })(e);
                        case a8.PLAYLIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id,
                                    i = ru(e),
                                    [s, n] = String(r).split(':');
                                if (rd(s) && rd(n)) {
                                    let e = { uid: Number(s) };
                                    return { type: ec.K.Playlist, from: i, meta: { id: r, kind: Number(n), owner: e } };
                                }
                                return rc(e);
                            })(e);
                        case a8.RADIO:
                            return ry(e, a.sendCorrectRotorQueueParam);
                        case a8.GENERATIVE:
                            return ((e) => {
                                var t, a;
                                let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    [i, s] = (null == r || null == (a = r.entity_id) ? void 0 : a.split(' ')) || [];
                                return i ? { type: ec.K.Generative, from: ru(e), meta: { id: i, stream: s ? { id: i, url: s } : void 0 } } : null;
                            })(e);
                        case a8.VARIOUS:
                            return rc(e);
                        default:
                            return null;
                    }
                };
            function rS(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                switch (e.state.playerState.status.value) {
                    case q.MT.PLAYING:
                        return !1;
                    case q.MT.PAUSED:
                    case q.MT.STOPPED:
                    case q.MT.IDLE:
                        return !0;
                    default:
                        return t;
                }
            }
            let rE = (e, t) => ({ ...e, filterParams: t.queueState.filterParams.value }),
                rf = (e, t) => {
                    if (!e) return null;
                    let a = { ...e };
                    return a.type === ec.K.Vibe && (a.allowExplicit = t.queueState.filterParams.value.allowExplicit), a;
                };
            function rb(e) {
                let { playableList: t, trackSourcesMap: a, from: r, livePlayableIndex: i, currentPlayableIndex: s, radioSessionId: n, getEntityData: o } = e,
                    l = t
                        .filter((e) => {
                            let { playable_type: t, playable_id: a } = e;
                            return t === a7.TRACK && a;
                        })
                        .map((e, t) => o({ playable: e, trackSourcesMap: a, from: r, wasPlayed: t <= i, radioSessionId: n })),
                    d = l[s];
                return d && (d.isRestored = !0), l;
            }
            var rP = a(83778);
            function r_(e, t) {
                var a, r;
                if (!e || e.wave_source) return;
                let i = e.phonoteka_source;
                if (!i) return;
                let s = null != (a = i.entity_context) ? a : rP.h.BASED_ON_ENTITY_BY_DEFAULT;
                return i.playlist_id
                    ? {
                          type: ec.K.Playlist,
                          sourceContextType: s,
                          from: t,
                          meta: { id: i.playlist_id.id },
                          filter: null != (r = i.playlist_id.filter_optional) ? r : void 0,
                      }
                    : i.album_id
                      ? { type: ec.K.Album, sourceContextType: s, from: t, meta: { id: Number(i.album_id.id) } }
                      : i.artist_id
                        ? { type: ec.K.Artist, sourceContextType: s, from: t, meta: { id: Number(i.artist_id.id) } }
                        : { type: ec.K.Various, sourceContextType: s, from: t, meta: { id: '' } };
            }
            function rI(e) {
                var t, a, r;
                let { playable: i, trackSourcesMap: s, from: n, wasPlayed: o, radioSessionId: l } = e,
                    d = null == (t = i.track_info) ? void 0 : t.track_source_key,
                    u = r_(void 0 !== d ? s.get(d) : void 0, n);
                return {
                    type: H.R.VibeTrack,
                    meta: { id: i.playable_id, albumId: i.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: o,
                    batchId: null != (r = null == (a = i.track_info) ? void 0 : a.batch_id_optional) ? r : void 0,
                    sourceContextData: u,
                    radioSessionId: l,
                };
            }
            function rC(e) {
                var t;
                let { playable: a, trackSourcesMap: r, from: i, wasPlayed: s } = e,
                    n = null == (t = a.track_info) ? void 0 : t.track_source_key,
                    o = r_(void 0 !== n ? r.get(n) : void 0, i);
                return { type: q.z4.Unloaded, meta: { id: a.playable_id, albumId: a.album_id_optional }, wasPlayed: s, sourceContextData: o };
            }
            window.onRemoteDeviceConnected = [];
            window.onRemoteDeviceDisconnected = [];
            class rk {
                onYnisonStateUpdated(e) {
                    const isRemoteControlEnabled = window.ENABLE_YNISON_REMOTE_CONTROL;
                    const allowedStatuses1 = [q.MT.ENDED, q.MT.IDLE, q.MT.PAUSED, q.MT.STOPPED, q.MT.MEDIA_ELEMENT_ERROR];
                    const allowedStatuses2 = [q.MT.ENDED, q.MT.IDLE, q.MT.STOPPED, q.MT.MEDIA_ELEMENT_ERROR];
                    const current_device_id = JSON.parse(localStorage.getItem('ynisonDeviceId'))?.value;
                    const currentStatus = this.playback.state.playerState.status.value;
                    const shouldApplyState = this.variables.shouldApplyState;
                    const isDeviceMatch = e.state.active_device_id_optional === current_device_id;
                    const selfStateDuped = e.state.player_state.status.version.device_id === current_device_id;
                    if (
                        isRemoteControlEnabled
                            ? shouldApplyState && ((!selfStateDuped && isDeviceMatch) || allowedStatuses2.includes(currentStatus))
                            : allowedStatuses1.includes(currentStatus) && shouldApplyState
                    ) {
                        if (isRemoteControlEnabled && !selfStateDuped) {
                            const currentDevice = e.state.devices.find((device) => device.info.device_id === e.state.player_state.status.version.device_id);
                            window.onRemoteDeviceConnected.forEach((listener) => listener(currentDevice));
                            window.remoteDeviceConnected = true;
                        }
                    } else if (isRemoteControlEnabled && !isDeviceMatch) {
                        window.onRemoteDeviceDisconnected.forEach((listener) => listener());
                        window.remoteDeviceConnected = false;
                    }
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    var t, a, r, i, s, n;
                    let o = new rt();
                    if (
                        ((function (e) {
                            if (!e.player_state || !e.player_state.player_queue) return !1;
                            let t = e.player_state.player_queue;
                            return 'playable_list' in t || 'entity_id' in t;
                        })(e.diff)
                            ? o.push(() => this.changeContext(e.state))
                            : (n = e.diff).player_state &&
                              n.player_state.player_queue &&
                              (('number' == typeof n.player_state.player_queue.current_playable_index &&
                                  !n.player_state.player_queue.playable_list &&
                                  !n.player_state.player_queue.entity_id) ||
                                  0) &&
                              o.push(() => this.changeEntityInCurrentContext(e.state)),
                        null == (a = e.diff.player_state) || null == (t = a.player_queue) ? void 0 : t.shuffle_optional)
                    ) {
                        let t = e.diff.player_state.player_queue.shuffle_optional;
                        o.push(() => this.changeShuffle(t));
                    }
                    if (null == (i = e.diff.player_state) || null == (r = i.player_queue) ? void 0 : r.options) {
                        let t = e.diff.player_state.player_queue.options;
                        if (e.state.player_state.player_queue.entity_type === a8.RADIO) {
                            let e = t.repeat_mode === re.ALL,
                                a = t.repeat_mode === re.ONE && !0 !== this.variables.useWaveQueue;
                            (e || a) && (t = { ...t, repeat_mode: re.NONE });
                        }
                        o.push(() => this.changeOptions(t));
                    }
                    if (null == (s = e.diff.player_state) ? void 0 : s.status) {
                        let t = e.diff.player_state.status;
                        o.push(() => this.changeStatus(t));
                    }
                    return o.exec();
                }
                changeOptions(e) {
                    let t = ra.ynisonToPlayback(e.repeat_mode);
                    return this.playback.setRepeatMode(t), Promise.resolve();
                }
                changeShuffle(e) {
                    let t = !!(Array.isArray(e.playable_indices) && e.playable_indices.length);
                    return this.playback.setShuffle(t), Promise.resolve();
                }
                changeStatus(e) {
                    let t = new rt(),
                        a = Number(e.playback_speed),
                        r = Number(e.progress_ms) / 1e3;
                    return (
                        Number.isNaN(a) || t.push(() => this.playback.setSpeed(a).then(() => Promise.resolve())),
                        Number.isNaN(r) ||
                            t.push(() => {
                                let e = this.playback.state.playerState.status.value === q.MT.PLAYING,
                                    t = Math.abs(this.playback.state.playerState.progress.value.position - r);
                                if (e && t > X.O5) return this.playback.setProgress(r).then(() => Promise.resolve());
                                let {
                                    currentEntity: { value: a },
                                } = this.playback.state.queueState;
                                return a && (a.positionSec = r), Promise.resolve();
                            }),
                        void 0 !== e.paused && e.paused !== rS(this.playback, e.paused) && t.push(() => this.playback.togglePause()),
                        t.exec()
                    );
                }
                changeContext(e) {
                    var t, a, r;
                    let i =
                            this.variables.useWaveQueue &&
                            (null == (r = e.player_state) || null == (a = r.player_queue) || null == (t = a.queue) ? void 0 : t.wave_queue) !== void 0,
                        s = i ? this.getContextParamsWithWaveQueue(e) : this.getContextParams(e);
                    return s
                        ? this.playback
                              .setContext(s)
                              .then(() => {
                                  if (i) {
                                      var t, a, r, s, n;
                                      let i =
                                          null !=
                                          (n =
                                              null == (s = e.player_state) || null == (r = s.player_queue) || null == (a = r.queue) || null == (t = a.wave_queue)
                                                  ? void 0
                                                  : t.live_playable_index)
                                              ? n
                                              : 0;
                                      this.playback.state.queueState.livePlayableIndex.value = i;
                                  }
                                  return this.playback.stop();
                              })
                              .then(() => {
                                  void 0 !== e.player_state.status.paused &&
                                      e.player_state.status.paused !== rS(this.playback, e.player_state.status.paused) &&
                                      this.playback.togglePause();
                              })
                              .catch((e) => {
                                  e instanceof q.WT || this.playback.hooks.afterError.promise(ri('PlaybackSetContextError', e));
                              })
                        : Promise.resolve();
                }
                changeEntityInCurrentContext(e) {
                    let t = e.player_state.player_queue.current_playable_index,
                        a = !1 !== e.player_state.status.paused;
                    return this.playback.setEntityByIndex(t, a);
                }
                getContextParamsWithWaveQueue(e) {
                    try {
                        var t, a, r, i, s, n, o, l, d, u, c;
                        let h = rf(rv(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!h) return null;
                        let g = this.factory.createContext({ data: h }),
                            m = null == (t = e.player_state) ? void 0 : t.player_queue,
                            y = null == m || null == (a = m.queue) ? void 0 : a.wave_queue,
                            p = null == y || null == (r = y.entity_options) ? void 0 : r.track_sources,
                            v = null != (i = null == y ? void 0 : y.live_playable_index) ? i : 0,
                            S = null != (s = null == m ? void 0 : m.from_optional) ? s : '',
                            E = null != (n = null == m ? void 0 : m.current_playable_index) ? n : 0,
                            f = rE(rs(e, this.fallbackTypesQueueToVibe), this.playback.state),
                            b = null != (o = null == m ? void 0 : m.playable_list) ? o : [];
                        if ((0, tC.S)(g)) return { context: g, loadContextMeta: !0 };
                        let P = (function (e) {
                            let t = new Map();
                            if (!e) return t;
                            for (let a of e) t.set(a.key, a);
                            return t;
                        })(p);
                        if ((0, e9.i)(g)) {
                            let e = rg(b, E, v),
                                t =
                                    null == (c = m.queue) || null == (u = c.wave_queue) || null == (d = u.entity_options) || null == (l = d.wave_entity_optional)
                                        ? void 0
                                        : l.session_id,
                                a = rb({
                                    playableList: e,
                                    trackSourcesMap: P,
                                    from: S,
                                    livePlayableIndex: v,
                                    currentPlayableIndex: E,
                                    radioSessionId: t,
                                    getEntityData: rI,
                                });
                            return { context: g, entitiesData: a.length ? a : void 0, loadContextMeta: !0, queueParams: f };
                        }
                        let _ = rb({ playableList: b, trackSourcesMap: P, from: S, livePlayableIndex: v, currentPlayableIndex: E, getEntityData: rC });
                        if ((0, t2.p)(g)) return { context: g, entitiesData: _, loadContextMeta: !1, queueParams: f };
                        return { context: g, entitiesData: _, loadContextMeta: !0, queueParams: f };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(ri('GetContextParamsWithWaveQueueError', e)), null;
                    }
                }
                getContextParams(e) {
                    try {
                        var t, a, r, i, s, n, o;
                        let l = rf(rv(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!l) return null;
                        let d = this.factory.createContext({ data: l }),
                            u = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.playable_list,
                            c = rE(rs(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if ((0, e9.i)(d)) {
                            let t = null == (r = e.player_state) ? void 0 : r.player_queue,
                                a =
                                    null == (o = t.queue) || null == (n = o.wave_queue) || null == (s = n.entity_options) || null == (i = s.wave_entity_optional)
                                        ? void 0
                                        : i.session_id,
                                l = rn({ playableList: rh(e), getEntityData: rl, radioSessionId: a, restoredParams: { currentPlayableIndex: t.current_playable_index } });
                            return { context: d, entitiesData: l.length ? l : void 0, loadContextMeta: !0, queueParams: c };
                        }
                        let h = rn({ playableList: u, getEntityData: ro, restoredParams: { currentPlayableIndex: e.player_state.player_queue.current_playable_index } });
                        if ((0, t2.p)(d)) return { context: d, entitiesData: h, loadContextMeta: !1, queueParams: c };
                        if ((0, tC.S)(d)) return { context: d, loadContextMeta: !0 };
                        return { context: d, entitiesData: h, loadContextMeta: !0, queueParams: c };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(ri('GetContextParamsError', e)), null;
                    }
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ factory: e, playback: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i }) {
                    (0, Y._)(this, 'factory', void 0),
                        (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'unlisteners', void 0),
                        (0, Y._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.playback = t),
                        (this.variables = r),
                        (this.unlisteners = []),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []);
                    let s = a.on(X.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonPlugin');
                    this.unlisteners.push(s);
                    let n = a.fullState;
                    this.onYnisonStateUpdated({ prevState: n.prevState, state: n.state, diff: n.state });
                }
            }
            let rT = (e) => e.hidden,
                rA = (e) => {
                    var t, a, r, i, s, n, o;
                    switch (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.type) {
                        case H.R.Music:
                        case H.R.VibeTrack:
                            return (null == (a = e.state.currentContext.value) ? void 0 : a.data.meta.id)
                                ? String(null == (r = e.state.currentContext.value) ? void 0 : r.data.meta.id)
                                : '';
                        case H.R.Generative:
                            return (null == (i = e.state.currentContext.value) ? void 0 : i.data.meta.id)
                                ? String(null == (s = e.state.currentContext.value) ? void 0 : s.data.meta.id)
                                : '';
                        default:
                            return (null == (n = e.state.currentContext.value) ? void 0 : n.data.meta.id)
                                ? String(null == (o = e.state.currentContext.value) ? void 0 : o.data.meta.id)
                                : '';
                    }
                },
                rD = (e) => {
                    switch (e) {
                        case ec.K.Album:
                            return a8.ALBUM;
                        case ec.K.Playlist:
                            return a8.PLAYLIST;
                        case ec.K.Artist:
                            return a8.ARTIST;
                        case ec.K.Vibe:
                            return a8.RADIO;
                        case ec.K.Various:
                            return a8.VARIOUS;
                        case ec.K.Generative:
                            return a8.GENERATIVE;
                        default:
                            return a8.VARIOUS;
                    }
                },
                rN = (e) => {
                    var t, a, r;
                    return ((e) => 'object' == typeof e && e && 'durationMs' in e && 'number' == typeof e.durationMs)(
                        null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta,
                    ) && null != (r = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta.durationMs)
                        ? r
                        : 0;
                },
                rR = (e, t, a) => ''.concat(e, ':').concat(t, ':').concat(a);
            var rx = a(53512);
            function rL(e) {
                var t, a, r, i, s, n, o;
                if (!e) return;
                let l = { entityContext: null != (t = e.data.sourceContextType) ? t : rP.h.BASED_ON_ENTITY_BY_DEFAULT };
                if ((0, t9.K)(e)) {
                    let { uid: t, kind: n, id: o } = null != (a = e.data.meta) ? a : {},
                        d = void 0 !== o ? String(o) : void 0,
                        [u, c] = null != (r = null == d ? void 0 : d.split(':')) ? r : [];
                    return (
                        u && c
                            ? ((l.playlistId = d), (l.filterOptional = null != (i = e.data.filter) ? i : null))
                            : void 0 !== t && void 0 !== n && ((l.playlistId = ''.concat(t, ':').concat(n)), (l.filterOptional = null != (s = e.data.filter) ? s : null)),
                        l
                    );
                }
                if ((0, e7.F)(e)) {
                    let { id: t } = null != (n = e.data.meta) ? n : {};
                    return void 0 !== t && (l.albumId = String(t)), l;
                }
                if ((0, rx.T)(e)) {
                    let { id: t } = null != (o = e.data.meta) ? o : {};
                    void 0 !== t && (l.artistId = String(t));
                }
                return l;
            }
            function rw(e, t, a) {
                return t && 0 !== t.length
                    ? a
                        ? (function (e, t) {
                              let a = rL(e);
                              if (!a) {
                                  var r;
                                  return null != (r = t.waveSourceKey) ? r : 0;
                              }
                              let { entityContext: i, playlistId: s, albumId: n, artistId: o } = a;
                              if (s) {
                                  let e = rR(i, 'playlist', s),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (n) {
                                  let e = rR(i, 'album', n),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (o) {
                                  let e = rR(i, 'artist', o),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              let l = t.contextOnlyMap.get(i);
                              return null != l ? l : 0;
                          })(e, a)
                        : (function (e, t) {
                              var a, r;
                              let i = rL(e);
                              if (!i) {
                                  let e = t.find((e) => void 0 !== e.wave_source);
                                  return null != (a = null == e ? void 0 : e.key) ? a : 0;
                              }
                              let { entityContext: s, playlistId: n, albumId: o, artistId: l } = i,
                                  d = t.find((e) => {
                                      var t, a, r;
                                      return (
                                          !!e.phonoteka_source &&
                                          e.phonoteka_source.entity_context === s &&
                                          ((!!n && (null == (t = e.phonoteka_source.playlist_id) ? void 0 : t.id) === n) ||
                                              (!!o && (null == (a = e.phonoteka_source.album_id) ? void 0 : a.id) === o) ||
                                              (!!l && (null == (r = e.phonoteka_source.artist_id) ? void 0 : r.id) === l))
                                      );
                                  });
                              if (d) return d.key;
                              let u = t.find(
                                  (e) =>
                                      !!e.phonoteka_source &&
                                      e.phonoteka_source.entity_context === s &&
                                      (!n || !e.phonoteka_source.playlist_id) &&
                                      (!o || !e.phonoteka_source.album_id) &&
                                      (!l || !e.phonoteka_source.artist_id),
                              );
                              return null != (r = null == u ? void 0 : u.key) ? r : 0;
                          })(e, t)
                    : 0;
            }
            function rO(e) {
                let { playableList: t, rangeStart: a, livePlayableIndex: r, isVibeQueue: i } = e;
                return i ? Math.max(0, Math.min(r - a, t.length)) : t.length;
            }
            let rM = [rP.h.BASED_ON_ENTITY_BY_DEFAULT, rP.h.ARTIST_MY_COLLECTION, rP.h.ARTIST_FAMILIAR_FROM_WAVE];
            function rF(e) {
                return { wave_source: { source_type: e } };
            }
            function rG(e) {
                return { phonoteka_source: e };
            }
            class rK {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.status.onChange((e) => {
                            switch (e) {
                                case q.MT.PLAYING:
                                case q.MT.PAUSED:
                                    this.updateYnisonState();
                            }
                        }),
                        t = this.playback.state.playerState.event.onChange((e) => {
                            switch (e) {
                                case q.Iu.SET_PROGRESS:
                                    this.ynisonStateController.currentState.player_state.status.progress_ms / 1e3 !==
                                        this.playback.state.playerState.progress.value.position && this.updateYnisonState();
                                    break;
                                case q.Iu.SET_SPEED:
                                    this.ynisonStateController.currentState.player_state.status.playback_speed !== this.playback.state.playerState.speed.value &&
                                        this.updateYnisonState();
                            }
                        }),
                        a = this.playback.state.playerState.speed.onChange(() => {
                            this.updateYnisonState();
                        }),
                        r = this.playback.state.queueState.repeat.onChange(() => {
                            this.updateYnisonState();
                        }),
                        i = this.playback.state.queueState.shuffle.onChange(() => {
                            this.updateYnisonState();
                        }),
                        s = this.playback.state.queueState.entityList.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        }),
                        n = this.playback.state.queueState.order.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        });
                    this.unsubscribeFromPlayerEvents = () => {
                        e(), t(), r(), i(), a(), s(), n();
                    };
                }
                updateYnisonState(e) {
                    setTimeout(() => {
                        if (!this.playback.state.queueState.currentEntity.value) return;
                        let t = (function (e) {
                            var t, a, r, i, s, n, o, l;
                            let { playback: d, ynisonStateController: u, deviceId: c, variables: h } = e,
                                {
                                    devices: g,
                                    active_device_id_optional: m,
                                    player_state: { player_queue_inject_optional: y, status: p },
                                } = u.currentState,
                                v = h.useWaveQueue && !(0, tC.S)(d.state.currentContext.value),
                                { filteredEntityList: S, firstNotPlayedVibeEntity: E } = (function (e, t) {
                                    let a = e.state.queueState.index.value,
                                        r = e.state.queueState.entityList.value,
                                        i = null,
                                        s = null;
                                    return (
                                        t.enableSendLimitedEntityListToYnison && (r = r.filter((e) => !rT(e.entity))),
                                        (0, e9.i)(e.state.currentContext.value) &&
                                            t.enableSendLimitedEntityListToYnison &&
                                            ({ vibeHistory: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s } = eX(r, a)),
                                        { filteredEntityList: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s }
                                    );
                                })(d, h),
                                f = (function (e, t) {
                                    let a = e.state.currentContext.value,
                                        r = new Set(),
                                        i = [];
                                    for (let { sourceContext: e } of t) {
                                        let t = null != e ? e : a,
                                            { uniqueKey: s, payload: n } = (function (e, t) {
                                                if (!e) return { uniqueKey: 'wave_source', payload: rF(M.UNRECOGNIZED) };
                                                let { entityContext: a, playlistId: r, albumId: i, artistId: s } = e;
                                                if (r || i || s) {
                                                    let t = (function (e) {
                                                        var t;
                                                        let { entityContext: a, playlistId: r, albumId: i, artistId: s, filterOptional: n } = e;
                                                        return r
                                                            ? ((t = null != n ? n : null),
                                                              {
                                                                  uniqueKey: 'playlist_'
                                                                      .concat(a, '_')
                                                                      .concat(r, '_')
                                                                      .concat(null != t ? t : ''),
                                                                  payload: rG({ entity_context: a, playlist_id: { id: r, filter_optional: t } }),
                                                              })
                                                            : i
                                                              ? { uniqueKey: 'album_'.concat(a, '_').concat(i), payload: rG({ entity_context: a, album_id: { id: i } }) }
                                                              : s
                                                                ? {
                                                                      uniqueKey: 'artist_'.concat(a, '_').concat(s),
                                                                      payload: rG({ entity_context: a, artist_id: { id: s } }),
                                                                  }
                                                                : null;
                                                    })(e);
                                                    if (t) return t;
                                                }
                                                return rM.includes(a) && t
                                                    ? { uniqueKey: 'wave_source', payload: rF(M.ONLINE_BY_DEFAULT) }
                                                    : { uniqueKey: 'context_'.concat(a), payload: rG({ entity_context: a }) };
                                            })(rL(t), (0, e9.i)(t));
                                        r.has(s) || (r.add(s), i.push({ key: i.length, ...n }));
                                    }
                                    return i;
                                })(d, S),
                                b = (function (e) {
                                    let { entityList: t, from: a, trackSources: r, useWaveQueue: i } = e,
                                        s = (function (e) {
                                            if (!e || 0 === e.length) return null;
                                            let t = { waveSourceKey: null, exactMatchMap: new Map(), contextOnlyMap: new Map() };
                                            for (let a of e) {
                                                if (void 0 !== a.wave_source && null === t.waveSourceKey) {
                                                    t.waveSourceKey = a.key;
                                                    continue;
                                                }
                                                if (a.phonoteka_source) {
                                                    let { entity_context: e, playlist_id: r, album_id: i, artist_id: s } = a.phonoteka_source;
                                                    if (r) {
                                                        let i = rR(e, 'playlist', r.id);
                                                        t.exactMatchMap.has(i) || t.exactMatchMap.set(i, a.key);
                                                    } else if (i) {
                                                        let r = rR(e, 'album', i.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else if (s) {
                                                        let r = rR(e, 'artist', s.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else t.contextOnlyMap.has(e) || t.contextOnlyMap.set(e, a.key);
                                                }
                                            }
                                            return t;
                                        })(r);
                                    return t.map((e) =>
                                        ((e) => {
                                            var t, a, r, i, s, n, o, l, d, u, c, h, g;
                                            let { entityPair: m, from: y = '', trackSources: p, trackSourceIndex: v, useWaveQueue: S = !1 } = e,
                                                { entity: E, sourceContext: f } = m;
                                            switch (E.data.type) {
                                                case H.R.Music:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (a = E.data.meta.albums) || null == (t = a[0]) ? void 0 : t.id)
                                                                ? String(null == (r = E.data.meta.albums) ? void 0 : r[0].id)
                                                                : null,
                                                        from: y,
                                                        playable_id: String(E.data.meta.id),
                                                        playable_type: a7.TRACK,
                                                        title: null != (i = E.data.meta.title) ? i : '',
                                                        cover_url_optional: null != (s = E.data.meta.coverUri) ? s : null,
                                                        ...(S && {
                                                            track_info: { batch_id_optional: null != (n = E.data.batchId) ? n : null, track_source_key: rw(f, p, v) },
                                                        }),
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case H.R.Generative:
                                                    return {
                                                        album_id_optional: null,
                                                        from: y,
                                                        playable_id: '',
                                                        playable_type: a7.INFINITE,
                                                        title: null != (o = E.data.meta.title) ? o : '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case H.R.VibeTrack:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (d = E.data.meta.albums) || null == (l = d[0]) ? void 0 : l.id)
                                                                ? String(null == (u = E.data.meta.albums) ? void 0 : u[0].id)
                                                                : null,
                                                        from: y,
                                                        playable_id: String(E.data.meta.id),
                                                        playable_type: a7.TRACK,
                                                        title: null != (c = E.data.meta.title) ? c : '',
                                                        cover_url_optional: null != (h = E.data.meta.coverUri) ? h : null,
                                                        track_info: { batch_id_optional: null != (g = E.data.batchId) ? g : null, track_source_key: rw(f, p, v) },
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                default:
                                                    return {
                                                        album_id_optional: null,
                                                        from: y,
                                                        playable_id: String(E.data.meta.id),
                                                        playable_type: a7.TRACK,
                                                        title: '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                            }
                                        })({ entityPair: e, from: a, trackSources: r, trackSourceIndex: s, useWaveQueue: i }),
                                    );
                                })({ entityList: S, from: null == (t = d.state.currentContext.value) ? void 0 : t.from, trackSources: f, useWaveQueue: v }),
                                {
                                    playableIndices: P,
                                    currentPlayableIndex: _,
                                    playableList: I,
                                    livePlayableIndex: C,
                                } = (function (e) {
                                    let { playableList: t, currentPlayableIndex: a, playback: r, newIndexOrderMap: i, variables: s } = e,
                                        n = r.state.queueState.order.value,
                                        o = (0, e9.i)(r.state.currentContext.value),
                                        { livePlayableIndex: l } = r.state.queueState;
                                    if ((s.enableSendLimitedEntityListToYnison && (n = n.filter((e) => i.has(e)).map((e) => i.get(e))), t.length <= 200))
                                        return {
                                            playableList: t,
                                            currentPlayableIndex: a,
                                            playableIndices: n,
                                            livePlayableIndex: rO({ playableList: t, rangeStart: 0, livePlayableIndex: l.value, isVibeQueue: o }),
                                        };
                                    if (r.state.queueState.shuffle.value) {
                                        let e = n.indexOf(a),
                                            r = n.slice(e, 200),
                                            i = [...r].sort((e, t) => e - t).map((e) => t[e]),
                                            s = new Map(),
                                            o = r.map((e) => {
                                                var a;
                                                let r = t[e].playable_id,
                                                    n = null != (a = s.get(r)) ? a : -1,
                                                    o = i.findIndex((e, t) => t > n && e.playable_id === r);
                                                return s.set(r, o), o;
                                            }),
                                            l = i.findIndex((e) => e.playable_id === t[a].playable_id);
                                        return { playableList: i, currentPlayableIndex: l, playableIndices: o, livePlayableIndex: i.length };
                                    }
                                    let d = t[a].playable_id,
                                        u = Math.max(0, a - 100);
                                    u + 200 > t.length && (u = t.length - 200);
                                    let c = t.slice(u, u + 200),
                                        h = c.findIndex((e) => e.playable_id === d);
                                    return {
                                        playableList: c,
                                        currentPlayableIndex: h,
                                        livePlayableIndex: rO({ playableList: c, rangeStart: u, livePlayableIndex: l.value, isVibeQueue: o }),
                                        playableIndices: n,
                                    };
                                })({
                                    playableList: b,
                                    currentPlayableIndex: (function (e, t) {
                                        let {
                                                order: { value: a },
                                                index: { value: r },
                                                entityList: { value: i },
                                            } = e.state.queueState,
                                            s = a[r];
                                        if ('number' != typeof s) return -1;
                                        let n = i[s];
                                        return t.findIndex((e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === (null == n ? void 0 : n.entity.data.meta.id);
                                        });
                                    })(d, S),
                                    newIndexOrderMap: (function (e, t) {
                                        let a = new Map(),
                                            r = 0;
                                        for (let i = 0; i < e.length; i++) {
                                            let s = e[i];
                                            s && !t(s.entity) && (a.set(i, r), r++);
                                        }
                                        return a;
                                    })(d.state.queueState.entityList.value, rT),
                                    playback: d,
                                    variables: h,
                                }),
                                k = (function (e) {
                                    let { playback: t, playableList: a, firstNotPlayedVibeEntity: r } = e;
                                    if (!(0, e9.i)(t.state.currentContext.value) || !r) return [];
                                    let i = a.findLast((e) => String(r.entity.data.meta.id) === e.playable_id);
                                    return i ? [i] : [];
                                })({ playback: d, playableList: I, firstNotPlayedVibeEntity: E }),
                                T = rS(d, p.paused),
                                A = {
                                    duration_ms: rN(d),
                                    progress_ms: ((e) => {
                                        var t;
                                        let a = 1e3 * Math.floor(e.state.playerState.progress.value.position),
                                            r = rN(e);
                                        return (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context.data.type) === ec.K.Generative
                                            ? 0
                                            : a < r
                                              ? a
                                              : 0;
                                    })(d),
                                    paused: T,
                                    playback_speed: d.state.playerState.speed.value,
                                    version: (0, X.fD)(c),
                                },
                                D = ((e) => {
                                    var t, a;
                                    let r = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context;
                                    return (0, e9.i)(r) && (null == (a = r.data.meta.session) ? void 0 : a.radioSessionId)
                                        ? { session_id: r.data.meta.session.radioSessionId }
                                        : null;
                                })(d);
                            return {
                                active_device_id_optional: m,
                                devices: g,
                                player_state: {
                                    player_queue_inject_optional: y,
                                    status: h.useYnisonStatus ? p : A,
                                    player_queue: {
                                        entity_id: rA(d),
                                        entity_type: rD(null == (a = d.state.currentContext.value) ? void 0 : a.data.type),
                                        current_playable_index: _,
                                        playable_list: I,
                                        shuffle_optional: d.state.queueState.shuffle.value ? { playable_indices: P } : null,
                                        options: {
                                            repeat_mode: ((e) => {
                                                switch (e) {
                                                    case q.pM.NONE:
                                                        return re.NONE;
                                                    case q.pM.ONE:
                                                        return re.ONE;
                                                    case q.pM.CONTEXT:
                                                        return re.ALL;
                                                    default:
                                                        return re.NONE;
                                                }
                                            })(d.state.queueState.repeat.value),
                                        },
                                        entity_context: a6.BASED_ON_ENTITY_BY_DEFAULT,
                                        from_optional: null != (i = null == (r = d.state.currentContext.value) ? void 0 : r.from) ? i : null,
                                        initial_entity_optional: (0, tC.S)(null == (s = d.state.queueState.currentEntity.value) ? void 0 : s.context)
                                            ? { entity_id: rA(d), entity_type: rD(null == (n = d.state.currentContext.value) ? void 0 : n.data.type) }
                                            : null,
                                        adding_options_optional:
                                            (0, e9.i)(null == (o = d.state.queueState.currentEntity.value) ? void 0 : o.context) &&
                                            (null == (l = d.state.queueState.currentEntity.value) ? void 0 : l.context.data.meta.session)
                                                ? { radio_options: { session_id: d.state.queueState.currentEntity.value.context.data.meta.session.radioSessionId } }
                                                : null,
                                        queue: v
                                            ? {
                                                  wave_queue: {
                                                      recommended_playable_list: k,
                                                      live_playable_index: C,
                                                      entity_options: { track_sources: f, wave_entity_optional: D },
                                                      navigation_id_optional: null,
                                                      playback_action_id_optional: null,
                                                  },
                                              }
                                            : null,
                                        version: (0, X.fD)(c),
                                    },
                                },
                            };
                        })({
                            playback: this.playback,
                            ynisonStateController: this.ynisonStateController,
                            deviceId: this.deviceConfig.info.device_id,
                            variables: { ...this.variables, ...e },
                        });
                        this.ynisonStateController.updateState({ newState: t, skipVersionCompare: !0, trigger: 'YnisonPlugin' });
                    }, 0);
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a, variables: r }) {
                    (0, Y._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'ynisonStateController', void 0),
                        (0, Y._)(this, 'deviceConfig', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        (this.variables = r),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class rU {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rk({
                            playback: t,
                            factory: this.factory,
                            ynisonStateController: this.ynisonStateController,
                            variables: this.variables,
                            fallbackTypesQueueToVibe: this.fallbackTypesQueueToVibe,
                        }),
                        i = new rK({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig, variables: this.variables });
                    a.beforeEntityChange.tapPromise('YnisonPlugin', () => {
                        let {
                            currentEntity: { value: e },
                        } = t.state.queueState;
                        return e && (e.positionSec = void 0), Promise.resolve();
                    }),
                        a.beforeDestroy.tapPromise('YnisonPlugin', () => (r.destroy(), i.destroy(), Promise.resolve()));
                }
                constructor({ factory: e, deviceConfig: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i }) {
                    (0, Y._)(this, 'factory', void 0),
                        (0, Y._)(this, 'deviceConfig', void 0),
                        (0, Y._)(this, 'ynisonStateController', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.deviceConfig = t),
                        (this.ynisonStateController = a),
                        (this.variables = r),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []);
                }
            }
            class rj {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.volume.onChange(() => {
                        this.updateYnisonState();
                    });
                    this.unsubscribeFromPlayerEvents = () => {
                        e();
                    };
                }
                updateYnisonState() {
                    this.ynisonStateController.updateState({
                        trigger: 'YnisonValuePlugin',
                        newState: { ...this.ynisonStateController.currentState, devices: this.createDevices() },
                    });
                }
                createDevices() {
                    return this.ynisonStateController.currentState.devices.map((e) => {
                        var t;
                        return (
                            (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id &&
                                (e.volume_info = {
                                    volume: (0, X.F4)(this.playback.state.playerState.exponentVolume.value, this.deviceConfig.volumeGranularity),
                                    version: (0, X.fD)(this.deviceConfig.info.device_id),
                                }),
                            e
                        );
                    });
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a }) {
                    (0, Y._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'ynisonStateController', void 0),
                        (0, Y._)(this, 'deviceConfig', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class rX {
                onYnisonStateUpdated(e) {
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    if (e.diff.deviceVolume) {
                        let t = e.diff.deviceVolume.volume;
                        if (void 0 !== t) return this.changeVolume(t);
                    }
                    return Promise.resolve();
                }
                changeVolume(e) {
                    return this.playback.setExponentVolume(e), Promise.resolve();
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ playback: e, ynisonStateController: t, variables: a }) {
                    (0, Y._)(this, 'playback', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'unlisteners', void 0),
                        (this.playback = e),
                        (this.variables = a),
                        (this.unlisteners = []);
                    let r = t.on(X.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonVolumePlugin');
                    this.unlisteners.push(r), this.onYnisonStateUpdated(t.fullState);
                }
            }
            class rB {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rX({ playback: t, ynisonStateController: this.ynisonStateController, variables: this.variables }),
                        i = new rj({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig });
                    a.beforeDestroy.tapPromise('YnisonVolumePlugin', () => (r.destroy(), i.destroy(), Promise.resolve()));
                }
                constructor({ deviceConfig: e, ynisonStateController: t, variables: a }) {
                    (0, Y._)(this, 'deviceConfig', void 0),
                        (0, Y._)(this, 'ynisonStateController', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (this.deviceConfig = e),
                        (this.ynisonStateController = t),
                        (this.variables = a);
                }
            }
            let rV = [ec.K.Album, ec.K.Artist, ec.K.Playlist, ec.K.Various];
            class rW {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterContextEnd.tapPromise('AutoflowPlugin', () => {
                        var e, a, r;
                        if (!this.variables.enabled) return Promise.resolve();
                        let i = null == (e = t.state.currentContext.value) ? void 0 : e.data.type;
                        return (
                            (null == (a = t.state.currentContext.value) ? void 0 : a.data) &&
                                'enableVariousAutoFlow' in t.state.currentContext.value.data &&
                                (null == (r = t.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                                (i = ec.K.Various),
                            i && rV.includes(i) && this.playAutoflow(t),
                            Promise.resolve()
                        );
                    });
                }
                playAutoflow(e) {
                    var t, a, r;
                    let i,
                        s = null == (t = e.state.currentContext.value) ? void 0 : t.data.type;
                    (null == (a = e.state.currentContext.value) ? void 0 : a.data) &&
                        'enableVariousAutoFlow' in e.state.currentContext.value.data &&
                        (null == (r = e.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                        (s = ec.K.Various);
                    let n = ((e, t) => {
                            var a, r, i, s;
                            let n = null == (a = t.state.currentContext.value) ? void 0 : a.data;
                            if (n) {
                                if (e === ec.K.Album) return ['album:'.concat(n.meta.id)];
                                if (e === ec.K.Artist) return ['artist:'.concat(n.meta.id)];
                                if (e === ec.K.Playlist && 'owner' in n.meta && (null == (r = n.meta.owner) ? void 0 : r.uid) && 'kind' in n.meta && n.meta.kind)
                                    return ['playlist:'.concat(null == (i = n.meta.owner) ? void 0 : i.uid, '_').concat(n.meta.kind)];
                                if (e === ec.K.Various) {
                                    if ('overrideAutoflowSeeds' in n && n.overrideAutoflowSeeds) return n.overrideAutoflowSeeds;
                                    let e = null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity.data.meta.id;
                                    return ['track:'.concat(e)];
                                }
                            }
                        })(s, e),
                        o = e.state.currentContext.value;
                    this.variables.sendCorrectRotorQueueParam &&
                        (i = ej(
                            e.state.queueState.entityList.value.map((e) => eI(e.entity)),
                            e.state.queueState.index.value,
                            e.state.queueState.livePlayableIndex.value,
                        ));
                    let l = Object.create(null != o ? o : null);
                    if (!(s && n)) return;
                    let d = this.factory.createContext({
                        data: {
                            type: ec.K.Vibe,
                            meta: { id: (0, eG.f)(n) },
                            seeds: n,
                            from: ((e, t, a) => {
                                var r;
                                let i = null == (r = t.state.currentContext.value) ? void 0 : r.data;
                                if (!i) return '';
                                let s = e,
                                    n = t.state.queueState.entityList.value.length || 0;
                                return (
                                    s === ec.K.Various && 1 === n && (s = 'track'),
                                    e === ec.K.Various && 'overrideContextType' in i && i.overrideContextType && (s = i.overrideContextType),
                                    ''.concat(a, '-radio-').concat(s, '-autoflow')
                                );
                            })(s, e, this.platform),
                            includeTracksInResponse: !0,
                            parentContext: l,
                            interactive: !1,
                            queue: i,
                        },
                    });
                    e.playContext({ context: d, loadContextMeta: !0 });
                }
                constructor({ platform: e, factory: t, variables: a }) {
                    (0, Y._)(this, 'platform', void 0),
                        (0, Y._)(this, 'factory', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (this.platform = e),
                        (this.factory = t),
                        (this.variables = a);
                }
            }
            class rY {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.telemetry.createTelemetry(t),
                        this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion },
                            !0,
                        ),
                        t.state.playerState.status.onChange(() => {
                            this.telemetry.setPlayingState(t.state.playerState);
                        }),
                        t.state.playerState.event.onChange((e) => {
                            e && e !== q.Iu.UPDATING_PROGRESS && this.telemetry.logEvent({ name: e });
                        }),
                        a.afterError.tapPromise(
                            'TelemetryPlugin',
                            (e) => (e instanceof q.LI && this.telemetry.logError({ error: { ...e, isFatal: !1 } }), Promise.resolve()),
                        ),
                        a.beforeMediaStartPlaying.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentReload.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentPreload.tapPromise('TelemetryPlugin', (e) => (this.beforeMediaHandler(e), Promise.resolve()));
                }
                beforeMediaHandler(e) {
                    if (!e || tZ(e)) return;
                    let { mediaSourceData: t } = e;
                    t && 'vsid' in t && void 0 === t.vsid && (t.vsid = this.telemetry.vsid),
                        t && 'sourceIndex' in t && void 0 === t.sourceIndex && (t.sourceIndex = this.telemetry.onBeforeSetSource());
                    let a = (function (e) {
                            let { mediaSourceData: t } = e;
                            if (!t) return;
                            let { data: a } = t;
                            return { streamUrl: t.src, ...a };
                        })(e),
                        r = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                    a &&
                        (this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion, testIds: r, ...a },
                            !0,
                        ),
                        this.telemetry.onSetSource(a));
                }
                constructor({ telemetry: e, puid: t, yaspVersion: a, getTelemetryTestIds: r }) {
                    (0, Y._)(this, 'telemetry', void 0),
                        (0, Y._)(this, 'puid', void 0),
                        (0, Y._)(this, 'yaspVersion', void 0),
                        (0, Y._)(this, 'getTelemetryTestIds', void 0),
                        (this.telemetry = e),
                        (this.puid = t),
                        (this.yaspVersion = a),
                        (this.getTelemetryTestIds = r);
                }
            }
            class rq {
                setQuality(e) {
                    this.quality.value = e;
                }
                constructor(e) {
                    (0, Y._)(this, 'quality', new eg.cJ(aG.e.BALANCED)), (0, Y._)(this, 'isCrossfadeEnabled', new eg.cJ(!0)), this.setQuality(e);
                }
            }
            function rz(e) {
                return (null == e ? void 0 : e.data.type) === H.R.Radio;
            }
            class rH {
                get src() {
                    let e = this.getQueryParamsString();
                    return e ? ''.concat(this.data.url).concat(e) : this.data.url;
                }
                getQueryParamsString() {
                    let e = new URLSearchParams();
                    this.vsid && e.append('vsid', this.vsid), void 0 !== this.sourceIndex && e.append('source_index', String(this.sourceIndex));
                    let t = e.toString();
                    return t ? '?'.concat(t) : void 0;
                }
                constructor(e) {
                    (0, Y._)(this, 'type', 'generativeSource'),
                        (0, Y._)(this, 'data', void 0),
                        (0, Y._)(this, 'vsid', void 0),
                        (0, Y._)(this, 'sourceIndex', void 0),
                        (0, Y._)(this, 'getFileInfoResponseTime', void 0),
                        (0, Y._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            class rQ extends au {
                constructor(e, { code: t = 'E_GENERATIVE_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'GenerativeMediaProviderException'), Object.setPrototypeOf(this, rQ.prototype);
                }
            }
            class r$ {
                getMediaSource(e) {
                    if (af(e.entity)) {
                        var t;
                        if (null == (t = e.entity.data.meta.stream) ? void 0 : t.url) {
                            let t = new rH({ data: e.entity.data.meta.stream });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(new rQ('Failed to create generative src link', { code: P.E_GET_MEDIA_SRC }));
                    }
                    return Promise.reject(new rQ('Provided entity is not generative entity', { code: P.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            var rZ = a(79713),
                rJ = a(75807),
                r0 = a(17129);
            class r1 {
                getPreloadedFileInfo(e) {
                    let { entity: t, disableCache: a = !1 } = e;
                    if (!(a || a0(t, this.mediaSourceTtlMs, this.mediaConfigController)) && t.mediaSourceData && 'downloadInfoSource' === t.mediaSourceData.type)
                        return t.mediaSourceData.data;
                }
                getFileInfoFromResource(e) {
                    let { trackId: t, quality: a, codecs: r, transports: i } = e,
                        s = (0, rZ.T)(),
                        n = r.join(''),
                        o = i.join(''),
                        l = ''.concat(s).concat(t).concat(a).concat(n).concat(o);
                    return new Promise((e, o) => {
                        this.tools
                            .createSign({ data: l, secretKey: this.secretKey })
                            .then((l) => {
                                this.resource
                                    .getFileInfo({
                                        tsInSeconds: s,
                                        trackId: t,
                                        quality: a,
                                        codecs: r,
                                        transports: i,
                                        sign: l,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((t) => {
                                        e({ downloadInfo: t.downloadInfo, responseTime: t.responseTime, url: t.url });
                                    })
                                    .catch((e) => {
                                        o(new ac('Error in get-file-info request', { code: P.E_GET_MEDIA_SRC, cause: e, data: { trackId: t, quality: a, codecs: n } }));
                                    });
                            })
                            .catch((e) => {
                                o(
                                    new ac('Error in creating sign for get-file-info request', {
                                        code: P.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: t, quality: a, codecs: n },
                                    }),
                                );
                            });
                    });
                }
                getFileInfo(e) {
                    let { entity: t, disableCache: a = !1, codecs: r, quality: i, transports: s } = e;
                    if (this.variables.isMediaSourcePreloadEnabled)
                        try {
                            let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
                            if (e) return Promise.resolve({ downloadInfo: e });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    return this.getFileInfoFromResource({ trackId: t.data.meta.id, quality: i, codecs: r, transports: s });
                }
                getMediaSource(e) {
                    let { entity: t, disableCache: a = !1 } = e,
                        r = (0, rJ.i)({ productQuality: this.mediaConfigController.quality.value, entity: t }),
                        i = (0, te.l)(t) ? aL.o.RAW : this.transport;
                    return (
                        (t.expectedQuality = r),
                        this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [i], codecs: this.codecs }).then((e) => {
                            let { downloadInfo: i, responseTime: s, url: n } = e;
                            if (!('error' in i) && !r0.DM.includes(i.codec) && i.transport === aL.o.ENCRAW)
                                return (
                                    (t.mediaSourceData = null),
                                    this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [aL.o.RAW], codecs: this.codecs })
                                        .then((e) => {
                                            let { downloadInfo: a, responseTime: i, url: s } = e,
                                                n = this.createMediaSource({
                                                    downloadInfo: a,
                                                    trackId: t.data.meta.id,
                                                    quality: r,
                                                    codecs: this.codecs,
                                                    getFileInfoResponseTime: i,
                                                    getFileInfoUrl: s,
                                                });
                                            return (t.mediaSourceData = n), (t.expectedQuality = r), n;
                                        })
                                        .catch((e) => {
                                            let a = this.createMediaSource({
                                                downloadInfo: i,
                                                trackId: t.data.meta.id,
                                                quality: r,
                                                codecs: this.codecs,
                                                getFileInfoResponseTime: s,
                                            });
                                            throw (
                                                ((t.mediaSourceData = a),
                                                new ac('Error in get-file-info retry enclaw request', {
                                                    code: P.E_GET_MEDIA_SRC,
                                                    cause: e,
                                                    data: { trackId: t.data.meta.id, quality: r, codecs: this.codecs.join('') },
                                                }))
                                            );
                                        })
                                );
                            let o = this.createMediaSource({
                                downloadInfo: i,
                                trackId: t.data.meta.id,
                                quality: r,
                                codecs: this.codecs,
                                getFileInfoResponseTime: s,
                                getFileInfoUrl: n,
                            });
                            return (t.mediaSourceData = o), o;
                        })
                    );
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e,
                        a = (0, rZ.T)(),
                        r = (0, rJ.i)({ productQuality: this.mediaConfigController.quality.value, entities: t }),
                        i = this.codecs.join(''),
                        s = t.reduce((e, t) => ''.concat(e).concat(t.data.meta.id, ','), '').slice(0, -1),
                        n = t.some((e) => (0, te.l)(e)) ? aL.o.RAW : this.transport,
                        o = ''.concat(a).concat(s).concat(r).concat(i).concat(n);
                    return new Promise((e, l) => {
                        this.tools
                            .createSign({ data: o, secretKey: this.secretKey })
                            .then((o) => {
                                this.resource
                                    .getFileInfoBatch({
                                        tsInSeconds: a,
                                        trackIds: s,
                                        quality: r,
                                        codecs: this.codecs,
                                        transports: [n],
                                        sign: o,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((a) => {
                                        try {
                                            for (let e of a.downloadInfos) {
                                                let a = t.find((t) => t.data.meta.id === e.trackId);
                                                a &&
                                                    ((a.mediaSourceData = this.createMediaSource({
                                                        downloadInfo: e,
                                                        trackId: e.trackId,
                                                        quality: r,
                                                        codecs: this.codecs,
                                                    })),
                                                    (a.expectedQuality = r));
                                            }
                                            e(a.downloadInfos);
                                        } catch (e) {
                                            l(e);
                                        }
                                    })
                                    .catch((e) => {
                                        l(
                                            new ac('Error in get-file-info/batch request', {
                                                code: P.E_GET_MEDIA_SRC,
                                                cause: e,
                                                data: { trackId: s, quality: r, codecs: i },
                                            }),
                                        );
                                    });
                            })
                            .catch((e) => {
                                l(
                                    new ac('Error in creating sign for get-file-info request', {
                                        code: P.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: s, quality: r, codecs: i },
                                    }),
                                );
                            });
                    });
                }
                createMediaSource(e) {
                    let { downloadInfo: t, trackId: a, codecs: r, quality: i, getFileInfoResponseTime: s, getFileInfoUrl: n } = e,
                        o = r.join('');
                    if ('error' in t)
                        throw new ac('Error message in get-file-info response', { code: P.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    if (!t.urls[0])
                        throw new ac('No urls in get-file-info response', { code: P.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    return new aM({ data: t, loadingTime: performance.now(), getFileInfoResponseTime: s, url: n });
                }
                constructor(e) {
                    var t;
                    (0, Y._)(this, 'secretKey', void 0),
                        (0, Y._)(this, 'resource', void 0),
                        (0, Y._)(this, 'mediaConfigController', void 0),
                        (0, Y._)(this, 'transport', void 0),
                        (0, Y._)(this, 'codecs', void 0),
                        (0, Y._)(this, 'variables', void 0),
                        (0, Y._)(this, 'mediaSourceTtlMs', void 0),
                        (0, Y._)(this, 'tools', void 0);
                    let { resource: a, secretKey: r, mediaConfigController: i, transport: s, variables: n, mediaSourceTtlMs: o, codecs: l, tools: d } = e;
                    (this.resource = a),
                        (this.secretKey = r),
                        (this.mediaConfigController = i),
                        (this.transport = s),
                        (this.codecs = l),
                        (this.variables = {
                            isMediaSourcePreloadEnabled: null != (t = null == n ? void 0 : n.isMediaSourcePreloadEnabled) && t,
                            fromPromoLanding: null == n ? void 0 : n.fromPromoLanding,
                        }),
                        (this.mediaSourceTtlMs = null != o ? o : 0),
                        (this.tools = d || r0.$n);
                }
            }
            class r5 {
                get src() {
                    return this.data.src;
                }
                constructor(e) {
                    (0, Y._)(this, 'type', 'clipSource'),
                        (0, Y._)(this, 'data', void 0),
                        (0, Y._)(this, 'vsid', void 0),
                        (0, Y._)(this, 'getFileInfoResponseTime', void 0),
                        (0, Y._)(this, 'url', void 0),
                        (this.data = e.data);
                }
            }
            class r4 {
                getMediaSource(e) {
                    let { entity: t } = e;
                    if (ty(t)) {
                        let e = new r5({
                            data: { src: ''.concat(this.vhUrl).concat(t.data.meta.playerId, '?service=').concat(this.service, '&from=').concat(this.from) },
                        });
                        return (t.mediaSourceData = e), Promise.resolve(e);
                    }
                    return Promise.reject(new ei.t('Provided entity is not clip entity', { code: P.E_UNSUITABLE_ENTITY_TYPE }));
                }
                constructor({ service: e, from: t, vhUrl: a }) {
                    (0, Y._)(this, 'service', void 0),
                        (0, Y._)(this, 'from', void 0),
                        (0, Y._)(this, 'vhUrl', void 0),
                        (this.service = e),
                        (this.from = t),
                        (this.vhUrl = a);
                }
            }
            class r9 {
                get src() {
                    let e = new URL(this.data.streamUrl);
                    return (
                        this.vsid && e.searchParams.set('vsid', this.vsid),
                        void 0 !== this.sourceIndex && e.searchParams.set('source_index', String(this.sourceIndex)),
                        e.toString()
                    );
                }
                constructor(e) {
                    (0, Y._)(this, 'type', 'radioSource'),
                        (0, Y._)(this, 'data', void 0),
                        (0, Y._)(this, 'vsid', void 0),
                        (0, Y._)(this, 'sourceIndex', void 0),
                        (0, Y._)(this, 'getFileInfoResponseTime', void 0),
                        (0, Y._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            class r3 extends au {
                constructor(e, { code: t = 'E_RADIO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, Y._)(this, 'name', 'RadioMediaProviderException'), Object.setPrototypeOf(this, r3.prototype);
                }
            }
            class r2 {
                getMediaSource(e) {
                    if (rz(e.entity)) {
                        if (e.entity.data.meta.streamUrl) {
                            let t = new r9({ data: { streamUrl: e.entity.data.meta.streamUrl } });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(
                            new r3('Failed to create fm radio src link because the "streamUrl" property is missing in the entity meta', { code: P.E_GET_MEDIA_SRC }),
                        );
                    }
                    return Promise.reject(new r3('Provided entity is not fm radio entity', { code: P.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            class r7 {
                async getMediaSource(e) {
                    return af(e.entity)
                        ? this.generativeProvider.getMediaSource(e)
                        : ty(e.entity)
                          ? this.vhMediaProvider.getMediaSource(e)
                          : rz(e.entity)
                            ? this.radioProvider.getMediaSource(e)
                            : this.getFileInfoProvider.getMediaSource(e);
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e;
                    return t.some((e) => af(e))
                        ? Promise.reject(new au('Can not use getMediaSourceBatch for generative entities', { code: P.E_UNSUITABLE_ENTITY_TYPE }))
                        : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
                }
                constructor(e) {
                    (0, Y._)(this, 'generativeProvider', new r$()),
                        (0, Y._)(this, 'radioProvider', new r2()),
                        (0, Y._)(this, 'getFileInfoProvider', void 0),
                        (0, Y._)(this, 'vhMediaProvider', void 0),
                        (this.getFileInfoProvider = new r1(e.getFileInfoProviderParams)),
                        (this.vhMediaProvider = new r4(e.vhMediaProviderParams));
                }
            }
            class r6 {
                async loadEntities(e) {
                    let { trackIds: t } = (function (e) {
                            let t = [];
                            return (
                                e.forEach((e) => {
                                    let { context: a, entity: r } = e,
                                        i = r.data.meta.id,
                                        s = 'string' == typeof i && i.includes(':');
                                    if (!r.data.fromCurrentContext || s) return void t.push(r.data.meta.id);
                                    (0, e7.F)(a) && (i = ''.concat(r.data.meta.id, ':').concat(a.data.meta.id)),
                                        'albumId' in r.data.meta && r.data.meta.albumId && (i = ''.concat(r.data.meta.id, ':').concat(r.data.meta.albumId)),
                                        t.push(i);
                                }, {}),
                                { trackIds: t }
                            );
                        })(e),
                        a = e.some((e) => {
                            let { context: t } = e;
                            return (0, e9.i)(t);
                        });
                    return this.resource
                        .getTracksMeta({ trackIds: t, withProgress: !0, withMixData: a })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id).includes(String(r.id)));
                                if (t) {
                                    let e = t.entity.data.type === q.z4.Unloaded ? H.R.Unknown : t.entity.data.type;
                                    e !== H.R.Clip && a.push({ ...t.entity.data, type: e, meta: r, loadEntityMeta: !1 });
                                }
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new ei.t('Failed to get track meta', { code: 'E_TRACK_META_PROVIDER', cause: (0, W.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, Y._)(this, 'resource', void 0);
                    let { tracksResource: t } = e;
                    this.resource = t;
                }
            }
            class r8 {
                loadEntities(e) {
                    let t = e.map((e) => e.entity.data.meta.id);
                    return this.resource
                        .getClip({ clipIds: t })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id) === String(r.clipId));
                                t && a.push({ ...t.entity.data, type: H.R.Clip, meta: { id: r.clipId, ...r }, loadEntityMeta: !1 });
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new ei.t('Failed to get clip meta', { code: 'E_CLIP_META_PROVIDER', cause: (0, W.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, Y._)(this, 'resource', void 0), (this.resource = e.clipsResource);
                }
            }
            class ie {
                loadEntities(e) {
                    return e.some((e) => ty(e.entity)) ? this.clipMetaProvider.loadEntities(e) : this.trackMetaProvider.loadEntities(e);
                }
                constructor(e) {
                    (0, Y._)(this, 'trackMetaProvider', void 0),
                        (0, Y._)(this, 'clipMetaProvider', void 0),
                        (this.trackMetaProvider = new r6({ tracksResource: e.tracksResource })),
                        (this.clipMetaProvider = new r8({ clipsResource: e.clipsResource }));
                }
            }
            (U || (U = {})).MAIN = 'MAIN';
            class it {
                get availablePlaybacks() {
                    return Array.from(this.playbacks.values());
                }
                afterPlayHandler(e) {
                    return (this.activePlayback.value = e), Promise.resolve();
                }
                beforePlayHandler(e) {
                    return this.activePlayback.value && this.activePlayback.value !== e ? this.activePlayback.value.pause() : Promise.resolve();
                }
                beforeDestroyHandler(e) {
                    return e.stop();
                }
                getPlayback(e) {
                    if (e) {
                        let t = this.playbacks.get(e);
                        if (t) return t;
                    }
                    let t = this.playbacks.get(U.MAIN);
                    if (void 0 !== t) return t;
                    throw new ei.t('MAIN playback was not created', { code: 'NO_MAIN_PLAYBACK' });
                }
                checkPlaybackBlockingStatus() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U.MAIN,
                        r = null == (e = this.activePlayback.value) ? void 0 : e.getId(),
                        i = r === a;
                    return ((null == (t = this.activePlayback.value) ? void 0 : t.isBlocking) || i) && !i
                        ? { status: q.N.BLOCKED, blockingPlaybackId: r }
                        : { status: q.N.UNBLOCKED };
                }
                callIfUnblocked(e, t) {
                    let { status: a, blockingPlaybackId: r } = this.checkPlaybackBlockingStatus(t);
                    return a === q.N.UNBLOCKED
                        ? e()
                        : (this.getPlayback(t).hooks.afterPlaybackCheckBlockingStatus.promise({ status: a, blockingPlaybackId: r }), Promise.resolve());
                }
                createPlayback(e, t) {
                    if (!this.playbacks.has(e)) {
                        let a = new q.VE({
                            id: e,
                            isBlocking: t.isBlocking || !1,
                            factory: t.factory,
                            entityProvider: t.entityProvider,
                            mediaPlayerParams: t.mediaPlayerParams,
                            playbackConfig: t.playbackConfig,
                            variables: t.variables,
                        });
                        this.playbacks.set(e, a),
                            a.hooks.afterMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.afterMediaResume.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaResume.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.beforeDestroy.tapPromise('MusicPlaybackController', () => this.beforeDestroyHandler(a)),
                            this.syncWithMainPlayback(a, t.syncVolumeWithMainPlayback);
                    }
                }
                syncWithMainPlayback(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e.getId() === U.MAIN)
                        return void this.playbacksWaitingForSync.forEach((t) => {
                            this.syncVolume(e, t);
                        });
                    let a = this.playbacks.get(U.MAIN);
                    if (t && a) return void this.syncVolume(a, e);
                    t && !a && this.playbacksWaitingForSync.push(e);
                }
                syncVolume(e, t) {
                    (this.useExponentVolume ? e.state.playerState.exponentVolume : e.state.playerState.volume).onChange((e) => {
                        void 0 !== e && this.useExponentVolume ? t.setExponentVolume(e) : void 0 === e || this.useExponentVolume || t.setVolume(e);
                    });
                }
                constructor(e) {
                    (0, Y._)(this, 'activePlayback', new eg.cJ(null)),
                        (0, Y._)(this, 'playbacks', new Map()),
                        (0, Y._)(this, 'playbacksWaitingForSync', []),
                        (0, Y._)(this, 'useExponentVolume', void 0),
                        (this.useExponentVolume = !!e.useExponentVolume);
                }
            }
            class ia {
                get state() {
                    return this.playbackController.getPlayback().state;
                }
                getState(e) {
                    return this.playbackController.getPlayback(e).state;
                }
                playContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.playContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof q.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                setContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.setContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof q.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                restartContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.restartContext({ playAfterRestart: e.playAfterRestart, entitiesData: e.entitiesData, queueParams: e.queueParams }).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                play(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.play().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                stop(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.stop().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                pause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.pause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                resume(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.resume().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setProgress(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setSpeed(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)), t);
                }
                slideForward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideForward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                slideBackward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideBackward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                moveForward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveForward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                moveBackward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveBackward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setEntityByIndex(e, t, a) {
                    let r = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            r.setEntityByIndex(e, a).catch((e) => {
                                r.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                togglePause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.togglePause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                toggleShuffle(e) {
                    let t = this.playbackController.getPlayback(e);
                    try {
                        this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
                    } catch (e) {
                        t.hooks.afterError.promise(e);
                    }
                }
                setShuffle(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                updateFilterParams(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.updateFilterParams(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                bindPlayer(e) {
                    this.playbackController.getPlayback(e).bindPlayer();
                }
                unbindPlayer(e) {
                    this.playbackController.getPlayback(e).unbindPlayer();
                }
                setRepeatMode(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setRepeatMode(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                removeAndLoadEntities(e) {
                    let { positions: t, playbackId: a, silent: r } = e,
                        i = this.playbackController.getPlayback(a);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            i.removeAndLoadEntities(t, r).catch((e) => {
                                i.hooks.afterError.promise(e);
                            }),
                        a,
                    );
                }
                remove(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.remove(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.removeByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                hide(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.hide(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.hideByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                inject(e) {
                    let { entitiesData: t, position: a, playbackId: r, silent: i, sourceContextData: s } = e,
                        n = this.playbackController.getPlayback(r),
                        o = s ? this.factory.createContext({ data: s }) : void 0;
                    this.playbackController.callIfUnblocked(() => n.inject({ entitiesData: t, position: a, silent: i, sourceContext: o }), r);
                }
                injectNext(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectNext({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                injectLast(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectLast({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                registerMediaPlayer(e) {
                    let { mediaPlayerParams: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).registerMediaPlayer(t);
                }
                setVideoCoreContainer(e) {
                    let { container: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).setVideoCoreContainer(t);
                }
                destroyVideoCore(e) {
                    this.playbackController.getPlayback(e).destroyVideoCore();
                }
                destroy() {
                    return Promise.allSettled(this.playbackController.availablePlaybacks.map((e) => e.hooks.beforeDestroy.promise()));
                }
                constructor(e) {
                    if (
                        ((0, Y._)(this, 'factory', void 0),
                        (0, Y._)(this, 'playbackController', void 0),
                        (this.factory = e.factory),
                        (this.playbackController = e.playbackController),
                        this.playbackController.createPlayback(U.MAIN, {
                            factory: e.factory,
                            mediaPlayerParams: e.mediaPlayerParams,
                            entityProvider: e.entityProvider,
                            playbackConfig: e.playbackConfig,
                            variables: e.variables,
                        }),
                        e.plugins)
                    ) {
                        let t = this.playbackController.getPlayback(U.MAIN);
                        for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
                    }
                }
            }
            var ir = a(54280),
                ii = a(54068),
                is = a(29408),
                io = a(15881);
            a(25500);
            var il = a(32629),
                id = a(49574),
                iu = a(44574);
            let ic = (e) => {
                let { audioLoader: t, children: a } = e;
                return (0, V.use)(t), a;
            };
            var ih = a(92708),
                ig = a(97552);
            let im = (0, B.PA)(() => {
                let e = (0, ig.Sq)(),
                    t = (0, id.iIU)(),
                    { sonataState: a } = (0, id.Pjs)();
                (0, V.useEffect)(() => {
                    e.loadPresets();
                }, [e]),
                    (0, V.useEffect)(() => {
                        e.isAvailable &&
                            (null == t ? void 0 : t.equalizer.value) &&
                            (e.isEnabled
                                ? (e.currentPreset && t.equalizer.value.applyPreset((0, ih.HO)(e.currentPreset)), t.equalizer.value.enable())
                                : t.equalizer.value.disable());
                    }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer, a.areCoresRegistered, e.isAvailable]);
            });
            var iy = a(6752),
                ip = a(60900);
            let iv = (0, B.PA)((e) => {
                    let { isYnisonDisabled: t } = e,
                        { experiments: a, slam: r } = (0, id.Pjs)(),
                        i = (0, id.NFA)(),
                        s = (0, iy.L)(() => !!t || (void 0 === r.isOfflineModeEnabled ? (0, id.gHp)(i.get(id.U2_)) : r.isOfflineModeEnabled)),
                        n = a.checkExperiment(id.zal.WebNextYnisonActivityInterception, 'on');
                    (0, V.useEffect)(() => {
                        i.get(id.byd).updateVariables({ isShadow: !n });
                    }, [i, n]),
                        ((e) => {
                            let t = (0, id.NFA)(),
                                { formatMessage: a } = (0, ip.A)(),
                                { experiments: r } = (0, id.Pjs)(),
                                i = (0, V.useRef)(null),
                                s = r.checkExperiment(id.zal.WebNextYnisonNetworkMonitoring, 'on');
                            (0, V.useEffect)(() => {
                                let e = t.get(id.byd),
                                    r = a({ id: 'ynison.desktop-device-title' }, { platformName: (0, id.t1V)((0, id.uoh)()), hostname: (0, id.akQ)() });
                                e.updateDeviceInfo({ title: r });
                            }, [t, a]);
                            let { networkMonitorRef: n } = ((e) => {
                                let { isConnectionDisabled: t, isNetworkMonitoringEnabled: a, checkConnectionReasonRef: r } = e,
                                    i = (0, id.NFA)(),
                                    s = (0, V.useRef)(null);
                                return (
                                    (0, V.useEffect)(() => {
                                        if (t || !a) return;
                                        let e = i.get(id.VRD)();
                                        s.current = e;
                                        let n = e.subscribe((e) => {
                                            if ('online' === e) {
                                                var t;
                                                null == (t = r.current) || t.call(r);
                                            }
                                        });
                                        return () => {
                                            n(), e.dispose(), s.current === e && (s.current = null);
                                        };
                                    }, [r, i, t, a]),
                                    { networkMonitorRef: s }
                                );
                            })({ isConnectionDisabled: e.isConnectionDisabled, isNetworkMonitoringEnabled: s, checkConnectionReasonRef: i });
                            (0, V.useEffect)(() => {
                                let a = t.get(id.byd);
                                if (e.isConnectionDisabled) return void a.connector.disconnect();
                                let r = () => {
                                    if (!document.hidden) {
                                        var e;
                                        (s && (null == (e = n.current) ? void 0 : e.getStatus()) === 'offline') ||
                                            a.connector.connect({ oauth: t.get(id.QGx).token, multiAuthUserId: t.get(id.WA$).getPassportUid() });
                                    }
                                };
                                i.current = r;
                                let o = a.stateController.on(
                                    X.p$.UPDATED,
                                    (e) => {
                                        a.isActive || e.prevState.active_device_id_optional !== a.deviceConfig.info.device_id || r();
                                    },
                                    'App',
                                );
                                return (
                                    document.addEventListener('visibilitychange', r),
                                    r(),
                                    () => {
                                        o(), document.removeEventListener('visibilitychange', r), i.current === r && (i.current = null);
                                    }
                                );
                            }, [t, s, n, e.isConnectionDisabled, e.isYnisonActivityInterceptionEnabled]),
                                ((e) => {
                                    let t = (0, id.NFA)(),
                                        a = (0, V.useRef)(0),
                                        { experiments: r } = (0, id.Pjs)(),
                                        i = r.checkExperiment(id.zal.WebNextYnisonInactiveTimerDesktop, 'on'),
                                        s = r.getExperiment(id.zal.WebNextYnisonInactiveTimerDesktop);
                                    (0, V.useEffect)(() => {
                                        if (!e.isEnabled) return;
                                        let { inactiveTimeoutMs: r, inactiveCheckIntervalMs: n } = (function (e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                    a = { inactiveTimeoutMs: 6e5, inactiveCheckIntervalMs: 3e4 };
                                                try {
                                                    var r, i, s, n;
                                                    if (
                                                        e &&
                                                        (null == (i = t.value) || null == (r = i.metadata) ? void 0 : r.inactiveTimeoutSec) &&
                                                        (null == (n = t.value) || null == (s = n.metadata) ? void 0 : s.inactiveCheckIntervalSec)
                                                    ) {
                                                        let e = Number(t.value.metadata.inactiveTimeoutSec),
                                                            a = Number(t.value.metadata.inactiveCheckIntervalSec);
                                                        if (!Number.isNaN(e) && !Number.isNaN(a)) return { inactiveTimeoutMs: 1e3 * e, inactiveCheckIntervalMs: 1e3 * a };
                                                    }
                                                    return a;
                                                } catch (e) {
                                                    return a;
                                                }
                                            })(i, s),
                                            o = setInterval(() => {
                                                let e = t.get(id.byd),
                                                    i = e.isActive,
                                                    s = Date.now() - a.current > r,
                                                    n = e.stateController.currentState.player_state.status.paused;
                                                i && s && n && e.becomePassive();
                                            }, n);
                                        return () => {
                                            clearInterval(o);
                                        };
                                    }, [t, e.isEnabled, i, s]),
                                        (0, V.useEffect)(() => {
                                            if (!e.isEnabled) return;
                                            let r = t.get(id.byd),
                                                i = r.stateController.on(
                                                    X.p$.UPDATED,
                                                    (e) => {
                                                        var t, i;
                                                        ((null == (t = e.diff) ? void 0 : t.player_state) ||
                                                            ((null == (i = e.diff) ? void 0 : i.active_device_id_optional) && r.isActive)) &&
                                                            (a.current = Date.now());
                                                    },
                                                    'App',
                                                );
                                            return () => {
                                                i();
                                            };
                                        }, [t, e.isEnabled]);
                                })({ isEnabled: !e.isConnectionDisabled || !e.isYnisonActivityInterceptionEnabled });
                        })({ isConnectionDisabled: s, isYnisonActivityInterceptionEnabled: n }),
                        (0, V.useEffect)(() => {
                            if (s || !n) return;
                            let e = i.get(id.byd),
                                t = e.stateController.on(
                                    X.p$.UPDATED,
                                    () => {
                                        var t, a;
                                        let r = (null == (a = e.stateController.fullState.diff.player_state) || null == (t = a.status) ? void 0 : t.paused) === !1;
                                        !e.isActive && r && (window?.YNISON_INTERCEPT_PLAYBACK ?? false) && e.interceptActivity();
                                    },
                                    'App',
                                );
                            return () => {
                                t();
                            };
                        }, [i, s, n]);
                }),
                iS = (e) => {
                    let { children: t } = e,
                        a = (0, id.iIU)(),
                        r = (0, id.Yx9)(),
                        [i] = (0, V.useState)(() => ig.ML.create({ isEnabled: !1, modal: {} }, r));
                    return (
                        (0, V.useEffect)(() => {
                            let e =
                                null == a
                                    ? void 0
                                    : a.equalizer.onChange((e) => {
                                          i.setIsAvailable(!!e);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [i, null == a ? void 0 : a.equalizer]),
                        (0, j.jsx)(ig.iV.Provider, { value: i, children: t })
                    );
                },
                iE = !1,
                ib = new Set([U.MAIN, id.V_r.TRAILER, id.V_r.PROMO_LANDING, id.V_r.CLIP]);
            var iP = a(6612);
            let i_ = null,
                iI = null,
                iC = null,
                ik = null,
                iT = null,
                iA = null,
                iD = null,
                iN = null,
                iR = null,
                ix = null,
                iL = [id.cYZ.YmPlayerQuality, id.cYZ.YmPlayerShuffle, id.cYZ.YmPlayerPrevVolume, id.cYZ.YmPlayerVolume, id.cYZ.YmPlayerRepeatMode, id.cYZ.CrossFadeMode],
                iw = (e) => {
                    var t, r, i;
                    let { children: s, hostTld: n, quality: o, withPromoLandingPlayback: l } = e,
                        d = (0, id.NFA)(),
                        {
                            sonataState: u,
                            experiments: c,
                            library: h,
                            trailer: g,
                            user: m,
                            advert: y,
                            settings: p,
                            promolanding: { state: v },
                            album: S,
                            albumCPA: { isPlusCPAPlayerBarEnabled: E },
                        } = (0, id.Pjs)(),
                        { isPassToProduct: f, isFreemium: b } = (0, id.XCI)(),
                        P = (0, id.UlF)(),
                        _ = d.get(id.ooW),
                        I = d.get(id.QGx),
                        C = d.get(id.twC),
                        k = d.get(id.P0Z),
                        { language: T } = (0, id.h6b)(),
                        A = (0, id.rs2)(),
                        D = (0, id.Gdz)(),
                        N = c.checkExperiment(id.zal.WebNextCrossMediaPlayer, 'on'),
                        R = !m.isAuthorized || f || b,
                        x = m.isAuthorized && !b,
                        L = k.get(id.qVS),
                        w = k.get(id.W4E),
                        O = !!L && !!_.get(id.cYZ.EnableMetricsPluginDebugMode),
                        M = !!L && !!_.get(id.cYZ.EnableYnisonMetricsDebugMode),
                        F = (0, V.useMemo)(() => (i_ || (i_ = new rq(o)), i_), [o]),
                        G = (() => {
                            let e = (0, id.NFA)(),
                                { experiments: t } = (0, id.Pjs)(),
                                a = e.get(id.twC),
                                r = a.player.yaspExpName,
                                i = a.player.yaspCandidateVersion;
                            return r && i && t.checkExperiment(r, 'on') ? i : a.player.yaspVersionStable;
                        })(),
                        K = (() => {
                            let e = (0, id.NFA)(),
                                { experiments: t } = (0, id.Pjs)(),
                                {
                                    player: { yaspSourceLimit: a },
                                } = e.get(id.twC);
                            try {
                                var r;
                                let e = t.checkExperiment(id.zal.WebNextYaspSourceLimit, 'on'),
                                    i = t.getExperiment(id.zal.WebNextYaspSourceLimit);
                                if (e && (null == i || null == (r = i.value.metadata) ? void 0 : r.yaspSourceLimit)) {
                                    let e = Number(i.value.metadata.yaspSourceLimit);
                                    if (!Number.isNaN(e)) return e;
                                }
                                return a;
                            } catch (e) {
                                return a;
                            }
                        })(),
                        U = (() => {
                            let { experiments: e } = (0, id.Pjs)();
                            try {
                                var t;
                                let a = e.checkExperiment(id.zal.WebNextResetWaveSeeds, 'on'),
                                    r = e.getExperiment(id.zal.WebNextResetWaveSeeds);
                                if (a && (null == r || null == (t = r.value.metadata) ? void 0 : t.sessionLifeTimeMin)) {
                                    let e = Number(r.value.metadata.sessionLifeTimeMin);
                                    if (!Number.isNaN(e)) return { enabled: !0, sessionLifeTimeMin: e };
                                }
                                return { enabled: !1 };
                            } catch (e) {
                                return { enabled: !1 };
                            }
                        })(),
                        B = p.browserInfo,
                        Y = 'Safari' !== B.name && 'iOS' !== B.OSFamily,
                        q = (null == B ? void 0 : B.isTouch) && E(S.id, null == (t = S.meta) ? void 0 : t.isNonMusic),
                        z =
                            !(null == B ? void 0 : B.isTouch) &&
                            m.isAuthorized &&
                            !m.hasPlus &&
                            (null == (i = c.getExperiment(id.zal.WebNextDesktopWebFreemium)) || null == (r = i.value) ? void 0 : r.limitListening) === 'on',
                        H = (0, V.useMemo)(
                            () =>
                                iC ||
                                (iC = new tm({
                                    useAnalyser: Y,
                                    useEqualizer: Y,
                                    useFade: !1,
                                    useCrossFade: N,
                                    crossFadeConfig: { useVolumeForAudioEffect: !Y, useWorker: !!window.Worker },
                                })),
                            [Y, N, Y],
                        ),
                        Q = (0, V.useMemo)(() => {
                            if (null !== ik) return ik;
                            let e = d.get(id.gdC);
                            return (ik = new tp({
                                advertModule: A,
                                afterTrackResource: d.get(id.EN6),
                                adsResource: e,
                                variables: {
                                    get enabled() {
                                        return !m.hasPlus;
                                    },
                                },
                            }));
                        }, [A, d, m.hasPlus]),
                        Z = (0, V.useMemo)(() => {
                            if (iA) return iA;
                            let e = d.get(id.qTR),
                                { transport: t, codecs: a } = (0, id.EKQ)(B);
                            return (iA = new r7({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: C.player.secretKey,
                                    mediaConfigController: F,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get fromPromoLanding() {
                                            return !0;
                                        },
                                    },
                                    mediaSourceTtlMs: C.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: C.player.vhMediaProvider,
                            }));
                        }, [B, C.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs, C.player.secretKey, C.player.vhMediaProvider, d, F]),
                        J = (0, V.useMemo)(() => {
                            if (iT) return iT;
                            let e = d.get(id.qTR),
                                { transport: t, codecs: a } = (0, id.EKQ)(B);
                            return (iT = new r7({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: C.player.secretKey,
                                    mediaConfigController: F,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return c.checkExperiment(id.zal.WebNextTracksPreload, 'on');
                                        },
                                    },
                                    mediaSourceTtlMs: C.player.configVariablesMainPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: C.player.vhMediaProvider,
                            }));
                        }, [B, C.player.configVariablesMainPlayback.strmUrlsTtlMs, C.player.secretKey, C.player.vhMediaProvider, d, c, F]),
                        ee = (0, V.useMemo)(() => iD || (iD = new it({ useExponentVolume: !0 })), []);
                    (0, V.useEffect)(() => {
                        A && ee && (A.createAudioAdvertPlayback({ playbackController: ee }), y.setIsAdvertPlaybackCreated(!0));
                    }, [y, A, ee]);
                    let et = (0, V.useMemo)(() => (iN ? iN : (iN = new ie({ tracksResource: d.get(id.Ooh), clipsResource: d.get(id.jQD) }))), [d]),
                        ea = (0, V.useMemo)(() => {
                            if (iR) return iR;
                            let e = d.get(id.Ooh),
                                t = d.get(id._19),
                                a = d.get(id.ok0),
                                r = d.get(id.qNr),
                                i = d.get(id.tzI),
                                s = d.get(id.O9U);
                            return (iR = new e8({
                                contextFactoryParams: {
                                    logger: P,
                                    variables: {
                                        vibe: {
                                            get useWaveQueue() {
                                                return c.checkExperiment(id.zal.WebNextUseWaveQueue, 'on');
                                            },
                                            get multipleSessions() {
                                                return U;
                                            },
                                            get flushDeferredFeedbacksOnContextSwitch() {
                                                return c.checkExperiment(id.zal.WebNextFlushDeferredFeedbacksOnContextSwitch, 'on');
                                            },
                                            get batchFeedbacksOnVibeSettingsChange() {
                                                return c.checkExperiment(id.zal.WebNextBatchFeedbacksOnVibeSettingsChange, 'on');
                                            },
                                            get sendRadioStartedOnVibeSettingsChange() {
                                                return c.checkExperiment(id.zal.WebNextSendRadioStartedOnVibeSettingsChange, 'on');
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(id.zal.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    },
                                    tracksResource: e,
                                    usersResource: t,
                                    rotorResource: a,
                                    playlistResource: r,
                                    albumsResource: i,
                                    artistsResource: s,
                                },
                                entityFactoryParams: { likeStore: h },
                            }));
                        }, [d, c, h, P, U]),
                        er = (0, V.useMemo)(() => ix || (ix = new tP({ telemetryResource: d.get(id.LCy), ...C.player.telemetry })), [d, C.player.telemetry]),
                        ei = (0, V.useMemo)(() => {
                            if (!J || !ee || !et || !ea) return null;
                            if (iI) return iI;
                            let e = d.get(id.A4B)({ credentials: 'include' }),
                                {
                                    player: { prefixUrl: t, configVariablesMainPlayback: a, configVariablesTrailerPlayback: r },
                                } = C,
                                i = d.get(id.UBc),
                                s = d.get(id.TqU),
                                o = [new t_(i)];
                            s && o.push(new tI(s));
                            let l = [
                                new tR({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return x;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return c.checkExperiment(id.zal.WebNextEnableVibeRepeatControl, 'on') && c.checkExperiment(id.zal.WebNextUseWaveQueue, 'on');
                                        },
                                    },
                                }),
                                new tx(),
                                new tL(),
                                new am({
                                    httpClient: e,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, il._)(),
                                                device: (0, id.V7X)(),
                                                language: T,
                                                oauth: I.token,
                                                get multiAuthUserId() {
                                                    return d.get(id.WA$).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, W.getTldHost)(t, n, id.BEZ),
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return c.checkExperiment(id.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        get enableLocalStoredPlaysData() {
                                            return c.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on');
                                        },
                                        get shouldDeletePlaysObjectStore() {
                                            return c.checkExperiment(id.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enableRemoveDuplicatePlays() {
                                            return c.checkExperiment(id.zal.WebNextRemoveDuplicatePlays, 'on');
                                        },
                                        get enableSendFadeFieldsInPlays() {
                                            return c.checkExperiment(id.zal.WebNextEnableSendFadeFieldsInPlays, 'on');
                                        },
                                    },
                                    isCrossfadeEnabled: F.isCrossfadeEnabled,
                                    store: c.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on') ? new aE() : void 0,
                                }),
                                new a_({ browserName: B.name, browserVersion: B.version }),
                                new aI({ logger: P }),
                                new aC(F.quality),
                                new aA({
                                    httpClient: e,
                                    streamsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, il._)(),
                                                device: (0, id.V7X)(),
                                                language: T,
                                                oauth: I.token,
                                                get multiAuthUserId() {
                                                    return d.get(id.WA$).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, W.getTldHost)(t, n, id.BEZ),
                                    },
                                    variables: {
                                        get isEnabled() {
                                            return m.isAuthorized;
                                        },
                                    },
                                }),
                                new ax({
                                    variables: {
                                        get enabled() {
                                            return c.checkExperiment(id.zal.WebNextErrorAutoSkip, 'on');
                                        },
                                    },
                                }),
                                new aZ({
                                    mediaConfigController: F,
                                    transports: o,
                                    variables: {
                                        get enableDebugMode() {
                                            return O;
                                        },
                                    },
                                }),
                                new a1({
                                    mediaProvider: J,
                                    mediaConfigController: F,
                                    config: {
                                        entitiesToPreloadStrmUrlsCount: a.entitiesToPreloadStrmUrlsCount,
                                        entitiesToPreloadSourceCount: a.entitiesToPreloadSourceCount,
                                        preloadedSourcesMaxCount: a.preloadedSourcesMaxCount,
                                        strmUrlsTtlMs: a.strmUrlsTtlMs,
                                        bufferGoal: a.bufferGoal,
                                    },
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return c.checkExperiment(id.zal.WebNextTracksPreload, 'on');
                                        },
                                    },
                                }),
                                new a5({
                                    onTrailerPaused: () => {
                                        g.setIsManuallyPaused(!0);
                                    },
                                    onTrailerPlaying: () => {
                                        g.setIsManuallyPaused(!1);
                                    },
                                    playbackController: ee,
                                    trailerPlaybackParams: {
                                        id: id.V_r.TRAILER,
                                        plugins: [
                                            new tm({ useFade: Y, useSmartPreview: !0 }),
                                            new tR({
                                                variables: {
                                                    get isAutoflowEnabled() {
                                                        return !1;
                                                    },
                                                    get isVibeRepeatEnabled() {
                                                        return !1;
                                                    },
                                                },
                                            }),
                                            new aI({ logger: P }),
                                            new tL(),
                                            new aZ({
                                                mediaConfigController: F,
                                                transports: o,
                                                variables: {
                                                    get enableDebugMode() {
                                                        return O;
                                                    },
                                                },
                                            }),
                                            new am({
                                                httpClient: e,
                                                playsResourceConfig: {
                                                    params: {
                                                        common: {
                                                            client: (0, il._)(),
                                                            device: (0, id.V7X)(),
                                                            language: T,
                                                            oauth: I.token,
                                                            get multiAuthUserId() {
                                                                return d.get(id.WA$).getPassportUid();
                                                            },
                                                        },
                                                    },
                                                    prefixUrl: (0, W.getTldHost)(t, n, id.BEZ),
                                                },
                                                variables: {
                                                    get disableSendPlaysOnTrackStart() {
                                                        return c.checkExperiment(id.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                                    },
                                                    get enableLocalStoredPlaysData() {
                                                        return c.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on');
                                                    },
                                                    get shouldDeletePlaysObjectStore() {
                                                        return c.checkExperiment(id.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                                    },
                                                },
                                                storePlaysProgressIntervalMs: 5e3,
                                                store: c.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on') ? new aE() : void 0,
                                            }),
                                            new a9(),
                                        ],
                                        factory: ea,
                                        entityProvider: et,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: r.mediaElementErrorReloadCount,
                                            windowSize: r.windowSize,
                                            setupQueueWindowSize: r.setupQueueWindowSize,
                                        },
                                    },
                                }),
                                Q,
                                new a9(),
                            ];
                            if ((H && l.push(H), !R)) {
                                let e = d.get(id.byd);
                                e.updateVariables({ enableDebugMode: M });
                                let t = new rU({
                                        factory: ea,
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        fallbackTypesQueueToVibe: [X.$P.UNSPECIFIED, X.$P.FM_RADIO, X.$P.VIDEO_WAVE, X.$P.LOCAL_TRACKS],
                                        variables: {
                                            get shouldApplyState() {
                                                return u.shouldApplyYnisonState;
                                            },
                                            get enableSendLimitedEntityListToYnison() {
                                                return c.checkExperiment(id.zal.WebNextEnableSendLimitedEntityListToYnison, 'on');
                                            },
                                            get useWaveQueue() {
                                                return c.checkExperiment(id.zal.WebNextUseWaveQueue, 'on');
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(id.zal.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    }),
                                    a = new rB({
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        variables: {
                                            get shouldApplyState() {
                                                return u.shouldApplyYnisonState;
                                            },
                                        },
                                    });
                                l.push(a), l.push(t);
                            }
                            return (
                                l.push(
                                    new rW({
                                        factory: ea,
                                        platform: 'desktop',
                                        variables: {
                                            get enabled() {
                                                return x;
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return c.checkExperiment(id.zal.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    }),
                                ),
                                er &&
                                    l.push(
                                        new rY({
                                            telemetry: er,
                                            get puid() {
                                                return m.puid;
                                            },
                                            yaspVersion: G,
                                            getTelemetryTestIds: D,
                                        }),
                                    ),
                                (iI = new ia({
                                    factory: ea,
                                    playbackController: ee,
                                    plugins: l,
                                    entityProvider: et,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: a.mediaElementErrorReloadCount,
                                        windowSize: a.windowSize,
                                        setupQueueWindowSize: a.setupQueueWindowSize,
                                    },
                                    variables: {
                                        get isSkipDebounceEnabled() {
                                            return c.checkExperiment(id.zal.WebNextEnableSkipDebounce, 'on');
                                        },
                                        get enableBurstDebounceDebugLogging() {
                                            return !!L && !!_.get(id.cYZ.EnableBurstDebounceDebugMode);
                                        },
                                    },
                                }))
                            );
                        }, [
                            J,
                            ee,
                            et,
                            ea,
                            d,
                            C,
                            T,
                            I.token,
                            n,
                            B.name,
                            B.version,
                            P,
                            F,
                            Y,
                            Q,
                            H,
                            R,
                            er,
                            x,
                            c,
                            m.isAuthorized,
                            m.puid,
                            O,
                            M,
                            g,
                            u.shouldApplyYnisonState,
                            G,
                            D,
                            L,
                            _,
                        ]);
                    (0, io.H)(ei),
                        ((e) => {
                            let {
                                    mediaProvider: t,
                                    playbackController: a,
                                    factory: r,
                                    entityProvider: i,
                                    mediaConfigController: s,
                                    isEnabled: n,
                                    isMetricsDebugEnabled: o,
                                    hostTld: l,
                                    browserInfo: d,
                                } = e,
                                u = (0, id.NFA)(),
                                c = (0, id.UlF)(),
                                { experiments: h } = (0, id.Pjs)(),
                                { language: g } = (0, id.h6b)();
                            if (!n || !a || !r || !t || !i || !s || iE) return;
                            let m = u.get(id.QGx),
                                y = u.get(id.twC),
                                p = u.get(id.A4B)({ credentials: 'include' }),
                                {
                                    player: { configVariablesPromoLandingPlayback: v, prefixUrl: S },
                                } = y,
                                E = u.get(id.UBc),
                                f = u.get(id.TqU),
                                b = [new t_(E)];
                            f && b.push(new tI(f)),
                                null == a ||
                                    a.createPlayback(id.V_r.PROMO_LANDING, {
                                        factory: r,
                                        entityProvider: i,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: v.mediaElementErrorReloadCount,
                                            windowSize: v.windowSize,
                                            setupQueueWindowSize: v.setupQueueWindowSize,
                                        },
                                    });
                            let P = a.getPlayback(id.V_r.PROMO_LANDING);
                            for (let e of [
                                new tR({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return !1;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return !1;
                                        },
                                    },
                                }),
                                new tx(),
                                new tL(),
                                new am({
                                    httpClient: p,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, il._)(),
                                                device: (0, id.V7X)(),
                                                language: g,
                                                oauth: m.token,
                                                get multiAuthUserId() {
                                                    return u.get(id.WA$).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, W.getTldHost)(S, l, id.BEZ),
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return h.checkExperiment(id.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        get enableLocalStoredPlaysData() {
                                            return h.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on');
                                        },
                                        get shouldDeletePlaysObjectStore() {
                                            return h.checkExperiment(id.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enablePartialPlayReporting() {
                                            return !0;
                                        },
                                    },
                                    store: h.checkExperiment(id.zal.WebNextPlayAudioHeartBeat, 'on') ? new aE() : void 0,
                                }),
                                new a_({ browserName: d.name, browserVersion: d.version }),
                                new aI({ logger: c }),
                                new aZ({
                                    mediaConfigController: s,
                                    transports: b,
                                    variables: {
                                        get enableDebugMode() {
                                            return o;
                                        },
                                    },
                                }),
                                new a9(),
                            ])
                                e.apply({ playback: P, hooks: P.hooks });
                            iE = !0;
                        })({
                            isEnabled: !!l,
                            playbackController: ee,
                            entityProvider: et,
                            factory: ea,
                            mediaConfigController: F,
                            isNonSafariBrowser: Y,
                            isMetricsDebugEnabled: O,
                            browserInfo: B,
                            hostTld: n,
                            mediaProvider: Z,
                        }),
                        ((e) => {
                            let { sonata: t, isEnabled: a } = e;
                            (0, V.useEffect)(() => {
                                a &&
                                    t &&
                                    ((window.sonataState = t.state),
                                    Object.defineProperty(window, 'sonataPlaybackStates', {
                                        configurable: !0,
                                        enumerable: !0,
                                        get() {
                                            let e = {};
                                            for (let a of t.playbackController.availablePlaybacks) {
                                                let t = a.getId();
                                                ib.has(t) && (e[t] = a.state);
                                            }
                                            return e;
                                        },
                                    }));
                            }, [a, t]);
                        })({ sonata: ei, isEnabled: !!w }),
                        (0, V.useEffect)(() => {
                            ei &&
                                J &&
                                Z &&
                                er &&
                                !u.areCoresRegistered &&
                                (Promise.all([a.e(9096), a.e(377)])
                                    .then(a.bind(a, 60377))
                                    .then((e) => {
                                        let { YaspCoreAdapter: t, YaspLoader: a, HlsCoreAdapter: r, HtmlAudioCoreAdapter: i } = e,
                                            s = new a({ logger: P, yaspTelemetry: er, getTelemetryTestIds: D }),
                                            n = Y ? new r({ hlsErrorRetryLimit: C.player.hlsErrorRetryLimit }) : new i();
                                        ei.registerMediaPlayer({
                                            mediaPlayerParams: { core: n, mediaProvider: J, mediaPlayerType: 'audioMediaPlayer', contentType: $.e.HLS },
                                        }),
                                            A &&
                                                ei.registerMediaPlayer({
                                                    mediaPlayerParams: {
                                                        core: new i(),
                                                        mediaProvider: new id.Uvn(),
                                                        mediaPlayerType: 'audioMediaPlayer',
                                                        contentType: $.e.AUDIO,
                                                    },
                                                    playbackId: id.V_r.ADVERT,
                                                }),
                                            ei.registerMediaPlayer({
                                                mediaPlayerParams: {
                                                    core: new i(),
                                                    mediaProvider: J,
                                                    mediaPlayerType: 'audioMediaPlayer',
                                                    contentType: $.e.DOWNLOADED_AUDIO,
                                                },
                                            }),
                                            s
                                                .loadYasp({
                                                    version: G,
                                                    sourceLimit: K,
                                                    retryDelayMs: C.player.yaspLoadRetryDelayMs,
                                                    perfLogUrl: C.player.telemetry.perfLogUrl,
                                                })
                                                .then(() => {
                                                    let e,
                                                        a = s.getYaspAudioElement();
                                                    (e = window.Worker ? new tn() : new ts()),
                                                        N
                                                            ? ei.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'crossMediaPlayer',
                                                                      mediaProvider: J,
                                                                      ticker: e,
                                                                      contentType: $.e.AUDIO,
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: er }),
                                                                      additionalCore: new t({ yaspAudioElement: a, yaspTelemetry: er }),
                                                                      config: { useVolumeForAudioEffect: !Y },
                                                                      variables: {
                                                                          get enableDebugLogging() {
                                                                              return !!L && !!_.get(id.cYZ.EnableCrossfadeDebugMode);
                                                                          },
                                                                      },
                                                                      isEnabled: F.isCrossfadeEnabled,
                                                                  },
                                                              })
                                                            : ei.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'audioMediaPlayer',
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: er }),
                                                                      mediaProvider: J,
                                                                      contentType: $.e.AUDIO,
                                                                  },
                                                              }),
                                                        ei.registerMediaPlayer({
                                                            mediaPlayerParams: {
                                                                core: new t({ yaspAudioElement: a }),
                                                                mediaProvider: J,
                                                                mediaPlayerType: 'audioMediaPlayer',
                                                                contentType: $.e.AUDIO,
                                                            },
                                                            playbackId: id.V_r.TRAILER,
                                                        }),
                                                        l &&
                                                            Z &&
                                                            ei.registerMediaPlayer({
                                                                mediaPlayerParams: {
                                                                    core: new t({ yaspAudioElement: a }),
                                                                    mediaProvider: Z,
                                                                    mediaPlayerType: 'audioMediaPlayer',
                                                                    contentType: $.e.AUDIO,
                                                                },
                                                                playbackId: id.V_r.PROMO_LANDING,
                                                            });
                                                })
                                                .catch((e) => {
                                                    P.error('[SonataProvider] Error trying to register media players', { error: e });
                                                });
                                    }),
                                u.setCoresAsRegistered(!0));
                        }, [
                            A,
                            C.player.hlsErrorRetryLimit,
                            L,
                            G,
                            K,
                            Y,
                            P,
                            J,
                            Z,
                            ei,
                            u,
                            l,
                            d,
                            u.areCoresRegistered,
                            _,
                            er,
                            N,
                            D,
                            C.player.yaspSourceLimit,
                            C.player.yaspLoadRetryDelayMs,
                            C.player.telemetry.perfLogUrl,
                            F.isCrossfadeEnabled,
                        ]),
                        (0, V.useEffect)(() => {
                            a.e(5378)
                                .then(a.bind(a, 2997))
                                .then((e) => {
                                    let { loadVHPlayerSdk: t, VHPlayerCoreAdapter: a } = e;
                                    if (!ei || !J || !ee || !et || !ea) return;
                                    let r = new a({ hideAds: !0 }),
                                        { configVariablesMainPlayback: i } = C.player,
                                        s = async () =>
                                            t(C.player.vhPlayerSdkVersion)
                                                .then(() => {
                                                    ee.createPlayback(id.V_r.CLIP, {
                                                        mediaPlayerParams: { core: r, mediaProvider: J, mediaPlayerType: 'videoMediaPlayer', contentType: $.e.CLIP },
                                                        entityProvider: et,
                                                        factory: ea,
                                                        playbackConfig: {
                                                            mediaElementErrorReloadCount: i.mediaElementErrorReloadCount,
                                                            windowSize: i.windowSize,
                                                            setupQueueWindowSize: i.setupQueueWindowSize,
                                                        },
                                                        syncVolumeWithMainPlayback: !0,
                                                    });
                                                    let e = ee.getPlayback(id.V_r.CLIP);
                                                    for (let t of [
                                                        new tR({
                                                            variables: {
                                                                get isAutoflowEnabled() {
                                                                    return !1;
                                                                },
                                                                get isVibeRepeatEnabled() {
                                                                    return !1;
                                                                },
                                                            },
                                                        }),
                                                        new tL(),
                                                        Q,
                                                    ])
                                                        t.apply({ playback: e, hooks: e.hooks });
                                                    u.setIsVHCoreRegistered(!0);
                                                })
                                                .catch(() => {
                                                    setTimeout(s, 1e3);
                                                });
                                    s();
                                });
                        }, [Q, C.player, d, et, ea, J, ee, ei, u, m.hasPlus]),
                        (0, io.OM)({ sonata: ei }),
                        (0, ii.rb)({ sonata: ei }),
                        ((e) => {
                            let { sonata: t, playbackId: a, withStorage: r, sonataState: i } = e,
                                s = (0, id.NFA)().get(id.ooW);
                            (0, V.useEffect)(() => {
                                var e;
                                let n, o, l, d, u, c;
                                if (!t) return;
                                let h = s.get(id.cYZ.YmPlayerVolume);
                                (n = 'number' != typeof h || isNaN(h) ? 1 : h),
                                    t.setExponentVolume(n),
                                    t.setExponentVolume(n, id.V_r.TRAILER),
                                    a && t.setExponentVolume(n, a);
                                let g = t.getState(a).queueState.currentEntity.onChange((e) => {
                                        let t = null == e ? void 0 : e.context.data.type,
                                            a = null == e ? void 0 : e.context.data.meta.id,
                                            r = null == e ? void 0 : e.entity;
                                        r && i.setEntityMeta(r), t && i.setContextType(t), a && i.setContextId(a);
                                    }),
                                    m = t.getState(a).playerState.status.onChange((e) => {
                                        e && i.setStatus(e);
                                    }),
                                    y = t.getState(a).currentContext.onChange(() => {
                                        var e, n, h, g, m, y;
                                        if ((null == o || o(), null == l || l(), null == d || d(), null == u || u(), null == c || c(), r)) {
                                            let e = null != (y = s.get(id.cYZ.YmPlayerRepeatMode)) ? y : iP.pM.NONE;
                                            t.setRepeatMode(e, a);
                                            let r = !!s.get(id.cYZ.YmPlayerShuffle);
                                            t.setShuffle(r, a);
                                        }
                                        (o =
                                            null == (e = t.getState(a).currentContext.value)
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      i.setCanMoveBackward(!!e);
                                                  })),
                                            (l =
                                                null == (n = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : n.availableActions.moveForward.onChange((e) => {
                                                          i.setCanMoveForward(!!e);
                                                      })),
                                            (d =
                                                null == (h = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : h.availableActions.repeat.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanChangeRepeatMode(e);
                                                      })),
                                            (u =
                                                null == (g = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : g.availableActions.shuffle.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanShuffle(e);
                                                      })),
                                            (c =
                                                null == (m = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : m.availableActions.speed.onChange((e) => {
                                                          'boolean' == typeof e && (i.setCanSpeed(e), e || t.setSpeed(1, a));
                                                      }));
                                    }),
                                    p =
                                        null == (e = t.getState(a).playerState)
                                            ? void 0
                                            : e.progress.onChange((e) => {
                                                  e && (i.setPosition(e.position), i.setDuration(e.duration));
                                              }),
                                    v = t.getState(a).playerState.volume.onChange(() => {
                                        let e = t.getState(a).playerState.exponentVolume.value;
                                        i.setVolume(e), r && s.set(id.cYZ.YmPlayerVolume, e, { expires: 365 });
                                    }),
                                    S = t.getState(a).queueState.repeat.onChange((e) => {
                                        e && (i.setRepeatMode(e), r && s.set(id.cYZ.YmPlayerRepeatMode, e, { expires: 365 }));
                                    }),
                                    E = t.getState(a).queueState.shuffle.onChange((e) => {
                                        'boolean' == typeof e && (i.setShuffle(e), r && s.set(id.cYZ.YmPlayerShuffle, e, { expires: 365 }));
                                    });
                                return () => {
                                    null == g || g(),
                                        null == m || m(),
                                        null == y || y(),
                                        null == v || v(),
                                        null == S || S(),
                                        null == d || d(),
                                        null == u || u(),
                                        null == E || E(),
                                        null == p || p(),
                                        null == o || o(),
                                        null == l || l(),
                                        null == c || c();
                                };
                            }, [a, t, i, s, r]);
                        })({ sonata: ei, playbackId: l ? id.V_r.PROMO_LANDING : void 0, withStorage: !l, sonataState: l ? v : u });
                    let es = (0, V.useCallback)(() => {
                        if (!m.isAuthorized || f || q || z) return aG.e.PREVIEW;
                        if (b) return aG.e.EFFICIENT;
                        let e = _.get(id.cYZ.YmPlayerQuality);
                        if (e) {
                            if (Object.values(id.lv9).includes(e)) {
                                let t = (0, id.SBI)(e);
                                return _.set(id.cYZ.YmPlayerQuality, t, { expires: 365 }), t;
                            }
                            return e;
                        }
                        return _.set(id.cYZ.YmPlayerQuality, aG.e.BALANCED, { expires: 365 }), aG.e.BALANCED;
                    }, [_, f, b, m.isAuthorized, q, z]);
                    return (
                        (0, V.useEffect)(
                            () => (
                                l &&
                                    (null == ei || ei.stop(),
                                    Object.values(id.V_r).forEach((e) => {
                                        e !== id.V_r.PROMO_LANDING && (null == ei || ei.stop(e));
                                    })),
                                () => {
                                    l && (null == ei || ei.stop(id.V_r.PROMO_LANDING));
                                }
                            ),
                            [ei, l],
                        ),
                        (0, V.useEffect)(() => {
                            l || (F.setQuality(es()), u.setQuality(es()));
                        }, [F, es, u, l]),
                        (0, V.useEffect)(() => {
                            let e = _.get(id.cYZ.CrossFadeMode),
                                t = !!N && (null == e || e);
                            _.set(id.cYZ.CrossFadeMode, t, { expires: 365 }), (F.isCrossfadeEnabled.value = t);
                        }, [F, u, _, N]),
                        (0, V.useEffect)(() => {
                            (0, ir.Bx)(_, iL);
                        }, [_]),
                        (0, j.jsx)(id.cdg.Provider, {
                            value: F,
                            children: (0, j.jsxs)(id.GsR.Provider, {
                                value: ei,
                                children: [
                                    (0, j.jsx)(is.mW, {}),
                                    (0, j.jsx)(iv, { isYnisonDisabled: R }),
                                    (0, j.jsx)(id.WM$.Provider, { value: H, children: (0, j.jsxs)(iS, { children: [(0, j.jsx)(im, {}), s] }) }),
                                ],
                            }),
                        })
                    );
                },
                iO = (0, B.PA)((e) => {
                    let { children: t, hostTld: a, quality: r, ...i } = e,
                        s = (0, id.Dg5)();
                    return (0, j.jsx)(V.Suspense, {
                        fallback: (0, j.jsx)(iu.JR, {}),
                        children: (0, j.jsx)(ic, { audioLoader: s, children: (0, j.jsx)(iw, { hostTld: a, quality: r, ...i, children: t }) }),
                    });
                });
        },
        47236: (e, t, a) => {
            'use strict';
            a.d(t, { ServiceWorkerInitialiazer: () => s });
            var r = a(55178),
                i = a(49574);
            let s = () => {
                let e = (0, i.NFA)().get(i.Zft);
                (0, r.useEffect)(() => {
                    'serviceWorker' in navigator &&
                        navigator.serviceWorker.addEventListener('message', (t) => {
                            var a, r, i, s, n;
                            if ((null == (a = t.data) ? void 0 : a.type) === 'PUT_RSC_WORKER_ERROR_MESSAGE_TYPE') {
                                let a = new URL(null == (i = t.data) || null == (r = i.payload) ? void 0 : r.url);
                                e.error(
                                    '[RSC worker] Error getting url '
                                        .concat(a.origin, ' ')
                                        .concat(a.pathname)
                                        .concat(a.search, ', reason: ')
                                        .concat(null == (n = t.data) || null == (s = n.payload) ? void 0 : s.error),
                                );
                            }
                        });
                }, [e]);
            };
        },
        48007: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => n });
            var r = a(55178),
                i = a(1131),
                s = a(49574);
            let n = (e) => {
                let { controller: t, sonataState: a, playbackId: n, groupId: o } = e,
                    l = (0, s.eGp)(),
                    d = (0, s.NFA)(),
                    u = (0, i.d0)(),
                    c = d.get(s.ooW);
                (0, r.useEffect)(
                    () => (
                        null == t ||
                            t.addShortcutsListener(o, s.lbr.DECREASE_VOLUME, () => {
                                null == l || l.decreaseExponentVolume(0.05, n);
                            }),
                        null == t ||
                            t.addShortcutsListener(o, s.lbr.INCREASE_VOLUME, () => {
                                null == l || l.increaseExponentVolume(0.05, n);
                            }),
                        null == t ||
                            t.addShortcutsListener(o, s.lbr.TOGGLE_MUTE, async () => {
                                let e = null == l ? void 0 : l.getState(n).playerState.exponentVolume.value;
                                void 0 !== e && (await u(a, e, n));
                            }),
                        () => {
                            null == t || t.removeShortcutsListener(o, s.lbr.DECREASE_VOLUME),
                                null == t || t.removeShortcutsListener(o, s.lbr.INCREASE_VOLUME),
                                null == t || t.removeShortcutsListener(o, s.lbr.TOGGLE_MUTE);
                        }
                    ),
                    [t, n, l, c, u, a, o],
                ),
                    (0, r.useEffect)(() => {
                        if (!a.isGenerativeContext)
                            return (
                                null == t ||
                                    t.addShortcutsListener(o, s.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == l || null == (e = l.getState(n).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await l.moveBackward(n));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(o, s.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == l || null == (e = l.getState(n).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == l ? void 0 : l.moveForward(n)));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(o, s.lbr.SLIDE_BACKWARD, async () => {
                                        (null == l ? void 0 : l.getState(n).playerState.progress.value.duration) && (await (null == l ? void 0 : l.slideBackward(2, n)));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(o, s.lbr.SLIDE_FORWARD, async () => {
                                        (null == l ? void 0 : l.getState(n).playerState.progress.value.duration) && (await (null == l ? void 0 : l.slideForward(2, n)));
                                    }),
                                () => {
                                    null == t || t.removeShortcutsListener(o, s.lbr.MOVE_FORWARD),
                                        null == t || t.removeShortcutsListener(o, s.lbr.MOVE_BACKWARD),
                                        null == t || t.removeShortcutsListener(o, s.lbr.SLIDE_BACKWARD),
                                        null == t || t.removeShortcutsListener(o, s.lbr.SLIDE_FORWARD);
                                }
                            );
                    }, [t, l, c, a.isGenerativeContext, n, o]);
            };
        },
        48177: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SavedOfferInitializer: () => n });
            var r = a(96103),
                i = a(55178),
                s = a(49574);
            let n = (0, r.PA)(() => {
                let {
                        paymentWidgetModal: {
                            modal: e,
                            setTarget: t,
                            setTariffOfferName: a,
                            setServiceSessionId: r,
                            setIsSilent: n,
                            setOffersBatchId: o,
                            setOffersPositionIds: l,
                        },
                        user: d,
                    } = (0, s.Pjs)(),
                    { hasFreeUserAccess: u } = (0, s.XCI)(),
                    c = (0, s.NFA)(),
                    h = (0, i.useMemo)(() => c.get(s.vHc), [c]);
                (0, i.useLayoutEffect)(() => {
                    if (!d.isAuthorized || !u || null === h) return;
                    let i = h.get(s.cYZ.Offer);
                    if (null === i) return;
                    let { target: c, serviceSessionId: g, tariffOfferName: m, isSilent: y, offersBatchId: p, offersPositionIds: v } = i;
                    h.remove(s.cYZ.Offer), t(c), n(y), r(g), o(p), l(v), m && a(m), e.open();
                }, [u, h, e, a, t, r, n, o, l, d.isAuthorized]);
            });
        },
        48383: (e, t, a) => {
            'use strict';
            a.d(t, { bp: () => f, A6: () => G, Bd: () => c });
            var r = a(60754);
            let i = r.gK.model('ConcertDescription', { text: r.gK.string, genre: r.gK.maybe(r.gK.string), source: r.gK.maybe(r.gK.string) });
            var s = a(87953),
                n = a(43557),
                o = a(33797),
                l = a(73298),
                d = a(49574),
                u = a(95428);
            let c = r.gK
                .compose(
                    r.gK.model('ConcertPage', {
                        meta: r.gK.maybeNull(l.aR),
                        covers: r.gK.maybeNull(r.gK.array(u.$B)),
                        description: r.gK.maybeNull(i),
                        leadArtistId: r.gK.maybeNull(r.gK.union(r.gK.string, r.gK.number)),
                        artists: r.gK.maybeNull(r.gK.array(o.PK)),
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        landing: n.Ju,
                    }),
                    u.XT,
                    u.pl,
                )
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get isNotFound() {
                        return e.isRejected && (e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST);
                    },
                    get coversUri() {
                        var t, a;
                        return null != (a = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? a : [];
                    },
                }))
                .actions((e) => ({
                    getInfo: (0, r.L3)(function* (t) {
                        let { concertId: a } = t,
                            { concertsResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let { concert: t, minPrice: s, covers: n, description: u, leadArtistId: c, artists: h } = yield i.getInfo({ concertId: a });
                                (e.meta = (0, l.ho)(t, s)),
                                    (e.covers = (0, r.wg)(null == n ? void 0 : n.map((e) => (0, d.pX4)(e)))),
                                    (e.description = u ? (0, r.wg)(u) : null),
                                    (e.leadArtistId = c ? (0, r.wg)(c) : null),
                                    (e.artists = (0, r.wg)(null == h ? void 0 : h.map((e) => (0, o.dM)(e)))),
                                    (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t),
                                    t instanceof s.GX && (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) && (e.errorStatusCode = s.X1.NOT_FOUND),
                                    (e.loadingState = d.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]);
                    },
                }));
            var h = a(32290),
                g = a(96103),
                m = a(55178),
                y = a(60900),
                p = a(80719),
                v = a(87633),
                S = a.n(v);
            let E = (0, g.PA)(() => {
                    let { experiments: e, concert: t } = (0, d.Pjs)(),
                        { formatMessage: a } = (0, y.A)(),
                        r = e.checkExperiment(d.zal.WebNextConcertPage, 'on');
                    if (
                        ((0, d.ACS)(),
                        (0, m.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !r)
                    )
                        return (0, h.jsx)(p.M, {});
                    let i = a({ id: 'page-error.concert-page-does-not-exist' }),
                        s = a({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, h.jsx)(p.M, { title: i, description: s, iconVariant: 'attention', iconSize: 'xxl', iconClassName: S().icon });
                }),
                f = (0, g.PA)(() => (0, h.jsx)(d.nVz, { pageId: d._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, h.jsx)(E, {}) }));
            var b = a(21916),
                P = a(27576),
                _ = a(16172),
                I = a(59824),
                C = a(73474),
                k = a(91027),
                T = a(66075),
                A = a(6752),
                D = a(46049),
                N = a(30039),
                R = a(32381),
                x = a(75645),
                L = a(44574),
                w = a(52068),
                O = a(17852),
                M = a.n(O);
            let F = (0, g.PA)((e) => {
                    var t, a, r;
                    let { concertId: i, isWebNextNavigationOn: s } = e,
                        {
                            experiments: o,
                            concert: l,
                            modals: { imageSliderModal: u },
                        } = (0, d.Pjs)(),
                        c = ((e) => {
                            let t = (0, w.st)(),
                                a = (0, d.UlF)(),
                                { pageId: r } = (0, d.$au)(),
                                { hash: i } = (0, w.gf)();
                            return (0, k.c)((s, n) => {
                                if (!t || !r) return;
                                let o = {
                                        hash: i,
                                        pageId: r,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        viewUuid: n,
                                        mainObjectType: _.ky.Concert,
                                        mainObjectId: e,
                                    },
                                    l = (0, _.Fx)({ params: o, logger: a, context: 'useSendEventOnConcertOpenedOrClosed' });
                                l && (s ? (0, _.Fn)(t.evgenInstance, l) : (0, _.PO)(t.evgenInstance, l));
                            });
                        })(i),
                        g = (0, m.useRef)(String((0, P.A)())),
                        { setContentScrollRef: y, contentScrollRef: p } = (0, d.gKY)(),
                        { forceUpdateRefCallback: v, offsetY: S } = (0, T.G)(p),
                        E = (0, d.ytd)(null == (a = l.covers) || null == (t = a[0]) ? void 0 : t.color),
                        { topColorStyle: f, headerStyle: O } = (0, x.QZ)(E, S, s),
                        F = (0, k.c)(() => {
                            l.coversUri.length > 0 && u.openImages({ images: l.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        G = o.checkExperiment(d.zal.WebNextConcertPage, 'on');
                    (0, d.ACS)(),
                        (0, m.useEffect)(
                            () => () => {
                                l.reset();
                            },
                            [l, i],
                        ),
                        (0, m.useEffect)(() => {
                            let e = g.current;
                            return (
                                c(!0, e),
                                () => {
                                    c(!1, e);
                                }
                            );
                        }, [c]),
                        (0, d.Jzs)(l.isResolved);
                    let K = [];
                    if (
                        (l.isNeededToLoad && K.push(l.getInfo({ concertId: i })),
                        l.landing.isNeededToLoad && K.push(l.landing.getConcertSkeleton({ concertId: i, skeletonId: C.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        K.length && (0, m.use)(Promise.allSettled(K)),
                        (!G || l.isNotFound) && (0, b.notFound)(),
                        l.isRejected)
                    )
                        return (0, h.jsx)(R.w, {});
                    let U = (0, A.L)(() => {
                        var e, t, a;
                        return l.isLoading || !l.meta || l.isRejected
                            ? (0, h.jsx)(N.c6, { className: M().header, isActive: !0 })
                            : (0, h.jsx)(d.Bki, {
                                  objectType: _.ky.Concert,
                                  objectId: null == (e = l.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: _.ky.Concert,
                                  mainObjectId: null == (t = l.meta) ? void 0 : t.id,
                                  children: (0, h.jsx)(N.Dc, {
                                      description: l.description,
                                      onCoverClick: F,
                                      leadArtistId: l.leadArtistId,
                                      ref: v,
                                      className: M().header,
                                      concert: l.meta,
                                      cover: null == (a = l.covers) ? void 0 : a[0],
                                  }),
                              });
                    });
                    return (0, h.jsx)(d.jPc, {
                        children: (0, h.jsxs)(x.hO, {
                            scrollElement: p,
                            children: [
                                (0, h.jsx)(L.Y9, { style: O, variant: L.Vw.INNER, showControls: !1 }),
                                (0, h.jsx)('div', { className: M().averageColorBackground, style: f }),
                                (0, h.jsxs)(D.N, {
                                    ref: y,
                                    className: M().root,
                                    containerClassName: M().container,
                                    ...(0, I.Am)(I.Xk.concert.CONCERT_PAGE),
                                    children: [
                                        (0, h.jsxs)('div', {
                                            children: [
                                                (0, h.jsx)(d.hjC, {
                                                    tabId: '',
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, h.jsx)(d.FoH, {
                                                        blockId: _.LA.ConcertHeader,
                                                        blockType: _.LA.ConcertHeader,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: _.ky.Concert,
                                                        mainObjectId: null == (r = l.meta) ? void 0 : r.id,
                                                        children: U,
                                                    }),
                                                }),
                                                (0, h.jsx)(n.EA, {
                                                    containerClassName: M().skeleton,
                                                    landing: l.landing,
                                                    errorComponent: (0, h.jsx)(R.w, { className: M().error, withBackwardControl: !1 }),
                                                }),
                                            ],
                                        }),
                                        (0, h.jsx)(L.A, { children: (0, h.jsx)(L.wi, { className: M().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                G = (0, g.PA)((e) => (0, h.jsx)(d.nVz, { pageId: d._Q$.CONCERT, pageEntityId: e.concertId, children: (0, h.jsx)(F, { ...e }) }));
        },
        49584: (e, t, a) => {
            'use strict';
            a.d(t, { jM: () => g.KidsCategoryPage, u3: () => m.KidsEditorialAlbumsPage, bU: () => y.KidsEditorialPlaylistsPage, GY: () => h });
            var r = a(49574),
                i = a(60754),
                s = a(87953),
                n = a(9152),
                o = a(95428);
            let l = i.gK
                .compose(
                    i.gK.model('KidsEditorialAlbumPage', {
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        title: i.gK.maybeNull(i.gK.string),
                        albumsData: i.gK.array(i.gK.model({ id: i.gK.number })),
                        pagesLoader: (0, o.Ij)(n.GI),
                    }),
                    o.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === r.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get albums() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getAlbums: (0, i.L3)(function* (t) {
                            let { page: a = 0, pageSize: o = 20 } = t,
                                { albumResource: l, modelActionsLogger: d } = (0, i._$)(e);
                            if (e.loadingState === r.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, r.GuX.PENDING);
                                try {
                                    let t = a * o,
                                        r = e.albumsData.slice(t, t + o).map((e) => e.id),
                                        i = yield l.getAlbums({ albumIds: r }),
                                        s = { page: a, perPage: o, total: e.albumsData.length },
                                        d = i.map(n.e7);
                                    e.pagesLoader.setItems(d, { page: a, pager: s });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: r.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, i.L3)(function* (a) {
                            let { id: n, page: o = 0, pageSize: l = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING)
                                try {
                                    var c;
                                    e.loadingState = r.GuX.PENDING;
                                    let a = yield d.getEditorialAlbum({ id: n });
                                    (e.title = a.title),
                                        (e.albumsData = (0, i.wg)((null != (c = a.entities) ? c : []).map((e) => ({ id: e })))),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE),
                                        yield t.getAlbums({ page: o, pageSize: l });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = r.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, i.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var d = a(55550);
            let u = i.gK
                .compose(
                    i.gK.model('KidsEditorialPlaylistPage', {
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        title: i.gK.maybeNull(i.gK.string),
                        playlistsData: i.gK.array(i.gK.model({ uid: i.gK.number, kind: i.gK.number })),
                        pagesLoader: (0, o.Ij)(d.$o),
                    }),
                    o.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === r.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get playlists() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, i.L3)(function* (t) {
                            let { page: a = 0, pageSize: n = 20 } = t,
                                { playlistsResource: o, modelActionsLogger: l } = (0, i._$)(e);
                            if (e.loadingState === r.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, r.GuX.PENDING);
                                try {
                                    let t = a * n,
                                        r = e.playlistsData.slice(t, t + n),
                                        i = yield o.getPlaylists({ playlistIds: r.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        s = { page: a, perPage: n, total: e.playlistsData.length },
                                        l = i.playlists.map(d.jX);
                                    e.pagesLoader.setItems(l, { page: a, pager: s });
                                } catch (t) {
                                    l.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: r.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, i.L3)(function* (a) {
                            let { id: n, page: o = 0, pageSize: l = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING)
                                try {
                                    var c;
                                    e.loadingState = r.GuX.PENDING;
                                    let a = yield d.getEditorialPlaylist({ id: n });
                                    (e.title = a.title),
                                        (e.playlistsData = (0, i.wg)((null != (c = a.entities) ? c : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: o, pageSize: l });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = r.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, i.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var c = a(43557);
            let h = i.gK.model('KidsPage', { landing: c.Ju, kidsEditorialPlaylistSubpage: u, kidsEditorialAlbumSubpage: l });
            var g = a(16834),
                m = a(28821),
                y = a(11563);
            a(45941), a(70063);
        },
        50562: (e, t, a) => {
            'use strict';
            a.d(t, { Z3: () => y.GenreAlbumsPage, P0: () => p.GenreArtistsPage, L6: () => v.GenrePage, G8: () => m, ys: () => S.GenrePlaylistsPage });
            var r = a(60754),
                i = a(87953),
                s = a(16486),
                n = a(50510),
                o = a(33797),
                l = a(49574),
                d = a(95428);
            let u = r.gK
                    .model('GenreAlbumsPage', { pagesLoader: (0, d.Ij)(s.JC), errorStatusCode: r.gK.maybeNull(r.gK.number), fullTitle: r.gK.maybeNull(r.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, r;
                                let t = e.pagesLoader.isSomePageResolved && (null != (r = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? r : 0) === 0,
                                    s = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && s) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var s;
                                return null != (s = e.pagesLoader.items) ? s : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { metatagId: a, page: n = 0, pageSize: o = 20, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(n))
                                try {
                                    e.pagesLoader.setPageState(n, l.GuX.PENDING);
                                    let t = d;
                                    t || (t = yield u.getMetatagAlbums({ id: a, offset: n, limit: o })), (e.fullTitle = t.title.fullTitle);
                                    let r = t.albums.map(s.pp);
                                    e.pagesLoader.setItems(r, { page: n, pager: { page: n, perPage: o, total: t.pager.total } });
                                } catch (t) {
                                    c.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: n });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.fullTitle = null), e.pagesLoader.reset();
                        },
                    })),
                c = r.gK
                    .compose(
                        r.gK.model('GenreArtistsPage', {
                            errorStatusCode: r.gK.maybeNull(r.gK.number),
                            fullTitle: r.gK.maybeNull(r.gK.string),
                            pagesLoader: (0, d.Ij)(o.PK),
                        }),
                        d.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a;
                                let t = e.isResolved && (null == (a = e.pagesLoader.pager) ? void 0 : a.total) === 0,
                                    r = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                                return (e.isRejected && r) || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                return e.pagesLoader.items || [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { metatagId: a, page: s = 0, pageSize: n = 20, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(s))
                                try {
                                    e.pagesLoader.setPageState(s, l.GuX.PENDING);
                                    let t = d;
                                    t || (t = yield u.getMetatagArtists({ id: a, offset: s, limit: n, period: 'week' })), (e.fullTitle = t.title.fullTitle);
                                    let r = t.artists.map((e) => (0, o.dM)(e.artist));
                                    e.pagesLoader.setItems(r, { page: s, pager: t.pager });
                                } catch (t) {
                                    c.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: s });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    }));
            var h = a(55550);
            let g = r.gK
                    .model('GenrePlaylistsPage', { pagesLoader: (0, d.Ij)(h.$o), errorStatusCode: r.gK.maybeNull(r.gK.number), fullTitle: r.gK.maybeNull(r.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, r;
                                let t = e.pagesLoader.isSomePageResolved && (null != (r = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? r : 0) === 0,
                                    s = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && s) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var s;
                                return null != (s = e.pagesLoader.items) ? s : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { metatagId: a, page: i = 0, pageSize: s = 20, preloadedMeta: n } = t,
                                { metatagsResource: o, modelActionsLogger: d } = (0, r._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, l.GuX.PENDING);
                                    let t = n;
                                    t || (t = yield o.getMetatagPlaylists({ id: a, offset: i, limit: s, withLikesCount: !0 })), (e.fullTitle = t.title.fullTitle);
                                    let r = t.playlists.map(h.jX);
                                    e.pagesLoader.setItems(r, { page: i, pager: { page: i, perPage: s, total: t.pager.total } });
                                } catch (t) {
                                    d.error(t), e.pagesLoader.setItems(null, { responseStatus: l.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null), (e.fullTitle = null);
                        },
                    })),
                m = r.gK
                    .compose(
                        r.gK.model('GenrePage', {
                            id: r.gK.maybeNull(r.gK.string),
                            errorStatusCode: r.gK.maybeNull(r.gK.number),
                            fullTitle: r.gK.maybeNull(r.gK.string),
                            artists: r.gK.array(o.PK),
                            albums: r.gK.array(s.JC),
                            playlists: r.gK.array(n.IP),
                            albumsSubpage: u,
                            artistsSubpage: c,
                            playlistsSubpage: g,
                        }),
                        d.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
                            },
                            get hasAlbums() {
                                return t.isLoading || e.albums.length > 0;
                            },
                            get hasArtists() {
                                return t.isLoading || e.artists.length > 0;
                            },
                            get hasPlaylists() {
                                return t.isLoading || e.playlists.length > 0;
                            },
                            get isNotFound() {
                                let a = e.isResolved && !t.hasAlbums && !t.hasArtists && !t.hasPlaylists,
                                    r = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                                return (e.isRejected && r) || a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { id: a, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, r._$)(e);
                            if (e.loadingState !== l.GuX.PENDING)
                                try {
                                    e.loadingState = l.GuX.PENDING;
                                    let t = d;
                                    t || (t = yield u.getMetatagById({ id: a })),
                                        (e.id = t.id),
                                        (e.fullTitle = t.title.fullTitle),
                                        (e.artists = (0, r.wg)(t.artists.map(o.dM))),
                                        (e.albums = (0, r.wg)(t.albums.map(s.pp))),
                                        (e.playlists = (0, r.wg)(t.playlists.map(n.ZC))),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                                } catch (t) {
                                    c.error(t),
                                        t instanceof i.GX &&
                                            (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = i.X1.NOT_FOUND),
                                        e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = l.GuX.IDLE), (e.fullTitle = null), (e.artists = (0, r.wg)([])), (e.albums = (0, r.wg)([])), (e.playlists = (0, r.wg)([]));
                        },
                    }));
            var y = a(45514),
                p = a(3069);
            a(60637);
            var v = a(53737),
                S = a(15112);
            a(63518), a(20843), a(83470), a(36023);
            var E = a(55178),
                f = a(95393);
            let b = async (e, t) => {
                try {
                    let { container: a, backendHostTld: r, locale: i, host: s, fullUrl: n, isRSC: o, requestUrl: d } = await (0, l.IhE)();
                    if (!e || o) return { genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null };
                    let u = a.get(l.UtQ);
                    return { genreMeta: await t(u, e), tld: r, locale: i, host: s, fullUrl: n, url: d };
                } catch (e) {
                    return (0, l.tfF)(e, () => ({ genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null }));
                }
            };
            (0, E.cache)(async (e) => b(e, async (e, t) => e.getMetatagAlbums({ id: t, offset: 0, limit: f.c }))),
                (0, E.cache)(async (e) => b(e, async (e, t) => e.getMetatagArtists({ id: t, offset: 0, limit: f.c, period: 'week' }))),
                (0, E.cache)(async (e) => b(e, async (e, t) => e.getMetatagById({ id: t }))),
                (0, E.cache)(async (e) => b(e, async (e, t) => e.getMetatagPlaylists({ id: t, offset: 0, limit: f.c, withLikesCount: !0 })));
        },
        51770: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var r = a(91945),
                i = a(31322),
                s = a(79722);
            class n extends i.X {
                async progressSync(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/sync',
                            this.createHttpOptions({
                                timeoutKey: 'progressSync',
                                params: e,
                                json: { lastSyncTimestamp: e.lastSyncTimestamp, trackStreams: e.trackStreams },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumFinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markFinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/save-current',
                            this.createHttpOptions({
                                timeoutKey: 'progressSaveCurrent',
                                params: e,
                                searchParams: (0, s.P)({
                                    trackId: e.trackId,
                                    positionSec: e.positionSec,
                                    trackLengthSec: e.trackLengthSec,
                                    finished: e.finished,
                                    timestamp: e.timestamp,
                                }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, r._)(this, 'httpClient', void 0), (0, r._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
        },
        53393: (e, t, a) => {
            'use strict';
            a.d(t, { SlamProvider: () => y });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(39407),
                o = a(75807),
                l = a(17129),
                d = a(94299),
                u = a(44547),
                c = a(91027),
                h = a(15444),
                g = a(49574);
            let m = !0,
                y = (0, i.PA)((e) => {
                    var t, a, i;
                    let { children: y } = e,
                        { slam: p, user: v, experiments: S, library: E } = (0, g.Pjs)(),
                        f = (0, g.jRO)(),
                        b = (0, g.NFA)(),
                        P = b.get(g.U2_),
                        _ = b.get(g.vgk),
                        I = (0, g.gQL)(),
                        { notify: C } = (0, g.lkh)(),
                        k = (0, c.c)((e) => {
                            p.setNetworkStatus(e);
                        }),
                        T = (0, c.c)((e) => {
                            let { id: t, state: a } = e;
                            p.setTrack(t, a),
                                a.loadingState === u.DT.DOWNLOAD_FAILED &&
                                    C((0, r.jsx)(h.i, { message: (0, r.jsx)(n.A, { id: 'offline.track-download-error' }) }), { containerId: g.uQT.ERROR });
                        }),
                        A = (0, c.c)((e) => {
                            p.setTracks(e);
                        });
                    return (
                        v.account.data.uid &&
                            v.hasPlus &&
                            f.init({
                                userConfig: { uid: v.account.data.uid },
                                resources: { tracksResource: b.get(g.Ooh), getFileInfoResource: b.get(g.qTR), availabilityResource: b.get(g.$5W) },
                                downloaderVariables: { maxConcurrentDownloads: 5, getQuality: () => (0, o.i)({ productQuality: null == I ? void 0 : I.quality.value }) },
                                featureFlags: { entities: !0 },
                                tracksControllerVariables: { requestTrackChunkSize: 100 },
                                trackDownloadTaskParams: {
                                    secretKey: b.get(g.twC).player.secretKey,
                                    transport: d.o.ENCRAW,
                                    variables: { chunkSize: 1048576, coverSize: 1e3, codecs: l.iy },
                                },
                            }),
                        (0, s.useEffect)(() => {
                            if (m) {
                                var e;
                                null == (e = f.tracksController) ||
                                    e.getTracksCount().then((e) => {
                                        let t = (0, g.f2y)(e);
                                        t && _.count({ [g.xQR.TRACKS_COUNT]: t }, g.l6e);
                                    }),
                                    (m = !1);
                            }
                        }, [_, f.tracksController]),
                        (0, s.useEffect)(() => {
                            if (void 0 !== v.puid && !S.checkExperiment(g.zal.WebNextOfflineDegradation, 'default')) {
                                var e, t;
                                let a = null == (e = S.getExperiment(g.zal.WebNextOfflineDegradation)) ? void 0 : e.group,
                                    r = ''.concat(g.cYZ.OfflineDegradation, '_').concat(v.puid),
                                    i = P.get(r);
                                a && a !== i && (null == (t = f.tracksController) || t.clearAll(), P.set(r, a));
                            }
                        }, [S, P, f, v.puid]),
                        (0, s.useEffect)(() => {
                            var e, t, a;
                            return (
                                null == (e = f.store) || e.tracks.events.on(u.je.ENTITY_CHANGED, T),
                                null == (t = f.store) || t.tracks.events.on(u.je.STATE_CHANGED, A),
                                null == (a = f.tracksController) || a.initState(),
                                () => {
                                    var e, t;
                                    null == (e = f.store) || e.tracks.events.off(u.je.ENTITY_CHANGED, T),
                                        null == (t = f.store) || t.tracks.events.off(u.je.STATE_CHANGED, A);
                                }
                            );
                        }, [T, A, null == (t = f.store) ? void 0 : t.tracks.events, f.tracksController]),
                        (0, s.useEffect)(() => {
                            var e;
                            return (
                                null == (e = f.network) || e.subscribe(k),
                                () => {
                                    var e;
                                    null == (e = f.network) || e.unsubscribe(k);
                                }
                            );
                        }, [k, f.network, null == (a = f.network) ? void 0 : a.subscribe, null == (i = f.network) ? void 0 : i.unsubscribe]),
                        (0, s.useEffect)(() => {
                            let e = (0, g.gHp)(P);
                            p.setOfflineMode(e);
                        }, [P, p]),
                        (0, s.useEffect)(() => {
                            v.isAuthorized && !p.isOfflineModeEnabled && (E.isNeededToLoad || E.isRejected) && E.getData();
                        }, [E, p.isOfflineModeEnabled, v.isAuthorized]),
                        (0, r.jsx)(g.h5g.Provider, { value: f.artistsController, children: (0, r.jsx)(g.mDy.Provider, { value: f.playlistsController, children: y }) })
                    );
                });
        },
        53737: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePage: () => _ });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(46049),
                u = a(71926),
                c = a(32381),
                h = a(16486),
                g = a(58634),
                m = a(75645),
                y = a(50510),
                p = a(49574),
                v = a(44574),
                S = a(83470),
                E = a(33797),
                f = a(55550),
                b = a(34627),
                P = a.n(b);
            let _ = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    { genre: s } = (0, p.Pjs)(),
                    { formatMessage: b } = (0, l.A)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    C = (0, p.W6M)();
                return (s.isNotFound && (0, n.notFound)(),
                (0, o.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                (0, p.Jzs)(s.isResolved),
                ((e) => {
                    (0, o.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => ({
                            id: '',
                            title: { title: '', fullTitle: e.fullTitle || '' },
                            liked: !1,
                            tracks: [],
                            artists: e.artists.map(E.NE),
                            composers: [],
                            albums: e.albums.map(h.fO),
                            playlists: e.playlists.map(f.Ji),
                        }))(e);
                        (0, S.M)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, p.jxB)(e);
                        });
                    }, [e]);
                })(s),
                t && s.isNeededToLoad && (0, o.use)(s.getData({ id: t, preloadedMeta: a })),
                s.isRejected && !s.isNotFound)
                    ? (0, r.jsx)(c.w, {})
                    : (0, r.jsx)(p.nVz, {
                          pageId: p._Q$.GENRE,
                          children: (0, r.jsxs)(m.hO, {
                              scrollElement: _,
                              outerTitle: s.fullTitle,
                              children: [
                                  (0, r.jsx)(v.Y9, {
                                      variant: v.Vw.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: C.canBack,
                                      children: (0, r.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                  }),
                                  (0, r.jsx)(d.N, {
                                      className: P().root,
                                      containerClassName: P().content,
                                      ref: I,
                                      children: (0, r.jsxs)('div', {
                                          className: P().carouselBlocks,
                                          children: [
                                              s.hasPlaylists &&
                                                  (0, r.jsx)(p.FoH, {
                                                      blockId: p.hf$.PLAYLISTS_CAROUSEL,
                                                      blockType: p.hf$.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: p.hf$.PLAYLISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, r.jsx)(y.EC, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(P().carouselBlockHeader, P().carouselBlock),
                                                          containerClassName: P().carouselBlock,
                                                          playlists: s.playlists,
                                                          title: b({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/playlists'),
                                                      }),
                                                  }),
                                              s.hasAlbums &&
                                                  (0, r.jsx)(p.FoH, {
                                                      blockId: p.hf$.ALBUMS_CAROUSEL,
                                                      blockType: p.hf$.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: p.hf$.ALBUMS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, r.jsx)(h.pZ, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(P().carouselBlockHeader, P().carouselBlock),
                                                          containerClassName: P().carouselBlock,
                                                          albums: s.albums,
                                                          title: b({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/albums'),
                                                      }),
                                                  }),
                                              s.hasArtists &&
                                                  (0, r.jsx)(p.FoH, {
                                                      blockId: p.hf$.ARTISTS_CAROUSEL,
                                                      blockType: p.hf$.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: p.hf$.ARTISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, r.jsx)(v.OY, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(P().carouselBlockHeader, P().carouselBlock),
                                                          containerClassName: P().carouselBlock,
                                                          title: b({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/artists'),
                                                          children: s.artists.map((e) => (0, r.jsx)(g.ao, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
        },
        55646: (e, t, a) => {
            'use strict';
            a.d(t, { ChartTracksPage: () => E });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(59824),
                d = a(71483),
                u = a(79856),
                c = a(71926),
                h = a(32381),
                g = a(75645),
                m = a(80864),
                y = a(49574),
                p = a(44574),
                v = a(56772),
                S = a.n(v);
            let E = (0, s.PA)(() => {
                let { formatMessage: e } = (0, o.A)(),
                    {
                        chart: { tracksSubPage: t },
                        settings: { isMobile: a },
                    } = (0, y.Pjs)(),
                    s = (0, y.W6M)(),
                    { contentScrollRef: v, setContentScrollRef: E } = (0, y.gKY)(),
                    f = (0, y.wZZ)(),
                    { from: b } = (0, y.fyy)({ pageId: y._Q$.CHART });
                (0, y.Jzs)(t.isResolved);
                let P = (0, n.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            return a && !t.isLoading && t.playlistMeta
                                ? (0, r.jsx)(m.QB, {
                                      track: a,
                                      playContextParams: f(e, {
                                          contextData: { type: d.K.Playlist, meta: { id: ''.concat(t.playlistMeta.uid, ':').concat(t.playlistMeta.kind) }, from: b },
                                          queueParams: { index: e, entityId: a.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, r.jsx)(p.DS, { isActive: !0, className: S().shimmerItem, variant: y.Xjt.PLAYLIST });
                        },
                        [b, f, t.isLoading, t.items, t.playlistMeta],
                    ),
                    _ = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(p.A, { children: (0, r.jsx)(p.wi, { className: S().footer }) }) }), []),
                    I = (0, n.useMemo)(
                        () =>
                            t.title
                                ? (0, r.jsx)(c.Heading, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, r.jsx)(u.Shimmer, { className: S().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getTracks()), t.isRejected)
                    ? (0, r.jsx)(h.w, {})
                    : (0, r.jsx)(y.nVz, {
                          pageId: y._Q$.CHART,
                          children: (0, r.jsx)(g.hO, {
                              scrollElement: v,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, r.jsxs)('div', {
                                  className: S().root,
                                  ...(0, l.Am)(l.Xk.chart.CHART_PAGE),
                                  children: [
                                      (0, r.jsx)(p.Y9, { variant: p.Vw.TEXT, withForwardControl: !1, withBackwardControl: s.canBack, children: I }),
                                      (0, r.jsx)(p.$$, {
                                          className: (0, i.$)(S().scrollContainer, S().important),
                                          listClassName: S().content,
                                          customComponents: _,
                                          totalCount: t.items.length,
                                          itemContentCallback: P,
                                          debounceDurationInMs: 300,
                                          handleRef: E,
                                          context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                          isMobileLayout: a,
                                          useWindowScroll: a,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        56033: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            let r = (e) => {
                if ('number' == typeof e && !Number.isNaN(e)) return e;
                if ('string' == typeof e) {
                    let t = Number.parseInt(e, 10);
                    if (!Number.isNaN(t)) return t;
                }
            };
        },
        56589: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        56772: (e) => {
            e.exports = {
                root: 'ChartTracksPage_root__QMbqY',
                scrollContainer: 'ChartTracksPage_scrollContainer__Pxe8S',
                important: 'ChartTracksPage_important__Lddyf',
                content: 'ChartTracksPage_content__yyIAN',
                footer: 'ChartTracksPage_footer__6sNBk',
                shimmerItem: 'ChartTracksPage_shimmerItem__YwM0h',
            };
        },
        57401: (e) => {
            e.exports = { root: 'GenreArtistsPage_root__PgtIz', container: 'GenreArtistsPage_container__NruTu', footer: 'GenreArtistsPage_footer__fYaCO' };
        },
        57510: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { TranslationsProvider: () => n });
            var r = a(32290),
                i = a(60764),
                s = a(49574);
            let n = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: n, defaultLanguage: o } = (0, s.h6b)(),
                    l = (0, s.Crf)();
                return (0, r.jsx)(i.A, { onError: l, defaultLocale: o, locale: n, messages: a, children: t });
            };
        },
        58108: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        60247: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingCrackdownInitializer: () => o });
            var r = a(96103),
                i = a(49574),
                s = a(56033),
                n = a(1340);
            let o = (0, r.PA)(() => {
                var e;
                let {
                        modals: { crackdownModal: t, promoLandingBuySubscriptionModal: a },
                        settings: { isMobile: r },
                        experiments: o,
                        promolanding: { state: l },
                    } = (0, i.Pjs)(),
                    { isFreemium: d } = (0, i.XCI)(),
                    u = d && o.checkExperiment(i.zal.WebNextPromoLanding, 'on'),
                    c = null == (e = o.getExperiment(i.zal.WebNextPromoLandingCrackdownInterval)) ? void 0 : e.value.interval;
                (0, n.W)({ isEnabled: u, intervalMs: (0, s.P)(c), modal: r ? a : t, playbackId: i.V_r.PROMO_LANDING, sonataState: l });
            });
        },
        60637: (e, t, a) => {
            'use strict';
            a.d(t, { GenreNotFoundPage: () => n });
            var r = a(32290),
                i = a(96103),
                s = a(80719);
            let n = (0, i.PA)(() => (0, r.jsx)(s.M, {}));
        },
        60780: (e, t, a) => {
            'use strict';
            a.d(t, { UlitochkaInitializer: () => l });
            var r = a(32290),
                i = a(96103),
                s = a(59569),
                n = a(91027),
                o = a(49574);
            let l = (0, i.PA)((e) => {
                let { nonce: t } = e,
                    { experiments: a } = (0, o.Pjs)(),
                    i = (0, n.c)(() => {
                        window.Ya.ulitochka.init({
                            theme: 'light',
                            platform: 'desktop',
                            customButtonStyle: { right: 5, top: 60, left: 'auto', border: 0, background: 'none' },
                            withReactFallbackLoading: !0,
                            disableAnalytics: !0,
                        });
                    });
                if (a.checkExperiment(o.zal.WebNextUlitochka, 'on'))
                    return (0, r.jsx)(s.default, {
                        src: 'https://yastatic.net/s3/ulitochka/latest/ulitochka.min.js',
                        nonce: null != t ? t : void 0,
                        onLoad: i,
                        async: !0,
                    });
            });
        },
        62797: (e, t, a) => {
            'use strict';
            a.d(t, { UgcUploadInitializer: () => v });
            var r = a(96103),
                i = a(55178),
                s = a(49574),
                n = a(32290),
                o = a(60900),
                l = a(44574),
                d = a(39407),
                u = a(59824),
                c = a(71926),
                h = a(1918),
                g = a.n(h),
                m = (function (e) {
                    return (e.ERROR = 'error'), (e.SUCCESS = 'success'), e;
                })({});
            let y = (e) => {
                let { playlistName: t, url: a, variant: r } = e,
                    s = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(l.N_, {
                                href: a,
                                className: g().link,
                                children: (0, n.jsx)(c.Caption, { className: g().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: t }),
                            }),
                        [t, a],
                    ),
                    o = (0, i.useMemo)(
                        () =>
                            'error' === r
                                ? (0, n.jsx)(c.Caption, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      ...(0, u.Am)(u.S7.BASE_NOTIFICATION_UGC_TRACK_ERROR_TEXT),
                                      children: (0, n.jsx)(d.A, { id: 'ugc.notification-unknown-error', values: { playlistName: s } }),
                                  })
                                : (0, n.jsxs)(c.Caption, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      children: [(0, n.jsx)(d.A, { id: 'ugc.notification-success', values: { playlistName: s } }), ';'],
                                  }),
                        [s, r],
                    );
                return (0, n.jsx)(l.$W, { className: g().root, message: o });
            };
            var p = a(71983);
            let v = (0, r.PA)(() => {
                let { ugcUploadCenter: e } = (0, s.Pjs)(),
                    t = (0, i.useRef)(void 0);
                (() => {
                    var e;
                    let {
                            ugcUploadCenter: { notifications: t },
                            playlist: a,
                        } = (0, s.Pjs)(),
                        { notify: r } = (0, s.lkh)(),
                        { formatMessage: d } = (0, o.A)();
                    (0, i.useEffect)(() => {
                        t.showAllNotifications().forEach((e) => {
                            switch (e.type) {
                                case p.u.FILE_TOO_LARGE:
                                    r((0, n.jsx)(l.hT, { error: d({ id: 'ugc.notification-too-large-file-error' }) }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.TOO_MANY_FILES:
                                    r((0, n.jsx)(l.hT, { error: d({ id: 'ugc.notification-too-many-files-error' }) }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.UNKNOWN_ERROR:
                                    r((0, n.jsx)(y, { url: e.playlist.url, playlistName: e.playlist.title, variant: m.ERROR }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.SUCCESS:
                                    var t;
                                    (null == (t = a.meta) ? void 0 : t.kind) !== e.playlist.kind &&
                                        r((0, n.jsx)(y, { url: e.playlist.url, playlistName: e.playlist.title, variant: m.SUCCESS }), { containerId: s.uQT.INFO });
                            }
                        });
                    }, [d, t, t.pairs.length, r, null == (e = a.meta) ? void 0 : e.kind]);
                })();
                let a = (0, i.useCallback)(() => {
                        e.checkProcessingTracks();
                    }, [e]),
                    r = (0, i.useCallback)(() => {
                        t.current || (t.current = setInterval(a, 2e3));
                    }, [a]),
                    d = (0, i.useCallback)(() => {
                        clearInterval(t.current), (t.current = void 0);
                    }, []);
                (0, i.useEffect)(() => {
                    e.shouldCheckProcessingTracks ? r() : d();
                }, [d, r, e.shouldCheckProcessingTracks]),
                    (0, i.useEffect)(() => () => d(), [d]);
            });
        },
        63054: (e, t, a) => {
            'use strict';
            a.d(t, { PostPage: () => L });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(18889),
                d = a(46049),
                u = a(79856),
                c = a(71926),
                h = a(32381),
                g = a(75645),
                m = a(49574),
                y = a(44574),
                p = a(15910),
                v = a.n(p);
            let S = () =>
                (0, r.jsxs)('div', {
                    className: v().root,
                    children: [(0, r.jsx)(u.Shimmer, { radius: 'l', className: v().top }), (0, r.jsx)(u.Shimmer, { radius: 'l', className: v().bottom })],
                });
            var E = a(19182),
                f = a.n(E),
                b = a(16486),
                P = a(9905),
                _ = a.n(P);
            let I = (0, s.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, r.jsx)('div', {
                    className: _().root,
                    children: (0, r.jsx)('div', {
                        className: _().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, r.jsx)(b.aX, { className: _().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var C = a(58634),
                k = a(98503),
                T = a.n(k);
            let A = (0, s.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, r.jsx)('div', {
                    className: T().root,
                    children: (0, r.jsx)('div', {
                        className: T().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, r.jsx)(C.ao, { className: T().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var D = a(50510),
                N = a(79043),
                R = a.n(N);
            let x = (0, s.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, r.jsx)('div', {
                        className: R().root,
                        children: (0, r.jsx)('div', {
                            className: R().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, r.jsx)(D.B6, { className: R().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                L = (0, s.PA)((e) => {
                    let { promoId: t } = e,
                        { post: a } = (0, m.Pjs)(),
                        s = (0, m.W6M)(),
                        { contentScrollRef: p, setContentScrollRef: v } = (0, m.gKY)();
                    (0, o.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                        a.isNotFound && (0, n.notFound)(),
                        (0, m.Jzs)(a.isResolved);
                    let E = (0, o.useMemo)(() => {
                        if (a.isLoading) return (0, r.jsx)(S, {});
                        switch (a.promotionType) {
                            case l.Q.ARTISTS:
                                return (0, r.jsx)(A, { artists: a.artists });
                            case l.Q.ALBUMS:
                                return (0, r.jsx)(I, { albums: a.albums });
                            case l.Q.PLAYLISTS:
                                return (0, r.jsx)(x, { playlists: a.playlists });
                            default:
                                (0, n.notFound)();
                        }
                    }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
                    return (t && a.isNeededToLoad && (0, o.use)(a.getData({ promoId: t })), a.isSomethingWrong)
                        ? (0, r.jsx)(h.w, {})
                        : (0, r.jsx)(m.nVz, {
                              pageId: m._Q$.POST,
                              children: (0, r.jsx)(g.hO, {
                                  scrollElement: p,
                                  outerTitle: a.title || void 0,
                                  children: (0, r.jsxs)('div', {
                                      className: f().root,
                                      children: [
                                          (0, r.jsx)(y.Y9, {
                                              variant: y.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: s.canBack,
                                              children: a.title
                                                  ? (0, r.jsx)(c.Heading, {
                                                        id: 'post-header',
                                                        variant: 'h2',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: a.title,
                                                    })
                                                  : (0, r.jsx)(u.Shimmer, { className: f().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, r.jsx)(d.N, {
                                              containerClassName: (0, i.$)(f().scrollContainer, f().important),
                                              className: f().scrollableContainer,
                                              ref: v,
                                              children: (0, r.jsx)('div', { className: f().container, children: E }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        63387: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPersonalDummyPage: () => c });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(71926),
                o = a(49574),
                l = a(44574),
                d = a(56589),
                u = a.n(d);
            let c = (0, s.PA)(() => {
                let {
                    playlistPersonal: { dummyCoverUrl: e, dummyDescription: t, title: a },
                } = (0, o.Pjs)();
                return (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.Y9, {}),
                        (0, r.jsx)(l.BW, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: u().cover }),
                        a && (0, r.jsx)(n.Heading, { className: (0, i.$)(u().title, u().important), variant: 'h1', size: 'xs', children: a }),
                        t &&
                            (0, r.jsx)(n.Caption, {
                                className: (0, i.$)(u().text, u().important),
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: t,
                            }),
                    ],
                });
            });
        },
        63518: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => n });
            var r = a(49574),
                i = a(43993),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: o, tld: l, host: d } = t,
                    u = await (0, r.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = (0, i.f)({ genreTitle: c, messageFormatter: u }),
                    m = s.env.ASSET_PREFIX || '',
                    y = ''.concat(d).concat(m, '/meta/og-image.png');
                return {
                    title: h,
                    description: g,
                    openGraph: (0, r.i$E)({
                        ogTitle: (0, r.NsT)(c),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: y,
                    }),
                    twitter: (0, r.HRN)({ cardType: r.WfF.APP, title: h, url: null != o ? o : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X5i)({
                        additional: { tld: l, url: null != o ? o : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, r.SEs)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        64423: (e, t, a) => {
            'use strict';
            a.d(t, { EX: () => g.PostPage, VQ: () => h });
            var r = a(60754),
                i = a(87953),
                s = a(18889),
                n = a(16486),
                o = a(50510),
                l = a(33797),
                d = a(55550),
                u = a(49574),
                c = a(95428);
            let h = r.gK
                .compose(
                    r.gK.model('PostPage', {
                        errorStatusCode: r.gK.maybe(r.gK.number),
                        title: r.gK.maybeNull(r.gK.string),
                        promotionType: r.gK.maybeNull(r.gK.enumeration(Object.values(s.Q))),
                        artists: r.gK.maybe(r.gK.array(l.PK)),
                        albums: r.gK.maybe(r.gK.array(n.JC)),
                        playlists: r.gK.maybe(r.gK.array(o.IP)),
                    }),
                    c.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                            return e.isRejected && t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { promoId: a } = t,
                            { feedResource: s, modelActionsLogger: o } = (0, r._$)(e);
                        if (e.loadingState !== u.GuX.PENDING)
                            try {
                                e.loadingState = u.GuX.PENDING;
                                let t = yield s.getPromotionsById({ promoId: a });
                                (e.title = t.title),
                                    (e.promotionType = t.promotionType),
                                    t.artists && t.artists.length > 0 && (e.artists = (0, r.wg)(t.artists.map(l.dM))),
                                    t.albums && t.albums.length > 0 && (e.albums = (0, r.wg)(t.albums.map(n.pp))),
                                    t.playlists &&
                                        t.playlists.length > 0 &&
                                        (e.playlists = (0, r.wg)(
                                            t.playlists.map((e) => {
                                                let { playlist: t } = e;
                                                return (0, d.jX)(t);
                                            }),
                                        )),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                o.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = u.GuX.IDLE), (e.title = null), (e.artists = (0, r.wg)([])), (e.albums = (0, r.wg)([]));
                    },
                }));
            a(32924);
            var g = a(63054);
        },
        64657: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { WebInitializer: () => o });
            var r = a(32290),
                i = a(96103),
                s = a(49574);
            let n = (0, i.PA)((e) => {
                    let { children: t, userIp: a } = e,
                        { location: r } = (0, s.Pjs)();
                    return t;
                }),
                o = (e) => {
                    let { userIp: t } = e;
                    return (0, r.jsx)(n, { userIp: t });
                };
        },
        65738: (e, t, a) => {
            'use strict';
            a.d(t, { ShortcutsProvider: () => d });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(49574),
                o = a(48007);
            let l = null,
                d = (0, i.PA)((e) => {
                    let { children: t } = e,
                        { sonataState: a } = (0, n.Pjs)(),
                        i = (0, s.useMemo)(() => (l || (l = new n.G8o(new n.z$B())), l), []);
                    return (
                        (0, o.E)({ controller: i, sonataState: a, groupId: n.Mo.MAIN }),
                        (0, s.useEffect)(
                            () => (
                                null == i || i.listen(),
                                () => {
                                    null == i || i.stopListening();
                                }
                            ),
                            [i],
                        ),
                        (0, r.jsx)(n.Pic.Provider, { value: i, children: t })
                    );
                });
        },
        66369: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { BuySubscriptionParamsInitializer: () => n });
            var r = a(55178),
                i = a(49574);
            let s = { TARGET: 'target', COMMUNICATION_ID: 'communication_id', CAMPAIGN_ID: 'campaign_id' },
                n = () => {
                    let e = (0, i.NFA)(),
                        t = (0, i.XJ9)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let a = e.get(i.vHc),
                                r = (0, i.qne)(s.TARGET),
                                n = (0, i.qne)(s.COMMUNICATION_ID),
                                o = (0, i.qne)(s.CAMPAIGN_ID);
                            if (!(r || n || o)) return;
                            a.set(i.cYZ.BuySubscriptionParams, { target: r, communicationId: n, campaignId: o });
                            let l = (0, i.jrm)();
                            if (null === l) return;
                            l.delete(s.TARGET), l.delete(s.COMMUNICATION_ID), l.delete(s.CAMPAIGN_ID);
                            let d = new URL(window.location.href);
                            (d.search = l.toString()), t(d.toString());
                        }, [e, t]),
                        null
                    );
                };
        },
        66652: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        67985: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => _, _: () => o });
            var r = a(60754),
                i = a(73298),
                s = a(49574),
                n = a(95428);
            let o = r.gK
                .compose(r.gK.model('ConcertsDetailsPage', { concerts: r.gK.maybeNull(r.gK.array(i.aR)), title: r.gK.maybeNull(r.gK.string) }), n.XT, n.pl)
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { type: a, id: n } = t,
                            { concertsResource: o, modelActionsLogger: l } = (0, r._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = s.GuX.PENDING;
                                let { concerts: t } = (0, r.Zn)(e),
                                    l = t.concertsLocationForRequest,
                                    { items: d, title: u } = yield o.getConcertsDetails({ type: a, id: n, locations: l });
                                (e.concerts = (0, r.wg)(d.map((e) => (0, i.HN)(e)))), (e.title = null != u ? u : null), (e.loadingState = s.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t), (e.loadingState = s.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.GuX.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                    },
                }));
            var l = a(32290),
                d = a(96103),
                u = a(21916),
                c = a(55178),
                h = a(60900),
                g = a(91027),
                m = a(54862),
                y = a(46049),
                p = a(71926),
                v = a(32381),
                S = a(75645),
                E = a(20194),
                f = a(44574),
                b = a(77028),
                P = a.n(b);
            let _ = (0, d.PA)((e) => {
                let { type: t, id: a } = e,
                    r = (0, c.useId)(),
                    { concertsDetails: n, experiments: o } = (0, s.Pjs)(),
                    { formatMessage: d } = (0, h.A)(),
                    { contentScrollRef: b, setContentScrollRef: _ } = (0, s.gKY)(),
                    I = (0, s.W6M)(),
                    [C, k] = (0, m.d)(),
                    T = (0, s.fBs)(),
                    A = (0, c.useRef)(!1),
                    D = o.checkExperiment(s.zal.WebNextConcertsIdentityEventType, 'on'),
                    N = (0, g.c)(() => {
                        var e;
                        return !n.isShimmerVisible && (null == (e = n.concerts) ? void 0 : e.length) ? n.concerts.length : 50;
                    }),
                    {
                        virtualizer: R,
                        rowResizeObserver: x,
                        columnCount: L,
                        indices: w,
                    } = (0, E.LW)({
                        count: N(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: C,
                    }),
                    O = { '--feed-concerts-height': ''.concat(R.getTotalSize(), 'px'), '--feed-concerts-column-count': L },
                    M = (0, c.useCallback)(
                        (e) => {
                            var t;
                            let a = null == (t = n.concerts) ? void 0 : t[e];
                            return !a || n.isShimmerVisible ? (0, l.jsx)(i.LY, { isActive: n.isShimmerActive }) : (0, l.jsx)(i.Qb, { concert: a });
                        },
                        [n.concerts, n.isShimmerActive, n.isShimmerVisible],
                    );
                if (
                    ((0, c.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    (0, c.useEffect)(() => {
                        n.isResolved && !A.current && (T(), (A.current = !0));
                    }, [n.isResolved, T]),
                    n.isNeededToLoad && (0, c.use)(n.getData({ type: t, id: a })),
                    (!o.checkExperiment(s.zal.WebNextConcertsDetailsPage, 'on') || o.checkExperiment(s.zal.disableAllConcerts, 'on')) && (0, u.notFound)(),
                    n.isRejected)
                )
                    return (0, l.jsx)(v.w, {});
                let F = D && n.title ? n.title : d({ id: 'concerts.details-title' });
                return (0, l.jsx)(S.hO, {
                    scrollElement: b,
                    outerTitle: F,
                    children: (0, l.jsxs)('div', {
                        className: P().root,
                        children: [
                            (0, l.jsx)(f.Y9, {
                                variant: f.Vw.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: I.canBack,
                                children: (0, l.jsx)(p.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: F }),
                            }),
                            (0, l.jsxs)(y.N, {
                                ref: _,
                                className: P().scrollContainer,
                                children: [
                                    (0, l.jsx)('div', {
                                        className: P().content,
                                        children: (0, l.jsx)('div', {
                                            'aria-labelledby': r,
                                            ref: k,
                                            style: O,
                                            className: P().container,
                                            children: R.getVirtualItems().map((e) =>
                                                (0, l.jsx)(
                                                    E.Ux,
                                                    {
                                                        className: P().row,
                                                        columnClassName: P().column,
                                                        virtualItem: e,
                                                        resizeObserver: x,
                                                        indices: w,
                                                        renderItemByIndex: M,
                                                        scrollMargin: R.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, l.jsx)(f.A, { children: (0, l.jsx)(f.wi, { className: P().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        68740: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { HistoryProvider: () => d });
            var r = a(32290),
                i = a(21916),
                s = a(55178),
                n = a(91027),
                o = a(49574);
            let l = null,
                d = (e) => {
                    let { children: t } = e,
                        a = (0, o.NFA)(),
                        d = (0, i.useRouter)(),
                        u = (0, i.usePathname)(),
                        c = (0, i.useSearchParams)(),
                        [h, g] = (0, s.useState)(!1),
                        [m, y] = (0, s.useState)(!1),
                        [p, v] = (0, s.useState)(null),
                        S = (0, s.useRef)(0),
                        E = (0, s.useRef)(null),
                        f = (0, s.useMemo)(() => {
                            if (l) return l;
                            let e = a.get(o.vHc);
                            return (l = new o.fiH(e));
                        }, [a]),
                        b = (0, n.c)(() => {
                            f && (g(f.canBack), y(f.canForward), v(f.state));
                        }),
                        P = (0, n.c)((e) => {
                            f && (f.replaceState(e), d.replace(e.href));
                        }),
                        _ = (0, n.c)((e) => {
                            f && (f.pushState(e), b());
                        }),
                        I = (0, n.c)(() => {
                            f && (f.back(), b(), d.back());
                        }),
                        C = (0, n.c)(() => {
                            f && (f.forward(), b(), d.forward());
                        });
                    (0, s.useEffect)(() => {
                        var e;
                        let t = [u, c.toString()].join('?');
                        (!(null == f ? void 0 : f.state) || (null == f || null == (e = f.state) ? void 0 : e.isLocationNotEqual(t))) && _({ href: t });
                    }, [f, u, c, _]);
                    {
                        let e = (0, o.Cvn)(u, c);
                        e !== E.current && ((E.current = e), (S.current = S.current + 1));
                    }
                    return (0, r.jsx)(o.Q0U.Provider, {
                        value: { pushState: _, replaceState: P, canForward: m, canBack: h, back: I, forward: C, state: p, length: S.current },
                        children: t,
                    });
                };
        },
        68816: (e) => {
            e.exports = {
                root: 'ChartPodcastsPage_root__J5lnx',
                scrollContainer: 'ChartPodcastsPage_scrollContainer__WQTf7',
                important: 'ChartPodcastsPage_important__fW45m',
                footer: 'ChartPodcastsPage_footer__7ytrT',
                item: 'ChartPodcastsPage_item__vGRt8',
                content: 'ChartPodcastsPage_content__NcV4M',
            };
        },
        68863: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPersonalPage: () => d });
            var r = a(32290),
                i = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(49574),
                l = a(63387);
            let d = (0, i.PA)((e) => {
                let { params: t, searchParams: a } = e,
                    { playlistPersonal: i } = (0, o.Pjs)(),
                    d = i.getUrl(a);
                if (
                    ((0, n.useEffect)(() => {
                        i.isNeededToLoad && i.getPlaylistPersonalDetails(t.playlistId);
                    }, [i.isNeededToLoad, t.playlistId, i]),
                    (0, n.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    (0, o.Jzs)(i.isResolved),
                    (i.isNotFound || i.isRejected) && (0, s.notFound)(),
                    i.isResolved && !i.isReady)
                )
                    return i.dummyDescription || (0, s.notFound)(), (0, r.jsx)(l.PlaylistPersonalDummyPage, {});
                i.isResolved && i.isReady && (0, s.redirect)(d);
            });
        },
        69410: (e, t, a) => {
            'use strict';
            a.d(t, { ChartPodcastsPage: () => E });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(59824),
                u = a(79856),
                c = a(71926),
                h = a(32381),
                g = a(16486),
                m = a(75645),
                y = a(49574),
                p = a(44574),
                v = a(68816),
                S = a.n(v);
            let E = (0, s.PA)((e) => {
                let { categoryId: t } = e,
                    {
                        chart: { podcastsSubPage: a },
                        settings: { isMobile: s },
                    } = (0, y.Pjs)(),
                    { contentScrollRef: v, setContentScrollRef: E } = (0, y.gKY)(),
                    { formatMessage: f } = (0, l.A)(),
                    b = (0, y.W6M)(),
                    P = (0, o.useMemo)(() => ({ Footer: () => (0, r.jsx)(p.A, { children: (0, r.jsx)(p.wi, { className: S().footer }) }) }), []),
                    _ = (0, o.useMemo)(
                        () =>
                            a.title
                                ? (0, r.jsx)(c.Heading, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: a.title })
                                : (0, r.jsx)(u.Shimmer, { className: S().shimmerTitle, radius: 'l' }),
                        [a.title],
                    );
                if (
                    ((0, y.Jzs)(a.isResolved),
                    a.isNotFound && (0, n.notFound)(),
                    (0, o.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                    a.isNeededToLoad && (0, o.use)(a.getData(t)),
                    a.isSomethingWrong)
                )
                    return (0, r.jsx)(h.w, {});
                let I = a.isLoading ? 20 : a.items.length;
                return (0, r.jsx)(y.nVz, {
                    pageId: t ? y._Q$.CHART_PODCASTS_CATEGORY : y._Q$.CHART_PODCASTS,
                    children: (0, r.jsx)(m.hO, {
                        scrollElement: v,
                        outerTitle: a.title,
                        children: (0, r.jsxs)('div', {
                            className: S().root,
                            ...(0, d.Am)(d.Xk.chart.CHART_PODCASTS),
                            children: [
                                (0, r.jsx)(p.Y9, { variant: p.Vw.TEXT, withForwardControl: !1, withBackwardControl: b.canBack, children: _ }),
                                (0, r.jsx)(p.$$, {
                                    className: (0, i.$)(S().scrollContainer, S().important),
                                    listClassName: S().content,
                                    customComponents: P,
                                    itemContentCallback: (e) => {
                                        let t = a.items[e],
                                            i = f({ id: 'loading-messages.entity-is-loading' }, { entityName: f({ id: 'entity-names.album' }) });
                                        return !t || a.isLoading
                                            ? (0, r.jsx)(p.Vt, { 'aria-label': i })
                                            : (0, r.jsx)(g.aX, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: E,
                                    initialItemCount: I,
                                    totalCount: I,
                                    isMobileLayout: s,
                                    useWindowScroll: s,
                                    context: { listAriaLabel: f({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        70063: (e, t, a) => {
            'use strict';
            a.d(t, { KidsPage: () => f });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(39407),
                d = a(59824),
                u = a(73474),
                c = a(46049),
                h = a(71926),
                g = a(43557),
                m = a(32381),
                y = a(75645),
                p = a(49574),
                v = a(44574),
                S = a(96471),
                E = a.n(S);
            let f = (0, s.PA)(() => {
                let { kids: e, user: t } = (0, p.Pjs)(),
                    { formatMessage: a } = (0, o.A)(),
                    { contentScrollRef: s, setContentScrollRef: S } = (0, p.gKY)();
                (0, n.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, p.Jzs)(e.landing.isResolved);
                let f = (0, g._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, n.use)(e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, r.jsx)(p.nVz, {
                        pageId: p._Q$.KIDS,
                        children: (0, r.jsxs)(y.hO, {
                            scrollElement: s,
                            outerTitle: a({ id: 'kids.for-kids' }),
                            children: [
                                (0, r.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, r.jsx)('div', {
                                        className: E().header,
                                        children: (0, r.jsx)(h.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, r.jsx)(l.A, { id: 'kids.for-kids' }),
                                        }),
                                    }),
                                }),
                                (0, r.jsxs)(c.N, {
                                    className: E().root,
                                    containerClassName: E().content,
                                    ref: S,
                                    ...(0, d.Am)(d.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: (0, i.$)(E().landing, { [E().landing_onlyWizard]: f }),
                                            children: (0, r.jsx)(g.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, r.jsx)(m.w, { className: E().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, r.jsx)(v.A, { children: (0, r.jsx)(v.wi, { className: E().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        71983: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => r });
            var r = (function (e) {
                return (e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e;
            })({});
        },
        72461: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        73215: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
            };
        },
        74156: (e, t, a) => {
            'use strict';
            a.d(t, { DeeplinkInitializer: () => d });
            var r = a(96103),
                i = a(21916),
                s = a(55178),
                n = a(44989),
                o = a(49574);
            let l = [o.K3F.DEEPLINK, o.K3F.SEEDS, o.K3F.STATION_ID, o.K3F.OPEN_PLAYER, o.K3F.SCREEN],
                d = (0, r.PA)(
                    () => (
                        (() => {
                            let { fullscreenPlayer: e, sonataState: t, user: a, location: r } = (0, o.Pjs)(),
                                d = (0, i.useSearchParams)(),
                                u = (0, o.XJ9)(),
                                c = d.get(o.K3F.SEEDS),
                                h = d.get(o.K3F.STATION_ID),
                                { isFreemium: g } = (0, o.XCI)(),
                                { state: m, toggleTrue: y } = (0, n.e)(!1),
                                p = (0, s.useMemo)(() => {
                                    let e = c ? c.split(',') : [];
                                    return h && e.unshift(h), e;
                                }, [c, h]),
                                { togglePlay: v } = (0, o.B0S)({ seeds: p, pageIdForFrom: o._Q$.RADIO, blockIdForFrom: p.join('_') });
                            (0, s.useEffect)(() => {
                                if (m) {
                                    let e = new URL(window.location.href);
                                    l.forEach((t) => e.searchParams.delete(t)), u(e.toString()), r.setHref(window.location.href);
                                }
                            }, [r, u, m, r.href]),
                                (0, s.useEffect)(() => {
                                    if (d.get(o.K3F.DEEPLINK) === o.vEM.PLAY_VIBE) {
                                        if (!a.isAuthorized || g) return void y();
                                        t.setShouldApplyYnisonState(!1), v(), 'true' === d.get(o.K3F.OPEN_PLAYER) && e.modal.open(), y();
                                    }
                                    return () => {
                                        t.setShouldApplyYnisonState(!0);
                                    };
                                }, [e.modal, g, d, y, t, v, a.isAuthorized]);
                        })(),
                        null
                    ),
                );
        },
        75763: (e) => {
            e.exports = {
                root: 'KidsCategoryPage_root__bk7_R',
                content: 'KidsCategoryPage_content__LN0NB',
                header: 'KidsCategoryPage_header__Agys3',
                landing: 'KidsCategoryPage_landing__aSDYw',
                landing_onlyWizard: 'KidsCategoryPage_landing_onlyWizard__3EC9N',
                footer: 'KidsCategoryPage_footer__BQhqi',
                error: 'KidsCategoryPage_error__tSXF7',
            };
        },
        75807: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(51607),
                i = a(90369),
                s = a(76232);
            function n(e) {
                let { productQuality: t, entities: a, entity: n } = e,
                    o = !1;
                if ((a && (o = a.some((e) => (0, i.l)(e))), n && (o = (0, i.l)(n)), o)) return r.e.SMART_PREVIEW;
                switch (t) {
                    case s.e.HIGH_QUALITY:
                        return r.e.LOSSLESS;
                    case s.e.BALANCED:
                        return r.e.NQ;
                    case s.e.EFFICIENT:
                        return r.e.LQ;
                    case s.e.PREVIEW:
                        return r.e.PREVIEW;
                    default:
                        return r.e.NQ;
                }
            }
        },
        77028: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        77495: (e, t, a) => {
            'use strict';
            a.d(t, { BuySubscriptionInitializer: () => n });
            var r = a(96103),
                i = a(55178),
                s = a(49574);
            let n = (0, r.PA)(() => {
                let { hasFreeUserAccess: e } = (0, s.XCI)(),
                    t = (0, s.jwr)(),
                    a = (0, s.pFh)('music', e),
                    r = (0, i.useRef)(new Date()),
                    n = (0, i.useCallback)(async () => {
                        try {
                            await a.getData({ page: t.page, places: t.places, widgetServiceName: t.widgetServiceName });
                        } catch (e) {}
                        r.current = new Date();
                    }, [a, t]),
                    o = (0, i.useCallback)(async () => {
                        let e = r.current.getTime() < Date.now() - 6e5;
                        'visible' === document.visibilityState && e && t.shouldFetchOffers && (await n());
                    }, [n, t.shouldFetchOffers]);
                (0, i.useEffect)(() => {
                    if (!e) return;
                    let t = new AbortController();
                    return (
                        window.addEventListener('focus', o, { signal: t.signal }),
                        () => {
                            t.abort();
                        }
                    );
                }, [e, o]);
            });
        },
        78635: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        79043: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        80880: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { LayoutProvider: () => v, setClientSideLayout: () => p });
            var r = a(32290),
                i = a(8055),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(54862);
            let d = {
                Chrome: 105,
                ChromeMobile: 105,
                Edge: 105,
                Firefox: 104,
                MobileFirefox: 104,
                Opera: 90,
                OperaMobile: 80,
                Safari: 16,
                MobileSafari: 16,
                UCBrowser: 15,
                MSIE: 12,
                YandexBrowser: 23,
            };
            var u = a(63618),
                c = a(44574),
                h = a(8960),
                g = a.n(h);
            let m = (e) => {
                let { message: t, closeToast: a } = e;
                return (0, r.jsx)(c.$W, { className: (0, u.$)(g().root, g().important), message: t, closeToast: a });
            };
            var y = a(49574),
                pulseButton = a(63423),
                pulseCaption = a(71926);
            let pulseUpdateStyles = {
                    root: 'NotificationUpdate_root__hpSQi',
                    important: 'NotificationUpdate_important___0WHj',
                    text: 'NotificationUpdate_text__YylYD',
                    button: 'NotificationUpdate_button__F3O16',
                    message: 'NotificationUpdate_message__rLYpW',
                },
                pulseModUpdateToast = (e) => {
                    let { version: t, formatMessage: a, closeToast: i } = e,
                        [s, o] = (0, n.useState)(-1),
                        l = (0, n.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(y.EE.INSTALL_MOD_UPDATE), null == i || i();
                        }, [i]),
                        d = (0, n.useCallback)(() => {
                            var e;
                            null == (e = window.desktopEvents) || e.send(y.EE.DOWNLOAD_MOD_UPDATE);
                        }, []),
                        h = (e) => {
                            let t = a({ id: 'offline.download' });
                            return e < 0 ? (t = a({ id: 'offline.download' })) : e >= 0 && e <= 100 ? (t = 'Скачивание…') : e > 100 && (t = 'Установить'), t;
                        },
                        g = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: pulseUpdateStyles.message,
                                    children: [
                                        (0, r.jsx)(pulseCaption.Caption, {
                                            className: pulseUpdateStyles.text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: a({ id: 'desktop.on-mod-update-available' }, { version: t }),
                                        }),
                                        (0, r.jsx)(pulseButton.$, {
                                            className: pulseUpdateStyles.button,
                                            onClick: s <= 100 ? d : l,
                                            variant: 'default',
                                            color: 'secondary',
                                            size: 'xs',
                                            radius: 'xxxl',
                                            disabled: s <= 100 && s >= 0,
                                            children: (0, r.jsx)(pulseCaption.Caption, { variant: 'div', type: 'controls', size: 'm', children: h(s) }),
                                        }),
                                    ],
                                }),
                            [a, l, t, s, d],
                        ),
                        m = (0, n.useCallback)((e, t, a, r = 0) => {
                            if ('modUpdateToast' !== t) return;
                            if (window.dedupeNonces && window.dedupeNonces[t] === r) return;
                            window.dedupeNonces || (window.dedupeNonces = {}), r && (window.dedupeNonces[t] = r), o(a);
                        }, []);
                    return (
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.PROGRESS_BAR_CHANGE, m),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.PROGRESS_BAR_CHANGE, m);
                                }
                            );
                        }, [m]),
                        (0, n.useEffect)(() => {
                            let e = () => {
                                null == i || i();
                            };
                            return (
                                window.desktopEvents?.on(y.EE.MOD_UPDATE_AVAILABLE, e),
                                () => {
                                    window.desktopEvents?.off?.(y.EE.MOD_UPDATE_AVAILABLE, e);
                                }
                            );
                        }, [i]),
                        (0, r.jsxs)(c.$W, {
                            className: (0, u.$)(pulseUpdateStyles.root, pulseUpdateStyles.important),
                            message: g,
                            children: [
                                (0, r.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: s + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: s <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                },
                pulseToastWithProgress = (e) => {
                    let { closeToast: t, toastID: a, message: i, buttonLabel: s, onButtonClick: o, disabled: l = !1, dismissOnButtonClick: d = !1, createNonce: h = 0 } = e,
                        [g, m] = (0, n.useState)(-1),
                        [p, v] = (0, n.useState)('Ожидание...'),
                        S = '__pulseToastProgressCache',
                        E = (0, n.useCallback)(() => {
                            null == o || o(), d && (null == t || t());
                        }, [d, o, t]),
                        f = (0, n.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: pulseUpdateStyles.message,
                                    children: [
                                        (0, r.jsx)(pulseCaption.Caption, {
                                            className: pulseUpdateStyles.text,
                                            variant: 'div',
                                            type: 'controls',
                                            size: 'm',
                                            children: i.replace('#s', p),
                                        }),
                                        s &&
                                            (0, r.jsx)(pulseButton.$, {
                                                className: pulseUpdateStyles.button,
                                                onClick: E,
                                                variant: 'default',
                                                color: 'secondary',
                                                size: 'xs',
                                                radius: 'xxxl',
                                                disabled: l,
                                                children: (0, r.jsx)(pulseCaption.Caption, { variant: 'div', type: 'controls', size: 'm', children: s }),
                                            }),
                                    ],
                                }),
                            [l, s, i, E, p],
                        ),
                        b = (0, n.useCallback)(
                            (e, t, r, n = 0, i = void 0, o = 0) => {
                                if (t !== a) return;
                                if (o && h && o !== h) return;
                                if (window.dedupeNonces && window.dedupeNonces[t] === n) return;
                                window.dedupeNonces || (window.dedupeNonces = {}),
                                    n && (window.dedupeNonces[t] = n),
                                    window[S] || (window[S] = {}),
                                    (window[S][t] = { progress: r, label: i }),
                                    m(r),
                                    i && v(i);
                            },
                            [a, h],
                        ),
                        P = (0, n.useCallback)(
                            (e, r, i = 0, n = 0) => {
                                if (n && h && n !== h) return;
                                if (window['onBasicToastDismiss' + a] === i) return;
                                i && (window['onBasicToastDismiss' + a] = i), r === a && (window[S] && delete window[S][a], null == t || t());
                            },
                            [t, a, h],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            let e = window[S] && window[S][a];
                            e && (m(e.progress), e.label && v(e.label));
                            return () => {
                                window[S] && delete window[S][a];
                            };
                        }, [a]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.PROGRESS_BAR_CHANGE, b),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.PROGRESS_BAR_CHANGE, b);
                                }
                            );
                        }, [b]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.BASIC_TOAST_DISMISS, P),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.BASIC_TOAST_DISMISS, P);
                                }
                            );
                        }, [P]),
                        (0, r.jsxs)(c.$W, {
                            className: (0, u.$)(pulseUpdateStyles.root, pulseUpdateStyles.important),
                            message: f,
                            children: [
                                (0, r.jsx)('div', {
                                    className: 'qaIScXjx1qyXuaIHXQIo',
                                    style: {
                                        overflow: 'hidden',
                                        left: '0',
                                        top: '0',
                                        position: 'absolute',
                                        width: g + '%',
                                        height: '100%',
                                        backgroundColor: 'rgb(255 255 255)',
                                        opacity: g <= 100 ? 0.1 : 0,
                                        zIndex: 1,
                                        transition: 'opacity 0.3s linear 0.5s, width 0.2s',
                                    },
                                }),
                            ],
                        })
                    );
                };
            let p = (e) => {
                    {
                        document.body.classList.remove('desktop'),
                            e.setLayout((0, y.Svc)(window.innerWidth)),
                            e.setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
                        let t = window.screen.availHeight || window.innerHeight;
                        e.setIsMobileLandscapeHeight(t < 450);
                    }
                },
                v = (0, s.PA)((e) => {
                    let { children: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        { notify: s } = (0, y.lkh)(),
                        { notify: pulseModUpdateNotify, dismiss: pulseModUpdateDismiss } = (0, y.lkh)(),
                        { notify: pulseGpuStallNotify } = (0, y.lkh)(),
                        { notify: pulseAppStallNotify } = (0, y.lkh)(),
                        { notify: pulseBasicToastNotify } = (0, y.lkh)(),
                        { settings: u } = (0, y.Pjs)(),
                        [c, h] = (0, l.d)(),
                        [g, v] = (0, l.d)(),
                        [S, E] = (0, l.d)(),
                        [f, b] = (0, l.d)(),
                        [P, _] = (0, l.d)(),
                        [I, C] = (0, l.d)(),
                        [k, T] = (0, l.d)(),
                        [A, D] = (0, l.d)(),
                        [N, R] = (0, l.d)();
                    u.layout;
                    let x = (0, n.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                p(u);
                            }, 100),
                        [u],
                    ),
                        pulseModUpdateAvailable = (0, n.useCallback)(
                            (e, t, modNewVersion, i = 0) => {
                                if (window.modUpdateAvailableEventDedupeNonce === i) return;
                                (i && (window.modUpdateAvailableEventDedupeNonce = i),
                                    pulseModUpdateNotify((0, r.jsx)(pulseModUpdateToast, { formatMessage: a, version: `${t} -> ${modNewVersion}`, closeToast: pulseModUpdateDismiss }), {
                                        containerId: y.uQT.IMPORTANT,
                                    }));
                            },
                            [a, pulseModUpdateNotify, pulseModUpdateDismiss],
                        ),
                        pulseRestartApplication = (0, n.useCallback)(() => {
                            window.desktopEvents?.send(y.EE.APPLICATION_RESTART);
                        }, []),
                        pulseGpuStall = (0, n.useCallback)(
                            (e, t = 'GPU_STALL', stallNonce = 0) => {
                                if (window.onGPUStallEventDedupeNonce === stallNonce) return;
                                (stallNonce && (window.onGPUStallEventDedupeNonce = stallNonce),
                                    pulseGpuStallNotify(
                                        (0, r.jsx)(pulseToastWithProgress, {
                                            toastID: 'GPU_STALL',
                                            message: `Аппаратное ускорение отключилось: ${t}`,
                                            buttonLabel: 'Исправить',
                                            onButtonClick: pulseRestartApplication,
                                        }),
                                        { containerId: y.uQT.IMPORTANT },
                                    ));
                            },
                            [pulseGpuStallNotify, pulseRestartApplication],
                        ),
                        pulseCancelSafeModeRestart = (0, n.useCallback)(() => {
                            window.desktopEvents?.send(y.EE.APP_STALL_CANCEL_RESTART);
                        }, []),
                        pulseAppStall = (0, n.useCallback)(
                            (e, t = 0) => {
                                if (window.onAppStallStallDedupeNonce === t) return;
                                (window.onAppStallStallDedupeNonce = t,
                                    pulseAppStallNotify(
                                        (0, r.jsx)(pulseToastWithProgress, {
                                            toastID: 'safeModeRestart',
                                            message: 'Плеер запускается слишком долго. Перезагрузка в безопасном режиме через #s',
                                            buttonLabel: 'Отменить',
                                            onButtonClick: pulseCancelSafeModeRestart,
                                            dismissOnButtonClick: !0,
                                        }),
                                        { containerId: y.uQT.IMPORTANT },
                                    ));
                            },
                            [pulseAppStallNotify, pulseCancelSafeModeRestart],
                        ),
                        pulseBasicToastCreate = (0, n.useCallback)(
                            (e, t, toastMessage, buttonLabel, i = 0, actionEvent, actionPayload) => {
                                if (window['onBasicToastCreate' + t] === i) return;
                                (i && (window['onBasicToastCreate' + t] = i),
                                    window['onBasicToastDismiss' + t] && delete window['onBasicToastDismiss' + t],
                                    window.dedupeNonces && delete window.dedupeNonces[t],
                                    window.__pulseToastProgressCache && delete window.__pulseToastProgressCache[t],
                                    pulseBasicToastNotify(
                                        (0, r.jsx)(pulseToastWithProgress, {
                                            toastID: t,
                                            message: toastMessage,
                                            buttonLabel: buttonLabel || void 0,
                                            onButtonClick: actionEvent ? () => window.desktopEvents?.send(actionEvent, actionPayload) : void 0,
                                            dismissOnButtonClick: !!buttonLabel,
                                            createNonce: i,
                                        }),
                                        { containerId: y.uQT.IMPORTANT },
                                    ));
                            },
                            [pulseBasicToastNotify],
                        );
                    (0, n.useEffect)(() => {
                        (function (e) {
                            if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version) return !1;
                            let t = d[e.name];
                            if (!t) return !1;
                            let a = parseFloat(e.version);
                            return !Number.isNaN(a) && a < t;
                        })(u.browserInfo) &&
                            s((0, r.jsx)(m, { message: a({ id: 'warning-messages.update-your-browser' }) }), { containerId: y.uQT.IMPORTANT, single: !0 });
                    }, [a, s, u.browserInfo]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.BASIC_TOAST_CREATE, pulseBasicToastCreate),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.BASIC_TOAST_CREATE, pulseBasicToastCreate);
                                }
                            );
                        }, [pulseBasicToastCreate]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.MOD_UPDATE_AVAILABLE, pulseModUpdateAvailable),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.MOD_UPDATE_AVAILABLE, pulseModUpdateAvailable);
                                }
                            );
                        }, [pulseModUpdateAvailable]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.GPU_STALL, pulseGpuStall),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.GPU_STALL, pulseGpuStall);
                                }
                            );
                        }, [pulseGpuStall]),
                        (0, n.useEffect)(() => {
                            var e;
                            return (
                                null == (e = window.desktopEvents) || e.on(y.EE.APP_STALL, pulseAppStall),
                                () => {
                                    var e;
                                    null == (e = window.desktopEvents) || e.off(y.EE.APP_STALL, pulseAppStall);
                                }
                            );
                        }, [pulseAppStall]),
                        (0, n.useLayoutEffect)(() => {
                            p(u);
                        }, [u]),
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', x),
                                () => {
                                    window.removeEventListener('resize', x);
                                }
                            ),
                            [x],
                        );
                    let L = (0, n.useMemo)(
                        () => ({
                            defaultLayoutRef: c,
                            contentRef: g,
                            contentRootRef: S,
                            contentScrollRef: f,
                            sideBannerRef: I,
                            playlistStickyFiltersRef: k,
                            playlistStaticFiltersRef: A,
                            compositePlayerBarRef: P,
                            paywallRef: N,
                            setContentRef: v,
                            setDefaultLayoutRef: h,
                            setContentRootRef: E,
                            setContentScrollRef: b,
                            setSideBannerRef: C,
                            setPlaylistStickyFiltersRef: T,
                            setPlaylistStaticFiltersRef: D,
                            setCompositePlayerBarRef: _,
                            setPaywallRef: R,
                        }),
                        [c, g, S, f, I, k, A, P, N, h, v, E, b, C, T, D, _, R],
                    );
                    return (0, r.jsx)(y.MQO.Provider, { value: L, children: t });
                });
        },
        81300: (e, t, a) => {
            'use strict';
            a.d(t, { vB: () => h, t6: () => g.ChartPodcastsPage });
            var r = a(49574),
                i = a(60754),
                s = a(87953),
                n = a(16486),
                o = a(95428);
            let l = i.gK
                .compose(
                    i.gK.model('ChartPodcastsPage', { title: i.gK.maybeNull(i.gK.string), items: i.gK.array(n.JC), errorStatusCode: i.gK.maybeNull(i.gK.number) }),
                    o.pl,
                    o.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === r.GuX.PENDING;
                        },
                        get isNotFound() {
                            var a;
                            let t = e.isResolved && !(null == (a = e.items) ? void 0 : a.length),
                                i = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST;
                            return (e.loadingState === r.GuX.REJECT && i) || t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t) {
                        let { chartResource: a, modelActionsLogger: o } = (0, i._$)(e);
                        if (e.loadingState !== r.GuX.PENDING)
                            try {
                                let s;
                                (e.loadingState = r.GuX.PENDING),
                                    (e.title = (s = t ? yield a.getChartPodcastsCategory({ categoryId: t }) : yield a.getChartPodcasts()).title),
                                    s.chartPositions && (e.items = (0, i.wg)(s.chartPositions.map((e) => (0, n.bl)(e.album, e.chartPosition)))),
                                    e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE);
                            } catch (t) {
                                o.error(t),
                                    t instanceof s.GX && (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) && (e.errorStatusCode = s.X1.NOT_FOUND),
                                    e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = r.GuX.IDLE), (e.title = null), (e.errorStatusCode = null), e.destroyItems([e.items]);
                    },
                }));
            var d = a(80864);
            let u = i.gK.model('ChartPagePlaylistModel', { uuid: i.gK.string, uid: i.gK.number, kind: i.gK.number }),
                c = i.gK
                    .compose(i.gK.model('ChartTracksPage', { title: i.gK.maybeNull(i.gK.string), playlistMeta: i.gK.maybeNull(u), items: i.gK.array(d.vj) }), o.XT)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === r.GuX.PENDING;
                        },
                    }))
                    .actions((e) => ({
                        getTracks: (0, i.L3)(function* () {
                            let { landing3Resource: t, modelActionsLogger: a } = (0, i._$)(e);
                            if (e.loadingState !== r.GuX.PENDING)
                                try {
                                    e.loadingState = r.GuX.PENDING;
                                    let a = yield t.getChart();
                                    (e.title = a.chart.title),
                                        (e.playlistMeta = (0, i.wg)({ uuid: a.chart.playlistUuid, uid: a.chart.uid, kind: a.chart.kind })),
                                        (e.items = (0, i.wg)(a.chart.tracks.map((e) => (0, d.bV)(e.track, e.chart)))),
                                        e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== r.GuX.IDLE && (e.loadingState = r.GuX.REJECT);
                                }
                        }),
                    })),
                h = i.gK.model('ChartPageModel', { tracksSubPage: c, podcastsSubPage: l });
            a(46030);
            var g = a(69410);
            a(55646);
        },
        81358: (e, t, a) => {
            'use strict';
            a.d(t, { TagNotFoundPage: () => n });
            var r = a(32290),
                i = a(96103),
                s = a(80719);
            let n = (0, i.PA)(() => (0, r.jsx)(s.M, {}));
        },
        83470: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n });
            var r = a(49574),
                i = a(43993),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: o, tld: l, host: d } = t,
                    u = await (0, r.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = 'artists' in e ? e.artists : void 0,
                    m = (0, i.f)({ genreTitle: c, artists: g, messageFormatter: u }),
                    y = s.env.ASSET_PREFIX || '',
                    p = ''.concat(d).concat(y, '/meta/og-image.png');
                return {
                    title: h,
                    description: m,
                    openGraph: (0, r.i$E)({
                        ogTitle: (0, r.NsT)(c),
                        ogDescription: m,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: p,
                    }),
                    twitter: (0, r.HRN)({ cardType: r.WfF.APP, title: h, url: null != o ? o : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X5i)({
                        additional: { tld: l, url: null != o ? o : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, r.SEs)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        84943: (e) => {
            e.exports = { root: 'Genre_root__80dlk', link: 'Genre_link__Wewaq', linkTitle: 'Genre_linkTitle__ORAsw', list: 'Genre_list__C2Pxf' };
        },
        85912: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        86568: (e) => {
            e.exports = {
                root: 'GenresPage_root__LhP_S',
                shimmerTitle: 'GenresPage_shimmerTitle__4j8uH',
                content: 'GenresPage_content__yhKrQ',
                list: 'GenresPage_list__l2Cuc',
            };
        },
        87633: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        90021: (e, t, a) => {
            'use strict';
            a.d(t, { CrackdownInitializer: () => o });
            var r = a(96103),
                i = a(49574),
                s = a(56033),
                n = a(1340);
            let o = (0, r.PA)(() => {
                var e;
                let {
                        user: t,
                        modals: { crackdownModal: a },
                        settings: { isMobile: r },
                        experiments: o,
                        sonataState: l,
                        desktopPaywall: d,
                    } = (0, i.Pjs)(),
                    { isFreemium: u } = (0, i.XCI)(),
                    c = t.isAuthorized && u && !r,
                    h = null == (e = o.getExperiment(i.zal.WebNextCrackdownInterval)) ? void 0 : e.value.interval;
                (0, n.W)({ isEnabled: c, intervalMs: (0, s.P)(h), modal: a, sonataState: l, isPaywallOpen: d.isPaywallOpen });
            });
        },
        90369: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            var r = a(3623);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.R.SmartPreview;
            }
        },
        91676: (e, t, a) => {
            'use strict';
            a.d(t, { G4: () => o.Genre, Gc: () => n, kc: () => i });
            var r = a(60754);
            let i = (e) => ({ tag: e.tag, title: e.title, subGenres: (0, r.wg)((e.leaves || []).map((e) => ({ tag: e.tag, title: e.title }))) }),
                s = r.gK.model('GenreListItemSubGenreModel', { tag: r.gK.string, title: r.gK.string }),
                n = r.gK.model('GenreListItemModel', { tag: r.gK.string, title: r.gK.string, subGenres: r.gK.array(s) });
            var o = a(95593);
        },
        92498: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => x });
            var r = a(32290),
                i = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(60900),
                l = a(59824),
                d = a(71483),
                u = a(91027),
                c = a(29474),
                h = a(32381),
                g = a(75645),
                m = a(80864),
                y = a(49574),
                p = a(44574),
                v = a(85912),
                S = a.n(v),
                E = a(39407),
                f = a(82586),
                b = a(71926),
                P = a(58108),
                _ = a.n(P);
            let I = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: t },
                    } = (0, y.Pjs)(),
                    a = (0, r.jsx)(b.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    i = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    i.push(
                        (0, r.jsx)(b.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, r.jsx)(E.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let s = Math.floor(t.tracksDurationInMinutes / 60),
                    o = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (s || o) &&
                        (i.push(a),
                        i.push(
                            (0, r.jsx)(b.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, r.jsx)(E.A, { id: 'time.hours-minutes', values: { hours: s, minutes: o } }),
                            }),
                        )),
                    (0, r.jsx)('div', { className: _().root, children: i.map((e, t) => (0, n.cloneElement)(e, { key: t })) })
                );
            });
            var C = a(3092),
                k = a.n(C);
            let T = (0, s.PA)(() => {
                let { isScrolling: e } = (0, n.useContext)(p.B9),
                    t = (0, y.W6M)(),
                    {
                        myMusic: { downloadedTracks: a },
                        settings: { isMobile: i },
                        slam: s,
                    } = (0, y.Pjs)(),
                    { from: o } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                    c = (0, y.PT7)(),
                    h = (0, y.brA)(),
                    { isPlaying: g, togglePlay: m } = (0, y.Dx4)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: o },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    v = (0, u.c)(() => {
                        c() || (m(), h(!g));
                    });
                return (0, r.jsx)('header', {
                    className: k().root,
                    'aria-hidden': e,
                    ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER),
                    children: (0, r.jsxs)('div', {
                        className: k().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, r.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, r.jsxs)('div', {
                                className: k().titleContainer,
                                children: [
                                    (0, r.jsx)(b.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: k().title,
                                        children: (0, r.jsx)(E.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, r.jsx)(I, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, r.jsx)(p.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: g,
                                    onClick: v,
                                    className: k().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !i && (0, r.jsx)(E.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var A = a(95658),
                D = a.n(A);
            let N = (0, s.PA)(() =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(T, {}),
                            (0, r.jsxs)('div', {
                                className: D().root,
                                ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY),
                                children: [
                                    (0, r.jsx)(f.Icon, { className: D().icon, size: 'l', variant: 'download' }),
                                    (0, r.jsx)(b.Heading, {
                                        className: D().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, r.jsx)(E.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, r.jsx)(b.Caption, {
                                        className: D().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, r.jsx)(E.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                R = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, n.useContext)(p.B9),
                        t = (0, y.W6M)(),
                        {
                            myMusic: { downloadedTracks: a },
                            settings: { isMobile: s },
                            slam: o,
                        } = (0, y.Pjs)(),
                        { from: c } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                        h = (0, y.brA)(),
                        g = (0, y.PT7)(),
                        { isPlaying: m, togglePlay: v } = (0, y.Dx4)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: c },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        S = (0, u.c)(() => {
                            g() || (v(), h(!m));
                        });
                    return (0, r.jsx)(p.Y9, {
                        variant: p.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, r.jsxs)('div', {
                            className: k().container,
                            ...(0, l.Am)(l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER),
                            children: [
                                !o.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, r.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, r.jsx)(b.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: k().stickyTitle,
                                    children: (0, r.jsx)(E.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, r.jsx)(p.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: m,
                                        onClick: S,
                                        className: (0, i.$)(k().playButton, { [k().stickyPlayButton]: !s }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !s && (0, r.jsx)(E.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, i.$)(k().stickyHeader, k().important),
                        staticClassName: (0, i.$)(k().staticHeader, k().important),
                    });
                }),
                x = (0, s.PA)(() => {
                    var e;
                    let t = (0, y.jRO)(),
                        { contentScrollRef: a, setContentScrollRef: s } = (0, y.gKY)(),
                        { formatMessage: v } = (0, o.A)(),
                        {
                            myMusic: { downloadedTracks: E },
                        } = (0, y.Pjs)(),
                        { from: f } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                        b = (0, y.wZZ)(),
                        P = (0, u.c)(() => {
                            t.tracksController && E.getData(t.tracksController);
                        });
                    (0, c.L)(P),
                        (0, n.useEffect)(() => {
                            E.isNeededToLoad && P();
                        }, [E.isNeededToLoad, P]),
                        (0, n.useEffect)(
                            () => () => {
                                E.reset();
                            },
                            [E],
                        ),
                        (0, y.Jzs)(E.isResolved);
                    let _ = (0, n.useMemo)(
                        () => ({ Header: () => (0, r.jsx)(T, {}), Footer: () => (0, r.jsx)(p.A, { children: (0, r.jsx)(p.wi, { className: S().footer }) }) }),
                        [],
                    );
                    if (E.loadingState === y.GuX.REJECT) return (0, r.jsx)(h.w, {});
                    if (E.isEmpty) return (0, r.jsx)(N, {});
                    let I = (null == (e = E.items) ? void 0 : e.length) || 10;
                    return (0, r.jsx)(y.nVz, {
                        pageId: y._Q$.DOWNLOADS_TRACKS,
                        children: (0, r.jsx)(g.hO, {
                            scrollElement: a,
                            children: (0, r.jsxs)('div', {
                                className: S().pageContainer,
                                children: [
                                    (0, r.jsx)(R, {}),
                                    (0, r.jsx)(p.$$, {
                                        context: { listAriaLabel: v({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, i.$)(S().root, S().important),
                                        listClassName: S().content,
                                        customComponents: _,
                                        totalCount: I,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = E.items) ? void 0 : t[e];
                                            return a
                                                ? (0, r.jsx)(
                                                      m.Kt,
                                                      {
                                                          track: a,
                                                          playContextParams: b(a.id, {
                                                              contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: f },
                                                              entitiesData: E.entitiesData,
                                                              queueParams: { index: e, entityId: a.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      a.id,
                                                  )
                                                : (0, r.jsx)(p.DS, { isActive: !0, className: S().trackShimmer, variant: y.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: I,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [I],
                                        testId: l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        93296: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { AnalyticsProvider: () => n });
            var r = a(32290),
                i = a(52068),
                s = a(49574);
            let n = (e) => {
                let { children: t } = e,
                    a = (0, s.UlF)(),
                    n = (0, s.NFA)(),
                    o = 'on' === n.get(s.ooW).get(s.cYZ.AllowAnalyticsLogs),
                    l = n.get(s.vgk);
                return (0, r.jsx)(i.vZ, { metrika: l, allowAnalyticsLogs: o, evgenUserParam: 'evgen', logger: a, children: t });
            };
        },
        94204: (e, t, a) => {
            'use strict';
            a.d(t, { uA: () => l.PlaylistPersonalPage, Hj: () => o });
            var r = a(60754),
                i = a(87953),
                s = a(49574),
                n = a(95428);
            let o = r.gK
                .compose(
                    r.gK.model('PlaylistPersonalPage', {
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        playlistUuid: r.gK.maybe(r.gK.string),
                        isReady: r.gK.optional(r.gK.boolean, !1),
                        dummyCoverUrl: r.gK.maybe(r.gK.string),
                        dummyDescription: r.gK.maybe(r.gK.string),
                        title: r.gK.maybe(r.gK.string),
                    }),
                    n.XT,
                )
                .views((e) => ({
                    getUrl(t) {
                        if (!e.playlistUuid) return '';
                        let { href: a } = (0, s.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                        return a;
                    },
                    get url() {
                        if (!e.playlistUuid) return '';
                        let { href: t } = (0, s.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                        return t;
                    },
                    get isNotFound() {
                        let t = e.errorStatusCode === i.X1.NOT_FOUND || e.errorStatusCode === i.X1.BAD_REQUEST;
                        return e.loadingState === s.GuX.REJECT && t;
                    },
                }))
                .actions((e) => ({
                    getPlaylistPersonalDetails: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return;
                        let { playlistsResource: a, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.loadingState !== s.GuX.PENDING)
                            try {
                                var o, l;
                                e.loadingState = s.GuX.PENDING;
                                let r = yield a.getPlaylistPersonal({ playlistId: t });
                                if ((null == (o = r.error) ? void 0 : o.name) === 'no-such-playlist') {
                                    (e.errorStatusCode = i.X1.NOT_FOUND), (e.loadingState = s.GuX.REJECT);
                                    return;
                                }
                                (e.isReady = r.ready),
                                    (e.playlistUuid = r.data.playlistUuid),
                                    (e.dummyCoverUrl = null == (l = r.data.dummyCover) ? void 0 : l.uri),
                                    (e.dummyDescription = r.data.dummyDescription),
                                    (e.title = r.data.title),
                                    e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.GuX.IDLE),
                            (e.errorStatusCode = null),
                            (e.isReady = !1),
                            (e.playlistUuid = void 0),
                            (e.dummyCoverUrl = void 0),
                            (e.dummyDescription = void 0),
                            (e.title = void 0);
                    },
                }));
            a(63387), a(32290), a(80719);
            var l = a(68863);
        },
        95324: (e, t, a) => {
            'use strict';
            a.d(t, { FavoriteTracksPage: () => d });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(49574),
                o = a(80719);
            let l = (0, i.PA)(() => (0, r.jsx)(o.M, {})),
                d = (0, i.PA)(() => {
                    let { favoriteTracks: e } = (0, n.Pjs)(),
                        t = (0, n.ZpR)(e.playlistUrl);
                    if (
                        ((0, s.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, s.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, s.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, r.jsx)(l, {});
                });
        },
        95393: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => r });
            let r = 30;
        },
        95455: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { UrlInitializer: () => n });
            var r = a(96103),
                i = a(21916),
                s = a(49574);
            let n = (0, r.PA)((e) => {
                let { host: t } = e,
                    { location: a } = (0, s.Pjs)(),
                    r = (0, i.usePathname)(),
                    n = (0, i.useSearchParams)().toString(),
                    o = window.location.host,
                    l = t || o,
                    d = 'https://'.concat(l),
                    u = 'https://'
                        .concat(l)
                        .concat(r)
                        .concat(n ? '?' : '')
                        .concat(n);
                (d = l),
                    (u = ''
                        .concat(l)
                        .concat(r)
                        .concat(n ? '?' : '')
                        .concat(n)),
                    a.setPathname(r),
                    a.setSearchParams(n),
                    a.setHost(l),
                    a.setTld((0, s.fMM)(l) || s.lYh),
                    a.setOrigin(d),
                    a.setHref(u);
            });
        },
        95593: (e, t, a) => {
            'use strict';
            a.d(t, { Genre: () => d });
            var r = a(32290),
                i = a(96103),
                s = a(71926),
                n = a(44574),
                o = a(84943),
                l = a.n(o);
            let d = (0, i.PA)((e) => {
                let { tag: t, title: a, subGenres: i } = e;
                return (0, r.jsxs)('div', {
                    className: l().root,
                    children: [
                        (0, r.jsx)(n.N_, {
                            className: l().link,
                            href: '/genre/'.concat(t),
                            children: (0, r.jsx)(s.Heading, { variant: 'h2', size: 'm', lineClamp: 1, className: l().linkTitle, children: a }),
                        }),
                        i.length > 0 &&
                            (0, r.jsx)('div', {
                                className: l().list,
                                children: i.map((e) =>
                                    (0, r.jsx)(
                                        'div',
                                        {
                                            className: l().item,
                                            children: (0, r.jsx)(n.N_, {
                                                className: l().link,
                                                href: '/genre/'.concat(e.tag),
                                                children: (0, r.jsx)(s.Caption, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    lineClamp: 1,
                                                    className: l().linkTitle,
                                                    children: e.title,
                                                }),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
        },
        95658: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        95787: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
            };
        },
        96471: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        96923: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SettingsInitializer: () => n });
            var r = a(96103),
                i = a(55178),
                s = a(49574);
            let n = (0, r.PA)((e) => {
                let { browserInfo: t } = e,
                    a = (0, s.NFA)(),
                    { settings: r } = (0, s.Pjs)(),
                    n = (0, s.uoh)(),
                    o = a.get(s.vgk);
                r.setBrowserInfo(t),
                    n && r.setPlatform(n),
                    (0, i.useLayoutEffect)(() => {
                        r.initializeLiteVersionMode(), r.initializeCustomPlayerThumb();
                    }, []),
                    (0, i.useEffect)(() => {
                        r.liteVersionMode && o.count(r.liteVersionMode, 'liteVersionMode');
                    }, [o, r.liteVersionMode]);
            });
        },
        97676: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingShortcutsProvider: () => d });
            var r = a(32290),
                i = a(96103),
                s = a(55178),
                n = a(49574),
                o = a(48007);
            let l = null,
                d = (0, i.PA)((e) => {
                    let { children: t } = e,
                        {
                            promolanding: { state: a },
                        } = (0, n.Pjs)(),
                        i = (0, s.useMemo)(() => (l || (l = new n.G8o(new n.z$B())), l), []);
                    return (
                        (0, o.E)({ controller: i, sonataState: a, playbackId: n.V_r.PROMO_LANDING, groupId: n.Mo.PROMO_LANDING }),
                        (0, s.useEffect)(
                            () => (
                                null == i || i.listen(),
                                () => {
                                    null == i || i.stopListening();
                                }
                            ),
                            [i],
                        ),
                        (0, r.jsx)(n.Pic.Provider, { value: i, children: t })
                    );
                });
        },
        98503: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
        99187: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ThemeProvider: () => l });
            var r = a(32290),
                i = a(55178),
                s = a(91027),
                n = a(49574),
                o = a(44574);
            let l = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    l = (0, n.NFA)().get(n.ooW),
                    { getThemeFromStorage: d, setThemeToStorage: u } = (0, n.QDo)(l),
                    [c, h] = (0, i.useState)(() => (null != a ? a : d())),
                    g = (0, s.c)((e) => {
                        d() || a || (u(n.W3W), h(e));
                    });
                (0, i.useLayoutEffect)(() => {
                    a || (0, n.Z8R)(c);
                }, [c, a]),
                    (0, n.kgS)({ onSystemThemeChange: g }),
                    (0, i.useLayoutEffect)(() => {
                        g((0, n.VDQ)());
                    }, [g]);
                let m = (0, i.useMemo)(() => ({ theme: c, setTheme: h }), [c]);
                return (0, r.jsx)(n.Dx0.Provider, { value: m, children: (0, r.jsx)(i.Suspense, { fallback: (0, r.jsx)(o.JR, {}), children: t }) });
            };
        },
    },
]);
