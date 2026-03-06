(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 9618],
    {
        2608: (e, r, t) => {
            'use strict';
            t.d(r, { b: () => s });
            var i = t(15099),
                n = t(80585);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return n.cp.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.cp.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.cp.FAIRY_TALE;
                    default:
                        return n.cp.ALBUM;
                }
            };
        },
        9567: (e, r, t) => {
            'use strict';
            t.d(r, { MyMusicDownloadedTracksPage: () => E });
            var i = t(54486),
                n = t(50420),
                s = t(28303),
                o = t(61910),
                a = t(43426),
                l = t(31500),
                d = t(63585),
                m = t(8817),
                u = t(89511),
                c = t(82644),
                v = t(33276),
                h = t(21365),
                b = t(83252),
                P = t(80585),
                g = t(76310),
                _ = t.n(g),
                p = t(47713),
                y = t(5956),
                f = t(97800),
                k = t(14114),
                A = t.n(k);
            let T = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: r },
                    } = (0, b.Pjs)(),
                    t = (0, i.jsx)(f.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    n = [];
                (null == (e = r.tracks) ? void 0 : e.length) &&
                    n.push(
                        (0, i.jsx)(f.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.tracks-count', values: { value: r.tracks.length } }),
                        }),
                    );
                let s = Math.floor(r.tracksDurationInMinutes / 60),
                    a = Math.floor(r.tracksDurationInMinutes % 60);
                return (
                    (s || a) &&
                        (n.push(t),
                        n.push(
                            (0, i.jsx)(f.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, i.jsx)(p.A, { id: 'time.hours-minutes', values: { hours: s, minutes: a } }),
                            }),
                        )),
                    (0, i.jsx)('div', { className: A().root, children: n.map((e, r) => (0, o.cloneElement)(e, { key: r })) })
                );
            });
            var x = t(12962),
                C = t.n(x);
            let w = (0, s.PA)(() => {
                let { isScrolling: e } = (0, o.useContext)(P.B9),
                    r = (0, b.W6M)(),
                    {
                        myMusic: { downloadedTracks: t },
                        settings: { isMobile: n },
                        slam: s,
                    } = (0, b.Pjs)(),
                    { from: a } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                    l = (0, b.PT7)(),
                    u = (0, b.brA)(),
                    { isPlaying: c, togglePlay: v } = (0, b.Dx4)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: a },
                            entitiesData: t.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    h = (0, m.c)(() => {
                        l() || (v(), u(!c));
                    });
                return (0, i.jsx)('header', {
                    className: C().root,
                    'aria-hidden': e,
                    children: (0, i.jsxs)('div', {
                        className: C().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                r.canBack &&
                                (0, i.jsx)(P.Lh, { withForwardControl: !1, withBackwardControl: r.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, i.jsxs)('div', {
                                className: C().titleContainer,
                                children: [
                                    (0, i.jsx)(f.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: C().title,
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, i.jsx)(T, {}),
                                ],
                            }),
                            !t.isEmpty &&
                                (0, i.jsx)(P.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: c,
                                    onClick: h,
                                    className: C().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !n && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var O = t(61336),
                D = t.n(O);
            let M = (0, s.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(w, {}),
                            (0, i.jsxs)('div', {
                                className: D().root,
                                children: [
                                    (0, i.jsx)(y.Icon, { className: D().icon, size: 'l', variant: 'download' }),
                                    (0, i.jsx)(f.Heading, {
                                        className: D().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, i.jsx)(f.Caption, {
                                        className: D().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(p.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                S = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, o.useContext)(P.B9),
                        r = (0, b.W6M)(),
                        {
                            myMusic: { downloadedTracks: t },
                            settings: { isMobile: s },
                            slam: a,
                        } = (0, b.Pjs)(),
                        { from: l } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                        u = (0, b.brA)(),
                        c = (0, b.PT7)(),
                        { isPlaying: v, togglePlay: h } = (0, b.Dx4)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: l },
                                entitiesData: t.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        g = (0, m.c)(() => {
                            c() || (h(), u(!v));
                        });
                    return (0, i.jsx)(P.Y9, {
                        variant: P.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, i.jsxs)('div', {
                            className: C().container,
                            children: [
                                !a.isOfflineModeEnabled &&
                                    r.canBack &&
                                    (0, i.jsx)(P.Lh, { withForwardControl: !1, withBackwardControl: r.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, i.jsx)(f.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: C().stickyTitle,
                                    children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !t.isEmpty &&
                                    (0, i.jsx)(P.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: v,
                                        onClick: g,
                                        className: (0, n.$)(C().playButton, { [C().stickyPlayButton]: !s }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !s && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, n.$)(C().stickyHeader, C().important),
                        staticClassName: (0, n.$)(C().staticHeader, C().important),
                    });
                }),
                E = (0, s.PA)(() => {
                    var e;
                    let r = (0, b.jRO)(),
                        { contentScrollRef: t, setContentScrollRef: s } = (0, b.gKY)(),
                        { formatMessage: g } = (0, a.A)(),
                        {
                            myMusic: { downloadedTracks: p },
                        } = (0, b.Pjs)(),
                        { from: y } = (0, b.fyy)({ pageId: b._Q$.OWN_TRACKS, blockId: b.UfI.TRACK_LIST }),
                        f = (0, b.wZZ)(),
                        k = (0, m.c)(() => {
                            r.tracksController && p.getData(r.tracksController);
                        });
                    (0, u.L)(k),
                        (0, o.useEffect)(() => {
                            p.isNeededToLoad && k();
                        }, [p.isNeededToLoad, k]),
                        (0, o.useEffect)(
                            () => () => {
                                p.reset();
                            },
                            [p],
                        ),
                        (0, b.Jzs)(p.isResolved);
                    let A = (0, o.useMemo)(
                        () => ({ Header: () => (0, i.jsx)(w, {}), Footer: () => (0, i.jsx)(P.A, { children: (0, i.jsx)(P.wi, { className: _().footer }) }) }),
                        [],
                    );
                    if (p.loadingState === b.GuX.REJECT) return (0, i.jsx)(c.w, {});
                    if (p.isEmpty) return (0, i.jsx)(M, {});
                    let T = (null == (e = p.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(b.nVz, {
                        pageId: b._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(v.hO, {
                            scrollElement: t,
                            children: (0, i.jsxs)('div', {
                                className: _().pageContainer,
                                children: [
                                    (0, i.jsx)(S, {}),
                                    (0, i.jsx)(P.$$, {
                                        context: { listAriaLabel: g({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, n.$)(_().root, _().important),
                                        listClassName: _().content,
                                        customComponents: A,
                                        totalCount: T,
                                        itemContentCallback: (e) => {
                                            var r;
                                            let t = null == (r = p.items) ? void 0 : r[e];
                                            return t
                                                ? (0, i.jsx)(
                                                      h.Kt,
                                                      {
                                                          track: t,
                                                          playContextParams: f(t.id, {
                                                              contextData: { type: d.K.Various, meta: { id: b._Q$.DOWNLOADS_TRACKS }, from: y },
                                                              entitiesData: p.entitiesData,
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      t.id,
                                                  )
                                                : (0, i.jsx)(P.DS, { isActive: !0, className: _().trackShimmer, variant: b.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: T,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [T],
                                        testId: l.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        12962: (e) => {
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
        14114: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        21390: (e, r, t) => {
            'use strict';
            t.d(r, { L: () => m });
            var i,
                n = t(94377),
                s = t(61910),
                o = {
                    6699: (e, r, t) => {
                        Object.defineProperty(r, '__esModule', { value: !0 }), (r.useDebouncedToggle = void 0);
                        let i = t(352),
                            n = t(810);
                        r.useDebouncedToggle = (e) => {
                            let { delay: r, initialState: t, throttleTimeout: s } = e,
                                o = (0, n.useRef)(null),
                                [a, l] = (0, n.useState)(!!t),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            l(!t),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    l(!!t);
                                                }, r));
                                        }, s),
                                    [r, t, s],
                                ),
                                m = (0, n.useCallback)(() => {
                                    l(!!t), o.current && window.clearTimeout(o.current);
                                }, [t]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: a, handleDebouncedToggle: d, reset: m }
                            );
                        };
                    },
                    361: (e, r) => {
                        Object.defineProperty(r, '__esModule', { value: !0 }),
                            (r.getElementFromRefOrElement = void 0),
                            (r.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = t.t(s, 2));
                    },
                },
                a = {};
            function l(e) {
                var r = a[e];
                if (void 0 !== r) return r.exports;
                var t = (a[e] = { exports: {} });
                return o[e](t, t.exports, l), t.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0);
                let e = l(810),
                    r = l(361),
                    t = l(6699);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: s, elementRef: o } = i,
                        { state: a, handleDebouncedToggle: l } = (0, t.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            s && l(), null == n || n();
                        }, [s, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, r.getElementFromRefOrElement)(o);
                            if (null === e) return;
                            let t = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return t.addEventListener('scroll', d, i), () => t.removeEventListener('scroll', d, i);
                        }, [o, d]),
                        a
                    );
                };
            })(),
                d.__esModule;
            var m = d.useScroll;
        },
        25751: (e, r, t) => {
            'use strict';
            t.d(r, { useDownloadedTracks: () => l });
            var i = t(61910),
                n = t(12460),
                s = t(8817),
                o = t(83252);
            let a = [n.DT.IDLE, n.DT.DOWNLOADED],
                l = (e) => {
                    var r;
                    let t = (0, o.jRO)(),
                        l = (0, s.c)((r) => {
                            let { state: t } = r;
                            a.includes(t.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var r, i;
                        return (
                            null == (r = t.store) || r.tracks.events.on(n.je.STATE_CHANGED, e),
                            null == (i = t.store) || i.tracks.events.on(n.je.ENTITY_CHANGED, l),
                            () => {
                                var r, i;
                                null == (r = t.store) || r.tracks.events.off(n.je.STATE_CHANGED, e), null == (i = t.store) || i.tracks.events.off(n.je.ENTITY_CHANGED, l);
                            }
                        );
                    }, [e, l, null == (r = t.store) ? void 0 : r.tracks.events]);
                };
        },
        28795: (e, r, t) => {
            'use strict';
            t.d(r, { Chart: () => h });
            var i = t(54486),
                n = t(50420),
                s = t(28303),
                o = t(61910),
                a = t(43426),
                l = t(31500),
                d = t(60423),
                m = t(5956),
                u = t(97800),
                c = t(49423),
                v = t.n(c);
            let h = (0, s.PA)((e) => {
                let {
                        progress: r,
                        withIcon: t,
                        withCrownIcon: s,
                        position: c,
                        weight: h = 'normal',
                        isDisliked: b,
                        isDisabled: P,
                        className: g,
                        positionClassName: _,
                    } = e,
                    { formatMessage: p } = (0, a.A)(),
                    y = r || t,
                    f = (0, o.useMemo)(() => {
                        if (s) return 'crown';
                        switch (r) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [r, s]),
                    k = (0, o.useMemo)(() => {
                        switch (r) {
                            case d._.UP:
                                return p({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return p({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return p({ id: 'entity-names.chart-new' });
                            default:
                                return p({ id: 'entity-names.chart-same' });
                        }
                    }, [p, r]),
                    A = s ? 'crown' : r;
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(v().root, g),
                    ...(0, l.Am)(l.OA.chart.CHART_PROGRESS),
                    children: [
                        (0, i.jsx)(u.Caption, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, n.$)(v().position, _, { [v().position_disliked]: b, [v().position_disabled]: P }),
                            ...(0, l.Am)(l.OA.chart.CHART_PROGRESS_POSITION),
                            children: c,
                        }),
                        y &&
                            (0, i.jsx)(m.Icon, {
                                variant: f,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, n.$)(v().progress, v()['progress_'.concat(A)], { [v().progress_disliked]: b, [v().progress_disabled]: P }),
                                ...(0, l.Am)(l.OA.chart.CHART_PROGRESS_ICON),
                            }),
                    ],
                });
            });
        },
        29406: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        30662: (e, r, t) => {
            'use strict';
            t.d(r, { useAlbumAnalyticsAppScreenName: () => o });
            var i = t(61910),
                n = t(43350),
                s = t(15099);
            let o = (e) =>
                (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.PODCAST:
                            return n.QT.PodcastScreen;
                        case s._.AUDIOBOOK:
                            return n.QT.AudiobookScreen;
                        default:
                            return n.QT.AlbumScreen;
                    }
                }, [e]);
        },
        31757: (e, r, t) => {
            'use strict';
            t.d(r, { useAlbumDisclaimer: () => n });
            var i = t(83252);
            let n = (e) => {
                let { album: r, callback: t, shouldHistoryBack: n } = e;
                return (0, i.lVe)({ entity: r, callback: t, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        33276: (e, r, t) => {
            'use strict';
            t.d(r, { hO: () => c, jr: () => v, jp: () => h, QZ: () => n }), t(77607);
            var i = t(61910);
            let n = (e, r, t) => {
                let n = null != t && t;
                return {
                    topColorStyle: (0, i.useMemo)(() => {
                        if (void 0 === r) return;
                        let t = n ? 93 : 17,
                            i = r - t;
                        return { '--average-color-background': e, transform: 'translateY('.concat(r >= t ? 0 : i, 'px)'), opacity: 1 };
                    }, [r, n, e]),
                    headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
                };
            };
            var s = t(54486),
                o = t(1365),
                a = t(28303),
                l = t(21390),
                d = t(83252),
                m = t(80585);
            let u = (e) => {
                    let { element: r, scrollTop: t, isMobile: i } = e,
                        n = 0.6 * r.clientHeight;
                    return t + (i ? 60 : 76) >= r.offsetTop + n;
                },
                c = (0, a.PA)((e) => {
                    let { children: r, scrollElement: t, outerTitle: n = '', headerElement: a, headerThreshold: c, shouldHideHeader: v } = e,
                        [h, b] = (0, i.useState)(n),
                        [P, g] = (0, i.useState)(null),
                        [_, p] = (0, i.useState)(null),
                        [y, f] = (0, i.useState)(null),
                        [k, A] = (0, i.useState)(!1),
                        [T, x] = (0, i.useState)(!1),
                        [C, w] = (0, i.useState)(!1),
                        [O, D] = (0, i.useState)(!1),
                        {
                            settings: { isMobile: M },
                        } = (0, d.Pjs)();
                    (0, i.useLayoutEffect)(() => {
                        b(n);
                    }, [n]);
                    let S = (0, i.useCallback)(() => {
                        let e = null != c ? c : 10,
                            r = a ? Number(a.offsetTop) - e : e;
                        r < 0 && (r = 0);
                        let i = (e) => {
                            w(e > r),
                                v && D(e > 30),
                                (null == P ? void 0 : P.current) && A(u({ element: null == P ? void 0 : P.current, scrollTop: e, isMobile: M })),
                                (null == _ ? void 0 : _.current) && x(u({ element: null == _ ? void 0 : _.current, scrollTop: e, isMobile: M }));
                        };
                        M ? i(window.scrollY) : t && i(t.scrollTop);
                    }, [c, a, M, v, P, _, t]);
                    (0, i.useEffect)(() => {
                        M ? 0 === window.scrollY && w(!1) : (t && 0 !== t.scrollTop) || w(!1);
                    }, [t, null == t ? void 0 : t.scrollTop, M]);
                    let E = (0, i.useMemo)(() => (M ? { onScroll: (0, o.A)(S, 200) } : { onScroll: (0, o.A)(S, 200), elementRef: t }), [S, t, M]);
                    (0, l.L)(E);
                    let j = (0, i.useMemo)(
                        () => ({
                            title: h,
                            setTitle: b,
                            titleElement: P,
                            scrollElement: M ? null : t,
                            setTitleElement: g,
                            childElement: _,
                            setChildElement: p,
                            child: y,
                            setChild: f,
                            isScrolledChild: T,
                            isScrolledTitle: k,
                            isScrolling: C,
                            isHeaderHidden: O,
                        }),
                        [h, k, P, t, C, M, y, _, T, O],
                    );
                    return (0, s.jsx)(m.B9.Provider, { value: j, children: r });
                }),
                v = (e) => {
                    let { children: r, child: t, className: n } = e,
                        { setChildElement: o, setChild: a } = (0, i.useContext)(m.B9),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && o(l), t && a(t);
                        }, [l, t, o, a]),
                        (0, i.useEffect)(
                            () => () => {
                                a(null);
                            },
                            [a],
                        ),
                        (0, s.jsx)('div', { ref: l, className: n, children: r })
                    );
                },
                h = (e) => {
                    let { children: r, title: t, className: n } = e,
                        { setTitleElement: o, setTitle: a } = (0, i.useContext)(m.B9),
                        l = (0, i.useRef)(null);
                    return (
                        (0, i.useEffect)(() => {
                            (null == l ? void 0 : l.current) && o(l), t && a(t);
                        }, [l, t, o, a]),
                        (0, i.useEffect)(
                            () => () => {
                                a('');
                            },
                            [a],
                        ),
                        (0, s.jsx)('div', { ref: l, className: n, children: r })
                    );
                };
        },
        38868: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPinClick: () => c });
            var i = t(54486),
                n = t(63930),
                s = t(61910),
                o = t(43426),
                a = t(83252),
                l = t(80585),
                d = t(28303),
                m = t(2608);
            let u = (0, d.PA)((e) => {
                    let { album: r, closeToast: t } = e,
                        n = (0, m.b)(r);
                    return (0, i.jsx)(l.k4, {
                        closeToast: t,
                        entityVariant: n,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        entityTitle: r.title,
                        isPinned: r.isPinned,
                        radius: 's',
                    });
                }),
                c = (e) => {
                    let { user: r } = (0, a.Pjs)(),
                        { notify: t } = (0, a.lkh)(),
                        { formatMessage: d } = (0, o.A)(),
                        [m, c] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t((0, i.jsx)(l.hT, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.uQT.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        c(!0);
                        let o = await e.togglePin();
                        c(!1),
                            o
                                ? t((0, i.jsx)(u, { album: s }), { containerId: a.uQT.INFO })
                                : t((0, i.jsx)(l.hT, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: a.uQT.ERROR });
                    }, [e, d, t, m, r.isAuthorized]);
                };
        },
        39618: (e, r, t) => {
            'use strict';
            t.r(r), t.d(r, { default: () => c });
            var i = t(54486),
                n = t(50420),
                s = t(61910),
                o = t(62443),
                a = t(78420),
                l = t(83252),
                d = t(29406),
                m = t.n(d),
                u = t(49124);
            let c = (e) => {
                let { children: r } = e,
                    { state: t, toggleTrue: d } = (0, o.e)(!1),
                    { state: c, toggleTrue: v } = (0, o.e)(!1),
                    { getThemeFromStorage: h } = (0, l.QDo)(new a.si()),
                    b = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = h()) ? e : (0, l.VDQ)();
                    }, [h]),
                    P = (0, s.useCallback)(
                        (e) => {
                            let r = u.env.ASSET_PREFIX || '';
                            return ''.concat(r, '/media/splash_screen/splash_screen_').concat(b, '.').concat(e);
                        },
                        [b],
                    ),
                    g = (0, s.useMemo)(() => ({ isVisible: !t }), [t]);
                return (0, i.jsxs)(l.nlO.Provider, {
                    value: g,
                    children: [
                        !t &&
                            (0, i.jsx)('div', {
                                className: (0, n.$)(m().root, m()['root_'.concat(b)], { [m().root_hidden]: c }),
                                onAnimationEnd: d,
                                children: (0, i.jsxs)('video', {
                                    className: m().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: v,
                                    onError: d,
                                    children: [(0, i.jsx)('source', { src: P('webm'), type: 'video/webm' }), (0, i.jsx)('source', { src: P('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        r,
                    ],
                });
            };
        },
        42140: (e, r, t) => {
            'use strict';
            t.d(r, { t1: () => a.Chart, Iz: () => o, ws: () => n });
            var i = t(93064);
            let n = (e) => (0, i.wg)({ position: e.position, progress: e.progress });
            var s = t(60423);
            let o = i.gK.model('Chart', { position: i.gK.maybe(i.gK.number), progress: i.gK.maybe(i.gK.enumeration(Object.values(s._))) });
            var a = t(28795);
        },
        42520: (e, r, t) => {
            'use strict';
            let i;
            t.d(r, { useMetrika: () => o });
            var n = t(61910),
                s = t(80506);
            let o = () => {
                let e = (i || (i = (0, s.a)()), i),
                    r = (0, n.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, n.useMemo)(() => ({ ...e, isLoaded: r }), [r]);
            };
        },
        46423: (e, r, t) => {
            'use strict';
            t.d(r, {
                cr: () => m.AlbumEntityNameConsumer,
                GI: () => T,
                oM: () => C,
                rU: () => a,
                e7: () => s,
                G_: () => o,
                Rl: () => l.useAlbumAnalyticsAppScreenName,
                cp: () => d.useAlbumDisclaimer,
                r_: () => m.useAlbumEntityName,
                Ek: () => u.useMarkAlbumListenedClick,
                $1: () => c.useNavigateToAlbumCPA,
                KX: () => v.useOnLikeClick,
                A7: () => h.useOnPinClick,
                PL: () => b.useOnPresaveClick,
                c5: () => P.useOnPromoLandingLikeClick,
            });
            var i = t(93064),
                n = t(83252);
            let s = (e) => {
                    let r = (0, n.mxW)(e.trailer);
                    return (0, i.wg)({
                        id: e.id,
                        title: e.title,
                        coverUri: e.coverUri,
                        type: e.type,
                        year: e.year,
                        version: e.version,
                        genre: e.genre,
                        likesCount: e.likesCount,
                        averageColor: (0, n.QBb)(e.derivedColors),
                        isAvailable: !!e.available,
                        trackPosition: e.trackPosition,
                        disclaimers: e.disclaimers,
                        trackCount: e.trackCount,
                        availableForPremiumUsers: e.availableForPremiumUsers,
                        availableForOptions: e.availableForOptions || [],
                        bestAlbumTracks: e.bests,
                        durationSec: e.durationSec,
                        trailer: r,
                        listeningFinished: !!e.listeningFinished,
                    });
                },
                o = (e) => {
                    let r = !1;
                    e.presaveDate ? (r = !0) : e.presaved && (r = e.presaved);
                    let { disclaimers: t } = (0, n.fyr)(e);
                    return (0, i.wg)({ id: e.id, disclaimers: t, isPresave: r, title: e.title, type: e.type, coverUri: e.coverUri, releaseDate: e.releaseDate });
                };
            var a = (function (e) {
                    return (e.TRACK = 'track'), (e.TEXT = 'text'), e;
                })({}),
                l = t(30662),
                d = t(31757),
                m = t(51672),
                u = t(63449),
                c = t(65134),
                v = t(96819),
                h = t(38868),
                b = t(77163),
                P = t(96025),
                g = t(43350),
                _ = t(15099),
                p = t(93729),
                y = t(60049),
                f = t(77534),
                k = t(26433);
            let A = i.gK.model('TrackPosition', { volume: i.gK.number, index: i.gK.number }),
                T = i.gK
                    .compose(
                        i.gK.model({
                            id: i.gK.number,
                            title: i.gK.string,
                            type: i.gK.maybe(i.gK.enumeration(Object.values(_._))),
                            coverUri: i.gK.maybe(i.gK.string),
                            averageColor: i.gK.maybe(i.gK.string),
                            year: i.gK.maybe(i.gK.number),
                            version: i.gK.maybe(i.gK.string),
                            isAvailable: i.gK.optional(i.gK.boolean, !0),
                            availableForOptions: i.gK.maybe(i.gK.array(i.gK.enumeration(Object.values(p.E)))),
                            availableForPremiumUsers: i.gK.maybe(i.gK.boolean),
                            bookmateOptionRequired: i.gK.maybe(i.gK.boolean),
                            genre: i.gK.maybe(i.gK.string),
                            trackPosition: i.gK.maybe(A),
                            disclaimers: i.gK.maybe(i.gK.array(i.gK.string)),
                            trackCount: i.gK.maybe(i.gK.number),
                            bestAlbumTracks: i.gK.maybe(i.gK.array(i.gK.number)),
                            trailer: i.gK.maybe(k.aQ),
                            durationSec: i.gK.maybe(i.gK.number),
                            listeningFinished: i.gK.maybe(i.gK.boolean),
                            releaseDate: i.gK.maybe(i.gK.string),
                        }),
                        k.tP,
                        k.Ec,
                    )
                    .views((e) => {
                        let r = {
                            get url() {
                                let { href: r } = (0, n.uvd)('/album/:albumId', { params: { albumId: e.id } });
                                return r;
                            },
                            get isLiked() {
                                if (!(0, i._n)(e)) return !1;
                                let { library: r } = (0, i.Zn)(e);
                                return null == r ? void 0 : r.isAlbumLiked(e.id);
                            },
                            get pinId() {
                                return ''.concat(y._.ALBUM_ITEM).concat(e.id);
                            },
                            get seeds() {
                                return ['album:'.concat(e.id)];
                            },
                            get isAlbum() {
                                return e.type === _._.ALBUM || e.type === _._.SINGLE;
                            },
                            get isPodcast() {
                                return e.type === _._.PODCAST;
                            },
                            get isAudiobook() {
                                return e.type === _._.AUDIOBOOK;
                            },
                            get isFairyTale() {
                                return e.type === _._.FAIRY_TALE;
                            },
                            get isNonMusic() {
                                if (!(0, i._n)(e)) return !1;
                                return r.isPodcast || r.isAudiobook || r.isFairyTale;
                            },
                            get mainObjectType() {
                                if (r.isPodcast) return g.ky.Podcast;
                                if (r.isAudiobook || r.isFairyTale) return g.ky.Audiobook;
                                return g.ky.Album;
                            },
                            get isPinned() {
                                if (!(0, i._n)(e)) return !1;
                                let { pinsCollection: r } = (0, i.Zn)(e);
                                return r.isPinned(this.pinId);
                            },
                            get isLegalRejected() {
                                if (!(0, i._n)(e)) return !1;
                                return e.getIsLegalRejected(e.isAvailable);
                            },
                            get isUnsafeLegal() {
                                if (!(0, i._n)(e)) return !1;
                                return e.getIsUnsafeLegal(e.isAvailable);
                            },
                            get isAvailableOnlyForPlus() {
                                var t;
                                return !e.isAvailable && (e.availableForPremiumUsers || !!(null == (t = e.availableForOptions) ? void 0 : t.includes(p.E.BOOKMATE)));
                            },
                            get shouldShowBooksBadge() {
                                var s;
                                return !!(
                                    e.bookmateOptionRequired ||
                                    (!e.availableForPremiumUsers && (null == (s = e.availableForOptions) ? void 0 : s.includes(p.E.BOOKMATE)))
                                );
                            },
                            getDisclaimerEntityRef: (t) => ({ entityType: null != t ? t : r.isPodcast ? n.nPY.PODCAST : n.nPY.ALBUM, entityId: e.id }),
                        };
                        return r;
                    })
                    .actions((e) => ({
                        toggleLike: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { library: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized) {
                                let n = yield r.toggleAlbumLike({ entityId: e.id, userId: t.account.data.uid });
                                return (0, i._n)(e) && n === f.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n;
                            }
                        }),
                        togglePin: (0, i.L3)(function* () {
                            if (!(0, i._n)(e)) return;
                            let { pinsCollection: r, user: t } = (0, i.Zn)(e);
                            if (t.isAuthorized) return yield r.toggleAlbumPin({ id: e.id }, e.pinId);
                        }),
                        getKey: (r) => ''.concat(r, '_').concat(e.id),
                        updateFinished: (r) => {
                            e.listeningFinished = r;
                        },
                    }))
                    .named('BaseAlbum');
            var x = t(71020);
            let C = i.gK
                .compose(
                    i.gK.model('BaseUpcomingAlbum', {
                        id: i.gK.number,
                        isPresave: i.gK.boolean,
                        title: i.gK.maybe(i.gK.string),
                        type: i.gK.maybe(i.gK.enumeration(Object.values(_._))),
                        coverUri: i.gK.maybe(i.gK.string),
                        releaseDate: i.gK.maybe(i.gK.string),
                    }),
                    k.Ec,
                )
                .actions((e) => {
                    let r = {
                        presaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } = (0, i._$)(e);
                            try {
                                e.isPresave = !0;
                                let i = yield t.presaveAlbum(r);
                                return i === x.J.ERROR && (e.isPresave = !1), i;
                            } catch (r) {
                                return (e.isPresave = !1), n.error(r), x.J.ERROR;
                            }
                        }),
                        removePresaveAlbum: (0, i.L3)(function* (r) {
                            let { usersResource: t, modelActionsLogger: n } = (0, i._$)(e);
                            try {
                                e.isPresave = !1;
                                let i = yield t.removePresaveAlbum(r);
                                return i === x.J.ERROR && (e.isPresave = !0), i;
                            } catch (r) {
                                return (e.isPresave = !0), n.error(r), x.J.ERROR;
                            }
                        }),
                        toggleLike: (0, i.L3)(function* () {
                            let t;
                            if (!(0, i._n)(e)) return;
                            let { user: n } = (0, i.Zn)(e);
                            if (n.account.data.uid)
                                return (
                                    (t = e.isPresave
                                        ? yield r.removePresaveAlbum({ albumId: e.id, userId: n.account.data.uid })
                                        : yield r.presaveAlbum({ albumId: e.id, userId: n.account.data.uid, likeAfterRelease: !0 })),
                                    !(0, i._n)(e),
                                    t
                                );
                        }),
                        getKey: (r) => ''.concat(r, '_').concat(e.id),
                    };
                    return r;
                });
        },
        49423: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
            };
        },
        51672: (e, r, t) => {
            'use strict';
            t.d(r, { AlbumEntityNameConsumer: () => o, useAlbumEntityName: () => a });
            var i = t(61910),
                n = t(43426),
                s = t(15099),
                o = (function (e) {
                    return (e.PIN = 'pin'), e;
                })({});
            let a = (e, r) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return t({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return t({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === r) return t({ id: 'entity-names.book' });
                            return t({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return t({ id: 'entity-names.fairy-tale' });
                        default:
                            return t({ id: 'entity-names.album' });
                    }
                }, [e, t, r]);
            };
        },
        60423: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { _: () => i }),
                (function (e) {
                    (e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new');
                })(i || (i = {}));
        },
        61336: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        63449: (e, r, t) => {
            'use strict';
            t.d(r, { useMarkAlbumListenedClick: () => d });
            var i = t(54486),
                n = t(61910),
                s = t(43426),
                o = t(58623),
                a = t(83252),
                l = t(80585);
            let d = () => {
                let { user: e, album: r, fullscreenPlayer: t } = (0, a.Pjs)(),
                    { notify: d } = (0, a.lkh)(),
                    { formatMessage: m } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    var n, s;
                    if (!r) return;
                    let u = t.modal.isOpened ? a.uQT.FULLSCREEN_ERROR : a.uQT.ERROR;
                    return e.isAuthorized
                        ? (await r.setListeningFinishedStatus()) !== o.T.OK
                            ? void d((0, i.jsx)(l.hT, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: u })
                            : void (null == (s = r.meta) || s.updateFinished(!(null == (n = r.meta) ? void 0 : n.listeningFinished)))
                        : void d((0, i.jsx)(l.hT, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: u });
                }, [m, d, r, e.isAuthorized, t.modal.isOpened]);
            };
        },
        63708: (e) => {
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
        65134: (e, r, t) => {
            'use strict';
            t.d(r, { useNavigateToAlbumCPA: () => s });
            var i = t(8817),
                n = t(83252);
            let s = (e) => {
                let { albumId: r, albumUrl: t, callback: s } = e,
                    { getAlbumUrlWithSavedClid: o, checkIsCurrentAlbumPage: a } = (0, n.IQF)(),
                    l = (0, n.pqZ)();
                return (0, i.c)((e) => {
                    if (!r || !t) {
                        null == s || s(e);
                        return;
                    }
                    if (a(r)) {
                        null == e || e.preventDefault(), l(o(r, t));
                        return;
                    }
                    null == s || s(e);
                });
            };
        },
        71020: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { J: () => i }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(i || (i = {}));
        },
        75312: (e, r, t) => {
            'use strict';
            t.d(r, { SomethingWentWrong: () => P });
            var i = t(54486),
                n = t(50420),
                s = t(28303),
                o = t(61910),
                a = t(43426),
                l = t(47713),
                d = t(77881),
                m = t(5956),
                u = t(97800),
                c = t(83252),
                v = t(80585),
                h = t(63708),
                b = t.n(h);
            let P = (0, s.PA)((e) => {
                let { className: r, withBackwardControl: t = !0 } = e,
                    { formatMessage: s } = (0, a.A)(),
                    h = s({ id: 'error-messages.something-went-wrong' });
                (0, c.CgZ)(h);
                let { sendRefreshEvent: P } = (0, c.cYT)(),
                    g = (0, o.useCallback)(() => {
                        P(), (window.location.href = c.Zyd.main.href);
                    }, [P]),
                    { contentRef: _ } = (0, c.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, r),
                    children: [
                        t &&
                            (0, i.jsx)(v.Lh, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(b().navigation, { [b().navigation_desktop]: !_ }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(b().content, { [b().content_shrink]: !t }),
                            children: [
                                (0, i.jsx)(m.Icon, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.Heading, { className: (0, n.$)(b().title, b().important), variant: 'h3', size: 'xs', children: h }),
                                (0, i.jsxs)(u.Caption, {
                                    className: (0, n.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: g,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        76310: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
        },
        77163: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPresaveClick: () => u });
            var i = t(54486),
                n = t(63930),
                s = t(61910),
                o = t(43426),
                a = t(71020),
                l = t(83252),
                d = t(80585);
            let m = (e) => {
                    let { upcomingAlbum: r, closeToast: t } = e;
                    return (0, i.jsx)(d.Pv, { closeToast: t, albumTitle: r.title, coverUri: r.coverUri, entityTitle: r.title, isPresave: r.isPresave });
                },
                u = (e) => {
                    let { user: r } = (0, l.Pjs)(),
                        { notify: t } = (0, l.lkh)(),
                        [u, c] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, o.A)();
                    return (0, s.useCallback)(async () => {
                        if (!r.isAuthorized)
                            return void t((0, i.jsx)(d.hT, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.uQT.ERROR });
                        if (u) return;
                        let s = { ...(0, n.HO)(e), isPresave: !e.isPresave };
                        c(!0);
                        let o = await e.toggleLike();
                        c(!1),
                            o === a.J.OK
                                ? t((0, i.jsx)(m, { upcomingAlbum: s }), { containerId: l.uQT.INFO })
                                : t((0, i.jsx)(d.hT, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.uQT.ERROR });
                    }, [r.isAuthorized, u, e, t, v]);
                };
        },
        80506: (e, r, t) => {
            'use strict';
            t.d(r, { a: () => n });
            var i = t(87965);
            let n = () => {
                let e = null,
                    r = new i.cJ(!1),
                    t = [];
                return {
                    isLoaded: r,
                    init: (i) => {
                        var n, s;
                        if (void 0 !== (null == (n = window.Ya) ? void 0 : n.Metrika2) && !r.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...i })),
                                    (r.value = !0),
                                    (s = e),
                                    t.forEach((e) => {
                                        e(s);
                                    }),
                                    (t.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && i.logger.error(e);
                            }
                    },
                    count: function (r) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [i]: r })
                            : t.push((e) => {
                                  e.params({ [i]: r });
                              });
                    },
                    hit: (r) => {
                        e
                            ? e.hit(r)
                            : t.push((e) => {
                                  e.hit(r);
                              });
                    },
                    reachGoal: (r, i) => {
                        if (!e) return void t.push((e) => e.reachGoal(r, i));
                        e.reachGoal(r, i);
                    },
                };
            };
        },
        82644: (e, r, t) => {
            'use strict';
            t.d(r, { w: () => i.SomethingWentWrong });
            var i = t(75312);
        },
        89511: (e, r, t) => {
            'use strict';
            t.d(r, { b: () => d, L: () => i.useDownloadedTracks });
            var i = t(25751),
                n = t(93064),
                s = t(5693),
                o = t(21365),
                a = t(83252),
                l = t(26433);
            let d = n.gK
                .compose(n.gK.model('DownloadedTracks', { items: n.gK.maybeNull(n.gK.array(o.vj)), tracks: n.gK.maybeNull(n.gK.frozen()) }), l.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var r, t;
                        return (null != (t = null == (r = e.tracks) ? void 0 : r.reduce((e, r) => (r.durationMs ? e + r.durationMs : e), 0)) ? t : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: s.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, n.L3)(function* (r, t) {
                        let { modelActionsLogger: i } = (0, n._$)(e);
                        if (e.loadingState !== a.GuX.PENDING)
                            try {
                                e.loadingState = a.GuX.PENDING;
                                let i = yield r.getTracks(t);
                                (e.tracks = i), (e.items = (0, n.wg)(i.map((e) => (0, o.vU)(e)))), e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.RESOLVE);
                            } catch (r) {
                                i.error(r), e.loadingState !== a.GuX.IDLE && (e.loadingState = a.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = a.GuX.IDLE);
                    },
                }));
        },
        93729: (e, r, t) => {
            'use strict';
            var i;
            t.d(r, { E: () => i }),
                (function (e) {
                    (e.KIDS = 'kids'), (e.BOOKMATE = 'bookmate');
                })(i || (i = {}));
        },
        94490: (e, r, t) => {
            'use strict';
            t.d(r, { f: () => h });
            var i = t(54486),
                n = t(63930),
                s = t(61910),
                o = t(43426),
                a = t(77534),
                l = t(8817),
                d = t(83252),
                m = t(80585),
                u = t(28303),
                c = t(2608);
            let v = (0, u.PA)((e) => {
                    let { album: r, closeToast: t, withLink: n } = e,
                        s = (0, c.b)(r);
                    return (0, i.jsx)(m.OM, {
                        closeToast: t,
                        entityVariant: s,
                        coverUri: r.coverUri,
                        entityUrl: r.url,
                        collectionUrl: '/collection',
                        entityTitle: r.title,
                        isLiked: r.isLiked,
                        withLink: n,
                    });
                }),
                h = () => {
                    let { notify: e } = (0, d.lkh)(),
                        [r, t] = (0, s.useState)(!1),
                        { formatMessage: u } = (0, o.A)();
                    return (0, l.c)(async (s) => {
                        let { album: o, withLink: l = !0, withNotification: c = !0 } = s;
                        if (r) return;
                        let h = { ...(0, n.HO)(o), url: o.url, isLiked: !o.isLiked };
                        t(!0);
                        let b = await o.toggleLike();
                        t(!1),
                            c &&
                                (b === a.f.OK
                                    ? e((0, i.jsx)(v, { withLink: l, album: h }), { containerId: d.uQT.INFO })
                                    : e((0, i.jsx)(m.hT, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: d.uQT.ERROR }));
                    });
                };
        },
        96025: (e, r, t) => {
            'use strict';
            t.d(r, { useOnPromoLandingLikeClick: () => l });
            var i = t(97396),
                n = t(34132),
                s = t(8817),
                o = t(83252),
                a = t(94490);
            let l = (e) => {
                let {
                        user: r,
                        modals: { promoLandingBuySubscriptionModal: t, crackdownModal: l },
                        settings: { isMobile: d },
                        paywall: m,
                        albumCPA: { isPlusCPAEnabled: u },
                        promolanding: c,
                    } = (0, o.Pjs)(),
                    { isFreemium: v } = (0, o.XCI)(),
                    h = (0, a.f)(),
                    { pageAlbumId: b } = (0, o.THB)(),
                    P = (0, i.useSearchParams)();
                return (0, s.c)(async () => {
                    if (u({ pageAlbumId: b, albumId: null == e ? void 0 : e.id, isNonMusic: null == e ? void 0 : e.isNonMusic })) return void m.openModal();
                    if ((!v || (null == e ? void 0 : e.isLiked) || (d ? t.open() : l.open()), r.isAuthorized) && e) {
                        if (!e.isLiked) {
                            var i, s;
                            c.sendLikeFeedback({
                                reaction: n.g.LIKE,
                                yclid: null != (i = P.get(o.K3F.YCLID)) ? i : '',
                                campaignId: null != (s = P.get(o.K3F.UTM_CAMPAIGN)) ? s : '',
                            });
                        }
                        return h({ album: e, withLink: !1, withNotification: r.hasPlus });
                    }
                });
            };
        },
        96819: (e, r, t) => {
            'use strict';
            t.d(r, { useOnLikeClick: () => d });
            var i = t(54486),
                n = t(43426),
                s = t(8817),
                o = t(83252),
                a = t(80585),
                l = t(94490);
            let d = (e) => {
                let {
                        user: r,
                        paywall: t,
                        albumCPA: { isPlusCPAEnabled: d },
                    } = (0, o.Pjs)(),
                    { formatMessage: m } = (0, n.A)(),
                    { notify: u } = (0, o.lkh)(),
                    c = (0, l.f)(),
                    { pageAlbumId: v } = (0, o.THB)();
                return (0, s.c)(async () => {
                    if (e)
                        return d({ pageAlbumId: v, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void t.openModal()
                            : r.isAuthorized
                              ? c({ album: e })
                              : void u((0, i.jsx)(a.hT, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.uQT.ERROR });
                });
            };
        },
        97151: (e, r, t) => {
            'use strict';
            t.d(r, { XU: () => u });
            var i,
                n,
                s = t(41500),
                o = t(61910),
                a = t(43426);
            !(function (e) {
                (e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName');
            })(i || (i = {})),
                (function (e) {
                    (e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts');
                })(n || (n = {}));
            var l = function (e) {
                var r = (0, a.A)(),
                    t = e.value,
                    i = e.children,
                    n = (0, s.__rest)(e, ['value', 'children']);
                return i(r.formatNumberToParts(t, n));
            };
            function d(e) {
                var r = function (r) {
                    var t = (0, a.A)(),
                        i = r.value,
                        n = r.children,
                        o = (0, s.__rest)(r, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return n('formatDate' === e ? t.formatDateToParts(l, o) : t.formatTimeToParts(l, o));
                };
                return (r.displayName = n[e]), r;
            }
            function m(e) {
                var r = function (r) {
                    var t = (0, a.A)(),
                        i = r.value,
                        n = r.children,
                        l = (0, s.__rest)(r, ['value', 'children']),
                        d = t[e](i, l);
                    if ('function' == typeof n) return n(d);
                    var m = t.textComponent || o.Fragment;
                    return o.createElement(m, null, d);
                };
                return (r.displayName = i[e]), r;
            }
            (l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts');
            var u = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), d('formatDate'), d('formatTime');
        },
        97967: (e, r, t) => {
            Promise.resolve().then(t.bind(t, 91165)),
                Promise.resolve().then(t.bind(t, 98944)),
                Promise.resolve().then(t.bind(t, 58360)),
                Promise.resolve().then(t.bind(t, 14342)),
                Promise.resolve().then(t.bind(t, 62662)),
                Promise.resolve().then(t.bind(t, 6971)),
                Promise.resolve().then(t.bind(t, 22674)),
                Promise.resolve().then(t.bind(t, 51321)),
                Promise.resolve().then(t.bind(t, 97800)),
                Promise.resolve().then(t.bind(t, 42520)),
                Promise.resolve().then(t.bind(t, 19781)),
                Promise.resolve().then(t.bind(t, 22329)),
                Promise.resolve().then(t.bind(t, 73488)),
                Promise.resolve().then(t.bind(t, 88495)),
                Promise.resolve().then(t.bind(t, 5594)),
                Promise.resolve().then(t.bind(t, 53376)),
                Promise.resolve().then(t.bind(t, 39618)),
                Promise.resolve().then(t.bind(t, 30662)),
                Promise.resolve().then(t.bind(t, 31757)),
                Promise.resolve().then(t.bind(t, 51672)),
                Promise.resolve().then(t.bind(t, 63449)),
                Promise.resolve().then(t.bind(t, 65134)),
                Promise.resolve().then(t.bind(t, 96819)),
                Promise.resolve().then(t.bind(t, 38868)),
                Promise.resolve().then(t.bind(t, 77163)),
                Promise.resolve().then(t.bind(t, 96025)),
                Promise.resolve().then(t.bind(t, 51887)),
                Promise.resolve().then(t.bind(t, 25577)),
                Promise.resolve().then(t.bind(t, 65327)),
                Promise.resolve().then(t.bind(t, 3119)),
                Promise.resolve().then(t.bind(t, 74808)),
                Promise.resolve().then(t.bind(t, 92088)),
                Promise.resolve().then(t.bind(t, 83154)),
                Promise.resolve().then(t.bind(t, 14476)),
                Promise.resolve().then(t.bind(t, 88332)),
                Promise.resolve().then(t.bind(t, 16855)),
                Promise.resolve().then(t.bind(t, 28795)),
                Promise.resolve().then(t.bind(t, 93099)),
                Promise.resolve().then(t.bind(t, 15640)),
                Promise.resolve().then(t.bind(t, 82885)),
                Promise.resolve().then(t.bind(t, 99733)),
                Promise.resolve().then(t.bind(t, 18355)),
                Promise.resolve().then(t.bind(t, 42691)),
                Promise.resolve().then(t.bind(t, 37235)),
                Promise.resolve().then(t.bind(t, 3781)),
                Promise.resolve().then(t.bind(t, 33829)),
                Promise.resolve().then(t.bind(t, 39906)),
                Promise.resolve().then(t.bind(t, 50119)),
                Promise.resolve().then(t.bind(t, 21179)),
                Promise.resolve().then(t.bind(t, 17097)),
                Promise.resolve().then(t.bind(t, 50193)),
                Promise.resolve().then(t.bind(t, 83399)),
                Promise.resolve().then(t.bind(t, 11450)),
                Promise.resolve().then(t.bind(t, 62345)),
                Promise.resolve().then(t.bind(t, 37408)),
                Promise.resolve().then(t.bind(t, 48392)),
                Promise.resolve().then(t.bind(t, 42488)),
                Promise.resolve().then(t.bind(t, 33776)),
                Promise.resolve().then(t.bind(t, 5207)),
                Promise.resolve().then(t.bind(t, 48284)),
                Promise.resolve().then(t.bind(t, 69151)),
                Promise.resolve().then(t.bind(t, 8871)),
                Promise.resolve().then(t.bind(t, 86062)),
                Promise.resolve().then(t.bind(t, 47937)),
                Promise.resolve().then(t.bind(t, 76130)),
                Promise.resolve().then(t.bind(t, 76858)),
                Promise.resolve().then(t.bind(t, 54586)),
                Promise.resolve().then(t.bind(t, 12938)),
                Promise.resolve().then(t.bind(t, 62065)),
                Promise.resolve().then(t.bind(t, 39194)),
                Promise.resolve().then(t.bind(t, 97778)),
                Promise.resolve().then(t.bind(t, 23728)),
                Promise.resolve().then(t.bind(t, 9821)),
                Promise.resolve().then(t.bind(t, 13868)),
                Promise.resolve().then(t.bind(t, 43616)),
                Promise.resolve().then(t.bind(t, 92810)),
                Promise.resolve().then(t.bind(t, 79971)),
                Promise.resolve().then(t.bind(t, 61920)),
                Promise.resolve().then(t.bind(t, 93549)),
                Promise.resolve().then(t.bind(t, 4242)),
                Promise.resolve().then(t.bind(t, 79045)),
                Promise.resolve().then(t.bind(t, 72850)),
                Promise.resolve().then(t.bind(t, 26853)),
                Promise.resolve().then(t.bind(t, 85905)),
                Promise.resolve().then(t.bind(t, 9567)),
                Promise.resolve().then(t.bind(t, 8394)),
                Promise.resolve().then(t.bind(t, 3192)),
                Promise.resolve().then(t.bind(t, 7286)),
                Promise.resolve().then(t.bind(t, 60305)),
                Promise.resolve().then(t.bind(t, 47203)),
                Promise.resolve().then(t.bind(t, 34286)),
                Promise.resolve().then(t.bind(t, 224)),
                Promise.resolve().then(t.bind(t, 24449)),
                Promise.resolve().then(t.bind(t, 79893)),
                Promise.resolve().then(t.bind(t, 81789)),
                Promise.resolve().then(t.bind(t, 87466)),
                Promise.resolve().then(t.bind(t, 34028)),
                Promise.resolve().then(t.bind(t, 99564)),
                Promise.resolve().then(t.bind(t, 95348)),
                Promise.resolve().then(t.bind(t, 52347)),
                Promise.resolve().then(t.bind(t, 61015)),
                Promise.resolve().then(t.bind(t, 1771)),
                Promise.resolve().then(t.bind(t, 80043)),
                Promise.resolve().then(t.bind(t, 65729)),
                Promise.resolve().then(t.bind(t, 12235)),
                Promise.resolve().then(t.bind(t, 60793)),
                Promise.resolve().then(t.bind(t, 74565)),
                Promise.resolve().then(t.bind(t, 8941)),
                Promise.resolve().then(t.bind(t, 38433)),
                Promise.resolve().then(t.bind(t, 8732)),
                Promise.resolve().then(t.bind(t, 43369)),
                Promise.resolve().then(t.bind(t, 47564)),
                Promise.resolve().then(t.bind(t, 41017)),
                Promise.resolve().then(t.bind(t, 27252)),
                Promise.resolve().then(t.bind(t, 65286)),
                Promise.resolve().then(t.bind(t, 45198)),
                Promise.resolve().then(t.bind(t, 46814)),
                Promise.resolve().then(t.bind(t, 92508)),
                Promise.resolve().then(t.bind(t, 40126)),
                Promise.resolve().then(t.bind(t, 83726)),
                Promise.resolve().then(t.bind(t, 90410)),
                Promise.resolve().then(t.bind(t, 13246)),
                Promise.resolve().then(t.bind(t, 26040)),
                Promise.resolve().then(t.bind(t, 92446)),
                Promise.resolve().then(t.bind(t, 42593)),
                Promise.resolve().then(t.bind(t, 70570)),
                Promise.resolve().then(t.bind(t, 88416)),
                Promise.resolve().then(t.bind(t, 24174)),
                Promise.resolve().then(t.bind(t, 78458)),
                Promise.resolve().then(t.bind(t, 59457)),
                Promise.resolve().then(t.bind(t, 6690)),
                Promise.resolve().then(t.bind(t, 88370)),
                Promise.resolve().then(t.bind(t, 66904)),
                Promise.resolve().then(t.bind(t, 39937)),
                Promise.resolve().then(t.bind(t, 33019)),
                Promise.resolve().then(t.bind(t, 38808)),
                Promise.resolve().then(t.bind(t, 58094)),
                Promise.resolve().then(t.bind(t, 78009)),
                Promise.resolve().then(t.bind(t, 33427)),
                Promise.resolve().then(t.bind(t, 30878)),
                Promise.resolve().then(t.bind(t, 53115)),
                Promise.resolve().then(t.bind(t, 52398)),
                Promise.resolve().then(t.bind(t, 82327)),
                Promise.resolve().then(t.bind(t, 17012)),
                Promise.resolve().then(t.bind(t, 9275)),
                Promise.resolve().then(t.bind(t, 17658)),
                Promise.resolve().then(t.bind(t, 36578)),
                Promise.resolve().then(t.bind(t, 66989)),
                Promise.resolve().then(t.bind(t, 58863)),
                Promise.resolve().then(t.bind(t, 60899)),
                Promise.resolve().then(t.bind(t, 59437)),
                Promise.resolve().then(t.bind(t, 43367)),
                Promise.resolve().then(t.bind(t, 66446)),
                Promise.resolve().then(t.bind(t, 86840)),
                Promise.resolve().then(t.bind(t, 75181)),
                Promise.resolve().then(t.bind(t, 99538)),
                Promise.resolve().then(t.bind(t, 45252)),
                Promise.resolve().then(t.bind(t, 59226)),
                Promise.resolve().then(t.bind(t, 75961)),
                Promise.resolve().then(t.bind(t, 33964)),
                Promise.resolve().then(t.bind(t, 33967)),
                Promise.resolve().then(t.bind(t, 64410)),
                Promise.resolve().then(t.bind(t, 91350)),
                Promise.resolve().then(t.bind(t, 4500)),
                Promise.resolve().then(t.bind(t, 55846)),
                Promise.resolve().then(t.bind(t, 65689)),
                Promise.resolve().then(t.bind(t, 99386)),
                Promise.resolve().then(t.bind(t, 5222)),
                Promise.resolve().then(t.bind(t, 60440)),
                Promise.resolve().then(t.bind(t, 37271)),
                Promise.resolve().then(t.bind(t, 66688)),
                Promise.resolve().then(t.bind(t, 76472)),
                Promise.resolve().then(t.bind(t, 41682)),
                Promise.resolve().then(t.bind(t, 77666)),
                Promise.resolve().then(t.bind(t, 8765)),
                Promise.resolve().then(t.bind(t, 48670)),
                Promise.resolve().then(t.bind(t, 22096)),
                Promise.resolve().then(t.bind(t, 33655)),
                Promise.resolve().then(t.bind(t, 27754)),
                Promise.resolve().then(t.bind(t, 47347)),
                Promise.resolve().then(t.bind(t, 45591)),
                Promise.resolve().then(t.bind(t, 52862)),
                Promise.resolve().then(t.bind(t, 79326)),
                Promise.resolve().then(t.bind(t, 73922)),
                Promise.resolve().then(t.bind(t, 10790)),
                Promise.resolve().then(t.bind(t, 78684)),
                Promise.resolve().then(t.bind(t, 76877)),
                Promise.resolve().then(t.bind(t, 61176)),
                Promise.resolve().then(t.bind(t, 62108)),
                Promise.resolve().then(t.bind(t, 75053)),
                Promise.resolve().then(t.bind(t, 23035)),
                Promise.resolve().then(t.bind(t, 82315)),
                Promise.resolve().then(t.bind(t, 60673)),
                Promise.resolve().then(t.bind(t, 5048)),
                Promise.resolve().then(t.bind(t, 50215)),
                Promise.resolve().then(t.bind(t, 78308)),
                Promise.resolve().then(t.bind(t, 10084)),
                Promise.resolve().then(t.bind(t, 58681)),
                Promise.resolve().then(t.bind(t, 18658)),
                Promise.resolve().then(t.bind(t, 6323)),
                Promise.resolve().then(t.bind(t, 78817)),
                Promise.resolve().then(t.bind(t, 7230)),
                Promise.resolve().then(t.bind(t, 38378)),
                Promise.resolve().then(t.bind(t, 35609)),
                Promise.resolve().then(t.bind(t, 18606)),
                Promise.resolve().then(t.bind(t, 68014)),
                Promise.resolve().then(t.bind(t, 12126)),
                Promise.resolve().then(t.bind(t, 52742)),
                Promise.resolve().then(t.bind(t, 68098)),
                Promise.resolve().then(t.bind(t, 89190)),
                Promise.resolve().then(t.bind(t, 3270)),
                Promise.resolve().then(t.bind(t, 1220)),
                Promise.resolve().then(t.bind(t, 96584)),
                Promise.resolve().then(t.bind(t, 54598)),
                Promise.resolve().then(t.bind(t, 14196)),
                Promise.resolve().then(t.bind(t, 20576)),
                Promise.resolve().then(t.bind(t, 73976)),
                Promise.resolve().then(t.bind(t, 35203)),
                Promise.resolve().then(t.bind(t, 39450)),
                Promise.resolve().then(t.bind(t, 77607)),
                Promise.resolve().then(t.bind(t, 7430)),
                Promise.resolve().then(t.bind(t, 24786)),
                Promise.resolve().then(t.bind(t, 24036)),
                Promise.resolve().then(t.bind(t, 34932)),
                Promise.resolve().then(t.bind(t, 56204)),
                Promise.resolve().then(t.bind(t, 75450)),
                Promise.resolve().then(t.bind(t, 60608)),
                Promise.resolve().then(t.bind(t, 33648)),
                Promise.resolve().then(t.bind(t, 43548)),
                Promise.resolve().then(t.bind(t, 69672)),
                Promise.resolve().then(t.bind(t, 50711)),
                Promise.resolve().then(t.bind(t, 5185)),
                Promise.resolve().then(t.bind(t, 90555)),
                Promise.resolve().then(t.bind(t, 5602)),
                Promise.resolve().then(t.bind(t, 12390)),
                Promise.resolve().then(t.bind(t, 58376)),
                Promise.resolve().then(t.bind(t, 24491)),
                Promise.resolve().then(t.bind(t, 61993)),
                Promise.resolve().then(t.bind(t, 38644)),
                Promise.resolve().then(t.bind(t, 93668)),
                Promise.resolve().then(t.bind(t, 85949)),
                Promise.resolve().then(t.bind(t, 17519)),
                Promise.resolve().then(t.bind(t, 62010)),
                Promise.resolve().then(t.bind(t, 16372)),
                Promise.resolve().then(t.bind(t, 64434)),
                Promise.resolve().then(t.bind(t, 33158)),
                Promise.resolve().then(t.bind(t, 27314)),
                Promise.resolve().then(t.bind(t, 93206)),
                Promise.resolve().then(t.bind(t, 37226)),
                Promise.resolve().then(t.bind(t, 13811)),
                Promise.resolve().then(t.bind(t, 45645)),
                Promise.resolve().then(t.bind(t, 24126)),
                Promise.resolve().then(t.bind(t, 20406)),
                Promise.resolve().then(t.bind(t, 21940)),
                Promise.resolve().then(t.bind(t, 26086)),
                Promise.resolve().then(t.bind(t, 96838)),
                Promise.resolve().then(t.bind(t, 10358)),
                Promise.resolve().then(t.bind(t, 23143)),
                Promise.resolve().then(t.bind(t, 51828)),
                Promise.resolve().then(t.bind(t, 51725)),
                Promise.resolve().then(t.bind(t, 23834)),
                Promise.resolve().then(t.bind(t, 88343)),
                Promise.resolve().then(t.bind(t, 24624)),
                Promise.resolve().then(t.bind(t, 25751)),
                Promise.resolve().then(t.bind(t, 65034));
        },
    },
    (e) => {
        e.O(
            0,
            [
                9834, 6041, 5355, 1023, 4354, 1621, 7999, 2398, 2036, 1776, 1311, 7764, 6706, 7724, 5148, 3005, 3916, 5973, 6266, 722, 3252, 585, 6433, 3286, 6231, 1365,
                5284, 9320, 8387, 2460, 3205, 5843, 3290, 7358,
            ],
            () => e((e.s = 97967)),
        ),
            (_N_E = e.O());
    },
]);
