(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1943, 4324, 7062, 7181],
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
            i.d(t, { A: () => p });
            var r = i(25839),
                a = i(33660),
                l = i(74631),
                n = i(39004),
                s = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: p } = (0, n.A)(),
                    [m, h] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let l = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let n = await e.togglePin();
                    (h(!1),
                        n
                            ? i((0, r.jsx)(u.l, { playlist: l }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [t.isAuthorized, m, e, i, p]);
            };
        },
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var r = i(25839),
                a = i(82298),
                l = i(74631),
                n = i(39004),
                s = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                p = i(12558),
                m = i.n(p);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, l.useRef)(null),
                    { formatMessage: h } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let _ = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(m().root, m().important), message: _, closeToast: i });
            };
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var r = i(25839),
                a = i(82298),
                l = i(28631),
                n = i(74631);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: n, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                p = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                h = i(63257);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, _] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && _(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && p && g(p);
                    }, o);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(h.sN, { ref: d, rangeChanged: g, totalCount: s, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: f,
                            totalRequests: y,
                            debounceDurationInMs: x,
                            initialItemCount: C,
                            minInitialItemCount: b = 20,
                            handleRef: k,
                            alwaysShowScrollbar: L = !1,
                            testId: A,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...N
                        } = e,
                        [E, P] = (0, n.useState)(!1),
                        w = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, j]),
                        R = C ? Math.min(C, b) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: E || L, [d().root_notScrolling]: !E && !L }, t),
                        'data-test-id': A,
                        children: [
                            j && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(_, {
                                overscan: g,
                                components: T,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: m,
                                scrollerRef: k,
                                totalCount: f,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: S,
                                ...N,
                            }),
                            j && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: l } = e;
                return 'ru' === l && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
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
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(25839),
                a = i(82298),
                l = i(61493),
                n = i(23976),
                s = i(40828),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: p = !0,
                    linesCount: m = 3,
                    withSubcover: h,
                    radius: _ = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        h && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: h }), radius: _ }),
                        p &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: h }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(25839);
            i(93588);
            var a = i(400),
                l = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        27892: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(25839),
                a = i(35015),
                l = i(10546);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        36286: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        36808: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function i(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                i = t[0].split('-'),
                                r = 3 === i.length;
                            return { code: i[0], script: r ? i[1] : null, region: r ? i[2] : i[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = i),
                (e.exports.pick = function (e, t, r) {
                    if (((r = r || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = i(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    i = 3 === t.length;
                                return { code: t[0], script: i ? t[1] : null, region: i ? t[2] : t[1] };
                            }),
                            l = 0;
                        l < t.length;
                        l++
                    )
                        for (
                            var n = t[l],
                                s = n.code.toLowerCase(),
                                o = n.region ? n.region.toLowerCase() : n.region,
                                c = n.script ? n.script.toLowerCase() : n.script,
                                d = 0;
                            d < a.length;
                            d++
                        ) {
                            var u = a[d].code.toLowerCase(),
                                p = a[d].script ? a[d].script.toLowerCase() : a[d].script,
                                m = a[d].region ? a[d].region.toLowerCase() : a[d].region;
                            if (s === u && (r.loose || !c || c === p) && (r.loose || !o || o === m)) return e[d];
                        }
                    return null;
                }));
        },
        39528: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            var r = i(25895);
            let a = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
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
            i.d(t, { r: () => l });
            var r = i(74631),
                a = i(39004);
            let l = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
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
            var r = i(25839),
                a = i(82298),
                l = i(88204),
                n = i(74631),
                s = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                p = i(49656),
                m = i(51246),
                h = i(66738),
                _ = i(86869),
                g = i(4254),
                v = i(56348),
                f = i(62948),
                y = i(1134),
                x = i(79367),
                C = i(29481),
                b = i(47009),
                k = i(34159),
                L = i(52512),
                A = i(30290),
                j = i(61561),
                S = i(85686),
                N = i(85743),
                E = i(50209),
                P = i(27954),
                w = i(74760),
                T = i(6323),
                R = i(64720),
                I = i(97522),
                O = i(41580),
                z = i(49438),
                M = i(71996),
                D = i(78437),
                F = i(41459),
                H = i(10820),
                B = i(3210),
                Y = i(11609),
                W = i(29872),
                U = i(56120),
                $ = i(83014),
                V = i(44806),
                K = i(16386),
                G = i(67303),
                X = i(59043);
            let q = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: l, ...n } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: p } = (0, W.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: h },
                        trailer: _,
                        user: g,
                    } = (0, P.g)(),
                    v = (0, f.K)(i),
                    C = (0, y.A)(i),
                    b = (0, k.F)(),
                    { formatMessage: L } = (0, s.A)(),
                    A = (0, x.P)(),
                    j = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    S = (0, B.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, U.N)(l);
                let N = (0, u.c)(() => {
                    if (d) return void p();
                    A() || (_.openPlaylistTrailer(i.id), b(o.DomainObjectType.Playlist, i.id));
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
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, r.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: l,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: L({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        j && (0, r.jsx)(Y.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : S }),
                        !h && (0, r.jsx)(G.L, { onClick: C, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(K.T, { onClick: v, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(15787),
                Z = i.n(J);
            let Q = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: H, customDescription: B, onCoverMouseDown: Y } = e,
                    { ref: W, intersectionPropertyId: U } = (0, L.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: K },
                    } = (0, P.g)(),
                    { from: G, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, s.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, N.z)(),
                    [ei, er] = (0, n.useState)(!1),
                    [ea, el] = (0, n.useState)(!1),
                    [en, es] = (0, n.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, f.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, C.N)(),
                    ep = (0, b.b)(),
                    em = (0, S.Z)(i.url),
                    eh = (0, k.F)(),
                    e_ = (0, x.P)(),
                    eg = (0, u.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        ($.setUtmLink(X), $.openPlaylistTrailer(i.id), eh(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, ef] = (0, n.useState)(!1),
                    { isPlaying: ey, togglePlay: ex } = (0, E.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: G, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eb = (0, u.c)((e) => {
                        (eC(), em(e));
                    }),
                    ek = (0, j.N)(),
                    eL = (0, u.c)(() => {
                        if (!e_()) {
                            if (ek) return void K.open();
                            (ei || ey || (er(!0), null == et || et()), ex(), ep(!ey));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (ea || i.isLiked || (el(!0), null == Q || Q()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eS = (0, u.c)((e) => {
                        (es(e), ef(e));
                    }),
                    eN = (0, n.useMemo)(() => {
                        var e;
                        return B
                            ? (0, r.jsx)(g.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    eE = (0, p.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                R.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eg },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eg, i]),
                    ew = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                O.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eT = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(_.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eb,
                                    onMouseDown: Y,
                                    children: [
                                        (0, r.jsx)(T.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: en || ev,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                z.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eL,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eE,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eS,
                                                    open: en,
                                                    onClick: ej,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ew,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eb, Y, i, eo, en, ev, eL, ey, eE, eS, ej, ew, eP],
                    ),
                    eR = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: W,
                    'aria-label': eo,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(g.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(I.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: eC, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(I.N, { className: Z().srTitleLink, href: i.url, onClick: eC, children: i.title }),
                    'data-intersection-property-id': U,
                    contentLinesCount: H,
                    view: eT,
                    description: eN,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eR &&
                            (0, r.jsx)(w.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        l,
                    ],
                });
            });
        },
        42190: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var r = i(25839),
                a = i(35015),
                l = i(3163);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(l.O, {
                    entityVariant: a.c.PLAYLIST,
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
            i.d(t, { H: () => a, P: () => l });
            var r = i(74631);
            let a = (0, r.createContext)(null),
                l = () => (0, r.useContext)(a);
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
        45329: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(47127);
            let a = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        53454: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        56107: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => n });
            var r = i(36808),
                a = Object.defineProperty,
                l = (e, t, i) => (
                    ((e, t, i) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[t] = i)))(e, 'symbol' != typeof t ? t + '' : t, i),
                    i
                );
            class n {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (l(this, 'brandLangs'),
                        l(this, 'brandDefaultLang'),
                        l(this, 'regionLangs'),
                        l(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return r.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: i, acceptLangs: r }) {
                    var a, l, n;
                    let s = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        o = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (l = null == s ? void 0 : s.langs) ? l : this.brandLangs,
                        c = null != (n = null == s ? void 0 : s.defaultLang) ? n : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: o, defaultLang: c, urlLang: t, cookieLang: i, acceptLangs: r });
                }
                intersect(e, t) {
                    let i = new Set(t);
                    return e.filter((e) => i.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: i, cookieLang: r, acceptLangs: a }) {
                    if ('string' == typeof i && e.includes(i)) return i;
                    let l = null != a ? a : [],
                        n = r ? [r, ...l] : l,
                        s = this.intersect(n, e)[0];
                    return void 0 !== s ? s : t;
                }
            }
        },
        56348: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => Y });
            var r = i(25839),
                a = i(82298),
                l = i(88204),
                n = i(74631),
                s = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                p = i(39528);
            let m = (e, t) => {
                let { withLink: i, separator: r } = t,
                    a = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: a };
            };
            var h = i(94484),
                _ = i.n(h),
                g = i(61493),
                v = i(4254),
                f = i(97522),
                y = i(39004),
                x = i(44031),
                C = i(29481),
                b = i(85686),
                k = i(85743),
                L = i(40207);
            let A = (0, l.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: a, captionSize: l = 'm', allArtistsTitle: n, withCustomTooltip: s, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: h,
                            ariaLabel: _,
                            tooltipText: A,
                            isTooltipEnabled: j,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: a, withCustomTooltip: l } = e,
                                { formatMessage: n } = (0, y.A)(),
                                s = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: a } = e,
                                        l = r || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : l,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: l,
                                        isTooltipEnabled: !r && a,
                                    };
                                })({ item: r, allArtistsTitle: a, withCustomTooltip: l }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, b.Z)(null != (i = null == (t = s.link) ? void 0 : t.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, k.z)(),
                                h = (0, C.N)(),
                                _ = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                g = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: n } = r;
                                    return (0, L.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: _ }),
                                v = (0, d.c)((e) => {
                                    (h({ to: x.AppScreen.ArtistScreen }), null == m || m(), g(e));
                                });
                            return { ...s, handleNavigate: v };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: s });
                    return m
                        ? (0, r.jsx)(f.N, {
                              ...m,
                              'aria-label': _,
                              className: i,
                              onClick: S,
                              title: h,
                              'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: j,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: a, children: p }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: j,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: c,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: a,
                                  title: h,
                                  'data-test-id': g.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                j = (e) => {
                    let { group: t, linkClassName: i, captionClassName: a, captionSize: l, allArtistsTitle: s, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(A, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: l,
                                allArtistsTitle: s,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(A, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: l,
                                                allArtistsTitle: s,
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
            var S = i(8487),
                N = i(9079);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(_().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': g.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(28631),
                w = i(33049),
                T = i(61912),
                R = i(36286),
                I = i.n(R);
            let O = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, w.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: I().tooltipContent, children: i.map((e) => (0, r.jsx)(T.V, { artist: e, className: I().artistItem }, e.id)) }),
                        ],
                    });
                }),
                z = (0, n.forwardRef)((e, t) => (0, r.jsx)(O, { forwardRef: t, ...e }));
            var M = i(10820),
                D = i(93510),
                F = i.n(D);
            let H = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, y.A)();
                    return (0, r.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, a.$)(F().root, F().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(T.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [l, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, s.L)(() =>
                            (0, P.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, n.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(H, { artists: t, label: i }) : (0, r.jsx)(z, { artists: t, label: i })) : i;
                }),
                Y = (0, l.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: l,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: g,
                            variant: v = 'breakAll',
                            spoilerComponent: f,
                            ...y
                        } = e,
                        x = ((e) => {
                            var t, i, r;
                            let { separator: a, visibleArtistsCount: l, withLink: s, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                h = null != (t = e.artists) ? t : [],
                                _ = null == (i = e.withAllArtistsTitle) || i,
                                g = null == (r = e.withCustomTooltip) || r,
                                v = (0, n.useRef)(null),
                                [f, y] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: x },
                                } = (0, u.g)(),
                                C = ((!x || 1 === h.length) && p) || !p,
                                b = ((e, t) => {
                                    var i, r, a;
                                    let l = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (r = null == t ? void 0 : t.withLink) || r,
                                        s = null != (a = null == t ? void 0 : t.separator) ? a : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(s),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: l, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: a, isFirst: l } = t;
                                                return {
                                                    primary: m(e, { withLink: r, separator: l ? void 0 : a }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = a ? e.separator : '';
                                                        return m(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(h, { separator: a, visibleArtistsCount: f ? void 0 : l, withComposer: o, withLink: !!C && s, artistIdWithoutLink: c }),
                                k = _ ? b.allArtistsTitle : '',
                                L = (0, d.c)((e) => {
                                    (y(!0), e.preventDefault());
                                });
                            return {
                                artists: h,
                                groups: b.groups,
                                hiddenArtistsCount: b.hiddenArtistsCount,
                                allArtistsTitle: k,
                                withCustomTooltip: g,
                                withContextMenu: p,
                                labelRef: v,
                                handleOnSpoilerClick: L,
                                isTooltipEnabled: !!k && g && !p && !x,
                                title: !k || g || p ? void 0 : k,
                            };
                        })(y),
                        C = (0, s.L)(() =>
                            x.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(f)
                                  ? f
                                  : (0, r.jsx)(E, { spoilerClassName: l, spoilerArtistsCount: x.hiddenArtistsCount, handleOnSpoilerClick: x.handleOnSpoilerClick }),
                        ),
                        b = (0, r.jsx)(o.m_, {
                            referenceRef: x.labelRef,
                            enabled: x.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: x.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(_().root, _()['root_variant_'.concat(v)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, t),
                                title: x.title,
                                children: [
                                    x.groups.map((e) =>
                                        (0, r.jsx)(
                                            j,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: h,
                                                captionSize: g,
                                                allArtistsTitle: x.allArtistsTitle,
                                                withCustomTooltip: x.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return x.withContextMenu ? (0, r.jsx)(B, { labelRef: x.labelRef, artists: x.artists, label: b }) : b;
                });
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(25839),
                a = i(74631),
                l = i(71035),
                n = i(1466),
                s = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    p = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: p }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        61032: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => V }));
            var r = i(25839),
                a = i(74631),
                l = i(84059),
                n = i(82298),
                s = i(88204),
                o = i(39004),
                c = i(61493),
                d = i(4254),
                u = i(64715),
                p = i(1407),
                m = i(41707),
                h = i(20258),
                _ = i(10322),
                g = i(21784),
                v = i(89192),
                f = i(30716),
                y = i(80499),
                x = i(82706),
                C = i(27954),
                b = i(60678),
                k = i(99401),
                L = i(26076),
                A = i(10603),
                j = i(19412),
                S = i(6968),
                N = i(94540),
                E = i(61732),
                P = i(12234),
                w = i(89221),
                T = i(41242),
                R = i(27935),
                I = i(41016),
                O = i(80461),
                z = i(95445),
                M = i(71121);
            async function D(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: l, host: n } = t,
                    s = await (0, w.W)(i),
                    o = e.title.fullTitle,
                    c = s({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = (0, M.f)({ genreTitle: o, messageFormatter: s }),
                    u = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(n)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, R.i)({
                        ogTitle: (0, T.N)(o),
                        ogDescription: d,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: s({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, I.H)({ cardType: O.W.APP, title: c, url: null != a ? a : '', appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, P.X)({
                        additional: { tld: l, url: null != a ? a : '', fullUrl: null != r ? r : '', host: n },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var F = i(45329),
                H = i(75003),
                B = i.n(H);
            let Y = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { playlistsSubpage: s } = (0, y.s)(x.n.GENRE),
                    {
                        settings: { isMobile: P },
                    } = (0, C.g)(),
                    { formatMessage: w } = (0, o.A)(),
                    { contentScrollRef: T, setContentScrollRef: R } = (0, v.g)(),
                    I = (0, g.W)(),
                    O = (0, a.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: N.cM });
                        },
                        [s, t],
                    );
                ((0, b.X)(s.pagesLoader, O),
                    (0, a.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, l.notFound)(),
                    (0, f.J)(s.isResolved),
                    ((e) => {
                        (0, a.useEffect)(() => {
                            e &&
                                D(
                                    ((e) => {
                                        var t, i, r;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            playlists: e.items.map(F.J),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, E.j)(e);
                                });
                        }, [e]);
                    })(s));
                let z = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(L.A, { children: (0, r.jsx)(k.w, { className: B().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, a.use)(s.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: N.cM })), s.isSomethingWrong))
                    return (0, r.jsx)(u.SomethingWentWrong, {});
                let M = s.isShimmerVisible ? 20 : s.totalCount;
                return (0, r.jsx)(_.n, {
                    pageId: h._Q.GENRE_PLAYLISTS,
                    children: (0, r.jsx)(p.h, {
                        scrollElement: T,
                        outerTitle: s.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: B().root,
                            'data-test-id': c.Xk.genre.GENRE_PLAYLISTS_PAGE,
                            children: [
                                (0, r.jsx)(A.Y, {
                                    variant: A.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: I.canBack,
                                    children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, r.jsx)(S.$, {
                                    className: (0, n.$)(B().scrollContainer, B().important),
                                    customComponents: z,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            i = w({ id: 'loading-messages.entity-is-loading' }, { entityName: w({ id: 'entity-names.playlist' }) });
                                        return t ? (0, r.jsx)(m.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(j.V, { 'aria-label': i });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: O,
                                    pageSize: N.cM,
                                    totalRequests: s.requestsCount,
                                    listClassName: B().content,
                                    itemClassName: B().item,
                                    handleRef: R,
                                    context: { listAriaLabel: w({ id: 'mixes.playlists-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: P,
                                    useWindowScroll: P,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var W = i(23976),
                U = i(95772);
            let $ = () => {
                    let e = (0, g.W)(),
                        { formatMessage: t } = (0, o.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) });
                    return (0, r.jsx)(p.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: B().root,
                            children: [
                                (0, r.jsx)(A.Y, {
                                    variant: A.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(W.W, { className: B().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', {
                                    className: (0, n.$)(B().scrollContainer, B().important, B().shimmerScrollContainer),
                                    children: (0, r.jsx)('div', {
                                        className: B().content,
                                        children: (0, r.jsx)(U.e, { isActive: !0, itemClassName: B().item, 'aria-label': i, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = () => {
                    let e = (0, l.useSearchParams)().get('metatagId');
                    return (e || (0, l.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)($, {}), children: (0, r.jsx)(Y, { metatagId: e }) }));
                };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(27954),
                a = i(44806);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61912: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => y });
            var r = i(25839),
                a = i(82298),
                l = i(88204),
                n = i(74631),
                s = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                p = i(86869),
                m = i(4254),
                h = i(29481),
                _ = i(85686),
                g = i(27954),
                v = i(53454),
                f = i.n(v);
            let y = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, g.g)(),
                    v = (0, _.Z)(t.url),
                    x = (0, h.N)(),
                    C = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    b = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), x({ to: s.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(f().root, i),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(p.t, {
                                    radius: 'round',
                                    className: f().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: f().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        61943: (e, t, i) => {
            'use strict';
            (i.d(t, { s: () => C }), i(56107));
            function r(e, t, i) {
                return ((t = n(t)) in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != i) {
                            var r,
                                a,
                                l,
                                n,
                                s = [],
                                o = !0,
                                c = !1;
                            try {
                                if (((l = (i = i.call(e)).next), 0 === t)) {
                                    if (Object(i) !== i) return;
                                    o = !1;
                                } else for (; !(o = (r = l.call(i)).done) && (s.push(r.value), s.length !== t); o = !0);
                            } catch (e) {
                                ((c = !0), (a = e));
                            } finally {
                                try {
                                    if (!o && null != i.return && ((n = i.return()), Object(n) !== n)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return l(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === i && e.constructor && (i = e.constructor.name), 'Map' === i || 'Set' === i)) return Array.from(e);
                            if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return l(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, r = Array(t); i < t; i++) r[i] = e[i];
                return r;
            }
            function n(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var r = i.call(e, t || 'default');
                        if ('object' != typeof r) return r;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function s(e, t) {
                var i,
                    r,
                    a = c(e, t, 'get');
                return ((i = e), (r = a).get ? r.get.call(i) : r.value);
            }
            function o(e, t, i) {
                var r = c(e, t, 'set');
                return (
                    (function (e, t, i) {
                        if (t.set) t.set.call(e, i);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = i;
                        }
                    })(e, r, i),
                    i
                );
            }
            function c(e, t, i) {
                if (!t.has(e)) throw TypeError('attempted to ' + i + ' private field on non-instance');
                return t.get(e);
            }
            function d(e, t, i) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return i;
            }
            function u(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function p(e, t, i) {
                (u(e, t), t.set(e, i));
            }
            function m(e, t) {
                (u(e, t), t.add(e));
            }
            var h = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var i = a(t, 2),
                        r = i[0],
                        l = i[1],
                        n = e.lastIndexOf(r);
                    ~n && e.splice(n, 1, l);
                });
            })(h);
            var _ = new WeakMap(),
                g = new WeakMap(),
                v = new WeakSet(),
                f = new WeakSet();
            function y() {
                o(this, g, RegExp(s(this, _).join('|'), 'i'));
            }
            function x(e) {
                return s(this, _).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var i = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        m(this, f),
                        m(this, v),
                        p(this, _, { writable: !0, value: void 0 }),
                        p(this, g, { writable: !0, value: void 0 }),
                        o(this, _, e || h.slice()),
                        d(this, v, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return i.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var l = a(t, 2),
                                    n = l[0],
                                    s = l[1];
                                return (
                                    'function' == typeof s.value && Object.assign(e, r({}, n, { value: i[n].bind(i) })),
                                    'function' == typeof s.get &&
                                        Object.assign(
                                            e,
                                            r({}, n, {
                                                get: function () {
                                                    return i[n];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(s(this, g));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && s(this, g).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(s(this, g));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return s(this, _).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    s(this, _),
                                    t
                                        .filter(function (t) {
                                            return -1 === d(e, f, x).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    d(this, v, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var i = d(this, f, x).call(this, e[t]);
                                    i > -1 && s(this, _).splice(i, 1);
                                }
                                d(this, v, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || s(this, _));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            ((r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, n(r.key), r));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let C = 'funtech-lang';
        },
        62948: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(25839),
                a = i(33660),
                l = i(74631),
                n = i(39004),
                s = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                p = i(42190);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, h] = (0, l.useState)(!1),
                    { formatMessage: _ } = (0, n.A)();
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    h(!0);
                    let n = await e.toggleLike();
                    (h(!1),
                        n === s.f.OK
                            ? i((0, r.jsx)(p.T, { playlist: l }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, _, i]);
            };
        },
        69292: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                a = i(74631),
                l = i(39004),
                n = i(61493),
                s = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: p,
                            onClick: m,
                            iconClassName: h,
                            className: _,
                            forwardRef: g,
                            style: v,
                            children: f,
                        } = e,
                        { formatMessage: y } = (0, l.A)(),
                        x = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: _,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: m,
                        ref: g,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: h }),
                        disabled: p,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: f,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        74760: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => p });
            var r = i(25839),
                a = i(82298),
                l = i(39004),
                n = i(61493),
                s = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let p = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: p, ariaLabel: m } = e,
                    { formatNumber: h } = (0, l.A)();
                return (0, r.jsx)(s.$, {
                    className: (0, a.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(d) }),
                });
            };
        },
        75003: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                shimmerScrollContainer: 'GenrePlaylistsPage_shimmerScrollContainer__3kUkA',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
                shimmerTitle: 'GenrePlaylistsPage_shimmerTitle__s4_Kt',
            };
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                a = i(39004),
                l = i(3392);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        79939: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 61032));
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(36484),
                a = i(62562);
            let l = () => (0, a.N)().get(r.Zf);
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
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
        94540: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => s, I7: () => o, K$: () => n, cM: () => d, fZ: () => a, tA: () => l, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                l = 315,
                n = 170,
                s = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        95772: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(25839),
                a = i(19412);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: l,
                    centered: n,
                    withInfo: s,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: p,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: l, centered: n, withInfo: s, withSubcover: p, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var r = i(25839),
                a = i(82298),
                l = i(88204),
                n = i(39004),
                s = i(93588),
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
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var p = i(10959),
                m = i(89514);
            let h = (e) => e(new Date(), (0, m.m)());
            var _ = i(96433),
                g = i(27954),
                v = i(400),
                f = i.n(v),
                y = i(61493),
                x = i(4254),
                C = i(97522);
            let b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: f().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: a, className: f().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: a, formatMessage: l } = (0, n.A)(),
                    { language: s } = (0, _.h)(),
                    o = u({ formatMessage: l, language: s, tld: i.tld, year: h(a) });
                return (0, r.jsx)(b, { className: t, data: o });
            });
            let A = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: m, user: v } = (0, g.g)(),
                    { formatDate: y, formatMessage: x } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: b } = (0, _.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: l } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    m = [n, o, u];
                                return (i && 'ru' === l && m.push(s), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: n }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: l, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: s.$3,
                        tld: m.tld,
                        language: b,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(y),
                    });
                return (0, r.jsx)(L, { className: (0, a.$)({ [f().root_withOffsetForDeeplink]: C }, i), data: k });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6392, 7170, 6287, 2121, 3472, 9122, 3112, 1952, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 3257, 3580, 2038, 4163,
                3246, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 8372, 5382, 4475, 5056, 7358,
            ],
            () => e((e.s = 79939)),
        ),
            (_N_E = e.O()));
    },
]);
