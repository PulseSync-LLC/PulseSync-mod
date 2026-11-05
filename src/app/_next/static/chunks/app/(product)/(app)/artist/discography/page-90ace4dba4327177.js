(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7706],
    {
        11304: (t, e, a) => {
            Promise.resolve().then(a.bind(a, 16166));
        },
        16166: (t, e, a) => {
            'use strict';
            (a.r(e), a.d(e, { default: () => n }));
            var i = a(88800),
                s = a(58390),
                r = a(47450),
                l = a(87128),
                o = a(21438);
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
        47450: (t, e, a) => {
            'use strict';
            a.d(e, { r: () => J });
            var i = a(88800),
                s = a(65724),
                r = a(84961),
                l = a(53548),
                o = a(2058),
                n = a(58390),
                u = a(87999),
                d = a(76903),
                m = a(17392),
                c = a(63565),
                p = a(29993),
                g = a(29504),
                b = a(32596),
                h = a(10079),
                S = a(96237),
                A = a(69630),
                f = a(91959),
                I = a(98427),
                N = a(46422),
                _ = a(44230),
                y = a(37670),
                v = a(72288),
                L = a(87128),
                C = a(54320),
                P = a(19998),
                T = a(86790),
                w = a(60266),
                k = a(93317),
                R = a(37770),
                G = a(79418),
                M = a(81685),
                O = a(30144),
                j = a(324),
                U = a(53073),
                x = a(83418),
                D = a(46511),
                E = a(57297),
                Y = a(2218),
                B = a(77863),
                H = a(45383),
                W = a(98774);
            async function F(t, e) {
                var a, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, D.W)(e.locale),
                    l = r({ id: 'metadata.artist-albums-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-albums-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, E.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, x.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...e, url: null != (i = e.url) ? i : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/albums', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function V(t, e) {
                var a, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, D.W)(e.locale),
                    l = r({ id: 'metadata.artist-compilations-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-compilations-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, E.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, x.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...e, url: null != (i = e.url) ? i : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/compilations', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function X(t, e) {
                var a, i, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, D.W)(e.locale),
                    l = r({ id: 'metadata.artist-discography-title' }, { artistName: t.artist.name }),
                    o = r({ id: 'metadata.artist-discography-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, W.G)(t.artist),
                    title: l,
                    description: o,
                    openGraph: (0, E.i)({
                        ogTitle: l,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, x.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, Y.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: l, description: o }),
                    facebook: (0, U.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...e, url: null != (i = e.url) ? i : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/discography', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            var z = a(27342),
                q = a(63512),
                Z = a(46591),
                $ = a.n(Z);
            let J = (0, r.PA)((t) => {
                var e, a, r;
                let { artistId: j, variant: U, preloadedArtist: x, preloadedAlbums: D } = t,
                    {
                        artist: E,
                        disclaimerModalState: Y,
                        settings: { isMobile: B },
                    } = (0, v.g)(),
                    { formatMessage: H } = (0, o.A)(),
                    { contentScrollRef: W, setContentScrollRef: Z } = (0, _.g)(),
                    J = (0, N.W)(),
                    K = E.albumsSubpage.isShimmerVisible ? S.r3 : E.albumsSubpage.items.length,
                    Q = (0, p.c)((t) => {
                        E.albumsSubpage.getData({ artistId: j, page: t, pageSize: S.r3, sort: { sortBy: c.g.YEAR } });
                    });
                (0, C.X)(E.albumsSubpage.pagesLoader, Q);
                let tt = (0, f.S)({ artist: null == (e = E.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                ((0, q.G)(j),
                    (0, l.useEffect)(() => {
                        var t;
                        (null == (t = E.meta) ? void 0 : t.artist.isUnsafeLegal) && tt();
                    }, [null == (a = E.meta) ? void 0 : a.artist.isUnsafeLegal, tt]),
                    (0, z._)(E, j),
                    (0, l.useEffect)(
                        () => () => {
                            E.albumsSubpage.reset();
                        },
                        [E, E.albumsSubpage],
                    ),
                    E.albumsSubpage.isNotFound && (0, n.notFound)(),
                    (0, y.J)(E.albumsSubpage.isResolved),
                    ((t, e) => {
                        var a;
                        let { fullscreenVideoPlayer: i } = (0, v.g)(),
                            s = null == t || null == (a = t.meta) ? void 0 : a.artist,
                            r = null == t ? void 0 : t.infoLoadingState.isLoading,
                            o = null == t ? void 0 : t.infoLoadingState.isRejected,
                            n = (0, l.useCallback)(
                                (t) => {
                                    if (o) return {};
                                    if (!s || r) return;
                                    let a = (0, M.E)(s);
                                    switch (e) {
                                        case L.h.ALBUMS:
                                            return F({ artist: a }, t);
                                        case L.h.COMPILATIONS:
                                            return V({ artist: a }, t);
                                        case L.h.DISCOGRAPHY:
                                            return X({ artist: a }, t);
                                    }
                                },
                                [s, r, o, e],
                            );
                        (0, O.C)(i.modal.isOpened ? null : n);
                    })(E, U));
                let te = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(w.A, { children: (0, i.jsx)(T.w, { className: $().footer }) }) }), []),
                    ta = (0, l.useMemo)(() => {
                        switch (U) {
                            case L.h.DISCOGRAPHY:
                                return H({ id: 'page.artist-discography-header' }, { artistName: E.commonSubPage.artistName });
                            case L.h.COMPILATIONS:
                                return H({ id: 'page.artist-compilations-header' }, { artistName: E.commonSubPage.artistName });
                            default:
                                return H({ id: 'page.artist-albums-header' }, { artistName: E.commonSubPage.artistName });
                        }
                    }, [E.commonSubPage.artistName, H, U]),
                    ti = (0, l.useMemo)(() => {
                        switch (U) {
                            case L.h.DISCOGRAPHY:
                                return H({ id: 'entity-names.artist-studio-albums-list' });
                            case L.h.COMPILATIONS:
                                return H({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return H({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [H, U]),
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
                return (j &&
                    E.albumsSubpage.isNeededToLoad &&
                    (E.albumsSubpage.setVariant(U),
                    tr.push(E.albumsSubpage.getData({ artistId: j, page: 0, pageSize: S.r3, sort: { sortBy: c.g.YEAR }, preloadedAlbums: D }))),
                j && E.infoLoadingState.isNeededToLoad && tr.push(E.getInfo({ artistId: j, preloadedArtist: x })),
                tr.length && (0, l.use)(Promise.allSettled(tr)),
                null == (r = E.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(P.M, { modalState: Y })
                    : E.albumsSubpage.isRejected && !E.albumsSubpage.isNotFound
                      ? (0, i.jsx)(b.SomethingWentWrong, {})
                      : (0, i.jsx)(d.a, {
                            pageId: u.AppScreen.ArtistScreen,
                            pageIdForFrom: ts,
                            mainObjectId: j,
                            mainObjectType: u.DomainObjectType.Artist,
                            children: (0, i.jsx)(A.h, {
                                scrollElement: W,
                                outerTitle: ta,
                                children: (0, i.jsxs)('div', {
                                    className: $().root,
                                    'data-test-id': m.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, i.jsx)(k.Y, {
                                            variant: k.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: J.canBack,
                                            children: (0, i.jsx)(g.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: ta }),
                                        }),
                                        (0, i.jsx)(G.$, {
                                            className: (0, s.$)($().scrollContainer, $().important),
                                            listClassName: $().content,
                                            itemClassName: $().item,
                                            customComponents: te,
                                            itemContentCallback: (t) => {
                                                let e = E.albumsSubpage.items[t],
                                                    a = H({ id: 'loading-messages.entity-is-loading' }, { entityName: H({ id: 'entity-names.playlist' }) });
                                                return e
                                                    ? (0, i.jsx)(h.a, { album: e, contentLinesCount: 4 }, e.id)
                                                    : (0, i.jsx)(R.V, { 'aria-label': a, linesCount: 4 });
                                            },
                                            totalCount: K,
                                            onGetDataByPage: Q,
                                            pageSize: S.r3,
                                            totalRequests: E.albumsSubpage.requestsCount,
                                            handleRef: Z,
                                            context: { listAriaLabel: ti },
                                            isMobileLayout: B,
                                            useWindowScroll: B,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        63565: (t, e, a) => {
            'use strict';
            var i;
            (a.d(e, { g: () => i }),
                (function (t) {
                    ((t.RATING = 'rating'), (t.YEAR = 'year'));
                })(i || (i = {})));
        },
        70621: (t, e, a) => {
            'use strict';
            a.d(e, { D: () => n });
            var i = a(53548),
                s = a(63582),
                r = a(245),
                l = a(22681),
                o = a(56374);
            let n = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let t = (0, r.N)(),
                    e = (0, l.w)(),
                    a = (0, i.useMemo)(() => (e ? t.createBlockReporter(e.snapshot) : null), [t, e]);
                return (0, o.c)((t) => {
                    e?.object && a && a.actionPerformed({ ...t, viewUuid: (e.object.activeViewSession ?? e.object.viewSession).start() });
                });
            });
        },
        87128: (t, e, a) => {
            'use strict';
            a.d(e, { h: () => i });
            var i = (function (t) {
                return ((t.DISCOGRAPHY = 'discography'), (t.ALBUMS = 'albums'), (t.COMPILATIONS = 'compilations'), t);
            })({});
        },
    },
    (t) => {
        (t.O(
            0,
            [
                7437, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 206, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 2494, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 2889, 763, 2670, 7358,
            ],
            () => t((t.s = 11304)),
        ),
            (_N_E = t.O()));
    },
]);
