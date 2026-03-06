(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9460],
    {
        7588: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n });
            var l = a(83252),
                i = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: r, tld: o, host: d } = t,
                    c = await (0, l.WGy)(a),
                    u = e.title.fullTitle,
                    m = c({ id: 'metadata.genre-title' }, { genreTitle: u }),
                    g = 'artists' in e ? e.artists : void 0,
                    p = (0, i.f)({ genreTitle: u, artists: g, messageFormatter: c }),
                    h = s.env.ASSET_PREFIX || '',
                    _ = ''.concat(d).concat(h, '/meta/og-image.png');
                return {
                    title: m,
                    description: p,
                    openGraph: (0, l.i$E)({
                        ogTitle: (0, l.NsT)(u),
                        ogDescription: p,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: c({ id: 'metadata.yandex-music' }),
                        ogImage: _,
                    }),
                    twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: m, url: null != r ? r : '', appName: c({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X5i)({
                        additional: { tld: o, url: null != r ? r : '', fullUrl: null != n ? n : '', host: d },
                        appName: c({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, l.SEs)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        11723: (e, t, a) => {
            'use strict';
            function l(e) {
                let { genreTitle: t, artists: a, messageFormatter: l } = e,
                    i = null;
                return (
                    Array.isArray(a) &&
                        (i = a
                            .slice(0, 3)
                            .map((e) => ('artist' in e ? e.artist.name : e.name))
                            .join(', ')),
                    i ? l({ id: 'metadata.genre-description' }, { genreTitle: t, artistsList: i }) : l({ id: 'metadata.genre-description-short' }, { genreTitle: t })
                );
            }
            a.d(t, { f: () => l });
        },
        18753: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
            };
        },
        33868: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => n });
            var l = a(83252),
                i = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: r, tld: o, host: d } = t,
                    c = await (0, l.WGy)(a),
                    u = e.title.fullTitle,
                    m = c({ id: 'metadata.genre-title' }, { genreTitle: u }),
                    g = (0, i.f)({ genreTitle: u, messageFormatter: c }),
                    p = s.env.ASSET_PREFIX || '',
                    h = ''.concat(d).concat(p, '/meta/og-image.png');
                return {
                    title: m,
                    description: g,
                    openGraph: (0, l.i$E)({
                        ogTitle: (0, l.NsT)(u),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: c({ id: 'metadata.yandex-music' }),
                        ogImage: h,
                    }),
                    twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: m, url: null != r ? r : '', appName: c({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X5i)({
                        additional: { tld: o, url: null != r ? r : '', fullUrl: null != n ? n : '', host: d },
                        appName: c({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, l.SEs)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        38139: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePage: () => S });
            var l = a(54486),
                i = a(50420),
                s = a(28303),
                n = a(97396),
                r = a(61910),
                o = a(43426),
                d = a(56231),
                c = a(97800),
                u = a(82644),
                m = a(80156),
                g = a(55616),
                p = a(33276),
                h = a(83909),
                _ = a(83252),
                f = a(80585),
                x = a(7588),
                P = a(63695),
                A = a(52733),
                T = a(50153),
                N = a.n(T);
            let S = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    { genre: s } = (0, _.Pjs)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: S, setContentScrollRef: C } = (0, _.gKY)(),
                    b = (0, _.W6M)();
                return (s.isNotFound && (0, n.notFound)(),
                (0, r.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                (0, _.Jzs)(s.isResolved),
                ((e) => {
                    (0, r.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => ({
                            id: '',
                            title: { title: '', fullTitle: e.fullTitle || '' },
                            liked: !1,
                            tracks: [],
                            artists: e.artists.map(P.NE),
                            composers: [],
                            albums: e.albums.map(m.fO),
                            playlists: e.playlists.map(A.Ji),
                        }))(e);
                        (0, x.M)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, _.jxB)(e);
                        });
                    }, [e]);
                })(s),
                t && s.isNeededToLoad && (0, r.use)(s.getData({ id: t, preloadedMeta: a })),
                s.isRejected && !s.isNotFound)
                    ? (0, l.jsx)(u.w, {})
                    : (0, l.jsx)(_.nVz, {
                          pageId: _._Q$.GENRE,
                          children: (0, l.jsxs)(p.hO, {
                              scrollElement: S,
                              outerTitle: s.fullTitle,
                              children: [
                                  (0, l.jsx)(f.Y9, {
                                      variant: f.Vw.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: b.canBack,
                                      children: (0, l.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                  }),
                                  (0, l.jsx)(d.N, {
                                      className: N().root,
                                      containerClassName: N().content,
                                      ref: C,
                                      children: (0, l.jsxs)('div', {
                                          className: N().carouselBlocks,
                                          children: [
                                              s.hasPlaylists &&
                                                  (0, l.jsx)(_.FoH, {
                                                      blockId: _.hf$.PLAYLISTS_CAROUSEL,
                                                      blockType: _.hf$.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: _.hf$.PLAYLISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, l.jsx)(h.EC, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(N().carouselBlockHeader, N().carouselBlock),
                                                          containerClassName: N().carouselBlock,
                                                          playlists: s.playlists,
                                                          title: T({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/playlists'),
                                                      }),
                                                  }),
                                              s.hasAlbums &&
                                                  (0, l.jsx)(_.FoH, {
                                                      blockId: _.hf$.ALBUMS_CAROUSEL,
                                                      blockType: _.hf$.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: _.hf$.ALBUMS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, l.jsx)(m.pZ, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(N().carouselBlockHeader, N().carouselBlock),
                                                          containerClassName: N().carouselBlock,
                                                          albums: s.albums,
                                                          title: T({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/albums'),
                                                      }),
                                                  }),
                                              s.hasArtists &&
                                                  (0, l.jsx)(_.FoH, {
                                                      blockId: _.hf$.ARTISTS_CAROUSEL,
                                                      blockType: _.hf$.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: _.hf$.ARTISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, l.jsx)(f.OY, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, i.$)(N().carouselBlockHeader, N().carouselBlock),
                                                          containerClassName: N().carouselBlock,
                                                          title: T({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/artists'),
                                                          children: s.artists.map((e) => (0, l.jsx)(g.ao, { artist: e, contentLinesCount: 3 }, e.id)),
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
        45126: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var l = a(83252),
                i = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: r, tld: o, host: d } = t,
                    c = await (0, l.WGy)(a),
                    u = e.title.fullTitle,
                    m = c({ id: 'metadata.genre-title' }, { genreTitle: u }),
                    g = 'artists' in e ? e.artists : void 0,
                    p = (0, i.f)({ genreTitle: u, artists: g, messageFormatter: c }),
                    h = s.env.ASSET_PREFIX || '',
                    _ = ''.concat(d).concat(h, '/meta/og-image.png');
                return {
                    title: m,
                    description: p,
                    openGraph: (0, l.i$E)({
                        ogTitle: (0, l.NsT)(u),
                        ogDescription: p,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: c({ id: 'metadata.yandex-music' }),
                        ogImage: _,
                    }),
                    twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: m, url: null != r ? r : '', appName: c({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X5i)({
                        additional: { tld: o, url: null != r ? r : '', fullUrl: null != n ? n : '', host: d },
                        appName: c({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, l.SEs)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        49811: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => l });
            let l = 30;
        },
        49943: (e, t, a) => {
            'use strict';
            a.d(t, { GenreAlbumsPage: () => A });
            var l = a(54486),
                i = a(50420),
                s = a(28303),
                n = a(97396),
                r = a(61910),
                o = a(43426),
                d = a(31500),
                c = a(97800),
                u = a(82644),
                m = a(80156),
                g = a(33276),
                p = a(83252),
                h = a(80585),
                _ = a(49811),
                f = a(33868),
                x = a(94189),
                P = a.n(x);
            let A = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { albumsSubpage: s },
                        settings: { isMobile: x },
                    } = (0, p.Pjs)(),
                    { formatMessage: A } = (0, o.A)(),
                    { contentScrollRef: T, setContentScrollRef: N } = (0, p.gKY)(),
                    S = (0, p.W6M)(),
                    C = (0, r.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: _.c });
                        },
                        [s, t],
                    );
                (0, p.XcE)(s.pagesLoader, C),
                    (0, r.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, p.Jzs)(s.isResolved),
                    ((e) => {
                        (0, r.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, l;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    albums: e.items.map(m.fO),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                    },
                                };
                            })(e);
                            (0, f.g)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, p.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let b = (0, r.useMemo)(() => ({ Footer: () => (0, l.jsx)(h.A, { children: (0, l.jsx)(h.wi, { className: P().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, r.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: _.c })), s.isSomethingWrong))
                    return (0, l.jsx)(u.w, {});
                let k = s.isShimmerVisible ? 20 : s.items.length;
                return (0, l.jsx)(p.nVz, {
                    pageId: p._Q$.GENRE_ALBUMS,
                    children: (0, l.jsx)(g.hO, {
                        scrollElement: T,
                        outerTitle: s.fullTitle,
                        children: (0, l.jsxs)('div', {
                            className: P().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_ALBUMS_PAGE),
                            children: [
                                (0, l.jsx)(h.Y9, {
                                    variant: h.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: S.canBack,
                                    children: (0, l.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, l.jsx)(h.$$, {
                                    className: (0, i.$)(P().scrollContainer, P().important),
                                    customComponents: b,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = A({ id: 'loading-messages.entity-is-loading' }, { entityName: A({ id: 'entity-names.album' }) });
                                        return t ? (0, l.jsx)(m.aX, { album: t, contentLinesCount: 4 }, t.id) : (0, l.jsx)(h.Vt, { 'aria-label': a, linesCount: 4 });
                                    },
                                    totalCount: k,
                                    onGetDataByPage: C,
                                    pageSize: _.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    handleRef: N,
                                    context: { listAriaLabel: A({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: x,
                                    useWindowScroll: x,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        50153: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        51843: (e, t, a) => {
            'use strict';
            a.d(t, { GenreNotFoundPage: () => n });
            var l = a(54486),
                i = a(28303),
                s = a(42421);
            let n = (0, i.PA)(() => (0, l.jsx)(s.M, {}));
        },
        73896: (e, t, a) => {
            'use strict';
            a.d(t, { GenreArtistsPage: () => S });
            var l = a(54486),
                i = a(28303),
                s = a(97396),
                n = a(61910),
                r = a(43426),
                o = a(31500),
                d = a(8817),
                c = a(56231),
                u = a(97800),
                m = a(82644),
                g = a(55616),
                p = a(33276),
                h = a(24188),
                _ = a(83252),
                f = a(80585),
                x = a(49811),
                P = a(45126),
                A = a(63695),
                T = a(82975),
                N = a.n(T);
            let S = (0, i.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { artistsSubpage: i },
                    } = (0, _.Pjs)(),
                    { formatMessage: T } = (0, r.A)(),
                    { contentScrollRef: S, setContentScrollRef: C } = (0, _.gKY)(),
                    b = (0, _.W6M)(),
                    k = (0, d.c)(() => 315),
                    y = (0, d.c)(() => {
                        var e;
                        return !i.isShimmerVisible && (null == (e = i.pagesLoader.pager) ? void 0 : e.total) ? i.pagesLoader.pager.total : 30;
                    }),
                    E = (0, n.useCallback)(
                        (e) => {
                            t && i.getData({ metatagId: t, page: e, pageSize: x.c });
                        },
                        [i, t],
                    ),
                    j = (0, _.ws4)({ pageSize: x.c, callback: E });
                (0, _.XcE)(i.pagesLoader, E);
                let L = (0, d.c)((e) => {
                    let t = i.items[e],
                        a = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.artist' }) });
                    return t ? (0, l.jsx)(g.ao, { artist: t, contentLinesCount: 3 }, t.id) : (0, l.jsx)(f.Vt, { 'aria-label': a, round: !0, centered: !0 });
                });
                return ((0, n.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                ),
                i.isNotFound && (0, s.notFound)(),
                (0, _.Jzs)(i.isResolved),
                ((e) => {
                    (0, n.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => {
                            var t, a, l;
                            return {
                                id: '',
                                title: { title: '', fullTitle: e.fullTitle || '' },
                                artists: e.items.map((e) => ({ artist: (0, A.NE)(e), popularTracks: [] })),
                                pager: {
                                    page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                    perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                    total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                },
                            };
                        })(e);
                        (0, P.i)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, _.jxB)(e);
                        });
                    }, [e]);
                })(i),
                t && i.isNeededToLoad && (0, n.use)(i.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: x.c })),
                i.isSomethingWrong)
                    ? (0, l.jsx)(m.w, {})
                    : (0, l.jsx)(_.nVz, {
                          pageId: _._Q$.GENRE_ARTISTS,
                          children: (0, l.jsx)(p.hO, {
                              scrollElement: S,
                              outerTitle: i.fullTitle,
                              children: (0, l.jsxs)('div', {
                                  className: N().root,
                                  ...(0, o.Am)(o.Xk.genre.GENRE_ARTISTS_PAGE),
                                  children: [
                                      (0, l.jsx)(f.Y9, {
                                          variant: f.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: b.canBack,
                                          children: (0, l.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.fullTitle }),
                                      }),
                                      (0, l.jsxs)(c.N, {
                                          ref: C,
                                          className: N().root,
                                          containerClassName: N().container,
                                          children: [
                                              (0, l.jsx)(h.Q$, {
                                                  maxColumnCount: 7,
                                                  count: y(),
                                                  rowGap: 16,
                                                  columnGap: 16,
                                                  getEstimateRowSize: k,
                                                  minColumnWidth: 170,
                                                  maxColumnWidth: 270,
                                                  onChangeRange: j,
                                                  renderItemByIndex: L,
                                              }),
                                              (0, l.jsx)(f.A, { children: (0, l.jsx)(f.wi, { className: N().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        82975: (e) => {
            e.exports = { root: 'GenreArtistsPage_root__PgtIz', container: 'GenreArtistsPage_container__NruTu', footer: 'GenreArtistsPage_footer__fYaCO' };
        },
        93405: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePlaylistsPage: () => T });
            var l = a(54486),
                i = a(50420),
                s = a(28303),
                n = a(97396),
                r = a(61910),
                o = a(43426),
                d = a(31500),
                c = a(97800),
                u = a(82644),
                m = a(33276),
                g = a(83909),
                p = a(83252),
                h = a(80585),
                _ = a(49811),
                f = a(96777),
                x = a(52733),
                P = a(18753),
                A = a.n(P);
            let T = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { playlistsSubpage: s },
                        settings: { isMobile: P },
                    } = (0, p.Pjs)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: N, setContentScrollRef: S } = (0, p.gKY)(),
                    C = (0, p.W6M)(),
                    b = (0, r.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: _.c });
                        },
                        [s, t],
                    );
                (0, p.XcE)(s.pagesLoader, b),
                    (0, r.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, p.Jzs)(s.isResolved),
                    ((e) => {
                        (0, r.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, l;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    playlists: e.items.map(x.Ji),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                    },
                                };
                            })(e);
                            (0, f.H)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, p.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let k = (0, r.useMemo)(() => ({ Footer: () => (0, l.jsx)(h.A, { children: (0, l.jsx)(h.wi, { className: A().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, r.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: _.c })), s.isSomethingWrong))
                    return (0, l.jsx)(u.w, {});
                let y = s.isShimmerVisible ? 20 : s.items.length;
                return (0, l.jsx)(p.nVz, {
                    pageId: p._Q$.GENRE_PLAYLISTS,
                    children: (0, l.jsx)(m.hO, {
                        scrollElement: N,
                        outerTitle: s.fullTitle,
                        children: (0, l.jsxs)('div', {
                            className: A().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_PLAYLISTS_PAGE),
                            children: [
                                (0, l.jsx)(h.Y9, {
                                    variant: h.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: C.canBack,
                                    children: (0, l.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, l.jsx)(h.$$, {
                                    className: (0, i.$)(A().scrollContainer, A().important),
                                    customComponents: k,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.playlist' }) });
                                        return t ? (0, l.jsx)(g.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, l.jsx)(h.Vt, { 'aria-label': a });
                                    },
                                    totalCount: y,
                                    onGetDataByPage: b,
                                    pageSize: _.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: A().content,
                                    itemClassName: A().item,
                                    handleRef: S,
                                    context: { listAriaLabel: T({ id: 'mixes.playlists-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        94189: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
            };
        },
        96777: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n });
            var l = a(83252),
                i = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: r, tld: o, host: d } = t,
                    c = await (0, l.WGy)(a),
                    u = e.title.fullTitle,
                    m = c({ id: 'metadata.genre-title' }, { genreTitle: u }),
                    g = (0, i.f)({ genreTitle: u, messageFormatter: c }),
                    p = s.env.ASSET_PREFIX || '',
                    h = ''.concat(d).concat(p, '/meta/og-image.png');
                return {
                    title: m,
                    description: g,
                    openGraph: (0, l.i$E)({
                        ogTitle: (0, l.NsT)(u),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: c({ id: 'metadata.yandex-music' }),
                        ogImage: h,
                    }),
                    twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: m, url: null != r ? r : '', appName: c({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, l.X5i)({
                        additional: { tld: o, url: null != r ? r : '', fullUrl: null != n ? n : '', host: d },
                        appName: c({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, l.SEs)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
    },
]);
