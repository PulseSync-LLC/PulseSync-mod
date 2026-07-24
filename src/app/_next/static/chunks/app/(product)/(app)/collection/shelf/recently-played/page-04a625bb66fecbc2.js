(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2995],
    {
        73624: (e, t, l) => {
            'use strict';
            l.d(t, { CollectionShelfRecentlyPlayedPage: () => w });
            var a = l(32290),
                o = l(63618),
                i = l(96103),
                s = l(55178),
                n = l(60900),
                r = l(39407),
                c = l(21732),
                d = l(91027),
                m = l(71926),
                y = l(64170),
                p = l(7999),
                h = l(94631),
                _ = l(83808),
                u = l(83920),
                P = l(3796),
                C = l(31286),
                g = l(57594),
                f = l(98350),
                S = l(11262),
                x = l(58054),
                L = l(32468),
                j = l(74694),
                E = l(34223),
                v = l(45257),
                A = l(30294),
                R = l(73968),
                b = l(40498),
                N = l(91072),
                k = l.n(N);
            let w = (0, i.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: { shelfRecentlyPlayed: t },
                    } = (0, g.g)(),
                    { contentScrollRef: l, setContentScrollRef: i } = (0, u.g)(),
                    N = (0, _.W)(),
                    { formatMessage: w } = (0, n.A)(),
                    T = (0, C.w)(),
                    D = (0, d.c)((e) => {
                        t.getData({ page: e, pageSize: A.c });
                    });
                (0, S.X)(t.pagesLoader, D);
                let F = (0, s.useMemo)(() => ({ Footer: () => (0, a.jsx)(L.A, { children: (0, a.jsx)(x.w, { className: k().footer }) }) }), []),
                    I = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, s.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, P.J)(t.isResolved),
                t.isNeededToLoad && (0, s.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, a.jsx)(y.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, a.jsx)(b.F, { title: w({ id: 'error-messages.empty-shelf-page-title' }) })
                      : (0, a.jsx)(p.h, {
                            scrollElement: l,
                            outerTitle: w({ id: 'podcast.shelf-recently-played-title' }),
                            children: (0, a.jsxs)('div', {
                                className: k().root,
                                'data-test-id': c.Xk.collection.COLLECTION_SHELF_RECENTLY_PLAYED_PAGE,
                                children: [
                                    (0, a.jsx)(j.Y, {
                                        variant: j.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: N.canBack,
                                        children: (0, a.jsx)(m.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(r.A, { id: 'podcast.shelf-recently-played-title' }),
                                        }),
                                    }),
                                    (0, a.jsx)(v.$, {
                                        className: (0, o.$)(k().scrollContainer, k().important),
                                        customComponents: F,
                                        itemContentCallback: (e) => {
                                            let l = t.items[e];
                                            if (!l) return (0, a.jsx)(E.D, { variant: f.X.PLAYLIST, isActive: !0 }, e);
                                            let o = (0, R.T)(l, t.typeForFrom);
                                            return (0, a.jsx)(
                                                h.K,
                                                {
                                                    track: l.track,
                                                    playContextParams: T(e, { contextData: o, queueParams: { entityId: l.track.id, index: e } }),
                                                    withPodcastName: !0,
                                                },
                                                e,
                                            );
                                        },
                                        initialItemCount: I,
                                        totalCount: I,
                                        onGetDataByPage: D,
                                        pageSize: A.c,
                                        totalRequests: t.requestsCount,
                                        listClassName: k().content,
                                        itemClassName: k().item,
                                        handleRef: i,
                                        context: { listAriaLabel: w({ id: 'podcast.shelf-recently-played-title' }) },
                                        isMobileLayout: e,
                                        useWindowScroll: e,
                                    }),
                                ],
                            }),
                        });
            });
        },
        73968: (e, t, l) => {
            'use strict';
            l.d(t, { T: () => i });
            var a,
                o = l(71483);
            !(function (e) {
                (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist');
            })(a || (a = {}));
            let i = (e, t) => {
                var l, i;
                return e.type === a.ALBUM
                    ? { type: o.K.Album, meta: { id: (null == (i = e.album) ? void 0 : i.id) || 0 }, from: t || '' }
                    : { type: o.K.Playlist, meta: { id: (null == (l = e.playlist) ? void 0 : l.id) || '' }, from: t || '' };
            };
        },
        91072: (e) => {
            e.exports = {
                root: 'CollectionShelfRecentlyPlayedPage_root__1eSLj',
                footer: 'CollectionShelfRecentlyPlayedPage_footer__5pPcU',
                scrollContainer: 'CollectionShelfRecentlyPlayedPage_scrollContainer__2ErJI',
                important: 'CollectionShelfRecentlyPlayedPage_important___ajYP',
                content: 'CollectionShelfRecentlyPlayedPage_content__p4qEp',
                item: 'CollectionShelfRecentlyPlayedPage_item__gQR_c',
            };
        },
        98882: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 3377)), Promise.resolve().then(l.bind(l, 73624));
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 3183, 7972, 8868, 7231, 6347, 9763, 6639, 7258, 4835, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586,
                8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 3759, 7207, 4220, 9562, 7358,
            ],
            () => e((e.s = 98882)),
        ),
            (_N_E = e.O());
    },
]);
