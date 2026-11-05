(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(2058),
                r = i(61691);
            let n = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var a = i(72288),
                r = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, a.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var a = i(61691),
                r = i(15077);
            let n = (e) => {
                switch (e) {
                    case a._.PODCAST:
                        return r.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        7227: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var a = i(5120),
                r = i(93512);
            let n = (e, t) => {
                var i;
                return (0, a.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: null != (i = e.type) ? i : void 0, agent: (0, r.K)(t) });
            };
        },
        8824: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageStoreProvider: () => F });
            var a = i(34961),
                r = i(53892),
                n = i(5120),
                s = i(99711),
                l = i(12622);
            let o = (e) => {
                var t, i, a, r;
                let { wave: s, agent: o } = e;
                return (0, n.wg)({
                    ...(0, l.e)({
                        title: s.name,
                        header: s.description,
                        seeds: s.seeds,
                        stationId: null != (r = null != (a = s.stationId) ? a : s.seeds[0]) ? r : '',
                        type: s.type,
                        agent: o,
                        imageUrl: null == o || null == (t = o.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == o || null == (i = o.cover) ? void 0 : i.color,
                });
            };
            var c = i(52643),
                d = i(74773),
                u = i(76626);
            let m = (e) => {
                    let { albumId: t, trackId: i } = e.data.itemId;
                    return t ? ''.concat(i, ':').concat(t) : i;
                },
                _ = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, n.wg)({ type: s.D.TRACK, id: m(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, n.wg)({ type: s.D.TRACK, id: m(e), data: null, loadingState: d.G.IDLE });
                };
            var p = i(14283),
                v = i(54020);
            let g = (e) => e.data.itemId.seeds.sort().join(',');
            var f = i(73245);
            let y = (e) => {
                let { uid: t, kind: i } = e.data.itemId;
                return ''.concat(t, ':').concat(i);
            };
            var h = i(7227);
            let x = (e) => e.data.itemId.seeds.sort().join(','),
                b = (e) => e.data.itemId.seeds.sort().join(','),
                C = (e) => {
                    var t, i;
                    let a =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case s.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, n.wg)({
                                                          type: s.D.ALBUM,
                                                          available: a.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: a.album, artists: a.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({
                                                      type: s.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case s.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          id: y(e),
                                                          meta: { ...(0, f.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: s.D.PLAYLIST, id: y(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case s.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, p.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({
                                                      type: a,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case s.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          id: b(e),
                                                          meta: {
                                                              ...(0, l.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: a, id: b(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case s.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  return 'fullModel' in i
                                                      ? (0, n.wg)({
                                                            type: s.D.MULTIVIBE_WAVE,
                                                            id: g(e),
                                                            meta: o(i.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(_),
                                                        })
                                                      : (0, n.wg)({ type: s.D.MULTIVIBE_WAVE, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case s.D.SEARCH:
                                          case s.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: i } = e;
                                                  return (0, n.wg)({ type: i, id: (0, v.A)(), tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case s.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, n.wg)({
                                                          type: s.D.QUERY_TO_VIBE,
                                                          id: x(e),
                                                          meta: { ...(0, h.l)(a.wave, a.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: s.D.QUERY_TO_VIBE, id: x(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (i = (0, n.wg)(a)) ? i : null };
                },
                A = (e) => (null == e ? void 0 : e.type) === s.D.WAVE || (null == e ? void 0 : e.type) === s.D.MULTIVIBE_WAVE;
            var k = i(59497);
            let I = n.gK.compose(
                n.gK.model({
                    id: n.gK.string,
                    type: n.gK.enumeration(Object.values(s.D)),
                    tabIndex: n.gK.number,
                    blockIndex: n.gK.number,
                    trackIndex: n.gK.maybeNull(n.gK.number),
                }),
                k.X,
            );
            var S = i(49573),
                T = i(7123);
            let E = (e) => ({ type: T.z4.Unloaded, meta: { id: e.entityId } });
            var j = i(96826);
            let L = n.gK
                    .compose(n.gK.model('MusicHistoryTrack', { type: n.gK.literal(s.D.TRACK), id: n.gK.string, data: n.gK.maybeNull(j.v) }), k.X)
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
                            let { id: i, albums: a } = e.data,
                                r = null == (t = a[0]) ? void 0 : t.id;
                            return r ? ''.concat(i, ':').concat(r) : i;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                N = n.gK.compose(n.gK.model('MusicHistoryBaseBlock', { id: n.gK.string, tracks: n.gK.array(L) }), k.X).views((e) => ({
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
                        return e.tracks.map(E);
                    },
                })),
                R = N.props({ type: n.gK.literal(s.D.ALBUM), available: n.gK.boolean, meta: n.gK.maybeNull(S.J) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum');
            var O = i(90544);
            let P = N.props({ type: n.gK.literal(s.D.ARTIST), available: n.gK.boolean, meta: n.gK.maybeNull(O.P) })
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
                M = n.gK
                    .model('MusicHistoryCommon', { id: n.gK.string, type: n.gK.union(n.gK.literal(s.D.OTHER), n.gK.literal(s.D.SEARCH)), tracks: n.gK.array(L) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(E);
                        },
                    }));
            var w = i(78460);
            let D = N.props({ type: n.gK.literal(s.D.PLAYLIST), meta: n.gK.maybeNull(w.I) })
                .views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get autoflowSeeds() {
                        var t, i;
                        return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (i = e.meta) ? void 0 : i.kind)];
                    },
                }))
                .named('MusicHistoryPlaylist');
            var B = i(41814),
                K = i(90420);
            let H = N.props({
                    id: n.gK.string,
                    type: n.gK.union(n.gK.literal(s.D.WAVE), n.gK.literal(s.D.MULTIVIBE_WAVE), n.gK.literal(s.D.QUERY_TO_VIBE)),
                    meta: n.gK.maybeNull(B.G),
                }).views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get contextId() {
                        var t, i;
                        return null != (i = null == (t = e.meta) ? void 0 : t.stationId) ? i : K.M1;
                    },
                    get autoflowSeeds() {
                        var a;
                        return null == (a = e.meta) ? void 0 : a.seeds;
                    },
                    get isMultivibe() {
                        return e.type === s.D.MULTIVIBE_WAVE;
                    },
                })),
                U = n.gK.union(R, P, D, H, M),
                V = n.gK.model('MusicHistoryTab', { date: n.gK.string, blocks: n.gK.maybeNull(n.gK.array(U)) }),
                Y = n.gK
                    .compose(
                        n.gK.model('MusicHistoryPage', {
                            indexesMap: n.gK.map(n.gK.number),
                            items: n.gK.maybeNull(n.gK.array(I)),
                            datesMap: n.gK.map(n.gK.boolean),
                            tabs: n.gK.maybeNull(n.gK.array(V)),
                        }),
                        k.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var i;
                                return (e.isResolved || e.isRejected) && (null == (i = e.tabs) ? void 0 : i.length) === 0;
                            },
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            getStartAndEndIndexes(t) {
                                var i, a;
                                let r = t,
                                    n = t + 1;
                                return (
                                    (null == (i = e.items) ? void 0 : i.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (a = e.items) ? void 0 : a.slice(t, t + 25).some((e) => !e.isResolved)) && (n = t + 25),
                                    [r, n]
                                );
                            },
                            getItemsToLoad(i) {
                                var a, r;
                                let [n, s] = t.getStartAndEndIndexes(i);
                                return null != (r = null == (a = e.items) ? void 0 : a.slice(n, s).filter((e) => !e.isResolved)) ? r : [];
                            },
                            isInObservationRange(t) {
                                var i;
                                return (0 !== t && t % 25 == 0) || (e.items && t === (null == (i = e.items) ? void 0 : i.length) - 1);
                            },
                            get dates() {
                                var a, r;
                                return null != (r = null == (a = e.tabs) ? void 0 : a.map((e) => e.date)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            fillItemsAndIndexes() {
                                var t;
                                let i = 0;
                                ((e.items = (0, n.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, a) => {
                                            var r;
                                            (e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var n;
                                                        let s = t.id;
                                                        (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(s), i),
                                                            null == (n = e.items) ||
                                                                n.push({
                                                                    id: s,
                                                                    type: t.type,
                                                                    tabIndex: a,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++i,
                                                            t.tracks.forEach((t, n) => {
                                                                var s;
                                                                (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(n, '_').concat(t.id), i),
                                                                    null == (s = e.items) ||
                                                                        s.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: a,
                                                                            blockIndex: r,
                                                                            trackIndex: n,
                                                                            loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++i);
                                                            }));
                                                    }));
                                        }));
                            },
                            setTrack(t, i) {
                                var a, r, n, s;
                                let { tabIndex: l, blockIndex: o, trackIndex: c } = t,
                                    { fullModel: m } = i.data;
                                if (null === c) return;
                                let _ = null == (s = e.tabs) || null == (n = s[l]) || null == (r = n.blocks) || null == (a = r[o]) ? void 0 : a.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, i) {
                                var a, r, n;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: u } = i.data,
                                    m = null == (n = e.tabs) || null == (r = n[l]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == m ? void 0 : m.type) === s.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, i) {
                                var a, r, n;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[l]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == u ? void 0 : u.type) === s.D.ARTIST && ((u.meta = (0, p.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, i) {
                                var a, r, n;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[l]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == u ? void 0 : u.type) === s.D.PLAYLIST &&
                                    ((u.meta = { ...(0, f.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[o];
                                A(u) &&
                                    ((u.meta = { ...(0, l.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[l];
                                A(u) && ((u.meta = o(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, n.L3)(function* () {
                                let { musicHistoryResource: i, modelActionsLogger: a } = (0, n._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let a = yield i.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    i = 0;
                                                for (let n of e.historyTabs) {
                                                    var a, r;
                                                    if (i > 1e3) break;
                                                    let e = { ...n, items: [] };
                                                    for (let t of null != (a = n.items) ? a : []) {
                                                        if (i > 1e3) break;
                                                        let a = { ...t, tracks: [] };
                                                        for (let e of t.tracks) {
                                                            if (i > 1e3) break;
                                                            (a.tracks.push(e), ++i);
                                                        }
                                                        null == (r = e.items) || r.push(a);
                                                    }
                                                    e.items && e.items.length > 0 && t.historyTabs.push(e);
                                                }
                                                return t;
                                            })(a);
                                        ((e.tabs = (0, n.wg)(r.historyTabs.map(C))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), (e.loadingState = d.G.REJECT));
                                    }
                            }),
                            getItems: (0, n.L3)(function* (i) {
                                let { musicHistoryResource: a, modelActionsLogger: r } = (0, n._$)(e);
                                try {
                                    let r = e.getItemsToLoad(i);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let n = yield a.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case s.D.ARTIST:
                                                        case s.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case s.D.PLAYLIST: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(i) } } };
                                                        }
                                                        case s.D.WAVE:
                                                        case s.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case s.D.TRACK: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: i } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        l = r.reduce((e, t) => {
                                            let i = ''.concat(t.type, '_').concat(t.id);
                                            if (i in e) {
                                                var a;
                                                null == (a = e[i]) || a.push(t);
                                            } else e[i] = [t];
                                            return e;
                                        }, {});
                                    n.items.forEach((e) => {
                                        var i;
                                        null ==
                                            (i =
                                                l[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case s.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case s.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(m(e));
                                                            case s.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(b(e));
                                                            case s.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case s.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(y(e));
                                                            case s.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case s.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(x(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            i.forEach((i) => {
                                                switch (e.type) {
                                                    case s.D.ALBUM:
                                                        t.setAlbum(i, e);
                                                        break;
                                                    case s.D.TRACK:
                                                        t.setTrack(i, e);
                                                        break;
                                                    case s.D.WAVE:
                                                        t.setVibe(i, e);
                                                        break;
                                                    case s.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(i, e);
                                                        break;
                                                    case s.D.PLAYLIST:
                                                        t.setPlaylist(i, e);
                                                        break;
                                                    case s.D.ARTIST:
                                                        t.setArtist(i, e);
                                                }
                                                i.loadingState = d.G.RESOLVE;
                                            });
                                    });
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            setDatesMap(t, i) {
                                e.datesMap.set(t, i);
                            },
                            reset() {
                                ((e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = d.G.IDLE));
                            },
                        };
                        return t;
                    }),
                z = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: W } = (0, a.W)({ createStore: (e) => Y.create(z, e), patchKey: r.n.MUSIC_HISTORY }),
                F = W;
        },
        8840: (e, t, i) => {
            'use strict';
            i.d(t, { BL: () => d, Gv: () => o, L5: () => c });
            var a,
                r = i(53548),
                n = {
                    597: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let a = i(810),
                            { innerWidth: r = 0, innerHeight: n = 0 } = window;
                        function s(e) {
                            let { top: t, right: i, bottom: a, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (a >= 0 && a <= n)) && ((s >= 0 && s <= r) || (i >= 0 && i <= r));
                        }
                        function l(e) {
                            var t, i;
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (i = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, a)) ? i : e.attributes[0];
                        }
                        function o(e, t) {
                            let i = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, i);
                                });
                            }, t);
                            return i;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, i, r) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof i || void 0 === i ? [t.defaultOptions, i] : [{ ...t.defaultOptions, ...i }, r],
                                    [m, _] = (0, a.useState)({}),
                                    p = (0, a.useRef)(new Set()),
                                    v = (0, a.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && v) {
                                                          if (p.current.has(t)) return;
                                                          (_((i) => ({ ...i, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (p.current.add(t), v.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, a.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = s(e.current))) {
                                                            let t = l(e.current);
                                                            _((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || v.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                v && v.disconnect();
                                            }
                                        ),
                                        [u, v, e.length],
                                    ),
                                    m
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {},
                l = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var a = (s[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(597);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var c = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var d = l.useIntersectionObserver;
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        12622: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => n });
            var a = i(5120),
                r = i(93512);
            let n = (e) => {
                var t, i, n, s;
                return (0, a.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (n = null == (t = e.colors) ? void 0 : t.average) ? n : '',
                        waveText: null != (s = null == (i = e.colors) ? void 0 : i.waveText) ? s : '',
                    },
                    agent: (0, r.K)(e.agent),
                    type: e.type,
                });
            };
        },
        12906: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var a = i(5120),
                r = i(57285);
            let n = (e) => {
                let t = (0, r.n)(e);
                return (0, a.wg)(t);
            };
        },
        13607: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(a || (a = {})));
        },
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var a = i(88800),
                r = i(65724),
                n = i(52300),
                s = i(30907),
                l = i.n(s);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => V });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                m = i(35994);
            let _ = (e, t) => {
                let { withLink: i, separator: a } = t,
                    r = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: a, link: r };
            };
            var p = i(21010),
                v = i.n(p),
                g = i(17392),
                f = i(29504),
                y = i(91292),
                h = i(2058),
                x = i(87999),
                b = i(80643),
                C = i(78940),
                A = i(55693),
                k = i(58217);
            let I = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: n = 'm', allArtistsTitle: s, withCustomTooltip: l, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: v,
                            tooltipText: I,
                            isTooltipEnabled: S,
                            handleNavigate: T,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: r, withCustomTooltip: n } = e,
                                { formatMessage: s } = (0, h.A)(),
                                l = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: r } = e,
                                        n = a || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : n,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: n,
                                        isTooltipEnabled: !a && r,
                                    };
                                })({ item: a, allArtistsTitle: r, withCustomTooltip: n }, s),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, C.Z)(null != (i = null == (t = l.link) ? void 0 : t.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                p = (0, b.S)(),
                                v = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: r, fullscreenVideoPlayer: n } = (0, u.g)(),
                                        { modal: s } = a;
                                    return (0, k.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), s.isOpened && (a.reset(), s.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            n.modal.isOpened && (n.modal.close(), n.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: v }),
                                f = (0, d.c)((e) => {
                                    (p({ to: x.AppScreen.ArtistScreen }), null == _ || _(), g(e));
                                });
                            return { ...l, handleNavigate: f };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: l });
                    return _
                        ? (0, a.jsx)(y.N, {
                              ..._,
                              'aria-label': v,
                              className: i,
                              onClick: T,
                              title: p,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(o.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: I,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(f.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, a.jsx)(o.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: I,
                              hoverSettings: c,
                              children: (0, a.jsx)(f.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: n, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(I, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: n,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(I, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: n,
                                                allArtistsTitle: l,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var T = i(88969),
                E = i(65453);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(v().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(61013),
                N = i(87819),
                R = i(40634),
                O = i(48468),
                P = i.n(O);
            let M = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(o.ZI, { className: P().tooltipContent, children: i.map((e) => (0, a.jsx)(R.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, s.forwardRef)((e, t) => (0, a.jsx)(M, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                K = i.n(B);
            let H = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, h.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(K().root, K().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [n, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, l.L)(() =>
                            (0, L.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, s.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(H, { artists: t, label: i }) : (0, a.jsx)(w, { artists: t, label: i })) : i;
                }),
                V = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: n,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: g,
                            variant: f = 'breakAll',
                            spoilerComponent: y,
                            ...h
                        } = e,
                        x = ((e) => {
                            var t, i, a;
                            let { separator: r, visibleArtistsCount: n, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                v = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (a = e.withCustomTooltip) || a,
                                f = (0, s.useRef)(null),
                                [y, h] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, u.g)(),
                                b = ((!x || 1 === p.length) && m) || !m,
                                C = ((e, t) => {
                                    var i, a, r;
                                    let n = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (a = null == t ? void 0 : t.withLink) || a,
                                        l = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: n, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: r, isFirst: n } = t;
                                                return {
                                                    primary: _(e, { withLink: a, separator: n ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: y ? void 0 : n, withComposer: o, withLink: !!b && l, artistIdWithoutLink: c }),
                                A = v ? C.allArtistsTitle : '',
                                k = (0, d.c)((e) => {
                                    (h(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: g,
                                withContextMenu: m,
                                labelRef: f,
                                handleOnSpoilerClick: k,
                                isTooltipEnabled: !!A && g && !m && !x,
                                title: !A || g || m ? void 0 : A,
                            };
                        })(h),
                        b = (0, l.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(y)
                                  ? y
                                  : (0, a.jsx)(j, { spoilerClassName: n, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        C = (0, a.jsx)(o.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(v().root, v()['root_variant_'.concat(f)], { [v().root_clamp]: i && i > 0, [v().ellipsis]: !i }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, a.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: g,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, a.jsx)(U, { labelRef: x.labelRef, artists: x.artists, label: C }) : C;
                });
        },
        14283: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => l });
            var a = i(5120),
                r = i(51724),
                n = i(12906),
                s = i(53399);
            let l = (e) => {
                var t, i;
                let { artist: l, trailer: o, isComposer: c, likesCount: d } = e,
                    u = (0, s.m)(l.decomposed),
                    { available: m, disclaimers: _ } = (0, r.f)(l);
                return (0, a.wg)({
                    id: String(l.id),
                    name: l.name,
                    coverUri: null == (t = l.cover) ? void 0 : t.uri,
                    various: l.various,
                    decomposed: u,
                    isAvailable: m,
                    disclaimers: _,
                    isComposer: c,
                    averageColor: null == (i = l.cover) ? void 0 : i.color,
                    trailer: (0, n.m)(o),
                    likesCount: d,
                });
            };
        },
        14347: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => v });
            var a = i(88800),
                r = i(84961),
                n = i(53548),
                s = i(17392),
                l = i(39079),
                o = i(98644),
                c = i(73805),
                d = i(15232),
                u = i(99479),
                m = i(56712),
                _ = i(33133),
                p = i.n(_);
            let v = (0, r.PA)((e) => {
                let { track: t, albumArtists: i, position: r, playContextParams: _, withLightning: v } = e,
                    g = (0, l.D)({ playContextParams: _, entityId: t.entityId }),
                    f = (0, n.useCallback)((e) => (0, a.jsx)(u.G, { track: t, position: r, className: p().playButtonCell, ...e }), [t, r]);
                return (0, a.jsx)(m.C, {
                    track: t,
                    withLightning: v,
                    meta: (0, a.jsx)(d.j, { variant: o.X.ALBUM, albumArtists: i, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: f,
                    controls: (0, a.jsx)(c.Q, { withLightning: v, track: t, className: p().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...g,
                    'data-test-id': s.Kq.track.TRACK_ALBUM,
                });
            });
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var a = i(42824),
                r = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = a.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.MainPageEntryPointPlayedAnimations = 'mainPageEntryPointPlayedAnimations'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { T: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(42078);
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(a._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(88800),
                r = i(53548),
                n = i(17392),
                s = i(29504),
                l = i(15526),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, a.jsx)(
                            s.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        18486: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => h });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                s = i(87999),
                l = i(49784),
                o = i(80643),
                c = i(17392),
                d = i(52300),
                u = i(90688),
                m = i(7555),
                _ = i(19994),
                p = i(29504),
                v = i(91292),
                g = i(16782),
                f = i.n(g);
            let y = (e) => {
                    let {
                        className: t,
                        coverUrl: i,
                        labeledForId: g,
                        subTitle: y,
                        title: h,
                        description: x,
                        viewAllActionLink: b,
                        controls: C,
                        titleSize: A = 'm',
                        coverBackgroundColor: k,
                        coverRadius: I = 's',
                        titleClassName: S,
                        titleLineClamp: T,
                        fallbackIconVariant: E,
                        available: j = !0,
                        onViewAllAction: L,
                        titleChildren: N,
                        children: R,
                        headingRef: O,
                        coverContainerClassName: P,
                        headingVariant: M = 'h3',
                        withDescriptionWidthLimit: w = !0,
                        isShimmerVisible: D,
                        isShimmerActive: B,
                        withCover: K,
                        withDescription: H,
                        forwardRef: U,
                        shimmerCoverClassName: V,
                        shouldSendAnalyticsOnLoaded: Y,
                        ...z
                    } = e;
                    (0, l.W)({ enabled: !!Y });
                    let W = (0, n.useRef)(null),
                        F = i || K,
                        G = x || H,
                        X = (0, n.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        $ = (0, o.S)(),
                        q = (0, n.useCallback)(() => {
                            L ? L() : $({ to: s.AppScreen.Link });
                        }, [$, L]),
                        Q = (0, n.useMemo)(
                            () =>
                                h && b && j
                                    ? (0, a.jsxs)(v.N, {
                                          className: f().title,
                                          containerClassName: f().linkContainer,
                                          textClassName: f().linkText,
                                          icon: (0, a.jsx)(d.I, { className: f().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(p.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(f().heading, S),
                                                  variant: M,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: O,
                                                  children: h,
                                              }),
                                              N,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: f().title,
                                          children: [
                                              (0, a.jsx)(p.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(f().heading, S, { [f().heading_notAvailable]: !j }),
                                                  variant: M,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: T,
                                                  ref: O,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: h,
                                              }),
                                              N,
                                          ],
                                      }),
                            [j, q, O, M, g, h, S, T, A, b, N],
                        ),
                        Z = (0, n.useMemo)(() => (H && D ? (0, a.jsx)(_.W, { isActive: B, className: f().shimmerDescription }) : x), [H, D, x, B]),
                        J = (0, n.useMemo)(
                            () =>
                                K && D
                                    ? (0, a.jsx)(_.W, { isActive: B, className: (0, r.$)(f().shimmerCover, V), radius: 's' })
                                    : (0, a.jsx)(u._V, {
                                          src: i,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: k },
                                          className: f().cover,
                                          ref: W,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [k, i, E, X, B, D, V, K],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(f().root, t),
                        ref: U,
                        ...z,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: f().start,
                                children: [
                                    F && (0, a.jsx)(m.t, { radius: I, className: (0, r.$)(f().coverContainer, P), children: J }),
                                    (0, a.jsxs)('div', {
                                        className: f().textContainer,
                                        children: [
                                            y,
                                            Q,
                                            G &&
                                                (0, a.jsx)(p.HL, {
                                                    id: ''.concat(g, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: w ? 2 : void 0,
                                                    className: (0, r.$)(f().description, { [f().description_widthLimit]: w }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            C || R,
                        ],
                    });
                },
                h = (0, n.forwardRef)((e, t) => (0, a.jsx)(y, { forwardRef: t, ...e }));
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => l });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = a(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: a = 'm', width: l, height: o, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== l && (u.width = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                void 0 !== o && (u.height = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, n.clsx)(s.default.root, s.default['root_radius_'.concat(a)], { [s.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...d,
                                    style: u,
                                    children: c,
                                })
                            );
                        };
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, 'X', { value: !0 }), (s.q = void 0));
                var e = n(7141);
                Object.defineProperty(s, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var l = s.q;
            s.X;
        },
        20562: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageSuspenseLoader: () => v });
            var a = i(88800),
                r = i(88969),
                n = i(66719),
                s = i(29504),
                l = i(94058),
                o = i(86790),
                c = i(60266),
                d = i(56248),
                u = i(76099),
                m = i(82007),
                _ = i.n(m),
                p = i(65600);
            let v = () =>
                (0, a.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, a.jsxs)('div', {
                            className: _().headerContainer,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: _().header,
                                    children: [
                                        (0, a.jsx)(d.L, { withForwardControl: !1 }),
                                        (0, a.jsx)(s.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(l.F, {
                                    className: _().carousel,
                                    carouselElement: (0, a.jsx)(u.zr, { isActive: !0, className: _().tabs, shimmerClassName: _().tab, count: 5 }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(n.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, a.jsx)('div', { className: _().content, children: (0, a.jsx)(p.v, { isActive: !0 }) }),
                                (0, a.jsx)(c.A, { children: (0, a.jsx)(o.w, { className: _().footer }) }),
                            ],
                        }),
                    ],
                });
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        22983: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { y: () => a }),
                (function (e) {
                    ((e.MIX = 'MIX'), (e.Q2V = 'Q2V'));
                })(a || (a = {})));
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var a = i(88800),
                r = i(84961),
                n = i(53548),
                s = i(88969),
                l = i(17392),
                o = i(52300),
                c = i(19934),
                d = i(72288);
            let u = (0, r.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: r, className: u, iconClassName: m } = e,
                    { user: _ } = (0, d.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? l.S7.CONTEXT_MENU_UNPIN_BUTTON : l.S7.CONTEXT_MENU_PIN_BUTTON,
                    g = (0, n.useMemo)(() => (t ? (0, a.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(c.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, a.jsx)(o.I, { className: m, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: r || !_.isAuthorized,
                    children: g,
                });
            });
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => d, hg: () => c });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(8532),
                            l = a(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: a,
                                    menuControl: o,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: m = 'default',
                                    bottomContainerClassName: _,
                                    labelText: p,
                                } = e,
                                v = d || i,
                                g = o || a;
                            return (0, r.jsxs)('div', {
                                className: (0, n.clsx)(
                                    l.default.root,
                                    l.default.controls,
                                    { [l.default.controls_visible]: u },
                                    l.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: l.default.top, children: c }),
                                    (0, r.jsxs)('div', {
                                        className: (0, n.clsx)(l.default.bottom, _),
                                        children: [
                                            v && (0, r.jsxs)('div', { className: l.default.bottom_left, children: [d, i] }),
                                            g && (0, r.jsxs)('div', { className: l.default.bottom_right, children: [o, a] }),
                                        ],
                                    }),
                                    !!p && (0, r.jsx)(s.Label, { className: l.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let r = i(4377),
                            n = i(810),
                            s = i(5881),
                            l = i(8903),
                            o = i(6530),
                            c = a(i(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: a,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: m,
                                    explicitMarkComponent: _,
                                    chart: p,
                                    children: v,
                                    srTitle: g,
                                    wrapperClassName: f,
                                    ...y
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, s.clsx)(c.default.root, a),
                                    ref: t,
                                    ...y,
                                    children: [
                                        (0, r.jsx)(o.SROnly, { children: null != g ? g : u }),
                                        (0, r.jsx)('div', { className: c.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, s.clsx)(c.default.wrapper, f),
                                            children: [
                                                p,
                                                (0, r.jsxs)('div', {
                                                    className: (0, s.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, r.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, r.jsx)(l.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        m,
                                                        v,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(8903),
                            l = a(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: a = 's', ...o } = e;
                            return (0, r.jsx)(s.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, n.clsx)(l.default.root, i),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var a = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return a.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(810),
                            l = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...o } = e,
                                c = (0, n.clsx)(l.default.root, { [l.default.focusable]: i }, t);
                            return (0, s.isValidElement)(a)
                                ? (0, s.cloneElement)(a, { ...o, className: (0, n.clsx)(c, a.props.className) })
                                : (0, r.jsx)('span', { className: c, ...o, children: a });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var a = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return a.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(810),
                            l = i(5987),
                            o = a(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: a = 'text', size: s = 's', className: c, children: d, weight: u = 'medium', ...m } = e;
                            return (0, r.jsx)(l.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_'.concat(a, '_').concat(s)], o.default['root_weight_'.concat(u)], c),
                                ...m,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, s.forwardRef)((e, i) => (0, r.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(810),
                            l = i(5987),
                            o = a(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: a = 'bold', size: s = 's', className: c, children: d, ...u } = e;
                            return (0, r.jsx)(l.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_size_'.concat(s)], o.default['root_weight_'.concat(a)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, s.forwardRef)((e, i) => (0, r.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            s = i(810),
                            l = a(i(61));
                        function o(e) {
                            let { forwardRef: t, style: i, className: a, children: s, variant: o, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof s ? s : void 0;
                            return (0, r.jsx)(o, {
                                style: { ...i, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    l.default.root,
                                    { [l.default.root_clamp]: c && c > 0, [l.default.root_clamp_oneline]: c && 1 === c, [l.default.root_clamp_multiline]: c && c > 1 },
                                    a,
                                ),
                                ...d,
                                children: s,
                            });
                        }
                        ((t.TypographyComponent = o), (t.Typography = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
                            },
                        });
                        var r = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, l), i.exports);
            }
            ((l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0));
                var e = l(7093);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = l(7742);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = o.kk,
                d = o.m7;
            o.X$;
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31764: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                s = i(17392),
                l = i(88021),
                o = i(96817),
                c = i(52300),
                d = i(89544),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: p = 'xxxs',
                        buttonVariant: v = 'outline',
                    } = e,
                    { swipeBackward: g, swipeForward: f, shouldBackwardButtonBeDisabled: y, shouldForwardButtonBeDisabled: h, shouldHideControls: x } = (0, l.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            (g(), e.stopPropagation());
                        },
                        [g],
                    ),
                    C = (0, n.useCallback)(
                        (e) => {
                            (f(), e.stopPropagation());
                        },
                        [f],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: x, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: y,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: x, [u().control_withSecondaryColor]: _ }),
                            onClick: C,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: h,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => x });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                s = i(17392),
                l = i(90688),
                o = i(73170),
                c = i(29504),
                d = i(2058),
                u = i(88969),
                m = i(29993),
                _ = i(15077),
                p = i(72288),
                v = i(97956),
                g = i(91292),
                f = i(59304),
                y = i(95641),
                h = i.n(y);
            let x = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: y,
                        entityTitle: x,
                        entityDescription: b,
                        entityVariant: C,
                        entityUrl: A,
                        customCover: k,
                        radius: I,
                        isPinned: S,
                    } = e,
                    T = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: s, entityDescription: l } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: s }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: l }),
                                    };
                            }
                        });
                    })(),
                    E = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: s, entityDescription: l } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: l }),
                                    };
                            }
                        });
                    })(),
                    j = (0, n.useMemo)(
                        () =>
                            A
                                ? (0, a.jsx)(g.N, {
                                      className: h().link,
                                      href: A,
                                      title: x,
                                      children: (0, a.jsxs)(c.HL, {
                                          className: h().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', x, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(c.HL, {
                                      className: h().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: x,
                                      children: ['\xa0', x, '\xa0'],
                                  }),
                        [x, A],
                    ),
                    L = (0, n.useMemo)(
                        () => k || (0, a.jsx)(l._V, { className: h().image, src: y, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [y, k],
                    ),
                    N = (0, n.useMemo)(() => {
                        let e = { entity: j, description: b };
                        return S
                            ? T({ entityVariant: C, values: e, entityTitle: x, entityDescription: b })
                            : E({ entityVariant: C, values: e, entityTitle: x, entityDescription: b });
                    }, [j, b, S, E, C, x, T]);
                return (0, a.jsx)(f.$, {
                    className: (0, r.$)(h().root, { [h().root_withLongText]: C === _.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: L,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(o.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': N.ariaLabel }) }),
                            (0, a.jsx)(c.HL, {
                                className: h().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: N.caption,
                            }),
                        ],
                    }),
                    coverRadius: I,
                });
            };
        },
        34407: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = 100;
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => g, s: () => f });
            var a = i(88800),
                r = i(84961),
                n = i(58390),
                s = i(53548),
                l = i(35412),
                o = i(39499),
                c = i(89108),
                d = i(70003),
                u = i(72288),
                m = i(16818);
            (0, r.eO)(!1);
            let _ = (0, s.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: r } = e,
                        n = (0, s.useMemo)(() => ({ store: i, storeKey: r }), [i, r]);
                    return (0, a.jsx)(_.Provider, { value: n, children: t });
                },
                v = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: r } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                g = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: g } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v, { nonce: s, patchKey: i, patchesRef: g }), (0, a.jsx)(p, { store: _, storeKey: i, children: n })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, s.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == i ? void 0 : i.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var a = i(67174);
            let r = (e) => (0, a.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var a = i(53548);
            i(30282);
            var r = i(58390);
            let n = (e) => {
                let t = (0, r.usePathname)(),
                    [i, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]));
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            var a = i(67174);
            let r = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        39339: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => f });
            var a = i(5120),
                r = i(89916),
                n = i(60385),
                s = i(79390),
                l = i(50633),
                o = i(27506),
                c = i(67174),
                d = i(23744),
                u = i(97335),
                m = i(67318),
                _ = i(34407),
                p = i(554),
                v = i(18243),
                g = i(99007);
            let f = a.gK
                .compose(
                    a.gK.model({
                        uuid: a.gK.string,
                        isAvailable: a.gK.boolean,
                        revision: a.gK.maybe(a.gK.number),
                        uid: a.gK.number,
                        kind: a.gK.number,
                        title: a.gK.maybe(a.gK.string),
                        coverUri: a.gK.maybe(a.gK.string),
                        tracksCount: a.gK.maybe(a.gK.number),
                        averageColor: a.gK.maybe(a.gK.string),
                        generatedPlaylistType: a.gK.maybe(a.gK.string),
                        personalColor: a.gK.maybeNull(a.gK.number),
                        visibility: a.gK.maybe(a.gK.string),
                        trailer: a.gK.maybe(d.a),
                    }),
                    u.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === g.j.LIKE || e.kind === g.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === g.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === n.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, a._n)(e)) return !1;
                        let { library: t } = (0, l.M)(e);
                        return t.isPlaylistLiked((0, p.m)(e));
                    },
                    get pinId() {
                        return (0, v.f)(e);
                    },
                    get id() {
                        return (0, p.m)(e);
                    },
                    get isPinned() {
                        if (!(0, a._n)(e)) return !1;
                        let { pinsCollection: t } = (0, l.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, l.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, a._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, a._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { library: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, a._n)(e) && r === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, l.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return m.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, a._$)(e);
                        try {
                            var s, l;
                            let a = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (s = e.revision) ? s : 0, playlistKind: e.kind });
                            return ((e.revision = a.revision), (e.isAvailable = null == (l = a.available) || l), m.Y.OK);
                        } catch (e) {
                            if ((n.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return m.Y.RELOAD;
                            return m.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return o.F.ERROR;
                        if (e.title === t) return o.F.OK;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return o.F.ERROR;
                            let a = e.title;
                            e.title = t;
                            try {
                                let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return ((e.title = a), o.F.ERROR);
                                return ((e.title = r.title), o.F.OK);
                            } catch (t) {
                                ((e.title = a), r.error(t));
                            }
                        }
                        return o.F.ERROR;
                    }),
                    deletePlaylist: (0, a.L3)(function* () {
                        if (!(0, a._n)(e) || !e.canUserChange) return o.F.ERROR;
                        let { pinsCollection: t } = (0, l.M)(e),
                            { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), o.F.OK);
                        } catch (e) {
                            r.error(e);
                        }
                        return o.F.ERROR;
                    }),
                    toggleVisibility: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return o.F.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e),
                            { user: s } = (0, l.M)(e),
                            c = e.visibility,
                            d = e.isPublic ? n.L.PRIVATE : n.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield s.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                o.F.OK
                            );
                        } catch (e) {
                            r.error(e);
                        }
                        return ((e.visibility = c), o.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => h });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(87999),
                o = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                _ = i(7555),
                p = i(29504),
                v = i(78940),
                g = i(72288),
                f = i(80932),
                y = i.n(f);
            let h = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    f = (0, v.Z)(t.url),
                    x = (0, o.S)(),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(h, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, d.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), x({ to: l.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: C,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(_.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, a.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        41814: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => u });
            var a = i(5120),
                r = i(80989),
                n = i(22983),
                s = i(50633),
                l = i(97956),
                o = i(90420),
                c = i(63425);
            let d = a.gK.model('VibeAgent', { animationUri: a.gK.string, cover: c.$, entityType: a.gK.maybe(a.gK.string) }),
                u = a.gK
                    .model('Vibe', {
                        title: a.gK.optional(a.gK.string, ''),
                        description: a.gK.maybe(a.gK.string),
                        seeds: a.gK.array(a.gK.string),
                        imageUrl: a.gK.maybe(a.gK.string),
                        animationUrl: a.gK.maybe(a.gK.string),
                        backgroundImageUrl: a.gK.maybe(a.gK.string),
                        backgroundColor: a.gK.maybe(a.gK.string),
                        type: a.gK.maybe(a.gK.string),
                        colors: a.gK.maybe(a.gK.model({ average: a.gK.maybe(a.gK.string), waveText: a.gK.maybe(a.gK.string) })),
                        agent: a.gK.maybe(d),
                    })
                    .views((e) => {
                        let t = {
                            get stationId() {
                                var i;
                                return null != (i = e.seeds[0]) ? i : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (t.stationId !== o.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, r.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, a._n)(e)) return !1;
                                let { pinsCollection: t } = (0, s.M)(e);
                                return t.isPinned(this.pinId);
                            },
                            get isLikeEnabled() {
                                return e.seeds.length > 0 && e.seeds.every((e) => e !== o.M1 && e !== o.yx && !e.startsWith('playlist:'));
                            },
                            get isShareEnabled() {
                                return t.isLikeEnabled && t.stationType !== o.q7 && t.stationType !== o.N7;
                            },
                            get isLiked() {
                                if (!(0, a._n)(e)) return !1;
                                let { library: t } = (0, s.M)(e);
                                return t.isVibeLiked(e.seeds);
                            },
                            get stationType() {
                                var c, d;
                                return null != (d = null == (c = t.stationId) ? void 0 : c.split(':')[0]) ? d : '';
                            },
                            get isMix() {
                                return e.type === n.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === n.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, a._n)(e)) return !1;
                                let { experiments: t } = (0, s.M)(e);
                                return t.checkExperiment(l.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, a.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                        togglePin: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, s.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        toggleLike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e) || !e.isLikeEnabled) return;
                            let { library: t, user: i } = (0, s.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibeLike({ seeds: [...e.seeds] });
                        }),
                        getDescription() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, a._n)(e)) return t;
                            let { experiments: i } = (0, s.M)(e);
                            return i.checkExperiment(l.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                        },
                    }));
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42123: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c });
            var a = i(88800),
                r = i(65724),
                n = i(7555),
                s = i(19994),
                l = i(16782),
                o = i.n(l);
            let c = (e) => {
                let { isActive: t, coverRadius: i = 'm', withDescription: l, className: c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(o().start, c),
                    children: [
                        (0, a.jsx)(n.t, {
                            className: o().coverContainer,
                            radius: i,
                            children: (0, a.jsx)(s.W, { isActive: t, className: o().shimmerCover, radius: 'xl' }),
                        }),
                        (0, a.jsxs)('div', {
                            className: o().textShimmerContainer,
                            children: [
                                (0, a.jsx)(s.W, { isActive: t, className: o().shimmerTitle, radius: 'xl' }),
                                l && (0, a.jsx)(s.W, { isActive: t, className: o().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        43176: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 8824)), Promise.resolve().then(i.bind(i, 50811)), Promise.resolve().then(i.bind(i, 20562)));
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => n });
            var a = i(53548);
            let r = (0, a.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                n = () => (0, a.useContext)(r);
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(88800),
                r = i(84961),
                n = i(17392),
                s = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    v = (0, o.$)(t, u);
                return (0, a.jsx)(l.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, a.jsx)(s.I, { className: d, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        45873: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        46079: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (0, i(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46777: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(55482),
                r = i(53548),
                n = i(46422);
            let s = (e) => {
                let t = (0, n.W)(),
                    i = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: i, moveForward: s };
            };
        },
        47580: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (e) => e.map((e) => e.name).join(', ');
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50811: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPage: () => eT });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(88969),
                o = i(87999),
                c = i(76903),
                d = i(17392),
                u = i(66719),
                m = i(98225),
                _ = i(29504),
                p = i(2058);
            let v = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, p.A)();
                return (0, s.useCallback)(
                    function (i) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(i),
                            n = new Date();
                        (r.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0));
                        let s = (r.getTime() - n.getTime()) / 864e5,
                            l = t(s, 'day', { numeric: 'auto' }),
                            o = e(i, { day: 'numeric', month: 'long' });
                        switch (s) {
                            case 0:
                            case -1:
                            case -2:
                                if (a) return ''.concat(l, ', ').concat(o);
                                return l;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
            var g = i(99711),
                f = i(90233),
                y = i(28119),
                h = i(34961),
                x = i(53892),
                b = i(72288);
            let C = (0, s.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var A = i(18593),
                k = i(13946),
                I = i(84384),
                S = i(18486),
                T = i(42123);
            let E = (e) => {
                    let { entityId: t, from: i } = e;
                    return { contextData: { type: A.K.Various, meta: { id: t }, from: i }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                j = (e) => {
                    let { id: t, tabIndex: i, blockIndex: a, trackIndex: r } = e,
                        n = (0, h.s)(x.n.MUSIC_HISTORY),
                        l = (0, s.useId)(),
                        o = (0, s.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, s.useContext)(C);
                    return (
                        (0, s.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(i, '_').concat(a, '_').concat(r, '_').concat(t) : ''.concat(i, '_').concat(a, '_').concat(t),
                                s = n.indexesMap.get(e);
                            n.isInObservationRange(s) &&
                                c({
                                    elementRef: o,
                                    elementId: l,
                                    index: s,
                                    onShow() {
                                        (n.getItems(this.index), d(l));
                                    },
                                });
                        }, [a, t, l, n, c, i, r, d]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var L = i(14347),
                N = i(10829),
                R = i(98644),
                O = i(93015),
                P = i(72713),
                M = i.n(P);
            let w = (0, n.PA)((e) => {
                let { type: t, track: i, artists: r, tabIndex: n, blockIndex: s, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = j({ id: i.id, tabIndex: n, blockIndex: s, trackIndex: l });
                return i.isShimmerVisible || !i.data
                    ? (0, a.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, a.jsx)(O.D, {
                              isActive: i.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: M().trackShimmer,
                              variant: t === A.K.Album ? R.X.ALBUM : R.X.PLAYLIST,
                          }),
                      })
                    : t === A.K.Album
                      ? (0, a.jsx)(L.F, { track: i.data, position: i.data.index, albumArtists: r, playContextParams: o })
                      : (0, a.jsx)(N.K, { track: i.data, playContextParams: o });
            });
            var D = i(54719),
                B = i.n(D);
            let K = (0, n.PA)((e) => {
                    var t, i, n, o, c;
                    let { album: u, tabIndex: m, blockIndex: p } = e,
                        { ref: v, intersectionPropertyId: g } = j({ id: u.id, tabIndex: m, blockIndex: p }),
                        { from: f } = (0, I.f)({ blockId: 'album-'.concat(u.id) }),
                        y = (0, s.useMemo)(() => {
                            var e, t;
                            return u.available
                                ? (0, a.jsx)(k.i, {
                                      className: B().artists,
                                      linkClassName: B().artistLink,
                                      artists: null == (e = u.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = u.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [u.available, null == (t = u.meta) ? void 0 : t.artistNames, null == (i = u.meta) ? void 0 : i.artists]),
                        h = (0, s.useMemo)(() => {
                            var e, t, i;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(S.T, {
                                      className: B().header,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: y,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = u.meta) ? void 0 : i.url,
                                      available: u.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!y,
                                  });
                        }, [
                            u.available,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (n = u.meta) ? void 0 : n.coverUri,
                            null == (o = u.meta) ? void 0 : o.title,
                            null == (c = u.meta) ? void 0 : c.url,
                            y,
                        ]),
                        x = (0, s.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = E({ entityId: e.entityId, from: f });
                                    return (0, a.jsx)(
                                        w,
                                        { type: A.K.Album, track: e, playContextParams: r, tabIndex: m, blockIndex: p, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, f, m, p],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: v,
                        'data-intersection-property-id': g,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, a.jsx)(l.A, { id: 'music-history.album' }),
                            }),
                            h,
                            (0, a.jsx)('div', { className: B().content, children: x }),
                        ],
                    });
                }),
                H = (0, n.PA)((e) => {
                    var t, i, n;
                    let { artist: o, tabIndex: c, blockIndex: u } = e,
                        { ref: m, intersectionPropertyId: p } = j({ id: o.id, tabIndex: c, blockIndex: u }),
                        { from: v } = (0, I.f)({ blockId: 'artist-'.concat(o.id) }),
                        g = (0, s.useMemo)(() => {
                            var e, t, i;
                            return o.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: o.isShimmerActive, className: B().header, coverRadius: 'round' })
                                : (0, a.jsx)(S.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: B().header,
                                      coverUrl: null == (e = o.meta) ? void 0 : e.coverUri,
                                      title: null == (t = o.meta) ? void 0 : t.name,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = o.meta) ? void 0 : i.url,
                                      available: o.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            o.available,
                            o.isShimmerActive,
                            o.isShimmerVisible,
                            null == (t = o.meta) ? void 0 : t.coverUri,
                            null == (i = o.meta) ? void 0 : i.name,
                            null == (n = o.meta) ? void 0 : n.url,
                        ]),
                        f = (0, s.useMemo)(
                            () =>
                                o.tracks.map((e, t) => {
                                    var i;
                                    let r = E({ entityId: e.entityId, from: v });
                                    return (0, a.jsx)(
                                        w,
                                        { type: A.K.Artist, track: e, playContextParams: r, tabIndex: c, blockIndex: u, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [o.tracks, v, c, u],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: m,
                        'data-intersection-property-id': p,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, a.jsx)(l.A, { id: 'music-history.artist' }),
                            }),
                            g,
                            (0, a.jsx)('div', { className: B().content, children: f }),
                        ],
                    });
                });
            var U = i(33586),
                V = i(20584),
                Y = i(93039);
            let z = (0, n.PA)((e) => {
                    let { common: t, tabIndex: i, blockIndex: n } = e,
                        { ref: o, intersectionPropertyId: c } = j({ id: t.id, tabIndex: i, blockIndex: n }),
                        { from: u } = (0, I.f)(),
                        m = ((e) =>
                            (0, s.useMemo)(
                                () => (e === g.D.SEARCH ? (0, Y.t)({ contextType: A.K.Various, contextId: '', entityContextType: V.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, s.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let s = E({ entityId: e.entityId, from: u });
                                    return (0, a.jsx)(
                                        w,
                                        { playContextParams: s, type: A.K.Various, track: e, tabIndex: i, blockIndex: n, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, u, i, n],
                        ),
                        v = (0, s.useMemo)(() => {
                            switch (t.type) {
                                case g.D.OTHER:
                                    return (0, a.jsx)(l.A, { id: 'music-history.shuffle' });
                                case g.D.SEARCH:
                                    return (0, a.jsx)(l.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, a.jsx)(U._, {
                        sourceContextData: m,
                        children: (0, a.jsxs)('section', {
                            className: B().root,
                            ref: o,
                            'data-intersection-property-id': c,
                            'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, a.jsx)(_.DZ, {
                                    className: (0, r.$)(B().header, B().heading),
                                    variant: 'h3',
                                    'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: v,
                                }),
                                (0, a.jsx)('div', { className: B().content, children: p }),
                            ],
                        }),
                    });
                }),
                W = (0, n.PA)((e) => {
                    var t, i, n, o, c;
                    let { playlist: u, tabIndex: m, blockIndex: v } = e,
                        { ref: g, intersectionPropertyId: f } = j({ id: u.id, tabIndex: m, blockIndex: v }),
                        { from: y } = (0, I.f)({ blockId: u.isResolved ? 'playlist-'.concat(null == (t = u.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: h } = (0, p.A)(),
                        x = (0, s.useMemo)(() => {
                            var e, t, i, r;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(S.T, {
                                      className: B().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleClassName: B().headerTitle,
                                      description: h({ id: 'entity-names.number-of-tracks' }, { counter: null == (i = u.meta) ? void 0 : i.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = u.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            h,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (i = u.meta) ? void 0 : i.coverUri,
                            null == (n = u.meta) ? void 0 : n.title,
                            null == (o = u.meta) ? void 0 : o.tracksCount,
                            null == (c = u.meta) ? void 0 : c.url,
                        ]),
                        b = (0, s.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = E({ entityId: e.entityId, from: y });
                                    return (0, a.jsx)(
                                        w,
                                        { playContextParams: r, type: A.K.Playlist, track: e, tabIndex: m, blockIndex: v, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, y, m, v],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: g,
                        'data-intersection-property-id': f,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, a.jsx)(l.A, { id: 'music-history.playlist' }),
                            }),
                            x,
                            (0, a.jsx)('div', { className: B().content, children: b }),
                        ],
                    });
                });
            var F = i(39631),
                G = i(39585),
                X = i(64284);
            let $ = (0, n.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: i, blockIndex: n, tabIndex: l } = e,
                    o = (0, F._)(),
                    { ref: c, intersectionPropertyId: u } = j({ id: i.id, blockIndex: n, tabIndex: l }),
                    { from: m } = (0, I.f)({ blockId: ''.concat(X.U.RADIO, '-').concat(X.U.Q2V, '-').concat(i.id) }),
                    _ = (0, s.useMemo)(
                        () =>
                            i.tracks.map((e, t) => {
                                var i;
                                let r = E({ entityId: e.entityId, from: m });
                                return (0, a.jsx)(
                                    w,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: n, tabIndex: l, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [i.tracks, m, l, n],
                    );
                return i.meta
                    ? (0, a.jsxs)('section', {
                          className: B().root,
                          ref: c,
                          'data-intersection-property-id': u,
                          'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, a.jsx)(G.K, { className: (0, r.$)(B().queryToVibeHeader, B().heading), requestAwakeLumenModal: t, vibe: i.meta, controls: o(i.meta) }),
                              (0, a.jsx)('div', { className: B().content, children: _ }),
                          ],
                      })
                    : null;
            });
            var q = i(64543),
                Q = i(29993),
                Z = i(79070),
                J = i(55211),
                ee = i(5407),
                et = i(47964),
                ei = i(97956),
                ea = i(90420),
                er = i(52726),
                en = i(8990),
                es = i(39267);
            let el = (0, n.PA)((e) => {
                var t, i, n, o, c, u;
                let { vibe: m, blockIndex: p, tabIndex: v } = e,
                    {
                        experiments: g,
                        settings: { isMobile: f },
                        freeAccess: y,
                    } = (0, b.g)(),
                    { screen: h, block: x } = (0, q.j)(),
                    C = null == h ? void 0 : h.pageIdForFrom,
                    { blockIdForFrom: k } = null != x ? x : {},
                    L = (0, ee.P)(),
                    [N, R] = (0, s.useState)(!1),
                    {
                        isPlaying: O,
                        togglePlay: P,
                        isCurrent: M,
                    } = (0, et.B)({ seeds: (null == (t = m.meta) ? void 0 : t.seeds) || [ea.M1], pageIdForFrom: C, blockIdForFrom: k }),
                    D = (0, s.useId)(),
                    K = g.checkExperiment(ei.z.WebNextVibeDescription, 'on'),
                    H = m.isMultivibe,
                    U = (0, F._)()(m.meta),
                    V = H ? 'xs' : 'm',
                    { ref: Y, intersectionPropertyId: z } = j({ id: m.id, blockIndex: p, tabIndex: v }),
                    { from: W } = (0, I.f)({ blockId: 'wave-'.concat(m.id) }),
                    G = (0, Q.c)(() => {
                        if (!L()) {
                            if (y.isVibeStartRestricted) return void R(!0);
                            P();
                        }
                    }),
                    X = (0, Q.c)((e) => {
                        if (f || 2 === e.detail) return void G();
                    }),
                    $ = (0, Z.L)(() => {
                        var e, t, i, a, r, n, s, l;
                        return K
                            ? {
                                  title: null == (e = m.meta) ? void 0 : e.title,
                                  description:
                                      null == (a = m.meta)
                                          ? void 0
                                          : a.getDescription(null != (l = null == (t = m.meta) ? void 0 : t.title) ? l : null == (i = m.meta) ? void 0 : i.description),
                              }
                            : { title: null != (s = null == (r = m.meta) ? void 0 : r.title) ? s : null == (n = m.meta) ? void 0 : n.description };
                    }),
                    el = (0, s.useCallback)(() => {
                        var e, t, i, n, s;
                        return (null == (e = m.meta) ? void 0 : e.shouldShowAgent) && (null == (t = m.meta) ? void 0 : t.agent)
                            ? (0, a.jsx)(J.n, {
                                  agent: m.meta.agent,
                                  isPlaying: O,
                                  isCurrent: M,
                                  onPlayButtonClick: G,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: H }),
                                  playButtonIconSize: V,
                                  fallbackIconSize: V,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: H }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: H }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: H }),
                              })
                            : (0, a.jsx)(es.q, {
                                  isCurrent: M,
                                  isPlaying: O,
                                  isAvailable: !0,
                                  onPlayButtonClick: G,
                                  title: null == (i = m.meta) ? void 0 : i.title,
                                  entityCoverStyle: { backgroundColor: null == (n = m.meta) ? void 0 : n.backgroundColor },
                                  ariaDescribedBy: D,
                                  coverUri: null == (s = m.meta) ? void 0 : s.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: H }),
                                  playButtonIconSize: V,
                                  fallbackIconSize: V,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: H }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: H }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: H }),
                              });
                    }, [
                        G,
                        M,
                        O,
                        D,
                        null == (i = m.meta) ? void 0 : i.agent,
                        null == (n = m.meta) ? void 0 : n.backgroundColor,
                        null == (o = m.meta) ? void 0 : o.imageUrl,
                        null == (c = m.meta) ? void 0 : c.shouldShowAgent,
                        null == (u = m.meta) ? void 0 : u.title,
                        H,
                        V,
                    ]),
                    eo = (0, Z.L)(() => {
                        var e;
                        return m.isShimmerVisible
                            ? (0, a.jsx)(T.M, { isActive: m.isShimmerActive, className: B().header, coverRadius: 'round' })
                            : (0, a.jsxs)(en.C, {
                                  className: (0, r.$)(B().header, B().vibeHeader),
                                  onClick: X,
                                  'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, a.jsx)(er.S, {
                                          isOpened: N,
                                          onOpenChange: R,
                                          isEnabled: y.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = m.meta) ? void 0 : e.stationType,
                                          renderChildren: el,
                                      }),
                                      (0, a.jsx)(S.T, {
                                          titleSize: 'xs',
                                          titleLineClamp: 1,
                                          headingVariant: 'h4',
                                          labeledForId: D,
                                          className: (0, r.$)(B().vibeTextBlock, { [B().vibeTextBlock_withControls]: U }),
                                          ...$,
                                      }),
                                      U,
                                  ],
                              });
                    }),
                    ec = (0, s.useMemo)(
                        () =>
                            m.tracks.map((e, t) => {
                                var i;
                                let r = E({ entityId: e.entityId, from: W });
                                return (0, a.jsx)(
                                    w,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: p, tabIndex: v, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [m.tracks, W, v, p],
                    );
                return (0, a.jsxs)('section', {
                    className: B().root,
                    ref: Y,
                    'data-intersection-property-id': z,
                    'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !K &&
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, a.jsx)(l.A, { id: 'music-history.my-vibe' }),
                            }),
                        eo,
                        (0, a.jsx)('div', { className: B().content, children: ec }),
                    ],
                });
            });
            var eo = i(67841),
                ec = i.n(eo);
            let ed = (0, n.PA)((e) => {
                let { tab: t, tabIndex: i, onTabShowOrHide: r, shouldHideInactiveTab: n, ...l } = e,
                    { lumen: o } = (0, b.g)(),
                    c = (0, h.s)(x.n.MUSIC_HISTORY),
                    { awakeLumenModal: u, requestAwakeLumenModal: m } = (0, f.z)(),
                    p = (0, y.f)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case g.D.ALBUM:
                                              return (0, a.jsx)(K, { album: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.PLAYLIST:
                                              return (0, a.jsx)(W, { playlist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.MULTIVIBE_WAVE:
                                          case g.D.WAVE:
                                              return (0, a.jsx)(el, { vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.ARTIST:
                                              return (0, a.jsx)(H, { artist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.SEARCH:
                                          case g.D.OTHER:
                                              return (0, a.jsx)(z, { common: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.QUERY_TO_VIBE:
                                              return p
                                                  ? (0, a.jsx)($, { requestAwakeLumenModal: m, vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, i, p, m]),
                    k = v(),
                    I = (0, s.useRef)(null),
                    { observeElement: S } = (0, s.useContext)(C),
                    T = c.datesMap.get(t.date);
                return (
                    (0, s.useEffect)(() => {
                        S({
                            elementId: t.date,
                            elementRef: I,
                            index: 0,
                            onShow: () => {
                                (c.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (c.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [c, c.datesMap, S, r, t.date]),
                    (0, s.useEffect)(() => {
                        o.isEnabled && o.getData();
                    }, [o]),
                    (0, a.jsxs)('div', {
                        'aria-hidden': !T && n,
                        ref: I,
                        'data-intersection-property-id': t.date,
                        className: ec().root,
                        ...l,
                        ...{ inert: !!(!T && n) },
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            u,
                            (0, a.jsx)(_.DZ, {
                                'data-date-anchor': t.date,
                                className: ec().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: k(t.date),
                            }),
                            (0, a.jsx)('div', { className: ec().content, children: A }),
                        ],
                    })
                );
            });
            var eu = i(32596),
                em = i(98427),
                e_ = i(44230),
                ep = i(37670),
                ev = i(94058),
                eg = i(86790),
                ef = i(60266),
                ey = i(56248),
                eh = i(87366),
                ex = i(76099),
                eb = i(8840);
            let eC = (e) => {
                    let { children: t } = e,
                        i = (0, s.useRef)({}),
                        r = (0, s.useMemo)(
                            () =>
                                (0, eb.Gv)((e) => {
                                    var t, a;
                                    let r = (0, eb.L5)(e.target),
                                        n = i.current[r];
                                    e.isIntersecting ? null == n || null == (t = n.onShow) || t.call(n) : null == n || null == (a = n.onHide) || a.call(n);
                                }),
                            [],
                        );
                    (0, s.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let n = (0, s.useCallback)(
                            (e) => {
                                !i.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (i.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        l = (0, s.useCallback)(
                            (e) => {
                                let t = i.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, s.useMemo)(() => ({ observeElement: n, unobserveElement: l }), [n, l]);
                    return (0, a.jsx)(C.Provider, { value: o, children: t });
                },
                eA = async (e, t) =>
                    new Promise((i) => {
                        if ('onscrollend' in window) {
                            var a;
                            let r = () => {
                                var e;
                                (i(), null == (e = t.current) || e.removeEventListener('scrollend', r));
                            };
                            (null == (a = t.current) || a.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' }));
                        } else (e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(i, 1e3));
                    });
            var ek = i(82007),
                eI = i.n(ek),
                eS = i(65600);
            let eT = (0, n.PA)(() => {
                let [e, t] = (0, s.useState)(!1),
                    i = (0, h.s)(x.n.MUSIC_HISTORY),
                    { contentScrollRef: n, setContentScrollRef: p } = (0, e_.g)(),
                    g = (0, m.zb)(0),
                    f = (0, s.useRef)(!1),
                    y = (0, s.useRef)(null),
                    b = (0, s.useCallback)(
                        async (e) => {
                            var a;
                            t(!0);
                            let r = i.dates[e];
                            if (!r) return;
                            (null == (a = g.onTabChange) || a.call(g, e), (f.current = !0));
                            let s = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (s && ((y.current = n), await eA(s, y)), (f.current = !1));
                        },
                        [i.dates, g, n],
                    ),
                    C = (0, s.useCallback)(() => {
                        if (f.current) return;
                        let e = i.dates.findIndex((e) => i.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = g.onTabChange) || t.call(g, e);
                        }
                    }, [i.dates, i.datesMap, g]);
                ((0, s.useEffect)(() => () => i.reset(), [i]), (0, ep.J)(i.isResolved));
                let A = (0, s.useMemo)(() => {
                        var t;
                        return i.isRejected
                            ? (0, a.jsx)(eu.SomethingWentWrong, { className: (0, r.$)(eI().error, eI().important), withBackwardControl: !1 })
                            : i.isShimmerVisible
                              ? (0, a.jsx)(eS.v, { isActive: i.isShimmerActive })
                              : i.isEmpty
                                ? (0, a.jsx)('div', {
                                      className: eI().empty,
                                      children: (0, a.jsx)(_.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, a.jsx)(l.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = i.tabs)
                                  ? void 0
                                  : t.map((t, i) =>
                                        (0, a.jsx)(ed, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: i, shouldHideInactiveTab: e }, i),
                                    );
                    }, [C, i.isEmpty, i.isRejected, i.isShimmerActive, i.isShimmerVisible, i.tabs, e]),
                    k = v(),
                    I = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(ex.wI, {
                                isShimmerVisible: i.isShimmerVisible,
                                className: eI().tabs,
                                ...g,
                                onTabChange: b,
                                shimmer: (0, a.jsx)(ex.zr, {
                                    className: eI().tabs,
                                    shimmerClassName: (0, r.$)(eI().tab, { [eI().tab_isLoading]: i.isShimmerVisible }),
                                    count: 5,
                                }),
                                children: i.dates.map((e, t) =>
                                    (0, a.jsx)(
                                        eh.o,
                                        {
                                            className: (0, r.$)(eI().tab, { [eI().tab_selected]: t === g.value }),
                                            titleClassName: eI().date,
                                            'aria-label': k(e, !1),
                                            title: k(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [k, b, i.dates, i.isShimmerVisible, g],
                    );
                return (
                    i.isNeededToLoad && (0, s.use)(i.getMusicHistory()),
                    (0, a.jsx)(c.a, {
                        pageId: o.AppScreen.MusicHistoryScreen,
                        pageIdForFrom: em.b.HISTORY,
                        children: (0, a.jsxs)('div', {
                            className: eI().root,
                            'data-test-id': d.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: eI().headerContainer,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: eI().header,
                                            children: [
                                                (0, a.jsx)(ey.L, { withForwardControl: !1 }),
                                                (0, a.jsx)(_.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(l.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ev.F, { className: eI().carousel, carouselElement: I }),
                                    ],
                                }),
                                (0, a.jsxs)(u.N, {
                                    ref: p,
                                    className: eI().scroll,
                                    containerClassName: eI().scrollContainer,
                                    children: [
                                        (0, a.jsx)(eC, { children: (0, a.jsx)('div', { className: eI().content, children: A }) }),
                                        (0, a.jsx)(ef.A, { children: (0, a.jsx)(eg.w, { className: eI().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        51611: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(53548),
                r = i(4086),
                n = i(41928);
            let s = () => {
                let e = (0, n.N)().get(r.Xc),
                    t = e.getLanguage(),
                    i = e.getDefaultLanguage(),
                    s = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    o = (0, a.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, a.useMemo)(() => ({ dictionary: s, language: t, defaultLanguage: i, availableLanguages: l, setLanguage: o }), [t, o]);
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, r, n, s;
                let l = null == (t = e.available) || t,
                    o = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((l = null == (n = null == (a = e.contentRestrictions) ? void 0 : a.available) || n),
                        (o = null != (s = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? s : [])),
                    { available: l, disclaimers: o }
                );
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        52643: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => l });
            var a = i(5120),
                r = i(14283),
                n = i(51724),
                s = i(12906);
            let l = (e) => {
                var t, i;
                let { album: l, artists: o, bookmateOptionRequired: c, chart: d, likesCount: u, trailer: m, releaseYear: _, releaseDate: p } = e,
                    { available: v, disclaimers: g } = (0, n.f)(l);
                return (0, a.wg)({
                    id: l.id,
                    title: l.title,
                    coverUri: null == (t = l.cover) ? void 0 : t.uri,
                    type: l.albumType,
                    disclaimers: g,
                    artists: null == o ? void 0 : o.map((e) => (0, r.a)({ artist: e })),
                    averageColor: null == (i = l.cover) ? void 0 : i.color,
                    isAvailable: v,
                    likesCount: u,
                    bookmateOptionRequired: c,
                    chart: d,
                    trailer: (0, s.m)(m),
                    year: _ ? Number(_) : void 0,
                    releaseDate: p,
                });
            };
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            let a = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        54719: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                queryToVibeHeader: 'MusicHistoryBlock_queryToVibeHeader__iRBjG',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                multivibeContainer: 'MusicHistoryBlock_multivibeContainer__GTbRL',
                multivibeCover: 'MusicHistoryBlock_multivibeCover__rzU94',
                multivibeAvatar: 'MusicHistoryBlock_multivibeAvatar__Tbme3',
                multivibeControl: 'MusicHistoryBlock_multivibeControl__J85EM',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                vibeTextBlock_withControls: 'MusicHistoryBlock_vibeTextBlock_withControls__GrTcY',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        56248: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(52300),
                m = i(46777),
                _ = i(50320),
                p = i.n(_);
            let v = (0, n.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: i = !0,
                        shouldFocusOnMount: n = !0,
                        className: _,
                        withBackwardFallback: v,
                        buttonSize: g = 'xxs',
                        onBackwardClick: f,
                    } = e,
                    { formatMessage: y } = (0, l.A)(),
                    { canBack: h, canForward: x, moveBack: b, moveForward: C } = (0, m.J)(v),
                    A = (0, s.useRef)(null),
                    k = (0, c.c)((e) => {
                        if ((e.stopPropagation(), f)) return void f();
                        b();
                    }),
                    I = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    });
                return (
                    (0, s.useEffect)(() => {
                        n && A.current && h && A.current.focus();
                    }, [h]),
                    (0, a.jsxs)('div', {
                        className: (0, r.$)(p().root, _),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(d.$, {
                                    ref: A,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !h,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: k,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, a.jsx)(d.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !x,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: I,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                s = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: v,
                            forwardRef: g,
                            style: f,
                            children: y,
                        } = e,
                        { formatMessage: h } = (0, n.A)(),
                        x = h({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: _,
                        ref: g,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => A });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(62414),
                o = i(33979),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                m = i(9618),
                _ = i(4795),
                p = i(55693),
                v = i(7123),
                g = i(72288),
                f = i(8990),
                y = i(2058),
                h = i(47580),
                x = i(95993),
                b = i(27157),
                C = i.n(b);
            let A = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: b,
                        beforeBlock: A,
                        controls: k,
                        playButtonCellRender: I,
                        withLightning: S,
                        isPlaying: T,
                        isCurrent: E,
                        togglePlay: j,
                        restartPlay: L,
                        onPlayClick: N,
                        playButtonIconSize: R,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: w } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: K },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: V },
                    } = (0, g.g)(),
                    Y = (0, l.D)(),
                    z = (0, o.g)(),
                    W = (0, u.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, y.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: r } = t,
                                n = (0, h.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: S, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    X = U(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    $ = n.isAvailable && M && !X,
                    q = (0, _.N)(),
                    Q = n.isAvailable && q && !X && !O,
                    Z = (0, x.w)({ track: n, callback: j }),
                    J = (0, c.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, x.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, ea] = (0, s.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!W()) {
                            if ($) return void w();
                            if (Q) return void V.open();
                            (ei || T || (ea(!0), null == et || et()), Z(), T || z(), null == N || N(!T));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (T) return void L();
                        er();
                    }),
                    es = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (M && n.isAvailableOnlyForPlus && w(), q && n.isAvailableOnlyForPlus && V.open());
                            return;
                        }
                        if ($) return void w();
                        let t = !K && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return Q && !t
                            ? void V.open()
                            : ((0, d.P)(e, C().ripple), K)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), Q && V.open()));
                    }),
                    el = null == I ? void 0 : I({ onPlayButtonClick: er, isPlaying: T, isCurrent: E, isLoading: G, playButtonIconSize: R });
                return (0, a.jsxs)(f.C, {
                    ref: Y,
                    'aria-label': F,
                    onClick: es,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: E && K }, i),
                    ...P,
                    children: [A, el, b, k],
                });
            });
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var a = i(4086),
                r = i(41928);
            let n = () => (0, r.N)().get(a.SX);
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(88800);
            i(30282);
            var r = i(11006),
                n = i.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var a = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        65453: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => c });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7354: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    3616: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let r = i(4377),
                            n = i(810),
                            s = i(5881),
                            l = a(i(7354)),
                            o = (e) => {
                                let {
                                        component: t = (0, r.jsx)('a', {}),
                                        block: i,
                                        target: a,
                                        rel: o,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: _,
                                        className: p,
                                        children: v,
                                        textClassName: g = '',
                                        containerClassName: f,
                                        ...y
                                    } = e,
                                    h = (0, n.useId)(),
                                    x = !n.Children.count(v),
                                    b = 'left' === u,
                                    C = null;
                                if (void 0 !== _) {
                                    var A;
                                    C = (0, n.cloneElement)(_, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !x && u },
                                            null == (A = _.props) ? void 0 : A.className,
                                        ),
                                        key: h,
                                    });
                                }
                                let k = (0, n.useMemo)(
                                    () =>
                                        _
                                            ? (0, r.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, f),
                                                  children: [b && C, !x && (0, r.jsx)('span', { className: g, children: v }), !b && C],
                                              })
                                            : v,
                                    [v, f, _, b, x, C, g],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: a,
                                        rel: '_blank' === a && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: i, [l.default.flexIcon]: _ && m, [l.default.iconOnly]: _ && x }, p),
                                        ...y,
                                        ...t.props,
                                    },
                                    k,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, l), i.exports);
            }
            ((l.d = (e, t) => {
                for (var i in t) l.o(t, i) && !l.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.r = void 0));
                var e = l(3616);
                Object.defineProperty(o, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = o.r;
            o.X;
        },
        65600: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => d });
            var a = i(88800),
                r = i(19994),
                n = i(98644),
                s = i(42123),
                l = i(93015),
                o = i(97766),
                c = i.n(o);
            let d = (e) => {
                let { isActive: t } = e,
                    i = (0, a.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, a.jsx)(l.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(l.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(l.D, { isActive: t, variant: n.X.PLAYLIST }),
                        ],
                    });
                return (0, a.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, a.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(s.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        i,
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(s.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        i,
                    ],
                });
            };
        },
        67841: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        72713: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        73245: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var a = i(5120),
                r = i(12906);
            let n = (e) => {
                var t, i;
                let { playlist: n, generatedPlaylistType: s, likesCount: l, trailer: o, tracksCount: c } = e;
                return (0, a.wg)({
                    isAvailable: null == (i = n.available) || i,
                    uuid: n.playlistUuid,
                    title: n.title,
                    uid: n.uid,
                    kind: n.kind,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    generatedPlaylistType: s,
                    likesCount: l,
                    tracksCount: c,
                    trailer: (0, r.m)(o),
                });
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => P });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(87999),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                p = i(42174),
                v = i(96817);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, a.jsx)(v.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: g,
                    icon: (0, a.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var f = i(5407),
                y = i(57934),
                h = i(55693),
                x = i(72288),
                b = i(49738),
                C = i(56446),
                A = i(64546),
                k = i(29831),
                I = i(30123),
                S = i(54965),
                T = i(1829),
                E = i(82092),
                j = i.n(E),
                L = i(79262),
                N = i(41867),
                R = i.n(N);
            let O = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(L.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                P = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: v,
                            ignoreDislikedStyles: E,
                            onLikeClick: L,
                            utmLink: N,
                            withSecondaryColor: R,
                            handleRemove: P,
                            withTrailer: M = !0,
                            likeIconSize: w = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: K, trailer: H } = (0, x.g)(),
                        { formatMessage: U } = (0, l.A)(),
                        { sendLikeSearchFeedback: V } = (0, h.z)(),
                        [Y, z] = (0, s.useState)(!1),
                        [W, F] = (0, s.useState)(!1),
                        G = (0, f.P)(),
                        X = (0, p.K)(n),
                        {
                            duration: $,
                            lightning: q,
                            ugc: Q,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / I.k7);
                                              return (0, S.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, k.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: v, isUGC: n.isUGC }, U),
                        Z = (0, y.F)(),
                        J = K.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (Y || n.isLiked || (z(!0), null == V || V()), await X(), null == L || L(n.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (H.openTrackTrailer(n.id), Z(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(T._, {
                                        track: n,
                                        open: W,
                                        onOpenChange: F,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: N,
                                        className: (0, r.$)(j().contextMenu, { [j().contextMenu_visible]: W }),
                                        handleRemove: P,
                                        withTrailer: M,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, P, W, ee, M, n, N]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(j().root, j().controls, i, {
                            [j().controls_dislikedControls]: n.isDisliked,
                            [j().controls_dislikedColors]: n.isDisliked && !E,
                            [j().controls_disabled]: !n.isAvailable,
                            [j().root_withSecondaryColor]: R,
                        }),
                        children: [
                            q && (0, a.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: j().lightning, variant: 'lightning' }),
                            Q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(j().item, j().downloadIcon), children: (0, a.jsx)(O, { track: n }) }),
                            P && !B && (0, a.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(j().item, j().removeButton), onClick: P, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(A.WithOffline, {
                                    fallback: (0, a.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: w,
                                        className: (0, r.$)(j().item, j().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !K.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, a.jsx)(A.WithOffline, {
                                    fallback: (0, a.jsx)(C.k, {
                                        className: (0, r.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    null !== $ &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(j().duration, { [j().duration_hidden]: W && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': $.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: $.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        78460: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var a = i(5120),
                r = i(90544);
            let n = i(83176).Z.props({ artists: a.gK.maybe(a.gK.array(r.P)) });
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        82007: (e) => {
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
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        83176: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(5120);
            let r = a.gK.model('TrackIdModel', { id: a.gK.union(a.gK.string, a.gK.number), albumId: a.gK.maybe(a.gK.number), timestamp: a.gK.maybe(a.gK.string) }),
                n = i(39339)
                    .$.props({ tracks: a.gK.maybe(a.gK.array(r)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => I });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(2058),
                l = i(30282),
                o = i(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                _ = i(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var v = i(51611),
                g = i(72288),
                f = i(11006),
                y = i.n(f),
                h = i(17392),
                x = i(29504),
                b = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': h.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(b.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': h.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': h.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: y().list,
                                'data-test-id': h.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, a.jsx)(b.N, { target: '_blank', href: r, className: y().link, 'data-test-id': h.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': h.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': h.S7.FOOTER,
                        children: [(0, a.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, v.h)(),
                    o = u({ formatMessage: n, language: l, tld: i.tld, year: p(r) });
                return (0, a.jsx)(C, { className: t, data: o });
            });
            let I = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: _, user: f } = (0, g.g)(),
                    { formatDate: h, formatMessage: x } = (0, s.A)(),
                    { isEnabled: b } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, v.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    _ = [s, o, u];
                                return (i && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: p(h),
                    });
                return (0, a.jsx)(k, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: b }, i), data: A });
            });
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(53548),
                r = i(52150);
            function n() {
                return (0, a.useContext)(r.H);
            }
        },
        88021: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var a,
                r = i(14022),
                n = i(53548),
                s = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (s[e](i, i.exports, o), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [i, l]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [i, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: a,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: a && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                _ = i(17332),
                p = i.n(_);
            let v = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: _, variant: v, size: g = 'xxxs', ...f } = e,
                    { formatMessage: y } = (0, l.A)(),
                    {
                        settings: { isMobile: h },
                    } = (0, u.g)(),
                    [x, b] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    i && i().then(b);
                }, [i, n]);
                let {
                    iconVariant: C,
                    descriptionText: A,
                    isTooltipEnabled: k,
                    ariaLabel: I,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: r } = e,
                        n = (null == a ? void 0 : a.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: n,
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !r,
                        ariaLabel: n.length > 0 ? n : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: v, descriptionTexts: x, isMobile: h }, y);
                return (0, a.jsx)(m.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: k,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children: (0, a.jsx)(c.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': I,
                            variant: C,
                            size: g,
                            ...f,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => _ });
            var a = i(88800),
                r = i(53548),
                n = i(12389),
                s = i.n(n),
                l = i(29993),
                o = i(65453),
                c = i(46079),
                d = i(67174);
            let u = (e) => {
                    let [t, i] = (0, r.useState)(!1),
                        n = (0, l.c)(() => {
                            i(!0);
                        });
                    return (0, a.jsx)(s(), { prefetch: t, ...e, onMouseEnter: n });
                },
                m = (e) => {
                    let { forwardedRef: t, href: i, component: n, ...l } = e,
                        { isPrefetchDisabled: m, isPrefetchOnHover: _ } = (0, r.useContext)(c.j),
                        { href: p, target: v, rel: g } = (0, d.u)(null != i ? i : ''),
                        f = (0, r.isValidElement)(n)
                            ? n
                            : (function (e, t, i) {
                                  return e ? (t ? (0, a.jsx)(s(), { prefetch: !1 }) : i ? (0, a.jsx)(u, { href: e }) : (0, a.jsx)(s(), {})) : (0, a.jsx)('a', {});
                              })(i, m, _);
                    return (0, a.jsx)(o.N, { ref: t, component: f, href: i ? p : void 0, target: v, rel: g, ...l });
                },
                _ = (0, r.forwardRef)((e, t) => (0, a.jsx)(m, { ...e, forwardedRef: t }));
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(88800),
                r = i(2058),
                n = i(29993),
                s = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                _ = i(79390),
                p = i(96295);
            let v = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, c.g)(),
                    { formatMessage: g } = (0, r.A)(),
                    { notify: f } = (0, o.l)(),
                    y = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, s] = (0, m.useState)(!1),
                            { formatMessage: v } = (0, r.A)();
                        return (0, n.c)(async (r) => {
                            let { album: n, withLink: o = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                            s(!0);
                            let g = await n.toggleLike();
                            if ((s(!1), !c)) return;
                            let f = t.modal.isOpened;
                            g === _.f.OK
                                ? e((0, a.jsx)(p.T, { withLink: o, album: m }), { containerId: f ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : e((0, a.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: f ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: h } = (0, s.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: h, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? y({ album: e })
                              : void f((0, a.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => v });
            var a = i(88800),
                r = i(98644),
                n = i(65724),
                s = i(53548),
                l = i(2058),
                o = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                v = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var a = i(53548);
            let r = (0, a.createContext)(null),
                n = () => (0, a.useContext)(r);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(88800),
                r = i(17392),
                n = i(17610),
                s = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(58217),
                r = i(85587);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(88800),
                r = i(84961),
                n = i(42729),
                s = i(5048);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    l = (0, s.b)(t.type);
                return (0, a.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
        97766: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99479: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => p });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(17392),
                l = i(21416),
                o = i(29504),
                c = i(72288),
                d = i(16704),
                u = i(34945),
                m = i(45873),
                _ = i.n(m);
            let p = (0, n.PA)((e) => {
                let { className: t, track: i, position: n, onPlayButtonClick: m, isPlaying: p, isCurrent: v, withDislikeStyles: g = !0, isLoading: f } = e,
                    {
                        settings: { isMobile: y },
                    } = (0, c.g)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(t, _().root, {
                        [_().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [_().root_playing]: p,
                        [_().root_disliked]: i.isDisliked && g,
                        [_().root_current]: v,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !f && (0, a.jsx)(u.P, { stopAnimation: !p, className: _().playingAnimation }),
                                    f && y && (0, a.jsx)(l.y, { size: 'xs', className: _().spinner }),
                                    !y &&
                                        (0, a.jsx)(d.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: p,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, a.jsx)(o.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': s.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        99711: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { D: () => a }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.MULTIVIBE_WAVE = 'multivibe_wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search'));
                })(a || (a = {})));
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9192, 4814, 7437, 9079, 3469, 1191, 1041, 8194, 1833, 918, 6740, 2798, 9232, 7760, 8655, 4201, 6706, 4771, 1311, 5201, 8832, 6904, 4495, 2058, 3578, 8628,
                4827, 1800, 7746, 14, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 9337, 818, 4322, 1372, 812, 1986, 389, 763, 2670, 7358,
            ],
            () => e((e.s = 43176)),
        ),
            (_N_E = e.O()));
    },
]);
