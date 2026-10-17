(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7707],
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
            var r = i(25839),
                l = i(33660),
                s = i(74631),
                a = i(39004),
                n = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(27892);
            let m = (t) => {
                let { user: e } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, l.HO)(t), url: t.url, isPinned: !t.isPinned };
                    p(!0);
                    let a = await t.togglePin();
                    (p(!1),
                        a
                            ? i((0, r.jsx)(u.l, { playlist: s }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e.isAuthorized, _, t, i, m]);
            };
        },
        6968: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => v });
            var r = i(25839),
                l = i(82298),
                s = i(28631),
                a = i(74631);
            let n = (t) => {
                    let { style: e, forwardRef: i, context: l, ...s } = t,
                        a = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        n = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...e }, ref: i, ...s });
                },
                o = (0, a.forwardRef)((t, e) => (0, r.jsx)(n, { forwardRef: e, ...t }));
            var c = i(45300),
                d = i.n(c);
            let u = (t) => {
                    let { style: e, forwardRef: i, withFooter: s, withHeader: a, withForceScroll: n, ...o } = t;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...e },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((t, e) => (0, r.jsx)(u, { forwardRef: e, ...t }));
            var _ = i(10508),
                p = i(63257);
            let h = (t) => {
                    let {
                            pageSize: e,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: s = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = t,
                        [m, h] = (0, a.useState)(null),
                        v = (0, a.useMemo)(
                            () =>
                                (0, _.A)((t) => {
                                    if ((null == l || l(t), o.length > 0 && h(t), e && i)) {
                                        let r = Math.floor(t.endIndex / e) + 1,
                                            l = Math.floor(t.startIndex / e);
                                        for (let t = l; t < r; t++) i(t);
                                    }
                                }, s),
                            [s, l, e, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((t) => {
                                c(t);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: n, endReached: x, ...u });
                },
                v = (t) => {
                    let {
                            className: e,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: C,
                            debounceDurationInMs: k,
                            initialItemCount: f,
                            minInitialItemCount: g = 20,
                            handleRef: A,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...j
                        } = t,
                        [P, T] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, s.A)((t) => {
                                    T(t);
                                }, 100),
                            [],
                        ),
                        b = (0, a.useMemo)(() => {
                            var t, e;
                            return L
                                ? {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, L]),
                        I = f ? Math.min(f, g) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(d().root, { [d().root_scrolling]: P || S, [d().root_notScrolling]: !P && !S }, e),
                        'data-test-id': N,
                        children: [
                            L && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: b,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: _,
                                scrollerRef: A,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: E,
                                ...j,
                            }),
                            L && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        10959: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => l });
            var r = i(44806);
            let l = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: l, userRegion: s } = t;
                return 'ru' === s && e(r.z.WebNextFooterDisclaimer, 'on') ? i() : l();
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
            var r = i(25839),
                l = i(84059),
                s = i(8487),
                a = i(61493),
                n = i(71035),
                o = i(4071),
                c = i(4254),
                d = i(57024),
                u = i(36484),
                m = i(62562);
            let _ = (t) => {
                let { size: e = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: v, key: x, className: y } = t,
                    C = (0, l.useRouter)(),
                    k = (0, m.N)().get(u.QG),
                    f = (0, n.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), C.push(k.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: f,
                        className: y,
                        isBlock: v,
                        color: _,
                        variant: i,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        19410: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        19412: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => c });
            var r = i(25839),
                l = i(82298),
                s = i(61493),
                a = i(23976),
                n = i(40828),
                o = i.n(n);
            let c = (t) => {
                let {
                    isActive: e,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = t;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, l.$)(o().root, i),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(a.W, { isActive: e, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(a.W, { isActive: e, className: (0, l.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        m &&
                            (0, r.jsx)('div', {
                                className: (0, l.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(a.W, { isActive: e, className: (0, l.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        26076: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => a });
            var r = i(25839);
            i(93588);
            var l = i(400),
                s = i.n(l);
            let a = (t) => {
                let { children: e } = t;
                return (0, r.jsx)('footer', { className: s().empty });
            };
        },
        27892: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => a });
            var r = i(25839),
                l = i(35015),
                s = i(10546);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
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
            var r = i(25839),
                l = i(88204),
                s = i(84059),
                a = i(82298),
                n = i(8487),
                o = i(4254),
                c = i(16978),
                d = i(148),
                u = i.n(d);
            let m = (0, l.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(53712),
                p = i(27954);
            let h = (0, l.PA)((t) => {
                let { children: e, withRedirectToMainPage: i } = t,
                    { user: l } = (0, p.g)();
                return l.isAuthorized ? e : (i && (0, s.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
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
            i.d(e, { R: () => l });
            var r = i(25895);
            let l = (t) => (0, r.u)('/artist/:artistId', { params: { artistId: t } });
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
            i.d(e, { r: () => s });
            var r = i(74631),
                l = i(39004);
            let s = (t) => {
                let { formatMessage: e } = (0, l.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let r = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(r, ' ').concat(i);
                }, [e, t]);
            };
        },
        41707: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => Q });
            var r = i(25839),
                l = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                p = i(66738),
                h = i(86869),
                v = i(4254),
                x = i(56348),
                y = i(62948),
                C = i(1134),
                k = i(79367),
                f = i(29481),
                g = i(47009),
                A = i(34159),
                S = i(52512),
                N = i(30290),
                L = i(61561),
                E = i(85686),
                j = i(85743),
                P = i(50209),
                T = i(27954),
                R = i(74760),
                b = i(6323),
                I = i(64720),
                O = i(97522),
                w = i(41580),
                z = i(49438),
                D = i(71996),
                M = i(78437),
                H = i(41459),
                F = i(10820),
                Y = i(3210),
                B = i(11609),
                K = i(29872),
                U = i(56120),
                V = i(83014),
                W = i(44806),
                $ = i(16386),
                X = i(67303),
                q = i(59043);
            let G = (0, s.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: l, open: s, ...a } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, K.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: h,
                        user: v,
                    } = (0, T.g)(),
                    x = (0, y.K)(i),
                    f = (0, C.A)(i),
                    g = (0, A.F)(),
                    { formatMessage: S } = (0, n.A)(),
                    N = (0, k.P)(),
                    L = _.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    E = (0, Y.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, U.N)(s);
                let j = (0, u.c)(() => {
                    if (d) return void m();
                    N() || (h.openPlaylistTrailer(i.id), g(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: s,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: S({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        L && (0, r.jsx)(B.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : E }),
                        !p && (0, r.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)($.T, { onClick: x, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, r.jsx)(q.N, { onClick: j, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(15787),
                J = i.n(Z);
            let Q = (0, s.PA)((t) => {
                let { className: e, playlist: i, children: s, contentLinesCount: F, customDescription: Y, onCoverMouseDown: B } = t,
                    { ref: K, intersectionPropertyId: U } = (0, S.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, T.g)(),
                    { from: X, utmLink: q } = (0, N.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, j.z)(),
                    [ti, tr] = (0, a.useState)(!1),
                    [tl, ts] = (0, a.useState)(!1),
                    [ta, tn] = (0, a.useState)(!1),
                    to = (0, H.r)(i),
                    tc = (0, y.K)(i),
                    td = (0, C.A)(i),
                    tu = (0, f.N)(),
                    tm = (0, g.b)(),
                    t_ = (0, E.Z)(i.url),
                    tp = (0, A.F)(),
                    th = (0, k.P)(),
                    tv = (0, u.c)((t) => {
                        if ((t.stopPropagation(), th())) return void t.preventDefault();
                        (V.setUtmLink(q), V.openPlaylistTrailer(i.id), tp(o.DomainObjectType.Playlist, i.id));
                    }),
                    [tx, ty] = (0, a.useState)(!1),
                    { isPlaying: tC, togglePlay: tk } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tf = (0, u.c)(() => {
                        (tu({ to: o.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    tg = (0, u.c)((t) => {
                        (tf(), t_(t));
                    }),
                    tA = (0, L.N)(),
                    tS = (0, u.c)(() => {
                        if (!th()) {
                            if (tA) return void $.open();
                            (ti || tC || (tr(!0), null == te || te()), tk(), tm(!tC));
                        }
                    }),
                    tN = (0, u.c)(() => {
                        (tl || i.isLiked || (ts(!0), null == Q || Q()), tc());
                    }),
                    tL = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tE = (0, u.c)((t) => {
                        (tn(t), ty(t));
                    }),
                    tj = (0, a.useMemo)(() => {
                        var t;
                        return Y
                            ? (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: Y }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: J().artists, artists: i.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [Y, i]),
                    tP = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(J().likeButton, J().control),
                                    isLiked: i.isLiked,
                                    onClick: tN,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tT = (0, a.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, l.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tv },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tv, i]),
                    tR = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, l.$)(J().pinButton, J().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tb = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: tg,
                                    onMouseDown: B,
                                    children: [
                                        (0, r.jsx)(b.B, {
                                            className: J().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: to,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: ta || tx,
                                            className: J().controls,
                                            playControl: (0, r.jsx)(
                                                z.D,
                                                {
                                                    className: (0, l.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tS,
                                                    isPlaying: tC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tP,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tE,
                                                    open: ta,
                                                    onClick: tL,
                                                    className: (0, l.$)(J().menuButton, J().control),
                                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tR,
                                            trailerControl: tT,
                                        }),
                                    ],
                                }),
                            }),
                        [tg, B, i, to, ta, tx, tS, tC, tP, tE, tL, tR, tT],
                    ),
                    tI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: K,
                    'aria-label': to,
                    className: (0, l.$)(J().root, e),
                    title: (0, r.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(O.N, { className: J().titleLink, href: i.url, tabIndex: -1, onClick: tf, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: J().srTitleLink, href: i.url, onClick: tf, children: i.title }),
                    'data-intersection-property-id': U,
                    contentLinesCount: F,
                    view: tb,
                    description: tj,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tI &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        s,
                    ],
                });
            });
        },
        42190: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => a });
            var r = i(25839),
                l = i(35015),
                s = i(3163);
            let a = (t) => {
                let { playlist: e, closeToast: i } = t;
                return (0, r.jsx)(s.O, {
                    entityVariant: l.c.PLAYLIST,
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
            i.d(e, { H: () => l, P: () => s });
            var r = i(74631);
            let l = (0, r.createContext)(null),
                s = () => (0, r.useContext)(l);
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
            i.d(e, { Z: () => l });
            var r = i(25895);
            let l = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        56348: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => B });
            var r = i(25839),
                l = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(49656),
                o = i(3392),
                c = i(19410),
                d = i(71035),
                u = i(27954),
                m = i(39528);
            let _ = (t, e) => {
                let { withLink: i, separator: r } = e,
                    l = i && !t.various ? (0, m.R)(t.id) : null;
                return { artist: t, name: t.name, separator: r, link: l };
            };
            var p = i(94484),
                h = i.n(p),
                v = i(61493),
                x = i(4254),
                y = i(97522),
                C = i(39004),
                k = i(44031),
                f = i(29481),
                g = i(85686),
                A = i(85743),
                S = i(40207);
            let N = (0, s.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: l, captionSize: s = 'm', allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = t,
                        {
                            name: m,
                            link: _,
                            title: p,
                            ariaLabel: h,
                            tooltipText: N,
                            isTooltipEnabled: L,
                            handleNavigate: E,
                        } = ((t) => {
                            var e, i;
                            let { item: r, allArtistsTitle: l, withCustomTooltip: s } = t,
                                { formatMessage: a } = (0, C.A)(),
                                n = ((t, e) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: l } = t,
                                        s = r || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : s,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !r && l,
                                    };
                                })({ item: r, allArtistsTitle: l, withCustomTooltip: s }, a),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                m = (0, g.Z)(null != (i = null == (e = n.link) ? void 0 : e.href) ? i : n.artist.url),
                                { sendNavigateSearchFeedback: _ } = (0, A.z)(),
                                p = (0, f.N)(),
                                h = (0, d.c)((t) => {
                                    (c && o.isOpened && o.close(), m(t));
                                }),
                                v = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: r, fullscreenPlayer: l, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: a } = r;
                                    return (0, S.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), a.isOpened && (r.reset(), a.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: n.artist, callback: h }),
                                x = (0, d.c)((t) => {
                                    (p({ to: k.AppScreen.ArtistScreen }), null == _ || _(), v(t));
                                });
                            return { ...n, handleNavigate: x };
                        })({ item: e, allArtistsTitle: a, withCustomTooltip: n });
                    return _
                        ? (0, r.jsx)(y.N, {
                              ..._,
                              'aria-label': h,
                              className: i,
                              onClick: E,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: L,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: N,
                                  hoverSettings: c,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: l, children: m }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: L,
                              offsetOptions: 4,
                              placement: 'top',
                              text: N,
                              hoverSettings: c,
                              children: (0, r.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: l,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                L = (t) => {
                    let { group: e, linkClassName: i, captionClassName: l, captionSize: s, allArtistsTitle: n, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, r.jsx)(N, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: s,
                                allArtistsTitle: n,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, r.jsxs)(
                                    a.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, r.jsx)(N, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: s,
                                                allArtistsTitle: n,
                                                withCustomTooltip: o,
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
            var E = i(8487),
                j = i(9079);
            let P = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: s } = t;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(j.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(E.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var T = i(28631),
                R = i(33049),
                b = i(61912),
                I = i(36286),
                O = i.n(I);
            let w = (0, s.PA)((t) => {
                    let { label: e, artists: i, forwardRef: l } = t;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: l, children: e }),
                            (0, r.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((t) => (0, r.jsx)(b.V, { artist: t, className: O().artistItem }, t.id)) }),
                        ],
                    });
                }),
                z = (0, a.forwardRef)((t, e) => (0, r.jsx)(w, { forwardRef: e, ...t }));
            var D = i(10820),
                M = i(93510),
                H = i.n(M);
            let F = (0, s.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: s } = (0, C.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, l.$)(H().root, H().important),
                        label: e,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, r.jsx)(b.V, { artist: t }, t.id)),
                    });
                }),
                Y = (0, s.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: l } = t,
                        [s, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        m = (0, d.c)(() => {
                            let t = l.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        _ = (0, n.L)(() =>
                            (0, T.A)(() => {
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
                        return (s || c) && (!c || 1 !== e.length) ? (c ? (0, r.jsx)(F, { artists: e, label: i }) : (0, r.jsx)(z, { artists: e, label: i })) : i;
                }),
                B = (0, s.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: s,
                            linkClassName: m,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: y,
                            ...C
                        } = t,
                        k = ((t) => {
                            var e, i, r;
                            let { separator: l, visibleArtistsCount: s, withLink: n, withComposer: o, artistIdWithoutLink: c, withContextMenu: m } = t,
                                p = null != (e = t.artists) ? e : [],
                                h = null == (i = t.withAllArtistsTitle) || i,
                                v = null == (r = t.withCustomTooltip) || r,
                                x = (0, a.useRef)(null),
                                [y, C] = (0, a.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                f = ((!k || 1 === p.length) && m) || !m,
                                g = ((t, e) => {
                                    var i, r, l;
                                    let s = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        a = null == (r = null == e ? void 0 : e.withLink) || r,
                                        n = null != (l = null == e ? void 0 : e.separator) ? l : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(n),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: r } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => r || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: s, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: r, separator: l, isFirst: s } = e;
                                                return {
                                                    primary: _(t, { withLink: r, separator: s ? void 0 : l }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = l ? t.separator : '';
                                                        return _(t, { withLink: r, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: a && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: n, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(p, { separator: l, visibleArtistsCount: y ? void 0 : s, withComposer: o, withLink: !!f && n, artistIdWithoutLink: c }),
                                A = h ? g.allArtistsTitle : '',
                                S = (0, d.c)((t) => {
                                    (C(!0), t.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: x,
                                handleOnSpoilerClick: S,
                                isTooltipEnabled: !!A && v && !m && !k,
                                title: !A || v || m ? void 0 : A,
                            };
                        })(C),
                        f = (0, n.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, a.isValidElement)(y)
                                  ? y
                                  : (0, r.jsx)(P, { spoilerClassName: s, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        g = (0, r.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(x)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, e),
                                title: k.title,
                                children: [
                                    k.groups.map((t) =>
                                        (0, r.jsx)(
                                            L,
                                            {
                                                group: t,
                                                linkClassName: m,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    f,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, r.jsx)(Y, { labelRef: k.labelRef, artists: k.artists, label: g }) : g;
                });
        },
        57024: (t, e, i) => {
            'use strict';
            i.d(e, { C8: () => s, UC: () => a, dM: () => n, uV: () => o });
            var r = i(93690),
                l = i(58848);
            let s = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (t) => (t.uid ? 'authorized' : 'no-uid'),
                n = (t) => {
                    if (!(t instanceof r.m5) || !(0, l.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, l.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                o = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        58848: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => r });
            let r = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        61561: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => s });
            var r = i(27954),
                l = i(44806);
            let s = () => {
                var t, e;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: a,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (e = a.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (t = e.value) ? void 0 : t.closeListening) === 'on'
                );
            };
        },
        61912: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => C });
            var r = i(25839),
                l = i(82298),
                s = i(88204),
                a = i(74631),
                n = i(44031),
                o = i(61493),
                c = i(71035),
                d = i(23818),
                u = i(10820),
                m = i(86869),
                _ = i(4254),
                p = i(29481),
                h = i(85686),
                v = i(27954),
                x = i(53454),
                y = i.n(x);
            let C = (0, s.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    x = (0, h.Z)(e.url),
                    k = (0, p.N)(),
                    f = (0, a.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, r.jsx)(C, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    g = (0, c.c)((t) => {
                        (s.modal.isOpened && s.modal.close(), k({ to: n.AppScreen.ArtistScreen }), x(t));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, l.$)(y().root, i),
                            onClick: g,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
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
            var r = i(25839),
                l = i(33660),
                s = i(74631),
                a = i(39004),
                n = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(42190);
            let _ = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, p] = (0, s.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, s.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, l.HO)(t), url: t.url, isLiked: !t.isLiked };
                    p(!0);
                    let a = await t.toggleLike();
                    (p(!1),
                        a === n.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e.isAuthorized, _, t, h, i]);
            };
        },
        69292: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        70238: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { S: () => r }),
                (function (t) {
                    ((t.MUSIC = 'music'), (t.CHILDREN = 'children'));
                })(r || (r = {})));
        },
        71996: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => u });
            var r = i(25839),
                l = i(74631),
                s = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (t) => {
                    let {
                            variant: e,
                            withRipple: i,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: y,
                        } = t,
                        { formatMessage: C } = (0, s.A)(),
                        k = C({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: e,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, l.forwardRef)((t, e) => (0, r.jsx)(d, { forwardRef: e, ...t }));
        },
        74760: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => m });
            var r = i(25839),
                l = i(82298),
                s = i(39004),
                a = i(61493),
                n = i(4071),
                o = i(66738),
                c = i(4254),
                d = i(69292),
                u = i.n(d);
            let m = (t) => {
                let { className: e, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = t,
                    { formatNumber: p } = (0, s.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, l.$)(u().root, e),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        78437: (t, e, i) => {
            'use strict';
            i.d(e, { n: () => a });
            var r = i(25839),
                l = i(39004),
                s = i(3392);
            let a = (t) => {
                let { children: e } = t,
                    { formatMessage: i } = (0, l.A)();
                return (0, r.jsx)(s.m_, {
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
            i.d(e, { U: () => s });
            var r = i(36484),
                l = i(62562);
            let s = () => (0, l.N)().get(r.Zf);
        },
        89514: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            let r = () => ({ year: 'numeric' });
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
        99401: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => N });
            var r = i(25839),
                l = i(82298),
                s = i(88204),
                a = i(39004),
                n = i(93588),
                o = i(43354),
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
                    let { formatMessage: e, language: i, tld: r, year: l } = t;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let p = (t) => t(new Date(), (0, _.m)());
            var h = i(96433),
                v = i(27954),
                x = i(400),
                y = i.n(x),
                C = i(61493),
                k = i(4254),
                f = i(97522);
            let g = (t) => {
                    let { className: e, data: i } = t;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, e),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(f.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(f.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, r.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: y().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: l } = t;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, r.jsx)(f.N, { target: '_blank', href: l, className: y().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, r.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (t) => {
                    let { className: e, data: i } = t;
                    return (0, r.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, e),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, r.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(g, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, v.g)(),
                    { formatDate: l, formatMessage: s } = (0, a.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: s, language: n, tld: i.tld, year: p(l) });
                return (0, r.jsx)(g, { className: e, data: o });
            });
            let N = (0, s.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: s, location: _, user: x } = (0, v.g)(),
                    { formatDate: C, formatMessage: k } = (0, a.A)(),
                    { isEnabled: f } = null != (e = (0, o.P)()) ? e : {},
                    { language: g } = (0, h.h)(),
                    A = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: r, language: l, tld: s, userRegion: a, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: r, language: l, userRegion: s } = t,
                                    a = { id: c.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, l) },
                                    n = { id: c.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, l) },
                                    o = { id: c.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, l) },
                                    m = { id: c.HELP, title: e({ id: 'footer.links-help' }), url: d(c.HELP, r, l) },
                                    _ = [a, o, u];
                                return (i && 'ru' === s && _.push(n), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: r, language: l, tld: s, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: s, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => s.checkExperiment(t, e),
                        formatMessage: k,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: g,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(C),
                    });
                return (0, r.jsx)(S, { className: (0, l.$)({ [y().root_withOffsetForDeeplink]: f }, i), data: A });
            });
        },
        99670: (t, e, i) => {
            'use strict';
            var r;
            (i.d(e, { x: () => r }),
                (function (t) {
                    ((t.ASC = 'asc'), (t.DESC = 'desc'));
                })(r || (r = {})));
        },
    },
]);
