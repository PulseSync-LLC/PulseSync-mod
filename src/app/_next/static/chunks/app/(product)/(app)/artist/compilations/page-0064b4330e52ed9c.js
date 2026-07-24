(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [813],
    {
        3571: (t, a, e) => {
            Promise.resolve().then(e.bind(e, 56343));
        },
        21994: (t, a, e) => {
            'use strict';
            e.d(a, { h: () => i });
            var i = (function (t) {
                return (t.DISCOGRAPHY = 'discography'), (t.ALBUMS = 'albums'), (t.COMPILATIONS = 'compilations'), t;
            })({});
        },
        34959: (t, a, e) => {
            'use strict';
            e.d(a, { r: () => q });
            var i = e(32290),
                s = e(63618),
                l = e(96103),
                r = e(21916),
                n = e(55178),
                o = e(60900),
                u = e(21732),
                d = e(37215),
                m = e(91027),
                c = e(71926),
                p = e(64170),
                g = e(24170),
                h = e(54639),
                b = e(7999),
                S = e(91853),
                A = e(48922),
                f = e(22714),
                I = e(83808),
                N = e(83920),
                _ = e(3796),
                y = e(57594),
                L = e(21994),
                C = e(11262),
                P = e(28724),
                T = e(58054),
                v = e(32468),
                M = e(74694),
                w = e(89020),
                R = e(45257),
                U = e(57815),
                k = e(22556),
                x = e(44242),
                G = e(14459),
                O = e(83992),
                E = e(42125),
                j = e(24535),
                D = e(47216),
                Y = e(94821),
                B = e(26365);
            async function H(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, E.W)(a.locale),
                    r = l({ id: 'metadata.artist-albums-title' }, { artistName: t.artist.name }),
                    n = l({ id: 'metadata.artist-albums-description' }, { artistName: t.artist.name });
                return {
                    title: r,
                    description: n,
                    openGraph: (0, j.i)({
                        ogTitle: r,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, O.v)({ tld: a.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: Y.W.SUMMARY_LARGE_IMAGE, title: r, description: n }),
                    facebook: (0, G.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/albums', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function W(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, E.W)(a.locale),
                    r = l({ id: 'metadata.artist-compilations-title' }, { artistName: t.artist.name }),
                    n = l({ id: 'metadata.artist-compilations-description' }, { artistName: t.artist.name });
                return {
                    title: r,
                    description: n,
                    openGraph: (0, j.i)({
                        ogTitle: r,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, O.v)({ tld: a.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: Y.W.SUMMARY_LARGE_IMAGE, title: r, description: n }),
                    facebook: (0, G.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/compilations', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function F(t, a) {
                var e, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, E.W)(a.locale),
                    r = l({ id: 'metadata.artist-discography-title' }, { artistName: t.artist.name }),
                    n = l({ id: 'metadata.artist-discography-description' }, { artistName: t.artist.name });
                return {
                    title: r,
                    description: n,
                    openGraph: (0, j.i)({
                        ogTitle: r,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (e = a.fullUrl) ? e : '',
                        locale: a.locale,
                        customImage: (0, O.v)({ tld: a.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: Y.W.SUMMARY_LARGE_IMAGE, title: r, description: n }),
                    facebook: (0, G.k)(),
                    appLinks: (0, x.X)({
                        additional: { ...a, url: null != (i = a.url) ? i : '', fullUrl: null != (s = a.fullUrl) ? s : '', host: a.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/discography', a.tld, { params: { artistId: t.artist.id } }),
                };
            }
            var X = e(22644),
                z = e(51714),
                V = e(52381),
                Q = e.n(V);
            let q = (0, l.PA)((t) => {
                var a, e, l;
                let { artistId: x, variant: G, preloadedArtist: O, preloadedAlbums: E } = t,
                    {
                        artist: j,
                        disclaimerModalState: D,
                        settings: { isMobile: Y },
                    } = (0, y.g)(),
                    { formatMessage: B } = (0, o.A)(),
                    { contentScrollRef: V, setContentScrollRef: q } = (0, N.g)(),
                    Z = (0, I.W)(),
                    $ = j.albumsSubpage.isShimmerVisible ? h.r3 : j.albumsSubpage.items.length,
                    J = (0, m.c)((t) => {
                        j.albumsSubpage.getData({ artistId: x, page: t, pageSize: h.r3, sort: { sortBy: d.g.YEAR } });
                    });
                (0, C.X)(j.albumsSubpage.pagesLoader, J);
                let K = (0, S.S)({ artist: null == (a = j.meta) ? void 0 : a.artist, shouldHistoryBack: !0 });
                (0, z.G)(x),
                    (0, n.useEffect)(() => {
                        var t;
                        (null == (t = j.meta) ? void 0 : t.artist.isUnsafeLegal) && K();
                    }, [null == (e = j.meta) ? void 0 : e.artist.isUnsafeLegal, K]),
                    (0, X._)(j, x),
                    (0, n.useEffect)(
                        () => () => {
                            j.albumsSubpage.reset();
                        },
                        [j, j.albumsSubpage],
                    ),
                    j.albumsSubpage.isNotFound && (0, r.notFound)(),
                    (0, _.J)(j.albumsSubpage.isResolved),
                    ((t, a) => {
                        var e;
                        (0, n.useEffect)(() => {
                            if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                            let e = (0, U.E)(t.meta.artist);
                            switch (a) {
                                case L.h.ALBUMS:
                                    H({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, k.j)(t);
                                    });
                                    break;
                                case L.h.COMPILATIONS:
                                    W({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, k.j)(t);
                                    });
                                    break;
                                case L.h.DISCOGRAPHY:
                                    F({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, k.j)(t);
                                    });
                            }
                        }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, a, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                    })(j, G);
                let tt = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(T.w, { className: Q().footer }) }) }), []),
                    ta = (0, n.useMemo)(() => {
                        switch (G) {
                            case L.h.DISCOGRAPHY:
                                return B({ id: 'page.artist-discography-header' }, { artistName: j.commonSubPage.artistName });
                            case L.h.COMPILATIONS:
                                return B({ id: 'page.artist-compilations-header' }, { artistName: j.commonSubPage.artistName });
                            default:
                                return B({ id: 'page.artist-albums-header' }, { artistName: j.commonSubPage.artistName });
                        }
                    }, [j.commonSubPage.artistName, B, G]),
                    te = (0, n.useMemo)(() => {
                        switch (G) {
                            case L.h.DISCOGRAPHY:
                                return B({ id: 'entity-names.artist-studio-albums-list' });
                            case L.h.COMPILATIONS:
                                return B({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return B({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [B, G]),
                    ti = (0, n.useMemo)(() => {
                        switch (G) {
                            case L.h.DISCOGRAPHY:
                                return A._Q.ARTIST_DISCOGRAPHY;
                            case L.h.COMPILATIONS:
                                return A._Q.ARTIST_COMPILATIONS;
                            default:
                                return A._Q.ARTIST_ALBUMS;
                        }
                    }, [G]),
                    ts = [];
                return (x &&
                    j.albumsSubpage.isNeededToLoad &&
                    (j.albumsSubpage.setVariant(G),
                    ts.push(j.albumsSubpage.getData({ artistId: x, page: 0, pageSize: h.r3, sort: { sortBy: d.g.YEAR }, preloadedAlbums: E }))),
                x && j.infoLoadingState.isNeededToLoad && ts.push(j.getInfo({ artistId: x, preloadedArtist: O })),
                ts.length && (0, n.use)(Promise.allSettled(ts)),
                null == (l = j.meta) ? void 0 : l.artist.isLegalRejected)
                    ? (0, i.jsx)(P.M, { modalState: D })
                    : j.albumsSubpage.isRejected && !j.albumsSubpage.isNotFound
                      ? (0, i.jsx)(p.SomethingWentWrong, {})
                      : (0, i.jsx)(f.n, {
                            pageId: ti,
                            pageEntityId: x,
                            children: (0, i.jsx)(b.h, {
                                scrollElement: V,
                                outerTitle: ta,
                                children: (0, i.jsxs)('div', {
                                    className: Q().root,
                                    'data-test-id': u.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, i.jsx)(M.Y, {
                                            variant: M.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Z.canBack,
                                            children: (0, i.jsx)(c.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: ta }),
                                        }),
                                        (0, i.jsx)(R.$, {
                                            className: (0, s.$)(Q().scrollContainer, Q().important),
                                            listClassName: Q().content,
                                            itemClassName: Q().item,
                                            customComponents: tt,
                                            itemContentCallback: (t) => {
                                                let a = j.albumsSubpage.items[t],
                                                    e = B({ id: 'loading-messages.entity-is-loading' }, { entityName: B({ id: 'entity-names.playlist' }) });
                                                return a
                                                    ? (0, i.jsx)(g.a, { album: a, contentLinesCount: 4 }, a.id)
                                                    : (0, i.jsx)(w.V, { 'aria-label': e, linesCount: 4 });
                                            },
                                            totalCount: $,
                                            onGetDataByPage: J,
                                            pageSize: h.r3,
                                            totalRequests: j.albumsSubpage.requestsCount,
                                            handleRef: q,
                                            context: { listAriaLabel: te },
                                            isMobileLayout: Y,
                                            useWindowScroll: Y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        37215: (t, a, e) => {
            'use strict';
            var i;
            e.d(a, { g: () => i }),
                (function (t) {
                    (t.RATING = 'rating'), (t.YEAR = 'year');
                })(i || (i = {}));
        },
        52381: (t) => {
            t.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        56343: (t, a, e) => {
            'use strict';
            e.r(a), e.d(a, { default: () => o });
            var i = e(32290),
                s = e(21916),
                l = e(34959),
                r = e(21994),
                n = e(17024);
            let o = () => {
                let t = (0, s.useSearchParams)().get('artistId');
                return (t && (0, n.L)(t)) || (0, s.notFound)(), (0, i.jsx)(l.r, { artistId: t, variant: r.h.COMPILATIONS });
            };
        },
    },
    (t) => {
        t.O(
            0,
            [
                7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 5114, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 3266, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 2125, 4220, 9562, 7358,
            ],
            () => t((t.s = 3571)),
        ),
            (_N_E = t.O());
    },
]);
