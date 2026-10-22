(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
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
        1134: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(25839),
                l = i(33660),
                r = i(74631),
                a = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, a.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: n.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var s = i(25839),
                l = i(82298),
                r = i(74631),
                a = i(39004),
                n = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, l.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(25839),
                l = i(82298),
                r = i(28631),
                a = i(74631);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: l, ...r } = e,
                        a = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        n = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: i, ...r });
                },
                o = (0, a.forwardRef)((e, t) => (0, s.jsx)(n, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: n, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                p = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: r = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == l || l(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, l, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let g = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: n, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: C,
                            initialItemCount: k,
                            minInitialItemCount: S = 20,
                            handleRef: f,
                            alwaysShowScrollbar: N = !1,
                            testId: A,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: b,
                            ...L
                        } = e,
                        [E, P] = (0, a.useState)(!1),
                        T = (0, a.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        R = (0, a.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, j]),
                        I = k ? Math.min(k, S) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: E || N, [d().root_notScrolling]: !E && !N }, t),
                        'data-test-id': A,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: b,
                                ...L,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10678: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 77869));
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
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
        15787: (e) => {
            e.exports = {
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
        19410: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var s = i(25839),
                l = i(82298),
                r = i(61493),
                a = i(23976),
                n = i(40828),
                o = i.n(n);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, l.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(a.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(a.W, { isActive: t, className: (0, l.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, l.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(a.W, { isActive: t, className: (0, l.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var s = i(25839);
            i(93588);
            var l = i(400),
                r = i.n(l);
            let a = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            var s = i(25839),
                l = i(35015),
                r = i(10546);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
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
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        37051: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(25895);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40828: (e) => {
            e.exports = {
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
        41459: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(74631),
                l = i(39004);
            let r = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        41707: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(66738);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(25839),
                pulseSyncMenuItems = i(10820),
                pulseSyncMenuIcons = i(66738);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                n = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                p = i(66738),
                h = i(86869),
                x = i(4254),
                g = i(56348),
                v = i(62948),
                y = i(1134),
                C = i(79367),
                k = i(29481),
                S = i(47009),
                f = i(34159),
                N = i(52512),
                A = i(30290),
                j = i(61561),
                b = i(85686),
                L = i(85743),
                E = i(50209),
                P = i(27954),
                T = i(74760),
                R = i(6323),
                I = i(64720),
                w = i(97522),
                O = i(41580),
                M = i(49438),
                D = i(71996),
                z = i(78437),
                F = i(41459),
                H = i(10820),
                W = i(3210),
                B = i(11609),
                Y = i(29872),
                U = i(56120),
                K = i(83014),
                $ = i(44806),
                V = i(16386),
                X = i(67303),
                G = i(59043);
            let q = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, Y.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, P.g)(),
                    g = (0, v.K)(i),
                    k = (0, y.A)(i),
                    S = (0, f.F)(),
                    { formatMessage: N } = (0, n.A)(),
                    A = (0, C.P)(),
                    j = m.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    b = (0, W.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, U.N)(r);
                let L = (0, u.c)(() => {
                    if (d) return void _();
                    A() || (h.openPlaylistTrailer(i.id), S(o.DomainObjectType.Playlist, i.id));
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
                                        (activate(), l?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        j && (0, s.jsx)(B.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : b }),
                        !p && (0, s.jsx)(X.L, { onClick: k, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(V.T, { onClick: g, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(G.N, { onClick: L, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(15787),
                Z = i.n(J);
            let Q = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: H, customDescription: W, onCoverMouseDown: B } = e,
                    { ref: Y, intersectionPropertyId: U } = (0, N.n)(),
                    {
                        trailer: K,
                        user: $,
                        paywall: { modal: V },
                    } = (0, P.g)(),
                    { from: X, utmLink: G } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, L.z)(),
                    [ei, es] = (0, a.useState)(!1),
                    [el, er] = (0, a.useState)(!1),
                    [ea, en] = (0, a.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, v.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, k.N)(),
                    e_ = (0, S.b)(),
                    em = (0, b.Z)(i.url),
                    ep = (0, f.F)(),
                    eh = (0, C.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (K.setUtmLink(G), K.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eg, ev] = (0, a.useState)(!1),
                    { isPlaying: ey, togglePlay: eC } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ek = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eS = (0, u.c)((e) => {
                        (ek(), em(e));
                    }),
                    ef = (0, j.N)(),
                    eN = (0, u.c)(() => {
                        if (!eh()) {
                            if (ef) return void V.open();
                            (ei || ey || (es(!0), null == et || et()), eC(), e_(!ey));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (el || i.isLiked || (er(!0), null == Q || Q()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, u.c)((e) => {
                        (en(e), ev(e));
                    }),
                    eL = (0, a.useMemo)(() => {
                        var e;
                        return W
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    g.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eE = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !$.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        D.k,
                                        { className: (0, l.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ex },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ex, i]),
                    eT = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                O.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, l.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eS,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(R.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: ea || eg,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                M.D,
                                                {
                                                    className: (0, l.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eN,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eE,
                                            menuControl: (0, s.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eb,
                                                    open: ea,
                                                    onClick: ej,
                                                    className: (0, l.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eT,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eS, B, i, eo, ea, eg, eN, ey, eE, eb, ej, eT, eP],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': eo,
                    className: (0, l.$)(Z().root, t),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(w.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(w.N, { className: Z().srTitleLink, href: i.url, onClick: ek, children: i.title }),
                    'data-intersection-property-id': U,
                    contentLinesCount: H,
                    view: eR,
                    description: eL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, s.jsx)(T.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        r,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var s = i(25839),
                l = i(35015),
                r = i(3163);
            let a = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(74631);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
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
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(25895);
            let l = {
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
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                n = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                _ = i(39528);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var p = i(94484),
                h = i.n(p),
                x = i(61493),
                g = i(4254),
                v = i(97522),
                y = i(39004),
                C = i(44031),
                k = i(29481),
                S = i(85686),
                f = i(85743),
                N = i(40207);
            let A = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: r = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: h,
                            tooltipText: A,
                            isTooltipEnabled: j,
                            handleNavigate: b,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: r } = e,
                                { formatMessage: a } = (0, y.A)(),
                                n = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: r }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, S.Z)(null != (i = null == (t = n.link) ? void 0 : t.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, f.z)(),
                                p = (0, k.N)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), _(e));
                                }),
                                x = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: a } = s;
                                    return (0, N.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: h }),
                                g = (0, d.c)((e) => {
                                    (p({ to: C.AppScreen.ArtistScreen }), null == m || m(), x(e));
                                });
                            return { ...n, handleNavigate: g };
                        })({ item: t, allArtistsTitle: a, withCustomTooltip: n });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: b,
                              title: p,
                              'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(g.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: l, children: _ }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: c,
                              children: (0, s.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: l,
                                  title: p,
                                  'data-test-id': x.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: r, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(A, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: r,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(A, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: r,
                                                allArtistsTitle: n,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var b = i(8487),
                L = i(9079);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': x.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(28631),
                T = i(33049),
                R = i(61912),
                I = i(36286),
                w = i.n(I);
            let O = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: w().tooltipContent, children: i.map((e) => (0, s.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, a.forwardRef)((e, t) => (0, s.jsx)(O, { forwardRef: t, ...e }));
            var D = i(10820),
                z = i(93510),
                F = i.n(z);
            let H = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, y.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(F().root, F().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, n.L)(() =>
                            (0, P.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, a.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(M, { artists: t, label: i })) : i;
                }),
                B = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: x,
                            variant: g = 'breakAll',
                            spoilerComponent: v,
                            ...y
                        } = e,
                        C = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: r, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                x = null == (s = e.withCustomTooltip) || s,
                                g = (0, a.useRef)(null),
                                [v, y] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: C },
                                } = (0, u.g)(),
                                k = ((!C || 1 === p.length) && _) || !_,
                                S = ((e, t) => {
                                    var i, s, l;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        a = null == (s = null == t ? void 0 : t.withLink) || s,
                                        n = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: r ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: a && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: l, visibleArtistsCount: v ? void 0 : r, withComposer: o, withLink: !!k && n, artistIdWithoutLink: c }),
                                f = h ? S.allArtistsTitle : '',
                                N = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: f,
                                withCustomTooltip: x,
                                withContextMenu: _,
                                labelRef: g,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!f && x && !_ && !C,
                                title: !f || x || _ ? void 0 : f,
                            };
                        })(y),
                        k = (0, n.L)(() =>
                            C.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(E, { spoilerClassName: r, spoilerArtistsCount: C.hiddenArtistsCount, handleOnSpoilerClick: C.handleOnSpoilerClick }),
                        ),
                        S = (0, s.jsx)(o.m_, {
                            referenceRef: C.labelRef,
                            enabled: C.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(g)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: C.title,
                                children: [
                                    C.groups.map((e) =>
                                        (0, s.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: x,
                                                allArtistsTitle: C.allArtistsTitle,
                                                withCustomTooltip: C.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    k,
                                ],
                            }),
                        });
                    return C.withContextMenu ? (0, s.jsx)(W, { labelRef: C.labelRef, artists: C.artists, label: S }) : S;
                });
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(25839),
                l = i(74631),
                r = i(71035),
                a = i(1466),
                n = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, l.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var s = i(27954),
                l = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: a,
                } = (0, s.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = a.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                n = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                _ = i(86869),
                m = i(4254),
                p = i(29481),
                h = i(85686),
                x = i(27954),
                g = i(53454),
                v = i.n(g);
            let y = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    k = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    S = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), C({ to: n.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, l.$)(v().root, i),
                            onClick: S,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(25839),
                l = i(33660),
                r = i(74631),
                a = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(42190);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === n.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, h, i]);
            };
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(74631),
                n = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                _ = i(67379),
                m = i(44031),
                p = i(87277),
                h = i(59450),
                x = i(84e3),
                g = i(97952),
                v = i(89192),
                y = i(53712),
                C = i(27954),
                k = i(44806),
                S = i(15270),
                f = i(23818),
                N = i(85686);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = i(27990),
                b = i.n(j);
            let L = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, C.g)(),
                    { contentRef: a } = (0, v.g)(),
                    n = (0, N.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, l.$)(b().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(S.L, { withBackwardFallback: '/', className: (0, l.$)(b().navigation, { [b().navigation_desktop]: !a }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, l.$)(b().content, { [b().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(f._V, { className: b().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: b().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: b().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: b().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: b().button,
                                        onClick: n,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: b().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var E = i(68854),
                P = i.n(E);
            let T = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, n.A)(),
                    f = (0, a.useContext)(C.P),
                    N = null == f ? void 0 : f.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    A = r(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: s } = (0, g.$)(),
                        l = (0, x.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let r = (0, _.F)({
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
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, i, s, l]);
                })(A);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, g.$)(),
                            s = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let l = (0, _.F)({
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
                                l && (0, p.bv)(e.evgenInstance, l);
                            }, [e, t, i, s]),
                        };
                    })(),
                    b = (0, a.useCallback)(() => {
                        (j(), (window.location.href = y.Z.main.href));
                    }, [j]),
                    { contentRef: E } = (0, v.g)();
                return N
                    ? (0, s.jsx)(L, { className: t, withBackwardControl: i })
                    : (0, s.jsxs)('div', {
                          className: (0, l.$)(P().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(P().navigation, { [P().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, l.$)(P().content, { [P().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, l.$)(P().title, P().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, l.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: b,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
        69292: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(25839),
                l = i(74631),
                r = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: g,
                            children: v,
                        } = e,
                        { formatMessage: y } = (0, r.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        74760: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(25839),
                l = i(82298),
                r = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, r.A)();
                return (0, s.jsx)(n.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        77869: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => T }));
            var s = i(25839),
                l = i(84059),
                r = i(82298),
                a = i(88204),
                n = i(74631),
                o = i(39004),
                c = i(61493),
                d = i(71035),
                u = i(49656),
                _ = i(4254),
                m = i(64715),
                p = i(1407),
                h = i(41707),
                x = i(20258),
                g = i(10322),
                v = i(21784),
                y = i(89192),
                C = i(30716),
                k = i(27954),
                S = i(60678),
                f = i(99401),
                N = i(26076),
                A = i(10603),
                j = i(19412),
                b = i(6968),
                L = i(37051),
                E = i.n(L);
            let P = (0, a.PA)((e) => {
                    var t, i, a;
                    let { id: L } = e,
                        {
                            kids: { kidsEditorialPlaylistSubpage: P },
                            settings: { isMobile: T },
                        } = (0, k.g)(),
                        R = (0, v.W)(),
                        { contentScrollRef: I, setContentScrollRef: w } = (0, y.g)(),
                        { formatMessage: O } = (0, o.A)(),
                        M = (0, d.c)((e) => {
                            P.getPlaylists({ page: e, pageSize: 20 });
                        });
                    (P.isNotFound && (0, l.notFound)(),
                        (0, n.useEffect)(
                            () => () => {
                                P.reset();
                            },
                            [P],
                        ));
                    let D = (0, u.L)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(f.w, { className: E().footer }) }) }));
                    if (
                        ((0, C.J)(P.isResolved),
                        (0, S.X)(P.pagesLoader, M),
                        P.isNeededToLoad && (0, n.use)(P.getData({ id: L, page: 0, pageSize: 20 })),
                        P.isSomethingWrong)
                    )
                        return (0, s.jsx)(m.SomethingWentWrong, {});
                    let z = P.isLoading ? 20 : null != (i = null == (t = P.pagesLoader.pager) ? void 0 : t.total) ? i : 0;
                    return (0, s.jsx)(g.n, {
                        pageId: x._Q.KIDS_EDITORIAL_PLAYLISTS,
                        children: (0, s.jsx)(p.h, {
                            scrollElement: I,
                            outerTitle: P.title,
                            children: (0, s.jsxs)('div', {
                                className: E().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_PLAYLISTS,
                                children: [
                                    (0, s.jsx)(A.Y, {
                                        variant: A.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: R.canBack,
                                        children: (0, s.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: P.title }),
                                    }),
                                    (0, s.jsx)(b.$, {
                                        context: { listAriaLabel: O({ id: 'mixes.playlists-list' }, { genreName: P.title || '' }) },
                                        className: (0, r.$)(E().scrollContainer, E().important),
                                        customComponents: D,
                                        itemContentCallback: (e) => {
                                            let t = P.playlists[e],
                                                i = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.playlist' }) });
                                            return t ? (0, s.jsx)(h.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, s.jsx)(j.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: z,
                                        onGetDataByPage: M,
                                        pageSize: 20,
                                        totalRequests: null != (a = P.pagesLoader.requestsCount) ? a : 0,
                                        listClassName: E().content,
                                        itemClassName: E().item,
                                        handleRef: w,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                T = () => {
                    let e = (0, l.useSearchParams)().get('id');
                    return (e || (0, l.notFound)(), (0, s.jsx)(P, { id: e }));
                };
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var s = i(25839),
                l = i(39004),
                r = i(3392);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, l.A)();
                return (0, s.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => r });
            var s = i(36484),
                l = i(62562);
            let r = () => (0, l.N)().get(s.Zf);
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        93510: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        94484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var s = i(25839),
                l = i(82298),
                r = i(88204),
                a = i(39004),
                n = i(93588),
                o = i(43354),
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
            let d = (e, t, i) => {
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
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(10959),
                m = i(89514);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(96433),
                x = i(27954),
                g = i(400),
                v = i.n(g),
                y = i(61493),
                C = i(4254),
                k = i(97522);
            let S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(k.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(k.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, s.jsx)(k.N, { target: '_blank', href: l, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(S, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, x.g)(),
                    { formatDate: l, formatMessage: r } = (0, a.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: r, language: n, tld: i.tld, year: p(l) });
                return (0, s.jsx)(S, { className: t, data: o });
            });
            let A = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: g } = (0, x.g)(),
                    { formatDate: y, formatMessage: C } = (0, a.A)(),
                    { isEnabled: k } = null != (t = (0, o.P)()) ? t : {},
                    { language: S } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: r } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [a, o, u];
                                return (i && 'ru' === r && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: a }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: n.$3,
                        tld: m.tld,
                        language: S,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: p(y),
                    });
                return (0, s.jsx)(N, { className: (0, l.$)({ [v().root_withOffsetForDeeplink]: k }, i), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6392, 7170, 6287, 2121, 3472, 9122, 3112, 9235, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 3257, 4324, 2038, 4163, 3246,
                3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 8372, 4475, 5056, 7358,
            ],
            () => e((e.s = 10678)),
        ),
            (_N_E = e.O()));
    },
]);
