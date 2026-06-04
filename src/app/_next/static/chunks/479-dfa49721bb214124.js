(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [479],
    {
        15839: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistFamiliarPage: () => K });
            var i = a(32290),
                s = a(96103),
                r = a(21916),
                l = a(55178),
                n = a(59824),
                o = a(15299),
                d = a(32381),
                c = a(75645),
                u = a(33797),
                m = a(49574),
                g = a(44574),
                p = a(98736),
                f = (function (t) {
                    return (t[(t.COLLECTION = 0)] = 'COLLECTION'), (t[(t.VIBE = 1)] = 'VIBE'), t;
                })({}),
                h = a(22644),
                S = a(51714),
                _ = a(29775),
                b = a.n(_),
                v = a(63618),
                A = a(60900),
                x = a(83778),
                T = a(71483),
                L = a(44884),
                C = a(46049),
                N = a(79856),
                I = a(16486),
                j = a(80864);
            let k = (t) => {
                let { artistId: e, entityContextType: a } = t;
                return (0, l.useMemo)(() => (e ? (0, m.tW0)({ contextType: T.K.Artist, contextId: e, entityContextType: a }) : null), [e, a]);
            };
            var E = a(39407),
                P = a(71926),
                y = a(91027);
            let R = (t) => {
                let e = (0, m.XJ9)(),
                    a = (0, r.useSearchParams)();
                return (0, y.c)((i) => {
                    var s;
                    let r = new URLSearchParams(a);
                    switch ((null == (s = t.onTabChange) || s.call(t, i), i)) {
                        case f.COLLECTION:
                            r.set(m.K3F.TAB, m.JCK.COLLECTION), e((0, m.Cvn)(window.location.pathname, r));
                            break;
                        case f.VIBE:
                            r.set(m.K3F.TAB, m.JCK.VIBE), e((0, m.Cvn)(window.location.pathname, r));
                    }
                });
            };
            var w = a(60367),
                M = a.n(w);
            let F = () =>
                    (0, i.jsxs)('div', {
                        className: M().tabsShimmer,
                        children: [(0, i.jsx)(N.Shimmer, { className: M().tabShimmer }), (0, i.jsx)(N.Shimmer, { className: M().tabShimmer })],
                    }),
                O = (0, s.PA)((t) => {
                    let { tabsState: e, tabElementId: a } = t,
                        { artist: s } = (0, m.Pjs)(),
                        { formatMessage: r } = (0, A.A)(),
                        n = (0, m.W6M)(),
                        { isScrolling: o } = (0, l.useContext)(g.B9),
                        d = R(e);
                    return (0, i.jsxs)('header', {
                        className: M().root,
                        'aria-hidden': o,
                        children: [
                            (0, i.jsxs)('div', {
                                className: M().container,
                                children: [
                                    n.canBack && (0, i.jsx)(g.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !o }),
                                    (0, i.jsx)(P.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: M().title,
                                        children: (0, i.jsx)(E.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(g.wI, {
                                isShimmerVisible: s.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(F, {}),
                                className: M().tabs,
                                elementId: a,
                                ...e,
                                onTabChange: d,
                                children: [
                                    (0, i.jsx)(g.oz, {
                                        className: M().tab,
                                        value: f.COLLECTION,
                                        title: r({ id: 'page.familiar-collection' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                    (0, i.jsx)(g.oz, {
                                        className: M().tab,
                                        value: f.VIBE,
                                        title: r({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var U = a(23025),
                B = a.n(U);
            let G = (0, s.PA)((t) => {
                    var e;
                    let { forwardRef: a, tabsState: s, tabElementId: r, artistId: d } = t,
                        { artist: c } = (0, m.Pjs)(),
                        { formatMessage: u } = (0, A.A)(),
                        { from: p } = (0, m.fyy)(),
                        h = k({ artistId: d, entityContextType: x.h.ARTIST_MY_COLLECTION }),
                        S = (0, l.useCallback)(
                            (t, e) => ({
                                contextData: {
                                    type: T.K.Various,
                                    meta: { id: String(d) },
                                    from: p,
                                    overrideAutoflowSeeds: ['artist:'.concat(d)],
                                    overrideContextType: L.b.Artist,
                                },
                                queueParams: { index: e },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.collectionEntitiesData,
                            }),
                            [c.familiarSubpage.collectionEntitiesData, d, p],
                        ),
                        _ = (0, l.useMemo)(() => {
                            var t;
                            return (0, i.jsx)(g.L5, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: m.Xjt.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, v.$)(B().block, B().tracksBlock),
                                children:
                                    null == (t = c.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : t.map((t, e) => (0, i.jsx)(j.Kt, { track: t, playContextParams: S(t, e) }, t.id)),
                            });
                        }, [c.familiarSubpage.collectionTracks, c.familiarSubpage.isLoading, S]),
                        b = (0, l.useMemo)(() => {
                            if (c.familiarSubpage.shouldShowTitleBlocks)
                                return c.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, v.$)(B().block, B().blockHeader),
                                          children: (0, i.jsx)(N.Shimmer, { isActive: c.familiarSubpage.isLoading, className: B().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(g.Tw, { className: (0, v.$)(B().block, B().blockHeader), title: u({ id: 'entity-names.tracks' }) });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.shouldShowTitleBlocks, u]),
                        E = (0, l.useMemo)(() => {
                            if (c.familiarSubpage.shouldShowTitleBlocks) return u({ id: 'entity-names.albums' });
                        }, [c.familiarSubpage.shouldShowTitleBlocks, u]);
                    return (0, i.jsx)(m._Fn, {
                        sourceContextData: h,
                        children: (0, i.jsxs)(C.N, {
                            className: B().root,
                            containerClassName: (0, v.$)(B().scrollContainer, B().important),
                            ref: a,
                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION),
                            children: [
                                (0, i.jsx)(O, { tabsState: s, tabElementId: r }),
                                (0, i.jsxs)(o.TabPanel, {
                                    value: s.value,
                                    name: f.COLLECTION,
                                    elementId: r,
                                    className: B().content,
                                    children: [
                                        (0, i.jsxs)('section', { ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK), children: [b, _] }),
                                        (0, i.jsx)(g.OY, {
                                            isShimmerVisible: c.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: B().blockHeader,
                                            containerClassName: B().block,
                                            title: E,
                                            showHeaderShimmer: c.familiarSubpage.shouldShowTitleBlocks,
                                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM),
                                            children:
                                                null == (e = c.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : e.map((t) => (0, i.jsx)(I.aX, { album: t, contentLinesCount: 3 }, t.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.A, { children: (0, i.jsx)(g.wi, { className: B().footer }) }),
                            ],
                        }),
                    });
                }),
                D = (0, s.PA)((t) => {
                    let { forwardRef: e, tabsState: a, tabElementId: s, artistId: r } = t,
                        { artist: d } = (0, m.Pjs)(),
                        { from: c } = (0, m.fyy)(),
                        u = k({ artistId: r, entityContextType: x.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        p = (0, l.useCallback)(
                            (t, e) => ({
                                contextData: {
                                    type: T.K.Various,
                                    meta: { id: String(r) },
                                    from: c,
                                    overrideAutoflowSeeds: ['artist:'.concat(r)],
                                    overrideContextType: L.b.Artist,
                                },
                                queueParams: { index: e },
                                loadContextMeta: !1,
                                entitiesData: d.familiarSubpage.vibeEntitiesData,
                            }),
                            [d.familiarSubpage.vibeEntitiesData, r, c],
                        ),
                        h = (0, l.useMemo)(() => {
                            var t;
                            return (0, i.jsx)(g.L5, {
                                isShimmerVisible: d.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: m.Xjt.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, v.$)(B().block, B().tracksBlock),
                                children:
                                    null == (t = d.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : t.map((t, e) => (0, i.jsx)(j.Kt, { track: t, playContextParams: p(t, e) }, t.id)),
                            });
                        }, [d.familiarSubpage.isLoading, d.familiarSubpage.vibeTracks, p]);
                    return (0, i.jsx)(m._Fn, {
                        sourceContextData: u,
                        children: (0, i.jsxs)(C.N, {
                            className: B().root,
                            containerClassName: (0, v.$)(B().scrollContainer, B().important),
                            ref: e,
                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE),
                            children: [
                                (0, i.jsx)(O, { tabsState: a, tabElementId: s }),
                                (0, i.jsx)(o.TabPanel, { value: a.value, name: f.VIBE, elementId: s, className: B().content, children: h }),
                                (0, i.jsx)(g.A, { children: (0, i.jsx)(g.wi, { className: B().footer }) }),
                            ],
                        }),
                    });
                });
            var H = a(82586),
                V = a(68033),
                W = a.n(V);
            let Y = (t) => {
                    let { tabsState: e, tabElementId: a } = t,
                        s = (0, l.useMemo)(() => {
                            switch (e.value) {
                                case f.COLLECTION:
                                    return (0, i.jsx)(E.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                                case f.VIBE:
                                    return (0, i.jsx)(E.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                            }
                        }, [e.value]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O, { tabsState: e, tabElementId: a }),
                            (0, i.jsxs)('div', {
                                className: W().root,
                                children: [
                                    (0, i.jsx)(H.Icon, { className: W().icon, variant: 'attention', size: 'xxxl' }),
                                    (0, i.jsx)(P.Heading, { className: W().title, variant: 'h3', size: 'xs', children: s }),
                                ],
                            }),
                        ],
                    });
                },
                z = (0, s.PA)((t) => {
                    let { tabsState: e, tabElementId: a } = t,
                        { artist: s } = (0, m.Pjs)(),
                        { formatMessage: r } = (0, A.A)(),
                        { isScrolling: n } = (0, l.useContext)(g.B9),
                        o = (0, m.W6M)(),
                        d = R(e);
                    return (0, i.jsx)(g.Y9, {
                        variant: g.Vw.COMPOSITE,
                        staticClassName: (0, v.$)(M().staticHeader, M().important),
                        'aria-hidden': !n,
                        stickyClassName: (0, v.$)(M().stickyHeader, M().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: M().container,
                            children: [
                                o.canBack && (0, i.jsx)(g.Lh, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(g.wI, {
                                    isShimmerVisible: s.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(F, {}),
                                    className: M().tabs,
                                    elementId: a,
                                    onTabChange: d,
                                    ...e,
                                    children: [
                                        (0, i.jsx)(g.oz, {
                                            className: M().tab,
                                            value: f.COLLECTION,
                                            title: r({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !n,
                                            tabIndex: n ? 0 : -1,
                                        }),
                                        (0, i.jsx)(g.oz, {
                                            className: M().tab,
                                            value: f.VIBE,
                                            title: r({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !n,
                                            tabIndex: n ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                K = (0, s.PA)((t) => {
                    var e, a, s;
                    let { artistId: _, preloadedArtist: v, preloadedFamiliar: A } = t,
                        x = (0, r.useSearchParams)(),
                        { artist: T, disclaimerModalState: L } = (0, m.Pjs)(),
                        { contentScrollRef: C, setContentScrollRef: N } = (0, m.gKY)(),
                        I = (0, l.useId)(),
                        j = (0, l.useMemo)(() => {
                            switch (x.get(m.K3F.TAB)) {
                                case m.JCK.COLLECTION:
                                    break;
                                case m.JCK.VIBE:
                                    return f.VIBE;
                            }
                            return f.COLLECTION;
                        }, [x]),
                        k = (0, o.useTabsState)(j),
                        E = (0, u.SA)({ artist: null == (e = T.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                    (0, S.G)(_),
                        (0, l.useEffect)(() => {
                            var t;
                            (null == (t = T.meta) ? void 0 : t.artist.isUnsafeLegal) && E();
                        }, [null == (a = T.meta) ? void 0 : a.artist.isUnsafeLegal, E]),
                        (0, h._)(T, _),
                        (0, l.useEffect)(
                            () => () => {
                                T.familiarSubpage.reset();
                            },
                            [T],
                        ),
                        (0, m.Jzs)(T.familiarSubpage.isResolved),
                        T.familiarSubpage.isNotFound && (0, r.notFound)();
                    let P = (0, l.useMemo)(() => {
                            switch (k.value) {
                                case f.COLLECTION:
                                    if (T.familiarSubpage.isResolved && !T.familiarSubpage.hasCollectionEntities) return (0, i.jsx)(Y, { tabsState: k, tabElementId: I });
                                    return (0, i.jsx)(G, { tabsState: k, forwardRef: N, tabElementId: I, artistId: _ });
                                case f.VIBE:
                                    if (T.familiarSubpage.isResolved && !T.familiarSubpage.hasVibeTracks) return (0, i.jsx)(Y, { tabsState: k, tabElementId: I });
                                    return (0, i.jsx)(D, { tabsState: k, forwardRef: N, tabElementId: I, artistId: _ });
                            }
                        }, [T.familiarSubpage.hasCollectionEntities, T.familiarSubpage.hasVibeTracks, T.familiarSubpage.isResolved, _, N, I, k]),
                        y = [];
                    return (T.familiarSubpage.isNeededToLoad && y.push(T.familiarSubpage.getData({ preloadedFamiliar: A, artistId: _ })),
                    T.infoLoadingState.isNeededToLoad && y.push(T.getInfo({ artistId: _, preloadedArtist: v })),
                    ((t) => {
                        var e;
                        (0, l.useEffect)(() => {
                            if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                            let e = (0, u.Em)(t.meta.artist);
                            (0, p.Q)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                (0, m.jxB)(t);
                            });
                        }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                    })(T),
                    y.length && (0, l.use)(Promise.allSettled(y)),
                    T.familiarSubpage.isRejected && !T.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(d.w, {})
                        : (null == (s = T.meta) ? void 0 : s.artist.isLegalRejected)
                          ? (0, i.jsx)(g.MW, { modalState: L })
                          : (0, i.jsx)(m.nVz, {
                                pageId: m._Q$.FAMILIAR_YOU,
                                pageEntityId: _,
                                children: (0, i.jsx)(c.hO, {
                                    scrollElement: C,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: b().root,
                                        ...(0, n.Am)(n.Xk.artist.ARTIST_FAMILIAR_PAGE),
                                        children: [(0, i.jsx)(z, { tabElementId: I, tabsState: k }), (0, i.jsx)(m.FoH, { blockIdForFrom: m.UfI.DEFAULT, children: P })],
                                    }),
                                }),
                            });
                });
        },
        20279: (t) => {
            t.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
        22252: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistClipsPage: () => C });
            var i = a(32290),
                s = a(63618),
                r = a(96103),
                l = a(21916),
                n = a(55178),
                o = a(60900),
                d = a(59824),
                c = a(91027),
                u = a(71926),
                m = a(32381),
                g = a(58634),
                p = a(11135),
                f = a(75645),
                h = a(33797),
                S = a(72480),
                _ = a(49574),
                b = a(44574),
                v = a(43144),
                A = a(22644),
                x = a(51714),
                T = a(42731),
                L = a.n(T);
            let C = (0, r.PA)((t) => {
                var e, a;
                let { artistId: r, preloadedArtist: T, preloadedClips: C } = t,
                    {
                        artist: N,
                        disclaimerModalState: I,
                        settings: { isMobile: j },
                    } = (0, _.Pjs)(),
                    { formatMessage: k } = (0, o.A)(),
                    { contentScrollRef: E, setContentScrollRef: P } = (0, _.gKY)(),
                    y = (0, _.W6M)(),
                    R = (0, S.df)();
                (0, h.SA)({ artist: null == (e = N.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                let w = (0, c.c)((t) => {
                    N.clipsSubpage.getData({ artistId: r, page: t, pageSize: g.EV });
                });
                (0, _.XcE)(N.clipsSubpage.pagesLoader, w),
                    (0, x.G)(r),
                    (0, A._)(N, r),
                    (0, n.useEffect)(
                        () => () => {
                            N.clipsSubpage.reset();
                        },
                        [N, N.clipsSubpage],
                    ),
                    (0, _.Jzs)(N.clipsSubpage.isResolved),
                    ((t) => {
                        var e;
                        (0, n.useEffect)(() => {
                            if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                            let e = (0, h.Em)(t.meta.artist);
                            (0, v.E)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                (0, _.jxB)(t);
                            });
                        }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                    })(N);
                let M = N.clipsSubpage.isShimmerVisible ? 20 : N.clipsSubpage.items.length,
                    F = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: L().footer }) }) }), []),
                    O = (0, n.useMemo)(() => k({ id: 'page.artist-clips-header' }, { artistName: N.commonSubPage.artistName }), [N.commonSubPage.artistName, k]),
                    U = [];
                return (N.clipsSubpage.isNeededToLoad && U.push(N.clipsSubpage.getData({ artistId: r, page: 0, pageSize: g.EV, preloadedClips: C })),
                N.infoLoadingState.isNeededToLoad && U.push(N.getInfo({ artistId: r, preloadedArtist: T })),
                U.length && (0, n.use)(Promise.allSettled(U)),
                (N.clipsSubpage.isNotFound || !R) && (0, l.notFound)(),
                null == (a = N.meta) ? void 0 : a.artist.isLegalRejected)
                    ? (0, i.jsx)(b.MW, { modalState: I })
                    : N.clipsSubpage.isRejected
                      ? (0, i.jsx)(m.w, {})
                      : (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.ARTIST_CLIPS,
                            pageEntityId: r,
                            children: (0, i.jsx)(f.hO, {
                                scrollElement: E,
                                outerTitle: O,
                                children: (0, i.jsxs)('div', {
                                    className: L().root,
                                    ...(0, d.Am)(d.Xk.artist.ARTIST_CLIPS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: y.canBack,
                                            children: (0, i.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(L().scrollContainer, L().important),
                                            listClassName: L().content,
                                            itemClassName: L().item,
                                            customComponents: F,
                                            itemContentCallback: (t) => {
                                                let e = N.clipsSubpage.items[t];
                                                return e ? (0, i.jsx)(p.FC, { clip: e }, e.clipId) : (0, i.jsx)(p.kV, { isActive: !0 });
                                            },
                                            totalCount: M,
                                            onGetDataByPage: w,
                                            pageSize: g.EV,
                                            totalRequests: N.clipsSubpage.requestsCount,
                                            handleRef: P,
                                            context: { listAriaLabel: k({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: j,
                                            useWindowScroll: j,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        22644: (t, e, a) => {
            'use strict';
            a.d(e, { _: () => s });
            var i = a(55178);
            let s = (t, e) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(t.selfLink) || t.reset();
                    },
                    [t, e],
                );
            };
        },
        22873: (t) => {
            t.exports = {
                root: 'ArtistPage_root__QPg3p',
                averageColorBackground: 'ArtistPage_averageColorBackground__wXTSY',
                header: 'ArtistPage_header__tQnNe',
                content: 'ArtistPage_content__iZHVN',
                footer: 'ArtistPage_footer__8m6P9',
                carouselBlockHeader: 'ArtistPage_carouselBlockHeader__CtGDa',
                concertsBlock: 'ArtistPage_concertsBlock__1BfM8',
                carouselBlock: 'ArtistPage_carouselBlock__7tYRK',
            };
        },
        23025: (t) => {
            t.exports = {
                root: 'ArtistFamiliarPageContent_root__0Mc9t',
                scrollContainer: 'ArtistFamiliarPageContent_scrollContainer__TD6Kj',
                important: 'ArtistFamiliarPageContent_important__o2KTP',
                content: 'ArtistFamiliarPageContent_content__QquDA',
                block: 'ArtistFamiliarPageContent_block__Cr2H_',
                blockHeader: 'ArtistFamiliarPageContent_blockHeader__Z_uvq',
                tracksBlock: 'ArtistFamiliarPageContent_tracksBlock__SCCLT',
                footer: 'ArtistFamiliarPageContent_footer__nveR8',
                item: 'ArtistFamiliarPageContent_item__fyC2q',
                shimmerTitle: 'ArtistFamiliarPageContent_shimmerTitle__WU3vH',
            };
        },
        28991: (t) => {
            t.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContainer: 'ArtistConcertsPage_scrollableContainer__qrAF_',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        29474: (t, e, a) => {
            'use strict';
            a.d(e, { b: () => d, L: () => i.useDownloadedTracks });
            var i = a(92533),
                s = a(60754),
                r = a(3623),
                l = a(80864),
                n = a(49574),
                o = a(95428);
            let d = s.gK
                .compose(s.gK.model('DownloadedTracks', { items: s.gK.maybeNull(s.gK.array(l.vj)), tracks: s.gK.maybeNull(s.gK.frozen()) }), o.XT)
                .views((t) => ({
                    get tracksDurationInMinutes() {
                        var e, a;
                        return (null != (a = null == (e = t.tracks) ? void 0 : e.reduce((t, e) => (e.durationMs ? t + e.durationMs : t), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!t.tracks) return [];
                        return t.tracks.map((t) => ({ type: r.R.DownloadedMusic, meta: t }));
                    },
                    get isEmpty() {
                        var i;
                        return t.isResolved && (null == (i = t.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((t) => ({
                    getData: (0, s.L3)(function* (e, a) {
                        let { modelActionsLogger: i } = (0, s._$)(t);
                        if (t.loadingState !== n.GuX.PENDING)
                            try {
                                t.loadingState = n.GuX.PENDING;
                                let i = yield e.getTracks(a);
                                (t.tracks = i), (t.items = (0, s.wg)(i.map((t) => (0, l.vU)(t)))), t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.RESOLVE);
                            } catch (e) {
                                i.error(e), t.loadingState !== n.GuX.IDLE && (t.loadingState = n.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (t.items = null), (t.tracks = null), (t.loadingState = n.GuX.IDLE);
                    },
                }));
        },
        29775: (t) => {
            t.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        31854: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistTracksPage: () => C });
            var i = a(32290),
                s = a(63618),
                r = a(96103),
                l = a(21916),
                n = a(55178),
                o = a(60900),
                d = a(39407),
                c = a(59824),
                u = a(71483),
                m = a(91027),
                g = a(71926),
                p = a(32381),
                f = a(75645),
                h = a(80864),
                S = a(33797),
                _ = a(49574),
                b = a(44574),
                v = a(94331),
                A = a(22644),
                x = a(51714),
                T = a(81613),
                L = a.n(T);
            let C = (0, r.PA)((t) => {
                var e, a, r, T, C, N;
                let { artistId: I, preloadedArtist: j } = t,
                    {
                        artist: k,
                        sonataState: E,
                        disclaimerModalState: P,
                        settings: { isMobile: y },
                    } = (0, _.Pjs)(),
                    { formatMessage: R } = (0, o.A)(),
                    { from: w, utmLink: M } = (0, _.fyy)({ pageId: _._Q$.ARTIST_TRACKS, pageEntityId: I, contextType: u.K.Artist, contextId: I }),
                    { contentScrollRef: F, setContentScrollRef: O } = (0, _.gKY)(),
                    U = (0, _.W6M)(),
                    B = (0, _.wZZ)(),
                    G = (0, S.SA)({ artist: null == (e = k.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                (0, x.G)(I),
                    (0, n.useEffect)(() => {
                        var t;
                        (null == (t = k.meta) ? void 0 : t.artist.isUnsafeLegal) && G();
                    }, [null == (a = k.meta) ? void 0 : a.artist.isUnsafeLegal, G]),
                    (0, A._)(k, I),
                    (0, n.useEffect)(
                        () => () => {
                            k.fullTracksListSubpage.reset();
                        },
                        [k],
                    ),
                    k.fullTracksListSubpage.isNotFound && (0, l.notFound)(),
                    (0, _.Jzs)(k.fullTracksListSubpage.isResolved);
                let D = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: L().footer }) }) }), []),
                    H = (0, m.c)((t) => {
                        let e = [];
                        for (let i = t.startIndex; i <= t.endIndex; i++) {
                            var a;
                            let t = null == (a = k.fullTracksListSubpage.ids) ? void 0 : a[i];
                            !k.fullTracksListSubpage.getTrackByIndex(i) && t && e.push(t);
                        }
                        e.length && k.fullTracksListSubpage.getTracks({ trackIds: e });
                    }),
                    V = [];
                return (k.fullTracksListSubpage.isNeededToLoad && V.push(k.fullTracksListSubpage.getTracksIds({ artistId: I })),
                k.infoLoadingState.isNeededToLoad && V.push(k.getInfo({ artistId: I, preloadedArtist: j })),
                ((t) => {
                    var e;
                    (0, n.useEffect)(() => {
                        if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                        let e = (0, S.Em)(t.meta.artist);
                        (0, v.z)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                            (0, _.jxB)(t);
                        });
                    }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                })(k),
                V.length && (0, n.use)(Promise.allSettled(V)),
                k.fullTracksListSubpage.isRejected && !k.fullTracksListSubpage.isNotFound)
                    ? (0, i.jsx)(p.w, {})
                    : (null == (r = k.meta) ? void 0 : r.artist.isLegalRejected)
                      ? (0, i.jsx)(b.MW, { modalState: P })
                      : (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.ARTIST_TRACKS,
                            pageEntityId: I,
                            children: (0, i.jsx)(f.hO, {
                                scrollElement: F,
                                outerTitle: R({ id: 'page.artist-tracks-header' }, { artistName: k.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: L().root,
                                    ...(0, c.Am)(c.Xk.artist.ARTIST_TRACKS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: U.canBack,
                                            children: (0, i.jsx)(g.Heading, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(d.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (T = k.meta) ? void 0 : T.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(L().scrollContainer, L().important),
                                            customComponents: D,
                                            itemContentCallback: (t) => {
                                                let e = k.fullTracksListSubpage.getTrackByIndex(t),
                                                    a = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'search-filters.track' }) });
                                                return e
                                                    ? (0, i.jsx)(h.Kt, {
                                                          track: e,
                                                          playContextParams: B(t, {
                                                              contextData: { type: u.K.Artist, meta: { id: Number(I) }, from: w, utmLink: M },
                                                              queueParams: { index: t, entityId: e.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: E.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, i.jsx)(b.DS, { isActive: !0, 'aria-label': a, variant: _.Xjt.PLAYLIST, className: L().shimmerItem });
                                            },
                                            totalCount: null != (N = null == (C = k.fullTracksListSubpage.ids) ? void 0 : C.length) ? N : 0,
                                            onGetDataByRange: H,
                                            pageSize: 20,
                                            listClassName: L().content,
                                            itemClassName: L().item,
                                            totalRequests: k.fullTracksListSubpage.tracks.size,
                                            handleRef: O,
                                            context: { listAriaLabel: R({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: y,
                                            useWindowScroll: y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        33354: (t, e, a) => {
            'use strict';
            a.d(e, { s: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-discography-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-discography-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/discography', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        34581: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistAlbumsPage: () => I });
            var i = a(32290),
                s = a(63618),
                r = a(96103),
                l = a(21916),
                n = a(55178),
                o = a(60900),
                d = a(59824),
                c = a(37215),
                u = a(91027),
                m = a(71926),
                g = a(32381),
                p = a(16486),
                f = a(58634),
                h = a(75645),
                S = a(33797),
                _ = a(49574),
                b = a(44574),
                v = a(57707),
                A = a(66491),
                x = a(33354),
                T = a(22644),
                L = a(51714),
                C = a(52381),
                N = a.n(C);
            let I = (0, r.PA)((t) => {
                var e, a, r;
                let { artistId: C, variant: I, preloadedArtist: j, preloadedAlbums: k } = t,
                    {
                        artist: E,
                        disclaimerModalState: P,
                        settings: { isMobile: y },
                    } = (0, _.Pjs)(),
                    { formatMessage: R } = (0, o.A)(),
                    { contentScrollRef: w, setContentScrollRef: M } = (0, _.gKY)(),
                    F = (0, _.W6M)(),
                    O = E.albumsSubpage.isShimmerVisible ? f.r3 : E.albumsSubpage.items.length,
                    U = (0, u.c)((t) => {
                        E.albumsSubpage.getData({ artistId: C, page: t, pageSize: f.r3, sort: { sortBy: c.g.YEAR } });
                    });
                (0, _.XcE)(E.albumsSubpage.pagesLoader, U);
                let B = (0, S.SA)({ artist: null == (e = E.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                (0, L.G)(C),
                    (0, n.useEffect)(() => {
                        var t;
                        (null == (t = E.meta) ? void 0 : t.artist.isUnsafeLegal) && B();
                    }, [null == (a = E.meta) ? void 0 : a.artist.isUnsafeLegal, B]),
                    (0, T._)(E, C),
                    (0, n.useEffect)(
                        () => () => {
                            E.albumsSubpage.reset();
                        },
                        [E, E.albumsSubpage],
                    ),
                    E.albumsSubpage.isNotFound && (0, l.notFound)(),
                    (0, _.Jzs)(E.albumsSubpage.isResolved),
                    ((t, e) => {
                        var a;
                        (0, n.useEffect)(() => {
                            if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                            let a = (0, S.Em)(t.meta.artist);
                            switch (e) {
                                case _.hVl.ALBUMS:
                                    (0, v.T)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, _.jxB)(t);
                                    });
                                    break;
                                case _.hVl.COMPILATIONS:
                                    (0, A.t)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, _.jxB)(t);
                                    });
                                    break;
                                case _.hVl.DISCOGRAPHY:
                                    (0, x.s)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                        (0, _.jxB)(t);
                                    });
                            }
                        }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, e, null == t || null == (a = t.meta) ? void 0 : a.artist]);
                    })(E, I);
                let G = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: N().footer }) }) }), []),
                    D = (0, n.useMemo)(() => {
                        switch (I) {
                            case _.hVl.DISCOGRAPHY:
                                return R({ id: 'page.artist-discography-header' }, { artistName: E.commonSubPage.artistName });
                            case _.hVl.COMPILATIONS:
                                return R({ id: 'page.artist-compilations-header' }, { artistName: E.commonSubPage.artistName });
                            default:
                                return R({ id: 'page.artist-albums-header' }, { artistName: E.commonSubPage.artistName });
                        }
                    }, [E.commonSubPage.artistName, R, I]),
                    H = (0, n.useMemo)(() => {
                        switch (I) {
                            case _.hVl.DISCOGRAPHY:
                                return R({ id: 'entity-names.artist-studio-albums-list' });
                            case _.hVl.COMPILATIONS:
                                return R({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return R({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [R, I]),
                    V = (0, n.useMemo)(() => {
                        switch (I) {
                            case _.hVl.DISCOGRAPHY:
                                return _._Q$.ARTIST_DISCOGRAPHY;
                            case _.hVl.COMPILATIONS:
                                return _._Q$.ARTIST_COMPILATIONS;
                            default:
                                return _._Q$.ARTIST_ALBUMS;
                        }
                    }, [I]),
                    W = [];
                return (C &&
                    E.albumsSubpage.isNeededToLoad &&
                    (E.albumsSubpage.setVariant(I),
                    W.push(E.albumsSubpage.getData({ artistId: C, page: 0, pageSize: f.r3, sort: { sortBy: c.g.YEAR }, preloadedAlbums: k }))),
                C && E.infoLoadingState.isNeededToLoad && W.push(E.getInfo({ artistId: C, preloadedArtist: j })),
                W.length && (0, n.use)(Promise.allSettled(W)),
                null == (r = E.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(b.MW, { modalState: P })
                    : E.albumsSubpage.isRejected && !E.albumsSubpage.isNotFound
                      ? (0, i.jsx)(g.w, {})
                      : (0, i.jsx)(_.nVz, {
                            pageId: V,
                            pageEntityId: C,
                            children: (0, i.jsx)(h.hO, {
                                scrollElement: w,
                                outerTitle: D,
                                children: (0, i.jsxs)('div', {
                                    className: N().root,
                                    ...(0, d.Am)(d.Xk.artist.ARTIST_ALBUMS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: F.canBack,
                                            children: (0, i.jsx)(m.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: D }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(N().scrollContainer, N().important),
                                            listClassName: N().content,
                                            itemClassName: N().item,
                                            customComponents: G,
                                            itemContentCallback: (t) => {
                                                let e = E.albumsSubpage.items[t],
                                                    a = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.playlist' }) });
                                                return e
                                                    ? (0, i.jsx)(p.aX, { album: e, contentLinesCount: 4 }, e.id)
                                                    : (0, i.jsx)(b.Vt, { 'aria-label': a, linesCount: 4 });
                                            },
                                            totalCount: O,
                                            onGetDataByPage: U,
                                            pageSize: f.r3,
                                            totalRequests: E.albumsSubpage.requestsCount,
                                            handleRef: M,
                                            context: { listAriaLabel: H },
                                            isMobileLayout: y,
                                            useWindowScroll: y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        35128: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistConcertsPage: () => L });
            var i = a(32290),
                s = a(96103),
                r = a(21916),
                l = a(55178),
                n = a(60900),
                o = a(27576),
                d = a(59824),
                c = a(46049),
                u = a(71926),
                m = a(75645),
                g = a(33797),
                p = a(73298),
                f = a(49574),
                h = a(44574),
                S = a(16172),
                _ = a(52068),
                b = a(35420),
                v = a(22644),
                A = a(51714),
                x = a(28991),
                T = a.n(x);
            let L = (0, s.PA)((t) => {
                var e, a, s;
                let { artistId: x, preloadedArtist: L, preloadedConcerts: C } = t,
                    { artist: N, disclaimerModalState: I, experiments: j } = (0, f.Pjs)(),
                    k = j.checkExperiment(f.zal.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: E } = (0, n.A)(),
                    { contentScrollRef: P, setContentScrollRef: y } = (0, f.gKY)(),
                    R = (0, f.W6M)(),
                    w = (0, l.useRef)(String((0, o.A)())),
                    M = ((t) => {
                        let { artistId: e, viewUuid: a } = t,
                            i = (0, _.st)(),
                            { hash: s } = (0, _.gf)(),
                            r = (0, f.UlF)();
                        return (0, l.useCallback)(() => {
                            if (!i || !e) return;
                            let t = (0, S.Fx)({ params: { hash: s, artistId: e, viewUuid: a }, logger: r, context: 'useSendEventOnConcertsPageOpened' });
                            t && (0, S.__)(i.evgenInstance, t);
                        }, [i, e, s, r, a]);
                    })({ artistId: x, viewUuid: w.current }),
                    F = ((t) => {
                        let { artistId: e, viewUuid: a } = t,
                            i = (0, _.st)(),
                            { hash: s } = (0, _.gf)(),
                            r = (0, f.UlF)();
                        return (0, l.useCallback)(() => {
                            if (!i || !e) return;
                            let t = (0, S.Fx)({ params: { hash: s, artistId: e, viewUuid: a }, logger: r, context: 'useSendEventOnConcertsPageClosed' });
                            t && (0, S.pe)(i.evgenInstance, t);
                        }, [i, e, s, r, a]);
                    })({ artistId: x, viewUuid: w.current });
                (0, l.useEffect)(
                    () => (
                        M(),
                        () => {
                            F();
                        }
                    ),
                    [F, M],
                );
                let O = (0, g.SA)({ artist: null == (e = N.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                (0, A.G)(x),
                    (0, l.useEffect)(() => {
                        var t;
                        (null == (t = N.meta) ? void 0 : t.artist.isUnsafeLegal) && O();
                    }, [null == (a = N.meta) ? void 0 : a.artist.isUnsafeLegal, O]),
                    (0, v._)(N, x),
                    (0, l.useEffect)(
                        () => () => {
                            N.concertsSubpage.reset();
                        },
                        [N],
                    ),
                    (0, f.Jzs)(N.concertsSubpage.isResolved),
                    (N.concertsSubpage.isNotFound || j.checkExperiment(f.zal.disableAllConcerts, 'on')) && (0, r.notFound)();
                let U = (0, l.useMemo)(() => {
                        var t;
                        if (N.concertsSubpage.isLoading) return (0, h.Tb)(10);
                        let e = k ? p.MU : p.ZH;
                        return null == (t = N.concertsSubpage.concerts)
                            ? void 0
                            : t.map((t, a) =>
                                  (0, i.jsx)(
                                      f.Bki,
                                      {
                                          objectId: String(t.id),
                                          objectPos: a + 1,
                                          children: (0, i.jsx)(p.VN, {
                                              artistId: x,
                                              concert: t,
                                              viewUuid: w.current,
                                              meta: (0, i.jsx)(e, { concert: t }),
                                              shouldShowMask: k,
                                          }),
                                      },
                                      t.id,
                                  ),
                              );
                    }, [N.concertsSubpage.concerts, N.concertsSubpage.isLoading, x, k, w]),
                    B = [];
                if (
                    (N.concertsSubpage.isNeededToLoad && B.push(N.concertsSubpage.getData({ artistId: Number(x), preloadedConcerts: C })),
                    N.infoLoadingState.isNeededToLoad && B.push(N.getInfo({ artistId: x, preloadedArtist: L })),
                    ((t) => {
                        var e;
                        (0, l.useEffect)(() => {
                            if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                            let e = (0, g.Em)(t.meta.artist);
                            (0, b.U)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                (0, f.jxB)(t);
                            });
                        }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                    })(N),
                    B.length && (0, l.use)(Promise.allSettled(B)),
                    null == (s = N.meta) ? void 0 : s.artist.isLegalRejected)
                )
                    return (0, i.jsx)(h.MW, { modalState: I });
                let G = (0, l.useMemo)(
                    () =>
                        k && N.concertsSubpage.artistTitle
                            ? E({ id: 'page.artist-all-concerts-header' }, { artistName: N.concertsSubpage.artistTitle })
                            : E({ id: 'page.artist-concerts-header' }, { artistName: N.commonSubPage.artistName }),
                    [k, N.concertsSubpage.artistTitle, N.commonSubPage.artistName, E],
                );
                return (0, i.jsx)(f.nVz, {
                    pageId: f._Q$.ARTIST_CONCERTS,
                    pageEntityId: x,
                    children: (0, i.jsx)(f.jPc, {
                        children: (0, i.jsxs)(m.hO, {
                            scrollElement: P,
                            outerTitle: G,
                            children: [
                                (0, i.jsx)(h.Y9, {
                                    variant: h.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: R.canBack,
                                    children: (0, i.jsx)(u.Heading, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: G }),
                                }),
                                (0, i.jsx)(c.N, {
                                    ref: y,
                                    className: T().root,
                                    containerClassName: T().scrollableContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: T().container,
                                        ...(0, d.Am)(d.Xk.artist.ARTIST_CONCERTS_PAGE),
                                        children: [
                                            (0, i.jsx)('div', { className: T().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: U }),
                                            (0, i.jsx)(h.A, { children: (0, i.jsx)(h.wi, { className: T().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        35420: (t, e, a) => {
            'use strict';
            a.d(e, { U: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-concerts-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-concerts-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/concerts', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        42731: (t) => {
            t.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        43144: (t, e, a) => {
            'use strict';
            a.d(e, { E: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-clips-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-clips-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/clips', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        48559: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistNotFoundPage: () => d });
            var i = a(32290),
                s = a(96103),
                r = a(55178),
                l = a(80719),
                n = a(49574);
            let o = (0, s.PA)(() => {
                    let { artist: t } = (0, n.Pjs)();
                    return (
                        (0, n.ACS)(),
                        (0, r.useEffect)(() => {
                            t.reset();
                        }, []),
                        (0, i.jsx)(l.M, {})
                    );
                }),
                d = (0, s.PA)(() => (0, i.jsx)(n.nVz, { pageId: n._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(o, {}) }));
        },
        51714: (t, e, a) => {
            'use strict';
            a.d(e, { G: () => r });
            var i = a(55178),
                s = a(49574);
            let r = (t) => {
                var e;
                let { setDeeplink: a } = null != (e = (0, s.P7Q)()) ? e : {};
                (0, i.useEffect)(() => {
                    if (t) {
                        let { href: e } = (0, s.uvd)('/artist/:artistId', { params: { artistId: t } });
                        null == a || a(e);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [t, a]);
            };
        },
        52381: (t) => {
            t.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        57707: (t, e, a) => {
            'use strict';
            a.d(e, { T: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-albums-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-albums-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/albums', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        60367: (t) => {
            t.exports = {
                root: 'ArtistFamiliarPageHeader_root__0Wxyx',
                container: 'ArtistFamiliarPageHeader_container__HFQzt',
                title: 'ArtistFamiliarPageHeader_title__YpVQg',
                tabs: 'ArtistFamiliarPageHeader_tabs__CrnJC',
                tab: 'ArtistFamiliarPageHeader_tab__RK4OK',
                tabsShimmer: 'ArtistFamiliarPageHeader_tabsShimmer__cbLvV',
                tabShimmer: 'ArtistFamiliarPageHeader_tabShimmer__iLiqI',
                staticHeader: 'ArtistFamiliarPageHeader_staticHeader__LrzR8',
                important: 'ArtistFamiliarPageHeader_important__buc81',
                stickyHeader: 'ArtistFamiliarPageHeader_stickyHeader__u7JdF',
            };
        },
        62978: (t, e, a) => {
            'use strict';
            a.d(e, { y: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-similar-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-similar-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/similar', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        66075: (t, e, a) => {
            'use strict';
            a.d(e, { G: () => c });
            var i,
                s = a(97020),
                r = a(55178),
                l = {
                    6699: (t, e, a) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useDebouncedToggle = void 0);
                        let i = a(352),
                            s = a(810);
                        e.useDebouncedToggle = (t) => {
                            let { delay: e, initialState: a, throttleTimeout: r } = t,
                                l = (0, s.useRef)(null),
                                [n, o] = (0, s.useState)(!!a),
                                d = (0, s.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            o(!a),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, e));
                                        }, r),
                                    [e, a, r],
                                ),
                                c = (0, s.useCallback)(() => {
                                    o(!!a), l.current && window.clearTimeout(l.current);
                                }, [a]);
                            return (
                                (0, s.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    2767: (t, e, a) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useForceUpdateRef = void 0);
                        let i = a(810);
                        e.useForceUpdateRef = () => {
                            let [t, e] = (0, i.useState)(null);
                            return [
                                t,
                                (0, i.useCallback)((t) => {
                                    e((e) => (e !== t ? t : e));
                                }, []),
                            ];
                        };
                    },
                    2067: (t, e, a) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useScroll = void 0);
                        let i = a(810),
                            s = a(361),
                            r = a(6699);
                        e.useScroll = (t) => {
                            let { onScroll: e, listenIsScrolling: a, elementRef: l } = t,
                                { state: n, handleDebouncedToggle: o } = (0, r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, i.useCallback)(() => {
                                    a && o(), null == e || e();
                                }, [a, o, e]);
                            return (
                                (0, i.useEffect)(() => {
                                    let t = (0, s.getElementFromRefOrElement)(l);
                                    if (null === t) return;
                                    let e = null != t ? t : window,
                                        a = { capture: !0, passive: !0 };
                                    return e.addEventListener('scroll', d, a), () => e.removeEventListener('scroll', d, a);
                                }, [l, d]),
                                n
                            );
                        };
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement) return t;
                                    if (null === t.current || t.current instanceof HTMLElement) return t.current;
                                }
                            });
                    },
                    352: (t) => {
                        t.exports = s;
                    },
                    810: (t) => {
                        t.exports = i || (i = a.t(r, 2));
                    },
                },
                n = {};
            function o(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var a = (n[t] = { exports: {} });
                return l[t](a, a.exports, o), a.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0);
                let t = o(810),
                    e = o(2067),
                    a = o(2767);
                d.useElementOffsetY = (i) => {
                    let [s, r] = (0, a.useForceUpdateRef)(),
                        [l, n] = (0, t.useState)(),
                        o = (0, t.useCallback)(() => {
                            let t = null == s ? void 0 : s.getBoundingClientRect();
                            t && n(t.y);
                        }, [s]);
                    return (0, t.useLayoutEffect)(o), (0, e.useScroll)({ onScroll: o, elementRef: i }), { forceUpdateRefCallback: r, offsetY: l };
                };
            })(),
                d.__esModule;
            var c = d.useElementOffsetY;
        },
        66491: (t, e, a) => {
            'use strict';
            a.d(e, { t: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-compilations-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-compilations-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/compilations', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        68033: (t) => {
            t.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        69148: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistSimilarPage: () => T });
            var i = a(32290),
                s = a(96103),
                r = a(21916),
                l = a(55178),
                n = a(60900),
                o = a(39407),
                d = a(59824),
                c = a(46049),
                u = a(71926),
                m = a(32381),
                g = a(58634),
                p = a(75645),
                f = a(33797),
                h = a(49574),
                S = a(44574),
                _ = a(62978),
                b = a(22644),
                v = a(51714),
                A = a(76135),
                x = a.n(A);
            let T = (0, s.PA)((t) => {
                var e, a, s, A;
                let { artistId: T, preloadedArtist: L, preloadedSimilarArtists: C } = t,
                    { artist: N, disclaimerModalState: I } = (0, h.Pjs)(),
                    { formatMessage: j } = (0, n.A)(),
                    { contentScrollRef: k, setContentScrollRef: E } = (0, h.gKY)(),
                    P = (0, h.W6M)(),
                    y = (0, f.SA)({ artist: null == (e = N.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                (0, v.G)(T),
                    (0, l.useEffect)(() => {
                        var t;
                        (null == (t = N.meta) ? void 0 : t.artist.isUnsafeLegal) && y();
                    }, [null == (a = N.meta) ? void 0 : a.artist.isUnsafeLegal, y]),
                    (0, b._)(N, T),
                    (0, l.useEffect)(
                        () => () => {
                            N.similarArtistsSubPage.reset();
                        },
                        [N],
                    ),
                    N.similarArtistsSubPage.isNotFound && (0, r.notFound)(),
                    (0, h.Jzs)(N.similarArtistsSubPage.isResolved);
                let R = (0, l.useMemo)(() => {
                        if (N.similarArtistsSubPage.isResolved) {
                            var t;
                            return null == (t = N.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : t.map((t) => (0, i.jsx)(g.ao, { className: x().item, artist: t, contentLinesCount: 3 }, t.id));
                        }
                        let e = j({ id: 'loading-messages.entity-is-loading' }, { entityName: j({ id: 'entity-names.similar-artists' }) });
                        return (0, i.jsx)(S.eI, { isActive: !0, itemClassName: x().item, round: !0, centered: !0, 'aria-label': e });
                    }, [
                        N.similarArtistsSubPage.loadingState,
                        N.similarArtistsSubPage.similarArtists,
                        j,
                        null == (s = N.similarArtistsSubPage.similarArtists) ? void 0 : s.length,
                    ]),
                    w = [];
                return (N.similarArtistsSubPage.isNeededToLoad && w.push(N.similarArtistsSubPage.getData({ artistId: T, preloadedSimilarArtists: C })),
                N.infoLoadingState.isNeededToLoad && w.push(N.getInfo({ artistId: T, preloadedArtist: L })),
                ((t) => {
                    var e;
                    (0, l.useEffect)(() => {
                        if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                        let e = (0, f.Em)(t.meta.artist);
                        (0, _.y)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                            (0, h.jxB)(t);
                        });
                    }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                })(N),
                w.length && (0, l.use)(Promise.allSettled(w)),
                null == (A = N.meta) ? void 0 : A.artist.isLegalRejected)
                    ? (0, i.jsx)(S.MW, { modalState: I })
                    : N.isInfoSomethingWentWrong
                      ? (0, i.jsx)(m.w, {})
                      : (0, i.jsx)(h.nVz, {
                            pageId: h._Q$.ARTIST_SIMILAR,
                            pageEntityId: T,
                            children: (0, i.jsx)(p.hO, {
                                scrollElement: k,
                                outerTitle: j({ id: 'page.artist-similar-header' }, { artistName: N.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: x().root,
                                    children: [
                                        (0, i.jsx)(S.Y9, {
                                            variant: S.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, i.jsx)(u.Heading, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: N.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, i.jsxs)(c.N, {
                                            className: x().scrollableContent,
                                            containerClassName: x().container,
                                            ref: E,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    ...(0, d.Am)(d.Xk.artist.ARTIST_SIMILAR_PAGE),
                                                    children: (0, i.jsx)('div', {
                                                        className: x().content,
                                                        'aria-labelledby': 'collection-artists-header',
                                                        tabIndex: 0,
                                                        children: R,
                                                    }),
                                                }),
                                                (0, i.jsx)(S.A, { children: (0, i.jsx)(S.wi, { className: x().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        70165: (t, e, a) => {
            'use strict';
            a.d(e, { ArtistPage: () => F });
            var i = a(32290),
                s = a(96103),
                r = a(21916),
                l = a(55178),
                n = a(60900),
                o = a(59824),
                d = a(73474),
                c = a(91027),
                u = a(66075),
                m = a(46049),
                g = a(30039),
                p = a(32381),
                f = a(75645),
                h = a(33797),
                S = a(49574),
                _ = a(44574),
                b = a(70743),
                v = a(22644),
                A = a(51714),
                x = a(63618),
                T = a(71483),
                L = a(29474),
                C = a(80864),
                N = a(20279),
                I = a.n(N);
            let j = (0, s.PA)((t) => {
                let { artistId: e, isWebNextNavigationOn: a } = t,
                    s = (0, S.jRO)(),
                    { contentScrollRef: d, setContentScrollRef: m } = (0, S.gKY)(),
                    { formatMessage: h } = (0, n.A)(),
                    {
                        artist: { offlineArtist: b },
                    } = (0, S.Pjs)(),
                    { trackIds: v, downloadedTracks: A } = b,
                    { from: N } = (0, S.fyy)({ pageId: S._Q$.ARTIST, blockId: S.UfI.TRACK_LIST }),
                    j = (0, S.v8w)(),
                    k = (0, S.wZZ)(),
                    { forceUpdateRefCallback: E, offsetY: P } = (0, u.G)(d),
                    { topColorStyle: y, headerStyle: R } = (0, f.QZ)(null, P, a),
                    w = (0, c.c)(() => {
                        s.tracksController && v.ids && A.getData(s.tracksController, v.ids);
                    });
                (0, L.L)(w),
                    (0, l.useEffect)(() => {
                        b.meta && A.isResolved && A.items && b.setTracksCount(A.items.length);
                    }, [b, b.meta, A.isResolved, A.items]),
                    (0, l.useEffect)(() => {
                        A.isNeededToLoad && v.isResolved && w();
                    }, [A.isNeededToLoad, v.isResolved, w]),
                    (0, l.useEffect)(
                        () => () => {
                            b.reset();
                        },
                        [b, e],
                    ),
                    (0, S.Jzs)(b.isResolved);
                let M = (0, l.useMemo)(
                        () =>
                            b.isLoading || !b.meta
                                ? (0, i.jsx)(g.c6, { className: I().header, coverRadius: 'round' })
                                : (0, i.jsx)(g.qi, { className: I().header, artistMeta: b.meta, entitiesData: A.entitiesData, ref: E }),
                        [b.isLoading, b.meta, A.entitiesData, E],
                    ),
                    F = (0, l.useMemo)(() => ({ Header: () => M, Footer: () => (0, i.jsx)(_.A, { children: (0, i.jsx)(_.wi, { className: I().footer }) }) }), [M]),
                    O = A.items ? A.items.length : 10;
                if (b.isNeededToLoad && j) {
                    let t = [b.getArtist(e, j), v.getIds(e, j)];
                    (0, l.use)(Promise.allSettled(t));
                }
                return (b.isNotFound && (0, r.notFound)(), b.isRejected || v.isRejected || A.isRejected)
                    ? (0, i.jsx)(p.w, {})
                    : (0, i.jsx)(S.nVz, {
                          pageId: S._Q$.ARTIST,
                          pageEntityId: e,
                          children: (0, i.jsxs)(f.hO, {
                              scrollElement: d,
                              children: [
                                  (0, i.jsx)(_.Y9, { style: R }),
                                  (0, i.jsx)('div', { className: I().averageColorBackground, style: y }),
                                  (0, i.jsx)(_.$$, {
                                      context: { listAriaLabel: h({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, x.$)(I().root, I().important),
                                      listClassName: I().content,
                                      customComponents: F,
                                      totalCount: O,
                                      itemContentCallback: (t) => {
                                          var e;
                                          let a = null == (e = A.items) ? void 0 : e[t];
                                          return a
                                              ? (0, i.jsx)(
                                                    C.Kt,
                                                    {
                                                        track: a,
                                                        playContextParams: k(a.id, {
                                                            contextData: { type: T.K.Various, meta: { id: S._Q$.ARTIST }, from: N },
                                                            entitiesData: A.entitiesData,
                                                            queueParams: { index: t, entityId: a.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    a.id,
                                                )
                                              : (0, i.jsx)(_.DS, { isActive: !0, className: I().trackShimmer, variant: S.Xjt.PLAYLIST });
                                      },
                                      debounceDurationInMs: 300,
                                      initialItemCount: O,
                                      handleRef: m,
                                      shouldTriggerRangeChangedOn: [O],
                                      testId: o.Xk.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                                  }),
                              ],
                          }),
                      });
            });
            var k = a(22873),
                E = a.n(k),
                P = a(43557),
                y = a(90776),
                R = a.n(y);
            let w = (0, s.PA)((t) => {
                    let { artist: e } = t;
                    return (0, i.jsx)(P.EA, {
                        landing: e.landing,
                        errorComponent: (0, i.jsx)(p.w, { className: R().error, withBackwardControl: !1 }),
                        containerClassName: R().root,
                    });
                }),
                M = (0, s.PA)((t) => {
                    var e, a, s, x, T, L;
                    let { artistId: C, preloadedArtist: N, isWebNextNavigationOn: I } = t,
                        { notify: k } = (0, S.lkh)(),
                        {
                            artist: P,
                            disclaimerModalState: y,
                            slam: R,
                            modals: { imageSliderModal: M },
                        } = (0, S.Pjs)(),
                        { formatMessage: F } = (0, n.A)(),
                        O = (0, l.useRef)(0),
                        { contentScrollRef: U, setContentScrollRef: B } = (0, S.gKY)(),
                        { forceUpdateRefCallback: G, offsetY: D } = (0, u.G)(U),
                        H = (0, l.useRef)(null),
                        V = (0, S.ytd)(null == P || null == (a = P.meta) || null == (e = a.artist) ? void 0 : e.averageColor),
                        { topColorStyle: W, headerStyle: Y } = (0, f.QZ)(V, D, I),
                        z = null == (s = P.meta) ? void 0 : s.hasCovers,
                        K = (0, r.useSearchParams)();
                    (0, A.G)(C),
                        (0, S.ACS)(),
                        (0, l.useEffect)(() => {
                            let t = K.get(S.K3F.BLOCK);
                            t &&
                                P.infoLoadingState.isResolved &&
                                P.landing.isLoaded &&
                                ((t) => {
                                    let { blockId: e, scrollRef: a, headerRef: i } = t,
                                        s = document.getElementById(e);
                                    if (s && a) {
                                        var r;
                                        let t = s.getBoundingClientRect().top,
                                            e = (null == (r = i.current) ? void 0 : r.offsetHeight) ? t - i.current.offsetHeight : t;
                                        a.scrollTo({ top: e - 10, behavior: 'smooth' });
                                    }
                                })({ blockId: t, scrollRef: U, headerRef: H });
                        }, [P.infoLoadingState.isResolved, P.landing.isLoaded, U, K]);
                    let X = (0, h.SA)({ artist: null == (x = P.meta) ? void 0 : x.artist, shouldHistoryBack: !0 });
                    (0, l.useEffect)(() => {
                        var t;
                        (null == (t = P.meta) ? void 0 : t.artist.isUnsafeLegal) && X();
                    }, [null == (T = P.meta) ? void 0 : T.artist.isUnsafeLegal, X]),
                        (0, v._)(P, C);
                    let $ = (0, c.c)(() => {
                        var t;
                        (null == (t = P.meta) ? void 0 : t.hasCovers) && P.meta.covers && M.openImages({ images: P.meta.covers });
                    });
                    if (R.isOfflineModeEnabled) return (0, i.jsx)(j, { artistId: C, isWebNextNavigationOn: I });
                    if (P.deprecationTargetArtistId) {
                        let { href: t } = (0, S.uvd)('/artist/:artistId', { params: { artistId: P.deprecationTargetArtistId } });
                        (0, r.redirect)(t);
                    }
                    (0, l.useMemo)(
                        () => () => {
                            (P.infoLoadingState.isRejected || (!P.meta && !P.infoLoadingState.isLoading && !P.infoLoadingState.isNeededToLoad)) &&
                                O &&
                                !(O.current > 0) &&
                                (k((0, i.jsx)(_.hT, { error: F({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: S.uQT.ERROR }), O.current++);
                        },
                        [P.infoLoadingState.isRejected, P.infoLoadingState.isLoading, P.infoLoadingState.isNeededToLoad, P.meta, k, F],
                    )(),
                        (0, S.Jzs)(P.infoLoadingState.isResolved),
                        P.isInfoNotFound && (0, r.notFound)(),
                        ((t) => {
                            var e;
                            (0, l.useEffect)(() => {
                                if (!(null == t ? void 0 : t.meta) || t.infoLoadingState.isLoading || !t.meta.artist) return;
                                let e = (0, h.Em)(t.meta.artist);
                                (0, b.z)({ artist: e }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((t) => {
                                    (0, S.jxB)(t);
                                });
                            }, [null == t ? void 0 : t.meta, null == t ? void 0 : t.infoLoadingState.isLoading, null == t || null == (e = t.meta) ? void 0 : e.artist]);
                        })(P);
                    let Q = (0, l.useMemo)(
                            () =>
                                P.infoLoadingState.isLoading || !P.meta
                                    ? (0, i.jsx)(g.c6, { className: E().header, coverRadius: 'round' })
                                    : (0, i.jsx)(g.qi, { className: E().header, artistMeta: P.meta, ref: G, onCoverClick: z ? $ : void 0 }),
                            [P.infoLoadingState.isLoading, P.meta, z, G, $],
                        ),
                        J = [];
                    return (P.infoLoadingState.isNeededToLoad && J.push(P.getInfo({ artistId: C, preloadedArtist: N })),
                    P.landing.isNeededToLoad && J.push(P.landing.getArtistSkeleton({ artistId: C, skeletonId: d.p.ARTIST }, { preloadBlocksCount: 2 })),
                    J.length && (0, l.use)(Promise.allSettled(J)),
                    P.isInfoSomethingWentWrong)
                        ? (0, i.jsx)(p.w, {})
                        : (null == (L = P.meta) ? void 0 : L.artist.isLegalRejected)
                          ? (0, i.jsx)(_.MW, { modalState: y })
                          : (0, i.jsx)(S.jPc, {
                                children: (0, i.jsxs)(f.hO, {
                                    scrollElement: U,
                                    children: [
                                        (0, i.jsx)(_.Y9, { style: Y, innerHeaderRef: H }),
                                        (0, i.jsx)('div', { className: E().averageColorBackground, style: W }),
                                        (0, i.jsxs)(m.N, {
                                            className: E().root,
                                            containerClassName: E().content,
                                            ref: B,
                                            ...(0, o.Am)(o.Xk.artist.ARTIST_PAGE),
                                            children: [
                                                (0, i.jsxs)('div', { children: [Q, (0, i.jsx)(w, { artist: P })] }),
                                                (0, i.jsx)(_.A, { children: (0, i.jsx)(_.wi, { className: E().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                F = (0, s.PA)((t) => (0, i.jsx)(S.nVz, { pageId: S._Q$.ARTIST, pageEntityId: t.artistId, children: (0, i.jsx)(M, { ...t }) }));
        },
        70743: (t, e, a) => {
            'use strict';
            a.d(e, { z: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r, l, n;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let o = await (0, i.WGy)(e.locale),
                    d = (0, i.NsT)(t.artist.name),
                    c = o({ id: 'metadata.artist-title' }, { artistTitle: t.artist.name }),
                    u = o({ id: 'metadata.artist-description' }, { artistTitle: t.artist.name });
                return {
                    title: c,
                    description: u,
                    openGraph: (0, i.i$E)({
                        ogTitle: d,
                        ogDescription: u,
                        fullUrl: null != (s = e.fullUrl) ? s : '',
                        locale: e.locale,
                        ogImage: null != (r = null == (a = t.artist.cover) ? void 0 : a.uri) ? r : '',
                        siteName: o({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: d, url: e.url, appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (l = e.url) ? l : '', fullUrl: null != (n = e.fullUrl) ? n : '', host: e.host },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': t.artist.name },
                    alternates: (0, i.SEs)('/artist/:artistId', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        76135: (t) => {
            t.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        81613: (t) => {
            t.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        90776: (t) => {
            t.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        92533: (t, e, a) => {
            'use strict';
            a.d(e, { useDownloadedTracks: () => o });
            var i = a(55178),
                s = a(44547),
                r = a(91027),
                l = a(49574);
            let n = [s.DT.IDLE, s.DT.DOWNLOADED],
                o = (t) => {
                    var e;
                    let a = (0, l.jRO)(),
                        o = (0, r.c)((e) => {
                            let { state: a } = e;
                            n.includes(a.loadingState) && t();
                        });
                    (0, i.useEffect)(() => {
                        var e, i;
                        return (
                            null == (e = a.store) || e.tracks.events.on(s.je.STATE_CHANGED, t),
                            null == (i = a.store) || i.tracks.events.on(s.je.ENTITY_CHANGED, o),
                            () => {
                                var e, i;
                                null == (e = a.store) || e.tracks.events.off(s.je.STATE_CHANGED, t), null == (i = a.store) || i.tracks.events.off(s.je.ENTITY_CHANGED, o);
                            }
                        );
                    }, [t, o, null == (e = a.store) ? void 0 : e.tracks.events]);
                };
        },
        94331: (t, e, a) => {
            'use strict';
            a.d(e, { z: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-tracks-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-tracks-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/tracks', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
        98736: (t, e, a) => {
            'use strict';
            a.d(e, { Q: () => s });
            var i = a(49574);
            async function s(t, e) {
                var a, s, r;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(e.locale),
                    n = l({ id: 'metadata.artist-familiar-you-title' }, { artistName: t.artist.name }),
                    o = l({ id: 'metadata.artist-familiar-you-description' }, { artistName: t.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = e.fullUrl) ? a : '',
                        locale: e.locale,
                        customImage: (0, i.vWM)({ tld: e.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...e, url: null != (s = e.url) ? s : '', fullUrl: null != (r = e.fullUrl) ? r : '', host: e.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/familiar', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
        },
    },
]);
