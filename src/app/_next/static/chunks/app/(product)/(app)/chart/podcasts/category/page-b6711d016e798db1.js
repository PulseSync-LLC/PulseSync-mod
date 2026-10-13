(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056],
    {
        22918: (e, t, s) => {
            'use strict';
            (s.r(t), s.d(t, { default: () => n }));
            var i = s(25839),
                l = s(84059),
                o = s(74631),
                a = s(40522),
                c = s(45787);
            let n = () => {
                let e = (0, l.useSearchParams)().get('categoryId');
                return (
                    e || (0, l.notFound)(),
                    (0, i.jsx)(o.Suspense, { fallback: (0, i.jsx)(c.ChartPodcastsPageSuspenseLoader, {}), children: (0, i.jsx)(a.ChartPodcastsPage, { categoryId: e }) })
                );
            };
        },
        40522: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => E });
            var i = s(25839),
                l = s(82298),
                o = s(88204),
                a = s(84059),
                c = s(74631),
                n = s(39004),
                r = s(61493),
                d = s(23976),
                u = s(4254),
                m = s(78299),
                h = s(76939),
                C = s(1407),
                y = s(20258),
                P = s(10322),
                _ = s(21784),
                g = s(89192),
                k = s(30716),
                x = s(80499),
                p = s(82706),
                b = s(27954),
                w = s(99401),
                S = s(26076),
                f = s(10603),
                j = s(19412),
                v = s(6968),
                N = s(2291),
                T = s(68864),
                A = s.n(T);
            let E = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, x.s)(p.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, b.g)(),
                    { contentScrollRef: T, setContentScrollRef: E } = (0, g.g)(),
                    { formatMessage: L } = (0, n.A)(),
                    R = (0, _.W)(),
                    W = (0, c.useMemo)(() => ({ Footer: () => (0, i.jsx)(S.A, { children: (0, i.jsx)(w.w, { className: A().footer }) }) }), []),
                    M = (0, c.useMemo)(
                        () =>
                            s.title
                                ? (0, i.jsx)(u.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: s.title })
                                : (0, i.jsx)(d.W, { className: A().shimmerTitle, radius: 'l' }),
                        [s.title],
                    );
                if (
                    ((0, k.J)(s.isResolved),
                    s.isNotFound && (0, a.notFound)(),
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
        45787: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPageSuspenseLoader: () => C });
            var i = s(25839),
                l = s(82298),
                o = s(39004),
                a = s(23976),
                c = s(1407),
                n = s(21784),
                r = s(10603),
                d = s(95772),
                u = s(2291),
                m = s(68864),
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
        53712: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => l });
            var i = s(25895);
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
        56415: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 22918));
        },
        68864: (e) => {
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
        95772: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => o });
            var i = s(25839),
                l = s(19412);
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
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 6827, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4624, 4475, 5056, 7358,
            ],
            () => e((e.s = 56415)),
        ),
            (_N_E = e.O()));
    },
]);
