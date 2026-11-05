(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9995],
    {
        5699: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => X }));
            var a = i(88800),
                r = i(53548),
                s = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                d = i(88969),
                c = i(87999),
                u = i(76903),
                h = i(17392),
                _ = i(29993),
                m = i(96817),
                v = i(52300),
                x = i(66719),
                b = i(29504),
                g = i(33169),
                p = i(32596),
                f = i(74929),
                T = i(21256),
                A = i(69630),
                k = i(98427),
                N = i(44230),
                C = i(37670),
                j = i(29595),
                I = i(74965),
                y = i(34961),
                L = i(53892),
                O = i(72288),
                P = i(98953),
                E = i(18130),
                B = i(66943),
                S = i(47934),
                w = i(49343),
                R = i(86790),
                D = i(60266),
                H = i(93317),
                F = i(64709),
                V = i(24378),
                z = i.n(V);
            let W = (0, n.PA)((e) => {
                var t, i, n, V;
                let { labelId: W, preloadedLabel: M } = e,
                    U = (0, y.s)(L.n.LABEL),
                    {
                        settings: { isMobile: K },
                    } = (0, O.g)(),
                    { formatMessage: X } = (0, o.A)(),
                    { contentScrollRef: G, setContentScrollRef: $ } = (0, N.g)(),
                    { notify: q } = (0, I.l)(),
                    { shareLink: Y } = (0, E.b)('/label/:labelId', { params: { labelId: null != (i = U.id) ? i : '' } }),
                    J = (0, r.useRef)(null),
                    Z = (0, r.useRef)(0);
                (0, F.Q)({ id: Number(U.id), name: null != (n = U.name) ? n : '', type: null != (V = U.type) ? V : '' }, F.T.ROOT);
                let Q = (0, _.c)(async () => {
                        (await window.navigator.clipboard.writeText(Y),
                            q((0, a.jsx)(w.D, { entityVariant: P.Y.LABEL, entityTitle: U.name || '' }), { containerId: j.u.INFO }));
                    }),
                    ee = (0, r.useMemo)(
                        () =>
                            K
                                ? (0, a.jsx)(m.$, {
                                      className: z().button,
                                      onClick: Q,
                                      icon: (0, a.jsx)(v.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': h.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, a.jsx)(m.$, {
                                      className: z().button,
                                      onClick: Q,
                                      icon: (0, a.jsx)(v.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': h.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, a.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [K, Q],
                    ),
                    et = U.isPublisher ? X({ id: 'entity-names.publisher' }) : X({ id: 'entity-names.label' }),
                    ei = U.isPublisher ? X({ id: 'entity-names.non-music-releases' }) : X({ id: 'entity-names.releases' });
                return ((0, r.useEffect)(
                    () => () => {
                        U.reset();
                    },
                    [U],
                ),
                U.isNotFound && (0, s.notFound)(),
                (0, r.useEffect)(
                    () => () => {
                        Z.current = 0;
                    },
                    [U],
                ),
                (0, r.useEffect)(() => {
                    U.isRejected &&
                        Z &&
                        !(Z.current > 0) &&
                        (q((0, a.jsx)(B.h, { error: X({ id: 'error-messages.error-load-part-page' }) }), { containerId: j.u.ERROR }), Z.current++);
                }, [U.isRejected, q, X]),
                (0, C.J)(U.isResolved),
                U.isNeededToLoad && (0, r.use)(U.getData({ labelId: Number(W), preloadedLabel: M })),
                U.isRejected && !U.isNotFound)
                    ? (0, a.jsx)(p.SomethingWentWrong, {})
                    : (0, a.jsx)(u.a, {
                          pageId: c.AppScreen.Label,
                          pageIdForFrom: k.b.LABEL,
                          children: (0, a.jsxs)(A.h, {
                              scrollElement: G,
                              children: [
                                  (0, a.jsx)(H.Y, { innerHeaderRef: J }),
                                  (0, a.jsxs)(x.N, {
                                      className: z().root,
                                      containerClassName: z().content,
                                      ref: $,
                                      'data-test-id': h.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: z().header,
                                              children: [
                                                  (0, a.jsx)(b.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: et }),
                                                  (0, a.jsx)(g.R, { className: z().title, title: U.name || '', headingVariant: 'h1' }),
                                                  ee,
                                              ],
                                          }),
                                          U.hasAlbums &&
                                              U.albums &&
                                              (0, a.jsx)(f.p, {
                                                  isShimmerVisible: U.isLoading,
                                                  isShimmerActive: !0,
                                                  className: z().carouselContainer,
                                                  headerClassName: (0, l.$)(z().carouselBlock, z().carouselBlockHeader),
                                                  containerClassName: z().carouselBlock,
                                                  title: ei,
                                                  viewAllActionLink: U.albumsUrl,
                                                  albums: U.albums,
                                                  headingVariant: 'h2',
                                                  'data-test-id': h.Xk.label.RELEASES_CAROUSEL,
                                              }),
                                          U.hasArtists &&
                                              (0, a.jsx)(S.O, {
                                                  isShimmerVisible: U.isLoading,
                                                  isShimmerActive: !0,
                                                  isShimmerCentered: !0,
                                                  isShimmerRounded: !0,
                                                  headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                                  containerClassName: z().carouselBlock,
                                                  viewAllActionLink: U.artistsUrl,
                                                  title: X({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  'data-test-id': h.Xk.label.ARTISTS_CAROUSEL,
                                                  children: null == (t = U.artists) ? void 0 : t.map((e) => (0, a.jsx)(T.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, a.jsx)(D.A, { children: (0, a.jsx)(R.w, { className: z().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var M = i(19994);
            let U = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, N.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, O.g)();
                return (0, a.jsxs)(A.h, {
                    scrollElement: e,
                    children: [
                        (0, a.jsx)(H.Y, {}),
                        (0, a.jsxs)(x.N, {
                            className: z().root,
                            containerClassName: z().content,
                            ref: t,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: z().header,
                                    children: [
                                        (0, a.jsx)(M.W, { className: z().shimmerLabelText, radius: 's' }),
                                        (0, a.jsx)(M.W, { className: z().shimmerPageTitle, radius: 'l' }),
                                        (0, a.jsx)(M.W, { className: z().shimmerButton, radius: i ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, a.jsx)(S.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: z().carouselContainer,
                                    headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                    containerClassName: z().carouselBlock,
                                }),
                                (0, a.jsx)(S.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    isShimmerCentered: !0,
                                    isShimmerRounded: !0,
                                    headerClassName: (0, l.$)(z().carouselBlockHeader, z().carouselBlock),
                                    containerClassName: z().carouselBlock,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var K = i(21438);
            let X = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, K.L)(e)) || (0, s.notFound)(), (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)(U, {}), children: (0, a.jsx)(W, { labelId: e }) }));
            };
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => d });
            var a = i(88800),
                r = i(53548),
                s = i(63582),
                l = i(99875),
                n = i(66109),
                o = i(245);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: s, objectType: d }) => {
                    let c = (0, o.N)(),
                        u = (0, r.useContext)(l.p)?.loadedSession,
                        h = [d, t, i, s].join(':'),
                        [_, m] = (0, r.useState)(() => ({ client: c, identity: h, blockSession: u, viewSession: c.createBlockViewSession() }));
                    (_.client !== c || _.identity !== h || _.blockSession !== u) &&
                        m({ client: c, identity: h, blockSession: u, viewSession: c.createBlockViewSession() });
                    let v = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: s, objectType: d }, viewSession: _.viewSession }),
                        [t, i, s, d, _.viewSession],
                    );
                    return (0, a.jsx)(n.l, { value: v, children: e });
                },
            );
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => a });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...s } = t,
                        l = e || 'Internal error';
                    (super(l, s), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(87999),
                d = i(62414),
                c = i(80643),
                u = i(33979),
                h = i(17392),
                _ = i(18593),
                m = i(29993),
                v = i(79070),
                x = i(29832),
                b = i(52300),
                g = i(7555),
                p = i(29504),
                f = i(91959),
                T = i(64207),
                A = i(77455),
                k = i(5407),
                N = i(57934),
                C = i(84384),
                j = i(4795),
                I = i(78940),
                y = i(55693),
                L = i(39079),
                O = i(72288),
                P = i(81877),
                E = i(49738),
                B = i(91292),
                S = i(56862),
                w = i(16704),
                R = i(56446),
                D = i(36207),
                H = i(43161),
                F = i(93434),
                V = i.n(F);
            let z = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: F, topTitleElement: z, bottomTitleElement: W } = e,
                    M = (0, d.D)(),
                    {
                        trailer: U,
                        user: K,
                        paywall: { modal: X },
                    } = (0, O.g)(),
                    { from: G, utmLink: $ } = (0, C.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: q } = (0, n.A)(),
                    [Y, J] = (0, l.useState)(!1),
                    [Z, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, y.z)(),
                    es = (0, c.S)(),
                    el = (0, u.g)(),
                    en = (0, T.K)(t),
                    eo = (0, A.A)(t),
                    { id: ed, name: ec, coverUri: eu, isLiked: eh } = t,
                    e_ = (0, I.Z)(t.url),
                    [em, ev] = (0, l.useState)(!1),
                    ex = (0, N.F)(),
                    eb = (0, k.P)(),
                    eg = (0, m.c)((e) => {
                        if ((e.stopPropagation(), eb())) return void e.preventDefault();
                        (U.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    ep = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ec }),
                            t = eh ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ec, eh, q]),
                    { isPlaying: ef, togglePlay: eT } = (0, L.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ed) }, from: G, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eA = (0, f.S)({ artist: t, callback: e_ }),
                    ek = (0, f.S)({ artist: t, callback: eT }),
                    eN = (0, m.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eA(e));
                    }),
                    eC = (0, j.N)(),
                    ej = (0, m.c)(() => {
                        if (!eb()) {
                            if (eC) return void X.open();
                            (Y || ef || (J(!0), null == er || er()), ek(), ef || el());
                        }
                    }),
                    eI = (0, m.c)(() => {
                        (Z || eh || (Q(!0), null == ei || ei()), en());
                    }),
                    ey = (0, m.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, m.c)((e) => {
                        (et(e), ev(e));
                    }),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                H.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: ee,
                                    onClick: ey,
                                    className: (0, r.$)(V().menuButton, V().control),
                                    size: 's',
                                    icon: (0, a.jsx)(b.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': h.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ey, eL, ee],
                    ),
                    eP = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(R.k, {
                                        className: (0, r.$)(V().trailerButton, V().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eg,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eg]),
                    eE = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                S.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, r.$)(V().pinButton, V().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eB = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || em,
                                    className: V().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(V().playButton, V().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: ef,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        E.c,
                                        {
                                            className: (0, r.$)(V().likeButton, V().control),
                                            isLiked: eh,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !K.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eO,
                                    pinControl: eE,
                                    trailerControl: eP,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eS = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(g.t, {
                                className: V().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': h.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: V().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, a.jsx)(P.B, {
                                            className: V().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ep,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eB,
                                    ],
                                }),
                            }),
                        [eN, eu, ep, t.isAvailable, eB],
                    );
                return (0, a.jsx)(x.MN, {
                    ref: M,
                    className: (0, r.$)(V().root, i),
                    textPosition: 'center',
                    'aria-label': ep,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            z,
                            (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(B.N, {
                                    className: V().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ep,
                                    onClick: eN,
                                    'data-test-id': h.Kq.artist.ARTIST_TITLE,
                                    children: ec,
                                }),
                            }),
                            W,
                        ],
                    }),
                    srTitle: (0, a.jsx)(B.N, { className: V().srTitleLink, href: t.url, onClick: eN, children: ep }),
                    contentLinesCount: F,
                    view: eS,
                    'data-test-id': h.Kq.artist.ARTIST_ITEM,
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
            i.d(t, { R: () => A });
            // for PulseSync WebHost: BEGIN imports for native addon header title items
            var pulseSyncHeaderReact = i(53548),
                pulseSyncHeaderJsx = i(88800),
                pulseSyncHeaderText = i(29504),
                pulseSyncHeaderIcon = i(52300);

            // for PulseSync WebHost: END imports for native addon header title items
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                d = i(29993),
                c = i(79070),
                u = i(96817),
                h = i(52300),
                _ = i(29504),
                m = i(63807);
            let v = (e) => {
                let { children: t, title: i, className: r } = e,
                    { setTitleElement: s, setTitle: n } = (0, l.useContext)(m.B),
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
            var x = i(78940),
                b = i(72288),
                g = i(91292),
                p = i(59378),
                f = i(48100),
                T = i.n(f);
            let A = (0, s.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header titles when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header titles when native addon slots change
                let {
                        title: t = '',
                        'aria-labelledby': i,
                        canChange: s = !1,
                        onChange: m,
                        maxTitleLength: f,
                        version: A = '',
                        onVersionClick: k,
                        className: N,
                        headingVariant: C = 'h2',
                        withHeadingClamp: j = !0,
                        link: I,
                        onTitleLinkClick: y,
                    } = e,
                    {
                        settings: { isMobile: L },
                    } = (0, b.g)(),
                    { formatMessage: O } = (0, n.A)(),
                    [P, E] = (0, l.useState)(!1),
                    B = (0, l.useRef)(null),
                    S = t.length + A.length > 25,
                    w = (0, x.Z)(null != I ? I : ''),
                    R = (0, d.c)((e) => {
                        (null == y || y(), w(e));
                    }),
                    D = (0, l.useMemo)(
                        () =>
                            L
                                ? { font: T().font_mobile, iconLink: T().arrowWrapper_mobile }
                                : S
                                  ? { font: T().font_long, iconLink: T().arrowWrapper_long }
                                  : { font: T().font_short, iconLink: T().arrowWrapper_short },
                        [L, S],
                    ),
                    H = !L && s && P,
                    F = (0, l.useCallback)(() => {
                        var e;
                        (E(!0), null == (e = B.current) || e.focus());
                    }, []),
                    V = (0, l.useCallback)(
                        (e) => {
                            (E(!1), null == m || m(e));
                        },
                        [m],
                    ),
                    z = (0, c.L)(() =>
                        (0, a.jsx)('span', {
                            className: (0, r.$)(T().arrowWrapper, D.iconLink),
                            children: (0, a.jsx)(h.I, { className: T().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    W = (0, c.L)(() =>
                        (0, a.jsxs)(_.DZ, {
                            variant: C,
                            id: i,
                            lineClamp: L && j ? 2 : void 0,
                            className: (0, r.$)(T().heading, { [T().heading_withVersion]: A }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, a.jsx)(_.HL, { className: (0, r.$)(T().font, D.font, T().title), variant: 'span', children: t }),
                                A &&
                                    (0, a.jsx)(_.HL, {
                                        onClick: k,
                                        className: (0, r.$)(T().font, D.font, T().version, { [T().version_withOtherVersions]: k }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(A),
                                    }),
                                I && !L && z,
                            ],
                        }),
                    ),
                    M = (0, c.L)(() =>
                        I
                            ? (0, a.jsxs)(g.N, {
                                  className: T().titleWithLink,
                                  containerClassName: T().linkContainer,
                                  textClassName: T().linkText,
                                  href: I,
                                  onClick: R,
                                  children: [W, L && z],
                              })
                            : W,
                    );
                // for PulseSync WebHost: BEGIN render native addon items beside header titles
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items beside header titles
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !H &&
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(T().root, N),
                                // for PulseSync WebHost: BEGIN inject native addon items into the header title
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, a.jsx)(v, { title: t, className: T().stickyTitle, children: M }),
                                    s &&
                                        (0, a.jsx)('div', {
                                            className: (0, r.$)(T().editButton, { [T().editButton_centered]: !S && !L }),
                                            children: (0, a.jsx)(u.$, {
                                                onClick: F,
                                                'aria-label': O({ id: 'playlist-actions.change-title' }),
                                                icon: (0, a.jsx)(h.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                                // for PulseSync WebHost: END inject native addon items into the header title
                            }),
                        H &&
                            (0, a.jsx)('div', {
                                className: T().textFieldContainer,
                                children: (0, a.jsx)(p.A, {
                                    text: t,
                                    className: (0, r.$)(T().font, D.font, T().textField, T().title, { [T().textField_long]: S && !L }),
                                    onChangeFinish: V,
                                    maxTextLength: f,
                                    minTextLength: 1,
                                    placeholder: O({ id: 'playlist-actions.enter-title' }),
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
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var a = i(88800),
                r = i(84961),
                s = i(2058),
                l = i(87999),
                n = i(17392),
                o = i(18593),
                d = i(29993),
                c = i(52300),
                u = i(19934),
                h = i(96706),
                _ = i(53548),
                m = i(79390),
                v = i(29595),
                x = i(74965),
                b = i(72288),
                g = i(66943),
                p = i(7555),
                f = i(73170),
                T = i(29504),
                A = i(59304),
                k = i(81877),
                N = i(85074),
                C = i.n(N);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: l } = e,
                    { formatMessage: n } = (0, s.A)(),
                    o = n(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(A.$, {
                    closeToast: l,
                    message: (0, a.jsxs)('div', {
                        className: C().message,
                        children: [
                            (0, a.jsx)(f.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(p.t, {
                                className: C().cover,
                                radius: 'round',
                                children: (0, a.jsx)(k.B, { className: C().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(T.HL, { className: C().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var I = i(64207),
                y = i(77455),
                L = i(48749),
                O = i(22505),
                P = i(5407),
                E = i(64284),
                B = i(98427),
                S = i(57934),
                w = i(84384),
                R = i(9618),
                D = i(95210),
                H = i(47964),
                F = i(46936),
                V = i(97956),
                z = i(98953),
                W = i(32721),
                M = i(18130),
                U = i(56117),
                K = i(93091),
                X = i(27817),
                G = i(74064),
                $ = i(15425),
                q = i(81066),
                Y = i(64546);
            let J = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: p, onOpenChange: f, open: T, ...A } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: N } = (0, R.q)(),
                    {
                        settings: { isMobile: C },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, b.g)(),
                    et = (0, y.A)(p),
                    ei = (0, I.K)(p),
                    ea = ((e) => {
                        let { user: t } = (0, b.g)(),
                            { notify: i } = (0, x.l)(),
                            [r, l] = (0, _.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(g.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (r) return;
                            let s = { ...(0, h.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === m.f.OK
                                    ? i((0, a.jsx)(j, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, a.jsx)(g.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(p),
                    er = (0, S.F)(),
                    es = ''.concat(E.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: en } = (0, w.f)({ blockId: E.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ed } = (0, M.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ec = (0, L.A)({ entityVariant: F.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: eh } = (0, H.B)({
                        seeds: null != (r = null == p ? void 0 : p.seeds) ? r : [],
                        pageIdForFrom: B.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    e_ = (0, P.P)(),
                    em = el((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, d.c)(() => {
                        if (k && Q.isAuthorized) return void N();
                        eu || eh();
                    }),
                    ex = (0, d.c)(() => {
                        if (!e_()) {
                            if (k) return void N();
                            (null == p ? void 0 : p.id) && (Z.setUtmLink(en), Z.openArtistTrailer(p.id), er(l.DomainObjectType.Artist, p.id));
                        }
                    }),
                    eb = (0, d.c)(() => {
                        J.open(null == p ? void 0 : p.id);
                    });
                (0, D.N)(T);
                let eg = { variant: z.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ed },
                    ep = ee.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    ef = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    eT = ee.checkExperiment(V.z.WebNextArtistInfo, 'on'),
                    eA = !ee.checkExperiment(V.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: C,
                    offsetOptions: 10,
                    open: T,
                    onOpenChange: f,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...A,
                    children: [
                        ep && (0, a.jsx)(Y.WithOffline, { fallback: (0, a.jsx)(O.d, { entityVariant: F.D.ARTIST, adminUrl: ec }) }),
                        !C && (0, a.jsx)(Y.WithOffline, { fallback: (0, a.jsx)(X.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, a.jsx)(Y.WithOffline, {
                            fallback: (0, a.jsx)(K.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !Q.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        ef && (0, a.jsx)(Y.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: ex }) }),
                        eA &&
                            (0, a.jsx)(Y.WithOffline, {
                                fallback: (0, a.jsx)(q.C, { onClick: ev, disabled: !(null == p ? void 0 : p.isAvailable), variant: W.I.ARTIST, onOpenMenuChange: f }),
                            }),
                        (0, a.jsx)(G.H, { disabled: !p, shareLink: eo, entityMeta: eg }),
                        eT &&
                            (0, a.jsx)(Y.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: eb,
                                    icon: (0, a.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: em,
                                }),
                            }),
                        (0, a.jsx)(Y.WithOffline, {
                            fallback: (0, a.jsx)(U.D, { onClick: ea, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        45805: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 5699));
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
        49784: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
            var a = i(53548),
                r = i(63582),
                s = i(89846),
                l = i(245),
                n = i(22681);
            let o = (0, r.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, a.useRef)(!1),
                    i = (0, l.N)(),
                    { hash: r } = (0, s.g)(),
                    o = (0, n.w)(),
                    d = (0, a.useMemo)(() => (o ? i.createBlockReporter(o.snapshot) : null), [i, o]);
                (0, a.useEffect)(() => {
                    e && o && d && !t.current && d.loaded({ objectsCount: o.snapshot.block.objectsCount, viewUuid: o.block.loadedSession.start() }) && (t.current = !0);
                }, [e, r, d, o]);
            });
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
                        onChangeFinish: h,
                        withOutline: _ = !1,
                        readOnly: m = !1,
                        'aria-label': v,
                        'data-test-id': x,
                    } = e,
                    [b, g] = (0, l.useState)(i),
                    p = (0, l.useRef)(!1),
                    f = (0, l.useRef)(null),
                    T = (0, l.useCallback)((e) => {
                        g(e.target.value);
                    }, []),
                    A = (0, l.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (p.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [c],
                    ),
                    k = (0, l.useCallback)(() => {
                        let e = b.trim();
                        p.current || (n && e.length < n) ? ((p.current = !1), null == h || h(i)) : null == h || h(e);
                    }, [b, p, n, h, i]);
                ((0, l.useEffect)(() => {
                    f.current && ((f.current.selectionStart = f.current.value.length), (f.current.selectionEnd = f.current.value.length));
                }, []),
                    (0, l.useLayoutEffect)(() => {
                        let e = f.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [f, b]));
                let N = (0, l.useMemo)(() => ('textarea' === d ? (e) => (0, a.jsx)('textarea', { ref: f, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [d]);
                return (0, a.jsx)(N, {
                    className: (0, r.$)(o().root, t, { [o().root_textarea]: 'textarea' === d, [o().root_outline]: _ }),
                    type: 'text',
                    value: b,
                    readOnly: m,
                    maxLength: s,
                    onBlur: k,
                    onChange: T,
                    onKeyDown: A,
                    placeholder: u,
                    'aria-label': v,
                    autoFocus: !0,
                    'data-test-id': x,
                });
            });
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => h, Yw: () => a, JU: () => r, DQ: () => v, Ve: () => x });
            var a,
                r,
                s = i(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var a = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && a) {
                                            a = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var a = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && a) {
                                        a = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var n = i(14965);
            class o extends n.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class d extends n.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(a || (a = {}));
            let c = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, a] = i.split(':');
                        e && a && t.push({ type: e, id: a });
                    }
                    return t;
                },
                u = (e, t) => c(e).filter((e) => e.type === t);
            class h {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new d(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        a = {};
                    for (let e of i)
                        if (e) {
                            let t = a[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (a[e.disclaimerType] = t));
                        }
                    return a;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(r || (r = {}));
            let _ = new Map([
                    [a.EXPLICIT_ICON, r.E],
                    [a.AGE_18_ICON, r.AGE_18],
                    [a.AGE_16_ICON, r.AGE_16],
                    [a.AGE_12_ICON, r.AGE_12],
                    [a.EXCLAMATION_ICON, r.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [a.SUBSTITUTED_ICON, r.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                m = [a.EXPLICIT_ICON, a.AGE_18_ICON, a.AGE_16_ICON, a.AGE_12_ICON, a.SUBSTITUTED_ICON, a.EXCLAMATION_ICON],
                v = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, m);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                x = (e, t) => u(e, t).length > 0;
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                h = i(54243);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, m] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    m(!0);
                    let l = await e.toggleLike();
                    (m(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(h.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, v, i]);
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
        74929: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(88800),
                r = i(53548),
                s = i(87999),
                l = i(49784),
                n = i(7833),
                o = i(47934),
                d = i(10079);
            let c = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: r,
                        title: c,
                        description: u,
                        albums: h,
                        className: _,
                        containerClassName: m,
                        headerClassName: v,
                        viewAllActionLink: x,
                        headingRef: b,
                        headingVariant: g,
                        shouldSendAnalyticsOnLoaded: p,
                        ...f
                    } = e;
                    return (
                        (0, l.W)({ enabled: !!p && !i }),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            className: _,
                            headerClassName: v,
                            containerClassName: m,
                            ref: t,
                            title: c,
                            description: u,
                            viewAllActionLink: x,
                            headingRef: b,
                            headingVariant: g,
                            ...f,
                            children:
                                null == h
                                    ? void 0
                                    : h.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
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
            i.d(t, { A: () => h });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(64247);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: h } = (0, l.A)(),
                    [_, m] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    m(!0);
                    let l = await e.togglePin();
                    (m(!1),
                        l
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(c.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
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
                7437, 917, 4814, 9079, 1833, 3469, 8194, 1191, 8655, 8099, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 9202, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 7934, 3360, 763, 2670, 7358,
            ],
            () => e((e.s = 45805)),
        ),
            (_N_E = e.O()));
    },
]);
