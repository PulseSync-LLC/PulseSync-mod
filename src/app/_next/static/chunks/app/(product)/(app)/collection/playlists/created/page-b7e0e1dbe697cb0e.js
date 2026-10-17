(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
    {
        148: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        400: (t) => {
            t.exports = {
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
        1134: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => m });
            var l = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                o = i(91149),
                n = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, l.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, s.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let a = await t.togglePin();
                    (p(!1),
                        a
                            ? i((0, l.jsx)(u.l, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, l.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, _, t, i, m]);
            };
        },
        1466: (t, e, i) => {
            'use strict';
            i.d(e, { L: () => p });
            var l = i(25839),
                s = i(82298),
                r = i(74631),
                a = i(39004),
                o = i(8487),
                n = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                m = i(12558),
                _ = i.n(m);
            let p = (t) => {
                let { reloadBlocks: e, closeToast: i } = t,
                    m = (0, r.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var t;
                    null == (t = m.current) || t.focus();
                }, []);
                let h = (0, r.useMemo)(
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
                                    onClick: e,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, e],
                );
                return (0, l.jsx)(u.$, { className: (0, s.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => x });
            var l = i(25839),
                s = i(82298),
                r = i(28631),
                a = i(74631);
            let o = (t) => {
                    let { style: e, forwardRef: i, context: s, ...r } = t,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...e }, ref: i, ...r });
                },
                n = (0, a.forwardRef)((t, e) => (0, l.jsx)(o, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: o, ...n } = t;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...e },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((t, e) => (0, l.jsx)(u, { forwardRef: e, ...t }));
            var _ = i(10508),
                p = i(63257);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: r = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [m, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, _.A)((t) => {
                                    if ((null == s || s(t), n.length > 0 && h(t), e && i)) {
                                        let l = Math.floor(t.endIndex / e) + 1,
                                            s = Math.floor(t.startIndex / e);
                                        for (let t = s; t < l; t++) i(t);
                                    }
                                }, r),
                            [r, s, e, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && m && x(m);
                    }, n);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((t) => {
                                c(t);
                            }, r);
                    }, [c, r]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: o, endReached: v, ...u });
                },
                x = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: y,
                            debounceDurationInMs: g,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: A,
                            alwaysShowScrollbar: N = !1,
                            testId: L,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...P
                        } = t,
                        [E, R] = (0, a.useState)(!1),
                        T = (0, a.useMemo)(
                            () =>
                                (0, r.A)((t) => {
                                    R(t);
                                }, 100),
                            [],
                        ),
                        b = (0, a.useMemo)(() => {
                            var t, e;
                            return S
                                ? {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, S]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: E || N, [d().root_notScrolling]: !E && !N }, e),
                        'data-test-id': L,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(h, {
                                overscan: x,
                                components: b,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: A,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: j,
                                ...P,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var l = i(44806);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: r } = t;
                return 'ru' === r && e(l.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        11106: (t, e, i) => {
            'use strict';
            i.d(e, { CollectionPlaylistsCreatedPage: () => j });
            var l = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(39004),
                n = i(8487),
                c = i(61493),
                d = i(4254),
                u = i(1407),
                m = i(41707),
                _ = i(20258),
                p = i(10322),
                h = i(21784),
                x = i(89192),
                v = i(30716),
                C = i(27954),
                y = i(60678),
                g = i(99401),
                f = i(26076),
                k = i(10603),
                A = i(19412),
                N = i(6968),
                L = i(67270),
                S = i.n(L);
            let j = (0, r.PA)(() => {
                let {
                        user: t,
                        collection: {
                            playlists: { playlistsCreated: e },
                        },
                        settings: { isMobile: i },
                    } = (0, C.g)(),
                    { formatMessage: r } = (0, o.A)(),
                    { contentScrollRef: L, setContentScrollRef: j } = (0, x.g)(),
                    P = (0, h.W)(),
                    E = (0, a.useMemo)(() => ({ Footer: () => (0, l.jsx)(f.A, { children: (0, l.jsx)(g.w, { className: S().footer }) }) }), []);
                (0, v.J)(e.isResolved);
                let R = (0, a.useCallback)(
                    (i) => {
                        t.account.data.uid && e.getData({ userId: t.account.data.uid, page: i, pageSize: 20 });
                    },
                    [e, t.account.data.uid],
                );
                ((0, y.X)(e.pagesLoader, R),
                    (0, a.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    t.account.data.uid && e.isNeededToLoad && (0, a.use)(e.getData({ userId: t.account.data.uid, page: 0, pageSize: 20 })));
                let T = e.isShimmerVisible ? 20 : e.items.length;
                return (0, l.jsx)(p.n, {
                    pageId: _._Q.OWN_PLAYLISTS,
                    children: (0, l.jsx)(u.h, {
                        scrollElement: L,
                        outerTitle: r({ id: 'entity-names.my-playlists' }),
                        children: (0, l.jsxs)('div', {
                            className: S().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, l.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: P.canBack,
                                    children: (0, l.jsx)(d.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, l.jsx)(N.$, {
                                    className: (0, s.$)(S().scrollContainer, S().important),
                                    customComponents: E,
                                    itemContentCallback: (t) => {
                                        let i = e.items[t],
                                            s = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.playlist' }) });
                                        return i ? (0, l.jsx)(m.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, l.jsx)(A.V, { 'aria-label': s });
                                    },
                                    totalCount: T,
                                    onGetDataByPage: R,
                                    pageSize: 20,
                                    totalRequests: e.requestsCount,
                                    listClassName: S().content,
                                    itemClassName: S().item,
                                    handleRef: j,
                                    context: { listAriaLabel: r({ id: 'collection.created-playlists-list' }) },
                                    isMobileLayout: i,
                                    useWindowScroll: i,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        12558: (t) => {
            t.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        15787: (t) => {
            t.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        16978: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => _ });
            var l = i(25839),
                s = i(84059),
                r = i(8487),
                a = i(61493),
                o = i(71035),
                n = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (t) => {
                let { size: e = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: v, className: C } = t,
                    y = (0, s.useRouter)(),
                    g = (0, m.N)().get(u.QG),
                    f = (0, o.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(g.authorizationUrl));
                    });
                return (0, l.jsx)(
                    n.$,
                    {
                        onClick: f,
                        className: C,
                        isBlock: x,
                        color: _,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, l.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, l.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        19410: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var l = i(25839),
                s = i(82298),
                r = i(61493),
                a = i(23976),
                o = i(40828),
                n = i.n(o);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: o,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = t;
                return (0, l.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, s.$)(n().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, l.jsx)(a.W, { isActive: e, className: n().subcover, radius: 'l' }),
                        (0, l.jsx)(a.W, { isActive: e, className: (0, s.$)(n().cover, o, { [n().cover_round]: c, [n().cover_withSubcover]: p }), radius: h }),
                        m &&
                            (0, l.jsx)('div', {
                                className: (0, s.$)(n().infoContainer, n()['content_linesCount_'.concat(_)], { [n().infoContainer_centered]: u }),
                                children: (0, l.jsx)(a.W, { isActive: e, className: (0, s.$)(n().title, { [n().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => a });
            var l = i(25839);
            i(93588);
            var s = i(400),
                r = i.n(s);
            let a = (t) => {
                let { children: e } = t;
                return (0, l.jsx)('footer', { className: r().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => a });
            var l = i(25839),
                s = i(35015),
                r = i(10546);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, l.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: e.url,
                    coverUri: e.coverUri,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            };
        },
        30871: (t, e, i) => {
            'use strict';
            i.d(e, { WithAuth: () => h });
            var l = i(25839),
                s = i(88204),
                r = i(84059),
                a = i(82298),
                o = i(8487),
                n = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, s.PA)(() =>
                (0, l.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, l.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, l.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, l.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, l.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(53712),
                p = i(27954);
            let h = (0, s.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? e : (i && (0, r.redirect)(_.Z.main.href), (0, l.jsx)(m, {}));
            });
        },
        36286: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        39528: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => s });
            var l = i(25895);
            let s = (t) => (0, l.u)('/artist/:artistId', { params: { artistId: t } });
        },
        40828: (t) => {
            t.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        41459: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => r });
            var l = i(74631),
                s = i(39004);
            let r = (t) => {
                let { formatMessage: e } = (0, s.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let l = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(l, ' ').concat(i);
                }, [e, t]);
            };
        },
        41707: (t, e, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(e, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var l = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(39004),
                n = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                p = i(66738),
                h = i(86869),
                x = i(4254),
                v = i(56348),
                C = i(62948),
                y = i(1134),
                g = i(79367),
                f = i(29481),
                k = i(47009),
                A = i(34159),
                N = i(52512),
                L = i(30290),
                S = i(61561),
                j = i(85686),
                P = i(85743),
                E = i(50209),
                R = i(27954),
                T = i(74760),
                b = i(6323),
                I = i(64720),
                O = i(97522),
                w = i(41580),
                z = i(49438),
                D = i(71996),
                M = i(78437),
                F = i(41459),
                H = i(10820),
                Y = i(3210),
                B = i(11609),
                V = i(29872),
                K = i(56120),
                U = i(83014),
                $ = i(44806),
                W = i(16386),
                X = i(67303),
                q = i(59043);
            let G = (0, r.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: s, open: r, ...a } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, V.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, R.g)(),
                    v = (0, C.K)(i),
                    f = (0, y.A)(i),
                    k = (0, A.F)(),
                    { formatMessage: N } = (0, o.A)(),
                    L = (0, g.P)(),
                    S = _.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    j = (0, Y.A)({ entityVariant: U.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(r);
                let P = (0, u.c)(() => {
                    if (d) return void m();
                    L() || (h.openPlaylistTrailer(i.id), k(n.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), s?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, l.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        S && (0, l.jsx)(B.d, { entityVariant: U.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : j }),
                        !p && (0, l.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(W.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, l.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, l.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, l.jsx)(q.N, { onClick: P, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(15787),
                Z = i.n(J);
            let Q = (0, r.PA)((t) => {
                let { className: e, playlist: i, children: r, contentLinesCount: H, customDescription: Y, onCoverMouseDown: B } = t,
                    { ref: V, intersectionPropertyId: K } = (0, N.n)(),
                    {
                        trailer: U,
                        user: $,
                        paywall: { modal: W },
                    } = (0, R.g)(),
                    { from: X, utmLink: q } = (0, L.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, o.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, P.z)(),
                    [ti, tl] = (0, a.useState)(!1),
                    [ts, tr] = (0, a.useState)(!1),
                    [ta, to] = (0, a.useState)(!1),
                    tn = (0, F.r)(i),
                    tc = (0, C.K)(i),
                    td = (0, y.A)(i),
                    tu = (0, f.N)(),
                    tm = (0, k.b)(),
                    t_ = (0, j.Z)(i.url),
                    tp = (0, A.F)(),
                    th = (0, g.P)(),
                    tx = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (U.setUtmLink(q), U.openPlaylistTrailer(i.id), tp(n.DomainObjectType.Playlist, i.id));
                    }),
                    [tv, tC] = (0, a.useState)(!1),
                    { isPlaying: ty, togglePlay: tg } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tf = (0, u.c)(() => {
                        (tu({ to: n.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tk = (0, u.c)((t) => {
                        (tf(), t_(t));
                    }),
                    tA = (0, S.N)(),
                    tN = (0, u.c)(() => {
                        if (!th()) {
                            if (tA) return void W.open();
                            (ti || ty || (tl(!0), null == te || te()), tg(), tm(!ty));
                        }
                    }),
                    tL = (0, u.c)(() => {
                        (ts || i.isLiked || (tr(!0), null == Q || Q()), tc());
                    }),
                    tS = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tj = (0, u.c)((t) => {
                        (to(t), tC(t));
                    }),
                    tP = (0, a.useMemo)(() => {
                        var t;
                        return Y
                            ? (0, l.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: Y }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, l.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [Y, i]),
                    tE = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                I.c,
                                {
                                    className: (0, s.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: tL,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !$.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tR = (0, a.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, l.jsx)(
                                M.n,
                                {
                                    children: (0, l.jsx)(
                                        D.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tx },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tx, i]),
                    tT = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tb = (0, a.useMemo)(
                        () =>
                            (0, l.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: tk,
                                    onMouseDown: B,
                                    children: [
                                        (0, l.jsx)(b.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tn,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(_.hg, {
                                            isVisible: ta || tv,
                                            className: Z().controls,
                                            playControl: (0, l.jsx)(
                                                z.D,
                                                {
                                                    className: (0, s.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tN,
                                                    isPlaying: ty,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tE,
                                            menuControl: (0, l.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tj,
                                                    open: ta,
                                                    onClick: tS,
                                                    className: (0, s.$)(Z().menuButton, Z().control),
                                                    icon: (0, l.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tT,
                                            trailerControl: tR,
                                        }),
                                    ],
                                }),
                            }),
                        [tk, B, i, tn, ta, tv, tN, ty, tE, tj, tS, tT, tR],
                    ),
                    tI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(_.MN, {
                    ref: V,
                    'aria-label': tn,
                    className: (0, s.$)(Z().root, e),
                    title: (0, l.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: tf, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { className: Z().srTitleLink, href: i.url, onClick: tf, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: H,
                    view: tb,
                    description: tP,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tI &&
                            (0, l.jsx)(T.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        r,
                    ],
                });
            });
        },
        42190: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var l = i(25839),
                s = i(35015),
                r = i(3163);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, l.jsx)(r.O, {
                    entityVariant: s.c.PLAYLIST,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    closeToast: i,
                    coverUri: e.coverUri,
                });
            };
        },
        43354: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => r });
            var l = i(74631);
            let s = (0, l.createContext)(null),
                r = () => (0, l.useContext)(s);
        },
        45300: (t) => {
            t.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        53454: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => s });
            var l = i(25895);
            let s = {
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
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        56348: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => B });
            var l = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(49656),
                n = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (t, e) => {
                let { withLink: i, separator: l } = e,
                    s = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: l, link: s };
            };
            var p = i(94484),
                h = i.n(p),
                x = i(61493),
                v = i(4254),
                C = i(97522),
                y = i(39004),
                g = i(44031),
                f = i(29481),
                k = i(85686),
                A = i(85743),
                N = i(40207);
            let L = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: s, captionSize: r = 'm', allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = t,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: L,
                            isTooltipEnabled: S,
                            handleNavigate: j,
                        } = ((t) => {
                            var e, i;
                            let { item: l, allArtistsTitle: s, withCustomTooltip: r } = t,
                                { formatMessage: a } = (0, y.A)(),
                                o = ((t, e) => {
                                    let { item: i, allArtistsTitle: l, withCustomTooltip: s } = t,
                                        r = l || i.name;
                                    return {
                                        ...i,
                                        title: s ? void 0 : r,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !l && s,
                                    };
                                })({ item: l, allArtistsTitle: s, withCustomTooltip: r }, a),
                                {
                                    track: n,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, k.Z)(null != (i = null == (e = o.link) ? void 0 : e.href) ? i : o.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                p = (0, f.N)(),
                                h = (0, d.c)((t) => {
                                    (c && n.isOpened && n.close(), m(t));
                                }),
                                x = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: l, fullscreenPlayer: s, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: a } = l;
                                    return (0, N.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), a.isOpened && (l.reset(), a.close()), s.modal.isOpened && s.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: o.artist, callback: h }),
                                v = (0, d.c)((t) => {
                                    (p({ to: g.AppScreen.ArtistScreen }), null == _ || _(), x(t));
                                });
                            return { ...o, handleNavigate: v };
                        })({ item: e, allArtistsTitle: a, withCustomTooltip: o });
                    return _
                        ? (0, l.jsx)(C.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: j,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(n.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: L,
                                  hoverSettings: c,
                                  children: (0, l.jsx)(v.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: s, children: m }),
                              }),
                          })
                        : (0, l.jsx)(n.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: L,
                              hoverSettings: c,
                              children: (0, l.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: s,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (t) => {
                    let { group: e, linkClassName: i, captionClassName: s, captionSize: r, allArtistsTitle: o, withCustomTooltip: n, hoverSettings: c } = t;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, l.jsx)(L, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: s,
                                captionSize: r,
                                allArtistsTitle: o,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, l.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, l.jsx)(L, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: s,
                                                captionSize: r,
                                                allArtistsTitle: o,
                                                withCustomTooltip: n,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    t.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var j = i(8487),
                P = i(9079);
            let E = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(P.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(j.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var R = i(28631),
                T = i(33049),
                b = i(61912),
                I = i(36286),
                O = i.n(I);
            let w = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: s } = t;
                    return (0, l.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: s, children: e }),
                            (0, l.jsx)(n.ZI, { className: O().tooltipContent, children: i.map((t) => (0, l.jsx)(b.V, { artist: t, className: O().artistItem }, t.id)) }),
                        ],
                    });
                }),
                z = (0, a.forwardRef)((t, e) => (0, l.jsx)(w, { forwardRef: e, ...t }));
            var D = i(10820),
                M = i(93510),
                F = i.n(M);
            let H = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, y.A)();
                    return (0, l.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, s.$)(F().root, F().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, l.jsx)(b.V, { artist: t }, t.id)),
                    });
                }),
                Y = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: s } = t,
                        [r, n] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = s.current;
                            t && n(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        _ = (0, o.L)(() =>
                            (0, R.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', _),
                                m(),
                                () => {
                                    window.removeEventListener('resize', _);
                                }
                            ),
                            [_, m],
                        ),
                        (0, a.useEffect)(() => {
                            m();
                        }, [e, m]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, l.jsx)(H, { artists: e, label: i }) : (0, l.jsx)(z, { artists: e, label: i })) : i;
                }),
                B = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: x,
                            variant: v = 'breakAll',
                            spoilerComponent: C,
                            ...y
                        } = t,
                        g = ((t) => {
                            var e, i, l;
                            let { separator: s, visibleArtistsCount: r, withLink: o, withComposer: n, artistIdWithoutLink: c, withContextMenu: m } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                x = null == (l = t.withCustomTooltip) || l,
                                v = (0, a.useRef)(null),
                                [C, y] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                f = ((!g || 1 === p.length) && m) || !m,
                                k = ((t, e) => {
                                    var i, l, s;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        a = null == (l = null == e ? void 0 : e.withLink) || l,
                                        o = null != (s = null == e ? void 0 : e.separator) ? s : ', ',
                                        n = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(o),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: l } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => l || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: r, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: l, separator: s, isFirst: r } = e;
                                                return {
                                                    primary: _(t, { withLink: l, separator: r ? void 0 : s }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = s ? t.separator : '';
                                                        return _(t, { withLink: l, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: a && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: o, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: s, visibleArtistsCount: C ? void 0 : r, withComposer: n, withLink: !!f && o, artistIdWithoutLink: c }),
                                A = h ? k.allArtistsTitle : '',
                                N = (0, d.c)((t) => {
                                    (y(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: k.groups,
                                hiddenArtistsCount: k.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: x,
                                withContextMenu: m,
                                labelRef: v,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!A && x && !m && !g,
                                title: !A || x || m ? void 0 : A,
                            };
                        })(y),
                        f = (0, o.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(C)
                                  ? C
                                  : (0, l.jsx)(E, { spoilerClassName: r, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        k = (0, l.jsx)(n.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, s.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: g.title,
                                children: [
                                    g.groups.map((t) =>
                                        (0, l.jsx)(
                                            S,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, l.jsx)(Y, { labelRef: g.labelRef, artists: g.artists, label: k }) : k;
                });
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => r, UC: () => a, dM: () => o, uV: () => n });
            var l = i(93690),
                s = i(58848);
            let r = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (t) => (t.uid ? 'authorized' : 'no-uid'),
                o = (t) => {
                    if (!(t instanceof l.m5) || !(0, s.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, s.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                n = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => l });
            let l = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        60678: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => d });
            var l = i(25839),
                s = i(74631),
                r = i(71035),
                a = i(1466),
                o = i(91149),
                n = i(92942),
                c = i(36159);
            let d = (t, e) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, r.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (i = t.lastRejectedPagesList) ? i : [])].reverse().filter((e) => {
                            var i;
                            return (null == (i = t.pageStates) ? void 0 : i[e]) === c.G.REJECT;
                        });
                        (t.resetRejectedPagesState(),
                            l.forEach((t) => {
                                e(t);
                            }));
                    });
                (0, s.useEffect)(() => {
                    t.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(a.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, m, i, t.rejectedPagesCount]);
            };
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            var l = i(27954),
                s = i(44806);
            let r = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: a,
                } = (0, l.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => y });
            var l = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(74631),
                o = i(44031),
                n = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                x = i(27954),
                v = i(53454),
                C = i.n(v);
            let y = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    v = (0, h.Z)(e.url),
                    g = (0, p.N)(),
                    f = (0, a.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, l.jsx)(y, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    k = (0, c.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), g({ to: o.AppScreen.ArtistScreen }), v(t));
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(u.Dr, {
                            className: (0, s.$)(C().root, i),
                            onClick: k,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(m.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, l.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        62948: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => _ });
            var l = i(25839),
                s = i(33660),
                r = i(74631),
                a = i(39004),
                o = i(31860),
                n = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, p] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, l.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let r = { ...(0, s.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let a = await t.toggleLike();
                    (p(!1),
                        a === o.f.OK
                            ? i((0, l.jsx)(m.T, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, l.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, _, t, h, i]);
            };
        },
        67270: (t) => {
            t.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        69292: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var l = i(25839),
                s = i(74631),
                r = i(39004),
                a = i(61493),
                o = i(4071),
                n = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = t,
                        { formatMessage: y } = (0, r.A)(),
                        g = y({ id: 'trailer.button-aria-label' });
                    return (0, l.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: _,
                        ref: x,
                        icon: (0, l.jsx)(n.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, s.forwardRef)((t, e) => (0, l.jsx)(d, { forwardRef: e, ...t }));
        },
        74760: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => m });
            var l = i(25839),
                s = i(82298),
                r = i(39004),
                a = i(61493),
                o = i(4071),
                n = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let m = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = t,
                    { formatNumber: p } = (0, r.A)();
                return (0, l.jsx)(o.$, {
                    className: (0, s.$)(u().root, e),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => a });
            var l = i(25839),
                s = i(39004),
                r = i(3392);
            let a = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, s.A)();
                return (0, l.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: e,
                });
            };
        },
        84e3: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => r });
            var l = i(36484),
                s = i(62562);
            let r = () => (0, s.N)().get(l.Zf);
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        93510: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        95191: (t, e, i) => {
            (Promise.resolve().then(i.bind(i, 30871)), Promise.resolve().then(i.bind(i, 11106)));
        },
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => L });
            var l = i(25839),
                s = i(82298),
                r = i(88204),
                a = i(39004),
                o = i(93588),
                n = i(43354),
                c = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let d = (t, e, i) => {
                    switch (t) {
                        case c.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                u = (t) => {
                    let { formatMessage: e, language: i, tld: l, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, l, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, l, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (t) => t(new Date(), (0, _.m)());
            var h = i(96433),
                x = i(27954),
                v = i(400),
                C = i.n(v),
                y = i(61493),
                g = i(4254),
                f = i(97522);
            let k = (t) => {
                    let { className: e, data: i } = t;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(f.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(f.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, l.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: C().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, l.jsx)(f.N, { target: '_blank', href: s, className: C().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, l.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, l.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, e),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, l.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: s, formatMessage: r } = (0, a.A)(),
                    { language: o } = (0, h.h)(),
                    n = u({ formatMessage: r, language: o, tld: i.tld, year: p(s) });
                return (0, l.jsx)(k, { className: e, data: n });
            });
            let L = (0, r.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: r, location: _, user: v } = (0, x.g)(),
                    { formatDate: y, formatMessage: g } = (0, a.A)(),
                    { isEnabled: f } = null != (e = (0, n.P)()) ? e : {},
                    { language: k } = (0, h.h)(),
                    A = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: l, language: s, tld: r, userRegion: a, year: o } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: l, language: s, userRegion: r } = t,
                                    a = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, l, s) },
                                    o = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, l, s) },
                                    n = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, l, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, l, s) },
                                    m = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, l, s) },
                                    _ = [a, n, u];
                                return (i && 'ru' === r && _.push(o), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: l, language: s, tld: r, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (t, e) => r.checkExperiment(t, e),
                        formatMessage: g,
                        isWebApplication: o.$3,
                        tld: _.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, l.jsx)(N, { className: (0, s.$)({ [C().root_withOffsetForDeeplink]: f }, i), data: A });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                7055, 3349, 7339, 6287, 2121, 3472, 2767, 3112, 3569, 6706, 4771, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 3257, 5472, 2038, 4163, 3246,
                3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 6361, 4475, 5056, 7358,
            ],
            () => t((t.s = 95191)),
        ),
            (_N_E = t.O()));
    },
]);
