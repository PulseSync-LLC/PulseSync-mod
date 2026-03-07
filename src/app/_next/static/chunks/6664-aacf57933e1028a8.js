(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6664],
    {
        1316: (e) => {
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
        2885: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        3095: (e, t, a) => {
            'use strict';
            a.d(t, { Vf: () => n.MixesGridMixCard, bv: () => o, rc: () => l });
            var i = a(93064),
                s = a(83252);
            let l = (e) => (0, i.wg)({ id: e.id, title: e.title, weblink: e.action.weblink, covers: e.covers.map(s.pX4) });
            var r = a(26433);
            let o = i.gK.model('MixesGridMixCardItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.maybeNull(i.gK.string),
                covers: i.gK.maybeNull(i.gK.array(r.$B)),
            });
            var n = a(27574);
        },
        3892: (e) => {
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
        4111: (e, t, a) => {
            'use strict';
            a.d(t, { BlockEntities: () => h });
            var i = a(54486),
                s = a(50420),
                l = a(28303),
                r = a(61910),
                o = a(43426),
                n = a(31500),
                d = a(35620),
                c = a(60049),
                m = a(56231),
                u = a(97800),
                _ = a(80156),
                g = a(55616),
                p = a(33276),
                b = a(83909),
                v = a(3095),
                A = a(83252),
                C = a(80585),
                T = a(13991),
                I = a.n(T);
            let h = (0, l.PA)((e) => {
                let { blockId: t, blockType: a } = e,
                    { landingBlockEntities: l } = (0, A.Pjs)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: h, setContentScrollRef: L } = (0, A.gKY)(),
                    y = (0, A.W6M)(),
                    S = (0, r.useMemo)(() => {
                        if (l.isLoading) {
                            let e = T({ id: 'loading-messages.content-is-loading' }),
                                t = [d.t.COLLECTION_ARTISTS, d.t.COLLECTION_ARTISTS_AND_TOP, d.t.PERSONAL_ARTISTS, d.t.NEW_STARS_ARTISTS, d.t.EDITORIAL_ARTISTS].includes(
                                    a,
                                ),
                                l = a === d.t.MIXES_GRID;
                            return (0, i.jsx)(C.eI, {
                                itemClassName: (0, s.$)({ [I().shimmerWithSubcover]: l }),
                                withSubcover: l,
                                isActive: !0,
                                'aria-label': e,
                                centered: t || l,
                                round: t,
                            });
                        }
                        return l.items.map((e) => {
                            switch (e.type) {
                                case c._.MIX_CARD_ITEM:
                                    return (0, i.jsx)(v.Vf, { title: e.data.title, weblink: e.data.weblink, covers: e.data.covers }, e.data.id);
                                case c._.ALBUM_ITEM:
                                    return (0, i.jsx)(_.aX, { album: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.CHART_ALBUM_ITEM:
                                case c._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, i.jsx)(_.aX, { withChart: !0, withLikesCount: !0, album: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.ARTIST_ITEM:
                                    return (0, i.jsx)(g.ao, { artist: e.data, contentLinesCount: 3 }, e.data.id);
                                case c._.PLAYLIST_ITEM:
                                    return (0, i.jsx)(b.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                                case c._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, i.jsx)(
                                        b.B6,
                                        { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 },
                                        e.data.playlist.key,
                                    );
                                case c._.LIKED_PLAYLIST_ITEM:
                                    return (0, i.jsx)(b.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                            }
                        });
                    }, [a, l.isLoading, l.items, T]);
                return (
                    t && l.isNeededToLoad && (0, r.use)(l.getData({ blockId: t })),
                    (0, i.jsx)(p.hO, {
                        scrollElement: h,
                        outerTitle: l.title,
                        children: (0, i.jsxs)('div', {
                            className: I().root,
                            children: [
                                (0, i.jsx)(C.Y9, {
                                    variant: C.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: y.canBack,
                                    children: (0, i.jsx)(u.Heading, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: l.title,
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
                                            (0, i.jsx)(C.A, { children: (0, i.jsx)(C.wi, { className: I().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        4319: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        6664: (e, t, a) => {
            'use strict';
            a.d(t, {
                bX: () => az.BlockEntities,
                Qh: () => aY.EntitiesCarousel,
                F6: () => w,
                RO: () => S,
                hn: () => ee,
                SQ: () => h,
                Ju: () => aU,
                h9: () => V,
                Od: () => U,
                qh: () => aG.MixesGridBlock,
                zt: () => aW.S,
                tl: () => aX.t,
                nM: () => aF.Promotions,
                fv: () => M,
                g0: () => aH.g,
                EA: () => a$.Skeleton,
                Rj: () => aq.R,
                Ds: () => b,
                _9: () => l,
                dF: () => _,
                vj: () => C,
                vI: () => I,
            });
            var i,
                s = a(35620);
            let l = (e) => {
                var t, a, i, l;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks) ? void 0 : t.length) === 1 &&
                    (null == (l = e.tabs.data[0]) || null == (i = l.blocks[0]) ? void 0 : i.type) === s.t.WIZARD
                );
            };
            var r = a(93064),
                o = a(60049),
                n = a(80156);
            let d = (e, t, a, i) => ({ type: o._.ALBUM_ITEM, data: (0, n.sK)({ album: e, artists: t, trailer: a, releaseDate: i }) });
            var c = a(63695);
            let m = (e, t) => ({ type: o._.ARTIST_ITEM, data: (0, c.as)({ artist: e, trailer: t }) });
            var u = a(83909);
            let _ = (e) => {
                let { playlist: t, likesCount: a, trailer: i, tracksCount: s } = e;
                return { type: o._.LIKED_PLAYLIST_ITEM, data: (0, u.bk)({ playlist: t, likesCount: a, trailer: i, tracksCount: s }) };
            };
            var g = a(76866);
            let p = (e) => (0, r.wg)({ type: o._.WAVE_AGENT_ITEM, data: (0, g.lb)(e.data.wave, e.data.agent) }),
                b = (e) => {
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
                                          return p(e);
                                  }
                              });
                    return (0, r.wg)({ items: a });
                };
            var v = a(65779);
            let A = (e) => ({ type: e.type, data: (0, v.SZ)({ clip: e.data.clip, artists: e.data.artists }) }),
                C = (e) => {
                    let { album: t, artists: a, likesCount: i, bookmateOptionRequired: s } = e;
                    return { type: o._.NON_MUSIC_ALBUM_ITEM, data: (0, n.sK)({ album: t, likesCount: i, bookmateOptionRequired: s, artists: a }) };
                };
            var T = a(21365);
            let I = (e) => ({ type: o._.TRACK_ITEM, data: (0, T.vU)(e.data.track) });
            var h = (function (e) {
                    return (e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), (e.OUTDATED = 'OUTDATED'), e;
                })({}),
                L = a(17390);
            let y = (e) => {
                    let { showPolicy: t, isNeededToLoad: a, isLoading: i, isLoaded: s, isRejected: l, isNotEmpty: r, isOutdated: o, isNeededToHide: n } = e;
                    if (n) return !1;
                    switch (t) {
                        case L.E.SHOW_AND_LOAD:
                            if (i || l || a) return !0;
                            return r;
                        case L.E.LOAD_AND_SHOW:
                            return (s && r) || !!o;
                        default:
                            return !0;
                    }
                },
                S = r.gK.model('LandingAlbumItem', { type: r.gK.literal(o._.ALBUM_ITEM), data: n.JC }),
                E = r.gK.model('LandingArtistItem', { type: r.gK.literal(o._.ARTIST_ITEM), data: c.PK }),
                N = r.gK.model('LandingLikedPlaylistItem', { type: r.gK.literal(o._.LIKED_PLAYLIST_ITEM), data: u.IP }),
                j = r.gK.model('LandingVibeAgentItem', { type: r.gK.literal(o._.WAVE_AGENT_ITEM), data: g.Gh }),
                x = r.gK
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
                f = r.gK.union(N, S, E, j),
                P = r.gK.model('EntitiesCarouselData', { items: r.gK.array(f) }),
                w = x
                    .props({
                        type: r.gK.union(
                            r.gK.literal(s.t.NEW_PLAYLISTS),
                            r.gK.literal(s.t.EDITORIAL_COMPILATION),
                            r.gK.literal(s.t.RECOMMENDED_PLAYLISTS),
                            r.gK.literal(s.t.META_TAG_POPULAR_PLAYLISTS),
                            r.gK.literal(s.t.META_TAG_NEW_ALBUMS),
                            r.gK.literal(s.t.META_TAG_PLAYLISTS),
                            r.gK.literal(s.t.MICRO_GENRE_ALBUMS),
                            r.gK.literal(s.t.META_TAG_ALBUMS),
                            r.gK.literal(s.t.ARTIST_PLAYLISTS),
                            r.gK.literal(s.t.ARTIST_ALBUMS),
                            r.gK.literal(s.t.ARTIST_COMPILATIONS),
                            r.gK.literal(s.t.ARTIST_STUDIO_ALBUMS),
                            r.gK.literal(s.t.ARTIST_SIMILAR_ENTITIES),
                            r.gK.literal(s.t.COLLECTION_SIMILAR_ENTITIES),
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
                O = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.CHART_ALBUMS), r.gK.literal(s.t.PODCASTS_CHART_ALBUMS)), data: r.gK.maybe(K), meta: R })
                    .named('NonMusicChartAlbum')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                M = r.gK.model('PromotionsDataItem', { featureId: r.gK.string, title: r.gK.string, subtitle: r.gK.string, weblink: r.gK.string, imageUrl: r.gK.string }),
                D = r.gK.model('PromotionsData', { items: r.gK.array(M) }),
                B = x
                    .props({
                        type: r.gK.union(r.gK.literal(s.t.PROMOTIONS), r.gK.literal(s.t.EDITORIAL_PROMOTIONS), r.gK.literal(s.t.NON_MUSIC_PROMOTIONS)),
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
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                V = r.gK.model('LandingNonMusicAlbumItem', { type: r.gK.literal(o._.NON_MUSIC_ALBUM_ITEM), data: n.JC }),
                U = r.gK.model('LandingPlaylistItem', { type: r.gK.literal(o._.PLAYLIST_ITEM), data: u.IP }),
                Y = r.gK.model('LandingTrackItem', { type: r.gK.literal(o._.TRACK_ITEM), data: T.vj });
            var G = a(83252),
                W = a(26433),
                X = a(3095);
            let F = (e) => ({
                    type: o._.PERSONAL_PLAYLIST_ITEM,
                    data: {
                        playlist: (0, u.bk)({ playlist: e.data.playlist, trailer: e.data.trailer }),
                        playlistType: e.data.playlistType,
                        description: e.data.description,
                    },
                }),
                H = (e, t) => ({ type: o._.PLAYLIST_ITEM, data: (0, u.bk)({ playlist: e, trailer: t }) }),
                z = (e) => {
                    switch (e.type) {
                        case o._.MIX_CARD_ITEM:
                            return (0, r.wg)({ type: o._.MIX_CARD_ITEM, data: (0, X.rc)(e.data) });
                        case o._.NON_MUSIC_ALBUM_ITEM:
                            return C({ album: e.data.album, likesCount: e.data.likesCount, bookmateOptionRequired: e.data.bookmateOptionRequired });
                        case o._.ALBUM_ITEM:
                            return d(e.data.album, e.data.artists, e.data.trailer);
                        case o._.CHART_ALBUM_ITEM:
                            let t, a, i, s;
                            return (
                                (t = e.data.album),
                                (a = e.data.chart),
                                (i = e.data.likesCount),
                                (s = e.data.trailer),
                                { type: o._.CHART_ALBUM_ITEM, data: (0, n.sK)({ album: t, chart: a, likesCount: i, trailer: s }) }
                            );
                        case o._.ARTIST_ITEM:
                            return m(e.data.artist, e.data.trailer);
                        case o._.PLAYLIST_ITEM:
                            return H(e.data.playlist, e.data.trailer);
                        case o._.PERSONAL_PLAYLIST_ITEM:
                            return F(e);
                        case o._.LIKED_PLAYLIST_ITEM:
                            return _({ playlist: e.data.playlist, likesCount: e.data.likesCount, trailer: e.data.trailer });
                    }
                },
                $ = r.gK.model('LandingChartAlbumItem', { type: r.gK.literal(o._.CHART_ALBUM_ITEM), data: n.JC }),
                q = r.gK.model('LandingMixCardItemModel', { type: r.gK.literal(o._.MIX_CARD_ITEM), data: X.bv }),
                J = r.gK.model('LandingPersonalPlaylistItem', { playlist: u.IP, playlistType: r.gK.string, description: r.gK.maybe(r.gK.string) }),
                Z = r.gK.model('LandingPersonalPlaylistItem', { type: r.gK.literal(o._.PERSONAL_PLAYLIST_ITEM), data: J }),
                Q = r.gK.union(S, E, U, Z, N, $, V, q),
                ee = r.gK
                    .compose(r.gK.model('LandingBlockEntities', { title: r.gK.maybeNull(r.gK.string), items: r.gK.array(Q) }), W.XT)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === G.GuX.PENDING;
                        },
                        get isNotFound() {
                            return e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* (t) {
                            let { blockId: a } = t,
                                { landingResource: i, modelActionsLogger: s } = (0, r._$)(e);
                            if (e.loadingState !== G.GuX.PENDING)
                                try {
                                    e.loadingState = G.GuX.PENDING;
                                    let t = yield i.getBlockEntities({ blockId: a, page: 0, pageSize: 100 });
                                    (e.title = t.title), (e.items = (0, r.wg)(t.items.map(z))), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.RESOLVE);
                                } catch (t) {
                                    s.error(t), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = G.GuX.IDLE), (e.items = (0, r.wg)([])), (e.title = null);
                        },
                    }));
            var et = a(14287);
            let ea = [s.t.COLLECTION_FAVOURITE_PLAYLIST],
                ei = (e) => ea.includes(e);
            var es = a(72107);
            let el = [s.t.COLLECTION_DOWNLOADED_TRACKS];
            var er = a(77217);
            !(function (e) {
                (e.RADIO = 'radio'), (e.PROMOTIONS = 'promotions'), (e.EDITORIAL_PLAYLISTS = 'editorial-playlists'), (e.PLAYLIST_WITH_TRACKS = 'playlist-with-tracks');
            })(i || (i = {}));
            let eo = (e) => !!(e && 'object' == typeof e && e[0] && 'owner' in e[0].data);
            var en = a(15099),
                ed = a(93729),
                ec = a(73975);
            let em = (e) => e.every((e) => Object.values(ec.M).includes(e)),
                eu = (e) => {
                    var t, a, i;
                    let s = (0, c.FA)(e.decomposed),
                        l = e.disclaimers && em(e.disclaimers) ? e.disclaimers : void 0;
                    return (0, r.wg)({
                        id: String(e.id),
                        name: null != (a = e.name) ? a : '',
                        various: e.various,
                        isAvailable: null == (i = e.available) || i,
                        isComposer: e.composer,
                        coverUri: null == (t = e.cover) ? void 0 : t.uri,
                        decomposed: s,
                        disclaimers: l,
                    });
                };
            var e_ = a(52733);
            let eg = (e) => {
                    switch (e.type) {
                        case o._.ALBUM_ITEM:
                            return d(e.data.album, e.data.artists, e.data.trailer);
                        case o._.PRESAVED_ALBUM_ITEM:
                            return ((e) => {
                                var t;
                                let { album: a, artists: i, releaseDate: s, millisecondsUntilRelease: l, presaveDate: r } = e.data || {};
                                return {
                                    type: o._.PRESAVED_ALBUM_ITEM,
                                    data: (0, n.lO)({
                                        ...a,
                                        artists: i,
                                        releaseDate: s,
                                        millisecondsUntilRelease: l,
                                        presaveDate: r,
                                        coverUri: null == (t = a.cover) ? void 0 : t.uri,
                                    }),
                                };
                            })(e);
                    }
                },
                ep = (e) =>
                    (0, r.wg)({
                        type: o._.MENU_ITEM,
                        data: { title: e.data.title, viewAllActionLink: e.data.viewAllAction.weblink, cover: e.data.cover ? (0, G.pX4)(e.data.cover) : void 0 },
                    });
            var eb = a(42140);
            let ev = (e) => 'object' == typeof e && null !== e && 'type' in e && e.type === s.t.TABS,
                eA = (e) => Object.values(s.t).includes(e),
                eC = r.gK.model('ArtistPopularTracksData', { items: r.gK.array(T.vj) }),
                eT = x
                    .props({ type: r.gK.literal(s.t.ARTIST_POPULAR_TRACKS), data: r.gK.maybe(eC), meta: R })
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
                eh = x
                    .props({ type: r.gK.literal(s.t.ARTIST_RELEASE), data: r.gK.maybe(eI), meta: R })
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
                ey = x
                    .props({ type: r.gK.literal(s.t.ARTIST_UPCOMING_RELEASE), data: r.gK.maybe(eL), meta: R })
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
            var eS = a(46758),
                eE = a(97774);
            let eN = (e) => ({
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
                                          ...(0, eE.t)(e),
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
                ej = r.gK.model('ArtistPickData', { playlist: e_.$o, artists: r.gK.array(c.PK) }),
                ex = x
                    .props({ type: r.gK.literal(s.t.ARTIST_PICK), data: r.gK.maybe(ej), meta: R })
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
                                    let { href: t } = (0, G.uvd)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: G.JCK.COLLECTION } });
                                    return t;
                                }
                                if (t.hasVibeEntities) {
                                    let { href: t } = (0, G.uvd)('/artist/:artistId/familiar', { params: { artistId: e }, query: { tab: G.JCK.VIBE } });
                                    return t;
                                }
                                let { href: a } = (0, G.uvd)('/artist/:artistId/familiar', { params: { artistId: e } });
                                return a;
                            },
                        };
                        return t;
                    }),
                eR = x
                    .props({ type: r.gK.literal(s.t.FAMILIAR_YOU), data: r.gK.maybe(ek), meta: R })
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
                    let t = eN(e);
                    if ((0, es.Q)(t) && ((e) => !!(e && 'object' == typeof e && 'blocks' in e))(e.data))
                        switch (t.type) {
                            case s.t.ARTIST_POPULAR_TRACKS_AND_RELEASES:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = eN(t);
                                                  return (eT.is(a) || eh.is(a) || ey.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, r.wg)({ blocks: a });
                                })(e.data);
                                break;
                            case s.t.FAMILIAR_YOU_AND_ARTIST_PICK:
                                t.data = ((e) => {
                                    var t;
                                    let a =
                                        null == (t = e.blocks)
                                            ? void 0
                                            : t.reduce((e, t) => {
                                                  let a = eN(t);
                                                  return (eR.is(a) || ex.is(a)) && e.push(a), e;
                                              }, []);
                                    return (0, r.wg)({ blocks: a });
                                })(e.data);
                        }
                    return t;
                },
                eP = (e) => (0, r.wg)({ meta: { id: e.id, title: e.title }, shouldReloadNotification: !1, blocks: e.blocks.filter((e) => eA(e.type)).map(ef) }),
                ew = (e) => {
                    let t = [],
                        a = null;
                    for (let i of e) ev(i) ? (a = i) : t.push(i);
                    return ((e) => {
                        let { tabData: t, upperBlocks: a } = e,
                            i = { loadingState: G.GuX.IDLE, isLoading: !0 };
                        return (
                            t && ((i.meta = { selectedTabIndex: t.selectedTabIndex, source: t.source }), (i.tabs = { loadingState: G.GuX.IDLE, data: t.tabs.map(eP) })),
                            a && (i.upperBlocks = a.filter((e) => eA(e.type)).map(ef)),
                            (0, r.wg)(i)
                        );
                    })({ tabData: null == a ? void 0 : a.data, upperBlocks: t });
                };
            var eK = a(61715);
            let eO = (e) => ({ uri: e.uri, color: e.color });
            var eM = a(7981);
            let eD = (e) => {
                var t;
                let { data: a } = e;
                return (0, r.wg)({ type: o._.DONATION_ITEM, data: (0, eM.GT)({ url: a.tipUrl, artist: a.artist, goal: null == (t = a.goal) ? void 0 : t.title }) });
            };
            var eB = a(27906),
                eV = a(34960);
            let eU = (e) =>
                    (0, r.wg)({
                        buttonColor: null == e ? void 0 : e.buttonColor,
                        textColor: null == e ? void 0 : e.textColor,
                        bgImageUrl: null == e ? void 0 : e.bgImageUrl,
                        imageUrl: null == e ? void 0 : e.imageUrl,
                        buttonTextColor: null == e ? void 0 : e.buttonTextColor,
                    }),
                eY = r.gK
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
                                let { href: a } = (0, G.uvd)(e.album.url, { query: t.reportingProperties });
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
                eG = r.gK.model('AlbumPromoDataReportingOptions', { url: r.gK.string, timeMs: r.gK.number }),
                eW = r.gK.model('AlbumPromoDataReporting', { blockRender: eG, blockImpression: eG, adImpressions: eG }),
                eX = r.gK.model('AlbumPromoData', { items: r.gK.array(eY), reporting: r.gK.maybe(eW) }).actions((e) => ({
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
                eF = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.ALBUM_PROMO), r.gK.literal(s.t.SIMPLE_ALBUM_PROMO)), data: r.gK.maybe(eX), meta: R })
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
                eH = r.gK.model('ArtistConcertsData', { items: r.gK.array(er.aR) }),
                ez = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.ARTIST_CONCERTS)), data: r.gK.maybe(eH), meta: R })
                    .named('ArtistConcerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let { experiments: a } = (0, r.Zn)(e);
                            if (a.checkExperiment(G.zal.disableAllConcerts, 'on')) return !1;
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
                eq = x
                    .props({ type: r.gK.literal(s.t.ARTIST_POPULAR_TRACKS_AND_RELEASES), data: r.gK.maybe(e$) })
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
                eJ = r.gK.model('ChartTracksItem', { type: r.gK.literal(o._.TRACK_ITEM), data: T.vj }),
                eZ = r.gK.model('ChartTracksData', { items: r.gK.array(eJ), playlist: e_.$o }),
                eQ = x
                    .props({ type: r.gK.literal(s.t.CHART_TRACKS), data: r.gK.maybe(eZ), meta: R })
                    .named('ChartTracks')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            let t = null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                e0 = r.gK.model('LandingClipItem', { type: r.gK.union(r.gK.literal(o._.CLIP), r.gK.literal(o._.CLIP_ITEM)), data: v.kv }),
                e1 = r.gK.model('ClipsData', { items: r.gK.array(e0), canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                e3 = x
                    .props({
                        type: r.gK.union(r.gK.literal(s.t.CLIPS), r.gK.literal(s.t.ARTIST_CLIPS), r.gK.literal(s.t.COLLECTION_CLIPS)),
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
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                e2 = r.gK.model('CollectionAlbumsData', { items: r.gK.array(n.JC), canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1) }).views((e) => ({
                    get isEmptyBlock() {
                        return e.canShowEmptyBlock && 0 === e.items.length;
                    },
                })),
                e8 = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_ALBUMS), data: r.gK.maybe(e2), meta: R })
                    .named('CollectionAlbums')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            if ((null == (t = e.data) ? void 0 : t.canShowEmptyBlock) || e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (i = e.data) || null == (a = i.items) ? void 0 : a.length) !== 0;
                        },
                        get objectsCount() {
                            var s, l;
                            return null != (l = null == (s = e.data) ? void 0 : s.items.length) ? l : 0;
                        },
                    }));
            var e4 = a(75468);
            let e6 = r.gK.model('LandingUpcomingAlbumItem', { type: r.gK.literal(o._.PRESAVED_ALBUM_ITEM), data: n.VH }),
                e5 = r.gK.union(S, e6),
                e9 = r.gK
                    .model('CollectionAlbumsPresavesTab', {
                        id: r.gK.string,
                        title: r.gK.string,
                        type: r.gK.enumeration(Object.values(e4.n)),
                        items: r.gK.array(e5),
                        canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                e7 = r.gK.model('CollectionAlbumsPresavesTabs', { tabs: r.gK.array(e9) }).views((e) => ({
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
                te = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_ALBUMS_PRESAVES), data: r.gK.maybe(e7), meta: R })
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
                ta = r.gK.union(tt, j),
                ti = r.gK.model('CollectionArtistsAndTopWithItemsArtist', { artist: c.PK, items: r.gK.array(ta) }),
                ts = r.gK.model('CollectionArtistsAndTopWithItemsData', { artists: r.gK.array(ti) }),
                tl = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS), data: r.gK.maybe(ts), meta: R })
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
                to = x
                    .props({
                        type: r.gK.union(
                            r.gK.literal(s.t.COLLECTION_ARTISTS),
                            r.gK.literal(s.t.COLLECTION_ARTISTS_AND_TOP),
                            r.gK.literal(s.t.PERSONAL_ARTISTS),
                            r.gK.literal(s.t.NEW_STARS_ARTISTS),
                            r.gK.literal(s.t.EDITORIAL_ARTISTS),
                            r.gK.literal(s.t.META_TAG_POPULAR_ARTISTS),
                            r.gK.literal(s.t.MICRO_GENRE_TOP_ARTISTS),
                            r.gK.literal(s.t.MICRO_GENRE_ARTISTS),
                            r.gK.literal(s.t.META_TAG_ARTISTS),
                            r.gK.literal(s.t.SIMILAR_ARTISTS),
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
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                tn = r.gK.model('CollectionPlaylistsData', { items: r.gK.array(u.IP) }),
                td = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_PLAYLISTS_CREATED), data: r.gK.maybe(tn), meta: R })
                    .named('CollectionCreatedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    }));
            var tc = a(5693);
            let tm = r.gK.model('CollectionDownloadedTracksData', { items: r.gK.array(T.vj), rawTracks: r.gK.frozen() }).views((e) => ({
                    get entitiesData() {
                        return e.rawTracks.map((e) => ({ type: tc.R.DownloadedMusic, meta: e }));
                    },
                })),
                tu = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_DOWNLOADED_TRACKS), data: r.gK.maybe(tm), meta: R })
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
                t_ = r.gK.union(N, V, Y),
                tg = r.gK.model('CollectionKidsData', { items: r.gK.array(t_) }),
                tp = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_KIDS), data: r.gK.maybe(tg), meta: R })
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
                tb = r.gK.model('CollectionLikedPlaylistsData', { items: r.gK.array(u.IP) }),
                tv = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_PLAYLISTS_LIKED), data: r.gK.maybe(tb), meta: R })
                    .named('CollectionLikedPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    }));
            var tA = a(11090);
            let tC = r.gK
                    .model('CollectionPlaylistsTab', {
                        id: r.gK.string,
                        title: r.gK.string,
                        type: r.gK.enumeration(Object.values(tA.l)),
                        items: r.gK.array(u.IP),
                        canShowEmptyBlock: r.gK.optional(r.gK.boolean, !1),
                    })
                    .views((e) => ({
                        get isEmptyTab() {
                            return !!(e.canShowEmptyBlock && 0 === e.items.length);
                        },
                    })),
                tT = r.gK.model('CollectionPlaylistsTabs', { tabs: r.gK.array(tC) }).views((e) => ({
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
                tI = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED), data: r.gK.maybe(tT), meta: R })
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
            var th = a(55616);
            let tL = r.gK.model('CollectionTopArtistsData', { items: r.gK.array(th.GV) }),
                ty = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_TOP_ARTISTS), data: r.gK.maybe(tL), meta: R })
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
                tS = r.gK.model('CollectionVibeAgentDataModel', { vibe: g.Gh }),
                tE = x
                    .props({ type: r.gK.literal(s.t.COLLECTION_WAVE_AGENT), data: r.gK.maybe(tS), meta: R })
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
                tN = x
                    .props({ type: r.gK.literal(s.t.CONCERT_PLACE), data: r.gK.maybe(eK.fc), meta: R })
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
                tj = r.gK.model('ConcertsData', { items: r.gK.array(er.aR) }),
                tx = x
                    .props({
                        type: r.gK.union(
                            r.gK.literal(s.t.CONCERTS_TOP),
                            r.gK.literal(s.t.CONCERTS_PERSONAL),
                            r.gK.literal(s.t.EDITORIAL_CONCERTS),
                            r.gK.literal(s.t.VIEWED_CONCERTS),
                        ),
                        data: r.gK.maybe(tj),
                        meta: R,
                    })
                    .named('Concerts')
                    .views((e) => ({
                        get isVisible() {
                            var t;
                            let { experiments: a } = (0, r.Zn)(e);
                            if (a.checkExperiment(G.zal.disableAllConcerts, 'on')) return !1;
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
            var tk = a(14032),
                tR = a(46423);
            let tf = r.gK
                    .model('ContinueListenTrackData', {
                        album: r.gK.maybe(tR.GI),
                        playlist: r.gK.maybe(e_.$o),
                        track: T.vj,
                        trackLoadingState: r.gK.optional(r.gK.enumeration(Object.values(G.GuX)), G.GuX.IDLE),
                        playlistLoadingState: r.gK.optional(r.gK.enumeration(Object.values(G.GuX)), G.GuX.IDLE),
                        albumDuration: r.gK.maybe(r.gK.number),
                        albumDurationLeft: r.gK.maybe(r.gK.number),
                    })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.trackLoadingState === G.GuX.IDLE;
                        },
                        get isLoading() {
                            return e.trackLoadingState === G.GuX.PENDING || e.playlistLoadingState === G.GuX.PENDING;
                        },
                        get isRejected() {
                            return e.trackLoadingState === G.GuX.REJECT || e.playlistLoadingState === G.GuX.REJECT;
                        },
                    }))
                    .actions((e) => ({
                        getTrackMeta: (0, r.L3)(function* () {
                            let { tracksResource: t, modelActionsLogger: a } = (0, r._$)(e),
                                { continueListen: i } = (0, r.Zn)(e);
                            if (i.track && 'number' == typeof i.track.durationMs) {
                                e.trackLoadingState = G.GuX.RESOLVE;
                                return;
                            }
                            e.trackLoadingState = G.GuX.PENDING;
                            try {
                                var s;
                                let a = (0, tk.V)(e.track.id, null == (s = e.album) ? void 0 : s.id),
                                    [i] = yield t.getTracksMeta({ trackIds: [a], withProgress: !0 });
                                if (((e.trackLoadingState = G.GuX.RESOLVE), i)) return (0, T.vU)(i);
                            } catch (t) {
                                a.error(t), (e.trackLoadingState = G.GuX.REJECT);
                            }
                        }),
                        getPlaylistMeta: (0, r.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, r._$)(e),
                                { continueListen: i } = (0, r.Zn)(e);
                            if ((i.track && 'number' == typeof i.trackIndex) || !e.playlist) {
                                e.playlistLoadingState = G.GuX.RESOLVE;
                                return;
                            }
                            e.playlistLoadingState = G.GuX.PENDING;
                            try {
                                let { tracks: a } = yield t.getPlaylistWithTracksIds({ userId: String(e.playlist.uid), playlistKind: e.playlist.kind, resumeStream: !1 }),
                                    i = a.findIndex((t) => String(t.id) === e.track.id);
                                if (((e.playlistLoadingState = G.GuX.RESOLVE), e.track.durationMs && -1 !== i)) return i;
                            } catch (t) {
                                a.error(t), (e.playlistLoadingState = G.GuX.REJECT);
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
                tM = x
                    .props({ type: r.gK.literal(s.t.CONTINUE_LISTEN), data: r.gK.maybe(tO), meta: R })
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
                tD = a(985)
                    .kv.named('LandingBlockOverviewMeta')
                    .props({ showPolicy: r.gK.maybe(r.gK.string), viewAllActionLink: r.gK.maybeNull(r.gK.string) }),
                tB = x
                    .props({ type: r.gK.literal(s.t.DISLIKES), data: r.gK.undefined, meta: tD })
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
                tY = x
                    .props({ type: r.gK.literal(s.t.DONATIONS), data: r.gK.maybe(tU), meta: R })
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
                tG = r.gK.model('EditorialVibesDataModel', { items: r.gK.array(g.Gh) }),
                tW = x
                    .props({
                        type: r.gK.union(
                            r.gK.literal(s.t.EDITORIAL_WAVES),
                            r.gK.literal(s.t.META_TAG_WAVE),
                            r.gK.literal(s.t.MICRO_GENRE_WAVE),
                            r.gK.literal(s.t.MICRO_GENRE_SIMILAR_WAVE),
                            r.gK.literal(s.t.META_TAG_SIMILAR_WAVE),
                            r.gK.literal(s.t.EDITORIAL_WAVES_AGENT),
                            r.gK.literal(s.t.META_TAG_WAVE_AGENT),
                            r.gK.literal(s.t.MICRO_GENRE_WAVE_AGENT),
                            r.gK.literal(s.t.MICRO_GENRE_SIMILAR_WAVE_AGENT),
                            r.gK.literal(s.t.META_TAG_SIMILAR_WAVE_AGENT),
                        ),
                        data: r.gK.maybe(tG),
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
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                tX = r.gK.model('FamiliarYouAndArtistPickData', { blocks: r.gK.array(r.gK.union(eR, ex)) }).views((e) => ({
                    get familiarYou() {
                        return e.blocks.find((e) => eR.is(e));
                    },
                    get artistPick() {
                        return e.blocks.find((e) => ex.is(e));
                    },
                })),
                tF = x
                    .props({ type: r.gK.literal(s.t.FAMILIAR_YOU_AND_ARTIST_PICK), data: r.gK.maybe(tX) })
                    .named('FamiliarYouAndArtistPick')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, s, l, r;
                            if ((null == (t = e.data) ? void 0 : t.familiarYou) || (null == (a = e.data) ? void 0 : a.artistPick))
                                return !!(
                                    (null == (s = e.data) || null == (i = s.familiarYou) ? void 0 : i.isVisible) ||
                                    (null == (r = e.data) || null == (l = r.artistPick) ? void 0 : l.isVisible)
                                );
                            return !1;
                        },
                        get objectsCount() {
                            var o, n;
                            return null != (n = null == (o = e.data) ? void 0 : o.blocks.length) ? n : 0;
                        },
                    })),
                tH = r.gK.model('InStyleDataItemTab', { id: r.gK.number, title: r.gK.string, covers: r.gK.array(r.gK.string) }),
                tz = r.gK.model('InStyleDataItem', { tab: tH, data: r.gK.array(n.JC) }),
                t$ = r.gK.model('InStyleData', { items: r.gK.array(tz) }),
                tq = x
                    .props({ type: r.gK.literal(s.t.IN_STYLE), data: r.gK.maybe(t$), meta: R })
                    .named('InStyle')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let s = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                l = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !s || !l,
                            });
                        },
                        get objectsCount() {
                            var s, l;
                            return null != (l = null == (s = e.data) ? void 0 : s.items.length) ? l : 0;
                        },
                    })),
                tJ = r.gK.model('ItemListData', { items: r.gK.array(tt) }),
                tZ = x
                    .props({ type: r.gK.literal(s.t.ITEM_LIST), data: r.gK.maybe(tJ), meta: R })
                    .named('ItemList')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                tQ = r.gK
                    .model('LikesData', { title: r.gK.string, cover: W.$B, playlistUuid: r.gK.maybe(r.gK.string), trackCovers: r.gK.array(W.$B), count: r.gK.number })
                    .views((e) => ({
                        get id() {
                            return e.playlistUuid;
                        },
                        get url() {
                            let { href: t } = (0, G.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    })),
                t0 = r.gK.model('HistoryData', { title: r.gK.string, trackCovers: r.gK.array(W.$B), artists: r.gK.array(r.gK.string) }).views(() => ({
                    get id() {
                        return 'music-history';
                    },
                    get url() {
                        let { href: e } = (0, G.uvd)('/music-history');
                        return e;
                    },
                })),
                t1 = r.gK.model('LikesAndHistoryData', { favorites: tQ, history: t0 }),
                t3 = x
                    .props({ type: r.gK.literal(s.t.LIKES_AND_HISTORY), data: r.gK.maybe(t1), meta: R })
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
                t8 = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.MIXES_GRID), r.gK.literal(s.t.MIXES_MUSIC)), data: r.gK.maybe(t2), meta: R })
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
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                t4 = r.gK.model('MixesData', { items: r.gK.array(eB.f) }),
                t6 = x
                    .props({ type: r.gK.literal(s.t.MIXES), data: r.gK.maybe(t4), meta: R })
                    .named('Mixes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                t5 = r.gK.model('NeuromusicData', { items: r.gK.array(eV.R6) }),
                t9 = x
                    .props({ type: r.gK.literal(s.t.NEUROMUSIC), data: r.gK.maybe(t5), meta: R })
                    .named('Neuromusic')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
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
                                let s = (Number(a) || 0) % 3;
                                return i === G.Sxu.Light ? t7[s] : ae[s];
                            })({ coverUri: e.coverUri, artistId: e.album.artistId, theme: t }),
                    })),
                aa = r.gK.model('NewReleasesData', { items: r.gK.array(at) }),
                ai = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.NEW_RELEASES), r.gK.literal(s.t.EDITORIAL_NEW_RELEASES)), data: r.gK.maybe(aa), meta: R })
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
                as = r.gK.model('NonMusicEditorialCompilationData', { items: r.gK.array(r.gK.union(V, N)) }),
                al = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.NON_MUSIC_EDITORIAL_COMPILATION), r.gK.literal(s.t.NON_MUSIC_CATEGORY)), data: r.gK.maybe(as), meta: R })
                    .named('NonMusicEditorialCompilation')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                ar = x
                    .props({ type: r.gK.literal(s.t.OVERVIEW), data: r.gK.undefined, meta: tD })
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
                an = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.PERSONAL_PLAYLISTS), r.gK.literal(s.t.REWIND_PLAYLISTS)), data: r.gK.maybe(ao), meta: R })
                    .named('PersonalPlaylists')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
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
            var a_ = a(92437);
            let ag = r.gK
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
                ap = r.gK
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
                ab = r.gK
                    .compose(
                        ag.props({
                            likedTrackIds: r.gK.optional(r.gK.array(r.gK.string), () => []),
                            trackDetailsMap: r.gK.optional(r.gK.map(T.vj), {}),
                            tracksLoading: r.gK.optional(W.XT, () => ({ loadingState: G.GuX.IDLE })),
                            playlistLoading: r.gK.optional(W.XT, () => ({ loadingState: G.GuX.IDLE })),
                            filters: r.gK.optional(ap, () => ({ loadingState: G.GuX.IDLE })),
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
                                let { modelActionsLogger: a, usersResource: i, playlistResource: s } = (0, r._$)(e),
                                    { user: l } = (0, r.Zn)(e),
                                    o = l.account.data.uid;
                                if ((0, r._n)(e) && o) {
                                    e.playlistLoading.loadingState = G.GuX.PENDING;
                                    try {
                                        let a = yield i.getPlaylistWithTracksIds({
                                                userId: String(o),
                                                playlistKind: e_.ji.LIKE,
                                                resumeStream: !1,
                                                trackMetaType: 'music',
                                            }),
                                            l = yield s.getPlaylist({ playlistUuid: a.playlistUuid, resumeStream: !1, richTracks: !1 });
                                        (e.likedTrackIds = (0, r.wg)(l.tracks.map((e) => String(e.id)))),
                                            (e.totalItemsCount = e.likedTrackIds.length),
                                            0 === e.totalItemsCount && (e.canShowEmptyBlock = !0),
                                            (e.playlist = (0, e_.jX)(l)),
                                            (e.playlistLoading.loadingState = G.GuX.RESOLVE),
                                            yield Promise.allSettled([t.getTracksMeta(), t.getFilters()]);
                                    } catch (t) {
                                        a.error(t), (e.playlistLoading.loadingState = G.GuX.REJECT);
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
                                e.tracksLoading.loadingState = G.GuX.PENDING;
                                let s = e.visibleTrackIds.filter((t) => !e.trackDetailsMap.has(t));
                                if (!s.length) {
                                    t.updateItemsFromCache(), (e.tracksLoading.loadingState = G.GuX.RESOLVE);
                                    return;
                                }
                                try {
                                    (yield a.getTracksMeta({ trackIds: s })).forEach((t) => {
                                        let a = (0, T.vU)(t);
                                        e.trackDetailsMap.set(String(t.id), a);
                                    }),
                                        t.updateItemsFromCache(),
                                        (e.tracksLoading.loadingState = G.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.tracksLoading.loadingState = G.GuX.REJECT);
                                }
                            }),
                            getFilters: (0, r.L3)(function* () {
                                if (!(0, r._n)(e)) return;
                                let { filtersResource: t, modelActionsLogger: a } = (0, r._$)(e);
                                try {
                                    e.filters.loadingState = G.GuX.PENDING;
                                    let a = yield t.getTracksFilters({ trackIds: e.likedTrackIds }),
                                        i = ((e) => {
                                            let t = e.filters.map(ad);
                                            if (t.length < 3) return [];
                                            let a = t.find((e) => e.id === e_.Q1.ALL);
                                            if (!a) return [];
                                            let i = t.filter((e) => e.tracks.length >= 8);
                                            return i.length < 2 ? [] : [a, ...i.slice(0, 7)];
                                        })(a);
                                    (e.filters.items = (0, r.wg)(i)), (e.filters.loadingState = G.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.filters.loadingState = G.GuX.REJECT);
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
                av = x
                    .props({
                        type: r.gK.literal(s.t.COLLECTION_FAVOURITE_PLAYLIST),
                        data: r.gK.optional(ab, () => ({
                            items: [],
                            playlist: { uuid: '', isAvailable: !0, uid: 0, kind: e_.ji.LIKE, likesCount: 0, pendingLikesCount: 0 },
                        })),
                        meta: au,
                    })
                    .named('PlaylistWithTracksAndFilters')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i, s, l, r, o, n, d, c, m;
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
                                    (null == (s = e.data) ? void 0 : s.playlistLoading.isLoading) ||
                                    (null == (l = e.data) ? void 0 : l.tracksLoading.isLoading)
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
                aA = ag.named('PlaylistWithTracksData'),
                aC = x
                    .props({
                        type: r.gK.union(
                            r.gK.literal(s.t.OPEN_PLAYLIST),
                            r.gK.literal(s.t.SMART_OPEN_PLAYLIST),
                            r.gK.literal(s.t.NON_MUSIC_OPEN_PLAYLIST),
                            r.gK.literal(s.t.COLLECTION_PLAYLIST_WITH_LIKES),
                        ),
                        data: r.gK.maybe(aA),
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
                            var i, s;
                            let t = null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                            return t < 8 ? t : 8;
                        },
                    })),
                aT = r.gK.union(S, U, E),
                aI = r.gK.model('RecentlyPlayedData', { items: r.gK.array(aT) }),
                ah = x
                    .props({ type: r.gK.literal(s.t.RECENTLY_PLAYED), data: r.gK.maybe(aI), meta: R })
                    .named('RecentlyPlayed')
                    .views((e) => ({
                        get isVisible() {
                            var t, a;
                            if (e.isLoading || e.isRejected || e.isNeededToLoad) return !0;
                            return (null == (a = e.data) || null == (t = a.items) ? void 0 : t.length) !== 0;
                        },
                        get objectsCount() {
                            var i, s;
                            return null != (s = null == (i = e.data) ? void 0 : i.items.length) ? s : 0;
                        },
                    })),
                aL = r.gK.model('LandingVibeItemData', { vibe: g.Gh, cover: r.gK.maybeNull(W.$B) }),
                ay = r.gK.model('LandingVibeItem', { type: r.gK.literal(o._.WAVE_ITEM), data: aL }),
                aS = r.gK.union(E, N, S, V, Y, ay, j, e0),
                aE = r.gK.model('SearchHistoryData', { items: r.gK.array(aS) }),
                aN = x
                    .props({ type: r.gK.union(r.gK.literal(s.t.HISTORY), r.gK.literal(s.t.SEARCH_HISTORY)), data: r.gK.maybe(aE), meta: R })
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
                aj = r.gK.model('SpecialThemeSettings', {
                    buttonColor: r.gK.maybeNull(r.gK.string),
                    textColor: r.gK.maybeNull(r.gK.string),
                    bgImageUrl: r.gK.maybeNull(r.gK.string),
                    imageUrl: r.gK.maybeNull(r.gK.string),
                    buttonTextColor: r.gK.maybeNull(r.gK.string),
                }),
                ax = r.gK.model('SpecialData', {
                    title: r.gK.maybe(r.gK.string),
                    subtitle: r.gK.maybe(r.gK.string),
                    buttonTitle: r.gK.maybe(r.gK.string),
                    imageUrl: r.gK.maybe(r.gK.string),
                    align: r.gK.maybeNull(r.gK.string),
                    weblink: r.gK.maybeNull(r.gK.string),
                    lightTheme: r.gK.maybeNull(aj),
                    darkTheme: r.gK.maybeNull(aj),
                }),
                ak = x
                    .props({ type: r.gK.literal(s.t.SPECIAL), data: r.gK.maybe(ax), meta: R })
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
                af = r.gK.model('VibesDataItem', { tab: aR, data: r.gK.array(g.Gh) }),
                aP = r.gK.model('VibesData', { items: r.gK.array(af) }),
                aw = x
                    .props({
                        type: r.gK.union(r.gK.literal(s.t.WAVES), r.gK.literal(s.t.SETS_BY_WAVES), r.gK.literal(s.t.WAVES_AGENT), r.gK.literal(s.t.SETS_BY_WAVES_AGENT)),
                        data: r.gK.maybe(aP),
                        meta: R,
                    })
                    .named('Vibes')
                    .views((e) => ({
                        get isVisible() {
                            var t, a, i;
                            let s = (null == (t = e.data) ? void 0 : t.items.length) === 0,
                                l = null == (i = e.data) || null == (a = i.items) ? void 0 : a.every((e) => !(null == e ? void 0 : e.data));
                            return y({
                                showPolicy: e.meta.showPolicy,
                                isNeededToLoad: e.isNeededToLoad,
                                isLoading: e.isLoading,
                                isLoaded: e.isLoaded,
                                isRejected: e.isRejected,
                                isNotEmpty: !s || !l,
                            });
                        },
                        get objectsCount() {
                            var s, l, r;
                            return null != (r = null == (l = e.data) || null == (s = l.items[0]) ? void 0 : s.data.length) ? r : 0;
                        },
                    })),
                aK = r.gK.model('WizardData', { title: r.gK.string, description: r.gK.maybe(r.gK.string), artists: r.gK.array(c.PK) }),
                aO = x
                    .props({ type: r.gK.literal(s.t.WIZARD), data: r.gK.maybe(aK), meta: R })
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
                    eQ,
                    e8,
                    to,
                    ty,
                    tv,
                    td,
                    aC,
                    av,
                    ai,
                    w,
                    B,
                    ah,
                    tq,
                    an,
                    ak,
                    aO,
                    aw,
                    t6,
                    t9,
                    t3,
                    al,
                    O,
                    te,
                    tx,
                    tI,
                    tW,
                    tZ,
                    ar,
                    tu,
                    tY,
                    e3,
                    eF,
                    tM,
                    tB,
                    aN,
                    t8,
                    tp,
                    ez,
                    eT,
                    eh,
                    eR,
                    ex,
                    ey,
                    eq,
                    tF,
                    tN,
                    tE,
                    tl,
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
                        (e.loadingState = G.GuX.IDLE), e.destroyItems([e.data]);
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
                                return [G.GuX.RESOLVE, G.GuX.REJECT].includes(e.loadingState) && t.isEmpty;
                            },
                            get hasUpperBlocks() {
                                var s;
                                return !!(null == (s = e.upperBlocks) ? void 0 : s.length);
                            },
                        };
                        return t;
                    })
                    .props({ id: r.gK.optional(r.gK.string, ''), title: r.gK.optional(r.gK.string, '') })
                    .views((e) => ({
                        get isLoaded() {
                            return e.loadingState === G.GuX.RESOLVE || e.loadingState === G.GuX.REJECT;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getBlock: (0, r.L3)(function* (a) {
                                var i, l, L, y, S, E, N;
                                let j;
                                if (!a || (!('source' in a.meta) && ((j = a.type), !el.includes(j)) && !ei(a.type))) return;
                                if ((0, es.Q)(a)) {
                                    null == (i = a.data) || i.blocks.forEach(t.getBlock);
                                    return;
                                }
                                let { landingResource: x, modelActionsLogger: k } = (0, r._$)(e);
                                try {
                                    if (((a.loadingState = h.PENDING), ei(a.type))) {
                                        a.loadingState = h.RESOLVE;
                                        return;
                                    }
                                    let e = yield x.getBlock({ source: 'source' in a.meta ? a.meta.source : void 0, type: a.type });
                                    if (!(0, r._n)(a)) {
                                        a.loadingState = h.REJECT;
                                        return;
                                    }
                                    switch (a.type) {
                                        case s.t.CLIPS:
                                        case s.t.ARTIST_CLIPS:
                                        case s.t.COLLECTION_CLIPS:
                                            let t, i;
                                            'object' == typeof e &&
                                                null !== e &&
                                                'items' in e &&
                                                Array.isArray(e.items) &&
                                                (!e.items.length ||
                                                    ((t = e.items[0]),
                                                    'object' == typeof t && null !== t && 'type' in t && (t.type === o._.CLIP || t.type === o._.CLIP_ITEM))) &&
                                                ((i = a.type), (a.data = (0, r.wg)({ items: e.items.map(A), canShowEmptyBlock: i === s.t.COLLECTION_CLIPS })));
                                            break;
                                        case s.t.WIZARD:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'title' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (null == e ? void 0 : e.artists) || []) ? void 0 : t.map((e) => (0, c.as)({ artist: e }));
                                                    return (0, r.wg)({ title: e.title, description: e.description, artists: a });
                                                })(e));
                                            break;
                                        case s.t.CHART_TRACKS:
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
                                        case s.t.NON_MUSIC_EDITORIAL_COMPILATION:
                                        case s.t.NON_MUSIC_CATEGORY:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) =>
                                                        e.type === o._.NON_MUSIC_ALBUM_ITEM
                                                            ? C({
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
                                        case s.t.CHART_ALBUMS:
                                        case s.t.PODCASTS_CHART_ALBUMS:
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
                                        case s.t.COLLECTION_ALBUMS:
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
                                        case s.t.COLLECTION_ARTISTS:
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
                                        case s.t.COLLECTION_ARTISTS_AND_TOP:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.items.map((e) => (0, c.as)({ artist: e.data.artist, trailer: e.data.trailer }));
                                                    return (0, r.wg)({ items: t, canShowEmptyBlock: !0 });
                                                })(e));
                                            break;
                                        case s.t.COLLECTION_TOP_ARTISTS:
                                            e &&
                                                'object' == typeof e &&
                                                'artists' in e &&
                                                Array.isArray(e.artists) &&
                                                (a.data = (0, r.wg)(
                                                    ((e) => {
                                                        let t = ((null == e ? void 0 : e.artists) || []).map((e) => ({
                                                            artist: (0, c.as)({ artist: e.artist }),
                                                            listenTimeSeconds: e.listenTimeSeconds,
                                                            top: (0, eb.ws)({ position: e.top.position, progress: e.top.progress }),
                                                        }));
                                                        return (0, r.wg)({ items: t });
                                                    })(e),
                                                ));
                                            break;
                                        case s.t.PERSONAL_ARTISTS:
                                        case s.t.NEW_STARS_ARTISTS:
                                        case s.t.EDITORIAL_ARTISTS:
                                        case s.t.META_TAG_POPULAR_ARTISTS:
                                        case s.t.MICRO_GENRE_ARTISTS:
                                        case s.t.MICRO_GENRE_TOP_ARTISTS:
                                        case s.t.META_TAG_ARTISTS:
                                        case s.t.SIMILAR_ARTISTS:
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
                                        case s.t.COLLECTION_PLAYLISTS_CREATED:
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
                                        case s.t.COLLECTION_PLAYLISTS_LIKED:
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
                                        case s.t.OPEN_PLAYLIST:
                                        case s.t.SMART_OPEN_PLAYLIST:
                                        case s.t.NON_MUSIC_OPEN_PLAYLIST:
                                            'playlist' in e &&
                                                ((l = a.id),
                                                (a.data = (0, r.wg)({
                                                    items: e.tracks.map((e) => (0, T.vU)(e)),
                                                    playlist: (0, e_.jX)(e.playlist),
                                                    coverUri: null == (L = e.cover) ? void 0 : L.uri,
                                                    withRewindTrailerButton: 'rewind2024' === l,
                                                })));
                                            break;
                                        case s.t.COLLECTION_PLAYLIST_WITH_LIKES:
                                            'playlist' in e &&
                                                (a.data = ((e) => {
                                                    var t, a, i;
                                                    let s = e || {};
                                                    return (0, r.wg)({
                                                        items: null != (i = null == (t = s.tracks) ? void 0 : t.map((e) => (0, T.vU)(e))) ? i : [],
                                                        playlist: (0, e_.jX)(s.playlist),
                                                        totalItemsCount: null == (a = s.summary) ? void 0 : a.count,
                                                        canShowEmptyBlock: !0,
                                                    });
                                                })(e));
                                            break;
                                        case s.t.NEW_RELEASES:
                                        case s.t.EDITORIAL_NEW_RELEASES:
                                            'newReleases' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).newReleases)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let { album: t, artists: a, releaseDate: i, cover: s, trailer: l } = e;
                                                                  return {
                                                                      album: (0, n.sK)({ album: t, artists: a, trailer: l }),
                                                                      releaseDate: i,
                                                                      coverUri: null == s ? void 0 : s.uri,
                                                                      coverColor: null == s ? void 0 : s.color,
                                                                  };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.NEW_PLAYLISTS:
                                        case s.t.EDITORIAL_COMPILATION:
                                        case s.t.RECOMMENDED_PLAYLISTS:
                                        case s.t.META_TAG_POPULAR_PLAYLISTS:
                                        case s.t.META_TAG_NEW_ALBUMS:
                                        case s.t.META_TAG_PLAYLISTS:
                                        case s.t.MICRO_GENRE_ALBUMS:
                                        case s.t.META_TAG_ALBUMS:
                                        case s.t.ARTIST_PLAYLISTS:
                                        case s.t.ARTIST_COMPILATIONS:
                                        case s.t.ARTIST_ALBUMS:
                                        case s.t.ARTIST_STUDIO_ALBUMS:
                                        case s.t.ARTIST_SIMILAR_ENTITIES:
                                        case s.t.COLLECTION_SIMILAR_ENTITIES:
                                            'items' in e && (a.data = b(e));
                                            break;
                                        case s.t.RECENTLY_PLAYED:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).items)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  switch (e.type) {
                                                                      case o._.PLAYLIST_ITEM:
                                                                          return H(e.data.playlist, e.data.trailer);
                                                                      case o._.ALBUM_ITEM:
                                                                          return d(e.data.album, e.data.artists, e.data.trailer);
                                                                      case o._.ARTIST_ITEM:
                                                                          return m(e.data.artist, e.data.trailer);
                                                                  }
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.IN_STYLE:
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
                                                                      s =
                                                                          ((null == e || null == (a = e.cover) ? void 0 : a.uri) && [null == e ? void 0 : e.cover.uri]) ||
                                                                          [];
                                                                  return { tab: { id: t, title: e.title, covers: (0, r.wg)(s) }, data: (0, r.wg)(i) };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.PROMOTIONS:
                                        case s.t.EDITORIAL_PROMOTIONS:
                                        case s.t.NON_MUSIC_PROMOTIONS:
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
                                        case s.t.REWIND_PLAYLISTS:
                                        case s.t.PERSONAL_PLAYLISTS:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    if (!e || !Array.isArray(e.items)) return (0, r.wg)({});
                                                    let t = e.items.map(F);
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case s.t.SPECIAL:
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
                                        case s.t.COLLECTION_ALBUMS_PRESAVES:
                                            void 0 !== e.tabs &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).tabs)
                                                            ? void 0
                                                            : t.map((e) => {
                                                                  let t = null == e ? void 0 : e.items.map(eg);
                                                                  return (0, r.wg)({ id: e.id, title: e.title, type: e.type, items: t, canShowEmptyBlock: !0 });
                                                              });
                                                    return (0, r.wg)({ tabs: a });
                                                })(e));
                                            break;
                                        case s.t.WAVES:
                                        case s.t.SETS_BY_WAVES:
                                            'waves' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a =
                                                        null == (t = (e || {}).waves)
                                                            ? void 0
                                                            : t.map((e, t) => ({
                                                                  tab: { id: t, title: null == e ? void 0 : e.title },
                                                                  data: null == e ? void 0 : e.items.map(g.er),
                                                              }));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.WAVES_AGENT:
                                        case s.t.SETS_BY_WAVES_AGENT:
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
                                                                                    return (0, g.lb)(t, a);
                                                                                })) || [],
                                                                  };
                                                              });
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.MIXES_GRID:
                                        case s.t.MIXES_MUSIC:
                                            'object' == typeof e && null !== e && 'items' in e && (a.data = { items: (0, r.wg)(e.items.map((e) => (0, X.rc)(e.data))) });
                                            break;
                                        case s.t.MIXES:
                                            'items' in e && (a.data = { items: (0, r.wg)(e.items.map((e) => (0, eB.Ju)(e.data))) });
                                            break;
                                        case s.t.NEUROMUSIC:
                                            'items' in e && (a.data = (0, r.wg)({ items: e.items.map((e) => (0, eV.xf)(e)) }));
                                            break;
                                        case s.t.LIKES_AND_HISTORY:
                                            'favorites' in e &&
                                                (a.data = ((e) => {
                                                    let { favorites: t, history: a } = e,
                                                        i = (0, G.pX4)(t.cover),
                                                        s = t.trackCovers.map(G.pX4),
                                                        l = (0, r.wg)({
                                                            title: t.title,
                                                            cover: i,
                                                            playlistUuid: t.playlistUuid || void 0,
                                                            count: t.count,
                                                            trackCovers: s,
                                                        }),
                                                        o = a.trackCovers.map(G.pX4),
                                                        n = (0, r.wg)({ title: a.title, trackCovers: o, artists: a.subtitleElements });
                                                    return (0, r.wg)({ favorites: l, history: n });
                                                })(e));
                                            break;
                                        case s.t.CONCERTS_TOP:
                                        case s.t.CONCERTS_PERSONAL:
                                        case s.t.EDITORIAL_CONCERTS:
                                        case s.t.VIEWED_CONCERTS:
                                            void 0 !== e.concerts &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).concerts) ? void 0 : t.map((e) => (0, er.ho)(e));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED:
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
                                        case s.t.EDITORIAL_WAVES:
                                        case s.t.META_TAG_WAVE:
                                        case s.t.MICRO_GENRE_WAVE:
                                        case s.t.MICRO_GENRE_SIMILAR_WAVE:
                                        case s.t.META_TAG_SIMILAR_WAVE:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(g.er);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.EDITORIAL_WAVES_AGENT:
                                        case s.t.META_TAG_WAVE_AGENT:
                                        case s.t.MICRO_GENRE_WAVE_AGENT:
                                        case s.t.MICRO_GENRE_SIMILAR_WAVE_AGENT:
                                        case s.t.META_TAG_SIMILAR_WAVE_AGENT:
                                            e &&
                                                'object' == typeof e &&
                                                'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map((e) => (0, g.lb)(e.wave, e.agent));
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.ITEM_LIST:
                                            'items' in e &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).items) ? void 0 : t.map(ep);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.DONATIONS:
                                            void 0 !== e.donations &&
                                                (a.data = ((e) => {
                                                    var t;
                                                    let a = null == (t = (e || {}).donations) ? void 0 : t.map(eD);
                                                    return (0, r.wg)({ items: a });
                                                })(e));
                                            break;
                                        case s.t.CONTINUE_LISTEN:
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
                                                                    data: { track: a, album: i, playlist: s, durationTotal: l, durationLeft: o },
                                                                } = e;
                                                                return (0, r.wg)({
                                                                    type: t,
                                                                    data: {
                                                                        album: t === en._.ALBUM && i ? (0, n.sK)({ album: i }) : void 0,
                                                                        playlist: t !== en._.ALBUM && s ? (0, u.bk)({ playlist: s }) : void 0,
                                                                        track: (0, T.vU)(a),
                                                                        albumDuration: l,
                                                                        albumDurationLeft: o,
                                                                    },
                                                                });
                                                            })(i),
                                                    });
                                                })(e));
                                            break;
                                        case s.t.SIMPLE_ALBUM_PROMO:
                                        case s.t.ALBUM_PROMO:
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
                                        case s.t.COLLECTION_DOWNLOADED_TRACKS:
                                            e &&
                                                'object' == typeof e &&
                                                'tracks' in e &&
                                                (a.data = ((e) => {
                                                    let t = (null == e ? void 0 : e.tracks) || [],
                                                        a = t.slice(0, 8).map((e) => (0, T.vU)(e));
                                                    return (0, r.wg)({ items: a, rawTracks: t });
                                                })(e));
                                            break;
                                        case s.t.HISTORY:
                                        case s.t.SEARCH_HISTORY:
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
                                                                                cover: t.data.cover ? (0, G.pX4)(t.data.cover) : void 0,
                                                                                vibe: (0, g.er)(t.data.wave),
                                                                            },
                                                                        })
                                                                    );
                                                                case o._.WAVE_AGENT_ITEM:
                                                                    return p(e);
                                                                case o._.NON_MUSIC_ALBUM_ITEM:
                                                                    return C({
                                                                        album: e.data.album,
                                                                        likesCount: e.data.likesCount,
                                                                        bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                    });
                                                                case o._.CLIP_ITEM:
                                                                case o._.CLIP:
                                                                    return { type: e.type, data: (0, v.SZ)({ clip: e.data.clip, artists: e.data.artists }) };
                                                                default:
                                                                    return;
                                                            }
                                                        })
                                                        .filter((e) => e);
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case s.t.COLLECTION_KIDS:
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
                                                                return C({
                                                                    album: e.data.album,
                                                                    likesCount: e.data.likesCount,
                                                                    bookmateOptionRequired: e.data.bookmateOptionRequired,
                                                                });
                                                        }
                                                    });
                                                    return (0, r.wg)({ items: t });
                                                })(e));
                                            break;
                                        case s.t.ARTIST_CONCERTS:
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
                                        case s.t.ARTIST_POPULAR_TRACKS:
                                            e && 'object' == typeof e && 'tracks' in e && e.tracks && (a.data = (0, r.wg)({ items: e.tracks.map((e) => (0, T.vU)(e)) }));
                                            break;
                                        case s.t.ARTIST_RELEASE:
                                            e &&
                                                'object' == typeof e &&
                                                'release' in e &&
                                                e.release &&
                                                (a.data = ((e) => {
                                                    let { album: t, artists: a, releaseDate: i, trailer: s } = e.release;
                                                    return { album: (0, n.sK)({ album: t, artists: a, trailer: s, releaseDate: i }), releaseDate: i };
                                                })(e));
                                            break;
                                        case s.t.FAMILIAR_YOU:
                                            e &&
                                                'object' == typeof e &&
                                                (a.data = (0, r.wg)({
                                                    vibeTrackCount: null == (S = e.wave) ? void 0 : S.trackCount,
                                                    collectionTrackCount: null == (E = e.collection) ? void 0 : E.trackCount,
                                                    collectionAlbumCount: null == (N = e.collection) ? void 0 : N.albumCount,
                                                }));
                                            break;
                                        case s.t.ARTIST_PICK:
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
                                        case s.t.ARTIST_UPCOMING_RELEASE:
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
                                        case s.t.CONCERT_PLACE:
                                            'object' == typeof e &&
                                                null !== e &&
                                                'map' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.metroStations ? e.metroStations.map(eK.P5) : null;
                                                    return (0, r.wg)({ place: e.place, city: e.city, address: e.address, metroStations: t, map: e.map });
                                                })(e));
                                            break;
                                        case s.t.COLLECTION_WAVE_AGENT:
                                            e && 'object' == typeof e && 'wave' in e && 'agent' in e && (a.data = (0, r.wg)({ vibe: (0, g.lb)(e.wave, e.agent) }));
                                            break;
                                        case s.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS:
                                            e &&
                                                'object' == typeof e &&
                                                'artists' in e &&
                                                (a.data = ((e) => {
                                                    let t = e.artists.map((e) => {
                                                        let t = e.items
                                                            .map((e) => {
                                                                switch (e.type) {
                                                                    case o._.MENU_ITEM:
                                                                        return ep(e);
                                                                    case o._.WAVE_AGENT_ITEM:
                                                                        return p(e);
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
                                    var s, l;
                                    e.tabs.loadingState = G.GuX.PENDING;
                                    let i =
                                        (null == (l = ((yield a.getBlock({ source: t })) || {}).tabs)
                                            ? void 0
                                            : l.map((e) => (0, r.wg)({ id: e.id, title: e.title, subtitle: e.subtitle, covers: e.covers }))) || [];
                                    null == (s = e.tabs.data) ||
                                        s.forEach((e, t) => {
                                            let a = i.find((t) => t.title === e.meta.title);
                                            e.data = a || i[t];
                                        }),
                                        (e.tabs.loadingState = G.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = G.GuX.REJECT);
                                }
                            }),
                            async prefetchBlocks(a) {
                                var i, s, l;
                                let r = null != a ? a : 0,
                                    o = [];
                                (null == (i = e.meta) ? void 0 : i.source) && o.push(t.getTabData(e.meta.source)),
                                    null == (s = e.upperBlocks) ||
                                        s.forEach((e) => {
                                            r > 0 && ((0, eS.v)(e.meta) || ei(e.type)) && (r--, o.push(t.getBlock(e)));
                                        }),
                                    null == (l = e.tabs.data) ||
                                        l.forEach((e) => {
                                            e.blocks.slice(0, r).forEach((e) => {
                                                ((0, eS.v)(e.meta) || ei(e.type)) && o.push(t.getBlock(e));
                                            });
                                        }),
                                    o.length > 0 && (await Promise.allSettled(o));
                            },
                            getChildrenSkeleton: (0, r.L3)(function* (t) {
                                let { childrenLandingResource: a, modelActionsLogger: l } = (0, r._$)(e),
                                    { experiments: n } = (0, r.Zn)(e);
                                try {
                                    e.loadingState = G.GuX.PENDING;
                                    let l = yield a.getSkeleton(t),
                                        d = n.checkExperiment(G.zal.WebNextWaveAgentExperiment, 'on'),
                                        c = ((e, t) => {
                                            let a = { loadingState: G.GuX.RESOLVE, isLoading: !1 };
                                            return (
                                                (a.meta = { selectedTabIndex: 0 }),
                                                (a.tabs = {
                                                    loadingState: G.GuX.RESOLVE,
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
                                                                            l,
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
                                                                                    a = d ? s.t.EDITORIAL_WAVES_AGENT : s.t.EDITORIAL_WAVES;
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
                                                                                                    var t, a, i, s, l, o;
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
                                                                                                            null == (l = e.data.data) || null == (s = l.station)
                                                                                                                ? void 0
                                                                                                                : s.name,
                                                                                                        backgroundImageUrl:
                                                                                                            'avatars.mds.yandex.net/get-music-misc/34161/custom-wave-default-waves-background.image/%%',
                                                                                                        seeds: [null != (o = e.data.blockEntityDataId) ? o : ''],
                                                                                                        colors: { average: n },
                                                                                                        agent: (0, g.KU)(e.data.data.agent),
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: a });
                                                                            }
                                                                            case i.PROMOTIONS:
                                                                                if ((l = e.entities) && l[0] && 'promoId' in l[0].data) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: s.t.PROMOTIONS,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i, s, l;
                                                                                                    return (0, r.wg)({
                                                                                                        featureId: null != (t = e.data.promoId) ? t : '',
                                                                                                        title: null != (a = e.data.title) ? a : '',
                                                                                                        subtitle: null != (i = e.data.subtitle) ? i : '',
                                                                                                        imageUrl: null != (s = e.data.image) ? s : '',
                                                                                                        weblink: null != (l = e.data.url) ? l : '',
                                                                                                    });
                                                                                                }),
                                                                                            })),
                                                                                    });
                                                                                }
                                                                                return (0, r.wg)({ ...c, type: s.t.PROMOTIONS });
                                                                            case i.EDITORIAL_PLAYLISTS:
                                                                                if ((n = e.entities) && n[0] && 'artists' in n[0].data) {
                                                                                    let t;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: s.t.NON_MUSIC_EDITORIAL_COMPILATION,
                                                                                        data:
                                                                                            ((t = e.entities),
                                                                                            (0, r.wg)({
                                                                                                items: t.map((e) => {
                                                                                                    var t, a, i;
                                                                                                    let s =
                                                                                                            e.data.type && Object.values(en._).includes(e.data.type)
                                                                                                                ? e.data.type
                                                                                                                : void 0,
                                                                                                        l =
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
                                                                                                            type: s,
                                                                                                            likesCount: e.data.likesCount,
                                                                                                            isAvailable: null == (i = e.data.available) || i,
                                                                                                            coverUri: e.data.coverUri,
                                                                                                            availableForPremiumUsers: e.data.availableForPremiumUsers,
                                                                                                            availableForOptions: e.data.availableForOptions,
                                                                                                            genre: e.data.genre,
                                                                                                            bestAlbumTracks: e.data.bests,
                                                                                                            bookmateOptionRequired: l,
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
                                                                                        type: s.t.NON_MUSIC_EDITORIAL_COMPILATION,
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
                                                                                return (0, r.wg)({ ...c, type: s.t.NON_MUSIC_EDITORIAL_COMPILATION });
                                                                            case i.PLAYLIST_WITH_TRACKS:
                                                                                if (eo(e.entities) && e.entities[0]) {
                                                                                    var m, u;
                                                                                    return (0, r.wg)({
                                                                                        ...c,
                                                                                        type: s.t.OPEN_PLAYLIST,
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
                                                                                return (0, r.wg)({ ...c, type: s.t.OPEN_PLAYLIST });
                                                                        }
                                                                    })(e, t),
                                                                ),
                                                        },
                                                    ],
                                                }),
                                                (0, r.wg)(a)
                                            );
                                        })(l, { isWaveAgentEnabled: d });
                                    c && ((e.id = l.category), (e.title = l.title), (e.meta = (0, r.wg)(c.meta)), (e.tabs.data = (0, r.wg)(c.tabs.data))),
                                        e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.RESOLVE);
                                } catch (t) {
                                    l.error(t), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.REJECT);
                                }
                            }),
                            getSkeleton: (0, r.L3)(function* (a, i) {
                                let { landingResource: s, modelActionsLogger: l } = (0, r._$)(e);
                                if (e.loadingState !== G.GuX.PENDING)
                                    try {
                                        e.loadingState = G.GuX.PENDING;
                                        let l = yield s.getSkeleton(a),
                                            o = ew(null == l ? void 0 : l.blocks);
                                        o &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.RESOLVE);
                                    } catch (t) {
                                        l.error(t), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.REJECT);
                                    }
                            }),
                            getArtistSkeleton: (0, r.L3)(function* (a, i) {
                                let { artistsResource: s, modelActionsLogger: l } = (0, r._$)(e);
                                if (e.loadingState !== G.GuX.PENDING)
                                    try {
                                        e.loadingState = G.GuX.PENDING;
                                        let l = yield s.getSkeleton(a),
                                            o = ew(null == l ? void 0 : l.blocks);
                                        o &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            void 0 !== o.tabs && (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.RESOLVE);
                                    } catch (t) {
                                        l.error(t), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.REJECT);
                                    }
                            }),
                            getConcertSkeleton: (0, r.L3)(function* (a, i) {
                                let { concertsResource: s, modelActionsLogger: l } = (0, r._$)(e);
                                if (e.loadingState !== G.GuX.PENDING)
                                    try {
                                        e.loadingState = G.GuX.PENDING;
                                        let l = yield s.getSkeleton(a),
                                            o = ew(null == l ? void 0 : l.blocks);
                                        o &&
                                            ((e.id = l.id),
                                            (e.title = l.title),
                                            (e.meta = (0, r.wg)(o.meta)),
                                            (e.upperBlocks = (0, r.wg)(o.upperBlocks)),
                                            void 0 !== o.tabs && (e.tabs.data = (0, r.wg)(o.tabs.data)),
                                            yield t.prefetchBlocks(null == i ? void 0 : i.preloadBlocksCount)),
                                            e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.RESOLVE);
                                    } catch (t) {
                                        l.error(t), e.loadingState !== G.GuX.IDLE && (e.loadingState = G.GuX.REJECT);
                                    }
                            }),
                            reset() {
                                (e.loadingState = G.GuX.IDLE), (e.meta = null), e.tabs.reset(), (e.upperBlocks = null);
                            },
                        };
                        return t;
                    });
            a(14170);
            var aY = a(62277),
                aG = a(84359),
                aW = a(7333),
                aX = a(94124),
                aF = a(25743),
                aH = a(52239),
                az = a(4111),
                a$ = a(99057),
                aq = a(34282);
        },
        6789: (e) => {
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
        7333: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => c });
            var i = a(54486),
                s = a(61910),
                l = a(43350),
                r = a(80156),
                o = a(83252),
                n = a(80585);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: s,
                        containerClassName: d,
                        headerClassName: c,
                        meta: m,
                        data: u,
                        headingVariant: _,
                        className: g,
                        ...p
                    } = e;
                    return (0, i.jsx)(n.OY, {
                        className: g,
                        ...p,
                        isShimmerVisible: a,
                        isShimmerActive: s,
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
                                              objectType: l.ky.Album,
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
                c = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        7809: (e) => {
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
        8008: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        11090: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { l: () => i }),
                (function (e) {
                    (e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab');
                })(i || (i = {}));
        },
        12110: (e) => {
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
        13991: (e) => {
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
        14170: (e, t, a) => {
            'use strict';
            a.d(t, { Concert: () => C });
            var i = a(54486),
                s = a(50420),
                l = a(61910),
                r = a(43426),
                o = a(43350),
                n = a(8817),
                d = a(62443),
                c = a(58360),
                m = a(6971),
                u = a(39610),
                _ = a(97800),
                g = a(77217),
                p = a(83252),
                b = a(66417),
                v = a.n(b),
                A = (function (e) {
                    return (e.SPACE = 'Space'), (e.ENTER = 'Enter'), e;
                })(A || {});
            let C = (e) => {
                let { concert: t } = e,
                    {
                        title: a,
                        datetime: b,
                        city: A,
                        place: C,
                        contentRating: T,
                        cover: I,
                        dataSessionId: h,
                        rank: L,
                        isCashbackExperimentEnabled: y,
                        cashbackTitle: S,
                    } = t,
                    { formatDate: E } = (0, r.A)(),
                    { ref: N, intersectionPropertyId: j } = (0, p.nMI)(),
                    x = (0, p.NKK)(),
                    { state: k, toggleTrue: R, toggleFalse: f } = (0, d.e)(!1),
                    { experiments: P } = (0, p.Pjs)(),
                    { href: w } = (0, p.uvd)('/concert/:concertId', { params: { concertId: t.id } }),
                    K = (0, p.ZpR)(w),
                    O = P.checkExperiment(p.zal.WebNextConcertPage, 'on'),
                    M = (0, l.useMemo)(() => {
                        if (y && S)
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.q, { children: E(b, (0, p.fS8)()) }),
                                    (0, i.jsxs)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: v().descriptionContainer,
                                        children: [
                                            (0, i.jsx)(_.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: v().description,
                                                children: C,
                                            }),
                                            (0, i.jsx)(_.Caption, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: v().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            T &&
                                                (0, i.jsx)(_.Caption, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: v().description,
                                                    children: T,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)(g.mi, { className: v().cashback, title: S }),
                                ],
                            });
                        let e = [];
                        return (
                            b && e.push(E(b, (0, p.fS8)())),
                            T && e.push(T),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: v().description,
                                        children: C,
                                    }),
                                    (0, i.jsxs)(u.q, { children: [E(b, (0, p.fS8)()), ' ', T] }),
                                    (0, i.jsx)(_.Caption, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: v().description,
                                        'aria-hidden': !0,
                                        children: e.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [S, T, b, E, y, C]),
                    D = (0, l.useCallback)(
                        (e) => {
                            x({ to: o.QT.ConcertPurchaseScreen }), R(), null == e || e.stopPropagation();
                        },
                        [R, x],
                    ),
                    B = (0, n.c)((e) => {
                        if (!O) return void D(e);
                        K(e);
                    }),
                    V = (0, l.useCallback)(
                        (e) => {
                            ('Space' === e.code || 'Enter' === e.code) && (e.preventDefault(), B());
                        },
                        [B],
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(m.Paper, {
                            className: v().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: a, s: i, l: s } = (0, p.g8k)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0) 40%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.1) 43%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.2) 46%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.3) 49%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.4) 52%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.5) 55%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.6) 58%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.7) 61%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.8) 64%,\n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 0.9) 67%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 1) 70%, \n            hsla(')
                                        .concat(a, 'deg, ')
                                        .concat(i, '%, ')
                                        .concat(s, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == I ? void 0 : I.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: B,
                            onKeyDown: V,
                            ref: N,
                            'data-intersection-property-id': j,
                            children: [
                                (0, i.jsx)(c.Image, {
                                    className: v().cover,
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
                                        className: (0, s.$)(v().index, v().title),
                                        'aria-hidden': !0,
                                        children: L,
                                    }),
                                (0, i.jsxs)('div', {
                                    className: v().meta,
                                    children: [
                                        (0, i.jsx)(_.Heading, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, s.$)(v().title, v().concertTitle),
                                            children: a,
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: v().textContainer,
                                            children: [
                                                b &&
                                                    (0, i.jsx)(g.dE, {
                                                        datetime: b,
                                                        className: v().date,
                                                        monthClassName: v().description,
                                                        dayClassName: v().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, i.jsxs)('div', {
                                                    className: v().info,
                                                    children: [
                                                        (0, i.jsx)(_.Caption, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: v().title,
                                                            children: A,
                                                        }),
                                                        M,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(g.hW, { dataSessionId: h, isOpened: k, onOpen: R, onClose: f }),
                    ],
                });
            };
        },
        15136: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        17390: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { E: () => i }),
                (function (e) {
                    (e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW');
                })(i || (i = {}));
        },
        17813: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        20645: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        22142: (e) => {
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
        22243: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        24188: (e, t, a) => {
            'use strict';
            a.d(t, { Q$: () => I, Ux: () => A, wj: () => N, LW: () => m, rA: () => c });
            var i = a(44282),
                s = a(27510),
                l = a(83252),
                r = a(4885),
                o = a(61910),
                n = a(8817);
            let d = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: a, gap: i, containerRef: s, overscan: c = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.Pjs)(),
                        { contentScrollRef: u } = (0, l.gKY)(),
                        _ = (0, o.useRef)(new Map()),
                        g = (0, o.useRef)(void 0),
                        p = {
                            count: t,
                            gap: i,
                            estimateSize: (e) => {
                                let t = _.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: c,
                            initialRect: d,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, s, u),
                        },
                        b = (0, r.XW)(p),
                        v = (0, r.Te)({ ...p, getScrollElement: () => u, initialOffset: null == u ? void 0 : u.scrollTop }),
                        A = m ? b : v,
                        C = (0, n.c)(() => {
                            A.measure();
                        });
                    return (
                        (0, o.useEffect)(() => {
                            g.current ||
                                (g.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== _.current.get(a) && (_.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C();
                                }));
                        }, [C]),
                        { virtualizer: A, resizeObserver: g.current }
                    );
                },
                m = (e) => {
                    let {
                            count: t,
                            getEstimateRowSize: a,
                            rowGap: r,
                            columnGap: o,
                            minColumnWidth: n,
                            maxColumnWidth: d,
                            minColumnCount: m,
                            maxColumnCount: u,
                            containerRef: _,
                        } = e,
                        { rowCount: g, columnCount: p } = (0, l.E11)({
                            totalCount: t,
                            columnGap: null != o ? o : 0,
                            minColumnCount: m,
                            maxColumnWidth: d,
                            minColumnWidth: n,
                            maxColumnCount: u,
                            containerRef: _,
                        }),
                        { virtualizer: b, resizeObserver: v } = c({ count: g, getEstimateSize: a, gap: r, containerRef: _ }),
                        A = (0, i.A)(
                            Array.from({ length: t }, (e, t) => t),
                            p,
                        ),
                        C = (0, s.L)(() => {
                            var e, t;
                            if (!b.range) return null;
                            let a = null == (e = A[b.range.startIndex]) ? void 0 : e.at(0),
                                i = null == (t = A[b.range.endIndex]) ? void 0 : t.at(-1);
                            return void 0 !== a && void 0 !== i ? { startIndex: a, endIndex: i } : null;
                        });
                    return { virtualizer: b, rowResizeObserver: v, indices: A, columnCount: p, visibleRange: C };
                };
            var u = a(54486),
                _ = a(28303),
                g = a(67648),
                p = a(50420),
                b = a(15136),
                v = a.n(b);
            let A = (0, _.PA)((e) => {
                let { indices: t, virtualItem: a, renderItemByIndex: i, columnClassName: s, className: l, resizeObserver: r, scrollMargin: n } = e,
                    d = (0, o.useRef)(null),
                    c = t[a.index],
                    m = { '--virtual-grid-row-vertical-offset': ''.concat(a.start - n, 'px') };
                return (
                    (0, o.useEffect)(() => {
                        let e = d.current;
                        if (e)
                            return (
                                null == r || r.observe(e),
                                () => {
                                    null == r || r.unobserve(e);
                                }
                            );
                    }, [r]),
                    (0, u.jsx)('div', {
                        'data-index': a.index,
                        ref: d,
                        style: m,
                        className: (0, p.$)(v().root, l),
                        children: null == c ? void 0 : c.map((e) => (0, u.jsx)('div', { className: s, children: i(e) }, ''.concat(a.key, '_').concat(e))),
                    })
                );
            });
            var C = a(97712),
                T = a.n(C);
            let I = (0, _.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: s,
                        minColumnCount: l = 2,
                        minColumnWidth: r,
                        maxColumnWidth: n,
                        maxColumnCount: d,
                        renderItemByIndex: c,
                        onChangeRange: _,
                    } = e,
                    [p, b] = (0, g.d)(),
                    {
                        virtualizer: v,
                        rowResizeObserver: C,
                        columnCount: I,
                        indices: h,
                    } = m({
                        count: t,
                        rowGap: a,
                        columnGap: i,
                        getEstimateRowSize: s,
                        minColumnCount: l,
                        minColumnWidth: r,
                        maxColumnWidth: n,
                        maxColumnCount: d,
                        containerRef: p,
                    });
                (0, o.useEffect)(() => {
                    !v.isScrolling && v.range && (null == _ || _(v.range, I));
                }, [_, v.isScrolling, v.range, I]);
                let L = { '--virtual-grid-height': ''.concat(v.getTotalSize(), 'px'), '--virtual-grid-column-count': I };
                return (0, u.jsx)('div', {
                    ref: b,
                    style: L,
                    className: T().root,
                    children: v.getVirtualItems().map((e) =>
                        (0, u.jsx)(
                            A,
                            {
                                className: T().row,
                                columnClassName: T().column,
                                virtualItem: e,
                                resizeObserver: C,
                                indices: h,
                                renderItemByIndex: c,
                                scrollMargin: v.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
            var h = a(85272),
                L = a.n(h);
            let y = (e) => {
                let { item: t, scrollMargin: a, resizeObserver: i, renderItemByIndex: s } = e,
                    [l, r] = (0, g.d)();
                (0, o.useEffect)(
                    () => (
                        l && i && i.observe(l),
                        () => {
                            l && i && i.unobserve(l);
                        }
                    ),
                    [l, i],
                );
                let n = { transform: 'translate3d(0, '.concat(t.start - a, 'px, 0)') };
                return (0, u.jsx)('div', { 'data-index': t.index, className: L().root, ref: r, style: n, children: s(t.index) }, t.key);
            };
            var S = a(30048),
                E = a.n(S);
            let N = (e) => {
                let { count: t, getEstimateRowSize: a, renderItemByIndex: i, onChangeRange: s } = e,
                    [l, r] = (0, g.d)(),
                    { virtualizer: n, resizeObserver: d } = c({ count: t, getEstimateSize: a, containerRef: l, overscan: 3 });
                (0, o.useEffect)(() => {
                    !n.isScrolling && n.range && s && s(n.range);
                }, [s, n.isScrolling, n.range]);
                let m = n.getTotalSize(),
                    _ = n.getVirtualItems(),
                    p = n.options.scrollMargin;
                return (0, u.jsx)('div', {
                    className: E().root,
                    style: { height: ''.concat(m, 'px') },
                    ref: r,
                    children: _.map((e) => (0, u.jsx)(y, { item: e, scrollMargin: p, resizeObserver: d, renderItemByIndex: i }, e.key)),
                });
            };
        },
        25743: (e, t, a) => {
            'use strict';
            a.d(t, { Promotions: () => y });
            var i = a(54486),
                s = a(50420),
                l = a(61910),
                r = a(43350),
                o = a(15209),
                n = a(81203),
                d = a(83252),
                c = a(80585),
                m = a(58360),
                u = a(6971),
                _ = a(97800),
                g = a(63463),
                p = a.n(g);
            let b = (e) => {
                let { promotion: t } = e,
                    { ref: a, intersectionPropertyId: o } = (0, d.nMI)(),
                    n = (0, d.NKK)(),
                    g = (0, l.useCallback)(() => {
                        n({ to: r.QT.Link });
                    }, [n]);
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(p().root, p().card),
                    ref: a,
                    'data-intersection-property-id': o,
                    children: [
                        (0, i.jsx)(c.N_, {
                            className: p().coverLink,
                            href: t.weblink,
                            onClick: g,
                            children: (0, i.jsx)(u.Paper, {
                                className: p().cover,
                                radius: 'm',
                                withShadow: !0,
                                children: (0, i.jsx)(m.Image, {
                                    className: p().image,
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
                            className: p().meta,
                            children: [
                                (0, i.jsx)(c.N_, {
                                    className: p().titleLink,
                                    href: t.weblink,
                                    onClick: g,
                                    children: (0, i.jsx)(_.Caption, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, i.jsx)(_.Caption, {
                                    className: p().subtitle,
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
            var v = a(17813),
                A = a.n(v),
                C = a(22674),
                T = a(76024),
                I = a.n(T);
            let h = (e) => {
                    let { isActive: t, withHeadingShimmer: a } = e;
                    return (0, i.jsxs)('div', {
                        className: I().root,
                        children: [
                            (0, i.jsx)(C.Shimmer, { isActive: t, className: I().cover, radius: 'l' }),
                            (0, i.jsxs)('div', {
                                className: I().meta,
                                children: [
                                    a && (0, i.jsx)(C.Shimmer, { isActive: t, className: I().heading, radius: 's' }),
                                    (0, i.jsx)(C.Shimmer, { isActive: t, className: I().title, radius: 's' }),
                                    (0, i.jsx)(C.Shimmer, { isActive: t, className: I().subtitle, radius: 's' }),
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
                            containerClassName: g,
                            headerClassName: p,
                            headingVariant: v,
                            className: C,
                            ...T
                        } = e,
                        I = (0, l.useId)(),
                        L = (0, l.useRef)(null),
                        y = (0, l.useMemo)(() => {
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
                                              children: (0, i.jsx)(b, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == u ? void 0 : u.items, m, a]);
                    return (0, i.jsxs)('section', {
                        className: (0, s.$)(A().root, C),
                        ref: t,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: p,
                                labeledForId: I,
                                title: _.title,
                                controls: (0, i.jsx)(c.X9, { className: A().controls, carouselRef: L }),
                                headingVariant: v,
                            }),
                            (0, i.jsx)(n.Carousel, { className: g, ref: L, itemClassName: (0, s.$)(A().item, A().important), 'aria-labelledby': I, children: y }),
                        ],
                    });
                },
                y = (0, l.forwardRef)((e, t) => (0, i.jsx)(L, { forwardRef: t, ...e }));
        },
        27574: (e, t, a) => {
            'use strict';
            a.d(t, { MixesGridMixCard: () => g });
            var i = a(54486),
                s = a(50420),
                l = a(28303),
                r = a(61910),
                o = a(31500),
                n = a(58360),
                d = a(6971),
                c = a(97800),
                m = a(80585),
                u = a(52494),
                _ = a.n(u);
            let g = (0, l.PA)((e) => {
                var t;
                let { className: a, title: l, weblink: u, linkClassName: g, covers: p, coverSize: b = 100, captionVariant: v = 'div' } = e,
                    A = (0, r.useMemo)(() => {
                        var e;
                        if (null == p || null == (e = p[0]) ? void 0 : e.color) return { '--subcover-background-color': p[0].color };
                    }, [p]);
                return (0, i.jsx)(m.N_, {
                    href: u,
                    className: (0, s.$)(_().link, g),
                    ...(0, o.Am)(o.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        radius: 'm',
                        style: A,
                        className: (0, s.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().plate,
                                ...(0, o.Am)(o.OA.mix.MIX_CARD_PLATE),
                                children: [
                                    (0, i.jsx)('div', { className: _().subcover, ...(0, o.Am)(o.OA.mix.MIX_CARD_SUBCOVER) }),
                                    (0, i.jsx)(n.Image, {
                                        src: null == p || null == (t = p[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: b,
                                        ...(0, o.Am)(o.OA.mix.MIX_CARD_COVER),
                                    }),
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: v,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, o.Am)(o.OA.mix.MIX_CARD_HEADER),
                                    children: l,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        27906: (e, t, a) => {
            'use strict';
            a.d(t, { NZ: () => o.MixCard, f: () => r, Ju: () => s });
            var i = a(93064);
            let s = (e) => {
                var t;
                return {
                    id: e.id,
                    title: e.title,
                    weblink: null != (t = e.action.weblink) ? t : '',
                    covers: (0, i.wg)(e.covers || []),
                    imagesLayoutType: e.style.imagesLayoutType,
                };
            };
            var l = a(41704);
            let r = i.gK.model('MixItem', {
                id: i.gK.string,
                title: i.gK.string,
                weblink: i.gK.string,
                covers: i.gK.maybe(i.gK.array(i.gK.string)),
                imagesLayoutType: i.gK.enumeration(Object.values(l.R)),
            });
            var o = a(64409);
        },
        29206: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
        29468: (e, t, a) => {
            'use strict';
            a.d(t, { MapBlock: () => C });
            var i = a(54486),
                s = a(28303),
                l = a(43426),
                r = a(43350),
                o = a(8817),
                n = a(58360),
                d = a(97800),
                c = a(83252),
                m = a(80585),
                u = a(61910),
                _ = a(15209),
                g = a(79367),
                p = a.n(g),
                b = a(73097),
                v = a.n(b);
            let A = (0, s.PA)((e) => {
                    let { title: t, colors: a } = e;
                    return (0, i.jsxs)(d.Caption, {
                        size: 'm',
                        variant: 'span',
                        className: v().station,
                        children: [
                            (0, i.jsx)('div', {
                                className: v().stationColors,
                                children: a.map((e, t) => (0, i.jsx)('span', { className: v().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                C = (0, s.PA)((e) => {
                    var t, a, s;
                    let { data: g } = e,
                        { place: b, city: v, address: C, map: T } = g,
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
                        { formatMessage: h } = (0, l.A)(),
                        { href: L, target: y } = ((e) => {
                            let { theme: t } = (0, c.DPo)();
                            return (0, c.uvd)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (s = null == g || null == (t = g.map) ? void 0 : t.url) ? s : ''),
                        S = (0, c.NKK)(),
                        { ref: E, intersectionPropertyId: N } = (0, c.nMI)(),
                        j = (0, o.c)(() => {
                            S({ to: r.QT.Link, deepLink: L });
                        });
                    return (0, i.jsxs)('div', {
                        ref: E,
                        'data-intersection-property-id': N,
                        className: p().root,
                        children: [
                            (0, i.jsx)(d.Heading, { size: 'm', variant: 'h3', className: p().heading, children: b }),
                            (0, i.jsx)(m.N_, {
                                onClick: j,
                                'aria-label': h({ id: 'entity-names.map-url' }),
                                href: L,
                                className: p().linkContainer,
                                target: y,
                                children: (0, i.jsx)(n.Image, {
                                    createUrlReplacer: I,
                                    className: p().mapImage,
                                    alt: b,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == T ? void 0 : T.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: p().addressContainer,
                                children: [
                                    (0, i.jsx)(d.Caption, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        className: p().address,
                                        children: ''.concat(v, ', ').concat(C),
                                    }),
                                    (0, i.jsx)('div', {
                                        'aria-label': h({ id: 'entity-names.metro-stations' }),
                                        className: p().metroStations,
                                        children: null == (a = g.groupedMetroStations) ? void 0 : a.map((e, t) => (0, i.jsx)(A, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        29475: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        29715: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        30048: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        31879: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        32156: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
            };
        },
        33519: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        34195: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        34282: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => p, k: () => g });
            var i = a(54486),
                s = a(50420),
                l = a(61910),
                r = a(43350),
                o = a(81203),
                n = a(76866),
                d = a(83252),
                c = a(90372),
                m = a.n(c);
            let u = (e) => {
                    let { forwardRef: t, items: a, itemClassName: l, containerClassName: c, ariaLabelledBy: u } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: c,
                        itemClassName: (0, s.$)(m().item, m().important, l),
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
                    let { forwardRef: t, isActive: a, itemClassName: l, containerClassName: r, ariaLabelledBy: d, length: c } = e;
                    return (0, i.jsx)(o.Carousel, {
                        ref: t,
                        className: r,
                        itemClassName: (0, s.$)(m().item, m().important, l),
                        'aria-labelledby': d,
                        children: Array.from({ length: c }, (e, t) => (0, i.jsx)(n.Eb, { isActive: a }, t)),
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e })),
                p = (0, l.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        35863: (e) => {
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
        36311: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        37645: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        40492: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        41704: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { R: () => i }),
                (function (e) {
                    (e.RADIAL = 'RADIAL'), (e.STACK = 'STACK');
                })(i || (i = {}));
        },
        42167: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        42827: (e) => {
            e.exports = { root: 'SearchHistory_root__0z_bV', fallback: 'SearchHistory_fallback____oTN', button: 'SearchHistory_button__LBJeT' };
        },
        42922: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        44547: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        45779: (e) => {
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
        45825: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        46758: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            let i = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        48771: (e) => {
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
        52239: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => _ });
            var i = a(54486),
                s = a(61910),
                l = a(43350),
                r = a(60049),
                o = a(80156),
                n = a(55616),
                d = a(83909),
                c = a(83252),
                m = a(80585);
            let u = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: s,
                        containerClassName: u,
                        headerClassName: _,
                        meta: g,
                        data: p,
                        headingVariant: b,
                        className: v,
                        ...A
                    } = e;
                    return (0, i.jsx)(m.OY, {
                        className: v,
                        ...A,
                        isShimmerVisible: a,
                        isShimmerActive: s,
                        headerClassName: _,
                        containerClassName: u,
                        title: g.title,
                        description: g.description,
                        viewAllActionLink: g.viewAllActionLink,
                        ref: t,
                        headingVariant: b,
                        children:
                            null == p
                                ? void 0
                                : p.items.map((e, t) => {
                                      switch (e.type) {
                                          case r._.ALBUM_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: l.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: p.items.length,
                                                      children: (0, i.jsx)(o.aX, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.ARTIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: l.ky.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: p.items.length,
                                                      children: (0, i.jsx)(n.ao, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case r._.PLAYLIST_ITEM:
                                              return (0, i.jsx)(
                                                  c.Bki,
                                                  {
                                                      objectType: l.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: p.items.length,
                                                      children: (0, i.jsx)(d.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        52494: (e) => {
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
        53403: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        54861: (e) => {
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
        54895: (e) => {
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
        56259: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        59699: (e) => {
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
        60916: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        61313: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        61715: (e, t, a) => {
            'use strict';
            a.d(t, { fc: () => o, Gd: () => n.MapBlock, rI: () => d.ShimmerMapBlock, P5: () => i });
            let i = (e) => ({ title: e.title, lineColor: e['line-color'] });
            var s = a(93064);
            let l = s.gK.model('MapUrl', { imageUrl: s.gK.string, url: s.gK.string }),
                r = s.gK.model('MetroStation', { title: s.gK.string, lineColor: s.gK.string }),
                o = s.gK
                    .model('BaseMap', {
                        place: s.gK.string,
                        city: s.gK.string,
                        address: s.gK.string,
                        metroStations: s.gK.maybeNull(s.gK.array(r)),
                        map: s.gK.maybeNull(l),
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
            var n = a(29468),
                d = a(69573);
        },
        62277: (e, t, a) => {
            'use strict';
            a.d(t, { EntitiesCarousel: () => p });
            var i = a(54486),
                s = a(28303),
                l = a(61910),
                r = a(43350),
                o = a(60049),
                n = a(80156),
                d = a(55616),
                c = a(83909),
                m = a(76866),
                u = a(83252),
                _ = a(80585);
            let g = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: g,
                            headerClassName: p,
                            meta: b,
                            data: v,
                            headingVariant: A,
                            className: C,
                            isLoaded: T,
                            shouldSendAnalyticsOnLoaded: I,
                            hasSentAnalyticsOnLoaded: h,
                            setHasSentAnalyticsOnLoaded: L,
                            ...y
                        } = e,
                        S = (0, u.fBs)();
                    return (
                        (0, l.useEffect)(() => {
                            I && !h && T && (S(), L(!0));
                        }, [h, T, S, L, I]),
                        (0, i.jsx)(_.OY, {
                            className: C,
                            ...y,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: g,
                            headerClassName: p,
                            title: b.title,
                            description: b.description,
                            viewAllActionLink: b.viewAllActionLink,
                            ref: t,
                            headingVariant: A,
                            children:
                                null == v
                                    ? void 0
                                    : v.items.map((e, t) => {
                                          switch (e.type) {
                                              case o._.LIKED_PLAYLIST_ITEM:
                                                  return (0, i.jsx)(
                                                      u.Bki,
                                                      {
                                                          objectType: r.ky.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: v.items.length,
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
                                                          objectsCount: v.items.length,
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
                                                          objectsCount: v.items.length,
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
                                                          objectsCount: v.items.length,
                                                          children: (0, i.jsx)(m.yi, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                          }
                                      }),
                        })
                    );
                }),
                p = (0, l.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        63463: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
            };
        },
        64409: (e, t, a) => {
            'use strict';
            a.d(t, { MixCard: () => g });
            var i = a(54486),
                s = a(50420),
                l = a(28303),
                r = a(31500),
                o = a(41704),
                n = a(58360),
                d = a(6971),
                c = a(97800),
                m = a(80585),
                u = a(7809),
                _ = a.n(u);
            let g = (0, l.PA)((e) => {
                let { className: t, title: a, weblink: l, covers: u = [], coverSize: g = 100, imagesLayoutType: p, headingVariant: b = 'h3' } = e;
                return (0, i.jsx)(m.N_, {
                    href: l,
                    ...(0, r.Am)(r.OA.mix.MIX_CARD),
                    children: (0, i.jsxs)(d.Paper, {
                        className: (0, s.$)(_().root, t),
                        radius: 'l',
                        children: [
                            (0, i.jsx)('div', {
                                className: _().header,
                                children: (0, i.jsx)(c.Caption, {
                                    variant: b,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: _().title,
                                    lineClamp: 2,
                                    ...(0, r.Am)(r.OA.mix.MIX_CARD_HEADER),
                                    children: a,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: (0, s.$)(_().covers, { [_().covers_radial]: p === o.R.RADIAL, [_().covers_stack]: p === o.R.STACK }),
                                ...(0, r.Am)(r.OA.mix.MIX_CARD_COVERS),
                                children: [
                                    (0, i.jsx)(n.Image, {
                                        src: u[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_3),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_2),
                                    }),
                                    (0, i.jsx)(n.Image, {
                                        src: u[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: _().cover,
                                        size: g,
                                        ...(0, r.Am)(r.OA.mix.MIX_CARD_COVER_IMAGE_1),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        66049: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        66149: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        66417: (e) => {
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
        69422: (e) => {
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
        69573: (e, t, a) => {
            'use strict';
            a.d(t, { ShimmerMapBlock: () => n });
            var i = a(54486),
                s = a(28303),
                l = a(22674),
                r = a(72685),
                o = a.n(r);
            let n = (0, s.PA)((e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: o().root,
                    children: [
                        (0, i.jsx)(l.Shimmer, { className: o().heading, radius: 's', isActive: t }),
                        (0, i.jsx)(l.Shimmer, { className: o().mapImage, radius: 's', isActive: t }),
                        (0, i.jsx)(l.Shimmer, { className: o().address, radius: 's', isActive: t }),
                        (0, i.jsx)(l.Shimmer, { className: o().metroStations, radius: 's', isActive: t }),
                    ],
                });
            });
        },
        69731: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        72107: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(35620);
            let s = [i.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, i.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                l = (e) => s.includes(e.type);
        },
        72685: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        73097: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        73665: (e) => {
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
        75468: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { n: () => i }),
                (function (e) {
                    (e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab');
                })(i || (i = {}));
        },
        75987: (e) => {
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
        76015: (e) => {
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
        76024: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        77561: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        77653: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(54486),
                s = a(50420),
                l = a(28303),
                r = a(61910),
                o = a(27510),
                n = a(83252),
                d = a(80585),
                c = a(52733),
                m = a(29475),
                u = a.n(m);
            let _ = (e) => {
                let { filter: t, tabsState: a, index: l, isSticky: o, ...m } = e,
                    _ = (0, n.DCU)();
                return (
                    (0, r.useEffect)(() => {
                        _({ tabId: t.id, tabPos: l + 1, isTabSelectedByDefault: t.id === c.Q1.ALL });
                    }, [t.id, l, _]),
                    (0, i.jsx)(d.oz, { tabIndex: o ? -1 : 0, className: (0, s.$)(u().root, { [u().root_selected]: l === a.value }), title: t.name, value: l, ...m }, l)
                );
            };
            var g = a(29715),
                p = a.n(g);
            let b = (0, l.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: l } = e;
                return (0, i.jsx)(d.wI, {
                    className: (0, s.$)(p().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, i.jsx)(d.zr, { className: (0, s.$)(p().root, l), shimmerClassName: p().shimmer, count: 3, isActive: a }),
                });
            });
            var v = a(66049),
                A = a.n(v);
            let C = { [n.u40.Desktop]: { start: 40, end: 20 }, [n.u40.Mobile]: { start: 40, end: 40 } },
                T = { [n.u40.Desktop]: { start: 40, end: 20 }, [n.u40.Mobile]: { start: 20, end: 50 } },
                I = (0, l.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: l,
                            forwardRef: c,
                            carouselClassName: m,
                            shimmerClassName: u,
                            isSticky: g,
                            items: p,
                            isShimmerVisible: v,
                            isShimmerActive: I,
                            skipSearchCheck: h = !1,
                        } = e,
                        {
                            playlist: L,
                            settings: { isMobile: y },
                        } = (0, n.Pjs)(),
                        { playlistStickyFiltersRef: S, playlistStaticFiltersRef: E, contentScrollRef: N } = (0, n.gKY)(),
                        j = null != p ? p : L.filters.items,
                        x = (0, o.L)(() =>
                            (0, i.jsx)(d.wI, {
                                ref: c,
                                className: (0, s.$)(A().carousel, m),
                                ...t,
                                onTabChange: a,
                                children: null == j ? void 0 : j.map((e, a) => (0, i.jsx)(_, { filter: e, tabsState: t, index: a, isSticky: g }, e.id)),
                            }),
                        ),
                        k = (0, r.useCallback)(() => {
                            E && S && (E.scrollLeft = S.scrollLeft);
                        }, [E, S]),
                        R = (0, r.useCallback)(() => {
                            E && S && (S.classList.add(A().carousel_noSmooth), (S.scrollLeft = E.scrollLeft), S.classList.remove(A().carousel_noSmooth));
                        }, [E, S]),
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
                                g
                                    ? (null == S || S.addEventListener('scroll', k, t), null == S || S.addEventListener('resize', k, t))
                                    : y
                                      ? (window.addEventListener('scroll', w, t), window.addEventListener('resize', w, t))
                                      : (null == N || N.addEventListener('scroll', w, t), null == N || N.addEventListener('resize', w, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [g, N, S, w, k, y]),
                        (null != v ? v : L.filters.isShimmerVisible)
                            ? (0, i.jsx)(b, { isActive: null == I || I, shimmerClassName: u })
                            : j && 0 !== j.length && (h || L.search.isNeededToLoad)
                              ? (0, i.jsx)(d.FY, { className: l, carouselElement: x, ref: c, scrollPadding: g ? T : C })
                              : void 0
                    );
                }),
                h = (0, r.forwardRef)((e, t) => (0, i.jsx)(I, { forwardRef: t, ...e }));
        },
        78791: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        79367: (e) => {
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
        80937: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        82227: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        83407: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        84359: (e, t, a) => {
            'use strict';
            a.d(t, { MixesGridBlock: () => g });
            var i = a(54486),
                s = a(50420),
                l = a(61910),
                r = a(43350),
                o = a(15209),
                n = a(3095),
                d = a(83252),
                c = a(80585),
                m = a(82227),
                u = a.n(m);
            let _ = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            headerClassName: m,
                            meta: _,
                            data: g,
                            headingVariant: p,
                            isShimmerActive: b,
                            containerClassName: v,
                            isShimmerVisible: A,
                            className: C,
                            ...T
                        } = e,
                        I = (0, l.useId)(),
                        h = (0, l.useMemo)(() => {
                            if (A) {
                                var e;
                                return (0, i.jsx)(c.eI, {
                                    itemClassName: (0, s.$)(u().item, u().important, u().shimmerWithSubcover),
                                    isActive: b,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = _.source) ? void 0 : e.count,
                                });
                            }
                            return null == g
                                ? void 0
                                : g.items.map((e, t) =>
                                      (0, i.jsx)(
                                          d.Bki,
                                          {
                                              objectType: r.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: g.items.length,
                                              children: (0, i.jsx)(
                                                  n.Vf,
                                                  {
                                                      linkClassName: (0, s.$)(u().item, u().important),
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
                        }, [b, A, null == g ? void 0 : g.items, null == (t = _.source) ? void 0 : t.count]);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: C,
                        ...(0, o.getDataAttrFromProps)(T),
                        children: [
                            (0, i.jsx)(c.Tw, {
                                className: (0, s.$)(u().header, m),
                                labeledForId: I,
                                title: _.title,
                                viewAllActionLink: _.viewAllActionLink,
                                headingVariant: p,
                            }),
                            (0, i.jsx)('div', { className: (0, s.$)(u().mixesGrid, v), children: h }),
                        ],
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        84683: (e) => {
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
        85272: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        87043: (e) => {
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
        90372: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        90937: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        91228: (e) => {
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
        92437: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { z: () => i }),
                (function (e) {
                    (e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
                })(i || (i = {}));
        },
        94124: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => u });
            var i = a(54486),
                s = a(61910),
                l = a(43350),
                r = a(60049),
                o = a(80156),
                n = a(83909),
                d = a(83252),
                c = a(80585);
            let m = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: s,
                        containerClassName: m,
                        headerClassName: u,
                        meta: _,
                        data: g,
                        headingVariant: p,
                        className: b,
                        ...v
                    } = e;
                    return (0, i.jsx)(c.OY, {
                        className: b,
                        ...v,
                        isShimmerVisible: a,
                        isShimmerActive: s,
                        headerClassName: u,
                        containerClassName: m,
                        title: _.title,
                        description: _.description,
                        viewAllActionLink: _.viewAllActionLink,
                        ref: t,
                        headingVariant: p,
                        children:
                            null == g
                                ? void 0
                                : g.items.map((e, t) =>
                                      e.type === r._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: l.ky.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: g.items.length,
                                                    children: (0, i.jsx)(o.aX, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, i.jsx)(
                                                d.Bki,
                                                {
                                                    objectType: l.ky.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: g.items.length,
                                                    children: (0, i.jsx)(n.B6, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        97433: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        97712: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        99057: (e, t, a) => {
            'use strict';
            a.d(t, { Skeleton: () => sl });
            var i,
                s = a(54486),
                l = a(50420),
                r = a(28303),
                o = a(97396),
                n = a(61910),
                d = a(31500),
                c = a(8817),
                m = a(85360),
                u = a(51321),
                _ = a(83252),
                g = a(80585),
                p = a(46758),
                b = a(72107),
                v = a(27510),
                A = a(8008),
                C = a.n(A),
                T = a(35620),
                I = a(43350),
                h = a(43426),
                L = a(47713),
                y = a(63585);
            !(function (e) {
                (e.TOP = 'top'), (e.CENTER = 'center');
            })(i || (i = {}));
            var S = a(6971),
                E = a(97800),
                N = a(46423),
                j = a(63695),
                x = a(3892),
                k = a.n(x);
            let R = (0, r.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: a } = (0, h.A)(),
                    { ref: r, intersectionPropertyId: o } = (0, _.nMI)(),
                    n = (0, _.NKK)(),
                    m = (0, _.ZpR)(t.albumUrl),
                    u = (0, N.cp)({ album: t.album, callback: m }),
                    p = (0, _.brA)(),
                    b = (0, _.PT7)(),
                    { from: v } = (0, _.fyy)({ contextId: t.album.id, contextType: y.K.Album }),
                    { isPlaying: A, togglePlay: C } = (0, _.Dx4)({
                        playContextParams: {
                            contextData: { type: y.K.Album, meta: { id: t.album.id }, from: v, utmLink: (0, _.ZQO)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    T = (0, c.c)((e) => {
                        t.setClicked(), n({ to: I.QT.AlbumScreen }), u(e);
                    }),
                    x = (0, c.c)(() => {
                        t.setClicked(), C();
                    }),
                    R = (0, N.cp)({ album: t.album, callback: x }),
                    f = (0, c.c)(() => {
                        b() || (R(), p(!A));
                    }),
                    P = a({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    w = t.coverContentMode === i.TOP;
                return (0, s.jsxs)('div', {
                    className: k().root,
                    ref: r,
                    'data-intersection-property-id': o,
                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD),
                    children: [
                        (0, s.jsxs)(S.Paper, {
                            className: k().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER),
                            children: [
                                (0, s.jsx)(g.N_, {
                                    className: k().artistLink,
                                    href: t.albumUrl,
                                    onClick: T,
                                    'aria-label': P,
                                    children: (0, s.jsx)(g.BW, {
                                        className: (0, l.$)(k().artistImage, { [k().artistImage_withTopPosition]: w }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, s.jsx)(S.Paper, {
                                    className: k().albumCover,
                                    radius: 'xs',
                                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER),
                                    children: (0, s.jsx)(g.N_, {
                                        className: k().albumLink,
                                        href: t.albumUrl,
                                        onClick: T,
                                        'aria-label': P,
                                        children: (0, s.jsx)(g.BW, {
                                            className: k().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, s.jsx)(g.DM, {
                                    className: k().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: A,
                                    onClick: f,
                                    iconClassName: k().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, s.jsx)(E.Caption, {
                                        className: k().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, s.jsx)(L.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)('div', {
                            className: k().meta,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: k().titleContainer,
                                    ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE),
                                    children: [
                                        (0, s.jsx)(E.Caption, {
                                            className: k().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, s.jsx)(g.N_, {
                                                className: k().titleLink,
                                                href: t.albumUrl,
                                                onClick: T,
                                                ...(0, d.Am)(d.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK),
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, s.jsx)(g.Nq, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, s.jsx)(j.iQ, { className: k().artists, linkClassName: k().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var f = a(15209),
                P = a(81203),
                w = a(88834),
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
                    { callback: a, visibleTime: i, threshold: s } = e;
                return (0, m.Gv)(
                    (e, s) => {
                        e.isIntersecting &&
                            (t = setTimeout(() => {
                                a(), s.disconnect();
                            }, i)),
                            e.isIntersecting || clearTimeout(t);
                    },
                    { threshold: s },
                );
            };
            var V = a(29206),
                U = a.n(V);
            let Y = (e) => {
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
                            ...p
                        } = e,
                        { intersectionPropertyId: b, ref: v } = ((e) => {
                            let { forwardedRef: t, isLoaded: a, data: i, setOutdated: s } = e,
                                { report: l, reporting: r } = null != i ? i : {},
                                { ref: o, intersectionPropertyId: d } = ((e) => {
                                    let { params: t, isLoaded: a } = e,
                                        i = (0, n.useRef)(null),
                                        s = (0, n.useId)(),
                                        l = (0, n.useMemo)(() => {
                                            if (a) return t.map(B);
                                        }, [a, t]);
                                    return (
                                        (0, n.useEffect)(
                                            () => (
                                                null == l ||
                                                    l.forEach((e) => {
                                                        i.current && e.observe(i.current);
                                                    }),
                                                () => {
                                                    null == l ||
                                                        l.forEach((e) => {
                                                            e.disconnect();
                                                        });
                                                }
                                            ),
                                            [l],
                                        ),
                                        { intersectionPropertyId: s, ref: i }
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
                                                    e && (null == l || l(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime: null != (t = null == r ? void 0 : r.blockImpression.timeMs) ? t : 2100,
                                                callback: () => {
                                                    let e = null == r ? void 0 : r.blockImpression.url;
                                                    e && (null == l || l(e)), s();
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime: null != (a = null == r ? void 0 : r.adImpressions.timeMs) ? a : 2100,
                                                callback: () => {
                                                    let e = null == r ? void 0 : r.adImpressions.url;
                                                    e && (null == l || l(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        l,
                                        null == r ? void 0 : r.adImpressions.timeMs,
                                        null == r ? void 0 : r.adImpressions.url,
                                        null == r ? void 0 : r.blockImpression.timeMs,
                                        null == r ? void 0 : r.blockImpression.url,
                                        null == r ? void 0 : r.blockRender.timeMs,
                                        null == r ? void 0 : r.blockRender.url,
                                        s,
                                    ]),
                                });
                            return { intersectionPropertyId: d, ref: D([o, t]) };
                        })({ forwardedRef: t, data: d, isLoaded: a, setOutdated: i }),
                        A = (0, n.useRef)(null);
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(U().root, u),
                        ref: v,
                        'data-intersection-property-id': b,
                        ...(0, f.getDataAttrFromProps)(p),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: r,
                                title: c.title,
                                controls: (0, s.jsx)(g.X9, { className: U().controls, carouselRef: A }),
                                headingVariant: m,
                            }),
                            (0, s.jsx)(P.Carousel, { className: o, ref: A, itemClassName: (0, l.$)(U().item, U().important), children: _ }),
                        ],
                    });
                },
                G = (0, n.forwardRef)((e, t) => (0, s.jsx)(Y, { forwardRef: t, ...e })),
                W = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, s.jsx)(G, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == a ? void 0 : a.items.length,
                                              children: (0, s.jsx)(R, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                X = (0, n.forwardRef)((e, t) => (0, s.jsx)(W, { forwardRef: t, ...e }));
            var F = a(73633),
                H = a(6789),
                z = a.n(H);
            let $ = (0, r.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            album: i,
                            description: r,
                            trailerButton: o,
                            entityName: m,
                            onClick: u,
                            albumUrl: p,
                            from: b,
                            utmLink: v,
                            coverColor: A,
                            ...C
                        } = e,
                        T = (0, _.ZpR)(p),
                        L = (0, _.PT7)(),
                        j = (0, _.brA)(),
                        { formatMessage: x } = (0, h.A)(),
                        { isPlaying: k, togglePlay: R } = (0, _.Dx4)({
                            playContextParams: { contextData: { type: y.K.Album, meta: { id: i.id }, from: b, utmLink: v }, loadContextMeta: !0 },
                        }),
                        P = (0, c.c)(() => {
                            null == u || u(), R();
                        }),
                        w = (0, N.cp)({ album: i, callback: T }),
                        K = (0, N.cp)({ album: i, callback: P }),
                        O = (0, _.NKK)(),
                        M = (0, c.c)((e) => {
                            (0, F.P)(e, z().ripple), e.stopPropagation(), null == u || u(), O({ to: I.QT.AlbumScreen }), w(e);
                        }),
                        D = (0, c.c)(() => {
                            L() || (K(), j(!k));
                        }),
                        B = (0, n.useMemo)(() => {
                            let e;
                            if (A) {
                                let { h: t, s: a } = (0, _.g8k)(A);
                                e = 'hsl('.concat(t, ', ').concat(a, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == i ? void 0 : i.averageColor };
                        }, [null == i ? void 0 : i.averageColor, A]),
                        V = m ? ''.concat(m, ' ').concat(i.title) : i.title;
                    return (0, s.jsxs)(S.Paper, {
                        radius: 'l',
                        className: (0, l.$)(z().root, t),
                        ref: a,
                        style: B,
                        ...(0, f.getDataAttrFromProps)(C),
                        children: [
                            (0, s.jsx)(g.N_, { href: p, className: z().paperLink, onClick: M, 'aria-label': V }),
                            (0, s.jsx)(g.BW, {
                                className: z().image,
                                src: i.coverUri,
                                alt: x({ id: 'entity-names.album-name' }, { albumName: i.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, s.jsxs)('div', {
                                className: z().info,
                                children: [
                                    (0, s.jsx)(E.Caption, {
                                        className: z().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': V,
                                        ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD_TITLE),
                                        children: i.title,
                                    }),
                                    r &&
                                        (0, s.jsx)(E.Caption, {
                                            className: z().description,
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
                            (0, s.jsxs)('div', {
                                className: z().container,
                                children: [
                                    i.explicitDisclaimer &&
                                        (0, s.jsx)(g.Nq, {
                                            className: z().explicitMark,
                                            containerClassName: z().explicitMarkContainer,
                                            getDescriptionTexts: i.getDescriptionTexts,
                                            variant: i.explicitDisclaimer,
                                        }),
                                    o,
                                    (0, s.jsx)(g.DM, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: z().button,
                                        iconClassName: z().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: k,
                                        onClick: D,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                q = (0, n.forwardRef)((e, t) => (0, s.jsx)($, { forwardRef: t, ...e })),
                J = (0, r.PA)((e) => {
                    let { promo: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        { from: l } = (0, _.fyy)({ contextId: t.album.id, contextType: y.K.Album });
                    return (0, s.jsx)(q, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, _.ZQO)(t.reportingProperties),
                        from: l,
                        ref: a,
                        'data-intersection-property-id': i,
                        description: t.album.artistNames,
                        ...(0, d.Am)(d.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD),
                    });
                }),
                Z = (e) => {
                    let { forwardRef: t, data: a, ...i } = e;
                    return (0, s.jsx)(G, {
                        ref: t,
                        data: a,
                        ...i,
                        children:
                            null == a
                                ? void 0
                                : a.items.map((e, t) =>
                                      (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == a ? void 0 : a.items.length,
                                              children: (0, s.jsx)(J, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                Q = (0, n.forwardRef)((e, t) => (0, s.jsx)(Z, { forwardRef: t, ...e }));
            var ee = a(77217);
            let et = (0, r.PA)((e) => {
                    var t, a, i, l;
                    let {
                            forwardRef: r,
                            isShimmerVisible: o,
                            isShimmerActive: n,
                            containerClassName: d,
                            headerClassName: c,
                            meta: m,
                            data: u,
                            headingVariant: g,
                            className: p,
                            ...b
                        } = e,
                        { artist: v, concert: A, experiments: C } = (0, _.Pjs)(),
                        T = null != (i = null != (a = v.id) ? a : A.leadArtistId) ? i : '',
                        h = C.checkExperiment(_.zal.WebNextConcertsIdentityFullRedesign, 'on'),
                        L = h ? ee.MU : ee.ZH;
                    return (0, s.jsx)(_.Bki, {
                        objectType: I.ky.Shortcut,
                        objectId: String(T),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (l = null == u || null == (t = u.items) ? void 0 : t.length) ? l : 0,
                        children: (0, s.jsx)(ee.BD, {
                            ref: r,
                            artistId: String(T),
                            title: m.title,
                            viewAllActionLink: m.viewAllActionLink,
                            isLoading: o || n,
                            headingVariant: g,
                            className: p,
                            headerClassName: c,
                            containerClassName: d,
                            ...(0, f.getDataAttrFromProps)(b),
                            children:
                                null == u
                                    ? void 0
                                    : u.items.map((e, t) => {
                                          var a, i;
                                          let {
                                              objectPosX: l,
                                              objectPosY: r,
                                              objectsCount: o,
                                          } = (0, _.$tp)({ index: t, count: null != (i = null == (a = u.items) ? void 0 : a.length) ? i : 0, itemsCountPerColumn: 2 });
                                          return (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: l,
                                                  objectPosY: r,
                                                  objectsCount: o,
                                                  children: (0, s.jsx)(ee.VN, {
                                                      artistId: String(T),
                                                      concert: e,
                                                      meta: (0, s.jsx)(L, { concert: e }),
                                                      shouldShowMask: h,
                                                  }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                ea = (0, n.forwardRef)((e, t) => (0, s.jsx)(et, { forwardRef: t, ...e }));
            var ei = a(39610),
                es = a(73665),
                el = a.n(es);
            let er = (0, r.PA)((e) => {
                    var t, a, i;
                    let { isShimmerVisible: l, isShimmerActive: r, headerClassName: o, data: n, headingVariant: d } = e,
                        { ref: c, intersectionPropertyId: m } = (0, _.nMI)(),
                        { playlist: u, artists: p } = n || {},
                        { artist: b } = (0, _.Pjs)(),
                        v = !!(null == (t = b.meta) ? void 0 : t.artist.isAvailable),
                        A = null == (a = b.meta) ? void 0 : a.artist.coverUri,
                        C = null == (i = b.meta) ? void 0 : i.artist.name;
                    return (0, s.jsx)(g.Tw, {
                        ref: c,
                        'data-intersection-property-id': m,
                        coverUrl: null == u ? void 0 : u.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == u ? void 0 : u.url,
                        title: null == u ? void 0 : u.title,
                        controls: !1,
                        coverContainerClassName: el().cover,
                        shimmerCoverClassName: el().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: l,
                        isShimmerActive: r,
                        headingVariant: d,
                        className: o,
                        subTitle: (0, s.jsxs)('div', {
                            className: el().subTitle,
                            children: [
                                (0, s.jsx)(ei.q, {
                                    children: (0, s.jsx)(E.Heading, {
                                        variant: 'h4',
                                        children: (0, s.jsx)(L.A, { id: 'page.artist-pick-aria-label', values: { artistName: C } }),
                                    }),
                                }),
                                (0, s.jsx)(E.Caption, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: el().text,
                                    'aria-hidden': !0,
                                    children: (0, s.jsx)(L.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, s.jsx)(S.Paper, {
                                    radius: 'round',
                                    className: el().smallCoverContainer,
                                    children: (0, s.jsx)(g.BW, {
                                        fit: 'cover',
                                        src: A,
                                        size: 50,
                                        className: el().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: v,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                C &&
                                    (0, s.jsx)(E.Caption, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: el().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: C,
                                    }),
                            ],
                        }),
                        description: (0, s.jsx)(j.iQ, {
                            artists: p,
                            linkClassName: el().artistLink,
                            spoilerClassName: el().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, s.jsx)(L.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eo = (0, r.PA)((e) => {
                    var t, a;
                    let { forwardRef: i, className: l, ...r } = e;
                    return (0, s.jsx)('section', {
                        ref: i,
                        className: l,
                        ...(0, f.getDataAttrFromProps)(r),
                        children: (0, s.jsx)(_.Bki, {
                            objectType: I.ky.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId: null != (a = null == (t = r.data) ? void 0 : t.playlist.id) ? a : '',
                            children: (0, s.jsx)(er, { ...r }),
                        }),
                    });
                }),
                en = (0, n.forwardRef)((e, t) => (0, s.jsx)(eo, { forwardRef: t, ...e }));
            var ed = a(21365),
                ec = a(31879),
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
                        p = (function () {
                            var e;
                            let { artist: t, concert: a } = (0, _.Pjs)();
                            return null != (e = t.id) ? e : a.leadArtistId;
                        })(),
                        { from: b, utmLink: v } = (0, _.fyy)({ contextType: y.K.Artist, contextId: p });
                    return null === p
                        ? null
                        : (0, s.jsx)(g.$2, {
                              className: m,
                              ref: t,
                              shimmer: (0, s.jsx)(g.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                              maxColumnsCount: g.DI.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              carouselClassName: r,
                              carouselItemClassName: (0, l.$)(em().item, em().important),
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
                                            let { objectPosX: i, objectPosY: l, objectsCount: r } = (0, _.$tp)({ index: t, count: n.items.length });
                                            return (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectId: e.id,
                                                    objectType: I.ky.Track,
                                                    objectPosX: i,
                                                    objectPosY: l,
                                                    objectsCount: r,
                                                    children: (0, s.jsx)(ed.Kt, {
                                                        track: e,
                                                        playContextParams:
                                                            ((a = e.id),
                                                            n && p
                                                                ? {
                                                                      contextData: { type: y.K.Artist, meta: { id: p }, from: b, utmLink: v },
                                                                      queueParams: { index: t, entityId: a },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: y.K.Artist, meta: { id: '' }, from: b, utmLink: v } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                e_ = (0, n.forwardRef)((e, t) => (0, s.jsx)(eu, { forwardRef: t, ...e }));
            var eg = a(80156);
            let ep = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: l,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, v.L)(() =>
                            a || !n
                                ? (0, s.jsx)(g.Vt, { className: l, isActive: i })
                                : (0, s.jsx)(_.Bki, {
                                      objectType: I.ky.Album,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, s.jsx)(eg.aX, { className: l, album: n.album }),
                                  }),
                        );
                    return (0, s.jsxs)('section', {
                        className: c,
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [(0, s.jsx)(g.Tw, { className: r, title: o.title, headingVariant: d, titleLineClamp: 1 }), u],
                    });
                },
                eb = (0, n.forwardRef)((e, t) => (0, s.jsx)(ep, { forwardRef: t, ...e })),
                ev = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: l,
                            headerClassName: r,
                            meta: o,
                            data: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        u = (0, v.L)(() =>
                            a || !n
                                ? (0, s.jsx)(g.Vt, { className: l, isActive: i })
                                : (0, s.jsx)(_.Bki, {
                                      objectType: I.ky.UpcomingAlbum,
                                      objectId: String(n.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, s.jsx)(eg.M3, { className: l, upcomingAlbum: n.album }),
                                  }),
                        );
                    return (0, s.jsxs)('section', {
                        className: c,
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [(0, s.jsx)(g.Tw, { className: r, title: o.title, headingVariant: d, titleLineClamp: 1 }), u],
                    });
                },
                eA = (0, n.forwardRef)((e, t) => (0, s.jsx)(ev, { forwardRef: t, ...e })),
                eC = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: l,
                            meta: r,
                            data: o,
                            headerClassName: n,
                            headingVariant: d,
                            className: c,
                            ...m
                        } = e,
                        { from: u, utmLink: p } = (0, _.fyy)({ contextType: y.K.Playlist, contextId: null == o ? void 0 : o.playlist.id }),
                        b = (0, _.iZJ)({ playlistId: null == o ? void 0 : o.playlist.id });
                    return (0, s.jsx)(_._Fn, {
                        sourceContextData: b,
                        children: (0, s.jsx)(g.$2, {
                            className: c,
                            ref: t,
                            shimmer: (0, s.jsx)(g.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                            maxColumnsCount: g.DI.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            carouselClassName: l,
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
                                          let { objectPosX: a, objectPosY: i, objectsCount: l } = (0, _.$tp)({ index: t, count: o.items.length });
                                          return (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: I.ky.Track,
                                                  objectPosX: a,
                                                  objectPosY: i,
                                                  objectsCount: l,
                                                  children: (0, s.jsx)(ed.QB, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          o
                                                              ? {
                                                                    contextData: { type: y.K.Playlist, meta: { id: o.playlist.id }, from: u, utmLink: p },
                                                                    queueParams: { index: o.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: y.K.Playlist, meta: { id: '' }, from: u, utmLink: p } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eT = (0, n.forwardRef)((e, t) => (0, s.jsx)(eC, { forwardRef: t, ...e }));
            var eI = a(65779);
            let eh = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                eL = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, data: l, meta: r, containerClassName: o, headerClassName: n, className: d, ...c } = e;
                    return (0, s.jsx)(eI.KR, {
                        className: d,
                        ref: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        clips: eh(null == l ? void 0 : l.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: o,
                        headerClassName: n,
                        ...c,
                    });
                },
                ey = (0, n.forwardRef)((e, t) => (0, s.jsx)(eL, { forwardRef: t, ...e }));
            var eS = a(40492),
                eE = a.n(eS);
            let eN = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o, headingVariant: n } = e,
                        { formatMessage: d } = (0, h.A)();
                    return (0, s.jsxs)('div', {
                        className: eE().root,
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': d({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, s.jsx)('div', { className: (0, l.$)(eE().text, o), children: (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                ej = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (null == n ? void 0 : n.isEmptyBlock)
                        ? (0, s.jsx)(eN, {
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              containerClassName: l,
                              headerClassName: r,
                              headingVariant: d,
                          })
                        : (0, s.jsx)(g.OY, {
                              className: c,
                              ...m,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              headerClassName: r,
                              containerClassName: l,
                              title: o.title,
                              description: o.description,
                              viewAllActionLink: o.viewAllActionLink,
                              ref: t,
                              headingVariant: d,
                              children:
                                  null == n
                                      ? void 0
                                      : n.items.map((e, t) =>
                                            (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: n.items.length,
                                                    children: (0, s.jsx)(eg.aX, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                ex = (0, n.forwardRef)((e, t) => (0, s.jsx)(ej, { forwardRef: t, ...e }));
            var ek = a(60049),
                eR = a(45779),
                ef = a.n(eR),
                eP = a(75468),
                ew = a(4319),
                eK = a.n(ew);
            let eO = (e) => {
                    let { tab: t, areBothTabsEmpty: a } = e,
                        i = (0, n.useMemo)(() => {
                            switch (t) {
                                case eP.n.ALBUM:
                                    return (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-albums' });
                                case eP.n.PRESAVED_ALBUM:
                                    return (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, s.jsx)('div', { className: (0, l.$)(eK().root, { [eK().root_oneEmptyTab]: !a, [eK().root_twoEmptyTabs]: a }), children: i });
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
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = ''.concat(A, ' ').concat(A, '-description'),
                        L = (0, u.useTabsState)((null == c ? void 0 : c.activeIndexTab) || 0),
                        y = (0, n.useMemo)(() => {
                            var e;
                            return (null == c || null == (e = c.tabs[L.value]) ? void 0 : e.items.length) === 0;
                        }, [null == c ? void 0 : c.tabs, L.value]),
                        S = (0, n.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              !(null == c ? void 0 : c.areBothTabsEmpty) &&
                                                  (0, s.jsx)(P.Carousel, {
                                                      className: (0, l.$)(ef().carouselEmpty, r),
                                                      itemClassName: (0, l.$)(ef().item, ef().important),
                                                      tabIndex: -1,
                                                      children: (0, g.km)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, s.jsx)(eO, { tab: e.type, areBothTabsEmpty: null == c ? void 0 : c.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, s.jsx)(P.Carousel, {
                                          ref: C,
                                          itemClassName: (0, l.$)(ef().item, ef().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: e.items.map((t, a) => {
                                              switch (t.type) {
                                                  case ek._.ALBUM_ITEM:
                                                      return (0, s.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType: I.ky.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, s.jsx)(eg.aX, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case ek._.PRESAVED_ALBUM_ITEM:
                                                      return (0, s.jsx)(
                                                          _.Bki,
                                                          {
                                                              objectType: I.ky.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, s.jsx)(eg.M3, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [h, r, null == c ? void 0 : c.areBothTabsEmpty],
                        ),
                        E = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(P.Carousel, {
                                          ref: C,
                                          itemClassName: (0, l.$)(ef().item, ef().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: (0, g.km)({ isActive: i, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, s.jsx)(u.TabPanel, { name: t, value: L.value, elementId: T, className: ef().tabPanel, children: S(e) }, e.id),
                                        ),
                            [a, null == c ? void 0 : c.tabs, r, h, i, L.value, T, S],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(ef().root, p, { [ef().root_withControls]: !y }),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(b),
                        children: [
                            (0, s.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, s.jsx)(g.Tw, {
                                    className: (0, l.$)(o, ef().header, ef().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: A,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: ef().controls, carouselRef: C }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, s.jsx)(g.wI, {
                                className: (0, l.$)(r, ef().tabCarousel, ef().important),
                                isShimmerVisible: a,
                                elementId: T,
                                shimmer: (0, s.jsx)(g.zr, { isActive: i, className: (0, l.$)(r, ef().tabCarousel, ef().important), shimmerClassName: ef().tabShimmer }),
                                'aria-labelledby': A,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, s.jsx)(g.oz, { value: t, 'aria-label': e.title, title: e.title, className: (0, l.$)(ef().tab, ef().important) }, e.id),
                                          ),
                            }),
                            E,
                        ],
                    });
                }),
                eD = (0, n.forwardRef)((e, t) => (0, s.jsx)(eM, { forwardRef: t, ...e }));
            var eB = a(55616),
                eV = a(42922),
                eU = a.n(eV);
            let eY = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, s.jsxs)('div', {
                        className: eU().root,
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': n({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!a,
                            }),
                            (0, s.jsx)('div', { className: (0, l.$)(eU().text, o), children: (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                eG = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        className: o,
                        meta: n,
                        data: d,
                        headingVariant: c,
                        ...m
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, s.jsx)(eY, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: l,
                              headerClassName: r,
                          })
                        : (0, s.jsx)(g.OY, {
                              ...m,
                              className: o,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: l,
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
                                            (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, s.jsx)(eB.ao, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                eW = (0, n.forwardRef)((e, t) => (0, s.jsx)(eG, { forwardRef: t, ...e }));
            var eX = a(62443),
                eF = a(58360),
                eH = a(76866),
                ez = a(32156),
                e$ = a.n(ez);
            let eq = (e) => {
                    var t;
                    let { item: a } = e,
                        i = (0, c.c)((e) => {
                            (0, F.P)(e, e$().ripple);
                        });
                    return (0, s.jsxs)(g.N_, {
                        href: a.data.viewAllActionLink,
                        className: (0, l.$)(e$().item, e$().menuItem),
                        onClick: i,
                        children: [
                            (0, s.jsx)(eF.Image, {
                                src: null == (t = a.data.cover) ? void 0 : t.uri,
                                className: e$().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, s.jsx)(E.Caption, {
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
                eJ = (0, r.PA)((e) => {
                    let { item: t, artistId: a } = e,
                        [i, l] = (0, n.useState)(!1),
                        { state: r, setState: o } = (0, eX.e)(!1),
                        d = (0, _.PT7)(),
                        { isFreemium: m } = (0, _.XCI)(),
                        u = (0, _.brA)(),
                        p = ''.concat(_.UfI.ARTIST, '-').concat(a),
                        {
                            isPlaying: b,
                            togglePlay: A,
                            isCurrent: C,
                        } = (0, _.B0S)({ seeds: t.data.seeds, pageIdForFrom: _._Q$.RADIO, blockIdForFrom: p, parentContextId: a }),
                        T = (0, c.c)(async () => (m ? void o(!0) : A())),
                        I = (0, c.c)(() => {
                            d() ||
                                (l(!0),
                                T().finally(() => {
                                    l(!1);
                                }),
                                u(!b));
                        }),
                        h = (0, c.c)((e) => {
                            (0, F.P)(e, e$().ripple), I();
                        }),
                        L = (0, v.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, s.jsx)(eH.nr, { agent: t.data.agent, isCurrent: C, isPlaying: b, onPlayButtonClick: I, playButtonIconSize: 'm' })
                                : (0, s.jsx)(g.q1, {
                                      isCurrent: C,
                                      isPlaying: b,
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
                                (0, s.jsxs)(g.Cj, {
                                    className: e$().item,
                                    onClick: h,
                                    children: [
                                        L,
                                        (0, s.jsx)(E.Caption, {
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
                    return (0, s.jsx)(g.SU, {
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
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(e$().root, a),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case ek._.MENU_ITEM:
                                    return (0, s.jsx)(eq, { item: e }, e.key);
                                case ek._.WAVE_AGENT_ITEM:
                                    return (0, s.jsx)(eJ, { item: e, artistId: i }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var eQ = a(22674),
                e0 = a(69422),
                e1 = a.n(e0);
            let e3 = (e) => {
                    let { isActive: t, itemClassName: a, actionItemClassName: i } = e;
                    return (0, s.jsxs)('div', {
                        className: e1().root,
                        children: [
                            (0, s.jsx)(g.Vt, { isActive: t, className: a, round: !0, centered: !0 }),
                            (0, s.jsxs)('div', {
                                className: (0, l.$)(e1().actionItems, i),
                                children: [
                                    (0, s.jsxs)('div', {
                                        className: e1().actionItem,
                                        children: [
                                            (0, s.jsx)(eQ.Shimmer, { isActive: t, className: e1().actionCover, radius: 's' }),
                                            (0, s.jsxs)('div', {
                                                className: e1().actionTextContainer,
                                                children: [
                                                    (0, s.jsx)(eQ.Shimmer, { isActive: t, className: (0, l.$)(e1().actionText, e1().actionText_title), radius: 's' }),
                                                    (0, s.jsx)(eQ.Shimmer, { isActive: t, className: e1().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: e1().actionItem,
                                        children: [
                                            (0, s.jsx)(eQ.Shimmer, { isActive: t, className: e1().actionCover, radius: 'round' }),
                                            (0, s.jsxs)('div', {
                                                className: e1().actionTextContainer,
                                                children: [
                                                    (0, s.jsx)(eQ.Shimmer, { isActive: t, className: (0, l.$)(e1().actionText, e1().actionText_title), radius: 's' }),
                                                    (0, s.jsx)(eQ.Shimmer, { isActive: t, className: e1().actionText, radius: 's' }),
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
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, a) => (0, s.jsx)(e3, { ...t }, a));
                };
            var e8 = a(37645),
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
                            headingVariant: p,
                            ...b
                        } = e,
                        { formatMessage: v } = (0, h.A)(),
                        A = (0, n.useRef)(null);
                    return (0, s.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(e4().root, c),
                        ...(0, f.getDataAttrFromProps)(b),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: d,
                                title: m.title,
                                description: m.description,
                                viewAllActionLink: m.viewAllActionLink,
                                headingVariant: p,
                                controls: (0, s.jsx)(g.X9, { className: e4().controls, carouselRef: A }),
                            }),
                            (0, s.jsx)(P.Carousel, {
                                className: o,
                                ref: A,
                                children: i
                                    ? e2({
                                          isActive: r,
                                          itemClassName: (0, l.$)(e4().item, e4().important),
                                          actionItemClassName: (0, l.$)(e4().actionItem, e4().important),
                                          countWeb: null == (t = m.source) ? void 0 : t.countWeb,
                                      })
                                    : null == u
                                      ? void 0
                                      : u.artists.map((e, t) =>
                                            (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: u.artists.length,
                                                    children: (0, s.jsxs)('div', {
                                                        className: e4().itemContainer,
                                                        'aria-label': v({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, s.jsx)(eB.ao, { className: (0, l.$)(e4().item, e4().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, s.jsx)(eZ, {
                                                                className: (0, l.$)(e4().actionItem, e4().important),
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
                e5 = (0, n.forwardRef)((e, t) => (0, s.jsx)(e6, { forwardRef: t, ...e }));
            var e9 = a(97433),
                e7 = a.n(e9);
            let te = (e) => {
                    let { title: t, description: a, viewAllActionLink: i, headerClassName: r, containerClassName: o, headingVariant: n } = e,
                        { formatMessage: c } = (0, h.A)();
                    return (0, s.jsxs)('div', {
                        className: e7().root,
                        ...(0, d.Am)(d.e8.landing.COLLECTION_CLIPS),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: r,
                                title: t,
                                description: a,
                                viewAllActionLink: i,
                                'aria-label': c({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: n,
                                withDescription: !!a,
                            }),
                            (0, s.jsx)(E.Caption, {
                                className: (0, l.$)(e7().text, o),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                ...(0, d.Am)(d.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE),
                                children: (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                tt = (e) => {
                    let { forwardRef: t, containerClassName: a, headerClassName: i, meta: l, data: r, headingVariant: o, ...n } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, s.jsx)(te, {
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              containerClassName: a,
                              headerClassName: i,
                              headingVariant: o,
                          })
                        : (0, s.jsx)(ey, { ref: t, meta: l, data: r, containerClassName: a, headerClassName: i, headingVariant: o, ...n });
                },
                ta = (0, n.forwardRef)((e, t) => (0, s.jsx)(tt, { forwardRef: t, ...e }));
            var ti = a(83909),
                ts = a(52733);
            let tl = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: l,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        p = (0, n.useMemo)(() => {
                            let e =
                                null == d
                                    ? void 0
                                    : d.items.map((e, t) =>
                                          (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, s.jsx)(ti.B6, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return null == e || e.unshift((0, s.jsx)(ts.Bw, {}, 'create-playlist-card')), e;
                        }, [null == d ? void 0 : d.items]);
                    return (0, s.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: c,
                        children: p,
                    });
                }),
                tr = (0, n.forwardRef)((e, t) => (0, s.jsx)(tl, { forwardRef: t, ...e })),
                to = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            tracksContainerClassName: l,
                            headerClassName: r,
                            className: o,
                            meta: n,
                            data: d,
                            headingVariant: c,
                            ...m
                        } = e,
                        { from: u } = (0, _.fyy)(),
                        { formatMessage: p } = (0, h.A)(),
                        b = Array.isArray(null == d ? void 0 : d.rawTracks)
                            ? p({ id: 'entity-names.number-of-tracks' }, { counter: null == d ? void 0 : d.rawTracks.length })
                            : n.description;
                    return (0, s.jsx)(g.$2, {
                        className: o,
                        shimmer: (0, s.jsx)(g.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                        maxColumnsCount: g.DI.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        blockHeaderClassName: r,
                        carouselClassName: l,
                        blockHeaderTitle: n.title,
                        viewAllActionLink: n.viewAllActionLink,
                        blockHeaderDescription: b,
                        ref: t,
                        blockHeaderHeadingVariant: c,
                        withBlockHeaderDescription: !0,
                        ...m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      let a,
                                          { objectPosX: i, objectPosY: l, objectsCount: r } = (0, _.$tp)({ index: t, count: d.items.length });
                                      return (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Track,
                                              objectId: e.id,
                                              objectPosX: i,
                                              objectPosY: l,
                                              objectsCount: r,
                                              children: (0, s.jsx)(ed.Kt, {
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
                tn = (0, n.forwardRef)((e, t) => (0, s.jsx)(to, { forwardRef: t, ...e })),
                td = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, s.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
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
                                              return (0, s.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, s.jsx)(ed.wO, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case ek._.LIKED_PLAYLIST_ITEM:
                                              return (0, s.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, s.jsx)(ti.B6, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case ek._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, s.jsx)(
                                                  _.Bki,
                                                  {
                                                      objectType: I.ky.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: n.items.length,
                                                      children: (0, s.jsx)(eg.aX, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                tc = (0, n.forwardRef)((e, t) => (0, s.jsx)(td, { forwardRef: t, ...e })),
                tm = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, s.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: l,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, s.jsx)(ti.B6, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                tu = (0, n.forwardRef)((e, t) => (0, s.jsx)(tm, { forwardRef: t, ...e }));
            var t_ = a(11090),
                tg = a(59699),
                tp = a.n(tg),
                tb = a(61313),
                tv = a.n(tb);
            let tA = (e) => {
                    let { className: t } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(tv().root, t),
                        ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT),
                        children: (0, s.jsx)(L.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                tC = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: r,
                            headerClassName: o,
                            meta: d,
                            data: c,
                            headingVariant: m,
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, n.useId)(),
                        C = (0, n.useRef)(null),
                        T = (0, n.useId)(),
                        h = ''.concat(A, ' ').concat(A, '-description'),
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
                                    return (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(P.Carousel, {
                                                className: (0, l.$)(tp().carouselEmpty, r),
                                                itemClassName: (0, l.$)(tp().item, tp().important),
                                                tabIndex: -1,
                                                children: (0, g.km)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, s.jsx)(tA, {}),
                                        ],
                                    });
                                let t = e.items.map((t, a) =>
                                    (0, s.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, s.jsx)(ti.B6, { contentLinesCount: 4, playlist: t }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === t_.l.PLAYLIST_CREATED_TAB && t.unshift((0, s.jsx)(ts.Bw, { className: tp().createPlaylistCard }, 'create-playlist-card')),
                                    (0, s.jsx)(P.Carousel, {
                                        ref: C,
                                        itemClassName: (0, l.$)(tp().item, tp().important),
                                        className: r,
                                        'aria-labelledby': h,
                                        children: t,
                                    })
                                );
                            },
                            [h, r],
                        ),
                        E = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(P.Carousel, {
                                          ref: C,
                                          itemClassName: (0, l.$)(tp().item, tp().important),
                                          className: r,
                                          'aria-labelledby': h,
                                          children: (0, g.km)({ isActive: i, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.tabs.map((e, t) =>
                                            (0, s.jsx)(u.TabPanel, { name: t, value: L.value, elementId: T, className: tp().tabPanel, children: S(e) }, e.id),
                                        ),
                            [a, null == c ? void 0 : c.tabs, r, h, i, L.value, T, S],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(tp().root, p, { [tp().root_withControls]: !y }),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(b),
                        children: [
                            (0, s.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, s.jsx)(g.Tw, {
                                    className: (0, l.$)(o, tp().header, tp().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: A,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: tp().controls, carouselRef: C }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, s.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, l.$)(r, tp().tabCarousel, tp().important),
                                elementId: T,
                                shimmer: (0, s.jsx)(g.zr, { isActive: i, className: (0, l.$)(r, tp().tabCarousel, tp().important), shimmerClassName: tp().tabShimmer }),
                                'aria-labelledby': A,
                                ...L,
                                children:
                                    null == c
                                        ? void 0
                                        : c.tabs.map((e, t) =>
                                              (0, s.jsx)(g.oz, { value: t, 'aria-label': e.title, title: e.title, className: (0, l.$)(tp().tab, tp().important) }, e.id),
                                          ),
                            }),
                            E,
                        ],
                    });
                }),
                tT = (0, n.forwardRef)((e, t) => (0, s.jsx)(tC, { forwardRef: t, ...e })),
                tI = (0, r.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        className: o,
                        meta: n,
                        data: d,
                        headingVariant: c,
                        ...m
                    } = e;
                    return a || (null == d ? void 0 : d.items.length)
                        ? (0, s.jsx)(g.OY, {
                              ...m,
                              className: o,
                              isShimmerVisible: a,
                              isShimmerActive: i,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: l,
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
                                            return (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, s.jsx)(eB.NN, {
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
                        : (0, s.jsx)(eY, {
                              title: n.title,
                              description: n.description,
                              viewAllActionLink: n.viewAllActionLink,
                              containerClassName: l,
                              headerClassName: r,
                          });
                }),
                th = (0, n.forwardRef)((e, t) => (0, s.jsx)(tI, { forwardRef: t, ...e }));
            var tL = a(35863),
                ty = a.n(tL);
            let tS = (0, r.PA)((e) => {
                    var t;
                    let { containerClassName: a, meta: i, data: r, forwardRef: o, isShimmerVisible: d, isShimmerActive: c, headingVariant: m = 'h2', ...u } = e,
                        {
                            settings: { isMobile: p },
                        } = (0, _.Pjs)(),
                        { pageId: b } = (0, _.$au)(),
                        { blockIdForFrom: A } = (0, _.N8n)(),
                        { isFreemium: C } = (0, _.XCI)(),
                        [T, I] = (0, n.useState)(!1),
                        { isPlaying: h, togglePlay: y } = (0, _.B0S)({
                            seeds: null != (t = null == r ? void 0 : r.vibe.seeds) ? t : [],
                            pageIdForFrom: b,
                            blockIdForFrom: A,
                        }),
                        S = (0, _.brA)(),
                        N = (0, n.useCallback)(() => {
                            C || (y(), S(!h));
                        }, [C, y, S, h]),
                        j = (0, n.useCallback)(
                            () =>
                                (0, s.jsx)(g.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: h,
                                    onClick: N,
                                    className: ty().playButton,
                                    children: (0, s.jsx)(L.A, { id: 'player-actions.listen' }),
                                }),
                            [N, h],
                        ),
                        x = (0, v.L)(() =>
                            (0, s.jsx)(g.SU, {
                                isEnabled: C,
                                isOpened: T,
                                onOpenChange: I,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == r ? void 0 : r.vibe.stationType,
                                renderChildren: j,
                            }),
                        ),
                        k = (0, v.L)(() =>
                            d || !r
                                ? (0, s.jsxs)('div', {
                                      className: ty().root,
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: ty().shimmerContainer,
                                              children: [
                                                  (0, s.jsx)(eQ.Shimmer, {
                                                      isActive: c,
                                                      radius: 'xs',
                                                      className: (0, l.$)(ty().coverShimmer, ty().item, ty().important),
                                                  }),
                                                  p && (0, s.jsx)(eQ.Shimmer, { radius: 'l', isActive: c, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !p &&
                                              (0, s.jsxs)('div', {
                                                  className: ty().container,
                                                  children: [
                                                      (0, s.jsx)(eQ.Shimmer, { radius: 'l', isActive: c, width: 300, height: 32 }),
                                                      (0, s.jsx)(eQ.Shimmer, { radius: 'xxxl', isActive: c, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, s.jsxs)('div', {
                                      className: ty().root,
                                      children: [
                                          (0, s.jsx)(eH.yi, {
                                              vibe: r.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, l.$)(ty().item, ty().important),
                                              shouldShowAdditionals: p,
                                              additionalsLinesCount: 1,
                                          }),
                                          !p &&
                                              (0, s.jsxs)('div', {
                                                  className: ty().container,
                                                  children: [
                                                      (0, s.jsx)(E.Heading, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: ty().text,
                                                          lineClamp: 2,
                                                          variant: m,
                                                          children: null == r ? void 0 : r.vibe.title,
                                                      }),
                                                      x,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, s.jsx)('section', { ref: o, title: i.title, className: a, ...(0, f.getDataAttrFromProps)(u), children: k });
                }),
                tE = (0, n.forwardRef)((e, t) => (0, s.jsx)(tS, { forwardRef: t, ...e }));
            var tN = a(61715);
            let tj = (0, r.PA)((e) => {
                    var t, a;
                    let { forwardRef: i, containerClassName: l, isShimmerVisible: r, isShimmerActive: o, id: n, data: d, ...c } = e,
                        { concert: m } = (0, _.Pjs)(),
                        u = null != (a = null == (t = m.meta) ? void 0 : t.id) ? a : '',
                        g = (0, v.L)(() => (r ? (0, s.jsx)(tN.rI, { isActive: o }) : d ? (0, s.jsx)(tN.Gd, { data: d }) : void 0));
                    return (0, s.jsx)('section', {
                        ref: i,
                        className: l,
                        ...(0, f.getDataAttrFromProps)(c),
                        children: (0, s.jsx)(_.Bki, { objectId: u, objectType: I.ky.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: g }, n),
                    });
                }),
                tx = (0, n.forwardRef)((e, t) => (0, s.jsx)(tj, { forwardRef: t, ...e }));
            var tk = a(14170),
                tR = a(36311),
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
                            ...p
                        } = e,
                        b = (0, n.useId)(),
                        { experiments: v } = (0, _.Pjs)(),
                        A = (0, n.useRef)(null),
                        C = v.checkExperiment(_.zal.WebNextNewConcertCard, 'on'),
                        T = (0, n.useMemo)(
                            () =>
                                a
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (a, i) =>
                                              e ? (0, s.jsx)(ee.LY, { isActive: t }, i) : (0, s.jsx)(eQ.Shimmer, { isActive: t, className: tf().shimmer }, i),
                                          ))(C, i)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) =>
                                            (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: c.items.length,
                                                    children: C ? (0, s.jsx)(ee.Qb, { concert: e }) : (0, s.jsx)(tk.Concert, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a, C],
                        );
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, l.$)(tf().root, { [tf().root_withNewConcertCards]: C }, u),
                        ...(0, f.getDataAttrFromProps)(p),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: o,
                                labeledForId: b,
                                title: d.title,
                                viewAllActionLink: d.viewAllActionLink,
                                controls: (0, s.jsx)(g.X9, { className: tf().controls, carouselRef: A }),
                                headingVariant: m,
                            }),
                            (0, s.jsx)(P.Carousel, { ref: A, itemClassName: (0, l.$)(tf().item, tf().important), className: r, 'aria-labelledby': b, children: T }),
                        ],
                    });
                }),
                tw = (0, n.forwardRef)((e, t) => (0, s.jsx)(tP, { forwardRef: t, ...e }));
            var tK = a(2885),
                tO = a.n(tK),
                tM = a(5956),
                tD = a(91228),
                tB = a.n(tD);
            let tV = (e) => {
                let { className: t, title: a, subtitle: i, covers: r, link: o, type: c, withLastPlayed: m } = e,
                    u = (0, _.NKK)(),
                    p = (0, n.useMemo)(() => {
                        if (0 !== r.length)
                            return (0, s.jsx)('div', {
                                className: tB().covers,
                                ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS),
                                children: r.slice(0, 2).map((e, t) =>
                                    (0, s.jsx)(
                                        S.Paper,
                                        {
                                            className: tB().coverContainer,
                                            radius: 'xs',
                                            children: (0, s.jsx)(eF.Image, {
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
                    b = (0, n.useCallback)(() => {
                        u({ to: I.QT.Link });
                    }, [u]);
                return (0, s.jsx)(S.Paper, {
                    className: (0, l.$)(tB().root, tB()['root_'.concat(c)], { [tB().root_withCovers]: r.length > 0, [tB().root_withLastPlayed]: m }, t),
                    radius: 'l',
                    ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM),
                    children: (0, s.jsx)(g.N_, {
                        className: tB().link,
                        href: o,
                        onClick: b,
                        ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK),
                        children: (0, s.jsxs)('div', {
                            className: tB().content,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: tB().textContainer,
                                    children: [
                                        (0, s.jsxs)(E.Caption, {
                                            className: tB().title,
                                            size: 'm',
                                            variant: 'div',
                                            ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE),
                                            children: [a, (0, s.jsx)(tM.Icon, { className: tB().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        i &&
                                            (0, s.jsx)(E.Caption, {
                                                className: tB().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE),
                                                children: i,
                                            }),
                                    ],
                                }),
                                p,
                            ],
                        }),
                    }),
                });
            };
            var tU = a(1365),
                tY = a(35190),
                tG = a(54460),
                tW = a(22142),
                tX = a.n(tW);
            let tF = (0, r.PA)((e) => {
                    var t, a, i, r, o;
                    let { className: m, lastPlayed: u } = e,
                        { objectsCount: p } = (0, _.N8n)(),
                        { formatMessage: b } = (0, h.A)(),
                        { sonataState: A, continueListen: C } = (0, _.Pjs)(),
                        T = (0, _.eGp)(),
                        L = (0, tG.$4)(),
                        {
                            album: N,
                            playlist: j,
                            track: x,
                            getTrackMeta: k,
                            getPlaylistMeta: R,
                            isNeededToLoad: f,
                            isRejected: P,
                            albumDuration: w,
                            albumDurationLeft: K,
                        } = u.data,
                        { track: O, trackIndex: M, contextType: D, contextId: B, albumDuration: V, albumStreamProgress: U, trackTempStreamProgress: Y } = C,
                        G = (0, _.brA)(),
                        W = (0, _.PT7)(),
                        X = (0, n.useMemo)(() => O || x, [O, x]),
                        F = (null == (t = A.entityMeta) ? void 0 : t.isPodcast) || (null == (a = A.entityMeta) ? void 0 : a.isAudiobook),
                        H = (0, n.useCallback)(async () => {
                            let e = await k();
                            !C.track &&
                                e &&
                                (C.saveTrack({
                                    contextType: N ? y.K.Album : y.K.Playlist,
                                    contextId: N ? N.id : String(null == j ? void 0 : j.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                w && K && (C.saveAlbumDuration(w), C.albumStreamProgress.updateEndPositionSec(w - K)));
                        }, [C, N, w, K, k, null == j ? void 0 : j.id]),
                        z = (0, n.useCallback)(async () => {
                            let e = await R();
                            C.trackIndex || 'number' != typeof e || C.saveTrackIndex(e);
                        }, [R, C]);
                    (0, n.useEffect)(() => {
                        f && (H(), z());
                    }, [f, H, z]);
                    let $ = D === y.K.Album && X.mainAlbum && (null == X ? void 0 : X.mainAlbum.isAudiobook),
                        q = (0, n.useCallback)(
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
                                        i = a - ((null == Y ? void 0 : Y.endPositionSec) || 0);
                                    null == U || U.updateEndPositionSec(t + i), null == Y || Y.updateEndPositionSec(a);
                                }
                            },
                            [X.streamProgress, U, Y, $],
                        ),
                        J = $ ? (null == U ? void 0 : U.endPositionSec) || 0 : (null == (i = X.streamProgress) ? void 0 : i.endPositionSec) || 0,
                        Z = X.durationMs ? X.durationMs / 1e3 : 0,
                        Q = $ ? V || 0 : Z,
                        ee = (0, tG.mw)(J, Q),
                        et = (0, n.useMemo)(() => (0, tU.A)(q, 500), [q]),
                        { isPlaying: ea, togglePlay: ei } = ((e) => {
                            let { track: t, trackIndex: a, contextType: i, contextId: s } = e,
                                l = (0, n.useMemo)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return { type: y.K.Playlist, meta: { id: String(s) } };
                                        case y.K.Album:
                                            return { type: y.K.Album, meta: { id: Number(s) } };
                                        case y.K.Various:
                                            return { type: y.K.Various, meta: { id: Number(s) } };
                                        case y.K.Artist:
                                            return { type: y.K.Artist, meta: { id: Number(s) } };
                                        case y.K.Generative:
                                            return { type: y.K.Generative, meta: { id: Number(s) } };
                                        case y.K.Vibe:
                                            return { type: y.K.Vibe, meta: { id: String(s) } };
                                        default:
                                            return { type: y.K.Various, meta: { id: '' } };
                                    }
                                }, [i, s]),
                                { from: r, utmLink: o } = (0, _.fyy)({ contextId: l.meta.id, contextType: l.type }),
                                d = (0, v.L)(() => {
                                    switch (i) {
                                        case y.K.Playlist:
                                            return { type: y.K.Playlist, meta: { id: String(s) }, from: r, utmLink: o };
                                        case y.K.Album:
                                            return { type: y.K.Album, meta: { id: Number(s) }, from: r, utmLink: o };
                                        case y.K.Various:
                                            return { type: y.K.Various, meta: { id: Number(s) }, from: r, utmLink: o };
                                        case y.K.Artist:
                                            return { type: y.K.Artist, meta: { id: Number(s) }, from: r, utmLink: o };
                                        case y.K.Generative:
                                            return { type: y.K.Generative, meta: { id: Number(s) }, from: r, utmLink: o };
                                        case y.K.Vibe:
                                            return {
                                                type: y.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
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
                        es = (0, c.c)(() => {
                            W() || (ei(), G(!ea));
                        }),
                        el = (0, n.useMemo)(() => ({ '--color-background': X.averageColor }), [X.averageColor]);
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
                            return b({ id: 'entity-names.album-name' }, { albumName: null == (e = X.mainAlbum) ? void 0 : e.title });
                        }, [b, null == (r = X.mainAlbum) ? void 0 : r.title]),
                        ed = (0, n.useMemo)(() => ($ ? en : b({ id: 'entity-names.track-name' }, { trackName: X.title })), [b, $, en, X.title]),
                        ec = $ ? X.mainAlbum.explicitDisclaimer : X.explicitDisclaimer,
                        em = L(Q - J, !1);
                    return P
                        ? null
                        : (0, s.jsx)(
                              _.Bki,
                              {
                                  objectType: I.ky.Track,
                                  objectId: String(X.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: p,
                                  children: (0, s.jsxs)(S.Paper, {
                                      className: (0, l.$)(tX().root, m),
                                      radius: 'l',
                                      style: el,
                                      'aria-label': er,
                                      ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK),
                                      children: [
                                          (0, s.jsxs)('div', {
                                              className: tX().content,
                                              children: [
                                                  (0, s.jsx)(g.BW, {
                                                      className: (0, l.$)(tX().cover, tX().important),
                                                      src: eo,
                                                      size: 50,
                                                      alt: ed,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: X.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, s.jsxs)('div', {
                                                      className: tX().metaTrack,
                                                      children: [
                                                          (0, s.jsxs)(g.N_, {
                                                              className: tX().metaContainer,
                                                              href: null == (o = X.mainAlbum) ? void 0 : o.url,
                                                              ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK),
                                                              children: [
                                                                  (0, s.jsx)(E.Caption, {
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
                                                                      (0, s.jsx)(g.Nq, {
                                                                          getDescriptionTexts: X.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: ec,
                                                                          className: tX().explicitMark,
                                                                      }),
                                                                  (0, s.jsx)(tM.Icon, { className: tX().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, s.jsx)('div', {
                                                              className: tX().progress,
                                                              children:
                                                                  !!Q &&
                                                                  (0, s.jsxs)(s.Fragment, {
                                                                      children: [
                                                                          (0, s.jsx)(tY.q, {
                                                                              'aria-valuetext': ee,
                                                                              'aria-busy': ea && F,
                                                                              fullCircleClassName: tX().fullCircle,
                                                                              progressCircleClassName: tX().progressCircle,
                                                                              value: J,
                                                                              max: Q,
                                                                              ...(0, d.Am)(d.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS),
                                                                          }),
                                                                          (0, s.jsx)(E.Caption, {
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
                                          (0, s.jsx)(g.DM, { variant: 'filled', className: tX().playButton, isPlaying: ea && F, onClick: es, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              X.id,
                          );
                }),
                tH = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, headerClassName: r, containerClassName: o, headingVariant: d, data: c, ...m } = e,
                        { formatMessage: u } = (0, h.A)(),
                        p = (0, n.useId)(),
                        { objectsCount: b } = (0, _.N8n)(),
                        v = (0, n.useMemo)(() => {
                            if (!c || a) return Array.from({ length: 3 }, (e, t) => (0, s.jsx)(eQ.Shimmer, { className: tO().item, isActive: i }, t));
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
                                    r.push((0, s.jsx)(tF, { className: (0, l.$)(tO().item, tO().item_lastPlayed), lastPlayed: c.lastPlayed }, c.lastPlayed.type)),
                                r.push(
                                    (0, s.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: b,
                                            children: (0, s.jsx)(tV, {
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
                                    (0, s.jsx)(
                                        _.Bki,
                                        {
                                            objectType: I.ky.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: b,
                                            children: (0, s.jsx)(tV, {
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
                        }, [u, c, i, a, b]);
                    return (0, s.jsxs)('section', {
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(m),
                        children: [
                            (0, s.jsx)(g.Tw, { className: r, labeledForId: p, title: u({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: d }),
                            (0, s.jsx)('div', {
                                className: tO().blocksContainer,
                                children: (0, s.jsx)('div', { className: (0, l.$)(tO().container, o), 'aria-labelledby': p, children: v }),
                            }),
                        ],
                    });
                },
                tz = (0, n.forwardRef)((e, t) => (0, s.jsx)(tH, { forwardRef: t, ...e })),
                t$ = (e) => {
                    let { forwardRef: t, headerClassName: a, headingVariant: i, meta: l, ...r } = e;
                    return (0, s.jsx)(_.Bki, {
                        objectType: I.ky.Text,
                        objectId: String(l.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, s.jsx)('section', {
                            ref: t,
                            ...(0, f.getDataAttrFromProps)(r),
                            children: (0, s.jsx)(g.Tw, { className: a, title: l.title, headingVariant: i, viewAllActionLink: l.viewAllActionLink }),
                        }),
                    });
                },
                tq = (0, n.forwardRef)((e, t) => (0, s.jsx)(t$, { forwardRef: t, ...e }));
            var tJ = a(7981);
            let tZ = (0, r.PA)((e) => {
                    let { donation: t } = e,
                        { ref: a, intersectionPropertyId: i } = (0, _.nMI)(),
                        l = (0, tJ.Q$)()(t.url),
                        r = (0, _.ZpR)(l),
                        o = (0, _.ZpR)(t.artist.url),
                        n = (0, _.NKK)(),
                        d = (0, c.c)(() => {
                            n({ to: I.QT.ArtistScreen }), o();
                        }),
                        m = (0, c.c)(() => {
                            n({ to: I.QT.Link, deepLink: l }), r();
                        }),
                        u = (0, j.SA)({ artist: t.artist, callback: d });
                    return (0, s.jsx)(tJ.Xx, {
                        ref: a,
                        'data-intersection-property-id': i,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: u,
                        onNavigateToDonation: m,
                    });
                }),
                tQ = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: i,
                            containerClassName: l,
                            headerClassName: r,
                            meta: o,
                            data: d,
                            headingVariant: c,
                            className: m,
                            ...u
                        } = e,
                        g = (0, n.useMemo)(
                            () =>
                                !a && (null == d ? void 0 : d.items)
                                    ? d.items.map((e, t) => {
                                          let { data: a } = e;
                                          return (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Donation,
                                                  objectId: a.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: d.items.length,
                                                  children: (0, s.jsx)(tZ, { donation: a }),
                                              },
                                              a.artist.id,
                                          );
                                      })
                                    : (0, tJ.kZ)(i),
                            [null == d ? void 0 : d.items, i, a],
                        );
                    return (0, s.jsx)(tJ.x0, {
                        containerClassName: l,
                        headerClassName: r,
                        headingVariant: c,
                        className: m,
                        forwardRef: t,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        title: o.title,
                        ...u,
                        children: g,
                    });
                },
                t0 = (0, n.forwardRef)((e, t) => (0, s.jsx)(tQ, { forwardRef: t, ...e }));
            var t1 = a(91549),
                t3 = a(34282),
                t2 = a(66149),
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
                        p = (0, n.useId)(),
                        b = (0, n.useRef)(null),
                        { shouldHideControls: v } = (0, t1.Y)(b),
                        A = !!(d.description || d.title || !v),
                        C = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(t3.R, { isActive: i, ref: b, containerClassName: r, ariaLabelledBy: p, length: 9 })
                                    : (0, s.jsx)(t3.k, { ref: b, containerClassName: r, ariaLabelledBy: p, items: null == c ? void 0 : c.items }),
                            [null == c ? void 0 : c.items, i, a, r, p],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(t8().root, m),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(_),
                        children: [
                            A &&
                                (0, s.jsx)(g.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: p,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: t8().controls, carouselRef: b }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            C,
                        ],
                    });
                },
                t6 = (0, n.forwardRef)((e, t) => (0, s.jsx)(t4, { forwardRef: t, ...e }));
            var t5 = a(44547),
                t9 = a.n(t5);
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
                            ...p
                        } = e,
                        b = (0, n.useId)(),
                        v = (0, n.useRef)(null),
                        { shouldHideControls: A } = (0, t1.Y)(v),
                        C = !!(d.description || d.title || !A),
                        T = (0, n.useMemo)(() => {
                            var e;
                            return a
                                ? (0, s.jsx)(P.Carousel, {
                                      ref: v,
                                      itemClassName: (0, l.$)(t9().item, t9().important),
                                      className: r,
                                      'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                      children: (0, g.km)({ isActive: i, centered: !0 }),
                                  })
                                : (0, s.jsx)(P.Carousel, {
                                      ref: v,
                                      itemClassName: (0, l.$)(t9().item, t9().important),
                                      className: r,
                                      'aria-labelledby': ''.concat(b, ' ').concat(b, '-description'),
                                      children:
                                          null == c || null == (e = c.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var a;
                                                    return (0, s.jsx)(
                                                        _.Bki,
                                                        {
                                                            objectType: I.ky.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null == (a = c.items) ? void 0 : a.length,
                                                            children: (0, s.jsx)(eH.yi, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == c ? void 0 : c.items, i, a, r, b]);
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(t9().root, m),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(p),
                        children: [
                            C &&
                                (0, s.jsx)(g.Tw, {
                                    className: o,
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: b,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: t9().controls, carouselRef: v }),
                                    headingVariant: u,
                                    withDescription: !!d.description,
                                }),
                            T,
                        ],
                    });
                },
                ae = (0, n.forwardRef)((e, t) => (0, s.jsx)(t7, { forwardRef: t, ...e }));
            var at = a(62277),
                aa = a(33519),
                ai = a.n(aa);
            let as = (0, r.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, headerClassName: l, meta: r, data: o, headingVariant: n, className: d, ...c } = e,
                        { artist: m } = (0, _.Pjs)(),
                        { formatMessage: u } = (0, h.A)(),
                        p = (0, v.L)(() => {
                            if (!o) return;
                            let e = [];
                            return (
                                o.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: o.tracksCount })),
                                o.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: o.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: d,
                        ...(0, f.getDataAttrFromProps)(c),
                        children: (0, s.jsx)(g.Tw, {
                            className: l,
                            title: r.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == o ? void 0 : o.href(m.id),
                            coverContainerClassName: ai().cover,
                            shimmerCoverClassName: ai().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: p,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                        }),
                    });
                }),
                al = (0, n.forwardRef)((e, t) => (0, s.jsx)(as, { forwardRef: t, ...e }));
            var ar = a(54895),
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
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, _.N8n)(),
                        A = (0, u.useTabsState)(0),
                        C = (0, n.useId)(),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(P.Carousel, {
                                          ref: T,
                                          itemClassName: (0, l.$)(ao().item, ao().important),
                                          className: r,
                                          'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                          children: (0, g.km)({ isActive: i }),
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, s.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: A.value,
                                                    elementId: h,
                                                    children: (0, s.jsx)(P.Carousel, {
                                                        ref: T,
                                                        itemClassName: (0, l.$)(ao().item, ao().important),
                                                        className: r,
                                                        'aria-labelledby': ''.concat(C, ' ').concat(C, '-description'),
                                                        children: e.data.map((t, a) =>
                                                            (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: a + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, s.jsx)(eg.aX, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [a, null == c ? void 0 : c.items, r, C, i, A.value, h],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(ao().root, p),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(b),
                        children: [
                            (0, s.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, s.jsx)(g.Tw, {
                                    className: (0, l.$)(o, ao().header, ao().important),
                                    title: d.title,
                                    description: d.description,
                                    labeledForId: C,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: ao().controls, carouselRef: T }),
                                    headingVariant: m,
                                    withDescription: !!d.description,
                                }),
                            }),
                            (0, s.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, l.$)(r, ao().tabCarousel, ao().important),
                                elementId: h,
                                shimmer: (0, s.jsx)(g.nR, { isActive: i, className: (0, l.$)(r, ao().tabCarousel, ao().important) }),
                                'aria-labelledby': C,
                                ...A,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, s.jsx)(
                                                  g.oz,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, l.$)(ao().tab, ao().important),
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
                ad = (0, n.forwardRef)((e, t) => (0, s.jsx)(an, { forwardRef: t, ...e }));
            var ac = a(56259),
                am = a.n(ac);
            let au = (e) => {
                    var t;
                    let { containerClassName: a, meta: i, data: l, forwardRef: r, isShimmerVisible: o, isShimmerActive: c, headingVariant: m } = e,
                        u = (0, n.useMemo)(() => {
                            if (o) {
                                var e;
                                return (0, g.q$)({
                                    className: am().root,
                                    shimmerClassName: am().shimmer,
                                    isActive: c,
                                    count: (null == (e = i.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, s.jsx)('div', {
                                className: am().root,
                                children:
                                    null == l
                                        ? void 0
                                        : l.items.map((e) =>
                                              (0, s.jsx)(
                                                  g.Tw,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: m },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == l ? void 0 : l.items, m, c, o, null == (t = i.source) ? void 0 : t.countWeb]);
                    return (0, s.jsx)('section', { ref: r, title: i.title, className: a, ...(0, d.Am)(d.e8.landing.ITEM_LIST), children: u });
                },
                a_ = (0, n.forwardRef)((e, t) => (0, s.jsx)(au, { forwardRef: t, ...e }));
            var ag = a(48771),
                ap = a.n(ag),
                ab = a(75987),
                av = a.n(ab);
            let aA = (0, r.PA)((e) => {
                    let { title: t, subtitle: a, link: i, testId: l, icon: r, covers: o, navigateTo: c } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        u = (0, _.NKK)(),
                        { ref: p, intersectionPropertyId: b } = (0, _.nMI)(),
                        v = (0, n.useMemo)(() => {
                            if (0 !== o.length)
                                return (0, s.jsx)('div', {
                                    className: av().covers,
                                    children: o.map((e, t) =>
                                        (0, s.jsx)(
                                            S.Paper,
                                            {
                                                className: av().coverContainer,
                                                radius: 'xs',
                                                ...(0, d.Am)(d.e8.landing.LIKES_HISTORY_COVERS),
                                                children: (0, s.jsx)(eF.Image, { size: 80, className: av().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [o]),
                        A = (0, n.useCallback)(() => {
                            u({ to: c });
                        }, [c, u]);
                    return (0, s.jsx)('div', {
                        ref: p,
                        'data-intersection-property-id': b,
                        className: av().root,
                        ...(0, d.Am)(l),
                        children: (0, s.jsxs)(g.N_, {
                            className: av().link,
                            href: i,
                            onClick: A,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: av().start,
                                    children: [
                                        r,
                                        (0, s.jsxs)('div', {
                                            className: av().textContainer,
                                            children: [
                                                (0, s.jsxs)(E.Heading, {
                                                    className: av().title,
                                                    size: m ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    ...(0, d.Am)(d.e8.landing.LIKES_HISTORY_TITLE),
                                                    children: [t, (0, s.jsx)(tM.Icon, { className: av().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, s.jsx)(E.Caption, {
                                                    className: av().subtitle,
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
                                v,
                            ],
                        }),
                    });
                }),
                aC = (e) => {
                    let { isActive: t } = e;
                    return (0, s.jsx)(eQ.Shimmer, { isActive: t, className: av().root, height: 82 });
                },
                aT = (e) => {
                    let { forwardRef: t, isShimmerVisible: a, isShimmerActive: i, data: l, ...r } = e,
                        { formatMessage: o } = (0, h.A)(),
                        { favorites: c, history: m } = l || {},
                        u = (0, n.useMemo)(
                            () =>
                                c && m && !a
                                    ? [
                                          (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Playlist,
                                                  objectId: c.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, s.jsx)(aA, {
                                                      title: c.title,
                                                      subtitle: o({ id: 'entity-names.number-of-tracks' }, { counter: c.count }),
                                                      link: c.url,
                                                      navigateTo: I.QT.PlaylistScreen,
                                                      testId: d.e8.landing.LIKES_BLOCK,
                                                      icon: (0, s.jsx)(S.Paper, {
                                                          className: ap().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, s.jsx)(eF.Image, {
                                                              className: ap().favoritesCover,
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
                                          (0, s.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: I.ky.Shortcut,
                                                  objectId: m.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, s.jsx)(aA, {
                                                      title: m.title,
                                                      subtitle: m.artists.join(', '),
                                                      link: m.url,
                                                      navigateTo: I.QT.MusicHistoryScreen,
                                                      testId: d.e8.landing.HISTORY_BLOCK,
                                                      icon: (0, s.jsx)(S.Paper, {
                                                          className: ap().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, s.jsx)(tM.Icon, { className: ap().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: m.trackCovers,
                                                  }),
                                              },
                                              m.id,
                                          ),
                                      ]
                                    : [(0, s.jsx)(aC, { isActive: i }, 0), (0, s.jsx)(aC, { isActive: i }, 1)],
                            [c, o, m, i, a],
                        );
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: ap().root,
                        ...(0, f.getDataAttrFromProps)(r),
                        children: (0, s.jsx)(P.Carousel, { className: ap().carousel, itemClassName: ap().carouselItem, children: u }),
                    });
                },
                aI = (0, n.forwardRef)((e, t) => (0, s.jsx)(aT, { forwardRef: t, ...e }));
            var ah = a(27906),
                aL = a(42167),
                ay = a.n(aL);
            let aS = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, s.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
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
                                      (0, s.jsx)(
                                          ah.NZ,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                aE = (0, n.forwardRef)((e, t) => (0, s.jsx)(aS, { forwardRef: t, ...e }));
            var aN = a(84359),
                aj = a(3095),
                ax = a(69731),
                ak = a.n(ax);
            let aR = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: c,
                        className: m,
                        ...u
                    } = e;
                    return (0, s.jsx)(g.OY, {
                        className: m,
                        ...u,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: ak().shimmer,
                        containerClassName: l,
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
                                      (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, s.jsx)(
                                                  aj.Vf,
                                                  { linkClassName: ak().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                af = (0, n.forwardRef)((e, t) => (0, s.jsx)(aR, { forwardRef: t, ...e }));
            var aP = a(90937),
                aw = a.n(aP),
                aK = a(77881),
                aO = a(60916),
                aM = a.n(aO);
            let aD = (e) => {
                    let { isActive: t } = e;
                    return (0, s.jsx)(eQ.Shimmer, { isActive: t, className: aM().root });
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
                        g = o ? d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : d.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, s.jsx)(aK.$, {
                        style: u,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: m,
                        className: (0, l.$)(aM().root, aM().button),
                        ...(0, d.Am)(d.e8.landing.NEUROMUSIC_BLOCK_ITEM),
                        children: (0, s.jsxs)('div', {
                            className: aM().textContainer,
                            children: [
                                (0, s.jsx)(tM.Icon, { className: aM().icon, size: 'xxs', variant: o ? 'pause' : 'play', ...(0, d.Am)(g) }),
                                (0, s.jsx)(E.Caption, { className: aM().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: i.title }),
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
                        p = (0, n.useId)(),
                        b = (0, n.useRef)(null),
                        v = (0, n.useMemo)(
                            () =>
                                a
                                    ? Array.from({ length: 3 }, (e, t) => (0, s.jsx)(aD, { isActive: i }, t))
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => (0, s.jsx)(aB, { neuromusic: e }, t)),
                            [null == c ? void 0 : c.items, i, a],
                        );
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, l.$)(aw().root, m),
                        ...(0, f.getDataAttrFromProps)(_),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: o,
                                labeledForId: p,
                                title: d.title,
                                description: d.description,
                                controls: (0, s.jsx)(g.X9, { className: aw().controls, carouselRef: b }),
                                headingVariant: u,
                                withDescription: !!d.description,
                            }),
                            (0, s.jsx)(P.Carousel, { ref: b, itemClassName: (0, l.$)(aw().item, aw().important), className: r, 'aria-labelledby': p, children: v }),
                        ],
                    });
                },
                aU = (0, n.forwardRef)((e, t) => (0, s.jsx)(aV, { forwardRef: t, ...e })),
                aY = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var aG = a(12110),
                aW = a.n(aG);
            let aX = (0, r.PA)((e) => {
                var t, a, i;
                let { album: l, releaseDate: r, coverColor: o, coverUri: m } = e,
                    u = null == l || null == (t = l.artists) ? void 0 : t[0],
                    { formatDate: p } = (0, h.A)(),
                    { trailer: b } = (0, _.Pjs)(),
                    { ref: v, intersectionPropertyId: A } = (0, _.nMI)(),
                    C = (0, _.ZpR)(null != (i = null == u ? void 0 : u.url) ? i : ''),
                    T = (0, j.SA)({ artist: u, callback: C }),
                    L = (0, _.Ftl)(),
                    x = (0, N.r_)(l.type),
                    k = (0, _.PT7)(),
                    { from: R, utmLink: f } = (0, _.fyy)({ contextId: l.id, contextType: y.K.Album }),
                    P = (0, _.NKK)(),
                    w = (0, c.c)((e) => {
                        P({ to: I.QT.ArtistScreen, objectId: null == u ? void 0 : u.id, objectType: I.ky.Artist }), T(e);
                    }),
                    K = (0, c.c)((e) => {
                        if (k()) {
                            e.stopPropagation(), e.preventDefault();
                            return;
                        }
                        (null == l ? void 0 : l.id) && (e.stopPropagation(), b.openAlbumTrailer(l.id), L(I.ky.Album, String(l.id)));
                    }),
                    O = (0, n.useMemo)(() => {
                        var e;
                        if (null == l || null == (e = l.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(g.cv, {
                                children: (0, s.jsx)(g.kJ, { variant: 'text', iconSize: 'xs', className: aW().trailerButton, withRipple: !1, onClick: K }),
                            });
                    }, [null == l || null == (a = l.trailer) ? void 0 : a.isAvailable, K]),
                    M = (0, n.useMemo)(() => {
                        if (r)
                            return (0, s.jsxs)(E.Caption, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: aW().descriptionContainer,
                                children: [
                                    (0, s.jsx)(E.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: x.toLowerCase() }),
                                    (0, s.jsx)(E.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, s.jsx)(E.Caption, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: p(new Date(r), (0, _.QB4)()) }),
                                ],
                            });
                    }, [x, p, r]);
                return (0, s.jsxs)('div', {
                    className: aW().root,
                    ref: v,
                    'data-intersection-property-id': A,
                    children: [
                        (0, s.jsxs)('div', {
                            className: aW().cover,
                            children: [
                                (0, s.jsxs)(S.Paper, {
                                    className: aW().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, s.jsx)(g.BW, {
                                            className: aW().image,
                                            src: m,
                                            alt: null == u ? void 0 : u.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)('div', {
                                            className: aW().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && aY.test(e)) || (e = '#000000');
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
                                                })(null == l ? void 0 : l.averageColor),
                                            },
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(g.N_, { className: aW().fade, 'aria-label': null == u ? void 0 : u.name, href: null == u ? void 0 : u.url, onClick: w }),
                                (0, s.jsx)(j.iQ, {
                                    className: aW().artists,
                                    lineClamp: 2,
                                    artists: null == l ? void 0 : l.artists,
                                    linkClassName: aW().artistLink,
                                    captionClassName: aW().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, s.jsx)(q, {
                            className: aW().card,
                            album: l,
                            albumUrl: l.url,
                            from: R,
                            utmLink: f,
                            trailerButton: O,
                            description: M,
                            entityName: x,
                            coverColor: o,
                            ...(0, d.Am)(d.Kq.newRelease.NEW_RELEASE_CARD),
                        }),
                    ],
                });
            });
            var aF = a(53403),
                aH = a.n(aF);
            let az = (0, r.PA)((e) => {
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
                            ...p
                        } = e,
                        { objectsCount: b } = (0, _.N8n)(),
                        v = (0, n.useId)(),
                        A = (0, n.useRef)(null),
                        { theme: C } = (0, _.DPo)(),
                        T = (0, n.useMemo)(
                            () =>
                                i
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, a) =>
                                              (0, s.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, s.jsx)(eQ.Shimmer, { isActive: e, radius: 'round', className: aH().shimmerImage }),
                                                          (0, s.jsx)(eQ.Shimmer, { isActive: e, radius: 'l', className: aH().shimmerCard }),
                                                      ],
                                                  },
                                                  a,
                                              ),
                                          ))(a)
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => {
                                            let a = e.coverUriWithPlaceholder(C);
                                            return (0, s.jsx)(
                                                _.Bki,
                                                {
                                                    objectType: I.ky.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: c.items.length,
                                                    children: (0, s.jsx)(aX, { ...e, coverUri: a }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == c ? void 0 : c.items, a, i, C],
                        );
                    return (0, s.jsxs)('section', {
                        ref: t,
                        className: (0, l.$)(aH().root, u),
                        ...(0, f.getDataAttrFromProps)(p),
                        children: [
                            (0, s.jsx)(_.Bki, {
                                objectType: I.ky.Shortcut,
                                objectId: String(d.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != b ? b : 0,
                                children: (0, s.jsx)(g.Tw, {
                                    className: o,
                                    labeledForId: v,
                                    title: d.title,
                                    viewAllActionLink: d.viewAllActionLink,
                                    controls: (0, s.jsx)(g.X9, { className: aH().controls, carouselRef: A }),
                                    headingVariant: m,
                                }),
                            }),
                            (0, s.jsx)(P.Carousel, { ref: A, itemClassName: (0, l.$)(aH().item, aH().important), className: r, 'aria-labelledby': v, children: T }),
                        ],
                    });
                }),
                a$ = (0, n.forwardRef)((e, t) => (0, s.jsx)(az, { forwardRef: t, ...e }));
            var aq = a(7333),
                aJ = a(94124),
                aZ = a(985),
                aQ = a(22243),
                a0 = a.n(aQ);
            let a1 = (e) => {
                    let { forwardRef: t, containerClassName: a, id: i, meta: r, ...o } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: (0, l.$)(a0().root, a),
                        ...(0, f.getDataAttrFromProps)(o),
                        children: (0, s.jsx)(
                            _.Bki,
                            {
                                objectType: I.ky.Text,
                                objectId: i,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, s.jsx)(aZ.Fn, { textButton: n({ id: 'interface-actions.further' }), meta: r }),
                            },
                            i,
                        ),
                    });
                },
                a3 = (0, n.forwardRef)((e, t) => (0, s.jsx)(a1, { forwardRef: t, ...e })),
                a2 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        containerClassName: l,
                        headerClassName: r,
                        meta: o,
                        data: n,
                        headingVariant: d,
                        className: c,
                        ...m
                    } = e;
                    return (0, s.jsx)(g.OY, {
                        className: c,
                        ...m,
                        isShimmerVisible: a,
                        isShimmerActive: i,
                        headerClassName: r,
                        containerClassName: l,
                        title: o.title,
                        description: o.description,
                        viewAllActionLink: o.viewAllActionLink,
                        ref: t,
                        headingVariant: d,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e, t) =>
                                      (0, s.jsx)(
                                          _.Bki,
                                          {
                                              objectType: I.ky.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: n.items.length,
                                              children: (0, s.jsx)(ti.B6, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                a8 = (0, n.forwardRef)((e, t) => (0, s.jsx)(a2, { forwardRef: t, ...e }));
            var a4 = a(92437),
                a6 = a(97719);
            let a5 = (e) => {
                    let { items: t, playlistId: a, playlistUuid: i, from: l, utmLink: r } = e;
                    return t.slice(0, 8).map((e, o) => {
                        let n,
                            { objectPosX: d, objectPosY: c, objectsCount: m } = (0, _.$tp)({ index: o, count: t.length }),
                            u =
                                ((n = e.id),
                                {
                                    contextData: { type: y.K.Playlist, meta: { id: a, uuid: i }, from: l, utmLink: r, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: o, entityId: n },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, a6.li)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, s.jsx)(
                            _.Bki,
                            {
                                objectType: I.ky.Track,
                                objectId: e.id,
                                objectPosX: d,
                                objectPosY: c,
                                objectsCount: m,
                                children: e.isTrackNonMusic
                                    ? (0, s.jsx)(ed.Kd, { track: e, playContextParams: u, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, s.jsx)(ed.Kt, { track: e, playContextParams: u }),
                            },
                            e.id,
                        );
                    });
                },
                a9 = { src: '/_next/static/media/heart.602389ae.png' };
            var a7 = a(77561),
                ie = a.n(a7);
            let it = (0, r.PA)(() => {
                var e, t;
                let { vibe: a } = (0, _.Pjs)(),
                    { pageId: i } = (0, _.$au)(),
                    { blockIdForFrom: l } = (0, _.N8n)(),
                    r = (0, _.ZpR)(_.Zyd.main.href),
                    { formatMessage: o } = (0, h.A)(),
                    { isFreemium: c } = (0, _.XCI)(),
                    m = o({ id: 'vibe-actions.play-vibe' }),
                    { isPlaying: u, togglePlay: p } = (0, _.B0S)({
                        seeds: null != (t = null == (e = a.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: i,
                        blockIdForFrom: l,
                    });
                (0, n.useEffect)(
                    () => () => {
                        a.reset();
                    },
                    [a],
                );
                let b = (0, n.useCallback)(() => {
                        c || (u || p(), r());
                    }, [c, u, r, p]),
                    v = (0, n.useCallback)(
                        () =>
                            (0, s.jsx)(aK.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: ie().myWaveButton,
                                'aria-label': m,
                                onClick: b,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON),
                                children: (0, s.jsx)(E.Caption, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, s.jsx)(E.Caption, { variant: 'span', size: 'm', weight: 'medium', className: ie().myWaveButtonText, children: m }),
                                }),
                            }),
                        [m, b],
                    );
                return (
                    a.isNeededToLoad && (0, n.use)(a.getLastVibe()),
                    (0, s.jsxs)('div', {
                        className: ie().root,
                        ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK),
                        children: [
                            (0, s.jsx)(eF.Image, { src: a9.src, className: ie().image, ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE) }),
                            (0, s.jsx)(E.Heading, {
                                variant: 'h3',
                                size: 'xs',
                                className: ie().header,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE),
                                children: (0, s.jsx)(L.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, s.jsx)(E.Caption, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: ie().text,
                                ...(0, d.Am)(d.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT),
                                children: (0, s.jsx)(L.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            (0, s.jsx)(g.SU, { isEnabled: c, placement: 'top', textVariant: 'vibe', renderChildren: v }),
                        ],
                    })
                );
            });
            var ia = a(20645),
                ii = a.n(ia);
            let is = (0, r.PA)((e) => {
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
                            className: p,
                            ...b
                        } = e,
                        { from: v, utmLink: A } = (0, _.fyy)({ contextId: null == c ? void 0 : c.playlist.id, contextType: y.K.Playlist }),
                        {
                            trailer: C,
                            settings: { isMobile: S },
                        } = (0, _.Pjs)(),
                        E = (0, _.Ftl)(),
                        { formatMessage: N } = (0, h.A)(),
                        j = (0, _.iZJ)({ playlistId: null == c ? void 0 : c.playlist.id }),
                        x = (null == c ? void 0 : c.totalItemsCount)
                            ? N({ id: 'entity-names.number-of-tracks' }, { counter: null == c ? void 0 : c.totalItemsCount })
                            : d.description,
                        k = [T.t.COLLECTION_PLAYLIST_WITH_LIKES, T.t.SMART_OPEN_PLAYLIST].includes(m),
                        R = d.coverStyle !== a4.z.NONE,
                        f = (0, n.useCallback)(() => {
                            (null == c ? void 0 : c.playlist.id) &&
                                (C.setUtmLink(A), C.openPlaylistTrailer(null == c ? void 0 : c.playlist.id), E(I.ky.Playlist, String(c.playlist.id)));
                        }, [C, null == c ? void 0 : c.playlist.id, E, A]),
                        P = (0, n.useMemo)(() => {
                            if (null == c ? void 0 : c.withRewindTrailerButton)
                                return S
                                    ? (0, s.jsx)(g.kJ, { className: ii().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: f })
                                    : (0, s.jsx)(g.kJ, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: ii().trailer,
                                          onClick: f,
                                          children: (0, s.jsx)(L.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == c ? void 0 : c.withRewindTrailerButton, S, f]);
                    return (null == c ? void 0 : c.playlist.isFavouritePlaylist) &&
                        (null == c ? void 0 : c.totalItemsCount) === 0 &&
                        (null == c ? void 0 : c.canShowEmptyBlock)
                        ? (0, s.jsx)(it, {})
                        : (0, s.jsx)(_._Fn, {
                              sourceContextData: j,
                              children: (0, s.jsx)(g.$2, {
                                  isShimmerActive: i,
                                  shimmer: (0, s.jsx)(g.DS, { variant: _.Xjt.PLAYLIST, isActive: i }),
                                  maxColumnsCount: g.DI.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, l.$)(ii().root, p),
                                  isShimmerVisible: a,
                                  blockHeaderClassName: o,
                                  carouselClassName: r,
                                  blockHeaderTitle: d.title,
                                  blockHeaderCoverUrl: null == c ? void 0 : c.getCoverUri(d.coverStyle),
                                  blockHeaderDescription: x,
                                  viewAllActionLink: null == c ? void 0 : c.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: u,
                                  additionalControl: P,
                                  withBlockHeaderDescription: k,
                                  withBlockHeaderCover: R,
                                  ...b,
                                  children:
                                      (null == c ? void 0 : c.items) &&
                                      a5({ items: c.items, playlistId: c.playlist.id, playlistUuid: c.playlist.uuid, from: v, utmLink: A }),
                              }),
                          });
                }),
                il = (0, n.forwardRef)((e, t) => (0, s.jsx)(is, { forwardRef: t, ...e }));
            var ir = a(77653),
                io = a(80937),
                id = a.n(io);
            let ic = (0, r.PA)((e) => {
                    var t, a;
                    let {
                            forwardRef: i,
                            isShimmerVisible: l,
                            isShimmerActive: r,
                            tracksContainerClassName: o,
                            headerClassName: d,
                            meta: m,
                            data: p,
                            headingVariant: b,
                            className: A,
                            ...C
                        } = e,
                        { formatMessage: T } = (0, h.A)(),
                        { from: I, utmLink: L } = (0, _.fyy)({ contextId: null == p ? void 0 : p.playlist.id, contextType: y.K.Playlist }),
                        S = (0, _.iZJ)({ playlistId: null == p ? void 0 : p.playlist.id, filter: null == p ? void 0 : p.filters.activeFilter }),
                        E = (0, u.useTabsState)((null == p ? void 0 : p.filters.activeFilterIndex) || 0),
                        N = (0, n.useRef)(null),
                        j = (0, _.$yB)(),
                        x = (null == p ? void 0 : p.totalItemsCount) ? T({ id: 'entity-names.number-of-tracks' }, { counter: p.totalItemsCount }) : m.description,
                        k = (0, c.c)((e) => {
                            var t;
                            if (!E.onTabChange || e === E.value || !p) return;
                            setTimeout(() => {
                                var t, a, i;
                                null == (i = N.current) || null == (a = i.children[e]) || null == (t = a.focus) || t.call(a);
                            }),
                                E.onTabChange(e);
                            let a = null == (t = p.filters.items) ? void 0 : t[e];
                            a && (p.handleFilterClick(a), j({ tabId: a.id, tabPos: e + 1 }));
                        });
                    if (((null == p ? void 0 : p.playlistLoading.isNeededToLoad) && (0, n.use)(p.getPlaylist()), null == p ? void 0 : p.shouldShowEmptyPlaylist))
                        return (0, s.jsx)(it, {});
                    let R = r || !!(null == p ? void 0 : p.isLoading),
                        f = l || !!(null == p ? void 0 : p.isLoading) || !!(null == p ? void 0 : p.isRejected),
                        P = p && 0 === p.items.length,
                        w = !!(null == p || null == (t = p.filters.items) ? void 0 : t.length),
                        K = !p || (null == p ? void 0 : p.isLoading) || (null == p || null == (a = p.filters) ? void 0 : a.isShimmerVisible) || P || w,
                        O = (0, v.L)(() => {
                            var e, t, a, i;
                            if (K)
                                return (0, s.jsx)(ir.A, {
                                    className: id().filters,
                                    tabsState: E,
                                    handleFilterClick: k,
                                    ref: N,
                                    items: null != (i = null == p || null == (e = p.filters) ? void 0 : e.items) ? i : void 0,
                                    isShimmerVisible: null == p || null == (t = p.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == p || null == (a = p.filters) ? void 0 : a.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: id().shimmer,
                                });
                        });
                    return (0, s.jsx)(_._Fn, {
                        sourceContextData: S,
                        children: (0, s.jsx)(g.$2, {
                            isShimmerActive: R,
                            shimmer: (0, s.jsx)(g.DS, { variant: _.Xjt.PLAYLIST, isActive: R }),
                            maxColumnsCount: g.DI.TWO,
                            itemsCountPerColumn: 4,
                            className: A,
                            isShimmerVisible: l,
                            isColumnsShimmerVisible: f,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: d,
                            carouselClassName: o,
                            blockHeaderTitle: m.title,
                            blockHeaderCoverUrl: m.coverUri,
                            blockHeaderDescription: x,
                            viewAllActionLink: null == p ? void 0 : p.playlist.url,
                            ref: i,
                            blockHeaderHeadingVariant: b,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: m.coverStyle !== a4.z.NONE,
                            beforeCarousel: O,
                            ...C,
                            children:
                                (null == p ? void 0 : p.items) && a5({ items: p.items, playlistId: p.playlist.id, playlistUuid: p.playlist.uuid, from: I, utmLink: L }),
                        }),
                    });
                }),
                im = (0, n.forwardRef)((e, t) => (0, s.jsx)(ic, { forwardRef: t, ...e }));
            var iu = a(25743),
                i_ = a(52239),
                ig = a(54830),
                ip = a(42827),
                ib = a.n(ip);
            let iv = (0, r.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                            data: r,
                            meta: o,
                            isLoaded: c,
                            headerClassName: m,
                            setIsNeededToLoad: u,
                            tracksContainerClassName: p,
                            className: b,
                            ...v
                        } = e,
                        { formatMessage: A } = (0, h.A)(),
                        {
                            search: { history: C },
                        } = (0, _.Pjs)(),
                        T = (0, ig.df)(),
                        y = !(null == r ? void 0 : r.items.length) && c;
                    return ((0, n.useLayoutEffect)(
                        () => (
                            C.shouldUpdateHistory && (u(), C.setShouldUpdateHistory(!1)),
                            () => {
                                C.hasCleared && u(), C.reset();
                            }
                        ),
                        [C, u],
                    ),
                    y || C.hasCleared)
                        ? (0, s.jsx)('div', {
                              ref: t,
                              className: (0, l.$)(ib().root, ib().fallback),
                              ...(0, f.getDataAttrFromProps)(v),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY_EMPTY),
                              children: (0, s.jsx)(E.Caption, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, s.jsx)(L.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, s.jsxs)('div', {
                              ref: t,
                              className: ib().root,
                              ...(0, f.getDataAttrFromProps)(v),
                              ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY),
                              children: [
                                  (0, s.jsx)(g.$2, {
                                      className: b,
                                      shimmer: (0, s.jsx)(g.RJ, { isActive: a }),
                                      isShimmerActive: a,
                                      isShimmerVisible: i,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: g.DI.TWO,
                                      blockHeaderClassName: m,
                                      carouselClassName: p,
                                      blockHeaderTitle: o.title,
                                      blockHeaderDescription: o.description,
                                      viewAllActionLink: o.viewAllActionLink,
                                      children:
                                          null == r
                                              ? void 0
                                              : r.items.map((e, t) => {
                                                    var a, i;
                                                    let {
                                                        objectPosX: l,
                                                        objectPosY: o,
                                                        objectsCount: n,
                                                    } = (0, _.$tp)({ index: t, count: r.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case ek._.NON_MUSIC_ALBUM_ITEM:
                                                        case ek._.ALBUM_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(eg.M_, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.ARTIST_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(eB.cz, { description: A({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.TRACK_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(ed.c8, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.LIKED_PLAYLIST_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(ti.vf, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.WAVE_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Wave,
                                                                    objectId: null != (a = e.data.vibe.seeds[0]) ? a : '',
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(eH.H2, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(A({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case ek._.WAVE_AGENT_ITEM:
                                                            return (0, s.jsx)(
                                                                _.Bki,
                                                                {
                                                                    objectType: I.ky.Wave,
                                                                    objectId: null != (i = e.data.seeds[0]) ? i : '',
                                                                    objectPosX: l,
                                                                    objectPosY: o,
                                                                    objectsCount: n,
                                                                    children: (0, s.jsx)(eH.H2, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(A({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: eH.hl.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case ek._.CLIP_ITEM:
                                                            if (!T) return null;
                                                            return (0, s.jsx)(eI.Nk, { clip: e.data }, e.data.clipId);
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  c &&
                                      (0, s.jsx)(aK.$, {
                                          onClick: C.clear,
                                          className: ib().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          ...(0, d.Am)(d.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON),
                                          children: (0, s.jsx)(L.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                iA = (0, n.forwardRef)((e, t) => (0, s.jsx)(iv, { forwardRef: t, ...e }));
            var iC = a(87043),
                iT = a.n(iC);
            let iI = (e) => {
                    var t, a, i, l, r, o, d, c, m;
                    let { containerClassName: u, meta: g, data: p, forwardRef: b, headingVariant: v = 'h2', ...A } = e,
                        C = (0, _.ZpR)(null != (m = null == p ? void 0 : p.weblink) ? m : ''),
                        { theme: T } = (0, _.DPo)(),
                        I =
                            T === _.Sxu.Light
                                ? null == p || null == (t = p.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == p || null == (a = p.darkTheme)
                                  ? void 0
                                  : a.imageUrl,
                        h = (0, n.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    T === _.Sxu.Light
                                        ? null == p || null == (e = p.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == p || null == (t = p.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [T, null == p || null == (i = p.darkTheme) ? void 0 : i.textColor, null == p || null == (l = p.lightTheme) ? void 0 : l.textColor]),
                        L = (0, n.useMemo)(() => {
                            var e, t, a, i;
                            return {
                                '--button-color':
                                    T === _.Sxu.Light
                                        ? null == p || null == (e = p.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == p || null == (t = p.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    T === _.Sxu.Light
                                        ? null == p || null == (a = p.lightTheme)
                                            ? void 0
                                            : a.buttonTextColor
                                        : null == p || null == (i = p.darkTheme)
                                          ? void 0
                                          : i.buttonTextColor,
                            };
                        }, [
                            T,
                            null == p || null == (r = p.darkTheme) ? void 0 : r.buttonColor,
                            null == p || null == (o = p.lightTheme) ? void 0 : o.buttonColor,
                            null == p || null == (d = p.darkTheme) ? void 0 : d.buttonTextColor,
                            null == p || null == (c = p.lightTheme) ? void 0 : c.buttonTextColor,
                        ]);
                    return (0, s.jsx)('section', {
                        ref: b,
                        title: g.title,
                        className: u,
                        ...(0, f.getDataAttrFromProps)(A),
                        children: (0, s.jsxs)('div', {
                            className: iT().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: iT().actions,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: iT().textContainer,
                                            children: [
                                                !!(null == p ? void 0 : p.title) &&
                                                    (0, s.jsx)(E.Heading, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: iT().textColor,
                                                        lineClamp: 2,
                                                        variant: v,
                                                        style: h,
                                                        children: null == p ? void 0 : p.title,
                                                    }),
                                                !!(null == p ? void 0 : p.subtitle) &&
                                                    (0, s.jsx)(E.Caption, {
                                                        className: iT().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: h,
                                                        children: null == p ? void 0 : p.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == p ? void 0 : p.weblink) &&
                                            !!(null == p ? void 0 : p.buttonTitle) &&
                                            (0, s.jsx)(aK.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: iT().button,
                                                role: 'link',
                                                onClick: C,
                                                style: L,
                                                children: (0, s.jsx)(E.Caption, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == p ? void 0 : p.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, s.jsx)('div', {
                                    className: iT().imageContainer,
                                    children: (0, s.jsx)(eF.Image, {
                                        src: I || (null == p ? void 0 : p.imageUrl),
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
                ih = (0, n.forwardRef)((e, t) => (0, s.jsx)(iI, { forwardRef: t, ...e }));
            var iL = a(76015),
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
                            ...p
                        } = e,
                        b = (0, n.useId)(),
                        v = (0, u.useTabsState)(0),
                        A = (0, n.useRef)(null),
                        C = (0, n.useId)(),
                        T = (0, n.useMemo)(
                            () =>
                                a
                                    ? (0, s.jsx)(t3.R, {
                                          isActive: i,
                                          ref: A,
                                          containerClassName: r,
                                          ariaLabelledBy: ''.concat(b, ' ').concat(b, '-description'),
                                          length: 9,
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, s.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: v.value,
                                                    elementId: C,
                                                    children: (0, s.jsx)(t3.k, {
                                                        ref: A,
                                                        containerClassName: r,
                                                        ariaLabelledBy: ''.concat(b, ' ').concat(b, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, a, i, r, b, v.value, C],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(iy().root, _),
                        ref: t,
                        ...(0, f.getDataAttrFromProps)(p),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: (0, l.$)(o, iy().header, iy().important),
                                title: d.title,
                                description: d.description,
                                labeledForId: b,
                                viewAllActionLink: d.viewAllActionLink,
                                controls: (0, s.jsx)(g.X9, { className: iy().controls, carouselRef: A }),
                                headingVariant: m,
                                withDescription: !!d.description,
                            }),
                            (0, s.jsx)(g.wI, {
                                isShimmerVisible: a,
                                className: (0, l.$)(r, iy().tabCarousel, iy().important),
                                elementId: C,
                                shimmer: (0, s.jsx)(g.zr, { isActive: i, className: (0, l.$)(r, iy().tabCarousel, iy().important), shimmerClassName: iy().tabShimmer }),
                                'aria-labelledby': b,
                                ...v,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, s.jsx)(
                                                  g.oz,
                                                  { className: (0, l.$)(iy().tab, iy().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            T,
                        ],
                    });
                },
                iE = (0, n.forwardRef)((e, t) => (0, s.jsx)(iS, { forwardRef: t, ...e }));
            var iN = a(54861),
                ij = a.n(iN);
            let ix = (e) => {
                    var t;
                    let {
                            forwardRef: a,
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            containerClassName: o,
                            headerClassName: d,
                            meta: c,
                            data: m,
                            headingVariant: p,
                            className: b,
                            ...v
                        } = e,
                        A = (0, n.useId)(),
                        C = (0, u.useTabsState)(0),
                        T = (0, n.useRef)(null),
                        h = (0, n.useId)(),
                        L = (0, n.useMemo)(
                            () =>
                                i
                                    ? (0, s.jsx)(P.Carousel, {
                                          ref: T,
                                          itemClassName: (0, l.$)(ij().item, ij().important),
                                          className: o,
                                          'aria-labelledby': ''.concat(A, ' ').concat(A, '-description'),
                                          children: (0, g.km)({ isActive: r, centered: !0 }),
                                      })
                                    : null == m
                                      ? void 0
                                      : m.items.map((e) => {
                                            var t;
                                            return (0, s.jsx)(
                                                u.TabPanel,
                                                {
                                                    name: e.tab.id,
                                                    value: C.value,
                                                    elementId: h,
                                                    children: (0, s.jsx)(P.Carousel, {
                                                        ref: T,
                                                        itemClassName: (0, l.$)(ij().item, ij().important),
                                                        className: o,
                                                        'aria-labelledby': ''.concat(A, ' ').concat(A, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((t, a) => {
                                                                      var i;
                                                                      return (0, s.jsx)(
                                                                          _.Bki,
                                                                          {
                                                                              objectType: I.ky.Wave,
                                                                              objectId: t.stationId,
                                                                              objectPosX: a + 1,
                                                                              objectPosY: 1,
                                                                              objectsCount: null == (i = e.data) ? void 0 : i.length,
                                                                              children: (0, s.jsx)(eH.yi, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == m ? void 0 : m.items, i, r, o, A, C.value, h],
                        );
                    return (0, s.jsxs)('section', {
                        className: (0, l.$)(ij().root, b),
                        ref: a,
                        ...(0, f.getDataAttrFromProps)(v),
                        children: [
                            (0, s.jsx)(g.Tw, {
                                className: (0, l.$)(d, ij().header, ij().important),
                                title: c.title,
                                description: c.description,
                                labeledForId: A,
                                viewAllActionLink: c.viewAllActionLink,
                                controls: (0, s.jsx)(g.X9, { className: ij().controls, carouselRef: T }),
                                headingVariant: p,
                                withDescription: !!c.description,
                            }),
                            (0, s.jsx)(g.wI, {
                                isShimmerVisible: i,
                                className: (0, l.$)(o, ij().tabCarousel, ij().important),
                                elementId: h,
                                shimmer: (0, s.jsx)(g.zr, { isActive: r, className: (0, l.$)(o, ij().tabCarousel, ij().important), shimmerClassName: ij().tabShimmer }),
                                'aria-labelledby': A,
                                ...C,
                                children:
                                    null == m || null == (t = m.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, s.jsx)(
                                                  g.oz,
                                                  { className: (0, l.$)(ij().tab, ij().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            L,
                        ],
                    });
                },
                ik = (0, n.forwardRef)((e, t) => (0, s.jsx)(ix, { forwardRef: t, ...e }));
            var iR = a(84683),
                iP = a.n(iR),
                iw = a(45825),
                iK = a.n(iw);
            let iO = (0, r.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, _.Pjs)();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(g.nN, { isActive: !0, className: iK().titleShimmer, textClassName: iK().titleTextShimmer }),
                            (0, s.jsx)(g.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            (0, s.jsx)(g.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            (0, s.jsx)(g.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                            e &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)(g.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                                        (0, s.jsx)(g.nN, { isActive: !0, className: iK().descriptionShimmer, textClassName: iK().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                iM = Array.from({ length: 3 }, () => g.v2.src),
                iD = (0, r.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: a, data: i, headingVariant: l = 'h2' } = e,
                        { formatMessage: r } = (0, h.A)(),
                        { wizard: o } = (0, _.Pjs)(),
                        c = (0, n.useMemo)(
                            () =>
                                (0, s.jsx)('div', {
                                    className: iP().images,
                                    ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_ARTISTS),
                                    children: iM.map((e, t) => {
                                        var a;
                                        let l = null == i || null == (a = i.artists[t]) ? void 0 : a.coverUri;
                                        return (0, s.jsx)(
                                            S.Paper,
                                            {
                                                className: iP().paper,
                                                radius: 'round',
                                                children: (0, s.jsx)(eF.Image, {
                                                    className: iP().image,
                                                    src: l || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!l,
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
                                    ? (0, s.jsx)(iO, {})
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)(E.Heading, {
                                                  variant: l,
                                                  size: 'xs',
                                                  className: iP().title,
                                                  ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_TITLE),
                                                  children: null == i ? void 0 : i.title,
                                              }),
                                              (null == i ? void 0 : i.description) &&
                                                  (0, s.jsx)(E.Heading, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: iP().description,
                                                      lineClamp: 5,
                                                      ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK_TEXT),
                                                      children: i.description,
                                                  }),
                                          ],
                                      }),
                            [a, l, null == i ? void 0 : i.title, null == i ? void 0 : i.description],
                        );
                    return (0, s.jsxs)('section', {
                        className: iP().root,
                        ref: t,
                        ...(0, d.Am)(d.e8.landing.WIZARD_BLOCK),
                        children: [
                            c,
                            m,
                            (0, s.jsx)(aK.$, {
                                className: iP().button,
                                icon: (0, s.jsx)(tM.Icon, { variant: 'link', size: 'xxs', className: iP().buttonIcon }),
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
                iB = (0, n.forwardRef)((e, t) => (0, s.jsx)(iD, { forwardRef: t, ...e })),
                iV = {
                    [T.t.COLLECTION_PLAYLIST_WITH_LIKES]: il,
                    [T.t.COLLECTION_FAVOURITE_PLAYLIST]: im,
                    [T.t.OPEN_PLAYLIST]: il,
                    [T.t.SMART_OPEN_PLAYLIST]: il,
                    [T.t.NON_MUSIC_OPEN_PLAYLIST]: il,
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
                    [T.t.WAVES]: iE,
                    [T.t.SETS_BY_WAVES]: iE,
                    [T.t.WAVES_AGENT]: ik,
                    [T.t.SETS_BY_WAVES_AGENT]: ik,
                    [T.t.CHART_TRACKS]: eT,
                    [T.t.COLLECTION_KIDS]: tc,
                    [T.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: tT,
                    [T.t.COLLECTION_PLAYLISTS_CREATED]: tr,
                    [T.t.COLLECTION_PLAYLISTS_LIKED]: tu,
                    [T.t.ALBUM_PROMO]: X,
                    [T.t.SIMPLE_ALBUM_PROMO]: Q,
                    [T.t.ITEM_LIST]: a_,
                    [T.t.OVERVIEW]: a3,
                    [T.t.COLLECTION_ALBUMS]: ex,
                    [T.t.COLLECTION_CLIPS]: ta,
                    [T.t.COLLECTION_TOP_ARTISTS]: th,
                    [T.t.RECENTLY_PLAYED]: i_.g,
                    [T.t.IN_STYLE]: ad,
                    [T.t.SPECIAL]: ih,
                    [T.t.WIZARD]: iB,
                    [T.t.MIXES]: aE,
                    [T.t.MIXES_GRID]: aN.MixesGridBlock,
                    [T.t.MIXES_MUSIC]: af,
                    [T.t.NEUROMUSIC]: aU,
                    [T.t.CONCERT_PLACE]: tx,
                    [T.t.LIKES_AND_HISTORY]: aI,
                    [T.t.NON_MUSIC_EDITORIAL_COMPILATION]: aJ.t,
                    [T.t.COLLECTION_ALBUMS_PRESAVES]: eD,
                    [T.t.CHART_ALBUMS]: aq.S,
                    [T.t.DONATIONS]: t0,
                    [T.t.CONTINUE_LISTEN]: tz,
                    [T.t.DISLIKES]: tq,
                    [T.t.COLLECTION_DOWNLOADED_TRACKS]: tn,
                    [T.t.HISTORY]: iA,
                    [T.t.SEARCH_HISTORY]: iA,
                    [T.t.ARTIST_CONCERTS]: ea,
                    [T.t.ARTIST_POPULAR_TRACKS]: e_,
                    [T.t.ARTIST_RELEASE]: eb,
                    [T.t.FAMILIAR_YOU]: al,
                    [T.t.ARTIST_PICK]: en,
                    [T.t.ARTIST_UPCOMING_RELEASE]: eA,
                    [T.t.COLLECTION_WAVE_AGENT]: tE,
                    [T.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: e5,
                    [T.t.NON_MUSIC_CATEGORY]: aJ.t,
                    [T.t.PODCASTS_CHART_ALBUMS]: aq.S,
                },
                iU = (0, r.PA)((e) => {
                    let { landing: t, block: a, isIntersecting: i, forwardRef: r, onLoad: o, className: c, containerClassName: m, ...u } = e,
                        {
                            isNeededToLoad: g,
                            isLoading: A,
                            isLoaded: T,
                            isRejected: I,
                            isShimmerVisible: h,
                            isShimmerActive: L,
                            isVisible: y,
                            id: S,
                            type: E,
                            meta: N,
                            data: j,
                            hasSentAnalyticsOnLoaded: x,
                            setHasSentAnalyticsOnLoaded: k,
                            setOutdated: R,
                            setIsNeededToLoad: f,
                        } = a;
                    if ((0, b.Q)(a)) return null;
                    let P = iV[a.type],
                        w = (0, _.fBs)(),
                        { settings: K, experiments: O } = (0, _.Pjs)(),
                        M = !O.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') && K.browserInfo && !K.browserInfo.isSafari;
                    (0, n.useEffect)(() => {
                        (i || !y) && g && (0, p.v)(N) && t.getBlock(a);
                    }, [a, i, g, y, t, N]),
                        (0, n.useEffect)(() => {
                            (T || I) && (null == o || o());
                        }, [T, I, o]),
                        (0, n.useEffect)(() => {
                            !x && T && (w(), k(!0));
                        }, [x, T, w, k]);
                    let D = (0, v.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(r)) {
                            var e;
                            return null == (e = r.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return y
                        ? (0, s.jsx)(
                              P,
                              {
                                  setIsNeededToLoad: f,
                                  setOutdated: R,
                                  isLoaded: T,
                                  isLoading: A,
                                  isShimmerVisible: h,
                                  isShimmerActive: L,
                                  isRejected: I,
                                  tracksContainerClassName: C().tracksContainer,
                                  containerClassName: (0, l.$)(C().container, C().important, m),
                                  className: (0, l.$)({ [C().container_withContentVisibility]: M && D }, c),
                                  headerClassName: C().headerContainer,
                                  meta: N,
                                  data: j,
                                  type: E,
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
                iY = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, s.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(_.hf$.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, s.jsx)(iU, { ...t }),
                    });
                });
            var iG = a(83407),
                iW = a.n(iG);
            let iX = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        r = (0, v.L)(() => {
                            if (null == a ? void 0 : a.release)
                                return (0, s.jsx)(iY, { ...i, className: iW().release, containerClassName: iW().releaseCard, block: a.release });
                        }),
                        o = (0, v.L)(() => {
                            if (null == a ? void 0 : a.upcomingRelese)
                                return (0, s.jsx)(iY, { ...i, className: iW().release, containerClassName: iW().releaseCard, block: a.upcomingRelese });
                        }),
                        n = (0, v.L)(() => {
                            if (null == a ? void 0 : a.popularTracks)
                                return (0, s.jsx)(iY, {
                                    ...i,
                                    className: (0, l.$)(iW().popularTracks, { [iW().popularTracks_withReleaseBlock]: !!(null != o ? o : r) }),
                                    block: a.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: iW().root,
                        ...(0, f.getDataAttrFromProps)(i),
                        children: (0, s.jsxs)('div', { className: iW().container, children: [n, null != o ? o : r] }),
                    });
                }),
                iF = (0, n.forwardRef)((e, t) => (0, s.jsx)(iX, { forwardRef: t, ...e }));
            var iH = a(34195),
                iz = a.n(iH);
            let i$ = (0, r.PA)((e) => {
                    let { forwardRef: t, data: a, ...i } = e,
                        l = (0, v.L)(() => {
                            if (null == a ? void 0 : a.familiarYou) return (0, s.jsx)(iY, { ...i, block: a.familiarYou });
                        }),
                        r = (0, v.L)(() => {
                            if (null == a ? void 0 : a.artistPick) return (0, s.jsx)(iY, { ...i, block: a.artistPick });
                        });
                    return (0, s.jsxs)('section', { ref: t, className: iz().root, ...(0, f.getDataAttrFromProps)(i), children: [r, l] });
                }),
                iq = (0, n.forwardRef)((e, t) => (0, s.jsx)(i$, { forwardRef: t, ...e })),
                iJ = { [T.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: iF, [T.t.FAMILIAR_YOU_AND_ARTIST_PICK]: iq },
                iZ = (0, r.PA)((e) => {
                    let { block: t, forwardRef: a, onLoad: i, ...l } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == i || i();
                        }, [t.isVisible, i]),
                        !(0, b.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let r = iJ[t.type];
                    return (0, s.jsx)(r, { data: t.data, ref: a, 'data-intersection-property-id': t.id, ...l });
                }),
                iQ = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, s.jsx)(_.FoH, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(_.hf$.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, s.jsx)(iZ, { ...t }),
                    });
                }),
                i0 = (0, r.PA)((e) => ((0, b.Q)(e.block) ? (0, s.jsx)(iQ, { ...e }) : (0, s.jsx)(iY, { ...e })));
            var i1 = a(1316),
                i3 = a.n(i1),
                i2 = a(93064);
            let i8 = (e) => {
                    let { landing: t, tab: a } = e,
                        { notify: i, dismiss: l } = (0, _.lkh)(),
                        r = (0, n.useRef)(void 0),
                        o = (0, c.c)(() => {
                            a.blocks.forEach((e) => {
                                e.isRejected && (0, p.v)(e.meta) && t.getBlock(e);
                            }),
                                l({ notificationId: r.current }),
                                a.setShouldReloadNotification(!1);
                        });
                    (0, n.useEffect)(() => {
                        a.hasErrorBlocks &&
                            !a.shouldReloadNotification &&
                            setTimeout(() => {
                                (r.current = i((0, s.jsx)(g.LV, { reloadBlocks: o }), { containerId: _.uQT.ERROR, autoClose: !1 })), a.setShouldReloadNotification(!0);
                            });
                    }, [i, o, a.hasErrorBlocks, a.shouldReloadNotification, a]),
                        (0, n.useEffect)(
                            () => () => {
                                l(), (0, i2._n)(a) && a.setShouldReloadNotification(!1);
                            },
                            [l, a],
                        );
                },
                i4 = (0, r.PA)((e) => {
                    var t;
                    let { landing: a, tab: i, tabIndex: l } = e,
                        r = (0, n.useMemo)(() => i.blocks.map(() => (0, n.createRef)()), [i.blocks]),
                        o = (0, m.BL)(r, { freezeOnceVisible: !0 });
                    return (
                        i8({ landing: a, tab: i }),
                        (0, s.jsx)(_.jPc, {
                            children: (0, s.jsx)(_.hjC, {
                                tabId: i.meta.id,
                                tabPos: l + 1,
                                isTabSelectedByDefault: (null == (t = a.meta) ? void 0 : t.selectedTabIndex) === l,
                                children: (0, s.jsx)('div', {
                                    className: i3().root,
                                    children: i.blocks.map((e, t) => {
                                        let { isIntersecting: i } = o[e.id] || {};
                                        return (0, s.jsx)(i0, { landing: a, block: e, blockIndex: t, isIntersecting: i, forwardRef: r[t] }, e.id);
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var i6 = a(17390),
                i5 = a(67648),
                i9 = a(24188);
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
            var se = a(78791),
                st = a.n(se);
            let sa = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: a, resizeObserver: i, isScrolling: l, style: r, ...o } = e,
                        [d, c] = (0, i5.d)(),
                        [u, _] = (0, i5.d)(),
                        { isIntersecting: g } =
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
                        (0, s.jsx)('div', {
                            'data-index': a.index,
                            className: st().root,
                            ref: _,
                            style: r,
                            children: (0, s.jsx)(i0, { ...o, forwardRef: c, isIntersecting: g && !l }),
                        })
                    );
                }),
                si = (0, r.PA)((e) => {
                    var t, a;
                    let { landing: i, tab: l, tabIndex: r } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, _.Pjs)(),
                        [u, g] = (0, i5.d)(),
                        p = (0, n.useRef)(!0),
                        [b, v] = (0, n.useState)(() => Array.from({ length: l.blocks.length }, (e, t) => t)),
                        A = (0, c.c)(() => {
                            let e = [];
                            l.blocks.forEach((t, a) => {
                                var i;
                                (t.isVisible || ((null == (i = t.meta) ? void 0 : i.showPolicy) === i6.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(a);
                            }),
                                v(e);
                        }),
                        C = (0, c.c)((e) => {
                            let t = b[e];
                            if (void 0 === t) return 300;
                            let a = l.blocks[t];
                            return (null == a ? void 0 : a.isVisible) ? i7[a.type] : 0;
                        }),
                        { virtualizer: T, resizeObserver: I } = (0, i9.rA)({
                            count: null != (a = b.length) ? a : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: C,
                            containerRef: u,
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!p.current) return;
                        let t = d.get(_.K3F.BLOCK),
                            a = l.blocks.findIndex((e) => e.id === t);
                        if (!b.includes(a)) return;
                        let i = null == (e = T.getOffsetForIndex(a, 'center')) ? void 0 : e[0];
                        T.scrollToIndex(a, { align: 'center', behavior: 'auto' }), T.scrollOffset && i && 100 > Math.abs(T.scrollOffset - i) && (p.current = !1);
                    }, [b, d, l.blocks, T]);
                    let h = T.getTotalSize(),
                        L = T.getVirtualItems();
                    return (
                        i8({ landing: i, tab: l }),
                        (0, s.jsx)(_.jPc, {
                            children: (0, s.jsx)(_.hjC, {
                                tabId: l.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, s.jsx)('div', {
                                    className: i3().root,
                                    style: { height: ''.concat(h, 'px') },
                                    ref: g,
                                    children: L.map((e) => {
                                        let t = b[e.index],
                                            a = l.blocks[Number(t)];
                                        return a
                                            ? (0, s.jsx)(
                                                  sa,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: i,
                                                      block: a,
                                                      blockIndex: Number(t),
                                                      isScrolling: T.isScrolling,
                                                      onLoad: A,
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
                ss = (0, r.PA)((e) => {
                    var t, a, i;
                    let {
                            landing: r,
                            upperBlocks: o,
                            headerConcealerComponent: m,
                            tabsState: p,
                            containerClassName: b,
                            containerStyle: v,
                            headerClassName: A,
                            tabWithHeadingTitle: C,
                            tabWithCovers: T,
                            tabWithSubtitle: I,
                            stickyHeaderClassName: h,
                            staticHeaderClassName: L,
                            stickyHeaderTabIndex: y,
                            headerVariant: S = g.Vw.COMPOSITE,
                        } = e,
                        { tabs: E } = r,
                        N = (0, n.useId)(),
                        { isScrolling: j } = (0, n.useContext)(g.B9),
                        { contentScrollRef: x } = (0, _.gKY)(),
                        {
                            experiments: k,
                            settings: { isMobile: R },
                        } = (0, _.Pjs)(),
                        f = k.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') ? si : i4,
                        P = (0, c.c)((e) => {
                            var t;
                            R ? window.scrollTo(0, 0) : x && (x.scrollTop = 0), null == (t = p.onTabChange) || t.call(p, e);
                        });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            o,
                            m,
                            (0, s.jsx)(g.Y9, {
                                className: (0, l.$)(i3().header, A),
                                variant: S,
                                stickyClassName: h,
                                staticClassName: L,
                                stickyChild: (0, s.jsx)(g.wI, {
                                    isShimmerVisible: E.isLoading || r.isLoading,
                                    className: i3().stickyTabs,
                                    shimmer: (0, s.jsx)(g.zr, {}),
                                    elementId: N,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    value: p.value,
                                    onTabChange: P,
                                    children:
                                        null == (t = E.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: a } = e;
                                                  return (0, s.jsx)(
                                                      g.oz,
                                                      {
                                                          className: i3().tab,
                                                          value: t,
                                                          'aria-label': a.title,
                                                          title: a.title,
                                                          'aria-hidden': !j && S !== g.Vw.STICKY,
                                                          tabIndex: null != y ? y : j ? 0 : -1,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                                children: (0, s.jsx)(g.wI, {
                                    className: (0, l.$)(i3().tabCarousel, i3().important),
                                    elementId: N,
                                    ...(0, d.Am)(d.e8.landing.MAIN_TABS),
                                    ...p,
                                    children:
                                        null == (a = E.data)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  let { meta: a, data: i } = e;
                                                  return (0, s.jsx)(
                                                      g.oz,
                                                      {
                                                          className: i3().tab,
                                                          value: t,
                                                          'aria-label': a.title,
                                                          title: a.title,
                                                          subtitle: null == i ? void 0 : i.subtitle,
                                                          covers: null == i ? void 0 : i.covers,
                                                          'aria-hidden': j,
                                                          tabIndex: j ? -1 : 0,
                                                          withCovers: T,
                                                          withSubtitle: I,
                                                          withHeading: C,
                                                          isShimmerVisible: E.loadingState === _.GuX.PENDING,
                                                      },
                                                      a.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, s.jsx)('div', {
                                className: b,
                                style: v,
                                children:
                                    null == (i = E.data)
                                        ? void 0
                                        : i.map((e, t) =>
                                              (0, s.jsx)(
                                                  u.TabPanel,
                                                  {
                                                      className: i3().tabPanel,
                                                      name: t,
                                                      value: p.value,
                                                      elementId: N,
                                                      children: (0, s.jsx)(f, { landing: r, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                sl = (0, r.PA)((e) => {
                    var t, a, i, l;
                    let {
                            landing: r,
                            headerConcealerComponent: d,
                            errorComponent: c,
                            containerClassName: g,
                            headerClassName: b,
                            containerStyle: v,
                            tabWithHeadingTitle: A,
                            tabWithCovers: C,
                            tabWithSubtitle: T,
                            staticHeaderClassName: I,
                            stickyHeaderClassName: h,
                            stickyHeaderTabIndex: L,
                            headerVariant: y,
                        } = e,
                        S = (0, o.useSearchParams)(),
                        E = (0, _.XJ9)(),
                        N = ((e) =>
                            (0, n.useCallback)(
                                (t) => {
                                    var a;
                                    let i = null == (a = e.tabs.data) ? void 0 : a[t];
                                    null == i ||
                                        i.blocks.forEach((t) => {
                                            t.isOutdated && (0, p.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(r),
                        { experiments: j } = (0, _.Pjs)(),
                        x = j.checkExperiment(_.zal.WebNextVirtualSkeleton, 'on') ? si : i4,
                        k = (0, n.useMemo)(() => {
                            var e;
                            if (!r.isLoaded) return null;
                            let t = S.get(_.K3F.TAB),
                                a = null == (e = r.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof a && a >= 0 ? a : null;
                        }, [r.isLoaded, r.tabs.data, S]),
                        R = (0, u.useTabsState)(null != (l = null != k ? k : null == (t = r.meta) ? void 0 : t.selectedTabIndex) ? l : 0),
                        f = (0, n.useCallback)(
                            (e) => {
                                var t, a, i;
                                let s = null == (a = r.tabs.data) || null == (t = a[e]) ? void 0 : t.meta.id;
                                if ((e !== R.value && N(R.value), null == (i = R.onTabChange) || i.call(R, e), s)) {
                                    let e = (0, _.bJ)(_.K3F.TAB, s);
                                    e && E(e);
                                }
                            },
                            [E, r.tabs.data, N, R],
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
                                return (0, s.jsx)(_.hjC, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, s.jsx)('div', {
                                        className: i3().upperBlocks,
                                        children: r.upperBlocks.map((e, t) => {
                                            let { isIntersecting: a } = O[e.id] || {};
                                            return (0, s.jsx)(i0, { landing: r, block: e, blockIndex: t, isIntersecting: a, forwardRef: K[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (i = r.upperBlocks) ? void 0 : i.length, r, O, K]);
                    return P
                        ? (0, s.jsx)(ss, {
                              landing: r,
                              upperBlocks: M,
                              headerConcealerComponent: d,
                              tabsState: { value: R.value, onTabChange: f },
                              containerClassName: g,
                              containerStyle: v,
                              headerClassName: b,
                              tabWithHeadingTitle: A,
                              tabWithCovers: C,
                              tabWithSubtitle: T,
                              staticHeaderClassName: I,
                              stickyHeaderClassName: h,
                              stickyHeaderTabIndex: L,
                              headerVariant: y,
                          })
                        : w
                          ? (0, s.jsxs)('div', { className: g, style: v, children: [M, d, (0, s.jsx)(x, { landing: r, tab: w, tabIndex: 0 })] })
                          : M
                            ? (0, s.jsx)(_.jPc, { children: (0, s.jsxs)('div', { className: g, style: v, children: [M, d] }) })
                            : r.isLoadedAndEmpty
                              ? (0, s.jsx)('div', { className: g, style: v, children: c })
                              : null;
                });
        },
    },
]);
