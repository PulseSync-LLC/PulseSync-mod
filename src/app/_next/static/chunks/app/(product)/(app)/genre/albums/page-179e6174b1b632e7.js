(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
        1698: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            var l = r(88800),
                a = r(37770);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: i,
                    centered: s,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, l.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: r, round: i, centered: s, withInfo: o, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var l = r(88800),
                a = r(65724),
                i = r(53548),
                s = r(2058),
                o = r(88969),
                n = r(96817),
                c = r(52300),
                d = r(29504),
                u = r(59304),
                m = r(4044),
                _ = r.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, i.useRef)(null),
                    { formatMessage: p } = (0, s.A)();
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
                                    children: (0, l.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
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
        25354: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => o, I7: () => n, K$: () => s, cM: () => d, fZ: () => a, tA: () => i, vX: () => l, xi: () => c });
            let l = 16,
                a = 16,
                i = 315,
                s = 170,
                o = 270,
                n = 7,
                c = 30,
                d = 30;
        },
        29201: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var l = r(35396);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, l.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        35396: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { C: () => i }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(l || (l = {})));
            let a = new Set(Object.values(l)),
                i = (e) => 'string' == typeof e && a.has(e);
        },
        54320: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var l = r(88800),
                a = r(53548),
                i = r(29993),
                s = r(9492),
                o = r(29595),
                n = r(74965),
                c = r(74773);
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, l.jsx)(s.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        55761: (e) => {
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
        59918: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var l = r(27169),
                a = r(29201);
            let i = (e) => {
                var t, r, i, s, o;
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
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
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
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var l = r(88800);
            r(30282);
            var a = r(11006),
                i = r.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        62154: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 96994));
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var l = r(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        70278: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => a });
            var l = r(59918);
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
                let r = (null == (t = e.artists) ? void 0 : t.map(l.N)) || [];
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
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var l = r(88800),
                a = r(65724),
                i = r(61013),
                s = r(53548);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: a, ...i } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        o = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: r, ...i });
                },
                n = (0, s.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: s, withForceScroll: o, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(55482),
                p = r(75151);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: i = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, g] = (0, s.useState)(null),
                        v = (0, s.useMemo)(
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
                    (0, s.useEffect)(() => {
                        n.length > 0 && m && v(m);
                    }, n);
                    let h = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: o, endReached: h, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: h = 20,
                            totalCount: x,
                            totalRequests: N,
                            debounceDurationInMs: f,
                            initialItemCount: E,
                            minInitialItemCount: C = 20,
                            handleRef: R,
                            alwaysShowScrollbar: A = !1,
                            testId: b,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...P
                        } = e,
                        [k, S] = (0, s.useState)(!1),
                        T = (0, s.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        O = (0, s.useMemo)(() => {
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
                        }, [r, N, y]),
                        L = E ? Math.min(E, C) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: k || A, [d().root_notScrolling]: !k && !A }, t),
                        'data-test-id': b,
                        children: [
                            y && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: v,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: R,
                                totalCount: x,
                                pageSize: h,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...P,
                            }),
                            y && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => b });
            var l = r(88800),
                a = r(65724),
                i = r(84961),
                s = r(2058),
                o = r(30282),
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
                    let { formatMessage: t, language: r, tld: l, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, r) },
                    };
                };
            var m = r(62293),
                _ = r(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var g = r(51611),
                v = r(72288),
                h = r(11006),
                x = r.n(h),
                N = r(17392),
                f = r(29504),
                E = r(91292);
            let C = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(x().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(f.HL, {
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
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
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
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, l.jsx)(E.N, { target: '_blank', href: a, className: x().link, 'data-test-id': N.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': N.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, a.$)(x().root, x().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, l.jsx)(R, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(C, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, v.g)(),
                    { formatDate: a, formatMessage: i } = (0, s.A)(),
                    { language: o } = (0, g.h)(),
                    n = u({ formatMessage: i, language: o, tld: r.tld, year: p(a) });
                return (0, l.jsx)(C, { className: t, data: n });
            });
            let b = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: _, user: h } = (0, v.g)(),
                    { formatDate: N, formatMessage: f } = (0, s.A)(),
                    { isEnabled: E } = null != (t = (0, n.P)()) ? t : {},
                    { language: C } = (0, g.h)(),
                    R = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: a, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, a) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, l, a) },
                                    _ = [s, n, u];
                                return (r && 'ru' === i && _.push(o), _.push(m), _);
                            })({ formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: r, language: a, tld: i, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: p(N),
                    });
                return (0, l.jsx)(A, { className: (0, a.$)({ [x().root_withOffsetForDeeplink]: E }, r), data: R });
            });
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => i });
            var l = r(53548);
            let a = (0, l.createContext)(null),
                i = () => (0, l.useContext)(a);
        },
        96994: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => $ }));
            var l = r(88800),
                a = r(53548),
                i = r(58390),
                s = r(65724),
                o = r(84961),
                n = r(2058),
                c = r(87999),
                d = r(76903),
                u = r(17392),
                m = r(29504),
                _ = r(32596),
                p = r(10079),
                g = r(69630),
                v = r(98427),
                h = r(46422),
                x = r(44230),
                N = r(37670),
                f = r(34961),
                E = r(53892),
                C = r(72288),
                R = r(54320),
                A = r(86790),
                b = r(60266),
                y = r(93317),
                I = r(37770),
                P = r(79418),
                k = r(25354),
                S = r(30144),
                T = r(324),
                O = r(46511),
                L = r(13012),
                j = r(57297),
                F = r(2218),
                w = r(77863),
                M = r(45383),
                D = r(40883);
            async function H(e, t) {
                let { locale: r, fullUrl: l, url: a, tld: i, host: s } = t,
                    o = await (0, O.W)(r),
                    n = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = (0, D.f)({ genreTitle: n, messageFormatter: o }),
                    u = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(s)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, j.i)({
                        ogTitle: (0, L.N)(n),
                        ogDescription: d,
                        fullUrl: null != l ? l : '',
                        locale: r,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, F.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, T.X)({
                        additional: { tld: i, url: null != a ? a : '', fullUrl: null != l ? l : '', host: s },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, M.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var Y = r(70278),
                G = r(55761),
                X = r.n(G);
            let U = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { albumsSubpage: o } = (0, f.s)(E.n.GENRE),
                    {
                        settings: { isMobile: T },
                    } = (0, C.g)(),
                    { formatMessage: O } = (0, n.A)(),
                    { contentScrollRef: L, setContentScrollRef: j } = (0, x.g)(),
                    F = (0, h.W)(),
                    w = (0, a.useCallback)(
                        (e) => {
                            t && o.getData({ metatagId: t, page: e, pageSize: k.cM });
                        },
                        [o, t],
                    );
                ((0, R.X)(o.pagesLoader, w),
                    (0, a.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                    o.isNotFound && (0, i.notFound)(),
                    (0, N.J)(o.isResolved),
                    ((e) => {
                        let { fullscreenVideoPlayer: t } = (0, C.g)(),
                            r = null == e ? void 0 : e.fullTitle,
                            l = null == e ? void 0 : e.isResolved,
                            i = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                            s = (0, a.useCallback)(
                                (t) =>
                                    i
                                        ? {}
                                        : e && l && r
                                          ? H(
                                                ((e) => {
                                                    var t, r, l;
                                                    return {
                                                        id: '',
                                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                                        albums: e.items.map(Y.f),
                                                        pager: {
                                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                            perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                                            total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                                        },
                                                    };
                                                })(e),
                                                t,
                                            )
                                          : void 0,
                                [e, r, l, i],
                            );
                        (0, S.C)(t.modal.isOpened ? null : s);
                    })(o));
                let M = (0, a.useMemo)(() => ({ Footer: () => (0, l.jsx)(b.A, { children: (0, l.jsx)(A.w, { className: X().footer }) }) }), []);
                if ((t && o.isNeededToLoad && (0, a.use)(o.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: k.cM })), o.isSomethingWrong))
                    return (0, l.jsx)(_.SomethingWentWrong, {});
                let D = o.isShimmerVisible ? 20 : o.totalCount;
                return (0, l.jsx)(d.a, {
                    pageId: c.AppScreen.GenreAlbums,
                    pageIdForFrom: v.b.GENRE_ALBUMS,
                    children: (0, l.jsx)(g.h, {
                        scrollElement: L,
                        outerTitle: o.fullTitle,
                        children: (0, l.jsxs)('div', {
                            className: X().root,
                            'data-test-id': u.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, l.jsx)(y.Y, {
                                    variant: y.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: F.canBack,
                                    children: (0, l.jsx)(m.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                }),
                                (0, l.jsx)(P.$, {
                                    className: (0, s.$)(X().scrollContainer, X().important),
                                    customComponents: M,
                                    itemContentCallback: (e) => {
                                        let t = o.items[e],
                                            r = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.album' }) });
                                        return t ? (0, l.jsx)(p.a, { album: t, contentLinesCount: 4 }, t.id) : (0, l.jsx)(I.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: D,
                                    initialItemCount: D,
                                    onGetDataByPage: w,
                                    pageSize: k.cM,
                                    totalRequests: o.requestsCount,
                                    listClassName: X().content,
                                    itemClassName: X().item,
                                    handleRef: j,
                                    context: { listAriaLabel: O({ id: 'mixes.albums-list' }, { genreName: o.fullTitle || '' }) },
                                    isMobileLayout: T,
                                    useWindowScroll: T,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var V = r(19994),
                z = r(1698);
            let B = () => {
                    let e = (0, h.W)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, l.jsx)(g.h, {
                        scrollElement: null,
                        children: (0, l.jsxs)('div', {
                            className: X().root,
                            children: [
                                (0, l.jsx)(y.Y, {
                                    variant: y.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, l.jsx)(V.W, { className: X().shimmerTitle, radius: 'l' }),
                                }),
                                (0, l.jsx)('div', {
                                    className: (0, s.$)(X().scrollContainer, X().important, X().shimmerScrollContainer),
                                    children: (0, l.jsx)('div', {
                                        className: X().content,
                                        children: (0, l.jsx)(z.e, { isActive: !0, itemClassName: X().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                $ = () => {
                    let e = (0, i.useSearchParams)().get('metatagId');
                    return (e || (0, i.notFound)(), (0, l.jsx)(a.Suspense, { fallback: (0, l.jsx)(B, {}), children: (0, l.jsx)(U, { metatagId: e }) }));
                };
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
                4700, 7908, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 1568, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 3707, 4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 62154)),
        ),
            (_N_E = e.O()));
    },
]);
