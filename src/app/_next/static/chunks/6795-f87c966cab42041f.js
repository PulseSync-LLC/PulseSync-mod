(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6795],
    {
        6155: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryTab: () => D });
            var i = a(62936),
                r = a(19718),
                s = a(44020),
                n = a(8669),
                l = a(52409),
                o = a(20418),
                c = a(32632),
                d = a(42561),
                m = a(40676),
                u = a(64077),
                v = a(79950),
                y = a(26731),
                _ = a(81959),
                h = a(81628),
                g = a(85906);
            let x = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: _.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                b = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        { musicHistory: n } = (0, d.Pjs)(),
                        l = (0, s.useId)(),
                        o = (0, s.useRef)(null),
                        { observeElement: c, unobserveElement: u } = (0, s.useContext)(m.MusicHistoryIntersectionObserverContext);
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
                                        n.getItems(this.index), u(l);
                                    },
                                });
                        }, [i, t, l, n, c, a, r, u]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var p = a(66161),
                I = a(97795),
                S = a.n(I);
            let k = (0, r.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: m } = b({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': m,
                          ref: c,
                          children: (0, i.jsx)(g.DS, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': m,
                              className: S().trackShimmer,
                              variant: t === _.K.Album ? d.Xjt.ALBUM : d.Xjt.PLAYLIST,
                          }),
                      })
                    : t === _.K.Album
                      ? (0, i.jsx)(p.FR, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(p.Kt, { track: a.data, playContextParams: o });
            });
            var A = a(13413),
                C = a.n(A);
            let T = (0, r.PA)((e) => {
                    var t, a, r, l, c;
                    let { album: m, tabIndex: u, blockIndex: p } = e,
                        { ref: I, intersectionPropertyId: S } = b({ id: m.id, tabIndex: u, blockIndex: p }),
                        { from: A } = (0, d.fyy)({ blockId: 'album-'.concat(m.id) }),
                        T = (0, s.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, i.jsx)(h.iQ, {
                                      className: C().artists,
                                      linkClassName: C().artistLink,
                                      artists: null == (e = m.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = m.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [m.available, null == (t = m.meta) ? void 0 : t.artistNames, null == (a = m.meta) ? void 0 : a.artists]),
                        H = (0, s.useMemo)(() => {
                            var e, t, a;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(g.Mo, { isActive: m.isShimmerActive, className: C().header, withDescription: !0 })
                                : (0, i.jsx)(g.Tw, {
                                      className: C().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: T,
                                      titleClassName: C().headerTitle,
                                      viewAllActionLink: null == (a = m.meta) ? void 0 : a.url,
                                      available: m.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!T,
                                  });
                        }, [
                            m.available,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (r = m.meta) ? void 0 : r.coverUri,
                            null == (l = m.meta) ? void 0 : l.title,
                            null == (c = m.meta) ? void 0 : c.url,
                            T,
                        ]),
                        M = (0, s.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = x({ entityId: e.entityId, from: A });
                                    return (0, i.jsx)(
                                        k,
                                        { type: _.K.Album, track: e, playContextParams: r, tabIndex: u, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, A, u, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: C().root,
                        ref: I,
                        'data-intersection-property-id': S,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, v.$)(C().header, C().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM),
                                children: (0, i.jsx)(y.A, { id: 'music-history.album' }),
                            }),
                            H,
                            (0, i.jsx)('div', { className: C().content, children: M }),
                        ],
                    });
                }),
                H = (0, r.PA)((e) => {
                    var t, a, r;
                    let { artist: l, tabIndex: c, blockIndex: m } = e,
                        { ref: u, intersectionPropertyId: h } = b({ id: l.id, tabIndex: c, blockIndex: m }),
                        { from: p } = (0, d.fyy)({ blockId: 'artist-'.concat(l.id) }),
                        I = (0, s.useMemo)(() => {
                            var e, t, a;
                            return l.isShimmerVisible
                                ? (0, i.jsx)(g.Mo, { isActive: l.isShimmerActive, className: C().header, coverRadius: 'round' })
                                : (0, i.jsx)(g.Tw, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: C().header,
                                      coverUrl: null == (e = l.meta) ? void 0 : e.coverUri,
                                      title: null == (t = l.meta) ? void 0 : t.name,
                                      titleClassName: C().headerTitle,
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
                                    let r = x({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        k,
                                        { type: _.K.Artist, track: e, playContextParams: r, tabIndex: c, blockIndex: m, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [l.tracks, p, c, m],
                        );
                    return (0, i.jsxs)('section', {
                        className: C().root,
                        ref: u,
                        'data-intersection-property-id': h,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, v.$)(C().header, C().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST),
                                children: (0, i.jsx)(y.A, { id: 'music-history.artist' }),
                            }),
                            I,
                            (0, i.jsx)('div', { className: C().content, children: S }),
                        ],
                    });
                });
            var M = a(12998);
            let j = (0, r.PA)((e) => {
                let { common: t, tabIndex: a, blockIndex: r } = e,
                    { ref: c, intersectionPropertyId: m } = b({ id: t.id, tabIndex: a, blockIndex: r }),
                    { from: u } = (0, d.fyy)(),
                    h = ((e) =>
                        (0, s.useMemo)(
                            () => (e === l.D.SEARCH ? (0, d.tW0)({ contextType: _.K.Various, contextId: '', entityContextType: M.h.MUSIC_HISTORY_SEARCH }) : null),
                            [e],
                        ))(t.type),
                    g = (0, s.useMemo)(
                        () =>
                            t.tracks.map((e, t) => {
                                var s;
                                let n = x({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    k,
                                    { playContextParams: n, type: _.K.Various, track: e, tabIndex: a, blockIndex: r, trackIndex: t },
                                    null == (s = e.data) ? void 0 : s.getKey(t),
                                );
                            }),
                        [t.tracks, u, a, r],
                    ),
                    p = (0, s.useMemo)(() => {
                        switch (t.type) {
                            case l.D.OTHER:
                                return (0, i.jsx)(y.A, { id: 'music-history.shuffle' });
                            case l.D.SEARCH:
                                return (0, i.jsx)(y.A, { id: 'music-history.search' });
                        }
                    }, [t.type]);
                return (0, i.jsx)(d._Fn, {
                    sourceContextData: h,
                    children: (0, i.jsxs)('section', {
                        className: C().root,
                        ref: c,
                        'data-intersection-property-id': m,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, v.$)(C().header, C().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON),
                                children: p,
                            }),
                            (0, i.jsx)('div', { className: C().content, children: g }),
                        ],
                    }),
                });
            });
            var L = a(47480);
            let N = (0, r.PA)((e) => {
                    var t, a, r, l, c;
                    let { playlist: m, tabIndex: u, blockIndex: h } = e,
                        { ref: p, intersectionPropertyId: I } = b({ id: m.id, tabIndex: u, blockIndex: h }),
                        { from: S } = (0, d.fyy)({ blockId: m.isResolved ? 'playlist-'.concat(null == (t = m.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: A } = (0, L.A)(),
                        T = (0, s.useMemo)(() => {
                            var e, t, a, r;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(g.Mo, { isActive: m.isShimmerActive, className: C().header, withDescription: !0 })
                                : (0, i.jsx)(g.Tw, {
                                      className: C().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleClassName: C().headerTitle,
                                      description: A({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = m.meta) ? void 0 : a.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = m.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            A,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (a = m.meta) ? void 0 : a.coverUri,
                            null == (r = m.meta) ? void 0 : r.title,
                            null == (l = m.meta) ? void 0 : l.tracksCount,
                            null == (c = m.meta) ? void 0 : c.url,
                        ]),
                        H = (0, s.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = x({ entityId: e.entityId, from: S });
                                    return (0, i.jsx)(
                                        k,
                                        { playContextParams: r, type: _.K.Playlist, track: e, tabIndex: u, blockIndex: h, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, S, u, h],
                        );
                    return (0, i.jsxs)('section', {
                        className: C().root,
                        ref: p,
                        'data-intersection-property-id': I,
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                className: (0, v.$)(C().header, C().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST),
                                children: (0, i.jsx)(y.A, { id: 'music-history.playlist' }),
                            }),
                            T,
                            (0, i.jsx)('div', { className: C().content, children: H }),
                        ],
                    });
                }),
                f = (0, r.PA)((e) => {
                    let { vibe: t, blockIndex: a, tabIndex: r } = e,
                        { ref: l, intersectionPropertyId: o } = b({ id: t.id, blockIndex: a, tabIndex: r }),
                        { from: m } = (0, d.fyy)({ blockId: ''.concat(d.UfI.RADIO, '-').concat(d.UfI.Q2V, '-').concat(t.id) }),
                        u = (0, s.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var s;
                                    let n = x({ entityId: e.entityId, from: m });
                                    return (0, i.jsx)(
                                        k,
                                        { playContextParams: n, type: _.K.Vibe, track: e, blockIndex: a, tabIndex: r, trackIndex: t },
                                        null == (s = e.data) ? void 0 : s.getKey(t),
                                    );
                                }),
                            [t.tracks, m, r, a],
                        );
                    return t.meta
                        ? (0, i.jsxs)('section', {
                              className: C().root,
                              ref: l,
                              'data-intersection-property-id': o,
                              ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK),
                              children: [
                                  (0, i.jsx)(c.Ks, { className: (0, v.$)(C().queryToVibeHeader, C().heading), vibe: t.meta }),
                                  (0, i.jsx)('div', { className: C().content, children: u }),
                              ],
                          })
                        : null;
                });
            var R = a(59935),
                P = a(60188);
            let E = (0, r.PA)((e) => {
                var t, a, r, l, m, u;
                let { vibe: h, blockIndex: p, tabIndex: I } = e,
                    {
                        experiments: S,
                        settings: { isMobile: A },
                    } = (0, d.Pjs)(),
                    { pageId: T } = (0, d.$au)(),
                    { blockIdForFrom: H } = (0, d.N8n)(),
                    M = (0, d.PT7)(),
                    { isFreemium: j } = (0, d.XCI)(),
                    [L, N] = (0, s.useState)(!1),
                    {
                        isPlaying: f,
                        togglePlay: E,
                        isCurrent: w,
                    } = (0, d.B0S)({ seeds: (null == (t = h.meta) ? void 0 : t.seeds) || [d.M19], pageIdForFrom: T, blockIdForFrom: H }),
                    K = (0, s.useId)(),
                    D = S.checkExperiment(d.zal.WebNextVibeDescription, 'on'),
                    { ref: B, intersectionPropertyId: O } = b({ id: h.id, blockIndex: p, tabIndex: I }),
                    { from: V } = (0, d.fyy)({ blockId: 'wave-'.concat(h.id) }),
                    U = (0, R.c)(() => {
                        if (!M()) {
                            if (j) return void N(!0);
                            E();
                        }
                    }),
                    Y = (0, R.c)((e) => {
                        if (A || 2 === e.detail) return void U();
                    }),
                    X = (0, P.L)(() => {
                        var e, t, a, i, r, s, n, l;
                        return D
                            ? {
                                  title: null == (e = h.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = h.meta)
                                          ? void 0
                                          : i.getDescription(null != (l = null == (t = h.meta) ? void 0 : t.title) ? l : null == (a = h.meta) ? void 0 : a.description),
                              }
                            : { title: null != (n = null == (r = h.meta) ? void 0 : r.title) ? n : null == (s = h.meta) ? void 0 : s.description };
                    }),
                    z = (0, s.useCallback)(() => {
                        var e, t, a, r, s;
                        return (null == (e = h.meta) ? void 0 : e.shouldShowAgent) && (null == (t = h.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(c.nr, {
                                  agent: h.meta.agent,
                                  isPlaying: f,
                                  isCurrent: w,
                                  onPlayButtonClick: U,
                                  className: C().vibeCover,
                                  playButtonIconSize: 'm',
                              })
                            : (0, i.jsx)(g.q1, {
                                  isCurrent: w,
                                  isPlaying: f,
                                  isAvailable: !0,
                                  onPlayButtonClick: U,
                                  title: null == (a = h.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (r = h.meta) ? void 0 : r.backgroundColor },
                                  ariaDescribedBy: K,
                                  coverUri: null == (s = h.meta) ? void 0 : s.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: C().vibeCover,
                                  playButtonIconSize: 'm',
                              });
                    }, [
                        U,
                        w,
                        f,
                        K,
                        null == (a = h.meta) ? void 0 : a.agent,
                        null == (r = h.meta) ? void 0 : r.backgroundColor,
                        null == (l = h.meta) ? void 0 : l.imageUrl,
                        null == (m = h.meta) ? void 0 : m.shouldShowAgent,
                        null == (u = h.meta) ? void 0 : u.title,
                    ]),
                    G = (0, P.L)(() => {
                        var e;
                        return h.isShimmerVisible
                            ? (0, i.jsx)(g.Mo, { isActive: h.isShimmerActive, className: C().header, coverRadius: 'round' })
                            : (0, i.jsxs)(g.Cj, {
                                  className: (0, v.$)(C().header, C().vibeHeader),
                                  onClick: Y,
                                  ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER),
                                  children: [
                                      (0, i.jsx)(g.SU, {
                                          isOpened: L,
                                          onOpenChange: N,
                                          isEnabled: j,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = h.meta) ? void 0 : e.stationType,
                                          renderChildren: z,
                                      }),
                                      (0, i.jsx)(g.Tw, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: K, className: C().vibeTextBlock, ...X }),
                                  ],
                              });
                    }),
                    F = (0, s.useMemo)(
                        () =>
                            h.tracks.map((e, t) => {
                                var a;
                                let r = x({ entityId: e.entityId, from: V });
                                return (0, i.jsx)(
                                    k,
                                    { playContextParams: r, type: _.K.Vibe, track: e, blockIndex: p, tabIndex: I, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [h.tracks, V, I, p],
                    );
                return (0, i.jsxs)('section', {
                    className: C().root,
                    ref: B,
                    'data-intersection-property-id': O,
                    ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK),
                    children: [
                        !D &&
                            (0, i.jsx)(o.Heading, {
                                className: (0, v.$)(C().header, C().heading),
                                variant: 'h3',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE),
                                children: (0, i.jsx)(y.A, { id: 'music-history.my-vibe' }),
                            }),
                        G,
                        (0, i.jsx)('div', { className: C().content, children: F }),
                    ],
                });
            });
            var w = a(21595),
                K = a.n(w);
            let D = (0, r.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: v, ...y } = e,
                    { musicHistory: _ } = (0, d.Pjs)(),
                    h = (0, c.fp)(),
                    g = (0, s.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case l.D.ALBUM:
                                              return (0, i.jsx)(T, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.PLAYLIST:
                                              return (0, i.jsx)(N, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.WAVE:
                                              return (0, i.jsx)(E, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.ARTIST:
                                              return (0, i.jsx)(H, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.SEARCH:
                                          case l.D.OTHER:
                                              return (0, i.jsx)(j, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case l.D.QUERY_TO_VIBE:
                                              return h ? (0, i.jsx)(f, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t)) : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, h]),
                    x = (0, u.useFormatDate)(),
                    b = (0, s.useRef)(null),
                    { observeElement: p } = (0, s.useContext)(m.MusicHistoryIntersectionObserverContext),
                    I = _.datesMap.get(t.date);
                return (
                    (0, s.useEffect)(() => {
                        p({
                            elementId: t.date,
                            elementRef: b,
                            index: 0,
                            onShow: () => {
                                _.setDatesMap(t.date, !0), r();
                            },
                            onHide: () => {
                                _.setDatesMap(t.date, !1), r();
                            },
                        });
                    }, [_, _.datesMap, p, r, t.date]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !I && v,
                        ref: b,
                        'data-intersection-property-id': t.date,
                        className: K().root,
                        ...y,
                        ...{ inert: !!(!I && v) },
                        ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB),
                        children: [
                            (0, i.jsx)(o.Heading, {
                                'data-date-anchor': t.date,
                                className: K().date,
                                variant: 'h2',
                                size: 'm',
                                ...(0, n.Am)(n.e8.musicHistory.MUSIC_HISTORY_TAB_DATE),
                                children: x(t.date),
                            }),
                            (0, i.jsx)('div', { className: K().content, children: g }),
                        ],
                    })
                );
            });
        },
        13413: (e) => {
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
        16795: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => C });
            var i = a(62936),
                r = a(79950),
                s = a(19718),
                n = a(44020),
                l = a(26731),
                o = a(8669),
                c = a(14501),
                d = a(85023),
                m = a(20418),
                u = a(53236),
                v = a(65438),
                y = a(42561),
                _ = a(85906),
                h = a(97378);
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
            var b = a(96485),
                p = a.n(b),
                I = a(30388),
                S = a(91348),
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
                        H = (0, u.lT)(),
                        M = (0, n.useMemo)(
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
                                                'aria-label': H(e, !1),
                                                title: H(e, !1),
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [H, k, a.dates, a.isShimmerVisible, b],
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
                                            (0, i.jsx)(_.FY, { className: p().carousel, carouselElement: M }),
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
        21595: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        40676: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryIntersectionObserverContext: () => i });
            let i = (0, a(44020).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        52409: (e, t, a) => {
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
        53236: (e, t, a) => {
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
            var c = a(51606),
                d = a(52409),
                m = a(90914),
                u = a(42561),
                v = a(66161);
            let y = (e) => {
                if ('fullModel' in e.data) {
                    let { fullModel: t } = e.data;
                    return (0, c.wg)({ type: d.D.TRACK, id: l(e), loadingState: u.GuX.RESOLVE, data: (0, v.vU)(t) });
                }
                return (0, c.wg)({ type: d.D.TRACK, id: l(e), data: null, loadingState: u.GuX.IDLE });
            };
            var _ = a(81628),
                h = a(33782),
                g = a(79670),
                x = a(32632);
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
            var p = a(40676);
            let I = (e) => (null == e ? void 0 : e.type) === d.D.ALBUM,
                S = (e) => (null == e ? void 0 : e.type) === d.D.ARTIST,
                k = (e) => (null == e ? void 0 : e.type) === d.D.PLAYLIST,
                A = (e) => (null == e ? void 0 : e.type) === d.D.WAVE;
            var C = a(64077),
                T = a(54690),
                H = a(46663);
            let M = (e) => ({ type: H.z4.Unloaded, meta: { id: e.entityId } }),
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
                        return e.tracks.map(M);
                    },
                })),
                N = L.props({ type: c.gK.literal(d.D.ALBUM), available: c.gK.boolean, meta: c.gK.maybeNull(m.JC) })
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
                f = L.props({ type: c.gK.literal(d.D.ARTIST), available: c.gK.boolean, meta: c.gK.maybeNull(_.PK) })
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
                R = c.gK
                    .model('MusicHistoryCommon', { id: c.gK.string, type: c.gK.union(c.gK.literal(d.D.OTHER), c.gK.literal(d.D.SEARCH)), tracks: c.gK.array(j) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(M);
                        },
                    })),
                P = L.props({ type: c.gK.literal(d.D.PLAYLIST), meta: c.gK.maybeNull(g.IP) })
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
                E = L.props({ id: c.gK.string, type: c.gK.union(c.gK.literal(d.D.WAVE), c.gK.literal(d.D.QUERY_TO_VIBE)), meta: c.gK.maybeNull(x.Gh) }).views((e) => ({
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
                w = c.gK.union(N, f, P, E, R),
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
                D = c.gK.model('MusicHistoryTab', { date: c.gK.string, blocks: c.gK.maybeNull(c.gK.array(w)) });
            var B = a(6155);
        },
        64077: (e, t, a) => {
            'use strict';
            a.d(t, { useFormatDate: () => s });
            var i = a(44020),
                r = a(47480);
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
        91348: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        96485: (e) => {
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
        97795: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
    },
]);
