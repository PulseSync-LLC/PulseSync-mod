(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [255],
    {
        30: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        1163: (e) => {
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
        5723: (e, t, s) => {
            'use strict';
            s.d(t, { Mixes: () => x });
            var a = s(62936),
                i = s(19718),
                r = s(44020),
                o = s(42561),
                l = s(47480),
                c = s(21153),
                n = s(3765),
                d = s(85906),
                u = s(19628),
                m = s.n(u);
            let h = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, mixes: i } = e,
                    { formatMessage: u } = (0, l.A)(),
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
                        (0, a.jsx)(d.Tw, { className: m().carouselHeader, title: u({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: o.Zyd.mixes.href }),
                        (0, a.jsx)(c.Carousel, { className: m().carouselBlock, itemClassName: m().mixItem, children: h }),
                    ],
                });
            });
            var _ = s(98794);
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
        6003: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        6162: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        6459: (e) => {
            e.exports = {
                root: 'SearchEntities_root__OHn_e',
                container: 'SearchEntities_container__mT8FY',
                queryToVibe: 'SearchEntities_queryToVibe__F4lY_',
                correctedTextBlock: 'SearchEntities_correctedTextBlock__B4b8e',
                footer: 'SearchEntities_footer__AUX9I',
                block: 'SearchEntities_block__yLWMc',
                video: 'SearchEntities_video__ndT3a',
                concertShimmer: 'SearchEntities_concertShimmer__QR0OC',
                entityCardShimmer: 'SearchEntities_entityCardShimmer__MSRgj',
            };
        },
        6460: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryPage: () => j });
            var a = s(62936),
                i = s(19992),
                r = s(19718),
                o = s(69526),
                l = s(44020),
                c = s(47480),
                n = s(26731),
                d = s(8669),
                u = s(5099),
                m = s(85742),
                h = s(14501),
                _ = s(20418),
                x = s(97282),
                S = s(42561),
                p = s(71240),
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
                    y = (0, x.t9)(() => {
                        A.current = !0;
                    }),
                    v = e.historyPage.items.length;
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
                let P = (0, l.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == j || j.back();
                            }, 200),
                        [j],
                    ),
                    k = (0, l.useMemo)(
                        () =>
                            v
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
                        [e.historyPage.items, v],
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
                                                    (0, a.jsx)(u.$, {
                                                        ref: b,
                                                        'aria-label': p({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !j.canBack,
                                                        size: 's',
                                                        icon: (0, a.jsx)(m.Icon, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: P,
                                                    }),
                                                (0, a.jsx)(_.Heading, { variant: 'h2', size: s ? 'm' : 'xl', children: (0, a.jsx)(n.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, a.jsx)(u.$, {
                                            'aria-label': p({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !v,
                                            size: s ? 's' : 'default',
                                            onClick: y,
                                            children: (0, a.jsx)(_.Caption, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, a.jsx)(n.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !e.isHistoryLoading && k,
                            ],
                        }),
                    })
                );
            });
        },
        6463: (e, t, s) => {
            'use strict';
            s.d(t, { useClearHistory: () => u });
            var a = s(62936),
                i = s(69526),
                r = s(44020),
                o = s(47480),
                l = s(26731),
                c = s(59935),
                n = s(42561),
                d = s(85906);
            let u = (e) => {
                let { user: t, search: s } = (0, n.Pjs)(),
                    { formatMessage: u } = (0, o.A)(),
                    { notify: m } = (0, n.lkh)(),
                    h = (0, i.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        s.isEmptyHistory && h.push(n.Zyd.search.href);
                    }, [s.isEmptyHistory, h]),
                    (0, c.c)(() => {
                        try {
                            t.account.data.uid && s.clearHistory({ userId: t.account.data.uid }),
                                m((0, a.jsx)(d.$W, { message: (0, a.jsx)(l.A, { id: 'search.cleared-history' }) }), { containerId: n.uQT.INFO }),
                                e && e(),
                                h.push(n.Zyd.search.href);
                        } catch (e) {
                            m((0, a.jsx)(d.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.uQT.ERROR });
                        }
                    })
                );
            };
        },
        6937: (e, t, s) => {
            'use strict';
            s.d(t, { useSearchQueryToVibeVisibility: () => r });
            var a = s(44020),
                i = s(59935);
            let r = (e, t) => {
                let [s, r] = (0, a.useState)(t || e.length > 0),
                    [o, l] = (0, a.useState)(e.length > 0 ? e[0] : void 0),
                    c = (0, a.useRef)(void 0),
                    n = (0, a.useRef)(t),
                    d = (0, a.useRef)(t ? Date.now() : void 0),
                    u = (0, i.c)((e) => {
                        let t = Math.max(0, 1e3 - (void 0 !== d.current ? Date.now() - d.current : 1e3));
                        0 === t ? e() : (c.current = setTimeout(e, t));
                    });
                return (
                    (0, a.useEffect)(() => {
                        let s = t && !n.current,
                            a = !t && n.current;
                        return (
                            (n.current = t),
                            s && (clearTimeout(c.current), (d.current = Date.now()), r(!0), l(void 0)),
                            a && (clearTimeout(c.current), e.length > 0 ? u(() => l(e[0])) : u(() => r(!1))),
                            () => clearTimeout(c.current)
                        );
                    }, [t, e, u]),
                    { isVisible: s, vibe: o }
                );
            };
        },
        9871: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        11314: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        18651: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryBlock: () => A });
            var a = s(62936),
                i = s(19718),
                r = s(42561),
                o = s(44020),
                l = s(47480),
                c = s(19614),
                n = s(90538),
                d = s(28503),
                u = s.n(d);
            let m = (0, i.PA)(() => {
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
                    className: u().root,
                    children: (0, a.jsx)(n.k, {
                        headerClassName: u().header,
                        containerClassName: u().content,
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
            var h = s(26731),
                _ = s(5099),
                x = s(20418),
                S = s(6463),
                p = s(44395),
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
                    let u = d.map((e, t) => (0, c.G)({ item: e, index: t, pageId: r._Q$.SEARCH })).filter((e) => (0, o.isValidElement)(e));
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
                                children: u,
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
                    return e ? (0, a.jsx)(j, {}) : (0, a.jsx)(m, {});
                });
        },
        19614: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => h });
            var a = s(62936),
                i = s(23480),
                r = s(97843),
                o = s(41907),
                l = s(90914),
                c = s(11334),
                n = s(79670),
                d = s(66161),
                u = s(32632),
                m = s(42561);
            let h = (e) => {
                let { item: t, index: s, pageId: h, sendSearchFeedback: _, blockPosition: x = 0, objectPosX: S, objectPosY: p, objectsCount: C } = e;
                switch (t.type) {
                    case r.n.PODCAST_EPISODE:
                        return (0, a.jsx)(
                            m.Bki,
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
                            m.Bki,
                            {
                                objectType: i.ky.Track,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(m.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.entityId, type: o.o.TRACK, blockPosition: x, position: s },
                                    children: (0, a.jsx)(d.c8, { pageId: h, track: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.ARTIST:
                        return (0, a.jsx)(
                            m.Bki,
                            {
                                objectType: i.ky.Artist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(m.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.id, type: o.o.ARTIST, blockPosition: x, position: s },
                                    children: (0, a.jsx)(c.cz, { pageId: h, artist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PLAYLIST:
                        return (0, a.jsx)(
                            m.Bki,
                            {
                                objectType: i.ky.Playlist,
                                objectId: t.data.id,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(m.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: t.data.id, type: o.o.PLAYLIST, blockPosition: x, position: s },
                                    children: (0, a.jsx)(n.vf, { pageId: h, playlist: t.data }),
                                }),
                            },
                            t.data.id,
                        );
                    case r.n.PODCAST:
                        return (0, a.jsx)(
                            m.Bki,
                            {
                                objectType: i.ky.Podcast,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(
                                    m.NYB.Provider,
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
                            m.Bki,
                            {
                                objectType: i.ky.Album,
                                objectId: String(t.data.id),
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(
                                    m.NYB.Provider,
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
                            m.Bki,
                            {
                                objectType: i.ky.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: p,
                                objectsCount: C,
                                children: (0, a.jsx)(m.NYB.Provider, {
                                    value: { sendSearchFeedback: _, id: e.seedsId, type: o.o.WAVE, blockPosition: x, position: s },
                                    children: (0, a.jsx)(u.H2, { vibe: e, cover: e.cover, description: e.description, agentVariant: u.hl.SMALL }),
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
        19628: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        19960: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        26103: (e, t, s) => {
            'use strict';
            s.d(t, { SearchNotFoundPage: () => c });
            var a = s(62936),
                i = s(19718),
                r = s(44020),
                o = s(9939),
                l = s(42561);
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
        28503: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        29490: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        32447: (e, t, s) => {
            'use strict';
            s.d(t, { SearchQueryToVibeResults: () => n });
            var a = s(62936),
                i = s(79950),
                r = s(19718),
                o = s(32632),
                l = s(93611),
                c = s.n(l);
            let n = (0, r.PA)((e) => {
                let { className: t, vibe: s } = e;
                return (0, a.jsx)('div', { className: (0, i.$)(c().root, t), children: (0, a.jsx)(o.cw, { vibe: s }) });
            });
        },
        35480: (e) => {
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
        37743: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        39228: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        40559: (e) => {
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
        43528: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => i });
            var a = s(43696);
            let i = () => {
                let e = null,
                    t = new a.cJ(!1),
                    s = [];
                return {
                    isLoaded: t,
                    init: (a) => {
                        var i, r;
                        if (void 0 !== (null == (i = window.Ya) ? void 0 : i.Metrika2) && !t.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...a })),
                                    (t.value = !0),
                                    (r = e),
                                    s.forEach((e) => {
                                        e(r);
                                    }),
                                    (s.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && a.logger.error(e);
                            }
                    },
                    count: function (t) {
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [a]: t })
                            : s.push((e) => {
                                  e.params({ [a]: t });
                              });
                    },
                    hit: (t) => {
                        e
                            ? e.hit(t)
                            : s.push((e) => {
                                  e.hit(t);
                              });
                    },
                    reachGoal: (t, a) => {
                        if (!e) return void s.push((e) => e.reachGoal(t, a));
                        e.reachGoal(t, a);
                    },
                };
            };
        },
        44395: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        45338: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => i, k: () => a });
            let a = 36,
                i = 2e3;
        },
        46698: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        47020: (e, t, s) => {
            'use strict';
            s.d(t, { Z_: () => d.Mixes, nL: () => u.MixesGrid, YM: () => n });
            var a = s(51606),
                i = s(14525),
                r = s(63854),
                o = s(3765),
                l = s(42561),
                c = s(54690);
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
            var d = s(5723),
                u = s(98794);
        },
        47744: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        49030: (e, t, s) => {
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
        49362: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        54362: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        54802: (e, t, s) => {
            'use strict';
            let a;
            s.d(t, { useMetrika: () => o });
            var i = s(44020),
                r = s(43528);
            let o = () => {
                let e = (a || (a = (0, r.a)()), a),
                    t = (0, i.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, i.useMemo)(() => ({ ...e, isLoaded: t }), [t]);
            };
        },
        57627: (e, t, s) => {
            'use strict';
            s.d(t, { SearchCorrectedText: () => u });
            var a = s(62936),
                i = s(44020),
                r = s(26731),
                o = s(8669),
                l = s(5099),
                c = s(20418),
                n = s(6003),
                d = s.n(n);
            let u = (e) => {
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
        58455: (e, t, s) => {
            'use strict';
            s.d(t, { SearchPage: () => f });
            var a = s(62936),
                i = s(79950),
                r = s(19718),
                o = s(69526),
                l = s(44020),
                c = s(47480),
                n = s(23480),
                d = s(8669),
                u = s(49030),
                m = s(97843),
                h = s(44262),
                _ = s(59935),
                x = s(60188),
                S = s(62695),
                p = s(85023),
                C = s(97282),
                j = s(42561),
                A = s(85906),
                b = s(25099);
            let y = Math.floor(C.T_ / 3);
            var v = s(35480),
                P = s.n(v),
                k = s(56874),
                T = s(14501),
                g = s(22991),
                E = s(47020),
                I = s(65438),
                R = s(92229);
            let N = (0, r.PA)((e) => {
                    let { searchResults: t, setContentScrollRef: s, contentScrollRef: r, hasSearchText: o } = e,
                        {
                            user: c,
                            search: n,
                            settings: { isMobile: u },
                        } = (0, j.Pjs)(),
                        [m, h] = (0, k.d)();
                    return o
                        ? t
                        : c.isAuthorized
                          ? (0, a.jsx)(R.hO, {
                                scrollElement: r,
                                headerElement: m,
                                children: (0, a.jsxs)(T.N, {
                                    className: P().scrollableContent,
                                    containerClassName: P().main,
                                    ref: s,
                                    ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_CONTENT),
                                    children: [
                                        (0, a.jsx)(g.EA, {
                                            containerClassName: P().skeletonContainer,
                                            stickyHeaderClassName: (0, i.$)(P().skeletonStickyHeader, P().important),
                                            stickyHeaderTabIndex: u ? null : 0,
                                            headerConcealerComponent: (0, a.jsx)('div', { ref: h }),
                                            landing: n.landing,
                                            errorComponent: (0, a.jsx)(I.w, { className: P().error, withBackwardControl: !1 }),
                                            headerVariant: u ? A.Vw.COMPOSITE : A.Vw.STICKY,
                                        }),
                                        (0, a.jsx)(A.A, { children: (0, a.jsx)(A.wi, { className: P().footer }) }),
                                    ],
                                }),
                            })
                          : (0, a.jsxs)(T.N, {
                                className: P().scrollableContent,
                                containerClassName: P().main,
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
                                    (0, a.jsx)(l.Suspense, { children: (0, a.jsx)(E.Z_, { className: P().mixes }) }),
                                    (0, a.jsx)(A.A, { children: (0, a.jsx)(A.wi, { className: P().footer }) }),
                                ],
                            });
                }),
                B = 'text',
                f = (0, r.PA)(() => {
                    let e = (0, p.useTabsState)(0),
                        [t, s] = (0, l.useState)(u.$.TOP),
                        [r, v] = (0, l.useState)(!1),
                        { formatMessage: k } = (0, c.A)(),
                        { search: T, experiments: g, location: E, user: I } = (0, j.Pjs)(),
                        { contentScrollRef: R, setContentScrollRef: f } = (0, j.gKY)(),
                        L = ((e) => {
                            let { formatMessage: t } = (0, c.A)(),
                                s = (0, b.df)(),
                                { experiments: a } = (0, j.Pjs)(),
                                i = a.checkExperiment(j.zal.WebNextSearchConcerts, 'on') && !a.checkExperiment(j.zal.disableAllConcerts, 'on');
                            return e
                                ? [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== u.$.CLIP || s) && (e.id !== u.$.CONCERT || i)) return e;
                                  })
                                : [{ id: u.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(T.filters),
                        O = (0, j.XJ9)(),
                        [H, M] = (0, l.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(E.searchParams).get(B)) ? e : '');
                        }),
                        D = (0, l.useRef)(H),
                        w = H.length > 0;
                    g.checkExperiment(j.zal.WebNextDisableSearch, 'on') && (0, o.redirect)(j.Zyd.main.href),
                        (0, j.Jzs)(T.landing.loadingState === j.GuX.RESOLVE),
                        (0, l.useEffect)(
                            () => () => {
                                T.reset(), I.isAuthorized && T.landing.reset();
                            },
                            [I.isAuthorized, g, T],
                        );
                    let Y = (0, _.c)((e, t) => {
                            T.resetResults(), 0 !== e.length && T.getSearchResults({ text: decodeURIComponent(e), filter: t });
                        }),
                        K = (0, _.c)(() => {
                            v(!0);
                        }),
                        U = (0, _.c)((t) => {
                            var a, i;
                            if (!e.onTabChange || t === e.value) return;
                            e.onTabChange(t);
                            let r = null != (i = null == (a = L[t]) ? void 0 : a.id) ? i : u.$.TOP;
                            Object.values(u.$).includes(r) && (s(r), Y(D.current, r)), R && (R.scrollTop = 0);
                        }),
                        V = (0, _.c)((t) => {
                            let s = t.trim(),
                                a = encodeURIComponent(s);
                            M(a), (D.current = a), 0 !== e.value && U(0), Y(a, u.$.TOP), T.history.setShouldUpdateHistory(!0), T.resetSearchCorrectedText(), v(!1);
                            let i = new URL(window.location.href);
                            i.searchParams.set(B, s), O(String(i));
                        }),
                        X = (0, _.c)((e) => {
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
                        $ = ((e) => {
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
                                    if (n > 0 && d >= n - y) {
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
                        z = (0, l.useMemo)(
                            () => (T.searchCorrectedText ? (0, a.jsx)(C.tn, { searchCorrectedText: T.searchCorrectedText, onCorrectText: K }) : null),
                            [K, T.searchCorrectedText],
                        ),
                        G = (0, x.L)(() => {
                            var e, s, i, r, o;
                            if (T.isEmpty) return (0, a.jsx)(C.qz, { searchCorrectedText: z });
                            let l = {
                                className: P().searchResults,
                                isShimmerVisible: T.isShimmerVisible,
                                isShimmerActive: T.isLoading,
                                results: null != (e = T.pagesLoader.items) ? e : [],
                                requestsCount: T.pagesLoader.requestsCount,
                                bestResults: T.bestResults,
                                q2vResults: T.q2vResults,
                                sendSearchFeedback: X,
                                searchCorrectedText: z,
                                getDataByRange: $,
                                ref: f,
                            };
                            switch (t) {
                                case u.$.TOP:
                                    return (0, a.jsx)(C.kp, { ...l, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_TOP) });
                                case u.$.TRACK:
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
                                case u.$.ALBUM:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: m.n.ALBUM, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_ALBUM) });
                                case u.$.PLAYLIST:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: m.n.PLAYLIST, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST) });
                                case u.$.ARTIST:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: m.n.ARTIST, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_ARTIST) });
                                case u.$.PODCAST:
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
                                                filter: m.n.PODCAST,
                                                variant: 'list',
                                                ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_PODCAST),
                                            }),
                                        }),
                                    });
                                case u.$.BOOK:
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
                                            children: (0, a.jsx)(C.Yi, { ...l, filter: m.n.BOOK, variant: 'list', ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_BOOK) }),
                                        }),
                                    });
                                case u.$.CLIP:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: m.n.CLIP, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_CLIP) });
                                case u.$.WAVES:
                                    return (0, a.jsx)(C.Yi, { ...l, filter: m.n.WAVE, ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_RESULTS_WAVES) });
                                case u.$.CONCERT:
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
                                            children: (0, a.jsx)(C.Yi, { ...l, filter: m.n.CONCERT }),
                                        }),
                                    });
                                default:
                                    return z;
                            }
                        }),
                        W = (0, l.useMemo)(() => {
                            if (w)
                                return (0, a.jsx)(A.FY, {
                                    className: P().carousel,
                                    carouselElement: (0, a.jsx)(A.wI, {
                                        className: P().tabs,
                                        ...e,
                                        onTabChange: U,
                                        children: L.map((t, s) =>
                                            (0, a.jsx)(A.oz, { className: (0, i.$)(P().tab, { [P().tab_selected]: s === e.value }), title: t.displayName, value: s }, s),
                                        ),
                                    }),
                                });
                        }, [L, U, e, w]);
                    return (
                        T.isNeededToLoad && w && (0, l.use)(T.getSearchResults({ text: decodeURIComponent(H), filter: t })),
                        I.isAuthorized &&
                            T.landing.isNeededToLoad &&
                            !w &&
                            (0, l.use)(T.landing.getSkeleton({ id: h.p.SEARCH, showWizard: I.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, a.jsx)(j.nVz, {
                            pageId: j._Q$.SEARCH,
                            children: (0, a.jsxs)('div', {
                                className: (0, i.$)(P().root, { [P().root_showFilters]: w }),
                                ...(0, d.Am)(d.Xk.search.SEARCH_PAGE),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: P().header,
                                        ...(0, d.Am)(d.Xk.search.SEARCH_PAGE_HEADER_CONTAINER),
                                        children: [
                                            (0, a.jsx)(S.D, {
                                                className: P().input,
                                                autoFocus: !0,
                                                initialValue: D.current,
                                                placeholder: k({ id: 'search.input-placeholder' }),
                                                onChange: V,
                                                resetButtonAriaLabel: k({ id: 'interface-actions.reset-search-input' }),
                                                correctedValue: r ? T.searchCorrectedText : null,
                                                innerInputProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT),
                                                resetButtonProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON),
                                                searchIconProps: (0, d.Am)(d.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON),
                                            }),
                                            W,
                                        ],
                                    }),
                                    (0, a.jsx)('div', {
                                        className: P().content,
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
        59442: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        65068: (e) => {
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
        68855: (e) => {
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
        71073: (e, t, s) => {
            'use strict';
            s.d(t, { SearchMixed: () => eY });
            var a = s(62936),
                i = s(79950),
                r = s(19718),
                o = s(44020),
                l = s(47480),
                c = s(33878),
                n = s(8669),
                d = s(97843),
                u = s(85761),
                m = s(49030),
                h = s(14501),
                _ = s(32632),
                x = s(42561),
                S = s(85906),
                p = s(19614),
                C = s(6937),
                j = s(90538),
                A = s(23480),
                b = s(41907),
                y = s(40559),
                v = s.n(y);
            let P = (e) => {
                let { isShimmerActive: t } = e;
                return (0, a.jsxs)('div', {
                    className: v().root,
                    children: [
                        (0, a.jsxs)('div', {
                            className: v().container,
                            children: [
                                (0, a.jsx)(S.Vt, {
                                    className: (0, i.$)(v().entity, v().important),
                                    shimmerClassName: (0, i.$)(v().cover, v().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, a.jsxs)('div', {
                                    className: v().meta,
                                    children: [
                                        (0, a.jsx)(S.nN, { textClassName: (0, i.$)(v().title, v().important), isActive: t }),
                                        (0, a.jsx)(S.nN, { textClassName: (0, i.$)(v().subtitle, v().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)('div', {
                            className: v().container,
                            children: [
                                (0, a.jsx)(S.Vt, {
                                    className: (0, i.$)(v().entity, v().important),
                                    shimmerClassName: (0, i.$)(v().cover, v().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, a.jsxs)('div', {
                                    className: v().meta,
                                    children: [
                                        (0, a.jsx)(S.nN, { textClassName: (0, i.$)(v().title, v().important), isActive: t }),
                                        (0, a.jsx)(S.nN, { textClassName: (0, i.$)(v().subtitle, v().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var k = s(9871),
                T = s.n(k),
                g = s(90914),
                E = s(19960),
                I = s.n(E),
                R = s(49362),
                N = s.n(R);
            let B = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(g.M_, { album: t, className: (0, i.$)(I().block, N().root), coverClassName: I().cover, playButtonIconSize: 'l', likeIconSize: 'xs' });
            });
            var f = s(11334),
                L = s(39228),
                O = s.n(L);
            let H = (0, r.PA)((e) => {
                let { artist: t } = e;
                return (0, a.jsx)(f.cz, {
                    artist: t,
                    className: (0, i.$)(I().block, O().root),
                    coverClassName: I().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: x._Q$.SEARCH,
                });
            });
            var M = s(81959),
                D = s(60188),
                w = s(20418),
                Y = s(66161),
                K = s(81628),
                U = s(46698),
                V = s.n(U);
            let X = (0, r.PA)((e) => {
                var t;
                let { track: s } = e,
                    { from: r } = (0, x.fyy)(),
                    { formatMessage: c } = (0, l.A)(),
                    n = { contextData: { type: M.K.Various, meta: { id: s.entityId }, from: r }, queueParams: { index: 0, entityId: s.id }, loadContextMeta: !0 },
                    d = (0, x.Dx4)({ playContextParams: n, entityId: s.entityId }),
                    u = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(S.q1, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: (0, i.$)(I().cover, V().cover),
                                alt: c({ id: 'entity-names.track-name-by-type' }, { type: (0, x.yDn)(s.type), name: s.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [c, s.coverUri, s.isAvailable, s.isDisliked, s.title, s.type],
                    ),
                    m = (0, Y.O6)({ track: s, entityType: x.nPY.AUDIOBOOK }),
                    h = (0, D.L)(() =>
                        s.url && s.isAvailable
                            ? (0, a.jsx)(S.N_, { className: (0, i.$)(S.$f.text, S.$f.titleLink), href: s.url, onClick: m, children: s.title })
                            : (0, a.jsx)(w.Caption, { className: (0, i.$)(S.$f.text, S.$f.titleText), size: 'm', variant: 'div', type: 'text', children: s.title }),
                    ),
                    _ = (0, o.useCallback)(
                        (e, t) => {
                            var i;
                            return (null == (i = s.artists) ? void 0 : i.length)
                                ? (0, a.jsx)(K.iQ, { linkClassName: e, captionClassName: t, artists: s.artists, lineClamp: 1, withLink: s.isAvailable })
                                : null;
                        },
                        [s.artists, s.isAvailable],
                    );
                return (0, a.jsx)(Y.CC, {
                    className: (0, i.$)(I().block, V().root, S.$f.root, { [S.$f.root_disabled]: !s.isAvailable }),
                    track: s,
                    meta: (0, a.jsx)(S.ro, {
                        isDisabled: !s.isAvailable,
                        version: s.version,
                        title: h,
                        artistsComponent: _,
                        getDescriptionTexts: s.getDescriptionTexts,
                        explicitMarkVariant: s.explicitDisclaimer,
                        releaseYear: (null == (t = s.mainAlbum) ? void 0 : t.isNonMusic) ? s.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(Y.QD, { track: s, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var $ = s(33782),
                z = s(66281),
                G = s(25099),
                W = s(11314),
                F = s.n(W);
            let Q = (0, r.PA)((e) => {
                let { clip: t } = e,
                    s = (0, G.df)(),
                    i = (0, o.useRef)(String((0, $.A)()));
                return s
                    ? (0, a.jsx)(z.Nk, {
                          clip: t,
                          viewUuid: i.current,
                          className: I().block,
                          coverClassName: F().cover,
                          playButtonIconSize: 'l',
                          likeIconSize: 'xs',
                          shouldShowTimecode: !0,
                      })
                    : null;
            });
            var q = s(16616),
                Z = s(54362),
                J = s.n(Z);
            let ee = (0, r.PA)((e) => {
                let { concert: t } = e,
                    s = (0, o.useRef)(String((0, $.A)())),
                    i = t.isIdentityExperimentEnabled ? q.MU : q.ub;
                return (0, a.jsx)(q.VN, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: J().root,
                    meta: (0, a.jsx)(i, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var et = s(84114),
                es = s.n(et);
            let ea = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(g.M_, {
                    album: t,
                    className: (0, i.$)(I().block, es().root),
                    coverClassName: I().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var ei = s(72786),
                er = s(83564),
                eo = s.n(er);
            let el = (0, r.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: s } = (0, l.A)();
                return (0, a.jsx)('div', {
                    className: eo().root,
                    children: (0, a.jsx)(ei.Fn, { textButton: s({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, i.$)(eo().button, eo().important) }),
                });
            });
            var ec = s(79670),
                en = s(29490),
                ed = s.n(en);
            let eu = (0, r.PA)((e) => {
                let { playlist: t } = e;
                return (0, a.jsx)(ec.vf, {
                    playlist: t,
                    className: (0, i.$)(I().block, ed().root),
                    coverClassName: I().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var em = s(65068),
                eh = s.n(em);
            let e_ = (0, r.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, x.fyy)(),
                    { formatMessage: r } = (0, l.A)(),
                    {
                        settings: { isMobile: c },
                    } = (0, x.Pjs)(),
                    d = { contextData: { type: M.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    u = (0, x.Dx4)({ playContextParams: d, entityId: t.entityId }),
                    m = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(S.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, i.$)(I().cover, eh().cover),
                                alt: r({ id: 'entity-names.track-name-by-type' }, { type: (0, x.yDn)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [r, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, a.jsx)(Y.CC, {
                    className: (0, i.$)(I().block, eh().root),
                    track: t,
                    meta: (0, a.jsx)(Y.wo, {
                        podcastMetaClassName: (0, i.$)(eh().podcastMeta, eh().important),
                        titleContainerClassName: (0, i.$)(eh().titleContainer, eh().important),
                        textClassName: (0, i.$)(eh().text, eh().important),
                        progressClassName: (0, i.$)(eh().progress, eh().important),
                        track: t,
                        playContextParams: d,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !c,
                    }),
                    playButtonCellRender: m,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(Y.QD, { track: t, utmLink: d.contextData.utmLink, likeIconSize: 'xs' }),
                    ...u,
                    ...(0, n.Am)(n.Kq.track.TRACK_PODCAST),
                });
            });
            var ex = s(26731),
                eS = s(84542),
                ep = s.n(eS);
            let eC = (0, r.PA)((e) => {
                let { album: t } = e;
                return (0, a.jsx)(g.M_, {
                    album: t,
                    className: (0, i.$)(I().block, ep().root),
                    coverClassName: I().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, a.jsx)(ex.A, { id: 'entity-names.recently-release' }),
                });
            });
            var ej = s(6162),
                eA = s.n(ej);
            let eb = (0, r.PA)((e) => {
                let { track: t } = e,
                    { from: s } = (0, x.fyy)(),
                    {
                        settings: { isMobile: r },
                    } = (0, x.Pjs)(),
                    l = { contextData: { type: M.K.Various, meta: { id: t.entityId }, from: s }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    c = (0, x.Dx4)({ playContextParams: l, entityId: t.entityId }),
                    d = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(S.q1, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, i.$)(I().cover, eA().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, a.jsx)(Y.CC, {
                    className: (0, i.$)(I().block, eA().root),
                    track: t,
                    meta: (0, a.jsx)(Y.j7, { withArtistLink: !r, track: t }),
                    playButtonCellRender: d,
                    playButtonIconSize: 'l',
                    controls: (0, a.jsx)(Y.QD, { track: t, utmLink: l.contextData.utmLink, likeIconSize: 'xs' }),
                    ...c,
                    ...(0, n.Am)(n.Kq.track.SEARCH_TRACK_CARD),
                });
            });
            var ey = s(85742),
                ev = s(56721),
                eP = s(25270),
                ek = s(59442),
                eT = s.n(ek);
            let eg = (0, r.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    { ref: s, intersectionPropertyId: r } = (0, x.nMI)(),
                    { user: c } = (0, x.Pjs)(),
                    { formatMessage: n, formatDate: d } = (0, l.A)(),
                    u = (0, eP.PL)(t),
                    m = (0, D.L)(() => {
                        let e = n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            s = t.isPresave ? n({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(s);
                    }),
                    h = (0, o.useCallback)(
                        (e, s) => {
                            var i;
                            return (null == (i = t.artists) ? void 0 : i.length)
                                ? (0, a.jsx)(K.iQ, { linkClassName: e, captionClassName: s, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, a.jsxs)(S.Cj, {
                    ref: s,
                    'data-intersection-property-id': r,
                    className: (0, i.$)(I().block, S.$f.root, eT().root, eT().important),
                    'aria-label': m,
                    children: [
                        (0, a.jsxs)(ev.Paper, {
                            className: eT().cover,
                            radius: 'xs',
                            children: [
                                (0, a.jsx)(S.BW, {
                                    className: eT().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: n({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, a.jsx)(ey.Icon, { className: eT().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, a.jsx)(S.ro, {
                            title: (0, a.jsx)(w.Caption, { className: (0, i.$)(S.$f.text, S.$f.titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, a.jsx)(w.Caption, {
                                className: eT().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, a.jsx)(ex.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: d(t.releaseDate, (0, x.sDH)()) } }),
                            }),
                            artistsComponent: h,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, a.jsx)(S.aQ, {
                            fallback: (0, a.jsx)(S.cy, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: eT().likeButton,
                                isLiked: t.isPresave,
                                onClick: u,
                                disabled: !c.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var eE = s(51606),
                eI = s(30),
                eR = s.n(eI);
            let eN = (0, r.PA)((e) => {
                    var t;
                    let { vibe: s } = e;
                    return (0, a.jsx)(_.H2, {
                        className: (0, i.$)(eR().root, eR().important),
                        coverClassName: (0, i.$)(eR().coverClassName, eR().important),
                        playButtonIconSize: 'l',
                        vibe: s,
                        cover: (0, eE.wg)({ uri: s.backgroundImageUrl, color: null == (t = s.colors) ? void 0 : t.average }),
                        description: s.description,
                        agentVariant: _.hl.LARGE,
                    });
                }),
                eB = (0, r.PA)((e) => {
                    let { results: t, isShimmerVisible: s, isShimmerActive: r, blockPosition: c, sendSearchFeedback: d } = e,
                        { formatMessage: m } = (0, l.A)(),
                        { experiments: h } = (0, x.Pjs)(),
                        _ = h.checkExperiment(x.zal.disableAllConcerts, 'on'),
                        S = (0, o.useCallback)(
                            (e, s) => {
                                switch (e.type) {
                                    case u.r.ALBUM:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: b.o.ALBUM, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(B, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.PLAYLIST:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: b.o.PLAYLIST, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(eu, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.RECENT_RELEASE:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: b.o.ALBUM, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(eC, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.WAVE:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.seedsId, type: b.o.WAVE, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(eN, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case u.r.ARTIST:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Artist,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: b.o.ARTIST, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(H, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.UPCOMING:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(eg, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.CONCERT:
                                        if (_) return null;
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Concert,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(ee, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.PODCAST:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: b.o.ALBUM, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(ea, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.NON_MUSIC:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(ea, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.PODCAST_EPISODE:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(e_, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.OVERVIEW:
                                        return (0, a.jsx)(el, { data: e.data }, e.type);
                                    case u.r.TRACK:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Track,
                                                objectId: e.data.id,
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.entityId, type: b.o.TRACK, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(eb, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case u.r.CLIP:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(x.NYB.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.clipId, type: b.o.CLIP, blockPosition: c, position: s },
                                                    children: (0, a.jsx)(Q, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case u.r.BOOK_CHAPTER:
                                        return (0, a.jsx)(
                                            x.Bki,
                                            {
                                                objectType: A.ky.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: s + 1,
                                                objectPosY: 1,
                                                objectsCount: t.length,
                                                children: (0, a.jsx)(X, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [c, _, t.length, d],
                        ),
                        p = (0, o.useMemo)(() => t.map((e, t) => S(e, t)).filter((e) => (0, o.isValidElement)(e)), [S, t, t.length]);
                    return s
                        ? (0, a.jsx)(P, { isShimmerActive: r })
                        : p.length
                          ? (0, a.jsx)(x.FoH, {
                                blockId: x.hf$.SEARCH_BEST_RESULTS,
                                blockType: x.hf$.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: p.length,
                                children: (0, a.jsx)('div', {
                                    className: (0, i.$)(T().root, { [T().root_withSingleResult]: 1 === p.length }),
                                    role: 'group',
                                    'aria-label': m({ id: 'search-results.best' }),
                                    ...(0, n.Am)(n.e8.search.SEARCH_BEST_RESULTS),
                                    children: p,
                                }),
                            })
                          : null;
                });
            var ef = s(32447),
                eL = s(42856);
            let eO = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: s = [],
                            title: i,
                            sendSearchFeedback: r,
                            blockPosition: o = 0,
                            containerClassName: l,
                            headerClassName: n,
                            className: u,
                            itemClassName: m,
                            isShimmerVisible: h,
                            isShimmerActive: p,
                            isClipBlock: C,
                            ...j
                        } = e,
                        { search: A } = (0, x.Pjs)(),
                        y = (0, G.df)(),
                        v = s.filter((e) => e.type !== d.n.PODCAST_EPISODE);
                    return (A.isResolved && 0 === v.length) || (C && !y)
                        ? null
                        : (0, a.jsx)(S.OY, {
                              isShimmerVisible: h,
                              isShimmerActive: p,
                              className: u,
                              containerClassName: l,
                              headerClassName: n,
                              showHeaderShimmer: !0,
                              title: i,
                              ref: t,
                              ...(0, c.getDataAttrFromProps)(j),
                              itemClassName: m,
                              children: v.map((e, t) => {
                                  switch (e.type) {
                                      case d.n.ALBUM:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: b.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(g.aX, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case d.n.ARTIST:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: b.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(f.ao, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case d.n.PLAYLIST:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: b.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(ec.B6, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case d.n.UGC_TRACK:
                                      case d.n.TRACK:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: r,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: b.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, a.jsx)(Y.wO, { track: e.data, overrideContextType: eL.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case d.n.CLIP:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.clipId, type: b.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(z.FC, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case d.n.PODCAST:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.id, type: b.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, a.jsx)(g.aX, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case d.n.WAVE:
                                          return (0, a.jsx)(
                                              x.NYB.Provider,
                                              {
                                                  value: { sendSearchFeedback: r, id: e.data.stationId, type: b.o.WAVE, blockPosition: 0, position: t },
                                                  children: (0, a.jsx)(_.H2, {
                                                      vibe: e.data,
                                                      cover: e.data.cover,
                                                      description: e.data.description,
                                                      agentVariant: _.hl.SMALL,
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                eH = (0, o.forwardRef)((e, t) => (0, a.jsx)(eO, { forwardRef: t, ...e }));
            var eM = s(98939),
                eD = s.n(eM);
            let ew = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: r,
                            bestResults: A,
                            sendSearchFeedback: b,
                            searchCorrectedText: y,
                            isShimmerVisible: v,
                            isShimmerActive: P,
                            q2vResults: k,
                            ...T
                        } = e,
                        { formatMessage: g } = (0, l.A)(),
                        E = (0, _.fp)(),
                        { isVisible: I, vibe: R } = (0, C.useSearchQueryToVibeVisibility)(k, P),
                        N = (0, o.useMemo)(() => {
                            let e = {
                                [d.n.ALL]: { message: g({ id: 'search-results.best' }), type: d.n.ALL, items: [] },
                                [d.n.ARTIST]: { message: g({ id: 'search-results.artist' }), type: d.n.ARTIST, items: [] },
                                [d.n.PODCAST]: { message: g({ id: 'search-results.podcasts-and-books' }), type: d.n.PODCAST, items: [] },
                                [d.n.ALBUM]: { message: g({ id: 'search-results.album' }), type: d.n.ALBUM, items: [] },
                                [d.n.PLAYLIST]: { message: g({ id: 'search-results.playlist' }), type: d.n.PLAYLIST, items: [] },
                                [d.n.CLIP]: { message: g({ id: 'search-results.clip' }), type: d.n.CLIP, items: [] },
                            };
                            r.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var s, a;
                                    null == (s = e[t.type]) || s.items.push(t), null == (a = e[d.n.ALL]) || a.items.push(t);
                                }
                            });
                            let t = {
                                [d.n.ARTIST]: n.e8.search.SEARCH_MIXED_ARTIST,
                                [d.n.PODCAST]: n.e8.search.SEARCH_MIXED_PODCAST,
                                [d.n.ALBUM]: n.e8.search.SEARCH_MIXED_ALBUM,
                                [d.n.PLAYLIST]: n.e8.search.SEARCH_MIXED_PLAYLIST,
                                [d.n.CLIP]: n.e8.search.SEARCH_MIXED_CLIP,
                                [u.r.PODCAST]: n.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [u.r.OVERVIEW]: n.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [u.r.PODCAST_EPISODE]: n.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [u.r.NON_MUSIC]: n.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((s, i) => {
                                let r = e[s],
                                    l = r.type === d.n.CLIP;
                                if (r.type === d.n.ALL) {
                                    let e = r.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: o,
                                            } = (0, x.$tp)({ index: t, count: r.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, p.G)({
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: b,
                                                blockPosition: i,
                                                objectPosX: s,
                                                objectPosY: a,
                                                objectsCount: o,
                                            });
                                        })
                                        .filter((e) => (0, o.isValidElement)(e));
                                    return (0, a.jsxs)(
                                        o.Fragment,
                                        {
                                            children: [
                                                (0, a.jsx)(eB, { results: A, isShimmerVisible: v, isShimmerActive: P, blockPosition: i, sendSearchFeedback: b }),
                                                (0, a.jsx)(x.FoH, {
                                                    blockId: x.hf$.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: x.hf$.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, a.jsx)(j.k, {
                                                        containerClassName: eD().blockMixed,
                                                        className: eD().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': g({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: v,
                                                        isShimmerActive: P,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        i,
                                    );
                                }
                                let c = t[r.type],
                                    u = c ? (0, n.Am)(c) : {};
                                return (0, a.jsx)(
                                    eH,
                                    {
                                        className: eD().block,
                                        headerClassName: eD().blockHeader,
                                        containerClassName: eD().blockCarousel,
                                        blockPosition: i,
                                        items: r.items,
                                        title: r.message,
                                        sendSearchFeedback: b,
                                        isShimmerVisible: v,
                                        isShimmerActive: P,
                                        isClipBlock: l,
                                        ...u,
                                    },
                                    i,
                                );
                            });
                        }, [g, r, b, v, P, A]);
                    return (0, a.jsxs)(h.N, {
                        className: (0, i.$)(eD().root, s),
                        containerClassName: eD().container,
                        ref: t,
                        ...(0, c.getDataAttrFromProps)(T),
                        children: [
                            (0, a.jsxs)('div', {
                                className: eD().content,
                                children: [
                                    y && (0, a.jsx)('div', { className: eD().correctedTextBlock, children: y }),
                                    E && I && (0, a.jsx)(ef.SearchQueryToVibeResults, { vibe: R }),
                                    (0, a.jsx)(x.hjC, {
                                        tabId: m.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: (0, a.jsx)('div', { className: eD().items, children: N }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(S.A, { children: (0, a.jsx)(S.wi, { className: eD().footer }) }),
                        ],
                    });
                }),
                eY = (0, o.forwardRef)((e, t) => (0, a.jsx)(ew, { forwardRef: t, ...e }));
        },
        71240: (e) => {
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
        83564: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        84114: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        84542: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        85761: (e, t, s) => {
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
        86224: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        87852: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        89084: (e, t, s) => {
            'use strict';
            s.d(t, { SearchEntities: () => M });
            var a = s(62936),
                i = s(79950),
                r = s(19718),
                o = s(44020),
                l = s(23480),
                c = s(33878),
                n = s(81959),
                d = s(42856),
                u = s(97843),
                m = s(41907),
                h = s(59935),
                _ = s(60188),
                x = s(14501),
                S = s(90914),
                p = s(11334),
                C = s(66281),
                j = s(79670),
                A = s(66161),
                b = s(99041),
                y = s(32632),
                v = s(42561),
                P = s(85906),
                k = s(45338);
            let T = {
                entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
            };
            var g = s(6937),
                E = s(33782),
                I = s(16616),
                R = s(87852),
                N = s.n(R);
            let B = (0, r.PA)((e) => {
                let { concert: t } = e,
                    s = (0, o.useRef)(String((0, E.A)())),
                    i = t.isIdentityExperimentEnabled ? I.MU : I.wP;
                return (0, a.jsx)(I.VN, {
                    artistId: null,
                    viewUuid: s.current,
                    concert: t,
                    radius: 's',
                    className: N().root,
                    meta: (0, a.jsx)(i, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var f = s(32447),
                L = s(6459),
                O = s.n(L);
            let H = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: s,
                            results: r,
                            filter: E,
                            variant: I = 'grid',
                            sendSearchFeedback: R,
                            searchCorrectedText: N,
                            isShimmerVisible: L,
                            getDataByRange: H,
                            requestsCount: M,
                            q2vResults: D,
                            isShimmerActive: w,
                            ...Y
                        } = e,
                        { experiments: K } = (0, v.Pjs)(),
                        U = (0, y.fp)(),
                        { isVisible: V, vibe: X } = (0, g.useSearchQueryToVibeVisibility)(D, w),
                        $ = U && V && E === u.n.WAVE,
                        z = ((e) => (e === u.n.CLIP ? T.clip : e === u.n.CONCERT ? T.concert : T.entity))(E),
                        G = (0, h.c)(() => 56),
                        W = (0, h.c)(() => z.estimateRowSize),
                        F = (0, v.wZZ)(),
                        Q = (() => {
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
                        { from: q } = (0, v.fyy)({ pageId: v._Q$.SEARCH }),
                        Z = (0, o.useCallback)(
                            (e) => {
                                let t = r[e];
                                if (!t)
                                    return 'list' === I
                                        ? (0, a.jsx)(P.DS, { variant: v.Xjt.PLAYLIST, isActive: !0 })
                                        : E === u.n.CONCERT
                                          ? (0, a.jsx)(P.WO, { isShimmerActive: !0, className: O().concertShimmer })
                                          : E === u.n.ARTIST
                                            ? (0, a.jsx)(P.Vt, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : E === u.n.WAVE
                                              ? K.checkExperiment(v.zal.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, a.jsx)(P.Vt, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, a.jsx)(P.Vt, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : E === u.n.PLAYLIST
                                                ? (0, a.jsx)(P.Vt, { linesCount: 2, isActive: !0 })
                                                : E === u.n.CLIP
                                                  ? (0, a.jsx)(P.Vt, { linesCount: 2, shimmerClassName: O().video, isActive: !0 })
                                                  : (0, a.jsx)(P.Vt, { className: O().entityCardShimmer, isActive: !0, shimmerClassName: E === u.n.CLIP && O().video });
                                switch (t.type) {
                                    case u.n.ALBUM:
                                        return (0, a.jsx)(
                                            v.NYB.Provider,
                                            {
                                                value: Q(t.data.id, { sendSearchFeedback: R, id: t.data.id, type: m.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(S.aX, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.PLAYLIST:
                                        return (0, a.jsx)(
                                            v.NYB.Provider,
                                            {
                                                value: Q(t.data.id, { sendSearchFeedback: R, id: t.data.id, type: m.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(j.B6, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.ARTIST:
                                        return (0, a.jsx)(
                                            v.NYB.Provider,
                                            {
                                                value: Q(t.data.id, { sendSearchFeedback: R, id: t.data.id, type: m.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(p.ao, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.PODCAST:
                                        return (0, a.jsx)(
                                            v.Bki,
                                            {
                                                objectType: l.ky.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(v.NYB.Provider, {
                                                    value: Q(t.data.id, { sendSearchFeedback: R, id: t.data.id, type: m.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, a.jsx)(S.M_, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.CLIP:
                                        return (0, a.jsx)(
                                            v.NYB.Provider,
                                            {
                                                value: Q(t.data.clipId, { sendSearchFeedback: R, id: t.data.clipId, type: m.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, a.jsx)(C.FC, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case u.n.WAVE:
                                        if (!K.checkExperiment(v.zal.WebNextWaveAgentExperiment, 'on'))
                                            return (0, a.jsx)(
                                                v.NYB.Provider,
                                                {
                                                    value: Q(t.data.stationId, {
                                                        sendSearchFeedback: R,
                                                        id: t.data.stationId,
                                                        type: m.o.WAVE,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, a.jsx)(y.Zn, { vibe: t.data }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, a.jsx)(
                                            v.NYB.Provider,
                                            {
                                                value: Q(t.data.stationId, {
                                                    sendSearchFeedback: R,
                                                    id: t.data.stationId,
                                                    type: m.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, a.jsx)(y.yi, { vibe: t.data }),
                                            },
                                            t.data.stationId,
                                        );
                                    case u.n.CONCERT:
                                        return (0, a.jsx)(
                                            v.Bki,
                                            {
                                                objectType: l.ky.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(B, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.TRACK:
                                    case u.n.UGC_TRACK:
                                        return (0, a.jsx)(
                                            v.Bki,
                                            {
                                                objectType: l.ky.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(v.NYB.Provider, {
                                                    value: Q(t.data.entityId, {
                                                        sendSearchFeedback: R,
                                                        id: t.data.entityId,
                                                        type: m.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, a.jsx)(A.c8, {
                                                        track: t.data,
                                                        playContextParams: F(t.data.entityId, {
                                                            contextData: { type: n.K.Various, meta: { id: t.data.entityId }, from: q, overrideContextType: d.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case u.n.PODCAST_EPISODE:
                                        return (0, a.jsx)(
                                            v.Bki,
                                            {
                                                objectType: l.ky.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                objectsCount: r.length,
                                                children: (0, a.jsx)(A.c8, {
                                                    track: t.data,
                                                    playContextParams: F(t.data.entityId, {
                                                        contextData: { type: n.K.Various, meta: { id: t.data.entityId }, from: q, overrideContextType: d.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [r, I, E, K, Q, R, F, q, M],
                        ),
                        J = (0, _.L)(() => (L ? r.length + k.k : r.length)),
                        ee = (0, _.L)(() =>
                            'list' === I
                                ? (0, a.jsx)(b.wj, { count: J, getEstimateRowSize: G, renderItemByIndex: Z, onChangeRange: H })
                                : (0, a.jsx)(b.Q$, {
                                      count: J,
                                      rowGap: z.rowGap,
                                      columnGap: z.columnGap,
                                      getEstimateRowSize: W,
                                      minColumnCount: z.minColumnCount,
                                      minColumnWidth: z.minColumnWidth,
                                      maxColumnWidth: z.maxColumnWidth,
                                      maxColumnCount: z.maxColumnCount,
                                      renderItemByIndex: Z,
                                      onChangeRange: H,
                                  }),
                        );
                    return (0, a.jsxs)(x.N, {
                        className: (0, i.$)(O().root, s),
                        containerClassName: O().container,
                        ref: t,
                        ...(0, c.getDataAttrFromProps)(Y),
                        children: [
                            (0, a.jsxs)('div', {
                                children: [
                                    N && (0, a.jsx)('div', { className: O().correctedTextBlock, children: N }),
                                    $ && (0, a.jsx)(f.SearchQueryToVibeResults, { className: O().queryToVibe, vibe: X }),
                                    ee,
                                ],
                            }),
                            (0, a.jsx)(P.A, { children: (0, a.jsx)(P.wi, { className: O().footer }) }),
                        ],
                    });
                }),
                M = (0, o.forwardRef)((e, t) => (0, a.jsx)(H, { forwardRef: t, ...e }));
        },
        90538: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => b });
            var a = s(62936),
                i = s(79950),
                r = s(49696),
                o = s(44020),
                l = s(8669),
                c = s(21153),
                n = s(85906),
                d = s(47480),
                u = s(30388),
                m = s(1163),
                h = s.n(m);
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
                                (0, a.jsx)(u.Shimmer, { className: h().cover, radius: 's', isActive: r }),
                                (0, a.jsxs)('div', {
                                    className: h().textContainer,
                                    children: [
                                        (0, a.jsx)(u.Shimmer, { className: h().title, radius: 's', isActive: r }),
                                        (0, a.jsx)(u.Shimmer, { className: h().description, radius: 's', isActive: r }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsx)(u.Shimmer, { className: h().action, radius: 's', isActive: r }),
                    ],
                });
            };
            var x = s(37743),
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
            var C = s(86224),
                j = s.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            title: s,
                            description: d,
                            viewAllAction: u,
                            coverUrl: m,
                            children: h,
                            className: _,
                            maxColumns: x = 2,
                            itemsPerColumn: S = 3,
                            containerClassName: C,
                            headerClassName: A,
                            titleSize: b,
                            showControls: y,
                            isShimmerVisible: v,
                            isShimmerActive: P,
                        } = e,
                        k = (0, o.useRef)(null),
                        T = (0, o.useId)(),
                        { items: g, columnLength: E } = (0, o.useMemo)(() => {
                            if (v)
                                return {
                                    columnLength: x,
                                    items: Array.from({ length: x }, (e, t) =>
                                        (0, a.jsx)('div', { className: j().column, children: (0, a.jsx)(p, { shimmersCount: 3, isShimmerActive: P }) }, t),
                                    ),
                                };
                            let e = (0, r.A)(h, S).slice(0, (null == h ? void 0 : h.length) ? Math.ceil(h.length / S) : x);
                            return { items: e.map((e, t) => (0, a.jsx)('div', { className: j().column, children: e }, t)), columnLength: e.length };
                        }, [h, P, v, S, x]);
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
                                coverUrl: m,
                                viewAllActionLink: u,
                                titleSize: b,
                                controls: y && (0, a.jsx)(n.X9, { className: j().controls, carouselRef: k }),
                                withDescription: !!d,
                            }),
                            (0, a.jsx)(c.Carousel, {
                                className: C,
                                ref: k,
                                itemClassName: (0, i.$)(j().item, { [j().item_withMultipleColumns]: E > 1 }),
                                'aria-labelledby': T,
                                role: 'group',
                                children: g,
                            }),
                        ],
                    });
                },
                b = (0, o.forwardRef)((e, t) => (0, a.jsx)(A, { forwardRef: t, ...e }));
        },
        93461: (e, t, s) => {
            'use strict';
            s.d(t, { SearchHistoryNotFoundPage: () => o });
            var a = s(62936),
                i = s(19718),
                r = s(9939);
            let o = (0, i.PA)(() => (0, a.jsx)(r.M, {}));
        },
        93611: (e) => {
            e.exports = { root: 'SearchQueryToVibeResults_root__fsXQh' };
        },
        97231: (e, t, s) => {
            'use strict';
            s.d(t, { SearchEmpty: () => x });
            var a = s(62936),
                i = s(79950),
                r = s(44020),
                o = s(47480),
                l = s(8669),
                c = s(85742),
                n = s(14501),
                d = s(20418),
                u = s(85906),
                m = s(68855),
                h = s.n(m);
            let _ = (e) => {
                    let { forwardRef: t, className: s, searchCorrectedText: r } = e,
                        { formatMessage: m } = (0, o.A)();
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
                                        children: m({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, a.jsx)(d.Caption, {
                                        className: h().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        ...(0, l.Am)(l.e8.search.SEARCH_EMPTY_DESCRIPTION),
                                        children: m({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(u.A, { children: (0, a.jsx)(u.wi, { className: h().footer }) }),
                        ],
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        97282: (e, t, s) => {
            'use strict';
            s.d(t, {
                T: () => a.T,
                T_: () => a.k,
                xo: () => V,
                tn: () => X.SearchCorrectedText,
                qz: () => $.SearchEmpty,
                Yi: () => z.SearchEntities,
                k1: () => l,
                _K: () => G.SearchHistoryBlock,
                jU: () => E,
                kp: () => W.SearchMixed,
                Gw: () => i.G,
                t9: () => r.useClearHistory,
            });
            var a = s(45338),
                i = s(19614),
                r = s(6463);
            s(6937);
            var o = s(51606);
            let l = o.gK.model('SearchFilter', { id: o.gK.string, displayName: o.gK.string });
            var c = s(97843),
                n = s(85761),
                d = s(90914),
                u = s(66281),
                m = s(72786),
                h = s(79670),
                _ = s(66161),
                x = s(81628),
                S = s(16616),
                p = s(32632);
            let C = o.gK.model('SearchAlbum', { type: o.gK.literal(c.n.ALBUM), data: d.JC }),
                j = o.gK.model('SearchPlaylist', { type: o.gK.literal(c.n.PLAYLIST), data: h.IP }),
                A = o.gK.model('SearchArtist', { type: o.gK.literal(c.n.ARTIST), data: x.PK }),
                b = o.gK.model('SearchUgcTrack', { type: o.gK.literal(c.n.UGC_TRACK), data: _.kK }),
                y = o.gK.model('SearchTrack', { type: o.gK.literal(c.n.TRACK), data: _.vj }),
                v = o.gK.model('SearchVibe', { type: o.gK.literal(c.n.WAVE), data: p.Gh }),
                P = o.gK.model('SearchPodcast', { type: o.gK.literal(c.n.PODCAST), data: d.JC }),
                k = o.gK.model('SearchPodcastEpisode', { type: o.gK.literal(c.n.PODCAST_EPISODE), data: _.vj }),
                T = o.gK.model('SearchClip', { type: o.gK.literal(c.n.CLIP), data: u.kv }),
                g = o.gK.model('SearchConcert', { type: o.gK.literal(c.n.CONCERT), data: S.aR }),
                E = o.gK.union(C, j, A, y, b, v, P, k, T, g),
                I = o.gK.model('SearchBestVibe', { type: o.gK.literal(n.r.WAVE), data: p.Gh }),
                R = o.gK.model('SearchBestPlaylist', { type: o.gK.literal(n.r.PLAYLIST), data: h.IP }),
                N = o.gK.model('SearchBestArtist', { type: o.gK.literal(n.r.ARTIST), data: x.PK }),
                B = o.gK.model('SearchBestPresave', { type: o.gK.literal(n.r.UPCOMING), data: d.VH }),
                f = o.gK.model('SearchBestAlbum', { type: o.gK.literal(n.r.ALBUM), data: d.JC }),
                L = o.gK.model('SearchBestRecentRelease', { type: o.gK.literal(n.r.RECENT_RELEASE), data: d.JC }),
                O = o.gK.model('SearchBestConcert', { type: o.gK.literal(n.r.CONCERT), data: S.aR }),
                H = o.gK.model('SearchBestTrack', { type: o.gK.literal(n.r.TRACK), data: _.vj }),
                M = o.gK.model('SearchBestPodcast', { type: o.gK.literal(n.r.PODCAST), data: d.JC }),
                D = o.gK.model('SearchBestPodcastEpisode', { type: o.gK.literal(n.r.PODCAST_EPISODE), data: _.vj }),
                w = o.gK.model('SearchBestOverview', { type: o.gK.literal(n.r.OVERVIEW), data: m.kv }),
                Y = o.gK.model('SearchBestNonMusic', { type: o.gK.literal(n.r.NON_MUSIC), data: d.JC }),
                K = o.gK.model('SearchBestClip', { type: o.gK.literal(n.r.CLIP), data: u.kv }),
                U = o.gK.model('SearchBestBookChapter', { type: o.gK.literal(n.r.BOOK_CHAPTER), data: _.vj }),
                V = o.gK.union(f, L, I, N, O, H, M, D, w, Y, B, R, K, U);
            var X = s(57627),
                $ = s(97231),
                z = s(89084),
                G = s(18651),
                W = s(71073);
            s(32447);
        },
        97843: (e, t, s) => {
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
        98794: (e, t, s) => {
            'use strict';
            s.d(t, { MixesGrid: () => _ });
            var a = s(62936),
                i = s(79950),
                r = s(19718),
                o = s(44020),
                l = s(26731),
                c = s(8669),
                n = s(20418),
                d = s(3765),
                u = s(85906),
                m = s(47744),
                h = s.n(m);
            let _ = (0, r.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: s, withTitle: r, mixes: m, shimmerCount: _ = 5, className: x } = e,
                    S = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, a.jsx)(u.eI, { isActive: s, round: !1, centered: !1, withInfo: !1, count: _ })
                                : m.map((e) => (0, a.jsx)(d.NZ, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [s, t, m, _],
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
        98939: (e) => {
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
    },
]);
