(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [738],
    {
        10086: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => a }));
            var l = r(88800),
                o = r(58390),
                i = r(77741),
                s = r(49161);
            let a = () => {
                let e = (0, o.useSearchParams)().get('id');
                return (e || (0, o.notFound)(), (0, l.jsx)(s.g, { id: e, variant: i.x.CATEGORY }));
            };
        },
        11006: (e) => {
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
        32353: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, u: () => o });
            var l = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        49161: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => I });
            var l = r(88800),
                o = r(65724),
                i = r(84961),
                s = r(53548),
                a = r(2058),
                n = r(58390),
                c = r(87999),
                d = r(76903),
                u = r(17392),
                _ = r(29504),
                m = r(10079),
                h = r(69630),
                x = r(98427),
                E = r(46422),
                g = r(32353),
                p = r(44230),
                N = r(37670),
                R = r(72288),
                C = r(86790),
                f = r(60266),
                A = r(93317),
                O = r(37770),
                S = r(79418),
                y = r(77741),
                L = r(79023),
                v = r.n(L);
            let I = (0, i.PA)((e) => {
                var t, r;
                let { id: i, variant: L } = e,
                    {
                        nonMusic: { albums: I },
                        settings: M,
                    } = (0, R.g)(),
                    { formatMessage: P } = (0, a.A)(),
                    { contentScrollRef: k, setContentScrollRef: T } = (0, p.g)(),
                    b = (0, E.W)(),
                    D = M.layout === g.u.Mobile;
                ((I.isNotFound || !i) && (0, n.notFound)(),
                    (0, N.J)(I.isResolved),
                    (0, s.useEffect)(
                        () => () => {
                            I.reset();
                        },
                        [I],
                    ));
                let F = (0, s.useCallback)(
                        (e) => {
                            I.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [I],
                    ),
                    j = (0, s.useMemo)(() => ({ Footer: () => (0, l.jsx)(f.A, { children: (0, l.jsx)(C.w, { className: v().footer }) }) }), []),
                    w = I.isLoading ? 20 : null != (r = null == (t = I.albums) ? void 0 : t.length) ? r : 0;
                return (
                    i && I.isNeededToLoad && (L === y.x.EDITORIAL ? (0, s.use)(I.getEditorialAlbums({ id: i })) : (0, s.use)(I.getCategoryAlbums({ id: i }))),
                    (0, l.jsx)(d.a, {
                        pageId: c.AppScreen.NonMusicAlbums,
                        pageIdForFrom: x.b.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(h.h, {
                            scrollElement: k,
                            outerTitle: I.title,
                            children: (0, l.jsxs)('div', {
                                className: v().root,
                                'data-test-id': u.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                children: [
                                    (0, l.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: b.canBack,
                                        children: (0, l.jsx)(_.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: I.title,
                                        }),
                                    }),
                                    (0, l.jsx)(S.$, {
                                        className: (0, o.$)(v().scrollContainer, v().important),
                                        customComponents: j,
                                        itemContentCallback: (e) => {
                                            var t, r;
                                            let o = null == (r = I.albums) || null == (t = r[e]) ? void 0 : t.data,
                                                i = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.album' }) });
                                            return o
                                                ? (0, l.jsx)(m.a, { withLikesCount: !0, album: o, contentLinesCount: 3 }, o.id)
                                                : (0, l.jsx)(O.V, { 'aria-label': i }, e);
                                        },
                                        totalCount: w,
                                        onGetDataByRange: F,
                                        totalRequests: I.requestsCount,
                                        listClassName: v().content,
                                        itemClassName: v().item,
                                        handleRef: T,
                                        context: { listAriaLabel: P({ id: 'mixes.albums-list' }, { genreName: I.title || '' }) },
                                        isMobileLayout: D,
                                        useWindowScroll: D,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var l = r(88800);
            r(30282);
            var o = r(11006),
                i = r.n(o);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var l = r(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        77290: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 10086));
        },
        77741: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var l = (function (e) {
                return ((e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e);
            })({});
        },
        79023: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => E });
            var l = r(88800),
                o = r(65724),
                i = r(61013),
                s = r(53548);
            let a = (e) => {
                    let { style: t, forwardRef: r, context: o, ...i } = e,
                        s = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        a = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': s, style: { ...t }, ref: r, ...i });
                },
                n = (0, s.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: s, withForceScroll: a, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = r(55482),
                h = r(75151);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: i = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, x] = (0, s.useState)(null),
                        E = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), n.length > 0 && x(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, i),
                            [i, o, t, r, n],
                        );
                    (0, s.useEffect)(() => {
                        n.length > 0 && _ && E(_);
                    }, n);
                    let g = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(h.sN, { ref: d, rangeChanged: E, totalCount: a, endReached: g, ...u });
                },
                E = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: E = 700,
                            pageSize: g = 20,
                            totalCount: p,
                            totalRequests: N,
                            debounceDurationInMs: R,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: A,
                            alwaysShowScrollbar: O = !1,
                            testId: S,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...v
                        } = e,
                        [I, M] = (0, s.useState)(!1),
                        P = (0, s.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    M(e);
                                }, 100),
                            [],
                        ),
                        k = (0, s.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, N, y]),
                        T = C ? Math.min(C, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: I || O, [d().root_notScrolling]: !I && !O }, t),
                        'data-test-id': S,
                        children: [
                            y && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(x, {
                                overscan: E,
                                components: k,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: P,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: p,
                                pageSize: g,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: R,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: L,
                                ...v,
                            }),
                            y && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => S });
            var l = r(88800),
                o = r(65724),
                i = r(84961),
                s = r(2058),
                a = r(30282),
                n = r(94144),
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
                    let { formatMessage: t, language: r, tld: l, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, r) },
                    };
                };
            var _ = r(62293),
                m = r(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var x = r(51611),
                E = r(72288),
                g = r(11006),
                p = r.n(g),
                N = r(17392),
                R = r(29504),
                C = r(91292);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(p().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(R.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: p().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, l.jsx)(C.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(p().copyrightLink, p().yandexMusicLink),
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(R.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(C.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: p().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, l.jsxs)('div', {
                        className: p().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: p().list,
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: p().item,
                                            children: (0, l.jsx)(C.N, { target: '_blank', href: o, className: p().link, 'data-test-id': N.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(R.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: p().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': N.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, o.$)(p().root, p().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, l.jsx)(A, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, E.g)(),
                    { formatDate: o, formatMessage: i } = (0, s.A)(),
                    { language: a } = (0, x.h)(),
                    n = u({ formatMessage: i, language: a, tld: r.tld, year: h(o) });
                return (0, l.jsx)(f, { className: t, data: n });
            });
            let S = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: m, user: g } = (0, E.g)(),
                    { formatDate: N, formatMessage: R } = (0, s.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: f } = (0, x.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: o, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, o) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, o) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, o) },
                                    m = [s, n, u];
                                return (r && 'ru' === i && m.push(a), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: i, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: R,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: h(N),
                    });
                return (0, l.jsx)(O, { className: (0, o.$)({ [p().root_withOffsetForDeeplink]: C }, r), data: A });
            });
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => i });
            var l = r(53548);
            let o = (0, l.createContext)(null),
                i = () => (0, l.useContext)(o);
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 9079, 4814, 1833, 3469, 8194, 1191, 8655, 5550, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 6551, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 77290)),
        ),
            (_N_E = e.O()));
    },
]);
