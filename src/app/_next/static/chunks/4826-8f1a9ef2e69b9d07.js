(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4826],
    {
        11405: (t, e, r) => {
            'use strict';
            var o;
            r.d(e, { g: () => o }),
                (function (t) {
                    (t.RATING = 'rating'), (t.YEAR = 'year');
                })(o || (o = {}));
        },
        19633: (t, e, r) => {
            'use strict';
            r.d(e, { HorizontalArtistCard: () => b });
            var o = r(54486),
                i = r(50420),
                a = r(28303),
                l = r(61910),
                n = r(43426),
                s = r(43350),
                c = r(31500),
                u = r(63585),
                d = r(8817),
                _ = r(73633),
                m = r(97800),
                p = r(63695),
                v = r(83252),
                f = r(80585),
                A = r(5956),
                g = r(96266),
                x = r.n(g);
            let h = (0, a.PA)((t) => {
                    var e;
                    let { className: r, artist: a, likeIconSize: n = 'xxs' } = t,
                        { user: c, trailer: u } = (0, v.Pjs)(),
                        _ = (0, v.PT7)(),
                        { sendLikeSearchFeedback: m } = (0, v.zEv)(),
                        g = (0, p.KX)(a),
                        [h, b] = (0, l.useState)(!1),
                        C = (0, d.c)(async () => {
                            h || a.isLiked || (b(!0), null == m || m()), await g();
                        }),
                        T = (0, v.Ftl)(),
                        y = (0, d.c)((t) => {
                            if ((t.stopPropagation(), _())) return void t.preventDefault();
                            u.openArtistTrailer(a.id), T(s.ky.Artist, a.id);
                        });
                    return (0, o.jsxs)('div', {
                        className: (0, i.$)(x().root, x().controls, r, { [x().controls_disabled]: !a.isAvailable }),
                        children: [
                            a.isAvailable &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(f.aQ, {
                                            fallback: (0, o.jsx)(f.cy, {
                                                size: 'xs',
                                                iconSize: n,
                                                className: (0, i.$)(x().item, x().likeIcon),
                                                isLiked: a.isLiked,
                                                onClick: C,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = a.trailer) ? void 0 : e.isAvailable) &&
                                            (0, o.jsx)(f.aQ, {
                                                fallback: (0, o.jsx)(f.kJ, {
                                                    className: (0, i.$)(x().item, x().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: y,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, o.jsx)('div', {
                                className: (0, i.$)(x().item, x().item_buttonArrow),
                                children: (0, o.jsx)(A.Icon, { className: f.$f.buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                b = (0, a.PA)((t) => {
                    let { className: e, artist: r, pageId: a, description: A, coverClassName: g, playButtonIconSize: x, likeIconSize: b } = t,
                        { formatMessage: C } = (0, n.A)(),
                        { ref: T, intersectionPropertyId: y } = (0, v.nMI)(),
                        { from: k } = (0, v.fyy)({ pageId: a }),
                        [j, M] = (0, l.useState)(!1),
                        N = (0, v.ZpR)(r.url),
                        I = (0, v.brA)(),
                        S = (0, v.PT7)(),
                        { sendNavigateSearchFeedback: w, sendPlaySearchFeedback: E } = (0, v.zEv)(),
                        L = (0, v.NKK)(),
                        {
                            isPlaying: B,
                            isCurrent: R,
                            togglePlay: O,
                        } = (0, v.Dx4)({ playContextParams: { contextData: { type: u.K.Artist, meta: { id: Number(r.id) }, from: k }, loadContextMeta: !0 } }),
                        P = (0, p.SA)({ artist: r, callback: N }),
                        K = (0, p.SA)({ artist: r, callback: O }),
                        D = (0, d.c)((t) => {
                            null == w || w(), L({ to: s.QT.ArtistScreen }), P(t);
                        }),
                        F = (0, d.c)(() => {
                            S() || (j || B || (M(!0), null == E || E()), K(), I(!B));
                        }),
                        z = (0, d.c)((t) => {
                            (0, _.P)(t, f.$f.ripple), D(t);
                        }),
                        U = (0, d.c)((t) => {
                            t.stopPropagation(), D(t);
                        }),
                        H = (0, l.useCallback)(
                            (t) =>
                                (0, o.jsx)(f.q1, {
                                    isAvailable: r.isAvailable,
                                    isDisliked: !1,
                                    coverUri: r.coverUri,
                                    title: r.name,
                                    className: (0, i.$)(f.$f.playButtonCell, g),
                                    radius: 'round',
                                    alt: C({ id: 'entity-names.artist-name' }, { artistName: r.name }),
                                    ...t,
                                }),
                            [r, g, C],
                        ),
                        W = null == H ? void 0 : H({ onPlayButtonClick: F, isPlaying: B, isCurrent: R, playButtonIconSize: x }),
                        q = (0, l.useMemo)(
                            () =>
                                r.url && r.isAvailable
                                    ? (0, o.jsx)(f.N_, {
                                          className: (0, i.$)(f.$f.text, f.$f.titleLink),
                                          href: r.url,
                                          onClick: U,
                                          ...(0, c.Am)(c.Kq.artist.SEARCH_ARTIST_CARD_TITLE_LINK),
                                          children: r.name,
                                      })
                                    : (0, o.jsx)(m.Caption, {
                                          className: (0, i.$)(f.$f.text, f.$f.titleText),
                                          size: 'm',
                                          variant: 'div',
                                          type: 'text',
                                          children: r.name,
                                      }),
                            [r.isAvailable, r.name, r.url, U],
                        );
                    return (0, o.jsxs)(f.Cj, {
                        ref: T,
                        'data-intersection-property-id': y,
                        className: (0, i.$)(f.$f.root, { [f.$f.root_disabled]: !r.isAvailable }, e),
                        'aria-label': r.name,
                        onClick: z,
                        ...(0, c.Am)(c.Kq.artist.HORIZONTAL_ARTIST_CARD),
                        children: [
                            W,
                            (0, o.jsx)(f.ro, {
                                isDisabled: !r.isAvailable,
                                isDisliked: !1,
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                title: q,
                                description: A,
                            }),
                            (0, o.jsx)(h, { className: f.$f.controlsBar, artist: r, likeIconSize: b }),
                        ],
                    });
                });
        },
        21390: (t, e, r) => {
            'use strict';
            r.d(e, { L: () => u });
            var o,
                i = r(94377),
                a = r(61910),
                l = {
                    6699: (t, e, r) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useDebouncedToggle = void 0);
                        let o = r(352),
                            i = r(810);
                        e.useDebouncedToggle = (t) => {
                            let { delay: e, initialState: r, throttleTimeout: a } = t,
                                l = (0, i.useRef)(null),
                                [n, s] = (0, i.useState)(!!r),
                                c = (0, i.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            s(!r),
                                                l.current && window.clearTimeout(l.current),
                                                (l.current = window.setTimeout(() => {
                                                    s(!!r);
                                                }, e));
                                        }, a),
                                    [e, r, a],
                                ),
                                u = (0, i.useCallback)(() => {
                                    s(!!r), l.current && window.clearTimeout(l.current);
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        l.current && window.clearTimeout(l.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement) return t;
                                    if (null === t.current || t.current instanceof HTMLElement) return t.current;
                                }
                            });
                    },
                    352: (t) => {
                        t.exports = i;
                    },
                    810: (t) => {
                        t.exports = o || (o = r.t(a, 2));
                    },
                },
                n = {};
            function s(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var r = (n[t] = { exports: {} });
                return l[t](r, r.exports, s), r.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, '__esModule', { value: !0 }), (c.useScroll = void 0);
                let t = s(810),
                    e = s(361),
                    r = s(6699);
                c.useScroll = (o) => {
                    let { onScroll: i, listenIsScrolling: a, elementRef: l } = o,
                        { state: n, handleDebouncedToggle: s } = (0, r.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        c = (0, t.useCallback)(() => {
                            a && s(), null == i || i();
                        }, [a, s, i]);
                    return (
                        (0, t.useEffect)(() => {
                            let t = (0, e.getElementFromRefOrElement)(l);
                            if (null === t) return;
                            let r = null != t ? t : window,
                                o = { capture: !0, passive: !0 };
                            return r.addEventListener('scroll', c, o), () => r.removeEventListener('scroll', c, o);
                        }, [l, c]),
                        n
                    );
                };
            })(),
                c.__esModule;
            var u = c.useScroll;
        },
        23504: (t, e, r) => {
            'use strict';
            r.d(e, { ArtistCard: () => T });
            var o = r(54486),
                i = r(50420),
                a = r(28303),
                l = r(61910),
                n = r(43426),
                s = r(43350),
                c = r(31500),
                u = r(63585),
                d = r(8817),
                _ = r(27510),
                m = r(71712),
                p = r(5956),
                v = r(6971),
                f = r(97800),
                A = r(63695),
                g = r(83252),
                x = r(80585),
                h = r(99182),
                b = r(34846),
                C = r.n(b);
            let T = (0, a.PA)((t) => {
                let { artist: e, className: r, children: a, contentLinesCount: b, topTitleElement: T, bottomTitleElement: y } = t,
                    { ref: k, intersectionPropertyId: j } = (0, g.nMI)(),
                    { trailer: M, user: N } = (0, g.Pjs)(),
                    { from: I, utmLink: S } = (0, g.fyy)({ contextId: e.id, contextType: u.K.Artist }),
                    { formatMessage: w } = (0, n.A)(),
                    [E, L] = (0, l.useState)(!1),
                    [B, R] = (0, l.useState)(!1),
                    [O, P] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: K, sendNavigateSearchFeedback: D, sendPlaySearchFeedback: F } = (0, g.zEv)(),
                    z = (0, g.NKK)(),
                    U = (0, g.brA)(),
                    H = (0, A.KX)(e),
                    W = (0, A.A7)(e),
                    { id: q, name: X, coverUri: G, isLiked: Y } = e,
                    $ = (0, g.ZpR)(e.url),
                    [J, Q] = (0, l.useState)(!1),
                    Z = (0, g.Ftl)(),
                    V = (0, g.PT7)(),
                    tt = (0, d.c)((t) => {
                        if ((t.stopPropagation(), V())) return void t.preventDefault();
                        M.openArtistTrailer(e.id), Z(s.ky.Artist, e.id);
                    }),
                    te = (0, l.useMemo)(() => {
                        let t = w({ id: 'entity-names.artist-name' }, { artistName: X }),
                            e = Y ? w({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [X, Y, w]),
                    { isPlaying: tr, togglePlay: to } = (0, g.Dx4)({
                        playContextParams: { contextData: { type: u.K.Artist, meta: { id: Number(q) }, from: I, utmLink: S }, loadContextMeta: !0 },
                    }),
                    ti = (0, A.SA)({ artist: e, callback: $ }),
                    ta = (0, A.SA)({ artist: e, callback: to }),
                    tl = (0, d.c)((t) => {
                        null == D || D(), z({ to: s.QT.ArtistScreen }), ti(t);
                    }),
                    tn = (0, d.c)(() => {
                        V() || (E || tr || (L(!0), null == F || F()), ta(), U(!tr));
                    }),
                    ts = (0, d.c)(() => {
                        B || Y || (R(!0), null == K || K()), H();
                    }),
                    tc = (0, d.c)((t) => {
                        t.preventDefault(), t.stopPropagation();
                    }),
                    tu = (0, d.c)((t) => {
                        P(t), Q(t);
                    }),
                    td = (0, l.useMemo)(
                        () =>
                            (0, o.jsx)(
                                h.ArtistContextMenu,
                                {
                                    artist: e,
                                    onOpenChange: tu,
                                    open: O,
                                    onClick: tc,
                                    className: (0, i.$)(C().menuButton, C().control),
                                    size: 's',
                                    icon: (0, o.jsx)(p.Icon, { size: 'xxs', variant: 'more' }),
                                    ...(0, c.Am)(c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON),
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tc, tu, O],
                    ),
                    t_ = (0, l.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, o.jsx)(
                                x.nE,
                                {
                                    children: (0, o.jsx)(x.kJ, {
                                        className: (0, i.$)(C().trailerButton, C().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tt,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tt]),
                    tm = (0, l.useMemo)(
                        () =>
                            (0, o.jsx)(
                                x.O0,
                                { onClick: W, isPinned: e.isPinned, className: (0, i.$)(C().pinButton, C().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, W],
                    ),
                    tp = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, o.jsx)(
                                m.hg,
                                {
                                    isVisible: O || J,
                                    className: C().controls,
                                    radius: 'round',
                                    playControl: (0, o.jsx)(
                                        x.DM,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, i.$)(C().playButton, C().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tn,
                                            isPlaying: tr,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, o.jsx)(
                                        x.cy,
                                        {
                                            className: (0, i.$)(C().likeButton, C().control),
                                            isLiked: Y,
                                            onClick: ts,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !N.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: td,
                                    pinControl: tm,
                                    trailerControl: t_,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tv = (0, l.useMemo)(
                        () =>
                            (0, o.jsx)(v.Paper, {
                                className: C().cover,
                                radius: 'round',
                                withShadow: !0,
                                ...(0, c.Am)(c.Kq.artist.ARTIST_CARD),
                                children: (0, o.jsxs)('div', {
                                    className: C().coverBlock,
                                    onClick: tl,
                                    children: [
                                        (0, o.jsx)(x.BW, {
                                            className: C().image,
                                            src: G,
                                            size: 200,
                                            fit: 'cover',
                                            alt: te,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tp,
                                    ],
                                }),
                            }),
                        [tl, G, te, e.isAvailable, tp],
                    );
                return (0, o.jsx)(m.MN, {
                    ref: k,
                    className: (0, i.$)(C().root, r),
                    textPosition: 'center',
                    'aria-label': te,
                    title: (0, o.jsxs)(o.Fragment, {
                        children: [
                            T,
                            (0, o.jsx)(f.Caption, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, o.jsx)(x.N_, {
                                    className: C().titleLink,
                                    href: e.url,
                                    'aria-label': te,
                                    onClick: tl,
                                    ...(0, c.Am)(c.Kq.artist.ARTIST_TITLE),
                                    children: X,
                                }),
                            }),
                            y,
                        ],
                    }),
                    srTitle: (0, o.jsx)(x.N_, { href: e.url, onClick: tl, children: te }),
                    'data-intersection-property-id': j,
                    contentLinesCount: b,
                    view: tv,
                    ...(0, c.Am)(c.Kq.artist.ARTIST_ITEM),
                    children: a,
                });
            });
        },
        26923: (t, e, r) => {
            'use strict';
            r.d(e, { ArtistAboutModal: () => L });
            var o = r(54486),
                i = r(28303),
                a = r(61910),
                l = r(43426),
                n = r(31500),
                s = r(27510),
                c = r(77881),
                u = r(5956),
                d = r(32692),
                _ = r(83252),
                m = r(80585),
                p = r(69258),
                v = r.n(p),
                f = r(62443),
                A = r(39694),
                g = r(97800),
                x = r(63695),
                h = r(47713),
                b = r(8817),
                C = r(58360),
                T = r(54736),
                y = r.n(T);
            let k = (0, i.PA)((t) => {
                let { covers: e } = t,
                    { formatMessage: r } = (0, l.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: a },
                    } = (0, _.Pjs)(),
                    s = e.slice(0, 1),
                    u = e.length - 2 + 1,
                    d = (0, b.c)((t) => () => {
                        a.close(), i.openImages({ images: e, initialSlideIndex: t });
                    });
                return (0, o.jsxs)('div', {
                    className: y().root,
                    ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_IMAGE_SLIDER),
                    children: [
                        s.map((t, e) =>
                            (0, o.jsx)(
                                c.$,
                                {
                                    className: y().button,
                                    onClick: d(e),
                                    'aria-label': r({ id: 'slider.view-artist-covers' }),
                                    ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON),
                                    children: (0, o.jsx)(C.Image, { fit: 'contain', className: y().image, src: t, size: 400, withAvatarReplace: !0 }),
                                },
                                e,
                            ),
                        ),
                        e[1] &&
                            (0, o.jsxs)(c.$, {
                                className: y().button,
                                onClick: d(1),
                                'aria-label': r({ id: 'slider.view-artist-covers' }),
                                ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON),
                                children: [
                                    (0, o.jsx)(C.Image, { fit: 'contain', className: y().image, src: e[1], size: 400, withAvatarReplace: !0 }),
                                    (0, o.jsx)('div', {
                                        className: y().moreCovers,
                                        children: (0, o.jsx)(g.Caption, {
                                            variant: 'span',
                                            className: y().moreCoversText,
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, o.jsx)(h.A, { id: 'slider.images-left-count', values: { imagesLeft: u } }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var j = r(44844),
                M = r.n(j);
            let N = (0, i.PA)(() => {
                var t, e, r, i, a, s, c;
                let { formatMessage: u } = (0, l.A)(),
                    {
                        modals: { artistAboutModal: d },
                    } = (0, _.Pjs)(),
                    { state: m, setState: p } = (0, f.e)(!1),
                    v = (0, x.eI)(d.artistType);
                return (0, o.jsxs)('div', {
                    className: M().root,
                    children: [
                        d.isResolved &&
                            (0, o.jsxs)('header', {
                                className: M().header,
                                ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_HEADER),
                                children: [
                                    (0, o.jsx)(g.Caption, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: M().subtitle,
                                        ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_HEADER_SUBTITLE),
                                        children: v,
                                    }),
                                    (0, o.jsx)(g.Heading, {
                                        size: 'xxl',
                                        variant: 'div',
                                        className: M().title,
                                        ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_HEADER_TITLE),
                                        children: null == (t = d.artist) ? void 0 : t.name,
                                    }),
                                ],
                            }),
                        d.description &&
                            (0, o.jsx)(A.K, {
                                moreText: u({ id: 'track-modal.read-more' }),
                                className: M().descriptionWrapper,
                                buttonClassName: M().readMoreButton,
                                buttonProps: (0, n.Am)(n.e8.content.ARTIST_ABOUT_DESCRIPTION_READ_MORE_BUTTON),
                                open: m,
                                onOpenChange: p,
                                lineClamp: 7,
                                withFade: !0,
                                ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_DESCRIPTION),
                                children: (0, o.jsx)(g.Caption, {
                                    variant: 'div',
                                    className: M().description,
                                    size: 'l',
                                    weight: 'medium',
                                    ...(0, n.Am)(n.e8.content.ARTIST_ABOUT_DESCRIPTION_TEXT),
                                    children: d.description,
                                }),
                            }),
                        d.isArtistStatsAvailable &&
                            (0, o.jsx)(x.FO, { lastMonthListeners: null != (s = d.lastMonthListeners) ? s : 0, lastMonthListenersDelta: d.lastMonthListenersDelta }),
                        d.isResolved &&
                            (0, o.jsx)(x.lW, {
                                className: M().bandlinkScanner,
                                artistId: null == (e = d.artist) ? void 0 : e.id,
                                artistName: null == (r = d.artist) ? void 0 : r.name,
                            }),
                        d.links &&
                            (null == (i = d.links) ? void 0 : i.length) > 0 &&
                            (0, o.jsx)(x.KH, { links: d.links, artistName: null != (c = null == (a = d.artist) ? void 0 : a.name) ? c : '' }),
                        d.covers && d.covers.length > 0 && (0, o.jsx)(k, { covers: d.covers }),
                    ],
                });
            });
            var I = r(22674),
                S = r(72588),
                w = r.n(S);
            let E = () =>
                    (0, o.jsxs)('div', {
                        className: w().root,
                        children: [(0, o.jsx)(I.Shimmer, { className: w().entityName }), (0, o.jsx)(I.Shimmer, { className: w().title }), (0, o.jsx)(m.q$, { count: 4 })],
                    }),
                L = (0, i.PA)(() => {
                    let { formatMessage: t } = (0, l.A)(),
                        { notify: e } = (0, _.lkh)(),
                        { contentRef: r } = (0, _.gKY)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: p },
                        } = (0, _.Pjs)();
                    (0, a.useEffect)(() => {
                        i.isRejected &&
                            (e((0, o.jsx)(m.hT, { error: t({ id: 'artist-errors.error-during-loading-artist-info' }) }), { containerId: _.uQT.ERROR }), i.close());
                    }, [i, i.isRejected, t, e]);
                    let f = (0, s.L)(() => (i.isLoading ? (0, o.jsx)(E, {}) : (0, o.jsx)(N, {})));
                    return (0, o.jsxs)(d.a, {
                        placement: p ? 'default' : 'right',
                        size: p ? 'fullscreen' : 'fitContent',
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: v().modalContent,
                        headerClassName: v().header,
                        className: v().root,
                        overlayClassName: v().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: t({ id: 'interface-actions.close' }),
                        portalNode: p ? null : r,
                        showHeader: !1,
                        containerProps: (0, n.Am)(n.Xk.artist.ARTIST_ABOUT_MODAL),
                        children: [
                            (0, o.jsx)(c.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, o.jsx)(u.Icon, { variant: 'close', size: 'xxs' }),
                                className: v().closeButton,
                                onClick: i.close,
                                'aria-label': t({ id: 'interface-actions.close' }),
                                ...(0, n.Am)(n.Xk.artist.ARTIST_ABOUT_MODAL_CLOSE_BUTTON),
                            }),
                            f,
                        ],
                    });
                });
        },
        33276: (t, e, r) => {
            'use strict';
            r.d(e, { hO: () => _, jr: () => m, jp: () => p, QZ: () => i }), r(77607);
            var o = r(61910);
            let i = (t, e, r) => {
                let i = null != r && r;
                return {
                    topColorStyle: (0, o.useMemo)(() => {
                        if (void 0 === e) return;
                        let r = i ? 93 : 17,
                            o = e - r;
                        return { '--average-color-background': t, transform: 'translateY('.concat(e >= r ? 0 : o, 'px)'), opacity: 1 };
                    }, [e, i, t]),
                    headerStyle: (0, o.useMemo)(() => ({ '--average-color-background': t }), [t]),
                };
            };
            var a = r(54486),
                l = r(1365),
                n = r(28303),
                s = r(21390),
                c = r(83252),
                u = r(80585);
            let d = (t) => {
                    let { element: e, scrollTop: r, isMobile: o } = t,
                        i = 0.6 * e.clientHeight;
                    return r + (o ? 60 : 76) >= e.offsetTop + i;
                },
                _ = (0, n.PA)((t) => {
                    let { children: e, scrollElement: r, outerTitle: i = '', headerElement: n, headerThreshold: _, shouldHideHeader: m } = t,
                        [p, v] = (0, o.useState)(i),
                        [f, A] = (0, o.useState)(null),
                        [g, x] = (0, o.useState)(null),
                        [h, b] = (0, o.useState)(null),
                        [C, T] = (0, o.useState)(!1),
                        [y, k] = (0, o.useState)(!1),
                        [j, M] = (0, o.useState)(!1),
                        [N, I] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: S },
                        } = (0, c.Pjs)();
                    (0, o.useLayoutEffect)(() => {
                        v(i);
                    }, [i]);
                    let w = (0, o.useCallback)(() => {
                        let t = null != _ ? _ : 10,
                            e = n ? Number(n.offsetTop) - t : t;
                        e < 0 && (e = 0);
                        let o = (t) => {
                            M(t > e),
                                m && I(t > 30),
                                (null == f ? void 0 : f.current) && T(d({ element: null == f ? void 0 : f.current, scrollTop: t, isMobile: S })),
                                (null == g ? void 0 : g.current) && k(d({ element: null == g ? void 0 : g.current, scrollTop: t, isMobile: S }));
                        };
                        S ? o(window.scrollY) : r && o(r.scrollTop);
                    }, [_, n, S, m, f, g, r]);
                    (0, o.useEffect)(() => {
                        S ? 0 === window.scrollY && M(!1) : (r && 0 !== r.scrollTop) || M(!1);
                    }, [r, null == r ? void 0 : r.scrollTop, S]);
                    let E = (0, o.useMemo)(() => (S ? { onScroll: (0, l.A)(w, 200) } : { onScroll: (0, l.A)(w, 200), elementRef: r }), [w, r, S]);
                    (0, s.L)(E);
                    let L = (0, o.useMemo)(
                        () => ({
                            title: p,
                            setTitle: v,
                            titleElement: f,
                            scrollElement: S ? null : r,
                            setTitleElement: A,
                            childElement: g,
                            setChildElement: x,
                            child: h,
                            setChild: b,
                            isScrolledChild: y,
                            isScrolledTitle: C,
                            isScrolling: j,
                            isHeaderHidden: N,
                        }),
                        [p, C, f, r, j, S, h, g, y, N],
                    );
                    return (0, a.jsx)(u.B9.Provider, { value: L, children: e });
                }),
                m = (t) => {
                    let { children: e, child: r, className: i } = t,
                        { setChildElement: l, setChild: n } = (0, o.useContext)(u.B9),
                        s = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == s ? void 0 : s.current) && l(s), r && n(r);
                        }, [s, r, l, n]),
                        (0, o.useEffect)(
                            () => () => {
                                n(null);
                            },
                            [n],
                        ),
                        (0, a.jsx)('div', { ref: s, className: i, children: e })
                    );
                },
                p = (t) => {
                    let { children: e, title: r, className: i } = t,
                        { setTitleElement: l, setTitle: n } = (0, o.useContext)(u.B9),
                        s = (0, o.useRef)(null);
                    return (
                        (0, o.useEffect)(() => {
                            (null == s ? void 0 : s.current) && l(s), r && n(r);
                        }, [s, r, l, n]),
                        (0, o.useEffect)(
                            () => () => {
                                n('');
                            },
                            [n],
                        ),
                        (0, a.jsx)('div', { ref: s, className: i, children: e })
                    );
                };
        },
        34846: (t) => {
            t.exports = {
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
        39694: (t, e, r) => {
            'use strict';
            r.d(e, { K: () => u });
            var o,
                i = r(94377),
                a = r(61910),
                l = {
                    5881: (t, e, r) => {
                        function o() {
                            for (var t, e, r = 0, o = ''; r < arguments.length; )
                                (t = arguments[r++]) &&
                                    (e = (function t(e) {
                                        var r,
                                            o,
                                            i = '';
                                        if ('string' == typeof e || 'number' == typeof e) i += e;
                                        else if ('object' == typeof e)
                                            if (Array.isArray(e)) for (r = 0; r < e.length; r++) e[r] && (o = t(e[r])) && (i && (i += ' '), (i += o));
                                            else for (r in e) e[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(t)) &&
                                    (o && (o += ' '), (o += e));
                            return o;
                        }
                        r.r(e), r.d(e, { clsx: () => o, default: () => i });
                        let i = o;
                    },
                    1920: (t, e, r) => {
                        r.r(e), r.d(e, { default: () => o });
                        let o = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    8903: (t, e, r) => {
                        r.r(e), r.d(e, { default: () => o });
                        let o = {
                            root: 'BnN6sQIg6NahNBun6fkP',
                            fade: 'MM8MKXCw0gMkVvq7C1YS',
                            fade_active: 'MsLY_qiKofQrwKAr98EC',
                            button: 'Dp6n_Y0cfUyPQT1Z6uIm',
                            text: 'bfmUuyonXAK7HKYtDzUK',
                        };
                    },
                    9097: (t, e) => {
                        var r = Symbol.for('react.transitional.element');
                        function o(t, e, o) {
                            var i = null;
                            if ((void 0 !== o && (i = '' + o), void 0 !== e.key && (i = '' + e.key), 'key' in e))
                                for (var a in ((o = {}), e)) 'key' !== a && (o[a] = e[a]);
                            else o = e;
                            return { $$typeof: r, type: t, key: i, ref: void 0 !== (e = o.ref) ? e : null, props: o };
                        }
                        (e.Fragment = Symbol.for('react.fragment')), (e.jsx = o), (e.jsxs = o);
                    },
                    4377: (t, e, r) => {
                        t.exports = r(9097);
                    },
                    4601: (t, e, r) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useToggle = void 0);
                        let o = r(810);
                        e.useToggle = (t) => {
                            let [e, r] = (0, o.useState)(t);
                            (0, o.useEffect)(() => {
                                r(t);
                            }, [t]);
                            let i = (0, o.useCallback)(() => {
                                    r((t) => !t);
                                }, []),
                                a = (0, o.useCallback)(() => {
                                    r(!0);
                                }, []),
                                l = (0, o.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: e, toggle: i, setState: r, toggleTrue: a, toggleFalse: l };
                        };
                    },
                    666: (t, e, r) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.useTruncate = void 0);
                        let o = r(352),
                            i = r(810),
                            a = r(4601);
                        e.useTruncate = (t) => {
                            let [e, r] = (0, i.useState)(0),
                                { state: l, toggleTrue: n, toggleFalse: s } = (0, a.useToggle)(!1),
                                c = (0, i.useMemo)(
                                    () =>
                                        (0, o.throttle)(() => {
                                            let { offsetHeight: r, scrollHeight: o } = (null == t ? void 0 : t.current) || {};
                                            r && o && e < o ? n() : s();
                                        }, 100),
                                    [e, t, s, n],
                                );
                            return (
                                (0, i.useEffect)(() => {
                                    var o, i;
                                    !e && (null == (o = t.current) ? void 0 : o.offsetHeight) && r(null == (i = t.current) ? void 0 : i.offsetHeight);
                                }, [e, t]),
                                (0, i.useEffect)(
                                    () => (
                                        c(),
                                        window.addEventListener('resize', c),
                                        () => {
                                            window.removeEventListener('resize', c);
                                        }
                                    ),
                                    [c],
                                ),
                                { isTruncated: l }
                            );
                        };
                    },
                    8796: (t, e) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }),
                            (e.createRipple = void 0),
                            (e.createRipple = function (t, e, r) {
                                let o = null != r ? r : t.currentTarget,
                                    i = document.createElement('span'),
                                    a = Math.max(o.clientWidth, o.clientHeight),
                                    l = a / 2,
                                    n = o.getBoundingClientRect(),
                                    s = 0 === t.clientX ? Math.round(n.width / 2) : t.clientX - n.left,
                                    c = 0 === t.clientY ? Math.round(n.height / 2) : t.clientY - n.top;
                                (i.style.width = ''.concat(a, 'px')),
                                    (i.style.height = ''.concat(a, 'px')),
                                    (i.style.left = 0 === t.clientX ? '0px' : ''.concat(s - l, 'px')),
                                    (i.style.top = ''.concat(c - l, 'px')),
                                    i.classList.add(e);
                                let u = o.getElementsByClassName(e)[0];
                                u && u.remove(), o.insertBefore(i, o.firstChild);
                            });
                    },
                    361: (t, e) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }),
                            (e.getElementFromRefOrElement = void 0),
                            (e.getElementFromRefOrElement = (t) => {
                                if (void 0 !== t) {
                                    if (null === t || t instanceof HTMLElement) return t;
                                    if (null === t.current || t.current instanceof HTMLElement) return t.current;
                                }
                            });
                    },
                    8216: (t, e, r) => {
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.getElementFromRefOrElement = e.createRipple = void 0);
                        var o = r(8796);
                        Object.defineProperty(e, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return o.createRipple;
                            },
                        });
                        var i = r(361);
                        Object.defineProperty(e, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return i.getElementFromRefOrElement;
                            },
                        });
                    },
                    8119: function (t, e, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.Button = void 0);
                        let i = r(4377),
                            a = r(810),
                            l = r(5881),
                            n = r(8216),
                            s = o(r(1920)),
                            c = (t) => {
                                let {
                                        forwardRef: e,
                                        isBlock: r,
                                        iconPosition: o = 'left',
                                        children: c,
                                        className: u,
                                        color: d = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: v,
                                        onClick: f,
                                        radius: A = 'm',
                                        size: g,
                                        type: x = 'button',
                                        variant: h = 'default',
                                        withRipple: b = !0,
                                        withHover: C = !0,
                                        withBorder: T = !1,
                                        disabled: y,
                                        iconClassName: k,
                                        contentContainerClassName: j,
                                        ...M
                                    } = t,
                                    N = (0, a.useId)(),
                                    I = !a.Children.toArray(c).filter(Boolean).length,
                                    S = 'left' === o,
                                    w = null,
                                    E = (0, a.isValidElement)(p);
                                if (m) {
                                    var L, B;
                                    w = (0, a.cloneElement)(m, {
                                        className: (0, l.clsx)(
                                            s.default.icon,
                                            {
                                                [s.default['icon_position_'.concat(o)]]: o && !I,
                                                [s.default.icon_withButtonSize]: !(null == (L = m.props) ? void 0 : L.size),
                                            },
                                            null == (B = m.props) ? void 0 : B.className,
                                            k,
                                        ),
                                        key: N,
                                    });
                                }
                                let R = (0, a.useMemo)(() => (E ? (0, i.jsx)('div', { className: s.default.spinnerContainer, children: p }) : null), [E, p]),
                                    O = (0, a.useCallback)(
                                        (t) => {
                                            E || (b && (0, n.createRipple)(t, s.default.ripple), null == f || f(t));
                                        },
                                        [E, f, b],
                                    );
                                return (0, i.jsx)('button', {
                                    ref: e,
                                    className: (0, l.clsx)(
                                        s.default.root,
                                        s.default['root_'.concat(d, '_').concat(h)],
                                        s.default['root_radius_'.concat(A)],
                                        s.default.root_size,
                                        {
                                            [s.default['root_'.concat(d, '_withHover_').concat(h)]]: C && !y && !E,
                                            [s.default['root_size_'.concat(g)]]: g,
                                            [s.default.root_withoutBorder]: !T,
                                            [s.default.root_withActiveSpinner]: E,
                                            [s.default.block]: r,
                                            [s.default.flexIcon]: _,
                                            [s.default.iconOnly]: I,
                                            [s.default.root_icon_left]: m && !I && S,
                                            [s.default.root_icon_right]: m && !I && !S,
                                        },
                                        u,
                                    ),
                                    type: x,
                                    role: v,
                                    onClick: O,
                                    ...M,
                                    disabled: y,
                                    'aria-live': E ? 'polite' : 'off',
                                    'aria-busy': E,
                                    children:
                                        m || E
                                            ? (0, i.jsxs)('span', {
                                                  className: (0, l.clsx)(s.default.contentContainer, { [s.default.contentContainer_block]: r }, j),
                                                  children: [m && S && w, !I && c, m && !S && w, R],
                                              })
                                            : c,
                                });
                            };
                        e.Button = (0, a.forwardRef)((t, e) => (0, i.jsx)(c, { forwardRef: e, ...t }));
                    },
                    217: function (t, e, r) {
                        var o =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        Object.defineProperty(e, '__esModule', { value: !0 }), (e.CollapsableText = void 0);
                        let i = r(4377),
                            a = r(5881),
                            l = r(810),
                            n = r(666),
                            s = r(8119),
                            c = o(r(8903));
                        e.CollapsableText = (t) => {
                            var e;
                            let {
                                    className: r,
                                    children: o,
                                    lineClamp: u,
                                    moreText: d,
                                    lessText: _,
                                    buttonClassName: m,
                                    buttonProps: p,
                                    withFade: v,
                                    initialOpen: f = !1,
                                    open: A,
                                    onOpenChange: g,
                                    ...x
                                } = t,
                                [h, b] = (0, l.useState)(f),
                                C = (0, l.useRef)(null),
                                { isTruncated: T } = (0, n.useTruncate)(C),
                                y = null != A ? A : h,
                                k = null != g ? g : b,
                                j = (0, l.cloneElement)(o, {
                                    ref: C,
                                    lineClamp: (!y && u) || void 0,
                                    className: (0, a.clsx)(null == (e = o.props) ? void 0 : e.className, c.default.text),
                                }),
                                M = (0, l.useMemo)(
                                    () => (v && T ? (0, i.jsx)('div', { className: (0, a.clsx)(c.default.fade, { [c.default.fade_active]: !y }), children: j }) : j),
                                    [T, y, j, v],
                                ),
                                N = (0, l.useCallback)(() => {
                                    k(!y);
                                }, [y, k]),
                                I = y ? _ : d;
                            return (0, i.jsxs)('div', {
                                className: (0, a.clsx)(c.default.root, r),
                                ...x,
                                children: [
                                    M,
                                    T &&
                                        I &&
                                        (0, i.jsx)(s.Button, {
                                            ...p,
                                            variant: 'text',
                                            withRipple: !1,
                                            onClick: N,
                                            className: (0, a.clsx)(c.default.button, m),
                                            color: 'primary',
                                            children: I,
                                        }),
                                ],
                            });
                        };
                    },
                    352: (t) => {
                        t.exports = i;
                    },
                    810: (t) => {
                        t.exports = o || (o = r.t(a, 2));
                    },
                },
                n = {};
            function s(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var r = (n[t] = { exports: {} });
                return l[t].call(r.exports, r, r.exports, s), r.exports;
            }
            (s.d = (t, e) => {
                for (var r in e) s.o(e, r) && !s.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
            }),
                (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
                (s.r = (t) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(t, '__esModule', { value: !0 });
                });
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.f = void 0);
                var t = s(217);
                Object.defineProperty(c, 'f', {
                    enumerable: !0,
                    get: function () {
                        return t.CollapsableText;
                    },
                });
            })();
            var u = c.f;
            c.X;
        },
        44844: (t) => {
            t.exports = {
                root: 'ArtistAboutModalContent_root__XGW1F',
                header: 'ArtistAboutModalContent_header__ws7Ap',
                title: 'ArtistAboutModalContent_title__hMO2k',
                subtitle: 'ArtistAboutModalContent_subtitle__OpssN',
                descriptionWrapper: 'ArtistAboutModalContent_descriptionWrapper__jNL4G',
                description: 'ArtistAboutModalContent_description__KlWvL',
                readMoreButton: 'ArtistAboutModalContent_readMoreButton__1ageU',
                bandlinkScanner: 'ArtistAboutModalContent_bandlinkScanner__Fwv2x',
            };
        },
        54736: (t) => {
            t.exports = {
                root: 'ArtistAboutModalImageSlider_root__L18Xb',
                button: 'ArtistAboutModalImageSlider_button__GPXyc',
                image: 'ArtistAboutModalImageSlider_image__3CTLr',
                moreCovers: 'ArtistAboutModalImageSlider_moreCovers__7oDPM',
                moreCoversText: 'ArtistAboutModalImageSlider_moreCoversText__W_P8L',
            };
        },
        55616: (t, e, r) => {
            'use strict';
            r.d(e, {
                vx: () => u,
                r3: () => m,
                EV: () => p,
                y8: () => k.ArtistAboutModal,
                Xj: () => b,
                ao: () => j.ArtistCard,
                gg: () => M.ArtistContextMenu,
                G4: () => T,
                NN: () => N.ArtistTopCard,
                GV: () => y,
                eS: () => _,
                cz: () => I.HorizontalArtistCard,
                M$: () => d,
                xx: () => s,
                dg: () => c,
                LH: () => i,
                MX: () => n,
            });
            var o = r(93064);
            let i = (t) => (0, o.wg)({ title: t.title, url: t.action.weblink });
            var a = r(63695),
                l = r(42140);
            let n = (t) => {
                    let e = (0, a.as)({ artist: t.artist }),
                        r = (0, l.ws)(t.top);
                    return (0, o.wg)({ artist: e, listenTimeSeconds: t.listenTimeSeconds, top: r });
                },
                s = 5,
                c = 9,
                u = 9,
                d = 3,
                _ = 5,
                m = 20,
                p = 20;
            var v = r(97396),
                f = r(61910),
                A = r(11405),
                g = r(83252);
            (0, f.cache)(async function (t, e) {
                let r,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { artistId: t, page: 0, pageSize: m, sort: { sortBy: A.g.YEAR } };
                (0, g.LLJ)(t) || (0, v.notFound)();
                try {
                    let i,
                        { container: a, backendHostTld: l, locale: n, host: c, fullUrl: u, isRSC: d, requestUrl: _ } = await (0, g.IhE)();
                    if (d) return { artist: void 0, albums: void 0, backendHostTld: l, locale: n, host: c, fullUrl: u, requestUrl: _ };
                    let m = a.get(g.O9U),
                        p = await m.getBriefInfo({
                            artistId: t,
                            popularTracksCount: s,
                            fetchPlaylistLikesCounts: !0,
                            discographyBlockEnabled: !0,
                            useClipDataFormat: !0,
                        });
                    switch (e) {
                        case g.hVl.COMPILATIONS:
                            i = await m.getAlsoAlbums(o);
                            break;
                        case g.hVl.DISCOGRAPHY:
                            i = await m.getDiscographyAlbums(o);
                            break;
                        default:
                            i = await m.getDirectAlbums(o);
                    }
                    r = { artist: p, albums: i, backendHostTld: l, locale: n, host: c, fullUrl: u, requestUrl: _ };
                } catch (t) {
                    return (0, g.tfF)(t, () => ({ artist: void 0, albums: void 0, ...(0, g.Bj3)() }));
                }
                let { artist: i } = r;
                return ((null == i ? void 0 : i.error) === 'not-found' || (null == i ? void 0 : i.artist.error) === 'not-found') && (0, v.notFound)(), r;
            }),
                (0, f.cache)(async function (t) {
                    let e,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { artistId: t, page: 0, pageSize: p };
                    try {
                        let { container: o, backendHostTld: i, locale: a, host: l, fullUrl: n, isRSC: c, requestUrl: u } = await (0, g.IhE)();
                        if (c) return { artist: void 0, clips: void 0, backendHostTld: i, locale: a, host: l, fullUrl: n, requestUrl: u };
                        let d = o.get(g.O9U),
                            _ = await d.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            m = await d.getClips(r);
                        e = { artist: _, clips: m, backendHostTld: i, locale: a, host: l, fullUrl: n, requestUrl: u };
                    } catch (t) {
                        return (0, g.tfF)(t, () => ({ artist: void 0, clips: void 0, ...(0, g.Bj3)() }));
                    }
                    let { artist: o } = e;
                    return ((null == o ? void 0 : o.error) === 'not-found' || (null == o ? void 0 : o.artist.error) === 'not-found') && (0, v.notFound)(), e;
                }),
                (0, f.cache)(async (t) => {
                    let e;
                    (0, g.LLJ)(t) || (0, v.notFound)();
                    try {
                        let { container: r, backendHostTld: o, locale: i, host: a, fullUrl: l, isRSC: n, requestUrl: c } = await (0, g.IhE)();
                        if (n) return { artist: void 0, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                        let u = r.get(g.O9U),
                            d = await u.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await u.getConcerts({ artistId: Number(t) });
                        e = { artist: d, concerts: _, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                    } catch (t) {
                        return (0, g.tfF)(t, () => ({ artist: void 0, concerts: void 0, ...(0, g.Bj3)() }));
                    }
                    let { artist: r } = e;
                    return ((null == r ? void 0 : r.error) === 'not-found' || (null == r ? void 0 : r.artist.error) === 'not-found') && (0, v.notFound)(), e;
                }),
                (0, f.cache)(async (t) => {
                    let e;
                    (0, g.LLJ)(t) || (0, v.notFound)();
                    try {
                        let { container: r, backendHostTld: o, locale: i, host: a, fullUrl: l, isRSC: n, requestUrl: c } = await (0, g.IhE)();
                        if (n) return { artist: void 0, familiar: void 0, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                        let u = r.get(g.O9U),
                            d = await u.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await u.getFamiliarYou({ artistId: t, waveTracksLimit: 100, collectionTracksLimit: 100, collectionAlbumsLimit: 20 });
                        e = { artist: d, familiar: _, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                    } catch (t) {
                        return (0, g.tfF)(t, () => ({ artist: void 0, familiar: void 0, ...(0, g.Bj3)() }));
                    }
                    let { artist: r } = e;
                    return ((null == r ? void 0 : r.error) === 'not-found' || (null == r ? void 0 : r.artist.error) === 'not-found') && (0, v.notFound)(), e;
                }),
                (0, f.cache)(async (t) => {
                    let e;
                    (0, g.LLJ)(t) || (0, v.notFound)();
                    try {
                        let { container: r, backendHostTld: o, locale: i, host: a, fullUrl: l, isRSC: n, requestUrl: c } = await (0, g.IhE)();
                        if (n) return { artist: void 0, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                        let u = r.get(g.O9U);
                        e = {
                            artist: await u.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            backendHostTld: o,
                            locale: i,
                            host: a,
                            fullUrl: l,
                            requestUrl: c,
                        };
                    } catch (t) {
                        return (0, g.tfF)(t, () => ({ artist: void 0, ...(0, g.Bj3)() }));
                    }
                    let { artist: r } = e;
                    return ((null == r ? void 0 : r.error) === 'not-found' || (null == r ? void 0 : r.artist.error) === 'not-found') && (0, v.notFound)(), e;
                }),
                (0, f.cache)(async (t) => {
                    let e;
                    (0, g.LLJ)(t) || (0, v.notFound)();
                    try {
                        let { container: r, backendHostTld: o, locale: i, host: a, fullUrl: l, isRSC: n, requestUrl: c } = await (0, g.IhE)();
                        if (n) return { artist: void 0, similarArtists: void 0, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                        let u = r.get(g.O9U),
                            d = await u.getBriefInfo({
                                artistId: t,
                                popularTracksCount: s,
                                fetchPlaylistLikesCounts: !0,
                                discographyBlockEnabled: !0,
                                useClipDataFormat: !0,
                            }),
                            _ = await u.getSimilarArtists({ artistId: t });
                        e = { artist: d, similarArtists: _, backendHostTld: o, locale: i, host: a, fullUrl: l, requestUrl: c };
                    } catch (t) {
                        return (0, g.tfF)(t, () => ({ artist: void 0, similarArtists: void 0, ...(0, g.Bj3)() }));
                    }
                    let { artist: r } = e;
                    return ((null == r ? void 0 : r.error) === 'not-found' || (null == r ? void 0 : r.artist.error) === 'not-found') && (0, v.notFound)(), e;
                });
            var x = r(46163),
                h = r(26433);
            let b = o.gK
                    .compose(
                        o.gK.model('ArtistAboutModal', {
                            modal: h.qt,
                            artist: o.gK.maybeNull(a.PK),
                            artistType: o.gK.maybeNull(o.gK.enumeration(Object.values(x.o))),
                            description: o.gK.maybeNull(o.gK.string),
                            lastMonthListeners: o.gK.maybeNull(o.gK.number),
                            lastMonthListenersDelta: o.gK.optional(o.gK.number, 0),
                            covers: o.gK.maybeNull(o.gK.array(o.gK.string)),
                            links: o.gK.maybeNull(o.gK.array(a.dP)),
                        }),
                        h.XT,
                        h.pl,
                    )
                    .views((t) => ({
                        get isArtistStatsAvailable() {
                            return Number.isFinite(t.lastMonthListeners);
                        },
                    }))
                    .actions((t) => {
                        let e = {
                            open(r) {
                                r && (e.getData(r), t.modal.open());
                            },
                            getData: (0, o.L3)(function* (e) {
                                let { artistsResource: r, modelActionsLogger: i } = (0, o._$)(t);
                                if (!t.isLoading)
                                    try {
                                        var l, n, s, c, u;
                                        t.loadingState = g.GuX.PENDING;
                                        let i = yield r.getAboutArtist({ artistId: e });
                                        (t.artist = (0, a.as)({ artist: i.artist })),
                                            (t.description = null != (u = i.description) ? u : null),
                                            (t.artistType = i.artistType === x.o.COMPOSER ? x.o.COMPOSER : x.o.ARTIST),
                                            i.stats &&
                                                Number.isFinite(null == (l = i.stats) ? void 0 : l.lastMonthListeners) &&
                                                (t.lastMonthListeners = i.stats.lastMonthListeners),
                                            i.stats &&
                                                Number.isFinite(null == (n = i.stats) ? void 0 : n.lastMonthListenersDelta) &&
                                                (t.lastMonthListenersDelta = i.stats.lastMonthListenersDelta);
                                        let d = null == (s = i.covers) ? void 0 : s.map((t) => t.uri).filter((t) => !!t);
                                        d && (t.covers = (0, o.wg)(d)),
                                            (t.links = (0, o.wg)(null == (c = i.links) ? void 0 : c.map(a.DZ))),
                                            t.loadingState !== g.GuX.IDLE && (t.loadingState = g.GuX.RESOLVE);
                                    } catch (e) {
                                        i.error(e), t.loadingState !== g.GuX.IDLE && (t.loadingState = g.GuX.REJECT);
                                    }
                            }),
                            close() {
                                t.modal.close(), e.reset();
                            },
                            onOpenChange(r) {
                                t.modal.onOpenChange(r), r || e.reset();
                            },
                            reset() {
                                (t.loadingState = g.GuX.IDLE),
                                    (t.description = null),
                                    (t.lastMonthListeners = null),
                                    (t.lastMonthListenersDelta = 0),
                                    (t.artistType = null),
                                    t.destroyItems([t.artist, t.covers, t.links]);
                            },
                        };
                        return e;
                    }),
                C = o.gK.model('ArtistBrandedButton', { title: o.gK.maybeNull(o.gK.string), url: o.gK.maybeNull(o.gK.string) }),
                T = o.gK
                    .model('ArtistMeta', {
                        artist: a.PK,
                        donationUrl: o.gK.maybe(o.gK.string),
                        lastMonthListeners: o.gK.maybe(o.gK.number),
                        brandedButton: o.gK.maybe(C),
                        covers: o.gK.maybeNull(o.gK.array(o.gK.string)),
                    })
                    .views((t) => ({
                        get hasCovers() {
                            var e;
                            return !!(null == (e = t.covers) ? void 0 : e.length);
                        },
                    })),
                y = o.gK
                    .model('ArtistTop', { artist: a.PK, listenTimeSeconds: o.gK.number, top: o.gK.maybe(l.Iz) })
                    .views((t) => ({
                        get isAvailableForPlaying() {
                            if (void 0 === t.artist.counts) return !0;
                            return t.artist.counts.tracks > 0;
                        },
                    }))
                    .actions((t) => ({ getKey: (e) => ''.concat(e, '_').concat(t.artist.id) }));
            var k = r(26923),
                j = r(23504),
                M = r(99182),
                N = r(83580),
                I = r(19633);
        },
        66534: (t, e, r) => {
            'use strict';
            var o;
            r.d(e, { U: () => o }),
                (function (t) {
                    (t.UNKNOWN = 'unknown'), (t.MALE = 'male'), (t.FEMALE = 'female');
                })(o || (o = {}));
        },
        69258: (t) => {
            t.exports = {
                root: 'ArtistAboutModal_root__bmUo9',
                modalContent: 'ArtistAboutModal_modalContent__RGkJk',
                header: 'ArtistAboutModal_header__yLnAj',
                overlay: 'ArtistAboutModal_overlay__6hToT',
                closeButton: 'ArtistAboutModal_closeButton__Gnz25',
            };
        },
        72588: (t) => {
            t.exports = {
                root: 'ArtistAboutModalShimmer_root__RWCDi',
                entityName: 'ArtistAboutModalShimmer_entityName__eBJym',
                title: 'ArtistAboutModalShimmer_title__0uj5d',
            };
        },
        76886: (t) => {
            t.exports = {
                positionIndicator: 'ArtistTopCard_positionIndicator__Bs_Ga',
                crownIcon: 'ArtistTopCard_crownIcon__yxAH3',
                progressIcon: 'ArtistTopCard_progressIcon__gHcbF',
                progressIcon_up: 'ArtistTopCard_progressIcon_up__PeHBx',
                progressIcon_down: 'ArtistTopCard_progressIcon_down__0PKeO',
                progressIcon_same: 'ArtistTopCard_progressIcon_same___SujQ',
                progressIcon_new: 'ArtistTopCard_progressIcon_new__w3wA6',
                listenTime: 'ArtistTopCard_listenTime__P1_jw',
            };
        },
        83580: (t, e, r) => {
            'use strict';
            r.d(e, { ArtistTopCard: () => f });
            var o = r(54486),
                i = r(50420),
                a = r(28303),
                l = r(43426),
                n = r(60423),
                s = r(27510),
                c = r(5956),
                u = r(97800),
                d = r(63695),
                _ = r(23504),
                m = r(76886),
                p = r.n(m);
            let v = { [n._.UP]: 'chartUp', [n._.DOWN]: 'chartDown', [n._.SAME]: 'chartSame', [n._.NEW]: 'chartNew' },
                f = (0, a.PA)((t) => {
                    let { artist: e, position: r, progress: a, listenTimeSeconds: n, className: m } = t,
                        { formatMessage: f } = (0, l.A)(),
                        A = (0, d.Uw)(n, f),
                        g = a ? v[a] : null,
                        x = g
                            ? (0, o.jsx)(c.Icon, { variant: g, size: 'xxs', className: (0, i.$)(p().progressIcon, p()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        h = (0, s.L)(() =>
                            void 0 !== r
                                ? (0, o.jsxs)('div', {
                                      className: p().positionIndicator,
                                      children: [
                                          (0, o.jsx)(u.Caption, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: r }),
                                          1 === r && (0, o.jsx)(c.Icon, { variant: 'crown', size: 'xxs', className: p().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== r && x,
                                      ],
                                  })
                                : void 0,
                        ),
                        b = (0, s.L)(() =>
                            (0, o.jsx)(u.Caption, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: p().listenTime, children: A }),
                        );
                    return (0, o.jsx)(_.ArtistCard, { artist: e, className: m, topTitleElement: h, bottomTitleElement: b, contentLinesCount: 3 });
                });
        },
        96266: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__Cb_I5',
                item: 'ControlsBar_item__Bgdoc',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__Hpg2f',
                controls: 'ControlsBar_controls__JCmC_',
                likeIcon: 'ControlsBar_likeIcon__LBoka',
                trailerIcon: 'ControlsBar_trailerIcon__W0fPg',
                controls_disabled: 'ControlsBar_controls_disabled__gLZiS',
            };
        },
        99182: (t, e, r) => {
            'use strict';
            r.d(e, { ArtistContextMenu: () => f });
            var o = r(54486),
                i = r(28303),
                a = r(43426),
                l = r(43350),
                n = r(31500),
                s = r(63585),
                c = r(8817),
                u = r(5956),
                d = r(61958),
                _ = r(63695),
                m = r(83504),
                p = r(83252),
                v = r(80585);
            let f = (0, i.PA)((t) => {
                var e, r, i;
                let { artist: f, onOpenChange: A, open: g, ...x } = t,
                    { shouldShowBuySubscriptionModal: h, showBuySubscriptionModal: b } = (0, p.qBP)(),
                    {
                        settings: { isMobile: C },
                        modals: { artistAboutModal: T },
                        trailer: y,
                        user: k,
                        experiments: j,
                    } = (0, p.Pjs)(),
                    M = (0, _.A7)(f),
                    N = (0, _.KX)(f),
                    I = (0, _.mW)(f),
                    S = (0, p.Ftl)(),
                    w = ''.concat(p.UfI.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: E } = (0, a.A)(),
                    { utmLink: L } = (0, p.fyy)({ blockId: p.UfI.ARTIST, contextType: s.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: B, pathname: R } = (0, p.bNS)('/artist/:artistId', { params: { artistId: null != (r = null == f ? void 0 : f.id) ? r : '' } }),
                    O = (0, m.A_)({ entityVariant: p.DwC.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: P, togglePlay: K } = (0, p.B0S)({
                        seeds: null != (i = null == f ? void 0 : f.seeds) ? i : [],
                        pageIdForFrom: p._Q$.RADIO,
                        blockIdForFrom: w,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    D = (0, p.PT7)(),
                    F = E((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    z = (0, c.c)(() => {
                        if (h && k.isAuthorized) return void b();
                        P || K();
                    }),
                    U = (0, c.c)(() => {
                        if (!D()) {
                            if (h) return void b();
                            (null == f ? void 0 : f.id) && (y.setUtmLink(L), y.openArtistTrailer(f.id), S(l.ky.Artist, f.id));
                        }
                    }),
                    H = (0, c.c)(() => {
                        T.open(null == f ? void 0 : f.id);
                    });
                (0, p.NBO)(g);
                let W = { variant: p.Yxq.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: R },
                    q = j.checkExperiment(p.zal.WebEditorsFeatures, 'on'),
                    X = null == f || null == (e = f.trailer) ? void 0 : e.isAvailable,
                    G = j.checkExperiment(p.zal.WebNextArtistInfo, 'on');
                return (0, o.jsxs)(d.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: g,
                    onOpenChange: A,
                    ariaLabel: E({ id: 'interface-actions.context-menu' }),
                    containerProps: (0, n.Am)(n.Kq.artist.ARTIST_CONTEXT_MENU),
                    ...x,
                    children: [
                        q && (0, o.jsx)(v.aQ, { fallback: (0, o.jsx)(m.dx, { entityVariant: p.DwC.ARTIST, adminUrl: O }) }),
                        !C && (0, o.jsx)(v.aQ, { fallback: (0, o.jsx)(v.L1, { onClick: M, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, o.jsx)(v.aQ, {
                            fallback: (0, o.jsx)(v.TW, {
                                onClick: N,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !k.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        X && (0, o.jsx)(v.aQ, { fallback: (0, o.jsx)(v.No, { onClick: U }) }),
                        (0, o.jsx)(v.aQ, {
                            fallback: (0, o.jsx)(v.C6, { onClick: z, disabled: !(null == f ? void 0 : f.isAvailable), variant: p.IGO.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, o.jsx)(v.Ht, { disabled: !f, shareLink: B, entityMeta: W }),
                        G &&
                            (0, o.jsx)(v.aQ, {
                                fallback: (0, o.jsx)(d.Dr, {
                                    onClick: H,
                                    icon: (0, o.jsx)(u.Icon, { variant: 'info', size: 'xxs' }),
                                    ...(0, n.Am)(n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON),
                                    children: F,
                                }),
                            }),
                        (0, o.jsx)(v.aQ, {
                            fallback: (0, o.jsx)(v.DZ, { onClick: I, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
    },
]);
