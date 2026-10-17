(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156, 1943, 4324, 7181],
    {
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => f });
            var i = r(25839),
                a = r(82298),
                n = r(74631),
                o = r(39004),
                l = r(8487),
                s = r(4071),
                c = r(66738),
                d = r(4254),
                u = r(51790),
                m = r(12558),
                h = r.n(m);
            let f = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, n.useRef)(null),
                    { formatMessage: f } = (0, o.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let v = (0, n.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: h().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: h().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(s.$, {
                                    ref: m,
                                    className: h().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': f({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: h().icon }),
                                }),
                            ],
                        }),
                    [f, t],
                );
                return (0, i.jsx)(u.$, { className: (0, a.$)(h().root, h().important), message: v, closeToast: r });
            };
        },
        1797: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(40207);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        3981: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 35910));
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => p });
            var i = r(25839),
                a = r(82298),
                n = r(28631),
                o = r(74631);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: a, ...n } = e,
                        o = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': o, style: { ...t }, ref: r, ...n });
                },
                s = (0, o.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = r(45300),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: o, withForceScroll: l, ...s } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...s,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var h = r(10508),
                f = r(63257);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, v] = (0, o.useState)(null),
                        p = (0, o.useMemo)(
                            () =>
                                (0, h.A)((e) => {
                                    if ((null == a || a(e), s.length > 0 && v(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) r(e);
                                    }
                                }, n),
                            [n, a, t, r, s],
                        );
                    (0, o.useEffect)(() => {
                        s.length > 0 && m && p(m);
                    }, s);
                    let g = (0, o.useMemo)(() => {
                        if (c)
                            return (0, h.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, i.jsx)(f.sN, { ref: d, rangeChanged: p, totalCount: l, endReached: g, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: h,
                            listClassName: f,
                            overscan: p = 700,
                            pageSize: g = 20,
                            totalCount: _,
                            totalRequests: b,
                            debounceDurationInMs: x,
                            initialItemCount: y,
                            minInitialItemCount: C = 20,
                            handleRef: j,
                            alwaysShowScrollbar: k = !1,
                            testId: A,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...N
                        } = e,
                        [T, L] = (0, o.useState)(!1),
                        R = (0, o.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        I = (0, o.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : s,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : s,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, b, S]),
                        E = y ? Math.min(y, C) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: T || k, [d().root_notScrolling]: !T && !k }, t),
                        'data-test-id': A,
                        children: [
                            S && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(v, {
                                overscan: p,
                                components: I,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: h,
                                scrollerRef: j,
                                totalCount: _,
                                pageSize: g,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: E,
                                shouldTriggerRangeChangedOn: w,
                                ...N,
                            }),
                            S && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        7361: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                o = r(39004),
                l = r(31860),
                s = r(91149),
                c = r(92942),
                d = r(27954),
                u = r(57549),
                m = r(63149);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: r } = (0, c.l)(),
                    [h, f] = (0, n.useState)(!1),
                    { formatMessage: v } = (0, o.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    f(!0);
                    let o = await e.toggleLike();
                    (f(!1),
                        o === l.f.OK
                            ? r((0, i.jsx)(m.T, { artist: n }), { containerId: s.u.INFO })
                            : r((0, i.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, t.isAuthorized, h, v, r]);
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
        13936: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        19412: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var i = r(25839),
                a = r(82298),
                n = r(61493),
                o = r(23976),
                l = r(40828),
                s = r.n(l);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: h = 3,
                    withSubcover: f,
                    radius: v = 'l',
                } = e;
                return (0, i.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(s().root, r),
                    'data-test-id': n.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        f && (0, i.jsx)(o.W, { isActive: t, className: s().subcover, radius: 'l' }),
                        (0, i.jsx)(o.W, { isActive: t, className: (0, a.$)(s().cover, l, { [s().cover_round]: c, [s().cover_withSubcover]: f }), radius: v }),
                        m &&
                            (0, i.jsx)('div', {
                                className: (0, a.$)(s().infoContainer, s()['content_linesCount_'.concat(h)], { [s().infoContainer_centered]: u }),
                                children: (0, i.jsx)(o.W, { isActive: t, className: (0, a.$)(s().title, { [s().title_withSubcover]: f }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => G });
            var i = r(25839),
                a = r(88204),
                n = r(39004),
                o = r(44031),
                l = r(61493),
                s = r(22939),
                c = r(71035),
                d = r(66738),
                u = r(10820),
                m = r(33660),
                h = r(74631),
                f = r(31860),
                v = r(91149),
                p = r(92942),
                g = r(27954),
                _ = r(57549),
                b = r(86869),
                x = r(69084),
                y = r(4254),
                C = r(51790),
                j = r(6323),
                k = r(24596),
                A = r.n(k);
            let S = (e) => {
                let { coverUri: t, title: r, isDisliked: a, closeToast: o } = e,
                    { formatMessage: l } = (0, n.A)(),
                    s = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, i.jsx)(C.$, {
                    closeToast: o,
                    message: (0, i.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, i.jsx)(x.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': s }) }),
                            (0, i.jsx)(b.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, i.jsx)(j.B, { className: A().image, src: t, alt: r, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, i.jsx)(y.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: s }),
                        ],
                    }),
                });
            };
            var w = r(7361),
                N = r(90613),
                T = r(3210),
                L = r(11609),
                R = r(79367),
                I = r(40110),
                E = r(20258),
                O = r(34159),
                z = r(30290),
                P = r(29872),
                B = r(56120),
                D = r(87201),
                W = r(83014),
                M = r(44806),
                F = r(55491),
                U = r(44851),
                $ = r(14240),
                K = r(56615),
                H = r(16386),
                q = r(67303),
                V = r(74682),
                X = r(59043),
                Z = r(2144),
                J = r(6304);
            let G = (0, a.PA)((e) => {
                var t, r, a;
                let { artist: b, onOpenChange: x, open: y, ...C } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: k } = (0, P.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: Y,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, N.A)(b),
                    er = (0, w.K)(b),
                    ei = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: r } = (0, p.l)(),
                            [a, o] = (0, h.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void r((0, i.jsx)(_.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            o(!0);
                            let s = await e.toggleDislike();
                            (o(!1),
                                s === f.f.OK
                                    ? r((0, i.jsx)(S, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: v.u.INFO })
                                    : r((0, i.jsx)(_.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(b),
                    ea = (0, O.F)(),
                    en = ''.concat(I.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: eo } = (0, n.A)(),
                    { utmLink: el } = (0, z.f)({ blockId: I.U.ARTIST, contextType: s.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: es, pathname: ec } = (0, $.b)('/artist/:artistId', { params: { artistId: null != (r = null == b ? void 0 : b.id) ? r : '' } }),
                    ed = (0, T.A)({ entityVariant: W.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == b ? void 0 : b.seeds) ? a : [],
                        pageIdForFrom: E._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    eh = (0, R.P)(),
                    ef = eo((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (j && Y.isAuthorized) return void k();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!eh()) {
                            if (j) return void k();
                            (null == b ? void 0 : b.id) && (Q.setUtmLink(el), Q.openArtistTrailer(b.id), ea(o.DomainObjectType.Artist, b.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        G.open(null == b ? void 0 : b.id);
                    });
                (0, B.N)(y);
                let e_ = { variant: F.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ec },
                    eb = ee.checkExperiment(M.z.WebEditorsFeatures, 'on'),
                    ex = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(M.z.WebNextArtistInfo, 'on'),
                    eC = !ee.checkExperiment(M.z.WebNextProductWithoutRecommendation, 'on');
                return (0, i.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: x,
                    ariaLabel: eo({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...C,
                    children: [
                        eb && (0, i.jsx)(J.WithOffline, { fallback: (0, i.jsx)(L.d, { entityVariant: W.D.ARTIST, adminUrl: ed }) }),
                        !A && (0, i.jsx)(J.WithOffline, { fallback: (0, i.jsx)(q.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, i.jsx)(J.WithOffline, {
                            fallback: (0, i.jsx)(H.T, {
                                onClick: er,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !Y.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        ex && (0, i.jsx)(J.WithOffline, { fallback: (0, i.jsx)(X.N, { onClick: ep }) }),
                        eC &&
                            (0, i.jsx)(J.WithOffline, {
                                fallback: (0, i.jsx)(Z.C, { onClick: ev, disabled: !(null == b ? void 0 : b.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: x }),
                            }),
                        (0, i.jsx)(V.H, { disabled: !b, shareLink: es, entityMeta: e_ }),
                        ey &&
                            (0, i.jsx)(J.WithOffline, {
                                fallback: (0, i.jsx)(u.Dr, {
                                    onClick: eg,
                                    icon: (0, i.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ef,
                                }),
                            }),
                        (0, i.jsx)(J.WithOffline, {
                            fallback: (0, i.jsx)(K.D, { onClick: ei, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        35910: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => B }));
            var i = r(25839),
                a = r(84059),
                n = r(74631),
                o = r(82298),
                l = r(88204),
                s = r(39004),
                c = r(61493),
                d = r(71035),
                u = r(4254),
                m = r(64715),
                h = r(84058),
                f = r(1407),
                v = r(20258),
                p = r(10322),
                g = r(21784),
                _ = r(89192),
                b = r(30716),
                x = r(80499),
                y = r(82706),
                C = r(27954),
                j = r(60678),
                k = r(99401),
                A = r(26076),
                S = r(10603),
                w = r(19412),
                N = r(6968),
                T = r(90250),
                L = r(43098),
                R = r.n(L);
            let I = (0, l.PA)((e) => {
                let { labelId: t, preloadedLabel: r, preloadedArtists: l } = e,
                    { id: L, name: I, type: E, artistsSubpage: O, reset: z, isNeededToLoad: P, getData: B } = (0, x.s)(y.n.LABEL),
                    {
                        settings: { isMobile: D },
                    } = (0, C.g)(),
                    { formatMessage: W } = (0, s.A)(),
                    { contentScrollRef: M, setContentScrollRef: F } = (0, _.g)(),
                    U = (0, g.W)(),
                    $ = W({ id: 'page.label-artists-header' }, { labelName: I }),
                    K = (0, d.c)((e) => {
                        O.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, j.X)(O.pagesLoader, K),
                    (0, n.useEffect)(
                        () => () => {
                            (z(), O.reset());
                        },
                        [z, O],
                    ),
                    O.isNotFound && (0, a.notFound)(),
                    (0, T.Q)({ id: Number(L), name: null != I ? I : '', type: null != E ? E : '' }, T.T.ARTISTS),
                    (0, b.J)(O.isResolved));
                let H = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(A.A, { children: (0, i.jsx)(k.w, { className: R().footer }) }) }), []),
                    q = W({ id: 'entity-names.label-artists-list' }),
                    V = [];
                if (
                    (O.isNeededToLoad && V.push(O.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: l })),
                    P && V.push(B({ labelId: Number(t), preloadedLabel: r, withLabelEntities: !1 })),
                    V.length && (0, n.use)(Promise.allSettled(V)),
                    O.isRejected && !O.isNotFound)
                )
                    return (0, i.jsx)(m.SomethingWentWrong, {});
                let X = O.isShimmerVisible ? 20 : O.totalCount;
                return (0, i.jsx)(p.n, {
                    pageId: v._Q.LABEL_ARTISTS,
                    children: (0, i.jsx)(f.h, {
                        scrollElement: M,
                        outerTitle: $,
                        children: (0, i.jsxs)('div', {
                            className: R().root,
                            'data-test-id': c.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, i.jsx)(S.Y, {
                                    variant: S.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: U.canBack,
                                    className: R().header,
                                    children: (0, i.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: $ }),
                                }),
                                (0, i.jsx)(N.$, {
                                    className: (0, o.$)(R().scrollContainer, R().important),
                                    listClassName: R().content,
                                    itemClassName: R().item,
                                    customComponents: H,
                                    itemContentCallback: (e) => {
                                        let t = O.items[e],
                                            r = W({ id: 'loading-messages.entity-is-loading' }, { entityName: W({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, i.jsx)(h.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, i.jsx)(w.V, { 'aria-label': r, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: K,
                                    pageSize: 20,
                                    totalRequests: O.requestsCount,
                                    handleRef: F,
                                    context: { listAriaLabel: q },
                                    isMobileLayout: D,
                                    useWindowScroll: D,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var E = r(23976),
                O = r(95772);
            let z = () => {
                let e = (0, g.W)(),
                    { formatMessage: t } = (0, s.A)(),
                    r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, i.jsx)(f.h, {
                    scrollElement: null,
                    children: (0, i.jsxs)('div', {
                        className: R().root,
                        children: [
                            (0, i.jsx)(S.Y, {
                                variant: S.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, i.jsx)(E.W, { className: R().shimmerTitle, radius: 'l' }),
                            }),
                            (0, i.jsx)('div', {
                                className: (0, o.$)(R().scrollContainer, R().important, R().shimmerScrollContainer),
                                children: (0, i.jsx)('div', {
                                    className: R().content,
                                    children: (0, i.jsx)(O.e, {
                                        isActive: !0,
                                        itemClassName: R().item,
                                        'aria-label': r,
                                        round: !0,
                                        centered: !0,
                                        linesCount: 4,
                                        count: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var P = r(61288);
            let B = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, P.L)(e)) || (0, a.notFound)(), (0, i.jsx)(n.Suspense, { fallback: (0, i.jsx)(z, {}), children: (0, i.jsx)(I, { labelId: e }) }));
            };
        },
        36808: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function r(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                r = t[0].split('-'),
                                i = 3 === r.length;
                            return { code: r[0], script: i ? r[1] : null, region: i ? r[2] : r[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = r),
                (e.exports.pick = function (e, t, i) {
                    if (((i = i || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = r(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            n = 0;
                        n < t.length;
                        n++
                    )
                        for (
                            var o = t[n],
                                l = o.code.toLowerCase(),
                                s = o.region ? o.region.toLowerCase() : o.region,
                                c = o.script ? o.script.toLowerCase() : o.script,
                                d = 0;
                            d < a.length;
                            d++
                        ) {
                            var u = a[d].code.toLowerCase(),
                                m = a[d].script ? a[d].script.toLowerCase() : a[d].script,
                                h = a[d].region ? a[d].region.toLowerCase() : a[d].region;
                            if (l === u && (i.loose || !c || c === m) && (i.loose || !s || s === h)) return e[d];
                        }
                    return null;
                }));
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
        43098: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                shimmerScrollContainer: 'LabelArtistsPage_shimmerScrollContainer__Znpy2',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
                shimmerTitle: 'LabelArtistsPage_shimmerTitle__hXk1g',
            };
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
        56107: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var i = r(36808),
                a = Object.defineProperty,
                n = (e, t, r) => (
                    ((e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class o {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (n(this, 'brandLangs'),
                        n(this, 'brandDefaultLang'),
                        n(this, 'regionLangs'),
                        n(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return i.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: i }) {
                    var a, n, o;
                    let l = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        s = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (n = null == l ? void 0 : l.langs) ? n : this.brandLangs,
                        c = null != (o = null == l ? void 0 : l.defaultLang) ? o : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: s, defaultLang: c, urlLang: t, cookieLang: r, acceptLangs: i });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: i, acceptLangs: a }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let n = null != a ? a : [],
                        o = i ? [i, ...n] : n,
                        l = this.intersect(o, e)[0];
                    return void 0 !== l ? l : t;
                }
            }
        },
        56615: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => d });
            var i = r(25839),
                a = r(88204),
                n = r(8487),
                o = r(61493),
                l = r(66738),
                s = r(10820),
                c = r(27954);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: r, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, i.jsx)(s.Dr, {
                    onClick: r,
                    className: d,
                    icon: (0, i.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, i.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var i = r(25839),
                a = r(74631),
                n = r(71035),
                o = r(1466),
                l = r(91149),
                s = r(92942),
                c = r(36159);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, s.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, n.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, i.jsx)(o.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        61561: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var i = r(27954),
                a = r(44806);
            let n = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: n },
                    experiments: o,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = o.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61943: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => y }), r(56107));
            function i(e, t, r) {
                return ((t = o(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var i,
                                a,
                                n,
                                o,
                                l = [],
                                s = !0,
                                c = !1;
                            try {
                                if (((n = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    s = !1;
                                } else for (; !(s = (i = n.call(r)).done) && (l.push(i.value), l.length !== t); s = !0);
                            } catch (e) {
                                ((c = !0), (a = e));
                            } finally {
                                try {
                                    if (!s && null != r.return && ((o = r.return()), Object(o) !== o)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return n(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
                return i;
            }
            function o(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(e, t || 'default');
                        if ('object' != typeof i) return i;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function l(e, t) {
                var r,
                    i,
                    a = c(e, t, 'get');
                return ((r = e), (i = a).get ? i.get.call(r) : i.value);
            }
            function s(e, t, r) {
                var i = c(e, t, 'set');
                return (
                    (function (e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = r;
                        }
                    })(e, i, r),
                    r
                );
            }
            function c(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function d(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function u(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function m(e, t, r) {
                (u(e, t), t.set(e, r));
            }
            function h(e, t) {
                (u(e, t), t.add(e));
            }
            var f = [
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
                    var r = a(t, 2),
                        i = r[0],
                        n = r[1],
                        o = e.lastIndexOf(i);
                    ~o && e.splice(o, 1, n);
                });
            })(f);
            var v = new WeakMap(),
                p = new WeakMap(),
                g = new WeakSet(),
                _ = new WeakSet();
            function b() {
                s(this, p, RegExp(l(this, v).join('|'), 'i'));
            }
            function x(e) {
                return l(this, v).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        h(this, _),
                        h(this, g),
                        m(this, v, { writable: !0, value: void 0 }),
                        m(this, p, { writable: !0, value: void 0 }),
                        s(this, v, e || f.slice()),
                        d(this, g, b).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var n = a(t, 2),
                                    o = n[0],
                                    l = n[1];
                                return (
                                    'function' == typeof l.value && Object.assign(e, i({}, o, { value: r[o].bind(r) })),
                                    'function' == typeof l.get &&
                                        Object.assign(
                                            e,
                                            i({}, o, {
                                                get: function () {
                                                    return r[o];
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
                                return new RegExp(l(this, p));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && l(this, p).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(l(this, p));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return l(this, v).filter(function (t) {
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
                                    l(this, v),
                                    t
                                        .filter(function (t) {
                                            return -1 === d(e, _, x).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    d(this, g, b).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = d(this, _, x).call(this, e[t]);
                                    r > -1 && l(this, v).splice(r, 1);
                                }
                                d(this, g, b).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || l(this, v));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            ((i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, o(i.key), i));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let y = 'funtech-lang';
        },
        63149: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => l });
            var i = r(25839),
                a = r(53712),
                n = r(35015),
                o = r(3163);
            let l = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(o.O, {
                    closeToast: r,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        71996: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(25839),
                a = r(74631),
                n = r(39004),
                o = r(61493),
                l = r(4071),
                s = r(66738),
                c = r(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: h,
                            iconClassName: f,
                            className: v,
                            forwardRef: p,
                            style: g,
                            children: _,
                        } = e,
                        { formatMessage: b } = (0, n.A)(),
                        x = b({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': x,
                        onClick: h,
                        ref: p,
                        icon: (0, i.jsx)(s.I, { variant: 'trailer', size: u, className: f }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': o.S7.TRAILER_BUTTON,
                        children: _,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        78437: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(25839),
                a = r(39004),
                n = r(3392);
            let o = (e) => {
                let { children: t } = e,
                    { formatMessage: r } = (0, a.A)();
                return (0, i.jsx)(n.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: r({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        80477: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => o });
            var i = r(25839),
                a = r(35015),
                n = r(10546);
            let o = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(n.k, {
                    closeToast: r,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var i = r(36484),
                a = r(62562);
            let n = () => (0, a.N)().get(i.Zf);
        },
        84058: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => F });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                o = r(74631),
                l = r(39004),
                s = r(44031),
                c = r(61493),
                d = r(22939),
                u = r(71035),
                m = r(49656),
                h = r(51246),
                f = r(66738),
                v = r(86869),
                p = r(4254),
                g = r(1797),
                _ = r(7361),
                b = r(90613),
                x = r(79367),
                y = r(29481),
                C = r(47009),
                j = r(34159),
                k = r(52512),
                A = r(30290),
                S = r(61561),
                w = r(85686),
                N = r(85743),
                T = r(50209),
                L = r(27954),
                R = r(6323),
                I = r(64720),
                E = r(97522),
                O = r(41580),
                z = r(49438),
                P = r(71996),
                B = r(78437),
                D = r(21971),
                W = r(13936),
                M = r.n(W);
            let F = (0, n.PA)((e) => {
                let { artist: t, className: r, children: n, contentLinesCount: W, topTitleElement: F, bottomTitleElement: U } = e,
                    { ref: $, intersectionPropertyId: K } = (0, k.n)(),
                    {
                        trailer: H,
                        user: q,
                        paywall: { modal: V },
                    } = (0, L.g)(),
                    { from: X, utmLink: Z } = (0, A.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: J } = (0, l.A)(),
                    [G, Q] = (0, o.useState)(!1),
                    [Y, ee] = (0, o.useState)(!1),
                    [et, er] = (0, o.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, N.z)(),
                    eo = (0, y.N)(),
                    el = (0, C.b)(),
                    es = (0, _.K)(t),
                    ec = (0, b.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: eh } = t,
                    ef = (0, w.Z)(t.url),
                    [ev, ep] = (0, o.useState)(!1),
                    eg = (0, j.F)(),
                    e_ = (0, x.P)(),
                    eb = (0, u.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (H.openArtistTrailer(t.id), eg(s.DomainObjectType.Artist, t.id));
                    }),
                    ex = (0, o.useMemo)(() => {
                        let e = J({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = eh ? J({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, eh, J]),
                    { isPlaying: ey, togglePlay: eC } = (0, T.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    ej = (0, g.S)({ artist: t, callback: ef }),
                    ek = (0, g.S)({ artist: t, callback: eC }),
                    eA = (0, u.c)((e) => {
                        (null == ea || ea(), eo({ to: s.AppScreen.ArtistScreen }), ej(e));
                    }),
                    eS = (0, S.N)(),
                    ew = (0, u.c)(() => {
                        if (!e_()) {
                            if (eS) return void V.open();
                            (G || ey || (Q(!0), null == en || en()), ek(), el(!ey));
                        }
                    }),
                    eN = (0, u.c)(() => {
                        (Y || eh || (ee(!0), null == ei || ei()), es());
                    }),
                    eT = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (er(e), ep(e));
                    }),
                    eR = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: et,
                                    onClick: eT,
                                    className: (0, a.$)(M().menuButton, M().control),
                                    size: 's',
                                    icon: (0, i.jsx)(f.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eT, eL, et],
                    ),
                    eI = (0, o.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                B.n,
                                {
                                    children: (0, i.jsx)(P.k, {
                                        className: (0, a.$)(M().trailerButton, M().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eb,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eb]),
                    eE = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(
                                O.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(M().pinButton, M().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eO = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, i.jsx)(
                                h.hg,
                                {
                                    isVisible: et || ev,
                                    className: M().controls,
                                    radius: 'round',
                                    playControl: (0, i.jsx)(
                                        z.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(M().playButton, M().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ew,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, i.jsx)(
                                        I.c,
                                        {
                                            className: (0, a.$)(M().likeButton, M().control),
                                            isLiked: eh,
                                            onClick: eN,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !q.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eE,
                                    trailerControl: eI,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ez = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(v.t, {
                                className: M().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: M().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, i.jsx)(R.B, {
                                            className: M().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ex,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eA, em, ex, t.isAvailable, eO],
                    );
                return (0, i.jsx)(h.MN, {
                    ref: $,
                    className: (0, a.$)(M().root, r),
                    textPosition: 'center',
                    'aria-label': ex,
                    title: (0, i.jsxs)(i.Fragment, {
                        children: [
                            F,
                            (0, i.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, i.jsx)(E.N, {
                                    className: M().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ex,
                                    onClick: eA,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, i.jsx)(E.N, { className: M().srTitleLink, href: t.url, onClick: eA, children: ex }),
                    'data-intersection-property-id': K,
                    contentLinesCount: W,
                    view: ez,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        90613: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                o = r(39004),
                l = r(91149),
                s = r(92942),
                c = r(27954),
                d = r(57549),
                u = r(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: r } = (0, s.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [h, f] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    f(!0);
                    let o = await e.togglePin();
                    (f(!1),
                        o
                            ? r((0, i.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : r((0, i.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, h, m, r]);
            };
        },
        95772: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => n });
            var i = r(25839),
                a = r(19412);
            let n = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: n,
                    centered: o,
                    withInfo: l,
                    count: s = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(s).keys()).map((e) =>
                    (0, i.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: r, round: n, centered: o, withInfo: l, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 7055, 7339, 6287, 3472, 2121, 2767, 3112, 8161, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 3257, 3580, 2038, 4163,
                3246, 3482, 6680, 2247, 7856, 8836, 820, 4434, 8649, 862, 6361, 5997, 4475, 5056, 7358,
            ],
            () => e((e.s = 3981)),
        ),
            (_N_E = e.O()));
    },
]);
