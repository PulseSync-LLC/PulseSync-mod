(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056],
    {
        20472: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => l });
            var i = s(36477);
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
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        50308: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => o });
            var i = s(32290),
                l = s(89020);
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
        50947: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPageSuspenseLoader: () => C });
            var i = s(32290),
                l = s(63618),
                o = s(60900),
                a = s(79856),
                c = s(7999),
                n = s(83808),
                r = s(74694),
                d = s(50308),
                u = s(85067),
                m = s(68816),
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
        58898: (e, t, s) => {
            Promise.resolve().then(s.bind(s, 73230));
        },
        68816: (e) => {
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
        69410: (e, t, s) => {
            'use strict';
            s.d(t, { ChartPodcastsPage: () => E });
            var i = s(32290),
                l = s(63618),
                o = s(96103),
                a = s(21916),
                c = s(55178),
                n = s(60900),
                r = s(21732),
                d = s(79856),
                u = s(71926),
                m = s(64170),
                h = s(24170),
                C = s(7999),
                y = s(48922),
                P = s(22714),
                _ = s(83808),
                g = s(83920),
                k = s(3796),
                x = s(49259),
                p = s(45066),
                w = s(57594),
                b = s(58054),
                S = s(32468),
                f = s(74694),
                j = s(89020),
                N = s(45257),
                T = s(85067),
                v = s(68816),
                A = s.n(v);
            let E = (0, o.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: s } = (0, x.s)(p.n.CHART),
                    {
                        settings: { isMobile: o },
                    } = (0, w.g)(),
                    { contentScrollRef: v, setContentScrollRef: E } = (0, g.g)(),
                    { formatMessage: L } = (0, n.A)(),
                    R = (0, _.W)(),
                    W = (0, c.useMemo)(() => ({ Footer: () => (0, i.jsx)(S.A, { children: (0, i.jsx)(b.w, { className: A().footer }) }) }), []),
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
                let O = s.isShimmerVisible ? T.w : s.itemsCount;
                return (0, i.jsx)(P.n, {
                    pageId: t ? y._Q.CHART_PODCASTS_CATEGORY : y._Q.CHART_PODCASTS,
                    children: (0, i.jsx)(C.h, {
                        scrollElement: v,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: A().root,
                            'data-test-id': r.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, i.jsx)(f.Y, { variant: f.V.TEXT, withForwardControl: !1, withBackwardControl: R.canBack, children: M }),
                                (0, i.jsx)(N.$, {
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
        73230: (e, t, s) => {
            'use strict';
            s.r(t), s.d(t, { default: () => n });
            var i = s(32290),
                l = s(21916),
                o = s(55178),
                a = s(69410),
                c = s(50947);
            let n = () => {
                let e = (0, l.useSearchParams)().get('categoryId');
                return (
                    e || (0, l.notFound)(),
                    (0, i.jsx)(o.Suspense, { fallback: (0, i.jsx)(c.ChartPodcastsPageSuspenseLoader, {}), children: (0, i.jsx)(a.ChartPodcastsPage, { categoryId: e }) })
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 5627, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 849, 4220, 9562, 7358,
            ],
            () => e((e.s = 58898)),
        ),
            (_N_E = e.O());
    },
]);
