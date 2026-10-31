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
        61298: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 70236)), Promise.resolve().then(s.bind(s, 92677)));
        },
        70236: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => E });
            var i = s(88800),
                l = s(65724),
                o = s(84961),
                c = s(53548),
                a = s(2058),
                n = s(58390),
                r = s(17392),
                d = s(19994),
                u = s(29504),
                m = s(32596),
                h = s(10079),
                C = s(69630),
                _ = s(12816),
                y = s(59844),
                k = s(46422),
                P = s(44230),
                g = s(37670),
                b = s(34961),
                p = s(53892),
                x = s(72288),
                w = s(86790),
                v = s(60266),
                N = s(93317),
                T = s(37770),
                f = s(79418),
                A = s(76541),
                S = s(70638),
                j = s.n(S);
            let E = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, b.s)(p.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, x.g)(),
                    { contentScrollRef: S, setContentScrollRef: E } = (0, P.g)(),
                    { formatMessage: R } = (0, a.A)(),
                    W = (0, k.W)(),
                    L = (0, c.useMemo)(() => ({ Footer: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(w.w, { className: j().footer }) }) }), []),
                    M = (0, c.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(u.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(d.W, { className: j().shimmerTitle, radius: 'l' }),
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
                    return (0, i.jsx)(m.SomethingWentWrong, {});
                let O = s.isShimmerVisible ? A.w : s.itemsCount;
                return (0, i.jsx)(y.n, {
                    pageId: t ? _._Q.CHART_PODCASTS_CATEGORY : _._Q.CHART_PODCASTS,
                    children: (0, i.jsx)(C.h, {
                        scrollElement: S,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: j().root,
                            'data-test-id': r.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(N.Y, { variant: N.V.TEXT, withForwardControl: !1, withBackwardControl: W.canBack, children: M }),
                                (0, i.jsx)(f.$, {
                                    className: (0, l.$)(j().scrollContainer, j().important),
                                    listClassName: j().content,
                                    customComponents: L,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            l = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.album' }) });
                                        return !t || s.isShimmerVisible
                                            ? (0, i.jsx)(T.V, { 'aria-label': l })
                                            : (0, i.jsx)(h.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: E,
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
                8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 3637, 2831, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 8766, 763, 2670, 7358,
            ],
            () => e((e.s = 61298)),
        ),
            (_N_E = e.O()));
    },
]);
