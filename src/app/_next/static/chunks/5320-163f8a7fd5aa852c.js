(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5320],
    {
        1137: (e, t, a) => {
            'use strict';
            a.d(t, { useDownloadedTracks: () => o });
            var i = a(44020),
                s = a(14622),
                r = a(59935),
                l = a(42561);
            let n = [s.DT.IDLE, s.DT.DOWNLOADED],
                o = (e) => {
                    var t;
                    let a = (0, l.jRO)(),
                        o = (0, r.c)((t) => {
                            let { state: a } = t;
                            n.includes(a.loadingState) && e();
                        });
                    (0, i.useEffect)(() => {
                        var t, i;
                        return (
                            null == (t = a.store) || t.tracks.events.on(s.je.STATE_CHANGED, e),
                            null == (i = a.store) || i.tracks.events.on(s.je.ENTITY_CHANGED, o),
                            () => {
                                var t, i;
                                null == (t = a.store) || t.tracks.events.off(s.je.STATE_CHANGED, e), null == (i = a.store) || i.tracks.events.off(s.je.ENTITY_CHANGED, o);
                            }
                        );
                    }, [e, o, null == (t = a.store) ? void 0 : t.tracks.events]);
                };
        },
        9409: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        15159: (e) => {
            e.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
        16634: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistSimilarPage: () => C });
            var i = a(62936),
                s = a(19718),
                r = a(69526),
                l = a(44020),
                n = a(47480),
                o = a(26731),
                c = a(8669),
                d = a(14501),
                u = a(20418),
                m = a(65438),
                p = a(11334),
                g = a(92229),
                h = a(81628),
                A = a(42561),
                f = a(85906),
                _ = a(73398),
                b = a(41320),
                v = a(85222),
                S = a(71015),
                k = a.n(S);
            let C = (0, s.PA)((e) => {
                var t, a, s, S;
                let { artistId: C, preloadedArtist: x, preloadedSimilarArtists: T } = e,
                    { artist: j, disclaimerModalState: N } = (0, A.Pjs)(),
                    { formatMessage: I } = (0, n.A)(),
                    { contentScrollRef: L, setContentScrollRef: P } = (0, A.gKY)(),
                    E = (0, A.W6M)(),
                    y = (0, h.SA)({ artist: null == (t = j.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, v.G)(C),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = j.meta) ? void 0 : e.artist.isUnsafeLegal) && y();
                    }, [null == (a = j.meta) ? void 0 : a.artist.isUnsafeLegal, y]),
                    (0, b._)(j, C),
                    (0, l.useEffect)(
                        () => () => {
                            j.similarArtistsSubPage.reset();
                        },
                        [j],
                    ),
                    j.similarArtistsSubPage.isNotFound && (0, r.notFound)(),
                    (0, A.Jzs)(j.similarArtistsSubPage.isResolved);
                let R = (0, l.useMemo)(() => {
                        if (j.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = j.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, i.jsx)(p.ao, { className: k().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = I({ id: 'loading-messages.entity-is-loading' }, { entityName: I({ id: 'entity-names.similar-artists' }) });
                        return (0, i.jsx)(f.eI, { isActive: !0, itemClassName: k().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        j.similarArtistsSubPage.loadingState,
                        j.similarArtistsSubPage.similarArtists,
                        I,
                        null == (s = j.similarArtistsSubPage.similarArtists) ? void 0 : s.length,
                    ]),
                    w = [];
                return (j.similarArtistsSubPage.isNeededToLoad && w.push(j.similarArtistsSubPage.getData({ artistId: C, preloadedSimilarArtists: T })),
                j.isNeededToLoad && w.push(j.getData({ artistId: C, preloadedArtist: x })),
                ((e) => {
                    (0, l.useEffect)(() => {
                        if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                        let t = (0, h.NE)(e.meta.artist);
                        (0, _.y)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, A.jxB)(e);
                        });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                })(j),
                w.length && (0, l.use)(Promise.allSettled(w)),
                null == (S = j.meta) ? void 0 : S.artist.isLegalRejected)
                    ? (0, i.jsx)(f.MW, { modalState: N })
                    : j.isRejected
                      ? (0, i.jsx)(m.w, {})
                      : (0, i.jsx)(A.nVz, {
                            pageId: A._Q$.ARTIST_SIMILAR,
                            pageEntityId: C,
                            children: (0, i.jsx)(g.hO, {
                                scrollElement: L,
                                outerTitle: I({ id: 'page.artist-similar-header' }, { artistName: j.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: k().root,
                                    children: [
                                        (0, i.jsx)(f.Y9, {
                                            variant: f.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: E.canBack,
                                            children: (0, i.jsx)(u.Heading, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: j.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, i.jsxs)(d.N, {
                                            className: k().scrollableContent,
                                            containerClassName: k().container,
                                            ref: P,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    ...(0, c.Am)(c.Xk.artist.ARTIST_SIMILAR_PAGE),
                                                    children: (0, i.jsx)('div', {
                                                        className: k().content,
                                                        'aria-labelledby': 'collection-artists-header',
                                                        tabIndex: 0,
                                                        children: R,
                                                    }),
                                                }),
                                                (0, i.jsx)(f.A, { children: (0, i.jsx)(f.wi, { className: k().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        19663: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        21202: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => c, L: () => i.useDownloadedTracks });
            var i = a(1137),
                s = a(51606),
                r = a(36547),
                l = a(66161),
                n = a(42561),
                o = a(54690);
            let c = s.gK
                .compose(s.gK.model('DownloadedTracks', { items: s.gK.maybeNull(s.gK.array(l.vj)), tracks: s.gK.maybeNull(s.gK.frozen()) }), o.XT)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: r.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var i;
                        return e.isResolved && (null == (i = e.items) ? void 0 : i.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, s.L3)(function* (t, a) {
                        let { modelActionsLogger: i } = (0, s._$)(e);
                        if (e.loadingState !== n.GuX.PENDING)
                            try {
                                e.loadingState = n.GuX.PENDING;
                                let i = yield t.getTracks(a);
                                (e.tracks = i), (e.items = (0, s.wg)(i.map((e) => (0, l.vU)(e)))), e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.RESOLVE);
                            } catch (t) {
                                i.error(t), e.loadingState !== n.GuX.IDLE && (e.loadingState = n.GuX.REJECT);
                            }
                    }),
                    reset() {
                        (e.items = null), (e.tracks = null), (e.loadingState = n.GuX.IDLE);
                    },
                }));
        },
        28687: (e) => {
            e.exports = {
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
        29222: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-discography-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-discography-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/discography', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        35231: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContainer: 'ArtistConcertsPage_scrollableContainer__qrAF_',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        35944: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        38593: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistAlbumsPage: () => N });
            var i = a(62936),
                s = a(79950),
                r = a(19718),
                l = a(69526),
                n = a(44020),
                o = a(47480),
                c = a(8669),
                d = a(28563),
                u = a(59935),
                m = a(20418),
                p = a(65438),
                g = a(90914),
                h = a(11334),
                A = a(92229),
                f = a(81628),
                _ = a(42561),
                b = a(85906),
                v = a(99775),
                S = a(88599),
                k = a(29222),
                C = a(41320),
                x = a(85222),
                T = a(93725),
                j = a.n(T);
            let N = (0, r.PA)((e) => {
                var t, a, r;
                let { artistId: T, variant: N, preloadedArtist: I, preloadedAlbums: L } = e,
                    {
                        artist: P,
                        disclaimerModalState: E,
                        settings: { isMobile: y },
                    } = (0, _.Pjs)(),
                    { formatMessage: R } = (0, o.A)(),
                    { contentScrollRef: w, setContentScrollRef: B } = (0, _.gKY)(),
                    M = (0, _.W6M)(),
                    O = P.albumsSubpage.isShimmerVisible ? h.r3 : P.albumsSubpage.items.length,
                    U = (0, u.c)((e) => {
                        P.albumsSubpage.getData({ artistId: T, page: e, pageSize: h.r3, sort: { sortBy: d.g.YEAR } });
                    });
                (0, _.XcE)(P.albumsSubpage.pagesLoader, U);
                let F = (0, f.SA)({ artist: null == (t = P.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, x.G)(T),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == (e = P.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                    }, [null == (a = P.meta) ? void 0 : a.artist.isUnsafeLegal, F]),
                    (0, C._)(P, T),
                    (0, n.useEffect)(
                        () => () => {
                            P.albumsSubpage.reset();
                        },
                        [P, P.albumsSubpage],
                    ),
                    P.albumsSubpage.isNotFound && (0, l.notFound)(),
                    (0, _.Jzs)(P.albumsSubpage.isResolved),
                    ((e, t) => {
                        (0, n.useEffect)(() => {
                            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                            let a = (0, f.NE)(e.meta.artist);
                            switch (t) {
                                case _.hVl.ALBUMS:
                                    (0, v.T)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, _.jxB)(e);
                                    });
                                    break;
                                case _.hVl.COMPILATIONS:
                                    (0, S.t)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, _.jxB)(e);
                                    });
                                    break;
                                case _.hVl.DISCOGRAPHY:
                                    (0, k.s)({ artist: a }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, _.jxB)(e);
                                    });
                            }
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading, t]);
                    })(P, N);
                let D = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: j().footer }) }) }), []),
                    G = (0, n.useMemo)(() => {
                        switch (N) {
                            case _.hVl.DISCOGRAPHY:
                                return R({ id: 'page.artist-discography-header' }, { artistName: P.commonSubPage.artistName });
                            case _.hVl.COMPILATIONS:
                                return R({ id: 'page.artist-compilations-header' }, { artistName: P.commonSubPage.artistName });
                            default:
                                return R({ id: 'page.artist-albums-header' }, { artistName: P.commonSubPage.artistName });
                        }
                    }, [P.commonSubPage.artistName, R, N]),
                    H = (0, n.useMemo)(() => {
                        switch (N) {
                            case _.hVl.DISCOGRAPHY:
                                return R({ id: 'entity-names.artist-studio-albums-list' });
                            case _.hVl.COMPILATIONS:
                                return R({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return R({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [R, N]),
                    V = (0, n.useMemo)(() => {
                        switch (N) {
                            case _.hVl.DISCOGRAPHY:
                                return _._Q$.ARTIST_DISCOGRAPHY;
                            case _.hVl.COMPILATIONS:
                                return _._Q$.ARTIST_COMPILATIONS;
                            default:
                                return _._Q$.ARTIST_ALBUMS;
                        }
                    }, [N]),
                    $ = [];
                return (T &&
                    P.albumsSubpage.isNeededToLoad &&
                    (P.albumsSubpage.setVariant(N),
                    $.push(P.albumsSubpage.getData({ artistId: T, page: 0, pageSize: h.r3, sort: { sortBy: d.g.YEAR }, preloadedAlbums: L }))),
                T && P.isNeededToLoad && $.push(P.getData({ artistId: T, preloadedArtist: I })),
                $.length && (0, n.use)(Promise.allSettled($)),
                null == (r = P.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(b.MW, { modalState: E })
                    : P.albumsSubpage.isRejected && !P.albumsSubpage.isNotFound
                      ? (0, i.jsx)(p.w, {})
                      : (0, i.jsx)(_.nVz, {
                            pageId: V,
                            pageEntityId: T,
                            children: (0, i.jsx)(A.hO, {
                                scrollElement: w,
                                outerTitle: G,
                                children: (0, i.jsxs)('div', {
                                    className: j().root,
                                    ...(0, c.Am)(c.Xk.artist.ARTIST_ALBUMS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: M.canBack,
                                            children: (0, i.jsx)(m.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: G }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(j().scrollContainer, j().important),
                                            listClassName: j().content,
                                            itemClassName: j().item,
                                            customComponents: D,
                                            itemContentCallback: (e) => {
                                                let t = P.albumsSubpage.items[e],
                                                    a = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'entity-names.playlist' }) });
                                                return t
                                                    ? (0, i.jsx)(g.aX, { album: t, contentLinesCount: 4 }, t.id)
                                                    : (0, i.jsx)(b.Vt, { 'aria-label': a, linesCount: 4 });
                                            },
                                            totalCount: O,
                                            onGetDataByPage: U,
                                            pageSize: h.r3,
                                            totalRequests: P.albumsSubpage.requestsCount,
                                            handleRef: B,
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
        39309: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        41320: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i = a(44020);
            let s = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        41462: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__uYvRX',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__zP3T5',
                subTitle: 'ArtistPick_subTitle__vfdza',
                text: 'ArtistPick_text__Oiceb',
                coverContainer: 'ArtistPick_coverContainer__epurf',
                cover: 'ArtistPick_cover__KGKal',
            };
        },
        43643: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistNotFoundPage: () => c });
            var i = a(62936),
                s = a(19718),
                r = a(44020),
                l = a(9939),
                n = a(42561);
            let o = (0, s.PA)(() => {
                    let { artist: e } = (0, n.Pjs)();
                    return (
                        (0, n.ACS)(),
                        (0, r.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, i.jsx)(l.M, {})
                    );
                }),
                c = (0, s.PA)(() => (0, i.jsx)(n.nVz, { pageId: n._Q$.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(o, {}) }));
        },
        45880: (e) => {
            e.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        49826: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistFamiliarPage: () => W });
            var i = a(62936),
                s = a(19718),
                r = a(69526),
                l = a(44020),
                n = a(8669),
                o = a(85023),
                c = a(65438),
                d = a(92229),
                u = a(81628),
                m = a(42561),
                p = a(85906),
                g = a(53060),
                h = (function (e) {
                    return (e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e;
                })({}),
                A = a(41320),
                f = a(85222),
                _ = a(19663),
                b = a.n(_),
                v = a(79950),
                S = a(47480),
                k = a(12998),
                C = a(81959),
                x = a(42856),
                T = a(14501),
                j = a(30388),
                N = a(90914),
                I = a(66161);
            let L = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, l.useMemo)(() => (t ? (0, m.tW0)({ contextType: C.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var P = a(26731),
                E = a(20418),
                y = a(59935);
            let R = (e) => {
                let t = (0, m.XJ9)(),
                    a = (0, r.useSearchParams)();
                return (0, y.c)((i) => {
                    var s;
                    let r = new URLSearchParams(a);
                    switch ((null == (s = e.onTabChange) || s.call(e, i), i)) {
                        case h.COLLECTION:
                            r.set(m.K3F.TAB, m.JCK.COLLECTION), t((0, m.Cvn)(window.location.pathname, r));
                            break;
                        case h.VIBE:
                            r.set(m.K3F.TAB, m.JCK.VIBE), t((0, m.Cvn)(window.location.pathname, r));
                    }
                });
            };
            var w = a(28687),
                B = a.n(w);
            let M = () =>
                    (0, i.jsxs)('div', {
                        className: B().tabsShimmer,
                        children: [(0, i.jsx)(j.Shimmer, { className: B().tabShimmer }), (0, i.jsx)(j.Shimmer, { className: B().tabShimmer })],
                    }),
                O = (0, s.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: s } = (0, m.Pjs)(),
                        { formatMessage: r } = (0, S.A)(),
                        n = (0, m.W6M)(),
                        { isScrolling: o } = (0, l.useContext)(p.B9),
                        c = R(t);
                    return (0, i.jsxs)('header', {
                        className: B().root,
                        'aria-hidden': o,
                        children: [
                            (0, i.jsxs)('div', {
                                className: B().container,
                                children: [
                                    n.canBack && (0, i.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !o }),
                                    (0, i.jsx)(E.Heading, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: B().title,
                                        children: (0, i.jsx)(P.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(p.wI, {
                                isShimmerVisible: s.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(M, {}),
                                className: B().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: c,
                                children: [
                                    (0, i.jsx)(p.oz, {
                                        className: B().tab,
                                        value: h.COLLECTION,
                                        title: r({ id: 'page.familiar-collection' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                    (0, i.jsx)(p.oz, {
                                        className: B().tab,
                                        value: h.VIBE,
                                        title: r({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var U = a(95985),
                F = a.n(U);
            let D = (0, s.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: s, tabElementId: r, artistId: c } = e,
                        { artist: d } = (0, m.Pjs)(),
                        { formatMessage: u } = (0, S.A)(),
                        { from: g } = (0, m.fyy)(),
                        A = L({ artistId: c, entityContextType: k.h.ARTIST_MY_COLLECTION }),
                        f = (0, l.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: C.K.Various,
                                    meta: { id: String(c) },
                                    from: g,
                                    overrideAutoflowSeeds: ['artist:'.concat(c)],
                                    overrideContextType: x.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: d.familiarSubpage.collectionEntitiesData,
                            }),
                            [d.familiarSubpage.collectionEntitiesData, c, g],
                        ),
                        _ = (0, l.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(p.L5, {
                                isShimmerVisible: d.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: m.Xjt.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, v.$)(F().block, F().tracksBlock),
                                children:
                                    null == (e = d.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(I.Kt, { track: e, playContextParams: f(e, t) }, e.id)),
                            });
                        }, [d.familiarSubpage.collectionTracks, d.familiarSubpage.isLoading, f]),
                        b = (0, l.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks)
                                return d.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, v.$)(F().block, F().blockHeader),
                                          children: (0, i.jsx)(j.Shimmer, { isActive: d.familiarSubpage.isLoading, className: F().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(p.Tw, { className: (0, v.$)(F().block, F().blockHeader), title: u({ id: 'entity-names.tracks' }) });
                        }, [d.familiarSubpage.isLoading, d.familiarSubpage.shouldShowTitleBlocks, u]),
                        P = (0, l.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks) return u({ id: 'entity-names.albums' });
                        }, [d.familiarSubpage.shouldShowTitleBlocks, u]);
                    return (0, i.jsx)(m._Fn, {
                        sourceContextData: A,
                        children: (0, i.jsxs)(T.N, {
                            className: F().root,
                            containerClassName: (0, v.$)(F().scrollContainer, F().important),
                            ref: a,
                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION),
                            children: [
                                (0, i.jsx)(O, { tabsState: s, tabElementId: r }),
                                (0, i.jsxs)(o.TabPanel, {
                                    value: s.value,
                                    name: h.COLLECTION,
                                    elementId: r,
                                    className: F().content,
                                    children: [
                                        (0, i.jsxs)('section', { ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK), children: [b, _] }),
                                        (0, i.jsx)(p.OY, {
                                            isShimmerVisible: d.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: F().blockHeader,
                                            containerClassName: F().block,
                                            title: P,
                                            showHeaderShimmer: d.familiarSubpage.shouldShowTitleBlocks,
                                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM),
                                            children:
                                                null == (t = d.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)(N.aX, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: F().footer }) }),
                            ],
                        }),
                    });
                }),
                G = (0, s.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: s, artistId: r } = e,
                        { artist: c } = (0, m.Pjs)(),
                        { from: d } = (0, m.fyy)(),
                        u = L({ artistId: r, entityContextType: k.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        g = (0, l.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: C.K.Various,
                                    meta: { id: String(r) },
                                    from: d,
                                    overrideAutoflowSeeds: ['artist:'.concat(r)],
                                    overrideContextType: x.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.vibeEntitiesData,
                            }),
                            [c.familiarSubpage.vibeEntitiesData, r, d],
                        ),
                        A = (0, l.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(p.L5, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: m.Xjt.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, v.$)(F().block, F().tracksBlock),
                                children:
                                    null == (e = c.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(I.Kt, { track: e, playContextParams: g(e, t) }, e.id)),
                            });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.vibeTracks, g]);
                    return (0, i.jsx)(m._Fn, {
                        sourceContextData: u,
                        children: (0, i.jsxs)(T.N, {
                            className: F().root,
                            containerClassName: (0, v.$)(F().scrollContainer, F().important),
                            ref: t,
                            ...(0, n.Am)(n.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE),
                            children: [
                                (0, i.jsx)(O, { tabsState: a, tabElementId: s }),
                                (0, i.jsx)(o.TabPanel, { value: a.value, name: h.VIBE, elementId: s, className: F().content, children: A }),
                                (0, i.jsx)(p.A, { children: (0, i.jsx)(p.wi, { className: F().footer }) }),
                            ],
                        }),
                    });
                });
            var H = a(85742),
                V = a(9409),
                $ = a.n(V);
            let Y = (e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        s = (0, l.useMemo)(() => {
                            switch (t.value) {
                                case h.COLLECTION:
                                    return (0, i.jsx)(P.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                                case h.VIBE:
                                    return (0, i.jsx)(P.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                            }
                        }, [t.value]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(O, { tabsState: t, tabElementId: a }),
                            (0, i.jsxs)('div', {
                                className: $().root,
                                children: [
                                    (0, i.jsx)(H.Icon, { className: $().icon, variant: 'attention', size: 'xxxl' }),
                                    (0, i.jsx)(E.Heading, { className: $().title, variant: 'h3', size: 'xs', children: s }),
                                ],
                            }),
                        ],
                    });
                },
                z = (0, s.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: s } = (0, m.Pjs)(),
                        { formatMessage: r } = (0, S.A)(),
                        { isScrolling: n } = (0, l.useContext)(p.B9),
                        o = (0, m.W6M)(),
                        c = R(t);
                    return (0, i.jsx)(p.Y9, {
                        variant: p.Vw.COMPOSITE,
                        staticClassName: (0, v.$)(B().staticHeader, B().important),
                        'aria-hidden': !n,
                        stickyClassName: (0, v.$)(B().stickyHeader, B().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: B().container,
                            children: [
                                o.canBack && (0, i.jsx)(p.Lh, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(p.wI, {
                                    isShimmerVisible: s.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(M, {}),
                                    className: B().tabs,
                                    elementId: a,
                                    onTabChange: c,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(p.oz, {
                                            className: B().tab,
                                            value: h.COLLECTION,
                                            title: r({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !n,
                                            tabIndex: n ? 0 : -1,
                                        }),
                                        (0, i.jsx)(p.oz, {
                                            className: B().tab,
                                            value: h.VIBE,
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
                W = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artistId: _, preloadedArtist: v, preloadedFamiliar: S } = e,
                        k = (0, r.useSearchParams)(),
                        { artist: C, disclaimerModalState: x } = (0, m.Pjs)(),
                        { contentScrollRef: T, setContentScrollRef: j } = (0, m.gKY)(),
                        N = (0, l.useId)(),
                        I = (0, l.useMemo)(() => {
                            switch (k.get(m.K3F.TAB)) {
                                case m.JCK.COLLECTION:
                                    break;
                                case m.JCK.VIBE:
                                    return h.VIBE;
                            }
                            return h.COLLECTION;
                        }, [k]),
                        L = (0, o.useTabsState)(I),
                        P = (0, u.SA)({ artist: null == (t = C.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    (0, f.G)(_),
                        (0, l.useEffect)(() => {
                            var e;
                            (null == (e = C.meta) ? void 0 : e.artist.isUnsafeLegal) && P();
                        }, [null == (a = C.meta) ? void 0 : a.artist.isUnsafeLegal, P]),
                        (0, A._)(C, _),
                        (0, l.useEffect)(
                            () => () => {
                                C.familiarSubpage.reset();
                            },
                            [C],
                        ),
                        (0, m.Jzs)(C.familiarSubpage.isResolved),
                        C.familiarSubpage.isNotFound && (0, r.notFound)();
                    let E = (0, l.useMemo)(() => {
                            switch (L.value) {
                                case h.COLLECTION:
                                    if (C.familiarSubpage.isResolved && !C.familiarSubpage.hasCollectionEntities) return (0, i.jsx)(Y, { tabsState: L, tabElementId: N });
                                    return (0, i.jsx)(D, { tabsState: L, forwardRef: j, tabElementId: N, artistId: _ });
                                case h.VIBE:
                                    if (C.familiarSubpage.isResolved && !C.familiarSubpage.hasVibeTracks) return (0, i.jsx)(Y, { tabsState: L, tabElementId: N });
                                    return (0, i.jsx)(G, { tabsState: L, forwardRef: j, tabElementId: N, artistId: _ });
                            }
                        }, [C.familiarSubpage.hasCollectionEntities, C.familiarSubpage.hasVibeTracks, C.familiarSubpage.isResolved, _, j, N, L]),
                        y = [];
                    return (C.familiarSubpage.isNeededToLoad && y.push(C.familiarSubpage.getData({ preloadedFamiliar: S, artistId: _ })),
                    C.isNeededToLoad && y.push(C.getData({ artistId: _, preloadedArtist: v })),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                            let t = (0, u.NE)(e.meta.artist);
                            (0, g.Q)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, m.jxB)(e);
                            });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                    })(C),
                    y.length && (0, l.use)(Promise.allSettled(y)),
                    C.familiarSubpage.isRejected && !C.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(c.w, {})
                        : (null == (s = C.meta) ? void 0 : s.artist.isLegalRejected)
                          ? (0, i.jsx)(p.MW, { modalState: x })
                          : (0, i.jsx)(m.nVz, {
                                pageId: m._Q$.FAMILIAR_YOU,
                                pageEntityId: _,
                                children: (0, i.jsx)(d.hO, {
                                    scrollElement: T,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: b().root,
                                        ...(0, n.Am)(n.Xk.artist.ARTIST_FAMILIAR_PAGE),
                                        children: [(0, i.jsx)(z, { tabElementId: N, tabsState: L }), (0, i.jsx)(m.FoH, { blockIdForFrom: m.UfI.DEFAULT, children: E })],
                                    }),
                                }),
                            });
                });
        },
        53060: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        53508: (e) => {
            e.exports = {
                panel: 'ArtistPageContent_panel__pT_94',
                panelItem: 'ArtistPageContent_panelItem__AfA_r',
                blockCoverContainer: 'ArtistPageContent_blockCoverContainer__LDl_I',
                important: 'ArtistPageContent_important__tPJqk',
                recentsContainer: 'ArtistPageContent_recentsContainer__iw_AC',
                recents: 'ArtistPageContent_recents__TkT7y',
                popularTracksBlock: 'ArtistPageContent_popularTracksBlock__M19rf',
                popularTracksBlock_withReleaseBlock: 'ArtistPageContent_popularTracksBlock_withReleaseBlock__S1eO_',
                carouselBlockHeader: 'ArtistPageContent_carouselBlockHeader__LO9is',
                popularTracksBlockHeader: 'ArtistPageContent_popularTracksBlockHeader__yE3Z8',
                releaseBlockHeader: 'ArtistPageContent_releaseBlockHeader__OSBh1',
                releaseBlockHeaderShimmer: 'ArtistPageContent_releaseBlockHeaderShimmer__07Uep',
                popularTracksBlockList: 'ArtistPageContent_popularTracksBlockList__z02_G',
                releaseBlock: 'ArtistPageContent_releaseBlock__dmcUs',
                releaseBlockCard: 'ArtistPageContent_releaseBlockCard__GeAp7',
                concertsBlock: 'ArtistPageContent_concertsBlock__o_vhY',
                carouselBlock: 'ArtistPageContent_carouselBlock__21pOp',
                carouselBlocks: 'ArtistPageContent_carouselBlocks__f1w09',
            };
        },
        53891: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = (0, i.NsT)(e.artist.name),
                    o = l({ id: 'metadata.artist-title' }, { artistTitle: e.artist.name }),
                    c = l({ id: 'metadata.artist-description' }, { artistTitle: e.artist.name });
                return {
                    title: o,
                    description: c,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: c,
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: e.artist.ogImage,
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.APP, title: n, url: t.url, appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': e.artist.name },
                    alternates: (0, i.SEs)('/artist/:artistId', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        55551: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => d });
            var i,
                s = a(49327),
                r = a(44020),
                l = {
                    6699: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let i = a(352),
                            s = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                l = (0, s.useRef)(null),
                                [n, o] = (0, s.useState)(!!a),
                                c = (0, s.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            o(!a),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    o(!!a);
                                                }, t));
                                        }, r),
                                    [t, a, r],
                                ),
                                d = (0, s.useCallback)(() => {
                                    o(!!a), l.current && window.clearTimeout(l.current);
                                }, [a]);
                            return (
                                (0, s.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: c, reset: d }
                            );
                        };
                    },
                    2767: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let i = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, a) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let i = a(810),
                            s = a(361),
                            r = a(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: l } = e,
                                { state: n, handleDebouncedToggle: o } = (0, r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, i.useCallback)(() => {
                                    a && o(), null == t || t();
                                }, [a, o, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, s.getElementFromRefOrElement)(l);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', c, a), () => t.removeEventListener('scroll', c, a);
                                }, [l, c]),
                                n
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return l[e](a, a.exports, o), a.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useElementOffsetY = void 0);
                let e = o(810),
                    t = o(2067),
                    a = o(2767);
                c.useElementOffsetY = (i) => {
                    let [s, r] = (0, a.useForceUpdateRef)(),
                        [l, n] = (0, e.useState)(),
                        o = (0, e.useCallback)(() => {
                            let e = null == s ? void 0 : s.getBoundingClientRect();
                            e && n(e.y);
                        }, [s]);
                    return (0, e.useLayoutEffect)(o), (0, t.useScroll)({ onScroll: o, elementRef: i }), { forceUpdateRefCallback: r, offsetY: l };
                };
            })(),
                c.__esModule;
            var d = c.useElementOffsetY;
        },
        60092: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistConcertsPage: () => x });
            var i = a(62936),
                s = a(19718),
                r = a(69526),
                l = a(44020),
                n = a(47480),
                o = a(33782),
                c = a(8669),
                d = a(14501),
                u = a(20418),
                m = a(92229),
                p = a(81628),
                g = a(16616),
                h = a(42561),
                A = a(85906),
                f = a(23480),
                _ = a(11584),
                b = a(35944),
                v = a(41320),
                S = a(85222),
                k = a(35231),
                C = a.n(k);
            let x = (0, s.PA)((e) => {
                var t, a, s;
                let { artistId: k, preloadedArtist: x, preloadedConcerts: T } = e,
                    { artist: j, disclaimerModalState: N, experiments: I } = (0, h.Pjs)(),
                    L = I.checkExperiment(h.zal.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: P } = (0, n.A)(),
                    { contentScrollRef: E, setContentScrollRef: y } = (0, h.gKY)(),
                    R = (0, h.W6M)(),
                    w = (0, l.useRef)(String((0, o.A)())),
                    B = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            i = (0, _.st)(),
                            { hash: s } = (0, _.gf)(),
                            r = (0, h.UlF)();
                        return (0, l.useCallback)(() => {
                            if (!i || !t) return;
                            let e = (0, f.Fx)({ params: { hash: s, artistId: t, viewUuid: a }, logger: r, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, f.__)(i.evgenInstance, e);
                        }, [i, t, s, r, a]);
                    })({ artistId: k, viewUuid: w.current }),
                    M = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            i = (0, _.st)(),
                            { hash: s } = (0, _.gf)(),
                            r = (0, h.UlF)();
                        return (0, l.useCallback)(() => {
                            if (!i || !t) return;
                            let e = (0, f.Fx)({ params: { hash: s, artistId: t, viewUuid: a }, logger: r, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, f.pe)(i.evgenInstance, e);
                        }, [i, t, s, r, a]);
                    })({ artistId: k, viewUuid: w.current });
                (0, l.useEffect)(
                    () => (
                        B(),
                        () => {
                            M();
                        }
                    ),
                    [M, B],
                );
                let O = (0, p.SA)({ artist: null == (t = j.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, S.G)(k),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = j.meta) ? void 0 : e.artist.isUnsafeLegal) && O();
                    }, [null == (a = j.meta) ? void 0 : a.artist.isUnsafeLegal, O]),
                    (0, v._)(j, k),
                    (0, l.useEffect)(
                        () => () => {
                            j.concertsSubpage.reset();
                        },
                        [j],
                    ),
                    (0, h.Jzs)(j.concertsSubpage.isResolved),
                    (j.concertsSubpage.isNotFound || I.checkExperiment(h.zal.disableAllConcerts, 'on')) && (0, r.notFound)();
                let U = (0, l.useMemo)(() => {
                        var e;
                        if (j.concertsSubpage.isLoading) return (0, A.Tb)(10);
                        let t = L ? g.MU : g.ZH;
                        return null == (e = j.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, i.jsx)(
                                      h.Bki,
                                      {
                                          objectId: String(e.id),
                                          objectPos: a + 1,
                                          children: (0, i.jsx)(g.VN, {
                                              artistId: k,
                                              concert: e,
                                              viewUuid: w.current,
                                              meta: (0, i.jsx)(t, { concert: e }),
                                              shouldShowMask: L,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [j.concertsSubpage.concerts, j.concertsSubpage.isLoading, k, L, w]),
                    F = [];
                if (
                    (j.concertsSubpage.isNeededToLoad && F.push(j.concertsSubpage.getData({ artistId: Number(k), preloadedConcerts: T })),
                    j.isNeededToLoad && F.push(j.getData({ artistId: k, preloadedArtist: x })),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                            let t = (0, p.NE)(e.meta.artist);
                            (0, b.U)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, h.jxB)(e);
                            });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                    })(j),
                    F.length && (0, l.use)(Promise.allSettled(F)),
                    null == (s = j.meta) ? void 0 : s.artist.isLegalRejected)
                )
                    return (0, i.jsx)(A.MW, { modalState: N });
                let D = (0, l.useMemo)(
                    () =>
                        L && j.concertsSubpage.artistTitle
                            ? P({ id: 'page.artist-all-concerts-header' }, { artistName: j.concertsSubpage.artistTitle })
                            : P({ id: 'page.artist-concerts-header' }, { artistName: j.commonSubPage.artistName }),
                    [L, j.concertsSubpage.artistTitle, j.commonSubPage.artistName, P],
                );
                return (0, i.jsx)(h.nVz, {
                    pageId: h._Q$.ARTIST_CONCERTS,
                    pageEntityId: k,
                    children: (0, i.jsx)(h.jPc, {
                        children: (0, i.jsxs)(m.hO, {
                            scrollElement: E,
                            outerTitle: D,
                            children: [
                                (0, i.jsx)(A.Y9, {
                                    variant: A.Vw.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: R.canBack,
                                    children: (0, i.jsx)(u.Heading, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: D }),
                                }),
                                (0, i.jsx)(d.N, {
                                    ref: y,
                                    className: C().root,
                                    containerClassName: C().scrollableContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: C().container,
                                        ...(0, c.Am)(c.Xk.artist.ARTIST_CONCERTS_PAGE),
                                        children: [
                                            (0, i.jsx)('div', { className: C().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: U }),
                                            (0, i.jsx)(A.A, { children: (0, i.jsx)(A.wi, { className: C().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        68241: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistPage: () => em });
            var i = a(62936),
                s = a(19718),
                r = a(69526),
                l = a(44020),
                n = a(47480),
                o = a(8669),
                c = a(44262),
                d = a(59935),
                u = a(55551),
                m = a(60188),
                p = a(14501),
                g = a(35085),
                h = a(65438),
                A = a(92229),
                f = a(81628),
                _ = a(42561),
                b = a(85906),
                v = a(53891),
                S = a(41320),
                k = a(85222),
                C = a(79950),
                x = a(81959),
                T = a(21202),
                j = a(66161),
                N = a(15159),
                I = a.n(N);
            let L = (0, s.PA)((e) => {
                let { artistId: t, isWebNextNavigationOn: a } = e,
                    s = (0, _.jRO)(),
                    { contentScrollRef: c, setContentScrollRef: m } = (0, _.gKY)(),
                    { formatMessage: p } = (0, n.A)(),
                    {
                        artist: { offlineArtist: f },
                    } = (0, _.Pjs)(),
                    { trackIds: v, downloadedTracks: S } = f,
                    { from: k } = (0, _.fyy)({ pageId: _._Q$.ARTIST, blockId: _.UfI.TRACK_LIST }),
                    N = (0, _.v8w)(),
                    L = (0, _.wZZ)(),
                    { forceUpdateRefCallback: P, offsetY: E } = (0, u.G)(c),
                    { topColorStyle: y, headerStyle: R } = (0, A.QZ)(null, E, a),
                    w = (0, d.c)(() => {
                        s.tracksController && v.ids && S.getData(s.tracksController, v.ids);
                    });
                (0, T.L)(w),
                    (0, l.useEffect)(() => {
                        f.meta && S.isResolved && S.items && f.setTracksCount(S.items.length);
                    }, [f, f.meta, S.isResolved, S.items]),
                    (0, l.useEffect)(() => {
                        S.isNeededToLoad && v.isResolved && w();
                    }, [S.isNeededToLoad, v.isResolved, w]),
                    (0, l.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f, t],
                    ),
                    (0, _.Jzs)(f.isResolved);
                let B = (0, l.useMemo)(
                        () =>
                            f.isLoading || !f.meta
                                ? (0, i.jsx)(g.c6, { className: I().header, coverRadius: 'round' })
                                : (0, i.jsx)(g.qi, { className: I().header, artistMeta: f.meta, entitiesData: S.entitiesData, ref: P }),
                        [f.isLoading, f.meta, S.entitiesData, P],
                    ),
                    M = (0, l.useMemo)(() => ({ Header: () => B, Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: I().footer }) }) }), [B]),
                    O = S.items ? S.items.length : 10;
                if (f.isNeededToLoad && N) {
                    let e = [f.getArtist(t, N), v.getIds(t, N)];
                    (0, l.use)(Promise.allSettled(e));
                }
                return (f.isNotFound && (0, r.notFound)(), f.isRejected || v.isRejected || S.isRejected)
                    ? (0, i.jsx)(h.w, {})
                    : (0, i.jsx)(_.nVz, {
                          pageId: _._Q$.ARTIST,
                          pageEntityId: t,
                          children: (0, i.jsxs)(A.hO, {
                              scrollElement: c,
                              children: [
                                  (0, i.jsx)(b.Y9, { style: R }),
                                  (0, i.jsx)('div', { className: I().averageColorBackground, style: y }),
                                  (0, i.jsx)(b.$$, {
                                      context: { listAriaLabel: p({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, C.$)(I().root, I().important),
                                      listClassName: I().content,
                                      customComponents: M,
                                      totalCount: O,
                                      itemContentCallback: (e) => {
                                          var t;
                                          let a = null == (t = S.items) ? void 0 : t[e];
                                          return a
                                              ? (0, i.jsx)(
                                                    j.Kt,
                                                    {
                                                        track: a,
                                                        playContextParams: L(a.id, {
                                                            contextData: { type: x.K.Various, meta: { id: _._Q$.ARTIST }, from: k },
                                                            entitiesData: S.entitiesData,
                                                            queueParams: { index: e, entityId: a.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    a.id,
                                                )
                                              : (0, i.jsx)(b.DS, { isActive: !0, className: I().trackShimmer, variant: _.Xjt.PLAYLIST });
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
            var P = a(70585),
                E = a.n(P),
                y = a(30388),
                R = a(90914),
                w = a(25099),
                B = (function (e) {
                    return (
                        (e.UPCOMING_RELEASE = 'upcoming_release'),
                        (e.TRACKS = 'tracks'),
                        (e.FAMILIAR = 'familiar'),
                        (e.CONCERTS = 'concerts'),
                        (e.ARTIST_PICK = 'artist_pick'),
                        e
                    );
                })({}),
                M = a(53508),
                O = a.n(M);
            let U = (e) => {
                    let { withReleaseBlock: t, children: a, isLoading: s, viewAllActionLink: r, ...l } = e,
                        { formatMessage: c } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        className: (0, C.$)(O().popularTracksBlock, { [O().popularTracksBlock_withReleaseBlock]: t }),
                        ...l,
                        ...(0, o.Am)(o.Xk.artist.POPULAR_TRACKS),
                        children: [
                            (0, i.jsx)(b.Tw, {
                                className: O().popularTracksBlockHeader,
                                title: c({ id: 'entity-names.popular-tracks' }),
                                viewAllActionLink: r,
                                headingVariant: 'h2',
                            }),
                            (0, i.jsx)(b.L5, { isShimmerVisible: s, isShimmerActive: !0, className: O().popularTracksBlockList, variant: _.Xjt.PLAYLIST, children: a }),
                        ],
                    });
                },
                F = (0, s.PA)((e) => {
                    var t;
                    let { artistId: a, artist: s } = e,
                        r = (0, _.wZZ)(),
                        { from: l, utmLink: n } = (0, _.fyy)({ pageId: _._Q$.ARTIST, blockId: _.UfI.ARTIST, pageEntityId: a, contextType: x.K.Artist, contextId: a }),
                        o = (0, d.c)((e, t) =>
                            r(e, {
                                contextData: { type: x.K.Artist, meta: { id: Number(a) }, from: l, utmLink: n },
                                queueParams: { index: t, entityId: e },
                                loadContextMeta: !0,
                            }),
                        );
                    return (0, i.jsx)(U, {
                        withReleaseBlock: s.hasReleaseBlock,
                        isLoading: s.isLoading,
                        viewAllActionLink: s.tracksUrl,
                        id: B.TRACKS,
                        children: null == (t = s.popularTracks) ? void 0 : t.map((e, t) => (0, i.jsx)(j.Kt, { track: e, playContextParams: o(e.id, t) }, e.id)),
                    });
                });
            var D = a(23480),
                G = a(66281);
            let H = (0, s.PA)((e) => {
                    let { artist: t } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, i.jsx)(_.FoH, {
                        mainObjectType: D.ky.Artist,
                        mainObjectId: String(t.id),
                        blockId: _.hf$.CLIPS_CAROUSEL,
                        blockType: _.hf$.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: t.clips.length,
                        children: (0, i.jsx)(G.KR, {
                            containerClassName: O().carouselBlock,
                            headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                            isShimmerVisible: t.isLoading,
                            isShimmerActive: !0,
                            title: a({ id: 'entity-names.clips' }),
                            artistIdWithoutLink: String(t.id),
                            viewAllActionLink: t.clipsUrl,
                            clips: t.clips,
                            headingVariant: 'h2',
                            ...(0, o.Am)(o.Xk.artist.ARTIST_CLIPS_CAROUSEL),
                        }),
                    });
                }),
                V = (0, s.PA)((e) => {
                    let { artist: t } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, i.jsx)(_.FoH, {
                        blockId: _.hf$.COMPILATIONS_CAROUSEL,
                        blockType: 'albums_carousel',
                        blockPosX: 1,
                        blockPosY: 5,
                        blockIdForFrom: _.hf$.COMPILATIONS_CAROUSEL,
                        objectsCount: t.compilations.length,
                        children: (0, i.jsx)(R.pZ, {
                            isShimmerVisible: t.isLoading,
                            isShimmerActive: !0,
                            headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                            containerClassName: O().carouselBlock,
                            albums: t.compilations,
                            title: a({ id: 'entity-names.compilations' }),
                            viewAllActionLink: t.compilationsUrl,
                            headingVariant: 'h2',
                            ...(0, o.Am)(o.Xk.artist.COMPILATIONS),
                        }),
                    });
                });
            var $ = a(16616);
            let Y = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artistId: r, artist: l } = e,
                        { formatMessage: o } = (0, n.A)(),
                        { experiments: c } = (0, _.Pjs)(),
                        d = c.checkExperiment(_.zal.WebNextConcertsIdentityEventType, 'on'),
                        u = d ? $.MU : $.ZH;
                    return (0, i.jsx)(_.Bki, {
                        objectType: D.ky.Shortcut,
                        objectId: l.concertsUrl,
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (s = null == (t = l.concerts) ? void 0 : t.length) ? s : 0,
                        children: (0, i.jsx)($.BD, {
                            id: B.CONCERTS,
                            artistId: r,
                            title: o({ id: 'entity-names.concerts' }),
                            isLoading: l.isLoading,
                            headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                            containerClassName: O().concertsBlock,
                            viewAllActionLink: l.concertsUrl,
                            headingVariant: 'h2',
                            children:
                                null == (a = l.concerts)
                                    ? void 0
                                    : a.map((e, t) => {
                                          var a, s;
                                          return (0, i.jsx)(
                                              _.Bki,
                                              {
                                                  objectType: D.ky.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: Math.floor(t / 2) + 1,
                                                  objectPosY: (t % 2) + 1,
                                                  objectsCount: null != (s = null == (a = l.concerts) ? void 0 : a.length) ? s : 0,
                                                  children: (0, i.jsx)($.VN, { artistId: r, concert: e, shouldShowMask: d, meta: (0, i.jsx)(u, { concert: e }) }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                z = (0, s.PA)((e) => {
                    let { artist: t } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, i.jsx)(_.FoH, {
                        blockId: _.hf$.DISCOGRAPHY_CAROUSEL,
                        blockType: _.hf$.ALBUMS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 2,
                        blockIdForFrom: _.hf$.DISCOGRAPHY_CAROUSEL,
                        objectsCount: t.discography.length,
                        children: (0, i.jsx)(R.pZ, {
                            isShimmerVisible: t.isLoading,
                            isShimmerActive: !0,
                            headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                            containerClassName: O().carouselBlock,
                            albums: t.discography,
                            title: a({ id: 'entity-names.studio-albums' }),
                            viewAllActionLink: t.discographyUrl,
                            headingVariant: 'h2',
                            ...(0, o.Am)(o.Xk.artist.STUDIO_ALBUMS),
                        }),
                    });
                });
            var W = a(79670);
            let X = (0, s.PA)((e) => {
                    let { artist: t } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, i.jsx)(W.EC, {
                        isShimmerVisible: t.isLoading,
                        isShimmerActive: !0,
                        containerClassName: O().carouselBlock,
                        headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                        title: a({ id: 'entity-names.artist-playlist' }),
                        playlists: t.playlists,
                        headingVariant: 'h2',
                        ...(0, o.Am)(o.Xk.artist.ARTIST_PLAYLISTS),
                    });
                }),
                K = (0, s.PA)((e) => {
                    let { artist: t } = e,
                        { formatMessage: a } = (0, n.A)();
                    return (0, i.jsx)(_.FoH, {
                        blockId: _.hf$.ALBUMS_CAROUSEL,
                        blockType: _.hf$.ALBUMS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 3,
                        blockIdForFrom: _.hf$.ALBUMS_CAROUSEL,
                        objectsCount: t.albums.length,
                        children: (0, i.jsx)(R.pZ, {
                            isShimmerVisible: t.isLoading,
                            isShimmerActive: !0,
                            headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                            containerClassName: O().carouselBlock,
                            albums: t.albums,
                            title: a({ id: 'entity-names.popular-albums' }),
                            viewAllActionLink: t.albumsUrl,
                            headingVariant: 'h2',
                            ...(0, o.Am)(o.Xk.artist.POPULAR_ALBUMS),
                        }),
                    });
                });
            var Q = a(11334);
            let q = (0, s.PA)((e) => {
                let { artist: t } = e,
                    { formatMessage: a } = (0, n.A)();
                return (0, i.jsx)(b.OY, {
                    isShimmerVisible: t.isLoading,
                    isShimmerActive: !0,
                    headerClassName: (0, C.$)(O().carouselBlockHeader, O().carouselBlock),
                    containerClassName: O().carouselBlock,
                    title: a({ id: 'entity-names.similar-artists' }),
                    viewAllActionLink: t.similarArtistsUrl,
                    headingVariant: 'h2',
                    ...(0, o.Am)(o.Xk.artist.SIMILAR_ARTISTS),
                    children: t.similarArtists.map((e) => (0, i.jsx)(Q.ao, { artist: e, contentLinesCount: 3 }, e.id)),
                });
            });
            var J = a(26731),
                Z = a(56721),
                ee = a(20512),
                et = a(20418),
                ea = a(41462),
                ei = a.n(ea);
            let es = (e) => {
                    let { artistPick: t, coverContainerClassName: a, artistCoverUrl: s, artistName: r, isArtistAvailable: l, ...n } = e,
                        { artists: o, playlist: c } = t;
                    return (0, i.jsx)(b.Tw, {
                        coverUrl: c.coverUri,
                        viewAllActionLink: c.url,
                        title: c.title,
                        controls: !1,
                        coverContainerClassName: a,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        ...n,
                        subTitle: (0, i.jsxs)('div', {
                            className: ei().subTitle,
                            children: [
                                (0, i.jsx)(ee.q, {
                                    children: (0, i.jsx)(et.Heading, {
                                        variant: 'h4',
                                        children: (0, i.jsx)(J.A, { id: 'page.artist-pick-aria-label', values: { artistName: r } }),
                                    }),
                                }),
                                (0, i.jsx)(et.Caption, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: ei().text,
                                    'aria-hidden': !0,
                                    children: (0, i.jsx)(J.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, i.jsx)(Z.Paper, {
                                    radius: 'round',
                                    className: ei().coverContainer,
                                    children: (0, i.jsx)(b.BW, {
                                        fit: 'cover',
                                        src: s,
                                        size: 50,
                                        className: ei().cover,
                                        withAvatarReplace: !0,
                                        isAvailable: l,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                r &&
                                    (0, i.jsx)(et.Caption, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: ei().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: r,
                                    }),
                            ],
                        }),
                        description: (0, i.jsx)(f.iQ, {
                            artists: o,
                            linkClassName: ei().artistLink,
                            spoilerClassName: ei().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, i.jsx)(J.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                },
                er = (0, s.PA)((e) => {
                    var t, a, s, r, l, n;
                    let { user: o, artist: c } = e;
                    return o.isAuthorized
                        ? null
                        : (0, i.jsx)(b.Sj, {
                              value: {
                                  '@type': 'MusicGroup',
                                  name: null != (l = null == (a = c.meta) || null == (t = a.artist) ? void 0 : t.name) ? l : void 0,
                                  url: null != (n = null == (r = c.meta) || null == (s = r.artist) ? void 0 : s.url) ? n : void 0,
                                  tracks: c.popularTracks
                                      .filter((e) => !!e.url)
                                      .map((e) => {
                                          var t;
                                          return { '@type': 'MusicRecording', name: e.title, duration: (0, _.FXG)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                      }),
                              },
                          });
                }),
                el = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artist: r, artistId: o } = e,
                        { experiments: c, user: d } = (0, _.Pjs)(),
                        { formatMessage: u } = (0, n.A)(),
                        m = c.checkExperiment(_.zal.WebNextArtistPick, 'on'),
                        p = (0, w.df)(),
                        g = r.hasClips && p,
                        h = d.isAuthorized && r.familiarInfo.hasFamiliarInfo,
                        A = (0, l.useMemo)(() => {
                            let e = [];
                            return (
                                r.familiarInfo.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: r.familiarInfo.tracksCount })),
                                r.familiarInfo.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: r.familiarInfo.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        }, [r.familiarInfo.collectionAlbumCount, r.familiarInfo.tracksCount, u]),
                        f = (0, l.useMemo)(
                            () =>
                                r.isLoading
                                    ? (0, i.jsxs)('div', {
                                          className: O().releaseBlock,
                                          children: [
                                              (0, i.jsx)(y.Shimmer, { radius: 'l', className: O().releaseBlockHeaderShimmer }),
                                              (0, i.jsx)(b.Vt, { className: (0, C.$)(O().releaseBlockCard, O().important) }),
                                          ],
                                      })
                                    : r.upcomingAlbum
                                      ? (0, i.jsxs)('div', {
                                            className: O().releaseBlock,
                                            id: B.UPCOMING_RELEASE,
                                            children: [
                                                (0, i.jsx)(b.Tw, {
                                                    className: O().releaseBlockHeader,
                                                    title: u({ id: 'entity-names.upcoming-album' }),
                                                    headingVariant: 'h2',
                                                }),
                                                (0, i.jsx)(R.M3, { className: (0, C.$)(O().releaseBlockCard, O().important), upcomingAlbum: r.upcomingAlbum }),
                                            ],
                                        })
                                      : r.lastRelease
                                        ? (0, i.jsxs)('div', {
                                              className: O().releaseBlock,
                                              children: [
                                                  (0, i.jsx)(b.Tw, {
                                                      className: O().releaseBlockHeader,
                                                      title: u({ id: 'entity-names.recently-release' }),
                                                      headingVariant: 'h2',
                                                  }),
                                                  (0, i.jsx)(R.aX, { className: (0, C.$)(O().releaseBlockCard, O().important), album: r.lastRelease }),
                                              ],
                                          })
                                        : void 0,
                            [r.isLoading, r.lastRelease, r.upcomingAlbum, u],
                        ),
                        v = (0, l.useMemo)(() => {
                            if (r.isLoading)
                                return (0, i.jsx)('div', {
                                    className: (0, C.$)(O().carouselBlockHeader, O().carouselBlock, O().panel),
                                    children: (0, i.jsx)(b.Mo, { coverRadius: 's', isActive: !0, withDescription: !0 }),
                                });
                            if ((m && r.artistPick) || h) {
                                var e, t, a;
                                return (0, i.jsxs)('div', {
                                    className: (0, C.$)(O().carouselBlockHeader, O().carouselBlock, O().panel),
                                    children: [
                                        m &&
                                            r.artistPick &&
                                            (0, i.jsx)(es, {
                                                id: B.ARTIST_PICK,
                                                artistPick: r.artistPick,
                                                isArtistAvailable: !!(null == (e = r.meta) ? void 0 : e.artist.isAvailable),
                                                artistCoverUrl: null == (t = r.meta) ? void 0 : t.artist.coverUri,
                                                coverContainerClassName: (0, C.$)(O().blockCoverContainer, O().important),
                                                artistName: null == (a = r.meta) ? void 0 : a.artist.name,
                                                className: O().panelItem,
                                            }),
                                        h &&
                                            (0, i.jsx)(b.Tw, {
                                                id: B.FAMILIAR,
                                                coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                                                viewAllActionLink: r.familiarInfo.href(o),
                                                controls: !1,
                                                title: u({ id: 'page.familiar-you' }),
                                                description: A,
                                                coverContainerClassName: (0, C.$)(O().blockCoverContainer, O().important),
                                                titleLineClamp: 1,
                                                className: O().panelItem,
                                                headingVariant: 'h2',
                                                withDescription: !!A,
                                            }),
                                    ],
                                });
                            }
                        }, [
                            r.artistPick,
                            r.familiarInfo,
                            r.isLoading,
                            null == (t = r.meta) ? void 0 : t.artist.coverUri,
                            null == (a = r.meta) ? void 0 : a.artist.isAvailable,
                            null == (s = r.meta) ? void 0 : s.artist.name,
                            o,
                            A,
                            u,
                            m,
                            h,
                        ]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', {
                                className: O().recentsContainer,
                                children: (0, i.jsxs)('div', { className: O().recents, children: [r.hasPopularTracks && (0, i.jsx)(F, { artist: r, artistId: o }), f] }),
                            }),
                            (0, i.jsxs)('div', {
                                className: O().carouselBlocks,
                                children: [
                                    v,
                                    r.hasDiscography && (0, i.jsx)(z, { artist: r }),
                                    r.hasAlbums && (0, i.jsx)(K, { artist: r }),
                                    r.hasConcerts && (0, i.jsx)(Y, { artistId: o, artist: r }),
                                    r.hasPlaylists && (0, i.jsx)(X, { artist: r }),
                                    r.hasCompilations && (0, i.jsx)(V, { artist: r }),
                                    r.hasSimilarArtists && (0, i.jsx)(q, { artist: r }),
                                    g && (0, i.jsx)(H, { artist: r }),
                                ],
                            }),
                            r.meta && (0, i.jsx)(er, { user: d, artist: r }),
                        ],
                    });
                });
            var en = a(22991),
                eo = a(45880),
                ec = a.n(eo);
            let ed = (0, s.PA)((e) => {
                    let { artist: t } = e;
                    return (0, i.jsx)(en.EA, {
                        landing: t.landing,
                        errorComponent: (0, i.jsx)(h.w, { className: ec().error, withBackwardControl: !1 }),
                        containerClassName: ec().root,
                    });
                }),
                eu = (0, s.PA)((e) => {
                    var t, a, s, C, x, T;
                    let { artistId: j, preloadedArtist: N, isWebNextNavigationOn: I } = e,
                        { notify: P } = (0, _.lkh)(),
                        {
                            artist: y,
                            experiments: R,
                            disclaimerModalState: w,
                            user: B,
                            slam: M,
                            modals: { imageSliderModal: O },
                        } = (0, _.Pjs)(),
                        { formatMessage: U } = (0, n.A)(),
                        F = (0, l.useRef)(0),
                        { contentScrollRef: D, setContentScrollRef: G } = (0, _.gKY)(),
                        { forceUpdateRefCallback: H, offsetY: V } = (0, u.G)(D),
                        $ = (0, l.useRef)(null),
                        Y = (0, _.ytd)(null == y || null == (a = y.meta) || null == (t = a.artist) ? void 0 : t.averageColor),
                        { topColorStyle: z, headerStyle: W } = (0, A.QZ)(Y, V, I),
                        X = null == (s = y.meta) ? void 0 : s.hasCovers,
                        K = (0, r.useSearchParams)();
                    (0, k.G)(j),
                        (0, _.ACS)(),
                        (0, l.useEffect)(() => {
                            let e = K.get(_.K3F.BLOCK);
                            e &&
                                y.isResolved &&
                                y.familiarInfo.isResolved &&
                                ((e) => {
                                    let { blockId: t, scrollRef: a, headerRef: i } = e,
                                        s = document.getElementById(t);
                                    if (s && a) {
                                        var r;
                                        let e = s.getBoundingClientRect().top,
                                            t = (null == (r = i.current) ? void 0 : r.offsetHeight) ? e - i.current.offsetHeight : e;
                                        a.scrollTo({ top: t - 10, behavior: 'smooth' });
                                    }
                                })({ blockId: e, scrollRef: D, headerRef: $ });
                        }, [y.isResolved, y.familiarInfo.isResolved, D, K]);
                    let Q = (0, f.SA)({ artist: null == (C = y.meta) ? void 0 : C.artist, shouldHistoryBack: !0 });
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = y.meta) ? void 0 : e.artist.isUnsafeLegal) && Q();
                    }, [null == (x = y.meta) ? void 0 : x.artist.isUnsafeLegal, Q]),
                        (0, S._)(y, j),
                        (0, l.useEffect)(
                            () => () => {
                                B.isAuthorized && y.familiarInfo.reset();
                            },
                            [y, j, B.isAuthorized],
                        );
                    let q = (0, d.c)(() => {
                        var e;
                        (null == (e = y.meta) ? void 0 : e.hasCovers) && y.meta.covers && O.openImages({ images: y.meta.covers });
                    });
                    if (y.isCacheNotFound || M.isOfflineModeEnabled) return (0, i.jsx)(L, { artistId: j, isWebNextNavigationOn: I });
                    if (y.deprecationTargetArtistId) {
                        let { href: e } = (0, _.uvd)('/artist/:artistId', { params: { artistId: y.deprecationTargetArtistId } });
                        (0, r.redirect)(e);
                    }
                    (0, l.useMemo)(
                        () => () => {
                            (y.isRejected || (!y.meta && !y.isLoading)) &&
                                F &&
                                !(F.current > 0) &&
                                (P((0, i.jsx)(b.hT, { error: U({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: _.uQT.ERROR }), F.current++);
                        },
                        [y.isRejected, y.meta, y.isLoading, P, U],
                    )(),
                        (0, _.Jzs)(y.isResolved),
                        y.isNotFound && (0, r.notFound)(),
                        y.isInfoNotFound && (0, r.notFound)(),
                        ((e) => {
                            (0, l.useEffect)(() => {
                                if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                                let t = (0, f.NE)(e.meta.artist);
                                (0, v.z)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, _.jxB)(e);
                                });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                        })(y);
                    let J = R.checkExperiment(_.zal.WebNextArtistSkeletonHeader, 'on'),
                        Z = R.checkExperiment(_.zal.WebNextArtistSkeleton, 'on'),
                        ee = !J || !Z,
                        et = (0, l.useMemo)(
                            () =>
                                (J ? y.infoLoadingState.isLoading : y.isLoading) || !y.meta
                                    ? (0, i.jsx)(g.c6, { className: E().header, coverRadius: 'round' })
                                    : (0, i.jsx)(g.qi, { className: E().header, artistMeta: y.meta, ref: H, onCoverClick: X ? q : void 0 }),
                            [J, y.infoLoadingState.isLoading, y.isLoading, y.meta, X, H, q],
                        ),
                        ea = (0, m.L)(() => (Z ? (0, i.jsx)(ed, { artist: y }) : (0, i.jsx)(el, { artist: y, artistId: j }))),
                        ei = [];
                    return (y.isNeededToLoad && ee && ei.push(y.getData({ artistId: j, preloadedArtist: N })),
                    y.infoLoadingState.isNeededToLoad && J && ei.push(y.getInfo({ artistId: j })),
                    y.landing.isNeededToLoad && Z && ei.push(y.landing.getArtistSkeleton({ artistId: j, skeletonId: c.p.ARTIST }, { preloadBlocksCount: 2 })),
                    B.isAuthorized && y.familiarInfo.isNeededToLoad && !Z && ei.push(y.familiarInfo.getData({ artistId: j })),
                    ei.length && (0, l.use)(Promise.allSettled(ei)),
                    y.isSomethingWentWrong || y.isInfoSomethingWentWrong)
                        ? (0, i.jsx)(h.w, {})
                        : (null == (T = y.meta) ? void 0 : T.artist.isLegalRejected)
                          ? (0, i.jsx)(b.MW, { modalState: w })
                          : (0, i.jsx)(_.jPc, {
                                children: (0, i.jsxs)(A.hO, {
                                    scrollElement: D,
                                    children: [
                                        (0, i.jsx)(b.Y9, { style: W, innerHeaderRef: $ }),
                                        (0, i.jsx)('div', { className: E().averageColorBackground, style: z }),
                                        (0, i.jsxs)(p.N, {
                                            className: E().root,
                                            containerClassName: E().content,
                                            ref: G,
                                            ...(0, o.Am)(o.Xk.artist.ARTIST_PAGE),
                                            children: [
                                                (0, i.jsxs)('div', { children: [et, ea] }),
                                                (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: E().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                em = (0, s.PA)((e) => (0, i.jsx)(_.nVz, { pageId: _._Q$.ARTIST, pageEntityId: e.artistId, children: (0, i.jsx)(eu, { ...e }) }));
        },
        70585: (e) => {
            e.exports = {
                root: 'ArtistPage_root__QPg3p',
                averageColorBackground: 'ArtistPage_averageColorBackground__wXTSY',
                header: 'ArtistPage_header__tQnNe',
                content: 'ArtistPage_content__iZHVN',
                footer: 'ArtistPage_footer__8m6P9',
            };
        },
        71015: (e) => {
            e.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        73398: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-similar-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-similar-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        81439: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        83924: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        85222: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => r });
            var i = a(44020),
                s = a(42561);
            let r = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, s.P7Q)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, s.uvd)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        88477: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistTracksPage: () => T });
            var i = a(62936),
                s = a(79950),
                r = a(19718),
                l = a(69526),
                n = a(44020),
                o = a(47480),
                c = a(26731),
                d = a(8669),
                u = a(81959),
                m = a(59935),
                p = a(20418),
                g = a(65438),
                h = a(92229),
                A = a(66161),
                f = a(81628),
                _ = a(42561),
                b = a(85906),
                v = a(81439),
                S = a(41320),
                k = a(85222),
                C = a(39309),
                x = a.n(C);
            let T = (0, r.PA)((e) => {
                var t, a, r, C, T, j;
                let { artistId: N, preloadedArtist: I } = e,
                    {
                        artist: L,
                        sonataState: P,
                        disclaimerModalState: E,
                        settings: { isMobile: y },
                    } = (0, _.Pjs)(),
                    { formatMessage: R } = (0, o.A)(),
                    { from: w, utmLink: B } = (0, _.fyy)({ pageId: _._Q$.ARTIST_TRACKS, pageEntityId: N, contextType: u.K.Artist, contextId: N }),
                    { contentScrollRef: M, setContentScrollRef: O } = (0, _.gKY)(),
                    U = (0, _.W6M)(),
                    F = (0, _.wZZ)(),
                    D = (0, f.SA)({ artist: null == (t = L.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, k.G)(N),
                    (0, n.useEffect)(() => {
                        var e;
                        (null == (e = L.meta) ? void 0 : e.artist.isUnsafeLegal) && D();
                    }, [null == (a = L.meta) ? void 0 : a.artist.isUnsafeLegal, D]),
                    (0, S._)(L, N),
                    (0, n.useEffect)(
                        () => () => {
                            L.fullTracksListSubpage.reset();
                        },
                        [L],
                    ),
                    L.fullTracksListSubpage.isNotFound && (0, l.notFound)(),
                    (0, _.Jzs)(L.fullTracksListSubpage.isResolved);
                let G = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: x().footer }) }) }), []),
                    H = (0, m.c)((e) => {
                        let t = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            var a;
                            let e = null == (a = L.fullTracksListSubpage.ids) ? void 0 : a[i];
                            !L.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
                        }
                        t.length && L.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    V = [];
                return (L.fullTracksListSubpage.isNeededToLoad && V.push(L.fullTracksListSubpage.getTracksIds({ artistId: N })),
                L.isNeededToLoad && V.push(L.getData({ artistId: N, preloadedArtist: I })),
                ((e) => {
                    (0, n.useEffect)(() => {
                        if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                        let t = (0, f.NE)(e.meta.artist);
                        (0, v.z)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                            (0, _.jxB)(e);
                        });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                })(L),
                V.length && (0, n.use)(Promise.allSettled(V)),
                L.fullTracksListSubpage.isRejected && !L.fullTracksListSubpage.isNotFound)
                    ? (0, i.jsx)(g.w, {})
                    : (null == (r = L.meta) ? void 0 : r.artist.isLegalRejected)
                      ? (0, i.jsx)(b.MW, { modalState: E })
                      : (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.ARTIST_TRACKS,
                            pageEntityId: N,
                            children: (0, i.jsx)(h.hO, {
                                scrollElement: M,
                                outerTitle: R({ id: 'page.artist-tracks-header' }, { artistName: L.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: x().root,
                                    ...(0, d.Am)(d.Xk.artist.ARTIST_TRACKS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: U.canBack,
                                            children: (0, i.jsx)(p.Heading, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (C = L.meta) ? void 0 : C.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(x().scrollContainer, x().important),
                                            customComponents: G,
                                            itemContentCallback: (e) => {
                                                let t = L.fullTracksListSubpage.getTrackByIndex(e),
                                                    a = R({ id: 'loading-messages.entity-is-loading' }, { entityName: R({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, i.jsx)(A.Kt, {
                                                          track: t,
                                                          playContextParams: F(e, {
                                                              contextData: { type: u.K.Artist, meta: { id: Number(N) }, from: w, utmLink: B },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: P.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, i.jsx)(b.DS, { isActive: !0, 'aria-label': a, variant: _.Xjt.PLAYLIST, className: x().shimmerItem });
                                            },
                                            totalCount: null != (j = null == (T = L.fullTracksListSubpage.ids) ? void 0 : T.length) ? j : 0,
                                            onGetDataByRange: H,
                                            pageSize: 20,
                                            listClassName: x().content,
                                            itemClassName: x().item,
                                            totalRequests: L.fullTracksListSubpage.tracks.size,
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
        88599: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-compilations-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-compilations-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/compilations', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
        93039: (e, t, a) => {
            'use strict';
            a.d(t, { ArtistClipsPage: () => T });
            var i = a(62936),
                s = a(79950),
                r = a(19718),
                l = a(69526),
                n = a(44020),
                o = a(47480),
                c = a(8669),
                d = a(59935),
                u = a(20418),
                m = a(65438),
                p = a(11334),
                g = a(66281),
                h = a(92229),
                A = a(81628),
                f = a(25099),
                _ = a(42561),
                b = a(85906),
                v = a(83924),
                S = a(41320),
                k = a(85222),
                C = a(97899),
                x = a.n(C);
            let T = (0, r.PA)((e) => {
                var t, a;
                let { artistId: r, preloadedArtist: C, preloadedClips: T } = e,
                    {
                        artist: j,
                        disclaimerModalState: N,
                        settings: { isMobile: I },
                    } = (0, _.Pjs)(),
                    { formatMessage: L } = (0, o.A)(),
                    { contentScrollRef: P, setContentScrollRef: E } = (0, _.gKY)(),
                    y = (0, _.W6M)(),
                    R = (0, f.df)();
                (0, A.SA)({ artist: null == (t = j.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let w = (0, d.c)((e) => {
                    j.clipsSubpage.getData({ artistId: r, page: e, pageSize: p.EV });
                });
                (0, _.XcE)(j.clipsSubpage.pagesLoader, w),
                    (0, k.G)(r),
                    (0, S._)(j, r),
                    (0, n.useEffect)(
                        () => () => {
                            j.clipsSubpage.reset();
                        },
                        [j, j.clipsSubpage],
                    ),
                    (0, _.Jzs)(j.clipsSubpage.isResolved),
                    ((e) => {
                        (0, n.useEffect)(() => {
                            if (!(null == e ? void 0 : e.meta) || e.isLoading) return;
                            let t = (0, A.NE)(e.meta.artist);
                            (0, v.E)({ artist: t }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, _.jxB)(e);
                            });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.isLoading]);
                    })(j);
                let B = j.clipsSubpage.isShimmerVisible ? 20 : j.clipsSubpage.items.length,
                    M = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(b.A, { children: (0, i.jsx)(b.wi, { className: x().footer }) }) }), []),
                    O = (0, n.useMemo)(() => L({ id: 'page.artist-clips-header' }, { artistName: j.commonSubPage.artistName }), [j.commonSubPage.artistName, L]),
                    U = [];
                return (j.clipsSubpage.isNeededToLoad && U.push(j.clipsSubpage.getData({ artistId: r, page: 0, pageSize: p.EV, preloadedClips: T })),
                j.isNeededToLoad && U.push(j.getData({ artistId: r, preloadedArtist: C })),
                U.length && (0, n.use)(Promise.allSettled(U)),
                (j.clipsSubpage.isNotFound || !R) && (0, l.notFound)(),
                null == (a = j.meta) ? void 0 : a.artist.isLegalRejected)
                    ? (0, i.jsx)(b.MW, { modalState: N })
                    : j.clipsSubpage.isRejected
                      ? (0, i.jsx)(m.w, {})
                      : (0, i.jsx)(_.nVz, {
                            pageId: _._Q$.ARTIST_CLIPS,
                            pageEntityId: r,
                            children: (0, i.jsx)(h.hO, {
                                scrollElement: P,
                                outerTitle: O,
                                children: (0, i.jsxs)('div', {
                                    className: x().root,
                                    ...(0, c.Am)(c.Xk.artist.ARTIST_CLIPS_PAGE),
                                    children: [
                                        (0, i.jsx)(b.Y9, {
                                            variant: b.Vw.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: y.canBack,
                                            children: (0, i.jsx)(u.Heading, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: O }),
                                        }),
                                        (0, i.jsx)(b.$$, {
                                            className: (0, s.$)(x().scrollContainer, x().important),
                                            listClassName: x().content,
                                            itemClassName: x().item,
                                            customComponents: M,
                                            itemContentCallback: (e) => {
                                                let t = j.clipsSubpage.items[e];
                                                return t ? (0, i.jsx)(g.FC, { clip: t }, t.clipId) : (0, i.jsx)(g.kV, { isActive: !0 });
                                            },
                                            totalCount: B,
                                            onGetDataByPage: w,
                                            pageSize: p.EV,
                                            totalRequests: j.clipsSubpage.requestsCount,
                                            handleRef: E,
                                            context: { listAriaLabel: L({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: I,
                                            useWindowScroll: I,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        93725: (e) => {
            e.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        95985: (e) => {
            e.exports = {
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
        97899: (e) => {
            e.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        99775: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => s });
            var i = a(42561);
            async function s(e, t) {
                var a, s, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, i.WGy)(t.locale),
                    n = l({ id: 'metadata.artist-albums-title' }, { artistName: e.artist.name }),
                    o = l({ id: 'metadata.artist-albums-description' }, { artistName: e.artist.name });
                return {
                    title: n,
                    description: o,
                    openGraph: (0, i.i$E)({
                        ogTitle: n,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, i.vWM)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, i.HRN)({ cardType: i.WfF.SUMMARY_LARGE_IMAGE, title: n, description: o }),
                    facebook: (0, i.kRl)(),
                    appLinks: (0, i.X5i)({
                        additional: { ...t, url: null != (s = t.url) ? s : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, i.SEs)('/artist/:artistId/albums', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
        },
    },
]);
