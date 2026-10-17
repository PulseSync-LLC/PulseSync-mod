(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4602],
    {
        148: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
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
        1466: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => h });
            var i = s(25839),
                o = s(82298),
                n = s(74631),
                l = s(39004),
                r = s(8487),
                a = s(4071),
                c = s(66738),
                d = s(4254),
                u = s(51790),
                _ = s(12558),
                m = s.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: s } = e,
                    _ = (0, n.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, n.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(r.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, i.jsx)(u.$, { className: (0, o.$)(m().root, m().important), message: p, closeToast: s });
            };
        },
        2328: (e) => {
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
        3731: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 30871)), Promise.resolve().then(s.bind(s, 23590)));
        },
        6968: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => x });
            var i = s(25839),
                o = s(82298),
                n = s(28631),
                l = s(74631);
            let r = (e) => {
                    let { style: t, forwardRef: s, context: o, ...n } = e,
                        l = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        r = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': l, style: { ...t }, ref: s, ...n });
                },
                a = (0, l.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
            var c = s(45300),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: n, withHeader: l, withForceScroll: r, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: s,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var m = s(10508),
                h = s(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: o,
                            debounceDurationInMs: n = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, l.useState)(null),
                        x = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && p(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < i; e++) s(e);
                                    }
                                }, n),
                            [n, o, t, s, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && _ && x(_);
                    }, a);
                    let g = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, i.jsx)(h.sN, { ref: d, rangeChanged: x, totalCount: r, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: E,
                            totalRequests: N,
                            debounceDurationInMs: y,
                            initialItemCount: v,
                            minInitialItemCount: C = 20,
                            handleRef: f,
                            alwaysShowScrollbar: b = !1,
                            testId: S,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...T
                        } = e,
                        [j, A] = (0, l.useState)(!1),
                        R = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : a,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : a,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, N, k]),
                        L = v ? Math.min(v, C) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: j || b, [d().root_notScrolling]: !j && !b }, t),
                        'data-test-id': S,
                        children: [
                            k && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(p, {
                                overscan: x,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: E,
                                pageSize: g,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: O,
                                ...T,
                            }),
                            k && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => o });
            var i = s(44806);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: o, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : o();
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
        15684: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => v });
            var i = s(25839),
                o = s(88204),
                n = s(8487),
                l = s(4071),
                r = s(66738),
                a = s(13833),
                c = s(4254),
                d = s(1407),
                u = s(21784),
                _ = s(89192),
                m = s(53712),
                h = s(85686),
                p = s(27954),
                x = s(99401),
                g = s(26076),
                E = s(10603),
                N = s(2328),
                y = s.n(N);
            let v = (0, o.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: s },
                    } = (0, p.g)(),
                    { contentScrollRef: o, setContentScrollRef: N } = (0, _.g)(),
                    v = (0, u.W)(),
                    C = (0, h.Z)(m.Z.collectionKids.href);
                return (0, i.jsxs)(d.h, {
                    scrollElement: o,
                    outerTitle: t,
                    children: [
                        (0, i.jsx)(E.Y, {
                            variant: E.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: v.canBack,
                            children: (0, i.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: s ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, i.jsxs)(a.N, {
                            ref: N,
                            containerClassName: y().scrollableContainer,
                            className: y().root,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: y().content,
                                    children: [
                                        (0, i.jsx)('div', { className: y().icon, children: (0, i.jsx)(r.I, { variant: 'like', size: 'l' }) }),
                                        (0, i.jsx)(c.DZ, {
                                            className: y().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, i.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, i.jsx)(l.$, {
                                            onClick: C,
                                            className: y().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, i.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, i.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(g.A, { children: (0, i.jsx)(x.w, { className: y().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        16978: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(25839),
                o = s(84059),
                n = s(8487),
                l = s(61493),
                r = s(71035),
                a = s(4071),
                c = s(4254),
                d = s(57024),
                u = s(36484),
                _ = s(62562);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: x, key: g, className: E } = e,
                    N = (0, o.useRouter)(),
                    y = (0, _.N)().get(u.QG),
                    v = (0, r.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(y.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: v,
                        className: E,
                        isBlock: x,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        23590: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionKidsAlbumsPage: () => A });
            var i = s(25839),
                o = s(82298),
                n = s(88204),
                l = s(74631),
                r = s(39004),
                a = s(8487),
                c = s(61493),
                d = s(4254),
                u = s(64715),
                _ = s(76939),
                m = s(1407),
                h = s(20258),
                p = s(10322),
                x = s(21784),
                g = s(89192),
                E = s(30716),
                N = s(27954),
                y = s(60678),
                v = s(99401),
                C = s(26076),
                f = s(10603),
                b = s(19412),
                S = s(6968),
                k = s(50222),
                O = s(15684),
                T = s(46730),
                j = s.n(T);
            let A = (0, n.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, N.g)(),
                    { contentScrollRef: s, setContentScrollRef: n } = (0, g.g)(),
                    T = (0, x.W)(),
                    { formatMessage: A } = (0, r.A)(),
                    R = (0, l.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: k.c });
                        },
                        [t],
                    );
                (0, y.X)(t.pagesLoader, R);
                let P = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(C.A, { children: (0, i.jsx)(v.w, { className: j().footer }) }) }), []),
                    L = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, l.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, E.J)(t.isResolved),
                t.isNeededToLoad && (0, l.use)(t.getData({ pageSize: k.c })),
                t.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, i.jsx)(O.i, { title: A({ id: 'kids.albums-and-podcasts' }) })
                      : (0, i.jsx)(p.n, {
                            pageId: h._Q.COLLECTION_KIDS_ALBUMS,
                            children: (0, i.jsx)(m.h, {
                                scrollElement: s,
                                outerTitle: A({ id: 'kids.albums-and-podcasts' }),
                                children: (0, i.jsxs)('div', {
                                    className: j().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, i.jsx)(f.Y, {
                                            variant: f.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: T.canBack,
                                            children: (0, i.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, i.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, i.jsx)(S.$, {
                                            className: (0, o.$)(j().scrollContainer, j().important),
                                            listClassName: j().content,
                                            itemClassName: j().item,
                                            customComponents: P,
                                            itemContentCallback: (e) => {
                                                let s = t.items[e],
                                                    o = A({ id: 'loading-messages.entity-is-loading' }, { entityName: A({ id: 'entity-names.album' }) });
                                                return s
                                                    ? (0, i.jsx)(_.a, { album: s, contentLinesCount: 4, withLikesCount: !0 }, s.id)
                                                    : (0, i.jsx)(b.V, { 'aria-label': o, linesCount: 4 });
                                            },
                                            initialItemCount: L,
                                            totalCount: L,
                                            onGetDataByPage: R,
                                            pageSize: k.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: n,
                                            context: { listAriaLabel: A({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        26076: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => l });
            var i = s(25839);
            s(93588);
            var o = s(400),
                n = s.n(o);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        27990: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        30871: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var i = s(25839),
                o = s(88204),
                n = s(84059),
                l = s(82298),
                r = s(8487),
                a = s(4254),
                c = s(16978),
                d = s(148),
                u = s.n(d);
            let _ = (0, o.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = s(53712),
                h = s(27954);
            let p = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: o } = (0, h.g)();
                return o.isAuthorized ? t : (s && (0, n.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        43354: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => o, P: () => n });
            var i = s(74631);
            let o = (0, i.createContext)(null),
                n = () => (0, i.useContext)(o);
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
        46730: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        50222: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => i });
            let i = 20;
        },
        53712: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => o });
            var i = s(25895);
            let o = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        57024: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => n, UC: () => l, dM: () => r, uV: () => a });
            var i = s(93690),
                o = s(58848);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof i.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        58848: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        60678: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => d });
            var i = s(25839),
                o = s(74631),
                n = s(71035),
                l = s(1466),
                r = s(91149),
                a = s(92942),
                c = s(36159);
            let d = (e, t) => {
                let { notify: s, dismiss: d } = (0, a.l)(),
                    u = (0, o.useRef)(void 0),
                    _ = (0, n.c)(() => {
                        var s;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (s = e.lastRejectedPagesList) ? s : [])].reverse().filter((t) => {
                            var s;
                            return (null == (s = e.pageStates) ? void 0 : s[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = s((0, i.jsx)(l.L, { reloadBlocks: _ }), { containerId: r.u.ERROR, autoClose: !1 }));
                }, [d, _, s, e.rejectedPagesCount]);
            };
        },
        64715: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => R });
            var i = s(25839),
                o = s(82298),
                n = s(88204),
                l = s(74631),
                r = s(39004),
                a = s(8487);
            s(93588);
            var c = s(4071),
                d = s(66738),
                u = s(4254),
                _ = s(67379),
                m = s(44031),
                h = s(87277),
                p = s(59450),
                x = s(84e3),
                g = s(97952),
                E = s(89192),
                N = s(53712),
                y = s(27954),
                v = s(44806),
                C = s(15270),
                f = s(23818),
                b = s(85686);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = s(27990),
                O = s.n(k);
            let T = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { slam: n } = (0, y.g)(),
                    { contentRef: l } = (0, E.g)(),
                    r = (0, b.Z)(N.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(O().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(C.L, { withBackwardFallback: '/', className: (0, o.$)(O().navigation, { [O().navigation_desktop]: !l }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(O().content, { [O().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(f._V, { className: O().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: O().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: O().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: O().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: O().button,
                                        onClick: r,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: O().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = s(68854),
                A = s.n(j);
            let R = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: n } = (0, r.A)(),
                    f = (0, l.useContext)(y.P),
                    b = null == f ? void 0 : f.experiments.checkExperiment(v.z.WebNextUnstableMusicScreen, 'on'),
                    S = n(b ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: s } = (0, p.gf)(),
                        { pageId: i } = (0, g.$)(),
                        o = (0, x.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let n = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: s,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: o,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, h.z5)(t.evgenInstance, n);
                    }, [t, e, s, i, o]);
                })(S);
                let { sendRefreshEvent: k } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: s } = (0, g.$)(),
                            i = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !s) return;
                                let o = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: s,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                o && (0, h.bv)(e.evgenInstance, o);
                            }, [e, t, s, i]),
                        };
                    })(),
                    O = (0, l.useCallback)(() => {
                        (k(), (window.location.href = N.Z.main.href));
                    }, [k]),
                    { contentRef: j } = (0, E.g)();
                return b
                    ? (0, i.jsx)(T, { className: t, withBackwardControl: s })
                    : (0, i.jsxs)('div', {
                          className: (0, o.$)(A().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(C.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(A().navigation, { [A().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, o.$)(A().content, { [A().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, o.$)(A().title, A().important), variant: 'h3', size: 'xs', children: S }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, o.$)(A().text, A().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: O,
                                          className: A().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        68854: (e) => {
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
        76481: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => o });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: o = {}, ...n } = t,
                        l = e || 'Internal error';
                    (super(l, n), (this.message = l), (this.code = s), (this.data = o), (this.stack = Error(l).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class o extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        77920: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        89514: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        91626: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => o }), s(77920));
            var i = s(76481);
            class o extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        93690: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => n.G, X1: () => i.X, m5: () => o.m });
            var i = s(77920),
                o = s(76481),
                n = s(91626);
            s(95919);
        },
        95919: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        99401: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => S });
            var i = s(25839),
                o = s(82298),
                n = s(88204),
                l = s(39004),
                r = s(93588),
                a = s(43354),
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
            let d = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var _ = s(10959),
                m = s(89514);
            let h = (e) => e(new Date(), (0, m.m)());
            var p = s(96433),
                x = s(27954),
                g = s(400),
                E = s.n(g),
                N = s(61493),
                y = s(4254),
                v = s(97522);
            let C = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(E().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(v.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, o.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(v.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: E().list,
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: o } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, i.jsx)(v.N, { target: '_blank', href: o, className: E().link, 'data-test-id': N.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': N.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(E().root, E().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, i.jsx)(f, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(C, { data: s.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, x.g)(),
                    { formatDate: o, formatMessage: n } = (0, l.A)(),
                    { language: r } = (0, p.h)(),
                    a = u({ formatMessage: n, language: r, tld: s.tld, year: h(o) });
                return (0, i.jsx)(C, { className: t, data: a });
            });
            let S = (0, n.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: n, location: m, user: g } = (0, x.g)(),
                    { formatDate: N, formatMessage: y } = (0, l.A)(),
                    { isEnabled: v } = null != (t = (0, a.P)()) ? t : {},
                    { language: C } = (0, p.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: o, tld: n, userRegion: l, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: o, userRegion: n } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, o) },
                                    r = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, o) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, o) },
                                    m = [l, a, u];
                                return (s && 'ru' === n && m.push(r), m.push(_), m);
                            })({ formatMessage: s, isWebApplication: i, language: o, tld: n, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: s, language: o, tld: n, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: r.$3,
                        tld: m.tld,
                        language: C,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: h(N),
                    });
                return (0, i.jsx)(b, { className: (0, o.$)({ [E().root_withOffsetForDeeplink]: v }, s), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7055, 3349, 7339, 740, 6287, 2121, 3472, 2767, 3112, 2787, 3202, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 3257, 2038,
                4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 3731)),
        ),
            (_N_E = e.O()));
    },
]);
