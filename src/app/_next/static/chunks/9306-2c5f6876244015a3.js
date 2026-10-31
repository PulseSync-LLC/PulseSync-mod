(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9306],
    {
        2537: (e, t, r) => {
            'use strict';
            (r.d(t, { x: () => n }), ((a || (a = {})).SMART_PREVIEW = 'smart_preview'));
            var a,
                i = r(48109);
            let n = (e, t) => {
                var r, n, s, l, o, d, c, u, g, m;
                let { isSmartPreview: _, hasEverFinished: v } = t || {},
                    y = (0, i.Q)(null == e ? void 0 : e.derivedColors),
                    p = _ ? (null == e || null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                    h = { available: !!(null == e || null == (n = e.specialAudioResources) ? void 0 : n.includes(a.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (g = null == e ? void 0 : e.title) ? g : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: p,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: y,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == e || null == (l = e.albums) || null == (s = l[0]) ? void 0 : s.id,
                    disclaimers: null == e ? void 0 : e.disclaimers,
                    type: null == e ? void 0 : e.type,
                    pubDate: null == e ? void 0 : e.pubDate,
                    hasLyrics: null == e || null == (o = e.lyricsInfo) ? void 0 : o.hasAvailableTextLyrics,
                    hasSyncLyrics: null == e || null == (d = e.lyricsInfo) ? void 0 : d.hasAvailableSyncLyrics,
                    shouldRememberPosition: null == e ? void 0 : e.rememberPosition,
                    streamProgress: ((e, t) => ({
                        endPositionSec: null == e ? void 0 : e.endPositionSec,
                        hasEverFinished: (null == t ? void 0 : t.hasEverFinished) || (null == e ? void 0 : e.everFinished),
                    }))(null == e ? void 0 : e.streamProgress, { hasEverFinished: v }),
                    shortDescription: null != (m = null == e ? void 0 : e.shortDescription) ? m : '',
                    trailer: h,
                    clipIds: null == e ? void 0 : e.clipIds,
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (u = e.albums) || null == (c = u[0]) ? void 0 : c.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                };
            };
        },
        5374: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var a = r(5120),
                i = r(94961);
            let n = (e, t) => {
                let r = (0, i.K)(e, t);
                return (0, a.wg)(r);
            };
        },
        5706: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => i });
            var a = r(54667);
            let i = (e) => e === a.S.TRACK || e === a.S.MUSIC;
        },
        6668: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var a = r(53548),
                i = r(29993);
            let n = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var a = r(88800),
                i = r(88969),
                n = r(58390),
                s = r(17392),
                l = r(29993),
                o = r(96817),
                d = r(29504),
                c = r(99890),
                u = r(4086),
                g = r(41928);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', color: m = 'primary', withRipple: _ = !0, buttonText: v, isBlock: y, key: p, className: h } = e,
                    k = (0, n.useRouter)(),
                    T = (0, g.N)().get(u.QG),
                    A = (0, l.c)(() => {
                        T.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), k.push(T.authorizationUrl));
                    });
                return (0, a.jsx)(
                    o.$,
                    {
                        onClick: A,
                        className: h,
                        isBlock: y,
                        color: m,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
        8679: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicDownloadedTracksPage: () => et });
            var a = r(88800),
                i = r(65724),
                n = r(84961),
                s = r(53548),
                l = r(2058),
                o = r(17392),
                d = r(18593),
                c = r(29993),
                u = r(44367),
                g = r(32596),
                m = r(69630),
                _ = r(10829),
                v = r(64284),
                y = r(12816),
                p = r(59844),
                h = r(84384),
                k = r(44230),
                T = r(37670),
                A = r(71978),
                S = r(6668),
                f = r(34961),
                M = r(53892),
                x = r(74773),
                E = r(98644),
                b = r(86790),
                D = r(60266),
                P = r(93015),
                C = r(79418),
                I = r(96402),
                w = r.n(I),
                K = r(88969),
                L = r(52300),
                j = r(29504),
                O = r(5407),
                R = r(76675),
                N = r(46422),
                H = r(39079),
                U = r(72288),
                G = r(63807),
                z = r(56248),
                F = r(16704),
                B = r(87966),
                W = r.n(B);
            let Y = (0, n.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, f.s)(M.n.MY_MUSIC),
                    r = (0, a.jsx)(j.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    i = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    i.push(
                        (0, a.jsx)(j.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, a.jsx)(K.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let n = Math.floor(t.tracksDurationInMinutes / 60),
                    l = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (n || l) &&
                        (i.push(r),
                        i.push(
                            (0, a.jsx)(j.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, a.jsx)(K.A, { id: 'time.hours-minutes', values: { hours: n, minutes: l } }),
                            }),
                        )),
                    (0, a.jsx)('div', { className: W().root, children: i.map((e, t) => (0, s.cloneElement)(e, { key: t })) })
                );
            });
            var V = r(96030),
                Q = r.n(V);
            let Z = (0, n.PA)(() => {
                let { isScrolling: e } = (0, s.useContext)(G.B),
                    t = (0, N.W)(),
                    { downloadedTracks: r } = (0, f.s)(M.n.MY_MUSIC),
                    {
                        settings: { isMobile: i },
                        slam: n,
                    } = (0, U.g)(),
                    { from: l } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                    u = (0, O.P)(),
                    g = (0, R.b)(),
                    { isPlaying: m, togglePlay: _ } = (0, H.D)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: r.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    p = (0, c.c)(() => {
                        u() || (_(), g(!m));
                    });
                return (0, a.jsx)('header', {
                    className: Q().root,
                    'aria-hidden': e,
                    'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, a.jsxs)('div', {
                        className: Q().container,
                        children: [
                            !n.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, a.jsx)(z.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, a.jsxs)('div', {
                                className: Q().titleContainer,
                                children: [
                                    (0, a.jsx)(j.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: Q().title,
                                        children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, a.jsx)(Y, {}),
                                ],
                            }),
                            !r.isEmpty &&
                                (0, a.jsx)(F.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: m,
                                    onClick: p,
                                    className: Q().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !i && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var $ = r(62932),
                X = r.n($);
            let J = (0, n.PA)(() =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(Z, {}),
                        (0, a.jsxs)('div', {
                            className: X().root,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, a.jsx)(L.I, { className: X().icon, size: 'l', variant: 'download' }),
                                (0, a.jsx)(j.DZ, { className: X().title, variant: 'div', size: 'xs', children: (0, a.jsx)(K.A, { id: 'offline.downloaded-empty' }) }),
                                (0, a.jsx)(j.HL, {
                                    className: X().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, a.jsx)(K.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var q = r(93317);
            let ee = (0, n.PA)(() => {
                    let { isScrolling: e } = (0, s.useContext)(G.B),
                        t = (0, N.W)(),
                        { downloadedTracks: r } = (0, f.s)(M.n.MY_MUSIC),
                        {
                            settings: { isMobile: n },
                            slam: l,
                        } = (0, U.g)(),
                        { from: u } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        g = (0, R.b)(),
                        m = (0, O.P)(),
                        { isPlaying: _, togglePlay: p } = (0, H.D)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: u },
                                entitiesData: r.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        k = (0, c.c)(() => {
                            m() || (p(), g(!_));
                        });
                    return (0, a.jsx)(q.Y, {
                        variant: q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, a.jsxs)('div', {
                            className: Q().container,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, a.jsx)(z.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, a.jsx)(j.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: Q().stickyTitle,
                                    children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !r.isEmpty &&
                                    (0, a.jsx)(F.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: _,
                                        onClick: k,
                                        className: (0, i.$)(Q().playButton, { [Q().stickyPlayButton]: !n }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !n && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, i.$)(Q().stickyHeader, Q().important),
                        staticClassName: (0, i.$)(Q().staticHeader, Q().important),
                    });
                }),
                et = (0, n.PA)(() => {
                    var e;
                    let t = (0, A.j)(),
                        { contentScrollRef: r, setContentScrollRef: n } = (0, k.g)(),
                        { formatMessage: I } = (0, l.A)(),
                        { downloadedTracks: K } = (0, f.s)(M.n.MY_MUSIC),
                        { from: L } = (0, h.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        j = (0, S.w)(),
                        O = (0, c.c)(() => {
                            t.tracksController && K.getData(t.tracksController);
                        });
                    ((0, u.L)(O),
                        (0, s.useEffect)(() => {
                            K.isNeededToLoad && O();
                        }, [K.isNeededToLoad, O]),
                        (0, s.useEffect)(
                            () => () => {
                                K.reset();
                            },
                            [K],
                        ),
                        (0, T.J)(K.isResolved));
                    let R = (0, s.useMemo)(
                        () => ({ Header: () => (0, a.jsx)(Z, {}), Footer: () => (0, a.jsx)(D.A, { children: (0, a.jsx)(b.w, { className: w().footer }) }) }),
                        [],
                    );
                    if (K.loadingState === x.G.REJECT) return (0, a.jsx)(g.SomethingWentWrong, {});
                    if (K.isEmpty) return (0, a.jsx)(J, {});
                    let N = (null == (e = K.items) ? void 0 : e.length) || 10;
                    return (0, a.jsx)(p.n, {
                        pageId: y._Q.DOWNLOADS_TRACKS,
                        children: (0, a.jsx)(m.h, {
                            scrollElement: r,
                            children: (0, a.jsxs)('div', {
                                className: w().pageContainer,
                                children: [
                                    (0, a.jsx)(ee, {}),
                                    (0, a.jsx)(C.$, {
                                        context: { listAriaLabel: I({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, i.$)(w().root, w().important),
                                        listClassName: w().content,
                                        customComponents: R,
                                        totalCount: N,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let r = null == (t = K.items) ? void 0 : t[e];
                                            return r
                                                ? (0, a.jsx)(
                                                      _.K,
                                                      {
                                                          track: r,
                                                          playContextParams: j(r.id, {
                                                              contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: L },
                                                              entitiesData: K.entitiesData,
                                                              queueParams: { index: e, entityId: r.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      r.id,
                                                  )
                                                : (0, a.jsx)(P.D, { isActive: !0, className: w().trackShimmer, variant: E.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: N,
                                        handleRef: n,
                                        shouldTriggerRangeChangedOn: [N],
                                        testId: o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        20551: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicPageStoreProvider: () => u });
            var a = r(34961),
                i = r(53892),
                n = r(5120),
                s = r(55025),
                l = r(74773);
            let o = n.gK.model('MyMusicPage', { downloadedTracks: s.b }),
                d = { downloadedTracks: { loadingState: l.G.IDLE } },
                { pageStoreProvider: c } = (0, a.W)({ createStore: (e) => o.create(d, e), patchKey: i.n.MY_MUSIC }),
                u = c;
        },
        21190: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => u });
            var a = r(5120),
                i = r(17128),
                n = r(90544),
                s = r(62390),
                l = r(53151),
                o = r(47580),
                d = r(27506),
                c = r(49873);
            let u = l.O.props({ artists: a.gK.array(n.P), albums: a.gK.array(i.G), chart: a.gK.maybe(s.I) })
                .views((e) => ({
                    get artistsNames() {
                        return (0, o.j)(e.artists);
                    },
                    get mainArtist() {
                        return (0, c.m)(e.artists);
                    },
                    get mainAlbum() {
                        var t, r;
                        return null != (r = null == (t = e.albums) ? void 0 : t[0]) ? r : null;
                    },
                    get index() {
                        var a, i, n;
                        return null != (n = null == (i = e.albums[0]) || null == (a = i.trackPosition) ? void 0 : a.index) ? n : null;
                    },
                    get isAvailableOnlyForPlus() {
                        var s;
                        return !!(null == (s = this.mainAlbum) ? void 0 : s.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, a.L3)(function* (t, r) {
                        let { ugcResource: i, modelActionsLogger: s } = (0, a._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === r && t === e.title) return d.F.OK;
                        try {
                            var l;
                            (yield i.changeTrack({ trackId: e.id, title: t, artist: r }), (e.title = t));
                            let s = (null == (l = e.artists[0]) ? void 0 : l.id) || '0';
                            if (((e.artists = (0, a.wg)([])), r)) {
                                let t = n.P.create({ id: s, name: r, isAvailable: !0 });
                                e.artists = (0, a.wg)([t]);
                            }
                            return d.F.OK;
                        } catch (e) {
                            return (s.error(e), d.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        25918: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var a = r(5120),
                i = r(18143);
            let n = a.gK.model('StreamProgress', { endPositionSec: a.gK.maybe(a.gK.number), hasEverFinished: a.gK.maybe(a.gK.boolean) }).actions((e) => ({
                updateEndPositionSec: (t) => {
                    e.endPositionSec = t;
                },
                updateEverFinished: (t) => {
                    e.hasEverFinished = t;
                },
                markListened: (0, a.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, a._$)(e);
                    try {
                        return yield r.markFinished(t);
                    } catch (e) {
                        return (n.error(e), i.T.ERROR);
                    }
                }),
                markUnlistened: (0, a.L3)(function* (t) {
                    let { streamsResource: r, modelActionsLogger: n } = (0, a._$)(e);
                    try {
                        return yield r.markUnfinished(t);
                    } catch (e) {
                        return (n.error(e), i.T.ERROR);
                    }
                }),
            }));
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => y, s: () => p });
            var a = r(88800),
                i = r(84961),
                n = r(58390),
                s = r(53548),
                l = r(35412),
                o = r(39499),
                d = r(89108),
                c = r(70003),
                u = r(72288),
                g = r(16818);
            (0, i.eO)(!1);
            let m = (0, s.createContext)(null),
                _ = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        n = (0, s.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, a.jsx)(m.Provider, { value: n, children: t });
                },
                v = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: i } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        i = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: s } = e,
                                l = (0, g.Y)(),
                                o = (0, u.g)(),
                                { store: m, patchesRef: y } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v, { nonce: s, patchKey: r, patchesRef: y }), (0, a.jsx)(_, { store: m, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function p(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == r ? void 0 : r.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        44367: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var a = r(53548),
                i = r(96820),
                n = r(29993),
                s = r(71978);
            let l = [i.DT.IDLE, i.DT.DOWNLOADED],
                o = (e) => {
                    var t;
                    let r = (0, s.j)(),
                        o = (0, n.c)((t) => {
                            let { state: r } = t;
                            l.includes(r.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = r.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (a = r.store) || a.tracks.events.on(i.je.ENTITY_CHANGED, o),
                            () => {
                                var t, a;
                                (null == (t = r.store) || t.tracks.events.off(i.je.STATE_CHANGED, e),
                                    null == (a = r.store) || a.tracks.events.off(i.je.ENTITY_CHANGED, o));
                            }
                        );
                    }, [e, o, null == (t = r.store) ? void 0 : t.tracks.events]);
                };
        },
        49873: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            let a = (e) => {
                var t, r;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (r = null == e ? void 0 : e[0]) ? r : null;
            };
        },
        53151: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => p });
            var a = r(5120),
                i = r(54667),
                n = r(76794),
                s = r(50633),
                l = r(85587),
                o = r(63425),
                d = r(67102),
                c = r(23744),
                u = r(78686),
                g = r(63698),
                m = r(70565),
                _ = r(5706),
                v = r(25918);
            let y = [i.S.MUSIC, i.S.TRACK, i.S.NOISE, i.S.ASMR],
                p = a.gK
                    .compose(
                        a.gK.model('BaseTrack', {
                            id: a.gK.string,
                            isAvailable: a.gK.boolean,
                            isRemoved: a.gK.boolean,
                            title: a.gK.string,
                            trackSource: a.gK.maybe(a.gK.enumeration(Object.values(n.J))),
                            version: a.gK.maybe(a.gK.string),
                            durationMs: a.gK.maybe(a.gK.number),
                            coverUri: a.gK.maybe(a.gK.string),
                            averageColor: a.gK.maybe(a.gK.string),
                            trackParameters: a.gK.maybe(a.gK.frozen()),
                            albumId: a.gK.maybe(a.gK.number),
                            type: a.gK.maybe(a.gK.enumeration(Object.values(i.S))),
                            pubDate: a.gK.maybe(a.gK.string),
                            hasLyrics: a.gK.maybe(a.gK.boolean),
                            hasSyncLyrics: a.gK.maybe(a.gK.boolean),
                            trailer: a.gK.maybe(c.a),
                            shouldRememberPosition: a.gK.maybe(a.gK.boolean),
                            streamProgress: a.gK.maybe(v.B),
                            shortDescription: a.gK.maybe(a.gK.string),
                            major: a.gK.maybeNull(a.gK.frozen()),
                            clipIds: a.gK.maybeNull(a.gK.frozen()),
                            genre: a.gK.maybeNull(a.gK.string),
                            realId: a.gK.maybe(a.gK.string),
                            cutoutCover: a.gK.maybe(o.$),
                        }),
                        d.E,
                    )
                    .views((e) => {
                        let t = {
                            get isLiked() {
                                if ((0, a._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, a._n)(e)) return 0;
                                let { slam: t } = (0, s.M)(e);
                                return t.getTrackDownloadingProgress(e.id);
                            },
                            get isAvailableForDownload() {
                                if (!(0, a._n)(e)) return !1;
                                return (e.type && y.includes(e.type)) || !!t.isUGC;
                            },
                            getUrl(t) {
                                let { href: r } = (0, g.l)(e.id, e.albumId, t);
                                return r;
                            },
                            get url() {
                                return t.getUrl();
                            },
                            get isDisliked() {
                                if ((0, a._n)(e)) {
                                    let { library: t } = (0, s.M)(e);
                                    return t.isTrackDisliked(e.id);
                                }
                                return !1;
                            },
                            get isTrackPodcast() {
                                if ((0, a._n)(e)) return e.type === i.S.PODCAST;
                                return !1;
                            },
                            get isPlusSubscribed() {
                                if (!(0, a._n)(e)) return !1;
                                let { user: t } = (0, s.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, s.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t, user: r } = (0, s.M)(e);
                                if (!r.hasPlus) return !1;
                                return !!e.hasLyrics && !t.isOfflineModeEnabled;
                            },
                            get isTrackAudiobook() {
                                if ((0, a._n)(e)) return e.type === i.S.AUDIOBOOK;
                                return !1;
                            },
                            get isTrackFairyTale() {
                                if ((0, a._n)(e)) return e.type === i.S.FAIRY_TALE;
                                return !1;
                            },
                            get isTrackNonMusic() {
                                return this.isTrackPodcast || this.isTrackAudiobook || this.isTrackFairyTale;
                            },
                            get isTrackMusic() {
                                if ((0, a._n)(e)) return (0, _.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, a._n)(e)) {
                                    let { isUGC: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, a._n)(e)) {
                                    let { isOwn: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, a._n)(e)) {
                                    let { isOwnReplacedToUGC: t } = (0, m.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get seeds() {
                                return ['track:'.concat(e.id)];
                            },
                            get isLegalRejected() {
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get entityId() {
                                if (e.albumId) return ''.concat(e.id, ':').concat(e.albumId);
                                return e.id;
                            },
                            get hasAlbumLink() {
                                if (!(0, a._n)(e)) return !1;
                                return !!(e.albumId && this.isOwn && e.isAvailable);
                            },
                            get hasTrackLink() {
                                if (!(0, a._n)(e)) return !1;
                                let {
                                    settings: { isMobile: t },
                                    slam: r,
                                } = (0, s.M)(e);
                                return (0, u.t)(e, { isMobile: t, isOfflineModeEnabled: r.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, a._n)(e)) return !1;
                                let { isNonUserGenerated: t } = (0, m.I)(e.trackSource);
                                return t;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: l.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: l.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: l.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, s.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackDislike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        setListeningFinishedStatus: (0, a.L3)(function* () {
                            let t = e.streamProgress;
                            if (t)
                                return (null == t ? void 0 : t.hasEverFinished)
                                    ? yield null == t ? void 0 : t.markUnlistened({ trackId: Number(e.id) })
                                    : yield null == t ? void 0 : t.markListened({ trackId: Number(e.id) });
                        }),
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                    }));
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => a });
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
        55025: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var a = r(5120),
                i = r(44349),
                n = r(5374),
                s = r(21190),
                l = r(74773),
                o = r(59497);
            let d = a.gK
                .compose(a.gK.model('DownloadedTracks', { items: a.gK.maybeNull(a.gK.array(s.v)), tracks: a.gK.maybeNull(a.gK.frozen()) }), o.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, r;
                        return (null != (r = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? r : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: i.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var a;
                        return e.isResolved && (null == (a = e.items) ? void 0 : a.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, a.L3)(function* (t, r) {
                        let { modelActionsLogger: i } = (0, a._$)(e);
                        if (e.loadingState !== l.G.PENDING)
                            try {
                                e.loadingState = l.G.PENDING;
                                let i = yield t.getTracks(r);
                                ((e.tracks = i), (e.items = (0, a.wg)(i.map((e) => (0, n.v)(e)))), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== l.G.IDLE && (e.loadingState = l.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = l.G.IDLE));
                    },
                }));
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => v });
            var a = r(88800),
                i = r(84961),
                n = r(58390),
                s = r(65724),
                l = r(88969),
                o = r(29504),
                d = r(7628),
                c = r(42674),
                u = r.n(c);
            let g = (0, i.PA)(() =>
                (0, a.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, a.jsx)(o.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(o.HL, {
                            className: (0, s.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = r(4370),
                _ = r(72288);
            let v = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, _.g)();
                return i.isAuthorized ? t : (r && (0, n.redirect)(m.Z.main.href), (0, a.jsx)(g, {}));
            });
        },
        62932: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => n, TF: () => l, hZ: () => s });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, a = arguments.length; r < a; r++)
                            for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], a = 0; a < r.length; a++) {
                        var i = r[a].split('='),
                            n = i.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(i[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var n;
                document.cookie =
                    ((n = a({ path: '/' }, r)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                i('Expires', e.expires ? e.expires.toUTCString() : '') +
                                i('Domain', e.domain) +
                                i('Path', e.path) +
                                i('Secure', e.secure) +
                                i('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function l(e, t) {
                s(e, '', a(a({}, t), { expires: -1 }));
            }
        },
        87966: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        94961: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => s });
            var a = r(70850),
                i = r(89625),
                n = r(2537);
            let s = (e, t) => {
                var r, s;
                let l = null == (r = e.artists) ? void 0 : r.map(i.G),
                    o = null == (s = e.albums) ? void 0 : s.map(a.f);
                return { ...(0, n.x)(e, t), artists: l, albums: o };
            };
        },
        96030: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        96402: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
    },
]);
