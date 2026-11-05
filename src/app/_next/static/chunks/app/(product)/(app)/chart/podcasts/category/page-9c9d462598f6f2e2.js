(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056],
    {
        1698: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => o });
            var i = s(88800),
                l = s(37770);
            let o = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: o,
                    centered: a,
                    withInfo: c,
                    count: n = 10,
                    shimmerClassName: r,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        l.V,
                        { isActive: t, linesCount: d, className: s, round: o, centered: a, withInfo: c, withSubcover: m, 'aria-label': u, shimmerClassName: r },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => l });
            var i = s(67174);
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
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        36e3: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => n }));
            var i = s(88800),
                l = s(53548),
                o = s(58390),
                a = s(70236),
                c = s(92677);
            let n = () => {
                let e = (0, o.useSearchParams)().get('categoryId');
                return (
                    e || (0, o.notFound)(),
                    (0, i.jsx)(l.Suspense, { fallback: (0, i.jsx)(c.ChartPodcastsPageSuspenseLoader, {}), children: (0, i.jsx)(a.ChartPodcastsPage, { categoryId: e }) })
                );
            };
        },
        43440: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 36e3));
        },
        70236: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => L });
            var i = s(88800),
                l = s(65724),
                o = s(84961),
                a = s(53548),
                c = s(2058),
                n = s(58390),
                r = s(87999),
                d = s(76903),
                u = s(17392),
                m = s(19994),
                h = s(29504),
                C = s(32596),
                P = s(10079),
                y = s(69630),
                g = s(98427),
                _ = s(46422),
                k = s(44230),
                p = s(37670),
                x = s(34961),
                b = s(53892),
                S = s(72288),
                w = s(86790),
                f = s(60266),
                j = s(93317),
                v = s(37770),
                A = s(79418),
                N = s(76541),
                T = s(70638),
                E = s.n(T);
            let L = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, x.s)(b.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, S.g)(),
                    { contentScrollRef: T, setContentScrollRef: L } = (0, k.g)(),
                    { formatMessage: R } = (0, c.A)(),
                    W = (0, _.W)(),
                    F = (0, a.useMemo)(() => ({ Footer: () => (0, i.jsx)(f.A, { children: (0, i.jsx)(w.w, { className: E().footer }) }) }), []),
                    M = (0, a.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(h.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(m.W, { className: E().shimmerTitle, radius: 'l' }),
                        [s.title],
                    );
                if (
                    ((0, p.J)(s.isResolved),
                    s.isNotFound && (0, n.notFound)(),
                    (0, a.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNeededToLoad && (0, a.use)(s.getData(t)),
                    s.isSomethingWrong)
                )
                    return (0, i.jsx)(C.SomethingWentWrong, {});
                let O = s.isShimmerVisible ? N.w : s.itemsCount;
                return (0, i.jsx)(d.a, {
                    pageId: t ? r.AppScreen.ChartPodcastsCategory : r.AppScreen.ChartPodcasts,
                    pageIdForFrom: t ? g.b.CHART_PODCASTS_CATEGORY : g.b.CHART_PODCASTS,
                    children: (0, i.jsx)(y.h, {
                        scrollElement: T,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: E().root,
                            'data-test-id': u.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(j.Y, { variant: j.V.TEXT, withForwardControl: !1, withBackwardControl: W.canBack, children: M }),
                                (0, i.jsx)(A.$, {
                                    className: (0, l.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            l = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.album' }) });
                                        return !t || s.isShimmerVisible
                                            ? (0, i.jsx)(v.V, { 'aria-label': l })
                                            : (0, i.jsx)(P.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: L,
                                    initialItemCount: O,
                                    totalCount: O,
                                    isMobileLayout: o,
                                    useWindowScroll: o,
                                    context: { listAriaLabel: R({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        70638: (e) => {
            e.exports = {
                root: 'ChartPodcastsPage_root__J5lnx',
                scrollContainer: 'ChartPodcastsPage_scrollContainer__WQTf7',
                important: 'ChartPodcastsPage_important__fW45m',
                shimmerScrollContainer: 'ChartPodcastsPage_shimmerScrollContainer__nOO43',
                footer: 'ChartPodcastsPage_footer__7ytrT',
                item: 'ChartPodcastsPage_item__vGRt8',
                content: 'ChartPodcastsPage_content__NcV4M',
                shimmerTitle: 'ChartPodcastsPage_shimmerTitle__Missw',
            };
        },
        92677: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPageSuspenseLoader: () => C });
            var i = s(88800),
                l = s(65724),
                o = s(2058),
                a = s(19994),
                c = s(69630),
                n = s(46422),
                r = s(93317),
                d = s(1698),
                u = s(76541),
                m = s(70638),
                h = s.n(m);
            let C = () => {
                let e = (0, n.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    s = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, i.jsx)(c.h, {
                    scrollElement: null,
                    children: (0, i.jsxs)('div', {
                        className: h().root,
                        children: [
                            (0, i.jsx)(r.Y, {
                                variant: r.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, i.jsx)(a.W, { className: h().shimmerTitle, radius: 'l' }),
                            }),
                            (0, i.jsx)('div', {
                                className: (0, l.$)(h().scrollContainer, h().important, h().shimmerScrollContainer),
                                children: (0, i.jsx)('div', {
                                    className: h().content,
                                    children: (0, i.jsx)(d.e, { isActive: !0, itemClassName: h().item, 'aria-label': s, count: u.w }),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 2831, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9498, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 4386, 763, 2670, 7358,
            ],
            () => e((e.s = 43440)),
        ),
            (_N_E = e.O()));
    },
]);
