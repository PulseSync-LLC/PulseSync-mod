(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4041],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => y });
            var a = r(25839),
                i = r(82298),
                n = r(28631),
                l = r(74631);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: i, ...n } = e,
                        l = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': l, style: { ...t }, ref: r, ...n });
                },
                o = (0, l.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
            var d = r(45300),
                u = r.n(d);
            let c = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: l, withForceScroll: s, ...o } = e;
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(u().scroller, { [u().scroller_withFooter]: n, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
            var _ = r(10508),
                m = r(63257);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: n = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: d,
                            virtuosoRef: u,
                            ...c
                        } = e,
                        [g, v] = (0, l.useState)(null),
                        y = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == i || i(e), o.length > 0 && v(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < a; e++) r(e);
                                    }
                                }, n),
                            [n, i, t, r, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && g && y(g);
                    }, o);
                    let h = (0, l.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, n);
                    }, [d, n]);
                    return (0, a.jsx)(m.sN, { ref: u, rangeChanged: y, totalCount: s, endReached: h, ...c });
                },
                y = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: c,
                            itemContentCallback: _,
                            listClassName: m,
                            overscan: y = 700,
                            pageSize: h = 20,
                            totalCount: p,
                            totalRequests: S,
                            debounceDurationInMs: f,
                            initialItemCount: k,
                            minInitialItemCount: T = 20,
                            handleRef: A,
                            alwaysShowScrollbar: M = !1,
                            testId: x,
                            isMobileLayout: b = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...P
                        } = e,
                        [C, w] = (0, l.useState)(!1),
                        D = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        I = (0, l.useMemo)(() => {
                            var e, t;
                            return b
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, S, b]),
                        K = k ? Math.min(k, T) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, i.$)(u().root, { [u().root_scrolling]: C || M, [u().root_notScrolling]: !C && !M }, t),
                        'data-test-id': x,
                        children: [
                            b && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(v, {
                                overscan: y,
                                components: I,
                                listClassName: m,
                                itemClassName: c,
                                isScrolling: D,
                                itemContent: _,
                                scrollerRef: A,
                                totalCount: p,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: f,
                                initialItemCount: K,
                                shouldTriggerRangeChangedOn: E,
                                ...P,
                            }),
                            b && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        16063: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => l });
            var a = r(83772),
                i = r(45337),
                n = r(80468);
            let l = (e, t) => {
                var r, l;
                let s = null == (r = e.artists) ? void 0 : r.map(i.G),
                    o = null == (l = e.albums) ? void 0 : l.map(a.f);
                return { ...(0, n.x)(e, t), artists: s, albums: o };
            };
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => _ });
            var a = r(25839),
                i = r(84059),
                n = r(8487),
                l = r(61493),
                s = r(71035),
                o = r(4071),
                d = r(4254),
                u = r(57024),
                c = r(36484),
                g = r(62562);
            let _ = (e) => {
                let { size: t = 'm', variant: r = 'default', color: _ = 'primary', withRipple: m = !0, buttonText: v, isBlock: y, key: h, className: p } = e,
                    S = (0, i.useRouter)(),
                    f = (0, g.N)().get(c.QG),
                    k = (0, s.c)(() => {
                        f.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), S.push(f.authorizationUrl));
                    });
                return (0, a.jsx)(
                    o.$,
                    {
                        onClick: k,
                        className: p,
                        isBlock: y,
                        color: _,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        24820: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => n });
            var a = r(28410),
                i = r(16063);
            let n = (e, t) => {
                let r = (0, i.K)(e, t);
                return (0, a.wg)(r);
            };
        },
        25464: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicPageStoreProvider: () => c });
            var a = r(80499),
                i = r(82706),
                n = r(28410),
                l = r(98487),
                s = r(36159);
            let o = n.gK.model('MyMusicPage', { downloadedTracks: l.b }),
                d = { downloadedTracks: { loadingState: s.G.IDLE } },
                { pageStoreProvider: u } = (0, a.W)({ createStore: (e) => o.create(d, e), patchKey: i.n.MY_MUSIC }),
                c = u;
        },
        29340: (e, t, r) => {
            'use strict';
            r.d(t, { MyMusicDownloadedTracksPage: () => et });
            var a = r(25839),
                i = r(82298),
                n = r(88204),
                l = r(74631),
                s = r(39004),
                o = r(61493),
                d = r(22939),
                u = r(71035),
                c = r(82589),
                g = r(64715),
                _ = r(1407),
                m = r(82967),
                v = r(40110),
                y = r(20258),
                h = r(10322),
                p = r(30290),
                S = r(89192),
                f = r(30716),
                k = r(96444),
                T = r(79422),
                A = r(80499),
                M = r(82706),
                x = r(36159),
                b = r(3718),
                E = r(99401),
                P = r(26076),
                C = r(97805),
                w = r(6968),
                D = r(35240),
                I = r.n(D),
                K = r(8487),
                L = r(66738),
                N = r(4254),
                j = r(79367),
                R = r(47009),
                O = r(21784),
                H = r(50209),
                F = r(27954),
                U = r(27625),
                G = r(15270),
                z = r(49438),
                W = r(39052),
                Y = r.n(W);
            let B = (0, n.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, A.s)(M.n.MY_MUSIC),
                    r = (0, a.jsx)(N.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    i = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    i.push(
                        (0, a.jsx)(N.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, a.jsx)(K.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let n = Math.floor(t.tracksDurationInMinutes / 60),
                    s = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (n || s) &&
                        (i.push(r),
                        i.push(
                            (0, a.jsx)(N.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, a.jsx)(K.A, { id: 'time.hours-minutes', values: { hours: n, minutes: s } }),
                            }),
                        )),
                    (0, a.jsx)('div', { className: Y().root, children: i.map((e, t) => (0, l.cloneElement)(e, { key: t })) })
                );
            });
            var V = r(33220),
                $ = r.n(V);
            let Q = (0, n.PA)(() => {
                let { isScrolling: e } = (0, l.useContext)(U.B),
                    t = (0, O.W)(),
                    { downloadedTracks: r } = (0, A.s)(M.n.MY_MUSIC),
                    {
                        settings: { isMobile: i },
                        slam: n,
                    } = (0, F.g)(),
                    { from: s } = (0, p.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                    c = (0, j.P)(),
                    g = (0, R.b)(),
                    { isPlaying: _, togglePlay: m } = (0, H.D)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: s },
                            entitiesData: r.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    h = (0, u.c)(() => {
                        c() || (m(), g(!_));
                    });
                return (0, a.jsx)('header', {
                    className: $().root,
                    'aria-hidden': e,
                    'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, a.jsxs)('div', {
                        className: $().container,
                        children: [
                            !n.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, a.jsx)(G.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, a.jsxs)('div', {
                                className: $().titleContainer,
                                children: [
                                    (0, a.jsx)(N.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: $().title,
                                        children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, a.jsx)(B, {}),
                                ],
                            }),
                            !r.isEmpty &&
                                (0, a.jsx)(z.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: _,
                                    onClick: h,
                                    className: $().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !i && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var Z = r(38669),
                X = r.n(Z);
            let q = (0, n.PA)(() =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(Q, {}),
                        (0, a.jsxs)('div', {
                            className: X().root,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, a.jsx)(L.I, { className: X().icon, size: 'l', variant: 'download' }),
                                (0, a.jsx)(N.DZ, { className: X().title, variant: 'div', size: 'xs', children: (0, a.jsx)(K.A, { id: 'offline.downloaded-empty' }) }),
                                (0, a.jsx)(N.HL, {
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
            var J = r(10603);
            let ee = (0, n.PA)(() => {
                    let { isScrolling: e } = (0, l.useContext)(U.B),
                        t = (0, O.W)(),
                        { downloadedTracks: r } = (0, A.s)(M.n.MY_MUSIC),
                        {
                            settings: { isMobile: n },
                            slam: s,
                        } = (0, F.g)(),
                        { from: c } = (0, p.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        g = (0, R.b)(),
                        _ = (0, j.P)(),
                        { isPlaying: m, togglePlay: h } = (0, H.D)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: c },
                                entitiesData: r.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        S = (0, u.c)(() => {
                            _() || (h(), g(!m));
                        });
                    return (0, a.jsx)(J.Y, {
                        variant: J.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, a.jsxs)('div', {
                            className: $().container,
                            'data-test-id': o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !s.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, a.jsx)(G.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, a.jsx)(N.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: $().stickyTitle,
                                    children: (0, a.jsx)(K.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !r.isEmpty &&
                                    (0, a.jsx)(z.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: m,
                                        onClick: S,
                                        className: (0, i.$)($().playButton, { [$().stickyPlayButton]: !n }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !n && (0, a.jsx)(K.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, i.$)($().stickyHeader, $().important),
                        staticClassName: (0, i.$)($().staticHeader, $().important),
                    });
                }),
                et = (0, n.PA)(() => {
                    var e;
                    let t = (0, k.j)(),
                        { contentScrollRef: r, setContentScrollRef: n } = (0, S.g)(),
                        { formatMessage: D } = (0, s.A)(),
                        { downloadedTracks: K } = (0, A.s)(M.n.MY_MUSIC),
                        { from: L } = (0, p.f)({ pageId: y._Q.OWN_TRACKS, blockId: v.U.TRACK_LIST }),
                        N = (0, T.w)(),
                        j = (0, u.c)(() => {
                            t.tracksController && K.getData(t.tracksController);
                        });
                    ((0, c.L)(j),
                        (0, l.useEffect)(() => {
                            K.isNeededToLoad && j();
                        }, [K.isNeededToLoad, j]),
                        (0, l.useEffect)(
                            () => () => {
                                K.reset();
                            },
                            [K],
                        ),
                        (0, f.J)(K.isResolved));
                    let R = (0, l.useMemo)(
                        () => ({ Header: () => (0, a.jsx)(Q, {}), Footer: () => (0, a.jsx)(P.A, { children: (0, a.jsx)(E.w, { className: I().footer }) }) }),
                        [],
                    );
                    if (K.loadingState === x.G.REJECT) return (0, a.jsx)(g.SomethingWentWrong, {});
                    if (K.isEmpty) return (0, a.jsx)(q, {});
                    let O = (null == (e = K.items) ? void 0 : e.length) || 10;
                    return (0, a.jsx)(h.n, {
                        pageId: y._Q.DOWNLOADS_TRACKS,
                        children: (0, a.jsx)(_.h, {
                            scrollElement: r,
                            children: (0, a.jsxs)('div', {
                                className: I().pageContainer,
                                children: [
                                    (0, a.jsx)(ee, {}),
                                    (0, a.jsx)(w.$, {
                                        context: { listAriaLabel: D({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, i.$)(I().root, I().important),
                                        listClassName: I().content,
                                        customComponents: R,
                                        totalCount: O,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let r = null == (t = K.items) ? void 0 : t[e];
                                            return r
                                                ? (0, a.jsx)(
                                                      m.K,
                                                      {
                                                          track: r,
                                                          playContextParams: N(r.id, {
                                                              contextData: { type: d.K.Various, meta: { id: y._Q.DOWNLOADS_TRACKS }, from: L },
                                                              entitiesData: K.entitiesData,
                                                              queueParams: { index: e, entityId: r.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      r.id,
                                                  )
                                                : (0, a.jsx)(C.D, { isActive: !0, className: I().trackShimmer, variant: b.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: O,
                                        handleRef: n,
                                        shouldTriggerRangeChangedOn: [O],
                                        testId: o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        30871: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => v });
            var a = r(25839),
                i = r(88204),
                n = r(84059),
                l = r(82298),
                s = r(8487),
                o = r(4254),
                d = r(16978),
                u = r(148),
                c = r.n(u);
            let g = (0, i.PA)(() =>
                (0, a.jsxs)('div', {
                    className: c().root,
                    children: [
                        (0, a.jsx)(o.DZ, {
                            className: (0, l.$)(c().title, c().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(o.HL, {
                            className: (0, l.$)(c().text, c().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(d.H, { size: 'l', className: c().button }),
                    ],
                }),
            );
            var _ = r(53712),
                m = r(27954);
            let v = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: i } = (0, m.g)();
                return i.isAuthorized ? t : (r && (0, n.redirect)(_.Z.main.href), (0, a.jsx)(g, {}));
            });
        },
        33220: (e) => {
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
        34001: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => h });
            var a = r(28410),
                i = r(75501),
                n = r(18660),
                l = r(51751),
                s = r(12929),
                o = r(26847),
                d = r(11638),
                u = r(86656),
                c = r(27304),
                g = r(40480),
                _ = r(77895),
                m = r(43708),
                v = r(60024);
            let y = [i.S.MUSIC, i.S.TRACK, i.S.NOISE, i.S.ASMR],
                h = a.gK
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
                            trailer: a.gK.maybe(u.a),
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
                                    let { library: t } = (0, l.M)(e);
                                    return t.isTrackLiked(e.id);
                                }
                                return !1;
                            },
                            get isDownloaded() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return t.isTrackDownloaded(e.id);
                            },
                            get isDownloading() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return t.isTrackDownloading(e.id);
                            },
                            get downloadingProgress() {
                                if (!(0, a._n)(e)) return 0;
                                let { slam: t } = (0, l.M)(e);
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
                                    let { library: t } = (0, l.M)(e);
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
                                let { user: t } = (0, l.M)(e);
                                return t.hasPlus;
                            },
                            get isSyncLyricsAvailableWithOfflineFeature() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t } = (0, l.M)(e);
                                return !!e.hasSyncLyrics && !t.isOfflineModeEnabled;
                            },
                            get isSyncLyricsAvailable() {
                                return this.isPlusSubscribed && this.isSyncLyricsAvailableWithOfflineFeature;
                            },
                            get isLyricsAvailable() {
                                if (!(0, a._n)(e)) return !1;
                                let { slam: t, user: r } = (0, l.M)(e);
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
                                if ((0, a._n)(e)) return (0, m.f)(e.type);
                                return !1;
                            },
                            get isUGC() {
                                if ((0, a._n)(e)) {
                                    let { isUGC: t } = (0, _.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwn() {
                                if ((0, a._n)(e)) {
                                    let { isOwn: t } = (0, _.I)(e.trackSource);
                                    return t;
                                }
                                return;
                            },
                            get isOwnReplacedToUGC() {
                                if ((0, a._n)(e)) {
                                    let { isOwnReplacedToUGC: t } = (0, _.I)(e.trackSource);
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
                                } = (0, l.M)(e);
                                return (0, c.t)(e, { isMobile: t, isOfflineModeEnabled: r.isOfflineModeEnabled });
                            },
                            get isNonUserGenerated() {
                                if (!(0, a._n)(e)) return !1;
                                let { isNonUserGenerated: t } = (0, _.I)(e.trackSource);
                                return t;
                            },
                            get hasModalAccess() {
                                return e.hasModalDisclaimer;
                            },
                            getDisclaimerEntityRef: (r) =>
                                r
                                    ? { entityType: r, entityId: e.id }
                                    : t.isTrackPodcast
                                      ? { entityType: s.n.PODCAST, entityId: e.id }
                                      : t.isTrackAudiobook
                                        ? { entityType: s.n.AUDIOBOOK, entityId: e.id }
                                        : { entityType: s.n.TRACK, entityId: e.id },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        afterCreate() {
                            e.trackType = e.type;
                        },
                        toggleLike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, l.M)(e);
                            if (r.isAuthorized) return yield t.toggleTrackLike({ entityId: e.id, albumId: e.albumId, userId: r.account.data.uid });
                        }),
                        toggleDislike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { library: t, user: r } = (0, l.M)(e);
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
                    }))
                    // for PulseSync WebHost: BEGIN attach addon metadata update actions to the track model
                    .actions(r(999994).metadataModelActions('track'));
                    // for PulseSync WebHost: END attach addon metadata update actions to the track model
        },
        35240: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        38669: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        39052: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        43708: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => i });
            var a = r(75501);
            let i = (e) => e === a.S.TRACK || e === a.S.MUSIC;
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        53603: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            let a = (e) => {
                var t, r;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (r = null == e ? void 0 : e[0]) ? r : null;
            };
        },
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => n, UC: () => l, dM: () => s, uV: () => o });
            var a = r(93690),
                i = r(58848);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof a.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
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
        58848: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60024: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var a = r(28410),
                i = r(59981);
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
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var a = r(74631),
                i = r(71035);
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
        80468: (e, t, r) => {
            'use strict';
            (r.d(t, { x: () => n }), ((a || (a = {})).SMART_PREVIEW = 'smart_preview'));
            var a,
                i = r(23951);
            let n = (e, t) => {
                var r, n, l, s, o, d, u, c, g, _;
                let { isSmartPreview: m, hasEverFinished: v } = t || {},
                    y = (0, i.Q)(null == e ? void 0 : e.derivedColors),
                    h = m ? (null == e || null == (r = e.smartPreviewParams) ? void 0 : r.durationMs) : null == e ? void 0 : e.durationMs,
                    p = { available: !!(null == e || null == (n = e.specialAudioResources) ? void 0 : n.includes(a.SMART_PREVIEW)) };
                return {
                    id: ((null == e ? void 0 : e.id) || 0).toString(),
                    isAvailable: !!(null == e ? void 0 : e.available),
                    isRemoved: (null == e ? void 0 : e.error) === 'not-found',
                    title: null != (g = null == e ? void 0 : e.title) ? g : '',
                    version: null == e ? void 0 : e.version,
                    durationMs: h,
                    coverUri: null == e ? void 0 : e.coverUri,
                    averageColor: y,
                    trackParameters: null == e ? void 0 : e.trackParameters,
                    trackSource: null == e ? void 0 : e.trackSource,
                    albumId: null == e || null == (s = e.albums) || null == (l = s[0]) ? void 0 : l.id,
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
                    shortDescription: null != (_ = null == e ? void 0 : e.shortDescription) ? _ : '',
                    trailer: p,
                    clipIds: null == e ? void 0 : e.clipIds,
                    major: (null == e ? void 0 : e.major) ? { id: e.major.id, name: e.major.name } : null,
                    genre: null == e || null == (c = e.albums) || null == (u = c[0]) ? void 0 : u.genre,
                    realId: null == e ? void 0 : e.realId,
                    cutoutCover: null == e ? void 0 : e.cutoutCover,
                };
            };
        },
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => y, s: () => h });
            var a = r(25839),
                i = r(88204),
                n = r(84059),
                l = r(74631),
                s = r(89288),
                o = r(36432),
                d = r(94421),
                u = r(99989),
                c = r(27954),
                g = r(83382);
            (0, i.eO)(!1);
            let _ = (0, l.createContext)(null),
                m = (e) => {
                    let { children: t, store: r, storeKey: i } = e,
                        n = (0, l.useMemo)(() => ({ store: r, storeKey: i }), [r, i]);
                    return (0, a.jsx)(_.Provider, { value: n, children: t });
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
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                            let { children: n, nonce: l } = e,
                                s = (0, g.Y)(),
                                o = (0, c.g)(),
                                { store: _, patchesRef: y } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(v, { nonce: l, patchKey: r, patchesRef: y }), (0, a.jsx)(m, { store: _, storeKey: r, children: n })],
                            });
                        },
                    };
                };
            function h(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, l.useContext)(_);
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
        82589: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var a = r(74631),
                i = r(19616),
                n = r(71035),
                l = r(96444);
            let s = [i.DT.IDLE, i.DT.DOWNLOADED],
                o = (e) => {
                    var t;
                    let r = (0, l.j)(),
                        o = (0, n.c)((t) => {
                            let { state: r } = t;
                            s.includes(r.loadingState) && e();
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
        82706: (e, t, r) => {
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
        88148: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => c });
            var a = r(28410),
                i = r(66730),
                n = r(69088),
                l = r(69432),
                s = r(34001),
                o = r(34546),
                d = r(31488),
                u = r(53603);
            let c = s.O.props({ artists: a.gK.array(n.P), albums: a.gK.array(i.G), chart: a.gK.maybe(l.I) })
                .views((e) => ({
                    get artistsNames() {
                        return (0, o.j)(e.artists);
                    },
                    get mainArtist() {
                        return (0, u.m)(e.artists);
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
                        var l;
                        return !!(null == (l = this.mainAlbum) ? void 0 : l.isAvailableOnlyForPlus);
                    },
                }))
                .actions((e) => ({
                    changeTrackInfo: (0, a.L3)(function* (t, r) {
                        let { ugcResource: i, modelActionsLogger: l } = (0, a._$)(e);
                        if (e.artists.map((e) => e.name).join(', ') === r && t === e.title) return d.F.OK;
                        try {
                            var s;
                            (yield i.changeTrack({ trackId: e.id, title: t, artist: r }), (e.title = t));
                            let l = (null == (s = e.artists[0]) ? void 0 : s.id) || '0';
                            if (((e.artists = (0, a.wg)([])), r)) {
                                let t = n.P.create({ id: l, name: r, isAvailable: !0 });
                                e.artists = (0, a.wg)([t]);
                            }
                            return d.F.OK;
                        } catch (e) {
                            return (l.error(e), d.F.ERROR);
                        }
                    }),
                }))
                .named('Track');
        },
        98487: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => d });
            var a = r(28410),
                i = r(52807),
                n = r(24820),
                l = r(88148),
                s = r(36159),
                o = r(19835);
            let d = a.gK
                .compose(a.gK.model('DownloadedTracks', { items: a.gK.maybeNull(a.gK.array(l.v)), tracks: a.gK.maybeNull(a.gK.frozen()) }), o.X)
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
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                e.loadingState = s.G.PENDING;
                                let i = yield t.getTracks(r);
                                ((e.tracks = i), (e.items = (0, a.wg)(i.map((e) => (0, n.v)(e)))), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE));
                            } catch (t) {
                                (i.error(t), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = s.G.IDLE));
                    },
                }));
        },
    },
]);
