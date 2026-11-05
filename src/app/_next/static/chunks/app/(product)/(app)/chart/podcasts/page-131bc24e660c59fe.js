(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1271],
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
                    centered: c,
                    withInfo: a,
                    count: n = 10,
                    shimmerClassName: r,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, i.jsx)(
                        l.V,
                        { isActive: t, linesCount: d, className: s, round: o, centered: c, withInfo: a, withSubcover: m, 'aria-label': u, shimmerClassName: r },
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
        15018: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 70236)), Promise.resolve().then(s.bind(s, 92677)));
        },
        70236: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => R });
            var i = s(88800),
                l = s(65724),
                o = s(84961),
                c = s(53548),
                a = s(2058),
                n = s(58390),
                r = s(87999),
                d = s(76903),
                u = s(17392),
                m = s(19994),
                h = s(29504),
                C = s(32596),
                y = s(10079),
                P = s(69630),
                _ = s(98427),
                k = s(46422),
                p = s(44230),
                g = s(37670),
                b = s(34961),
                x = s(53892),
                w = s(72288),
                v = s(86790),
                A = s(60266),
                N = s(93317),
                S = s(37770),
                T = s(79418),
                f = s(76541),
                j = s(70638),
                E = s.n(j);
            let R = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, b.s)(x.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, w.g)(),
                    { contentScrollRef: j, setContentScrollRef: R } = (0, p.g)(),
                    { formatMessage: W } = (0, a.A)(),
                    L = (0, k.W)(),
                    M = (0, c.useMemo)(() => ({ Footer: () => (0, i.jsx)(A.A, { children: (0, i.jsx)(v.w, { className: E().footer }) }) }), []),
                    O = (0, c.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(h.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(m.W, { className: E().shimmerTitle, radius: 'l' }),
                        [s.title],
                    );
                if (
                    ((0, g.J)(s.isResolved),
                    s.isNotFound && (0, n.notFound)(),
                    (0, c.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNeededToLoad && (0, c.use)(s.getData(t)),
                    s.isSomethingWrong)
                )
                    return (0, i.jsx)(C.SomethingWentWrong, {});
                let V = s.isShimmerVisible ? f.w : s.itemsCount;
                return (0, i.jsx)(d.a, {
                    pageId: t ? r.AppScreen.ChartPodcastsCategory : r.AppScreen.ChartPodcasts,
                    pageIdForFrom: t ? _.b.CHART_PODCASTS_CATEGORY : _.b.CHART_PODCASTS,
                    children: (0, i.jsx)(P.h, {
                        scrollElement: j,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: E().root,
                            'data-test-id': u.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(N.Y, { variant: N.V.TEXT, withForwardControl: !1, withBackwardControl: L.canBack, children: O }),
                                (0, i.jsx)(T.$, {
                                    className: (0, l.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    customComponents: M,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            l = W({ id: 'loading-messages.entity-is-loading' }, { entityName: W({ id: 'entity-names.album' }) });
                                        return !t || s.isShimmerVisible
                                            ? (0, i.jsx)(S.V, { 'aria-label': l })
                                            : (0, i.jsx)(y.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: R,
                                    initialItemCount: V,
                                    totalCount: V,
                                    isMobileLayout: o,
                                    useWindowScroll: o,
                                    context: { listAriaLabel: W({ id: 'entity-names.chart-podcasts-list' }) },
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
                c = s(19994),
                a = s(69630),
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
                return (0, i.jsx)(a.h, {
                    scrollElement: null,
                    children: (0, i.jsxs)('div', {
                        className: h().root,
                        children: [
                            (0, i.jsx)(r.Y, {
                                variant: r.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, i.jsx)(c.W, { className: h().shimmerTitle, radius: 'l' }),
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
            () => e((e.s = 15018)),
        ),
            (_N_E = e.O()));
    },
]);
