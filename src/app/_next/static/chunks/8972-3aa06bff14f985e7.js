(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8972],
    {
        2257: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        3724: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        5935: (e, t, s) => {
            'use strict';
            s.d(t, { SearchEntities: () => O });
            var a = s(54486),
                i = s(50420),
                r = s(28303),
                o = s(61910),
                l = s(43350),
                c = s(15209),
                n = s(63585),
                d = s(77710),
                m = s(76421),
                u = s(84213),
                h = s(8817),
                _ = s(27510),
                x = s(56231),
                S = s(80156),
                p = s(55616),
                C = s(65779),
                j = s(83909),
                A = s(21365),
                b = s(24188),
                P = s(76866),
                y = s(83252),
                k = s(80585),
                v = s(11788);
            let T = {
                entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
            };
            var g = s(9348),
                I = s(77217),
                E = s(98701),
                R = s.n(E);
            let N = (0, r.PA)((e) => {
                let { concert: t } = e,
                    s = (0, o.useRef)(String((0, g.A)())),
                    { experiments: i } = (0, y.Pjs)(),
                    r = i.checkExperiment(y.zal.WebNextConcertsIdentityFullRedesign, 'on') ? I.MU : I.wP;
                return (0, a.jsx)(I.VN, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: R().root,
                    meta: (0, a.jsx)(r, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var B = s(45641),
                f = s.n(B);
            let L = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: r,
                            filter: g,
                            variant: I = 'grid',
                            sendSearchFeedback: E,
                            searchCorrectedText: R,
                            isShimmerVisible: B,
                            getDataByRange: L,
                            requestsCount: O,
                            ...H
                        } = e,
                        { experiments: M } = (0, y.Pjs)(),
                        D = ((e) => (e === m.n.CLIP ? T.clip : e === m.n.CONCERT ? T.concert : T.entity))(g),
                        w = (0, h.c)(() => 56),
                        Y = (0, h.c)(() => D.estimateRowSize),
                        K = (0, y.wZZ)(),
                        U = (() => {
                            let e = (0, o.useRef)(new Map());
                            return (
                                (0, o.useLayoutEffect)(
                                    () => (
                                        e.current.size > 0 && e.current.clear(),
                                        () => {
                                            e.current.clear();
                                        }
                                    ),
                                    [],
                                ),
                                (0, h.c)((t, s) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, s), s)))
                            );
                        })(),
                        { from: X } = (0, y.fyy)({ pageId: y._Q$.SEARCH }),
                        $ = (0, o.useCallback)(
                            (e) => {
                                let t = r[e];
                                if (!t)
                                    return 'list' === I
                                        ? (0, a.jsx)(k.DS, { variant: y.Xjt.PLAYLIST, isActive: !0 })
                                        : g === m.n.CONCERT
                                          ? (0, a.jsx)(k.WO, { isShimmerActive: !0, className: f().concertShimmer })
                                          : g === m.n.ARTIST
                                            ? (0, a.jsx)(k.Vt, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : g === m.n.WAVE
                                              ? M.checkExperiment(y.zal.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, a.jsx)(k.Vt, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, a.jsx)(k.Vt, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : g === m.n.PLAYLIST
                                                ? (0, a.jsx)(k.Vt, { linesCount: 2, isActive: !0 })
                                                : g === m.n.CLIP
                                                  ? (0, a.jsx)(k.Vt, { linesCount: 2, shimmerClassName: f().video, isActive: !0 })
                                                  : (0, a.jsx)(k.Vt, { className: f().entityCardShimmer, isActive: !0, shimmerClassName: g === m.n.CLIP && f().video });
                                switch (t.type) {
                                    case m.n.ALBUM:
                                        return (0, a.jsx)(
                                            y.NYB.Provider,
                                            {
                                                value: U(t.data.id, { sendSearchFeedback: E, id: t.data.id, type: u.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(S.aX, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PLAYLIST:
                                        return (0, a.jsx)(
                                            y.NYB.Provider,
                                            {
                                                value: U(t.data.id, { sendSearchFeedback: E, id: t.data.id, type: u.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(j.B6, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.ARTIST:
                                        return (0, a.jsx)(
                                            y.NYB.Provider,
                                            {
                                                value: U(t.data.id, { sendSearchFeedback: E, id: t.data.id, type: u.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(p.ao, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PODCAST:
                                        return (0, a.jsx)(
                                            y.Bki,
                                            {
                                                objectType: l.ky.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(y.NYB.Provider, {
                                                    value: U(t.data.id, { sendSearchFeedback: E, id: t.data.id, type: u.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, a.jsx)(S.M_, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.CLIP:
                                        return (0, a.jsx)(
                                            y.NYB.Provider,
                                            {
                                                value: U(t.data.clipId, { sendSearchFeedback: E, id: t.data.clipId, type: u.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(C.FC, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case m.n.WAVE:
                                        if (!M.checkExperiment(y.zal.WebNextWaveAgentExperiment, 'on'))
                                            return (0, a.jsx)(
                                                y.NYB.Provider,
                                                {
                                                    value: U(t.data.stationId, {
                                                        sendSearchFeedback: E,
                                                        id: t.data.stationId,
                                                        type: u.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, a.jsx)(P.Zn, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, a.jsx)(
                                            y.NYB.Provider,
                                            {
                                                value: U(t.data.stationId, {
                                                    sendSearchFeedback: E,
                                                    id: t.data.stationId,
                                                    type: u.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, a.jsx)(P.yi, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case m.n.CONCERT:
                                        return (0, a.jsx)(
                                            y.Bki,
                                            {
                                                objectType: l.ky.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(N, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.TRACK:
                                    case m.n.UGC_TRACK:
                                        return (0, a.jsx)(
                                            y.Bki,
                                            {
                                                objectType: l.ky.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(y.NYB.Provider, {
                                                    value: U(t.data.entityId, {
                                                        sendSearchFeedback: E,
                                                        id: t.data.entityId,
                                                        type: u.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, a.jsx)(A.c8, {
                                                        track: t.data,
                                                        playContextParams: K(t.data.entityId, {
                                                            contextData: { type: n.K.Various, meta: { id: t.data.entityId }, from: X, overrideContextType: d.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case m.n.PODCAST_EPISODE:
                                        return (0, a.jsx)(
                                            y.Bki,
                                            {
                                                objectType: l.ky.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(A.c8, {
                                                    track: t.data,
                                                    playContextParams: K(t.data.entityId, {
                                                        contextData: { type: n.K.Various, meta: { id: t.data.entityId }, from: X, overrideContextType: d.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [r, I, g, M, U, E, K, X, O],
                        ),
                        z = (0, _.L)(() => (B ? r.length + v.k : r.length)),
                        V = (0, _.L)(() =>
                            'list' === I
                                ? (0, a.jsx)(b.wj, { count: z, getEstimateRowSize: w, renderItemByIndex: $, onChangeRange: L })
                                : (0, a.jsx)(b.Q$, {
                                      count: z,
                                      rowGap: D.rowGap,
                                      columnGap: D.columnGap,
                                      getEstimateRowSize: Y,
                                      minColumnCount: D.minColumnCount,
                                      minColumnWidth: D.minColumnWidth,
                                      maxColumnWidth: D.maxColumnWidth,
                                      maxColumnCount: D.maxColumnCount,
                                      renderItemByIndex: $,
                                      onChangeRange: L,
                                  }),
                        );
                    return (0, a.jsxs)(x.N, {
                        className: (0, i.$)(f().root, s),
                        containerClassName: f().container,
                        ref: t,
                        ...(0, c.getDataAttrFromProps)(H),
                        children: [
                            (0, a.jsxs)('div', { children: [R && (0, a.jsx)('div', { className: f().correctedTextBlock, children: R }), V] }),
                            (0, a.jsx)(k.A, { children: (0, a.jsx)(k.wi, { className: f().footer }) }),
                        ],
                    });
                }),
                O = (0, o.forwardRef)((e, t) => (0, a.jsx)(L, { forwardRef: t, ...e }));
        },
        9805: (e) => {
            e.exports = {
                root: 'SearchBestResultsShimmer_root__xMCOZ',
                container: 'SearchBestResultsShimmer_container__Je48X',
                entity: 'SearchBestResultsShimmer_entity____sr1',
                important: 'SearchBestResultsShimmer_important__vbFUa',
                cover: 'SearchBestResultsShimmer_cover__rzY5m',
                meta: 'SearchBestResultsShimmer_meta__GlLPe',
                title: 'SearchBestResultsShimmer_title__AXYX8',
                subtitle: 'SearchBestResultsShimmer_subtitle__IULSY',
            };
        },
        10212: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        11788: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => i, k: () => a });
            let a = 36,
                i = 2e3;
        },
        12200: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => h });
            var a = s(54486),
                i = s(43350),
                r = s(76421),
                o = s(84213),
                l = s(80156),
                c = s(55616),
                n = s(83909),
                d = s(21365),
                m = s(76866),
                u = s(83252);
            let h = (e) => {
                let { item: t, index: s, pageId: h, sendSearchFeedback: _, blockPosition: x = 0, objectPosX: S, objectPosY: p, objectsCount: C } = e;
                switch (t.type) {
                    case r.n.PODCAST_EPISODE:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.PodcastEpisode,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(d.c8, { pageId: h, track: t.data }),
                            },
                            t.data.id,
                        );
                    case r.n.UGC_TRACK:
                        return (0, a.jsx)(d.c8, { pageId: h, track: t.data });
                    case r.n.TRACK:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Track,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(u.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.entityId, type: o.o.TRACK, blockPosition: x, position: s },
                                    children: (0, a.jsx)(d.c8, { pageId: h, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.ARTIST:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Artist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(u.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.id, type: o.o.ARTIST, blockPosition: x, position: s },
                                    children: (0, a.jsx)(c.cz, { pageId: h, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PLAYLIST:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Playlist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(u.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.id, type: o.o.PLAYLIST, blockPosition: x, position: s },
                                    children: (0, a.jsx)(n.vf, { pageId: h, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PODCAST:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(
                                    u.NYB.Provider,
                                    {
                                        value: { sendSearchFeedback: _, id: t.data.id, type: o.o.PODCAST, blockPosition: x, position: s },
                                        children: (0, a.jsx)(l.M_, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case r.n.ALBUM:
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Album,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(
                                    u.NYB.Provider,
                                    {
                                        value: { sendSearchFeedback: _, id: t.data.id, type: o.o.ALBUM, blockPosition: x, position: s },
                                        children: (0, a.jsx)(l.M_, { pageId: h, album: t.data }),
                                    },
                                    t.data.id,
                                ),
                            },
                            t.data.id,
                        );
                    case r.n.WAVE: {
                        let e = t.data;
                        return (0, a.jsx)(
                            u.Bki,
                            {
                                objectType: i.ky.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(u.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: e.seedsId, type: o.o.WAVE, blockPosition: x, position: s },
                                    children: (0, a.jsx)(m.H2, { vibe: e, cover: e.cover, description: e.description, agentVariant: m.hl.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        17820: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        22782: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        24112: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        30909: (e, t, s) => {
            'use strict';
            s.d(t, { SearchPage: () => f });
            var a = s(54486),
                i = s(50420),
                r = s(28303),
                o = s(97396),
                l = s(61910),
                c = s(43426),
                n = s(43350),
                d = s(31500),
                m = s(34291),
                u = s(76421),
                h = s(6024),
                _ = s(8817),
                x = s(27510),
                S = s(79021),
                p = s(51321),
                C = s(31710),
                j = s(83252),
                A = s(80585),
                b = s(54830);
            let P = Math.floor(C.T_ / 3);
            var y = s(40162),
                k = s.n(y),
                v = s(67648),
                T = s(56231),
                g = s(6664),
                I = s(81531),
                E = s(82644),
                R = s(33276);
            let N = (0, r.PA)((e) => {
                    let { searchResults: t, setContentScrollRef: s, contentScrollRef: r, hasSearchText: o } = e,
                        {
                            user: c,
                            search: n,
                            settings: { isMobile: m },
                        } = (0, j.Pjs)(),
                        [u, h] = (0, v.d)();
                    return o
                        ? t
                        : c.isAuthorized
                          ? (0, a.jsx)(R.hO, {
                                scrollElement: r,
                                headerElement: u,
                                children: (0, a.jsxs)(T.N, {
                                    className: k().scrollableContent,
                                    containerClassName: k().main,
                                    ref: s,
                                    ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_CONTENT),
                                    children: [
                                        (0, a.jsx)(g.EA, {
                                            containerClassName: k().skeletonContainer,
                                            stickyHeaderClassName: (0, i.$)(k().skeletonStickyHeader, k().important),
                                            stickyHeaderTabIndex: m ? null : 0,
                                            headerConcealerComponent: (0, a.jsx)('div', { ref: h }),
                                            landing: n.landing,
                                            errorComponent: (0, a.jsx)(E.w, { className: k().error, withBackwardControl: !1 }),
                                            headerVariant: m ? A.Vw.COMPOSITE : A.Vw.STICKY,
                                        }),
                                        (0, a.jsx)(A.A, { children: (0, a.jsx)(A.wi, { className: k().footer }) }),
                                    ],
                                }),
                            })
                          : (0, a.jsxs)(T.N, {
                                className: k().scrollableContent,
                                containerClassName: k().main,
                                ref: s,
                                children: [
                                    (0, a.jsx)(l.Suspense, {
                                        children: (0, a.jsx)(j.FoH, {
                                            blockId: j.hf$.SEARCH_HISTORY,
                                            blockType: j.hf$.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: j.hf$.SEARCH_HISTORY,
                                            objectsCount: n.historyPage.items.length,
                                            children: (0, a.jsx)(C._K, {}),
                                        }),
                                    }),
                                    (0, a.jsx)(l.Suspense, { children: (0, a.jsx)(I.Z_, { className: k().mixes }) }),
                                    (0, a.jsx)(A.A, { children: (0, a.jsx)(A.wi, { className: k().footer }) }),
                                ],
                            });
                }),
                B = 'text',
                f = (0, r.PA)(() => {
                    let e = (0, p.useTabsState)(0),
                        [t, s] = (0, l.useState)(m.$.TOP),
                        [r, y] = (0, l.useState)(!1),
                        { formatMessage: v } = (0, c.A)(),
                        { search: T, experiments: g, location: I, user: E } = (0, j.Pjs)(),
                        { contentScrollRef: R, setContentScrollRef: f } = (0, j.gKY)(),
                        L = ((e) => {
                            let { formatMessage: t } = (0, c.A)(),
                                s = (0, b.df)(),
                                { experiments: a } = (0, j.Pjs)(),
                                i = a.checkExperiment(j.zal.WebNextSearchConcerts, 'on') && !a.checkExperiment(j.zal.disableAllConcerts, 'on');
                            return e
                                ? [{ id: m.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== m.$.CLIP || s) && (e.id !== m.$.CONCERT || i)) return e;
                                  })
                                : [{ id: m.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(T.filters),
                        O = (0, j.XJ9)(),
                        [H, M] = (0, l.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(I.searchParams).get(B)) ? e : '');
                        }),
                        D = (0, l.useRef)(H),
                        w = H.length > 0;
                    g.checkExperiment(j.zal.WebNextDisableSearch, 'on') && (0, o.redirect)(j.Zyd.main.href),
                        (0, j.Jzs)(T.landing.loadingState === j.GuX.RESOLVE),
                        (0, l.useEffect)(
                            () => () => {
                                T.reset(), E.isAuthorized && T.landing.reset();
                            },
                            [E.isAuthorized, g, T],
                        );
                    let Y = (0, _.c)((e, t) => {
                            T.resetResults(), 0 !== e.length && T.getSearchResults({ text: decodeURIComponent(e), filter: t });
                        }),
                        K = (0, _.c)(() => {
                            y(!0);
                        }),
                        U = (0, _.c)((t) => {
                            var a, i;
                            if (!e.onTabChange || t === e.value) return;
                            e.onTabChange(t);
                            let r = null != (i = null == (a = L[t]) ? void 0 : a.id) ? i : m.$.TOP;
                            Object.values(m.$).includes(r) && (s(r), Y(D.current, r)), R && (R.scrollTop = 0);
                        }),
                        X = (0, _.c)((t) => {
                            let s = t.trim(),
                                a = encodeURIComponent(s);
                            M(a), (D.current = a), 0 !== e.value && U(0), Y(a, m.$.TOP), T.history.setShouldUpdateHistory(!0), T.resetSearchCorrectedText(), y(!1);
                            let i = new URL(window.location.href);
                            i.searchParams.set(B, s), O(String(i));
                        }),
                        $ = (0, _.c)((e) => {
                            var t, s;
                            let { id: a, type: i, blockPosition: r, position: o, feedbackType: l } = e;
                            T.sendFeedback({
                                blockType: i,
                                entityId: ''.concat(i, ':').concat(a),
                                timestamp: new Date().toISOString(),
                                searchRequestId: T.searchRequestId,
                                query: D.current,
                                clickType: l,
                                blockPosition: r,
                                position: o,
                                page: null != (s = null == (t = T.pagesLoader.pager) ? void 0 : t.page) ? s : 0,
                            });
                        }),
                        z = ((e) => {
                            let { search: t, searchText: s, searchFilter: a } = e;
                            return (0, l.useCallback)(
                                function (e) {
                                    var i, r;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        l = t.pagesLoader.pager;
                                    if (!l) return;
                                    let c = Math.ceil(l.total / l.perPage),
                                        n = null != (r = null == (i = t.pagesLoader.items) ? void 0 : i.length) ? r : 0,
                                        d = e.endIndex * o;
                                    if (n > 0 && d >= n - P) {
                                        let e = Math.ceil(n / l.perPage);
                                        for (let i = e; i < c; i++)
                                            if (t.pagesLoader.isPageNeedToLoad(i)) {
                                                t.getSearchResults({ text: decodeURIComponent(s), filter: a, page: i });
                                                break;
                                            }
                                    }
                                },
                                [t, s, a],
                            );
                        })({ search: T, searchText: D.current, searchFilter: t }),
                        V = (0, l.useMemo)(
                            () => (T.searchCorrectedText ? (0, a.jsx)(C.tn, { searchCorrectedText: T.searchCorrectedText, onCorrectText: K }) : null),
                            [K, T.searchCorrectedText],
                        ),
                        G = (0, x.L)(() => {
                            var e, s, i, r, o;
                            if (T.isEmpty) return (0, a.jsx)(C.qz, { searchCorrectedText: V });
                            let l = {
                                className: k().searchResults,
                                isShimmerVisible: T.isShimmerVisible,
                                isShimmerActive: T.isLoading,
                                results: null != (e = T.pagesLoader.items) ? e : [],
                                requestsCount: T.pagesLoader.requestsCount,
                                bestResults: T.bestResults,
                                sendSearchFeedback: $,
                                searchCorrectedText: V,
                                getDataByRange: z,
                                ref: f,
                            };
                            switch (t) {
                                case m.$.TOP:
                                    return (0, a.jsx)(C.kp, { ...l, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_TOP) });
                                case m.$.TRACK:
                                    return (0, a.jsx)(j.hjC, {
                                        tabId: t,
                                        tabPos: T.filterPosition(t),
                                        isTabSelectedByDefault: !1,
                                        children: (0, a.jsx)(j.FoH, {
                                            blockId: j.UfI.SEARCH,
                                            blockType: n.LA.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (s = T.pagesLoader.items) ? void 0 : s.length,
                                            children: (0, a.jsx)(C.Yi, { ...l, filter: t, variant: 'list', ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_TRACK) }),
                                        }),
                                    });
                                case m.$.ALBUM:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: u.n.ALBUM, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_ALBUM) });
                                case m.$.PLAYLIST:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: u.n.PLAYLIST, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST) });
                                case m.$.ARTIST:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: u.n.ARTIST, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_ARTIST) });
                                case m.$.PODCAST:
                                    return (0, a.jsx)(j.hjC, {
                                        tabId: t,
                                        tabPos: T.filterPosition(t),
                                        isTabSelectedByDefault: !1,
                                        children: (0, a.jsx)(j.FoH, {
                                            blockId: j.UfI.SEARCH,
                                            blockType: n.LA.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (i = T.pagesLoader.items) ? void 0 : i.length,
                                            children: (0, a.jsx)(C.Yi, {
                                                ...l,
                                                filter: u.n.PODCAST,
                                                variant: 'list',
                                                ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_PODCAST),
                                            }),
                                        }),
                                    });
                                case m.$.BOOK:
                                    return (0, a.jsx)(j.hjC, {
                                        tabId: t,
                                        tabPos: T.filterPosition(t),
                                        isTabSelectedByDefault: !1,
                                        children: (0, a.jsx)(j.FoH, {
                                            blockId: j.UfI.SEARCH,
                                            blockType: n.LA.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (r = T.pagesLoader.items) ? void 0 : r.length,
                                            children: (0, a.jsx)(C.Yi, { ...l, filter: u.n.BOOK, variant: 'list', ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_BOOK) }),
                                        }),
                                    });
                                case m.$.CLIP:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: u.n.CLIP, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_CLIP) });
                                case m.$.WAVES:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: u.n.WAVE, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_WAVES) });
                                case m.$.CONCERT:
                                    return (0, a.jsx)(j.hjC, {
                                        tabId: t,
                                        tabPos: T.filterPosition(t),
                                        isTabSelectedByDefault: !1,
                                        children: (0, a.jsx)(j.FoH, {
                                            blockId: j.UfI.SEARCH,
                                            blockType: n.LA.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: null == (o = T.pagesLoader.items) ? void 0 : o.length,
                                            children: (0, a.jsx)(C.Yi, { ...l, filter: u.n.CONCERT }),
                                        }),
                                    });
                                default:
                                    return V;
                            }
                        }),
                        W = (0, l.useMemo)(() => {
                            if (w)
                                return (0, a.jsx)(A.FY, {
                                    className: k().carousel,
                                    carouselElement: (0, a.jsx)(A.wI, {
                                        className: k().tabs,
                                        ...e,
                                        onTabChange: U,
                                        children: L.map((t, s) =>
                                            (0, a.jsx)(A.oz, { className: (0, i.$)(k().tab, { [k().tab_selected]: s === e.value }), title: t.displayName, value: s }, s),
                                        ),
                                    }),
                                });
                        }, [L, U, e, w]);
                    return (
                        T.isNeededToLoad && w && (0, l.use)(T.getSearchResults({ text: decodeURIComponent(H), filter: t })),
                        E.isAuthorized &&
                            T.landing.isNeededToLoad &&
                            !w &&
                            (0, l.use)(T.landing.getSkeleton({ id: h.p.SEARCH, showWizard: E.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, a.jsx)(j.nVz, {
                            pageId: j._Q$.SEARCH,
                            children: (0, a.jsxs)('div', {
                                className: (0, i.$)(k().root, { [k().root_showFilters]: w }),
                                ...(0, d.Am)(d.Xk.search.SEARCH_PAGE),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: k().header,
                                        ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_HEADER_CONTAINER),
                                        children: [
                                            (0, a.jsx)(S.D, {
                                                className: k().input,
                                                autoFocus: !0,
                                                initialValue: D.current,
                                                placeholder: v({ id: 'search.input-placeholder' }),
                                                onChange: X,
                                                resetButtonAriaLabel: v({ id: 'interface-actions.reset-search-input' }),
                                                correctedValue: r ? T.searchCorrectedText : null,
                                                innerInputProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT),
                                                resetButtonProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON),
                                                searchIconProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON),
                                            }),
                                            W,
                                        ],
                                    }),
                                    (0, a.jsx)('div', {
                                        className: k().content,
                                        children: (0, a.jsx)(j.jPc, {
                                            children: (0, a.jsx)(N, { hasSearchText: w, contentScrollRef: R, setContentScrollRef: f, searchResults: G }),
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        31710: (e, t, s) => {
            'use strict';
            s.d(t, {
                T: () => a.T,
                T_: () => a.k,
                xo: () => X,
                tn: () => $.SearchCorrectedText,
                qz: () => z.SearchEmpty,
                Yi: () => V.SearchEntities,
                k1: () => l,
                _K: () => G.SearchHistoryBlock,
                jU: () => I,
                kp: () => W.SearchMixed,
                Gw: () => i.G,
                t9: () => r.useClearHistory,
            });
            var a = s(11788),
                i = s(12200),
                r = s(96125),
                o = s(93064);
            let l = o.gK.model('SearchFilter', { id: o.gK.string, displayName: o.gK.string });
            var c = s(76421),
                n = s(51427),
                d = s(80156),
                m = s(65779),
                u = s(985),
                h = s(83909),
                _ = s(21365),
                x = s(63695),
                S = s(77217),
                p = s(76866);
            let C = o.gK.model('SearchAlbum', { type: o.gK.literal(c.n.ALBUM), data: d.JC }),
                j = o.gK.model('SearchPlaylist', { type: o.gK.literal(c.n.PLAYLIST), data: h.IP }),
                A = o.gK.model('SearchArtist', { type: o.gK.literal(c.n.ARTIST), data: x.PK }),
                b = o.gK.model('SearchUgcTrack', { type: o.gK.literal(c.n.UGC_TRACK), data: _.kK }),
                P = o.gK.model('SearchTrack', { type: o.gK.literal(c.n.TRACK), data: _.vj }),
                y = o.gK.model('SearchVibe', { type: o.gK.literal(c.n.WAVE), data: p.Gh }),
                k = o.gK.model('SearchPodcast', { type: o.gK.literal(c.n.PODCAST), data: d.JC }),
                v = o.gK.model('SearchPodcastEpisode', { type: o.gK.literal(c.n.PODCAST_EPISODE), data: _.vj }),
                T = o.gK.model('SearchClip', { type: o.gK.literal(c.n.CLIP), data: m.kv }),
                g = o.gK.model('SearchConcert', { type: o.gK.literal(c.n.CONCERT), data: S.aR }),
                I = o.gK.union(C, j, A, P, b, y, k, v, T, g),
                E = o.gK.model('SearchBestVibe', { type: o.gK.literal(n.r.WAVE), data: p.Gh }),
                R = o.gK.model('SearchBestPlaylist', { type: o.gK.literal(n.r.PLAYLIST), data: h.IP }),
                N = o.gK.model('SearchBestArtist', { type: o.gK.literal(n.r.ARTIST), data: x.PK }),
                B = o.gK.model('SearchBestPresave', { type: o.gK.literal(n.r.UPCOMING), data: d.VH }),
                f = o.gK.model('SearchBestAlbum', { type: o.gK.literal(n.r.ALBUM), data: d.JC }),
                L = o.gK.model('SearchBestRecentRelease', { type: o.gK.literal(n.r.RECENT_RELEASE), data: d.JC }),
                O = o.gK.model('SearchBestConcert', { type: o.gK.literal(n.r.CONCERT), data: S.aR }),
                H = o.gK.model('SearchBestTrack', { type: o.gK.literal(n.r.TRACK), data: _.vj }),
                M = o.gK.model('SearchBestPodcast', { type: o.gK.literal(n.r.PODCAST), data: d.JC }),
                D = o.gK.model('SearchBestPodcastEpisode', { type: o.gK.literal(n.r.PODCAST_EPISODE), data: _.vj }),
                w = o.gK.model('SearchBestOverview', { type: o.gK.literal(n.r.OVERVIEW), data: u.kv }),
                Y = o.gK.model('SearchBestNonMusic', { type: o.gK.literal(n.r.NON_MUSIC), data: d.JC }),
                K = o.gK.model('SearchBestClip', { type: o.gK.literal(n.r.CLIP), data: m.kv }),
                U = o.gK.model('SearchBestBookChapter', { type: o.gK.literal(n.r.BOOK_CHAPTER), data: _.vj }),
                X = o.gK.union(f, L, E, N, O, H, M, D, w, Y, B, R, K, U);
            var $ = s(98045),
                z = s(83681),
                V = s(5935),
                G = s(55269),
                W = s(37536);
        },
        32271: (e, t, s) => {
            'use strict';
            s.d(t, { Mixes: () => x });
            var a = s(54486),
                i = s(28303),
                r = s(61910),
                o = s(83252),
                l = s(43426),
                c = s(81203),
                n = s(27906),
                d = s(80585),
                m = s(38598),
                u = s.n(m);
            let h = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, mixes: i } = e,
                    { formatMessage: m } = (0, l.A)(),
                    h = (0, r.useMemo)(
                        () =>
                            t
                                ? (0, d.km)({ isActive: s, withInfo: !1 })
                                : i.map((e) =>
                                      (0, a.jsx)(
                                          n.NZ,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [s, t, i],
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.Tw, { className: u().carouselHeader, title: m({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: o.Zyd.mixes.href }),
                        (0, a.jsx)(c.Carousel, { className: u().carouselBlock, itemClassName: u().mixItem, children: h }),
                    ],
                });
            });
            var _ = s(72344);
            let x = (0, i.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: s },
                        search: i,
                    } = (0, o.Pjs)();
                return (i.mixes.loadingState === o.GuX.IDLE && (0, r.use)(i.mixes.getMixes(!1)), s)
                    ? (0, a.jsx)(h, { isShimmerVisible: i.mixes.isLoading || i.mixes.isRejected, isShimmerActive: i.mixes.isLoading, mixes: i.mixes.items })
                    : (0, a.jsx)(_.MixesGrid, {
                          isShimmerVisible: i.mixes.isLoading || i.mixes.isRejected,
                          isShimmerActive: i.mixes.isLoading,
                          mixes: i.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
        },
        32606: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        34291: (e, t, s) => {
            'use strict';
            var a;
            s.d(t, { $: () => a }),
                (function (e) {
                    (e.TOP = 'top'),
                        (e.TRACK = 'track'),
                        (e.CLIP = 'clip'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.KIDS_MUSIC = 'kids-music'),
                        (e.KIDS_PLAYLIST = 'kids-playlist'),
                        (e.SPOKEN_PLAYLIST = 'spoken-playlist'),
                        (e.PODCAST = 'podcast'),
                        (e.BOOK = 'book'),
                        (e.KIDS_PODCAST = 'kids-podcast'),
                        (e.KIDS_BOOK = 'kids-book'),
                        (e.WAVES = 'waves'),
                        (e.CONCERT = 'concert');
                })(a || (a = {}));
        },
        35183: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryNotFoundPage: () => o });
            var a = s(54486),
                i = s(28303),
                r = s(42421);
            let o = (0, i.PA)(() => (0, a.jsx)(r.M, {}));
        },
        35461: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        37536: (e, t, s) => {
            'use strict';
            s.d(t, { SearchMixed: () => eD });
            var a = s(54486),
                i = s(50420),
                r = s(61910),
                o = s(43426),
                l = s(15209),
                c = s(31500),
                n = s(76421),
                d = s(51427),
                m = s(34291),
                u = s(56231),
                h = s(83252),
                _ = s(80585),
                x = s(12200),
                S = s(41560),
                p = s(28303),
                C = s(43350),
                j = s(84213),
                A = s(9805),
                b = s.n(A);
            let P = (e) => {
                let { isShimmerActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: b().root,
                    children: [
                        (0, a.jsxs)('div', {
                            className: b().container,
                            children: [
                                (0, a.jsx)(_.Vt, {
                                    className: (0, i.$)(b().entity, b().important),
                                    shimmerClassName: (0, i.$)(b().cover, b().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, a.jsxs)('div', {
                                    className: b().meta,
                                    children: [
                                        (0, a.jsx)(_.nN, { textClassName: (0, i.$)(b().title, b().important), isActive: t }),
                                        (0, a.jsx)(_.nN, { textClassName: (0, i.$)(b().subtitle, b().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)('div', {
                            className: b().container,
                            children: [
                                (0, a.jsx)(_.Vt, {
                                    className: (0, i.$)(b().entity, b().important),
                                    shimmerClassName: (0, i.$)(b().cover, b().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, a.jsxs)('div', {
                                    className: b().meta,
                                    children: [
                                        (0, a.jsx)(_.nN, { textClassName: (0, i.$)(b().title, b().important), isActive: t }),
                                        (0, a.jsx)(_.nN, { textClassName: (0, i.$)(b().subtitle, b().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var y = s(82957),
                k = s.n(y),
                v = s(80156),
                T = s(40334),
                g = s.n(T),
                I = s(3724),
                E = s.n(I);
            let R = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, { album: t, className: (0, i.$)(g().block, E().root), coverClassName: g().cover, playButtonIconSize: 'l', likeIconSize: 'xs' });
            });
            var N = s(55616),
                B = s(32606),
                f = s.n(B);
            let L = (0, p.PA)((e) => {
                let { artist: t } = e;
                return (0, a.jsx)(N.cz, {
                    artist: t,
                    className: (0, i.$)(g().block, f().root),
                    coverClassName: g().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: h._Q$.SEARCH,
                });
            });
            var O = s(63585),
                H = s(27510),
                M = s(97800),
                D = s(21365),
                w = s(63695),
                Y = s(81268),
                K = s.n(Y);
            let U = (0, p.PA)((e) => {
                var t;
                let { track: s } = e,
                    { from: l } = (0, h.fyy)(),
                    { formatMessage: c } = (0, o.A)(),
                    n = { contextData: { type: O.K.Various, meta: { id: s.entityId }, from: l }, queueParams: { index: 0, entityId: s.id }, loadContextMeta: !0 },
                    d = (0, h.Dx4)({ playContextParams: n, entityId: s.entityId }),
                    m = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: (0, i.$)(g().cover, K().cover),
                                alt: c({ id: 'entity-names.track-name-by-type' }, { type: (0, h.yDn)(s.type), name: s.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [c, s.coverUri, s.isAvailable, s.isDisliked, s.title, s.type],
                    ),
                    u = (0, D.O6)({ track: s, entityType: h.nPY.AUDIOBOOK }),
                    x = (0, H.L)(() =>
                        s.url && s.isAvailable
                            ? (0, a.jsx)(_.N_, { className: (0, i.$)(_.$f.text, _.$f.titleLink), href: s.url, onClick: u, children: s.title })
                            : (0, a.jsx)(M.Caption, { className: (0, i.$)(_.$f.text, _.$f.titleText), size: 'm', variant: 'div', type: 'text', children: s.title }),
                    ),
                    S = (0, r.useCallback)(
                        (e, t) => {
                            var i;
                            return (null == (i = s.artists) ? void 0 : i.length)
                                ? (0, a.jsx)(w.iQ, { linkClassName: e, captionClassName: t, artists: s.artists, lineClamp: 1, withLink: s.isAvailable })
                                : null;
                        },
                        [s.artists, s.isAvailable],
                    );
                return (0, a.jsx)(D.CC, {
                    className: (0, i.$)(g().block, K().root, _.$f.root, { [_.$f.root_disabled]: !s.isAvailable }),
                    track: s,
                    meta: (0, a.jsx)(_.ro, {
                        isDisabled: !s.isAvailable,
                        version: s.version,
                        title: x,
                        artistsComponent: S,
                        getDescriptionTexts: s.getDescriptionTexts,
                        explicitMarkVariant: s.explicitDisclaimer,
                        releaseYear: (null == (t = s.mainAlbum) ? void 0 : t.isNonMusic) ? s.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: m,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(D.QD, { track: s, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var X = s(9348),
                $ = s(65779),
                z = s(54830),
                V = s(78508),
                G = s.n(V);
            let W = (0, p.PA)((e) => {
                let { clip: t } = e,
                    s = (0, z.df)(),
                    i = (0, r.useRef)(String((0, X.A)()));
                return s
                    ? (0, a.jsx)($.Nk, {
                          clip: t,
                          viewUuid: i.current,
                          className: g().block,
                          coverClassName: G().cover,
                          playButtonIconSize: 'l',
                          likeIconSize: 'xs',
                          shouldShowTimecode: !0,
                      })
                    : null;
            });
            var F = s(77217),
                Q = s(17820),
                Z = s.n(Q);
            let q = (0, p.PA)((e) => {
                let { concert: t } = e,
                    s = (0, r.useRef)(String((0, X.A)())),
                    { experiments: i } = (0, h.Pjs)(),
                    o = i.checkExperiment(h.zal.WebNextConcertsIdentityFullRedesign, 'on') ? F.MU : F.ub;
                return (0, a.jsx)(F.VN, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: Z().root,
                    meta: (0, a.jsx)(o, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var J = s(49692),
                ee = s.n(J);
            let et = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, {
                    album: t,
                    className: (0, i.$)(g().block, ee().root),
                    coverClassName: g().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var es = s(985),
                ea = s(22782),
                ei = s.n(ea);
            let er = (0, p.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: s } = (0, o.A)();
                return (0, a.jsx)('div', {
                    className: ei().root,
                    children: (0, a.jsx)(es.Fn, { textButton: s({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, i.$)(ei().button, ei().important) }),
                });
            });
            var eo = s(83909),
                el = s(90060),
                ec = s.n(el);
            let en = (0, p.PA)((e) => {
                let { playlist: t } = e;
                return (0, a.jsx)(eo.vf, {
                    playlist: t,
                    className: (0, i.$)(g().block, ec().root),
                    coverClassName: g().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var ed = s(59214),
                em = s.n(ed);
            let eu = (0, p.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, h.fyy)(),
                    { formatMessage: l } = (0, o.A)(),
                    {
                        settings: { isMobile: n },
                    } = (0, h.Pjs)(),
                    d = { contextData: { type: O.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    m = (0, h.Dx4)({ playContextParams: d, entityId: t.entityId }),
                    u = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, i.$)(g().cover, em().cover),
                                alt: l({ id: 'entity-names.track-name-by-type' }, { type: (0, h.yDn)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [l, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, a.jsx)(D.CC, {
                    className: (0, i.$)(g().block, em().root),
                    track: t,
                    meta: (0, a.jsx)(D.wo, {
                        podcastMetaClassName: (0, i.$)(em().podcastMeta, em().important),
                        titleContainerClassName: (0, i.$)(em().titleContainer, em().important),
                        textClassName: (0, i.$)(em().text, em().important),
                        progressClassName: (0, i.$)(em().progress, em().important),
                        track: t,
                        playContextParams: d,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !n,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(D.QD, { track: t, utmLink: d.contextData.utmLink, likeIconSize: 'xs' }),
                    ...m,
                    ...(0, c.Am)(c.Kq.track.TRACK_PODCAST),
                });
            });
            var eh = s(47713),
                e_ = s(24112),
                ex = s.n(e_);
            let eS = (0, p.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(v.M_, {
                    album: t,
                    className: (0, i.$)(g().block, ex().root),
                    coverClassName: g().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, a.jsx)(eh.A, { id: 'entity-names.recently-release' }),
                });
            });
            var ep = s(66332),
                eC = s.n(ep);
            let ej = (0, p.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, h.fyy)(),
                    {
                        settings: { isMobile: o },
                    } = (0, h.Pjs)(),
                    l = { contextData: { type: O.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    n = (0, h.Dx4)({ playContextParams: l, entityId: t.entityId }),
                    d = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(_.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, i.$)(g().cover, eC().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, a.jsx)(D.CC, {
                    className: (0, i.$)(g().block, eC().root),
                    track: t,
                    meta: (0, a.jsx)(D.j7, { withArtistLink: !o, track: t }),
                    playButtonCellRender: d,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(D.QD, { track: t, utmLink: l.contextData.utmLink, likeIconSize: 'xs' }),
                    ...n,
                    ...(0, c.Am)(c.Kq.track.SEARCH_TRACK_CARD),
                });
            });
            var eA = s(5956),
                eb = s(6971),
                eP = s(46423),
                ey = s(10212),
                ek = s.n(ey);
            let ev = (0, p.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: s, intersectionPropertyId: l } = (0, h.nMI)(),
                    { user: c } = (0, h.Pjs)(),
                    { formatMessage: n, formatDate: d } = (0, o.A)(),
                    m = (0, eP.PL)(t),
                    u = (0, H.L)(() => {
                        let e = n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            s = t.isPresave ? n({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(s);
                    }),
                    x = (0, r.useCallback)(
                        (e, s) => {
                            var i;
                            return (null == (i = t.artists) ? void 0 : i.length)
                                ? (0, a.jsx)(w.iQ, { linkClassName: e, captionClassName: s, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, a.jsxs)(_.Cj, {
                    ref: s,
                    'data-intersection-property-id': l,
                    className: (0, i.$)(g().block, _.$f.root, ek().root, ek().important),
                    'aria-label': u,
                    children: [
                        (0, a.jsxs)(eb.Paper, {
                            className: ek().cover,
                            radius: 'xs',
                            children: [
                                (0, a.jsx)(_.BW, {
                                    className: ek().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, a.jsx)(eA.Icon, { className: ek().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, a.jsx)(_.ro, {
                            title: (0, a.jsx)(M.Caption, { className: (0, i.$)(_.$f.text, _.$f.titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, a.jsx)(M.Caption, {
                                className: ek().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, a.jsx)(eh.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, h.sDH)()) } }),
                            }),
                            artistsComponent: x,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, a.jsx)(_.aQ, {
                            fallback: (0, a.jsx)(_.cy, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: ek().likeButton,
                                isLiked: t.isPresave,
                                onClick: m,
                                disabled: !c.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var eT = s(93064),
                eg = s(76866),
                eI = s(89016),
                eE = s.n(eI);
            let eR = (0, p.PA)((e) => {
                    var t;
                    let { vibe: s } = e;
                    return (0, a.jsx)(eg.H2, {
                        className: (0, i.$)(eE().root, eE().important),
                        coverClassName: (0, i.$)(eE().coverClassName, eE().important),
                        playButtonIconSize: 'l',
                        vibe: s,
                        cover: (0, eT.wg)({ uri: s.backgroundImageUrl, color: null == (t = s.colors) ? void 0 : t.average }),
                        description: s.description,
                        agentVariant: eg.hl.LARGE,
                    });
                }),
                eN = (0, p.PA)((e) => {
                    let { results: t, isShimmerVisible: s, isShimmerActive: l, blockPosition: n, sendSearchFeedback: m } = e,
                        { formatMessage: u } = (0, o.A)(),
                        { experiments: _ } = (0, h.Pjs)(),
                        x = _.checkExperiment(h.zal.disableAllConcerts, 'on'),
                        S = (0, r.useCallback)(
                            (e, s) => {
                                switch (e.type) {
                                    case d.r.ALBUM:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.id, type: j.o.ALBUM, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(R, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PLAYLIST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.id, type: j.o.PLAYLIST, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(en, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.RECENT_RELEASE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.id, type: j.o.ALBUM, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(eS, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.WAVE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.seedsId, type: j.o.WAVE, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(eR, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case d.r.ARTIST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Artist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.id, type: j.o.ARTIST, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(L, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.UPCOMING:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(ev, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.CONCERT:
                                        if (x) return null;
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Concert,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(q, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PODCAST:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.id, type: j.o.ALBUM, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(et, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.NON_MUSIC:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(et, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.PODCAST_EPISODE:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(eu, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.OVERVIEW:
                                        return (0, a.jsx)(er, { data: e.data }, e.type);
                                    case d.r.TRACK:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Track,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.entityId, type: j.o.TRACK, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(ej, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case d.r.CLIP:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(h.NYB.Provider, {
                                                    value: { sendSearchFeedback: m, id: e.data.clipId, type: j.o.CLIP, blockPosition: n, position: s },
                                                    children: (0, a.jsx)(W, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case d.r.BOOK_CHAPTER:
                                        return (0, a.jsx)(
                                            h.Bki,
                                            {
                                                objectType: C.ky.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(U, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [n, x, t.length, m],
                        ),
                        p = (0, r.useMemo)(() => t.map((e, t) => S(e, t)).filter((e) => (0, r.isValidElement)(e)), [S, t, t.length]);
                    return s
                        ? (0, a.jsx)(P, { isShimmerActive: l })
                        : p.length
                          ? (0, a.jsx)(h.FoH, {
                                blockId: h.hf$.SEARCH_BEST_RESULTS,
                                blockType: h.hf$.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: p.length,
                                children: (0, a.jsx)('div', {
                                    className: (0, i.$)(k().root, { [k().root_withSingleResult]: 1 === p.length }),
                                    role: 'group',
                                    'aria-label': u({ id: 'search-results.best' }),
                                    ...(0, c.Am)(c.e8.search.SEARCH_BEST_RESULTS),
                                    children: p,
                                }),
                            })
                          : null;
                });
            var eB = s(77710);
            let ef = (0, p.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: s = [],
                            title: i,
                            sendSearchFeedback: r,
                            blockPosition: o = 0,
                            containerClassName: c,
                            headerClassName: d,
                            className: m,
                            itemClassName: u,
                            isShimmerVisible: x,
                            isShimmerActive: S,
                            isClipBlock: p,
                            ...C
                        } = e,
                        { search: A } = (0, h.Pjs)(),
                        b = (0, z.df)(),
                        P = s.filter((e) => e.type !== n.n.PODCAST_EPISODE);
                    return (A.isResolved && 0 === P.length) || (p && !b)
                        ? null
                        : (0, a.jsx)(_.OY, {
                              isShimmerVisible: x,
                              isShimmerActive: S,
                              className: m,
                              containerClassName: c,
                              headerClassName: d,
                              showHeaderShimmer: !0,
                              title: i,
                              ref: t,
                              ...(0, l.getDataAttrFromProps)(C),
                              itemClassName: u,
                              children: P.map((e, t) => {
                                  switch (e.type) {
                                      case n.n.ALBUM:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: j.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(v.aX, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.ARTIST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: j.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(N.ao, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.PLAYLIST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: j.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(eo.B6, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case n.n.UGC_TRACK:
                                      case n.n.TRACK:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: r,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: j.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(D.wO, { track: e.data, overrideContextType: eB.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.CLIP:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.clipId, type: j.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, a.jsx)($.FC, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case n.n.PODCAST:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: j.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(v.aX, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case n.n.WAVE:
                                          return (0, a.jsx)(
                                              h.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.stationId, type: j.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, a.jsx)(eg.H2, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: eg.hl.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                eL = (0, r.forwardRef)((e, t) => (0, a.jsx)(ef, { forwardRef: t, ...e }));
            var eO = s(63305),
                eH = s.n(eO);
            let eM = (e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: p,
                            bestResults: C,
                            sendSearchFeedback: j,
                            searchCorrectedText: A,
                            isShimmerVisible: b,
                            isShimmerActive: P,
                            ...y
                        } = e,
                        { formatMessage: k } = (0, o.A)(),
                        v = (0, r.useMemo)(() => {
                            let e = {
                                [n.n.ALL]: { message: k({ id: 'search-results.best' }), type: n.n.ALL, items: [] },
                                [n.n.ARTIST]: { message: k({ id: 'search-results.artist' }), type: n.n.ARTIST, items: [] },
                                [n.n.PODCAST]: { message: k({ id: 'search-results.podcasts-and-books' }), type: n.n.PODCAST, items: [] },
                                [n.n.ALBUM]: { message: k({ id: 'search-results.album' }), type: n.n.ALBUM, items: [] },
                                [n.n.PLAYLIST]: { message: k({ id: 'search-results.playlist' }), type: n.n.PLAYLIST, items: [] },
                                [n.n.CLIP]: { message: k({ id: 'search-results.clip' }), type: n.n.CLIP, items: [] },
                            };
                            p.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var s, a;
                                    null == (s = e[t.type]) || s.items.push(t), null == (a = e[n.n.ALL]) || a.items.push(t);
                                }
                            });
                            let t = {
                                [n.n.ARTIST]: c.e8.search.SEARCH_MIXED_ARTIST,
                                [n.n.PODCAST]: c.e8.search.SEARCH_MIXED_PODCAST,
                                [n.n.ALBUM]: c.e8.search.SEARCH_MIXED_ALBUM,
                                [n.n.PLAYLIST]: c.e8.search.SEARCH_MIXED_PLAYLIST,
                                [n.n.CLIP]: c.e8.search.SEARCH_MIXED_CLIP,
                                [d.r.PODCAST]: c.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [d.r.OVERVIEW]: c.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [d.r.PODCAST_EPISODE]: c.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [d.r.NON_MUSIC]: c.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((s, i) => {
                                let o = e[s],
                                    l = o.type === n.n.CLIP;
                                if (o.type === n.n.ALL) {
                                    let e = o.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: r,
                                            } = (0, h.$tp)({ index: t, count: o.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, x.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: j,
                                                blockPosition: i,
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: r,
                                            });
                                        })
                                        .filter((e) => (0, r.isValidElement)(e));
                                    return (0, a.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, a.jsx)(eN, { results: C, isShimmerVisible: b, isShimmerActive: P, blockPosition: i, sendSearchFeedback: j }),
                                                (0, a.jsx)(h.FoH, {
                                                    blockId: h.hf$.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: h.hf$.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, a.jsx)(S.k, {
                                                        containerClassName: eH().blockMixed,
                                                        className: eH().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': k({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: b,
                                                        isShimmerActive: P,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        i,
                                    );
                                }
                                let d = t[o.type],
                                    m = d ? (0, c.Am)(d) : {};
                                return (0, a.jsx)(
                                    eL,
                                    {
                                        className: eH().block,
                                        headerClassName: eH().blockHeader,
                                        containerClassName: eH().blockCarousel,
                                        blockPosition: i,
                                        items: o.items,
                                        title: o.message,
                                        sendSearchFeedback: j,
                                        isShimmerVisible: b,
                                        isShimmerActive: P,
                                        isClipBlock: l,
                                        ...m,
                                    },
                                    i,
                                );
                            });
                        }, [k, p, j, b, P, C]);
                    return (0, a.jsxs)(u.N, {
                        className: (0, i.$)(eH().root, s),
                        containerClassName: eH().container,
                        ref: t,
                        ...(0, l.getDataAttrFromProps)(y),
                        children: [
                            (0, a.jsxs)('div', {
                                className: eH().content,
                                children: [
                                    A && (0, a.jsx)('div', { className: eH().correctedTextBlock, children: A }),
                                    (0, a.jsx)(h.hjC, {
                                        tabId: m.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: (0, a.jsx)('div', { className: eH().items, children: v }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(_.A, { children: (0, a.jsx)(_.wi, { className: eH().footer }) }),
                        ],
                    });
                },
                eD = (0, r.forwardRef)((e, t) => (0, a.jsx)(eM, { forwardRef: t, ...e }));
        },
        38598: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        40162: (e) => {
            e.exports = {
                header: 'SearchPage_header__T2OUM',
                root: 'SearchPage_root__TtwTi',
                root_showFilters: 'SearchPage_root_showFilters__pb2o1',
                input: 'SearchPage_input__7L7wS',
                content: 'SearchPage_content__Ax9D6',
                scrollableContent: 'SearchPage_scrollableContent__qdrWa',
                main: 'SearchPage_main__FDQGD',
                carousel: 'SearchPage_carousel__7jwGp',
                tabs: 'SearchPage_tabs__tlwgh',
                tab: 'SearchPage_tab__2yIDQ',
                tab_selected: 'SearchPage_tab_selected__Z7lYv',
                compilations: 'SearchPage_compilations__ZHEUr',
                footer: 'SearchPage_footer__uQN_X',
                error: 'SearchPage_error__WSxpu',
                skeletonStickyHeader: 'SearchPage_skeletonStickyHeader__SQqeV',
                important: 'SearchPage_important__z3aCa',
                skeletonContainer: 'SearchPage_skeletonContainer__phbvK',
                mixes: 'SearchPage_mixes__yusZB',
            };
        },
        40334: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        41560: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => b });
            var a = s(54486),
                i = s(50420),
                r = s(44282),
                o = s(61910),
                l = s(31500),
                c = s(81203),
                n = s(80585),
                d = s(43426),
                m = s(22674),
                u = s(87033),
                h = s.n(u);
            let _ = (e) => {
                let { className: t, ariaLabel: s, isShimmerActive: r } = e;
                return (0, a.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': s,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, i.$)(h().root, t),
                    children: [
                        (0, a.jsxs)('div', {
                            className: h().infoContainer,
                            children: [
                                (0, a.jsx)(m.Shimmer, { className: h().cover, radius: 's', isActive: r }),
                                (0, a.jsxs)('div', {
                                    className: h().textContainer,
                                    children: [
                                        (0, a.jsx)(m.Shimmer, { className: h().title, radius: 's', isActive: r }),
                                        (0, a.jsx)(m.Shimmer, { className: h().description, radius: 's', isActive: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(m.Shimmer, { className: h().action, radius: 's', isActive: r }),
                    ],
                });
            };
            var x = s(35461),
                S = s.n(x);
            let p = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: s = !0 } = e,
                    { formatMessage: i } = (0, d.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, a.jsx)(
                        _,
                        {
                            className: S().root,
                            ariaLabel: i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'search.history' }) }),
                            isShimmerActive: s,
                        },
                        t,
                    ),
                );
            };
            var C = s(57329),
                j = s.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            title: s,
                            description: d,
                            viewAllAction: m,
                            coverUrl: u,
                            children: h,
                            className: _,
                            maxColumns: x = 2,
                            itemsPerColumn: S = 3,
                            containerClassName: C,
                            headerClassName: A,
                            titleSize: b,
                            showControls: P,
                            isShimmerVisible: y,
                            isShimmerActive: k,
                        } = e,
                        v = (0, o.useRef)(null),
                        T = (0, o.useId)(),
                        { items: g, columnLength: I } = (0, o.useMemo)(() => {
                            if (y)
                                return {
                                    columnLength: x,
                                    items: Array.from({ length: x }, (e, t) =>
                                        (0, a.jsx)('div', { className: j().column, children: (0, a.jsx)(p, { shimmersCount: 3, isShimmerActive: k }) }, t),
                                    ),
                                };
                            let e = (0, r.A)(h, S).slice(0, (null == h ? void 0 : h.length) ? Math.ceil(h.length / S) : x);
                            return { items: e.map((e, t) => (0, a.jsx)('div', { className: j().column, children: e }, t)), columnLength: e.length };
                        }, [h, k, y, S, x]);
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, i.$)(_, j().root),
                        ...(0, l.Am)(l.e8.search.MIXED_ENTITIES_BLOCK),
                        children: [
                            (0, a.jsx)(n.Tw, {
                                className: A,
                                labeledForId: T,
                                title: s,
                                description: d,
                                coverUrl: u,
                                viewAllActionLink: m,
                                titleSize: b,
                                controls: P && (0, a.jsx)(n.X9, { className: j().controls, carouselRef: v }),
                                withDescription: !!d,
                            }),
                            (0, a.jsx)(c.Carousel, {
                                className: C,
                                ref: v,
                                itemClassName: (0, i.$)(j().item, { [j().item_withMultipleColumns]: I > 1 }),
                                'aria-labelledby': T,
                                role: 'group',
                                children: g,
                            }),
                        ],
                    });
                },
                b = (0, o.forwardRef)((e, t) => (0, a.jsx)(A, { forwardRef: t, ...e }));
        },
        43874: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryPage: () => j });
            var a = s(54486),
                i = s(12186),
                r = s(28303),
                o = s(97396),
                l = s(61910),
                c = s(43426),
                n = s(47713),
                d = s(31500),
                m = s(77881),
                u = s(5956),
                h = s(56231),
                _ = s(97800),
                x = s(31710),
                S = s(83252),
                p = s(71378),
                C = s.n(p);
            let j = (0, r.PA)(() => {
                let {
                        search: e,
                        user: t,
                        settings: { isMobile: s },
                    } = (0, S.Pjs)(),
                    { setContentScrollRef: r } = (0, S.gKY)(),
                    { formatMessage: p } = (0, c.A)(),
                    j = (0, S.W6M)(),
                    A = (0, l.useRef)(!1),
                    b = (0, l.useRef)(null),
                    P = (0, x.t9)(() => {
                        A.current = !0;
                    }),
                    y = e.historyPage.items.length;
                t.isAuthorized && (0, o.notFound)(),
                    (0, l.useEffect)(() => {
                        b.current && j.canBack && b.current.focus();
                    }, [j.canBack]),
                    (0, l.useEffect)(
                        () => () => {
                            (null == A ? void 0 : A.current) ? (e.resetHistoryItems(), (A.current = !1)) : e.resetHistoryStateRequest();
                        },
                        [e],
                    );
                let k = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == j || j.back();
                            }, 200),
                        [j],
                    ),
                    v = (0, l.useMemo)(
                        () =>
                            y
                                ? (0, a.jsx)('div', {
                                      className: C().items,
                                      children: e.historyPage.items.map((e, t) => (0, x.Gw)({ item: e, index: t, pageId: S._Q$.SEARCH })).filter((e) => !!e),
                                  })
                                : (0, a.jsx)(_.Caption, {
                                      className: C().emptyHistory,
                                      variant: 'div',
                                      size: 'm',
                                      type: 'text',
                                      children: (0, a.jsx)(n.A, { id: 'search.history-empty' }),
                                  }),
                        [e.historyPage.items, y],
                    );
                return (
                    e.isHistoryReady && t.account.data.uid && (0, l.use)(e.getHistory({ userId: t.account.data.uid })),
                    (0, a.jsx)('div', {
                        className: C().root,
                        ...(0, d.Am)(d.Xk.search.SEARCH_HISTORY_PAGE),
                        children: (0, a.jsxs)(h.N, {
                            className: C().scrollContent,
                            containerClassName: C().scrollContainer,
                            ref: r,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: C().header,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: C().title,
                                            children: [
                                                j.canBack &&
                                                    (0, a.jsx)(m.$, {
                                                        ref: b,
                                                        'aria-label': p({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !j.canBack,
                                                        size: 's',
                                                        icon: (0, a.jsx)(u.Icon, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: k,
                                                    }),
                                                (0, a.jsx)(_.Heading, { variant: 'h2', size: s ? 'm' : 'xl', children: (0, a.jsx)(n.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, a.jsx)(m.$, {
                                            'aria-label': p({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !y,
                                            size: s ? 's' : 'default',
                                            onClick: P,
                                            children: (0, a.jsx)(_.Caption, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, a.jsx)(n.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && v,
                            ],
                        }),
                    })
                );
            });
        },
        45641: (e) => {
            e.exports = {
                root: 'SearchEntities_root__OHn_e',
                container: 'SearchEntities_container__mT8FY',
                correctedTextBlock: 'SearchEntities_correctedTextBlock__B4b8e',
                footer: 'SearchEntities_footer__AUX9I',
                block: 'SearchEntities_block__yLWMc',
                video: 'SearchEntities_video__ndT3a',
                concertShimmer: 'SearchEntities_concertShimmer__QR0OC',
                entityCardShimmer: 'SearchEntities_entityCardShimmer__MSRgj',
            };
        },
        49692: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        51427: (e, t, s) => {
            'use strict';
            var a;
            s.d(t, { r: () => a }),
                (function (e) {
                    (e.TRACK = 'best_result_track'),
                        (e.ARTIST = 'best_result_artist'),
                        (e.CONCERT = 'best_result_concert'),
                        (e.RECENT_RELEASE = 'best_result_recent_release'),
                        (e.ALBUM = 'best_result_album'),
                        (e.WAVE = 'best_result_wave'),
                        (e.ARTISTS_RELATED = 'best_result_artists_related'),
                        (e.OVERVIEW = 'best_result_overview'),
                        (e.PODCAST = 'best_result_podcast'),
                        (e.PODCAST_EPISODE = 'best_result_podcast_episode'),
                        (e.NON_MUSIC = 'best_result_non_music'),
                        (e.CLIP = 'best_result_clip'),
                        (e.UPCOMING = 'best_result_upcoming'),
                        (e.PLAYLIST = 'best_result_playlist'),
                        (e.BOOK_CHAPTER = 'best_result_book_chapter');
                })(a || (a = {}));
        },
        54797: (e) => {
            e.exports = {
                root: 'SearchEmpty_root__Yz53B',
                container: 'SearchEmpty_container__6WP_o',
                content: 'SearchEmpty_content__OdVMa',
                correctedTextBlock: 'SearchEmpty_correctedTextBlock__wR4Hh',
                icon: 'SearchEmpty_icon__NYKMM',
                title: 'SearchEmpty_title__C77x5',
                subtitle: 'SearchEmpty_subtitle__2TlGa',
                footer: 'SearchEmpty_footer__WP03G',
            };
        },
        55269: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryBlock: () => A });
            var a = s(54486),
                i = s(28303),
                r = s(83252),
                o = s(61910),
                l = s(43426),
                c = s(12200),
                n = s(41560),
                d = s(86482),
                m = s.n(d);
            let u = (0, i.PA)(() => {
                let { search: e, user: t } = (0, r.Pjs)(),
                    { formatMessage: s } = (0, l.A)(),
                    i = e.historyPage.items;
                if (
                    ((0, o.useEffect)(
                        () => () => {
                            var t;
                            (null == (t = location) ? void 0 : t.pathname) !== r.Zyd.searchHistory.href && e.resetHistoryStateRequest();
                        },
                        [e],
                    ),
                    e.isHistoryReady && t.account.data.uid && (0, o.use)(e.getHistory({ userId: t.account.data.uid })),
                    0 === i.length)
                )
                    return null;
                let d = i.map((e, t) => (0, c.G)({ item: e, index: t, pageId: r._Q$.SEARCH })).filter((e) => (0, o.isValidElement)(e));
                return (0, a.jsx)('section', {
                    className: m().root,
                    children: (0, a.jsx)(n.k, {
                        headerClassName: m().header,
                        containerClassName: m().content,
                        isShimmerVisible: e.isHistoryShimmerVisible,
                        isShimmerActive: e.isHistoryLoading,
                        title: s({ id: 'search.history' }),
                        viewAllAction: r.Zyd.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: d,
                    }),
                });
            });
            var h = s(47713),
                _ = s(77881),
                x = s(97800),
                S = s(96125),
                p = s(2257),
                C = s.n(p);
            let j = (0, i.PA)(() => {
                    let { search: e, user: t } = (0, r.Pjs)(),
                        { formatMessage: s } = (0, l.A)(),
                        i = (0, S.useClearHistory)(e.resetHistoryItems),
                        d = e.historyPage.items;
                    if (
                        ((0, o.useEffect)(
                            () => () => {
                                var t;
                                (null == (t = location) ? void 0 : t.pathname) !== r.Zyd.searchHistory.href && e.resetHistoryStateRequest();
                            },
                            [e],
                        ),
                        e.isHistoryReady && t.account.data.uid && (0, o.use)(e.getHistory({ userId: t.account.data.uid })),
                        0 === d.length)
                    )
                        return null;
                    let m = d.map((e, t) => (0, c.G)({ item: e, index: t, pageId: r._Q$.SEARCH })).filter((e) => (0, o.isValidElement)(e));
                    return (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(n.k, {
                                headerClassName: C().header,
                                containerClassName: C().mixedEntitiesBlock,
                                isShimmerVisible: e.isHistoryShimmerVisible,
                                isShimmerActive: e.isHistoryLoading,
                                title: s({ id: 'search.history' }),
                                viewAllAction: r.Zyd.searchHistory.href,
                                titleSize: 'xs',
                                children: m,
                            }),
                            (0, a.jsx)('div', {
                                className: C().buttonContainer,
                                children: (0, a.jsx)(_.$, {
                                    className: C().button,
                                    'aria-label': s({ id: 'search.clear-history' }),
                                    disabled: !d.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: i,
                                    children: (0, a.jsx)(x.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        children: (0, a.jsx)(h.A, { id: 'search.clear-history' }),
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                A = (0, i.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, r.Pjs)();
                    return e ? (0, a.jsx)(j, {}) : (0, a.jsx)(u, {});
                });
        },
        57329: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        59214: (e) => {
            e.exports = {
                root: 'SearchBestResultsPodcastEpisodeBlock_root__YHMZ5',
                cover: 'SearchBestResultsPodcastEpisodeBlock_cover__QuzER',
                podcastMeta: 'SearchBestResultsPodcastEpisodeBlock_podcastMeta__u2dSw',
                important: 'SearchBestResultsPodcastEpisodeBlock_important__qJ_Ej',
                titleContainer: 'SearchBestResultsPodcastEpisodeBlock_titleContainer__MNogD',
                text: 'SearchBestResultsPodcastEpisodeBlock_text__uJpwJ',
                progress: 'SearchBestResultsPodcastEpisodeBlock_progress__ftBpc',
            };
        },
        63305: (e) => {
            e.exports = {
                root: 'SearchMixed_root__RR4QT',
                container: 'SearchMixed_container__KIfE1',
                correctedTextBlock: 'SearchMixed_correctedTextBlock___1rfE',
                block: 'SearchMixed_block__SasiH',
                blockCarousel: 'SearchMixed_blockCarousel__IQjJA',
                blockHeader: 'SearchMixed_blockHeader__L0FSh',
                blockMixed: 'SearchMixed_blockMixed__udOYV',
                footer: 'SearchMixed_footer__INQFP',
                item: 'SearchMixed_item__aTIrG',
                important: 'SearchMixed_important__1ncD8',
            };
        },
        66332: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        71378: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        72344: (e, t, s) => {
            'use strict';
            s.d(t, { MixesGrid: () => _ });
            var a = s(54486),
                i = s(50420),
                r = s(28303),
                o = s(61910),
                l = s(47713),
                c = s(31500),
                n = s(97800),
                d = s(27906),
                m = s(80585),
                u = s(74146),
                h = s.n(u);
            let _ = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, withTitle: r, mixes: u, shimmerCount: _ = 5, className: x } = e,
                    S = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, a.jsx)(m.eI, { isActive: s, round: !1, centered: !1, withInfo: !1, count: _ })
                                : u.map((e) => (0, a.jsx)(d.NZ, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [s, t, u, _],
                    );
                return (0, a.jsxs)('div', {
                    ...(0, c.Am)(c.e8.mixes.MIXES_GRID_CONTAINER),
                    children: [
                        r &&
                            (0, a.jsx)(n.Heading, {
                                className: h().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                ...(0, c.Am)(c.e8.mixes.MIXES_GRID_HEADER),
                                children: (0, a.jsx)(l.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, a.jsx)('div', { className: (0, i.$)(h().mixesGrid, x), children: S }),
                    ],
                });
            });
        },
        74146: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        76421: (e, t, s) => {
            'use strict';
            var a;
            s.d(t, { n: () => a }),
                (function (e) {
                    (e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert');
                })(a || (a = {}));
        },
        78508: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        81268: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        81531: (e, t, s) => {
            'use strict';
            s.d(t, { Z_: () => d.Mixes, nL: () => m.MixesGrid, YM: () => n });
            var a = s(93064),
                i = s(14287),
                r = s(35620),
                o = s(27906),
                l = s(83252),
                c = s(26433);
            let n = a.gK
                .compose(a.gK.model('Mixes', { items: a.gK.array(o.f), errorStatusCode: a.gK.maybeNull(a.gK.number) }), c.XT)
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === l.GuX.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === i.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getMixes: (0, a.L3)(function* (t) {
                        let { landingResource: s, modelActionsLogger: c } = (0, a._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let i = yield s.getBlock({ source: { uri: '/landing/block/mixes', fullList: t }, type: r.t.MIXES });
                                (e.items = { items: (0, a.wg)(i.items.map((e) => (0, o.Ju)(e.data))) }.items), (e.loadingState = l.GuX.RESOLVE);
                            } catch (t) {
                                c.error(t),
                                    t instanceof i.GX && (t.statusCode === i.X1.NOT_FOUND || t.statusCode === i.X1.BAD_REQUEST) && (e.errorStatusCode = i.X1.NOT_FOUND),
                                    e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                }));
            var d = s(32271),
                m = s(72344);
        },
        82957: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        83681: (e, t, s) => {
            'use strict';
            s.d(t, { SearchEmpty: () => x });
            var a = s(54486),
                i = s(50420),
                r = s(61910),
                o = s(43426),
                l = s(31500),
                c = s(5956),
                n = s(56231),
                d = s(97800),
                m = s(80585),
                u = s(54797),
                h = s.n(u);
            let _ = (e) => {
                    let { forwardRef: t, className: s, searchCorrectedText: r } = e,
                        { formatMessage: u } = (0, o.A)();
                    return (0, a.jsxs)(n.N, {
                        className: (0, i.$)(h().root, s),
                        containerClassName: h().container,
                        ref: t,
                        children: [
                            (0, a.jsxs)('div', {
                                className: h().content,
                                ...(0, l.Am)(l.e8.search.SEARCH_EMPTY_CONTAINER),
                                children: [
                                    r && (0, a.jsx)('div', { className: h().correctedTextBlock, children: r }),
                                    (0, a.jsx)(c.Icon, { className: h().icon, variant: 'search', size: 'xxl', ...(0, l.Am)(l.e8.search.SEARCH_EMPTY_ICON) }),
                                    (0, a.jsx)(d.Heading, {
                                        className: h().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        ...(0, l.Am)(l.e8.search.SEARCH_EMPTY_HEADER),
                                        children: u({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, a.jsx)(d.Caption, {
                                        className: h().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        ...(0, l.Am)(l.e8.search.SEARCH_EMPTY_DESCRIPTION),
                                        children: u({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(m.A, { children: (0, a.jsx)(m.wi, { className: h().footer }) }),
                        ],
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        86482: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        87033: (e) => {
            e.exports = {
                root: 'SearchColumnShimmer_root__PDf3Y',
                infoContainer: 'SearchColumnShimmer_infoContainer__cQ8_H',
                textContainer: 'SearchColumnShimmer_textContainer__IekgL',
                title: 'SearchColumnShimmer_title__IorPg',
                description: 'SearchColumnShimmer_description__nNupy',
                cover: 'SearchColumnShimmer_cover__58jV8',
                action: 'SearchColumnShimmer_action__JbJGl',
            };
        },
        89016: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        89961: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        90060: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        90777: (e, t, s) => {
            'use strict';
            s.d(t, { SearchNotFoundPage: () => c });
            var a = s(54486),
                i = s(28303),
                r = s(61910),
                o = s(42421),
                l = s(83252);
            let c = (0, i.PA)(() => {
                let { user: e, search: t } = (0, l.Pjs)();
                return (
                    (0, r.useEffect)(
                        () => () => {
                            e.isAuthorized && t.landing.reset();
                        },
                        [e.isAuthorized, t.landing],
                    ),
                    (0, a.jsx)(o.M, {})
                );
            });
        },
        96125: (e, t, s) => {
            'use strict';
            s.d(t, { useClearHistory: () => m });
            var a = s(54486),
                i = s(97396),
                r = s(61910),
                o = s(43426),
                l = s(47713),
                c = s(8817),
                n = s(83252),
                d = s(80585);
            let m = (e) => {
                let { user: t, search: s } = (0, n.Pjs)(),
                    { formatMessage: m } = (0, o.A)(),
                    { notify: u } = (0, n.lkh)(),
                    h = (0, i.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        s.isEmptyHistory && h.push(n.Zyd.search.href);
                    }, [s.isEmptyHistory, h]),
                    (0, c.c)(() => {
                        try {
                            t.account.data.uid && s.clearHistory({ userId: t.account.data.uid }),
                                u((0, a.jsx)(d.$W, { message: (0, a.jsx)(l.A, { id: 'search.cleared-history' }) }), { containerId: n.uQT.INFO }),
                                e && e(),
                                h.push(n.Zyd.search.href);
                        } catch (e) {
                            u((0, a.jsx)(d.hT, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.uQT.ERROR });
                        }
                    })
                );
            };
        },
        98045: (e, t, s) => {
            'use strict';
            s.d(t, { SearchCorrectedText: () => m });
            var a = s(54486),
                i = s(61910),
                r = s(47713),
                o = s(31500),
                l = s(77881),
                c = s(97800),
                n = s(89961),
                d = s.n(n);
            let m = (e) => {
                let { onCorrectText: t, searchCorrectedText: s } = e,
                    n = (0, i.useMemo)(
                        () => ({
                            text: (0, a.jsx)(l.$, {
                                'aria-label': s,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT_BUTTON),
                                children: (0, a.jsx)(c.Caption, {
                                    className: d().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT),
                                    children: s,
                                }),
                            }),
                        }),
                        [s, t],
                    );
                return (0, a.jsx)('div', {
                    className: d().root,
                    ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT),
                    children: (0, a.jsx)(c.Caption, {
                        className: d().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        ...(0, o.Am)(o.e8.search.SEARCH_CORRECTED_TEXT_TEXT),
                        children: (0, a.jsx)(r.A, { id: 'search.corrected-text', values: n }),
                    }),
                });
            };
        },
        98701: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
    },
]);
