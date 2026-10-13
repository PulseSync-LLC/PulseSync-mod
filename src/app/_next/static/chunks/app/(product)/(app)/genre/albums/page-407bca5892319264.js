(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
        400: (e) => {
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
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var l = r(25839),
                a = r(82298),
                i = r(74631),
                o = r(39004),
                s = r(8487),
                n = r(4071),
                c = r(66738),
                d = r(4254),
                u = r(51790),
                m = r(12558),
                _ = r.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, i.useRef)(null),
                    { formatMessage: p } = (0, o.A)();
                (0, i.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, i.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: g, closeToast: r });
            };
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var l = r(25839),
                a = r(82298),
                i = r(28631),
                o = r(74631);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: a, ...i } = e,
                        o = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': o, style: { ...t }, ref: r, ...i });
                },
                n = (0, o.forwardRef)((e, t) => (0, l.jsx)(s, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(10508),
                p = r(63257);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: i = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, g] = (0, o.useState)(null),
                        v = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && g(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < l; e++) r(e);
                                    }
                                }, i),
                            [i, a, t, r, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && m && v(m);
                    }, n);
                    let h = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: s, endReached: h, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
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
                            initialItemCount: E,
                            minInitialItemCount: C = 20,
                            handleRef: R,
                            alwaysShowScrollbar: A = !1,
                            testId: b,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...P
                        } = e,
                        [T, S] = (0, o.useState)(!1),
                        k = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        O = (0, o.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, f, y]),
                        L = E ? Math.min(E, C) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: T || A, [d().root_notScrolling]: !T && !A }, t),
                        'data-test-id': b,
                        children: [
                            y && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: v,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: k,
                                itemContent: _,
                                scrollerRef: R,
                                totalCount: x,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...P,
                            }),
                            y && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var l = r(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        14902: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 72590));
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => o });
            var l = r(25839);
            r(93588);
            var a = r(400),
                i = r.n(a);
            let o = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, g: () => o });
            var l = r(74631),
                a = r(36432);
            let i = (0, l.createContext)(null);
            function o() {
                let e = (0, l.useContext)(i);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => i });
            var l = r(74631);
            let a = (0, l.createContext)(null),
                i = () => (0, l.useContext)(a);
        },
        43464: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            let l = new Set(Object.values(r(85705).M)),
                a = (e) => 'string' == typeof e && l.has(e);
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
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var l = r(25839),
                a = r(74631),
                i = r(71035),
                o = r(1466),
                s = r(91149),
                n = r(92942),
                c = r(36159);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, n.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, i.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, l.jsx)(o.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        61399: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var l = r(43464);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, l.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        72590: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => B }));
            var l = r(25839),
                a = r(84059),
                i = r(74631),
                o = r(82298),
                s = r(88204),
                n = r(39004),
                c = r(61493),
                d = r(4254),
                u = r(78299),
                m = r(76939),
                _ = r(1407),
                p = r(20258),
                g = r(10322),
                v = r(21784),
                h = r(89192),
                x = r(30716),
                f = r(80499),
                N = r(82706),
                E = r(27954),
                C = r(60678),
                R = r(99401),
                A = r(26076),
                b = r(10603),
                y = r(19412),
                I = r(6968),
                P = r(94540),
                T = r(61732),
                S = r(12234),
                k = r(89221),
                O = r(41242),
                L = r(27935),
                j = r(41016),
                w = r(80461),
                F = r(95445),
                M = r(71121);
            async function D(e, t) {
                let { locale: r, fullUrl: l, url: a, tld: i, host: o } = t,
                    s = await (0, k.W)(r),
                    n = e.title.fullTitle,
                    c = s({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = (0, M.f)({ genreTitle: n, messageFormatter: s }),
                    u = ''.concat(o).concat('', '/meta/og-image.png');
                return {
                    title: c,
                    description: d,
                    openGraph: (0, L.i)({
                        ogTitle: (0, O.N)(n),
                        ogDescription: d,
                        fullUrl: null != l ? l : '',
                        locale: r,
                        siteName: s({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, j.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, S.X)({
                        additional: { tld: i, url: null != a ? a : '', fullUrl: null != l ? l : '', host: o },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var H = r(88720),
                Y = r(73807),
                G = r.n(Y);
            let X = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { albumsSubpage: s } = (0, f.s)(N.n.GENRE),
                    {
                        settings: { isMobile: S },
                    } = (0, E.g)(),
                    { formatMessage: k } = (0, n.A)(),
                    { contentScrollRef: O, setContentScrollRef: L } = (0, h.g)(),
                    j = (0, v.W)(),
                    w = (0, i.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: P.cM });
                        },
                        [s, t],
                    );
                ((0, C.X)(s.pagesLoader, w),
                    (0, i.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, a.notFound)(),
                    (0, x.J)(s.isResolved),
                    ((e) => {
                        (0, i.useEffect)(() => {
                            e &&
                                D(
                                    ((e) => {
                                        var t, r, l;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            albums: e.items.map(H.f),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                                total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, T.j)(e);
                                });
                        }, [e]);
                    })(s));
                let F = (0, i.useMemo)(() => ({ Footer: () => (0, l.jsx)(A.A, { children: (0, l.jsx)(R.w, { className: G().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, i.use)(s.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: P.cM })), s.isSomethingWrong))
                    return (0, l.jsx)(u.SomethingWentWrong, {});
                let M = s.isShimmerVisible ? 20 : s.totalCount;
                return (0, l.jsx)(g.n, {
                    pageId: p._Q.GENRE_ALBUMS,
                    children: (0, l.jsx)(_.h, {
                        scrollElement: O,
                        outerTitle: s.fullTitle,
                        children: (0, l.jsxs)('div', {
                            className: G().root,
                            'data-test-id': c.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, l.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, l.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, l.jsx)(I.$, {
                                    className: (0, o.$)(G().scrollContainer, G().important),
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            r = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return t ? (0, l.jsx)(m.a, { album: t, contentLinesCount: 4 }, t.id) : (0, l.jsx)(y.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: w,
                                    pageSize: P.cM,
                                    totalRequests: s.requestsCount,
                                    listClassName: G().content,
                                    itemClassName: G().item,
                                    handleRef: L,
                                    context: { listAriaLabel: k({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: S,
                                    useWindowScroll: S,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var U = r(23976),
                V = r(95772);
            let z = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, l.jsx)(_.h, {
                        scrollElement: null,
                        children: (0, l.jsxs)('div', {
                            className: G().root,
                            children: [
                                (0, l.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, l.jsx)(U.W, { className: G().shimmerTitle, radius: 'l' }),
                                }),
                                (0, l.jsx)('div', {
                                    className: (0, o.$)(G().scrollContainer, G().important, G().shimmerScrollContainer),
                                    children: (0, l.jsx)('div', {
                                        className: G().content,
                                        children: (0, l.jsx)(V.e, { isActive: !0, itemClassName: G().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                B = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, l.jsx)(i.Suspense, { fallback: (0, l.jsx)(z, {}), children: (0, l.jsx)(X, { metatagId: e }) }));
                };
        },
        73807: (e) => {
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
        75568: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var l = r(47127),
                a = r(61399);
            let i = (e) => {
                var t, r, i, o, s;
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
                          cover: { uri: e.coverUri || '', type: l.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (i = e.counts) ? void 0 : i.compilations) || 0,
                              tracks: (null == (o = e.counts) ? void 0 : o.tracks) || 0,
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
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var l = r(36484),
                a = r(62562);
            let i = () => (0, a.N)().get(l.Zf);
        },
        85705: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { M: () => l }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track icon registration in the disclaimer icon enum
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track icon registration in the disclaimer icon enum
                })(l || (l = {})));
        },
        88720: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => a });
            var l = r(75568);
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
                let r = (null == (t = e.artists) ? void 0 : t.map((e) => (0, l.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: r,
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
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        94540: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => s, I7: () => n, K$: () => o, cM: () => d, fZ: () => a, tA: () => i, vX: () => l, xi: () => c });
            let l = 16,
                a = 16,
                i = 315,
                o = 170,
                s = 270,
                n = 7,
                c = 30,
                d = 30;
        },
        95772: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            var l = r(25839),
                a = r(19412);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: i,
                    centered: o,
                    withInfo: s,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, l.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: r, round: i, centered: o, withInfo: s, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => b });
            var l = r(25839),
                a = r(82298),
                i = r(88204),
                o = r(39004),
                s = r(93588),
                n = r(43354),
                c = (function (e) {
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
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: l, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, r) },
                    };
                };
            var m = r(10959),
                _ = r(89514);
            let p = (e) => e(new Date(), (0, _.m)());
            var g = r(96433),
                v = r(27954),
                h = r(400),
                x = r.n(h),
                f = r(61493),
                N = r(4254),
                E = r(97522);
            let C = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(x().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, l.jsx)(E.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                R = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, l.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: x().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, l.jsx)(E.N, { target: '_blank', href: a, className: x().link, 'data-test-id': f.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, a.$)(x().root, x().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, l.jsx)(R, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(C, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: a, formatMessage: i } = (0, o.A)(),
                    { language: s } = (0, g.h)(),
                    n = u({ formatMessage: i, language: s, tld: r.tld, year: p(a) });
                return (0, l.jsx)(C, { className: t, data: n });
            });
            let b = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: _, user: h } = (0, v.g)(),
                    { formatDate: f, formatMessage: N } = (0, o.A)(),
                    { isEnabled: E } = null != (t = (0, n.P)()) ? t : {},
                    { language: C } = (0, g.h)(),
                    R = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: o, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: a, userRegion: i } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, a) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, a) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, a) },
                                    _ = [o, n, u];
                                return (r && 'ru' === i && _.push(s), _.push(m), _);
                            })({ formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: o }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: r, language: a, tld: i, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: s.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: p(f),
                    });
                return (0, l.jsx)(A, { className: (0, a.$)({ [x().root_withOffsetForDeeplink]: E }, r), data: R });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 9716, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4282, 3269,
                4163, 3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 8706, 4475, 5056, 7358,
            ],
            () => e((e.s = 14902)),
        ),
            (_N_E = e.O()));
    },
]);
