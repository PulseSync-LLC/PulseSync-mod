(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        3676: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => z });
            var r = i(32290),
                a = i(21916),
                l = i(55178),
                s = i(63618),
                n = i(96103),
                o = i(60900),
                d = i(21732),
                c = i(91027),
                u = i(71926),
                _ = i(64170),
                m = i(7474),
                v = i(7999),
                h = i(48922),
                x = i(22714),
                f = i(83808),
                C = i(83920),
                g = i(3796),
                A = i(49259),
                j = i(45066),
                b = i(57594),
                S = i(11262),
                p = i(58054),
                N = i(32468),
                k = i(74694),
                T = i(89020),
                y = i(45257),
                R = i(29973),
                I = i(15498),
                E = i.n(I);
            let L = (0, n.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: n } = e,
                    { id: I, name: L, type: w, artistsSubpage: P, reset: O, isNeededToLoad: B, getData: z } = (0, A.s)(j.n.LABEL),
                    {
                        settings: { isMobile: D },
                    } = (0, b.g)(),
                    { formatMessage: F } = (0, o.A)(),
                    { contentScrollRef: M, setContentScrollRef: U } = (0, C.g)(),
                    K = (0, f.W)(),
                    H = F({ id: 'page.label-artists-header' }, { labelName: L }),
                    W = (0, c.c)((e) => {
                        P.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                (0, S.X)(P.pagesLoader, W),
                    (0, l.useEffect)(
                        () => () => {
                            O(), P.reset();
                        },
                        [O, P],
                    ),
                    P.isNotFound && (0, a.notFound)(),
                    (0, R.Q)({ id: Number(I), name: null != L ? L : '', type: null != w ? w : '' }, R.T.ARTISTS),
                    (0, g.J)(P.isResolved);
                let $ = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(N.A, { children: (0, r.jsx)(p.w, { className: E().footer }) }) }), []),
                    V = F({ id: 'entity-names.label-artists-list' }),
                    q = [];
                if (
                    (P.isNeededToLoad && q.push(P.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: n })),
                    B && q.push(z({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    q.length && (0, l.use)(Promise.allSettled(q)),
                    P.isRejected && !P.isNotFound)
                )
                    return (0, r.jsx)(_.SomethingWentWrong, {});
                let X = P.isShimmerVisible ? 20 : P.totalCount;
                return (0, r.jsx)(x.n, {
                    pageId: h._Q.LABEL_ARTISTS,
                    children: (0, r.jsx)(v.h, {
                        scrollElement: M,
                        outerTitle: H,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            'data-test-id': d.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: K.canBack,
                                    className: E().header,
                                    children: (0, r.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: H }),
                                }),
                                (0, r.jsx)(y.$, {
                                    className: (0, s.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    customComponents: $,
                                    itemContentCallback: (e) => {
                                        let t = P.items[e],
                                            i = F({ id: 'loading-messages.entity-is-loading' }, { entityName: F({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(m.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(T.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: W,
                                    pageSize: 20,
                                    totalRequests: P.requestsCount,
                                    handleRef: U,
                                    context: { listAriaLabel: V },
                                    isMobileLayout: D,
                                    useWindowScroll: D,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var w = i(79856),
                P = i(50308);
            let O = () => {
                let e = (0, f.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(v.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, r.jsx)(k.Y, {
                                variant: k.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(w.W, { className: E().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, s.$)(E().scrollContainer, E().important, E().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: E().content,
                                    children: (0, r.jsx)(P.e, {
                                        isActive: !0,
                                        itemClassName: E().item,
                                        'aria-label': i,
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
            var B = i(17024);
            let z = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return (e && (0, B.L)(e)) || (0, a.notFound)(), (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(O, {}), children: (0, r.jsx)(L, { labelId: e }) });
            };
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                s = i(60900),
                n = i(63380),
                o = i(45477),
                d = i(75582),
                c = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                v = i(97755);
            let h = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                x = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, d.l)(),
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: v } = (0, s.A)();
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        m(!0);
                        let s = await e.toggleLike();
                        m(!1),
                            s === n.f.OK
                                ? i((0, r.jsx)(h, { artist: l }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, _, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(16172),
                d = i(21732),
                c = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                v = i(82586),
                h = i(86269),
                x = i(71926),
                f = i(91853),
                C = i(5942),
                g = i(70390),
                A = i(71735),
                j = i(47745),
                b = i(2969),
                S = i(54391),
                p = i(23352),
                N = i(72396),
                k = i(5537),
                T = i(84062),
                y = i(28999),
                R = i(90169),
                I = i(57594),
                E = i(11323),
                L = i(92744),
                w = i(61258),
                P = i(10180),
                O = i(90326),
                B = i(29268),
                z = i(34925),
                D = i(80528),
                F = i(42048),
                M = i.n(F);
            let U = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: F, topTitleElement: U, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: W } = (0, p.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, I.g)(),
                    { from: X, utmLink: J } = (0, N.f)({ contextId: t.id, contextType: c.K.Artist }),
                    { formatMessage: Q } = (0, n.A)(),
                    [G, Z] = (0, s.useState)(!1),
                    [Y, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: el } = (0, y.z)(),
                    es = (0, j.N)(),
                    en = (0, b.b)(),
                    eo = (0, C.K)(t),
                    ed = (0, g.A)(t),
                    { id: ec, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, T.Z)(t.url),
                    [eh, ex] = (0, s.useState)(!1),
                    ef = (0, S.F)(),
                    eC = (0, A.P)(),
                    eg = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        $.openArtistTrailer(t.id), ef(o.ky.Artist, t.id);
                    }),
                    eA = (0, s.useMemo)(() => {
                        let e = Q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? Q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, Q]),
                    { isPlaying: ej, togglePlay: eb } = (0, R.D)({
                        playContextParams: { contextData: { type: c.K.Artist, meta: { id: Number(ec) }, from: X, utmLink: J }, loadContextMeta: !0 },
                    }),
                    eS = (0, f.S)({ artist: t, callback: ev }),
                    ep = (0, f.S)({ artist: t, callback: eb }),
                    eN = (0, u.c)((e) => {
                        null == ea || ea(), es({ to: o.QT.ArtistScreen }), eS(e);
                    }),
                    ek = (0, k.N)(),
                    eT = (0, u.c)(() => {
                        if (!eC()) {
                            if (ek) return void q.open();
                            G || ej || (Z(!0), null == el || el()), ep(), en(!ej);
                        }
                    }),
                    ey = (0, u.c)(() => {
                        Y || em || (ee(!0), null == er || er()), eo();
                    }),
                    eR = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eI = (0, u.c)((e) => {
                        ei(e), ex(e);
                    }),
                    eE = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: et,
                                    onClick: eR,
                                    className: (0, a.$)(M().menuButton, M().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': d.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eI, et],
                    ),
                    eL = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(M().trailerButton, M().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eg,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eg]),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                P.O,
                                { onClick: ed, isPinned: t.isPinned, className: (0, a.$)(M().pinButton, M().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ed],
                    ),
                    eP = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || eh,
                                    className: M().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        O.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(M().playButton, M().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: ej,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(M().likeButton, M().control),
                                            isLiked: em,
                                            onClick: ey,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eE,
                                    pinControl: ew,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: M().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': d.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: M().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, r.jsx)(E.B, {
                                            className: M().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [eN, e_, eA, t.isAvailable, eP],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: H,
                    className: (0, a.$)(M().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(w.N, {
                                    className: M().titleLink,
                                    href: t.url,
                                    'aria-label': eA,
                                    onClick: eN,
                                    'data-test-id': d.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(w.N, { href: t.url, onClick: eN, children: eA }),
                    'data-intersection-property-id': W,
                    contentLinesCount: F,
                    view: eO,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => c });
            var r = i(32290),
                a = i(55178),
                l = i(91027),
                s = i(71730),
                n = i(45477),
                o = i(75582),
                d = i(49399);
            let c = (e, t) => {
                let { notify: i, dismiss: c } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    _ = (0, l.c)(() => {
                        var i;
                        c({ notificationId: u.current }), (u.current = 0);
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === d.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            });
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(s.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [c, _, i, e.rejectedPagesCount]);
            };
        },
        15498: (e) => {
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
        18600: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3676));
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                l = i(60900),
                s = i(21732),
                n = i(63423),
                o = i(82586),
                d = i(59576);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: c,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: v,
                            className: h,
                            forwardRef: x,
                            style: f,
                            children: C,
                        } = e,
                        { formatMessage: g } = (0, l.A)(),
                        A = g({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: c,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': A,
                        onClick: m,
                        ref: x,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: _,
                        'data-intersection-property-id': d.N,
                        style: f,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(32290),
                a = i(60900),
                l = i(70280);
            let s = (e) => {
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
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => c });
            var r = i(32290),
                a = i(96103),
                l = i(39407),
                s = i(21732),
                n = i(82586),
                o = i(19740),
                d = i(57594);
            let c = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: c } = e,
                    { user: u } = (0, d.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: c,
                    icon: (0, r.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
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
        42048: (e) => {
            e.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
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
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(32290),
                a = i(63618),
                l = i(8055),
                s = i(55178);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        n = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: i, ...l });
                },
                o = (0, s.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var d = i(39684),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: s, withForceScroll: n, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: s, [c().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                v = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: d,
                            ...c
                        } = e,
                        [u, _] = (0, s.useState)(null),
                        h = (0, s.useMemo)(
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
                    (0, s.useEffect)(() => {
                        o.length > 0 && u && h(u);
                    }, o);
                    let x = (0, s.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, r.jsx)(v.sN, { rangeChanged: h, totalCount: n, endReached: x, ...c });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: v,
                            overscan: x = 700,
                            pageSize: f = 20,
                            totalCount: C,
                            totalRequests: g,
                            debounceDurationInMs: A,
                            initialItemCount: j,
                            minInitialItemCount: b = 20,
                            handleRef: S,
                            alwaysShowScrollbar: p = !1,
                            testId: N,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...y
                        } = e,
                        [R, I] = (0, s.useState)(!1),
                        E = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return k
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
                        }, [i, g, k]),
                        w = j ? Math.min(j, b) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(c().root, { [c().root_scrolling]: R || p, [c().root_notScrolling]: !R && !p }, t),
                        'data-test-id': N,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: x,
                                components: L,
                                listClassName: v,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: C,
                                pageSize: f,
                                onPageHandler: n,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: T,
                                ...y,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(32290),
                a = i(89020);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: l,
                    centered: s,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: d,
                    linesCount: c,
                    'aria-label': u,
                    withSubcover: _,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: c, className: i, round: l, centered: s, withInfo: n, withSubcover: _, 'aria-label': u, shimmerClassName: d },
                        e,
                    ),
                );
            };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => s });
            var r = i(29222),
                a = i(55178);
            let l = (0, a.createContext)(null);
            function s() {
                let e = (0, a.useContext)(l);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                s = i(60900),
                n = i(45477),
                o = i(75582),
                d = i(57594),
                c = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, v] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, r.jsx)(m, { artist: l }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [e, t.isAuthorized, _, u, i]);
                };
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
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(32290),
                a = i(63618),
                l = i(55178),
                s = i(60900),
                n = i(39407),
                o = i(63423),
                d = i(82586),
                c = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, l.useRef)(null),
                    { formatMessage: v } = (0, s.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, r.jsx)(c.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(d.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(32290),
                a = i(96103),
                l = i(60900),
                s = i(16172),
                n = i(21732),
                o = i(71483),
                d = i(91027),
                c = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                v = i(63380),
                h = i(45477),
                x = i(75582),
                f = i(57594),
                C = i(90357),
                g = i(86269),
                A = i(74196),
                j = i(71926),
                b = i(58534),
                S = i(11323),
                p = i(356),
                N = i.n(p);
            let k = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(A.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(g.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(S.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(j.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var T = i(5942),
                y = i(70390),
                R = i(9017),
                I = i(65477),
                E = i(71735),
                L = i(37862),
                w = i(48922),
                P = i(54391),
                O = i(72396),
                B = i(46200),
                z = i(27120),
                D = i(43564),
                F = i(95134),
                M = i(79406),
                U = i(51675),
                K = i(48027),
                H = i(89384),
                W = i(38223),
                $ = i(58237),
                V = i(56367),
                q = i(4914),
                X = i(83755),
                J = i(25160),
                Q = i(4008);
            let G = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: g, onOpenChange: A, open: j, ...b } = e,
                    { shouldShowBuySubscriptionModal: S, showBuySubscriptionModal: p } = (0, B.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: G },
                        trailer: Z,
                        user: Y,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, y.A)(g),
                    ei = (0, T.K)(g),
                    er = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, s] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(C.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let l = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            s(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(k, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, r.jsx)(C.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR });
                        });
                    })(g),
                    ea = (0, P.F)(),
                    el = ''.concat(L.U.ARTIST, '-').concat(null == g ? void 0 : g.id),
                    { formatMessage: es } = (0, l.A)(),
                    { utmLink: en } = (0, O.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == g ? void 0 : g.id }),
                    { shareLink: eo, pathname: ed } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == g ? void 0 : g.id) ? i : '' } }),
                    ec = (0, R.A)({ entityVariant: F.D.ARTIST, urlParams: { id: null == g ? void 0 : g.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == g ? void 0 : g.seeds) ? a : [],
                        pageIdForFrom: w._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == g ? void 0 : g.id,
                    }),
                    em = (0, E.P)(),
                    ev = es((null == g ? void 0 : g.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, d.c)(() => {
                        if (S && Y.isAuthorized) return void p();
                        eu || e_();
                    }),
                    ex = (0, d.c)(() => {
                        if (!em()) {
                            if (S) return void p();
                            (null == g ? void 0 : g.id) && (Z.setUtmLink(en), Z.openArtistTrailer(g.id), ea(s.ky.Artist, g.id));
                        }
                    }),
                    ef = (0, d.c)(() => {
                        G.open(null == g ? void 0 : g.id);
                    });
                (0, z.N)(j);
                let eC = { variant: U.Y.ARTIST, id: null == g ? void 0 : g.id, title: null == g ? void 0 : g.name, path: ed },
                    eg = ee.checkExperiment(M.z.WebEditorsFeatures, 'on'),
                    eA = null == g || null == (t = g.trailer) ? void 0 : t.isAvailable,
                    ej = ee.checkExperiment(M.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: j,
                    onOpenChange: A,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...b,
                    children: [
                        eg && (0, r.jsx)(Q.WithOffline, { fallback: (0, r.jsx)(I.d, { entityVariant: F.D.ARTIST, adminUrl: ec }) }),
                        !N && (0, r.jsx)(Q.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == g ? void 0 : g.isPinned }) }),
                        (0, r.jsx)(Q.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == g ? void 0 : g.isLiked,
                                disabled: !Y.isAuthorized || !(null == g ? void 0 : g.isAvailable),
                            }),
                        }),
                        eA && (0, r.jsx)(Q.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ex }) }),
                        (0, r.jsx)(Q.WithOffline, {
                            fallback: (0, r.jsx)(J.C, { onClick: eh, disabled: !(null == g ? void 0 : g.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !g, shareLink: eo, entityMeta: eC }),
                        ej &&
                            (0, r.jsx)(Q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, r.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(Q.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == g ? void 0 : g.isDisliked, disabled: !(null == g ? void 0 : g.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        80556: (e) => {
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
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => o });
            var r = i(32290),
                a = i(63618),
                l = i(79856),
                s = i(80556),
                n = i.n(s);
            let o = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: o,
                    'aria-label': d,
                    centered: c,
                    withInfo: u = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: v = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(n().root, i),
                    children: [
                        m && (0, r.jsx)(l.W, { isActive: t, className: n().subcover, radius: 'l' }),
                        (0, r.jsx)(l.W, { isActive: t, className: (0, a.$)(n().cover, s, { [n().cover_round]: o, [n().cover_withSubcover]: m }), radius: v }),
                        u &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(n().infoContainer, n()['content_linesCount_'.concat(_)], { [n().infoContainer_centered]: c }),
                                children: (0, r.jsx)(l.W, { isActive: t, className: (0, a.$)(n().title, { [n().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(19383);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 7231, 6347, 9763, 3183, 6639, 7258, 6561, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 3266, 6477, 7275, 2586, 8347,
                7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 8828, 4220, 9562, 7358,
            ],
            () => e((e.s = 18600)),
        ),
            (_N_E = e.O());
    },
]);
