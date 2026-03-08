(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8143, 9618],
    {
        9567: (e, s, i) => {
            'use strict';
            i.d(s, { MyMusicDownloadedTracksPage: () => A });
            var n = i(54486),
                o = i(50420),
                r = i(28303),
                t = i(61910),
                l = i(43426),
                d = i(31500),
                m = i(63585),
                h = i(8817),
                v = i(89511),
                a = i(82644),
                P = i(33276),
                b = i(21365),
                c = i(83252),
                u = i(80585),
                _ = i(76310),
                x = i.n(_),
                y = i(47713),
                k = i(5956),
                p = i(97800),
                g = i(14114),
                M = i.n(g);
            let D = (0, r.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: s },
                    } = (0, c.Pjs)(),
                    i = (0, n.jsx)(p.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    o = [];
                (null == (e = s.tracks) ? void 0 : e.length) &&
                    o.push(
                        (0, n.jsx)(p.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, n.jsx)(y.A, { id: 'entity-names.tracks-count', values: { value: s.tracks.length } }),
                        }),
                    );
                let r = Math.floor(s.tracksDurationInMinutes / 60),
                    l = Math.floor(s.tracksDurationInMinutes % 60);
                return (
                    (r || l) &&
                        (o.push(i),
                        o.push(
                            (0, n.jsx)(p.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, n.jsx)(y.A, { id: 'time.hours-minutes', values: { hours: r, minutes: l } }),
                            }),
                        )),
                    (0, n.jsx)('div', { className: M().root, children: o.map((e, s) => (0, t.cloneElement)(e, { key: s })) })
                );
            });
            var T = i(12962),
                w = i.n(T);
            let C = (0, r.PA)(() => {
                let { isScrolling: e } = (0, t.useContext)(u.B9),
                    s = (0, c.W6M)(),
                    {
                        myMusic: { downloadedTracks: i },
                        settings: { isMobile: o },
                        slam: r,
                    } = (0, c.Pjs)(),
                    { from: l } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                    d = (0, c.PT7)(),
                    v = (0, c.brA)(),
                    { isPlaying: a, togglePlay: P } = (0, c.Dx4)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: i.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    b = (0, h.c)(() => {
                        d() || (P(), v(!a));
                    });
                return (0, n.jsx)('header', {
                    className: w().root,
                    'aria-hidden': e,
                    children: (0, n.jsxs)('div', {
                        className: w().container,
                        children: [
                            !r.isOfflineModeEnabled &&
                                s.canBack &&
                                (0, n.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: s.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, n.jsxs)('div', {
                                className: w().titleContainer,
                                children: [
                                    (0, n.jsx)(p.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: w().title,
                                        children: (0, n.jsx)(y.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, n.jsx)(D, {}),
                                ],
                            }),
                            !i.isEmpty &&
                                (0, n.jsx)(u.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: a,
                                    onClick: b,
                                    className: w().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !o && (0, n.jsx)(y.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var j = i(61336),
                f = i.n(j);
            let S = (0, r.PA)(() =>
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(C, {}),
                            (0, n.jsxs)('div', {
                                className: f().root,
                                children: [
                                    (0, n.jsx)(k.Icon, { className: f().icon, size: 'l', variant: 'download' }),
                                    (0, n.jsx)(p.Heading, {
                                        className: f().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, n.jsx)(y.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, n.jsx)(p.Caption, {
                                        className: f().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, n.jsx)(y.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                N = (0, r.PA)(() => {
                    let { isScrolling: e } = (0, t.useContext)(u.B9),
                        s = (0, c.W6M)(),
                        {
                            myMusic: { downloadedTracks: i },
                            settings: { isMobile: r },
                            slam: l,
                        } = (0, c.Pjs)(),
                        { from: d } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        v = (0, c.brA)(),
                        a = (0, c.PT7)(),
                        { isPlaying: P, togglePlay: b } = (0, c.Dx4)({
                            playContextParams: {
                                contextData: { type: m.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: d },
                                entitiesData: i.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        _ = (0, h.c)(() => {
                            a() || (b(), v(!P));
                        });
                    return (0, n.jsx)(u.Y9, {
                        variant: u.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, n.jsxs)('div', {
                            className: w().container,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    s.canBack &&
                                    (0, n.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: s.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, n.jsx)(p.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: w().stickyTitle,
                                    children: (0, n.jsx)(y.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !i.isEmpty &&
                                    (0, n.jsx)(u.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: P,
                                        onClick: _,
                                        className: (0, o.$)(w().playButton, { [w().stickyPlayButton]: !r }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !r && (0, n.jsx)(y.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, o.$)(w().stickyHeader, w().important),
                        staticClassName: (0, o.$)(w().staticHeader, w().important),
                    });
                }),
                A = (0, r.PA)(() => {
                    var e;
                    let s = (0, c.jRO)(),
                        { contentScrollRef: i, setContentScrollRef: r } = (0, c.gKY)(),
                        { formatMessage: _ } = (0, l.A)(),
                        {
                            myMusic: { downloadedTracks: y },
                        } = (0, c.Pjs)(),
                        { from: k } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        p = (0, c.wZZ)(),
                        g = (0, h.c)(() => {
                            s.tracksController && y.getData(s.tracksController);
                        });
                    (0, v.L)(g),
                        (0, t.useEffect)(() => {
                            y.isNeededToLoad && g();
                        }, [y.isNeededToLoad, g]),
                        (0, t.useEffect)(
                            () => () => {
                                y.reset();
                            },
                            [y],
                        ),
                        (0, c.Jzs)(y.isResolved);
                    let M = (0, t.useMemo)(
                        () => ({ Header: () => (0, n.jsx)(C, {}), Footer: () => (0, n.jsx)(u.A, { children: (0, n.jsx)(u.wi, { className: x().footer }) }) }),
                        [],
                    );
                    if (y.loadingState === c.GuX.REJECT) return (0, n.jsx)(a.w, {});
                    if (y.isEmpty) return (0, n.jsx)(S, {});
                    let D = (null == (e = y.items) ? void 0 : e.length) || 10;
                    return (0, n.jsx)(c.nVz, {
                        pageId: c._Q$.DOWNLOADS_TRACKS,
                        children: (0, n.jsx)(P.hO, {
                            scrollElement: i,
                            children: (0, n.jsxs)('div', {
                                className: x().pageContainer,
                                children: [
                                    (0, n.jsx)(N, {}),
                                    (0, n.jsx)(u.$$, {
                                        context: { listAriaLabel: _({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, o.$)(x().root, x().important),
                                        listClassName: x().content,
                                        customComponents: M,
                                        totalCount: D,
                                        itemContentCallback: (e) => {
                                            var s;
                                            let i = null == (s = y.items) ? void 0 : s[e];
                                            return i
                                                ? (0, n.jsx)(
                                                      b.Kt,
                                                      {
                                                          track: i,
                                                          playContextParams: p(i.id, {
                                                              contextData: { type: m.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: k },
                                                              entitiesData: y.entitiesData,
                                                              queueParams: { index: e, entityId: i.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      i.id,
                                                  )
                                                : (0, n.jsx)(u.DS, { isActive: !0, className: x().trackShimmer, variant: c.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: D,
                                        handleRef: r,
                                        shouldTriggerRangeChangedOn: [D],
                                        testId: d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
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
        25751: (e, s, i) => {
            'use strict';
            i.d(s, { useDownloadedTracks: () => d });
            var n = i(61910),
                o = i(12460),
                r = i(8817),
                t = i(83252);
            let l = [o.DT.IDLE, o.DT.DOWNLOADED],
                d = (e) => {
                    var s;
                    let i = (0, t.jRO)(),
                        d = (0, r.c)((s) => {
                            let { state: i } = s;
                            l.includes(i.loadingState) && e();
                        });
                    (0, n.useEffect)(() => {
                        var s, n;
                        return (
                            null == (s = i.store) || s.tracks.events.on(o.je.STATE_CHANGED, e),
                            null == (n = i.store) || n.tracks.events.on(o.je.ENTITY_CHANGED, d),
                            () => {
                                var s, n;
                                null == (s = i.store) || s.tracks.events.off(o.je.STATE_CHANGED, e), null == (n = i.store) || n.tracks.events.off(o.je.ENTITY_CHANGED, d);
                            }
                        );
                    }, [e, d, null == (s = i.store) ? void 0 : s.tracks.events]);
                };
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
        39618: (e, s, i) => {
            'use strict';
            i.r(s), i.d(s, { default: () => a });
            var n = i(54486),
                o = i(50420),
                r = i(61910),
                t = i(62443),
                l = i(78420),
                d = i(83252),
                m = i(29406),
                h = i.n(m),
                v = i(49124);
            let a = (e) => {
                let { children: s } = e;
                let { state: i, toggleTrue: m } = (0, t.e)(!1),
                    { state: a, toggleTrue: P } = (0, t.e)(!1),
                    { getThemeFromStorage: b } = (0, d.QDo)(new l.si()),
                    c = (0, r.useMemo)(() => {
                        var e;
                        return null != (e = b()) ? e : (0, d.VDQ)();
                    }, [b]),
                    u = (0, r.useCallback)(
                        (e) => {
                            let s = v.env.ASSET_PREFIX || '';
                            return ''.concat(s, '/media/splash_screen/splash_screen_').concat(c, '.').concat(e);
                        },
                        [c],
                    ),
                    _ = (0, r.useMemo)(() => ({ isVisible: !i }), [i]);
                return (0, n.jsxs)(d.nlO.Provider, {
                    value: _,
                    children: [
                        !i &&
                            (0, n.jsx)('div', {
                                className: (0, o.$)(h().root, h()['root_'.concat(c)], { [h().root_hidden]: a }),
                                onAnimationEnd: m,
                                children: (0, n.jsxs)('video', {
                                    className: h().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: P,
                                    onError: m,
                                    children: [(0, n.jsx)('source', { src: u('webm'), type: 'video/webm' }), (0, n.jsx)('source', { src: u('mp4'), type: 'video/mp4' })],
                                }),
                            }),
                        s,
                    ],
                });
            };
        },
        61336: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        73489: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 91165)),
                Promise.resolve().then(i.bind(i, 98944)),
                Promise.resolve().then(i.bind(i, 81203)),
                Promise.resolve().then(i.bind(i, 5956)),
                Promise.resolve().then(i.bind(i, 58360)),
                Promise.resolve().then(i.bind(i, 14342)),
                Promise.resolve().then(i.bind(i, 62662)),
                Promise.resolve().then(i.bind(i, 6971)),
                Promise.resolve().then(i.bind(i, 22674)),
                Promise.resolve().then(i.bind(i, 51321)),
                Promise.resolve().then(i.bind(i, 97800)),
                Promise.resolve().then(i.bind(i, 42520)),
                Promise.resolve().then(i.bind(i, 19781)),
                Promise.resolve().then(i.bind(i, 22329)),
                Promise.resolve().then(i.bind(i, 73488)),
                Promise.resolve().then(i.bind(i, 88495)),
                Promise.resolve().then(i.bind(i, 5594)),
                Promise.resolve().then(i.bind(i, 53376)),
                Promise.resolve().then(i.bind(i, 39618)),
                Promise.resolve().then(i.bind(i, 30662)),
                Promise.resolve().then(i.bind(i, 31757)),
                Promise.resolve().then(i.bind(i, 51672)),
                Promise.resolve().then(i.bind(i, 63449)),
                Promise.resolve().then(i.bind(i, 65134)),
                Promise.resolve().then(i.bind(i, 96819)),
                Promise.resolve().then(i.bind(i, 38868)),
                Promise.resolve().then(i.bind(i, 77163)),
                Promise.resolve().then(i.bind(i, 96025)),
                Promise.resolve().then(i.bind(i, 51887)),
                Promise.resolve().then(i.bind(i, 25577)),
                Promise.resolve().then(i.bind(i, 65327)),
                Promise.resolve().then(i.bind(i, 3119)),
                Promise.resolve().then(i.bind(i, 74808)),
                Promise.resolve().then(i.bind(i, 92088)),
                Promise.resolve().then(i.bind(i, 83154)),
                Promise.resolve().then(i.bind(i, 14476)),
                Promise.resolve().then(i.bind(i, 88332)),
                Promise.resolve().then(i.bind(i, 16855)),
                Promise.resolve().then(i.bind(i, 28795)),
                Promise.resolve().then(i.bind(i, 64782)),
                Promise.resolve().then(i.bind(i, 59839)),
                Promise.resolve().then(i.bind(i, 60339)),
                Promise.resolve().then(i.bind(i, 58435)),
                Promise.resolve().then(i.bind(i, 60272)),
                Promise.resolve().then(i.bind(i, 39206)),
                Promise.resolve().then(i.bind(i, 42061)),
                Promise.resolve().then(i.bind(i, 31820)),
                Promise.resolve().then(i.bind(i, 10351)),
                Promise.resolve().then(i.t.bind(i, 46121, 23)),
                Promise.resolve().then(i.t.bind(i, 37863, 23)),
                Promise.resolve().then(i.t.bind(i, 61484, 23)),
                Promise.resolve().then(i.bind(i, 87184)),
                Promise.resolve().then(i.bind(i, 32949)),
                Promise.resolve().then(i.bind(i, 86778)),
                Promise.resolve().then(i.bind(i, 27654)),
                Promise.resolve().then(i.bind(i, 83952)),
                Promise.resolve().then(i.t.bind(i, 20065, 23)),
                Promise.resolve().then(i.bind(i, 81217)),
                Promise.resolve().then(i.bind(i, 56689)),
                Promise.resolve().then(i.bind(i, 73219)),
                Promise.resolve().then(i.bind(i, 25045)),
                Promise.resolve().then(i.bind(i, 29468)),
                Promise.resolve().then(i.bind(i, 69573)),
                Promise.resolve().then(i.bind(i, 64409)),
                Promise.resolve().then(i.bind(i, 27574)),
                Promise.resolve().then(i.bind(i, 15091)),
                Promise.resolve().then(i.bind(i, 93099)),
                Promise.resolve().then(i.bind(i, 15640)),
                Promise.resolve().then(i.bind(i, 82885)),
                Promise.resolve().then(i.bind(i, 99733)),
                Promise.resolve().then(i.bind(i, 18355)),
                Promise.resolve().then(i.bind(i, 42691)),
                Promise.resolve().then(i.bind(i, 37235)),
                Promise.resolve().then(i.bind(i, 3781)),
                Promise.resolve().then(i.bind(i, 33829)),
                Promise.resolve().then(i.bind(i, 39906)),
                Promise.resolve().then(i.bind(i, 50119)),
                Promise.resolve().then(i.bind(i, 21179)),
                Promise.resolve().then(i.bind(i, 17097)),
                Promise.resolve().then(i.bind(i, 50193)),
                Promise.resolve().then(i.bind(i, 83399)),
                Promise.resolve().then(i.bind(i, 11450)),
                Promise.resolve().then(i.bind(i, 62345)),
                Promise.resolve().then(i.bind(i, 37408)),
                Promise.resolve().then(i.bind(i, 48392)),
                Promise.resolve().then(i.bind(i, 42488)),
                Promise.resolve().then(i.bind(i, 33776)),
                Promise.resolve().then(i.bind(i, 5207)),
                Promise.resolve().then(i.bind(i, 20875)),
                Promise.resolve().then(i.bind(i, 5065)),
                Promise.resolve().then(i.bind(i, 29443)),
                Promise.resolve().then(i.bind(i, 29717)),
                Promise.resolve().then(i.bind(i, 85693)),
                Promise.resolve().then(i.bind(i, 55639)),
                Promise.resolve().then(i.bind(i, 69536)),
                Promise.resolve().then(i.bind(i, 45721)),
                Promise.resolve().then(i.bind(i, 80183)),
                Promise.resolve().then(i.bind(i, 2438)),
                Promise.resolve().then(i.bind(i, 46540)),
                Promise.resolve().then(i.bind(i, 26923)),
                Promise.resolve().then(i.bind(i, 23504)),
                Promise.resolve().then(i.bind(i, 99182)),
                Promise.resolve().then(i.bind(i, 83580)),
                Promise.resolve().then(i.bind(i, 19633)),
                Promise.resolve().then(i.bind(i, 84883)),
                Promise.resolve().then(i.bind(i, 57923)),
                Promise.resolve().then(i.bind(i, 22017)),
                Promise.resolve().then(i.bind(i, 50795)),
                Promise.resolve().then(i.bind(i, 32159)),
                Promise.resolve().then(i.bind(i, 70901)),
                Promise.resolve().then(i.bind(i, 18139)),
                Promise.resolve().then(i.bind(i, 31135)),
                Promise.resolve().then(i.bind(i, 74627)),
                Promise.resolve().then(i.t.bind(i, 3809, 23)),
                Promise.resolve().then(i.bind(i, 30623)),
                Promise.resolve().then(i.bind(i, 5631)),
                Promise.resolve().then(i.bind(i, 9283)),
                Promise.resolve().then(i.bind(i, 72467)),
                Promise.resolve().then(i.bind(i, 66894)),
                Promise.resolve().then(i.bind(i, 45318)),
                Promise.resolve().then(i.bind(i, 3283)),
                Promise.resolve().then(i.bind(i, 38246)),
                Promise.resolve().then(i.bind(i, 84096)),
                Promise.resolve().then(i.bind(i, 29476)),
                Promise.resolve().then(i.bind(i, 23897)),
                Promise.resolve().then(i.bind(i, 94953)),
                Promise.resolve().then(i.bind(i, 62915)),
                Promise.resolve().then(i.bind(i, 61569)),
                Promise.resolve().then(i.bind(i, 16045)),
                Promise.resolve().then(i.bind(i, 93011)),
                Promise.resolve().then(i.bind(i, 77091)),
                Promise.resolve().then(i.bind(i, 46695)),
                Promise.resolve().then(i.bind(i, 40188)),
                Promise.resolve().then(i.bind(i, 2405)),
                Promise.resolve().then(i.bind(i, 48284)),
                Promise.resolve().then(i.bind(i, 69151)),
                Promise.resolve().then(i.bind(i, 8871)),
                Promise.resolve().then(i.bind(i, 86062)),
                Promise.resolve().then(i.bind(i, 47937)),
                Promise.resolve().then(i.bind(i, 76130)),
                Promise.resolve().then(i.bind(i, 76858)),
                Promise.resolve().then(i.bind(i, 54586)),
                Promise.resolve().then(i.bind(i, 12938)),
                Promise.resolve().then(i.bind(i, 62065)),
                Promise.resolve().then(i.bind(i, 39194)),
                Promise.resolve().then(i.bind(i, 97778)),
                Promise.resolve().then(i.bind(i, 23728)),
                Promise.resolve().then(i.bind(i, 9821)),
                Promise.resolve().then(i.bind(i, 13868)),
                Promise.resolve().then(i.bind(i, 43616)),
                Promise.resolve().then(i.bind(i, 92810)),
                Promise.resolve().then(i.bind(i, 79971)),
                Promise.resolve().then(i.bind(i, 61920)),
                Promise.resolve().then(i.bind(i, 93549)),
                Promise.resolve().then(i.bind(i, 4242)),
                Promise.resolve().then(i.bind(i, 79045)),
                Promise.resolve().then(i.bind(i, 72850)),
                Promise.resolve().then(i.bind(i, 26853)),
                Promise.resolve().then(i.bind(i, 85905)),
                Promise.resolve().then(i.bind(i, 38155)),
                Promise.resolve().then(i.bind(i, 2313)),
                Promise.resolve().then(i.bind(i, 66875)),
                Promise.resolve().then(i.bind(i, 53793)),
                Promise.resolve().then(i.bind(i, 90392)),
                Promise.resolve().then(i.bind(i, 50492)),
                Promise.resolve().then(i.bind(i, 94162)),
                Promise.resolve().then(i.bind(i, 65696)),
                Promise.resolve().then(i.bind(i, 72230)),
                Promise.resolve().then(i.bind(i, 77770)),
                Promise.resolve().then(i.bind(i, 97296)),
                Promise.resolve().then(i.bind(i, 20139)),
                Promise.resolve().then(i.bind(i, 19796)),
                Promise.resolve().then(i.bind(i, 46026)),
                Promise.resolve().then(i.bind(i, 24159)),
                Promise.resolve().then(i.bind(i, 85872)),
                Promise.resolve().then(i.bind(i, 25605)),
                Promise.resolve().then(i.bind(i, 23430)),
                Promise.resolve().then(i.bind(i, 57202)),
                Promise.resolve().then(i.bind(i, 9567)),
                Promise.resolve().then(i.bind(i, 8394)),
                Promise.resolve().then(i.bind(i, 3192)),
                Promise.resolve().then(i.bind(i, 7286)),
                Promise.resolve().then(i.bind(i, 60305)),
                Promise.resolve().then(i.bind(i, 47203)),
                Promise.resolve().then(i.bind(i, 34286)),
                Promise.resolve().then(i.bind(i, 224)),
                Promise.resolve().then(i.bind(i, 24449)),
                Promise.resolve().then(i.bind(i, 79893)),
                Promise.resolve().then(i.bind(i, 81789)),
                Promise.resolve().then(i.bind(i, 87466)),
                Promise.resolve().then(i.bind(i, 34028)),
                Promise.resolve().then(i.bind(i, 99564)),
                Promise.resolve().then(i.bind(i, 95348)),
                Promise.resolve().then(i.bind(i, 52347)),
                Promise.resolve().then(i.bind(i, 61015)),
                Promise.resolve().then(i.bind(i, 1771)),
                Promise.resolve().then(i.bind(i, 80043)),
                Promise.resolve().then(i.bind(i, 65729)),
                Promise.resolve().then(i.bind(i, 12235)),
                Promise.resolve().then(i.bind(i, 60793)),
                Promise.resolve().then(i.bind(i, 74565)),
                Promise.resolve().then(i.bind(i, 8941)),
                Promise.resolve().then(i.bind(i, 38433)),
                Promise.resolve().then(i.bind(i, 8732)),
                Promise.resolve().then(i.bind(i, 43369)),
                Promise.resolve().then(i.bind(i, 47564)),
                Promise.resolve().then(i.bind(i, 41017)),
                Promise.resolve().then(i.bind(i, 27252)),
                Promise.resolve().then(i.bind(i, 65286)),
                Promise.resolve().then(i.bind(i, 45198)),
                Promise.resolve().then(i.bind(i, 46814)),
                Promise.resolve().then(i.bind(i, 92508)),
                Promise.resolve().then(i.bind(i, 40126)),
                Promise.resolve().then(i.bind(i, 83726)),
                Promise.resolve().then(i.bind(i, 90410)),
                Promise.resolve().then(i.bind(i, 13246)),
                Promise.resolve().then(i.bind(i, 26040)),
                Promise.resolve().then(i.bind(i, 92446)),
                Promise.resolve().then(i.bind(i, 42593)),
                Promise.resolve().then(i.bind(i, 70570)),
                Promise.resolve().then(i.bind(i, 88416)),
                Promise.resolve().then(i.bind(i, 24174)),
                Promise.resolve().then(i.bind(i, 78458)),
                Promise.resolve().then(i.bind(i, 59457)),
                Promise.resolve().then(i.bind(i, 6690)),
                Promise.resolve().then(i.bind(i, 88370)),
                Promise.resolve().then(i.bind(i, 66904)),
                Promise.resolve().then(i.bind(i, 39937)),
                Promise.resolve().then(i.bind(i, 33019)),
                Promise.resolve().then(i.bind(i, 38808)),
                Promise.resolve().then(i.bind(i, 58094)),
                Promise.resolve().then(i.bind(i, 78009)),
                Promise.resolve().then(i.bind(i, 33427)),
                Promise.resolve().then(i.bind(i, 30878)),
                Promise.resolve().then(i.bind(i, 53115)),
                Promise.resolve().then(i.bind(i, 52398)),
                Promise.resolve().then(i.bind(i, 82327)),
                Promise.resolve().then(i.bind(i, 17012)),
                Promise.resolve().then(i.bind(i, 9275)),
                Promise.resolve().then(i.bind(i, 17658)),
                Promise.resolve().then(i.bind(i, 36578)),
                Promise.resolve().then(i.bind(i, 66989)),
                Promise.resolve().then(i.bind(i, 58863)),
                Promise.resolve().then(i.bind(i, 60899)),
                Promise.resolve().then(i.bind(i, 59437)),
                Promise.resolve().then(i.bind(i, 43367)),
                Promise.resolve().then(i.bind(i, 66446)),
                Promise.resolve().then(i.bind(i, 86840)),
                Promise.resolve().then(i.bind(i, 75181)),
                Promise.resolve().then(i.bind(i, 99538)),
                Promise.resolve().then(i.bind(i, 45252)),
                Promise.resolve().then(i.bind(i, 59226)),
                Promise.resolve().then(i.bind(i, 75961)),
                Promise.resolve().then(i.bind(i, 33964)),
                Promise.resolve().then(i.bind(i, 33967)),
                Promise.resolve().then(i.bind(i, 64410)),
                Promise.resolve().then(i.bind(i, 91350)),
                Promise.resolve().then(i.bind(i, 4500)),
                Promise.resolve().then(i.bind(i, 55846)),
                Promise.resolve().then(i.bind(i, 65689)),
                Promise.resolve().then(i.bind(i, 99386)),
                Promise.resolve().then(i.bind(i, 5222)),
                Promise.resolve().then(i.bind(i, 60440)),
                Promise.resolve().then(i.bind(i, 37271)),
                Promise.resolve().then(i.bind(i, 66688)),
                Promise.resolve().then(i.bind(i, 76472)),
                Promise.resolve().then(i.bind(i, 41682)),
                Promise.resolve().then(i.bind(i, 77666)),
                Promise.resolve().then(i.bind(i, 8765)),
                Promise.resolve().then(i.bind(i, 48670)),
                Promise.resolve().then(i.bind(i, 22096)),
                Promise.resolve().then(i.bind(i, 33655)),
                Promise.resolve().then(i.bind(i, 27754)),
                Promise.resolve().then(i.bind(i, 47347)),
                Promise.resolve().then(i.bind(i, 45591)),
                Promise.resolve().then(i.bind(i, 52862)),
                Promise.resolve().then(i.bind(i, 79326)),
                Promise.resolve().then(i.bind(i, 73922)),
                Promise.resolve().then(i.bind(i, 10790)),
                Promise.resolve().then(i.bind(i, 78684)),
                Promise.resolve().then(i.bind(i, 76877)),
                Promise.resolve().then(i.bind(i, 61176)),
                Promise.resolve().then(i.bind(i, 62108)),
                Promise.resolve().then(i.bind(i, 75053)),
                Promise.resolve().then(i.bind(i, 23035)),
                Promise.resolve().then(i.bind(i, 82315)),
                Promise.resolve().then(i.bind(i, 60673)),
                Promise.resolve().then(i.bind(i, 5048)),
                Promise.resolve().then(i.bind(i, 50215)),
                Promise.resolve().then(i.bind(i, 78308)),
                Promise.resolve().then(i.bind(i, 10084)),
                Promise.resolve().then(i.bind(i, 58681)),
                Promise.resolve().then(i.bind(i, 18658)),
                Promise.resolve().then(i.bind(i, 6323)),
                Promise.resolve().then(i.bind(i, 78817)),
                Promise.resolve().then(i.bind(i, 7230)),
                Promise.resolve().then(i.bind(i, 38378)),
                Promise.resolve().then(i.bind(i, 35609)),
                Promise.resolve().then(i.bind(i, 18606)),
                Promise.resolve().then(i.bind(i, 68014)),
                Promise.resolve().then(i.bind(i, 12126)),
                Promise.resolve().then(i.bind(i, 52742)),
                Promise.resolve().then(i.bind(i, 68098)),
                Promise.resolve().then(i.bind(i, 89190)),
                Promise.resolve().then(i.bind(i, 3270)),
                Promise.resolve().then(i.bind(i, 1220)),
                Promise.resolve().then(i.bind(i, 96584)),
                Promise.resolve().then(i.bind(i, 54598)),
                Promise.resolve().then(i.bind(i, 14196)),
                Promise.resolve().then(i.bind(i, 20576)),
                Promise.resolve().then(i.bind(i, 73976)),
                Promise.resolve().then(i.bind(i, 35203)),
                Promise.resolve().then(i.bind(i, 39450)),
                Promise.resolve().then(i.bind(i, 77607)),
                Promise.resolve().then(i.bind(i, 7430)),
                Promise.resolve().then(i.bind(i, 24786)),
                Promise.resolve().then(i.bind(i, 24036)),
                Promise.resolve().then(i.bind(i, 34932)),
                Promise.resolve().then(i.bind(i, 56204)),
                Promise.resolve().then(i.bind(i, 75450)),
                Promise.resolve().then(i.bind(i, 60608)),
                Promise.resolve().then(i.bind(i, 33648)),
                Promise.resolve().then(i.bind(i, 43548)),
                Promise.resolve().then(i.bind(i, 69672)),
                Promise.resolve().then(i.bind(i, 50711)),
                Promise.resolve().then(i.bind(i, 5185)),
                Promise.resolve().then(i.bind(i, 90555)),
                Promise.resolve().then(i.bind(i, 5602)),
                Promise.resolve().then(i.bind(i, 12390)),
                Promise.resolve().then(i.bind(i, 58376)),
                Promise.resolve().then(i.bind(i, 24491)),
                Promise.resolve().then(i.bind(i, 61993)),
                Promise.resolve().then(i.bind(i, 38644)),
                Promise.resolve().then(i.bind(i, 93668)),
                Promise.resolve().then(i.bind(i, 85949)),
                Promise.resolve().then(i.bind(i, 17519)),
                Promise.resolve().then(i.bind(i, 62010)),
                Promise.resolve().then(i.bind(i, 16372)),
                Promise.resolve().then(i.bind(i, 64434)),
                Promise.resolve().then(i.bind(i, 33158)),
                Promise.resolve().then(i.bind(i, 27314)),
                Promise.resolve().then(i.bind(i, 93206)),
                Promise.resolve().then(i.bind(i, 37226)),
                Promise.resolve().then(i.bind(i, 13811)),
                Promise.resolve().then(i.bind(i, 45645)),
                Promise.resolve().then(i.bind(i, 24126)),
                Promise.resolve().then(i.bind(i, 20406)),
                Promise.resolve().then(i.bind(i, 21940)),
                Promise.resolve().then(i.bind(i, 26086)),
                Promise.resolve().then(i.bind(i, 96838)),
                Promise.resolve().then(i.bind(i, 10358)),
                Promise.resolve().then(i.bind(i, 23143)),
                Promise.resolve().then(i.bind(i, 51828)),
                Promise.resolve().then(i.bind(i, 51725)),
                Promise.resolve().then(i.bind(i, 23834)),
                Promise.resolve().then(i.bind(i, 88343)),
                Promise.resolve().then(i.bind(i, 24624)),
                Promise.resolve().then(i.bind(i, 25751)),
                Promise.resolve().then(i.bind(i, 14170)),
                Promise.resolve().then(i.bind(i, 62277)),
                Promise.resolve().then(i.bind(i, 84359)),
                Promise.resolve().then(i.bind(i, 25743)),
                Promise.resolve().then(i.bind(i, 4111)),
                Promise.resolve().then(i.bind(i, 99057)),
                Promise.resolve().then(i.t.bind(i, 90372, 23));
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
        89511: (e, s, i) => {
            'use strict';
            i.d(s, { b: () => m, L: () => n.useDownloadedTracks });
            var n = i(25751),
                o = i(93064),
                r = i(5693),
                t = i(21365),
                l = i(83252),
                d = i(26433);
            let m = o.gK
                .compose(o.gK.model('DownloadedTracks', { items: o.gK.maybeNull(o.gK.array(t.vj)), tracks: o.gK.maybeNull(o.gK.frozen()) }), d.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var s, i;
                        return (null != (i = null == (s = e.tracks) ? void 0 : s.reduce((e, s) => (s.durationMs ? e + s.durationMs : e), 0)) ? i : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: r.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var n;
                        return e.isResolved && (null == (n = e.items) ? void 0 : n.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, o.L3)(function* (s, i) {
                        let { modelActionsLogger: n } = (0, o._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let n = yield s.getTracks(i);
                                (e.tracks = n), (e.items = (0, o.wg)(n.map((e) => (0, t.vU)(e)))), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                            } catch (s) {
                                n.error(s), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = l.GuX.IDLE);
                    },
                }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                9834, 6041, 5355, 1023, 4354, 1621, 7999, 2398, 6552, 4915, 8748, 4841, 2036, 6683, 1776, 2186, 3091, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916,
                5973, 6266, 3731, 3252, 585, 6433, 3286, 156, 6231, 4826, 1365, 3211, 7858, 5570, 6664, 5284, 9320, 1656, 8387, 2460, 3205, 5288, 5843, 3290, 7358,
            ],
            () => e((e.s = 73489)),
        ),
            (_N_E = e.O());
    },
]);
