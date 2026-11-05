(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9029],
    {
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var r = i(88800),
                a = i(65724),
                s = i(53548),
                n = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                x = i.n(m);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: g } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let _ = (0, s.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: x().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: x().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: x().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: x().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(x().root, x().important), message: _, closeToast: i });
            };
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var r = i(56949),
                a = i(53548),
                s = i(29993),
                n = i(44230),
                l = i(72288);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: x } = (0, n.g)(),
                        g = (0, a.useRef)(new Map()),
                        _ = (0, a.useRef)(void 0),
                        v = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && i ? r + i.scrollTop : 0;
                            })(m, d, x),
                        },
                        p = (0, r.XW)(v),
                        h = (0, r.Te)({ ...v, getScrollElement: () => x, initialOffset: null == x ? void 0 : x.scrollTop }),
                        f = m ? p : h,
                        A = (0, s.c)(() => {
                            f.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            _.current ||
                                (_.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let r = e.contentRect.height;
                                            r && r !== g.current.get(i) && (g.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && A());
                                }));
                        }, [A]),
                        { virtualizer: f, resizeObserver: _.current }
                    );
                };
        },
        11006: (e) => {
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
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => G });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                x = i(18593),
                g = i(29993),
                _ = i(79070),
                v = i(29832),
                p = i(52300),
                h = i(7555),
                f = i(29504),
                A = i(91959),
                N = i(64207),
                T = i(77455),
                k = i(5407),
                C = i(57934),
                E = i(84384),
                R = i(4795),
                I = i(78940),
                j = i(55693),
                O = i(39079),
                y = i(72288),
                b = i(81877),
                P = i(49738),
                S = i(91292),
                L = i(56862),
                D = i(16704),
                w = i(56446),
                M = i(36207),
                z = i(43161),
                B = i(93434),
                F = i.n(B);
            let G = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: B, topTitleElement: G, bottomTitleElement: U } = e,
                    H = (0, c.D)(),
                    {
                        trailer: X,
                        user: Y,
                        paywall: { modal: W },
                    } = (0, y.g)(),
                    { from: K, utmLink: V } = (0, E.f)({ contextId: t.id, contextType: x.K.Artist }),
                    { formatMessage: $ } = (0, l.A)(),
                    [q, J] = (0, n.useState)(!1),
                    [Z, Q] = (0, n.useState)(!1),
                    [ee, et] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: ea } = (0, j.z)(),
                    es = (0, d.S)(),
                    en = (0, u.g)(),
                    el = (0, N.K)(t),
                    eo = (0, T.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    ex = (0, I.Z)(t.url),
                    [eg, e_] = (0, n.useState)(!1),
                    ev = (0, C.F)(),
                    ep = (0, k.P)(),
                    eh = (0, g.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (X.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    ef = (0, n.useMemo)(() => {
                        let e = $({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, $]),
                    { isPlaying: eA, togglePlay: eN } = (0, O.D)({
                        playContextParams: { contextData: { type: x.K.Artist, meta: { id: Number(ec) }, from: K, utmLink: V }, loadContextMeta: !0 },
                    }),
                    eT = (0, A.S)({ artist: t, callback: ex }),
                    ek = (0, A.S)({ artist: t, callback: eN }),
                    eC = (0, g.c)((e) => {
                        (null == er || er(), es({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    eE = (0, R.N)(),
                    eR = (0, g.c)(() => {
                        if (!ep()) {
                            if (eE) return void W.open();
                            (q || eA || (J(!0), null == ea || ea()), ek(), eA || en());
                        }
                    }),
                    eI = (0, g.c)(() => {
                        (Z || em || (Q(!0), null == ei || ei()), el());
                    }),
                    ej = (0, g.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eO = (0, g.c)((e) => {
                        (et(e), e_(e));
                    }),
                    ey = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eO,
                                    open: ee,
                                    onClick: ej,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eO, ee],
                    ),
                    eb = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eh,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eh]),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                L.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eS = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                v.hg,
                                {
                                    isVisible: ee || eg,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eR,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        P.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: em,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: ey,
                                    pinControl: eP,
                                    trailerControl: eb,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eL = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eC,
                                    children: [
                                        (0, r.jsx)(b.B, {
                                            className: F().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ef,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eS,
                                    ],
                                }),
                            }),
                        [eC, eu, ef, t.isAvailable, eS],
                    );
                return (0, r.jsx)(v.MN, {
                    ref: H,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': ef,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            G,
                            (0, r.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(S.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ef,
                                    onClick: eC,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, r.jsx)(S.N, { className: F().srTitleLink, href: t.url, onClick: eC, children: ef }),
                    contentLinesCount: B,
                    view: eL,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var r = i(88800),
                a = i(84961),
                s = i(53548),
                n = i(50408),
                l = i(47969),
                o = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: x,
                        maxColumnCount: g,
                        renderItemByIndex: _,
                        onChangeRange: v,
                    } = e,
                    [p, h] = (0, n.d)(),
                    {
                        virtualizer: f,
                        rowResizeObserver: A,
                        columnCount: N,
                        indices: T,
                    } = (0, l.L)({
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: x,
                        maxColumnCount: g,
                        containerRef: p,
                    });
                (0, s.useEffect)(() => {
                    !f.isScrolling && f.range && (null == v || v(f.range, N));
                }, [v, f.isScrolling, f.range, N]);
                let k = { '--virtual-grid-height': ''.concat(f.getTotalSize(), 'px'), '--virtual-grid-column-count': N };
                return (0, r.jsx)('div', {
                    ref: h,
                    style: k,
                    className: d().root,
                    children: f
                        .getVirtualItems()
                        .map((e) =>
                            (0, r.jsx)(
                                o.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: A,
                                    indices: T,
                                    renderItemByIndex: _,
                                    scrollMargin: f.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        25354: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => l, I7: () => o, K$: () => n, cM: () => d, fZ: () => a, tA: () => s, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                s = 315,
                n = 170,
                l = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(35396);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        35396: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { C: () => s }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(r || (r = {})));
            let a = new Set(Object.values(r)),
                s = (e) => 'string' == typeof e && a.has(e);
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var r = i(88800),
                a = i(84961),
                s = i(2058),
                n = i(87999),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                x = i(53548),
                g = i(79390),
                _ = i(29595),
                v = i(74965),
                p = i(72288),
                h = i(66943),
                f = i(7555),
                A = i(73170),
                N = i(29504),
                T = i(59304),
                k = i(81877),
                C = i(85074),
                E = i.n(C);
            let R = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(T.$, {
                    closeToast: n,
                    message: (0, r.jsxs)('div', {
                        className: E().message,
                        children: [
                            (0, r.jsx)(A.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(f.t, {
                                className: E().cover,
                                radius: 'round',
                                children: (0, r.jsx)(k.B, { className: E().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(N.HL, { className: E().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                j = i(77455),
                O = i(48749),
                y = i(22505),
                b = i(5407),
                P = i(64284),
                S = i(98427),
                L = i(57934),
                D = i(84384),
                w = i(9618),
                M = i(95210),
                z = i(47964),
                B = i(46936),
                F = i(97956),
                G = i(98953),
                U = i(32721),
                H = i(18130),
                X = i(56117),
                Y = i(93091),
                W = i(27817),
                K = i(74064),
                V = i(15425),
                $ = i(81066),
                q = i(64546);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: A, open: N, ...T } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: C } = (0, w.q)(),
                    {
                        settings: { isMobile: E },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, p.g)(),
                    et = (0, j.A)(f),
                    ei = (0, I.K)(f),
                    er = ((e) => {
                        let { user: t } = (0, p.g)(),
                            { notify: i } = (0, v.l)(),
                            [a, n] = (0, x.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: _.u.ERROR });
                            if (a) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === g.f.OK
                                    ? i((0, r.jsx)(R, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: _.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: _.u.ERROR }));
                        });
                    })(f),
                    ea = (0, L.F)(),
                    es = ''.concat(P.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: en } = (0, s.A)(),
                    { utmLink: el } = (0, D.f)({ blockId: P.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, O.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: S.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    ex = (0, b.P)(),
                    eg = en((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    e_ = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void C();
                        eu || em();
                    }),
                    ev = (0, c.c)(() => {
                        if (!ex()) {
                            if (k) return void C();
                            (null == f ? void 0 : f.id) && (Z.setUtmLink(el), Z.openArtistTrailer(f.id), ea(n.DomainObjectType.Artist, f.id));
                        }
                    }),
                    ep = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(N);
                let eh = { variant: G.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eA = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eN = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: E,
                    offsetOptions: 10,
                    open: N,
                    onOpenChange: A,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ef && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(y.d, { entityVariant: B.D.ARTIST, adminUrl: ed }) }),
                        !E && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        eA && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(V.N, { onClick: ev }) }),
                        eT &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)($.C, { onClick: e_, disabled: !(null == f ? void 0 : f.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: A }),
                            }),
                        (0, r.jsx)(K.H, { disabled: !f, shareLink: eo, entityMeta: eh }),
                        eN &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ep,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eg,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(X.D, { onClick: er, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47785: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 55470));
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var r = i(35802),
                a = i(79070),
                s = i(61013),
                n = i(53548);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: r, totalCount: a, columnGap: s, minColumnCount: n, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + s) / (t + s))),
                    c = Math.max(n, Math.floor((r + s) / ((i + t) * 0.5 + s)));
                for (let e = n; e <= o; e++) {
                    let a = (r - (e - 1) * s) / e;
                    if (a >= t && a <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: x,
                        maxColumnCount: g,
                        containerRef: _,
                    } = e,
                    { rowCount: v, columnCount: p } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, n.useState)({ rowCount: 0, columnCount: 0 }),
                            x = (0, n.useRef)(null),
                            g = (0, n.useMemo)(
                                () =>
                                    (0, s.A)(
                                        (e) => {
                                            m(
                                                l({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, i, a, o],
                            );
                        return (
                            (0, n.useLayoutEffect)(
                                () => (
                                    x.current && x.current.disconnect(),
                                    (x.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (m(
                                            l({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        x.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = x.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, r, i, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: x, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: g, containerRef: _ }),
                    { virtualizer: h, resizeObserver: f } = (0, o.r)({ count: v, getEstimateSize: i, gap: c, containerRef: _ }),
                    A = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        p,
                    ),
                    N = (0, a.L)(() => {
                        var e, t;
                        if (!h.range) return null;
                        let i = null == (e = A[h.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = A[h.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== r ? { startIndex: i, endIndex: r } : null;
                    });
                return { virtualizer: h, rowResizeObserver: f, indices: A, columnCount: p, visibleRange: N };
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(51516),
                o = i.n(l);
            let c = (0, s.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: s, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, n.useRef)(null),
                    x = t[i.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': i.index,
                        ref: m,
                        style: g,
                        className: (0, a.$)(o().root, c),
                        children: null == x ? void 0 : x.map((e) => (0, r.jsx)('div', { className: l, children: s(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        54099: (e) => {
            e.exports = {
                root: 'GenreArtistsPage_root__PgtIz',
                container: 'GenreArtistsPage_container__NruTu',
                shimmerTitle: 'GenreArtistsPage_shimmerTitle__K2uY9',
                footer: 'GenreArtistsPage_footer__fYaCO',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var r = i(88800),
                a = i(4370),
                s = i(15077),
                n = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
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
                s = i(29993),
                n = i(9492),
                l = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, s.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        55470: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var r = i(88800),
                a = i(53548),
                s = i(58390),
                n = i(84961),
                l = i(2058),
                o = i(87999),
                c = i(76903),
                d = i(17392),
                u = i(29993),
                m = i(66719),
                x = i(29504),
                g = i(32596),
                _ = i(21256),
                v = i(69630),
                p = i(21576),
                h = i(98427),
                f = i(46422),
                A = i(44230),
                N = i(37670),
                T = i(34961),
                k = i(53892),
                C = i(54320),
                E = i(86790),
                R = i(60266),
                I = i(93317),
                j = i(37770),
                O = i(25354),
                y = i(30144),
                b = i(72288),
                P = i(324),
                S = i(46511),
                L = i(13012),
                D = i(57297),
                w = i(2218),
                M = i(77863),
                z = i(45383),
                B = i(40883);
            async function F(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: s, host: n } = t,
                    l = await (0, S.W)(i),
                    o = e.title.fullTitle,
                    c = l({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, B.f)({ genreTitle: o, artists: d, messageFormatter: l }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(n)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, D.i)({
                        ogTitle: (0, L.N)(o),
                        ogDescription: u,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, w.H)({ cardType: M.W.APP, title: c, url: null != a ? a : '', appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, P.X)({
                        additional: { tld: s, url: null != a ? a : '', fullUrl: null != r ? r : '', host: n },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var G = i(59918),
                U = i(54099),
                H = i.n(U);
            let X = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { artistsSubpage: n } = (0, T.s)(k.n.GENRE),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: S, setContentScrollRef: L } = (0, A.g)(),
                    D = (0, f.W)(),
                    w = (0, u.c)(() => O.tA),
                    M = (0, u.c)(() => (n.isShimmerVisible ? O.xi : n.totalCount)),
                    z = (0, a.useCallback)(
                        (e) => {
                            t && n.getData({ metatagId: t, page: e, pageSize: O.cM });
                        },
                        [n, t],
                    ),
                    B = ((e) => {
                        let { pageSize: t, callback: i } = e;
                        return (0, u.c)((e, r) => {
                            if (!i) return;
                            let a = Math.floor((e.startIndex * r) / t),
                                s = Math.ceil((e.endIndex * r) / t);
                            for (let e = a; e <= s; e++) i(e);
                        });
                    })({ pageSize: O.cM, callback: z });
                (0, C.X)(n.pagesLoader, z);
                let U = (0, u.c)((e) => {
                    let t = n.items[e],
                        i = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.artist' }) });
                    return t ? (0, r.jsx)(_.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, r.jsx)(j.V, { 'aria-label': i, round: !0, centered: !0 });
                });
                return ((0, a.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n],
                ),
                n.isNotFound && (0, s.notFound)(),
                (0, N.J)(n.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: t } = (0, b.g)(),
                        i = null == e ? void 0 : e.fullTitle,
                        r = null == e ? void 0 : e.isResolved,
                        s = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                        n = (0, a.useCallback)(
                            (t) =>
                                s
                                    ? {}
                                    : e && r && i
                                      ? F(
                                            ((e) => {
                                                var t, i, r;
                                                return {
                                                    id: '',
                                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                                    artists: e.items.map((e) => ({ artist: (0, G.N)(e), popularTracks: [] })),
                                                    pager: {
                                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                        perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                        total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                                    },
                                                };
                                            })(e),
                                            t,
                                        )
                                      : void 0,
                            [e, i, r, s],
                        );
                    (0, y.C)(t.modal.isOpened ? null : n);
                })(n),
                t && n.isNeededToLoad && (0, a.use)(n.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: O.cM })),
                n.isSomethingWrong)
                    ? (0, r.jsx)(g.SomethingWentWrong, {})
                    : (0, r.jsx)(c.a, {
                          pageId: o.AppScreen.GenreArtists,
                          pageIdForFrom: h.b.GENRE_ARTISTS,
                          children: (0, r.jsx)(v.h, {
                              scrollElement: S,
                              outerTitle: n.fullTitle,
                              children: (0, r.jsxs)('div', {
                                  className: H().root,
                                  'data-test-id': d.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, r.jsx)(I.Y, {
                                          variant: I.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: D.canBack,
                                          children: (0, r.jsx)(x.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                      }),
                                      (0, r.jsxs)(m.N, {
                                          ref: L,
                                          className: H().root,
                                          containerClassName: H().container,
                                          children: [
                                              (0, r.jsx)(p.Q, {
                                                  maxColumnCount: O.I7,
                                                  count: M(),
                                                  rowGap: O.fZ,
                                                  columnGap: O.vX,
                                                  getEstimateRowSize: w,
                                                  minColumnWidth: O.K$,
                                                  maxColumnWidth: O.El,
                                                  onChangeRange: B,
                                                  renderItemByIndex: U,
                                              }),
                                              (0, r.jsx)(R.A, { children: (0, r.jsx)(E.w, { className: H().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var Y = i(19994);
            let W = () => {
                    let e = (0, f.W)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, A.g)(),
                        { formatMessage: a } = (0, l.A)(),
                        s = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) }),
                        n = (0, u.c)(() => (0, r.jsx)(j.V, { 'aria-label': s, round: !0, centered: !0 })),
                        o = (0, u.c)(() => O.tA),
                        c = (0, u.c)(() => void 0);
                    return (0, r.jsx)(v.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: H().root,
                            children: [
                                (0, r.jsx)(I.Y, {
                                    variant: I.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(Y.W, { className: H().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)(m.N, {
                                    ref: i,
                                    className: H().root,
                                    containerClassName: H().container,
                                    children: (0, r.jsx)(p.Q, {
                                        maxColumnCount: O.I7,
                                        count: O.xi,
                                        rowGap: O.fZ,
                                        columnGap: O.vX,
                                        getEstimateRowSize: o,
                                        minColumnWidth: O.K$,
                                        maxColumnWidth: O.El,
                                        onChangeRange: c,
                                        renderItemByIndex: n,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                K = () => {
                    let e = (0, s.useSearchParams)().get('metatagId');
                    return (e || (0, s.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(W, {}), children: (0, r.jsx)(X, { metatagId: e }) }));
                };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(88800),
                a = i(84961),
                s = i(88969),
                n = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(27169),
                a = i(29201);
            let s = (e) => {
                var t, i, s, n, l;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (l = e.trailer) ? void 0 : l.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                s = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let x = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [x, g] = (0, s.useState)(!1),
                    { formatMessage: _ } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (x) return;
                    let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    g(!0);
                    let n = await e.toggleLike();
                    (g(!1),
                        n === l.f.OK
                            ? i((0, r.jsx)(m.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, x, _, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(88800),
                a = i(15077),
                s = i(33719);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.k, {
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
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [x, g] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (x) return;
                    let s = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    g(!0);
                    let n = await e.togglePin();
                    (g(!1),
                        n
                            ? i((0, r.jsx)(u.l, { artist: s }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, x, m, i]);
            };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => E });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                n = i(2058),
                l = i(30282),
                o = i(94144),
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
            var m = i(62293),
                x = i(99839);
            let g = (e) => e(new Date(), (0, x.m)());
            var _ = i(51611),
                v = i(72288),
                p = i(11006),
                h = i.n(p),
                f = i(17392),
                A = i(29504),
                N = i(91292);
            let T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(h().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(N.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(N.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: h().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, r.jsx)(N.N, { target: '_blank', href: a, className: h().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(h().root, h().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(T, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, v.g)(),
                    { formatDate: a, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, _.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: g(a) });
                return (0, r.jsx)(T, { className: t, data: o });
            });
            let E = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: x, user: p } = (0, v.g)(),
                    { formatDate: f, formatMessage: A } = (0, n.A)(),
                    { isEnabled: N } = null != (t = (0, o.P)()) ? t : {},
                    { language: T } = (0, _.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    x = [n, o, u];
                                return (i && 'ru' === s && x.push(l), x.push(m), x);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: l.$3,
                        tld: x.tld,
                        language: T,
                        userRegion: p.account.data.userSessionRegionIso,
                        year: g(f),
                    });
                return (0, r.jsx)(C, { className: (0, a.$)({ [h().root_withOffsetForDeeplink]: N }, i), data: k });
            });
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
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => s });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                s = () => (0, r.useContext)(a);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7437, 4814, 9079, 3469, 1191, 8194, 8655, 426, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 9202, 8490, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 47785)),
        ),
            (_N_E = e.O()));
    },
]);
