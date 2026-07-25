(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [277],
    {
        50: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => n });
            var r = i(55178);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, r.useContext)(a);
        },
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
            i.d(t, { K: () => C });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(63380),
                l = i(45477),
                d = i(75582),
                c = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                v = i(97755);
            let p = (e) => {
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
                C = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, d.l)(),
                        [_, m] = (0, n.useState)(!1),
                        { formatMessage: v } = (0, s.A)();
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        m(!0);
                        let s = await e.toggleLike();
                        m(!1),
                            s === o.f.OK
                                ? i((0, r.jsx)(p, { artist: n }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [e, t.isAuthorized, _, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(16172),
                d = i(21732),
                c = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                v = i(82586),
                p = i(86269),
                C = i(71926),
                h = i(91853),
                x = i(5942),
                f = i(70390),
                y = i(71735),
                g = i(47745),
                k = i(2969),
                T = i(54391),
                b = i(23352),
                A = i(72396),
                j = i(5537),
                N = i(84062),
                L = i(28999),
                I = i(90169),
                E = i(57594),
                R = i(11323),
                S = i(92744),
                B = i(61258),
                O = i(10180),
                P = i(90326),
                w = i(29268),
                D = i(34925),
                M = i(80528),
                U = i(42048),
                z = i.n(U);
            let F = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: U, topTitleElement: F, bottomTitleElement: K } = e,
                    { ref: V, intersectionPropertyId: H } = (0, b.n)(),
                    {
                        trailer: $,
                        user: W,
                        paywall: { modal: q },
                    } = (0, E.g)(),
                    { from: X, utmLink: Y } = (0, A.f)({ contextId: t.id, contextType: c.K.Artist }),
                    { formatMessage: G } = (0, o.A)(),
                    [Q, Z] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, L.z)(),
                    es = (0, g.N)(),
                    eo = (0, k.b)(),
                    el = (0, x.K)(t),
                    ed = (0, f.A)(t),
                    { id: ec, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, N.Z)(t.url),
                    [ep, eC] = (0, s.useState)(!1),
                    eh = (0, T.F)(),
                    ex = (0, y.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ex())) return void e.preventDefault();
                        $.openArtistTrailer(t.id), eh(l.ky.Artist, t.id);
                    }),
                    ey = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, G]),
                    { isPlaying: eg, togglePlay: ek } = (0, I.D)({
                        playContextParams: { contextData: { type: c.K.Artist, meta: { id: Number(ec) }, from: X, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    eT = (0, h.S)({ artist: t, callback: ev }),
                    eb = (0, h.S)({ artist: t, callback: ek }),
                    eA = (0, u.c)((e) => {
                        null == ea || ea(), es({ to: l.QT.ArtistScreen }), eT(e);
                    }),
                    ej = (0, j.N)(),
                    eN = (0, u.c)(() => {
                        if (!ex()) {
                            if (ej) return void q.open();
                            Q || eg || (Z(!0), null == en || en()), eb(), eo(!eg);
                        }
                    }),
                    eL = (0, u.c)(() => {
                        J || em || (ee(!0), null == er || er()), el();
                    }),
                    eI = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    eE = (0, u.c)((e) => {
                        ei(e), eC(e);
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                M.g,
                                {
                                    artist: t,
                                    onOpenChange: eE,
                                    open: et,
                                    onClick: eI,
                                    className: (0, a.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': d.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eE, et],
                    ),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, a.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eB = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                O.O,
                                { onClick: ed, isPinned: t.isPinned, className: (0, a.$)(z().pinButton, z().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ed],
                    ),
                    eO = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ep,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eN,
                                            isPlaying: eg,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, a.$)(z().likeButton, z().control),
                                            isLiked: em,
                                            onClick: eL,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eB,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': d.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, r.jsx)(R.B, {
                                            className: z().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ey,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eA, e_, ey, t.isAvailable, eO],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: V,
                    className: (0, a.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': ey,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(C.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(B.N, {
                                    className: z().titleLink,
                                    href: t.url,
                                    'aria-label': ey,
                                    onClick: eA,
                                    'data-test-id': d.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(B.N, { href: t.url, onClick: eA, children: ey }),
                    'data-intersection-property-id': H,
                    contentLinesCount: U,
                    view: eP,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        11260: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => y });
            var r = i(32290),
                a = i(96103),
                n = i(55178),
                s = i(60900),
                o = i(39407),
                l = i(54862),
                d = i(63423),
                c = i(82586),
                u = i(70280),
                _ = i(71926),
                m = i(83920),
                v = i(59518),
                p = i(34284),
                C = i(46151),
                h = i(68104),
                x = i.n(h);
            let f = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                y = (0, a.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: a } = e,
                        { formatMessage: h } = (0, s.A)(),
                        { contentRef: y } = (0, m.g)(),
                        { setIsOnboardingOpened: g } = (0, C.w)(),
                        [k, T] = (0, l.d)(),
                        b = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: k }) || !!a,
                        [A, j] = (0, n.useState)(b),
                        N = (0, n.useCallback)(
                            (e) => {
                                null == e || e.stopPropagation(), j(!1), g(!1);
                            },
                            [g],
                        ),
                        L = (0, n.useCallback)(
                            (e) => {
                                e || N();
                            },
                            [N],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: f,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: A,
                        onOpenChange: L,
                        enableAriaDescribedby: !0,
                        referenceRef: T,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: x().root,
                                rootNode: y,
                                children: [
                                    (0, r.jsx)(d.$, {
                                        icon: (0, r.jsx)(c.I, { variant: 'close', size: 'xxs' }),
                                        onClick: N,
                                        variant: 'text',
                                        className: x().close,
                                        withRipple: !1,
                                        'aria-label': h({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(_.HL, {
                                        variant: 'span',
                                        className: x().text,
                                        children: i || (0, r.jsx)(o.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
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
        13882: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(9848);
            let s = (e) => {
                let { tabId: t, tabPos: i, children: s, isTabSelectedByDefault: o } = e,
                    l = (0, a.useMemo)(() => ({ tabId: t, tabPos: i, isTabSelectedByDefault: o }), [t, i, o]);
                return (0, r.jsx)(n.F.Provider, { value: l, children: s });
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(55178),
                a = i(60900);
            let n = (e) => {
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
        14257: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return (e.Dark = 'dark'), (e.Light = 'light'), e;
            })({});
        },
        19529: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var r = i(32290),
                a = i(63618),
                n = i(52138),
                s = i(6752),
                o = i(40229),
                l = i(75487),
                d = i.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: C,
                        controlClassName: h,
                        fallbackIconSize: x,
                    } = e,
                    f = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, v),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: x,
                    coverClassName: p,
                    entityCoverClassName: C,
                    controlClassName: h,
                });
            };
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => f });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(16172),
                o = i(21732),
                l = i(82586),
                d = i(50162),
                c = i(86269),
                u = i(79856),
                _ = i(71926),
                m = i(95481),
                v = i(47745),
                p = i(61258),
                C = i(69e3),
                h = i.n(C);
            let x = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: C,
                            subTitle: x,
                            title: f,
                            description: y,
                            viewAllActionLink: g,
                            controls: k,
                            titleSize: T = 'm',
                            coverBackgroundColor: b,
                            coverRadius: A = 's',
                            titleClassName: j,
                            titleLineClamp: N,
                            fallbackIconVariant: L,
                            available: I = !0,
                            onViewAllAction: E,
                            titleChildren: R,
                            children: S,
                            headingRef: B,
                            coverContainerClassName: O,
                            headingVariant: P = 'h3',
                            withDescriptionWidthLimit: w = !0,
                            isShimmerVisible: D,
                            isShimmerActive: M,
                            withCover: U,
                            withDescription: z,
                            forwardRef: F,
                            shimmerCoverClassName: K,
                            shouldSendAnalyticsOnLoaded: V,
                            ...H
                        } = e,
                        $ = (0, m.f)(),
                        W = (0, n.useRef)(null),
                        q = i || U,
                        X = y || z,
                        Y = (0, n.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        G = (0, v.N)(),
                        Q = (0, n.useCallback)(() => {
                            E ? E() : G({ to: s.QT.Link });
                        }, [G, E]);
                    (0, n.useEffect)(() => {
                        V && $();
                    }, [V, $]);
                    let Z = (0, n.useMemo)(
                            () =>
                                f && g && I
                                    ? (0, r.jsxs)(p.N, {
                                          className: h().title,
                                          containerClassName: h().linkContainer,
                                          textClassName: h().linkText,
                                          icon: (0, r.jsx)(l.I, { className: h().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: g,
                                          onClick: Q,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, j),
                                                  variant: P,
                                                  size: T,
                                                  weight: 'bold',
                                                  lineClamp: N,
                                                  ref: B,
                                                  children: f,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: h().title,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, j, { [h().heading_notAvailable]: !I }),
                                                  variant: P,
                                                  size: T,
                                                  weight: 'bold',
                                                  lineClamp: N,
                                                  ref: B,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              R,
                                          ],
                                      }),
                            [I, Q, B, P, C, f, j, N, T, g, R],
                        ),
                        J = (0, n.useMemo)(() => (z && D ? (0, r.jsx)(u.W, { isActive: M, className: h().shimmerDescription }) : y), [z, D, y, M]),
                        ee = (0, n.useMemo)(
                            () =>
                                U && D
                                    ? (0, r.jsx)(u.W, { isActive: M, className: (0, a.$)(h().shimmerCover, K), radius: 's' })
                                    : (0, r.jsx)(d._V, {
                                          src: i,
                                          fallbackIconVariant: L,
                                          style: { backgroundColor: b },
                                          className: h().cover,
                                          ref: W,
                                          onClick: Y,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [b, i, L, Y, M, D, K, U],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(h().root, t),
                        ref: F,
                        ...H,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h().start,
                                children: [
                                    q && (0, r.jsx)(c.t, { radius: A, className: (0, a.$)(h().coverContainer, O), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: h().textContainer,
                                        children: [
                                            x,
                                            Z,
                                            X &&
                                                (0, r.jsx)(_.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: w ? 2 : void 0,
                                                    className: (0, a.$)(h().description, { [h().description_widthLimit]: w }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            k || S,
                        ],
                    });
                },
                f = (0, n.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        20982: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var r = i(55985);
            let a = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, s, o, l, d, c, u],
                    );
                return (0, r.jsx)(n.l.Provider, { value: m, children: _ });
            };
        },
        28099: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var r = i(32290),
                a = i(89020);
            let n = function () {
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
        34284: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => d });
            var r = i(55178),
                a = i(42406),
                n = i(70204),
                s = i(34186),
                o = i(59576),
                l = i(46151);
            let d = (e) => {
                var t;
                let { id: i, ref: d } = e,
                    { config: c, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, l.w)(),
                    m = (0, r.useRef)(!1),
                    v = (0, a.BL)([{ current: d }], !d),
                    { isIntersecting: p } = null != (t = v[o.N]) ? t : {},
                    C = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: a } of ((0, r.useEffect)(() => {
                    if (m.current && p) {
                        let e = c.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && C.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [c, i, p, C, v, d]),
                c)) {
                    let r = C.get(t);
                    if (a) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return (m.current = !0), _(!0), !0;
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        37852: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        38819: (e) => {
            e.exports = { root: 'NotificationPin_root__DBEub', view: 'NotificationPin_view__daGc_', image: 'NotificationPin_image__o5F7B' };
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
        44989: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                a = i(55178),
                n = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {},
                o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0);
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var r = (s[t] = { exports: {} });
                    return n[t](r, r.exports, e), r.exports;
                })(810);
                o.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: n, toggleFalse: s };
                };
            })(),
                o.__esModule;
            var l = o.useToggle;
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => c });
            var r,
                a = i(72812),
                n = i(55178),
                s = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return s[e](i, i.exports, l), i.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, 'X', { value: !0 }), (d.l = void 0);
                let e = l(810),
                    t = l(352);
                d.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o);
                                }
                            );
                        }, [i, o]);
                    let l = (0, e.useMemo)(
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
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: r && n,
                    };
                };
            })(),
                d.X;
            var c = d.l;
        },
        46151: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a, w: () => n });
            var r = i(55178);
            let a = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        47593: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => I });
            var r = i(32290),
                a = i(90040),
                n = i(57249),
                s = i(63618),
                o = i(96103),
                l = i(65493),
                d = i(55178),
                c = i(52138),
                u = i(91027),
                _ = i(6752),
                m = i(44989),
                v = i(50162),
                p = i(79856),
                C = i(50),
                h = i(80451),
                x = {};
            ({
                7858: (e, t) => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                        (t.COLOR_BUCKETS = [
                            { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                            { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                            { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                            { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                            { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                            { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                            { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                            { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                            { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                            { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                            { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                            { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                            { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                            { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                            { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                            { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                        ]),
                        (t.LIGHTNESS_COLOR_BUCKETS = [
                            { name: 'amethyst', start: 0, end: 22 },
                            { name: 'indigo', start: 22, end: 32 },
                            { name: 'clover', start: 32, end: 42 },
                            { name: 'raspberry', start: 42, end: 51 },
                            { name: 'aquamarine', start: 51, end: 100 },
                        ]),
                        (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                        (t.findColorBucketByHue = (e) =>
                            t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                        (t.findColorBucketByLightness = (e) => {
                            let i = t.LIGHTNESS_COLOR_BUCKETS.find((i, r) =>
                                ((e, i, r) => (r === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? i >= e.start && i <= e.end : i >= e.start && i < e.end))(i, e, r),
                            );
                            return (0, t.findColorBucketByName)(null == i ? void 0 : i.name);
                        });
                },
            })[7858](0, x),
                x.COLOR_BUCKETS,
                x.LIGHTNESS_COLOR_BUCKETS,
                x.__esModule;
            var f = x.findColorBucketByHue;
            x.findColorBucketByLightness, x.findColorBucketByName;
            let y = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var g = i(14257);
            let k = { h: 16, s: 10, l: 65 },
                T = { h: 16, s: 15, l: 20 },
                b = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                    return Math.min(i, Math.max(t, e)) / 100;
                };
            var A = i(28099),
                j = i.n(A),
                N = i(49124);
            let L = l.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = N.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(n, e).href);
            }
            let I = (0, o.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [a, n] = (0, d.useState)(null),
                    { state: o, toggleTrue: l } = (0, m.e)(!1),
                    { state: x, toggleTrue: A, toggleFalse: N } = (0, m.e)(!1),
                    { theme: I } = (0, C.W)(),
                    E = (0, d.useRef)(null),
                    R = t.entityType === c.h.ARTIST,
                    S = t.entityType === c.h.ALBUM || t.entityType === c.h.TRACK || t.entityType === c.h.PLAYLIST,
                    B = t.cover.color,
                    O = t.cover.uri,
                    P = (0, u.c)(async () => {
                        if (o && B && I) {
                            N();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: r,
                                } = ((e) => {
                                    let t,
                                        { averageColor: i, theme: r, custom: a } = e,
                                        { h: n, s, l: o } = (0, h.hexToHsl)(i);
                                    if (a) {
                                        if (r === g.S.Dark) {
                                            let e = b(s + 5, 50, 100);
                                            return { color: y(n, e, b(o - 40, 12, 25)), glow1: y(n, e, b(o - 5, 45, 60)), glow2: y(n, e, b(o + 35, 80, 90)) };
                                        }
                                        let e = b(s - 2, 50, 100);
                                        return { color: y(n, e, b(o + 43, 80, 95)), glow1: y(n, e, b(o + 5, 45, 75)), glow2: y(n, e, b(o, 35, 55)) };
                                    }
                                    if (s > 12) {
                                        let e = f(n);
                                        t = e ? (0, h.hexToHsl)(e.primary) : { h: n, s, l: o };
                                    } else t = o > 35 ? k : T;
                                    return { color: y(t.h, t.s / 100, t.l / 100) };
                                })({ averageColor: B, theme: I, custom: !t.entityType }),
                                n = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: r },
                                    ],
                                });
                            await (null == a ? void 0 : a.setThemeData(n)), A();
                        }
                    }),
                    w = (0, u.c)(() => {
                        l(), P();
                    });
                (0, d.useEffect)(() => {
                    i ? null == a || a.play() : null == a || a.pause();
                }, [a, i]),
                    (0, d.useEffect)(() => {
                        P();
                    }, [B, P, I, o]),
                    (0, d.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', w),
                                () => {
                                    a.removeEventListener('load', w);
                                }
                            );
                    }, [a, w]);
                let D = !o || !x,
                    M = (0, _.L)(() => {
                        if (!E.current) return;
                        let e = R ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(E.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: E,
                    className: (0, s.$)(j().root, { [j().root_loading]: D }),
                    style: M,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(j().cover, { [j().cover_round]: R, [j().cover_square]: S, [j().cover_loading]: D }),
                            children: [
                                t.entityType &&
                                    O &&
                                    (0, r.jsx)(v._V, { src: O, size: 200, fit: 'cover', withAvatarReplace: !0, className: j().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(L, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: j().animation }),
                            ],
                        }),
                        (0, r.jsx)(p.W, { className: (0, s.$)(j().shimmer, { [j().shimmer_loading]: D }), isActive: !0, radius: R ? 'round' : 'm' }),
                    ],
                });
            });
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => _ });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(21732),
                o = i(45807),
                l = i(63423),
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
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: h, shouldBackwardButtonBeDisabled: x, shouldForwardButtonBeDisabled: f, shouldHideControls: y } = (0, o.Y)(t),
                    g = (0, n.useCallback)(
                        (e) => {
                            C(), e.stopPropagation();
                        },
                        [C],
                    ),
                    k = (0, n.useCallback)(
                        (e) => {
                            h(), e.stopPropagation();
                        },
                        [h],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: y, [u().control_withSecondaryColor]: m }),
                            onClick: g,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: x,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, c, { [u().control_hidden]: y, [u().control_withSecondaryColor]: m }),
                            onClick: k,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        52138: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { h: () => r }),
                (function (e) {
                    (e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist');
                })(r || (r = {}));
        },
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        59518: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return (e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e;
            })({});
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        64089: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => b });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(90404),
                l = i(45477),
                d = i(75582),
                c = i(57594),
                u = i(90357),
                _ = i(96103),
                m = i(21732),
                v = i(6752),
                p = i(50162),
                C = i(79406),
                h = i(97647),
                x = i(8097),
                f = i(19529),
                y = i(38819),
                g = i.n(y);
            let k = (0, _.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: a } = (0, c.g)(),
                    n = a.checkExperiment(C.z.WebNextWaveAgentExperiment, 'on'),
                    s = (0, v.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, r.jsx)(f.n, { agent: t.agent, shouldShowControl: !1, className: g().view })
                            : (0, r.jsx)(p._V, {
                                  className: g().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': m.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    o = n && t.agent ? void 0 : 'round';
                return (0, r.jsx)(x.k, {
                    closeToast: i,
                    entityVariant: h.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: o,
                    className: g().root,
                });
            });
            var T = i(20982);
            let b = (e) => {
                let { user: t, pinsCollection: i } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = i.get(e.pinId);
                    p(!0);
                    let d = await e.togglePin();
                    p(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = s.data.backgroundImageUrl), (n.colors = s.data.colors), (n.agent = s.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (n.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (n.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (n.agent = (0, T.K)(d.data.agent))),
                        d
                            ? _((0, r.jsx)(k, { vibe: n }), { containerId: l.u.INFO })
                            : _((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                }, [m, _, v, i, t.isAuthorized, e]);
            };
        },
        68104: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(21916),
                o = i(55178),
                l = i(60900),
                d = i(39407),
                c = i(21732),
                u = i(70280),
                _ = i(71926),
                m = i(41677),
                v = i(28999),
                p = i(57594),
                C = i(53514),
                h = i(85017),
                x = i(13798),
                f = i(61258),
                y = i(25649),
                g = i(24760),
                k = i(84141),
                T = i(5856),
                b = i.n(T);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: T,
                        withExplicitMark: A = !0,
                        withSecondaryColor: j,
                        captionSize: N = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: E,
                        artistsClassName: R,
                        ignoreDislikedStyles: S,
                        withCustomTooltip: B = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: P,
                        beforeTitle: w,
                        withArtistLink: D = !0,
                        withTrackLink: M = !0,
                        afterTitle: U,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: F } = (0, l.A)(),
                    { sendNavigateSearchFeedback: K } = (0, v.z)(),
                    {
                        settings: { isMobile: V },
                    } = (0, p.g)(),
                    H = (0, g.$)({ withCustomTooltip: B }),
                    $ = (0, s.useSearchParams)(),
                    W = n.getUrl(P ? Object.fromEntries($) : void 0),
                    q = (0, o.useMemo)(() => {
                        var e;
                        let t = F({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [F, n.title, n.version]),
                    X = (0, k.O)({ track: n, onNavigate: K, withSavingQueryParams: P, entityType: h.n.TRACK }),
                    Y = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: H && !V,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: C.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(b().text, b().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [V, H, N, n.isRemoved, n.title, n.version],
                    ),
                    G = (0, o.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: H && !V,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: F({ id: 'track-title.error-not-found' }),
                                  hoverSettings: C.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(b().text, b().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: H ? void 0 : F({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && M
                              ? (0, r.jsx)(f.N, {
                                    onClick: X,
                                    className: b().albumLink,
                                    href: W,
                                    'aria-label': q,
                                    title: H ? void 0 : e,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: Y(),
                                })
                              : Y({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }, [V, n.title, n.isRemoved, n.version, n.hasTrackLink, Y, H, F, N, q, X, W, M]),
                    Q = (0, y.s)(n.artists, T),
                    Z = (0, o.useMemo)(() => +!!O, [O]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(b().root, { [b().root_disabled]: !n.isAvailable, [b().root_disliked]: n.isDisliked && !S, [b().root_withSecondaryColor]: j }, t),
                    children: (0, r.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(b().titleContainer, { [b().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(b().text, E),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            G,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(b().text, b().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: H ? void 0 : n.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        A &&
                                        (0, r.jsx)(x.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: n.explicitDisclaimer,
                                            className: b().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, a.$)(b().text, { [b().artists]: O }, R, E),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(b().text, b().link),
                                    captionClassName: (0, a.$)(b().text, b().artistCaption),
                                    artists: Q,
                                    withLink: n.isNonUserGenerated && D,
                                    lineClamp: Z,
                                    captionSize: N,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
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
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(45477),
                l = i(75582),
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
                        { notify: i } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, v] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, r.jsx)(m, { artist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [e, t.isAuthorized, _, u, i]);
                };
        },
        71079: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => h });
            var r = i(32290),
                a = i(96103),
                n = i(55178),
                s = i(16172),
                o = i(90404),
                l = i(24170),
                d = i(7474),
                c = i(83460),
                u = i(85305),
                _ = i(95481),
                m = i(26042),
                v = i(8626),
                p = i(98148);
            let C = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: C,
                            containerClassName: h,
                            headerClassName: x,
                            meta: f,
                            data: y,
                            headingVariant: g,
                            className: k,
                            isLoaded: T,
                            shouldSendAnalyticsOnLoaded: b,
                            hasSentAnalyticsOnLoaded: A,
                            setHasSentAnalyticsOnLoaded: j,
                            ...N
                        } = e,
                        L = (0, _.f)();
                    return (
                        (0, n.useEffect)(() => {
                            b && !A && T && (L(), j(!0));
                        }, [A, T, L, j, b]),
                        (0, r.jsx)(p.O, {
                            className: k,
                            ...N,
                            isShimmerVisible: a,
                            isShimmerActive: C,
                            containerClassName: h,
                            headerClassName: x,
                            title: f.title,
                            description: f.description,
                            viewAllActionLink: f.viewAllActionLink,
                            ref: i,
                            headingVariant: g,
                            children:
                                null == y || null == (t = y.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case o._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.ky.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: y.items.length,
                                                          children: (0, r.jsx)(c.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case o._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.ky.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: y.items.length,
                                                          children: (0, r.jsx)(l.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.ky.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: y.items.length,
                                                          children: (0, r.jsx)(d.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.ky.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: y.items.length,
                                                          children: (0, r.jsx)(u.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case o._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                h = (0, n.forwardRef)((e, t) => (0, r.jsx)(C, { forwardRef: t, ...e }));
        },
        71610: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var r = i(32290),
                a = i(55178),
                n = i(27576),
                s = i(42406),
                o = i(80536);
            let l = (e) => {
                let { children: t } = e,
                    i = (0, a.useRef)({}),
                    l = (0, a.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = i.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            r.callback(!0, e), (r.showed = !0), (r.viewUuid = e);
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    !e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId);
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    d = (0, a.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    c = (0, a.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: d, unobserveElement: c }), [d, c]);
                return (0, r.jsx)(o.B.Provider, { value: u, children: t });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(63380),
                l = i(45477),
                d = i(75582),
                c = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let v = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, d.l)(),
                        [_, m] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, s.A)();
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let s = await e.toggleLike();
                        m(!1),
                            s === o.f.OK
                                ? i((0, r.jsx)(v, { playlist: n }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                    }, [t.isAuthorized, _, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(45477),
                l = i(75582),
                d = i(57594),
                c = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, v] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        v(!1),
                            s
                                ? i((0, r.jsx)(m, { playlist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                    }, [t.isAuthorized, _, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var r,
                a = i(55178),
                n = {
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
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
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
                            n = i(5881),
                            s = i(810),
                            o = r(i(9058)),
                            l = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: l, role: d, ...c } = e;
                                return (0, a.jsx)('ol', {
                                    ref: l,
                                    className: (0, n.clsx)(o.default.root, t),
                                    ...c,
                                    role: null != d ? d : 'list',
                                    children: s.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, n.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return n[e].call(i.exports, i, i.exports, o), i.exports;
            }
            (o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var l = {};
            (() => {
                Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0);
                var e = o(5056);
                Object.defineProperty(l, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var d = l.l;
            l.X;
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(32290),
                a = i(96103),
                n = i(60900),
                s = i(16172),
                o = i(21732),
                l = i(71483),
                d = i(91027),
                c = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                v = i(63380),
                p = i(45477),
                C = i(75582),
                h = i(57594),
                x = i(90357),
                f = i(86269),
                y = i(74196),
                g = i(71926),
                k = i(58534),
                T = i(11323),
                b = i(356),
                A = i.n(b);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: o } = (0, n.A)(),
                    l = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(k.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, r.jsx)(y.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, r.jsx)(f.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, r.jsx)(T.B, { className: A().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(g.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var N = i(5942),
                L = i(70390),
                I = i(9017),
                E = i(65477),
                R = i(71735),
                S = i(37862),
                B = i(48922),
                O = i(54391),
                P = i(72396),
                w = i(46200),
                D = i(27120),
                M = i(43564),
                U = i(95134),
                z = i(79406),
                F = i(51675),
                K = i(48027),
                V = i(89384),
                H = i(38223),
                $ = i(58237),
                W = i(56367),
                q = i(4914),
                X = i(83755),
                Y = i(25160),
                G = i(4008);
            let Q = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: y, open: g, ...k } = e,
                    { shouldShowBuySubscriptionModal: T, showBuySubscriptionModal: b } = (0, w.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, h.g)(),
                    et = (0, L.A)(f),
                    ei = (0, N.K)(f),
                    er = ((e) => {
                        let { user: t } = (0, h.g)(),
                            { notify: i } = (0, C.l)(),
                            [a, s] = (0, m.useState)(!1),
                            { formatMessage: o } = (0, n.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(x.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let n = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let l = await e.toggleDislike();
                            s(!1),
                                l === v.f.OK
                                    ? i((0, r.jsx)(j, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(x.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR });
                        });
                    })(f),
                    ea = (0, O.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: eo } = (0, P.f)({ blockId: S.U.ARTIST, contextType: l.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: el, pathname: ed } = (0, V.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ec = (0, I.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, M.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: B._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    em = (0, R.P)(),
                    ev = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, d.c)(() => {
                        if (T && J.isAuthorized) return void b();
                        eu || e_();
                    }),
                    eC = (0, d.c)(() => {
                        if (!em()) {
                            if (T) return void b();
                            (null == f ? void 0 : f.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(f.id), ea(s.ky.Artist, f.id));
                        }
                    }),
                    eh = (0, d.c)(() => {
                        Q.open(null == f ? void 0 : f.id);
                    });
                (0, D.N)(g);
                let ex = { variant: F.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ed },
                    ef = ee.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    ey = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eg = ee.checkExperiment(z.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: g,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU },
                    ...k,
                    children: [
                        ef && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(E.d, { entityVariant: U.D.ARTIST, adminUrl: ec }) }),
                        !A && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !J.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        ey && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: eC }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(Y.C, { onClick: ep, disabled: !(null == f ? void 0 : f.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: y }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !f, shareLink: el, entityMeta: ex }),
                        eg &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: eh,
                                    icon: (0, r.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(H.D, { onClick: er, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(16172),
                d = i(21732),
                c = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                v = i(82586),
                p = i(86269),
                C = i(71926),
                h = i(41677),
                x = i(73141),
                f = i(73192),
                y = i(71735),
                g = i(47745),
                k = i(2969),
                T = i(54391),
                b = i(23352),
                A = i(72396),
                j = i(5537),
                N = i(84062),
                L = i(28999),
                I = i(90169),
                E = i(57594),
                R = i(61376),
                S = i(11323),
                B = i(92744),
                O = i(61258),
                P = i(10180),
                w = i(90326),
                D = i(29268),
                M = i(34925),
                U = i(13931),
                z = i(19740),
                F = i(9017),
                K = i(65477),
                V = i(46200),
                H = i(27120),
                $ = i(95134),
                W = i(79406),
                q = i(58237),
                X = i(56367),
                pulseSyncPlaylistDownloadIcons = i(82586),
                Y = i(83755);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: _ } = (0, V.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: v },
                        trailer: p,
                        user: C,
                    } = (0, E.g)(),
                    h = (0, x.K)(i),
                    g = (0, f.A)(i),
                    k = (0, T.F)(),
                    { formatMessage: b } = (0, o.A)(),
                    A = (0, y.P)(),
                    j = m.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    N = (0, F.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, H.N)(n);
                let L = (0, u.c)(() => {
                    if (c) return void _();
                    A() || (p.openPlaylistTrailer(i.id), k(l.ky.Playlist, i.id));
                });
                return (0, r.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: b({ id: 'interface-actions.context-menu' }),
                    containerProps: { 'data-test-id': d.Kq.playlist.PLAYLIST_CONTEXT_MENU },
                    ...s,
                    children: [
                        j && (0, r.jsx)(K.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !v && (0, r.jsx)(X.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(q.T, { onClick: h, isLiked: i.isLiked, disabled: !C.isAuthorized }),
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(Y.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(11675),
                Z = i.n(Q);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: z, customDescription: F } = e,
                    { ref: K, intersectionPropertyId: V } = (0, b.n)(),
                    {
                        trailer: H,
                        user: $,
                        paywall: { modal: W },
                    } = (0, E.g)(),
                    { from: q, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: c.K.Playlist }),
                    { formatMessage: Y } = (0, o.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, L.z)(),
                    [et, ei] = (0, s.useState)(!1),
                    [er, ea] = (0, s.useState)(!1),
                    [en, es] = (0, s.useState)(!1),
                    eo = (0, U.r)(i),
                    el = (0, x.K)(i),
                    ed = (0, f.A)(i),
                    ec = (0, g.N)(),
                    eu = (0, k.b)(),
                    e_ = (0, N.Z)(i.url),
                    em = (0, T.F)(),
                    ev = (0, y.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        H.setUtmLink(X), H.openPlaylistTrailer(i.id), em(l.ky.Playlist, i.id);
                    }),
                    [eC, eh] = (0, s.useState)(!1),
                    { isPlaying: ex, togglePlay: ef } = (0, I.D)({
                        playContextParams: { contextData: { type: c.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: q, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ey = (0, u.c)(() => {
                        ec({ to: l.QT.PlaylistScreen }), null == J || J();
                    }),
                    eg = (0, u.c)((e) => {
                        ey(), e_(e);
                    }),
                    ek = (0, j.N)(),
                    eT = (0, u.c)(() => {
                        if (!ev()) {
                            if (ek) return void W.open();
                            et || ex || (ei(!0), null == ee || ee()), ef(), eu(!ex);
                        }
                    }),
                    eb = (0, u.c)(() => {
                        er || i.isLiked || (ea(!0), null == Q || Q()), el();
                    }),
                    eA = (0, u.c)((e) => {
                        e.preventDefault(), e.stopPropagation();
                    }),
                    ej = (0, u.c)((e) => {
                        es(e), eh(e);
                    }),
                    eN = (0, s.useMemo)(() => {
                        var e;
                        return F
                            ? (0, r.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    h.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                B.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eb,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !$.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eI = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eE = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                P.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': d.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eg,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: en || eC,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eT,
                                                    isPlaying: ex,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ej,
                                                    open: en,
                                                    onClick: eA,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': d.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eE,
                                            trailerControl: eI,
                                        }),
                                    ],
                                }),
                            }),
                        [eg, i, eo, en, eC, eT, ex, eL, ej, eA, eE, eI],
                    ),
                    eS = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: K,
                    'aria-label': eo,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(O.N, { className: Z().titleLink, href: i.url, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(O.N, { href: i.url, onClick: ey, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: z,
                    view: eR,
                    description: eN,
                    'data-test-id': d.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eS &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Y({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: el,
                            }),
                        n,
                    ],
                });
            });
        },
        84051: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => u });
            var r = i(55178),
                a = i(16172),
                n = i(52068),
                s = i(91027),
                o = i(62376),
                l = i(79374),
                d = i(37240),
                c = i(47498);
            let u = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, r.useRef)(!1),
                    u = (0, r.useRef)(!1),
                    _ = (0, n.st)(),
                    m = (0, o.U)(),
                    { hash: v } = (0, n.gf)(),
                    { pageId: p, pageEntityId: C, pageStyle: h, pagePlacement: x } = (0, d.$)(),
                    { tabId: f, tabPos: y, isTabSelectedByDefault: g } = (0, c.R)();
                return (0, s.c)((e) => {
                    if (!_ || !p || 'string' != typeof C) return;
                    let r = { hash: v, pageId: l.W[p], pageStyle: h || a.QL.Fullscreen, pagePlacement: x || a.c4.Fullscreen, mainObjectType: t, mainObjectId: C };
                    void 0 !== f && ((r.tabId = f), (r.tabPos = y), (r.isTabSelectedByDefault = g));
                    let n = (0, a.Fx)({ params: r, logger: m, context: 'useSendEventOnScreenOpenedOrClosed' });
                    n && (e && !i.current && ((0, a.w5)(_.evgenInstance, n), (i.current = !0)), e || u.current || ((0, a.XB)(_.evgenInstance, n), (u.current = !0)));
                });
            };
        },
        85305: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => b });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(21732),
                l = i(6752),
                d = i(14934),
                c = i(71926),
                u = i(2969),
                _ = i(84782),
                m = i(23352),
                v = i(37240),
                p = i(7697),
                C = i(43564),
                h = i(32156),
                x = i(10180),
                f = i(90326),
                y = i(64089),
                g = i(47593),
                k = i(85927),
                T = i.n(k);
            let b = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: k = 3, className: b } = e,
                    { pageId: A } = (0, v.$)(),
                    { blockIdForFrom: j } = (0, _.N)(),
                    { ref: N, intersectionPropertyId: L } = (0, m.n)(),
                    { withPlusPopoverWeb: I } = (0, p.X)(),
                    [E, R] = (0, s.useState)(!1),
                    S = (0, y.A)(t),
                    { isPlaying: B, togglePlay: O } = (0, C.B)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: j }),
                    P = (0, u.b)(),
                    w = (0, s.useCallback)(() => {
                        I || (O(), P(!B));
                    }, [I, O, P, B]),
                    D = (0, s.useCallback)(
                        () =>
                            (0, r.jsx)(
                                f.D,
                                {
                                    className: (0, a.$)(T().playButton, T().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: w,
                                    isPlaying: B,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, w, B],
                    ),
                    M = (0, l.L)(() =>
                        (0, r.jsx)(
                            h.S,
                            { isEnabled: I, isOpened: E, onOpenChange: R, placement: 'top', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: D },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    U = (0, l.L)(() =>
                        (0, r.jsx)(x.O, { onClick: S, isPinned: t.isPinned, className: (0, a.$)(T().pinButton, T().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    z = (0, l.L)(() =>
                        (0, r.jsxs)('div', {
                            className: T().cover,
                            onClick: w,
                            children: [
                                t.agent && (0, r.jsx)(g.s, { agent: t.agent, isPlaying: B }),
                                (0, r.jsx)(d.hg, { isVisible: E, className: T().controls, playControl: i ? M : void 0, pinControl: U }),
                            ],
                        }),
                    );
                return (0, r.jsx)(d.MN, {
                    ref: N,
                    className: (0, a.$)(T().root, b),
                    'data-intersection-property-id': L,
                    contentLinesCount: k,
                    view: z,
                    textPosition: 'center',
                    wrapperClassName: (0, a.$)({ [T().additionals_hide]: !n }),
                    title: (0, r.jsx)(c.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        c.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': o.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        85832: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(37852),
                l = i.n(o);
            let d = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: o,
                        variant: d = 'input',
                        shouldFinishOnKeyPress: c = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                    } = e,
                    [v, p] = (0, s.useState)(i),
                    C = (0, s.useRef)(!1),
                    h = (0, s.useRef)(null),
                    x = (0, s.useCallback)((e) => {
                        p(e.target.value);
                    }, []),
                    f = (0, s.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                'Escape' === e.key && (C.current = !0), null == (t = e.currentTarget) || t.blur();
                            }
                        },
                        [c],
                    ),
                    y = (0, s.useCallback)(() => {
                        let e = v.trim();
                        C.current || (o && e.length < o) ? ((C.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [v, C, o, _, i]);
                (0, s.useEffect)(() => {
                    h.current && ((h.current.selectionStart = h.current.value.length), (h.current.selectionEnd = h.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = h.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [h, v]);
                let g = (0, s.useMemo)(() => ('textarea' === d ? (e) => (0, r.jsx)('textarea', { ref: h, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [d]);
                return (0, r.jsx)(g, {
                    className: (0, a.$)(l().root, t, { [l().root_textarea]: 'textarea' === d, [l().root_outline]: m }),
                    type: 'text',
                    value: v,
                    maxLength: n,
                    onBlur: y,
                    onChange: x,
                    onKeyDown: f,
                    placeholder: u,
                    autoFocus: !0,
                });
            });
        },
        85927: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        90404: (e, t, i) => {
            'use strict';
            var r;
            i.d(t, { _: () => r }),
                (function (e) {
                    (e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item');
                })(r || (r = {}));
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
        95226: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(73818);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: o,
                        blockPosY: l,
                        objectsCount: d,
                        mainObjectType: c,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: o,
                            blockPosY: l,
                            objectsCount: d,
                            mainObjectType: c,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, s, o, l, d, c, u, m],
                    );
                return (0, r.jsx)(n.p.Provider, { value: v, children: _ });
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => h });
            var r = i(55178),
                a = i(16172),
                n = i(52068),
                s = i(6752),
                o = i(62376),
                l = i(1677),
                d = i(48922),
                c = i(84782),
                u = i(30915),
                _ = i(18746),
                m = i(37240),
                v = i(51012),
                p = i(47498);
            let C = [
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
                h = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, n.st)(),
                        i = (0, o.U)(),
                        { hash: h } = (0, n.gf)(),
                        { pageId: x } = (0, m.$)(),
                        { tabId: f, tabPos: y, isTabSelectedByDefault: g } = (0, p.R)(),
                        { offsetBlockPosY: k } = (0, u.u)(),
                        { blockId: T, blockType: b, blockPosX: A, blockPosY: j, mainObjectType: N, mainObjectId: L, objectsCount: I } = (0, c.N)(),
                        { filterKey: E, filterValue: R, filterPos: S } = (0, _.G)(),
                        { skeleton: B } = (0, v.b)(),
                        O = (0, s.L)(() => (void 0 !== k && void 0 !== j ? k + j : j));
                    return (0, r.useCallback)(() => {
                        if (!t || !x || !d.xK.includes(x) || !C.includes(x) || e.current) return;
                        let r = { hash: h, pageId: l.F[x], entityType: b, entityId: T, entityPosX: A, entityPosY: O, objectsCount: I };
                        void 0 !== E && ((r.filterKey = E), (r.filterValue = R), (r.filterPos = S)),
                            d.qG.includes(x) && ((r.tabId = f), (r.tabPos = y), (r.isTabSelectedByDefault = g)),
                            B && (r.skeletonId = B),
                            L && N && ((r.mainObjectType = N), (r.mainObjectId = L));
                        let n = (0, a.Fx)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, a.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, x, h, b, T, A, O, E, R, S, I, B, L, N, i, f, y, g]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => f });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(16172),
                o = i(80451),
                l = i(6752),
                d = i(75245),
                c = i(79856),
                u = i(84782),
                _ = i(26042),
                m = i(19620),
                v = i(49522),
                p = i(30564),
                C = i(33696),
                h = i.n(C);
            let x = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: C,
                            isShimmerActive: x,
                            isShimmerWithSubcover: f,
                            isShimmerCentered: y,
                            isShimmerRounded: g,
                            title: k,
                            description: T,
                            coverUrl: b,
                            viewAllActionLink: A,
                            titleChildren: j,
                            headerChildren: N,
                            children: L,
                            className: I,
                            containerClassName: E,
                            headerClassName: R,
                            itemClassName: S,
                            showHeaderShimmer: B = !1,
                            showShimmerInfo: O = !0,
                            showControls: P = !0,
                            headingRef: w,
                            headingVariant: D,
                            customShimmer: M,
                            ...U
                        } = e,
                        z = (0, n.useId)(),
                        F = (0, n.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        V = (0, n.useMemo)(
                            () =>
                                B && C
                                    ? (0, r.jsx)('div', { className: R, children: (0, r.jsx)(c.W, { isActive: x, className: h().shimmerTitle, radius: 'l' }) })
                                    : k || T || j || N
                                      ? (0, r.jsx)(_.B, {
                                            objectType: s.ky.Shortcut,
                                            objectId: String(A),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, r.jsx)(m.T, {
                                                className: R,
                                                labeledForId: z,
                                                title: k,
                                                description: T,
                                                coverUrl: b,
                                                viewAllActionLink: A,
                                                controls: P && (0, r.jsx)(v.X, { className: h().controls, carouselRef: F }),
                                                headingRef: w,
                                                headingVariant: D,
                                                withDescription: !!T,
                                                titleChildren: j,
                                                children: N,
                                            }),
                                        })
                                      : void 0,
                            [b, T, R, w, D, z, x, C, K, P, B, k, j, N, A],
                        ),
                        H = (0, l.L)(() => M || (0, p.k)({ className: i, isActive: x, withInfo: O, withSubcover: f, centered: y, round: g }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(h().root, I),
                        ...(0, o.getDataAttrFromProps)(U),
                        children: [
                            V,
                            (0, r.jsx)(d.F, {
                                className: E,
                                ref: F,
                                itemClassName: (0, a.$)(h().item, h().important, S),
                                'aria-labelledby': ''.concat(z, ' ').concat(z, '-description'),
                                children: C ? H : L,
                            }),
                        ],
                    });
                },
                f = (0, n.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
    },
]);
