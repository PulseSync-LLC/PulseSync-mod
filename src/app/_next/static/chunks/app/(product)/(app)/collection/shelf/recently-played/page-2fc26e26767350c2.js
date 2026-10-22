(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2995],
    {
        224: (e, t, l) => {
            'use strict';
            l.d(t, { CollectionShelfRecentlyPlayedPage: () => w });
            var a = l(25839),
                o = l(82298),
                i = l(88204),
                s = l(74631),
                n = l(39004),
                r = l(8487),
                c = l(61493),
                d = l(71035),
                m = l(4254),
                y = l(64715),
                p = l(1407),
                h = l(51549),
                _ = l(21784),
                u = l(89192),
                P = l(30716),
                C = l(79422),
                g = l(27954),
                f = l(3718),
                S = l(60678),
                x = l(99401),
                L = l(26076),
                j = l(10603),
                E = l(97805),
                v = l(6968),
                A = l(50222),
                R = l(22815),
                b = l(52794),
                N = l(44560),
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
        22815: (e, t, l) => {
            'use strict';
            l.d(t, { T: () => i });
            var a,
                o = l(22939);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(a || (a = {}));
            let i = (e, t) => {
                var l, i;
                return e.type === a.ALBUM
                    ? { type: o.K.Album, meta: { id: (null == (i = e.album) ? void 0 : i.id) || 0 }, from: t || '' }
                    : { type: o.K.Playlist, meta: { id: (null == (l = e.playlist) ? void 0 : l.id) || '' }, from: t || '' };
            };
        },
        43137: (e, t, l) => {
            (Promise.resolve().then(l.bind(l, 30871)), Promise.resolve().then(l.bind(l, 224)));
        },
        44560: (e) => {
            e.exports = {
                root: 'CollectionShelfRecentlyPlayedPage_root__1eSLj',
                footer: 'CollectionShelfRecentlyPlayedPage_footer__5pPcU',
                scrollContainer: 'CollectionShelfRecentlyPlayedPage_scrollContainer__2ErJI',
                important: 'CollectionShelfRecentlyPlayedPage_important___ajYP',
                content: 'CollectionShelfRecentlyPlayedPage_content__p4qEp',
                item: 'CollectionShelfRecentlyPlayedPage_item__gQR_c',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8803, 3349, 6749, 6392, 6287, 3472, 2121, 9122, 3112, 6526, 9123, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 6215, 3257, 2038, 4163,
                3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 1808, 8222, 1912, 4475, 5056, 7358,
            ],
            () => e((e.s = 43137)),
        ),
            (_N_E = e.O()));
    },
]);
