(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2966],
    {
        9567: (e, n, r) => {
            'use strict';
            r.d(n, { MyMusicDownloadedTracksPage: () => A });
            var i = r(54486),
                s = r(50420),
                o = r(28303),
                t = r(61910),
                l = r(43426),
                d = r(31500),
                a = r(63585),
                m = r(8817),
                h = r(89511),
                v = r(82644),
                P = r(33276),
                b = r(21365),
                c = r(83252),
                u = r(80585),
                _ = r(76310),
                g = r.n(_),
                p = r(47713),
                x = r(5956),
                y = r(97800),
                k = r(14114),
                f = r.n(k);
            let D = (0, o.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: n },
                    } = (0, c.Pjs)(),
                    r = (0, i.jsx)(y.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    s = [];
                (null == (e = n.tracks) ? void 0 : e.length) &&
                    s.push(
                        (0, i.jsx)(y.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, i.jsx)(p.A, { id: 'entity-names.tracks-count', values: { value: n.tracks.length } }),
                        }),
                    );
                let o = Math.floor(n.tracksDurationInMinutes / 60),
                    l = Math.floor(n.tracksDurationInMinutes % 60);
                return (
                    (o || l) &&
                        (s.push(r),
                        s.push(
                            (0, i.jsx)(y.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, i.jsx)(p.A, { id: 'time.hours-minutes', values: { hours: o, minutes: l } }),
                            }),
                        )),
                    (0, i.jsx)('div', { className: f().root, children: s.map((e, n) => (0, t.cloneElement)(e, { key: n })) })
                );
            });
            var M = r(12962),
                w = r.n(M);
            let T = (0, o.PA)(() => {
                let { isScrolling: e } = (0, t.useContext)(u.B9),
                    n = (0, c.W6M)(),
                    {
                        myMusic: { downloadedTracks: r },
                        settings: { isMobile: s },
                        slam: o,
                    } = (0, c.Pjs)(),
                    { from: l } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                    d = (0, c.PT7)(),
                    h = (0, c.brA)(),
                    { isPlaying: v, togglePlay: P } = (0, c.Dx4)({
                        playContextParams: {
                            contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: r.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    b = (0, m.c)(() => {
                        d() || (P(), h(!v));
                    });
                return (0, i.jsx)('header', {
                    className: w().root,
                    'aria-hidden': e,
                    children: (0, i.jsxs)('div', {
                        className: w().container,
                        children: [
                            !o.isOfflineModeEnabled &&
                                n.canBack &&
                                (0, i.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, i.jsxs)('div', {
                                className: w().titleContainer,
                                children: [
                                    (0, i.jsx)(y.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: w().title,
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, i.jsx)(D, {}),
                                ],
                            }),
                            !r.isEmpty &&
                                (0, i.jsx)(u.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: v,
                                    onClick: b,
                                    className: w().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !s && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var C = r(61336),
                N = r.n(C);
            let j = (0, o.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T, {}),
                            (0, i.jsxs)('div', {
                                className: N().root,
                                children: [
                                    (0, i.jsx)(x.Icon, { className: N().icon, size: 'l', variant: 'download' }),
                                    (0, i.jsx)(y.Heading, {
                                        className: N().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, i.jsx)(p.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, i.jsx)(y.Caption, {
                                        className: N().text,
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
                S = (0, o.PA)(() => {
                    let { isScrolling: e } = (0, t.useContext)(u.B9),
                        n = (0, c.W6M)(),
                        {
                            myMusic: { downloadedTracks: r },
                            settings: { isMobile: o },
                            slam: l,
                        } = (0, c.Pjs)(),
                        { from: d } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        h = (0, c.brA)(),
                        v = (0, c.PT7)(),
                        { isPlaying: P, togglePlay: b } = (0, c.Dx4)({
                            playContextParams: {
                                contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: d },
                                entitiesData: r.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        _ = (0, m.c)(() => {
                            v() || (b(), h(!P));
                        });
                    return (0, i.jsx)(u.Y9, {
                        variant: u.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, i.jsxs)('div', {
                            className: w().container,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    n.canBack &&
                                    (0, i.jsx)(u.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, i.jsx)(y.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: w().stickyTitle,
                                    children: (0, i.jsx)(p.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !r.isEmpty &&
                                    (0, i.jsx)(u.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: P,
                                        onClick: _,
                                        className: (0, s.$)(w().playButton, { [w().stickyPlayButton]: !o }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !o && (0, i.jsx)(p.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, s.$)(w().stickyHeader, w().important),
                        staticClassName: (0, s.$)(w().staticHeader, w().important),
                    });
                }),
                A = (0, o.PA)(() => {
                    var e;
                    let n = (0, c.jRO)(),
                        { contentScrollRef: r, setContentScrollRef: o } = (0, c.gKY)(),
                        { formatMessage: _ } = (0, l.A)(),
                        {
                            myMusic: { downloadedTracks: p },
                        } = (0, c.Pjs)(),
                        { from: x } = (0, c.fyy)({ pageId: c._Q$.OWN_TRACKS, blockId: c.UfI.TRACK_LIST }),
                        y = (0, c.wZZ)(),
                        k = (0, m.c)(() => {
                            n.tracksController && p.getData(n.tracksController);
                        });
                    (0, h.L)(k),
                        (0, t.useEffect)(() => {
                            p.isNeededToLoad && k();
                        }, [p.isNeededToLoad, k]),
                        (0, t.useEffect)(
                            () => () => {
                                p.reset();
                            },
                            [p],
                        ),
                        (0, c.Jzs)(p.isResolved);
                    let f = (0, t.useMemo)(
                        () => ({ Header: () => (0, i.jsx)(T, {}), Footer: () => (0, i.jsx)(u.A, { children: (0, i.jsx)(u.wi, { className: g().footer }) }) }),
                        [],
                    );
                    if (p.loadingState === c.GuX.REJECT) return (0, i.jsx)(v.w, {});
                    if (p.isEmpty) return (0, i.jsx)(j, {});
                    let D = (null == (e = p.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(c.nVz, {
                        pageId: c._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(P.hO, {
                            scrollElement: r,
                            children: (0, i.jsxs)('div', {
                                className: g().pageContainer,
                                children: [
                                    (0, i.jsx)(S, {}),
                                    (0, i.jsx)(u.$$, {
                                        context: { listAriaLabel: _({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, s.$)(g().root, g().important),
                                        listClassName: g().content,
                                        customComponents: f,
                                        totalCount: D,
                                        itemContentCallback: (e) => {
                                            var n;
                                            let r = null == (n = p.items) ? void 0 : n[e];
                                            return r
                                                ? (0, i.jsx)(
                                                      b.Kt,
                                                      {
                                                          track: r,
                                                          playContextParams: y(r.id, {
                                                              contextData: { type: a.K.Various, meta: { id: c._Q$.DOWNLOADS_TRACKS }, from: x },
                                                              entitiesData: p.entitiesData,
                                                              queueParams: { index: e, entityId: r.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      r.id,
                                                  )
                                                : (0, i.jsx)(u.DS, { isActive: !0, className: g().trackShimmer, variant: c.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: D,
                                        handleRef: o,
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
        25751: (e, n, r) => {
            'use strict';
            r.d(n, { useDownloadedTracks: () => d });
            var i = r(61910),
                s = r(12460),
                o = r(8817),
                t = r(83252);
            let l = [s.DT.IDLE, s.DT.DOWNLOADED],
                d = (e) => {
                    var n;
                    let r = (0, t.jRO)(),
                        d = (0, o.c)((n) => {
                            let { state: r } = n;
                            l.includes(r.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var n, i;
                        return (
                            null == (n = r.store) || n.tracks.events.on(s.je.STATE_CHANGED, e),
                            null == (i = r.store) || i.tracks.events.on(s.je.ENTITY_CHANGED, d),
                            () => {
                                var n, i;
                                null == (n = r.store) || n.tracks.events.off(s.je.STATE_CHANGED, e), null == (i = r.store) || i.tracks.events.off(s.je.ENTITY_CHANGED, d);
                            }
                        );
                    }, [e, d, null == (n = r.store) ? void 0 : n.tracks.events]);
                };
        },
        42520: (e, n, r) => {
            'use strict';
            let i;
            r.d(n, { useMetrika: () => t });
            var s = r(61910),
                o = r(80506);
            let t = () => {
                let e = (i || (i = (0, o.a)()), i),
                    n = (0, s.useSyncExternalStore)(e.isLoaded.onChange, () => e.isLoaded.value);
                return (0, s.useMemo)(() => ({ ...e, isLoaded: n }), [n]);
            };
        },
        52679: (e, n, r) => {
            Promise.resolve().then(r.bind(r, 81203)),
                Promise.resolve().then(r.bind(r, 5956)),
                Promise.resolve().then(r.bind(r, 58360)),
                Promise.resolve().then(r.bind(r, 14342)),
                Promise.resolve().then(r.bind(r, 62662)),
                Promise.resolve().then(r.bind(r, 6971)),
                Promise.resolve().then(r.bind(r, 22674)),
                Promise.resolve().then(r.bind(r, 51321)),
                Promise.resolve().then(r.bind(r, 97800)),
                Promise.resolve().then(r.bind(r, 42520)),
                Promise.resolve().then(r.bind(r, 30662)),
                Promise.resolve().then(r.bind(r, 31757)),
                Promise.resolve().then(r.bind(r, 51672)),
                Promise.resolve().then(r.bind(r, 63449)),
                Promise.resolve().then(r.bind(r, 65134)),
                Promise.resolve().then(r.bind(r, 96819)),
                Promise.resolve().then(r.bind(r, 38868)),
                Promise.resolve().then(r.bind(r, 77163)),
                Promise.resolve().then(r.bind(r, 96025)),
                Promise.resolve().then(r.bind(r, 51887)),
                Promise.resolve().then(r.bind(r, 25577)),
                Promise.resolve().then(r.bind(r, 65327)),
                Promise.resolve().then(r.bind(r, 3119)),
                Promise.resolve().then(r.bind(r, 74808)),
                Promise.resolve().then(r.bind(r, 92088)),
                Promise.resolve().then(r.bind(r, 83154)),
                Promise.resolve().then(r.bind(r, 14476)),
                Promise.resolve().then(r.bind(r, 88332)),
                Promise.resolve().then(r.bind(r, 16855)),
                Promise.resolve().then(r.bind(r, 28795)),
                Promise.resolve().then(r.bind(r, 64782)),
                Promise.resolve().then(r.bind(r, 59839)),
                Promise.resolve().then(r.bind(r, 60339)),
                Promise.resolve().then(r.bind(r, 58435)),
                Promise.resolve().then(r.bind(r, 60272)),
                Promise.resolve().then(r.bind(r, 39206)),
                Promise.resolve().then(r.bind(r, 42061)),
                Promise.resolve().then(r.bind(r, 31820)),
                Promise.resolve().then(r.bind(r, 10351)),
                Promise.resolve().then(r.t.bind(r, 61484, 23)),
                Promise.resolve().then(r.bind(r, 87184)),
                Promise.resolve().then(r.bind(r, 32949)),
                Promise.resolve().then(r.bind(r, 86778)),
                Promise.resolve().then(r.bind(r, 27654)),
                Promise.resolve().then(r.bind(r, 83952)),
                Promise.resolve().then(r.t.bind(r, 20065, 23)),
                Promise.resolve().then(r.bind(r, 81217)),
                Promise.resolve().then(r.bind(r, 56689)),
                Promise.resolve().then(r.bind(r, 73219)),
                Promise.resolve().then(r.bind(r, 25045)),
                Promise.resolve().then(r.bind(r, 29468)),
                Promise.resolve().then(r.bind(r, 69573)),
                Promise.resolve().then(r.bind(r, 64409)),
                Promise.resolve().then(r.bind(r, 27574)),
                Promise.resolve().then(r.bind(r, 15091)),
                Promise.resolve().then(r.bind(r, 93099)),
                Promise.resolve().then(r.bind(r, 15640)),
                Promise.resolve().then(r.bind(r, 82885)),
                Promise.resolve().then(r.bind(r, 99733)),
                Promise.resolve().then(r.bind(r, 18355)),
                Promise.resolve().then(r.bind(r, 42691)),
                Promise.resolve().then(r.bind(r, 37235)),
                Promise.resolve().then(r.bind(r, 3781)),
                Promise.resolve().then(r.bind(r, 33829)),
                Promise.resolve().then(r.bind(r, 39906)),
                Promise.resolve().then(r.bind(r, 50119)),
                Promise.resolve().then(r.bind(r, 21179)),
                Promise.resolve().then(r.bind(r, 17097)),
                Promise.resolve().then(r.bind(r, 50193)),
                Promise.resolve().then(r.bind(r, 83399)),
                Promise.resolve().then(r.bind(r, 11450)),
                Promise.resolve().then(r.bind(r, 62345)),
                Promise.resolve().then(r.bind(r, 37408)),
                Promise.resolve().then(r.bind(r, 48392)),
                Promise.resolve().then(r.bind(r, 42488)),
                Promise.resolve().then(r.bind(r, 33776)),
                Promise.resolve().then(r.bind(r, 5207)),
                Promise.resolve().then(r.bind(r, 20875)),
                Promise.resolve().then(r.bind(r, 5065)),
                Promise.resolve().then(r.bind(r, 29443)),
                Promise.resolve().then(r.bind(r, 29717)),
                Promise.resolve().then(r.bind(r, 85693)),
                Promise.resolve().then(r.bind(r, 55639)),
                Promise.resolve().then(r.t.bind(r, 46121, 23)),
                Promise.resolve().then(r.bind(r, 69536)),
                Promise.resolve().then(r.bind(r, 45721)),
                Promise.resolve().then(r.bind(r, 80183)),
                Promise.resolve().then(r.bind(r, 2438)),
                Promise.resolve().then(r.bind(r, 46540)),
                Promise.resolve().then(r.bind(r, 26923)),
                Promise.resolve().then(r.bind(r, 23504)),
                Promise.resolve().then(r.bind(r, 99182)),
                Promise.resolve().then(r.bind(r, 83580)),
                Promise.resolve().then(r.bind(r, 19633)),
                Promise.resolve().then(r.bind(r, 84883)),
                Promise.resolve().then(r.bind(r, 57923)),
                Promise.resolve().then(r.t.bind(r, 37863, 23)),
                Promise.resolve().then(r.bind(r, 22017)),
                Promise.resolve().then(r.bind(r, 50795)),
                Promise.resolve().then(r.bind(r, 32159)),
                Promise.resolve().then(r.bind(r, 70901)),
                Promise.resolve().then(r.bind(r, 18139)),
                Promise.resolve().then(r.bind(r, 31135)),
                Promise.resolve().then(r.bind(r, 74627)),
                Promise.resolve().then(r.t.bind(r, 3809, 23)),
                Promise.resolve().then(r.bind(r, 30623)),
                Promise.resolve().then(r.bind(r, 5631)),
                Promise.resolve().then(r.bind(r, 9283)),
                Promise.resolve().then(r.bind(r, 72467)),
                Promise.resolve().then(r.bind(r, 66894)),
                Promise.resolve().then(r.bind(r, 45318)),
                Promise.resolve().then(r.bind(r, 3283)),
                Promise.resolve().then(r.bind(r, 48284)),
                Promise.resolve().then(r.bind(r, 69151)),
                Promise.resolve().then(r.bind(r, 8871)),
                Promise.resolve().then(r.bind(r, 86062)),
                Promise.resolve().then(r.bind(r, 47937)),
                Promise.resolve().then(r.bind(r, 76130)),
                Promise.resolve().then(r.bind(r, 76858)),
                Promise.resolve().then(r.bind(r, 54586)),
                Promise.resolve().then(r.bind(r, 12938)),
                Promise.resolve().then(r.bind(r, 62065)),
                Promise.resolve().then(r.bind(r, 39194)),
                Promise.resolve().then(r.bind(r, 97778)),
                Promise.resolve().then(r.bind(r, 23728)),
                Promise.resolve().then(r.bind(r, 9821)),
                Promise.resolve().then(r.bind(r, 13868)),
                Promise.resolve().then(r.bind(r, 43616)),
                Promise.resolve().then(r.bind(r, 92810)),
                Promise.resolve().then(r.bind(r, 79971)),
                Promise.resolve().then(r.bind(r, 61920)),
                Promise.resolve().then(r.bind(r, 93549)),
                Promise.resolve().then(r.bind(r, 4242)),
                Promise.resolve().then(r.bind(r, 79045)),
                Promise.resolve().then(r.bind(r, 72850)),
                Promise.resolve().then(r.bind(r, 26853)),
                Promise.resolve().then(r.bind(r, 85905)),
                Promise.resolve().then(r.bind(r, 94540)),
                Promise.resolve().then(r.bind(r, 9567)),
                Promise.resolve().then(r.bind(r, 8394)),
                Promise.resolve().then(r.bind(r, 3192)),
                Promise.resolve().then(r.bind(r, 7286)),
                Promise.resolve().then(r.bind(r, 60305)),
                Promise.resolve().then(r.bind(r, 47203)),
                Promise.resolve().then(r.bind(r, 34286)),
                Promise.resolve().then(r.bind(r, 224)),
                Promise.resolve().then(r.bind(r, 24449)),
                Promise.resolve().then(r.bind(r, 79893)),
                Promise.resolve().then(r.bind(r, 81789)),
                Promise.resolve().then(r.bind(r, 87466)),
                Promise.resolve().then(r.bind(r, 34028)),
                Promise.resolve().then(r.bind(r, 99564)),
                Promise.resolve().then(r.bind(r, 95348)),
                Promise.resolve().then(r.bind(r, 52347)),
                Promise.resolve().then(r.bind(r, 61015)),
                Promise.resolve().then(r.bind(r, 1771)),
                Promise.resolve().then(r.bind(r, 80043)),
                Promise.resolve().then(r.bind(r, 65729)),
                Promise.resolve().then(r.bind(r, 12235)),
                Promise.resolve().then(r.bind(r, 60793)),
                Promise.resolve().then(r.bind(r, 74565)),
                Promise.resolve().then(r.bind(r, 8941)),
                Promise.resolve().then(r.bind(r, 38433)),
                Promise.resolve().then(r.bind(r, 8732)),
                Promise.resolve().then(r.bind(r, 43369)),
                Promise.resolve().then(r.bind(r, 47564)),
                Promise.resolve().then(r.bind(r, 41017)),
                Promise.resolve().then(r.bind(r, 27252)),
                Promise.resolve().then(r.bind(r, 65286)),
                Promise.resolve().then(r.bind(r, 45198)),
                Promise.resolve().then(r.bind(r, 46814)),
                Promise.resolve().then(r.bind(r, 92508)),
                Promise.resolve().then(r.bind(r, 40126)),
                Promise.resolve().then(r.bind(r, 83726)),
                Promise.resolve().then(r.bind(r, 90410)),
                Promise.resolve().then(r.bind(r, 13246)),
                Promise.resolve().then(r.bind(r, 26040)),
                Promise.resolve().then(r.bind(r, 92446)),
                Promise.resolve().then(r.bind(r, 42593)),
                Promise.resolve().then(r.bind(r, 70570)),
                Promise.resolve().then(r.bind(r, 88416)),
                Promise.resolve().then(r.bind(r, 24174)),
                Promise.resolve().then(r.bind(r, 78458)),
                Promise.resolve().then(r.bind(r, 59457)),
                Promise.resolve().then(r.bind(r, 6690)),
                Promise.resolve().then(r.bind(r, 88370)),
                Promise.resolve().then(r.bind(r, 66904)),
                Promise.resolve().then(r.bind(r, 39937)),
                Promise.resolve().then(r.bind(r, 33019)),
                Promise.resolve().then(r.bind(r, 38808)),
                Promise.resolve().then(r.bind(r, 58094)),
                Promise.resolve().then(r.bind(r, 78009)),
                Promise.resolve().then(r.bind(r, 33427)),
                Promise.resolve().then(r.bind(r, 30878)),
                Promise.resolve().then(r.bind(r, 53115)),
                Promise.resolve().then(r.bind(r, 52398)),
                Promise.resolve().then(r.bind(r, 82327)),
                Promise.resolve().then(r.bind(r, 17012)),
                Promise.resolve().then(r.bind(r, 9275)),
                Promise.resolve().then(r.bind(r, 17658)),
                Promise.resolve().then(r.bind(r, 36578)),
                Promise.resolve().then(r.bind(r, 66989)),
                Promise.resolve().then(r.bind(r, 58863)),
                Promise.resolve().then(r.bind(r, 60899)),
                Promise.resolve().then(r.bind(r, 59437)),
                Promise.resolve().then(r.bind(r, 43367)),
                Promise.resolve().then(r.bind(r, 66446)),
                Promise.resolve().then(r.bind(r, 86840)),
                Promise.resolve().then(r.bind(r, 75181)),
                Promise.resolve().then(r.bind(r, 99538)),
                Promise.resolve().then(r.bind(r, 45252)),
                Promise.resolve().then(r.bind(r, 59226)),
                Promise.resolve().then(r.bind(r, 75961)),
                Promise.resolve().then(r.bind(r, 33964)),
                Promise.resolve().then(r.bind(r, 33967)),
                Promise.resolve().then(r.bind(r, 64410)),
                Promise.resolve().then(r.bind(r, 91350)),
                Promise.resolve().then(r.bind(r, 4500)),
                Promise.resolve().then(r.bind(r, 55846)),
                Promise.resolve().then(r.bind(r, 65689)),
                Promise.resolve().then(r.bind(r, 99386)),
                Promise.resolve().then(r.bind(r, 5222)),
                Promise.resolve().then(r.bind(r, 60440)),
                Promise.resolve().then(r.bind(r, 37271)),
                Promise.resolve().then(r.bind(r, 66688)),
                Promise.resolve().then(r.bind(r, 76472)),
                Promise.resolve().then(r.bind(r, 41682)),
                Promise.resolve().then(r.bind(r, 77666)),
                Promise.resolve().then(r.bind(r, 8765)),
                Promise.resolve().then(r.bind(r, 48670)),
                Promise.resolve().then(r.bind(r, 22096)),
                Promise.resolve().then(r.bind(r, 33655)),
                Promise.resolve().then(r.bind(r, 27754)),
                Promise.resolve().then(r.bind(r, 47347)),
                Promise.resolve().then(r.bind(r, 45591)),
                Promise.resolve().then(r.bind(r, 52862)),
                Promise.resolve().then(r.bind(r, 79326)),
                Promise.resolve().then(r.bind(r, 73922)),
                Promise.resolve().then(r.bind(r, 10790)),
                Promise.resolve().then(r.bind(r, 78684)),
                Promise.resolve().then(r.bind(r, 76877)),
                Promise.resolve().then(r.bind(r, 61176)),
                Promise.resolve().then(r.bind(r, 62108)),
                Promise.resolve().then(r.bind(r, 75053)),
                Promise.resolve().then(r.bind(r, 23035)),
                Promise.resolve().then(r.bind(r, 82315)),
                Promise.resolve().then(r.bind(r, 60673)),
                Promise.resolve().then(r.bind(r, 5048)),
                Promise.resolve().then(r.bind(r, 50215)),
                Promise.resolve().then(r.bind(r, 78308)),
                Promise.resolve().then(r.bind(r, 10084)),
                Promise.resolve().then(r.bind(r, 58681)),
                Promise.resolve().then(r.bind(r, 18658)),
                Promise.resolve().then(r.bind(r, 6323)),
                Promise.resolve().then(r.bind(r, 78817)),
                Promise.resolve().then(r.bind(r, 7230)),
                Promise.resolve().then(r.bind(r, 38378)),
                Promise.resolve().then(r.bind(r, 35609)),
                Promise.resolve().then(r.bind(r, 18606)),
                Promise.resolve().then(r.bind(r, 68014)),
                Promise.resolve().then(r.bind(r, 12126)),
                Promise.resolve().then(r.bind(r, 52742)),
                Promise.resolve().then(r.bind(r, 68098)),
                Promise.resolve().then(r.bind(r, 89190)),
                Promise.resolve().then(r.bind(r, 3270)),
                Promise.resolve().then(r.bind(r, 1220)),
                Promise.resolve().then(r.bind(r, 96584)),
                Promise.resolve().then(r.bind(r, 54598)),
                Promise.resolve().then(r.bind(r, 14196)),
                Promise.resolve().then(r.bind(r, 20576)),
                Promise.resolve().then(r.bind(r, 73976)),
                Promise.resolve().then(r.bind(r, 35203)),
                Promise.resolve().then(r.bind(r, 39450)),
                Promise.resolve().then(r.bind(r, 77607)),
                Promise.resolve().then(r.bind(r, 7430)),
                Promise.resolve().then(r.bind(r, 24786)),
                Promise.resolve().then(r.bind(r, 24036)),
                Promise.resolve().then(r.bind(r, 34932)),
                Promise.resolve().then(r.bind(r, 56204)),
                Promise.resolve().then(r.bind(r, 75450)),
                Promise.resolve().then(r.bind(r, 60608)),
                Promise.resolve().then(r.bind(r, 33648)),
                Promise.resolve().then(r.bind(r, 43548)),
                Promise.resolve().then(r.bind(r, 69672)),
                Promise.resolve().then(r.bind(r, 50711)),
                Promise.resolve().then(r.bind(r, 5185)),
                Promise.resolve().then(r.bind(r, 90555)),
                Promise.resolve().then(r.bind(r, 5602)),
                Promise.resolve().then(r.bind(r, 12390)),
                Promise.resolve().then(r.bind(r, 58376)),
                Promise.resolve().then(r.bind(r, 24491)),
                Promise.resolve().then(r.bind(r, 61993)),
                Promise.resolve().then(r.bind(r, 38644)),
                Promise.resolve().then(r.bind(r, 93668)),
                Promise.resolve().then(r.bind(r, 85949)),
                Promise.resolve().then(r.bind(r, 17519)),
                Promise.resolve().then(r.bind(r, 62010)),
                Promise.resolve().then(r.bind(r, 16372)),
                Promise.resolve().then(r.bind(r, 64434)),
                Promise.resolve().then(r.bind(r, 33158)),
                Promise.resolve().then(r.bind(r, 27314)),
                Promise.resolve().then(r.bind(r, 93206)),
                Promise.resolve().then(r.bind(r, 37226)),
                Promise.resolve().then(r.bind(r, 13811)),
                Promise.resolve().then(r.bind(r, 45645)),
                Promise.resolve().then(r.bind(r, 24126)),
                Promise.resolve().then(r.bind(r, 20406)),
                Promise.resolve().then(r.bind(r, 21940)),
                Promise.resolve().then(r.bind(r, 26086)),
                Promise.resolve().then(r.bind(r, 96838)),
                Promise.resolve().then(r.bind(r, 10358)),
                Promise.resolve().then(r.bind(r, 23143)),
                Promise.resolve().then(r.bind(r, 51828)),
                Promise.resolve().then(r.bind(r, 51725)),
                Promise.resolve().then(r.bind(r, 23834)),
                Promise.resolve().then(r.bind(r, 88343)),
                Promise.resolve().then(r.bind(r, 24624)),
                Promise.resolve().then(r.bind(r, 25751)),
                Promise.resolve().then(r.bind(r, 14170)),
                Promise.resolve().then(r.bind(r, 62277)),
                Promise.resolve().then(r.bind(r, 84359)),
                Promise.resolve().then(r.bind(r, 25743)),
                Promise.resolve().then(r.bind(r, 4111)),
                Promise.resolve().then(r.bind(r, 99057)),
                Promise.resolve().then(r.t.bind(r, 90372, 23));
        },
        57249: (e, n, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        61336: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
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
        75312: (e, n, r) => {
            'use strict';
            r.d(n, { SomethingWentWrong: () => u });
            var i = r(54486),
                s = r(50420),
                o = r(28303),
                t = r(61910),
                l = r(43426),
                d = r(47713),
                a = r(77881),
                m = r(5956),
                h = r(97800),
                v = r(83252),
                P = r(80585),
                b = r(63708),
                c = r.n(b);
            let u = (0, o.PA)((e) => {
                let { className: n, withBackwardControl: r = !0 } = e,
                    { formatMessage: o } = (0, l.A)(),
                    b = o({ id: 'error-messages.something-went-wrong' });
                (0, v.CgZ)(b);
                let { sendRefreshEvent: u } = (0, v.cYT)(),
                    _ = (0, t.useCallback)(() => {
                        u(), (window.location.href = v.Zyd.main.href);
                    }, [u]),
                    { contentRef: g } = (0, v.gKY)();
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(c().root, n),
                    children: [
                        r &&
                            (0, i.jsx)(P.Lh, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(c().navigation, { [c().navigation_desktop]: !g }),
                                withForwardControl: !1,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(c().content, { [c().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(m.Icon, { className: c().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(h.Heading, { className: (0, s.$)(c().title, c().important), variant: 'h3', size: 'xs', children: b }),
                                (0, i.jsxs)(h.Caption, {
                                    className: (0, s.$)(c().text, c().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(d.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(a.$, {
                                    onClick: _,
                                    className: c().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(h.Caption, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(d.A, { id: 'page-error.restart-app-button' })],
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
        80506: (e, n, r) => {
            'use strict';
            r.d(n, { a: () => s });
            var i = r(87965);
            let s = () => {
                let e = null,
                    n = new i.cJ(!1),
                    r = [];
                return {
                    isLoaded: n,
                    init: (i) => {
                        var s, o;
                        if (void 0 !== (null == (s = window.Ya) ? void 0 : s.Metrika2) && !n.value)
                            try {
                                (e = new window.Ya.Metrika2({ ...i })),
                                    (n.value = !0),
                                    (o = e),
                                    r.forEach((e) => {
                                        e(o);
                                    }),
                                    (r.length = 0);
                            } catch (e) {
                                ('string' == typeof e || e instanceof Error) && i.logger.error(e);
                            }
                    },
                    count: function (n) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'counter';
                        e
                            ? e.params({ [i]: n })
                            : r.push((e) => {
                                  e.params({ [i]: n });
                              });
                    },
                    hit: (n) => {
                        e
                            ? e.hit(n)
                            : r.push((e) => {
                                  e.hit(n);
                              });
                    },
                    reachGoal: (n, i) => {
                        if (!e) return void r.push((e) => e.reachGoal(n, i));
                        e.reachGoal(n, i);
                    },
                };
            };
        },
        82644: (e, n, r) => {
            'use strict';
            r.d(n, { w: () => i.SomethingWentWrong });
            var i = r(75312);
        },
        89511: (e, n, r) => {
            'use strict';
            r.d(n, { b: () => a, L: () => i.useDownloadedTracks });
            var i = r(25751),
                s = r(93064),
                o = r(5693),
                t = r(21365),
                l = r(83252),
                d = r(26433);
            let a = s.gK
                .compose(s.gK.model('DownloadedTracks', { items: s.gK.maybeNull(s.gK.array(t.vj)), tracks: s.gK.maybeNull(s.gK.frozen()) }), d.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var n, r;
                        return (null != (r = null == (n = e.tracks) ? void 0 : n.reduce((e, n) => (n.durationMs ? e + n.durationMs : e), 0)) ? r : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: o.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, s.L3)(function* (n, r) {
                        let { modelActionsLogger: i } = (0, s._$)(e);
                        if (e.loadingState !== l.GuX.PENDING)
                            try {
                                e.loadingState = l.GuX.PENDING;
                                let i = yield n.getTracks(r);
                                (e.tracks = i), (e.items = (0, s.wg)(i.map((e) => (0, t.vU)(e)))), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.RESOLVE);
                            } catch (n) {
                                i.error(n), e.loadingState !== l.GuX.IDLE && (e.loadingState = l.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = l.GuX.IDLE);
                    },
                }));
        },
        97151: (e, n, r) => {
            'use strict';
            r.d(n, { XU: () => h });
            var i,
                s,
                o = r(41500),
                t = r(61910),
                l = r(43426);
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
                })(s || (s = {}));
            var d = function (e) {
                var n = (0, l.A)(),
                    r = e.value,
                    i = e.children,
                    s = (0, o.__rest)(e, ['value', 'children']);
                return i(n.formatNumberToParts(r, s));
            };
            function a(e) {
                var n = function (n) {
                    var r = (0, l.A)(),
                        i = n.value,
                        s = n.children,
                        t = (0, o.__rest)(n, ['value', 'children']),
                        d = 'string' == typeof i ? new Date(i || 0) : i;
                    return s('formatDate' === e ? r.formatDateToParts(d, t) : r.formatTimeToParts(d, t));
                };
                return (n.displayName = s[e]), n;
            }
            function m(e) {
                var n = function (n) {
                    var r = (0, l.A)(),
                        i = n.value,
                        s = n.children,
                        d = (0, o.__rest)(n, ['value', 'children']),
                        a = r[e](i, d);
                    if ('function' == typeof s) return s(a);
                    var m = r.textComponent || t.Fragment;
                    return t.createElement(m, null, a);
                };
                return (n.displayName = i[e]), n;
            }
            (d.displayName = 'FormattedNumberParts'), (d.displayName = 'FormattedNumberParts');
            var h = m('formatDate');
            m('formatTime'), m('formatNumber'), m('formatList'), m('formatDisplayName'), a('formatDate'), a('formatTime');
        },
    },
    (e) => {
        e.O(
            0,
            [
                6041, 9834, 5355, 1023, 2398, 4915, 6552, 8748, 2186, 2036, 1776, 1621, 1311, 7764, 6706, 7724, 5201, 5148, 3005, 3916, 4885, 5973, 6266, 3773, 3252, 585,
                6433, 3286, 156, 6231, 4826, 1365, 3211, 7858, 5570, 6664, 9320, 2460, 4540, 5843, 3290, 7358,
            ],
            () => e((e.s = 52679)),
        ),
            (_N_E = e.O());
    },
]);
