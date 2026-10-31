(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9995],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        5699: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => M }));
            var a = i(88800),
                r = i(53548),
                s = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                d = i(88969),
                c = i(17392),
                u = i(29993),
                _ = i(96817),
                m = i(52300),
                h = i(66719),
                x = i(29504),
                g = i(33169),
                v = i(32596),
                f = i(74929),
                k = i(21256),
                j = i(69630),
                T = i(12816),
                b = i(59844),
                p = i(44230),
                A = i(37670),
                N = i(29595),
                C = i(74965),
                L = i(34961),
                P = i(53892),
                R = i(72288),
                B = i(98953),
                I = i(18130),
                y = i(66943),
                S = i(47934),
                O = i(49343),
                w = i(86790),
                E = i(60266),
                H = i(93317),
                z = i(64709),
                D = i(24378),
                W = i.n(D);
            let F = (0, n.PA)((e) => {
                var t, i, n, D;
                let { labelId: F, preloadedLabel: U } = e,
                    K = (0, L.s)(P.n.LABEL),
                    {
                        settings: { isMobile: V },
                    } = (0, R.g)(),
                    { formatMessage: M } = (0, o.A)(),
                    { contentScrollRef: $, setContentScrollRef: X } = (0, p.g)(),
                    { notify: q } = (0, C.l)(),
                    { shareLink: Y } = (0, I.b)('/label/:labelId', { params: { labelId: null != (i = K.id) ? i : '' } }),
                    Z = (0, r.useRef)(null),
                    J = (0, r.useRef)(0);
                (0, z.Q)({ id: Number(K.id), name: null != (n = K.name) ? n : '', type: null != (D = K.type) ? D : '' }, z.T.ROOT);
                let G = (0, u.c)(async () => {
                        (await window.navigator.clipboard.writeText(Y),
                            q((0, a.jsx)(O.D, { entityVariant: B.Y.LABEL, entityTitle: K.name || '' }), { containerId: N.u.INFO }));
                    }),
                    Q = (0, r.useMemo)(
                        () =>
                            V
                                ? (0, a.jsx)(_.$, {
                                      className: W().button,
                                      onClick: G,
                                      icon: (0, a.jsx)(m.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': c.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, a.jsx)(_.$, {
                                      className: W().button,
                                      onClick: G,
                                      icon: (0, a.jsx)(m.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': c.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, a.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [V, G],
                    ),
                    ee = K.isPublisher ? M({ id: 'entity-names.publisher' }) : M({ id: 'entity-names.label' }),
                    et = K.isPublisher ? M({ id: 'entity-names.non-music-releases' }) : M({ id: 'entity-names.releases' });
                return ((0, r.useEffect)(
                    () => () => {
                        K.reset();
                    },
                    [K],
                ),
                K.isNotFound && (0, s.notFound)(),
                (0, r.useEffect)(
                    () => () => {
                        J.current = 0;
                    },
                    [K],
                ),
                (0, r.useEffect)(() => {
                    K.isRejected &&
                        J &&
                        !(J.current > 0) &&
                        (q((0, a.jsx)(y.h, { error: M({ id: 'error-messages.error-load-part-page' }) }), { containerId: N.u.ERROR }), J.current++);
                }, [K.isRejected, q, M]),
                (0, A.J)(K.isResolved),
                K.isNeededToLoad && (0, r.use)(K.getData({ labelId: Number(F), preloadedLabel: U })),
                K.isRejected && !K.isNotFound)
                    ? (0, a.jsx)(v.SomethingWentWrong, {})
                    : (0, a.jsx)(b.n, {
                          pageId: T._Q.LABEL,
                          children: (0, a.jsxs)(j.h, {
                              scrollElement: $,
                              children: [
                                  (0, a.jsx)(H.Y, { innerHeaderRef: Z }),
                                  (0, a.jsxs)(h.N, {
                                      className: W().root,
                                      containerClassName: W().content,
                                      ref: X,
                                      'data-test-id': c.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: W().header,
                                              children: [
                                                  (0, a.jsx)(x.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: ee }),
                                                  (0, a.jsx)(g.R, { className: W().title, title: K.name || '', headingVariant: 'h1' }),
                                                  Q,
                                              ],
                                          }),
                                          K.hasAlbums &&
                                              K.albums &&
                                              (0, a.jsx)(f.p, {
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
                                              (0, a.jsx)(S.O, {
                                                  isShimmerVisible: K.isLoading,
                                                  isShimmerActive: !0,
                                                  isShimmerCentered: !0,
                                                  isShimmerRounded: !0,
                                                  headerClassName: (0, l.$)(W().carouselBlockHeader, W().carouselBlock),
                                                  containerClassName: W().carouselBlock,
                                                  viewAllActionLink: K.artistsUrl,
                                                  title: M({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  'data-test-id': c.Xk.label.ARTISTS_CAROUSEL,
                                                  children: null == (t = K.artists) ? void 0 : t.map((e) => (0, a.jsx)(k.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, a.jsx)(E.A, { children: (0, a.jsx)(w.w, { className: W().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var U = i(19994);
            let K = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, p.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, R.g)();
                return (0, a.jsxs)(j.h, {
                    scrollElement: e,
                    children: [
                        (0, a.jsx)(H.Y, {}),
                        (0, a.jsxs)(h.N, {
                            className: W().root,
                            containerClassName: W().content,
                            ref: t,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: W().header,
                                    children: [
                                        (0, a.jsx)(U.W, { className: W().shimmerLabelText, radius: 's' }),
                                        (0, a.jsx)(U.W, { className: W().shimmerPageTitle, radius: 'l' }),
                                        (0, a.jsx)(U.W, { className: W().shimmerButton, radius: i ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, a.jsx)(S.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: W().carouselContainer,
                                    headerClassName: (0, l.$)(W().carouselBlockHeader, W().carouselBlock),
                                    containerClassName: W().carouselBlock,
                                }),
                                (0, a.jsx)(S.O, {
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
            var V = i(21438);
            let M = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, V.L)(e)) || (0, s.notFound)(), (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)(K, {}), children: (0, a.jsx)(F, { labelId: e }) }));
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(92716),
                d = i(17392),
                c = i(18593),
                u = i(29993),
                _ = i(79070),
                m = i(29832),
                h = i(52300),
                x = i(7555),
                g = i(29504),
                v = i(91959),
                f = i(64207),
                k = i(77455),
                j = i(5407),
                T = i(96527),
                b = i(76675),
                p = i(25557),
                A = i(28830),
                N = i(84384),
                C = i(4795),
                L = i(78940),
                P = i(55693),
                R = i(39079),
                B = i(72288),
                I = i(81877),
                y = i(49738),
                S = i(91292),
                O = i(56862),
                w = i(16704),
                E = i(56446),
                H = i(36207),
                z = i(43161),
                D = i(93434),
                W = i.n(D);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: D, topTitleElement: F, bottomTitleElement: U } = e,
                    { ref: K, intersectionPropertyId: V } = (0, A.n)(),
                    {
                        trailer: M,
                        user: $,
                        paywall: { modal: X },
                    } = (0, B.g)(),
                    { from: q, utmLink: Y } = (0, N.f)({ contextId: t.id, contextType: c.K.Artist }),
                    { formatMessage: Z } = (0, n.A)(),
                    [J, G] = (0, l.useState)(!1),
                    [Q, ee] = (0, l.useState)(!1),
                    [et, ei] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: es } = (0, P.z)(),
                    el = (0, T.N)(),
                    en = (0, b.b)(),
                    eo = (0, f.K)(t),
                    ed = (0, k.A)(t),
                    { id: ec, name: eu, coverUri: e_, isLiked: em } = t,
                    eh = (0, L.Z)(t.url),
                    [ex, eg] = (0, l.useState)(!1),
                    ev = (0, p.F)(),
                    ef = (0, j.P)(),
                    ek = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        (M.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    ej = (0, l.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, Z]),
                    { isPlaying: eT, togglePlay: eb } = (0, R.D)({
                        playContextParams: { contextData: { type: c.K.Artist, meta: { id: Number(ec) }, from: q, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    ep = (0, v.S)({ artist: t, callback: eh }),
                    eA = (0, v.S)({ artist: t, callback: eb }),
                    eN = (0, u.c)((e) => {
                        (null == er || er(), el({ to: o.AppScreen.ArtistScreen }), ep(e));
                    }),
                    eC = (0, C.N)(),
                    eL = (0, u.c)(() => {
                        if (!ef()) {
                            if (eC) return void X.open();
                            (J || eT || (G(!0), null == es || es()), eA(), en(!eT));
                        }
                    }),
                    eP = (0, u.c)(() => {
                        (Q || em || (ee(!0), null == ea || ea()), eo());
                    }),
                    eR = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eB = (0, u.c)((e) => {
                        (ei(e), eg(e));
                    }),
                    eI = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eB,
                                    open: et,
                                    onClick: eR,
                                    className: (0, r.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, a.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': d.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eB, et],
                    ),
                    ey = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                H.n,
                                {
                                    children: (0, a.jsx)(E.k, {
                                        className: (0, r.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ek,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ek]),
                    eS = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                O.O,
                                { onClick: ed, isPinned: t.isPinned, className: (0, r.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ed],
                    ),
                    eO = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ex,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eL,
                                            isPlaying: eT,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        y.c,
                                        {
                                            className: (0, r.$)(W().likeButton, W().control),
                                            isLiked: em,
                                            onClick: eP,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !$.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eI,
                                    pinControl: eS,
                                    trailerControl: ey,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(x.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': d.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, a.jsx)(I.B, {
                                            className: W().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ej,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eN, e_, ej, t.isAvailable, eO],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: K,
                    className: (0, r.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': ej,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(g.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(S.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ej,
                                    onClick: eN,
                                    'data-test-id': d.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, a.jsx)(S.N, { className: W().srTitleLink, href: t.url, onClick: eN, children: ej }),
                    'data-intersection-property-id': V,
                    contentLinesCount: D,
                    view: ew,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        24378: (e) => {
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
        33169: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => b });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                d = i(29993),
                c = i(79070),
                u = i(96817),
                _ = i(52300),
                m = i(29504),
                h = i(63807);
            let x = (e) => {
                let { children: t, title: i, className: r } = e,
                    { setTitleElement: s, setTitle: n } = (0, l.useContext)(h.B),
                    o = (0, l.useRef)(null);
                return (
                    (0, l.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && s(o), i && n(i));
                    }, [o, i, s, n]),
                    (0, l.useEffect)(
                        () => () => {
                            n('');
                        },
                        [n],
                    ),
                    (0, a.jsx)('div', { ref: o, className: r, children: t })
                );
            };
            var g = i(78940),
                v = i(72288),
                f = i(91292),
                k = i(59378),
                j = i(48100),
                T = i.n(j);
            let b = (0, s.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': i,
                        canChange: s = !1,
                        onChange: h,
                        maxTitleLength: j,
                        version: b = '',
                        onVersionClick: p,
                        className: A,
                        headingVariant: N = 'h2',
                        withHeadingClamp: C = !0,
                        link: L,
                        onTitleLinkClick: P,
                    } = e,
                    {
                        settings: { isMobile: R },
                    } = (0, v.g)(),
                    { formatMessage: B } = (0, n.A)(),
                    [I, y] = (0, l.useState)(!1),
                    S = (0, l.useRef)(null),
                    O = t.length + b.length > 25,
                    w = (0, g.Z)(null != L ? L : ''),
                    E = (0, d.c)((e) => {
                        (null == P || P(), w(e));
                    }),
                    H = (0, l.useMemo)(
                        () =>
                            R
                                ? { font: T().font_mobile, iconLink: T().arrowWrapper_mobile }
                                : O
                                  ? { font: T().font_long, iconLink: T().arrowWrapper_long }
                                  : { font: T().font_short, iconLink: T().arrowWrapper_short },
                        [R, O],
                    ),
                    z = !R && s && I,
                    D = (0, l.useCallback)(() => {
                        var e;
                        (y(!0), null == (e = S.current) || e.focus());
                    }, []),
                    W = (0, l.useCallback)(
                        (e) => {
                            (y(!1), null == h || h(e));
                        },
                        [h],
                    ),
                    F = (0, c.L)(() =>
                        (0, a.jsx)('span', {
                            className: (0, r.$)(T().arrowWrapper, H.iconLink),
                            children: (0, a.jsx)(_.I, { className: T().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    U = (0, c.L)(() =>
                        (0, a.jsxs)(m.DZ, {
                            variant: N,
                            id: i,
                            lineClamp: R && C ? 2 : void 0,
                            className: (0, r.$)(T().heading, { [T().heading_withVersion]: b }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, a.jsx)(m.HL, { className: (0, r.$)(T().font, H.font, T().title), variant: 'span', children: t }),
                                b &&
                                    (0, a.jsx)(m.HL, {
                                        onClick: p,
                                        className: (0, r.$)(T().font, H.font, T().version, { [T().version_withOtherVersions]: p }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(b),
                                    }),
                                L && !R && F,
                            ],
                        }),
                    ),
                    K = (0, c.L)(() =>
                        L
                            ? (0, a.jsxs)(f.N, {
                                  className: T().titleWithLink,
                                  containerClassName: T().linkContainer,
                                  textClassName: T().linkText,
                                  href: L,
                                  onClick: E,
                                  children: [U, R && F],
                              })
                            : U,
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !z &&
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(T().root, A),
                                children: [
                                    (0, a.jsx)(x, { title: t, className: T().stickyTitle, children: K }),
                                    s &&
                                        (0, a.jsx)('div', {
                                            className: (0, r.$)(T().editButton, { [T().editButton_centered]: !O && !R }),
                                            children: (0, a.jsx)(u.$, {
                                                onClick: D,
                                                'aria-label': B({ id: 'playlist-actions.change-title' }),
                                                icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        z &&
                            (0, a.jsx)('div', {
                                className: T().textFieldContainer,
                                children: (0, a.jsx)(k.A, {
                                    text: t,
                                    className: (0, r.$)(T().font, H.font, T().textField, T().title, { [T().textField_long]: O && !R }),
                                    onChangeFinish: W,
                                    maxTextLength: j,
                                    minTextLength: 1,
                                    placeholder: B({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35962: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var a = i(88800),
                r = i(37770);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, a.jsx)(r.V, { ...e }, i));
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var a = i(88800),
                r = i(84961),
                s = i(2058),
                l = i(92716),
                n = i(17392),
                o = i(18593),
                d = i(29993),
                c = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                h = i(79390),
                x = i(29595),
                g = i(74965),
                v = i(72288),
                f = i(66943),
                k = i(7555),
                j = i(73170),
                T = i(29504),
                b = i(59304),
                p = i(81877),
                A = i(85074),
                N = i.n(A);
            let C = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: l } = e,
                    { formatMessage: n } = (0, s.A)(),
                    o = n(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(b.$, {
                    closeToast: l,
                    message: (0, a.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, a.jsx)(j.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(k.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, a.jsx)(p.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(T.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var L = i(64207),
                P = i(77455),
                R = i(48749),
                B = i(22505),
                I = i(5407),
                y = i(64284),
                S = i(12816),
                O = i(25557),
                w = i(84384),
                E = i(9618),
                H = i(95210),
                z = i(47964),
                D = i(46936),
                W = i(97956),
                F = i(98953),
                U = i(32721),
                K = i(18130),
                V = i(56117),
                M = i(93091),
                $ = i(27817),
                X = i(74064),
                q = i(15425),
                Y = i(81066),
                Z = i(64546);
            let J = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: k, onOpenChange: j, open: T, ...b } = e,
                    { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: A } = (0, E.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: J },
                        trailer: G,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, P.A)(k),
                    ei = (0, L.K)(k),
                    ea = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, g.l)(),
                            [r, l] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(f.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (r) return;
                            let s = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === h.f.OK
                                    ? i((0, a.jsx)(C, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, a.jsx)(f.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                        });
                    })(k),
                    er = (0, O.F)(),
                    es = ''.concat(y.U.ARTIST, '-').concat(null == k ? void 0 : k.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: en } = (0, w.f)({ blockId: y.U.ARTIST, contextType: o.K.Artist, contextId: null == k ? void 0 : k.id }),
                    { shareLink: eo, pathname: ed } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == k ? void 0 : k.id) ? i : '' } }),
                    ec = (0, R.A)({ entityVariant: D.D.ARTIST, urlParams: { id: null == k ? void 0 : k.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, z.B)({
                        seeds: null != (r = null == k ? void 0 : k.seeds) ? r : [],
                        pageIdForFrom: S._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == k ? void 0 : k.id,
                    }),
                    em = (0, I.P)(),
                    eh = el((null == k ? void 0 : k.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, d.c)(() => {
                        if (p && Q.isAuthorized) return void A();
                        eu || e_();
                    }),
                    eg = (0, d.c)(() => {
                        if (!em()) {
                            if (p) return void A();
                            (null == k ? void 0 : k.id) && (G.setUtmLink(en), G.openArtistTrailer(k.id), er(l.DomainObjectType.Artist, k.id));
                        }
                    }),
                    ev = (0, d.c)(() => {
                        J.open(null == k ? void 0 : k.id);
                    });
                (0, H.N)(T);
                let ef = { variant: F.Y.ARTIST, id: null == k ? void 0 : k.id, title: null == k ? void 0 : k.name, path: ed },
                    ek = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    ej = null == k || null == (t = k.trailer) ? void 0 : t.isAvailable,
                    eT = ee.checkExperiment(W.z.WebNextArtistInfo, 'on'),
                    eb = !ee.checkExperiment(W.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: j,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        ek && (0, a.jsx)(Z.WithOffline, { fallback: (0, a.jsx)(B.d, { entityVariant: D.D.ARTIST, adminUrl: ec }) }),
                        !N && (0, a.jsx)(Z.WithOffline, { fallback: (0, a.jsx)($.L, { onClick: et, isPinned: null == k ? void 0 : k.isPinned }) }),
                        (0, a.jsx)(Z.WithOffline, {
                            fallback: (0, a.jsx)(M.T, {
                                onClick: ei,
                                isLiked: null == k ? void 0 : k.isLiked,
                                disabled: !Q.isAuthorized || !(null == k ? void 0 : k.isAvailable),
                            }),
                        }),
                        ej && (0, a.jsx)(Z.WithOffline, { fallback: (0, a.jsx)(q.N, { onClick: eg }) }),
                        eb &&
                            (0, a.jsx)(Z.WithOffline, {
                                fallback: (0, a.jsx)(Y.C, { onClick: ex, disabled: !(null == k ? void 0 : k.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: j }),
                            }),
                        (0, a.jsx)(X.H, { disabled: !k, shareLink: eo, entityMeta: ef }),
                        eT &&
                            (0, a.jsx)(Z.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, a.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, a.jsx)(Z.WithOffline, {
                            fallback: (0, a.jsx)(V.D, { onClick: ea, isDisliked: null == k ? void 0 : k.isDisliked, disabled: !(null == k ? void 0 : k.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47934: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => k });
            var a = i(88800),
                r = i(65724),
                s = i(53548),
                l = i(35412),
                n = i(92716),
                o = i(79070),
                d = i(53323),
                c = i(19994),
                u = i(34500),
                _ = i(77948),
                m = i(18486),
                h = i(31764),
                x = i(35962),
                g = i(2350),
                v = i.n(g);
            let f = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: g,
                            isShimmerActive: f,
                            isShimmerWithSubcover: k,
                            isShimmerCentered: j,
                            isShimmerRounded: T,
                            title: b,
                            description: p,
                            coverUrl: A,
                            viewAllActionLink: N,
                            titleChildren: C,
                            headerChildren: L,
                            children: P,
                            className: R,
                            containerClassName: B,
                            headerClassName: I,
                            itemClassName: y,
                            showHeaderShimmer: S = !1,
                            showShimmerInfo: O = !0,
                            showControls: w = !0,
                            headingRef: E,
                            headingVariant: H,
                            customShimmer: z,
                            ...D
                        } = e,
                        W = (0, s.useId)(),
                        F = (0, s.useRef)(null),
                        { objectsCount: U } = (0, u.N)(),
                        K = (0, s.useMemo)(
                            () =>
                                S && g
                                    ? (0, a.jsx)('div', { className: I, children: (0, a.jsx)(c.W, { isActive: f, className: v().shimmerTitle, radius: 'l' }) })
                                    : b || p || C || L
                                      ? (0, a.jsx)(_.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != U ? U : 0,
                                            children: (0, a.jsx)(m.T, {
                                                className: I,
                                                labeledForId: W,
                                                title: b,
                                                description: p,
                                                coverUrl: A,
                                                viewAllActionLink: N,
                                                controls: w && (0, a.jsx)(h.X, { className: v().controls, carouselRef: F }),
                                                headingRef: E,
                                                headingVariant: H,
                                                withDescription: !!p,
                                                titleChildren: C,
                                                children: L,
                                            }),
                                        })
                                      : void 0,
                            [A, p, I, E, H, W, f, g, U, w, S, b, C, L, N],
                        ),
                        V = (0, o.L)(() => z || (0, x.k)({ className: i, isActive: f, withInfo: O, withSubcover: k, centered: j, round: T }));
                    return (0, a.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(v().root, R),
                        ...(0, l.OZ)(D),
                        children: [
                            K,
                            (0, a.jsx)(d.F, {
                                className: B,
                                ref: F,
                                itemClassName: (0, r.$)(v().item, v().important, y),
                                'aria-labelledby': ''.concat(W, ' ').concat(W, '-description'),
                                children: g ? V : P,
                            }),
                        ],
                    });
                },
                k = (0, s.forwardRef)((e, t) => (0, a.jsx)(f, { forwardRef: t, ...e }));
        },
        48100: (e) => {
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
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(88800),
                r = i(4370),
                s = i(15077),
                l = i(42729);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => c });
            var a = i(88800),
                r = i(84961),
                s = i(88969),
                l = i(17392),
                n = i(52300),
                o = i(19934),
                d = i(72288);
            let c = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: c } = e,
                    { user: u } = (0, d.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: c,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(34970),
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
                        readOnly: h = !1,
                        'aria-label': x,
                        'data-test-id': g,
                    } = e,
                    [v, f] = (0, l.useState)(i),
                    k = (0, l.useRef)(!1),
                    j = (0, l.useRef)(null),
                    T = (0, l.useCallback)((e) => {
                        f(e.target.value);
                    }, []),
                    b = (0, l.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (k.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [c],
                    ),
                    p = (0, l.useCallback)(() => {
                        let e = v.trim();
                        k.current || (n && e.length < n) ? ((k.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [v, k, n, _, i]);
                ((0, l.useEffect)(() => {
                    j.current && ((j.current.selectionStart = j.current.value.length), (j.current.selectionEnd = j.current.value.length));
                }, []),
                    (0, l.useLayoutEffect)(() => {
                        let e = j.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [j, v]));
                let A = (0, l.useMemo)(() => ('textarea' === d ? (e) => (0, a.jsx)('textarea', { ref: j, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [d]);
                return (0, a.jsx)(A, {
                    className: (0, r.$)(o().root, t, { [o().root_textarea]: 'textarea' === d, [o().root_outline]: m }),
                    type: 'text',
                    value: v,
                    readOnly: h,
                    maxLength: s,
                    onBlur: p,
                    onChange: T,
                    onKeyDown: b,
                    placeholder: u,
                    'aria-label': x,
                    autoFocus: !0,
                    'data-test-id': g,
                });
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [m, h] = (0, s.useState)(!1),
                    { formatMessage: x } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let l = await e.toggleLike();
                    (h(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(_.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, x, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var a = i(88800),
                r = i(15077),
                s = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        68519: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 5699));
        },
        74929: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(88800),
                r = i(53548),
                s = i(92716),
                l = i(28163),
                n = i(77948),
                o = i(47934),
                d = i(10079);
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
                            headerClassName: g,
                            viewAllActionLink: v,
                            headingRef: f,
                            headingVariant: k,
                            shouldSendAnalyticsOnLoaded: j,
                            ...T
                        } = e,
                        b = (0, l.f)();
                    return (
                        (0, r.useEffect)(() => {
                            j && b();
                        }, [b, j]),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: c,
                            className: h,
                            headerClassName: g,
                            containerClassName: x,
                            ref: t,
                            title: u,
                            description: _,
                            viewAllActionLink: v,
                            headingRef: f,
                            headingVariant: k,
                            ...T,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.length,
                                                  children: (0, a.jsx)(d.a, {
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
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        77948: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var a = i(88800),
                r = i(53548),
                s = i(90134);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u, children: _ } = e,
                    m = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: n, objectType: o, objectsCount: d, mainObjectId: c, mainObjectType: u }),
                        [t, i, l, n, o, d, c, u],
                    );
                return (0, a.jsx)(s.l.Provider, { value: m, children: _ });
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
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(58217);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
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
                4596, 3637, 8752, 7435, 5108, 8380, 127, 1931, 1191, 7617, 8099, 6706, 4771, 1311, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 2824, 8624, 4732,
                1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 9425, 3470, 763, 2670, 7358,
            ],
            () => e((e.s = 68519)),
        ),
            (_N_E = e.O()));
    },
]);
