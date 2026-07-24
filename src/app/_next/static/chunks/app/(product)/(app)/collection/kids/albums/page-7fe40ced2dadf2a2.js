(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4602],
    {
        3377: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => g });
            var l = o(32290),
                i = o(96103),
                s = o(21916),
                n = o(63618),
                r = o(39407),
                a = o(71926),
                c = o(94218),
                d = o(55556),
                u = o.n(d);
            let _ = (0, i.PA)(() =>
                (0, l.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, l.jsx)(a.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, l.jsx)(a.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, l.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, l.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = o(20472),
                h = o(57594);
            let g = (0, i.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: i } = (0, h.g)();
                return i.isAuthorized ? t : (o && (0, s.redirect)(m.Z.main.href), (0, l.jsx)(_, {}));
            });
        },
        8626: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        10654: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 3377)), Promise.resolve().then(o.bind(o, 62302));
        },
        11262: (e, t, o) => {
            'use strict';
            o.d(t, { X: () => d });
            var l = o(32290),
                i = o(55178),
                s = o(91027),
                n = o(71730),
                r = o(45477),
                a = o(75582),
                c = o(49399);
            let d = (e, t) => {
                let { notify: o, dismiss: d } = (0, a.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, s.c)(() => {
                        var o;
                        d({ notificationId: u.current }), (u.current = 0);
                        let l = [...(null != (o = e.lastRejectedPagesList) ? o : [])].reverse().filter((t) => {
                            var o;
                            return (null == (o = e.pageStates) ? void 0 : o[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            });
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = o((0, l.jsx)(n.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, o, e.rejectedPagesCount]);
            };
        },
        14858: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => n });
            var l = o(60900),
                i = o(57594),
                s = o(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: o, experiments: n } = (0, i.g)(),
                    r = 'ru' === o.account.data.userSessionRegionIso && n.checkExperiment(s.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return r ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        20472: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => i });
            var l = o(36477);
            let i = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        26362: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        30294: (e, t, o) => {
            'use strict';
            o.d(t, { c: () => l });
            let l = 20;
        },
        30310: (e) => {
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
        31010: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => i, P: () => s });
            var l = o(55178);
            let i = (0, l.createContext)(null),
                s = () => (0, l.useContext)(i);
        },
        32468: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => n });
            var l = o(32290),
                i = o(77088),
                s = o.n(i);
            let n = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: s().empty });
            };
        },
        33960: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
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
        45257: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => p });
            var l = o(32290),
                i = o(63618),
                s = o(8055),
                n = o(55178);
            let r = (e) => {
                    let { style: t, forwardRef: o, context: i, ...s } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        r = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': n, style: { ...t }, ref: o, ...s });
                },
                a = (0, n.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var c = o(39684),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: s, withHeader: n, withForceScroll: r, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: o,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = o(62060),
                h = o(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: i,
                            debounceDurationInMs: s = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && _(e), t && o)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < l; e++) o(e);
                                    }
                                }, s),
                            [s, i, t, o, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && u && g(u);
                    }, a);
                    let p = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, l.jsx)(h.sN, { rangeChanged: g, totalCount: r, endReached: p, ...d });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: o,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: f,
                            totalRequests: N,
                            debounceDurationInMs: k,
                            initialItemCount: y,
                            minInitialItemCount: C = 20,
                            handleRef: v,
                            alwaysShowScrollbar: S = !1,
                            testId: j,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...b
                        } = e,
                        [R, L] = (0, n.useState)(!1),
                        P = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        w = (0, n.useMemo)(() => {
                            var e, t;
                            return E
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == o ? void 0 : o.List) ? e : a,
                                      Item: null == o ? void 0 : o.Item,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == o ? void 0 : o.List) ? t : a,
                                      Item: null == o ? void 0 : o.Item,
                                      Header: null == o ? void 0 : o.Header,
                                      Footer: null == o ? void 0 : o.Footer,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  };
                        }, [o, N, E]),
                        O = y ? Math.min(y, C) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': j,
                        children: [
                            E && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, l.jsx)(g, {
                                overscan: p,
                                components: w,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: P,
                                itemContent: m,
                                scrollerRef: v,
                                totalCount: f,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: A,
                                ...b,
                            }),
                            E && (null == o ? void 0 : o.Footer) && o.Footer(),
                        ],
                    });
                };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        58054: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => y });
            var l = o(32290),
                i = o(63618),
                s = o(96103),
                n = o(60900),
                r = o(39407),
                a = o(21732),
                c = o(71926),
                d = o(14858),
                u = o(8626),
                _ = o(31010),
                m = o(61945),
                h = o(57594),
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
            let p = (e, t, o) => {
                switch (e) {
                    case g.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case g.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(o);
                    case g.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(o);
                    case g.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(o);
                    case g.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case g.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(o);
                    case g.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(o);
                }
            };
            var x = o(61258),
                f = o(77088),
                N = o.n(f);
            let k = (0, s.PA)((e) => {
                    let { className: t } = e,
                        { location: o } = (0, h.g)(),
                        { formatDate: s } = (0, n.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(N().copyrights, t),
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
                                    (0, l.jsx)(x.N, {
                                        target: '_blank',
                                        href: p(g.YANDEX, o.tld, d),
                                        className: (0, i.$)(N().copyrightLink, N().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(r.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(x.N, {
                                target: '_blank',
                                href: p(g.YANDEX_PROJECTS, o.tld, d),
                                className: N().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(r.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                y = (0, s.PA)((e) => {
                    var t;
                    let { className: o } = e,
                        { user: s, location: n } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: f } = (0, m.h)(),
                        y = (0, d.w)(!0),
                        C = ((e) => {
                            let { platform: t, tld: o, language: i, userRegion: s } = e,
                                n = { title: (0, l.jsx)(r.A, { id: 'footer.links-copyright-holders' }), url: p(g.COPYRIGHT_HOLDER, o, i) },
                                a = { title: (0, l.jsx)(r.A, { id: 'footer.links-privacy-policy' }), url: p(g.PRIVACY_POLICY, o, i) },
                                c = { title: (0, l.jsx)(r.A, { id: 'footer.links-terms' }), url: p(g.AGREEMENT, o, i) },
                                d = { title: (0, l.jsx)(r.A, { id: 'footer.links-recommendation-rules' }), url: p(g.RECOMMENDATION_RULES, o, i) },
                                u = { title: (0, l.jsx)(r.A, { id: 'footer.links-help' }), url: p(g.HELP, o, i) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === s && e.push(a), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: f, userRegion: s.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, i.$)(N().root, N().important, { [N().root_withOffsetForDeeplink]: u }, o),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: N().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: N().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: C.map((e) => {
                                            let { title: t, url: o } = e;
                                            return (0, l.jsx)(
                                                'li',
                                                {
                                                    className: N().item,
                                                    children: (0, l.jsx)(x.N, {
                                                        target: '_blank',
                                                        href: o,
                                                        className: N().link,
                                                        'data-test-id': a.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                o,
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
                                        dangerouslySetInnerHTML: { __html: y },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(k, {}),
                        ],
                    });
                });
        },
        61500: (e, t, o) => {
            'use strict';
            o.d(t, { i: () => y });
            var l = o(32290),
                i = o(96103),
                s = o(39407),
                n = o(63423),
                r = o(82586),
                a = o(46049),
                c = o(71926),
                d = o(7999),
                u = o(83808),
                _ = o(83920),
                m = o(20472),
                h = o(84062),
                g = o(57594),
                p = o(58054),
                x = o(32468),
                f = o(74694),
                N = o(33960),
                k = o.n(N);
            let y = (0, i.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: o },
                    } = (0, g.g)(),
                    { contentScrollRef: i, setContentScrollRef: N } = (0, _.g)(),
                    y = (0, u.W)(),
                    C = (0, h.Z)(m.Z.collectionKids.href);
                return (0, l.jsxs)(d.h, {
                    scrollElement: i,
                    outerTitle: t,
                    children: [
                        (0, l.jsx)(f.Y, {
                            variant: f.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: y.canBack,
                            children: (0, l.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: o ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, l.jsxs)(a.N, {
                            ref: N,
                            containerClassName: k().scrollableContainer,
                            className: k().root,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: k().content,
                                    children: [
                                        (0, l.jsx)('div', { className: k().icon, children: (0, l.jsx)(r.I, { variant: 'like', size: 'l' }) }),
                                        (0, l.jsx)(c.DZ, {
                                            className: k().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, l.jsx)(s.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, l.jsx)(n.$, {
                                            onClick: C,
                                            className: k().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, l.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, l.jsx)(s.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(x.A, { children: (0, l.jsx)(p.w, { className: k().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        62302: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionKidsAlbumsPage: () => L });
            var l = o(32290),
                i = o(63618),
                s = o(96103),
                n = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(21732),
                d = o(71926),
                u = o(64170),
                _ = o(24170),
                m = o(7999),
                h = o(48922),
                g = o(22714),
                p = o(83808),
                x = o(83920),
                f = o(3796),
                N = o(57594),
                k = o(11262),
                y = o(58054),
                C = o(32468),
                v = o(74694),
                S = o(89020),
                j = o(45257),
                E = o(30294),
                A = o(61500),
                b = o(26362),
                R = o.n(b);
            let L = (0, s.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, N.g)(),
                    { contentScrollRef: o, setContentScrollRef: s } = (0, x.g)(),
                    b = (0, p.W)(),
                    { formatMessage: L } = (0, r.A)(),
                    P = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: E.c });
                        },
                        [t],
                    );
                (0, k.X)(t.pagesLoader, P);
                let w = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(C.A, { children: (0, l.jsx)(y.w, { className: R().footer }) }) }), []),
                    O = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, f.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: E.c })),
                t.isRejected)
                    ? (0, l.jsx)(u.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, l.jsx)(A.i, { title: L({ id: 'kids.albums-and-podcasts' }) })
                      : (0, l.jsx)(g.n, {
                            pageId: h._Q.COLLECTION_KIDS_ALBUMS,
                            children: (0, l.jsx)(m.h, {
                                scrollElement: o,
                                outerTitle: L({ id: 'kids.albums-and-podcasts' }),
                                children: (0, l.jsxs)('div', {
                                    className: R().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, l.jsx)(v.Y, {
                                            variant: v.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: b.canBack,
                                            children: (0, l.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, l.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, l.jsx)(j.$, {
                                            className: (0, i.$)(R().scrollContainer, R().important),
                                            listClassName: R().content,
                                            itemClassName: R().item,
                                            customComponents: w,
                                            itemContentCallback: (e) => {
                                                let o = t.items[e],
                                                    i = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return o
                                                    ? (0, l.jsx)(_.a, { album: o, contentLinesCount: 4, withLikesCount: !0 }, o.id)
                                                    : (0, l.jsx)(S.V, { 'aria-label': i, linesCount: 4 });
                                            },
                                            initialItemCount: O,
                                            totalCount: O,
                                            onGetDataByPage: P,
                                            pageSize: E.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: s,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        64170: (e, t, o) => {
            'use strict';
            o.d(t, { SomethingWentWrong: () => y });
            var l = o(32290),
                i = o(63618),
                s = o(96103),
                n = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(63423),
                d = o(82586),
                u = o(71926),
                _ = o(16172),
                m = o(52068),
                h = o(62376),
                g = o(37240),
                p = o(83920),
                x = o(20472),
                f = o(12894),
                N = o(30310),
                k = o.n(N);
            let y = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: o = !0 } = e,
                    { formatMessage: s } = (0, r.A)(),
                    N = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: o } = (0, m.gf)(),
                        { pageId: l } = (0, g.$)(),
                        i = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !o || !l) return;
                        let s = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: o,
                                pageId: l,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, _.z5)(t.evgenInstance, s);
                    }, [t, e, o, l, i]);
                })(N);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: o } = (0, g.$)(),
                            l = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !o) return;
                                let i = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: o,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: l,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, _.bv)(e.evgenInstance, i);
                            }, [e, t, o, l]),
                        };
                    })(),
                    C = (0, n.useCallback)(() => {
                        y(), (window.location.href = x.Z.main.href);
                    }, [y]),
                    { contentRef: v } = (0, p.g)();
                return (0, l.jsxs)('div', {
                    className: (0, i.$)(k().root, t),
                    children: [
                        o &&
                            (0, l.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(k().navigation, { [k().navigation_desktop]: !v }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, i.$)(k().content, { [k().content_shrink]: !o }),
                            children: [
                                (0, l.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(u.DZ, { className: (0, i.$)(k().title, k().important), variant: 'h3', size: 'xs', children: N }),
                                (0, l.jsxs)(u.HL, {
                                    className: (0, i.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: C,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, l.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, l.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
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
        71730: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => h });
            var l = o(32290),
                i = o(63618),
                s = o(55178),
                n = o(60900),
                r = o(39407),
                a = o(63423),
                c = o(82586),
                d = o(71926),
                u = o(58534),
                _ = o(70718),
                m = o.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: o } = e,
                    _ = (0, s.useRef)(null),
                    { formatMessage: h } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let g = (0, s.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(r.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, l.jsx)(u.$, { className: (0, i.$)(m().root, m().important), message: g, closeToast: o });
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
        94218: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => _ });
            var l = o(32290),
                i = o(21916),
                s = o(39407),
                n = o(21732),
                r = o(91027),
                a = o(63423),
                c = o(71926),
                d = o(70204),
                u = o(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: o = 'default', withRipple: _ = !0, buttonText: m, isBlock: h, key: g, className: p } = e,
                    x = (0, i.useRouter)(),
                    f = (0, u.N)().get(d.QG),
                    N = (0, r.c)(() => {
                        f.authorizationUrl && x.push(f.authorizationUrl);
                    });
                return (0, l.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: p,
                        isBlock: h,
                        color: 'primary',
                        variant: o,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 3907, 7349, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586,
                8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 10654)),
        ),
            (_N_E = e.O());
    },
]);
