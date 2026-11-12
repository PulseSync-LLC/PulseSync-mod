(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7706],
    {
        16166: (t, a, e) => {
            'use strict';
            (e.r(a), e.d(a, { default: () => n }));
            var i = e(88800),
                s = e(58390),
                r = e(47450),
                l = e(87128),
                o = e(21438);
            let n = () => {
                let t = (0, s.useSearchParams)().get('artistId');
                return ((t && (0, o.L)(t)) || (0, s.notFound)(), (0, i.jsx)(r.r, { artistId: t, variant: l.h.DISCOGRAPHY }));
            };
        },
        46591: (t) => {
            t.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        47450: (t, a, e) => {
            'use strict';
            e.d(a, { r: () => J });
            var i = e(88800),
                s = e(65724),
                r = e(84961),
                l = e(53548),
                o = e(2058),
                n = e(58390),
                u = e(87999),
                d = e(76903),
                m = e(17392),
                c = e(63565),
                p = e(29993),
                g = e(29504),
                b = e(32596),
                h = e(10079),
                S = e(96237),
                A = e(69630),
                f = e(91959),
                I = e(98427),
                N = e(46422),
                _ = e(44230),
                y = e(37670),
                C = e(72288),
                L = e(87128),
                T = e(54320),
                P = e(19998),
                v = e(86790),
                R = e(60266),
                G = e(93317),
                w = e(37770),
                M = e(79418),
                O = e(81685),
                k = e(30144),
                x = e(324),
                U = e(53073),
                j = e(83418),
                E = e(46511),
                D = e(57297),
                Y = e(2218),
                H = e(77863),
                B = e(45383),
                W = e(98774);
            async function F(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(a.locale),
                    l = r({ id: 'metadata.artist-albums-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-albums-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, D.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, j.v)({ host: a.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: H.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/albums', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function X(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(a.locale),
                    l = r({ id: 'metadata.artist-compilations-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-compilations-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, D.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, j.v)({ host: a.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: H.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/compilations', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function z(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(a.locale),
                    l = r({ id: 'metadata.artist-discography-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-discography-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, D.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, j.v)({ host: a.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: H.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/discography', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            var V = e(27342),
                q = e(63512),
                Z = e(46591),
                $ = e.n(Z);
            let J = (0, r.PA)((t) => {
                var a, e, r;
                let { artistId: x, variant: U, preloadedArtist: j, preloadedAlbums: E } = t,
                    {
                        artist: D,
                        disclaimerModalState: Y,
                        settings: { isMobile: H },
                    } = (0, C.g)(),
                    { formatMessage: B } = (0, o.A)(),
                    { contentScrollRef: W, setContentScrollRef: Z } = (0, _.g)(),
                    J = (0, N.W)(),
                    K = D.albumsSubpage.isShimmerVisible ? S.r3 : D.albumsSubpage.items.length,
                    Q = (0, p.c)((t) => {
                        D.albumsSubpage.getData({ artistId: x, page: t, pageSize: S.r3, sort: { sortBy: c.g.YEAR } });
                    });
                (0, T.X)(D.albumsSubpage.pagesLoader, Q);
                let tt = (0, f.S)({ artist: null == (a = D.meta) ? void 0 : a.artist, shouldHistoryBack: !0 });
                ((0, q.G)(x),
                    (0, l.useEffect)(() => {
                        var t;
                        (null == (t = D.meta) ? void 0 : t.artist.isUnsafeLegal) && tt();
                    }, [null == (e = D.meta) ? void 0 : e.artist.isUnsafeLegal, tt]),
                    (0, V._)(D, x),
                    (0, l.useEffect)(
                        () => () => {
                            D.albumsSubpage.reset();
                        },
                        [D, D.albumsSubpage],
                    ),
                    D.albumsSubpage.isNotFound && (0, n.notFound)(),
                    (0, y.J)(D.albumsSubpage.isResolved),
                    ((t, a) => {
                        var e;
                        let { fullscreenVideoPlayer: i } = (0, C.g)(),
                            s = null == t || null == (e = t.meta) ? void 0 : e.artist,
                            r = null == t ? void 0 : t.infoLoadingState.isLoading,
                            o = null == t ? void 0 : t.infoLoadingState.isRejected,
                            n = (0, l.useCallback)(
                                (t) => {
                                    if (o) return {};
                                    if (!s || r) return;
                                    let e = (0, O.E)(s);
                                    switch (a) {
                                        case L.h.ALBUMS:
                                            return F({ artist: e }, t);
                                        case L.h.COMPILATIONS:
                                            return X({ artist: e }, t);
                                        case L.h.DISCOGRAPHY:
                                            return z({ artist: e }, t);
                                    }
                                },
                                [s, r, o, a],
                            );
                        (0, k.C)(i.modal.isOpened ? null : n);
                    })(D, U));
                let ta = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(R.A, { children: (0, i.jsx)(v.w, { className: $().footer }) }) }), []),
                    te = (0, l.useMemo)(() => {
                        switch (U) {
                            case L.h.DISCOGRAPHY:
                                return B({ id: 'page.artist-discography-header' }, { artistName: D.commonSubPage.artistName });
                            case L.h.COMPILATIONS:
                                return B({ id: 'page.artist-compilations-header' }, { artistName: D.commonSubPage.artistName });
                            default:
                                return B({ id: 'page.artist-albums-header' }, { artistName: D.commonSubPage.artistName });
                        }
                    }, [D.commonSubPage.artistName, B, U]),
                    ti = (0, l.useMemo)(() => {
                        switch (U) {
                            case L.h.DISCOGRAPHY:
                                return B({ id: 'entity-names.artist-studio-albums-list' });
                            case L.h.COMPILATIONS:
                                return B({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return B({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [B, U]),
                    ts = (0, l.useMemo)(() => {
                        switch (U) {
                            case L.h.DISCOGRAPHY:
                                return I.b.ARTIST_DISCOGRAPHY;
                            case L.h.COMPILATIONS:
                                return I.b.ARTIST_COMPILATIONS;
                            default:
                                return I.b.ARTIST_ALBUMS;
                        }
                    }, [U]),
                    tr = [];
                return (x &&
                    D.albumsSubpage.isNeededToLoad &&
                    (D.albumsSubpage.setVariant(U),
                    tr.push(D.albumsSubpage.getData({ artistId: x, page: 0, pageSize: S.r3, sort: { sortBy: c.g.YEAR }, preloadedAlbums: E }))),
                x && D.infoLoadingState.isNeededToLoad && tr.push(D.getInfo({ artistId: x, preloadedArtist: j })),
                tr.length && (0, l.use)(Promise.allSettled(tr)),
                null == (r = D.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(P.M, { modalState: Y })
                    : D.albumsSubpage.isRejected && !D.albumsSubpage.isNotFound
                      ? (0, i.jsx)(b.SomethingWentWrong, {})
                      : (0, i.jsx)(d.a, {
                            pageId: u.AppScreen.ArtistScreen,
                            pageIdForFrom: ts,
                            mainObjectId: x,
                            mainObjectType: u.DomainObjectType.Artist,
                            children: (0, i.jsx)(A.h, {
                                scrollElement: W,
                                outerTitle: te,
                                children: (0, i.jsxs)('div', {
                                    className: $().root,
                                    'data-test-id': m.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, i.jsx)(G.Y, {
                                            variant: G.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: J.canBack,
                                            children: (0, i.jsx)(g.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: te }),
                                        }),
                                        (0, i.jsx)(M.$, {
                                            className: (0, s.$)($().scrollContainer, $().important),
                                            listClassName: $().content,
                                            itemClassName: $().item,
                                            customComponents: ta,
                                            itemContentCallback: (t) => {
                                                let a = D.albumsSubpage.items[t],
                                                    e = B({ id: 'loading-messages.entity-is-loading' }, { entityName: B({ id: 'entity-names.playlist' }) });
                                                return a
                                                    ? (0, i.jsx)(h.a, { album: a, contentLinesCount: 4 }, a.id)
                                                    : (0, i.jsx)(w.V, { 'aria-label': e, linesCount: 4 });
                                            },
                                            totalCount: K,
                                            onGetDataByPage: Q,
                                            pageSize: S.r3,
                                            totalRequests: D.albumsSubpage.requestsCount,
                                            handleRef: Z,
                                            context: { listAriaLabel: ti },
                                            isMobileLayout: H,
                                            useWindowScroll: H,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        63565: (t, a, e) => {
            'use strict';
            var i;
            (e.d(a, { g: () => i }),
                (function (t) {
                    ((t.RATING = 'rating'), (t.YEAR = 'year'));
                })(i || (i = {})));
        },
        67837: (t, a, e) => {
            Promise.resolve().then(e.bind(e, 16166));
        },
        87128: (t, a, e) => {
            'use strict';
            e.d(a, { h: () => i });
            var i = (function (t) {
                return ((t.DISCOGRAPHY = 'discography'), (t.ALBUMS = 'albums'), (t.COMPILATIONS = 'compilations'), t);
            })({});
        },
    },
    (t) => {
        (t.O(
            0,
            [
                4700, 7908, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 206, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 8673,
                4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 2889, 763, 2670, 7358,
            ],
            () => t((t.s = 67837)),
        ),
            (_N_E = t.O()));
    },
]);
