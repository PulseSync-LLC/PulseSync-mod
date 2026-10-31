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
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var r = i(72288),
                a = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, r.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(88800),
                a = i(65724),
                n = i(53548),
                s = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, n.useRef)(null),
                    { formatMessage: v } = (0, s.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let x = (0, n.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
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
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: x, closeToast: i });
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
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var r = i(56949),
                a = i(53548),
                n = i(29993),
                s = i(44230),
                l = i(72288);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, l.g)(),
                        { contentScrollRef: _ } = (0, s.g)(),
                        v = (0, a.useRef)(new Map()),
                        x = (0, a.useRef)(void 0),
                        p = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && i ? r + i.scrollTop : 0;
                            })(m, d, _),
                        },
                        h = (0, r.XW)(p),
                        g = (0, r.Te)({ ...p, getScrollElement: () => _, initialOffset: null == _ ? void 0 : _.scrollTop }),
                        f = m ? h : g,
                        C = (0, n.c)(() => {
                            f.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            x.current ||
                                (x.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let r = e.contentRect.height;
                                            r && r !== v.current.get(i) && (v.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C());
                                }));
                        }, [C]),
                        { virtualizer: f, resizeObserver: x.current }
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
            i.d(t, { a: () => U });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(92716),
                c = i(17392),
                d = i(18593),
                u = i(29993),
                m = i(79070),
                _ = i(29832),
                v = i(52300),
                x = i(7555),
                p = i(29504),
                h = i(91959),
                g = i(64207),
                f = i(77455),
                C = i(5407),
                A = i(96527),
                N = i(76675),
                E = i(25557),
                T = i(28830),
                R = i(84384),
                k = i(4795),
                y = i(78940),
                I = i(55693),
                j = i(39079),
                b = i(72288),
                O = i(81877),
                S = i(49738),
                P = i(91292),
                L = i(56862),
                w = i(16704),
                D = i(56446),
                M = i(36207),
                z = i(43161),
                B = i(93434),
                F = i.n(B);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: B, topTitleElement: U, bottomTitleElement: H } = e,
                    { ref: G, intersectionPropertyId: X } = (0, T.n)(),
                    {
                        trailer: Y,
                        user: W,
                        paywall: { modal: K },
                    } = (0, b.g)(),
                    { from: V, utmLink: $ } = (0, R.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [J, Q] = (0, s.useState)(!1),
                    [Z, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, I.z)(),
                    es = (0, A.N)(),
                    el = (0, N.b)(),
                    eo = (0, g.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, y.Z)(t.url),
                    [ex, ep] = (0, s.useState)(!1),
                    eh = (0, E.F)(),
                    eg = (0, C.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), eh(o.DomainObjectType.Artist, t.id));
                    }),
                    eC = (0, s.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: eA, togglePlay: eN } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: V, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eE = (0, h.S)({ artist: t, callback: ev }),
                    eT = (0, h.S)({ artist: t, callback: eN }),
                    eR = (0, u.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eE(e));
                    }),
                    ek = (0, k.N)(),
                    ey = (0, u.c)(() => {
                        if (!eg()) {
                            if (ek) return void K.open();
                            (J || eA || (Q(!0), null == en || en()), eT(), el(!eA));
                        }
                    }),
                    eI = (0, u.c)(() => {
                        (Z || e_ || (ee(!0), null == er || er()), eo());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, u.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eb,
                                    open: et,
                                    onClick: ej,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eb, et],
                    ),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(D.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                L.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eL = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ex,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ey,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eO,
                                    pinControl: eP,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(x.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eR,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eC,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eL,
                                    ],
                                }),
                            }),
                        [eR, em, eC, t.isAvailable, eL],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: G,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eC,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(P.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eC,
                                    onClick: eR,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, r.jsx)(P.N, { className: F().srTitleLink, href: t.url, onClick: eR, children: eC }),
                    'data-intersection-property-id': X,
                    contentLinesCount: B,
                    view: ew,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var r = i(88800),
                a = i(84961),
                n = i(53548),
                s = i(50408),
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
                        maxColumnWidth: _,
                        maxColumnCount: v,
                        renderItemByIndex: x,
                        onChangeRange: p,
                    } = e,
                    [h, g] = (0, s.d)(),
                    {
                        virtualizer: f,
                        rowResizeObserver: C,
                        columnCount: A,
                        indices: N,
                    } = (0, l.L)({
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: _,
                        maxColumnCount: v,
                        containerRef: h,
                    });
                (0, n.useEffect)(() => {
                    !f.isScrolling && f.range && (null == p || p(f.range, A));
                }, [p, f.isScrolling, f.range, A]);
                let E = { '--virtual-grid-height': ''.concat(f.getTotalSize(), 'px'), '--virtual-grid-column-count': A };
                return (0, r.jsx)('div', {
                    ref: g,
                    style: E,
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
                                    resizeObserver: C,
                                    indices: N,
                                    renderItemByIndex: x,
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
            i.d(t, { El: () => l, I7: () => o, K$: () => s, cM: () => d, fZ: () => a, tA: () => n, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                n = 315,
                s = 170,
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
            (i.d(t, { C: () => n }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(r || (r = {})));
            let a = new Set(Object.values(r)),
                n = (e) => 'string' == typeof e && a.has(e);
        },
        36207: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(88800),
                a = i(2058),
                n = i(17610);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(n.m_, {
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
                n = i(17392),
                s = i(19994),
                l = i(9590),
                o = i.n(l);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: v,
                    radius: x = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': n.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        v && (0, r.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: v }), radius: x }),
                        m &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: v }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var r = i(88800),
                a = i(84961),
                n = i(2058),
                s = i(92716),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                v = i(79390),
                x = i(29595),
                p = i(74965),
                h = i(72288),
                g = i(66943),
                f = i(7555),
                C = i(73170),
                A = i(29504),
                N = i(59304),
                E = i(81877),
                T = i(85074),
                R = i.n(T);
            let k = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, n.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(N.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: R().message,
                        children: [
                            (0, r.jsx)(C.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(f.t, {
                                className: R().cover,
                                radius: 'round',
                                children: (0, r.jsx)(E.B, { className: R().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: R().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var y = i(64207),
                I = i(77455),
                j = i(48749),
                b = i(22505),
                O = i(5407),
                S = i(64284),
                P = i(12816),
                L = i(25557),
                w = i(84384),
                D = i(9618),
                M = i(95210),
                z = i(47964),
                B = i(46936),
                F = i(97956),
                U = i(98953),
                H = i(32721),
                G = i(18130),
                X = i(56117),
                Y = i(93091),
                W = i(27817),
                K = i(74064),
                V = i(15425),
                $ = i(81066),
                q = i(64546);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: C, open: A, ...N } = e,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: T } = (0, D.q)(),
                    {
                        settings: { isMobile: R },
                        modals: { artistAboutModal: J },
                        trailer: Q,
                        user: Z,
                        experiments: ee,
                    } = (0, h.g)(),
                    et = (0, I.A)(f),
                    ei = (0, y.K)(f),
                    er = ((e) => {
                        let { user: t } = (0, h.g)(),
                            { notify: i } = (0, p.l)(),
                            [a, s] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(k, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, r.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                        });
                    })(f),
                    ea = (0, L.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: el } = (0, w.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, G.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: P._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    e_ = (0, O.P)(),
                    ev = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, c.c)(() => {
                        if (E && Z.isAuthorized) return void T();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (E) return void T();
                            (null == f ? void 0 : f.id) && (Q.setUtmLink(el), Q.openArtistTrailer(f.id), ea(s.DomainObjectType.Artist, f.id));
                        }
                    }),
                    eh = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let eg = { variant: U.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eC = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eN = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: R,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: C,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...N,
                    children: [
                        ef && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(b.d, { entityVariant: B.D.ARTIST, adminUrl: ed }) }),
                        !R && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Z.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        eC && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(V.N, { onClick: ep }) }),
                        eN &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)($.C, { onClick: ex, disabled: !(null == f ? void 0 : f.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: C }),
                            }),
                        (0, r.jsx)(K.H, { disabled: !f, shareLink: eo, entityMeta: eg }),
                        eA &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: eh,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(X.D, { onClick: er, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var r = i(35802),
                a = i(79070),
                n = i(61013),
                s = i(53548);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: r, totalCount: a, columnGap: n, minColumnCount: s, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((r + n) / (t + n))),
                    c = Math.max(s, Math.floor((r + n) / ((i + t) * 0.5 + n)));
                for (let e = s; e <= o; e++) {
                    let a = (r - (e - 1) * n) / e;
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
                        minColumnCount: _,
                        maxColumnCount: v,
                        containerRef: x,
                    } = e,
                    { rowCount: p, columnCount: h } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: r, minColumnWidth: a, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            _ = (0, s.useRef)(null),
                            v = (0, s.useMemo)(
                                () =>
                                    (0, n.A)(
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
                            (0, s.useLayoutEffect)(
                                () => (
                                    _.current && _.current.disconnect(),
                                    (_.current = new ResizeObserver((e) => {
                                        e.forEach(v);
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
                                        _.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = _.current) || e.disconnect();
                                    }
                                ),
                                [c, t, v, d, r, i, a, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: _, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: v, containerRef: x }),
                    { virtualizer: g, resizeObserver: f } = (0, o.r)({ count: p, getEstimateSize: i, gap: c, containerRef: x }),
                    C = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        h,
                    ),
                    A = (0, a.L)(() => {
                        var e, t;
                        if (!g.range) return null;
                        let i = null == (e = C[g.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = C[g.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== r ? { startIndex: i, endIndex: r } : null;
                    });
                return { virtualizer: g, rowResizeObserver: f, indices: C, columnCount: h, visibleRange: A };
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
                n = i(84961),
                s = i(53548),
                l = i(51516),
                o = i.n(l);
            let c = (0, n.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: n, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, s.useRef)(null),
                    _ = t[i.index],
                    v = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, s.useEffect)(() => {
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
                        style: v,
                        className: (0, a.$)(o().root, c),
                        children: null == _ ? void 0 : _.map((e) => (0, r.jsx)('div', { className: l, children: n(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        54007: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 55470));
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
                n = i(15077),
                s = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
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
                n = i(29993),
                s = i(9492),
                l = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, n.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(s.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        55470: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => W }));
            var r = i(88800),
                a = i(53548),
                n = i(58390),
                s = i(84961),
                l = i(2058),
                o = i(17392),
                c = i(29993),
                d = i(66719),
                u = i(29504),
                m = i(32596),
                _ = i(21256),
                v = i(69630),
                x = i(21576),
                p = i(12816),
                h = i(59844),
                g = i(46422),
                f = i(44230),
                C = i(37670),
                A = i(34961),
                N = i(53892),
                E = i(54320),
                T = i(86790),
                R = i(60266),
                k = i(93317),
                y = i(37770),
                I = i(25354),
                j = i(30144),
                b = i(72288),
                O = i(324),
                S = i(46511),
                P = i(13012),
                L = i(57297),
                w = i(2218),
                D = i(77863),
                M = i(45383),
                z = i(40883);
            async function B(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: n, host: s } = t,
                    l = await (0, S.W)(i),
                    o = e.title.fullTitle,
                    c = l({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, z.f)({ genreTitle: o, artists: d, messageFormatter: l }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(s)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, L.i)({
                        ogTitle: (0, P.N)(o),
                        ogDescription: u,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, w.H)({ cardType: D.W.APP, title: c, url: null != a ? a : '', appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, O.X)({
                        additional: { tld: n, url: null != a ? a : '', fullUrl: null != r ? r : '', host: s },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, M.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var F = i(59918),
                U = i(54099),
                H = i.n(U);
            let G = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { artistsSubpage: s } = (0, A.s)(N.n.GENRE),
                    { formatMessage: O } = (0, l.A)(),
                    { contentScrollRef: S, setContentScrollRef: P } = (0, f.g)(),
                    L = (0, g.W)(),
                    w = (0, c.c)(() => I.tA),
                    D = (0, c.c)(() => (s.isShimmerVisible ? I.xi : s.totalCount)),
                    M = (0, a.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: I.cM });
                        },
                        [s, t],
                    ),
                    z = ((e) => {
                        let { pageSize: t, callback: i } = e;
                        return (0, c.c)((e, r) => {
                            if (!i) return;
                            let a = Math.floor((e.startIndex * r) / t),
                                n = Math.ceil((e.endIndex * r) / t);
                            for (let e = a; e <= n; e++) i(e);
                        });
                    })({ pageSize: I.cM, callback: M });
                (0, E.X)(s.pagesLoader, M);
                let U = (0, c.c)((e) => {
                    let t = s.items[e],
                        i = O({ id: 'loading-messages.entity-is-loading' }, { entityName: O({ id: 'entity-names.artist' }) });
                    return t ? (0, r.jsx)(_.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, r.jsx)(y.V, { 'aria-label': i, round: !0, centered: !0 });
                });
                return ((0, a.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                s.isNotFound && (0, n.notFound)(),
                (0, C.J)(s.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: t } = (0, b.g)(),
                        i = null == e ? void 0 : e.fullTitle,
                        r = null == e ? void 0 : e.isResolved,
                        n = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                        s = (0, a.useCallback)(
                            (t) =>
                                n
                                    ? {}
                                    : e && r && i
                                      ? B(
                                            ((e) => {
                                                var t, i, r;
                                                return {
                                                    id: '',
                                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                                    artists: e.items.map((e) => ({ artist: (0, F.N)(e), popularTracks: [] })),
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
                            [e, i, r, n],
                        );
                    (0, j.C)(t.modal.isOpened ? null : s);
                })(s),
                t && s.isNeededToLoad && (0, a.use)(s.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: I.cM })),
                s.isSomethingWrong)
                    ? (0, r.jsx)(m.SomethingWentWrong, {})
                    : (0, r.jsx)(h.n, {
                          pageId: p._Q.GENRE_ARTISTS,
                          children: (0, r.jsx)(v.h, {
                              scrollElement: S,
                              outerTitle: s.fullTitle,
                              children: (0, r.jsxs)('div', {
                                  className: H().root,
                                  'data-test-id': o.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, r.jsx)(k.Y, {
                                          variant: k.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: L.canBack,
                                          children: (0, r.jsx)(u.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                      }),
                                      (0, r.jsxs)(d.N, {
                                          ref: P,
                                          className: H().root,
                                          containerClassName: H().container,
                                          children: [
                                              (0, r.jsx)(x.Q, {
                                                  maxColumnCount: I.I7,
                                                  count: D(),
                                                  rowGap: I.fZ,
                                                  columnGap: I.vX,
                                                  getEstimateRowSize: w,
                                                  minColumnWidth: I.K$,
                                                  maxColumnWidth: I.El,
                                                  onChangeRange: z,
                                                  renderItemByIndex: U,
                                              }),
                                              (0, r.jsx)(R.A, { children: (0, r.jsx)(T.w, { className: H().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var X = i(19994);
            let Y = () => {
                    let e = (0, g.W)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, f.g)(),
                        { formatMessage: a } = (0, l.A)(),
                        n = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) }),
                        s = (0, c.c)(() => (0, r.jsx)(y.V, { 'aria-label': n, round: !0, centered: !0 })),
                        o = (0, c.c)(() => I.tA),
                        u = (0, c.c)(() => void 0);
                    return (0, r.jsx)(v.h, {
                        scrollElement: t,
                        children: (0, r.jsxs)('div', {
                            className: H().root,
                            children: [
                                (0, r.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(X.W, { className: H().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)(d.N, {
                                    ref: i,
                                    className: H().root,
                                    containerClassName: H().container,
                                    children: (0, r.jsx)(x.Q, {
                                        maxColumnCount: I.I7,
                                        count: I.xi,
                                        rowGap: I.fZ,
                                        columnGap: I.vX,
                                        getEstimateRowSize: o,
                                        minColumnWidth: I.K$,
                                        maxColumnWidth: I.El,
                                        onChangeRange: u,
                                        renderItemByIndex: s,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                W = () => {
                    let e = (0, n.useSearchParams)().get('metatagId');
                    return (e || (0, n.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(Y, {}), children: (0, r.jsx)(G, { metatagId: e }) }));
                };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(88800),
                a = i(84961),
                n = i(88969),
                s = i(17392),
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
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                a = i(53548),
                n = i(2058),
                s = i(17392),
                l = i(96817),
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
                            className: x,
                            forwardRef: p,
                            style: h,
                            children: g,
                        } = e,
                        { formatMessage: f } = (0, n.A)(),
                        C = f({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(l.$, {
                        className: x,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: p,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: h,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var r = i(27169),
                a = i(29201);
            let n = (e) => {
                var t, i, n, s, l;
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
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
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
            i.d(t, { A: () => s });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                n = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: n } = e;
                return 'ru' === n && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, n.useState)(!1),
                    { formatMessage: x } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let s = await e.toggleLike();
                    (v(!1),
                        s === l.f.OK
                            ? i((0, r.jsx)(m.T, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, x, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
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
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => n, TF: () => l, hZ: () => s });
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
            function n(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            n = a.slice(1).join('=');
                        '"' === n[0] && (n = n.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var n;
                document.cookie =
                    ((n = r({ path: '/' }, i)),
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
                        })(n));
            }
            function l(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [_, v] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let s = await e.togglePin();
                    (v(!1),
                        s
                            ? i((0, r.jsx)(u.l, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
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
            i.d(t, { w: () => R });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(2058),
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
                _ = i(99839);
            let v = (e) => e(new Date(), (0, _.m)());
            var x = i(51611),
                p = i(72288),
                h = i(11006),
                g = i.n(h),
                f = i(17392),
                C = i(29504),
                A = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(g().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: g().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, r.jsx)(A.N, { target: '_blank', href: a, className: g().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(g().root, g().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, r.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: a, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, x.h)(),
                    o = u({ formatMessage: n, language: l, tld: i.tld, year: v(a) });
                return (0, r.jsx)(N, { className: t, data: o });
            });
            let R = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: _, user: h } = (0, p.g)(),
                    { formatDate: f, formatMessage: C } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: N } = (0, x.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    _ = [s, o, u];
                                return (i && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: N,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: v(f),
                    });
                return (0, r.jsx)(T, { className: (0, a.$)({ [g().root_withOffsetForDeeplink]: A }, i), data: E });
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
            i.d(t, { H: () => a, P: () => n });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                n = () => (0, r.useContext)(a);
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
                8752, 7435, 5108, 127, 1191, 1931, 7617, 3637, 426, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 9202, 6949, 4732, 1195,
                1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 54007)),
        ),
            (_N_E = e.O()));
    },
]);
