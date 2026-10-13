(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9802],
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
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => E });
            var l = r(25839),
                o = r(82298),
                i = r(28631),
                s = r(74631);
            let n = (e) => {
                    let { style: t, forwardRef: r, context: o, ...i } = e,
                        s = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        n = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: r, ...i });
                },
                a = (0, s.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: s, withForceScroll: n, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = r(10508),
                h = r(63257);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: i = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, x] = (0, s.useState)(null),
                        E = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && x(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, i),
                            [i, o, t, r, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && _ && E(_);
                    }, a);
                    let g = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(h.sN, { ref: d, rangeChanged: E, totalCount: n, endReached: g, ...u });
                },
                E = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: E = 700,
                            pageSize: g = 20,
                            totalCount: N,
                            totalRequests: p,
                            debounceDurationInMs: C,
                            initialItemCount: R,
                            minInitialItemCount: f = 20,
                            handleRef: O,
                            alwaysShowScrollbar: L = !1,
                            testId: A,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: v,
                            ...y
                        } = e,
                        [I, P] = (0, s.useState)(!1),
                        M = (0, s.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        k = (0, s.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, p, S]),
                        T = R ? Math.min(R, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: I || L, [d().root_notScrolling]: !I && !L }, t),
                        'data-test-id': A,
                        children: [
                            S && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(x, {
                                overscan: E,
                                components: k,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: M,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: N,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: v,
                                ...y,
                            }),
                            S && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var l = r(44806);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var l = r(25839);
            r(93588);
            var o = r(400),
                i = r.n(o);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        27954: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, g: () => s });
            var l = r(74631),
                o = r(36432);
            let i = (0, l.createContext)(null);
            function s() {
                let e = (0, l.useContext)(i);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        31843: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => y });
            var l = r(25839),
                o = r(82298),
                i = r(88204),
                s = r(84059),
                n = r(74631),
                a = r(39004),
                c = r(61493),
                d = r(4254),
                u = r(76939),
                _ = r(1407),
                m = r(20258),
                h = r(10322),
                x = r(21784),
                E = r(51859),
                g = r(89192),
                N = r(30716),
                p = r(27954),
                C = r(99401),
                R = r(26076),
                f = r(10603),
                O = r(19412),
                L = r(6968),
                A = r(83531),
                S = r(85725),
                v = r.n(S);
            let y = (0, i.PA)((e) => {
                var t, r;
                let { id: i, variant: S } = e,
                    {
                        nonMusic: { albums: y },
                        settings: I,
                    } = (0, p.g)(),
                    { formatMessage: P } = (0, a.A)(),
                    { contentScrollRef: M, setContentScrollRef: k } = (0, g.g)(),
                    T = (0, x.W)(),
                    b = I.layout === E.u.Mobile;
                ((y.isNotFound || !i) && (0, s.notFound)(),
                    (0, N.J)(y.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            y.reset();
                        },
                        [y],
                    ));
                let D = (0, n.useCallback)(
                        (e) => {
                            y.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [y],
                    ),
                    j = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(R.A, { children: (0, l.jsx)(C.w, { className: v().footer }) }) }), []),
                    w = y.isLoading ? 20 : null != (r = null == (t = y.albums) ? void 0 : t.length) ? r : 0;
                return (
                    i && y.isNeededToLoad && (S === A.x.EDITORIAL ? (0, n.use)(y.getEditorialAlbums({ id: i })) : (0, n.use)(y.getCategoryAlbums({ id: i }))),
                    (0, l.jsx)(h.n, {
                        pageId: m._Q.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(_.h, {
                            scrollElement: M,
                            outerTitle: y.title,
                            children: (0, l.jsxs)('div', {
                                className: v().root,
                                'data-test-id': c.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                children: [
                                    (0, l.jsx)(f.Y, {
                                        variant: f.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: T.canBack,
                                        children: (0, l.jsx)(d.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: y.title,
                                        }),
                                    }),
                                    (0, l.jsx)(L.$, {
                                        className: (0, o.$)(v().scrollContainer, v().important),
                                        customComponents: j,
                                        itemContentCallback: (e) => {
                                            var t, r;
                                            let o = null == (r = y.albums) || null == (t = r[e]) ? void 0 : t.data,
                                                i = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.album' }) });
                                            return o
                                                ? (0, l.jsx)(u.a, { withLikesCount: !0, album: o, contentLinesCount: 3 }, o.id)
                                                : (0, l.jsx)(O.V, { 'aria-label': i }, e);
                                        },
                                        totalCount: w,
                                        onGetDataByRange: D,
                                        totalRequests: y.requestsCount,
                                        listClassName: v().content,
                                        itemClassName: v().item,
                                        handleRef: k,
                                        context: { listAriaLabel: P({ id: 'mixes.albums-list' }, { genreName: y.title || '' }) },
                                        isMobileLayout: b,
                                        useWindowScroll: b,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => i });
            var l = r(74631);
            let o = (0, l.createContext)(null),
                i = () => (0, l.useContext)(o);
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
        47104: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => n }));
            var l = r(25839),
                o = r(84059),
                i = r(83531),
                s = r(31843);
            let n = () => {
                let e = (0, o.useSearchParams)().get('id');
                return (e || (0, o.notFound)(), (0, l.jsx)(s.g, { id: e, variant: i.x.EDITORIAL }));
            };
        },
        51859: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, u: () => o });
            var l = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        61317: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 47104));
        },
        83531: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var l = (function (e) {
                return ((e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e);
            })({});
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var l = r(36484),
                o = r(62562);
            let i = () => (0, o.N)().get(l.Zf);
        },
        85725: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var l = r(25839),
                o = r(82298),
                i = r(88204),
                s = r(39004),
                n = r(93588),
                a = r(43354),
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
            var _ = r(10959),
                m = r(89514);
            let h = (e) => e(new Date(), (0, m.m)());
            var x = r(96433),
                E = r(27954),
                g = r(400),
                N = r.n(g),
                p = r(61493),
                C = r(4254),
                R = r(97522);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(N().copyrights, t),
                        'data-test-id': p.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: N().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, l.jsx)(R.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(N().copyrightLink, N().yandexMusicLink),
                                        'data-test-id': p.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(R.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: N().copyrightLink,
                                'data-test-id': p.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, l.jsxs)('div', {
                        className: N().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: N().list,
                                'data-test-id': p.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: N().item,
                                            children: (0, l.jsx)(R.N, { target: '_blank', href: o, className: N().link, 'data-test-id': p.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: N().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': p.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, o.$)(N().root, N().important, t),
                        'data-test-id': p.S7.FOOTER,
                        children: [(0, l.jsx)(O, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, E.g)(),
                    { formatDate: o, formatMessage: i } = (0, s.A)(),
                    { language: n } = (0, x.h)(),
                    a = u({ formatMessage: i, language: n, tld: r.tld, year: h(o) });
                return (0, l.jsx)(f, { className: t, data: a });
            });
            let A = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: m, user: g } = (0, E.g)(),
                    { formatDate: p, formatMessage: C } = (0, s.A)(),
                    { isEnabled: R } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, x.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: o, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, o) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, o) },
                                    m = [s, a, u];
                                return (r && 'ru' === i && m.push(n), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: i, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: h(p),
                    });
                return (0, l.jsx)(L, { className: (0, o.$)({ [N().root_withOffsetForDeeplink]: R }, r), data: O });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7339, 1676, 6749, 6287, 2121, 3472, 1107, 7349, 8850, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 4245, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 61317)),
        ),
            (_N_E = e.O()));
    },
]);
