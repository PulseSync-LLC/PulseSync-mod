(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4245, 4602],
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
        663: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 23590)));
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var s = i(25839),
                r = i(82298),
                o = i(74631),
                l = i(39004),
                n = i(8487),
                a = i(4071),
                c = i(66738),
                u = i(4254),
                d = i(51790),
                _ = i(12558),
                m = i.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(u.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(d.$, { className: (0, r.$)(m().root, m().important), message: p, closeToast: i });
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
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(25839),
                r = i(82298),
                o = i(28631),
                l = i(74631);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: r, ...o } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': l, style: { ...t }, ref: i, ...o });
                },
                a = (0, l.forwardRef)((e, t) => (0, s.jsx)(n, { forwardRef: t, ...e }));
            var c = i(45300),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: n, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(u().scroller, { [u().scroller_withFooter]: o, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
            var m = i(10508),
                h = i(63257);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [_, p] = (0, l.useState)(null),
                        g = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), a.length > 0 && p(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, o),
                            [o, r, t, i, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let E = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(h.sN, { ref: u, rangeChanged: g, totalCount: n, endReached: E, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: E = 20,
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: x,
                            initialItemCount: N,
                            minInitialItemCount: f = 20,
                            handleRef: O,
                            alwaysShowScrollbar: b = !1,
                            testId: C,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...T
                        } = e,
                        [L, S] = (0, l.useState)(!1),
                        P = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        k = (0, l.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, v, A]),
                        R = N ? Math.min(N, f) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: L || b, [u().root_notScrolling]: !L && !b }, t),
                        'data-test-id': C,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: g,
                                components: k,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: P,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: y,
                                pageSize: E,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: I,
                                ...T,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: o } = e;
                return 'ru' === o && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
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
        15684: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => N });
            var s = i(25839),
                r = i(88204),
                o = i(8487),
                l = i(4071),
                n = i(66738),
                a = i(13833),
                c = i(4254),
                u = i(1407),
                d = i(21784),
                _ = i(89192),
                m = i(53712),
                h = i(85686),
                p = i(27954),
                g = i(99401),
                E = i(26076),
                y = i(10603),
                v = i(2328),
                x = i.n(v);
            let N = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, p.g)(),
                    { contentScrollRef: r, setContentScrollRef: v } = (0, _.g)(),
                    N = (0, d.W)(),
                    f = (0, h.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(u.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(y.Y, {
                            variant: y.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: N.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(a.N, {
                            ref: v,
                            containerClassName: x().scrollableContainer,
                            className: x().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: x().content,
                                    children: [
                                        (0, s.jsx)('div', { className: x().icon, children: (0, s.jsx)(n.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: x().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(l.$, {
                                            onClick: f,
                                            className: x().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(E.A, { children: (0, s.jsx)(g.w, { className: x().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        16978: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(25839),
                r = i(84059),
                o = i(8487),
                l = i(61493),
                n = i(71035),
                a = i(4071),
                c = i(4254),
                u = i(57024),
                d = i(36484),
                _ = i(62562);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: g, key: E, className: y } = e,
                    v = (0, r.useRouter)(),
                    x = (0, _.N)().get(d.QG),
                    N = (0, n.c)(() => {
                        x.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(x.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: y,
                        isBlock: g,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
            };
        },
        23590: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsAlbumsPage: () => S });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                n = i(39004),
                a = i(8487),
                c = i(61493),
                u = i(4254),
                d = i(78299),
                _ = i(76939),
                m = i(1407),
                h = i(20258),
                p = i(10322),
                g = i(21784),
                E = i(89192),
                y = i(30716),
                v = i(27954),
                x = i(60678),
                N = i(99401),
                f = i(26076),
                O = i(10603),
                b = i(19412),
                C = i(6968),
                A = i(50222),
                I = i(15684),
                T = i(46730),
                L = i.n(T);
            let S = (0, o.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, v.g)(),
                    { contentScrollRef: i, setContentScrollRef: o } = (0, E.g)(),
                    T = (0, g.W)(),
                    { formatMessage: S } = (0, n.A)(),
                    P = (0, l.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: A.c });
                        },
                        [t],
                    );
                (0, x.X)(t.pagesLoader, P);
                let k = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(N.w, { className: L().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, l.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, y.J)(t.isResolved),
                t.isNeededToLoad && (0, l.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, s.jsx)(d.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(I.i, { title: S({ id: 'kids.albums-and-podcasts' }) })
                      : (0, s.jsx)(p.n, {
                            pageId: h._Q.COLLECTION_KIDS_ALBUMS,
                            children: (0, s.jsx)(m.h, {
                                scrollElement: i,
                                outerTitle: S({ id: 'kids.albums-and-podcasts' }),
                                children: (0, s.jsxs)('div', {
                                    className: L().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, s.jsx)(O.Y, {
                                            variant: O.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: T.canBack,
                                            children: (0, s.jsx)(u.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, s.jsx)(C.$, {
                                            className: (0, r.$)(L().scrollContainer, L().important),
                                            listClassName: L().content,
                                            itemClassName: L().item,
                                            customComponents: k,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    r = S({ id: 'loading-messages.entity-is-loading' }, { entityName: S({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(_.a, { album: i, contentLinesCount: 4, withLikesCount: !0 }, i.id)
                                                    : (0, s.jsx)(b.V, { 'aria-label': r, linesCount: 4 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: P,
                                            pageSize: A.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: o,
                                            context: { listAriaLabel: S({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(25839);
            i(93588);
            var r = i(400),
                o = i.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        30871: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var s = i(25839),
                r = i(88204),
                o = i(84059),
                l = i(82298),
                n = i(8487),
                a = i(4254),
                c = i(16978),
                u = i(148),
                d = i.n(u);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, l.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, l.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(53712),
                h = i(27954);
            let p = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => o });
            var s = i(74631);
            let r = (0, s.createContext)(null),
                o = () => (0, s.useContext)(r);
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
        50222: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(25895);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        57024: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => o, UC: () => l, dM: () => n, uV: () => a });
            var s = i(93690),
                r = i(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
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
        58848: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59126: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var s = i(25839),
                r = i(74631),
                o = i(71035),
                l = i(1466),
                n = i(91149),
                a = i(92942),
                c = i(36159);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, a.l)(),
                    d = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [u, _, i, e.rejectedPagesCount]);
            };
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
        74245: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => _, Yw: () => s, JU: () => r, DQ: () => p, Ve: () => g });
            var s,
                r,
                o = i(30691),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var n = i(59126);
            class a extends n.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends n.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
            })(s || (s = {}));
            let u = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class _ {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new a(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = d(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), ((e.EXCLAMATION = '!'), (e.SUBSTITUTED = 'substituted')));
            })(r || (r = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, r.E],
                    [s.AGE_18_ICON, r.AGE_18],
                    [s.AGE_16_ICON, r.AGE_16],
                    [s.AGE_12_ICON, r.AGE_12],
                    [s.EXCLAMATION_ICON, r.EXCLAMATION],
                    [s.SUBSTITUTED_ICON, r.SUBSTITUTED],
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = d(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => d(e, t).length > 0;
        },
        76481: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        77920: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => O });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(74631),
                n = i(39004),
                a = i(8487);
            i(93588);
            var c = i(4071),
                u = i(66738),
                d = i(4254),
                _ = i(67379),
                m = i(36619),
                h = i(76945),
                p = i(59450),
                g = i(84e3),
                E = i(97952),
                y = i(89192),
                v = i(53712),
                x = i(15270),
                N = i(68854),
                f = i.n(N);
            let O = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: o } = (0, n.A)(),
                    N = o({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, E.$)(),
                        r = (0, g.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, h.z5)(t.evgenInstance, o);
                    }, [t, e, i, s, r]);
                })(N);
                let { sendRefreshEvent: O } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, E.$)(),
                            s = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, i, s]),
                        };
                    })(),
                    b = (0, l.useCallback)(() => {
                        (O(), (window.location.href = v.Z.main.href));
                    }, [O]),
                    { contentRef: C } = (0, y.g)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(f().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(x.L, { withBackwardFallback: '/', className: (0, r.$)(f().navigation, { [f().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(u.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(d.DZ, { className: (0, r.$)(f().title, f().important), variant: 'h3', size: 'xs', children: N }),
                                (0, s.jsxs)(d.HL, {
                                    className: (0, r.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: b,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        91626: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(77920));
            var s = i(76481);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        93690: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => o.G, X1: () => s.X, m5: () => r.m });
            var s = i(77920),
                r = i(76481),
                o = i(91626);
            i(95919);
        },
        95919: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => C });
            var s = i(25839),
                r = i(82298),
                o = i(88204),
                l = i(39004),
                n = i(93588),
                a = i(43354),
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
            let u = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let h = (e) => e(new Date(), (0, m.m)());
            var p = i(96433),
                g = i(27954),
                E = i(400),
                y = i.n(E),
                v = i(61493),
                x = i(4254),
                N = i(97522);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(N.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(N.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: y().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, s.jsx)(N.N, { target: '_blank', href: r, className: y().link, 'data-test-id': v.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, s.jsx)(O, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: o } = (0, l.A)(),
                    { language: n } = (0, p.h)(),
                    a = d({ formatMessage: o, language: n, tld: i.tld, year: h(r) });
                return (0, s.jsx)(f, { className: t, data: a });
            });
            let C = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: m, user: E } = (0, g.g)(),
                    { formatDate: v, formatMessage: x } = (0, l.A)(),
                    { isEnabled: N } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: o } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, s, r) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, s, r) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, s, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, s, r) },
                                    m = [l, a, d];
                                return (i && 'ru' === o && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: i, language: r, tld: o, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: f,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: h(v),
                    });
                return (0, s.jsx)(b, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: N }, i), data: O });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1676, 3349, 7339, 6749, 6287, 2121, 3472, 1107, 7349, 2787, 3202, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3269, 4163,
                3246, 4517, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 5898, 4475, 5056, 7358,
            ],
            () => e((e.s = 663)),
        ),
            (_N_E = e.O()));
    },
]);
