(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9306],
    {
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var r = a(88800),
                o = a(88969),
                n = a(58390),
                i = a(17392),
                s = a(29993),
                l = a(96817),
                d = a(29504),
                c = a(99890),
                u = a(4086),
                _ = a(41928);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: g = !0, buttonText: p, isBlock: x, key: h, className: S } = e,
                    M = (0, n.useRouter)(),
                    C = (0, _.N)().get(u.QG),
                    v = (0, s.c)(() => {
                        C.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), M.push(C.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: v,
                        className: S,
                        isBlock: x,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: g,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        8679: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => et });
            var r = a(88800),
                o = a(65724),
                n = a(84961),
                i = a(53548),
                s = a(2058),
                l = a(87999),
                d = a(76903),
                c = a(17392),
                u = a(29993),
                _ = a(84255),
                m = a(32596),
                g = a(69630),
                p = a(64284),
                x = a(98427),
                h = a(84384),
                S = a(44230),
                M = a(37670),
                C = a(11510),
                v = a(71978),
                y = a(34961),
                w = a(53892),
                T = a(74773),
                f = a(98644),
                A = a(86790),
                k = a(60266),
                D = a(93015),
                E = a(79418),
                P = a(96402),
                I = a.n(P),
                j = a(88969),
                N = a(52300),
                R = a(29504),
                L = a(33979),
                H = a(18593),
                b = a(5407),
                O = a(46422),
                K = a(39079),
                z = a(72288),
                G = a(63807),
                U = a(56248),
                F = a(16704),
                B = a(87966),
                W = a.n(B);
            let Y = (0, n.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, y.s)(w.n.MY_MUSIC),
                    a = (0, r.jsx)(R.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    o = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    o.push(
                        (0, r.jsx)(R.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, r.jsx)(j.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let n = Math.floor(t.tracksDurationInMinutes / 60),
                    s = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (n || s) &&
                        (o.push(a),
                        o.push(
                            (0, r.jsx)(R.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, r.jsx)(j.A, { id: 'time.hours-minutes', values: { hours: n, minutes: s } }),
                            }),
                        )),
                    (0, r.jsx)('div', { className: W().root, children: o.map((e, t) => (0, i.cloneElement)(e, { key: t })) })
                );
            });
            var V = a(96030),
                Z = a.n(V);
            let $ = (0, n.PA)(() => {
                let { isScrolling: e } = (0, i.useContext)(G.B),
                    t = (0, O.W)(),
                    { downloadedTracks: a } = (0, y.s)(w.n.MY_MUSIC),
                    {
                        settings: { isMobile: o },
                        slam: n,
                    } = (0, z.g)(),
                    { from: s } = (0, h.f)({ pageId: x.b.OWN_TRACKS, blockId: p.U.TRACK_LIST }),
                    l = (0, b.P)(),
                    d = (0, L.g)(),
                    { isPlaying: _, togglePlay: m } = (0, K.D)({
                        playContextParams: {
                            contextData: { type: H.K.Various, meta: { id: x.b.DOWNLOADS_TRACKS }, from: s },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    g = (0, u.c)(() => {
                        !l() && (m(), _ || d());
                    });
                return (0, r.jsx)('header', {
                    className: Z().root,
                    'aria-hidden': e,
                    'data-test-id': c.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, r.jsxs)('div', {
                        className: Z().container,
                        children: [
                            !n.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, r.jsx)(U.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, r.jsxs)('div', {
                                className: Z().titleContainer,
                                children: [
                                    (0, r.jsx)(R.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: Z().title,
                                        children: (0, r.jsx)(j.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, r.jsx)(Y, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, r.jsx)(F.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: _,
                                    onClick: g,
                                    className: Z().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !o && (0, r.jsx)(j.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var X = a(62932),
                q = a.n(X);
            let J = (0, n.PA)(() =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)($, {}),
                        (0, r.jsxs)('div', {
                            className: q().root,
                            'data-test-id': c.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, r.jsx)(N.I, { className: q().icon, size: 'l', variant: 'download' }),
                                (0, r.jsx)(R.DZ, { className: q().title, variant: 'div', size: 'xs', children: (0, r.jsx)(j.A, { id: 'offline.downloaded-empty' }) }),
                                (0, r.jsx)(R.HL, {
                                    className: q().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, r.jsx)(j.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var Q = a(93317);
            let ee = (0, n.PA)(() => {
                    let { isScrolling: e } = (0, i.useContext)(G.B),
                        t = (0, O.W)(),
                        { downloadedTracks: a } = (0, y.s)(w.n.MY_MUSIC),
                        {
                            settings: { isMobile: n },
                            slam: s,
                        } = (0, z.g)(),
                        { from: l } = (0, h.f)({ pageId: x.b.OWN_TRACKS, blockId: p.U.TRACK_LIST }),
                        d = (0, L.g)(),
                        _ = (0, b.P)(),
                        { isPlaying: m, togglePlay: g } = (0, K.D)({
                            playContextParams: {
                                contextData: { type: H.K.Various, meta: { id: x.b.DOWNLOADS_TRACKS }, from: l },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        S = (0, u.c)(() => {
                            !_() && (g(), m || d());
                        });
                    return (0, r.jsx)(Q.Y, {
                        variant: Q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, r.jsxs)('div', {
                            className: Z().container,
                            'data-test-id': c.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !s.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, r.jsx)(U.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, r.jsx)(R.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: Z().stickyTitle,
                                    children: (0, r.jsx)(j.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, r.jsx)(F.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: m,
                                        onClick: S,
                                        className: (0, o.$)(Z().playButton, { [Z().stickyPlayButton]: !n }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !n && (0, r.jsx)(j.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, o.$)(Z().stickyHeader, Z().important),
                        staticClassName: (0, o.$)(Z().staticHeader, Z().important),
                    });
                }),
                et = (0, n.PA)(() => {
                    var e;
                    let t = (0, v.j)(),
                        { contentScrollRef: a, setContentScrollRef: n } = (0, S.g)(),
                        { formatMessage: P } = (0, s.A)(),
                        { downloadedTracks: j } = (0, y.s)(w.n.MY_MUSIC),
                        { from: N } = (0, h.f)({ pageId: x.b.OWN_TRACKS, blockId: p.U.TRACK_LIST }),
                        R = j.entitiesData,
                        L = (0, u.c)(() => {
                            t.tracksController && j.getData(t.tracksController);
                        });
                    ((0, C.L)(L),
                        (0, i.useEffect)(() => {
                            j.isNeededToLoad && L();
                        }, [j.isNeededToLoad, L]),
                        (0, i.useEffect)(
                            () => () => {
                                j.reset();
                            },
                            [j],
                        ),
                        (0, M.J)(j.isResolved));
                    let H = (0, i.useMemo)(
                        () => ({ Header: () => (0, r.jsx)($, {}), Footer: () => (0, r.jsx)(k.A, { children: (0, r.jsx)(A.w, { className: I().footer }) }) }),
                        [],
                    );
                    if (j.loadingState === T.G.REJECT) return (0, r.jsx)(m.SomethingWentWrong, {});
                    if (j.isEmpty) return (0, r.jsx)(J, {});
                    let b = (null == (e = j.items) ? void 0 : e.length) || 10;
                    return (0, r.jsx)(d.a, {
                        pageId: l.AppScreen.DownloadsTracks,
                        pageIdForFrom: x.b.DOWNLOADS_TRACKS,
                        children: (0, r.jsx)(g.h, {
                            scrollElement: a,
                            children: (0, r.jsxs)('div', {
                                className: I().pageContainer,
                                children: [
                                    (0, r.jsx)(ee, {}),
                                    (0, r.jsx)(E.$, {
                                        context: { listAriaLabel: P({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, o.$)(I().root, I().important),
                                        listClassName: I().content,
                                        customComponents: H,
                                        totalCount: b,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = j.items) ? void 0 : t[e];
                                            return a
                                                ? (0, r.jsx)(_.D, { track: a, index: e, entitiesData: R, contextId: x.b.DOWNLOADS_TRACKS, from: N }, a.id)
                                                : (0, r.jsx)(D.D, { isActive: !0, className: I().trackShimmer, variant: f.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: b,
                                        handleRef: n,
                                        shouldTriggerRangeChangedOn: [b],
                                        testId: c.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        20551: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicPageStoreProvider: () => u });
            var r = a(34961),
                o = a(53892),
                n = a(5120),
                i = a(55025),
                s = a(74773);
            let l = n.gK.model('MyMusicPage', { downloadedTracks: i.b }),
                d = { downloadedTracks: { loadingState: s.G.IDLE } },
                { pageStoreProvider: c } = (0, r.W)({ createStore: (e) => l.create(d, e), patchKey: o.n.MY_MUSIC }),
                u = c;
        },
        34961: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => x, s: () => h });
            var r = a(88800),
                o = a(84961),
                n = a(58390),
                i = a(53548),
                s = a(35412),
                l = a(39499),
                d = a(89108),
                c = a(70003),
                u = a(72288),
                _ = a(16818);
            (0, o.eO)(!1);
            let m = (0, i.createContext)(null),
                g = (e) => {
                    let { children: t, store: a, storeKey: o } = e,
                        n = (0, i.useMemo)(() => ({ store: a, storeKey: o }), [a, o]);
                    return (0, r.jsx)(m.Provider, { value: n, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: o } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = o.current;
                            return ((o.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                x = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        o = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: i } = e,
                                s = (0, _.Y)(),
                                l = (0, u.g)(),
                                { store: m, patchesRef: x } = (0, c.m)({
                                    createStore: () => t({ ...s, rootStore: l }),
                                    getPendingPatchBatches: o,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: i, patchKey: a, patchesRef: x }), (0, r.jsx)(g, { store: m, storeKey: a, children: n })],
                            });
                        },
                    };
                };
            function h(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, i.useContext)(m);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
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
        53892: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
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
        55025: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => d });
            var r = a(5120),
                o = a(44349),
                n = a(76626),
                i = a(96826),
                s = a(74773),
                l = a(59497);
            let d = r.gK
                .compose(r.gK.model('DownloadedTracks', { items: r.gK.maybeNull(r.gK.array(i.v)), tracks: r.gK.maybeNull(r.gK.frozen()) }), l.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: o.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var r;
                        return e.isResolved && (null == (r = e.items) ? void 0 : r.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t, a) {
                        let { modelActionsLogger: o } = (0, r._$)(e);
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                e.loadingState = s.G.PENDING;
                                let o = yield t.getTracks(a);
                                ((e.tracks = o), (e.items = (0, r.wg)(o.map((e) => (0, n.v)(e)))), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE));
                            } catch (t) {
                                (o.error(t), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = s.G.IDLE));
                    },
                }));
        },
        57328: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => p });
            var r = a(88800),
                o = a(84961),
                n = a(58390),
                i = a(65724),
                s = a(88969),
                l = a(29504),
                d = a(7628),
                c = a(42674),
                u = a.n(c);
            let _ = (0, o.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, i.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, i.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(4370),
                g = a(72288);
            let p = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: o } = (0, g.g)();
                return o.isAuthorized ? t : (a && (0, n.redirect)(m.Z.main.href), (0, r.jsx)(_, {}));
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
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        77451: (e, t, a) => {
            'use strict';
            a.d(t, { Jt: () => n, TF: () => s, hZ: () => i });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, a = 1, r = arguments.length; a < r; a++)
                            for (var o in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var a = '; ' + e;
                return !0 === t ? a : a + '=' + t;
            }
            function n(e) {
                return (function (e) {
                    for (var t = {}, a = e ? e.split('; ') : [], r = 0; r < a.length; r++) {
                        var o = a[r].split('='),
                            n = o.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, a) {
                var n;
                document.cookie =
                    ((n = r({ path: '/' }, a)),
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
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(n));
            }
            function s(e, t) {
                i(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => x });
            var r = a(88800),
                o = a(65724),
                n = a(61013),
                i = a(53548);
            let s = (e) => {
                    let { style: t, forwardRef: a, context: o, ...n } = e,
                        i = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        s = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': i, style: { ...t }, ref: a, ...n });
                },
                l = (0, i.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var d = a(16434),
                c = a.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: n, withHeader: i, withForceScroll: s, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, o.$)(c().scroller, { [c().scroller_withFooter]: n, [c().scroller_withHeader]: i, [c().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, i.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = a(55482),
                g = a(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: o,
                            debounceDurationInMs: n = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [_, p] = (0, i.useState)(null),
                        x = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && p(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < r; e++) a(e);
                                    }
                                }, n),
                            [n, o, t, a, l],
                        );
                    (0, i.useEffect)(() => {
                        l.length > 0 && _ && x(_);
                    }, l);
                    let h = (0, i.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, r.jsx)(g.sN, { ref: c, rangeChanged: x, totalCount: s, endReached: h, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: x = 700,
                            pageSize: h = 20,
                            totalCount: S,
                            totalRequests: M,
                            debounceDurationInMs: C,
                            initialItemCount: v,
                            minInitialItemCount: y = 20,
                            handleRef: w,
                            alwaysShowScrollbar: T = !1,
                            testId: f,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...D
                        } = e,
                        [E, P] = (0, i.useState)(!1),
                        I = (0, i.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : l,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : l,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, M, A]),
                        N = v ? Math.min(v, y) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, o.$)(c().root, { [c().root_scrolling]: E || T, [c().root_notScrolling]: !E && !T }, t),
                        'data-test-id': f,
                        children: [
                            A && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(p, {
                                overscan: x,
                                components: j,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: w,
                                totalCount: S,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: C,
                                initialItemCount: N,
                                shouldTriggerRangeChangedOn: k,
                                ...D,
                            }),
                            A && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        84255: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => l });
            var r = a(88800),
                o = a(84961),
                n = a(53548),
                i = a(18593),
                s = a(10829);
            let l = (0, o.PA)((e) => {
                let { track: t, index: a, entitiesData: o, contextId: l, from: d } = e,
                    c = t.id,
                    u = (0, n.useMemo)(
                        () => ({
                            contextData: { type: i.K.Various, meta: { id: l }, from: d },
                            entitiesData: o,
                            queueParams: { index: a, entityId: c },
                            loadContextMeta: !1,
                        }),
                        [l, d, o, a, c],
                    );
                return (0, r.jsx)(s.K, { track: t, playContextParams: u });
            });
        },
        87966: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
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
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => n, UC: () => i, dM: () => s, uV: () => l });
            var r = a(89916),
                o = a(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof r.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
