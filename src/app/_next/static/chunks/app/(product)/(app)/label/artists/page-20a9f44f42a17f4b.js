(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(88800),
                a = i(37770);
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
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: l, centered: n, withInfo: s, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(72288),
                a = i(97956);
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(88800),
                a = i(65724),
                l = i(53548),
                n = i(2058),
                s = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, l.useRef)(null),
                    { formatMessage: v } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        9590: (e) => {
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
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => M });
            var r = i(88800),
                a = i(65724),
                l = i(84961),
                n = i(53548),
                s = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                _ = i(29832),
                v = i(52300),
                h = i(7555),
                f = i(29504),
                x = i(91959),
                C = i(64207),
                g = i(77455),
                p = i(5407),
                b = i(96527),
                A = i(76675),
                j = i(25557),
                S = i(28830),
                k = i(84384),
                N = i(4795),
                T = i(78940),
                y = i(55693),
                R = i(39079),
                I = i(72288),
                E = i(81877),
                L = i(49738),
                w = i(91292),
                P = i(56862),
                O = i(16704),
                B = i(56446),
                z = i(36207),
                D = i(43161),
                U = i(93434),
                F = i.n(U);
            let M = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: U, topTitleElement: M, bottomTitleElement: W } = e,
                    { ref: K, intersectionPropertyId: H } = (0, S.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, I.g)(),
                    { from: X, utmLink: J } = (0, k.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, s.A)(),
                    [G, Q] = (0, n.useState)(!1),
                    [Y, ee] = (0, n.useState)(!1),
                    [et, ei] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: el } = (0, y.z)(),
                    en = (0, b.N)(),
                    es = (0, A.b)(),
                    eo = (0, C.K)(t),
                    ec = (0, g.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, T.Z)(t.url),
                    [eh, ef] = (0, n.useState)(!1),
                    ex = (0, j.F)(),
                    eC = (0, p.P)(),
                    eg = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        ($.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    ep = (0, n.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, Z]),
                    { isPlaying: eb, togglePlay: eA } = (0, R.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: J }, loadContextMeta: !0 },
                    }),
                    ej = (0, x.S)({ artist: t, callback: ev }),
                    eS = (0, x.S)({ artist: t, callback: eA }),
                    ek = (0, u.c)((e) => {
                        (null == ea || ea(), en({ to: o.AppScreen.ArtistScreen }), ej(e));
                    }),
                    eN = (0, N.N)(),
                    eT = (0, u.c)(() => {
                        if (!eC()) {
                            if (eN) return void q.open();
                            (G || eb || (Q(!0), null == el || el()), eS(), es(!eb));
                        }
                    }),
                    ey = (0, u.c)(() => {
                        (Y || e_ || (ee(!0), null == er || er()), eo());
                    }),
                    eR = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (ei(e), ef(e));
                    }),
                    eE = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: et,
                                    onClick: eR,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eI, et],
                    ),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eg,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eg]),
                    ew = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                P.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eP = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eh,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        O.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: eb,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: e_,
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
                    eO = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: ek,
                                    children: [
                                        (0, r.jsx)(E.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ep,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [ek, em, ep, t.isAvailable, eP],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': ep,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            M,
                            (0, r.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(w.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ep,
                                    onClick: ek,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            W,
                        ],
                    }),
                    srTitle: (0, r.jsx)(w.N, { className: F().srTitleLink, href: t.url, onClick: ek, children: ep }),
                    'data-intersection-property-id': H,
                    contentLinesCount: U,
                    view: eO,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(88800),
                a = i(2058),
                l = i(17610);
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
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(88800),
                a = i(65724),
                l = i(17392),
                n = i(19994),
                s = i(9590),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: v,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        v && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: v }), radius: h }),
                        m &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: v }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(88800),
                a = i(84961),
                l = i(2058),
                n = i(92716),
                s = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                v = i(79390),
                h = i(29595),
                f = i(74965),
                x = i(72288),
                C = i(66943),
                g = i(7555),
                p = i(73170),
                b = i(29504),
                A = i(59304),
                j = i(81877),
                S = i(85074),
                k = i.n(S);
            let N = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: s } = (0, l.A)(),
                    o = s(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(A.$, {
                    closeToast: n,
                    message: (0, r.jsxs)('div', {
                        className: k().message,
                        children: [
                            (0, r.jsx)(p.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(g.t, {
                                className: k().cover,
                                radius: 'round',
                                children: (0, r.jsx)(j.B, { className: k().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(b.HL, { className: k().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var T = i(64207),
                y = i(77455),
                R = i(48749),
                I = i(22505),
                E = i(5407),
                L = i(64284),
                w = i(12816),
                P = i(25557),
                O = i(84384),
                B = i(9618),
                z = i(95210),
                D = i(47964),
                U = i(46936),
                F = i(97956),
                M = i(98953),
                W = i(32721),
                K = i(18130),
                H = i(56117),
                $ = i(93091),
                V = i(27817),
                q = i(74064),
                X = i(15425),
                J = i(81066),
                Z = i(64546);
            let G = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: g, onOpenChange: p, open: b, ...A } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: S } = (0, B.q)(),
                    {
                        settings: { isMobile: k },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: Y,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, y.A)(g),
                    ei = (0, T.K)(g),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, f.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: s } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(C.h, { error: s({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let l = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(N, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, r.jsx)(C.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(g),
                    ea = (0, P.F)(),
                    el = ''.concat(L.U.ARTIST, '-').concat(null == g ? void 0 : g.id),
                    { formatMessage: en } = (0, l.A)(),
                    { utmLink: es } = (0, O.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == g ? void 0 : g.id }),
                    { shareLink: eo, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == g ? void 0 : g.id) ? i : '' } }),
                    ed = (0, R.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == g ? void 0 : g.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == g ? void 0 : g.seeds) ? a : [],
                        pageIdForFrom: w._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == g ? void 0 : g.id,
                    }),
                    e_ = (0, E.P)(),
                    ev = en((null == g ? void 0 : g.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (j && Y.isAuthorized) return void S();
                        eu || em();
                    }),
                    ef = (0, c.c)(() => {
                        if (!e_()) {
                            if (j) return void S();
                            (null == g ? void 0 : g.id) && (Q.setUtmLink(es), Q.openArtistTrailer(g.id), ea(n.DomainObjectType.Artist, g.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        G.open(null == g ? void 0 : g.id);
                    });
                (0, z.N)(b);
                let eC = { variant: M.Y.ARTIST, id: null == g ? void 0 : g.id, title: null == g ? void 0 : g.name, path: ec },
                    eg = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    ep = null == g || null == (t = g.trailer) ? void 0 : t.isAvailable,
                    eb = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eA = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: k,
                    offsetOptions: 10,
                    open: b,
                    onOpenChange: p,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: s.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...A,
                    children: [
                        eg && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(I.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !k && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == g ? void 0 : g.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == g ? void 0 : g.isLiked,
                                disabled: !Y.isAuthorized || !(null == g ? void 0 : g.isAvailable),
                            }),
                        }),
                        ep && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ef }) }),
                        eA &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(J.C, { onClick: eh, disabled: !(null == g ? void 0 : g.isAvailable), variant: W.I.ARTIST, onOpenMenuChange: p }),
                            }),
                        (0, r.jsx)(q.H, { disabled: !g, shareLink: eo, entityMeta: eC }),
                        eb &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': s.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(H.D, { onClick: er, isDisliked: null == g ? void 0 : g.isDisliked, disabled: !(null == g ? void 0 : g.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        50660: (e) => {
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
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                a = i(4370),
                l = i(15077),
                n = i(42729);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: l.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(88800),
                a = i(53548),
                l = i(29993),
                n = i(9492),
                s = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, l.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(88800),
                a = i(84961),
                l = i(88969),
                n = i(17392),
                s = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(s.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                a = i(53548),
                l = i(2058),
                n = i(17392),
                s = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: h,
                            forwardRef: f,
                            style: x,
                            children: C,
                        } = e,
                        { formatMessage: g } = (0, l.A)(),
                        p = g({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': p,
                        onClick: _,
                        ref: f,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                a = i(96706),
                l = i(53548),
                n = i(2058),
                s = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, l.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let l = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let n = await e.toggleLike();
                    (v(!1),
                        n === s.f.OK
                            ? i((0, r.jsx)(m.T, { artist: l }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(88800),
                a = i(15077),
                l = i(33719);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var r = i(4086),
                a = i(41928),
                l = i(44084);
            let n = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof l.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, i), i);
                    })((0, a.N)().get(r.Zf));
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => s, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            l = a.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, i) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function s(e, t) {
                n(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                l = i(53548),
                n = i(2058),
                s = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [_, v] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (_) return;
                    let l = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let n = await e.togglePin();
                    (v(!1),
                        n
                            ? i((0, r.jsx)(u.l, { artist: l }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => f });
            var r = i(88800),
                a = i(65724),
                l = i(61013),
                n = i(53548);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(16434),
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
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                v = i(75151);
            let h = (e) => {
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
                        [m, h] = (0, n.useState)(null),
                        f = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && f(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(v.sN, { ref: d, rangeChanged: f, totalCount: s, endReached: x, ...u });
                },
                f = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: v,
                            overscan: f = 700,
                            pageSize: x = 20,
                            totalCount: C,
                            totalRequests: g,
                            debounceDurationInMs: p,
                            initialItemCount: b,
                            minInitialItemCount: A = 20,
                            handleRef: j,
                            alwaysShowScrollbar: S = !1,
                            testId: k,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...y
                        } = e,
                        [R, I] = (0, n.useState)(!1),
                        E = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, g, N]),
                        w = b ? Math.min(b, A) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': k,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: f,
                                components: L,
                                listClassName: v,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: j,
                                totalCount: C,
                                pageSize: x,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: p,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: T,
                                ...y,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        83012: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 90387));
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        90387: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => z }));
            var r = i(88800),
                a = i(53548),
                l = i(58390),
                n = i(65724),
                s = i(84961),
                o = i(2058),
                c = i(17392),
                d = i(29993),
                u = i(29504),
                m = i(32596),
                _ = i(21256),
                v = i(69630),
                h = i(12816),
                f = i(59844),
                x = i(46422),
                C = i(44230),
                g = i(37670),
                p = i(34961),
                b = i(53892),
                A = i(72288),
                j = i(54320),
                S = i(86790),
                k = i(60266),
                N = i(93317),
                T = i(37770),
                y = i(79418),
                R = i(64709),
                I = i(50660),
                E = i.n(I);
            let L = (0, s.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: s } = e,
                    { id: I, name: L, type: w, artistsSubpage: P, reset: O, isNeededToLoad: B, getData: z } = (0, p.s)(b.n.LABEL),
                    {
                        settings: { isMobile: D },
                    } = (0, A.g)(),
                    { formatMessage: U } = (0, o.A)(),
                    { contentScrollRef: F, setContentScrollRef: M } = (0, C.g)(),
                    W = (0, x.W)(),
                    K = U({ id: 'page.label-artists-header' }, { labelName: L }),
                    H = (0, d.c)((e) => {
                        P.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, j.X)(P.pagesLoader, H),
                    (0, a.useEffect)(
                        () => () => {
                            (O(), P.reset());
                        },
                        [O, P],
                    ),
                    P.isNotFound && (0, l.notFound)(),
                    (0, R.Q)({ id: Number(I), name: null != L ? L : '', type: null != w ? w : '' }, R.T.ARTISTS),
                    (0, g.J)(P.isResolved));
                let $ = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(k.A, { children: (0, r.jsx)(S.w, { className: E().footer }) }) }), []),
                    V = U({ id: 'entity-names.label-artists-list' }),
                    q = [];
                if (
                    (P.isNeededToLoad && q.push(P.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: s })),
                    B && q.push(z({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    q.length && (0, a.use)(Promise.allSettled(q)),
                    P.isRejected && !P.isNotFound)
                )
                    return (0, r.jsx)(m.SomethingWentWrong, {});
                let X = P.isShimmerVisible ? 20 : P.totalCount;
                return (0, r.jsx)(f.n, {
                    pageId: h._Q.LABEL_ARTISTS,
                    children: (0, r.jsx)(v.h, {
                        scrollElement: F,
                        outerTitle: K,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            'data-test-id': c.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: W.canBack,
                                    className: E().header,
                                    children: (0, r.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: K }),
                                }),
                                (0, r.jsx)(y.$, {
                                    className: (0, n.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    customComponents: $,
                                    itemContentCallback: (e) => {
                                        let t = P.items[e],
                                            i = U({ id: 'loading-messages.entity-is-loading' }, { entityName: U({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(_.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(T.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: H,
                                    pageSize: 20,
                                    totalRequests: P.requestsCount,
                                    handleRef: M,
                                    context: { listAriaLabel: V },
                                    isMobileLayout: D,
                                    useWindowScroll: D,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var w = i(19994),
                P = i(1698);
            let O = () => {
                let e = (0, x.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(v.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, r.jsx)(N.Y, {
                                variant: N.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(w.W, { className: E().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, n.$)(E().scrollContainer, E().important, E().shimmerScrollContainer),
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
            var B = i(21438);
            let z = () => {
                let e = (0, l.useSearchParams)().get('labelId');
                return ((e && (0, B.L)(e)) || (0, l.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(O, {}), children: (0, r.jsx)(L, { labelId: e }) }));
            };
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
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
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 5108, 127, 1191, 1931, 7617, 3637, 8917, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 5151, 9202, 4732, 1195,
                1598, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3470, 763, 2670, 7358,
            ],
            () => e((e.s = 83012)),
        ),
            (_N_E = e.O()));
    },
]);
