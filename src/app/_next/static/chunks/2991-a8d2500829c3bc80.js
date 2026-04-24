(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2991],
    {
        440: (e) => {
            e.exports = {
                root: 'ContinueListenTrack_root__JFzVe',
                cover: 'ContinueListenTrack_cover__E5zob',
                important: 'ContinueListenTrack_important__4_84V',
                metaTrack: 'ContinueListenTrack_metaTrack__hSIYC',
                content: 'ContinueListenTrack_content__xU2R9',
                textContainer: 'ContinueListenTrack_textContainer__zisLi',
                titleIcon: 'ContinueListenTrack_titleIcon__smcf_',
                title: 'ContinueListenTrack_title__LBdpD',
                explicitMark: 'ContinueListenTrack_explicitMark___eXOa',
                metaContainer: 'ContinueListenTrack_metaContainer__Yoo2N',
                playButton: 'ContinueListenTrack_playButton__5tT4s',
                progress: 'ContinueListenTrack_progress__CfJQP',
                fullCircle: 'ContinueListenTrack_fullCircle__xrROh',
                progressCircle: 'ContinueListenTrack_progressCircle__msDye',
            };
        },
        1333: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        1755: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        2165: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        3481: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        3585: (e) => {
            e.exports = {
                root: 'MapBlock_root__lcL__',
                heading: 'MapBlock_heading__20gje',
                linkContainer: 'MapBlock_linkContainer__iO0dw',
                mapImage: 'MapBlock_mapImage__Qch0h',
                addressContainer: 'MapBlock_addressContainer__gFnzq',
                address: 'MapBlock_address__UofT6',
                metroStations: 'MapBlock_metroStations__T3Zpc',
            };
        },
        3765: (e, t, a) => {
            'use strict';
            a.d(t, { NZ: () => o.MixCard, f: () => r, Ju: () => l });
            var i = a(51606);
            let l = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
            var s = a(29042);
            let r = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(s.R)),
            });
            var o = a(74351);
        },
        4237: (e) => {
            e.exports = {
                root_withControls: 'CollectionAlbumsPresaves_root_withControls__qE_u_',
                controls: 'CollectionAlbumsPresaves_controls__8twKX',
                header: 'CollectionAlbumsPresaves_header__1flkp',
                important: 'CollectionAlbumsPresaves_important__EkdBU',
                tab: 'CollectionAlbumsPresaves_tab__V6yvN',
                tabShimmer: 'CollectionAlbumsPresaves_tabShimmer__T6w2W',
                tabCarousel: 'CollectionAlbumsPresaves_tabCarousel__hobTn',
                tabPanel: 'CollectionAlbumsPresaves_tabPanel__ZHz6v',
                carouselEmpty: 'CollectionAlbumsPresaves_carouselEmpty__8szhR',
                item: 'CollectionAlbumsPresaves_item__to1P9',
            };
        },
        6229: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        8703: (e) => {
            e.exports = {
                root: 'VibesAgent_root__vZxtE',
                controls: 'VibesAgent_controls__6jNJF',
                header: 'VibesAgent_header__PrZP3',
                important: 'VibesAgent_important__5yfOt',
                tab: 'VibesAgent_tab__Wwcd_',
                tabShimmer: 'VibesAgent_tabShimmer__TnlQU',
                tabCarousel: 'VibesAgent_tabCarousel__q__hc',
                item: 'VibesAgent_item__UBIWG',
            };
        },
        10129: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        10945: (e, t, a) => {
            'use strict';
            a.d(t, { useClipDisclaimer: () => l });
            var i = a(42561);
            let l = (e) => {
                let { clip: t, callback: a, disclaimerRejectHandler: l } = e;
                return (0, i.lVe)({ entity: t, callback: a, onReject: l, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        14877: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        15304: (e) => {
            e.exports = {
                root: 'NewRelease_root__W0T4a',
                image: 'NewRelease_image__Vw6_k',
                cover: 'NewRelease_cover__EVFNR',
                coverImage: 'NewRelease_coverImage__9x6Uk',
                card: 'NewRelease_card__yn06x',
                fade: 'NewRelease_fade__rVE0_',
                artists: 'NewRelease_artists__wGTaP',
                artistLink: 'NewRelease_artistLink__CO3Zn',
                artistCaption: 'NewRelease_artistCaption__1F8A9',
                trailerButton: 'NewRelease_trailerButton__OYAW6',
                descriptionContainer: 'NewRelease_descriptionContainer__g56GG',
            };
        },
        15545: (e, t, a) => {
            'use strict';
            a.d(t, { ClipsCarousel: () => _ });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(44020),
                o = a(33878),
                n = a(85906),
                d = a(67239),
                c = a.n(d),
                m = a(51089);
            let u = (0, s.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: a,
                            carouselItemClassName: s,
                            forwardRef: d,
                            isShimmerVisible: u,
                            isShimmerActive: _,
                            title: p,
                            description: g,
                            containerClassName: v,
                            headerClassName: b,
                            viewAllActionLink: C,
                            artistIdWithoutLink: A,
                            withVideo: T = !0,
                            clips: I,
                            headingVariant: h,
                            className: L,
                            shouldOpenModalOnCardClick: y = !0,
                            itemCounter: S,
                            ...N
                        } = e,
                        E = (0, r.useId)(),
                        x = (0, r.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, l.$)(c().root, L),
                        ref: d,
                        ...(0, o.getDataAttrFromProps)(N),
                        children: [
                            (0, i.jsx)(n.Tw, {
                                className: b,
                                labeledForId: E,
                                title: p,
                                description: g,
                                viewAllActionLink: C,
                                controls: (0, i.jsx)(n.X9, { className: c().controls, carouselRef: x }),
                                headingVariant: h,
                                withDescription: !!g,
                            }),
                            (0, i.jsx)(m.ClipsCarouselContent, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: a,
                                carouselItemClassName: s,
                                isShimmerVisible: u,
                                isShimmerActive: _,
                                containerClassName: v,
                                artistIdWithoutLink: A,
                                withVideo: T,
                                clips: I,
                                shouldOpenModalOnCardClick: y,
                                itemCounter: S,
                                ref: x,
                                'aria-labelledby': E,
                            }),
                        ],
                    });
                }),
                _ = (0, r.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        17389: (e, t, a) => {
            'use strict';
            a.d(t, { MixesGridBlock: () => p });
            var i = a(62936),
                l = a(79950),
                s = a(44020),
                r = a(23480),
                o = a(33878),
                n = a(26427),
                d = a(42561),
                c = a(85906),
                m = a(90061),
                u = a.n(m);
            let _ = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            headerClassName: m,
                            meta: _,
                            data: p,
                            headingVariant: g,
                            isShimmerActive: v,
                            containerClassName: b,
                            isShimmerVisible: C,
                            className: A,
                            ...T
                        } = e,
                        I = (0, s.useId)(),
                        h = (0, s.useMemo)(() => {
                            if (C) {
                                var e;
                                return (0, i.jsx)(c.eI, {
                                    itemClassName: (0, l.$)(u().item, u().important, u().shimmerWithSubcover),
                                    isActive: v,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = _.source) ? void 0 : e.count,
                                });
                            }
                            return null == p
                                ? void 0
                                : p.items.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: p.items.length,
                                              children: (0, i.jsx)(
                                                  n.Vf,
                                                  {
                                                      linkClassName: (0, l.$)(u().item, u().important),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: 'h3',
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [v, C, null == p ? void 0 : p.items, null == (t = _.source) ? void 0 : t.count]);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: A,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: (0, l.$)(u().header, m),
                                labeledForId: I,
                                title: _.title,
                                viewAllActionLink: _.viewAllActionLink,
                                headingVariant: g,
                            }),
                            (0, i.jsx)('div', { className: (0, l.$)(u().mixesGrid, b), children: h }),
                        ],
                    });
                },
                p = (0, s.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        17637: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var i = a(63854);
            let l = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                s = (e) => l.includes(e.type);
        },
        18125: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        19726: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        20621: (e) => {
            e.exports = {
                root: 'SearchHistory_root__0z_bV',
                fallback: 'SearchHistory_fallback____oTN',
                button: 'SearchHistory_button__LBJeT',
                content: 'SearchHistory_content__wSN8E',
            };
        },
        21278: (e) => {
            e.exports = {
                content: 'ContinueListenBaseItem_content__Rdrbh',
                root: 'ContinueListenBaseItem_root__FH7Jk',
                root_bookshelf: 'ContinueListenBaseItem_root_bookshelf__cKQqb',
                root_newEpisodes: 'ContinueListenBaseItem_root_newEpisodes__OTZgU',
                root_withLastPlayed: 'ContinueListenBaseItem_root_withLastPlayed__1Z2P5',
                title: 'ContinueListenBaseItem_title__vvDta',
                root_withCovers: 'ContinueListenBaseItem_root_withCovers__Y4w7V',
                link: 'ContinueListenBaseItem_link__3xuh7',
                textContainer: 'ContinueListenBaseItem_textContainer__1nvoM',
                titleIcon: 'ContinueListenBaseItem_titleIcon__4lGcT',
                subtitle: 'ContinueListenBaseItem_subtitle__jFLLT',
                covers: 'ContinueListenBaseItem_covers__bCLfi',
                coverContainer: 'ContinueListenBaseItem_coverContainer__qdnAa',
                cover: 'ContinueListenBaseItem_cover__gSp5J',
            };
        },
        22363: (e) => {
            e.exports = {
                root: 'Concert_root__INQJc',
                cover: 'Concert_cover__POyDO',
                index: 'Concert_index__cPRuN',
                meta: 'Concert_meta__s_lsH',
                textContainer: 'Concert_textContainer__50dZP',
                date: 'Concert_date__3xwWB',
                info: 'Concert_info__viObm',
                concertTitle: 'Concert_concertTitle__kngHo',
                description: 'Concert_description__JTZtZ',
                descriptionContainer: 'Concert_descriptionContainer__cPF3d',
                cashback: 'Concert_cashback__b7feO',
                title: 'Concert_title__tX2Mj',
            };
        },
        22991: (e, t, a) => {
            'use strict';
            a.d(t, {
                bX: () => aH.BlockEntities,
                Qh: () => aG.EntitiesCarousel,
                F6: () => w,
                RO: () => S,
                hn: () => ee,
                SQ: () => h,
                Ju: () => aU,
                h9: () => V,
                Od: () => U,
                qh: () => aY.MixesGridBlock,
                zt: () => aW.S,
                tl: () => aX.t,
                nM: () => aF.Promotions,
                fv: () => M,
                g0: () => az.g,
                EA: () => a$.Skeleton,
                Rj: () => aQ.R,
                Ds: () => v,
                _9: () => s,
                dF: () => _,
                vj: () => A,
                vI: () => I,
            });
            var i,
                l = a(63854);
            let s = (e) => {
                var t, a, i, s;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks) ? void 0 : t.length) === 1 &&
                    (null == (s = e.tabs.data[0]) || null == (i = s.blocks[0]) ? void 0 : i.type) === l.t.WIZARD
                );
            };
            var r = a(51606),
                o = a(92496),
                n = a(90914);
            let d = (e, t, a, i) => ({ type: o._.ALBUM_ITEM, data: (0, n.sK)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var c = a(81628);
            let m = (e, t) => ({ type: o._.ARTIST_ITEM, data: (0, c.as)({ artist: e, trailer: t }) });
            var u = a(79670);
            let _ = (e) => {
                let { playlist: t, likesCount: a, trailer: i, tracksCount: l } = e;
                return { type: o._.LIKED_PLAYLIST_ITEM, data: (0, u.bk)({ playlist: t, likesCount: a, trailer: i, tracksCount: l }) };
            };
            var p = a(32632);
            let g = (e) => (0, r.wg)({ type: o._.WAVE_AGENT_ITEM, data: (0, p.lb)(e.data.wave, e.data.agent) }),
                v = (e) => {
                    var t;
                    let a =
                        null == (t = (e || {}).items)
                            ? void 0
                            : t.map((e) => {
                                  switch (e.type) {
                                      case o._.LIKED_PLAYLIST_ITEM:
                                          return _({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                                      case o._.ALBUM_ITEM:
                                          return d(e.data.album, e.data.artists, e.data.trailer, e.data.releaseDate);
                                      case o._.ARTIST_ITEM:
                                          return m(e.data.artist, e.data.trailer);
                                      case o._.WAVE_AGENT_ITEM:
                                          return g(e);
                                  }
                              });
                    return (0, r.wg)({ items: a });
                };
            var b = a(66281);
            let C = (e) => ({ type: e.type, data: (0, b.SZ)({ clip: e.data.clip, artists: e.data.artists }) }),
                A = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: l } = e;
                    return { type: o._.NON_MUSIC_ALBUM_ITEM, data: (0, n.sK)({ album: t, likesCount: i, bookmateOptionRequired: l, artists: a }) };
                };
            var T = a(66161);
            let I = (e) => ({ type: o._.TRACK_ITEM, data: (0, T.vU)(e.data.track) });
            var h = (function (e) {
                    return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e;
                })({}),
                L = a(40924);
            let y = (e) => {
                    let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: l, isRejected: s, isNotEmpty: r, isOutdated: o, isNeededToHide: n } = e;
                    if (n) return !1;
                    switch (t) {
                        case L.E.SHOW_AND_LOAD:
                            if (i || s || a) return !0;
                            return r;
                        case L.E.LOAD_AND_SHOW:
                            return (l && r) || !!o;
                        default:
                            return !0;
                    }
                },
                S = r.gK.model('LandingAlbumItem', { type: r.gK.literal(o._.ALBUM_ITEM), data: n.JC }),
                N = r.gK.model('LandingArtistItem', { type: r.gK.literal(o._.ARTIST_ITEM), data: c.PK }),
                E = r.gK.model('LandingLikedPlaylistItem', { type: r.gK.literal(o._.LIKED_PLAYLIST_ITEM), data: u.IP }),
                x = r.gK.model('LandingVibeAgentItem', { type: r.gK.union(r.gK.literal(o._.WAVE_AGENT_ITEM), r.gK.literal(o._.QUERY_TO_VIBE_ITEM)), data: p.Gh }),
                j = r.gK
                    .model('LandingBaseBlock', {
                        loadingState: r.gK.enumeration(Object.values(h)),
                        id: r.gK.string,
                        isNotFound: r.gK.boolean,
                        hasSentAnalyticsOnLoaded: r.gK.boolean,
                        meta: r.gK.maybe(r.gK.frozen()),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.loadingState === h.IDLE;
                        },
                        get isLoading() {
                            return e.loadingState === h.PENDING;
                        },
                        get isLoaded() {
                            return e.loadingState === h.RESOLVE;
                        },
                        get isRejected() {
                            return e.loadingState === h.REJECT;
                        },
                        get isOutdated() {
                            return e.loadingState === h.OUTDATED;
                        },
                        get isShimmerVisible() {
                            return this.isNeededToLoad || this.isLoading || this.isRejected;
                        },
                        get isShimmerActive() {
                            return this.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        setHasSentAnalyticsOnLoaded(t) {
                            e.hasSentAnalyticsOnLoaded = t;
                        },
                        setOutdated() {
                            e.loadingState = h.OUTDATED;
                        },
                        setIsNeededToLoad() {
                            e.loadingState = h.IDLE;
                        },
                    })),
                k = r.gK.model('LandingBlockFetchableMetaSource', { uri: r.gK.string, countWeb: r.gK.maybe(r.gK.number), count: r.gK.maybe(r.gK.number) }),
                R = r.gK.model('LandingBlockFetchableMeta', {
                    title: r.gK.maybe(r.gK.string),
                    description: r.gK.maybe(r.gK.string),
                    viewAllActionLink: r.gK.maybeNull(r.gK.string),
                    source: r.gK.maybe(k),
                    showPolicy: r.gK.maybe(r.gK.string),
                    coverStyle: r.gK.maybe(r.gK.string),
                }),
                f = r.gK.union(E, S, N, x),
                P = r.gK.model('EntitiesCarouselData', { items: r.gK.array(f) }),
                w = j
                    .props({
                        type: r.gK.union(
                            r.gK.literal(l.t.NEW_PLAYLISTS),
                            r.gK.literal(l.t.EDITORIAL_COMPILATION),
                            r.gK.literal(l.t.RECOMMENDED_PLAYLISTS),
                            r.gK.literal(l.t.META_TAG_POPULAR_PLAYLISTS),
                            r.gK.literal(l.t.META_TAG_NEW_ALBUMS),
                            r.gK.literal(l.t.META_TAG_PLAYLISTS),
                            r.gK.literal(l.t.MICRO_GENRE_ALBUMS),
                            r.gK.literal(l.t.META_TAG_ALBUMS),
                            r.gK.literal(l.t.ARTIST_PLAYLISTS),
                            r.gK.literal(l.t.ARTIST_ALBUMS),
                            r.gK.literal(l.t.ARTIST_COMPILATIONS),
                            r.gK.literal(l.t.ARTIST_STUDIO_ALBUMS),
                            r.gK.literal(l.t.ARTIST_SIMILAR_ENTITIES),
                            r.gK.literal(l.t.COLLECTION_SIMILAR_ENTITIES),
                        ),
                        data: r.gK.maybe(P),
                        meta: R,
                    })
                    .named('EntitiesCarousel')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                K = r.gK.model('NonMusicChartAlbumData', { items: r.gK.array(n.JC) }),
                O = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.CHART_ALBUMS), r.gK.literal(l.t.PODCASTS_CHART_ALBUMS)), data: r.gK.maybe(K), meta: R })
                    .named('NonMusicChartAlbum')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                M = r.gK.model('PromotionsDataItem', { featureId: r.gK.string, title: r.gK.string, subtitle: r.gK.string, weblink: r.gK.string, imageUrl: r.gK.string }),
                D = r.gK.model('PromotionsData', { items: r.gK.array(M) }),
                B = j
                    .props({
                        type: r.gK.union(r.gK.literal(l.t.PROMOTIONS), r.gK.literal(l.t.EDITORIAL_PROMOTIONS), r.gK.literal(l.t.NON_MUSIC_PROMOTIONS)),
                        data: r.gK.maybe(D),
                        meta: R,
                    })
                    .named('Promotions')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                V = r.gK.model('LandingNonMusicAlbumItem', { type: r.gK.literal(o._.NON_MUSIC_ALBUM_ITEM), data: n.JC }),
                U = r.gK.model('LandingPlaylistItem', { type: r.gK.literal(o._.PLAYLIST_ITEM), data: u.IP }),
                G = r.gK.model('LandingTrackItem', { type: r.gK.literal(o._.TRACK_ITEM), data: T.vj });
            var Y = a(42561),
                W = a(54690),
                X = a(26427);
            let F = (e) => ({
                    type: o._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, u.bk)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                z = (e, t) => ({ type: o._.PLAYLIST_ITEM, data: (0, u.bk)({ playlist: e, trailer: t }) }),
                H = (e) => {
                    switch (e.type) {
                        case o._.MIX_CARD_ITEM:
                            return (0, r.wg)({ type: o._.MIX_CARD_ITEM, data: (0, X.rc)(e.data) });
                        case o._.NON_MUSIC_ALBUM_ITEM:
                            return A({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case o._.ALBUM_ITEM:
                            return d(e.data.album, e.data.artists, e.data.trailer);
                        case o._.CHART_ALBUM_ITEM:
                            let t, a, i, l;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (l = e.data.trailer),
                                { type: o._.CHART_ALBUM_ITEM, data: (0, n.sK)({ album: t, chart: a, likesCount: i, trailer: l }) }
                            );
                        case o._.ARTIST_ITEM:
                            return m(e.data.artist, e.data.trailer);
                        case o._.PLAYLIST_ITEM:
                            return z(e.data.playlist, e.data.trailer);
                        case o._.PERSONAL_PLAYLIST_ITEM:
                            return F(e);
                        case o._.LIKED_PLAYLIST_ITEM:
                            return _({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                $ = r.gK.model('LandingChartAlbumItem', { type: r.gK.literal(o._.CHART_ALBUM_ITEM), data: n.JC }),
                Q = r.gK.model('LandingMixCardItemModel', { type: r.gK.literal(o._.MIX_CARD_ITEM), data: X.bv }),
                q = r.gK.model('LandingPersonalPlaylistItem', { playlist: u.IP, playlistType: r.gK.string, description: r.gK.maybe(r.gK.string) }),
                Z = r.gK.model('LandingPersonalPlaylistItem', { type: r.gK.literal(o._.PERSONAL_PLAYLIST_ITEM), data: q }),
                J = r.gK.union(S, N, U, Z, E, $, V, Q),
                ee = r.gK
                    .compose(r.gK.model('LandingBlockEntities', { title: r.gK.maybeNull(r.gK.string), items: r.gK.array(J) }), W.XT)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === Y.GuX.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: l } = (0, r._$)(e);
                            if (e.loadingState !== Y.GuX.PENDING)
                                try {
                                    e.loadingState = Y.GuX.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    (e.title = t.title), (e.items = (0, r.wg)(t.items.map(H))), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = Y.GuX.IDLE), (e.items = (0, r.wg)([])), (e.title = null);
                        },
                    }));
            var et = a(14525);
            let ea = [l.t.COLLECTION_FAVOURITE_PLAYLIST],
                ei = (e) => ea.includes(e);
            var el = a(17637);
            let es = [l.t.COLLECTION_DOWNLOADED_TRACKS];
            var er = a(16616);
            !(function (e) {
                (e.RADIO = 'radio'), (e.PROMOTIONS = 'promotions'), (e.EDITORIAL_PLAYLISTS = 'editorial-playlists'), (e.PLAYLIST_WITH_TRACKS = 'playlist-with-tracks');
            })(i || (i = {}));
            let eo = (e) => !!(e && 'object' == typeof e && e[0] && 'owner' in e[0].data);
            var en = a(82265),
                ed = a(82139),
                ec = a(59885);
            let em = (e) => e.every((e) => Object.values(ec.M).includes(e)),
                eu = (e) => {
                    var t, a, i;
                    let l = (0, c.FA)(e.decomposed),
                        s = e.disclaimers && em(e.disclaimers) ? e.disclaimers : void 0;
                    return (0, r.wg)({
                        id: String(e.id),
                        name: null != (a = e.name) ? a : '',
                        various: e.various,
                        isAvailable: null == (i = e.available) || i,
                        isComposer: e.composer,
                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                        decomposed: l,
                        disclaimers: s,
                    });
                };
            var e_ = a(25358);
            let ep = (e) => {
                    switch (e.type) {
                        case o._.ALBUM_ITEM:
                            return d(e.data.album, e.data.artists, e.data.trailer);
                        case o._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: l, millisecondsUntilRelease: s, presaveDate: r } = e.data || {};
                                return {
                                    type: o._.PRESAVED_ALBUM_ITEM,
                                    data: (0, n.lO)({
                                        ...a,
                                        artists: i,
                                        releaseDate: l,
                                        millisecondsUntilRelease: s,
                                        presaveDate: r,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                },
                eg = (e) =>
                    (0, r.wg)({
                        type: o._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, Y.pX4)(e.data.cover) : void 0 },
                    });
            var ev = a(24150);
            let eb = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === l.t.TABS,
                eC = (e) => Object.values(l.t).includes(e),
                eA = r.gK.model('ArtistPopularTracksData', { items: r.gK.array(T.vj) }),
                eT = j
                    .props({ type: r.gK.literal(l.t.ARTIST_POPULAR_TRACKS), data: r.gK.maybe(eA), meta: R })
                    .named('ArtistPopularTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                eI = r.gK.model('ArtistReleaseData', { album: n.JC, releaseDate: r.gK.maybe(r.gK.string) }),
                eh = j
                    .props({ type: r.gK.literal(l.t.ARTIST_RELEASE), data: r.gK.maybe(eI), meta: R })
                    .named('ArtistRelease')
                    .views((e) => ({
                        get isVisible() {
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    })),
                eL = r.gK.model('ArtistUpcomingReleaseData', { album: n.VH }),
                ey = j
                    .props({ type: r.gK.literal(l.t.ARTIST_UPCOMING_RELEASE), data: r.gK.maybe(eL), meta: R })
                    .named('ArtistUpcomingRelease')
                    .views((e) => ({
                        get isVisible() {
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return +!!e.data;
                        },
                    }));
            var eS = a(38952),
                eN = a(71e3);
            let eE = (e) => ({
                    loadingState: h.IDLE,
                    id: e.id,
                    type: e.type,
                    meta: ((e) =>
                        (0, eS.v)(e)
                            ? ((e) => {
                                  var t;
                                  return (0, r.wg)({
                                      title: e.title,
                                      description: e.description,
                                      source: e.source,
                                      viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink,
                                      showPolicy: e.showPolicy,
                                      coverStyle: e.coverStyle,
                                  });
                              })(e)
                            : ((e) => !!(e && 'object' == typeof e && 'cover' in e && !('source' in e)))(e)
                              ? ((e) => {
                                    var t;
                                    return (0, r.wg)({ ...e, coverUri: null == (t = e.cover) ? void 0 : t.uri });
                                })(e)
                              : ((e) => !!(e && 'object' == typeof e && ('message' in e || 'title' in e || 'expandable' in e || 'visibleLines' in e)))(e)
                                ? ((e) => {
                                      var t;
                                      return (0, r.wg)({
                                          ...(0, eN.t)(e),
                                          showPolicy: e.showPolicy,
                                          viewAllActionLink: null == (t = e.viewAllAction) ? void 0 : t.weblink,
                                      });
                                  })(e)
                                : void 0)(e.data),
                    data: void 0,
                    isNeededToLoad: !0,
                    isLoading: !0,
                    isLoaded: !1,
                    isRejected: !1,
                    isVisible: !0,
                    isNotFound: !1,
                    hasSentAnalyticsOnLoaded: !1,
                    objectsCount: 0,
                    setHasSentAnalyticsOnLoaded: () => {},
                }),
                ex = r.gK.model('ArtistPickData', { playlist: e_.$o, artists: r.gK.array(c.PK) }),
                ej = j
                    .props({ type: r.gK.literal(l.t.ARTIST_PICK), data: r.gK.maybe(ex), meta: R })
                    .named('ArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isRejected || (e.isLoaded && !e.data)) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                ek = r.gK
                    .model('FamiliarYouData', {
                        vibeTrackCount: r.gK.optional(r.gK.number, 0),
                        collectionTrackCount: r.gK.optional(r.gK.number, 0),
                        collectionAlbumCount: r.gK.optional(r.gK.number, 0),
                    })
                    .views((e) => {
                        let t = {
                            get hasTracks() {
                                return e.collectionTrackCount > 0 || e.vibeTrackCount > 0;
                            },
                            get hasFamiliarInfo() {
                                return t.hasTracks || e.collectionAlbumCount > 0;
                            },
                            get tracksCount() {
                                return e.collectionTrackCount + e.vibeTrackCount;
                            },
                            get hasCollectionEntities() {
                                return e.collectionTrackCount > 0 || e.collectionAlbumCount > 0;
                            },
                            get hasVibeEntities() {
                                return e.vibeTrackCount > 0;
                            },
                            href(e) {
                                if (!e) return '';
                                if (t.hasCollectionEntities) {
                                    let { href: t } = (0, Y.uvd)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: Y.JCK.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, Y.uvd)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: Y.JCK.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, Y.uvd)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                eR = j
                    .props({ type: r.gK.literal(l.t.FAMILIAR_YOU), data: r.gK.maybe(ek), meta: R })
                    .named('FamiliarYou')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isRejected || (e.isLoaded && !(null == (t = e.data) ? void 0 : t.hasFamiliarInfo))) return !1;
                            return !0;
                        },
                        get objectsCount() {
                            return e.data && 1;
                        },
                    })),
                ef = (e) => {
                    let t = eE(e);
                    if ((0, el.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case l.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = eE(t);
                                                  return (eT.is(a) || eh.is(a) || ey.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, r.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case l.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = eE(t);
                                                  return (eR.is(a) || ej.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, r.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                eP = (e) => (0, r.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => eC(e.type)).map(ef) }),
                ew = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) eb(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: Y.GuX.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: Y.GuX.IDLE, data: t.tabs.map(eP) })),
                            a && (i.upperBlocks = a.filter((e) => eC(e.type)).map(ef)),
                            (0, r.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                };
            var eK = a(81141);
            let eO = (e) => ({ uri: e.uri, color: e.color });
            var eM = a(6540);
            let eD = (e) => {
                var t;
                let { data: a } = e;
                return (0, r.wg)({ type: o._.DONATION_ITEM, data: (0, eM.GT)({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
            };
            var eB = a(3765),
                eV = a(26397);
            let eU = (e) =>
                    (0, r.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                eG = r.gK
                    .model('AlbumPromoDataItem', {
                        album: n.JC,
                        artists: r.gK.array(c.PK),
                        cover: W.$B,
                        coverContentMode: r.gK.maybe(r.gK.string),
                        clickUrl: r.gK.string,
                        yclid: r.gK.string,
                        utm: r.gK.frozen(),
                        hasClicked: r.gK.optional(r.gK.boolean, !1),
                    })
                    .views((e) => {
                        let t = {
                            get reportingProperties() {
                                return { ...e.utm, yclid: e.yclid };
                            },
                            get albumUrl() {
                                let { href: a } = (0, Y.uvd)(e.album.url, { query: t.reportingProperties });
                                return a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setClicked: (0, r.L3)(function* () {
                            if (!(0, r._n)(e)) return;
                            let { prefixlessResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (!e.hasClicked)
                                try {
                                    (e.hasClicked = !0), yield t.reportForAlbumPromo(e.clickUrl);
                                } catch (e) {
                                    a.error(e);
                                }
                        }),
                    })),
                eY = r.gK.model('AlbumPromoDataReportingOptions', { url: r.gK.string, timeMs: r.gK.number }),
                eW = r.gK.model('AlbumPromoDataReporting', { blockRender: eY, blockImpression: eY, adImpressions: eY }),
                eX = r.gK.model('AlbumPromoData', { items: r.gK.array(eG), reporting: r.gK.maybe(eW) }).actions((e) => ({
                    report: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return;
                        let { prefixlessResource: a, modelActionsLogger: i } = (0, r._$)(e);
                        try {
                            yield a.reportForAlbumPromo(t);
                        } catch (e) {
                            i.error(e);
                        }
                    }),
                })),
                eF = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.ALBUM_PROMO), r.gK.literal(l.t.SIMPLE_ALBUM_PROMO)), data: r.gK.maybe(eX), meta: R })
                    .named('AlbumPromo')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!((null == (t = e.data) ? void 0 : t.items) && e.data.items.length > 0),
                                isOutdated: e.isOutdated,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                ez = r.gK.model('ArtistConcertsData', { items: r.gK.array(er.aR) }),
                eH = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.ARTIST_CONCERTS)), data: r.gK.maybe(ez), meta: R })
                    .named('ArtistConcerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let { experiments: a } = (0, r.Zn)(e);
                            if (a.checkExperiment(Y.zal.disableAllConcerts, 'on')) return !1;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                e$ = r.gK.model('ArtistPopularTracksAndReleasesData', { blocks: r.gK.array(r.gK.union(eT, eh, ey)) }).views((e) => ({
                    get popularTracks() {
                        return e.blocks.find((e) => eT.is(e));
                    },
                    get upcomingRelese() {
                        return e.blocks.find((e) => ey.is(e));
                    },
                    get release() {
                        return e.blocks.find((e) => eh.is(e));
                    },
                })),
                eQ = j
                    .props({ type: r.gK.literal(l.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: r.gK.maybe(e$) })
                    .named('ArtistPopularTracksAndReleases')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.blocks.length) ? a : 0;
                        },
                    })),
                eq = r.gK.model('ChartTracksItem', { type: r.gK.literal(o._.TRACK_ITEM), data: T.vj }),
                eZ = r.gK.model('ChartTracksData', { items: r.gK.array(eq), playlist: e_.$o }),
                eJ = j
                    .props({ type: r.gK.literal(l.t.CHART_TRACKS), data: r.gK.maybe(eZ), meta: R })
                    .named('ChartTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                e0 = r.gK.model('LandingClipItem', { type: r.gK.union(r.gK.literal(o._.CLIP), r.gK.literal(o._.CLIP_ITEM)), data: b.kv }),
                e1 = r.gK.model('ClipsData', { items: r.gK.array(e0), canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                e3 = j
                    .props({
                        type: r.gK.union(r.gK.literal(l.t.CLIPS), r.gK.literal(l.t.ARTIST_CLIPS), r.gK.literal(l.t.COLLECTION_CLIPS)),
                        data: r.gK.maybe(e1),
                        meta: R,
                    })
                    .named('Clips')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            let { settings: i } = (0, r.Zn)(e);
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                                isNeededToHide: i.isMobile,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                e2 = r.gK.model('CollectionAlbumsData', { items: r.gK.array(n.JC), canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                e8 = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_ALBUMS), data: r.gK.maybe(e2), meta: R })
                    .named('CollectionAlbums')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if ((null == (t = e.data) ? void 0 : t.canShowEmptyBlock) || e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (i = e.data) || null == (a = i.items) ? void 0 : a.length) !== 0;
                        },
                        get objectsCount() {
                            var l, s;
                            return null != (s = null == (l = e.data) ? void 0 : l.items.length) ? s : 0;
                        },
                    }));
            var e4 = a(65258);
            let e6 = r.gK.model('LandingUpcomingAlbumItem', { type: r.gK.literal(o._.PRESAVED_ALBUM_ITEM), data: n.VH }),
                e9 = r.gK.union(S, e6),
                e5 = r.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: r.gK.string,
                        title: r.gK.string,
                        type: r.gK.enumeration(Object.values(e4.n)),
                        items: r.gK.array(e9),
                        canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                e7 = r.gK.model('CollectionAlbumsPresavesTabs', { tabs: r.gK.array(e5) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                te = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_ALBUMS_PRESAVES), data: r.gK.maybe(e7), meta: R })
                    .named('CollectionAlbumsPresaves')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    })),
                tt = r.gK
                    .model('LandingMenuItem', {
                        type: r.gK.literal(o._.MENU_ITEM),
                        data: r.gK.model({ title: r.gK.string, viewAllActionLink: r.gK.maybe(r.gK.maybeNull(r.gK.string)), cover: r.gK.maybe(W.$B) }),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.data.title, '_').concat(e.data.viewAllActionLink);
                        },
                    })),
                ta = r.gK.union(tt, x),
                ti = r.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: c.PK, items: r.gK.array(ta) }),
                tl = r.gK.model('CollectionArtistsAndTopWithItemsData', { artists: r.gK.array(ti) }),
                ts = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: r.gK.maybe(tl), meta: R })
                    .named('CollectionArtistsAndTopWithItems')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!(null == (t = e.data) ? void 0 : t.artists.length),
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.artists.length) ? i : 0;
                        },
                    })),
                tr = r.gK.model('CollectionArtistData', { items: r.gK.array(c.PK), canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                to = j
                    .props({
                        type: r.gK.union(
                            r.gK.literal(l.t.COLLECTION_ARTISTS),
                            r.gK.literal(l.t.COLLECTION_ARTISTS_AND_TOP),
                            r.gK.literal(l.t.PERSONAL_ARTISTS),
                            r.gK.literal(l.t.NEW_STARS_ARTISTS),
                            r.gK.literal(l.t.EDITORIAL_ARTISTS),
                            r.gK.literal(l.t.META_TAG_POPULAR_ARTISTS),
                            r.gK.literal(l.t.MICRO_GENRE_TOP_ARTISTS),
                            r.gK.literal(l.t.MICRO_GENRE_ARTISTS),
                            r.gK.literal(l.t.META_TAG_ARTISTS),
                            r.gK.literal(l.t.SIMILAR_ARTISTS),
                        ),
                        data: r.gK.maybe(tr),
                        meta: R,
                    })
                    .named('CollectionArtist')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                tn = r.gK.model('CollectionPlaylistsData', { items: r.gK.array(u.IP) }),
                td = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_PLAYLISTS_CREATED), data: r.gK.maybe(tn), meta: R })
                    .named('CollectionCreatedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var tc = a(36547);
            let tm = r.gK.model('CollectionDownloadedTracksData', { items: r.gK.array(T.vj), rawTracks: r.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: tc.R.DownloadedMusic, meta: e }));
                    },
                })),
                tu = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_DOWNLOADED_TRACKS), data: r.gK.maybe(tm), meta: R })
                    .named('CollectionDownloadedTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                t_ = r.gK.union(E, V, G),
                tp = r.gK.model('CollectionKidsData', { items: r.gK.array(t_) }),
                tg = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_KIDS), data: r.gK.maybe(tp), meta: R })
                    .named('CollectionKids')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                tv = r.gK.model('CollectionLikedPlaylistsData', { items: r.gK.array(u.IP) }),
                tb = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_PLAYLISTS_LIKED), data: r.gK.maybe(tv), meta: R })
                    .named('CollectionLikedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    }));
            var tC = a(49772);
            let tA = r.gK
                    .model('CollectionPlaylistsTab', {
                        id: r.gK.string,
                        title: r.gK.string,
                        type: r.gK.enumeration(Object.values(tC.l)),
                        items: r.gK.array(u.IP),
                        canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                tT = r.gK.model('CollectionPlaylistsTabs', { tabs: r.gK.array(tA) }).views((e) => ({
                    get isFirstTabEmpty() {
                        var t;
                        return (null == (t = e.tabs[0]) ? void 0 : t.items.length) === 0;
                    },
                    get isSecondTabEmpty() {
                        var a;
                        return (null == (a = e.tabs[1]) ? void 0 : a.items.length) === 0;
                    },
                    get areBothTabsEmpty() {
                        return this.isFirstTabEmpty && this.isSecondTabEmpty;
                    },
                    get activeIndexTab() {
                        if (this.isFirstTabEmpty && !this.isSecondTabEmpty) return 1;
                        return 0;
                    },
                })),
                tI = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: r.gK.maybe(tT), meta: R })
                    .named('CollectionPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            if (e.data) return e.data.tabs.reduce((e, t) => e + t.items.length, 0);
                            return 0;
                        },
                    }));
            var th = a(11334);
            let tL = r.gK.model('CollectionTopArtistsData', { items: r.gK.array(th.GV) }),
                ty = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_TOP_ARTISTS), data: r.gK.maybe(tL), meta: R })
                    .named('CollectionTopArtists')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                tS = r.gK.model('CollectionVibeAgentDataModel', { vibe: p.Gh }),
                tN = j
                    .props({ type: r.gK.literal(l.t.COLLECTION_WAVE_AGENT), data: r.gK.maybe(tS), meta: R })
                    .named('CollectionVibeAgent')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return null == (t = e.data) ? void 0 : t.vibe;
                        },
                        get objectsCount() {
                            var a;
                            return +(null != (a = e.data) && !!a.vibe);
                        },
                    })),
                tE = j
                    .props({ type: r.gK.literal(l.t.CONCERT_PLACE), data: r.gK.maybe(eK.fc), meta: R })
                    .named('ConcertPlace')
                    .views((e) => ({
                        get isVisible() {
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: void 0 !== e.data,
                            });
                        },
                        get objectsCount() {
                            return +(null !== e.data);
                        },
                    })),
                tx = r.gK.model('ConcertsData', { items: r.gK.array(er.aR) }),
                tj = j
                    .props({
                        type: r.gK.union(
                            r.gK.literal(l.t.CONCERTS_TOP),
                            r.gK.literal(l.t.CONCERTS_PERSONAL),
                            r.gK.literal(l.t.EDITORIAL_CONCERTS),
                            r.gK.literal(l.t.VIEWED_CONCERTS),
                        ),
                        data: r.gK.maybe(tx),
                        meta: R,
                    })
                    .named('Concerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let { experiments: a } = (0, r.Zn)(e);
                            if (a.checkExperiment(Y.zal.disableAllConcerts, 'on')) return !1;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    }));
            var tk = a(83110),
                tR = a(25270);
            let tf = r.gK
                    .model('ContinueListenTrackData', {
                        album: r.gK.maybe(tR.GI),
                        playlist: r.gK.maybe(e_.$o),
                        track: T.vj,
                        trackLoadingState: r.gK.optional(r.gK.enumeration(Object.values(Y.GuX)), Y.GuX.IDLE),
                        playlistLoadingState: r.gK.optional(r.gK.enumeration(Object.values(Y.GuX)), Y.GuX.IDLE),
                        albumDuration: r.gK.maybe(r.gK.number),
                        albumDurationLeft: r.gK.maybe(r.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === Y.GuX.IDLE;
                        },
                        get isLoading() {
                            return e.trackLoadingState === Y.GuX.PENDING || e.playlistLoadingState === Y.GuX.PENDING;
                        },
                        get isRejected() {
                            return e.trackLoadingState === Y.GuX.REJECT || e.playlistLoadingState === Y.GuX.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, r.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, r._$)(e),
                                { continueListen: i } = (0, r.Zn)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = Y.GuX.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = Y.GuX.PENDING;
                            try {
                                var l;
                                let a = (0, tk.V)(e.track.id, null == (l = e.album) ? void 0 : l.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = Y.GuX.RESOLVE), i)) return (0, T.vU)(i);
                            } catch (t) {
                                a.error(t), (e.trackLoadingState = Y.GuX.REJECT);
                            }
                        }),
                        getPlaylistMeta: (0, r.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, r._$)(e),
                                { continueListen: i } = (0, r.Zn)(e);
                            if ((i.track && 'number' == typeof i.trackIndex) || !e.playlist) {
                                e.playlistLoadingState = Y.GuX.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = Y.GuX.PENDING;
                            try {
                                let { tracks: a } = yield t.getPlaylistWithTracksIds({ userId: String(e.playlist.uid), playlistKind: e.playlist.kind, resumeStream: !1 }),
                                    i = a.findIndex((t) => String(t.id) === e.track.id);
                                if (((e.playlistLoadingState = Y.GuX.RESOLVE), e.track.durationMs && -1 !== i)) return i;
                            } catch (t) {
                                a.error(t), (e.playlistLoadingState = Y.GuX.REJECT);
                            }
                        }),
                    })),
                tP = r.gK.model('ContinueListenTrack', { type: r.gK.string, data: tf }),
                tw = r.gK.model('ContinueListenBaseItem', { uri: r.gK.string, color: r.gK.maybe(r.gK.string) }),
                tK = r.gK.model('ContinueListenBaseItem', {
                    title: r.gK.string,
                    covers: r.gK.array(tw),
                    bookCount: r.gK.maybe(r.gK.number),
                    podcastCount: r.gK.maybe(r.gK.number),
                    trackCount: r.gK.maybe(r.gK.number),
                }),
                tO = r.gK.model('ContinueListenData', { lastPlayed: r.gK.maybe(tP), bookshelf: tK, newEpisodes: tK }),
                tM = j
                    .props({ type: r.gK.literal(l.t.CONTINUE_LISTEN), data: r.gK.maybe(tO), meta: R })
                    .named('ContinueListen')
                    .views((e) => ({
                        get isVisible() {
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !!e.data,
                            });
                        },
                        get objectsCount() {
                            return Object.keys(e.data || {}).length;
                        },
                    })),
                tD = a(72786)
                    .kv.named('LandingBlockOverviewMeta')
                    .props({ showPolicy: r.gK.maybe(r.gK.string), viewAllActionLink: r.gK.maybeNull(r.gK.string) }),
                tB = j
                    .props({ type: r.gK.literal(l.t.DISLIKES), data: r.gK.undefined, meta: tD })
                    .named('Dislikes')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                tV = r.gK.model('LandingDonationItem', { type: r.gK.literal(o._.DONATION_ITEM), data: eM.eG }),
                tU = r.gK.model('DonationsData', { items: r.gK.array(tV) }),
                tG = j
                    .props({ type: r.gK.literal(l.t.DONATIONS), data: r.gK.maybe(tU), meta: R })
                    .named('Donations')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                tY = r.gK.model('EditorialVibesDataModel', { items: r.gK.array(p.Gh) }),
                tW = j
                    .props({
                        type: r.gK.union(
                            r.gK.literal(l.t.EDITORIAL_WAVES),
                            r.gK.literal(l.t.META_TAG_WAVE),
                            r.gK.literal(l.t.MICRO_GENRE_WAVE),
                            r.gK.literal(l.t.MICRO_GENRE_SIMILAR_WAVE),
                            r.gK.literal(l.t.META_TAG_SIMILAR_WAVE),
                            r.gK.literal(l.t.EDITORIAL_WAVES_AGENT),
                            r.gK.literal(l.t.META_TAG_WAVE_AGENT),
                            r.gK.literal(l.t.MICRO_GENRE_WAVE_AGENT),
                            r.gK.literal(l.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            r.gK.literal(l.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: r.gK.maybe(tY),
                        meta: R,
                    })
                    .named('EditorialVibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                tX = r.gK.model('FamiliarYouAndArtistPickData', { blocks: r.gK.array(r.gK.union(eR, ej)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => eR.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => ej.is(e));
                    },
                })),
                tF = j
                    .props({ type: r.gK.literal(l.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: r.gK.maybe(tX) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, s, r;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (l = e.data) || null == (i = l.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (r = e.data) || null == (s = r.artistPick) ? void 0 : s.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var o, n;
                            return null != (n = null == (o = e.data) ? void 0 : o.blocks.length) ? n : 0;
                        },
                    })),
                tz = r.gK.model('InStyleDataItemTab', { id: r.gK.number, title: r.gK.string, covers: r.gK.array(r.gK.string) }),
                tH = r.gK.model('InStyleDataItem', { tab: tz, data: r.gK.array(n.JC) }),
                t$ = r.gK.model('InStyleData', { items: r.gK.array(tH) }),
                tQ = j
                    .props({ type: r.gK.literal(l.t.IN_STYLE), data: r.gK.maybe(t$), meta: R })
                    .named('InStyle')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                s = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !s,
                            });
                        },
                        get objectsCount() {
                            var l, s;
                            return null != (s = null == (l = e.data) ? void 0 : l.items.length) ? s : 0;
                        },
                    })),
                tq = r.gK.model('ItemListData', { items: r.gK.array(tt) }),
                tZ = j
                    .props({ type: r.gK.literal(l.t.ITEM_LIST), data: r.gK.maybe(tq), meta: R })
                    .named('ItemList')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                tJ = r.gK
                    .model('LikesData', { title: r.gK.string, cover: W.$B, playlistUuid: r.gK.maybe(r.gK.string), trackCovers: r.gK.array(W.$B), count: r.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, Y.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                t0 = r.gK.model('HistoryData', { title: r.gK.string, trackCovers: r.gK.array(W.$B), artists: r.gK.array(r.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, Y.uvd)('/music-history');
                        return e;
                    },
                })),
                t1 = r.gK.model('LikesAndHistoryData', { favorites: tJ, history: t0 }),
                t3 = j
                    .props({ type: r.gK.literal(l.t.LIKES_AND_HISTORY), data: r.gK.maybe(t1), meta: R })
                    .named('LikesAndCount')
                    .views((e) => ({
                        get isVisible() {
                            return !(e.isLoading || e.isRejected || e.isNeededToLoad);
                        },
                        get objectsCount() {
                            return 2;
                        },
                    })),
                t2 = r.gK.model('MixesGridData', { items: r.gK.array(X.bv) }),
                t8 = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.MIXES_GRID), r.gK.literal(l.t.MIXES_MUSIC)), data: r.gK.maybe(t2), meta: R })
                    .named('MixesGrid')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNotEmpty: (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0,
                                isLoaded: e.isLoaded,
                                isLoading: e.isLoading,
                                isRejected: e.isRejected,
                                isNeededToLoad: e.isNeededToLoad,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                t4 = r.gK.model('MixesData', { items: r.gK.array(eB.f) }),
                t6 = j
                    .props({ type: r.gK.literal(l.t.MIXES), data: r.gK.maybe(t4), meta: R })
                    .named('Mixes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                t9 = r.gK.model('NeuromusicData', { items: r.gK.array(eV.R6) }),
                t5 = j
                    .props({ type: r.gK.literal(l.t.NEUROMUSIC), data: r.gK.maybe(t9), meta: R })
                    .named('Neuromusic')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                t7 = [
                    'avatars.mds.yandex.net/get-music-misc/30221/img.68678806f4c3467d82bab43b/%%',
                    'avatars.mds.yandex.net/get-music-misc/34161/img.68678811e40cd01bff989e50/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.6867881aea3b324d5df9692f/%%',
                ],
                ae = [
                    'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%',
                    'avatars.mds.yandex.net/get-music-misc/28592/img.6867878964ece217d515ffda/%%',
                    'avatars.mds.yandex.net/get-music-misc/30221/img.686787926dccf85a8a06c771/%%',
                ],
                at = r.gK
                    .model('NewReleasesDataItem', {
                        album: n.JC,
                        releaseDate: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        coverColor: r.gK.maybe(r.gK.string),
                    })
                    .views((e) => ({
                        coverUriWithPlaceholder: (t) =>
                            (function (e) {
                                let { coverUri: t, artistId: a, theme: i } = e;
                                if (!(null == t ? void 0 : t.includes('2419084/img.6568f242071da73cabc5846c'))) return t;
                                let l = (Number(a) || 0) % 3;
                                return i === Y.Sxu.Light ? t7[l] : ae[l];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                aa = r.gK.model('NewReleasesData', { items: r.gK.array(at) }),
                ai = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.NEW_RELEASES), r.gK.literal(l.t.EDITORIAL_NEW_RELEASES)), data: r.gK.maybe(aa), meta: R })
                    .named('NewReleases')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (t = e.data) ? void 0 : t.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var a, i;
                            return null != (i = null == (a = e.data) ? void 0 : a.items.length) ? i : 0;
                        },
                    })),
                al = r.gK.model('NonMusicEditorialCompilationData', { items: r.gK.array(r.gK.union(V, E)) }),
                as = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.NON_MUSIC_EDITORIAL_COMPILATION), r.gK.literal(l.t.NON_MUSIC_CATEGORY)), data: r.gK.maybe(al), meta: R })
                    .named('NonMusicEditorialCompilation')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                ar = j
                    .props({ type: r.gK.literal(l.t.OVERVIEW), data: r.gK.undefined, meta: tD })
                    .named('Overview')
                    .views((e) => ({
                        get isVisible() {
                            return !!e.meta.message;
                        },
                        get objectsCount() {
                            return 1;
                        },
                    })),
                ao = r.gK.model('PersonalPlaylistsData', { items: r.gK.array(Z) }),
                an = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.PERSONAL_PLAYLISTS), r.gK.literal(l.t.REWIND_PLAYLISTS)), data: r.gK.maybe(ao), meta: R })
                    .named('PersonalPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                ad = (e) => {
                    var t;
                    let a = (null == (t = e.tracks) ? void 0 : t.length) ? e.tracks.map((e) => ({ id: e })) : [];
                    return { id: e.id, name: e.name, tracks: (0, r.wg)(a) };
                },
                ac = r.gK.model('PlaylistFiltersTrack', { id: r.gK.union(r.gK.string, r.gK.number) }),
                am = r.gK.model('PlaylistFiltersItem', { id: r.gK.string, name: r.gK.string, tracks: r.gK.array(ac) }),
                au = r.gK.model('LandingBlockClientMeta', {
                    title: r.gK.maybe(r.gK.string),
                    description: r.gK.maybe(r.gK.string),
                    viewAllActionLink: r.gK.maybeNull(r.gK.string),
                    showPolicy: r.gK.maybe(r.gK.string),
                    coverUri: r.gK.maybe(r.gK.string),
                });
            var a_ = a(88579);
            let ap = r.gK
                    .model('PlaylistWithTracksDataBase', {
                        totalItemsCount: r.gK.maybe(r.gK.number),
                        items: r.gK.array(T.vj),
                        playlist: e_.$o,
                        coverUri: r.gK.maybe(r.gK.string),
                        canShowEmptyBlock: r.gK.maybe(r.gK.boolean),
                        withRewindTrailerButton: r.gK.maybe(r.gK.boolean),
                    })
                    .views((e) => ({
                        getCoverUri(t) {
                            switch (t) {
                                case a_.z.DEFAULT:
                                    return e.playlist.coverUri;
                                case a_.z.CUSTOM:
                                    return e.coverUri;
                                default:
                                    var a;
                                    return null != (a = e.coverUri) ? a : e.playlist.coverUri;
                            }
                        },
                    })),
                ag = r.gK
                    .compose(
                        r.gK.model('PlaylistWithTracksAndFiltersFilters', { items: r.gK.maybeNull(r.gK.array(am)), activeFilter: r.gK.maybe(r.gK.string) }),
                        W.XT,
                        W.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isRejected || e.isLoading;
                        },
                        get activeFilterIndex() {
                            var t;
                            let a = null == (t = e.items) ? void 0 : t.findIndex((t) => t.id === e.activeFilter);
                            return void 0 !== a && a > -1 ? a : 0;
                        },
                    }))
                    .actions((e) => ({
                        setActiveFilter(t) {
                            t !== e_.Q1.ALL ? (e.activeFilter = t) : (e.activeFilter = void 0);
                        },
                    })),
                av = r.gK
                    .compose(
                        ap.props({
                            likedTrackIds: r.gK.optional(r.gK.array(r.gK.string), () => []),
                            trackDetailsMap: r.gK.optional(r.gK.map(T.vj), {}),
                            tracksLoading: r.gK.optional(W.XT, () => ({ loadingState: Y.GuX.IDLE })),
                            playlistLoading: r.gK.optional(W.XT, () => ({ loadingState: Y.GuX.IDLE })),
                            filters: r.gK.optional(ag, () => ({ loadingState: Y.GuX.IDLE })),
                        }),
                        W.pl,
                    )
                    .named('PlaylistWithTracksAndFiltersData')
                    .views((e) => ({
                        get shouldShowEmptyPlaylist() {
                            return 0 === e.items.length && !e.tracksLoading.isLoading && !!e.canShowEmptyBlock;
                        },
                        get shouldLoadTracksMeta() {
                            return e.likedTrackIds.length > 0 && e.tracksLoading.isNeededToLoad;
                        },
                        get shouldLoadFilters() {
                            return e.likedTrackIds.length > 0 && e.filters.isNeededToLoad;
                        },
                        get visibleTrackIds() {
                            if (e.filters.activeFilter) {
                                var t;
                                let a = null == (t = e.filters.items) ? void 0 : t.find((t) => t.id === e.filters.activeFilter);
                                if (a) return a.tracks.slice(0, 8).map((e) => String(e.id));
                            }
                            return e.likedTrackIds.slice(0, 8);
                        },
                        get isLoading() {
                            return e.playlistLoading.isLoading || e.tracksLoading.isLoading;
                        },
                        get isRejected() {
                            return e.playlistLoading.isRejected || e.tracksLoading.isRejected;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getPlaylist: (0, r.L3)(function* () {
                                let { modelActionsLogger: a, usersResource: i, playlistResource: l } = (0, r._$)(e),
                                    { user: s } = (0, r.Zn)(e),
                                    o = s.account.data.uid;
                                if ((0, r._n)(e) && o) {
                                    e.playlistLoading.loadingState = Y.GuX.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(o),
                                                playlistKind: e_.ji.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            s = yield l.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        (e.likedTrackIds = (0, r.wg)(s.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, e_.jX)(s)),
                                            (e.playlistLoading.loadingState = Y.GuX.RESOLVE),
                                            yield Promise.allSettled([t.getTracksMeta(), t.getFilters()]);
                                    } catch (t) {
                                        a.error(t), (e.playlistLoading.loadingState = Y.GuX.REJECT);
                                    }
                                }
                            }),
                            updateItemsFromCache() {
                                let a = [];
                                e.visibleTrackIds.forEach((t) => {
                                    let i = e.trackDetailsMap.get(t);
                                    i && a.push(i);
                                }),
                                    t.setItems(a);
                            },
                            getTracksMeta: (0, r.L3)(function* () {
                                if (!(0, r._n)(e)) return;
                                let { tracksResource: a, modelActionsLogger: i } = (0, r._$)(e);
                                e.tracksLoading.loadingState = Y.GuX.PENDING;
                                let l = e.visibleTrackIds.filter((t) => !e.trackDetailsMap.has(t));
                                if (!l.length) {
                                    t.updateItemsFromCache(), (e.tracksLoading.loadingState = Y.GuX.RESOLVE);
                                    return;
                                }
                                try {
                                    (yield a.getTracksMeta({ trackIds: l })).forEach((t) => {
                                        let a = (0, T.vU)(t);
                                        e.trackDetailsMap.set(String(t.id), a);
                                    }),
                                        t.updateItemsFromCache(),
                                        (e.tracksLoading.loadingState = Y.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.tracksLoading.loadingState = Y.GuX.REJECT);
                                }
                            }),
                            getFilters: (0, r.L3)(function* () {
                                if (!(0, r._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, r._$)(e);
                                try {
                                    e.filters.loadingState = Y.GuX.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(ad);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === e_.Q1.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    (e.filters.items = (0, r.wg)(i)), (e.filters.loadingState = Y.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.filters.loadingState = Y.GuX.REJECT);
                                }
                            }),
                            setItems(t) {
                                e.items.forEach((e) => {
                                    (0, r.Yo)(e);
                                });
                                let a = t.map((e) => (0, r.dV)(e));
                                e.items.replace(a);
                            },
                            handleFilterClick: (0, r.L3)(function* (a) {
                                e.filters.setActiveFilter(a.id), yield t.getTracksMeta();
                            }),
                        };
                        return t;
                    }),
                ab = j
                    .props({
                        type: r.gK.literal(l.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: r.gK.optional(av, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: e_.ji.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: au,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, l, s, r, o, n, d, c, m;
                            if ((e.isLoaded && 0 === e.data.items.length) || (null == (t = e.data) ? void 0 : t.canShowEmptyBlock)) return !0;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: !!(
                                    e.isNeededToLoad ||
                                    (null == (a = e.data) ? void 0 : a.playlistLoading.isNeededToLoad) ||
                                    (null == (i = e.data) ? void 0 : i.tracksLoading.isNeededToLoad)
                                ),
                                isLoading: !!(
                                    e.isLoading ||
                                    (null == (l = e.data) ? void 0 : l.playlistLoading.isLoading) ||
                                    (null == (s = e.data) ? void 0 : s.tracksLoading.isLoading)
                                ),
                                isLoaded: !!(
                                    e.isLoaded &&
                                    (null == (r = e.data) ? void 0 : r.playlistLoading.isResolved) &&
                                    (null == (o = e.data) ? void 0 : o.tracksLoading.isResolved)
                                ),
                                isRejected: !!(
                                    e.isRejected ||
                                    (null == (n = e.data) ? void 0 : n.playlistLoading.isRejected) ||
                                    (null == (d = e.data) ? void 0 : d.tracksLoading.isRejected)
                                ),
                                isNotEmpty: !!((null == (c = e.data) ? void 0 : c.items.length) || (null == (m = e.data) ? void 0 : m.canShowEmptyBlock)),
                            });
                        },
                        get objectsCount() {
                            var u, _;
                            let t = null != (_ = null == (u = e.data) ? void 0 : u.items.length) ? _ : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                aC = ap.named('PlaylistWithTracksData'),
                aA = j
                    .props({
                        type: r.gK.union(
                            r.gK.literal(l.t.OPEN_PLAYLIST),
                            r.gK.literal(l.t.SMART_OPEN_PLAYLIST),
                            r.gK.literal(l.t.NON_MUSIC_OPEN_PLAYLIST),
                            r.gK.literal(l.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: r.gK.maybe(aC),
                        meta: R,
                    })
                    .named('PlaylistWithTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (null == (t = e.data) ? void 0 : t.canShowEmptyBlock) return !0;
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: (null == (a = e.data) ? void 0 : a.items.length) !== 0,
                            });
                        },
                        get objectsCount() {
                            var i, l;
                            let t = null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                aT = r.gK.union(S, U, N),
                aI = r.gK.model('RecentlyPlayedData', { items: r.gK.array(aT) }),
                ah = j
                    .props({ type: r.gK.literal(l.t.RECENTLY_PLAYED), data: r.gK.maybe(aI), meta: R })
                    .named('RecentlyPlayed')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, l;
                            return null != (l = null == (i = e.data) ? void 0 : i.items.length) ? l : 0;
                        },
                    })),
                aL = r.gK.model('LandingVibeItemData', { vibe: p.Gh, cover: r.gK.maybeNull(W.$B) }),
                ay = r.gK.model('LandingVibeItem', { type: r.gK.literal(o._.WAVE_ITEM), data: aL }),
                aS = r.gK.union(N, E, S, V, G, ay, x, e0),
                aN = r.gK.model('SearchHistoryData', { items: r.gK.array(aS) }),
                aE = j
                    .props({ type: r.gK.union(r.gK.literal(l.t.HISTORY), r.gK.literal(l.t.SEARCH_HISTORY)), data: r.gK.maybe(aN), meta: R })
                    .named('SearchHistory')
                    .views((e) => ({
                        get isVisible() {
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !0,
                            });
                        },
                        get objectsCount() {
                            var t, a;
                            return null != (a = null == (t = e.data) ? void 0 : t.items.length) ? a : 0;
                        },
                    })),
                ax = r.gK.model('SpecialThemeSettings', {
                    buttonColor: r.gK.maybeNull(r.gK.string),
                    textColor: r.gK.maybeNull(r.gK.string),
                    bgImageUrl: r.gK.maybeNull(r.gK.string),
                    imageUrl: r.gK.maybeNull(r.gK.string),
                    buttonTextColor: r.gK.maybeNull(r.gK.string),
                }),
                aj = r.gK.model('SpecialData', {
                    title: r.gK.maybe(r.gK.string),
                    subtitle: r.gK.maybe(r.gK.string),
                    buttonTitle: r.gK.maybe(r.gK.string),
                    imageUrl: r.gK.maybe(r.gK.string),
                    align: r.gK.maybeNull(r.gK.string),
                    weblink: r.gK.maybeNull(r.gK.string),
                    lightTheme: r.gK.maybeNull(ax),
                    darkTheme: r.gK.maybeNull(ax),
                }),
                ak = j
                    .props({ type: r.gK.literal(l.t.SPECIAL), data: r.gK.maybe(aj), meta: R })
                    .named('Special')
                    .views((e) => ({
                        get isVisible() {
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return !!e.data;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                aR = r.gK.model('VibesDataItemTab', { id: r.gK.number, title: r.gK.string }),
                af = r.gK.model('VibesDataItem', { tab: aR, data: r.gK.array(p.Gh) }),
                aP = r.gK.model('VibesData', { items: r.gK.array(af) }),
                aw = j
                    .props({
                        type: r.gK.union(r.gK.literal(l.t.WAVES), r.gK.literal(l.t.SETS_BY_WAVES), r.gK.literal(l.t.WAVES_AGENT), r.gK.literal(l.t.SETS_BY_WAVES_AGENT)),
                        data: r.gK.maybe(aP),
                        meta: R,
                    })
                    .named('Vibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let l = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                s = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !l || !s,
                            });
                        },
                        get objectsCount() {
                            var l, s, r;
                            return null != (r = null == (s = e.data) || null == (l = s.items[0]) ? void 0 : l.data.length) ? r : 0;
                        },
                    })),
                aK = r.gK.model('WizardData', { title: r.gK.string, description: r.gK.maybe(r.gK.string), artists: r.gK.array(c.PK) }),
                aO = j
                    .props({ type: r.gK.literal(l.t.WIZARD), data: r.gK.maybe(aK), meta: R })
                    .named('Wizard')
                    .views(() => ({
                        get isVisible() {
                            return !0;
                        },
                        get objectsCount() {
                            return 0;
                        },
                    })),
                aM = r.gK.union(
                    eJ,
                    e8,
                    to,
                    ty,
                    tb,
                    td,
                    aA,
                    ab,
                    ai,
                    w,
                    B,
                    ah,
                    tQ,
                    an,
                    ak,
                    aO,
                    aw,
                    t6,
                    t5,
                    t3,
                    as,
                    O,
                    te,
                    tj,
                    tI,
                    tW,
                    tZ,
                    ar,
                    tu,
                    tG,
                    e3,
                    eF,
                    tM,
                    tB,
                    aE,
                    t8,
                    tg,
                    eH,
                    eT,
                    eh,
                    eR,
                    ej,
                    ey,
                    eQ,
                    tF,
                    tE,
                    tN,
                    ts,
                ),
                aD = r.gK.model('TabData', { id: r.gK.string, title: r.gK.string, subtitle: r.gK.maybe(r.gK.string), covers: r.gK.maybe(r.gK.array(r.gK.string)) }),
                aB = r.gK
                    .model('Tab', {
                        meta: r.gK.model({ id: r.gK.string, title: r.gK.string }),
                        data: r.gK.maybe(aD),
                        blocks: r.gK.array(aM),
                        shouldReloadNotification: r.gK.boolean,
                    })
                    .views((e) => ({
                        get hasErrorBlocks() {
                            return e.blocks.some((e) => e.isRejected && e.isVisible);
                        },
                    }))
                    .actions((e) => ({
                        setShouldReloadNotification(t) {
                            e.shouldReloadNotification = t;
                        },
                    })),
                aV = r.gK.compose(r.gK.model('TabsData', { data: r.gK.maybeNull(r.gK.array(aB)) }), W.pl, W.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = Y.GuX.IDLE), e.destroyItems([e.data]);
                    },
                })),
                aU = r.gK
                    .compose(
                        r.gK.model('Tabs', {
                            meta: r.gK.maybeNull(r.gK.model({ selectedTabIndex: r.gK.number, source: r.gK.maybe(k) })),
                            upperBlocks: r.gK.maybeNull(r.gK.array(aM)),
                            tabs: aV,
                        }),
                        W.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a, i;
                                return !(null == (a = e.tabs.data) ? void 0 : a.length) && !(null == (i = e.upperBlocks) ? void 0 : i.length);
                            },
                            get isLoadedAndEmpty() {
                                return [Y.GuX.RESOLVE, Y.GuX.REJECT].includes(e.loadingState) && t.isEmpty;
                            },
                            get hasUpperBlocks() {
                                var l;
                                return !!(null == (l = e.upperBlocks) ? void 0 : l.length);
                            },
                        };
                        return t;
                    })
                    .props({ id: r.gK.optional(r.gK.string, ''), title: r.gK.optional(r.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === Y.GuX.RESOLVE || e.loadingState === Y.GuX.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, r.L3)(function* (a) {
                                var i, s, L, y, S, N, E;
                                let x;
                                if (!a || (!('source' in a.meta) && ((x = a.type), !es.includes(x)) && !ei(a.type))) return;
                                if ((0, el.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: j, modelActionsLogger: k } = (0, r._$)(e);
                                try {
                                    if (((a.loadingState = h.PENDING), ei(a.type))) {
                                        a.loadingState = h.RESOLVE;
                                        return;
                                    }
                                    let e = yield j.getBlock({ source: 'source' in a.meta ? a.meta.source : void 0, type: a.type });
                                    if (!(0, r._n)(a)) {
                                        a.loadingState = h.REJECT;
                                        return;
                                    }
                                    switch (a.type) {
                                        case l.t.CLIPS:
                                        case l.t.ARTIST_CLIPS:
                                        case l.t.COLLECTION_CLIPS:
                                            let t, i;
                                            'object' == typeof e &&
                                                null !== e &&
                                                'items' in e &&
                                                Array.isArray(e.items) &&
                                                (!e.items.length ||
                                                    ((t = e.items[0]),
                                                    'object' == typeof t && null !== t && 'type' in t && (t.type === o._.CLIP || t.type === o._.CLIP_ITEM))) &&
                                                ((i = a.type), (a.data = (0, r.wg)({ items: e.items.map(C), canShowEmptyBlock: i === l.t.COLLECTION_CLIPS })));
                                            break;
                                        case l.t.WIZARD:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'title' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, c.as)({ artist: e }));
                                                    return (0, r.wg)({ title: e.title, description: e.description, artists: a });
                                                })(e));
                                            break;
                                        case l.t.CHART_TRACKS:
                                            'chart' in e &&
                                                (a.data = ((e) => {
                                                    var t, a;
                                                    let i =
                                                        null == (a = (e || {}).chart) || null == (t = a.tracks)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { track: t, chart: a } = e;
                                                                  return { type: o._.TRACK_ITEM, data: (0, T.bV)(t, a) };
                                                              });
                                                    return (0, r.wg)({ items: i, playlist: (0, u.bk)({ playlist: null == e ? void 0 : e.chart }) });
                                                })(e));
                                            break;
                                        case l.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case l.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        e.type === o._.NON_MUSIC_ALBUM_ITEM
                                                            ? A({
                                                                  album: e.data.album,
                                                                  artists: e.data.artists,
                                                                  likesCount: e.data.likesCount,
                                                                  bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                              })
                                                            : _({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                    );
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.CHART_ALBUMS:
                                        case l.t.PODCASTS_CHART_ALBUMS:
                                            ((e) => {
                                                let t,
                                                    a = e.items;
                                                return !a.length || !!((t = a[0]) && 'object' == typeof t && 'type' in t && t.type === o._.CHART_ALBUM_ITEM);
                                            })(e) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, n.EV)({ album: e.data.album, likesCount: e.data.likesCount, chart: e.data.chart }));
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ALBUMS:
                                            'likedAlbums' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedAlbums)
                                                            ? void 0
                                                            : t.map((e) => (0, n.sK)({ album: e.data.album, artists: e.data.artists, trailer: e.data.trailer }));
                                                    return (0, r.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ARTISTS:
                                            'likedArtists' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedArtists)
                                                            ? void 0
                                                            : t.map((e) => (0, c.as)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, r.wg)({ items: a, canShowEmptyBlock: !0 });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_ARTISTS_AND_TOP:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, c.as)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, r.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_TOP_ARTISTS:
                                            e &&
                                                'object' == typeof e &&
                                                'artists' in e &&
                                                Array.isArray(e.artists) &&
                                                (a.data = (0, r.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, c.as)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, ev.ws)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, r.wg)({ items: t });
                                                    })(e),
                                                ));
                                            break;
                                        case l.t.PERSONAL_ARTISTS:
                                        case l.t.NEW_STARS_ARTISTS:
                                        case l.t.EDITORIAL_ARTISTS:
                                        case l.t.META_TAG_POPULAR_ARTISTS:
                                        case l.t.MICRO_GENRE_ARTISTS:
                                        case l.t.MICRO_GENRE_TOP_ARTISTS:
                                        case l.t.META_TAG_ARTISTS:
                                        case l.t.SIMILAR_ARTISTS:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => (0, c.as)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_PLAYLISTS_CREATED:
                                            'createdPlaylists' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).createdPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, u.bk)({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer }),
                                                              );
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_PLAYLISTS_LIKED:
                                            'likedPlaylists' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).likedPlaylists)
                                                            ? void 0
                                                            : t.map((e) =>
                                                                  (0, u.bk)({
                                                                      playlist: e.data.playlist,
                                                                      generatedPlaylistType: e.data.generatedPlaylistType,
                                                                      likesCount: e.data.likesCount,
                                                                      trailer: e.data.trailer,
                                                                  }),
                                                              );
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.OPEN_PLAYLIST:
                                        case l.t.SMART_OPEN_PLAYLIST:
                                        case l.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in e &&
                                                ((s = a.id),
                                                (a.data = (0, r.wg)({
                                                    items: e.tracks.map((e) => (0, T.vU)(e)),
                                                    playlist: (0, e_.jX)(e.playlist),
                                                    coverUri: null == (L = e.cover) ? void 0 : L.uri,
                                                    withRewindTrailerButton: 'rewind2024' === s,
                                                })));
                                            break;
                                        case l.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in e &&
                                                (a.data = ((e) => {
                                                    var t, a, i;
                                                    let l = e || {};
                                                    return (0, r.wg)({
                                                        items: null != (i = null == (t = l.tracks) ? void 0 : t.map((e) => (0, T.vU)(e))) ? i : [],
                                                        playlist: (0, e_.jX)(l.playlist),
                                                        totalItemsCount: null == (a = l.summary) ? void 0 : a.count,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case l.t.NEW_RELEASES:
                                        case l.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).newReleases)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { album: t, artists: a, releaseDate: i, cover: l, trailer: s } = e;
                                                                  return {
                                                                      album: (0, n.sK)({ album: t, artists: a, trailer: s }),
                                                                      releaseDate: i,
                                                                      coverUri: null == l ? void 0 : l.uri,
                                                                      coverColor: null == l ? void 0 : l.color,
                                                                  };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.NEW_PLAYLISTS:
                                        case l.t.EDITORIAL_COMPILATION:
                                        case l.t.RECOMMENDED_PLAYLISTS:
                                        case l.t.META_TAG_POPULAR_PLAYLISTS:
                                        case l.t.META_TAG_NEW_ALBUMS:
                                        case l.t.META_TAG_PLAYLISTS:
                                        case l.t.MICRO_GENRE_ALBUMS:
                                        case l.t.META_TAG_ALBUMS:
                                        case l.t.ARTIST_PLAYLISTS:
                                        case l.t.ARTIST_COMPILATIONS:
                                        case l.t.ARTIST_ALBUMS:
                                        case l.t.ARTIST_STUDIO_ALBUMS:
                                        case l.t.ARTIST_SIMILAR_ENTITIES:
                                        case l.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in e && (a.data = v(e));
                                            break;
                                        case l.t.RECENTLY_PLAYED:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (e.type) {
                                                                      case o._.PLAYLIST_ITEM:
                                                                          return z(e.data.playlist, e.data.trailer);
                                                                      case o._.ALBUM_ITEM:
                                                                          return d(e.data.album, e.data.artists, e.data.trailer);
                                                                      case o._.ARTIST_ITEM:
                                                                          return m(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.IN_STYLE:
                                            'inStyleTabs' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).inStyleTabs)
                                                            ? void 0
                                                            : t.map((e, t) => {
                                                                  var a;
                                                                  let i =
                                                                          null == e
                                                                              ? void 0
                                                                              : e.items.map((e) => {
                                                                                    let { album: t, artists: a, trailer: i } = e;
                                                                                    return (0, n.sK)({ album: t, artists: a, trailer: i });
                                                                                }),
                                                                      l =
                                                                          ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) ||
                                                                          [];
                                                                  return { tab: { id: t, title: e.title, covers: (0, r.wg)(l) }, data: (0, r.wg)(i) };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.PROMOTIONS:
                                        case l.t.EDITORIAL_PROMOTIONS:
                                        case l.t.NON_MUSIC_PROMOTIONS:
                                            'promotions' in e &&
                                                (a.data = ((e) => {
                                                    if (!Array.isArray(null == e ? void 0 : e.promotions)) return (0, r.wg)({});
                                                    let t =
                                                        null == e
                                                            ? void 0
                                                            : e.promotions.map((e) => {
                                                                  var t, a;
                                                                  return {
                                                                      featureId: (e = e || {}).featureId,
                                                                      title: e.title,
                                                                      subtitle: e.subtitle,
                                                                      weblink: null != (a = null == (t = e.action) ? void 0 : t.weblink) ? a : '',
                                                                      imageUrl: e.imageUrl,
                                                                  };
                                                              });
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.REWIND_PLAYLISTS:
                                        case l.t.PERSONAL_PLAYLISTS:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    if (!e || !Array.isArray(e.items)) return (0, r.wg)({});
                                                    let t = e.items.map(F);
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.SPECIAL:
                                            'title' in e &&
                                                (a.data = (0, r.wg)({
                                                    title: null == e ? void 0 : e.title,
                                                    subtitle: null == e ? void 0 : e.subtitle,
                                                    buttonTitle: null == e ? void 0 : e.buttonTitle,
                                                    imageUrl: null == e ? void 0 : e.imageUrl,
                                                    align: null == e ? void 0 : e.align,
                                                    weblink: null == e || null == (y = e.action) ? void 0 : y.weblink,
                                                    lightTheme: eU(null == e ? void 0 : e.lightTheme),
                                                    darkTheme: eU(null == e ? void 0 : e.darkTheme),
                                                }));
                                            break;
                                        case l.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== e.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(ep);
                                                                  return (0, r.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, r.wg)({ tabs: a });
                                                })(e));
                                            break;
                                        case l.t.WAVES:
                                        case l.t.SETS_BY_WAVES:
                                            'waves' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).waves)
                                                            ? void 0
                                                            : t.map((e, t) => ({
                                                                  tab: { id: t, title: null == e ? void 0 : e.title },
                                                                  data: null == e ? void 0 : e.items.map(p.er),
                                                              }));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.WAVES_AGENT:
                                        case l.t.SETS_BY_WAVES_AGENT:
                                            e &&
                                                'object' == typeof e &&
                                                'waves' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).waves)
                                                            ? void 0
                                                            : t.map((e, t) => {
                                                                  var a;
                                                                  return {
                                                                      tab: { id: t, title: null == e ? void 0 : e.title },
                                                                      data:
                                                                          (null == e || null == (a = e.items)
                                                                              ? void 0
                                                                              : a.map((e) => {
                                                                                    let { wave: t, agent: a } = e;
                                                                                    return (0, p.lb)(t, a);
                                                                                })) || [],
                                                                  };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.MIXES_GRID:
                                        case l.t.MIXES_MUSIC:
                                            'object' == typeof e && null !== e && 'items' in e && (a.data = { items: (0, r.wg)(e.items.map((e) => (0, X.rc)(e.data))) });
                                            break;
                                        case l.t.MIXES:
                                            'items' in e && (a.data = { items: (0, r.wg)(e.items.map((e) => (0, eB.Ju)(e.data))) });
                                            break;
                                        case l.t.NEUROMUSIC:
                                            'items' in e && (a.data = (0, r.wg)({ items: e.items.map((e) => (0, eV.xf)(e)) }));
                                            break;
                                        case l.t.LIKES_AND_HISTORY:
                                            'favorites' in e &&
                                                (a.data = ((e) => {
                                                    let { favorites: t, history: a } = e,
                                                        i = (0, Y.pX4)(t.cover),
                                                        l = t.trackCovers.map(Y.pX4),
                                                        s = (0, r.wg)({
                                                            title: t.title,
                                                            cover: i,
                                                            playlistUuid: t.playlistUuid || void 0,
                                                            count: t.count,
                                                            trackCovers: l,
                                                        }),
                                                        o = a.trackCovers.map(Y.pX4),
                                                        n = (0, r.wg)({ title: a.title, trackCovers: o, artists: a.subtitleElements });
                                                    return (0, r.wg)({ favorites: s, history: n });
                                                })(e));
                                            break;
                                        case l.t.CONCERTS_TOP:
                                        case l.t.CONCERTS_PERSONAL:
                                        case l.t.EDITORIAL_CONCERTS:
                                        case l.t.VIEWED_CONCERTS:
                                            void 0 !== e.concerts &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, er.ho)(e));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
                                            'tabs' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t =
                                                                      null == e
                                                                          ? void 0
                                                                          : e.items.map((e) =>
                                                                                (0, u.bk)({
                                                                                    playlist: e.data.playlist,
                                                                                    generatedPlaylistType: e.data.generatedPlaylistType,
                                                                                    likesCount: e.data.likesCount,
                                                                                    trailer: e.data.trailer,
                                                                                }),
                                                                            );
                                                                  return (0, r.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, r.wg)({ tabs: a });
                                                })(e));
                                            break;
                                        case l.t.EDITORIAL_WAVES:
                                        case l.t.META_TAG_WAVE:
                                        case l.t.MICRO_GENRE_WAVE:
                                        case l.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case l.t.META_TAG_SIMILAR_WAVE:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(p.er);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.EDITORIAL_WAVES_AGENT:
                                        case l.t.META_TAG_WAVE_AGENT:
                                        case l.t.MICRO_GENRE_WAVE_AGENT:
                                        case l.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case l.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, p.lb)(e.wave, e.agent));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.ITEM_LIST:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(eg);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.DONATIONS:
                                            void 0 !== e.donations &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(eD);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.CONTINUE_LISTEN:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'bookshelf' in e &&
                                                (a.data = ((e) => {
                                                    let { bookshelf: t, newEpisodes: a, lastPlayed: i } = e;
                                                    return (0, r.wg)({
                                                        bookshelf: {
                                                            title: t.title,
                                                            covers: (t.covers || []).map(eO),
                                                            bookCount: t.bookCount,
                                                            podcastCount: t.podcastCount,
                                                        },
                                                        newEpisodes: { title: a.title, covers: (a.covers || []).map(eO), trackCount: a.trackCount },
                                                        lastPlayed:
                                                            i &&
                                                            ((e) => {
                                                                let {
                                                                    type: t,
                                                                    data: { track: a, album: i, playlist: l, durationTotal: s, durationLeft: o },
                                                                } = e;
                                                                return (0, r.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === en._.ALBUM && i ? (0, n.sK)({ album: i }) : void 0,
                                                                        playlist: t !== en._.ALBUM && l ? (0, u.bk)({ playlist: l }) : void 0,
                                                                        track: (0, T.vU)(a),
                                                                        albumDuration: s,
                                                                        albumDurationLeft: o,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(e));
                                            break;
                                        case l.t.SIMPLE_ALBUM_PROMO:
                                        case l.t.ALBUM_PROMO:
                                            e &&
                                                'object' == typeof e &&
                                                'albumBanners' in e &&
                                                (a.data = (0, r.wg)({
                                                    reporting: ((e) => {
                                                        if (e) return { adImpressions: e.adImpressions, blockImpression: e.blockImpression, blockRender: e.blockRender };
                                                    })(e.reporting),
                                                    items: e.albumBanners.map((e) => ({
                                                        album: (0, n.sK)({ album: e.album, artists: e.artists }),
                                                        artists: e.artists.map((e) => (0, c.as)({ artist: e })),
                                                        cover: e.cover,
                                                        coverContentMode: e.coverContentMode,
                                                        clickUrl: e.reporting.clickUrl,
                                                        yclid: e.playbackParams.yclid,
                                                        utm: e.playbackParams.utm,
                                                    })),
                                                }));
                                            break;
                                        case l.t.COLLECTION_DOWNLOADED_TRACKS:
                                            e &&
                                                'object' == typeof e &&
                                                'tracks' in e &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, T.vU)(e));
                                                    return (0, r.wg)({ items: a, rawTracks: t });
                                                })(e));
                                            break;
                                        case l.t.HISTORY:
                                        case l.t.SEARCH_HISTORY:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                Array.isArray(e.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items
                                                        .map((e) => {
                                                            switch (e.type) {
                                                                case o._.ALBUM_ITEM:
                                                                    return d(e.data.album, e.data.artists, e.data.trailer);
                                                                case o._.ARTIST_ITEM:
                                                                    return m(e.data.artist, e.data.trailer);
                                                                case o._.TRACK_ITEM:
                                                                    return I(e);
                                                                case o._.LIKED_PLAYLIST_ITEM:
                                                                    return _({
                                                                        playlist: e.data.playlist,
                                                                        likesCount: e.data.likesCount,
                                                                        trailer: e.data.trailer,
                                                                        tracksCount: e.data.trackCount,
                                                                    });
                                                                case o._.WAVE_ITEM:
                                                                    let t;
                                                                    return (
                                                                        (t = e),
                                                                        (0, r.wg)({
                                                                            type: o._.WAVE_ITEM,
                                                                            data: {
                                                                                cover: t.data.cover ? (0, Y.pX4)(t.data.cover) : void 0,
                                                                                vibe: (0, p.er)(t.data.wave),
                                                                            },
                                                                        })
                                                                    );
                                                                case o._.WAVE_AGENT_ITEM:
                                                                    return g(e);
                                                                case o._.NON_MUSIC_ALBUM_ITEM:
                                                                    return A({
                                                                        album: e.data.album,
                                                                        likesCount: e.data.likesCount,
                                                                        bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                    });
                                                                case o._.CLIP_ITEM:
                                                                case o._.CLIP:
                                                                    return { type: e.type, data: (0, b.SZ)({ clip: e.data.clip, artists: e.data.artists }) };
                                                                case o._.QUERY_TO_VIBE_ITEM:
                                                                    let a;
                                                                    return (
                                                                        (a = e), (0, r.wg)({ type: o._.QUERY_TO_VIBE_ITEM, data: (0, p.lb)(a.data.wave, a.data.agent) })
                                                                    );
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_KIDS:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                Array.isArray(e.items) &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => {
                                                        switch (e.type) {
                                                            case o._.TRACK_ITEM:
                                                                return I(e);
                                                            case o._.LIKED_PLAYLIST_ITEM:
                                                                return _({
                                                                    playlist: e.data.playlist,
                                                                    likesCount: e.data.likesCount,
                                                                    trailer: e.data.trailer,
                                                                    tracksCount: e.data.trackCount,
                                                                });
                                                            case o._.NON_MUSIC_ALBUM_ITEM:
                                                                return A({
                                                                    album: e.data.album,
                                                                    likesCount: e.data.likesCount,
                                                                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_CONCERTS:
                                            e &&
                                                'object' == typeof e &&
                                                'concerts' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = e.concerts)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { concert: t, minPrice: a } = e;
                                                                  return { ...(0, er.ho)(t, a) };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_POPULAR_TRACKS:
                                            e && 'object' == typeof e && 'tracks' in e && e.tracks && (a.data = (0, r.wg)({ items: e.tracks.map((e) => (0, T.vU)(e)) }));
                                            break;
                                        case l.t.ARTIST_RELEASE:
                                            e &&
                                                'object' == typeof e &&
                                                'release' in e &&
                                                e.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: l } = e.release;
                                                    return { album: (0, n.sK)({ album: t, artists: a, trailer: l, releaseDate: i }), releaseDate: i };
                                                })(e));
                                            break;
                                        case l.t.FAMILIAR_YOU:
                                            e &&
                                                'object' == typeof e &&
                                                (a.data = (0, r.wg)({
                                                    vibeTrackCount: null == (S = e.wave) ? void 0 : S.trackCount,
                                                    collectionTrackCount: null == (N = e.collection) ? void 0 : N.trackCount,
                                                    collectionAlbumCount: null == (E = e.collection) ? void 0 : E.albumCount,
                                                }));
                                            break;
                                        case l.t.ARTIST_PICK:
                                            e &&
                                                'object' == typeof e &&
                                                'artists' in e &&
                                                e.artists &&
                                                'playlist' in e &&
                                                e.playlist &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => (0, c.as)({ artist: e }));
                                                    return (0, r.wg)({ playlist: (0, u.bk)({ playlist: e.playlist }), artists: t });
                                                })(e));
                                            break;
                                        case l.t.ARTIST_UPCOMING_RELEASE:
                                            e &&
                                                'object' == typeof e &&
                                                'release' in e &&
                                                e.release &&
                                                'presaved' in e &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i } = e.release;
                                                    return { album: (0, n.h)({ album: t, artists: a, releaseDate: i, isPresave: e.presaved }) };
                                                })(e));
                                            break;
                                        case l.t.CONCERT_PLACE:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'map' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(eK.P5) : null;
                                                    return (0, r.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(e));
                                            break;
                                        case l.t.COLLECTION_WAVE_AGENT:
                                            e && 'object' == typeof e && 'wave' in e && 'agent' in e && (a.data = (0, r.wg)({ vibe: (0, p.lb)(e.wave, e.agent) }));
                                            break;
                                        case l.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
                                            e &&
                                                'object' == typeof e &&
                                                'artists' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => {
                                                        let t = e.items
                                                            .map((e) => {
                                                                switch (e.type) {
                                                                    case o._.MENU_ITEM:
                                                                        return eg(e);
                                                                    case o._.WAVE_AGENT_ITEM:
                                                                        return g(e);
                                                                    default:
                                                                        return;
                                                                }
                                                            })
                                                            .filter((e) => void 0 !== e);
                                                        return { artist: (0, c.as)({ artist: e.artist }), items: t };
                                                    });
                                                    return (0, r.wg)({ artists: t });
                                                })(e));
                                    }
                                    a.loadingState = h.RESOLVE;
                                } catch (e) {
                                    k.error(e),
                                        (0, r._n)(a) &&
                                            ((a.loadingState = h.REJECT),
                                            e instanceof et.GX && (e.statusCode === et.X1.NOT_FOUND || e.statusCode === et.X1.BAD_REQUEST) && (a.isNotFound = !0));
                                }
                            }),
                            getTabData: (0, r.L3)(function* (t) {
                                let { landingResource: a, modelActionsLogger: i } = (0, r._$)(e);
                                try {
                                    var l, s;
                                    e.tabs.loadingState = Y.GuX.PENDING;
                                    let i =
                                        (null == (s = ((yield a.getBlock({ source: t })) || {}).tabs)
                                            ? void 0
                                            : s.map((e) => (0, r.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }))) || [];
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e, t) => {
                                            let a = i.find((t) => t.title === e.meta.title);
                                            e.data = a || i[t];
                                        }),
                                        (e.tabs.loadingState = Y.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = Y.GuX.REJECT);
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, l, s;
                                let r = null != a ? a : 0,
                                    o = [];
                                (null == (i = e.meta) ? void 0 : i.source) && o.push(t.getTabData(e.meta.source)),
                                    null == (l = e.upperBlocks) ||
                                        l.forEach((e) => {
                                            r > 0 && ((0, eS.v)(e.meta) || ei(e.type)) && (r--, o.push(t.getBlock(e)));
                                        }),
                                    null == (s = e.tabs.data) ||
                                        s.forEach((e) => {
                                            e.blocks.slice(0, r).forEach((e) => {
                                                ((0, eS.v)(e.meta) || ei(e.type)) && o.push(t.getBlock(e));
                                            });
                                        }),
                                    o.length > 0 && (await Promise.allSettled(o));
                            },
                            getChildrenSkeleton: (0, r.L3)(function* (t) {
                                let { childrenLandingResource: a, modelActionsLogger: s } = (0, r._$)(e),
                                    { experiments: n } = (0, r.Zn)(e);
                                try {
                                    e.loadingState = Y.GuX.PENDING;
                                    let s = yield a.getSkeleton(t),
                                        d = n.checkExperiment(Y.zal.WebNextWaveAgentExperiment, 'on'),
                                        c = ((e, t) => {
                                            let a = { loadingState: Y.GuX.RESOLVE, isLoading: !1 };
                                            return (
                                                (a.meta = { selectedTabIndex: 0 }),
                                                (a.tabs = {
                                                    loadingState: Y.GuX.RESOLVE,
                                                    data: [
                                                        {
                                                            meta: { id: e.title, title: e.title },
                                                            shouldReloadNotification: !1,
                                                            blocks: e.blocks
                                                                .filter((e) => {
                                                                    let t;
                                                                    return (t = e.type), Object.values(i).includes(t);
                                                                })
                                                                .map((e) =>
                                                                    ((e, t) => {
                                                                        let a,
                                                                            s,
                                                                            n,
                                                                            { isWaveAgentEnabled: d } = t,
                                                                            c = {
                                                                                loadingState: h.RESOLVE,
                                                                                id: e.id,
                                                                                type: void 0,
                                                                                meta:
                                                                                    ((a = e),
                                                                                    (0, r.wg)({
                                                                                        title: a.title,
                                                                                        viewAllActionLink: a.viewAllUrl,
                                                                                        showPolicy: L.E.SHOW_AND_LOAD,
                                                                                    })),
                                                                                data: void 0,
                                                                                isNeededToLoad: !1,
                                                                                isLoading: !1,
                                                                                isLoaded: !0,
                                                                                isRejected: !1,
                                                                                isVisible: !0,
                                                                                isNotFound: !1,
                                                                                hasSentAnalyticsOnLoaded: !1,
                                                                                objectsCount: e.entities.length,
                                                                                setHasSentAnalyticsOnLoaded: () => {},
                                                                            };
                                                                        switch (e.type) {
                                                                            case i.RADIO: {
                                                                                let t,
                                                                                    a = d ? l.t.EDITORIAL_WAVES_AGENT : l.t.EDITORIAL_WAVES;
                                                                                if (
                                                                                    (t = e.entities)[0] &&
                                                                                    'data' in t[0] &&
                                                                                    'object' == typeof t[0].data &&
                                                                                    t[0].data &&
                                                                                    'data' in t[0].data
                                                                                ) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: a,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i, l, s, o;
                                                                                                    let n = (
                                                                                                        null == (i = e.data.data) ||
                                                                                                        null == (a = i.station) ||
                                                                                                        null == (t = a.icon)
                                                                                                            ? void 0
                                                                                                            : t.backgroundColor
                                                                                                    )
                                                                                                        ? (0, T.ye)(e.data.data.station.icon.backgroundColor)
                                                                                                        : void 0;
                                                                                                    return (0, r.wg)({
                                                                                                        title:
                                                                                                            null == (s = e.data.data) || null == (l = s.station)
                                                                                                                ? void 0
                                                                                                                : l.name,
                                                                                                        backgroundImageUrl:
                                                                                                            'avatars.mds.yandex.net/get-music-misc/34161/custom-wave-default-waves-background.image/%%',
                                                                                                        seeds: [null != (o = e.data.blockEntityDataId) ? o : ''],
                                                                                                        colors: { average: n },
                                                                                                        agent: (0, p.KU)(e.data.data.agent),
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: a });
                                                                            }
                                                                            case i.PROMOTIONS:
                                                                                if ((s = e.entities) && s[0] && 'promoId' in s[0].data) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: l.t.PROMOTIONS,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i, l, s;
                                                                                                    return (0, r.wg)({
                                                                                                        featureId: null != (t = e.data.promoId) ? t : '',
                                                                                                        title: null != (a = e.data.title) ? a : '',
                                                                                                        subtitle: null != (i = e.data.subtitle) ? i : '',
                                                                                                        imageUrl: null != (l = e.data.image) ? l : '',
                                                                                                        weblink: null != (s = e.data.url) ? s : '',
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: l.t.PROMOTIONS });
                                                                            case i.EDITORIAL_PLAYLISTS:
                                                                                if ((n = e.entities) && n[0] && 'artists' in n[0].data) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: l.t.NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i;
                                                                                                    let l =
                                                                                                            e.data.type && Object.values(en._).includes(e.data.type)
                                                                                                                ? e.data.type
                                                                                                                : void 0,
                                                                                                        s =
                                                                                                            !e.data.availableForPremiumUsers &&
                                                                                                            e.data.availableForOptions.includes(ed.E.BOOKMATE),
                                                                                                        n =
                                                                                                            e.data.disclaimers && em(e.data.disclaimers)
                                                                                                                ? e.data.disclaimers
                                                                                                                : void 0;
                                                                                                    return (0, r.wg)({
                                                                                                        type: o._.NON_MUSIC_ALBUM_ITEM,
                                                                                                        data: {
                                                                                                            id: e.data.id,
                                                                                                            title: null != (a = e.data.title) ? a : '',
                                                                                                            type: l,
                                                                                                            likesCount: e.data.likesCount,
                                                                                                            isAvailable: null == (i = e.data.available) || i,
                                                                                                            coverUri: e.data.coverUri,
                                                                                                            availableForPremiumUsers: e.data.availableForPremiumUsers,
                                                                                                            availableForOptions: e.data.availableForOptions,
                                                                                                            genre: e.data.genre,
                                                                                                            bestAlbumTracks: e.data.bests,
                                                                                                            bookmateOptionRequired: s,
                                                                                                            trackCount: e.data.trackCount,
                                                                                                            year: e.data.year,
                                                                                                            listeningFinished: e.data.listeningFinished,
                                                                                                            disclaimers: n,
                                                                                                            artists: null == (t = e.data.artists) ? void 0 : t.map(eu),
                                                                                                        },
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                if (eo(e.entities)) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: l.t.NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i;
                                                                                                    return (0, r.wg)({
                                                                                                        type: o._.LIKED_PLAYLIST_ITEM,
                                                                                                        data: {
                                                                                                            uuid: null != (a = e.data.playlistUuid) ? a : '',
                                                                                                            isAvailable: null == (i = e.data.available) || i,
                                                                                                            uid: e.data.uid,
                                                                                                            kind: e.data.kind,
                                                                                                            revision: e.data.revision,
                                                                                                            title: e.data.title,
                                                                                                            coverUri: null == (t = e.data.cover) ? void 0 : t.uri,
                                                                                                            likesCount: e.data.likesCount,
                                                                                                            tracksCount: e.data.trackCount,
                                                                                                            visibility: e.data.visibility,
                                                                                                        },
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: l.t.NON_MUSIC_EDITORIAL_COMPILATION });
                                                                            case i.PLAYLIST_WITH_TRACKS:
                                                                                if (eo(e.entities) && e.entities[0]) {
                                                                                    var m, u;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: l.t.OPEN_PLAYLIST,
                                                                                        data:
                                                                                            ((m = e.entities[0]),
                                                                                            (0, r.wg)({
                                                                                                items: m.data.tracks.map((e) => {
                                                                                                    let { track: t } = e;
                                                                                                    return (0, T.vU)(t);
                                                                                                }),
                                                                                                playlist: (0, e_.jX)(m.data),
                                                                                                coverUri: null == (u = m.data.cover) ? void 0 : u.uri,
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: l.t.OPEN_PLAYLIST });
                                                                        }
                                                                    })(e, t),
                                                                ),
                                                        },
                                                    ],
                                                }),
                                                (0, r.wg)(a)
                                            );
                                        })(s, { isWaveAgentEnabled: d });
                                    c && ((e.id = s.category), (e.title = s.title), (e.meta = (0, r.wg)(c.meta)), (e.tabs.data = (0, r.wg)(c.tabs.data))),
                                        e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.REJECT);
                                }
                            }),
                            getSkeleton: (0, r.L3)(function* (a, i) {
                                let { landingResource: l, modelActionsLogger: s } = (0, r._$)(e);
                                if (e.loadingState !== Y.GuX.PENDING)
                                    try {
                                        e.loadingState = Y.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            o = ew(null == s ? void 0 : s.blocks);
                                        o &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.REJECT);
                                    }
                            }),
                            getArtistSkeleton: (0, r.L3)(function* (a, i) {
                                let { artistsResource: l, modelActionsLogger: s } = (0, r._$)(e);
                                if (e.loadingState !== Y.GuX.PENDING)
                                    try {
                                        e.loadingState = Y.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            o = ew(null == s ? void 0 : s.blocks);
                                        o &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            void 0 !== o.tabs && (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.REJECT);
                                    }
                            }),
                            getConcertSkeleton: (0, r.L3)(function* (a, i) {
                                let { concertsResource: l, modelActionsLogger: s } = (0, r._$)(e);
                                if (e.loadingState !== Y.GuX.PENDING)
                                    try {
                                        e.loadingState = Y.GuX.PENDING;
                                        let s = yield l.getSkeleton(a),
                                            o = ew(null == s ? void 0 : s.blocks);
                                        o &&
                                            ((e.id = s.id),
                                            (e.title = s.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            void 0 !== o.tabs && (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.RESOLVE);
                                    } catch (t) {
                                        s.error(t), e.loadingState !== Y.GuX.IDLE && (e.loadingState = Y.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = Y.GuX.IDLE), (e.meta = null), e.tabs.reset(), (e.upperBlocks = null);
                            },
                        };
                        return t;
                    });
            a(25641);
            var aG = a(96579),
                aY = a(17389),
                aW = a(73547),
                aX = a(47550),
                aF = a(41817),
                az = a(57481),
                aH = a(87413),
                a$ = a(40739),
                aQ = a(78724);
        },
        23069: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        23327: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        25401: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
            };
        },
        25641: (e, t, a) => {
            'use strict';
            a.d(t, { Concert: () => C });
            var i = a(62936),
                l = a(79950),
                s = a(44020),
                r = a(47480),
                o = a(23480),
                n = a(59935),
                d = a(4497),
                c = a(13030),
                m = a(56721),
                u = a(20512),
                _ = a(20418),
                p = a(16616),
                g = a(42561),
                v = a(22363),
                b = a.n(v);
            let C = (e) => {
                let { concert: t } = e,
                    {
                        title: a,
                        datetime: v,
                        city: C,
                        place: A,
                        contentRating: T,
                        cover: I,
                        dataSessionId: h,
                        rank: L,
                        isCashbackExperimentEnabled: y,
                        isIdentityExperimentEnabled: S,
                        cashbackTitle: N,
                        cashbackValuePercent: E,
                    } = t,
                    { formatDate: x } = (0, r.A)(),
                    { ref: j, intersectionPropertyId: k } = (0, g.nMI)(),
                    R = (0, g.NKK)(),
                    { state: f, toggleTrue: P, toggleFalse: w } = (0, d.e)(!1),
                    { experiments: K } = (0, g.Pjs)(),
                    { href: O } = (0, g.uvd)('/concert/:concertId', { params: { concertId: t.id } }),
                    M = (0, g.ZpR)(O),
                    D = K.checkExperiment(g.zal.WebNextConcertPage, 'on'),
                    B = (0, s.useMemo)(() => {
                        let e = y && !!N;
                        if ((S && E) || e)
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.q, { children: x(v, (0, g.fS8)()) }),
                                    (0, i.jsxs)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: b().descriptionContainer,
                                        children: [
                                            (0, i.jsx)(_.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: b().description,
                                                children: A,
                                            }),
                                            (0, i.jsx)(_.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: b().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            T &&
                                                (0, i.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: b().description,
                                                    children: T,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(p.mi, { className: b().cashback, title: N, valuePercent: E }),
                                ],
                            });
                        let t = [];
                        return (
                            v && t.push(x(v, (0, g.fS8)())),
                            T && t.push(T),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: b().description,
                                        children: A,
                                    }),
                                    (0, i.jsxs)(u.q, { children: [x(v, (0, g.fS8)()), ' ', T] }),
                                    (0, i.jsx)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: b().description,
                                        'aria-hidden': !0,
                                        children: t.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [N, E, T, v, x, y, S, A]),
                    V = (0, s.useCallback)(
                        (e) => {
                            R({ to: o.QT.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation();
                        },
                        [P, R],
                    ),
                    U = (0, n.c)((e) => {
                        if (!D) {
                            V(e), R({ to: o.QT.ConcertScreen });
                            return;
                        }
                        M(e);
                    }),
                    G = (0, s.useCallback)(
                        (e) => {
                            (e.code === g.vLr.SPACE || e.code === g.vLr.ENTER) && (e.preventDefault(), U());
                        },
                        [U],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(m.Paper, {
                            className: b().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: a, s: i, l } = (0, g.g8k)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0) 40%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.1) 43%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.2) 46%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.3) 49%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.4) 52%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.5) 55%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.6) 58%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.7) 61%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.8) 64%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 0.9) 67%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 1) 70%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(l, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == I ? void 0 : I.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: U,
                            onKeyDown: G,
                            ref: j,
                            'data-intersection-property-id': k,
                            children: [
                                (0, i.jsx)(c.Image, {
                                    className: b().cover,
                                    src: null == I ? void 0 : I.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== L &&
                                    (0, i.jsx)(_.Caption, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'bold',
                                        className: (0, l.$)(b().index, b().title),
                                        'aria-hidden': !0,
                                        children: L,
                                    }),
                                (0, i.jsxs)('div', {
                                    className: b().meta,
                                    children: [
                                        (0, i.jsx)(_.Heading, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, l.$)(b().title, b().concertTitle),
                                            children: a,
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: b().textContainer,
                                            children: [
                                                v &&
                                                    (0, i.jsx)(p.dE, {
                                                        datetime: v,
                                                        className: b().date,
                                                        monthClassName: b().description,
                                                        dayClassName: b().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, i.jsxs)('div', {
                                                    className: b().info,
                                                    children: [
                                                        (0, i.jsx)(_.Caption, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: b().title,
                                                            children: C,
                                                        }),
                                                        B,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(p.hW, { dataSessionId: h, isOpened: f, onOpen: P, onClose: w }),
                    ],
                });
            };
        },
        26397: (e, t, a) => {
            'use strict';
            a.d(t, { R6: () => r, xf: () => l, nD: () => s.useGenerativeActions });
            var i = a(51606);
            let l = (e) => {
                var t, a;
                return (0, i.wg)({
                    title: e.title,
                    stationId: e.stationId,
                    imageUrl: e.imageUrl,
                    style: { backgroundColor: null == (t = e.style) ? void 0 : t.backgroundColor, titleColor: null == (a = e.style) ? void 0 : a.titleColor },
                });
            };
            var s = a(79845);
            let r = i.gK.model('NeuromusicItem', {
                title: i.gK.string,
                stationId: i.gK.string,
                imageUrl: i.gK.maybe(i.gK.string),
                style: i.gK.maybe(i.gK.model({ backgroundColor: i.gK.maybe(i.gK.string), titleColor: i.gK.maybe(i.gK.string) })),
            });
        },
        26427: (e, t, a) => {
            'use strict';
            a.d(t, { Vf: () => n.MixesGridMixCard, bv: () => o, rc: () => s });
            var i = a(51606),
                l = a(42561);
            let s = (e) => (0, i.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(l.pX4) });
            var r = a(54690);
            let o = i.gK.model('MixesGridMixCardItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.maybeNull(i.gK.string),
                covers: i.gK.maybeNull(i.gK.array(r.$B)),
            });
            var n = a(55880);
        },
        26751: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        27247: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { Q: () => i }),
                (function (e) {
                    (e.StreamPause = 'streamPause'), (e.StreamPlay = 'streamPlay'), (e.TimestampLike = 'timestampLike'), (e.TimestampDislike = 'timestampDislike');
                })(i || (i = {}));
        },
        27922: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        29025: (e, t, a) => {
            'use strict';
            a.d(t, { HorizontalClipCard: () => f });
            var i = a(62936),
                l = a(79950),
                s = a(19992),
                r = a(19718),
                o = a(44020),
                n = a(47480),
                d = a(33878),
                c = a(8669),
                m = a(81959),
                u = a(59935),
                _ = a(60188),
                p = a(49923),
                g = a(13030),
                v = a(56721),
                b = a(20418),
                C = a(81628),
                A = a(25099),
                T = a(42561),
                I = a(85906),
                h = a(10945),
                L = a(89131),
                y = a.n(L),
                S = a(85742),
                N = a(31899),
                E = a(6229),
                x = a.n(E);
            let j = (0, r.PA)((e) => {
                let { className: t, clip: a, likeIconSize: s = 'xxs' } = e,
                    { user: r } = (0, T.Pjs)(),
                    { sendLikeSearchFeedback: n } = (0, T.zEv)(),
                    d = (0, A.KX)(a),
                    [m, _] = (0, o.useState)(!1),
                    [p, g] = (0, o.useState)(!1),
                    v = (0, u.c)(() => {
                        m || a.isLiked || (_(!0), null == n || n()), d();
                    });
                return (0, i.jsx)('div', {
                    className: (0, l.$)(x().root, x().controls, t, { [x().controls_disabled]: !a.isAvailable }),
                    children:
                        a.isAvailable &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(I.aQ, {
                                    fallback: (0, i.jsx)(I.cy, {
                                        size: 'xs',
                                        iconSize: s,
                                        className: (0, l.$)(x().item, x().likeIcon),
                                        isLiked: a.isLiked,
                                        onClick: v,
                                        disabled: !r.isAuthorized,
                                    }),
                                }),
                                (0, i.jsx)(N.ClipContextMenu, {
                                    placement: 'top-start',
                                    icon: (0, i.jsx)(S.Icon, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: a,
                                    className: (0, l.$)(x().contextMenu, { [x().contextMenu_visible]: p }),
                                    onOpenChange: g,
                                    open: p,
                                    ...(0, c.Am)(c.Kq.clip.CLIP_CONTEXT_MENU_BUTTON),
                                }),
                            ],
                        }),
                });
            });
            var k = a(41019),
                R = a.n(k);
            let f = (0, r.PA)((e) => {
                var t;
                let { clip: a, className: r, coverClassName: L, playButtonIconSize: S = 'xs', likeIconSize: N, viewUuid: E, shouldShowTimecode: x = !1 } = e,
                    { fullscreenVideoPlayer: k } = (0, T.Pjs)(),
                    { formatMessage: f } = (0, n.A)(),
                    P = (0, T.PMf)(null != (t = a.duration) ? t : 0),
                    w = (0, A._7)(E),
                    K = (0, A.Mn)(E),
                    { ref: O, intersectionPropertyId: M } = (0, T.nMI)({ callback: K }),
                    { from: D } = (0, T.fyy)({ pageId: T._Q$.VIDEO_PLAYER, contextId: k.state.contextId, contextType: m.K.Various, blockId: T.UfI.CLIPS }),
                    [B, V] = (0, o.useState)(!1),
                    { sendNavigateSearchFeedback: U, sendPlaySearchFeedback: G } = (0, T.zEv)(),
                    Y = (0, A.Cc)(),
                    W = (0, o.useRef)(null),
                    X = (0, u.c)(() => {
                        W.current && ((W.current.currentTime = 0), W.current.play());
                    }),
                    F = (0, o.useMemo)(() => (0, s.A)(X, 500), [X]),
                    z = (0, u.c)(() => {
                        var e;
                        null == (e = W.current) || e.pause();
                    }),
                    H = (0, o.useMemo)(() => k.ids.indexOf(a.clipId), [k, a.clipId]),
                    { isPlaying: $ } = (0, T.Dx4)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: T.H7u.VARIOUS_CLIP_CONTEXT }, from: D },
                            queueParams: { index: H },
                            entitiesData: k.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(a.clipId),
                        sonataState: k.state,
                        playbackId: T.V_r.CLIP,
                    }),
                    Q = (0, u.c)(() => {
                        Y([a.clipId]), B || $ || (V(!0), null == G || G()), null == U || U(), w();
                    }),
                    q = (0, h.useClipDisclaimer)({ clip: a, callback: Q }),
                    Z = (0, u.c)((e) => {
                        (0, p.P)(e, I.$f.ripple), q(e);
                    }),
                    J = (0, _.L)(() =>
                        (0, i.jsx)(b.Caption, {
                            className: (0, l.$)(I.$f.text, I.$f.titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: a.title,
                        }),
                    ),
                    ee = (0, o.useCallback)(
                        (e, t) => {
                            var l;
                            return (null == (l = a.artists) ? void 0 : l.length)
                                ? (0, i.jsx)(C.iQ, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1 })
                                : null;
                        },
                        [a.artists],
                    ),
                    et = f({ id: 'entity-names.clip-name' }, { clipName: a.title }),
                    ea = (0, _.L)(() =>
                        a.isAvailable
                            ? (0, i.jsxs)(v.Paper, {
                                  className: (0, l.$)(R().cover, y().cover, y().cover_withoutOffset, L),
                                  radius: 'xs',
                                  onMouseEnter: F,
                                  onMouseLeave: z,
                                  children: [
                                      a.previewUrl &&
                                          (0, i.jsx)('video', {
                                              className: y().media,
                                              ref: W,
                                              poster: a.thumbnail && (0, d.createAvatarVideoUrl)(a.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, i.jsx)('source', { src: a.previewUrl, type: 'video/mp4' }),
                                          }),
                                      a.thumbnail &&
                                          (0, i.jsx)(g.Image, {
                                              className: y().image,
                                              src: a.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: d.createAvatarVideoUrl,
                                              alt: et,
                                          }),
                                      void 0 !== a.duration &&
                                          x &&
                                          (0, i.jsx)(b.Caption, {
                                              variant: 'span',
                                              className: (0, l.$)(y().duration, R().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': P,
                                              children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E4p)(a.duration, a.duration) }),
                                          }),
                                      (0, i.jsx)(I.DM, { variant: 'filled', className: y().playButton, onClick: q, iconSize: S }),
                                  ],
                              })
                            : (0, i.jsxs)(v.Paper, {
                                  className: (0, l.$)(R().cover, R().unavailable, L),
                                  radius: 'xs',
                                  children: [
                                      (0, i.jsx)(g.FallbackImage, {
                                          className: y().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          ...(0, c.Am)(c.S7.ENTITY_COVER_FALLBACK_IMAGE),
                                      }),
                                      (0, i.jsx)(I.DM, { variant: 'filled', className: y().playButton, iconSize: S, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, i.jsxs)(I.Cj, {
                    ref: O,
                    'data-intersection-property-id': M,
                    className: (0, l.$)(I.$f.root, { [I.$f.root_disabled]: !a.isAvailable }, R().root, r),
                    onClick: Z,
                    ...(0, c.Am)(c.Kq.clip.HORIZONTAL_CLIP_CARD),
                    children: [
                        ea,
                        (0, i.jsx)(I.ro, {
                            isDisabled: !a.isAvailable,
                            title: J,
                            artistsComponent: ee,
                            getDescriptionTexts: a.getDescriptionTexts,
                            explicitMarkVariant: a.explicitDisclaimer,
                            isLiked: a.isLiked,
                        }),
                        (0, i.jsx)(j, { className: I.$f.controlsBar, clip: a, likeIconSize: N }),
                    ],
                });
            });
        },
        29042: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { R: () => i }),
                (function (e) {
                    (e.RADIAL = 'RADIAL'), (e.STACK = 'STACK');
                })(i || (i = {}));
        },
        30137: (e) => {
            e.exports = {
                root: 'InStyle_root__ZsdXE',
                controls: 'InStyle_controls__mGqhj',
                header: 'InStyle_header__C2AWP',
                important: 'InStyle_important__msPsl',
                tab: 'InStyle_tab__DeURY',
                tabCarousel: 'InStyle_tabCarousel__SXqBO',
                item: 'InStyle_item__e5_Qz',
            };
        },
        31899: (e, t, a) => {
            'use strict';
            a.d(t, { ClipContextMenu: () => p });
            var i = a(62936),
                l = a(19718),
                s = a(47480),
                r = a(26731),
                o = a(8669),
                n = a(59935),
                d = a(85742),
                c = a(64304),
                m = a(25099),
                u = a(42561),
                _ = a(85906);
            let p = (0, l.PA)((e) => {
                let { onOpenChange: t, open: a, placement: l, isFullscreenMobile: p = !1, icon: g, size: v, clip: b, ...C } = e,
                    { currentClipInfo: A, settings: T, user: I } = (0, u.Pjs)(),
                    { formatMessage: h } = (0, s.A)(),
                    { shareLink: L, pathname: y } = (0, u.bNS)(u.Zyd.video.href, { query: { ids: String(b.clipId) } }),
                    S = p || T.isMobile;
                (0, u.NBO)(a);
                let N = (0, m.KX)(b),
                    E = (0, n.c)(() => {
                        A.setClipId(b.clipId), A.modal.open();
                    }),
                    x = { variant: u.Yxq.CLIP, id: b.clipId, title: b.title, path: y };
                return (0, i.jsxs)(c.W1, {
                    isMobile: S,
                    placement: l,
                    offsetOptions: -10,
                    open: a,
                    onOpenChange: t,
                    icon: g,
                    size: v,
                    containerProps: (0, o.Am)(o.Kq.clip.CLIP_CONTEXT_MENU),
                    ariaLabel: h({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...C,
                    children: [
                        (0, i.jsx)(_.TW, { onClick: N, isLiked: b.isLiked, disabled: !I.isAuthorized }),
                        (0, i.jsx)(_.Ht, { shareLink: L, entityMeta: x }),
                        (0, i.jsx)(c.Dr, {
                            onClick: E,
                            icon: (0, i.jsx)(d.Icon, { variant: 'info', size: 'xxs' }),
                            ...(0, o.Am)(o.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON),
                            children: (0, i.jsx)(r.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
        },
        32474: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                l = a(49327),
                s = a(44020),
                r = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return r[e](a, a.exports, n), a.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useDebouncedToggle = void 0);
                let e = n(352),
                    t = n(810);
                d.useDebouncedToggle = (a) => {
                    let { delay: i, initialState: l, throttleTimeout: s } = a,
                        r = (0, t.useRef)(null),
                        [o, n] = (0, t.useState)(!!l),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    n(!l),
                                        r.current && window.clearTimeout(r.current),
                                        (r.current = window.setTimeout(() => {
                                            n(!!l);
                                        }, i));
                                }, s),
                            [i, l, s],
                        ),
                        c = (0, t.useCallback)(() => {
                            n(!!l), r.current && window.clearTimeout(r.current);
                        }, [l]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                r.current && window.clearTimeout(r.current);
                            },
                            [],
                        ),
                        { state: o, handleDebouncedToggle: d, reset: c }
                    );
                };
            })(),
                d.__esModule;
            var c = d.useDebouncedToggle;
        },
        38952: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        39171: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        40739: (e, t, a) => {
            'use strict';
            a.d(t, { Skeleton: () => ls });
            var i,
                l = a(62936),
                s = a(79950),
                r = a(19718),
                o = a(69526),
                n = a(44020),
                d = a(8669),
                c = a(59935),
                m = a(97378),
                u = a(85023),
                _ = a(42561),
                p = a(85906),
                g = a(38952),
                v = a(17637),
                b = a(60188),
                C = a(19726),
                A = a.n(C),
                T = a(63854),
                I = a(23480),
                h = a(47480),
                L = a(26731),
                y = a(81959);
            !(function (e) {
                (e.TOP = 'top'), (e.CENTER = 'center');
            })(i || (i = {}));
            var S = a(56721),
                N = a(20418),
                E = a(25270),
                x = a(81628),
                j = a(93366),
                k = a.n(j);
            let R = (0, r.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: a } = (0, h.A)(),
                    { ref: r, intersectionPropertyId: o } = (0, _.nMI)(),
                    n = (0, _.NKK)(),
                    m = (0, _.ZpR)(t.albumUrl),
                    u = (0, E.cp)({ album: t.album, callback: m }),
                    g = (0, _.brA)(),
                    v = (0, _.PT7)(),
                    {
                        paywall: { modal: b },
                    } = (0, _.Pjs)(),
                    C = (0, _.NPu)(),
                    { from: A } = (0, _.fyy)({ contextId: t.album.id, contextType: y.K.Album }),
                    { isPlaying: T, togglePlay: j } = (0, _.Dx4)({
                        playContextParams: {
                            contextData: { type: y.K.Album, meta: { id: t.album.id }, from: A, utmLink: (0, _.ZQO)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    R = (0, c.c)((e) => {
                        t.setClicked(), n({ to: I.QT.AlbumScreen }), u(e);
                    }),
                    f = (0, c.c)(() => {
                        t.setClicked(), j();
                    }),
                    P = (0, E.cp)({ album: t.album, callback: f }),
                    w = (0, c.c)(() => {
                        if (!v()) {
                            if (C) return void b.open();
                            P(), g(!T);
                        }
                    }),
                    K = a({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    O = t.coverContentMode === i.TOP;
                return (0, l.jsxs)('div', {
                    className: k().root,
                    ref: r,
                    'data-intersection-property-id': o,
                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD),
                    children: [
                        (0, l.jsxs)(S.Paper, {
                            className: k().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER),
                            children: [
                                (0, l.jsx)(p.N_, {
                                    className: k().artistLink,
                                    href: t.albumUrl,
                                    onClick: R,
                                    'aria-label': K,
                                    children: (0, l.jsx)(p.BW, {
                                        className: (0, s.$)(k().artistImage, { [k().artistImage_withTopPosition]: O }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, l.jsx)(S.Paper, {
                                    className: k().albumCover,
                                    radius: 'xs',
                                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER),
                                    children: (0, l.jsx)(p.N_, {
                                        className: k().albumLink,
                                        href: t.albumUrl,
                                        onClick: R,
                                        'aria-label': K,
                                        children: (0, l.jsx)(p.BW, {
                                            className: k().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(p.DM, {
                                    className: k().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: T,
                                    onClick: w,
                                    iconClassName: k().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, l.jsx)(N.Caption, {
                                        className: k().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, l.jsx)(L.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, l.jsxs)('div', {
                            className: k().meta,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: k().titleContainer,
                                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE),
                                    children: [
                                        (0, l.jsx)(N.Caption, {
                                            className: k().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, l.jsx)(p.N_, {
                                                className: k().titleLink,
                                                href: t.albumUrl,
                                                onClick: R,
                                                ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK),
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, l.jsx)(p.Nq, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, l.jsx)(x.iQ, { className: k().artists, linkClassName: k().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var f = a(33878),
                P = a(21153),
                w = a(68085),
                K = {
                    1964: (e) => {
                        e.exports = w;
                    },
                },
                O = {},
                M = {};
            (() => {
                Object.defineProperty(M, 'X', { value: !0 }), (M.q = void 0);
                var e = (function e(t) {
                    var a = O[t];
                    if (void 0 !== a) return a.exports;
                    var i = (O[t] = { exports: {} });
                    return K[t](i, i.exports, e), i.exports;
                })(1964);
                Object.defineProperty(M, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                M.X;
            var D = M.q;
            let B = (e) => {
                let t,
                    { callback: a, visibleTime: i, threshold: l } = e;
                return (0, m.Gv)(
                    (e, l) => {
                        e.isIntersecting &&
                            (t = setTimeout(() => {
                                a(), l.disconnect();
                            }, i)),
                            e.isIntersecting || clearTimeout(t);
                    },
                    { threshold: l },
                );
            };
            var V = a(99336),
                U = a.n(V);
            let G = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: a,
                            setOutdated: i,
                            headerClassName: r,
                            containerClassName: o,
                            data: d,
                            meta: c,
                            headingVariant: m,
                            className: u,
                            children: _,
                            ...g
                        } = e,
                        { intersectionPropertyId: v, ref: b } = ((e) => {
                            let { forwardedRef: t, isLoaded: a, data: i, setOutdated: l } = e,
                                { report: s, reporting: r } = null != i ? i : {},
                                { ref: o, intersectionPropertyId: d } = ((e) => {
                                    let { params: t, isLoaded: a } = e,
                                        i = (0, n.useRef)(null),
                                        l = (0, n.useId)(),
                                        s = (0, n.useMemo)(() => {
                                            if (a) return t.map(B);
                                        }, [a, t]);
                                    return (
                                        (0, n.useEffect)(
                                            () => (
                                                null == s ||
                                                    s.forEach((e) => {
                                                        i.current && e.observe(i.current);
                                                    }),
                                                () => {
                                                    null == s ||
                                                        s.forEach((e) => {
                                                            e.disconnect();
                                                        });
                                                }
                                            ),
                                            [s],
                                        ),
                                        { intersectionPropertyId: l, ref: i }
                                    );
                                })({
                                    isLoaded: a,
                                    params: (0, n.useMemo)(() => {
                                        var e, t, a;
                                        return [
                                            {
                                                threshold: 0,
                                                visibleTime: null != (e = null == r ? void 0 : r.blockRender.timeMs) ? e : 0,
                                                callback: () => {
                                                    let e = null == r ? void 0 : r.blockRender.url;
                                                    e && (null == s || s(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime: null != (t = null == r ? void 0 : r.blockImpression.timeMs) ? t : 2100,
                                                callback: () => {
                                                    let e = null == r ? void 0 : r.blockImpression.url;
                                                    e && (null == s || s(e)), l();
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime: null != (a = null == r ? void 0 : r.adImpressions.timeMs) ? a : 2100,
                                                callback: () => {
                                                    let e = null == r ? void 0 : r.adImpressions.url;
                                                    e && (null == s || s(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        s,
                                        null == r ? void 0 : r.adImpressions.timeMs,
                                        null == r ? void 0 : r.adImpressions.url,
                                        null == r ? void 0 : r.blockImpression.timeMs,
                                        null == r ? void 0 : r.blockImpression.url,
                                        null == r ? void 0 : r.blockRender.timeMs,
                                        null == r ? void 0 : r.blockRender.url,
                                        l,
                                    ]),
                                });
                            return { intersectionPropertyId: d, ref: D([o, t]) };
                        })({ forwardedRef: t, data: d, isLoaded: a, setOutdated: i }),
                        C = (0, n.useRef)(null);
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(U().root, u),
                        ref: b,
                        'data-intersection-property-id': v,
                        ...(0, f.getDataAttrFromProps)(g),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: r,
                                title: c.title,
                                controls: (0, l.jsx)(p.X9, { className: U().controls, carouselRef: C }),
                                headingVariant: m,
                            }),
                            (0, l.jsx)(P.Carousel, { className: o, ref: C, itemClassName: (0, s.$)(U().item, U().important), children: _ }),
                        ],
                    });
                },
                Y = (0, n.forwardRef)((e, t) => (0, l.jsx)(G, { forwardRef: t, ...e })),
                W = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, l.jsx)(Y, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == a ? void 0 : a.items.length,
                                              children: (0, l.jsx)(R, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                X = (0, n.forwardRef)((e, t) => (0, l.jsx)(W, { forwardRef: t, ...e }));
            var F = a(49923),
                z = a(95235),
                H = a.n(z);
            let $ = (0, r.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            album: i,
                            description: r,
                            trailerButton: o,
                            entityName: m,
                            onClick: u,
                            albumUrl: g,
                            from: v,
                            utmLink: b,
                            coverColor: C,
                            ...A
                        } = e,
                        T = (0, _.ZpR)(g),
                        L = (0, _.PT7)(),
                        x = (0, _.brA)(),
                        {
                            paywall: { modal: j },
                        } = (0, _.Pjs)(),
                        k = (0, _.NPu)(),
                        { formatMessage: R } = (0, h.A)(),
                        { isPlaying: P, togglePlay: w } = (0, _.Dx4)({
                            playContextParams: { contextData: { type: y.K.Album, meta: { id: i.id }, from: v, utmLink: b }, loadContextMeta: !0 },
                        }),
                        K = (0, c.c)(() => {
                            null == u || u(), w();
                        }),
                        O = (0, E.cp)({ album: i, callback: T }),
                        M = (0, E.cp)({ album: i, callback: K }),
                        D = (0, _.NKK)(),
                        B = (0, c.c)((e) => {
                            (0, F.P)(e, H().ripple), e.stopPropagation(), null == u || u(), D({ to: I.QT.AlbumScreen }), O(e);
                        }),
                        V = (0, c.c)(() => {
                            if (!L()) {
                                if (k) return void j.open();
                                M(), x(!P);
                            }
                        }),
                        U = (0, n.useMemo)(() => {
                            let e;
                            if (C) {
                                let { h: t, s: a } = (0, _.g8k)(C);
                                e = 'hsl('.concat(t, ', ').concat(a, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == i ? void 0 : i.averageColor };
                        }, [null == i ? void 0 : i.averageColor, C]),
                        G = m ? ''.concat(m, ' ').concat(i.title) : i.title;
                    return (0, l.jsxs)(S.Paper, {
                        radius: 'l',
                        className: (0, s.$)(H().root, t),
                        ref: a,
                        style: U,
                        ...(0, f.getDataAttrFromProps)(A),
                        children: [
                            (0, l.jsx)(p.N_, { href: g, className: H().paperLink, onClick: B, 'aria-label': G }),
                            (0, l.jsx)(p.BW, {
                                className: H().image,
                                src: i.coverUri,
                                alt: R({ id: 'entity-names.album-name' }, { albumName: i.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, l.jsxs)('div', {
                                className: H().info,
                                children: [
                                    (0, l.jsx)(N.Caption, {
                                        className: H().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': G,
                                        ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD_TITLE),
                                        children: i.title,
                                    }),
                                    r &&
                                        (0, l.jsx)(N.Caption, {
                                            className: H().description,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD_DESCRIPTION),
                                            children: r,
                                        }),
                                ],
                            }),
                            (0, l.jsxs)('div', {
                                className: H().container,
                                children: [
                                    i.explicitDisclaimer &&
                                        (0, l.jsx)(p.Nq, {
                                            className: H().explicitMark,
                                            containerClassName: H().explicitMarkContainer,
                                            getDescriptionTexts: i.getDescriptionTexts,
                                            variant: i.explicitDisclaimer,
                                        }),
                                    o,
                                    (0, l.jsx)(p.DM, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: H().button,
                                        iconClassName: H().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: P,
                                        onClick: V,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                Q = (0, n.forwardRef)((e, t) => (0, l.jsx)($, { forwardRef: t, ...e })),
                q = (0, r.PA)((e) => {
                    let { promo: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        { from: s } = (0, _.fyy)({ contextId: t.album.id, contextType: y.K.Album });
                    return (0, l.jsx)(Q, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, _.ZQO)(t.reportingProperties),
                        from: s,
                        ref: a,
                        'data-intersection-property-id': i,
                        description: t.album.artistNames,
                        ...(0, d.Am)(d.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD),
                    });
                }),
                Z = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, l.jsx)(Y, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == a ? void 0 : a.items.length,
                                              children: (0, l.jsx)(q, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                J = (0, n.forwardRef)((e, t) => (0, l.jsx)(Z, { forwardRef: t, ...e }));
            var ee = a(16616);
            let et = (0, r.PA)((e) => {
                    var t, a, i, s;
                    let {
                            forwardRef: r,
                            isShimmerVisible: o,
                            isShimmerActive: n,
                            containerClassName: d,
                            headerClassName: c,
                            meta: m,
                            data: u,
                            headingVariant: p,
                            className: g,
                            ...v
                        } = e,
                        { artist: b, concert: C, experiments: A } = (0, _.Pjs)(),
                        T = null != (i = null != (a = b.id) ? a : C.leadArtistId) ? i : '',
                        h = A.checkExperiment(_.zal.WebNextConcertsIdentityEventType, 'on'),
                        L = h ? ee.MU : ee.ZH;
                    return (0, l.jsx)(_.Bki, {
                        objectType: I.ky.Shortcut,
                        objectId: String(T),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (s = null == u || null == (t = u.items) ? void 0 : t.length) ? s : 0,
                        children: (0, l.jsx)(ee.BD, {
                            ref: r,
                            artistId: String(T),
                            title: m.title,
                            viewAllActionLink: m.viewAllActionLink,
                            isLoading: o || n,
                            headingVariant: p,
                            className: g,
                            headerClassName: c,
                            containerClassName: d,
                            ...(0, f.getDataAttrFromProps)(v),
                            children:
                                null == u
                                    ? void 0
                                    : u.items.map((e, t) => {
                                          var a, i;
                                          let {
                                              objectPosX: s,
                                              objectPosY: r,
                                              objectsCount: o,
                                          } = (0, _.$tp)({ index: t, count: null != (i = null == (a = u.items) ? void 0 : a.length) ? i : 0, itemsCountPerColumn: 2 });
                                          return (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: r,
                                                  objectsCount: o,
                                                  children: (0, l.jsx)(ee.VN, {
                                                      artistId: String(T),
                                                      concert: e,
                                                      meta: (0, l.jsx)(L, { concert: e }),
                                                      shouldShowMask: h,
                                                  }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                ea = (0, n.forwardRef)((e, t) => (0, l.jsx)(et, { forwardRef: t, ...e }));
            var ei = a(20512),
                el = a(94891),
                es = a.n(el);
            let er = (0, r.PA)((e) => {
                    var t, a, i;
                    let { isShimmerVisible: s, isShimmerActive: r, headerClassName: o, data: n, headingVariant: d } = e,
                        { ref: c, intersectionPropertyId: m } = (0, _.nMI)(),
                        { playlist: u, artists: g } = n || {},
                        { artist: v } = (0, _.Pjs)(),
                        b = !!(null == (t = v.meta) ? void 0 : t.artist.isAvailable),
                        C = null == (a = v.meta) ? void 0 : a.artist.coverUri,
                        A = null == (i = v.meta) ? void 0 : i.artist.name;
                    return (0, l.jsx)(p.Tw, {
                        ref: c,
                        'data-intersection-property-id': m,
                        coverUrl: null == u ? void 0 : u.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == u ? void 0 : u.url,
                        title: null == u ? void 0 : u.title,
                        controls: !1,
                        coverContainerClassName: es().cover,
                        shimmerCoverClassName: es().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: r,
                        headingVariant: d,
                        className: o,
                        subTitle: (0, l.jsxs)('div', {
                            className: es().subTitle,
                            children: [
                                (0, l.jsx)(ei.q, {
                                    children: (0, l.jsx)(N.Heading, {
                                        variant: 'h4',
                                        children: (0, l.jsx)(L.A, { id: 'page.artist-pick-aria-label', values: { artistName: A } }),
                                    }),
                                }),
                                (0, l.jsx)(N.Caption, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: es().text,
                                    'aria-hidden': !0,
                                    children: (0, l.jsx)(L.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, l.jsx)(S.Paper, {
                                    radius: 'round',
                                    className: es().smallCoverContainer,
                                    children: (0, l.jsx)(p.BW, {
                                        fit: 'cover',
                                        src: C,
                                        size: 50,
                                        className: es().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: b,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                A &&
                                    (0, l.jsx)(N.Caption, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: es().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: A,
                                    }),
                            ],
                        }),
                        description: (0, l.jsx)(x.iQ, {
                            artists: g,
                            linkClassName: es().artistLink,
                            spoilerClassName: es().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, l.jsx)(L.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eo = (0, r.PA)((e) => {
                    var t, a;
                    let { forwardRef: i, className: s, ...r } = e;
                    return (0, l.jsx)('section', {
                        ref: i,
                        className: s,
                        ...(0, f.getDataAttrFromProps)(r),
                        children: (0, l.jsx)(_.Bki, {
                            objectType: I.ky.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId: null != (a = null == (t = r.data) ? void 0 : t.playlist.id) ? a : '',
                            children: (0, l.jsx)(er, { ...r }),
                        }),
                    });
                }),
                en = (0, n.forwardRef)((e, t) => (0, l.jsx)(eo, { forwardRef: t, ...e }));
            var ed = a(66161),
                ec = a(3481),
                em = a.n(ec);
            let eu = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: r,
                            meta: o,
                            data: n,
                            headerClassName: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        g = (function () {
                            var e;
                            let { artist: t, concert: a } = (0, _.Pjs)();
                            return null != (e = t.id) ? e : a.leadArtistId;
                        })(),
                        { from: v, utmLink: b } = (0, _.fyy)({ contextType: y.K.Artist, contextId: g });
                    return null === g
                        ? null
                        : (0, l.jsx)(p.$2, {
                              className: m,
                              ref: t,
                              shimmer: (0, l.jsx)(p.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                              maxColumnsCount: p.DI.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              carouselClassName: r,
                              carouselItemClassName: (0, s.$)(em().item, em().important),
                              blockHeaderClassName: d,
                              blockHeaderTitle: o.title,
                              blockHeaderDescription: o.description,
                              blockHeaderHeadingVariant: c,
                              viewAllActionLink: o.viewAllActionLink,
                              ...u,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) => {
                                            var a;
                                            let { objectPosX: i, objectPosY: s, objectsCount: r } = (0, _.$tp)({ index: t, count: n.items.length });
                                            return (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectId: e.id,
                                                    objectType: I.ky.Track,
                                                    objectPosX: i,
                                                    objectPosY: s,
                                                    objectsCount: r,
                                                    children: (0, l.jsx)(ed.Kt, {
                                                        track: e,
                                                        playContextParams:
                                                            ((a = e.id),
                                                            n && g
                                                                ? {
                                                                      contextData: { type: y.K.Artist, meta: { id: g }, from: v, utmLink: b },
                                                                      queueParams: { index: t, entityId: a },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: y.K.Artist, meta: { id: '' }, from: v, utmLink: b } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                e_ = (0, n.forwardRef)((e, t) => (0, l.jsx)(eu, { forwardRef: t, ...e }));
            var ep = a(90914);
            let eg = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, b.L)(() =>
                            a || !n
                                ? (0, l.jsx)(p.Vt, { className: s, isActive: i })
                                : (0, l.jsx)(_.Bki, {
                                      objectType: I.ky.Album,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, l.jsx)(ep.aX, { className: s, album: n.album }),
                                  }),
                        );
                    return (0, l.jsxs)('section', {
                        className: c,
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [(0, l.jsx)(p.Tw, { className: r, title: o.title, headingVariant: d, titleLineClamp: 1 }), u],
                    });
                },
                ev = (0, n.forwardRef)((e, t) => (0, l.jsx)(eg, { forwardRef: t, ...e })),
                eb = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, b.L)(() =>
                            a || !n
                                ? (0, l.jsx)(p.Vt, { className: s, isActive: i })
                                : (0, l.jsx)(_.Bki, {
                                      objectType: I.ky.UpcomingAlbum,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, l.jsx)(ep.M3, { className: s, upcomingAlbum: n.album }),
                                  }),
                        );
                    return (0, l.jsxs)('section', {
                        className: c,
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [(0, l.jsx)(p.Tw, { className: r, title: o.title, headingVariant: d, titleLineClamp: 1 }), u],
                    });
                },
                eC = (0, n.forwardRef)((e, t) => (0, l.jsx)(eb, { forwardRef: t, ...e })),
                eA = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: s,
                            meta: r,
                            data: o,
                            headerClassName: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        { from: u, utmLink: g } = (0, _.fyy)({ contextType: y.K.Playlist, contextId: null == o ? void 0 : o.playlist.id }),
                        v = (0, _.iZJ)({ playlistId: null == o ? void 0 : o.playlist.id });
                    return (0, l.jsx)(_._Fn, {
                        sourceContextData: v,
                        children: (0, l.jsx)(p.$2, {
                            className: c,
                            ref: t,
                            shimmer: (0, l.jsx)(p.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                            maxColumnsCount: p.DI.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            carouselClassName: s,
                            blockHeaderClassName: n,
                            blockHeaderTitle: r.title,
                            blockHeaderDescription: r.description,
                            blockHeaderHeadingVariant: d,
                            viewAllActionLink: r.viewAllActionLink,
                            ...m,
                            children:
                                null == o
                                    ? void 0
                                    : o.items.map((e, t) => {
                                          let { objectPosX: a, objectPosY: i, objectsCount: s } = (0, _.$tp)({ index: t, count: o.items.length });
                                          return (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: I.ky.Track,
                                                  objectPosX: a,
                                                  objectPosY: i,
                                                  objectsCount: s,
                                                  children: (0, l.jsx)(ed.QB, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          o
                                                              ? {
                                                                    contextData: { type: y.K.Playlist, meta: { id: o.playlist.id }, from: u, utmLink: g },
                                                                    queueParams: { index: o.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: y.K.Playlist, meta: { id: '' }, from: u, utmLink: g } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eT = (0, n.forwardRef)((e, t) => (0, l.jsx)(eA, { forwardRef: t, ...e }));
            var eI = a(66281);
            let eh = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                eL = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, data: s, meta: r, containerClassName: o, headerClassName: n, className: d, ...c } = e;
                    return (0, l.jsx)(eI.KR, {
                        className: d,
                        ref: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        clips: eh(null == s ? void 0 : s.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: o,
                        headerClassName: n,
                        ...c,
                    });
                },
                ey = (0, n.forwardRef)((e, t) => (0, l.jsx)(eL, { forwardRef: t, ...e }));
            var eS = a(42538),
                eN = a.n(eS);
            let eE = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o, headingVariant: n } = e,
                        { formatMessage: d } = (0, h.A)();
                    return (0, l.jsxs)('div', {
                        className: eN().root,
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': d({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, l.jsx)('div', { className: (0, s.$)(eN().text, o), children: (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                ex = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (null == n ? void 0 : n.isEmptyBlock)
                        ? (0, l.jsx)(eE, {
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                              headingVariant: d,
                          })
                        : (0, l.jsx)(p.OY, {
                              className: c,
                              ...m,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              headerClassName: r,
                              containerClassName: s,
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              ref: t,
                              headingVariant: d,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: n.items.length,
                                                    children: (0, l.jsx)(ep.aX, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                ej = (0, n.forwardRef)((e, t) => (0, l.jsx)(ex, { forwardRef: t, ...e }));
            var ek = a(92496),
                eR = a(4237),
                ef = a.n(eR),
                eP = a(65258),
                ew = a(47125),
                eK = a.n(ew);
            let eO = (e) => {
                    let { tab: t, areBothTabsEmpty: a } = e,
                        i = (0, n.useMemo)(() => {
                            switch (t) {
                                case eP.n.ALBUM:
                                    return (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-albums' });
                                case eP.n.PRESAVED_ALBUM:
                                    return (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, l.jsx)('div', { className: (0, s.$)(eK().root, { [eK().root_oneEmptyTab]: !a, [eK().root_twoEmptyTabs]: a }), children: i });
                },
                eM = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: g,
                            ...v
                        } = e,
                        { objectsCount: b } = (0, _.N8n)(),
                        C = (0, n.useId)(),
                        A = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = ''.concat(C, ' ').concat(C, '-description'),
                        L = (0, u.useTabsState)((null == c ? void 0 : c.activeIndexTab) || 0),
                        y = (0, n.useMemo)(() => {
                            var e;
                            return (null == c || null == (e = c.tabs[L.value]) ? void 0 : e.items.length) === 0;
                        }, [null == c ? void 0 : c.tabs, L.value]),
                        S = (0, n.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              !(null == c ? void 0 : c.areBothTabsEmpty) &&
                                                  (0, l.jsx)(P.Carousel, {
                                                      className: (0, s.$)(ef().carouselEmpty, r),
                                                      itemClassName: (0, s.$)(ef().item, ef().important),
                                                      tabIndex: -1,
                                                      children: (0, p.km)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, l.jsx)(eO, { tab: e.type, areBothTabsEmpty: null == c ? void 0 : c.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, l.jsx)(P.Carousel, {
                                          ref: A,
                                          itemClassName: (0, s.$)(ef().item, ef().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: e.items.map((t, a) => {
                                              switch (t.type) {
                                                  case ek._.ALBUM_ITEM:
                                                      return (0, l.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType: I.ky.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, l.jsx)(ep.aX, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case ek._.PRESAVED_ALBUM_ITEM:
                                                      return (0, l.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType: I.ky.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, l.jsx)(ep.M3, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [h, r, null == c ? void 0 : c.areBothTabsEmpty],
                        ),
                        N = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(P.Carousel, {
                                          ref: A,
                                          itemClassName: (0, s.$)(ef().item, ef().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: (0, p.km)({ isActive: i, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, l.jsx)(u.TabPanel, { name: t, value: L.value, elementId: T, className: ef().tabPanel, children: S(e) }, e.id),
                                        ),
                            [a, null == c ? void 0 : c.tabs, r, h, i, L.value, T, S],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(ef().root, g, { [ef().root_withControls]: !y }),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(v),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != b ? b : 0,
                                children: (0, l.jsx)(p.Tw, {
                                    className: (0, s.$)(o, ef().header, ef().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: C,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: ef().controls, carouselRef: A }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(p.wI, {
                                className: (0, s.$)(r, ef().tabCarousel, ef().important),
                                isShimmerVisible: a,
                                elementId: T,
                                shimmer: (0, l.jsx)(p.zr, { isActive: i, className: (0, s.$)(r, ef().tabCarousel, ef().important), shimmerClassName: ef().tabShimmer }),
                                'aria-labelledby': C,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, l.jsx)(p.oz, { value: t, 'aria-label': e.title, title: e.title, className: (0, s.$)(ef().tab, ef().important) }, e.id),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                eD = (0, n.forwardRef)((e, t) => (0, l.jsx)(eM, { forwardRef: t, ...e }));
            var eB = a(11334),
                eV = a(74480),
                eU = a.n(eV);
            let eG = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, l.jsxs)('div', {
                        className: eU().root,
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': n({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!a,
                            }),
                            (0, l.jsx)('div', { className: (0, s.$)(eU().text, o), children: (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                eY = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        className: o,
                        meta: n,
                        data: d,
                        headingVariant: c,
                        ...m
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, l.jsx)(eG, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          })
                        : (0, l.jsx)(p.OY, {
                              ...m,
                              className: o,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: c,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, l.jsx)(eB.ao, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                eW = (0, n.forwardRef)((e, t) => (0, l.jsx)(eY, { forwardRef: t, ...e }));
            var eX = a(4497),
                eF = a(13030),
                ez = a(32632),
                eH = a(45982),
                e$ = a.n(eH);
            let eQ = (e) => {
                    var t;
                    let { item: a } = e,
                        i = (0, c.c)((e) => {
                            (0, F.P)(e, e$().ripple);
                        });
                    return (0, l.jsxs)(p.N_, {
                        href: a.data.viewAllActionLink,
                        className: (0, s.$)(e$().item, e$().menuItem),
                        onClick: i,
                        children: [
                            (0, l.jsx)(eF.Image, {
                                src: null == (t = a.data.cover) ? void 0 : t.uri,
                                className: e$().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, l.jsx)(N.Caption, {
                                className: e$().text,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                children: a.data.title,
                            }),
                        ],
                    });
                },
                eq = (0, r.PA)((e) => {
                    let { item: t, artistId: a } = e,
                        [i, s] = (0, n.useState)(!1),
                        { state: r, setState: o } = (0, eX.e)(!1),
                        d = (0, _.PT7)(),
                        { isFreemium: m } = (0, _.XCI)(),
                        u = (0, _.brA)(),
                        g = ''.concat(_.UfI.ARTIST, '-').concat(a),
                        {
                            isPlaying: v,
                            togglePlay: C,
                            isCurrent: A,
                        } = (0, _.B0S)({ seeds: t.data.seeds, pageIdForFrom: _._Q$.RADIO, blockIdForFrom: g, parentContextId: a }),
                        T = (0, c.c)(async () => (m ? void o(!0) : C())),
                        I = (0, c.c)(() => {
                            d() ||
                                (s(!0),
                                T().finally(() => {
                                    s(!1);
                                }),
                                u(!v));
                        }),
                        h = (0, c.c)((e) => {
                            (0, F.P)(e, e$().ripple), I();
                        }),
                        L = (0, b.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, l.jsx)(ez.nr, { agent: t.data.agent, isCurrent: A, isPlaying: v, onPlayButtonClick: I, playButtonIconSize: 'm' })
                                : (0, l.jsx)(p.q1, {
                                      isCurrent: A,
                                      isPlaying: v,
                                      isAvailable: !0,
                                      isPlayButtonLoading: i,
                                      onPlayButtonClick: I,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        y = (0, n.useCallback)(
                            () =>
                                (0, l.jsxs)(p.Cj, {
                                    className: e$().item,
                                    onClick: h,
                                    children: [
                                        L,
                                        (0, l.jsx)(N.Caption, {
                                            className: e$().text,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 2,
                                            children: t.data.title,
                                        }),
                                    ],
                                }),
                            [h, L, t.data.title],
                        );
                    return (0, l.jsx)(p.SU, {
                        isEnabled: m,
                        isOpened: r,
                        onOpenChange: o,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: y,
                    });
                }),
                eZ = (e) => {
                    let { items: t, className: a, artistId: i } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(e$().root, a),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case ek._.MENU_ITEM:
                                    return (0, l.jsx)(eQ, { item: e }, e.key);
                                case ek._.WAVE_AGENT_ITEM:
                                    return (0, l.jsx)(eq, { item: e, artistId: i }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var eJ = a(30388),
                e0 = a(70224),
                e1 = a.n(e0);
            let e3 = (e) => {
                    let { isActive: t, itemClassName: a, actionItemClassName: i } = e;
                    return (0, l.jsxs)('div', {
                        className: e1().root,
                        children: [
                            (0, l.jsx)(p.Vt, { isActive: t, className: a, round: !0, centered: !0 }),
                            (0, l.jsxs)('div', {
                                className: (0, s.$)(e1().actionItems, i),
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: e1().actionItem,
                                        children: [
                                            (0, l.jsx)(eJ.Shimmer, { isActive: t, className: e1().actionCover, radius: 's' }),
                                            (0, l.jsxs)('div', {
                                                className: e1().actionTextContainer,
                                                children: [
                                                    (0, l.jsx)(eJ.Shimmer, { isActive: t, className: (0, s.$)(e1().actionText, e1().actionText_title), radius: 's' }),
                                                    (0, l.jsx)(eJ.Shimmer, { isActive: t, className: e1().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: e1().actionItem,
                                        children: [
                                            (0, l.jsx)(eJ.Shimmer, { isActive: t, className: e1().actionCover, radius: 'round' }),
                                            (0, l.jsxs)('div', {
                                                className: e1().actionTextContainer,
                                                children: [
                                                    (0, l.jsx)(eJ.Shimmer, { isActive: t, className: (0, s.$)(e1().actionText, e1().actionText_title), radius: 's' }),
                                                    (0, l.jsx)(eJ.Shimmer, { isActive: t, className: e1().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                e2 = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, a) => (0, l.jsx)(e3, { ...t }, a));
                };
            var e8 = a(23327),
                e4 = a.n(e8);
            let e6 = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            containerClassName: o,
                            headerClassName: d,
                            className: c,
                            meta: m,
                            data: u,
                            headingVariant: g,
                            ...v
                        } = e,
                        { formatMessage: b } = (0, h.A)(),
                        C = (0, n.useRef)(null);
                    return (0, l.jsxs)('section', {
                        ref: a,
                        className: (0, s.$)(e4().root, c),
                        ...(0, f.getDataAttrFromProps)(v),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: d,
                                title: m.title,
                                description: m.description,
                                viewAllActionLink: m.viewAllActionLink,
                                headingVariant: g,
                                controls: (0, l.jsx)(p.X9, { className: e4().controls, carouselRef: C }),
                            }),
                            (0, l.jsx)(P.Carousel, {
                                className: o,
                                ref: C,
                                children: i
                                    ? e2({
                                          isActive: r,
                                          itemClassName: (0, s.$)(e4().item, e4().important),
                                          actionItemClassName: (0, s.$)(e4().actionItem, e4().important),
                                          countWeb: null == (t = m.source) ? void 0 : t.countWeb,
                                      })
                                    : null == u
                                      ? void 0
                                      : u.artists.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: u.artists.length,
                                                    children: (0, l.jsxs)('div', {
                                                        className: e4().itemContainer,
                                                        'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, l.jsx)(eB.ao, { className: (0, s.$)(e4().item, e4().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, l.jsx)(eZ, {
                                                                className: (0, s.$)(e4().actionItem, e4().important),
                                                                items: e.items,
                                                                artistId: e.artist.id,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.artist.id,
                                            ),
                                        ),
                            }),
                        ],
                    });
                },
                e9 = (0, n.forwardRef)((e, t) => (0, l.jsx)(e6, { forwardRef: t, ...e }));
            var e5 = a(1755),
                e7 = a.n(e5);
            let te = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o, headingVariant: n } = e,
                        { formatMessage: c } = (0, h.A)();
                    return (0, l.jsxs)('div', {
                        className: e7().root,
                        ...(0, d.Am)(d.e8.landing.COLLECTION_CLIPS),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': c({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, l.jsx)(N.Caption, {
                                className: (0, s.$)(e7().text, o),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                ...(0, d.Am)(d.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE),
                                children: (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                tt = (e) => {
                    let { forwardRef: t, containerClassName: a, headerClassName: i, meta: s, data: r, headingVariant: o, ...n } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, l.jsx)(te, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: a,
                              headerClassName: i,
                              headingVariant: o,
                          })
                        : (0, l.jsx)(ey, { ref: t, meta: s, data: r, containerClassName: a, headerClassName: i, headingVariant: o, ...n });
                },
                ta = (0, n.forwardRef)((e, t) => (0, l.jsx)(tt, { forwardRef: t, ...e }));
            var ti = a(79670),
                tl = a(25358);
            let ts = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        g = (0, n.useMemo)(() => {
                            let e =
                                null == d
                                    ? void 0
                                    : d.items.map((e, t) =>
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, l.jsx)(ti.B6, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return null == e || e.unshift((0, l.jsx)(tl.Bw, {}, 'create-playlist-card')), e;
                        }, [null == d ? void 0 : d.items]);
                    return (0, l.jsx)(p.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: c,
                        children: g,
                    });
                }),
                tr = (0, n.forwardRef)((e, t) => (0, l.jsx)(ts, { forwardRef: t, ...e })),
                to = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: s,
                            headerClassName: r,
                            className: o,
                            meta: n,
                            data: d,
                            headingVariant: c,
                            ...m
                        } = e,
                        { from: u } = (0, _.fyy)(),
                        { formatMessage: g } = (0, h.A)(),
                        v = Array.isArray(null == d ? void 0 : d.rawTracks)
                            ? g({ id: 'entity-names.number-of-tracks' }, { counter: null == d ? void 0 : d.rawTracks.length })
                            : n.description;
                    return (0, l.jsx)(p.$2, {
                        className: o,
                        shimmer: (0, l.jsx)(p.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                        maxColumnsCount: p.DI.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        blockHeaderClassName: r,
                        carouselClassName: s,
                        blockHeaderTitle: n.title,
                        viewAllActionLink: n.viewAllActionLink,
                        blockHeaderDescription: v,
                        ref: t,
                        blockHeaderHeadingVariant: c,
                        withBlockHeaderDescription: !0,
                        ...m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      let a,
                                          { objectPosX: i, objectPosY: s, objectsCount: r } = (0, _.$tp)({ index: t, count: d.items.length });
                                      return (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Track,
                                              objectId: e.id,
                                              objectPosX: i,
                                              objectPosY: s,
                                              objectsCount: r,
                                              children: (0, l.jsx)(ed.Kt, {
                                                  track: e,
                                                  playContextParams:
                                                      ((a = e.id),
                                                      {
                                                          contextData: { type: y.K.Various, meta: { id: T.t.COLLECTION_DOWNLOADED_TRACKS }, from: u },
                                                          entitiesData: null == d ? void 0 : d.entitiesData,
                                                          queueParams: { index: t, entityId: a },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                tn = (0, n.forwardRef)((e, t) => (0, l.jsx)(to, { forwardRef: t, ...e })),
                td = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(p.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) => {
                                      switch (e.type) {
                                          case ek._.TRACK_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, l.jsx)(ed.wO, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case ek._.LIKED_PLAYLIST_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, l.jsx)(ti.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case ek._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, l.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, l.jsx)(ep.aX, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                tc = (0, n.forwardRef)((e, t) => (0, l.jsx)(td, { forwardRef: t, ...e })),
                tm = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(p.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: s,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(ti.B6, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                tu = (0, n.forwardRef)((e, t) => (0, l.jsx)(tm, { forwardRef: t, ...e }));
            var t_ = a(49772),
                tp = a(57613),
                tg = a.n(tp),
                tv = a(99099),
                tb = a.n(tv);
            let tC = (e) => {
                    let { className: t } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(tb().root, t),
                        ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT),
                        children: (0, l.jsx)(L.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                tA = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: g,
                            ...v
                        } = e,
                        { objectsCount: b } = (0, _.N8n)(),
                        C = (0, n.useId)(),
                        A = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = ''.concat(C, ' ').concat(C, '-description'),
                        L = (0, u.useTabsState)((null == c ? void 0 : c.activeIndexTab) || 0),
                        y = (0, n.useMemo)(() => {
                            var e, t;
                            return (
                                (null == c || null == (e = c.tabs[L.value]) ? void 0 : e.type) !== t_.l.PLAYLIST_CREATED_TAB &&
                                (null == c || null == (t = c.tabs[L.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == c ? void 0 : c.tabs, L.value]),
                        S = (0, n.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== t_.l.PLAYLIST_CREATED_TAB)
                                    return (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(P.Carousel, {
                                                className: (0, s.$)(tg().carouselEmpty, r),
                                                itemClassName: (0, s.$)(tg().item, tg().important),
                                                tabIndex: -1,
                                                children: (0, p.km)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, l.jsx)(tC, {}),
                                        ],
                                    });
                                let t = e.items.map((t, a) =>
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, l.jsx)(ti.B6, { contentLinesCount: 4, playlist: t }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === t_.l.PLAYLIST_CREATED_TAB && t.unshift((0, l.jsx)(tl.Bw, { className: tg().createPlaylistCard }, 'create-playlist-card')),
                                    (0, l.jsx)(P.Carousel, {
                                        ref: A,
                                        itemClassName: (0, s.$)(tg().item, tg().important),
                                        className: r,
                                        'aria-labelledby': h,
                                        children: t,
                                    })
                                );
                            },
                            [h, r],
                        ),
                        N = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(P.Carousel, {
                                          ref: A,
                                          itemClassName: (0, s.$)(tg().item, tg().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: (0, p.km)({ isActive: i, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, l.jsx)(u.TabPanel, { name: t, value: L.value, elementId: T, className: tg().tabPanel, children: S(e) }, e.id),
                                        ),
                            [a, null == c ? void 0 : c.tabs, r, h, i, L.value, T, S],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(tg().root, g, { [tg().root_withControls]: !y }),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(v),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != b ? b : 0,
                                children: (0, l.jsx)(p.Tw, {
                                    className: (0, s.$)(o, tg().header, tg().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: C,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: tg().controls, carouselRef: A }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(p.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(r, tg().tabCarousel, tg().important),
                                elementId: T,
                                shimmer: (0, l.jsx)(p.zr, { isActive: i, className: (0, s.$)(r, tg().tabCarousel, tg().important), shimmerClassName: tg().tabShimmer }),
                                'aria-labelledby': C,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, l.jsx)(p.oz, { value: t, 'aria-label': e.title, title: e.title, className: (0, s.$)(tg().tab, tg().important) }, e.id),
                                          ),
                            }),
                            N,
                        ],
                    });
                }),
                tT = (0, n.forwardRef)((e, t) => (0, l.jsx)(tA, { forwardRef: t, ...e })),
                tI = (0, r.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        className: o,
                        meta: n,
                        data: d,
                        headingVariant: c,
                        ...m
                    } = e;
                    return a || (null == d ? void 0 : d.items.length)
                        ? (0, l.jsx)(p.OY, {
                              ...m,
                              className: o,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              ref: t,
                              headingVariant: c,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) => {
                                            var a, i;
                                            return (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, l.jsx)(eB.NN, {
                                                        artist: e.artist,
                                                        position: null == (a = e.top) ? void 0 : a.position,
                                                        progress: null == (i = e.top) ? void 0 : i.progress,
                                                        listenTimeSeconds: e.listenTimeSeconds,
                                                    }),
                                                },
                                                e.artist.id,
                                            );
                                        }),
                          })
                        : (0, l.jsx)(eG, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          });
                }),
                th = (0, n.forwardRef)((e, t) => (0, l.jsx)(tI, { forwardRef: t, ...e }));
            var tL = a(62993),
                ty = a.n(tL);
            let tS = (0, r.PA)((e) => {
                    var t;
                    let { containerClassName: a, meta: i, data: r, forwardRef: o, isShimmerVisible: d, isShimmerActive: c, headingVariant: m = 'h2', ...u } = e,
                        {
                            settings: { isMobile: g },
                        } = (0, _.Pjs)(),
                        { pageId: v } = (0, _.$au)(),
                        { blockIdForFrom: C } = (0, _.N8n)(),
                        { isFreemium: A } = (0, _.XCI)(),
                        [T, I] = (0, n.useState)(!1),
                        { isPlaying: h, togglePlay: y } = (0, _.B0S)({
                            seeds: null != (t = null == r ? void 0 : r.vibe.seeds) ? t : [],
                            pageIdForFrom: v,
                            blockIdForFrom: C,
                        }),
                        S = (0, _.brA)(),
                        E = (0, n.useCallback)(() => {
                            A || (y(), S(!h));
                        }, [A, y, S, h]),
                        x = (0, n.useCallback)(
                            () =>
                                (0, l.jsx)(p.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: h,
                                    onClick: E,
                                    className: ty().playButton,
                                    children: (0, l.jsx)(L.A, { id: 'player-actions.listen' }),
                                }),
                            [E, h],
                        ),
                        j = (0, b.L)(() =>
                            (0, l.jsx)(p.SU, {
                                isEnabled: A,
                                isOpened: T,
                                onOpenChange: I,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == r ? void 0 : r.vibe.stationType,
                                renderChildren: x,
                            }),
                        ),
                        k = (0, b.L)(() =>
                            d || !r
                                ? (0, l.jsxs)('div', {
                                      className: ty().root,
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: ty().shimmerContainer,
                                              children: [
                                                  (0, l.jsx)(eJ.Shimmer, {
                                                      isActive: c,
                                                      radius: 'xs',
                                                      className: (0, s.$)(ty().coverShimmer, ty().item, ty().important),
                                                  }),
                                                  g && (0, l.jsx)(eJ.Shimmer, { radius: 'l', isActive: c, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !g &&
                                              (0, l.jsxs)('div', {
                                                  className: ty().container,
                                                  children: [
                                                      (0, l.jsx)(eJ.Shimmer, { radius: 'l', isActive: c, width: 300, height: 32 }),
                                                      (0, l.jsx)(eJ.Shimmer, { radius: 'xxxl', isActive: c, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, l.jsxs)('div', {
                                      className: ty().root,
                                      children: [
                                          (0, l.jsx)(ez.yi, {
                                              vibe: r.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, s.$)(ty().item, ty().important),
                                              shouldShowAdditionals: g,
                                              additionalsLinesCount: 1,
                                          }),
                                          !g &&
                                              (0, l.jsxs)('div', {
                                                  className: ty().container,
                                                  children: [
                                                      (0, l.jsx)(N.Heading, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: ty().text,
                                                          lineClamp: 2,
                                                          variant: m,
                                                          children: null == r ? void 0 : r.vibe.title,
                                                      }),
                                                      j,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, l.jsx)('section', { ref: o, title: i.title, className: a, ...(0, f.getDataAttrFromProps)(u), children: k });
                }),
                tN = (0, n.forwardRef)((e, t) => (0, l.jsx)(tS, { forwardRef: t, ...e }));
            var tE = a(81141);
            let tx = (0, r.PA)((e) => {
                    var t, a;
                    let { forwardRef: i, containerClassName: s, isShimmerVisible: r, isShimmerActive: o, id: n, data: d, ...c } = e,
                        { concert: m } = (0, _.Pjs)(),
                        u = null != (a = null == (t = m.meta) ? void 0 : t.id) ? a : '',
                        p = (0, b.L)(() => (r ? (0, l.jsx)(tE.rI, { isActive: o }) : d ? (0, l.jsx)(tE.Gd, { data: d }) : void 0));
                    return (0, l.jsx)('section', {
                        ref: i,
                        className: s,
                        ...(0, f.getDataAttrFromProps)(c),
                        children: (0, l.jsx)(_.Bki, { objectId: u, objectType: I.ky.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: p }, n),
                    });
                }),
                tj = (0, n.forwardRef)((e, t) => (0, l.jsx)(tx, { forwardRef: t, ...e }));
            var tk = a(25641),
                tR = a(10129),
                tf = a.n(tR);
            let tP = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: u,
                            ...g
                        } = e,
                        v = (0, n.useId)(),
                        { experiments: b, concerts: C } = (0, _.Pjs)(),
                        A = (0, n.useRef)(null),
                        T = b.checkExperiment(_.zal.WebNextNewConcertCard, 'on'),
                        h = C.isLocationSelectionExperimentEnabled
                            ? {
                                  filterKey: I.ky.Location,
                                  filterValue: null !== C.locationSelection.selectedLocationId ? String(C.locationSelection.selectedLocationId) : 'auto',
                                  filterPos: 1,
                              }
                            : {},
                        L = (0, n.useMemo)(
                            () =>
                                a
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (a, i) =>
                                              e ? (0, l.jsx)(ee.LY, { isActive: t }, i) : (0, l.jsx)(eJ.Shimmer, { isActive: t, className: tf().shimmer }, i),
                                          ))(T, i)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) =>
                                            (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: c.items.length,
                                                    children: T ? (0, l.jsx)(ee.Qb, { concert: e }) : (0, l.jsx)(tk.Concert, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a, T],
                        );
                    return (0, l.jsx)(_.kp2, {
                        ...h,
                        children: (0, l.jsxs)('section', {
                            ref: t,
                            className: (0, s.$)(tf().root, { [tf().root_withNewConcertCards]: T }, u),
                            ...(0, f.getDataAttrFromProps)(g),
                            children: [
                                (0, l.jsx)(p.Tw, {
                                    className: o,
                                    labeledForId: v,
                                    title: d.title,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: tf().controls, carouselRef: A }),
                                    headingVariant: m,
                                }),
                                (0, l.jsx)(P.Carousel, { ref: A, itemClassName: (0, s.$)(tf().item, tf().important), className: r, 'aria-labelledby': v, children: L }),
                            ],
                        }),
                    });
                }),
                tw = (0, n.forwardRef)((e, t) => (0, l.jsx)(tP, { forwardRef: t, ...e }));
            var tK = a(83708),
                tO = a.n(tK),
                tM = a(85742),
                tD = a(21278),
                tB = a.n(tD);
            let tV = (e) => {
                let { className: t, title: a, subtitle: i, covers: r, link: o, type: c, withLastPlayed: m } = e,
                    u = (0, _.NKK)(),
                    g = (0, n.useMemo)(() => {
                        if (0 !== r.length)
                            return (0, l.jsx)('div', {
                                className: tB().covers,
                                ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS),
                                children: r.slice(0, 2).map((e, t) =>
                                    (0, l.jsx)(
                                        S.Paper,
                                        {
                                            className: tB().coverContainer,
                                            radius: 'xs',
                                            children: (0, l.jsx)(eF.Image, {
                                                className: tB().cover,
                                                size: 80,
                                                src: e.uri,
                                                fit: 'contain',
                                                withAvatarReplace: !0,
                                                fallbackIconSize: 's',
                                                ...(0, d.Am)(''.concat(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS, '_').concat(t)),
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            });
                    }, [r]),
                    v = (0, n.useCallback)(() => {
                        u({ to: I.QT.Link });
                    }, [u]);
                return (0, l.jsx)(S.Paper, {
                    className: (0, s.$)(tB().root, tB()['root_'.concat(c)], { [tB().root_withCovers]: r.length > 0, [tB().root_withLastPlayed]: m }, t),
                    radius: 'l',
                    ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM),
                    children: (0, l.jsx)(p.N_, {
                        className: tB().link,
                        href: o,
                        onClick: v,
                        ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK),
                        children: (0, l.jsxs)('div', {
                            className: tB().content,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: tB().textContainer,
                                    children: [
                                        (0, l.jsxs)(N.Caption, {
                                            className: tB().title,
                                            size: 'm',
                                            variant: 'div',
                                            ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE),
                                            children: [a, (0, l.jsx)(tM.Icon, { className: tB().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        i &&
                                            (0, l.jsx)(N.Caption, {
                                                className: tB().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE),
                                                children: i,
                                            }),
                                    ],
                                }),
                                g,
                            ],
                        }),
                    }),
                });
            };
            var tU = a(30643),
                tG = a(26744),
                tY = a(43026),
                tW = a(440),
                tX = a.n(tW);
            let tF = (0, r.PA)((e) => {
                    var t, a, i, r, o;
                    let { className: m, lastPlayed: u } = e,
                        { objectsCount: g } = (0, _.N8n)(),
                        { formatMessage: v } = (0, h.A)(),
                        { sonataState: C, continueListen: A } = (0, _.Pjs)(),
                        T = (0, _.eGp)(),
                        L = (0, tY.$4)(),
                        {
                            album: E,
                            playlist: x,
                            track: j,
                            getTrackMeta: k,
                            getPlaylistMeta: R,
                            isNeededToLoad: f,
                            isRejected: P,
                            albumDuration: w,
                            albumDurationLeft: K,
                        } = u.data,
                        { track: O, trackIndex: M, contextType: D, contextId: B, albumDuration: V, albumStreamProgress: U, trackTempStreamProgress: G } = A,
                        Y = (0, _.brA)(),
                        W = (0, _.PT7)(),
                        X = (0, n.useMemo)(() => O || j, [O, j]),
                        F = (null == (t = C.entityMeta) ? void 0 : t.isPodcast) || (null == (a = C.entityMeta) ? void 0 : a.isAudiobook),
                        z = (0, n.useCallback)(async () => {
                            let e = await k();
                            !A.track &&
                                e &&
                                (A.saveTrack({
                                    contextType: E ? y.K.Album : y.K.Playlist,
                                    contextId: E ? E.id : String(null == x ? void 0 : x.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                w && K && (A.saveAlbumDuration(w), A.albumStreamProgress.updateEndPositionSec(w - K)));
                        }, [A, E, w, K, k, null == x ? void 0 : x.id]),
                        H = (0, n.useCallback)(async () => {
                            let e = await R();
                            A.trackIndex || 'number' != typeof e || A.saveTrackIndex(e);
                        }, [R, A]);
                    (0, n.useEffect)(() => {
                        f && (z(), H());
                    }, [f, z, H]);
                    let $ = D === y.K.Album && X.mainAlbum && (null == X ? void 0 : X.mainAlbum.isAudiobook),
                        Q = (0, n.useCallback)(
                            (e) => {
                                var t, a;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = X.streamProgress) || t.updateEndPositionSec(0)
                                        : null == (a = X.streamProgress) || a.updateEndPositionSec(e.position),
                                    $)
                                ) {
                                    let t = (null == U ? void 0 : U.endPositionSec) || 0,
                                        a = e.position,
                                        i = a - ((null == G ? void 0 : G.endPositionSec) || 0);
                                    null == U || U.updateEndPositionSec(t + i), null == G || G.updateEndPositionSec(a);
                                }
                            },
                            [X.streamProgress, U, G, $],
                        ),
                        q = $ ? (null == U ? void 0 : U.endPositionSec) || 0 : (null == (i = X.streamProgress) ? void 0 : i.endPositionSec) || 0,
                        Z = X.durationMs ? X.durationMs / 1e3 : 0,
                        J = $ ? V || 0 : Z,
                        ee = (0, tY.mw)(q, J),
                        et = (0, n.useMemo)(() => (0, tU.A)(Q, 500), [Q]),
                        { isPlaying: ea, togglePlay: ei } = ((e) => {
                            let { track: t, trackIndex: a, contextType: i, contextId: l } = e,
                                s = (0, n.useMemo)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return { type: y.K.Playlist, meta: { id: String(l) } };
                                        case y.K.Album:
                                            return { type: y.K.Album, meta: { id: Number(l) } };
                                        case y.K.Various:
                                            return { type: y.K.Various, meta: { id: Number(l) } };
                                        case y.K.Artist:
                                            return { type: y.K.Artist, meta: { id: Number(l) } };
                                        case y.K.Generative:
                                            return { type: y.K.Generative, meta: { id: Number(l) } };
                                        case y.K.Vibe:
                                            return { type: y.K.Vibe, meta: { id: String(l) } };
                                        default:
                                            return { type: y.K.Various, meta: { id: '' } };
                                    }
                                }, [i, l]),
                                { from: r, utmLink: o } = (0, _.fyy)({ contextId: s.meta.id, contextType: s.type }),
                                d = (0, b.L)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return { type: y.K.Playlist, meta: { id: String(l) }, from: r, utmLink: o };
                                        case y.K.Album:
                                            return { type: y.K.Album, meta: { id: Number(l) }, from: r, utmLink: o };
                                        case y.K.Various:
                                            return { type: y.K.Various, meta: { id: Number(l) }, from: r, utmLink: o };
                                        case y.K.Artist:
                                            return { type: y.K.Artist, meta: { id: Number(l) }, from: r, utmLink: o };
                                        case y.K.Generative:
                                            return { type: y.K.Generative, meta: { id: Number(l) }, from: r, utmLink: o };
                                        case y.K.Vibe:
                                            return {
                                                type: y.K.Vibe,
                                                meta: { id: String(l) },
                                                seeds: [String(l)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: r,
                                                utmLink: o,
                                            };
                                        default:
                                            return { type: y.K.Playlist, meta: { id: '' }, from: r, utmLink: o };
                                    }
                                });
                            return (0, _.Dx4)({
                                playContextParams: { contextData: d, queueParams: { entityId: t.id, index: a }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: X, trackIndex: M, contextType: D, contextId: B }),
                        el = (0, c.c)(() => {
                            W() || (ei(), Y(!ea));
                        }),
                        es = (0, n.useMemo)(() => ({ '--color-background': X.averageColor }), [X.averageColor]);
                    (0, n.useEffect)(() => {
                        let e,
                            t =
                                null == T
                                    ? void 0
                                    : T.state.queueState.currentEntity.onChange(() => {
                                          null == e || e(),
                                              (e = T.state.playerState.progress.onChange(() => {
                                                  let e = T.state.playerState.progress.value;
                                                  F && et(e);
                                              }));
                                      });
                        return () => {
                            null == t || t(), null == e || e();
                        };
                    }, [T, et, F, X.streamProgress]);
                    let er = $ ? X.mainAlbum.title : X.title,
                        eo = $ ? X.mainAlbum.coverUri : X.coverUri,
                        en = (0, n.useMemo)(() => {
                            var e;
                            return v({ id: 'entity-names.album-name' }, { albumName: null == (e = X.mainAlbum) ? void 0 : e.title });
                        }, [v, null == (r = X.mainAlbum) ? void 0 : r.title]),
                        ed = (0, n.useMemo)(() => ($ ? en : v({ id: 'entity-names.track-name' }, { trackName: X.title })), [v, $, en, X.title]),
                        ec = $ ? X.mainAlbum.explicitDisclaimer : X.explicitDisclaimer,
                        em = L(J - q, !1);
                    return P
                        ? null
                        : (0, l.jsx)(
                              _.Bki,
                              {
                                  objectType: I.ky.Track,
                                  objectId: String(X.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: g,
                                  children: (0, l.jsxs)(S.Paper, {
                                      className: (0, s.$)(tX().root, m),
                                      radius: 'l',
                                      style: es,
                                      'aria-label': er,
                                      ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK),
                                      children: [
                                          (0, l.jsxs)('div', {
                                              className: tX().content,
                                              children: [
                                                  (0, l.jsx)(p.BW, {
                                                      className: (0, s.$)(tX().cover, tX().important),
                                                      src: eo,
                                                      size: 50,
                                                      alt: ed,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: X.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, l.jsxs)('div', {
                                                      className: tX().metaTrack,
                                                      children: [
                                                          (0, l.jsxs)(p.N_, {
                                                              className: tX().metaContainer,
                                                              href: null == (o = X.mainAlbum) ? void 0 : o.url,
                                                              ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK),
                                                              children: [
                                                                  (0, l.jsx)(N.Caption, {
                                                                      className: tX().title,
                                                                      type: 'entity',
                                                                      size: 'm',
                                                                      weight: 'medium',
                                                                      variant: 'span',
                                                                      lineClamp: 1,
                                                                      'aria-label': en,
                                                                      ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK_TITLE),
                                                                      children: er,
                                                                  }),
                                                                  ec &&
                                                                      (0, l.jsx)(p.Nq, {
                                                                          getDescriptionTexts: X.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: ec,
                                                                          className: tX().explicitMark,
                                                                      }),
                                                                  (0, l.jsx)(tM.Icon, { className: tX().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, l.jsx)('div', {
                                                              className: tX().progress,
                                                              children:
                                                                  !!J &&
                                                                  (0, l.jsxs)(l.Fragment, {
                                                                      children: [
                                                                          (0, l.jsx)(tG.q, {
                                                                              'aria-valuetext': ee,
                                                                              'aria-busy': ea && F,
                                                                              fullCircleClassName: tX().fullCircle,
                                                                              progressCircleClassName: tX().progressCircle,
                                                                              value: q,
                                                                              max: J,
                                                                              ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS),
                                                                          }),
                                                                          (0, l.jsx)(N.Caption, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT),
                                                                              children: em,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(p.DM, { variant: 'filled', className: tX().playButton, isPlaying: ea && F, onClick: el, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              X.id,
                          );
                }),
                tz = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, headerClassName: r, containerClassName: o, headingVariant: d, data: c, ...m } = e,
                        { formatMessage: u } = (0, h.A)(),
                        g = (0, n.useId)(),
                        { objectsCount: v } = (0, _.N8n)(),
                        b = (0, n.useMemo)(() => {
                            if (!c || a) return Array.from({ length: 3 }, (e, t) => (0, l.jsx)(eJ.Shimmer, { className: tO().item, isActive: i }, t));
                            let e = [
                                    c.bookshelf.bookCount ? u({ id: 'entity-names.number-of-books' }, { counter: c.bookshelf.bookCount }) : void 0,
                                    c.bookshelf.podcastCount ? u({ id: 'entity-names.number-of-podcasts' }, { counter: c.bookshelf.podcastCount }) : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(',\n'),
                                t = c.newEpisodes.trackCount ? u({ id: 'entity-names.number-of-episodes' }, { counter: c.newEpisodes.trackCount }) : void 0,
                                r = [];
                            return (
                                c.lastPlayed &&
                                    r.push((0, l.jsx)(tF, { className: (0, s.$)(tO().item, tO().item_lastPlayed), lastPlayed: c.lastPlayed }, c.lastPlayed.type)),
                                r.push(
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: v,
                                            children: (0, l.jsx)(tV, {
                                                className: tO().item,
                                                type: 'bookshelf',
                                                link: _.Zyd.collectionShelf.href,
                                                title: c.bookshelf.title,
                                                subtitle: e,
                                                covers: c.bookshelf.covers,
                                                withLastPlayed: !!c.lastPlayed,
                                            }),
                                        },
                                        c.bookshelf.title,
                                    ),
                                    (0, l.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: v,
                                            children: (0, l.jsx)(tV, {
                                                className: tO().item,
                                                type: 'newEpisodes',
                                                link: _.Zyd.collectionShelfNewEpisodes.href,
                                                title: c.newEpisodes.title,
                                                subtitle: t,
                                                covers: c.newEpisodes.covers,
                                                withLastPlayed: !!c.lastPlayed,
                                            }),
                                        },
                                        c.newEpisodes.title,
                                    ),
                                ),
                                r
                            );
                        }, [u, c, i, a, v]);
                    return (0, l.jsxs)('section', {
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [
                            (0, l.jsx)(p.Tw, { className: r, labeledForId: g, title: u({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: d }),
                            (0, l.jsx)('div', {
                                className: tO().blocksContainer,
                                children: (0, l.jsx)('div', { className: (0, s.$)(tO().container, o), 'aria-labelledby': g, children: b }),
                            }),
                        ],
                    });
                },
                tH = (0, n.forwardRef)((e, t) => (0, l.jsx)(tz, { forwardRef: t, ...e })),
                t$ = (e) => {
                    let { forwardRef: t, headerClassName: a, headingVariant: i, meta: s, ...r } = e;
                    return (0, l.jsx)(_.Bki, {
                        objectType: I.ky.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, l.jsx)('section', {
                            ref: t,
                            ...(0, f.getDataAttrFromProps)(r),
                            children: (0, l.jsx)(p.Tw, { className: a, title: s.title, headingVariant: i, viewAllActionLink: s.viewAllActionLink }),
                        }),
                    });
                },
                tQ = (0, n.forwardRef)((e, t) => (0, l.jsx)(t$, { forwardRef: t, ...e }));
            var tq = a(6540);
            let tZ = (0, r.PA)((e) => {
                    let { donation: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        s = (0, tq.Q$)()(t.url),
                        r = (0, _.ZpR)(s),
                        o = (0, _.ZpR)(t.artist.url),
                        n = (0, _.NKK)(),
                        d = (0, c.c)(() => {
                            n({ to: I.QT.ArtistScreen }), o();
                        }),
                        m = (0, c.c)(() => {
                            n({ to: I.QT.Link, deepLink: s }), r();
                        }),
                        u = (0, x.SA)({ artist: t.artist, callback: d });
                    return (0, l.jsx)(tq.Xx, {
                        ref: a,
                        'data-intersection-property-id': i,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: u,
                        onNavigateToDonation: m,
                    });
                }),
                tJ = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: s,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        p = (0, n.useMemo)(
                            () =>
                                !a && (null == d ? void 0 : d.items)
                                    ? d.items.map((e, t) => {
                                          let { data: a } = e;
                                          return (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Donation,
                                                  objectId: a.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, l.jsx)(tZ, { donation: a }),
                                              },
                                              a.artist.id,
                                          );
                                      })
                                    : (0, tq.kZ)(i),
                            [null == d ? void 0 : d.items, i, a],
                        );
                    return (0, l.jsx)(tq.x0, {
                        containerClassName: s,
                        headerClassName: r,
                        headingVariant: c,
                        className: m,
                        forwardRef: t,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        title: o.title,
                        ...u,
                        children: p,
                    });
                },
                t0 = (0, n.forwardRef)((e, t) => (0, l.jsx)(tJ, { forwardRef: t, ...e }));
            var t1 = a(85563),
                t3 = a(78724),
                t2 = a(70863),
                t8 = a.n(t2);
            let t4 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ..._
                        } = e,
                        g = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        { shouldHideControls: b } = (0, t1.Y)(v),
                        C = !!(d.description || d.title || !b),
                        A = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(t3.R, { isActive: i, ref: v, containerClassName: r, ariaLabelledBy: g, length: 9 })
                                    : (0, l.jsx)(t3.k, { ref: v, containerClassName: r, ariaLabelledBy: g, items: null == c ? void 0 : c.items }),
                            [null == c ? void 0 : c.items, i, a, r, g],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(t8().root, m),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(_),
                        children: [
                            C &&
                                (0, l.jsx)(p.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: g,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: t8().controls, carouselRef: v }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            A,
                        ],
                    });
                },
                t6 = (0, n.forwardRef)((e, t) => (0, l.jsx)(t4, { forwardRef: t, ...e }));
            var t9 = a(23069),
                t5 = a.n(t9);
            let t7 = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ...g
                        } = e,
                        v = (0, n.useId)(),
                        b = (0, n.useRef)(null),
                        { shouldHideControls: C } = (0, t1.Y)(b),
                        A = !!(d.description || d.title || !C),
                        T = (0, n.useMemo)(() => {
                            var e;
                            return a
                                ? (0, l.jsx)(P.Carousel, {
                                      ref: b,
                                      itemClassName: (0, s.$)(t5().item, t5().important),
                                      className: r,
                                      'aria-labelledby': ''.concat(v, ' ').concat(v, '-description'),
                                      children: (0, p.km)({ isActive: i, centered: !0 }),
                                  })
                                : (0, l.jsx)(P.Carousel, {
                                      ref: b,
                                      itemClassName: (0, s.$)(t5().item, t5().important),
                                      className: r,
                                      'aria-labelledby': ''.concat(v, ' ').concat(v, '-description'),
                                      children:
                                          null == c || null == (e = c.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var a;
                                                    return (0, l.jsx)(
                                                        _.Bki,
                                                        {
                                                            objectType: I.ky.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null == (a = c.items) ? void 0 : a.length,
                                                            children: (0, l.jsx)(ez.yi, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == c ? void 0 : c.items, i, a, r, v]);
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(t5().root, m),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(g),
                        children: [
                            A &&
                                (0, l.jsx)(p.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: v,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: t5().controls, carouselRef: b }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            T,
                        ],
                    });
                },
                ae = (0, n.forwardRef)((e, t) => (0, l.jsx)(t7, { forwardRef: t, ...e }));
            var at = a(96579),
                aa = a(55233),
                ai = a.n(aa);
            let al = (0, r.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, headerClassName: s, meta: r, data: o, headingVariant: n, className: d, ...c } = e,
                        { artist: m } = (0, _.Pjs)(),
                        { formatMessage: u } = (0, h.A)(),
                        g = (0, b.L)(() => {
                            if (!o) return;
                            let e = [];
                            return (
                                o.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: o.tracksCount })),
                                o.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: o.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, l.jsx)('section', {
                        ref: t,
                        className: d,
                        ...(0, f.getDataAttrFromProps)(c),
                        children: (0, l.jsx)(p.Tw, {
                            className: s,
                            title: r.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == o ? void 0 : o.href(m.id),
                            coverContainerClassName: ai().cover,
                            shimmerCoverClassName: ai().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: g,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                        }),
                    });
                }),
                as = (0, n.forwardRef)((e, t) => (0, l.jsx)(al, { forwardRef: t, ...e }));
            var ar = a(30137),
                ao = a.n(ar);
            let an = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: g,
                            ...v
                        } = e,
                        { objectsCount: b } = (0, _.N8n)(),
                        C = (0, u.useTabsState)(0),
                        A = (0, n.useId)(),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(P.Carousel, {
                                          ref: T,
                                          itemClassName: (0, s.$)(ao().item, ao().important),
                                          className: r,
                                          'aria-labelledby': ''.concat(A, ' ').concat(A, '-description'),
                                          children: (0, p.km)({ isActive: i }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: C.value,
                                                    elementId: h,
                                                    children: (0, l.jsx)(P.Carousel, {
                                                        ref: T,
                                                        itemClassName: (0, s.$)(ao().item, ao().important),
                                                        className: r,
                                                        'aria-labelledby': ''.concat(A, ' ').concat(A, '-description'),
                                                        children: e.data.map((t, a) =>
                                                            (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: a + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, l.jsx)(ep.aX, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [a, null == c ? void 0 : c.items, r, A, i, C.value, h],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(ao().root, g),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(v),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != b ? b : 0,
                                children: (0, l.jsx)(p.Tw, {
                                    className: (0, s.$)(o, ao().header, ao().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: A,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: ao().controls, carouselRef: T }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, l.jsx)(p.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(r, ao().tabCarousel, ao().important),
                                elementId: h,
                                shimmer: (0, l.jsx)(p.nR, { isActive: i, className: (0, s.$)(r, ao().tabCarousel, ao().important) }),
                                'aria-labelledby': A,
                                ...C,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  p.oz,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, s.$)(ao().tab, ao().important),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            L,
                        ],
                    });
                }),
                ad = (0, n.forwardRef)((e, t) => (0, l.jsx)(an, { forwardRef: t, ...e }));
            var ac = a(60525),
                am = a.n(ac);
            let au = (e) => {
                    var t;
                    let { containerClassName: a, meta: i, data: s, forwardRef: r, isShimmerVisible: o, isShimmerActive: c, headingVariant: m } = e,
                        u = (0, n.useMemo)(() => {
                            if (o) {
                                var e;
                                return (0, p.q$)({
                                    className: am().root,
                                    shimmerClassName: am().shimmer,
                                    isActive: c,
                                    count: (null == (e = i.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, l.jsx)('div', {
                                className: am().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, l.jsx)(
                                                  p.Tw,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: m },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == s ? void 0 : s.items, m, c, o, null == (t = i.source) ? void 0 : t.countWeb]);
                    return (0, l.jsx)('section', { ref: r, title: i.title, className: a, ...(0, d.Am)(d.e8.landing.ITEM_LIST), children: u });
                },
                a_ = (0, n.forwardRef)((e, t) => (0, l.jsx)(au, { forwardRef: t, ...e }));
            var ap = a(55773),
                ag = a.n(ap),
                av = a(85673),
                ab = a.n(av);
            let aC = (0, r.PA)((e) => {
                    let { title: t, subtitle: a, link: i, testId: s, icon: r, covers: o, navigateTo: c } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        u = (0, _.NKK)(),
                        { ref: g, intersectionPropertyId: v } = (0, _.nMI)(),
                        b = (0, n.useMemo)(() => {
                            if (0 !== o.length)
                                return (0, l.jsx)('div', {
                                    className: ab().covers,
                                    children: o.map((e, t) =>
                                        (0, l.jsx)(
                                            S.Paper,
                                            {
                                                className: ab().coverContainer,
                                                radius: 'xs',
                                                ...(0, d.Am)(d.e8.landing.LIKES_HISTORY_COVERS),
                                                children: (0, l.jsx)(eF.Image, { size: 80, className: ab().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [o]),
                        C = (0, n.useCallback)(() => {
                            u({ to: c });
                        }, [c, u]);
                    return (0, l.jsx)('div', {
                        ref: g,
                        'data-intersection-property-id': v,
                        className: ab().root,
                        ...(0, d.Am)(s),
                        children: (0, l.jsxs)(p.N_, {
                            className: ab().link,
                            href: i,
                            onClick: C,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: ab().start,
                                    children: [
                                        r,
                                        (0, l.jsxs)('div', {
                                            className: ab().textContainer,
                                            children: [
                                                (0, l.jsxs)(N.Heading, {
                                                    className: ab().title,
                                                    size: m ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    ...(0, d.Am)(d.e8.landing.LIKES_HISTORY_TITLE),
                                                    children: [t, (0, l.jsx)(tM.Icon, { className: ab().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, l.jsx)(N.Caption, {
                                                    className: ab().subtitle,
                                                    size: 'm',
                                                    variant: 'div',
                                                    lineClamp: 1,
                                                    ...(0, d.Am)(d.e8.landing.LIKES_HISTORY_SUBTITLE),
                                                    children: a,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                b,
                            ],
                        }),
                    });
                }),
                aA = (e) => {
                    let { isActive: t } = e;
                    return (0, l.jsx)(eJ.Shimmer, { isActive: t, className: ab().root, height: 82 });
                },
                aT = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, data: s, ...r } = e,
                        { formatMessage: o } = (0, h.A)(),
                        { favorites: c, history: m } = s || {},
                        u = (0, n.useMemo)(
                            () =>
                                c && m && !a
                                    ? [
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: c.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, l.jsx)(aC, {
                                                      title: c.title,
                                                      subtitle: o({ id: 'entity-names.number-of-tracks' }, { counter: c.count }),
                                                      link: c.url,
                                                      navigateTo: I.QT.PlaylistScreen,
                                                      testId: d.e8.landing.LIKES_BLOCK,
                                                      icon: (0, l.jsx)(S.Paper, {
                                                          className: ag().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, l.jsx)(eF.Image, {
                                                              className: ag().favoritesCover,
                                                              size: 80,
                                                              src: c.cover.uri,
                                                              fit: 'cover',
                                                              withAvatarReplace: !0,
                                                              alt: c.title,
                                                          }),
                                                      }),
                                                      covers: c.trackCovers,
                                                  }),
                                              },
                                              c.id,
                                          ),
                                          (0, l.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Shortcut,
                                                  objectId: m.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, l.jsx)(aC, {
                                                      title: m.title,
                                                      subtitle: m.artists.join(', '),
                                                      link: m.url,
                                                      navigateTo: I.QT.MusicHistoryScreen,
                                                      testId: d.e8.landing.HISTORY_BLOCK,
                                                      icon: (0, l.jsx)(S.Paper, {
                                                          className: ag().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, l.jsx)(tM.Icon, { className: ag().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: m.trackCovers,
                                                  }),
                                              },
                                              m.id,
                                          ),
                                      ]
                                    : [(0, l.jsx)(aA, { isActive: i }, 0), (0, l.jsx)(aA, { isActive: i }, 1)],
                            [c, o, m, i, a],
                        );
                    return (0, l.jsx)('section', {
                        ref: t,
                        className: ag().root,
                        ...(0, f.getDataAttrFromProps)(r),
                        children: (0, l.jsx)(P.Carousel, { className: ag().carousel, itemClassName: ag().carouselItem, children: u }),
                    });
                },
                aI = (0, n.forwardRef)((e, t) => (0, l.jsx)(aT, { forwardRef: t, ...e }));
            var ah = a(3765),
                aL = a(61921),
                ay = a.n(aL);
            let aS = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, l.jsx)(p.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: ay().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        ...(0, d.Am)(d.e8.landing.MIXES_BLOCK),
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, l.jsx)(
                                          ah.NZ,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                aN = (0, n.forwardRef)((e, t) => (0, l.jsx)(aS, { forwardRef: t, ...e }));
            var aE = a(17389),
                ax = a(26427),
                aj = a(2165),
                ak = a.n(aj);
            let aR = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, l.jsx)(p.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: ak().shimmer,
                        containerClassName: s,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        itemClassName: ak().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: c,
                        ...(0, d.Am)(d.e8.landing.MIXES_MUSIC),
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(
                                                  ax.Vf,
                                                  { linkClassName: ak().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                af = (0, n.forwardRef)((e, t) => (0, l.jsx)(aR, { forwardRef: t, ...e }));
            var aP = a(94667),
                aw = a.n(aP),
                aK = a(5099),
                aO = a(27922),
                aM = a.n(aO);
            let aD = (e) => {
                    let { isActive: t } = e;
                    return (0, l.jsx)(eJ.Shimmer, { isActive: t, className: aM().root });
                },
                aB = (0, r.PA)((e) => {
                    var t, a;
                    let { neuromusic: i } = e,
                        { from: r } = (0, _.fyy)(),
                        { isPlaying: o, togglePlay: c } = (0, _.Dx4)({
                            playContextParams: { contextData: { type: y.K.Generative, meta: { id: i.stationId }, from: r }, loadContextMeta: !0 },
                        }),
                        m = (0, n.useCallback)(
                            (e) => {
                                (0, F.P)(e, aM().ripple), c();
                            },
                            [c],
                        ),
                        u = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == i || null == (e = i.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == i || null == (t = i.style) ? void 0 : t.titleColor,
                            };
                        }, [null == i || null == (t = i.style) ? void 0 : t.backgroundColor, null == i || null == (a = i.style) ? void 0 : a.titleColor]),
                        p = o ? d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, l.jsx)(aK.$, {
                        style: u,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: m,
                        className: (0, s.$)(aM().root, aM().button),
                        ...(0, d.Am)(d.e8.landing.NEUROMUSIC_BLOCK_ITEM),
                        children: (0, l.jsxs)('div', {
                            className: aM().textContainer,
                            children: [
                                (0, l.jsx)(tM.Icon, { className: aM().icon, size: 'xxs', variant: o ? 'pause' : 'play', ...(0, d.Am)(p) }),
                                (0, l.jsx)(N.Caption, { className: aM().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: i.title }),
                            ],
                        }),
                    });
                }),
                aV = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            className: m,
                            headingVariant: u,
                            ..._
                        } = e,
                        g = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        b = (0, n.useMemo)(
                            () =>
                                a
                                    ? Array.from({ length: 3 }, (e, t) => (0, l.jsx)(aD, { isActive: i }, t))
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => (0, l.jsx)(aB, { neuromusic: e }, t)),
                            [null == c ? void 0 : c.items, i, a],
                        );
                    return (0, l.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(aw().root, m),
                        ...(0, f.getDataAttrFromProps)(_),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: o,
                                labeledForId: g,
                                title: d.title,
                                description: d.description,
                                controls: (0, l.jsx)(p.X9, { className: aw().controls, carouselRef: v }),
                                headingVariant: u,
                                withDescription: !!d.description,
                            }),
                            (0, l.jsx)(P.Carousel, { ref: v, itemClassName: (0, s.$)(aw().item, aw().important), className: r, 'aria-labelledby': g, children: b }),
                        ],
                    });
                },
                aU = (0, n.forwardRef)((e, t) => (0, l.jsx)(aV, { forwardRef: t, ...e })),
                aG = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var aY = a(15304),
                aW = a.n(aY);
            let aX = (0, r.PA)((e) => {
                var t, a, i;
                let { album: s, releaseDate: r, coverColor: o, coverUri: m } = e,
                    u = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: g } = (0, h.A)(),
                    { trailer: v } = (0, _.Pjs)(),
                    { ref: b, intersectionPropertyId: C } = (0, _.nMI)(),
                    A = (0, _.ZpR)(null != (i = null == u ? void 0 : u.url) ? i : ''),
                    T = (0, x.SA)({ artist: u, callback: A }),
                    L = (0, _.Ftl)(),
                    j = (0, E.r_)(s.type),
                    k = (0, _.PT7)(),
                    { from: R, utmLink: f } = (0, _.fyy)({ contextId: s.id, contextType: y.K.Album }),
                    P = (0, _.NKK)(),
                    w = (0, c.c)((e) => {
                        P({ to: I.QT.ArtistScreen, objectId: null == u ? void 0 : u.id, objectType: I.ky.Artist }), T(e);
                    }),
                    K = (0, c.c)((e) => {
                        if (k()) {
                            e.stopPropagation(), e.preventDefault();
                            return;
                        }
                        (null == s ? void 0 : s.id) && (e.stopPropagation(), v.openAlbumTrailer(s.id), L(I.ky.Album, String(s.id)));
                    }),
                    O = (0, n.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(p.cv, {
                                children: (0, l.jsx)(p.kJ, { variant: 'text', iconSize: 'xs', className: aW().trailerButton, withRipple: !1, onClick: K }),
                            });
                    }, [null == s || null == (a = s.trailer) ? void 0 : a.isAvailable, K]),
                    M = (0, n.useMemo)(() => {
                        if (r)
                            return (0, l.jsxs)(N.Caption, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: aW().descriptionContainer,
                                children: [
                                    (0, l.jsx)(N.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: j.toLowerCase() }),
                                    (0, l.jsx)(N.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, l.jsx)(N.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: g(new Date(r), (0, _.QB4)()) }),
                                ],
                            });
                    }, [j, g, r]);
                return (0, l.jsxs)('div', {
                    className: aW().root,
                    ref: b,
                    'data-intersection-property-id': C,
                    children: [
                        (0, l.jsxs)('div', {
                            className: aW().cover,
                            children: [
                                (0, l.jsxs)(S.Paper, {
                                    className: aW().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, l.jsx)(p.BW, {
                                            className: aW().image,
                                            src: m,
                                            alt: null == u ? void 0 : u.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)('div', {
                                            className: aW().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && aG.test(e)) || (e = '#000000');
                                                    let { r: t, g: a, b: i } = (0, _.E2N)(e);
                                                    return 'linear-gradient(180.14deg, rgba('
                                                        .concat(t, ', ')
                                                        .concat(a, ', ')
                                                        .concat(i, ', 0) 30.88%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(a, ', ')
                                                        .concat(i, ', 0.4) 70.8%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(a, ', ')
                                                        .concat(i, ', 0.9) 80.88%)');
                                                })(null == s ? void 0 : s.averageColor),
                                            },
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(p.N_, { className: aW().fade, 'aria-label': null == u ? void 0 : u.name, href: null == u ? void 0 : u.url, onClick: w }),
                                (0, l.jsx)(x.iQ, {
                                    className: aW().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: aW().artistLink,
                                    captionClassName: aW().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, l.jsx)(Q, {
                            className: aW().card,
                            album: s,
                            albumUrl: s.url,
                            from: R,
                            utmLink: f,
                            trailerButton: O,
                            description: M,
                            entityName: j,
                            coverColor: o,
                            ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD),
                        }),
                    ],
                });
            });
            var aF = a(89637),
                az = a.n(aF);
            let aH = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: u,
                            ...g
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        b = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        { theme: A } = (0, _.DPo)(),
                        T = (0, n.useMemo)(
                            () =>
                                i
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, a) =>
                                              (0, l.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, l.jsx)(eJ.Shimmer, { isActive: e, radius: 'round', className: az().shimmerImage }),
                                                          (0, l.jsx)(eJ.Shimmer, { isActive: e, radius: 'l', className: az().shimmerCard }),
                                                      ],
                                                  },
                                                  a,
                                              ),
                                          ))(a)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => {
                                            let a = e.coverUriWithPlaceholder(A);
                                            return (0, l.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: c.items.length,
                                                    children: (0, l.jsx)(aX, { ...e, coverUri: a }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == c ? void 0 : c.items, a, i, A],
                        );
                    return (0, l.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(az().root, u),
                        ...(0, f.getDataAttrFromProps)(g),
                        children: [
                            (0, l.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, l.jsx)(p.Tw, {
                                    className: o,
                                    labeledForId: b,
                                    title: d.title,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, l.jsx)(p.X9, { className: az().controls, carouselRef: C }),
                                    headingVariant: m,
                                }),
                            }),
                            (0, l.jsx)(P.Carousel, { ref: C, itemClassName: (0, s.$)(az().item, az().important), className: r, 'aria-labelledby': b, children: T }),
                        ],
                    });
                }),
                a$ = (0, n.forwardRef)((e, t) => (0, l.jsx)(aH, { forwardRef: t, ...e }));
            var aQ = a(73547),
                aq = a(47550),
                aZ = a(72786),
                aJ = a(57485),
                a0 = a.n(aJ);
            let a1 = (e) => {
                    let { forwardRef: t, containerClassName: a, id: i, meta: r, ...o } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, l.jsx)('section', {
                        ref: t,
                        className: (0, s.$)(a0().root, a),
                        ...(0, f.getDataAttrFromProps)(o),
                        children: (0, l.jsx)(
                            _.Bki,
                            {
                                objectType: I.ky.Text,
                                objectId: i,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, l.jsx)(aZ.Fn, { textButton: n({ id: 'interface-actions.further' }), meta: r }),
                            },
                            i,
                        ),
                    });
                },
                a3 = (0, n.forwardRef)((e, t) => (0, l.jsx)(a1, { forwardRef: t, ...e })),
                a2 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: s,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, l.jsx)(p.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: s,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, l.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, l.jsx)(ti.B6, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                a8 = (0, n.forwardRef)((e, t) => (0, l.jsx)(a2, { forwardRef: t, ...e }));
            var a4 = a(88579),
                a6 = a(41094);
            let a9 = (e) => {
                    let { items: t, playlistId: a, playlistUuid: i, from: s, utmLink: r } = e;
                    return t.slice(0, 8).map((e, o) => {
                        let n,
                            { objectPosX: d, objectPosY: c, objectsCount: m } = (0, _.$tp)({ index: o, count: t.length }),
                            u =
                                ((n = e.id),
                                {
                                    contextData: { type: y.K.Playlist, meta: { id: a, uuid: i }, from: s, utmLink: r, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: o, entityId: n },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, a6.li)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, l.jsx)(
                            _.Bki,
                            {
                                objectType: I.ky.Track,
                                objectId: e.id,
                                objectPosX: d,
                                objectPosY: c,
                                objectsCount: m,
                                children: e.isTrackNonMusic
                                    ? (0, l.jsx)(ed.Kd, { track: e, playContextParams: u, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, l.jsx)(ed.Kt, { track: e, playContextParams: u }),
                            },
                            e.id,
                        );
                    });
                },
                a5 = { src: '/_next/static/media/heart.602389ae.png' };
            var a7 = a(87131),
                ie = a.n(a7);
            let it = (0, r.PA)(() => {
                var e, t;
                let { vibe: a } = (0, _.Pjs)(),
                    { pageId: i } = (0, _.$au)(),
                    { blockIdForFrom: s } = (0, _.N8n)(),
                    r = (0, _.ZpR)(_.Zyd.main.href),
                    { formatMessage: o } = (0, h.A)(),
                    { isFreemium: c } = (0, _.XCI)(),
                    m = o({ id: 'vibe-actions.play-vibe' }),
                    { isPlaying: u, togglePlay: g } = (0, _.B0S)({
                        seeds: null != (t = null == (e = a.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: i,
                        blockIdForFrom: s,
                    });
                (0, n.useEffect)(
                    () => () => {
                        a.reset();
                    },
                    [a],
                );
                let v = (0, n.useCallback)(() => {
                        c || (u || g(), r());
                    }, [c, u, r, g]),
                    b = (0, n.useCallback)(
                        () =>
                            (0, l.jsx)(aK.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: ie().myWaveButton,
                                'aria-label': m,
                                onClick: v,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON),
                                children: (0, l.jsx)(N.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, l.jsx)(N.Caption, { variant: 'span', size: 'm', weight: 'medium', className: ie().myWaveButtonText, children: m }),
                                }),
                            }),
                        [m, v],
                    );
                return (
                    a.isNeededToLoad && (0, n.use)(a.getLastVibe()),
                    (0, l.jsxs)('div', {
                        className: ie().root,
                        ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK),
                        children: [
                            (0, l.jsx)(eF.Image, { src: a5.src, className: ie().image, ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE) }),
                            (0, l.jsx)(N.Heading, {
                                variant: 'h3',
                                size: 'xs',
                                className: ie().header,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE),
                                children: (0, l.jsx)(L.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, l.jsx)(N.Caption, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: ie().text,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT),
                                children: (0, l.jsx)(L.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            (0, l.jsx)(p.SU, { isEnabled: c, placement: 'top', textVariant: 'vibe', renderChildren: b }),
                        ],
                    })
                );
            });
            var ia = a(53087),
                ii = a.n(ia);
            let il = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            type: m,
                            headingVariant: u,
                            className: g,
                            ...v
                        } = e,
                        { from: b, utmLink: C } = (0, _.fyy)({ contextId: null == c ? void 0 : c.playlist.id, contextType: y.K.Playlist }),
                        {
                            trailer: A,
                            settings: { isMobile: S },
                        } = (0, _.Pjs)(),
                        N = (0, _.Ftl)(),
                        { formatMessage: E } = (0, h.A)(),
                        x = (0, _.iZJ)({ playlistId: null == c ? void 0 : c.playlist.id }),
                        j = (null == c ? void 0 : c.totalItemsCount)
                            ? E({ id: 'entity-names.number-of-tracks' }, { counter: null == c ? void 0 : c.totalItemsCount })
                            : d.description,
                        k = [T.t.COLLECTION_PLAYLIST_WITH_LIKES, T.t.SMART_OPEN_PLAYLIST].includes(m),
                        R = d.coverStyle !== a4.z.NONE,
                        f = (0, n.useCallback)(() => {
                            (null == c ? void 0 : c.playlist.id) &&
                                (A.setUtmLink(C), A.openPlaylistTrailer(null == c ? void 0 : c.playlist.id), N(I.ky.Playlist, String(c.playlist.id)));
                        }, [A, null == c ? void 0 : c.playlist.id, N, C]),
                        P = (0, n.useMemo)(() => {
                            if (null == c ? void 0 : c.withRewindTrailerButton)
                                return S
                                    ? (0, l.jsx)(p.kJ, { className: ii().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: f })
                                    : (0, l.jsx)(p.kJ, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: ii().trailer,
                                          onClick: f,
                                          children: (0, l.jsx)(L.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == c ? void 0 : c.withRewindTrailerButton, S, f]);
                    return (null == c ? void 0 : c.playlist.isFavouritePlaylist) &&
                        (null == c ? void 0 : c.totalItemsCount) === 0 &&
                        (null == c ? void 0 : c.canShowEmptyBlock)
                        ? (0, l.jsx)(it, {})
                        : (0, l.jsx)(_._Fn, {
                              sourceContextData: x,
                              children: (0, l.jsx)(p.$2, {
                                  isShimmerActive: i,
                                  shimmer: (0, l.jsx)(p.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                                  maxColumnsCount: p.DI.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, s.$)(ii().root, g),
                                  isShimmerVisible: a,
                                  blockHeaderClassName: o,
                                  carouselClassName: r,
                                  blockHeaderTitle: d.title,
                                  blockHeaderCoverUrl: null == c ? void 0 : c.getCoverUri(d.coverStyle),
                                  blockHeaderDescription: j,
                                  viewAllActionLink: null == c ? void 0 : c.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: u,
                                  additionalControl: P,
                                  withBlockHeaderDescription: k,
                                  withBlockHeaderCover: R,
                                  ...v,
                                  children:
                                      (null == c ? void 0 : c.items) &&
                                      a9({ items: c.items, playlistId: c.playlist.id, playlistUuid: c.playlist.uuid, from: b, utmLink: C }),
                              }),
                          });
                }),
                is = (0, n.forwardRef)((e, t) => (0, l.jsx)(il, { forwardRef: t, ...e }));
            var ir = a(60655),
                io = a(49083),
                id = a.n(io);
            let ic = (0, r.PA)((e) => {
                    var t, a;
                    let {
                            forwardRef: i,
                            isShimmerVisible: s,
                            isShimmerActive: r,
                            tracksContainerClassName: o,
                            headerClassName: d,
                            meta: m,
                            data: g,
                            headingVariant: v,
                            className: C,
                            ...A
                        } = e,
                        { formatMessage: T } = (0, h.A)(),
                        { from: I, utmLink: L } = (0, _.fyy)({ contextId: null == g ? void 0 : g.playlist.id, contextType: y.K.Playlist }),
                        S = (0, _.iZJ)({ playlistId: null == g ? void 0 : g.playlist.id, filter: null == g ? void 0 : g.filters.activeFilter }),
                        N = (0, u.useTabsState)((null == g ? void 0 : g.filters.activeFilterIndex) || 0),
                        E = (0, n.useRef)(null),
                        x = (0, _.$yB)(),
                        j = (null == g ? void 0 : g.totalItemsCount) ? T({ id: 'entity-names.number-of-tracks' }, { counter: g.totalItemsCount }) : m.description,
                        k = (0, c.c)((e) => {
                            var t;
                            if (!N.onTabChange || e === N.value || !g) return;
                            setTimeout(() => {
                                var t, a, i;
                                null == (i = E.current) || null == (a = i.children[e]) || null == (t = a.focus) || t.call(a);
                            }),
                                N.onTabChange(e);
                            let a = null == (t = g.filters.items) ? void 0 : t[e];
                            a && (g.handleFilterClick(a), x({ tabId: a.id, tabPos: e + 1 }));
                        });
                    if (((null == g ? void 0 : g.playlistLoading.isNeededToLoad) && (0, n.use)(g.getPlaylist()), null == g ? void 0 : g.shouldShowEmptyPlaylist))
                        return (0, l.jsx)(it, {});
                    let R = r || !!(null == g ? void 0 : g.isLoading),
                        f = s || !!(null == g ? void 0 : g.isLoading) || !!(null == g ? void 0 : g.isRejected),
                        P = g && 0 === g.items.length,
                        w = !!(null == g || null == (t = g.filters.items) ? void 0 : t.length),
                        K = !g || (null == g ? void 0 : g.isLoading) || (null == g || null == (a = g.filters) ? void 0 : a.isShimmerVisible) || P || w,
                        O = (0, b.L)(() => {
                            var e, t, a, i;
                            if (K)
                                return (0, l.jsx)(ir.A, {
                                    className: id().filters,
                                    tabsState: N,
                                    handleFilterClick: k,
                                    ref: E,
                                    items: null != (i = null == g || null == (e = g.filters) ? void 0 : e.items) ? i : void 0,
                                    isShimmerVisible: null == g || null == (t = g.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == g || null == (a = g.filters) ? void 0 : a.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: id().shimmer,
                                });
                        });
                    return (0, l.jsx)(_._Fn, {
                        sourceContextData: S,
                        children: (0, l.jsx)(p.$2, {
                            isShimmerActive: R,
                            shimmer: (0, l.jsx)(p.DS, { variant: _.Xjt.PLAYLIST, isActive: R }),
                            maxColumnsCount: p.DI.TWO,
                            itemsCountPerColumn: 4,
                            className: C,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: f,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: d,
                            carouselClassName: o,
                            blockHeaderTitle: m.title,
                            blockHeaderCoverUrl: m.coverUri,
                            blockHeaderDescription: j,
                            viewAllActionLink: null == g ? void 0 : g.playlist.url,
                            ref: i,
                            blockHeaderHeadingVariant: v,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: m.coverStyle !== a4.z.NONE,
                            beforeCarousel: O,
                            ...A,
                            children:
                                (null == g ? void 0 : g.items) && a9({ items: g.items, playlistId: g.playlist.id, playlistUuid: g.playlist.uuid, from: I, utmLink: L }),
                        }),
                    });
                }),
                im = (0, n.forwardRef)((e, t) => (0, l.jsx)(ic, { forwardRef: t, ...e }));
            var iu = a(41817),
                i_ = a(57481),
                ip = a(25099),
                ig = a(20621),
                iv = a.n(ig);
            let ib = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                            data: r,
                            meta: o,
                            isLoaded: c,
                            headerClassName: m,
                            setIsNeededToLoad: u,
                            tracksContainerClassName: g,
                            className: v,
                            ...b
                        } = e,
                        { formatMessage: C } = (0, h.A)(),
                        {
                            search: { history: A },
                        } = (0, _.Pjs)(),
                        T = (0, ip.df)(),
                        y = !(null == r ? void 0 : r.items.length) && c,
                        S = (0, ez.fp)();
                    return ((0, n.useLayoutEffect)(
                        () => (
                            A.shouldUpdateHistory && (u(), A.setShouldUpdateHistory(!1)),
                            () => {
                                A.hasCleared && u(), A.reset();
                            }
                        ),
                        [A, u],
                    ),
                    y || A.hasCleared)
                        ? (0, l.jsx)('div', {
                              ref: t,
                              className: (0, s.$)(iv().root, iv().fallback),
                              ...(0, f.getDataAttrFromProps)(b),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY_EMPTY),
                              children: (0, l.jsx)(N.Caption, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, l.jsx)(L.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, l.jsxs)('div', {
                              ref: t,
                              className: iv().root,
                              ...(0, f.getDataAttrFromProps)(b),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY),
                              children: [
                                  (0, l.jsx)(p.$2, {
                                      className: v,
                                      shimmer: (0, l.jsx)(p.RJ, { isActive: a }),
                                      isShimmerActive: a,
                                      isShimmerVisible: i,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: p.DI.TWO,
                                      blockHeaderClassName: m,
                                      carouselClassName: (0, s.$)(g, iv().content),
                                      blockHeaderTitle: o.title,
                                      blockHeaderDescription: o.description,
                                      viewAllActionLink: o.viewAllActionLink,
                                      children:
                                          null == r
                                              ? void 0
                                              : r.items.map((e, t) => {
                                                    var a, i, s;
                                                    let {
                                                        objectPosX: o,
                                                        objectPosY: n,
                                                        objectsCount: d,
                                                    } = (0, _.$tp)({ index: t, count: r.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case ek._.NON_MUSIC_ALBUM_ITEM:
                                                        case ek._.ALBUM_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(ep.M_, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.ARTIST_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(eB.cz, { description: C({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.TRACK_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(ed.c8, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.LIKED_PLAYLIST_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(ti.vf, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.WAVE_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Wave,
                                                                    objectId: null != (a = e.data.vibe.seeds[0]) ? a : '',
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(ez.H2, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(C({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case ek._.WAVE_AGENT_ITEM:
                                                            return (0, l.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Wave,
                                                                    objectId: null != (i = e.data.seeds[0]) ? i : '',
                                                                    objectPosX: o,
                                                                    objectPosY: n,
                                                                    objectsCount: d,
                                                                    children: (0, l.jsx)(ez.H2, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(C({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: ez.hl.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.CLIP_ITEM:
                                                            if (!T) return null;
                                                            return (0, l.jsx)(eI.Nk, { clip: e.data }, e.data.clipId);
                                                        case ek._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                S &&
                                                                (0, l.jsx)(
                                                                    _.Bki,
                                                                    {
                                                                        objectType: I.ky.Q2VWave,
                                                                        objectId: null != (s = e.data.seeds[0]) ? s : '',
                                                                        children: (0, l.jsx)(ez.Ks, { vibe: e.data }),
                                                                    },
                                                                    e.data.getKey(t),
                                                                )
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  c &&
                                      (0, l.jsx)(aK.$, {
                                          onClick: A.clear,
                                          className: iv().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON),
                                          children: (0, l.jsx)(L.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                iC = (0, n.forwardRef)((e, t) => (0, l.jsx)(ib, { forwardRef: t, ...e }));
            var iA = a(74525),
                iT = a.n(iA);
            let iI = (e) => {
                    var t, a, i, s, r, o, d, c, m;
                    let { containerClassName: u, meta: p, data: g, forwardRef: v, headingVariant: b = 'h2', ...C } = e,
                        A = (0, _.ZpR)(null != (m = null == g ? void 0 : g.weblink) ? m : ''),
                        { theme: T } = (0, _.DPo)(),
                        I =
                            T === _.Sxu.Light
                                ? null == g || null == (t = g.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == g || null == (a = g.darkTheme)
                                  ? void 0
                                  : a.imageUrl,
                        h = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    T === _.Sxu.Light
                                        ? null == g || null == (e = g.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == g || null == (t = g.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [T, null == g || null == (i = g.darkTheme) ? void 0 : i.textColor, null == g || null == (s = g.lightTheme) ? void 0 : s.textColor]),
                        L = (0, n.useMemo)(() => {
                            var e, t, a, i;
                            return {
                                '--button-color':
                                    T === _.Sxu.Light
                                        ? null == g || null == (e = g.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == g || null == (t = g.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    T === _.Sxu.Light
                                        ? null == g || null == (a = g.lightTheme)
                                            ? void 0
                                            : a.buttonTextColor
                                        : null == g || null == (i = g.darkTheme)
                                          ? void 0
                                          : i.buttonTextColor,
                            };
                        }, [
                            T,
                            null == g || null == (r = g.darkTheme) ? void 0 : r.buttonColor,
                            null == g || null == (o = g.lightTheme) ? void 0 : o.buttonColor,
                            null == g || null == (d = g.darkTheme) ? void 0 : d.buttonTextColor,
                            null == g || null == (c = g.lightTheme) ? void 0 : c.buttonTextColor,
                        ]);
                    return (0, l.jsx)('section', {
                        ref: v,
                        title: p.title,
                        className: u,
                        ...(0, f.getDataAttrFromProps)(C),
                        children: (0, l.jsxs)('div', {
                            className: iT().root,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: iT().actions,
                                    children: [
                                        (0, l.jsxs)('div', {
                                            className: iT().textContainer,
                                            children: [
                                                !!(null == g ? void 0 : g.title) &&
                                                    (0, l.jsx)(N.Heading, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: iT().textColor,
                                                        lineClamp: 2,
                                                        variant: b,
                                                        style: h,
                                                        children: null == g ? void 0 : g.title,
                                                    }),
                                                !!(null == g ? void 0 : g.subtitle) &&
                                                    (0, l.jsx)(N.Caption, {
                                                        className: iT().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: h,
                                                        children: null == g ? void 0 : g.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == g ? void 0 : g.weblink) &&
                                            !!(null == g ? void 0 : g.buttonTitle) &&
                                            (0, l.jsx)(aK.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: iT().button,
                                                role: 'link',
                                                onClick: A,
                                                style: L,
                                                children: (0, l.jsx)(N.Caption, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == g ? void 0 : g.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, l.jsx)('div', {
                                    className: iT().imageContainer,
                                    children: (0, l.jsx)(eF.Image, {
                                        src: I || (null == g ? void 0 : g.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: iT().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ih = (0, n.forwardRef)((e, t) => (0, l.jsx)(iI, { forwardRef: t, ...e }));
            var iL = a(83505),
                iy = a.n(iL);
            let iS = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: _,
                            ...g
                        } = e,
                        v = (0, n.useId)(),
                        b = (0, u.useTabsState)(0),
                        C = (0, n.useRef)(null),
                        A = (0, n.useId)(),
                        T = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(t3.R, {
                                          isActive: i,
                                          ref: C,
                                          containerClassName: r,
                                          ariaLabelledBy: ''.concat(v, ' ').concat(v, '-description'),
                                          length: 9,
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: b.value,
                                                    elementId: A,
                                                    children: (0, l.jsx)(t3.k, {
                                                        ref: C,
                                                        containerClassName: r,
                                                        ariaLabelledBy: ''.concat(v, ' ').concat(v, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, a, i, r, v, b.value, A],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(iy().root, _),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(g),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: (0, s.$)(o, iy().header, iy().important),
                                title: d.title,
                                description: d.description,
                                labeledForId: v,
                                viewAllActionLink: d.viewAllActionLink,
                                controls: (0, l.jsx)(p.X9, { className: iy().controls, carouselRef: C }),
                                headingVariant: m,
                                withDescription: !!d.description,
                            }),
                            (0, l.jsx)(p.wI, {
                                isShimmerVisible: a,
                                className: (0, s.$)(r, iy().tabCarousel, iy().important),
                                elementId: A,
                                shimmer: (0, l.jsx)(p.zr, { isActive: i, className: (0, s.$)(r, iy().tabCarousel, iy().important), shimmerClassName: iy().tabShimmer }),
                                'aria-labelledby': v,
                                ...b,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  p.oz,
                                                  { className: (0, s.$)(iy().tab, iy().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            T,
                        ],
                    });
                },
                iN = (0, n.forwardRef)((e, t) => (0, l.jsx)(iS, { forwardRef: t, ...e }));
            var iE = a(8703),
                ix = a.n(iE);
            let ij = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            containerClassName: o,
                            headerClassName: d,
                            meta: c,
                            data: m,
                            headingVariant: g,
                            className: v,
                            ...b
                        } = e,
                        C = (0, n.useId)(),
                        A = (0, u.useTabsState)(0),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, l.jsx)(P.Carousel, {
                                          ref: T,
                                          itemClassName: (0, s.$)(ix().item, ix().important),
                                          className: o,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, p.km)({ isActive: r, centered: !0 }),
                                      })
                                    : null == m
                                      ? void 0
                                      : m.items.map((e) => {
                                            var t;
                                            return (0, l.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: A.value,
                                                    elementId: h,
                                                    children: (0, l.jsx)(P.Carousel, {
                                                        ref: T,
                                                        itemClassName: (0, s.$)(ix().item, ix().important),
                                                        className: o,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((t, a) => {
                                                                      var i;
                                                                      return (0, l.jsx)(
                                                                          _.Bki,
                                                                          {
                                                                              objectType: I.ky.Wave,
                                                                              objectId: t.stationId,
                                                                              objectPosX: a + 1,
                                                                              objectPosY: 1,
                                                                              objectsCount: null == (i = e.data) ? void 0 : i.length,
                                                                              children: (0, l.jsx)(ez.yi, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == m ? void 0 : m.items, i, r, o, C, A.value, h],
                        );
                    return (0, l.jsxs)('section', {
                        className: (0, s.$)(ix().root, v),
                        ref: a,
                        ...(0, f.getDataAttrFromProps)(b),
                        children: [
                            (0, l.jsx)(p.Tw, {
                                className: (0, s.$)(d, ix().header, ix().important),
                                title: c.title,
                                description: c.description,
                                labeledForId: C,
                                viewAllActionLink: c.viewAllActionLink,
                                controls: (0, l.jsx)(p.X9, { className: ix().controls, carouselRef: T }),
                                headingVariant: g,
                                withDescription: !!c.description,
                            }),
                            (0, l.jsx)(p.wI, {
                                isShimmerVisible: i,
                                className: (0, s.$)(o, ix().tabCarousel, ix().important),
                                elementId: h,
                                shimmer: (0, l.jsx)(p.zr, { isActive: r, className: (0, s.$)(o, ix().tabCarousel, ix().important), shimmerClassName: ix().tabShimmer }),
                                'aria-labelledby': C,
                                ...A,
                                children:
                                    null == m || null == (t = m.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, l.jsx)(
                                                  p.oz,
                                                  { className: (0, s.$)(ix().tab, ix().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            L,
                        ],
                    });
                },
                ik = (0, n.forwardRef)((e, t) => (0, l.jsx)(ij, { forwardRef: t, ...e }));
            var iR = a(56533),
                iP = a.n(iR),
                iw = a(47063),
                iK = a.n(iw);
            let iO = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, _.Pjs)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(p.nN, { isActive: !0, className: iK().titleShimmer, textClassName: iK().titleTextShimmer }),
                            (0, l.jsx)(p.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            (0, l.jsx)(p.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            (0, l.jsx)(p.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            e &&
                                (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(p.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                                        (0, l.jsx)(p.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                iM = Array.from({ length: 3 }, () => p.v2.src),
                iD = (0, r.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: a, data: i, headingVariant: s = 'h2' } = e,
                        { formatMessage: r } = (0, h.A)(),
                        { wizard: o } = (0, _.Pjs)(),
                        c = (0, n.useMemo)(
                            () =>
                                (0, l.jsx)('div', {
                                    className: iP().images,
                                    ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_ARTISTS),
                                    children: iM.map((e, t) => {
                                        var a;
                                        let s = null == i || null == (a = i.artists[t]) ? void 0 : a.coverUri;
                                        return (0, l.jsx)(
                                            S.Paper,
                                            {
                                                className: iP().paper,
                                                radius: 'round',
                                                children: (0, l.jsx)(eF.Image, {
                                                    className: iP().image,
                                                    src: s || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!s,
                                                    'aria-hidden': !0,
                                                    fallbackIconSize: 's',
                                                    ...(0, d.Am)(''.concat(d.e8.landing.WIZARD_BLOCK_ARTIST_COVER, '_').concat(t)),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == i ? void 0 : i.artists],
                        ),
                        m = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, l.jsx)(iO, {})
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(N.Heading, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: iP().title,
                                                  ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_TITLE),
                                                  children: null == i ? void 0 : i.title,
                                              }),
                                              (null == i ? void 0 : i.description) &&
                                                  (0, l.jsx)(N.Heading, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: iP().description,
                                                      lineClamp: 5,
                                                      ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_TEXT),
                                                      children: i.description,
                                                  }),
                                          ],
                                      }),
                            [a, s, null == i ? void 0 : i.title, null == i ? void 0 : i.description],
                        );
                    return (0, l.jsxs)('section', {
                        className: iP().root,
                        ref: t,
                        ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK),
                        children: [
                            c,
                            m,
                            (0, l.jsx)(aK.$, {
                                className: iP().button,
                                icon: (0, l.jsx)(tM.Icon, { variant: 'link', size: 'xxs', className: iP().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: o.modal.open,
                                ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_BUTTON),
                                children: r({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                iB = (0, n.forwardRef)((e, t) => (0, l.jsx)(iD, { forwardRef: t, ...e })),
                iV = {
                    [T.t.COLLECTION_PLAYLIST_WITH_LIKES]: is,
                    [T.t.COLLECTION_FAVOURITE_PLAYLIST]: im,
                    [T.t.OPEN_PLAYLIST]: is,
                    [T.t.SMART_OPEN_PLAYLIST]: is,
                    [T.t.NON_MUSIC_OPEN_PLAYLIST]: is,
                    [T.t.COLLECTION_ARTISTS]: eW,
                    [T.t.COLLECTION_ARTISTS_AND_TOP]: eW,
                    [T.t.PERSONAL_ARTISTS]: eW,
                    [T.t.NEW_STARS_ARTISTS]: eW,
                    [T.t.EDITORIAL_ARTISTS]: eW,
                    [T.t.META_TAG_POPULAR_ARTISTS]: eW,
                    [T.t.MICRO_GENRE_ARTISTS]: eW,
                    [T.t.MICRO_GENRE_TOP_ARTISTS]: eW,
                    [T.t.META_TAG_ARTISTS]: eW,
                    [T.t.SIMILAR_ARTISTS]: eW,
                    [T.t.NEW_RELEASES]: a$,
                    [T.t.EDITORIAL_NEW_RELEASES]: a$,
                    [T.t.NEW_PLAYLISTS]: at.EntitiesCarousel,
                    [T.t.EDITORIAL_COMPILATION]: at.EntitiesCarousel,
                    [T.t.RECOMMENDED_PLAYLISTS]: at.EntitiesCarousel,
                    [T.t.META_TAG_POPULAR_PLAYLISTS]: at.EntitiesCarousel,
                    [T.t.META_TAG_PLAYLISTS]: at.EntitiesCarousel,
                    [T.t.META_TAG_NEW_ALBUMS]: at.EntitiesCarousel,
                    [T.t.MICRO_GENRE_ALBUMS]: at.EntitiesCarousel,
                    [T.t.META_TAG_ALBUMS]: at.EntitiesCarousel,
                    [T.t.ARTIST_PLAYLISTS]: at.EntitiesCarousel,
                    [T.t.ARTIST_ALBUMS]: at.EntitiesCarousel,
                    [T.t.ARTIST_COMPILATIONS]: at.EntitiesCarousel,
                    [T.t.ARTIST_STUDIO_ALBUMS]: at.EntitiesCarousel,
                    [T.t.ARTIST_SIMILAR_ENTITIES]: at.EntitiesCarousel,
                    [T.t.COLLECTION_SIMILAR_ENTITIES]: at.EntitiesCarousel,
                    [T.t.PROMOTIONS]: iu.Promotions,
                    [T.t.EDITORIAL_PROMOTIONS]: iu.Promotions,
                    [T.t.NON_MUSIC_PROMOTIONS]: iu.Promotions,
                    [T.t.PERSONAL_PLAYLISTS]: a8,
                    [T.t.REWIND_PLAYLISTS]: a8,
                    [T.t.MICRO_GENRE_SIMILAR_WAVE]: t6,
                    [T.t.META_TAG_SIMILAR_WAVE]: t6,
                    [T.t.EDITORIAL_WAVES]: t6,
                    [T.t.META_TAG_WAVE]: t6,
                    [T.t.MICRO_GENRE_WAVE]: t6,
                    [T.t.EDITORIAL_WAVES_AGENT]: ae,
                    [T.t.META_TAG_WAVE_AGENT]: ae,
                    [T.t.MICRO_GENRE_WAVE_AGENT]: ae,
                    [T.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: ae,
                    [T.t.META_TAG_SIMILAR_WAVE_AGENT]: ae,
                    [T.t.CONCERTS_PERSONAL]: tw,
                    [T.t.CONCERTS_TOP]: tw,
                    [T.t.EDITORIAL_CONCERTS]: tw,
                    [T.t.VIEWED_CONCERTS]: tw,
                    [T.t.CLIPS]: ey,
                    [T.t.ARTIST_CLIPS]: ey,
                    [T.t.WAVES]: iN,
                    [T.t.SETS_BY_WAVES]: iN,
                    [T.t.WAVES_AGENT]: ik,
                    [T.t.SETS_BY_WAVES_AGENT]: ik,
                    [T.t.CHART_TRACKS]: eT,
                    [T.t.COLLECTION_KIDS]: tc,
                    [T.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: tT,
                    [T.t.COLLECTION_PLAYLISTS_CREATED]: tr,
                    [T.t.COLLECTION_PLAYLISTS_LIKED]: tu,
                    [T.t.ALBUM_PROMO]: X,
                    [T.t.SIMPLE_ALBUM_PROMO]: J,
                    [T.t.ITEM_LIST]: a_,
                    [T.t.OVERVIEW]: a3,
                    [T.t.COLLECTION_ALBUMS]: ej,
                    [T.t.COLLECTION_CLIPS]: ta,
                    [T.t.COLLECTION_TOP_ARTISTS]: th,
                    [T.t.RECENTLY_PLAYED]: i_.g,
                    [T.t.IN_STYLE]: ad,
                    [T.t.SPECIAL]: ih,
                    [T.t.WIZARD]: iB,
                    [T.t.MIXES]: aN,
                    [T.t.MIXES_GRID]: aE.MixesGridBlock,
                    [T.t.MIXES_MUSIC]: af,
                    [T.t.NEUROMUSIC]: aU,
                    [T.t.CONCERT_PLACE]: tj,
                    [T.t.LIKES_AND_HISTORY]: aI,
                    [T.t.NON_MUSIC_EDITORIAL_COMPILATION]: aq.t,
                    [T.t.COLLECTION_ALBUMS_PRESAVES]: eD,
                    [T.t.CHART_ALBUMS]: aQ.S,
                    [T.t.DONATIONS]: t0,
                    [T.t.CONTINUE_LISTEN]: tH,
                    [T.t.DISLIKES]: tQ,
                    [T.t.COLLECTION_DOWNLOADED_TRACKS]: tn,
                    [T.t.HISTORY]: iC,
                    [T.t.SEARCH_HISTORY]: iC,
                    [T.t.ARTIST_CONCERTS]: ea,
                    [T.t.ARTIST_POPULAR_TRACKS]: e_,
                    [T.t.ARTIST_RELEASE]: ev,
                    [T.t.FAMILIAR_YOU]: as,
                    [T.t.ARTIST_PICK]: en,
                    [T.t.ARTIST_UPCOMING_RELEASE]: eC,
                    [T.t.COLLECTION_WAVE_AGENT]: tN,
                    [T.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: e9,
                    [T.t.NON_MUSIC_CATEGORY]: aq.t,
                    [T.t.PODCASTS_CHART_ALBUMS]: aQ.S,
                },
                iU = (0, r.PA)((e) => {
                    let { landing: t, block: a, isIntersecting: i, forwardRef: r, onLoad: o, className: c, containerClassName: m, ...u } = e,
                        {
                            isNeededToLoad: p,
                            isLoading: C,
                            isLoaded: T,
                            isRejected: I,
                            isShimmerVisible: h,
                            isShimmerActive: L,
                            isVisible: y,
                            id: S,
                            type: N,
                            meta: E,
                            data: x,
                            hasSentAnalyticsOnLoaded: j,
                            setHasSentAnalyticsOnLoaded: k,
                            setOutdated: R,
                            setIsNeededToLoad: f,
                        } = a;
                    if ((0, v.Q)(a)) return null;
                    let P = iV[a.type],
                        w = (0, _.fBs)(),
                        { settings: K, experiments: O } = (0, _.Pjs)(),
                        M = !O.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') && K.browserInfo && !K.browserInfo.isSafari;
                    (0, n.useEffect)(() => {
                        (i || !y) && p && (0, g.v)(E) && t.getBlock(a);
                    }, [a, i, p, y, t, E]),
                        (0, n.useEffect)(() => {
                            (T || I) && (null == o || o());
                        }, [T, I, o]),
                        (0, n.useEffect)(() => {
                            !j && T && (w(), k(!0));
                        }, [j, T, w, k]);
                    let D = (0, b.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(r)) {
                            var e;
                            return null == (e = r.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return y
                        ? (0, l.jsx)(
                              P,
                              {
                                  setIsNeededToLoad: f,
                                  setOutdated: R,
                                  isLoaded: T,
                                  isLoading: C,
                                  isShimmerVisible: h,
                                  isShimmerActive: L,
                                  isRejected: I,
                                  tracksContainerClassName: A().tracksContainer,
                                  containerClassName: (0, s.$)(A().container, A().important, m),
                                  className: (0, s.$)({ [A().container_withContentVisibility]: M && D }, c),
                                  headerClassName: A().headerContainer,
                                  meta: E,
                                  data: x,
                                  type: N,
                                  ref: r,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': a.id,
                                  ...(0, d.Am)(a.type),
                                  ...u,
                              },
                              S,
                          )
                        : null;
                }),
                iG = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(_.hf$.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(iU, { ...t }),
                    });
                });
            var iY = a(45705),
                iW = a.n(iY);
            let iX = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        r = (0, b.L)(() => {
                            if (null == a ? void 0 : a.release)
                                return (0, l.jsx)(iG, { ...i, className: iW().release, containerClassName: iW().releaseCard, block: a.release });
                        }),
                        o = (0, b.L)(() => {
                            if (null == a ? void 0 : a.upcomingRelese)
                                return (0, l.jsx)(iG, { ...i, className: iW().release, containerClassName: iW().releaseCard, block: a.upcomingRelese });
                        }),
                        n = (0, b.L)(() => {
                            if (null == a ? void 0 : a.popularTracks)
                                return (0, l.jsx)(iG, {
                                    ...i,
                                    className: (0, s.$)(iW().popularTracks, { [iW().popularTracks_withReleaseBlock]: !!(null != o ? o : r) }),
                                    block: a.popularTracks,
                                });
                        });
                    return (0, l.jsx)('section', {
                        ref: t,
                        className: iW().root,
                        ...(0, f.getDataAttrFromProps)(i),
                        children: (0, l.jsxs)('div', { className: iW().container, children: [n, null != o ? o : r] }),
                    });
                }),
                iF = (0, n.forwardRef)((e, t) => (0, l.jsx)(iX, { forwardRef: t, ...e }));
            var iz = a(79101),
                iH = a.n(iz);
            let i$ = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        s = (0, b.L)(() => {
                            if (null == a ? void 0 : a.familiarYou) return (0, l.jsx)(iG, { ...i, block: a.familiarYou });
                        }),
                        r = (0, b.L)(() => {
                            if (null == a ? void 0 : a.artistPick) return (0, l.jsx)(iG, { ...i, block: a.artistPick });
                        });
                    return (0, l.jsxs)('section', { ref: t, className: iH().root, ...(0, f.getDataAttrFromProps)(i), children: [r, s] });
                }),
                iQ = (0, n.forwardRef)((e, t) => (0, l.jsx)(i$, { forwardRef: t, ...e })),
                iq = { [T.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: iF, [T.t.FAMILIAR_YOU_AND_ARTIST_PICK]: iQ },
                iZ = (0, r.PA)((e) => {
                    let { block: t, forwardRef: a, onLoad: i, ...s } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == i || i();
                        }, [t.isVisible, i]),
                        !(0, v.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let r = iq[t.type];
                    return (0, l.jsx)(r, { data: t.data, ref: a, 'data-intersection-property-id': t.id, ...s });
                }),
                iJ = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(_.hf$.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(iZ, { ...t }),
                    });
                }),
                i0 = (0, r.PA)((e) => ((0, v.Q)(e.block) ? (0, l.jsx)(iJ, { ...e }) : (0, l.jsx)(iG, { ...e })));
            var i1 = a(86242),
                i3 = a.n(i1),
                i2 = a(51606);
            let i8 = (e) => {
                    let { landing: t, tab: a } = e,
                        { notify: i, dismiss: s } = (0, _.lkh)(),
                        r = (0, n.useRef)(void 0),
                        o = (0, c.c)(() => {
                            a.blocks.forEach((e) => {
                                e.isRejected && (0, g.v)(e.meta) && t.getBlock(e);
                            }),
                                s({ notificationId: r.current }),
                                a.setShouldReloadNotification(!1);
                        });
                    (0, n.useEffect)(() => {
                        a.hasErrorBlocks &&
                            !a.shouldReloadNotification &&
                            setTimeout(() => {
                                (r.current = i((0, l.jsx)(p.LV, { reloadBlocks: o }), { containerId: _.uQT.ERROR, autoClose: !1 })), a.setShouldReloadNotification(!0);
                            });
                    }, [i, o, a.hasErrorBlocks, a.shouldReloadNotification, a]),
                        (0, n.useEffect)(
                            () => () => {
                                s(), (0, i2._n)(a) && a.setShouldReloadNotification(!1);
                            },
                            [s, a],
                        );
                },
                i4 = (0, r.PA)((e) => {
                    var t;
                    let { landing: a, tab: i, tabIndex: s } = e,
                        r = (0, n.useMemo)(() => i.blocks.map(() => (0, n.createRef)()), [i.blocks]),
                        o = (0, m.BL)(r, { freezeOnceVisible: !0 });
                    return (
                        i8({ landing: a, tab: i }),
                        (0, l.jsx)(_.jPc, {
                            children: (0, l.jsx)(_.hjC, {
                                tabId: i.meta.id,
                                tabPos: s + 1,
                                isTabSelectedByDefault: (null == (t = a.meta) ? void 0 : t.selectedTabIndex) === s,
                                children: (0, l.jsx)('div', {
                                    className: i3().root,
                                    children: i.blocks.map((e, t) => {
                                        let { isIntersecting: i } = o[e.id] || {};
                                        return (0, l.jsx)(i0, { landing: a, block: e, blockIndex: t, isIntersecting: i, forwardRef: r[t] }, e.id);
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var i6 = a(40924),
                i9 = a(56874),
                i5 = a(99041);
            let i7 = {
                [T.t.ALBUM_PROMO]: 314,
                [T.t.ARTIST_PICK]: 102,
                [T.t.ARTIST_CONCERTS]: 232,
                [T.t.ARTIST_PLAYLISTS]: 316,
                [T.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [T.t.ARTIST_POPULAR_TRACKS]: 340,
                [T.t.ARTIST_RELEASE]: 340,
                [T.t.ARTIST_UPCOMING_RELEASE]: 340,
                [T.t.ARTIST_ALBUMS]: 316,
                [T.t.ARTIST_COMPILATIONS]: 316,
                [T.t.ARTIST_CLIPS]: 292,
                [T.t.ARTIST_STUDIO_ALBUMS]: 316,
                [T.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [T.t.SIMPLE_ALBUM_PROMO]: 140,
                [T.t.CHART_ALBUMS]: 322,
                [T.t.CHART_TRACKS]: 284,
                [T.t.COLLECTION_ALBUMS]: 320,
                [T.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [T.t.COLLECTION_ARTISTS]: 336,
                [T.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [T.t.COLLECTION_TOP_ARTISTS]: 336,
                [T.t.COLLECTION_CLIPS]: 292,
                [T.t.COLLECTION_FAVOURITE_PLAYLIST]: 370,
                [T.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [T.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [T.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [T.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [T.t.COLLECTION_KIDS]: 320,
                [T.t.CONCERTS_PERSONAL]: 442,
                [T.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [T.t.CONCERTS_TOP]: 442,
                [T.t.EDITORIAL_ARTISTS]: 336,
                [T.t.EDITORIAL_CONCERTS]: 442,
                [T.t.VIEWED_CONCERTS]: 442,
                [T.t.EDITORIAL_COMPILATION]: 316,
                [T.t.EDITORIAL_NEW_RELEASES]: 410,
                [T.t.EDITORIAL_PROMOTIONS]: 342,
                [T.t.EDITORIAL_WAVES]: 138,
                [T.t.EDITORIAL_WAVES_AGENT]: 319,
                [T.t.META_TAG_WAVE_AGENT]: 319,
                [T.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [T.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [T.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [T.t.IN_STYLE]: 370,
                [T.t.ITEM_LIST]: 250,
                [T.t.LIKES_AND_HISTORY]: 106,
                [T.t.META_TAG_ALBUMS]: 316,
                [T.t.META_TAG_ARTISTS]: 336,
                [T.t.META_TAG_NEW_ALBUMS]: 316,
                [T.t.META_TAG_PLAYLISTS]: 316,
                [T.t.META_TAG_POPULAR_ARTISTS]: 336,
                [T.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [T.t.META_TAG_SIMILAR_WAVE]: 138,
                [T.t.META_TAG_WAVE]: 64,
                [T.t.MICRO_GENRE_ALBUMS]: 316,
                [T.t.MICRO_GENRE_ARTISTS]: 336,
                [T.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [T.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [T.t.MICRO_GENRE_WAVE]: 64,
                [T.t.MIXES]: 260,
                [T.t.MIXES_GRID]: 240,
                [T.t.MIXES_MUSIC]: 264,
                [T.t.NEUROMUSIC]: 138,
                [T.t.NEW_PLAYLISTS]: 316,
                [T.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [T.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [T.t.NEW_RELEASES]: 410,
                [T.t.NEW_STARS_ARTISTS]: 336,
                [T.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [T.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [T.t.NON_MUSIC_PROMOTIONS]: 342,
                [T.t.OPEN_PLAYLIST]: 310,
                [T.t.OVERVIEW]: 84,
                [T.t.PERSONAL_ARTISTS]: 336,
                [T.t.PERSONAL_PLAYLISTS]: 342,
                [T.t.PROMOTIONS]: 342,
                [T.t.RECENTLY_PLAYED]: 316,
                [T.t.RECOMMENDED_PLAYLISTS]: 316,
                [T.t.REWIND_PLAYLISTS]: 342,
                [T.t.SMART_OPEN_PLAYLIST]: 310,
                [T.t.SPECIAL]: 192,
                [T.t.SIMILAR_ARTISTS]: 336,
                [T.t.TABS]: 60,
                [T.t.WAVES]: 176,
                [T.t.WAVES_AGENT]: 370,
                [T.t.SETS_BY_WAVES_AGENT]: 370,
                [T.t.SETS_BY_WAVES]: 176,
                [T.t.WIZARD]: 328,
                [T.t.DONATIONS]: 216,
                [T.t.CLIPS]: 292,
                [T.t.CONTINUE_LISTEN]: 138,
                [T.t.DISLIKES]: 54,
                [T.t.HISTORY]: 402,
                [T.t.SEARCH_HISTORY]: 402,
                [T.t.FAMILIAR_YOU]: 102,
                [T.t.CONCERT_PLACE]: 324,
                [T.t.COLLECTION_WAVE_AGENT]: 186,
                [T.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: 336,
                [T.t.NON_MUSIC_CATEGORY]: 316,
                [T.t.PODCASTS_CHART_ALBUMS]: 322,
            };
            var le = a(1333),
                lt = a.n(le);
            let la = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: a, resizeObserver: i, isScrolling: s, style: r, ...o } = e,
                        [d, c] = (0, i9.d)(),
                        [u, _] = (0, i9.d)(),
                        { isIntersecting: p } =
                            null != (t = (0, m.BL)([{ current: d }], !d || (null == d ? void 0 : d.dataset.intersectionPropertyId) !== o.block.id)[o.block.id]) ? t : {};
                    return (
                        (0, n.useEffect)(
                            () => (
                                u && i && i.observe(u),
                                () => {
                                    u && i && i.unobserve(u);
                                }
                            ),
                            [u, i],
                        ),
                        (0, l.jsx)('div', {
                            'data-index': a.index,
                            className: lt().root,
                            ref: _,
                            style: r,
                            children: (0, l.jsx)(i0, { ...o, forwardRef: c, isIntersecting: p && !s }),
                        })
                    );
                }),
                li = (0, r.PA)((e) => {
                    var t, a;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        [u, p] = (0, i9.d)(),
                        g = (0, n.useRef)(!0),
                        [v, b] = (0, n.useState)(() => Array.from({ length: s.blocks.length }, (e, t) => t)),
                        C = (0, c.c)(() => {
                            let e = [];
                            s.blocks.forEach((t, a) => {
                                var i;
                                (t.isVisible || ((null == (i = t.meta) ? void 0 : i.showPolicy) === i6.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(a);
                            }),
                                b(e);
                        }),
                        A = (0, c.c)((e) => {
                            let t = v[e];
                            if (void 0 === t) return 300;
                            let a = s.blocks[t];
                            return (null == a ? void 0 : a.isVisible) ? i7[a.type] : 0;
                        }),
                        { virtualizer: T, resizeObserver: I } = (0, i5.rA)({
                            count: null != (a = v.length) ? a : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: A,
                            containerRef: u,
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!g.current) return;
                        let t = d.get(_.K3F.BLOCK),
                            a = s.blocks.findIndex((e) => e.id === t);
                        if (!v.includes(a)) return;
                        let i = null == (e = T.getOffsetForIndex(a, 'center')) ? void 0 : e[0];
                        T.scrollToIndex(a, { align: 'center', behavior: 'auto' }), T.scrollOffset && i && 100 > Math.abs(T.scrollOffset - i) && (g.current = !1);
                    }, [v, d, s.blocks, T]);
                    let h = T.getTotalSize(),
                        L = T.getVirtualItems();
                    return (
                        i8({ landing: i, tab: s }),
                        (0, l.jsx)(_.jPc, {
                            children: (0, l.jsx)(_.hjC, {
                                tabId: s.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, l.jsx)('div', {
                                    className: i3().root,
                                    style: { height: ''.concat(h, 'px') },
                                    ref: p,
                                    children: L.map((e) => {
                                        let t = v[e.index],
                                            a = s.blocks[Number(t)];
                                        return a
                                            ? (0, l.jsx)(
                                                  la,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: i,
                                                      block: a,
                                                      blockIndex: Number(t),
                                                      isScrolling: T.isScrolling,
                                                      onLoad: C,
                                                      style: { transform: 'translate3d(0, '.concat(e.start - T.options.scrollMargin, 'px, 0)') },
                                                  },
                                                  e.key,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        })
                    );
                }),
                ll = (0, r.PA)((e) => {
                    var t, a, i;
                    let {
                            landing: r,
                            upperBlocks: o,
                            headerConcealerComponent: m,
                            tabsState: g,
                            containerClassName: v,
                            containerStyle: b,
                            headerClassName: C,
                            tabWithHeadingTitle: A,
                            tabWithCovers: T,
                            tabWithSubtitle: I,
                            stickyHeaderClassName: h,
                            staticHeaderClassName: L,
                            stickyHeaderTabIndex: y,
                            headerVariant: S = p.Vw.COMPOSITE,
                        } = e,
                        { tabs: N } = r,
                        E = (0, n.useId)(),
                        { isScrolling: x } = (0, n.useContext)(p.B9),
                        { contentScrollRef: j } = (0, _.gKY)(),
                        {
                            experiments: k,
                            settings: { isMobile: R },
                        } = (0, _.Pjs)(),
                        f = k.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') ? li : i4,
                        P = (0, c.c)((e) => {
                            var t;
                            R ? window.scrollTo(0, 0) : j && (j.scrollTop = 0), null == (t = g.onTabChange) || t.call(g, e);
                        });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            o,
                            m,
                            (0, l.jsx)(p.Y9, {
                                className: (0, s.$)(i3().header, C),
                                variant: S,
                                stickyClassName: h,
                                staticClassName: L,
                                stickyChild: (0, l.jsx)(p.wI, {
                                    isShimmerVisible: N.isLoading || r.isLoading,
                                    className: i3().stickyTabs,
                                    shimmer: (0, l.jsx)(p.zr, {}),
                                    elementId: E,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    value: g.value,
                                    onTabChange: P,
                                    children:
                                        null == (t = N.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: a } = e;
                                                  return (0, l.jsx)(
                                                      p.oz,
                                                      {
                                                          className: i3().tab,
                                                          value: t,
                                                          'aria-label': a.title,
                                                          title: a.title,
                                                          'aria-hidden': !x && S !== p.Vw.STICKY,
                                                          tabIndex: null != y ? y : x ? 0 : -1,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                                children: (0, l.jsx)(p.wI, {
                                    className: (0, s.$)(i3().tabCarousel, i3().important),
                                    elementId: E,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    ...g,
                                    children:
                                        null == (a = N.data)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  let { meta: a, data: i } = e;
                                                  return (0, l.jsx)(
                                                      p.oz,
                                                      {
                                                          className: i3().tab,
                                                          value: t,
                                                          'aria-label': a.title,
                                                          title: a.title,
                                                          subtitle: null == i ? void 0 : i.subtitle,
                                                          covers: null == i ? void 0 : i.covers,
                                                          'aria-hidden': x,
                                                          tabIndex: x ? -1 : 0,
                                                          withCovers: T,
                                                          withSubtitle: I,
                                                          withHeading: A,
                                                          isShimmerVisible: N.loadingState === _.GuX.PENDING,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, l.jsx)('div', {
                                className: v,
                                style: b,
                                children:
                                    null == (i = N.data)
                                        ? void 0
                                        : i.map((e, t) =>
                                              (0, l.jsx)(
                                                  u.TabPanel,
                                                  {
                                                      className: i3().tabPanel,
                                                      name: t,
                                                      value: g.value,
                                                      elementId: E,
                                                      children: (0, l.jsx)(f, { landing: r, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                ls = (0, r.PA)((e) => {
                    var t, a, i, s;
                    let {
                            landing: r,
                            headerConcealerComponent: d,
                            errorComponent: c,
                            containerClassName: p,
                            headerClassName: v,
                            containerStyle: b,
                            tabWithHeadingTitle: C,
                            tabWithCovers: A,
                            tabWithSubtitle: T,
                            staticHeaderClassName: I,
                            stickyHeaderClassName: h,
                            stickyHeaderTabIndex: L,
                            headerVariant: y,
                        } = e,
                        S = (0, o.useSearchParams)(),
                        N = (0, _.XJ9)(),
                        E = ((e) =>
                            (0, n.useCallback)(
                                (t) => {
                                    var a;
                                    let i = null == (a = e.tabs.data) ? void 0 : a[t];
                                    null == i ||
                                        i.blocks.forEach((t) => {
                                            t.isOutdated && (0, g.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(r),
                        { experiments: x } = (0, _.Pjs)(),
                        j = x.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') ? li : i4,
                        k = (0, n.useMemo)(() => {
                            var e;
                            if (!r.isLoaded) return null;
                            let t = S.get(_.K3F.TAB),
                                a = null == (e = r.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof a && a >= 0 ? a : null;
                        }, [r.isLoaded, r.tabs.data, S]),
                        R = (0, u.useTabsState)(null != (s = null != k ? k : null == (t = r.meta) ? void 0 : t.selectedTabIndex) ? s : 0),
                        f = (0, n.useCallback)(
                            (e) => {
                                var t, a, i;
                                let l = null == (a = r.tabs.data) || null == (t = a[e]) ? void 0 : t.meta.id;
                                if ((e !== R.value && E(R.value), null == (i = R.onTabChange) || i.call(R, e), l)) {
                                    let e = (0, _.bJ)(_.K3F.TAB, l);
                                    e && N(e);
                                }
                            },
                            [N, r.tabs.data, E, R],
                        ),
                        P = !!(r.tabs.data && r.tabs.data.length > 1),
                        w = null == (a = r.tabs.data) ? void 0 : a[0],
                        K = (0, n.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = r.upperBlocks) ? void 0 : e.map(() => (0, n.createRef)())) ? t : [];
                        }, [r.upperBlocks]),
                        O = (0, m.BL)(K, { freezeOnceVisible: !0 }),
                        M = (0, n.useMemo)(() => {
                            var e;
                            if (null == (e = r.upperBlocks) ? void 0 : e.length)
                                return (0, l.jsx)(_.hjC, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, l.jsx)('div', {
                                        className: i3().upperBlocks,
                                        children: r.upperBlocks.map((e, t) => {
                                            let { isIntersecting: a } = O[e.id] || {};
                                            return (0, l.jsx)(i0, { landing: r, block: e, blockIndex: t, isIntersecting: a, forwardRef: K[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (i = r.upperBlocks) ? void 0 : i.length, r, O, K]);
                    return P
                        ? (0, l.jsx)(ll, {
                              landing: r,
                              upperBlocks: M,
                              headerConcealerComponent: d,
                              tabsState: { value: R.value, onTabChange: f },
                              containerClassName: p,
                              containerStyle: b,
                              headerClassName: v,
                              tabWithHeadingTitle: C,
                              tabWithCovers: A,
                              tabWithSubtitle: T,
                              staticHeaderClassName: I,
                              stickyHeaderClassName: h,
                              stickyHeaderTabIndex: L,
                              headerVariant: y,
                          })
                        : w
                          ? (0, l.jsxs)('div', { className: p, style: b, children: [M, d, (0, l.jsx)(j, { landing: r, tab: w, tabIndex: 0 })] })
                          : M
                            ? (0, l.jsx)(_.jPc, { children: (0, l.jsxs)('div', { className: p, style: b, children: [M, d] }) })
                            : r.isLoadedAndEmpty
                              ? (0, l.jsx)('div', { className: p, style: b, children: c })
                              : null;
                });
        },
        40924: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { E: () => i }),
                (function (e) {
                    (e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW');
                })(i || (i = {}));
        },
        41019: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        41817: (e, t, a) => {
            'use strict';
            a.d(t, { Promotions: () => y });
            var i = a(62936),
                l = a(79950),
                s = a(44020),
                r = a(23480),
                o = a(33878),
                n = a(21153),
                d = a(42561),
                c = a(85906),
                m = a(13030),
                u = a(56721),
                _ = a(20418),
                p = a(25401),
                g = a.n(p);
            let v = (e) => {
                let { promotion: t } = e,
                    { ref: a, intersectionPropertyId: o } = (0, d.nMI)(),
                    n = (0, d.NKK)(),
                    p = (0, s.useCallback)(() => {
                        n({ to: r.QT.Link });
                    }, [n]);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(g().root, g().card),
                    ref: a,
                    'data-intersection-property-id': o,
                    children: [
                        (0, i.jsx)(c.N_, {
                            className: g().coverLink,
                            href: t.weblink,
                            onClick: p,
                            children: (0, i.jsx)(u.Paper, {
                                className: g().cover,
                                radius: 'm',
                                withShadow: !0,
                                children: (0, i.jsx)(m.Image, {
                                    className: g().image,
                                    src: t.imageUrl,
                                    alt: t.title,
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    size: 400,
                                    fit: 'cover',
                                }),
                            }),
                        }),
                        (0, i.jsxs)('div', {
                            className: g().meta,
                            children: [
                                (0, i.jsx)(c.N_, {
                                    className: g().titleLink,
                                    href: t.weblink,
                                    onClick: p,
                                    children: (0, i.jsx)(_.Caption, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, i.jsx)(_.Caption, {
                                    className: g().subtitle,
                                    variant: 'div',
                                    lineClamp: 1,
                                    type: 'entity',
                                    size: 's',
                                    weight: 'medium',
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var b = a(70215),
                C = a.n(b),
                A = a(30388),
                T = a(97762),
                I = a.n(T);
            let h = (e) => {
                    let { isActive: t, withHeadingShimmer: a } = e;
                    return (0, i.jsxs)('div', {
                        className: I().root,
                        children: [
                            (0, i.jsx)(A.Shimmer, { isActive: t, className: I().cover, radius: 'l' }),
                            (0, i.jsxs)('div', {
                                className: I().meta,
                                children: [
                                    a && (0, i.jsx)(A.Shimmer, { isActive: t, className: I().heading, radius: 's' }),
                                    (0, i.jsx)(A.Shimmer, { isActive: t, className: I().title, radius: 's' }),
                                    (0, i.jsx)(A.Shimmer, { isActive: t, className: I().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: m,
                            data: u,
                            meta: _,
                            containerClassName: p,
                            headerClassName: g,
                            headingVariant: b,
                            className: A,
                            ...T
                        } = e,
                        I = (0, s.useId)(),
                        L = (0, s.useRef)(null),
                        y = (0, s.useMemo)(() => {
                            if (a) return Array.from({ length: 6 }, (e, t) => (0, i.jsx)(h, { isActive: m, withHeadingShimmer: !0 }, t));
                            return null == u
                                ? void 0
                                : u.items.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: u.items.length,
                                              children: (0, i.jsx)(v, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == u ? void 0 : u.items, m, a]);
                    return (0, i.jsxs)('section', {
                        className: (0, l.$)(C().root, A),
                        ref: t,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: g,
                                labeledForId: I,
                                title: _.title,
                                controls: (0, i.jsx)(c.X9, { className: C().controls, carouselRef: L }),
                                headingVariant: b,
                            }),
                            (0, i.jsx)(n.Carousel, { className: p, ref: L, itemClassName: (0, l.$)(C().item, C().important), 'aria-labelledby': I, children: y }),
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) => (0, i.jsx)(L, { forwardRef: t, ...e }));
        },
        42538: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        45705: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        45982: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
            };
        },
        46119: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            var i = a(62936),
                l = a(30388),
                s = a(85906),
                r = a(14877),
                o = a.n(r);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: o().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(l.Shimmer, { isActive: t, className: o().cover, radius: 'l' }),
                        (0, i.jsx)(s.nN, { isActive: t, className: o().title }),
                        (0, i.jsx)(s.nN, { isActive: t, className: o().text }),
                    ],
                });
            };
        },
        47063: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        47125: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        47550: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => u });
            var i = a(62936),
                l = a(44020),
                s = a(23480),
                r = a(92496),
                o = a(90914),
                n = a(79670),
                d = a(42561),
                c = a(85906);
            let m = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: m,
                        headerClassName: u,
                        meta: _,
                        data: p,
                        headingVariant: g,
                        className: v,
                        ...b
                    } = e;
                    return (0, i.jsx)(c.OY, {
                        className: v,
                        ...b,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: u,
                        containerClassName: m,
                        title: _.title,
                        description: _.description,
                        viewAllActionLink: _.viewAllActionLink,
                        ref: t,
                        headingVariant: g,
                        children:
                            null == p
                                ? void 0
                                : p.items.map((e, t) =>
                                      e.type === r._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: s.ky.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: p.items.length,
                                                    children: (0, i.jsx)(o.aX, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: s.ky.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: p.items.length,
                                                    children: (0, i.jsx)(n.B6, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        49083: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        49772: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { l: () => i }),
                (function (e) {
                    (e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab');
                })(i || (i = {}));
        },
        51089: (e, t, a) => {
            'use strict';
            a.d(t, { ClipsCarouselContent: () => v });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(44020),
                o = a(33782),
                n = a(23480),
                d = a(21153),
                c = a(42561),
                m = a(85845),
                u = a(46119),
                _ = a(75715),
                p = a.n(_);
            let g = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: a,
                            clipCardArtistLinkClassName: s,
                            carouselItemClassName: _,
                            isShimmerVisible: g,
                            isShimmerActive: v,
                            containerClassName: b,
                            artistIdWithoutLink: C,
                            withVideo: A = !0,
                            clips: T,
                            shouldOpenModalOnCardClick: I = !0,
                            itemCounter: h,
                        } = e,
                        L = (0, r.useId)(),
                        y = (0, r.useRef)(String((0, o.A)())),
                        S = (0, r.useMemo)(() => {
                            if (g) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(u.k, { isActive: v }, t));
                            return null == T
                                ? void 0
                                : T.map((e, t) =>
                                      (0, i.jsx)(
                                          c.Bki,
                                          {
                                              objectType: n.ky.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == T ? void 0 : T.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(m.ClipCard, {
                                                  titleClassName: a,
                                                  artistLinkClassName: s,
                                                  clip: e,
                                                  withVideo: A,
                                                  artistIdWithoutLink: C,
                                                  viewUuid: y.current,
                                                  shouldOpenModalOnCardClick: I,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [a, s, g, v, C, A, T, I]);
                    return (0, i.jsx)(d.Carousel, {
                        className: (0, l.$)(p().itemCounter, { [p()['itemCounter_'.concat(h)]]: h }, b),
                        ref: t,
                        itemClassName: (0, l.$)(p().item, p().important, _),
                        'aria-labelledby': L,
                        children: S,
                    });
                }),
                v = (0, r.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        52843: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        53087: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        55233: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        55525: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        55773: (e) => {
            e.exports = {
                root: 'LikesAndHistory_root__KCuz_',
                carousel: 'LikesAndHistory_carousel__579RD',
                carouselItem: 'LikesAndHistory_carouselItem__Yq5Xw',
                favoritesCoverContainer: 'LikesAndHistory_favoritesCoverContainer__UUIDf',
                favoritesCover: 'LikesAndHistory_favoritesCover__Nt7Gm',
                historyIcon: 'LikesAndHistory_historyIcon__2FAMu',
                historyIconContainer: 'LikesAndHistory_historyIconContainer__KPPbS',
            };
        },
        55880: (e, t, a) => {
            'use strict';
            a.d(t, { MixesGridMixCard: () => p });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(44020),
                o = a(8669),
                n = a(13030),
                d = a(56721),
                c = a(20418),
                m = a(85906),
                u = a(75380),
                _ = a.n(u);
            let p = (0, s.PA)((e) => {
                var t;
                let { className: a, title: s, weblink: u, linkClassName: p, covers: g, coverSize: v = 100, captionVariant: b = 'div' } = e,
                    C = (0, r.useMemo)(() => {
                        var e;
                        if (null == g || null == (e = g[0]) ? void 0 : e.color) return { '--subcover-background-color': g[0].color };
                    }, [g]);
                return (0, i.jsx)(m.N_, {
                    href: u,
                    className: (0, l.$)(_().link, p),
                    ...(0, o.Am)(o.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        radius: 'm',
                        style: C,
                        className: (0, l.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().plate,
                                ...(0, o.Am)(o.OA.mix.MIX_CARD_PLATE),
                                children: [
                                    (0, i.jsx)('div', { className: _().subcover, ...(0, o.Am)(o.OA.mix.MIX_CARD_SUBCOVER) }),
                                    (0, i.jsx)(n.Image, {
                                        src: null == g || null == (t = g[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: v,
                                        ...(0, o.Am)(o.OA.mix.MIX_CARD_COVER),
                                    }),
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: b,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, o.Am)(o.OA.mix.MIX_CARD_HEADER),
                                    children: s,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        56533: (e) => {
            e.exports = {
                root: 'Wizard_root__aW2c2',
                title: 'Wizard_title__L8ktt',
                description: 'Wizard_description__RFf2U',
                button: 'Wizard_button__lr8pa',
                buttonIcon: 'Wizard_buttonIcon__eOX3P',
                imagesWrapper: 'Wizard_imagesWrapper__tyqWr',
                images: 'Wizard_images__5rxec',
                paper: 'Wizard_paper__ijUgq',
                image: 'Wizard_image__k9AXl',
            };
        },
        57481: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => _ });
            var i = a(62936),
                l = a(44020),
                s = a(23480),
                r = a(92496),
                o = a(90914),
                n = a(11334),
                d = a(79670),
                c = a(42561),
                m = a(85906);
            let u = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: u,
                        headerClassName: _,
                        meta: p,
                        data: g,
                        headingVariant: v,
                        className: b,
                        ...C
                    } = e;
                    return (0, i.jsx)(m.OY, {
                        className: b,
                        ...C,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: _,
                        containerClassName: u,
                        title: p.title,
                        description: p.description,
                        viewAllActionLink: p.viewAllActionLink,
                        ref: t,
                        headingVariant: v,
                        children:
                            null == g
                                ? void 0
                                : g.items.map((e, t) => {
                                      switch (e.type) {
                                          case r._.ALBUM_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: g.items.length,
                                                      children: (0, i.jsx)(o.aX, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.ARTIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: g.items.length,
                                                      children: (0, i.jsx)(n.ao, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.PLAYLIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: s.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: g.items.length,
                                                      children: (0, i.jsx)(d.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        57485: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        57613: (e) => {
            e.exports = {
                root_withControls: 'CollectionPlaylists_root_withControls__YV7o_',
                controls: 'CollectionPlaylists_controls___7XSv',
                header: 'CollectionPlaylists_header__EDtBS',
                important: 'CollectionPlaylists_important__oumcA',
                tab: 'CollectionPlaylists_tab__PppbA',
                tabShimmer: 'CollectionPlaylists_tabShimmer__U_ZFn',
                tabCarousel: 'CollectionPlaylists_tabCarousel__hWuL_',
                tabPanel: 'CollectionPlaylists_tabPanel__wSwRR',
                carouselEmpty: 'CollectionPlaylists_carouselEmpty__SVn6E',
                createPlaylistCard: 'CollectionPlaylists_createPlaylistCard__1cMca',
                item: 'CollectionPlaylists_item__YeviY',
            };
        },
        60525: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        60655: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(44020),
                o = a(60188),
                n = a(42561),
                d = a(85906),
                c = a(25358),
                m = a(18125),
                u = a.n(m);
            let _ = (e) => {
                let { filter: t, tabsState: a, index: s, isSticky: o, ...m } = e,
                    _ = (0, n.DCU)();
                return (
                    (0, r.useEffect)(() => {
                        _({ tabId: t.id, tabPos: s + 1, isTabSelectedByDefault: t.id === c.Q1.ALL });
                    }, [t.id, s, _]),
                    (0, i.jsx)(d.oz, { tabIndex: o ? -1 : 0, className: (0, l.$)(u().root, { [u().root_selected]: s === a.value }), title: t.name, value: s, ...m }, s)
                );
            };
            var p = a(55525),
                g = a.n(p);
            let v = (0, s.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: s } = e;
                return (0, i.jsx)(d.wI, {
                    className: (0, l.$)(g().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, i.jsx)(d.zr, { className: (0, l.$)(g().root, s), shimmerClassName: g().shimmer, count: 3, isActive: a }),
                });
            });
            var b = a(74915),
                C = a.n(b);
            let A = { [n.u40.Desktop]: { start: 40, end: 20 }, [n.u40.Mobile]: { start: 40, end: 40 } },
                T = { [n.u40.Desktop]: { start: 40, end: 20 }, [n.u40.Mobile]: { start: 20, end: 50 } },
                I = (0, s.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: s,
                            forwardRef: c,
                            carouselClassName: m,
                            shimmerClassName: u,
                            isSticky: p,
                            items: g,
                            isShimmerVisible: b,
                            isShimmerActive: I,
                            skipSearchCheck: h = !1,
                        } = e,
                        {
                            playlist: L,
                            settings: { isMobile: y },
                        } = (0, n.Pjs)(),
                        { playlistStickyFiltersRef: S, playlistStaticFiltersRef: N, contentScrollRef: E } = (0, n.gKY)(),
                        x = null != g ? g : L.filters.items,
                        j = (0, o.L)(() =>
                            (0, i.jsx)(d.wI, {
                                ref: c,
                                className: (0, l.$)(C().carousel, m),
                                ...t,
                                onTabChange: a,
                                children: null == x ? void 0 : x.map((e, a) => (0, i.jsx)(_, { filter: e, tabsState: t, index: a, isSticky: p }, e.id)),
                            }),
                        ),
                        k = (0, r.useCallback)(() => {
                            N && S && (N.scrollLeft = S.scrollLeft);
                        }, [N, S]),
                        R = (0, r.useCallback)(() => {
                            N && S && (S.classList.add(C().carousel_noSmooth), (S.scrollLeft = N.scrollLeft), S.classList.remove(C().carousel_noSmooth));
                        }, [N, S]),
                        [f, P] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        f && R();
                    }, [f, R]);
                    let w = (0, r.useCallback)(() => {
                        P((null == S ? void 0 : S.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [S]);
                    return (
                        (0, r.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                p
                                    ? (null == S || S.addEventListener('scroll', k, t), null == S || S.addEventListener('resize', k, t))
                                    : y
                                      ? (window.addEventListener('scroll', w, t), window.addEventListener('resize', w, t))
                                      : (null == E || E.addEventListener('scroll', w, t), null == E || E.addEventListener('resize', w, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [p, E, S, w, k, y]),
                        (null != b ? b : L.filters.isShimmerVisible)
                            ? (0, i.jsx)(v, { isActive: null == I || I, shimmerClassName: u })
                            : x && 0 !== x.length && (h || L.search.isNeededToLoad)
                              ? (0, i.jsx)(d.FY, { className: s, carouselElement: j, ref: c, scrollPadding: p ? T : A })
                              : void 0
                    );
                }),
                h = (0, r.forwardRef)((e, t) => (0, i.jsx)(I, { forwardRef: t, ...e }));
        },
        60738: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        61921: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        62993: (e) => {
            e.exports = {
                root: 'CollectionVibeAgent_root__Ckkcd',
                container: 'CollectionVibeAgent_container__Vnapv',
                text: 'CollectionVibeAgent_text__WYNR_',
                playButton: 'CollectionVibeAgent_playButton__YANpE',
                coverShimmer: 'CollectionVibeAgent_coverShimmer__q32bW',
                shimmerContainer: 'CollectionVibeAgent_shimmerContainer__4wBoC',
                item: 'CollectionVibeAgent_item__X8a1I',
                important: 'CollectionVibeAgent_important__FEcUJ',
            };
        },
        65185: (e, t, a) => {
            'use strict';
            a.d(t, { MapBlock: () => A });
            var i = a(62936),
                l = a(19718),
                s = a(47480),
                r = a(23480),
                o = a(59935),
                n = a(13030),
                d = a(20418),
                c = a(42561),
                m = a(85906),
                u = a(44020),
                _ = a(33878),
                p = a(3585),
                g = a.n(p),
                v = a(39171),
                b = a.n(v);
            let C = (0, l.PA)((e) => {
                    let { title: t, colors: a } = e;
                    return (0, i.jsxs)(d.Caption, {
                        size: 'm',
                        variant: 'span',
                        className: b().station,
                        children: [
                            (0, i.jsx)('div', {
                                className: b().stationColors,
                                children: a.map((e, t) => (0, i.jsx)('span', { className: b().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                A = (0, l.PA)((e) => {
                    var t, a, l;
                    let { data: p } = e,
                        { place: v, city: b, address: A, map: T } = p,
                        I = (() => {
                            let { theme: e } = (0, c.DPo)();
                            return (0, u.useCallback)(
                                (t) => {
                                    let a = (0, _.httpsReplacer)(t.replace('%%', '1300,1000')),
                                        { href: i } = (0, c.uvd)(a, { query: { theme: null != e ? e : '' } });
                                    return i;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: h } = (0, s.A)(),
                        { href: L, target: y } = ((e) => {
                            let { theme: t } = (0, c.DPo)();
                            return (0, c.uvd)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (l = null == p || null == (t = p.map) ? void 0 : t.url) ? l : ''),
                        S = (0, c.NKK)(),
                        { ref: N, intersectionPropertyId: E } = (0, c.nMI)(),
                        x = (0, o.c)(() => {
                            S({ to: r.QT.Link, deepLink: L });
                        });
                    return (0, i.jsxs)('div', {
                        ref: N,
                        'data-intersection-property-id': E,
                        className: g().root,
                        children: [
                            (0, i.jsx)(d.Heading, { size: 'm', variant: 'h3', className: g().heading, children: v }),
                            (0, i.jsx)(m.N_, {
                                onClick: x,
                                'aria-label': h({ id: 'entity-names.map-url' }),
                                href: L,
                                className: g().linkContainer,
                                target: y,
                                children: (0, i.jsx)(n.Image, {
                                    createUrlReplacer: I,
                                    className: g().mapImage,
                                    alt: v,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == T ? void 0 : T.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: g().addressContainer,
                                children: [
                                    (0, i.jsx)(d.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        className: g().address,
                                        children: ''.concat(b, ', ').concat(A),
                                    }),
                                    (0, i.jsx)('div', {
                                        'aria-label': h({ id: 'entity-names.metro-stations' }),
                                        className: g().metroStations,
                                        children: null == (a = p.groupedMetroStations) ? void 0 : a.map((e, t) => (0, i.jsx)(C, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        65258: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { n: () => i }),
                (function (e) {
                    (e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab');
                })(i || (i = {}));
        },
        66281: (e, t, a) => {
            'use strict';
            a.d(t, {
                FC: () => b.ClipCard,
                kV: () => C.k,
                zb: () => A.ClipContextMenu,
                kv: () => _,
                KR: () => T.ClipsCarousel,
                tD: () => I.ClipsCarouselContent,
                $d: () => v,
                Nk: () => h.HorizontalClipCard,
                wS: () => s,
                i$: () => n,
                SZ: () => c,
                V1: () => m,
                XP: () => u.useClipDisclaimer,
            });
            var i = a(59885),
                l = a(81628);
            let s = (e) => {
                var t;
                if (!e) return { clipId: 0, title: '', artists: [], thumbnail: '', previewUrl: '', duration: 0, disclaimers: [], trackIds: [] };
                let a = [];
                return (
                    (null == (t = e.disclaimers) ? void 0 : t.every((e) => Object.values(i.M).includes(e))) && (a = e.disclaimers),
                    {
                        clipId: e.clipId,
                        title: e.title,
                        thumbnail: e.thumbnail,
                        previewUrl: e.previewUrl,
                        duration: e.duration,
                        disclaimers: a,
                        version: e.version,
                        artists: e.artists.map((e) => {
                            let t = (0, l.NE)(e),
                                a = Number(t.id);
                            return { ...t, id: isNaN(a) ? 0 : a };
                        }),
                        trackIds: [],
                    }
                );
            };
            var r = a(51606),
                o = a(25099);
            let n = (e) => {
                var t;
                let a = null == (t = e.artists) ? void 0 : t.map((e) => (0, l.as)({ artist: e }));
                return (0, r.wg)({ ...(0, o.l6)(e), artists: a });
            };
            var d = a(42561);
            let c = (e) => {
                    var t, a;
                    let { clip: i, artists: s } = e,
                        { available: o, disclaimers: n } = (0, d.fyr)(i);
                    return (0, r.wg)({
                        clipId: i.id,
                        title: i.title,
                        thumbnail: null == (t = i.cover) ? void 0 : t.uri,
                        previewUrl: null == (a = i.cover) ? void 0 : a.videoUrl,
                        duration: i.duration,
                        artists: null == s ? void 0 : s.map((e) => (0, l.as)({ artist: e })),
                        isAvailable: o,
                        disclaimers: n,
                    });
                },
                m = (e, t) => {
                    if (!e) return { clipIds: [], activeClipIndex: 0 };
                    let a = e
                            .split(',')
                            .map(Number)
                            .filter((e) => e >= 0),
                        i = (0, o.z4)(a, t);
                    return { clipIds: a, activeClipIndex: i };
                };
            (0, a(44020).cache)(async (e) => {
                try {
                    let { container: t, backendHostTld: a, locale: i, host: l, fullUrl: s, isRSC: r, requestUrl: o } = await (0, d.IhE)();
                    if (r || !e) return { clips: void 0, backendHostTld: a, locale: i, host: l, fullUrl: s, requestUrl: o };
                    let n = t.get(d.jQD),
                        c = await n.getClip({ clipIds: [e] }),
                        m = s ? new URL(s) : void 0;
                    m && ((m.search = ''), m.searchParams.set(d.K3F.IDS, String(null != e ? e : '')));
                    let u = null == m ? void 0 : m.toString();
                    return { clip: null == c ? void 0 : c[0], backendHostTld: a, locale: i, host: l, fullUrl: s, requestUrl: o, canonical: u };
                } catch (e) {
                    return { clips: void 0, backendHostTld: '', locale: null, host: '', fullUrl: null, requestUrl: null };
                }
            });
            var u = a(10945);
            let _ = o.z8.props({ artists: r.gK.array(l.PK) }).views((e) => ({
                get hasArtists() {
                    return e.artists.length > 0;
                },
            }));
            var p = a(54690);
            let g = r.gK.model('Credit', { title: r.gK.string, value: r.gK.string }),
                v = r.gK
                    .model('CurrentClipInfo', {
                        id: r.gK.maybeNull(r.gK.number),
                        clip: r.gK.maybeNull(_),
                        clipLoadingState: r.gK.enumeration(Object.values(d.GuX)),
                        creditsLoadingState: r.gK.enumeration(Object.values(d.GuX)),
                        credits: r.gK.maybeNull(r.gK.array(g)),
                        modal: p.qt,
                    })
                    .views((e) => ({
                        get isClipIdle() {
                            return e.clipLoadingState === d.GuX.IDLE;
                        },
                        get isClipLoading() {
                            return e.clipLoadingState === d.GuX.PENDING;
                        },
                        get isClipRejected() {
                            return e.clipLoadingState === d.GuX.REJECT;
                        },
                        get isCreditsIdle() {
                            return e.creditsLoadingState === d.GuX.IDLE;
                        },
                        get isCreditsLoading() {
                            return e.creditsLoadingState === d.GuX.PENDING;
                        },
                        get isCreditsRejected() {
                            return e.creditsLoadingState === d.GuX.REJECT;
                        },
                        get isRejected() {
                            return e.creditsLoadingState === d.GuX.REJECT && e.clipLoadingState === d.GuX.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        setClipId(t) {
                            e.id = t;
                        },
                        getClip: (0, r.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (e.id && e.clipLoadingState !== d.GuX.PENDING)
                                try {
                                    e.clipLoadingState = d.GuX.PENDING;
                                    let [a] = yield t.getClip({ clipIds: [e.id] });
                                    if (!a) return;
                                    (e.clip = n(a)), (e.clipLoadingState = d.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.clipLoadingState = d.GuX.REJECT);
                                }
                        }),
                        getCreditsInfo: (0, r.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (!e.id || e.creditsLoadingState === d.GuX.PENDING) return null;
                            try {
                                e.creditsLoadingState = d.GuX.PENDING;
                                let a = yield t.getCredits({ clipId: e.id });
                                (e.credits = (0, r.wg)(null == a ? void 0 : a.credits)), (e.creditsLoadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.creditsLoadingState = d.GuX.REJECT);
                            }
                            return null;
                        }),
                        reset() {
                            (e.id = null), (e.clip = null), (e.clipLoadingState = d.GuX.IDLE), (e.creditsLoadingState = d.GuX.IDLE), (e.credits = null);
                        },
                    }));
            var b = a(85845),
                C = a(46119),
                A = a(31899),
                T = a(15545),
                I = a(51089),
                h = a(29025);
        },
        67239: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        70215: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        70224: (e) => {
            e.exports = {
                root: 'ArtistWithItemsShimmer_root__0UQ8u',
                actionItems: 'ArtistWithItemsShimmer_actionItems__drxv9',
                actionItem: 'ArtistWithItemsShimmer_actionItem__NksfP',
                actionCover: 'ArtistWithItemsShimmer_actionCover__4LUi8',
                actionTextContainer: 'ArtistWithItemsShimmer_actionTextContainer__Qijsx',
                actionText: 'ArtistWithItemsShimmer_actionText__nUSLH',
                actionText_title: 'ArtistWithItemsShimmer_actionText_title__cXusB',
            };
        },
        70863: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        71985: (e) => {
            e.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        73547: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => c });
            var i = a(62936),
                l = a(44020),
                s = a(23480),
                r = a(90914),
                o = a(42561),
                n = a(85906);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        containerClassName: d,
                        headerClassName: c,
                        meta: m,
                        data: u,
                        headingVariant: _,
                        className: p,
                        ...g
                    } = e;
                    return (0, i.jsx)(n.OY, {
                        className: p,
                        ...g,
                        isShimmerVisible: a,
                        isShimmerActive: l,
                        headerClassName: c,
                        containerClassName: d,
                        title: m.title,
                        description: m.description,
                        viewAllActionLink: m.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children:
                            null == u
                                ? void 0
                                : u.items.map((e, t) =>
                                      (0, i.jsx)(
                                          o.Bki,
                                          {
                                              objectType: s.ky.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: u.items.length,
                                              children: (0, i.jsx)(r.aX, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                c = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        74351: (e, t, a) => {
            'use strict';
            a.d(t, { MixCard: () => p });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(8669),
                o = a(29042),
                n = a(13030),
                d = a(56721),
                c = a(20418),
                m = a(85906),
                u = a(52843),
                _ = a.n(u);
            let p = (0, s.PA)((e) => {
                let { className: t, title: a, weblink: s, covers: u = [], coverSize: p = 100, imagesLayoutType: g, headingVariant: v = 'h3' } = e;
                return (0, i.jsx)(m.N_, {
                    href: s,
                    ...(0, r.Am)(r.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        className: (0, l.$)(_().root, t),
                        radius: 'l',
                        children: [
                            (0, i.jsx)('div', {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: v,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, r.Am)(r.OA.mix.MIX_CARD_HEADER),
                                    children: a,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(_().covers, { [_().covers_radial]: g === o.R.RADIAL, [_().covers_stack]: g === o.R.STACK }),
                                ...(0, r.Am)(r.OA.mix.MIX_CARD_COVERS),
                                children: [
                                    (0, i.jsx)(n.Image, {
                                        src: u[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: p,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_3),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: p,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_2),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: p,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        74480: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        74525: (e) => {
            e.exports = {
                root: 'Special_root__FOrBZ',
                actions: 'Special_actions__XYuvB',
                textContainer: 'Special_textContainer__pN_TF',
                textColor: 'Special_textColor__dySbq',
                imageContainer: 'Special_imageContainer__V1_E3',
                image: 'Special_image__1sSXR',
                button: 'Special_button__j8gGH',
            };
        },
        74915: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        75380: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        75715: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        78724: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => g, k: () => p });
            var i = a(62936),
                l = a(79950),
                s = a(44020),
                r = a(23480),
                o = a(21153),
                n = a(32632),
                d = a(42561),
                c = a(60738),
                m = a.n(c);
            let u = (e) => {
                    let { forwardRef: t, items: a, itemClassName: s, containerClassName: c, ariaLabelledBy: u } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: c,
                        itemClassName: (0, l.$)(m().item, m().important, s),
                        'aria-labelledby': u,
                        children:
                            null == a
                                ? void 0
                                : a.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == a ? void 0 : a.length,
                                              children: (0, i.jsx)(n.xy, { vibe: e }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                _ = (e) => {
                    let { forwardRef: t, isActive: a, itemClassName: s, containerClassName: r, ariaLabelledBy: d, length: c } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: r,
                        itemClassName: (0, l.$)(m().item, m().important, s),
                        'aria-labelledby': d,
                        children: Array.from({ length: c }, (e, t) => (0, i.jsx)(n.Eb, { isActive: a }, t)),
                    });
                },
                p = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e })),
                g = (0, s.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        79101: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        79845: (e, t, a) => {
            'use strict';
            a.d(t, { useGenerativeActions: () => u });
            var i = a(62936),
                l = a(44020),
                s = a(47480),
                r = a(50502),
                o = a(27247),
                n = a(59935),
                d = a(32474),
                c = a(42561),
                m = a(85906);
            let u = () => {
                let {
                        sonataState: { entityMeta: e },
                        user: t,
                        fullscreenPlayer: a,
                    } = (0, c.Pjs)(),
                    u = (0, c.eGp)(),
                    { notify: _ } = (0, c.lkh)(),
                    { formatMessage: p } = (0, s.A)(),
                    [g, v] = (0, l.useState)(!1),
                    { state: b, handleDebouncedToggle: C, reset: A } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                    { state: T, handleDebouncedToggle: I, reset: h } = (0, d.F)({ delay: 1e4, throttleTimeout: 0 }),
                    L = (0, n.c)(() => {
                        A(), h();
                    });
                (0, l.useEffect)(() => {
                    (null == e ? void 0 : e.id) && L();
                }, [null == e ? void 0 : e.id, L]);
                let y = (0, n.c)(async (l) => {
                    if (g || !e || !u) return;
                    if (!t.isAuthorized) {
                        let e = a.modal.isOpened ? c.uQT.FULLSCREEN_ERROR : c.uQT.ERROR;
                        _((0, i.jsx)(m.hT, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                        return;
                    }
                    let s = u.getState(),
                        n = u.playbackController.getPlayback();
                    if (s && n && (0, r.S)(s.currentContext.value)) {
                        v(!0);
                        try {
                            switch (l) {
                                case o.Q.TimestampLike:
                                    h(), C();
                                    break;
                                case o.Q.TimestampDislike:
                                    A(), I();
                            }
                            let t = s.currentContext.value.restartsCount;
                            s.queueState.entityList.value.find((t) => {
                                var a, i;
                                let { entity: l } = t;
                                return (null == (i = l.data) || null == (a = i.meta) ? void 0 : a.id) === e.id;
                            }) && (await s.currentContext.value.sendFeedback(l, n)),
                                s.currentContext.value.restartsCount > t && L();
                        } catch (t) {
                            L();
                            let e = a.modal.isOpened ? c.uQT.FULLSCREEN_ERROR : c.uQT.ERROR;
                            _((0, i.jsx)(m.hT, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                        } finally {
                            v(!1);
                        }
                    }
                });
                return {
                    isGenerativeLiked: b,
                    isGenerativeDisliked: T,
                    onGenerativeLikeClick: (0, n.c)(() => y(o.Q.TimestampLike)),
                    onGenerativeDislikeClick: (0, n.c)(() => y(o.Q.TimestampDislike)),
                };
            };
        },
        81141: (e, t, a) => {
            'use strict';
            a.d(t, { fc: () => o, Gd: () => n.MapBlock, rI: () => d.ShimmerMapBlock, P5: () => i });
            let i = (e) => ({ title: e.title, lineColor: e['line-color'] });
            var l = a(51606);
            let s = l.gK.model('MapUrl', { imageUrl: l.gK.string, url: l.gK.string }),
                r = l.gK.model('MetroStation', { title: l.gK.string, lineColor: l.gK.string }),
                o = l.gK
                    .model('BaseMap', {
                        place: l.gK.string,
                        city: l.gK.string,
                        address: l.gK.string,
                        metroStations: l.gK.maybeNull(l.gK.array(r)),
                        map: l.gK.maybeNull(s),
                    })
                    .views((e) => ({
                        get groupedMetroStations() {
                            if (!e.metroStations) return [];
                            let t = new Map();
                            return (
                                e.metroStations.forEach((e) => {
                                    let a = t.get(e.title);
                                    a || ((a = new Set()), t.set(e.title, a)), a.add(e.lineColor);
                                }),
                                Array.from(t.entries()).map((e) => {
                                    let [t, a] = e;
                                    return { title: t, colors: Array.from(a) };
                                })
                            );
                        },
                    }));
            var n = a(65185),
                d = a(87395);
        },
        83505: (e) => {
            e.exports = {
                root: 'Vibes_root__Bk6PF',
                controls: 'Vibes_controls__bUp2H',
                header: 'Vibes_header__RcW5b',
                important: 'Vibes_important__Vew_4',
                tab: 'Vibes_tab__uOfqW',
                tabShimmer: 'Vibes_tabShimmer__hjehH',
                tabCarousel: 'Vibes_tabCarousel__bSvp0',
            };
        },
        83708: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        85673: (e) => {
            e.exports = {
                root: 'LikesAndHistoryItem_root__oI1gk',
                link: 'LikesAndHistoryItem_link__snTl_',
                start: 'LikesAndHistoryItem_start__wdtiV',
                textContainer: 'LikesAndHistoryItem_textContainer__yGdOu',
                titleIcon: 'LikesAndHistoryItem_titleIcon__2D_yS',
                title: 'LikesAndHistoryItem_title__hdi2H',
                subtitle: 'LikesAndHistoryItem_subtitle__ghuKi',
                covers: 'LikesAndHistoryItem_covers__9k_yw',
                coverContainer: 'LikesAndHistoryItem_coverContainer__fwXXJ',
                cover: 'LikesAndHistoryItem_cover__QlRhz',
            };
        },
        85845: (e, t, a) => {
            'use strict';
            a.d(t, { ClipCard: () => y });
            var i = a(62936),
                l = a(79950),
                s = a(19992),
                r = a(19718),
                o = a(44020),
                n = a(47480),
                d = a(33878),
                c = a(8669),
                m = a(81959),
                u = a(59935),
                _ = a(16258),
                p = a(13030),
                g = a(56721),
                v = a(20418),
                b = a(81628),
                C = a(25099),
                A = a(42561),
                T = a(85906),
                I = a(10945),
                h = a(89131),
                L = a.n(h);
            let y = (0, r.PA)((e) => {
                var t;
                let {
                        titleClassName: a,
                        artistLinkClassName: r,
                        clip: h,
                        withVideo: y = !0,
                        artistIdWithoutLink: S,
                        viewUuid: N,
                        shouldOpenModalOnCardClick: E = !0,
                    } = e,
                    { fullscreenVideoPlayer: x } = (0, A.Pjs)(),
                    { formatMessage: j } = (0, n.A)(),
                    k = (0, C.Cc)(),
                    { from: R } = (0, A.fyy)({ pageId: A._Q$.VIDEO_PLAYER, contextId: x.state.contextId, contextType: m.K.Various, blockId: A.UfI.CLIPS }),
                    f = (0, A.PMf)(null != (t = h.duration) ? t : 0),
                    P = (0, C.Mn)(N),
                    w = (0, C._7)(N),
                    { ref: K, intersectionPropertyId: O } = (0, A.nMI)({ callback: P }),
                    M = (0, o.useRef)(null),
                    D = y && h.previewUrl,
                    B = (0, u.c)(() => {
                        M.current && ((M.current.currentTime = 0), M.current.play());
                    }),
                    V = (0, o.useMemo)(() => (0, s.A)(B, 500), [B]),
                    U = (0, u.c)(() => {
                        var e;
                        null == (e = M.current) || e.pause();
                    }),
                    G = (0, o.useMemo)(() => x.ids.indexOf(h.clipId), [x, h.clipId]),
                    { isPlaying: Y, togglePlay: W } = (0, A.Dx4)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: A.H7u.VARIOUS_CLIP_CONTEXT }, from: R },
                            queueParams: { index: G },
                            entitiesData: x.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(h.clipId),
                        sonataState: x.state,
                        playbackId: A.V_r.CLIP,
                    }),
                    X = E ? h.url : (0, C.JL)(x.ids, G),
                    F = (0, u.c)(() => {
                        E ? (k([h.clipId]), w()) : Y || W();
                    }),
                    z = (0, I.useClipDisclaimer)({ clip: h, callback: F }),
                    H = j({ id: 'entity-names.clip-name' }, { clipName: h.title }),
                    $ = (0, o.useMemo)(
                        () =>
                            h.isAvailable
                                ? (0, i.jsxs)(g.Paper, {
                                      radius: 'm',
                                      className: (0, l.$)(L().view, L().cover),
                                      onMouseEnter: V,
                                      onMouseLeave: U,
                                      onClick: z,
                                      children: [
                                          D &&
                                              (0, i.jsx)('video', {
                                                  className: L().media,
                                                  ref: M,
                                                  poster: h.thumbnail && (0, d.createAvatarVideoUrl)(h.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: h.previewUrl, type: 'video/mp4' }),
                                              }),
                                          h.thumbnail &&
                                              (0, i.jsx)(p.Image, {
                                                  className: L().image,
                                                  'aria-hidden': !0,
                                                  src: h.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.createAvatarVideoUrl,
                                              }),
                                          void 0 !== h.duration &&
                                              (0, i.jsx)(v.Caption, {
                                                  role: 'text',
                                                  'aria-label': f,
                                                  variant: 'span',
                                                  className: L().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, A.E4p)(h.duration, h.duration) }),
                                              }),
                                          (0, i.jsx)(T.DM, { variant: 'filled', className: L().playButton, onClick: z, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(g.Paper, {
                                      radius: 'm',
                                      className: L().unavailableCover,
                                      children: (0, i.jsx)(p.FallbackImage, {
                                          className: L().image,
                                          iconVariant: 'unavailable',
                                          ...(0, c.Am)(c.S7.ENTITY_COVER_FALLBACK_IMAGE),
                                      }),
                                  }),
                        [f, h.isAvailable, h.thumbnail, h.previewUrl, h.duration, V, U, z, D],
                    ),
                    Q = (0, o.useMemo)(
                        () =>
                            h.hasArtists
                                ? (0, i.jsx)(
                                      b.iQ,
                                      { linkClassName: (0, l.$)(L().artistLink, r), artists: h.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: S },
                                      h.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [S, h, r],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: K,
                    className: L().root,
                    explicitMarkComponent:
                        h.explicitDisclaimer &&
                        (0, i.jsx)(T.Nq, { getDescriptionTexts: h.getDescriptionTexts, variant: h.explicitDisclaimer, size: 'xxs' }, h.getKey('ExplicitMarkIcon')),
                    'aria-label': H,
                    srTitle: (0, i.jsx)(T.N_, { href: X, onClick: z, children: H }),
                    title: (0, i.jsxs)(
                        v.Caption,
                        {
                            className: (0, l.$)(L().title, a),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: [
                                (0, i.jsx)(T.N_, {
                                    className: L().titleLink,
                                    href: X,
                                    'aria-label': H,
                                    onClick: z,
                                    ...(0, c.Am)(c.Kq.clip.CLIP_META_TITLE),
                                    children: h.title,
                                }),
                                h.version && (0, i.jsx)(v.Caption, { className: L().version, variant: 'span', children: ' '.concat(h.version) }),
                            ],
                        },
                        h.getKey('Title'),
                    ),
                    'data-intersection-property-id': O,
                    view: $,
                    description: Q,
                    ...(0, c.Am)(c.Kq.clip.CLIP_CARD),
                });
            });
        },
        86242: (e) => {
            e.exports = {
                root: 'Skeleton_root__ANDaF',
                upperBlocks: 'Skeleton_upperBlocks__zI__5',
                tab: 'Skeleton_tab__Jn6By',
                tabPanel: 'Skeleton_tabPanel__Ke42U',
                tabCarousel: 'Skeleton_tabCarousel__E2kLf',
                important: 'Skeleton_important__ob12_',
                header: 'Skeleton_header__Ir5f4',
                stickyTabs: 'Skeleton_stickyTabs__I_uuk',
            };
        },
        87131: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        87395: (e, t, a) => {
            'use strict';
            a.d(t, { ShimmerMapBlock: () => n });
            var i = a(62936),
                l = a(19718),
                s = a(30388),
                r = a(26751),
                o = a.n(r);
            let n = (0, l.PA)((e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: o().root,
                    children: [
                        (0, i.jsx)(s.Shimmer, { className: o().heading, radius: 's', isActive: t }),
                        (0, i.jsx)(s.Shimmer, { className: o().mapImage, radius: 's', isActive: t }),
                        (0, i.jsx)(s.Shimmer, { className: o().address, radius: 's', isActive: t }),
                        (0, i.jsx)(s.Shimmer, { className: o().metroStations, radius: 's', isActive: t }),
                    ],
                });
            });
        },
        87413: (e, t, a) => {
            'use strict';
            a.d(t, { BlockEntities: () => h });
            var i = a(62936),
                l = a(79950),
                s = a(19718),
                r = a(44020),
                o = a(47480),
                n = a(8669),
                d = a(63854),
                c = a(92496),
                m = a(14501),
                u = a(20418),
                _ = a(90914),
                p = a(11334),
                g = a(92229),
                v = a(79670),
                b = a(26427),
                C = a(42561),
                A = a(85906),
                T = a(71985),
                I = a.n(T);
            let h = (0, s.PA)((e) => {
                let { blockId: t, blockType: a } = e,
                    { landingBlockEntities: s } = (0, C.Pjs)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: h, setContentScrollRef: L } = (0, C.gKY)(),
                    y = (0, C.W6M)(),
                    S = (0, r.useMemo)(() => {
                        if (s.isLoading) {
                            let e = T({ id: 'loading-messages.content-is-loading' }),
                                t = [d.t.COLLECTION_ARTISTS, d.t.COLLECTION_ARTISTS_AND_TOP, d.t.PERSONAL_ARTISTS, d.t.NEW_STARS_ARTISTS, d.t.EDITORIAL_ARTISTS].includes(
                                    a,
                                ),
                                s = a === d.t.MIXES_GRID;
                            return (0, i.jsx)(A.eI, {
                                itemClassName: (0, l.$)({ [I().shimmerWithSubcover]: s }),
                                withSubcover: s,
                                isActive: !0,
                                'aria-label': e,
                                centered: t || s,
                                round: t,
                            });
                        }
                        return s.items.map((e) => {
                            switch (e.type) {
                                case c._.MIX_CARD_ITEM:
                                    return (0, i.jsx)(b.Vf, { title: e.data.title, weblink: e.data.weblink, covers: e.data.covers }, e.data.id);
                                case c._.ALBUM_ITEM:
                                    return (0, i.jsx)(_.aX, { album: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.CHART_ALBUM_ITEM:
                                case c._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, i.jsx)(_.aX, { withChart: !0, withLikesCount: !0, album: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.ARTIST_ITEM:
                                    return (0, i.jsx)(p.ao, { artist: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.PLAYLIST_ITEM:
                                    return (0, i.jsx)(v.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                                case c._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, i.jsx)(
                                        v.B6,
                                        { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 },
                                        e.data.playlist.key,
                                    );
                                case c._.LIKED_PLAYLIST_ITEM:
                                    return (0, i.jsx)(v.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                            }
                        });
                    }, [a, s.isLoading, s.items, T]);
                return (
                    t && s.isNeededToLoad && (0, r.use)(s.getData({ blockId: t })),
                    (0, i.jsx)(g.hO, {
                        scrollElement: h,
                        outerTitle: s.title,
                        children: (0, i.jsxs)('div', {
                            className: I().root,
                            children: [
                                (0, i.jsx)(A.Y9, {
                                    variant: A.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: y.canBack,
                                    children: (0, i.jsx)(u.Heading, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: s.title,
                                    }),
                                }),
                                (0, i.jsx)(m.N, {
                                    ref: L,
                                    className: I().scrollableContent,
                                    containerClassName: I().scrollableContainer,
                                    ...(0, n.Am)(n.e8.landing.BLOCK_ENTITY_PAGE),
                                    children: (0, i.jsxs)('div', {
                                        className: I().container,
                                        children: [
                                            (0, i.jsx)('div', { className: I().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: S }),
                                            (0, i.jsx)(A.A, { children: (0, i.jsx)(A.wi, { className: I().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        88579: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { z: () => i }),
                (function (e) {
                    (e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
                })(i || (i = {}));
        },
        89131: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ClipCard_root__kzWjg',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                cover: 'ClipCard_cover__ztEok',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        89637: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        90061: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        93366: (e) => {
            e.exports = {
                root: 'AlbumPromoCard_root__dAUet',
                artistImage: 'AlbumPromoCard_artistImage__fWVxn',
                artistImage_withTopPosition: 'AlbumPromoCard_artistImage_withTopPosition__tRrcO',
                artistCover: 'AlbumPromoCard_artistCover__Gfhab',
                albumCover: 'AlbumPromoCard_albumCover__QYYKH',
                button: 'AlbumPromoCard_button__mpQr6',
                buttonIcon: 'AlbumPromoCard_buttonIcon__WredC',
                buttonText: 'AlbumPromoCard_buttonText__pI3Ot',
                albumImage: 'AlbumPromoCard_albumImage__v8021',
                albumLink: 'AlbumPromoCard_albumLink__dnGvR',
                artistLink: 'AlbumPromoCard_artistLink__AD9__',
                title: 'AlbumPromoCard_title__uzmho',
                titleLink: 'AlbumPromoCard_titleLink__4DLNk',
                titleContainer: 'AlbumPromoCard_titleContainer__f1k8Y',
                artists: 'AlbumPromoCard_artists__UYpyB',
                artistsLink: 'AlbumPromoCard_artistsLink__8gTlH',
            };
        },
        94667: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        94891: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__WYRFP',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__HBKka',
                subTitle: 'ArtistPick_subTitle__5SJFj',
                text: 'ArtistPick_text__sIhNG',
                smallCoverContainer: 'ArtistPick_smallCoverContainer__iBgJu',
                cover: 'ArtistPick_cover__9utVr',
                smallCover: 'ArtistPick_smallCover__6NSnL',
                shimmerCover: 'ArtistPick_shimmerCover__HIauy',
            };
        },
        95235: (e) => {
            e.exports = {
                root: 'NewReleaseCard_root__IY5m_',
                ripple: 'NewReleaseCard_ripple__VoybZ',
                image: 'NewReleaseCard_image__oxm2S',
                info: 'NewReleaseCard_info__rcfoY',
                type: 'NewReleaseCard_type__cW58D',
                title: 'NewReleaseCard_title__N5soS',
                description: 'NewReleaseCard_description__Daz5q',
                container: 'NewReleaseCard_container__XvwZC',
                explicitMark: 'NewReleaseCard_explicitMark__isgxE',
                explicitMarkContainer: 'NewReleaseCard_explicitMarkContainer__QHRoH',
                button: 'NewReleaseCard_button__WPk82',
                paperLink: 'NewReleaseCard_paperLink__NN_8o',
            };
        },
        96579: (e, t, a) => {
            'use strict';
            a.d(t, { EntitiesCarousel: () => g });
            var i = a(62936),
                l = a(19718),
                s = a(44020),
                r = a(23480),
                o = a(92496),
                n = a(90914),
                d = a(11334),
                c = a(79670),
                m = a(32632),
                u = a(42561),
                _ = a(85906);
            let p = (0, l.PA)((e) => {
                    var t;
                    let {
                            forwardRef: a,
                            isShimmerVisible: l,
                            isShimmerActive: p,
                            containerClassName: g,
                            headerClassName: v,
                            meta: b,
                            data: C,
                            headingVariant: A,
                            className: T,
                            isLoaded: I,
                            shouldSendAnalyticsOnLoaded: h,
                            hasSentAnalyticsOnLoaded: L,
                            setHasSentAnalyticsOnLoaded: y,
                            ...S
                        } = e,
                        N = (0, u.fBs)();
                    return (
                        (0, s.useEffect)(() => {
                            h && !L && I && (N(), y(!0));
                        }, [L, I, N, y, h]),
                        (0, i.jsx)(_.OY, {
                            className: T,
                            ...S,
                            isShimmerVisible: l,
                            isShimmerActive: p,
                            containerClassName: g,
                            headerClassName: v,
                            title: b.title,
                            description: b.description,
                            viewAllActionLink: b.viewAllActionLink,
                            ref: a,
                            headingVariant: A,
                            children:
                                null == C || null == (t = C.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case o._.LIKED_PLAYLIST_ITEM:
                                                  return (0, i.jsx)(
                                                      u.Bki,
                                                      {
                                                          objectType: r.ky.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: C.items.length,
                                                          children: (0, i.jsx)(c.B6, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case o._.ALBUM_ITEM:
                                                  return (0, i.jsx)(
                                                      u.Bki,
                                                      {
                                                          objectType: r.ky.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: C.items.length,
                                                          children: (0, i.jsx)(n.aX, { album: e.data, contentLinesCount: 3, releaseDateFormatter: u.mtR }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.ARTIST_ITEM:
                                                  return (0, i.jsx)(
                                                      u.Bki,
                                                      {
                                                          objectType: r.ky.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: C.items.length,
                                                          children: (0, i.jsx)(d.ao, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.WAVE_AGENT_ITEM:
                                                  return (0, i.jsx)(
                                                      u.Bki,
                                                      {
                                                          objectType: r.ky.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: C.items.length,
                                                          children: (0, i.jsx)(m.yi, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case o._.QUERY_TO_VIBE_ITEM:
                                                  return (0, i.jsx)(s.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                g = (0, s.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        97762: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        99099: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        99336: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
    },
]);
