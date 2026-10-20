(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3424],
    {
        589: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            let i = 1e3;
        },
        929: (e) => {
            e.exports = {
                menuContent: 'ContextMenuAddTracksToPlaylistItem_menuContent__xq7AW',
                playlistList: 'ContextMenuAddTracksToPlaylistItem_playlistList__B4kxD',
                virtualPlaylistList: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistList__iC936',
                virtualPlaylistItem: 'ContextMenuAddTracksToPlaylistItem_virtualPlaylistItem__c7vyn',
                searchSection: 'ContextMenuAddTracksToPlaylistItem_searchSection__XKQcm',
                searchField: 'ContextMenuAddTracksToPlaylistItem_searchField__02VVy',
                playlistItemIcon: 'ContextMenuAddTracksToPlaylistItem_playlistItemIcon__76dbD',
                playlistItemShimmer: 'ContextMenuAddTracksToPlaylistItem_playlistItemShimmer__2WkFc',
                playlistItem: 'ContextMenuAddTracksToPlaylistItem_playlistItem___kFlm',
                emptyState: 'ContextMenuAddTracksToPlaylistItem_emptyState__vrM8b',
                createPlaylistButton: 'ContextMenuAddTracksToPlaylistItem_createPlaylistButton__IlAeY',
                menuDivider: 'ContextMenuAddTracksToPlaylistItem_menuDivider__oZg1N',
            };
        },
        1230: (e) => {
            e.exports = { root: 'PageHeaderPlaylistBrandingLink_root__7dQVL' };
        },
        6519: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylist_root__yJBii',
                trailerControl: 'PageHeaderPlaylist_trailerControl__grrD9',
                pinControl: 'PageHeaderPlaylist_pinControl__hJOde',
                downloadControl: 'PageHeaderPlaylist_downloadControl__ijcAx',
                menuControl: 'PageHeaderPlaylist_menuControl__RGH0G',
                likeControl: 'PageHeaderPlaylist_likeControl__bCypn',
                controls: 'PageHeaderPlaylist_controls__uSwwK',
                mainControls: 'PageHeaderPlaylist_mainControls__k_S_i',
                ugcControls: 'PageHeaderPlaylist_ugcControls__9q8Ne',
            };
        },
        7134: (e) => {
            e.exports = {
                root: 'PlaylistPage_root__ajyaP',
                important: 'PlaylistPage_important__1Xpl5',
                wrapper: 'PlaylistPage_wrapper__XLjbD',
                averageColorBackground: 'PlaylistPage_averageColorBackground__3wEkw',
                content: 'PlaylistPage_content__T7zOm',
                brandedPlaylistBannerCreative: 'PlaylistPage_brandedPlaylistBannerCreative__fr6ZP',
            };
        },
        7929: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        9552: (e) => {
            e.exports = {
                brandedPlaylistBannerWrapper: 'PlaylistPageHeaderBranding_brandedPlaylistBannerWrapper__S8BTI',
                creative: 'PlaylistPageHeaderBranding_creative__5OXtq',
            };
        },
        10499: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(12797));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        10944: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                r = a(74631),
                n = a(23976),
                o = a(27954),
                d = a(56918),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, o.g)(),
                    u = (0, r.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(n.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(n.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(n.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(n.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(n.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(n.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        11560: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(25839),
                l = a(89288);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        17226: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        18382: (e, t, a) => {
            'use strict';

            a.d(t, { S: () => ip });
            // for PulseSync WebHost: BEGIN imports for native addon playlist header and context menu items
            var pulseSyncHeaderReact = a(74631),
                pulseSyncHeaderJsx = a(25839),
                pulseSyncHeaderText = a(4254),
                pulseSyncHeaderIcon = a(66738);

            var pulseSyncMenuJsx = a(25839),
                pulseSyncMenuItems = a(10820),
                pulseSyncMenuIcons = a(66738);
            // for PulseSync WebHost: END imports for native addon playlist header and context menu items
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                r = a(84059),
                n = a(74631),
                o = a(39004),
                d = a(44031),
                c = a(61493),
                u = a(72115),
                m = a(64715),
                p = a(89725),
                _ = a(27669),
                y = a(92511),
                g = a(25469),
                v = a(59911),
                h = a(1407),
                x = a(20258),
                P = a(22293),
                A = a(83243),
                T = a(95858),
                f = a(10322),
                b = a(39058),
                C = a(58509),
                k = a(89192),
                I = a(30716),
                S = a(27954),
                L = a(10603),
                j = a(6968),
                N = a(61732),
                E = a(47127),
                D = a(11871),
                R = a(12234),
                w = a(89221),
                O = a(27935),
                U = a(41016),
                M = a(80461),
                B = a(22403),
                F = a(95445);
            async function H(e, t) {
                var a, i, l, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, w.W)(t.locale),
                    o = null != (i = e.ogTitle) ? i : (0, B.Y)(e.title, 48, !1),
                    d = n({ id: 'metadata.playlist-title' }, { playlistTitle: e.title });
                return (null == (a = e.owner) ? void 0 : a.verified)
                    ? {
                          title: d,
                          description: d,
                          openGraph: (0, O.i)({
                              ogTitle: o,
                              ogDescription: (function (e) {
                                  var t;
                                  let { playlistMeta: a, messageFormatter: i } = e,
                                      l = '';
                                  return (
                                      a.ogDescription ? (l = a.ogDescription) : a.description && (l = a.description.replace(/\[(.*?)\]\(.*?\)/gi, '$1')),
                                      [
                                          (l = (0, B.Y)(l, 96, !1)),
                                          i({ id: 'metadata.playlist' }),
                                          (null != (t = a.likesCount) ? t : 0) > 0 && i({ id: 'metadata.likes-counter' }, { counter: a.likesCount }),
                                      ]
                                          .filter(Boolean)
                                          .join(' • ')
                                  );
                              })({ playlistMeta: e, messageFormatter: n }),
                              fullUrl: null != (l = t.fullUrl) ? l : '',
                              locale: t.locale,
                              ogImage: e.ogImage,
                              siteName: n({ id: 'metadata.yandex-music' }),
                              ogType: 'music.playlist',
                          }),
                          twitter: (0, U.H)({ cardType: M.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, R.X)({
                              additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                              appName: n({ id: 'metadata.yandex-music' }),
                          }),
                          alternates: (0, F.S)('/playlists/:playlistUuid', t.tld, { params: { playlistUuid: e.playlistUuid } }),
                      }
                    : { robots: { index: !1, follow: !1 } };
            }
            var Y = a(78143),
                W = a(21213),
                z = a(49337),
                K = a(96618),
                G = a(43354),
                V = a(25895),
                $ = a(7134),
                X = a.n($),
                q = a(74268),
                Q = a(37588),
                Z = a.n(Q);
            let J = (0, s.PA)(
                (0, n.forwardRef)((e, t) => {
                    var a;
                    let { children: s, 'data-index': r, ...o } = e,
                        { playlist: d } = (0, S.g)(),
                        {
                            isDragging: c,
                            listeners: u,
                            setNodeRef: m,
                            transform: p,
                            transition: _,
                            attributes: y,
                        } = (0, q.gl)({ id: String(null == (a = d.items[r]) ? void 0 : a.key) }),
                        g = (0, n.useCallback)(
                            (e) => {
                                (m(e), 'function' == typeof t && t(e));
                            },
                            [t, m],
                        ),
                        v = { transition: _, '--translate-y': p ? ''.concat(Math.round(p.y), 'px') : void 0 };
                    return (0, i.jsx)('div', {
                        ref: g,
                        'data-index': r,
                        style: v,
                        ...o,
                        className: Z().root,
                        children: (0, i.jsx)('div', { className: (0, l.$)(Z().inner, { [Z().dragging]: c }), ...u, ...y, children: s }),
                    });
                }),
            );
            var ee = a(98797),
                et = a(10499),
                ea = a(71910),
                ei = a(24252);
            let el = (e, t) => {
                var a;
                let i = t - 1;
                if (!e.items.length || i < 0 || i > e.items.length) return '';
                let l = e.items[i];
                return (null == l || null == (a = l.data) ? void 0 : a.title) || '';
            };
            var es = a(86064),
                er = a(27264),
                en = a(45146),
                eo = a(91149),
                ed = a(92942),
                ec = a(57549),
                eu = a(22939),
                em = a(84117),
                ep = a(40110),
                e_ = a(57138),
                ey = a(95314),
                eg = a(30290),
                ev = a(3718),
                eh = a(97805),
                ex = a(80278),
                eP = a.n(ex),
                eA = a(88033),
                eT = a(51549),
                ef = a(4254),
                eb = a(44806),
                eC = a(81798),
                ek = a.n(eC);
            let eI = (0, s.PA)((e) => {
                    var t, a, l, s, r;
                    let { item: o } = e,
                        { playlist: d, experiments: c } = (0, S.g)(),
                        { shouldShowMajor: u, shouldShowGenre: m, shouldShowDuplicate: p } = d.editorFeature,
                        _ = c.checkExperiment(eb.z.WebEditorsFeatures, 'on'),
                        y = p && d.editorFeature.getNumberGroupTrackDuplicated(o);
                    if (!_ || !o || (!m && !u && !y)) return null;
                    let g = [],
                        v = null == (a = o.data) || null == (t = a.major) ? void 0 : t.name,
                        h = null == (r = o.data) || null == (s = r.albums) || null == (l = s[0]) ? void 0 : l.genre;
                    if ((y && g.push('№'.concat(y)), u && v)) {
                        let e = d.editorFeature.getColorForMajor(v),
                            t = (0, i.jsx)('span', { className: ek().major, style: { '--major-color': e }, children: v });
                        g.push(t);
                    }
                    if ((m && h && g.push(h), !g.length)) return null;
                    let x = g.map((e, t, a) => (0, i.jsxs)(n.Fragment, { children: [e, t < a.length - 1 && '; '] }, t));
                    return (0, i.jsxs)(ef.HL, { className: ek().root, type: 'entity', size: 'm', weight: 'medium', variant: 'span', children: ['[', x, '] \xa0'] });
                }),
                eS = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: l, isDragging: s, draggingClassName: r, from: n, utmLink: d, index: c, className: u } = e,
                        { playlist: m } = (0, S.g)(),
                        { formatMessage: p } = (0, o.A)(),
                        { removeTrackFromPlaylist: _, canRemoveTrackFromPlaylist: y } = (0, eA.s)();
                    return (0, i.jsx)(eT.K, {
                        beforeTitle: (0, i.jsx)(eI, { item: t }),
                        withPodcastName: !0,
                        withDNDBlock: l,
                        isDragging: s,
                        track: a,
                        handleRemove: y ? _ : void 0,
                        draggingClassName: r,
                        playContextParams: {
                            contextData: { type: eu.K.Playlist, meta: m.contextMeta, from: n, utmLink: d },
                            entitiesData: m.playbackEntitiesData,
                            queueParams: { index: c },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: p({ id: 'playlist-actions.remove-from-playlist' }),
                        className: u,
                    });
                });
            var eL = a(82967);
            let ej = (0, s.PA)((e) => {
                    let { item: t, track: a, withDNDBlock: s, isDragging: r, draggingClassName: n, from: d, utmLink: c, index: u, className: m } = e,
                        { playlist: p } = (0, S.g)(),
                        { formatMessage: _ } = (0, o.A)(),
                        { removeTrackFromPlaylist: y, canRemoveTrackFromPlaylist: g } = (0, eA.s)();
                    return (0, i.jsx)(eL.K, {
                        beforeTitle: (0, i.jsx)(eI, { item: t }),
                        withDNDBlock: s,
                        isDragging: r,
                        track: a,
                        handleRemove: g ? y : void 0,
                        draggingClassName: n,
                        playContextParams: {
                            contextData: {
                                type: eu.K.Playlist,
                                meta: p.contextMeta,
                                from: d,
                                utmLink: c,
                                filter: p.filters.activeFilter,
                                filterName: p.filters.activeFilterName,
                                enableVariousAutoFlow: p.enableVariousAutoFlow,
                            },
                            entitiesData: p.playbackEntitiesData,
                            queueParams: { index: u },
                            loadContextMeta: !0,
                        },
                        removeButtonAriaLabel: _({ id: 'playlist-actions.remove-from-playlist' }),
                        className: (0, l.$)(m, { [eP().isDuplicate]: p.editorFeature.shouldHighlightDublicatedTrack(t) }),
                    });
                }),
                eN = (0, s.PA)((e) => {
                    var t, a, s, r, n;
                    let o,
                        { index: c, className: u, isDragging: m, draggingClassName: p } = e,
                        { playlist: _ } = (0, S.g)(),
                        y = (null == (t = _.meta) ? void 0 : t.uuid) || _.uuid,
                        { from: g, utmLink: v } = (0, eg.f)({ pageId: x._Q.PLAYLIST, blockId: ep.U.PLAYLIST, pageEntityId: y, contextType: eu.K.Playlist, contextId: y }),
                        h = _.isDragAndDropEnabled,
                        P = null == (a = _.items) ? void 0 : a[c];
                    return (
                        (o =
                            P && P.data && _.meta
                                ? P.data.isTrackNonMusic || (null == (s = P.data.mainAlbum) ? void 0 : s.isNonMusic)
                                    ? (0, i.jsx)(eS, {
                                          item: P,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          from: g,
                                          index: c,
                                          track: P.data,
                                          utmLink: v,
                                          draggingClassName: p,
                                          className: u,
                                      })
                                    : (0, i.jsx)(ej, {
                                          item: P,
                                          from: g,
                                          index: c,
                                          track: P.data,
                                          withDNDBlock: h,
                                          isDragging: m,
                                          draggingClassName: p,
                                          className: (0, l.$)(u, { [eP().isDuplicate]: _.editorFeature.shouldHighlightDublicatedTrack(P) }),
                                      })
                                : (0, i.jsx)(eh.D, { isActive: !0, className: eP().shimmerItem, variant: ev.X.PLAYLIST })),
                        (0, i.jsx)(em.x.Provider, {
                            value: { playlist: _.meta, trackIndex: c },
                            children: (0, i.jsx)(e_.F, {
                                blockType: d.EntityTypes.Tracks,
                                blockId: d.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectId: String(null == _ || null == (r = _.meta) ? void 0 : r.uuid),
                                mainObjectType: d.DomainObjectType.Playlist,
                                children: (0, i.jsx)(ey.B, {
                                    objectType: d.DomainObjectType.Track,
                                    objectId: String(null == P || null == (n = P.data) ? void 0 : n.id),
                                    objectPosX: 1,
                                    objectPosY: c + 1,
                                    objectsCount: _.items.length,
                                    children: o,
                                }),
                            }),
                        })
                    );
                });
            var eE = a(89056),
                eD = a.n(eE);
            let eR = (0, s.PA)((e) => {
                let { children: t, playlist: a } = e,
                    { announcements: l, screenReaderInstructions: s } = ((e) => {
                        let { formatMessage: t } = (0, o.A)();
                        return {
                            screenReaderInstructions: { draggable: t({ id: 'drag-and-drop.playlist-move-instructions' }) },
                            announcements: {
                                onDragStart(a) {
                                    let { active: i } = a;
                                    return t({ id: 'drag-and-drop.playlist-on-move-start' }, { trackName: el(e, Number(i.id)), index: i.id });
                                },
                                onDragOver(a) {
                                    let { active: i, over: l } = a,
                                        s = el(e, Number(i.id));
                                    return l
                                        ? t({ id: 'drag-and-drop.playlist-on-move' }, { trackName: s, index: l.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-fail' }, { trackName: s });
                                },
                                onDragEnd(a) {
                                    let { active: i, over: l } = a,
                                        s = el(e, Number(i.id));
                                    return l
                                        ? t({ id: 'drag-and-drop.playlist-on-move-end-with-index' }, { trackName: s, index: l.id })
                                        : t({ id: 'drag-and-drop.playlist-on-move-end' }, { trackName: s });
                                },
                                onDragCancel: () => t({ id: 'drag-and-drop.playlist-on-move-cancel' }),
                            },
                        };
                    })(a),
                    r = ((e) => {
                        let { notify: t } = (0, ed.l)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, n.useCallback)(
                            async (l) => {
                                var s, r, n, o;
                                let { from: d, to: c } = l;
                                if (d < 0 || c < 0 || d >= e.items.length || c >= e.items.length) return;
                                let u = String(null == (s = e.items[d]) ? void 0 : s.id);
                                if (!u) return;
                                let m = (null == (r = e.items[d]) ? void 0 : r.albumId) ? Number(null == (n = e.items[d]) ? void 0 : n.albumId) : void 0;
                                e.moveTrack(d, c);
                                let p = await (null == (o = e.meta)
                                    ? void 0
                                    : o.changePlaylist((0, er.M)({ operation: en.y.MOVE, startPosition: d, endPosition: c, tracks: [{ id: u, albumId: m }] })));
                                (p && p === es.Y.OK) ||
                                    (p === es.Y.RELOAD ? e.refresh() : e.moveTrack(c, d),
                                    t((0, i.jsx)(ec.h, { error: a({ id: 'drag-and-drop.failed-to-move' }) }), { containerId: eo.u.ERROR }));
                            },
                            [a, t, e],
                        );
                    })(a),
                    { activeId: d, handleDragStart: c, handleDragCancel: u, sensors: m } = (0, ei.Y)(),
                    p = (0, n.useCallback)(
                        (e) => {
                            let { active: t, over: i } = e;
                            if (!t.id || !(null == i ? void 0 : i.id)) return;
                            let l = a.itemsKeys.indexOf(String(t.id)),
                                s = a.itemsKeys.indexOf(String(i.id));
                            Number.isInteger(l) && Number.isInteger(s) && r({ from: l, to: s });
                        },
                        [r, a.itemsKeys],
                    ),
                    _ = (0, n.useMemo)(() => a.itemsKeys.indexOf(String(d)), [d, a.itemsKeys]);
                return a.isDragAndDropEnabled
                    ? (0, i.jsxs)(ee.Mp, {
                          sensors: m,
                          collisionDetection: ee.fp,
                          onDragStart: c,
                          onDragEnd: p,
                          onDragCancel: u,
                          modifiers: [et.FN, et.gj],
                          accessibility: { announcements: l, screenReaderInstructions: s },
                          children: [
                              (0, i.jsx)('div', { className: eD().root, children: (0, i.jsx)(q.gB, { items: a.itemsKeys, strategy: q._G, children: t }) }),
                              (0, ea.createPortal)(
                                  (0, i.jsx)(ee.Hd, {
                                      dropAnimation: { duration: 0 },
                                      children: d
                                          ? (0, i.jsx)('div', {
                                                className: eD().draggableItemWrapper,
                                                children: (0, i.jsx)(eN, { index: _, className: eD().noHoverItem, isDragging: !0, draggingClassName: eD().dots }),
                                            })
                                          : null,
                                  }),
                                  window.document.body,
                              ),
                          ],
                      })
                    : t;
            });
            var ew = a(49656),
                eO = a(49807),
                eU = a(91797),
                eM = a(42853),
                eB = a(99401),
                eF = a(26076),
                eH = a(48830),
                eY = a.n(eH);
            let eW = (0, s.PA)((e) => {
                let { playlist: t } = e,
                    { formatMessage: a } = (0, o.A)(),
                    s = (0, ew.L)(() => {
                        var e, s, r;
                        let n = [],
                            o = 3;
                        return (
                            t.hasSimilarEntities &&
                                (n.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockType: d.EntityTypes.SimilarEntities,
                                            blockId: d.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            objectsCount: null == (e = t.similarEntities.data) ? void 0 : e.items.length,
                                            mainObjectId: String(null == (s = t.meta) ? void 0 : s.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eO.Q, {
                                                ...t.similarEntities,
                                                meta: { title: a({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: 'h2',
                                                className: eY().carouselContainer,
                                                headerClassName: (0, l.$)(eY().carouselBlock, eY().carouselBlockHeader),
                                                containerClassName: eY().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                isLoaded: t.similarEntities.isLoaded,
                                                setHasSentAnalyticsOnLoaded: t.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        d.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                o++),
                            t.hasSimilarPlaylists &&
                                (n.push(
                                    (0, i.jsx)(
                                        e_.F,
                                        {
                                            blockId: d.EntityTypes.SimilarPlaylists,
                                            blockType: d.EntityTypes.SimilarPlaylists,
                                            blockPosX: 1,
                                            blockPosY: o,
                                            blockIdForFrom: eM.h.PLAYLISTS_SIMILAR_PLAYLIST,
                                            objectsCount: t.similarPlaylists.length,
                                            mainObjectId: String(null == (r = t.meta) ? void 0 : r.uuid),
                                            mainObjectType: d.DomainObjectType.Playlist,
                                            children: (0, i.jsx)(eU.E, {
                                                headingVariant: 'h2',
                                                isShimmerVisible: t.isLoading,
                                                isShimmerActive: !0,
                                                className: eY().carouselContainer,
                                                headerClassName: (0, l.$)(eY().carouselBlockHeader, eY().carouselBlock),
                                                containerClassName: eY().carouselBlock,
                                                title: a({ id: 'entity-names.similar-playlists' }),
                                                playlists: t.similarPlaylists,
                                                shouldSendAnalyticsOnLoaded: !0,
                                            }),
                                        },
                                        d.EntityTypes.SimilarPlaylists,
                                    ),
                                ),
                                o++),
                            n
                        );
                    });
                return (0, i.jsxs)('div', {
                    className: eY().root,
                    children: [(0, i.jsx)('div', { children: s }), (0, i.jsx)(eF.A, { children: (0, i.jsx)(eB.w, { className: eY().footer }) })],
                });
            });
            var ez = a(10944),
                eK = a(86401),
                eG = a(8487),
                eV = a(71035),
                e$ = a(66738),
                eX = a(99725),
                eq = a(62948),
                eQ = a(1134),
                eZ = a(79367),
                eJ = a(61777),
                e0 = a(34159),
                e1 = a(29872),
                e2 = a(61561),
                e9 = a(81022),
                e8 = a(50209),
                e4 = a(31488),
                e7 = a(6969),
                e6 = a(64720),
                e3 = a(41580),
                e5 = a(49438),
                te = a(71996),
                tt = a(95924),
                ta = a(49999),
                ti = a(92543),
                tl = a(58091),
                ts = a.n(tl),
                tr = a(4071),
                tn = a(10820),
                to = a(14743),
                td = a(79307),
                tc = a(36484),
                tu = a(62562),
                tm = a(81119),
                tp = a(82684),
                t_ = a(48288),
                ty = a.n(t_);
            let tg = (0, s.PA)((e) => {
                let { trackIds: t, className: a, onRemove: s } = e,
                    { slam: r } = (0, S.g)(),
                    d = (0, tm.A)(),
                    { formatMessage: u } = (0, o.A)(),
                    m = (0, tu.N)(),
                    [p, _] = (0, n.useState)(!1),
                    y = m.get(tc.vg),
                    g = r.isPlaylistDownloaded(t),
                    v = r.isPlaylistDownloading(t),
                    h = r.getPlaylistDownloadingProgress(t),
                    x = (0, eV.c)(() => {
                        if (v) {
                            null == d || d.stopDownload(t);
                            return;
                        }
                        if (g) return void _(!0);
                        (null == d || d.download(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DOWNLOAD, td.l));
                    }),
                    P = (0, eV.c)(() => {
                        (null == d || d.delete(t), y.count(to.x.MY_FAVORITES_PLAYLIST_DELETE, td.l), null == s || s());
                    }),
                    A = (0, n.useMemo)(
                        () =>
                            g
                                ? (0, i.jsx)(e$.I, { variant: 'check', size: 'xxs', className: ty().downloadedIcon })
                                : v
                                  ? (0, i.jsx)(tp.A, {
                                        value: null != h ? h : 0,
                                        size: 26,
                                        withCancelIcon: !0,
                                        className: ty().downloadingProgress,
                                        progressBarClassName: ty().progress,
                                        cancelIconClassName: ty().cancelIcon,
                                    })
                                  : (0, i.jsx)(e$.I, { variant: 'download', size: 'xxs' }),
                        [g, v, h],
                    ),
                    T = (0, n.useMemo)(() => (v ? u({ id: 'offline.stop-downloading' }) : u({ id: 'offline.download' })), [u, v]);
                return g
                    ? (0, i.jsx)(tn.W1, {
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: A,
                          offsetOptions: 10,
                          open: p,
                          onOpenChange: _,
                          wrapperClassName: a,
                          ariaLabel: u({ id: 'offline.delete-from-device' }),
                          'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOADED_BUTTON,
                          children: (0, i.jsx)(tn.Dr, {
                              icon: (0, i.jsx)(e$.I, { variant: 'upload', size: 'xxs' }),
                              onClick: P,
                              children: (0, i.jsx)(eG.A, { id: 'offline.delete-from-device' }),
                          }),
                      })
                    : (0, i.jsx)(tr.$, {
                          className: (0, l.$)(ty().root, { [ty().root_downloading]: v }, a),
                          variant: 'default',
                          size: 's',
                          radius: 'xxxl',
                          icon: A,
                          'aria-label': T,
                          onClick: x,
                          'data-test-id': v ? c.e8.pageHeader.PLAYLIST_HEADER_STOP_DOWNLOAD_BUTTON : c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_BUTTON,
                          children:
                              v &&
                              (0, i.jsx)(ef.HL, {
                                  variant: 'div',
                                  className: ty().progressText,
                                  'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_DOWNLOAD_PROGRESS_TEXT,
                                  children: (0, i.jsx)(eG.A, { id: 'offline.downloading-progress', values: { value: h } }),
                              }),
                      });
            });
            var tv = a(6519),
                th = a.n(tv),
                tx = a(9079),
                tP = a(67379),
                tA = a(87277),
                tT = a(59450),
                tf = a(84e3),
                tb = a(79670),
                tC = a(1230),
                tk = a.n(tC);
            let tI = (0, s.PA)((e) => {
                var t, a, l;
                let { playlistUuid: s } = e,
                    r = (0, y.Q)(),
                    o = ((e) => {
                        let t = (0, tT.st)(),
                            a = (0, tf.U)(),
                            { hash: i } = (0, tT.gf)();
                        return (0, n.useCallback)(() => {
                            if (!t || !e.link) return;
                            let l = {
                                    hash: i,
                                    pageId: tb.W[x._Q.PLAYLIST],
                                    mainObjectType: d.DomainObjectType.Playlist,
                                    mainObjectId: e.objectId,
                                    entityId: 'playlist_branded_action_button',
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    from: tb.W[x._Q.PLAYLIST],
                                    to: d.AppScreen.Link,
                                    deepLink: e.link,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                s = (0, tP.F)({ params: l, logger: a, context: 'useSendEventOnPlaylistBrandingLinkNavigated' });
                            s && (0, tA.Mu)(t.evgenInstance, s);
                        }, [t, i, a, e]);
                    })({ objectId: s, link: null == (a = r.data) || null == (t = a.button) ? void 0 : t.href });
                return r.isEnabled && (null == (l = r.data) ? void 0 : l.button)
                    ? (0, i.jsx)(tx.N, {
                          className: tk().root,
                          href: r.data.button.href,
                          target: '_blank',
                          onClick: o,
                          children: (0, i.jsx)(ef.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: r.data.button.text }),
                      })
                    : null;
            });
            var tS = a(89288),
                tL = a(86869),
                tj = a(52527),
                tN = a(6323);
            let tE = ['image/png', 'image/jpeg', 'image/jpg'];
            var tD = a(40422),
                tR = a.n(tD);
            let tw = (0, s.PA)((e) => {
                let { className: t, playlist: a } = e,
                    {
                        settings: { isMobile: s },
                        playlist: { isRewind2024Playlist: r },
                        modals: { imageSliderModal: d },
                    } = (0, S.g)(),
                    u = a.coverUri,
                    m = a.canUserChange && !s,
                    { notify: p } = (0, ed.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    y = (0, n.useRef)(null),
                    [g, v] = (0, n.useState)(u || ''),
                    [h, x] = (0, n.useState)(m),
                    [P, A] = (0, n.useState)(new FormData()),
                    T = (0, tS.lU)(u || '', 600, !1),
                    f = (0, tS.lU)(u || '', 300, !1),
                    [b, C] = (0, n.useState)(T),
                    [k, I] = (0, n.useState)(!1),
                    L = !!u,
                    j = (0, n.useMemo)(() => {
                        if (r && a.personalColor) return (0, tj.m)(a.personalColor);
                    }, [r, a.personalColor]);
                (0, n.useEffect)(() => {
                    h !== m && x(m);
                }, [m, h]);
                let N = (0, n.useCallback)(
                        () => p((0, i.jsx)(ec.h, { error: _({ id: 'playlist-errors.failed-to-change-poster' }) }), { containerId: eo.u.ERROR }),
                        [p, _],
                    ),
                    E = (0, eV.c)(() => {
                        u && !k && d.openImages({ images: [u] });
                    }),
                    D = (0, eV.c)((e) => {
                        var t;
                        (null == e || e.stopPropagation(), null == y || null == (t = y.current) || t.click());
                    }),
                    R = (0, eV.c)((e) => {
                        (e.stopPropagation(), 'Enter' === e.key && D());
                    }),
                    w = (0, eV.c)((e) => {
                        e.stopPropagation();
                    }),
                    O = (0, eV.c)((e) => {
                        let t,
                            a = e.target,
                            i = (a.files || [])[0] || null;
                        if (((a.value = ''), !i || ((t = i.type), !tE.includes(t)) || !((e) => e > 0 && e <= 2e7)(i.size))) return void N();
                        (g && C(g), x(!1), v(URL.createObjectURL(i)));
                        let l = new FormData();
                        (l.append('image', i), A(l));
                    }),
                    U = (0, n.useCallback)(
                        async (e) => {
                            let t = e.target,
                                i = () => {
                                    (v(b), N(), x(!0));
                                };
                            if ((u && (t.currentSrc === T || t.currentSrc === f)) || !m || b === t.currentSrc) return;
                            if (
                                !((e) => {
                                    if (!e) return;
                                    let t = 2 * e.naturalHeight || e.height,
                                        a = 2 * e.naturalWidth || e.width;
                                    return t < 5e3 && a < 5e3;
                                })(t)
                            )
                                return void i();
                            I(!0);
                            let l = await a.changePlaylistCover(P);
                            (I(!1), l === e4.F.ERROR ? i() : x(!0));
                        },
                        [N, b, a, P, u, m, T, f],
                    ),
                    M = (0, n.useMemo)(() => (g ? _({ id: 'playlist-actions.change-poster' }) : _({ id: 'playlist-actions.add-poster' })), [g, _]);
                return (0, i.jsxs)(tL.t, {
                    radius: 'm',
                    className: (0, l.$)(tR().root, t, { [tR().root_hoverable]: L }),
                    children: [
                        (0, i.jsx)('div', {
                            className: tR().backCoverColor,
                            style: j,
                            children: (0, i.jsx)(tr.$, {
                                onClick: E,
                                'aria-label': _({ id: 'slider.view-cover' }),
                                tabIndex: L ? 0 : -1,
                                disabled: !L,
                                className: tR().coverButton,
                                children: (0, i.jsx)(tN.B, { fit: 'cover', src: g, size: 300, className: tR().coverImage, withAvatarReplace: !0, onLoad: U }),
                            }),
                        }),
                        h &&
                            (0, i.jsx)('div', {
                                className: (0, l.$)(tR().buttonContainer, { [tR().buttonContainer_withCursorPointer]: g }),
                                onClick: L ? E : void 0,
                                children: (0, i.jsxs)('div', {
                                    className: (0, l.$)(tR().fileUploadContainer, { [tR().fileUploadContainer_hovered]: g }),
                                    children: [
                                        (0, i.jsx)(tr.$, {
                                            className: tR().button,
                                            radius: 'xxxl',
                                            size: 'xxs',
                                            color: 'secondary',
                                            withRipple: !1,
                                            onClick: D,
                                            onKeyUp: R,
                                            'aria-label': _({ id: 'playlist-actions.add-poster' }),
                                            'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_COVER_BUTTON,
                                            children: M,
                                        }),
                                        (0, i.jsx)('form', {
                                            className: tR().formFile,
                                            encType: 'multipart/form-data',
                                            children: (0, i.jsx)('input', {
                                                ref: y,
                                                type: 'file',
                                                name: 'file',
                                                accept: 'image/jpeg, image/png, image/jpg',
                                                onChange: O,
                                                onClick: w,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                    ],
                });
            });
            var tO = a(14693),
                tU = a(589),
                tM = a(47062),
                tB = a(97522),
                tF = a(72720),
                tH = a(48022),
                tY = a.n(tH),
                tW = a(99720),
                tz = a(79276);
            let tK = (0, s.PA)((e) => {
                    // for PulseSync WebHost: BEGIN refresh header metadata when native addon slots change
                    let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                    (0, pulseSyncHeaderReact.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            if (e.detail === 'headerInfoItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                        };
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                        return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    }, []);

                    // for PulseSync WebHost: END refresh header metadata when native addon slots change
                    let { playlist: t, className: a } = e,
                        { formatMessage: l } = (0, o.A)(),
                        s = (0, n.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.playlistReceiver))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return l({ id: 'interface-actions.playlist-made-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return l({ id: 'interface-actions.playlist-made-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return l({ id: 'interface-actions.playlist-made-date-with-year' }, t);
                                        default:
                                            return l({ id: 'interface-actions.playlist-made-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return l({ id: 'interface-actions.playlist-made-for-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return l({ id: 'interface-actions.playlist-made-for-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return l({ id: 'interface-actions.playlist-made-for-date-with-year' }, t);
                                    default:
                                        return l({ id: 'interface-actions.playlist-made-for-date' }, t);
                                }
                            },
                            [l],
                        ),
                        r = (0, n.useCallback)(
                            (e, t) => {
                                if (!(null == t ? void 0 : t.ownerName))
                                    switch (e) {
                                        case tz.r.TODAY:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-today' }, t);
                                        case tz.r.YESTERDAY:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-yesterday' }, t);
                                        case tz.r.DATE_WITH_YEAR:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-date-with-year' }, t);
                                        default:
                                            return l({ id: 'interface-actions.updated-anonymously-playlist-date' }, t);
                                    }
                                switch (e) {
                                    case tz.r.TODAY:
                                        return l({ id: 'interface-actions.updated-playlist-today' }, t);
                                    case tz.r.YESTERDAY:
                                        return l({ id: 'interface-actions.updated-playlist-yesterday' }, t);
                                    case tz.r.DATE_WITH_YEAR:
                                        return l({ id: 'interface-actions.updated-playlist-date-with-year' }, t);
                                    default:
                                        return l({ id: 'interface-actions.updated-playlist-date' }, t);
                                }
                            },
                            [l],
                        ),
                        d = (0, n.useMemo)(() => {
                            var e, a, i, l, n;
                            let o = new Date(t.modified),
                                d = (0, tz.L)(o);
                            return t.madeForUser
                                ? s(d, {
                                      playlistReceiver: (null == t || null == (l = t.madeForUser) || null == (i = l.caseForms) ? void 0 : i.genitive) || '',
                                      updateDate: o,
                                  })
                                : t.isFavouritePlaylist
                                  ? (null == (n = t.owner) ? void 0 : n.name) || ''
                                  : r(d, {
                                        updateDate: new Date(t.modified),
                                        ownerName: (null == (e = t.owner) ? void 0 : e.name) || '',
                                        gender: (null == (a = t.owner) ? void 0 : a.sex) === tW.U.FEMALE ? 'female' : 'male',
                                    });
                        }, [t, s, r]);
                    // for PulseSync WebHost: BEGIN render native addon items in playlist header metadata
                    const pulseSyncInjectHeaderPlaylistItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('headerInfoItems', items, {
                            eventDetail: null,
                            renderItem: ({ key, payload, position, positionIndex }) => {
                                const text = String(payload?.text ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim(),
                                    label = String(payload?.label ?? text).trim();
                                if (!text && !icon) return null;
                                return (0, pulseSyncHeaderJsx.jsxs)(
                                    pulseSyncHeaderText.HL,
                                    {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        ...(label
                                            ? {
                                                  'aria-label': label,
                                              }
                                            : {}),
                                        'data-pulsesync-addon-header-item': 'meta',
                                        children: [
                                            (position > 0 || positionIndex > 0) && '\u00a0•\u00a0',
                                            icon &&
                                                (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                    variant: icon,
                                                    size: 'xxxs',
                                                }),
                                            text,
                                        ],
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END render native addon items in playlist header metadata
                    return (0, i.jsx)(ef.HL, {
                        variant: 'span',
                        className: a,
                        type: 'text',
                        size: 'm',
                        weight: 'medium',
                        lineClamp: 1,
                        'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_UPDATED_TEXT,
                        // for PulseSync WebHost: BEGIN inject native addon items into playlist header metadata
                        children: pulseSyncInjectHeaderPlaylistItems([d]),
                        // for PulseSync WebHost: END inject native addon items into playlist header metadata
                    });
                }),
                tG = (0, s.PA)((e) => {
                    let { playlist: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, S.g)(),
                        { notify: r } = (0, ed.l)(),
                        d = t.canUserChange && !s,
                        u = !!t.description,
                        { state: m, toggleTrue: p, toggleFalse: _ } = (0, tO.e)(!1),
                        [y, g] = (0, n.useState)(t.description || ''),
                        v = (0, n.useCallback)(async () => {
                            (_(),
                                (await t.changeDescription(y)) === e4.F.ERROR &&
                                    r((0, i.jsx)(ec.h, { error: a({ id: 'playlist-errors.failed-to-change-description' }) }), { containerId: eo.u.ERROR }));
                        }, [a, y, r, t, _]),
                        h = (0, n.useCallback)((e) => {
                            g(e);
                        }, []),
                        x = (0, n.useMemo)(() => (0, tM.r)(t.description, tB.N, { className: tY().descriptionLink }), [t.description]),
                        P = (0, n.useMemo)(
                            () =>
                                t.tagsString
                                    ? (0, i.jsx)(ef.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.tags', values: { tags: t.tagsString } }),
                                      })
                                    : null,
                            [t.tagsString],
                        );
                    return (0, i.jsxs)('div', {
                        className: tY().root,
                        children: [
                            u &&
                                !m &&
                                (0, i.jsxs)(ef.HL, {
                                    variant: 'span',
                                    className: tY().description,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    children: [
                                        x,
                                        d &&
                                            (0, i.jsx)(tr.$, {
                                                variant: 'text',
                                                withRipple: !1,
                                                onClick: p,
                                                className: (0, l.$)(tY().descriptionActionLink, tY().addDescription),
                                                'aria-label': a({ id: 'playlist-actions.change-description' }),
                                                color: 'primary',
                                                'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CHANGE_DESCRIPTION_BUTTON,
                                                children: (0, i.jsx)(ef.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    type: 'text',
                                                    className: tY().button,
                                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.change-description-abbr' }),
                                                }),
                                            }),
                                    ],
                                }),
                            !u &&
                                d &&
                                !m &&
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    onClick: p,
                                    className: tY().descriptionActionLink,
                                    'aria-label': a({ id: 'playlist-actions.add-description' }),
                                    color: 'primary',
                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_ADD_DESCRIPTION_BUTTON,
                                    children: (0, i.jsxs)(ef.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: tY().button,
                                        children: [(0, i.jsx)(eG.A, { id: 'playlist-actions.add-description' }), '...'],
                                    }),
                                }),
                            d &&
                                m &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(tF.A, {
                                            text: t.description,
                                            className: tY().textField,
                                            placeholder: ''.concat(a({ id: 'playlist-actions.add-description' }), '...'),
                                            maxTextLength: tU.i,
                                            onChangeFinish: h,
                                            variant: 'textarea',
                                            withOutline: !0,
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: tY().actionButtons,
                                            children: [
                                                (0, i.jsx)(tr.$, {
                                                    className: tY().saveButton,
                                                    color: 'secondary',
                                                    radius: 'xxxl',
                                                    size: 's',
                                                    'aria-label': a({ id: 'interface-actions.save' }),
                                                    onClick: v,
                                                    withHover: !0,
                                                    children: (0, i.jsx)(eG.A, { id: 'interface-actions.save' }),
                                                }),
                                                (0, i.jsx)(tr.$, {
                                                    variant: 'text',
                                                    withRipple: !1,
                                                    onClick: _,
                                                    className: tY().cancelButton,
                                                    'aria-label': a({ id: 'interface-actions.cancel' }),
                                                    color: 'primary',
                                                    children: (0, i.jsx)(ef.HL, {
                                                        variant: 'span',
                                                        size: 'm',
                                                        type: 'text',
                                                        className: tY().button,
                                                        children: (0, i.jsx)(eG.A, { id: 'interface-actions.cancel' }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, i.jsx)(tK, { className: tY().updatedText, playlist: t }),
                            P,
                        ],
                    });
                });
            var tV = a(49890),
                t$ = a.n(tV);
            // for PulseSync: BEGIN imports and native modal styles for playlist link import
            var pulseSyncImportObserver = a(88204);
            var pulseSyncImportReact = a(74631);
            var pulseSyncImportStore = a(27954);
            var pulseSyncImportNotifications = a(92942);
            var pulseSyncImportIntl = a(39004);
            var pulseSyncImportCallback = a(71035);
            var pulseSyncImportJsx = a(25839);
            var pulseSyncImportError = a(57549);
            var pulseSyncImportContainers = a(91149);
            var pulseSyncImportButton = a(4071);
            var pulseSyncImportTestIds = a(61493);
            var pulseSyncImportText = a(4254);
            var pulseSyncImportIcon = a(66738);
            var pulseSyncImportMessage = a(8487);
            const pulseSyncImportModalStyles = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
            // for PulseSync: END imports and native modal styles for playlist link import
            // for PulseSync: BEGIN playlist link import component with upload state, subscriptions and native dialog
            let tX = (0, pulseSyncImportObserver.PA)((e) => {
                let { playlist: t } = e,
                    // for PulseSync: BEGIN playlist link validation, import state and upload target tracking
                    a = (0, pulseSyncImportReact.useRef)(null),
                    {
                        ugcUploadCenter: i,
                        fullscreenPlayer: r,
                        settings: { isMobile: c },
                    } = (0, pulseSyncImportStore.g)(),
                    { notify: u } = (0, pulseSyncImportNotifications.l)(),
                    { formatMessage: s } = (0, pulseSyncImportIntl.A)(),
                    [m, p] = (0, pulseSyncImportReact.useState)(!1),
                    [_, y] = (0, pulseSyncImportReact.useState)(''),
                    [g, v] = (0, pulseSyncImportReact.useState)({
                        status: 'idle',
                        trackCount: 0,
                        message: '',
                    }),
                    [f, h] = (0, pulseSyncImportReact.useState)(!1),
                    A = (0, pulseSyncImportReact.useRef)(0),
                    C = (0, pulseSyncImportReact.useRef)(null),
                    x = (0, pulseSyncImportReact.useRef)(null),
                    pulseSyncImportTarget = (0, pulseSyncImportReact.useRef)(null),
                    pulseSyncImportedTokens = (0, pulseSyncImportReact.useRef)(new Set()),
                    P = _.trim(),
                    E =
                        !!P &&
                        !((e) => {
                            try {
                                let t = new URL(e);
                                return 'http:' === t.protocol || 'https:' === t.protocol;
                            } catch (e) {
                                return !1;
                            }
                        })(P),
                    b =
                        !E &&
                        !!P &&
                        ((e) => {
                            try {
                                let t = new URL(e),
                                    a = t.hostname.toLowerCase();
                                return 'youtu.be' === a || 'youtube.com' === a || 'music.youtube.com' === a || a.endsWith('.youtube.com');
                            } catch (e) {
                                return !1;
                            }
                        })(P),
                    L = !E && 'ready' === g.status && g.url === P,
                    S = (0, pulseSyncImportReact.useCallback)(() => {
                        var e;
                        null == a || null == (e = a.current) || e.click();
                    }, [a]),
                    // for PulseSync: END playlist link validation, import state and upload target tracking
                    // for PulseSync: BEGIN open and reset the playlist link import dialog
                    k = (0, pulseSyncImportCallback.c)(() => {
                        p(!0);
                    }),
                    I = (0, pulseSyncImportReact.useCallback)(() => {
                        ((A.current += 1),
                            C.current && clearTimeout(C.current),
                            (C.current = null),
                            (x.current = null),
                            p(!1),
                            y(''),
                            v({
                                status: 'idle',
                                trackCount: 0,
                                message: '',
                            }));
                    }, []),
                    // for PulseSync: END open and reset the playlist link import dialog
                    // for PulseSync: BEGIN upload selected files and start playlist link import with error reporting
                    D = (0, pulseSyncImportReact.useCallback)(
                        (e) => {
                            let a = e.target.files;
                            (a && a.length > 0 && (i.appendFiles([...a], t), I()), (e.target.value = ''));
                        },
                        [t, i, I],
                    ),
                    N = (0, pulseSyncImportReact.useCallback)((e) => {
                        y(e.target.value);
                    }, []),
                    j = (0, pulseSyncImportCallback.c)(async () => {
                        let e = P;
                        if (!e || E || !L || f) return;
                        let a = `playlist-link-import|${Date.now()}|${Math.random().toString(36).slice(2)}`;
                        ((x.current = a), (pulseSyncImportTarget.current = t), pulseSyncImportedTokens.current.clear(), h(!0));
                        try {
                            if (!(null == window ? void 0 : window.playlistLinkImporter)) throw new Error('Импорт по ссылке недоступен');
                            let importResult = await window.playlistLinkImporter.importTrack(e, a),
                                s = Math.max(0, Number(null == importResult ? void 0 : importResult.importedCount) || 0),
                                o = Math.max(0, Number(null == importResult ? void 0 : importResult.failedCount) || 0);
                            if (o > 0) {
                                let e = Array.isArray(null == importResult ? void 0 : importResult.errors) ? importResult.errors.filter(Boolean) : [],
                                    t = e
                                        .slice(0, 3)
                                        .map((e, t) => `${t + 1}. ${e}`)
                                        .join('\n'),
                                    a = o > e.length ? `${t ? `${t}\n` : ''}Еще пропущено: ${o - e.length}` : t,
                                    i = `Не удалось импортировать ${o} трек(ов)${a ? `\n${a}` : ''}`;
                                u(
                                    (0, pulseSyncImportJsx.jsx)(pulseSyncImportError.h, {
                                        error: i,
                                    }),
                                    {
                                        containerId: r.modal.isOpened ? pulseSyncImportContainers.u.FULLSCREEN_ERROR : pulseSyncImportContainers.u.ERROR,
                                    },
                                );
                            }
                            s > 0 && I();
                        } catch (e) {
                            let t = e instanceof Error ? e.message : 'Не удалось импортировать треки по ссылке';
                            u(
                                (0, pulseSyncImportJsx.jsx)(pulseSyncImportError.h, {
                                    error: t,
                                }),
                                {
                                    containerId: r.modal.isOpened ? pulseSyncImportContainers.u.FULLSCREEN_ERROR : pulseSyncImportContainers.u.ERROR,
                                },
                            );
                        } finally {
                            h(!1);
                        }
                    });
                    // for PulseSync: END upload selected files and start playlist link import with error reporting
                // for PulseSync: BEGIN subscribe to imported tracks and prefetch playlist link metadata
                (0, pulseSyncImportReact.useEffect)(() => {
                    if (!(null == window ? void 0 : window.playlistLinkImporter) || !window.playlistLinkImporter.onTrackImported) return;
                    return window.playlistLinkImporter.onTrackImported((e) => {
                        if (!e || e.importID !== x.current) return;
                        let a = e.trackToken;
                        if (!a || pulseSyncImportedTokens.current.has(a)) return;
                        pulseSyncImportedTokens.current.add(a);
                        try {
                            let r = new File([e.arrayBuffer], e.fileName || 'imported_track.mp3', {
                                type: e.mimeType || 'audio/mpeg',
                            });
                            (Object.defineProperty(r, 'pulseSyncImportToken', {
                                value: a,
                                configurable: !0,
                            }),
                                window.playlistLinkImporter?.reportUploadState?.({
                                    trackToken: a,
                                    status: 'accepted',
                                }),
                                i.appendFiles([r], pulseSyncImportTarget.current ?? t));
                        } catch (e) {
                            let t = e instanceof Error ? e.message : 'Не удалось обработать импортированный трек';
                            (window.playlistLinkImporter?.reportUploadState?.({
                                trackToken: a,
                                status: 'failed',
                                error: t,
                            }),
                                u(
                                    (0, pulseSyncImportJsx.jsx)(pulseSyncImportError.h, {
                                        error: t,
                                    }),
                                    {
                                        containerId: r.modal.isOpened ? pulseSyncImportContainers.u.FULLSCREEN_ERROR : pulseSyncImportContainers.u.ERROR,
                                    },
                                ));
                        }
                    });
                }, [i, t, u, r.modal.isOpened]);
                (0, pulseSyncImportReact.useEffect)(() => {
                    const previewRevision = ++A.current;
                    if ((C.current && (clearTimeout(C.current), (C.current = null)), !m)) return;
                    if (!P) {
                        v({
                            status: 'idle',
                            trackCount: 0,
                            message: '',
                        });
                        return;
                    }
                    if (E) {
                        v({
                            status: 'invalid',
                            trackCount: 0,
                            message: 'Введите корректную http(s) ссылку',
                        });
                        return;
                    }
                    if (!(null == window ? void 0 : window.playlistLinkImporter) || !window.playlistLinkImporter.prefetchTrack) {
                        v({
                            status: 'error',
                            trackCount: 0,
                            message: 'Проверка ссылки недоступна',
                        });
                        return;
                    }
                    let e = previewRevision;
                    (v({
                        status: 'loading',
                        trackCount: 0,
                        message: 'Проверка ссылки...',
                    }),
                        (C.current = setTimeout(async () => {
                            try {
                                let t = await window.playlistLinkImporter.prefetchTrack(P);
                                if (A.current !== e) return;
                                if (null == t ? void 0 : t.isAvailable) {
                                    let e = Math.max(1, Number(t.trackCount) || 1),
                                        a = 'string' == typeof (null == t ? void 0 : t.artist) ? t.artist.trim() : '',
                                        r = 'string' == typeof (null == t ? void 0 : t.title) ? t.title.trim() : '',
                                        s = a && r ? `Будет загружен трек ${a} - ${r}` : '',
                                        o = t?.isPlaylist ? (s ? `${e} треков | ${s}` : `Будет загружено треков: ${e}`) : s || 'Будет загружен 1 трек';
                                    v({
                                        status: 'ready',
                                        url: P,
                                        trackCount: e,
                                        message: o,
                                    });
                                } else
                                    v({
                                        status: 'error',
                                        trackCount: 0,
                                        message: t?.message || 'Загрузка по этой ссылке недоступна',
                                    });
                            } catch (t) {
                                if (A.current !== e) return;
                                let a = t instanceof Error ? t.message : 'Не удалось проверить ссылку';
                                v({
                                    status: 'error',
                                    trackCount: 0,
                                    message: a,
                                });
                            } finally {
                                A.current === e && (C.current = null);
                            }
                        }, 400)));
                    return () => {
                        ((A.current += 1), C.current && clearTimeout(C.current), (C.current = null));
                    };
                }, [m, P, E]);
                // for PulseSync: END subscribe to imported tracks and prefetch playlist link metadata
                return (0, pulseSyncImportJsx.jsxs)(pulseSyncImportJsx.Fragment, {
                    children: [
                        // for PulseSync: BEGIN render the playlist link import dialog trigger
                        (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                            size: 's',
                            radius: 'xxxl',
                            'aria-label': s({
                                id: 'ugc.upload-track',
                            }),
                            className: t$().button,
                            // for PulseSync: BEGIN open the import dialog from the playlist upload button
                            onClick: k,
                            'data-test-id': pulseSyncImportTestIds.e8.pageHeader.PLAYLIST_HEADER_UPLOAD_UGC_BUTTON,
                            children: s({
                                id: 'ugc.upload-track',
                            }),
                            // for PulseSync: END open the import dialog from the playlist upload button
                        }),
                        // for PulseSync: END render the playlist link import dialog trigger
                        // for PulseSync: BEGIN file-upload form inside the playlist link import dialog
                        (0, pulseSyncImportJsx.jsx)('form', {
                            className: t$().form,
                            encType: 'multipart/form-data',
                            children: (0, pulseSyncImportJsx.jsx)('input', {
                                ref: a,
                                type: 'file',
                                accept: 'audio/*',
                                onChange: D,
                                multiple: !0,
                            }),
                        }),
                        // for PulseSync: END file-upload form inside the playlist link import dialog
                        // for PulseSync: BEGIN native playlist link import dialog, fields and status display
                        m
                            ? (0, pulseSyncImportJsx.jsx)('div', {
                                  role: 'presentation',
                                  style: {
                                      position: 'fixed',
                                      inset: 0,
                                      zIndex: 1e3,
                                      display: 'flex',
                                      alignItems: c ? 'flex-end' : 'center',
                                      justifyContent: 'center',
                                      padding: c ? 0 : 'var(--ym-spacer-size-l)',
                                      background: 'rgba(0, 0, 0, 0.72)',
                                  },
                                  children: (0, pulseSyncImportJsx.jsxs)('div', {
                                      role: 'dialog',
                                      'aria-modal': !0,
                                      'data-test-id': pulseSyncImportTestIds.e8.ugc.UGC_EDIT_MODAL,
                                      className: pulseSyncImportModalStyles.root,
                                      style: {
                                          position: 'relative',
                                          inset: 'auto',
                                          width: '100%',
                                          maxWidth: c ? '100%' : '26.875rem',
                                          maxHeight: c ? '100%' : 'calc(100% - var(--ym-spacer-size-l) * 2)',
                                          overflowY: 'auto',
                                          borderRadius: c ? 'var(--ym-radius-size-l) var(--ym-radius-size-l) 0 0' : 'var(--ym-radius-size-l)',
                                          boxShadow: '0 1rem 4rem rgba(0, 0, 0, 0.45)',
                                      },
                                      children: [
                                          (0, pulseSyncImportJsx.jsxs)('div', {
                                              className: pulseSyncImportModalStyles.header,
                                              children: [
                                                  (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.DZ, {
                                                      variant: 'h4',
                                                      size: 'm',
                                                      weight: 'bold',
                                                      className: pulseSyncImportModalStyles.title,
                                                      children: 'Импорт треков',
                                                  }),
                                                  (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                      radius: 'round',
                                                      color: 'secondary',
                                                      size: 'xxs',
                                                      icon: (0, pulseSyncImportJsx.jsx)(pulseSyncImportIcon.I, {
                                                          variant: 'close',
                                                          size: 'xxs',
                                                      }),
                                                      onClick: I,
                                                      disabled: f,
                                                      'aria-label': s({
                                                          id: 'ugc.close-edit-popup',
                                                      }),
                                                      'data-test-id': pulseSyncImportTestIds.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                                  }),
                                              ],
                                          }),
                                          (0, pulseSyncImportJsx.jsxs)('div', {
                                              className: pulseSyncImportModalStyles.content,
                                              children: [
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      style: {
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          justifyContent: 'space-between',
                                                          gap: 'var(--ym-spacer-size-m)',
                                                          flexWrap: 'wrap',
                                                      },
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 'm',
                                                              className: pulseSyncImportModalStyles.label,
                                                              style: {
                                                                  marginBlockEnd: 0,
                                                              },
                                                              children: 'Локальные треки',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'secondary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: S,
                                                              disabled: f,
                                                              children: 'Выбрать файлы',
                                                          }),
                                                      ],
                                                  }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      style: {
                                                          display: 'flex',
                                                          alignItems: 'center',
                                                          gap: 'var(--ym-spacer-size-s)',
                                                      },
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)('div', {
                                                              style: {
                                                                  flex: 1,
                                                                  height: '1px',
                                                                  background: 'var(--ym-controls-color-secondary-default-enabled)',
                                                              },
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 's',
                                                              style: {
                                                                  color: 'var(--ym-controls-color-secondary-text-enabled)',
                                                                  whiteSpace: 'nowrap',
                                                              },
                                                              children: 'или',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)('div', {
                                                              style: {
                                                                  flex: 1,
                                                                  height: '1px',
                                                                  background: 'var(--ym-controls-color-secondary-default-enabled)',
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.field,
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                              variant: 'div',
                                                              size: 'm',
                                                              className: pulseSyncImportModalStyles.label,
                                                              children: 'Ссылка',
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)('input', {
                                                              value: _,
                                                              type: 'url',
                                                              inputMode: 'url',
                                                              autoCapitalize: 'none',
                                                              autoCorrect: 'off',
                                                              spellCheck: !1,
                                                              disabled: f,
                                                              'aria-invalid': E || 'error' === g.status || 'invalid' === g.status,
                                                              className:
                                                                  E || 'error' === g.status || 'invalid' === g.status
                                                                      ? ''.concat(pulseSyncImportModalStyles.input, ' ').concat(pulseSyncImportModalStyles.input_error)
                                                                      : pulseSyncImportModalStyles.input,
                                                              style: {
                                                                  boxSizing: 'border-box',
                                                                  width: '100%',
                                                                  minHeight: '2.75rem',
                                                                  padding: '0 var(--ym-spacer-size-m)',
                                                                  border: 0,
                                                                  outline: 0,
                                                                  color: 'var(--ym-controls-color-primary-text-enabled)',
                                                                  font: 'inherit',
                                                              },
                                                              placeholder: 'https://...',
                                                              onChange: N,
                                                              minLength: 1,
                                                              maxLength: 2048,
                                                          }),
                                                          P &&
                                                              (E || 'idle' !== g.status) &&
                                                              (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                                  variant: 'div',
                                                                  size: 's',
                                                                  style: {
                                                                      color:
                                                                          E || 'error' === g.status || 'invalid' === g.status
                                                                              ? 'var(--ym-message-color-error-text-enabled)'
                                                                              : 'var(--ym-controls-color-primary-text-enabled)',
                                                                      marginBlockStart: 'var(--ym-spacer-size-xs)',
                                                                  },
                                                                  children: E ? 'Введите корректную http(s) ссылку' : g.message,
                                                              }),
                                                      ],
                                                  }),
                                                  // for PulseSync: BEGIN YouTube import hint and playlist link import dialog actions
                                                  b &&
                                                      (0, pulseSyncImportJsx.jsx)(pulseSyncImportText.HL, {
                                                          variant: 'div',
                                                          size: 's',
                                                          style: {
                                                              color: 'var(--ym-controls-color-secondary-text-enabled)',
                                                              marginBlockStart: 'calc(var(--ym-spacer-size-s) * -1)',
                                                              marginBlockEnd: 'var(--ym-spacer-size-m)',
                                                          },
                                                          children: 'Не забудьте добавить в proxy/VPN процесс yt-dlp.exe',
                                                      }),
                                                  (0, pulseSyncImportJsx.jsxs)('div', {
                                                      className: pulseSyncImportModalStyles.buttons,
                                                      children: [
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'secondary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: I,
                                                              disabled: f,
                                                              children: (0, pulseSyncImportJsx.jsx)(pulseSyncImportMessage.A, {
                                                                  id: 'interface-actions.cancel',
                                                              }),
                                                          }),
                                                          (0, pulseSyncImportJsx.jsx)(pulseSyncImportButton.$, {
                                                              radius: 'xxxl',
                                                              color: 'primary',
                                                              size: c ? 'l' : 'm',
                                                              className: pulseSyncImportModalStyles.button,
                                                              onClick: j,
                                                              disabled: !L || f,
                                                              children: f ? 'Импортируем...' : 'Импортировать по ссылке',
                                                          }),
                                                      ],
                                                  }),
                                                  // for PulseSync: END YouTube import hint and playlist link import dialog actions
                                              ],
                                          }),
                                      ],
                                  }),
                              })
                            : null,
                        // for PulseSync: END native playlist link import dialog, fields and status display
                    ],
                });
            });
            // for PulseSync: END playlist link import component with upload state, subscriptions and native dialog
            var tq = a(450),
                tQ = a(93596),
                tZ = a(3210),
                tJ = a(11609),
                t0 = a(929),
                t1 = a.n(t0),
                t2 = a(52970),
                t9 = a(56659),
                t8 = a(84361),
                t4 = a(23976),
                t7 = a(51790),
                t6 = a(16963),
                t3 = a.n(t6);
            let t5 = () =>
                (0, i.jsx)(t7.$, {
                    message: (0, i.jsx)(ef.HL, {
                        className: t3().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, i.jsx)(eG.A, { id: 'playlist-errors.failed-add-tracks-to-playlist' }),
                    }),
                });
            var ae = a(33901),
                at = a.n(ae);
            let aa = (0, s.PA)((e) => {
                    let { playlistTitle: t = '', playlistUrl: a, closeToast: l } = e,
                        { fullscreenPlayer: s } = (0, S.g)(),
                        r = (0, eV.c)(() => {
                            s.modal.isOpened && s.modal.close();
                        }),
                        o = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)(ef.HL, {
                                    className: at().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, {
                                        id: 'notifications-info.added-tracks-to-playlist',
                                        values: {
                                            playlistName: (0, i.jsx)(tB.N, {
                                                className: at().link,
                                                href: a,
                                                onClick: r,
                                                children: (0, i.jsxs)(ef.HL, {
                                                    className: at().playlistTitle,
                                                    variant: 'div',
                                                    type: 'controls',
                                                    size: 'm',
                                                    lineClamp: 1,
                                                    children: ['\xa0', t, '\xa0'],
                                                }),
                                            }),
                                        },
                                    }),
                                }),
                            [r, t, a],
                        );
                    return (0, i.jsx)(t7.$, { closeToast: l, message: o });
                }),
                ai = () =>
                    (0, i.jsx)(t7.$, {
                        message: (0, i.jsx)(ef.HL, {
                            className: at().message,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, i.jsx)(eG.A, { id: 'notifications-info.already-added-tracks' }),
                        }),
                    }),
                al = (0, s.PA)((e) => {
                    let { playlistItem: t } = e,
                        {
                            contextMenuAddTracksToPlaylist: { fetchPlaylistTrackIds: a, isTracksLoading: l },
                            fullscreenPlayer: s,
                            playlist: { itemsForCopy: r },
                        } = (0, S.g)(),
                        { notify: n } = (0, ed.l)(),
                        o = (0, eV.c)(async () => {
                            if (0 === r.length || l) return;
                            let e = { containerId: s.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO },
                                o = await a(t.kind);
                            if (null === o) return void n((0, i.jsx)(t5, {}), e);
                            let d = new Set(o),
                                c = r.filter((e) => !d.has(e.id));
                            return c.length
                                ? (await t.changePlaylist((0, er.M)({ operation: en.y.INSERT, position: 0, tracks: c }))) === es.Y.OK
                                    ? void n((0, i.jsx)(aa, { playlistTitle: t.title, playlistUrl: t.url }), e)
                                    : void n((0, i.jsx)(t5, {}), e)
                                : void n((0, i.jsx)(ai, {}), e);
                        });
                    return (0, i.jsx)(tn.Dr, {
                        isBlock: !0,
                        onClick: o,
                        icon: (0, i.jsx)(e$.I, { variant: 'add', size: 'xxs', className: t1().playlistItemIcon }),
                        className: t1().playlistItem,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_ITEM,
                        children: (0, i.jsx)(ef.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                    });
                }),
                as = (0, s.PA)((e) => {
                    let { searchQuery: t, sourcePlaylistUuid: a } = e,
                        {
                            contextMenuAddTracksToPlaylist: { isPlaylistsLoading: l, getFilteredPlaylists: s },
                        } = (0, S.g)(),
                        r = (0, n.useRef)(null),
                        o = s(t, a),
                        d = (0, t8.Te)({
                            count: o.length,
                            getScrollElement: () => r.current,
                            estimateSize: () => 36,
                            getItemKey: (e) => {
                                var t, a;
                                return null != (a = null == (t = o[e]) ? void 0 : t.uuid) ? a : e;
                            },
                            overscan: 2,
                        }),
                        u = d.getVirtualItems().flatMap((e) => {
                            let t = o[e.index];
                            return t ? [{ virtualItem: e, playlist: t }] : [];
                        });
                    return ((0, n.useEffect)(() => {
                        d.scrollToOffset(0);
                    }, [t, d]),
                    l)
                        ? (0, i.jsx)('div', {
                              className: t1().playlistList,
                              'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                              children: Array.from({ length: 10 }, (e, t) =>
                                  (0, i.jsx)(tn.Dr, { children: (0, i.jsx)(t4.W, { isActive: !0, className: t1().playlistItemShimmer }) }, t),
                              ),
                          })
                        : o.length
                          ? (0, i.jsx)('div', {
                                ref: r,
                                className: t1().playlistList,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_LIST,
                                children: (0, i.jsx)('div', {
                                    className: t1().virtualPlaylistList,
                                    style: { height: d.getTotalSize() },
                                    children: u.map((e) => {
                                        let { virtualItem: t, playlist: a } = e;
                                        return (0, i.jsx)(
                                            'div',
                                            {
                                                ref: d.measureElement,
                                                className: t1().virtualPlaylistItem,
                                                'data-index': t.index,
                                                style: { transform: 'translate3d(0, '.concat(t.start, 'px, 0)') },
                                                children: (0, i.jsx)(al, { playlistItem: a }),
                                            },
                                            t.key,
                                        );
                                    }),
                                }),
                            })
                          : (0, i.jsx)('div', {
                                className: t1().emptyState,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_EMPTY_STATE,
                                children: (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }),
                            });
                }),
                ar = (0, s.PA)((e) => {
                    let { sourcePlaylistUuid: t } = e,
                        {
                            playlist: { itemsForCopy: a },
                        } = (0, S.g)(),
                        { formatMessage: l } = (0, o.A)(),
                        [s, d] = (0, n.useState)(''),
                        u = ((e) => {
                            let { createPlaylist: t, fullscreenPlayer: a } = (0, S.g)(),
                                { notify: l } = (0, ed.l)(),
                                s = (0, r.useRouter)(),
                                { formatMessage: n } = (0, o.A)();
                            return (0, eV.c)(async () => {
                                if (!(null == e ? void 0 : e.length)) return;
                                let r = { containerId: a.modal.isOpened ? eo.u.FULLSCREEN_INFO : eo.u.INFO };
                                await t.create({ title: n({ id: 'entity-names.new-playlist' }), visibility: D.L.PUBLIC });
                                let o = t.meta;
                                if (!(null == o ? void 0 : o.uuid)) {
                                    (l((0, i.jsx)(t5, {}), r), t.reset());
                                    return;
                                }
                                if ((await o.changePlaylist((0, er.M)({ operation: en.y.INSERT, position: 0, tracks: e }))) === es.Y.OK) {
                                    let { href: e } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: o.uuid } });
                                    (t.reset(), a.modal.isOpened && a.modal.close(), s.push(e));
                                    return;
                                }
                                (t.reset(), l((0, i.jsx)(t5, {}), r));
                            });
                        })(a),
                        m = (0, eV.c)((e) => {
                            d(e);
                        }),
                        p = (0, eV.c)(() => {
                            d('');
                        }),
                        _ = (0, eV.c)((e) => {
                            (e.stopPropagation(), e.nativeEvent.stopImmediatePropagation());
                        });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: t1().searchSection,
                                children: (0, i.jsx)(t9.D, {
                                    className: t1().searchField,
                                    initialValue: s,
                                    correctedValue: null,
                                    placeholder: l({ id: 'search.playlist-placeholder' }),
                                    onChange: m,
                                    resetButtonAriaLabel: l({ id: 'interface-actions.reset-search-input' }),
                                    onResetClick: p,
                                    shouldPreventAutoFocusScroll: !0,
                                    innerInputProps: { onKeyDown: _, 'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_SEARCH_INPUT },
                                }),
                            }),
                            (0, i.jsx)(tn.Dr, {
                                onClick: u,
                                icon: (0, i.jsx)(e$.I, { variant: 'add', size: 'xxs' }),
                                className: t1().createPlaylistButton,
                                'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_CREATE_BUTTON,
                                children: (0, i.jsx)(ef.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.create-playlist' }),
                                }),
                            }),
                            (0, i.jsx)(t2.c, { className: t1().menuDivider }),
                            (0, i.jsx)(as, { searchQuery: s, sourcePlaylistUuid: t }),
                        ],
                    });
                }),
                an = (0, s.PA)((e) => {
                    let { disabled: t, className: a, sourcePlaylistUuid: l } = e,
                        {
                            contextMenuAddTracksToPlaylist: { loadPlaylistsWithoutTracks: s },
                            settings: { isMobile: r },
                            user: n,
                            playlist: { items: d },
                        } = (0, S.g)(),
                        { formatMessage: u } = (0, o.A)(),
                        m = t || !n.isAuthorized || !d.length,
                        p = (0, eV.c)(() => {
                            s();
                        });
                    return (0, i.jsx)(tn.W1, {
                        offsetOptions: 3,
                        isMobile: r,
                        className: a,
                        listClassName: t1().menuContent,
                        label: u({ id: 'interface-actions.add-tracks-to-playlist' }),
                        icon: (0, i.jsx)(e$.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: m,
                        onShow: p,
                        containerDataTestId: c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST,
                        'data-test-id': c.OA.playlist.CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                        children: (0, i.jsx)(ar, { sourcePlaylistUuid: l }),
                    });
                });
            var ao = a(16503),
                ad = a(29093),
                ac = a.n(ad);
            let au = (0, s.PA)((e) => {
                let { className: t, playlist: a } = e,
                    { notify: s } = (0, ed.l)(),
                    { formatMessage: r } = (0, o.A)(),
                    d = (0, n.useCallback)(async () => {
                        (await a.toggleVisibility()) === e4.F.ERROR &&
                            s((0, i.jsx)(ec.h, { error: r({ id: 'playlist-errors.failed-to-change-privacy-settings' }) }), { containerId: eo.u.ERROR });
                    }, [r, s, a]);
                return (0, i.jsxs)(tn.Dr, {
                    className: (0, l.$)(ac().root, t),
                    onClick: d,
                    icon: (0, i.jsx)(e$.I, { variant: 'eye_crossed', size: 'xxs' }),
                    'data-test-id': c.S7.CONTEXT_MENU_PLAYLIST_PRIVACY_BUTTON,
                    role: 'menuitemcheckbox',
                    'aria-checked': !a.isPublic,
                    isSubMenu: !0,
                    isBlock: !0,
                    children: [
                        (0, i.jsx)('span', { className: ac().caption, children: (0, i.jsx)(eG.A, { id: 'playlist-actions.privacy' }) }),
                        (0, i.jsx)(ao.l, { isChecked: !a.isPublic, ariaLabel: r({ id: 'playlist-actions.privacy-label' }), tabIndex: -1 }),
                    ],
                });
            });
            var am = a(24816),
                ap = a(53712),
                a_ = a(56120),
                ay = a(87201),
                ag = a(30296),
                av = a(43478),
                ah = a(83014),
                ax = a(55491),
                aP = a(44851),
                aA = a(14240),
                aT = a(35015),
                af = a(16386),
                ab = a(67303),
                aC = a(74682),
                ak = a(59043),
                aI = a(2144);
            let aS = (0, s.PA)((e) => {
                    var t, a, l, s;
                    let { playlist: u, onOpenChange: m, open: p, wrapperClassName: _, ...y } = e,
                        { shouldShowBuySubscriptionModal: g, showBuySubscriptionModal: v } = (0, e1.q)(),
                        {
                            settings: { isMobile: h },
                            trailer: P,
                            playlist: {
                                filters: { activeFilter: A, analyticsParamsActiveFilterIndex: T },
                                items: f,
                                // for PulseSync: BEGIN access playlist track IDs for download-to-file actions
                                trackIds: playlistTrackIds,
                                // for PulseSync: END access playlist track IDs for download-to-file actions
                            },
                            user: b,
                            experiments: C,
                            sonataState: { entityMeta: k },
                        } = (0, S.g)(),
                        I = (0, ag.e)(),
                        L = (0, eq.K)(u),
                        j = C.checkExperiment(eb.z.WebEditorsFeatures, 'on'),
                        N = (0, eQ.A)(u),
                        E = (0, e0.F)(),
                        D = ''.concat(ep.U.PLAYLIST, '-').concat(u.uid, '_').concat(u.kind),
                        R = u.canUserChange,
                        { utmLink: w } = (0, eg.f)({
                            pageId: x._Q.PLAYLIST,
                            blockId: ep.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: u.uuid,
                            pageEntityId: u.uuid,
                        }),
                        O = (0, eZ.P)(),
                        U = u.isOwnFavouritePlaylist && C.checkExperiment(eb.z.WebNextToggleFavouritePlaylistVisibility, 'on'),
                        M = (0, tq.S)(null == I ? void 0 : I.state.currentContext.value),
                        B = k && !M,
                        F = !C.checkExperiment(eb.z.WebNextProductWithoutRecommendation, 'on'),
                        H = (0, av.i)({ playlistId: u.id, filter: A }),
                        Y = (0, eV.c)((e) =>
                            e.data
                                ? !e.data.isRemoved && e.data.isAvailable
                                    ? e.data.entityId
                                    : void 0
                                : null !== e.albumId
                                  ? ''.concat(e.id, ':').concat(e.albumId)
                                  : String(e.id),
                        ),
                        W = (0, tQ.m)(f, am.N.NEXT, H, { entityVariant: aT.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, Y),
                        z = (0, tQ.m)(f, am.N.LAST, H, { entityVariant: aT.c.PLAYLIST, entityTitle: u.title, coverUri: u.coverUri }, Y),
                        { notify: K } = (0, ed.l)(),
                        { formatMessage: G } = (0, o.A)(),
                        V = (0, r.useRouter)(),
                        $ = ((e) => {
                            let t = (0, tT.st)(),
                                a = (0, tf.U)(),
                                { hash: i } = (0, tT.gf)();
                            return (0, n.useCallback)(() => {
                                if (!t || !e.objectId) return;
                                let l = {
                                        hash: i,
                                        pageId: tb.W[x._Q.PLAYLIST],
                                        mainObjectType: d.DomainObjectType.Wave,
                                        mainObjectId: e.objectId,
                                        tabId: e.tabId || '',
                                        tabPos: e.tabPos || 1,
                                    },
                                    s = (0, tP.F)({ params: l, logger: a, context: 'useSendEventOnPlaylistWaveStarted' });
                                s && (0, tA.e7)(t.evgenInstance, s);
                            }, [t, i, a, e]);
                        })((0, n.useMemo)(() => ({ objectId: u.seeds[0], tabId: A, tabPos: T }), [u.seeds, A, T])),
                        { shareLink: X, pathname: q } = (0, aA.b)('/playlists/:playlistUuid', { params: { playlistUuid: u.uuid } }),
                        Q = (0, tZ.A)({ entityVariant: ah.D.PLAYLIST, urlParams: { id: u.uid, kind: u.kind } }),
                        { isPlaying: Z, togglePlay: J } = (0, ay.B)({
                            seeds: null != (s = u.seeds) ? s : [],
                            pageIdForFrom: x._Q.RADIO,
                            blockIdForFrom: D,
                            parentContextId: u.uuid,
                        }),
                        ee = (0, eV.c)(() => {
                            if (g && b.isAuthorized) return void v();
                            !O() && (Z || (J(), $()));
                        }),
                        et = (0, eV.c)(() => {
                            if (g) return void v();
                            O() || (P.setUtmLink(w), P.openPlaylistTrailer(u.id), E(d.DomainObjectType.Playlist, u.id));
                        }),
                        ea = (0, eV.c)(async () => {
                            if ((await u.deletePlaylist()) === e4.F.ERROR)
                                return void K((0, i.jsx)(ec.h, { error: G({ id: 'playlist-errors.failed-to-remove-playlist' }) }), { containerId: eo.u.ERROR });
                            V.push(ap.Z.collection.href);
                        });
                    (0, a_.N)(p);
                    let ei = (u.isPublic || u.isFavouritePlaylist) && u.isAvailable,
                        el = {
                            variant: ax.Y.PLAYLIST,
                            id: u.kind,
                            title: u.title,
                            path: q,
                            playlistOwnerName: null == (t = u.owner) ? void 0 : t.name,
                            playlistOwnerLogin: null == (a = u.owner) ? void 0 : a.login,
                        };
                    // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                    let pulseSyncInjectPlaylistMenuItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                            eventDetail: {
                                id: String(u.kind ?? u.id),
                                uuid: String(u.uuid ?? ''),
                                url: q,
                                ...(u.title
                                    ? {
                                          title: String(u.title),
                                      }
                                    : {}),
                            },
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, pulseSyncMenuJsx.jsx)(
                                    pulseSyncMenuItems.Dr,
                                    {
                                        icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                            variant: icon,
                                            size: 'xxs',
                                        }),
                                        onClick: () => {
                                            (activate(), m(!1));
                                        },
                                        children: label,
                                        'data-pulsesync-addon-menu-item': '',
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END playlist context and native addon menu item rendering
                    return (0, i.jsxs)(tn.W1, {
                        isMobile: h,
                        offsetOptions: 10,
                        open: p,
                        onOpenChange: m,
                        ariaLabel: G({ id: 'interface-actions.context-menu' }),
                        wrapperClassName: _,
                        ...y,
                        containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                        // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                        children: pulseSyncInjectPlaylistMenuItems([
                            j && (0, i.jsx)(tJ.d, { entityVariant: ah.D.PLAYLIST, adminUrl: u.isFavouritePlaylist ? void 0 : Q, withPlaylistPageFeatures: !0 }),
                            (0, i.jsx)(an, { sourcePlaylistUuid: u.uuid }),
                            !h && (0, i.jsx)(ab.L, { onClick: N, isPinned: u.isPinned }),
                            !u.isFavouritePlaylist && (0, i.jsx)(af.T, { onClick: L, isLiked: u.isLiked, disabled: !b.isAuthorized }),
                            // for PulseSync: BEGIN download-to-file action in the playlist page menu
                            playlistTrackIds.length > 0 &&
                                (0, i.jsx)(tn.Dr, {
                                    onClick: () => window.musicDesktop?.pulsesync.downloads.tracks?.(playlistTrackIds, 'playlist', u.title || ''),
                                    icon: (0, i.jsx)(e$.I, { variant: 'download', size: 'xxs' }),
                                    children: 'Скачать в файл',
                                }),
                            // for PulseSync: END download-to-file action in the playlist page menu
                            (null == (l = u.trailer) ? void 0 : l.isAvailable) && (0, i.jsx)(ak.N, { onClick: et }),
                            F && (0, i.jsx)(aI.C, { disabled: !u.isAvailable, onClick: ee, variant: aP.I.PLAYLIST }),
                            B &&
                                (0, i.jsx)(tn.Dr, {
                                    onClick: W,
                                    icon: (0, i.jsx)(e$.I, { variant: 'playNext', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-next' }),
                                }),
                            B &&
                                (0, i.jsx)(tn.Dr, {
                                    onClick: z,
                                    icon: (0, i.jsx)(e$.I, { variant: 'playLast', size: 'xxs' }),
                                    disabled: !b.isAuthorized,
                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                    children: (0, i.jsx)(eG.A, { id: 'play-queue.play-last' }),
                                }),
                            (0, i.jsx)(aC.H, { disabled: !ei, shareLink: X, entityMeta: el }),
                            R &&
                                (0, i.jsx)(tn.Dr, {
                                    icon: (0, i.jsx)(e$.I, { variant: 'bucket', size: 'xxs' }),
                                    onClick: ea,
                                    children: (0, i.jsx)(eG.A, { id: 'playlist-actions.remove-playlist' }),
                                }),
                            (R || U) && (0, i.jsx)(au, { playlist: u }),
                        ]),
                        // for PulseSync WebHost: END inject native addon items into the playlist context menu
                    });
                }),
                aL = (0, s.PA)((e) => {
                    var t, a;
                    let { playlist: s, isDisabled: u, className: m, forwardRef: p } = e,
                        { shouldShowBuySubscriptionModal: _, showBuySubscriptionModal: y } = (0, e1.q)(),
                        { from: g, utmLink: v } = (0, eg.f)({
                            pageId: x._Q.PLAYLIST,
                            blockId: ep.U.PLAYLIST,
                            contextType: eu.K.Playlist,
                            contextId: s.uuid,
                            pageEntityId: s.uuid,
                        }),
                        {
                            settings: { isMobile: h },
                            sonataState: P,
                            trailer: A,
                            playlist: {
                                filters: { activeFilter: T, activeFilterName: f },
                                enableVariousAutoFlow: b,
                                trackIds: C,
                                isRewind2024Playlist: k,
                                setShouldShowTrailerOnboarding: I,
                            },
                            user: L,
                            ugcUploadCenter: j,
                            paywall: { modal: N },
                        } = (0, S.g)(),
                        E = h && !L.isAuthorized,
                        D = h && !L.hasPlus && L.isAuthorized,
                        R = E || D,
                        w = (0, e2.N)(),
                        { formatMessage: O, formatNumber: U } = (0, o.A)(),
                        [M, B] = (0, n.useState)(!1),
                        F = (0, eq.K)(s),
                        H = (0, eQ.A)(s),
                        Y = (0, e0.F)(),
                        W = !h,
                        z = (0, n.useRef)(null),
                        K = (0, eJ.f)(),
                        G = (0, eZ.P)(),
                        { controlSize: V, iconSize: $ } = (0, ta.q)(h),
                        { notify: X } = (0, ed.l)(),
                        q = s.canUserChange && !h,
                        Q = (0, r.useSearchParams)(),
                        Z = (0, n.useMemo)(() => {
                            if (k && s.personalColor) return (0, e9.R)(s.personalColor);
                        }, [k, s.personalColor]),
                        J = (0, eV.c)(() => {
                            var e;
                            null == (e = z.current) || e.focus();
                        });
                    (0, n.useEffect)(() => {
                        K();
                    }, [K]);
                    let ee = (0, eV.c)(async (e) => {
                            (await s.changeTitle(e)) === e4.F.ERROR &&
                                X((0, i.jsx)(ec.h, { error: O({ id: 'playlist-errors.failed-to-change-title' }) }), { containerId: eo.u.ERROR });
                        }),
                        { isPlaying: et, togglePlay: ea } = (0, e8.D)({
                            playContextParams: {
                                contextData: {
                                    type: eu.K.Playlist,
                                    meta: { id: s.id, uuid: s.uuid },
                                    filter: T,
                                    filterName: f,
                                    enableVariousAutoFlow: b,
                                    from: g,
                                    utmLink: v,
                                },
                                loadContextMeta: !0,
                                entitiesData: P.unloadedEntitiesDataFromModels,
                            },
                        }),
                        [ei, el] = (0, n.useState)(et),
                        es = (0, eV.c)(() => {
                            if (!G()) {
                                if (_) return void y();
                                if (w) return void N.open();
                                (ea(), P.setPlaylistFilter(T));
                            }
                        });
                    (0, n.useEffect)(() => {
                        et && (P.playlistFilter === T || ((0, eK.A)(P.playlistFilter) && (0, eK.A)(T))) ? el(!0) : el(!1);
                    }, [et, P.playlistFilter, T]);
                    let er = (0, n.useMemo)(() => {
                            if (s.actualLikesCount && s.actualLikesCount > 0)
                                return (0, i.jsx)(ef.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    size: 's',
                                    weight: 'medium',
                                    children: s.actualLikesCount && U(s.actualLikesCount),
                                });
                        }, [s.actualLikesCount, U]),
                        en = (0, n.useMemo)(
                            () =>
                                h
                                    ? (0, i.jsx)(e5.D, {
                                          ref: z,
                                          className: (0, l.$)(ts().playControl, { [ts().playControl_withLogin]: R }),
                                          color: R ? 'secondary' : 'primary',
                                          buttonVariant: 'default',
                                          iconSize: R ? $ : 'xxl',
                                          size: R ? V : void 0,
                                          isPlaying: ei,
                                          variant: R ? 'default' : 'filled',
                                          onClick: es,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                      })
                                    : (0, i.jsx)(e5.D, {
                                          ref: z,
                                          className: ts().playControl,
                                          withRipple: !0,
                                          buttonVariant: 'default',
                                          radius: 'xxxl',
                                          size: 's',
                                          color: 'primary',
                                          iconSize: 'xxs',
                                          isPlaying: ei,
                                          onClick: es,
                                          disabled: u,
                                          shouldSendAnalyticsOnPlayClick: !0,
                                          children: (0, i.jsx)(eG.A, { id: 'player-actions.listen' }),
                                      }),
                            [u, h, es, ei, R, $, V],
                        ),
                        em = (0, eV.c)(() => {
                            G() || (A.setUtmLink(v), A.openPlaylistTrailer(s.id), Y(d.DomainObjectType.Playlist, s.id));
                        }),
                        e_ = (0, eV.c)(() => {
                            if (_) return void y();
                            em();
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        (null == (e = s.trailer) ? void 0 : e.isAvailable) && 'true' === Q.get(e7.K.OPEN_TRAILER) && em();
                    }, [k, s.personalColor, em, Q, I, null == (t = s.trailer) ? void 0 : t.isAvailable]);
                    let ev = (0, n.useMemo)(() => {
                            var e;
                            return (null == (e = s.trailer) ? void 0 : e.isAvailable) && !h
                                ? (0, i.jsx)(tt.L, {
                                      children: (0, i.jsx)(te.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: th().trailerControl,
                                          onClick: e_,
                                          disabled: !s.isAvailable,
                                          style: Z,
                                          children: (0, i.jsx)(eG.A, { id: 'entity-names.trailer' }),
                                      }),
                                  })
                                : null;
                        }, [e_, h, null == (a = s.trailer) ? void 0 : a.isAvailable, s.isAvailable, Z]),
                        eh = s.canUserChange && j.isAvailable,
                        ex = (0, n.useMemo)(() => {
                            if (eh) return (0, i.jsx)('div', { className: th().ugcControls, children: (0, i.jsx)(tX, { playlist: s }) });
                        }, [s, eh]),
                        eP = (0, n.useMemo)(() => O({ id: 'entity-names.likes-count-description' }, { count: s.actualLikesCount }), [O, s.actualLikesCount]),
                        eA = (0, ew.L)(() => {
                            if (!s.isFavouritePlaylist)
                                return h
                                    ? (0, i.jsx)(e6.c, {
                                          className: th().likeControl,
                                          isLiked: s.isLiked,
                                          onClick: F,
                                          variant: 'default',
                                          size: V,
                                          iconSize: $,
                                          iconClassName: th().likeIcon,
                                          disabled: !L.isAuthorized,
                                      })
                                    : (0, i.jsx)(e6.c, {
                                          className: th().likeControl,
                                          isLiked: s.isLiked,
                                          onClick: F,
                                          withRipple: !0,
                                          iconSize: $,
                                          size: V,
                                          variant: 'default',
                                          'aria-label': eP,
                                          iconClassName: th().likeIcon,
                                          disabled: !L.isAuthorized,
                                          children: er,
                                      });
                        }),
                        // for PulseSync: BEGIN allow track downloads outside owned or favorite playlists
                        eT = L.hasPlus && !h, // && l.isFavouritePlaylist && l.isOwnPlaylist,
                        // for PulseSync: END allow track downloads outside owned or favorite playlists
                        eb = (0, n.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: th().controls,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: th().mainControls,
                                            children: [
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(s.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: en,
                                                }),
                                                (0, i.jsx)(tI, { playlistUuid: s.uuid }),
                                                ev,
                                                (0, i.jsx)(ey.B, {
                                                    objectType: d.DomainObjectType.Playlist,
                                                    objectId: String(s.uuid),
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: eA,
                                                }),
                                                W && (0, i.jsx)(e3.O, { onClick: H, isPinned: s.isPinned, className: th().pinControl }),
                                                (0, i.jsx)(aS, {
                                                    playlist: s,
                                                    open: M,
                                                    onOpenChange: B,
                                                    wrapperClassName: th().menuControl,
                                                    size: V,
                                                    icon: (0, i.jsx)(e$.I, { size: $, variant: 'more' }),
                                                    'data-test-id': c.e8.pageHeader.PLAYLIST_HEADER_CONTEXT_MENU_BUTTON,
                                                }),
                                                eT && (0, i.jsx)(tg, { trackIds: C, className: th().downloadControl, onRemove: J }),
                                            ],
                                        }),
                                        ex,
                                    ],
                                }),
                            [en, ev, eA, H, s, eT, C, M, V, $, ex, W, J],
                        );
                    return (0, i.jsx)('div', {
                        className: th().root,
                        children: (0, i.jsx)(ti.k, {
                            headingVariant: 'h1',
                            ref: p,
                            className: m,
                            controls: eb,
                            meta: (0, i.jsx)(tG, { playlist: s }),
                            entityName: O({ id: 'entity-names.playlist' }),
                            title: s.title,
                            canChangeTitle: q,
                            maxTitleLength: eX.k,
                            onTitleChange: ee,
                            cover: (0, i.jsx)(tw, { playlist: s }),
                            showMobileLoginButton: E,
                            showMobileSubscriptionButton: D,
                        }),
                    });
                }),
                aj = (0, n.forwardRef)((e, t) => (0, i.jsx)(aL, { forwardRef: t, ...e }));
            var aN = a(10508),
                aE = a(90947),
                aD = a.n(aE);
            let aR = (e) => {
                let { className: t, isEmptySearch: a } = e,
                    s = (0, n.useMemo)(
                        () =>
                            a ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-title' }) : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-title' }),
                        [a],
                    ),
                    r = (0, n.useMemo)(
                        () =>
                            a
                                ? (0, i.jsx)(eG.A, { id: 'search-results.not-found-description' })
                                : (0, i.jsx)(eG.A, { id: 'error-messages.empty-collection-playlist-description' }),
                        [a],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(aD().root, t),
                    'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK,
                    children: [
                        (0, i.jsx)('div', {
                            className: aD().iconBackground,
                            children: (0, i.jsx)(e$.I, { variant: 'search', size: 'l', className: aD().icon, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_ICON }),
                        }),
                        (0, i.jsx)(ef.DZ, { variant: 'h3', size: 'xs', className: aD().title, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TITLE, children: s }),
                        (0, i.jsx)(ef.HL, { variant: 'span', size: 'l', className: aD().subtitle, 'data-test-id': c.Kq.playlist.PLAYLIST_EMPTY_BLOCK_TEXT, children: r }),
                    ],
                });
            };
            var aw = a(53264),
                aO = a(6349),
                aU = a(77737),
                aM = a(69730),
                aB = a(98865),
                aF = a.n(aB);
            let aH = (0, s.PA)((e) => {
                let { className: t, track: a, playContextParams: l, onClick: s } = e,
                    { formatMessage: r } = (0, o.A)(),
                    {
                        settings: { isMobile: d },
                    } = (0, S.g)(),
                    u = (0, e8.D)({ playContextParams: l, entityId: a.entityId }),
                    m = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(aO.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: aF().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [a],
                    ),
                    p = (0, n.useCallback)(
                        (e) => {
                            (e.stopPropagation(), null == s || s(a));
                        },
                        [a, s],
                    ),
                    _ = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)('div', {
                                className: aF().controls,
                                children: (0, i.jsx)(tr.$, {
                                    className: aF().button,
                                    variant: 'text',
                                    size: 'xs',
                                    radius: 'xxxl',
                                    'aria-label': r({ id: 'interface-actions.add-track-to-playlist' }),
                                    onClick: p,
                                    icon: (0, i.jsx)(e$.I, { size: 'xxs', variant: 'add' }),
                                }),
                            }),
                        [r, p],
                    );
                return (0, i.jsx)(aM.C, {
                    className: t,
                    track: a,
                    meta: (0, i.jsx)(aU.j, { withArtistLink: !d, track: a }),
                    playButtonCellRender: m,
                    controls: _,
                    ...u,
                    'data-test-id': c.Kq.track.TRACK_PLAYLIST_ADDITION,
                });
            });
            var aY = a(32110);
            let aW = (e) => {
                let { item: t, from: a, tracks: i } = e,
                    l = i
                        .map((e) => {
                            if (e) return (0, aY.$)(e);
                        })
                        .filter((e) => e);
                return {
                    contextData: { type: eu.K.Various, meta: { id: t.entityId }, from: a },
                    queueParams: { entityId: t.entityId },
                    loadContextMeta: !0,
                    entitiesData: l,
                };
            };
            var az = a(76035),
                aK = a.n(az);
            let aG = (0, s.PA)((e) => {
                var t, a, s, r, u, m, p, _, y;
                let { autoFocus: g, className: v } = e,
                    { formatMessage: h } = (0, o.A)(),
                    { playlist: P } = (0, S.g)(),
                    { search: A } = P,
                    T = (0, aw.R)(),
                    f = (0, n.useRef)(0),
                    b = (null == (t = P.meta) ? void 0 : t.isOwnPlaylist) ? x._Q.OWN_PLAYLISTS : x._Q.PLAYLIST,
                    { from: C } = (0, eg.f)({ pageId: b, blockId: ep.U.FILTERED }),
                    { from: k } = (0, eg.f)({ pageId: b, blockId: ep.U.SUGGESTED }),
                    [I, L] = (0, n.useState)(!1);
                (0, n.useEffect)(
                    () => () => {
                        window.clearTimeout(f.current);
                    },
                    [],
                );
                let j = (0, n.useMemo)(
                        () =>
                            (0, aN.A)((e) => {
                                let t = e.trim();
                                (A.setText(t),
                                    t && (null == P ? void 0 : P.meta) && (A.reset(), A.getTracks({ uid: P.meta.uid, kind: P.meta.kind })),
                                    (t && 0 !== t.length) || (I && (L(!1), P.refreshTracks()), A.setIdleState()));
                            }, 100),
                        [A, P, I],
                    ),
                    N = (0, n.useCallback)(
                        async (e) => {
                            if (P.meta) {
                                A.setAdditionTrackAnimation(e.id);
                                let t = T({ track: e, playlist: P.meta, withSuccessNotification: !1, withPageRefresh: !1 }),
                                    a = new Promise((e) => {
                                        f.current = window.setTimeout(e, 300);
                                    }),
                                    [i] = await Promise.all([t, a]);
                                i === es.Y.OK ? (A.replaceAdditionTrackInProggress(), L(!0)) : A.resetAdditionTrackAnimation();
                            }
                        },
                        [T, P.meta, A],
                    ),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return A.isLoading
                            ? (0, i.jsx)(eh.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                            : null == (e = A.playlistTracks)
                              ? void 0
                              : e.map((e, t) => {
                                    var a, s;
                                    return e
                                        ? e.isTrackNonMusic
                                            ? (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (s = A.playlistTracks) ? void 0 : s.length,
                                                      children: (0, i.jsx)(eT.K, {
                                                          withPodcastName: !0,
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: C, tracks: A.playlistTracks }),
                                                          className: (0, l.$)(aK().track, { [aK().appearingTrack]: e.id === A.additionTrackInProggress }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                            : (0, i.jsx)(
                                                  ey.B,
                                                  {
                                                      objectType: d.DomainObjectType.Track,
                                                      objectId: String(null == e ? void 0 : e.id),
                                                      objectPosX: 1,
                                                      objectPosY: t + 1,
                                                      objectsCount: null == (a = A.playlistTracks) ? void 0 : a.length,
                                                      children: (0, i.jsx)(eL.K, {
                                                          className: (0, l.$)(aK().track, { [aK().appearingTrack]: e.id === A.additionTrackInProggress }),
                                                          track: e,
                                                          playContextParams: aW({ item: e, from: C, tracks: A.playlistTracks }),
                                                      }),
                                                  },
                                                  e.id,
                                              )
                                        : null;
                                });
                    }, [A.isLoading, A.playlistTracks, A.additionTrackInProggress, C]),
                    D = (0, n.useMemo)(() => {
                        var e, t;
                        if (null == (e = P.meta) ? void 0 : e.canUserChange)
                            return A.isLoading
                                ? (0, i.jsx)(eh.D, { isActive: !0, className: aK().shimmerItem, variant: ev.X.PLAYLIST })
                                : null == (t = A.suggestedTracks)
                                  ? void 0
                                  : t.map((e) =>
                                        e
                                            ? (0, i.jsx)(
                                                  aH,
                                                  {
                                                      track: e,
                                                      className: (0, l.$)({ [aK().disappearingTrack]: e.id === A.additionTrackInProggress }),
                                                      playContextParams: ((e, t) => ({
                                                          contextData: { type: eu.K.Various, meta: { id: e.entityId }, from: t },
                                                          queueParams: { index: 0, entityId: e.entityId },
                                                          loadContextMeta: !0,
                                                      }))(e, k),
                                                      onClick: N,
                                                  },
                                                  e.id,
                                              )
                                            : null,
                                    );
                    }, [null == (a = P.meta) ? void 0 : a.canUserChange, A.isLoading, A.suggestedTracks, A.additionTrackInProggress, k, N]),
                    R = (0, n.useMemo)(() => {
                        var e, t, a;
                        let l = !(null == (e = A.suggestedTracks) ? void 0 : e.length) || !(null == (t = P.meta) ? void 0 : t.canUserChange);
                        return (null == (a = A.playlistTrackIds) ? void 0 : a.length) || !l || A.isLoading
                            ? null
                            : (0, i.jsx)(aR, { className: aK().emptyBlockContainer, isEmptySearch: !0 });
                    }, [
                        null == (s = A.suggestedTracks) ? void 0 : s.length,
                        null == (r = A.playlistTrackIds) ? void 0 : r.length,
                        A.isLoading,
                        null == (u = P.meta) ? void 0 : u.canUserChange,
                    ]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t9.D, {
                            className: (0, l.$)(aK().root, v),
                            autoFocus: g,
                            initialValue: A.text,
                            correctedValue: null,
                            placeholder: h({ id: 'search.track-placeholder' }),
                            onChange: j,
                            resetButtonAriaLabel: h({ id: 'interface-actions.reset-search-input' }),
                            onResetClick: A.reset,
                            innerInputProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT },
                            resetButtonProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_RESET_BUTTON },
                            searchIconProps: { 'data-test-id': c.e8.searchPlaylist.SEARCH_PLAYLIST_INPUT_ICON },
                            shouldPreventAutoFocusScroll: !0,
                        }),
                        A.text &&
                            (0, i.jsxs)('div', {
                                className: aK().content,
                                children: [
                                    R,
                                    (0, i.jsx)(e_.F, {
                                        blockType: d.EntityTypes.Tracks,
                                        blockId: d.EntityTypes.Tracks,
                                        blockPosX: 1,
                                        blockPosY: 2,
                                        mainObjectId: String(null == P || null == (m = P.meta) ? void 0 : m.uuid),
                                        mainObjectType: d.DomainObjectType.Playlist,
                                        children: E,
                                    }),
                                    Number(null == (p = A.suggestedTracks) ? void 0 : p.length) > 0 &&
                                        (null == (_ = P.meta) ? void 0 : _.canUserChange) &&
                                        (0, i.jsx)(
                                            ef.DZ,
                                            {
                                                variant: 'h3',
                                                className: (0, l.$)(aK().catalog, { [aK().catalog_withTracks]: null == (y = A.playlistTrackIds) ? void 0 : y.length }),
                                                children: (0, i.jsx)(eG.A, { id: 'search.search-catalog' }),
                                            },
                                            'search.search-catalog-caption',
                                        ),
                                    D,
                                ],
                            }),
                    ],
                });
            });
            var aV = a(97109),
                a$ = a(5867),
                aX = a(27625);
            let aq = (e) => {
                let { children: t, child: a, className: l } = e,
                    { setChildElement: s, setChild: r } = (0, n.useContext)(aX.B),
                    o = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && s(o), a && r(a));
                    }, [o, a, s, r]),
                    (0, n.useEffect)(
                        () => () => {
                            r(null);
                        },
                        [r],
                    ),
                    (0, i.jsx)('div', { ref: o, className: l, children: t })
                );
            };
            var aQ = a(84715),
                aZ = a(69675),
                aJ = a(37760),
                a0 = a.n(aJ);
            let a1 = (0, s.PA)((e) => {
                var t;
                let { playlist: a } = e,
                    { setPlaylistStickyFiltersRef: l, setPlaylistStaticFiltersRef: s } = (0, k.g)(),
                    r = (0, a$.zb)(a.filters.activeFilterIndex),
                    o = (0, n.useRef)(null),
                    d = (0, aZ.$)();
                (0, n.useEffect)(() => {
                    a.isResolved && a.filters.getFilters();
                }, [a, a.loadingState]);
                let c = (0, eV.c)((e) => {
                        var t;
                        if (!r.onTabChange || e === r.value) return;
                        (setTimeout(() => {
                            var t, a, i;
                            null == (i = o.current) || null == (a = i.children[e]) || null == (t = a.focus) || t.call(a);
                        }),
                            r.onTabChange(e));
                        let i = null == (t = a.filters.items) ? void 0 : t[e];
                        i && (a.filters.handleFilterClick(i), d({ tabId: i.id, tabPos: e + 1 }));
                    }),
                    u = null == (t = a.filters.items) ? void 0 : t.map((e) => ({ id: e.id, name: e.name }));
                return (0, i.jsx)(aq, {
                    child: (0, i.jsx)(aQ.A, { className: a0().stickyFilters, tabsState: r, handleFilterClick: c, ref: l, isSticky: !0, items: u }),
                    children: (0, i.jsx)(aQ.A, {
                        className: a0().staticFilters,
                        tabsState: r,
                        handleFilterClick: c,
                        ref: s,
                        carouselClassName: a0().staticFiltersCarousel,
                        items: u,
                    }),
                });
            });
            var a2 = a(98948),
                a9 = a(66784);
            let a8 = (0, s.PA)((e) => {
                let { className: t, creativeClassName: a, gradientClassName: l } = e,
                    {
                        advertBanners: {
                            banners: { brandedPlaylistBanner: s },
                        },
                    } = (0, S.g)(),
                    { formatMessage: r } = (0, o.A)(),
                    d = (0, eV.c)(() => {
                        s.setType(aV.h.BRANDING);
                    });
                return (
                    (0, n.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    (0, i.jsxs)('div', {
                        className: t,
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        children: [
                            (0, i.jsx)(a9.N, {
                                className: l,
                                ownerId: a2.P,
                                containerId: p.LB,
                                params: p.w_,
                                onLoad: d,
                                onError: s.toggleHasErrorTrue,
                                onNoAds: s.toggleNoAdsTrue,
                            }),
                            (0, i.jsx)(a9.N, {
                                className: a,
                                ownerId: a2.P,
                                containerId: p.KZ,
                                params: p.RA,
                                onLoad: d,
                                onError: s.toggleHasErrorTrue,
                                onNoAds: s.toggleNoAdsTrue,
                            }),
                        ],
                    })
                );
            });
            var a4 = a(84146),
                a7 = a(9552),
                a6 = a.n(a7);
            let a3 = (0, s.PA)(() => {
                var e;
                let {
                        advert: t,
                        advertBanners: {
                            banners: { brandedPlaylistBanner: a },
                        },
                    } = (0, S.g)(),
                    s = (0, y.Q)(),
                    r = a.isVisible && s.isEnabled;
                return t.isAdvertDisabled(a4.f.PLAYLIST_BRANDING)
                    ? null
                    : (0, i.jsx)('div', {
                          className: (0, l.$)({ [a6().brandedPlaylistBannerWrapper]: r }),
                          style: null == (e = s.data) ? void 0 : e.style,
                          children: (0, i.jsx)(a8, { creativeClassName: a6().creative }),
                      });
            });
            var a5 = a(71630),
                ie = a(18284),
                it = a(69873),
                ia = a.n(it);
            let ii = (0, s.PA)((e) => {
                    var t;
                    let { className: a, track: s } = e,
                        { formatMessage: r } = (0, o.A)(),
                        d = null == (t = s.file) ? void 0 : t.name,
                        u = (0, n.useCallback)(() => {
                            s.abortUpload();
                        }, [s]),
                        m = (0, n.useCallback)(() => {
                            s.retryUpload();
                        }, [s]),
                        p = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': r({ id: 'ugc.cancel-upload' }),
                                    color: 'primary',
                                    onClick: u,
                                    'data-test-id': c.Kq.track.UGC_TRACK_CANCEL_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(ef.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.cancel-upload' }),
                                    }),
                                }),
                            [u, r],
                        ),
                        _ = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)(tr.$, {
                                    variant: 'text',
                                    withRipple: !1,
                                    'aria-label': r({ id: 'ugc.repeat-upload' }),
                                    color: 'primary',
                                    onClick: m,
                                    'data-test-id': c.Kq.track.UGC_TRACK_RETRY_UPLOAD_BUTTON,
                                    children: (0, i.jsx)(ef.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        type: 'text',
                                        className: ia().button,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.repeat-upload' }),
                                    }),
                                }),
                            [r, m],
                        ),
                        y = (0, n.useMemo)(() => {
                            switch (s.loadingState) {
                                case a5.p.IDLE:
                                case a5.p.PREPARE:
                                case a5.p.UPLOADING:
                                    return p;
                                case a5.p.REJECT:
                                    return _;
                                default:
                                    return null;
                            }
                        }, [p, _, s.loadingState]),
                        g = (0, n.useMemo)(() => {
                            switch (s.loadingState) {
                                case a5.p.IDLE:
                                case a5.p.PREPARE:
                                case a5.p.UPLOADING:
                                    return (0, i.jsx)(ef.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGS_TRACK_UPLOADING_PENDING_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-pending-status' }),
                                    });
                                case a5.p.PROCESSING:
                                case a5.p.RESOLVE:
                                    return (0, i.jsx)(ef.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-processing-status' }),
                                    });
                                case a5.p.REJECT:
                                    return (0, i.jsx)(ef.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: ia().status,
                                        'data-test-id': c.Kq.track.UGC_TRACK_UPLOADING_ERROR_STATUS_TEXT,
                                        children: (0, i.jsx)(eG.A, { id: 'ugc.track-uploading-error-status' }),
                                    });
                                default:
                                    return null;
                            }
                        }, [s.loadingState]);
                    return (0, i.jsxs)(ie.C, {
                        'aria-label': d,
                        className: (0, l.$)(ia().root, ia().card, ia().important, a),
                        'data-test-id': c.Kq.track.UGC_TRACK,
                        children: [
                            (0, i.jsx)(aO.q, { title: d, radius: 'xs', className: ia().playButton }),
                            (0, i.jsxs)('div', {
                                className: ia().meta,
                                children: [
                                    (0, i.jsx)(ef.HL, { variant: 'div', size: 'm', className: ia().title, 'data-test-id': c.Kq.track.UGC_TRACK_TITLE, children: d }),
                                    g,
                                ],
                            }),
                            (0, i.jsx)('div', { className: ia().controls, children: y }),
                        ],
                    });
                }),
                il = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { ugcUploadCenter: l, playlist: s } = (0, S.g)();
                    if (!(null == (t = s.meta) ? void 0 : t.kind) || !s.search.isNeededToLoad) return;
                    let r = l.getUploadingTracksByPlaylistKind(s.meta.kind);
                    if (0 !== r.length) return (0, i.jsx)('div', { className: a, children: r.map((e, t) => (0, i.jsx)(ii, { track: e }, t)) });
                });
            var is = a(22518),
                ir = a.n(is);
            let io = (0, s.PA)((e) => {
                var t;
                let { playlistHeaderRef: a } = e,
                    {
                        playlist: s,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: r },
                        },
                    } = (0, S.g)(),
                    o = (0, y.Q)();
                return ((0, n.useEffect)(() => {
                    s.search.isFocused && s.search.removeFocus();
                }, [s.search.isFocused, s.search]),
                s.isLoading || !s.meta || s.isRejected)
                    ? (0, i.jsx)(ez.c, { className: ir().header })
                    : (0, i.jsxs)(e_.F, {
                          blockType: d.EntityTypes.Header,
                          blockId: d.EntityTypes.Header,
                          blockPosX: 1,
                          blockPosY: 1,
                          mainObjectId: String(null == (t = s.meta) ? void 0 : t.uuid),
                          mainObjectType: d.DomainObjectType.Playlist,
                          objectsCount: 1,
                          children: [
                              (0, i.jsx)(a3, {}),
                              (0, i.jsx)(aj, {
                                  className: (0, l.$)(ir().header, {
                                      [ir().header_branded]: o.isEnabled,
                                      [ir().header_brandedAxe]: r.isVisible && r.type === aV.h.BRANDING,
                                  }),
                                  playlist: s.meta,
                                  isDisabled: s.isDisabled,
                                  ref: a,
                              }),
                              (0, i.jsx)(aG, { autoFocus: !!(!s.items.length || s.search.isFocused) }),
                              s.isFiltersAvailable && (0, i.jsx)(a1, { playlist: s }),
                              (0, i.jsx)(il, { className: ir().content }),
                              s.shouldShowEmptyBlock && (0, i.jsx)(aR, { className: ir().emptyPlaylist }),
                          ],
                      });
            });
            var id = a(83065),
                ic = a(11560);
            let iu = (0, s.PA)((e) => {
                    var t;
                    let { user: a, playlist: l } = e,
                        { formatMessage: s } = (0, o.A)(),
                        r = (0, tu.N)().get(tc.V4),
                        d = (0, id._)(r.webHost),
                        c = (0, n.useMemo)(() => {
                            let e =
                                    l.actualLikesCount > 0
                                        ? s({ id: 'entity-names.likes-counter' }, { counter: l.actualLikesCount })
                                        : s({ id: 'entity-names.likes-counter-empty' }),
                                t = ''.concat(s({ id: 'entity-names.playlist' }), ' • ').concat(e);
                            return l.description ? ''.concat(l.description, ' • ').concat(t) : t;
                        }, [s, l.actualLikesCount, l.description]);
                    if (a.isAuthorized) return null;
                    let { href: u } = (0, tS.no)('/playlists/:playlistUuid', { params: { playlistUuid: l.uuid }, options: { host: 'https://'.concat(d) } }),
                        m = {
                            '@type': 'MusicPlaylist',
                            name: l.title,
                            url: u,
                            description: c,
                            ...(l.modified && { datePublished: l.modified }),
                            ...(l.tracksCount && { numTracks: l.tracksCount }),
                            ...((null == (t = l.owner) ? void 0 : t.name) && { author: { '@type': 'Person', name: l.owner.name } }),
                        };
                    return (0, i.jsx)(ic.S, { value: m });
                }),
                im = (0, s.PA)((e) => {
                    var t, a, s, p, _;
                    let { userId: g, kind: x, playlistUuid: T, preloadedPlaylistByUuid: f } = e,
                        {
                            user: R,
                            playlist: w,
                            settings: { isMobile: O },
                        } = (0, S.g)(),
                        { formatMessage: U } = (0, o.A)(),
                        { contentScrollRef: M, setContentScrollRef: B } = (0, k.g)(),
                        { forceUpdateRefCallback: F, offsetY: $ } = (0, u.G)(M),
                        q = (0, A.l)({ mainObjectType: d.DomainObjectType.Playlist }),
                        Q = (0, C.y)(null == w || null == (t = w.meta) ? void 0 : t.averageColor),
                        Z = (0, n.useMemo)(() => {
                            var e;
                            return w.isRewind2024Playlist && (null == (e = w.meta) ? void 0 : e.personalColor)
                                ? ((e) => {
                                      let { theme: t } = (0, K.W)(),
                                          a = t === z.S.Light ? 0.7 : 0.36;
                                      return (0, W.e)(e, 0.6, a);
                                  })(w.meta.personalColor)
                                : Q;
                        }, [w.isRewind2024Playlist, null == (a = w.meta) ? void 0 : a.personalColor, Q]),
                        { topColorStyle: ee, headerStyle: et } = (0, v.Q)(Z, $);
                    (((e) => {
                        var t;
                        let { setDeeplink: a } = null != (t = (0, G.P)()) ? t : {};
                        (0, n.useEffect)(() => {
                            if (e) {
                                let { href: t } = (0, V.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                null == a || a(t);
                            }
                            return () => {
                                null == a || a(null);
                            };
                        }, [e, a]);
                    })(T),
                        (0, I.J)(w.isResolved),
                        ((e) => {
                            (0, n.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.isLoading &&
                                    H(
                                        ((e) => {
                                            var t, a, i, l, s, r, n, o, d, c, u, m, p;
                                            let _ = e.items.map((e) => ({ id: Number(e.id), albumId: Number(e.albumId) || void 0 }));
                                            return {
                                                owner: null == (t = e.meta) ? void 0 : t.owner,
                                                uid: (null == (a = e.meta) ? void 0 : a.uid) || 0,
                                                kind: (null == (i = e.meta) ? void 0 : i.kind) || 0,
                                                title: (null == (l = e.meta) ? void 0 : l.title) || '',
                                                description: null == (s = e.meta) ? void 0 : s.description,
                                                revision: (null == (r = e.meta) ? void 0 : r.revision) || 0,
                                                snapshot: 0,
                                                trackCount: _.length,
                                                cover: { uri: (null == (n = e.meta) ? void 0 : n.coverUri) || '', prefix: '', type: E.Q.FROM_ALBUM_COVER, custom: !1 },
                                                playlistUuid: (null == (o = e.meta) ? void 0 : o.uuid) || '',
                                                available: (null == (d = e.meta) ? void 0 : d.isAvailable) || !0,
                                                visibility: (null == (c = e.meta) ? void 0 : c.visibility) || D.L.PUBLIC,
                                                likesCount: null == (u = e.meta) ? void 0 : u.likesCount,
                                                modified: (null == (m = e.meta) ? void 0 : m.modified) || '',
                                                created: '',
                                                isBanner: !1,
                                                isPremiere: !1,
                                                durationMs: 0,
                                                collective: !1,
                                                ogImage: (null == (p = e.meta) ? void 0 : p.coverUri) || '',
                                                tags: [],
                                                tracks: _,
                                            };
                                        })(e),
                                        { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                    ).then((e) => {
                                        (0, N.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, e]);
                        })(w),
                        (0, P.A)(),
                        ((e) => {
                            let t = (0, Y.n)(),
                                { paywall: a } = (0, S.g)(),
                                i = t && e;
                            (0, n.useEffect)(
                                () => (
                                    i && a.openFreemiumCollectionPaywall(),
                                    () => {
                                        a.clearFreemiumCollectionBarrier();
                                    }
                                ),
                                [i, a],
                            );
                        })(w.isFavouritePlaylist),
                        (0, n.useEffect)(
                            () => (
                                q(!0),
                                () => {
                                    q(!1);
                                }
                            ),
                            [q],
                        ),
                        (0, n.useEffect)(
                            () => () => {
                                w.reset();
                            },
                            [w, T, g, x],
                        ));
                    let ea = (0, n.useMemo)(
                            () => ({
                                Header: () => (0, i.jsx)(io, { playlistHeaderRef: F }),
                                Item: w.isDragAndDropEnabled ? J : void 0,
                                Footer: () => (0, i.jsx)(eW, { playlist: w }),
                            }),
                            [F, w, w.isDragAndDropEnabled],
                        ),
                        ei = (0, n.useCallback)(
                            (e) => {
                                w.getTracksByRange(e);
                            },
                            [w],
                        ),
                        el = (0, n.useCallback)(
                            (e) => {
                                var t;
                                return null == (t = w.items[e]) ? void 0 : t.key;
                            },
                            [w.items],
                        ),
                        es = (0, n.useCallback)((e) => e, []),
                        er = (0, y.Q)();
                    if (
                        (w.isNeededToLoad &&
                            ('string' == typeof T
                                ? (0, n.use)(w.getPlaylistByUuid({ playlistUuid: T, resumeStream: !1, preloadedPlaylist: f }))
                                : 'string' == typeof g &&
                                  'string' == typeof x &&
                                  (0, n.use)(w.getPlaylistByUserIdAndKind({ userId: g, playlistKind: Number(x), resumeStream: !1 }))),
                        w.uuid &&
                            w.isResolved &&
                            w.similarEntities.isNeededToLoad &&
                            w.isSimilarEntitiesEnabled &&
                            (0, n.use)(w.getSimilarEntities({ playlistUuid: w.uuid })),
                        w.isNotFound && (0, r.notFound)(),
                        w.isRejected)
                    )
                        return (0, i.jsx)(m.SomethingWentWrong, {});
                    let en = er.isEnabled ? L.V.BRANDED_PLAYLIST : L.V.INNER;
                    return (0, i.jsxs)(b.h, {
                        tabId: w.filters.activeFilter || '',
                        tabPos: w.filters.analyticsParamsActiveFilterIndex,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(h.h, {
                                scrollElement: M,
                                children: (0, i.jsxs)('div', {
                                    className: X().wrapper,
                                    style: null == (s = er.data) ? void 0 : s.style,
                                    children: [
                                        (0, i.jsx)(L.Y, { variant: en, style: et }),
                                        !er.isEnabled && (0, i.jsx)('div', { className: X().averageColorBackground, style: ee }),
                                        (0, i.jsx)(eR, {
                                            playlist: w,
                                            children: (0, i.jsx)(j.$, {
                                                context: {
                                                    listAriaLabel: U(
                                                        { id: 'entity-names.playlist-tracks-list' },
                                                        { playlistName: (null == (p = w.meta) ? void 0 : p.title) || '' },
                                                    ),
                                                },
                                                className: (0, l.$)(X().root, X().important),
                                                listClassName: X().content,
                                                customComponents: ea,
                                                computeItemKey: w.isDragAndDropEnabled ? el : es,
                                                totalCount: w.virtualListItemsCount,
                                                itemContentCallback: (e) => (0, i.jsx)(eN, { index: e }),
                                                onGetDataByRange: ei,
                                                debounceDurationInMs: 300,
                                                initialItemCount: null == (_ = w.items) ? void 0 : _.length,
                                                handleRef: B,
                                                shouldTriggerRangeChangedOn: [w.filters.activeFilter, w.virtualListItemsCount],
                                                testId: c.Xk.playlist.PLAYLIST_PAGE,
                                                isMobileLayout: O,
                                                useWindowScroll: O,
                                                withFooter: !0,
                                                withForceScroll: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            w.meta && (0, i.jsx)(iu, { user: R, playlist: w.meta }),
                        ],
                    });
                }),
                ip = (0, s.PA)((e) =>
                    (0, i.jsx)(g.A, {
                        containerId: p.LB,
                        expectedType: _.k.PLAYLIST_GRADIENT,
                        children: (0, i.jsx)(f.n, {
                            pageId: x._Q.PLAYLIST,
                            pageEntityId: e.playlistUuid,
                            children: (0, i.jsx)(T.j, { children: (0, i.jsx)(im, { ...e }) }),
                        }),
                    }),
                );
        },
        21213: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(36095);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    s = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), l, s),
                    n = Math.round(255 * r[0]),
                    o = Math.round(255 * r[1]),
                    d = Math.round(255 * r[2]);
                return 'rgb('.concat(n, ', ').concat(o, ', ').concat(d, ')');
            };
        },
        22034: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        22293: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(74631),
                l = a(67379),
                s = a(44031),
                r = a(87277),
                n = a(59450),
                o = a(71035),
                d = a(84e3),
                c = a(79670),
                u = a(97952);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, n.st)(),
                    m = (0, d.U)(),
                    { hash: p } = (0, n.gf)(),
                    { pageId: _ } = (0, u.$)(),
                    y = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !_ ||
                            !p ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[_];
                        if (!t) return;
                        let i = {
                                hash: p,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            n = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        n && (0, r.ID)(a.evgenInstance, n);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && y();
                    }, [t, y]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || y({ deepLink: e });
                    })
                );
            };
        },
        22518: (e) => {
            e.exports = {
                header: 'PlaylistPageHeader_header__Fgqns',
                header_branded: 'PlaylistPageHeader_header_branded__WyJ4k',
                header_brandedAxe: 'PlaylistPageHeader_header_brandedAxe__RDLB2',
                content: 'PlaylistPageHeader_content__boBkt',
                emptyPlaylist: 'PlaylistPageHeader_emptyPlaylist__oiG4B',
            };
        },
        24252: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i = a(98797),
                l = a(74268),
                s = a(74631),
                r = a(17226),
                n = a(58025);
            class o extends i.uN {}
            (0, n._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === r.v.ENTER;
                    },
                },
            ]);
            let d = () => {
                let [e, t] = (0, s.useState)(null),
                    a = (0, s.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, s.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [r.v.ENTER], cancel: [r.v.ESCAPE], end: [r.v.ENTER] } }),
                    ),
                };
            };
        },
        25469: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => h });
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                r = a(71035),
                n = a(26417),
                o = a(97109),
                d = a(27954),
                c = a(96618),
                u = a(33971),
                m = a(49337);
            let p = (e, t) => (t === m.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                _ = (e) => e.toString(16).padStart(2, '0');
            var y = a(78978),
                g = a(27669);
            let v = (e) =>
                    (0, y.m)(e) &&
                    (e.type === g.k.PLAYLIST_GRADIENT || e.type === g.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                h = (0, l.PA)((e) => {
                    let { children: t, containerId: a, expectedType: l } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: m, brandedEntityAxeBanner: y },
                            },
                        } = (0, d.g)(),
                        { theme: h } = (0, c.W)(),
                        x = (0, s.useContext)(u.G),
                        [P, A] = (0, s.useState)(null),
                        T = (0, r.c)((e) => {
                            (0, n.f)(e, a, v) && e.data.type === l && A(e.data);
                        });
                    (0, s.useEffect)(
                        () => (
                            window.addEventListener('message', T),
                            () => {
                                window.removeEventListener('message', T);
                            }
                        ),
                        [T],
                    );
                    let f = l === g.k.PLAYLIST_GRADIENT && m.isVisible && m.type !== o.h.EMPTY,
                        b = l === g.k.AXE_GRADIENT && y.isVisible && y.type !== o.h.EMPTY,
                        C = f || b,
                        k = (0, s.useMemo)(() => {
                            if ((null == P ? void 0 : P.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    y.isVisible && y.type !== o.h.EMPTY && h
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  l = parseInt(a.substring(2, 4), 16),
                                                  s = parseInt(a.substring(4, 6), 16),
                                                  r = p(i, t),
                                                  n = p(l, t),
                                                  o = p(s, t);
                                              return '#'.concat(_(r)).concat(_(n)).concat(_(o));
                                          })(P.payload.color, h)
                                        : P.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === P.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': P.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': P.payload.button.textColor,
                                  };
                        }, [null == P ? void 0 : P.payload.color, null == P ? void 0 : P.payload.button, h, y.isVisible, y.type]),
                        I = (0, s.useMemo)(() => (C && null !== P ? { data: { type: P.type, style: k, button: P.payload.button }, isEnabled: C } : x), [P, k, C, x]);
                    return (0, i.jsx)(u.G.Provider, { value: I, children: t });
                });
        },
        26417: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, l, s;
                let r = null != (s = null == (l = document.getElementById(t)) || null == (i = l.querySelector('iframe')) ? void 0 : i.contentWindow) ? s : null;
                return null !== r && e.source === r && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        27669: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        29093: (e) => {
            e.exports = { root: 'ContextMenuPlaylistPrivacyItem_root__kz3gc', caption: 'ContextMenuPlaylistPrivacyItem_caption__0VuXh' };
        },
        29504: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => i });
            var i = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        32110: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(16886);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        33971: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(74631).createContext)({ data: null, isEnabled: !1 });
        },
        37588: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDItemWrapper_root__eBm1E',
                inner: 'PlaylistPageDnDItemWrapper_inner__UXQZf',
                dragging: 'PlaylistPageDnDItemWrapper_dragging__Pl94m',
                dragOverlay: 'PlaylistPageDnDItemWrapper_dragOverlay__tWQut',
            };
        },
        37760: (e) => {
            e.exports = {
                stickyFilters: 'PlaylistPageFilters_stickyFilters__SfT9C',
                staticFilters: 'PlaylistPageFilters_staticFilters__sk7JJ',
                staticFiltersCarousel: 'PlaylistPageFilters_staticFiltersCarousel__vJQXE',
            };
        },
        40422: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistCover_root__Vdn75',
                coverButton: 'PageHeaderPlaylistCover_coverButton__dw0rj',
                root_hoverable: 'PageHeaderPlaylistCover_root_hoverable__ZeqpX',
                coverImage: 'PageHeaderPlaylistCover_coverImage__OC58K',
                backCoverColor: 'PageHeaderPlaylistCover_backCoverColor__7z3dk',
                button: 'PageHeaderPlaylistCover_button__vCYgD',
                fileUploadContainer: 'PageHeaderPlaylistCover_fileUploadContainer___JnqP',
                fileUploadContainer_hovered: 'PageHeaderPlaylistCover_fileUploadContainer_hovered__RtD_X',
                buttonContainer: 'PageHeaderPlaylistCover_buttonContainer__OkEaT',
                buttonContainer_withCursorPointer: 'PageHeaderPlaylistCover_buttonContainer_withCursorPointer__pnzha',
                formFile: 'PageHeaderPlaylistCover_formFile__1xnry',
            };
        },
        42853: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => l });
            var i = a(40110),
                l = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        43478: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => r });
            var i = a(74631),
                l = a(22939),
                s = a(70825);
            let r = (e) => {
                let { playlistId: t, filter: a } = e;
                return (0, i.useMemo)(() => (t ? (0, s.t)({ contextType: l.K.Playlist, contextId: t, filter: a }) : null), [t, a]);
            };
        },
        47062: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n });
            var i = a(25839),
                l = a(89288);
            let s = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                r = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                n = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let n = (0, l.ky)(e).toString(),
                        o = [...n.matchAll(s)];
                    return n.split(r).reduce((e, l, s) => {
                        e.push(l);
                        let { 1: r, 2: n } = o[s] || [];
                        return (r && n && e.push((0, i.jsx)(t, { href: n, ...a, children: r })), e);
                    }, []);
                };
        },
        47127: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        48022: (e) => {
            e.exports = {
                root: 'PageHeaderPlaylistMeta_root__9SHZ0',
                description: 'PageHeaderPlaylistMeta_description__edoVx',
                descriptionButton: 'PageHeaderPlaylistMeta_descriptionButton__Jkbg9',
                descriptionLink: 'PageHeaderPlaylistMeta_descriptionLink__OcY5m',
                updatedText: 'PageHeaderPlaylistMeta_updatedText__FSo_0',
                descriptionActionLink: 'PageHeaderPlaylistMeta_descriptionActionLink__aGgtK',
                addDescription: 'PageHeaderPlaylistMeta_addDescription__bFw2Y',
                textField: 'PageHeaderPlaylistMeta_textField__J5QMd',
                actionButtons: 'PageHeaderPlaylistMeta_actionButtons__EYX8Z',
                saveButton: 'PageHeaderPlaylistMeta_saveButton__rZbPS',
                cancelButton: 'PageHeaderPlaylistMeta_cancelButton__Qc5lG',
            };
        },
        48288: (e) => {
            e.exports = {
                cancelIcon: 'DownloadButton_cancelIcon__MR36M',
                root_downloading: 'DownloadButton_root_downloading__H8Eh7',
                root: 'DownloadButton_root__AU5eq',
                downloadingProgress: 'DownloadButton_downloadingProgress__eenjt',
                progress: 'DownloadButton_progress__MM72T',
                progressText: 'DownloadButton_progressText__aQ12B',
                downloadedIcon: 'DownloadButton_downloadedIcon__tETl2',
            };
        },
        48830: (e) => {
            e.exports = {
                root: 'PlaylistPageFooter_root__h6jh8',
                carouselContainer: 'PlaylistPageFooter_carouselContainer__fIwg5',
                carouselBlock: 'PlaylistPageFooter_carouselBlock__OFRtz',
                carouselBlockHeader: 'PlaylistPageFooter_carouselBlockHeader__HbjLr',
                footer: 'PlaylistPageFooter_footer__Mqwre',
            };
        },
        49890: (e) => {
            e.exports = { button: 'PageHeaderPlaylistUgcUploadButton_button__mWtCr', form: 'PageHeaderPlaylistUgcUploadButton_form__V64Yu' };
        },
        51859: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i, u: () => l });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                l = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        52527: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(49337),
                l = a(96618),
                s = a(21213);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, s.e)(e, 0.8, a) };
            };
        },
        56918: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        57024: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => s, UC: () => r, dM: () => n, uV: () => o });
            var i = a(93690),
                l = a(58848);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57469: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        58091: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        58509: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => r });
            var i = a(89288),
                l = a(49337),
                s = a(96618);
            let r = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: r } = (0, i.E2)(e),
                        n = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(r, ', ').concat(n, ')');
                }
            };
        },
        58848: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59911: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(74631);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        64715: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => N });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                r = a(74631),
                n = a(39004),
                o = a(8487);
            a(93588);
            var d = a(4071),
                c = a(66738),
                u = a(4254),
                m = a(67379),
                p = a(44031),
                _ = a(87277),
                y = a(59450),
                g = a(84e3),
                v = a(97952),
                h = a(89192),
                x = a(53712),
                P = a(27954),
                A = a(44806),
                T = a(15270),
                f = a(23818),
                b = a(85686);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = a(27990),
                I = a.n(k);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { slam: s } = (0, P.g)(),
                    { contentRef: r } = (0, h.g)(),
                    n = (0, b.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(I().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(T.L, { withBackwardFallback: '/', className: (0, l.$)(I().navigation, { [I().navigation_desktop]: !r }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(I().content, { [I().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(f._V, { className: I().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, i.jsx)(d.$, {
                                        className: I().button,
                                        onClick: n,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(68854),
                j = a.n(L);
            let N = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, n.A)(),
                    f = (0, r.useContext)(P.P),
                    b = null == f ? void 0 : f.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    C = s(b ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, y.st)(),
                        { hash: a } = (0, y.gf)(),
                        { pageId: i } = (0, v.$)(),
                        l = (0, g.U)();
                    (0, r.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, _.z5)(t.evgenInstance, s);
                    }, [t, e, a, i, l]);
                })(C);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, y.st)(),
                            { hash: t } = (0, y.gf)(),
                            { pageId: a } = (0, v.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, r.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let l = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, _.bv)(e.evgenInstance, l);
                            }, [e, t, a, i]),
                        };
                    })(),
                    I = (0, r.useCallback)(() => {
                        (k(), (window.location.href = x.Z.main.href));
                    }, [k]),
                    { contentRef: L } = (0, h.g)();
                return b
                    ? (0, i.jsx)(S, { className: t, withBackwardControl: a })
                    : (0, i.jsxs)('div', {
                          className: (0, l.$)(j().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(j().navigation, { [j().navigation_desktop]: !L }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, l.$)(j().content, { [j().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(c.I, { className: j().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, l.$)(j().title, j().important), variant: 'h3', size: 'xs', children: C }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, l.$)(j().text, j().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(d.$, {
                                          onClick: I,
                                          className: j().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        66784: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => p });
            var i = a(25839),
                l = a(88204),
                s = a(84059),
                r = a(74631),
                n = a(97109),
                o = a(74068),
                d = a(84e3),
                c = a(27954),
                u = a(49337),
                m = a(96618);
            let p = (0, l.PA)((e) => {
                let { className: t, ownerId: a, containerId: l, params: p, onLoad: _, onRender: y, onNoAds: g, onError: v } = e,
                    { user: h } = (0, c.g)(),
                    x = (0, s.usePathname)(),
                    P = (0, s.useSearchParams)(),
                    { create: A, destroy: T, initialize: f } = (0, o.s)(),
                    { theme: b } = (0, m.W)(),
                    C = (0, d.U)(),
                    k = (0, r.useRef)(!0),
                    I = { ...p };
                return (
                    (I.puid1 = h.advertRole),
                    (0, r.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: l,
                            params: I,
                            insertionCodeParams: { darkTheme: b === u.S.Dark, additionalClasses: b ? [b] : [] },
                            onClose: () => {
                                C.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((C.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == _ || _(n.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == _ || _(n.h.DIRECT);
                                    return;
                                }
                                null == _ || _(n.h.CREATIVE);
                            },
                            onRender: () => {
                                (C.log('[AdvertBanner] Render'), null == y || y());
                            },
                            onStub: () => {
                                (C.log('[AdvertBanner] Stub'), null == g || g());
                            },
                            onError: (e) => {
                                (C.log('[AdvertBanner] Error', { error: e }), null == v || v());
                            },
                        });
                    }, []),
                    (0, r.useEffect)(() => {
                        if (k.current) {
                            k.current = !1;
                            return;
                        }
                        (C.log('[AdvertBanner] Destroy'), T(l), C.log('[AdvertBanner] Initialize'), f(l));
                    }, [x, P, l, T, f, C]),
                    (0, i.jsx)('div', { id: l, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        68854: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        69041: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => T });
            var i = a(25839),
                l = a(82298),
                s = a(46189),
                r = a(88204),
                n = a(74631),
                o = a.t(n, 2),
                d = a(61493),
                c = a(9911),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                p = {};
            ((() => {
                (Object.defineProperty(p, '__esModule', { value: !0 }), (p.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var i = (m[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                p.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                p.__esModule);
            var _ = p.useForwardRef,
                y = a(51859),
                g = a(27954),
                v = a(80986),
                h = a(22034),
                x = a.n(h);
            let P = { [y.u.Desktop]: { start: 40, end: 20 }, [y.u.Mobile]: { start: 40, end: 40 } },
                A = (0, r.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: r,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: p,
                            buttonVariant: h,
                            withSecondaryColor: A,
                        } = e,
                        {
                            settings: { isMobile: T },
                        } = (0, g.g)(),
                        f = _(r, null),
                        { shouldBackwardButtonBeDisabled: b, shouldForwardButtonBeDisabled: C, shouldHideControls: k } = (0, c.Y)(f),
                        [I, S] = (0, n.useMemo)(() => {
                            let e = (0, s.A)(P, o);
                            return [T ? e[y.u.Mobile].start : e[y.u.Desktop].start, T ? e[y.u.Mobile].end : e[y.u.Desktop].end];
                        }, [o, T]),
                        L = (0, n.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = f.current) ? void 0 : t.children[e],
                                    { current: i } = f;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = a.offsetLeft - I;
                                    return;
                                }
                                let l = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                l < S && (i.scrollLeft -= l - S);
                            },
                            [f, S, I],
                        ),
                        j = (0, n.useCallback)(
                            (e) => {
                                var t, i;
                                (L(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, L],
                        ),
                        N = (0, n.cloneElement)(a, { forwardRef: f, className: (0, l.$)(x().wrapper, a.props.className, x().carousel, x().important), onTabChange: j });
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: u,
                                [x().root_arrowLeft_hidden]: b,
                                [x().root_arrowRight_hidden]: C,
                                [x().root_arrow_hidden]: b && C && k,
                            },
                            t,
                        ),
                        'data-test-id': d.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: x().list, children: N }),
                            !T &&
                                (0, i.jsx)(v.X, {
                                    className: (0, l.$)(x().buttons, m),
                                    carouselRef: f,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: A,
                                    buttonSize: p,
                                    buttonVariant: h,
                                }),
                        ],
                    });
                }),
                T = (0, n.forwardRef)((e, t) => (0, i.jsx)(A, { forwardRef: t, ...e }));
        },
        69675: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => m });
            var i = a(74631),
                l = a(67379),
                s = a(82572),
                r = a(59450),
                n = a(84e3),
                o = a(79670),
                d = a(26742),
                c = a(97952),
                u = a(10764);
            let m = () => {
                let e = (0, r.st)(),
                    t = (0, n.U)(),
                    { hash: a } = (0, r.gf)(),
                    { pageId: m } = (0, c.$)(),
                    { mainObjectType: p, mainObjectId: _ } = (0, d.N)(),
                    { skeleton: y } = (0, u.b)();
                return (0, i.useCallback)(
                    (i) => {
                        let { tabId: r = '', tabPos: n = 1, isTabSelectedByDefault: d = !1 } = i;
                        if (!e || !m) return;
                        let c = { hash: a, pageId: o.W[m], tabId: r, tabPos: n, isTabSelectedByDefault: d };
                        (y && (c.skeletonId = y), _ && p && ((c.mainObjectType = p), (c.mainObjectId = _)));
                        let u = (0, l.F)({ params: c, logger: t, context: 'useSendEventOnTabOpened' });
                        u && (0, s.TV)(e.evgenInstance, u);
                    },
                    [e, m, a, y, _, p, t],
                );
            };
        },
        69873: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                card: 'TrackUgcUpload_card__bidIG',
                important: 'TrackUgcUpload_important__RQkp0',
                playButton: 'TrackUgcUpload_playButton__3l2I7',
                meta: 'TrackUgcUpload_meta__aHQv9',
                title: 'TrackUgcUpload_title__Xq3UP',
                status: 'TrackUgcUpload_status__aFGvl',
                controls: 'TrackUgcUpload_controls__Ie2Ox',
            };
        },
        71630: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var i = (function (e) {
                return (
                    (e.IDLE = 'IDLE'),
                    (e.PREPARE = 'PREPARE'),
                    (e.UPLOADING = 'UPLOADING'),
                    (e.PROCESSING = 'PROCESSING'),
                    (e.RESOLVE = 'RESOLVE'),
                    (e.REJECT = 'REJECT'),
                    (e.CANCELLED = 'CANCELLED'),
                    e
                );
            })({});
        },
        72115: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => c });
            var i,
                l = a(6274),
                s = a(74631),
                r = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            l = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: s } = e,
                                r = (0, l.useRef)(null),
                                [n, o] = (0, l.useState)(!!a),
                                d = (0, l.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (o(!a),
                                                r.current && window.clearTimeout(r.current),
                                                (r.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t)));
                                        }, s),
                                    [t, a, s],
                                ),
                                c = (0, l.useCallback)(() => {
                                    (o(!!a), r.current && window.clearTimeout(r.current));
                                }, [a]);
                            return (
                                (0, l.useEffect)(
                                    () => () => {
                                        r.current && window.clearTimeout(r.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let i = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let i = a(810),
                            l = a(1848),
                            s = a(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: r } = e,
                                { state: n, handleDebouncedToggle: o } = (0, s.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, i.useCallback)(() => {
                                    (a && o(), null == t || t());
                                }, [a, o, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, l.getElementFromRefOrElement)(r);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, a), () => t.removeEventListener('scroll', d, a));
                                }, [r, d]),
                                n
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (r[e](a, a.exports, o), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = o(810),
                    t = o(3830),
                    a = o(3940);
                d.useElementOffsetY = (i) => {
                    let [l, s] = (0, a.useForceUpdateRef)(),
                        [r, n] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == l ? void 0 : l.getBoundingClientRect();
                            e && n(e.y);
                        }, [l]);
                    return ((0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: i }), { forceUpdateRefCallback: s, offsetY: r });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        74068: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => m });
            var i = a(74631),
                l = a(71035);
            let s = null,
                r = [],
                n = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    s.context.AdvManager.render(...t);
                },
                o = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [l, ...n] = a;
                    if (null === s)
                        return void r.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == s ? void 0 : s.cspNonce) ? t : void 0, ...l }, ...n);
                        });
                    s.code.create({ cspNonce: null != (e = s.cspNonce) ? e : void 0, ...l }, ...n);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.reload(...t);
                        });
                    s.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.destroy(...t);
                        });
                    s.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === s)
                        return void r.push((e) => {
                            e.code.initialize(...t);
                        });
                    s.code.initialize(...t);
                },
                m = () => {
                    let [e, t] = (0, i.useState)(null !== s),
                        a = (0, l.c)((a) => {
                            var i, l, n;
                            let { cspNonce: o } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (l = window) ? void 0 : l.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (s = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: o }),
                                t(!0),
                                (n = s),
                                r.forEach((e) => {
                                    e(n);
                                }),
                                (r = []));
                        });
                    return { isLoaded: e, init: a, render: n, create: o, reload: d, destroy: c, initialize: u };
                };
        },
        74803: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        76035: (e) => {
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
        78143: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(27954),
                l = a(44806);
            let s = () => {
                var e, t, a;
                let { user: s, experiments: r, settings: n } = (0, i.g)();
                return (
                    !r.checkExperiment(l.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = n.browserInfo) ? void 0 : e.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (a = r.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        78978: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        80278: (e) => {
            e.exports = {
                emptyBlockContainer: 'PlaylistPageItem_emptyBlockContainer__K5xRV',
                shimmerItem: 'PlaylistPageItem_shimmerItem__s_fFo',
                isDuplicate: 'PlaylistPageItem_isDuplicate__Fhcc1',
            };
        },
        81022: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => r });
            var i = a(49337),
                l = a(96618),
                s = a(21213);
            let r = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, s.e)(e, 0.8, a) };
            };
        },
        81119: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s, m: () => l });
            var i = a(74631);
            let l = (0, i.createContext)(null);
            function s() {
                return (0, i.useContext)(l);
            }
        },
        81798: (e) => {
            e.exports = { root: 'PlaylistPageItemEditorialBeforeTitle_root__DcMpV', major: 'PlaylistPageItemEditorialBeforeTitle_major__lifWe' };
        },
        82572: (e, t, a) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: a = '', mainObjectType: s = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                    n = (0, i.makeMetaParams)(1),
                    o = { ...t, skeletonId: a, mainObjectType: s, mainObjectId: r, _meta: n };
                e.trackEvent('Tab.Opened', o);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: s = l.DomainObjectType.NonApplicable, mainObjectId: r = '' } = t,
                        n = (0, i.makeMetaParams)(1),
                        o = { ...t, skeletonId: a, mainObjectType: s, mainObjectId: r, _meta: n };
                    e.trackEvent('Tab.Loaded', o);
                }));
            let i = a(96195),
                l = a(44031);
        },
        82967: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => h });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                r = a(74631),
                n = a(61493),
                o = a(54880),
                d = a(50209),
                c = a(27954),
                u = a(6349),
                m = a(62661),
                p = a(2096),
                _ = a(77737),
                y = a(69730),
                g = a(7929),
                v = a.n(g);
            let h = (0, s.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: s,
                        className: g,
                        withDNDBlock: h,
                        isDragging: x,
                        draggingClassName: P,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: T,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: C = !0,
                        beforeTitle: k,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    } = e,
                    L = (0, d.D)({ playContextParams: s, entityId: a.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, c.g)(),
                    N = (0, o.X)(a.trackSource, { isMobile: j }),
                    E = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(y.C, {
                    className: (0, l.$)(g, { [v().trackWithDots]: h, [v().important]: h }),
                    track: a,
                    beforeBlock: h ? (0, i.jsx)(m.O, { className: (0, l.$)(v().dots, P), isDragging: x }) : void 0,
                    meta: (0, i.jsx)(_.j, { withArtistLink: N, beforeTitle: k, track: a, ignoreDislikedStyles: A, withSecondaryColor: T }),
                    playButtonCellRender: E,
                    controls: (0, i.jsx)(p.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: T,
                        handleRemove: f,
                        withDislike: b,
                        withTrailer: C,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    }),
                    ...L,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        84e3: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(36484),
                l = a(62562);
            let s = () => (0, l.N)().get(i.Zf);
        },
        84146: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        84715: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => R });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                r = a(74631),
                n = a(49656),
                o = a(51859),
                d = a(89192),
                c = a(27954),
                u = a(69041),
                m = a(9931),
                p = a(29504),
                _ = a(67379),
                y = a(82572),
                g = a(59450),
                v = a(84e3),
                h = a(79670),
                x = a(26742),
                P = a(97952),
                A = a(10764),
                T = a(79396),
                f = a(57469),
                b = a.n(f);
            let C = (e) => {
                let { filter: t, tabsState: a, value: s, isSticky: n, ...o } = e,
                    d = (() => {
                        let e = (0, r.useRef)(!1),
                            t = (0, g.st)(),
                            a = (0, v.U)(),
                            { hash: i } = (0, g.gf)(),
                            { pageId: l } = (0, P.$)(),
                            { mainObjectType: s, mainObjectId: n } = (0, x.N)(),
                            { skeleton: o } = (0, A.b)();
                        return (0, r.useCallback)(
                            (r) => {
                                let { tabId: d = '', tabPos: c = 1, isTabSelectedByDefault: u = !1 } = r;
                                if (!t || !l || e.current) return;
                                let m = { hash: i, pageId: h.W[l], tabId: d, tabPos: c, isTabSelectedByDefault: u };
                                (o && (m.skeletonId = o), n && s && ((m.mainObjectType = s), (m.mainObjectId = n)));
                                let p = (0, _.F)({ params: m, logger: a, context: 'useSendEventOnTabLoaded' });
                                p && ((0, y.hc)(t.evgenInstance, p), (e.current = !0));
                            },
                            [t, l, i, o, n, s, a],
                        );
                    })();
                return (
                    (0, r.useEffect)(() => {
                        d({ tabId: t.id, tabPos: s + 1, isTabSelectedByDefault: t.id === p.Q.ALL });
                    }, [t.id, s, d]),
                    (0, i.jsx)(T.o, { tabIndex: n ? -1 : 0, className: (0, l.$)(b().root, { [b().root_selected]: s === a.value }), title: t.name, value: s, ...o })
                );
            };
            var k = a(99221),
                I = a.n(k);
            let S = (0, s.PA)((e) => {
                let { className: t, isActive: a = !0, shimmerClassName: s } = e;
                return (0, i.jsx)(m.wI, {
                    className: (0, l.$)(I().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, i.jsx)(m.zr, { className: (0, l.$)(I().root, s), shimmerClassName: I().shimmer, count: 3, isActive: a }),
                });
            });
            var L = a(74803),
                j = a.n(L);
            let N = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 40, end: 40 } },
                E = { [o.u.Desktop]: { start: 40, end: 20 }, [o.u.Mobile]: { start: 20, end: 50 } },
                D = (0, s.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: a,
                            className: s,
                            forwardRef: o,
                            carouselClassName: p,
                            shimmerClassName: _,
                            isSticky: y,
                            items: g,
                            isShimmerVisible: v,
                            isShimmerActive: h,
                            skipSearchCheck: x = !1,
                        } = e,
                        {
                            playlist: P,
                            settings: { isMobile: A },
                        } = (0, c.g)(),
                        { playlistStickyFiltersRef: T, playlistStaticFiltersRef: f, contentScrollRef: b } = (0, d.g)(),
                        k = null != g ? g : P.filters.items,
                        I = (0, n.L)(() =>
                            (0, i.jsx)(m.wI, {
                                ref: o,
                                className: (0, l.$)(j().carousel, p),
                                ...t,
                                onTabChange: a,
                                children: null == k ? void 0 : k.map((e, a) => (0, i.jsx)(C, { filter: e, tabsState: t, value: a, isSticky: y }, e.id)),
                            }),
                        ),
                        L = (0, r.useCallback)(() => {
                            f && T && (f.scrollLeft = T.scrollLeft);
                        }, [f, T]),
                        D = (0, r.useCallback)(() => {
                            f && T && (T.classList.add(j().carousel_noSmooth), (T.scrollLeft = f.scrollLeft), T.classList.remove(j().carousel_noSmooth));
                        }, [f, T]),
                        [R, w] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        R && D();
                    }, [R, D]);
                    let O = (0, r.useCallback)(() => {
                        w((null == T ? void 0 : T.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [T]);
                    return (
                        (0, r.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                y
                                    ? (null == T || T.addEventListener('scroll', L, t), null == T || T.addEventListener('resize', L, t))
                                    : A
                                      ? (window.addEventListener('scroll', O, t), window.addEventListener('resize', O, t))
                                      : (null == b || b.addEventListener('scroll', O, t), null == b || b.addEventListener('resize', O, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [y, b, T, O, L, A]),
                        (null != v ? v : P.filters.isShimmerVisible)
                            ? (0, i.jsx)(S, { isActive: null == h || h, shimmerClassName: _ })
                            : k && 0 !== k.length && (x || P.search.isNeededToLoad)
                              ? (0, i.jsx)(u.F, { className: s, carouselElement: I, ref: o, scrollPadding: y ? E : N })
                              : void 0
                    );
                }),
                R = (0, r.forwardRef)((e, t) => (0, i.jsx)(D, { forwardRef: t, ...e }));
        },
        86166: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        89056: (e) => {
            e.exports = {
                root: 'PlaylistPageDnDList_root__6Fryw',
                draggableItemWrapper: 'PlaylistPageDnDList_draggableItemWrapper__vvEWL',
                dots: 'PlaylistPageDnDList_dots__F4qh2',
                noHoverItem: 'PlaylistPageDnDList_noHoverItem__dbPTH',
            };
        },
        89725: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r, E9: () => d, KZ: () => o, LB: () => n, RA: () => l, kz: () => s, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                l = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                n = 'adfox_173998931315812570',
                o = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        90947: (e) => {
            e.exports = {
                root: 'EmptyPlaylistBlock_root__wpA0j',
                iconBackground: 'EmptyPlaylistBlock_iconBackground__pnUlz',
                title: 'EmptyPlaylistBlock_title__pQQLf',
                subtitle: 'EmptyPlaylistBlock_subtitle__P4Q7x',
            };
        },
        91797: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(25839),
                l = a(74631),
                s = a(44031),
                r = a(61777),
                n = a(95314),
                o = a(66284),
                d = a(41707);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            playlists: p,
                            containerClassName: _,
                            className: y,
                            headerClassName: g,
                            viewAllActionLink: v,
                            headingVariant: h,
                            shouldSendAnalyticsOnLoaded: x,
                            ...P
                        } = e,
                        A = (0, r.f)();
                    return (
                        (0, l.useEffect)(() => {
                            x && !a && A();
                        }, [a, A, x]),
                        (0, i.jsx)(o.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: y,
                            headerClassName: g,
                            containerClassName: _,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: v,
                            headingVariant: h,
                            ...P,
                            children:
                                null == p
                                    ? void 0
                                    : p.map((e, t) =>
                                          (0, i.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: p.length,
                                                  children: (0, i.jsx)(d.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        92511: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var i = a(74631),
                l = a(33971);
            let s = () => (0, i.useContext)(l.G);
        },
        93596: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => p });
            var i = a(25839),
                l = a(71035),
                s = a(16886),
                r = a(24816),
                n = a(25982),
                o = a(91149),
                d = a(92942),
                c = a(30296),
                u = a(27954);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function p(e, t, a, p) {
                let _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: y } = (0, d.l)(),
                    { fullscreenPlayer: g } = (0, u.g)(),
                    v = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = _(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case r.N.LAST:
                            null == v || v.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case r.N.NEXT:
                            null == v || v.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = g.modal.isOpened ? o.u.FULLSCREEN_INFO : o.u.INFO;
                    y((0, i.jsx)(n.l, { entityVariant: p.entityVariant, variant: t, entityTitle: p.entityTitle, coverUri: p.coverUri }), { containerId: d });
                });
            }
        },
        97109: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        98865: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylistAddition_playButtonCell__Ocnhq',
                controls: 'TrackPlaylistAddition_controls__S346Y',
                button: 'TrackPlaylistAddition_button__fsY9k',
            };
        },
        98948: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => l, l: () => i });
            let i = 'yandex_rtb',
                l = 256152;
        },
        99221: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        99720: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { U: () => i }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'), (e.MALE = 'male'), (e.FEMALE = 'female'));
                })(i || (i = {})));
        },
        99725: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = 100;
        },
    },
]);
