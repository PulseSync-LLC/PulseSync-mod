(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7760, 9460],
    {
        1019: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialAlbumsPage: () => E });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(31500),
                u = a(8817),
                c = a(27510),
                h = a(97800),
                g = a(82644),
                m = a(80156),
                y = a(33276),
                p = a(83252),
                v = a(80585),
                S = a(22603),
                P = a.n(S);
            let E = (0, s.PA)((e) => {
                var t, a, s, S;
                let { id: E } = e,
                    {
                        kids: { kidsEditorialAlbumSubpage: f },
                        settings: { isMobile: b },
                    } = (0, p.Pjs)(),
                    _ = (0, p.W6M)(),
                    { contentScrollRef: I, setContentScrollRef: k } = (0, p.gKY)(),
                    { formatMessage: C } = (0, o.A)(),
                    T = (0, u.c)((e) => {
                        f.getAlbums({ page: e, pageSize: 20 });
                    });
                f.isNotFound && (0, n.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f],
                    );
                let A = (0, c.L)(() => ({ Footer: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(v.wi, { className: P().footer }) }) }));
                if (
                    ((0, p.Jzs)(f.isResolved),
                    (0, p.XcE)(f.pagesLoader, T),
                    f.isNeededToLoad && (0, l.use)(f.getData({ id: E, page: 0, pageSize: 20 })),
                    f.isSomethingWrong)
                )
                    return (0, i.jsx)(g.w, {});
                let D = f.isLoading ? 20 : null != (s = null == (a = f.pagesLoader) || null == (t = a.pager) ? void 0 : t.total) ? s : 0;
                return (0, i.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_ALBUMS,
                    children: (0, i.jsx)(y.hO, {
                        scrollElement: I,
                        outerTitle: f.title,
                        children: (0, i.jsxs)('div', {
                            className: P().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_ALBUMS),
                            children: [
                                (0, i.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: _.canBack,
                                    children: (0, i.jsx)(h.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: f.title }),
                                }),
                                (0, i.jsx)(v.$$, {
                                    context: { listAriaLabel: C({ id: 'mixes.albums-list' }, { genreName: f.title || '' }) },
                                    className: (0, r.$)(P().scrollContainer, P().important),
                                    customComponents: A,
                                    itemContentCallback: (e) => {
                                        let t = f.albums[e],
                                            a = C({ id: 'loading-messages.entity-is-loading' }, { entityName: C({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, i.jsx)(m.aX, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                            : (0, i.jsx)(v.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: D,
                                    onGetDataByPage: T,
                                    pageSize: 20,
                                    totalRequests: null != (S = f.pagesLoader.requestsCount) ? S : 0,
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    handleRef: k,
                                    isMobileLayout: b,
                                    useWindowScroll: b,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        1320: (e) => {
            e.exports = {
                root: 'UgcUploadCenterNotification_root__K_U0z',
                title: 'UgcUploadCenterNotification_title__s3yTL',
                link: 'UgcUploadCenterNotification_link__NPz6r',
            };
        },
        3062: (e) => {
            e.exports = {
                root: 'GenresPage_root__LhP_S',
                shimmerTitle: 'GenresPage_shimmerTitle__4j8uH',
                content: 'GenresPage_content__yhKrQ',
                list: 'GenresPage_list__l2Cuc',
            };
        },
        3070: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { AnalyticsProvider: () => n });
            var i = a(54486),
                r = a(62395),
                s = a(83252);
            let n = (e) => {
                let { children: t } = e,
                    a = (0, s.UlF)(),
                    n = (0, s.NFA)(),
                    l = 'on' === n.get(s.ooW).get(s.cYZ.AllowAnalyticsLogs),
                    o = n.get(s.vgk);
                return (0, i.jsx)(r.vZ, { metrika: o, allowAnalyticsLogs: l, evgenUserParam: 'evgen', logger: a, children: t });
            };
        },
        4968: (e, t, a) => {
            'use strict';
            a.d(t, { ShortcutsProvider: () => d });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(83252),
                l = a(65429);
            let o = null,
                d = (0, r.PA)((e) => {
                    let { children: t } = e,
                        { sonataState: a } = (0, n.Pjs)(),
                        r = (0, s.useMemo)(() => (o || (o = new n.G8o(new n.z$B())), o), []);
                    return (
                        (0, l.E)({ controller: r, sonataState: a, groupId: n.Mo.MAIN }),
                        (0, s.useEffect)(
                            () => (
                                null == r || r.listen(),
                                () => {
                                    null == r || r.stopListening();
                                }
                            ),
                            [r],
                        ),
                        (0, i.jsx)(n.Pic.Provider, { value: r, children: t })
                    );
                });
        },
        6923: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ContainerProvider: () => u });
            var i = a(54486),
                r = a(61910),
                s = a(83252),
                n = a(80585);
            let l = null,
                o = async (e) => {
                    var t;
                    let {
                            userAgent: a,
                            hostTld: i,
                            forwardedForY: r,
                            changeLanguageToken: n,
                            tracestate: l,
                            traceparent: o,
                            icookie: d,
                            serverDetectedLocale: u,
                            env: c,
                            browserName: h,
                            browserVersion: g,
                            executionContextStore: m,
                        } = e,
                        y = await (0, s.MyF)({
                            userAgent: a,
                            tld: i,
                            forwardedForY: r,
                            changeLanguageToken: n,
                            tracestate: l,
                            traceparent: o,
                            icookie: d,
                            serverDetectedLocale: u,
                            env: c,
                            browserName: h,
                            browserVersion: g,
                            executionContextStore: m,
                        });
                    return await y.get(s.Xc9).loadDictionary(), null == (t = await y.get(s.RGd)) || t(), y;
                },
                d = (e) => {
                    let { children: t, containerLoader: a } = e;
                    return l || (l = (0, r.use)(a)), (0, i.jsx)(s.Bz0.Provider, { value: l, children: t });
                },
                u = (e) => {
                    let {
                            children: t,
                            hostTld: a,
                            env: s,
                            forwardedForY: l,
                            tracestate: u,
                            traceparent: c,
                            icookie: h,
                            changeLanguageToken: g,
                            serverDetectedLocale: m,
                            userAgent: y,
                            browserName: p,
                            browserVersion: v,
                            executionContextStore: S,
                        } = e,
                        P = o({
                            userAgent: y,
                            hostTld: a,
                            forwardedForY: l,
                            changeLanguageToken: g,
                            tracestate: u,
                            traceparent: c,
                            icookie: h,
                            serverDetectedLocale: m,
                            env: s,
                            browserName: p,
                            browserVersion: v,
                            executionContextStore: S,
                        });
                    return (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)(n.JR, {}), children: (0, i.jsx)(d, { containerLoader: P, children: t }) });
                };
        },
        7588: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n });
            var i = a(83252),
                r = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: l, tld: o, host: d } = t,
                    u = await (0, i.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = 'artists' in e ? e.artists : void 0,
                    m = (0, r.f)({ genreTitle: c, artists: g, messageFormatter: u }),
                    y = s.env.ASSET_PREFIX || '',
                    p = ''.concat(d).concat(y, '/meta/og-image.png');
                return {
                    title: h,
                    description: m,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(c),
                        ogDescription: m,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: p,
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: h, url: null != l ? l : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { tld: o, url: null != l ? l : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        9089: (e, t, a) => {
            'use strict';
            a.d(t, { oN: () => d.TagPage, vV: () => o });
            var i = a(93064),
                r = a(14287),
                s = a(52733),
                n = a(83252),
                l = a(26433);
            let o = i.gK
                .model('TagPage', {
                    title: i.gK.maybe(i.gK.string),
                    errorStatusCode: i.gK.maybeNull(i.gK.number),
                    tagLoadingState: i.gK.enumeration(Object.values(n.GuX)),
                    playlistsData: i.gK.array(i.gK.model({ uid: i.gK.number, kind: i.gK.number })),
                    pagesLoader: (0, l.Ij)(s.$o),
                })
                .views((e) => {
                    let t = {
                        get isNeededToLoad() {
                            return e.tagLoadingState === n.GuX.IDLE;
                        },
                        get isResolved() {
                            return e.tagLoadingState === n.GuX.RESOLVE;
                        },
                        get isNotFound() {
                            let t = e.pagesLoader.isEmpty;
                            return (e.tagLoadingState === n.GuX.REJECT && (e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST)) || t;
                        },
                        get isSomethingWrong() {
                            return e.tagLoadingState === n.GuX.REJECT && !t.isNotFound;
                        },
                        get playlists() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, i.L3)(function* (t) {
                            let { page: a = 0, pageSize: l = 20 } = t,
                                { playlistsResource: o, modelActionsLogger: d } = (0, i._$)(e);
                            if (e.tagLoadingState === n.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a))
                                try {
                                    e.pagesLoader.setPageState(a, n.GuX.PENDING);
                                    let t = a * l,
                                        i = e.playlistsData.slice(t, t + l),
                                        r = yield o.getPlaylists({ playlistIds: i.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        d = { page: a, perPage: l, total: e.playlistsData.length },
                                        u = r.playlists.map(s.jX);
                                    e.pagesLoader.setItems(u, { page: a, pager: d });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: n.FlZ.ERROR, page: a }),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.tagLoadingState = n.GuX.IDLE), (e.title = void 0), (e.playlistsData = (0, i.wg)([])), (e.errorStatusCode = null);
                        },
                        getTag: (0, i.L3)(function* (a) {
                            let { id: s, page: l = 0, pageSize: o = 20 } = a,
                                { tagResource: d, modelActionsLogger: u } = (0, i._$)(e);
                            if (e.tagLoadingState !== n.GuX.PENDING)
                                try {
                                    var c;
                                    e.tagLoadingState = n.GuX.PENDING;
                                    let a = yield d.getPlaylistIds({ id: s });
                                    (e.title = null == (c = a.tag) ? void 0 : c.name),
                                        (e.playlistsData = (0, i.wg)(a.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.tagLoadingState !== n.GuX.IDLE && (e.tagLoadingState = n.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: l, pageSize: o });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.tagLoadingState !== n.GuX.IDLE && (e.tagLoadingState = n.GuX.REJECT);
                                }
                        }),
                    };
                    return t;
                });
            a(94716);
            var d = a(56440);
        },
        9567: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => N });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(61910),
                l = a(43426),
                o = a(31500),
                d = a(63585),
                u = a(8817),
                c = a(89511),
                h = a(82644),
                g = a(33276),
                m = a(21365),
                y = a(83252),
                p = a(80585),
                v = a(76310),
                S = a.n(v),
                P = a(47713),
                E = a(5956),
                f = a(97800),
                b = a(14114),
                _ = a.n(b);
            let I = (0, s.PA)(() => {
                var e;
                let {
                        myMusic: { downloadedTracks: t },
                    } = (0, y.Pjs)(),
                    a = (0, i.jsx)(f.Caption, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    r = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    r.push(
                        (0, i.jsx)(f.Caption, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, i.jsx)(P.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let s = Math.floor(t.tracksDurationInMinutes / 60),
                    l = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (s || l) &&
                        (r.push(a),
                        r.push(
                            (0, i.jsx)(f.Caption, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, i.jsx)(P.A, { id: 'time.hours-minutes', values: { hours: s, minutes: l } }),
                            }),
                        )),
                    (0, i.jsx)('div', { className: _().root, children: r.map((e, t) => (0, n.cloneElement)(e, { key: t })) })
                );
            });
            var k = a(12962),
                C = a.n(k);
            let T = (0, s.PA)(() => {
                let { isScrolling: e } = (0, n.useContext)(p.B9),
                    t = (0, y.W6M)(),
                    {
                        myMusic: { downloadedTracks: a },
                        settings: { isMobile: r },
                        slam: s,
                    } = (0, y.Pjs)(),
                    { from: l } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                    o = (0, y.PT7)(),
                    c = (0, y.brA)(),
                    { isPlaying: h, togglePlay: g } = (0, y.Dx4)({
                        playContextParams: {
                            contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: l },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    m = (0, u.c)(() => {
                        o() || (g(), c(!h));
                    });
                return (0, i.jsx)('header', {
                    className: C().root,
                    'aria-hidden': e,
                    children: (0, i.jsxs)('div', {
                        className: C().container,
                        children: [
                            !s.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, i.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, i.jsxs)('div', {
                                className: C().titleContainer,
                                children: [
                                    (0, i.jsx)(f.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: C().title,
                                        children: (0, i.jsx)(P.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, i.jsx)(I, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, i.jsx)(p.DM, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: h,
                                    onClick: m,
                                    className: C().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !r && (0, i.jsx)(P.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var A = a(61336),
                D = a.n(A);
            let L = (0, s.PA)(() =>
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(T, {}),
                            (0, i.jsxs)('div', {
                                className: D().root,
                                children: [
                                    (0, i.jsx)(E.Icon, { className: D().icon, size: 'l', variant: 'download' }),
                                    (0, i.jsx)(f.Heading, {
                                        className: D().title,
                                        variant: 'div',
                                        size: 'xs',
                                        children: (0, i.jsx)(P.A, { id: 'offline.downloaded-empty' }),
                                    }),
                                    (0, i.jsx)(f.Caption, {
                                        className: D().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(P.A, { id: 'offline.download-for-offline' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ),
                x = (0, s.PA)(() => {
                    let { isScrolling: e } = (0, n.useContext)(p.B9),
                        t = (0, y.W6M)(),
                        {
                            myMusic: { downloadedTracks: a },
                            settings: { isMobile: s },
                            slam: l,
                        } = (0, y.Pjs)(),
                        { from: o } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                        c = (0, y.brA)(),
                        h = (0, y.PT7)(),
                        { isPlaying: g, togglePlay: m } = (0, y.Dx4)({
                            playContextParams: {
                                contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: o },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        v = (0, u.c)(() => {
                            h() || (m(), c(!g));
                        });
                    return (0, i.jsx)(p.Y9, {
                        variant: p.Vw.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, i.jsxs)('div', {
                            className: C().container,
                            children: [
                                !l.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, i.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, i.jsx)(f.Heading, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: C().stickyTitle,
                                    children: (0, i.jsx)(P.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, i.jsx)(p.DM, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: g,
                                        onClick: v,
                                        className: (0, r.$)(C().playButton, { [C().stickyPlayButton]: !s }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !s && (0, i.jsx)(P.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, r.$)(C().stickyHeader, C().important),
                        staticClassName: (0, r.$)(C().staticHeader, C().important),
                    });
                }),
                N = (0, s.PA)(() => {
                    var e;
                    let t = (0, y.jRO)(),
                        { contentScrollRef: a, setContentScrollRef: s } = (0, y.gKY)(),
                        { formatMessage: v } = (0, l.A)(),
                        {
                            myMusic: { downloadedTracks: P },
                        } = (0, y.Pjs)(),
                        { from: E } = (0, y.fyy)({ pageId: y._Q$.OWN_TRACKS, blockId: y.UfI.TRACK_LIST }),
                        f = (0, y.wZZ)(),
                        b = (0, u.c)(() => {
                            t.tracksController && P.getData(t.tracksController);
                        });
                    (0, c.L)(b),
                        (0, n.useEffect)(() => {
                            P.isNeededToLoad && b();
                        }, [P.isNeededToLoad, b]),
                        (0, n.useEffect)(
                            () => () => {
                                P.reset();
                            },
                            [P],
                        ),
                        (0, y.Jzs)(P.isResolved);
                    let _ = (0, n.useMemo)(
                        () => ({ Header: () => (0, i.jsx)(T, {}), Footer: () => (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: S().footer }) }) }),
                        [],
                    );
                    if (P.loadingState === y.GuX.REJECT) return (0, i.jsx)(h.w, {});
                    if (P.isEmpty) return (0, i.jsx)(L, {});
                    let I = (null == (e = P.items) ? void 0 : e.length) || 10;
                    return (0, i.jsx)(y.nVz, {
                        pageId: y._Q$.DOWNLOADS_TRACKS,
                        children: (0, i.jsx)(g.hO, {
                            scrollElement: a,
                            children: (0, i.jsxs)('div', {
                                className: S().pageContainer,
                                children: [
                                    (0, i.jsx)(x, {}),
                                    (0, i.jsx)(p.$$, {
                                        context: { listAriaLabel: v({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, r.$)(S().root, S().important),
                                        listClassName: S().content,
                                        customComponents: _,
                                        totalCount: I,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = P.items) ? void 0 : t[e];
                                            return a
                                                ? (0, i.jsx)(
                                                      m.Kt,
                                                      {
                                                          track: a,
                                                          playContextParams: f(a.id, {
                                                              contextData: { type: d.K.Various, meta: { id: y._Q$.DOWNLOADS_TRACKS }, from: E },
                                                              entitiesData: P.entitiesData,
                                                              queueParams: { index: e, entityId: a.id },
                                                              loadContextMeta: !1,
                                                          }),
                                                      },
                                                      a.id,
                                                  )
                                                : (0, i.jsx)(p.DS, { isActive: !0, className: S().trackShimmer, variant: y.Xjt.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: I,
                                        handleRef: s,
                                        shouldTriggerRangeChangedOn: [I],
                                        testId: o.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        11189: (e, t, a) => {
            'use strict';
            a.d(t, { bp: () => E, A6: () => G, Bd: () => c });
            var i = a(93064);
            let r = i.gK.model('ConcertDescription', { text: i.gK.string, genre: i.gK.maybe(i.gK.string), source: i.gK.maybe(i.gK.string) });
            var s = a(14287),
                n = a(6664),
                l = a(63695),
                o = a(77217),
                d = a(83252),
                u = a(26433);
            let c = i.gK
                .compose(
                    i.gK.model('ConcertPage', {
                        meta: i.gK.maybeNull(o.aR),
                        covers: i.gK.maybeNull(i.gK.array(u.$B)),
                        description: i.gK.maybeNull(r),
                        leadArtistId: i.gK.maybeNull(i.gK.union(i.gK.string, i.gK.number)),
                        artists: i.gK.maybeNull(i.gK.array(l.PK)),
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        landing: n.Ju,
                    }),
                    u.XT,
                    u.pl,
                )
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get isNotFound() {
                        return e.isRejected && (e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST);
                    },
                    get coversUri() {
                        var t, a;
                        return null != (a = null == (t = e.covers) ? void 0 : t.map((e) => e.uri).filter((e) => !!e)) ? a : [];
                    },
                }))
                .actions((e) => ({
                    getInfo: (0, i.L3)(function* (t) {
                        let { concertId: a } = t,
                            { concertsResource: r, modelActionsLogger: n } = (0, i._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = d.GuX.PENDING;
                                let { concert: t, minPrice: s, covers: n, description: u, leadArtistId: c, artists: h } = yield r.getInfo({ concertId: a });
                                (e.meta = (0, o.ho)(t, s)),
                                    (e.covers = (0, i.wg)(null == n ? void 0 : n.map((e) => (0, d.pX4)(e)))),
                                    (e.description = u ? (0, i.wg)(u) : null),
                                    (e.leadArtistId = c ? (0, i.wg)(c) : null),
                                    (e.artists = (0, i.wg)(null == h ? void 0 : h.map((e) => (0, l.dM)(e)))),
                                    (e.loadingState = d.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t),
                                    t instanceof s.GX && (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) && (e.errorStatusCode = s.X1.NOT_FOUND),
                                    (e.loadingState = d.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = d.GuX.IDLE), e.landing.reset(), (e.leadArtistId = null), e.destroyItems([e.covers, e.description, e.artists]);
                    },
                }));
            var h = a(54486),
                g = a(28303),
                m = a(61910),
                y = a(43426),
                p = a(42421),
                v = a(79087),
                S = a.n(v);
            let P = (0, g.PA)(() => {
                    let { experiments: e, concert: t } = (0, d.Pjs)(),
                        { formatMessage: a } = (0, y.A)(),
                        i = e.checkExperiment(d.zal.WebNextConcertPage, 'on');
                    if (
                        ((0, d.ACS)(),
                        (0, m.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !i)
                    )
                        return (0, h.jsx)(p.M, {});
                    let r = a({ id: 'page-error.concert-page-does-not-exist' }),
                        s = a({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, h.jsx)(p.M, { title: r, description: s, iconVariant: 'attention', iconSize: 'xxl', iconClassName: S().icon });
                }),
                E = (0, g.PA)(() => (0, h.jsx)(d.nVz, { pageId: d._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, h.jsx)(P, {}) }));
            var f = a(97396),
                b = a(9348),
                _ = a(43350),
                I = a(31500),
                k = a(6024),
                C = a(8817),
                T = a(35537),
                A = a(27510),
                D = a(56231),
                L = a(17656),
                x = a(82644),
                N = a(33276),
                R = a(80585),
                w = a(62395),
                M = a(42670),
                O = a.n(M);
            let F = (0, g.PA)((e) => {
                    var t, a, i;
                    let { concertId: r, isWebNextNavigationOn: s } = e,
                        {
                            experiments: l,
                            concert: o,
                            modals: { imageSliderModal: u },
                        } = (0, d.Pjs)(),
                        c = (() => {
                            let e = (0, w.st)(),
                                t = (0, d.UlF)(),
                                { pageId: a } = (0, d.$au)(),
                                { hash: i } = (0, w.gf)();
                            return (0, C.c)((r, s) => {
                                if (!e || !a) return;
                                let n = { hash: i, pageId: a, pageStyle: _.QL.Fullscreen, pagePlacement: _.c4.Fullscreen, viewUuid: s, mainObjectType: _.ky.Concert },
                                    l = (0, _.Fx)({ params: n, logger: t, context: 'useSendEventOnConcertOpenedOrClosed' });
                                l && (r ? (0, _.Fn)(e.evgenInstance, l) : (0, _.PO)(e.evgenInstance, l));
                            });
                        })(),
                        g = (0, m.useRef)(String((0, b.A)())),
                        { setContentScrollRef: y, contentScrollRef: p } = (0, d.gKY)(),
                        { forceUpdateRefCallback: v, offsetY: S } = (0, T.G)(p),
                        P = (0, d.ytd)(null == (a = o.covers) || null == (t = a[0]) ? void 0 : t.color),
                        { topColorStyle: E, headerStyle: M } = (0, N.QZ)(P, S, s),
                        F = (0, C.c)(() => {
                            o.coversUri.length > 0 && u.openImages({ images: o.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        G = l.checkExperiment(d.zal.WebNextConcertPage, 'on');
                    (0, d.ACS)(),
                        (0, m.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o, r],
                        ),
                        (0, m.useEffect)(() => {
                            let e = g.current;
                            return (
                                c(!0, e),
                                () => {
                                    c(!1, e);
                                }
                            );
                        }, [c]),
                        (0, d.Jzs)(o.isResolved);
                    let K = [];
                    if (
                        (o.isNeededToLoad && K.push(o.getInfo({ concertId: r })),
                        o.landing.isNeededToLoad && K.push(o.landing.getConcertSkeleton({ concertId: r, skeletonId: k.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        K.length && (0, m.use)(Promise.allSettled(K)),
                        (!G || o.isNotFound) && (0, f.notFound)(),
                        o.isRejected)
                    )
                        return (0, h.jsx)(x.w, {});
                    let j = (0, A.L)(() => {
                        var e, t, a;
                        return o.isLoading || !o.meta || o.isRejected
                            ? (0, h.jsx)(L.c6, { className: O().header, isActive: !0 })
                            : (0, h.jsx)(d.Bki, {
                                  objectType: _.ky.Concert,
                                  objectId: null == (e = o.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: _.ky.Concert,
                                  mainObjectId: null == (t = o.meta) ? void 0 : t.id,
                                  children: (0, h.jsx)(L.Dc, {
                                      description: o.description,
                                      onCoverClick: F,
                                      leadArtistId: o.leadArtistId,
                                      ref: v,
                                      className: O().header,
                                      concert: o.meta,
                                      cover: null == (a = o.covers) ? void 0 : a[0],
                                  }),
                              });
                    });
                    return (0, h.jsx)(d.jPc, {
                        children: (0, h.jsxs)(N.hO, {
                            scrollElement: p,
                            children: [
                                (0, h.jsx)(R.Y9, { style: M, variant: R.Vw.INNER, showControls: !1 }),
                                (0, h.jsx)('div', { className: O().averageColorBackground, style: E }),
                                (0, h.jsxs)(D.N, {
                                    ref: y,
                                    className: O().root,
                                    containerClassName: O().container,
                                    ...(0, I.Am)(I.Xk.concert.CONCERT_PAGE),
                                    children: [
                                        (0, h.jsxs)('div', {
                                            children: [
                                                (0, h.jsx)(d.hjC, {
                                                    tabId: '',
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, h.jsx)(d.FoH, {
                                                        blockId: _.LA.ConcertHeader,
                                                        blockType: _.LA.ConcertHeader,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: _.ky.Concert,
                                                        mainObjectId: null == (i = o.meta) ? void 0 : i.id,
                                                        children: j,
                                                    }),
                                                }),
                                                (0, h.jsx)(n.EA, {
                                                    containerClassName: O().skeleton,
                                                    landing: o.landing,
                                                    errorComponent: (0, h.jsx)(x.w, { className: O().error, withBackwardControl: !1 }),
                                                }),
                                            ],
                                        }),
                                        (0, h.jsx)(R.A, { children: (0, h.jsx)(R.wi, { className: O().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                G = (0, g.PA)((e) => (0, h.jsx)(d.nVz, { pageId: d._Q$.CONCERT, pageEntityId: e.concertId, children: (0, h.jsx)(F, { ...e }) }));
        },
        11723: (e, t, a) => {
            'use strict';
            function i(e) {
                let { genreTitle: t, artists: a, messageFormatter: i } = e,
                    r = null;
                return (
                    Array.isArray(a) &&
                        (r = a
                            .slice(0, 3)
                            .map((e) => ('artist' in e ? e.artist.name : e.name))
                            .join(', ')),
                    r ? i({ id: 'metadata.genre-description' }, { genreTitle: t, artistsList: r }) : i({ id: 'metadata.genre-description-short' }, { genreTitle: t })
                );
            }
            a.d(t, { f: () => i });
        },
        12393: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
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
        13127: (e, t, a) => {
            'use strict';
            a.d(t, { jM: () => g.KidsCategoryPage, u3: () => m.KidsEditorialAlbumsPage, bU: () => y.KidsEditorialPlaylistsPage, GY: () => h });
            var i = a(83252),
                r = a(93064),
                s = a(14287),
                n = a(46423),
                l = a(26433);
            let o = r.gK
                .compose(
                    r.gK.model('KidsEditorialAlbumPage', {
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        title: r.gK.maybeNull(r.gK.string),
                        albumsData: r.gK.array(r.gK.model({ id: r.gK.number })),
                        pagesLoader: (0, l.Ij)(n.GI),
                    }),
                    l.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get albums() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getAlbums: (0, r.L3)(function* (t) {
                            let { page: a = 0, pageSize: l = 20 } = t,
                                { albumResource: o, modelActionsLogger: d } = (0, r._$)(e);
                            if (e.loadingState === i.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, i.GuX.PENDING);
                                try {
                                    let t = a * l,
                                        i = e.albumsData.slice(t, t + l).map((e) => e.id),
                                        r = yield o.getAlbums({ albumIds: i }),
                                        s = { page: a, perPage: l, total: e.albumsData.length },
                                        d = r.map(n.e7);
                                    e.pagesLoader.setItems(d, { page: a, pager: s });
                                } catch (t) {
                                    d.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: i.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, r.L3)(function* (a) {
                            let { id: n, page: l = 0, pageSize: o = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, r._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var c;
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield d.getEditorialAlbum({ id: n });
                                    (e.title = a.title),
                                        (e.albumsData = (0, r.wg)((null != (c = a.entities) ? c : []).map((e) => ({ id: e })))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE),
                                        yield t.getAlbums({ page: l, pageSize: o });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.albumsData = (0, r.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var d = a(52733);
            let u = r.gK
                .compose(
                    r.gK.model('KidsEditorialPlaylistPage', {
                        errorStatusCode: r.gK.maybeNull(r.gK.number),
                        title: r.gK.maybeNull(r.gK.string),
                        playlistsData: r.gK.array(r.gK.model({ uid: r.gK.number, kind: r.gK.number })),
                        pagesLoader: (0, l.Ij)(d.$o),
                    }),
                    l.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST,
                                a = e.pagesLoader.isEmpty;
                            return (e.isRejected && t) || a;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                        get playlists() {
                            var a;
                            return null != (a = e.pagesLoader.items) ? a : [];
                        },
                    };
                    return t;
                })
                .actions((e) => {
                    let t = {
                        getPlaylists: (0, r.L3)(function* (t) {
                            let { page: a = 0, pageSize: n = 20 } = t,
                                { playlistsResource: l, modelActionsLogger: o } = (0, r._$)(e);
                            if (e.loadingState === i.GuX.RESOLVE && e.pagesLoader.isPageNeedToLoad(a)) {
                                e.pagesLoader.setPageState(a, i.GuX.PENDING);
                                try {
                                    let t = a * n,
                                        i = e.playlistsData.slice(t, t + n),
                                        r = yield l.getPlaylists({ playlistIds: i.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                        s = { page: a, perPage: n, total: e.playlistsData.length },
                                        o = r.playlists.map(d.jX);
                                    e.pagesLoader.setItems(o, { page: a, pager: s });
                                } catch (t) {
                                    o.error(t),
                                        e.pagesLoader.setItems(null, { responseStatus: i.FlZ.ERROR, page: a }),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                            }
                        }),
                        getData: (0, r.L3)(function* (a) {
                            let { id: n, page: l = 0, pageSize: o = 20 } = a,
                                { childrenLandingResource: d, modelActionsLogger: u } = (0, r._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    var c;
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield d.getEditorialPlaylist({ id: n });
                                    (e.title = a.title),
                                        (e.playlistsData = (0, r.wg)((null != (c = a.entities) ? c : []).map((e) => ({ uid: e.uid, kind: e.kind })))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE),
                                        yield t.getPlaylists({ page: l, pageSize: o });
                                } catch (t) {
                                    u.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.title = null), e.pagesLoader.reset(), (e.playlistsData = (0, r.wg)([])), (e.errorStatusCode = null);
                        },
                    };
                    return t;
                });
            var c = a(6664);
            let h = r.gK.model('KidsPage', { landing: c.Ju, kidsEditorialPlaylistSubpage: u, kidsEditorialAlbumSubpage: o });
            var g = a(25945),
                m = a(1019),
                y = a(49841);
            a(67923), a(75669);
        },
        14114: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        14741: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => _, _: () => l });
            var i = a(93064),
                r = a(77217),
                s = a(83252),
                n = a(26433);
            let l = i.gK
                .compose(i.gK.model('ConcertsDetailsPage', { concerts: i.gK.maybeNull(i.gK.array(r.aR)), title: i.gK.maybeNull(i.gK.string) }), n.XT, n.pl)
                .views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t) {
                        let { type: a, id: n } = t,
                            { concertsResource: l, modelActionsLogger: o } = (0, i._$)(e);
                        if (!e.isLoading)
                            try {
                                e.loadingState = s.GuX.PENDING;
                                let { items: t } = yield l.getConcertsDetails({ type: a, id: n });
                                (e.concerts = (0, i.wg)(t.map((e) => (0, r.HN)(e)))), (e.loadingState = s.GuX.RESOLVE);
                            } catch (t) {
                                o.error(t), (e.loadingState = s.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.GuX.IDLE), (e.title = null), e.destroyItems([e.concerts]);
                    },
                }));
            var o = a(54486),
                d = a(28303),
                u = a(97396),
                c = a(61910),
                h = a(43426),
                g = a(8817),
                m = a(67648),
                y = a(56231),
                p = a(97800),
                v = a(82644),
                S = a(33276),
                P = a(24188),
                E = a(80585),
                f = a(25566),
                b = a.n(f);
            let _ = (0, d.PA)((e) => {
                let { type: t, id: a } = e,
                    i = (0, c.useId)(),
                    { concertsDetails: n, experiments: l } = (0, s.Pjs)(),
                    { formatMessage: d } = (0, h.A)(),
                    { contentScrollRef: f, setContentScrollRef: _ } = (0, s.gKY)(),
                    I = (0, s.W6M)(),
                    [k, C] = (0, m.d)(),
                    T = (0, s.fBs)(),
                    A = (0, c.useRef)(!1),
                    D = (0, g.c)(() => {
                        var e;
                        return !n.isShimmerVisible && (null == (e = n.concerts) ? void 0 : e.length) ? n.concerts.length : 50;
                    }),
                    {
                        virtualizer: L,
                        rowResizeObserver: x,
                        columnCount: N,
                        indices: R,
                    } = (0, P.LW)({
                        count: D(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: k,
                    }),
                    w = { '--feed-concerts-height': ''.concat(L.getTotalSize(), 'px'), '--feed-concerts-column-count': N },
                    M = (0, c.useCallback)(
                        (e) => {
                            var t;
                            let a = null == (t = n.concerts) ? void 0 : t[e];
                            return !a || n.isShimmerVisible ? (0, o.jsx)(r.LY, { isActive: n.isShimmerActive }) : (0, o.jsx)(r.Qb, { concert: a });
                        },
                        [n.concerts, n.isShimmerActive, n.isShimmerVisible],
                    );
                if (
                    ((0, c.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    (0, c.useEffect)(() => {
                        n.isResolved && !A.current && (T(), (A.current = !0));
                    }, [n.isResolved, T]),
                    n.isNeededToLoad && (0, c.use)(n.getData({ type: t, id: a })),
                    (!l.checkExperiment(s.zal.WebNextConcertsDetailsPage, 'on') || l.checkExperiment(s.zal.disableAllConcerts, 'on')) && (0, u.notFound)(),
                    n.isRejected)
                )
                    return (0, o.jsx)(v.w, {});
                let O = d({ id: 'concerts.details-title' });
                return (0, o.jsx)(S.hO, {
                    scrollElement: f,
                    outerTitle: O,
                    children: (0, o.jsxs)('div', {
                        className: b().root,
                        children: [
                            (0, o.jsx)(E.Y9, {
                                variant: E.Vw.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: I.canBack,
                                children: (0, o.jsx)(p.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                            }),
                            (0, o.jsxs)(y.N, {
                                ref: _,
                                className: b().scrollContainer,
                                children: [
                                    (0, o.jsx)('div', {
                                        className: b().content,
                                        children: (0, o.jsx)('div', {
                                            'aria-labelledby': i,
                                            ref: C,
                                            style: w,
                                            className: b().container,
                                            children: L.getVirtualItems().map((e) =>
                                                (0, o.jsx)(
                                                    P.Ux,
                                                    {
                                                        className: b().row,
                                                        columnClassName: b().column,
                                                        virtualItem: e,
                                                        resizeObserver: x,
                                                        indices: R,
                                                        renderItemByIndex: M,
                                                        scrollMargin: L.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, o.jsx)(E.A, { children: (0, o.jsx)(E.wi, { className: b().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        15163: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => i });
            let i = (e) => {
                if ('number' == typeof e && !Number.isNaN(e)) return e;
                if ('string' == typeof e) {
                    let t = Number.parseInt(e, 10);
                    if (!Number.isNaN(t)) return t;
                }
            };
        },
        15782: (e, t, a) => {
            'use strict';
            a.d(t, { AdvertProvider: () => u });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(89461),
                l = a(82391),
                o = a(83252);
            let d = null,
                u = (0, r.PA)((e) => {
                    var t, a;
                    let { children: r } = e,
                        { advert: u, experiments: c, user: h, location: g, sonataState: m } = (0, o.Pjs)(),
                        y = (0, o.UlF)();
                    return (!d &&
                        h.isAuthorized &&
                        c.checkExperiment(o.zal.WebNextAudioVideoAdvert, 'on') &&
                        ((d = new o.vaf({ logger: y, videoSlotId: l.so.SLOT, videoElementId: l.so.VIDEO })).setVideoContentUrl(
                            (null == (a = m.entityMeta) ? void 0 : a.url) || null,
                        ),
                        d.setVideoContentDuration(m.duration)),
                    (0, s.useEffect)(() => {
                        null == d || d.init(g.tld);
                    }, [g.tld]),
                    (0, s.useEffect)(() => {
                        var e;
                        null == d || d.setVideoContentUrl((null == (e = m.entityMeta) ? void 0 : e.url) || null), null == d || d.setVideoContentDuration(m.duration);
                    }, [null == (t = m.entityMeta) ? void 0 : t.url, m.duration]),
                    (0, s.useEffect)(() => {
                        if (!c.checkExperiment(o.zal.WebNextAudioVideoAdvert, 'on') || !h.isAuthorized) return;
                        let e =
                            null == d
                                ? void 0
                                : d.state.isAdvertPlaying.onChange((e) => {
                                      if ((u.setAdvertShown(e), e)) {
                                          var t, a;
                                          u.setType((null == d || null == (t = d.state.advertData) ? void 0 : t.type) || null),
                                              u.setData((null == d || null == (a = d.state.advertData) ? void 0 : a.data) || null);
                                      } else u.reset();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [u, c, h.isAuthorized]),
                    (0, s.useEffect)(() => {
                        let e;
                        if (u.isAdvertPlaybackCreated) {
                            var t;
                            e =
                                null == d || null == (t = d.audioAdvertPlayback)
                                    ? void 0
                                    : t.state.playerState.event.onChange((e) => {
                                          if (u.isAdvertShown) {
                                              if ((e === n.Iu.END && (u.setAdvertShown(!1), null == d || d.state.setDefaultState()), e === n.Iu.PLAYING))
                                                  return void u.setAdvertPlaying(!0);
                                              if (e === n.Iu.END || e === n.Iu.PAUSED) return void u.setAdvertPlaying(!1);
                                          }
                                      });
                        }
                        return () => {
                            null == e || e();
                        };
                    }, [u, u.isAdvertPlaybackCreated]),
                    (0, s.useEffect)(
                        () => () => {
                            u.reset();
                        },
                        [u],
                    ),
                    c.checkExperiment(o.zal.WebNextAudioVideoAdvert, 'on') && h.isAuthorized)
                        ? (0, i.jsx)(o.p8J.Provider, { value: d, children: r })
                        : r;
                });
        },
        16173: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { WebInitializer: () => l });
            var i = a(54486),
                r = a(28303),
                s = a(83252);
            let n = (0, r.PA)((e) => {
                    let { children: t, userIp: a } = e,
                        { location: i } = (0, s.Pjs)();
                    return t;
                }),
                l = (e) => {
                    let { userIp: t } = e;
                    return (0, i.jsx)(n, { userIp: t });
                };
        },
        16371: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SonataProvider: () => ro });
            var i,
                r,
                s,
                n,
                l,
                o,
                d,
                u,
                c,
                h,
                g,
                m,
                y,
                p,
                v,
                S,
                P,
                E,
                f,
                b,
                _,
                I,
                k,
                C,
                T,
                A,
                D,
                L,
                x = a(54486),
                N = a(18542),
                R = a(28303),
                w = a(61910),
                M = a(15209),
                O = a(96559),
                F = a(89461),
                G = a(8075),
                K = a(5693),
                j = a(79899),
                X = a(26688);
            !(function (e) {
                (e.PLAYING = 'playing'), (e.NOT_PLAYING = 'not-playing');
            })(i || (i = {}));
            let U = (e) =>
                !!(
                    'object' == typeof e &&
                    e &&
                    'streamProgress' in e &&
                    'object' == typeof e.streamProgress &&
                    e.streamProgress &&
                    'endPositionSec' in e.streamProgress &&
                    'number' == typeof e.streamProgress.endPositionSec
                );
            class B {
                set playId(e) {
                    this.entityPlayId = e;
                }
                get playId() {
                    return this.entityPlayId;
                }
                set addTracksToPlayerTime(e) {
                    this.entityAddTracksToPlayerTime = e;
                }
                get addTracksToPlayerTime() {
                    return this.entityAddTracksToPlayerTime;
                }
                get totalPlayedSeconds() {
                    return (function (e) {
                        let t,
                            a,
                            r = 0,
                            s = [];
                        if (0 !== e.length) {
                            for (let r of (function (e) {
                                let t = [];
                                for (; 0 !== e.length; ) {
                                    let a = e.shift();
                                    if (a && a.stage === i.PLAYING) {
                                        let e = t[t.length - 1];
                                        (e && e.stage !== i.NOT_PLAYING) || t.push(a);
                                    } else if (a && a.stage === i.NOT_PLAYING) {
                                        let e = t[t.length - 1];
                                        e && e.stage === i.PLAYING && t.push(a);
                                    }
                                }
                                let a = t[t.length - 1];
                                return a && a.stage === i.PLAYING && t.push({ stage: i.NOT_PLAYING, perfNow: performance.now(), ts: Date.now() }), t;
                            })(e))
                                r.stage === i.PLAYING ? (t = r.perfNow) : (a = r.perfNow), t && a && (s.push(a - t), (t = void 0), (a = void 0));
                            for (let e of s) r += e;
                            return Math.round((r / 1e3 + Number.EPSILON) * 1e3) / 1e3;
                        }
                        return r;
                    })([...this.entityTimeStagesOfPlayback]);
                }
                get timeStagesOfPlayback() {
                    return this.entityTimeStagesOfPlayback;
                }
                saveTimeStageOfPlayback(e) {
                    let t = { stage: e.stage, perfNow: performance.now(), ts: Date.now() };
                    e.reason && (t.reason = e.reason), this.entityTimeStagesOfPlayback.push(t);
                }
                clearTimeStagesOfPlayback() {
                    this.entityTimeStagesOfPlayback = [];
                }
                get data() {
                    return this.entityData;
                }
                get isAvailable() {
                    return !!('available' in this.entityData.meta && this.entityData.meta.available);
                }
                get isDisliked() {
                    return void 0 !== this.likeStore && this.likeStore.isTrackDisliked(this.entityData.meta.id);
                }
                get isExplicit() {
                    return 'contentWarning' in this.entityData.meta && this.entityData.meta.contentWarning === j.K.EXPLICIT;
                }
                get everFinished() {
                    return U(this.entityData.meta) ? this.entityData.meta.streamProgress.everFinished : null;
                }
                set everFinished(e) {
                    U(this.entityData.meta) && null !== e && (this.entityData.meta.streamProgress.everFinished = e);
                }
                hasPlayId() {
                    return '' !== this.playId;
                }
                constructor(e) {
                    (0, O._)(this, 'entityData', void 0),
                        (0, O._)(this, 'likeStore', void 0),
                        (0, O._)(this, 'entityPlayId', ''),
                        (0, O._)(this, 'entityAddTracksToPlayerTime', ''),
                        (0, O._)(this, 'entityTimeStagesOfPlayback', []),
                        (0, O._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, O._)(this, 'mediaSourceData', null),
                        (0, O._)(this, 'expectedQuality', null),
                        (0, O._)(this, 'startPosition', null),
                        (0, O._)(this, 'contentType', X.e.AUDIO),
                        (0, O._)(this, 'hidden', !1),
                        (this.entityData = e.data),
                        (this.likeStore = e.likeStore);
                }
            }
            class V extends B {}
            class W extends B {
                constructor(...e) {
                    super(...e), (0, O._)(this, 'contentType', X.e.DOWNLOADED_AUDIO);
                }
            }
            class q extends B {}
            class Y extends B {
                get isAvailable() {
                    return !1;
                }
                get isDisliked() {
                    return !1;
                }
            }
            var H = a(56258);
            class z extends H.t {
                constructor(e, { code: t = 'E_ENTITY_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'EntityFactoryException'), Object.setPrototypeOf(this, z.prototype);
                }
            }
            class Q extends B {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, O._)(this, 'contentType', X.e.HLS);
                }
            }
            class $ extends B {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
            }
            class Z extends B {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, O._)(this, 'contentType', X.e.CLIP);
                }
            }
            class J extends B {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    super(...e), (0, O._)(this, 'contentType', X.e.HLS);
                }
            }
            class ee {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
                    try {
                        switch (a.type) {
                            case K.R.Music:
                                t = new V({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.DownloadedMusic:
                                t = new W({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.VibeTrack:
                                t = new q({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.Generative:
                                t = new Q({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.SmartPreview:
                                t = new $({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.Clip:
                                t = new Z({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.Radio:
                                t = new J({ data: a, likeStore: this.likeStore });
                                break;
                            case K.R.Unknown:
                                a.meta.type, G.S.MUSIC, (t = new V({ data: { ...a, type: K.R.Music }, likeStore: this.likeStore }));
                                break;
                            case F.z4.Unloaded:
                                t = new Y({ data: a, likeStore: this.likeStore });
                        }
                    } catch (e) {
                        throw new z('Error while creating entity', { cause: e, data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new z('Cannot create entities with nonexistent type', { code: 'E_NONEXISTENT_ENTITY_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, O._)(this, 'likeStore', void 0), (this.likeStore = e.likeStore);
                }
            }
            var et = a(63585);
            function ea(e, t) {
                let a = [];
                for (let i of e) for (let e of i) a.push({ type: F.z4.Unloaded, meta: e, additional: t });
                return a;
            }
            var ei = a(87965);
            class er extends H.t {
                constructor(e, { code: t = 'E_CONTEXT', name: a, ...i } = {}) {
                    super(e, { code: t, ...i }),
                        (0, O._)(this, 'name', void 0),
                        (this.name = null != a ? a : 'ContextException'),
                        Object.setPrototypeOf(this, er.prototype);
                }
            }
            class es extends F.EX {
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                get availableActions() {
                    return this.actions;
                }
                logError(e) {
                    let t,
                        { name: a, message: i = 'Error in YaMusicContext', data: r, cause: s, originalError: n } = e;
                    (t = n instanceof H.t ? n : new er(i, { name: a, cause: (0, M.createObjectFromError)(s), data: r })),
                        this.logger.error(t, { ...t.data, code: t.code, cause: t.cause, stack: t.stack, message: t.message });
                }
                constructor({ logger: e }) {
                    super(),
                        (0, O._)(this, 'isCurrent', !1),
                        (0, O._)(this, 'actions', {
                            moveBackward: new ei.cJ(!1),
                            moveForward: new ei.cJ(!0),
                            repeat: new ei.cJ(null),
                            shuffle: new ei.cJ(null),
                            speed: new ei.cJ(null),
                        }),
                        (0, O._)(this, 'from', ''),
                        (0, O._)(this, 'utmLink', void 0),
                        (0, O._)(this, 'logger', void 0),
                        (this.logger = e);
                }
            }
            function en(e, t) {
                return e.map((e) => ({ type: K.R.SmartPreview, meta: e, additional: t }));
            }
            class el extends es {
                loadTrailer() {
                    return this.albumsResource
                        .getTrailer({ albumId: Number(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new er('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return this.albumsResource
                        .getAlbumWithRichTracks({ albumId: Number(this.contextData.meta.id), resumeStream: !0 })
                        .then((e) => ((this.contextData.meta = e), e))
                        .catch((e) => {
                            throw new er('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => en(t.trailer.tracks, e))
                        : this.contextData.meta.volumes
                          ? Promise.resolve(ea(this.contextData.meta.volumes, e))
                          : this.loadContextMeta().then((t) => Promise.resolve(ea(t.volumes, e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                get resumeFromIndex() {
                    var e;
                    if ((null == (e = this.contextData.meta.resumeFrom) ? void 0 : e.trackId) && Array.isArray(this.contextData.meta.volumes)) {
                        let e = [].concat(...this.contextData.meta.volumes).findIndex((e) => {
                            var t;
                            return String(e.id) === String(null == (t = this.contextData.meta.resumeFrom) ? void 0 : t.trackId);
                        });
                        if (e >= 0) return e;
                    }
                    return null;
                }
                constructor(e) {
                    super(e), (0, O._)(this, 'contextData', void 0), (0, O._)(this, 'albumsResource', void 0), (0, O._)(this, 'variables', void 0);
                    let { data: t, albumsResource: a, variables: i } = e;
                    (this.albumsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = i);
                }
            }
            var eo = a(70392);
            class ed extends es {
                loadTrailer() {
                    let { uid: e, kind: t } = (0, eo.I)(this.contextData.meta.id);
                    return this.usersResource
                        .getPlaylistTrailer({ userId: e, playlistKind: t })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new er('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.contextData.meta.uuid,
                        { uid: t, kind: a } = (0, eo.I)(this.contextData.meta.id),
                        i = 3 === a;
                    return (
                        i && void 0 !== e
                            ? this.playlistResource.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 })
                            : this.usersResource.getPlaylistWithTracksIds({ userId: t, playlistKind: a, resumeStream: !1, trackMetaType: i ? 'music' : void 0 })
                    )
                        .then((e) => {
                            let t,
                                a,
                                i = { ...e, id: ((t = e.uid), (a = e.kind), ''.concat(t, ':').concat(a)) };
                            return (this.contextData.meta = i), i;
                        })
                        .catch((e) => {
                            throw new er('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => en(t.trailer.tracks, e));
                    if (this.contextData.meta.tracks) {
                        let t = [];
                        for (let a of this.contextData.meta.tracks) t.push({ type: F.z4.Unloaded, meta: a, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        for (let i of t.tracks) a.push({ type: F.z4.Unloaded, meta: i, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, O._)(this, 'contextData', void 0),
                        (0, O._)(this, 'usersResource', void 0),
                        (0, O._)(this, 'playlistResource', void 0),
                        (0, O._)(this, 'variables', void 0);
                    let { data: t, playlistResource: a, usersResource: i, variables: r } = e;
                    (this.usersResource = i), (this.playlistResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r);
                }
            }
            class eu extends es {
                loadTrailer() {
                    return this.artistsResource
                        .getTrailer({ artistId: String(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new er('Error in ArtistContext', {
                                code: 'E_ARTIST_LOAD_TRAILER',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return (
                        this.artistsResource
                            .getBriefInfo({ artistId: String(this.contextData.meta.id), discographyBlockEnabled: !1, fetchPlaylistLikesCounts: !1 })
                            .then((e) => {
                                this.contextData.meta.artist = e.artist;
                            })
                            .catch((e) => {
                                throw new er('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, M.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            }),
                        this.artistsResource
                            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
                            .then((e) => ((this.contextData.meta.trackIds = e), this.contextData.meta))
                            .catch((e) => {
                                throw new er('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, M.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            })
                    );
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => en(t.trailer.tracks, e));
                    if (this.contextData.meta.trackIds) {
                        let t = [];
                        for (let a of this.contextData.meta.trackIds) t.push({ type: F.z4.Unloaded, meta: { id: a }, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        if (t.trackIds) for (let i of t.trackIds) a.push({ type: F.z4.Unloaded, meta: { id: i }, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, O._)(this, 'contextData', void 0), (0, O._)(this, 'artistsResource', void 0), (0, O._)(this, 'variables', void 0);
                    let { data: t, artistsResource: a, variables: i } = e;
                    (this.artistsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = i);
                }
            }
            var ec = a(84321);
            function eh(e) {
                let { sequence: t, batchId: a, radioSessionId: i, additional: r } = e,
                    s = [];
                for (let e of t)
                    s.push({
                        type: K.R.VibeTrack,
                        additional: r,
                        batchId: a,
                        radioSessionId: i,
                        meta: { ...e.track, liked: e.liked, trackParameters: e.trackParameters },
                        fromCurrentContext: !0,
                        wasPlayed: !1,
                    });
                return s;
            }
            var eg = a(54906);
            let em = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                ey = (e) => em.test(String(e)),
                ep = (e) => {
                    let { meta: t } = e.data,
                        a = 'trackSource' in t ? t.trackSource : void 0;
                    return void 0 !== a ? a === eg.J.UGC || a === eg.J.OWN_REPLACED_TO_UGC : ey(t.id);
                };
            function ev(e) {
                var t;
                let a;
                if (!(a = e.data.type === F.z4.Unloaded ? e.data.meta.id : 'realId' in e.data.meta ? e.data.meta.realId : e.data.meta.id))
                    throw new H.t('Can not create trackId for entity.');
                let i = 'albums' in e.data.meta ? e.data.meta.albums : [];
                return i && (null == (t = i[0]) ? void 0 : t.id) ? ''.concat(a, ':').concat(i[0].id) : String(a);
            }
            function eS(e) {
                return (null == e ? void 0 : e.data.type) === K.R.VibeTrack;
            }
            function eP(e, t) {
                let a = null,
                    i = null;
                for (let r = e.length - 1; r >= 0; r--) {
                    let s = e[r];
                    if (!s || !eS(s.entity)) continue;
                    let { entity: n, sourceContext: l } = s;
                    if (!l) {
                        if (n.data.wasPlayed || t === r) break;
                        (a = s), (i = r);
                    }
                }
                let r = null !== i ? i + 1 : e.length;
                return { vibeHistory: e.slice(0, r), firstNotPlayedVibeEntity: a, firstNotPlayedVibeEntityIndex: i };
            }
            function eE(e, t) {
                let { vibeHistory: a } = eP(e, t);
                return a.filter((e) => !ep(e.entity)).map((e) => ev(e.entity));
            }
            var ef = a(52509);
            let eb = 'user:onyourwave';
            function e_() {
                return new Date().toISOString();
            }
            function eI(e) {
                let t,
                    a,
                    i,
                    { entity: r, type: s, from: n } = e;
                'batchId' in r.data && void 0 !== r.data.batchId && (t = r.data.batchId);
                try {
                    switch (s) {
                        case ec.O.RADIO_STARTED:
                            i = { event: { type: s, timestamp: e_(), from: n }, from: n };
                            break;
                        case ec.O.TRACK_STARTED:
                        case ec.O.LIKE:
                        case ec.O.UNLIKE:
                        case ec.O.UNDISLIKE:
                            i = { batchId: t, event: { type: s, timestamp: e_(), trackId: ev(r) }, from: n };
                            break;
                        case ec.O.TRACK_FINISHED:
                            if (eS(r) && r.data.meta.durationMs) {
                                let e = r.data.meta.durationMs / 1e3;
                                a = e % 1 == 0 ? e : Number(e.toFixed(3));
                            }
                            i = {
                                batchId: t,
                                event: { type: s, timestamp: e_(), trackId: ev(r), totalPlayedSeconds: r.totalPlayedSeconds, trackLengthSeconds: a },
                                from: n,
                            };
                            break;
                        case ec.O.SKIP:
                        case ec.O.DISLIKE:
                            i = { batchId: t, event: { type: s, timestamp: e_(), trackId: ev(r), totalPlayedSeconds: r.totalPlayedSeconds }, from: n };
                    }
                    return { feedback: i };
                } catch (e) {
                    return { feedback: void 0, error: e };
                }
            }
            function ek(e, t) {
                return e.some(
                    (e) =>
                        (function (e, t) {
                            if (e === t) return !0;
                            let a = [ec.O.SKIP, ec.O.TRACK_FINISHED];
                            return a.includes(e) && a.includes(t);
                        })(t.event.type, e.event.type) &&
                        'trackId' in t.event &&
                        'trackId' in e.event &&
                        t.event.trackId === e.event.trackId,
                );
            }
            var eC = a(95167);
            function eT(e) {
                if (eS(e) || (0, eC.b)(e)) return e.data.radioSessionId;
            }
            class eA {
                set afterErrorHook(e) {
                    this.afterError = e;
                }
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeFeedbacksForWasPlayedTracks(e, t) {
                    for (let r of e)
                        if (eS(r.entity) && r.entity.data.wasPlayed) {
                            var a, i;
                            let { feedback: e, error: s } = eI({ entity: r.entity, type: ec.O.TRACK_STARTED, from: t }),
                                { feedback: n, error: l } = eI({ entity: r.entity, type: ec.O.TRACK_FINISHED, from: t }),
                                o = eT(r.entity);
                            e || null == (a = this.afterError) || a.promise(new H.t('[VibeContext] Can not create feedback for history vibe track', { cause: s })),
                                n || null == (i = this.afterError) || i.promise(new H.t('[VibeContext] Can not create feedback for history vibe track', { cause: l })),
                                e && n && this.sessionStore.storeSessionFeedbacksInHistory([e, n], o);
                        }
                }
                sendFeedback(e) {
                    let { entity: t, type: a, from: i, session: r, sendWithSessionTracks: s = !1, saveFeedbackToHistory: n = !1 } = e;
                    if (this.multipleSessions) return this.sendFeedbackWithMultipleSessions(e);
                    let { radioSessionId: l } = r,
                        { feedback: o, error: d } = eI({ entity: t, type: a, from: i });
                    return o
                        ? ('trackId' in o.event && ep(t)) || ek(this.sessionStore.feedbacksHistory, o) || ek(this.sessionStore.feedbacksForSending, o)
                            ? Promise.resolve()
                            : (this.validateFeedback(o), s)
                              ? (this.sessionStore.storeSessionFeedbacks(o, r.radioSessionId), Promise.resolve())
                              : this.rotorResource
                                    .sessionFeedback({ radioSessionId: l, feedback: o })
                                    .then(() => (n && this.sessionStore.storeSessionFeedbacksInHistory([o], r.radioSessionId), Promise.resolve()))
                        : Promise.reject(new H.t('Cannot create feedback', { data: { type: a }, cause: d }));
                }
                sendFeedbacksForInactiveSessions() {
                    if (!this.multipleSessions) return Promise.resolve();
                    let e = [];
                    for (let i of this.sessionStore.store.values())
                        if (i.feedbacks.length && !i.active) {
                            var t, a;
                            e.push({ radioSessionId: i.radioSessionId, feedbacks: i.feedbacks, seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [] });
                        }
                    return e.length
                        ? this.rotorResource.sessionsFeedbacks({ sessions: e }).then(() => {
                              for (let t of e) {
                                  let e = this.sessionStore.store.get(t.radioSessionId);
                                  e && (e.historyFeedbacks.push(...e.feedbacks), (e.feedbacks = []));
                              }
                          })
                        : Promise.resolve();
                }
                sendFeedbackWithMultipleSessions(e) {
                    var t, a;
                    let { entity: i, type: r, from: s, session: n, sendWithSessionTracks: l = !1, saveFeedbackToHistory: o = !1 } = e,
                        d = eT(i);
                    if ((r === ec.O.RADIO_STARTED && (d = n.radioSessionId), !d)) return Promise.reject(new H.t('Cannot create feedback. No radioSessionId.'));
                    let { feedback: u, error: c } = eI({ entity: i, type: r, from: s });
                    if (!u) return Promise.reject(new H.t('Cannot create feedback', { data: { type: r }, cause: c }));
                    if ('trackId' in u.event && ep(i)) return Promise.resolve();
                    let h = this.sessionStore.store.get(d);
                    return ek(null != (t = null == h ? void 0 : h.historyFeedbacks) ? t : [], u) || ek(null != (a = null == h ? void 0 : h.feedbacks) ? a : [], u)
                        ? Promise.resolve()
                        : (this.validateFeedback(u), l)
                          ? (this.sessionStore.storeSessionFeedbacksWithMultipleSessions(u, d), Promise.resolve())
                          : this.rotorResource
                                .sessionFeedback({ radioSessionId: d, feedback: u })
                                .then(() => (o && this.sessionStore.storeSessionFeedbacksInHistoryWithMultipleSessions([u], d), Promise.resolve()));
                }
                validateFeedback(e) {
                    let t = [ec.O.TRACK_STARTED, ec.O.TRACK_FINISHED, ec.O.SKIP, ec.O.LIKE, ec.O.UNLIKE, ec.O.DISLIKE, ec.O.UNDISLIKE];
                    if (!e.batchId && t.includes(e.event.type)) {
                        var a;
                        null == (a = this.afterError) || a.promise(new H.t('[VibeContext] No batchId in feedback', { data: { feedback: e } }));
                    }
                }
                constructor({ rotorResource: e, variables: t, sessionStore: a }) {
                    (0, O._)(this, 'rotorResource', void 0),
                        (0, O._)(this, 'sessionStore', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'afterError', void 0),
                        (this.rotorResource = e),
                        (this.sessionStore = a),
                        (this.variables = t);
                }
            }
            function eD(e) {
                let { targetEntityWasPlayed: t, hasSourceContext: a, targetEntityIndex: i, livePlayableIndex: r, targetEntityIsLastEntity: s, useWaveQueue: n } = e;
                return !1 === n ? !s && t : !s && (t || a || i <= r);
            }
            function eL(e) {
                return e.filter((e) => {
                    if ('string' == typeof e) {
                        let [t] = e.split(':');
                        return !ey(null != t ? t : '');
                    }
                    return !e.ugc;
                });
            }
            class ex {
                get multipleSessions() {
                    var e, t, a;
                    return null != (a = null == (t = this.variables) || null == (e = t.multipleSessions) ? void 0 : e.enabled) && a;
                }
                storeSessionFeedbacksInHistory(e, t) {
                    if (this.multipleSessions && t) return void this.storeSessionFeedbacksInHistoryWithMultipleSessions(e, t);
                    for (let t of e) this.feedbacksHistory.push(t);
                }
                storeSessionFeedbacks(e, t) {
                    if (this.multipleSessions) return void this.storeSessionFeedbacksWithMultipleSessions(e, t);
                    let a = Array.isArray(e) ? e : [e];
                    this.feedbacksForSending.push(...a);
                }
                storeSessionFeedbacksInHistoryWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        let t = Array.isArray(e) ? e : [e];
                        a.historyFeedbacks.push(...t);
                    } else throw new H.t('Can not store history feedback. No session was created in map.');
                }
                storeSessionFeedbacksWithMultipleSessions(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        let t = Array.isArray(e) ? e : [e];
                        a.feedbacks.push(...t);
                    } else throw new H.t('Can not store feedbacks for sending. No session was created in map.');
                }
                getSessionFeedbacksWithMultipleSessions(e) {
                    let t = this.store.get(e);
                    if (t) {
                        let e = t.feedbacks;
                        return (t.feedbacks = []), e;
                    }
                }
                getSessionsFeedbacks() {
                    let e = [];
                    for (let [i, r] of this.store.entries()) {
                        if (r.feedbacks.length) {
                            var t, a;
                            e.push({ radioSessionId: i, feedbacks: r.feedbacks, seeds: null != (a = null == (t = r.wave) ? void 0 : t.seeds) ? a : [] }),
                                (r.feedbacks = []);
                        }
                        r.feedbacks = [];
                    }
                    return 0 !== e.length ? e : void 0;
                }
                getSessionFeedbacks(e) {
                    if (this.multipleSessions) return this.getSessionFeedbacksWithMultipleSessions(e);
                    let t = this.feedbacksForSending;
                    return (this.feedbacksForSending = []), t;
                }
                clearStoredFeedbacks() {
                    (this.feedbacksHistory = []), (this.feedbacksForSending = []), this.store.clear();
                }
                addActiveSession(e) {
                    let { session: t, feedbacks: a = [] } = e;
                    this.store.forEach((e) => {
                        e.active = !1;
                    });
                    let { radioSessionId: i, wave: r, acceptedSeeds: s, pumpkin: n, batchId: l, descriptionSeed: o } = t,
                        d = { radioSessionId: i, wave: r, acceptedSeeds: s, pumpkin: n, descriptionSeed: o, batchId: l, feedbacks: a, historyFeedbacks: [], active: !0 };
                    this.store.set(i, d), (this.observableActiveSession.value = d);
                }
                addClonedSession(e) {
                    let { radioSessionId: t, feedbacks: a = [] } = e;
                    this.store.set(t, { radioSessionId: t, feedbacks: a, historyFeedbacks: [], active: !1 });
                }
                constructor({ variables: e }) {
                    (0, O._)(this, 'store', new Map()),
                        (0, O._)(this, 'feedbacksHistory', []),
                        (0, O._)(this, 'feedbacksForSending', []),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'observableActiveSession', new ei.cJ(void 0)),
                        (this.variables = e);
                }
            }
            !(function (e) {
                (e.CLONED = 'cloned'), (e.RESTORED_TO_DEFAULT_SEED = 'restoredToDefaultSeed');
            })(r || (r = {}));
            class eN {
                get shouldResetSeedToDefault() {
                    var e;
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        { multipleSessions: a } = null != (e = this.variables) ? e : {},
                        { enabled: i, sessionLifeTimeMin: r } = null != a ? a : {};
                    return (
                        !(!i || void 0 === r || ((null == t ? void 0 : t.wave.seeds) && 1 === t.wave.seeds.length && t.wave.seeds.includes(eb))) &&
                        Date.now() - this.timeOfLastInteractionWithVibe >= 60 * r * 1e3
                    );
                }
                sessionClone() {
                    let { cloneSessionId: e, queue: t, trackToStartFrom: a, includeTracksInResponse: i, allowExplicit: r, interactive: s } = this.contextData;
                    return e
                        ? this.rotorResource
                              .sessionClone({
                                  includeWaveModel: !0,
                                  radioSessionId: e,
                                  trackToStartFrom: a,
                                  queue: t,
                                  allowExplicit: r,
                                  includeTracksInResponse: i,
                                  interactive: s,
                              })
                              .then(
                                  (e) => (
                                      (this.contextData.meta.session = e),
                                      (this.contextData.meta.id = (0, ef.f)(e.wave.seeds)),
                                      this.sessionStore.addActiveSession({ session: e }),
                                      e
                                  ),
                              )
                              .catch((e) => {
                                  throw new H.t('Error in clone vibe session', { cause: e });
                              })
                        : Promise.reject(new H.t('Error in clone vibe session. No cloneSessionId'));
                }
                sessionNew() {
                    let { seeds: e, queue: t, trackToStartFrom: a, includeTracksInResponse: i, allowExplicit: r, interactive: s } = this.contextData;
                    return this.rotorResource
                        .sessionNew({ seeds: e, includeWaveModel: !0, trackToStartFrom: a, queue: t, allowExplicit: r, includeTracksInResponse: i, interactive: s })
                        .then(
                            (e) => (
                                (this.contextData.meta.session = e),
                                (this.contextData.meta.id = (0, ef.f)(e.wave.seeds)),
                                this.sessionStore.addActiveSession({ session: e }),
                                e
                            ),
                        )
                        .catch((e) => {
                            throw new H.t('Error in create new vibe session', { cause: e });
                        });
                }
                defaultSessionNew(e) {
                    let { includeTracksInResponse: t, allowExplicit: a, queue: i } = this.contextData,
                        r = this.sessionStore.getSessionsFeedbacks();
                    return this.rotorResource
                        .sessionNew({
                            sessions: r,
                            seeds: [eb],
                            queue: null != e ? e : i,
                            includeWaveModel: !0,
                            allowExplicit: a,
                            includeTracksInResponse: t,
                            interactive: !0,
                        })
                        .then((e) => {
                            if (r) for (let e of r) this.sessionStore.storeSessionFeedbacksInHistory(e.feedbacks, e.radioSessionId);
                            return (
                                (this.contextData.meta.session = e),
                                (this.contextData.meta.id = (0, ef.f)(e.wave.seeds)),
                                this.sessionStore.addActiveSession({ session: e }),
                                e
                            );
                        })
                        .catch((e) => {
                            if (r) for (let e of r) this.sessionStore.storeSessionFeedbacks(e.feedbacks, e.radioSessionId);
                            throw new H.t('Error in create new vibe session', { cause: e });
                        });
                }
                getLoadContextMetaRequest() {
                    let { cloneSessionId: e } = this.contextData;
                    return this.shouldResetSeedToDefault
                        ? ((this.restoreMethod = r.RESTORED_TO_DEFAULT_SEED), this.defaultSessionNew())
                        : e
                          ? ((this.restoreMethod = r.CLONED), this.sessionClone())
                          : this.sessionNew();
                }
                getTracksFromDefaultSessionNew(e) {
                    let t = { from: this.contextData.from, utmLink: this.contextData.utmLink };
                    return this.defaultSessionNew(e).then((e) => {
                        let { batchId: a, sequence: i, radioSessionId: r } = e;
                        return eh({ batchId: a, sequence: i, radioSessionId: r, additional: t });
                    });
                }
                getTracksFromCurrentSession(e) {
                    if (!this.contextData.meta.session) return Promise.reject(new H.t('Cannot get next vibe tracks. No session'));
                    let {
                            meta: { session: t },
                        } = this.contextData,
                        a = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        i = this.sessionStore.getSessionFeedbacks(t.radioSessionId),
                        { radioSessionId: r } = t;
                    return this.rotorResource
                        .sessionTracks({ radioSessionId: r, queue: e, feedbacks: i })
                        .then((e) => {
                            i && this.sessionStore.storeSessionFeedbacksInHistory(i, r), (this.contextData.meta.sessionTracks = e);
                            let { batchId: t, sequence: s } = e;
                            return eh({ batchId: t, sequence: s, radioSessionId: r, additional: a });
                        })
                        .catch(
                            (e) => (
                                i && this.sessionStore.storeSessionFeedbacks(i, t.radioSessionId),
                                Promise.reject(new H.t('Error in getting next vibe tracks from current session', { cause: e }))
                            ),
                        );
                }
                getNextTracks(e) {
                    Promise.resolve([]);
                    return (this.shouldResetSeedToDefault ? this.getTracksFromDefaultSessionNew(e) : this.getTracksFromCurrentSession(e)).then((e) => e);
                }
                constructor({ contextData: e, rotorResource: t, sessionStore: a, variables: i }) {
                    (0, O._)(this, 'contextData', void 0),
                        (0, O._)(this, 'rotorResource', void 0),
                        (0, O._)(this, 'sessionStore', void 0),
                        (0, O._)(this, 'timeOfLastInteractionWithVibe', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'restoreMethod', void 0),
                        (this.contextData = e),
                        (this.rotorResource = t),
                        (this.sessionStore = a),
                        (this.variables = i),
                        (this.timeOfLastInteractionWithVibe = e.timeOfLastInteractionWithVibe ? e.timeOfLastInteractionWithVibe : Date.now());
                }
            }
            class eR extends es {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (this.afterErrorHook = t.afterError),
                        (this.feedbacksController.afterErrorHook = t.afterError),
                        t.beforeContextSet.tap('VibeContext', () => {
                            if (!this.isCurrentContext) return;
                            let e = a.state.queueState.currentEntity.value;
                            e && (this.sendFeedback({ entity: e.entity, type: ec.O.SKIP }), this.sessionStore.clearStoredFeedbacks());
                        }),
                        t.afterSetupQueue.tap('VibeContext', () => {
                            if (!this.isCurrentContext || !this.sessionController.restoreMethod) return;
                            let { value: e } = a.state.queueState.entityList;
                            if ((this.feedbacksController.storeFeedbacksForWasPlayedTracks(e.slice(0, -1), this.from), this.contextData.meta.session)) {
                                let e = { from: this.from, utmLink: this.utmLink },
                                    { batchId: t, sequence: i, radioSessionId: r } = this.contextData.meta.session,
                                    s = eh({ batchId: t, sequence: i, radioSessionId: r, additional: e });
                                a.injectLast({ entitiesData: s });
                            }
                            this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                        }),
                        t.afterEntityRemove.tapPromise('VibeContext', () => {
                            if (!this.isCurrentContext) return Promise.resolve();
                            if (!this.handleAfterEntityRemoveHook) return (this.handleAfterEntityRemoveHook = !0), Promise.resolve();
                            let { nextIndex: e, entityList: t, index: i } = a.state.queueState;
                            if (null !== e.value) return (this.sessionController.timeOfLastInteractionWithVibe = Date.now()), Promise.resolve();
                            let r = eE(t.value, i.value);
                            return this.getNextTracks(r)
                                .then((e) => {
                                    a.injectLast({ entitiesData: e });
                                })
                                .catch((e) => this.logVibeError({ cause: e }))
                                .finally(() => {
                                    this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                                });
                        }),
                        t.afterMediaStartPlaying.tapPromise('VibeContext', () =>
                            this.isCurrentContext
                                ? new Promise((e) => {
                                      let t = a.state.queueState.currentEntity.value;
                                      if (!t) return void e();
                                      let { entity: i } = t;
                                      this.isVibeStarted
                                          ? this.sendFeedback({ type: ec.O.TRACK_STARTED, entity: i, saveFeedbackToHistory: !0 })
                                          : (this.sendFeedback({ type: ec.O.RADIO_STARTED, entity: i }).then(() => {
                                                this.sendFeedback({ type: ec.O.TRACK_STARTED, entity: i, saveFeedbackToHistory: !0 });
                                            }),
                                            (this.isVibeStarted = !0)),
                                          e();
                                  })
                                : Promise.resolve(),
                        ),
                        t.beforeFindPlayableEntityIndex.tapPromise('VibeContext', (e) => {
                            if (!this.isCurrentContext) return Promise.resolve();
                            let t = Promise.resolve();
                            switch (e.method) {
                                case F.So.AUTO_MOVE_FORWARD:
                                    t = this.onAutoMoveForward(a);
                                    break;
                                case F.So.MOVE_FORWARD:
                                    t = this.onMoveForward(a);
                                    break;
                                case F.So.MOVE_BACKWARD:
                                    t = this.onMoveBackward(a);
                                    break;
                                case F.So.SET_INDEX:
                                    t = this.onSetIndex(a, e.indexToChangeOn);
                            }
                            return t.finally(() => {
                                this.sessionController.timeOfLastInteractionWithVibe = Date.now();
                            });
                        }),
                        t.beforeInject.tap('VibeContext', (e) => {
                            var t;
                            if (!this.isCurrentContext || !e.sourceContext) return e;
                            let a = (function (e) {
                                let { position: t, livePlayableIndex: a, entityList: i, useWaveQueue: r } = e;
                                if ('number' != typeof a || !r) return t;
                                let s = (function (e, t) {
                                        if (void 0 === e) return 0;
                                        let a = 0;
                                        for (let r = t + 1; r < e.length; r++) {
                                            var i;
                                            (null == (i = e[r]) ? void 0 : i.sourceContext) && (a += 1);
                                        }
                                        return a;
                                    })(i, a),
                                    n = a + 1 + s;
                                return t > n ? n : t;
                            })({
                                position: e.position,
                                livePlayableIndex: e.livePlayableIndex,
                                entityList: e.entityList,
                                useWaveQueue: null == (t = this.variables) ? void 0 : t.useWaveQueue,
                            });
                            return (this.sessionController.timeOfLastInteractionWithVibe = Date.now()), { ...e, calibratedPosition: a };
                        }),
                        t.afterInject.tap('VibeContext', (e) => {
                            if (!this.isCurrentContext) return e;
                            let { contextEntityPairs: t } = e;
                            for (let e of t)
                                if ((eS(e.entity) || (0, eC.b)(e.entity)) && !e.entity.data.fromCurrentContext) {
                                    var i, r;
                                    (e.entity.data.batchId = ((r = e.entity), 'user-queue-'.concat(r.data.meta.id, '-').concat(Date.now()))),
                                        (e.entity.data.radioSessionId = null == (i = this.contextData.meta.session) ? void 0 : i.radioSessionId);
                                } else a.hooks.afterError.promise(new H.t('Can not manualy set batchId/radioSessionId for '.concat(e.entity.data.type, ' entity.')));
                            return { contextEntityPairs: t };
                        });
                }
                get observableActiveSession() {
                    return this.sessionStore.observableActiveSession;
                }
                loadContextMeta() {
                    let {
                        meta: { id: e },
                        cloneSessionId: t,
                    } = this.contextData;
                    return (
                        (this.contextData.queue = this.contextData.queue ? eL(this.contextData.queue) : void 0),
                        t && this.sessionStore.addClonedSession({ radioSessionId: t }),
                        this.sessionController.getLoadContextMetaRequest().then((t) => ((this.contextData.trackToStartFrom = void 0), { id: e, session: t }))
                    );
                }
                get shouldRemoveNotPlayedVibeTracksByTtl() {
                    return Date.now() - this.sessionController.timeOfLastInteractionWithVibe >= 18e5;
                }
                setSettings(e) {
                    let { seeds: t, queueState: a, allowExplicit: i, interactive: r, from: s } = e;
                    this.contextData.interactive = r;
                    let n = eL(eE(a.entityList.value, a.index.value)),
                        l = a.currentEntity.value,
                        o = null != i ? i : a.filterParams.value.allowExplicit,
                        d = Promise.resolve();
                    l && eS(l.entity) && (d = this.sendFeedback({ entity: l.entity, type: ec.O.SKIP }));
                    let { trackToStartFrom: u, includeTracksInResponse: c } = this.contextData,
                        h = this.sessionStore.getSessionsFeedbacks();
                    return d.then(() =>
                        this.rotorResource
                            .sessionNew({
                                sessions: h,
                                includeTracksInResponse: c,
                                trackToStartFrom: u,
                                seeds: t,
                                queue: n,
                                allowExplicit: o,
                                includeWaveModel: !0,
                                interactive: r,
                            })
                            .then((e) => {
                                (this.contextData.meta.session = e),
                                    (this.contextData.meta.id = (0, ef.f)(e.wave.seeds)),
                                    this.sessionStore.addActiveSession({ session: e }),
                                    (this.contextData.meta.allowExplicit = o),
                                    s && ((this.from = s), (this.contextData.from = s));
                            })
                            .catch((e) => {
                                this.logVibeError({ message: 'Error while setting new vibe settings', cause: e });
                            }),
                    );
                }
                getContextEntitiesData() {
                    let {
                            meta: { session: e },
                        } = this.contextData,
                        t = { from: this.from, utmLink: this.utmLink };
                    if (e) {
                        let { batchId: a, sequence: i, radioSessionId: r } = e;
                        return Promise.resolve(eh({ batchId: a, sequence: i, radioSessionId: r, additional: t }));
                    }
                    return this.loadContextMeta().then((e) => {
                        let { session: a } = e,
                            { batchId: i, sequence: r, radioSessionId: s } = a;
                        return eh({ batchId: i, sequence: r, radioSessionId: s, additional: t });
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                logVibeError(e) {
                    var t, a, i;
                    let { message: r, cause: s } = e;
                    null == (a = this.afterErrorHook) ||
                        a.promise(
                            new H.t('[VibeContext] '.concat(r || 'Error in VibeContext'), {
                                cause: s,
                                data: {
                                    contextId: this.contextData.meta.id,
                                    sessionId: null != (i = null == (t = this.contextData.meta.session) ? void 0 : t.radioSessionId) ? i : '',
                                },
                            }),
                        );
                }
                onAutoMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.TRACK_FINISHED,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        let { index: t, entityList: i } = e.state.queueState,
                            r = t.value === i.value.length - 2,
                            s = t.value === i.value.length - 1;
                        if (!r && !s) return Promise.resolve();
                        let n = this.getNextTracks(a).then((t) => {
                            e.injectLast({ entitiesData: t }), (this.availableActions.moveForward.value = !0);
                        });
                        return s ? n : (r && n.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.SKIP,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var t;
                        let { index: i, entityList: r, livePlayableIndex: s } = e.state.queueState,
                            n = i.value === r.value.length - 1,
                            l = i.value + 1,
                            o = e.getEntityByIndex({ index: l }),
                            d = l === r.value.length - 1;
                        if (
                            eD({
                                targetEntityWasPlayed: !!(o && eS(o.entity) && o.entity.data.wasPlayed),
                                hasSourceContext: !!(null == o ? void 0 : o.sourceContext),
                                targetEntityIndex: l,
                                livePlayableIndex: s.value,
                                targetEntityIsLastEntity: d,
                                useWaveQueue: !!(null == (t = this.variables) ? void 0 : t.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let u = this.getNextTracks(a).then((t) => e.injectLast({ entitiesData: t }));
                        return n ? u : (u.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveBackward(e) {
                    this.removeNotPlayedVibeTracksByTtl(e);
                    let t = e.state.queueState.currentEntity.value;
                    if (!t) return Promise.resolve();
                    let { entity: a } = t;
                    return this.sendFeedback({ entity: a, type: ec.O.SKIP, saveFeedbackToHistory: !0 }), Promise.resolve();
                }
                onSetIndex(e, t) {
                    var a;
                    if (this.sessionTracksPromise) return Promise.resolve();
                    let i = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: ec.O.SKIP,
                        entity: null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var a;
                        let { index: r, entityList: s, livePlayableIndex: n } = e.state.queueState,
                            l = r.value === s.value.length - 1,
                            o = e.getEntityByIndex({ index: t });
                        if (
                            eD({
                                targetEntityWasPlayed: !!(o && eS(o.entity) && o.entity.data.wasPlayed),
                                hasSourceContext: !!(null == o ? void 0 : o.sourceContext),
                                targetEntityIndex: t,
                                livePlayableIndex: n.value,
                                targetEntityIsLastEntity: t === s.value.length - 1,
                                useWaveQueue: !!(null == (a = this.variables) ? void 0 : a.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let d = this.getNextTracks(i)
                            .then((t) => e.injectLast({ entitiesData: t }))
                            .catch((e) => this.logVibeError({ cause: e }));
                        return l ? d : Promise.resolve();
                    });
                }
                getNextTracks(e) {
                    return (
                        (this.sessionTracksPromise = this.sendFeedbacksForInactiveSessions()
                            .then(() => this.sessionController.getNextTracks(e))
                            .finally(() => {
                                (this.sessionTracksPromise = null), (this.availableActions.moveForward.value = !0);
                            })),
                        (this.availableActions.moveForward.value = !1),
                        this.sessionTracksPromise
                    );
                }
                sendFeedbacksForInactiveSessions() {
                    return this.feedbacksController
                        .sendFeedbacksForInactiveSessions()
                        .catch((e) => (this.logVibeError({ message: 'Error while sending feedback for inactive sessions', cause: e }), Promise.resolve()));
                }
                sendFeedback(e) {
                    let { entity: t, type: a, sendWithSessionTracks: i = !1, saveFeedbackToHistory: r = !1 } = e;
                    if (!t) return this.logVibeError({ message: 'Cannot send feedback. No entity' }), Promise.resolve();
                    let { session: s } = this.contextData.meta;
                    return s
                        ? this.feedbacksController
                              .sendFeedback({ entity: t, type: a, session: s, from: this.contextData.from, sendWithSessionTracks: i, saveFeedbackToHistory: r })
                              .catch((e) => (this.logVibeError({ message: 'Error while sending feedback', cause: e }), Promise.resolve()))
                        : (this.logVibeError({ message: 'Cannot send feedback. No session' }), Promise.resolve());
                }
                calculateLivePlayableIndex(e) {
                    return e.state.queueState.livePlayableIndex.value;
                }
                removeNotPlayedVibeTracksByTtl(e) {
                    let { index: t, entityList: a } = e.state.queueState;
                    if (this.shouldRemoveNotPlayedVibeTracksByTtl) {
                        let i = [];
                        for (let e = t.value + 1; e < a.value.length; e++) {
                            let t = a.value[e];
                            t && eS(t.entity) && !t.entity.data.wasPlayed && i.push(e);
                        }
                        this.remove(e, i);
                    }
                }
                removeVibeTracksBeforeMoveForward(e) {
                    var t, a;
                    let { index: i, entityList: r, livePlayableIndex: s } = e.state.queueState;
                    if (!(null != (a = null == (t = this.variables) ? void 0 : t.useWaveQueue) && a)) {
                        let t = this.getPositionsFromStartToEnd(i.value + 2, r.value.length);
                        this.remove(e, t);
                        return;
                    }
                    let n = this.findNextPlayablePosition(r.value, i.value);
                    if (null === n) return;
                    let l = this.getPositionsToRemoveForWaveQueue(r.value, n + 1, s.value);
                    this.remove(e, l);
                }
                findNextPlayablePosition(e, t) {
                    for (let i = t + 1; i < e.length; i++) {
                        var a;
                        if ((null == (a = e[i]) ? void 0 : a.entity.hidden) !== !0) return i;
                    }
                    return null;
                }
                getPositionsToRemoveForWaveQueue(e, t, a) {
                    let i = [];
                    for (let r = t; r < e.length; r++) {
                        let t = e[r],
                            s = r <= a,
                            n = !!(null == t ? void 0 : t.sourceContext);
                        s || n || i.push(r);
                    }
                    return i;
                }
                getPositionsFromStartToEnd(e, t) {
                    let a = [];
                    for (let i = e; i < t; i++) a.push(i);
                    return a;
                }
                onQueueNavigationCommon(e) {
                    let t = eE(e.state.queueState.entityList.value, e.state.queueState.index.value);
                    return this.removeNotPlayedVibeTracksByTtl(e), t;
                }
                remove(e, t) {
                    (this.handleAfterEntityRemoveHook = !1), e.remove(t, !0);
                }
                constructor(e) {
                    super(e),
                        (0, O._)(this, 'contextData', void 0),
                        (0, O._)(this, 'rotorResource', void 0),
                        (0, O._)(this, 'isVibeStarted', !1),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'sessionTracksPromise', null),
                        (0, O._)(this, 'feedbacksController', void 0),
                        (0, O._)(this, 'sessionStore', void 0),
                        (0, O._)(this, 'sessionController', void 0),
                        (0, O._)(this, 'afterErrorHook', void 0),
                        (0, O._)(this, 'handleAfterEntityRemoveHook', !0);
                    let { data: t, rotorResource: a, variables: i } = e;
                    (this.rotorResource = a),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.variables = i),
                        (this.sessionStore = new ex({ variables: i })),
                        (this.feedbacksController = new eA({ rotorResource: a, sessionStore: this.sessionStore, variables: i })),
                        (this.sessionController = new eN({
                            variables: this.variables,
                            contextData: this.contextData,
                            rotorResource: this.rotorResource,
                            sessionStore: this.sessionStore,
                        }));
                }
            }
            class ew extends es {
                getContextId() {
                    var e, t;
                    let a = null == (t = this.contextData.meta.albums) || null == (e = t[0]) ? void 0 : e.id;
                    return a ? ''.concat(this.contextData.meta.id, ':').concat(a) : String(this.contextData.meta.id);
                }
                loadTrailer() {
                    return this.tracksResource
                        .getTrailer({ trackId: this.getContextId() })
                        .then((e) => ((this.contextData.meta = e.track), e))
                        .catch((e) => {
                            throw new er('Error in PlaylistContext', { code: 'E_PLAYLIST_LOAD_TRAILER', cause: e, data: { contextId: this.contextData.meta.id } });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.getContextId();
                    return this.tracksResource
                        .getTracksMeta({ trackIds: [e], withProgress: !0 })
                        .then((t) => {
                            let a = t[0];
                            if (a) return (this.contextData.meta = a), a;
                            throw new er('Error in VariousContext. Track not found', { code: 'E_VARIOUS_LOAD_CONTEXT_META', data: { contextId: e } });
                        })
                        .catch((t) => {
                            throw new er('Error in VariousContext', { code: 'E_VARIOUS_LOAD_CONTEXT_META', cause: t, data: { contextId: e } });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => [{ meta: t.track, type: K.R.SmartPreview, additional: e }])
                        : this.contextData.meta
                          ? Promise.resolve([{ meta: this.contextData.meta, type: K.R.Unknown, additional: e }])
                          : this.loadContextMeta().then((t) => [{ meta: t, type: K.R.Unknown, additional: e }]);
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, O._)(this, 'contextData', void 0), (0, O._)(this, 'tracksResource', void 0), (0, O._)(this, 'variables', void 0);
                    let { data: t, tracksResource: a, variables: i } = e;
                    (this.tracksResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = i);
                }
            }
            class eM extends H.t {
                constructor(e, { code: t = 'E_CONTEXT_FACTORY', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'ContextFactoryException'), Object.setPrototypeOf(this, eM.prototype);
                }
            }
            var eO = a(59553);
            let eF = (e) => [{ type: K.R.Generative, meta: e }],
                eG = 'E_GENERATIVE_RESTART_LIMIT',
                eK = 'E_GENERATIVE_RESTART_FAILED';
            class ej extends es {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.playerState.status.onChange((e) => {
                        this.isCurrentContext &&
                            e &&
                            (e === F.MT.PLAYING
                                ? (this.isPaused && this.sendFeedback(eO.Q.StreamPlay, a), (this.isPaused = !1))
                                : e === F.MT.PAUSED && (this.sendFeedback(eO.Q.StreamPause, a), (this.isPaused = !0)));
                    }),
                        t.afterError.tap('GenerativeContext', (e) => {
                            let t = e && e instanceof er && e.code === eG,
                                i = e && e instanceof er && e.code === eK;
                            !t && !i && this.isCurrentContext && (this.restartsCount >= 5 || this.restart(a));
                        });
                }
                loadContextMeta() {
                    return this.rotorResource
                        .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), stream: e.stream, ...e.data };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new er('Error GenerativeContext', {
                                code: 'E_GENERATIVE_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta.stream) ? void 0 : e.id)
                        ? Promise.resolve(eF(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eF(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                sendFeedback(e, t) {
                    var a;
                    return this.rotorResource
                        .stationFeedback({
                            type: e,
                            stationId: String(this.contextData.meta.id),
                            streamId: String(null == (a = this.contextData.meta.stream) ? void 0 : a.id),
                            timestamp: e_(),
                        })
                        .then((a) => {
                            if (a.reload_stream) {
                                let a = e === eO.Q.TimestampDislike;
                                this.restart(t, a);
                            }
                        });
                }
                restart(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.restartsCount >= 5) {
                        let t = new er('Error GenerativeContext', { code: eG, data: { contextId: this.contextData.meta.id } });
                        return e.hooks.afterError.promise(t), Promise.reject(t);
                    }
                    return (
                        this.restartsCount++,
                        this.loadContextMeta()
                            .then(() => {
                                let a = t || !this.isPaused;
                                return t && this.isPaused && (this.isPaused = !1), e.restartContext({ playAfterRestart: a, entitiesData: eF(this.contextData.meta) });
                            })
                            .catch((t) => {
                                let a = new er('Error GenerativeContext restart', {
                                    code: eK,
                                    cause: (0, M.createObjectFromError)(t),
                                    data: { contextId: this.contextData.meta.id, restartsCount: this.restartsCount },
                                });
                                throw (e.hooks.afterError.promise(a), a);
                            })
                    );
                }
                constructor(e) {
                    super(e),
                        (0, O._)(this, 'contextData', void 0),
                        (0, O._)(this, 'rotorResource', void 0),
                        (0, O._)(this, 'isPaused', !1),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'restartsCount', 0);
                    let { data: t, variables: a, rotorResource: i } = e;
                    (this.rotorResource = i),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let eX = (e) => [{ type: K.R.Radio, meta: e }];
            class eU extends es {
                apply(e) {}
                loadContextMeta() {
                    return Promise.all([
                        this.radioStationsResource.getStreamBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                        this.radioStationsResource.getStreamUrlBySlug({
                            stationSlug: String(this.contextData.meta.stationSlug),
                            streamSlug: String(this.contextData.meta.streamSlug),
                        }),
                    ])
                        .then((e) => {
                            let [t, { url: a, episodeId: i }] = e,
                                r = {
                                    id: this.contextData.meta.id,
                                    stationSlug: String(this.contextData.meta.stationSlug),
                                    streamSlug: String(this.contextData.meta.streamSlug),
                                    stream: t,
                                    streamUrl: a,
                                    streamEpisodeId: i,
                                };
                            return (this.contextData.meta = r), r;
                        })
                        .catch((e) => {
                            throw new er('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e, t;
                    return (null == (t = this.contextData.meta) || null == (e = t.stream) ? void 0 : e.slug)
                        ? Promise.resolve(eX(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eX(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e), (0, O._)(this, 'contextData', void 0), (0, O._)(this, 'radioStationsResource', void 0), (0, O._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStationsResource: i } = e;
                    (this.radioStationsResource = i),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            let eB = (e) => [{ type: K.R.Radio, meta: e }];
            class eV extends es {
                apply(e) {}
                loadContextMeta() {
                    return this.radioStreamResource
                        .getByRadioId({ radioId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), ...e };
                            return (this.contextData.meta = t), t;
                        })
                        .catch((e) => {
                            throw new er('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, M.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta) ? void 0 : e.uuid)
                        ? Promise.resolve(eB(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eB(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    super(e),
                        (0, O._)(this, 'contextData', void 0),
                        (0, O._)(this, 'radioStreamResource', void 0),
                        (0, O._)(this, 'isPaused', !1),
                        (0, O._)(this, 'restartsCount', 0),
                        (0, O._)(this, 'variables', void 0);
                    let { data: t, variables: a, radioStreamResource: i } = e;
                    (this.radioStreamResource = i),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a);
                }
            }
            class eW {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    try {
                        var i, r, s, n, l, o, d, u;
                        switch (a.type) {
                            case et.K.Album:
                                if (!this.albumsResource)
                                    throw new eM('Albums resource is not provided', { code: 'E_ALBUMS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new el({
                                    data: a,
                                    albumsResource: this.albumsResource,
                                    logger: this.logger,
                                    variables: null == (i = this.variables) ? void 0 : i[et.K.Album],
                                });
                                break;
                            case et.K.Playlist:
                                if (!this.usersResource || !this.playlistResource)
                                    throw new eM('Users and playlist resources are not provided', {
                                        code: 'E_USERS_AND_PLAYLIST_RESOURCES_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new ed({
                                    data: a,
                                    usersResource: this.usersResource,
                                    playlistResource: this.playlistResource,
                                    logger: this.logger,
                                    variables: null == (r = this.variables) ? void 0 : r[et.K.Playlist],
                                });
                                break;
                            case et.K.Artist:
                                if (!this.artistsResource)
                                    throw new eM('Artists resource is not provided', { code: 'E_ARTISTS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eu({
                                    data: a,
                                    artistsResource: this.artistsResource,
                                    logger: this.logger,
                                    variables: null == (s = this.variables) ? void 0 : s[et.K.Artist],
                                });
                                break;
                            case et.K.Vibe:
                                if (!this.rotorResource)
                                    throw new eM('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eR({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (n = this.variables) ? void 0 : n[et.K.Vibe],
                                });
                                break;
                            case et.K.Various:
                                if (!this.tracksResource)
                                    throw new eM('Tracks resource is not provided', { code: 'E_TRACKS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ew({
                                    data: a,
                                    tracksResource: this.tracksResource,
                                    logger: this.logger,
                                    variables: null == (l = this.variables) ? void 0 : l[et.K.Various],
                                });
                                break;
                            case et.K.Generative:
                                if (!this.rotorResource)
                                    throw new eM('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ej({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (o = this.variables) ? void 0 : o[et.K.Generative],
                                });
                                break;
                            case et.K.Radio:
                                if (!this.radioStationsResource)
                                    throw new eM('Radio stations resource is not provided', {
                                        code: 'E_RADIO_STATIONS_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eU({
                                    data: a,
                                    radioStationsResource: this.radioStationsResource,
                                    logger: this.logger,
                                    variables: null == (d = this.variables) ? void 0 : d[et.K.Radio],
                                });
                                break;
                            case et.K.LegacyRadio:
                                if (!this.radioStreamResource)
                                    throw new eM('Radio stream resource is not provided', {
                                        code: 'E_RADIO_STREAM_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eV({
                                    data: a,
                                    radioStreamResource: this.radioStreamResource,
                                    logger: this.logger,
                                    variables: null == (u = this.variables) ? void 0 : u[et.K.LegacyRadio],
                                });
                        }
                    } catch (e) {
                        throw new eM('Error while creating context', { cause: (0, M.createObjectFromError)(e), data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new eM('Cannot create context with nonexistent type', { code: 'E_NONEXISTENT_CONTEXT_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    (0, O._)(this, 'logger', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'albumsResource', void 0),
                        (0, O._)(this, 'usersResource', void 0),
                        (0, O._)(this, 'artistsResource', void 0),
                        (0, O._)(this, 'rotorResource', void 0),
                        (0, O._)(this, 'tracksResource', void 0),
                        (0, O._)(this, 'playlistResource', void 0),
                        (0, O._)(this, 'radioStationsResource', void 0),
                        (0, O._)(this, 'radioStreamResource', void 0);
                    let {
                        variables: t,
                        logger: a,
                        rotorResource: i,
                        usersResource: r,
                        playlistResource: s,
                        tracksResource: n,
                        albumsResource: l,
                        artistsResource: o,
                        radioStreamResource: d,
                        radioStationsResource: u,
                    } = e;
                    (this.albumsResource = null != l ? l : null),
                        (this.artistsResource = null != o ? o : null),
                        (this.rotorResource = null != i ? i : null),
                        (this.usersResource = null != r ? r : null),
                        (this.tracksResource = null != n ? n : null),
                        (this.playlistResource = null != s ? s : null),
                        (this.radioStationsResource = null != u ? u : null),
                        (this.radioStreamResource = null != d ? d : null),
                        (this.variables = t),
                        (this.logger = a);
                }
            }
            var eq = a(70140),
                eY = a(47719);
            function eH(e) {
                return !!(0, eq.i)(e) && !!e.data.meta.session && e.data.meta.session.wave.type === eY.y.MIX;
            }
            var ez = a(66570);
            class eQ {
                set positionSec(e) {
                    this.internalPositionSec = e;
                }
                get positionSec() {
                    return void 0 !== this.internalPositionSec
                        ? this.internalPositionSec
                        : eH(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                          ? this.entity.data.meta.mixFade.inStart
                          : void 0;
                }
                get canBePlayedOnlyWithCrossing() {
                    return eH(this.context);
                }
                canBePlayed(e) {
                    let t = 'playDisliked' in this.context.data && void 0 !== this.context.data.playDisliked && this.context.data.playDisliked,
                        { entityChangeMethod: a, index: i } = e,
                        r = t || a === F.So.SET_INDEX || (a === F.So.PLAY_CONTEXT && void 0 !== i),
                        s = a === F.So.SET_INDEX,
                        n = !r && this.entity.isDisliked,
                        l = !s && this.entity.hidden,
                        o = (0, eq.i)(this.context) || !this.entity.isExplicit || !1 !== e.filterParams.allowExplicit;
                    return !!(this.entity.isAvailable && o) && (n ? !!(0, eq.i)(this.context) : !l);
                }
                getCrossParams() {
                    return eH(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? this.entity.data.meta.mixFade
                        : 'fade' in this.entity.data.meta && void 0 !== this.entity.data.meta.fade
                          ? this.entity.data.meta.fade
                          : null;
                }
                canBeCrossedWith(e) {
                    return (
                        !(
                            !('type' in this.entity.data.meta) ||
                            !('type' in e.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            !('fade' in e.entity.data.meta) ||
                            (0, ez.F)(this.context)
                        ) &&
                        this.entity.data.meta.type === G.S.MUSIC &&
                        e.entity.data.meta.type === G.S.MUSIC &&
                        void 0 !== this.entity.data.meta.fade &&
                        void 0 !== e.entity.data.meta.fade
                    );
                }
                getFadeMode() {
                    return eH(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? F.OQ.MIX
                        : !('type' in this.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            (0, ez.F)(this.context) ||
                            this.entity.data.meta.type !== G.S.MUSIC ||
                            void 0 === this.entity.data.meta.fade
                          ? F.OQ.NONE
                          : F.OQ.CROSSFADE;
                }
                constructor(e, t, a) {
                    (0, O._)(this, 'context', void 0),
                        (0, O._)(this, 'entity', void 0),
                        (0, O._)(this, 'lastChangeMethod', null),
                        (0, O._)(this, 'lastSeekPosition', void 0),
                        (0, O._)(this, 'internalPositionSec', void 0),
                        (0, O._)(this, 'sourceContext', void 0),
                        (this.context = e),
                        (this.entity = t),
                        (this.sourceContext = a);
                }
            }
            class e$ {
                createContext(e) {
                    return this.contextFactory.create(e);
                }
                createEntity(e) {
                    return this.entityFactory.create(e);
                }
                createContextEntityPair(e, t, a) {
                    return new eQ(e, t, a);
                }
                constructor(e) {
                    (0, O._)(this, 'entityFactory', void 0),
                        (0, O._)(this, 'contextFactory', void 0),
                        (this.entityFactory = new ee(e.entityFactoryParams)),
                        (this.contextFactory = new eW(e.contextFactoryParams));
                }
            }
            var eZ = a(60463),
                eZStorage = a(83252);
            class eJ {
                getAverageFrequencies(e) {
                    if (null === this.currentGraph) return [];
                    let { analyserNode: t, spectrum: a, bufferLength: i, context: r } = this.currentGraph;
                    if (!t) throw new H.t('No analyser node has been created');
                    t.getByteFrequencyData(a);
                    let s = r.sampleRate / i,
                        n = 0,
                        l = e.map((e) => {
                            let { low: t, high: a } = e,
                                i = Math.floor(t / s),
                                r = Math.floor(a / s);
                            return (n = Math.max(n, r)), { startIndex: i, endIndex: r };
                        }),
                        o = Array(n + 2).fill(0);
                    for (let e = 0; e < n + 1; e++) {
                        var d, u;
                        let t = (null != (d = a[e]) ? d : 0) / 256;
                        o[e + 1] = (null != (u = o[e]) ? u : 0) + t;
                    }
                    return l.map((e) => {
                        let { startIndex: t, endIndex: a } = e,
                            i = o[t],
                            r = o[a + 1];
                        return void 0 === i || void 0 === r ? 0 : (r - i) / (a - t + 1);
                    });
                }
                getExponentialVolume = (e) => {
                    let t = Math.pow(0.01, 1 - e);
                    return t > 0.01 ? t : 0;
                };
                getRMS() {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.fftSize,
                        i = new Uint8Array(a);
                    t.getByteTimeDomainData(i);
                    let r = 0,
                        s = JSON.parse(window.localStorage.getItem(eZStorage.cYZ.YmPlayerVolume)),
                        n = this.getExponentialVolume(s?.value ?? 1);
                    for (let e = 0; e < a; e++) {
                        let t = 0 !== n ? (i[e] - 128) / 128 / n : 0;
                        r += t * t;
                    }
                    let l = 2 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICENT?.() ?? 0.2;
                        return (this._prevRms = void 0 !== this._prevRms ? this._prevRms * (1 - e) + l * e : l), this._prevRms;
                    }
                    return l;
                }
                getRMSAlt() {
                    if (null === this.currentGraph) return 0;
                    let { analyserNode: t } = this.currentGraph;
                    if (!t) return 0;
                    let a = t.frequencyBinCount,
                        i = new Float32Array(a);
                    t.getFloatFrequencyData(i);
                    let r = 0,
                        s = JSON.parse(window.localStorage.getItem(eZStorage.cYZ.YmPlayerVolume)),
                        n = this.getExponentialVolume(s?.value ?? 1);
                    for (let e = 0; e < a; e++) {
                        let t = i[e];
                        if (t === -1 / 0) continue;
                        let s = 0 !== n ? Math.pow(10, t / 20) / n : 0;
                        r += s * s;
                    }
                    let l = 120 * Math.sqrt(r / a);
                    if (window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY?.() ?? !1) {
                        let e = window.VIBE_ANIMATION_SMOOTH_DYNAMIC_ENERGY_COEFFICENT?.() ?? 0.2;
                        return (this._prevRms = void 0 !== this._prevRms ? this._prevRms * (1 - e) + l * e : l), this._prevRms;
                    }
                    return l;
                }
                constructor({ currentAudioElement: e, graphs: t }) {
                    (0, O._)(this, 'currentGraph', null),
                        (0, O._)(this, 'graphs', void 0),
                        (this.graphs = t),
                        e.onChange((e) => {
                            let t = this.graphs.find((t) => t.audioElement === e);
                            t && (this.currentGraph = t);
                        });
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(s || (s = {}));
            class e0 {
                enable() {
                    this.state !== s.ENABLED &&
                        (this.graphs.forEach((e) => {
                            e.connectEqualizer();
                        }),
                        (this.state = s.ENABLED));
                }
                disable() {
                    this.state !== s.DISABLED &&
                        (this.graphs.forEach((e) => {
                            e.disconnectEqualizer();
                        }),
                        (this.state = s.DISABLED));
                }
                applyPreset(e) {
                    this.graphs.forEach((t) => {
                        t.setPreamp(e.preamp), t.setBands(e.frequencies);
                    });
                }
                constructor({ preset: e, graphs: t }) {
                    (0, O._)(this, 'graphs', void 0), (0, O._)(this, 'state', s.DISABLED), (this.graphs = t), e && this.applyPreset(e);
                }
            }
            var e1 = (function (e, t, a) {
                var i;
                return function (t) {
                    var a, r, s;
                    return new Worker(
                        (i =
                            i ||
                            ((r = (a = atob(e)).indexOf('\n', 10) + 1),
                            (s = new Blob([a.substring(r) + ''], { type: 'application/javascript' })),
                            URL.createObjectURL(s))),
                        t,
                    );
                };
            })(
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIGxldCB0aW1lciA9IG51bGw7CiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkgewogICAgICAgIHN3aXRjaCAoZS5kYXRhLmNvbW1hbmQpIHsKICAgICAgICAgICAgY2FzZSAnc3RhcnQnOgogICAgICAgICAgICAgICAgc3RhcnQoZS5kYXRhLmludGVydmFsKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlICdzdG9wJzoKICAgICAgICAgICAgICAgIHN0b3AoKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHN0YXJ0KGludGVydmFsKSB7CiAgICAgICAgc3RvcCgpOwogICAgICAgIHRpbWVyID0gc2VsZi5zZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICAgICAgICBtZXNzYWdlOiAndGljaycKICAgICAgICAgICAgfTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShkYXRhKTsKICAgICAgICB9LCBpbnRlcnZhbCk7CiAgICB9CiAgICBmdW5jdGlvbiBzdG9wKCkgewogICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkgewogICAgICAgICAgICBzZWxmLmNsZWFySW50ZXJ2YWwodGltZXIpOwogICAgICAgIH0KICAgICAgICB0aW1lciA9IG51bGw7CiAgICB9CiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpOwoKfSkoKTsK',
            );
            class e3 {
                init() {
                    try {
                        return (this.worker = new e1()), this.worker.addEventListener('message', this.onMessage.bind(this)), Promise.resolve();
                    } catch (e) {
                        return this.destroy(), Promise.reject(e);
                    }
                }
                get isIntervalRunning() {
                    return this.isTrackingInWorker;
                }
                setInterval(e, t) {
                    this.worker && ((this.callback = e), (this.isTrackingInWorker = !0), this.worker.postMessage({ command: 'start', interval: t }));
                }
                clearInterval() {
                    this.worker && ((this.isTrackingInWorker = !1), this.worker.postMessage({ command: 'stop' }));
                }
                onError(e) {
                    this.worker && (this.errorListeners.push(e), this.worker.addEventListener('error', e), this.worker.addEventListener('messageerror', e));
                }
                destroy() {
                    var e;
                    this.clearInterval(),
                        this.errorListeners.forEach((e) => {
                            var t, a;
                            null == (t = this.worker) || t.removeEventListener('error', e), null == (a = this.worker) || a.removeEventListener('messageerror', e);
                        }),
                        null == (e = this.worker) || e.terminate(),
                        (this.worker = null);
                }
                onMessage(e) {
                    'tick' === e.data.message && this.callback && this.callback();
                }
                constructor() {
                    (0, O._)(this, 'worker', null), (0, O._)(this, 'callback', null), (0, O._)(this, 'isTrackingInWorker', !1), (0, O._)(this, 'errorListeners', []);
                }
            }
            class e2 {
                get isIntervalRunning() {
                    return !!this.intervalId;
                }
                init() {
                    return Promise.resolve();
                }
                onError() {}
                setInterval(e, t) {
                    this.intervalId = setInterval(e, t);
                }
                clearInterval() {
                    null !== this.intervalId && clearInterval(this.intervalId), (this.intervalId = null);
                }
                destroy() {
                    this.clearInterval();
                }
                constructor() {
                    (0, O._)(this, 'intervalId', null);
                }
            }
            class e6 {
                get isIntervalRunning() {
                    return !!this.ticker.isIntervalRunning;
                }
                init() {
                    return this.ticker.init().catch((e) => {
                        throw ((this.ticker = new e2()), Error('Error in creating WorkerTicker. Fallback to IntervalTicker', { cause: e }));
                    });
                }
                onError(e) {
                    return this.ticker.onError(e);
                }
                setInterval(e, t) {
                    return this.ticker.setInterval(e, t);
                }
                clearInterval() {
                    return this.ticker.clearInterval();
                }
                destroy() {
                    this.ticker.destroy();
                }
                constructor() {
                    (0, O._)(this, 'ticker', new e3());
                }
            }
            !(function (e) {
                (e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED');
            })(n || (n = {}));
            let e8 = 1e3 / 60,
                e5 = 1 / 60;
            class e4 {
                updateGain() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = e >= this.outStart && e <= this.outStop;
                    if (t) {
                        let t = this.getFadeInVolume(e);
                        this.volumeAtTime = t;
                    }
                    if (a) {
                        let e = this.getFadeOutVolume();
                        this.volumeAtTime = e;
                    }
                    e > this.inStop && e < this.outStart && (this.volumeAtTime = this.maxVolume), e > this.outStop && (this.volumeAtTime = 0);
                }
                enable() {
                    (this.volume = 0), (this.state = n.ENABLED), this.ticker.isIntervalRunning || this.ticker.setInterval(this.updateGain.bind(this), e8);
                }
                enableFadeIn() {
                    (this.audioElementVolumeBeforeFadeIn = this.graph.audioElement.volume),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeIn.bind(this), e8);
                }
                fadeIn() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = this.getFadeInVolume(e);
                    t && (this.volumeAtTime = a), e > this.inStop && e < this.outStart && ((this.volumeAtTime = this.maxVolume), this.disable());
                }
                enableFadeOut() {
                    (this.state = n.ENABLED), this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeOut.bind(this), e8);
                }
                fadeOut() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.graph.audioElement.currentTime,
                        t = e >= this.outStart && e <= this.outStop,
                        a = this.getFadeOutVolume();
                    t && (this.volumeAtTime = a), e > this.outStop && (this.volumeAtTime = 0);
                }
                getFadeInVolume(e) {
                    let t = this.inStop - this.inStart,
                        a = this.maxVolume;
                    return 0 === e ? 0 : Math.min(this.volume + 1 / (t / e5), a);
                }
                getFadeOutVolume() {
                    let e = this.outStop - this.outStart;
                    return Math.max(this.volume - 1 / (e / e5), 0);
                }
                disable() {
                    (this.state = n.DISABLED), this.ticker.clearInterval(), (this.volume = this.maxVolume);
                }
                setFadeParams(e) {
                    let { inStart: t, inStop: a, outStart: i, outStop: r } = e;
                    (this.inStart = t), (this.inStop = a), (this.outStart = i), (this.outStop = r);
                }
                set volumeAtTime(e) {
                    this.config.useVolumeForAudioEffect
                        ? (this.graph.audioElement.volume = e)
                        : this.graph.gainNode.gain.setValueAtTime(e, this.graph.context.currentTime);
                }
                set volume(e) {
                    this.config.useVolumeForAudioEffect ? (this.graph.audioElement.volume = e) : (this.graph.gainNode.gain.value = e);
                }
                get volume() {
                    return this.config.useVolumeForAudioEffect ? this.graph.audioElement.volume : this.graph.gainNode.gain.value;
                }
                get maxVolume() {
                    if (this.config.useVolumeForAudioEffect) {
                        var e;
                        return null != (e = this.audioElementVolumeBeforeFadeIn) ? e : 1;
                    }
                    return 1;
                }
                handleTickerError(e) {
                    this.disable();
                    let t = new H.t('FadeEffect. Error in ticker runtime.', { cause: (0, M.createObjectFromError)(e) });
                    this.hooks.afterError.promise(t);
                }
                constructor({ graph: e, hooks: t, config: a }) {
                    var i, r;
                    (0, O._)(this, 'state', n.IDLE),
                        (0, O._)(this, 'inStart', 0),
                        (0, O._)(this, 'inStop', 0),
                        (0, O._)(this, 'outStart', 0),
                        (0, O._)(this, 'outStop', 0),
                        (0, O._)(this, 'ticker', void 0),
                        (0, O._)(this, 'graph', void 0),
                        (0, O._)(this, 'hooks', void 0),
                        (0, O._)(this, 'config', void 0),
                        (0, O._)(this, 'audioElementVolumeBeforeFadeIn', null),
                        (this.graph = e),
                        (this.hooks = t),
                        (this.config = { useVolumeForAudioEffect: null != (i = a.useVolumeForAudioEffect) && i, useWorker: null == (r = a.useWorker) || r }),
                        this.config.useWorker ? (this.ticker = new e6()) : (this.ticker = new e2()),
                        this.ticker
                            .init()
                            .then(() => {
                                this.ticker.onError(this.handleTickerError.bind(this));
                            })
                            .catch((e) => {
                                let t = new H.t('FadeEffect. Error in ticker init().', { cause: (0, M.createObjectFromError)(e) });
                                this.hooks.afterError.promise(t);
                            });
                }
            }
            class e9 {
                enable() {
                    this.currentFadeEffect && this.currentFadeEffect.enable();
                }
                disable() {
                    this.currentFadeEffect && this.currentFadeEffect.disable();
                }
                apply(e) {
                    if (this.currentFadeEffect) {
                        if (!e) return void this.currentFadeEffect.disable();
                        this.currentFadeEffect.setFadeParams(e), this.currentFadeEffect.enable();
                    }
                }
                constructor({ currentAudioElement: e, graphs: t, playback: a }) {
                    (0, O._)(this, 'fadeEffects', []),
                        (0, O._)(this, 'currentFadeEffect', null),
                        t.forEach((e) => {
                            this.fadeEffects.push(new e4({ graph: e, hooks: a.hooks, config: { useVolumeForAudioEffect: !1, useWorker: !1 } }));
                        }),
                        e.onChange((e) => {
                            let t = this.fadeEffects.find((t) => t.graph.audioElement === e);
                            t && (this.currentFadeEffect = t);
                        });
                }
            }
            class e7 {
                enableCrossfade() {
                    let { currentEntity: e, nextEntity: t } = this.playback.state.queueState,
                        a = this.playback.state.mediaPlayersStore.value[X.e.AUDIO];
                    if (!e.value || !t.value || !a || !(0, F.uo)(a)) return;
                    let i = e.value.getCrossParams(),
                        r = t.value.getCrossParams();
                    if (!i || !r) return;
                    let s = this.fadeEffects.find((e) => !!a.crossOutMediaPlayer && e.graph.audioElement === a.crossOutMediaPlayer.currentAudioElement.value),
                        n = this.fadeEffects.find((e) => !!a.crossInMediaPlayer && e.graph.audioElement === a.crossInMediaPlayer.currentAudioElement.value);
                    s && n && (s.setFadeParams(i), n.setFadeParams(r), s.enableFadeOut(), n.enableFadeIn());
                }
                enableFastFade() {
                    let { currentEntity: e } = this.playback.state.queueState,
                        t = this.playback.state.mediaPlayersStore.value[X.e.AUDIO];
                    if (!e.value || !t || !(0, F.uo)(t)) return;
                    let a = e.value.getCrossParams(),
                        i = this.fadeEffects.find((e) => e.graph.audioElement === t.currentAudioElement.value);
                    if (!a || !i) return;
                    let r = a.inStop - a.inStart,
                        s = { ...a, inStop: a.inStart + r / 4 };
                    i.setFadeParams(s), i.enableFadeIn();
                }
                disableFade() {
                    this.fadeEffects.forEach((e) => {
                        e.disable();
                    });
                }
                canEnableFastFade(e) {
                    let { currentEntity: t } = this.playback.state.queueState;
                    return !!(t.value && !e && eH(t.value.context));
                }
                constructor({ graphs: e, playback: t, config: a = {} }) {
                    (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'fadeEffects', []),
                        (this.playback = t),
                        e.forEach((e) => {
                            this.fadeEffects.push(
                                new e4({ graph: e, hooks: t.hooks, config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker } }),
                            );
                        });
                    let i = t.state.mediaPlayersStore.value[X.e.AUDIO];
                    i &&
                        (0, F.uo)(i) &&
                        (i.isReadyForAudioEffect.onChange(
                            (e) => {
                                e ? this.enableCrossfade() : this.disableFade();
                            },
                            { skipFirstChange: !0 },
                        ),
                        i.isReadyForAudioEffectInStart.onChange(
                            (e) => {
                                e && this.canEnableFastFade(i.isReadyForAudioEffect.value) && this.enableFastFade(), e || this.disableFade();
                            },
                            { skipFirstChange: !0 },
                        ));
                }
            }
            class te {
                apply(e) {
                    this.durationMs = e;
                }
                constructor({ playback: e }) {
                    (0, O._)(this, 'playback', null),
                        (0, O._)(this, 'durationMs', void 0),
                        (this.playback = e),
                        this.playback.state.playerState.progress.onChange((e) => {
                            var t, a;
                            let i = (null != (t = this.durationMs) ? t : 0) / 1e3,
                                r = e && Math.abs(e.duration - i) > 1;
                            e && e.position > i && r && (null == (a = this.playback) || a.moveForward());
                        });
                }
            }
            !(function (e) {
                (e.HIGHSHELF = 'highshelf'), (e.PEAKING = 'peaking'), (e.LOWSHELF = 'lowshelf');
            })(l || (l = {})),
                (function (e) {
                    (e.SUSPENDED = 'suspended'), (e.RUNNING = 'running'), (e.CLOSED = 'closed');
                })(o || (o = {}));
            class tt {
                connectNodes() {
                    let { useAnalyser: e, useGain: t } = this.config;
                    this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination);
                }
                connectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(this.preamp),
                        a.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                disconnectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        a.disconnect(),
                        this.r128GainNode.disconnect(),
                        this.sourceNode.connect(e ? this.analyserNode : this.r128GainNode),
                        e && this.analyserNode.connect(this.r128GainNode),
                        t && (this.r128GainNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && this.r128GainNode.connect(this.context.destination));
                }
                setR128Gain(e, t) {
                    let a = -23,
                        i = null == window || null == window.nativeSettings ? void 0 : window.nativeSettings.get('modSettings.r128Normalization'),
                        r = null != e ? e : this.lastR128,
                        s = Number(null == r ? void 0 : r.i),
                        l = 'boolean' == typeof t ? t : i;
                    null != e && (this.lastR128 = e);
                    if (!1 === l) return void this.r128GainNode.gain.setValueAtTime(1, this.context.currentTime);
                    if (!Number.isFinite(s)) return void this.r128GainNode.gain.setValueAtTime(1, this.context.currentTime);
                    let n = Number(null == r ? void 0 : r.tp),
                        d = a - s;
                    Number.isFinite(n) && (d = Math.min(d, -n));
                    let c = Math.pow(10, d / 20);
                    (Number.isFinite(c) && c > 0) || (c = 1), this.r128GainNode.gain.setValueAtTime(c, this.context.currentTime);
                }
                setBands(e) {
                    0 === this.bands.length ? (this.bands = this.connectBandsBetween(this.createBandsByFrequencies(e))) : this.updateBands(e);
                }
                setPreamp(e) {
                    this.preamp.gain.linearRampToValueAtTime(e, this.context.currentTime + 0.3);
                }
                createBandsByFrequencies(e) {
                    return e.map((t, a) => {
                        let { key: i, value: r } = t;
                        return this.createBand(this.getBiquadFilterType(a, e.length), i, r);
                    });
                }
                createBand(e, t, a) {
                    let i = this.context.createBiquadFilter();
                    return (i.type = e), (i.frequency.value = t), (i.Q.value = 1), a && i.gain.setValueAtTime(a, this.context.currentTime + 0.3), i;
                }
                getBiquadFilterType(e, t) {
                    return 0 === e ? l.LOWSHELF : e === t - 1 ? l.HIGHSHELF : l.PEAKING;
                }
                connectBandsBetween(e) {
                    let t = this.preamp;
                    return (
                        e.forEach((e) => {
                            t.connect(e), (t = e);
                        }),
                        e
                    );
                }
                updateBands(e) {
                    this.bands.forEach((t, a) => {
                        let i = e[a];
                        i && t.gain.setValueAtTime(i.value, this.context.currentTime + 0.3);
                    });
                }
                createAnalyzerNode(e) {
                    let t = e.createAnalyser();
                    return (t.fftSize = 1024), (t.smoothingTimeConstant = 0.4), t;
                }
                checkAndResumeAudioContext(e) {
                    let t = () => {
                        e.resume().then(() => {
                            document.body.removeEventListener('touchend', t, !0),
                                document.body.removeEventListener('click', t, !0),
                                document.body.removeEventListener('keydown', t, !0);
                        });
                    };
                    e.state === o.SUSPENDED &&
                        (document.body.addEventListener('touchend', t, !0),
                        document.body.addEventListener('click', t, !0),
                        document.body.addEventListener('keydown', t, !0));
                }
                constructor(e, t) {
                    (0, O._)(this, 'audioElement', void 0),
                        (0, O._)(this, 'context', void 0),
                        (0, O._)(this, 'sourceNode', void 0),
                        (0, O._)(this, 'preamp', void 0),
                        (0, O._)(this, 'bands', []),
                        (0, O._)(this, 'analyserNode', void 0),
                        (0, O._)(this, 'bufferLength', 0),
                        (0, O._)(this, 'spectrum', new Uint8Array()),
                        (0, O._)(this, 'gainNode', void 0),
                        (0, O._)(this, 'r128GainNode', void 0),
                        (0, O._)(this, 'lastR128', null),
                        (0, O._)(this, 'config', void 0),
                        (this.audioElement = e),
                        (this.context = new AudioContext()),
                        this.checkAndResumeAudioContext(this.context),
                        (this.sourceNode = this.context.createMediaElementSource(this.audioElement)),
                        (this.analyserNode = this.createAnalyzerNode(this.context)),
                        (this.bufferLength = this.analyserNode.frequencyBinCount),
                        (this.spectrum = new Uint8Array(this.bufferLength)),
                        (this.gainNode = this.context.createGain()),
                        (this.r128GainNode = this.context.createGain()),
                        (this.preamp = this.context.createGain()),
                        (this.config = t),
                        this.connectNodes();
                }
            }
            class ta {
                get isAudioContextRequired() {
                    return !!this.options.useEqualizer || !!this.options.useAnalyser || !!this.options.useFade || !!this.options.useCrossFade;
                }
                createGraphs(e) {
                    let t = !!this.options.useFade || !!this.options.useCrossFade;
                    if ((0, F.s4)(e)) return [new tt(e.currentAudioElement.value, { useAnalyser: this.options.useAnalyser, useGain: t })];
                    if ((0, F.uo)(e)) return e.audioElementsStore.map((e) => new tt(e, { useAnalyser: this.options.useAnalyser, useGain: t }));
                    throw new H.t('Can not create audio graph for this type of media player');
                }
                initializeContext(e, t) {
                    if (this.isAudioContextRequired) {
                        if (
                            ((this.graphs = this.createGraphs(e)),
                            this.options.useAnalyser && (this.analyser = new eJ({ currentAudioElement: e.currentAudioElement, graphs: this.graphs })),
                            this.options.useEqualizer)
                        ) {
                            let e = 'object' == typeof this.options.useEqualizer ? this.options.useEqualizer : void 0;
                            this.equalizer.value = new e0({ graphs: this.graphs, preset: null == e ? void 0 : e.preset });
                        }
                        this.options.useFade && (this.fade = new e9({ currentAudioElement: e.currentAudioElement, graphs: this.graphs, playback: t })),
                            this.options.useCrossFade && (this.crossfade = new e7({ playback: t, graphs: this.graphs, config: this.options.crossFadeConfig }));
                    }
                    this.options.useSmartPreview && (this.smartPreview = new te({ playback: t }));
                }
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    a.state.mediaPlayersStore.onChange((e) => {
                        if (void 0 === e) return;
                        let t = e[X.e.AUDIO];
                        void 0 !== t && ((0, F.s4)(t) || (0, F.uo)(t)) && this.initializeContext(t, a);
                    }),
                        a.state.playerState.event.onChange(() => {
                            if (this.fade)
                                switch (a.state.playerState.event.value) {
                                    case F.Iu.PLAYING:
                                        this.fade.enable();
                                        break;
                                    case F.Iu.PAUSED:
                                    case F.Iu.STOP:
                                        this.fade.disable();
                                }
                        }),
                        t.beforeMediaStartPlaying.tapPromise('WebAudioPlugin', () => {
                            var e, t, i;
                            let r,
                                s,
                                { currentEntity: n } = a.state.queueState,
                                l = null == (e = n.value) ? void 0 : e.entity;
                            return (
                                (0, eZ.l)(l) &&
                                    ((r = null == (t = l.data.meta.smartPreviewParams) ? void 0 : t.fade),
                                    (s = null == (i = l.data.meta.smartPreviewParams) ? void 0 : i.durationMs)),
                                (0, eC.b)(l) && ((r = l.data.meta.fade), (s = l.data.meta.durationMs)),
                                this.graphs.forEach((e) => {
                                    var t;
                                    let i = null == (t = a.state.mediaPlayersStore.value[X.e.AUDIO]) ? void 0 : t.currentAudioElement.value,
                                        r = null == l ? void 0 : l.data.meta.r128,
                                        n = !r && ep(l) ? { i: 0, tp: 0 } : r;
                                    (!i || e.audioElement === i) && e.setR128Gain(n);
                                }),
                                this.fade && this.fade.apply(r),
                                this.smartPreview && this.smartPreview.apply(s),
                                Promise.resolve()
                            );
                        });
                }
                constructor(e) {
                    (0, O._)(this, 'options', void 0),
                        (0, O._)(this, 'graphs', []),
                        (0, O._)(this, 'analyser', void 0),
                        (0, O._)(this, 'equalizer', new ei.cJ(null)),
                        (0, O._)(this, 'fade', void 0),
                        (0, O._)(this, 'smartPreview', void 0),
                        (0, O._)(this, 'crossfade', void 0),
                        (this.options = e);
                }
            }
            function ti(e) {
                return (null == e ? void 0 : e.data.type) === K.R.Clip;
            }
            !(function (e) {
                (e.AD = 'ad'), (e.SHOT = 'shot');
            })(d || (d = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(u || (u = {})),
                (function (e) {
                    (e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle');
                })(c || (c = {})),
                (function (e) {
                    (e.VIDEO = 'video'), (e.AUDIO = 'audio');
                })(h || (h = {}));
            class tr {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.beforeEntityChange.tapPromise(
                        'AdvertPlugin',
                        () =>
                            new Promise((e) => {
                                if (!this.variables.enabled) return void e();
                                let {
                                    state: {
                                        currentContext: a,
                                        queueState: {
                                            index: { value: i },
                                            order: { value: r },
                                            entityList: { value: s },
                                            currentEntity: { value: n },
                                        },
                                    },
                                } = t;
                                if (void 0 !== a.value) {
                                    let l = r[i + 1],
                                        o = void 0 !== l ? s[l] : void 0,
                                        g = o ? String(o.entity.data.meta.id) : void 0,
                                        m = r[i - 1],
                                        y = void 0 !== m ? s[m] : void 0,
                                        p = y ? String(y.entity.data.meta.id) : void 0,
                                        v =
                                            ((null == n ? void 0 : n.entity.totalPlayedSeconds) || 0) /
                                            ((((null == n ? void 0 : n.entity.data.meta) && 'durationMs' in n.entity.data.meta && n.entity.data.meta.durationMs) || 1) /
                                                1e3);
                                    (this.currentTrackId = String(null == n ? void 0 : n.entity.data.meta.id)),
                                        (this.from = a.value.from),
                                        this.afterTrackResource
                                            .getAfterTrack({ contextItem: String(a.value.data.meta.id), from: a.value.from, types: d.AD, nextTrackId: g, prevTrackId: p })
                                            .then((a) => {
                                                var i, r, s;
                                                let n =
                                                    (v >= 0.5 && (null == (i = a.ad) ? void 0 : i.afterPlay) === u.AD) ||
                                                    (v < 0.5 && (null == (r = a.ad) ? void 0 : r.afterSkip) === c.AD);
                                                if ('ad' in a && this.advertModule && n) {
                                                    let i = ti(null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity) ? h.VIDEO : void 0;
                                                    t.pause(), this.advertModule.playAdvert({ afterTrackResponse: a, advertType: i }).finally(e);
                                                } else e();
                                            });
                                } else e();
                            }),
                    );
                }
                advertFeedbackCallback() {
                    this.adsResource.saveAds({ from: this.from, trackId: this.currentTrackId, type: 'ad' });
                }
                constructor(e) {
                    var t;
                    (0, O._)(this, 'advertModule', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'afterTrackResource', void 0),
                        (0, O._)(this, 'adsResource', void 0),
                        (0, O._)(this, 'currentTrackId', ''),
                        (0, O._)(this, 'from', '');
                    let { afterTrackResource: a, advertModule: i, adsResource: r, variables: s } = e;
                    (this.afterTrackResource = a),
                        (this.adsResource = r),
                        (this.variables = s),
                        (this.advertModule = i),
                        null == (t = this.advertModule) || t.setAdvertFeedbackCallback(this.advertFeedbackCallback.bind(this));
                }
            }
            var ts = a(73532),
                tn = a(89130);
            function tl(e) {
                let t = ts.FM.r.PAUSE;
                switch (e.status.value) {
                    case F.MT.BUFFERING:
                        t = ts.FM.r.BUFFERING;
                        break;
                    case F.MT.ENDED:
                    case F.MT.STOPPED:
                        t = ts.FM.r.END;
                        break;
                    case F.MT.PLAYING:
                        t = ts.FM.r.PLAY;
                        break;
                    case F.MT.PAUSED:
                    case F.MT.IDLE:
                    case F.MT.LOADING_MEDIA_SOURCE:
                        t = ts.FM.r.PAUSE;
                }
                return t;
            }
            class to {
                createTelemetry(e) {
                    (this.vsid = (0, M.createVsid)(e.playbackInitializationTime, this.playerTypeForVsid)),
                        (this.telemetry = new ts.YT({
                            getState: () => {
                                var t;
                                let {
                                    progress: {
                                        value: { duration: a, position: i, remainingBufferedTime: r },
                                    },
                                    volume: s,
                                } = e.state.playerState;
                                return (
                                    (null == (t = e.state.currentContext.value) ? void 0 : t.data.type) === et.K.Radio &&
                                    e.state.currentContext.value.data.meta.streamEpisodeId
                                        ? this.setStaticParams({ videoContentId: e.state.currentContext.value.data.meta.streamEpisodeId })
                                        : this.setStaticParams({ videoContentId: void 0 }),
                                    {
                                        duration: (0, tn.fP)(a),
                                        currentTime: (0, tn.fP)(i),
                                        utcStartTime: void 0,
                                        videoType: 'VOD',
                                        isFullscreen: !1,
                                        volume: s.value,
                                        muted: 0 === s.value,
                                        remainingBufferedTime: { total: (0, tn.fP)(null != r ? r : 0) },
                                        playingState: tl(e.state.playerState),
                                        videoSize: void 0,
                                        liveLatency: void 0,
                                        videoTracks: [],
                                        audioTrack: void 0,
                                        isVisible: !1,
                                    }
                                );
                            },
                            sendLog: (e, t) => {
                                this.telemetryResource.log({ payload: e, urlParams: t });
                            },
                            playerInfo: { service: this.service, version: '1.0.0', vsid: this.vsid, isVideoADB: !1 },
                        })),
                        this.telemetry.setStaticParams({ labels: { from: this.from } }),
                        (this.resourceTimingsMonitor = new ts.yv({
                            sendLog: (e, t) => {
                                this.telemetryResource.perfLog({ payload: e, urlParams: t });
                            },
                        })),
                        this.resourceTimingsMonitor.attach(window);
                }
                logEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent(e, t);
                }
                logError(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logError(e, t);
                }
                setPlayingState(e) {
                    var t;
                    let a = tl(e);
                    null == (t = this.telemetry) || t.setPlayingState(a);
                }
                setStaticParams(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.setStaticParams(e, t);
                }
                onBeforeSetSource() {
                    var e;
                    return null == (e = this.telemetry) ? void 0 : e.onBeforeSetSource();
                }
                onSetSource(e) {
                    var t;
                    null == (t = this.telemetry) || t.onSetSource(e, { streams: [], params: {} });
                }
                onSeek(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.onSeek({ oldPosition: e, newPosition: t });
                }
                logYaspEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent({ name: e, data: t });
                }
                logYaspError(e) {
                    var t;
                    null == (t = this.telemetry) || t.logError({ error: e.detail });
                }
                constructor({ telemetryResource: e, service: t, from: a, playerTypeForVsid: i }) {
                    (0, O._)(this, 'telemetry', void 0),
                        (0, O._)(this, 'resourceTimingsMonitor', void 0),
                        (0, O._)(this, 'telemetryResource', void 0),
                        (0, O._)(this, 'from', void 0),
                        (0, O._)(this, 'service', void 0),
                        (0, O._)(this, 'playerTypeForVsid', void 0),
                        (0, O._)(this, 'vsid', void 0),
                        (this.telemetryResource = e),
                        (this.service = t),
                        (this.from = a),
                        (this.playerTypeForVsid = i);
                }
            }
            var td = a(77220),
                tu = a(53676);
            class tc extends td.X {
                async sendPlays(e, t) {
                    return (
                        await this.httpClient.post(
                            'plays',
                            this.createHttpOptions({
                                timeoutKey: 'sendPlays',
                                params: e,
                                searchParams: (0, tu.P)({ clientNow: e.clientNow }),
                                json: { plays: e.plays },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    super(e, t), (0, O._)(this, 'httpClient', void 0), (0, O._)(this, 'config', void 0), (this.httpClient = e), (this.config = t);
                }
            }
            var th = a(14287),
                tg = a(11036);
            !(function (e) {
                (e.START = 'start'), (e.END = 'end'), (e.PLAYING = 'playing'), (e.PAUSE = 'pause');
            })(g || (g = {}));
            var tm = a(38285),
                ty = a(82237),
                tp = a(82116),
                tv = a(48437),
                tS = a(73477);
            let tP = (e) => !!(e && 'object' == typeof e && 'playId' in e && 'totalPlayedSeconds' in e),
                tE = (e) => {
                    let t = [e.find((e) => 0 === e.totalPlayedSeconds), (0, tp.A)(e, 'totalPlayedSeconds')];
                    return (0, tv.A)(t.filter(tP), 'totalPlayedSeconds');
                };
            class tf {
                use(e) {
                    return this.middlewares.push(e), this;
                }
                run(e) {
                    let t = (a) => (a >= this.middlewares.length ? Promise.resolve() : (0, this.middlewares[a])(e, () => t(a + 1)));
                    return t(0);
                }
                constructor() {
                    (0, O._)(this, 'middlewares', []);
                }
            }
            class tb {
                getResult() {
                    return this.playData;
                }
                constructor(e) {
                    (0, O._)(this, 'contextEntityPair', void 0),
                        (0, O._)(this, 'playType', void 0),
                        (0, O._)(this, 'totalPlayedSeconds', void 0),
                        (0, O._)(this, 'endPositionSeconds', void 0),
                        (0, O._)(this, 'dynamicData', void 0),
                        (0, O._)(this, 'hooks', void 0),
                        (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'operation', void 0),
                        (0, O._)(this, 'clock', void 0),
                        (0, O._)(this, 'isCrossfadeEnabled', void 0),
                        (0, O._)(this, 'playData', {}),
                        (this.contextEntityPair = e.contextEntityPair),
                        (this.playType = e.playType),
                        (this.totalPlayedSeconds = e.totalPlayedSeconds),
                        (this.endPositionSeconds = e.endPositionSeconds),
                        (this.dynamicData = e.dynamicData),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.operation = e.operation),
                        (this.clock = e.clock),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled);
                }
            }
            class t_ extends H.t {
                constructor(e, { code: t = 'E_PLAYS', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'PlaysException'), Object.setPrototypeOf(this, t_.prototype);
                }
            }
            let tI = (e, t) => {
                var a, i, r;
                let { entity: s, context: n } = e.contextEntityPair;
                if (!s.playId) {
                    let t = {};
                    (t.contextId = n.data.meta.id), (t.entityId = s.data.meta.id);
                    let a = new t_('Trying to '.concat(e.operation, ' without playId'), { data: t });
                    throw (null == (i = e.hooks) || i.afterError.promise(a), a);
                }
                let l = (null == (a = s.data.additional) ? void 0 : a.from) || n.from;
                if (!l) {
                    let t = new t_('from field is required for '.concat(e.operation, ', but was not found in plays data'));
                    throw (null == (r = e.hooks) || r.afterError.promise(t), t);
                }
                return (e.playData.playId = s.playId), (e.playData.from = l), t();
            };
            function tk(e) {
                return (null == e ? void 0 : e.data.type) === et.K.Radio;
            }
            function tC(e) {
                if ((0, eZ.l)(e)) {
                    var t;
                    if ('smartPreviewParams' in e.data.meta && (null == (t = e.data.meta.smartPreviewParams) ? void 0 : t.durationMs))
                        return e.data.meta.smartPreviewParams.durationMs / 1e3;
                } else if ('durationMs' in e.data.meta && e.data.meta.durationMs) return e.data.meta.durationMs / 1e3;
                return 0;
            }
            let tT = (e, t) => {
                    let { entity: a, context: i } = e.contextEntityPair,
                        r = tC(a),
                        s = e.totalPlayedSeconds,
                        n = e.endPositionSeconds;
                    return (
                        0.5 > Math.abs(r - e.totalPlayedSeconds) && (s = r),
                        0.5 > Math.abs(r - e.endPositionSeconds) && (n = r),
                        tk(i) && (n = s),
                        (e.playData.totalPlayedSeconds = s),
                        (e.playData.endPositionSeconds = n),
                        (e.playData.trackLengthSeconds = r),
                        t()
                    );
                },
                tA = (e) => {
                    if (e.mediaSourceData && 'urls' in e.mediaSourceData.data) {
                        let t = e.mediaSourceData.data.urls[0];
                        if (t && t.startsWith('blob:')) return !0;
                    }
                    return !1;
                };
            function tD(e) {
                return (null != e ? e : new Date()).toISOString();
            }
            let tL = (e, t) => {
                    var a;
                    let { entity: i, context: r } = e.contextEntityPair;
                    (e.playData.timestamp = tD(e.clock())),
                        (e.playData.albumId = (function (e) {
                            let t;
                            if ('albums' in e.data.meta) {
                                let {
                                    data: {
                                        meta: { albums: a },
                                    },
                                } = e;
                                if (a) {
                                    let e = a[0];
                                    e && (t = String(e.id));
                                }
                            }
                            return t;
                        })(i)),
                        (e.playData.context = r.data.type),
                        (e.playData.contextItem = String(r.data.meta.id)),
                        (e.playData.addTracksToPlayerTime = i.addTracksToPlayerTime),
                        (e.playData.fromCache = tA(i)),
                        (e.playData.isRestored = !!i.data.isRestored);
                    let s = (null == (a = i.data.additional) ? void 0 : a.utmLink) || r.utmLink || {};
                    return (e.playData = { ...e.playData, ...s }), t();
                },
                tx = (e, t) => ((e.playData.audioAuto = 'none'), (e.playData.audioOutputName = 'Динамик'), (e.playData.audioOutputType = 'Speaker'), t()),
                tN = (e, t) => {
                    let a,
                        { entity: i, context: r } = e.contextEntityPair,
                        s = String(i.data.meta.id);
                    if ((0, tg.S)(r)) {
                        var n;
                        a = { generativeStreamId: (null == (n = r.data.meta.stream) ? void 0 : n.id) ? String(r.data.meta.stream.id) : void 0 };
                    } else a = { trackId: s };
                    return (e.playData = { ...e.playData, ...a }), t();
                },
                tR = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, eq.i)(a) && a.data.meta.session) {
                        var i, r;
                        let { dynamicData: t } = e;
                        (e.playData.radioSessionId = null != (i = t.radioSessionId) ? i : a.data.meta.session.radioSessionId),
                            (e.playData.batchId = null != (r = t.radioBatchId) ? r : a.data.meta.session.batchId),
                            (e.playData.isFromAutoflow = t.isFromAutoflow),
                            (e.playData.isFromPumpkin = t.isFromPumpkin),
                            (e.playData.context = 'radio'),
                            (e.playData.contextItem = a.data.meta.session.wave.stationId);
                    }
                    return t();
                };
            var tw = a(64336);
            let tM = (e, t) => {
                let { context: a } = e.contextEntityPair;
                return (
                    (0, tw.K)(a) &&
                        ((e.playData.playlistId = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind)),
                        (e.playData.contextItem = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind))),
                    t()
                );
            };
            var tO = a(63006),
                tF = a(77710);
            let tG = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, tO.p)(a)) {
                        var i;
                        let t = [tF.b.Search, tF.b.Other],
                            r = null != (i = a.data.overrideContextType) ? i : tF.b.Other;
                        (e.playData.context = r), t.includes(r) && (e.playData.contextItem = null);
                    }
                    return t();
                },
                tK = (e, t) => {
                    let { entity: a } = e.contextEntityPair;
                    return (0, eZ.l)(a) && (e.playData.smartPreview = !0), t();
                },
                tj = (e, t) => {
                    var a, i;
                    let { dynamicData: r, playType: s } = e;
                    return (
                        (e.playData.seek = null != (a = r.seek) && a),
                        (e.playData.pause = null != (i = r.pause) && i),
                        (e.playData.startTimestamp = r.startTimestamp),
                        s !== g.START && (e.playData.maxPlayerStage = r.maxPlayerStage),
                        t()
                    );
                };
            !(function (e) {
                (e.FINISH = 'finish'),
                    (e.SKIP = 'skip'),
                    (e.DISLIKE = 'dislike'),
                    (e.BACK_SKIP = 'back_skip'),
                    (e.OTHER_TRACK = 'other_track'),
                    (e.IN_PROGRESS = 'in_progress');
            })(m || (m = {})),
                (function (e) {
                    (e.AFTER_MEDIA_END_PLAYING = 'AFTER_MEDIA_END_PLAYING'),
                        (e.BEFORE_CONTEXT_SET = 'BEFORE_CONTEXT_SET'),
                        (e.BEFORE_ENTITY_CHANGE = 'BEFORE_ENTITY_CHANGE'),
                        (e.AFTER_CONTEXT_END = 'AFTER_CONTEXT_END');
                })(y || (y = {}));
            let tX = (e, t) => {
                let a,
                    { dynamicData: i, playType: r } = e;
                if (void 0 !== i.changeReason) return (e.playData.changeReason = i.changeReason), t();
                if (!i.hookSource) return r === g.PLAYING && (e.playData.changeReason = m.IN_PROGRESS), t();
                switch (i.hookSource) {
                    case y.AFTER_MEDIA_END_PLAYING:
                        a = m.FINISH;
                        break;
                    case y.BEFORE_CONTEXT_SET:
                        a = m.OTHER_TRACK;
                        break;
                    case y.BEFORE_ENTITY_CHANGE:
                    case y.AFTER_CONTEXT_END:
                        a = (function (e, t) {
                            if (!e) return m.OTHER_TRACK;
                            switch (e) {
                                case F.So.AUTO_MOVE_FORWARD:
                                    return m.FINISH;
                                case F.So.MOVE_FORWARD:
                                    return t ? m.DISLIKE : m.SKIP;
                                case F.So.MOVE_BACKWARD:
                                    return m.BACK_SKIP;
                                default:
                                    return m.OTHER_TRACK;
                            }
                        })(i.entityChangeMethod, i.wasDislikedOnChange);
                }
                return (e.playData.changeReason = a), t();
            };
            function tU(e) {
                let t = e.state.mediaPlayersStore.value[X.e.AUDIO];
                return !!t && !!(0, F.uo)(t) && t.isReadyForAudioEffect.value;
            }
            let tB = (e, t) => {
                if ((0, tg.S)(e.contextEntityPair.context)) return t();
                let a = tU(e.playback),
                    i = e.contextEntityPair.getCrossParams(),
                    r = e.contextEntityPair.getFadeMode();
                if (
                    ((e.playData.fadeMode = a && i ? r : F.OQ.NONE),
                    !(function (e) {
                        let t = e.contextEntityPair.getCrossParams(),
                            a = eH(e.contextEntityPair.context),
                            i = !!e.isCrossfadeEnabled && e.isCrossfadeEnabled.value,
                            r = a || (i && e.contextEntityPair.getFadeMode() !== F.OQ.NONE);
                        if (!t || !r) {
                            e.playData.expectedTrackLengthSeconds = tC(e.contextEntityPair.entity);
                            return;
                        }
                        e.playData.expectedTrackLengthSeconds = t.outStart - t.inStart;
                    })(e),
                    e.dynamicData.startedWithCrossfade && i)
                )
                    e.playData.startPositionSeconds = i.inStart;
                else {
                    var s;
                    e.playData.startPositionSeconds = null != (s = e.contextEntityPair.positionSec) ? s : 0;
                }
                return t();
            };
            class tV {
                buildPlayDataPipeline() {
                    let e = new tf().use(tI).use(tT).use(tL).use(tx).use(tN).use(tR).use(tM).use(tG).use(tK).use(tj).use(tX);
                    return this.toggles.enableSendFadeFieldsInPlays && e.use(tB), e;
                }
                createPlay(e) {
                    let t = new tb({ ...e, hooks: this.hooks, playback: this.playback, clock: this.clock, isCrossfadeEnabled: this.isCrossfadeEnabled });
                    return this.playDataPipeline
                        .run(t)
                        .then(() => t.getResult())
                        .catch((e) => (console.error('Critical error in play data pipeline:', e), null));
                }
                createStartPlay(e) {
                    e.entity.addTracksToPlayerTime = ''.concat(Math.random().toString().slice(2), '-').concat(Math.ceil(Number(this.clock()) / 1e3));
                    let t = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: g.START,
                        totalPlayedSeconds: 0,
                        endPositionSeconds: 0,
                        dynamicData: t,
                        operation: 'send start entity play',
                    });
                }
                createProgressPlay(e, t, a, i) {
                    let r = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({ contextEntityPair: e, playType: g.PLAYING, totalPlayedSeconds: t, endPositionSeconds: a, dynamicData: r, operation: i });
                }
                createEndPlay(e, t, a) {
                    let i = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: g.END,
                        totalPlayedSeconds: t,
                        endPositionSeconds: a,
                        dynamicData: i,
                        operation: 'send end entity play',
                    });
                }
                sendStartEntityPlay(e) {
                    if (!e) return Promise.resolve();
                    try {
                        return this.createStartPlay(e).then((t) => {
                            if (t && !this.toggles.disableSendPlaysOnTrackStart)
                                return this.sendPlay(t).catch((t) => {
                                    this.handleSendingError(t, 'Error while sending plays', e);
                                });
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendPartialPlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            i = this.hasSentPartialPlayReportId(t),
                            r = this.toggles.enablePartialPlayReporting && !i && a >= 30.1,
                            s = this.toggles.enablePeriodicSendPlays && this.nextPeriodicSendTotalPlayedSeconds < a;
                        if (!(0, tg.S)(e.context) && (r || s))
                            return this.createProgressPlay(e, a, this.playback.state.playerState.progress.value.position, 'send partial play report').then((t) =>
                                t
                                    ? this.sendPlay(t)
                                          .then(() => {
                                              r && this.addSentPartialPlayReportId(t.playId),
                                                  s && (this.nextPeriodicSendTotalPlayedSeconds += this.periodicSendIntervalSeconds);
                                          })
                                          .catch((t) => {
                                              this.handleSendingError(t, 'Error while sending plays', e);
                                          })
                                    : Promise.resolve(),
                            );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays partial play report', e);
                    }
                    return Promise.resolve();
                }
                sendPausePlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            i = this.dynamicDataManager.getDynamicDataByPlayId(t);
                        return this.createPlay({
                            contextEntityPair: e,
                            playType: g.PAUSE,
                            totalPlayedSeconds: a,
                            endPositionSeconds: this.playback.state.playerState.progress.value.position,
                            dynamicData: { ...i, changeReason: void 0 },
                            operation: 'send pause play report',
                        }).then((t) =>
                            t
                                ? this.sendPlay(t).catch((t) => {
                                      this.handleSendingError(t, 'Error while sending plays', e);
                                  })
                                : Promise.resolve(),
                        );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays pause play report', e);
                    }
                    return Promise.resolve();
                }
                sendEndEntityPlay(e) {
                    if (!e || (this.toggles.enableRemoveDuplicatePlays && this.hasSentPlayId(e.entity.playId))) return Promise.resolve();
                    this.toggles.enableRemoveDuplicatePlays && this.addSentPlayId(e.entity.playId);
                    try {
                        return this.createEndPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position).then((t) => {
                            if (t)
                                return (
                                    this.clearDynamicData(t.playId),
                                    this.toggles.enablePartialPlayReporting && this.clearSentPartialPlayReportId(t.playId),
                                    this.sendPlay(t)
                                        .catch((t) => {
                                            this.handleSendingError(t, 'Error while sending plays', e);
                                        })
                                        .finally(() => {
                                            this.resetIsRestoredFlag(e.entity);
                                        })
                                );
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendStoredPlaysData() {
                    this.isSendingPlays.value = !0;
                    let e = this.toggles.limitOfSendingPlaysData || 25;
                    return this.isStorageEnabled()
                        ? this.store
                              .getStoredPlaysData(e)
                              .then((e) => {
                                  let t = this.filterPlaysForSending(e);
                                  if (!t.length) {
                                      this.isSendingPlays.value = !1;
                                      return;
                                  }
                                  this.playsResourceSend(t)
                                      .then(() => {
                                          this.deletePlaysData(t).then(() => {
                                              this.sendStoredPlaysData();
                                          });
                                      })
                                      .catch((e) => {
                                          var a;
                                          (this.isSendingPlays.value = !1),
                                              e instanceof th.GX && e.statusCode === th.X1.BAD_REQUEST && this.deletePlaysData(t),
                                              null == (a = this.hooks) || a.afterError.promise(new t_('Error while sending plays', { cause: e }));
                                      });
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                sendPlay(e) {
                    this.isSendingPlays.value = !0;
                    let t = [e];
                    return this.playsResourceSend(t)
                        .then(() => {
                            this.isStorageEnabled() && this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
                        })
                        .catch((a) => {
                            throw (a instanceof th.GX && a.statusCode === th.X1.BAD_REQUEST ? this.deletePlaysData(t) : this.storeAndReplace(e), a);
                        })
                        .finally(() => {
                            if (!this.isStorageEnabled()) {
                                this.isSendingPlays.value = !1;
                                return;
                            }
                            this.sendStoredPlaysData();
                        });
                }
                clearSentPlayIds() {
                    this.sentPlayIds.clear();
                }
                clearPeriodicSendInterval() {
                    this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds;
                }
                hasSentPlayId(e) {
                    return this.sentPlayIds.has(e);
                }
                addSentPlayId(e) {
                    this.sentPlayIds.add(e);
                }
                addSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.add(e);
                }
                hasSentPartialPlayReportId(e) {
                    return this.sentPartialPlayReportIds.has(e);
                }
                clearSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.delete(e);
                }
                isSendingPlaysValue() {
                    return this.isSendingPlays.value;
                }
                onSendingPlaysStateChange(e) {
                    return this.isSendingPlays.onChange(e);
                }
                resetIsRestoredFlag(e) {
                    e.data.isRestored && (e.data.isRestored = !1);
                }
                handleSendingError(e, t, a) {
                    var i;
                    let r = '',
                        s = '';
                    a && ((r = a.context.data.meta.id), (s = a.entity.data.meta.id)),
                        null == (i = this.hooks) || i.afterError.promise(new t_(t, { cause: e, data: { contextId: r, entityId: s } }));
                }
                clearDynamicData(e) {
                    this.dynamicDataManager.clearDynamicData(e);
                }
                setPlaysDataForSending(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.add(t);
                    });
                }
                clearSendedPlaysData(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.has(t) && this.sendingInProgressForPlayId.delete(t);
                    });
                }
                filterPlaysForSending(e) {
                    var t = e.filter((e) => {
                        let { playId: t } = e;
                        return !this.sendingInProgressForPlayId.has(t);
                    });
                    let a = (0, ty.A)((0, tm.A)(t, 'playId'), tE);
                    return (0, tS.A)(a);
                }
                playsResourceSend(e) {
                    return (
                        this.setPlaysDataForSending(e),
                        this.gateway.sendPlays(e).finally(() => {
                            this.clearSendedPlaysData(e);
                        })
                    );
                }
                deletePlaysData(e, t, a) {
                    return this.isStorageEnabled()
                        ? this.store
                              .deleteAllByPlayId(e, t)
                              .then(() => {
                                  if (a) return a();
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                storeAndReplace(e) {
                    if (!this.isStorageEnabled()) return Promise.resolve();
                    let t = () => {
                        var t;
                        return null == (t = this.store) ? void 0 : t.storePlaysData(e);
                    };
                    return this.deletePlaysData([e], (e) => e.totalPlayedSeconds > 0, t);
                }
                isStorageEnabled() {
                    return !!this.toggles.enableLocalStoredPlaysData && this.store.isAvailable();
                }
                storePlay(e) {
                    return this.storeAndReplace(e);
                }
                sendCurrentEntityEndPlay() {
                    let e = this.playback.state.queueState.currentEntity.value;
                    if (e && this.playback.state.currentContext.value) {
                        if ((0, eq.i)(this.playback.state.currentContext.value)) return this.sendEndEntityPlay(e);
                        this.sendEndEntityPlay(e);
                    }
                    return Promise.resolve();
                }
                constructor(e) {
                    (0, O._)(this, 'store', void 0),
                        (0, O._)(this, 'gateway', void 0),
                        (0, O._)(this, 'dynamicDataManager', void 0),
                        (0, O._)(this, 'clock', void 0),
                        (0, O._)(this, 'toggles', void 0),
                        (0, O._)(this, 'hooks', void 0),
                        (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'isCrossfadeEnabled', void 0),
                        (0, O._)(this, 'sentPlayIds', new Set()),
                        (0, O._)(this, 'sentPartialPlayReportIds', new Set()),
                        (0, O._)(this, 'sendingInProgressForPlayId', new Set()),
                        (0, O._)(this, 'nextPeriodicSendTotalPlayedSeconds', 0),
                        (0, O._)(this, 'isSendingPlays', void 0),
                        (0, O._)(this, 'periodicSendIntervalSeconds', void 0),
                        (0, O._)(this, 'playDataPipeline', void 0),
                        (this.store = e.store),
                        (this.gateway = e.gateway),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.clock = e.clock),
                        (this.toggles = e.toggles),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled),
                        (this.periodicSendIntervalSeconds = e.periodicSendIntervalSeconds),
                        (this.isSendingPlays = new ei.cJ(!1)),
                        (this.playDataPipeline = this.buildPlayDataPipeline());
                }
            }
            !(function (e) {
                (e.PREPARE = 'prepare'), (e.PLAY = 'play');
            })(p || (p = {}));
            class tW {
                getDynamicDataByPlayId(e) {
                    var t, a, i;
                    let r = this.dynamicDataByPlayId.get(e);
                    return {
                        seek: null != (t = null == r ? void 0 : r.seek) && t,
                        pause: null != (a = null == r ? void 0 : r.pause) && a,
                        maxPlayerStage: null != (i = null == r ? void 0 : r.maxPlayerStage) ? i : p.PREPARE,
                        startTimestamp: null == r ? void 0 : r.startTimestamp,
                        radioSessionId: null == r ? void 0 : r.radioSessionId,
                        radioBatchId: null == r ? void 0 : r.radioBatchId,
                        isFromAutoflow: null == r ? void 0 : r.isFromAutoflow,
                        isFromPumpkin: null == r ? void 0 : r.isFromPumpkin,
                        changeReason: null == r ? void 0 : r.changeReason,
                        hookSource: null == r ? void 0 : r.hookSource,
                        entityChangeMethod: null == r ? void 0 : r.entityChangeMethod,
                        wasDislikedOnChange: null == r ? void 0 : r.wasDislikedOnChange,
                        wasAlreadyDisliked: null == r ? void 0 : r.wasAlreadyDisliked,
                        startedWithCrossfade: null == r ? void 0 : r.startedWithCrossfade,
                    };
                }
                updateDynamicData(e, t) {
                    var a;
                    let i = null != (a = this.dynamicDataByPlayId.get(e)) ? a : {};
                    this.dynamicDataByPlayId.set(e, { ...i, ...t });
                }
                clearDynamicData(e) {
                    this.dynamicDataByPlayId.delete(e);
                }
                hasDynamicData(e) {
                    return this.dynamicDataByPlayId.has(e);
                }
                markAsAlreadyDisliked(e) {
                    this.updateDynamicData(e, { wasAlreadyDisliked: !0 });
                }
                isAlreadyDisliked(e) {
                    var t;
                    return null != (t = this.getDynamicDataByPlayId(e).wasAlreadyDisliked) && t;
                }
                constructor() {
                    (0, O._)(this, 'dynamicDataByPlayId', new Map());
                }
            }
            var tq = a(1365);
            function tY(e, t) {
                if (!(0, eq.i)(null == e ? void 0 : e.context) || !e) return;
                let {
                        meta: { session: a, sessionTracks: i },
                        parentContext: r,
                    } = e.context.data,
                    s = null == a ? void 0 : a.radioSessionId,
                    n = i ? i.batchId : null == a ? void 0 : a.batchId,
                    l = i ? i.pumpkin : null == a ? void 0 : a.pumpkin;
                t.updateDynamicData(e.entity.playId, { radioSessionId: s, radioBatchId: n, isFromPumpkin: l, isFromAutoflow: !!r });
            }
            class tH {
                attachSubscriptions() {
                    this.attachPlayerStateEventSubscription(), this.attachProgressSubscriptions();
                }
                attachPlayerStateEventSubscription() {
                    this.playback.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = this.playback.state.queueState;
                        if (!e.value) return;
                        let t = e.value.entity.playId;
                        switch (this.playback.state.playerState.event.value) {
                            case F.Iu.PLAYING:
                                this.handlePlayingEvent(e.value, t);
                                break;
                            case F.Iu.PAUSED:
                                this.handlePausedEvent(e.value, t);
                                break;
                            case F.Iu.SET_PROGRESS:
                                this.handleSetProgressEvent(e.value, t);
                        }
                    });
                }
                handlePlayingEvent(e, t) {
                    tY(e, this.dynamicDataManager), this.dynamicDataManager.updateDynamicData(t, { maxPlayerStage: p.PLAY });
                }
                handlePausedEvent(e, t) {
                    let a = this.playback.state.playerState.progress.value;
                    Math.abs(a.position - a.duration) > 0.2 && this.dynamicDataManager.updateDynamicData(t, { pause: !0 }),
                        tk(e.context) && this.service.sendPausePlayReport(e);
                }
                handleSetProgressEvent(e, t) {
                    (0, tg.S)(e.context) || tk(e.context) || this.dynamicDataManager.updateDynamicData(t, { seek: !0 });
                }
                attachProgressSubscriptions() {
                    this.toggles.enableLocalStoredPlaysData && this.attachStorePlayOnProgress(),
                        (this.toggles.enablePartialPlayReporting || this.toggles.enablePeriodicSendPlays) && this.attachPartialPlayReporting();
                }
                attachStorePlayOnProgress() {
                    let e = (0, tq.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            !e ||
                                (0, tg.S)(e.context) ||
                                this.service
                                    .createProgressPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position, 'store play on progress')
                                    .then((e) => {
                                        e && e.playId && e.totalPlayedSeconds > 0 && this.service.storePlay(e);
                                    });
                        },
                        this.storePlaysProgressIntervalMs,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                attachPartialPlayReporting() {
                    let e = (0, tq.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            e && this.service.sendPartialPlayReport(e);
                        },
                        2e3,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                constructor(e) {
                    (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'service', void 0),
                        (0, O._)(this, 'dynamicDataManager', void 0),
                        (0, O._)(this, 'toggles', void 0),
                        (0, O._)(this, 'storePlaysProgressIntervalMs', void 0),
                        (this.playback = e.playback),
                        (this.service = e.service),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.toggles = e.toggles),
                        (this.storePlaysProgressIntervalMs = e.storePlaysProgressIntervalMs);
                }
            }
            class tz extends H.t {
                constructor(e, { code: t = 'E_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'MediaProviderException'), Object.setPrototypeOf(this, tz.prototype);
                }
            }
            class tQ extends tz {
                constructor(e, { code: t = 'E_GET_FILE_INFO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'GetFileInfoMediaProviderException'), Object.setPrototypeOf(this, tQ.prototype);
                }
            }
            class t$ {
                sendPlays(e) {
                    return this.playsResource.sendPlays({ clientNow: tD(), plays: e });
                }
                constructor(e) {
                    (0, O._)(this, 'playsResource', void 0), (this.playsResource = e);
                }
            }
            class tZ {
                storePlaysData(e) {
                    return Promise.resolve();
                }
                getStoredPlaysData(e) {
                    return Promise.resolve([]);
                }
                deleteAllByPlayId(e, t) {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger(e) {}
            }
            class tJ {
                apply(e) {
                    var t, a;
                    let { hooks: i, playback: r } = e,
                        s = this.params.store || new tZ(),
                        n = new t$(new tc(this.params.httpClient, this.params.playsResourceConfig));
                    (this.dynamicDataManager = new tW()),
                        (this.service = new tV({
                            store: s,
                            gateway: n,
                            dynamicDataManager: this.dynamicDataManager,
                            clock: () => new Date(),
                            toggles: this.toggles,
                            hooks: i,
                            playback: r,
                            isCrossfadeEnabled: this.params.isCrossfadeEnabled,
                            periodicSendIntervalSeconds: null != (t = this.params.periodicSendIntervalSeconds) ? t : 30,
                        })),
                        (this.playerStateSubscriptions = new tH({
                            playback: r,
                            hooks: i,
                            service: this.service,
                            dynamicDataManager: this.dynamicDataManager,
                            toggles: this.toggles,
                            storePlaysProgressIntervalMs: null != (a = this.params.storePlaysProgressIntervalMs) ? a : 1e4,
                        })),
                        this.playerStateSubscriptions.attachSubscriptions();
                    let {
                        playback: l,
                        hooks: o,
                        service: d,
                        dynamicDataManager: u,
                        toggles: c,
                        clock: h,
                    } = { playback: r, hooks: i, service: this.service, dynamicDataManager: this.dynamicDataManager, toggles: this.toggles, clock: () => new Date() };
                    o.beforeEntityPlayingProcessStart.tapPromise('PlaysPlugin', () => {
                        c.enableRemoveDuplicatePlays && d.clearSentPlayIds();
                        let { queueState: e } = l.state,
                            t = e.currentEntity.value;
                        if ((tY(t, u), t)) {
                            let e = tU(l),
                                a = t.entity.playId;
                            u.updateDynamicData(a, { startedWithCrossfade: e });
                        }
                        return d.sendStartEntityPlay(t), d.clearPeriodicSendInterval(), Promise.resolve();
                    }),
                        o.beforeMediaStartPlaying.tapPromise('PlaysPlugin', () => {
                            let { currentEntity: e } = l.state.queueState;
                            if (e.value) {
                                let t = e.value.entity.playId;
                                e.value.entity.isDisliked && u.markAsAlreadyDisliked(t),
                                    u.getDynamicDataByPlayId(t).startTimestamp || u.updateDynamicData(t, { startTimestamp: tD(h()) });
                            }
                            return Promise.resolve();
                        }),
                        o.afterMediaEndPlaying.tapPromise('PlaysPlugin', () => {
                            let {
                                    repeat: { value: e },
                                } = l.state.queueState,
                                t = l.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId,
                                i = (null == t ? void 0 : t.entity.isDisliked) && a && !u.isAlreadyDisliked(a);
                            return (
                                e === F.pM.ONE && t && a && !i && (u.updateDynamicData(a, { hookSource: y.AFTER_MEDIA_END_PLAYING }), d.sendEndEntityPlay(t)),
                                Promise.resolve()
                            );
                        }),
                        o.afterError.tapPromise('PlaysPlugin', (e) => {
                            if (e instanceof tQ || e instanceof F.LI) {
                                let e = l.state.queueState.currentEntity.value;
                                d.sendEndEntityPlay(e);
                            }
                            return Promise.resolve();
                        }),
                        o.beforeContextSet.tapPromise('PlaysPlugin', () => {
                            let e = l.state.queueState.currentEntity.value;
                            return e && u.updateDynamicData(e.entity.playId, { hookSource: y.BEFORE_CONTEXT_SET }), d.sendCurrentEntityEndPlay();
                        }),
                        o.afterContextEnd.tapPromise('PlaysPlugin', (e) => {
                            let t = l.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId;
                            return (
                                t &&
                                    a &&
                                    (u.updateDynamicData(a, {
                                        hookSource: y.AFTER_CONTEXT_END,
                                        entityChangeMethod: e,
                                        wasDislikedOnChange: t.entity.isDisliked && !u.isAlreadyDisliked(a),
                                    }),
                                    d.sendEndEntityPlay(t)),
                                Promise.resolve()
                            );
                        }),
                        o.afterSetupQueue.tap('PlaysPlugin', () => {
                            let { queueState: e } = l.state;
                            tY(e.currentEntity.value, u);
                        }),
                        o.beforeEntityChange.tapPromise('PlaysPlugin', (e) => {
                            var t;
                            let { currentEntity: a } = l.state.queueState,
                                { method: i } = e,
                                r = null == (t = a.value) ? void 0 : t.entity.playId;
                            return a.value && r
                                ? (u.updateDynamicData(r, {
                                      hookSource: y.BEFORE_ENTITY_CHANGE,
                                      entityChangeMethod: i,
                                      wasDislikedOnChange: a.value.entity.isDisliked && !u.isAlreadyDisliked(r),
                                  }),
                                  d.sendCurrentEntityEndPlay())
                                : Promise.resolve();
                        }),
                        o.beforeDestroy.tap(
                            'PlaysPlugin',
                            () =>
                                new Promise((e) => {
                                    if (!d.isSendingPlaysValue()) return void e();
                                    let t = d.onSendingPlaysStateChange((a) => {
                                        a || (t(), e());
                                    });
                                }),
                        ),
                        this.toggles.enableLocalStoredPlaysData &&
                            s.setErrorLogger((e) => {
                                i.afterError.promise(e);
                            }),
                        this.toggles.shouldDeletePlaysObjectStore && s.deleteDatabase(),
                        this.toggles.enableLocalStoredPlaysData &&
                            !this.toggles.shouldDeletePlaysObjectStore &&
                            s.openDatabase().then(() => {
                                var e;
                                null == (e = this.service) || e.sendStoredPlaysData();
                            });
                }
                constructor(e) {
                    var t, a, i, r, s, n, l, o, d, u, c, h, g, m, y, p;
                    (0, O._)(this, 'service', void 0),
                        (0, O._)(this, 'dynamicDataManager', void 0),
                        (0, O._)(this, 'playerStateSubscriptions', void 0),
                        (0, O._)(this, 'toggles', void 0),
                        (0, O._)(this, 'params', void 0),
                        (this.params = e),
                        (this.toggles = {
                            disableSendPlaysOnTrackStart: null != (d = null == (t = e.variables) ? void 0 : t.disableSendPlaysOnTrackStart) && d,
                            enableLocalStoredPlaysData: null != (u = null == (a = e.variables) ? void 0 : a.enableLocalStoredPlaysData) && u,
                            limitOfSendingPlaysData: null != (c = null == (i = e.variables) ? void 0 : i.limitOfSendingPlaysData) ? c : 25,
                            shouldDeletePlaysObjectStore: null != (h = null == (r = e.variables) ? void 0 : r.shouldDeletePlaysObjectStore) && h,
                            enableRemoveDuplicatePlays: null != (g = null == (s = e.variables) ? void 0 : s.enableRemoveDuplicatePlays) && g,
                            enablePartialPlayReporting: null != (m = null == (n = e.variables) ? void 0 : n.enablePartialPlayReporting) && m,
                            enablePeriodicSendPlays: null != (y = null == (l = e.variables) ? void 0 : l.enablePeriodicSendPlays) && y,
                            enableSendFadeFieldsInPlays: null != (p = null == (o = e.variables) ? void 0 : o.enableSendFadeFieldsInPlays) && p,
                        });
                }
            }
            var t0 = a(86473),
                t1 = a(99796);
            let t3 = 'playsHeartBeats';
            class t2 extends H.t {
                constructor(e, { code: t = 'E_PLAYS_IDB_STORE', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'PlaysStoreException'), Object.setPrototypeOf(this, t2.prototype);
                }
            }
            class t6 {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new t1.h(this.idbName).deleteDB({ onBlocked: t0.A }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storePlaysData(e) {
                    return this.executeTransaction((t) => t.put(t3, e).then(() => t.count(t3)))
                        .then((e) => ('number' == typeof e && e > this.storedPlaysLimit ? this.deleteOverLimitPlays(this.storedPlaysLimit) : Promise.resolve()))
                        .catch((e) => {
                            throw this.generateError('Saving Play Error', e);
                        });
                }
                getStoredPlaysData(e) {
                    return this.executeTransaction((t) => t.getAll(t3, null, e), { defaultValue: [] }).catch((e) => {
                        throw this.generateError('Error getting Plays', e);
                    });
                }
                deleteAllByPlayId(e, t) {
                    return Promise.all(
                        e.map((e) => {
                            let { playId: a } = e;
                            return this.iterateByCursor('playId', a, 'readwrite', (e) => (!t || t(e.value) ? e.delete() : Promise.resolve()));
                        }),
                    )
                        .then(t0.A)
                        .catch((e) => {
                            throw this.generateError('Error deleting Plays', e);
                        });
                }
                deleteOverLimitPlays(e) {
                    return this.iterateByCursor(null, null, 'readwrite', (t, a) => (a <= e ? Promise.resolve() : t.delete())).catch((e) => {
                        throw this.generateError('Error deleting overlimit Plays', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        r = 0,
                        s = (e) =>
                            e
                                ? i(e, ++r)
                                      .then(() => e.continue())
                                      .then(s)
                                : Promise.resolve();
                    return this.getCursor(e, t, a).then(s);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                openIdb(e) {
                    return new t1.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, i) => {
                                var r;
                                this.logError('Connection has been blocked'), null == e || null == (r = e.onBlocked) || r.call(e, t, a, i);
                            },
                            onTerminated: () => {
                                var t;
                                this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(t3, { keyPath: 'id', autoIncrement: !0 });
                                t.createIndex('playId', 'playId', { unique: !1 }), t.createIndex('trackId', 'trackId', { unique: !1 });
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            (this.idbIsAvailable = !1), this.logError('Open storage error', e);
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.executeTransaction(
                        (i) => {
                            let r = i.transaction([t3], a).objectStore(t3);
                            return e ? r.index(e).openCursor(t, 'prev') : r.openCursor(t, 'prev');
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let i = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, i);
                }
                generateError(e, t) {
                    var a;
                    let i = '[IndexedDB]['.concat(this.idbName, '.').concat(t3, ']: ').concat(e),
                        r = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new t2(i, { data: { originalError: r, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                constructor(e = 100) {
                    (0, O._)(this, 'storedPlaysLimit', void 0),
                        (0, O._)(this, 'idb', void 0),
                        (0, O._)(this, 'errorLogger', void 0),
                        (0, O._)(this, 'idbIsAvailable', !1),
                        (0, O._)(this, 'idbName', void 0),
                        (0, O._)(this, 'storageEstimate', void 0),
                        (this.storedPlaysLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_plays', '_').concat('1.0.0'));
                }
            }
            function t8(e) {
                return (null == e ? void 0 : e.data.type) === et.K.LegacyRadio;
            }
            function t5() {
                return new Date().toISOString();
            }
            function t4(e) {
                var t, a, i, r, s, n, l;
                let o,
                    {
                        contextEntityPair: d,
                        totalPlayedSeconds: u,
                        endPositionSeconds: c,
                        type: h,
                        maxPlayerStage: g,
                        seek: m,
                        pause: y,
                        startTimestamp: p,
                        radioSessionId: v,
                        radioBatchId: S,
                        isFromAutoflow: P,
                        isFromPumpkin: E,
                        changeReason: f,
                    } = e,
                    { entity: b, context: _ } = d,
                    I = String(b.data.meta.id),
                    k = (function (e) {
                        let t;
                        if ('albums' in e.data.meta) {
                            let {
                                data: {
                                    meta: { albums: a },
                                },
                            } = e;
                            if (a) {
                                let e = a[0];
                                e && (t = String(e.id));
                            }
                        }
                        return t;
                    })(b),
                    C = (null == (t = b.data.additional) ? void 0 : t.from) || _.from,
                    T = (null == (a = b.data.additional) ? void 0 : a.utmLink) || _.utmLink || {},
                    A = 0;
                (0, eZ.l)(b)
                    ? 'smartPreviewParams' in b.data.meta &&
                      (null == (i = b.data.meta.smartPreviewParams) ? void 0 : i.durationMs) &&
                      (A = (null == (r = b.data.meta.smartPreviewParams) ? void 0 : r.durationMs) / 1e3)
                    : 'durationMs' in b.data.meta && b.data.meta.durationMs && (A = b.data.meta.durationMs / 1e3);
                let D = u,
                    L = c;
                0.5 > Math.abs(A - u) && (D = A),
                    0.5 > Math.abs(A - c) && (L = A),
                    (o = (0, tg.S)(_) ? { generativeStreamId: String(null == (s = _.data.meta.stream) ? void 0 : s.id) } : { trackId: I }),
                    (tk(_) || t8(_)) && (L = D);
                let x = !!b.data.isRestored,
                    N = {
                        playId: b.playId,
                        timestamp: t5(),
                        totalPlayedSeconds: D,
                        endPositionSeconds: L,
                        trackLengthSeconds: A,
                        albumId: k,
                        from: C,
                        context: null != (n = _.data.playsContextType) ? n : _.data.type,
                        contextItem: String(_.data.meta.id),
                        addTracksToPlayerTime: b.addTracksToPlayerTime,
                        audioAuto: 'none',
                        audioOutputName: 'Динамик',
                        audioOutputType: 'Speaker',
                        maxPlayerStage: g,
                        seek: m,
                        pause: y,
                        startTimestamp: p,
                        fromCache: tA(b),
                        isRestored: x,
                        changeReason: f,
                        ...T,
                        ...o,
                    };
                if (
                    ((0, eq.i)(_) &&
                        _.data.meta.session &&
                        ((N.radioSessionId = null != v ? v : _.data.meta.session.radioSessionId),
                        (N.batchId = null != S ? S : _.data.meta.session.batchId),
                        (N.isFromAutoflow = P),
                        (N.isFromPumpkin = E),
                        (N.context = 'radio'),
                        (N.contextItem = _.data.meta.session.wave.stationId)),
                    (0, tw.K)(_) &&
                        ((N.playlistId = ''.concat(_.data.meta.uid, ':').concat(_.data.meta.kind)),
                        (N.contextItem = ''.concat(_.data.meta.uid, ':').concat(_.data.meta.kind))),
                    (0, tO.p)(_))
                ) {
                    let e = [tF.b.Search, tF.b.Other],
                        t = null != (l = _.data.overrideContextType) ? l : tF.b.Other;
                    (N.context = t), e.includes(t) && (N.contextItem = null);
                }
                return (0, eZ.l)(b) && (N.smartPreview = !0), { type: h, data: N };
            }
            !(function (e) {
                (e.START = 'start'), (e.END = 'end'), (e.PLAYING = 'playing'), (e.PAUSE = 'pause');
            })(v || (v = {}));
            let t9 = (e) => !!(e && 'object' == typeof e && 'playId' in e && 'totalPlayedSeconds' in e),
                t7 = (e) => {
                    let t = [e.find((e) => 0 === e.totalPlayedSeconds), (0, tp.A)(e, 'totalPlayedSeconds')];
                    return (0, tv.A)(t.filter(t9), 'totalPlayedSeconds');
                };
            class ae extends H.t {
                constructor(e, { code: t = 'E_PLAYS', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'PlaysException'), Object.setPrototypeOf(this, ae.prototype);
                }
            }
            class at {
                apply(e) {
                    var t, a, i;
                    let { hooks: r, playback: s } = e;
                    (this.hooks = r),
                        this.variables.enableLocalStoredPlaysData &&
                            (null == (t = this.playsStore) ||
                                t.setErrorLogger((e) => {
                                    r.afterError.promise(e);
                                })),
                        this.variables.shouldDeletePlaysObjectStore && (null == (a = this.playsStore) || a.deleteDatabase()),
                        this.variables.enableLocalStoredPlaysData &&
                            !this.variables.shouldDeletePlaysObjectStore &&
                            (null == (i = this.playsStore) ||
                                i.openDatabase().then(() => {
                                    this.sendStoredPlaysData();
                                })),
                        s.state.playerState.event.onChange(() => {
                            let { currentEntity: e } = s.state.queueState;
                            if (e.value)
                                switch (s.state.playerState.event.value) {
                                    case F.Iu.PLAYING:
                                        return (
                                            this.setVibeContextDynamicData(s),
                                            this.changeDynamicPlaysDataByPlayId({ playId: e.value.entity.playId, dynamicData: { maxPlayerStage: p.PLAY } })
                                        );
                                    case F.Iu.PAUSED:
                                        if (
                                            (Math.abs(s.state.playerState.progress.value.position - s.state.playerState.progress.value.duration) > 0.2 &&
                                                this.changeDynamicPlaysDataByPlayId({ playId: e.value.entity.playId, dynamicData: { pause: !0 } }),
                                            tk(e.value.context) || t8(e.value.context))
                                        )
                                            return void this.sendPausePlayReport(s, r);
                                        return;
                                    case F.Iu.SET_PROGRESS:
                                        if ((0, tg.S)(e.value.context) || tk(e.value.context) || t8(e.value.context)) return;
                                        return this.changeDynamicPlaysDataByPlayId({ playId: e.value.entity.playId, dynamicData: { seek: !0 } });
                                }
                        });
                    let n = (0, tq.A)(
                            () => {
                                let e = s.state.queueState.currentEntity.value;
                                if (!e || (0, tg.S)(e.context)) return;
                                let t = this.getDynamicPlaysDataByPlayId(e.entity.playId),
                                    { data: a } = t4({
                                        type: v.PLAYING,
                                        contextEntityPair: e,
                                        totalPlayedSeconds: e.entity.totalPlayedSeconds,
                                        endPositionSeconds: s.state.playerState.progress.value.position,
                                        ...t,
                                        changeReason: m.IN_PROGRESS,
                                    });
                                a.playId && a.totalPlayedSeconds > 0 && this.storeAndReplace(a);
                            },
                            this.storePlaysProgressIntervalMs,
                            { trailing: !1 },
                        ),
                        l = (0, tq.A)(
                            () => {
                                this.sendPartialPlayReport(s, r);
                            },
                            2e3,
                            { trailing: !1 },
                        );
                    this.variables.enableLocalStoredPlaysData && s.state.playerState.progress.onChange(n),
                        (this.variables.enablePartialPlayReporting || this.variables.enablePeriodicSendPlays) && s.state.playerState.progress.onChange(l),
                        r.beforeEntityPlayingProcessStart.tapPromise(
                            'PlaysPlugin',
                            () => (
                                this.variables.enableRemoveDuplicatePlays && this.sentPlayIds.clear(),
                                (this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds),
                                this.setVibeContextDynamicData(s),
                                this.sendStartEntityPlay(s, r),
                                Promise.resolve()
                            ),
                        ),
                        r.beforeMediaStartPlaying.tapPromise('PlaysPlugin', () => {
                            let { currentEntity: e } = s.state.queueState;
                            if (e.value) {
                                var t;
                                let a = e.value.entity.playId,
                                    i = null == (t = this.dynamicPlaysDataByEntitiesPlayId.get(a)) ? void 0 : t.startTimestamp;
                                e.value.entity.isDisliked && this.alreadyDislikedPlayIds.add(a),
                                    i || this.changeDynamicPlaysDataByPlayId({ playId: a, dynamicData: { startTimestamp: t5() } });
                            }
                            return Promise.resolve();
                        }),
                        r.afterMediaEndPlaying.tapPromise('PlaysPlugin', () => {
                            let {
                                    repeat: { value: e },
                                } = s.state.queueState,
                                t = s.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId,
                                i = (null == t ? void 0 : t.entity.isDisliked) && a && !this.alreadyDislikedPlayIds.has(a);
                            return e === F.pM.ONE && t && !i && (this.setChangeReasonToDynamicPlaysData(s, m.FINISH), this.sendEndEntityPlay(s, r)), Promise.resolve();
                        }),
                        r.afterError.tapPromise('PlaysPlugin', (e) => ((e instanceof tQ || e instanceof F.LI) && this.sendEndEntityPlay(s, r), Promise.resolve())),
                        r.beforeContextSet.tapPromise(
                            'PlaysPlugin',
                            () => (this.setChangeReasonToDynamicPlaysData(s, m.OTHER_TRACK), this.sendCurrentEntityEndPlay(s, r)),
                        ),
                        r.afterContextEnd.tapPromise('PlaysPlugin', (e) => {
                            let t = s.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId;
                            if (t) {
                                let i = m.FINISH;
                                t.entity.isDisliked && a && !this.alreadyDislikedPlayIds.has(a) ? (i = m.DISLIKE) : e === F.So.MOVE_FORWARD && (i = m.SKIP),
                                    this.setChangeReasonToDynamicPlaysData(s, i),
                                    this.sendEndEntityPlay(s, r);
                            }
                            return Promise.resolve();
                        }),
                        r.afterSetupQueue.tap('PlaysPlugin', () => this.setVibeContextDynamicData(s)),
                        r.beforeEntityChange.tapPromise('PlaysPlugin', (e) => {
                            var t, a;
                            let { currentEntity: i } = s.state.queueState,
                                { method: n } = e,
                                l = null == (t = i.value) ? void 0 : t.entity.playId;
                            switch (n) {
                                case F.So.AUTO_MOVE_FORWARD:
                                    this.setChangeReasonToDynamicPlaysData(s, m.FINISH);
                                    break;
                                case F.So.MOVE_FORWARD: {
                                    let e = m.SKIP;
                                    (null == (a = i.value) ? void 0 : a.entity.isDisliked) && l && !this.alreadyDislikedPlayIds.has(l) && (e = m.DISLIKE),
                                        this.setChangeReasonToDynamicPlaysData(s, e);
                                    break;
                                }
                                case F.So.MOVE_BACKWARD:
                                    this.setChangeReasonToDynamicPlaysData(s, m.BACK_SKIP);
                                    break;
                                case F.So.SET_INDEX:
                                case F.So.PLAY_CONTEXT:
                                case F.So.RESTART_CONTEXT:
                                    this.setChangeReasonToDynamicPlaysData(s, m.OTHER_TRACK);
                            }
                            return this.sendCurrentEntityEndPlay(s, r, l);
                        }),
                        r.beforeDestroy.tap(
                            'PlaysPlugin',
                            () =>
                                new Promise((e) => {
                                    if (!this.isSendingPlays.value) return void e();
                                    let t = this.isSendingPlays.onChange((a) => {
                                        a || (t(), e());
                                    });
                                }),
                        );
                }
                setVibeContextDynamicData(e) {
                    var t;
                    let { queueState: a } = e.state;
                    if ((0, eq.i)(null == (t = a.currentEntity.value) ? void 0 : t.context) && a.currentEntity.value) {
                        let {
                                meta: { session: e, sessionTracks: t },
                                parentContext: i,
                            } = a.currentEntity.value.context.data,
                            r = null == e ? void 0 : e.radioSessionId,
                            s = t ? t.batchId : null == e ? void 0 : e.batchId,
                            n = t ? t.pumpkin : null == e ? void 0 : e.pumpkin;
                        this.changeDynamicPlaysDataByPlayId({
                            playId: a.currentEntity.value.entity.playId,
                            dynamicData: { radioSessionId: r, radioBatchId: s, isFromPumpkin: n, isFromAutoflow: !!i },
                        });
                    }
                }
                setChangeReasonToDynamicPlaysData(e, t) {
                    let { currentEntity: a } = e.state.queueState;
                    a.value && this.changeDynamicPlaysDataByPlayId({ playId: a.value.entity.playId, dynamicData: { changeReason: t } });
                }
                isStorageEnabled() {
                    var e;
                    return !!this.variables.enableLocalStoredPlaysData && !!(null == (e = this.playsStore) ? void 0 : e.isAvailable());
                }
                setPlaysDataForSending(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.set(t);
                    });
                }
                clearSendedPlaysData(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.has(t) && this.sendingInProgressForPlayId.delete(t);
                    });
                }
                filterPlaysForSending(e) {
                    var t = e.filter((e) => {
                        let { playId: t } = e;
                        return !this.sendingInProgressForPlayId.has(t);
                    });
                    let a = (0, ty.A)((0, tm.A)(t, 'playId'), t7);
                    return (0, tS.A)(a);
                }
                playsResourceSend(e) {
                    return (
                        this.setPlaysDataForSending(e),
                        this.playsResource.sendPlays({ clientNow: t5(), plays: e }).finally(() => {
                            this.clearSendedPlaysData(e);
                        })
                    );
                }
                validatePlaysRequiredData(e, t) {
                    var a, i, r;
                    if (!e.entity.playId) {
                        let a = {};
                        return (
                            (a.contextId = e.context.data.meta.id),
                            (a.entityId = e.entity.data.meta.id),
                            null == (i = this.hooks) || i.afterError.promise(new ae('Trying to '.concat(t, ' without playId'), { data: a })),
                            !1
                        );
                    }
                    return (
                        !!((null == (a = e.entity.data.additional) ? void 0 : a.from) || e.context.from) ||
                        (null == (r = this.hooks) || r.afterError.promise(new ae('from field is required for '.concat(t, ', but was not found in plays data'))), !1)
                    );
                }
                async deletePlaysData(e, t, a) {
                    var i;
                    return this.isStorageEnabled()
                        ? null == (i = this.playsStore)
                            ? void 0
                            : i
                                  .deleteAllByPlayId(e, t)
                                  .then(() => {
                                      if (a) return a();
                                  })
                                  .catch((e) => {
                                      var t;
                                      null == (t = this.hooks) || t.afterError.promise(e);
                                  })
                        : Promise.resolve();
                }
                storeAndReplace(e) {
                    if (!this.isStorageEnabled()) return Promise.resolve();
                    let t = () => {
                        var t;
                        return null == (t = this.playsStore) ? void 0 : t.storePlaysData(e);
                    };
                    return this.deletePlaysData([e], (e) => e.totalPlayedSeconds > 0, t);
                }
                async sendStoredPlaysData() {
                    var e;
                    this.isSendingPlays.value = !0;
                    let t = this.variables.limitOfStoredPlaysData || 25;
                    return this.isStorageEnabled()
                        ? null == (e = this.playsStore)
                            ? void 0
                            : e
                                  .getStoredPlaysData(t)
                                  .then((e) => {
                                      let t = this.filterPlaysForSending(e);
                                      if (!t.length) {
                                          this.isSendingPlays.value = !1;
                                          return;
                                      }
                                      this.playsResourceSend(t)
                                          .then(() => {
                                              this.deletePlaysData(t).then(() => {
                                                  this.sendStoredPlaysData();
                                              });
                                          })
                                          .catch((e) => {
                                              var a;
                                              (this.isSendingPlays.value = !1),
                                                  e instanceof th.GX && e.statusCode === th.X1.BAD_REQUEST && this.deletePlaysData(t),
                                                  null == (a = this.hooks) || a.afterError.promise(new ae('Error while sending plays', { cause: e }));
                                          });
                                  })
                                  .catch((e) => {
                                      var t;
                                      null == (t = this.hooks) || t.afterError.promise(e);
                                  })
                        : Promise.resolve();
                }
                sendPlayData(e) {
                    this.isSendingPlays.value = !0;
                    let t = [e];
                    return this.playsResourceSend(t)
                        .then(() => {
                            this.isStorageEnabled() && this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
                        })
                        .catch((a) => {
                            throw (a instanceof th.GX && a.statusCode === th.X1.BAD_REQUEST ? this.deletePlaysData(t) : this.storeAndReplace(e), a);
                        })
                        .finally(() => {
                            if (!this.isStorageEnabled()) {
                                this.isSendingPlays.value = !1;
                                return;
                            }
                            this.sendStoredPlaysData();
                        });
                }
                sendCurrentEntityEndPlay(e, t, a) {
                    if (e.state.queueState.currentEntity.value && e.state.currentContext.value) {
                        if ((0, eq.i)(e.state.currentContext.value)) return this.sendEndEntityPlay(e, t);
                        this.sendEndEntityPlay(e, t).finally(() => {
                            a && this.alreadyDislikedPlayIds.delete(a);
                        });
                    }
                    return Promise.resolve();
                }
                sendStartEntityPlay(e, t) {
                    let a = e.state.queueState.currentEntity.value;
                    if (!a || !this.validatePlaysRequiredData(a, 'send start entity play')) return Promise.resolve();
                    try {
                        a.entity.addTracksToPlayerTime = ''.concat(Math.random().toString().slice(2), '-').concat(Math.ceil(Number(new Date()) / 1e3));
                        let {
                                seek: e,
                                pause: i,
                                radioSessionId: r,
                                radioBatchId: s,
                                isFromAutoflow: n,
                                isFromPumpkin: l,
                            } = this.getDynamicPlaysDataByPlayId(a.entity.playId),
                            o = t4({
                                type: v.START,
                                contextEntityPair: a,
                                totalPlayedSeconds: 0,
                                endPositionSeconds: 0,
                                seek: e,
                                pause: i,
                                radioSessionId: r,
                                radioBatchId: s,
                                isFromAutoflow: n,
                                isFromPumpkin: l,
                            });
                        if (!this.variables.disableSendPlaysOnTrackStart)
                            return this.sendPlayData(o.data).catch((e) => {
                                let i = '',
                                    r = '';
                                a && ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                                    t.afterError.promise(new ae('Error while sending plays', { cause: e, data: { contextId: i, entityId: r } }));
                            });
                    } catch (r) {
                        let e = '',
                            i = '';
                        a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
                            t.afterError.promise(new ae('Error while sending plays', { cause: r, data: { contextId: e, entityId: i } }));
                    }
                    return Promise.resolve();
                }
                sendPartialPlayReport(e, t) {
                    let a = e.state.queueState.currentEntity.value;
                    if (!a || !this.validatePlaysRequiredData(a, 'send partial play report')) return Promise.resolve();
                    try {
                        let i = this.sentPartialPlayReportIds.has(a.entity.playId),
                            r = a.entity.totalPlayedSeconds,
                            s = this.variables.enablePartialPlayReporting && !i && r >= 30.1,
                            n = this.variables.enablePeriodicSendPlays && this.nextPeriodicSendTotalPlayedSeconds < r;
                        if (!(0, tg.S)(a.context) && (s || n)) {
                            let { entity: i } = a,
                                l = this.getDynamicPlaysDataByPlayId(i.playId),
                                o = t4({
                                    type: v.PLAYING,
                                    contextEntityPair: a,
                                    totalPlayedSeconds: r,
                                    endPositionSeconds: e.state.playerState.progress.value.position,
                                    ...l,
                                    changeReason: m.IN_PROGRESS,
                                });
                            return this.sendPlayData(o.data)
                                .then(() => {
                                    s && this.sentPartialPlayReportIds.add(o.data.playId),
                                        n && (this.nextPeriodicSendTotalPlayedSeconds += this.periodicSendIntervalSeconds);
                                })
                                .catch((e) => {
                                    let i = '',
                                        r = '';
                                    a && ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                                        t.afterError.promise(new ae('Error while sending plays', { cause: e, data: { contextId: i, entityId: r } }));
                                });
                        }
                    } catch (r) {
                        let e = '',
                            i = '';
                        a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
                            t.afterError.promise(new ae('Error while sending plays partial play report', { cause: r, data: { contextId: e, entityId: i } }));
                    }
                    return Promise.resolve();
                }
                sendPausePlayReport(e, t) {
                    let a = e.state.queueState.currentEntity.value;
                    if (!a || !this.validatePlaysRequiredData(a, 'send pause play report')) return Promise.resolve();
                    try {
                        let i = a.entity.totalPlayedSeconds,
                            { entity: r } = a,
                            s = this.getDynamicPlaysDataByPlayId(r.playId),
                            n = t4({
                                type: v.PAUSE,
                                contextEntityPair: a,
                                totalPlayedSeconds: i,
                                endPositionSeconds: e.state.playerState.progress.value.position,
                                ...s,
                                changeReason: void 0,
                            });
                        return this.sendPlayData(n.data).catch((e) => {
                            let i = '',
                                r = '';
                            a && ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                                t.afterError.promise(new ae('Error while sending plays', { cause: e, data: { contextId: i, entityId: r } }));
                        });
                    } catch (r) {
                        let e = '',
                            i = '';
                        a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
                            t.afterError.promise(new ae('Error while sending plays pause play report', { cause: r, data: { contextId: e, entityId: i } }));
                    }
                    return Promise.resolve();
                }
                sendEndEntityPlay(e, t) {
                    let a = e.state.queueState.currentEntity.value;
                    if (!a || !this.validatePlaysRequiredData(a, 'send end entity play')) return Promise.resolve();
                    try {
                        let i = this.variables.enableRemoveDuplicatePlays,
                            r = !!i && this.sentPlayIds.has(a.entity.playId);
                        if (!this.sentPlayIds.has(a.entity.playId) && !r) {
                            let { entity: r } = a,
                                s = a.entity.totalPlayedSeconds,
                                { changeReason: n, ...l } = this.getDynamicPlaysDataByPlayId(r.playId);
                            i && this.sentPlayIds.add(r.playId);
                            let o = t4({
                                type: v.END,
                                contextEntityPair: a,
                                totalPlayedSeconds: s,
                                endPositionSeconds: e.state.playerState.progress.value.position,
                                changeReason: n,
                                ...l,
                            });
                            return (
                                this.dynamicPlaysDataByEntitiesPlayId.delete(o.data.playId),
                                this.variables.enablePartialPlayReporting && this.sentPartialPlayReportIds.delete(o.data.playId),
                                this.sendPlayData(o.data)
                                    .catch((e) => {
                                        let i = '',
                                            r = '';
                                        a && ((i = a.context.data.meta.id), (r = a.entity.data.meta.id)),
                                            t.afterError.promise(new ae('Error while sending plays', { cause: e, data: { contextId: i, entityId: r } }));
                                    })
                                    .finally(() => {
                                        r.data.isRestored && (r.data.isRestored = !1);
                                    })
                            );
                        }
                    } catch (r) {
                        let e = '',
                            i = '';
                        a && ((e = a.context.data.meta.id), (i = a.entity.data.meta.id)),
                            t.afterError.promise(new ae('Error while sending plays', { cause: r, data: { contextId: e, entityId: i } }));
                    }
                    return Promise.resolve();
                }
                changeDynamicPlaysDataByPlayId(e) {
                    let { playId: t, dynamicData: a } = e,
                        i = this.dynamicPlaysDataByEntitiesPlayId.get(t);
                    this.dynamicPlaysDataByEntitiesPlayId.set(t, { ...(null != i ? i : {}), ...(null != a ? a : {}) });
                }
                getDynamicPlaysDataByPlayId(e) {
                    var t, a, i;
                    let r = this.dynamicPlaysDataByEntitiesPlayId.get(e);
                    return {
                        seek: null != (t = null == r ? void 0 : r.seek) && t,
                        pause: null != (a = null == r ? void 0 : r.pause) && a,
                        maxPlayerStage: null != (i = null == r ? void 0 : r.maxPlayerStage) ? i : p.PREPARE,
                        startTimestamp: null == r ? void 0 : r.startTimestamp,
                        radioSessionId: null == r ? void 0 : r.radioSessionId,
                        radioBatchId: null == r ? void 0 : r.radioBatchId,
                        isFromAutoflow: null == r ? void 0 : r.isFromAutoflow,
                        isFromPumpkin: null == r ? void 0 : r.isFromPumpkin,
                        changeReason: null == r ? void 0 : r.changeReason,
                    };
                }
                constructor(e) {
                    (0, O._)(this, 'dynamicPlaysDataByEntitiesPlayId', new Map()),
                        (0, O._)(this, 'sendingInProgressForPlayId', new Map()),
                        (0, O._)(this, 'sentPlayIds', new Set()),
                        (0, O._)(this, 'sentPartialPlayReportIds', new Set()),
                        (0, O._)(this, 'alreadyDislikedPlayIds', new Set()),
                        (0, O._)(this, 'playsResource', void 0),
                        (0, O._)(this, 'playsStore', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'storePlaysProgressIntervalMs', void 0),
                        (0, O._)(this, 'periodicSendIntervalSeconds', void 0),
                        (0, O._)(this, 'nextPeriodicSendTotalPlayedSeconds', void 0),
                        (0, O._)(this, 'isSendingPlays', void 0),
                        (0, O._)(this, 'hooks', void 0);
                    let { httpClient: t, playsResourceConfig: a, variables: i } = e;
                    (this.playsResource = new tc(t, a)),
                        (this.variables = i || {}),
                        (this.storePlaysProgressIntervalMs = e.storePlaysProgressIntervalMs || 1e4),
                        (this.periodicSendIntervalSeconds = e.periodicSendIntervalSeconds || 30),
                        (this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds),
                        (this.playsStore = e.store),
                        (this.isSendingPlays = new ei.cJ(!1));
                }
            }
            let aa = 'playsHeartBeats';
            class ai extends H.t {
                constructor(e, { code: t = 'E_PLAYS_IDB_STORE', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'PlaysStoreException'), Object.setPrototypeOf(this, ai.prototype);
                }
            }
            class ar {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new t1.h(this.idbName).deleteDB({ onBlocked: t0.A }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storePlaysData(e) {
                    return this.executeTransaction((t) => t.put(aa, e).then(() => t.count(aa)))
                        .then((e) => ('number' == typeof e && e > this.storedPlaysLimit ? this.deleteOverLimitPlays(this.storedPlaysLimit) : Promise.resolve()))
                        .catch((e) => {
                            throw this.generateError('Saving Play Error', e);
                        });
                }
                getStoredPlaysData(e) {
                    return this.executeTransaction((t) => t.getAll(aa, null, e), { defaultValue: [] }).catch((e) => {
                        throw this.generateError('Error getting Plays', e);
                    });
                }
                deleteAllByPlayId(e, t) {
                    return Promise.all(
                        e.map((e) => {
                            let { playId: a } = e;
                            return this.iterateByCursor('playId', a, 'readwrite', (e) => (!t || t(e.value) ? e.delete() : Promise.resolve()));
                        }),
                    )
                        .then(t0.A)
                        .catch((e) => {
                            throw this.generateError('Error deleting Plays', e);
                        });
                }
                deleteOverLimitPlays(e) {
                    return this.iterateByCursor(null, null, 'readwrite', (t, a) => (a <= e ? Promise.resolve() : t.delete())).catch((e) => {
                        throw this.generateError('Error deleting overlimit Plays', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        r = 0,
                        s = (e) =>
                            e
                                ? i(e, ++r)
                                      .then(() => e.continue())
                                      .then(s)
                                : Promise.resolve();
                    return this.getCursor(e, t, a).then(s);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    (this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        }));
                }
                openIdb(e) {
                    return new t1.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, i) => {
                                var r;
                                this.logError('Connection has been blocked'), null == e || null == (r = e.onBlocked) || r.call(e, t, a, i);
                            },
                            onTerminated: () => {
                                var t;
                                this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(aa, { keyPath: 'id', autoIncrement: !0 });
                                t.createIndex('playId', 'playId', { unique: !1 }), t.createIndex('trackId', 'trackId', { unique: !1 });
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            (this.idbIsAvailable = !1), this.logError('Open storage error', e);
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.executeTransaction(
                        (i) => {
                            let r = i.transaction([aa], a).objectStore(aa);
                            return e ? r.index(e).openCursor(t, 'prev') : r.openCursor(t, 'prev');
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let i = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, i);
                }
                generateError(e, t) {
                    var a;
                    let i = '[IndexedDB]['.concat(this.idbName, '.').concat(aa, ']: ').concat(e),
                        r = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new ai(i, { data: { originalError: r, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                constructor(e = 100) {
                    (0, O._)(this, 'storedPlaysLimit', void 0),
                        (0, O._)(this, 'idb', void 0),
                        (0, O._)(this, 'errorLogger', void 0),
                        (0, O._)(this, 'idbIsAvailable', !1),
                        (0, O._)(this, 'idbName', void 0),
                        (0, O._)(this, 'storageEstimate', void 0),
                        (this.storedPlaysLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_plays', '_').concat('1.0.0'));
                }
            }
            class as {
                send(e) {
                    return this.transport.send(e, { topLevelParameter: 'player-metrics' });
                }
                constructor(e) {
                    (0, O._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            class an {
                send(e) {
                    return this.transport.send(e, { service: 'Player' });
                }
                constructor(e) {
                    (0, O._)(this, 'transport', void 0), (this.transport = e);
                }
            }
            let al = [];
            function ao(e, t) {
                let a,
                    i,
                    r = e.state.queueState.order.value,
                    s = e.state.queueState.index.value,
                    n = e.state.currentContext.value,
                    l = e.state.queueState.entityList.value,
                    o = e.state.queueState.repeat.value === F.pM.CONTEXT;
                al.forEach((e) => e());
                for (let t = s - 1; t >= 0; t--) {
                    let i = r[t];
                    if ('number' != typeof i) break;
                    let s = l[i],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_BACKWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        a = s.entity;
                        break;
                    }
                }
                let d = !!a || o;
                for (let t = s + 1; t < r.length; t++) {
                    let a = r[t];
                    if ('number' != typeof a) break;
                    let s = l[a],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_FORWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        i = s.entity;
                        break;
                    }
                }
                let u = !!i || (o && !!a) || (!o && t);
                if (
                    (n &&
                        ((n.availableActions.moveBackward.value = d),
                        (n.availableActions.moveForward.value = u && !(0, tg.S)(n)),
                        a || i || !o || ((n.availableActions.moveBackward.value = !1), (n.availableActions.moveForward.value = !1))),
                    (0, tg.S)(n))
                )
                    return;
                if (!a) {
                    let t = e.state.playerState.progress.onChange((t) => {
                        n &&
                            t &&
                            (((o = e.state.queueState.repeat.value === F.pM.CONTEXT) && !a && !i) || !o) &&
                            (n.availableActions.moveBackward.value = t.position > F.DS);
                    });
                    al.push(t);
                }
                let c = e.state.queueState.repeat.onChange((e) => {
                    if (n) {
                        if (e === F.pM.CONTEXT) {
                            (n.availableActions.moveBackward.value = !!a || (0 === s && !!i)), (n.availableActions.moveForward.value = !!i || !!a);
                            return;
                        }
                        (n.availableActions.moveBackward.value = !!a), (n.availableActions.moveForward.value = !!i || t);
                    }
                });
                al.push(c);
            }
            let ad = [G.S.AUDIOBOOK, G.S.FAIRY_TALE, G.S.PODCAST, G.S.COMMENT];
            var au = a(15099);
            let ac = (e) => {
                let { meta: t } = e.data,
                    a = 'albums' in t && t.albums && t.albums.length > 0 && t.albums[0] && t.albums[0].type === au._.PODCAST;
                return !!(('type' in t && t.type && ad.includes(t.type)) || a);
            };
            class ah {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        i = () => {
                            !(function (e) {
                                let { playback: t, isVibeRepeatEnabled: a } = e,
                                    { value: i } = t.state.currentContext,
                                    { value: r } = t.state.queueState.currentEntity;
                                if (!i || !r) return;
                                let { meta: s } = r.entity.data,
                                    n = (0, eq.i)(i),
                                    l = (0, tg.S)(i),
                                    o = 'type' in s && s.type && ad.includes(s.type),
                                    d = !n && !l && !o,
                                    u = (!n || a) && !l && !o;
                                (i.availableActions.shuffle.value = d),
                                    (i.availableActions.repeat.value = u),
                                    !d && t.state.queueState.shuffle.value && t.toggleShuffle();
                                let c = t.state.queueState.repeat.value,
                                    h = !u && c !== F.pM.NONE,
                                    g = u && n && c === F.pM.CONTEXT;
                                (h || g) && t.setRepeatMode(F.pM.NONE);
                            })({ playback: a, isVibeRepeatEnabled: this.variables.isVibeRepeatEnabled });
                            let { value: e } = a.state.currentContext,
                                { value: t } = a.state.queueState.currentEntity,
                                i = void 0 !== t;
                            if (void 0 !== e && i) {
                                let a = ac(t.entity);
                                e.availableActions.speed.value = !!a;
                            }
                        };
                    t.afterContextSet.tap('AvailableActionsPlugin', i),
                        t.beforeMediaStartPlaying.tap('AvailableActionsPlugin', i),
                        a.state.queueState.entityList.onChange(() => {
                            i(), ao(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.filterParams.onChange(() => {
                            i(), ao(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.index.onChange(() => {
                            ao(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.repeat.onChange((e) => {
                            let { value: t } = a.state.currentContext;
                            (0, eq.i)(t) && this.variables.isVibeRepeatEnabled && e === F.pM.CONTEXT && a.setRepeatMode(F.pM.ONE);
                        });
                }
                constructor({ variables: e }) {
                    (0, O._)(this, 'variables', void 0), (this.variables = e);
                }
            }
            class ag {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterContextSet.tap('ApplyContextPlugin', () => {
                        let e = a.state.currentContext.value;
                        e && e instanceof F.EX && e.apply({ hooks: t, playback: a });
                    });
                }
            }
            class am {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    t.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = t.state.queueState;
                        if (e.value)
                            switch (t.state.playerState.event.value) {
                                case F.Iu.PAUSED:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'event-'.concat(F.Iu.PAUSED) });
                                    break;
                                case F.Iu.WAITING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'event-'.concat(F.Iu.WAITING) });
                                    break;
                                case F.Iu.PLAYING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: i.PLAYING, reason: 'event-'.concat(F.Iu.PLAYING) });
                                    break;
                                case F.Iu.MEDIA_ELEMENT_ERROR:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'event-'.concat(F.Iu.MEDIA_ELEMENT_ERROR) });
                            }
                    }),
                        a.beforeEntityPlayingProcessStart.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.clearTimeStagesOfPlayback(), Promise.resolve();
                        }),
                        a.afterMediaStartPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: i.PLAYING, reason: 'hook-afterMediaStartPlaying' }), Promise.resolve();
                        }),
                        a.afterMediaEndPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'hook-afterMediaEndPlaying' }), Promise.resolve();
                        }),
                        a.beforeEntityChange.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'hook-beforeEntityChange' }), Promise.resolve();
                        }),
                        a.beforeContextSet.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return e.value && e.value.entity.saveTimeStageOfPlayback({ stage: i.NOT_PLAYING, reason: 'hook-beforeContextSet' }), Promise.resolve();
                        });
                }
            }
            function ay(e) {
                return (null == e ? void 0 : e.data.type) === K.R.Generative;
            }
            !(function (e) {
                (e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.NEXT = 'nexttrack'), (e.PREV = 'previoustrack'), (e.SEEK = 'seekto'), (e.STOP = 'stop');
            })(S || (S = {}));
            let ap = [40, 50, 80, 100, 200, 300, 400],
                av = [S.PLAY, S.PAUSE, S.STOP, S.SEEK];
            class aS {
                isSupported() {
                    return 'mediaSession' in window.navigator && 'MediaMetadata' in window;
                }
                handleMediaActionEvents(e, t) {
                    let { action: a } = e;
                    switch (a) {
                        case S.PLAY:
                            t.resume();
                            break;
                        case S.PAUSE:
                        case S.STOP:
                            t.pause();
                            break;
                        case S.NEXT:
                            t.moveForward();
                            break;
                        case S.PREV:
                            t.moveBackward();
                            break;
                        case S.SEEK: {
                            var i;
                            if (ay(null == (i = t.state.queueState.currentEntity.value) ? void 0 : i.entity)) return;
                            let { seekTime: a } = e;
                            a && t.setProgress(a);
                        }
                    }
                }
                prepareMetadata(e) {
                    let t,
                        a,
                        i = { title: e.title };
                    if (('artists' in e && (i.artist = (e.artists || []).map((e) => e.name).join(', ')), 'albums' in e)) {
                        var r, s;
                        i.album = null == (s = e.albums) || null == (r = s[0]) ? void 0 : r.title;
                    }
                    return (
                        'coverUri' in e && (t = e.coverUri),
                        'imageUrl' in e && (t = e.imageUrl),
                        t &&
                            (a = ap.map((e) => {
                                let a = ''.concat(e, 'x').concat(e);
                                'Safari' === this.browserName && (a = ''.concat(2 * e, 'x').concat(2 * e));
                                let i = '';
                                return (
                                    'string' == typeof t && (i = t.startsWith('blob:') ? t : 'https://'.concat(t.replace('%%', a))),
                                    { sizes: a, src: i, type: 'image/jpg' }
                                );
                            })),
                        (i.artwork = a),
                        i
                    );
                }
                updateMetadata(e) {
                    if (!e) {
                        window.navigator.mediaSession.metadata = null;
                        return;
                    }
                    let t = this.prepareMetadata(e);
                    window.navigator.mediaSession.metadata = new MediaMetadata(t);
                }
                handlePlayerEvents(e) {
                    let t, a;

                    e.state.currentMediaPlayer?.onChange((currentPlayer) => {
                        currentPlayer?.isCrossing.onChange((isCrossing) => {
                            if (!isCrossing) {
                                this.updateMetadata();
                                this.updateMetadata(e.state.queueState.currentEntity.value?.entity.data.meta);
                            }
                        });
                    });

                    e.state.playerState.event.onChange(() => {
                        if (e.state.playerState.event.value === F.Iu.UPDATING_PROGRESS && !e.state.currentMediaPlayer?.value.isCrossing?.value) {
                            var t, a;
                            this.updateMetadata(null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta),
                                ay(null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity)
                                    ? navigator.mediaSession.setPositionState({ duration: 0, position: 0 })
                                    : navigator.mediaSession.setPositionState(),
                                av.forEach((t) => {
                                    try {
                                        window.navigator.mediaSession.setActionHandler(t, (t) => this.handleMediaActionEvents(t, e));
                                    } catch (e) {
                                        console.log('The media session action "'.concat(t, '" is not supported yet.'));
                                    }
                                });
                        }
                    }),
                        e.state.currentContext.onChange(() => {
                            var i, r;
                            null == t || t(),
                                null == a || a(),
                                (t =
                                    null == (i = e.state.currentContext.value)
                                        ? void 0
                                        : i.availableActions.moveBackward.onChange(() => {
                                              var t, a;
                                              let i = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveBackward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(S.PREV, i ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          })),
                                (a =
                                    null == (r = e.state.currentContext.value)
                                        ? void 0
                                        : r.availableActions.moveForward.onChange(() => {
                                              var t, a;
                                              let i = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveForward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(S.NEXT, i ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          }));
                        });
                }
                apply(e) {
                    let { playback: t } = e;
                    this.isSupported() && this.handlePlayerEvents(t);
                }
                constructor({ browserName: e, browserVersion: t }) {
                    (0, O._)(this, 'browserName', void 0), (0, O._)(this, 'browserVersion', void 0), (this.browserName = e), (this.browserVersion = t);
                }
            }
            class aP {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterError.tapPromise('LoggerPlugin', (e) => {
                        let t,
                            i = a.state.queueState.currentEntity.value ? a.state.queueState.currentEntity.value.entity.mediaSourceData : null;
                        (t = e instanceof H.t ? e : new H.t('Error in Sonata player', { code: 'E_SONATA', cause: e })).name = '[Sonata] '.concat(t.name);
                        let r = t.cause ? (0, M.createObjectFromError)(t.cause) : void 0;
                        return this.logger.error(t, { ...t.data, ...(i || {}), code: t.code, cause: r, stack: t.stack, message: t.message }), Promise.resolve();
                    });
                }
                constructor(e) {
                    (0, O._)(this, 'logger', void 0);
                    let { logger: t } = e;
                    this.logger = t;
                }
            }
            (P || (P = {})).QUALITY_CHANGE = 'QUALITY_CHANGE';
            class aE {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.quality.onChange(() => {
                        t.state.playerState.status.value !== F.MT.IDLE &&
                            t.reloadEntity(P.QUALITY_CHANGE).catch((e) => {
                                a.afterError.promise(e);
                            });
                    });
                }
                constructor(e) {
                    (0, O._)(this, 'quality', void 0), (this.quality = e);
                }
            }
            var af = a(34720);
            let ab = (e) => 'object' == typeof e && e && 'rememberPosition' in e && 'boolean' == typeof e.rememberPosition;
            class a_ {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.beforeEntityChange.tapPromise('ContinuePlayingPlugin', () => {
                        let { position: e, duration: t } = this.getTimingsFromPlayback(a);
                        return new Promise((i) => {
                            e !== t && this.checkBeforeProgressSync(a), i();
                        });
                    }),
                        a.state.playerState.status.onChange((e) => {
                            (e === F.MT.PAUSED || e === F.MT.STOPPED) && (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                                e === F.MT.PLAYING && this.shouldSendProgressSync(a) && this.setTimeout(a);
                        }),
                        a.state.playerState.event.onChange(() => {
                            if (a.state.playerState.event.value === F.Iu.SET_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value,
                                    t = a.state.playerState.progress.value.position;
                                if (!e) return;
                                let { entity: i } = e;
                                ab(i.data.meta) && i.data.meta.rememberPosition && (e.lastSeekPosition = t);
                            }
                        }),
                        a.state.queueState.currentEntity.onChange(() => {
                            let e = a.state.queueState.currentEntity.value;
                            if (!e) return;
                            let { entity: t } = e;
                            if (ab(t.data.meta) && t.data.meta.rememberPosition && U(t.data.meta)) {
                                let { endPositionSec: a } = t.data.meta.streamProgress;
                                t.everFinished ? (e.positionSec = a) : (e.positionSec = void 0 !== e.lastSeekPosition ? e.lastSeekPosition : a);
                            }
                        });
                }
                checkBeforeProgressSync(e) {
                    var t;
                    if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
                    let { position: a, duration: i } = this.getTimingsFromPlayback(e),
                        r = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta.id;
                    Number.isFinite(i) &&
                        Number.isFinite(a) &&
                        i &&
                        a &&
                        r &&
                        (this.sendProgressSync({ duration: i, position: a, trackId: r }), e.state.playerState.status.value === F.MT.PLAYING && this.setTimeout(e));
                }
                sendProgressSync(e) {
                    let t = new Date().toISOString(),
                        { duration: a, position: i, trackId: r } = e;
                    this.streamsResource.progressSync({
                        lastSyncTimestamp: t,
                        trackStreams: [{ trackId: r, positionSec: i, trackLengthSec: a, finished: i === a, timestamp: t }],
                    });
                }
                shouldSendProgressSync(e) {
                    var t;
                    if (!this.variables.isEnabled) return !1;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    return !!(a && 'rememberPosition' in a && a.rememberPosition);
                }
                setTimeout(e) {
                    this.clearTimeout(),
                        (this.timeoutId = window.setTimeout(() => {
                            this.checkBeforeProgressSync(e);
                        }, 3e4));
                }
                clearTimeout() {
                    window.clearTimeout(this.timeoutId);
                }
                getTimingsFromPlayback(e) {
                    return { duration: Math.floor(e.state.playerState.progress.value.duration), position: Math.floor(e.state.playerState.progress.value.position) };
                }
                constructor(e) {
                    (0, O._)(this, 'streamsResource', void 0), (0, O._)(this, 'variables', void 0), (0, O._)(this, 'timeoutId', 0);
                    let { httpClient: t, streamsResourceConfig: a, variables: i } = e;
                    (this.streamsResource = new af.c(t, a)), (this.variables = i);
                }
            }
            var aI = a(81849),
                ak = a(34518);
            let aC = { [ak.N.AACMP4]: 'mp4a.40.2', [ak.N.HEAACMP4]: 'mp4a.40.5', [ak.N.FLACMP4]: 'flac' };
            class aT {
                get src() {
                    var e, t;
                    if ('error' in this.data) throw new H.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (!this.data.urls[0]) throw new H.t('No urls in DownloadInfoSource');
                    let a = this.getQueryParamsString();
                    return a
                        ? ''
                              .concat(this.data.urls[0])
                              .concat(a, '#t=')
                              .concat(null != (e = this.positionSec) ? e : 0)
                        : ''.concat(this.data.urls[0], '#t=').concat(null != (t = this.positionSec) ? t : 0);
                }
                get mirrorUrls() {
                    if ('error' in this.data) throw new H.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = this.getQueryParamsString(),
                        t = this.data.urls.slice(1);
                    return e ? t.map((t) => ''.concat(t).concat(e)) : t;
                }
                get key() {
                    if ('error' in this.data) throw new H.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (this.data.transport === aI.o.ENCRAW) return this.data.key;
                }
                get canBePreloaded() {
                    if ('error' in this.data) throw new H.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    return [ak.N.FLACMP4, ak.N.AACMP4, ak.N.HEAACMP4].includes(this.data.codec);
                }
                getQueryParamsString() {
                    if ('error' in this.data) throw new H.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = aC[this.data.codec],
                        t = e ? 'mp4' : void 0,
                        a = void 0 === this.sourceIndex ? void 0 : String(this.sourceIndex),
                        i = new URLSearchParams();
                    t && i.append('container', t), e && i.append('codec', e), this.vsid && i.append('vsid', this.vsid), a && i.append('source_index', a);
                    let r = i.toString();
                    return r ? '?'.concat(r) : void 0;
                }
                constructor(e) {
                    (0, O._)(this, 'type', 'downloadInfoSource'),
                        (0, O._)(this, 'data', void 0),
                        (0, O._)(this, 'vsid', void 0),
                        (0, O._)(this, 'sourceIndex', void 0),
                        (0, O._)(this, 'loadingTime', void 0),
                        (0, O._)(this, 'getFileInfoResponseTime', void 0),
                        (0, O._)(this, 'url', void 0),
                        (0, O._)(this, 'positionSec', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.loadingTime = e.loadingTime),
                        (this.getFileInfoResponseTime = e.getFileInfoResponseTime),
                        (this.url = e.url),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            !(function (e) {
                (e.WANT_PLAY_TRACK = 'WANT_PLAY_TRACK'),
                    (e.TRACK_IS_BUFFERING = 'TRACK_IS_BUFFERING'),
                    (e.TRACK_IS_PLAYING = 'TRACK_IS_PLAYING'),
                    (e.TRACK_IS_PLAYING_MISSED = 'TRACK_IS_PLAYING_MISSED'),
                    (e.TRACK_ERROR_PREPARE = 'TRACK_ERROR_PREPARE'),
                    (e.TRACK_ERROR_INITIAL_BUFFERING = 'TRACK_ERROR_INITIAL_BUFFERING'),
                    (e.TRACK_ERROR_PLAYING = 'TRACK_ERROR_PLAYING'),
                    (e.REQUEST_TIME = 'REQUEST_TIME'),
                    (e.TRACK_ERROR_PRE_FETCH = 'TRACK_ERROR_PRE_FETCH');
            })(E || (E = {})),
                ((f || (f = {})).GET_FILE_INFO = 'get_file_info'),
                (function (e) {
                    (e.GET_FILE_INFO = 'GetFileInfo'), (e.SOURCE = 'Source');
                })(b || (b = {})),
                (function (e) {
                    (e.SKIPPED = 'SKIPPED'), (e.NEXT = 'NEXT'), (e.FROM_QUEUE = 'FROM_QUEUE'), (e.OTHER = 'OTHER');
                })(_ || (_ = {}));
            var aA = a(92761),
                aD = a(30630);
            function aL(e) {
                switch (e) {
                    case aA.e.LOSSLESS:
                    case aD.e.HIGH_QUALITY:
                        return I.LOSSLESS;
                    case aA.e.NQ:
                    case aD.e.BALANCED:
                        return I.NQ;
                    case aA.e.LQ:
                    case aD.e.EFFICIENT:
                        return I.LQ;
                    case aA.e.PREVIEW:
                    case aD.e.PREVIEW:
                        return I.PREVIEW;
                    case aA.e.SMART_PREVIEW:
                        return I.SMART_PREVIEW;
                    default:
                        return;
                }
            }
            !(function (e) {
                (e.LOSSLESS = 'Lossless'), (e.NQ = 'NQ'), (e.LQ = 'LQ'), (e.PREVIEW = 'Preview'), (e.SMART_PREVIEW = 'SmartPreview');
            })(I || (I = {})),
                !(function (e) {
                    (e.TRACK = 'track'), (e.SET = 'set'), (e.TRAILER = 'trailer'), (e.NON_MUSIC = 'non_music');
                })(k || (k = {}));
            let ax = (e) => {
                let { entity: t } = e;
                return e.getFadeMode() === F.OQ.MIX ? k.SET : (0, eZ.l)(t) ? k.TRAILER : ac(t) || ay(t) ? k.NON_MUSIC : k.TRACK;
            };
            !(function (e) {
                (e.E_GET_MEDIA_SRC = 'E_GET_MEDIA_SRC'), (e.E_CREATE_SIGN = 'E_CREATE_SIGN'), (e.E_UNSUITABLE_ENTITY_TYPE = 'E_UNSUITABLE_ENTITY_TYPE');
            })(C || (C = {})),
                (function (e) {
                    (e.NETWORK = 'NETWORK'), (e.OTHER = 'OTHER');
                })(T || (T = {})),
                (function (e) {
                    (e.RESPONSE_CODE = 'ResponseCode'), (e.OTHER = 'OTHER');
                })(A || (A = {}));
            let aN = new Set(Object.values(C));
            function aR(e) {
                return e instanceof tz || ('object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code && aN.has(e.code));
            }
            class aw {
                setHooks(e) {
                    this.hooks = e;
                }
                getEntityQualityInfo(e) {
                    let t, a, i;
                    return (
                        !e.mediaSourceData ||
                            'error' in e.mediaSourceData.data ||
                            'downloadInfoSource' !== e.mediaSourceData.type ||
                            ((t = e.mediaSourceData.data.codec), (a = e.mediaSourceData.data.bitrate)),
                        e.expectedQuality && (i = aL(e.expectedQuality)),
                        { codec: t, bitrate: a, expectedQuality: i }
                    );
                }
                logEvent(e) {
                    let { event: t, eventName: a } = e;
                    this.enableDebugMode &&
                        (t
                            ? (console.group(''.concat(null != a ? a : 'Untitled Log Metrics Event Info')),
                              console.table(t.data),
                              console.group('Raw event'),
                              console.dir(t),
                              console.groupEnd(),
                              console.groupEnd())
                            : console.error('Event in logEvent method not provided'));
                }
                requestTime(e) {
                    var t, a;
                    if (!(e.mediaSourceData instanceof aT)) return null;
                    let i = String(e.data.meta.id),
                        r = null == (t = e.mediaSourceData) ? void 0 : t.getFileInfoResponseTime,
                        s = null == (a = e.mediaSourceData) ? void 0 : a.url,
                        n = null;
                    return (
                        'number' == typeof r && s && (n = { name: E.REQUEST_TIME, data: { trackId: i, urlType: f.GET_FILE_INFO, url: s, time: r } }),
                        this.logEvent({ event: n, eventName: null == n ? void 0 : n.name }),
                        n && this.send(n),
                        n
                    );
                }
                wantPlayTrack(e) {
                    let { entity: t } = e,
                        a = String(t.data.meta.id),
                        i = Math.trunc(performance.now()),
                        r = ax(e),
                        s = {
                            name: E.WANT_PLAY_TRACK,
                            data: { trackId: a, uuid: t.playId, expectedQuality: aL(this.mediaConfigController.quality.value), contentType: r },
                        };
                    return (
                        this.wantPlayTracksEvents.size > 0 && this.sendTrackIsPlayingMissed(),
                        this.wantPlayTracksEvents.set(t.playId, { time: i, event: s, trackId: a, contentType: r }),
                        this.logEvent({ event: s, eventName: null == s ? void 0 : s.name }),
                        this.send(s),
                        s
                    );
                }
                trackError(e, t) {
                    let { entity: a } = t,
                        { codec: i, bitrate: r, expectedQuality: s } = this.getEntityQualityInfo(a),
                        n = ax(t),
                        l = (function (e) {
                            let t = (function e(t) {
                                    return aR(t)
                                        ? t.code
                                        : (t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                            ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)
                                          ? e(t.cause)
                                          : void 0;
                                })(e),
                                a = (function e(t) {
                                    if (t instanceof Error) {
                                        if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                                        if ('cause' in t && void 0 !== t.cause) return e(t.cause);
                                    }
                                    if ('object' == typeof t && null !== t) {
                                        if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                                        if ('cause' in t && void 0 !== t.cause) return e(t.cause);
                                    }
                                })(e),
                                i = t === C.E_GET_MEDIA_SRC || 'number' == typeof a,
                                r = i ? T.NETWORK : T.OTHER,
                                s = i && 'number' == typeof a ? A.RESPONSE_CODE : A.OTHER,
                                n = 'object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code ? e.code : 'E_UNKNOWN',
                                l = i && 'number' == typeof a ? String(a) : n;
                            return { type: r, subType: s, responseCode: a, code: l };
                        })(e),
                        o = null;
                    return (
                        e instanceof tz
                            ? (o = {
                                  name: E.TRACK_ERROR_PREPARE,
                                  data: {
                                      trackId: String(a.data.meta.id),
                                      uuid: a.playId,
                                      type: l.type,
                                      subType: l.subType,
                                      name: e.name,
                                      code: l.code,
                                      bitrate: r,
                                      codec: i,
                                      expectedQuality: s,
                                      contentType: n,
                                      place: b.GET_FILE_INFO,
                                  },
                              })
                            : e instanceof F.LI && e.code === F.QC.PLAY
                              ? (o = {
                                    name: E.TRACK_ERROR_INITIAL_BUFFERING,
                                    data: {
                                        trackId: String(a.data.meta.id),
                                        uuid: a.playId,
                                        type: l.type,
                                        subType: l.subType,
                                        name: e.name,
                                        code: l.code,
                                        bitrate: r,
                                        codec: i,
                                        expectedQuality: s,
                                        contentType: n,
                                        place: b.SOURCE,
                                        ...(e.cause instanceof DOMException
                                            ? { causeCode: e.cause.code, causeMessage: e.cause.message, causeName: e.cause.name }
                                            : { causeCode: -1, causeMessage: 'Unknown error message', causeName: 'Unknown error name' }),
                                    },
                                })
                              : e instanceof F.LI && e.code === F.QC.MEDIA_ELEMENT_ERROR
                                ? (o = {
                                      name: E.TRACK_ERROR_PLAYING,
                                      data: {
                                          trackId: String(a.data.meta.id),
                                          uuid: a.playId,
                                          type: l.type,
                                          subType: l.subType,
                                          name: e.name,
                                          code: l.code,
                                          bitrate: r,
                                          codec: i,
                                          expectedQuality: s,
                                          contentType: n,
                                          place: b.SOURCE,
                                          ...(e.cause instanceof MediaError
                                              ? { causeCode: e.cause.code, causeMessage: e.cause.message }
                                              : { causeCode: -1, causeMessage: 'Unknown cause' }),
                                      },
                                  })
                                : e instanceof F.LI &&
                                  e.code === F.QC.PRE_FETCH &&
                                  (o = {
                                      name: E.TRACK_ERROR_PRE_FETCH,
                                      data: {
                                          trackId: String(a.data.meta.id),
                                          uuid: a.playId,
                                          type: l.type,
                                          subType: l.subType,
                                          name: e.name,
                                          code: l.code,
                                          bitrate: r,
                                          codec: i,
                                          expectedQuality: s,
                                          contentType: n,
                                          place: !(function e(t) {
                                              return (
                                                  !!aR(t) ||
                                                  (((t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                                      ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)) &&
                                                      e(t.cause))
                                              );
                                          })(e.cause)
                                              ? b.SOURCE
                                              : b.GET_FILE_INFO,
                                      },
                                  }),
                        e instanceof F.LI &&
                            this.wantPlayTracksEvents.has(a.playId) &&
                            (!o || !('causeCode' in o.data) || ('causeCode' in o.data && (null == o ? void 0 : o.data.causeCode) !== 20)) &&
                            this.wantPlayTracksEvents.delete(a.playId),
                        o && this.send(o),
                        this.logEvent({ event: o, eventName: null == o ? void 0 : o.name }),
                        o
                    );
                }
                trackIsBuffering(e) {
                    let { entity: t } = e,
                        a = String(t.data.meta.id),
                        { codec: i, bitrate: r } = this.getEntityQualityInfo(t);
                    if (0 === t.totalPlayedSeconds) return null;
                    let s = ax(e),
                        n = { name: E.TRACK_IS_BUFFERING, data: { trackId: a, uuid: t.playId, codec: i, bitrate: r, contentType: s } };
                    return this.send(n), this.logEvent({ event: n, eventName: n.name }), n;
                }
                trackIsPlaying(e) {
                    var t;
                    let { entity: a } = e,
                        i = String(a.data.meta.id),
                        r = this.wantPlayTracksEvents.get(a.playId),
                        s = null == r ? void 0 : r.time,
                        n = (function (e) {
                            switch (e) {
                                case F.So.SET_INDEX:
                                case F.So.MOVE_BACKWARD:
                                    return _.FROM_QUEUE;
                                case F.So.AUTO_MOVE_FORWARD:
                                    return _.NEXT;
                                case F.So.MOVE_FORWARD:
                                    return _.SKIPPED;
                                default:
                                    return _.OTHER;
                            }
                        })(null == (t = this.addtionalInfoByPlayId.get(this.lastAdditionalInfoKey)) ? void 0 : t.entityChangeMethod),
                        { codec: l, bitrate: o, expectedQuality: d } = this.getEntityQualityInfo(a),
                        u = ax(e),
                        c = null;
                    return (
                        'number' == typeof s &&
                            ((c = {
                                name: E.TRACK_IS_PLAYING,
                                data: {
                                    trackId: i,
                                    time: Math.trunc(performance.now() - s),
                                    uuid: a.playId,
                                    codec: l,
                                    bitrate: o,
                                    expectedQuality: d,
                                    extraTrackType: n,
                                    contentType: u,
                                },
                            }),
                            this.addtionalInfoByPlayId.delete(this.lastAdditionalInfoKey),
                            this.wantPlayTracksEvents.delete(a.playId),
                            (this.lastAdditionalInfoKey = null)),
                        c && this.send(c),
                        this.logEvent({ event: c, eventName: null == c ? void 0 : c.name }),
                        c
                    );
                }
                sendTrackIsPlayingMissed() {
                    let [e, { trackId: t, contentType: a }] = Array.from(this.wantPlayTracksEvents.entries())[0],
                        i = { name: E.TRACK_IS_PLAYING_MISSED, data: { trackId: t, uuid: e, contentType: a } };
                    return this.wantPlayTracksEvents.delete(e), this.send(i), this.logEvent({ event: i, eventName: i.name }), i;
                }
                trackHasBeenChanged(e, t) {
                    let { method: a } = t;
                    this.addtionalInfoByPlayId.size && this.addtionalInfoByPlayId.clear(),
                        (this.lastAdditionalInfoKey = e.playId),
                        this.addtionalInfoByPlayId.set(e.playId, { entityChangeMethod: a });
                }
                send(e) {
                    this.transports.forEach((t) => {
                        Promise.resolve()
                            .then(() => {
                                let a = t.send(e);
                                return a instanceof Promise ? a : Promise.resolve();
                            })
                            .catch((e) => {
                                var t;
                                null == (t = this.hooks) ||
                                    t.afterError.promise(new H.t('Failed to send metrics', { code: 'E_METRICS_SEND', cause: (0, M.createObjectFromError)(e) }));
                            });
                    });
                }
                constructor(e) {
                    var t;
                    (0, O._)(this, 'mediaConfigController', void 0),
                        (0, O._)(this, 'wantPlayTracksEvents', new Map()),
                        (0, O._)(this, 'addtionalInfoByPlayId', new Map()),
                        (0, O._)(this, 'lastAdditionalInfoKey', null),
                        (0, O._)(this, 'enableDebugMode', void 0),
                        (0, O._)(this, 'transports', void 0),
                        (0, O._)(this, 'hooks', void 0),
                        (this.enableDebugMode = null == (t = e.variables) ? void 0 : t.enableDebugMode),
                        (this.mediaConfigController = e.mediaConfigController),
                        (this.transports = e.transports);
                }
            }
            class aM {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    this.metricsEventsStore.setHooks(t),
                        a.state.playerState.event.onChange(() => {
                            let e = a.state.playerState.event.value;
                            if (e === F.Iu.WAITING && this.recentMediaPlayerEventType !== F.Iu.SETTING_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value;
                                e && this.metricsEventsStore.trackIsBuffering(e);
                            }
                            this.recentMediaPlayerEventType = e;
                        }),
                        t.beforeEntityChange.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value;
                            return t && this.metricsEventsStore.trackHasBeenChanged(t.entity, e), Promise.resolve();
                        }),
                        t.beforeEntityPlayingProcessStart.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsEventsStore.wantPlayTrack(e), Promise.resolve();
                        }),
                        t.afterError.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value;
                            return t && this.metricsEventsStore.trackError(e, t), Promise.resolve();
                        }),
                        t.afterMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsEventsStore.trackIsPlaying(e), Promise.resolve();
                        }),
                        t.beforeMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return e && this.metricsEventsStore.requestTime(e.entity), Promise.resolve();
                        });
                }
                constructor(e) {
                    (0, O._)(this, 'metricsEventsStore', void 0), (0, O._)(this, 'recentMediaPlayerEventType', null), (this.metricsEventsStore = new aw(e));
                }
            }
            var aO = a(12186);
            function aF(e, t, a) {
                return (
                    !(e instanceof Y) &&
                    !!e.isAvailable &&
                    (null === e.mediaSourceData ||
                        (!('downloadInfoSource' !== e.mediaSourceData.type || 'error' in e.mediaSourceData.data || tA(e)) &&
                            (!!(performance.now() - e.mediaSourceData.loadingTime > t) ||
                                (function (e) {
                                    switch (e) {
                                        case aA.e.LOSSLESS:
                                        case aA.e.HQ:
                                            return aD.e.HIGH_QUALITY;
                                        case aA.e.NQ:
                                            return aD.e.BALANCED;
                                        case aA.e.LQ:
                                    }
                                    return aD.e.EFFICIENT;
                                })(e.mediaSourceData.data.quality) !== a.quality.value)))
                );
            }
            class aG {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        i = (0, aO.A)(
                            () => {
                                this.releaseAllPreloadedSrc(a), this.preload(a, t);
                            },
                            1e3,
                            { trailing: !0 },
                        );
                    this.variables.isMediaSourcePreloadEnabled &&
                        (a.state.queueState.nextEntity.onChange(i),
                        this.mediaConfigController.quality.onChange(() => {
                            this.releaseAllPreloadedSrc(a), this.preload(a, t);
                        }));
                }
                preloadStrmUrls(e) {
                    let {
                        queueState: { order: t, entityList: a, nextIndex: i },
                    } = e.state;
                    if (null !== i.value) {
                        let e = (function (e) {
                                let { preloadCount: t, contextEntityPairs: a, index: i, order: r } = e,
                                    s = 0,
                                    n = i,
                                    l = [];
                                for (; s < t && !(n >= r.length); ) {
                                    let e = r[n];
                                    void 0 !== e && l.push(e), (n += 1), (s += 1);
                                }
                                return l.map((e) => a[e]);
                            })({ contextEntityPairs: a.value, index: i.value, order: t.value, preloadCount: this.config.entitiesToPreloadStrmUrlsCount }),
                            r = (function (e) {
                                let { contextEntityPairs: t, mediaSourceTtlMs: a, mediaConfigController: i } = e;
                                return t.filter((e) => aF(e.entity, a, i));
                            })({ contextEntityPairs: e, mediaSourceTtlMs: this.config.strmUrlsTtlMs, mediaConfigController: this.mediaConfigController }).map(
                                (e) => e.entity,
                            );
                        return 0 === r.length ? Promise.resolve([]) : this.mediaProvider.getMediaSourceBatch({ entities: r }).then(() => e);
                    }
                    return Promise.resolve([]);
                }
                preloadSources(e, t, a) {
                    return 0 === a.length
                        ? Promise.resolve()
                        : Promise.allSettled(
                              a.slice(0, this.config.entitiesToPreloadSourceCount).map((a) =>
                                  e
                                      .preloadSrc({ entity: a.entity, bufferGoal: this.config.bufferGoal, positionSec: a.positionSec })
                                      .then(() => {
                                          this.preloadedSrcArray.push(structuredClone(a.entity.mediaSourceData));
                                      })
                                      .catch((e) => t.afterError.promise(e)),
                              ),
                          ).then(() => Promise.resolve());
                }
                preload(e, t) {
                    this.preloadStrmUrls(e)
                        .then((a) => {
                            this.preloadSources(e, t, a).catch((e) => t.afterError.promise(e));
                        })
                        .catch((e) => {
                            t.afterError.promise(new F.LI('Preload strm urls error', { code: F.QC.PRE_FETCH, cause: e }));
                        });
                }
                releaseRedundantPreloadedSrc(e, t) {
                    if (!(this.preloadedSrcArray.length + t <= this.config.preloadedSourcesMaxCount))
                        for (; this.preloadedSrcArray.length + t !== this.config.preloadedSourcesMaxCount; ) {
                            let t = this.preloadedSrcArray.shift();
                            t && e.releaseSrc(t);
                        }
                }
                releaseAllPreloadedSrc(e) {
                    for (; this.preloadedSrcArray.length; ) {
                        let t = this.preloadedSrcArray.shift();
                        t && e.releaseSrc(t);
                    }
                }
                constructor({ mediaProvider: e, config: t, mediaConfigController: a, variables: i }) {
                    var r;
                    (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'mediaProvider', void 0),
                        (0, O._)(this, 'config', void 0),
                        (0, O._)(this, 'mediaConfigController', void 0),
                        (0, O._)(this, 'preloadedSrcArray', []),
                        (this.variables = { isMediaSourcePreloadEnabled: null != (r = null == i ? void 0 : i.isMediaSourcePreloadEnabled) && r }),
                        (this.mediaProvider = e),
                        (this.mediaConfigController = a),
                        (this.config = t);
                }
            }
            class aK {
                apply() {
                    this.trailerPlayback.hooks.afterContextEnd.tapPromise(
                        'TrailerPlugin',
                        () => (this.trailerPlayback.restartContext({ playAfterRestart: !1 }), Promise.resolve()),
                    ),
                        this.trailerPlayback.hooks.afterMediaPause.tapPromise('TrailerPlugin', () => (this.onTrailerPaused(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaResume.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve()));
                }
                constructor({ onTrailerPaused: e, onTrailerPlaying: t, playbackController: a, trailerPlaybackParams: i }) {
                    if (
                        ((0, O._)(this, 'onTrailerPaused', void 0),
                        (0, O._)(this, 'onTrailerPlaying', void 0),
                        (0, O._)(this, 'trailerPlayback', void 0),
                        (this.onTrailerPaused = e),
                        (this.onTrailerPlaying = t),
                        a.createPlayback(i.id, {
                            factory: i.factory,
                            entityProvider: i.entityProvider,
                            playbackConfig: i.playbackConfig,
                            mediaPlayerParams: i.mediaPlayerParams,
                            syncVolumeWithMainPlayback: !0,
                        }),
                        (this.trailerPlayback = a.getPlayback(i.id)),
                        i.plugins)
                    )
                        for (let e of i.plugins) e.apply({ playback: this.trailerPlayback, hooks: this.trailerPlayback.hooks });
                }
            }
            var aj = a(9348);
            (D || (D = {})).START = 'start';
            class aX {
                apply(e) {
                    let { playback: t } = e;
                    this.channel &&
                        ((this.channel.onmessage = (e) => {
                            let { type: a, id: i } = e.data;
                            t.state.playerState.status.value === F.MT.PLAYING && a === D.START && i !== this.activeStreamId && t.pause();
                        }),
                        t.state.playerState.status.onChange((e) => {
                            if (e === F.MT.PLAYING) {
                                var t;
                                null == (t = this.channel) || t.postMessage({ type: D.START, id: this.activeStreamId });
                            }
                        }));
                }
                constructor() {
                    (0, O._)(this, 'channel', void 0),
                        (0, O._)(this, 'activeStreamId', void 0),
                        (this.activeStreamId = (0, aj.A)()),
                        (this.channel = new BroadcastChannel('ya_music_playback'));
                }
            }
            class aU {
                push(e) {
                    this.callbacks.push(e);
                }
                exec() {
                    let e = [];
                    for (let t of this.callbacks)
                        if (0 === e.length) e.push(t());
                        else {
                            let a = e[e.length - 1].then(t);
                            e.push(a);
                        }
                    return Promise.allSettled(e).then(() => Promise.resolve());
                }
                constructor() {
                    (0, O._)(this, 'callbacks', []);
                }
            }
            let aB = {
                ynisonToPlayback: (e) => {
                    switch (e) {
                        case N.ot.ONE:
                            return F.pM.ONE;
                        case N.ot.ALL:
                            return F.pM.CONTEXT;
                        default:
                            return F.pM.NONE;
                    }
                },
            };
            class aV extends H.t {
                constructor(e, { code: t = 'E_YNISON', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'YnisonException'), Object.setPrototypeOf(this, aV.prototype);
                }
            }
            let aW = (e, t) => new aV('[YnisonException] '.concat(e), { cause: (0, M.createObjectFromError)(t) }),
                aq = (e, t) => {
                    var a;
                    let i = null == (a = e.player_state) ? void 0 : a.player_queue,
                        r = (null == i ? void 0 : i.current_playable_index) || 0,
                        s = ((null == i ? void 0 : i.playable_list) || [])[r],
                        n = null == i ? void 0 : i.entity_type;
                    return !s || t.includes(n) ? { index: 0 } : { entityId: s.playable_id, index: r };
                },
                aY = (e) => {
                    let { playableList: t, radioSessionId: a, getEntityData: i, restoredParams: { currentPlayableIndex: r } = {} } = e,
                        s = t
                            .filter((e) => {
                                let { playable_type: t, playable_id: a } = e;
                                return t === N.yi.TRACK && a;
                            })
                            .map((e, t) => i({ playable: e, wasPlayed: 'number' == typeof r && r >= t, radioSessionId: a })),
                        n = 'number' == typeof r && s[r];
                    return n && (n.isRestored = !0), s;
                };
            function aH(e) {
                let { playable: t, wasPlayed: a } = e;
                return { type: F.z4.Unloaded, meta: { id: t.playable_id, albumId: t.album_id_optional }, wasPlayed: a };
            }
            function az(e) {
                var t, a;
                let { playable: i, radioSessionId: r } = e;
                return {
                    type: K.R.VibeTrack,
                    meta: { id: i.playable_id, albumId: i.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: !0,
                    batchId: null != (a = null == (t = i.track_info) ? void 0 : t.batch_id_optional) ? a : void 0,
                    radioSessionId: r,
                };
            }
            let aQ = (e) => !isNaN(Number(e)) && Number(e) > 0,
                a$ = (e) => {
                    var t, a;
                    let i = null == (t = e.player_state) ? void 0 : t.player_queue,
                        r = (null == i ? void 0 : i.playable_list) || [];
                    return i.from_optional || (null == (a = r[0]) ? void 0 : a.from) || 'embedded-radio';
                },
                aZ = (e) => {
                    var t, a, i, r;
                    let s = null == (t = e.player_state) ? void 0 : t.player_queue,
                        n = (null == s ? void 0 : s.playable_list) || [],
                        l = null == (r = n[null == (i = e.player_state) || null == (a = i.player_queue) ? void 0 : a.current_playable_index]) ? void 0 : r.playable_id;
                    return l && n.length ? { type: et.K.Various, from: a$(e), meta: { id: l } } : null;
                },
                aJ = (e) => {
                    var t, a, i, r, s;
                    let n = null != (s = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.current_playable_index) ? s : 0;
                    return ((null == (r = e.player_state) || null == (i = r.player_queue) ? void 0 : i.playable_list) || []).slice(0, n + 1);
                },
                a0 = 'user:onyourwave',
                a1 = (e, t) => {
                    var a;
                    let i = null == (a = e.player_state) ? void 0 : a.player_queue,
                        r = null == i ? void 0 : i.entity_type;
                    if (!r) return null;
                    if (t.includes(r)) return { type: et.K.Vibe, from: a$(e), seeds: [a0], includeTracksInResponse: !0, meta: { id: a0 } };
                    switch (r) {
                        case N.$P.ALBUM:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    i = null == a ? void 0 : a.entity_id;
                                return aQ(i) ? { type: et.K.Album, from: a$(e), meta: { id: i } } : aZ(e);
                            })(e);
                        case N.$P.ARTIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    i = null == a ? void 0 : a.entity_id;
                                return aQ(i) ? { type: et.K.Artist, from: a$(e), meta: { id: i } } : aZ(e);
                            })(e);
                        case N.$P.PLAYLIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    i = null == a ? void 0 : a.entity_id,
                                    r = a$(e),
                                    [s, n] = String(i).split(':');
                                if (aQ(s) && aQ(n)) {
                                    let e = { uid: Number(s) };
                                    return { type: et.K.Playlist, from: r, meta: { id: i, kind: Number(n), owner: e } };
                                }
                                return aZ(e);
                            })(e);
                        case N.$P.RADIO:
                            return ((e) => {
                                var t, a, i, r, s;
                                let n = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    l = n.version.timestamp_ms,
                                    o = aJ(e),
                                    d = null == n ? void 0 : n.entity_id,
                                    u =
                                        null == (s = n.queue) || null == (r = s.wave_queue) || null == (i = r.entity_options) || null == (a = i.wave_entity_optional)
                                            ? void 0
                                            : a.session_id,
                                    c = o.map((e) => (e.album_id_optional ? ''.concat(e.playable_id, ':').concat(e.album_id_optional) : e.playable_id));
                                return 'string' == typeof d || u
                                    ? {
                                          type: et.K.Vibe,
                                          from: a$(e),
                                          seeds: [],
                                          includeTracksInResponse: !0,
                                          cloneSessionId: u,
                                          meta: { id: d },
                                          queue: c,
                                          interactive: !1,
                                          timeOfLastInteractionWithVibe: l,
                                      }
                                    : aZ(e);
                            })(e);
                        case N.$P.GENERATIVE:
                            return ((e) => {
                                var t, a;
                                let i = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    [r, s] = (null == i || null == (a = i.entity_id) ? void 0 : a.split(' ')) || [];
                                return r ? { type: et.K.Generative, from: a$(e), meta: { id: r, stream: s ? { id: r, url: s } : void 0 } } : null;
                            })(e);
                        case N.$P.VARIOUS:
                            return aZ(e);
                        default:
                            return null;
                    }
                };
            function a3(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                switch (e.state.playerState.status.value) {
                    case F.MT.PLAYING:
                        return !1;
                    case F.MT.PAUSED:
                    case F.MT.STOPPED:
                    case F.MT.IDLE:
                        return !0;
                    default:
                        return t;
                }
            }
            let a2 = (e, t) => ({ ...e, filterParams: t.queueState.filterParams.value }),
                a6 = (e, t) => {
                    if (!e) return null;
                    let a = { ...e };
                    return a.type === et.K.Vibe && (a.allowExplicit = t.queueState.filterParams.value.allowExplicit), a;
                };
            function a8(e) {
                let { playableList: t, trackSourcesMap: a, from: i, livePlayableIndex: r, currentPlayableIndex: s, radioSessionId: n, getEntityData: l } = e,
                    o = t
                        .filter((e) => {
                            let { playable_type: t, playable_id: a } = e;
                            return t === N.yi.TRACK && a;
                        })
                        .map((e, t) => l({ playable: e, trackSourcesMap: a, from: i, wasPlayed: t <= r, radioSessionId: n })),
                    d = o[s];
                return d && (d.isRestored = !0), o;
            }
            var a5 = a(29064);
            function a4(e, t) {
                var a, i;
                if (!e || e.wave_source) return;
                let r = e.phonoteka_source;
                if (!r) return;
                let s = null != (a = r.entity_context) ? a : a5.h.BASED_ON_ENTITY_BY_DEFAULT;
                return r.playlist_id
                    ? {
                          type: et.K.Playlist,
                          sourceContextType: s,
                          from: t,
                          meta: { id: r.playlist_id.id },
                          filter: null != (i = r.playlist_id.filter_optional) ? i : void 0,
                      }
                    : r.album_id
                      ? { type: et.K.Album, sourceContextType: s, from: t, meta: { id: Number(r.album_id.id) } }
                      : r.artist_id
                        ? { type: et.K.Artist, sourceContextType: s, from: t, meta: { id: Number(r.artist_id.id) } }
                        : { type: et.K.Various, sourceContextType: s, from: t, meta: { id: '' } };
            }
            function a9(e) {
                var t, a, i;
                let { playable: r, trackSourcesMap: s, from: n, wasPlayed: l, radioSessionId: o } = e,
                    d = null == (t = r.track_info) ? void 0 : t.track_source_key,
                    u = a4(void 0 !== d ? s.get(d) : void 0, n);
                return {
                    type: K.R.VibeTrack,
                    meta: { id: r.playable_id, albumId: r.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: l,
                    batchId: null != (i = null == (a = r.track_info) ? void 0 : a.batch_id_optional) ? i : void 0,
                    sourceContextData: u,
                    radioSessionId: o,
                };
            }
            function a7(e) {
                var t;
                let { playable: a, trackSourcesMap: i, from: r, wasPlayed: s } = e,
                    n = null == (t = a.track_info) ? void 0 : t.track_source_key,
                    l = a4(void 0 !== n ? i.get(n) : void 0, r);
                return { type: F.z4.Unloaded, meta: { id: a.playable_id, albumId: a.album_id_optional }, wasPlayed: s, sourceContextData: l };
            }
            window.onRemoteDeviceConnected = [];
            window.onRemoteDeviceDisconnected = [];
            class ie {
                onYnisonStateUpdated(e) {
                    const isRemoteControlEnabled = window.ENABLE_YNISON_REMOTE_CONTROL;
                    const allowedStatuses1 = [F.MT.ENDED, F.MT.IDLE, F.MT.PAUSED, F.MT.STOPPED, F.MT.MEDIA_ELEMENT_ERROR];
                    const allowedStatuses2 = [F.MT.ENDED, F.MT.IDLE, F.MT.STOPPED, F.MT.MEDIA_ELEMENT_ERROR];
                    const current_device_id = JSON.parse(localStorage.getItem('ynisonDeviceId'))?.value;
                    const currentStatus = this.playback.state.playerState.status.value;
                    const shouldApplyState = this.variables.shouldApplyState;
                    const isDeviceMatch = e.state.active_device_id_optional === current_device_id;
                    const selfStateDuped = e.state.player_state.status.version.device_id === current_device_id;
                    if (
                        isRemoteControlEnabled
                            ? shouldApplyState && ((!selfStateDuped && isDeviceMatch) || allowedStatuses2.includes(currentStatus))
                            : allowedStatuses1.includes(currentStatus) && shouldApplyState
                    ) {
                        if (isRemoteControlEnabled && !selfStateDuped) {
                            const currentDevice = e.state.devices.find((device) => device.info.device_id === e.state.player_state.status.version.device_id);
                            window.onRemoteDeviceConnected.forEach((listener) => listener(currentDevice));
                            window.remoteDeviceConnected = true;
                        }
                    } else if (isRemoteControlEnabled && !isDeviceMatch) {
                        window.onRemoteDeviceDisconnected.forEach((listener) => listener());
                        window.remoteDeviceConnected = false;
                    }
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    var t, a, i, r, s, n;
                    let l = new aU();
                    if (
                        ((function (e) {
                            if (!e.player_state || !e.player_state.player_queue) return !1;
                            let t = e.player_state.player_queue;
                            return 'playable_list' in t || 'entity_id' in t;
                        })(e.diff)
                            ? l.push(() => this.changeContext(e.state))
                            : (n = e.diff).player_state &&
                              n.player_state.player_queue &&
                              (('number' == typeof n.player_state.player_queue.current_playable_index &&
                                  !n.player_state.player_queue.playable_list &&
                                  !n.player_state.player_queue.entity_id) ||
                                  0) &&
                              l.push(() => this.changeEntityInCurrentContext(e.state)),
                        null == (a = e.diff.player_state) || null == (t = a.player_queue) ? void 0 : t.shuffle_optional)
                    ) {
                        let t = e.diff.player_state.player_queue.shuffle_optional;
                        l.push(() => this.changeShuffle(t));
                    }
                    if (null == (r = e.diff.player_state) || null == (i = r.player_queue) ? void 0 : i.options) {
                        let t = e.diff.player_state.player_queue.options;
                        if (e.state.player_state.player_queue.entity_type === N.$P.RADIO) {
                            let e = t.repeat_mode === N.ot.ALL,
                                a = t.repeat_mode === N.ot.ONE && !0 !== this.variables.useWaveQueue;
                            (e || a) && (t = { ...t, repeat_mode: N.ot.NONE });
                        }
                        l.push(() => this.changeOptions(t));
                    }
                    if (null == (s = e.diff.player_state) ? void 0 : s.status) {
                        let t = e.diff.player_state.status;
                        l.push(() => this.changeStatus(t));
                    }
                    return l.exec();
                }
                changeOptions(e) {
                    let t = aB.ynisonToPlayback(e.repeat_mode);
                    return this.playback.setRepeatMode(t), Promise.resolve();
                }
                changeShuffle(e) {
                    let t = !!(Array.isArray(e.playable_indices) && e.playable_indices.length);
                    return this.playback.setShuffle(t), Promise.resolve();
                }
                changeStatus(e) {
                    let t = new aU(),
                        a = Number(e.playback_speed),
                        i = Number(e.progress_ms) / 1e3;
                    return (
                        Number.isNaN(a) || t.push(() => this.playback.setSpeed(a).then(() => Promise.resolve())),
                        Number.isNaN(i) ||
                            t.push(() => {
                                let e = this.playback.state.playerState.status.value === F.MT.PLAYING,
                                    t = Math.abs(this.playback.state.playerState.progress.value.position - i);
                                if (e && t > N.O5) return this.playback.setProgress(i).then(() => Promise.resolve());
                                let {
                                    currentEntity: { value: a },
                                } = this.playback.state.queueState;
                                return a && (a.positionSec = i), Promise.resolve();
                            }),
                        void 0 !== e.paused && e.paused !== a3(this.playback, e.paused) && t.push(() => this.playback.togglePause()),
                        t.exec()
                    );
                }
                changeContext(e) {
                    var t, a, i;
                    let r =
                            this.variables.useWaveQueue &&
                            (null == (i = e.player_state) || null == (a = i.player_queue) || null == (t = a.queue) ? void 0 : t.wave_queue) !== void 0,
                        s = r ? this.getContextParamsWithWaveQueue(e) : this.getContextParams(e);
                    return s
                        ? this.playback
                              .setContext(s)
                              .then(() => {
                                  let t = this.playback.state.queueState.currentEntity.value;
                                  if ((t && !t.entity.hasPlayId() && (t.entity.playId = (0, aj.A)()), r)) {
                                      var a, i, s, n, l;
                                      let t =
                                          null !=
                                          (l =
                                              null == (n = e.player_state) || null == (s = n.player_queue) || null == (i = s.queue) || null == (a = i.wave_queue)
                                                  ? void 0
                                                  : a.live_playable_index)
                                              ? l
                                              : 0;
                                      this.playback.state.queueState.livePlayableIndex.value = t;
                                  }
                                  return this.playback.stop();
                              })
                              .then(() => {
                                  void 0 !== e.player_state.status.paused &&
                                      e.player_state.status.paused !== a3(this.playback, e.player_state.status.paused) &&
                                      this.playback.togglePause();
                              })
                              .catch((e) => {
                                  this.playback.hooks.afterError.promise(aW('PlaybackSetContextError', e));
                              })
                        : Promise.resolve();
                }
                changeEntityInCurrentContext(e) {
                    let t = e.player_state.player_queue.current_playable_index;
                    return this.playback.setEntityByIndex(t);
                }
                getContextParamsWithWaveQueue(e) {
                    try {
                        var t, a, i, r, s, n, l, o, d, u, c;
                        let h = a6(a1(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if (!h) return null;
                        let g = this.factory.createContext({ data: h }),
                            m = null == (t = e.player_state) ? void 0 : t.player_queue,
                            y = null == m || null == (a = m.queue) ? void 0 : a.wave_queue,
                            p = null == y || null == (i = y.entity_options) ? void 0 : i.track_sources,
                            v = null != (r = null == y ? void 0 : y.live_playable_index) ? r : 0,
                            S = null != (s = null == m ? void 0 : m.from_optional) ? s : '',
                            P = null != (n = null == m ? void 0 : m.current_playable_index) ? n : 0,
                            E = a2(aq(e, this.fallbackTypesQueueToVibe), this.playback.state),
                            f = null != (l = null == m ? void 0 : m.playable_list) ? l : [];
                        if ((0, tg.S)(g)) return { context: g, loadContextMeta: !0 };
                        let b = (function (e) {
                            let t = new Map();
                            if (!e) return t;
                            for (let a of e) t.set(a.key, a);
                            return t;
                        })(p);
                        if ((0, eq.i)(g)) {
                            let e = !(function (e, t, a) {
                                    let i = e.length - 1;
                                    return t !== i && a <= i;
                                })(f, P, v)
                                    ? f
                                    : f.slice(0, -1),
                                t =
                                    null == (c = m.queue) || null == (u = c.wave_queue) || null == (d = u.entity_options) || null == (o = d.wave_entity_optional)
                                        ? void 0
                                        : o.session_id,
                                a = a8({
                                    playableList: e,
                                    trackSourcesMap: b,
                                    from: S,
                                    livePlayableIndex: v,
                                    currentPlayableIndex: P,
                                    radioSessionId: t,
                                    getEntityData: a9,
                                });
                            return { context: g, entitiesData: a.length ? a : void 0, loadContextMeta: !0, queueParams: E };
                        }
                        let _ = a8({ playableList: f, trackSourcesMap: b, from: S, livePlayableIndex: v, currentPlayableIndex: P, getEntityData: a7 });
                        if ((0, tO.p)(g)) return { context: g, entitiesData: _, loadContextMeta: !1, queueParams: E };
                        if (200 === f.length) return { context: g, loadContextMeta: !0, queueParams: E };
                        return { context: g, entitiesData: _, loadContextMeta: !0, queueParams: E };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(aW('GetContextParamsWithWaveQueueError', e)), null;
                    }
                }
                getContextParams(e) {
                    try {
                        var t, a, i, r, s, n, l;
                        let o = a6(a1(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if (!o) return null;
                        let d = this.factory.createContext({ data: o }),
                            u = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.playable_list,
                            c = a2(aq(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if ((0, eq.i)(d)) {
                            let t = null == (i = e.player_state) ? void 0 : i.player_queue,
                                a =
                                    null == (l = t.queue) || null == (n = l.wave_queue) || null == (s = n.entity_options) || null == (r = s.wave_entity_optional)
                                        ? void 0
                                        : r.session_id,
                                o = aY({ playableList: aJ(e), getEntityData: az, radioSessionId: a, restoredParams: { currentPlayableIndex: t.current_playable_index } });
                            return { context: d, entitiesData: o.length ? o : void 0, loadContextMeta: !0, queueParams: c };
                        }
                        let h = aY({ playableList: u, getEntityData: aH, restoredParams: { currentPlayableIndex: e.player_state.player_queue.current_playable_index } });
                        if ((0, tO.p)(d)) return { context: d, entitiesData: h, loadContextMeta: !1, queueParams: c };
                        if ((0, tg.S)(d)) return { context: d, loadContextMeta: !0 };
                        if (200 === u.length) return { context: d, loadContextMeta: !0, queueParams: c };
                        return { context: d, entitiesData: h, loadContextMeta: !0, queueParams: c };
                    } catch (e) {
                        return this.playback.hooks.afterError.promise(aW('GetContextParamsError', e)), null;
                    }
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ factory: e, playback: t, ynisonStateController: a, variables: i, fallbackTypesQueueToVibe: r }) {
                    (0, O._)(this, 'factory', void 0),
                        (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'unlisteners', void 0),
                        (0, O._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.playback = t),
                        (this.variables = i),
                        (this.unlisteners = []),
                        (this.fallbackTypesQueueToVibe = null != r ? r : []);
                    let s = a.on(N.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonPlugin');
                    this.unlisteners.push(s);
                    let n = a.fullState;
                    this.onYnisonStateUpdated({ prevState: n.prevState, state: n.state, diff: n.state });
                }
            }
            let it = (e) => e.hidden,
                ia = (e) => {
                    var t, a, i, r, s, n, l;
                    switch (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.type) {
                        case K.R.Music:
                        case K.R.VibeTrack:
                            return (null == (a = e.state.currentContext.value) ? void 0 : a.data.meta.id)
                                ? String(null == (i = e.state.currentContext.value) ? void 0 : i.data.meta.id)
                                : '';
                        case K.R.Generative:
                            return (null == (r = e.state.currentContext.value) ? void 0 : r.data.meta.id)
                                ? String(null == (s = e.state.currentContext.value) ? void 0 : s.data.meta.id)
                                : '';
                        default:
                            return (null == (n = e.state.currentContext.value) ? void 0 : n.data.meta.id)
                                ? String(null == (l = e.state.currentContext.value) ? void 0 : l.data.meta.id)
                                : '';
                    }
                },
                ii = (e) => {
                    switch (e) {
                        case et.K.Album:
                            return N.$P.ALBUM;
                        case et.K.Playlist:
                            return N.$P.PLAYLIST;
                        case et.K.Artist:
                            return N.$P.ARTIST;
                        case et.K.Vibe:
                            return N.$P.RADIO;
                        case et.K.Various:
                            return N.$P.VARIOUS;
                        case et.K.Generative:
                            return N.$P.GENERATIVE;
                        default:
                            return N.$P.VARIOUS;
                    }
                },
                ir = (e) => {
                    var t, a, i;
                    return ((e) => 'object' == typeof e && e && 'durationMs' in e && 'number' == typeof e.durationMs)(
                        null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta,
                    ) && null != (i = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta.durationMs)
                        ? i
                        : 0;
                },
                is = (e, t, a) => ''.concat(e, ':').concat(t, ':').concat(a);
            var il = a(41730);
            function io(e) {
                var t, a, i, r, s, n, l;
                if (!e) return;
                let o = { entityContext: null != (t = e.data.sourceContextType) ? t : a5.h.BASED_ON_ENTITY_BY_DEFAULT };
                if ((0, tw.K)(e)) {
                    let { uid: t, kind: n, id: l } = null != (a = e.data.meta) ? a : {},
                        d = void 0 !== l ? String(l) : void 0,
                        [u, c] = null != (i = null == d ? void 0 : d.split(':')) ? i : [];
                    return (
                        u && c
                            ? ((o.playlistId = d), (o.filterOptional = null != (r = e.data.filter) ? r : null))
                            : void 0 !== t && void 0 !== n && ((o.playlistId = ''.concat(t, ':').concat(n)), (o.filterOptional = null != (s = e.data.filter) ? s : null)),
                        o
                    );
                }
                if ((0, ez.F)(e)) {
                    let { id: t } = null != (n = e.data.meta) ? n : {};
                    return void 0 !== t && (o.albumId = String(t)), o;
                }
                if ((0, il.T)(e)) {
                    let { id: t } = null != (l = e.data.meta) ? l : {};
                    void 0 !== t && (o.artistId = String(t));
                }
                return o;
            }
            function id(e, t, a) {
                return t && 0 !== t.length
                    ? a
                        ? (function (e, t) {
                              let a = io(e);
                              if (!a) {
                                  var i;
                                  return null != (i = t.waveSourceKey) ? i : 0;
                              }
                              let { entityContext: r, playlistId: s, albumId: n, artistId: l } = a;
                              if (s) {
                                  let e = is(r, 'playlist', s),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (n) {
                                  let e = is(r, 'album', n),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (l) {
                                  let e = is(r, 'artist', l),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              let o = t.contextOnlyMap.get(r);
                              return null != o ? o : 0;
                          })(e, a)
                        : (function (e, t) {
                              var a, i;
                              let r = io(e);
                              if (!r) {
                                  let e = t.find((e) => void 0 !== e.wave_source);
                                  return null != (a = null == e ? void 0 : e.key) ? a : 0;
                              }
                              let { entityContext: s, playlistId: n, albumId: l, artistId: o } = r,
                                  d = t.find((e) => {
                                      var t, a, i;
                                      return (
                                          !!e.phonoteka_source &&
                                          e.phonoteka_source.entity_context === s &&
                                          ((!!n && (null == (t = e.phonoteka_source.playlist_id) ? void 0 : t.id) === n) ||
                                              (!!l && (null == (a = e.phonoteka_source.album_id) ? void 0 : a.id) === l) ||
                                              (!!o && (null == (i = e.phonoteka_source.artist_id) ? void 0 : i.id) === o))
                                      );
                                  });
                              if (d) return d.key;
                              let u = t.find(
                                  (e) =>
                                      !!e.phonoteka_source &&
                                      e.phonoteka_source.entity_context === s &&
                                      (!n || !e.phonoteka_source.playlist_id) &&
                                      (!l || !e.phonoteka_source.album_id) &&
                                      (!o || !e.phonoteka_source.artist_id),
                              );
                              return null != (i = null == u ? void 0 : u.key) ? i : 0;
                          })(e, t)
                    : 0;
            }
            function iu(e) {
                let { playableList: t, rangeStart: a, livePlayableIndex: i, isVibeQueue: r } = e;
                return r ? Math.max(0, Math.min(i - a, t.length)) : t.length;
            }
            let ic = [a5.h.BASED_ON_ENTITY_BY_DEFAULT, a5.h.ARTIST_MY_COLLECTION, a5.h.ARTIST_FAMILIAR_FROM_WAVE];
            function ih(e) {
                return { wave_source: e ? { source_type: e } : {} };
            }
            function ig(e) {
                return { phonoteka_source: e };
            }
            class im {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.status.onChange((e) => {
                            switch (e) {
                                case F.MT.PLAYING:
                                case F.MT.PAUSED:
                                    this.updateYnisonState();
                            }
                        }),
                        t = this.playback.state.playerState.event.onChange((e) => {
                            switch (e) {
                                case F.Iu.SET_PROGRESS:
                                    this.ynisonStateController.currentState.player_state.status.progress_ms / 1e3 !==
                                        this.playback.state.playerState.progress.value.position && this.updateYnisonState();
                                    break;
                                case F.Iu.SET_SPEED:
                                    this.ynisonStateController.currentState.player_state.status.playback_speed !== this.playback.state.playerState.speed.value &&
                                        this.updateYnisonState();
                            }
                        }),
                        a = this.playback.state.playerState.speed.onChange(() => {
                            this.updateYnisonState();
                        }),
                        i = this.playback.state.queueState.repeat.onChange(() => {
                            this.updateYnisonState();
                        }),
                        r = this.playback.state.queueState.shuffle.onChange(() => {
                            this.updateYnisonState();
                        }),
                        s = this.playback.state.queueState.entityList.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        }),
                        n = this.playback.state.queueState.order.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        });
                    this.unsubscribeFromPlayerEvents = () => {
                        e(), t(), i(), r(), a(), s(), n();
                    };
                }
                updateYnisonState(e) {
                    setTimeout(() => {
                        if (!this.playback.state.queueState.currentEntity.value) return;
                        let t = (function (e) {
                            var t, a, i, r, s, n, l, o;
                            let { playback: d, ynisonStateController: u, deviceId: c, variables: h } = e,
                                {
                                    devices: g,
                                    active_device_id_optional: m,
                                    player_state: { player_queue_inject_optional: y, status: p },
                                } = u.currentState,
                                v = h.useWaveQueue && !(0, tg.S)(d.state.currentContext.value),
                                { filteredEntityList: S, firstNotPlayedVibeEntity: P } = (function (e, t) {
                                    let a = e.state.queueState.index.value,
                                        i = e.state.queueState.entityList.value,
                                        r = null,
                                        s = null;
                                    return (
                                        t.enableSendLimitedEntityListToYnison && (i = i.filter((e) => !it(e.entity))),
                                        (0, eq.i)(e.state.currentContext.value) &&
                                            t.enableSendLimitedEntityListToYnison &&
                                            ({ vibeHistory: i, firstNotPlayedVibeEntity: r, firstNotPlayedVibeEntityIndex: s } = eP(i, a)),
                                        { filteredEntityList: i, firstNotPlayedVibeEntity: r, firstNotPlayedVibeEntityIndex: s }
                                    );
                                })(d, h),
                                E = (function (e, t) {
                                    let a = e.state.currentContext.value,
                                        i = new Set(),
                                        r = [];
                                    for (let { sourceContext: e } of t) {
                                        let t = null != e ? e : a,
                                            { uniqueKey: s, payload: n } = (function (e, t) {
                                                if (!e) return { uniqueKey: 'wave_source', payload: ih() };
                                                let { entityContext: a, playlistId: i, albumId: r, artistId: s } = e;
                                                if (i || r || s) {
                                                    let t = (function (e) {
                                                        var t;
                                                        let { entityContext: a, playlistId: i, albumId: r, artistId: s, filterOptional: n } = e;
                                                        return i
                                                            ? ((t = null != n ? n : null),
                                                              {
                                                                  uniqueKey: 'playlist_'
                                                                      .concat(a, '_')
                                                                      .concat(i, '_')
                                                                      .concat(null != t ? t : ''),
                                                                  payload: ig({ entity_context: a, playlist_id: { id: i, filter_optional: t } }),
                                                              })
                                                            : r
                                                              ? { uniqueKey: 'album_'.concat(a, '_').concat(r), payload: ig({ entity_context: a, album_id: { id: r } }) }
                                                              : s
                                                                ? {
                                                                      uniqueKey: 'artist_'.concat(a, '_').concat(s),
                                                                      payload: ig({ entity_context: a, artist_id: { id: s } }),
                                                                  }
                                                                : null;
                                                    })(e);
                                                    if (t) return t;
                                                }
                                                return ic.includes(a) && t
                                                    ? { uniqueKey: 'wave_source', payload: ih('ONLINE_BY_DEFAULT') }
                                                    : { uniqueKey: 'context_'.concat(a), payload: ig({ entity_context: a }) };
                                            })(io(t), (0, eq.i)(t));
                                        i.has(s) || (i.add(s), r.push({ key: r.length, ...n }));
                                    }
                                    return r;
                                })(d, S),
                                f = (function (e) {
                                    let { entityList: t, from: a, trackSources: i, useWaveQueue: r } = e,
                                        s = (function (e) {
                                            if (!e || 0 === e.length) return null;
                                            let t = { waveSourceKey: null, exactMatchMap: new Map(), contextOnlyMap: new Map() };
                                            for (let a of e) {
                                                if (void 0 !== a.wave_source && null === t.waveSourceKey) {
                                                    t.waveSourceKey = a.key;
                                                    continue;
                                                }
                                                if (a.phonoteka_source) {
                                                    let { entity_context: e, playlist_id: i, album_id: r, artist_id: s } = a.phonoteka_source;
                                                    if (i) {
                                                        let r = is(e, 'playlist', i.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else if (r) {
                                                        let i = is(e, 'album', r.id);
                                                        t.exactMatchMap.has(i) || t.exactMatchMap.set(i, a.key);
                                                    } else if (s) {
                                                        let i = is(e, 'artist', s.id);
                                                        t.exactMatchMap.has(i) || t.exactMatchMap.set(i, a.key);
                                                    } else t.contextOnlyMap.has(e) || t.contextOnlyMap.set(e, a.key);
                                                }
                                            }
                                            return t;
                                        })(i);
                                    return t.map((e) =>
                                        ((e) => {
                                            var t, a, i, r, s, n, l, o, d, u, c, h, g;
                                            let { entityPair: m, from: y = '', trackSources: p, trackSourceIndex: v, useWaveQueue: S = !1 } = e,
                                                { entity: P, sourceContext: E } = m;
                                            switch (P.data.type) {
                                                case K.R.Music:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (a = P.data.meta.albums) || null == (t = a[0]) ? void 0 : t.id)
                                                                ? String(null == (i = P.data.meta.albums) ? void 0 : i[0].id)
                                                                : null,
                                                        from: y,
                                                        playable_id: String(P.data.meta.id),
                                                        playable_type: N.yi.TRACK,
                                                        title: null != (r = P.data.meta.title) ? r : '',
                                                        cover_url_optional: null != (s = P.data.meta.coverUri) ? s : null,
                                                        ...(S && {
                                                            track_info: { batch_id_optional: null != (n = P.data.batchId) ? n : null, track_source_key: id(E, p, v) },
                                                        }),
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case K.R.Generative:
                                                    return {
                                                        album_id_optional: null,
                                                        from: y,
                                                        playable_id: '',
                                                        playable_type: N.yi.INFINITE,
                                                        title: null != (l = P.data.meta.title) ? l : '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case K.R.VibeTrack:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (d = P.data.meta.albums) || null == (o = d[0]) ? void 0 : o.id)
                                                                ? String(null == (u = P.data.meta.albums) ? void 0 : u[0].id)
                                                                : null,
                                                        from: y,
                                                        playable_id: String(P.data.meta.id),
                                                        playable_type: N.yi.TRACK,
                                                        title: null != (c = P.data.meta.title) ? c : '',
                                                        cover_url_optional: null != (h = P.data.meta.coverUri) ? h : null,
                                                        track_info: { batch_id_optional: null != (g = P.data.batchId) ? g : null, track_source_key: id(E, p, v) },
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                default:
                                                    return {
                                                        album_id_optional: null,
                                                        from: y,
                                                        playable_id: String(P.data.meta.id),
                                                        playable_type: N.yi.TRACK,
                                                        title: '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                            }
                                        })({ entityPair: e, from: a, trackSources: i, trackSourceIndex: s, useWaveQueue: r }),
                                    );
                                })({ entityList: S, from: null == (t = d.state.currentContext.value) ? void 0 : t.from, trackSources: E, useWaveQueue: v }),
                                {
                                    playableIndices: b,
                                    currentPlayableIndex: _,
                                    playableList: I,
                                    livePlayableIndex: k,
                                } = (function (e) {
                                    let { playableList: t, currentPlayableIndex: a, playback: i, newIndexOrderMap: r, variables: s } = e,
                                        n = i.state.queueState.order.value,
                                        l = (0, eq.i)(i.state.currentContext.value),
                                        { livePlayableIndex: o } = i.state.queueState;
                                    if ((s.enableSendLimitedEntityListToYnison && (n = n.filter((e) => r.has(e)).map((e) => r.get(e))), t.length <= 200))
                                        return {
                                            playableList: t,
                                            currentPlayableIndex: a,
                                            playableIndices: n,
                                            livePlayableIndex: iu({ playableList: t, rangeStart: 0, livePlayableIndex: o.value, isVibeQueue: l }),
                                        };
                                    if (i.state.queueState.shuffle.value) {
                                        let e = n.indexOf(a),
                                            i = n.slice(e, 200),
                                            r = [...i].sort((e, t) => e - t).map((e) => t[e]),
                                            s = new Map(),
                                            l = i.map((e) => {
                                                var a;
                                                let i = t[e].playable_id,
                                                    n = null != (a = s.get(i)) ? a : -1,
                                                    l = r.findIndex((e, t) => t > n && e.playable_id === i);
                                                return s.set(i, l), l;
                                            }),
                                            o = r.findIndex((e) => e.playable_id === t[a].playable_id);
                                        return { playableList: r, currentPlayableIndex: o, playableIndices: l, livePlayableIndex: r.length };
                                    }
                                    let d = t[a].playable_id,
                                        u = Math.max(0, a - 100);
                                    u + 200 > t.length && (u = t.length - 200);
                                    let c = t.slice(u, u + 200),
                                        h = c.findIndex((e) => e.playable_id === d);
                                    return {
                                        playableList: c,
                                        currentPlayableIndex: h,
                                        livePlayableIndex: iu({ playableList: c, rangeStart: u, livePlayableIndex: o.value, isVibeQueue: l }),
                                        playableIndices: n,
                                    };
                                })({
                                    playableList: f,
                                    currentPlayableIndex: (function (e, t) {
                                        let {
                                                order: { value: a },
                                                index: { value: i },
                                                entityList: { value: r },
                                            } = e.state.queueState,
                                            s = a[i];
                                        if ('number' != typeof s) return -1;
                                        let n = r[s];
                                        return t.findIndex((e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === (null == n ? void 0 : n.entity.data.meta.id);
                                        });
                                    })(d, S),
                                    newIndexOrderMap: (function (e, t) {
                                        let a = new Map(),
                                            i = 0;
                                        for (let r = 0; r < e.length; r++) {
                                            let s = e[r];
                                            s && !t(s.entity) && (a.set(r, i), i++);
                                        }
                                        return a;
                                    })(d.state.queueState.entityList.value, it),
                                    playback: d,
                                    variables: h,
                                }),
                                C = (function (e) {
                                    let { playback: t, playableList: a, firstNotPlayedVibeEntity: i } = e;
                                    if (!(0, eq.i)(t.state.currentContext.value) || !i) return [];
                                    let r = a.findLast((e) => String(i.entity.data.meta.id) === e.playable_id);
                                    return r ? [r] : [];
                                })({ playback: d, playableList: I, firstNotPlayedVibeEntity: P }),
                                T = a3(d, p.paused),
                                A = {
                                    duration_ms: ir(d),
                                    progress_ms: ((e) => {
                                        var t;
                                        let a = 1e3 * Math.floor(e.state.playerState.progress.value.position),
                                            i = ir(e);
                                        return (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context.data.type) === et.K.Generative
                                            ? 0
                                            : a < i
                                              ? a
                                              : 0;
                                    })(d),
                                    paused: T,
                                    playback_speed: d.state.playerState.speed.value,
                                    version: (0, N.fD)(c),
                                },
                                D = ((e) => {
                                    var t, a;
                                    let i = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context;
                                    return (0, eq.i)(i) && (null == (a = i.data.meta.session) ? void 0 : a.radioSessionId)
                                        ? { session_id: i.data.meta.session.radioSessionId }
                                        : null;
                                })(d);
                            return {
                                active_device_id_optional: m,
                                devices: g,
                                player_state: {
                                    player_queue_inject_optional: y,
                                    status: h.useYnisonStatus ? p : A,
                                    player_queue: {
                                        entity_id: ia(d),
                                        entity_type: ii(null == (a = d.state.currentContext.value) ? void 0 : a.data.type),
                                        current_playable_index: _,
                                        playable_list: I,
                                        shuffle_optional: d.state.queueState.shuffle.value ? { playable_indices: b } : null,
                                        options: {
                                            repeat_mode: ((e) => {
                                                switch (e) {
                                                    case F.pM.NONE:
                                                        return N.ot.NONE;
                                                    case F.pM.ONE:
                                                        return N.ot.ONE;
                                                    case F.pM.CONTEXT:
                                                        return N.ot.ALL;
                                                    default:
                                                        return N.ot.NONE;
                                                }
                                            })(d.state.queueState.repeat.value),
                                        },
                                        entity_context: N.oh.BASED_ON_ENTITY_BY_DEFAULT,
                                        from_optional: null != (r = null == (i = d.state.currentContext.value) ? void 0 : i.from) ? r : null,
                                        initial_entity_optional: (0, tg.S)(null == (s = d.state.queueState.currentEntity.value) ? void 0 : s.context)
                                            ? { entity_id: ia(d), entity_type: ii(null == (n = d.state.currentContext.value) ? void 0 : n.data.type) }
                                            : null,
                                        adding_options_optional:
                                            (0, eq.i)(null == (l = d.state.queueState.currentEntity.value) ? void 0 : l.context) &&
                                            (null == (o = d.state.queueState.currentEntity.value) ? void 0 : o.context.data.meta.session)
                                                ? { radio_options: { session_id: d.state.queueState.currentEntity.value.context.data.meta.session.radioSessionId } }
                                                : null,
                                        queue: v
                                            ? {
                                                  wave_queue: {
                                                      recommended_playable_list: C,
                                                      live_playable_index: k,
                                                      entity_options: { track_sources: E, wave_entity_optional: D },
                                                      navigation_id_optional: null,
                                                      playback_action_id_optional: null,
                                                  },
                                              }
                                            : null,
                                        version: (0, N.fD)(c),
                                    },
                                },
                            };
                        })({
                            playback: this.playback,
                            ynisonStateController: this.ynisonStateController,
                            deviceId: this.deviceConfig.info.device_id,
                            variables: { ...this.variables, ...e },
                        });
                        this.ynisonStateController.updateState({ newState: t, skipVersionCompare: !0, trigger: 'YnisonPlugin' });
                    }, 0);
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a, variables: i }) {
                    (0, O._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'ynisonStateController', void 0),
                        (0, O._)(this, 'deviceConfig', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        (this.variables = i),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class iy {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        i = new ie({
                            playback: t,
                            factory: this.factory,
                            ynisonStateController: this.ynisonStateController,
                            variables: this.variables,
                            fallbackTypesQueueToVibe: this.fallbackTypesQueueToVibe,
                        }),
                        r = new im({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig, variables: this.variables });
                    a.beforeEntityChange.tapPromise('YnisonPlugin', () => {
                        let {
                            currentEntity: { value: e },
                        } = t.state.queueState;
                        return e && (e.positionSec = void 0), Promise.resolve();
                    }),
                        a.beforeDestroy.tapPromise('YnisonPlugin', () => (i.destroy(), r.destroy(), Promise.resolve()));
                }
                constructor({ factory: e, deviceConfig: t, ynisonStateController: a, variables: i, fallbackTypesQueueToVibe: r }) {
                    (0, O._)(this, 'factory', void 0),
                        (0, O._)(this, 'deviceConfig', void 0),
                        (0, O._)(this, 'ynisonStateController', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.deviceConfig = t),
                        (this.ynisonStateController = a),
                        (this.variables = i),
                        (this.fallbackTypesQueueToVibe = null != r ? r : []);
                }
            }
            class ip {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.volume.onChange(() => {
                        this.updateYnisonState();
                    });
                    this.unsubscribeFromPlayerEvents = () => {
                        e();
                    };
                }
                updateYnisonState() {
                    this.ynisonStateController.updateState({
                        trigger: 'YnisonValuePlugin',
                        newState: { ...this.ynisonStateController.currentState, devices: this.createDevices() },
                    });
                }
                createDevices() {
                    return this.ynisonStateController.currentState.devices.map((e) => {
                        var t;
                        return (
                            (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id &&
                                (e.volume_info = {
                                    volume: (0, N.F4)(this.playback.state.playerState.exponentVolume.value, this.deviceConfig.volumeGranularity),
                                    version: (0, N.fD)(this.deviceConfig.info.device_id),
                                }),
                            e
                        );
                    });
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a }) {
                    (0, O._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'ynisonStateController', void 0),
                        (0, O._)(this, 'deviceConfig', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState();
                }
            }
            class iv {
                onYnisonStateUpdated(e) {
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    if (e.diff.deviceVolume) {
                        let t = e.diff.deviceVolume.volume;
                        if (void 0 !== t) return this.changeVolume(t);
                    }
                    return Promise.resolve();
                }
                changeVolume(e) {
                    return this.playback.setExponentVolume(e), Promise.resolve();
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ playback: e, ynisonStateController: t, variables: a }) {
                    (0, O._)(this, 'playback', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'unlisteners', void 0),
                        (this.playback = e),
                        (this.variables = a),
                        (this.unlisteners = []);
                    let i = t.on(N.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonVolumePlugin');
                    this.unlisteners.push(i), this.onYnisonStateUpdated(t.fullState);
                }
            }
            class iS {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        i = new iv({ playback: t, ynisonStateController: this.ynisonStateController, variables: this.variables }),
                        r = new ip({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig });
                    a.beforeDestroy.tapPromise('YnisonVolumePlugin', () => (i.destroy(), r.destroy(), Promise.resolve()));
                }
                constructor({ deviceConfig: e, ynisonStateController: t, variables: a }) {
                    (0, O._)(this, 'deviceConfig', void 0),
                        (0, O._)(this, 'ynisonStateController', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (this.deviceConfig = e),
                        (this.ynisonStateController = t),
                        (this.variables = a);
                }
            }
            let iP = [et.K.Album, et.K.Artist, et.K.Playlist, et.K.Various];
            class iE {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterContextEnd.tapPromise('AutoflowPlugin', () => {
                        var e, a, i;
                        if (!this.variables.enabled) return Promise.resolve();
                        let r = null == (e = t.state.currentContext.value) ? void 0 : e.data.type;
                        return (
                            (null == (a = t.state.currentContext.value) ? void 0 : a.data) &&
                                'enableVariousAutoFlow' in t.state.currentContext.value.data &&
                                (null == (i = t.state.currentContext.value) ? void 0 : i.data.enableVariousAutoFlow) &&
                                (r = et.K.Various),
                            r && iP.includes(r) && this.playAutoflow(t),
                            Promise.resolve()
                        );
                    });
                }
                playAutoflow(e) {
                    var t, a, i;
                    let r = null == (t = e.state.currentContext.value) ? void 0 : t.data.type;
                    (null == (a = e.state.currentContext.value) ? void 0 : a.data) &&
                        'enableVariousAutoFlow' in e.state.currentContext.value.data &&
                        (null == (i = e.state.currentContext.value) ? void 0 : i.data.enableVariousAutoFlow) &&
                        (r = et.K.Various);
                    let s = ((e, t) => {
                            var a, i, r, s;
                            let n = null == (a = t.state.currentContext.value) ? void 0 : a.data;
                            if (n) {
                                if (e === et.K.Album) return ['album:'.concat(n.meta.id)];
                                if (e === et.K.Artist) return ['artist:'.concat(n.meta.id)];
                                if (e === et.K.Playlist && 'owner' in n.meta && (null == (i = n.meta.owner) ? void 0 : i.uid) && 'kind' in n.meta && n.meta.kind)
                                    return ['playlist:'.concat(null == (r = n.meta.owner) ? void 0 : r.uid, '_').concat(n.meta.kind)];
                                if (e === et.K.Various) {
                                    if ('overrideAutoflowSeeds' in n && n.overrideAutoflowSeeds) return n.overrideAutoflowSeeds;
                                    let e = null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity.data.meta.id;
                                    return ['track:'.concat(e)];
                                }
                            }
                        })(r, e),
                        n = e.state.currentContext.value,
                        l = Object.create(null != n ? n : null);
                    if (!(r && s)) return;
                    let o = this.factory.createContext({
                        data: {
                            type: et.K.Vibe,
                            meta: { id: (0, ef.f)(s) },
                            seeds: s,
                            from: ((e, t, a) => {
                                var i;
                                let r = null == (i = t.state.currentContext.value) ? void 0 : i.data;
                                if (!r) return '';
                                let s = e,
                                    n = t.state.queueState.entityList.value.length || 0;
                                return (
                                    s === et.K.Various && 1 === n && (s = 'track'),
                                    e === et.K.Various && 'overrideContextType' in r && r.overrideContextType && (s = r.overrideContextType),
                                    ''.concat(a, '-radio-').concat(s, '-autoflow')
                                );
                            })(r, e, this.platform),
                            includeTracksInResponse: !0,
                            parentContext: l,
                            interactive: !1,
                        },
                    });
                    e.playContext({ context: o, loadContextMeta: !0 });
                }
                constructor({ platform: e, factory: t, variables: a }) {
                    (0, O._)(this, 'platform', void 0),
                        (0, O._)(this, 'factory', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (this.platform = e),
                        (this.factory = t),
                        (this.variables = a);
                }
            }
            class ib {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.telemetry.createTelemetry(t),
                        this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion },
                            !0,
                        ),
                        t.state.playerState.status.onChange(() => {
                            this.telemetry.setPlayingState(t.state.playerState);
                        }),
                        t.state.playerState.event.onChange((e) => {
                            e && e !== F.Iu.UPDATING_PROGRESS && this.telemetry.logEvent({ name: e });
                        }),
                        a.afterError.tapPromise(
                            'TelemetryPlugin',
                            (e) => (e instanceof F.LI && this.telemetry.logError({ error: { ...e, isFatal: !1 } }), Promise.resolve()),
                        ),
                        a.beforeMediaStartPlaying.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentReload.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve();
                        }),
                        a.beforeMediaSourceContentPreload.tapPromise('TelemetryPlugin', (e) => (this.beforeMediaHandler(e), Promise.resolve()));
                }
                beforeMediaHandler(e) {
                    if (!e || tA(e)) return;
                    let { mediaSourceData: t } = e;
                    t && 'vsid' in t && void 0 === t.vsid && (t.vsid = this.telemetry.vsid),
                        t && 'sourceIndex' in t && void 0 === t.sourceIndex && (t.sourceIndex = this.telemetry.onBeforeSetSource());
                    let a = (function (e) {
                            let { mediaSourceData: t } = e;
                            if (!t) return;
                            let { data: a } = t;
                            return { streamUrl: t.src, ...a };
                        })(e),
                        i = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                    a &&
                        (this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion, testIds: i, ...a },
                            !0,
                        ),
                        this.telemetry.onSetSource(a));
                }
                constructor({ telemetry: e, puid: t, yaspVersion: a, getTelemetryTestIds: i }) {
                    (0, O._)(this, 'telemetry', void 0),
                        (0, O._)(this, 'puid', void 0),
                        (0, O._)(this, 'yaspVersion', void 0),
                        (0, O._)(this, 'getTelemetryTestIds', void 0),
                        (this.telemetry = e),
                        (this.puid = t),
                        (this.yaspVersion = a),
                        (this.getTelemetryTestIds = i);
                }
            }
            class i_ {
                setQuality(e) {
                    this.quality.value = e;
                }
                constructor(e) {
                    (0, O._)(this, 'quality', new ei.cJ(aD.e.BALANCED)), (0, O._)(this, 'isCrossfadeEnabled', new ei.cJ(!0)), this.setQuality(e);
                }
            }
            function iI(e) {
                return (null == e ? void 0 : e.data.type) === K.R.Radio;
            }
            class ik {
                get src() {
                    let e = this.getQueryParamsString();
                    return e ? ''.concat(this.data.url).concat(e) : this.data.url;
                }
                getQueryParamsString() {
                    let e = new URLSearchParams();
                    this.vsid && e.append('vsid', this.vsid), void 0 !== this.sourceIndex && e.append('source_index', String(this.sourceIndex));
                    let t = e.toString();
                    return t ? '?'.concat(t) : void 0;
                }
                constructor(e) {
                    (0, O._)(this, 'type', 'generativeSource'),
                        (0, O._)(this, 'data', void 0),
                        (0, O._)(this, 'vsid', void 0),
                        (0, O._)(this, 'sourceIndex', void 0),
                        (0, O._)(this, 'getFileInfoResponseTime', void 0),
                        (0, O._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            class iC extends tz {
                constructor(e, { code: t = 'E_GENERATIVE_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'GenerativeMediaProviderException'), Object.setPrototypeOf(this, iC.prototype);
                }
            }
            class iT {
                getMediaSource(e) {
                    if (ay(e.entity)) {
                        var t;
                        if (null == (t = e.entity.data.meta.stream) ? void 0 : t.url) {
                            let t = new ik({ data: e.entity.data.meta.stream });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(new iC('Failed to create generative src link', { code: C.E_GET_MEDIA_SRC }));
                    }
                    return Promise.reject(new iC('Provided entity is not generative entity', { code: C.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            var iA = a(93451),
                iD = a(50389),
                iL = a(87787);
            class ix {
                getPreloadedFileInfo(e) {
                    let { entity: t, disableCache: a = !1 } = e;
                    if (!(a || aF(t, this.mediaSourceTtlMs, this.mediaConfigController)) && t.mediaSourceData && 'downloadInfoSource' === t.mediaSourceData.type)
                        return t.mediaSourceData.data;
                }
                getFileInfoFromResource(e) {
                    let { trackId: t, quality: a, codecs: i, transports: r } = e,
                        s = (0, iA.T)(),
                        n = i.join(''),
                        l = r.join(''),
                        o = ''.concat(s).concat(t).concat(a).concat(n).concat(l);
                    return new Promise((e, l) => {
                        this.tools
                            .createSign({ data: o, secretKey: this.secretKey })
                            .then((o) => {
                                this.resource
                                    .getFileInfo({
                                        tsInSeconds: s,
                                        trackId: t,
                                        quality: a,
                                        codecs: i,
                                        transports: r,
                                        sign: o,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((t) => {
                                        e({ downloadInfo: t.downloadInfo, responseTime: t.responseTime, url: t.url });
                                    })
                                    .catch((e) => {
                                        l(new tQ('Error in get-file-info request', { code: C.E_GET_MEDIA_SRC, cause: e, data: { trackId: t, quality: a, codecs: n } }));
                                    });
                            })
                            .catch((e) => {
                                l(
                                    new tQ('Error in creating sign for get-file-info request', {
                                        code: C.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: t, quality: a, codecs: n },
                                    }),
                                );
                            });
                    });
                }
                getFileInfo(e) {
                    let { entity: t, disableCache: a = !1, codecs: i, quality: r, transports: s } = e;
                    if (this.variables.isMediaSourcePreloadEnabled)
                        try {
                            let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
                            if (e) return Promise.resolve({ downloadInfo: e });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    return this.getFileInfoFromResource({ trackId: t.data.meta.id, quality: r, codecs: i, transports: s });
                }
                getMediaSource(e) {
                    let { entity: t, disableCache: a = !1 } = e,
                        i = (0, iD.i)({ productQuality: this.mediaConfigController.quality.value, entity: t }),
                        r = (0, eZ.l)(t) ? aI.o.RAW : this.transport;
                    return (
                        (t.expectedQuality = i),
                        this.getFileInfo({ entity: t, disableCache: a, quality: i, transports: [r], codecs: this.codecs }).then((e) => {
                            let { downloadInfo: r, responseTime: s, url: n } = e;
                            if (!('error' in r) && !iL.DM.includes(r.codec) && r.transport === aI.o.ENCRAW)
                                return (
                                    (t.mediaSourceData = null),
                                    this.getFileInfo({ entity: t, disableCache: a, quality: i, transports: [aI.o.RAW], codecs: this.codecs })
                                        .then((e) => {
                                            let { downloadInfo: a, responseTime: r, url: s } = e,
                                                n = this.createMediaSource({
                                                    downloadInfo: a,
                                                    trackId: t.data.meta.id,
                                                    quality: i,
                                                    codecs: this.codecs,
                                                    getFileInfoResponseTime: r,
                                                    getFileInfoUrl: s,
                                                });
                                            return (t.mediaSourceData = n), (t.expectedQuality = i), n;
                                        })
                                        .catch((e) => {
                                            let a = this.createMediaSource({
                                                downloadInfo: r,
                                                trackId: t.data.meta.id,
                                                quality: i,
                                                codecs: this.codecs,
                                                getFileInfoResponseTime: s,
                                            });
                                            throw (
                                                ((t.mediaSourceData = a),
                                                new tQ('Error in get-file-info retry enclaw request', {
                                                    code: C.E_GET_MEDIA_SRC,
                                                    cause: e,
                                                    data: { trackId: t.data.meta.id, quality: i, codecs: this.codecs.join('') },
                                                }))
                                            );
                                        })
                                );
                            let l = this.createMediaSource({
                                downloadInfo: r,
                                trackId: t.data.meta.id,
                                quality: i,
                                codecs: this.codecs,
                                getFileInfoResponseTime: s,
                                getFileInfoUrl: n,
                            });
                            return (t.mediaSourceData = l), l;
                        })
                    );
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e,
                        a = (0, iA.T)(),
                        i = (0, iD.i)({ productQuality: this.mediaConfigController.quality.value, entities: t }),
                        r = this.codecs.join(''),
                        s = t.reduce((e, t) => ''.concat(e).concat(t.data.meta.id, ','), '').slice(0, -1),
                        n = t.some((e) => (0, eZ.l)(e)) ? aI.o.RAW : this.transport,
                        l = ''.concat(a).concat(s).concat(i).concat(r).concat(n);
                    return new Promise((e, o) => {
                        this.tools
                            .createSign({ data: l, secretKey: this.secretKey })
                            .then((l) => {
                                this.resource
                                    .getFileInfoBatch({
                                        tsInSeconds: a,
                                        trackIds: s,
                                        quality: i,
                                        codecs: this.codecs,
                                        transports: [n],
                                        sign: l,
                                        fromPromoLanding: this.variables.fromPromoLanding,
                                    })
                                    .then((a) => {
                                        try {
                                            for (let e of a.downloadInfos) {
                                                let a = t.find((t) => t.data.meta.id === e.trackId);
                                                a &&
                                                    ((a.mediaSourceData = this.createMediaSource({
                                                        downloadInfo: e,
                                                        trackId: e.trackId,
                                                        quality: i,
                                                        codecs: this.codecs,
                                                    })),
                                                    (a.expectedQuality = i));
                                            }
                                            e(a.downloadInfos);
                                        } catch (e) {
                                            o(e);
                                        }
                                    })
                                    .catch((e) => {
                                        o(
                                            new tQ('Error in get-file-info/batch request', {
                                                code: C.E_GET_MEDIA_SRC,
                                                cause: e,
                                                data: { trackId: s, quality: i, codecs: r },
                                            }),
                                        );
                                    });
                            })
                            .catch((e) => {
                                o(
                                    new tQ('Error in creating sign for get-file-info request', {
                                        code: C.E_CREATE_SIGN,
                                        cause: e,
                                        data: { trackId: s, quality: i, codecs: r },
                                    }),
                                );
                            });
                    });
                }
                createMediaSource(e) {
                    let { downloadInfo: t, trackId: a, codecs: i, quality: r, getFileInfoResponseTime: s, getFileInfoUrl: n } = e,
                        l = i.join('');
                    if ('error' in t)
                        throw new tQ('Error message in get-file-info response', { code: C.E_GET_MEDIA_SRC, data: { trackId: a, quality: r, codecs: l, mediaSource: t } });
                    if (!t.urls[0])
                        throw new tQ('No urls in get-file-info response', { code: C.E_GET_MEDIA_SRC, data: { trackId: a, quality: r, codecs: l, mediaSource: t } });
                    return new aT({ data: t, loadingTime: performance.now(), getFileInfoResponseTime: s, url: n });
                }
                constructor(e) {
                    var t;
                    (0, O._)(this, 'secretKey', void 0),
                        (0, O._)(this, 'resource', void 0),
                        (0, O._)(this, 'mediaConfigController', void 0),
                        (0, O._)(this, 'transport', void 0),
                        (0, O._)(this, 'codecs', void 0),
                        (0, O._)(this, 'variables', void 0),
                        (0, O._)(this, 'mediaSourceTtlMs', void 0),
                        (0, O._)(this, 'tools', void 0);
                    let { resource: a, secretKey: i, mediaConfigController: r, transport: s, variables: n, mediaSourceTtlMs: l, codecs: o, tools: d } = e;
                    (this.resource = a),
                        (this.secretKey = i),
                        (this.mediaConfigController = r),
                        (this.transport = s),
                        (this.codecs = o),
                        (this.variables = {
                            isMediaSourcePreloadEnabled: null != (t = null == n ? void 0 : n.isMediaSourcePreloadEnabled) && t,
                            fromPromoLanding: null == n ? void 0 : n.fromPromoLanding,
                        }),
                        (this.mediaSourceTtlMs = null != l ? l : 0),
                        (this.tools = d || iL.$n);
                }
            }
            class iN {
                get src() {
                    return this.data.src;
                }
                constructor(e) {
                    (0, O._)(this, 'type', 'clipSource'),
                        (0, O._)(this, 'data', void 0),
                        (0, O._)(this, 'vsid', void 0),
                        (0, O._)(this, 'getFileInfoResponseTime', void 0),
                        (0, O._)(this, 'url', void 0),
                        (this.data = e.data);
                }
            }
            class iR {
                getMediaSource(e) {
                    let { entity: t } = e;
                    if (ti(t)) {
                        let e = new iN({
                            data: { src: ''.concat(this.vhUrl).concat(t.data.meta.playerId, '?service=').concat(this.service, '&from=').concat(this.from) },
                        });
                        return (t.mediaSourceData = e), Promise.resolve(e);
                    }
                    return Promise.reject(new H.t('Provided entity is not clip entity', { code: C.E_UNSUITABLE_ENTITY_TYPE }));
                }
                constructor({ service: e, from: t, vhUrl: a }) {
                    (0, O._)(this, 'service', void 0),
                        (0, O._)(this, 'from', void 0),
                        (0, O._)(this, 'vhUrl', void 0),
                        (this.service = e),
                        (this.from = t),
                        (this.vhUrl = a);
                }
            }
            class iw {
                get src() {
                    let e = new URL(this.data.streamUrl);
                    return (
                        this.vsid && e.searchParams.set('vsid', this.vsid),
                        void 0 !== this.sourceIndex && e.searchParams.set('source_index', String(this.sourceIndex)),
                        e.toString()
                    );
                }
                constructor(e) {
                    (0, O._)(this, 'type', 'radioSource'),
                        (0, O._)(this, 'data', void 0),
                        (0, O._)(this, 'vsid', void 0),
                        (0, O._)(this, 'sourceIndex', void 0),
                        (0, O._)(this, 'getFileInfoResponseTime', void 0),
                        (0, O._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex);
                }
            }
            class iM extends tz {
                constructor(e, { code: t = 'E_RADIO_MEDIA_PROVIDER', ...a } = {}) {
                    super(e, { code: t, ...a }), (0, O._)(this, 'name', 'RadioMediaProviderException'), Object.setPrototypeOf(this, iM.prototype);
                }
            }
            class iO {
                getMediaSource(e) {
                    if (iI(e.entity)) {
                        if (e.entity.data.meta.streamUrl) {
                            let t = new iw({ data: { streamUrl: e.entity.data.meta.streamUrl } });
                            return (e.entity.mediaSourceData = t), Promise.resolve(t);
                        }
                        return Promise.reject(
                            new iM('Failed to create fm radio src link because the "streamUrl" property is missing in the entity meta', { code: C.E_GET_MEDIA_SRC }),
                        );
                    }
                    return Promise.reject(new iM('Provided entity is not fm radio entity', { code: C.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            class iF {
                async getMediaSource(e) {
                    return ay(e.entity)
                        ? this.generativeProvider.getMediaSource(e)
                        : ti(e.entity)
                          ? this.vhMediaProvider.getMediaSource(e)
                          : iI(e.entity)
                            ? this.radioProvider.getMediaSource(e)
                            : this.getFileInfoProvider.getMediaSource(e);
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e;
                    return t.some((e) => ay(e))
                        ? Promise.reject(new tz('Can not use getMediaSourceBatch for generative entities', { code: C.E_UNSUITABLE_ENTITY_TYPE }))
                        : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
                }
                constructor(e) {
                    (0, O._)(this, 'generativeProvider', new iT()),
                        (0, O._)(this, 'radioProvider', new iO()),
                        (0, O._)(this, 'getFileInfoProvider', void 0),
                        (0, O._)(this, 'vhMediaProvider', void 0),
                        (this.getFileInfoProvider = new ix(e.getFileInfoProviderParams)),
                        (this.vhMediaProvider = new iR(e.vhMediaProviderParams));
                }
            }
            class iG {
                async loadEntities(e) {
                    let { trackIds: t } = (function (e) {
                            let t = [];
                            return (
                                e.forEach((e) => {
                                    let { context: a, entity: i } = e,
                                        r = i.data.meta.id,
                                        s = 'string' == typeof r && r.includes(':');
                                    if (!i.data.fromCurrentContext || s) return void t.push(i.data.meta.id);
                                    (0, ez.F)(a) && (r = ''.concat(i.data.meta.id, ':').concat(a.data.meta.id)),
                                        'albumId' in i.data.meta && i.data.meta.albumId && (r = ''.concat(i.data.meta.id, ':').concat(i.data.meta.albumId)),
                                        t.push(r);
                                }, {}),
                                { trackIds: t }
                            );
                        })(e),
                        a = e.some((e) => {
                            let { context: t } = e;
                            return (0, eq.i)(t);
                        });
                    return this.resource
                        .getTracksMeta({ trackIds: t, withProgress: !0, withMixData: a })
                        .then((t) => {
                            let a = [];
                            for (let i of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id).includes(String(i.id)));
                                if (t) {
                                    let e = t.entity.data.type === F.z4.Unloaded ? K.R.Unknown : t.entity.data.type;
                                    e !== K.R.Clip && a.push({ ...t.entity.data, type: e, meta: i, loadEntityMeta: !1 });
                                }
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new H.t('Failed to get track meta', { code: 'E_TRACK_META_PROVIDER', cause: (0, M.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, O._)(this, 'resource', void 0);
                    let { tracksResource: t } = e;
                    this.resource = t;
                }
            }
            class iK {
                loadEntities(e) {
                    let t = e.map((e) => e.entity.data.meta.id);
                    return this.resource
                        .getClip({ clipIds: t })
                        .then((t) => {
                            let a = [];
                            for (let i of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id) === String(i.clipId));
                                t && a.push({ ...t.entity.data, type: K.R.Clip, meta: { id: i.clipId, ...i }, loadEntityMeta: !1 });
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new H.t('Failed to get clip meta', { code: 'E_CLIP_META_PROVIDER', cause: (0, M.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, O._)(this, 'resource', void 0), (this.resource = e.clipsResource);
                }
            }
            class ij {
                loadEntities(e) {
                    return e.some((e) => ti(e.entity)) ? this.clipMetaProvider.loadEntities(e) : this.trackMetaProvider.loadEntities(e);
                }
                constructor(e) {
                    (0, O._)(this, 'trackMetaProvider', void 0),
                        (0, O._)(this, 'clipMetaProvider', void 0),
                        (this.trackMetaProvider = new iG({ tracksResource: e.tracksResource })),
                        (this.clipMetaProvider = new iK({ clipsResource: e.clipsResource }));
                }
            }
            var iX = a(8817);
            (L || (L = {})).MAIN = 'MAIN';
            class iU {
                get availablePlaybacks() {
                    return Array.from(this.playbacks.values());
                }
                afterPlayHandler(e) {
                    return (this.activePlayback.value = e), Promise.resolve();
                }
                beforePlayHandler(e) {
                    return this.activePlayback.value && this.activePlayback.value !== e ? this.activePlayback.value.pause() : Promise.resolve();
                }
                beforeDestroyHandler(e) {
                    return e.stop();
                }
                getPlayback(e) {
                    if (e) {
                        let t = this.playbacks.get(e);
                        if (t) return t;
                    }
                    let t = this.playbacks.get(L.MAIN);
                    if (void 0 !== t) return t;
                    throw new H.t('MAIN playback was not created', { code: 'NO_MAIN_PLAYBACK' });
                }
                checkPlaybackBlockingStatus() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.MAIN,
                        i = null == (e = this.activePlayback.value) ? void 0 : e.getId(),
                        r = i === a;
                    return ((null == (t = this.activePlayback.value) ? void 0 : t.isBlocking) || r) && !r
                        ? { status: F.N.BLOCKED, blockingPlaybackId: i }
                        : { status: F.N.UNBLOCKED };
                }
                callIfUnblocked(e, t) {
                    let { status: a, blockingPlaybackId: i } = this.checkPlaybackBlockingStatus(t);
                    return a === F.N.UNBLOCKED
                        ? e()
                        : (this.getPlayback(t).hooks.afterPlaybackCheckBlockingStatus.promise({ status: a, blockingPlaybackId: i }), Promise.resolve());
                }
                createPlayback(e, t) {
                    if (!this.playbacks.has(e)) {
                        let a = new F.VE({
                            id: e,
                            isBlocking: t.isBlocking || !1,
                            factory: t.factory,
                            entityProvider: t.entityProvider,
                            mediaPlayerParams: t.mediaPlayerParams,
                            playbackConfig: t.playbackConfig,
                        });
                        this.playbacks.set(e, a),
                            a.hooks.afterMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.afterMediaResume.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaResume.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.beforeDestroy.tapPromise('MusicPlaybackController', () => this.beforeDestroyHandler(a)),
                            this.syncWithMainPlayback(a, t.syncVolumeWithMainPlayback);
                    }
                }
                syncWithMainPlayback(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e.getId() === L.MAIN)
                        return void this.playbacksWaitingForSync.forEach((t) => {
                            this.syncVolume(e, t);
                        });
                    let a = this.playbacks.get(L.MAIN);
                    if (t && a) return void this.syncVolume(a, e);
                    t && !a && this.playbacksWaitingForSync.push(e);
                }
                syncVolume(e, t) {
                    (this.useExponentVolume ? e.state.playerState.exponentVolume : e.state.playerState.volume).onChange((e) => {
                        void 0 !== e && this.useExponentVolume ? t.setExponentVolume(e) : void 0 === e || this.useExponentVolume || t.setVolume(e);
                    });
                }
                constructor(e) {
                    (0, O._)(this, 'activePlayback', new ei.cJ(null)),
                        (0, O._)(this, 'playbacks', new Map()),
                        (0, O._)(this, 'playbacksWaitingForSync', []),
                        (0, O._)(this, 'useExponentVolume', void 0),
                        (this.useExponentVolume = !!e.useExponentVolume);
                }
            }
            class iB {
                get state() {
                    return this.playbackController.getPlayback().state;
                }
                getState(e) {
                    return this.playbackController.getPlayback(e).state;
                }
                playContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: i } = e,
                            r = this.factory.createContext({ data: i });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.playContext({ context: r, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                setContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: i } = e,
                            r = this.factory.createContext({ data: i });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.setContext({ context: r, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return a.hooks.afterError.promise(e), Promise.resolve();
                    }
                }
                restartContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.restartContext({ playAfterRestart: e.playAfterRestart, entitiesData: e.entitiesData, queueParams: e.queueParams }).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                play(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.play().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                stop(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.stop().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                pause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.pause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                resume(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.resume().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setProgress(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setSpeed(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)), t);
                }
                slideForward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideForward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                slideBackward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideBackward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                moveForward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveForward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                moveBackward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveBackward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setEntityByIndex(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.setEntityByIndex(e).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                togglePause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.togglePause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                toggleShuffle(e) {
                    let t = this.playbackController.getPlayback(e);
                    try {
                        this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
                    } catch (e) {
                        t.hooks.afterError.promise(e);
                    }
                }
                setShuffle(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                updateFilterParams(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.updateFilterParams(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                bindPlayer(e) {
                    this.playbackController.getPlayback(e).bindPlayer();
                }
                unbindPlayer(e) {
                    this.playbackController.getPlayback(e).unbindPlayer();
                }
                setRepeatMode(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setRepeatMode(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                removeAndLoadEntities(e) {
                    let { positions: t, playbackId: a, silent: i } = e,
                        r = this.playbackController.getPlayback(a);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            r.removeAndLoadEntities(t, i).catch((e) => {
                                r.hooks.afterError.promise(e);
                            }),
                        a,
                    );
                }
                remove(e) {
                    let { positions: t, playbackId: a, silent: i } = e,
                        r = this.playbackController.getPlayback(a);
                    this.playbackController.callIfUnblocked(() => r.remove(t, i), a);
                }
                hide(e) {
                    let { positions: t, playbackId: a, silent: i } = e,
                        r = this.playbackController.getPlayback(a);
                    this.playbackController.callIfUnblocked(() => r.hide(t, i), a);
                }
                inject(e) {
                    let { entitiesData: t, position: a, playbackId: i, silent: r, sourceContextData: s } = e,
                        n = this.playbackController.getPlayback(i),
                        l = s ? this.factory.createContext({ data: s }) : void 0;
                    this.playbackController.callIfUnblocked(() => n.inject({ entitiesData: t, position: a, silent: r, sourceContext: l }), i);
                }
                injectNext(e) {
                    let { entitiesData: t, playbackId: a, silent: i, sourceContextData: r } = e,
                        s = this.playbackController.getPlayback(a),
                        n = r ? this.factory.createContext({ data: r }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectNext({ entitiesData: t, silent: i, sourceContext: n }), a);
                }
                injectLast(e) {
                    let { entitiesData: t, playbackId: a, silent: i, sourceContextData: r } = e,
                        s = this.playbackController.getPlayback(a),
                        n = r ? this.factory.createContext({ data: r }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectLast({ entitiesData: t, silent: i, sourceContext: n }), a);
                }
                registerMediaPlayer(e) {
                    let { mediaPlayerParams: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).registerMediaPlayer(t);
                }
                setVideoCoreContainer(e) {
                    let { container: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).setVideoCoreContainer(t);
                }
                destroyVideoCore(e) {
                    this.playbackController.getPlayback(e).destroyVideoCore();
                }
                destroy() {
                    return Promise.allSettled(this.playbackController.availablePlaybacks.map((e) => e.hooks.beforeDestroy.promise()));
                }
                constructor(e) {
                    if (
                        ((0, O._)(this, 'factory', void 0),
                        (0, O._)(this, 'playbackController', void 0),
                        (this.factory = e.factory),
                        (this.playbackController = e.playbackController),
                        this.playbackController.createPlayback(L.MAIN, {
                            factory: e.factory,
                            mediaPlayerParams: e.mediaPlayerParams,
                            entityProvider: e.entityProvider,
                            playbackConfig: e.playbackConfig,
                        }),
                        e.plugins)
                    ) {
                        let t = this.playbackController.getPlayback(L.MAIN);
                        for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
                    }
                }
            }
            var iV = a(78420),
                iW = a(16476),
                iq = a(33208),
                iY = a(68317);
            a(24269);
            var iH = a(65630),
                iz = a(83252),
                iQ = a(80585);
            let i$ = (e) => {
                let { audioLoader: t, children: a } = e;
                return (0, w.use)(t), a;
            };
            var iZ = a(63930),
                iJ = a(40320);
            let i0 = (0, R.PA)(() => {
                let e = (0, iJ.Sq)(),
                    t = (0, iz.iIU)(),
                    { sonataState: a } = (0, iz.Pjs)();
                (0, w.useEffect)(() => {
                    e.loadPresets();
                }, [e]),
                    (0, w.useEffect)(() => {
                        e.isAvailable &&
                            (null == t ? void 0 : t.equalizer.value) &&
                            (e.isEnabled
                                ? (e.currentPreset && t.equalizer.value.applyPreset((0, iZ.HO)(e.currentPreset)), t.equalizer.value.enable())
                                : t.equalizer.value.disable());
                    }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer, a.areCoresRegistered, e.isAvailable]);
            });
            var i1 = a(43426);
            let i3 = (0, R.PA)((e) => {
                    let { isYnisonDisabled: t } = e,
                        { experiments: a, slam: i } = (0, iz.Pjs)(),
                        r = (0, iz.NFA)(),
                        s = t || i.isOfflineModeEnabled,
                        n = a.checkExperiment(iz.zal.WebNextYnisonActivityInterception, 'on');
                    (0, w.useEffect)(() => {
                        let e = r.get(iz.ooW),
                            t = r.get(iz.byd).stateController.on(
                                N.p$.UPDATED,
                                (t) => {
                                    t.diff.deviceVolume && e.set(iz.cYZ.YmPlayerVolume, t.diff.deviceVolume.volume, { expires: 365 });
                                },
                                'App',
                            );
                        return () => {
                            t();
                        };
                    }, [r]),
                        (0, w.useEffect)(() => {
                            r.get(iz.byd).updateVariables({ isShadow: !n });
                        }, [r, n]),
                        ((e) => {
                            let t = (0, iz.NFA)(),
                                { formatMessage: a } = (0, i1.A)();
                            (0, w.useEffect)(() => {
                                let e = t.get(iz.byd),
                                    i = a({ id: 'ynison.desktop-device-title' }, { platformName: (0, iz.t1V)((0, iz.uoh)()), hostname: (0, iz.akQ)() });
                                e.updateDeviceInfo({ title: i });
                            }, [t, a]),
                                (0, w.useEffect)(() => {
                                    let a = t.get(iz.byd);
                                    if (e.isConnectionDisabled) return void a.connector.disconnect();
                                    let i = () => {
                                            document.hidden || a.connector.connect({ oauth: t.get(iz.QGx).token, multiAuthUserId: t.get(iz.WA$).getPassportUid() });
                                        },
                                        r = a.stateController.on(
                                            N.p$.UPDATED,
                                            (e) => {
                                                a.isActive || e.prevState.active_device_id_optional !== a.deviceConfig.info.device_id || i();
                                            },
                                            'App',
                                        );
                                    return (
                                        document.addEventListener('visibilitychange', i),
                                        i(),
                                        r(),
                                        () => {
                                            r(), document.removeEventListener('visibilitychange', i);
                                        }
                                    );
                                }, [t, e.isConnectionDisabled, e.isYnisonActivityInterceptionEnabled]),
                                ((e) => {
                                    let t = (0, iz.NFA)(),
                                        a = (0, w.useRef)(0),
                                        { experiments: i } = (0, iz.Pjs)(),
                                        r = i.checkExperiment(iz.zal.WebNextYnisonInactiveTimerDesktop, 'on'),
                                        s = i.getExperiment(iz.zal.WebNextYnisonInactiveTimerDesktop);
                                    (0, w.useEffect)(() => {
                                        if (!e.isEnabled) return;
                                        let { inactiveTimeoutMs: i, inactiveCheckIntervalMs: n } = (function (e) {
                                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                    a = { inactiveTimeoutMs: 6e5, inactiveCheckIntervalMs: 3e4 };
                                                try {
                                                    var i, r, s, n;
                                                    if (
                                                        e &&
                                                        (null == (r = t.value) || null == (i = r.metadata) ? void 0 : i.inactiveTimeoutSec) &&
                                                        (null == (n = t.value) || null == (s = n.metadata) ? void 0 : s.inactiveCheckIntervalSec)
                                                    ) {
                                                        let e = Number(t.value.metadata.inactiveTimeoutSec),
                                                            a = Number(t.value.metadata.inactiveCheckIntervalSec);
                                                        if (!Number.isNaN(e) && !Number.isNaN(a)) return { inactiveTimeoutMs: 1e3 * e, inactiveCheckIntervalMs: 1e3 * a };
                                                    }
                                                    return a;
                                                } catch (e) {
                                                    return a;
                                                }
                                            })(r, s),
                                            l = setInterval(() => {
                                                let e = t.get(iz.byd),
                                                    r = e.isActive,
                                                    s = Date.now() - a.current > i,
                                                    n = e.stateController.currentState.player_state.status.paused;
                                                r && s && n && e.becomePassive();
                                            }, n);
                                        return () => {
                                            clearInterval(l);
                                        };
                                    }, [t, e.isEnabled, r, s]),
                                        (0, w.useEffect)(() => {
                                            if (!e.isEnabled) return;
                                            let i = t.get(iz.byd),
                                                r = i.stateController.on(
                                                    N.p$.UPDATED,
                                                    (e) => {
                                                        var t, r;
                                                        ((null == (t = e.diff) ? void 0 : t.player_state) ||
                                                            ((null == (r = e.diff) ? void 0 : r.active_device_id_optional) && i.isActive)) &&
                                                            (a.current = Date.now());
                                                    },
                                                    'App',
                                                );
                                            return () => {
                                                r();
                                            };
                                        }, [t, e.isEnabled]);
                                })({ isEnabled: !e.isConnectionDisabled || !e.isYnisonActivityInterceptionEnabled });
                        })({ isConnectionDisabled: s, isYnisonActivityInterceptionEnabled: n }),
                        (0, w.useEffect)(() => {
                            if (s || !n) return;
                            let e = r.get(iz.byd),
                                t = e.stateController.on(
                                    N.p$.UPDATED,
                                    () => {
                                        var t, a;
                                        let i = (null == (a = e.stateController.fullState.diff.player_state) || null == (t = a.status) ? void 0 : t.paused) === !1;
                                        !e.isActive && i && e.interceptActivity();
                                    },
                                    'App',
                                );
                            return () => {
                                t();
                            };
                        }, [r, s, n]);
                }),
                i2 = (e) => {
                    let { children: t } = e,
                        a = (0, iz.iIU)(),
                        i = (0, iz.Yx9)(),
                        [r] = (0, w.useState)(() => iJ.ML.create({ isEnabled: !1, modal: {} }, i));
                    return (
                        (0, w.useEffect)(() => {
                            let e =
                                null == a
                                    ? void 0
                                    : a.equalizer.onChange((e) => {
                                          r.setIsAvailable(!!e);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [r, null == a ? void 0 : a.equalizer]),
                        (0, x.jsx)(iJ.iV.Provider, { value: r, children: t })
                    );
                },
                i6 = !1;
            var i8 = a(3269);
            let i5 = null,
                i4 = null,
                i9 = null,
                i7 = null,
                re = null,
                rt = null,
                ra = null,
                ri = null,
                rr = null,
                rs = null,
                rn = [iz.cYZ.YmPlayerQuality, iz.cYZ.YmPlayerShuffle, iz.cYZ.YmPlayerPrevVolume, iz.cYZ.YmPlayerVolume, iz.cYZ.YmPlayerRepeatMode, iz.cYZ.CrossFadeMode],
                rl = (e) => {
                    var t;
                    let { children: i, hostTld: r, quality: s, withPromoLandingPlayback: n } = e,
                        l = (0, iz.NFA)(),
                        {
                            sonataState: o,
                            experiments: d,
                            library: u,
                            trailer: c,
                            user: h,
                            advert: g,
                            settings: m,
                            promolanding: { state: y },
                            album: p,
                            albumCPA: { isPlusCPAPlayerBarEnabled: v },
                        } = (0, iz.Pjs)(),
                        { isPassToProduct: S, isFreemium: P } = (0, iz.XCI)(),
                        E = (0, iz.UlF)(),
                        f = l.get(iz.ooW),
                        b = l.get(iz.QGx),
                        _ = l.get(iz.twC),
                        I = l.get(iz.P0Z),
                        { language: k } = (0, iz.h6b)(),
                        C = (0, iz.rs2)(),
                        T = (0, iz.Gdz)(),
                        A = d.checkExperiment(iz.zal.WebNextCrossMediaPlayer, 'on'),
                        D = !h.isAuthorized || S || P,
                        L = h.isAuthorized && !P,
                        R = I.get(iz.qVS),
                        O = I.get(iz.W4E),
                        F = !!R && !!f.get(iz.cYZ.EnableMetricsPluginDebugMode),
                        G = !!R && !!f.get(iz.cYZ.EnableYnisonMetricsDebugMode),
                        K = (0, w.useMemo)(() => (i5 || (i5 = new i_(s)), i5), [s]),
                        j = (() => {
                            let e = (0, iz.NFA)(),
                                { experiments: t } = (0, iz.Pjs)(),
                                a = e.get(iz.twC),
                                i = a.player.yaspExpName,
                                r = a.player.yaspCandidateVersion;
                            return i && r && t.checkExperiment(i, 'on') ? r : a.player.yaspVersionStable;
                        })(),
                        U = (() => {
                            let e = (0, iz.NFA)(),
                                { experiments: t } = (0, iz.Pjs)(),
                                {
                                    player: { yaspSourceLimit: a },
                                } = e.get(iz.twC);
                            try {
                                var i;
                                let e = t.checkExperiment(iz.zal.WebNextYaspSourceLimit, 'on'),
                                    r = t.getExperiment(iz.zal.WebNextYaspSourceLimit);
                                if (e && (null == r || null == (i = r.value.metadata) ? void 0 : i.yaspSourceLimit)) {
                                    let e = Number(r.value.metadata.yaspSourceLimit);
                                    if (!Number.isNaN(e)) return e;
                                }
                                return a;
                            } catch (e) {
                                return a;
                            }
                        })(),
                        B = (() => {
                            let { experiments: e } = (0, iz.Pjs)();
                            try {
                                var t;
                                let a = e.checkExperiment(iz.zal.WebNextResetWaveSeeds, 'on'),
                                    i = e.getExperiment(iz.zal.WebNextResetWaveSeeds);
                                if (a && (null == i || null == (t = i.value.metadata) ? void 0 : t.sessionLifeTimeMin)) {
                                    let e = Number(i.value.metadata.sessionLifeTimeMin);
                                    if (!Number.isNaN(e)) return { enabled: !0, sessionLifeTimeMin: e };
                                }
                                return { enabled: !1 };
                            } catch (e) {
                                return { enabled: !1 };
                            }
                        })(),
                        V = m.browserInfo,
                        W = 'Safari' !== V.name && 'iOS' !== V.OSFamily,
                        q = (null == V ? void 0 : V.isTouch) && v(p.id, null == (t = p.meta) ? void 0 : t.isNonMusic),
                        Y = (0, w.useMemo)(
                            () =>
                                i9 ||
                                (i9 = new ta({
                                    useAnalyser: W,
                                    useEqualizer: W,
                                    useFade: !1,
                                    useCrossFade: A,
                                    crossFadeConfig: { useVolumeForAudioEffect: !W, useWorker: !!window.Worker },
                                })),
                            [W, A, W],
                        ),
                        H = (0, w.useMemo)(() => {
                            if (null !== i7) return i7;
                            let e = l.get(iz.gdC);
                            return (i7 = new tr({
                                advertModule: C,
                                afterTrackResource: l.get(iz.EN6),
                                adsResource: e,
                                variables: {
                                    get enabled() {
                                        return !h.hasPlus;
                                    },
                                },
                            }));
                        }, [C, l, h.hasPlus]),
                        z = (0, w.useMemo)(() => {
                            if (rt) return rt;
                            let e = l.get(iz.qTR),
                                { transport: t, codecs: a } = (0, iz.EKQ)(V);
                            return (rt = new iF({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: _.player.secretKey,
                                    mediaConfigController: K,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get fromPromoLanding() {
                                            return !0;
                                        },
                                    },
                                    mediaSourceTtlMs: _.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: _.player.vhMediaProvider,
                            }));
                        }, [V, _.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs, _.player.secretKey, _.player.vhMediaProvider, l, K]),
                        Q = (0, w.useMemo)(() => {
                            if (re) return re;
                            let e = l.get(iz.qTR),
                                { transport: t, codecs: a } = (0, iz.EKQ)(V);
                            return (re = new iF({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: _.player.secretKey,
                                    mediaConfigController: K,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return d.checkExperiment(iz.zal.WebNextTracksPreload, 'on');
                                        },
                                    },
                                    mediaSourceTtlMs: _.player.configVariablesMainPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: _.player.vhMediaProvider,
                            }));
                        }, [V, _.player.configVariablesMainPlayback.strmUrlsTtlMs, _.player.secretKey, _.player.vhMediaProvider, l, d, K]),
                        $ = (0, w.useMemo)(() => ra || (ra = new iU({ useExponentVolume: !0 })), []);
                    (0, w.useEffect)(() => {
                        C && $ && (C.createAudioAdvertPlayback({ playbackController: $ }), g.setIsAdvertPlaybackCreated(!0));
                    }, [g, C, $]);
                    let Z = (0, w.useMemo)(() => (ri ? ri : (ri = new ij({ tracksResource: l.get(iz.Ooh), clipsResource: l.get(iz.jQD) }))), [l]),
                        J = (0, w.useMemo)(() => {
                            if (rr) return rr;
                            let e = l.get(iz.Ooh),
                                t = l.get(iz._19),
                                a = l.get(iz.ok0),
                                i = l.get(iz.qNr),
                                r = l.get(iz.tzI),
                                s = l.get(iz.O9U);
                            return (rr = new e$({
                                contextFactoryParams: {
                                    logger: E,
                                    variables: {
                                        vibe: {
                                            get useWaveQueue() {
                                                return d.checkExperiment(iz.zal.WebNextUseWaveQueue, 'on');
                                            },
                                            get multipleSessions() {
                                                return B;
                                            },
                                        },
                                    },
                                    tracksResource: e,
                                    usersResource: t,
                                    rotorResource: a,
                                    playlistResource: i,
                                    albumsResource: r,
                                    artistsResource: s,
                                },
                                entityFactoryParams: { likeStore: u },
                            }));
                        }, [l, d, u, E, B]),
                        ee = (0, w.useMemo)(() => rs || (rs = new to({ telemetryResource: l.get(iz.LCy), ..._.player.telemetry })), [l, _.player.telemetry]),
                        et = (0, w.useMemo)(() => {
                            if (!Q || !$ || !Z || !J) return null;
                            if (i4) return i4;
                            let e = l.get(iz.A4B)({ credentials: 'include' }),
                                {
                                    player: { prefixUrl: t, configVariablesMainPlayback: a, configVariablesTrailerPlayback: i },
                                } = _,
                                s = (e) => {
                                    let t = d.checkExperiment(iz.zal.WebNextPlayAudioHeartBeat, 'on');
                                    return d.checkExperiment(iz.zal.WebNextEnablePlaysPluginV2, 'on')
                                        ? new tJ({ ...e, store: t ? new t6() : void 0 })
                                        : new at({ ...e, store: t ? new ar() : void 0 });
                                },
                                n = l.get(iz.UBc),
                                u = l.get(iz.TqU),
                                g = [new as(n)];
                            u && g.push(new an(u));
                            let m = [
                                new ah({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return L;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return d.checkExperiment(iz.zal.WebNextEnableVibeRepeatControl, 'on') && d.checkExperiment(iz.zal.WebNextUseWaveQueue, 'on');
                                        },
                                    },
                                }),
                                new ag(),
                                new am(),
                                s({
                                    httpClient: e,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, iH._)(),
                                                device: (0, iz.V7X)(),
                                                language: k,
                                                oauth: b.token,
                                                get multiAuthUserId() {
                                                    return l.get(iz.WA$).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, M.getTldHost)(t, r, iz.BEZ),
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return d.checkExperiment(iz.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        get enableLocalStoredPlaysData() {
                                            return d.checkExperiment(iz.zal.WebNextPlayAudioHeartBeat, 'on');
                                        },
                                        get shouldDeletePlaysObjectStore() {
                                            return d.checkExperiment(iz.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enableRemoveDuplicatePlays() {
                                            return d.checkExperiment(iz.zal.WebNextRemoveDuplicatePlays, 'on');
                                        },
                                        get enableSendFadeFieldsInPlays() {
                                            return d.checkExperiment(iz.zal.WebNextEnableSendFadeFieldsInPlays, 'on');
                                        },
                                    },
                                    isCrossfadeEnabled: K.isCrossfadeEnabled,
                                }),
                                new aS({ browserName: V.name, browserVersion: V.version }),
                                new aP({ logger: E }),
                                new aE(K.quality),
                                new a_({
                                    httpClient: e,
                                    streamsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, iH._)(),
                                                device: (0, iz.V7X)(),
                                                language: k,
                                                oauth: b.token,
                                                get multiAuthUserId() {
                                                    return l.get(iz.WA$).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: (0, M.getTldHost)(t, r, iz.BEZ),
                                    },
                                    variables: {
                                        get isEnabled() {
                                            return h.isAuthorized;
                                        },
                                    },
                                }),
                                new aM({
                                    mediaConfigController: K,
                                    transports: g,
                                    variables: {
                                        get enableDebugMode() {
                                            return F;
                                        },
                                    },
                                }),
                                new aG({
                                    mediaProvider: Q,
                                    mediaConfigController: K,
                                    config: {
                                        entitiesToPreloadStrmUrlsCount: a.entitiesToPreloadStrmUrlsCount,
                                        entitiesToPreloadSourceCount: a.entitiesToPreloadSourceCount,
                                        preloadedSourcesMaxCount: a.preloadedSourcesMaxCount,
                                        strmUrlsTtlMs: a.strmUrlsTtlMs,
                                        bufferGoal: a.bufferGoal,
                                    },
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return d.checkExperiment(iz.zal.WebNextTracksPreload, 'on');
                                        },
                                    },
                                }),
                                new aK({
                                    onTrailerPaused: () => {
                                        c.setIsManuallyPaused(!0);
                                    },
                                    onTrailerPlaying: () => {
                                        c.setIsManuallyPaused(!1);
                                    },
                                    playbackController: $,
                                    trailerPlaybackParams: {
                                        id: iz.V_r.TRAILER,
                                        plugins: [
                                            new ta({ useFade: W, useSmartPreview: !0 }),
                                            new ah({
                                                variables: {
                                                    get isAutoflowEnabled() {
                                                        return !1;
                                                    },
                                                    get isVibeRepeatEnabled() {
                                                        return !1;
                                                    },
                                                },
                                            }),
                                            new aP({ logger: E }),
                                            new am(),
                                            new aM({
                                                mediaConfigController: K,
                                                transports: g,
                                                variables: {
                                                    get enableDebugMode() {
                                                        return F;
                                                    },
                                                },
                                            }),
                                            s({
                                                httpClient: e,
                                                playsResourceConfig: {
                                                    params: {
                                                        common: {
                                                            client: (0, iH._)(),
                                                            device: (0, iz.V7X)(),
                                                            language: k,
                                                            oauth: b.token,
                                                            get multiAuthUserId() {
                                                                return l.get(iz.WA$).getPassportUid();
                                                            },
                                                        },
                                                    },
                                                    prefixUrl: (0, M.getTldHost)(t, r, iz.BEZ),
                                                },
                                                variables: {
                                                    get disableSendPlaysOnTrackStart() {
                                                        return d.checkExperiment(iz.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                                    },
                                                    get enableLocalStoredPlaysData() {
                                                        return d.checkExperiment(iz.zal.WebNextPlayAudioHeartBeat, 'on');
                                                    },
                                                    get shouldDeletePlaysObjectStore() {
                                                        return d.checkExperiment(iz.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                                    },
                                                },
                                                storePlaysProgressIntervalMs: 5e3,
                                            }),
                                            new aX(),
                                        ],
                                        factory: J,
                                        entityProvider: Z,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: i.mediaElementErrorReloadCount,
                                            windowSize: i.windowSize,
                                            setupQueueWindowSize: i.setupQueueWindowSize,
                                        },
                                    },
                                }),
                                H,
                                new aX(),
                            ];
                            if ((Y && m.push(Y), !D)) {
                                let e = l.get(iz.byd);
                                e.updateVariables({ enableDebugMode: G });
                                let t = new iy({
                                        factory: J,
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        fallbackTypesQueueToVibe: [N.$P.UNSPECIFIED, N.$P.FM_RADIO, N.$P.VIDEO_WAVE, N.$P.LOCAL_TRACKS],
                                        variables: {
                                            get shouldApplyState() {
                                                return o.shouldApplyYnisonState;
                                            },
                                            get enableSendLimitedEntityListToYnison() {
                                                return d.checkExperiment(iz.zal.WebNextEnableSendLimitedEntityListToYnison, 'on');
                                            },
                                            get useWaveQueue() {
                                                return d.checkExperiment(iz.zal.WebNextUseWaveQueue, 'on');
                                            },
                                        },
                                    }),
                                    a = new iS({
                                        deviceConfig: e.deviceConfig,
                                        ynisonStateController: e.stateController,
                                        variables: {
                                            get shouldApplyState() {
                                                return o.shouldApplyYnisonState;
                                            },
                                        },
                                    });
                                m.push(a), m.push(t);
                            }
                            return (
                                m.push(
                                    new iE({
                                        factory: J,
                                        platform: 'desktop',
                                        variables: {
                                            get enabled() {
                                                return L;
                                            },
                                        },
                                    }),
                                ),
                                ee &&
                                    m.push(
                                        new ib({
                                            telemetry: ee,
                                            get puid() {
                                                return h.puid;
                                            },
                                            yaspVersion: j,
                                            getTelemetryTestIds: T,
                                        }),
                                    ),
                                (i4 = new iB({
                                    factory: J,
                                    playbackController: $,
                                    plugins: m,
                                    entityProvider: Z,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: a.mediaElementErrorReloadCount,
                                        windowSize: a.windowSize,
                                        setupQueueWindowSize: a.setupQueueWindowSize,
                                    },
                                }))
                            );
                        }, [
                            Q,
                            $,
                            Z,
                            J,
                            l,
                            _,
                            k,
                            b.token,
                            r,
                            V.name,
                            V.version,
                            E,
                            K,
                            W,
                            H,
                            Y,
                            D,
                            ee,
                            L,
                            d,
                            h.isAuthorized,
                            h.puid,
                            F,
                            G,
                            c,
                            o.shouldApplyYnisonState,
                            j,
                            T,
                        ]);
                    (0, iY.H)(et);
                    let ea = (0, iX.c)((e) => {
                            null == et || et.setExponentVolume(e),
                                null == et || et.setExponentVolume(e, iz.V_r.TRAILER),
                                o.setVolume(e),
                                n && (null == et || et.setExponentVolume(e, iz.V_r.PROMO_LANDING), y.setVolume(e));
                        }),
                        ei = (0, iX.c)(() => {
                            let e = f.get(iz.cYZ.YmPlayerVolume);
                            'number' == typeof e ? ea(e) : ea(1);
                        });
                    ((e) => {
                        let {
                                mediaProvider: t,
                                playbackController: a,
                                factory: i,
                                entityProvider: r,
                                mediaConfigController: s,
                                isEnabled: n,
                                isMetricsDebugEnabled: l,
                                hostTld: o,
                                browserInfo: d,
                            } = e,
                            u = (0, iz.NFA)(),
                            c = (0, iz.UlF)(),
                            { experiments: h } = (0, iz.Pjs)(),
                            { language: g } = (0, iz.h6b)();
                        if (!n || !a || !i || !t || !r || !s || i6) return;
                        let m = u.get(iz.QGx),
                            y = u.get(iz.twC),
                            p = u.get(iz.A4B)({ credentials: 'include' }),
                            {
                                player: { configVariablesPromoLandingPlayback: v, prefixUrl: S },
                            } = y,
                            P = u.get(iz.UBc),
                            E = u.get(iz.TqU),
                            f = [new as(P)];
                        E && f.push(new an(E)),
                            null == a ||
                                a.createPlayback(iz.V_r.PROMO_LANDING, {
                                    factory: i,
                                    entityProvider: r,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: v.mediaElementErrorReloadCount,
                                        windowSize: v.windowSize,
                                        setupQueueWindowSize: v.setupQueueWindowSize,
                                    },
                                });
                        let b = a.getPlayback(iz.V_r.PROMO_LANDING);
                        for (let e of [
                            new ah({
                                variables: {
                                    get isAutoflowEnabled() {
                                        return !1;
                                    },
                                    get isVibeRepeatEnabled() {
                                        return !1;
                                    },
                                },
                            }),
                            new ag(),
                            new am(),
                            new at({
                                httpClient: p,
                                playsResourceConfig: {
                                    params: {
                                        common: {
                                            client: (0, iH._)(),
                                            device: (0, iz.V7X)(),
                                            language: g,
                                            oauth: m.token,
                                            get multiAuthUserId() {
                                                return u.get(iz.WA$).getPassportUid();
                                            },
                                        },
                                    },
                                    prefixUrl: (0, M.getTldHost)(S, o, iz.BEZ),
                                },
                                variables: {
                                    get disableSendPlaysOnTrackStart() {
                                        return h.checkExperiment(iz.zal.WebNextDisableSendPlaysOnTrackStart, 'on');
                                    },
                                    get enableLocalStoredPlaysData() {
                                        return h.checkExperiment(iz.zal.WebNextPlayAudioHeartBeat, 'on');
                                    },
                                    get shouldDeletePlaysObjectStore() {
                                        return h.checkExperiment(iz.zal.WebNextDeleteIndexedDbPlaysStore, 'on');
                                    },
                                    get enablePartialPlayReporting() {
                                        return !0;
                                    },
                                },
                                store: h.checkExperiment(iz.zal.WebNextPlayAudioHeartBeat, 'on') ? new ar() : void 0,
                            }),
                            new aS({ browserName: d.name, browserVersion: d.version }),
                            new aP({ logger: c }),
                            new aM({
                                mediaConfigController: s,
                                transports: f,
                                variables: {
                                    get enableDebugMode() {
                                        return l;
                                    },
                                },
                            }),
                            new aX(),
                        ])
                            e.apply({ playback: b, hooks: b.hooks });
                        i6 = !0;
                    })({
                        isEnabled: !!n,
                        playbackController: $,
                        entityProvider: Z,
                        factory: J,
                        mediaConfigController: K,
                        isNonSafariBrowser: W,
                        isMetricsDebugEnabled: F,
                        browserInfo: V,
                        hostTld: r,
                        mediaProvider: z,
                    }),
                        (0, w.useEffect)(() => {
                            et && O && (window.sonataState = et.state);
                        }, [O, et]),
                        (0, w.useEffect)(() => {
                            et &&
                                Q &&
                                z &&
                                ee &&
                                !o.areCoresRegistered &&
                                (Promise.all([a.e(9096), a.e(2556)])
                                    .then(a.bind(a, 2556))
                                    .then((e) => {
                                        let { YaspCoreAdapter: t, YaspLoader: a, HlsCoreAdapter: i, HtmlAudioCoreAdapter: r } = e,
                                            s = new a({ logger: E, yaspTelemetry: ee, getTelemetryTestIds: T }),
                                            l = W ? new i({ hlsErrorRetryLimit: _.player.hlsErrorRetryLimit }) : new r();
                                        et.registerMediaPlayer({
                                            mediaPlayerParams: { core: l, mediaProvider: Q, mediaPlayerType: 'audioMediaPlayer', contentType: X.e.HLS },
                                        }),
                                            C &&
                                                et.registerMediaPlayer({
                                                    mediaPlayerParams: {
                                                        core: new r(),
                                                        mediaProvider: new iz.Uvn(),
                                                        mediaPlayerType: 'audioMediaPlayer',
                                                        contentType: X.e.AUDIO,
                                                    },
                                                    playbackId: iz.V_r.ADVERT,
                                                }),
                                            et.registerMediaPlayer({
                                                mediaPlayerParams: {
                                                    core: new r(),
                                                    mediaProvider: Q,
                                                    mediaPlayerType: 'audioMediaPlayer',
                                                    contentType: X.e.DOWNLOADED_AUDIO,
                                                },
                                            }),
                                            s
                                                .loadYasp({
                                                    version: j,
                                                    sourceLimit: U,
                                                    retryDelayMs: _.player.yaspLoadRetryDelayMs,
                                                    perfLogUrl: _.player.telemetry.perfLogUrl,
                                                })
                                                .then(() => {
                                                    let e,
                                                        a = s.getYaspAudioElement();
                                                    (e = window.Worker ? new e6() : new e2()),
                                                        A
                                                            ? et.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'crossMediaPlayer',
                                                                      mediaProvider: Q,
                                                                      ticker: e,
                                                                      contentType: X.e.AUDIO,
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: ee }),
                                                                      additionalCore: new t({ yaspAudioElement: a, yaspTelemetry: ee }),
                                                                      config: { useVolumeForAudioEffect: !W },
                                                                      isEnabled: K.isCrossfadeEnabled,
                                                                  },
                                                              })
                                                            : et.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'audioMediaPlayer',
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: ee }),
                                                                      mediaProvider: Q,
                                                                      contentType: X.e.AUDIO,
                                                                  },
                                                              }),
                                                        et.registerMediaPlayer({
                                                            mediaPlayerParams: {
                                                                core: new t({ yaspAudioElement: a }),
                                                                mediaProvider: Q,
                                                                mediaPlayerType: 'audioMediaPlayer',
                                                                contentType: X.e.AUDIO,
                                                            },
                                                            playbackId: iz.V_r.TRAILER,
                                                        }),
                                                        n &&
                                                            z &&
                                                            et.registerMediaPlayer({
                                                                mediaPlayerParams: {
                                                                    core: new t({ yaspAudioElement: a }),
                                                                    mediaProvider: z,
                                                                    mediaPlayerType: 'audioMediaPlayer',
                                                                    contentType: X.e.AUDIO,
                                                                },
                                                                playbackId: iz.V_r.PROMO_LANDING,
                                                            }),
                                                        ei();
                                                })
                                                .catch((e) => {
                                                    E.error('[SonataProvider] Error trying to register media players', { error: e });
                                                });
                                    }),
                                o.setCoresAsRegistered(!0));
                        }, [
                            C,
                            _.player.hlsErrorRetryLimit,
                            j,
                            U,
                            W,
                            E,
                            Q,
                            z,
                            ei,
                            et,
                            o,
                            n,
                            l,
                            o.areCoresRegistered,
                            ee,
                            A,
                            T,
                            _.player.yaspSourceLimit,
                            _.player.yaspLoadRetryDelayMs,
                            _.player.telemetry.perfLogUrl,
                            K.isCrossfadeEnabled,
                        ]),
                        (0, w.useEffect)(() => {
                            a.e(1886)
                                .then(a.bind(a, 41886))
                                .then((e) => {
                                    let { loadVHPlayerSdk: t, VHPlayerCoreAdapter: a } = e;
                                    if (!et || !Q || !$ || !Z || !J) return;
                                    let i = new a({ hideAds: !0 }),
                                        { configVariablesMainPlayback: r } = _.player,
                                        s = async () =>
                                            t(_.player.vhPlayerSdkVersion)
                                                .then(() => {
                                                    $.createPlayback(iz.V_r.CLIP, {
                                                        mediaPlayerParams: { core: i, mediaProvider: Q, mediaPlayerType: 'videoMediaPlayer', contentType: X.e.CLIP },
                                                        entityProvider: Z,
                                                        factory: J,
                                                        playbackConfig: {
                                                            mediaElementErrorReloadCount: r.mediaElementErrorReloadCount,
                                                            windowSize: r.windowSize,
                                                            setupQueueWindowSize: r.setupQueueWindowSize,
                                                        },
                                                        syncVolumeWithMainPlayback: !0,
                                                    });
                                                    let e = $.getPlayback(iz.V_r.CLIP);
                                                    for (let t of [
                                                        new ah({
                                                            variables: {
                                                                get isAutoflowEnabled() {
                                                                    return !1;
                                                                },
                                                                get isVibeRepeatEnabled() {
                                                                    return !1;
                                                                },
                                                            },
                                                        }),
                                                        new am(),
                                                        H,
                                                    ])
                                                        t.apply({ playback: e, hooks: e.hooks });
                                                    o.setIsVHCoreRegistered(!0);
                                                })
                                                .catch(() => {
                                                    setTimeout(s, 1e3);
                                                });
                                    s();
                                });
                        }, [H, _.player, l, Z, J, Q, $, et, o, h.hasPlus]),
                        (0, iY.OM)({ sonata: et }),
                        (0, iW.rb)({ sonata: et }),
                        ((e) => {
                            let { sonata: t, playbackId: a, withStorage: i, sonataState: r } = e,
                                s = (0, iz.NFA)().get(iz.ooW);
                            (0, w.useEffect)(() => {
                                var e;
                                let n,
                                    l,
                                    o,
                                    d,
                                    u,
                                    c =
                                        null == t
                                            ? void 0
                                            : t.getState(a).queueState.currentEntity.onChange((e) => {
                                                  let t = null == e ? void 0 : e.context.data.type,
                                                      a = null == e ? void 0 : e.context.data.meta.id,
                                                      i = null == e ? void 0 : e.entity;
                                                  i && r.setEntityMeta(i), t && r.setContextType(t), a && r.setContextId(a);
                                              }),
                                    h =
                                        null == t
                                            ? void 0
                                            : t.getState(a).playerState.status.onChange((e) => {
                                                  e && r.setStatus(e);
                                              }),
                                    g =
                                        null == t
                                            ? void 0
                                            : t.getState(a).currentContext.onChange(() => {
                                                  var e, c, h, g, m, y;
                                                  if ((null == n || n(), null == l || l(), null == o || o(), null == d || d(), null == u || u(), i)) {
                                                      let e = null != (y = s.get(iz.cYZ.YmPlayerRepeatMode)) ? y : i8.pM.NONE;
                                                      null == t || t.setRepeatMode(e, a);
                                                      let i = !!s.get(iz.cYZ.YmPlayerShuffle);
                                                      null == t || t.setShuffle(i, a);
                                                  }
                                                  (n =
                                                      null == t || null == (e = t.getState(a).currentContext.value)
                                                          ? void 0
                                                          : e.availableActions.moveBackward.onChange((e) => {
                                                                r.setCanMoveBackward(!!e);
                                                            })),
                                                      (l =
                                                          null == t || null == (c = t.getState(a).currentContext.value)
                                                              ? void 0
                                                              : c.availableActions.moveForward.onChange((e) => {
                                                                    r.setCanMoveForward(!!e);
                                                                })),
                                                      (o =
                                                          null == t || null == (h = t.getState(a).currentContext.value)
                                                              ? void 0
                                                              : h.availableActions.repeat.onChange((e) => {
                                                                    'boolean' == typeof e && r.setCanChangeRepeatMode(e);
                                                                })),
                                                      (d =
                                                          null == t || null == (g = t.getState(a).currentContext.value)
                                                              ? void 0
                                                              : g.availableActions.shuffle.onChange((e) => {
                                                                    'boolean' == typeof e && r.setCanShuffle(e);
                                                                })),
                                                      (u =
                                                          null == t || null == (m = t.getState(a).currentContext.value)
                                                              ? void 0
                                                              : m.availableActions.speed.onChange((e) => {
                                                                    'boolean' == typeof e && (r.setCanSpeed(e), e || null == t || t.setSpeed(1, a));
                                                                }));
                                              }),
                                    m =
                                        null == t || null == (e = t.getState(a).playerState)
                                            ? void 0
                                            : e.progress.onChange((e) => {
                                                  e && (r.setPosition(e.position), r.setDuration(e.duration));
                                              }),
                                    y =
                                        null == t
                                            ? void 0
                                            : t.getState(a).playerState.volume.onChange(() => {
                                                  let e = null == t ? void 0 : t.getState(a).playerState.exponentVolume.value;
                                                  'number' == typeof e && r.setVolume(e);
                                              }),
                                    p =
                                        null == t
                                            ? void 0
                                            : t.getState(a).queueState.repeat.onChange((e) => {
                                                  e && (r.setRepeatMode(e), i && s.set(iz.cYZ.YmPlayerRepeatMode, e, { expires: 365 }));
                                              }),
                                    v =
                                        null == t
                                            ? void 0
                                            : t.getState(a).queueState.shuffle.onChange((e) => {
                                                  'boolean' == typeof e && (r.setShuffle(e), i && s.set(iz.cYZ.YmPlayerShuffle, e, { expires: 365 }));
                                              });
                                return () => {
                                    null == c || c(),
                                        null == h || h(),
                                        null == g || g(),
                                        null == y || y(),
                                        null == p || p(),
                                        null == o || o(),
                                        null == d || d(),
                                        null == v || v(),
                                        null == m || m(),
                                        null == n || n(),
                                        null == l || l(),
                                        null == u || u();
                                };
                            }, [a, t, r, s, i]);
                        })({ sonata: et, playbackId: n ? iz.V_r.PROMO_LANDING : void 0, withStorage: !n, sonataState: n ? y : o });
                    let er = (0, w.useCallback)(() => {
                        if (!h.isAuthorized || S || (!h.hasPlus && q)) return aD.e.PREVIEW;
                        if (P) return aD.e.EFFICIENT;
                        let e = f.get(iz.cYZ.YmPlayerQuality);
                        if (e) {
                            if (Object.values(iz.lv9).includes(e)) {
                                let t = (0, iz.SBI)(e);
                                return f.set(iz.cYZ.YmPlayerQuality, t, { expires: 365 }), t;
                            }
                            return e;
                        }
                        return f.set(iz.cYZ.YmPlayerQuality, aD.e.BALANCED, { expires: 365 }), aD.e.BALANCED;
                    }, [f, S, P, h.isAuthorized, h.hasPlus, q]);
                    return (
                        (0, w.useEffect)(
                            () => (
                                n &&
                                    (null == et || et.stop(),
                                    Object.values(iz.V_r).forEach((e) => {
                                        e !== iz.V_r.PROMO_LANDING && (null == et || et.stop(e));
                                    })),
                                () => {
                                    n && (null == et || et.stop(iz.V_r.PROMO_LANDING));
                                }
                            ),
                            [et, n],
                        ),
                        (0, w.useEffect)(() => {
                            n || (K.setQuality(er()), o.setQuality(er()));
                        }, [K, er, o, n]),
                        (0, w.useEffect)(() => {
                            let e = f.get(iz.cYZ.CrossFadeMode),
                                t = !!A && (null == e || e);
                            f.set(iz.cYZ.CrossFadeMode, t, { expires: 365 }), (K.isCrossfadeEnabled.value = t);
                        }, [K, o, f, A]),
                        (0, w.useEffect)(() => {
                            (0, iV.Bx)(f, rn);
                        }, [f]),
                        (0, x.jsx)(iz.cdg.Provider, {
                            value: K,
                            children: (0, x.jsxs)(iz.GsR.Provider, {
                                value: et,
                                children: [
                                    (0, x.jsx)(iq.mW, {}),
                                    (0, x.jsx)(i3, { isYnisonDisabled: D }),
                                    (0, x.jsx)(iz.WM$.Provider, { value: Y, children: (0, x.jsxs)(i2, { children: [(0, x.jsx)(i0, {}), i] }) }),
                                ],
                            }),
                        })
                    );
                },
                ro = (0, R.PA)((e) => {
                    let { children: t, hostTld: a, quality: i, ...r } = e,
                        s = (0, iz.Dg5)();
                    return (0, x.jsx)(w.Suspense, {
                        fallback: (0, x.jsx)(iQ.JR, {}),
                        children: (0, x.jsx)(i$, { audioLoader: s, children: (0, x.jsx)(rl, { hostTld: a, quality: i, ...r, children: t }) }),
                    });
                });
        },
        18753: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
            };
        },
        22603: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        23404: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        23615: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { Q: () => i }),
                (function (e) {
                    (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists');
                })(i || (i = {}));
        },
        24993: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        25522: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
            };
        },
        25566: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        25945: (e, t, a) => {
            'use strict';
            a.d(t, { KidsCategoryPage: () => b });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(31500),
                d = a(56231),
                u = a(97800),
                c = a(6664),
                h = a(82644),
                g = a(33276),
                m = a(83252),
                y = a(80585),
                p = a(44193),
                v = a.n(p),
                S = a(27510),
                P = a(91582),
                E = a.n(P);
            let f = (0, s.PA)(() => {
                    let { experiments: e } = (0, m.Pjs)(),
                        t = e.checkExperiment(m.zal.WebNextWaveAgentExperiment, 'on'),
                        a = (0, S.L)(() =>
                            t ? (0, i.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0, isShimmerCentered: !0 }) : (0, i.jsx)(c.Rj, { isActive: !0, length: 4 }),
                        );
                    return (0, i.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, i.jsx)('div', { children: a }),
                            (0, i.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                            (0, i.jsx)(y.OY, { isShimmerVisible: !0, isShimmerActive: !0 }),
                        ],
                    });
                }),
                b = (0, s.PA)((e) => {
                    let { categoryId: t } = e,
                        { kids: a, experiments: s } = (0, m.Pjs)(),
                        { contentScrollRef: p, setContentScrollRef: S } = (0, m.gKY)(),
                        P = (0, m.W6M)(),
                        E = s.checkExperiment(m.zal.WebNextNewNestedNonMusicLandings, 'on');
                    if (((0, l.useEffect)(() => () => a.landing.reset(), [a.landing]), (0, m.Jzs)(a.landing.isResolved), E)) {
                        let { href: e } = (0, m.uvd)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(t) } });
                        (0, n.redirect)(e);
                    }
                    a.landing.isLoadedAndEmpty && (0, n.notFound)();
                    let b = (0, c._9)(a.landing),
                        _ = (0, l.useMemo)(
                            () =>
                                a.landing.isLoading || a.landing.isNeededToLoad
                                    ? (0, i.jsx)(f, {})
                                    : (0, i.jsx)(c.EA, { landing: a.landing, errorComponent: (0, i.jsx)(h.w, { className: v().error, withBackwardControl: !1 }) }),
                            [a.landing.loadingState, a.landing],
                        );
                    return (
                        a.landing.isNeededToLoad && (0, l.use)(a.landing.getChildrenSkeleton({ categoryId: t })),
                        (0, i.jsx)(m.nVz, {
                            pageId: m._Q$.KIDS_CATEGORY,
                            children: (0, i.jsxs)(g.hO, {
                                scrollElement: p,
                                outerTitle: a.landing.title,
                                children: [
                                    (0, i.jsx)(y.Y9, {
                                        variant: y.Vw.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: P.canBack,
                                        children: (0, i.jsx)('div', {
                                            className: v().header,
                                            children: (0, i.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', children: a.landing.title }),
                                        }),
                                    }),
                                    (0, i.jsxs)(d.N, {
                                        className: v().root,
                                        containerClassName: v().content,
                                        ref: S,
                                        ...(0, o.Am)(o.Xk.kids.KIDS_CATEGORY_PAGE),
                                        children: [
                                            (0, i.jsx)('div', { className: (0, r.$)(v().landing, { [v().landing_onlyWizard]: b }), children: _ }),
                                            (0, i.jsx)(y.A, { children: (0, i.jsx)(y.wi, { className: v().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    );
                });
        },
        26794: (e, t, a) => {
            'use strict';
            a.d(t, { GenresPage: () => p });
            var i = a(54486),
                r = a(28303),
                s = a(97396),
                n = a(61910),
                l = a(56231),
                o = a(97800),
                d = a(82644),
                u = a(33276),
                c = a(30004),
                h = a(83252),
                g = a(80585),
                m = a(3062),
                y = a.n(m);
            let p = (0, r.PA)((e) => {
                let { navigationId: t } = e,
                    { genres: a } = (0, h.Pjs)(),
                    { contentScrollRef: r, setContentScrollRef: m } = (0, h.gKY)(),
                    p = (0, h.W6M)();
                return ((0, n.useEffect)(
                    () => () => {
                        a.reset();
                    },
                    [a, t],
                ),
                a.isNotFound && (0, s.notFound)(),
                (0, h.Jzs)(a.isResolved),
                t && a.isNeededToLoad && (0, n.use)(a.getData(t)),
                a.isRejected)
                    ? (0, i.jsx)(d.w, {})
                    : (0, i.jsxs)(u.hO, {
                          scrollElement: r,
                          outerTitle: a.title,
                          children: [
                              (0, i.jsx)(g.Y9, {
                                  variant: g.Vw.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: p.canBack,
                                  children: (0, i.jsx)(o.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: a.title }),
                              }),
                              (0, i.jsx)(l.N, {
                                  className: y().root,
                                  containerClassName: y().content,
                                  ref: m,
                                  children: (0, i.jsx)('div', {
                                      className: y().list,
                                      children: a.items.map((e) => (0, i.jsx)(c.G4, { tag: e.tag, title: e.title, subGenres: e.subGenres }, e.tag)),
                                  }),
                              }),
                          ],
                      });
            });
        },
        27005: (e) => {
            e.exports = {
                root: 'KidsPage_root__yycsJ',
                content: 'KidsPage_content__08pPR',
                header: 'KidsPage_header__2Gk2l',
                landing: 'KidsPage_landing__3QZZj',
                landing_onlyWizard: 'KidsPage_landing_onlyWizard__xKyDo',
                footer: 'KidsPage_footer__p7SVD',
                error: 'KidsPage_error__qa7Qo',
            };
        },
        29910: (e, t, a) => {
            'use strict';
            a.d(t, { ServiceWorkerInitialiazer: () => s });
            var i = a(61910),
                r = a(83252);
            let s = () => {
                let e = (0, r.NFA)().get(r.Zft);
                (0, i.useEffect)(() => {
                    'serviceWorker' in navigator &&
                        navigator.serviceWorker.addEventListener('message', (t) => {
                            var a, i, r, s, n;
                            if ((null == (a = t.data) ? void 0 : a.type) === 'PUT_RSC_WORKER_ERROR_MESSAGE_TYPE') {
                                let a = new URL(null == (r = t.data) || null == (i = r.payload) ? void 0 : i.url);
                                e.error(
                                    '[RSC worker] Error getting url '
                                        .concat(a.origin, ' ')
                                        .concat(a.pathname)
                                        .concat(a.search, ', reason: ')
                                        .concat(null == (n = t.data) || null == (s = n.payload) ? void 0 : s.error),
                                );
                            }
                        });
                }, [e]);
            };
        },
        30004: (e, t, a) => {
            'use strict';
            a.d(t, { G4: () => l.Genre, Gc: () => n, kc: () => r });
            var i = a(93064);
            let r = (e) => ({ tag: e.tag, title: e.title, subGenres: (0, i.wg)((e.leaves || []).map((e) => ({ tag: e.tag, title: e.title }))) }),
                s = i.gK.model('GenreListItemSubGenreModel', { tag: i.gK.string, title: i.gK.string }),
                n = i.gK.model('GenreListItemModel', { tag: i.gK.string, title: i.gK.string, subGenres: i.gK.array(s) });
            var l = a(82667);
        },
        30827: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        31669: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { UrlInitializer: () => n });
            var i = a(28303),
                r = a(97396),
                s = a(83252);
            let n = (0, i.PA)((e) => {
                let { host: t } = e,
                    { location: a } = (0, s.Pjs)(),
                    i = (0, r.usePathname)(),
                    n = (0, r.useSearchParams)().toString(),
                    l = window.location.host,
                    o = t || l,
                    d = 'https://'.concat(o),
                    u = 'https://'
                        .concat(o)
                        .concat(i)
                        .concat(n ? '?' : '')
                        .concat(n);
                (d = o),
                    (u = ''
                        .concat(o)
                        .concat(i)
                        .concat(n ? '?' : '')
                        .concat(n)),
                    a.setPathname(i),
                    a.setSearchParams(n),
                    a.setHost(o),
                    a.setTld((0, s.fMM)(o) || s.lYh),
                    a.setOrigin(d),
                    a.setHref(u);
            });
        },
        33134: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(61910),
                r = a(8817),
                s = a(89461),
                n = a(83252);
            let l = (e) => {
                let { isEnabled: t, intervalMs: a, modal: l, playbackId: o, sonataState: d, isPaywallOpen: u } = e,
                    c = (0, i.useRef)(new Date()),
                    h = (0, n.eGp)(),
                    g = (0, r.c)(() => {
                        c.current = new Date();
                    }),
                    m = (0, r.c)(() => {
                        c.current.getTime() < Date.now() - (null != a ? a : 18e5) && !u && (l.open(), g());
                    });
                (0, i.useEffect)(() => {
                    if (!t) return;
                    let e =
                        null == h
                            ? void 0
                            : h.getState(o).playerState.status.onChange((e) => {
                                  e === s.MT.ENDED && m();
                              });
                    return () => {
                        null == e || e();
                    };
                }, [t, h, m, o]),
                    (0, i.useEffect)(() => {
                        t && l.isOpened && (null == h || h.pause(o));
                    }, [t, l.isOpened, h, d.status, o]),
                    (0, i.useEffect)(() => {
                        if (!t) return;
                        let e = new AbortController();
                        return (
                            window.addEventListener('mousemove', g, { signal: e.signal }),
                            window.addEventListener('keydown', g, { signal: e.signal }),
                            window.addEventListener('touchstart', g, { signal: e.signal }),
                            () => {
                                e.abort();
                            }
                        );
                    }, [t, g]);
            };
        },
        33208: (e, t, a) => {
            'use strict';
            a.d(t, { mK: () => c, mW: () => h });
            var i = a(61910),
                r = a(83252),
                s = a(73477),
                n = a(63930),
                l = a(93064),
                o = a(63585),
                d = a(21365),
                u = a(54460);
            let c = l.gK
                    .model('ContinueListen', {
                        track: l.gK.maybe(d.vj),
                        trackIndex: l.gK.maybe(l.gK.number),
                        contextType: l.gK.maybeNull(l.gK.enumeration(Object.values(o.K))),
                        contextId: l.gK.maybeNull(l.gK.union(l.gK.string, l.gK.number)),
                        albumDuration: l.gK.maybe(l.gK.number),
                        albumStreamProgress: l.gK.optional(u.B9, { endPositionSec: 0 }),
                        trackTempStreamProgress: l.gK.optional(u.B9, { endPositionSec: 0 }),
                    })
                    .actions((e) => ({
                        saveTrack: (t) => {
                            let { contextType: a, contextId: i, track: r, isDefaultTrack: s } = t;
                            (s && e.track) || ((e.contextType = a), (e.contextId = i), (e.track = (0, l.wg)((0, n.HO)(r))));
                        },
                        saveTrackIndex: (t) => {
                            e.trackIndex = t;
                        },
                        saveAlbumDuration: (t) => {
                            e.albumDuration = t;
                        },
                    })),
                h = (0, a(28303).PA)(() => {
                    ((e) => {
                        var t;
                        let { sonataState: a, continueListen: n } = (0, r.Pjs)();
                        (0, i.useEffect)(() => {
                            var t, i, r, l, o, d, u, c;
                            if (!e || (!(null == (t = a.entityMeta) ? void 0 : t.isPodcast) && !(null == (i = a.entityMeta) ? void 0 : i.isAudiobook))) return;
                            let h = e.state.queueState.index.value;
                            e.state.queueState.order.value.length > 0 && 'number' == typeof h && n.saveTrackIndex(h);
                            let g = null == (r = e.state.currentContext.value) ? void 0 : r.data.meta;
                            if (
                                g &&
                                a.contextType &&
                                a.contextId &&
                                (n.saveTrack({ contextType: a.contextType, contextId: a.contextId, track: a.entityMeta }), a.entityMeta.isAudiobook)
                            ) {
                                if ('volumes' in g && g.volumes) {
                                    let e,
                                        t = ((e, t) => {
                                            let a = !0;
                                            return (0, s.A)(e).reduce((e, i) => {
                                                if (!i.durationMs) return e;
                                                if (i.id === t) {
                                                    var r;
                                                    return (a = !1), e + ((null == (r = i.streamProgress) ? void 0 : r.endPositionSec) || 0);
                                                }
                                                return a ? e + i.durationMs / 1e3 : e;
                                            }, 0);
                                        })(g.volumes, a.entityMeta.id);
                                    'durationSec' in g && (e = g.durationSec),
                                        n.saveAlbumDuration(e),
                                        null == (d = n.trackTempStreamProgress) ||
                                            d.updateEndPositionSec((null == (o = n.track) || null == (l = o.streamProgress) ? void 0 : l.endPositionSec) || 0),
                                        null == (u = n.albumStreamProgress) || u.updateEndPositionSec(t);
                                }
                                'listeningFinished' in g && (null == (c = n.albumStreamProgress) || c.updateEverFinished(g.listeningFinished || !1));
                            }
                        }, [null == (t = a.entityMeta) ? void 0 : t.id, a.entityMeta, a.contextType, a.contextId, e, n]);
                    })((0, r.eGp)());
                });
        },
        33461: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { PrefetchDataProvider: () => o });
            var i = a(28303),
                r = a(61910),
                s = a(83252),
                n = a(79882);
            let l = async (e) => {
                    let { experimentsData: t, userAccountData: a, userId: i, store: r, withPins: s = !0 } = e,
                        { user: n, experiments: l, pinsCollection: o, disclaimersDictionary: d } = r;
                    if ((await n.getAbout(a), n.puid && i.setPassportUid(n.puid), await Promise.allSettled([l.getData(t), d.getDisclaimers()]), n.isAuthorized)) {
                        let e = [n.getSettings(), r.library.getData()];
                        s && e.push(o.getData()), await Promise.allSettled(e);
                    }
                },
                o = (0, i.PA)((e) => {
                    let { children: t, ...a } = e,
                        i = (0, s.Pjs)(),
                        o = (0, s.NFA)().get(s.WA$);
                    return (
                        (0, n.setClientSideLayout)(i.settings),
                        i.user.puid && o.setPassportUid(i.user.puid),
                        i.user.account.loadingState === s.GuX.IDLE && (0, r.use)(l({ store: i, userId: o, ...a })),
                        t
                    );
                });
        },
        33868: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => n });
            var i = a(83252),
                r = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: l, tld: o, host: d } = t,
                    u = await (0, i.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = (0, r.f)({ genreTitle: c, messageFormatter: u }),
                    m = s.env.ASSET_PREFIX || '',
                    y = ''.concat(d).concat(m, '/meta/og-image.png');
                return {
                    title: h,
                    description: g,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(c),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: y,
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: h, url: null != l ? l : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { tld: o, url: null != l ? l : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        35462: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        36138: (e, t, a) => {
            'use strict';
            a.d(t, { UlitochkaInitializer: () => o });
            var i = a(54486),
                r = a(28303),
                s = a(85097),
                n = a(8817),
                l = a(83252);
            let o = (0, r.PA)((e) => {
                let { nonce: t } = e,
                    { experiments: a } = (0, l.Pjs)(),
                    r = (0, n.c)(() => {
                        window.Ya.ulitochka.init({
                            theme: 'light',
                            platform: 'desktop',
                            customButtonStyle: { right: 5, top: 60, left: 'auto', border: 0, background: 'none' },
                            withReactFallbackLoading: !0,
                            disableAnalytics: !0,
                        });
                    });
                if (a.checkExperiment(l.zal.WebNextUlitochka, 'on'))
                    return (0, i.jsx)(s.default, {
                        src: 'https://yastatic.net/s3/ulitochka/latest/ulitochka.min.js',
                        nonce: null != t ? t : void 0,
                        onLoad: r,
                        async: !0,
                    });
            });
        },
        36298: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingShortcutsProvider: () => d });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(83252),
                l = a(65429);
            let o = null,
                d = (0, r.PA)((e) => {
                    let { children: t } = e,
                        {
                            promolanding: { state: a },
                        } = (0, n.Pjs)(),
                        r = (0, s.useMemo)(() => (o || (o = new n.G8o(new n.z$B())), o), []);
                    return (
                        (0, l.E)({ controller: r, sonataState: a, playbackId: n.V_r.PROMO_LANDING, groupId: n.Mo.PROMO_LANDING }),
                        (0, s.useEffect)(
                            () => (
                                null == r || r.listen(),
                                () => {
                                    null == r || r.stopListening();
                                }
                            ),
                            [r],
                        ),
                        (0, i.jsx)(n.Pic.Provider, { value: r, children: t })
                    );
                });
        },
        38139: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePage: () => _ });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(56231),
                u = a(97800),
                c = a(82644),
                h = a(80156),
                g = a(55616),
                m = a(33276),
                y = a(83909),
                p = a(83252),
                v = a(80585),
                S = a(7588),
                P = a(63695),
                E = a(52733),
                f = a(50153),
                b = a.n(f);
            let _ = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    { genre: s } = (0, p.Pjs)(),
                    { formatMessage: f } = (0, o.A)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    k = (0, p.W6M)();
                return (s.isNotFound && (0, n.notFound)(),
                (0, l.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                (0, p.Jzs)(s.isResolved),
                ((e) => {
                    (0, l.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => ({
                            id: '',
                            title: { title: '', fullTitle: e.fullTitle || '' },
                            liked: !1,
                            tracks: [],
                            artists: e.artists.map(P.NE),
                            composers: [],
                            albums: e.albums.map(h.fO),
                            playlists: e.playlists.map(E.Ji),
                        }))(e);
                        (0, S.M)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, p.jxB)(e);
                        });
                    }, [e]);
                })(s),
                t && s.isNeededToLoad && (0, l.use)(s.getData({ id: t, preloadedMeta: a })),
                s.isRejected && !s.isNotFound)
                    ? (0, i.jsx)(c.w, {})
                    : (0, i.jsx)(p.nVz, {
                          pageId: p._Q$.GENRE,
                          children: (0, i.jsxs)(m.hO, {
                              scrollElement: _,
                              outerTitle: s.fullTitle,
                              children: [
                                  (0, i.jsx)(v.Y9, {
                                      variant: v.Vw.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: k.canBack,
                                      children: (0, i.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                  }),
                                  (0, i.jsx)(d.N, {
                                      className: b().root,
                                      containerClassName: b().content,
                                      ref: I,
                                      children: (0, i.jsxs)('div', {
                                          className: b().carouselBlocks,
                                          children: [
                                              s.hasPlaylists &&
                                                  (0, i.jsx)(p.FoH, {
                                                      blockId: p.hf$.PLAYLISTS_CAROUSEL,
                                                      blockType: p.hf$.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: p.hf$.PLAYLISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, i.jsx)(y.EC, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(b().carouselBlockHeader, b().carouselBlock),
                                                          containerClassName: b().carouselBlock,
                                                          playlists: s.playlists,
                                                          title: f({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/playlists'),
                                                      }),
                                                  }),
                                              s.hasAlbums &&
                                                  (0, i.jsx)(p.FoH, {
                                                      blockId: p.hf$.ALBUMS_CAROUSEL,
                                                      blockType: p.hf$.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: p.hf$.ALBUMS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, i.jsx)(h.pZ, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(b().carouselBlockHeader, b().carouselBlock),
                                                          containerClassName: b().carouselBlock,
                                                          albums: s.albums,
                                                          title: f({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/albums'),
                                                      }),
                                                  }),
                                              s.hasArtists &&
                                                  (0, i.jsx)(p.FoH, {
                                                      blockId: p.hf$.ARTISTS_CAROUSEL,
                                                      blockType: p.hf$.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: p.hf$.ARTISTS_CAROUSEL,
                                                      objectsCount: s.albums.length,
                                                      children: (0, i.jsx)(v.OY, {
                                                          isShimmerVisible: s.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, r.$)(b().carouselBlockHeader, b().carouselBlock),
                                                          containerClassName: b().carouselBlock,
                                                          title: f({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(s.id, '/artists'),
                                                          children: s.artists.map((e) => (0, i.jsx)(g.ao, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
        },
        39507: (e, t, a) => {
            'use strict';
            a.d(t, { uA: () => o.PlaylistPersonalPage, Hj: () => l });
            var i = a(93064),
                r = a(14287),
                s = a(83252),
                n = a(26433);
            let l = i.gK
                .compose(
                    i.gK.model('PlaylistPersonalPage', {
                        errorStatusCode: i.gK.maybeNull(i.gK.number),
                        playlistUuid: i.gK.maybe(i.gK.string),
                        isReady: i.gK.optional(i.gK.boolean, !1),
                        dummyCoverUrl: i.gK.maybe(i.gK.string),
                        dummyDescription: i.gK.maybe(i.gK.string),
                        title: i.gK.maybe(i.gK.string),
                    }),
                    n.XT,
                )
                .views((e) => ({
                    getUrl(t) {
                        if (!e.playlistUuid) return '';
                        let { href: a } = (0, s.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                        return a;
                    },
                    get url() {
                        if (!e.playlistUuid) return '';
                        let { href: t } = (0, s.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                        return t;
                    },
                    get isNotFound() {
                        let t = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                        return e.loadingState === s.GuX.REJECT && t;
                    },
                }))
                .actions((e) => ({
                    getPlaylistPersonalDetails: (0, i.L3)(function* (t) {
                        if (!(0, i._n)(e)) return;
                        let { playlistsResource: a, modelActionsLogger: n } = (0, i._$)(e);
                        if (e.loadingState !== s.GuX.PENDING)
                            try {
                                var l, o;
                                e.loadingState = s.GuX.PENDING;
                                let i = yield a.getPlaylistPersonal({ playlistId: t });
                                if ((null == (l = i.error) ? void 0 : l.name) === 'no-such-playlist') {
                                    (e.errorStatusCode = r.X1.NOT_FOUND), (e.loadingState = s.GuX.REJECT);
                                    return;
                                }
                                (e.isReady = i.ready),
                                    (e.playlistUuid = i.data.playlistUuid),
                                    (e.dummyCoverUrl = null == (o = i.data.dummyCover) ? void 0 : o.uri),
                                    (e.dummyDescription = i.data.dummyDescription),
                                    (e.title = i.data.title),
                                    e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.RESOLVE);
                            } catch (t) {
                                n.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== s.GuX.IDLE && (e.loadingState = s.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = s.GuX.IDLE),
                            (e.errorStatusCode = null),
                            (e.isReady = !1),
                            (e.playlistUuid = void 0),
                            (e.dummyCoverUrl = void 0),
                            (e.dummyDescription = void 0),
                            (e.title = void 0);
                    },
                }));
            a(95657), a(54486), a(42421);
            var o = a(65381);
        },
        41076: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { TranslationsProvider: () => n });
            var i = a(54486),
                r = a(50722),
                s = a(83252);
            let n = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: n, defaultLanguage: l } = (0, s.h6b)(),
                    o = (0, s.Crf)();
                return (0, i.jsx)(r.A, { onError: o, defaultLocale: l, locale: n, messages: a, children: t });
            };
        },
        42670: (e) => {
            e.exports = {
                root: 'ConcertPage_root__pqTvU',
                averageColorBackground: 'ConcertPage_averageColorBackground__wj67a',
                header: 'ConcertPage_header__FxHk1',
                container: 'ConcertPage_container__ca9h4',
                footer: 'ConcertPage_footer____Dnb',
                skeleton: 'ConcertPage_skeleton__8aWkf',
                error: 'ConcertPage_error__gcEp_',
            };
        },
        42838: (e) => {
            e.exports = {
                root: 'ChartTracksPage_root__QMbqY',
                scrollContainer: 'ChartTracksPage_scrollContainer__Pxe8S',
                important: 'ChartTracksPage_important__Lddyf',
                content: 'ChartTracksPage_content__yyIAN',
                footer: 'ChartTracksPage_footer__6sNBk',
                shimmerItem: 'ChartTracksPage_shimmerItem__YwM0h',
            };
        },
        43751: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SavedOfferInitializer: () => n });
            var i = a(28303),
                r = a(61910),
                s = a(83252);
            let n = (0, i.PA)(() => {
                let {
                        paymentWidgetModal: {
                            modal: e,
                            setTarget: t,
                            setTariffOfferName: a,
                            setServiceSessionId: i,
                            setIsSilent: n,
                            setOffersBatchId: l,
                            setOffersPositionIds: o,
                        },
                        user: d,
                    } = (0, s.Pjs)(),
                    { hasFreeUserAccess: u } = (0, s.XCI)(),
                    c = (0, s.NFA)(),
                    h = (0, r.useMemo)(() => c.get(s.vHc), [c]);
                (0, r.useLayoutEffect)(() => {
                    if (!d.isAuthorized || !u || null === h) return;
                    let r = h.get(s.cYZ.Offer);
                    if (null === r) return;
                    let { target: c, serviceSessionId: g, tariffOfferName: m, isSilent: y, offersBatchId: p, offersPositionIds: v } = r;
                    h.remove(s.cYZ.Offer), t(c), n(y), i(g), l(p), o(v), m && a(m), e.open();
                }, [u, h, e, a, t, i, n, l, o, d.isAuthorized]);
            });
        },
        44193: (e) => {
            e.exports = {
                root: 'KidsCategoryPage_root__bk7_R',
                content: 'KidsCategoryPage_content__LN0NB',
                header: 'KidsCategoryPage_header__Agys3',
                landing: 'KidsCategoryPage_landing__aSDYw',
                landing_onlyWizard: 'KidsCategoryPage_landing_onlyWizard__3EC9N',
                footer: 'KidsCategoryPage_footer__BQhqi',
                error: 'KidsCategoryPage_error__tSXF7',
            };
        },
        45126: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(83252),
                r = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: l, tld: o, host: d } = t,
                    u = await (0, i.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = 'artists' in e ? e.artists : void 0,
                    m = (0, r.f)({ genreTitle: c, artists: g, messageFormatter: u }),
                    y = s.env.ASSET_PREFIX || '',
                    p = ''.concat(d).concat(y, '/meta/og-image.png');
                return {
                    title: h,
                    description: m,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(c),
                        ogDescription: m,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: p,
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: h, url: null != l ? l : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { tld: o, url: null != l ? l : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        46562: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { HistoryProvider: () => d });
            var i = a(54486),
                r = a(97396),
                s = a(61910),
                n = a(8817),
                l = a(83252);
            let o = null,
                d = (e) => {
                    let { children: t } = e,
                        a = (0, l.NFA)(),
                        d = (0, r.useRouter)(),
                        u = (0, r.usePathname)(),
                        c = (0, r.useSearchParams)(),
                        [h, g] = (0, s.useState)(!1),
                        [m, y] = (0, s.useState)(!1),
                        [p, v] = (0, s.useState)(null),
                        S = (0, s.useRef)(0),
                        P = (0, s.useRef)(null),
                        E = (0, s.useMemo)(() => {
                            if (o) return o;
                            let e = a.get(l.vHc);
                            return (o = new l.fiH(e));
                        }, [a]),
                        f = (0, n.c)(() => {
                            E && (g(E.canBack), y(E.canForward), v(E.state));
                        }),
                        b = (0, n.c)((e) => {
                            E && (E.replaceState(e), d.replace(e.href));
                        }),
                        _ = (0, n.c)((e) => {
                            E && (E.pushState(e), f());
                        }),
                        I = (0, n.c)(() => {
                            E && (E.back(), f(), d.back());
                        }),
                        k = (0, n.c)(() => {
                            E && (E.forward(), f(), d.forward());
                        });
                    (0, s.useEffect)(() => {
                        var e;
                        let t = [u, c.toString()].join('?');
                        (!(null == E ? void 0 : E.state) || (null == E || null == (e = E.state) ? void 0 : e.isLocationNotEqual(t))) && _({ href: t });
                    }, [E, u, c, _]);
                    {
                        let e = (0, l.Cvn)(u, c);
                        e !== P.current && ((P.current = e), (S.current = S.current + 1));
                    }
                    return (0, i.jsx)(l.Q0U.Provider, {
                        value: { pushState: _, replaceState: b, canForward: m, canBack: h, back: I, forward: k, state: p, length: S.current },
                        children: t,
                    });
                };
        },
        48249: (e, t, a) => {
            'use strict';
            a.d(t, { km: () => y, h4: () => W, cw: () => u, k_: () => q });
            var i = a(83252),
                r = a(93064),
                s = a(6664),
                n = a(77217),
                l = a(26433);
            let o = (e, t, a) => (-1 === a ? e.slice(t) : e.slice(t, t + a)),
                d = r.gK
                    .compose(
                        r.gK.model('ConcertsPageConfig', {
                            topOffset: r.gK.optional(r.gK.number, 0),
                            topLimit: r.gK.optional(r.gK.number, 3),
                            feedOffset: r.gK.optional(r.gK.number, 3),
                            feedLimit: r.gK.optional(r.gK.number, -1),
                        }),
                        l.XT,
                    )
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = i.GuX.PENDING;
                                    let {
                                        config: { feed: a, top: r },
                                    } = yield t.getTabConfig({});
                                    (e.feedLimit = a.limit),
                                        (e.feedOffset = a.offset),
                                        (e.topLimit = r.limit),
                                        (e.topOffset = r.offset),
                                        (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = i.GuX.IDLE), (e.feedLimit = -1), (e.feedOffset = 3), (e.topLimit = 3), (e.topOffset = 0);
                        },
                    })),
                u = r.gK
                    .compose(
                        r.gK.model('ConcertsPage', {
                            config: d,
                            landing: s.Ju,
                            topConcerts: r.gK.maybeNull(r.gK.array(n.aR)),
                            feedConcerts: r.gK.maybeNull(r.gK.array(n.aR)),
                        }),
                        l.XT,
                        l.pl,
                    )
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, r.L3)(function* () {
                            let { concertsResource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (!e.config.isLoading && !e.isLoading)
                                try {
                                    (e.loadingState = i.GuX.PENDING), yield e.config.getData();
                                    let { items: a } = yield t.getFeed({}),
                                        { feedConcerts: s, topConcerts: l } = ((e, t) => {
                                            let { topLimit: a, topOffset: i, feedLimit: r, feedOffset: s } = e;
                                            return { topConcerts: o(t, i, a), feedConcerts: o(t, s, r) };
                                        })(
                                            e.config,
                                            a.map((e) => (0, n.HN)(e)),
                                        );
                                    (e.feedConcerts = (0, r.wg)(s)), (e.topConcerts = (0, r.wg)(l)), (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.config.reset(), e.landing.reset(), (e.loadingState = i.GuX.IDLE), e.destroyItems([e.topConcerts, e.feedConcerts]);
                        },
                    }));
            var c = a(54486),
                h = a(28303),
                g = a(61910),
                m = a(42421);
            let y = (0, h.PA)(() => {
                let { concerts: e } = (0, i.Pjs)();
                return (
                    (0, g.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, c.jsx)(m.M, {})
                );
            });
            var p = a(97396),
                v = a(43426),
                S = a(47713),
                P = a(9348),
                E = a(43350),
                f = a(31500),
                b = a(6024),
                _ = a(56231),
                I = a(97800),
                k = a(8817),
                C = a(67648),
                T = a(24188),
                A = a(80585),
                D = a(63118),
                L = a.n(D);
            let x = (0, h.PA)(() => {
                let e = (0, g.useId)(),
                    { concerts: t } = (0, i.Pjs)(),
                    { formatMessage: a } = (0, v.A)(),
                    [r, s] = (0, C.d)(),
                    l = (0, i.fBs)(),
                    o = (0, g.useRef)(!1),
                    d = (0, k.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: u,
                        rowResizeObserver: h,
                        columnCount: m,
                        indices: y,
                    } = (0, T.LW)({
                        count: d(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: r,
                    }),
                    p = { '--feed-concerts-height': ''.concat(u.getTotalSize(), 'px'), '--feed-concerts-column-count': m },
                    S = (0, g.useCallback)(
                        (e) => {
                            var a, r, s;
                            let l = null == (a = t.feedConcerts) ? void 0 : a[e];
                            return !l || t.isShimmerVisible
                                ? (0, c.jsx)(n.LY, { isActive: t.isShimmerActive })
                                : (0, c.jsx)(i.Bki, {
                                      objectType: E.ky.Concert,
                                      objectId: l.id,
                                      objectPosX: (e % m) + 1,
                                      objectPosY: Math.floor(e / m) + 1,
                                      objectsCount: null != (s = null == (r = t.feedConcerts) ? void 0 : r.length) ? s : 0,
                                      children: (0, c.jsx)(n.Qb, { concert: l }),
                                  });
                        },
                        [m, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (
                    (0, g.useEffect)(() => {
                        t.isResolved && !o.current && (l(), (o.current = !0));
                    }, [t.isResolved, l]),
                    (0, c.jsxs)('div', {
                        className: L().root,
                        ...(0, f.Am)(f.e8.concerts.CONCERTS_FEED),
                        children: [
                            (0, c.jsx)(A.Tw, { className: L().header, labeledForId: e, title: a({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                            (0, c.jsx)('div', {
                                'aria-labelledby': e,
                                ref: s,
                                style: p,
                                className: L().container,
                                children: u.getVirtualItems().map((e) =>
                                    (0, c.jsx)(
                                        T.Ux,
                                        {
                                            className: L().row,
                                            columnClassName: L().column,
                                            virtualItem: e,
                                            resizeObserver: h,
                                            indices: y,
                                            renderItemByIndex: S,
                                            scrollMargin: u.options.scrollMargin,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    })
                );
            });
            var N = a(50420),
                R = a(81203),
                w = a(35462),
                M = a.n(w);
            let O = (e) => {
                    let { children: t } = e,
                        a = (0, g.useId)(),
                        i = (0, g.useRef)(null),
                        { formatMessage: r } = (0, v.A)();
                    return (0, c.jsxs)('div', {
                        className: M().root,
                        ...(0, f.Am)(f.e8.concerts.CONCERTS_TOP),
                        children: [
                            (0, c.jsx)(A.Tw, {
                                className: M().header,
                                labeledForId: a,
                                title: r({ id: 'concerts.top-for-you' }),
                                controls: (0, c.jsx)(A.X9, { className: M().controls, carouselRef: i }),
                                headingVariant: 'h2',
                            }),
                            (0, c.jsx)(R.Carousel, {
                                className: M().carousel,
                                ref: i,
                                itemClassName: (0, N.$)(M().item, M().important),
                                'aria-labelledby': a,
                                children: t,
                            }),
                        ],
                    });
                },
                F = (e) => Array.from({ length: 10 }, (t, a) => (0, c.jsx)(n.LY, { isActive: e, withPriceButton: !0 }, a)),
                G = (0, h.PA)(() => {
                    let { concerts: e } = (0, i.Pjs)(),
                        t = (0, i.fBs)(),
                        a = (0, g.useRef)(!1),
                        r = (0, g.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((t, a) => {
                                      var r, s;
                                      return (0, c.jsx)(
                                          i.Bki,
                                          {
                                              objectType: E.ky.Concert,
                                              objectId: t.id,
                                              objectPosX: a + 1,
                                              objectPosY: 1,
                                              objectsCount: null != (s = null == (r = e.topConcerts) ? void 0 : r.length) ? s : 0,
                                              children: (0, c.jsx)(n.Qb, { withMask: !1, withPriceButton: !0, concert: t }),
                                          },
                                          t.getKey(a),
                                      );
                                  })
                                : F(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts]);
                    return (
                        (0, g.useEffect)(() => {
                            e.isResolved && !a.current && (t(), (a.current = !0));
                        }, [e.isResolved, t]),
                        e.isNeededToLoad && (0, g.use)(e.getData()),
                        (0, c.jsx)(O, { children: r })
                    );
                }),
                K = () => (0, c.jsx)(g.Suspense, { fallback: (0, c.jsx)(O, { children: F(!0) }), children: (0, c.jsx)(G, {}) });
            var j = a(82644),
                X = a(33276),
                U = a(62395),
                B = a(77343),
                V = a.n(B);
            let W = (0, h.PA)(() => {
                    var e, t, a, r, n, l, o, d, u;
                    let { formatMessage: h } = (0, v.A)(),
                        { setContentScrollRef: m, contentScrollRef: y } = (0, i.gKY)(),
                        { concerts: C, experiments: T, user: D } = (0, i.Pjs)(),
                        L = (() => {
                            let e = (0, U.st)(),
                                t = (0, i.UlF)(),
                                { hash: a } = (0, U.gf)();
                            return (0, k.c)((i, r) => {
                                if (!e) return;
                                let s = { hash: a, pageId: E.QT.ConcertsLandingScreen, pageStyle: E.QL.Fullscreen, pagePlacement: E.c4.Fullscreen, viewUuid: r },
                                    n = (0, E.Fx)({ params: s, logger: t, context: 'useSendEventOnConcertsOpenedOrClosed' });
                                n && (i ? (0, E.Fn)(e.evgenInstance, n) : (0, E.PO)(e.evgenInstance, n));
                            });
                        })(),
                        N = (0, g.useRef)(String((0, P.A)())),
                        R = null != (l = null == (e = C.landing.meta) ? void 0 : e.selectedTabIndex) ? l : 0,
                        w = null != (o = null == (a = C.landing.tabs.data) || null == (t = a[R]) ? void 0 : t.blocks.length) ? o : 0;
                    return ((!T.checkExperiment(i.zal.WebNextConcertsTab, 'on') || T.checkExperiment(i.zal.disableAllConcerts, 'on')) && (0, p.notFound)(),
                    D.hasPlus || (0, p.redirect)(i.Zyd.main.href),
                    (0, g.useEffect)(
                        () => () => {
                            C.reset();
                        },
                        [C],
                    ),
                    (0, g.useEffect)(() => {
                        let e = N.current;
                        return (
                            L(!0, e),
                            () => {
                                L(!1, e);
                            }
                        );
                    }, [L]),
                    (0, i.Jzs)(C.landing.isResolved),
                    (() => {
                        let e = (0, g.useRef)(1),
                            { concerts: t } = (0, i.Pjs)(),
                            { notify: a } = (0, i.lkh)(),
                            { formatMessage: r } = (0, v.A)();
                        (0, g.useEffect)(() => {
                            e && (t.isRejected && a((0, c.jsx)(A.hT, { error: r({ id: 'concerts.feed-error' }) }), { containerId: i.uQT.ERROR }), e.current--);
                        }, [t.isRejected, r, a]);
                    })(),
                    C.landing.isNeededToLoad && (0, g.use)(C.landing.getSkeleton({ id: b.p.CONCERTS, showWizard: D.settings.showWizard }, { preloadBlocksCount: 2 })),
                    C.landing.isRejected)
                        ? (0, c.jsx)(j.w, {})
                        : (0, c.jsx)(i.nVz, {
                              pageId: i._Q$.CONCERTS,
                              children: (0, c.jsxs)(X.hO, {
                                  scrollElement: y,
                                  outerTitle: h({ id: 'entity-names.concerts' }),
                                  children: [
                                      (0, c.jsx)(A.Y9, {
                                          variant: A.Vw.TEXT,
                                          showControls: !1,
                                          children: (0, c.jsx)(I.Heading, {
                                              variant: 'h1',
                                              weight: 'bold',
                                              size: 'xl',
                                              children: (0, c.jsx)(S.A, { id: 'entity-names.concerts' }),
                                          }),
                                      }),
                                      (0, c.jsxs)(_.N, {
                                          ref: m,
                                          className: V().root,
                                          containerClassName: V().container,
                                          ...(0, f.Am)(f.Xk.concerts.CONCERTS_PAGE),
                                          children: [
                                              (0, c.jsx)(i.jPc, {
                                                  children: (0, c.jsx)(i.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, c.jsx)(i.FoH, {
                                                          blockId: E.LA.ConcertTabHeader,
                                                          blockType: E.LA.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (d = null == (r = C.topConcerts) ? void 0 : r.length) ? d : 0,
                                                          children: (0, c.jsx)(K, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, c.jsx)(i.MZP, {
                                                  offsetBlockPosY: 1,
                                                  children: (0, c.jsx)(s.EA, { landing: C.landing, errorComponent: (0, c.jsx)(j.w, { withBackwardControl: !1 }) }),
                                              }),
                                              (0, c.jsx)(i.jPc, {
                                                  children: (0, c.jsx)(i.hjC, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, c.jsx)(i.FoH, {
                                                          blockId: E.LA.ConcertTabFeed,
                                                          blockType: E.LA.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: w + 2,
                                                          objectsCount: null != (u = null == (n = C.feedConcerts) ? void 0 : n.length) ? u : 0,
                                                          children: (0, c.jsx)(x, {}),
                                                      }),
                                                  }),
                                              }),
                                              (0, c.jsx)(A.A, { children: (0, c.jsx)(A.wi, { className: V().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          });
                }),
                q = () => (0, c.jsx)(A.JR, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } });
        },
        48625: (e, t, a) => {
            'use strict';
            a.d(t, { EX: () => g.PostPage, VQ: () => h });
            var i = a(93064),
                r = a(14287),
                s = a(23615),
                n = a(80156),
                l = a(83909),
                o = a(63695),
                d = a(52733),
                u = a(83252),
                c = a(26433);
            let h = i.gK
                .compose(
                    i.gK.model('PostPage', {
                        errorStatusCode: i.gK.maybe(i.gK.number),
                        title: i.gK.maybeNull(i.gK.string),
                        promotionType: i.gK.maybeNull(i.gK.enumeration(Object.values(s.Q))),
                        artists: i.gK.maybe(i.gK.array(o.PK)),
                        albums: i.gK.maybe(i.gK.array(n.JC)),
                        playlists: i.gK.maybe(i.gK.array(l.IP)),
                    }),
                    c.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                            return e.isRejected && t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t) {
                        let { promoId: a } = t,
                            { feedResource: s, modelActionsLogger: l } = (0, i._$)(e);
                        if (e.loadingState !== u.GuX.PENDING)
                            try {
                                e.loadingState = u.GuX.PENDING;
                                let t = yield s.getPromotionsById({ promoId: a });
                                (e.title = t.title),
                                    (e.promotionType = t.promotionType),
                                    t.artists && t.artists.length > 0 && (e.artists = (0, i.wg)(t.artists.map(o.dM))),
                                    t.albums && t.albums.length > 0 && (e.albums = (0, i.wg)(t.albums.map(n.pp))),
                                    t.playlists &&
                                        t.playlists.length > 0 &&
                                        (e.playlists = (0, i.wg)(
                                            t.playlists.map((e) => {
                                                let { playlist: t } = e;
                                                return (0, d.jX)(t);
                                            }),
                                        )),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = u.GuX.IDLE), (e.title = null), (e.artists = (0, i.wg)([])), (e.albums = (0, i.wg)([]));
                    },
                }));
            a(77026);
            var g = a(93685);
        },
        49811: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = 30;
        },
        49841: (e, t, a) => {
            'use strict';
            a.d(t, { KidsEditorialPlaylistsPage: () => E });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(31500),
                u = a(8817),
                c = a(27510),
                h = a(97800),
                g = a(82644),
                m = a(33276),
                y = a(83909),
                p = a(83252),
                v = a(80585),
                S = a(24993),
                P = a.n(S);
            let E = (0, s.PA)((e) => {
                var t, a, s;
                let { id: S } = e,
                    {
                        kids: { kidsEditorialPlaylistSubpage: E },
                        settings: { isMobile: f },
                    } = (0, p.Pjs)(),
                    b = (0, p.W6M)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    { formatMessage: k } = (0, o.A)(),
                    C = (0, u.c)((e) => {
                        E.getPlaylists({ page: e, pageSize: 20 });
                    });
                E.isNotFound && (0, n.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            E.reset();
                        },
                        [E],
                    );
                let T = (0, c.L)(() => ({ Footer: () => (0, i.jsx)(v.A, { children: (0, i.jsx)(v.wi, { className: P().footer }) }) }));
                if (
                    ((0, p.Jzs)(E.isResolved),
                    (0, p.XcE)(E.pagesLoader, C),
                    E.isNeededToLoad && (0, l.use)(E.getData({ id: S, page: 0, pageSize: 20 })),
                    E.isSomethingWrong)
                )
                    return (0, i.jsx)(g.w, {});
                let A = E.isLoading ? 20 : null != (a = null == (t = E.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                return (0, i.jsx)(p.nVz, {
                    pageId: p._Q$.KIDS_EDITORIAL_PLAYLISTS,
                    children: (0, i.jsx)(m.hO, {
                        scrollElement: _,
                        outerTitle: E.title,
                        children: (0, i.jsxs)('div', {
                            className: P().root,
                            ...(0, d.Am)(d.Xk.kids.KIDS_EDITORIAL_PLAYLISTS),
                            children: [
                                (0, i.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: b.canBack,
                                    children: (0, i.jsx)(h.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: E.title }),
                                }),
                                (0, i.jsx)(v.$$, {
                                    context: { listAriaLabel: k({ id: 'mixes.playlists-list' }, { genreName: E.title || '' }) },
                                    className: (0, r.$)(P().scrollContainer, P().important),
                                    customComponents: T,
                                    itemContentCallback: (e) => {
                                        let t = E.playlists[e],
                                            a = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.playlist' }) });
                                        return t ? (0, i.jsx)(y.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, i.jsx)(v.Vt, { isActive: !0, 'aria-label': a });
                                    },
                                    totalCount: A,
                                    onGetDataByPage: C,
                                    pageSize: 20,
                                    totalRequests: null != (s = E.pagesLoader.requestsCount) ? s : 0,
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    handleRef: I,
                                    isMobileLayout: f,
                                    useWindowScroll: f,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        49943: (e, t, a) => {
            'use strict';
            a.d(t, { GenreAlbumsPage: () => E });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(31500),
                u = a(97800),
                c = a(82644),
                h = a(80156),
                g = a(33276),
                m = a(83252),
                y = a(80585),
                p = a(49811),
                v = a(33868),
                S = a(94189),
                P = a.n(S);
            let E = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { albumsSubpage: s },
                        settings: { isMobile: S },
                    } = (0, m.Pjs)(),
                    { formatMessage: E } = (0, o.A)(),
                    { contentScrollRef: f, setContentScrollRef: b } = (0, m.gKY)(),
                    _ = (0, m.W6M)(),
                    I = (0, l.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: p.c });
                        },
                        [s, t],
                    );
                (0, m.XcE)(s.pagesLoader, I),
                    (0, l.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, m.Jzs)(s.isResolved),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, i;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    albums: e.items.map(h.fO),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (i = e.pagesLoader.pager) ? void 0 : i.total) || 0,
                                    },
                                };
                            })(e);
                            (0, v.g)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, m.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let k = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(y.A, { children: (0, i.jsx)(y.wi, { className: P().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, l.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: p.c })), s.isSomethingWrong))
                    return (0, i.jsx)(c.w, {});
                let C = s.isShimmerVisible ? 20 : s.items.length;
                return (0, i.jsx)(m.nVz, {
                    pageId: m._Q$.GENRE_ALBUMS,
                    children: (0, i.jsx)(g.hO, {
                        scrollElement: f,
                        outerTitle: s.fullTitle,
                        children: (0, i.jsxs)('div', {
                            className: P().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_ALBUMS_PAGE),
                            children: [
                                (0, i.jsx)(y.Y9, {
                                    variant: y.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: _.canBack,
                                    children: (0, i.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, i.jsx)(y.$$, {
                                    className: (0, r.$)(P().scrollContainer, P().important),
                                    customComponents: k,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = E({ id: 'loading-messages.entity-is-loading' }, { entityName: E({ id: 'entity-names.album' }) });
                                        return t ? (0, i.jsx)(h.aX, { album: t, contentLinesCount: 4 }, t.id) : (0, i.jsx)(y.Vt, { 'aria-label': a, linesCount: 4 });
                                    },
                                    totalCount: C,
                                    onGetDataByPage: I,
                                    pageSize: p.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    handleRef: b,
                                    context: { listAriaLabel: E({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: S,
                                    useWindowScroll: S,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        50153: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        50389: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(92761),
                r = a(60463),
                s = a(30630);
            function n(e) {
                let { productQuality: t, entities: a, entity: n } = e,
                    l = !1;
                if ((a && (l = a.some((e) => (0, r.l)(e))), n && (l = (0, r.l)(n)), l)) return i.e.SMART_PREVIEW;
                switch (t) {
                    case s.e.HIGH_QUALITY:
                        return i.e.LOSSLESS;
                    case s.e.BALANCED:
                        return i.e.NQ;
                    case s.e.EFFICIENT:
                        return i.e.LQ;
                    case s.e.PREVIEW:
                        return i.e.PREVIEW;
                    default:
                        return i.e.NQ;
                }
            }
        },
        50757: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        51760: (e, t, a) => {
            'use strict';
            a.d(t, { ChartTracksPage: () => P });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(61910),
                l = a(43426),
                o = a(31500),
                d = a(63585),
                u = a(22674),
                c = a(97800),
                h = a(82644),
                g = a(33276),
                m = a(21365),
                y = a(83252),
                p = a(80585),
                v = a(42838),
                S = a.n(v);
            let P = (0, s.PA)(() => {
                let { formatMessage: e } = (0, l.A)(),
                    {
                        chart: { tracksSubPage: t },
                        settings: { isMobile: a },
                    } = (0, y.Pjs)(),
                    s = (0, y.W6M)(),
                    { contentScrollRef: v, setContentScrollRef: P } = (0, y.gKY)(),
                    E = (0, y.wZZ)(),
                    { from: f } = (0, y.fyy)({ pageId: y._Q$.CHART });
                (0, y.Jzs)(t.isResolved);
                let b = (0, n.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            return a && !t.isLoading && t.playlistMeta
                                ? (0, i.jsx)(m.QB, {
                                      track: a,
                                      playContextParams: E(e, {
                                          contextData: { type: d.K.Playlist, meta: { id: ''.concat(t.playlistMeta.uid, ':').concat(t.playlistMeta.kind) }, from: f },
                                          queueParams: { index: e, entityId: a.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, i.jsx)(p.DS, { isActive: !0, className: S().shimmerItem, variant: y.Xjt.PLAYLIST });
                        },
                        [f, E, t.isLoading, t.items, t.playlistMeta],
                    ),
                    _ = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: S().footer }) }) }), []),
                    I = (0, n.useMemo)(
                        () =>
                            t.title
                                ? (0, i.jsx)(c.Heading, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, i.jsx)(u.Shimmer, { className: S().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getTracks()), t.isRejected)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(y.nVz, {
                          pageId: y._Q$.CHART,
                          children: (0, i.jsx)(g.hO, {
                              scrollElement: v,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, i.jsxs)('div', {
                                  className: S().root,
                                  ...(0, o.Am)(o.Xk.chart.CHART_PAGE),
                                  children: [
                                      (0, i.jsx)(p.Y9, { variant: p.Vw.TEXT, withForwardControl: !1, withBackwardControl: s.canBack, children: I }),
                                      (0, i.jsx)(p.$$, {
                                          className: (0, r.$)(S().scrollContainer, S().important),
                                          listClassName: S().content,
                                          customComponents: _,
                                          totalCount: t.items.length,
                                          itemContentCallback: b,
                                          debounceDurationInMs: 300,
                                          handleRef: P,
                                          context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                          isMobileLayout: a,
                                          useWindowScroll: a,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        51843: (e, t, a) => {
            'use strict';
            a.d(t, { GenreNotFoundPage: () => n });
            var i = a(54486),
                r = a(28303),
                s = a(42421);
            let n = (0, r.PA)(() => (0, i.jsx)(s.M, {}));
        },
        51892: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY', top: 'PostShimmer_top__ySpmZ', bottom: 'PostShimmer_bottom__ajW_P' };
        },
        53714: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { StoreProvider: () => tD });
            var i,
                r,
                s = a(54486),
                n = a(28303),
                l = a(93064),
                o = a(97396),
                d = a(61910);
            a(15209);
            var u = a(83252),
                c = a(30630),
                h = a(3269),
                g = a(35620),
                m = a(89461),
                y = a(41663);
            a(49756);
            var p = a(6664),
                v = a(80156),
                S = a(40502),
                P = a(26433);
            let E = l.gK.compose(l.gK.model('UpcomingAlbums', { items: l.gK.maybeNull(l.gK.array(v.VH)) }), P.pl, P.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = u.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                f = l.gK
                    .compose(l.gK.model('CollectionAlbumsPage', { sort: l.gK.maybeNull(S.wY), pagesLoader: (0, P.Ij)(v.JC), upcomingAlbums: E }), P.pl)
                    .views((e) => {
                        let t = {
                            get isAlbumsLoading() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isLoading() {
                                return t.isAlbumsLoading || e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsLoading() {
                                return e.upcomingAlbums.isNeededToLoad || e.upcomingAlbums.isLoading;
                            },
                            get isUpcomingAlbumsEmpty() {
                                return !t.isUpcomingAlbumsLoading && (!e.upcomingAlbums.items || 0 === e.upcomingAlbums.items.length);
                            },
                            get isAlbumsEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: s, sortOrder: n, metaType: o } = t,
                                { usersResource: d, modelActionsLogger: c } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, S.WG)(s) && (0, S.hl)(n) && (e.sort = (0, l.wg)({ sortBy: s, sortOrder: n }));
                                try {
                                    var h, g;
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield d.getLikedAlbums({ userId: a, page: i, pageSize: r, sortBy: s, sortOrder: n, metaType: o }),
                                        l =
                                            null !=
                                            (g =
                                                null == (h = t.albums)
                                                    ? void 0
                                                    : h.map((e) => {
                                                          let { album: t } = e;
                                                          return (0, v.pp)(t);
                                                      }))
                                                ? g
                                                : [];
                                    e.pagesLoader.setItems(l, { page: i, pager: { page: i, perPage: r, total: t.pager.total } });
                                } catch (t) {
                                    c.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        getPresaves: (0, l.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: r } = (0, l._$)(e);
                            if (!e.upcomingAlbums.isLoading)
                                try {
                                    var s;
                                    e.upcomingAlbums.loadingState = u.GuX.PENDING;
                                    let t = yield i.getPresaves({ userId: a, includeReleased: !1, includeUpcoming: !0 });
                                    (e.upcomingAlbums.items = (0, l.wg)(null == (s = t.upcomingAlbums) ? void 0 : s.map(v.lO))),
                                        e.upcomingAlbumsLoadingState !== u.GuX.IDLE && (e.upcomingAlbums.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), e.upcomingAlbums.isNeededToLoad || (e.upcomingAlbums.loadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), e.upcomingAlbums.reset(), e.destroyItems([e.sort]);
                        },
                    }));
            var b = a(55616),
                _ = a(63695);
            let I = l.gK.compose(l.gK.model('TopArtists', { items: l.gK.array(b.GV) }), P.pl, P.XT).actions((e) => ({
                    reset() {
                        (e.loadingState = u.GuX.IDLE), e.destroyItems([e.items]);
                    },
                })),
                k = l.gK
                    .compose(l.gK.model('CollectionArtistsPage', { sort: l.gK.maybeNull(S.wY), pagesLoader: (0, P.Ij)(_.PK), topArtists: I }), P.pl)
                    .views((e) => ({
                        get isLoadingTopArtists() {
                            return e.topArtists.isNeededToLoad || e.topArtists.isLoading;
                        },
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getDataTopArtists: (0, l.L3)(function* () {
                            let { personalResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            try {
                                var i, r;
                                e.topArtists.loadingState = u.GuX.PENDING;
                                let a = yield t.getTopArtists();
                                (e.topArtists.items = (0, l.wg)(null != (r = null == (i = a.artists) ? void 0 : i.map((e) => (0, b.MX)(e))) ? r : [])),
                                    (e.topArtists.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), (e.topArtists.loadingState = u.GuX.REJECT);
                            }
                        }),
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: s, sortOrder: n } = t,
                                { usersResource: o, modelActionsLogger: d } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i)) {
                                (e.sort = null), (0, S.WG)(s) && (0, S.hl)(n) && (e.sort = (0, l.wg)({ sortBy: s, sortOrder: n }));
                                try {
                                    var c, h;
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield o.getLikedArtists({ userId: a, page: i, pageSize: r, sortBy: s, sortOrder: n }),
                                        l = null != (h = null == (c = t.artists) ? void 0 : c.map(_.dM)) ? h : [];
                                    e.pagesLoader.setItems(l, { page: i, pager: { page: i, perPage: r, total: t.pager.total } });
                                } catch (t) {
                                    d.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                            }
                        }),
                        reset() {
                            e.topArtists.reset(), e.pagesLoader.reset(), (e.sort = null);
                        },
                    }));
            var C = a(65779);
            let T = l.gK
                    .compose(l.gK.model('CollectionClipsPageWillLike', { clips: l.gK.maybeNull(l.gK.array(C.kv)) }), P.XT, P.pl)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (!e.clips || (null == (t = e.clips) ? void 0 : t.length) === 0);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { clipsResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            try {
                                e.loadingState = u.GuX.PENDING;
                                let a = yield t.getClipsWillLike({ page: 0, pageSize: 50 });
                                a.clips && (e.clips = (0, l.wg)(a.clips.map(C.i$))), e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t), e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                            }
                        }),
                        reset() {
                            (e.loadingState = u.GuX.IDLE), e.destroyItems([e.clips]);
                        },
                    })),
                A = l.gK
                    .compose(
                        l.gK.model('CollectionClipsPage', {
                            items: l.gK.array(l.gK.maybeNull(C.kv)),
                            pager: l.gK.maybeNull(P.jd),
                            alreadyRequestedPages: l.gK.map(l.gK.number),
                            pendingPages: l.gK.map(l.gK.number),
                            clipsWillLike: T,
                        }),
                        P.XT,
                        P.pl,
                    )
                    .views((e) => ({
                        get isEmpty() {
                            return e.isResolved && (!e.pager || 0 === e.pager.total);
                        },
                        get isLoaded() {
                            return e.isResolved || e.isRejected;
                        },
                    }))
                    .actions((e) => ({
                        setInitialShimmer() {
                            e.items = (0, l.wg)(Array.from({ length: 20 }, () => null));
                        },
                        getData: (0, l.L3)(function* (t) {
                            var a;
                            let { userId: i, page: r = 0, pageSize: s = 20 } = t,
                                { usersResource: n, modelActionsLogger: o } = (0, l._$)(e);
                            if (
                                !(
                                    (e.pager && e.items.length >= (null == (a = e.pager) ? void 0 : a.total)) ||
                                    (e.loadingState === u.GuX.PENDING && e.pendingPages.has(r.toString()))
                                ) &&
                                !e.alreadyRequestedPages.has(r.toString())
                            ) {
                                'number' == typeof r && e.alreadyRequestedPages.set(r.toString(), r);
                                try {
                                    (e.loadingState = u.GuX.PENDING), e.pendingPages.set(r.toString(), r);
                                    let t = yield n.getLikedClips({ userId: i, page: r, pageSize: s }),
                                        a = { page: r, perPage: s, total: t.pager.total };
                                    if (t.clips) {
                                        let i = t.clips.map(C.i$);
                                        (0, u.Iyy)({ items: e.items, mappedRawItems: i, page: r, pageSize: s }), (e.items = (0, l.wg)(e.items.slice(0, a.total)));
                                    }
                                    (e.pager = a), (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = u.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(r.toString());
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = u.GuX.IDLE),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                e.pendingPages.clear(),
                                e.destroyItems([e.items]),
                                e.clipsWillLike.reset();
                        },
                    })),
                D = l.gK
                    .compose(
                        l.gK.model('CollectionNonMusicPage', {
                            items: l.gK.array(l.gK.maybeNull(v.JC)),
                            pager: l.gK.maybeNull(P.jd),
                            alreadyRequestedPages: l.gK.map(l.gK.number),
                            pendingPages: l.gK.map(l.gK.number),
                            requestsCount: l.gK.maybeNull(l.gK.number),
                        }),
                        P.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || (e.loadingState === u.GuX.PENDING && 0 === e.items.length);
                        },
                        get isEmptyItems() {
                            var t;
                            return !!(!(null == (t = e.items) ? void 0 : t.length) && e.requestsCount);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, metaType: s } = t,
                                { usersResource: n, modelActionsLogger: o } = (0, l._$)(e);
                            if (!(e.loadingState === u.GuX.PENDING && e.pendingPages.has(''.concat(i))) && !e.alreadyRequestedPages.has(''.concat(i))) {
                                'number' == typeof i && e.alreadyRequestedPages.set(''.concat(i), i);
                                try {
                                    var d, c, h;
                                    (e.loadingState = u.GuX.PENDING), e.pendingPages.set(''.concat(i), i);
                                    let t = yield n.getLikedAlbums({ userId: a, page: i, pageSize: r, metaType: s }),
                                        o = { page: i, perPage: r, total: t.pager.total };
                                    0 === e.items.length && (e.items = (0, l.wg)(Array.from({ length: o.total }, () => null)));
                                    let g =
                                        null !=
                                        (c =
                                            null == (d = t.albums)
                                                ? void 0
                                                : d.map((e) => {
                                                      let { album: t } = e;
                                                      return (0, v.pp)(t);
                                                  }))
                                            ? c
                                            : [];
                                    (0, u.Iyy)({ items: e.items, mappedRawItems: g, page: i, pageSize: r }),
                                        (e.pager = o),
                                        (e.requestsCount = (null != (h = e.requestsCount) ? h : 0) + 1),
                                        e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    o.error(t), (e.loadingState = u.GuX.REJECT);
                                } finally {
                                    e.pendingPages.delete(''.concat(i));
                                }
                            }
                        }),
                        reset() {
                            (e.loadingState = u.GuX.IDLE),
                                (e.items = (0, l.wg)([])),
                                e.pendingPages.clear(),
                                (e.pager = null),
                                e.alreadyRequestedPages.clear(),
                                (e.requestsCount = 0);
                        },
                    }));
            var L = a(83909),
                x = a(52733);
            let N = l.gK
                    .model('CollectionPlaylistsCreatedPage', { sort: l.gK.maybeNull(S.wY), pagesLoader: (0, P.Ij)(x.Zq), kinds: l.gK.array(l.gK.number) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getKinds: (0, l.L3)(function* (t) {
                                let a = [],
                                    { usersResource: i } = (0, l._$)(e);
                                (a = yield i.getPlaylistsKinds({ userId: t, addPlaylistWithLikes: !0 })), (e.kinds = (0, l.wg)(a));
                            }),
                            getData: (0, l.L3)(function* (a) {
                                let { userId: i, page: r = 0, pageSize: s = 20, withLikesCount: n } = a,
                                    { usersResource: o, modelActionsLogger: d } = (0, l._$)(e);
                                if (e.pagesLoader.isPageNeedToLoad(r))
                                    try {
                                        e.pagesLoader.setPageState(r, u.GuX.PENDING), 0 === e.kinds.length && (yield t.getKinds(i));
                                        let a = r * s,
                                            l = e.kinds.slice(a, a + s),
                                            d = (yield o.getPlaylistsByKinds({ userId: i, kinds: l, withLikesCount: n, withTracks: !0 })).map(L.pd);
                                        e.pagesLoader.setItems(d, { page: r, pager: { page: r, perPage: s, total: e.kinds.length } });
                                    } catch (t) {
                                        d.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: r });
                                    }
                            }),
                            reset() {
                                (e.sort = null), e.pagesLoader.reset(), (e.kinds = (0, l.wg)([]));
                            },
                        };
                        return t;
                    }),
                R = l.gK
                    .model('CollectionPlaylistsLikedPage', { sort: l.gK.maybeNull(S.wY), pagesLoader: (0, P.Ij)(x.$o) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get items() {
                            var t;
                            return null != (t = e.pagesLoader.items) ? t : [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { userId: a, page: i = 0, pageSize: r = 20, sortBy: s, sortOrder: n, playlistMetaType: o, withTracks: d } = t;
                            if (!e.pagesLoader.isPageNeedToLoad(i)) return;
                            let { usersResource: c, modelActionsLogger: h } = (0, l._$)(e);
                            (e.sort = null), (0, S.WG)(s) && (0, S.hl)(n) && (e.sort = (0, l.wg)({ sortBy: s, sortOrder: n }));
                            try {
                                e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                let { likedPlaylists: t, pager: l } = yield c.getLikedPlaylists({
                                        userId: a,
                                        page: i,
                                        pageSize: r,
                                        sortBy: s,
                                        sortOrder: n,
                                        playlistMetaType: o,
                                        withTracks: d,
                                    }),
                                    h = t.map((e) => {
                                        let { playlist: t } = e;
                                        return (0, x.jX)(t);
                                    });
                                e.pagesLoader.setItems(h, { page: i, pager: l });
                            } catch (t) {
                                h.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                            }
                        }),
                        reset() {
                            (e.sort = null), e.pagesLoader.reset();
                        },
                    })),
                w = l.gK
                    .model('CollectionPlaylists', {
                        playlistsLiked: R,
                        playlistsCreated: N,
                        activeTabIndex: l.gK.number,
                        tabs: l.gK.array(l.gK.number),
                        tabIndexElement: l.gK.maybe(l.gK.string),
                    })
                    .views((e) => ({
                        get isLikedTabActive() {
                            return e.activeTabIndex === y.a.LIKED;
                        },
                        get isCreatedTabActive() {
                            return e.activeTabIndex === y.a.CREATED;
                        },
                        get activePlaylistsModel() {
                            switch (e.activeTabIndex) {
                                case y.a.CREATED:
                                    return e.playlistsCreated;
                                case y.a.LIKED:
                                    return e.playlistsLiked;
                                default:
                                    return e.playlistsCreated;
                            }
                        },
                        get isEmptyLikedTab() {
                            return 0 === e.playlistsLiked.items.length;
                        },
                    }))
                    .actions((e) => ({
                        setActiveTabIndex(t) {
                            e.activeTabIndex = t;
                        },
                        setTabIndexElement(t) {
                            e.tabIndexElement = t;
                        },
                        reset() {
                            e.playlistsLiked.reset(), e.playlistsCreated.reset(), (e.activeTabIndex = y.a.CREATED);
                        },
                    }));
            var M = a(21365);
            let O = (e) => (0, l.wg)({ type: e.type, track: (0, M.vU)(e.track), album: e.album && (0, v.pp)(e.album) }),
                F = (e) => (0, l.wg)({ type: e.type, album: e.album && (0, v.pp)(e.album), playlist: e.playlist && (0, L.ZC)(e.playlist), track: (0, M.vU)(e.track) }),
                G = l.gK.model('ShelfLikedItem', { type: l.gK.string, track: M.vj, album: l.gK.maybe(v.JC) });
            l.gK.model('ShelfNewEpisodesItem', { type: l.gK.string, playlist: l.gK.maybe(L.BL), track: M.vj });
            let K = l.gK.model('ShelfRecentlyPlayedItem', { type: l.gK.string, album: l.gK.maybe(v.JC), playlist: l.gK.maybe(L.IP), track: M.vj }),
                j = l.gK
                    .compose(
                        l.gK.model('CollectionShelfLiked', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            entities: l.gK.maybeNull(l.gK.array(G)),
                            pager: l.gK.maybeNull(P.jd),
                        }),
                        P.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                        },
                        get isEmpty() {
                            var t;
                            return e.isResolved && (null == (t = e.entities) ? void 0 : t.length) === 0;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING)
                                try {
                                    var i, r;
                                    e.loadingState = u.GuX.PENDING;
                                    let a = yield t.getShelfLiked();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (r = a.pager) ? r : null),
                                        (e.entities = (0, l.wg)(a.entities ? a.entities.map(O) : [])),
                                        (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = u.GuX.IDLE);
                        },
                    })),
                X = l.gK
                    .compose(
                        l.gK.model('CollectionShelfNewEpisodes', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            playlist: l.gK.maybeNull(L.BL),
                            tracks: l.gK.maybeNull(l.gK.array(M.vj)),
                        }),
                        P.XT,
                    )
                    .views((e) => ({
                        get withPlaylist() {
                            return !!(e.playlist && e.playlist.kind && e.playlist.isAvailable && e.playlist.uuid);
                        },
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                        },
                        get isEmpty() {
                            return e.isResolved && (!e.tracks || 0 === e.tracks.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING)
                                try {
                                    var i;
                                    e.loadingState = u.GuX.PENDING;
                                    let a = yield t.getNewEpisodes();
                                    e.title = a.title;
                                    let r = a.blocks[0];
                                    (null == r ? void 0 : r.typeForFrom) && (e.typeForFrom = r.typeForFrom),
                                        (null == r || null == (i = r.entities[0]) ? void 0 : i.playlist) && (e.playlist = (0, L.ZC)(r.entities[0].playlist)),
                                        (null == r ? void 0 : r.entities) && (e.tracks = (0, l.wg)(r.entities.filter((e) => e.track).map((e) => (0, M.vU)(e.track)))),
                                        (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.title = null), (e.playlist = null), (e.typeForFrom = null), (e.tracks = null), (e.loadingState = u.GuX.IDLE);
                        },
                    })),
                U = l.gK
                    .compose(
                        l.gK.model('CollectionShelfRecentlyPlayed', {
                            title: l.gK.maybeNull(l.gK.string),
                            typeForFrom: l.gK.maybeNull(l.gK.string),
                            entities: l.gK.maybeNull(l.gK.array(K)),
                            pager: l.gK.maybeNull(P.jd),
                        }),
                        P.XT,
                    )
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                        },
                        get isEmpty() {
                            return !!(e.isResolved && e.entities && 0 === e.entities.length);
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { nonMusicResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING)
                                try {
                                    var i, r;
                                    e.loadingState = u.GuX.PENDING;
                                    let a = yield t.getShelfRecentlyPlayed();
                                    (e.title = a.title),
                                        (e.typeForFrom = null != (i = a.typeForFrom) ? i : null),
                                        (e.pager = null != (r = a.pager) ? r : null),
                                        (e.entities = (0, l.wg)(a.entities.map(F))),
                                        (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.entities = null), (e.title = null), (e.typeForFrom = null), (e.pager = null), (e.loadingState = u.GuX.IDLE);
                        },
                    })),
                B = l.gK
                    .model('CollectionShelfPage', { recentlyPlayed: U, newEpisodes: X, liked: j })
                    .views((e) => ({
                        get isLoading() {
                            return e.recentlyPlayed.isLoading && e.liked.isLoading;
                        },
                        get isRejected() {
                            return e.recentlyPlayed.isRejected && e.liked.isRejected;
                        },
                        get isResolved() {
                            return e.recentlyPlayed.isResolved && e.liked.isResolved;
                        },
                        get isIdle() {
                            return e.recentlyPlayed.loadingState === u.GuX.IDLE && e.liked.loadingState === u.GuX.IDLE;
                        },
                        get hasRecentlyPlayed() {
                            var t;
                            return e.recentlyPlayed.isLoading || ((null == (t = e.recentlyPlayed.entities) ? void 0 : t.length) || 0) > 0;
                        },
                        get hasLiked() {
                            var a;
                            return e.liked.isLoading || ((null == (a = e.liked.entities) ? void 0 : a.length) || 0) > 0;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.recentlyPlayed.reset(), e.liked.reset();
                        },
                    })),
                V = l.gK
                    .compose(l.gK.model('CollectionDislikesPageArtists', { items: l.gK.maybeNull(l.gK.array(_.PK)) }), P.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (!(0, l._n)(e)) return null;
                            let { user: i } = (0, l.Zn)(e);
                            if (e.loadingState === u.GuX.PENDING) return null;
                            if (((e.loadingState = u.GuX.PENDING), i.account.data.uid))
                                try {
                                    let a = yield t.getDislikedArtists({ userId: i.account.data.uid });
                                    return (e.items = (0, l.wg)((a || []).map(_.dM))), e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE), a;
                                } catch (t) {
                                    a.error(t), e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                                }
                            return (e.loadingState = u.GuX.REJECT), null;
                        }),
                        reset() {
                            (e.loadingState = u.GuX.IDLE), (e.items = null);
                        },
                    }));
            var W = a(14032),
                q = a(97719);
            let Y = l.gK.model('CollectionDislikesPageTracksItem', { id: l.gK.string, loadingState: l.gK.enumeration(Object.values(u.GuX)), data: l.gK.maybeNull(M.vj) }),
                H = l.gK
                    .compose(l.gK.model('CollectionDislikesPageTracks', { items: l.gK.maybeNull(l.gK.array(Y)) }), P.XT)
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === u.GuX.PENDING;
                            },
                            get isEmpty() {
                                var a;
                                return !t.isLoading && (null == (a = e.items) ? void 0 : a.length) === 0;
                            },
                            get sonataEntitiesData() {
                                var i, r;
                                return null != (r = null == (i = e.items) ? void 0 : i.map((e) => (0, q.li)(e.id))) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            let { usersResource: t, modelActionsLogger: a } = (0, l._$)(e),
                                { user: i } = (0, l.Zn)(e);
                            if (i.account.data.uid && e.loadingState !== u.GuX.PENDING) {
                                e.loadingState = u.GuX.PENDING;
                                try {
                                    let {
                                            library: { tracks: a },
                                        } = yield t.getDislikedTracks({ userId: i.account.data.uid }),
                                        r = a.map((e) => {
                                            let { id: t, albumId: a } = e;
                                            return { id: String((0, W.V)(t, a)), loadingState: u.GuX.IDLE };
                                        });
                                    (e.items = (0, l.wg)(r)), (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                                }
                            }
                        }),
                        getTracksByRange: (0, l.L3)(function* (t, a) {
                            var i;
                            let { tracksResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (!(null == (i = e.items) ? void 0 : i.length)) return null;
                            (t = Math.max(0, t)), (a = Math.min(a, e.items.length));
                            let n = ((e, t, a) => {
                                let i = [];
                                for (let n = t; n <= a; n++) {
                                    var r, s;
                                    ((null == (r = e[n]) ? void 0 : r.loadingState) === u.GuX.IDLE || (null == (s = e[n]) ? void 0 : s.loadingState) === u.GuX.REJECT) &&
                                        i.push(n);
                                }
                                return i;
                            })(e.items, t, a);
                            try {
                                let t,
                                    a =
                                        ((t = e.items),
                                        n.map((e) => {
                                            let a = t[e];
                                            return String(null == a ? void 0 : a.id);
                                        }));
                                if (!a.length) return null;
                                n.forEach((t) => {
                                    var a;
                                    let i = null == (a = e.items) ? void 0 : a[t];
                                    i && (i.loadingState = u.GuX.PENDING);
                                });
                                let i = yield r.getTracksMeta({ trackIds: a, withProgress: !0 });
                                n.forEach((t, a) => {
                                    var r;
                                    let s = null == i ? void 0 : i[a];
                                    (null == (r = e.items) ? void 0 : r[t]) && s && (e.items[t] = { id: String(s.id), data: (0, M.vU)(s), loadingState: u.GuX.RESOLVE });
                                });
                            } catch (t) {
                                s.error(t),
                                    n.forEach((t) => {
                                        var a;
                                        let i = null == (a = e.items) ? void 0 : a[t];
                                        i && (i.loadingState = u.GuX.REJECT);
                                    });
                            }
                            return null;
                        }),
                        reset() {
                            (e.loadingState = u.GuX.IDLE), (e.items = null);
                        },
                    })),
                z = l.gK
                    .model('CollectionDislikesPage', { artists: V, tracks: H })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.tracks.isNeededToLoad && e.artists.isNeededToLoad;
                        },
                        get isLoading() {
                            return e.tracks.isLoading && e.artists.isLoading;
                        },
                        get isResolved() {
                            return e.tracks.isResolved && e.artists.isResolved;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.artists.reset(), e.tracks.reset();
                        },
                    }));
            var Q = a(4696);
            let $ = l.gK
                    .model('CollectionKidsAlbumsPage', { pagesLoader: (0, P.Ij)(v.JC) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = Q.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield r.getCollectionKidsAlbumsLiked({ page: i, pageSize: a }),
                                        s = t.items.map((e) => (0, p.vj)(e.data).data);
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                Z = l.gK
                    .model('CollectionKidsPlaylistsPage', { pagesLoader: (0, P.Ij)(L.IP) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = Q.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield r.getCollectionKidsPlaylistsLiked({ page: i, pageSize: a }),
                                        s = t.items.map((e) => (0, p.dF)(e.data).data);
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                J = l.gK
                    .model('CollectionKidsTracksPage', { pagesLoader: (0, P.Ij)(M.vj) })
                    .views((e) => {
                        let t = {
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var a;
                                return null != (a = e.pagesLoader.items) ? a : [];
                            },
                            get shouldShowContent() {
                                return t.isShimmerVisible || t.items.length > 0;
                            },
                            get loadedItems() {
                                var i, r;
                                return null != (r = null == (i = e.pagesLoader.items) ? void 0 : i.filter((e) => null !== e)) ? r : [];
                            },
                            get sonataEntitiesData() {
                                return t.loadedItems.map(M.$b);
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = Q.c, page: i = 0 } = t,
                                { landingBlocksResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield r.getCollectionKidsTracksLiked({ page: i, pageSize: a }),
                                        s = t.items.map(p.vI).map((e) => e.data);
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager });
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                ee = l.gK
                    .model('CollectionKidsPage', { albums: $, playlists: Z, tracks: J })
                    .views((e) => ({
                        get isNeededToLoad() {
                            return e.albums.isNeededToLoad && e.playlists.isNeededToLoad && e.tracks.isNeededToLoad;
                        },
                        get isRejected() {
                            return e.albums.isRejected && e.playlists.isRejected && e.tracks.isRejected;
                        },
                        get isResolved() {
                            return e.albums.isResolved && e.playlists.isResolved && e.tracks.isResolved;
                        },
                        get shouldShowContent() {
                            return e.albums.shouldShowContent || e.playlists.shouldShowContent || e.tracks.shouldShowContent;
                        },
                    }))
                    .actions((e) => ({
                        reset() {
                            e.albums.reset(), e.playlists.reset(), e.tracks.reset();
                        },
                    })),
                et = l.gK
                    .compose(l.gK.model('CollectionShelfLikedPage', { pagesLoader: (0, P.Ij)(G), typeForFrom: l.gK.maybeNull(l.gK.string) }), P.pl)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = Q.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var n, o;
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield r.getShelfLiked({ page: i, pageSize: a }),
                                        s = (null == (n = t.entities) ? void 0 : n.map(O)) || [];
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset();
                        },
                    })),
                ea = l.gK
                    .model('CollectionShelfRecentlyPlayedPage', { pagesLoader: (0, P.Ij)(K), typeForFrom: l.gK.maybeNull(l.gK.string) })
                    .views((e) => ({
                        get isShimmerVisible() {
                            return !e.pagesLoader.isSomePageResolved;
                        },
                        get isNeededToLoad() {
                            return e.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isRejected() {
                            return e.pagesLoader.isInitialRequestRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isEmpty;
                        },
                        get isResolved() {
                            return e.pagesLoader.isSomePageResolved;
                        },
                        get requestsCount() {
                            return e.pagesLoader.requestsCount;
                        },
                        get items() {
                            return e.pagesLoader.items || [];
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* (t) {
                            let { pageSize: a = Q.c, page: i = 0 } = t,
                                { nonMusicResource: r, modelActionsLogger: s } = (0, l._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(i))
                                try {
                                    var n, o;
                                    e.pagesLoader.setPageState(i, u.GuX.PENDING);
                                    let t = yield r.getShelfRecentlyPlayed({ page: i, pageSize: a }),
                                        s = (null == (n = t.entities) ? void 0 : n.map(F)) || [];
                                    e.pagesLoader.setItems(s, { page: i, pager: t.pager }), (e.typeForFrom = null != (o = t.typeForFrom) ? o : null);
                                } catch (t) {
                                    s.error(t), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: i });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.typeForFrom = null);
                        },
                    })),
                ei = l.gK.model('CollectionPage', {
                    landing: p.Ju,
                    albums: f,
                    playlists: w,
                    artists: k,
                    shelf: B,
                    shelfRecentlyPlayed: ea,
                    shelfLiked: et,
                    nonMusicLiked: D,
                    dislikes: z,
                    kids: ee,
                    clips: A,
                });
            a(38155),
                a(2313),
                a(66875),
                a(53793),
                a(90392),
                a(50492),
                a(94162),
                a(65696),
                a(72230),
                a(77770),
                a(97296),
                a(20139),
                a(19796),
                a(46026),
                a(24159),
                a(85872),
                a(25605),
                a(23430),
                a(57202);
            var er = a(66498),
                es = a(34942);
            let en = {
                experiments: { loadingState: u.GuX.IDLE, experiments: {}, overwrittenExperiments: {} },
                disclaimersDictionary: { loadingState: u.GuX.IDLE, recentDisclaimersRequestTS: 0 },
                user: { account: { loadingState: u.GuX.IDLE, data: {} }, settings: { loadingState: u.GuX.IDLE } },
                wizard: { loadingState: u.GuX.IDLE, modal: {}, savedLikedArtists: [], likedArtists: [], unlikedArtists: [] },
                collection: {
                    albums: { pagesLoader: {}, upcomingAlbums: { loadingState: u.GuX.IDLE } },
                    playlists: {
                        playlistsLiked: { pagesLoader: {} },
                        playlistsCreated: { pagesLoader: {} },
                        activeTabIndex: y.a.CREATED,
                        tabs: [y.a.CREATED, y.a.LIKED],
                    },
                    artists: { pagesLoader: {}, topArtists: { loadingState: u.GuX.IDLE, items: [] } },
                    landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                    shelf: { recentlyPlayed: { loadingState: u.GuX.IDLE }, newEpisodes: { loadingState: u.GuX.IDLE }, liked: { loadingState: u.GuX.IDLE } },
                    nonMusicLiked: { loadingState: u.GuX.IDLE, items: [] },
                    dislikes: { artists: { loadingState: u.GuX.IDLE }, tracks: { loadingState: u.GuX.IDLE } },
                    kids: { albums: { pagesLoader: {} }, playlists: { pagesLoader: {} }, tracks: { pagesLoader: {} } },
                    shelfRecentlyPlayed: { pagesLoader: {} },
                    shelfLiked: { pagesLoader: {} },
                    clips: { loadingState: u.GuX.IDLE, clipsWillLike: { loadingState: u.GuX.IDLE } },
                },
                main: { specialHeaderLoadingState: u.GuX.IDLE, landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } } },
                nonMusic: {
                    landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                    albums: { loadingState: u.GuX.IDLE },
                    categorySubpage: { loadingState: u.GuX.IDLE },
                    categoryPlaylistsSubpage: { loadingState: u.GuX.IDLE, pagesLoader: {} },
                },
                kids: {
                    landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                    kidsEditorialPlaylistSubpage: { loadingState: u.GuX.IDLE, pagesLoader: {} },
                    kidsEditorialAlbumSubpage: { loadingState: u.GuX.IDLE, pagesLoader: {} },
                },
                settings: {
                    layout: null,
                    isLandscape: !1,
                    isMobileLandscapeHeight: !1,
                    browserInfo: {
                        name: void 0,
                        version: void 0,
                        OSFamily: void 0,
                        isMobile: !1,
                        isTablet: !1,
                        isTouch: !1,
                        isBrowser: !1,
                        inAppBrowser: !1,
                        hasHuaweiAppGallery: !1,
                    },
                    selectedThumbId: u.TZj.DEFAULT,
                },
                currentClipInfo: { clipLoadingState: u.GuX.IDLE, creditsLoadingState: u.GuX.IDLE, id: null, clip: null, credits: null, modal: {} },
                currentTrackInfo: {
                    trackLoadingState: u.GuX.IDLE,
                    creditsLoadingState: u.GuX.IDLE,
                    descriptionLoadingState: u.GuX.IDLE,
                    id: null,
                    albumId: null,
                    isUGC: null,
                    fullTrack: null,
                    credits: null,
                    modal: {},
                },
                trackLyrics: { loadingState: u.GuX.IDLE, lyrics: null, lyricId: null, externalLyricId: null, track: null, modal: {} },
                album: {
                    loadingState: u.GuX.IDLE,
                    items: [],
                    meta: null,
                    otherAlbumVersions: [],
                    allTracksUnfinished: !1,
                    donations: { loadingState: u.GuX.IDLE, items: [] },
                    latestGenreAlbums: { loadingState: u.GuX.IDLE, items: [] },
                    otherArtistAlbums: { loadingState: u.GuX.IDLE, items: [] },
                    relatedContent: { loadingState: u.GuX.IDLE, items: [] },
                    similarEntities: {
                        id: 'similar-entities',
                        type: g.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: p.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                promolanding: {
                    loadingState: u.GuX.IDLE,
                    items: [],
                    meta: null,
                    allTracksUnfinished: !1,
                    promoCampaign: { loadingState: u.GuX.IDLE, isActive: !1 },
                    state: {
                        contextId: null,
                        contextType: null,
                        entityMeta: null,
                        status: m.MT.IDLE,
                        canMoveBackward: !1,
                        canMoveForward: !1,
                        canSpeed: !1,
                        canChangeRepeatMode: !0,
                        repeatMode: h.pM.NONE,
                        quality: c.e.BALANCED,
                        canShuffle: !0,
                        shuffle: !1,
                    },
                    similarEntities: {
                        id: 'similar-entities',
                        type: g.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: p.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                albumCPA: {},
                artist: {
                    loadingState: u.GuX.IDLE,
                    meta: null,
                    landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                    popularTracks: [],
                    similarArtists: [],
                    albums: [],
                    discography: [],
                    compilations: [],
                    playlists: [],
                    clips: [],
                    fullTracksListSubpage: { loadingState: u.GuX.IDLE },
                    albumsSubpage: { pagesLoader: {} },
                    concertsSubpage: { loadingState: u.GuX.IDLE },
                    similarArtistsSubPage: { loadingState: u.GuX.IDLE },
                    familiarInfo: { loadingState: u.GuX.IDLE },
                    familiarSubpage: { loadingState: u.GuX.IDLE },
                    clipsSubpage: { pagesLoader: {} },
                    commonSubPage: {},
                    offlineArtist: { loadingState: u.GuX.IDLE, trackIds: { loadingState: u.GuX.IDLE }, downloadedTracks: { loadingState: u.GuX.IDLE } },
                    infoLoadingState: { loadingState: u.GuX.IDLE },
                },
                library: { loadingState: u.GuX.IDLE, tracks: {}, artists: {}, playlists: {}, albums: {}, clips: {} },
                sonataState: {
                    contextId: null,
                    contextType: null,
                    entityMeta: null,
                    status: m.MT.IDLE,
                    canMoveBackward: !1,
                    canMoveForward: !1,
                    canSpeed: !1,
                    canChangeRepeatMode: !0,
                    repeatMode: h.pM.NONE,
                    quality: c.e.BALANCED,
                    canShuffle: !0,
                    shuffle: !1,
                    areCoresRegistered: !1,
                    isVHCoreRegistered: !1,
                    isCrossFadeEnabled: !0,
                },
                playlist: {
                    loadingState: u.GuX.IDLE,
                    meta: null,
                    items: [],
                    initialItems: [],
                    similarPlaylists: [],
                    filters: { loadingState: u.GuX.IDLE },
                    editorFeature: { shouldShowDuplicate: !1, shouldShowGenre: !1, shouldShowMajor: !1, colorMajorMap: {}, duplicate: {} },
                    search: { loadingState: u.GuX.IDLE, text: '' },
                    similarEntities: {
                        id: 'similar-entities',
                        type: g.t.COLLECTION_SIMILAR_ENTITIES,
                        loadingState: p.SQ.IDLE,
                        isNotFound: !1,
                        hasSentAnalyticsOnLoaded: !1,
                        meta: {},
                    },
                },
                slides: {
                    userSlidesLoadingState: u.GuX.IDLE,
                    artistSlidesLoadingState: u.GuX.IDLE,
                    podcastSlidesLoadingState: u.GuX.IDLE,
                    specialSlidesLoadingState: u.GuX.IDLE,
                    kidsSlidesLoadingState: u.GuX.IDLE,
                    userItems: [],
                    artistItems: [],
                    podcastItems: [],
                    specialItems: [],
                    kidsItems: [],
                    isMuted: !1,
                },
                vibe: { loadingState: u.GuX.IDLE, vibeResetLoadingState: u.GuX.IDLE, isApplying: !1 },
                search: {
                    searchCorrectedText: null,
                    loadingState: u.GuX.IDLE,
                    historyPage: { loadingState: u.GuX.IDLE, items: [] },
                    mixes: { loadingState: u.GuX.IDLE, items: [] },
                    landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                    history: { loadingState: u.GuX.IDLE },
                    pagesLoader: {},
                },
                vibeSettings: { loadingState: u.GuX.IDLE },
                pinsCollection: { loadingState: u.GuX.IDLE, index: {} },
                genre: {
                    loadingState: u.GuX.IDLE,
                    albumsSubpage: { pagesLoader: {} },
                    artistsSubpage: { loadingState: u.GuX.IDLE, pagesLoader: {} },
                    playlistsSubpage: { pagesLoader: {} },
                },
                genres: { title: null, loadingState: u.GuX.IDLE, items: [] },
                mixes: { loadingState: u.GuX.IDLE, items: [] },
                tag: { tagLoadingState: u.GuX.IDLE, playlistsData: [], pagesLoader: {} },
                chart: { tracksSubPage: { loadingState: u.GuX.IDLE, items: [] }, podcastsSubPage: { loadingState: u.GuX.IDLE, items: [] } },
                post: { loadingState: u.GuX.IDLE },
                landingBlockEntities: { loadingState: u.GuX.IDLE },
                contextMenuPlaylists: { pagesLoader: {} },
                musicHistory: { loadingState: u.GuX.IDLE, tabs: null },
                createPlaylist: {},
                location: {},
                disclaimerModalState: { loadingState: u.GuX.IDLE },
                myMusic: { downloadedTracks: { loadingState: u.GuX.IDLE } },
                trailer: {
                    loadingState: u.GuX.IDLE,
                    withAnimation: !0,
                    shouldAutoStartPlaying: !0,
                    shouldSendEventOnTracksShowed: !0,
                    modal: {},
                    sonataStatusBeforeTrailerStart: m.MT.IDLE,
                    isManuallyPaused: !0,
                    state: { contextId: null, contextType: null, entityMeta: null, status: m.MT.IDLE },
                },
                communication: { loadingState: u.GuX.IDLE },
                modals: {
                    disclaimerModal: {},
                    shortcutsModal: {},
                    aboutAppModal: {},
                    overviewModal: {},
                    ugcTrackEditModal: { modal: {} },
                    popoverOverPlayer: {},
                    crackdownModal: {},
                    overwrittenExperimentsModal: {},
                    buySubscriptionModal: { isOpened: !0 },
                    promoLandingBuySubscriptionModal: {},
                    clearMemoryModal: {},
                    windowSettingsModal: {},
                    playerSettingsModal: {},
                    audioSettingsModal: {},
                    myVibeSettingsModal: {},
                    appUpdatesSettingsModal: {},
                    scrobblersSettingsModal: {},
                    downloaderSettingsModal: {},
                    systemSettingsModal: {},
                    myVibeParamsSettingsModal: {},
                    miniPlayerSettingsModal: {},
                    ynisonSettingsModal: {},
                    lrclibSettingsModal: {},
                    discordRpcSettingsModal: {},
                    imageSliderModal: { modal: {} },
                    artistAboutModal: { loadingState: u.GuX.IDLE, modal: {} },
                    bestRecommedationModal: {},
                },
                landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } },
                fullscreenPlayer: { modal: {}, syncLyrics: { loadingState: u.GuX.IDLE }, playQueue: {} },
                fullscreenVideoPlayer: {
                    modal: {},
                    ids: [],
                    loadingState: u.GuX.IDLE,
                    sonataStatusBeforeClipStart: m.MT.IDLE,
                    withAnimation: !0,
                    state: { contextId: null, contextType: null, entityMeta: null, status: m.MT.IDLE, canMoveBackward: !1, canMoveForward: !1 },
                },
                advert: { data: null, isAdvertPlaying: !0, isAdvertShown: !1, isAdvertPlaybackCreated: !1 },
                ugcUploadCenter: { checkProcessingTracksAttempts: 0, notifications: {} },
                paymentWidgetModal: {
                    modal: {},
                    target: '',
                    serviceSessionId: '',
                    tariffOfferName: '',
                    offersBatchId: '',
                    offersPositionIds: '',
                    isSilent: !1,
                    status: es.cF.IDLE,
                },
                offers: { music: { loadingState: u.GuX.IDLE } },
                quality: { modal: {} },
                releaseNotes: { modal: {} },
                slam: { networkStatus: {} },
                favoriteTracks: { loadingState: u.GuX.IDLE },
                track: { loadingState: u.GuX.IDLE, withAnimation: !0, shouldSendEventOnPlusButtonShowed: !0 },
                familyInvite: { info: { loadingState: u.GuX.IDLE }, acceptanceLoadingState: u.GuX.IDLE, modal: {}, step: er._n.INFO },
                continueListen: {},
                playlistPersonal: { loadingState: u.GuX.IDLE },
                redAlert: { loadingState: u.GuX.IDLE },
                shareIframe: { modal: {} },
                paywall: { modal: {} },
                downloadMobileApp: { modal: {} },
                advertBanners: {
                    banners: {
                        topAdvertBanner: { type: u.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        sideAdvertBanner: { type: u.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        brandedPlaylistBanner: { type: u.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                        brandedPlayerBanner: { type: u.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0, modal: {} },
                        brandedEntityAxeBanner: { type: u.h8o.EMPTY, noAds: !1, hasError: !1, isShowBanner: !0 },
                    },
                },
                label: { loadingState: u.GuX.IDLE, albumsSubpage: { pagesLoader: {}, sort: {} }, artistsSubpage: { pagesLoader: {} } },
                desktopPaywall: {},
                concerts: { loadingState: u.GuX.IDLE, config: { loadingState: u.GuX.IDLE }, landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } } },
                concertsDetails: { loadingState: u.GuX.IDLE },
                concert: { loadingState: u.GuX.IDLE, landing: { loadingState: u.GuX.IDLE, tabs: { loadingState: u.GuX.IDLE } } },
                vibeWheel: { items: [] },
            };
            var el = a(36748),
                eo = a(50211),
                ed = a(57390),
                eu = a(11189),
                ec = a(48249),
                eh = a(14741),
                eg = a(14287);
            let em = l.gK
                .compose(l.gK.model('FavoriteTracksPage', { playlistUuid: l.gK.maybeNull(l.gK.string), errorStatusCode: l.gK.maybeNull(l.gK.number) }), P.XT)
                .views((e) => ({
                    get playlistUrl() {
                        if (!e.playlistUuid) return '';
                        let { href: t } = (0, u.uvd)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                        return t;
                    },
                }))
                .actions((e) => ({
                    getPlaylistUrl: (0, l.L3)(function* () {
                        let { landingResource: t, modelActionsLogger: a } = (0, l._$)(e);
                        if (e.loadingState !== u.GuX.PENDING)
                            try {
                                (e.loadingState = u.GuX.PENDING),
                                    (e.playlistUuid = (yield t.getBlock({
                                        source: { uri: '/landing/block/collection/playlist-with-likes', countWeb: 8 },
                                        type: g.t.COLLECTION_PLAYLIST_WITH_LIKES,
                                    })).playlist.playlistUuid),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                a.error(t),
                                    t instanceof eg.GX &&
                                        (t.statusCode === eg.X1.NOT_FOUND || t.statusCode === eg.X1.BAD_REQUEST) &&
                                        (e.errorStatusCode = eg.X1.NOT_FOUND),
                                    e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = u.GuX.IDLE), (e.playlistUuid = null);
                    },
                }));
            a(99893);
            var ey = a(91022),
                ep = a(69961),
                ev = a(13127),
                eS = a(14726);
            let eP = l.gK.model('SpecialHeaderThemeOptions', { backgroundColor: l.gK.maybe(l.gK.string), textColor: l.gK.maybe(l.gK.string) }),
                eE = l.gK.model('SpecialHeader', { title: l.gK.string, url: l.gK.string, lightTheme: eP, darkTheme: eP }),
                ef = l.gK
                    .model('MainPage', { landing: p.Ju, specialHeaderLoadingState: l.gK.enumeration(Object.values(u.GuX)), specialHeader: l.gK.maybe(eE) })
                    .actions((e) => ({
                        getSpecialHeader: (0, l.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: a } = (0, l._$)(e);
                            if (e.specialHeaderLoadingState !== u.GuX.PENDING)
                                try {
                                    e.specialHeaderLoadingState = u.GuX.PENDING;
                                    let a = yield t.getSpecialHeader();
                                    (e.specialHeader = (0, l.wg)(
                                        ((e) => {
                                            var t, a, i, r, s, n;
                                            if ((null == (t = e.button) ? void 0 : t.title) && (null == (a = e.button.action) ? void 0 : a.weblink))
                                                return {
                                                    title: e.button.title,
                                                    url: e.button.action.weblink,
                                                    lightTheme: {
                                                        backgroundColor: null == (i = e.lightTheme) ? void 0 : i.buttonColor,
                                                        textColor: null == (r = e.lightTheme) ? void 0 : r.buttonTitleColor,
                                                    },
                                                    darkTheme: {
                                                        backgroundColor: null == (s = e.darkTheme) ? void 0 : s.buttonColor,
                                                        textColor: null == (n = e.darkTheme) ? void 0 : n.buttonTitleColor,
                                                    },
                                                };
                                        })(a),
                                    )),
                                        (e.specialHeaderLoadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), (e.specialHeaderLoadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.specialHeaderLoadingState = u.GuX.IDLE), (e.specialHeader = void 0);
                        },
                    }));
            a(94540);
            var eb = a(26303),
                e_ = a(72645),
                eI = a(76866);
            let ek = l.gK
                .compose(
                    l.gK.model('MusicHistoryPage', {
                        indexesMap: l.gK.map(l.gK.number),
                        items: l.gK.maybeNull(l.gK.array(e_.UN)),
                        datesMap: l.gK.map(l.gK.boolean),
                        tabs: l.gK.maybeNull(l.gK.array(e_.WW)),
                    }),
                    P.XT,
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
                            (e.items = (0, l.wg)([])),
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
                                                                loadingState: a < 25 ? u.GuX.RESOLVE : u.GuX.IDLE,
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
                                                                        loadingState: a < 25 ? u.GuX.RESOLVE : u.GuX.IDLE,
                                                                    }),
                                                                ++a;
                                                        });
                                                });
                                    });
                        },
                        setTrack(t, a) {
                            var i, r, s, n;
                            let { tabIndex: l, blockIndex: o, trackIndex: d } = t,
                                { fullModel: c } = a.data;
                            if (null === d) return;
                            let h = null == (n = e.tabs) || null == (s = n[l]) || null == (r = s.blocks) || null == (i = r[o]) ? void 0 : i.tracks[d];
                            h && ((h.data = (0, M.vU)(c)), (h.loadingState = u.GuX.RESOLVE));
                        },
                        setAlbum(t, a) {
                            var i, r, s;
                            let { tabIndex: n, blockIndex: l } = t,
                                { fullModel: o } = a.data,
                                d = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                            (0, e_.z)(d) && ((d.meta = (0, v.sK)({ album: o.album, artists: o.artists })), (d.loadingState = u.GuX.RESOLVE));
                        },
                        setArtist(t, a) {
                            var i, r, s;
                            let { tabIndex: n, blockIndex: l } = t,
                                { fullModel: o } = a.data,
                                d = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                            (0, e_.bg)(d) && ((d.meta = (0, _.as)({ artist: o.artist })), (d.loadingState = u.GuX.RESOLVE));
                        },
                        setPlaylist(t, a) {
                            var i, r, s;
                            let { tabIndex: n, blockIndex: l } = t,
                                { fullModel: o } = a.data,
                                d = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                            (0, e_.kU)(d) && ((d.meta = { ...(0, L.bk)({ playlist: o.playlist }), tracksCount: o.tracksCount }), (d.loadingState = u.GuX.RESOLVE));
                        },
                        setVibe(t, a) {
                            var i, r, s;
                            let { tabIndex: n, blockIndex: l } = t,
                                { fullModel: o } = a.data,
                                d = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                            (0, e_.sr)(d) &&
                                ((d.meta = { ...(0, eI.er)(o.wave), imageUrl: o.simpleWaveForegroundImageUrl, backgroundColor: o.simpleWaveBackgroundColor }),
                                (d.loadingState = u.GuX.RESOLVE));
                        },
                        getMusicHistory: (0, l.L3)(function* () {
                            let { musicHistoryResource: a, modelActionsLogger: i } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING)
                                try {
                                    e.loadingState = u.GuX.PENDING;
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
                                    (e.tabs = (0, l.wg)(r.historyTabs.map(e_.Sv))), t.fillItemsAndIndexes(), (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        getItems: (0, l.L3)(function* (a) {
                            let { musicHistoryResource: i, modelActionsLogger: r } = (0, l._$)(e);
                            try {
                                let r = e.getItemsToLoad(a);
                                r.forEach((e) => {
                                    e.loadingState = u.GuX.RESOLVE;
                                });
                                let s = yield i.getMusicHistoryItems({
                                        items: r
                                            .map((e) => {
                                                switch (e.type) {
                                                    case eb.D.ARTIST:
                                                    case eb.D.ALBUM:
                                                        return { type: e.type, data: { itemId: { id: e.id } } };
                                                    case eb.D.PLAYLIST: {
                                                        let [t, a] = e.id.split(':');
                                                        return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(a) } } };
                                                    }
                                                    case eb.D.WAVE:
                                                        return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                    case eb.D.TRACK: {
                                                        let [t, a] = e.id.split(':');
                                                        return { type: e.type, data: { itemId: { trackId: String(t), albumId: a } } };
                                                    }
                                                    default:
                                                        return null;
                                                }
                                            })
                                            .filter((e) => e),
                                    }),
                                    n = r.reduce((e, t) => {
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
                                            n[
                                                ((e) => {
                                                    switch (e.type) {
                                                        case eb.D.ALBUM:
                                                            return ''.concat(e.type, '_').concat((0, e_.tM)(e));
                                                        case eb.D.TRACK:
                                                            return ''.concat(e.type, '_').concat((0, e_.QF)(e));
                                                        case eb.D.WAVE:
                                                            return ''.concat(e.type, '_').concat((0, e_.u)(e));
                                                        case eb.D.PLAYLIST:
                                                            return ''.concat(e.type, '_').concat((0, e_.uZ)(e));
                                                        case eb.D.ARTIST:
                                                            return ''.concat(e.type, '_').concat((0, e_.Hp)(e));
                                                    }
                                                })(e)
                                            ]) ||
                                        a.forEach((a) => {
                                            switch (e.type) {
                                                case eb.D.ALBUM:
                                                    t.setAlbum(a, e);
                                                    break;
                                                case eb.D.TRACK:
                                                    t.setTrack(a, e);
                                                    break;
                                                case eb.D.WAVE:
                                                    t.setVibe(a, e);
                                                    break;
                                                case eb.D.PLAYLIST:
                                                    t.setPlaylist(a, e);
                                                    break;
                                                case eb.D.ARTIST:
                                                    t.setArtist(a, e);
                                            }
                                            a.loadingState = u.GuX.RESOLVE;
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
                            (e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = u.GuX.IDLE);
                        },
                    };
                    return t;
                });
            a(42421), a(92521);
            var eC = a(89511);
            let eT = l.gK.model('MyMusicPage', { downloadedTracks: eC.b });
            a(9567);
            var eA = a(77870),
                eD = a(16476),
                eL = a(39507),
                ex = a(48625),
                eN = a(34291),
                eR = a(81531),
                ew = a(31710),
                eM = a(76421);
            let eO = [eM.n.ARTIST, eM.n.ALBUM, eM.n.TRACK, eM.n.PLAYLIST, eM.n.WAVE, eM.n.PODCAST, eM.n.PODCAST_EPISODE],
                eF = [eM.n.ALBUM, eM.n.ARTIST, eM.n.PLAYLIST, eM.n.TRACK, eM.n.UGC_TRACK, eM.n.WAVE, eM.n.PODCAST, eM.n.PODCAST_EPISODE, eM.n.CLIP, eM.n.CONCERT],
                eG = (e) => {
                    var t;
                    let { wave: a } = e;
                    return (0, l.wg)({
                        title: a.title,
                        description: a.subTitle,
                        seeds: null != (t = a.seeds) ? t : [''.concat(a.id.type, ':').concat(a.id.tag)],
                        backgroundColor: a.color,
                        imageUrl: a.image,
                        agent: (0, eI.KU)(a.agent),
                    });
                },
                eK = (e) => {
                    let { type: t } = e;
                    switch (t) {
                        case eM.n.UGC_TRACK:
                            return { type: t, data: (0, M.or)(e.track) };
                        case eM.n.TRACK:
                            return { type: t, data: (0, M.vU)(e.track) };
                        case eM.n.ARTIST:
                            return { type: t, data: (0, _.dM)(e.artist) };
                        case eM.n.PLAYLIST:
                            return { type: t, data: (0, L.Ew)({ ...e.playlist, artists: [] }) };
                        case eM.n.ALBUM:
                            return { type: t, data: (0, v.pp)(e.album) };
                        case eM.n.WAVE:
                            return { type: t, data: eG(e) };
                        case eM.n.PODCAST:
                            return { type: t, data: (0, v.pp)(e.podcast) };
                        case eM.n.PODCAST_EPISODE:
                            return { type: t, data: (0, M.vU)(e.podcast_episode) };
                        default:
                            return null;
                    }
                };
            var ej = a(51427),
                eX = a(985),
                eU = a(77217);
            let eB = l.gK.compose(l.gK.model('SearchHistoryPage', { items: l.gK.array(ew.jU) }), P.pl, P.XT).actions((e) => ({
                    reset() {
                        e.destroyItems([e.items]);
                    },
                })),
                eV = l.gK
                    .model('SearchHistory', { loadingState: l.gK.enumeration(Object.values(u.GuX)), shouldUpdateHistory: l.gK.optional(l.gK.boolean, !1) })
                    .views((e) => ({
                        get hasCleared() {
                            return e.loadingState === u.GuX.RESOLVE;
                        },
                    }))
                    .actions((e) => ({
                        setShouldUpdateHistory(t) {
                            e.shouldUpdateHistory = t;
                        },
                        clear: (0, l.L3)(function* () {
                            if (!(0, l._n)(e)) return;
                            let { user: t } = (0, l.Zn)(e),
                                { usersResource: a, modelActionsLogger: i } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING && t.account.data.uid)
                                try {
                                    (e.loadingState = u.GuX.PENDING), yield a.clearSearchHistory({ userId: t.account.data.uid }), (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    i.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        reset() {
                            e.loadingState = u.GuX.IDLE;
                        },
                    })),
                eW = l.gK
                    .compose(
                        l.gK.model('SearchPage', {
                            searchCorrectedText: l.gK.maybeNull(l.gK.string),
                            searchRequestId: l.gK.optional(l.gK.string, ''),
                            bestResults: l.gK.array(ew.xo),
                            historyPage: eB,
                            mixes: eR.YM,
                            landing: p.Ju,
                            history: eV,
                            filters: l.gK.maybeNull(l.gK.array(ew.k1)),
                            pagesLoader: (0, P.Ij)(ew.jU, { useAppendMode: !0 }),
                        }),
                        P.pl,
                        P.XT,
                    )
                    .views((e) => ({
                        get isHistoryShimmerVisible() {
                            return e.historyPage.isLoading || e.historyPage.isRejected;
                        },
                        get isHistoryLoading() {
                            return e.historyPage.isLoading;
                        },
                        get isHistoryReady() {
                            return e.historyPage.isNeededToLoad;
                        },
                        get isEmptyHistory() {
                            return !e.historyPage.items.length && e.historyPage.isResolved;
                        },
                        get isShimmerVisible() {
                            return e.isLoading || e.isRejected;
                        },
                        get isEmpty() {
                            return e.pagesLoader.isSomePageResolved && e.pagesLoader.isEmpty && 0 === e.bestResults.length;
                        },
                        filterPosition(t) {
                            var a, i;
                            return (null != (i = null == (a = e.filters) ? void 0 : a.findIndex((e) => e.id === t)) ? i : 0) + 1;
                        },
                        get totalCount() {
                            var t, a;
                            return null != (a = null == (t = e.pagesLoader.pager) ? void 0 : t.total) ? a : 0;
                        },
                    }))
                    .actions((e) => ({
                        getSearchResults: (0, l.L3)(function* (t) {
                            let { text: a, filter: i, page: r = 0 } = t;
                            if (r > 0 && !e.pagesLoader.isPageNeedToLoad(r)) return;
                            let { searchResource: s } = (0, l._$)(e),
                                {
                                    settings: { isMobile: n },
                                    experiments: o,
                                } = (0, l.Zn)(e),
                                d = o.checkExperiment(u.zal.WebNextSearchConcerts, 'on'),
                                c = i === eN.$.TOP;
                            try {
                                var h;
                                (e.loadingState = u.GuX.PENDING), e.pagesLoader.setPageState(r, u.GuX.PENDING);
                                let t = yield s.getInstantMixedSearch({
                                    text: a,
                                    type: ((e, t) => {
                                        let { withClips: a, withConcerts: i } = t,
                                            r = [...eF];
                                        return (
                                            e === eN.$.TOP && (r = r.filter((e) => e !== eM.n.UGC_TRACK)),
                                            a || (r = r.filter((e) => e !== eM.n.CLIP)),
                                            i || (r = r.filter((e) => e !== eM.n.CONCERT)),
                                            r
                                        );
                                    })(i, { withClips: !n, withConcerts: d }),
                                    filter: c ? void 0 : i,
                                    withLikesCount: !0,
                                    page: r,
                                    pageSize: ew.T_,
                                    withBestResults: c,
                                });
                                t.misspellResult && (e.searchCorrectedText = t.misspellResult);
                                let o = [];
                                t.results &&
                                    t.results.length > 0 &&
                                    ((o = t.results.map((e) => {
                                        switch (e.type) {
                                            case eM.n.ALBUM:
                                                return { type: eM.n.ALBUM, data: (0, v.pp)(e.album) };
                                            case eM.n.ARTIST:
                                                return { type: eM.n.ARTIST, data: (0, _.dM)(e.artist) };
                                            case eM.n.PLAYLIST:
                                                return { type: eM.n.PLAYLIST, data: (0, L.Ew)({ ...e.playlist, artists: [] }) };
                                            case eM.n.UGC_TRACK:
                                                return { type: eM.n.UGC_TRACK, data: (0, M.or)(e.track) };
                                            case eM.n.TRACK:
                                                return { type: eM.n.TRACK, data: (0, M.vU)(e.track) };
                                            case eM.n.WAVE:
                                                return { type: eM.n.WAVE, data: eG(e) };
                                            case eM.n.PODCAST:
                                                return { type: eM.n.PODCAST, data: (0, v.pp)(e.podcast) };
                                            case eM.n.CLIP:
                                                return { type: eM.n.CLIP, data: (0, C.i$)(e.clip) };
                                            case eM.n.PODCAST_EPISODE:
                                                return { type: eM.n.PODCAST_EPISODE, data: (0, M.vU)(e.podcast_episode) };
                                            case eM.n.CONCERT:
                                                return { type: eM.n.CONCERT, data: (0, eU.ho)(e.concert.concert, e.concert.minPrice) };
                                        }
                                    })),
                                    (e.searchRequestId = t.searchRequestId)),
                                    t.bestResults &&
                                        t.bestResults.length > 0 &&
                                        (e.bestResults = (0, l.wg)(
                                            t.bestResults
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case ej.r.ALBUM:
                                                            return {
                                                                type: ej.r.ALBUM,
                                                                data: (0, v.sK)({
                                                                    album: e.best_result_album.album,
                                                                    artists: e.best_result_album.artists,
                                                                    trailer: e.best_result_album.trailer,
                                                                }),
                                                            };
                                                        case ej.r.PLAYLIST:
                                                            return {
                                                                type: ej.r.PLAYLIST,
                                                                data: (0, L.bk)({
                                                                    playlist: e.best_result_playlist.playlist,
                                                                    likesCount: e.best_result_playlist.likesCount,
                                                                    tracksCount: e.best_result_playlist.trackCount,
                                                                    trailer: e.best_result_playlist.trailer,
                                                                }),
                                                            };
                                                        case ej.r.RECENT_RELEASE:
                                                            return {
                                                                type: ej.r.RECENT_RELEASE,
                                                                data: (0, v.sK)({
                                                                    album: e.best_result_recent_release.album,
                                                                    artists: e.best_result_recent_release.artists,
                                                                    trailer: e.best_result_recent_release.trailer,
                                                                }),
                                                            };
                                                        case ej.r.WAVE:
                                                            return { type: ej.r.WAVE, data: (0, eI.er)(e.best_result_wave) };
                                                        case ej.r.ARTIST:
                                                            return {
                                                                type: ej.r.ARTIST,
                                                                data: (0, _.as)({
                                                                    artist: e.best_result_artist.artist,
                                                                    trailer: e.best_result_artist.trailer,
                                                                    likesCount: e.best_result_artist.likesCount,
                                                                }),
                                                            };
                                                        case ej.r.UPCOMING:
                                                            return { type: ej.r.UPCOMING, data: (0, v.lO)(e.best_result_upcoming) };
                                                        case ej.r.CONCERT:
                                                            return { type: ej.r.CONCERT, data: (0, eU.oP)(e.best_result_concert) };
                                                        case ej.r.PODCAST:
                                                            return {
                                                                type: ej.r.PODCAST,
                                                                data: (0, v.sK)({ album: e.best_result_podcast.album, likesCount: e.best_result_podcast.likesCount }),
                                                            };
                                                        case ej.r.PODCAST_EPISODE:
                                                            return { type: ej.r.PODCAST_EPISODE, data: (0, M.vU)(e.best_result_podcast_episode) };
                                                        case ej.r.OVERVIEW:
                                                            return { type: ej.r.OVERVIEW, data: (0, eX.tm)(e.best_result_overview) };
                                                        case ej.r.NON_MUSIC:
                                                            return {
                                                                type: ej.r.NON_MUSIC,
                                                                data: (0, v.sK)({
                                                                    album: e.best_result_non_music.album,
                                                                    artists: e.best_result_non_music.artists,
                                                                    releaseYear: e.best_result_non_music.releaseYear,
                                                                }),
                                                            };
                                                        case ej.r.TRACK:
                                                            return { type: ej.r.TRACK, data: (0, M.vU)(e.best_result_track) };
                                                        case ej.r.CLIP:
                                                            return { type: ej.r.CLIP, data: (0, C.i$)(e.best_result_clip) };
                                                        case ej.r.BOOK_CHAPTER:
                                                            return { type: ej.r.BOOK_CHAPTER, data: (0, M.vU)(e.best_result_book_chapter) };
                                                    }
                                                })
                                                .filter((e) => e),
                                        )),
                                    t.filters && t.filters.length > 0 && (e.filters = (0, l.wg)(t.filters)),
                                    e.pagesLoader.setItems(o, {
                                        page: r,
                                        pager: { page: r, perPage: null != (h = t.perPage) ? h : ew.T_, total: c ? ew.T_ : Math.min(t.total, ew.T) },
                                    }),
                                    (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                (e.loadingState = u.GuX.REJECT), e.pagesLoader.setItems(null, { responseStatus: u.FlZ.ERROR, page: r });
                            }
                        }),
                        getHistory: (0, l.L3)(function* (t) {
                            let { userId: a } = t;
                            if (e.historyPage.loadingState === u.GuX.PENDING) return;
                            let { usersResource: i, modelActionsLogger: r } = (0, l._$)(e);
                            try {
                                e.historyPage.loadingState = u.GuX.PENDING;
                                let t = yield i.getSearchHistory({ userId: a, supportedTypes: eO });
                                (e.historyPage.items = (0, l.wg)(t.map(eK).filter((e) => e))), (e.historyPage.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                r.error(t), (e.historyPage.loadingState = u.GuX.REJECT);
                            }
                        }),
                        clearHistory: (0, l.L3)(function* (t) {
                            let { userId: a } = t,
                                { usersResource: i, modelActionsLogger: r } = (0, l._$)(e);
                            if (e.loadingState !== u.GuX.PENDING)
                                try {
                                    (e.loadingState = u.GuX.PENDING), yield i.clearSearchHistory({ userId: a }), (e.loadingState = u.GuX.RESOLVE);
                                } catch (t) {
                                    r.error(t), (e.loadingState = u.GuX.REJECT);
                                }
                        }),
                        resetHistoryItems() {
                            e.historyPage.reset();
                        },
                        resetHistoryStateRequest() {
                            (e.historyPage.loadingState = u.GuX.IDLE), e.historyPage.reset();
                        },
                        resetResults() {
                            e.destroyItems([e.bestResults]), e.pagesLoader.reset();
                        },
                        resetSearchCorrectedText() {
                            e.searchCorrectedText = null;
                        },
                        reset() {
                            (e.searchCorrectedText = null), (e.loadingState = u.GuX.IDLE), (e.filters = null), e.destroyItems([e.bestResults]), e.pagesLoader.reset();
                        },
                        sendFeedback: (0, l.L3)(function* (t) {
                            let { searchResource: a, modelActionsLogger: i } = (0, l._$)(e);
                            try {
                                yield a.sendFeedback(t);
                            } catch (e) {
                                i.error(e);
                            }
                        }),
                    }));
            a(35183), a(43874), a(90777), a(30909);
            var eq = a(9089),
                eY = a(79952),
                eH = a(51376),
                ez = a(19020);
            let eQ = l.gK
                .model('AdvertBanners', {
                    banners: l.gK.model({
                        topAdvertBanner: P.Hp,
                        sideAdvertBanner: P.vE,
                        brandedPlaylistBanner: eH.Ab,
                        brandedPlayerBanner: ez.v,
                        brandedEntityAxeBanner: eH.vK,
                    }),
                })
                .views((e) => {
                    let t = {
                        get values() {
                            return [e.banners.topAdvertBanner, e.banners.sideAdvertBanner, e.banners.brandedPlaylistBanner, e.banners.brandedEntityAxeBanner];
                        },
                        get hasBranding() {
                            return t.values.some((e) => e.type === u.h8o.BRANDING);
                        },
                        isVisible(a) {
                            let { experiments: i } = (0, l.Zn)(e);
                            if (i.checkExperiment(u.zal.WebNextDisableAds, 'on')) return !1;
                            if (a === u.h8o.EMPTY) return !0;
                            let r = t.values.filter((e) => e.type !== u.h8o.EMPTY);
                            return a === u.h8o.DIRECT ? r.every((e) => e.type === u.h8o.DIRECT) : a !== u.h8o.CREATIVE || r.every((e) => e.type !== u.h8o.BRANDING);
                        },
                    };
                    return t;
                });
            var e$ = a(67250);
            !(function (e) {
                (e.BAR_BELOW = 'barBellow'), (e.FULLSCREEN = 'fullscreen');
            })(i || (i = {}));
            var eZ = a(88294),
                eJ = a(91803);
            let e0 = l.gK.model('CommunicationList', { barBelow: eZ.t5, modal: eJ.k8 }),
                e1 = l.gK
                    .model('Communication', { loadingState: l.gK.enumeration(Object.values(u.GuX)), list: l.gK.maybe(e0), errorStatusCode: l.gK.maybeNull(l.gK.number) })
                    .views((e) => ({
                        get withTriggersV2() {
                            let { experiments: t } = (0, l.Zn)(e);
                            return t.checkExperiment(u.zal.WebNextTriggersV2, 'on');
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, l.L3)(function* () {
                                let { dynamicPagesResource: a, modelActionsLogger: r } = (0, l._$)(e);
                                return (e.loadingState = u.GuX.RESOLVE);
                                // if (e.loadingState !== u.GuX.PENDING && e.loadingState !== u.GuX.RESOLVE)
                                //     try {
                                //         var s;
                                //         let r;
                                //         if (
                                //             (((e.loadingState = u.GuX.PENDING),
                                //             (s = r =
                                //                 e.withTriggersV2
                                //                     ? yield a.getTriggersV2({ anchorIds: Object.values(e$.v) })
                                //                     : yield a.getTriggers({ anchorIds: Object.values(e$.v) })) &&
                                //                 s.triggers &&
                                //                 Array.isArray(s.triggers) &&
                                //                 s.triggers.every(
                                //                     (e) =>
                                //                         !!(
                                //                             e &&
                                //                             'object' == typeof e &&
                                //                             'anchorId' in e &&
                                //                             'triggers' in e &&
                                //                             Array.isArray(e.triggers) &&
                                //                             e.triggers.every(
                                //                                 (e) =>
                                //                                     !!(
                                //                                         e &&
                                //                                         'object' == typeof e &&
                                //                                         'screenId' in e &&
                                //                                         'feedbackToken' in e &&
                                //                                         'data' in e &&
                                //                                         'meta' in e
                                //                                     ),
                                //                             )
                                //                         ),
                                //                 ))
                                //                 ? (e.list = ((e) => {
                                //                       let t = [],
                                //                           a = [];
                                //                       return (
                                //                           e.triggers.forEach((e) => {
                                //                               var r;
                                //                               switch (null == (r = e.triggers[0]) ? void 0 : r.meta.notificationId) {
                                //                                   case i.BAR_BELOW:
                                //                                       return void e.triggers.forEach((e) => {
                                //                                           t.push((0, eZ.S3)(e));
                                //                                       });
                                //                                   case i.FULLSCREEN:
                                //                                       return void e.triggers.forEach((e) => {
                                //                                           a.push((0, eJ.fZ)(e));
                                //                                       });
                                //                               }
                                //                           }),
                                //                           (0, l.wg)({ barBelow: { list: t }, modal: { list: a } })
                                //                       );
                                //                   })(r))
                                //                 : r &&
                                //                   r.triggers &&
                                //                   Array.isArray(r.triggers) &&
                                //                   r.triggers.every(
                                //                       (e) =>
                                //                           !!(
                                //                               e &&
                                //                               'object' == typeof e &&
                                //                               'anchorId' in e &&
                                //                               'screenId' in e &&
                                //                               'div' in e &&
                                //                               'meta' in e &&
                                //                               !('triggers' in e)
                                //                           ),
                                //                   ) &&
                                //                   (e.list = ((e) => {
                                //                       let t = [],
                                //                           a = [];
                                //                       return (
                                //                           e.triggers.forEach((e) => {
                                //                               switch (e.meta.notificationId) {
                                //                                   case i.BAR_BELOW:
                                //                                       t.push((0, eZ.S3)(e));
                                //                                       return;
                                //                                   case i.FULLSCREEN:
                                //                                       a.push((0, eJ.fZ)(e));
                                //                                       return;
                                //                               }
                                //                           }),
                                //                           (0, l.wg)({ barBelow: { list: t }, modal: { list: a } })
                                //                       );
                                //                   })(r)),
                                //             e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.RESOLVE),
                                //             !e.list)
                                //         )
                                //             return;
                                //         let { barBelow: n, modal: o } = e.list;
                                //         n.setAnchorId(e$.v.ON_START_BAR_BELOW),
                                //             n.barBelowItem && (n.show(), t.shown(n.barBelowItem.anchorId, n.barBelowItem.screenId, n.barBelowItem.feedbackToken)),
                                //             o.setAnchorId(e$.v.ON_START_FULLSCREEN),
                                //             o.modalItem && (o.open(), t.shown(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.feedbackToken));
                                //     } catch (t) {
                                //         r.error(t),
                                //             t instanceof eg.GX &&
                                //                 (t.statusCode === eg.X1.NOT_FOUND || t.statusCode === eg.X1.BAD_REQUEST) &&
                                //                 (e.errorStatusCode = eg.X1.NOT_FOUND),
                                //             e.loadingState !== u.GuX.IDLE && (e.loadingState = u.GuX.REJECT);
                                //     }
                            }),
                            shown: (0, l.L3)(function* (t, a, i) {
                                let { dynamicPagesResource: r, modelActionsLogger: s } = (0, l._$)(e);
                                try {
                                    e.withTriggersV2 && i ? yield r.shownV2({ anchorIds: [t], feedbackToken: i }) : yield r.shown({ anchorIds: [t], screenId: a });
                                } catch (e) {
                                    s.error(e);
                                }
                            }),
                            action: (0, l.L3)(function* (t, a, i, r) {
                                let { dynamicPagesResource: s, modelActionsLogger: n } = (0, l._$)(e);
                                try {
                                    e.withTriggersV2 && r
                                        ? yield s.actionV2({ anchorIds: [t], actionId: i, feedbackToken: r })
                                        : yield s.action({ anchorIds: [t], screenId: a, actionId: i });
                                } catch (e) {
                                    n.error(e);
                                }
                            }),
                        };
                        return t;
                    });
            var e3 = a(33208),
                e2 = a(54278),
                e6 = a(21514);
            let e8 = l.gK.model('ModalsModel', {
                disclaimerModal: P.qt,
                shortcutsModal: P.qt,
                aboutAppModal: P.qt,
                overviewModal: P.qt,
                ugcTrackEditModal: M.n_,
                popoverOverPlayer: P.qt,
                crackdownModal: P.qt,
                overwrittenExperimentsModal: P.qt,
                buySubscriptionModal: P.qt,
                clearMemoryModal: P.qt,
                windowSettingsModal: P.qt,
                playerSettingsModal: P.qt,
                audioSettingsModal: P.qt,
                myVibeSettingsModal: P.qt,
                appUpdatesSettingsModal: P.qt,
                scrobblersSettingsModal: P.qt,
                downloaderSettingsModal: P.qt,
                systemSettingsModal: P.qt,
                myVibeParamsSettingsModal: P.qt,
                miniPlayerSettingsModal: P.qt,
                ynisonSettingsModal: P.qt,
                lrclibSettingsModal: P.qt,
                discordRpcSettingsModal: P.qt,
                imageSliderModal: e6.J,
                promoLandingBuySubscriptionModal: P.qt,
                artistAboutModal: b.Xj,
                bestRecommedationModal: P.qt,
            });
            var e5 = a(14308),
                e4 = a(58387),
                e9 = a(82391),
                e7 = a(95373),
                te = a(37281),
                tt = a(13403),
                ta = a(98845),
                ti = a(68317),
                tr = a(7186),
                ts = a(12460);
            let tn = l.gK.model('Network', { isOffline: l.gK.optional(l.gK.boolean, !1) }),
                tl = l.gK.model('Entity', { progress: l.gK.maybe(l.gK.number), loadingState: l.gK.enumeration(Object.values(ts.DT)) }),
                to = l.gK
                    .model('Slam', { networkStatus: tn, offlineMode: l.gK.optional(l.gK.boolean, !1), tracks: l.gK.map(tl) })
                    .views((e) => {
                        let t = {
                            isTrackDownloaded: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === ts.DT.DOWNLOADED;
                            },
                            isTrackDownloading: (t) => {
                                var a;
                                return (null == (a = e.tracks.get(t)) ? void 0 : a.loadingState) === ts.DT.DOWNLOADING;
                            },
                            getTrackDownloadingProgress: (t) => {
                                var a, i;
                                return null != (i = null == (a = e.tracks.get(t)) ? void 0 : a.progress) ? i : 0;
                            },
                            isPlaylistDownloaded: (e) =>
                                e.every((e) => {
                                    let [a] = (0, W.d)(e);
                                    return !!a && t.isTrackDownloaded(a);
                                }),
                            isPlaylistDownloading: (e) =>
                                e.some((e) => {
                                    let [a] = (0, W.d)(e);
                                    return !!a && t.isTrackDownloading(a);
                                }),
                            getPlaylistDownloadingProgress: (e) =>
                                Math.floor(
                                    (e.reduce((e, a) => {
                                        let [i] = (0, W.d)(a);
                                        return i && t.isTrackDownloaded(i) ? e + 1 : e;
                                    }, 0) /
                                        e.length) *
                                        100,
                                ),
                            get isOfflineModeEnabled() {
                                if (!(0, l._n)(e)) return !1;
                                return e.offlineMode;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        setNetworkStatus: (t) => {
                            e.networkStatus = t;
                        },
                        setTrack: (t, a) => {
                            e.tracks.set(t, a);
                        },
                        setTracks: (t) => {
                            e.tracks = (0, l.wg)(t);
                        },
                        setOfflineMode: (t) => {
                            let { localStorage: a } = (0, l._$)(e);
                            (e.offlineMode = t), a.set(u.cYZ.OfflineMode, t);
                        },
                    }));
            var td = a(94968),
                tu = a(86947),
                tc = a(63930);
            !(function (e) {
                (e.PROCESSING = 'processing'), (e.PLAYABLE = 'playable');
            })(r || (r = {}));
            var th = a(54460),
                tg = a(77009);
            let tm = l.gK.model('UgcUploadCenterNotificationsPairModel', { playlist: x.$o, type: l.gK.enumeration(Object.values(tg.u)) }),
                ty = l.gK
                    .model('UgcUploadCenterNotificationsModel', { pairs: l.gK.array(tm) })
                    .views((e) => ({ isNotificationExists: (t, a) => e.pairs.some((e) => e.playlist.kind === t && e.type === a) }))
                    .actions((e) => {
                        let t = {
                            addNotification(t, a) {
                                e.pairs.push({ playlist: (0, tc.HO)(t), type: a });
                            },
                            addNonexistentNotification(a, i) {
                                e.isNotificationExists(a.kind, i) || t.addNotification(a, i);
                            },
                            showAllNotifications() {
                                let t = (0, tc.HO)(e.pairs);
                                return (e.pairs = (0, l.wg)([])), t;
                            },
                        };
                        return t;
                    }),
                tp = l.gK.model('UgcUploadCenterTrackPlaylistPair', { playlist: x.$o, file: th.vz }),
                tv = l.gK
                    .model('UgcUploadCenterModel', { tracks: l.gK.array(tp), notifications: ty, checkProcessingTracksAttempts: l.gK.number })
                    .views((e) => ({
                        getUploadingTracksByPlaylistKind: (t) => (t ? e.tracks.filter((e) => e.playlist.kind === t).map((e) => e.file) : []),
                        getTracksByLoadingState: (t) => e.tracks.filter((e) => e.file.loadingState === t).map((e) => e.file),
                        get idleTracks() {
                            return this.getTracksByLoadingState(th.pK.IDLE);
                        },
                        get preparingTracks() {
                            return this.getTracksByLoadingState(th.pK.PREPARE);
                        },
                        get uploadingTracks() {
                            return this.getTracksByLoadingState(th.pK.UPLOADING);
                        },
                        get processingTracks() {
                            return this.getTracksByLoadingState(th.pK.PROCESSING);
                        },
                        get hasTracksInUploadingState() {
                            return this.preparingTracks.length + this.uploadingTracks.length > 0;
                        },
                        get shouldCheckProcessingTracks() {
                            return e.checkProcessingTracksAttempts < 25 && this.processingTracks.length > 0;
                        },
                        getPlaylistByKind(t) {
                            var a;
                            return null == (a = e.tracks.find((e) => e.playlist.kind === t)) ? void 0 : a.playlist;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            appendFiles(t, a) {
                                if (
                                    (t.forEach((t) => {
                                        if (t.size > 0x19000000) return void e.notifications.addNonexistentNotification(a, tg.u.FILE_TOO_LARGE);
                                        let i = th.vz.create({ loadingState: th.pK.IDLE, playlistKind: a.kind });
                                        i.setFile(t);
                                        let r = tp.create({ file: i, playlist: (0, tc.HO)(a) });
                                        e.tracks.unshift(r);
                                    }),
                                    !(0, l._n)(e))
                                )
                                    return;
                                let { playlist: i } = (0, l.Zn)(e);
                                i.search.setText(''), i.search.reset(), this.runUploadTracksQueue();
                            },
                            async runUploadTracksQueue() {
                                let a = e.idleTracks;
                                if (a.length && !e.hasTracksInUploadingState) {
                                    let i = a[a.length - 1];
                                    i &&
                                        (await i.runUpload(),
                                        i.loadingState === th.pK.REJECT &&
                                            i.errorReason === th.oQ.TOO_MANY_FILES &&
                                            ((e.tracks = (0, l.wg)([])), t.addNotificationForPlaylistKind(i.playlistKind, tg.u.TOO_MANY_FILES)),
                                        t.checkNotifications()),
                                        t.setCheckProcessingTracksAttempts(0),
                                        t.runUploadTracksQueue();
                                }
                            },
                            checkProcessingTracks: (0, l.L3)(function* () {
                                let { tracksResource: a, modelActionsLogger: i } = (0, l._$)(e),
                                    s = [];
                                if (e.checkProcessingTracksAttempts >= 25) return null;
                                t.setCheckProcessingTracksAttempts(e.checkProcessingTracksAttempts + 1);
                                try {
                                    let t = e.processingTracks.map((e) => e.trackId).filter((e) => !!e);
                                    if (!t.length) return null;
                                    let i = yield a.getTracksMeta({ trackIds: t, withProgress: !0 });
                                    null == i ||
                                        i.forEach((t) => {
                                            let a = e.tracks.find((e) => e.file.trackId === t.id && t.state === r.PLAYABLE);
                                            a && ((a.file.loadingState = th.pK.RESOLVE), a.file.trackId && s.push(a.file.trackId));
                                        });
                                } catch (e) {
                                    i.error(e);
                                }
                                return t.checkNotifications(s), t.moveTracksFromUploadCenterToPlaylist(), null;
                            }),
                            moveTracksFromUploadCenterToPlaylist() {
                                var t;
                                if (!(0, l._n)(e)) return;
                                let { playlist: a } = (0, l.Zn)(e);
                                (null == (t = a.meta) ? void 0 : t.kind) &&
                                    e.tracks.find((e) => {
                                        var t;
                                        return e.file.loadingState === th.pK.RESOLVE && e.playlist.kind === (null == (t = a.meta) ? void 0 : t.kind);
                                    }) &&
                                    a.refreshTracks(),
                                    (e.tracks = (0, l.wg)(e.tracks.filter((e) => e.file.loadingState !== th.pK.RESOLVE)));
                            },
                            setCheckProcessingTracksAttempts(t) {
                                e.checkProcessingTracksAttempts = t;
                            },
                            clearCancelledUploads() {
                                e.tracks = (0, l.wg)(e.tracks.filter((e) => e.file.loadingState !== th.pK.CANCELLED));
                            },
                            checkNotifications(a) {
                                let i = new Set();
                                e.tracks.forEach((e) => i.add(e.playlist.kind)),
                                    i.forEach((i) => {
                                        let r = e.getUploadingTracksByPlaylistKind(i);
                                        if (!(!r.length || r.some((e) => e.loadingState !== th.pK.RESOLVE && e.loadingState !== th.pK.REJECT)))
                                            if (r.some((e) => e.loadingState === th.pK.REJECT)) {
                                                let s = !0;
                                                if (a && a.length) {
                                                    let t = r.map((e) => e.trackId).filter((e) => e),
                                                        i = (0, td.A)(t, a, tu.A);
                                                    i.length &&
                                                        (s = i
                                                            .map((t) => e.tracks.find((e) => e.file.trackId === t))
                                                            .some((e) => (null == e ? void 0 : e.file.loadingState) === th.pK.REJECT));
                                                }
                                                s && t.addNotificationForPlaylistKind(i, tg.u.UNKNOWN_ERROR);
                                            } else t.addNotificationForPlaylistKind(i, tg.u.SUCCESS);
                                    });
                            },
                            addNotificationForPlaylistKind(t, a) {
                                let i = e.getPlaylistByKind(t);
                                i && e.notifications.addNonexistentNotification(i, a);
                            },
                        };
                        return t;
                    });
            a(85827);
            var tS = a(16020);
            let tP = l.gK
                    .model('DesktopPaywallModel')
                    .volatile(() => ({ crackdownTimeoutId: null }))
                    .views((e) => {
                        let t = {
                            get isPaywallOpen() {
                                let { paywall: t } = (0, l.Zn)(e);
                                return t.modal.isOpened;
                            },
                            get intervalMsOnEnter() {
                                var a;
                                let { experiments: t } = (0, l.Zn)(e),
                                    i = null == (a = t.getExperiment(u.zal.WebNextDesktopPaywallInterval)) ? void 0 : a.value.interval;
                                if (Number.isNaN(i)) return 2592e5;
                                return i;
                            },
                            get intervalMsCrackdown() {
                                var i;
                                let { experiments: t } = (0, l.Zn)(e),
                                    a = null == (i = t.getExperiment(u.zal.WebNextPaywallCrackdownInterval)) ? void 0 : i.value.interval;
                                if (Number.isNaN(a)) return 9e5;
                                return a;
                            },
                            get shouldShowOnEnter() {
                                var r, s;
                                let { settings: a } = (0, l.Zn)(e);
                                if (null == (r = a.browserInfo) ? void 0 : r.isMobile) return !1;
                                let { localStorage: i } = (0, l._$)(e),
                                    n = null == (s = i.get(u.cYZ.DesktopPaywall)) ? void 0 : s.lastOnLoadShowDate;
                                if (void 0 === n) return !0;
                                return new Date(n).getTime() < Date.now() - t.intervalMsOnEnter;
                            },
                            get isReadyToShowCrackdown() {
                                if (this.isPaywallOpen) return !1;
                                let {
                                    paymentWidgetModal: t,
                                    modals: { crackdownModal: a },
                                } = (0, l.Zn)(e);
                                if (t.modal.isOpened || a.isOpened) return !1;
                                return !0;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        showPaywall() {
                            let { paywall: t, settings: a } = (0, l.Zn)(e),
                                { localStorage: i } = (0, l._$)(e);
                            a.isMobile;
                        },
                        clearCrackdownTimeout() {
                            null !== e.crackdownTimeoutId && (clearTimeout(e.crackdownTimeoutId), (e.crackdownTimeoutId = null));
                        },
                        startCrackdownTimeout() {
                            let { paywall: t, settings: a, experiments: i } = (0, l.Zn)(e);
                            a.isMobile;
                        },
                    })),
                tE = l.gK.model({ text: l.gK.string, buttonText: l.gK.string, href: l.gK.string }),
                tf = l.gK
                    .compose(l.gK.model('RedAlert', { data: l.gK.maybeNull(tE) }), P.XT)
                    .views((e) => ({
                        get isVisible() {
                            let { settings: t } = (0, l.Zn)(e);
                            return t.layout !== u.u40.Mobile && !!e.data;
                        },
                        get text() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.text;
                        },
                        get buttonText() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.buttonText;
                        },
                        get href() {
                            if (null === e.data) throw Error('Missing data');
                            return e.data.href;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, l.L3)(function* () {
                            if (e.loadingState === u.GuX.PENDING) return;
                            let { user: t } = (0, l.Zn)(e),
                                { redAlertResource: a, modelActionsLogger: i } = (0, l._$)(e);
                            if (!t.isAuthorized) {
                                e.loadingState = u.GuX.IDLE;
                                return;
                            }
                            e.loadingState = u.GuX.PENDING;
                            try {
                                let t = yield a.getRedAlerts({ service: 'music', client: 'music-web', platform: 'web' });
                                (e.data = ((e) => {
                                    let t = e.alerts.find((e) => {
                                        let { id: t } = e;
                                        return 'music-grace' === t;
                                    });
                                    return void 0 === t ? null : (0, l.wg)({ text: t.texts['bar-text'], buttonText: t.texts['bar-button-text'], href: t.clickUrl });
                                })(t)),
                                    (e.loadingState = u.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), (e.loadingState = u.GuX.REJECT);
                            }
                        }),
                    }));
            var tb = a(92830),
                t_ = a(49320);
            let tI = l.gK.model('Root', {
                    experiments: P.YL,
                    user: t_.Fv,
                    wizard: ta.H,
                    collection: ei,
                    disclaimersDictionary: P.CA,
                    main: ef,
                    settings: P.dA,
                    currentClipInfo: C.$d,
                    currentTrackInfo: M.UU,
                    album: el.MH,
                    promolanding: el.Wh,
                    artist: eo.E,
                    library: P.br,
                    sonataState: q.bG,
                    playlist: eD.Pn,
                    albumCPA: el.dx,
                    slides: tb.M1,
                    vibe: te.D7,
                    search: eW,
                    vibeSettings: tS.LL,
                    pinsCollection: e5._1,
                    genre: ey.G8,
                    genres: ep.Zt,
                    mixes: eR.YM,
                    myMusic: eT,
                    tag: eq.vV,
                    chart: ed.vB,
                    post: ex.VQ,
                    landingBlockEntities: p.hn,
                    contextMenuPlaylists: N,
                    musicHistory: ek,
                    createPlaylist: x.Co,
                    location: P.FN,
                    nonMusic: eA.rN,
                    disclaimerModalState: P.xE,
                    communication: e1,
                    trailer: e7.v,
                    modals: e8,
                    landing: p.Ju,
                    fullscreenPlayer: e9.uZ,
                    fullscreenVideoPlayer: tt.bg,
                    releaseNotes: ti._o,
                    trackLyrics: M.DP,
                    ugcUploadCenter: tv,
                    paymentWidgetModal: es.bo,
                    offers: P.Fr,
                    quality: e9.OK,
                    kids: ev.GY,
                    slam: to,
                    favoriteTracks: em,
                    advert: e9.kn,
                    track: eY.qQ,
                    continueListen: e3.mK,
                    playlistPersonal: eL.Hj,
                    familyInvite: er.J4,
                    redAlert: tf,
                    shareIframe: tr.D,
                    paywall: e4.Sz,
                    downloadMobileApp: e2.A,
                    advertBanners: eQ,
                    label: eS.X,
                    desktopPaywall: tP,
                    concerts: ec.cw,
                    concertsDetails: eh._,
                    concert: eu.Bd,
                    vibeWheel: te.Hn,
                }),
                tk = (e, t) => tI.create(e, t);
            var tC = a(98388);
            let tT = [
                'settings',
                'sonataState',
                'offers',
                'modals',
                'shareIframe',
                'paywall',
                'downloadMobileApp',
                'disclaimerModalState',
                'fullscreenPlayer',
                'fullscreenVideoPlayer',
                'advertBanners',
                'redAlert',
                'communication',
                'desktopPaywall',
            ];
            (0, n.eO)(!1);
            let tA = (e) => {
                    let { nonce: t, snapshotsRef: a } = e;
                    (0, d.useContext)(o.ServerInsertedHTMLContext);
                },
                tD = (e) => {
                    let { children: t, nonce: a } = e,
                        i = (0, d.useRef)([]),
                        r = (0, u.Yx9)(),
                        [n] = (0, d.useState)(() => {
                            var e;
                            return (null == (e = window.__STATE_SNAPSHOT__) ? void 0 : e.length)
                                ? tk(window.__STATE_SNAPSHOT__[window.__STATE_SNAPSHOT__.length - 1], r)
                                : tk(en, r);
                        });
                    return (
                        (0, d.useLayoutEffect)(() => {
                            function e() {
                                var e;
                                let t = null == (e = window.__STATE_SNAPSHOT__) ? void 0 : e[window.__STATE_SNAPSHOT__.length - 1];
                                t &&
                                    (0, l.Nh)(
                                        n,
                                        tT.reduce((e, t) => ((e[t] = n[t]), e), (0, tC.A)(t)),
                                    ),
                                    delete window.__STATE_SNAPSHOT__;
                            }
                            return e(), window.addEventListener('yMusicStateSnapshotUpdated', e), () => window.removeEventListener('yMusicStateSnapshotUpdated', e);
                        }, [n]),
                        (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tA, { nonce: a, snapshotsRef: i }), (0, s.jsx)(u.PdQ.Provider, { value: n, children: t })] })
                    );
                };
        },
        56440: (e, t, a) => {
            'use strict';
            a.d(t, { TagPage: () => v });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(97800),
                u = a(82644),
                c = a(33276),
                h = a(83909),
                g = a(83252),
                m = a(80585),
                y = a(25522),
                p = a.n(y);
            let v = (0, s.PA)((e) => {
                var t, a, s;
                let { tagId: y } = e,
                    {
                        tag: v,
                        settings: { isMobile: S },
                    } = (0, g.Pjs)(),
                    { formatMessage: P } = (0, o.A)(),
                    { contentScrollRef: E, setContentScrollRef: f } = (0, g.gKY)(),
                    b = (0, g.W6M)();
                y || (0, n.notFound)();
                let _ = (0, l.useCallback)(
                    (e) => {
                        v.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [v],
                );
                v.isNotFound && (0, n.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            v.reset();
                        },
                        [v],
                    );
                let I = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(m.A, { children: (0, i.jsx)(m.wi, { className: p().footer }) }) }), []);
                return ((0, g.Jzs)(v.isResolved),
                (0, g.XcE)(v.pagesLoader, _),
                v.isNeededToLoad && (0, l.use)(v.getTag({ id: y, page: 0, pageSize: 20 })),
                v.isSomethingWrong)
                    ? (0, i.jsx)(u.w, {})
                    : (0, i.jsx)(g.nVz, {
                          pageId: g._Q$.TAG,
                          children: (0, i.jsx)(c.hO, {
                              scrollElement: E,
                              outerTitle: v.title,
                              children: (0, i.jsxs)('div', {
                                  className: p().root,
                                  children: [
                                      (0, i.jsx)(m.Y9, {
                                          variant: m.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: b.canBack,
                                          children: (0, i.jsx)(d.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: v.title }),
                                      }),
                                      (0, i.jsx)(m.$$, {
                                          className: (0, r.$)(p().scrollContainer, p().important),
                                          customComponents: I,
                                          itemContentCallback: (e) => {
                                              let t = v.playlists[e],
                                                  a = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.playlist' }) });
                                              return t ? (0, i.jsx)(h.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, i.jsx)(m.Vt, { 'aria-label': a });
                                          },
                                          totalCount: null != (a = null == v || null == (t = v.pagesLoader.pager) ? void 0 : t.total) ? a : 0,
                                          onGetDataByPage: _,
                                          pageSize: 20,
                                          totalRequests: null != (s = null == v ? void 0 : v.pagesLoader.requestsCount) ? s : 0,
                                          listClassName: p().content,
                                          itemClassName: p().item,
                                          handleRef: f,
                                          context: { listAriaLabel: P({ id: 'mixes.albums-list' }, { genreName: v.title || '' }) },
                                          isMobileLayout: S,
                                          useWindowScroll: S,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        57390: (e, t, a) => {
            'use strict';
            a.d(t, { vB: () => h, t6: () => g.ChartPodcastsPage });
            var i = a(83252),
                r = a(93064),
                s = a(14287),
                n = a(80156),
                l = a(26433);
            let o = r.gK
                .compose(
                    r.gK.model('ChartPodcastsPage', { title: r.gK.maybeNull(r.gK.string), items: r.gK.array(n.JC), errorStatusCode: r.gK.maybeNull(r.gK.number) }),
                    l.pl,
                    l.XT,
                )
                .views((e) => {
                    let t = {
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                        get isNotFound() {
                            var a;
                            let t = e.isResolved && !(null == (a = e.items) ? void 0 : a.length),
                                r = e.errorStatusCode === s.X1.NOT_FOUND || e.errorStatusCode === s.X1.BAD_REQUEST;
                            return (e.loadingState === i.GuX.REJECT && r) || t;
                        },
                        get isSomethingWrong() {
                            return e.isRejected && !t.isNotFound;
                        },
                    };
                    return t;
                })
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t) {
                        let { chartResource: a, modelActionsLogger: l } = (0, r._$)(e);
                        if (e.loadingState !== i.GuX.PENDING)
                            try {
                                let s;
                                (e.loadingState = i.GuX.PENDING),
                                    (e.title = (s = t ? yield a.getChartPodcastsCategory({ categoryId: t }) : yield a.getChartPodcasts()).title),
                                    s.chartPositions && (e.items = (0, r.wg)(s.chartPositions.map((e) => (0, n.bl)(e.album, e.chartPosition)))),
                                    e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof s.GX && (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) && (e.errorStatusCode = s.X1.NOT_FOUND),
                                    e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = i.GuX.IDLE), (e.title = null), (e.errorStatusCode = null), e.destroyItems([e.items]);
                    },
                }));
            var d = a(21365);
            let u = r.gK.model('ChartPagePlaylistModel', { uuid: r.gK.string, uid: r.gK.number, kind: r.gK.number }),
                c = r.gK
                    .compose(r.gK.model('ChartTracksPage', { title: r.gK.maybeNull(r.gK.string), playlistMeta: r.gK.maybeNull(u), items: r.gK.array(d.vj) }), l.XT)
                    .views((e) => ({
                        get isLoading() {
                            return e.isNeededToLoad || e.loadingState === i.GuX.PENDING;
                        },
                    }))
                    .actions((e) => ({
                        getTracks: (0, r.L3)(function* () {
                            let { landing3Resource: t, modelActionsLogger: a } = (0, r._$)(e);
                            if (e.loadingState !== i.GuX.PENDING)
                                try {
                                    e.loadingState = i.GuX.PENDING;
                                    let a = yield t.getChart();
                                    (e.title = a.chart.title),
                                        (e.playlistMeta = (0, r.wg)({ uuid: a.chart.playlistUuid, uid: a.chart.uid, kind: a.chart.kind })),
                                        (e.items = (0, r.wg)(a.chart.tracks.map((e) => (0, d.bV)(e.track, e.chart)))),
                                        e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.RESOLVE);
                                } catch (t) {
                                    a.error(t), e.loadingState !== i.GuX.IDLE && (e.loadingState = i.GuX.REJECT);
                                }
                        }),
                    })),
                h = r.gK.model('ChartPageModel', { tracksSubPage: c, podcastsSubPage: o });
            a(78208);
            var g = a(71108);
            a(51760);
        },
        58055: (e, t, a) => {
            'use strict';
            a.d(t, { DeeplinkInitializer: () => d });
            var i = a(28303),
                r = a(97396),
                s = a(61910),
                n = a(62443),
                l = a(83252);
            let o = [l.K3F.DEEPLINK, l.K3F.SEEDS, l.K3F.STATION_ID, l.K3F.OPEN_PLAYER, l.K3F.SCREEN],
                d = (0, i.PA)(
                    () => (
                        (() => {
                            let { fullscreenPlayer: e, sonataState: t, user: a, location: i } = (0, l.Pjs)(),
                                d = (0, r.useSearchParams)(),
                                u = (0, l.XJ9)(),
                                c = d.get(l.K3F.SEEDS),
                                h = d.get(l.K3F.STATION_ID),
                                { isFreemium: g } = (0, l.XCI)(),
                                { state: m, toggleTrue: y } = (0, n.e)(!1),
                                p = (0, s.useMemo)(() => {
                                    let e = c ? c.split(',') : [];
                                    return h && e.unshift(h), e;
                                }, [c, h]),
                                { togglePlay: v } = (0, l.B0S)({ seeds: p, pageIdForFrom: l._Q$.RADIO, blockIdForFrom: p.join('_') });
                            (0, s.useEffect)(() => {
                                if (m) {
                                    let e = new URL(window.location.href);
                                    o.forEach((t) => e.searchParams.delete(t)), u(e.toString()), i.setHref(window.location.href);
                                }
                            }, [i, u, m, i.href]),
                                (0, s.useEffect)(() => {
                                    if (d.get(l.K3F.DEEPLINK) === l.vEM.PLAY_VIBE) {
                                        if (!a.isAuthorized || g) return void y();
                                        t.setShouldApplyYnisonState(!1), v(), 'true' === d.get(l.K3F.OPEN_PLAYER) && e.modal.open(), y();
                                    }
                                    return () => {
                                        t.setShouldApplyYnisonState(!0);
                                    };
                                }, [e.modal, g, d, y, t, v, a.isAuthorized]);
                        })(),
                        null
                    ),
                );
        },
        58699: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { BuySubscriptionParamsInitializer: () => n });
            var i = a(61910),
                r = a(83252);
            let s = { TARGET: 'target', COMMUNICATION_ID: 'communication_id', CAMPAIGN_ID: 'campaign_id' },
                n = () => {
                    let e = (0, r.NFA)(),
                        t = (0, r.XJ9)();
                    return (
                        (0, i.useLayoutEffect)(() => {
                            let a = e.get(r.vHc),
                                i = (0, r.qne)(s.TARGET),
                                n = (0, r.qne)(s.COMMUNICATION_ID),
                                l = (0, r.qne)(s.CAMPAIGN_ID);
                            if (!(i || n || l)) return;
                            a.set(r.cYZ.BuySubscriptionParams, { target: i, communicationId: n, campaignId: l });
                            let o = (0, r.jrm)();
                            if (null === o) return;
                            o.delete(s.TARGET), o.delete(s.COMMUNICATION_ID), o.delete(s.CAMPAIGN_ID);
                            let d = new URL(window.location.href);
                            (d.search = o.toString()), t(d.toString());
                        }, [e, t]),
                        null
                    );
                };
        },
        60463: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var i = a(5693);
            function r(e) {
                return (null == e ? void 0 : e.data.type) === i.R.SmartPreview;
            }
        },
        61336: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        61777: (e, t, a) => {
            'use strict';
            a.d(t, { FamilyInviteInitializer: () => l });
            var i = a(28303),
                r = a(61910),
                s = a(66498),
                n = a(83252);
            let l = (0, i.PA)(() => {
                let e = (0, s.hj)(),
                    {
                        user: t,
                        familyInvite: { start: a },
                    } = (0, n.Pjs)();
                (0, r.useEffect)(() => {
                    e.shouldShowFamilyInvite && e.inviteId && (t.isAuthorized && e.clear(), a(e.inviteId));
                }, [t.isAuthorized, e, a]);
            });
        },
        63118: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        65381: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPersonalPage: () => d });
            var i = a(54486),
                r = a(28303),
                s = a(97396),
                n = a(61910),
                l = a(83252),
                o = a(95657);
            let d = (0, r.PA)((e) => {
                let { params: t, searchParams: a } = e,
                    { playlistPersonal: r } = (0, l.Pjs)(),
                    d = r.getUrl(a);
                if (
                    ((0, n.useEffect)(() => {
                        r.isNeededToLoad && r.getPlaylistPersonalDetails(t.playlistId);
                    }, [r.isNeededToLoad, t.playlistId, r]),
                    (0, n.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, l.Jzs)(r.isResolved),
                    (r.isNotFound || r.isRejected) && (0, s.notFound)(),
                    r.isResolved && !r.isReady)
                )
                    return r.dummyDescription || (0, s.notFound)(), (0, i.jsx)(o.PlaylistPersonalDummyPage, {});
                r.isResolved && r.isReady && (0, s.redirect)(d);
            });
        },
        65429: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => n });
            var i = a(61910),
                r = a(97719),
                s = a(83252);
            let n = (e) => {
                let { controller: t, sonataState: a, playbackId: n, groupId: l } = e,
                    o = (0, s.eGp)(),
                    d = (0, s.NFA)(),
                    u = (0, r.d0)(),
                    c = d.get(s.ooW);
                (0, i.useEffect)(
                    () => (
                        null == t ||
                            t.addShortcutsListener(l, s.lbr.DECREASE_VOLUME, async () => {
                                let e = await (null == o ? void 0 : o.decreaseExponentVolume(0.05, n));
                                c.set(s.cYZ.YmPlayerVolume, e, { expires: 365 });
                            }),
                        null == t ||
                            t.addShortcutsListener(l, s.lbr.INCREASE_VOLUME, async () => {
                                let e = await (null == o ? void 0 : o.increaseExponentVolume(0.05, n));
                                c.set(s.cYZ.YmPlayerVolume, e, { expires: 365 });
                            }),
                        null == t ||
                            t.addShortcutsListener(l, s.lbr.TOGGLE_MUTE, async () => {
                                let e = null == o ? void 0 : o.getState(n).playerState.exponentVolume.value;
                                void 0 !== e && (await u(a, e, n));
                            }),
                        () => {
                            null == t || t.removeShortcutsListener(l, s.lbr.DECREASE_VOLUME),
                                null == t || t.removeShortcutsListener(l, s.lbr.INCREASE_VOLUME),
                                null == t || t.removeShortcutsListener(l, s.lbr.TOGGLE_MUTE);
                        }
                    ),
                    [t, n, o, c, u, a, l],
                ),
                    (0, i.useEffect)(() => {
                        if (!a.isGenerativeContext)
                            return (
                                null == t ||
                                    t.addShortcutsListener(l, s.lbr.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.getState(n).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await o.moveBackward(n));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(l, s.lbr.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == o || null == (e = o.getState(n).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == o ? void 0 : o.moveForward(n)));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(l, s.lbr.SLIDE_BACKWARD, async () => {
                                        (null == o ? void 0 : o.getState(n).playerState.progress.value.duration) && (await (null == o ? void 0 : o.slideBackward(2, n)));
                                    }),
                                null == t ||
                                    t.addShortcutsListener(l, s.lbr.SLIDE_FORWARD, async () => {
                                        (null == o ? void 0 : o.getState(n).playerState.progress.value.duration) && (await (null == o ? void 0 : o.slideForward(2, n)));
                                    }),
                                () => {
                                    null == t || t.removeShortcutsListener(l, s.lbr.MOVE_FORWARD),
                                        null == t || t.removeShortcutsListener(l, s.lbr.MOVE_BACKWARD),
                                        null == t || t.removeShortcutsListener(l, s.lbr.SLIDE_BACKWARD),
                                        null == t || t.removeShortcutsListener(l, s.lbr.SLIDE_FORWARD);
                                }
                            );
                    }, [t, o, c, a.isGenerativeContext, n, l]);
            };
        },
        65445: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { ThemeProvider: () => o });
            var i = a(54486),
                r = a(61910),
                s = a(8817),
                n = a(83252),
                l = a(80585);
            let o = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    o = (0, n.NFA)().get(n.ooW),
                    { getThemeFromStorage: d, setThemeToStorage: u } = (0, n.QDo)(o),
                    [c, h] = (0, r.useState)(() => (null != a ? a : d())),
                    g = (0, s.c)((e) => {
                        d() || a || (u(n.W3W), h(e));
                    });
                (0, r.useLayoutEffect)(() => {
                    a || (0, n.Z8R)(c);
                }, [c, a]),
                    (0, n.kgS)({ onSystemThemeChange: g }),
                    (0, r.useLayoutEffect)(() => {
                        g((0, n.VDQ)());
                    }, [g]);
                let m = (0, r.useMemo)(() => ({ theme: c, setTheme: h }), [c]);
                return (0, i.jsx)(n.Dx0.Provider, { value: m, children: (0, i.jsx)(r.Suspense, { fallback: (0, i.jsx)(l.JR, {}), children: t }) });
            };
        },
        67923: (e, t, a) => {
            'use strict';
            a.d(t, { KidsNotFoundPage: () => o });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(42421),
                l = a(83252);
            let o = (0, r.PA)(() => {
                let { kids: e } = (0, l.Pjs)();
                return (
                    (0, s.useEffect)(
                        () => () => {
                            e.landing.reset();
                        },
                        [e.landing],
                    ),
                    (0, i.jsx)(n.M, {})
                );
            });
        },
        69961: (e, t, a) => {
            'use strict';
            a.d(t, { uN: () => d.GenresPage, Zt: () => o });
            var i = a(93064),
                r = a(14287),
                s = a(30004),
                n = a(83252),
                l = a(26433);
            let o = i.gK
                .compose(
                    i.gK.model('GenresPageModel', { title: i.gK.maybeNull(i.gK.string), items: i.gK.array(s.Gc), errorStatusCode: i.gK.maybeNull(i.gK.number) }),
                    l.XT,
                )
                .views((e) => ({
                    get isLoading() {
                        return e.isNeededToLoad || e.loadingState === n.GuX.PENDING;
                    },
                    get isNotFound() {
                        let t = e.isResolved && 0 === e.items.length;
                        return e.errorStatusCode === r.X1.NOT_FOUND || t;
                    },
                }))
                .actions((e) => ({
                    getData: (0, i.L3)(function* (t) {
                        let { landing3Resource: a, modelActionsLogger: l } = (0, i._$)(e);
                        if (e.loadingState !== n.GuX.PENDING)
                            try {
                                e.loadingState = n.GuX.PENDING;
                                let l = (yield a.getMetatags({})).trees.find((e) => e.navigationId === t);
                                if (!l) {
                                    e.errorStatusCode = r.X1.NOT_FOUND;
                                    return;
                                }
                                (e.title = l.title), (e.items = (0, i.wg)(l.leaves.map(s.kc))), e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.RESOLVE);
                            } catch (t) {
                                l.error(t),
                                    t instanceof r.GX && (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) && (e.errorStatusCode = r.X1.NOT_FOUND),
                                    e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.loadingState = n.GuX.IDLE), (e.title = null), (e.items = (0, i.wg)([])), (e.errorStatusCode = null);
                    },
                }));
            a(95364);
            var d = a(26794);
        },
        71108: (e, t, a) => {
            'use strict';
            a.d(t, { ChartPodcastsPage: () => P });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(31500),
                u = a(22674),
                c = a(97800),
                h = a(82644),
                g = a(80156),
                m = a(33276),
                y = a(83252),
                p = a(80585),
                v = a(85218),
                S = a.n(v);
            let P = (0, s.PA)((e) => {
                let { categoryId: t } = e,
                    {
                        chart: { podcastsSubPage: a },
                        settings: { isMobile: s },
                    } = (0, y.Pjs)(),
                    { contentScrollRef: v, setContentScrollRef: P } = (0, y.gKY)(),
                    { formatMessage: E } = (0, o.A)(),
                    f = (0, y.W6M)(),
                    b = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: S().footer }) }) }), []),
                    _ = (0, l.useMemo)(
                        () =>
                            a.title
                                ? (0, i.jsx)(c.Heading, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: a.title })
                                : (0, i.jsx)(u.Shimmer, { className: S().shimmerTitle, radius: 'l' }),
                        [a.title],
                    );
                if (
                    ((0, y.Jzs)(a.isResolved),
                    a.isNotFound && (0, n.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                    a.isNeededToLoad && (0, l.use)(a.getData(t)),
                    a.isSomethingWrong)
                )
                    return (0, i.jsx)(h.w, {});
                let I = a.isLoading ? 20 : a.items.length;
                return (0, i.jsx)(y.nVz, {
                    pageId: t ? y._Q$.CHART_PODCASTS_CATEGORY : y._Q$.CHART_PODCASTS,
                    children: (0, i.jsx)(m.hO, {
                        scrollElement: v,
                        outerTitle: a.title,
                        children: (0, i.jsxs)('div', {
                            className: S().root,
                            ...(0, d.Am)(d.Xk.chart.CHART_PODCASTS),
                            children: [
                                (0, i.jsx)(p.Y9, { variant: p.Vw.TEXT, withForwardControl: !1, withBackwardControl: f.canBack, children: _ }),
                                (0, i.jsx)(p.$$, {
                                    className: (0, r.$)(S().scrollContainer, S().important),
                                    listClassName: S().content,
                                    customComponents: b,
                                    itemContentCallback: (e) => {
                                        let t = a.items[e],
                                            r = E({ id: 'loading-messages.entity-is-loading' }, { entityName: E({ id: 'entity-names.album' }) });
                                        return !t || a.isLoading
                                            ? (0, i.jsx)(p.Vt, { 'aria-label': r })
                                            : (0, i.jsx)(g.aX, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: P,
                                    initialItemCount: I,
                                    totalCount: I,
                                    isMobileLayout: s,
                                    useWindowScroll: s,
                                    context: { listAriaLabel: E({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        71267: (e, t, a) => {
            'use strict';
            a.d(t, { SlamProvider: () => y });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(47713),
                l = a(50389),
                o = a(87787),
                d = a(81849),
                u = a(12460),
                c = a(8817),
                h = a(84262),
                g = a(83252);
            let m = !0,
                y = (0, r.PA)((e) => {
                    var t, a, r;
                    let { children: y } = e,
                        { slam: p, user: v, experiments: S } = (0, g.Pjs)(),
                        P = (0, g.jRO)(),
                        E = (0, g.NFA)(),
                        f = E.get(g.U2_),
                        b = E.get(g.vgk),
                        _ = (0, g.gQL)(),
                        { notify: I } = (0, g.lkh)(),
                        k = (0, c.c)((e) => {
                            p.setNetworkStatus(e);
                        }),
                        C = (0, c.c)((e) => {
                            let { id: t, state: a } = e;
                            p.setTrack(t, a),
                                a.loadingState === u.DT.DOWNLOAD_FAILED &&
                                    I((0, i.jsx)(h.i, { message: (0, i.jsx)(n.A, { id: 'offline.track-download-error' }) }), { containerId: g.uQT.ERROR });
                        }),
                        T = (0, c.c)((e) => {
                            p.setTracks(e);
                        });
                    return (
                        v.account.data.uid &&
                            v.hasPlus &&
                            P.init({
                                userConfig: { uid: v.account.data.uid },
                                resources: { tracksResource: E.get(g.Ooh), getFileInfoResource: E.get(g.qTR), availabilityResource: E.get(g.$5W) },
                                downloaderVariables: { maxConcurrentDownloads: 5, getQuality: () => (0, l.i)({ productQuality: null == _ ? void 0 : _.quality.value }) },
                                featureFlags: { entities: !0 },
                                tracksControllerVariables: { requestTrackChunkSize: 100 },
                                trackDownloadTaskParams: {
                                    secretKey: E.get(g.twC).player.secretKey,
                                    transport: d.o.ENCRAW,
                                    variables: { chunkSize: 1048576, coverSize: 1e3, codecs: o.iy },
                                },
                            }),
                        (0, s.useEffect)(() => {
                            if (m) {
                                var e;
                                null == (e = P.tracksController) ||
                                    e.getTracksCount().then((e) => {
                                        let t = (0, g.f2y)(e);
                                        t && b.count({ [g.xQR.TRACKS_COUNT]: t }, g.l6e);
                                    }),
                                    (m = !1);
                            }
                        }, [b, P.tracksController]),
                        (0, s.useEffect)(() => {
                            if (void 0 !== v.puid && !S.checkExperiment(g.zal.WebNextOfflineDegradation, 'default')) {
                                var e, t;
                                let a = null == (e = S.getExperiment(g.zal.WebNextOfflineDegradation)) ? void 0 : e.group,
                                    i = ''.concat(g.cYZ.OfflineDegradation, '_').concat(v.puid),
                                    r = f.get(i);
                                a && a !== r && (null == (t = P.tracksController) || t.clearAll(), f.set(i, a));
                            }
                        }, [S, f, P, v.puid]),
                        (0, s.useEffect)(() => {
                            var e, t, a;
                            return (
                                null == (e = P.store) || e.tracks.events.on(u.je.ENTITY_CHANGED, C),
                                null == (t = P.store) || t.tracks.events.on(u.je.STATE_CHANGED, T),
                                null == (a = P.tracksController) || a.initState(),
                                () => {
                                    var e, t;
                                    null == (e = P.store) || e.tracks.events.off(u.je.ENTITY_CHANGED, C),
                                        null == (t = P.store) || t.tracks.events.off(u.je.STATE_CHANGED, T);
                                }
                            );
                        }, [C, T, null == (t = P.store) ? void 0 : t.tracks.events, P.tracksController]),
                        (0, s.useEffect)(() => {
                            var e;
                            return (
                                null == (e = P.network) || e.subscribe(k),
                                () => {
                                    var e;
                                    null == (e = P.network) || e.unsubscribe(k);
                                }
                            );
                        }, [k, P.network, null == (a = P.network) ? void 0 : a.subscribe, null == (r = P.network) ? void 0 : r.unsubscribe]),
                        (0, s.useEffect)(() => {
                            let e = (0, g.gHp)(f);
                            p.setOfflineMode(e);
                        }, [f, p]),
                        (0, i.jsx)(g.h5g.Provider, { value: P.artistsController, children: (0, i.jsx)(g.mDy.Provider, { value: P.playlistsController, children: y }) })
                    );
                });
        },
        73896: (e, t, a) => {
            'use strict';
            a.d(t, { GenreArtistsPage: () => _ });
            var i = a(54486),
                r = a(28303),
                s = a(97396),
                n = a(61910),
                l = a(43426),
                o = a(31500),
                d = a(8817),
                u = a(56231),
                c = a(97800),
                h = a(82644),
                g = a(55616),
                m = a(33276),
                y = a(24188),
                p = a(83252),
                v = a(80585),
                S = a(49811),
                P = a(45126),
                E = a(63695),
                f = a(82975),
                b = a.n(f);
            let _ = (0, r.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { artistsSubpage: r },
                    } = (0, p.Pjs)(),
                    { formatMessage: f } = (0, l.A)(),
                    { contentScrollRef: _, setContentScrollRef: I } = (0, p.gKY)(),
                    k = (0, p.W6M)(),
                    C = (0, d.c)(() => 315),
                    T = (0, d.c)(() => {
                        var e;
                        return !r.isShimmerVisible && (null == (e = r.pagesLoader.pager) ? void 0 : e.total) ? r.pagesLoader.pager.total : 30;
                    }),
                    A = (0, n.useCallback)(
                        (e) => {
                            t && r.getData({ metatagId: t, page: e, pageSize: S.c });
                        },
                        [r, t],
                    ),
                    D = (0, p.ws4)({ pageSize: S.c, callback: A });
                (0, p.XcE)(r.pagesLoader, A);
                let L = (0, d.c)((e) => {
                    let t = r.items[e],
                        a = f({ id: 'loading-messages.entity-is-loading' }, { entityName: f({ id: 'entity-names.artist' }) });
                    return t ? (0, i.jsx)(g.ao, { artist: t, contentLinesCount: 3 }, t.id) : (0, i.jsx)(v.Vt, { 'aria-label': a, round: !0, centered: !0 });
                });
                return ((0, n.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                ),
                r.isNotFound && (0, s.notFound)(),
                (0, p.Jzs)(r.isResolved),
                ((e) => {
                    (0, n.useEffect)(() => {
                        if (!e) return;
                        let t = ((e) => {
                            var t, a, i;
                            return {
                                id: '',
                                title: { title: '', fullTitle: e.fullTitle || '' },
                                artists: e.items.map((e) => ({ artist: (0, E.NE)(e), popularTracks: [] })),
                                pager: {
                                    page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                    perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                    total: (null == (i = e.pagesLoader.pager) ? void 0 : i.total) || 0,
                                },
                            };
                        })(e);
                        (0, P.i)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, p.jxB)(e);
                        });
                    }, [e]);
                })(r),
                t && r.isNeededToLoad && (0, n.use)(r.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: S.c })),
                r.isSomethingWrong)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(p.nVz, {
                          pageId: p._Q$.GENRE_ARTISTS,
                          children: (0, i.jsx)(m.hO, {
                              scrollElement: _,
                              outerTitle: r.fullTitle,
                              children: (0, i.jsxs)('div', {
                                  className: b().root,
                                  ...(0, o.Am)(o.Xk.genre.GENRE_ARTISTS_PAGE),
                                  children: [
                                      (0, i.jsx)(v.Y9, {
                                          variant: v.Vw.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: k.canBack,
                                          children: (0, i.jsx)(c.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: r.fullTitle }),
                                      }),
                                      (0, i.jsxs)(u.N, {
                                          ref: I,
                                          className: b().root,
                                          containerClassName: b().container,
                                          children: [
                                              (0, i.jsx)(y.Q$, {
                                                  maxColumnCount: 7,
                                                  count: T(),
                                                  rowGap: 16,
                                                  columnGap: 16,
                                                  getEstimateRowSize: C,
                                                  minColumnWidth: 170,
                                                  maxColumnWidth: 270,
                                                  onChangeRange: D,
                                                  renderItemByIndex: L,
                                              }),
                                              (0, i.jsx)(v.A, { children: (0, i.jsx)(v.wi, { className: b().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        75669: (e, t, a) => {
            'use strict';
            a.d(t, { KidsPage: () => E });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(61910),
                l = a(43426),
                o = a(47713),
                d = a(31500),
                u = a(6024),
                c = a(56231),
                h = a(97800),
                g = a(6664),
                m = a(82644),
                y = a(33276),
                p = a(83252),
                v = a(80585),
                S = a(27005),
                P = a.n(S);
            let E = (0, s.PA)(() => {
                let { kids: e, user: t } = (0, p.Pjs)(),
                    { formatMessage: a } = (0, l.A)(),
                    { contentScrollRef: s, setContentScrollRef: S } = (0, p.gKY)();
                (0, n.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, p.Jzs)(e.landing.isResolved);
                let E = (0, g._9)(e.landing);
                return (
                    e.landing.isNeededToLoad && (0, n.use)(e.landing.getSkeleton({ id: u.p.KIDS, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 })),
                    (0, i.jsx)(p.nVz, {
                        pageId: p._Q$.KIDS,
                        children: (0, i.jsxs)(y.hO, {
                            scrollElement: s,
                            outerTitle: a({ id: 'kids.for-kids' }),
                            children: [
                                (0, i.jsx)(v.Y9, {
                                    variant: v.Vw.TEXT,
                                    showControls: !1,
                                    children: (0, i.jsx)('div', {
                                        className: P().header,
                                        children: (0, i.jsx)(h.Heading, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            children: (0, i.jsx)(o.A, { id: 'kids.for-kids' }),
                                        }),
                                    }),
                                }),
                                (0, i.jsxs)(c.N, {
                                    className: P().root,
                                    containerClassName: P().content,
                                    ref: S,
                                    ...(0, d.Am)(d.Xk.kids.KIDS_PAGE),
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: (0, r.$)(P().landing, { [P().landing_onlyWizard]: E }),
                                            children: (0, i.jsx)(g.EA, {
                                                landing: e.landing,
                                                errorComponent: (0, i.jsx)(m.w, { className: P().error, withBackwardControl: !1 }),
                                            }),
                                        }),
                                        (0, i.jsx)(v.A, { children: (0, i.jsx)(v.wi, { className: P().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
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
        77009: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return (e.FILE_TOO_LARGE = 'FILE_TOO_LARGE'), (e.TOO_MANY_FILES = 'TOO_MANY_FILES'), (e.UNKNOWN_ERROR = 'UNKNOWN_ERROR'), (e.SUCCESS = 'SUCCESS'), e;
            })({});
        },
        77026: (e, t, a) => {
            'use strict';
            a.d(t, { PostNotFoundPage: () => n });
            var i = a(54486),
                r = a(28303),
                s = a(42421);
            let n = (0, r.PA)(() => (0, i.jsx)(s.M, {}));
        },
        77343: (e) => {
            e.exports = { root: 'ConcertsPage_root__olabl', container: 'ConcertsPage_container__qS7xA', footer: 'ConcertsPage_footer__GYRwF' };
        },
        78208: (e, t, a) => {
            'use strict';
            a.d(t, { ChartPodcastsNotFoundPage: () => o });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(42421),
                l = a(83252);
            let o = (0, r.PA)(() => {
                let {
                    chart: { podcastsSubPage: e },
                } = (0, l.Pjs)();
                return (
                    (0, s.useEffect)(() => {
                        e.reset();
                    }, []),
                    (0, i.jsx)(n.M, {})
                );
            });
        },
        79087: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        79882: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { LayoutProvider: () => v, setClientSideLayout: () => p });
            var i = a(54486),
                r = a(1365),
                s = a(28303),
                n = a(61910),
                l = a(43426),
                o = a(67648);
            let d = {
                Chrome: 105,
                ChromeMobile: 105,
                Edge: 105,
                Firefox: 104,
                MobileFirefox: 104,
                Opera: 90,
                OperaMobile: 80,
                Safari: 16,
                MobileSafari: 16,
                UCBrowser: 15,
                MSIE: 12,
                YandexBrowser: 23,
            };
            var u = a(50420),
                c = a(80585),
                h = a(90058),
                g = a.n(h);
            let m = (e) => {
                let { message: t, closeToast: a } = e;
                return (0, i.jsx)(c.$W, { className: (0, u.$)(g().root, g().important), message: t, closeToast: a });
            };
            var y = a(83252);
            let p = (e) => {
                    {
                        document.body.classList.remove('desktop'),
                            e.setLayout((0, y.Svc)(window.innerWidth)),
                            e.setIsLandscape(window.matchMedia('(orientation: landscape)').matches);
                        let t = window.screen.availHeight || window.innerHeight;
                        e.setIsMobileLandscapeHeight(t < 450);
                    }
                },
                v = (0, s.PA)((e) => {
                    let { children: t } = e,
                        { formatMessage: a } = (0, l.A)(),
                        { notify: s } = (0, y.lkh)(),
                        { settings: u } = (0, y.Pjs)(),
                        [c, h] = (0, o.d)(),
                        [g, v] = (0, o.d)(),
                        [S, P] = (0, o.d)(),
                        [E, f] = (0, o.d)(),
                        [b, _] = (0, o.d)(),
                        [I, k] = (0, o.d)(),
                        [C, T] = (0, o.d)(),
                        [A, D] = (0, o.d)(),
                        [L, x] = (0, o.d)();
                    u.layout;
                    let N = (0, n.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                p(u);
                            }, 100),
                        [u],
                    );
                    (0, n.useEffect)(() => {
                        (function (e) {
                            if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version) return !1;
                            let t = d[e.name];
                            if (!t) return !1;
                            let a = parseFloat(e.version);
                            return !Number.isNaN(a) && a < t;
                        })(u.browserInfo) &&
                            s((0, i.jsx)(m, { message: a({ id: 'warning-messages.update-your-browser' }) }), { containerId: y.uQT.IMPORTANT, single: !0 });
                    }, [a, s, u.browserInfo]),
                        (0, n.useLayoutEffect)(() => {
                            p(u);
                        }, [u]),
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', N),
                                () => {
                                    window.removeEventListener('resize', N);
                                }
                            ),
                            [N],
                        );
                    let R = (0, n.useMemo)(
                        () => ({
                            defaultLayoutRef: c,
                            contentRef: g,
                            contentRootRef: S,
                            contentScrollRef: E,
                            sideBannerRef: I,
                            playlistStickyFiltersRef: C,
                            playlistStaticFiltersRef: A,
                            compositePlayerBarRef: b,
                            paywallRef: L,
                            setContentRef: v,
                            setDefaultLayoutRef: h,
                            setContentRootRef: P,
                            setContentScrollRef: f,
                            setSideBannerRef: k,
                            setPlaylistStickyFiltersRef: T,
                            setPlaylistStaticFiltersRef: D,
                            setCompositePlayerBarRef: _,
                            setPaywallRef: x,
                        }),
                        [c, g, S, E, I, C, A, b, L, h, v, P, f, k, T, D, _, x],
                    );
                    return (0, i.jsx)(y.MQO.Provider, { value: R, children: t });
                });
        },
        80616: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { DesktopInitializer: () => l });
            var i = a(54486),
                r = a(61910),
                s = a(68317),
                n = a(83252);
            let l = () => {
                let { language: e } = (0, n.h6b)();
                {
                    let { theme: t } = (0, n.DPo)(),
                        a = (0, n.NFA)().get(n.vgk);
                    (0, s.sq)(),
                        (0, s.P4)(),
                        (0, s.bk)(),
                        (0, s.LD)(),
                        (0, s.t4)(),
                        (0, s.Fn)(),
                        (0, s.eP)(),
                        (0, s.sb)(),
                        (0, r.useEffect)(() => {
                            (0, s.M4)(e), (0, s.CA)();
                        }, [e]),
                        (0, r.useEffect)(() => {
                            let e = (0, n.HFS)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, r.useEffect)(() => {
                            t && ((0, s._E)(t), a.count(t, 'appTheme'));
                        }, [t]);
                }
                return (0, i.jsx)(s.qw, {});
            };
        },
        80986: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopPaywallInitializer: () => l });
            var i = a(28303),
                r = a(61910),
                s = a(66498),
                n = a(83252);
            let l = (0, i.PA)(() => {
                let { desktopPaywall: e, user: t } = (0, n.Pjs)(),
                    { isFreemium: a } = (0, n.XCI)(),
                    { shouldShowFamilyInvite: i } = (0, s.hj)();
                (0, r.useEffect)(() => {
                    if ((!t.isAuthorized || a) && !i)
                        return (
                            e.shouldShowOnEnter && e.showPaywall(),
                            e.startCrackdownTimeout(),
                            () => {
                                e.clearCrackdownTimeout();
                            }
                        );
                }, [e, a, i, t.isAuthorized]);
            });
        },
        81713: (e, t, a) => {
            'use strict';
            a.d(t, { BuySubscriptionInitializer: () => n });
            var i = a(28303),
                r = a(61910),
                s = a(83252);
            let n = (0, i.PA)(() => {
                let { user: e } = (0, s.Pjs)(),
                    { hasFreeUserAccess: t } = (0, s.XCI)(),
                    a = (0, s.jwr)(),
                    i = (0, s.pFh)('music', t),
                    {
                        payment: { environment: n },
                    } = (0, s.NFA)().get(s.twC),
                    l = (0, r.useRef)(new Date()),
                    o = (0, r.useCallback)(async () => {
                        let t = 'production' === n ? e.account.data.uid : void 0;
                        try {
                            await i.getData({ uid: t, page: a.page, places: a.places, widgetServiceName: a.widgetServiceName });
                        } catch (e) {}
                        l.current = new Date();
                    }, [i, n, e, a]),
                    d = (0, r.useCallback)(async () => {
                        let e = l.current.getTime() < Date.now() - 6e5;
                        'visible' === document.visibilityState && e && a.shouldFetchOffers && (await o());
                    }, [o, a.shouldFetchOffers]);
                (0, r.useEffect)(() => {
                    if (!t) return;
                    let e = new AbortController();
                    return (
                        window.addEventListener('focus', d, { signal: e.signal }),
                        () => {
                            e.abort();
                        }
                    );
                }, [t, d]);
            });
        },
        82667: (e, t, a) => {
            'use strict';
            a.d(t, { Genre: () => d });
            var i = a(54486),
                r = a(28303),
                s = a(97800),
                n = a(80585),
                l = a(89281),
                o = a.n(l);
            let d = (0, r.PA)((e) => {
                let { tag: t, title: a, subGenres: r } = e;
                return (0, i.jsxs)('div', {
                    className: o().root,
                    children: [
                        (0, i.jsx)(n.N_, {
                            className: o().link,
                            href: '/genre/'.concat(t),
                            children: (0, i.jsx)(s.Heading, { variant: 'h2', size: 'm', lineClamp: 1, className: o().linkTitle, children: a }),
                        }),
                        r.length > 0 &&
                            (0, i.jsx)('div', {
                                className: o().list,
                                children: r.map((e) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: o().item,
                                            children: (0, i.jsx)(n.N_, {
                                                className: o().link,
                                                href: '/genre/'.concat(e.tag),
                                                children: (0, i.jsx)(s.Caption, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    lineClamp: 1,
                                                    className: o().linkTitle,
                                                    children: e.title,
                                                }),
                                            }),
                                        },
                                        e.tag,
                                    ),
                                ),
                            }),
                    ],
                });
            });
        },
        82975: (e) => {
            e.exports = { root: 'GenreArtistsPage_root__PgtIz', container: 'GenreArtistsPage_container__NruTu', footer: 'GenreArtistsPage_footer__fYaCO' };
        },
        85218: (e) => {
            e.exports = {
                root: 'ChartPodcastsPage_root__J5lnx',
                scrollContainer: 'ChartPodcastsPage_scrollContainer__WQTf7',
                important: 'ChartPodcastsPage_important__fW45m',
                footer: 'ChartPodcastsPage_footer__7ytrT',
                item: 'ChartPodcastsPage_item__vGRt8',
                content: 'ChartPodcastsPage_content__NcV4M',
            };
        },
        85827: (e, t, a) => {
            'use strict';
            a.d(t, { UgcUploadInitializer: () => v });
            var i = a(28303),
                r = a(61910),
                s = a(83252),
                n = a(54486),
                l = a(43426),
                o = a(80585),
                d = a(47713),
                u = a(31500),
                c = a(97800),
                h = a(1320),
                g = a.n(h),
                m = (function (e) {
                    return (e.ERROR = 'error'), (e.SUCCESS = 'success'), e;
                })({});
            let y = (e) => {
                let { playlistName: t, url: a, variant: i } = e,
                    s = (0, r.useMemo)(
                        () =>
                            (0, n.jsx)(o.N_, {
                                href: a,
                                className: g().link,
                                children: (0, n.jsx)(c.Caption, { className: g().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: t }),
                            }),
                        [t, a],
                    ),
                    l = (0, r.useMemo)(
                        () =>
                            'error' === i
                                ? (0, n.jsx)(c.Caption, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      ...(0, u.Am)(u.S7.BASE_NOTIFICATION_UGC_TRACK_ERROR_TEXT),
                                      children: (0, n.jsx)(d.A, { id: 'ugc.notification-unknown-error', values: { playlistName: s } }),
                                  })
                                : (0, n.jsxs)(c.Caption, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      children: [(0, n.jsx)(d.A, { id: 'ugc.notification-success', values: { playlistName: s } }), ';'],
                                  }),
                        [s, i],
                    );
                return (0, n.jsx)(o.$W, { className: g().root, message: l });
            };
            var p = a(77009);
            let v = (0, i.PA)(() => {
                let { ugcUploadCenter: e } = (0, s.Pjs)(),
                    t = (0, r.useRef)(void 0);
                (() => {
                    var e;
                    let {
                            ugcUploadCenter: { notifications: t },
                            playlist: a,
                        } = (0, s.Pjs)(),
                        { notify: i } = (0, s.lkh)(),
                        { formatMessage: d } = (0, l.A)();
                    (0, r.useEffect)(() => {
                        t.showAllNotifications().forEach((e) => {
                            switch (e.type) {
                                case p.u.FILE_TOO_LARGE:
                                    i((0, n.jsx)(o.hT, { error: d({ id: 'ugc.notification-too-large-file-error' }) }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.TOO_MANY_FILES:
                                    i((0, n.jsx)(o.hT, { error: d({ id: 'ugc.notification-too-many-files-error' }) }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.UNKNOWN_ERROR:
                                    i((0, n.jsx)(y, { url: e.playlist.url, playlistName: e.playlist.title, variant: m.ERROR }), { containerId: s.uQT.ERROR });
                                    break;
                                case p.u.SUCCESS:
                                    var t;
                                    (null == (t = a.meta) ? void 0 : t.kind) !== e.playlist.kind &&
                                        i((0, n.jsx)(y, { url: e.playlist.url, playlistName: e.playlist.title, variant: m.SUCCESS }), { containerId: s.uQT.INFO });
                            }
                        });
                    }, [d, t, t.pairs.length, i, null == (e = a.meta) ? void 0 : e.kind]);
                })();
                let a = (0, r.useCallback)(() => {
                        e.checkProcessingTracks();
                    }, [e]),
                    i = (0, r.useCallback)(() => {
                        t.current || (t.current = setInterval(a, 2e3));
                    }, [a]),
                    d = (0, r.useCallback)(() => {
                        clearInterval(t.current), (t.current = void 0);
                    }, []);
                (0, r.useEffect)(() => {
                    e.shouldCheckProcessingTracks ? i() : d();
                }, [d, i, e.shouldCheckProcessingTracks]),
                    (0, r.useEffect)(() => () => d(), [d]);
            });
        },
        88187: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        89281: (e) => {
            e.exports = { root: 'Genre_root__80dlk', link: 'Genre_link__Wewaq', linkTitle: 'Genre_linkTitle__ORAsw', list: 'Genre_list__C2Pxf' };
        },
        89381: (e, t, a) => {
            'use strict';
            a.d(t, { CommunicationsInitializer: () => n });
            var i = a(28303),
                r = a(61910),
                s = a(83252);
            let n = (0, i.PA)(() => {
                let { user: e, redAlert: t, communication: a } = (0, s.Pjs)();
                (0, r.useEffect)(() => {
                    e.isAuthorized && Promise.allSettled([a.getData(), t.getData()]);
                }, [t, a, e.isAuthorized]);
            });
        },
        90058: (e) => {
            e.exports = { root: 'BrowserUpdateNotification_root__IN495', important: 'BrowserUpdateNotification_important__6k4Gb' };
        },
        90809: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        91022: (e, t, a) => {
            'use strict';
            a.d(t, { Z3: () => y.GenreAlbumsPage, P0: () => p.GenreArtistsPage, L6: () => v.GenrePage, G8: () => m, ys: () => S.GenrePlaylistsPage });
            var i = a(93064),
                r = a(14287),
                s = a(80156),
                n = a(83909),
                l = a(63695),
                o = a(83252),
                d = a(26433);
            let u = i.gK
                    .model('GenreAlbumsPage', { pagesLoader: (0, d.Ij)(s.JC), errorStatusCode: i.gK.maybeNull(i.gK.number), fullTitle: i.gK.maybeNull(i.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, i;
                                let t = e.pagesLoader.isSomePageResolved && (null != (i = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? i : 0) === 0,
                                    s = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && s) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var s;
                                return null != (s = e.pagesLoader.items) ? s : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, i.L3)(function* (t) {
                            let { metatagId: a, page: n = 0, pageSize: l = 20, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, i._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(n))
                                try {
                                    e.pagesLoader.setPageState(n, o.GuX.PENDING);
                                    let t = d;
                                    t || (t = yield u.getMetatagAlbums({ id: a, offset: n, limit: l })), (e.fullTitle = t.title.fullTitle);
                                    let i = t.albums.map(s.pp);
                                    e.pagesLoader.setItems(i, { page: n, pager: { page: n, perPage: l, total: t.pager.total } });
                                } catch (t) {
                                    c.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: o.FlZ.ERROR, page: n });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), (e.fullTitle = null), e.pagesLoader.reset();
                        },
                    })),
                c = i.gK
                    .compose(
                        i.gK.model('GenreArtistsPage', {
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            fullTitle: i.gK.maybeNull(i.gK.string),
                            pagesLoader: (0, d.Ij)(l.PK),
                        }),
                        d.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a;
                                let t = e.isResolved && (null == (a = e.pagesLoader.pager) ? void 0 : a.total) === 0,
                                    i = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.isRejected && i) || t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isRejected() {
                                return e.pagesLoader.isInitialRequestRejected;
                            },
                            get isEmpty() {
                                return e.pagesLoader.isEmpty;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                return e.pagesLoader.items || [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, i.L3)(function* (t) {
                            let { metatagId: a, page: s = 0, pageSize: n = 20, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, i._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(s))
                                try {
                                    e.pagesLoader.setPageState(s, o.GuX.PENDING);
                                    let t = d;
                                    t || (t = yield u.getMetatagArtists({ id: a, offset: s, limit: n, period: 'week' })), (e.fullTitle = t.title.fullTitle);
                                    let i = t.artists.map((e) => (0, l.dM)(e.artist));
                                    e.pagesLoader.setItems(i, { page: s, pager: t.pager });
                                } catch (t) {
                                    c.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.pagesLoader.setItems(null, { responseStatus: o.FlZ.ERROR, page: s });
                                }
                        }),
                        reset() {
                            (e.errorStatusCode = null), e.pagesLoader.reset();
                        },
                    }));
            var h = a(52733);
            let g = i.gK
                    .model('GenrePlaylistsPage', { pagesLoader: (0, d.Ij)(h.$o), errorStatusCode: i.gK.maybeNull(i.gK.number), fullTitle: i.gK.maybeNull(i.gK.string) })
                    .views((e) => {
                        let t = {
                            get isNotFound() {
                                var a, i;
                                let t = e.pagesLoader.isSomePageResolved && (null != (i = null == (a = e.pagesLoader.items) ? void 0 : a.length) ? i : 0) === 0,
                                    s = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.pagesLoader.isInitialRequestRejected && s) || t;
                            },
                            get isSomethingWrong() {
                                return e.pagesLoader.isInitialRequestRejected && !t.isNotFound;
                            },
                            get isShimmerVisible() {
                                return !e.pagesLoader.isSomePageResolved;
                            },
                            get isNeededToLoad() {
                                return e.pagesLoader.isNeedToMakeInitialRequest;
                            },
                            get isResolved() {
                                return e.pagesLoader.isSomePageResolved;
                            },
                            get requestsCount() {
                                return e.pagesLoader.requestsCount;
                            },
                            get items() {
                                var s;
                                return null != (s = e.pagesLoader.items) ? s : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, i.L3)(function* (t) {
                            let { metatagId: a, page: r = 0, pageSize: s = 20, preloadedMeta: n } = t,
                                { metatagsResource: l, modelActionsLogger: d } = (0, i._$)(e);
                            if (e.pagesLoader.isPageNeedToLoad(r))
                                try {
                                    e.pagesLoader.setPageState(r, o.GuX.PENDING);
                                    let t = n;
                                    t || (t = yield l.getMetatagPlaylists({ id: a, offset: r, limit: s, withLikesCount: !0 })), (e.fullTitle = t.title.fullTitle);
                                    let i = t.playlists.map(h.jX);
                                    e.pagesLoader.setItems(i, { page: r, pager: { page: r, perPage: s, total: t.pager.total } });
                                } catch (t) {
                                    d.error(t), e.pagesLoader.setItems(null, { responseStatus: o.FlZ.ERROR, page: r });
                                }
                        }),
                        reset() {
                            e.pagesLoader.reset(), (e.errorStatusCode = null), (e.fullTitle = null);
                        },
                    })),
                m = i.gK
                    .compose(
                        i.gK.model('GenrePage', {
                            id: i.gK.maybeNull(i.gK.string),
                            errorStatusCode: i.gK.maybeNull(i.gK.number),
                            fullTitle: i.gK.maybeNull(i.gK.string),
                            artists: i.gK.array(l.PK),
                            albums: i.gK.array(s.JC),
                            playlists: i.gK.array(n.IP),
                            albumsSubpage: u,
                            artistsSubpage: c,
                            playlistsSubpage: g,
                        }),
                        d.XT,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === o.GuX.PENDING;
                            },
                            get hasAlbums() {
                                return t.isLoading || e.albums.length > 0;
                            },
                            get hasArtists() {
                                return t.isLoading || e.artists.length > 0;
                            },
                            get hasPlaylists() {
                                return t.isLoading || e.playlists.length > 0;
                            },
                            get isNotFound() {
                                let a = e.isResolved && !t.hasAlbums && !t.hasArtists && !t.hasPlaylists,
                                    i = e.errorStatusCode === r.X1.NOT_FOUND || e.errorStatusCode === r.X1.BAD_REQUEST;
                                return (e.isRejected && i) || a;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, i.L3)(function* (t) {
                            let { id: a, preloadedMeta: d } = t,
                                { metatagsResource: u, modelActionsLogger: c } = (0, i._$)(e);
                            if (e.loadingState !== o.GuX.PENDING)
                                try {
                                    e.loadingState = o.GuX.PENDING;
                                    let t = d;
                                    t || (t = yield u.getMetatagById({ id: a })),
                                        (e.id = t.id),
                                        (e.fullTitle = t.title.fullTitle),
                                        (e.artists = (0, i.wg)(t.artists.map(l.dM))),
                                        (e.albums = (0, i.wg)(t.albums.map(s.pp))),
                                        (e.playlists = (0, i.wg)(t.playlists.map(n.ZC))),
                                        e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.RESOLVE);
                                } catch (t) {
                                    c.error(t),
                                        t instanceof r.GX &&
                                            (t.statusCode === r.X1.NOT_FOUND || t.statusCode === r.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = r.X1.NOT_FOUND),
                                        e.loadingState !== o.GuX.IDLE && (e.loadingState = o.GuX.REJECT);
                                }
                        }),
                        reset() {
                            (e.loadingState = o.GuX.IDLE), (e.fullTitle = null), (e.artists = (0, i.wg)([])), (e.albums = (0, i.wg)([])), (e.playlists = (0, i.wg)([]));
                        },
                    }));
            var y = a(49943),
                p = a(73896);
            a(51843);
            var v = a(38139),
                S = a(93405);
            a(33868), a(45126), a(7588), a(96777);
            var P = a(61910),
                E = a(49811);
            let f = async (e, t) => {
                try {
                    let { container: a, backendHostTld: i, locale: r, host: s, fullUrl: n, isRSC: l, requestUrl: d } = await (0, o.IhE)();
                    if (!e || l) return { genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null };
                    let u = a.get(o.UtQ);
                    return { genreMeta: await t(u, e), tld: i, locale: r, host: s, fullUrl: n, url: d };
                } catch (e) {
                    return (0, o.tfF)(e, () => ({ genreMeta: void 0, tld: '', locale: null, host: '', fullUrl: null, url: null }));
                }
            };
            (0, P.cache)(async (e) => f(e, async (e, t) => e.getMetatagAlbums({ id: t, offset: 0, limit: E.c }))),
                (0, P.cache)(async (e) => f(e, async (e, t) => e.getMetatagArtists({ id: t, offset: 0, limit: E.c, period: 'week' }))),
                (0, P.cache)(async (e) => f(e, async (e, t) => e.getMetatagById({ id: t }))),
                (0, P.cache)(async (e) => f(e, async (e, t) => e.getMetatagPlaylists({ id: t, offset: 0, limit: E.c, withLikesCount: !0 })));
        },
        91582: (e) => {
            e.exports = { root: 'KidsCategoryPageShimmer_root__0V_bC' };
        },
        93405: (e, t, a) => {
            'use strict';
            a.d(t, { GenrePlaylistsPage: () => f });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(43426),
                d = a(31500),
                u = a(97800),
                c = a(82644),
                h = a(33276),
                g = a(83909),
                m = a(83252),
                y = a(80585),
                p = a(49811),
                v = a(96777),
                S = a(52733),
                P = a(18753),
                E = a.n(P);
            let f = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: a } = e,
                    {
                        genre: { playlistsSubpage: s },
                        settings: { isMobile: P },
                    } = (0, m.Pjs)(),
                    { formatMessage: f } = (0, o.A)(),
                    { contentScrollRef: b, setContentScrollRef: _ } = (0, m.gKY)(),
                    I = (0, m.W6M)(),
                    k = (0, l.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: p.c });
                        },
                        [s, t],
                    );
                (0, m.XcE)(s.pagesLoader, k),
                    (0, l.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, n.notFound)(),
                    (0, m.Jzs)(s.isResolved),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!e) return;
                            let t = ((e) => {
                                var t, a, i;
                                return {
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    playlists: e.items.map(S.Ji),
                                    pager: {
                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                        perPage: (null == (a = e.pagesLoader.pager) ? void 0 : a.perPage) || 0,
                                        total: (null == (i = e.pagesLoader.pager) ? void 0 : i.total) || 0,
                                    },
                                };
                            })(e);
                            (0, v.H)(t, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, m.jxB)(e);
                            });
                        }, [e]);
                    })(s);
                let C = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(y.A, { children: (0, i.jsx)(y.wi, { className: E().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, l.use)(s.getData({ preloadedMeta: a, metatagId: t, page: 0, pageSize: p.c })), s.isSomethingWrong))
                    return (0, i.jsx)(c.w, {});
                let T = s.isShimmerVisible ? 20 : s.items.length;
                return (0, i.jsx)(m.nVz, {
                    pageId: m._Q$.GENRE_PLAYLISTS,
                    children: (0, i.jsx)(h.hO, {
                        scrollElement: b,
                        outerTitle: s.fullTitle,
                        children: (0, i.jsxs)('div', {
                            className: E().root,
                            ...(0, d.Am)(d.Xk.genre.GENRE_PLAYLISTS_PAGE),
                            children: [
                                (0, i.jsx)(y.Y9, {
                                    variant: y.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: I.canBack,
                                    children: (0, i.jsx)(u.Heading, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, i.jsx)(y.$$, {
                                    className: (0, r.$)(E().scrollContainer, E().important),
                                    customComponents: C,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            a = f({ id: 'loading-messages.entity-is-loading' }, { entityName: f({ id: 'entity-names.playlist' }) });
                                        return t ? (0, i.jsx)(g.B6, { playlist: t, contentLinesCount: 3 }, t.key) : (0, i.jsx)(y.Vt, { 'aria-label': a });
                                    },
                                    totalCount: T,
                                    onGetDataByPage: k,
                                    pageSize: p.c,
                                    totalRequests: s.requestsCount,
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    handleRef: _,
                                    context: { listAriaLabel: f({ id: 'mixes.playlists-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        93685: (e, t, a) => {
            'use strict';
            a.d(t, { PostPage: () => R });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97396),
                l = a(61910),
                o = a(23615),
                d = a(56231),
                u = a(22674),
                c = a(97800),
                h = a(82644),
                g = a(33276),
                m = a(83252),
                y = a(80585),
                p = a(51892),
                v = a.n(p);
            let S = () =>
                (0, i.jsxs)('div', {
                    className: v().root,
                    children: [(0, i.jsx)(u.Shimmer, { radius: 'l', className: v().top }), (0, i.jsx)(u.Shimmer, { radius: 'l', className: v().bottom })],
                });
            var P = a(23404),
                E = a.n(P),
                f = a(80156),
                b = a(30827),
                _ = a.n(b);
            let I = (0, s.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, i.jsx)('div', {
                    className: _().root,
                    children: (0, i.jsx)('div', {
                        className: _().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, i.jsx)(f.aX, { className: _().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var k = a(55616),
                C = a(12393),
                T = a.n(C);
            let A = (0, s.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, i.jsx)('div', {
                    className: T().root,
                    children: (0, i.jsx)('div', {
                        className: T().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, i.jsx)(k.ao, { className: T().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var D = a(83909),
                L = a(50757),
                x = a.n(L);
            let N = (0, s.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, i.jsx)('div', {
                        className: x().root,
                        children: (0, i.jsx)('div', {
                            className: x().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, i.jsx)(D.B6, { className: x().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                R = (0, s.PA)((e) => {
                    let { promoId: t } = e,
                        { post: a } = (0, m.Pjs)(),
                        s = (0, m.W6M)(),
                        { contentScrollRef: p, setContentScrollRef: v } = (0, m.gKY)();
                    (0, l.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                        a.isNotFound && (0, n.notFound)(),
                        (0, m.Jzs)(a.isResolved);
                    let P = (0, l.useMemo)(() => {
                        if (a.isLoading) return (0, i.jsx)(S, {});
                        switch (a.promotionType) {
                            case o.Q.ARTISTS:
                                return (0, i.jsx)(A, { artists: a.artists });
                            case o.Q.ALBUMS:
                                return (0, i.jsx)(I, { albums: a.albums });
                            case o.Q.PLAYLISTS:
                                return (0, i.jsx)(N, { playlists: a.playlists });
                            default:
                                (0, n.notFound)();
                        }
                    }, [a.albums, a.artists, a.isLoading, a.playlists, a.promotionType]);
                    return (t && a.isNeededToLoad && (0, l.use)(a.getData({ promoId: t })), a.isSomethingWrong)
                        ? (0, i.jsx)(h.w, {})
                        : (0, i.jsx)(m.nVz, {
                              pageId: m._Q$.POST,
                              children: (0, i.jsx)(g.hO, {
                                  scrollElement: p,
                                  outerTitle: a.title || void 0,
                                  children: (0, i.jsxs)('div', {
                                      className: E().root,
                                      children: [
                                          (0, i.jsx)(y.Y9, {
                                              variant: y.Vw.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: s.canBack,
                                              children: a.title
                                                  ? (0, i.jsx)(c.Heading, {
                                                        id: 'post-header',
                                                        variant: 'h2',
                                                        weight: 'bold',
                                                        size: 'xl',
                                                        lineClamp: 1,
                                                        children: a.title,
                                                    })
                                                  : (0, i.jsx)(u.Shimmer, { className: E().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, i.jsx)(d.N, {
                                              containerClassName: (0, r.$)(E().scrollContainer, E().important),
                                              className: E().scrollableContainer,
                                              ref: v,
                                              children: (0, i.jsx)('div', { className: E().container, children: P }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        94189: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
            };
        },
        94716: (e, t, a) => {
            'use strict';
            a.d(t, { TagNotFoundPage: () => n });
            var i = a(54486),
                r = a(28303),
                s = a(42421);
            let n = (0, r.PA)(() => (0, i.jsx)(s.M, {}));
        },
        95364: (e, t, a) => {
            'use strict';
            a.d(t, { GenresNotFoundPage: () => s });
            var i = a(54486),
                r = a(42421);
            let s = () => (0, i.jsx)(r.M, {});
        },
        95657: (e, t, a) => {
            'use strict';
            a.d(t, { PlaylistPersonalDummyPage: () => c });
            var i = a(54486),
                r = a(50420),
                s = a(28303),
                n = a(97800),
                l = a(83252),
                o = a(80585),
                d = a(88187),
                u = a.n(d);
            let c = (0, s.PA)(() => {
                let {
                    playlistPersonal: { dummyCoverUrl: e, dummyDescription: t, title: a },
                } = (0, l.Pjs)();
                return (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.Y9, {}),
                        (0, i.jsx)(o.BW, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: u().cover }),
                        a && (0, i.jsx)(n.Heading, { className: (0, r.$)(u().title, u().important), variant: 'h1', size: 'xs', children: a }),
                        t &&
                            (0, i.jsx)(n.Caption, {
                                className: (0, r.$)(u().text, u().important),
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: t,
                            }),
                    ],
                });
            });
        },
        96269: (e, t, a) => {
            'use strict';
            a.d(t, { PromoLandingCrackdownInitializer: () => l });
            var i = a(28303),
                r = a(83252),
                s = a(15163),
                n = a(33134);
            let l = (0, i.PA)(() => {
                var e;
                let {
                        modals: { crackdownModal: t, promoLandingBuySubscriptionModal: a },
                        settings: { isMobile: i },
                        experiments: l,
                        promolanding: { state: o },
                    } = (0, r.Pjs)(),
                    { isFreemium: d } = (0, r.XCI)(),
                    u = d && l.checkExperiment(r.zal.WebNextPromoLanding, 'on'),
                    c = null == (e = l.getExperiment(r.zal.WebNextPromoLandingCrackdownInterval)) ? void 0 : e.value.interval;
                (0, n.W)({ isEnabled: u, intervalMs: (0, s.P)(c), modal: i ? a : t, playbackId: r.V_r.PROMO_LANDING, sonataState: o });
            });
        },
        96777: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n });
            var i = a(83252),
                r = a(11723),
                s = a(49124);
            async function n(e, t) {
                let { locale: a, fullUrl: n, url: l, tld: o, host: d } = t,
                    u = await (0, i.WGy)(a),
                    c = e.title.fullTitle,
                    h = u({ id: 'metadata.genre-title' }, { genreTitle: c }),
                    g = (0, r.f)({ genreTitle: c, messageFormatter: u }),
                    m = s.env.ASSET_PREFIX || '',
                    y = ''.concat(d).concat(m, '/meta/og-image.png');
                return {
                    title: h,
                    description: g,
                    openGraph: (0, i.i$E)({
                        ogTitle: (0, i.NsT)(c),
                        ogDescription: g,
                        fullUrl: null != n ? n : '',
                        locale: a,
                        siteName: u({ id: 'metadata.yandex-music' }),
                        ogImage: y,
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: h, url: null != l ? l : '', appName: u({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { tld: o, url: null != l ? l : '', fullUrl: null != n ? n : '', host: d },
                        appName: u({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
        },
        97249: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { SettingsInitializer: () => n });
            var i = a(28303),
                r = a(61910),
                s = a(83252);
            let n = (0, i.PA)((e) => {
                let { browserInfo: t } = e,
                    a = (0, s.NFA)(),
                    { settings: i } = (0, s.Pjs)(),
                    n = (0, s.uoh)(),
                    l = a.get(s.vgk);
                i.setBrowserInfo(t),
                    n && i.setPlatform(n),
                    (0, r.useLayoutEffect)(() => {
                        i.initializeLiteVersionMode(), i.initializeCustomPlayerThumb();
                    }, []),
                    (0, r.useEffect)(() => {
                        i.liteVersionMode && l.count(i.liteVersionMode, 'liteVersionMode');
                    }, [l, i.liteVersionMode]);
            });
        },
        97691: (e, t, a) => {
            'use strict';
            a.d(t, { CrackdownInitializer: () => l });
            var i = a(28303),
                r = a(83252),
                s = a(15163),
                n = a(33134);
            let l = (0, i.PA)(() => {
                var e;
                let {
                        user: t,
                        modals: { crackdownModal: a },
                        settings: { isMobile: i },
                        experiments: l,
                        sonataState: o,
                        desktopPaywall: d,
                    } = (0, r.Pjs)(),
                    { isFreemium: u } = (0, r.XCI)(),
                    c = t.isAuthorized && u && !i,
                    h = null == (e = l.getExperiment(r.zal.WebNextCrackdownInterval)) ? void 0 : e.value.interval;
                (0, n.W)({ isEnabled: c, intervalMs: (0, s.P)(h), modal: a, sonataState: o, isPaywallOpen: d.isPaywallOpen });
            });
        },
        99893: (e, t, a) => {
            'use strict';
            a.d(t, { FavoriteTracksPage: () => d });
            var i = a(54486),
                r = a(28303),
                s = a(61910),
                n = a(83252),
                l = a(42421);
            let o = (0, r.PA)(() => (0, i.jsx)(l.M, {})),
                d = (0, r.PA)(() => {
                    let { favoriteTracks: e } = (0, n.Pjs)(),
                        t = (0, n.ZpR)(e.playlistUrl);
                    if (
                        ((0, s.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, s.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, s.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, i.jsx)(o, {});
                });
        },
    },
]);
