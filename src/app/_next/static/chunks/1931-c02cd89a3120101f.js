(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931],
    {
        6676: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        7189: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search');
                })(i || (i = {}));
        },
        29277: (e, t, a) => {
            'use strict';
            a.d(t, {
                cY: () => p.MusicHistoryIntersectionObserverContext,
                UN: () => K,
                ln: () => B.MusicHistoryTab,
                WW: () => D,
                tM: () => i,
                Hp: () => r,
                uZ: () => s,
                bC: () => n,
                QF: () => l,
                u: () => o,
                z: () => I,
                bg: () => S,
                kU: () => k,
                sr: () => A,
                Sv: () => b,
                lT: () => C.useFormatDate,
            });
            let i = (e) => e.data.itemId.id,
                r = (e) => e.data.itemId.id,
                s = (e) => {
                    let { uid: t, kind: a } = e.data.itemId;
                    return ''.concat(t, ':').concat(a);
                },
                n = (e) => e.data.itemId.seeds.sort().join(','),
                l = (e) => {
                    let { albumId: t, trackId: a } = e.data.itemId;
                    return t ? ''.concat(a, ':').concat(t) : a;
                },
                o = (e) => e.data.itemId.seeds.sort().join(',');
            var c = a(60754),
                d = a(7189),
                m = a(16486),
                u = a(49574),
                v = a(80864);
            let y = (e) => {
                if ('fullModel' in e.data) {
                    let { fullModel: t } = e.data;
                    return (0, c.wg)({ type: d.D.TRACK, id: l(e), loadingState: u.GuX.RESOLVE, data: (0, v.vU)(t) });
                }
                return (0, c.wg)({ type: d.D.TRACK, id: l(e), data: null, loadingState: u.GuX.IDLE });
            };
            var _ = a(33797),
                h = a(27576),
                g = a(50510),
                x = a(57318);
            let b = (e) => {
                var t, a;
                let l =
                    null == (t = e.items)
                        ? void 0
                        : t
                              .map((e) => {
                                  switch (e.context.type) {
                                      case d.D.ALBUM:
                                          return ((e, t) => {
                                              let { data: a } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, c.wg)({
                                                      type: d.D.ALBUM,
                                                      available: r.available,
                                                      id: i(e),
                                                      meta: (0, m.sK)({ album: r.album, artists: r.artists }),
                                                      loadingState: u.GuX.RESOLVE,
                                                      tracks: t.map(y),
                                                  });
                                              }
                                              return (0, c.wg)({ type: d.D.ALBUM, available: !0, id: i(e), meta: null, loadingState: u.GuX.IDLE, tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      case d.D.PLAYLIST:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, c.wg)({
                                                      type: i,
                                                      id: s(e),
                                                      meta: { ...(0, g.bk)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                      loadingState: u.GuX.RESOLVE,
                                                      tracks: t.map(y),
                                                  });
                                              }
                                              return (0, c.wg)({ type: d.D.PLAYLIST, id: s(e), meta: null, loadingState: u.GuX.IDLE, tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      case d.D.ARTIST:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: s } = a;
                                                  return (0, c.wg)({
                                                      type: i,
                                                      available: s.available,
                                                      id: r(e),
                                                      meta: (0, _.as)({ artist: s.artist }),
                                                      loadingState: u.GuX.RESOLVE,
                                                      tracks: t.map(y),
                                                  });
                                              }
                                              return (0, c.wg)({ type: i, available: !0, id: r(e), meta: null, loadingState: u.GuX.IDLE, tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      case d.D.WAVE:
                                          return ((e, t) => {
                                              let { data: a, type: i } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: r } = a;
                                                  return (0, c.wg)({
                                                      type: i,
                                                      id: o(e),
                                                      meta: {
                                                          ...(0, x.er)(r.wave),
                                                          imageUrl: r.simpleWaveForegroundImageUrl,
                                                          backgroundColor: r.simpleWaveBackgroundColor,
                                                      },
                                                      loadingState: u.GuX.RESOLVE,
                                                      tracks: t.map(y),
                                                  });
                                              }
                                              return (0, c.wg)({ type: i, id: o(e), meta: null, loadingState: u.GuX.IDLE, tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      case d.D.SEARCH:
                                      case d.D.OTHER:
                                          return ((e, t) => {
                                              let { type: a } = e;
                                              return (0, c.wg)({ type: a, id: (0, h.A)(), tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      case d.D.QUERY_TO_VIBE:
                                          return ((e, t) => {
                                              let { data: a } = e;
                                              if ('fullModel' in a) {
                                                  let { fullModel: i } = a;
                                                  return (0, c.wg)({
                                                      type: d.D.QUERY_TO_VIBE,
                                                      id: n(e),
                                                      meta: { ...(0, x.lb)(i.wave, i.agent) },
                                                      loadingState: u.GuX.RESOLVE,
                                                      tracks: t.map(y),
                                                  });
                                              }
                                              return (0, c.wg)({ type: d.D.QUERY_TO_VIBE, id: n(e), meta: null, loadingState: u.GuX.IDLE, tracks: t.map(y) });
                                          })(e.context, e.tracks);
                                      default:
                                          return null;
                                  }
                              })
                              .filter((e) => e);
                return { date: e.date, blocks: null != (a = (0, c.wg)(l)) ? a : null };
            };
            var p = a(34632);
            let I = (e) => (null == e ? void 0 : e.type) === d.D.ALBUM,
                S = (e) => (null == e ? void 0 : e.type) === d.D.ARTIST,
                k = (e) => (null == e ? void 0 : e.type) === d.D.PLAYLIST,
                A = (e) => (null == e ? void 0 : e.type) === d.D.WAVE;
            var C = a(71689),
                T = a(95428),
                M = a(72676);
            let H = (e) => ({ type: M.z4.Unloaded, meta: { id: e.entityId } }),
                j = c.gK
                    .compose(c.gK.model('MusicHistoryTrack', { type: c.gK.literal(d.D.TRACK), id: c.gK.string, data: c.gK.maybeNull(v.vj) }), T.XT)
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get entityId() {
                            var t;
                            if (!e.data) return e.id;
                            let { id: a, albums: i } = e.data,
                                r = null == (t = i[0]) ? void 0 : t.id;
                            return r ? ''.concat(a, ':').concat(r) : a;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                L = c.gK.compose(c.gK.model('MusicHistoryBaseBlock', { id: c.gK.string, tracks: c.gK.array(j) }), T.XT).views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get contextId() {
                        return e.id;
                    },
                    get entitiesData() {
                        return e.tracks.map(H);
                    },
                })),
                f = L.props({ type: c.gK.literal(d.D.ALBUM), available: c.gK.boolean, meta: c.gK.maybeNull(m.JC) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum'),
                N = L.props({ type: c.gK.literal(d.D.ARTIST), available: c.gK.boolean, meta: c.gK.maybeNull(_.PK) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['artist:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryArtist'),
                P = c.gK
                    .model('MusicHistoryCommon', { id: c.gK.string, type: c.gK.union(c.gK.literal(d.D.OTHER), c.gK.literal(d.D.SEARCH)), tracks: c.gK.array(j) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(H);
                        },
                    })),
                R = L.props({ type: c.gK.literal(d.D.PLAYLIST), meta: c.gK.maybeNull(g.IP) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t, a;
                            return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (a = e.meta) ? void 0 : a.kind)];
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                w = L.props({ id: c.gK.string, type: c.gK.union(c.gK.literal(d.D.WAVE), c.gK.literal(d.D.QUERY_TO_VIBE)), meta: c.gK.maybeNull(x.Gh) }).views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get contextId() {
                        var t, a;
                        return null != (a = null == (t = e.meta) ? void 0 : t.stationId) ? a : u.M19;
                    },
                    get autoflowSeeds() {
                        var i;
                        return null == (i = e.meta) ? void 0 : i.seeds;
                    },
                })),
                E = c.gK.union(f, N, R, w, P),
                K = c.gK.compose(
                    c.gK.model({
                        id: c.gK.string,
                        type: c.gK.enumeration(Object.values(d.D)),
                        tabIndex: c.gK.number,
                        blockIndex: c.gK.number,
                        trackIndex: c.gK.maybeNull(c.gK.number),
                    }),
                    T.XT,
                ),
                D = c.gK.model('MusicHistoryTab', { date: c.gK.string, blocks: c.gK.maybeNull(c.gK.array(E)) });
            var B = a(54058);
        },
        34632: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryIntersectionObserverContext: () => i });
            let i = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        38403: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        54058: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryTab: () => B });
            var i = a(32290),
                r = a(96103),
                s = a(55178),
                n = a(59824),
                l = a(7189),
                o = a(71926),
                c = a(67404),
                d = a(57318),
                m = a(49574),
                u = a(34632),
                v = a(71689),
                y = a(63618),
                _ = a(39407),
                h = a(71483),
                g = a(33797),
                x = a(44574);
            let b = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: h.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                p = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        { musicHistory: n } = (0, m.Pjs)(),
                        l = (0, s.useId)(),
                        o = (0, s.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, s.useContext)(u.MusicHistoryIntersectionObserverContext);
                    return (
                        (0, s.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(a, '_').concat(i, '_').concat(r, '_').concat(t) : ''.concat(a, '_').concat(i, '_').concat(t),
                                s = n.indexesMap.get(e);
                            n.isInObservationRange(s) &&
                                c({
                                    elementRef: o,
                                    elementId: l,
                                    index: s,
                                    onShow() {
                                        n.getItems(this.index), d(l);
                                    },
                                });
                        }, [i, t, l, n, c, a, r, d]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var I = a(80864),
                S = a(38403),
                k = a.n(S);
            let A = (0, r.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = p({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, i.jsx)(x.DS, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: k().trackShimmer,
                              variant: t === h.K.Album ? m.Xjt.ALBUM : m.Xjt.PLAYLIST,
                          }),
                      })
                    : t === h.K.Album
                      ? (0, i.jsx)(I.FR, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(I.Kt, { track: a.data, playContextParams: o });
            });
            var C = a(72069),
                T = a.n(C);
            let M = (0, r.PA)((e) => {
                    var t, a, r, l, c;
                    let { album: d, tabIndex: u, blockIndex: v } = e,
                        { ref: I, intersectionPropertyId: S } = p({ id: d.id, tabIndex: u, blockIndex: v }),
                        { from: k } = (0, m.fyy)({ blockId: 'album-'.concat(d.id) }),
                        C = (0, s.useMemo)(() => {
                            var e, t;
                            return d.available
                                ? (0, i.jsx)(g.iQ, {
                                      className: T().artists,
                                      linkClassName: T().artistLink,
                                      artists: null == (e = d.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = d.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [d.available, null == (t = d.meta) ? void 0 : t.artistNames, null == (a = d.meta) ? void 0 : a.artists]),
                        M = (0, s.useMemo)(() => {
                            var e, t, a;
                            return d.isShimmerVisible
                                ? (0, i.jsx)(x.Mo, { isActive: d.isShimmerActive, className: T().header, withDescription: !0 })
                                : (0, i.jsx)(x.Tw, {
                                      className: T().header,
                                      coverUrl: null == (e = d.meta) ? void 0 : e.coverUri,
                                      title: null == (t = d.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: C,
                                      titleClassName: T().headerTitle,
                                      viewAllActionLink: null == (a = d.meta) ? void 0 : a.url,
                                      available: d.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!C,
                                  });
                        }, [
                            d.available,
                            d.isShimmerActive,
                            d.isShimmerVisible,
                            null == (r = d.meta) ? void 0 : r.coverUri,
                            null == (l = d.meta) ? void 0 : l.title,
                            null == (c = d.meta) ? void 0 : c.url,
                            C,
                        ]),
                        H = (0, s.useMemo)(
                            () =>
                                d.tracks.map((e, t) => {
                                    var a;
                                    let r = b({ entityId: e.entityId, from: k });
                                    return (0, i.jsx)(
                                        A,
                                        { type: h.K.Album, track: e, playContextParams: r, tabIndex: u, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [d.tracks, k, u, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: T().root,
                        ref: I,
                        'data-intersection-property-id': S,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, y.$)(T().header, T().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM),
                                children: (0, i.jsx)(_.A, { id: 'music-history.album' }),
                            }),
                            M,
                            (0, i.jsx)('div', { className: T().content, children: H }),
                        ],
                    });
                }),
                H = (0, r.PA)((e) => {
                    var t, a, r;
                    let { artist: l, tabIndex: c, blockIndex: d } = e,
                        { ref: u, intersectionPropertyId: v } = p({ id: l.id, tabIndex: c, blockIndex: d }),
                        { from: g } = (0, m.fyy)({ blockId: 'artist-'.concat(l.id) }),
                        I = (0, s.useMemo)(() => {
                            var e, t, a;
                            return l.isShimmerVisible
                                ? (0, i.jsx)(x.Mo, { isActive: l.isShimmerActive, className: T().header, coverRadius: 'round' })
                                : (0, i.jsx)(x.Tw, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: T().header,
                                      coverUrl: null == (e = l.meta) ? void 0 : e.coverUri,
                                      title: null == (t = l.meta) ? void 0 : t.name,
                                      titleClassName: T().headerTitle,
                                      viewAllActionLink: null == (a = l.meta) ? void 0 : a.url,
                                      available: l.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            l.available,
                            l.isShimmerActive,
                            l.isShimmerVisible,
                            null == (t = l.meta) ? void 0 : t.coverUri,
                            null == (a = l.meta) ? void 0 : a.name,
                            null == (r = l.meta) ? void 0 : r.url,
                        ]),
                        S = (0, s.useMemo)(
                            () =>
                                l.tracks.map((e, t) => {
                                    var a;
                                    let r = b({ entityId: e.entityId, from: g });
                                    return (0, i.jsx)(
                                        A,
                                        { type: h.K.Artist, track: e, playContextParams: r, tabIndex: c, blockIndex: d, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [l.tracks, g, c, d],
                        );
                    return (0, i.jsxs)('section', {
                        className: T().root,
                        ref: u,
                        'data-intersection-property-id': v,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, y.$)(T().header, T().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST),
                                children: (0, i.jsx)(_.A, { id: 'music-history.artist' }),
                            }),
                            I,
                            (0, i.jsx)('div', { className: T().content, children: S }),
                        ],
                    });
                });
            var j = a(83778);
            let L = (0, r.PA)((e) => {
                let { common: t, tabIndex: a, blockIndex: r } = e,
                    { ref: c, intersectionPropertyId: d } = p({ id: t.id, tabIndex: a, blockIndex: r }),
                    { from: u } = (0, m.fyy)(),
                    v = ((e) =>
                        (0, s.useMemo)(
                            () => (e === l.D.SEARCH ? (0, m.tW0)({ contextType: h.K.Various, contextId: '', entityContextType: j.h.MUSIC_HISTORY_SEARCH }) : null),
                            [e],
                        ))(t.type),
                    g = (0, s.useMemo)(
                        () =>
                            t.tracks.map((e, t) => {
                                var s;
                                let n = b({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    A,
                                    { playContextParams: n, type: h.K.Various, track: e, tabIndex: a, blockIndex: r, trackIndex: t },
                                    null == (s = e.data) ? void 0 : s.getKey(t),
                                );
                            }),
                        [t.tracks, u, a, r],
                    ),
                    x = (0, s.useMemo)(() => {
                        switch (t.type) {
                            case l.D.OTHER:
                                return (0, i.jsx)(_.A, { id: 'music-history.shuffle' });
                            case l.D.SEARCH:
                                return (0, i.jsx)(_.A, { id: 'music-history.search' });
                        }
                    }, [t.type]);
                return (0, i.jsx)(m._Fn, {
                    sourceContextData: v,
                    children: (0, i.jsxs)('section', {
                        className: T().root,
                        ref: c,
                        'data-intersection-property-id': d,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, y.$)(T().header, T().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON),
                                children: x,
                            }),
                            (0, i.jsx)('div', { className: T().content, children: g }),
                        ],
                    }),
                });
            });
            var f = a(60900);
            let N = (0, r.PA)((e) => {
                    var t, a, r, l, c;
                    let { playlist: d, tabIndex: u, blockIndex: v } = e,
                        { ref: g, intersectionPropertyId: I } = p({ id: d.id, tabIndex: u, blockIndex: v }),
                        { from: S } = (0, m.fyy)({ blockId: d.isResolved ? 'playlist-'.concat(null == (t = d.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: k } = (0, f.A)(),
                        C = (0, s.useMemo)(() => {
                            var e, t, a, r;
                            return d.isShimmerVisible
                                ? (0, i.jsx)(x.Mo, { isActive: d.isShimmerActive, className: T().header, withDescription: !0 })
                                : (0, i.jsx)(x.Tw, {
                                      className: T().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = d.meta) ? void 0 : e.coverUri,
                                      title: null == (t = d.meta) ? void 0 : t.title,
                                      titleClassName: T().headerTitle,
                                      description: k({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = d.meta) ? void 0 : a.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = d.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            k,
                            d.isShimmerActive,
                            d.isShimmerVisible,
                            null == (a = d.meta) ? void 0 : a.coverUri,
                            null == (r = d.meta) ? void 0 : r.title,
                            null == (l = d.meta) ? void 0 : l.tracksCount,
                            null == (c = d.meta) ? void 0 : c.url,
                        ]),
                        M = (0, s.useMemo)(
                            () =>
                                d.tracks.map((e, t) => {
                                    var a;
                                    let r = b({ entityId: e.entityId, from: S });
                                    return (0, i.jsx)(
                                        A,
                                        { playContextParams: r, type: h.K.Playlist, track: e, tabIndex: u, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [d.tracks, S, u, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: T().root,
                        ref: g,
                        'data-intersection-property-id': I,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, y.$)(T().header, T().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST),
                                children: (0, i.jsx)(_.A, { id: 'music-history.playlist' }),
                            }),
                            C,
                            (0, i.jsx)('div', { className: T().content, children: M }),
                        ],
                    });
                }),
                P = (0, r.PA)((e) => {
                    let { requestAwakeLumenModal: t, vibe: a, blockIndex: r, tabIndex: l } = e,
                        { ref: o, intersectionPropertyId: c } = p({ id: a.id, blockIndex: r, tabIndex: l }),
                        { from: u } = (0, m.fyy)({ blockId: ''.concat(m.UfI.RADIO, '-').concat(m.UfI.Q2V, '-').concat(a.id) }),
                        v = (0, s.useMemo)(
                            () =>
                                a.tracks.map((e, t) => {
                                    var a;
                                    let s = b({ entityId: e.entityId, from: u });
                                    return (0, i.jsx)(
                                        A,
                                        { playContextParams: s, type: h.K.Vibe, track: e, blockIndex: r, tabIndex: l, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [a.tracks, u, l, r],
                        );
                    return a.meta
                        ? (0, i.jsxs)('section', {
                              className: T().root,
                              ref: o,
                              'data-intersection-property-id': c,
                              ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK),
                              children: [
                                  (0, i.jsx)(d.Ks, { className: (0, y.$)(T().queryToVibeHeader, T().heading), requestAwakeLumenModal: t, vibe: a.meta }),
                                  (0, i.jsx)('div', { className: T().content, children: v }),
                              ],
                          })
                        : null;
                });
            var R = a(91027),
                w = a(6752);
            let E = (0, r.PA)((e) => {
                var t, a, r, l, c, u;
                let { vibe: v, blockIndex: g, tabIndex: I } = e,
                    {
                        experiments: S,
                        settings: { isMobile: k },
                    } = (0, m.Pjs)(),
                    { pageId: C } = (0, m.$au)(),
                    { blockIdForFrom: M } = (0, m.N8n)(),
                    H = (0, m.PT7)(),
                    { withPlusPopoverWeb: j } = (0, m.XCI)(),
                    [L, f] = (0, s.useState)(!1),
                    {
                        isPlaying: N,
                        togglePlay: P,
                        isCurrent: E,
                    } = (0, m.B0S)({ seeds: (null == (t = v.meta) ? void 0 : t.seeds) || [m.M19], pageIdForFrom: C, blockIdForFrom: M }),
                    K = (0, s.useId)(),
                    D = S.checkExperiment(m.zal.WebNextVibeDescription, 'on'),
                    { ref: B, intersectionPropertyId: O } = p({ id: v.id, blockIndex: g, tabIndex: I }),
                    { from: V } = (0, m.fyy)({ blockId: 'wave-'.concat(v.id) }),
                    U = (0, R.c)(() => {
                        if (!H()) {
                            if (j) return void f(!0);
                            P();
                        }
                    }),
                    Y = (0, R.c)((e) => {
                        if (k || 2 === e.detail) return void U();
                    }),
                    X = (0, w.L)(() => {
                        var e, t, a, i, r, s, n, l;
                        return D
                            ? {
                                  title: null == (e = v.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = v.meta)
                                          ? void 0
                                          : i.getDescription(null != (l = null == (t = v.meta) ? void 0 : t.title) ? l : null == (a = v.meta) ? void 0 : a.description),
                              }
                            : { title: null != (n = null == (r = v.meta) ? void 0 : r.title) ? n : null == (s = v.meta) ? void 0 : s.description };
                    }),
                    z = (0, s.useCallback)(() => {
                        var e, t, a, r, s;
                        return (null == (e = v.meta) ? void 0 : e.shouldShowAgent) && (null == (t = v.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(d.nr, {
                                  agent: v.meta.agent,
                                  isPlaying: N,
                                  isCurrent: E,
                                  onPlayButtonClick: U,
                                  className: T().vibeCover,
                                  playButtonIconSize: 'm',
                              })
                            : (0, i.jsx)(x.q1, {
                                  isCurrent: E,
                                  isPlaying: N,
                                  isAvailable: !0,
                                  onPlayButtonClick: U,
                                  title: null == (a = v.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (r = v.meta) ? void 0 : r.backgroundColor },
                                  ariaDescribedBy: K,
                                  coverUri: null == (s = v.meta) ? void 0 : s.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: T().vibeCover,
                                  playButtonIconSize: 'm',
                              });
                    }, [
                        U,
                        E,
                        N,
                        K,
                        null == (a = v.meta) ? void 0 : a.agent,
                        null == (r = v.meta) ? void 0 : r.backgroundColor,
                        null == (l = v.meta) ? void 0 : l.imageUrl,
                        null == (c = v.meta) ? void 0 : c.shouldShowAgent,
                        null == (u = v.meta) ? void 0 : u.title,
                    ]),
                    G = (0, w.L)(() => {
                        var e;
                        return v.isShimmerVisible
                            ? (0, i.jsx)(x.Mo, { isActive: v.isShimmerActive, className: T().header, coverRadius: 'round' })
                            : (0, i.jsxs)(x.Cj, {
                                  className: (0, y.$)(T().header, T().vibeHeader),
                                  onClick: Y,
                                  ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER),
                                  children: [
                                      (0, i.jsx)(x.SU, {
                                          isOpened: L,
                                          onOpenChange: f,
                                          isEnabled: j,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = v.meta) ? void 0 : e.stationType,
                                          renderChildren: z,
                                      }),
                                      (0, i.jsx)(x.Tw, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: K, className: T().vibeTextBlock, ...X }),
                                  ],
                              });
                    }),
                    F = (0, s.useMemo)(
                        () =>
                            v.tracks.map((e, t) => {
                                var a;
                                let r = b({ entityId: e.entityId, from: V });
                                return (0, i.jsx)(
                                    A,
                                    { playContextParams: r, type: h.K.Vibe, track: e, blockIndex: g, tabIndex: I, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [v.tracks, V, I, g],
                    );
                return (0, i.jsxs)('section', {
                    className: T().root,
                    ref: B,
                    'data-intersection-property-id': O,
                    ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK),
                    children: [
                        !D &&
                            (0, i.jsx)(o.Heading, {
                                className: (0, y.$)(T().header, T().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE),
                                children: (0, i.jsx)(_.A, { id: 'music-history.my-vibe' }),
                            }),
                        G,
                        (0, i.jsx)('div', { className: T().content, children: F }),
                    ],
                });
            });
            var K = a(84507),
                D = a.n(K);
            let B = (0, r.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: y, ..._ } = e,
                    { lumen: h, musicHistory: g } = (0, m.Pjs)(),
                    { awakeLumenModal: x, requestAwakeLumenModal: b } = (0, c.z1)(),
                    p = (0, d.fp)(),
                    I = (0, s.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case l.D.ALBUM:
                                              return (0, i.jsx)(M, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.PLAYLIST:
                                              return (0, i.jsx)(N, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.WAVE:
                                              return (0, i.jsx)(E, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.ARTIST:
                                              return (0, i.jsx)(H, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.SEARCH:
                                          case l.D.OTHER:
                                              return (0, i.jsx)(L, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.QUERY_TO_VIBE:
                                              return p
                                                  ? (0, i.jsx)(P, { requestAwakeLumenModal: b, vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, p, b]),
                    S = (0, v.useFormatDate)(),
                    k = (0, s.useRef)(null),
                    { observeElement: A } = (0, s.useContext)(u.MusicHistoryIntersectionObserverContext),
                    C = g.datesMap.get(t.date);
                return (
                    (0, s.useEffect)(() => {
                        A({
                            elementId: t.date,
                            elementRef: k,
                            index: 0,
                            onShow: () => {
                                g.setDatesMap(t.date, !0), r();
                            },
                            onHide: () => {
                                g.setDatesMap(t.date, !1), r();
                            },
                        });
                    }, [g, g.datesMap, A, r, t.date]),
                    (0, s.useEffect)(() => {
                        h.isEnabled && h.getData();
                    }, [h]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !C && y,
                        ref: k,
                        'data-intersection-property-id': t.date,
                        className: D().root,
                        ..._,
                        ...{ inert: !!(!C && y) },
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB),
                        children: [
                            x,
                            (0, i.jsx)(o.Heading, {
                                'data-date-anchor': t.date,
                                className: D().date,
                                variant: 'h2',
                                size: 'm',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_DATE),
                                children: S(t.date),
                            }),
                            (0, i.jsx)('div', { className: D().content, children: I }),
                        ],
                    })
                );
            });
        },
        71689: (e, t, a) => {
            'use strict';
            a.d(t, { useFormatDate: () => s });
            var i = a(55178),
                r = a(60900);
            let s = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, r.A)();
                return (0, i.useCallback)(
                    function (a) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(a),
                            s = new Date();
                        r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0);
                        let n = (r.getTime() - s.getTime()) / 864e5,
                            l = t(n, 'day', { numeric: 'auto' }),
                            o = e(a, { day: 'numeric', month: 'long' });
                        switch (n) {
                            case 0:
                            case -1:
                            case -2:
                                if (i) return ''.concat(l, ', ').concat(o);
                                return l;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
        },
        72069: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                queryToVibeHeader: 'MusicHistoryBlock_queryToVibeHeader__iRBjG',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        84507: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        87461: (e) => {
            e.exports = {
                root: 'MusicHistoryPage_root__FYB2m',
                scroll: 'MusicHistoryPage_scroll__ykpDX',
                scrollContainer: 'MusicHistoryPage_scrollContainer__eemvg',
                headerContainer: 'MusicHistoryPage_headerContainer__QG0L3',
                header: 'MusicHistoryPage_header__dzEvD',
                content: 'MusicHistoryPage_content__j4evw',
                footer: 'MusicHistoryPage_footer__Vu7aC',
                empty: 'MusicHistoryPage_empty__fQRHA',
                carousel: 'MusicHistoryPage_carousel__jcl8l',
                tabs: 'MusicHistoryPage_tabs__v_5Zg',
                tab: 'MusicHistoryPage_tab__WDE1e',
                tab_isLoading: 'MusicHistoryPage_tab_isLoading__nNqd2',
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        91931: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => C });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(39407),
                o = a(59824),
                c = a(46049),
                d = a(15299),
                m = a(71926),
                u = a(29277),
                v = a(32381),
                y = a(49574),
                _ = a(44574),
                h = a(42406);
            let g = (e) => {
                    let { children: t } = e,
                        a = (0, n.useRef)({}),
                        r = (0, n.useMemo)(
                            () =>
                                (0, h.Gv)((e) => {
                                    var t, i;
                                    let r = (0, h.L5)(e.target),
                                        s = a.current[r];
                                    e.isIntersecting ? null == s || null == (t = s.onShow) || t.call(s) : null == s || null == (i = s.onHide) || i.call(s);
                                }),
                            [],
                        );
                    (0, n.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let s = (0, n.useCallback)(
                            (e) => {
                                !a.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (a.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        l = (0, n.useCallback)(
                            (e) => {
                                let t = a.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, n.useMemo)(() => ({ observeElement: s, unobserveElement: l }), [s, l]);
                    return (0, i.jsx)(u.cY.Provider, { value: o, children: t });
                },
                x = async (e, t) =>
                    new Promise((a) => {
                        if ('onscrollend' in window) {
                            var i;
                            let r = () => {
                                var e;
                                a(), null == (e = t.current) || e.removeEventListener('scrollend', r);
                            };
                            null == (i = t.current) || i.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' });
                        } else e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(a, 1e3);
                    });
            var b = a(87461),
                p = a.n(b),
                I = a(79856),
                S = a(6676),
                k = a.n(S);
            let A = (e) => {
                    let { isActive: t } = e,
                        a = (0, i.jsxs)('div', {
                            className: k().trackListShimmers,
                            children: [
                                (0, i.jsx)(_.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                                (0, i.jsx)(_.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                                (0, i.jsx)(_.DS, { isActive: t, variant: y.Xjt.PLAYLIST }),
                            ],
                        });
                    return (0, i.jsxs)('div', {
                        className: k().shimmersContainer,
                        children: [
                            (0, i.jsx)(I.Shimmer, { isActive: t, className: k().dateShimmer }),
                            (0, i.jsx)(I.Shimmer, { isActive: t, className: k().contextNameShimmer }),
                            (0, i.jsx)(_.Mo, { withDescription: !0, className: k().contextHeaderShimmer }),
                            a,
                            (0, i.jsx)(I.Shimmer, { isActive: t, className: k().contextNameShimmer }),
                            (0, i.jsx)(_.Mo, { coverRadius: 'round', className: k().contextHeaderShimmer }),
                            a,
                        ],
                    });
                },
                C = (0, s.PA)(() => {
                    let [e, t] = (0, n.useState)(!1),
                        { musicHistory: a } = (0, y.Pjs)(),
                        { contentScrollRef: s, setContentScrollRef: h } = (0, y.gKY)(),
                        b = (0, d.useTabsState)(0),
                        I = (0, n.useRef)(!1),
                        S = (0, n.useRef)(null),
                        k = (0, n.useCallback)(
                            async (e) => {
                                var i;
                                t(!0);
                                let r = a.dates[e];
                                if (!r) return;
                                null == (i = b.onTabChange) || i.call(b, e), (I.current = !0);
                                let n = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                                n && ((S.current = s), await x(n, S)), (I.current = !1);
                            },
                            [a.dates, b, s],
                        ),
                        C = (0, n.useCallback)(() => {
                            if (I.current) return;
                            let e = a.dates.findIndex((e) => a.datesMap.get(e));
                            if (e >= 0) {
                                var t;
                                null == (t = b.onTabChange) || t.call(b, e);
                            }
                        }, [a.dates, a.datesMap, b]);
                    (0, n.useEffect)(() => () => a.reset(), [a]), (0, y.Jzs)(a.isResolved);
                    let T = (0, n.useMemo)(() => {
                            var t;
                            return a.isRejected
                                ? (0, i.jsx)(v.w, { className: (0, r.$)(p().error, p().important), withBackwardControl: !1 })
                                : a.isShimmerVisible
                                  ? (0, i.jsx)(A, { isActive: a.isShimmerActive })
                                  : a.isEmpty
                                    ? (0, i.jsx)('div', {
                                          className: p().empty,
                                          children: (0, i.jsx)(m.Caption, {
                                              variant: 'div',
                                              size: 'm',
                                              weight: 'normal',
                                              children: (0, i.jsx)(l.A, { id: 'music-history.empty-title' }),
                                          }),
                                      })
                                    : null == (t = a.tabs)
                                      ? void 0
                                      : t.map((t, a) =>
                                            (0, i.jsx)(
                                                u.ln,
                                                { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e },
                                                a,
                                            ),
                                        );
                        }, [C, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                        M = (0, u.lT)(),
                        H = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)(_.wI, {
                                    isShimmerVisible: a.isShimmerVisible,
                                    className: p().tabs,
                                    ...b,
                                    onTabChange: k,
                                    shimmer: (0, i.jsx)(_.zr, {
                                        className: p().tabs,
                                        shimmerClassName: (0, r.$)(p().tab, { [p().tab_isLoading]: a.isShimmerVisible }),
                                        count: 5,
                                    }),
                                    children: a.dates.map((e, t) =>
                                        (0, i.jsx)(
                                            _.oz,
                                            {
                                                className: (0, r.$)(p().tab, { [p().tab_selected]: t === b.value }),
                                                titleClassName: p().date,
                                                'aria-label': M(e, !1),
                                                title: M(e, !1),
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [M, k, a.dates, a.isShimmerVisible, b],
                        );
                    return (
                        a.isNeededToLoad && (0, n.use)(a.getMusicHistory()),
                        (0, i.jsx)(y.nVz, {
                            pageId: y._Q$.HISTORY,
                            children: (0, i.jsxs)('div', {
                                className: p().root,
                                ...(0, o.Am)(o.Xk.musicHistory.MUSIC_HISTORY_PAGE),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: p().headerContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: p().header,
                                                children: [
                                                    (0, i.jsx)(_.Lh, { withForwardControl: !1 }),
                                                    (0, i.jsx)(m.Heading, {
                                                        variant: 'h1',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: (0, i.jsx)(l.A, { id: 'music-history.title' }),
                                                    }),
                                                ],
                                            }),
                                            (0, i.jsx)(_.FY, { className: p().carousel, carouselElement: H }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.N, {
                                        ref: h,
                                        className: p().scroll,
                                        containerClassName: p().scrollContainer,
                                        children: [
                                            (0, i.jsx)(g, { children: (0, i.jsx)('div', { className: p().content, children: T }) }),
                                            (0, i.jsx)(_.A, { children: (0, i.jsx)(_.wi, { className: p().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
    },
]);
