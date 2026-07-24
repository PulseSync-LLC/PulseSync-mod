(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9995],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => f });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                n = i(63380),
                o = i(45477),
                d = i(75582),
                c = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                h = i(97755);
            let x = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                f = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, d.l)(),
                        [_, m] = (0, s.useState)(!1),
                        { formatMessage: h } = (0, l.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        m(!0);
                        let l = await e.toggleLike();
                        m(!1),
                            l === n.f.OK
                                ? i((0, r.jsx)(x, { artist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, _, h, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(60900),
                o = i(16172),
                d = i(21732),
                c = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                h = i(82586),
                x = i(86269),
                f = i(71926),
                v = i(91853),
                g = i(5942),
                p = i(70390),
                k = i(71735),
                C = i(47745),
                j = i(2969),
                b = i(54391),
                N = i(23352),
                T = i(72396),
                A = i(5537),
                L = i(84062),
                R = i(28999),
                y = i(90169),
                S = i(57594),
                B = i(11323),
                O = i(92744),
                I = i(61258),
                P = i(10180),
                E = i(90326),
                w = i(29268),
                H = i(34925),
                D = i(80528),
                z = i(42048),
                W = i.n(z);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: z, topTitleElement: F, bottomTitleElement: U } = e,
                    { ref: K, intersectionPropertyId: M } = (0, N.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: X },
                    } = (0, S.g)(),
                    { from: q, utmLink: Q } = (0, T.f)({ contextId: t.id, contextType: c.K.Artist }),
                    { formatMessage: Y } = (0, n.A)(),
                    [Z, G] = (0, l.useState)(!1),
                    [J, ee] = (0, l.useState)(!1),
                    [et, ei] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: es } = (0, R.z)(),
                    el = (0, C.N)(),
                    en = (0, j.b)(),
                    eo = (0, g.K)(t),
                    ed = (0, p.A)(t),
                    { id: ec, name: eu, coverUri: e_, isLiked: em } = t,
                    eh = (0, L.Z)(t.url),
                    [ex, ef] = (0, l.useState)(!1),
                    ev = (0, b.F)(),
                    eg = (0, k.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        $.openArtistTrailer(t.id), ev(o.ky.Artist, t.id);
                    }),
                    ek = (0, l.useMemo)(() => {
                        let e = Y({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? Y({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, Y]),
                    { isPlaying: eC, togglePlay: ej } = (0, y.D)({
                        playContextParams: { contextData: { type: c.K.Artist, meta: { id: Number(ec) }, from: q, utmLink: Q }, loadContextMeta: !0 },
                    }),
                    eb = (0, v.S)({ artist: t, callback: eh }),
                    eN = (0, v.S)({ artist: t, callback: ej }),
                    eT = (0, u.c)((e) => {
                        null == ea || ea(), el({ to: o.QT.ArtistScreen }), eb(e);
                    }),
                    eA = (0, A.N)(),
                    eL = (0, u.c)(() => {
                        if (!eg()) {
                            if (eA) return void X.open();
                            Z || eC || (G(!0), null == es || es()), eN(), en(!eC);
                        }
                    }),
                    eR = (0, u.c)(() => {
                        J || em || (ee(!0), null == er || er()), eo();
                    }),
                    ey = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eS = (0, u.c)((e) => {
                        ei(e), ef(e);
                    }),
                    eB = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eS,
                                    open: et,
                                    onClick: ey,
                                    className: (0, a.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': d.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ey, eS, et],
                    ),
                    eO = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                H.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, a.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ep,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ep]),
                    eI = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                P.O,
                                { onClick: ed, isPinned: t.isPinned, className: (0, a.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ed],
                    ),
                    eP = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ex,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eL,
                                            isPlaying: eC,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(W().likeButton, W().control),
                                            isLiked: em,
                                            onClick: eR,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eB,
                                    pinControl: eI,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eE = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(x.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': d.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, r.jsx)(B.B, {
                                            className: W().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ek,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [eT, e_, ek, t.isAvailable, eP],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: K,
                    className: (0, a.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': ek,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(I.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    'aria-label': ek,
                                    onClick: eT,
                                    'data-test-id': d.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, r.jsx)(I.N, { href: t.url, onClick: eT, children: ek }),
                    'data-intersection-property-id': M,
                    contentLinesCount: z,
                    view: eE,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => p });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(16172),
                n = i(21732),
                o = i(82586),
                d = i(50162),
                c = i(86269),
                u = i(79856),
                _ = i(71926),
                m = i(95481),
                h = i(47745),
                x = i(61258),
                f = i(69e3),
                v = i.n(f);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: f,
                            subTitle: g,
                            title: p,
                            description: k,
                            viewAllActionLink: C,
                            controls: j,
                            titleSize: b = 'm',
                            coverBackgroundColor: N,
                            coverRadius: T = 's',
                            titleClassName: A,
                            titleLineClamp: L,
                            fallbackIconVariant: R,
                            available: y = !0,
                            onViewAllAction: S,
                            titleChildren: B,
                            children: O,
                            headingRef: I,
                            coverContainerClassName: P,
                            headingVariant: E = 'h3',
                            withDescriptionWidthLimit: w = !0,
                            isShimmerVisible: H,
                            isShimmerActive: D,
                            withCover: z,
                            withDescription: W,
                            forwardRef: F,
                            shimmerCoverClassName: U,
                            shouldSendAnalyticsOnLoaded: K,
                            ...M
                        } = e,
                        $ = (0, m.f)(),
                        V = (0, s.useRef)(null),
                        X = i || z,
                        q = k || W,
                        Q = (0, s.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Y = (0, h.N)(),
                        Z = (0, s.useCallback)(() => {
                            S ? S() : Y({ to: l.QT.Link });
                        }, [Y, S]);
                    (0, s.useEffect)(() => {
                        K && $();
                    }, [K, $]);
                    let G = (0, s.useMemo)(
                            () =>
                                p && C && y
                                    ? (0, r.jsxs)(x.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, r.jsx)(o.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: C,
                                          onClick: Z,
                                          'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: f,
                                                  className: (0, a.$)(v().heading, A),
                                                  variant: E,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: I,
                                                  children: p,
                                              }),
                                              B,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: f,
                                                  className: (0, a.$)(v().heading, A, { [v().heading_notAvailable]: !y }),
                                                  variant: E,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: I,
                                                  'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                                  children: p,
                                              }),
                                              B,
                                          ],
                                      }),
                            [y, Z, I, E, f, p, A, L, b, C, B],
                        ),
                        J = (0, s.useMemo)(() => (W && H ? (0, r.jsx)(u.W, { isActive: D, className: v().shimmerDescription }) : k), [W, H, k, D]),
                        ee = (0, s.useMemo)(
                            () =>
                                z && H
                                    ? (0, r.jsx)(u.W, { isActive: D, className: (0, a.$)(v().shimmerCover, U), radius: 's' })
                                    : (0, r.jsx)(d._V, {
                                          src: i,
                                          fallbackIconVariant: R,
                                          style: { backgroundColor: N },
                                          className: v().cover,
                                          ref: V,
                                          onClick: Q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': n.S7.BLOCK_HEADER_COVER,
                                      }),
                            [N, i, R, Q, D, H, U, z],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(v().root, t),
                        ref: F,
                        ...M,
                        'data-test-id': n.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v().start,
                                children: [
                                    X && (0, r.jsx)(c.t, { radius: T, className: (0, a.$)(v().coverContainer, P), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            g,
                                            G,
                                            q &&
                                                (0, r.jsx)(_.HL, {
                                                    id: ''.concat(f, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: w ? 2 : void 0,
                                                    className: (0, a.$)(v().description, { [v().description_widthLimit]: w }),
                                                    'data-test-id': n.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            j || O,
                        ],
                    });
                },
                p = (0, s.forwardRef)((e, t) => (0, r.jsx)(g, { forwardRef: t, ...e }));
        },
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var r = i(32290),
                a = i(55178),
                s = i(10936);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, l, n, o, d, c, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: m, children: _ });
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var r = i(32290),
                a = i(89020);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
            };
        },
        33696: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        37852: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => c });
            var r = i(32290),
                a = i(96103),
                s = i(39407),
                l = i(21732),
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
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        41898: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => j });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(60900),
                o = i(21732),
                d = i(91027),
                c = i(6752),
                u = i(63423),
                _ = i(82586),
                m = i(71926),
                h = i(85377);
            let x = (e) => {
                let { children: t, title: i, className: a } = e,
                    { setTitleElement: s, setTitle: n } = (0, l.useContext)(h.B),
                    o = (0, l.useRef)(null);
                return (
                    (0, l.useEffect)(() => {
                        (null == o ? void 0 : o.current) && s(o), i && n(i);
                    }, [o, i, s, n]),
                    (0, l.useEffect)(
                        () => () => {
                            n('');
                        },
                        [n],
                    ),
                    (0, r.jsx)('div', { ref: o, className: a, children: t })
                );
            };
            var f = i(84062),
                v = i(57594),
                g = i(61258),
                p = i(85832),
                k = i(96746),
                C = i.n(k);
            let j = (0, s.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': i,
                        canChange: s = !1,
                        onChange: h,
                        maxTitleLength: k,
                        version: j = '',
                        onVersionClick: b,
                        className: N,
                        headingVariant: T = 'h2',
                        withHeadingClamp: A = !0,
                        link: L,
                        onTitleLinkClick: R,
                    } = e,
                    {
                        settings: { isMobile: y },
                    } = (0, v.g)(),
                    { formatMessage: S } = (0, n.A)(),
                    [B, O] = (0, l.useState)(!1),
                    I = (0, l.useRef)(null),
                    P = t.length + j.length > 25,
                    E = (0, f.Z)(null != L ? L : ''),
                    w = (0, d.c)((e) => {
                        null == R || R(), E(e);
                    }),
                    H = (0, l.useMemo)(
                        () =>
                            y
                                ? { font: C().font_mobile, iconLink: C().arrowWrapper_mobile }
                                : P
                                  ? { font: C().font_long, iconLink: C().arrowWrapper_long }
                                  : { font: C().font_short, iconLink: C().arrowWrapper_short },
                        [y, P],
                    ),
                    D = !y && s && B,
                    z = (0, l.useCallback)(() => {
                        var e;
                        O(!0), null == (e = I.current) || e.focus();
                    }, []),
                    W = (0, l.useCallback)(
                        (e) => {
                            O(!1), null == h || h(e);
                        },
                        [h],
                    ),
                    F = (0, c.L)(() =>
                        (0, r.jsx)('span', {
                            className: (0, a.$)(C().arrowWrapper, H.iconLink),
                            children: (0, r.jsx)(_.I, { className: C().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    U = (0, c.L)(() =>
                        (0, r.jsxs)(m.DZ, {
                            variant: T,
                            id: i,
                            lineClamp: y && A ? 2 : void 0,
                            className: (0, a.$)(C().heading, { [C().heading_withVersion]: j }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, r.jsx)(m.HL, { className: (0, a.$)(C().font, H.font, C().title), variant: 'span', children: t }),
                                j &&
                                    (0, r.jsx)(m.HL, {
                                        onClick: b,
                                        className: (0, a.$)(C().font, H.font, C().version, { [C().version_withOtherVersions]: b }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(j),
                                    }),
                                L && !y && F,
                            ],
                        }),
                    ),
                    K = (0, c.L)(() =>
                        L
                            ? (0, r.jsxs)(g.N, {
                                  className: C().titleWithLink,
                                  containerClassName: C().linkContainer,
                                  textClassName: C().linkText,
                                  href: L,
                                  onClick: w,
                                  children: [U, y && F],
                              })
                            : U,
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !D &&
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(C().root, N),
                                children: [
                                    (0, r.jsx)(x, { title: t, className: C().stickyTitle, children: K }),
                                    s &&
                                        (0, r.jsx)('div', {
                                            className: (0, a.$)(C().editButton, { [C().editButton_centered]: !P && !y }),
                                            children: (0, r.jsx)(u.$, {
                                                onClick: z,
                                                'aria-label': S({ id: 'playlist-actions.change-title' }),
                                                icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        D &&
                            (0, r.jsx)('div', {
                                className: C().textFieldContainer,
                                children: (0, r.jsx)(p.A, {
                                    text: t,
                                    className: (0, a.$)(C().font, H.font, C().textField, C().title, { [C().textField_long]: P && !y }),
                                    onChangeFinish: W,
                                    maxTextLength: k,
                                    minTextLength: 1,
                                    placeholder: S({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
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
        45248: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => $ });
            var r = i(32290),
                a = i(21916),
                s = i(55178),
                l = i(63618),
                n = i(96103),
                o = i(60900),
                d = i(39407),
                c = i(21732),
                u = i(91027),
                _ = i(63423),
                m = i(82586),
                h = i(46049),
                x = i(71926),
                f = i(41898),
                v = i(64170),
                g = i(77435),
                p = i(7474),
                k = i(7999),
                C = i(48922),
                j = i(22714),
                b = i(83920),
                N = i(3796),
                T = i(45477),
                A = i(75582),
                L = i(49259),
                R = i(45066),
                y = i(57594),
                S = i(51675),
                B = i(89384),
                O = i(90357),
                I = i(98148),
                P = i(59833),
                E = i(58054),
                w = i(32468),
                H = i(74694),
                D = i(29973),
                z = i(95204),
                W = i.n(z);
            let F = (0, n.PA)((e) => {
                var t, i, n, z;
                let { labelId: F, preloadedLabel: U } = e,
                    K = (0, L.s)(R.n.LABEL),
                    {
                        settings: { isMobile: M },
                    } = (0, y.g)(),
                    { formatMessage: $ } = (0, o.A)(),
                    { contentScrollRef: V, setContentScrollRef: X } = (0, b.g)(),
                    { notify: q } = (0, A.l)(),
                    { shareLink: Q } = (0, B.b)('/label/:labelId', { params: { labelId: null != (i = K.id) ? i : '' } }),
                    Y = (0, s.useRef)(null),
                    Z = (0, s.useRef)(0);
                (0, D.Q)({ id: Number(K.id), name: null != (n = K.name) ? n : '', type: null != (z = K.type) ? z : '' }, D.T.ROOT);
                let G = (0, u.c)(async () => {
                        await window.navigator.clipboard.writeText(Q),
                            q((0, r.jsx)(P.D, { entityVariant: S.Y.LABEL, entityTitle: K.name || '' }), { containerId: T.u.INFO });
                    }),
                    J = (0, s.useMemo)(
                        () =>
                            M
                                ? (0, r.jsx)(_.$, {
                                      className: W().button,
                                      onClick: G,
                                      icon: (0, r.jsx)(m.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': c.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, r.jsx)(_.$, {
                                      className: W().button,
                                      onClick: G,
                                      icon: (0, r.jsx)(m.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': c.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, r.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [M, G],
                    ),
                    ee = K.isPublisher ? $({ id: 'entity-names.publisher' }) : $({ id: 'entity-names.label' }),
                    et = K.isPublisher ? $({ id: 'entity-names.non-music-releases' }) : $({ id: 'entity-names.releases' });
                return ((0, s.useEffect)(
                    () => () => {
                        K.reset();
                    },
                    [K],
                ),
                K.isNotFound && (0, a.notFound)(),
                (0, s.useEffect)(
                    () => () => {
                        Z.current = 0;
                    },
                    [K],
                ),
                (0, s.useEffect)(() => {
                    K.isRejected &&
                        Z &&
                        !(Z.current > 0) &&
                        (q((0, r.jsx)(O.h, { error: $({ id: 'error-messages.error-load-part-page' }) }), { containerId: T.u.ERROR }), Z.current++);
                }, [K.isRejected, q, $]),
                (0, N.J)(K.isResolved),
                K.isNeededToLoad && (0, s.use)(K.getData({ labelId: Number(F), preloadedLabel: U })),
                K.isRejected && !K.isNotFound)
                    ? (0, r.jsx)(v.SomethingWentWrong, {})
                    : (0, r.jsx)(j.n, {
                          pageId: C._Q.LABEL,
                          children: (0, r.jsxs)(k.h, {
                              scrollElement: V,
                              children: [
                                  (0, r.jsx)(H.Y, { innerHeaderRef: Y }),
                                  (0, r.jsxs)(h.N, {
                                      className: W().root,
                                      containerClassName: W().content,
                                      ref: X,
                                      'data-test-id': c.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: W().header,
                                              children: [
                                                  (0, r.jsx)(x.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: ee }),
                                                  (0, r.jsx)(f.R, { className: W().title, title: K.name || '', headingVariant: 'h1' }),
                                                  J,
                                              ],
                                          }),
                                          K.hasAlbums &&
                                              K.albums &&
                                              (0, r.jsx)(g.p, {
                                                  isShimmerVisible: K.isLoading,
                                                  isShimmerActive: !0,
                                                  className: W().carouselContainer,
                                                  headerClassName: (0, l.$)(W().carouselBlock, W().carouselBlockHeader),
                                                  containerClassName: W().carouselBlock,
                                                  title: et,
                                                  viewAllActionLink: K.albumsUrl,
                                                  albums: K.albums,
                                                  headingVariant: 'h2',
                                                  'data-test-id': c.Xk.label.RELEASES_CAROUSEL,
                                              }),
                                          K.hasArtists &&
                                              (0, r.jsx)(I.O, {
                                                  isShimmerVisible: K.isLoading,
                                                  isShimmerActive: !0,
                                                  isShimmerCentered: !0,
                                                  isShimmerRounded: !0,
                                                  headerClassName: (0, l.$)(W().carouselBlockHeader, W().carouselBlock),
                                                  containerClassName: W().carouselBlock,
                                                  viewAllActionLink: K.artistsUrl,
                                                  title: $({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  'data-test-id': c.Xk.label.ARTISTS_CAROUSEL,
                                                  children: null == (t = K.artists) ? void 0 : t.map((e) => (0, r.jsx)(p.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, r.jsx)(w.A, { children: (0, r.jsx)(E.w, { className: W().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var U = i(79856);
            let K = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, b.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, y.g)();
                return (0, r.jsxs)(k.h, {
                    scrollElement: e,
                    children: [
                        (0, r.jsx)(H.Y, {}),
                        (0, r.jsxs)(h.N, {
                            className: W().root,
                            containerClassName: W().content,
                            ref: t,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: W().header,
                                    children: [
                                        (0, r.jsx)(U.W, { className: W().shimmerLabelText, radius: 's' }),
                                        (0, r.jsx)(U.W, { className: W().shimmerPageTitle, radius: 'l' }),
                                        (0, r.jsx)(U.W, { className: W().shimmerButton, radius: i ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, r.jsx)(I.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: W().carouselContainer,
                                    headerClassName: (0, l.$)(W().carouselBlockHeader, W().carouselBlock),
                                    containerClassName: W().carouselBlock,
                                }),
                                (0, r.jsx)(I.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    isShimmerCentered: !0,
                                    isShimmerRounded: !0,
                                    headerClassName: (0, l.$)(W().carouselBlockHeader, W().carouselBlock),
                                    containerClassName: W().carouselBlock,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var M = i(17024);
            let $ = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return (e && (0, M.L)(e)) || (0, a.notFound)(), (0, r.jsx)(s.Suspense, { fallback: (0, r.jsx)(K, {}), children: (0, r.jsx)(F, { labelId: e }) });
            };
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => c });
            var r,
                a = i(72812),
                s = i(55178),
                l = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return l[e](i, i.exports, o), i.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, 'X', { value: !0 }), (d.l = void 0);
                let e = o(810),
                    t = o(352);
                d.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        n();
                    }, [i, n]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n);
                                }
                            );
                        }, [i, n]);
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: r && s,
                    };
                };
            })(),
                d.X;
            var c = d.l;
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => _ });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(21732),
                n = i(45807),
                o = i(63423),
                d = i(82586),
                c = i(60178),
                u = i.n(c);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: c,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: h = 'xxxs',
                        buttonVariant: x = 'outline',
                    } = e,
                    { swipeBackward: f, swipeForward: v, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: p, shouldHideControls: k } = (0, n.Y)(t),
                    C = (0, s.useCallback)(
                        (e) => {
                            f(), e.stopPropagation();
                        },
                        [f],
                    ),
                    j = (0, s.useCallback)(
                        (e) => {
                            v(), e.stopPropagation();
                        },
                        [v],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, _),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: k, [u().control_withSecondaryColor]: m }),
                            onClick: C,
                            size: h,
                            radius: 'round',
                            variant: x,
                            withRipple: !1,
                            icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, c, { [u().control_hidden]: k, [u().control_withSecondaryColor]: m }),
                            onClick: j,
                            size: h,
                            radius: 'round',
                            variant: x,
                            withRipple: !1,
                            icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: p,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        60507: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 45248));
        },
        69e3: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
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
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, l.A)(),
                        [_, h] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let s = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        h(!0);
                        let l = await e.togglePin();
                        h(!1),
                            l
                                ? i((0, r.jsx)(m, { artist: s }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR });
                    }, [e, t.isAuthorized, _, u, i]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var r,
                a = i(55178),
                s = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length; )
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        i.r(t), i.d(t, { clsx: () => r, default: () => a });
                        let a = r;
                    },
                    9058: (e, t, i) => {
                        i.r(t), i.d(t, { default: () => r });
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5056: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0);
                        let a = i(4377),
                            s = i(5881),
                            l = i(810),
                            n = r(i(9058)),
                            o = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: o, role: d, ...c } = e;
                                return (0, a.jsx)('ol', {
                                    ref: o,
                                    className: (0, s.clsx)(n.default.root, t),
                                    ...c,
                                    role: null != d ? d : 'list',
                                    children: l.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(n.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, l.forwardRef)((e, t) => (0, a.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                l = {};
            function n(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return s[e].call(i.exports, i, i.exports, n), i.exports;
            }
            (n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0);
                var e = n(5056);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var d = o.l;
            o.X;
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(16172),
                l = i(95481),
                n = i(26042),
                o = i(98148),
                d = i(24170);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            title: u,
                            description: _,
                            albums: m,
                            className: h,
                            containerClassName: x,
                            headerClassName: f,
                            viewAllActionLink: v,
                            headingRef: g,
                            headingVariant: p,
                            shouldSendAnalyticsOnLoaded: k,
                            ...C
                        } = e,
                        j = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            k && j();
                        }, [j, k]),
                        (0, r.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            className: h,
                            headerClassName: f,
                            containerClassName: x,
                            ref: t,
                            title: u,
                            description: _,
                            viewAllActionLink: v,
                            headingRef: g,
                            headingVariant: p,
                            ...C,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.ky.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, r.jsx)(d.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var r = i(32290),
                a = i(96103),
                s = i(60900),
                l = i(16172),
                n = i(21732),
                o = i(71483),
                d = i(91027),
                c = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                h = i(63380),
                x = i(45477),
                f = i(75582),
                v = i(57594),
                g = i(90357),
                p = i(86269),
                k = i(74196),
                C = i(71926),
                j = i(58534),
                b = i(11323),
                N = i(356),
                T = i.n(N);
            let A = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: l } = e,
                    { formatMessage: n } = (0, s.A)(),
                    o = n(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(j.$, {
                    closeToast: l,
                    message: (0, r.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, r.jsx)(k.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(p.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, r.jsx)(b.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(C.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var L = i(5942),
                R = i(70390),
                y = i(9017),
                S = i(65477),
                B = i(71735),
                O = i(37862),
                I = i(48922),
                P = i(54391),
                E = i(72396),
                w = i(46200),
                H = i(27120),
                D = i(43564),
                z = i(95134),
                W = i(79406),
                F = i(51675),
                U = i(48027),
                K = i(89384),
                M = i(38223),
                $ = i(58237),
                V = i(56367),
                X = i(4914),
                q = i(83755),
                Q = i(25160),
                Y = i(4008);
            let Z = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: p, onOpenChange: k, open: C, ...j } = e,
                    { shouldShowBuySubscriptionModal: b, showBuySubscriptionModal: N } = (0, w.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Z },
                        trailer: G,
                        user: J,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, R.A)(p),
                    ei = (0, L.K)(p),
                    er = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, f.l)(),
                            [a, l] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(g.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (a) return;
                            let s = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            l(!1),
                                o === h.f.OK
                                    ? i((0, r.jsx)(A, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, r.jsx)(g.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR });
                        });
                    })(p),
                    ea = (0, P.F)(),
                    es = ''.concat(O.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: en } = (0, E.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ed } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ec = (0, y.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == p ? void 0 : p.seeds) ? a : [],
                        pageIdForFrom: I._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    em = (0, B.P)(),
                    eh = el((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, d.c)(() => {
                        if (b && J.isAuthorized) return void N();
                        eu || e_();
                    }),
                    ef = (0, d.c)(() => {
                        if (!em()) {
                            if (b) return void N();
                            (null == p ? void 0 : p.id) && (G.setUtmLink(en), G.openArtistTrailer(p.id), ea(l.ky.Artist, p.id));
                        }
                    }),
                    ev = (0, d.c)(() => {
                        Z.open(null == p ? void 0 : p.id);
                    });
                (0, H.N)(C);
                let eg = { variant: F.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ed },
                    ep = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    ek = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    eC = ee.checkExperiment(W.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: k,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...j,
                    children: [
                        ep && (0, r.jsx)(Y.WithOffline, { fallback: (0, r.jsx)(S.d, { entityVariant: z.D.ARTIST, adminUrl: ec }) }),
                        !T && (0, r.jsx)(Y.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, r.jsx)(Y.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !J.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        ek && (0, r.jsx)(Y.WithOffline, { fallback: (0, r.jsx)(q.N, { onClick: ef }) }),
                        (0, r.jsx)(Y.WithOffline, {
                            fallback: (0, r.jsx)(Q.C, { onClick: ex, disabled: !(null == p ? void 0 : p.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: k }),
                        }),
                        (0, r.jsx)(X.H, { disabled: !p, shareLink: eo, entityMeta: eg }),
                        eC &&
                            (0, r.jsx)(Y.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, r.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, r.jsx)(Y.WithOffline, {
                            fallback: (0, r.jsx)(M.D, { onClick: er, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        85832: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                n = i(37852),
                o = i.n(n);
            let d = (0, s.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: s,
                        minTextLength: n,
                        variant: d = 'input',
                        shouldFinishOnKeyPress: c = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                    } = e,
                    [h, x] = (0, l.useState)(i),
                    f = (0, l.useRef)(!1),
                    v = (0, l.useRef)(null),
                    g = (0, l.useCallback)((e) => {
                        x(e.target.value);
                    }, []),
                    p = (0, l.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                'Escape' === e.key && (f.current = !0), null == (t = e.currentTarget) || t.blur();
                            }
                        },
                        [c],
                    ),
                    k = (0, l.useCallback)(() => {
                        let e = h.trim();
                        f.current || (n && e.length < n) ? ((f.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [h, f, n, _, i]);
                (0, l.useEffect)(() => {
                    v.current && ((v.current.selectionStart = v.current.value.length), (v.current.selectionEnd = v.current.value.length));
                }, []),
                    (0, l.useLayoutEffect)(() => {
                        let e = v.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [v, h]);
                let C = (0, l.useMemo)(() => ('textarea' === d ? (e) => (0, r.jsx)('textarea', { ref: v, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [d]);
                return (0, r.jsx)(C, {
                    className: (0, a.$)(o().root, t, { [o().root_textarea]: 'textarea' === d, [o().root_outline]: m }),
                    type: 'text',
                    value: h,
                    maxLength: s,
                    onBlur: k,
                    onChange: g,
                    onKeyDown: p,
                    placeholder: u,
                    autoFocus: !0,
                });
            });
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
        95204: (e) => {
            e.exports = {
                root: 'LabelPage_root__jquyP',
                content: 'LabelPage_content__9st_X',
                header: 'LabelPage_header__G2xY_',
                title: 'LabelPage_title__BNxeX',
                button: 'LabelPage_button__JXw3C',
                shimmerLabelText: 'LabelPage_shimmerLabelText__rog2x',
                shimmerPageTitle: 'LabelPage_shimmerPageTitle__rSKGh',
                shimmerButton: 'LabelPage_shimmerButton__9ZaQr',
                carouselBlock: 'LabelPage_carouselBlock__zPJmW',
                carouselBlockHeader: 'LabelPage_carouselBlockHeader__dvYqJ',
                carouselContainer: 'LabelPage_carouselContainer__bRVMp',
                footer: 'LabelPage_footer__lvKmF',
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => v });
            var r = i(55178),
                a = i(16172),
                s = i(52068),
                l = i(6752),
                n = i(62376),
                o = i(1677),
                d = i(48922),
                c = i(84782),
                u = i(30915),
                _ = i(18746),
                m = i(37240),
                h = i(51012),
                x = i(47498);
            let f = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                v = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        i = (0, n.U)(),
                        { hash: v } = (0, s.gf)(),
                        { pageId: g } = (0, m.$)(),
                        { tabId: p, tabPos: k, isTabSelectedByDefault: C } = (0, x.R)(),
                        { offsetBlockPosY: j } = (0, u.u)(),
                        { blockId: b, blockType: N, blockPosX: T, blockPosY: A, mainObjectType: L, mainObjectId: R, objectsCount: y } = (0, c.N)(),
                        { filterKey: S, filterValue: B, filterPos: O } = (0, _.G)(),
                        { skeleton: I } = (0, h.b)(),
                        P = (0, l.L)(() => (void 0 !== j && void 0 !== A ? j + A : A));
                    return (0, r.useCallback)(() => {
                        if (!t || !g || !d.xK.includes(g) || !f.includes(g) || e.current) return;
                        let r = { hash: v, pageId: o.F[g], entityType: N, entityId: b, entityPosX: T, entityPosY: P, objectsCount: y };
                        void 0 !== S && ((r.filterKey = S), (r.filterValue = B), (r.filterPos = O)),
                            d.qG.includes(g) && ((r.tabId = p), (r.tabPos = k), (r.isTabSelectedByDefault = C)),
                            I && (r.skeletonId = I),
                            R && L && ((r.mainObjectType = L), (r.mainObjectId = R));
                        let s = (0, a.Fx)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, a.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, g, v, N, b, T, P, S, B, O, y, I, R, L, i, p, k, C]);
                };
        },
        96746: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
            };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => p });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(16172),
                n = i(80451),
                o = i(6752),
                d = i(75245),
                c = i(79856),
                u = i(84782),
                _ = i(26042),
                m = i(19620),
                h = i(49522),
                x = i(30564),
                f = i(33696),
                v = i.n(f);
            let g = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: f,
                            isShimmerActive: g,
                            isShimmerWithSubcover: p,
                            isShimmerCentered: k,
                            isShimmerRounded: C,
                            title: j,
                            description: b,
                            coverUrl: N,
                            viewAllActionLink: T,
                            titleChildren: A,
                            headerChildren: L,
                            children: R,
                            className: y,
                            containerClassName: S,
                            headerClassName: B,
                            itemClassName: O,
                            showHeaderShimmer: I = !1,
                            showShimmerInfo: P = !0,
                            showControls: E = !0,
                            headingRef: w,
                            headingVariant: H,
                            customShimmer: D,
                            ...z
                        } = e,
                        W = (0, s.useId)(),
                        F = (0, s.useRef)(null),
                        { objectsCount: U } = (0, u.N)(),
                        K = (0, s.useMemo)(
                            () =>
                                I && f
                                    ? (0, r.jsx)('div', { className: B, children: (0, r.jsx)(c.W, { isActive: g, className: v().shimmerTitle, radius: 'l' }) })
                                    : j || b || A || L
                                      ? (0, r.jsx)(_.B, {
                                            objectType: l.ky.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != U ? U : 0,
                                            children: (0, r.jsx)(m.T, {
                                                className: B,
                                                labeledForId: W,
                                                title: j,
                                                description: b,
                                                coverUrl: N,
                                                viewAllActionLink: T,
                                                controls: E && (0, r.jsx)(h.X, { className: v().controls, carouselRef: F }),
                                                headingRef: w,
                                                headingVariant: H,
                                                withDescription: !!b,
                                                titleChildren: A,
                                                children: L,
                                            }),
                                        })
                                      : void 0,
                            [N, b, B, w, H, W, g, f, U, E, I, j, A, L, T],
                        ),
                        M = (0, o.L)(() => D || (0, x.k)({ className: i, isActive: g, withInfo: P, withSubcover: p, centered: k, round: C }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(v().root, y),
                        ...(0, n.getDataAttrFromProps)(z),
                        children: [
                            K,
                            (0, r.jsx)(d.F, {
                                className: S,
                                ref: F,
                                itemClassName: (0, a.$)(v().item, v().important, O),
                                'aria-labelledby': ''.concat(W, ' ').concat(W, '-description'),
                                children: f ? M : R,
                            }),
                        ],
                    });
                },
                p = (0, s.forwardRef)((e, t) => (0, r.jsx)(g, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        e.O(
            0,
            [
                5367, 7258, 7034, 5718, 7231, 7972, 6347, 3183, 9763, 6639, 1749, 6706, 1311, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 3266, 6477, 7275,
                2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563, 8828, 4220, 9562, 7358,
            ],
            () => e((e.s = 60507)),
        ),
            (_N_E = e.O());
    },
]);
