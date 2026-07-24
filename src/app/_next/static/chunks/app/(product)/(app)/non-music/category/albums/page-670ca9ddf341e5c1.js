(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [738],
    {
        7443: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var l = (function (e) {
                return (e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e;
            })({});
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        14858: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var l = r(60900),
                o = r(57594),
                s = r(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: r, experiments: n } = (0, o.g)(),
                    i = 'ru' === r.account.data.userSessionRegionIso && n.checkExperiment(s.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return i ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        25901: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => s });
            var l = r(55178);
            let o = (0, l.createContext)(null),
                s = () => (0, l.useContext)(o);
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var l = r(32290),
                o = r(77088),
                s = r.n(o);
            let n = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: s().empty });
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
        42120: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 85696));
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var l = r(32290),
                o = r(63618),
                s = r(8055),
                n = r(55178);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        n = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': n, style: { ...t }, ref: r, ...s });
                },
                a = (0, n.forwardRef)((e, t) => (0, l.jsx)(i, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: n, withForceScroll: i, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = r(62060),
                h = r(31417);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && _(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, s),
                            [s, o, t, r, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && u && x(u);
                    }, a);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, l.jsx)(h.sN, { rangeChanged: x, totalCount: i, endReached: g, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: p = 20,
                            totalCount: E,
                            totalRequests: N,
                            debounceDurationInMs: C,
                            initialItemCount: R,
                            minInitialItemCount: f = 20,
                            handleRef: A,
                            alwaysShowScrollbar: S = !1,
                            testId: O,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: v,
                            ...I
                        } = e,
                        [k, y] = (0, n.useState)(!1),
                        M = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    y(e);
                                }, 100),
                            [],
                        ),
                        P = (0, n.useMemo)(() => {
                            var e, t;
                            return L
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
                        }, [r, N, L]),
                        T = R ? Math.min(R, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: k || S, [d().root_notScrolling]: !k && !S }, t),
                        'data-test-id': O,
                        children: [
                            L && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(x, {
                                overscan: g,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: M,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: E,
                                pageSize: p,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: v,
                                ...I,
                            }),
                            L && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        51819: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => I });
            var l = r(32290),
                o = r(63618),
                s = r(96103),
                n = r(21916),
                i = r(55178),
                a = r(60900),
                c = r(21732),
                d = r(71926),
                u = r(24170),
                _ = r(7999),
                m = r(48922),
                h = r(22714),
                x = r(83808),
                g = r(54667),
                p = r(83920),
                E = r(3796),
                N = r(57594),
                C = r(58054),
                R = r(32468),
                f = r(74694),
                A = r(89020),
                S = r(45257),
                O = r(7443),
                L = r(25901),
                v = r.n(L);
            let I = (0, s.PA)((e) => {
                var t, r;
                let { id: s, variant: L } = e,
                    {
                        nonMusic: { albums: I },
                        settings: k,
                    } = (0, N.g)(),
                    { formatMessage: y } = (0, a.A)(),
                    { contentScrollRef: M, setContentScrollRef: P } = (0, p.g)(),
                    T = (0, x.W)(),
                    b = k.layout === g.u.Mobile;
                (I.isNotFound || !s) && (0, n.notFound)(),
                    (0, E.J)(I.isResolved),
                    (0, i.useEffect)(
                        () => () => {
                            I.reset();
                        },
                        [I],
                    );
                let w = (0, i.useCallback)(
                        (e) => {
                            I.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [I],
                    ),
                    j = (0, i.useMemo)(() => ({ Footer: () => (0, l.jsx)(R.A, { children: (0, l.jsx)(C.w, { className: v().footer }) }) }), []),
                    F = I.isLoading ? 20 : null != (r = null == (t = I.albums) ? void 0 : t.length) ? r : 0;
                return (
                    s && I.isNeededToLoad && (L === O.x.EDITORIAL ? (0, i.use)(I.getEditorialAlbums({ id: s })) : (0, i.use)(I.getCategoryAlbums({ id: s }))),
                    (0, l.jsx)(h.n, {
                        pageId: m._Q.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(_.h, {
                            scrollElement: M,
                            outerTitle: I.title,
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
                                            children: I.title,
                                        }),
                                    }),
                                    (0, l.jsx)(S.$, {
                                        className: (0, o.$)(v().scrollContainer, v().important),
                                        customComponents: j,
                                        itemContentCallback: (e) => {
                                            var t, r;
                                            let o = null == (r = I.albums) || null == (t = r[e]) ? void 0 : t.data,
                                                s = y({ id: 'loading-messages.entity-is-loading' }, { entityName: y({ id: 'entity-names.album' }) });
                                            return o
                                                ? (0, l.jsx)(u.a, { withLikesCount: !0, album: o, contentLinesCount: 3 }, o.id)
                                                : (0, l.jsx)(A.V, { 'aria-label': s }, e);
                                        },
                                        totalCount: F,
                                        onGetDataByRange: w,
                                        totalRequests: I.requestsCount,
                                        listClassName: v().content,
                                        itemClassName: v().item,
                                        handleRef: P,
                                        context: { listAriaLabel: y({ id: 'mixes.albums-list' }, { genreName: I.title || '' }) },
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
        54667: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, u: () => o });
            var l = (function (e) {
                    return (e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e;
                })({}),
                o = (function (e) {
                    return (e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e;
                })({});
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => n });
            var l = r(29222),
                o = r(55178);
            let s = (0, o.createContext)(null);
            function n() {
                let e = (0, o.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => R });
            var l = r(32290),
                o = r(63618),
                s = r(96103),
                n = r(60900),
                i = r(39407),
                a = r(21732),
                c = r(71926),
                d = r(14858),
                u = r(8626),
                _ = r(31010),
                m = r(61945),
                h = r(57594),
                x = (function (e) {
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
            let g = (e, t, r) => {
                switch (e) {
                    case x.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case x.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                    case x.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                    case x.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                    case x.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case x.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                    case x.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                }
            };
            var p = r(61258),
                E = r(77088),
                N = r.n(E);
            let C = (0, s.PA)((e) => {
                    let { className: t } = e,
                        { location: r } = (0, h.g)(),
                        { formatDate: s } = (0, n.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(N().copyrights, t),
                        'data-test-id': a.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: N().text,
                                children: [
                                    '\xa9 ',
                                    s(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, l.jsx)(p.N, {
                                        target: '_blank',
                                        href: g(x.YANDEX, r.tld, d),
                                        className: (0, o.$)(N().copyrightLink, N().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(i.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(p.N, {
                                target: '_blank',
                                href: g(x.YANDEX_PROJECTS, r.tld, d),
                                className: N().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(i.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                R = (0, s.PA)((e) => {
                    var t;
                    let { className: r } = e,
                        { user: s, location: n } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: E } = (0, m.h)(),
                        R = (0, d.w)(!0),
                        f = ((e) => {
                            let { platform: t, tld: r, language: o, userRegion: s } = e,
                                n = { title: (0, l.jsx)(i.A, { id: 'footer.links-copyright-holders' }), url: g(x.COPYRIGHT_HOLDER, r, o) },
                                a = { title: (0, l.jsx)(i.A, { id: 'footer.links-privacy-policy' }), url: g(x.PRIVACY_POLICY, r, o) },
                                c = { title: (0, l.jsx)(i.A, { id: 'footer.links-terms' }), url: g(x.AGREEMENT, r, o) },
                                d = { title: (0, l.jsx)(i.A, { id: 'footer.links-recommendation-rules' }), url: g(x.RECOMMENDATION_RULES, r, o) },
                                u = { title: (0, l.jsx)(i.A, { id: 'footer.links-help' }), url: g(x.HELP, r, o) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === s && e.push(a), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: E, userRegion: s.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, o.$)(N().root, N().important, { [N().root_withOffsetForDeeplink]: u }, r),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: N().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: N().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: f.map((e) => {
                                            let { title: t, url: r } = e;
                                            return (0, l.jsx)(
                                                'li',
                                                {
                                                    className: N().item,
                                                    children: (0, l.jsx)(p.N, {
                                                        target: '_blank',
                                                        href: r,
                                                        className: N().link,
                                                        'data-test-id': a.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                r,
                                            );
                                        }),
                                    }),
                                    (0, l.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: N().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: R },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(C, {}),
                        ],
                    });
                });
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
        85696: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => i });
            var l = r(32290),
                o = r(21916),
                s = r(7443),
                n = r(51819);
            let i = () => {
                let e = (0, o.useSearchParams)().get('id');
                return e || (0, o.notFound)(), (0, l.jsx)(n.g, { id: e, variant: s.x.CATEGORY });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 7231, 5718, 7972, 6347, 3183, 9763, 6639, 7258, 3778, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586, 8347,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 42120)),
        ),
            (_N_E = e.O());
    },
]);
