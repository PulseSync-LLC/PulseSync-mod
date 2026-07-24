(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
    {
        8626: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        11262: (e, t, o) => {
            'use strict';
            o.d(t, { X: () => d });
            var l = o(32290),
                i = o(55178),
                n = o(91027),
                s = o(71730),
                r = o(45477),
                a = o(75582),
                c = o(49399);
            let d = (e, t) => {
                let { notify: o, dismiss: d } = (0, a.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, n.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = o((0, l.jsx)(s.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, o, e.rejectedPagesCount]);
            };
        },
        14858: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => s });
            var l = o(60900),
                i = o(57594),
                n = o(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, l.A)(),
                    { user: o, experiments: s } = (0, i.g)(),
                    r = 'ru' === o.account.data.userSessionRegionIso && s.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
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
            o.d(t, { H: () => i, P: () => n });
            var l = o(55178);
            let i = (0, l.createContext)(null),
                n = () => (0, l.useContext)(i);
        },
        32468: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => s });
            var l = o(32290),
                i = o(77088),
                n = o.n(i);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: n().empty });
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
                n = o(8055),
                s = o(55178);
            let r = (e) => {
                    let { style: t, forwardRef: o, context: i, ...n } = e,
                        s = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        r = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': s, style: { ...t }, ref: o, ...n });
                },
                a = (0, s.forwardRef)((e, t) => (0, l.jsx)(r, { forwardRef: t, ...e }));
            var c = o(39684),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: n, withHeader: s, withForceScroll: r, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: o,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = o(62060),
                h = o(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: i,
                            debounceDurationInMs: n = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, _] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && _(e), t && o)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < l; e++) o(e);
                                    }
                                }, n),
                            [n, i, t, o, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && u && g(u);
                    }, a);
                    let p = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
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
                            totalRequests: E,
                            debounceDurationInMs: N,
                            initialItemCount: S,
                            minInitialItemCount: k = 20,
                            handleRef: y,
                            alwaysShowScrollbar: v = !1,
                            testId: R,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...C
                        } = e,
                        [j, b] = (0, s.useState)(!1),
                        O = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    b(e);
                                }, 100),
                            [],
                        ),
                        I = (0, s.useMemo)(() => {
                            var e, t;
                            return A
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
                        }, [o, E, A]),
                        w = S ? Math.min(S, k) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: j || v, [d().root_notScrolling]: !j && !v }, t),
                        'data-test-id': R,
                        children: [
                            A && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, l.jsx)(g, {
                                overscan: p,
                                components: I,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: O,
                                itemContent: m,
                                scrollerRef: y,
                                totalCount: f,
                                pageSize: x,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: L,
                                ...C,
                            }),
                            A && (null == o ? void 0 : o.Footer) && o.Footer(),
                        ],
                    });
                };
        },
        57594: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => n, g: () => s });
            var l = o(29222),
                i = o(55178);
            let n = (0, i.createContext)(null);
            function s() {
                let e = (0, i.useContext)(n);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => S });
            var l = o(32290),
                i = o(63618),
                n = o(96103),
                s = o(60900),
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
                E = o.n(f);
            let N = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: o } = (0, h.g)(),
                        { formatDate: n } = (0, s.A)(),
                        { language: d } = (0, m.h)();
                    return (0, l.jsxs)('div', {
                        className: (0, i.$)(E().copyrights, t),
                        'data-test-id': a.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, l.jsx)(x.N, {
                                        target: '_blank',
                                        href: p(g.YANDEX, o.tld, d),
                                        className: (0, i.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': a.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, l.jsx)(r.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(x.N, {
                                target: '_blank',
                                href: p(g.YANDEX_PROJECTS, o.tld, d),
                                className: E().copyrightLink,
                                'data-test-id': a.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, l.jsx)(r.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                S = (0, n.PA)((e) => {
                    var t;
                    let { className: o } = e,
                        { user: n, location: s } = (0, h.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: f } = (0, m.h)(),
                        S = (0, d.w)(!0),
                        k = ((e) => {
                            let { platform: t, tld: o, language: i, userRegion: n } = e,
                                s = { title: (0, l.jsx)(r.A, { id: 'footer.links-copyright-holders' }), url: p(g.COPYRIGHT_HOLDER, o, i) },
                                a = { title: (0, l.jsx)(r.A, { id: 'footer.links-privacy-policy' }), url: p(g.PRIVACY_POLICY, o, i) },
                                c = { title: (0, l.jsx)(r.A, { id: 'footer.links-terms' }), url: p(g.AGREEMENT, o, i) },
                                d = { title: (0, l.jsx)(r.A, { id: 'footer.links-recommendation-rules' }), url: p(g.RECOMMENDATION_RULES, o, i) },
                                u = { title: (0, l.jsx)(r.A, { id: 'footer.links-help' }), url: p(g.HELP, o, i) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === n && e.push(a), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: f, userRegion: n.account.data.userSessionRegionIso });
                    return (0, l.jsxs)('footer', {
                        className: (0, i.$)(E().root, E().important, { [E().root_withOffsetForDeeplink]: u }, o),
                        'data-test-id': a.S7.FOOTER,
                        children: [
                            (0, l.jsxs)('div', {
                                className: E().links,
                                children: [
                                    (0, l.jsx)('ol', {
                                        className: E().list,
                                        'data-test-id': a.S7.FOOTER_LINKS_LIST,
                                        children: k.map((e) => {
                                            let { title: t, url: o } = e;
                                            return (0, l.jsx)(
                                                'li',
                                                {
                                                    className: E().item,
                                                    children: (0, l.jsx)(x.N, {
                                                        target: '_blank',
                                                        href: o,
                                                        className: E().link,
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
                                        className: E().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: S },
                                        'data-test-id': a.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(N, {}),
                        ],
                    });
                });
        },
        59411: (e, t, o) => {
            'use strict';
            o.r(t), o.d(t, { default: () => O });
            var l = o(32290),
                i = o(21916),
                n = o(63618),
                s = o(96103),
                r = o(55178),
                a = o(60900),
                c = o(21732),
                d = o(91027),
                u = o(6752),
                _ = o(71926),
                m = o(64170),
                h = o(24170),
                g = o(7999),
                p = o(48922),
                x = o(22714),
                f = o(83808),
                E = o(83920),
                N = o(3796),
                S = o(57594),
                k = o(11262),
                y = o(58054),
                v = o(32468),
                R = o(74694),
                A = o(89020),
                L = o(45257),
                C = o(72461),
                j = o.n(C);
            let b = (0, s.PA)((e) => {
                    var t, o, s, C;
                    let { id: b } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: O },
                            settings: { isMobile: I },
                        } = (0, S.g)(),
                        w = (0, f.W)(),
                        { contentScrollRef: P, setContentScrollRef: T } = (0, E.g)(),
                        { formatMessage: F } = (0, a.A)(),
                        W = (0, d.c)((e) => {
                            O.getAlbums({ page: e, pageSize: 20 });
                        });
                    O.isNotFound && (0, i.notFound)(),
                        (0, r.useEffect)(
                            () => () => {
                                O.reset();
                            },
                            [O],
                        );
                    let D = (0, u.L)(() => ({ Footer: () => (0, l.jsx)(v.A, { children: (0, l.jsx)(y.w, { className: j().footer }) }) }));
                    if (
                        ((0, N.J)(O.isResolved),
                        (0, k.X)(O.pagesLoader, W),
                        O.isNeededToLoad && (0, r.use)(O.getData({ id: b, page: 0, pageSize: 20 })),
                        O.isSomethingWrong)
                    )
                        return (0, l.jsx)(m.SomethingWentWrong, {});
                    let M = O.isLoading ? 20 : null != (s = null == (o = O.pagesLoader) || null == (t = o.pager) ? void 0 : t.total) ? s : 0;
                    return (0, l.jsx)(x.n, {
                        pageId: p._Q.KIDS_EDITORIAL_ALBUMS,
                        children: (0, l.jsx)(g.h, {
                            scrollElement: P,
                            outerTitle: O.title,
                            children: (0, l.jsxs)('div', {
                                className: j().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, l.jsx)(R.Y, {
                                        variant: R.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: w.canBack,
                                        children: (0, l.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: O.title }),
                                    }),
                                    (0, l.jsx)(L.$, {
                                        context: { listAriaLabel: F({ id: 'mixes.albums-list' }, { genreName: O.title || '' }) },
                                        className: (0, n.$)(j().scrollContainer, j().important),
                                        customComponents: D,
                                        itemContentCallback: (e) => {
                                            let t = O.albums[e],
                                                o = F({ id: 'loading-messages.entity-is-loading' }, { entityName: F({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, l.jsx)(h.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, l.jsx)(A.V, { isActive: !0, 'aria-label': o });
                                        },
                                        totalCount: M,
                                        onGetDataByPage: W,
                                        pageSize: 20,
                                        totalRequests: null != (C = O.pagesLoader.requestsCount) ? C : 0,
                                        listClassName: j().content,
                                        itemClassName: j().item,
                                        handleRef: T,
                                        isMobileLayout: I,
                                        useWindowScroll: I,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                O = () => {
                    let e = (0, i.useSearchParams)().get('id');
                    return e || (0, i.notFound)(), (0, l.jsx)(b, { id: e });
                };
        },
        60202: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 59411));
        },
        64170: (e, t, o) => {
            'use strict';
            o.d(t, { SomethingWentWrong: () => S });
            var l = o(32290),
                i = o(63618),
                n = o(96103),
                s = o(55178),
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
                E = o(30310),
                N = o.n(E);
            let S = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: o = !0 } = e,
                    { formatMessage: n } = (0, r.A)(),
                    E = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: o } = (0, m.gf)(),
                        { pageId: l } = (0, g.$)(),
                        i = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !o || !l) return;
                        let n = (0, _.Fx)({
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
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, o, l, i]);
                })(E);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: o } = (0, g.$)(),
                            l = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
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
                    k = (0, s.useCallback)(() => {
                        S(), (window.location.href = x.Z.main.href);
                    }, [S]),
                    { contentRef: y } = (0, p.g)();
                return (0, l.jsxs)('div', {
                    className: (0, i.$)(N().root, t),
                    children: [
                        o &&
                            (0, l.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(N().navigation, { [N().navigation_desktop]: !y }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, i.$)(N().content, { [N().content_shrink]: !o }),
                            children: [
                                (0, l.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(u.DZ, { className: (0, i.$)(N().title, N().important), variant: 'h3', size: 'xs', children: E }),
                                (0, l.jsxs)(u.HL, {
                                    className: (0, i.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: k,
                                    className: N().button,
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
                n = o(55178),
                s = o(60900),
                r = o(39407),
                a = o(63423),
                c = o(82586),
                d = o(71926),
                u = o(58534),
                _ = o(70718),
                m = o.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: o } = e,
                    _ = (0, n.useRef)(null),
                    { formatMessage: h } = (0, s.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let g = (0, n.useMemo)(
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
        72461: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
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
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 7258, 7426, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 6477, 7275, 2586, 8347,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 60202)),
        ),
            (_N_E = e.O());
    },
]);
