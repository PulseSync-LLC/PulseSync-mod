(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7079],
    {
        3377: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => p });
            var l = o(32290),
                n = o(96103),
                i = o(21916),
                s = o(63618),
                r = o(39407),
                a = o(71926),
                c = o(94218),
                d = o(55556),
                u = o.n(d);
            let _ = (0, n.PA)(() =>
                (0, l.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, l.jsx)(a.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, l.jsx)(a.HL, {
                            className: (0, s.$)(u().text, u().important),
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
            let p = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: n } = (0, h.g)();
                return n.isAuthorized ? t : (o && (0, i.redirect)(m.Z.main.href), (0, l.jsx)(_, {}));
            });
        },
        8626: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        14858: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => s });
            var l = o(60900),
                n = o(57594),
                i = o(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: o, experiments: s } = (0, n.g)(),
                    r = 'ru' === o.account.data.userSessionRegionIso && s.checkExperiment(i.z.WebNextFooterDisclaimer, 'on'),
                    a = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return r ? t({ id: 'footer.disclaimer-content' }) : a;
            };
        },
        15260: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicLikedPage: () => A });
            var l = o(32290),
                n = o(63618),
                i = o(96103),
                s = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(21732),
                d = o(71926),
                u = o(64170),
                _ = o(24170),
                m = o(7999),
                h = o(48922),
                p = o(22714),
                g = o(83808),
                x = o(83920),
                y = o(3796),
                N = o(57594),
                k = o(58054),
                C = o(32468),
                f = o(74694),
                S = o(89020),
                v = o(45257),
                E = o(32756),
                L = o(29316),
                j = o.n(L);
            let A = (0, i.PA)(() => {
                var e, t, o;
                let {
                        user: i,
                        collection: { nonMusicLiked: L },
                        settings: { isMobile: A },
                        library: R,
                    } = (0, N.g)(),
                    { formatMessage: O } = (0, r.A)(),
                    { contentScrollRef: I, setContentScrollRef: P } = (0, x.g)(),
                    w = (0, g.W)();
                (0, y.J)(L.isResolved);
                let T = (0, s.useCallback)(
                    (e) => {
                        i.account.data.uid && L.getData({ userId: i.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [L, i.account.data.uid],
                );
                if (L.isRejected) return (0, l.jsx)(u.SomethingWentWrong, {});
                (0, s.useEffect)(
                    () => () => {
                        L.reset();
                    },
                    [L],
                );
                let b = (0, s.useMemo)(() => ({ Footer: () => (0, l.jsx)(C.A, { children: (0, l.jsx)(k.w, { className: j().footer }) }) }), []);
                if (i.account.data.uid && L.isNeededToLoad) {
                    let e = [L.getData({ userId: i.account.data.uid, metaType: 'podcast', pageSize: 20 }), R.getData()];
                    (0, s.use)(Promise.allSettled(e));
                }
                return (0, l.jsx)(p.n, {
                    pageId: h._Q.OWN_PODCASTS,
                    children: (0, l.jsx)(m.h, {
                        scrollElement: I,
                        outerTitle: O({ id: 'page.delayed-non-music' }),
                        children: (0, l.jsxs)('div', {
                            className: j().root,
                            'data-test-id': c.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, l.jsx)(f.Y, {
                                    variant: f.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: (0, l.jsx)(d.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                L.isEmptyItems && !L.isRejected && (0, l.jsx)(E.M, { className: j().emptyBlock }),
                                (0, l.jsx)(v.$, {
                                    className: (0, n.$)(j().scrollContainer, j().important),
                                    listClassName: j().content,
                                    itemClassName: j().item,
                                    customComponents: b,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let o = null == (t = L.items) ? void 0 : t[e],
                                            n = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.podcast' }) });
                                        return o
                                            ? (0, l.jsx)(_.a, { album: o, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, o.id)
                                            : (0, l.jsx)(S.V, { 'aria-label': n });
                                    },
                                    totalCount: null != (t = null == (e = L.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: T,
                                    pageSize: 20,
                                    totalRequests: null != (o = L.requestsCount) ? o : 0,
                                    handleRef: P,
                                    context: { listAriaLabel: O({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: A,
                                    useWindowScroll: A,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        20472: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => n });
            var l = o(36477);
            let n = {
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
        29316: (e) => {
            e.exports = {
                root: 'CollectionNonMusicLikedPage_root__0e_hz',
                scrollContainer: 'CollectionNonMusicLikedPage_scrollContainer__OthtN',
                important: 'CollectionNonMusicLikedPage_important__MNJX3',
                footer: 'CollectionNonMusicLikedPage_footer__F_mtD',
                item: 'CollectionNonMusicLikedPage_item__Rb0yS',
                emptyBlock: 'CollectionNonMusicLikedPage_emptyBlock__WAdri',
                content: 'CollectionNonMusicLikedPage_content__9WDX5',
            };
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
            o.d(t, { H: () => n, P: () => i });
            var l = o(55178);
            let n = (0, l.createContext)(null),
                i = () => (0, l.useContext)(n);
        },
        32468: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => s });
            var l = o(32290),
                n = o(77088),
                i = o.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        32756: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => d });
            var l = o(32290),
                n = o(63618),
                i = o(39407),
                s = o(82586),
                r = o(71926),
                a = o(44642),
                c = o.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, l.jsxs)('div', {
                    className: (0, n.$)(c().emptyContent, t),
                    children: [
                        (0, l.jsx)(s.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, l.jsx)(r.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(i.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
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
        44642: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        45257: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => g });
            var l = o(32290),
                n = o(63618),
                i = o(8055),
                s = o(55178);
            let r = (e) => {
                    let { style: t, forwardRef: o, context: n, ...i } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        r = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': s, style: { ...t }, ref: o, ...i });
                },
                a = (0, s.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var c = o(39684),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: i, withHeader: s, withForceScroll: r, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, n.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: o,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = o(62060),
                h = o(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: n,
                            debounceDurationInMs: i = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, s.useState)(null),
                        p = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), a.length > 0 && _(e), t && o)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < l; e++) o(e);
                                    }
                                }, i),
                            [i, n, t, o, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && u && p(u);
                    }, a);
                    let g = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(h.sN, { rangeChanged: p, totalCount: r, endReached: g, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: o,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: N,
                            debounceDurationInMs: k,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: S,
                            alwaysShowScrollbar: v = !1,
                            testId: E,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...A
                        } = e,
                        [R, O] = (0, s.useState)(!1),
                        I = (0, s.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        P = (0, s.useMemo)(() => {
                            var e, t;
                            return L
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
                        }, [o, N, L]),
                        w = C ? Math.min(C, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, n.$)(d().root, { [d().root_scrolling]: R || v, [d().root_notScrolling]: !R && !v }, t),
                        'data-test-id': E,
                        children: [
                            L && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, l.jsx)(p, {
                                overscan: g,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: j,
                                ...A,
                            }),
                            L && (null == o ? void 0 : o.Footer) && o.Footer(),
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
        57594: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => i, g: () => s });
            var l = o(29222),
                n = o(55178);
            let i = (0, n.createContext)(null);
            function s() {
                let e = (0, n.useContext)(i);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => C });
            var l = o(32290),
                n = o(63618),
                i = o(96103),
                s = o(60900),
                r = o(39407),
                a = o(21732),
                c = o(71926),
                d = o(14858),
                u = o(8626),
                _ = o(31010),
                m = o(61945),
                h = o(57594),
                p = (function (e) {
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
            let g = (e, t, o) => {
                switch (e) {
                    case p.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case p.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(o);
                    case p.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(o);
                    case p.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(o);
                    case p.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case p.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(o);
                    case p.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(o);
                }
            };
            var x = o(61258),
                y = o(77088),
                N = o.n(y);
            let k = (0, i.PA)((e) => {
                    let { className: t } = e,
                        { location: o } = (0, h.g)(),
                        { formatDate: i } = (0, s.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, n.$)(N().copyrights, t),
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
                                    i(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, l.jsx)(x.N, {
                                        target: '_blank',
                                        href: g(p.YANDEX, o.tld, d),
                                        className: (0, n.$)(N().copyrightLink, N().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(r.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(x.N, {
                                target: '_blank',
                                href: g(p.YANDEX_PROJECTS, o.tld, d),
                                className: N().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(r.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                C = (0, i.PA)((e) => {
                    var t;
                    let { className: o } = e,
                        { user: i, location: s } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: y } = (0, m.h)(),
                        C = (0, d.w)(!0),
                        f = ((e) => {
                            let { platform: t, tld: o, language: n, userRegion: i } = e,
                                s = { title: (0, l.jsx)(r.A, { id: 'footer.links-copyright-holders' }), url: g(p.COPYRIGHT_HOLDER, o, n) },
                                a = { title: (0, l.jsx)(r.A, { id: 'footer.links-privacy-policy' }), url: g(p.PRIVACY_POLICY, o, n) },
                                c = { title: (0, l.jsx)(r.A, { id: 'footer.links-terms' }), url: g(p.AGREEMENT, o, n) },
                                d = { title: (0, l.jsx)(r.A, { id: 'footer.links-recommendation-rules' }), url: g(p.RECOMMENDATION_RULES, o, n) },
                                u = { title: (0, l.jsx)(r.A, { id: 'footer.links-help' }), url: g(p.HELP, o, n) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === i && e.push(a), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: y, userRegion: i.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, n.$)(N().root, N().important, { [N().root_withOffsetForDeeplink]: u }, o),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: N().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: N().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: f.map((e) => {
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
                                        dangerouslySetInnerHTML: { __html: C },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(k, {}),
                        ],
                    });
                });
        },
        64170: (e, t, o) => {
            'use strict';
            o.d(t, { SomethingWentWrong: () => C });
            var l = o(32290),
                n = o(63618),
                i = o(96103),
                s = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(63423),
                d = o(82586),
                u = o(71926),
                _ = o(16172),
                m = o(52068),
                h = o(62376),
                p = o(37240),
                g = o(83920),
                x = o(20472),
                y = o(12894),
                N = o(30310),
                k = o.n(N);
            let C = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: o = !0 } = e,
                    { formatMessage: i } = (0, r.A)(),
                    N = i({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: o } = (0, m.gf)(),
                        { pageId: l } = (0, p.$)(),
                        n = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !o || !l) return;
                        let i = (0, _.Fx)({
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
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, _.z5)(t.evgenInstance, i);
                    }, [t, e, o, l, n]);
                })(N);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: o } = (0, p.$)(),
                            l = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !o) return;
                                let n = (0, _.Fx)({
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
                                n && (0, _.bv)(e.evgenInstance, n);
                            }, [e, t, o, l]),
                        };
                    })(),
                    f = (0, s.useCallback)(() => {
                        C(), (window.location.href = x.Z.main.href);
                    }, [C]),
                    { contentRef: S } = (0, g.g)();
                return (0, l.jsxs)('div', {
                    className: (0, n.$)(k().root, t),
                    children: [
                        o &&
                            (0, l.jsx)(y.L, { withBackwardFallback: '/', className: (0, n.$)(k().navigation, { [k().navigation_desktop]: !S }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, n.$)(k().content, { [k().content_shrink]: !o }),
                            children: [
                                (0, l.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(u.DZ, { className: (0, n.$)(k().title, k().important), variant: 'h3', size: 'xs', children: N }),
                                (0, l.jsxs)(u.HL, {
                                    className: (0, n.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: f,
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
        66526: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 3377)), Promise.resolve().then(o.bind(o, 15260));
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
                n = o(21916),
                i = o(39407),
                s = o(21732),
                r = o(91027),
                a = o(63423),
                c = o(71926),
                d = o(70204),
                u = o(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: o = 'default', withRipple: _ = !0, buttonText: m, isBlock: h, key: p, className: g } = e,
                    x = (0, n.useRouter)(),
                    y = (0, u.N)().get(d.QG),
                    N = (0, r.c)(() => {
                        y.authorizationUrl && x.push(y.authorizationUrl);
                    });
                return (0, l.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: g,
                        isBlock: h,
                        color: 'primary',
                        variant: o,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    p,
                );
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 7679, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586, 8347,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 66526)),
        ),
            (_N_E = e.O());
    },
]);
