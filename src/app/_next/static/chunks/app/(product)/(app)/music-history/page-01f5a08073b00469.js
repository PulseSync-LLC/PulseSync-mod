(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => s });
            var a = i(2058),
                r = i(61691);
            let s = (e, t) => {
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
        2345: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => _ });
            var a = i(53548),
                r = i(78793),
                s = i(92716),
                l = i(99984),
                n = i(90780),
                o = i(29993),
                c = i(65523),
                d = i(37436),
                u = i(14518),
                m = i(91248);
            let _ = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, a.useRef)(!1),
                    _ = (0, a.useRef)(!1),
                    v = (0, n.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, n.gf)(),
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: C } = (0, u.$)(),
                    { tabId: A, tabPos: b, isTabSelectedByDefault: k } = (0, m.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let a = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || s.PageStyles.Fullscreen,
                        pagePlacement: C || s.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== A && ((a.tabId = A), (a.tabPos = b), (a.isTabSelectedByDefault = k));
                    let n = (0, r.F)({ params: a, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    n && (e && !i.current && ((0, l.w5)(v.evgenInstance, n), (i.current = !0)), e || _.current || ((0, l.XB)(v.evgenInstance, n), (_.current = !0)));
                });
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var a = i(72288),
                r = i(97956);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: l,
                } = (0, a.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = l.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var a = i(61691),
                r = i(15077);
            let s = (e) => {
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
        8824: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageStoreProvider: () => G });
            var a = i(34961),
                r = i(53892),
                s = i(5120),
                l = i(99711),
                n = i(12622);
            let o = (e) => {
                var t, i, a, r;
                let { wave: l, agent: o } = e;
                return (0, s.wg)({
                    ...(0, n.e)({
                        title: l.name,
                        header: l.description,
                        seeds: l.seeds,
                        stationId: null != (r = null != (a = l.stationId) ? a : l.seeds[0]) ? r : '',
                        type: l.type,
                        agent: o,
                        imageUrl: null == o || null == (t = o.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == o || null == (i = o.cover) ? void 0 : i.color,
                });
            };
            var c = i(71823),
                d = i(74773),
                u = i(5374);
            let m = (e) => {
                    let { albumId: t, trackId: i } = e.data.itemId;
                    return t ? ''.concat(i, ':').concat(t) : i;
                },
                _ = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, s.wg)({ type: l.D.TRACK, id: m(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, s.wg)({ type: l.D.TRACK, id: m(e), data: null, loadingState: d.G.IDLE });
                };
            var v = i(14283),
                p = i(54020);
            let h = (e) => e.data.itemId.seeds.sort().join(',');
            var x = i(73245);
            let g = (e) => {
                let { uid: t, kind: i } = e.data.itemId;
                return ''.concat(t, ':').concat(i);
            };
            var y = i(7227);
            let C = (e) => e.data.itemId.seeds.sort().join(','),
                A = (e) => e.data.itemId.seeds.sort().join(','),
                b = (e) => {
                    var t, i;
                    let a =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case l.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, s.wg)({
                                                          type: l.D.ALBUM,
                                                          available: a.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: a.album, artists: a.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: l.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case l.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, s.wg)({
                                                          type: a,
                                                          id: g(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: l.D.PLAYLIST, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case l.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, s.wg)({
                                                          type: a,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, v.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: a,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case l.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, s.wg)({
                                                          type: a,
                                                          id: A(e),
                                                          meta: {
                                                              ...(0, n.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: a, id: A(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case l.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  return 'fullModel' in i
                                                      ? (0, s.wg)({
                                                            type: l.D.MULTIVIBE_WAVE,
                                                            id: h(e),
                                                            meta: o(i.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(_),
                                                        })
                                                      : (0, s.wg)({ type: l.D.MULTIVIBE_WAVE, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case l.D.SEARCH:
                                          case l.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: i } = e;
                                                  return (0, s.wg)({ type: i, id: (0, p.A)(), tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case l.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, s.wg)({
                                                          type: l.D.QUERY_TO_VIBE,
                                                          id: C(e),
                                                          meta: { ...(0, y.l)(a.wave, a.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: l.D.QUERY_TO_VIBE, id: C(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (i = (0, s.wg)(a)) ? i : null };
                },
                k = (e) => (null == e ? void 0 : e.type) === l.D.WAVE || (null == e ? void 0 : e.type) === l.D.MULTIVIBE_WAVE;
            var S = i(59497);
            let T = s.gK.compose(
                s.gK.model({
                    id: s.gK.string,
                    type: s.gK.enumeration(Object.values(l.D)),
                    tabIndex: s.gK.number,
                    blockIndex: s.gK.number,
                    trackIndex: s.gK.maybeNull(s.gK.number),
                }),
                S.X,
            );
            var I = i(87550),
                f = i(7123);
            let E = (e) => ({ type: f.z4.Unloaded, meta: { id: e.entityId } });
            var N = i(21190);
            let L = s.gK
                    .compose(s.gK.model('MusicHistoryTrack', { type: s.gK.literal(l.D.TRACK), id: s.gK.string, data: s.gK.maybeNull(N.v) }), S.X)
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
                R = s.gK.compose(s.gK.model('MusicHistoryBaseBlock', { id: s.gK.string, tracks: s.gK.array(L) }), S.X).views((e) => ({
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
                j = R.props({ type: s.gK.literal(l.D.ALBUM), available: s.gK.boolean, meta: s.gK.maybeNull(I.J) })
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
            var M = i(90544);
            let O = R.props({ type: s.gK.literal(l.D.ARTIST), available: s.gK.boolean, meta: s.gK.maybeNull(M.P) })
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
                w = s.gK
                    .model('MusicHistoryCommon', { id: s.gK.string, type: s.gK.union(s.gK.literal(l.D.OTHER), s.gK.literal(l.D.SEARCH)), tracks: s.gK.array(L) })
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
            var P = i(78460);
            let D = R.props({ type: s.gK.literal(l.D.PLAYLIST), meta: s.gK.maybeNull(P.I) })
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
            let K = R.props({
                    id: s.gK.string,
                    type: s.gK.union(s.gK.literal(l.D.WAVE), s.gK.literal(l.D.MULTIVIBE_WAVE), s.gK.literal(l.D.QUERY_TO_VIBE)),
                    meta: s.gK.maybeNull(B.G),
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
                        return e.type === l.D.MULTIVIBE_WAVE;
                    },
                })),
                V = s.gK.union(j, O, D, K, w),
                U = s.gK.model('MusicHistoryTab', { date: s.gK.string, blocks: s.gK.maybeNull(s.gK.array(V)) }),
                Y = s.gK
                    .compose(
                        s.gK.model('MusicHistoryPage', {
                            indexesMap: s.gK.map(s.gK.number),
                            items: s.gK.maybeNull(s.gK.array(T)),
                            datesMap: s.gK.map(s.gK.boolean),
                            tabs: s.gK.maybeNull(s.gK.array(U)),
                        }),
                        S.X,
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
                                    s = t + 1;
                                return (
                                    (null == (i = e.items) ? void 0 : i.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (a = e.items) ? void 0 : a.slice(t, t + 25).some((e) => !e.isResolved)) && (s = t + 25),
                                    [r, s]
                                );
                            },
                            getItemsToLoad(i) {
                                var a, r;
                                let [s, l] = t.getStartAndEndIndexes(i);
                                return null != (r = null == (a = e.items) ? void 0 : a.slice(s, l).filter((e) => !e.isResolved)) ? r : [];
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
                                ((e.items = (0, s.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, a) => {
                                            var r;
                                            (e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var s;
                                                        let l = t.id;
                                                        (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(l), i),
                                                            null == (s = e.items) ||
                                                                s.push({
                                                                    id: l,
                                                                    type: t.type,
                                                                    tabIndex: a,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++i,
                                                            t.tracks.forEach((t, s) => {
                                                                var l;
                                                                (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(s, '_').concat(t.id), i),
                                                                    null == (l = e.items) ||
                                                                        l.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: a,
                                                                            blockIndex: r,
                                                                            trackIndex: s,
                                                                            loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++i);
                                                            }));
                                                    }));
                                        }));
                            },
                            setTrack(t, i) {
                                var a, r, s, l;
                                let { tabIndex: n, blockIndex: o, trackIndex: c } = t,
                                    { fullModel: m } = i.data;
                                if (null === c) return;
                                let _ = null == (l = e.tabs) || null == (s = l[n]) || null == (r = s.blocks) || null == (a = r[o]) ? void 0 : a.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, i) {
                                var a, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: u } = i.data,
                                    m = null == (s = e.tabs) || null == (r = s[n]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == m ? void 0 : m.type) === l.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, i) {
                                var a, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == u ? void 0 : u.type) === l.D.ARTIST && ((u.meta = (0, v.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, i) {
                                var a, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (a = r.blocks) ? void 0 : a[o];
                                (null == u ? void 0 : u.type) === l.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, i) {
                                var a, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (a = r.blocks) ? void 0 : a[o];
                                k(u) &&
                                    ((u.meta = { ...(0, n.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, i) {
                                var a, r, s;
                                let { tabIndex: l, blockIndex: n } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (a = r.blocks) ? void 0 : a[n];
                                k(u) && ((u.meta = o(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, s.L3)(function* () {
                                let { musicHistoryResource: i, modelActionsLogger: a } = (0, s._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let a = yield i.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    i = 0;
                                                for (let s of e.historyTabs) {
                                                    var a, r;
                                                    if (i > 1e3) break;
                                                    let e = { ...s, items: [] };
                                                    for (let t of null != (a = s.items) ? a : []) {
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
                                        ((e.tabs = (0, s.wg)(r.historyTabs.map(b))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), (e.loadingState = d.G.REJECT));
                                    }
                            }),
                            getItems: (0, s.L3)(function* (i) {
                                let { musicHistoryResource: a, modelActionsLogger: r } = (0, s._$)(e);
                                try {
                                    let r = e.getItemsToLoad(i);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let s = yield a.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case l.D.ARTIST:
                                                        case l.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case l.D.PLAYLIST: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(i) } } };
                                                        }
                                                        case l.D.WAVE:
                                                        case l.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case l.D.TRACK: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: i } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        n = r.reduce((e, t) => {
                                            let i = ''.concat(t.type, '_').concat(t.id);
                                            if (i in e) {
                                                var a;
                                                null == (a = e[i]) || a.push(t);
                                            } else e[i] = [t];
                                            return e;
                                        }, {});
                                    s.items.forEach((e) => {
                                        var i;
                                        null ==
                                            (i =
                                                n[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case l.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case l.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(m(e));
                                                            case l.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(A(e));
                                                            case l.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case l.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case l.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case l.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(C(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            i.forEach((i) => {
                                                switch (e.type) {
                                                    case l.D.ALBUM:
                                                        t.setAlbum(i, e);
                                                        break;
                                                    case l.D.TRACK:
                                                        t.setTrack(i, e);
                                                        break;
                                                    case l.D.WAVE:
                                                        t.setVibe(i, e);
                                                        break;
                                                    case l.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(i, e);
                                                        break;
                                                    case l.D.PLAYLIST:
                                                        t.setPlaylist(i, e);
                                                        break;
                                                    case l.D.ARTIST:
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
                W = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: z } = (0, a.W)({ createStore: (e) => Y.create(W, e), patchKey: r.n.MUSIC_HISTORY }),
                G = z;
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
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var a = i(88800),
                r = i(65724),
                s = i(52300),
                l = i(30907),
                n = i.n(l);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(n().root, { [n().root_active]: t }, i), 'aria-hidden': !0 });
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
            i.d(t, { i: () => U });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(79070),
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
            var v = i(21010),
                p = i.n(v),
                h = i(17392),
                x = i(29504),
                g = i(91292),
                y = i(2058),
                C = i(92716),
                A = i(96527),
                b = i(78940),
                k = i(55693),
                S = i(58217);
            let T = (0, s.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: s = 'm', allArtistsTitle: l, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: m,
                            link: _,
                            title: v,
                            ariaLabel: p,
                            tooltipText: T,
                            isTooltipEnabled: I,
                            handleNavigate: f,
                        } = ((e) => {
                            var t, i;
                            let { item: a, allArtistsTitle: r, withCustomTooltip: s } = e,
                                { formatMessage: l } = (0, y.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: a, withCustomTooltip: r } = e,
                                        s = a || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : s,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !a && r,
                                    };
                                })({ item: a, allArtistsTitle: r, withCustomTooltip: s }, l),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, b.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, k.z)(),
                                v = (0, A.N)(),
                                p = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), m(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: a, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: l } = a;
                                    return (0, S.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (a.reset(), l.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: p }),
                                x = (0, d.c)((e) => {
                                    (v({ to: C.AppScreen.ArtistScreen }), null == _ || _(), h(e));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: n });
                    return _
                        ? (0, a.jsx)(g.N, {
                              ..._,
                              'aria-label': p,
                              className: i,
                              onClick: f,
                              title: v,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(o.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, a.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: m }),
                              }),
                          })
                        : (0, a.jsx)(o.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, a.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: v,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: s, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, a.jsx)(T, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: s,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, a.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, a.jsx)(T, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: s,
                                                allArtistsTitle: n,
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
            var f = i(88969),
                E = i(65453);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(p().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(f.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(61013),
                R = i(87819),
                j = i(40634),
                M = i(48468),
                O = i.n(M);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, a.jsx)(j.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, l.forwardRef)((e, t) => (0, a.jsx)(w, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                H = i.n(B);
            let K = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, y.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(H().root, H().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                V = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, o] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, L.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, l.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(K, { artists: t, label: i }) : (0, a.jsx)(P, { artists: t, label: i })) : i;
                }),
                U = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: v,
                            captionSize: h,
                            variant: x = 'breakAll',
                            spoilerComponent: g,
                            ...y
                        } = e,
                        C = ((e) => {
                            var t, i, a;
                            let { separator: r, visibleArtistsCount: s, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = e,
                                v = null != (t = e.artists) ? t : [],
                                p = null == (i = e.withAllArtistsTitle) || i,
                                h = null == (a = e.withCustomTooltip) || a,
                                x = (0, l.useRef)(null),
                                [g, y] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                A = ((!C || 1 === v.length) && m) || !m,
                                b = ((e, t) => {
                                    var i, a, r;
                                    let s = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        l = null == (a = null == t ? void 0 : t.withLink) || a,
                                        n = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: a } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => a || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: a, separator: r, isFirst: s } = t;
                                                return {
                                                    primary: _(e, { withLink: a, separator: s ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return _(e, { withLink: a, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(v, { separator: r, visibleArtistsCount: g ? void 0 : s, withComposer: o, withLink: !!A && n, artistIdWithoutLink: c }),
                                k = p ? b.allArtistsTitle : '',
                                S = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: v,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: k,
                                withCustomTooltip: h,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!k && h && !m && !C,
                                title: !k || h || m ? void 0 : k,
                            };
                        })(y),
                        A = (0, n.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(g)
                                  ? g
                                  : (0, a.jsx)(N, { spoilerClassName: s, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        b = (0, a.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(p().root, p()['root_variant_'.concat(x)], { [p().root_clamp]: i && i > 0, [p().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, a.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: v,
                                                captionSize: h,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, a.jsx)(V, { labelRef: C.labelRef, artists: C.artists, label: b }) : b;
                });
        },
        14347: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => p });
            var a = i(88800),
                r = i(84961),
                s = i(53548),
                l = i(17392),
                n = i(39079),
                o = i(98644),
                c = i(73805),
                d = i(15232),
                u = i(99479),
                m = i(56712),
                _ = i(33133),
                v = i.n(_);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: i, position: r, playContextParams: _, withLightning: p } = e,
                    h = (0, n.D)({ playContextParams: _, entityId: t.entityId }),
                    x = (0, s.useCallback)((e) => (0, a.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, a.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, a.jsx)(d.j, { variant: o.X.ALBUM, albumArtists: i, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, a.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...h,
                    'data-test-id': l.Kq.track.TRACK_ALBUM,
                });
            });
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                v = i(55693),
                p = i(72288),
                h = i(24548),
                x = i(85587),
                g = i(90224),
                y = i(91292),
                C = i(7608),
                A = i(6667),
                b = i(85463),
                k = i(65462),
                S = i.n(k);
            let T = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: k,
                        withExplicitMark: T,
                        withSecondaryColor: I,
                        captionSize: f = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: L,
                        artistsClassName: R,
                        ignoreDislikedStyles: j,
                        withCustomTooltip: M = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: w,
                        beforeTitle: P,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: H,
                        afterTitle: K,
                        withContextMenuArtists: V,
                    } = e,
                    { formatMessage: U } = (0, n.A)(),
                    { sendNavigateSearchFeedback: Y } = (0, v.z)(),
                    {
                        settings: { isMobile: W },
                        slam: z,
                    } = (0, p.g)(),
                    G = (0, A.$)({ withCustomTooltip: M }),
                    F = (0, o.useSearchParams)(),
                    $ = (0, C.B)(s, {
                        isMobile: W,
                        isOfflineModeEnabled: z.isOfflineModeEnabled,
                        albumArtists: k,
                        withTrackLink: H,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: T,
                        query: w ? Object.fromEntries(F) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, s;
                        let { canEnableCustomTooltip: l, isMobile: n } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (s = e.version) ? s : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !n,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(s, $, { canEnableCustomTooltip: G, isMobile: W }, U),
                    et = (0, b.O)({ track: s, onNavigate: Y, withSavingQueryParams: w, entityType: x.n.TRACK }),
                    ei = (0, l.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(S().text, S().title),
                                    type: 'entity',
                                    size: f,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [f, X, Q, ee],
                    ),
                    ea = (0, d.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(S().text, S().title),
                                      type: 'entity',
                                      size: f,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: X,
                                  }),
                              })
                            : $.link
                              ? (0, a.jsx)(y.N, {
                                    onClick: et,
                                    className: S().albumLink,
                                    href: $.link.href,
                                    'aria-label': q,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, l.useMemo)(() => +!!O, [O]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(S().root, { [S().root_disabled]: !s.isAvailable, [S().root_disliked]: s.isDisliked && !j, [S().root_withSecondaryColor]: I }, t),
                    children: (0, a.jsxs)('div', {
                        className: S().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(S().titleContainer, { [S().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(S().text, L),
                                        type: 'entity',
                                        size: f,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            ea,
                                            $.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(S().text, S().version),
                                                    type: 'entity',
                                                    size: f,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, a.jsx)(g.N, {
                                            containerClassName: S().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: $.explicitMark,
                                            className: S().explicitMark,
                                            trackId: s.id,
                                        }),
                                    K,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(S().text, { [S().artists]: O }, R, L),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(S().text, S().link),
                                    captionClassName: (0, r.$)(S().text, S().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: er,
                                    captionSize: f,
                                    withContextMenu: V,
                                }),
                        ],
                    }),
                });
            });
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
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(88800),
                r = i(53548),
                s = i(17392),
                l = i(29504),
                n = i(15526),
                o = i.n(n);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [n, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    n)
                )
                    return n.map((e, t) =>
                        (0, a.jsx)(
                            l.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
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
                s = i(53548),
                l = i(92716),
                n = i(17392),
                o = i(52300),
                c = i(90688),
                d = i(7555),
                u = i(19994),
                m = i(29504),
                _ = i(28163),
                v = i(96527),
                p = i(91292),
                h = i(16782),
                x = i.n(h);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: h,
                            subTitle: g,
                            title: y,
                            description: C,
                            viewAllActionLink: A,
                            controls: b,
                            titleSize: k = 'm',
                            coverBackgroundColor: S,
                            coverRadius: T = 's',
                            titleClassName: I,
                            titleLineClamp: f,
                            fallbackIconVariant: E,
                            available: N = !0,
                            onViewAllAction: L,
                            titleChildren: R,
                            children: j,
                            headingRef: M,
                            coverContainerClassName: O,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: P = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: K,
                            forwardRef: V,
                            shimmerCoverClassName: U,
                            shouldSendAnalyticsOnLoaded: Y,
                            ...W
                        } = e,
                        z = (0, _.f)(),
                        G = (0, s.useRef)(null),
                        F = i || H,
                        $ = C || K,
                        X = (0, s.useCallback)(() => {
                            G.current && 'focus' in G.current && G.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            L ? L() : q({ to: l.AppScreen.Link });
                        }, [q, L]);
                    (0, s.useEffect)(() => {
                        Y && z();
                    }, [Y, z]);
                    let Z = (0, s.useMemo)(
                            () =>
                                y && A && N
                                    ? (0, a.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, a.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: A,
                                          onClick: Q,
                                          'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, I),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: f,
                                                  ref: M,
                                                  children: y,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, a.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, I, { [x().heading_notAvailable]: !N }),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: f,
                                                  ref: M,
                                                  'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              R,
                                          ],
                                      }),
                            [N, Q, M, w, h, y, I, f, k, A, R],
                        ),
                        J = (0, s.useMemo)(() => (K && D ? (0, a.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : C), [K, D, C, B]),
                        ee = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, a.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, U), radius: 's' })
                                    : (0, a.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: S },
                                          className: x().cover,
                                          ref: G,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': n.S7.BLOCK_HEADER_COVER,
                                      }),
                            [S, i, E, X, B, D, U, H],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: V,
                        ...W,
                        'data-test-id': n.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, a.jsx)(d.t, { radius: T, className: (0, r.$)(x().coverContainer, O), children: ee }),
                                    (0, a.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            g,
                                            Z,
                                            $ &&
                                                (0, a.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: P }),
                                                    'data-test-id': n.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || j,
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) => (0, a.jsx)(g, { forwardRef: t, ...e }));
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => n });
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
                                for (var s in ((a = {}), t)) 'key' !== s && (a[s] = t[s]);
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
                            s = i(5881),
                            l = a(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: a = 'm', width: n, height: o, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== n && (u.width = 'string' == typeof n ? n : ''.concat(n, 'px')),
                                void 0 !== o && (u.height = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, s.clsx)(l.default.root, l.default['root_radius_'.concat(a)], { [l.default.root_active]: t }, i),
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
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.q = void 0));
                var e = s(7141);
                Object.defineProperty(l, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var n = l.q;
            l.X;
        },
        20562: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageSuspenseLoader: () => p });
            var a = i(88800),
                r = i(88969),
                s = i(66719),
                l = i(29504),
                n = i(94058),
                o = i(86790),
                c = i(60266),
                d = i(56248),
                u = i(76099),
                m = i(82007),
                _ = i.n(m),
                v = i(65600);
            let p = () =>
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
                                        (0, a.jsx)(l.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(n.F, {
                                    className: _().carousel,
                                    carouselElement: (0, a.jsx)(u.zr, { isActive: !0, className: _().tabs, shimmerClassName: _().tab, count: 5 }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(s.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, a.jsx)('div', { className: _().content, children: (0, a.jsx)(v.v, { isActive: !0 }) }),
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
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
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
        28163: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => g });
            var a = i(53548),
                r = i(78793),
                s = i(54577),
                l = i(90780),
                n = i(79070),
                o = i(65523),
                c = i(42139),
                d = i(12816),
                u = i(34500),
                m = i(57649),
                _ = i(60840),
                v = i(14518),
                p = i(73442),
                h = i(91248);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                g = () => {
                    let e = (0, a.useRef)(!1),
                        t = (0, l.st)(),
                        i = (0, o.U)(),
                        { hash: g } = (0, l.gf)(),
                        { pageId: y } = (0, v.$)(),
                        { tabId: C, tabPos: A, isTabSelectedByDefault: b } = (0, h.R)(),
                        { offsetBlockPosY: k } = (0, m.u)(),
                        { blockId: S, blockType: T, blockPosX: I, blockPosY: f, mainObjectType: E, mainObjectId: N, objectsCount: L } = (0, u.N)(),
                        { filterKey: R, filterValue: j, filterPos: M } = (0, _.G)(),
                        { skeleton: O } = (0, p.b)(),
                        w = (0, n.L)(() => (void 0 !== k && void 0 !== f ? k + f : f));
                    return (0, a.useCallback)(() => {
                        if (!t || !y || !d.xK.includes(y) || !x.includes(y) || e.current) return;
                        let a = { hash: g, pageId: c.F[y], entityType: T, entityId: S, entityPosX: I, entityPosY: w, objectsCount: L };
                        (void 0 !== R && ((a.filterKey = R), (a.filterValue = j), (a.filterPos = M)),
                            d.qG.includes(y) && ((a.tabId = C), (a.tabPos = A), (a.isTabSelectedByDefault = b)),
                            O && (a.skeletonId = O),
                            N && E && ((a.mainObjectType = E), (a.mainObjectId = N)));
                        let l = (0, r.F)({ params: a, logger: i, context: 'useSendEventOnBlockLoaded' });
                        l && ((0, s.uY)(t.evgenInstance, l), (e.current = !0));
                    }, [t, y, g, T, S, I, w, R, j, M, L, O, N, E, i, C, A, b]);
                };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31764: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var a = i(88800),
                r = i(65724),
                s = i(53548),
                l = i(17392),
                n = i(88021),
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
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: y, shouldHideControls: C } = (0, n.Y)(t),
                    A = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: A,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: y,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        33034: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 8824)), Promise.resolve().then(i.bind(i, 50811)), Promise.resolve().then(i.bind(i, 20562)));
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => x });
            var a = i(88800),
                r = i(84961),
                s = i(58390),
                l = i(53548),
                n = i(35412),
                o = i(39499),
                c = i(89108),
                d = i(70003),
                u = i(72288),
                m = i(16818);
            (0, r.eO)(!1);
            let _ = (0, l.createContext)(null),
                v = (e) => {
                    let { children: t, store: i, storeKey: r } = e,
                        s = (0, l.useMemo)(() => ({ store: i, storeKey: r }), [i, r]);
                    return (0, a.jsx)(_.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: r } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
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
                                                  .concat((0, n.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: l } = e,
                                n = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...n, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(p, { nonce: l, patchKey: i, patchesRef: h }), (0, a.jsx)(v, { store: _, storeKey: i, children: s })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, l.useContext)(_);
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
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var a = i(53548);
            i(30282);
            var r = i(58390);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(92716),
                o = i(17392),
                c = i(29993),
                d = i(90688),
                u = i(19934),
                m = i(7555),
                _ = i(29504),
                v = i(96527),
                p = i(78940),
                h = i(72288),
                x = i(80932),
                g = i.n(x);
            let y = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    x = (0, p.Z)(t.url),
                    C = (0, v.N)(),
                    A = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, i),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, a.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42123: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c });
            var a = i(88800),
                r = i(65724),
                s = i(7555),
                l = i(19994),
                n = i(16782),
                o = i.n(n);
            let c = (e) => {
                let { isActive: t, coverRadius: i = 'm', withDescription: n, className: c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(o().start, c),
                    children: [
                        (0, a.jsx)(s.t, {
                            className: o().coverContainer,
                            radius: i,
                            children: (0, a.jsx)(l.W, { isActive: t, className: o().shimmerCover, radius: 'xl' }),
                        }),
                        (0, a.jsxs)('div', {
                            className: o().textShimmerContainer,
                            children: [
                                (0, a.jsx)(l.W, { isActive: t, className: o().shimmerTitle, radius: 'xl' }),
                                n && (0, a.jsx)(l.W, { isActive: t, className: o().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => s });
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
                s = () => (0, a.useContext)(r);
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(88800),
                r = i(84961),
                s = i(17392),
                l = i(52300),
                n = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: d, albumType: u, disabled: m } = e,
                    { user: _ } = (0, c.g)(),
                    v = t ? 'liked' : 'like',
                    p = (0, o.$)(t, u);
                return (0, a.jsx)(n.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: d, variant: v, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
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
        46777: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var a = i(55482),
                r = i(53548),
                s = i(46422);
            let l = (e) => {
                let t = (0, s.W)(),
                    i = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    l = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: i, moveForward: l };
            };
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
            i.d(t, { MusicHistoryPage: () => eI });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(88969),
                o = i(17392),
                c = i(66719),
                d = i(98225),
                u = i(29504),
                m = i(2058);
            let _ = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, m.A)();
                return (0, l.useCallback)(
                    function (i) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(i),
                            s = new Date();
                        (r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0));
                        let l = (r.getTime() - s.getTime()) / 864e5,
                            n = t(l, 'day', { numeric: 'auto' }),
                            o = e(i, { day: 'numeric', month: 'long' });
                        switch (l) {
                            case 0:
                            case -1:
                            case -2:
                                if (a) return ''.concat(n, ', ').concat(o);
                                return n;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
            var v = i(99711),
                p = i(69048),
                h = i(28119),
                x = i(34961),
                g = i(53892),
                y = i(72288);
            let C = (0, l.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var A = i(18593),
                b = i(13946),
                k = i(84384),
                S = i(18486),
                T = i(42123);
            let I = (e) => {
                    let { entityId: t, from: i } = e;
                    return { contextData: { type: A.K.Various, meta: { id: t }, from: i }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                f = (e) => {
                    let { id: t, tabIndex: i, blockIndex: a, trackIndex: r } = e,
                        s = (0, x.s)(g.n.MUSIC_HISTORY),
                        n = (0, l.useId)(),
                        o = (0, l.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, l.useContext)(C);
                    return (
                        (0, l.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(i, '_').concat(a, '_').concat(r, '_').concat(t) : ''.concat(i, '_').concat(a, '_').concat(t),
                                l = s.indexesMap.get(e);
                            s.isInObservationRange(l) &&
                                c({
                                    elementRef: o,
                                    elementId: n,
                                    index: l,
                                    onShow() {
                                        (s.getItems(this.index), d(n));
                                    },
                                });
                        }, [a, t, n, s, c, i, r, d]),
                        { intersectionPropertyId: n, ref: o }
                    );
                };
            var E = i(14347),
                N = i(10829),
                L = i(98644),
                R = i(93015),
                j = i(72713),
                M = i.n(j);
            let O = (0, s.PA)((e) => {
                let { type: t, track: i, artists: r, tabIndex: s, blockIndex: l, trackIndex: n, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = f({ id: i.id, tabIndex: s, blockIndex: l, trackIndex: n });
                return i.isShimmerVisible || !i.data
                    ? (0, a.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, a.jsx)(R.D, {
                              isActive: i.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: M().trackShimmer,
                              variant: t === A.K.Album ? L.X.ALBUM : L.X.PLAYLIST,
                          }),
                      })
                    : t === A.K.Album
                      ? (0, a.jsx)(E.F, { track: i.data, position: i.data.index, albumArtists: r, playContextParams: o })
                      : (0, a.jsx)(N.K, { track: i.data, playContextParams: o });
            });
            var w = i(54719),
                P = i.n(w);
            let D = (0, s.PA)((e) => {
                    var t, i, s, c, d;
                    let { album: m, tabIndex: _, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: h } = f({ id: m.id, tabIndex: _, blockIndex: v }),
                        { from: x } = (0, k.f)({ blockId: 'album-'.concat(m.id) }),
                        g = (0, l.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, a.jsx)(b.i, {
                                      className: P().artists,
                                      linkClassName: P().artistLink,
                                      artists: null == (e = m.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = m.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [m.available, null == (t = m.meta) ? void 0 : t.artistNames, null == (i = m.meta) ? void 0 : i.artists]),
                        y = (0, l.useMemo)(() => {
                            var e, t, i;
                            return m.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: m.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, a.jsx)(S.T, {
                                      className: P().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: g,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (i = m.meta) ? void 0 : i.url,
                                      available: m.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!g,
                                  });
                        }, [
                            m.available,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (s = m.meta) ? void 0 : s.coverUri,
                            null == (c = m.meta) ? void 0 : c.title,
                            null == (d = m.meta) ? void 0 : d.url,
                            g,
                        ]),
                        C = (0, l.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var i;
                                    let r = I({ entityId: e.entityId, from: x });
                                    return (0, a.jsx)(
                                        O,
                                        { type: A.K.Album, track: e, playContextParams: r, tabIndex: _, blockIndex: v, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [m.tracks, x, _, v],
                        );
                    return (0, a.jsxs)('section', {
                        className: P().root,
                        ref: p,
                        'data-intersection-property-id': h,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, a.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, a.jsx)(n.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, a.jsx)('div', { className: P().content, children: C }),
                        ],
                    });
                }),
                B = (0, s.PA)((e) => {
                    var t, i, s;
                    let { artist: c, tabIndex: d, blockIndex: m } = e,
                        { ref: _, intersectionPropertyId: v } = f({ id: c.id, tabIndex: d, blockIndex: m }),
                        { from: p } = (0, k.f)({ blockId: 'artist-'.concat(c.id) }),
                        h = (0, l.useMemo)(() => {
                            var e, t, i;
                            return c.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: c.isShimmerActive, className: P().header, coverRadius: 'round' })
                                : (0, a.jsx)(S.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: P().header,
                                      coverUrl: null == (e = c.meta) ? void 0 : e.coverUri,
                                      title: null == (t = c.meta) ? void 0 : t.name,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (i = c.meta) ? void 0 : i.url,
                                      available: c.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            c.available,
                            c.isShimmerActive,
                            c.isShimmerVisible,
                            null == (t = c.meta) ? void 0 : t.coverUri,
                            null == (i = c.meta) ? void 0 : i.name,
                            null == (s = c.meta) ? void 0 : s.url,
                        ]),
                        x = (0, l.useMemo)(
                            () =>
                                c.tracks.map((e, t) => {
                                    var i;
                                    let r = I({ entityId: e.entityId, from: p });
                                    return (0, a.jsx)(
                                        O,
                                        { type: A.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: m, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [c.tracks, p, d, m],
                        );
                    return (0, a.jsxs)('section', {
                        className: P().root,
                        ref: _,
                        'data-intersection-property-id': v,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, a.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, a.jsx)(n.A, { id: 'music-history.artist' }),
                            }),
                            h,
                            (0, a.jsx)('div', { className: P().content, children: x }),
                        ],
                    });
                });
            var H = i(33586),
                K = i(20584),
                V = i(93039);
            let U = (0, s.PA)((e) => {
                    let { common: t, tabIndex: i, blockIndex: s } = e,
                        { ref: c, intersectionPropertyId: d } = f({ id: t.id, tabIndex: i, blockIndex: s }),
                        { from: m } = (0, k.f)(),
                        _ = ((e) =>
                            (0, l.useMemo)(
                                () => (e === v.D.SEARCH ? (0, V.t)({ contextType: A.K.Various, contextId: '', entityContextType: K.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, l.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let l = I({ entityId: e.entityId, from: m });
                                    return (0, a.jsx)(
                                        O,
                                        { playContextParams: l, type: A.K.Various, track: e, tabIndex: i, blockIndex: s, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, m, i, s],
                        ),
                        h = (0, l.useMemo)(() => {
                            switch (t.type) {
                                case v.D.OTHER:
                                    return (0, a.jsx)(n.A, { id: 'music-history.shuffle' });
                                case v.D.SEARCH:
                                    return (0, a.jsx)(n.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, a.jsx)(H._, {
                        sourceContextData: _,
                        children: (0, a.jsxs)('section', {
                            className: P().root,
                            ref: c,
                            'data-intersection-property-id': d,
                            'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, a.jsx)(u.DZ, {
                                    className: (0, r.$)(P().header, P().heading),
                                    variant: 'h3',
                                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: h,
                                }),
                                (0, a.jsx)('div', { className: P().content, children: p }),
                            ],
                        }),
                    });
                }),
                Y = (0, s.PA)((e) => {
                    var t, i, s, c, d;
                    let { playlist: _, tabIndex: v, blockIndex: p } = e,
                        { ref: h, intersectionPropertyId: x } = f({ id: _.id, tabIndex: v, blockIndex: p }),
                        { from: g } = (0, k.f)({ blockId: _.isResolved ? 'playlist-'.concat(null == (t = _.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, m.A)(),
                        C = (0, l.useMemo)(() => {
                            var e, t, i, r;
                            return _.isShimmerVisible
                                ? (0, a.jsx)(T.M, { isActive: _.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, a.jsx)(S.T, {
                                      className: P().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = _.meta) ? void 0 : e.coverUri,
                                      title: null == (t = _.meta) ? void 0 : t.title,
                                      titleClassName: P().headerTitle,
                                      description: y({ id: 'entity-names.number-of-tracks' }, { counter: null == (i = _.meta) ? void 0 : i.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = _.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            y,
                            _.isShimmerActive,
                            _.isShimmerVisible,
                            null == (i = _.meta) ? void 0 : i.coverUri,
                            null == (s = _.meta) ? void 0 : s.title,
                            null == (c = _.meta) ? void 0 : c.tracksCount,
                            null == (d = _.meta) ? void 0 : d.url,
                        ]),
                        b = (0, l.useMemo)(
                            () =>
                                _.tracks.map((e, t) => {
                                    var i;
                                    let r = I({ entityId: e.entityId, from: g });
                                    return (0, a.jsx)(
                                        O,
                                        { playContextParams: r, type: A.K.Playlist, track: e, tabIndex: v, blockIndex: p, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [_.tracks, g, v, p],
                        );
                    return (0, a.jsxs)('section', {
                        className: P().root,
                        ref: h,
                        'data-intersection-property-id': x,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, a.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, a.jsx)(n.A, { id: 'music-history.playlist' }),
                            }),
                            C,
                            (0, a.jsx)('div', { className: P().content, children: b }),
                        ],
                    });
                });
            var W = i(39585),
                z = i(64284);
            let G = (0, s.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: i, blockIndex: s, tabIndex: n } = e,
                    { ref: c, intersectionPropertyId: d } = f({ id: i.id, blockIndex: s, tabIndex: n }),
                    { from: u } = (0, k.f)({ blockId: ''.concat(z.U.RADIO, '-').concat(z.U.Q2V, '-').concat(i.id) }),
                    m = (0, l.useMemo)(
                        () =>
                            i.tracks.map((e, t) => {
                                var i;
                                let r = I({ entityId: e.entityId, from: u });
                                return (0, a.jsx)(
                                    O,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: s, tabIndex: n, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [i.tracks, u, n, s],
                    );
                return i.meta
                    ? (0, a.jsxs)('section', {
                          className: P().root,
                          ref: c,
                          'data-intersection-property-id': d,
                          'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, a.jsx)(W.K, { className: (0, r.$)(P().queryToVibeHeader, P().heading), requestAwakeLumenModal: t, vibe: i.meta }),
                              (0, a.jsx)('div', { className: P().content, children: m }),
                          ],
                      })
                    : null;
            });
            var F = i(29993),
                $ = i(79070),
                X = i(55211),
                q = i(5407),
                Q = i(34500),
                Z = i(14518),
                J = i(47964),
                ee = i(97956),
                et = i(90420),
                ei = i(52726),
                ea = i(8990),
                er = i(39267);
            let es = (0, s.PA)((e) => {
                var t, i, s, c, d, m;
                let { vibe: _, blockIndex: v, tabIndex: p } = e,
                    {
                        experiments: h,
                        settings: { isMobile: x },
                        freeAccess: g,
                    } = (0, y.g)(),
                    { pageId: C } = (0, Z.$)(),
                    { blockIdForFrom: b } = (0, Q.N)(),
                    E = (0, q.P)(),
                    [N, L] = (0, l.useState)(!1),
                    {
                        isPlaying: R,
                        togglePlay: j,
                        isCurrent: M,
                    } = (0, J.B)({ seeds: (null == (t = _.meta) ? void 0 : t.seeds) || [et.M1], pageIdForFrom: C, blockIdForFrom: b }),
                    w = (0, l.useId)(),
                    D = h.checkExperiment(ee.z.WebNextVibeDescription, 'on'),
                    B = _.isMultivibe,
                    H = B ? 'xs' : 'm',
                    { ref: K, intersectionPropertyId: V } = f({ id: _.id, blockIndex: v, tabIndex: p }),
                    { from: U } = (0, k.f)({ blockId: 'wave-'.concat(_.id) }),
                    Y = (0, F.c)(() => {
                        if (!E()) {
                            if (g.isVibeStartRestricted) return void L(!0);
                            j();
                        }
                    }),
                    W = (0, F.c)((e) => {
                        if (x || 2 === e.detail) return void Y();
                    }),
                    z = (0, $.L)(() => {
                        var e, t, i, a, r, s, l, n;
                        return D
                            ? {
                                  title: null == (e = _.meta) ? void 0 : e.title,
                                  description:
                                      null == (a = _.meta)
                                          ? void 0
                                          : a.getDescription(null != (n = null == (t = _.meta) ? void 0 : t.title) ? n : null == (i = _.meta) ? void 0 : i.description),
                              }
                            : { title: null != (l = null == (r = _.meta) ? void 0 : r.title) ? l : null == (s = _.meta) ? void 0 : s.description };
                    }),
                    G = (0, l.useCallback)(() => {
                        var e, t, i, s, l;
                        return (null == (e = _.meta) ? void 0 : e.shouldShowAgent) && (null == (t = _.meta) ? void 0 : t.agent)
                            ? (0, a.jsx)(X.n, {
                                  agent: _.meta.agent,
                                  isPlaying: R,
                                  isCurrent: M,
                                  onPlayButtonClick: Y,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              })
                            : (0, a.jsx)(er.q, {
                                  isCurrent: M,
                                  isPlaying: R,
                                  isAvailable: !0,
                                  onPlayButtonClick: Y,
                                  title: null == (i = _.meta) ? void 0 : i.title,
                                  entityCoverStyle: { backgroundColor: null == (s = _.meta) ? void 0 : s.backgroundColor },
                                  ariaDescribedBy: w,
                                  coverUri: null == (l = _.meta) ? void 0 : l.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              });
                    }, [
                        Y,
                        M,
                        R,
                        w,
                        null == (i = _.meta) ? void 0 : i.agent,
                        null == (s = _.meta) ? void 0 : s.backgroundColor,
                        null == (c = _.meta) ? void 0 : c.imageUrl,
                        null == (d = _.meta) ? void 0 : d.shouldShowAgent,
                        null == (m = _.meta) ? void 0 : m.title,
                        B,
                        H,
                    ]),
                    es = (0, $.L)(() => {
                        var e;
                        return _.isShimmerVisible
                            ? (0, a.jsx)(T.M, { isActive: _.isShimmerActive, className: P().header, coverRadius: 'round' })
                            : (0, a.jsxs)(ea.C, {
                                  className: (0, r.$)(P().header, P().vibeHeader),
                                  onClick: W,
                                  'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, a.jsx)(ei.S, {
                                          isOpened: N,
                                          onOpenChange: L,
                                          isEnabled: g.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = _.meta) ? void 0 : e.stationType,
                                          renderChildren: G,
                                      }),
                                      (0, a.jsx)(S.T, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: w, className: P().vibeTextBlock, ...z }),
                                  ],
                              });
                    }),
                    el = (0, l.useMemo)(
                        () =>
                            _.tracks.map((e, t) => {
                                var i;
                                let r = I({ entityId: e.entityId, from: U });
                                return (0, a.jsx)(
                                    O,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: v, tabIndex: p, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [_.tracks, U, p, v],
                    );
                return (0, a.jsxs)('section', {
                    className: P().root,
                    ref: K,
                    'data-intersection-property-id': V,
                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !D &&
                            (0, a.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, a.jsx)(n.A, { id: 'music-history.my-vibe' }),
                            }),
                        es,
                        (0, a.jsx)('div', { className: P().content, children: el }),
                    ],
                });
            });
            var el = i(67841),
                en = i.n(el);
            let eo = (0, s.PA)((e) => {
                let { tab: t, tabIndex: i, onTabShowOrHide: r, shouldHideInactiveTab: s, ...n } = e,
                    { lumen: c } = (0, y.g)(),
                    d = (0, x.s)(g.n.MUSIC_HISTORY),
                    { awakeLumenModal: m, requestAwakeLumenModal: A } = (0, p.z)(),
                    b = (0, h.f)(),
                    k = (0, l.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case v.D.ALBUM:
                                              return (0, a.jsx)(D, { album: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case v.D.PLAYLIST:
                                              return (0, a.jsx)(Y, { playlist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case v.D.MULTIVIBE_WAVE:
                                          case v.D.WAVE:
                                              return (0, a.jsx)(es, { vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case v.D.ARTIST:
                                              return (0, a.jsx)(B, { artist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case v.D.SEARCH:
                                          case v.D.OTHER:
                                              return (0, a.jsx)(U, { common: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case v.D.QUERY_TO_VIBE:
                                              return b
                                                  ? (0, a.jsx)(G, { requestAwakeLumenModal: A, vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, i, b, A]),
                    S = _(),
                    T = (0, l.useRef)(null),
                    { observeElement: I } = (0, l.useContext)(C),
                    f = d.datesMap.get(t.date);
                return (
                    (0, l.useEffect)(() => {
                        I({
                            elementId: t.date,
                            elementRef: T,
                            index: 0,
                            onShow: () => {
                                (d.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (d.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [d, d.datesMap, I, r, t.date]),
                    (0, l.useEffect)(() => {
                        c.isEnabled && c.getData();
                    }, [c]),
                    (0, a.jsxs)('div', {
                        'aria-hidden': !f && s,
                        ref: T,
                        'data-intersection-property-id': t.date,
                        className: en().root,
                        ...n,
                        ...{ inert: !!(!f && s) },
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            m,
                            (0, a.jsx)(u.DZ, {
                                'data-date-anchor': t.date,
                                className: en().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: S(t.date),
                            }),
                            (0, a.jsx)('div', { className: en().content, children: k }),
                        ],
                    })
                );
            });
            var ec = i(32596),
                ed = i(12816),
                eu = i(59844),
                em = i(44230),
                e_ = i(37670),
                ev = i(94058),
                ep = i(86790),
                eh = i(60266),
                ex = i(56248),
                eg = i(87366),
                ey = i(76099),
                eC = i(8840);
            let eA = (e) => {
                    let { children: t } = e,
                        i = (0, l.useRef)({}),
                        r = (0, l.useMemo)(
                            () =>
                                (0, eC.Gv)((e) => {
                                    var t, a;
                                    let r = (0, eC.L5)(e.target),
                                        s = i.current[r];
                                    e.isIntersecting ? null == s || null == (t = s.onShow) || t.call(s) : null == s || null == (a = s.onHide) || a.call(s);
                                }),
                            [],
                        );
                    (0, l.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let s = (0, l.useCallback)(
                            (e) => {
                                !i.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (i.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        n = (0, l.useCallback)(
                            (e) => {
                                let t = i.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, l.useMemo)(() => ({ observeElement: s, unobserveElement: n }), [s, n]);
                    return (0, a.jsx)(C.Provider, { value: o, children: t });
                },
                eb = async (e, t) =>
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
                eS = i.n(ek),
                eT = i(65600);
            let eI = (0, s.PA)(() => {
                let [e, t] = (0, l.useState)(!1),
                    i = (0, x.s)(g.n.MUSIC_HISTORY),
                    { contentScrollRef: s, setContentScrollRef: m } = (0, em.g)(),
                    v = (0, d.zb)(0),
                    p = (0, l.useRef)(!1),
                    h = (0, l.useRef)(null),
                    y = (0, l.useCallback)(
                        async (e) => {
                            var a;
                            t(!0);
                            let r = i.dates[e];
                            if (!r) return;
                            (null == (a = v.onTabChange) || a.call(v, e), (p.current = !0));
                            let l = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (l && ((h.current = s), await eb(l, h)), (p.current = !1));
                        },
                        [i.dates, v, s],
                    ),
                    C = (0, l.useCallback)(() => {
                        if (p.current) return;
                        let e = i.dates.findIndex((e) => i.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = v.onTabChange) || t.call(v, e);
                        }
                    }, [i.dates, i.datesMap, v]);
                ((0, l.useEffect)(() => () => i.reset(), [i]), (0, e_.J)(i.isResolved));
                let A = (0, l.useMemo)(() => {
                        var t;
                        return i.isRejected
                            ? (0, a.jsx)(ec.SomethingWentWrong, { className: (0, r.$)(eS().error, eS().important), withBackwardControl: !1 })
                            : i.isShimmerVisible
                              ? (0, a.jsx)(eT.v, { isActive: i.isShimmerActive })
                              : i.isEmpty
                                ? (0, a.jsx)('div', {
                                      className: eS().empty,
                                      children: (0, a.jsx)(u.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, a.jsx)(n.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = i.tabs)
                                  ? void 0
                                  : t.map((t, i) =>
                                        (0, a.jsx)(eo, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: i, shouldHideInactiveTab: e }, i),
                                    );
                    }, [C, i.isEmpty, i.isRejected, i.isShimmerActive, i.isShimmerVisible, i.tabs, e]),
                    b = _(),
                    k = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(ey.wI, {
                                isShimmerVisible: i.isShimmerVisible,
                                className: eS().tabs,
                                ...v,
                                onTabChange: y,
                                shimmer: (0, a.jsx)(ey.zr, {
                                    className: eS().tabs,
                                    shimmerClassName: (0, r.$)(eS().tab, { [eS().tab_isLoading]: i.isShimmerVisible }),
                                    count: 5,
                                }),
                                children: i.dates.map((e, t) =>
                                    (0, a.jsx)(
                                        eg.o,
                                        {
                                            className: (0, r.$)(eS().tab, { [eS().tab_selected]: t === v.value }),
                                            titleClassName: eS().date,
                                            'aria-label': b(e, !1),
                                            title: b(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [b, y, i.dates, i.isShimmerVisible, v],
                    );
                return (
                    i.isNeededToLoad && (0, l.use)(i.getMusicHistory()),
                    (0, a.jsx)(eu.n, {
                        pageId: ed._Q.HISTORY,
                        children: (0, a.jsxs)('div', {
                            className: eS().root,
                            'data-test-id': o.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: eS().headerContainer,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: eS().header,
                                            children: [
                                                (0, a.jsx)(ex.L, { withForwardControl: !1 }),
                                                (0, a.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(n.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ev.F, { className: eS().carousel, carouselElement: k }),
                                    ],
                                }),
                                (0, a.jsxs)(c.N, {
                                    ref: m,
                                    className: eS().scroll,
                                    containerClassName: eS().scrollContainer,
                                    children: [
                                        (0, a.jsx)(eA, { children: (0, a.jsx)('div', { className: eS().content, children: A }) }),
                                        (0, a.jsx)(eh.A, { children: (0, a.jsx)(ep.w, { className: eS().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(53548).createContext)({ pageAlbumId: void 0 });
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
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var a = i(88800),
                r = i(65724),
                s = i(21284),
                l = i(79070),
                n = i(39267),
                o = i(85925),
                c = i.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, l.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(n.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: o,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        56248: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(52300),
                m = i(46777),
                _ = i(50320),
                v = i.n(_);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: i = !0,
                        shouldFocusOnMount: s = !0,
                        className: _,
                        withBackwardFallback: p,
                        buttonSize: h = 'xxs',
                        onBackwardClick: x,
                    } = e,
                    { formatMessage: g } = (0, n.A)(),
                    { canBack: y, canForward: C, moveBack: A, moveForward: b } = (0, m.J)(p),
                    k = (0, l.useRef)(null),
                    S = (0, c.c)((e) => {
                        if ((e.stopPropagation(), x)) return void x();
                        A();
                    }),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), b());
                    });
                return (
                    (0, l.useEffect)(() => {
                        s && k.current && y && k.current.focus();
                    }, [y]),
                    (0, a.jsxs)('div', {
                        className: (0, r.$)(v().root, _),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(d.$, {
                                    ref: k,
                                    'aria-label': g({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: h,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: S,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, a.jsx)(d.$, {
                                    'aria-label': g({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !C,
                                    size: h,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: T,
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
                s = i(2058),
                l = i(17392),
                n = i(96817),
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
                            iconClassName: v,
                            className: p,
                            forwardRef: h,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: y } = (0, s.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(n.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: h,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => k });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(29993),
                o = i(52073),
                c = i(5407),
                d = i(76675),
                u = i(28830),
                m = i(9618),
                _ = i(4795),
                v = i(55693),
                p = i(7123),
                h = i(72288),
                x = i(8990),
                g = i(2058),
                y = i(47580),
                C = i(95993),
                A = i(27157),
                b = i.n(A);
            let k = (0, s.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: s,
                        meta: A,
                        beforeBlock: k,
                        controls: S,
                        playButtonCellRender: T,
                        withLightning: I,
                        isPlaying: f,
                        isCurrent: E,
                        togglePlay: N,
                        restartPlay: L,
                        onPlayClick: R,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: M = !1,
                        ...O
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: P } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: H },
                        album: K,
                        albumCPA: { isPlusCPAPlayerBarEnabled: V },
                        paywall: { modal: U },
                    } = (0, h.g)(),
                    { ref: Y, intersectionPropertyId: W } = (0, u.n)(),
                    z = (0, d.b)(),
                    G = (0, c.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, g.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: r } = t,
                                s = (0, y.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [s, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(s, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: I, track: s }),
                    $ = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(s.entityId),
                    X = V(K.id, null == (t = K.meta) ? void 0 : t.isNonMusic),
                    q = s.isAvailable && w && !X,
                    Q = (0, _.N)(),
                    Z = s.isAvailable && Q && !X && !M,
                    J = (0, C.w)({ track: s, callback: N }),
                    ee = (0, n.c)(() => {
                        D.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    et = (0, C.w)({ track: s, callback: ee }),
                    { sendPlaySearchFeedback: ei } = (0, v.z)(),
                    [ea, er] = (0, l.useState)(!1),
                    es = (0, n.c)(() => {
                        if (!G()) {
                            if (q) return void P();
                            if (Z) return void U.open();
                            (ea || f || (er(!0), null == ei || ei()), J(), z(!f), null == R || R(!f));
                        }
                    }),
                    el = (0, n.c)(() => {
                        if (f) return void L();
                        es();
                    }),
                    en = (0, n.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (w && s.isAvailableOnlyForPlus && P(), Q && s.isAvailableOnlyForPlus && U.open());
                            return;
                        }
                        if (q) return void P();
                        let t = !H && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void U.open()
                            : ((0, o.P)(e, b().ripple), H)
                              ? void es()
                              : 2 === e.detail
                                ? void el()
                                : void (1 === e.detail && s.hasTrackLink && !B.modal.isOpened && (et(), Z && U.open()));
                    }),
                    eo = null == T ? void 0 : T({ onPlayButtonClick: es, isPlaying: f, isCurrent: E, isLoading: $, playButtonIconSize: j });
                return (0, a.jsxs)(x.C, {
                    ref: Y,
                    'aria-label': F,
                    'data-intersection-property-id': W,
                    onClick: en,
                    className: (0, r.$)(b().root, { [b().root_disabled]: !s.isAvailable, [b().root_current]: E && H }, i),
                    ...O,
                    children: [k, eo, A, S],
                });
            });
        },
        59844: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => l });
            var a = i(88800),
                r = i(53548),
                s = i(90334);
            let l = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: l, pageStyle: n, pagePlacement: o }), [t, i, l, n, o]);
                return (0, a.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => s });
            var a = i(4086),
                r = i(41928);
            let s = () => (0, r.N)().get(a.SX);
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var a = i(88800);
            i(30282);
            var r = i(11006),
                s = i.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var a = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        65600: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => d });
            var a = i(88800),
                r = i(19994),
                s = i(98644),
                l = i(42123),
                n = i(93015),
                o = i(97766),
                c = i.n(o);
            let d = (e) => {
                let { isActive: t } = e,
                    i = (0, a.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, a.jsx)(n.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, a.jsx)(n.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, a.jsx)(n.D, { isActive: t, variant: s.X.PLAYLIST }),
                        ],
                    });
                return (0, a.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, a.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(l.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        i,
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(l.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        i,
                    ],
                });
            };
        },
        67841: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r, W: () => s });
            var a = i(53548);
            let r = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, a.useContext)(r);
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        72713: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => O });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                v = i(42174),
                p = i(96817);
            let h = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: s, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, n.A)(),
                    v = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, l.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, a.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': v,
                    onClick: h,
                    icon: (0, a.jsx)(u.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                g = i(25557),
                y = i(55693),
                C = i(72288),
                A = i(49738),
                b = i(56446),
                k = i(64546),
                S = i(29831),
                T = i(30123),
                I = i(54965),
                f = i(1829),
                E = i(82092),
                N = i.n(E),
                L = i(79262),
                R = i(41867),
                j = i.n(R);
            let M = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, n.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(L.A, { value: t.downloadingProgress, size: 16, className: j().downloadingProgress, progressBarClassName: j().progress })
                          : null;
                }),
                O = (0, s.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: s,
                            withLightning: p,
                            ignoreDislikedStyles: E,
                            onLikeClick: L,
                            utmLink: R,
                            withSecondaryColor: j,
                            handleRemove: O,
                            withTrailer: w = !0,
                            likeIconSize: P = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: H, trailer: K } = (0, C.g)(),
                        { formatMessage: V } = (0, n.A)(),
                        { sendLikeSearchFeedback: U } = (0, y.z)(),
                        [Y, W] = (0, l.useState)(!1),
                        [z, G] = (0, l.useState)(!1),
                        F = (0, x.P)(),
                        $ = (0, v.K)(s),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Q,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: s } = t,
                                l = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, I.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== l ? { text: l, ariaLabel: (0, S.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: s ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(s, { withLightning: p, isUGC: s.isUGC }, V),
                        Z = (0, g.F)(),
                        J = H.hasPlus,
                        ee = !s.isRemoved && s.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (Y || s.isLiked || (W(!0), null == U || U()), await $(), null == L || L(s.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), F())) return void e.preventDefault();
                            (K.openTrackTrailer(s.id), Z(o.DomainObjectType.Track, s.id));
                        }),
                        er = (0, l.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(f._, {
                                        track: s,
                                        open: z,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(N().contextMenu, { [N().contextMenu_visible]: z }),
                                        handleRemove: O,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, O, z, ee, w, s, R]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(N().root, N().controls, i, {
                            [N().controls_dislikedControls]: s.isDisliked,
                            [N().controls_dislikedColors]: s.isDisliked && !E,
                            [N().controls_disabled]: !s.isAvailable,
                            [N().root_withSecondaryColor]: j,
                        }),
                        children: [
                            q && (0, a.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: N().lightning, variant: 'lightning' }),
                            Q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: N().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(N().item, N().downloadIcon), children: (0, a.jsx)(M, { track: s }) }),
                            O && !B && (0, a.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(N().item, N().removeButton), onClick: O, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(k.WithOffline, {
                                    fallback: (0, a.jsx)(A.c, {
                                        size: 'xs',
                                        iconSize: P,
                                        className: (0, r.$)(N().item, N().likeIcon),
                                        isLiked: s.isLiked,
                                        onClick: et,
                                        disabled: !H.isAuthorized,
                                    }),
                                }),
                            (null == (t = s.trailer) ? void 0 : t.isAvailable) &&
                                s.isAvailable &&
                                (0, a.jsx)(k.WithOffline, {
                                    fallback: (0, a.jsx)(b.k, {
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
                                            className: (0, r.$)(N().duration, { [N().duration_hidden]: z && ee }),
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
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var a = i(88800),
                r = i(53548),
                s = i(90134);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, l, n, o, c, d, u],
                    );
                return (0, a.jsx)(s.l.Provider, { value: _, children: m });
            };
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
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(2058),
                n = i(30282),
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
            let v = (e) => e(new Date(), (0, _.m)());
            var p = i(51611),
                h = i(72288),
                x = i(11006),
                g = i.n(x),
                y = i(17392),
                C = i(29504),
                A = i(91292);
            let b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(g().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: g().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: r, className: g().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(g().root, g().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, a.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: r, formatMessage: s } = (0, l.A)(),
                    { language: n } = (0, p.h)(),
                    o = u({ formatMessage: s, language: n, tld: i.tld, year: v(r) });
                return (0, a.jsx)(b, { className: t, data: o });
            });
            let T = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: _, user: x } = (0, h.g)(),
                    { formatDate: y, formatMessage: C } = (0, l.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: s } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    _ = [l, o, u];
                                return (i && 'ru' === s && _.push(n), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: s, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: b,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: v(y),
                    });
                return (0, a.jsx)(S, { className: (0, r.$)({ [g().root_withOffsetForDeeplink]: A }, i), data: k });
            });
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var a = i(53548),
                r = i(52150);
            function s() {
                return (0, a.useContext)(r.H);
            }
        },
        88021: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var a,
                r = i(14022),
                s = i(53548),
                l = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (l[e](i, i.exports, o), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        n();
                    }, [i, n]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    (null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n));
                                }
                            );
                        }, [i, n]));
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
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: a && s,
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
            i.d(t, { N: () => p });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                m = i(94398),
                _ = i(17332),
                v = i.n(_);
            let p = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: _, variant: p, size: h = 'xxxs', ...x } = e,
                    { formatMessage: g } = (0, n.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, u.g)(),
                    [C, A] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    i && i().then(A);
                }, [i, s]);
                let {
                    iconVariant: b,
                    descriptionText: k,
                    isTooltipEnabled: S,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: a, isMobile: r } = e,
                        s = (null == a ? void 0 : a.join('\n')) || '';
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
                        descriptionText: s,
                        isTooltipEnabled: !!(null == a ? void 0 : a.length) && !r,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: p, descriptionTexts: C, isMobile: y }, g);
                return (0, a.jsx)(m.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, a.jsx)('span', {
                        className: _,
                        children: (0, a.jsx)(c.I, {
                            className: (0, r.$)(v().explicitMark, t),
                            'aria-label': T,
                            variant: b,
                            size: h,
                            ...x,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var a = i(88800),
                r = i(2058),
                s = i(29993),
                l = i(87762),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                m = i(53548),
                _ = i(79390),
                v = i(96295);
            let p = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: p },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, r.A)(),
                    { notify: x } = (0, o.l)(),
                    g = (() => {
                        let { notify: e } = (0, o.l)(),
                            { fullscreenPlayer: t } = (0, c.g)(),
                            [i, l] = (0, m.useState)(!1),
                            { formatMessage: p } = (0, r.A)();
                        return (0, s.c)(async (r) => {
                            let { album: s, withLink: o = !0, withNotification: c = !0 } = r;
                            if (i) return;
                            let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                            l(!0);
                            let h = await s.toggleLike();
                            if ((l(!1), !c)) return;
                            let x = t.modal.isOpened;
                            h === _.f.OK
                                ? e((0, a.jsx)(v.T, { withLink: o, album: m }), { containerId: x ? n.u.FULLSCREEN_INFO : n.u.INFO })
                                : e((0, a.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: x ? n.u.FULLSCREEN_ERROR : n.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: y } = (0, l.T)();
                return (0, s.c)(async () => {
                    if (e)
                        return p({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? g({ album: e })
                              : void x((0, a.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                });
            };
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => p });
            var a = i(88800),
                r = i(98644),
                s = i(65724),
                l = i(53548),
                n = i(2058),
                o = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, n.A)(),
                    c = (0, l.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, i),
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
            let v = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, n.A)(),
                        c = (0, l.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, i),
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
                p = (e) => {
                    let { isActive: t, variant: i, className: s } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(v, { isActive: t, className: s });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var a = i(53548);
            let r = (0, a.createContext)(null),
                s = () => (0, a.useContext)(r);
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(88800),
                r = i(17392),
                s = i(17610),
                l = i(29504),
                n = i(37438),
                o = i.n(n);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: n, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        n && (0, a.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, a.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(58217),
                r = i(85587);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(88800),
                r = i(84961),
                s = i(42729),
                l = i(5048);
            let n = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    n = (0, l.b)(t.type);
                return (0, a.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n,
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
        99479: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => v });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(17392),
                n = i(21416),
                o = i(29504),
                c = i(72288),
                d = i(16704),
                u = i(34945),
                m = i(45873),
                _ = i.n(m);
            let v = (0, s.PA)((e) => {
                let { className: t, track: i, position: s, onPlayButtonClick: m, isPlaying: v, isCurrent: p, withDislikeStyles: h = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, c.g)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(t, _().root, {
                        [_().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [_().root_playing]: v,
                        [_().root_disliked]: i.isDisliked && h,
                        [_().root_current]: p,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !x && (0, a.jsx)(u.P, { stopAnimation: !v, className: _().playingAnimation }),
                                    x && g && (0, a.jsx)(n.y, { size: 'xs', className: _().spinner }),
                                    !g &&
                                        (0, a.jsx)(d.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: v,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        s &&
                            (0, a.jsx)(o.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': l.Kq.track.TRACK_POSITION,
                                children: s,
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
                3076, 7435, 3637, 8752, 5108, 127, 1191, 1931, 8380, 4596, 6740, 2798, 7617, 7759, 5083, 6316, 6706, 4771, 1311, 5201, 8832, 6904, 5977, 2058, 2881, 8628,
                9693, 6326, 2843, 4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 9934, 4561, 9337, 818, 4322, 1372, 8835, 5277, 2367, 763, 2670, 7358,
            ],
            () => e((e.s = 33034)),
        ),
            (_N_E = e.O()));
    },
]);
