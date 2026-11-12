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
        6900: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n, o: () => r });
            var a = i(8655);
            let r = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                n = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return r[e];
                        default:
                            return '';
                    }
                };
        },
        7019: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                root_withControls: 'QueryToVibeBase_root_withControls__h9kvG',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
                controls: 'QueryToVibeBase_controls__MZ7Wo',
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
                o = i(12622);
            let l = (e) => {
                var t, i, a, r;
                let { wave: s, agent: l } = e;
                return (0, n.wg)({
                    ...(0, o.e)({
                        title: s.name,
                        header: s.description,
                        seeds: s.seeds,
                        stationId: null != (r = null != (a = s.stationId) ? a : s.seeds[0]) ? r : '',
                        type: s.type,
                        agent: l,
                        imageUrl: null == l || null == (t = l.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == l || null == (i = l.cover) ? void 0 : i.color,
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
            var x = i(73245);
            let h = (e) => {
                let { uid: t, kind: i } = e.data.itemId;
                return ''.concat(t, ':').concat(i);
            };
            var y = i(7227);
            let f = (e) => e.data.itemId.seeds.sort().join(','),
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
                                                          id: h(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: s.D.PLAYLIST, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
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
                                                              ...(0, o.e)(r.wave),
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
                                                            meta: l(i.fullModel),
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
                                                          id: f(e),
                                                          meta: { ...(0, y.l)(a.wave, a.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: s.D.QUERY_TO_VIBE, id: f(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
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
            let T = n.gK.compose(
                n.gK.model({
                    id: n.gK.string,
                    type: n.gK.enumeration(Object.values(s.D)),
                    tabIndex: n.gK.number,
                    blockIndex: n.gK.number,
                    trackIndex: n.gK.maybeNull(n.gK.number),
                }),
                k.X,
            );
            var E = i(49573),
                I = i(7123);
            let S = (e) => ({ type: I.z4.Unloaded, meta: { id: e.entityId } });
            var N = i(96826);
            let j = n.gK
                    .compose(n.gK.model('MusicHistoryTrack', { type: n.gK.literal(s.D.TRACK), id: n.gK.string, data: n.gK.maybeNull(N.v) }), k.X)
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
                L = n.gK.compose(n.gK.model('MusicHistoryBaseBlock', { id: n.gK.string, tracks: n.gK.array(j) }), k.X).views((e) => ({
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
                        return e.tracks.map(S);
                    },
                })),
                M = L.props({ type: n.gK.literal(s.D.ALBUM), available: n.gK.boolean, meta: n.gK.maybeNull(E.J) })
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
            var w = i(90544);
            let R = L.props({ type: n.gK.literal(s.D.ARTIST), available: n.gK.boolean, meta: n.gK.maybeNull(w.P) })
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
                O = n.gK
                    .model('MusicHistoryCommon', { id: n.gK.string, type: n.gK.union(n.gK.literal(s.D.OTHER), n.gK.literal(s.D.SEARCH)), tracks: n.gK.array(j) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(S);
                        },
                    }));
            var P = i(78460);
            let D = L.props({ type: n.gK.literal(s.D.PLAYLIST), meta: n.gK.maybeNull(P.I) })
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
                H = i(90420);
            let K = L.props({
                    id: n.gK.string,
                    type: n.gK.union(n.gK.literal(s.D.WAVE), n.gK.literal(s.D.MULTIVIBE_WAVE), n.gK.literal(s.D.QUERY_TO_VIBE)),
                    meta: n.gK.maybeNull(B.G),
                }).views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get contextId() {
                        var t, i;
                        return null != (i = null == (t = e.meta) ? void 0 : t.stationId) ? i : H.M1;
                    },
                    get autoflowSeeds() {
                        var a;
                        return null == (a = e.meta) ? void 0 : a.seeds;
                    },
                    get isMultivibe() {
                        return e.type === s.D.MULTIVIBE_WAVE;
                    },
                })),
                U = n.gK.union(M, R, D, K, O),
                V = n.gK.model('MusicHistoryTab', { date: n.gK.string, blocks: n.gK.maybeNull(n.gK.array(U)) }),
                W = n.gK
                    .compose(
                        n.gK.model('MusicHistoryPage', {
                            indexesMap: n.gK.map(n.gK.number),
                            items: n.gK.maybeNull(n.gK.array(T)),
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
                                let { tabIndex: o, blockIndex: l, trackIndex: c } = t,
                                    { fullModel: m } = i.data;
                                if (null === c) return;
                                let _ = null == (s = e.tabs) || null == (n = s[o]) || null == (r = n.blocks) || null == (a = r[l]) ? void 0 : a.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, i) {
                                var a, r, n;
                                let { tabIndex: o, blockIndex: l } = t,
                                    { fullModel: u } = i.data,
                                    m = null == (n = e.tabs) || null == (r = n[o]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == m ? void 0 : m.type) === s.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, i) {
                                var a, r, n;
                                let { tabIndex: o, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[o]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == u ? void 0 : u.type) === s.D.ARTIST && ((u.meta = (0, p.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, i) {
                                var a, r, n;
                                let { tabIndex: o, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[o]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == u ? void 0 : u.type) === s.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[l];
                                A(u) &&
                                    ((u.meta = { ...(0, o.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[o];
                                A(u) && ((u.meta = l(c)), (u.loadingState = d.G.RESOLVE));
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
                                        o = r.reduce((e, t) => {
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
                                                o[
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
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case s.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case s.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(f(e));
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
                { pageStoreProvider: Y } = (0, a.W)({ createStore: (e) => W.create(z, e), patchKey: r.n.MUSIC_HISTORY }),
                F = Y;
        },
        8840: (e, t, i) => {
            'use strict';
            i.d(t, { BL: () => d, Gv: () => l, L5: () => c });
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
                        function o(e) {
                            var t, i;
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (i = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, a)) ? i : e.attributes[0];
                        }
                        function l(e, t) {
                            let i = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, i);
                                });
                            }, t);
                            return i;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = o),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, i, r) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof i || void 0 === i ? [t.defaultOptions, i] : [{ ...t.defaultOptions, ...i }, r],
                                    [m, _] = (0, a.useState)({}),
                                    p = (0, a.useRef)(new Set()),
                                    v = (0, a.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = o(e.target);
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
                                                            let t = o(e.current);
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
                o = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var a = (s[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(597);
            o.__esModule;
            var l = o.createIntersectionObserver;
            o.defaultOptions;
            var c = o.getElementNameByDataAttribute;
            o.isInViewportNow;
            var d = o.useIntersectionObserver;
        },
        9184: (e) => {
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(17392),
                l = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                _ = i(73805),
                p = i(15232),
                v = i(56712),
                g = i(26243),
                x = i.n(g);
            let h = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: h,
                        isDragging: y,
                        draggingClassName: f,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: C,
                        handleRemove: A,
                        withDislike: k,
                        withTrailer: T = !0,
                        beforeTitle: E,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    } = e,
                    N = (0, c.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, d.g)(),
                    L = (0, l.X)(i.trackSource, { isMobile: j }),
                    M = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(v.C, {
                    className: (0, r.$)(g, { [x().trackWithDots]: h, [x().important]: h }),
                    track: i,
                    beforeBlock: h ? (0, a.jsx)(m.O, { className: (0, r.$)(x().dots, f), isDragging: y }) : void 0,
                    meta: (0, a.jsx)(p.j, { withArtistLink: L, beforeTitle: E, track: i, ignoreDislikedStyles: b, withSecondaryColor: C }),
                    playButtonCellRender: M,
                    controls: (0, a.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: A,
                        withDislike: k,
                        withTrailer: T,
                        removeButtonAriaLabel: I,
                        hideControls: S,
                    }),
                    ...N,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
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
            i.d(t, { O: () => l });
            var a = i(88800),
                r = i(65724),
                n = i(52300),
                s = i(30907),
                o = i.n(s);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
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
                o = i(79070),
                l = i(17610),
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
                x = i(29504),
                h = i(91292),
                y = i(2058),
                f = i(87999),
                b = i(80643),
                C = i(78940),
                A = i(55693),
                k = i(58217);
            let T = (0, n.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: n = 'm', allArtistsTitle: s, withCustomTooltip: o, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: v,
                            tooltipText: T,
                            isTooltipEnabled: E,
                            handleNavigate: I,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: r, withCustomTooltip: n } = e,
                                { formatMessage: s } = (0, y.A)(),
                                o = ((e, t) => {
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
                                    track: l,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, C.Z)(null != (i = null == (t = o.link) ? void 0 : t.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                p = (0, b.S)(),
                                v = (0, d.c)((e) => {
                                    (c && l.isOpened && l.close(), m(e));
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
                                })({ artist: o.artist, callback: v }),
                                x = (0, d.c)((e) => {
                                    (p({ to: f.AppScreen.ArtistScreen }), null == _ || _(), g(e));
                                });
                            return { ...o, handleNavigate: x };
                        })({ item: t, allArtistsTitle: s, withCustomTooltip: o });
                    return _
                        ? (0, a.jsx)(h.N, {
                              ..._,
                              'aria-label': v,
                              className: i,
                              onClick: I,
                              title: p,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(l.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, a.jsx)(l.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, a.jsx)(x.HL, {
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
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: n, allArtistsTitle: o, withCustomTooltip: l, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(T, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: n,
                                allArtistsTitle: o,
                                withCustomTooltip: l,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    s.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(T, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: n,
                                                allArtistsTitle: o,
                                                withCustomTooltip: l,
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
            var I = i(88969),
                S = i(65453);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(v().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(61013),
                L = i(87819),
                M = i(40634),
                w = i(48468),
                R = i.n(w);
            let O = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(l.ZI, { className: R().tooltipContent, children: i.map((e) => (0, a.jsx)(M.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, s.forwardRef)((e, t) => (0, a.jsx)(O, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                H = i.n(B);
            let K = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, y.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(H().root, H().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(M.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [n, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, j.A)(() => {
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
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(K, { artists: t, label: i }) : (0, a.jsx)(P, { artists: t, label: i })) : i;
                }),
                V = (0, n.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: n,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: g,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...y
                        } = e,
                        f = ((e) => {
                            var t, i, a;
                            let { separator: r, visibleArtistsCount: n, withLink: o, withComposer: l, artistIdWithoutLink: c, withContextMenu: m } = e,
                                p = null != (t = e.artists) ? t : [],
                                v = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (a = e.withCustomTooltip) || a,
                                x = (0, s.useRef)(null),
                                [h, y] = (0, s.useState)(!1),
                                {
                                    settings: { isMobile: f },
                                } = (0, u.g)(),
                                b = ((!f || 1 === p.length) && m) || !m,
                                C = ((e, t) => {
                                    var i, a, r;
                                    let n = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        s = null == (a = null == t ? void 0 : t.withLink) || a,
                                        o = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(o),
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
                                            })(e, { withLink: s && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: r, visibleArtistsCount: h ? void 0 : n, withComposer: l, withLink: !!b && o, artistIdWithoutLink: c }),
                                A = v ? C.allArtistsTitle : '',
                                k = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: g,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: k,
                                isTooltipEnabled: !!A && g && !m && !f,
                                title: !A || g || m ? void 0 : A,
                            };
                        })(y),
                        b = (0, o.L)(() =>
                            f.hiddenArtistsCount <= 0
                                ? null
                                : (0, s.isValidElement)(h)
                                  ? h
                                  : (0, a.jsx)(N, { spoilerClassName: n, spoilerArtistsCount: f.hiddenArtistsCount, handleOnSpoilerClick: f.handleOnSpoilerClick }),
                        ),
                        C = (0, a.jsx)(l.m_, {
                            referenceRef: f.labelRef,
                            enabled: f.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: f.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(v().root, v()['root_variant_'.concat(x)], { [v().root_clamp]: i && i > 0, [v().ellipsis]: !i }, t),
                                title: f.title,
                                children: [
                                    f.groups.map((e) =>
                                        (0, a.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: g,
                                                allArtistsTitle: f.allArtistsTitle,
                                                withCustomTooltip: f.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return f.withContextMenu ? (0, a.jsx)(U, { labelRef: f.labelRef, artists: f.artists, label: C }) : C;
                });
        },
        14283: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => o });
            var a = i(5120),
                r = i(51724),
                n = i(12906),
                s = i(53399);
            let o = (e) => {
                var t, i;
                let { artist: o, trailer: l, isComposer: c, likesCount: d } = e,
                    u = (0, s.m)(o.decomposed),
                    { available: m, disclaimers: _ } = (0, r.f)(o);
                return (0, a.wg)({
                    id: String(o.id),
                    name: o.name,
                    // for PulseSync WebHost: BEGIN accept alternate addon album cover fields
                    coverUri: (null == (t = o.cover) ? void 0 : t.uri) ?? o.coverUri ?? o.ogImage,
                    // for PulseSync WebHost: END accept alternate addon album cover fields
                    various: o.various,
                    decomposed: u,
                    isAvailable: m,
                    disclaimers: _,
                    isComposer: c,
                    averageColor: null == (i = o.cover) ? void 0 : i.color,
                    trailer: (0, n.m)(l),
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
                o = i(39079),
                l = i(98644),
                c = i(73805),
                d = i(15232),
                u = i(99479),
                m = i(56712),
                _ = i(33133),
                p = i.n(_);
            let v = (0, r.PA)((e) => {
                let { track: t, albumArtists: i, position: r, playContextParams: _, withLightning: v } = e,
                    g = (0, o.D)({ playContextParams: _, entityId: t.entityId }),
                    x = (0, n.useCallback)((e) => (0, a.jsx)(u.G, { track: t, position: r, className: p().playButtonCell, ...e }), [t, r]);
                return (0, a.jsx)(m.C, {
                    track: t,
                    withLightning: v,
                    meta: (0, a.jsx)(d.j, { variant: l.X.ALBUM, albumArtists: i, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, a.jsx)(c.Q, { withLightning: v, track: t, className: p().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...g,
                    'data-test-id': s.Kq.track.TRACK_ALBUM,
                });
            });
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var a = i(53548);
            let r = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
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
                o = i(15526),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, a.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
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
            i.d(t, { T: () => y });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                s = i(87999),
                o = i(49784),
                l = i(80643),
                c = i(17392),
                d = i(52300),
                u = i(90688),
                m = i(7555),
                _ = i(19994),
                p = i(29504),
                v = i(91292),
                g = i(16782),
                x = i.n(g);
            let h = (e) => {
                    let {
                        className: t,
                        coverUrl: i,
                        labeledForId: g,
                        subTitle: h,
                        title: y,
                        description: f,
                        viewAllActionLink: b,
                        controls: C,
                        titleSize: A = 'm',
                        coverBackgroundColor: k,
                        coverRadius: T = 's',
                        titleClassName: E,
                        titleLineClamp: I,
                        fallbackIconVariant: S,
                        available: N = !0,
                        onViewAllAction: j,
                        titleChildren: L,
                        children: M,
                        headingRef: w,
                        coverContainerClassName: R,
                        headingVariant: O = 'h3',
                        withDescriptionWidthLimit: P = !0,
                        isShimmerVisible: D,
                        isShimmerActive: B,
                        withCover: H,
                        withDescription: K,
                        forwardRef: U,
                        shimmerCoverClassName: V,
                        shouldSendAnalyticsOnLoaded: W,
                        ...z
                    } = e;
                    (0, o.W)({ enabled: !!W });
                    let Y = (0, n.useRef)(null),
                        F = i || H,
                        G = f || K,
                        $ = (0, n.useCallback)(() => {
                            Y.current && 'focus' in Y.current && Y.current.focus();
                        }, []),
                        X = (0, l.S)(),
                        Q = (0, n.useCallback)(() => {
                            j ? j() : X({ to: s.AppScreen.Link });
                        }, [X, j]),
                        q = (0, n.useMemo)(
                            () =>
                                y && b && N
                                    ? (0, a.jsxs)(v.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, a.jsx)(d.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: Q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(p.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, E),
                                                  variant: O,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: w,
                                                  children: y,
                                              }),
                                              L,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, a.jsx)(p.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, E, { [x().heading_notAvailable]: !N }),
                                                  variant: O,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: w,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              L,
                                          ],
                                      }),
                            [N, Q, w, O, g, y, E, I, A, b, L],
                        ),
                        Z = (0, n.useMemo)(() => (K && D ? (0, a.jsx)(_.W, { isActive: B, className: x().shimmerDescription }) : f), [K, D, f, B]),
                        J = (0, n.useMemo)(
                            () =>
                                H && D
                                    ? (0, a.jsx)(_.W, { isActive: B, className: (0, r.$)(x().shimmerCover, V), radius: 's' })
                                    : (0, a.jsx)(u._V, {
                                          src: i,
                                          fallbackIconVariant: S,
                                          style: { backgroundColor: k },
                                          className: x().cover,
                                          ref: Y,
                                          onClick: $,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [k, i, S, $, B, D, V, H],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: U,
                        ...z,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, a.jsx)(m.t, { radius: T, className: (0, r.$)(x().coverContainer, R), children: J }),
                                    (0, a.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            h,
                                            q,
                                            G &&
                                                (0, a.jsx)(p.HL, {
                                                    id: ''.concat(g, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: P }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            C || M,
                        ],
                    });
                },
                y = (0, n.forwardRef)((e, t) => (0, a.jsx)(h, { forwardRef: t, ...e }));
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
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
                            let { isActive: t, className: i, radius: a = 'm', width: o, height: l, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== o && (u.width = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
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
            var o = s.q;
            s.X;
        },
        20562: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageSuspenseLoader: () => v });
            var a = i(88800),
                r = i(88969),
                n = i(66719),
                s = i(29504),
                o = i(94058),
                l = i(86790),
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
                                (0, a.jsx)(o.F, { className: _().carousel, carouselElement: (0, a.jsx)(u.zr, { isActive: !0, className: _().tabs, count: 5 }) }),
                            ],
                        }),
                        (0, a.jsxs)(n.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, a.jsx)('div', { className: _().content, children: (0, a.jsx)(p.v, { isActive: !0 }) }),
                                (0, a.jsx)(c.A, { children: (0, a.jsx)(l.w, { className: _().footer }) }),
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
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
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
                o = i(17392),
                l = i(52300),
                c = i(19934),
                d = i(72288);
            let u = (0, r.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: r, className: u, iconClassName: m } = e,
                    { user: _ } = (0, d.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? o.S7.CONTEXT_MENU_UNPIN_BUTTON : o.S7.CONTEXT_MENU_PIN_BUTTON,
                    g = (0, n.useMemo)(() => (t ? (0, a.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(c.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: m, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: r || !_.isAuthorized,
                    children: g,
                });
            });
        },
        28119: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(72288),
                r = i(97956);
            let n = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: i },
                    } = (0, a.g)(),
                    n = e.checkExperiment(r.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(r.z.WebNextQueryToVibe, 'on') && (!n || !!i);
            };
        },
        29126: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
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
                            o = a(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: a,
                                    menuControl: l,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: m = 'default',
                                    bottomContainerClassName: _,
                                    labelText: p,
                                } = e,
                                v = d || i,
                                g = l || a;
                            return (0, r.jsxs)('div', {
                                className: (0, n.clsx)(
                                    o.default.root,
                                    o.default.controls,
                                    { [o.default.controls_visible]: u },
                                    o.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: o.default.top, children: c }),
                                    (0, r.jsxs)('div', {
                                        className: (0, n.clsx)(o.default.bottom, _),
                                        children: [
                                            v && (0, r.jsxs)('div', { className: o.default.bottom_left, children: [d, i] }),
                                            g && (0, r.jsxs)('div', { className: o.default.bottom_right, children: [l, a] }),
                                        ],
                                    }),
                                    !!p && (0, r.jsx)(s.Label, { className: o.default.label, children: p }),
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
                            o = i(8903),
                            l = i(6530),
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
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, s.clsx)(c.default.root, a),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, r.jsx)(l.SROnly, { children: null != g ? g : u }),
                                        (0, r.jsx)('div', { className: c.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, s.clsx)(c.default.wrapper, x),
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
                                                                    (0, r.jsx)(o.Caption, {
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
                            o = a(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: a = 's', ...l } = e;
                            return (0, r.jsx)(s.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, n.clsx)(o.default.root, i),
                                ...l,
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
                            o = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...l } = e,
                                c = (0, n.clsx)(o.default.root, { [o.default.focusable]: i }, t);
                            return (0, s.isValidElement)(a)
                                ? (0, s.cloneElement)(a, { ...l, className: (0, n.clsx)(c, a.props.className) })
                                : (0, r.jsx)('span', { className: c, ...l, children: a });
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
                            o = i(5987),
                            l = a(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: a = 'text', size: s = 's', className: c, children: d, weight: u = 'medium', ...m } = e;
                            return (0, r.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_'.concat(a, '_').concat(s)], l.default['root_weight_'.concat(u)], c),
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
                            o = i(5987),
                            l = a(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: a = 'bold', size: s = 's', className: c, children: d, ...u } = e;
                            return (0, r.jsx)(o.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_size_'.concat(s)], l.default['root_weight_'.concat(a)], c),
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
                            o = a(i(61));
                        function l(e) {
                            let { forwardRef: t, style: i, className: a, children: s, variant: l, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof s ? s : void 0;
                            return (0, r.jsx)(l, {
                                style: { ...i, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: c && c > 0, [o.default.root_clamp_oneline]: c && 1 === c, [o.default.root_clamp_multiline]: c && c > 1 },
                                    a,
                                ),
                                ...d,
                                children: s,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, s.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }))));
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
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = o(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = o(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = l.kk,
                d = l.m7;
            l.X$;
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
                o = i(88021),
                l = i(96817),
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
                    { swipeBackward: g, swipeForward: x, shouldBackwardButtonBeDisabled: h, shouldForwardButtonBeDisabled: y, shouldHideControls: f } = (0, o.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            (g(), e.stopPropagation());
                        },
                        [g],
                    ),
                    C = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: h,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: C,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: y,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32353: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a, u: () => r });
            var a = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                r = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => w });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(87999),
                _ = i(47149),
                p = i(84423),
                v = i(89846),
                g = i(64543),
                x = i(63582);
            let h = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, v.g)(),
                        { screen: a } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                y = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, v.g)(),
                        { screen: r } = (0, g.j)();
                    (0, s.useEffect)(() => {
                        if (!i || !a || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: r.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(i, t);
                    }, [i, e, a, null == r ? void 0 : r.pageId]);
                });
            var f = i(44230),
                b = i(4370),
                C = i(72288),
                A = i(97956),
                k = i(56248),
                T = i(90688),
                E = i(78940);
            let I = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = i(96856),
                N = i.n(S);
            let j = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: s } = (0, C.g)(),
                    { contentRef: o } = (0, f.g)(),
                    d = (0, E.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(N().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(N().navigation, { [N().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(T._V, { className: N().image, src: I.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: N().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: N().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: N().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: N().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(9184),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: m } = (0, o.A)(),
                    _ = (0, s.useContext)(C.P),
                    p = null == _ ? void 0 : _.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    v = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(v);
                let { sendRefreshEvent: g } = h(),
                    x = (0, s.useCallback)(() => {
                        (g(), (window.location.href = b.Z.main.href));
                    }, [g]),
                    { contentRef: T } = (0, f.g)();
                return p
                    ? (0, a.jsx)(j, { className: t, withBackwardControl: i, onBack: n })
                    : (0, a.jsxs)('div', {
                          className: (0, r.$)(M().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(M().navigation, { [M().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, r.$)(M().content, { [M().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: M().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, r.$)(M().title, M().important), variant: 'h3', size: 'xs', children: v }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, r.$)(M().text, M().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: x,
                                          className: M().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        33586: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => s });
            var a = i(88800),
                r = i(53548),
                n = i(12241);
            let s = (e) => {
                let { sourceContextData: t, children: i } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(n.l.Provider, { value: s, children: i });
            };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => f });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                s = i(17392),
                o = i(90688),
                l = i(73170),
                c = i(29504),
                d = i(2058),
                u = i(88969),
                m = i(29993),
                _ = i(15077),
                p = i(72288),
                v = i(97956),
                g = i(91292),
                x = i(59304),
                h = i(95641),
                y = i.n(h);
            let f = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: h,
                        entityTitle: f,
                        entityDescription: b,
                        entityVariant: C,
                        entityUrl: A,
                        customCover: k,
                        radius: T,
                        isPinned: E,
                    } = e,
                    I = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: s, entityDescription: o } = i;
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
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    S = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: s, entityDescription: o } = i;
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
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    N = (0, n.useMemo)(
                        () =>
                            A
                                ? (0, a.jsx)(g.N, {
                                      className: y().link,
                                      href: A,
                                      title: f,
                                      children: (0, a.jsxs)(c.HL, {
                                          className: y().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', f, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(c.HL, {
                                      className: y().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: f,
                                      children: ['\xa0', f, '\xa0'],
                                  }),
                        [f, A],
                    ),
                    j = (0, n.useMemo)(
                        () => k || (0, a.jsx)(o._V, { className: y().image, src: h, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [h, k],
                    ),
                    L = (0, n.useMemo)(() => {
                        let e = { entity: N, description: b };
                        return E
                            ? I({ entityVariant: C, values: e, entityTitle: f, entityDescription: b })
                            : S({ entityVariant: C, values: e, entityTitle: f, entityDescription: b });
                    }, [N, b, E, S, C, f, I]);
                return (0, a.jsx)(x.$, {
                    className: (0, r.$)(y().root, { [y().root_withLongText]: C === _.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: j,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': L.ariaLabel }) }),
                            (0, a.jsx)(c.HL, {
                                className: y().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: L.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        34407: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = 100;
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => g, s: () => x });
            var a = i(88800),
                r = i(84961),
                n = i(58390),
                s = i(53548),
                o = i(35412),
                l = i(39499),
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
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                                o = (0, m.Y)(),
                                l = (0, u.g)(),
                                { store: _, patchesRef: g } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v, { nonce: s, patchKey: i, patchesRef: g }), (0, a.jsx)(p, { store: _, storeKey: i, children: n })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, s.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
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
            i.d(t, { $: () => x });
            var a = i(5120),
                r = i(89916),
                n = i(60385),
                s = i(79390),
                o = i(50633),
                l = i(27506),
                c = i(67174),
                d = i(23744),
                u = i(97335),
                m = i(67318),
                _ = i(34407),
                p = i(554),
                v = i(18243),
                g = i(99007);
            let x = a.gK
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
                        let { library: t } = (0, o.M)(e);
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
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
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
                        let { library: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, a._n)(e) && r === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return m.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, a._$)(e);
                        try {
                            var s, o;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (s = e.revision) ? s : 0, playlistKind: e.kind });
                            // for PulseSync: BEGIN keep playlist track counts for append-to-end insertion
                            Number.isSafeInteger(r.trackCount) && r.trackCount >= 0 && (e.tracksCount = r.trackCount);
                            // for PulseSync: END keep playlist track counts for append-to-end insertion
                            return ((e.revision = r.revision), (e.isAvailable = null == (o = r.available) || o), m.Y.OK);
                        } catch (e) {
                            if ((n.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return m.Y.RELOAD;
                            return m.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return l.F.ERROR;
                        if (e.title === t) return l.F.OK;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return l.F.ERROR;
                            let a = e.title;
                            e.title = t;
                            try {
                                let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return ((e.title = a), l.F.ERROR);
                                return ((e.title = r.title), l.F.OK);
                            } catch (t) {
                                ((e.title = a), r.error(t));
                            }
                        }
                        return l.F.ERROR;
                    }),
                    deletePlaylist: (0, a.L3)(function* () {
                        if (!(0, a._n)(e) || !e.canUserChange) return l.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), l.F.OK);
                        } catch (e) {
                            r.error(e);
                        }
                        return l.F.ERROR;
                    }),
                    toggleVisibility: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return l.F.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e),
                            { user: s } = (0, o.M)(e),
                            c = e.visibility,
                            d = e.isPublic ? n.L.PRIVATE : n.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield s.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                l.F.OK
                            );
                        } catch (e) {
                            r.error(e);
                        }
                        return ((e.visibility = c), l.F.ERROR);
                    }),
                    // for PulseSync: BEGIN playlist model download-to-file action
                    downloadToFile: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { usersResource: i, modelActionsLogger: t } = (0, a._$)(e);
                        try {
                            let { tracks: r = [] } = yield i.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                n = r.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            n.length && window.musicDesktop?.pulsesync.downloads.tracks?.(n, 'playlist', e.title || '');
                        } catch (e) {
                            t.error(e);
                        }
                    }),
                    // for PulseSync: END playlist model download-to-file action
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        39585: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var a = i(88800),
                r = i(65724),
                n = i(72288),
                s = i(8655),
                o = i(44378),
                l = i(82039),
                c = i.n(l);
            let d = {
                    [s.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [s.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                m = (e) => {
                    let { className: t, controls: i, ...s } = e,
                        { lumen: l } = (0, n.g)();
                    return (0, a.jsx)(o.D, {
                        className: (0, r.$)(c().root, t),
                        lumenImages: l.getFallbackImage(s.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: u,
                        controls: i,
                        ...s,
                    });
                };
        },
        39631: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => k });
            var a = i(88800),
                r = i(53548),
                n = i(40907),
                s = i(72288),
                o = i(97956),
                l = i(90420),
                c = i(84961),
                d = i(2058),
                u = i(17392),
                m = i(29993),
                _ = i(29832),
                p = i(52300),
                v = i(19934),
                g = i(68974),
                x = i(2147),
                h = i(21869),
                y = i(49738),
                f = i(64546),
                b = i(83559),
                C = i.n(b);
            let A = (0, c.PA)((e) => {
                    let { vibe: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, s.g)(),
                        { formatMessage: r } = (0, d.A)(),
                        n = (0, x.K)(t, { showNotificationOnMobile: !0 }),
                        o = (0, m.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, a.jsx)('div', {
                        className: C().root,
                        onClick: o,
                        onDoubleClick: o,
                        onKeyDown: o,
                        children: (0, a.jsx)(_.hg, {
                            className: C().controls,
                            bottomContainerClassName: C().bottom,
                            isVisible: !0,
                            likeControl: (0, a.jsx)(f.WithOffline, {
                                fallback: (0, a.jsx)('div', {
                                    className: C().like,
                                    children: (0, a.jsx)(y.c, { size: 'xs', iconSize: 'xxs', className: C().likeButton, isLiked: t.isLiked, onClick: n }),
                                }),
                            }),
                            menuControl: (0, a.jsx)('div', {
                                className: C().menu,
                                children: (0, a.jsxs)(v.W1, {
                                    className: C().contextMenuButton,
                                    isMobile: i,
                                    menuClassName: i ? void 0 : C().contextMenu,
                                    variant: 'text',
                                    size: 'xs',
                                    icon: (0, a.jsx)(p.I, { variant: 'more', size: 'xs' }),
                                    ariaLabel: r({ id: 'interface-actions.context-menu' }),
                                    'data-test-id': u.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                                    children: [(0, a.jsx)(f.WithOffline, { fallback: (0, a.jsx)(h.S, { vibe: t, onLikeClick: n }) }), (0, a.jsx)(g.u, { vibe: t })],
                                }),
                            }),
                        }),
                    });
                }),
                k = () => {
                    let {
                        experiments: e,
                        user: { isAuthorized: t },
                    } = (0, s.g)();
                    return (0, r.useCallback)(
                        (i) =>
                            e.checkExperiment(o.z.WebNextWaveLikesAndShares, 'on') && t && i
                                ? i.stationType === l.q7
                                    ? (0, a.jsx)(n.w, { vibe: i })
                                    : i.isLikeEnabled
                                      ? (0, a.jsx)(A, { vibe: i })
                                      : null
                                : null,
                        [e, t],
                    );
                };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(87999),
                l = i(80643),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                m = i(19934),
                _ = i(7555),
                p = i(29504),
                v = i(78940),
                g = i(72288),
                x = i(80932),
                h = i.n(x);
            let y = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, g.g)(),
                    x = (0, v.Z)(t.url),
                    f = (0, l.S)(),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, d.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), f({ to: o.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(m.Dr, {
                            className: (0, r.$)(h().root, i),
                            onClick: C,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(_.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, a.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, a.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                s = i(29993),
                o = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [u, m] = (0, r.useState)(!1),
                    { notify: _ } = (0, l.l)(),
                    p = (0, r.useRef)(!1),
                    { formatMessage: v } = (0, n.A)();
                return {
                    exitVibeRoom: (0, s.c)(async () => {
                        t &&
                            !p.current &&
                            (m(!0),
                            (p.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === c.F.ERROR
                                ? _((0, a.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })
                                : i(),
                            m(!1),
                            (p.current = !1));
                    }),
                    isPending: u,
                };
            };
        },
        40907: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => w });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(2058),
                o = i(88969),
                l = i(17392),
                c = i(29993),
                d = i(79070),
                u = i(78275),
                m = i(98148),
                _ = i(52300),
                p = i(19934),
                v = i(21416),
                g = i(29504),
                x = i(29595),
                h = i(74965),
                y = i(4370),
                f = i(78940),
                b = i(72288),
                C = i(74773),
                A = i(66943),
                k = i(59378),
                T = i(56475),
                E = i(87999),
                I = i(70621),
                S = i(40887),
                N = i(16112),
                j = i(89718),
                L = i(59265),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                var t, i, n;
                let { vibe: L, context: w, className: R, renderContextButton: O } = e,
                    {
                        collection: { vibeRooms: P },
                        settings: { isMobile: D },
                        user: B,
                    } = (0, b.g)(),
                    { formatMessage: H } = (0, s.A)(),
                    { notify: K } = (0, h.l)(),
                    U = (0, f.Z)(y.Z.collectionVibeRooms.href),
                    { state: V, toggleTrue: W, toggleFalse: z } = (0, u.e)(!1),
                    Y = P.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === L.pinId;
                    }),
                    F = P.loadingState === C.G.PENDING,
                    { editVibeRoom: G, isPending: $ } = (0, T.h)(Y),
                    X = (0, c.c)(() => {
                        Y && P.deleteRoomFromItems(Y.id);
                    }),
                    {
                        handlePinClick: Q,
                        handleExitClick: q,
                        isExitPending: Z,
                    } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            a = (0, N.A)(null == t ? void 0 : t.wave),
                            { exitVibeRoom: r, isPending: n } = (0, S.J)({ room: t, onRoomSuccessExit: i }),
                            s = (0, I.D)();
                        return {
                            handleExitClick: (0, c.c)(async () => {
                                (s({ actionType: E.ActionType.Remove, userInteractionType: E.UserInteractionType.Tap }), await r());
                            }),
                            handlePinClick: (0, c.c)(async () => {
                                (s({ actionType: E.ActionType.Pin, userInteractionType: E.UserInteractionType.Tap }), await a());
                            }),
                            isExitPending: n,
                        };
                    })({ room: Y, onRoomSuccessExit: X }),
                    J = (0, c.c)(async (e) => {
                        e &&
                            B.isAuthorized &&
                            !$ &&
                            !Z &&
                            (await P.getData(),
                            P.isRejected && K((0, a.jsx)(A.h, { error: H({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                    }),
                    ee = (0, c.c)(() => {
                        J(!0);
                    }),
                    et = (0, c.c)((e) => {
                        e.stopPropagation();
                    }),
                    ei = (0, c.c)(async (e) => {
                        $ || (await G(e), z());
                    }),
                    ea = (0, d.L)(() =>
                        V && Y && !D
                            ? (0, a.jsx)(k.A, {
                                  text: Y.name,
                                  className: M().renameInput,
                                  onChangeFinish: ei,
                                  readOnly: $,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: H({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': H({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': l.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    er = (0, d.L)(() =>
                        F
                            ? (0, a.jsx)('div', {
                                  className: M().loader,
                                  'data-test-id': l.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, a.jsx)(v.y, { size: 'xs' }),
                              })
                            : Y
                              ? (0, a.jsx)(j.J, { room: Y, className: R, onRenameClick: W, onPinClick: Q, onExitClick: q, isExitPending: Z, isRenamePending: $ })
                              : null,
                    ),
                    en = (0, a.jsxs)(a.Fragment, {
                        children: [
                            er,
                            Y && !F && (0, a.jsx)(m.c, { className: M().divider }),
                            (0, a.jsx)(p.Dr, {
                                className: R,
                                icon: (0, a.jsx)(_.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: U,
                                'data-test-id': l.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, a.jsxs)('span', {
                                    className: M().collection,
                                    children: [
                                        (0, a.jsx)(o.A, { id: 'interface-actions.show-all' }),
                                        (0, a.jsx)(g.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: M().description,
                                            children: (0, a.jsx)(o.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                if (O) return O({ context: null != (t = null == Y ? void 0 : Y.name) ? t : w, contextControl: ea, onOpenChange: J, children: en });
                let es = null != (n = null != (i = null == Y ? void 0 : Y.name) ? i : w) ? n : L.title,
                    eo = H({ id: 'interface-actions.context-menu' });
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(M().controls, { [M().controls_renaming]: !!ea }),
                    onClick: et,
                    onDoubleClick: et,
                    onKeyDown: et,
                    children: [
                        ea,
                        (0, a.jsx)(p.W1, {
                            className: M().contextMenuButton,
                            wrapperClassName: (0, r.$)({ [M().contextMenu_hidden]: !!ea }),
                            menuClassName: D ? void 0 : M().contextMenu,
                            isMobile: D,
                            size: 'xs',
                            variant: 'text',
                            icon: (0, a.jsx)(_.I, { variant: 'more', size: 'xs' }),
                            ariaLabel: es ? ''.concat(es, ': ').concat(eo) : eo,
                            onShow: ee,
                            returnFocus: !ea,
                            'data-test-id': l.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                            children: en,
                        }),
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
                o = i(97956),
                l = i(90420),
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
                                    if (t.stationId !== l.M1) return e.title;
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
                                return e.seeds.length > 0 && e.seeds.every((e) => e !== l.M1 && e !== l.yx && !e.startsWith('playlist:'));
                            },
                            get isShareEnabled() {
                                return t.isLikeEnabled && t.stationType !== l.q7 && t.stationType !== l.N7;
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
                                return t.checkExperiment(o.z.WebNextWaveAgentExperiment, 'on');
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
                            return i.checkExperiment(o.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
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
                o = i(16782),
                l = i.n(o);
            let c = (e) => {
                let { isActive: t, coverRadius: i = 'm', withDescription: o, className: c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(l().start, c),
                    children: [
                        (0, a.jsx)(n.t, {
                            className: l().coverContainer,
                            radius: i,
                            children: (0, a.jsx)(s.W, { isActive: t, className: l().shimmerCover, radius: 'xl' }),
                        }),
                        (0, a.jsxs)('div', {
                            className: l().textShimmerContainer,
                            children: [
                                (0, a.jsx)(s.W, { isActive: t, className: l().shimmerTitle, radius: 'xl' }),
                                o && (0, a.jsx)(s.W, { isActive: t, className: l().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
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
        44378: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => B });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(87999),
                d = i(64543),
                u = i(33979),
                m = i(80643),
                _ = i(49784),
                p = i(62414),
                v = i(17392),
                g = i(29993),
                x = i(90688),
                h = i(29504),
                y = i(81438),
                f = i(55693),
                b = i(47964),
                C = i(72288),
                A = i(8655),
                k = i(69704),
                T = i(49176),
                E = i(34303),
                I = i(76168),
                S = i(35402),
                N = i(62270),
                j = i.n(N),
                L = i(76816),
                M = i(34945);
            let w = async (e, t) => {
                let { loop: i = !1, markerId: a, frameRange: r, mode: n = 'forward' } = t,
                    s = null,
                    o = null;
                if (a) {
                    let t = e.markers().find((e) => e.name === a);
                    if (!t) return;
                    ((s = t.time), (o = t.time + t.duration));
                } else if (r) {
                    var l;
                    ((s = r.start), (o = null != (l = r.end) ? l : e.totalFrames));
                }
                null !== s &&
                    null !== o &&
                    (await Promise.all([e.setLoop(i), e.setMode(n), e.setSegment(s, o), e.setFrame('reverse' === n ? o : s)]), s !== o && (await e.play()));
            };
            var R = i(7019),
                O = i.n(R);
            let P = { align: [0, 0.5], fit: 'contain' },
                D = { autoResize: !0, freezeOnOffscreen: !1 },
                B = (0, n.PA)((e) => {
                    var t, i, n, N, R;
                    let { animationByTheme: B, animationConfig: H, className: K, controls: U, lumenImages: V, requestAwakeLumenModal: W, vibe: z } = e,
                        { formatMessage: Y } = (0, o.A)(),
                        F = (0, l.useSearchParams)(),
                        G = (0, I.z)(),
                        { screen: $ } = (0, d.j)(),
                        X = null == $ ? void 0 : $.pageIdForFrom,
                        { block: Q } = (0, d.j)(),
                        q = null == Q ? void 0 : Q.blockIdForFrom,
                        { sendPlaySearchFeedback: Z } = (0, f.z)(),
                        J = (0, u.g)(),
                        ee = (0, m.S)();
                    (0, _.W)();
                    let et = (0, p.D)(),
                        ei = (0, k.W)(),
                        { lumen: ea } = (0, C.g)(),
                        { cover: er, fallbackImage: en } = (0, y.x)(),
                        es = 'true' === F.get(E.K.LUMEN_AWAKE_PARAM),
                        eo = ea.isEnabled && !ea.isTriedToLoadData,
                        el = ea.isEnabled && !ea.isAwakened,
                        ec = null != (t = ei.theme) ? t : A.S.Dark,
                        ed = (0, s.useRef)(!1),
                        eu = (0, s.useRef)(H[z ? 'idle' : 'loading']),
                        em = (0, s.useRef)(void 0),
                        [e_, ep] = (0, s.useState)(null),
                        {
                            isPlaying: ev,
                            togglePlay: eg,
                            isCurrent: ex,
                        } = (0, b.B)({ blockIdForFrom: q, pageIdForFrom: X, seeds: null != (i = null == z ? void 0 : z.seeds) ? i : [] });
                    ((0, s.useEffect)(() => {
                        if (!e_ || ed.current) return;
                        let e = () => {
                            ((ed.current = !0), w(e_, eu.current));
                        };
                        return (e_.addEventListener('load', e), () => e_.removeEventListener('load', e));
                    }, [e_]),
                        (0, s.useEffect)(() => {
                            let e = ((e, t, i, a) =>
                                i || e === (null == a ? void 0 : a.loading)
                                    ? t
                                        ? null == a
                                            ? void 0
                                            : a.playing
                                        : e === a.playing
                                          ? null == a
                                              ? void 0
                                              : a.paused
                                          : e === a.loading
                                            ? null == a
                                                ? void 0
                                                : a.idle
                                            : null
                                    : null == a
                                      ? void 0
                                      : a.loading)(eu.current, ev, !!z, H);
                            e && e !== eu.current && ((eu.current = e), e_ && ed.current && w(e_, e));
                        }, [H, e_, ex, ev, z]));
                    let eh = (0, g.c)(() => {
                        (em.current === (null == z ? void 0 : z.seedsId) || ev || ((em.current = null == z ? void 0 : z.seedsId), null == Z || Z()), eg(), ev || J());
                    });
                    (0, s.useEffect)(() => {
                        es && !eo && z && (el && (null == W || W(eh)), G([E.K.LUMEN_AWAKE_PARAM]));
                    }, [W, G, es, el, eo, eh, z]);
                    let ey = (0, g.c)(() => {
                            if (z) {
                                if (ev) return void eg();
                                if (el) {
                                    (ee({ to: c.AppScreen.LumenAwakeningScreen }), null == W || W(eh));
                                    return;
                                }
                                eh();
                            }
                        }),
                        ef = (0, g.c)((e) => {
                            (e.code === T.v.SPACE || e.code === T.v.ENTER) && (e.preventDefault(), ey());
                        }),
                        eb = null != (n = null == z ? void 0 : z.title) ? n : Y({ id: 'entity-names.query-to-vibe-loading-title' }),
                        eC = null != (N = null == z ? void 0 : z.description) ? N : Y({ id: 'entity-names.query-to-vibe-loading-description' }),
                        eA = !ea.isEnabled || ea.isTriedToLoadData,
                        ek = ea.isEnabled ? er : null != (R = null == V ? void 0 : V[ec]) ? R : en,
                        eT = z ? v.OA.vibe.QUERY_TO_VIBE_BLOCK : v.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                        eE = z && (!ea.isEnabled || ea.isTriedToLoadData);
                    return (0, a.jsxs)('div', {
                        'aria-label': eb,
                        'aria-description': eC,
                        className: (0, r.$)(j().root, O().root, { [O().root_loading]: !z, [O().root_withControls]: U }, K),
                        tabIndex: 0,
                        onClick: ey,
                        onKeyDown: ef,
                        'data-test-id': eT,
                        children: [
                            (0, a.jsx)(S.j, { className: O().comet, layout: P, src: B[null != ec ? ec : A.S.Dark], renderConfig: D, dotLottieRefCallback: ep }),
                            (0, a.jsxs)('div', {
                                className: O().iconContainer,
                                children: [
                                    ex && (0, a.jsx)(M.P, { className: O().iconPulse, stopAnimation: !ev }),
                                    eA &&
                                        (0, a.jsx)(x._V, {
                                            className: O().icon,
                                            src: ek,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            withLoadingIndicator: !1,
                                        }),
                                ],
                            }),
                            (0, a.jsx)(L.r, {
                                className: O().meta,
                                title: (0, a.jsx)(h.HL, {
                                    className: (0, r.$)(j().text, j().titleText, O().caption),
                                    size: 'm',
                                    variant: 'div',
                                    type: 'text',
                                    children: eb,
                                }),
                                description: eC,
                                titleLineClamp: 2,
                            }),
                            U && (0, a.jsx)('div', { className: O().controls, children: U }),
                            eE && (0, a.jsx)('div', { ref: et }),
                        ],
                    });
                });
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(88800),
                r = i(84961),
                n = i(17392),
                s = i(52300),
                o = i(19934),
                l = i(108),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    v = (0, l.$)(t, u);
                return (0, a.jsx)(o.Dr, {
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
        49176: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var a = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50811: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPage: () => eI });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(88969),
                l = i(87999),
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
                            o = t(s, 'day', { numeric: 'auto' }),
                            l = e(i, { day: 'numeric', month: 'long' });
                        switch (s) {
                            case 0:
                            case -1:
                            case -2:
                                if (a) return ''.concat(o, ', ').concat(l);
                                return o;
                            default:
                                return l;
                        }
                    },
                    [e, t],
                );
            };
            var g = i(99711),
                x = i(90233),
                h = i(28119),
                y = i(34961),
                f = i(53892),
                b = i(72288);
            let C = (0, s.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var A = i(18593),
                k = i(13946),
                T = i(84384),
                E = i(18486),
                I = i(42123);
            let S = (e) => {
                    let { entityId: t, from: i } = e;
                    return { contextData: { type: A.K.Various, meta: { id: t }, from: i }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                N = (e) => {
                    let { id: t, tabIndex: i, blockIndex: a, trackIndex: r } = e,
                        n = (0, y.s)(f.n.MUSIC_HISTORY),
                        o = (0, s.useId)(),
                        l = (0, s.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, s.useContext)(C);
                    return (
                        (0, s.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(i, '_').concat(a, '_').concat(r, '_').concat(t) : ''.concat(i, '_').concat(a, '_').concat(t),
                                s = n.indexesMap.get(e);
                            n.isInObservationRange(s) &&
                                c({
                                    elementRef: l,
                                    elementId: o,
                                    index: s,
                                    onShow() {
                                        (n.getItems(this.index), d(o));
                                    },
                                });
                        }, [a, t, o, n, c, i, r, d]),
                        { intersectionPropertyId: o, ref: l }
                    );
                };
            var j = i(14347),
                L = i(10829),
                M = i(98644),
                w = i(93015),
                R = i(72713),
                O = i.n(R);
            let P = (0, n.PA)((e) => {
                let { type: t, track: i, artists: r, tabIndex: n, blockIndex: s, trackIndex: o, playContextParams: l } = e,
                    { ref: c, intersectionPropertyId: d } = N({ id: i.id, tabIndex: n, blockIndex: s, trackIndex: o });
                return i.isShimmerVisible || !i.data
                    ? (0, a.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, a.jsx)(w.D, {
                              isActive: i.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: O().trackShimmer,
                              variant: t === A.K.Album ? M.X.ALBUM : M.X.PLAYLIST,
                          }),
                      })
                    : t === A.K.Album
                      ? (0, a.jsx)(j.F, { track: i.data, position: i.data.index, albumArtists: r, playContextParams: l })
                      : (0, a.jsx)(L.K, { track: i.data, playContextParams: l });
            });
            var D = i(54719),
                B = i.n(D);
            let H = (0, n.PA)((e) => {
                    var t, i, n, l, c;
                    let { album: u, tabIndex: m, blockIndex: p } = e,
                        { ref: v, intersectionPropertyId: g } = N({ id: u.id, tabIndex: m, blockIndex: p }),
                        { from: x } = (0, T.f)({ blockId: 'album-'.concat(u.id) }),
                        h = (0, s.useMemo)(() => {
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
                        y = (0, s.useMemo)(() => {
                            var e, t, i;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(I.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(E.T, {
                                      className: B().header,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: h,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = u.meta) ? void 0 : i.url,
                                      available: u.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!h,
                                  });
                        }, [
                            u.available,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (n = u.meta) ? void 0 : n.coverUri,
                            null == (l = u.meta) ? void 0 : l.title,
                            null == (c = u.meta) ? void 0 : c.url,
                            h,
                        ]),
                        f = (0, s.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = S({ entityId: e.entityId, from: x });
                                    return (0, a.jsx)(
                                        P,
                                        { type: A.K.Album, track: e, playContextParams: r, tabIndex: m, blockIndex: p, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, x, m, p],
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
                                children: (0, a.jsx)(o.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, a.jsx)('div', { className: B().content, children: f }),
                        ],
                    });
                }),
                K = (0, n.PA)((e) => {
                    var t, i, n;
                    let { artist: l, tabIndex: c, blockIndex: u } = e,
                        { ref: m, intersectionPropertyId: p } = N({ id: l.id, tabIndex: c, blockIndex: u }),
                        { from: v } = (0, T.f)({ blockId: 'artist-'.concat(l.id) }),
                        g = (0, s.useMemo)(() => {
                            var e, t, i;
                            return l.isShimmerVisible
                                ? (0, a.jsx)(I.M, { isActive: l.isShimmerActive, className: B().header, coverRadius: 'round' })
                                : (0, a.jsx)(E.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: B().header,
                                      coverUrl: null == (e = l.meta) ? void 0 : e.coverUri,
                                      title: null == (t = l.meta) ? void 0 : t.name,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = l.meta) ? void 0 : i.url,
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
                            null == (i = l.meta) ? void 0 : i.name,
                            null == (n = l.meta) ? void 0 : n.url,
                        ]),
                        x = (0, s.useMemo)(
                            () =>
                                l.tracks.map((e, t) => {
                                    var i;
                                    let r = S({ entityId: e.entityId, from: v });
                                    return (0, a.jsx)(
                                        P,
                                        { type: A.K.Artist, track: e, playContextParams: r, tabIndex: c, blockIndex: u, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [l.tracks, v, c, u],
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
                                children: (0, a.jsx)(o.A, { id: 'music-history.artist' }),
                            }),
                            g,
                            (0, a.jsx)('div', { className: B().content, children: x }),
                        ],
                    });
                });
            var U = i(33586),
                V = i(20584),
                W = i(93039);
            let z = (0, n.PA)((e) => {
                    let { common: t, tabIndex: i, blockIndex: n } = e,
                        { ref: l, intersectionPropertyId: c } = N({ id: t.id, tabIndex: i, blockIndex: n }),
                        { from: u } = (0, T.f)(),
                        m = ((e) =>
                            (0, s.useMemo)(
                                () => (e === g.D.SEARCH ? (0, W.t)({ contextType: A.K.Various, contextId: '', entityContextType: V.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, s.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let s = S({ entityId: e.entityId, from: u });
                                    return (0, a.jsx)(
                                        P,
                                        { playContextParams: s, type: A.K.Various, track: e, tabIndex: i, blockIndex: n, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, u, i, n],
                        ),
                        v = (0, s.useMemo)(() => {
                            switch (t.type) {
                                case g.D.OTHER:
                                    return (0, a.jsx)(o.A, { id: 'music-history.shuffle' });
                                case g.D.SEARCH:
                                    return (0, a.jsx)(o.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, a.jsx)(U._, {
                        sourceContextData: m,
                        children: (0, a.jsxs)('section', {
                            className: B().root,
                            ref: l,
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
                Y = (0, n.PA)((e) => {
                    var t, i, n, l, c;
                    let { playlist: u, tabIndex: m, blockIndex: v } = e,
                        { ref: g, intersectionPropertyId: x } = N({ id: u.id, tabIndex: m, blockIndex: v }),
                        { from: h } = (0, T.f)({ blockId: u.isResolved ? 'playlist-'.concat(null == (t = u.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, p.A)(),
                        f = (0, s.useMemo)(() => {
                            var e, t, i, r;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(I.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(E.T, {
                                      className: B().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleClassName: B().headerTitle,
                                      description: y({ id: 'entity-names.number-of-tracks' }, { counter: null == (i = u.meta) ? void 0 : i.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = u.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            y,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (i = u.meta) ? void 0 : i.coverUri,
                            null == (n = u.meta) ? void 0 : n.title,
                            null == (l = u.meta) ? void 0 : l.tracksCount,
                            null == (c = u.meta) ? void 0 : c.url,
                        ]),
                        b = (0, s.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = S({ entityId: e.entityId, from: h });
                                    return (0, a.jsx)(
                                        P,
                                        { playContextParams: r, type: A.K.Playlist, track: e, tabIndex: m, blockIndex: v, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, h, m, v],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: g,
                        'data-intersection-property-id': x,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, a.jsx)(o.A, { id: 'music-history.playlist' }),
                            }),
                            f,
                            (0, a.jsx)('div', { className: B().content, children: b }),
                        ],
                    });
                });
            var F = i(39631),
                G = i(39585),
                $ = i(64284);
            let X = (0, n.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: i, blockIndex: n, tabIndex: o } = e,
                    l = (0, F._)(),
                    { ref: c, intersectionPropertyId: u } = N({ id: i.id, blockIndex: n, tabIndex: o }),
                    { from: m } = (0, T.f)({ blockId: ''.concat($.U.RADIO, '-').concat($.U.Q2V, '-').concat(i.id) }),
                    _ = (0, s.useMemo)(
                        () =>
                            i.tracks.map((e, t) => {
                                var i;
                                let r = S({ entityId: e.entityId, from: m });
                                return (0, a.jsx)(
                                    P,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: n, tabIndex: o, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [i.tracks, m, o, n],
                    );
                return i.meta
                    ? (0, a.jsxs)('section', {
                          className: B().root,
                          ref: c,
                          'data-intersection-property-id': u,
                          'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, a.jsx)(G.K, { className: (0, r.$)(B().queryToVibeHeader, B().heading), requestAwakeLumenModal: t, vibe: i.meta, controls: l(i.meta) }),
                              (0, a.jsx)('div', { className: B().content, children: _ }),
                          ],
                      })
                    : null;
            });
            var Q = i(64543),
                q = i(29993),
                Z = i(79070),
                J = i(55211),
                ee = i(5407),
                et = i(47964),
                ei = i(97956),
                ea = i(90420),
                er = i(52726),
                en = i(8990),
                es = i(39267);
            let eo = (0, n.PA)((e) => {
                var t, i, n, l, c, u;
                let { vibe: m, blockIndex: p, tabIndex: v } = e,
                    {
                        experiments: g,
                        settings: { isMobile: x },
                        freeAccess: h,
                    } = (0, b.g)(),
                    { screen: y, block: f } = (0, Q.j)(),
                    C = null == y ? void 0 : y.pageIdForFrom,
                    { blockIdForFrom: k } = null != f ? f : {},
                    j = (0, ee.P)(),
                    [L, M] = (0, s.useState)(!1),
                    {
                        isPlaying: w,
                        togglePlay: R,
                        isCurrent: O,
                    } = (0, et.B)({ seeds: (null == (t = m.meta) ? void 0 : t.seeds) || [ea.M1], pageIdForFrom: C, blockIdForFrom: k }),
                    D = (0, s.useId)(),
                    H = g.checkExperiment(ei.z.WebNextVibeDescription, 'on'),
                    K = m.isMultivibe,
                    U = (0, F._)()(m.meta),
                    V = K ? 'xs' : 'm',
                    { ref: W, intersectionPropertyId: z } = N({ id: m.id, blockIndex: p, tabIndex: v }),
                    { from: Y } = (0, T.f)({ blockId: 'wave-'.concat(m.id) }),
                    G = (0, q.c)(() => {
                        if (!j()) {
                            if (h.isVibeStartRestricted) return void M(!0);
                            R();
                        }
                    }),
                    $ = (0, q.c)((e) => {
                        if (x || 2 === e.detail) return void G();
                    }),
                    X = (0, Z.L)(() => {
                        var e, t, i, a, r, n, s, o;
                        return H
                            ? {
                                  title: null == (e = m.meta) ? void 0 : e.title,
                                  description:
                                      null == (a = m.meta)
                                          ? void 0
                                          : a.getDescription(null != (o = null == (t = m.meta) ? void 0 : t.title) ? o : null == (i = m.meta) ? void 0 : i.description),
                              }
                            : { title: null != (s = null == (r = m.meta) ? void 0 : r.title) ? s : null == (n = m.meta) ? void 0 : n.description };
                    }),
                    eo = (0, s.useCallback)(() => {
                        var e, t, i, n, s;
                        return (null == (e = m.meta) ? void 0 : e.shouldShowAgent) && (null == (t = m.meta) ? void 0 : t.agent)
                            ? (0, a.jsx)(J.n, {
                                  agent: m.meta.agent,
                                  isPlaying: w,
                                  isCurrent: O,
                                  onPlayButtonClick: G,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: K }),
                                  playButtonIconSize: V,
                                  fallbackIconSize: V,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: K }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: K }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: K }),
                              })
                            : (0, a.jsx)(es.q, {
                                  isCurrent: O,
                                  isPlaying: w,
                                  isAvailable: !0,
                                  onPlayButtonClick: G,
                                  title: null == (i = m.meta) ? void 0 : i.title,
                                  entityCoverStyle: { backgroundColor: null == (n = m.meta) ? void 0 : n.backgroundColor },
                                  ariaDescribedBy: D,
                                  coverUri: null == (s = m.meta) ? void 0 : s.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: K }),
                                  playButtonIconSize: V,
                                  fallbackIconSize: V,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: K }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: K }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: K }),
                              });
                    }, [
                        G,
                        O,
                        w,
                        D,
                        null == (i = m.meta) ? void 0 : i.agent,
                        null == (n = m.meta) ? void 0 : n.backgroundColor,
                        null == (l = m.meta) ? void 0 : l.imageUrl,
                        null == (c = m.meta) ? void 0 : c.shouldShowAgent,
                        null == (u = m.meta) ? void 0 : u.title,
                        K,
                        V,
                    ]),
                    el = (0, Z.L)(() => {
                        var e;
                        return m.isShimmerVisible
                            ? (0, a.jsx)(I.M, { isActive: m.isShimmerActive, className: B().header, coverRadius: 'round' })
                            : (0, a.jsxs)(en.C, {
                                  className: (0, r.$)(B().header, B().vibeHeader),
                                  onClick: $,
                                  'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, a.jsx)(er.S, {
                                          isOpened: L,
                                          onOpenChange: M,
                                          isEnabled: h.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = m.meta) ? void 0 : e.stationType,
                                          renderChildren: eo,
                                      }),
                                      (0, a.jsx)(E.T, {
                                          titleSize: 'xs',
                                          titleLineClamp: 1,
                                          headingVariant: 'h4',
                                          labeledForId: D,
                                          className: (0, r.$)(B().vibeTextBlock, { [B().vibeTextBlock_withControls]: U }),
                                          ...X,
                                      }),
                                      U,
                                  ],
                              });
                    }),
                    ec = (0, s.useMemo)(
                        () =>
                            m.tracks.map((e, t) => {
                                var i;
                                let r = S({ entityId: e.entityId, from: Y });
                                return (0, a.jsx)(
                                    P,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: p, tabIndex: v, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [m.tracks, Y, v, p],
                    );
                return (0, a.jsxs)('section', {
                    className: B().root,
                    ref: W,
                    'data-intersection-property-id': z,
                    'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !H &&
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, a.jsx)(o.A, { id: 'music-history.my-vibe' }),
                            }),
                        el,
                        (0, a.jsx)('div', { className: B().content, children: ec }),
                    ],
                });
            });
            var el = i(67841),
                ec = i.n(el);
            let ed = (0, n.PA)((e) => {
                let { tab: t, tabIndex: i, onTabShowOrHide: r, shouldHideInactiveTab: n, ...o } = e,
                    { lumen: l } = (0, b.g)(),
                    c = (0, y.s)(f.n.MUSIC_HISTORY),
                    { awakeLumenModal: u, requestAwakeLumenModal: m } = (0, x.z)(),
                    p = (0, h.f)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case g.D.ALBUM:
                                              return (0, a.jsx)(H, { album: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.PLAYLIST:
                                              return (0, a.jsx)(Y, { playlist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.MULTIVIBE_WAVE:
                                          case g.D.WAVE:
                                              return (0, a.jsx)(eo, { vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.ARTIST:
                                              return (0, a.jsx)(K, { artist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.SEARCH:
                                          case g.D.OTHER:
                                              return (0, a.jsx)(z, { common: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.QUERY_TO_VIBE:
                                              return p
                                                  ? (0, a.jsx)(X, { requestAwakeLumenModal: m, vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, i, p, m]),
                    k = v(),
                    T = (0, s.useRef)(null),
                    { observeElement: E } = (0, s.useContext)(C),
                    I = c.datesMap.get(t.date);
                return (
                    (0, s.useEffect)(() => {
                        E({
                            elementId: t.date,
                            elementRef: T,
                            index: 0,
                            onShow: () => {
                                (c.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (c.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [c, c.datesMap, E, r, t.date]),
                    (0, s.useEffect)(() => {
                        l.isEnabled && l.getData();
                    }, [l]),
                    (0, a.jsxs)('div', {
                        'aria-hidden': !I && n,
                        ref: T,
                        'data-intersection-property-id': t.date,
                        className: ec().root,
                        ...o,
                        ...{ inert: !!(!I && n) },
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
                ex = i(60266),
                eh = i(56248),
                ey = i(87366),
                ef = i(76099),
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
                        o = (0, s.useCallback)(
                            (e) => {
                                let t = i.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        l = (0, s.useMemo)(() => ({ observeElement: n, unobserveElement: o }), [n, o]);
                    return (0, a.jsx)(C.Provider, { value: l, children: t });
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
                eT = i.n(ek),
                eE = i(65600);
            let eI = (0, n.PA)(() => {
                let [e, t] = (0, s.useState)(!1),
                    i = (0, y.s)(f.n.MUSIC_HISTORY),
                    { contentScrollRef: n, setContentScrollRef: p } = (0, e_.g)(),
                    g = (0, m.zb)(0),
                    x = (0, s.useRef)(!1),
                    h = (0, s.useRef)(null),
                    b = (0, s.useCallback)(
                        async (e) => {
                            var a;
                            t(!0);
                            let r = i.dates[e];
                            if (!r) return;
                            (null == (a = g.onTabChange) || a.call(g, e), (x.current = !0));
                            let s = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (s && ((h.current = n), await eA(s, h)), (x.current = !1));
                        },
                        [i.dates, g, n],
                    ),
                    C = (0, s.useCallback)(() => {
                        if (x.current) return;
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
                            ? (0, a.jsx)(eu.SomethingWentWrong, { className: (0, r.$)(eT().error, eT().important), withBackwardControl: !1 })
                            : i.isShimmerVisible
                              ? (0, a.jsx)(eE.v, { isActive: i.isShimmerActive })
                              : i.isEmpty
                                ? (0, a.jsx)('div', {
                                      className: eT().empty,
                                      children: (0, a.jsx)(_.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, a.jsx)(o.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = i.tabs)
                                  ? void 0
                                  : t.map((t, i) =>
                                        (0, a.jsx)(ed, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: i, shouldHideInactiveTab: e }, i),
                                    );
                    }, [C, i.isEmpty, i.isRejected, i.isShimmerActive, i.isShimmerVisible, i.tabs, e]),
                    k = v(),
                    T = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(ef.wI, {
                                isShimmerVisible: i.isShimmerVisible,
                                className: eT().tabs,
                                ...g,
                                onTabChange: b,
                                shimmer: (0, a.jsx)(ef.zr, { className: eT().tabs, count: 5 }),
                                children: i.dates.map((e, t) =>
                                    (0, a.jsx)(
                                        ey.o,
                                        {
                                            className: (0, r.$)(eT().tab, { [eT().tab_selected]: t === g.value }),
                                            titleClassName: eT().date,
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
                        pageId: l.AppScreen.MusicHistoryScreen,
                        pageIdForFrom: em.b.HISTORY,
                        children: (0, a.jsxs)('div', {
                            className: eT().root,
                            'data-test-id': d.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: eT().headerContainer,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: eT().header,
                                            children: [
                                                (0, a.jsx)(eh.L, { withForwardControl: !1 }),
                                                (0, a.jsx)(_.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(o.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ev.F, { className: eT().carousel, carouselElement: T }),
                                    ],
                                }),
                                (0, a.jsxs)(u.N, {
                                    ref: p,
                                    className: eT().scroll,
                                    containerClassName: eT().scrollContainer,
                                    children: [
                                        (0, a.jsx)(eC, { children: (0, a.jsx)('div', { className: eT().content, children: A }) }),
                                        (0, a.jsx)(ex.A, { children: (0, a.jsx)(eg.w, { className: eT().footer }) }),
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
                    o = e.getAvailableLanguages(),
                    l = (0, a.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, a.useMemo)(() => ({ dictionary: s, language: t, defaultLanguage: i, availableLanguages: o, setLanguage: l }), [t, l]);
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, r, n, s;
                let o = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((o = null == (n = null == (a = e.contentRestrictions) ? void 0 : a.available) || n),
                        (l = null != (s = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? s : [])),
                    { available: o, disclaimers: l }
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
            i.d(t, { s: () => o });
            var a = i(5120),
                r = i(14283),
                n = i(51724),
                s = i(12906);
            let o = (e) => {
                var t, i;
                let { album: o, artists: l, bookmateOptionRequired: c, chart: d, likesCount: u, trailer: m, releaseYear: _, releaseDate: p } = e,
                    { available: v, disclaimers: g } = (0, n.f)(o);
                return (0, a.wg)({
                    // for PulseSync WebHost: BEGIN normalize addon album IDs to numbers
                    id: Number(o.id),
                    // for PulseSync WebHost: END normalize addon album IDs to numbers
                    title: o.title,
                    // for PulseSync WebHost: BEGIN accept addon album cover and album-type metadata
                    coverUri: (null == (t = o.cover) ? void 0 : t.uri) ?? o.coverUri ?? o.ogImage,
                    type: o.albumType ?? o.type,
                    // for PulseSync WebHost: END accept addon album cover and album-type metadata
                    disclaimers: g,
                    artists: null == l ? void 0 : l.map((e) => (0, r.a)({ artist: e })),
                    averageColor: null == (i = o.cover) ? void 0 : i.color,
                    isAvailable: v,
                    likesCount: u,
                    bookmateOptionRequired: c,
                    chart: d,
                    trailer: (0, s.m)(m),
                    // for PulseSync WebHost: BEGIN accept addon album year and release-date metadata
                    year: _ ? Number(_) : o.year,
                    releaseDate: p ?? o.releaseDate,
                    // for PulseSync WebHost: END accept addon album year and release-date metadata
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
                o = i(2058),
                l = i(17392),
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
                        onBackwardClick: x,
                    } = e,
                    { formatMessage: h } = (0, o.A)(),
                    { canBack: y, canForward: f, moveBack: b, moveForward: C } = (0, m.J)(v),
                    A = (0, s.useRef)(null),
                    k = (0, c.c)((e) => {
                        if ((e.stopPropagation(), x)) return void x();
                        b();
                    }),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    });
                return (
                    (0, s.useEffect)(() => {
                        n && A.current && y && A.current.focus();
                    }, [y]),
                    (0, a.jsxs)('div', {
                        className: (0, r.$)(p().root, _),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(d.$, {
                                    ref: A,
                                    'aria-label': h({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: k,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, a.jsx)(d.$, {
                                    'aria-label': h({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: T,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
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
                o = i(96817),
                l = i(52300),
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
                            style: x,
                            children: h,
                        } = e,
                        { formatMessage: y } = (0, n.A)(),
                        f = y({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(o.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: _,
                        ref: g,
                        icon: (0, a.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: h,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                s = i(29993),
                o = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let [t, i] = (0, r.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    m = (0, r.useRef)(!1),
                    { formatMessage: _ } = (0, n.A)();
                return {
                    editVibeRoom: (0, s.c)(async (t) => {
                        e &&
                            !m.current &&
                            (i(!0),
                            (m.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                u((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }),
                            i(!1),
                            (m.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => A });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(62414),
                l = i(33979),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                m = i(9618),
                _ = i(4795),
                p = i(55693),
                v = i(7123),
                g = i(72288),
                x = i(8990),
                h = i(2058),
                y = i(47580),
                f = i(95993),
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
                        playButtonCellRender: T,
                        withLightning: E,
                        isPlaying: I,
                        isCurrent: S,
                        togglePlay: N,
                        restartPlay: j,
                        onPlayClick: L,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: P } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: H },
                        album: K,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: V },
                    } = (0, g.g)(),
                    W = (0, o.D)(),
                    z = (0, l.g)(),
                    Y = (0, u.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, h.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: r } = t,
                                n = (0, y.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: E, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    $ = U(K.id, null == (t = K.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && O && !$,
                    Q = (0, _.N)(),
                    q = n.isAvailable && Q && !$ && !w,
                    Z = (0, f.w)({ track: n, callback: N }),
                    J = (0, c.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, f.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, ea] = (0, s.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!Y()) {
                            if (X) return void P();
                            if (q) return void V.open();
                            (ei || I || (ea(!0), null == et || et()), Z(), I || z(), null == L || L(!I));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (I) return void j();
                        er();
                    }),
                    es = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (O && n.isAvailableOnlyForPlus && P(), Q && n.isAvailableOnlyForPlus && V.open());
                            return;
                        }
                        if (X) return void P();
                        let t = !H && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return q && !t
                            ? void V.open()
                            : ((0, d.P)(e, C().ripple), H)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), q && V.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: I, isCurrent: S, isLoading: G, playButtonIconSize: M });
                return (0, a.jsxs)(x.C, {
                    ref: W,
                    'aria-label': F,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: es,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: S && H }, i),
                    ...R,
                    children: [A, eo, b, k],
                });
            });
        },
        58423: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 8824)), Promise.resolve().then(i.bind(i, 50811)), Promise.resolve().then(i.bind(i, 20562)));
        },
        59265: (e) => {
            e.exports = {
                controls: 'MultivibeContextMenu_controls__YNvPC',
                controls_renaming: 'MultivibeContextMenu_controls_renaming__ojUjw',
                contextMenu: 'MultivibeContextMenu_contextMenu__F1lu5',
                contextMenu_hidden: 'MultivibeContextMenu_contextMenu_hidden__01LaD',
                contextMenuButton: 'MultivibeContextMenu_contextMenuButton__7_r0x',
                collection: 'MultivibeContextMenu_collection__7dnDT',
                description: 'MultivibeContextMenu_description__v_EaQ',
                divider: 'MultivibeContextMenu_divider__84xJC',
                loader: 'MultivibeContextMenu_loader__iTBIV',
                renameInput: 'MultivibeContextMenu_renameInput___vU4d',
            };
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
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
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
                            o = a(i(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, r.jsx)('a', {}),
                                        block: i,
                                        target: a,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: _,
                                        className: p,
                                        children: v,
                                        textClassName: g = '',
                                        containerClassName: x,
                                        ...h
                                    } = e,
                                    y = (0, n.useId)(),
                                    f = !n.Children.count(v),
                                    b = 'left' === u,
                                    C = null;
                                if (void 0 !== _) {
                                    var A;
                                    C = (0, n.cloneElement)(_, {
                                        className: (0, s.clsx)(
                                            o.default.icon,
                                            { [o.default['icon_position_'.concat(u)]]: !f && u },
                                            null == (A = _.props) ? void 0 : A.className,
                                        ),
                                        key: y,
                                    });
                                }
                                let k = (0, n.useMemo)(
                                    () =>
                                        _
                                            ? (0, r.jsxs)('div', {
                                                  className: (0, s.clsx)(o.default.iconContainer, x),
                                                  children: [b && C, !f && (0, r.jsx)('span', { className: g, children: v }), !b && C],
                                              })
                                            : v,
                                    [v, x, _, b, f, C, g],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: a,
                                        rel: '_blank' === a && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, s.clsx)(o.default.root, { [o.default.block]: i, [o.default.flexIcon]: _ && m, [o.default.iconOnly]: _ && f }, p),
                                        ...h,
                                        ...t.props,
                                    },
                                    k,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = o(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        65600: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => d });
            var a = i(88800),
                r = i(19994),
                n = i(98644),
                s = i(42123),
                o = i(93015),
                l = i(97766),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t } = e,
                    i = (0, a.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, a.jsx)(o.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(o.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(o.D, { isActive: t, variant: n.X.PLAYLIST }),
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
                let { playlist: n, generatedPlaylistType: s, likesCount: o, trailer: l, tracksCount: c } = e;
                return (0, a.wg)({
                    isAvailable: null == (i = n.available) || i,
                    uuid: n.playlistUuid,
                    title: n.title,
                    uid: n.uid,
                    kind: n.kind,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    generatedPlaylistType: s,
                    likesCount: o,
                    tracksCount: c,
                    trailer: (0, r.m)(l),
                });
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(87999),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                p = i(42174),
                v = i(96817);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, o.A)(),
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
                    icon: (0, a.jsx)(u.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                h = i(57934),
                y = i(55693),
                f = i(72288),
                b = i(49738),
                C = i(56446),
                A = i(64546),
                k = i(29831),
                T = i(30123),
                E = i(54965),
                I = i(1829),
                S = i(82092),
                N = i.n(S),
                j = i(79262),
                L = i(41867),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: M().downloadingProgress, progressBarClassName: M().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: v,
                            ignoreDislikedStyles: S,
                            onLikeClick: j,
                            utmLink: L,
                            withSecondaryColor: M,
                            handleRemove: R,
                            withTrailer: O = !0,
                            likeIconSize: P = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: H, trailer: K } = (0, f.g)(),
                        { formatMessage: U } = (0, o.A)(),
                        { sendLikeSearchFeedback: V } = (0, y.z)(),
                        [W, z] = (0, s.useState)(!1),
                        [Y, F] = (0, s.useState)(!1),
                        G = (0, x.P)(),
                        $ = (0, p.K)(n),
                        {
                            duration: X,
                            lightning: Q,
                            ugc: q,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, E.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, k.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: v, isUGC: n.isUGC }, U),
                        Z = (0, h.F)(),
                        J = H.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (W || n.isLiked || (z(!0), null == V || V()), await $(), null == j || j(n.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (K.openTrackTrailer(n.id), Z(l.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(I._, {
                                        track: n,
                                        open: Y,
                                        onOpenChange: F,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: L,
                                        className: (0, r.$)(N().contextMenu, { [N().contextMenu_visible]: Y }),
                                        handleRemove: R,
                                        withTrailer: O,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, Y, ee, O, n, L]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(N().root, N().controls, i, {
                            [N().controls_dislikedControls]: n.isDisliked,
                            [N().controls_dislikedColors]: n.isDisliked && !S,
                            [N().controls_disabled]: !n.isAvailable,
                            [N().root_withSecondaryColor]: M,
                        }),
                        children: [
                            Q && (0, a.jsx)(u.I, { 'aria-label': Q.label, size: 'xxs', className: N().lightning, variant: 'lightning' }),
                            q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': q.label,
                                            size: 'xxs',
                                            className: N().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: q.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(N().item, N().downloadIcon), children: (0, a.jsx)(w, { track: n }) }),
                            R && !B && (0, a.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(N().item, N().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(A.WithOffline, {
                                    fallback: (0, a.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: P,
                                        className: (0, r.$)(N().item, N().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !H.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, a.jsx)(A.WithOffline, {
                                    fallback: (0, a.jsx)(C.k, {
                                        className: (0, r.$)(N().item, N().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(N().item, N().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(N().duration, { [N().duration_hidden]: Y && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        76168: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var a = i(29993),
                r = i(72288),
                n = i(14912);
            let s = () => {
                let { location: e } = (0, r.g)(),
                    t = (0, n.X)();
                return (0, a.c)((i) => {
                    let a = new URL(window.location.href);
                    i.forEach((e) => a.searchParams.delete(e));
                    let r = a.toString();
                    (t(r), e.setHref(r), e.setSearchParams(a.searchParams.toString()));
                });
            };
        },
        76816: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => _ });
            var a = i(88800),
                r = i(65724),
                n = i(2058),
                s = i(17392),
                o = i(79070),
                l = i(52300),
                c = i(29504),
                d = i(90224),
                u = i(34250),
                m = i.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: p,
                        className: v,
                        version: g,
                        title: x,
                        artistsComponent: h,
                        likesCount: y,
                        isLiked: f,
                        releaseYear: b,
                        titleLineClamp: C = 1,
                    } = e,
                    { formatMessage: A, formatNumber: k } = (0, n.A)(),
                    T = (0, o.L)(() => {
                        let e = null == h ? void 0 : h((0, r.$)(m().text, m().artistLink), (0, r.$)(m().text, m().artistCaption));
                        if (!e && !y) return;
                        let t = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof y &&
                                    y > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': A({ id: 'entity-names.likes-counter' }, { counter: y }),
                                        'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(l.I, {
                                                className: m().icon,
                                                variant: f ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: k(y),
                                            }),
                                        ],
                                    }),
                                !!y && e && t,
                                e,
                                !!b && e && t,
                                (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: b }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(m().root, { [m().root_disabled]: i, [m().root_disliked]: t }, v),
                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, r.$)(m().text, m().title, { [m().title_withVersion]: g }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: C,
                                    type: 'text',
                                    'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        g &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, r.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(g),
                                            }),
                                    ],
                                }),
                                p && (0, a.jsx)(d.N, { className: m().explicitMark, getDescriptionTexts: _, variant: p }),
                            ],
                        }),
                        u &&
                            (0, a.jsx)(c.HL, {
                                className: (0, r.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': s.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        T,
                    ],
                });
            };
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
        81192: (e) => {
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
        81438: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => s });
            var a = i(72288),
                r = i(8655),
                n = i(69704);
            let s = () => {
                var e, t, i, s, o, l;
                let { lumen: c } = (0, a.g)(),
                    { theme: d } = (0, n.W)(),
                    u = null != d ? d : r.S.Dark,
                    m = null == (e = c.themes) ? void 0 : e[u],
                    _ = c.getFallbackImage()[u],
                    p = null != (s = null == m ? void 0 : m.cover.uri) ? s : _;
                return {
                    cover: p,
                    fullCover: null != (o = null == m || null == (t = m.fullCover) ? void 0 : t.uri) ? o : p,
                    faceCover: null != (l = null == m || null == (i = m.faceCover) ? void 0 : i.uri) ? l : p,
                    solidColor: null == m ? void 0 : m.solidColor,
                    fallbackImage: _,
                };
            };
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
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        82039: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
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
        83559: (e) => {
            e.exports = {
                root: 'HorizontalVibeControls_root__S1iQK',
                controls: 'HorizontalVibeControls_controls__AYIDP',
                bottom: 'HorizontalVibeControls_bottom__R4Elh',
                like: 'HorizontalVibeControls_like__ty4og',
                likeButton: 'HorizontalVibeControls_likeButton__77s_p',
                menu: 'HorizontalVibeControls_menu__83kQh',
                contextMenu: 'HorizontalVibeControls_contextMenu__rXU6_',
                contextMenuButton: 'HorizontalVibeControls_contextMenuButton__vX_59',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(2058),
                o = i(30282),
                l = i(94144),
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
                x = i(11006),
                h = i.n(x),
                y = i(17392),
                f = i(29504),
                b = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(h().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(b.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: h().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, a.jsx)(b.N, { target: '_blank', href: r, className: h().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(h().root, h().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, a.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: o } = (0, v.h)(),
                    l = u({ formatMessage: n, language: o, tld: i.tld, year: p(r) });
                return (0, a.jsx)(C, { className: t, data: l });
            });
            let T = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: _, user: x } = (0, g.g)(),
                    { formatDate: y, formatMessage: f } = (0, s.A)(),
                    { isEnabled: b } = null != (t = (0, l.P)()) ? t : {},
                    { language: C } = (0, v.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    _ = [s, l, u];
                                return (i && 'ru' === n && _.push(o), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, a.jsx)(k, { className: (0, r.$)({ [h().root_withOffsetForDeeplink]: b }, i), data: A });
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
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (s[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    (null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o));
                                }
                            );
                        }, [i, o]));
                    let l = (0, e.useMemo)(
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
                        swipeForward: l,
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
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => m });
            var a = i(88800),
                r = i(84961),
                n = i(88969),
                s = i(17392),
                o = i(52300),
                l = i(19934),
                c = i(21416),
                d = i(72288),
                u = i(27817);
            let m = (0, r.PA)((e) => {
                var t;
                let { room: i, onRenameClick: r, isRenamePending: m, onPinClick: _, onExitClick: p, isExitPending: v, className: g } = e,
                    {
                        settings: { isMobile: x },
                    } = (0, d.g)(),
                    h = !(null == i ? void 0 : i.isDisabled) && !x,
                    y = !(null == i ? void 0 : i.isDisabled) && !x;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        h && (0, a.jsx)(u.L, { className: g, onClick: _, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        y &&
                            (0, a.jsx)(l.Dr, {
                                className: g,
                                icon: (0, a.jsx)(o.I, { variant: 'edit', size: 'xxs' }),
                                onClick: r,
                                disabled: m,
                                spinner: m ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': s.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(l.Dr, {
                            className: g,
                            icon: (0, a.jsx)(o.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: p,
                            disabled: v,
                            spinner: v ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': s.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                _ = i(17332),
                p = i.n(_);
            let v = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: _, variant: v, iconVariant: iconOverride, size: g = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, o.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, u.g)(),
                    [f, b] = (0, s.useState)(null);
                (0, s.useEffect)(() => {
                    i && i().then(b);
                }, [i, n]);
                let {
                    iconVariant: C,
                    descriptionText: A,
                    isTooltipEnabled: k,
                    ariaLabel: T,
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
                })({ variant: v, descriptionTexts: f, isMobile: y }, h);
                return (0, a.jsx)(m.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: k,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        v === d.JU.SUBSTITUTED ? (0, a.jsxs)('svg', {
                            className: (0, r.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(g, ')'), height: 'var(--ym-icon-size-'.concat(g, ')') },
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, a.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, a.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, a.jsx)(c.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : C,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? g : g,
                            style: iconOverride ? { width: `var(--ym-icon-size-${g})`, height: `var(--ym-icon-size-${g})` } : undefined,
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        90233: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => I });
            var a = i(88800),
                r = i(53548),
                n = i(87999),
                s = i(76903),
                o = i(7833),
                l = i(29993),
                c = i(79070),
                d = i(98427),
                u = i(72288),
                m = i(65724),
                _ = i(84961),
                p = i(46462),
                v = i(17392),
                g = i(11372),
                x = i(6900),
                h = i(8655),
                y = i(29126),
                f = i.n(y),
                b = i(2058),
                C = i(54721),
                A = i(96817),
                k = i(51611);
            let T = (e) => {
                    let { isPlayButtonVisible: t, onPlayClick: i } = e,
                        { formatMessage: r } = (0, b.A)(),
                        { language: n } = (0, k.h)();
                    return (
                        (0, C.u)(),
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: f().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(n),
                                    'data-test-id': v.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, a.jsx)(A.$, {
                                    className: (0, m.$)(f().playButton, t && f().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: i,
                                    'data-test-id': v.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: r({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                },
                E = (0, _.PA)((e) => {
                    let { open: t, onOpenChange: i, onPlayAfterAwake: s } = e,
                        {
                            lumen: o,
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        [d, _] = (0, r.useState)(!1),
                        y = (0, p.I)(),
                        b = (0, l.c)(async (e) => {
                            let t = o.isAwakened;
                            try {
                                e || (await o.getData(!0));
                            } finally {
                                (e ||
                                    t ||
                                    !o.isAwakened ||
                                    y({
                                        actionType: n.ActionType.LumenAwakened,
                                        userInteractionType: n.UserInteractionType.Tap,
                                        entityId: n.EntityTypes.Button,
                                        entityType: n.EntityTypes.Button,
                                    }),
                                    i(e));
                            }
                        }),
                        C = (0, l.c)(() => b(!1)),
                        A = (0, l.c)(() => {
                            (s(), b(!1));
                        });
                    return (
                        (0, r.useEffect)(() => {
                            if (!t) return void _(!1);
                            let e = window.setTimeout(() => _(!0), o.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [t, o.playButtonShowDelay]),
                        (0, a.jsx)(g.a, {
                            open: t,
                            onOpenChange: b,
                            onClose: C,
                            placement: c ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, m.$)(f().root, (0, x.J)(h.S.Dark)),
                            headerClassName: f().header,
                            contentClassName: f().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: v.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': v.S7.AWAKE_LUMEN_MODAL,
                            children: (0, a.jsx)(T, { isPlayButtonVisible: d, onPlayClick: A }),
                        })
                    );
                }),
                I = () => {
                    let { lumen: e } = (0, u.g)(),
                        t = (0, r.useRef)(null),
                        [i, m] = (0, r.useState)(!1),
                        [_, p] = (0, r.useState)(0),
                        v = (0, l.c)((e) => {
                            ((t.current = e), i || (p((e) => e + 1), m(!0)));
                        }),
                        g = (0, l.c)(() => {
                            var e;
                            return null == (e = t.current) ? void 0 : e.call(t);
                        }),
                        x = (0, l.c)((e) => {
                            (e || (t.current = null), m(e));
                        });
                    return {
                        awakeLumenModal: (0, c.L)(() => {
                            if (e.isEnabled)
                                return (0, a.jsx)(
                                    s.a,
                                    {
                                        mainObjectId: '',
                                        mainObjectType: n.DomainObjectType.Lumen,
                                        pageId: n.AppScreen.LumenAwakeningScreen,
                                        pageIdForFrom: d.b.LUMEN_AWAKENING_SCREEN,
                                        pageStyle: n.PageStyles.Sheet,
                                        pagePlacement: n.PagePlacements.Bottom,
                                        children: (0, a.jsx)(o.B, {
                                            objectId: '',
                                            objectType: n.DomainObjectType.Lumen,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, a.jsx)(E, { open: i, onOpenChange: x, onPlayAfterAwake: g }),
                                        }),
                                    },
                                    _,
                                );
                        }),
                        requestAwakeLumenModal: v,
                    };
                };
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => _ });
            var a = i(88800),
                r = i(53548),
                n = i(12389),
                s = i.n(n),
                o = i(29993),
                l = i(65453),
                c = i(46079),
                d = i(67174);
            let u = (e) => {
                    let [t, i] = (0, r.useState)(!1),
                        n = (0, o.c)(() => {
                            i(!0);
                        });
                    return (0, a.jsx)(s(), { prefetch: t, ...e, onMouseEnter: n });
                },
                m = (e) => {
                    let { forwardedRef: t, href: i, component: n, ...o } = e,
                        { isPrefetchDisabled: m, isPrefetchOnHover: _ } = (0, r.useContext)(c.j),
                        { href: p, target: v, rel: g } = (0, d.u)(null != i ? i : ''),
                        x = (0, r.isValidElement)(n)
                            ? n
                            : (function (e, t, i) {
                                  return e ? (t ? (0, a.jsx)(s(), { prefetch: !1 }) : i ? (0, a.jsx)(u, { href: e }) : (0, a.jsx)(s(), {})) : (0, a.jsx)('a', {});
                              })(i, m, _);
                    return (0, a.jsx)(l.N, { ref: t, component: x, href: i ? p : void 0, target: v, rel: g, ...o });
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
                o = i(29595),
                l = i(74965),
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
                    { notify: x } = (0, l.l)(),
                    h = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, s] = (0, m.useState)(!1),
                            { formatMessage: v } = (0, r.A)();
                        return (0, n.c)(async (r) => {
                            let { album: n, withLink: l = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                            s(!0);
                            let g = await n.toggleLike();
                            if ((s(!1), !c)) return;
                            let x = t.modal.isOpened;
                            g === _.f.OK
                                ? e((0, a.jsx)(p.T, { withLink: l, album: m }), { containerId: x ? o.u.FULLSCREEN_INFO : o.u.INFO })
                                : e((0, a.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: x ? o.u.FULLSCREEN_ERROR : o.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: y } = (0, s.T)();
                return (0, n.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? h({ album: e })
                              : void x((0, a.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
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
                o = i(2058),
                l = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, o.A)(),
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
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, o.A)(),
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
                                    (0, a.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
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
        94058: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => C });
            var a = i(88800),
                r = i(65724),
                n = i(14231),
                s = i(84961),
                o = i(53548),
                l = i.t(o, 2),
                c = i(17392),
                d = i(88021),
                u = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                m = {},
                _ = {};
            ((() => {
                (Object.defineProperty(_, '__esModule', { value: !0 }), (_.useForwardRef = void 0));
                let e = (function e(t) {
                    var i = m[t];
                    if (void 0 !== i) return i.exports;
                    var a = (m[t] = { exports: {} });
                    return (u[t](a, a.exports, e), a.exports);
                })(810);
                _.useForwardRef = function (t, i) {
                    let a = (0, e.useRef)(i);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(a.current) : (t.current = a.current));
                        }, [t]),
                        a
                    );
                };
            })(),
                _.__esModule);
            var p = _.useForwardRef,
                v = i(32353),
                g = i(72288),
                x = i(31764),
                h = i(81192),
                y = i.n(h);
            let f = { [v.u.Desktop]: { start: 40, end: 20 }, [v.u.Mobile]: { start: 40, end: 40 } },
                b = (0, s.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: i,
                            forwardRef: s,
                            scrollPadding: l,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: _,
                            buttonVariant: h,
                            withSecondaryColor: b,
                        } = e,
                        {
                            settings: { isMobile: C },
                        } = (0, g.g)(),
                        A = p(s, null),
                        { shouldBackwardButtonBeDisabled: k, shouldForwardButtonBeDisabled: T, shouldHideControls: E } = (0, d.Y)(A),
                        [I, S] = (0, o.useMemo)(() => {
                            let e = (0, n.A)(f, l);
                            return [C ? e[v.u.Mobile].start : e[v.u.Desktop].start, C ? e[v.u.Mobile].end : e[v.u.Desktop].end];
                        }, [l, C]),
                        N = (0, o.useCallback)(
                            (e) => {
                                var t;
                                let i = null == (t = A.current) ? void 0 : t.children[e],
                                    { current: a } = A;
                                if (!a || !(i instanceof HTMLElement)) return;
                                if (i.offsetLeft - a.scrollLeft < I) {
                                    a.scrollLeft = i.offsetLeft - I;
                                    return;
                                }
                                let r = a.scrollLeft + a.clientWidth - i.offsetLeft - i.offsetWidth;
                                r < S && (a.scrollLeft -= r - S);
                            },
                            [A, S, I],
                        ),
                        j = (0, o.useCallback)(
                            (e) => {
                                var t, a;
                                (N(e), null == (t = (a = i.props).onTabChange) || t.call(a, e));
                            },
                            [i, N],
                        ),
                        L = (0, o.cloneElement)(i, { forwardRef: A, className: (0, r.$)(y().wrapper, i.props.className, y().carousel, y().important), onTabChange: j });
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(
                            y().root,
                            {
                                [y().root_carouselBetweenArrows]: u,
                                [y().root_arrowLeft_hidden]: k,
                                [y().root_arrowRight_hidden]: T,
                                [y().root_arrow_hidden]: k && T && E,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, a.jsx)('div', { className: y().list, children: L }),
                            !C &&
                                (0, a.jsx)(x.X, {
                                    className: (0, r.$)(y().buttons, m),
                                    carouselRef: A,
                                    backwardControlClassName: y().control,
                                    forwardControlClassName: y().control,
                                    withSecondaryColor: b,
                                    buttonSize: _,
                                    buttonVariant: h,
                                }),
                        ],
                    });
                }),
                C = (0, o.forwardRef)((e, t) => (0, a.jsx)(b, { forwardRef: t, ...e }));
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
                o = i(37438),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(n.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
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
            i.d(t, { T: () => o });
            var a = i(88800),
                r = i(84961),
                n = i(42729),
                s = i(5048);
            let o = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    o = (0, s.b)(t.type);
                return (0, a.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: o,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
        96856: (e) => {
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
                o = i(21416),
                l = i(29504),
                c = i(72288),
                d = i(16704),
                u = i(34945),
                m = i(45873),
                _ = i.n(m);
            let p = (0, n.PA)((e) => {
                let { className: t, track: i, position: n, onPlayButtonClick: m, isPlaying: p, isCurrent: v, withDislikeStyles: g = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: h },
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
                                    !x && (0, a.jsx)(u.P, { stopAnimation: !p, className: _().playingAnimation }),
                                    x && h && (0, a.jsx)(o.y, { size: 'xs', className: _().spinner }),
                                    !h &&
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
                            (0, a.jsx)(l.HL, {
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
                4700, 7908, 1147, 3248, 1191, 7072, 5038, 505, 7065, 4555, 6740, 2691, 33, 9232, 8655, 6316, 6706, 4771, 1311, 5201, 8832, 6904, 4495, 2058, 3578, 8628,
                4827, 1800, 7746, 14, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 9337, 818, 4322, 1372, 812, 389, 763, 2670, 7358,
            ],
            () => e((e.s = 58423)),
        ),
            (_N_E = e.O()));
    },
]);
