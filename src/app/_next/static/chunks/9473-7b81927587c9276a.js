(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9473],
    {
        953: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__Wc3mw',
                cardLink: 'ArtistRecommendationCard_cardLink__21zGd',
                playButton: 'ArtistRecommendationCard_playButton__e5HmA',
                root_active: 'ArtistRecommendationCard_root_active__tQIo2',
            };
        },
        4465: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => G });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(35412),
                l = i(87999),
                c = i(7833),
                d = i(17392),
                u = i(53323),
                m = i(72288),
                _ = i(97956),
                v = i(18486),
                p = i(31764),
                f = i(74804),
                x = i(29993),
                h = i(52455),
                b = i(79070),
                g = i(90109),
                A = i(92867),
                C = i(32703),
                y = i(33724),
                j = i(2058),
                k = i(62414),
                T = i(83295),
                R = i(91292),
                N = i(16704),
                P = i(4550),
                L = i(13988),
                I = i(76636),
                O = i(27766),
                E = i(81877),
                M = i(17828),
                w = i.n(M);
            let S = (0, a.PA)((e) => {
                let { promo: t } = e;
                return (0, r.jsx)('div', {
                    className: w().root,
                    children: (0, r.jsx)('div', {
                        className: w().coverContainer,
                        children: (0, r.jsx)(E.B, {
                            className: (0, n.$)(w().cover, { [w().cover_withTopPosition]: t.coverContentMode === O.y.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 300,
                            fit: 'cover',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var B = i(83961),
                z = i(29504),
                D = i(13946),
                V = i(90224),
                U = i(83680),
                F = i.n(U);
            let K = (0, a.PA)((e) => {
                let { promo: t } = e,
                    i = (0, o.useRef)(null),
                    { isTruncated: a } = (0, B.W)(i, 'horizontal');
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: F().avatars,
                            'aria-hidden': !0,
                            children: t.avatarArtists.map((e) =>
                                (0, r.jsx)(E.B, { className: F().avatar, src: e.coverUri, size: 100, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                            ),
                        }),
                        (0, r.jsx)(D.i, {
                            className: F().artistNames,
                            captionClassName: F().artistCaption,
                            artists: t.artists,
                            captionSize: 'm',
                            withLink: !1,
                            withCustomTooltip: !1,
                        }),
                        (0, r.jsxs)('div', {
                            className: F().titleContainer,
                            children: [
                                (0, r.jsx)(z.DZ, {
                                    ref: i,
                                    className: (0, n.$)(F().title, { [F().title_truncated]: a }),
                                    variant: 'div',
                                    size: 'xs',
                                    children: t.album.title,
                                }),
                                t.album.explicitDisclaimer &&
                                    (0, r.jsx)(V.N, {
                                        containerClassName: F().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var W = i(47234),
                H = i.n(W);
            let $ = (0, a.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, j.A)(),
                    n = (0, k.D)(),
                    { ref: a } = (0, I.H)({ promo: t }),
                    { isPlaying: s, handleNavigate: l, handlePlayButtonClick: c } = (0, L.Z)({ promo: t }),
                    u = (0, o.useMemo)(() => (0, P.d)(t.averageColor), [t.averageColor]),
                    m = (0, T.S)([n, a]),
                    _ = (0, x.c)((e) => {
                        e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    });
                return (0, r.jsxs)('div', {
                    ref: m,
                    className: H().root,
                    style: u,
                    onFocus: _,
                    'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, r.jsxs)(R.N, {
                            className: H().cardLink,
                            href: t.albumUrl,
                            onClick: l,
                            'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, r.jsx)(S, { promo: t }), (0, r.jsx)('div', { className: H().info, children: (0, r.jsx)(K, { promo: t }) })],
                        }),
                        (0, r.jsx)(N.D, {
                            className: H().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            radius: 'xxxl',
                            size: 'xs',
                            iconSize: 'xxs',
                            iconClassName: H().playIcon,
                            isPlaying: s,
                            onClick: c,
                            disabled: !t.album.isAvailable,
                            children: i(s ? { id: 'player-actions.pause' } : { id: 'player-actions.listen' }),
                        }),
                    ],
                });
            });
            var q = i(23324),
                X = i.n(q);
            let Y = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: j,
                            setOutdated: k,
                            meta: T,
                            className: R,
                            containerClassName: N,
                            headerClassName: P,
                            headingVariant: L,
                            ...I
                        } = e,
                        { experiments: O } = (0, m.g)(),
                        { carouselRef: E, onScroll: M } = ((e) => {
                            let t = (0, o.useRef)(null),
                                i = (0, o.useRef)(null),
                                r = (0, A.U)(g.Q8),
                                n = (0, x.c)(() => {
                                    r &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            var e;
                                            i.current = null;
                                            let r = t.current;
                                            if (!r) return;
                                            let n = getComputedStyle(r),
                                                a = Number(n.getPropertyValue('--items-per-page')) || 1;
                                            if (a > 1) return;
                                            let o = r.scrollLeft,
                                                s = r.getBoundingClientRect().left + r.clientLeft + parseFloat(n.paddingLeft),
                                                l = Array.from(r.children),
                                                c = l.map((e) => e.getBoundingClientRect()),
                                                d = c[Math.max(0, l.length - a)],
                                                u = Math.max(0, (null != (e = null == d ? void 0 : d.left) ? e : s) - s + o);
                                            l.forEach((e, t) => {
                                                var i;
                                                let r = c[t];
                                                if (!(e instanceof HTMLElement) || !(null == r ? void 0 : r.width)) return;
                                                let n = Math.min(r.left - s + o, u) - o,
                                                    a = (0, C.A)(n, r.width);
                                                e.style.setProperty('--card-offset', null != (i = a['--cover-offset']) ? i : null);
                                            });
                                        }));
                                });
                            return (
                                (0, h.s)(n, t),
                                (0, o.useEffect)(
                                    () => (
                                        n(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, n, r],
                                ),
                                (0, b.L)(() => ({ carouselRef: t, onScroll: n }))
                            );
                        })(null != (t = null == a ? void 0 : a.items.length) ? t : 0),
                        { ref: w, intersectionPropertyId: S } = (0, f.J)({ data: a, isLoaded: j, setOutdated: k, forwardedRef: i }),
                        B = O.checkExperiment(_.z.WebNextArtistRecommendationsAutoScroll, 'on') ? y.i : u.F;
                    return (0, r.jsxs)('section', {
                        className: (0, n.$)(X().root, R),
                        ref: w,
                        'data-intersection-property-id': S,
                        ...(0, s.OZ)(I),
                        children: [
                            (0, r.jsx)(v.T, {
                                className: (0, n.$)(X().header, P),
                                title: T.title,
                                headingVariant: L,
                                controls: (0, r.jsx)(p.X, { className: X().controls, carouselRef: E }),
                            }),
                            (0, r.jsx)(B, {
                                ref: E,
                                className: (0, n.$)(X().carousel, N),
                                itemClassName: X().item,
                                onScroll: M,
                                'data-test-id': d.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == a
                                        ? void 0
                                        : a.items.map((e, t) =>
                                              (0, r.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: l.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)($, { promo: e }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                G = (0, o.forwardRef)((e, t) => (0, r.jsx)(Y, { forwardRef: t, ...e }));
        },
        4550: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => n });
            var r = i(35412);
            let n = (e) => {
                if (!e) return { '--artist-recommendation-glow-color': '#848484' };
                let { h: t, s: i, l: n } = (0, r.g8)(e);
                return {
                    '--artist-recommendation-glow-color': e,
                    '--artist-recommendation-border-color-top': 'hsl('
                        .concat(t, ' ')
                        .concat(Math.max(0, i - 30), '% ')
                        .concat(Math.min(80, n + 40), '%)'),
                    '--artist-recommendation-border-color-bottom': 'hsl('
                        .concat(t, ' ')
                        .concat(Math.max(0, i - 20), '% ')
                        .concat(Math.max(10, n - 20), '%)'),
                };
            };
        },
        4609: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__NfyBA',
                root_withContextMenu: 'VibeAgentCard_root_withContextMenu__DqPEk',
                root_withVibeActions: 'VibeAgentCard_root_withVibeActions__RS3od',
                cover: 'VibeAgentCard_cover__cEIXN',
                controls: 'VibeAgentCard_controls__zIX5Z',
                controls_menuOpen: 'VibeAgentCard_controls_menuOpen__0Woi1',
                touchMenu: 'VibeAgentCard_touchMenu__BtT87',
                additionals_hide: 'VibeAgentCard_additionals_hide__DkEhr',
                control: 'VibeAgentCard_control__sc7Nx',
                playButton: 'VibeAgentCard_playButton__kwX21',
                likeButton: 'VibeAgentCard_likeButton__VZyfO',
                pinButton: 'VibeAgentCard_pinButton__KR74R',
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var r = i(88800),
                n = i(15077),
                a = i(33719);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        10448: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoBig_controls__QUaQD',
                root: 'ArtistRecommendationsPromoBig_root__rpYBw',
                header: 'ArtistRecommendationsPromoBig_header__5U0Kb',
                carousel: 'ArtistRecommendationsPromoBig_carousel__7gpmw',
                item: 'ArtistRecommendationsPromoBig_item__JrrOG',
                important: 'ArtistRecommendationsPromoBig_important__NefdH',
            };
        },
        13988: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => h });
            var r = i(87999),
                n = i(80643),
                a = i(33979),
                o = i(18593),
                s = i(29993),
                l = i(79070),
                c = i(60757),
                d = i(5407),
                u = i(84384),
                m = i(1344),
                _ = i(9618),
                v = i(4795),
                p = i(78940),
                f = i(39079),
                x = i(72288);
            let h = (e) => {
                let { promo: t } = e,
                    { paywall: i } = (0, x.g)(),
                    h = (0, p.Z)(t.albumUrl),
                    b = (0, c.c)({ album: t.album, callback: h }),
                    g = (0, n.S)(),
                    A = (0, a.g)(),
                    C = (0, d.P)(),
                    y = (0, v.N)(),
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: k } = (0, _.q)(),
                    { from: T } = (0, u.f)({ contextId: t.album.id, contextType: o.K.Album }),
                    { isPlaying: R, togglePlay: N } = (0, f.D)({
                        playContextParams: {
                            contextData: { type: o.K.Album, meta: { id: t.album.id }, from: T, utmLink: (0, m.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    P = (0, s.c)((e) => {
                        (t.setClicked(), g({ to: r.AppScreen.AlbumScreen }), b(e));
                    }),
                    L = (0, s.c)(() => {
                        (t.setClicked(), N());
                    }),
                    I = (0, c.c)({ album: t.album, callback: L }),
                    O = (0, s.c)(() => {
                        if (!C()) {
                            if (j) return void k();
                            if (y) return void i.modal.open();
                            (I(), A());
                        }
                    });
                return (0, l.L)(() => ({ isPlaying: R, handleNavigate: P, handlePlayButtonClick: O }));
            };
        },
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
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
        17828: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__wCua8',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__WLw0_',
                cover: 'ArtistRecommendationArtwork_cover__TvlIy',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__9OmSw',
            };
        },
        19038: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var r = i(88800),
                n = i(84961),
                a = i(53548),
                o = i(2058),
                s = i(88969),
                l = i(50408),
                c = i(96817),
                d = i(52300),
                u = i(17610),
                m = i(29504),
                _ = i(44230),
                v = i(77356),
                p = i(49034),
                f = i(26645),
                x = i(20150),
                h = i.n(x);
            let b = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, n.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: n } = e,
                        { formatMessage: x } = (0, o.A)(),
                        { contentRef: g } = (0, _.g)(),
                        { setIsOnboardingOpened: A } = (0, f.w)(),
                        [C, y] = (0, l.d)(),
                        j = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: C }) || !!n,
                        [k, T] = (0, a.useState)(j),
                        R = (0, a.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), T(!1), A(!1));
                            },
                            [A],
                        ),
                        N = (0, a.useCallback)(
                            (e) => {
                                e || R();
                            },
                            [R],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: b,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: k,
                        onOpenChange: N,
                        enableAriaDescribedby: !0,
                        referenceRef: y,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: h().root,
                                rootNode: g,
                                children: [
                                    (0, r.jsx)(c.$, {
                                        icon: (0, r.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: R,
                                        variant: 'text',
                                        className: h().close,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(m.HL, {
                                        variant: 'span',
                                        className: h().text,
                                        children: i || (0, r.jsx)(s.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        20150: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                _ = i(18593),
                v = i(29993),
                p = i(79070),
                f = i(29832),
                x = i(52300),
                h = i(7555),
                b = i(29504),
                g = i(91959),
                A = i(64207),
                C = i(77455),
                y = i(5407),
                j = i(57934),
                k = i(84384),
                T = i(4795),
                R = i(78940),
                N = i(55693),
                P = i(39079),
                L = i(72288),
                I = i(81877),
                O = i(49738),
                E = i(91292),
                M = i(56862),
                w = i(16704),
                S = i(56446),
                B = i(36207),
                z = i(43161),
                D = i(93434),
                V = i.n(D);
            let U = (0, a.PA)((e) => {
                let { artist: t, className: i, children: a, contentLinesCount: D, topTitleElement: U, bottomTitleElement: F } = e,
                    K = (0, c.D)(),
                    {
                        trailer: W,
                        user: H,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: q, utmLink: X } = (0, k.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: Y } = (0, s.A)(),
                    [G, Z] = (0, o.useState)(!1),
                    [Q, J] = (0, o.useState)(!1),
                    [ee, et] = (0, o.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: en } = (0, N.z)(),
                    ea = (0, d.S)(),
                    eo = (0, u.g)(),
                    es = (0, A.K)(t),
                    el = (0, C.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    e_ = (0, R.Z)(t.url),
                    [ev, ep] = (0, o.useState)(!1),
                    ef = (0, j.F)(),
                    ex = (0, y.P)(),
                    eh = (0, v.c)((e) => {
                        if ((e.stopPropagation(), ex())) return void e.preventDefault();
                        (W.openArtistTrailer(t.id), ef(l.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, o.useMemo)(() => {
                        let e = Y({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? Y({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, Y]),
                    { isPlaying: eg, togglePlay: eA } = (0, P.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ec) }, from: q, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eC = (0, g.S)({ artist: t, callback: e_ }),
                    ey = (0, g.S)({ artist: t, callback: eA }),
                    ej = (0, v.c)((e) => {
                        (null == er || er(), ea({ to: l.AppScreen.ArtistScreen }), eC(e));
                    }),
                    ek = (0, T.N)(),
                    eT = (0, v.c)(() => {
                        if (!ex()) {
                            if (ek) return void $.open();
                            (G || eg || (Z(!0), null == en || en()), ey(), eg || eo());
                        }
                    }),
                    eR = (0, v.c)(() => {
                        (Q || em || (J(!0), null == ei || ei()), es());
                    }),
                    eN = (0, v.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, v.c)((e) => {
                        (et(e), ep(e));
                    }),
                    eL = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: ee,
                                    onClick: eN,
                                    className: (0, n.$)(V().menuButton, V().control),
                                    size: 's',
                                    icon: (0, r.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eN, eP, ee],
                    ),
                    eI = (0, o.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(S.k, {
                                        className: (0, n.$)(V().trailerButton, V().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eh,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eh]),
                    eO = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                M.O,
                                { onClick: el, isPinned: t.isPinned, className: (0, n.$)(V().pinButton, V().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, el],
                    ),
                    eE = (0, p.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                f.hg,
                                {
                                    isVisible: ee || ev,
                                    className: V().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(V().playButton, V().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: eg,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        O.c,
                                        {
                                            className: (0, n.$)(V().likeButton, V().control),
                                            isLiked: em,
                                            onClick: eR,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !H.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eL,
                                    pinControl: eO,
                                    trailerControl: eI,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eM = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: V().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: V().coverBlock,
                                    onClick: ej,
                                    children: [
                                        (0, r.jsx)(I.B, {
                                            className: V().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [ej, eu, eb, t.isAvailable, eE],
                    );
                return (0, r.jsx)(f.MN, {
                    ref: K,
                    className: (0, n.$)(V().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(b.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(E.N, {
                                    className: V().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: ej,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, r.jsx)(E.N, { className: V().srTitleLink, href: t.url, onClick: ej, children: eb }),
                    contentLinesCount: D,
                    view: eM,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: a,
                });
            });
        },
        23192: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            let r = '#b239f3';
        },
        23324: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoSmall_controls__gzN7o',
                root: 'ArtistRecommendationsPromoSmall_root__P67oC',
                header: 'ArtistRecommendationsPromoSmall_header__eLjLR',
                carousel: 'ArtistRecommendationsPromoSmall_carousel__W39_x',
                item: 'ArtistRecommendationsPromoSmall_item__phKEX',
            };
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [_, v] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (_) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    v(!0);
                    let o = await e.togglePin();
                    (v(!1),
                        o
                            ? i((0, r.jsx)(u.l, { playlist: a }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [t.isAuthorized, _, e, i, m]);
            };
        },
        26645: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => n, w: () => a });
            var r = i(53548);
            let n = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                a = () => (0, r.useContext)(n);
        },
        27766: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { y: () => r }),
                (function (e) {
                    ((e.TOP = 'top'), (e.CENTER = 'center'));
                })(r || (r = {})));
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(88800),
                n = i(15077),
                a = i(42729);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(a.O, {
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32703: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => r });
            let r = (e, t) => {
                let i = Math.min(1, Math.abs(e) / t),
                    r = e * (1 - i ** 2 * (3 - 2 * i)),
                    n = Math.max(0, 1 - 2 * i),
                    a = 1 - i;
                return {
                    '--cover-offset': ''.concat(r, 'px'),
                    '--details-offset': ''.concat((e + r) / 3 - e, 'px'),
                    '--glow-offset': ''.concat(-e, 'px'),
                    '--cover-opacity': String(1 - i / 2),
                    '--details-opacity': String(n ** 2 * (3 - 2 * n)),
                    '--glow-opacity': String(a ** 2 * (3 - 2 * a)),
                };
            };
        },
        33724: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => s });
            var r = i(88800),
                n = i(53323),
                a = i(90109),
                o = i(92867);
            let s = (e) => {
                let t = (0, o.U)(a.Q8);
                return (0, r.jsx)(n.F, { ...e, autoplay: { enabled: t, delay: 5e3, stopOnMouseEnter: !0, stopOnFocusIn: !0, stopOnInteraction: !1 } });
            };
        },
        36509: (e) => {
            e.exports = { root: 'Q2vCardView_root__yJM3K', image: 'Q2vCardView_image__GBloF' };
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                m = i(17392),
                _ = i(18593),
                v = i(29993),
                p = i(79070),
                f = i(29832),
                x = i(52300),
                h = i(7555),
                b = i(29504),
                g = i(13946),
                A = i(85902),
                C = i(24460),
                y = i(5407),
                j = i(57934),
                k = i(84384),
                T = i(4795),
                R = i(78940),
                N = i(55693),
                P = i(39079),
                L = i(72288),
                I = i(86298),
                O = i(81877),
                E = i(49738),
                M = i(91292),
                w = i(56862),
                S = i(16704),
                B = i(56446),
                z = i(36207),
                D = i(47513),
                V = i(19934),
                U = i(48749),
                F = i(22505),
                K = i(9618),
                W = i(95210),
                H = i(46936),
                $ = i(97956),
                q = i(93091),
                X = i(27817),
                Y = i(15425);
            let G = (0, a.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: a, ...o } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, K.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: _ },
                        trailer: p,
                        user: f,
                    } = (0, L.g)(),
                    x = (0, A.K)(i),
                    h = (0, C.A)(i),
                    b = (0, j.F)(),
                    { formatMessage: g } = (0, s.A)(),
                    k = (0, y.P)(),
                    T = u.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    R = (0, U.A)({ entityVariant: H.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, W.N)(a);
                let N = (0, v.c)(() => {
                    if (c) return void d();
                    k() || (p.openPlaylistTrailer(i.id), b(l.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), n?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, r.jsxs)(V.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: a,
                    offsetOptions: 10,
                    isMobile: _,
                    ariaLabel: g({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...o,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        T && (0, r.jsx)(F.d, { entityVariant: H.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : R }),
                        !_ && (0, r.jsx)(X.L, { onClick: h, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !f.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(V.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(Y.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var Z = i(17657),
                Q = i.n(Z);
            let J = (0, a.PA)((e) => {
                let { className: t, playlist: i, children: a, contentLinesCount: V, customDescription: U, onCoverMouseDown: F } = e,
                    K = (0, c.D)(),
                    {
                        trailer: W,
                        user: H,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: q, utmLink: X } = (0, k.f)({ contextId: i.uuid, contextType: _.K.Playlist }),
                    { formatMessage: Y } = (0, s.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, N.z)(),
                    [et, ei] = (0, o.useState)(!1),
                    [er, en] = (0, o.useState)(!1),
                    [ea, eo] = (0, o.useState)(!1),
                    es = (0, D.r)(i),
                    el = (0, A.K)(i),
                    ec = (0, C.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    em = (0, R.Z)(i.url),
                    e_ = (0, j.F)(),
                    ev = (0, y.P)(),
                    ep = (0, v.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (W.setUtmLink(X), W.openPlaylistTrailer(i.id), e_(l.DomainObjectType.Playlist, i.id));
                    }),
                    [ef, ex] = (0, o.useState)(!1),
                    { isPlaying: eh, togglePlay: eb } = (0, P.D)({
                        playContextParams: { contextData: { type: _.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: q, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eg = (0, v.c)(() => {
                        (ed({ to: l.AppScreen.PlaylistScreen }), null == J || J());
                    }),
                    eA = (0, v.c)((e) => {
                        (eg(), em(e));
                    }),
                    eC = (0, T.N)(),
                    ey = (0, v.c)(() => {
                        if (!ev()) {
                            if (eC) return void $.open();
                            (et || eh || (ei(!0), null == ee || ee()), eb(), eh || eu());
                        }
                    }),
                    ej = (0, v.c)(() => {
                        (er || i.isLiked || (en(!0), null == Z || Z()), el());
                    }),
                    ek = (0, v.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eT = (0, v.c)((e) => {
                        (eo(e), ex(e));
                    }),
                    eR = (0, o.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(b.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    g.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eN = (0, p.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                E.c,
                                {
                                    className: (0, n.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ej,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !H.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, o.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(
                                        B.k,
                                        { className: (0, n.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eL = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, n.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eI = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eA,
                                    onMouseDown: F,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: es,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(f.hg, {
                                            isVisible: ea || ef,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                S.D,
                                                {
                                                    className: (0, n.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ey,
                                                    isPlaying: eh,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eN,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eT,
                                                    open: ea,
                                                    onClick: ek,
                                                    className: (0, n.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eL,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eA, F, i, es, ea, ef, ey, eh, eN, eT, ek, eL, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(f.MN, {
                    ref: K,
                    'aria-label': es,
                    className: (0, n.$)(Q().root, t),
                    title: (0, r.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(M.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eg, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(M.N, { className: Q().srTitleLink, href: i.url, onClick: eg, children: i.title }),
                    contentLinesCount: V,
                    view: eI,
                    description: eR,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(I.x, {
                                ariaLabel: Y({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: el,
                            }),
                        a,
                    ],
                });
            });
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var r = i(88800),
                n = i(84961),
                a = i(2058),
                o = i(87999),
                s = i(17392),
                l = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                v = i(79390),
                p = i(29595),
                f = i(74965),
                x = i(72288),
                h = i(66943),
                b = i(7555),
                g = i(73170),
                A = i(29504),
                C = i(59304),
                y = i(81877),
                j = i(85074),
                k = i.n(j);
            let T = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: o } = e,
                    { formatMessage: s } = (0, a.A)(),
                    l = s(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(C.$, {
                    closeToast: o,
                    message: (0, r.jsxs)('div', {
                        className: k().message,
                        children: [
                            (0, r.jsx)(g.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, r.jsx)(b.t, {
                                className: k().cover,
                                radius: 'round',
                                children: (0, r.jsx)(y.B, { className: k().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: k().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var R = i(64207),
                N = i(77455),
                P = i(48749),
                L = i(22505),
                I = i(5407),
                O = i(64284),
                E = i(98427),
                M = i(57934),
                w = i(84384),
                S = i(9618),
                B = i(95210),
                z = i(47964),
                D = i(46936),
                V = i(97956),
                U = i(98953),
                F = i(32721),
                K = i(18130),
                W = i(56117),
                H = i(93091),
                $ = i(27817),
                q = i(74064),
                X = i(15425),
                Y = i(81066),
                G = i(64546);
            let Z = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: b, onOpenChange: g, open: A, ...C } = e,
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: j } = (0, S.q)(),
                    {
                        settings: { isMobile: k },
                        modals: { artistAboutModal: Z },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(b),
                    ei = (0, R.K)(b),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, f.l)(),
                            [n, o] = (0, _.useState)(!1),
                            { formatMessage: s } = (0, a.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: s({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (n) return;
                            let a = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            o(!0);
                            let l = await e.toggleDislike();
                            (o(!1),
                                l === v.f.OK
                                    ? i((0, r.jsx)(T, { coverUri: a.coverUri, title: a.name, isDisliked: a.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(b),
                    en = (0, M.F)(),
                    ea = ''.concat(O.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: eo } = (0, a.A)(),
                    { utmLink: es } = (0, w.f)({ blockId: O.U.ARTIST, contextType: l.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: el, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == b ? void 0 : b.id) ? i : '' } }),
                    ed = (0, P.A)({ entityVariant: D.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (n = null == b ? void 0 : b.seeds) ? n : [],
                        pageIdForFrom: E.b.RADIO,
                        blockIdForFrom: ea,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    e_ = (0, I.P)(),
                    ev = eo((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (y && J.isAuthorized) return void j();
                        eu || em();
                    }),
                    ef = (0, c.c)(() => {
                        if (!e_()) {
                            if (y) return void j();
                            (null == b ? void 0 : b.id) && (Q.setUtmLink(es), Q.openArtistTrailer(b.id), en(o.DomainObjectType.Artist, b.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Z.open(null == b ? void 0 : b.id);
                    });
                (0, B.N)(A);
                let eh = { variant: U.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ec },
                    eb = ee.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    eg = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(V.z.WebNextArtistInfo, 'on'),
                    eC = !ee.checkExperiment(V.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: k,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: g,
                    ariaLabel: eo({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: s.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...C,
                    children: [
                        eb && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(L.d, { entityVariant: D.D.ARTIST, adminUrl: ed }) }),
                        !k && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)($.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(H.T, {
                                onClick: ei,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !J.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        eg && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ef }) }),
                        eC &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(Y.C, { onClick: ep, disabled: !(null == b ? void 0 : b.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: g }),
                            }),
                        (0, r.jsx)(q.H, { disabled: !b, shareLink: el, entityMeta: eh }),
                        eA &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': s.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => C });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(21284),
                c = i(29993),
                d = i(79070),
                u = i(78275),
                m = i(90688),
                _ = i(19994),
                v = i(69704),
                p = i(35402),
                f = i(35412);
            let x = (e, t, i) => {
                let r = (r) => {
                    let n = (r + e / 30) % 12,
                        a = t * Math.min(i, 1 - i);
                    return i - a * Math.max(-1, Math.min(n - 3, 9 - n, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var h = i(8655);
            let b = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var g = i(68817),
                A = i.n(g);
            let C = (0, a.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [g, C] = (0, o.useState)(null),
                    { state: y, toggleTrue: j } = (0, u.e)(!1),
                    { state: k, toggleTrue: T, toggleFalse: R } = (0, u.e)(!1),
                    { theme: N } = (0, v.W)(),
                    P = (0, o.useRef)(null),
                    L = t.entityType === l.h.ARTIST,
                    I = t.entityType === l.h.ALBUM || t.entityType === l.h.TRACK || t.entityType === l.h.PLAYLIST,
                    O = t.cover.color,
                    E = t.cover.uri,
                    M = (0, c.c)(async () => {
                        if (y) {
                            if (!O) return void T();
                            if (N) {
                                R();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: r,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: r } = e,
                                            { h: n, s: a, l: o } = (0, f.g8)(t);
                                        if (r) {
                                            if (i === h.S.Dark) {
                                                let e = b(a + 5, 50, 100);
                                                return { color: x(n, e, b(o - 40, 12, 25)), glow1: x(n, e, b(o - 5, 45, 60)), glow2: x(n, e, b(o + 35, 80, 90)) };
                                            }
                                            let e = b(a - 2, 50, 100);
                                            return { color: x(n, e, b(o + 43, 80, 95)), glow1: x(n, e, b(o + 5, 45, 75)), glow2: x(n, e, b(o, 35, 55)) };
                                        }
                                        return { color: x(n, (a > 25 ? Math.min(a + 25, 60) : a) / 100, (o > 20 ? Math.min(o + 15, 60) : o) / 100) };
                                    })({ averageColor: O, theme: N, custom: !t.entityType }),
                                    n = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: r },
                                        ],
                                    });
                                (await (null == g ? void 0 : g.setThemeData(n)), T());
                            }
                        }
                    }),
                    w = (0, c.c)(() => {
                        (j(), M());
                    });
                ((0, o.useEffect)(() => {
                    i ? null == g || g.play() : null == g || g.pause();
                }, [g, i]),
                    (0, o.useEffect)(() => {
                        M();
                    }, [O, M, N, y]),
                    (0, o.useEffect)(() => {
                        if (g)
                            return (
                                g.setUseFrameInterpolation(!1),
                                g.setRenderConfig({ devicePixelRatio: 0.1 }),
                                g.addEventListener('load', w),
                                () => {
                                    g.removeEventListener('load', w);
                                }
                            );
                    }, [g, w]));
                let S = !y || !k,
                    B = (0, d.L)(() => {
                        if (!P.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(P.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: P,
                    className: (0, n.$)(A().root, a, { [A().root_loading]: S }),
                    style: B,
                    'data-test-id': S ? s.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(A().cover, { [A().cover_round]: L, [A().cover_square]: I, [A().cover_loading]: S }),
                            children: [
                                t.entityType &&
                                    E &&
                                    (0, r.jsx)(m._V, { src: E, size: 200, fit: 'cover', withAvatarReplace: !0, className: A().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(p.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: C, className: A().animation }),
                            ],
                        }),
                        (0, r.jsx)(_.W, { className: (0, n.$)(A().shimmer, { [A().shimmer_loading]: S }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        47234: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__xEvp3',
                cardLink: 'ArtistRecommendationCard_cardLink__oqxtE',
                info: 'ArtistRecommendationCard_info__CfnQI',
                playButton: 'ArtistRecommendationCard_playButton__pVx58',
                playIcon: 'ArtistRecommendationCard_playIcon__xNRJz',
            };
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var r = i(53548),
                n = i(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, n.A)();
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
        49034: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var r = i(53548),
                n = i(8840),
                a = i(4086),
                o = i(41928),
                s = i(39318),
                l = i(26645);
            let c = (e) => {
                var t;
                let { id: i, ref: c, intersectionPropertyId: d = s.N } = e,
                    { config: u, isOnboardingOpened: m, setIsOnboardingOpened: _ } = (0, l.w)(),
                    v = (0, r.useRef)(!1),
                    p = (0, n.BL)([{ current: c }], !c),
                    { isIntersecting: f } = null != (t = p[d]) ? t : {},
                    x = (0, o.N)().get(a.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, r.useEffect)(() => {
                    if (v.current && f) {
                        let e = u.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && x.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [u, i, f, x, p, c]),
                u)) {
                    let r = x.get(t);
                    if (n) {
                        if (null == m ? void 0 : m.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return ((v.current = !0), _(!0), !0);
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        49784: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => l });
            var r = i(53548),
                n = i(63582),
                a = i(89846),
                o = i(245),
                s = i(22681);
            let l = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, r.useRef)(!1),
                    i = (0, o.N)(),
                    { hash: n } = (0, a.g)(),
                    l = (0, s.w)(),
                    c = (0, r.useMemo)(() => (l ? i.createBlockReporter(l.snapshot) : null), [i, l]);
                (0, r.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, n, c, l]);
            });
        },
        50493: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var r = i(88800),
                n = i(84961),
                a = i(53548),
                o = i(87999),
                s = i(49784),
                l = i(7833),
                c = i(42078),
                d = i(10079),
                u = i(21256),
                m = i(41911),
                _ = i(84200),
                v = i(99839),
                p = i(47934);
            let f = (0, n.PA)((e) => {
                    var t;
                    let {
                        forwardRef: i,
                        isShimmerVisible: n,
                        isShimmerActive: f,
                        containerClassName: x,
                        headerClassName: h,
                        meta: b,
                        data: g,
                        headingVariant: A,
                        className: C,
                        isLoaded: y,
                        shouldSendAnalyticsOnLoaded: j,
                        ...k
                    } = e;
                    return (
                        (0, s.W)({ enabled: !!j && y }),
                        (0, r.jsx)(p.O, {
                            className: C,
                            ...k,
                            isShimmerVisible: n,
                            isShimmerActive: f,
                            containerClassName: x,
                            headerClassName: h,
                            title: b.title,
                            description: b.description,
                            viewAllActionLink: b.viewAllActionLink,
                            ref: i,
                            headingVariant: A,
                            children:
                                null == g || null == (t = g.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case c._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: o.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(m.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case c._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: o.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(d.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case c._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: o.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(u.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case c._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: o.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(_.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case c._.PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: o.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(m.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case c._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(a.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                x = (0, a.forwardRef)((e, t) => (0, r.jsx)(f, { forwardRef: t, ...e }));
        },
        52455: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => c });
            var r,
                n = i(53548),
                a = {
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (a[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useResize = void 0));
                let e = s(810),
                    t = s(1848);
                l.useResize = (i, r) => {
                    (0, e.useEffect)(() => {
                        let e = (0, t.getElementFromRefOrElement)(r);
                        if (null === e) return;
                        let n = null != e ? e : document.documentElement,
                            a = new ResizeObserver(i);
                        return (a.observe(n), () => a.disconnect());
                    }, [r, i]);
                };
            })(),
                l.__esModule);
            var c = l.useResize;
        },
        53451: (e) => {
            e.exports = {
                root: 'ArtistRecommendationMeta_root__dC_aM',
                artists: 'ArtistRecommendationMeta_artists__niyXH',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__d6sv6',
                title: 'ArtistRecommendationMeta_title__c1754',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__OS5kY',
                avatars: 'ArtistRecommendationMeta_avatars__BxEpG',
                avatar: 'ArtistRecommendationMeta_avatar__C_PmW',
                artistNames: 'ArtistRecommendationMeta_artistNames__XOYKP',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__eCGdG',
                root_active: 'ArtistRecommendationMeta_root_active__gqS_L',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                n = i(4370),
                a = i(15077),
                o = i(42729);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(o.O, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54488: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => d });
            var r,
                n = i(87819),
                a = i(53548),
                o = {
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    3940: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = i(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    4012: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var r = i(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return r.useMergeRefs;
                            },
                        });
                    },
                    1964: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (o[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useLongPress = void 0));
                let e = l(810),
                    t = l(792),
                    i = l(3940),
                    r = l(4012);
                c.useLongPress = function () {
                    let {
                            ref: n,
                            onLongPress: a,
                            delay: o = 500,
                            movementThreshold: s = 10,
                            disabled: l = !1,
                            allowMouse: c = !1,
                            scale: d,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        [u, m] = (0, i.useForceUpdateRef)(),
                        _ = (0, r.useMergeRefs)([m, n]),
                        [v, p] = (0, e.useState)(!1),
                        [f, x] = (0, e.useState)(!1),
                        h = (0, e.useRef)(void 0),
                        b = (0, t.useCallbackRef)((e, t) => (null == a ? void 0 : a(e, t))),
                        g = (0, t.useCallbackRef)(() => {
                            var e;
                            (null == (e = h.current) || e.call(h), x(!1));
                        });
                    return (
                        (0, e.useEffect)(() => {
                            let e, t, i, r;
                            if (!u || l) return;
                            let n = u.ownerDocument,
                                a = n.defaultView;
                            if (!a) return;
                            let m = new AbortController();
                            function _() {
                                (a.clearTimeout(i), (i = void 0), null == r || r.cancel(), (r = void 0), (e = void 0), p(!1), null == t || t.abort(), (t = void 0));
                            }
                            function v(t) {
                                e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > s && _();
                            }
                            function f(t) {
                                t.pointerId === (null == e ? void 0 : e.pointerId) && _();
                            }
                            function g(t) {
                                t.pointerId !== (null == e ? void 0 : e.pointerId) && _();
                            }
                            function A() {
                                'hidden' === n.visibilityState && _();
                            }
                            return (
                                (h.current = _),
                                u.addEventListener(
                                    'pointerdown',
                                    (s) => {
                                        var l;
                                        let m = 'touch' === s.pointerType || 'pen' === s.pointerType || (c && 'mouse' === s.pointerType);
                                        if (e || !s.isPrimary || 0 !== s.button || !m) return;
                                        ((e = s),
                                            (t = new AbortController()),
                                            p(!0),
                                            x(!1),
                                            void 0 !== d &&
                                                d > 0 &&
                                                Number.isFinite(d) &&
                                                !(null == (l = a.matchMedia) ? void 0 : l.call(a, '(prefers-reduced-motion: reduce)').matches) &&
                                                u.animate &&
                                                (r = u.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(d, ')') }], {
                                                    duration: 150,
                                                    easing: 'ease-out',
                                                    fill: 'forwards',
                                                    composite: 'add',
                                                })));
                                        let h = t.signal;
                                        (n.addEventListener('pointermove', v, { capture: !0, passive: !0, signal: h }),
                                            n.addEventListener('pointerup', f, { capture: !0, signal: h }),
                                            n.addEventListener('pointercancel', f, { capture: !0, signal: h }),
                                            n.addEventListener('lostpointercapture', f, { capture: !0, signal: h }),
                                            n.addEventListener('pointerdown', g, { capture: !0, signal: h }),
                                            n.addEventListener('scroll', _, { capture: !0, passive: !0, signal: h }),
                                            n.addEventListener('visibilitychange', A, { signal: h }),
                                            a.addEventListener('scroll', _, { passive: !0, signal: h }),
                                            a.addEventListener('blur', _, { signal: h }),
                                            (i = a.setTimeout(() => {
                                                if (((i = void 0), !u.isConnected)) return void _();
                                                (((e, t) => {
                                                    let i,
                                                        r = e.ownerDocument,
                                                        n = r.defaultView;
                                                    if (!n) return;
                                                    let a = new AbortController(),
                                                        o = !1;
                                                    function s() {
                                                        (n.clearTimeout(i), a.abort());
                                                    }
                                                    function l(e) {
                                                        e.pointerId === t.pointerId && ((o = !0), n.clearTimeout(i), (i = n.setTimeout(s, 750)));
                                                    }
                                                    i = n.setTimeout(s, 6e4);
                                                    let c = a.signal;
                                                    (r.addEventListener(
                                                        'click',
                                                        function (i) {
                                                            let r = 'pointerId' in i ? i.pointerId === t.pointerId : i.composedPath().includes(e);
                                                            0 !== i.detail && r && (i.preventDefault(), i.stopPropagation(), s());
                                                        },
                                                        { capture: !0, signal: c },
                                                    ),
                                                        r.addEventListener(
                                                            'pointerdown',
                                                            function () {
                                                                o && s();
                                                            },
                                                            { capture: !0, signal: c },
                                                        ),
                                                        r.addEventListener(
                                                            'contextmenu',
                                                            function (i) {
                                                                'mouse' !== t.pointerType && i.composedPath().includes(e) && i.preventDefault();
                                                            },
                                                            { capture: !0, signal: c },
                                                        ),
                                                        r.addEventListener('pointerup', l, { capture: !0, signal: c }),
                                                        r.addEventListener('pointercancel', l, { capture: !0, signal: c }),
                                                        n.addEventListener('blur', s, { signal: c }));
                                                })(u, s),
                                                    x(!0),
                                                    b(s, u));
                                            }, o)));
                                    },
                                    { passive: !0, signal: m.signal },
                                ),
                                u.addEventListener(
                                    'contextmenu',
                                    (t) => {
                                        e && 'mouse' !== e.pointerType && t.preventDefault();
                                    },
                                    { signal: m.signal },
                                ),
                                () => {
                                    (_(), (h.current = void 0), m.abort());
                                }
                            );
                        }, [u, l, o, s, c, d, b]),
                        { ref: _, isPressing: v, isLongPressed: f, reset: g }
                    );
                };
            })(),
                c.__esModule);
            var d = c.useLongPress;
        },
        54721: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => m });
            var r = i(53548),
                n = i(47149),
                a = i(63582),
                o = i(59791),
                s = i(7695),
                l = i(53534),
                c = i(89846),
                d = i(64543),
                u = i(56374);
            let m = (0, a.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, r.useContext)(o.I),
                    { hash: t } = (0, c.g)(),
                    { screen: i, tab: a } = (0, d.j)(),
                    m = (0, r.useContext)(l.k)?.session,
                    { current: _ } = (0, r.useRef)(Symbol()),
                    v = !!i,
                    p = (r) => {
                        if (!e || !m || !i?.pageId || void 0 === t || !v) return !1;
                        let o = {
                            hash: t,
                            pageId: i.pageId,
                            pageStyle: i.pageStyle,
                            pagePlacement: i.pagePlacement,
                            mainObjectType: i.mainObjectType,
                            mainObjectId: i.mainObjectId,
                            skeletonId: i.skeletonId,
                            viewUuid: i.screenViewUuid,
                            ...(a ?? s.Ve),
                        };
                        return (r ? m.open(_, () => (0, n.Fn)(e, o)) : m.close(_, () => (0, n.PO)(e, o)), !0);
                    },
                    [f, x] = (0, r.useState)(() => ({ session: m, send: p, opened: !1 })),
                    h = f;
                (f.session !== m && x((h = { session: m, send: p, opened: !1 })),
                    (0, r.useInsertionEffect)(() => {
                        v && void 0 !== t && (h.send = p);
                    }, [h, t, v, p]));
                let b = (0, u.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, r.useEffect)(
                    () => (
                        b(h, !0),
                        () => {
                            (h.opened && b(h, !1), h.session?.release(_));
                        }
                    ),
                    [_, h, b],
                ),
                    (0, r.useEffect)(() => {
                        b(h, !0);
                    }, [h, t, v, b]));
            });
        },
        57072: (e, t) => {
            'use strict';
            t.f = Object.freeze({ xxxxs: 320, xxxs: 480, xxs: 768, xs: 960, s: 1060, m: 1280, l: 1366, xl: 1920, xxl: 2560, xxxl: 3840, tablet: 1024 });
        },
        62960: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => o });
            var r = i(53548),
                n = i(8840);
            let a = (e) => {
                    let t,
                        { callback: i, visibleTime: r, threshold: a } = e;
                    return (0, n.Gv)(
                        (e, n) => {
                            (e.isIntersecting &&
                                (t = setTimeout(() => {
                                    (i(), n.disconnect());
                                }, r)),
                                e.isIntersecting || clearTimeout(t));
                        },
                        { threshold: a },
                    );
                },
                o = (e) => {
                    let { params: t, isLoaded: i } = e,
                        n = (0, r.useRef)(null),
                        o = (0, r.useId)(),
                        s = (0, r.useMemo)(() => {
                            if (i) return t.map(a);
                        }, [i, t]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == s ||
                                    s.forEach((e) => {
                                        n.current && e.observe(n.current);
                                    }),
                                () => {
                                    null == s ||
                                        s.forEach((e) => {
                                            e.disconnect();
                                        });
                                }
                            ),
                            [s],
                        ),
                        { intersectionPropertyId: o, ref: n }
                    );
                };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, a.useState)(!1),
                    { formatMessage: p } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let a = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let o = await e.toggleLike();
                    (v(!1),
                        o === s.f.OK
                            ? i((0, r.jsx)(m.T, { artist: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, p, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var r = i(88800),
                n = i(15077),
                a = i(33719);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        68817: (e) => {
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
        69413: (e) => {
            e.exports = {
                root: 'VibeAgentContextMenu_root__yaXWX',
                menu: 'VibeAgentContextMenu_menu____sN1',
                menuItem: 'VibeAgentContextMenu_menuItem__FB1F1',
                touchAnchor: 'VibeAgentContextMenu_touchAnchor__uuOj9',
                touchTrigger: 'VibeAgentContextMenu_touchTrigger__e8jWW',
            };
        },
        72714: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => X });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(35412),
                l = i(87999),
                c = i(7833),
                d = i(17392),
                u = i(53323),
                m = i(72288),
                _ = i(97956),
                v = i(18486),
                p = i(31764),
                f = i(29993),
                x = i(52455),
                h = i(79070),
                b = i(90109),
                g = i(92867),
                A = i(32703),
                C = i(74804),
                y = i(33724),
                j = i(62414),
                k = i(83295),
                T = i(91292),
                R = i(16704),
                N = i(13988),
                P = i(76636),
                L = i(27766),
                I = i(81877),
                O = i(4550),
                E = i(92227),
                M = i.n(E);
            let w = (0, a.PA)((e) => {
                let { promo: t, isActive: i } = e,
                    a = (0, o.useMemo)(() => (0, O.d)(t.averageColor), [t.averageColor]);
                return (0, r.jsx)('div', {
                    className: (0, n.$)(M().root, { [M().root_active]: i }),
                    style: a,
                    children: (0, r.jsx)('div', {
                        className: M().coverContainer,
                        children: (0, r.jsx)(I.B, {
                            className: (0, n.$)(M().cover, { [M().cover_withTopPosition]: t.coverContentMode === L.y.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 600,
                            fit: 'cover',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var S = i(29504),
                B = i(13946),
                z = i(90224),
                D = i(53451),
                V = i.n(D);
            let U = (0, a.PA)((e) => {
                let { promo: t, isActive: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(V().root, { [V().root_active]: i }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: V().titleContainer,
                            children: [
                                (0, r.jsx)(S.DZ, { variant: 'div', size: 'xs', lineClamp: 2, className: V().title, children: t.album.title }),
                                t.album.explicitDisclaimer &&
                                    (0, r.jsx)(z.N, {
                                        containerClassName: V().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: V().artists,
                            children: [
                                t.avatarArtists.length > 0 &&
                                    (0, r.jsx)('div', {
                                        className: V().avatars,
                                        'aria-hidden': !0,
                                        children: t.avatarArtists.map((e) =>
                                            (0, r.jsx)(I.B, { className: V().avatar, src: e.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                                        ),
                                    }),
                                (0, r.jsx)(B.i, {
                                    className: V().artistNames,
                                    captionClassName: V().artistCaption,
                                    artists: t.artists,
                                    lineClamp: 1,
                                    captionSize: 'm',
                                    withLink: !1,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var F = i(953),
                K = i.n(F);
            let W = (0, a.PA)((e) => {
                let { promo: t, isActive: i, isScrollAnimationEnabled: a } = e,
                    o = (0, j.D)(),
                    { ref: s } = (0, P.H)({ promo: t }),
                    { isPlaying: l, handleNavigate: c, handlePlayButtonClick: u } = (0, N.Z)({ promo: t }),
                    m = (0, k.S)([o, s]),
                    _ = (0, f.c)((e) => {
                        a && !i && e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center' });
                    });
                return (0, r.jsxs)('div', {
                    ref: m,
                    className: (0, n.$)(K().root, { [K().root_active]: i }),
                    onFocus: _,
                    'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, r.jsxs)(T.N, {
                            className: K().cardLink,
                            href: t.albumUrl,
                            onClick: c,
                            'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, r.jsx)(w, { promo: t, isActive: i }), (0, r.jsx)(U, { promo: t, isActive: i })],
                        }),
                        (0, r.jsx)(R.D, {
                            className: K().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            size: 'm',
                            iconSize: 'xs',
                            isPlaying: l,
                            onClick: u,
                            disabled: !t.album.isAvailable,
                        }),
                    ],
                });
            });
            var H = i(10448),
                $ = i.n(H);
            let q = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: a,
                            isLoaded: j,
                            setOutdated: k,
                            meta: T,
                            className: R,
                            containerClassName: N,
                            headerClassName: P,
                            headingVariant: L,
                            ...I
                        } = e,
                        { experiments: O } = (0, m.g)(),
                        {
                            carouselRef: E,
                            activeIndex: M,
                            isScrollAnimationEnabled: w,
                            onScroll: S,
                        } = ((e) => {
                            let t = (0, o.useRef)(null),
                                i = (0, o.useRef)(null),
                                [r, n] = (0, o.useState)(0),
                                a = (0, g.U)(b.Q8),
                                s = (0, f.c)(() => {
                                    a &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let e = t.current;
                                            if (!e) return;
                                            let a = e.getBoundingClientRect(),
                                                o = Array.from(e.children),
                                                s = ((e, t) => {
                                                    let i = e.left + e.width / 2,
                                                        r = 0,
                                                        n = 1 / 0,
                                                        a = t.map((e, t) => {
                                                            if (!e || !e.width) return null;
                                                            let a = e.left + e.width / 2 - i,
                                                                o = Math.abs(a);
                                                            return (o < n && ((r = t), (n = o)), (0, A.A)(a, e.width));
                                                        });
                                                    return { activeIndex: r, itemStyles: a };
                                                })(
                                                    a,
                                                    o.map((e) => (e instanceof HTMLElement ? e.getBoundingClientRect() : null)),
                                                );
                                            (o.forEach((e, t) => {
                                                let i = s.itemStyles[t];
                                                if (e instanceof HTMLElement && i) for (let [t, r] of Object.entries(i)) e.style.setProperty(t, r);
                                            }),
                                                s.activeIndex !== r && n(s.activeIndex));
                                        }));
                                });
                            return (
                                (0, x.s)(s, t),
                                (0, o.useEffect)(
                                    () => (
                                        s(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, s, a],
                                ),
                                (0, h.L)(() => ({ carouselRef: t, activeIndex: r, isScrollAnimationEnabled: a, onScroll: s }))
                            );
                        })(null != (t = null == a ? void 0 : a.items.length) ? t : 0),
                        { ref: B, intersectionPropertyId: z } = (0, C.J)({ data: a, isLoaded: j, setOutdated: k, forwardedRef: i }),
                        D = O.checkExperiment(_.z.WebNextArtistRecommendationsAutoScroll, 'on') ? y.i : u.F;
                    return (0, r.jsxs)('section', {
                        className: (0, n.$)($().root, R),
                        ref: B,
                        'data-intersection-property-id': z,
                        ...(0, s.OZ)(I),
                        children: [
                            (0, r.jsx)(v.T, {
                                className: (0, n.$)($().header, P),
                                title: T.title,
                                headingVariant: L,
                                controls: (0, r.jsx)(p.X, { className: $().controls, carouselRef: E }),
                            }),
                            (0, r.jsx)(D, {
                                ref: E,
                                className: (0, n.$)($().carousel, $().important, N),
                                itemClassName: $().item,
                                onScroll: S,
                                'data-test-id': d.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == a
                                        ? void 0
                                        : a.items.map((e, t) =>
                                              (0, r.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: l.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(W, { promo: e, isActive: t === M, isScrollAnimationEnabled: w }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                X = (0, o.forwardRef)((e, t) => (0, r.jsx)(q, { forwardRef: t, ...e }));
        },
        74804: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var r = i(53548),
                n = i(29993),
                a = i(83295),
                o = i(62960);
            let s = (e) => {
                var t, i;
                let { data: s, isLoaded: l, forwardedRef: c, setOutdated: d } = e,
                    { report: u, reporting: m } = null != s ? s : {},
                    _ = null == m ? void 0 : m.blockRender.url,
                    v = null != (t = null == m ? void 0 : m.blockRender.timeMs) ? t : 0,
                    p = null == m ? void 0 : m.blockImpression.url,
                    f = null != (i = null == m ? void 0 : m.blockImpression.timeMs) ? i : 2100,
                    x = (0, n.c)(d),
                    h = (0, r.useMemo)(
                        () => [
                            {
                                threshold: 0,
                                visibleTime: v,
                                callback: () => {
                                    _ && (null == u || u(_));
                                },
                            },
                            {
                                threshold: 0.5,
                                visibleTime: f,
                                callback: () => {
                                    (p && (null == u || u(p)), x());
                                },
                            },
                        ],
                        [_, v, p, f, u, x],
                    ),
                    { ref: b, intersectionPropertyId: g } = (0, o.h)({ isLoaded: l, params: h });
                return { ref: (0, a.S)([b, c]), intersectionPropertyId: g };
            };
        },
        76636: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(53548),
                n = i(62960);
            let a = (e) => {
                let { promo: t } = e,
                    { adImpressions: i, reportImpression: a } = t,
                    { url: o, timeMs: s } = i,
                    l = (0, r.useMemo)(
                        () => [
                            {
                                threshold: 0,
                                visibleTime: s,
                                callback: () => {
                                    o && a();
                                },
                            },
                        ],
                        [a, o, s],
                    ),
                    { ref: c } = (0, n.h)({ isLoaded: !0, params: l });
                return { ref: c };
            };
        },
        77356: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [_, v] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (_) return;
                    let a = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let o = await e.togglePin();
                    (v(!1),
                        o
                            ? i((0, r.jsx)(u.l, { artist: a }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        81438: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => o });
            var r = i(72288),
                n = i(8655),
                a = i(69704);
            let o = () => {
                var e, t, i, o, s, l;
                let { lumen: c } = (0, r.g)(),
                    { theme: d } = (0, a.W)(),
                    u = null != d ? d : n.S.Dark,
                    m = null == (e = c.themes) ? void 0 : e[u],
                    _ = c.getFallbackImage()[u],
                    v = null != (o = null == m ? void 0 : m.cover.uri) ? o : _;
                return {
                    cover: v,
                    fullCover: null != (s = null == m || null == (t = m.fullCover) ? void 0 : t.uri) ? s : v,
                    faceCover: null != (l = null == m || null == (i = m.faceCover) ? void 0 : i.uri) ? l : v,
                    solidColor: null == m ? void 0 : m.solidColor,
                    fallbackImage: _,
                };
            };
        },
        83295: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var r = i(87819),
                n = {
                    1964: (e) => {
                        e.exports = r;
                    },
                },
                a = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useMergeRefs = void 0));
                var e = (function e(t) {
                    var i = a[t];
                    if (void 0 !== i) return i.exports;
                    var r = (a[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(1964);
                Object.defineProperty(o, 'useMergeRefs', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                o.__esModule);
            var s = o.useMergeRefs;
        },
        83680: (e) => {
            e.exports = {
                avatars: 'ArtistRecommendationMeta_avatars__V_d1k',
                avatar: 'ArtistRecommendationMeta_avatar__eMG0L',
                artistNames: 'ArtistRecommendationMeta_artistNames__U_jyi',
                title: 'ArtistRecommendationMeta_title__nJC7r',
                title_truncated: 'ArtistRecommendationMeta_title_truncated__JCiKf',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__aSIht',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__P1l5b',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__xtdrP',
            };
        },
        83961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var r,
                n = i(53548),
                a = {
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    588: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let r = i(810),
                            n = i(1848);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let i = (0, n.getElementFromRefOrElement)(t);
                                if (null === i) return;
                                let r = null != i ? i : document.documentElement,
                                    a = new ResizeObserver(e);
                                return (a.observe(r), () => a.disconnect());
                            }, [t, e]);
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (a[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useTruncate = void 0));
                let e = s(810),
                    t = s(588),
                    i = s(792);
                l.useTruncate = function (r) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                        [a, o] = (0, e.useState)(0),
                        [s, l] = (0, e.useState)(!1);
                    (0, e.useEffect)(() => {
                        var e;
                        let t = null == (e = r.current) ? void 0 : e.offsetHeight;
                        a || !t || ('vertical' === n && o(t));
                    }, [a, n, r]);
                    let c = (0, i.useCallbackRef)(() => {
                        let e = r.current;
                        e && ('horizontal' === n && l(e.scrollWidth > e.clientWidth), 'vertical' === n && l(e.offsetHeight > 0 && a < e.scrollHeight));
                    });
                    return ((0, t.useResize)(c, r), { isTruncated: s });
                };
            })(),
                l.__esModule);
            var c = l.useTruncate;
        },
        84200: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => W });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(64543),
                l = i(62414),
                c = i(33979),
                d = i(17392),
                u = i(29993),
                m = i(54488),
                _ = i(79070),
                v = i(29832),
                p = i(29504),
                f = i(16112),
                x = i(90688),
                h = i(81438),
                b = i(72288),
                g = i(23192),
                A = i(36509),
                C = i.n(A);
            let y = (0, a.PA)(() => {
                let { lumen: e } = (0, b.g)(),
                    { cover: t, fallbackImage: i, solidColor: n } = (0, h.x)(),
                    a = e.isEnabled ? t : i;
                return (
                    (0, o.useEffect)(() => {
                        e.isEnabled && !e.themes && e.getData();
                    }, [e]),
                    (0, r.jsx)('div', {
                        className: C().root,
                        style: { '--glow-color': n || g.R },
                        children: (0, r.jsx)(x._V, {
                            alt: '',
                            className: C().image,
                            src: a,
                            fit: 'contain',
                            draggable: !1,
                            withAvatarReplace: !0,
                            withFallback: !1,
                            withLoadingIndicator: !1,
                            'data-test-id': d.OA.vibe.Q2V_CARD_IMAGE,
                        }),
                    })
                );
            });
            var j = i(2147),
                k = i(45347),
                T = i(47964),
                R = i(97956),
                N = i(90420),
                P = i(52726),
                L = i(49738),
                I = i(56862),
                O = i(16704),
                E = i(64546),
                M = i(2058),
                w = i(52300),
                S = i(19934),
                B = i(21869),
                z = i(68974),
                D = i(69413),
                V = i.n(D);
            let U = (0, a.PA)((e) => {
                let { vibe: t, open: i, onOpenChange: n } = e,
                    {
                        settings: { isMobile: a },
                    } = (0, b.g)(),
                    { formatMessage: o } = (0, M.A)(),
                    s = (0, j.K)(t, { showNotificationOnMobile: !0 }),
                    l = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    c = o({ id: 'interface-actions.context-menu' });
                return (0, r.jsxs)(S.W1, {
                    className: a ? V().touchTrigger : V().root,
                    wrapperClassName: a ? V().touchAnchor : void 0,
                    menuClassName: V().menu,
                    isMobile: !1,
                    open: i,
                    onOpenChange: n,
                    onClick: l,
                    icon: a ? null : (0, r.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                    size: 's',
                    offsetOptions: a ? 4 : 10,
                    shiftPadding: 8,
                    transition: a ? { duration: 0 } : void 0,
                    disabled: a,
                    'aria-hidden': a || void 0,
                    tabIndex: a ? -1 : void 0,
                    ariaLabel: c,
                    submenuProps: { 'aria-label': c, 'aria-labelledby': void 0 },
                    containerDataTestId: d.OA.vibe.VIBE_AGENT_CONTEXT_MENU,
                    'data-test-id': d.OA.vibe.VIBE_AGENT_CONTEXT_MENU_BUTTON,
                    children: [
                        (0, r.jsx)(E.WithOffline, { fallback: (0, r.jsx)(B.S, { vibe: t, className: V().menuItem, onLikeClick: s }) }),
                        (0, r.jsx)(z.u, { vibe: t, className: V().menuItem }),
                    ],
                });
            });
            var F = i(4609),
                K = i.n(F);
            let W = (0, a.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: a = !0, additionalsLinesCount: x = 3, className: h } = e,
                    { screen: g, block: A } = (0, s.j)(),
                    C = null == g ? void 0 : g.pageIdForFrom,
                    M = null == A ? void 0 : A.blockIdForFrom,
                    w = (0, l.D)(),
                    {
                        freeAccess: S,
                        experiments: B,
                        user: z,
                        settings: { isMobile: D },
                    } = (0, b.g)(),
                    V = B.checkExperiment(R.z.WebNextWaveLikesAndShares, 'on') && t.isLikeEnabled && t.stationType !== N.q7,
                    F = V && z.isAuthorized,
                    [W, H] = (0, o.useState)(!1),
                    $ = F && W,
                    q = (0, u.c)(() => H(!0)),
                    { ref: X } = (0, m.H)({ ref: w, disabled: !F || !D, onLongPress: q }),
                    [Y, G] = (0, o.useState)(!1),
                    Z = (0, f.A)(t),
                    Q = (0, j.K)(t, { showNotificationOnMobile: !0 }),
                    J = (0, u.c)((e) => e.stopPropagation()),
                    { isPlaying: ee, togglePlay: et } = (0, T.B)({ seeds: t.seeds, pageIdForFrom: C, blockIdForFrom: M }),
                    ei = (0, c.g)(),
                    er = (0, o.useCallback)(() => {
                        !S.isVibeStartRestricted && (et(), ee || ei());
                    }, [S.isVibeStartRestricted, et, ee, ei]),
                    en = (0, o.useCallback)(
                        () =>
                            (0, r.jsx)(
                                O.D,
                                {
                                    className: (0, n.$)(K().playButton, K().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: er,
                                    isPlaying: ee,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, er, ee],
                    ),
                    ea = (0, _.L)(() =>
                        (0, r.jsx)(
                            P.S,
                            {
                                isEnabled: S.isVibeStartRestricted,
                                isOpened: Y,
                                onOpenChange: G,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: en,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    eo = (0, _.L)(() =>
                        (0, r.jsx)(I.O, { onClick: Z, isPinned: t.isPinned, className: (0, n.$)(K().pinButton, K().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    es = (0, _.L)(() => {
                        if (V)
                            return (0, r.jsx)(E.WithOffline, {
                                fallback: (0, r.jsx)(L.c, {
                                    className: (0, n.$)(K().likeButton, K().control),
                                    isLiked: t.isLiked,
                                    onClick: Q,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !z.isAuthorized,
                                }),
                            });
                    }),
                    el = (0, _.L)(() => {
                        if (F) return (0, r.jsx)(U, { vibe: t, open: $, onOpenChange: H });
                    }),
                    ec = (0, _.L)(() => {
                        if (D && F)
                            return (0, r.jsx)('div', {
                                className: K().touchMenu,
                                onClick: J,
                                onPointerDown: J,
                                onTouchStart: J,
                                onTouchMove: J,
                                onWheel: J,
                                children: el,
                            });
                    }),
                    ed = (0, _.L)(() => (t.isQ2V ? (0, r.jsx)(y, {}) : t.agent ? (0, r.jsx)(k.s, { agent: t.agent, isPlaying: ee }) : null)),
                    eu = (0, _.L)(() =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)('div', {
                                    className: K().cover,
                                    onClick: er,
                                    children: [
                                        ed,
                                        (0, r.jsx)(v.hg, {
                                            isVisible: Y || $,
                                            className: (0, n.$)(K().controls, { [K().controls_menuOpen]: $ }),
                                            playControl: i ? ea : void 0,
                                            pinControl: eo,
                                            likeControl: es,
                                            menuControl: D ? void 0 : el,
                                        }),
                                    ],
                                }),
                                ec,
                            ],
                        }),
                    );
                return (0, r.jsx)(v.MN, {
                    ref: X,
                    className: (0, n.$)(K().root, h, { [K().root_withVibeActions]: V, [K().root_withContextMenu]: F }),
                    contentLinesCount: x,
                    view: eu,
                    textPosition: 'center',
                    wrapperClassName: (0, n.$)({ [K().additionals_hide]: !a }),
                    title: (0, r.jsx)(p.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        p.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': d.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, v] = (0, a.useState)(!1),
                    { formatMessage: p } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                    v(!0);
                    let o = await e.toggleLike();
                    (v(!1),
                        o === s.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
            };
        },
        89009: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(88800),
                n = i(53548),
                a = i(63582),
                o = i(79045);
            let s = (0, a.B)(
                { kind: 'provider', requiredProps: ['tabId', 'tabPos', 'isTabSelectedByDefault'], scope: 'tab' },
                ({ children: e, isTabSelectedByDefault: t, tabId: i, tabPos: a }) => {
                    let s = (0, n.useMemo)(() => ({ isTabSelectedByDefault: t, tabId: i, tabPos: a }), [t, i, a]);
                    return (0, r.jsx)(o.F, { value: s, children: e });
                },
            );
        },
        90109: (e, t, i) => {
            'use strict';
            i.d(t, { Q8: () => n, Y: () => a });
            var r = i(57072);
            let n = '(max-width: '.concat(r.f.xxxs - 0.02, 'px)'),
                a = '(max-width: '.concat(r.f.xs - 0.02, 'px)');
            r.f.xs;
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92227: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__CaNIc',
                cover: 'ArtistRecommendationArtwork_cover__d_2PD',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__ercHQ',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__uo1Ez',
                root_active: 'ArtistRecommendationArtwork_root_active__fB0EI',
            };
        },
        92867: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(53548),
                n = i.t(r, 2),
                a = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var r = (o[t] = { exports: {} });
                    return (a[t](r, r.exports, e), r.exports);
                })(810);
                s.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                s.__esModule);
            var l = s.useIsomorphicEffect;
            let c = (e) => {
                let [t, i] = (0, r.useState)(!1);
                return (
                    l(() => {
                        let t = window.matchMedia(e),
                            r = () => i(t.matches);
                        return (
                            r(),
                            t.addEventListener('change', r),
                            () => {
                                t.removeEventListener('change', r);
                            }
                        );
                    }, [e]),
                    t
                );
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
]);
