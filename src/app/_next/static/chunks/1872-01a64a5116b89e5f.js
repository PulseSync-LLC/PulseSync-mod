(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1872],
    {
        468: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
        5203: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistShimmersPage: () => o });
            var l = a(54486),
                i = a(17656),
                s = a(80585),
                r = a(468),
                n = a.n(r);
            let o = () => (0, l.jsxs)('div', { className: n().root, children: [(0, l.jsx)(s.Y9, { className: n().header }), (0, l.jsx)(i.c6, { isActive: !0 })] });
        },
        9464: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        13296: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        14782: (e, t, a) => {
            'use strict';
            a.d(t, { useSetPlaylistFilters: () => r });
            var l = a(61910),
                i = a(63585),
                s = a(83252);
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
        30520: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        30712: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        41390: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPage: () => ek });
            var l = a(54486),
                i = a(50420),
                s = a(28303),
                r = a(97396),
                n = a(61910),
                o = a(43426),
                d = a(43350),
                c = a(31500),
                u = a(35537),
                m = a(82644),
                g = a(51376),
                p = a(33276),
                y = a(83252),
                P = a(80585),
                v = a(80769),
                h = a(31905),
                k = a(84458),
                _ = a(9464),
                b = a.n(_),
                j = a(37706),
                x = a(85598),
                I = a.n(x);
            let f = (0, s.PA)(
                (0, n.forwardRef)((e, t) => {
                    var a;
                    let { children: s, 'data-index': r, ...o } = e,
                        { playlist: d } = (0, y.Pjs)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: m,
                            transform: g,
                            transition: p,
                            attributes: P,
                        } = (0, j.gl)({ id: String(null == (a = d.items[r]) ? void 0 : a.key) }),
                        v = (0, n.useCallback)(
                            (e) => {
                                m(e), 'function' == typeof t && t(e);
                            },
                            [t, m],
                        ),
                        h = { transition: p, '--translate-y': g ? ''.concat(Math.round(g.y), 'px') : void 0 };
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
            var T = a(95296),
                A = a(19713),
                C = a(92803);
            let N = (e, t) => {
                var a;
                let l = t - 1;
                if (!e.items.length || l < 0 || l > e.items.length) return '';
                let i = e.items[l];
                return (null == i || null == (a = i.data) ? void 0 : a.title) || '';
            };
            var S = a(52733),
                L = a(63585),
                D = a(30520),
                F = a.n(D),
                E = a(21365),
                B = a(97800),
                w = a(13296),
                R = a.n(w);
            let O = (0, s.PA)((e) => {
                    var t, a, i, s, r;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, y.Pjs)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: g } = d.editorFeature,
                        p = c.checkExperiment(y.zal.WebEditorsFeatures, 'on'),
                        P = g && d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!p || !o || (!m && !u && !P)) return null;
                    let v = [],
                        h = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        k = null == (r = o.data) || null == (s = r.albums) || null == (i = s[0]) ? void 0 : i.genre;
                    if ((P && v.push('№'.concat(P)), u && h)) {
                        let e = d.editorFeature.getColorForMajor(h),
                            t = (0, l.jsx)('span', { className: R().major, style: { '--major-color': e }, children: h });
                        v.push(t);
                    }
                    if ((m && k && v.push(k), !v.length)) return null;
                    let _ = v.map((e, t, a) => (0, l.jsxs)(n.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, l.jsxs)(B.Caption, { className: R().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', _, '] \xa0'] });
                }),
                U = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: i, isDragging: s, draggingClassName: r, from: n, utmLink: d, index: c, className: u } = e,
                        { playlist: m, sonataState: g } = (0, y.Pjs)(),
                        { formatMessage: p } = (0, o.A)(),
                        { removeTrackFromPlaylist: P, canRemoveTrackFromPlaylist: v } = (0, E.sR)();
                    return (0, l.jsx)(E.Kd, {
                        beforeTitle: (0, l.jsx)(O, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: i,
                        isDragging: s,
                        track: a,
                        handleRemove: v ? P : void 0,
                        draggingClassName: r,
                        playContextParams: {
                            contextData: { type: L.K.Playlist, meta: m.contextMeta, from: n, utmLink: d },
                            entitiesData: g.unloadedEntitiesDataFromModels,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: p({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                }),
                Y = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: s, isDragging: r, draggingClassName: n, from: d, utmLink: c, index: u, className: m } = e,
                        { playlist: g, sonataState: p } = (0, y.Pjs)(),
                        { formatMessage: P } = (0, o.A)(),
                        { removeTrackFromPlaylist: v, canRemoveTrackFromPlaylist: h } = (0, E.sR)();
                    return (0, l.jsx)(E.Kt, {
                        beforeTitle: (0, l.jsx)(O, { item: t }),
                        withDNDBlock: s,
                        isDragging: r,
                        track: a,
                        handleRemove: h ? v : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: {
                                type: L.K.Playlist,
                                meta: g.contextMeta,
                                from: d,
                                utmLink: c,
                                filter: g.filters.activeFilter,
                                filterName: g.filters.activeFilterName,
                                enableVariousAutoFlow: g.enableVariousAutoFlow,
                            },
                            entitiesData: p.unloadedEntitiesDataFromModels,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: P({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, i.$)(m, { [F().isDuplicate]: g.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                H = (0, s.PA)((e) => {
                    var t, a, s, r, n;
                    let o,
                        { index: c, className: u, isDragging: m, draggingClassName: g } = e,
                        { playlist: p } = (0, y.Pjs)(),
                        v = (null == (t = p.meta) ? void 0 : t.uuid) || p.uuid,
                        { from: h, utmLink: k } = (0, y.fyy)({
                            pageId: y._Q$.PLAYLIST,
                            blockId: y.UfI.PLAYLIST,
                            pageEntityId: v,
                            contextType: L.K.Playlist,
                            contextId: v,
                        }),
                        _ = p.isDragAndDropEnabled,
                        b = null == (a = p.items) ? void 0 : a[c];
                    return (
                        (o =
                            b && b.data && p.meta
                                ? b.data.isTrackNonMusic || (null == (s = b.data.mainAlbum) ? void 0 : s.isNonMusic)
                                    ? (0, l.jsx)(U, {
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
                                          className: (0, i.$)(u, { [F().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(b) }),
                                      })
                                : (0, l.jsx)(P.DS, { isActive: !0, className: F().shimmerItem, variant: y.Xjt.PLAYLIST })),
                        (0, l.jsx)(S.xG.Provider, {
                            value: { playlist: p.meta, trackIndex: c },
                            children: (0, l.jsx)(y.FoH, {
                                blockType: d.LA.Tracks,
                                blockId: d.LA.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == p || null == (r = p.meta) ? void 0 : r.uuid),
                                mainObjectType: d.ky.Playlist,
                                children: (0, l.jsx)(y.Bki, {
                                    objectType: d.ky.Track,
                                    objectId: String(null == b || null == (n = b.data) ? void 0 : n.id),
                                    objectPosX: 1,
                                    objectPosY: c + 1,
                                    objectsCount: p.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var M = a(62882),
                K = a.n(M);
            let $ = (0, s.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: i, screenReaderInstructions: s } = ((e) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: l } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: N(e, Number(l.id)), index: l.id });
                                },
                                onDragOver(a) {
                                    let { active: l, over: i } = a,
                                        s = N(e, Number(l.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: s, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: s });
                                },
                                onDragEnd(a) {
                                    let { active: l, over: i } = a,
                                        s = N(e, Number(l.id));
                                    return i
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: s, index: i.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: s });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    r = ((e) => {
                        let { notify: t } = (0, y.lkh)(),
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
                                    : o.changePlaylist((0, S.Mp)({ operation: S.yC.MOVE, startPosition: d, endPosition: c, tracks: [{ id: u, albumId: m }] })));
                                (g && g === S.Y9.OK) ||
                                    (g === S.Y9.RELOAD ? e.refresh() : e.moveTrack(c, d),
                                    t((0, l.jsx)(P.hT, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: y.uQT.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: d, handleDragStart: c, handleDragCancel: u, sensors: m } = (0, y.YcA)(),
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
                    p = (0, n.useMemo)(() => a.itemsKeys.indexOf(String(d)), [d, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, l.jsxs)(T.Mp, {
                          sensors: m,
                          collisionDetection: T.fp,
                          onDragStart: c,
                          onDragEnd: g,
                          onDragCancel: u,
                          modifiers: [A.FN, A.gj],
                          accessibility: { announcements: i, screenReaderInstructions: s },
                          children: [
                              (0, l.jsx)('div', { className: K().root, children: (0, l.jsx)(j.gB, { items: a.itemsKeys, strategy: j._G, children: t }) }),
                              (0, C.createPortal)(
                                  (0, l.jsx)(T.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, l.jsx)('div', {
                                                className: K().draggableItemWrapper,
                                                children: (0, l.jsx)(H, { index: p, className: K().noHoverItem, isDragging: !0, draggingClassName: K().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var W = a(27510),
                V = a(6664),
                X = a(83909),
                Q = a(99456),
                G = a.n(Q);
            let q = (0, s.PA)((e) => {
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
                                        y.FoH,
                                        {
                                            blockType: d.LA.SimilarEntities,
                                            blockId: d.LA.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (s = t.meta) ? void 0 : s.uuid),
                                            mainObjectType: d.ky.Playlist,
                                            children: (0, l.jsx)(V.Qh, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: G().carouselContainer,
                                                headerClassName: (0, i.$)(G().carouselBlock, G().carouselBlockHeader),
                                                containerClassName: G().carouselBlock,
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
                                        y.FoH,
                                        {
                                            blockId: d.LA.SimilarPlaylists,
                                            blockType: d.LA.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: y.hf$.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (r = t.meta) ? void 0 : r.uuid),
                                            mainObjectType: d.ky.Playlist,
                                            children: (0, l.jsx)(X.EC, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: G().carouselContainer,
                                                headerClassName: (0, i.$)(G().carouselBlockHeader, G().carouselBlock),
                                                containerClassName: G().carouselBlock,
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
                    className: G().root,
                    children: [(0, l.jsx)('div', { children: s }), (0, l.jsx)(P.A, { children: (0, l.jsx)(P.wi, { className: G().footer }) })],
                });
            });
            var z = a(17656),
                J = a(12186),
                Z = a(47713),
                ee = a(79021);
            let et = (e) => {
                let { item: t, from: a, tracks: l } = e,
                    i = l
                        .map((e) => {
                            if (e) return (0, E.$b)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: L.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: i,
                };
            };
            var ea = a(92737),
                el = a.n(ea);
            let ei = (0, s.PA)((e) => {
                var t, a, s, r, u, m, g, p, v;
                let { autoFocus: h, className: k } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    { playlist: b } = (0, y.Pjs)(),
                    { search: j } = b,
                    x = (0, E.Rg)(),
                    I = (0, n.useRef)(0),
                    f = (null == (t = b.meta) ? void 0 : t.isOwnPlaylist) ? y._Q$.OWN_PLAYLISTS : y._Q$.PLAYLIST,
                    { from: T } = (0, y.fyy)({ pageId: f, blockId: y.UfI.FILTERED }),
                    { from: A } = (0, y.fyy)({ pageId: f, blockId: y.UfI.SUGGESTED }),
                    [C, N] = (0, n.useState)(!1);
                (0, n.useEffect)(
                    () => () => {
                        window.clearTimeout(I.current);
                    },
                    [],
                );
                let D = (0, n.useMemo)(
                        () =>
                            (0, J.A)((e) => {
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
                                        I.current = window.setTimeout(e, 300);
                                    }),
                                    [l] = await Promise.all([t, a]);
                                l === S.Y9.OK ? (j.replaceAdditionTrackInProggress(), N(!0)) : j.resetAdditionTrackAnimation();
                            }
                        },
                        [x, b.meta, j],
                    ),
                    w = (0, n.useMemo)(() => {
                        var e;
                        return j.isLoading
                            ? (0, l.jsx)(P.DS, { isActive: !0, className: el().shimmerItem, variant: y.Xjt.PLAYLIST })
                            : null == (e = j.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, s;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, l.jsx)(
                                                  y.Bki,
                                                  {
                                                      objectType: d.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (s = j.playlistTracks) ? void 0 : s.length,
                                                      children: (0, l.jsx)(E.Kd, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: et({ item: e, from: T, tracks: j.playlistTracks }),
                                                          className: (0, i.$)(el().track, { [el().appearingTrack]: e.id === j.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, l.jsx)(
                                                  y.Bki,
                                                  {
                                                      objectType: d.ky.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = j.playlistTracks) ? void 0 : a.length,
                                                      children: (0, l.jsx)(E.Kt, {
                                                          className: (0, i.$)(el().track, { [el().appearingTrack]: e.id === j.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: et({ item: e, from: T, tracks: j.playlistTracks }),
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
                                ? (0, l.jsx)(P.DS, { isActive: !0, className: el().shimmerItem, variant: y.Xjt.PLAYLIST })
                                : null == (t = j.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, l.jsx)(
                                                  E.II,
                                                  {
                                                      track: e,
                                                      className: (0, i.$)({ [el().disappearingTrack]: e.id === j.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: L.K.Various, meta: { id: e.entityId }, from: t },
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
                            : (0, l.jsx)(X.pA, { className: el().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (s = j.suggestedTracks) ? void 0 : s.length,
                        null == (r = j.playlistTrackIds) ? void 0 : r.length,
                        j.isLoading,
                        null == (u = b.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(ee.D, {
                            className: (0, i.$)(el().root, k),
                            autoFocus: h,
                            initialValue: j.text,
                            correctedValue: null,
                            placeholder: _({ id: 'search.track-placeholder' }),
                            onChange: D,
                            resetButtonAriaLabel: _({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: j.reset,
                            innerInputProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT),
                            resetButtonProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON),
                            searchIconProps: (0, c.Am)(c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON),
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        j.text &&
                            (0, l.jsxs)('div', {
                                className: el().content,
                                children: [
                                    O,
                                    (0, l.jsx)(y.FoH, {
                                        blockType: d.LA.Tracks,
                                        blockId: d.LA.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == b || null == (m = b.meta) ? void 0 : m.uuid),
                                        mainObjectType: d.ky.Playlist,
                                        children: w,
                                    }),
                                    Number(null == (g = j.suggestedTracks) ? void 0 : g.length) > 0 &&
                                        (null == (p = b.meta) ? void 0 : p.canUserChange) &&
                                        (0, l.jsx)(
                                            B.Heading,
                                            {
                                                variant: 'h3',
                                                className: (0, i.$)(el().catalog, { [el().catalog_withTracks]: null == (v = j.playlistTrackIds) ? void 0 : v.length }),
                                                children: (0, l.jsx)(Z.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    R,
                                ],
                            }),
                    ],
                });
            });
            var es = a(8817),
                er = a(51321),
                en = a(77653),
                eo = a(66810),
                ed = a.n(eo);
            let ec = (0, s.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: i, setPlaylistStaticFiltersRef: s } = (0, y.gKY)(),
                    r = (0, er.useTabsState)(a.filters.activeFilterIndex),
                    o = (0, n.useRef)(null),
                    d = (0, y.$yB)();
                (0, n.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let c = (0, es.c)((e) => {
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
                return (0, l.jsx)(p.jr, {
                    child: (0, l.jsx)(en.A, { className: ed().stickyFilters, tabsState: r, handleFilterClick: c, ref: i, isSticky: !0, items: u }),
                    children: (0, l.jsx)(en.A, {
                        className: ed().staticFilters,
                        tabsState: r,
                        handleFilterClick: c,
                        ref: s,
                        carouselClassName: ed().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var eu = a(98898),
                em = a.n(eu);
            let eg = (0, s.PA)(() => {
                    var e;
                    let {
                            experiments: t,
                            advertBanners: {
                                banners: { brandedPlaylistBanner: a },
                            },
                        } = (0, y.Pjs)(),
                        s = (0, g.Qj)(),
                        r = a.isVisible && s.isEnabled;
                    return t.checkExperiment(y.zal.WebNextDisableAds, 'on')
                        ? null
                        : (0, l.jsx)('div', {
                              className: (0, i.$)({ [em().brandedPlaylistBannerWrapper]: r }),
                              style: null == (e = s.data) ? void 0 : e.style,
                              children: (0, l.jsx)(g.Zr, { creativeClassName: em().creative }),
                          });
                }),
                ep = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: i, playlist: s } = (0, y.Pjs)();
                    if (!(null == (t = s.meta) ? void 0 : t.kind) || !s.search.isNeededToLoad) return;
                    let r = i.getUploadingTracksByPlaylistKind(s.meta.kind);
                    if (0 !== r.length) return (0, l.jsx)('div', { className: a, children: r.map((e, t) => (0, l.jsx)(E.yY, { track: e }, t)) });
                });
            var ey = a(30712),
                eP = a.n(ey);
            let ev = (0, s.PA)((e) => {
                    var t;
                    let { playlistHeaderRef: a } = e,
                        { playlist: s } = (0, y.Pjs)(),
                        r = (0, g.Qj)();
                    return ((0, n.useEffect)(() => {
                        s.search.isFocused && s.search.removeFocus();
                    }, [s.search.isFocused, s.search]),
                    s.isLoading || !s.meta || s.isRejected)
                        ? (0, l.jsx)(z.c6, { className: eP().header })
                        : (0, l.jsxs)(y.FoH, {
                              blockType: d.LA.Header,
                              blockId: d.LA.Header,
                              blockPosX: 1,
                              blockPosY: 1,
                              mainObjectId: String(null == (t = s.meta) ? void 0 : t.uuid),
                              mainObjectType: d.ky.Playlist,
                              objectsCount: 1,
                              children: [
                                  (0, l.jsx)(eg, {}),
                                  (0, l.jsx)(z.Jq, {
                                      className: (0, i.$)(eP().header, { [eP().header_branded]: r.isEnabled }),
                                      playlist: s.meta,
                                      isDisabled: s.isDisabled,
                                      ref: a,
                                  }),
                                  (0, l.jsx)(ei, { autoFocus: !!(!s.items.length || s.search.isFocused) }),
                                  s.isFiltersAvailable && (0, l.jsx)(ec, { playlist: s }),
                                  (0, l.jsx)(ep, { className: eP().content }),
                                  s.shouldShowEmptyBlock && (0, l.jsx)(X.pA, { className: eP().emptyPlaylist }),
                              ],
                          });
                }),
                eh = (0, s.PA)((e) => {
                    var t, a, s, _, j;
                    let { userId: x, kind: I, playlistUuid: T, preloadedPlaylistByUuid: A, isWebNextNavigationOn: C } = e,
                        {
                            playlist: N,
                            settings: { isMobile: S },
                        } = (0, y.Pjs)(),
                        { formatMessage: L } = (0, o.A)(),
                        { contentScrollRef: D, setContentScrollRef: F } = (0, y.gKY)(),
                        { forceUpdateRefCallback: E, offsetY: B } = (0, u.G)(D),
                        w = (0, y.l$t)({ mainObjectType: d.ky.Playlist }),
                        R = (0, y.ytd)(null == N || null == (t = N.meta) ? void 0 : t.averageColor),
                        O = (0, n.useMemo)(() => {
                            var e;
                            return N.isRewind2024Playlist && (null == (e = N.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, y.DPo)(),
                                          a = t === y.Sxu.Light ? 0.7 : 0.36;
                                      return (0, y.eWZ)(e, 0.6, a);
                                  })(N.meta.personalColor)
                                : R;
                        }, [N.isRewind2024Playlist, null == (a = N.meta) ? void 0 : a.personalColor, R]),
                        { topColorStyle: U, headerStyle: Y } = (0, p.QZ)(O, B, C);
                    ((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, y.P7Q)()) ? t : {};
                        (0, n.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, y.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(T),
                        (0, y.Jzs)(N.isResolved),
                        ((e) => {
                            (0, n.useEffect)(() => {
                                if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                                let t = ((e) => {
                                    var t, a, l, i, s, r, n, o, d, c, u, m, g;
                                    let p = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                    return {
                                        owner: null == (t = e.meta) ? void 0 : t.owner,
                                        uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                        kind: (null == (l = e.meta) ? void 0 : l.kind) || 0,
                                        title: (null == (i = e.meta) ? void 0 : i.title) || '',
                                        description: null == (s = e.meta) ? void 0 : s.description,
                                        revision: (null == (r = e.meta) ? void 0 : r.revision) || 0,
                                        snapshot: 0,
                                        trackCount: p.length,
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
                                        tracks: p,
                                    };
                                })(e);
                                (0, k.C)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, y.jxB)(e);
                                });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, e]);
                        })(N),
                        (0, y.ACS)(),
                        (0, n.useEffect)(
                            () => (
                                w(!0),
                                () => {
                                    w(!1);
                                }
                            ),
                            [w],
                        ),
                        (0, n.useEffect)(
                            () => () => {
                                N.reset();
                            },
                            [N, T, x, I],
                        );
                    let M = (0, n.useMemo)(
                            () => ({
                                Header: () => (0, l.jsx)(ev, { playlistHeaderRef: E }),
                                Item: N.isDragAndDropEnabled ? f : void 0,
                                Footer: () => (0, l.jsx)(q, { playlist: N }),
                            }),
                            [E, N, N.isDragAndDropEnabled],
                        ),
                        K = (0, n.useCallback)(
                            (e) => {
                                N.getTracksByRange(e);
                            },
                            [N],
                        ),
                        W = (0, n.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = N.items[e]) ? void 0 : t.key;
                            },
                            [N.items],
                        ),
                        V = (0, n.useCallback)((e) => e, []),
                        X = (0, g.Qj)();
                    if (
                        (N.isNeededToLoad &&
                            ('string' == typeof T
                                ? (0, n.use)(N.getPlaylistByUuid({ playlistUuid: T, resumeStream: !1, preloadedPlaylist: A }))
                                : 'string' == typeof x &&
                                  'string' == typeof I &&
                                  (0, n.use)(N.getPlaylistByUserIdAndKind({ userId: x, playlistKind: Number(I), resumeStream: !1 }))),
                        N.uuid &&
                            N.isResolved &&
                            N.similarEntities.isNeededToLoad &&
                            N.isSimilarEntitiesEnabled &&
                            (0, n.use)(N.getSimilarEntities({ playlistUuid: N.uuid })),
                        N.isNotFound && (0, r.notFound)(),
                        N.isRejected)
                    )
                        return (0, l.jsx)(m.w, {});
                    let Q = X.isEnabled ? P.Vw.BRANDED_PLAYLIST : P.Vw.INNER;
                    return (0, l.jsx)(y.hjC, {
                        tabId: N.filters.activeFilter || '',
                        tabPos: N.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: (0, l.jsx)(p.hO, {
                            scrollElement: D,
                            children: (0, l.jsxs)('div', {
                                className: b().wrapper,
                                style: null == (s = X.data) ? void 0 : s.style,
                                children: [
                                    (0, l.jsx)(P.Y9, { variant: Q, style: Y }),
                                    !X.isEnabled && (0, l.jsx)('div', { className: b().averageColorBackground, style: U }),
                                    (0, l.jsx)($, {
                                        playlist: N,
                                        children: (0, l.jsx)(P.$$, {
                                            context: {
                                                listAriaLabel: L(
                                                    { id: 'entity-names.playlist-tracks-list' },
                                                    { playlistName: (null == (_ = N.meta) ? void 0 : _.title) || '' },
                                                ),
                                            },
                                            className: (0, i.$)(b().root, b().important),
                                            listClassName: b().content,
                                            customComponents: M,
                                            computeItemKey: N.isDragAndDropEnabled ? W : V,
                                            totalCount: N.virtualListItemsCount,
                                            itemContentCallback: (e) => (0, l.jsx)(H, { index: e }),
                                            onGetDataByRange: K,
                                            debounceDurationInMs: 300,
                                            initialItemCount: null == (j = N.items) ? void 0 : j.length,
                                            handleRef: F,
                                            shouldTriggerRangeChangedOn: [N.filters.activeFilter, N.virtualListItemsCount],
                                            testId: c.Xk.playlist.PLAYLIST_PAGE,
                                            isMobileLayout: S,
                                            useWindowScroll: S,
                                            withFooter: !0,
                                            withForceScroll: !0,
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                ek = (0, s.PA)((e) =>
                    (0, l.jsx)(g.AL, {
                        children: (0, l.jsx)(y.nVz, {
                            pageId: y._Q$.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, l.jsx)(y.jPc, { children: (0, l.jsx)(eh, { ...e }) }),
                        }),
                    }),
                );
        },
        62882: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        66810: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        84458: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var l = a(83252);
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
        85598: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        92737: (e) => {
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
        94094: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistNotFoundPage: () => d });
            var l = a(54486),
                i = a(28303),
                s = a(61910),
                r = a(42421),
                n = a(83252);
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
        98898: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        99456: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
    },
]);
