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
        32742: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 36e3));
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
        70236: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => E });
            var i = s(88800),
                l = s(65724),
                o = s(84961),
                a = s(53548),
                c = s(2058),
                n = s(58390),
                r = s(17392),
                d = s(19994),
                u = s(29504),
                m = s(32596),
                h = s(10079),
                C = s(69630),
                y = s(12816),
                P = s(59844),
                _ = s(46422),
                g = s(44230),
                k = s(37670),
                x = s(34961),
                p = s(53892),
                b = s(72288),
                w = s(86790),
                S = s(60266),
                f = s(93317),
                j = s(37770),
                v = s(79418),
                N = s(76541),
                T = s(70638),
                A = s.n(T);
            let E = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, x.s)(p.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, b.g)(),
                    { contentScrollRef: T, setContentScrollRef: E } = (0, g.g)(),
                    { formatMessage: L } = (0, c.A)(),
                    R = (0, _.W)(),
                    W = (0, a.useMemo)(() => ({ Footer: () => (0, i.jsx)(S.A, { children: (0, i.jsx)(w.w, { className: A().footer }) }) }), []),
                    M = (0, a.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(u.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(d.W, { className: A().shimmerTitle, radius: 'l' }),
                        [s.title],
                    );
                if (
                    ((0, k.J)(s.isResolved),
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
                    return (0, i.jsx)(m.SomethingWentWrong, {});
                let O = s.isShimmerVisible ? N.w : s.itemsCount;
                return (0, i.jsx)(P.n, {
                    pageId: t ? y._Q.CHART_PODCASTS_CATEGORY : y._Q.CHART_PODCASTS,
                    children: (0, i.jsx)(C.h, {
                        scrollElement: T,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: A().root,
                            'data-test-id': r.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(f.Y, { variant: f.V.TEXT, withForwardControl: !1, withBackwardControl: R.canBack, children: M }),
                                (0, i.jsx)(v.$, {
                                    className: (0, l.$)(A().scrollContainer, A().important),
                                    listClassName: A().content,
                                    customComponents: W,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            l = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                        return !t || s.isShimmerVisible
                                            ? (0, i.jsx)(j.V, { 'aria-label': l })
                                            : (0, i.jsx)(h.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: E,
                                    initialItemCount: O,
                                    totalCount: O,
                                    isMobileLayout: o,
                                    useWindowScroll: o,
                                    context: { listAriaLabel: L({ id: 'entity-names.chart-podcasts-list' }) },
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
                8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 3637, 2831, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 8766, 763, 2670, 7358,
            ],
            () => e((e.s = 32742)),
        ),
            (_N_E = e.O()));
    },
]);
