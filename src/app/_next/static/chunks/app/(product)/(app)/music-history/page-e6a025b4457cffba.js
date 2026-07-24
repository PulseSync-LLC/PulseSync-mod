(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => r, W: () => s });
            var i = a(55178);
            let r = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(r);
        },
        852: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => eI });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(39407),
                o = a(21732),
                c = a(46049),
                d = a(15299),
                u = a(71926),
                _ = a(60900);
            let m = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, _.A)();
                return (0, n.useCallback)(
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
            var v = a(7189),
                p = a(3107),
                h = a(40053),
                x = a(49259),
                g = a(45066),
                y = a(57594);
            let A = (0, n.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var C = a(71483),
                b = a(41677),
                f = a(72396),
                k = a(19620),
                T = a(26781);
            let S = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: C.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                I = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        s = (0, x.s)(g.n.MUSIC_HISTORY),
                        l = (0, n.useId)(),
                        o = (0, n.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, n.useContext)(A);
                    return (
                        (0, n.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(a, '_').concat(i, '_').concat(r, '_').concat(t) : ''.concat(a, '_').concat(i, '_').concat(t),
                                n = s.indexesMap.get(e);
                            s.isInObservationRange(n) &&
                                c({
                                    elementRef: o,
                                    elementId: l,
                                    index: n,
                                    onShow() {
                                        s.getItems(this.index), d(l);
                                    },
                                });
                        }, [i, t, l, s, c, a, r, d]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var E = a(2413),
                N = a(69951),
                L = a(98350),
                w = a(34223),
                j = a(38403),
                R = a.n(j);
            let M = (0, s.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = I({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, i.jsx)(w.D, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: R().trackShimmer,
                              variant: t === C.K.Album ? L.X.ALBUM : L.X.PLAYLIST,
                          }),
                      })
                    : t === C.K.Album
                      ? (0, i.jsx)(E.F, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(N.K, { track: a.data, playContextParams: o });
            });
            var O = a(72069),
                P = a.n(O);
            let D = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { album: _, tabIndex: m, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: h } = I({ id: _.id, tabIndex: m, blockIndex: v }),
                        { from: x } = (0, f.f)({ blockId: 'album-'.concat(_.id) }),
                        g = (0, n.useMemo)(() => {
                            var e, t;
                            return _.available
                                ? (0, i.jsx)(b.i, {
                                      className: P().artists,
                                      linkClassName: P().artistLink,
                                      artists: null == (e = _.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = _.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [_.available, null == (t = _.meta) ? void 0 : t.artistNames, null == (a = _.meta) ? void 0 : a.artists]),
                        y = (0, n.useMemo)(() => {
                            var e, t, a;
                            return _.isShimmerVisible
                                ? (0, i.jsx)(T.M, { isActive: _.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(k.T, {
                                      className: P().header,
                                      coverUrl: null == (e = _.meta) ? void 0 : e.coverUri,
                                      title: null == (t = _.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: g,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = _.meta) ? void 0 : a.url,
                                      available: _.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!g,
                                  });
                        }, [
                            _.available,
                            _.isShimmerActive,
                            _.isShimmerVisible,
                            null == (s = _.meta) ? void 0 : s.coverUri,
                            null == (c = _.meta) ? void 0 : c.title,
                            null == (d = _.meta) ? void 0 : d.url,
                            g,
                        ]),
                        A = (0, n.useMemo)(
                            () =>
                                _.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: x });
                                    return (0, i.jsx)(
                                        M,
                                        { type: C.K.Album, track: e, playContextParams: r, tabIndex: m, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [_.tracks, x, m, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: p,
                        'data-intersection-property-id': h,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, i.jsx)(l.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, i.jsx)('div', { className: P().content, children: A }),
                        ],
                    });
                }),
                B = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artist: c, tabIndex: d, blockIndex: _ } = e,
                        { ref: m, intersectionPropertyId: v } = I({ id: c.id, tabIndex: d, blockIndex: _ }),
                        { from: p } = (0, f.f)({ blockId: 'artist-'.concat(c.id) }),
                        h = (0, n.useMemo)(() => {
                            var e, t, a;
                            return c.isShimmerVisible
                                ? (0, i.jsx)(T.M, { isActive: c.isShimmerActive, className: P().header, coverRadius: 'round' })
                                : (0, i.jsx)(k.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: P().header,
                                      coverUrl: null == (e = c.meta) ? void 0 : e.coverUri,
                                      title: null == (t = c.meta) ? void 0 : t.name,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = c.meta) ? void 0 : a.url,
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
                            null == (a = c.meta) ? void 0 : a.name,
                            null == (s = c.meta) ? void 0 : s.url,
                        ]),
                        x = (0, n.useMemo)(
                            () =>
                                c.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        M,
                                        { type: C.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: _, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [c.tracks, p, d, _],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: m,
                        'data-intersection-property-id': v,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.artist' }),
                            }),
                            h,
                            (0, i.jsx)('div', { className: P().content, children: x }),
                        ],
                    });
                });
            var H = a(59888),
                U = a(83778),
                V = a(46673);
            let K = (0, s.PA)((e) => {
                    let { common: t, tabIndex: a, blockIndex: s } = e,
                        { ref: c, intersectionPropertyId: d } = I({ id: t.id, tabIndex: a, blockIndex: s }),
                        { from: _ } = (0, f.f)(),
                        m = ((e) =>
                            (0, n.useMemo)(
                                () => (e === v.D.SEARCH ? (0, V.t)({ contextType: C.K.Various, contextId: '', entityContextType: U.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, n.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let n = S({ entityId: e.entityId, from: _ });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: n, type: C.K.Various, track: e, tabIndex: a, blockIndex: s, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, _, a, s],
                        ),
                        h = (0, n.useMemo)(() => {
                            switch (t.type) {
                                case v.D.OTHER:
                                    return (0, i.jsx)(l.A, { id: 'music-history.shuffle' });
                                case v.D.SEARCH:
                                    return (0, i.jsx)(l.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, i.jsx)(H._, {
                        sourceContextData: m,
                        children: (0, i.jsxs)('section', {
                            className: P().root,
                            ref: c,
                            'data-intersection-property-id': d,
                            'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, i.jsx)(u.DZ, {
                                    className: (0, r.$)(P().header, P().heading),
                                    variant: 'h3',
                                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: h,
                                }),
                                (0, i.jsx)('div', { className: P().content, children: p }),
                            ],
                        }),
                    });
                }),
                W = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { playlist: m, tabIndex: v, blockIndex: p } = e,
                        { ref: h, intersectionPropertyId: x } = I({ id: m.id, tabIndex: v, blockIndex: p }),
                        { from: g } = (0, f.f)({ blockId: m.isResolved ? 'playlist-'.concat(null == (t = m.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, _.A)(),
                        A = (0, n.useMemo)(() => {
                            var e, t, a, r;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(T.M, { isActive: m.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(k.T, {
                                      className: P().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleClassName: P().headerTitle,
                                      description: y({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = m.meta) ? void 0 : a.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = m.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            y,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (a = m.meta) ? void 0 : a.coverUri,
                            null == (s = m.meta) ? void 0 : s.title,
                            null == (c = m.meta) ? void 0 : c.tracksCount,
                            null == (d = m.meta) ? void 0 : d.url,
                        ]),
                        b = (0, n.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: g });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: r, type: C.K.Playlist, track: e, tabIndex: v, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, g, v, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: h,
                        'data-intersection-property-id': x,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.playlist' }),
                            }),
                            A,
                            (0, i.jsx)('div', { className: P().content, children: b }),
                        ],
                    });
                });
            var Y = a(2755),
                z = a(37862);
            let G = (0, s.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: a, blockIndex: s, tabIndex: l } = e,
                    { ref: c, intersectionPropertyId: d } = I({ id: a.id, blockIndex: s, tabIndex: l }),
                    { from: u } = (0, f.f)({ blockId: ''.concat(z.U.RADIO, '-').concat(z.U.Q2V, '-').concat(a.id) }),
                    _ = (0, n.useMemo)(
                        () =>
                            a.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: C.K.Vibe, track: e, blockIndex: s, tabIndex: l, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [a.tracks, u, l, s],
                    );
                return a.meta
                    ? (0, i.jsxs)('section', {
                          className: P().root,
                          ref: c,
                          'data-intersection-property-id': d,
                          'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, i.jsx)(Y.K, { className: (0, r.$)(P().queryToVibeHeader, P().heading), requestAwakeLumenModal: t, vibe: a.meta }),
                              (0, i.jsx)('div', { className: P().content, children: _ }),
                          ],
                      })
                    : null;
            });
            var F = a(91027),
                $ = a(6752),
                Q = a(19529),
                X = a(71735),
                q = a(84782),
                J = a(37240),
                Z = a(7697),
                ee = a(43564),
                et = a(79406),
                ea = a(8322),
                ei = a(32156),
                er = a(1444),
                es = a(40229);
            let en = (0, s.PA)((e) => {
                var t, a, s, c, d, _;
                let { vibe: m, blockIndex: p, tabIndex: h } = e,
                    {
                        experiments: x,
                        settings: { isMobile: g },
                    } = (0, y.g)(),
                    { pageId: A } = (0, J.$)(),
                    { blockIdForFrom: b } = (0, q.N)(),
                    E = (0, X.P)(),
                    { withPlusPopoverWeb: N } = (0, Z.X)(),
                    [L, w] = (0, n.useState)(!1),
                    {
                        isPlaying: j,
                        togglePlay: R,
                        isCurrent: O,
                    } = (0, ee.B)({ seeds: (null == (t = m.meta) ? void 0 : t.seeds) || [ea.M1], pageIdForFrom: A, blockIdForFrom: b }),
                    D = (0, n.useId)(),
                    B = x.checkExperiment(et.z.WebNextVibeDescription, 'on'),
                    H = m.type === v.D.MULTIVIBE_WAVE,
                    U = H ? 'xs' : 'm',
                    { ref: V, intersectionPropertyId: K } = I({ id: m.id, blockIndex: p, tabIndex: h }),
                    { from: W } = (0, f.f)({ blockId: 'wave-'.concat(m.id) }),
                    Y = (0, F.c)(() => {
                        if (!E()) {
                            if (N) return void w(!0);
                            R();
                        }
                    }),
                    z = (0, F.c)((e) => {
                        if (g || 2 === e.detail) return void Y();
                    }),
                    G = (0, $.L)(() => {
                        var e, t, a, i, r, s, n, l;
                        return B
                            ? {
                                  title: null == (e = m.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = m.meta)
                                          ? void 0
                                          : i.getDescription(null != (l = null == (t = m.meta) ? void 0 : t.title) ? l : null == (a = m.meta) ? void 0 : a.description),
                              }
                            : { title: null != (n = null == (r = m.meta) ? void 0 : r.title) ? n : null == (s = m.meta) ? void 0 : s.description };
                    }),
                    en = (0, n.useCallback)(() => {
                        var e, t, a, s, n;
                        return (null == (e = m.meta) ? void 0 : e.shouldShowAgent) && (null == (t = m.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(Q.n, {
                                  agent: m.meta.agent,
                                  isPlaying: j,
                                  isCurrent: O,
                                  onPlayButtonClick: Y,
                                  className: P().vibeCover,
                                  playButtonIconSize: U,
                                  fallbackIconSize: U,
                              })
                            : (0, i.jsx)(es.q, {
                                  isCurrent: O,
                                  isPlaying: j,
                                  isAvailable: !0,
                                  onPlayButtonClick: Y,
                                  title: null == (a = m.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (s = m.meta) ? void 0 : s.backgroundColor },
                                  ariaDescribedBy: D,
                                  coverUri: null == (n = m.meta) ? void 0 : n.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: H }),
                                  playButtonIconSize: U,
                                  fallbackIconSize: U,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: H }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: H }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: H }),
                              });
                    }, [
                        Y,
                        O,
                        j,
                        D,
                        null == (a = m.meta) ? void 0 : a.agent,
                        null == (s = m.meta) ? void 0 : s.backgroundColor,
                        null == (c = m.meta) ? void 0 : c.imageUrl,
                        null == (d = m.meta) ? void 0 : d.shouldShowAgent,
                        null == (_ = m.meta) ? void 0 : _.title,
                        H,
                        U,
                    ]),
                    el = (0, $.L)(() => {
                        var e;
                        return m.isShimmerVisible
                            ? (0, i.jsx)(T.M, { isActive: m.isShimmerActive, className: P().header, coverRadius: 'round' })
                            : (0, i.jsxs)(er.C, {
                                  className: (0, r.$)(P().header, P().vibeHeader),
                                  onClick: z,
                                  'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, i.jsx)(ei.S, {
                                          isOpened: L,
                                          onOpenChange: w,
                                          isEnabled: N,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = m.meta) ? void 0 : e.stationType,
                                          renderChildren: en,
                                      }),
                                      (0, i.jsx)(k.T, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: D, className: P().vibeTextBlock, ...G }),
                                  ],
                              });
                    }),
                    eo = (0, n.useMemo)(
                        () =>
                            m.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: W });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: C.K.Vibe, track: e, blockIndex: p, tabIndex: h, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [m.tracks, W, h, p],
                    );
                return (0, i.jsxs)('section', {
                    className: P().root,
                    ref: V,
                    'data-intersection-property-id': K,
                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !B &&
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, i.jsx)(l.A, { id: 'music-history.my-vibe' }),
                            }),
                        el,
                        (0, i.jsx)('div', { className: P().content, children: eo }),
                    ],
                });
            });
            var el = a(84507),
                eo = a.n(el);
            let ec = (0, s.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: s, ...l } = e,
                    { lumen: c } = (0, y.g)(),
                    d = (0, x.s)(g.n.MUSIC_HISTORY),
                    { awakeLumenModal: _, requestAwakeLumenModal: C } = (0, p.z)(),
                    b = (0, h.f)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case v.D.ALBUM:
                                              return (0, i.jsx)(D, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.PLAYLIST:
                                              return (0, i.jsx)(W, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.MULTIVIBE_WAVE:
                                          case v.D.WAVE:
                                              return (0, i.jsx)(en, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.ARTIST:
                                              return (0, i.jsx)(B, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.SEARCH:
                                          case v.D.OTHER:
                                              return (0, i.jsx)(K, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.QUERY_TO_VIBE:
                                              return b
                                                  ? (0, i.jsx)(G, { requestAwakeLumenModal: C, vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, b, C]),
                    k = m(),
                    T = (0, n.useRef)(null),
                    { observeElement: S } = (0, n.useContext)(A),
                    I = d.datesMap.get(t.date);
                return (
                    (0, n.useEffect)(() => {
                        S({
                            elementId: t.date,
                            elementRef: T,
                            index: 0,
                            onShow: () => {
                                d.setDatesMap(t.date, !0), r();
                            },
                            onHide: () => {
                                d.setDatesMap(t.date, !1), r();
                            },
                        });
                    }, [d, d.datesMap, S, r, t.date]),
                    (0, n.useEffect)(() => {
                        c.isEnabled && c.getData();
                    }, [c]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !I && s,
                        ref: T,
                        'data-intersection-property-id': t.date,
                        className: eo().root,
                        ...l,
                        ...{ inert: !!(!I && s) },
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            _,
                            (0, i.jsx)(u.DZ, {
                                'data-date-anchor': t.date,
                                className: eo().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: k(t.date),
                            }),
                            (0, i.jsx)('div', { className: eo().content, children: f }),
                        ],
                    })
                );
            });
            var ed = a(64170),
                eu = a(48922),
                e_ = a(22714),
                em = a(83920),
                ev = a(3796),
                ep = a(28563),
                eh = a(58054),
                ex = a(32468),
                eg = a(12894),
                ey = a(45180),
                eA = a(8946),
                eC = a(42406);
            let eb = (e) => {
                    let { children: t } = e,
                        a = (0, n.useRef)({}),
                        r = (0, n.useMemo)(
                            () =>
                                (0, eC.Gv)((e) => {
                                    var t, i;
                                    let r = (0, eC.L5)(e.target),
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
                    return (0, i.jsx)(A.Provider, { value: o, children: t });
                },
                ef = async (e, t) =>
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
            var ek = a(87461),
                eT = a.n(ek),
                eS = a(73354);
            let eI = (0, s.PA)(() => {
                let [e, t] = (0, n.useState)(!1),
                    a = (0, x.s)(g.n.MUSIC_HISTORY),
                    { contentScrollRef: s, setContentScrollRef: _ } = (0, em.g)(),
                    v = (0, d.zb)(0),
                    p = (0, n.useRef)(!1),
                    h = (0, n.useRef)(null),
                    y = (0, n.useCallback)(
                        async (e) => {
                            var i;
                            t(!0);
                            let r = a.dates[e];
                            if (!r) return;
                            null == (i = v.onTabChange) || i.call(v, e), (p.current = !0);
                            let n = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            n && ((h.current = s), await ef(n, h)), (p.current = !1);
                        },
                        [a.dates, v, s],
                    ),
                    A = (0, n.useCallback)(() => {
                        if (p.current) return;
                        let e = a.dates.findIndex((e) => a.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = v.onTabChange) || t.call(v, e);
                        }
                    }, [a.dates, a.datesMap, v]);
                (0, n.useEffect)(() => () => a.reset(), [a]), (0, ev.J)(a.isResolved);
                let C = (0, n.useMemo)(() => {
                        var t;
                        return a.isRejected
                            ? (0, i.jsx)(ed.SomethingWentWrong, { className: (0, r.$)(eT().error, eT().important), withBackwardControl: !1 })
                            : a.isShimmerVisible
                              ? (0, i.jsx)(eS.v, { isActive: a.isShimmerActive })
                              : a.isEmpty
                                ? (0, i.jsx)('div', {
                                      className: eT().empty,
                                      children: (0, i.jsx)(u.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, i.jsx)(l.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = a.tabs)
                                  ? void 0
                                  : t.map((t, a) =>
                                        (0, i.jsx)(ec, { onTabShowOrHide: A, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e }, a),
                                    );
                    }, [A, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                    b = m(),
                    f = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)(eA.wI, {
                                isShimmerVisible: a.isShimmerVisible,
                                className: eT().tabs,
                                ...v,
                                onTabChange: y,
                                shimmer: (0, i.jsx)(eA.zr, {
                                    className: eT().tabs,
                                    shimmerClassName: (0, r.$)(eT().tab, { [eT().tab_isLoading]: a.isShimmerVisible }),
                                    count: 5,
                                }),
                                children: a.dates.map((e, t) =>
                                    (0, i.jsx)(
                                        ey.o,
                                        {
                                            className: (0, r.$)(eT().tab, { [eT().tab_selected]: t === v.value }),
                                            titleClassName: eT().date,
                                            'aria-label': b(e, !1),
                                            title: b(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [b, y, a.dates, a.isShimmerVisible, v],
                    );
                return (
                    a.isNeededToLoad && (0, n.use)(a.getMusicHistory()),
                    (0, i.jsx)(e_.n, {
                        pageId: eu._Q.HISTORY,
                        children: (0, i.jsxs)('div', {
                            className: eT().root,
                            'data-test-id': o.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: eT().headerContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: eT().header,
                                            children: [
                                                (0, i.jsx)(eg.L, { withForwardControl: !1 }),
                                                (0, i.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, i.jsx)(l.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(ep.F, { className: eT().carousel, carouselElement: f }),
                                    ],
                                }),
                                (0, i.jsxs)(c.N, {
                                    ref: _,
                                    className: eT().scroll,
                                    containerClassName: eT().scrollContainer,
                                    children: [
                                        (0, i.jsx)(eb, { children: (0, i.jsx)('div', { className: eT().content, children: C }) }),
                                        (0, i.jsx)(ex.A, { children: (0, i.jsx)(eh.w, { className: eT().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        1001: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        2413: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(32290),
                r = a(96103),
                s = a(55178),
                n = a(21732),
                l = a(90169),
                o = a(57594),
                c = a(8677),
                d = a(68912),
                u = a(83521),
                _ = a(92102),
                m = a(8200),
                v = a.n(m);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: a, position: r, playContextParams: m, withLightning: p } = e,
                    h = (0, l.D)({ playContextParams: m, entityId: t.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, o.g)(),
                    g = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, i.jsx)(_.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(d.j, { withArtistLink: !x, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: g,
                    controls: (0, i.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: m.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        2755: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => _ });
            var i = a(32290),
                r = a(63618),
                s = a(57594),
                n = a(14257),
                l = a(90625),
                o = a(28301),
                c = a.n(o);
            let d = {
                    [n.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [n.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                _ = (e) => {
                    let { className: t, ...a } = e,
                        { lumen: n } = (0, s.g)();
                    return (0, i.jsx)(l.D, {
                        className: (0, r.$)(c().root, t),
                        lumenImages: n.getFallbackImage(a.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: u,
                        ...a,
                    });
                };
        },
        3107: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => L });
            var i = a(32290),
                r = a(55178),
                s = a(16172),
                n = a(91027),
                l = a(6752),
                o = a(48922),
                c = a(26042),
                d = a(22714),
                u = a(57594),
                _ = a(63618),
                m = a(96103),
                v = a(60900),
                p = a(21732),
                h = a(63423),
                x = a(84638),
                g = a(52068),
                y = a(62376),
                A = a(79374),
                C = a(2792),
                b = a(37240),
                f = a(84051),
                k = a(61945),
                T = a(75314),
                S = a(14257),
                I = a(61280),
                E = a.n(I);
            let N = (0, m.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: a,
                            settings: { isMobile: l },
                        } = (0, u.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        { language: d } = (0, k.h)(),
                        m = (0, r.useRef)(null),
                        [I, N] = (0, r.useState)(!1),
                        [L, w] = (0, r.useState)(!1),
                        j = (() => {
                            let e = (0, g.st)(),
                                { hash: t } = (0, g.gf)(),
                                a = (0, y.U)(),
                                { pageId: i, pageStyle: r, pagePlacement: l } = (0, b.$)(),
                                { objectId: c = '', objectType: d } = (0, C.J)();
                            return (0, n.c)((n) => {
                                let { actionType: u, mainObjectType: _ = d, mainObjectId: m = c, userInteractionType: v = s.gi.Tap } = n;
                                if (!e || !t || !i || !o.xK.includes(i) || !o.fD.includes(i)) return;
                                let p = A.W[i];
                                if (!p) return;
                                let h = (0, s.Fx)({
                                    params: {
                                        hash: t,
                                        pageId: p,
                                        pageStyle: r,
                                        pagePlacement: l,
                                        mainObjectType: _,
                                        mainObjectId: m,
                                        actionType: u,
                                        userInteractionType: v,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                h && (0, s.bv)(e.evgenInstance, h);
                            });
                        })(),
                        R = (0, f.l)({ mainObjectType: s.ky.Lumen }),
                        M = (0, n.c)(async (e) => {
                            let t = a.isAwakened;
                            try {
                                e || (await a.getData(!0));
                            } finally {
                                e || (!t && a.isAwakened && j({ actionType: s.X2.LumenAwakened }), R(!1), (m.current = null)), N(e);
                            }
                        }),
                        O = (0, n.c)(() => M(!1)),
                        P = (0, n.c)(() => {
                            var e;
                            null == (e = m.current) || e.call(m), M(!1);
                        });
                    return (
                        (0, r.useEffect)(() => {
                            t.current = (e) => {
                                (m.current = e), R(!0), N(!0);
                            };
                        }, [t, R]),
                        (0, r.useEffect)(() => {
                            if (!I) return void w(!1);
                            let e = window.setTimeout(() => w(!0), a.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [I, a.playButtonShowDelay]),
                        (0, i.jsxs)(x.a, {
                            open: I,
                            onOpenChange: M,
                            onClose: O,
                            placement: l ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, _.$)(E().root, (0, T.J)(S.S.Dark)),
                            headerClassName: E().header,
                            contentClassName: E().content,
                            closeOnOutsidePress: !0,
                            closeButtonProps: { 'data-test-id': p.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON },
                            escapeKey: !0,
                            'data-test-id': p.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, i.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: E().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, i.jsx)(h.$, {
                                    className: (0, _.$)(E().playButton, L && E().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: P,
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                L = () => {
                    let { lumen: e } = (0, u.g)(),
                        t = (0, r.useRef)(() => void 0),
                        a = (0, n.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, l.L)(() => {
                            if (e.isEnabled)
                                return (0, i.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: o._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: s.QL.Sheet,
                                    pagePlacement: s.c4.Bottom,
                                    children: (0, i.jsx)(c.B, { objectId: '', objectType: s.ky.Lumen, children: (0, i.jsx)(N, { requestAwakeLumenModalRef: t }) }),
                                });
                        }),
                        requestAwakeLumenModal: a,
                    };
                };
        },
        3796: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var i = a(21916),
                r = a(55178);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [a, s] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, a, t]);
            };
        },
        4820: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => c });
            var i = a(32290),
                r = a(55178),
                s = a(21732),
                n = a(71926),
                l = a(91624),
                o = a.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5154: (e, t, a) => {
            'use strict';
            a.d(t, { v2: () => c, $f: () => r(), VN: () => n(), SE: () => o() });
            var i = a(50880),
                r = a.n(i),
                s = a(59449),
                n = a.n(s),
                l = a(28488),
                o = a.n(l);
            let c = {
                src: '/_next/static/media/artist.c49b2bfa.png',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEU7SUNzfno6TEYVIB4tOTVMaXExOjY1PTpEUEw+T0k2RUA0Qz40Qz1UXVpAS0dncG1IUk6VnZuIkI3hJMzHAAAADHRSTlMu/e4u/gCv7fix563DJ+jkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBhxHAIAwEsMe4ci6Q/YeNBEG4BwSg9VYSEL3e8A1QzjfcB5ZZlXmg7FXOim23+9qGQM0U8gNH4wIMxKVMaQAAAABJRU5ErkJggg==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
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
                        (e.MULTIVIBE_WAVE = 'multivibe_wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search');
                })(i || (i = {}));
        },
        8200: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        8626: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        8677: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => O });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(39407),
                c = a(16172),
                d = a(21732),
                u = a(91027),
                _ = a(82586),
                m = a(70280),
                v = a(71926),
                p = a(17705),
                h = a(63423);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: s, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: m } = (0, l.A)(),
                    v = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    p = (0, n.useCallback)(
                        (e) => {
                            null == r || r(), e.stopPropagation();
                        },
                        [r],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': v,
                    onClick: p,
                    icon: (0, i.jsx)(_.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = a(71735),
                y = a(54391),
                A = a(22191),
                C = a(28999),
                b = a(57594),
                f = a(92744),
                k = a(29268),
                T = a(4008),
                S = a(53161),
                I = a(52843),
                E = a(39400),
                N = a(54714),
                L = a.n(N),
                w = a(38420),
                j = a(92565),
                R = a.n(j);
            let M = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(w.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                O = (0, s.PA)((e) => {
                    var t, a;
                    let {
                            className: s,
                            track: h,
                            withLightning: N,
                            ignoreDislikedStyles: w,
                            onLikeClick: j,
                            utmLink: R,
                            withSecondaryColor: O,
                            handleRemove: P,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: H,
                            hideControls: U,
                        } = e,
                        { user: V, trailer: K } = (0, b.g)(),
                        { formatMessage: W } = (0, l.A)(),
                        { sendLikeSearchFeedback: Y } = (0, C.z)(),
                        [z, G] = (0, n.useState)(!1),
                        [F, $] = (0, n.useState)(!1),
                        Q = (0, g.P)(),
                        X = (0, p.K)(h),
                        q = (0, A.P)(Math.round((null != (a = h.durationMs) ? a : 0) / 1e3)),
                        J = (0, y.F)(),
                        Z = V.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !U,
                        et = (0, u.c)(async () => {
                            z || h.isLiked || (G(!0), null == Y || Y()), await X(), null == j || j(h.isLiked);
                        }),
                        ea = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, u.c)((e) => {
                            if ((e.stopPropagation(), Q())) return void e.preventDefault();
                            K.openTrackTrailer(h.id), J(c.ky.Track, h.id);
                        }),
                        er = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(E._, {
                                        track: h,
                                        open: F,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(L().contextMenu, { [L().contextMenu_visible]: F }),
                                        handleRemove: P,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, P, F, ee, D, h, R]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(L().root, L().controls, s, {
                            [L().controls_dislikedControls]: h.isDisliked,
                            [L().controls_dislikedColors]: h.isDisliked && !w,
                            [L().controls_disabled]: !h.isAvailable,
                            [L().root_withSecondaryColor]: O,
                        }),
                        children: [
                            N &&
                                (0, i.jsx)(_.I, {
                                    'aria-label': W({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: L().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(_.I, {
                                            'aria-label': W({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Z && (0, i.jsx)('div', { className: (0, r.$)(L().item, L().downloadIcon), children: (0, i.jsx)(M, { track: h }) }),
                            P && !U && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(L().item, L().removeButton), onClick: P, ariaLabel: H }),
                            ee &&
                                (0, i.jsx)(T.WithOffline, {
                                    fallback: (0, i.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, r.$)(L().item, L().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !V.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, i.jsx)(T.WithOffline, {
                                    fallback: (0, i.jsx)(k.k, {
                                        className: (0, r.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, i.jsx)(v.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(L().duration, { [L().duration_hidden]: F && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / S.k7);
                                                    return (0, I.E)(t);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        12894: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(21732),
                c = a(91027),
                d = a(63423),
                u = a(82586),
                _ = a(21935),
                m = a(78842),
                v = a.n(m);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: s = !0,
                        className: m,
                        withBackwardFallback: p,
                        buttonSize: h = 'xxs',
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    { canBack: g, canForward: y, moveBack: A, moveForward: C } = (0, _.J)(p),
                    b = (0, n.useRef)(null),
                    f = (0, c.c)((e) => {
                        e.stopPropagation(), A();
                    }),
                    k = (0, c.c)((e) => {
                        e.stopPropagation(), C();
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && b.current && g && b.current.focus();
                    }, [g]),
                    (0, i.jsxs)('div', {
                        className: (0, r.$)(v().root, m),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(d.$, {
                                    ref: b,
                                    'aria-label': x({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !g,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: f,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, i.jsx)(d.$, {
                                    'aria-label': x({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: k,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        12989: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => x });
            var i = a(55178),
                r = a(16172),
                s = a(52068),
                n = a(6752),
                l = a(62376),
                o = a(1677),
                c = a(48922),
                d = a(84782),
                u = a(30915),
                _ = a(18746),
                m = a(2792),
                v = a(37240),
                p = a(51012),
                h = a(47498);
            let x = () => {
                let e = (0, l.U)(),
                    t = (0, s.st)(),
                    { hash: a } = (0, s.gf)(),
                    { pageId: x, displayReasonId: g } = (0, v.$)(),
                    { tabId: y, tabPos: A, isTabSelectedByDefault: C } = (0, h.R)(),
                    { offsetBlockPosY: b } = (0, u.u)(),
                    { blockType: f, blockId: k, blockPosX: T, blockPosY: S, mainObjectId: I, mainObjectType: E, displayReasonId: N } = (0, d.N)(),
                    { filterKey: L, filterValue: w, filterPos: j } = (0, _.G)(),
                    { objectType: R, objectsCount: M, objectId: O, objectPosX: P, objectPosY: D } = (0, m.J)(),
                    { skeleton: B } = (0, p.b)(),
                    H = null != N ? N : g,
                    U = (0, n.L)(() => (void 0 !== b && void 0 !== S ? b + S : S));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let n = o.F[x];
                        if (!n) return;
                        let l = {
                            hash: a,
                            pageId: n,
                            entityType: f,
                            entityId: k,
                            entityPosX: T,
                            entityPosY: U,
                            objectsCount: M,
                            viewUuid: s,
                            objectType: R,
                            objectId: O,
                            objectPosX: P,
                            objectPosY: D,
                        };
                        void 0 !== L && ((l.filterKey = L), (l.filterValue = w), (l.filterPos = j)),
                            c.qG.includes(x) && ((l.tabId = y), (l.tabPos = A), (l.isTabSelectedByDefault = C)),
                            B && (l.skeletonId = B),
                            'string' == typeof I && 'string' == typeof E && ((l.mainObjectType = E), (l.mainObjectId = I)),
                            H && (l.displayReasonId = H);
                        let d = (0, r.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (i ? (0, r.Pf)(t.evgenInstance, d) : (0, r.nv)(t.evgenInstance, d));
                    },
                    [t, H, k, T, U, f, L, j, w, a, C, e, I, E, O, P, D, R, M, x, B, y, A],
                );
            };
        },
        13798: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(26252),
                c = a(21732),
                d = a(6752),
                u = a(82586),
                _ = a(57594),
                m = a(60244),
                v = a(90006),
                p = a.n(v);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: s, containerClassName: v, variant: h, size: x = 'xxxs', ...g } = e,
                    { formatMessage: y } = (0, l.A)(),
                    {
                        settings: { isMobile: A },
                    } = (0, _.g)(),
                    [C, b] = (0, n.useState)(null),
                    f = (0, d.L)(() => {
                        switch (h) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    k = (0, n.useMemo)(() => y({ id: 'extra-explicit.explicit-mark' }), [y]);
                (0, n.useEffect)(() => {
                    a && a().then(b);
                }, [a, s]);
                let T = (null == C ? void 0 : C.join('\n')) || '',
                    S = !!(null == C ? void 0 : C.length) && !A,
                    I = T.length > 0 ? T : k;
                return (0, i.jsx)(m.k, {
                    description: T,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: v,
                        children: (0, i.jsx)(u.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': I,
                            variant: f,
                            size: x,
                            ...g,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14858: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(60900),
                r = a(57594),
                s = a(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, i.A)(),
                    { user: a, experiments: n } = (0, r.g)(),
                    l = 'ru' === a.account.data.userSessionRegionIso && n.checkExperiment(s.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19529: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => d });
            var i = a(32290),
                r = a(63618),
                s = a(52138),
                n = a(6752),
                l = a(40229),
                o = a(75487),
                c = a.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: a,
                    isCurrent: o,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        19620: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => y });
            var i = a(32290),
                r = a(63618),
                s = a(55178),
                n = a(16172),
                l = a(21732),
                o = a(82586),
                c = a(50162),
                d = a(86269),
                u = a(79856),
                _ = a(71926),
                m = a(95481),
                v = a(47745),
                p = a(61258),
                h = a(69e3),
                x = a.n(h);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: h,
                            subTitle: g,
                            title: y,
                            description: A,
                            viewAllActionLink: C,
                            controls: b,
                            titleSize: f = 'm',
                            coverBackgroundColor: k,
                            coverRadius: T = 's',
                            titleClassName: S,
                            titleLineClamp: I,
                            fallbackIconVariant: E,
                            available: N = !0,
                            onViewAllAction: L,
                            titleChildren: w,
                            children: j,
                            headingRef: R,
                            coverContainerClassName: M,
                            headingVariant: O = 'h3',
                            withDescriptionWidthLimit: P = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: U,
                            forwardRef: V,
                            shimmerCoverClassName: K,
                            shouldSendAnalyticsOnLoaded: W,
                            ...Y
                        } = e,
                        z = (0, m.f)(),
                        G = (0, s.useRef)(null),
                        F = a || H,
                        $ = A || U,
                        Q = (0, s.useCallback)(() => {
                            G.current && 'focus' in G.current && G.current.focus();
                        }, []),
                        X = (0, v.N)(),
                        q = (0, s.useCallback)(() => {
                            L ? L() : X({ to: n.QT.Link });
                        }, [X, L]);
                    (0, s.useEffect)(() => {
                        W && z();
                    }, [W, z]);
                    let J = (0, s.useMemo)(
                            () =>
                                y && C && N
                                    ? (0, i.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: C,
                                          onClick: q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: R,
                                                  children: y,
                                              }),
                                              w,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S, { [x().heading_notAvailable]: !N }),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: I,
                                                  ref: R,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              w,
                                          ],
                                      }),
                            [N, q, R, O, h, y, S, I, f, C, w],
                        ),
                        Z = (0, s.useMemo)(() => (U && D ? (0, i.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : A), [U, D, A, B]),
                        ee = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, K), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: E,
                                          style: { backgroundColor: k },
                                          className: x().cover,
                                          ref: G,
                                          onClick: Q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [k, a, E, Q, B, D, K, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: V,
                        ...Y,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, i.jsx)(d.t, { radius: T, className: (0, r.$)(x().coverContainer, M), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            g,
                                            J,
                                            $ &&
                                                (0, i.jsx)(_.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: P }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || j,
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        21935: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(62060),
                r = a(55178),
                s = a(83808);
            let n = (e) => {
                let t = (0, s.W)(),
                    a = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    n = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: n };
            };
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, a, n, l, o]);
                return (0, i.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(55178),
                r = a(12989),
                s = a(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(s.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            e ? e(i, a ? r : void 0) : l(i, r), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: n, intersectionPropertyId: o }
                );
            };
        },
        26042: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(10936);
            let n = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, n, l, o, c, d, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: m, children: _ });
            };
        },
        26781: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c });
            var i = a(32290),
                r = a(63618),
                s = a(86269),
                n = a(79856),
                l = a(69e3),
                o = a.n(l);
            let c = (e) => {
                let { isActive: t, coverRadius: a = 'm', withDescription: l, className: c } = e;
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(o().start, c),
                    children: [
                        (0, i.jsx)(s.t, {
                            className: o().coverContainer,
                            radius: a,
                            children: (0, i.jsx)(n.W, { isActive: t, className: o().shimmerCover, radius: 'xl' }),
                        }),
                        (0, i.jsxs)('div', {
                            className: o().textShimmerContainer,
                            children: [
                                (0, i.jsx)(n.W, { isActive: t, className: o().shimmerTitle, radius: 'xl' }),
                                l && (0, i.jsx)(n.W, { isActive: t, className: o().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        28301: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        28488: (e) => {
            e.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        28563: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => b });
            var i = a(32290),
                r = a(63618),
                s = a(42157),
                n = a(96103),
                l = a(55178),
                o = a.t(l, 2),
                c = a(21732),
                d = a(45807),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                _ = {},
                m = {};
            (() => {
                Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0);
                let e = (function e(t) {
                    var a = _[t];
                    if (void 0 !== a) return a.exports;
                    var i = (_[t] = { exports: {} });
                    return u[t](i, i.exports, e), i.exports;
                })(810);
                m.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule;
            var v = m.useForwardRef,
                p = a(54667),
                h = a(57594),
                x = a(49522),
                g = a(61954),
                y = a.n(g);
            let A = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: g,
                            withSecondaryColor: C,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, h.g)(),
                        f = v(n, null),
                        { shouldBackwardButtonBeDisabled: k, shouldForwardButtonBeDisabled: T, shouldHideControls: S } = (0, d.Y)(f),
                        [I, E] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(A, o);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [o, b]),
                        N = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = f.current) ? void 0 : t.children[e],
                                    { current: i } = f;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = a.offsetLeft - I;
                                    return;
                                }
                                let r = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                r < E && (i.scrollLeft -= r - E);
                            },
                            [f, E, I],
                        ),
                        L = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                N(e), null == (t = (i = a.props).onTabChange) || t.call(i, e);
                            },
                            [a, N],
                        ),
                        w = (0, l.cloneElement)(a, { forwardRef: f, className: (0, r.$)(y().wrapper, a.props.className, y().carousel, y().important), onTabChange: L });
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(
                            y().root,
                            {
                                [y().root_carouselBetweenArrows]: u,
                                [y().root_arrowLeft_hidden]: k,
                                [y().root_arrowRight_hidden]: T,
                                [y().root_arrow_hidden]: k && T && S,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: y().list, children: w }),
                            !b &&
                                (0, i.jsx)(x.X, {
                                    className: (0, r.$)(y().buttons, _),
                                    carouselRef: f,
                                    backwardControlClassName: y().control,
                                    forwardControlClassName: y().control,
                                    withSecondaryColor: C,
                                    buttonSize: m,
                                    buttonVariant: g,
                                }),
                        ],
                    });
                }),
                b = (0, l.forwardRef)((e, t) => (0, i.jsx)(C, { forwardRef: t, ...e }));
        },
        29268: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(32290),
                r = a(55178),
                s = a(60900),
                n = a(21732),
                l = a(63423),
                o = a(82586),
                c = a(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: v,
                            className: p,
                            forwardRef: h,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: y } = (0, s.A)(),
                        A = y({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
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
        30542: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s });
            var i = a(60900),
                r = a(64605);
            let s = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31010: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => s });
            var i = a(55178);
            let r = (0, i.createContext)(null),
                s = () => (0, i.useContext)(r);
        },
        31640: (e) => {
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
        32468: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => n });
            var i = a(32290),
                r = a(77088),
                s = a.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        34223: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => p });
            var i = a(32290),
                r = a(98350),
                s = a(63618),
                n = a(55178),
                l = a(60900),
                o = a(79856),
                c = a(91063),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = a(89661),
                m = a.n(_);
            let v = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(m().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: m().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: a, className: s } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(v, { isActive: t, className: s });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        34783: (e) => {
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
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        38403: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        38698: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageStoreProvider: () => G });
            var i = a(49259),
                r = a(45066),
                s = a(60754),
                n = a(7189),
                l = a(95732);
            let o = (e) => {
                var t, a, i, r;
                let { wave: n, agent: o } = e;
                return (0, s.wg)({
                    ...(0, l.e)({
                        title: n.name,
                        header: n.description,
                        seeds: n.seeds,
                        stationId: null != (r = null != (i = n.stationId) ? i : n.seeds[0]) ? r : '',
                        type: n.type,
                        agent: o,
                        imageUrl: null == o || null == (t = o.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == o || null == (a = o.cover) ? void 0 : a.color,
                });
            };
            var c = a(23361),
                d = a(49399),
                u = a(32012);
            let _ = (e) => {
                    let { albumId: t, trackId: a } = e.data.itemId;
                    return t ? ''.concat(a, ':').concat(t) : a;
                },
                m = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, s.wg)({ type: n.D.TRACK, id: _(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, s.wg)({ type: n.D.TRACK, id: _(e), data: null, loadingState: d.G.IDLE });
                };
            var v = a(74417),
                p = a(27576);
            let h = (e) => e.data.itemId.seeds.sort().join(',');
            var x = a(39031);
            let g = (e) => {
                let { uid: t, kind: a } = e.data.itemId;
                return ''.concat(t, ':').concat(a);
            };
            var y = a(91221);
            let A = (e) => e.data.itemId.seeds.sort().join(','),
                C = (e) => e.data.itemId.seeds.sort().join(','),
                b = (e) => {
                    var t, a;
                    let i =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case n.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.ALBUM,
                                                          available: i.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: i.album, artists: i.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(m),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: n.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(m),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: g(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(m),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.PLAYLIST, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(m) });
                                              })(e.context, e.tracks);
                                          case n.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, v.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(m),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: i,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(m),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: C(e),
                                                          meta: {
                                                              ...(0, l.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(m),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: i, id: C(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(m) });
                                              })(e.context, e.tracks);
                                          case n.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  return 'fullModel' in a
                                                      ? (0, s.wg)({
                                                            type: n.D.MULTIVIBE_WAVE,
                                                            id: h(e),
                                                            meta: o(a.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(m),
                                                        })
                                                      : (0, s.wg)({ type: n.D.MULTIVIBE_WAVE, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(m) });
                                              })(e.context, e.tracks);
                                          case n.D.SEARCH:
                                          case n.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: a } = e;
                                                  return (0, s.wg)({ type: a, id: (0, p.A)(), tracks: t.map(m) });
                                              })(e.context, e.tracks);
                                          case n.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.QUERY_TO_VIBE,
                                                          id: A(e),
                                                          meta: { ...(0, y.l)(i.wave, i.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(m),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.QUERY_TO_VIBE, id: A(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(m) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (a = (0, s.wg)(i)) ? a : null };
                },
                f = (e) => (null == e ? void 0 : e.type) === n.D.WAVE || (null == e ? void 0 : e.type) === n.D.MULTIVIBE_WAVE;
            var k = a(73715);
            let T = s.gK.compose(
                s.gK.model({
                    id: s.gK.string,
                    type: s.gK.enumeration(Object.values(n.D)),
                    tabIndex: s.gK.number,
                    blockIndex: s.gK.number,
                    trackIndex: s.gK.maybeNull(s.gK.number),
                }),
                k.X,
            );
            var S = a(12388),
                I = a(72676);
            let E = (e) => ({ type: I.z4.Unloaded, meta: { id: e.entityId } });
            var N = a(99212);
            let L = s.gK
                    .compose(s.gK.model('MusicHistoryTrack', { type: s.gK.literal(n.D.TRACK), id: s.gK.string, data: s.gK.maybeNull(N.v) }), k.X)
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
                w = s.gK.compose(s.gK.model('MusicHistoryBaseBlock', { id: s.gK.string, tracks: s.gK.array(L) }), k.X).views((e) => ({
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
                j = w
                    .props({ type: s.gK.literal(n.D.ALBUM), available: s.gK.boolean, meta: s.gK.maybeNull(S.J) })
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
            var R = a(57367);
            let M = w
                    .props({ type: s.gK.literal(n.D.ARTIST), available: s.gK.boolean, meta: s.gK.maybeNull(R.P) })
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
                O = s.gK
                    .model('MusicHistoryCommon', { id: s.gK.string, type: s.gK.union(s.gK.literal(n.D.OTHER), s.gK.literal(n.D.SEARCH)), tracks: s.gK.array(L) })
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
            var P = a(5482);
            let D = w
                .props({ type: s.gK.literal(n.D.PLAYLIST), meta: s.gK.maybeNull(P.I) })
                .views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get autoflowSeeds() {
                        var t, a;
                        return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (a = e.meta) ? void 0 : a.kind)];
                    },
                }))
                .named('MusicHistoryPlaylist');
            var B = a(1052),
                H = a(8322);
            let U = w
                    .props({
                        id: s.gK.string,
                        type: s.gK.union(s.gK.literal(n.D.WAVE), s.gK.literal(n.D.MULTIVIBE_WAVE), s.gK.literal(n.D.QUERY_TO_VIBE)),
                        meta: s.gK.maybeNull(B.G),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            var t, a;
                            return null != (a = null == (t = e.meta) ? void 0 : t.stationId) ? a : H.M1;
                        },
                        get autoflowSeeds() {
                            var i;
                            return null == (i = e.meta) ? void 0 : i.seeds;
                        },
                    })),
                V = s.gK.union(j, M, D, U, O),
                K = s.gK.model('MusicHistoryTab', { date: s.gK.string, blocks: s.gK.maybeNull(s.gK.array(V)) }),
                W = s.gK
                    .compose(
                        s.gK.model('MusicHistoryPage', {
                            indexesMap: s.gK.map(s.gK.number),
                            items: s.gK.maybeNull(s.gK.array(T)),
                            datesMap: s.gK.map(s.gK.boolean),
                            tabs: s.gK.maybeNull(s.gK.array(K)),
                        }),
                        k.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a;
                                return (e.isResolved || e.isRejected) && (null == (a = e.tabs) ? void 0 : a.length) === 0;
                            },
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            getStartAndEndIndexes(t) {
                                var a, i;
                                let r = t,
                                    s = t + 1;
                                return (
                                    (null == (a = e.items) ? void 0 : a.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (i = e.items) ? void 0 : i.slice(t, t + 25).some((e) => !e.isResolved)) && (s = t + 25),
                                    [r, s]
                                );
                            },
                            getItemsToLoad(a) {
                                var i, r;
                                let [s, n] = t.getStartAndEndIndexes(a);
                                return null != (r = null == (i = e.items) ? void 0 : i.slice(s, n).filter((e) => !e.isResolved)) ? r : [];
                            },
                            isInObservationRange(t) {
                                var a;
                                return (0 !== t && t % 25 == 0) || (e.items && t === (null == (a = e.items) ? void 0 : a.length) - 1);
                            },
                            get dates() {
                                var i, r;
                                return null != (r = null == (i = e.tabs) ? void 0 : i.map((e) => e.date)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            fillItemsAndIndexes() {
                                var t;
                                let a = 0;
                                (e.items = (0, s.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, i) => {
                                            var r;
                                            e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var s;
                                                        let n = t.id;
                                                        e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(n), a),
                                                            null == (s = e.items) ||
                                                                s.push({
                                                                    id: n,
                                                                    type: t.type,
                                                                    tabIndex: i,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++a,
                                                            t.tracks.forEach((t, s) => {
                                                                var n;
                                                                e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(s, '_').concat(t.id), a),
                                                                    null == (n = e.items) ||
                                                                        n.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: i,
                                                                            blockIndex: r,
                                                                            trackIndex: s,
                                                                            loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++a;
                                                            });
                                                    });
                                        });
                            },
                            setTrack(t, a) {
                                var i, r, s, n;
                                let { tabIndex: l, blockIndex: o, trackIndex: c } = t,
                                    { fullModel: _ } = a.data;
                                if (null === c) return;
                                let m = null == (n = e.tabs) || null == (s = n[l]) || null == (r = s.blocks) || null == (i = r[o]) ? void 0 : i.tracks[c];
                                m && ((m.data = (0, u.v)(_)), (m.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: u } = a.data,
                                    _ = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == _ ? void 0 : _.type) === n.D.ALBUM &&
                                    ((_.meta = (0, c.s)({ album: u.album, artists: u.artists })), (_.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.ARTIST && ((u.meta = (0, v.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[o];
                                f(u) &&
                                    ((u.meta = { ...(0, l.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: l } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                                f(u) && ((u.meta = o(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, s.L3)(function* () {
                                let { musicHistoryResource: a, modelActionsLogger: i } = (0, s._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    a = 0;
                                                for (let s of e.historyTabs) {
                                                    var i, r;
                                                    if (a > 1e3) break;
                                                    let e = { ...s, items: [] };
                                                    for (let t of null != (i = s.items) ? i : []) {
                                                        if (a > 1e3) break;
                                                        let i = { ...t, tracks: [] };
                                                        for (let e of t.tracks) {
                                                            if (a > 1e3) break;
                                                            i.tracks.push(e), ++a;
                                                        }
                                                        null == (r = e.items) || r.push(i);
                                                    }
                                                    e.items && e.items.length > 0 && t.historyTabs.push(e);
                                                }
                                                return t;
                                            })(i);
                                        (e.tabs = (0, s.wg)(r.historyTabs.map(b))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE);
                                    } catch (t) {
                                        i.error(t), (e.loadingState = d.G.REJECT);
                                    }
                            }),
                            getItems: (0, s.L3)(function* (a) {
                                let { musicHistoryResource: i, modelActionsLogger: r } = (0, s._$)(e);
                                try {
                                    let r = e.getItemsToLoad(a);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let s = yield i.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case n.D.ARTIST:
                                                        case n.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case n.D.PLAYLIST: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(a) } } };
                                                        }
                                                        case n.D.WAVE:
                                                        case n.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case n.D.TRACK: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: a } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        l = r.reduce((e, t) => {
                                            let a = ''.concat(t.type, '_').concat(t.id);
                                            if (a in e) {
                                                var i;
                                                null == (i = e[a]) || i.push(t);
                                            } else e[a] = [t];
                                            return e;
                                        }, {});
                                    s.items.forEach((e) => {
                                        var a;
                                        null ==
                                            (a =
                                                l[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case n.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(_(e));
                                                            case n.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(C(e));
                                                            case n.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case n.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case n.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(A(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            a.forEach((a) => {
                                                switch (e.type) {
                                                    case n.D.ALBUM:
                                                        t.setAlbum(a, e);
                                                        break;
                                                    case n.D.TRACK:
                                                        t.setTrack(a, e);
                                                        break;
                                                    case n.D.WAVE:
                                                        t.setVibe(a, e);
                                                        break;
                                                    case n.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(a, e);
                                                        break;
                                                    case n.D.PLAYLIST:
                                                        t.setPlaylist(a, e);
                                                        break;
                                                    case n.D.ARTIST:
                                                        t.setArtist(a, e);
                                                }
                                                a.loadingState = d.G.RESOLVE;
                                            });
                                    });
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            setDatesMap(t, a) {
                                e.datesMap.set(t, a);
                            },
                            reset() {
                                (e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = d.G.IDLE);
                            },
                        };
                        return t;
                    }),
                Y = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: z } = (0, i.W)({ createStore: (e) => W.create(Y, e), patchKey: r.n.MUSIC_HISTORY }),
                G = z;
        },
        40053: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => s });
            var i = a(57594),
                r = a(79406);
            let s = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: a },
                    } = (0, i.g)(),
                    s = e.checkExperiment(r.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(r.z.WebNextQueryToVibe, 'on') && (!s || !!a);
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => d });
            var i = a(32290),
                r = a(96103),
                s = a(21732),
                n = a(82586),
                l = a(19740),
                o = a(30542),
                c = a(57594);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: a, className: r, albumType: d, disabled: u } = e,
                    { user: _ } = (0, c.g)(),
                    m = t ? 'liked' : 'like',
                    v = (0, o.$)(t, d);
                return (0, i.jsx)(l.Dr, {
                    className: r,
                    onClick: a,
                    icon: (0, i.jsx)(n.I, { variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        41677: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => U });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(70280),
                o = a(57594),
                c = a(53514),
                d = a(40484),
                u = a.n(d),
                _ = a(60900),
                m = a(16172),
                v = a(21732),
                p = a(91027),
                h = a(71926),
                x = a(47745),
                g = a(84062),
                y = a(28999),
                A = a(61258),
                C = a(19383);
            let b = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: b } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: k },
                        } = (0, o.g)(),
                        T = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: S } = (0, y.z)(),
                        I = (0, x.N)(),
                        E = ((e) => {
                            let { artist: t, callback: a } = e,
                                { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = i;
                            return (0, C.l)({
                                entity: t,
                                callback: a,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close();
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                k && f.isOpened && f.close(), T(e);
                            }),
                        }),
                        N = (0, p.c)((e) => {
                            I({ to: m.QT.ArtistScreen }), null == S || S(), E(e);
                        });
                    return a && !t.various
                        ? (0, i.jsx)(A.N, {
                              'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: N,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                f = (e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  b,
                                                  {
                                                      artist: t,
                                                      withLink: a,
                                                      linkClassName: r,
                                                      captionClassName: s,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, a, r, s, l, o, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(b, {
                                artist: t,
                                withLink: a,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var k = a(39407),
                T = a(63887);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(T.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, a),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(k.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = a(8055),
                E = a(6752),
                N = a(78035),
                L = a(78176),
                w = a(83598),
                j = a.n(w);
            let R = (0, s.PA)((e) => {
                    let { label: t, artists: a, forwardRef: r } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(l.ZI, { className: j().tooltipContent, children: a.map((e) => (0, i.jsx)(L.V, { artist: e, className: j().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
            var O = a(19740),
                P = a(52598),
                D = a.n(P);
            let B = (0, s.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: s } = (0, _.A)();
                    return (0, i.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, r.$)(D().root, D().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, s.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: r } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, p.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, E.L)(() =>
                            (0, I.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(B, { artists: t, label: a }) : (0, i.jsx)(M, { artists: t, label: a })) : a;
                }),
                U = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: a = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: v,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: x,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: A = !0,
                            spoilerComponent: C,
                            withCustomTooltip: b = !0,
                            artistIdWithoutLink: k,
                            withContextMenu: T,
                        } = e,
                        I = (0, n.useRef)(null),
                        [E, N] = (0, n.useState)(!1),
                        L = y
                            ? a
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let a = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...a]) : [t.name, ...a];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: w },
                        } = (0, o.g)(),
                        j = 1 === a.length,
                        R = (0, n.useCallback)((e) => {
                            N(!0), e.preventDefault();
                        }, []),
                        M = (0, n.useMemo)(() => {
                            let e = a;
                            return (
                                _ && !E && (e = a.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!A && t.isComposer) return e.length ? e : [];
                                    let a = (0, i.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: h,
                                            withLink: m && t.id !== k && (((!w || j) && T) || !T),
                                            captionSize: x,
                                            allArtistsTitle: L,
                                            withCustomTooltip: b,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, a]) : [a];
                                }, [])
                            );
                        }, [a, _, E, A, w, j, T, p, h, m, k, x, L, b, s]),
                        O = (0, n.useMemo)(() => {
                            if (!E && _ && _ < a.length) {
                                let e = a.length - _;
                                return (0, n.isValidElement)(C) ? C : (0, i.jsx)(S, { spoilerClassName: v, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [a.length, R, E, v, C, _]),
                        P = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, i.jsx)(l.m_, {
                            referenceRef: I,
                            enabled: !!(y && L) && b && !T && !w,
                            offsetOptions: 4,
                            placement: 'top',
                            text: L,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: P,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && L && !b && !T ? L : void 0,
                                children: [M, O],
                            }),
                        });
                    return T ? (0, i.jsx)(H, { labelRef: I, artists: a, label: D }) : D;
                });
        },
        43565: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(32290),
                r = a(63618),
                s = a(82586),
                n = a(20753),
                l = a.n(n);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        45066: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => i });
            let i = {
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
        45807: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                r = a(72812),
                s = a(55178),
                n = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return n[e](a, a.exports, o), a.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, r] = (0, e.useState)(!0),
                        [s, n] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (r(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        l();
                    }, [a, l]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l);
                                }
                            );
                        }, [a, l]);
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: i && s,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        49259: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => h, s: () => x });
            var i = a(32290),
                r = a(29222),
                s = a(96103),
                n = a(21916),
                l = a(55178),
                o = a(80451),
                c = a(96218),
                d = a(5245),
                u = a(57594),
                _ = a(31726);
            (0, s.eO)(!1);
            let m = (0, l.createContext)(null),
                v = (e) => {
                    let { children: t, store: a, storeKey: r } = e,
                        s = (0, l.useMemo)(() => ({ store: a, storeKey: r }), [a, r]);
                    return (0, i.jsx)(m.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: r } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        r = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], i;
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(p, { nonce: n, patchKey: a, patchesRef: h }), (0, i.jsx)(v, { store: m, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, l.useContext)(m);
                if (!a || a.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new r.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == a ? void 0 : a.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        49522: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(32290),
                r = a(63618),
                s = a(55178),
                n = a(21732),
                l = a(45807),
                o = a(63423),
                c = a(82586),
                d = a(60178),
                u = a.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: y, shouldHideControls: A } = (0, l.Y)(t),
                    C = (0, s.useCallback)(
                        (e) => {
                            h(), e.stopPropagation();
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            x(), e.stopPropagation();
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(u().root, _),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, a, { [u().control_hidden]: A, [u().control_withSecondaryColor]: m }),
                            onClick: C,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: A, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: y,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        50880: (e) => {
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
        52138: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { h: () => i }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(i || (i = {}));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(19383),
                r = a(85017);
            let s = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: s } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
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
        56008: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(55178).createContext)({ pageAlbumId: void 0 });
        },
        58054: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => C });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(60900),
                l = a(39407),
                o = a(21732),
                c = a(71926),
                d = a(14858),
                u = a(8626),
                _ = a(31010),
                m = a(61945),
                v = a(57594),
                p = (function (e) {
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
            let h = (e, t, a) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                }
            };
            var x = a(61258),
                g = a(77088),
                y = a.n(g);
            let A = (0, s.PA)((e) => {
                    let { className: t } = e,
                        { location: a } = (0, v.g)(),
                        { formatDate: s } = (0, n.A)(),
                        { language: d } = (0, m.h)();
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    s(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, i.jsx)(x.N, {
                                        target: '_blank',
                                        href: h(p.YANDEX, a.tld, d),
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, i.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(x.N, {
                                target: '_blank',
                                href: h(p.YANDEX_PROJECTS, a.tld, d),
                                className: y().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, i.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                C = (0, s.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        { user: s, location: n } = (0, v.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: g } = (0, m.h)(),
                        C = (0, d.w)(!0),
                        b = ((e) => {
                            let { platform: t, tld: a, language: r, userRegion: s } = e,
                                n = { title: (0, i.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: h(p.COPYRIGHT_HOLDER, a, r) },
                                o = { title: (0, i.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: h(p.PRIVACY_POLICY, a, r) },
                                c = { title: (0, i.jsx)(l.A, { id: 'footer.links-terms' }), url: h(p.AGREEMENT, a, r) },
                                d = { title: (0, i.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: h(p.RECOMMENDATION_RULES, a, r) },
                                u = { title: (0, i.jsx)(l.A, { id: 'footer.links-help' }), url: h(p.HELP, a, r) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === s && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: g, userRegion: s.account.data.userSessionRegionIso });
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, { [y().root_withOffsetForDeeplink]: u }, a),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y().links,
                                children: [
                                    (0, i.jsx)('ol', {
                                        className: y().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: b.map((e) => {
                                            let { title: t, url: a } = e;
                                            return (0, i.jsx)(
                                                'li',
                                                {
                                                    className: y().item,
                                                    children: (0, i.jsx)(x.N, {
                                                        target: '_blank',
                                                        href: a,
                                                        className: y().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                a,
                                            );
                                        }),
                                    }),
                                    (0, i.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: y().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: C },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(A, {}),
                        ],
                    });
                });
        },
        59449: (e) => {
            e.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        59888: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(21183);
            let n = (e) => {
                let { sourceContextData: t, children: a } = e,
                    n = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(s.l.Provider, { value: n, children: a });
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        60244: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(32290),
                r = a(21732),
                s = a(70280),
                n = a(71926),
                l = a(48736),
                o = a.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: a, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61280: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        61945: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(55178),
                r = a(70204),
                s = a(34186);
            let n = () => {
                let e = (0, s.N)().get(r.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    n = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    o = (0, i.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, i.useMemo)(() => ({ dictionary: n, language: t, defaultLanguage: a, availableLanguages: l, setLanguage: o }), [t, o]);
            };
        },
        61954: (e) => {
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
        63363: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => g });
            var i = a(32290),
                r = a(60900),
                s = a(91027),
                n = a(67732),
                l = a(45477),
                o = a(75582),
                c = a(57594),
                d = a(90357),
                u = a(92708),
                _ = a(55178),
                m = a(63380),
                v = a(96103),
                p = a(97755),
                h = a(79238);
            let x = (0, v.PA)((e) => {
                    let { album: t, closeToast: a, withLink: r } = e,
                        s = (0, h.b)(t);
                    return (0, i.jsx)(p.O, {
                        closeToast: a,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: r,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: a,
                            albumCPA: { isPlusCPAEnabled: v },
                        } = (0, c.g)(),
                        { formatMessage: p } = (0, r.A)(),
                        { notify: h } = (0, o.l)(),
                        g = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, a] = (0, _.useState)(!1),
                                { formatMessage: n } = (0, r.A)();
                            return (0, s.c)(async (r) => {
                                let { album: s, withLink: o = !0, withNotification: c = !0 } = r;
                                if (t) return;
                                let _ = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                a(!0);
                                let v = await s.toggleLike();
                                a(!1),
                                    c &&
                                        (v === m.f.OK
                                            ? e((0, i.jsx)(x, { withLink: o, album: _ }), { containerId: l.u.INFO })
                                            : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: y } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return v({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void a.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void h((0, i.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => C });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(39407),
                c = a(63423),
                d = a(82586),
                u = a(71926),
                _ = a(16172),
                m = a(52068),
                v = a(62376),
                p = a(37240),
                h = a(83920),
                x = a(20472),
                g = a(12894),
                y = a(30310),
                A = a.n(y);
            let C = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    y = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: a } = (0, m.gf)(),
                        { pageId: i } = (0, p.$)(),
                        r = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let s = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, _.z5)(t.evgenInstance, s);
                    }, [t, e, a, i, r]);
                })(y);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: a } = (0, p.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    b = (0, n.useCallback)(() => {
                        C(), (window.location.href = x.Z.main.href);
                    }, [C]),
                    { contentRef: f } = (0, h.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(A().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(g.L, { withBackwardFallback: '/', className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !f }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(A().content, { [A().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(A().title, A().important), variant: 'h3', size: 'xs', children: y }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: b,
                                    className: A().button,
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
        67732: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => s });
            var i = a(55178),
                r = a(56008);
            function s() {
                return (0, i.useContext)(r.H);
            }
        },
        68912: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(21916),
                l = a(55178),
                o = a(60900),
                c = a(39407),
                d = a(21732),
                u = a(70280),
                _ = a(71926),
                m = a(41677),
                v = a(28999),
                p = a(57594),
                h = a(53514),
                x = a(85017),
                g = a(13798),
                y = a(61258),
                A = a(25649),
                C = a(24760),
                b = a(84141),
                f = a(5856),
                k = a.n(f);
            let T = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: s,
                        albumArtists: f,
                        withExplicitMark: T = !0,
                        withSecondaryColor: S,
                        captionSize: I = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: L,
                        artistsClassName: w,
                        ignoreDislikedStyles: j,
                        withCustomTooltip: R = !0,
                        hasLineClamp: M = !0,
                        withSavingQueryParams: O,
                        beforeTitle: P,
                        withArtistLink: D = !0,
                        withTrackLink: B = !0,
                        afterTitle: H,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: V } = (0, o.A)(),
                    { sendNavigateSearchFeedback: K } = (0, v.z)(),
                    {
                        settings: { isMobile: W },
                    } = (0, p.g)(),
                    Y = (0, C.$)({ withCustomTooltip: R }),
                    z = (0, n.useSearchParams)(),
                    G = s.getUrl(O ? Object.fromEntries(z) : void 0),
                    F = (0, l.useMemo)(() => {
                        var e;
                        let t = V({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [V, s.title, s.version]),
                    $ = (0, b.O)({ track: s, onNavigate: K, withSavingQueryParams: O, entityType: x.n.TRACK }),
                    Q = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, i.jsx)(u.m_, {
                                enabled: Y && !W,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, r.$)(k().text, k().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [W, Y, I, s.isRemoved, s.title, s.version],
                    ),
                    X = (0, l.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, i.jsx)(u.m_, {
                                  enabled: Y && !W,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: V({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, r.$)(k().text, k().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Y ? void 0 : V({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && B
                              ? (0, i.jsx)(y.N, {
                                    onClick: $,
                                    className: k().albumLink,
                                    href: G,
                                    'aria-label': F,
                                    title: Y ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Q(),
                                })
                              : Q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [W, s.title, s.isRemoved, s.version, s.hasTrackLink, Q, Y, V, I, F, $, G, B]),
                    q = (0, A.s)(s.artists, f),
                    J = (0, l.useMemo)(() => +!!M, [M]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !s.isAvailable, [k().root_disliked]: s.isDisliked && !j, [k().root_withSecondaryColor]: S }, t),
                    children: (0, i.jsxs)('div', {
                        className: k().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, { [k().titleContainer_withVersion]: s.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, r.$)(k().text, L),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            X,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Y ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        T &&
                                        (0, i.jsx)(g.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: s.explicitDisclaimer,
                                            className: k().explicitMark,
                                            trackId: s.id,
                                        }),
                                    H,
                                ],
                            }),
                            q.length > 0 &&
                                (0, i.jsx)(m.i, {
                                    className: (0, r.$)(k().text, { [k().artists]: M }, w, L),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(k().text, k().link),
                                    captionClassName: (0, r.$)(k().text, k().artistCaption),
                                    artists: q,
                                    withLink: s.isNonUserGenerated && D,
                                    lineClamp: J,
                                    captionSize: I,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        69e3: (e) => {
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
        69951: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => x });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(21732),
                o = a(90169),
                c = a(57594),
                d = a(40229),
                u = a(43565),
                _ = a(8677),
                m = a(68912),
                v = a(92102),
                p = a(85673),
                h = a.n(p);
            let x = (0, s.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: s,
                        className: p,
                        withDNDBlock: x,
                        isDragging: g,
                        draggingClassName: y,
                        ignoreDislikedStyles: A,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: f,
                        withTrailer: k = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: S,
                        hideControls: I,
                    } = e,
                    E = (0, o.D)({ playContextParams: s, entityId: a.entityId }),
                    {
                        settings: { isMobile: N },
                    } = (0, c.g)(),
                    L = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: A,
                                radius: 'xs',
                                ...e,
                            }),
                        [A, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(v.C, {
                    className: (0, r.$)(p, { [h().trackWithDots]: x, [h().important]: x }),
                    track: a,
                    beforeBlock: x ? (0, i.jsx)(u.O, { className: (0, r.$)(h().dots, y), isDragging: g }) : void 0,
                    meta: (0, i.jsx)(m.j, { withArtistLink: !N, beforeTitle: T, track: a, ignoreDislikedStyles: A, withSecondaryColor: C }),
                    playButtonCellRender: L,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: f,
                        withTrailer: k,
                        removeButtonAriaLabel: S,
                        hideControls: I,
                    }),
                    ...E,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        71674: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 38698)), Promise.resolve().then(a.bind(a, 852)), Promise.resolve().then(a.bind(a, 83276));
        },
        72069: (e) => {
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
        73354: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => d });
            var i = a(32290),
                r = a(79856),
                s = a(98350),
                n = a(26781),
                l = a(34223),
                o = a(6676),
                c = a.n(o);
            let d = (e) => {
                let { isActive: t } = e,
                    a = (0, i.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                        ],
                    });
                return (0, i.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, i.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        a,
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        a,
                    ],
                });
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s, o: () => r });
            var i = a(14257);
            let r = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                s = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return r[e];
                        default:
                            return '';
                    }
                };
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        77088: (e) => {
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
        77322: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s });
            var i = a(70204),
                r = a(34186);
            let s = () => (0, r.N)().get(i.SX);
        },
        78176: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => y });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(16172),
                o = a(21732),
                c = a(91027),
                d = a(50162),
                u = a(19740),
                _ = a(86269),
                m = a(71926),
                v = a(47745),
                p = a(84062),
                h = a(57594),
                x = a(16510),
                g = a.n(x);
            let y = (0, s.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    x = (0, p.Z)(t.url),
                    A = (0, v.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(y, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    b = (0, c.c)((e) => {
                        s.modal.isOpened && s.modal.close(), A({ to: l.QT.ArtistScreen }), x(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, a),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        78570: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => m });
            var i = a(32290),
                r = a(63618),
                s = a(60900),
                n = a(21732),
                l = a(6752),
                o = a(82586),
                c = a(71926),
                d = a(13798),
                u = a(31640),
                _ = a.n(u);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: a,
                        description: u,
                        getDescriptionTexts: m,
                        explicitMarkVariant: v,
                        className: p,
                        version: h,
                        title: x,
                        artistsComponent: g,
                        likesCount: y,
                        isLiked: A,
                        releaseYear: C,
                        titleLineClamp: b = 1,
                    } = e,
                    { formatMessage: f, formatNumber: k } = (0, s.A)(),
                    T = (0, l.L)(() => {
                        let e = null == g ? void 0 : g((0, r.$)(_().text, _().artistLink), (0, r.$)(_().text, _().artistCaption));
                        if (!e && !y) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: _().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof y &&
                                    y > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: _().likesCount,
                                        'aria-label': f({ id: 'entity-names.likes-counter' }, { counter: y }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(o.I, {
                                                className: _().icon,
                                                variant: A ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: k(y),
                                            }),
                                        ],
                                    }),
                                !!y && e && t,
                                e,
                                !!C && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: C }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(_().root, { [_().root_disabled]: a, [_().root_disliked]: t }, p),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, r.$)(_().text, _().title, { [_().title_withVersion]: h }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: b,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        h &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, r.$)(_().text, _().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(h),
                                            }),
                                    ],
                                }),
                                v && (0, i.jsx)(d.N, { className: _().explicitMark, getDescriptionTexts: m, variant: v }),
                            ],
                        }),
                        u &&
                            (0, i.jsx)(c.HL, {
                                className: (0, r.$)(_().text, _().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        T,
                    ],
                });
            };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79238: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(64605),
                r = a(97647);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return r.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        79856: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length; )
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (r && (r += ' '), (r += i));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        a.r(t), a.d(t, { clsx: () => i, default: () => r });
                        let r = i;
                    },
                    631: (e, t, a) => {
                        a.r(t), a.d(t, { default: () => i });
                        let i = {
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
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    3186: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0);
                        let r = a(4377),
                            s = a(5881),
                            n = i(a(631));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: a, radius: i = 'm', width: l, height: o, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== l && (u.width = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                void 0 !== o && (u.height = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(i)], { [n.default.root_active]: t }, a),
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
                var a = (r[e] = { exports: {} });
                return i[e].call(a.exports, a, a.exports, s), a.exports;
            }
            (s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var n = {};
            (() => {
                Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0);
                var e = s(3186);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var l = n.q;
            n.X;
        },
        80536: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83276: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageSuspenseLoader: () => p });
            var i = a(32290),
                r = a(39407),
                s = a(46049),
                n = a(71926),
                l = a(28563),
                o = a(58054),
                c = a(32468),
                d = a(12894),
                u = a(8946),
                _ = a(87461),
                m = a.n(_),
                v = a(73354);
            let p = () =>
                (0, i.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m().headerContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: m().header,
                                    children: [
                                        (0, i.jsx)(d.L, { withForwardControl: !1 }),
                                        (0, i.jsx)(n.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, i.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(l.F, {
                                    className: m().carousel,
                                    carouselElement: (0, i.jsx)(u.zr, { isActive: !0, className: m().tabs, shimmerClassName: m().tab, count: 5 }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(s.N, {
                            className: m().scroll,
                            containerClassName: m().scrollContainer,
                            children: [
                                (0, i.jsx)('div', { className: m().content, children: (0, i.jsx)(v.v, { isActive: !0 }) }),
                                (0, i.jsx)(c.A, { children: (0, i.jsx)(o.w, { className: m().footer }) }),
                            ],
                        }),
                    ],
                });
        },
        83521: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => v });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(21732),
                l = a(99902),
                o = a(71926),
                c = a(57594),
                d = a(90326),
                u = a(80195),
                _ = a(34783),
                m = a.n(_);
            let v = (0, s.PA)((e) => {
                let { className: t, track: a, position: s, onPlayButtonClick: _, isPlaying: v, isCurrent: p, withDislikeStyles: h = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(t, m().root, {
                        [m().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [m().root_playing]: v,
                        [m().root_disliked]: a.isDisliked && h,
                        [m().root_current]: p,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !x && (0, i.jsx)(u.P, { stopAnimation: !v, className: m().playingAnimation }),
                                    x && g && (0, i.jsx)(l.y, { size: 'xs', className: m().spinner }),
                                    !g &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: v,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        s &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': n.Kq.track.TRACK_POSITION,
                                children: s,
                            }),
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83920: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r, g: () => s });
            var i = a(55178);
            let r = (0, i.createContext)({
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
                s = () => (0, i.useContext)(r);
        },
        84051: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var i = a(55178),
                r = a(16172),
                s = a(52068),
                n = a(91027),
                l = a(62376),
                o = a(79374),
                c = a(37240),
                d = a(47498);
            let u = (e) => {
                let { mainObjectType: t } = e,
                    a = (0, i.useRef)(!1),
                    u = (0, i.useRef)(!1),
                    _ = (0, s.st)(),
                    m = (0, l.U)(),
                    { hash: v } = (0, s.gf)(),
                    { pageId: p, pageEntityId: h, pageStyle: x, pagePlacement: g } = (0, c.$)(),
                    { tabId: y, tabPos: A, isTabSelectedByDefault: C } = (0, d.R)();
                return (0, n.c)((e) => {
                    if (!_ || !p || 'string' != typeof h) return;
                    let i = { hash: v, pageId: o.W[p], pageStyle: x || r.QL.Fullscreen, pagePlacement: g || r.c4.Fullscreen, mainObjectType: t, mainObjectId: h };
                    void 0 !== y && ((i.tabId = y), (i.tabPos = A), (i.isTabSelectedByDefault = C));
                    let s = (0, r.Fx)({ params: i, logger: m, context: 'useSendEventOnScreenOpenedOrClosed' });
                    s && (e && !a.current && ((0, r.w5)(_.evgenInstance, s), (a.current = !0)), e || u.current || ((0, r.XB)(_.evgenInstance, s), (u.current = !0)));
                });
            };
        },
        84507: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        86562: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return (e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e;
            })({});
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
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90625: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => B });
            var i = a(32290),
                r = a(90040),
                s = a(57249),
                n = a(63618),
                l = a(96103),
                o = a(65493),
                c = a(55178),
                d = a(60900),
                u = a(16172),
                _ = a(21732),
                m = a(91027),
                v = a(50162),
                p = a(71926),
                h = a(95481),
                x = a(47745),
                g = a(2969),
                y = a(84782),
                A = a(23352),
                C = a(37240),
                b = a(28999),
                f = a(43564),
                k = a(57594),
                T = a(14257),
                S = a(50),
                I = a(86562),
                E = a(5154),
                N = a(78570),
                L = a(80195);
            let w = async (e, t) => {
                let { loop: a = !1, markerId: i, frameRange: r, mode: s = 'forward' } = t,
                    n = null,
                    l = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    (n = t.time), (l = t.time + t.duration);
                } else if (r) {
                    var o;
                    (n = r.start), (l = null != (o = r.end) ? o : e.totalFrames);
                }
                null !== n &&
                    null !== l &&
                    (await Promise.all([e.setLoop(a), e.setMode(s), e.setSegment(n, l), e.setFrame('reverse' === s ? l : n)]), n !== l && (await e.play()));
            };
            var j = a(1001),
                R = a.n(j),
                M = a(49124);
            let O = { align: [0, 0.5], fit: 'contain' },
                P = { autoResize: !0, freezeOnOffscreen: !1 },
                D = o.default.default(
                    () =>
                        Promise.resolve()
                            .then(a.bind(a, 90040))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = M.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(s, e).href);
            }
            let B = (0, l.PA)((e) => {
                var t, a, r, s, l, o;
                let { animationByTheme: j, animationConfig: M, className: B, lumenImages: H, requestAwakeLumenModal: U, vibe: V } = e,
                    { formatMessage: K } = (0, d.A)(),
                    { pageId: W } = (0, C.$)(),
                    { blockIdForFrom: Y } = (0, y.N)(),
                    { sendPlaySearchFeedback: z } = (0, b.z)(),
                    G = (0, g.b)(),
                    F = (0, x.N)(),
                    $ = (0, h.f)(),
                    { ref: Q, intersectionPropertyId: X } = (0, A.n)(),
                    q = (0, S.W)(),
                    { lumen: J } = (0, k.g)(),
                    Z = null != (a = q.theme) ? a : T.S.Dark,
                    ee = J.getFallbackImage(),
                    et = (0, c.useRef)(!1),
                    ea = (0, c.useRef)(M[V ? 'idle' : 'loading']),
                    [ei, er] = (0, c.useState)(null),
                    [es, en] = (0, c.useState)(!1),
                    {
                        isPlaying: el,
                        togglePlay: eo,
                        isCurrent: ec,
                    } = (0, f.B)({ blockIdForFrom: Y, pageIdForFrom: W, seeds: null != (r = null == V ? void 0 : V.seeds) ? r : [] });
                (0, c.useEffect)(() => $(), [$]),
                    (0, c.useEffect)(() => {
                        if (!ei || et.current) return;
                        let e = () => {
                            (et.current = !0), w(ei, ea.current);
                        };
                        return ei.addEventListener('load', e), () => ei.removeEventListener('load', e);
                    }, [ei]),
                    (0, c.useEffect)(() => {
                        let e = ((e, t, a, i) =>
                            a || e === (null == i ? void 0 : i.loading)
                                ? t
                                    ? null == i
                                        ? void 0
                                        : i.playing
                                    : e === i.playing
                                      ? null == i
                                          ? void 0
                                          : i.paused
                                      : e === i.loading
                                        ? null == i
                                            ? void 0
                                            : i.idle
                                        : null
                                : null == i
                                  ? void 0
                                  : i.loading)(ea.current, el, !!V, M);
                        e && e !== ea.current && ((ea.current = e), ei && et.current && w(ei, e));
                    }, [M, ei, ec, el, V]);
                let ed = (0, m.c)(() => {
                        es || el || (en(!0), null == z || z()), eo(), G(!0);
                    }),
                    eu = (0, m.c)(() => {
                        if (V) {
                            if (el) {
                                eo(), G(!1);
                                return;
                            }
                            if (J.isEnabled && !J.isAwakened) {
                                F({ to: u.QT.LumenAwakeningScreen }), null == U || U(ed);
                                return;
                            }
                            ed();
                        }
                    }),
                    e_ = (0, m.c)((e) => {
                        (e.code === I.v.SPACE || e.code === I.v.ENTER) && (e.preventDefault(), eu());
                    }),
                    em = null != (s = null == V ? void 0 : V.title) ? s : K({ id: 'entity-names.query-to-vibe-loading-title' }),
                    ev = null != (l = null == V ? void 0 : V.description) ? l : K({ id: 'entity-names.query-to-vibe-loading-description' }),
                    ep = !J.isEnabled || J.isTriedToLoadData,
                    eh = J.isEnabled ? (null != (o = null == J || null == (t = J.themes) ? void 0 : t[Z].uri) ? o : ee[Z]) : (null != H ? H : ee)[Z],
                    ex = V ? _.OA.vibe.QUERY_TO_VIBE_BLOCK : _.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    eg = V && (!J.isEnabled || J.isTriedToLoadData);
                return (0, i.jsxs)('div', {
                    'aria-label': em,
                    'aria-description': ev,
                    className: (0, n.$)(E.$f.root, R().root, { [R().root_loading]: !V }, B),
                    tabIndex: 0,
                    onClick: eu,
                    onKeyDown: e_,
                    'data-test-id': ex,
                    children: [
                        (0, i.jsx)(D, { className: R().comet, layout: O, src: j[null != Z ? Z : T.S.Dark], renderConfig: P, dotLottieRefCallback: er }),
                        (0, i.jsxs)('div', {
                            className: R().iconContainer,
                            children: [
                                ec && (0, i.jsx)(L.P, { className: R().iconPulse, stopAnimation: !el }),
                                ep && (0, i.jsx)(v._V, { className: R().icon, src: eh, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, i.jsx)(N.r, {
                            className: R().meta,
                            title: (0, i.jsx)(p.HL, {
                                className: (0, n.$)(E.$f.text, E.$f.titleText, R().caption),
                                size: 'm',
                                variant: 'div',
                                type: 'text',
                                children: em,
                            }),
                            description: ev,
                            titleLineClamp: 2,
                        }),
                        eg && (0, i.jsx)('div', { ref: Q, 'data-intersection-property-id': X }),
                    ],
                });
            });
        },
        91063: (e) => {
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
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92102: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => b });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(91027),
                o = a(58359),
                c = a(71735),
                d = a(2969),
                u = a(23352),
                _ = a(46200),
                m = a(5537),
                v = a(28999),
                p = a(72676),
                h = a(57594),
                x = a(1444),
                g = a(60900),
                y = a(54171),
                A = a(35587),
                C = a.n(A);
            let b = (0, s.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: s,
                        meta: A,
                        beforeBlock: b,
                        controls: f,
                        playButtonCellRender: k,
                        withLightning: T,
                        isPlaying: S,
                        isCurrent: I,
                        togglePlay: E,
                        restartPlay: N,
                        onPlayClick: L,
                        playButtonIconSize: w,
                        skipFreemiumCloseListeningPaywall: j = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: O } = (0, _.q)(),
                    {
                        track: P,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: V },
                    } = (0, h.g)(),
                    { ref: K, intersectionPropertyId: W } = (0, u.n)(),
                    Y = (0, d.b)(),
                    z = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: T, track: s }),
                    F = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(s.entityId),
                    $ = U(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    Q = s.isAvailable && M && !$,
                    X = (0, m.N)(),
                    q = s.isAvailable && X && !$ && !j,
                    J = (0, y.w)({ track: s, callback: E }),
                    Z = (0, l.c)(() => {
                        P.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    ee = (0, y.w)({ track: s, callback: Z }),
                    { sendPlaySearchFeedback: et } = (0, v.z)(),
                    [ea, ei] = (0, n.useState)(!1),
                    er = (0, l.c)(() => {
                        if (!z()) {
                            if (Q) return void O();
                            if (q) return void V.open();
                            ea || S || (ei(!0), null == et || et()), J(), Y(!S), null == L || L(!S);
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (S) return void N();
                        er();
                    }),
                    en = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            M && s.isAvailableOnlyForPlus && O(), X && s.isAvailableOnlyForPlus && V.open();
                            return;
                        }
                        if (Q) return void O();
                        let t = !B && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !D.modal.isOpened));
                        return q && !t
                            ? void V.open()
                            : ((0, o.P)(e, C().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && s.hasTrackLink && !D.modal.isOpened && (ee(), q && V.open()));
                    }),
                    el = null == k ? void 0 : k({ onPlayButtonClick: er, isPlaying: S, isCurrent: I, isLoading: F, playButtonIconSize: w });
                return (0, i.jsxs)(x.C, {
                    ref: K,
                    'aria-label': G,
                    'data-intersection-property-id': W,
                    onClick: en,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !s.isAvailable, [C().root_current]: I && B }, a),
                    ...R,
                    children: [b, el, A, f],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        95481: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => x });
            var i = a(55178),
                r = a(16172),
                s = a(52068),
                n = a(6752),
                l = a(62376),
                o = a(1677),
                c = a(48922),
                d = a(84782),
                u = a(30915),
                _ = a(18746),
                m = a(37240),
                v = a(51012),
                p = a(47498);
            let h = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                x = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, s.st)(),
                        a = (0, l.U)(),
                        { hash: x } = (0, s.gf)(),
                        { pageId: g } = (0, m.$)(),
                        { tabId: y, tabPos: A, isTabSelectedByDefault: C } = (0, p.R)(),
                        { offsetBlockPosY: b } = (0, u.u)(),
                        { blockId: f, blockType: k, blockPosX: T, blockPosY: S, mainObjectType: I, mainObjectId: E, objectsCount: N } = (0, d.N)(),
                        { filterKey: L, filterValue: w, filterPos: j } = (0, _.G)(),
                        { skeleton: R } = (0, v.b)(),
                        M = (0, n.L)(() => (void 0 !== b && void 0 !== S ? b + S : S));
                    return (0, i.useCallback)(() => {
                        if (!t || !g || !c.xK.includes(g) || !h.includes(g) || e.current) return;
                        let i = { hash: x, pageId: o.F[g], entityType: k, entityId: f, entityPosX: T, entityPosY: M, objectsCount: N };
                        void 0 !== L && ((i.filterKey = L), (i.filterValue = w), (i.filterPos = j)),
                            c.qG.includes(g) && ((i.tabId = y), (i.tabPos = A), (i.isTabSelectedByDefault = C)),
                            R && (i.skeletonId = R),
                            E && I && ((i.mainObjectType = I), (i.mainObjectId = E));
                        let s = (0, r.Fx)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, r.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, g, x, k, f, T, M, L, w, j, N, R, E, I, a, y, A, C]);
                };
        },
        98350: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return (e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                3183, 5718, 7258, 7034, 7231, 6347, 9763, 7972, 8868, 9621, 3931, 6639, 3379, 3647, 1136, 6706, 1311, 5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 9130,
                6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 9740, 14, 8915, 6341, 4797, 4638, 1647, 5283, 4220, 9562, 7358,
            ],
            () => e((e.s = 71674)),
        ),
            (_N_E = e.O());
    },
]);
