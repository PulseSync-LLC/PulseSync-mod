(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            var r = i(88800),
                l = i(37770);
            let a = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: a,
                    centered: s,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: d,
                    linesCount: c,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, r.jsx)(
                        l.V,
                        { isActive: t, linesCount: c, className: i, round: a, centered: s, withInfo: o, withSubcover: m, 'aria-label': u, shimmerClassName: d },
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var r = i(88800),
                l = i(65724),
                a = i(53548),
                s = i(2058),
                o = i(88969),
                n = i(96817),
                d = i(52300),
                c = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: h } = (0, s.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let v = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(c.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(d.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, r.jsx)(u.$, { className: (0, l.$)(_().root, _().important), message: v, closeToast: i });
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
            i.d(t, { a: () => U });
            var r = i(88800),
                l = i(65724),
                a = i(84961),
                s = i(53548),
                o = i(2058),
                n = i(87999),
                d = i(62414),
                c = i(80643),
                u = i(33979),
                m = i(17392),
                _ = i(18593),
                h = i(29993),
                v = i(79070),
                x = i(29832),
                f = i(52300),
                g = i(7555),
                A = i(29504),
                j = i(91959),
                k = i(64207),
                C = i(77455),
                b = i(5407),
                p = i(57934),
                N = i(84384),
                T = i(4795),
                S = i(78940),
                R = i(55693),
                I = i(39079),
                y = i(72288),
                L = i(81877),
                P = i(49738),
                O = i(91292),
                B = i(56862),
                w = i(16704),
                z = i(56446),
                E = i(36207),
                D = i(43161),
                F = i(93434),
                M = i.n(F);
            let U = (0, a.PA)((e) => {
                let { artist: t, className: i, children: a, contentLinesCount: F, topTitleElement: U, bottomTitleElement: K } = e,
                    H = (0, d.D)(),
                    {
                        trailer: W,
                        user: V,
                        paywall: { modal: q },
                    } = (0, y.g)(),
                    { from: $, utmLink: X } = (0, N.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: J } = (0, o.A)(),
                    [Z, G] = (0, s.useState)(!1),
                    [Q, Y] = (0, s.useState)(!1),
                    [ee, et] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: el } = (0, R.z)(),
                    ea = (0, c.S)(),
                    es = (0, u.g)(),
                    eo = (0, k.K)(t),
                    en = (0, C.A)(t),
                    { id: ed, name: ec, coverUri: eu, isLiked: em } = t,
                    e_ = (0, S.Z)(t.url),
                    [eh, ev] = (0, s.useState)(!1),
                    ex = (0, p.F)(),
                    ef = (0, b.P)(),
                    eg = (0, h.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        (W.openArtistTrailer(t.id), ex(n.DomainObjectType.Artist, t.id));
                    }),
                    eA = (0, s.useMemo)(() => {
                        let e = J({ id: 'entity-names.artist-name' }, { artistName: ec }),
                            t = em ? J({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ec, em, J]),
                    { isPlaying: ej, togglePlay: ek } = (0, I.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, j.S)({ artist: t, callback: e_ }),
                    eb = (0, j.S)({ artist: t, callback: ek }),
                    ep = (0, h.c)((e) => {
                        (null == er || er(), ea({ to: n.AppScreen.ArtistScreen }), eC(e));
                    }),
                    eN = (0, T.N)(),
                    eT = (0, h.c)(() => {
                        if (!ef()) {
                            if (eN) return void q.open();
                            (Z || ej || (G(!0), null == el || el()), eb(), ej || es());
                        }
                    }),
                    eS = (0, h.c)(() => {
                        (Q || em || (Y(!0), null == ei || ei()), eo());
                    }),
                    eR = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, h.c)((e) => {
                        (et(e), ev(e));
                    }),
                    ey = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: ee,
                                    onClick: eR,
                                    className: (0, l.$)(M().menuButton, M().control),
                                    size: 's',
                                    icon: (0, r.jsx)(f.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eI, ee],
                    ),
                    eL = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                E.n,
                                {
                                    children: (0, r.jsx)(z.k, {
                                        className: (0, l.$)(M().trailerButton, M().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eg,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eg]),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                B.O,
                                { onClick: en, isPinned: t.isPinned, className: (0, l.$)(M().pinButton, M().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, en],
                    ),
                    eO = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || eh,
                                    className: M().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, l.$)(M().playButton, M().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: ej,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        P.c,
                                        {
                                            className: (0, l.$)(M().likeButton, M().control),
                                            isLiked: em,
                                            onClick: eS,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: ey,
                                    pinControl: eP,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eB = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(g.t, {
                                className: M().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: M().coverBlock,
                                    onClick: ep,
                                    children: [
                                        (0, r.jsx)(L.B, {
                                            className: M().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [ep, eu, eA, t.isAvailable, eO],
                    );
                return (0, r.jsx)(x.MN, {
                    ref: H,
                    className: (0, l.$)(M().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(A.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(O.N, {
                                    className: M().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eA,
                                    onClick: ep,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ec,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { className: M().srTitleLink, href: t.url, onClick: ep, children: eA }),
                    contentLinesCount: F,
                    view: eB,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: a,
                });
            });
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(88800),
                l = i(84961),
                a = i(2058),
                s = i(87999),
                o = i(17392),
                n = i(18593),
                d = i(29993),
                c = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                h = i(79390),
                v = i(29595),
                x = i(74965),
                f = i(72288),
                g = i(66943),
                A = i(7555),
                j = i(73170),
                k = i(29504),
                C = i(59304),
                b = i(81877),
                p = i(85074),
                N = i.n(p);
            let T = (e) => {
                let { coverUri: t, title: i, isDisliked: l, closeToast: s } = e,
                    { formatMessage: o } = (0, a.A)(),
                    n = o(l ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(C.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(j.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, r.jsx)(A.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(b.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(k.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var S = i(64207),
                R = i(77455),
                I = i(48749),
                y = i(22505),
                L = i(5407),
                P = i(64284),
                O = i(98427),
                B = i(57934),
                w = i(84384),
                z = i(9618),
                E = i(95210),
                D = i(47964),
                F = i(46936),
                M = i(97956),
                U = i(98953),
                K = i(32721),
                H = i(18130),
                W = i(56117),
                V = i(93091),
                q = i(27817),
                $ = i(74064),
                X = i(15425),
                J = i(81066),
                Z = i(64546);
            let G = (0, l.PA)((e) => {
                var t, i, l;
                let { artist: A, onOpenChange: j, open: k, ...C } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: p } = (0, z.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: Y,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, R.A)(A),
                    ei = (0, S.K)(A),
                    er = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, x.l)(),
                            [l, s] = (0, _.useState)(!1),
                            { formatMessage: o } = (0, a.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(g.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (l) return;
                            let a = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let n = await e.toggleDislike();
                            (s(!1),
                                n === h.f.OK
                                    ? i((0, r.jsx)(T, { coverUri: a.coverUri, title: a.name, isDisliked: a.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, r.jsx)(g.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(A),
                    el = (0, B.F)(),
                    ea = ''.concat(P.U.ARTIST, '-').concat(null == A ? void 0 : A.id),
                    { formatMessage: es } = (0, a.A)(),
                    { utmLink: eo } = (0, w.f)({ blockId: P.U.ARTIST, contextType: n.K.Artist, contextId: null == A ? void 0 : A.id }),
                    { shareLink: en, pathname: ed } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == A ? void 0 : A.id) ? i : '' } }),
                    ec = (0, I.A)({ entityVariant: F.D.ARTIST, urlParams: { id: null == A ? void 0 : A.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (l = null == A ? void 0 : A.seeds) ? l : [],
                        pageIdForFrom: O.b.RADIO,
                        blockIdForFrom: ea,
                        parentContextId: null == A ? void 0 : A.id,
                    }),
                    e_ = (0, L.P)(),
                    eh = es((null == A ? void 0 : A.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, d.c)(() => {
                        if (b && Y.isAuthorized) return void p();
                        eu || em();
                    }),
                    ex = (0, d.c)(() => {
                        if (!e_()) {
                            if (b) return void p();
                            (null == A ? void 0 : A.id) && (Q.setUtmLink(eo), Q.openArtistTrailer(A.id), el(s.DomainObjectType.Artist, A.id));
                        }
                    }),
                    ef = (0, d.c)(() => {
                        G.open(null == A ? void 0 : A.id);
                    });
                (0, E.N)(k);
                let eg = { variant: U.Y.ARTIST, id: null == A ? void 0 : A.id, title: null == A ? void 0 : A.name, path: ed },
                    eA = ee.checkExperiment(M.z.WebEditorsFeatures, 'on'),
                    ej = null == A || null == (t = A.trailer) ? void 0 : t.isAvailable,
                    ek = ee.checkExperiment(M.z.WebNextArtistInfo, 'on'),
                    eC = !ee.checkExperiment(M.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: k,
                    onOpenChange: j,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...C,
                    children: [
                        eA && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(y.d, { entityVariant: F.D.ARTIST, adminUrl: ec }) }),
                        !N && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(q.L, { onClick: et, isPinned: null == A ? void 0 : A.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == A ? void 0 : A.isLiked,
                                disabled: !Y.isAuthorized || !(null == A ? void 0 : A.isAvailable),
                            }),
                        }),
                        ej && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ex }) }),
                        eC &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(J.C, { onClick: ev, disabled: !(null == A ? void 0 : A.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: j }),
                            }),
                        (0, r.jsx)($.H, { disabled: !A, shareLink: en, entityMeta: eg }),
                        ek &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, r.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == A ? void 0 : A.isDisliked, disabled: !(null == A ? void 0 : A.isAvailable) }),
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
            i.d(t, { T: () => o });
            var r = i(88800),
                l = i(4370),
                a = i(15077),
                s = i(42729);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: l.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => c });
            var r = i(88800),
                l = i(53548),
                a = i(29993),
                s = i(9492),
                o = i(29595),
                n = i(74965),
                d = i(74773);
            let c = (e, t) => {
                let { notify: i, dismiss: c } = (0, n.l)(),
                    u = (0, l.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var i;
                        (c({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === d.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, l.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(s.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [c, m, i, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => c });
            var r = i(88800),
                l = i(84961),
                a = i(88969),
                s = i(17392),
                o = i(52300),
                n = i(19934),
                d = i(72288);
            let c = (0, l.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: l, className: c } = e,
                    { user: u } = (0, d.g)();
                return (0, r.jsx)(n.Dr, {
                    onClick: i,
                    className: c,
                    icon: (0, r.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: l || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(a.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                l = i(96706),
                a = i(53548),
                s = i(2058),
                o = i(79390),
                n = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, h] = (0, a.useState)(!1),
                    { formatMessage: v } = (0, s.A)();
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let a = { ...(0, l.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let s = await e.toggleLike();
                    (h(!1),
                        s === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: a }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, _, v, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                l = i(15077),
                a = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: l.c.ARTIST,
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
                l = i(96706),
                a = i(53548),
                s = i(2058),
                o = i(29595),
                n = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [_, h] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(c.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let a = { ...(0, l.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let s = await e.togglePin();
                    (h(!1),
                        s
                            ? i((0, r.jsx)(u.l, { artist: a }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(c.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        78318: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 90387));
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(88800),
                l = i(65724),
                a = i(61013),
                s = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: l, ...a } = e,
                        s = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        o = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': s, style: { ...t }, ref: i, ...a });
                },
                n = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var d = i(16434),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: s, withForceScroll: o, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, l.$)(c().scroller, { [c().scroller_withFooter]: a, [c().scroller_withHeader]: s, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                h = i(75151);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: l,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, v] = (0, s.useState)(null),
                        x = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == l || l(e), n.length > 0 && v(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, l, t, i, n],
                        );
                    (0, s.useEffect)(() => {
                        n.length > 0 && m && x(m);
                    }, n);
                    let f = (0, s.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, a);
                    }, [d, a]);
                    return (0, r.jsx)(h.sN, { ref: c, rangeChanged: x, totalCount: o, endReached: f, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: x = 700,
                            pageSize: f = 20,
                            totalCount: g,
                            totalRequests: A,
                            debounceDurationInMs: j,
                            initialItemCount: k,
                            minInitialItemCount: C = 20,
                            handleRef: b,
                            alwaysShowScrollbar: p = !1,
                            testId: N,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...R
                        } = e,
                        [I, y] = (0, s.useState)(!1),
                        L = (0, s.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    y(e);
                                }, 100),
                            [],
                        ),
                        P = (0, s.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, A, T]),
                        O = k ? Math.min(k, C) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, l.$)(c().root, { [c().root_scrolling]: I || p, [c().root_notScrolling]: !I && !p }, t),
                        'data-test-id': N,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(v, {
                                overscan: x,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: _,
                                scrollerRef: b,
                                totalCount: g,
                                pageSize: f,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: j,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: S,
                                ...R,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
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
        90387: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => D }));
            var r = i(88800),
                l = i(53548),
                a = i(58390),
                s = i(65724),
                o = i(84961),
                n = i(2058),
                d = i(87999),
                c = i(76903),
                u = i(17392),
                m = i(29993),
                _ = i(29504),
                h = i(32596),
                v = i(21256),
                x = i(69630),
                f = i(98427),
                g = i(46422),
                A = i(44230),
                j = i(37670),
                k = i(34961),
                C = i(53892),
                b = i(72288),
                p = i(54320),
                N = i(86790),
                T = i(60266),
                S = i(93317),
                R = i(37770),
                I = i(79418),
                y = i(64709),
                L = i(50660),
                P = i.n(L);
            let O = (0, o.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: o } = e,
                    { id: L, name: O, type: B, artistsSubpage: w, reset: z, isNeededToLoad: E, getData: D } = (0, k.s)(C.n.LABEL),
                    {
                        settings: { isMobile: F },
                    } = (0, b.g)(),
                    { formatMessage: M } = (0, n.A)(),
                    { contentScrollRef: U, setContentScrollRef: K } = (0, A.g)(),
                    H = (0, g.W)(),
                    W = M({ id: 'page.label-artists-header' }, { labelName: O }),
                    V = (0, m.c)((e) => {
                        w.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, p.X)(w.pagesLoader, V),
                    (0, l.useEffect)(
                        () => () => {
                            (z(), w.reset());
                        },
                        [z, w],
                    ),
                    w.isNotFound && (0, a.notFound)(),
                    (0, y.Q)({ id: Number(L), name: null != O ? O : '', type: null != B ? B : '' }, y.T.ARTISTS),
                    (0, j.J)(w.isResolved));
                let q = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(T.A, { children: (0, r.jsx)(N.w, { className: P().footer }) }) }), []),
                    $ = M({ id: 'entity-names.label-artists-list' }),
                    X = [];
                if (
                    (w.isNeededToLoad && X.push(w.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: o })),
                    E && X.push(D({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    X.length && (0, l.use)(Promise.allSettled(X)),
                    w.isRejected && !w.isNotFound)
                )
                    return (0, r.jsx)(h.SomethingWentWrong, {});
                let J = w.isShimmerVisible ? 20 : w.totalCount;
                return (0, r.jsx)(c.a, {
                    pageId: d.AppScreen.LabelArtists,
                    pageIdForFrom: f.b.LABEL_ARTISTS,
                    children: (0, r.jsx)(x.h, {
                        scrollElement: U,
                        outerTitle: W,
                        children: (0, r.jsxs)('div', {
                            className: P().root,
                            'data-test-id': u.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(S.Y, {
                                    variant: S.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: H.canBack,
                                    className: P().header,
                                    children: (0, r.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: W }),
                                }),
                                (0, r.jsx)(I.$, {
                                    className: (0, s.$)(P().scrollContainer, P().important),
                                    listClassName: P().content,
                                    itemClassName: P().item,
                                    customComponents: q,
                                    itemContentCallback: (e) => {
                                        let t = w.items[e],
                                            i = M({ id: 'loading-messages.entity-is-loading' }, { entityName: M({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(v.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(R.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: J,
                                    initialItemCount: J,
                                    onGetDataByPage: V,
                                    pageSize: 20,
                                    totalRequests: w.requestsCount,
                                    handleRef: K,
                                    context: { listAriaLabel: $ },
                                    isMobileLayout: F,
                                    useWindowScroll: F,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var B = i(19994),
                w = i(1698);
            let z = () => {
                let e = (0, g.W)(),
                    { formatMessage: t } = (0, n.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(x.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: P().root,
                        children: [
                            (0, r.jsx)(S.Y, {
                                variant: S.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(B.W, { className: P().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, s.$)(P().scrollContainer, P().important, P().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: P().content,
                                    children: (0, r.jsx)(w.e, {
                                        isActive: !0,
                                        itemClassName: P().item,
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
            var E = i(21438);
            let D = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, E.L)(e)) || (0, a.notFound)(), (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(z, {}), children: (0, r.jsx)(O, { labelId: e }) }));
            };
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => l });
            var r = i(58217);
            let l = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: l } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
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
                7437, 4814, 9079, 3469, 1191, 8194, 8655, 8917, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151, 9202, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 3360, 763, 2670, 7358,
            ],
            () => e((e.s = 78318)),
        ),
            (_N_E = e.O()));
    },
]);
