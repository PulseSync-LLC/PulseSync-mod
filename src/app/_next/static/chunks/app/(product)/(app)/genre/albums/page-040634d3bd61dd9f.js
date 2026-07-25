(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
        3785: (e, t, l) => {
            'use strict';
            var r;
            l.d(t, { M: () => r }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(r || (r = {}));
        },
        8626: (e, t, l) => {
            'use strict';
            l.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        11262: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => d });
            var r = l(32290),
                a = l(55178),
                o = l(91027),
                i = l(71730),
                s = l(45477),
                n = l(75582),
                c = l(49399);
            let d = (e, t) => {
                let { notify: l, dismiss: d } = (0, n.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, o.c)(() => {
                        var l;
                        d({ notificationId: u.current }), (u.current = 0);
                        let r = [...(null != (l = e.lastRejectedPagesList) ? l : [])].reverse().filter((t) => {
                            var l;
                            return (null == (l = e.pageStates) ? void 0 : l[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            });
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = l((0, r.jsx)(i.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, l, e.rejectedPagesCount]);
            };
        },
        14858: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => i });
            var r = l(60900),
                a = l(57594),
                o = l(79406);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: l, experiments: i } = (0, a.g)(),
                    s = 'ru' === l.account.data.userSessionRegionIso && i.checkExperiment(o.z.WebNextFooterDisclaimer, 'on'),
                    n = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return s ? t({ id: 'footer.disclaimer-content' }) : n;
            };
        },
        30174: (e, t, l) => {
            'use strict';
            l.r(t), l.d(t, { default: () => $ });
            var r = l(32290),
                a = l(21916),
                o = l(55178),
                i = l(63618),
                s = l(96103),
                n = l(60900),
                c = l(21732),
                d = l(71926),
                u = l(64170),
                m = l(24170),
                _ = l(7999),
                p = l(48922),
                g = l(22714),
                v = l(83808),
                h = l(83920),
                x = l(3796),
                f = l(49259),
                N = l(45066),
                C = l(57594),
                E = l(11262),
                A = l(58054),
                R = l(32468),
                b = l(74694),
                I = l(89020),
                S = l(45257),
                T = l(69796),
                k = l(22556),
                P = l(44242),
                y = l(42125),
                O = l(44338),
                j = l(24535),
                L = l(47216),
                w = l(94821),
                F = l(26365),
                M = l(43993),
                D = l(49124);
            async function H(e, t) {
                let { locale: l, fullUrl: r, url: a, tld: o, host: i } = t,
                    s = await (0, y.W)(l),
                    n = e.title.fullTitle,
                    c = s({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = (0, M.f)({ genreTitle: n, messageFormatter: s }),
                    u = D.env.ASSET_PREFIX || '',
                    m = ''.concat(i).concat(u, '/meta/og-image.png');
                return {
                    title: c,
                    description: d,
                    openGraph: (0, j.i)({
                        ogTitle: (0, O.N)(n),
                        ogDescription: d,
                        fullUrl: null != r ? r : '',
                        locale: l,
                        siteName: s({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, L.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, P.X)({
                        additional: { tld: o, url: null != a ? a : '', fullUrl: null != r ? r : '', host: i },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var G = l(44936),
                X = l(73215),
                Y = l.n(X);
            let U = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: l } = e,
                    { albumsSubpage: s } = (0, f.s)(N.n.GENRE),
                    {
                        settings: { isMobile: P },
                    } = (0, C.g)(),
                    { formatMessage: y } = (0, n.A)(),
                    { contentScrollRef: O, setContentScrollRef: j } = (0, h.g)(),
                    L = (0, v.W)(),
                    w = (0, o.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: T.cM });
                        },
                        [s, t],
                    );
                (0, E.X)(s.pagesLoader, w),
                    (0, o.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, a.notFound)(),
                    (0, x.J)(s.isResolved),
                    ((e) => {
                        (0, o.useEffect)(() => {
                            e &&
                                H(
                                    ((e) => {
                                        var t, l, r;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            albums: e.items.map(G.f),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (l = e.pagesLoader.pager) ? void 0 : l.perPage) || 0,
                                                total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, k.j)(e);
                                });
                        }, [e]);
                    })(s);
                let F = (0, o.useMemo)(() => ({ Footer: () => (0, r.jsx)(R.A, { children: (0, r.jsx)(A.w, { className: Y().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, o.use)(s.getData({ preloadedMeta: l, metatagId: t, page: 0, pageSize: T.cM })), s.isSomethingWrong))
                    return (0, r.jsx)(u.SomethingWentWrong, {});
                let M = s.isShimmerVisible ? 20 : s.totalCount;
                return (0, r.jsx)(g.n, {
                    pageId: p._Q.GENRE_ALBUMS,
                    children: (0, r.jsx)(_.h, {
                        scrollElement: O,
                        outerTitle: s.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: Y().root,
                            'data-test-id': c.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, r.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: L.canBack,
                                    children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, r.jsx)(S.$, {
                                    className: (0, i.$)(Y().scrollContainer, Y().important),
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            l = y({ id: 'loading-messages.entity-is-loading' }, { entityName: y({ id: 'entity-names.album' }) });
                                        return t ? (0, r.jsx)(m.a, { album: t, contentLinesCount: 4 }, t.id) : (0, r.jsx)(I.V, { 'aria-label': l, linesCount: 4 });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: w,
                                    pageSize: T.cM,
                                    totalRequests: s.requestsCount,
                                    listClassName: Y().content,
                                    itemClassName: Y().item,
                                    handleRef: j,
                                    context: { listAriaLabel: y({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var V = l(79856),
                z = l(50308);
            let B = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, n.A)(),
                        l = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, r.jsx)(_.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: Y().root,
                            children: [
                                (0, r.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(V.W, { className: Y().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', {
                                    className: (0, i.$)(Y().scrollContainer, Y().important, Y().shimmerScrollContainer),
                                    children: (0, r.jsx)('div', {
                                        className: Y().content,
                                        children: (0, r.jsx)(z.e, { isActive: !0, itemClassName: Y().item, 'aria-label': l, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                $ = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return e || (0, a.notFound)(), (0, r.jsx)(o.Suspense, { fallback: (0, r.jsx)(B, {}), children: (0, r.jsx)(U, { metatagId: e }) });
                };
        },
        31010: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => a, P: () => o });
            var r = l(55178);
            let a = (0, r.createContext)(null),
                o = () => (0, r.useContext)(a);
        },
        32468: (e, t, l) => {
            'use strict';
            l.d(t, { A: () => i });
            var r = l(32290),
                a = l(77088),
                o = l.n(a);
            let i = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: o().empty });
            };
        },
        36504: (e, t, l) => {
            'use strict';
            l.d(t, { N: () => o });
            var r = l(96151),
                a = l(87151);
            let o = (e) => {
                var t, l, o, i, s;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (l = e.counts) ? void 0 : l.albums) || 0,
                              alsoAlbums: (null == (o = e.counts) ? void 0 : o.compilations) || 0,
                              tracks: (null == (i = e.counts) ? void 0 : i.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (s = e.trailer) ? void 0 : s.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        44936: (e, t, l) => {
            'use strict';
            l.d(t, { f: () => a });
            var r = l(36504);
            let a = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let l = (null == (t = e.artists) ? void 0 : t.map((e) => (0, r.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: l,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        45257: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => v });
            var r = l(32290),
                a = l(63618),
                o = l(8055),
                i = l(55178);
            let s = (e) => {
                    let { style: t, forwardRef: l, context: a, ...o } = e,
                        i = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': i, style: { ...t }, ref: l, ...o });
                },
                n = (0, i.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = l(39684),
                d = l.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: l, withFooter: o, withHeader: i, withForceScroll: s, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: l,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, i.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = l(62060),
                p = l(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: a,
                            debounceDurationInMs: o = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, m] = (0, i.useState)(null),
                        g = (0, i.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && m(e), t && l)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) l(e);
                                    }
                                }, o),
                            [o, a, t, l, n],
                        );
                    (0, i.useEffect)(() => {
                        n.length > 0 && u && g(u);
                    }, n);
                    let v = (0, i.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, r.jsx)(p.sN, { rangeChanged: g, totalCount: s, endReached: v, ...d });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: h = 20,
                            totalCount: x,
                            totalRequests: f,
                            debounceDurationInMs: N,
                            initialItemCount: C,
                            minInitialItemCount: E = 20,
                            handleRef: A,
                            alwaysShowScrollbar: R = !1,
                            testId: b,
                            isMobileLayout: I = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...T
                        } = e,
                        [k, P] = (0, i.useState)(!1),
                        y = (0, i.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        O = (0, i.useMemo)(() => {
                            var e, t;
                            return I
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : n,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : n,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, f, I]),
                        j = C ? Math.min(C, E) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: k || R, [d().root_notScrolling]: !k && !R }, t),
                        'data-test-id': b,
                        children: [
                            I && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, r.jsx)(g, {
                                overscan: v,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: _,
                                scrollerRef: A,
                                totalCount: x,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: S,
                                ...T,
                            }),
                            I && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, l) => {
            'use strict';
            l.d(t, { e: () => o });
            var r = l(32290),
                a = l(89020);
            let o = (e) => {
                let {
                    isActive: t,
                    itemClassName: l,
                    round: o,
                    centered: i,
                    withInfo: s,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: l, round: o, centered: i, withInfo: s, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        57594: (e, t, l) => {
            'use strict';
            l.d(t, { P: () => o, g: () => i });
            var r = l(29222),
                a = l(55178);
            let o = (0, a.createContext)(null);
            function i() {
                let e = (0, a.useContext)(o);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => C });
            var r = l(32290),
                a = l(63618),
                o = l(96103),
                i = l(60900),
                s = l(39407),
                n = l(21732),
                c = l(71926),
                d = l(14858),
                u = l(8626),
                m = l(31010),
                _ = l(61945),
                p = l(57594),
                g = (function (e) {
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
            let v = (e, t, l) => {
                switch (e) {
                    case g.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case g.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(l);
                    case g.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(l);
                    case g.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(l);
                    case g.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case g.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(l);
                    case g.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(l);
                }
            };
            var h = l(61258),
                x = l(77088),
                f = l.n(x);
            let N = (0, o.PA)((e) => {
                    let { className: t } = e,
                        { location: l } = (0, p.g)(),
                        { formatDate: o } = (0, i.A)(),
                        { language: d } = (0, _.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': n.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    o(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(h.N, {
                                        target: '_blank',
                                        href: v(g.YANDEX, l.tld, d),
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': n.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(s.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(h.N, {
                                target: '_blank',
                                href: v(g.YANDEX_PROJECTS, l.tld, d),
                                className: f().copyrightLink,
                                'data-test-id': n.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(s.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                C = (0, o.PA)((e) => {
                    var t;
                    let { className: l } = e,
                        { user: o, location: i } = (0, p.g)(),
                        { isEnabled: u } = null != (t = (0, m.P)()) ? t : {},
                        { language: x } = (0, _.h)(),
                        C = (0, d.w)(!0),
                        E = ((e) => {
                            let { platform: t, tld: l, language: a, userRegion: o } = e,
                                i = { title: (0, r.jsx)(s.A, { id: 'footer.links-copyright-holders' }), url: v(g.COPYRIGHT_HOLDER, l, a) },
                                n = { title: (0, r.jsx)(s.A, { id: 'footer.links-privacy-policy' }), url: v(g.PRIVACY_POLICY, l, a) },
                                c = { title: (0, r.jsx)(s.A, { id: 'footer.links-terms' }), url: v(g.AGREEMENT, l, a) },
                                d = { title: (0, r.jsx)(s.A, { id: 'footer.links-recommendation-rules' }), url: v(g.RECOMMENDATION_RULES, l, a) },
                                u = { title: (0, r.jsx)(s.A, { id: 'footer.links-help' }), url: v(g.HELP, l, a) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [i, c, d];
                                    return 'ru' === o && e.push(n), e.push(u), e;
                                }
                                case 'desktop':
                                    return [i, c, d, u];
                            }
                        })({ platform: 'desktop', tld: i.tld, language: x, userRegion: o.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, { [f().root_withOffsetForDeeplink]: u }, l),
                        'data-test-id': n.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: f().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: f().list,
                                        'data-test-id': n.S7.FOOTER_LINKS_LIST,
                                        children: E.map((e) => {
                                            let { title: t, url: l } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: f().item,
                                                    children: (0, r.jsx)(h.N, {
                                                        target: '_blank',
                                                        href: l,
                                                        className: f().link,
                                                        'data-test-id': n.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                l,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: f().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: C },
                                        'data-test-id': n.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(N, {}),
                        ],
                    });
                });
        },
        65024: (e, t, l) => {
            'use strict';
            l.d(t, { C: () => a });
            let r = new Set(Object.values(l(3785).M)),
                a = (e) => 'string' == typeof e && r.has(e);
        },
        69796: (e, t, l) => {
            'use strict';
            l.d(t, { El: () => s, I7: () => n, K$: () => i, cM: () => d, fZ: () => a, tA: () => o, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                o = 315,
                i = 170,
                s = 270,
                n = 7,
                c = 30,
                d = 30;
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, l) => {
            'use strict';
            l.d(t, { L: () => p });
            var r = l(32290),
                a = l(63618),
                o = l(55178),
                i = l(60900),
                s = l(39407),
                n = l(63423),
                c = l(82586),
                d = l(71926),
                u = l(58534),
                m = l(70718),
                _ = l.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: l } = e,
                    m = (0, o.useRef)(null),
                    { formatMessage: p } = (0, i.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, o.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: g, closeToast: l });
            };
        },
        73215: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                shimmerScrollContainer: 'GenreAlbumsPage_shimmerScrollContainer__IpQeU',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
                shimmerTitle: 'GenreAlbumsPage_shimmerTitle__UW_D5',
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
        87151: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => a });
            var r = l(65024);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        97725: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 30174));
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 6004, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 3266, 6477, 7275,
                2586, 8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 97725)),
        ),
            (_N_E = e.O());
    },
]);
