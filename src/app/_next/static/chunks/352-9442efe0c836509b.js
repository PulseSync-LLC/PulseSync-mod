(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [352],
    {
        14514: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
        25174: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        32110: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        37376: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistNotFoundPage: () => d });
            var l = a(62936),
                i = a(19718),
                s = a(44020),
                r = a(9939),
                n = a(42561);
            let o = (0, i.PA)(() => {
                    let { playlist: e } = (0, n.Pjs)();
                    return (
                        (0, n.ACS)(),
                        (0, s.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, l.jsx)(r.M, {})
                    );
                }),
                d = (0, i.PA)(() => (0, l.jsx)(n.nVz, { pageId: n._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, l.jsx)(o, {}) }));
        },
        41860: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        42736: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        43859: (e) => {
            e.exports = {
                root: 'SearchPlaylistInput_root__o14iM',
                content: 'SearchPlaylistInput_content__iDyfU',
                catalog: 'SearchPlaylistInput_catalog__5r6Xm',
                catalog_withTracks: 'SearchPlaylistInput_catalog_withTracks__B2ZYF',
                track: 'SearchPlaylistInput_track__2TGLS',
                shimmerItem: 'SearchPlaylistInput_shimmerItem__V0cOt',
                emptyBlockContainer: 'SearchPlaylistInput_emptyBlockContainer__NSQKG',
                disappearingTrack: 'SearchPlaylistInput_disappearingTrack__D6ja5',
                disappearing: 'SearchPlaylistInput_disappearing__w48Cd',
                appearingTrack: 'SearchPlaylistInput_appearingTrack__CYHzN',
                appearing: 'SearchPlaylistInput_appearing__SafaE',
            };
        },
        47008: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        50566: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        53061: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var l = a(42561);
            async function i(e, t) {
                var a, i, s, r, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let o = await (0, l.WGy)(t.locale),
                    d = null != (i = e.ogTitle) ? i : (0, l.YFq)(e.title, 48, !1),
                    c = o({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: c,
                          description: c,
                          openGraph: (0, l.i$E)({
                              ogTitle: d,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: i } = e,
                                      s = '';
                                  return (
                                      a.ogDescription ? (s = a.ogDescription) : a.description && (s = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (s = (0, l.YFq)(s, 96, !1)),
                                          i({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && i({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: o }),
                              fullUrl: null != (s = t.fullUrl) ? s : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: o({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, l.HRN)({ cardType: l.WfF.APP, title: d, url: t.url, appName: o({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, l.X5i)({
                              additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                              appName: o({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, l.SEs)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { robots: { index: !1, follow: !1 } };
            }
        },
        53887: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPage: () => ej });
            var l = a(62936),
                i = a(79950),
                s = a(19718),
                r = a(69526),
                n = a(44020),
                o = a(47480),
                d = a(23480),
                c = a(8669),
                u = a(55551),
                m = a(65438),
                g = a(44588),
                y = a(92229),
                p = a(42561),
                P = a(85906),
                v = a(67),
                h = a(48320),
                k = a(53061),
                _ = a(65106),
                b = a(32110),
                j = a.n(b),
                x = a(99760),
                f = a(41860),
                I = a.n(f);
            let T = (0, s.PA)(
                (0, n.forwardRef)((e, t) => {
                    var a;
                    let { children: s, 'data-index': r, ...o } = e,
                        { playlist: d } = (0, p.Pjs)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: m,
                            transform: g,
                            transition: y,
                            attributes: P,
                        } = (0, x.gl)({ id: String(null == (a = d.items[r]) ? void 0 : a.key) }),
                        v = (0, n.useCallback)(
                            (e) => {
                                m(e), 'function' == typeof t && t(e);
                            },
                            [t, m],
                        ),
                        h = { transition: y, '--translate-y': g ? ''.concat(Math.round(g.y), 'px') : void 0 };
                    return (0, l.jsx)('div', {
                        ref: v,
                        'data-index': r,
                        style: h,
                        ...o,
                        className: I().root,
                        children: (0, l.jsx)('div', { className: (0, i.$)(I().inner, { [I().dragging]: c }), ...u, ...P, children: s }),
                    });
                }),
            );
            var A = a(49814),
                C = a(71935),
                N = a(2933);
            let S = (e, t) => {
                var a;
                let l = t - 1;
                if (!e.items.length || l < 0 || l > e.items.length) return '';
                let i = e.items[l];
                return (null == i || null == (a = i.data) ? void 0 : a.title) || '';
            };
            var L = a(25358),
                D = a(81959),
                F = a(84646),
                E = a.n(F),
                B = a(66161),
                w = a(20418),
                R = a(25174),
                O = a.n(R);
            let U = (0, s.PA)((e) => {
                    var t, a, i, s, r;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, p.Pjs)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: g } = d.editorFeature,
                        y = c.checkExperiment(p.zal.WebEditorsFeatures, 'on'),
                        P = g && d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!y || !o || (!m && !u && !P)) return null;
                    let v = [],
                        h = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        k = null == (r = o.data) || null == (s = r.albums) || null == (i = s[0]) ? void 0 : i.genre;
                    if ((P && v.push('№'.concat(P)), u && h)) {
                        let e = d.editorFeature.getColorForMajor(h),
                            t = (0, l.jsx)('span', { className: O().major, style: { '--major-color': e }, children: h });
                        v.push(t);
                    }
                    if ((m && k && v.push(k), !v.length)) return null;
                    let _ = v.map((e, t, a) => (0, l.jsxs)(n.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, l.jsxs)(w.Caption, { className: O().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', _, '] \xa0'] });
                }),
                H = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: i, isDragging: s, draggingClassName: r, from: n, utmLink: d, index: c, className: u } = e,
                        { playlist: m, sonataState: g } = (0, p.Pjs)(),
                        { formatMessage: y } = (0, o.A)(),
                        { removeTrackFromPlaylist: P, canRemoveTrackFromPlaylist: v } = (0, B.sR)();
                    return (0, l.jsx)(B.Kd, {
                        beforeTitle: (0, l.jsx)(U, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: i,
                        isDragging: s,
                        track: a,
                        handleRemove: v ? P : void 0,
                        draggingClassName: r,
                        playContextParams: {
                            contextData: { type: D.K.Playlist, meta: m.contextMeta, from: n, utmLink: d },
                            entitiesData: g.unloadedEntitiesDataFromModels,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: y({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                }),
                Y = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: s, isDragging: r, draggingClassName: n, from: d, utmLink: c, index: u, className: m } = e,
                        { playlist: g, sonataState: y } = (0, p.Pjs)(),
                        { formatMessage: P } = (0, o.A)(),
                        { removeTrackFromPlaylist: v, canRemoveTrackFromPlaylist: h } = (0, B.sR)();
                    return (0, l.jsx)(B.Kt, {
                        beforeTitle: (0, l.jsx)(U, { item: t }),
                        withDNDBlock: s,
                        isDragging: r,
                        track: a,
                        handleRemove: h ? v : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: {
                                type: D.K.Playlist,
                                meta: g.contextMeta,
                                from: d,
                                utmLink: c,
                                filter: g.filters.activeFilter,
                                filterName: g.filters.activeFilterName,
                                enableVariousAutoFlow: g.enableVariousAutoFlow,
                            },
                            entitiesData: y.unloadedEntitiesDataFromModels,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: P({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, i.$)(m, { [E().isDuplicate]: g.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                M = (0, s.PA)((e) => {
                    var t, a, s, r, n;
                    let o,
                        { index: c, className: u, isDragging: m, draggingClassName: g } = e,
                        { playlist: y } = (0, p.Pjs)(),
                        v = (null == (t = y.meta) ? void 0 : t.uuid) || y.uuid,
                        { from: h, utmLink: k } = (0, p.fyy)({
                            pageId: p._Q$.PLAYLIST,
                            blockId: p.UfI.PLAYLIST,
                            pageEntityId: v,
                            contextType: D.K.Playlist,
                            contextId: v,
                        }),
                        _ = y.isDragAndDropEnabled,
                        b = null == (a = y.items) ? void 0 : a[c];
                    return (
                        (o =
                            b && b.data && y.meta
                                ? b.data.isTrackNonMusic || (null == (s = b.data.mainAlbum) ? void 0 : s.isNonMusic)
                                    ? (0, l.jsx)(H, {
                                          item: b,
                                          withDNDBlock: _,
                                          isDragging: m,
                                          from: h,
                                          index: c,
                                          track: b.data,
                                          utmLink: k,
                                          draggingClassName: g,
                                          className: u,
                                      })
                                    : (0, l.jsx)(Y, {
                                          item: b,
                                          from: h,
                                          index: c,
                                          track: b.data,
                                          withDNDBlock: _,
                                          isDragging: m,
                                          draggingClassName: g,
                                          className: (0, i.$)(u, { [E().isDuplicate]: y.editorFeature.shouldHighlightDublicatedTrack(b) }),
                                      })
                                : (0, l.jsx)(P.DS, { isActive: !0, className: E().shimmerItem, variant: p.Xjt.PLAYLIST })),
                        (0, l.jsx)(L.xG.Provider, {
                            value: { playlist: y.meta, trackIndex: c },
                            children: (0, l.jsx)(p.FoH, {
                                blockType: d.LA.Tracks,
                                blockId: d.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == y || null == (r = y.meta) ? void 0 : r.uuid),
                                mainObjectType: d.ky.Playlist,
                                children: (0, l.jsx)(p.Bki, {
                                    objectType: d.ky.Track,
                                    objectId: String(null == b || null == (n = b.data) ? void 0 : n.id),
                                    objectPosX: 1,
                                    objectPosY: c + 1,
                                    objectsCount: y.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var K = a(65168),
                $ = a.n(K);
            let V = (0, s.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: i, screenReaderInstructions: s } = ((e) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: l } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: S(e, Number(l.id)), index: l.id });
                                },
                                onDragOver(a) {
                                    let { active: l, over: i } = a,
                                        s = S(e, Number(l.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: s, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: s });
                                },
                                onDragEnd(a) {
                                    let { active: l, over: i } = a,
                                        s = S(e, Number(l.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: s, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: s });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    r = ((e) => {
                        let { notify: t } = (0, p.lkh)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, n.useCallback)(
                            async (i) => {
                                var s, r, n, o;
                                let { from: d, to: c } = i;
                                if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length) return;
                                let u = String(null == (s = e.items[d]) ? void 0 : s.id);
                                if (!u) return;
                                let m = (null == (r = e.items[d]) ? void 0 : r.albumId) ? Number(null == (n = e.items[d]) ? void 0 : n.albumId) : void 0;
                                e.moveTrack(d, c);
                                let g = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, L.Mp)({ operation: L.yC.MOVE, startPosition: d, endPosition: c, tracks: [{ id: u, albumId: m }] })));
                                (g && g === L.Y9.OK) ||
                                    (g === L.Y9.RELOAD ? e.refresh() : e.moveTrack(c, d),
                                    t((0, l.jsx)(P.hT, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: p.uQT.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: d, handleDragStart: c, handleDragCancel: u, sensors: m } = (0, p.YcA)(),
                    g = (0, n.useCallback)(
                        (e) => {
                            let { active: t, over: l } = e;
                            if (!t.id || !(null == l ? void 0 : l.id)) return;
                            let i = a.itemsKeys.indexOf(String(t.id)),
                                s = a.itemsKeys.indexOf(String(l.id));
                            Number.isInteger(i) && Number.isInteger(s) && r({ from: i, to: s });
                        },
                        [r, a.itemsKeys],
                    ),
                    y = (0, n.useMemo)(() => a.itemsKeys.indexOf(String(d)), [d, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, l.jsxs)(A.Mp, {
                          sensors: m,
                          collisionDetection: A.fp,
                          onDragStart: c,
                          onDragEnd: g,
                          onDragCancel: u,
                          modifiers: [C.FN, C.gj],
                          accessibility: { announcements: i, screenReaderInstructions: s },
                          children: [
                              (0, l.jsx)('div', { className: $().root, children: (0, l.jsx)(x.gB, { items: a.itemsKeys, strategy: x._G, children: t }) }),
                              (0, N.createPortal)(
                                  (0, l.jsx)(A.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, l.jsx)('div', {
                                                className: $().draggableItemWrapper,
                                                children: (0, l.jsx)(M, { index: y, className: $().noHoverItem, isDragging: !0, draggingClassName: $().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var W = a(60188),
                X = a(22991),
                Q = a(79670),
                G = a(86734),
                q = a.n(G);
            let z = (0, s.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, o.A)(),
                    s = (0, W.L)(() => {
                        var e, s, r;
                        let n = [],
                            o = 3;
                        return (
                            t.hasSimilarEntities &&
                                (n.push(
                                    (0, l.jsx)(
                                        p.FoH,
                                        {
                                            blockType: d.LA.SimilarEntities,
                                            blockId: d.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (s = t.meta) ? void 0 : s.uuid),
                                            mainObjectType: d.ky.Playlist,
                                            children: (0, l.jsx)(X.Qh, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: q().carouselContainer,
                                                headerClassName: (0, i.$)(q().carouselBlock, q().carouselBlockHeader),
                                                containerClassName: q().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                isLoaded: t.similarEntities.isLoaded,
                                                setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        d.LA.SimilarEntities,
                                    ),
                                ),
                                o++),
                            t.hasSimilarPlaylists &&
                                (n.push(
                                    (0, l.jsx)(
                                        p.FoH,
                                        {
                                            blockId: d.LA.SimilarPlaylists,
                                            blockType: d.LA.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: p.hf$.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (r = t.meta) ? void 0 : r.uuid),
                                            mainObjectType: d.ky.Playlist,
                                            children: (0, l.jsx)(Q.EC, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: q().carouselContainer,
                                                headerClassName: (0, i.$)(q().carouselBlockHeader, q().carouselBlock),
                                                containerClassName: q().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        d.LA.SimilarPlaylists,
                                    ),
                                ),
                                o++),
                            n
                        );
                    });
                return (0, l.jsxs)('div', {
                    className: q().root,
                    children: [(0, l.jsx)('div', { children: s }), (0, l.jsx)(P.A, { children: (0, l.jsx)(P.wi, { className: q().footer }) })],
                });
            });
            var J = a(35085),
                Z = a(19992),
                ee = a(26731),
                et = a(62695);
            let ea = (e) => {
                let { item: t, from: a, tracks: l } = e,
                    i = l
                        .map((e) => {
                            if (e) return (0, B.$b)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: D.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: i,
                };
            };
            var el = a(43859),
                ei = a.n(el);
            let es = (0, s.PA)((e) => {
                var t, a, s, r, u, m, g, y, v;
                let { autoFocus: h, className: k } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    { playlist: b } = (0, p.Pjs)(),
                    { search: j } = b,
                    x = (0, B.Rg)(),
                    f = (0, n.useRef)(0),
                    I = (null == (t = b.meta) ? void 0 : t.isOwnPlaylist) ? p._Q$.OWN_PLAYLISTS : p._Q$.PLAYLIST,
                    { from: T } = (0, p.fyy)({ pageId: I, blockId: p.UfI.FILTERED }),
                    { from: A } = (0, p.fyy)({ pageId: I, blockId: p.UfI.SUGGESTED }),
                    [C, N] = (0, n.useState)(!1);
                (0, n.useEffect)(
                    () => () => {
                        window.clearTimeout(f.current);
                    },
                    [],
                );
                let S = (0, n.useMemo)(
                        () =>
                            (0, Z.A)((e) => {
                                let t = e.trim();
                                j.setText(t),
                                    t && (null == b ? void 0 : b.meta) && (j.reset(), j.getTracks({ uid: b.meta.uid, kind: b.meta.kind })),
                                    (t && 0 !== t.length) || (C && (N(!1), b.refreshTracks()), j.setIdleState());
                            }, 100),
                        [j, b, C],
                    ),
                    F = (0, n.useCallback)(
                        async (e) => {
                            if (b.meta) {
                                j.setAdditionTrackAnimation(e.id);
                                let t = x({ track: e, playlist: b.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        f.current = window.setTimeout(e, 300);
                                    }),
                                    [l] = await Promise.all([t, a]);
                                l === L.Y9.OK ? (j.replaceAdditionTrackInProggress(), N(!0)) : j.resetAdditionTrackAnimation();
                            }
                        },
                        [x, b.meta, j],
                    ),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return j.isLoading
                            ? (0, l.jsx)(P.DS, { isActive: !0, className: ei().shimmerItem, variant: p.Xjt.PLAYLIST })
                            : null == (e = j.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, s;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, l.jsx)(
                                                  p.Bki,
                                                  {
                                                      objectType: d.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (s = j.playlistTracks) ? void 0 : s.length,
                                                      children: (0, l.jsx)(B.Kd, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: ea({ item: e, from: T, tracks: j.playlistTracks }),
                                                          className: (0, i.$)(ei().track, { [ei().appearingTrack]: e.id === j.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, l.jsx)(
                                                  p.Bki,
                                                  {
                                                      objectType: d.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = j.playlistTracks) ? void 0 : a.length,
                                                      children: (0, l.jsx)(B.Kt, {
                                                          className: (0, i.$)(ei().track, { [ei().appearingTrack]: e.id === j.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: ea({ item: e, from: T, tracks: j.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null;
                                });
                    }, [j.isLoading, j.playlistTracks, j.additionTrackInProggress, T]),
                    R = (0, n.useMemo)(() => {
                        var e, t;
                        if (null == (e = b.meta) ? void 0 : e.canUserChange)
                            return j.isLoading
                                ? (0, l.jsx)(P.DS, { isActive: !0, className: ei().shimmerItem, variant: p.Xjt.PLAYLIST })
                                : null == (t = j.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, l.jsx)(
                                                  B.II,
                                                  {
                                                      track: e,
                                                      className: (0, i.$)({ [ei().disappearingTrack]: e.id === j.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: D.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, A),
                                                      onClick: F,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = b.meta) ? void 0 : a.canUserChange, j.isLoading, j.suggestedTracks, j.additionTrackInProggress, A, F]),
                    O = (0, n.useMemo)(() => {
                        var e, t, a;
                        let i = !(null == (e = j.suggestedTracks) ? void 0 : e.length) || !(null == (t = b.meta) ? void 0 : t.canUserChange);
                        return (null == (a = j.playlistTrackIds) ? void 0 : a.length) || !i || j.isLoading
                            ? null
                            : (0, l.jsx)(Q.pA, { className: ei().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (s = j.suggestedTracks) ? void 0 : s.length,
                        null == (r = j.playlistTrackIds) ? void 0 : r.length,
                        j.isLoading,
                        null == (u = b.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(et.D, {
                            className: (0, i.$)(ei().root, k),
                            autoFocus: h,
                            initialValue: j.text,
                            correctedValue: null,
                            placeholder: _({ id: 'search.track-placeholder' }),
                            onChange: S,
                            resetButtonAriaLabel: _({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: j.reset,
                            innerInputProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT),
                            resetButtonProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON),
                            searchIconProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON),
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        j.text &&
                            (0, l.jsxs)('div', {
                                className: ei().content,
                                children: [
                                    O,
                                    (0, l.jsx)(p.FoH, {
                                        blockType: d.LA.Tracks,
                                        blockId: d.LA.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == b || null == (m = b.meta) ? void 0 : m.uuid),
                                        mainObjectType: d.ky.Playlist,
                                        children: E,
                                    }),
                                    Number(null == (g = j.suggestedTracks) ? void 0 : g.length) > 0 &&
                                        (null == (y = b.meta) ? void 0 : y.canUserChange) &&
                                        (0, l.jsx)(
                                            w.Heading,
                                            {
                                                variant: 'h3',
                                                className: (0, i.$)(ei().catalog, { [ei().catalog_withTracks]: null == (v = j.playlistTrackIds) ? void 0 : v.length }),
                                                children: (0, l.jsx)(ee.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    R,
                                ],
                            }),
                    ],
                });
            });
            var er = a(59935),
                en = a(85023),
                eo = a(60655),
                ed = a(42736),
                ec = a.n(ed);
            let eu = (0, s.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: i, setPlaylistStaticFiltersRef: s } = (0, p.gKY)(),
                    r = (0, en.useTabsState)(a.filters.activeFilterIndex),
                    o = (0, n.useRef)(null),
                    d = (0, p.$yB)();
                (0, n.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let c = (0, er.c)((e) => {
                        var t;
                        if (!r.onTabChange || e === r.value) return;
                        setTimeout(() => {
                            var t, a, l;
                            null == (l = o.current) || null == (a = l.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            r.onTabChange(e);
                        let l = null == (t = a.filters.items) ? void 0 : t[e];
                        l && (a.filters.handleFilterClick(l), d({ tabId: l.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, l.jsx)(y.jr, {
                    child: (0, l.jsx)(eo.A, { className: ec().stickyFilters, tabsState: r, handleFilterClick: c, ref: i, isSticky: !0, items: u }),
                    children: (0, l.jsx)(eo.A, {
                        className: ec().staticFilters,
                        tabsState: r,
                        handleFilterClick: c,
                        ref: s,
                        carouselClassName: ec().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var em = a(47008),
                eg = a.n(em);
            let ey = (0, s.PA)(() => {
                    var e;
                    let {
                            experiments: t,
                            advertBanners: {
                                banners: { brandedPlaylistBanner: a },
                            },
                        } = (0, p.Pjs)(),
                        s = (0, g.Qj)(),
                        r = a.isVisible && s.isEnabled;
                    return t.checkExperiment(p.zal.WebNextDisableAds, 'on')
                        ? null
                        : (0, l.jsx)('div', {
                              className: (0, i.$)({ [eg().brandedPlaylistBannerWrapper]: r }),
                              style: null == (e = s.data) ? void 0 : e.style,
                              children: (0, l.jsx)(g.Zr, { creativeClassName: eg().creative }),
                          });
                }),
                ep = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: i, playlist: s } = (0, p.Pjs)();
                    if (!(null == (t = s.meta) ? void 0 : t.kind) || !s.search.isNeededToLoad) return;
                    let r = i.getUploadingTracksByPlaylistKind(s.meta.kind);
                    if (0 !== r.length) return (0, l.jsx)('div', { className: a, children: r.map((e, t) => (0, l.jsx)(B.yY, { track: e }, t)) });
                });
            var eP = a(50566),
                ev = a.n(eP);
            let eh = (0, s.PA)((e) => {
                var t;
                let { playlistHeaderRef: a } = e,
                    {
                        playlist: s,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: r },
                        },
                    } = (0, p.Pjs)(),
                    o = (0, g.Qj)();
                return ((0, n.useEffect)(() => {
                    s.search.isFocused && s.search.removeFocus();
                }, [s.search.isFocused, s.search]),
                s.isLoading || !s.meta || s.isRejected)
                    ? (0, l.jsx)(J.c6, { className: ev().header })
                    : (0, l.jsxs)(p.FoH, {
                          blockType: d.LA.Header,
                          blockId: d.LA.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          mainObjectId: String(null == (t = s.meta) ? void 0 : t.uuid),
                          mainObjectType: d.ky.Playlist,
                          objectsCount: 1,
                          children: [
                              (0, l.jsx)(ey, {}),
                              (0, l.jsx)(J.Jq, {
                                  className: (0, i.$)(ev().header, {
                                      [ev().header_branded]: o.isEnabled,
                                      [ev().header_brandedAxe]: r.isVisible && r.type === p.h8o.BRANDING,
                                  }),
                                  playlist: s.meta,
                                  isDisabled: s.isDisabled,
                                  ref: a,
                              }),
                              (0, l.jsx)(es, { autoFocus: !!(!s.items.length || s.search.isFocused) }),
                              s.isFiltersAvailable && (0, l.jsx)(eu, { playlist: s }),
                              (0, l.jsx)(ep, { className: ev().content }),
                              s.shouldShowEmptyBlock && (0, l.jsx)(Q.pA, { className: ev().emptyPlaylist }),
                          ],
                      });
            });
            var ek = a(33878);
            let e_ = (0, s.PA)((e) => {
                    var t;
                    let { user: a, playlist: i } = e,
                        { formatMessage: s } = (0, o.A)(),
                        r = (0, p.NFA)().get(p.twC),
                        d = (0, p._lF)(r.oldWebHost),
                        c = (0, n.useMemo)(() => {
                            let e =
                                    i.actualLikesCount > 0
                                        ? s({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount })
                                        : s({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(s({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return i.description ? ''.concat(i.description, ' • ').concat(t) : t;
                        }, [s, i.actualLikesCount, i.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, ek.getLinkAttributesBase)('/playlists/:playlistUuid', {
                            params: { playlistUuid: i.uuid },
                            options: { host: 'https://'.concat(d) },
                        }),
                        m = {
                            '@type': 'MusicPlaylist',
                            name: i.title,
                            url: u,
                            description: c,
                            ...(i.modified && { datePublished: i.modified }),
                            ...(i.tracksCount && { numTracks: i.tracksCount }),
                            ...((null == (t = i.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: i.owner.name } }),
                        };
                    return (0, l.jsx)(P.Sj, { value: m });
                }),
                eb = (0, s.PA)((e) => {
                    var t, a, s, b, x;
                    let { userId: f, kind: I, playlistUuid: A, preloadedPlaylistByUuid: C, isWebNextNavigationOn: N } = e,
                        {
                            user: S,
                            playlist: L,
                            settings: { isMobile: D },
                        } = (0, p.Pjs)(),
                        { formatMessage: F } = (0, o.A)(),
                        { contentScrollRef: E, setContentScrollRef: B } = (0, p.gKY)(),
                        { forceUpdateRefCallback: w, offsetY: R } = (0, u.G)(E),
                        O = (0, p.l$t)({ mainObjectType: d.ky.Playlist }),
                        U = (0, p.ytd)(null == L || null == (t = L.meta) ? void 0 : t.averageColor),
                        H = (0, n.useMemo)(() => {
                            var e;
                            return L.isRewind2024Playlist && (null == (e = L.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, p.DPo)(),
                                          a = t === p.Sxu.Light ? 0.7 : 0.36;
                                      return (0, p.eWZ)(e, 0.6, a);
                                  })(L.meta.personalColor)
                                : U;
                        }, [L.isRewind2024Playlist, null == (a = L.meta) ? void 0 : a.personalColor, U]),
                        { topColorStyle: Y, headerStyle: K } = (0, y.QZ)(H, R, N);
                    ((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, p.P7Q)()) ? t : {};
                        (0, n.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, p.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(A),
                        (0, p.Jzs)(L.isResolved),
                        ((e) => {
                            (0, n.useEffect)(() => {
                                if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                                let t = ((e) => {
                                    var t, a, l, i, s, r, n, o, d, c, u, m, g;
                                    let y = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                    return {
                                        owner: null == (t = e.meta) ? void 0 : t.owner,
                                        uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                        kind: (null == (l = e.meta) ? void 0 : l.kind) || 0,
                                        title: (null == (i = e.meta) ? void 0 : i.title) || '',
                                        description: null == (s = e.meta) ? void 0 : s.description,
                                        revision: (null == (r = e.meta) ? void 0 : r.revision) || 0,
                                        snapshot: 0,
                                        trackCount: y.length,
                                        cover: { uri: (null == (n = e.meta) ? void 0 : n.coverUri) || '', prefix: '', type: v.Q.FROM_ALBUM_COVER, custom: !1 },
                                        playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                        available: (null == (d = e.meta) ? void 0 : d.isAvailable) || !0,
                                        visibility: (null == (c = e.meta) ? void 0 : c.visibility) || h.L.PUBLIC,
                                        likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                        modified: (null == (m = e.meta) ? void 0 : m.modified) || '',
                                        created: '',
                                        isBanner: !1,
                                        isPremiere: !1,
                                        durationMs: 0,
                                        collective: !1,
                                        ogImage: (null == (g = e.meta) ? void 0 : g.coverUri) || '',
                                        tags: [],
                                        tracks: y,
                                    };
                                })(e);
                                (0, k.C)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, p.jxB)(e);
                                });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, e]);
                        })(L),
                        (0, p.ACS)(),
                        (0, _.useFreemiumFavouritePlaylistPaywall)(L.isFavouritePlaylist),
                        (0, n.useEffect)(
                            () => (
                                O(!0),
                                () => {
                                    O(!1);
                                }
                            ),
                            [O],
                        ),
                        (0, n.useEffect)(
                            () => () => {
                                L.reset();
                            },
                            [L, A, f, I],
                        );
                    let $ = (0, n.useMemo)(
                            () => ({
                                Header: () => (0, l.jsx)(eh, { playlistHeaderRef: w }),
                                Item: L.isDragAndDropEnabled ? T : void 0,
                                Footer: () => (0, l.jsx)(z, { playlist: L }),
                            }),
                            [w, L, L.isDragAndDropEnabled],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                L.getTracksByRange(e);
                            },
                            [L],
                        ),
                        X = (0, n.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = L.items[e]) ? void 0 : t.key;
                            },
                            [L.items],
                        ),
                        Q = (0, n.useCallback)((e) => e, []),
                        G = (0, g.Qj)();
                    if (
                        (L.isNeededToLoad &&
                            ('string' == typeof A
                                ? (0, n.use)(L.getPlaylistByUuid({ playlistUuid: A, resumeStream: !1, preloadedPlaylist: C }))
                                : 'string' == typeof f &&
                                  'string' == typeof I &&
                                  (0, n.use)(L.getPlaylistByUserIdAndKind({ userId: f, playlistKind: Number(I), resumeStream: !1 }))),
                        L.uuid &&
                            L.isResolved &&
                            L.similarEntities.isNeededToLoad &&
                            L.isSimilarEntitiesEnabled &&
                            (0, n.use)(L.getSimilarEntities({ playlistUuid: L.uuid })),
                        L.isNotFound && (0, r.notFound)(),
                        L.isRejected)
                    )
                        return (0, l.jsx)(m.w, {});
                    let q = G.isEnabled ? P.Vw.BRANDED_PLAYLIST : P.Vw.INNER;
                    return (0, l.jsxs)(p.hjC, {
                        tabId: L.filters.activeFilter || '',
                        tabPos: L.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, l.jsx)(y.hO, {
                                scrollElement: E,
                                children: (0, l.jsxs)('div', {
                                    className: j().wrapper,
                                    style: null == (s = G.data) ? void 0 : s.style,
                                    children: [
                                        (0, l.jsx)(P.Y9, { variant: q, style: K }),
                                        !G.isEnabled && (0, l.jsx)('div', { className: j().averageColorBackground, style: Y }),
                                        (0, l.jsx)(V, {
                                            playlist: L,
                                            children: (0, l.jsx)(P.$$, {
                                                context: {
                                                    listAriaLabel: F(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (b = L.meta) ? void 0 : b.title) || '' },
                                                    ),
                                                },
                                                className: (0, i.$)(j().root, j().important),
                                                listClassName: j().content,
                                                customComponents: $,
                                                computeItemKey: L.isDragAndDropEnabled ? X : Q,
                                                totalCount: L.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, l.jsx)(M, { index: e }),
                                                onGetDataByRange: W,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (x = L.items) ? void 0 : x.length,
                                                handleRef: B,
                                                shouldTriggerRangeChangedOn: [L.filters.activeFilter, L.virtualListItemsCount],
                                                testId: c.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: D,
                                                useWindowScroll: D,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            L.meta && (0, l.jsx)(e_, { user: S, playlist: L.meta }),
                        ],
                    });
                }),
                ej = (0, s.PA)((e) =>
                    (0, l.jsx)(g.AL, {
                        children: (0, l.jsx)(p.nVz, {
                            pageId: p._Q$.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, l.jsx)(p.jPc, { children: (0, l.jsx)(eb, { ...e }) }),
                        }),
                    }),
                );
        },
        54024: (e, t, a) => {
            'use strict';
            a.d(t, { useSetPlaylistFilters: () => r });
            var l = a(44020),
                i = a(81959),
                s = a(42561);
            let r = (e) => {
                let { sonata: t } = e,
                    { sonataState: a } = (0, s.Pjs)();
                (0, l.useEffect)(() => {
                    let e =
                        null == t
                            ? void 0
                            : t.state.queueState.currentEntity.onChange((e) => {
                                  if (null == e ? void 0 : e.context.data) {
                                      if ('filter' in e.context.data) {
                                          let t = null == e ? void 0 : e.context.data.filter;
                                          a.setPlaylistFilter(t);
                                      }
                                      (null == e ? void 0 : e.context.data.type) === i.K.Vibe && a.setPlaylistFilter(void 0);
                                  }
                              });
                    return () => {
                        null == e || e();
                    };
                }, [null == t ? void 0 : t.state.queueState.currentEntity, a]);
            };
        },
        65106: (e, t, a) => {
            'use strict';
            a.d(t, { useFreemiumFavouritePlaylistPaywall: () => s });
            var l = a(44020),
                i = a(42561);
            let s = (e) => {
                let t = (0, i.nXV)(),
                    { paywall: a } = (0, i.Pjs)(),
                    s = t && e;
                (0, l.useEffect)(
                    () => (
                        s && a.openFreemiumCollectionPaywall(),
                        () => {
                            a.clearFreemiumCollectionBarrier();
                        }
                    ),
                    [s, a],
                );
            };
        },
        65168: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        84646: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        86734: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        99746: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistShimmersPage: () => o });
            var l = a(62936),
                i = a(35085),
                s = a(85906),
                r = a(14514),
                n = a.n(r);
            let o = () => (0, l.jsxs)('div', { className: n().root, children: [(0, l.jsx)(s.Y9, { className: n().header }), (0, l.jsx)(i.c6, { isActive: !0 })] });
        },
    },
]);
