(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2995],
    {
        4682: (e, t, l) => {
            'use strict';
            l.d(t, { CollectionShelfRecentlyPlayedPage: () => w });
            var a = l(88800),
                o = l(65724),
                i = l(84961),
                s = l(53548),
                n = l(2058),
                r = l(88969),
                c = l(17392),
                d = l(29993),
                m = l(29504),
                y = l(32596),
                p = l(69630),
                h = l(76843),
                _ = l(46422),
                u = l(44230),
                P = l(37670),
                C = l(6668),
                g = l(72288),
                f = l(98644),
                S = l(54320),
                x = l(86790),
                L = l(60266),
                j = l(93317),
                E = l(93015),
                v = l(79418),
                A = l(71104),
                R = l(95259),
                b = l(40068),
                N = l(31582),
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
        31582: (e) => {
            e.exports = {
                root: 'CollectionShelfRecentlyPlayedPage_root__1eSLj',
                footer: 'CollectionShelfRecentlyPlayedPage_footer__5pPcU',
                scrollContainer: 'CollectionShelfRecentlyPlayedPage_scrollContainer__2ErJI',
                important: 'CollectionShelfRecentlyPlayedPage_important___ajYP',
                content: 'CollectionShelfRecentlyPlayedPage_content__p4qEp',
                item: 'CollectionShelfRecentlyPlayedPage_item__gQR_c',
            };
        },
        70056: (e, t, l) => {
            (Promise.resolve().then(l.bind(l, 57328)), Promise.resolve().then(l.bind(l, 4682)));
        },
        95259: (e, t, l) => {
            'use strict';
            l.d(t, { T: () => i });
            var a,
                o = l(18593);
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
    },
    (e) => {
        (e.O(
            0,
            [
                7435, 8752, 4596, 8380, 5108, 127, 1191, 1931, 7617, 3637, 8735, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 818, 7053, 2655, 763, 2670, 7358,
            ],
            () => e((e.s = 70056)),
        ),
            (_N_E = e.O()));
    },
]);
